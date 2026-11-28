/**
 * Syntax Extensions v1 View SDK (zero dependencies).
 *
 * Usage inside an extension's sandboxed HTML view:
 *   import { connectSyntaxView } from 'https://syntax-platform.github.io/syntax/sdk/syntax-view-v1.js'
 *   const view = await connectSyntaxView({ autoResize: true })
 *   const docs = await view.documents.list()
 */

export const VIEW_BRIDGE_CHANNEL = 'syntax-view-v1'

export function applySyntaxTheme(theme) {
  if (!theme || typeof document === 'undefined') return
  if (theme.mode === 'light' || theme.mode === 'dark') {
    document.documentElement.dataset.theme = theme.mode
    document.documentElement.style.colorScheme = theme.mode
  }
  if (theme.cssVars && typeof theme.cssVars === 'object') {
    for (const [key, value] of Object.entries(theme.cssVars)) {
      if (typeof key === 'string' && key.startsWith('--') && typeof value === 'string') {
        document.documentElement.style.setProperty(key, value)
      }
    }
  }
  if (!document.getElementById('syntax-view-base-theme') && document.head) {
    const style = document.createElement('style')
    style.id = 'syntax-view-base-theme'
    style.textContent =
      ':where(html, body) { background-color: var(--surface, transparent); color: var(--text, inherit); font-family: var(--font-sans, system-ui, sans-serif); }'
    document.head.prepend(style)
  }
}

