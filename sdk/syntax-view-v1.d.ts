export declare const VIEW_BRIDGE_CHANNEL: 'syntax-view-v1'

export interface ViewThemePayload {
  mode: 'light' | 'dark'
  cssVars: Record<string, string>
}

export type ExtensionSettingValue = boolean | string | number

export interface DocumentEnvelope<T = unknown> {
  id: string
  type: string
  title: string
  schemaVersion: number
  createdByExtensionId: string
  revision: number
  createdAt: number
  updatedAt: number
  data: T
}

export interface ConnectSyntaxViewOptions {
  /** Automatically set data-theme and Syntax CSS variables on documentElement. Default: true. */
  applyTheme?: boolean
  /** Watch document.body height with ResizeObserver and resize embedded views automatically. Default: false. */
  autoResize?: boolean
  /** Connection handshake timeout in milliseconds. Default: 5000. */
  timeoutMs?: number
  onTheme?: (theme: ViewThemePayload) => void
  onSettings?: (settings: Record<string, ExtensionSettingValue>) => void
}

export interface SyntaxViewClient {
  readonly extensionId: string
  readonly viewId: string
  readonly docId: string | null
  readonly activationId: string
  readonly instanceId: string
  getTheme(): ViewThemePayload
  getSettings(): Record<string, ExtensionSettingValue>
  callWorker<T = unknown>(method: string, ...args: unknown[]): Promise<T>
  syscall<T = unknown>(name: string, ...args: unknown[]): Promise<T>
  readonly documents: {
    get<T = unknown>(id: string): Promise<DocumentEnvelope<T> | null>
    list(type?: string): Promise<DocumentEnvelope[]>
    create<T = unknown>(input: {
      id?: string
      type: string
      title: string
      schemaVersion?: number
      data: T
    }): Promise<DocumentEnvelope<T>>
    save<T = unknown>(input: {
      id: string
      expectedRevision: number
      title?: string
      schemaVersion?: number
      data: T
    }): Promise<DocumentEnvelope<T>>
  }
  readonly settings: {
    get(key: string): Promise<ExtensionSettingValue | undefined>
    set(key: string, value: ExtensionSettingValue): Promise<ExtensionSettingValue>
    getAll(): Promise<Record<string, ExtensionSettingValue>>
  }
  readonly services: {
    call<T = unknown>(serviceName: string, method: string, ...args: unknown[]): Promise<T>
    has(serviceName: string): Promise<boolean>
  }
  readonly ui: {
    notify(message: string, kind?: 'info' | 'success' | 'error'): Promise<void>
    openView(viewId: string, docId?: string): Promise<string>
  }
  resize(height?: number): void
  dispose(): void
}

export declare function applySyntaxTheme(theme: ViewThemePayload): void
export declare function connectSyntaxView(
  options?: ConnectSyntaxViewOptions,
): Promise<SyntaxViewClient>