export function connectSyntaxView(options = {}) {
  const {
    applyTheme = true,
    autoResize = false,
    timeoutMs = 5000,
    callTimeoutMs = 30000,
    onTheme,
    onSettings,
    onError,
  } = options

  return new Promise((resolve, reject) => {
    let disposed = false
    let settled = false
    let initData = null
    let currentTheme = { mode: 'light', cssVars: {} }
    let currentSettings = {}
    let callSeq = 0
    const pending = new Map()
    let resizeObserver = null
    let readyRetryTimer = 0
    let domReadyHandler = null
    let lastReportedHeight = 0

    function send(payload) {
      window.parent.postMessage({ channel: VIEW_BRIDGE_CHANNEL, ...payload }, '*')
    }

    function sendError(message, stack) {
      if (typeof onError === 'function') {
        try {
          onError(message, stack)
        } catch {
          // ignore user error hook exceptions
        }
      }
      if (!initData || disposed) return
      send({
        type: 'syntax:view-error',
        instanceId: initData.instanceId,
        activationId: initData.activationId,
        message: String(message || 'Unhandled view error'),
        stack: typeof stack === 'string' ? stack : undefined,
      })
    }

    function measureBodyHeight() {
      const body = document.body
      if (!body) return 0
      const rectHeight = body.getBoundingClientRect ? body.getBoundingClientRect().height : 0
      const style = window.getComputedStyle ? window.getComputedStyle(body) : null
      const marginY = style
        ? (Number.parseFloat(style.marginTop) || 0) + (Number.parseFloat(style.marginBottom) || 0)
        : 0
      return Math.max(Math.ceil(rectHeight + marginY), body.scrollHeight || 0)
    }

    function reportResize(rawHeight) {
      if (!initData || disposed) return
      const height = Math.round(
        typeof rawHeight === 'number' && Number.isFinite(rawHeight)
          ? rawHeight
          : measureBodyHeight(),
      )
      if (height <= 0 || Math.abs(height - lastReportedHeight) < 2) return
      lastReportedHeight = height
      send({
        type: 'syntax:view-resize',
        instanceId: initData.instanceId,
        activationId: initData.activationId,
        height,
      })
    }

    function attachAutoResize() {
      if (!autoResize || disposed || typeof ResizeObserver !== 'function') return
      const startObserving = () => {
        if (disposed || resizeObserver || !document.body) return
        resizeObserver = new ResizeObserver(() => reportResize())
        resizeObserver.observe(document.body)
        reportResize()
      }
      if (document.body) {
        startObserving()
      } else if (typeof document !== 'undefined') {
        domReadyHandler = () => {
          domReadyHandler = null
          startObserving()
        }
        document.addEventListener('DOMContentLoaded', domReadyHandler, { once: true })
      }
    }

    function callHost(target, method, args = []) {
      if (disposed || !initData) {
        return Promise.reject(new Error('Syntax view is not connected.'))
      }
      return new Promise((res, rej) => {
        const callId = `sdk-${++callSeq}`
        let callTimer = 0
        if (typeof callTimeoutMs === 'number' && callTimeoutMs > 0) {
          callTimer = window.setTimeout(() => {
            if (!pending.has(callId)) return
            pending.delete(callId)
            const err = new Error(`Syntax ${target} call "${method}" timed out after ${callTimeoutMs}ms.`)
            err.code = 'WORKER_RUNTIME_ERROR'
            rej(err)
          }, callTimeoutMs)
        }
        pending.set(callId, {
          resolve: value => {
            if (callTimer) window.clearTimeout(callTimer)
            res(value)
          },
          reject: err => {
            if (callTimer) window.clearTimeout(callTimer)
            rej(err)
          },
        })
        try {
          send({
            type: 'syntax:view-call',
            instanceId: initData.instanceId,
            activationId: initData.activationId,
            callId,
            target,
            method,
            args,
          })
        } catch (err) {
          const entry = pending.get(callId)
          pending.delete(callId)
          entry?.reject(err instanceof Error ? err : new Error(String(err)))
        }
      })
    }

    const onWindowError = event => {
      sendError(event?.error?.message || event?.message, event?.error?.stack)
    }

    const onUnhandledRejection = event => {
      const reason = event?.reason
      sendError(
        reason instanceof Error ? reason.message : String(reason || 'Unhandled promise rejection'),
        reason instanceof Error ? reason.stack : undefined,
      )
    }

    function cleanup() {
      disposed = true
      window.clearTimeout(timer)
      if (readyRetryTimer) {
        window.clearInterval(readyRetryTimer)
        readyRetryTimer = 0
      }
      if (domReadyHandler && typeof document !== 'undefined') {
        document.removeEventListener('DOMContentLoaded', domReadyHandler)
        domReadyHandler = null
      }
      window.removeEventListener('message', onMessage)
      window.removeEventListener('error', onWindowError)
      window.removeEventListener('unhandledrejection', onUnhandledRejection)
      if (resizeObserver) {
        resizeObserver.disconnect()
        resizeObserver = null
      }
      for (const entry of pending.values()) {
        entry.reject(new Error('Syntax view connection closed.'))
      }
      pending.clear()
    }

    const onMessage = event => {
      if (disposed) return
      const msg = event.data
      if (!msg || typeof msg !== 'object' || msg.channel !== VIEW_BRIDGE_CHANNEL) return

      if (msg.type === 'syntax:view-init' && !settled) {
        settled = true
        window.clearTimeout(timer)
        if (readyRetryTimer) {
          window.clearInterval(readyRetryTimer)
          readyRetryTimer = 0
        }
        initData = msg
        currentTheme = msg.theme || currentTheme
        currentSettings = msg.settings || {}

        if (applyTheme) applySyntaxTheme(currentTheme)
        if (typeof onTheme === 'function') onTheme(currentTheme)
        if (typeof onSettings === 'function') onSettings(currentSettings)

        attachAutoResize()

        resolve({
          extensionId: msg.extensionId,
          viewId: msg.viewId,
          docId: msg.docId ?? null,
          activationId: msg.activationId,
          instanceId: msg.instanceId,
          isConnected: () => !disposed && Boolean(initData),
          getTheme: () => currentTheme,
          getSettings: () => ({ ...currentSettings }),
          callWorker: (method, ...args) => callHost('worker', method, args),
          syscall: (name, ...args) => callHost('syscall', name, args),
          documents: {
            get: id => callHost('syscall', 'documents.get', [id]),
            list: type => callHost('syscall', 'documents.list', type ? [type] : []),
            create: input => callHost('syscall', 'documents.create', [input]),
            save: input => callHost('syscall', 'documents.save', [input]),
          },
          settings: {
            get: key => callHost('syscall', 'settings.get', [key]),
            set: (key, value) => callHost('syscall', 'settings.set', [key, value]),
            getAll: () => callHost('syscall', 'settings.getAll', []),
          },
          services: {
            call: (serviceName, method, ...args) =>
              callHost('syscall', 'services.call', [serviceName, method, args]),
            has: serviceName => callHost('syscall', 'services.has', [serviceName]),
          },
          ui: {
            notify: (message, kind) => callHost('syscall', 'ui.notify', [message, kind]),
            openView: (viewId, docId) => callHost('syscall', 'ui.openView', [viewId, docId]),
          },
          resize: height => reportResize(height),
          dispose: cleanup,
        })
        return
      }

      if (!initData || msg.instanceId !== initData.instanceId || msg.activationId !== initData.activationId) {
        return
      }

      if (msg.type === 'syntax:view-theme') {
        currentTheme = msg.theme || currentTheme
        if (applyTheme) applySyntaxTheme(currentTheme)
        if (typeof onTheme === 'function') onTheme(currentTheme)
        return
      }

      if (msg.type === 'syntax:view-settings') {
        currentSettings = msg.settings || {}
        if (typeof onSettings === 'function') onSettings(currentSettings)
        return
      }

      if (msg.type === 'syntax:view-result') {
        const entry = pending.get(msg.callId)
        if (!entry) return
        pending.delete(msg.callId)
        if (msg.ok) {
          entry.resolve(msg.result)
        } else {
          const err = new Error(msg.error?.message || 'Extension call failed')
          if (msg.error?.name) err.name = msg.error.name
          if (msg.error?.code) err.code = msg.error.code
          entry.reject(err)
        }
      }
    }

    const timer = window.setTimeout(() => {
      if (settled) return
      settled = true
      cleanup()
      reject(new Error(`Timed out connecting to Syntax host after ${timeoutMs}ms.`))
    }, timeoutMs)

    window.addEventListener('message', onMessage)
    window.addEventListener('error', onWindowError)
    window.addEventListener('unhandledrejection', onUnhandledRejection)
    send({ type: 'syntax:view-ready' })
    // Retry handshake periodically in case the iframe loaded before host listener attached
    readyRetryTimer = window.setInterval(() => {
      if (settled || disposed) {
        window.clearInterval(readyRetryTimer)
        readyRetryTimer = 0
        return
      }
      send({ type: 'syntax:view-ready' })
    }, 200)
  })
}
