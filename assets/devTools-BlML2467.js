const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/eruda-6-Vsy6uo.js","assets/vendor-motion-BZw5vTbr.js","assets/eruda-monitor-CYq-JzXh.js","assets/eruda-touches-EJ5UZGAN.js"])))=>i.map(i=>d[i]);
import{aH as Ls,aI as Cl,aJ as Ml,aK as $l}from"./index-Bo09VQrZ.js";import{r as l,d as e,b as Rl}from"./vendor-motion-BZw5vTbr.js";import{r as Js}from"./vendor-clerk-DE3oE7kz.js";import"./vendor-core-_iIbDC0I.js";var Ri=["data-feedback-toolbar","data-annotation-popup","data-annotation-marker"],Ts=Ri.flatMap(t=>[`:not([${t}])`,`:not([${t}] *)`]).join(""),Xs="feedback-freeze-styles",Us="__agentation_freeze";function El(){return typeof window>"u"?{frozen:!1,installed:!0,origSetTimeout:setTimeout,origSetInterval:setInterval,origRAF:n=>0,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}:window[Us]??{frozen:!1,installed:!1,origSetTimeout:window.setTimeout.bind(window),origSetInterval:window.setInterval.bind(window),origRAF:window.requestAnimationFrame.bind(window),pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}}var Le=El();function Ei(){if(typeof window>"u")return;const t=window;Le=t[Us]??(t[Us]=Le),!Le.installed&&(window.setTimeout=(n,o,...s)=>typeof n=="string"?Le.origSetTimeout(n,o):Le.origSetTimeout((...r)=>{Le.frozen?Le.frozenTimeoutQueue.push(()=>n(...r)):n(...r)},o,...s),window.setInterval=(n,o,...s)=>typeof n=="string"?Le.origSetInterval(n,o):Le.origSetInterval((...r)=>{Le.frozen||n(...r)},o,...s),window.requestAnimationFrame=n=>Le.origRAF(o=>{Le.frozen?Le.frozenRAFQueue.push(n):n(o)}),Le.installed=!0)}var We=Le.origSetTimeout,Ii=Le.origSetInterval,ts=Le.origRAF;function Il(t){return t?Ri.some(n=>!!t.closest?.(`[${n}]`)):!1}function Nl(){if(typeof document>"u"||(Ei(),Le.frozen))return;Le.frozen=!0,Le.frozenTimeoutQueue=[],Le.frozenRAFQueue=[];let t=document.getElementById(Xs);t||(t=document.createElement("style"),t.id=Xs),t.textContent=`
    *${Ts},
    *${Ts}::before,
    *${Ts}::after {
      animation-play-state: paused !important;
      transition: none !important;
    }
  `,document.head.appendChild(t),Le.pausedAnimations=[];try{document.getAnimations().forEach(n=>{if(n.playState!=="running")return;const o=n.effect?.target;Il(o)||(n.pause(),Le.pausedAnimations.push(n))})}catch{}document.querySelectorAll("video").forEach(n=>{n.paused||(n.dataset.wasPaused="false",n.pause())})}function Vr(){if(typeof document>"u"||!Le.frozen)return;Le.frozen=!1;const t=Le.frozenTimeoutQueue;Le.frozenTimeoutQueue=[];for(const o of t)Le.origSetTimeout(()=>{if(Le.frozen){Le.frozenTimeoutQueue.push(o);return}try{o()}catch(s){console.warn("[agentation] Error replaying queued timeout:",s)}},0);const n=Le.frozenRAFQueue;Le.frozenRAFQueue=[];for(const o of n)Le.origRAF(s=>{if(Le.frozen){Le.frozenRAFQueue.push(o);return}o(s)});for(const o of Le.pausedAnimations)try{o.play()}catch(s){console.warn("[agentation] Error resuming animation:",s)}Le.pausedAnimations=[],document.getElementById(Xs)?.remove(),document.querySelectorAll("video").forEach(o=>{o.dataset.wasPaused==="false"&&(o.play().catch(()=>{}),delete o.dataset.wasPaused)})}function Kr(){const t=l.useMemo(()=>{let n=0;const o=new Set,s=()=>(o.forEach(clearTimeout),o.clear(),++n),r=a=>a===n;return{start:s,isCurrent:r,schedule:(a,h,d)=>{if(!r(a))return;const g=We(()=>{o.delete(g),r(a)&&h()},d);o.add(g)}}},[]);return l.useEffect(()=>()=>{t.start()},[t]),t}function Ll(t,n,o,s){const r=g=>s.get(g.id)??g.id,i=new Map(t.map(g=>[r(g),g])),a=new Map(n.map(g=>[r(g),g])),h=new Set(o.map(g=>g.id)),d=[];for(const g of o){const f=i.get(g.id),p=a.get(g.id);if(f&&!p)continue;const w=p&&f&&p.comment!==f.comment;d.push(w?{...g,comment:p.comment}:g)}for(const[g,f]of a)!i.has(g)&&!h.has(g)&&d.push(f);return d}function yo(t){if(t.tagName!=="IFRAME")return null;try{return t.contentDocument}catch{return null}}function $t(t,n=document){if(t===n)return null;try{return t.defaultView?.frameElement}catch{return null}}function Zs(t){return t.nodeType===11&&"host"in t}function Xn(t){const n=t.getBoundingClientRect(),o=t.offsetWidth?n.width/t.offsetWidth:1,s=t.offsetHeight?n.height/t.offsetHeight:1,r=t.ownerDocument.defaultView?.getComputedStyle(t),i=f=>parseFloat(f||"0")||0,a=i(r?.paddingLeft),h=i(r?.paddingTop),d=t.clientWidth-a-i(r?.paddingRight),g=t.clientHeight-h-i(r?.paddingBottom);return{x:n.left+(t.clientLeft+a)*o,y:n.top+(t.clientTop+h)*s,sx:o,sy:s,width:d*o,height:g*s}}function Jr(t){try{const n=new URL(t);return n.origin+n.pathname}catch{return t}}function Tl(t,n,o,s=document){let r=$t(t,s);for(;r;){const i=Xn(r);n=i.x+n*i.sx,o=i.y+o*i.sy,r=$t(r.ownerDocument,s)}return{x:n,y:o}}function ct(t,n=document){const o=t.getBoundingClientRect();return Ni(t.ownerDocument,o,n)}function Ni(t,n,o){if(!$t(t,o))return n;let s=n.left,r=n.top,i=n.right,a=n.bottom,h=$t(t,o);for(;h;){const d=Xn(h);s=Math.max(d.x,d.x+s*d.sx),r=Math.max(d.y,d.y+r*d.sy),i=Math.min(d.x+d.width,d.x+i*d.sx),a=Math.min(d.y+d.height,d.y+a*d.sy),h=$t(h.ownerDocument,o)}return new DOMRect(s,r,Math.max(0,i-s),Math.max(0,a-r))}function os(t){const n=[];for(const o of t.querySelectorAll("*"))o.tagName==="IFRAME"&&n.push(o),o.shadowRoot&&o.tagName!=="AGENTATION-TOOLBAR"&&n.push(...os(o.shadowRoot));return n}function Dl(t,n,o,s=document){const r=[];for(let p=$t(t.ownerDocument,s);p;p=$t(p.ownerDocument,s))r.unshift(p);if(!r.length)return;const i=r.map(p=>{const w=Xn(p);return n=(n-w.x)/w.sx,o=(o-w.y)/w.sy,{index:os(p.ownerDocument).indexOf(p),id:p.id||void 0,url:yo(p)?.URL??""}}),a=t.ownerDocument.defaultView;let h=!1;for(let p=t;p;p=p.parentElement)if(["fixed","sticky"].includes(a.getComputedStyle(p).position)){h=!0;break}const d=h?0:a.scrollX,g=h?0:a.scrollY,f=t.getBoundingClientRect();return{path:i,x:n+d,y:o+g,fixed:h,boundingBox:{x:f.left+d,y:f.top+g,width:f.width,height:f.height}}}function Bl(t=document){const n=new Map,o=s=>{let r=n.get(s);return r||(r=os(s),n.set(s,r)),r};return s=>Pl(s,t,o)}function Pl(t,n=document,o=os){const s=t.frame;if(!s)return t;let r=n;for(const $ of s.path){const v=o(r),T=$.id?v.find(I=>I.id===$.id):v[$.index],x=T&&yo(T);if(!x||Jr(x.URL)!==Jr($.url))return null;r=x}const i=r.defaultView,a=s.fixed?0:i.scrollX,h=s.fixed?0:i.scrollY;let d=s.x-a,g=s.y-h;for(let $=r,v=$t(r,n);v;v=$t($,n)){const T=$.defaultView;if(d<0||g<0||d>T.innerWidth||g>T.innerHeight)return null;const x=Xn(v);if(x.width<=0||x.height<=0)return null;d=x.x+d*x.sx,g=x.y+g*x.sy,$=v.ownerDocument}const f=s.boundingBox,p=Ni(r,new DOMRect(f.x-a,f.y-h,f.width,f.height),n),w=n.defaultView;return{...t,x:d/w.innerWidth*100,y:g+(t.isFixed?0:w.scrollY),boundingBox:{x:p.x,y:p.y+(t.isFixed?0:w.scrollY),width:p.width,height:p.height}}}function Al(t,n,o){if(!("clientX"in t)||n===o)return t;const s=Tl(n,t.clientX,t.clientY,o);return new Proxy(t,{get(r,i){if(i==="clientX")return s.x;if(i==="clientY")return s.y;const a=Reflect.get(r,i,r);return typeof a=="function"?a.bind(r):a}})}function Ol(t,n){const o=new Set([t]),s=new Set;let r=[],i=new Set,a=!1,h=!1,d;const g=(p,w)=>{const $=v=>p.listener(Al(v,w,t));p.handlers.set(w,$),w.addEventListener(p.type,$,p.options)},f=()=>{if(a=!1,!h)return;const p=new Set,w=new Set,$=[],v=T=>{$.push(T);for(const x of T.querySelectorAll("*"))if(!x.matches("agentation-toolbar, [data-agentation-portal]")&&(x.shadowRoot&&v(x.shadowRoot),x.tagName==="IFRAME")){w.add(x);const I=yo(x);I&&!p.has(I)&&(p.add(I),v(I))}};p.add(t),v(t);for(const T of o)if(!p.has(T)){for(const x of s){const I=x.handlers.get(T);I&&T.removeEventListener(x.type,I,x.options),x.handlers.delete(T)}o.delete(T)}for(const T of p)if(!o.has(T)){o.add(T);for(const x of s)g(x,T)}for(const T of i)w.has(T)||T.removeEventListener("load",f);for(const T of w)i.has(T)||T.addEventListener("load",f);i=w,d?.disconnect(),i.forEach(T=>d?.observe(T)),r.forEach(T=>T.disconnect()),r=$.map(T=>{const x=new MutationObserver(I=>{I.some(M=>[...M.addedNodes,...M.removedNodes].some(B=>B.nodeType===1&&!B.closest("agentation-toolbar, [data-agentation-portal]")&&(B.tagName==="IFRAME"||!!B.shadowRoot||!!B.querySelector("iframe"))))&&!a&&(a=!0,queueMicrotask(f))});return x.observe(T,{childList:!0,subtree:!0}),x}),n?.()};return{start(){h||(h=!0,typeof ResizeObserver=="function"&&(d=new ResizeObserver(()=>n?.())),f())},stop(){h=!1,d?.disconnect(),d=void 0,r.forEach(p=>p.disconnect()),r=[];for(const p of i)p.removeEventListener("load",f);i.clear();for(const p of s)for(const[w,$]of p.handlers)w.removeEventListener(p.type,$,p.options);s.clear(),o.clear(),o.add(t)},addEventListener(p,w,$){const v={type:p,listener:w,options:$,handlers:new Map};s.add(v);for(const T of o)g(v,T)},removeEventListener(p,w,$){for(const v of s)if(v.type===p&&v.listener===w){for(const[T,x]of v.handlers)T.removeEventListener(p,x,v.options);s.delete(v)}},querySelectorAll(p){return[...o].flatMap(w=>[...w.querySelectorAll(p)])}}}var er=["data-testid","data-test","data-qa","data-cy","data-component"];function mo(t,n=er){const o={};for(const s of[...new Set(n)].slice(0,16)){if(!/^[a-zA-Z_][\w:.-]*$/.test(s))continue;const r=t.getAttribute(s);r!=null&&r.length<=500&&Object.defineProperty(o,s,{value:r,enumerable:!0})}return o}function zl(t,n=er){return Object.entries(mo(t,n)).filter(([o,s])=>/^data-[a-z0-9_-]+$/.test(o)&&s.length<=120).slice(0,2).map(([o,s])=>`[${o}="${s.replace(/[\\"\n\r\f\0]/g,r=>r==="\\"||r==='"'?`\\${r}`:`\\${r.charCodeAt(0).toString(16)} `)}"]`).join("")}function Yn(t){if(t.parentElement)return t.parentElement;const n=t.getRootNode();return Zs(n)?n.host:null}function ft(t,n){let o=t;for(;o;){if(o.matches(n))return o;o=Yn(o)}return null}function Li(t,n=4,o){const s=[];let r=t,i=0;for(;r&&i<n;){const h=r.tagName.toLowerCase();if(h==="html"||h==="body"){s.length===0&&s.push(h);break}let d=h;if(r.id)d=`#${r.id}`;else if(r.className&&typeof r.className=="string"){const f=r.className.split(/\s+/).find(p=>p.length>2&&!p.match(/^[a-z]{1,2}$/)&&!p.match(/[A-Z0-9]{5,}/));f&&(d=`.${f.split("_")[0]}`)}d+=zl(r,o);const g=Yn(r);!r.parentElement&&g&&(d=`⟨shadow⟩ ${d}`),s.unshift(d),r=g,i++}const a=$t(t.ownerDocument);return(a?Li(a,2)+" > ⟨iframe⟩ ":"")+s.join(" > ")}function Fl(t){let n="";for(const o of t.childNodes)if(o.nodeType===Node.TEXT_NODE){const s=o.textContent?.trim();s&&(n+=(n?" ":"")+s)}return n}function Hn(t,n){const o=Li(t,4,n);if(t.dataset.element)return{name:t.dataset.element,path:o};const s=t.tagName.toLowerCase();if(["path","circle","rect","line","g"].includes(s)){const r=ft(t,"svg");if(r){const i=Yn(r);if(i?.namespaceURI==="http://www.w3.org/1999/xhtml")return{name:`graphic in ${Hn(i).name}`,path:o}}return{name:"graphic element",path:o}}if(s==="svg"){const r=Yn(t);if(r?.tagName.toLowerCase()==="button"){const i=r.textContent?.trim();return{name:i?`icon in "${i}" button`:"button icon",path:o}}return{name:"icon",path:o}}if(s==="button"){const r=t.textContent?.trim(),i=t.getAttribute("aria-label");return i?{name:`button [${i}]`,path:o}:{name:r?`button "${r.slice(0,25)}"`:"button",path:o}}if(s==="a"){const r=t.textContent?.trim(),i=t.getAttribute("href");return r?{name:`link "${r.slice(0,25)}"`,path:o}:i?{name:`link to ${i.slice(0,30)}`,path:o}:{name:"link",path:o}}if(s==="input"){const r=t.getAttribute("type")||"text",i=t.getAttribute("placeholder"),a=t.getAttribute("name");return i?{name:`input "${i}"`,path:o}:a?{name:`input [${a}]`,path:o}:{name:`${r} input`,path:o}}if(["h1","h2","h3","h4","h5","h6"].includes(s)){const r=t.textContent?.trim();return{name:r?`${s} "${r.slice(0,35)}"`:s,path:o}}if(s==="p"){const r=t.textContent?.trim();return r?{name:`paragraph: "${r.slice(0,40)}${r.length>40?"...":""}"`,path:o}:{name:"paragraph",path:o}}if(s==="span"||s==="label"){const r=t.textContent?.trim();return r&&r.length<40?{name:`"${r}"`,path:o}:{name:s,path:o}}if(s==="li"){const r=t.textContent?.trim();return r&&r.length<40?{name:`list item: "${r.slice(0,35)}"`,path:o}:{name:"list item",path:o}}if(s==="blockquote")return{name:"blockquote",path:o};if(s==="code"){const r=t.textContent?.trim();return r&&r.length<30?{name:`code: \`${r}\``,path:o}:{name:"code",path:o}}if(s==="pre")return{name:"code block",path:o};if(s==="img"){const r=t.getAttribute("alt");return{name:r?`image "${r.slice(0,30)}"`:"image",path:o}}if(s==="video")return{name:"video",path:o};if(["div","section","article","nav","header","footer","aside","main"].includes(s)){const r=t.className,i=t.getAttribute("role"),a=t.getAttribute("aria-label");if(a)return{name:`${s} [${a}]`,path:o};if(i)return{name:`${i}`,path:o};const h=Fl(t);if(h&&h.length<50)return{name:`"${h}"`,path:o};if(typeof r=="string"&&r){const d=r.split(/[\s_-]+/).map(g=>g.replace(/[A-Z0-9]{5,}.*$/,"")).filter(g=>g.length>2&&!/^[a-z]{1,2}$/.test(g)).slice(0,2);if(d.length>0)return{name:d.join(" "),path:o}}return{name:s==="div"?"container":s,path:o}}return{name:s,path:o}}function lo(t){const n=[],o=t.textContent?.trim();o&&o.length<100&&n.push(o);const s=t.previousElementSibling;if(s){const i=s.textContent?.trim();i&&i.length<50&&n.unshift(`[before: "${i.slice(0,40)}"]`)}const r=t.nextElementSibling;if(r){const i=r.textContent?.trim();i&&i.length<50&&n.push(`[after: "${i.slice(0,40)}"]`)}return n.join(" ")}function Ao(t){const n=Yn(t);if(!n)return"";const o=t.getRootNode(),r=(Zs(o)&&t.parentElement?Array.from(t.parentElement.children):Array.from(n.children)).filter(f=>f!==t&&f.namespaceURI==="http://www.w3.org/1999/xhtml");if(r.length===0)return"";const i=r.slice(0,4).map(f=>{const p=f.tagName.toLowerCase(),w=f.className;let $="";if(typeof w=="string"&&w){const v=w.split(/\s+/).map(T=>T.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(T=>T.length>2&&!/^[a-z]{1,2}$/.test(T));v&&($=`.${v}`)}if(p==="button"||p==="a"){const v=f.textContent?.trim().slice(0,15);if(v)return`${p}${$} "${v}"`}return`${p}${$}`});let h=n.tagName.toLowerCase();if(typeof n.className=="string"&&n.className){const f=n.className.split(/\s+/).map(p=>p.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(p=>p.length>2&&!/^[a-z]{1,2}$/.test(p));f&&(h=`.${f}`)}const d=n.children.length,g=d>i.length+1?` (${d} total in ${h})`:"";return i.join(", ")+g}function ao(t){const n=t.className;return typeof n!="string"||!n?"":n.split(/\s+/).filter(s=>s.length>0).map(s=>{const r=s.match(/^([a-zA-Z][a-zA-Z0-9_-]*?)(?:_[a-zA-Z0-9]{5,})?$/);return r?r[1]:s}).filter((s,r,i)=>i.indexOf(s)===r).join(", ")}var Ti=new Set(["none","normal","auto","0px","rgba(0, 0, 0, 0)","transparent","static","visible"]),Wl=new Set(["p","span","h1","h2","h3","h4","h5","h6","label","li","td","th","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","a","time","cite","q"]),Hl=new Set(["input","textarea","select"]),Yl=new Set(["img","video","canvas","svg"]),Xl=new Set(["div","section","article","nav","header","footer","aside","main","ul","ol","form","fieldset"]);function Oo(t){if(typeof window>"u")return{};const n=(t.ownerDocument.defaultView??window).getComputedStyle(t),o={},s=t.tagName.toLowerCase();let r;Wl.has(s)?r=["color","fontSize","fontWeight","fontFamily","lineHeight"]:s==="button"||s==="a"&&t.getAttribute("role")==="button"?r=["backgroundColor","color","padding","borderRadius","fontSize"]:Hl.has(s)?r=["backgroundColor","color","padding","borderRadius","fontSize"]:Yl.has(s)?r=["width","height","objectFit","borderRadius"]:Xl.has(s)?r=["display","padding","margin","gap","backgroundColor"]:r=["color","fontSize","margin","padding","backgroundColor"];for(const i of r){const a=i.replace(/([A-Z])/g,"-$1").toLowerCase(),h=n.getPropertyValue(a);h&&!Ti.has(h)&&(o[i]=h)}return o}var Ul=["color","backgroundColor","borderColor","fontSize","fontWeight","fontFamily","lineHeight","letterSpacing","textAlign","width","height","padding","margin","border","borderRadius","display","position","top","right","bottom","left","zIndex","flexDirection","justifyContent","alignItems","gap","opacity","visibility","overflow","boxShadow","transform"];function zo(t){if(typeof window>"u")return"";const n=(t.ownerDocument.defaultView??window).getComputedStyle(t),o=[];for(const s of Ul){const r=s.replace(/([A-Z])/g,"-$1").toLowerCase(),i=n.getPropertyValue(r);i&&!Ti.has(i)&&o.push(`${r}: ${i}`)}return o.join("; ")}function Ql(t){if(!t)return;const n={},o=t.split(";").map(s=>s.trim()).filter(Boolean);for(const s of o){const r=s.indexOf(":");if(r>0){const i=s.slice(0,r).trim(),a=s.slice(r+1).trim();i&&a&&(n[i]=a)}}return Object.keys(n).length>0?n:void 0}function Fo(t){const n=[],o=t.getAttribute("role"),s=t.getAttribute("aria-label"),r=t.getAttribute("aria-describedby"),i=t.getAttribute("tabindex"),a=t.getAttribute("aria-hidden");return o&&n.push(`role="${o}"`),s&&n.push(`aria-label="${s}"`),r&&n.push(`aria-describedby="${r}"`),i&&n.push(`tabindex=${i}`),a==="true"&&n.push("aria-hidden"),t.matches("a, button, input, select, textarea, [tabindex]")&&n.push("focusable"),n.join(", ")}function po(t){const n=[];let o=t;for(;o&&o.tagName.toLowerCase()!=="html";){const r=o.tagName.toLowerCase();let i=r;if(o.id)i=`${r}#${o.id}`;else if(o.className&&typeof o.className=="string"){const h=o.className.split(/\s+/).map(d=>d.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(d=>d.length>2);h&&(i=`${r}.${h}`)}const a=Yn(o);!o.parentElement&&a&&(i=`⟨shadow⟩ ${i}`),n.unshift(i),o=a}const s=$t(t.ownerDocument);return(s?po(s)+" > ⟨iframe⟩ ":"")+n.join(" > ")}var Di="agentation-toolbar, [data-agentation-root], [data-feedback-toolbar], [data-annotation-popup], [data-annotation-marker]",ql=new Set(["DIV","SPAN","SECTION","ARTICLE","MAIN","ASIDE","HEADER","FOOTER","NAV"]);function Zo(t,n){let o=document.elementFromPoint(t,n);const s=new Set;for(;o&&!s.has(o);){s.add(o);const r=yo(o);let i;if(r){const a=Xn(o);t=(t-a.x)/a.sx,n=(n-a.y)/a.sy,i=r.elementFromPoint?.(t,n)}else i=o.shadowRoot?.elementFromPoint?.(t,n);if(!i||i===o)break;o=i}return o}function Gl(t){if(typeof t.checkVisibility=="function")return t.checkVisibility({checkOpacity:!0,checkVisibilityCSS:!0});const n=getComputedStyle(t);if(n.visibility==="hidden"||n.visibility==="collapse")return!1;let o=t;for(;o;){const s=getComputedStyle(o);if(s.opacity==="0"||s.display==="none"||s.contentVisibility==="hidden")return!1;const r=o.getRootNode();o=o.parentElement||(Zs(r)?r.host:null)}return!0}function Bi(t,n){const o=[],s=new Set,r=(i,a,h)=>{for(const d of i){if(s.has(d))continue;if(s.add(d),d.shadowRoot){const f=d.shadowRoot,p=f.elementsFromPoint?.(a,h)??[];r(p.length?p:[f.elementFromPoint?.(a,h)].filter(Boolean),a,h)}const g=yo(d);if(g){const f=Xn(d),p=(a-f.x)/f.sx,w=(h-f.y)/f.sy;r(g.elementsFromPoint?.(p,w)??[g.elementFromPoint?.(p,w)].filter(Boolean),p,w)}d!==d.ownerDocument.body&&d!==d.ownerDocument.documentElement&&!ft(d,Di)&&Gl(d)&&o.push(d)}};return r(document.elementsFromPoint?.(t,n)??[document.elementFromPoint(t,n)].filter(Boolean),t,n),o}function Wo(t,n,o){if(o.width<=0||o.height<=0)return null;let s=null,r=1/0;for(const i of Bi(t,n)){const a=ct(i),h=a.width/o.width,d=a.height/o.height;if(h<.5||h>2||d<.5||d>2)continue;const g=Math.abs(Math.log(h))+Math.abs(Math.log(d));g<r&&(s=i,r=g)}return s}function Zr(t,n){const o=Zo(t,n);if(!o||ft(o,Di))return null;const s=Bi(t,n);for(const a of s)if(!ql.has(a.tagName)&&!a.shadowRoot||Array.from(a.childNodes).some(h=>h.nodeType===Node.TEXT_NODE&&h.textContent?.trim()))return a;let r=null,i=1/0;for(const a of s){const h=ct(a),d=h.width*h.height;d>0&&d<i&&(r=a,i=d)}return r}function Vl(t){const n=l.useCallback(o=>t?(window.addEventListener("hashchange",o),window.addEventListener("popstate",o),()=>{window.removeEventListener("hashchange",o),window.removeEventListener("popstate",o)}):()=>{},[t]);return l.useSyncExternalStore(n,()=>window.location.pathname+(t?window.location.hash:""),()=>"/")}var Ho=new Map;function Kl(t,n){const o=(Ho.get(t)??Promise.resolve()).then(n),s=o.then(()=>{},()=>{});return Ho.set(t,s),s.then(()=>{Ho.get(t)===s&&Ho.delete(t)}),o}function Jl(t,n,o){try{const s=new URL(t,o);return s.origin===o&&s.pathname+s.hash===n}catch{return!1}}var ei=typeof window>"u"?l.useEffect:l.useLayoutEffect;function Zl(t){const[n,o]=l.useState(null);return ei(()=>{const s=document.createElement("div");return s.setAttribute("data-agentation-portal",""),s.style.display="contents",o(s),()=>s.remove()},[]),ei(()=>{if(!n)return;const s=t??document.body;if(s.ownerDocument!==document){console.warn("[Agentation] portalContainer belongs to another document; the toolbar will not render.");return}let r=document.activeElement;for(;r?.shadowRoot?.activeElement;)r=r.shadowRoot.activeElement;const i=r&&n.contains(document.activeElement)?r:null;typeof n.hidePopover=="function"&&n.matches(":popover-open")&&n.hidePopover(),s.appendChild(n),t&&typeof n.showPopover=="function"?(n.setAttribute("popover","manual"),n.style.cssText="position:fixed;inset:0 auto auto 0;margin:0;padding:0;border:0;background:transparent;width:0;height:0;overflow:visible;pointer-events:none",n.showPopover()):(n.removeAttribute("popover"),n.style.cssText="display:contents"),i?.focus({preventScroll:!0})},[n,t]),n}var ea=({mode:t="open",delegatesFocus:n,slotAssignment:o,host:s="div",children:r,className:i,...a})=>{const h=l.useRef(null),[d,g]=l.useState(null);l.useLayoutEffect(()=>{const p=h.current;if(!p||p.shadowRoot)return;const w=p.attachShadow({mode:t,delegatesFocus:n,slotAssignment:o});g(w)},[]);const f=s;return e.jsx(f,{ref:h,...a,...s.includes("-")?{class:i}:{className:i},children:d&&Js.createPortal(r,d)})};function tr(t,n,o){const s=l.useRef(o);l.useLayoutEffect(()=>{s.current=o},[o]),l.useLayoutEffect(()=>{const r=t.current;if(!n||!r)return;let i=!1;const a=r.getAnimations?.()??[];return Promise.allSettled(a.map(h=>h.finished)).then(()=>{i||s.current()}),()=>{i=!0}},[t,n])}var Pi=`@charset "UTF-8";
.styles-module__popup___IhzrD svg[fill=none] {
  fill: none !important;
}
.styles-module__popup___IhzrD svg[fill=none] :not([fill]) {
  fill: none !important;
}

@keyframes styles-module__popupEnter___AuQDN {
  from {
    opacity: 0;
    transform: translateX(-50%) scale(0.95) translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) scale(1) translateY(0);
  }
}
@keyframes styles-module__popupExit___JJKQX {
  from {
    opacity: 1;
    transform: translateX(-50%) scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: translateX(-50%) scale(0.95) translateY(4px);
  }
}
@keyframes styles-module__shake___jdbWe {
  0%, 100% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(0);
  }
  20% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(-3px);
  }
  40% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(3px);
  }
  60% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(-2px);
  }
  80% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(2px);
  }
}
.styles-module__popup___IhzrD {
  position: fixed;
  transform: translateX(-50%);
  width: 280px;
  padding: 0.75rem 1rem;
  background: #1a1a1a;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  z-index: 100001;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  will-change: transform, opacity;
  opacity: 0;
}
.styles-module__popup___IhzrD.styles-module__enter___L7U7N {
  animation: styles-module__popupEnter___AuQDN 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}
.styles-module__popup___IhzrD.styles-module__entered___COX-w {
  opacity: 1;
  transform: translateX(-50%) scale(1) translateY(0);
}
.styles-module__popup___IhzrD.styles-module__exit___5eGjE {
  pointer-events: none;
  animation: styles-module__popupExit___JJKQX 0.15s ease-in forwards;
}
.styles-module__popup___IhzrD.styles-module__entered___COX-w.styles-module__shake___jdbWe {
  animation: styles-module__shake___jdbWe 0.25s ease-out;
}

.styles-module__header___wWsSi {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5625rem;
}

.styles-module__element___fTV2z {
  font-size: 0.75rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
}

.styles-module__headerToggle___WpW0b {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  flex: 1;
  min-width: 0;
  text-align: left;
}
.styles-module__headerToggle___WpW0b .styles-module__element___fTV2z {
  flex: 1;
}

.styles-module__chevron___ZZJlR {
  color: rgba(255, 255, 255, 0.5);
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  flex-shrink: 0;
}
.styles-module__chevron___ZZJlR.styles-module__expanded___2Hxgv {
  transform: rotate(90deg);
}

.styles-module__stylesWrapper___pnHgy {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.styles-module__stylesWrapper___pnHgy.styles-module__expanded___2Hxgv {
  grid-template-rows: 1fr;
}

.styles-module__stylesInner___YYZe2 {
  overflow: hidden;
}

.styles-module__stylesBlock___VfQKn {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.375rem;
  padding: 0.5rem 0.625rem;
  margin-bottom: 0.5rem;
  font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
  font-size: 0.6875rem;
  line-height: 1.5;
}

.styles-module__styleLine___1YQiD {
  color: rgba(255, 255, 255, 0.85);
  word-break: break-word;
}

.styles-module__styleProperty___84L1i {
  color: #c792ea;
}

.styles-module__styleValue___q51-h {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__timestamp___Dtpsv {
  font-size: 0.625rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.35);
  font-variant-numeric: tabular-nums;
  margin-left: 0.5rem;
  flex-shrink: 0;
}

.styles-module__quote___mcMmQ {
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.5rem;
  padding: 0.4rem 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.25rem;
  line-height: 1.45;
}

.styles-module__textarea___jrSae {
  box-sizing: border-box;
  width: 100%;
  padding: 0.5rem 0.625rem;
  font-size: 0.8125rem;
  font-family: inherit;
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  resize: none;
  outline: none;
  transition: border-color 0.15s ease;
}
.styles-module__textarea___jrSae:focus {
  border-color: var(--agentation-color-blue);
}
.styles-module__textarea___jrSae.styles-module__green___99l3h:focus {
  border-color: var(--agentation-color-green);
}
.styles-module__textarea___jrSae::placeholder {
  color: rgba(255, 255, 255, 0.35);
}
.styles-module__textarea___jrSae::-webkit-scrollbar {
  width: 6px;
}
.styles-module__textarea___jrSae::-webkit-scrollbar-track {
  background: transparent;
}
.styles-module__textarea___jrSae::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
}

.styles-module__actions___D6x3f {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.375rem;
  margin-top: 0.75rem;
}

.styles-module__sourceAction___EabJb {
  display: block;
  max-width: 100%;
  margin: -2px 0 8px;
  padding: 2px 0;
  background: transparent;
  color: #fff;
  font: inherit;
  font-size: 11px;
  border: 0;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.15s ease;
}
.styles-module__sourceAction___EabJb:hover, .styles-module__sourceAction___EabJb:focus-visible {
  opacity: 1;
}
.styles-module__sourceAction___EabJb:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 3px;
}

.styles-module__light___6AaSQ .styles-module__sourceAction___EabJb {
  color: #111;
}

.styles-module__cancel___hRjnL,
.styles-module__submit___K-mIR,
.styles-module__deleteButton___4VuAE {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 1.875rem;
  padding: 0.375rem 0.875rem;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 1rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease, opacity 0.15s ease;
}

.styles-module__cancel___hRjnL {
  background: transparent;
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__cancel___hRjnL:hover {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
}

.styles-module__submit___K-mIR {
  color: white;
}
.styles-module__submit___K-mIR:hover:not(:disabled) {
  filter: brightness(0.9);
}
.styles-module__submit___K-mIR:disabled {
  cursor: not-allowed;
}

.styles-module__deleteWrapper___oSjdo {
  display: flex;
  margin-right: auto;
}

.styles-module__deleteButton___4VuAE {
  background: transparent;
  color: rgba(255, 255, 255, 0.4);
  transition: background-color 0.15s ease, color 0.15s ease, transform 0.1s ease;
}
.styles-module__deleteButton___4VuAE:hover {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}
.styles-module__deleteButton___4VuAE:active {
  transform: scale(0.92);
}

.styles-module__light___6AaSQ.styles-module__popup___IhzrD {
  background: #fff;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06);
}
.styles-module__light___6AaSQ .styles-module__element___fTV2z {
  color: rgba(0, 0, 0, 0.6);
}
.styles-module__light___6AaSQ .styles-module__timestamp___Dtpsv {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__chevron___ZZJlR {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__stylesBlock___VfQKn {
  background: rgba(0, 0, 0, 0.03);
}
.styles-module__light___6AaSQ .styles-module__styleLine___1YQiD {
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__styleProperty___84L1i {
  color: #7c3aed;
}
.styles-module__light___6AaSQ .styles-module__styleValue___q51-h {
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__quote___mcMmQ {
  color: rgba(0, 0, 0, 0.55);
  background: rgba(0, 0, 0, 0.04);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae {
  background: rgba(0, 0, 0, 0.03);
  color: #1a1a1a;
  border-color: rgba(0, 0, 0, 0.12);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae::placeholder {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.15);
}
.styles-module__light___6AaSQ .styles-module__cancel___hRjnL {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___6AaSQ .styles-module__cancel___hRjnL:hover {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__deleteButton___4VuAE {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__deleteButton___4VuAE:hover {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}

@media (prefers-reduced-motion: reduce) {
  .styles-module__popup___IhzrD.styles-module__enter___L7U7N, .styles-module__popup___IhzrD.styles-module__exit___5eGjE {
    animation-duration: 1ms;
    animation-delay: 0ms !important;
  }
}
.styles-module__sharedForm___8GvQl {
  --card-motion: 200ms cubic-bezier(0.2, 0.8, 0.2, 1);
  padding: 0.75rem 1rem;
  transition: padding var(--card-motion);
}
.styles-module__sharedForm___8GvQl .styles-module__header___wWsSi {
  transition: margin-bottom var(--card-motion);
}
.styles-module__sharedForm___8GvQl .styles-module__element___fTV2z {
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
}
.styles-module__sharedForm___8GvQl .styles-module__previewExcerpt___DCOIL {
  display: none;
}
.styles-module__sharedForm___8GvQl .styles-module__headerToggle___WpW0b .styles-module__chevron___ZZJlR {
  opacity: 1;
  margin-left: 0;
  transition: margin-left var(--card-motion), opacity 100ms ease-out, transform var(--card-motion);
}
.styles-module__sharedForm___8GvQl .styles-module__sharedNote___OYVi5 {
  position: relative;
  height: var(--editor-field-height, 57px);
  border-radius: 8px;
  overflow: clip;
  transition: height var(--card-motion);
}
.styles-module__sharedForm___8GvQl .styles-module__sharedNote___OYVi5::before {
  content: "";
  position: absolute;
  inset: 0;
  border: 1px solid var(--field-border, rgba(255, 255, 255, 0.15));
  border-radius: inherit;
  background: rgba(255, 255, 255, 0.05);
  pointer-events: none;
  transition: opacity var(--card-motion), border-color var(--card-motion);
}
.styles-module__sharedForm___8GvQl .styles-module__sharedNoteContent___6q3KD {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: clip;
  transition: width var(--card-motion);
}
.styles-module__sharedForm___8GvQl .styles-module__sharedNote___OYVi5[data-truncated]::after {
  content: "…";
  position: absolute;
  right: 0;
  top: 0;
  color: #fff;
  font-size: 13px;
  line-height: 1.4;
  opacity: 0;
  pointer-events: none;
  transition: opacity 80ms ease-out;
}
.styles-module__sharedForm___8GvQl .styles-module__textarea___jrSae {
  display: block;
  width: calc(280px - 2rem);
  max-width: calc(100vw - 24px - 2rem);
  margin: 0;
  background: transparent !important;
  border-color: transparent !important;
  transform: translate(0, 0);
  transition: transform var(--card-motion), color var(--card-motion);
}
.styles-module__sharedForm___8GvQl .styles-module__sharedExtra___RUBKC, .styles-module__sharedForm___8GvQl .styles-module__sharedActions___6Glpl {
  display: grid;
  grid-template-rows: 1fr;
  opacity: 1;
  transition: grid-template-rows var(--card-motion), opacity 80ms ease-out;
}
.styles-module__sharedForm___8GvQl .styles-module__sharedActions___6Glpl {
  transition-delay: 0ms, 120ms;
}
.styles-module__sharedForm___8GvQl .styles-module__sharedExtraInner___EuUh4 {
  min-height: 0;
  overflow: hidden;
}
.styles-module__sharedForm___8GvQl .styles-module__actions___D6x3f {
  min-height: 0;
  overflow: hidden;
  transition: margin-top var(--card-motion);
}
.styles-module__sharedForm___8GvQl[data-preview] {
  padding: 8px 12px;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__header___wWsSi {
  margin-bottom: 5px;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__previewExcerpt___DCOIL {
  display: inline;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__element___fTV2z {
  line-height: 1.4;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__chevron___ZZJlR {
  opacity: 0;
  margin-left: -18px;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__sharedNote___OYVi5 {
  height: 20.2px;
  border-radius: 0;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__sharedNote___OYVi5::before {
  opacity: 0;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__textarea___jrSae {
  transform: translate(-11px, calc(-9px + (1.4em - 1lh) / 2));
  color: #fff;
  overflow: hidden;
  cursor: default;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__sharedExtra___RUBKC, .styles-module__sharedForm___8GvQl[data-preview] .styles-module__sharedActions___6Glpl {
  grid-template-rows: 0fr;
  opacity: 0;
  transition-delay: 0ms;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__actions___D6x3f {
  margin-top: 0;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__stylesWrapper___pnHgy {
  grid-template-rows: 0fr;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__sharedNote___OYVi5[data-truncated] .styles-module__sharedNoteContent___6q3KD {
  width: calc(100% - 12px);
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__sharedNote___OYVi5[data-truncated]::after {
  opacity: 1;
}

.styles-module__light___6AaSQ .styles-module__sharedForm___8GvQl .styles-module__sharedNote___OYVi5::before {
  border-color: var(--field-border, rgba(0, 0, 0, 0.12));
  background: rgba(0, 0, 0, 0.03);
}

.styles-module__light___6AaSQ .styles-module__sharedForm___8GvQl .styles-module__element___fTV2z {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__light___6AaSQ .styles-module__sharedForm___8GvQl[data-preview] .styles-module__textarea___jrSae, .styles-module__light___6AaSQ .styles-module__sharedForm___8GvQl[data-preview] .styles-module__sharedNote___OYVi5::after {
  color: rgba(0, 0, 0, 0.85);
}

@media (prefers-reduced-motion: reduce) {
  .styles-module__sharedForm___8GvQl {
    --card-motion: 1ms linear;
  }
  .styles-module__sharedForm___8GvQl .styles-module__sharedActions___6Glpl, .styles-module__sharedForm___8GvQl .styles-module__headerToggle___WpW0b .styles-module__chevron___ZZJlR {
    transition: opacity 100ms ease-out;
    transition-delay: 0ms;
  }
}`,Ce={popup:"styles-module__popup___IhzrD",enter:"styles-module__enter___L7U7N",entered:"styles-module__entered___COX-w",exit:"styles-module__exit___5eGjE",shake:"styles-module__shake___jdbWe",header:"styles-module__header___wWsSi",element:"styles-module__element___fTV2z",headerToggle:"styles-module__headerToggle___WpW0b",chevron:"styles-module__chevron___ZZJlR",expanded:"styles-module__expanded___2Hxgv",stylesWrapper:"styles-module__stylesWrapper___pnHgy",stylesInner:"styles-module__stylesInner___YYZe2",stylesBlock:"styles-module__stylesBlock___VfQKn",styleLine:"styles-module__styleLine___1YQiD",styleProperty:"styles-module__styleProperty___84L1i",styleValue:"styles-module__styleValue___q51-h",timestamp:"styles-module__timestamp___Dtpsv",quote:"styles-module__quote___mcMmQ",textarea:"styles-module__textarea___jrSae",actions:"styles-module__actions___D6x3f",sourceAction:"styles-module__sourceAction___EabJb",light:"styles-module__light___6AaSQ",cancel:"styles-module__cancel___hRjnL",submit:"styles-module__submit___K-mIR",deleteButton:"styles-module__deleteButton___4VuAE",deleteWrapper:"styles-module__deleteWrapper___oSjdo",sharedForm:"styles-module__sharedForm___8GvQl",previewExcerpt:"styles-module__previewExcerpt___DCOIL",sharedNote:"styles-module__sharedNote___OYVi5",sharedNoteContent:"styles-module__sharedNoteContent___6q3KD",sharedExtra:"styles-module__sharedExtra___RUBKC",sharedActions:"styles-module__sharedActions___6Glpl",sharedExtraInner:"styles-module__sharedExtraInner___EuUh4"},Ds="data-agentation-styles";function Ai(t,n,o){if(!o||!t)return;const s=t.nodeType===9?t.head:t.nodeType===11?t:null;if(!s||typeof s.querySelector!="function"||s.querySelector(`style[${Ds}~="toolbar"], style[${Ds}~="${n}"]`))return;const i=(t.nodeType===9?t:t.ownerDocument).createElement("style");i.setAttribute(Ds,n),i.textContent=o,s.appendChild(i)}function nr(t,n){return l.useCallback(o=>{o&&Ai(o.getRootNode(),t,n)},[t,n])}function ti(t){if(!t)return;const n=o=>o.stopImmediatePropagation();document.addEventListener("focusin",n,!0),document.addEventListener("focusout",n,!0);try{t.focus({preventScroll:!0})}finally{document.removeEventListener("focusin",n,!0),document.removeEventListener("focusout",n,!0)}}var Oi=l.forwardRef(function({element:n,timestamp:o,selectedText:s,placeholder:r="What should change?",initialValue:i="",submitLabel:a="Add",onSubmit:h,onCancel:d,onDelete:g,onOpenSource:f,allowEmpty:p=!1,accentColor:w="#3c82f7",computedStyles:$,disabled:v=!1,preview:T=!1,resetOnPreview:x=!0,variant:I="popup"},G){const M=I==="card",[B,we]=l.useState(i),[Ne,U]=l.useState(!1),[Oe,z]=l.useState(!1),me=l.useRef(null),ne=l.useRef(null),W=s?` "${s.slice(0,30)}${s.length>30?"...":""}"`:"";l.useLayoutEffect(()=>{const V=ne.current,oe=me.current;if(!M||!V||!oe)return;const ot=()=>{V.style.setProperty("--editor-field-height",`${oe.offsetHeight}px`)};if(ot(),"CanvasRenderingContext2D"in window){const ze=document.createElement("canvas").getContext("2d");if(ze){const Re=getComputedStyle(oe).fontFamily;ze.font=`13px ${Re}`;const Ze=ze.measureText(i.replace(/\s+/g," ")).width;ze.font=`italic 12px ${Re}`;const ht=ze.measureText(n+W).width,kt=Math.min(200,Math.max(120,Math.ceil(Math.max(Ze,ht))+24));V.closest("[data-annotation-card]")?.style.setProperty("--preview-width",`${kt}px`);const xe=V.querySelector("[data-shared-note]");xe&&xe.toggleAttribute("data-truncated",Ze>kt-24)}}const $e=typeof ResizeObserver<"u"?new ResizeObserver(ot):null;return $e?.observe(oe),()=>$e?.disconnect()},[M,n,i,W]),l.useLayoutEffect(()=>{T&&x&&(we(i),z(!1),me.current&&(me.current.scrollTop=0,me.current.scrollLeft=0))},[T,x,i]),l.useImperativeHandle(G,()=>({focus(){const V=me.current;ti(V),V&&(V.selectionStart=V.selectionEnd=V.value.length,V.scrollTop=M?0:V.scrollHeight)}}),[M]);const ke=l.useCallback(()=>{v||!B.trim()&&!p||h(B.trim())},[v,B,p,h]),Q=V=>{V.stopPropagation(),!V.nativeEvent.isComposing&&(V.key==="Enter"&&!V.shiftKey&&(V.preventDefault(),ke()),V.key==="Escape"&&d())};return e.jsxs("div",{ref:ne,className:M?Ce.sharedForm:void 0,style:M?void 0:{display:"contents"},"data-annotation-editor":!0,"data-preview":T||void 0,children:[e.jsxs("div",{className:Ce.header,"data-editor-heading":!0,children:[$&&Object.keys($).length>0?e.jsxs("button",{className:Ce.headerToggle,onClick:()=>{const V=Oe;z(!Oe),V&&We(()=>ti(me.current),0)},type:"button",children:[e.jsx("svg",{className:`${Ce.chevron} ${Oe?Ce.expanded:""}`,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M5.5 10.25L9 7.25L5.75 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),e.jsxs("span",{className:Ce.element,children:[n,M&&W&&e.jsx("span",{className:Ce.previewExcerpt,children:W})]})]}):e.jsxs("span",{className:Ce.element,children:[n,M&&W&&e.jsx("span",{className:Ce.previewExcerpt,children:W})]}),o&&e.jsx("span",{className:Ce.timestamp,children:o})]}),f&&e.jsx("div",{className:M?Ce.sharedExtra:void 0,style:M?void 0:{display:"contents"},children:e.jsx("div",{className:M?Ce.sharedExtraInner:void 0,style:M?void 0:{display:"contents"},children:e.jsx("button",{type:"button",className:Ce.sourceAction,onClick:f,children:"Open in editor"})})}),$&&Object.keys($).length>0&&e.jsx("div",{className:`${Ce.stylesWrapper} ${Oe?Ce.expanded:""}`,children:e.jsx("div",{className:Ce.stylesInner,children:e.jsx("div",{className:Ce.stylesBlock,children:Object.entries($).map(([V,oe])=>e.jsxs("div",{className:Ce.styleLine,children:[e.jsx("span",{className:Ce.styleProperty,children:V.replace(/([A-Z])/g,"-$1").toLowerCase()}),": ",e.jsx("span",{className:Ce.styleValue,children:oe}),";"]},V))})})}),s&&e.jsx("div",{className:M?Ce.sharedExtra:void 0,style:M?void 0:{display:"contents"},children:e.jsx("div",{className:M?Ce.sharedExtraInner:void 0,style:M?void 0:{display:"contents"},children:e.jsxs("div",{className:Ce.quote,children:["“",s.slice(0,80),s.length>80?"...":"","”"]})})}),e.jsx("div",{"data-shared-note":!0,className:M?Ce.sharedNote:void 0,style:M?{"--field-border":Ne?w:void 0}:{display:"contents"},children:e.jsx("div",{className:M?Ce.sharedNoteContent:void 0,style:M?void 0:{display:"contents"},children:e.jsx("textarea",{ref:me,className:Ce.textarea,readOnly:T,"aria-hidden":T,style:M?void 0:{borderColor:Ne?w:void 0},placeholder:r,value:T?B.replace(/\s+/g," "):B,onChange:V=>we(V.target.value),onFocus:()=>U(!0),onBlur:()=>U(!1),rows:2,onKeyDown:Q})})}),e.jsx("div",{"data-editor-actions":!0,className:M?Ce.sharedActions:void 0,style:M?void 0:{display:"contents"},children:e.jsxs("div",{className:Ce.actions,children:[g&&e.jsx("div",{className:Ce.deleteWrapper,children:e.jsx("button",{className:Ce.deleteButton,onClick:g,type:"button","aria-label":"Delete annotation",children:"Delete"})}),e.jsx("button",{className:Ce.cancel,onClick:d,children:"Cancel"}),e.jsx("button",{className:Ce.submit,style:{backgroundColor:w,opacity:B.trim()||p?1:.4},onClick:ke,disabled:v||!B.trim()&&!p,children:a})]})})]})}),or=l.forwardRef(function({element:n,timestamp:o,selectedText:s,placeholder:r="What should change?",initialValue:i="",submitLabel:a="Add",onSubmit:h,onCancel:d,onDelete:g,onOpenSource:f,allowEmpty:p=!1,style:w,accentColor:$="#3c82f7",isExiting:v=!1,onExitComplete:T,lightMode:x=!1,computedStyles:I},G){const[M,B]=l.useState(!1),[we,Ne]=l.useState("initial"),U=l.useRef(null),Oe=l.useRef(null);l.useEffect(()=>{Ai(Oe.current?.getRootNode(),"annotation-popup",Pi)},[]);const z=l.useRef(null);l.useEffect(()=>{const Q=We(()=>{Ne(V=>V==="initial"?"enter":V)},0);return()=>{clearTimeout(Q),z.current&&clearTimeout(z.current)}},[]),l.useEffect(()=>{if(v)return;const Q=We(()=>U.current?.focus(),50);return()=>clearTimeout(Q)},[v]);const me=l.useCallback(()=>{z.current&&clearTimeout(z.current),B(!0),z.current=We(()=>{B(!1),U.current?.focus()},250)},[]);l.useImperativeHandle(G,()=>({shake:me}),[me]);const ne=l.useCallback(()=>{if(T){d();return}Ne("exit")},[d,T]),W=v?"exit":we;tr(Oe,W==="exit",()=>{v?T?.():d()});const ke=[Ce.popup,x?Ce.light:"",W==="enter"?Ce.enter:"",W==="entered"?Ce.entered:"",W==="exit"?Ce.exit:"",M&&W!=="exit"?Ce.shake:""].filter(Boolean).join(" ");return e.jsx("div",{ref:Oe,className:ke,"data-annotation-popup":!0,style:w,onAnimationEnd:Q=>{Q.target===Q.currentTarget&&Q.animationName.includes("popupEnter")&&!v&&Ne("entered")},onKeyDownCapture:Q=>{Q.key!=="Escape"||Q.nativeEvent.isComposing||(Q.preventDefault(),Q.stopPropagation(),ne())},onClick:Q=>Q.stopPropagation(),children:e.jsx(Oi,{ref:U,element:n,timestamp:o,selectedText:s,placeholder:r,initialValue:i,submitLabel:a,onSubmit:h,onCancel:ne,onDelete:g,onOpenSource:f,allowEmpty:p,accentColor:$,computedStyles:I,disabled:W==="exit"})})}),ss=`.icon-transitions-module__iconState___uqK9J {
  transition: opacity 0.2s ease, transform 0.2s ease;
  transform-origin: center;
}

.icon-transitions-module__iconStateFast___HxlMm {
  transition: opacity 0.15s ease, transform 0.15s ease;
  transform-origin: center;
}

.icon-transitions-module__iconFade___nPwXg {
  transition: opacity 0.2s ease;
}

.icon-transitions-module__iconFadeFast___Ofb2t {
  transition: opacity 0.15s ease;
}

.icon-transitions-module__visible___PlHsU {
  opacity: 1 !important;
}

.icon-transitions-module__visibleScaled___8Qog- {
  opacity: 1 !important;
  transform: scale(1);
}

.icon-transitions-module__hidden___ETykt {
  opacity: 0 !important;
}

.icon-transitions-module__hiddenScaled___JXn-m {
  opacity: 0 !important;
  transform: scale(0.8);
}

.icon-transitions-module__sending___uaLN- {
  opacity: 0.5 !important;
  transform: scale(0.8);
}`,tt={iconState:"icon-transitions-module__iconState___uqK9J",iconStateFast:"icon-transitions-module__iconStateFast___HxlMm",iconFade:"icon-transitions-module__iconFade___nPwXg",iconFadeFast:"icon-transitions-module__iconFadeFast___Ofb2t",visible:"icon-transitions-module__visible___PlHsU",visibleScaled:"icon-transitions-module__visibleScaled___8Qog-",hidden:"icon-transitions-module__hidden___ETykt",hiddenScaled:"icon-transitions-module__hiddenScaled___JXn-m",sending:"icon-transitions-module__sending___uaLN-"},ta=({size:t=16})=>e.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",children:e.jsx("path",{d:"M8 3v10M3 8h10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),na=({size:t=20,...n})=>e.jsxs("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n,children:[e.jsx("circle",{cx:"10",cy:"10",r:"5.375",stroke:"currentColor",strokeWidth:"1.25"}),e.jsx("path",{d:"M8.5 8.5C8.73 7.85 9.31 7.49 10 7.5C10.86 7.51 11.5 8.13 11.5 9C11.5 10.08 10 10.5 10 10.5V10.75",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("circle",{cx:"10",cy:"12.625",r:"0.625",fill:"currentColor"})]}),oa=({size:t=24,copied:n=!1,tint:o})=>e.jsxs("svg",{ref:nr("icon-transitions",ss),width:t,height:t,viewBox:"0 0 24 24",fill:"none",style:o?{color:o,transition:"color 0.3s ease"}:void 0,children:[e.jsxs("g",{className:`${tt.iconState} ${n?tt.hiddenScaled:tt.visibleScaled}`,children:[e.jsx("path",{d:"M4.75 11.25C4.75 10.4216 5.42157 9.75 6.25 9.75H12.75C13.5784 9.75 14.25 10.4216 14.25 11.25V17.75C14.25 18.5784 13.5784 19.25 12.75 19.25H6.25C5.42157 19.25 4.75 18.5784 4.75 17.75V11.25Z",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{d:"M17.25 14.25H17.75C18.5784 14.25 19.25 13.5784 19.25 12.75V6.25C19.25 5.42157 18.5784 4.75 17.75 4.75H11.25C10.4216 4.75 9.75 5.42157 9.75 6.25V6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),e.jsxs("g",{className:`${tt.iconState} ${n?tt.visibleScaled:tt.hiddenScaled}`,children:[e.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})]}),sa=({size:t=24,state:n="idle"})=>{const o=n==="idle",s=n==="sent",r=n==="failed",i=n==="sending";return e.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[e.jsx("g",{className:`${tt.iconStateFast} ${o?tt.visibleScaled:i?tt.sending:tt.hiddenScaled}`,children:e.jsx("path",{d:"M9.875 14.125L12.3506 19.6951C12.7184 20.5227 13.9091 20.4741 14.2083 19.6193L18.8139 6.46032C19.0907 5.6695 18.3305 4.90933 17.5397 5.18611L4.38072 9.79174C3.52589 10.0909 3.47731 11.2816 4.30494 11.6494L9.875 14.125ZM9.875 14.125L13.375 10.625",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),e.jsxs("g",{className:`${tt.iconStateFast} ${s?tt.visibleScaled:tt.hiddenScaled}`,children:[e.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),e.jsxs("g",{className:`${tt.iconStateFast} ${r?tt.visibleScaled:tt.hiddenScaled}`,children:[e.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M12 8V12",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("circle",{cx:"12",cy:"15",r:"0.5",fill:"var(--agentation-color-red)",stroke:"var(--agentation-color-red)",strokeWidth:"1"})]})]})},ra=({size:t=24,isOpen:n=!0})=>e.jsxs("svg",{ref:nr("icon-transitions",ss),width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[e.jsxs("g",{className:`${tt.iconFade} ${n?tt.visible:tt.hidden}`,children:[e.jsx("path",{d:"M3.91752 12.7539C3.65127 12.2996 3.65037 11.7515 3.9149 11.2962C4.9042 9.59346 7.72688 5.49994 12 5.49994C16.2731 5.49994 19.0958 9.59346 20.0851 11.2962C20.3496 11.7515 20.3487 12.2996 20.0825 12.7539C19.0908 14.4459 16.2694 18.4999 12 18.4999C7.73064 18.4999 4.90918 14.4459 3.91752 12.7539Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M12 14.8261C13.5608 14.8261 14.8261 13.5608 14.8261 12C14.8261 10.4392 13.5608 9.17392 12 9.17392C10.4392 9.17392 9.17391 10.4392 9.17391 12C9.17391 13.5608 10.4392 14.8261 12 14.8261Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),e.jsxs("g",{className:`${tt.iconFade} ${n?tt.hidden:tt.visible}`,children:[e.jsx("path",{d:"M18.6025 9.28503C18.9174 8.9701 19.4364 8.99481 19.7015 9.35271C20.1484 9.95606 20.4943 10.507 20.7342 10.9199C21.134 11.6086 21.1329 12.4454 20.7303 13.1328C20.2144 14.013 19.2151 15.5225 17.7723 16.8193C16.3293 18.1162 14.3852 19.2497 12.0008 19.25C11.4192 19.25 10.8638 19.1823 10.3355 19.0613C9.77966 18.934 9.63498 18.2525 10.0382 17.8493C10.2412 17.6463 10.5374 17.573 10.8188 17.6302C11.1993 17.7076 11.5935 17.75 12.0008 17.75C13.8848 17.7497 15.4867 16.8568 16.7693 15.7041C18.0522 14.5511 18.9606 13.1867 19.4363 12.375C19.5656 12.1543 19.5659 11.8943 19.4373 11.6729C19.2235 11.3049 18.921 10.8242 18.5364 10.3003C18.3085 9.98991 18.3302 9.5573 18.6025 9.28503ZM12.0008 4.75C12.5814 4.75006 13.1358 4.81803 13.6632 4.93953C14.2182 5.06741 14.362 5.74812 13.9593 6.15091C13.7558 6.35435 13.4589 6.42748 13.1771 6.36984C12.7983 6.29239 12.4061 6.25006 12.0008 6.25C10.1167 6.25 8.51415 7.15145 7.23028 8.31543C5.94678 9.47919 5.03918 10.8555 4.56426 11.6729C4.43551 11.8945 4.43582 12.1542 4.56524 12.375C4.77587 12.7343 5.07189 13.2012 5.44718 13.7105C5.67623 14.0213 5.65493 14.4552 5.38193 14.7282C5.0671 15.0431 4.54833 15.0189 4.28292 14.6614C3.84652 14.0736 3.50813 13.5369 3.27129 13.1328C2.86831 12.4451 2.86717 11.6088 3.26739 10.9199C3.78185 10.0345 4.77959 8.51239 6.22247 7.2041C7.66547 5.89584 9.61202 4.75 12.0008 4.75Z",fill:"currentColor"}),e.jsx("path",{d:"M5 19L19 5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})]}),ia=({size:t=24,isPaused:n=!1})=>e.jsxs("svg",{ref:nr("icon-transitions",ss),width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[e.jsxs("g",{className:`${tt.iconFadeFast} ${n?tt.hidden:tt.visible}`,children:[e.jsx("path",{d:"M8 6L8 18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{d:"M16 18L16 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),e.jsx("path",{className:`${tt.iconFadeFast} ${n?tt.visible:tt.hidden}`,d:"M17.75 10.701C18.75 11.2783 18.75 12.7217 17.75 13.299L8.75 18.4952C7.75 19.0725 6.5 18.3509 6.5 17.1962L6.5 6.80384C6.5 5.64914 7.75 4.92746 8.75 5.50481L17.75 10.701Z",stroke:"currentColor",strokeWidth:"1.5"})]}),la=({size:t=16})=>e.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[e.jsx("path",{d:"M10.6504 5.81117C10.9939 4.39628 13.0061 4.39628 13.3496 5.81117C13.5715 6.72517 14.6187 7.15891 15.4219 6.66952C16.6652 5.91193 18.0881 7.33479 17.3305 8.57815C16.8411 9.38134 17.2748 10.4285 18.1888 10.6504C19.6037 10.9939 19.6037 13.0061 18.1888 13.3496C17.2748 13.5715 16.8411 14.6187 17.3305 15.4219C18.0881 16.6652 16.6652 18.0881 15.4219 17.3305C14.6187 16.8411 13.5715 17.2748 13.3496 18.1888C13.0061 19.6037 10.9939 19.6037 10.6504 18.1888C10.4285 17.2748 9.38135 16.8411 8.57815 17.3305C7.33479 18.0881 5.91193 16.6652 6.66952 15.4219C7.15891 14.6187 6.72517 13.5715 5.81117 13.3496C4.39628 13.0061 4.39628 10.9939 5.81117 10.6504C6.72517 10.4285 7.15891 9.38134 6.66952 8.57815C5.91193 7.33479 7.33479 5.91192 8.57815 6.66952C9.38135 7.15891 10.4285 6.72517 10.6504 5.81117Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("circle",{cx:"12",cy:"12",r:"2.5",stroke:"currentColor",strokeWidth:"1.5"})]}),aa=({size:t=16})=>e.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:e.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4384 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),ca=({size:t=16})=>e.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[e.jsxs("g",{clipPath:"url(#clip0_2_53)",children:[e.jsx("path",{d:"M16.25 16.25L7.75 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M7.75 16.25L16.25 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),e.jsx("defs",{children:e.jsx("clipPath",{id:"clip0_2_53",children:e.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),da=({size:t=16})=>e.jsxs("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",children:[e.jsx("path",{d:"M9.99999 12.7082C11.4958 12.7082 12.7083 11.4956 12.7083 9.99984C12.7083 8.50407 11.4958 7.2915 9.99999 7.2915C8.50422 7.2915 7.29166 8.50407 7.29166 9.99984C7.29166 11.4956 8.50422 12.7082 9.99999 12.7082Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M10 3.9585V5.05698",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M10 14.9429V16.0414",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M5.7269 5.72656L6.50682 6.50649",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M13.4932 13.4932L14.2731 14.2731",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M3.95834 10H5.05683",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M14.9432 10H16.0417",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M5.7269 14.2731L6.50682 13.4932",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M13.4932 6.50649L14.2731 5.72656",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]}),_a=({size:t=16})=>e.jsx("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",children:e.jsx("path",{d:"M15.5 10.4955C15.4037 11.5379 15.0124 12.5314 14.3721 13.3596C13.7317 14.1878 12.8688 14.8165 11.8841 15.1722C10.8995 15.5278 9.83397 15.5957 8.81217 15.3679C7.79038 15.1401 6.8546 14.6259 6.11434 13.8857C5.37408 13.1454 4.85995 12.2096 4.63211 11.1878C4.40427 10.166 4.47215 9.10048 4.82781 8.11585C5.18346 7.13123 5.81218 6.26825 6.64039 5.62791C7.4686 4.98756 8.46206 4.59634 9.5045 4.5C8.89418 5.32569 8.60049 6.34302 8.67685 7.36695C8.75321 8.39087 9.19454 9.35339 9.92058 10.0794C10.6466 10.8055 11.6091 11.2468 12.6331 11.3231C13.657 11.3995 14.6743 11.1058 15.5 10.4955Z",stroke:"currentColor",strokeWidth:"1.13793",strokeLinecap:"round",strokeLinejoin:"round"})}),ua=({size:t=16})=>e.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M11.3799 6.9572L9.05645 4.63375M11.3799 6.9572L6.74949 11.5699C6.61925 11.6996 6.45577 11.791 6.277 11.8339L4.29549 12.3092C3.93194 12.3964 3.60478 12.0683 3.69297 11.705L4.16585 9.75693C4.20893 9.57947 4.29978 9.4172 4.42854 9.28771L9.05645 4.63375M11.3799 6.9572L12.3455 5.98759C12.9839 5.34655 12.9839 4.31002 12.3455 3.66897C11.7033 3.02415 10.6594 3.02415 10.0172 3.66897L9.06126 4.62892L9.05645 4.63375",stroke:"currentColor",strokeWidth:"0.9",strokeLinecap:"round",strokeLinejoin:"round"})}),ha=({size:t=16})=>e.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M8.5 3.5L4 8L8.5 12.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),ma=({size:t=24})=>e.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[e.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("line",{x1:"3",y1:"9",x2:"21",y2:"9",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("line",{x1:"9",y1:"9",x2:"9",y2:"21",stroke:"currentColor",strokeWidth:"1.5"})]}),pa=({content:t,children:n,...o})=>{const[s,r]=l.useState(!1),[i,a]=l.useState(!1),[h,d]=l.useState({top:0,right:0}),g=l.useRef(null),f=l.useRef(null),p=l.useRef(null),w=()=>{if(g.current){const T=g.current.getBoundingClientRect();d({top:T.top+T.height/2,right:window.innerWidth-T.left+8})}},$=()=>{a(!0),p.current&&(clearTimeout(p.current),p.current=null),w(),f.current=We(()=>{r(!0)},500)},v=()=>{f.current&&(clearTimeout(f.current),f.current=null),r(!1),p.current=We(()=>{a(!1)},150)};return l.useEffect(()=>()=>{f.current&&clearTimeout(f.current),p.current&&clearTimeout(p.current)},[]),e.jsxs(e.Fragment,{children:[e.jsx("span",{ref:g,onMouseEnter:$,onMouseLeave:v,...o,children:n}),i&&Js.createPortal(e.jsx("div",{"data-feedback-toolbar":!0,style:{position:"fixed",top:h.top,right:h.right,transform:"translateY(-50%)",padding:"6px 10px",background:"#383838",color:"rgba(255, 255, 255, 0.7)",fontSize:"11px",fontWeight:400,lineHeight:"14px",borderRadius:"10px",width:"180px",textAlign:"left",zIndex:100020,pointerEvents:"none",boxShadow:"0px 1px 8px rgba(0, 0, 0, 0.28)",opacity:s?1:0,transition:"opacity 0.15s ease"},children:t}),document.body)]})},fa=`.styles-module__tooltip___mcXL2 {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: help;
}

.styles-module__tooltipIcon___Nq2nD {
  transform: translateY(0.5px);
  color: #fff;
  opacity: 0.2;
  transition: opacity 0.15s ease;
  will-change: transform;
}
.styles-module__tooltip___mcXL2:hover .styles-module__tooltipIcon___Nq2nD {
  opacity: 0.5;
}
[data-agentation-theme=light] .styles-module__tooltipIcon___Nq2nD {
  color: #000;
}`,ni={tooltip:"styles-module__tooltip___mcXL2",tooltipIcon:"styles-module__tooltipIcon___Nq2nD"},$n=({content:t})=>e.jsx(pa,{className:ni.tooltip,content:t,children:e.jsx(na,{className:ni.tooltipIcon})}),ga=`.styles-module__toolbar___wNsdK svg[fill=none],
.styles-module__markersLayer___-25j1 svg[fill=none],
.styles-module__fixedMarkersLayer___ffyX6 svg[fill=none] {
  fill: none !important;
}
.styles-module__toolbar___wNsdK svg[fill=none] :not([fill]),
.styles-module__markersLayer___-25j1 svg[fill=none] :not([fill]),
.styles-module__fixedMarkersLayer___ffyX6 svg[fill=none] :not([fill]) {
  fill: none !important;
}

.styles-module__controlsContent___9GJWU :where(button, input, select, textarea, label) {
  background: unset;
  border: unset;
  border-radius: unset;
  padding: unset;
  margin: unset;
  color: unset;
  font-family: unset;
  font-weight: unset;
  font-style: unset;
  line-height: unset;
  letter-spacing: unset;
  text-transform: unset;
  text-decoration: unset;
  box-shadow: unset;
  outline: unset;
}

@keyframes styles-module__toolbarEnter___u8RRu {
  from {
    opacity: 0;
    transform: scale(0.5) rotate(90deg);
  }
  to {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}
@keyframes styles-module__toolbarHide___y8kaT {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.8);
  }
}
@keyframes styles-module__badgeEnter___mVQLj {
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__scaleIn___c-r1K {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__scaleOut___Wctwz {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.85);
  }
}
@keyframes styles-module__slideUp___kgD36 {
  from {
    opacity: 0;
    transform: scale(0.85) translateY(8px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
@keyframes styles-module__slideDown___zcdje {
  from {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: scale(0.85) translateY(8px);
  }
}
@keyframes styles-module__fadeIn___b9qmf {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__fadeOut___6Ut6- {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes styles-module__hoverHighlightIn___6WYHY {
  from {
    opacity: 0;
    transform: scale(0.98);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__hoverTooltipIn___FYGQx {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(4px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
.styles-module__disableTransitions___EopxO :is(*, *::before, *::after) {
  transition: none !important;
}

:host {
  /* Set here rather than inline so a consumer className rule can still hide the toolbar. */
  display: contents;
  position: fixed;
  top: auto;
  left: auto;
  bottom: 1.25rem;
  right: 1.25rem;
  z-index: 100000;
}

.styles-module__positionContext___AZFHE,
.styles-module__toolbar___wNsdK {
  position: inherit;
  top: inherit;
  left: inherit;
  bottom: inherit;
  right: inherit;
  z-index: inherit;
}

.styles-module__toolbar___wNsdK {
  width: 337px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  pointer-events: none;
  transition: left 0.36s cubic-bezier(0.19, 1, 0.22, 1), top 0s, right 0s, bottom 0s;
}
.styles-module__toolbar___wNsdK[data-dragging=true] {
  transition: none;
}

.styles-module__toolbarContainer___dIhma {
  position: relative;
  -webkit-user-select: none;
  user-select: none;
  margin-left: auto;
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1a1a1a;
  color: #fff;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2), 0 4px 16px rgba(0, 0, 0, 0.1);
  pointer-events: auto;
  transition: width 0.36s cubic-bezier(0.19, 1, 0.22, 1), transform 0.36s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__toolbarContainer___dIhma.styles-module__entrance___sgHd8 {
  animation: styles-module__toolbarEnter___u8RRu 0.5s cubic-bezier(0.34, 1.2, 0.64, 1) forwards;
}
.styles-module__toolbarContainer___dIhma.styles-module__hiding___1td44 {
  animation: styles-module__toolbarHide___y8kaT 0.4s cubic-bezier(0.4, 0, 1, 1) forwards;
  pointer-events: none;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn {
  width: 44px;
  height: 44px;
  border-radius: 22px;
  padding: 0;
  cursor: pointer;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:hover {
  background: #2a2a2a;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:active {
  transform: scale(0.95);
}
.styles-module__toolbarContainer___dIhma.styles-module__expanded___ofKPx {
  height: 44px;
  border-radius: 22px;
  padding: 5px;
  width: 297px;
}
.styles-module__toolbarContainer___dIhma.styles-module__expanded___ofKPx.styles-module__serverConnected___Gfbou {
  width: 337px;
}

@media (prefers-reduced-motion: reduce) {
  .styles-module__toolbar___wNsdK,
  .styles-module__toolbarContainer___dIhma {
    transition: none;
  }
}
.styles-module__buttonWrapper___rBcdv.styles-module__toggleWrapper___7N0-q {
  position: absolute;
  top: 0;
  right: 0;
  width: 44px;
  height: 44px;
}

.styles-module__togglePlaceholder___wnqrL {
  width: 34px;
  flex: 0 0 34px;
  height: 34px;
}

.styles-module__toggleContent___0yfyP {
  position: absolute;
  top: 0;
  right: 0;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 50%;
  padding: 0;
  margin: 0;
  background: transparent;
  color: #fff;
  cursor: pointer;
  transition: color 0.15s ease;
}
.styles-module__toggleContent___0yfyP::before {
  content: "";
  position: absolute;
  inset: 5px;
  border-radius: 50%;
  pointer-events: none;
  background: transparent;
  transition: background-color 0.15s ease, transform 0.1s ease;
}
.styles-module__toggleContent___0yfyP.styles-module__expandedToggle___F7SRN {
  color: rgba(255, 255, 255, 0.85);
}
.styles-module__toggleContent___0yfyP.styles-module__expandedToggle___F7SRN:hover {
  color: #fff;
}
.styles-module__toggleContent___0yfyP.styles-module__expandedToggle___F7SRN:hover::before {
  background: rgba(255, 255, 255, 0.12);
}
.styles-module__toggleContent___0yfyP.styles-module__expandedToggle___F7SRN:active::before, .styles-module__toggleContent___0yfyP.styles-module__expandedToggle___F7SRN:active .styles-module__toggleGlyph___R7Oom {
  transform: scale(0.92);
}

.styles-module__toggleIcon___Jbtus {
  transform: translateY(-0.5px);
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.styles-module__expandedToggle___F7SRN .styles-module__toggleIcon___Jbtus {
  transform: none;
}

.styles-module__toggleGlyph___R7Oom {
  overflow: visible;
  transition: transform 0.1s ease;
}
.styles-module__toggleGlyph___R7Oom path {
  transform-box: fill-box;
  transform-origin: center;
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.16s ease;
}

.styles-module__toggleTopLine___hQaCm,
.styles-module__toggleMiddleLine___sFFVe {
  vector-effect: non-scaling-stroke;
}

.styles-module__toggleBottomLine___V-jX3 {
  transform-origin: left center;
}

.styles-module__toggleGlyph___R7Oom[data-active=true] .styles-module__toggleTopLine___hQaCm {
  transform: translateY(5.25px) rotate(45deg) scaleX(1.1422494);
}
.styles-module__toggleGlyph___R7Oom[data-active=true] .styles-module__toggleMiddleLine___sFFVe {
  transform: translateX(3.5px) rotate(-45deg) scaleX(2.4748737);
}
.styles-module__toggleGlyph___R7Oom[data-active=true] .styles-module__toggleBottomLine___V-jX3 {
  transform: scaleX(0);
  opacity: 0;
}
.styles-module__toggleGlyph___R7Oom[data-active=true] .styles-module__toggleSparkle___eeF99 {
  transform: scale(0);
  opacity: 0;
}

.styles-module__toggleContent___0yfyP:focus-visible,
.styles-module__controlButton___8Q0jc:focus-visible {
  outline: 2px solid var(--agentation-color-accent);
  outline-offset: 3px;
}

.styles-module__controlsContent___9GJWU {
  display: flex;
  align-items: center;
  gap: 6px;
  transition: filter 0.14s ease-out, opacity 0.14s ease-out, transform 0.36s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__controlsContent___9GJWU.styles-module__visible___KHwEW {
  transition: filter 0.3s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.24s ease-out, transform 0.42s cubic-bezier(0.19, 1, 0.22, 1);
  opacity: 1;
  filter: blur(0px);
  transform: scale(1);
  visibility: visible;
  pointer-events: auto;
}
.styles-module__controlsContent___9GJWU.styles-module__hidden___Ae8H4 {
  pointer-events: none;
  opacity: 0;
  filter: blur(6px);
  transform: scale(0.4);
}

@media (prefers-reduced-motion: reduce) {
  .styles-module__controlsContent___9GJWU,
  .styles-module__controlsContent___9GJWU.styles-module__visible___KHwEW,
  .styles-module__toggleContent___0yfyP,
  .styles-module__toggleContent___0yfyP::before,
  .styles-module__toggleGlyph___R7Oom,
  .styles-module__toggleIcon___Jbtus,
  .styles-module__toggleGlyph___R7Oom path {
    transition: none;
  }
  .styles-module__controlsContent___9GJWU.styles-module__hidden___Ae8H4 {
    filter: none;
    transform: none;
  }
}
.styles-module__badge___2XsgF {
  position: absolute;
  top: -13px;
  right: -13px;
  -webkit-user-select: none;
  user-select: none;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  border-radius: 9px;
  background-color: var(--agentation-color-accent);
  color: white;
  font-size: 0.625rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15), inset 0 0 0 1px rgba(255, 255, 255, 0.04);
  opacity: 1;
  transition: transform 0.3s ease, opacity 0.2s ease;
  transform: scale(1);
}
.styles-module__badge___2XsgF.styles-module__fadeOut___6Ut6- {
  opacity: 0;
  transform: scale(0);
  pointer-events: none;
}
.styles-module__badge___2XsgF.styles-module__entrance___sgHd8 {
  animation: styles-module__badgeEnter___mVQLj 0.3s cubic-bezier(0.34, 1.2, 0.64, 1) 0.4s both;
}

.styles-module__controlButton___8Q0jc {
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.85);
  transition: background-color 0.15s ease, color 0.15s ease, transform 0.1s ease, opacity 0.2s ease;
}
.styles-module__controlButton___8Q0jc:hover:not(:disabled):not([data-active=true]):not([data-failed=true]):not([data-auto-sync=true]):not([data-error=true]):not([data-no-hover=true]) {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
}
.styles-module__controlButton___8Q0jc:active:not(:disabled) {
  transform: scale(0.92);
}
.styles-module__controlButton___8Q0jc:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}
.styles-module__controlButton___8Q0jc[data-active=true] {
  color: var(--agentation-color-blue);
  background-color: color-mix(in srgb, var(--agentation-color-blue) 25%, transparent);
}
.styles-module__controlButton___8Q0jc[data-error=true] {
  color: var(--agentation-color-red);
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
}
.styles-module__controlButton___8Q0jc[data-danger]:hover:not(:disabled):not([data-active=true]):not([data-failed=true]) {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}
.styles-module__controlButton___8Q0jc[data-no-hover=true], .styles-module__controlButton___8Q0jc.styles-module__statusShowing___te6iu {
  cursor: default;
  pointer-events: none;
  background: transparent !important;
}
.styles-module__controlButton___8Q0jc[data-auto-sync=true] {
  color: var(--agentation-color-green);
  background: transparent;
  cursor: default;
}
.styles-module__controlButton___8Q0jc[data-failed=true] {
  color: var(--agentation-color-red);
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
}

.styles-module__buttonBadge___NeFWb {
  position: absolute;
  top: 0px;
  right: 0px;
  min-width: 16px;
  height: 16px;
  padding: 0 4px;
  border-radius: 8px;
  background-color: var(--agentation-color-accent);
  color: white;
  font-size: 0.625rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 2px #1a1a1a, 0 1px 3px rgba(0, 0, 0, 0.2);
  pointer-events: none;
}
[data-agentation-theme=light] .styles-module__buttonBadge___NeFWb {
  box-shadow: 0 0 0 2px #fff, 0 1px 3px rgba(0, 0, 0, 0.2);
}

@keyframes styles-module__mcpIndicatorPulseConnected___EDodZ {
  0%, 100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  }
  50% {
    box-shadow: 0 0 0 5px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
}
@keyframes styles-module__mcpIndicatorPulseConnecting___cCYte {
  0%, 100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-yellow) 50%, transparent);
  }
  50% {
    box-shadow: 0 0 0 5px color-mix(in srgb, var(--agentation-color-yellow) 0%, transparent);
  }
}
.styles-module__mcpIndicator___zGJeL {
  position: absolute;
  top: 3px;
  right: 3px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  pointer-events: none;
  transition: background-color 0.3s ease, opacity 0.15s ease, transform 0.15s ease;
  opacity: 1;
  transform: scale(1);
}
.styles-module__mcpIndicator___zGJeL.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpIndicatorPulseConnected___EDodZ 2.5s ease-in-out infinite;
}
.styles-module__mcpIndicator___zGJeL.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpIndicatorPulseConnecting___cCYte 1.5s ease-in-out infinite;
}
.styles-module__mcpIndicator___zGJeL.styles-module__hidden___Ae8H4 {
  opacity: 0;
  transform: scale(0);
  animation: none;
}

@keyframes styles-module__connectionPulse___-Zycw {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(0.9);
  }
}
.styles-module__connectionIndicatorWrapper___L-e-3 {
  width: 8px;
  height: 34px;
  margin-left: 6px;
  margin-right: 6px;
}

.styles-module__connectionIndicator___afk9p {
  position: relative;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.3s ease, background-color 0.3s ease;
  cursor: default;
}

.styles-module__connectionIndicatorVisible___C-i5B {
  opacity: 1;
}

.styles-module__connectionIndicatorConnected___IY8pR {
  background-color: var(--agentation-color-green);
  animation: styles-module__connectionPulse___-Zycw 2.5s ease-in-out infinite;
}

.styles-module__connectionIndicatorDisconnected___kmpaZ {
  background-color: var(--agentation-color-red);
  animation: none;
}

.styles-module__connectionIndicatorConnecting___QmSLH {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__connectionPulse___-Zycw 1s ease-in-out infinite;
}

.styles-module__buttonWrapper___rBcdv {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) scale(1);
  transition-delay: 0.85s;
}
.styles-module__buttonWrapper___rBcdv:has(.styles-module__controlButton___8Q0jc:disabled):hover .styles-module__buttonTooltip___Burd9 {
  opacity: 0;
  visibility: hidden;
}

.styles-module__tooltipsInSession___-0lHH .styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  transition-delay: 0s;
}

.styles-module__sendButtonWrapper___UUxG6 {
  width: 0;
  opacity: 0;
  overflow: hidden;
  pointer-events: none;
  margin-left: -6px;
  transition: width 0.36s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.2s cubic-bezier(0.19, 1, 0.22, 1), margin 0.36s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__sendButtonWrapper___UUxG6 .styles-module__controlButton___8Q0jc {
  transform: scale(0.8);
  transition: transform 0.36s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__sendButtonWrapper___UUxG6.styles-module__sendButtonVisible___WPSQU {
  width: 34px;
  opacity: 1;
  overflow: visible;
  pointer-events: auto;
  margin-left: 0;
}
.styles-module__sendButtonWrapper___UUxG6.styles-module__sendButtonVisible___WPSQU .styles-module__controlButton___8Q0jc {
  transform: scale(1);
}

.styles-module__buttonTooltip___Burd9 {
  position: absolute;
  bottom: calc(100% + 14px);
  left: 50%;
  transform: translateX(-50%) scale(0.95);
  padding: 6px 10px;
  background: #1a1a1a;
  color: rgba(255, 255, 255, 0.9);
  font-size: 12px;
  font-weight: 500;
  border-radius: 8px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  z-index: 100001;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  transition: opacity 0.135s ease, transform 0.135s ease, visibility 0.135s ease;
}
.styles-module__buttonTooltip___Burd9::after {
  content: "";
  position: absolute;
  top: calc(100% - 4px);
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 8px;
  height: 8px;
  background: #1a1a1a;
  border-radius: 0 0 2px 0;
}

.styles-module__shortcut___lEAQk {
  margin-left: 4px;
  opacity: 0.5;
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonTooltip___Burd9 {
  bottom: auto;
  top: calc(100% + 14px);
  transform: translateX(-50%) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonTooltip___Burd9::after {
  top: -4px;
  bottom: auto;
  border-radius: 2px 0 0 0;
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-50%) scale(1);
}

.styles-module__tooltipsHidden___VtLJG .styles-module__buttonTooltip___Burd9 {
  opacity: 0 !important;
  visibility: hidden !important;
  transition: none !important;
}

.styles-module__tooltipVisible___0jcCv,
.styles-module__tooltipsHidden___VtLJG .styles-module__tooltipVisible___0jcCv {
  opacity: 1 !important;
  visibility: visible !important;
  transform: translateX(-50%) scale(1) !important;
  transition-delay: 0s !important;
}

.styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9 {
  left: 50%;
  transform: translateX(-12px) scale(0.95);
}
.styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9::after {
  left: 16px;
}
.styles-module__buttonWrapperAlignLeft___myzIp:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(1);
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignLeft___myzIp:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(1);
}

.styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9 {
  left: 50%;
  transform: translateX(calc(-100% + 12px)) scale(0.95);
}
.styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9::after {
  left: auto;
  right: 8px;
}
.styles-module__buttonWrapperAlignRight___HCQFR:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(1);
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignRight___HCQFR:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(1);
}

.styles-module__divider___c--s1 {
  width: 1px;
  height: 12px;
  background: rgba(255, 255, 255, 0.15);
  margin: 0 3px;
}

.styles-module__overlay___Q1O9y {
  position: fixed;
  inset: 0;
  z-index: 99997;
  pointer-events: none;
}
.styles-module__overlay___Q1O9y > * {
  pointer-events: auto;
}

.styles-module__hoverHighlight___ogakW {
  position: fixed;
  border: 2px solid color-mix(in srgb, var(--agentation-color-accent) 50%, transparent);
  border-radius: 4px;
  background-color: color-mix(in srgb, var(--agentation-color-accent) 4%, transparent);
  pointer-events: none !important;
  box-sizing: border-box;
  will-change: opacity;
  contain: layout style;
}
.styles-module__hoverHighlight___ogakW.styles-module__enter___WFIki {
  animation: styles-module__hoverHighlightIn___6WYHY 0.12s ease-out forwards;
}

.styles-module__multiSelectOutline___cSJ-m {
  position: fixed;
  border: 2px dashed color-mix(in srgb, var(--agentation-color-green) 60%, transparent);
  border-radius: 4px;
  pointer-events: none !important;
  background-color: color-mix(in srgb, var(--agentation-color-green) 5%, transparent);
  box-sizing: border-box;
  will-change: opacity;
}
.styles-module__multiSelectOutline___cSJ-m.styles-module__enter___WFIki {
  animation: styles-module__fadeIn___b9qmf 0.15s ease-out forwards;
}
.styles-module__multiSelectOutline___cSJ-m.styles-module__exit___fyOJ0 {
  animation: styles-module__fadeOut___6Ut6- 0.15s ease-out forwards;
}

.styles-module__singleSelectOutline___QhX-O {
  position: fixed;
  border: 2px solid color-mix(in srgb, var(--agentation-color-blue) 60%, transparent);
  border-radius: 4px;
  pointer-events: none !important;
  background-color: color-mix(in srgb, var(--agentation-color-blue) 5%, transparent);
  box-sizing: border-box;
  will-change: opacity;
}
.styles-module__singleSelectOutline___QhX-O.styles-module__enter___WFIki {
  animation: styles-module__fadeIn___b9qmf 0.15s ease-out forwards;
}
.styles-module__singleSelectOutline___QhX-O.styles-module__exit___fyOJ0 {
  animation: styles-module__fadeOut___6Ut6- 0.15s ease-out forwards;
}

.styles-module__hoverTooltip___bvLk7 {
  position: fixed;
  z-index: 99999;
  font-size: 0.6875rem;
  font-weight: 500;
  color: #fff;
  background: rgba(0, 0, 0, 0.85);
  padding: 0.35rem 0.6rem;
  border-radius: 0.375rem;
  pointer-events: none !important;
  white-space: nowrap;
  max-width: min(280px, 100vw - 16px - 1.2rem);
  overflow: hidden;
  text-overflow: ellipsis;
}
.styles-module__hoverTooltip___bvLk7.styles-module__enter___WFIki {
  animation: styles-module__hoverTooltipIn___FYGQx 0.1s ease-out forwards;
}

.styles-module__hoverReactPath___gx1IJ {
  font-size: 0.625rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.15rem;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__hoverElementName___QMLMl {
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markersLayer___-25j1 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 0;
  z-index: 99998;
  pointer-events: none;
}
.styles-module__markersLayer___-25j1 > * {
  pointer-events: auto;
}

.styles-module__fixedMarkersLayer___ffyX6 {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99998;
  pointer-events: none;
}
.styles-module__fixedMarkersLayer___ffyX6 > * {
  pointer-events: auto;
}

.styles-module__marker___6sQrs {
  position: absolute;
  width: 22px;
  height: 22px;
  background: var(--agentation-color-blue);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6875rem;
  font-weight: 600;
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(0, 0, 0, 0.04);
  -webkit-user-select: none;
  user-select: none;
  will-change: transform, opacity;
  contain: layout style;
  z-index: 1;
}
.styles-module__marker___6sQrs:hover {
  z-index: 2;
}
.styles-module__marker___6sQrs:not(.styles-module__enter___WFIki):not(.styles-module__exit___fyOJ0):not(.styles-module__clearing___FQ--7) {
  transition: background-color 0.15s ease, transform 0.1s ease;
}
.styles-module__marker___6sQrs.styles-module__enter___WFIki {
  animation: styles-module__markerIn___5FaAP 0.25s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.styles-module__marker___6sQrs.styles-module__exit___fyOJ0 {
  animation: styles-module__markerOut___GU5jX 0.2s ease-out both;
  pointer-events: none;
}
.styles-module__marker___6sQrs.styles-module__clearing___FQ--7 {
  animation: styles-module__markerOut___GU5jX 0.15s ease-out both;
  pointer-events: none;
}
.styles-module__marker___6sQrs:not(.styles-module__enter___WFIki):not(.styles-module__exit___fyOJ0):not(.styles-module__clearing___FQ--7):hover {
  transform: translate(-50%, -50%) scale(1.1);
}
.styles-module__marker___6sQrs.styles-module__pending___2IHLC {
  position: fixed;
  background-color: var(--agentation-color-blue);
  cursor: default;
}
.styles-module__marker___6sQrs.styles-module__fixed___dBMHC {
  position: fixed;
}
.styles-module__marker___6sQrs.styles-module__multiSelect___YWiuz {
  background-color: var(--agentation-color-green);
  width: 26px;
  height: 26px;
  border-radius: 6px;
  font-size: 0.75rem;
}
.styles-module__marker___6sQrs.styles-module__multiSelect___YWiuz.styles-module__pending___2IHLC {
  background-color: var(--agentation-color-green);
}
.styles-module__marker___6sQrs.styles-module__hovered___ZgXIy {
  background-color: var(--agentation-color-red);
}

.styles-module__renumber___nCTxD {
  display: block;
  animation: styles-module__renumberRoll___Wgbq3 0.2s ease-out;
}

@keyframes styles-module__renumberRoll___Wgbq3 {
  0% {
    transform: translateX(-40%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.styles-module__markerTooltip___aLJID {
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%) scale(0.909);
  z-index: 100002;
  background: #1a1a1a;
  padding: 8px 0.75rem;
  border-radius: 0.75rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-weight: 400;
  color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  min-width: 120px;
  max-width: 200px;
  pointer-events: none;
  cursor: default;
}
.styles-module__markerTooltip___aLJID.styles-module__enter___WFIki {
  animation: styles-module__tooltipIn___0N31w 0.1s ease-out forwards;
}

.styles-module__markerQuote___FHmrz {
  display: block;
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.3125rem;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markerNote___QkrrS {
  display: block;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.4;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: 2px;
}

.styles-module__markerHint___2iF-6 {
  display: block;
  font-size: 0.625rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 0.375rem;
  white-space: nowrap;
}

.styles-module__settingsPanel___OxX3Y {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  z-index: 1;
  overflow: hidden;
  background: #1c1c1c;
  border-radius: 1rem;
  padding: 13px 0 16px;
  min-width: 205px;
  cursor: default;
  opacity: 1;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  transition: background-color 0.25s ease, box-shadow 0.25s ease;
}
.styles-module__settingsPanel___OxX3Y::before, .styles-module__settingsPanel___OxX3Y::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 16px;
  z-index: 2;
  pointer-events: none;
}
.styles-module__settingsPanel___OxX3Y::before {
  left: 0;
  background: linear-gradient(to right, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___OxX3Y::after {
  right: 0;
  background: linear-gradient(to left, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___OxX3Y .styles-module__settingsHeader___pwDY9,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrand___0gJeM,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrandSlash___uTG18,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsVersion___TUcFq,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsSection___m-YM2,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsLabel___8UjfX,
.styles-module__settingsPanel___OxX3Y .styles-module__cycleButton___FMKfw,
.styles-module__settingsPanel___OxX3Y .styles-module__cycleDot___nPgLY,
.styles-module__settingsPanel___OxX3Y .styles-module__dropdownButton___16NPz,
.styles-module__settingsPanel___OxX3Y .styles-module__toggleLabel___Xm8Aa,
.styles-module__settingsPanel___OxX3Y .styles-module__customCheckbox___U39ax,
.styles-module__settingsPanel___OxX3Y .styles-module__sliderLabel___U8sPr,
.styles-module__settingsPanel___OxX3Y .styles-module__slider___GLdxp,
.styles-module__settingsPanel___OxX3Y .styles-module__themeToggle___2rUjA {
  transition: background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__settingsPanel___OxX3Y.styles-module__enter___WFIki {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0px);
  transition: opacity 0.2s ease, transform 0.2s ease, filter 0.2s ease;
}
.styles-module__settingsPanel___OxX3Y.styles-module__exit___fyOJ0 {
  opacity: 0;
  transform: translateY(8px) scale(0.95);
  filter: blur(5px);
  pointer-events: none;
  transition: opacity 0.1s ease, transform 0.1s ease, filter 0.1s ease;
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y {
  background: #1a1a1a;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsLabel___8UjfX {
  color: rgba(255, 255, 255, 0.6);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12 {
  color: rgba(255, 255, 255, 0.85);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12:hover {
  background: rgba(255, 255, 255, 0.1);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12.styles-module__selected___OwRqP {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__toggleLabel___Xm8Aa {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__settingsPanelContainer___Xksv8 {
  overflow: visible;
  position: relative;
  display: flex;
  padding: 0 1rem;
}

.styles-module__settingsPage___6YfHH {
  min-width: 100%;
  flex-shrink: 0;
  transition: transform 0.2s ease, opacity 0.2s ease;
  transition-delay: 0s;
  opacity: 1;
}

.styles-module__settingsPage___6YfHH.styles-module__slideLeft___Ps01J {
  transform: translateX(-24px);
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___uvCq6 {
  position: absolute;
  top: 0;
  left: 24px;
  width: 100%;
  height: 100%;
  padding: 3px 1rem 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, opacity 0.2s ease;
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___uvCq6.styles-module__slideIn___4-qXe {
  transform: translateX(-24px);
  opacity: 1;
  pointer-events: auto;
}

.styles-module__settingsNavLink___wCzJt {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0;
  border: none;
  background: transparent;
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___wCzJt:hover {
  color: rgba(255, 255, 255, 0.9);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt:hover {
  color: rgba(0, 0, 0, 0.8);
}
.styles-module__settingsNavLink___wCzJt svg {
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___wCzJt:hover svg {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt svg {
  color: rgba(0, 0, 0, 0.25);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt:hover svg {
  color: rgba(0, 0, 0, 0.8);
}

.styles-module__settingsNavLinkRight___ZWwhj {
  display: flex;
  align-items: center;
  gap: 6px;
}

.styles-module__mcpNavIndicator___cl9pO {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpNavIndicator___cl9pO.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___uNggr 2.5s ease-in-out infinite;
}
.styles-module__mcpNavIndicator___cl9pO.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___uNggr 1.5s ease-in-out infinite;
}

.styles-module__settingsBackButton___bIe2j {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 0 12px 0;
  margin: -6px 0 0.5rem 0;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 0;
  background: transparent;
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: -0.15px;
  color: #fff;
  cursor: pointer;
  transition: transform 0.12s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___bIe2j svg {
  opacity: 0.4;
  flex-shrink: 0;
  transition: opacity 0.15s ease, transform 0.18s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___bIe2j:hover {
  border-bottom-color: rgba(255, 255, 255, 0.07);
}
.styles-module__settingsBackButton___bIe2j:hover svg {
  opacity: 1;
}
[data-agentation-theme=light] .styles-module__settingsBackButton___bIe2j {
  color: rgba(0, 0, 0, 0.85);
  border-bottom-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsBackButton___bIe2j:hover {
  border-bottom-color: rgba(0, 0, 0, 0.08);
}

.styles-module__automationHeader___InP0r {
  display: flex;
  align-items: center;
  gap: 0.125rem;
  font-size: 0.8125rem;
  font-weight: 400;
  color: #fff;
}
[data-agentation-theme=light] .styles-module__automationHeader___InP0r {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__automationDescription___NKlmo {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 2px;
  line-height: 14px;
}
[data-agentation-theme=light] .styles-module__automationDescription___NKlmo {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__learnMoreLink___8xv-x {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: underline dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__learnMoreLink___8xv-x:hover {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__learnMoreLink___8xv-x {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__learnMoreLink___8xv-x:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__autoSendRow___UblX5 {
  display: flex;
  align-items: center;
  gap: 8px;
}

.styles-module__autoSendLabel___icDc2 {
  font-size: 0.6875rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__autoSendLabel___icDc2.styles-module__active___-zoN6 {
  color: #66b8ff;
  color: color(display-p3 0.4 0.72 1);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___icDc2 {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___icDc2.styles-module__active___-zoN6 {
  color: var(--agentation-color-blue);
}

.styles-module__webhookUrlInput___2375C {
  display: block;
  width: 100%;
  flex: 1;
  min-height: 60px;
  box-sizing: border-box;
  margin-top: 11px;
  padding: 8px 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.03);
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 400;
  color: #fff;
  outline: none;
  resize: none;
  user-select: text;
  transition: border-color 0.15s ease, background-color 0.15s ease, box-shadow 0.15s ease;
}
.styles-module__webhookUrlInput___2375C::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__webhookUrlInput___2375C:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C {
  border-color: rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.03);
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__settingsHeader___pwDY9 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
  margin-bottom: 0.5rem;
  padding-bottom: 9px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}

.styles-module__settingsBrand___0gJeM {
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: -0.0094em;
  color: #fff;
  text-decoration: none;
}

.styles-module__settingsBrandSlash___uTG18 {
  color: var(--agentation-color-accent);
  transition: color 0.2s ease;
}

.styles-module__settingsVersion___TUcFq {
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  margin-left: auto;
  letter-spacing: -0.0094em;
}

.styles-module__settingsSection___m-YM2 + .styles-module__settingsSection___m-YM2 {
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__settingsSection___m-YM2.styles-module__settingsSectionExtraPadding___jdhFV {
  padding-top: calc(0.5rem + 4px);
}

.styles-module__settingsSectionGrow___h-5HZ {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.styles-module__settingsRow___3sdhc {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
}
.styles-module__settingsRow___3sdhc.styles-module__settingsRowMarginTop___zA0Sp {
  margin-top: 8px;
}

.styles-module__dropdownContainer___BVnxe {
  position: relative;
}

.styles-module__dropdownButton___16NPz {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.5rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__dropdownButton___16NPz:hover {
  background: rgba(255, 255, 255, 0.08);
}
.styles-module__dropdownButton___16NPz svg {
  opacity: 0.6;
}

.styles-module__cycleButton___FMKfw {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0;
  border: none;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  letter-spacing: -0.0094em;
}
[data-agentation-theme=light] .styles-module__cycleButton___FMKfw {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__cycleButton___FMKfw:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.styles-module__settingsRowDisabled___EgS0V .styles-module__settingsLabel___8UjfX {
  color: rgba(255, 255, 255, 0.2);
}
[data-agentation-theme=light] .styles-module__settingsRowDisabled___EgS0V .styles-module__settingsLabel___8UjfX {
  color: rgba(0, 0, 0, 0.2);
}
.styles-module__settingsRowDisabled___EgS0V .styles-module__toggleSwitch___l4Ygm {
  opacity: 0.4;
  cursor: not-allowed;
}

@keyframes styles-module__cycleTextIn___Q6zJf {
  0% {
    opacity: 0;
    transform: translateY(-6px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.styles-module__cycleButtonText___fD1LR {
  display: inline-block;
  animation: styles-module__cycleTextIn___Q6zJf 0.2s ease-out;
}

.styles-module__cycleDots___LWuoQ {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.styles-module__cycleDot___nPgLY {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: scale(0.667);
  transition: background-color 0.25s ease-out, transform 0.25s ease-out;
}
.styles-module__cycleDot___nPgLY.styles-module__active___-zoN6 {
  background: #fff;
  transform: scale(1);
}
[data-agentation-theme=light] .styles-module__cycleDot___nPgLY {
  background: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__cycleDot___nPgLY.styles-module__active___-zoN6 {
  background: rgba(0, 0, 0, 0.7);
}

.styles-module__dropdownMenu___k73ER {
  position: absolute;
  right: 0;
  top: calc(100% + 0.25rem);
  background: #1a1a1a;
  border-radius: 0.5rem;
  padding: 0.25rem;
  min-width: 120px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1);
  z-index: 10;
  animation: styles-module__scaleIn___c-r1K 0.15s ease-out;
}

.styles-module__dropdownItem___ylsLj {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.5rem 0.625rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  cursor: pointer;
  text-align: left;
  transition: background-color 0.15s ease, color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__dropdownItem___ylsLj:hover {
  background: rgba(255, 255, 255, 0.08);
}
.styles-module__dropdownItem___ylsLj.styles-module__selected___OwRqP {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  font-weight: 600;
}

.styles-module__settingsLabel___8UjfX {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  gap: 0.125rem;
}
[data-agentation-theme=light] .styles-module__settingsLabel___8UjfX {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__settingsLabelMarker___ewdtV {
  padding-top: 3px;
  margin-bottom: 10px;
}

.styles-module__settingsOptions___LyrBA {
  display: flex;
  gap: 0.25rem;
}

.styles-module__settingsOption___UNa12 {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.375rem 0.5rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.6875rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
}
.styles-module__settingsOption___UNa12:hover {
  background: rgba(0, 0, 0, 0.05);
}
.styles-module__settingsOption___UNa12.styles-module__selected___OwRqP {
  background: color-mix(in srgb, var(--agentation-color-blue) 15%, transparent);
  color: var(--agentation-color-blue);
}

.styles-module__sliderContainer___ducXj {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.styles-module__slider___GLdxp {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 2px;
  outline: none;
  cursor: pointer;
}
.styles-module__slider___GLdxp::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 14px;
  height: 14px;
  background: white;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.styles-module__slider___GLdxp::-moz-range-thumb {
  width: 14px;
  height: 14px;
  background: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.styles-module__slider___GLdxp:hover::-webkit-slider-thumb {
  transform: scale(1.15);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}
.styles-module__slider___GLdxp:hover::-moz-range-thumb {
  transform: scale(1.15);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}

.styles-module__sliderLabels___FhLDB {
  display: flex;
  justify-content: space-between;
}

.styles-module__sliderLabel___U8sPr {
  font-size: 0.625rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: color 0.15s ease;
}
.styles-module__sliderLabel___U8sPr:hover {
  color: rgba(255, 255, 255, 0.7);
}
.styles-module__sliderLabel___U8sPr.styles-module__active___-zoN6 {
  color: rgba(255, 255, 255, 0.9);
}

.styles-module__colorOptions___iHCNX {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.375rem;
  margin-bottom: 1px;
}

.styles-module__colorOption___IodiY {
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid transparent;
  background-color: var(--swatch);
  cursor: pointer;
  transition: transform 0.2s cubic-bezier(0.25, 1, 0.5, 1);
}
@supports (color: color(display-p3 0 0 0)) {
  .styles-module__colorOption___IodiY {
    background-color: var(--swatch-p3);
  }
}
.styles-module__colorOption___IodiY:hover {
  transform: scale(1.15);
}
.styles-module__colorOption___IodiY.styles-module__selected___OwRqP {
  transform: scale(0.83);
}

.styles-module__colorOptionRing___U2xpo {
  display: flex;
  width: 24px;
  height: 24px;
  border: 2px solid transparent;
  border-radius: 50%;
  transition: border-color 0.3s ease;
}
.styles-module__colorOptionRing___U2xpo.styles-module__selected___OwRqP {
  border-color: var(--swatch);
}
@supports (color: color(display-p3 0 0 0)) {
  .styles-module__colorOptionRing___U2xpo.styles-module__selected___OwRqP {
    border-color: var(--swatch-p3);
  }
}

.styles-module__settingsToggle___fBrFn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}
.styles-module__settingsToggle___fBrFn + .styles-module__settingsToggle___fBrFn {
  margin-top: calc(0.5rem + 6px);
}
.styles-module__settingsToggle___fBrFn input[type=checkbox] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}
.styles-module__settingsToggle___fBrFn.styles-module__settingsToggleMarginBottom___MZUyF {
  margin-bottom: calc(0.5rem + 6px);
}

@keyframes styles-module__mcpPulse___uNggr {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
}
@keyframes styles-module__mcpPulseError___fov9B {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
}
.styles-module__mcpStatusDot___ibgkc {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___uNggr 1.5s infinite;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___uNggr 2.5s ease-in-out infinite;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__disconnected___cHPxR {
  background-color: var(--agentation-color-red);
  animation: styles-module__mcpPulseError___fov9B 2s infinite;
}

.styles-module__drawCanvas___7cG9U {
  position: fixed;
  inset: 0;
  z-index: 99996;
  pointer-events: none !important;
}
.styles-module__drawCanvas___7cG9U.styles-module__active___-zoN6 {
  pointer-events: auto !important;
  cursor: crosshair !important;
}
.styles-module__drawCanvas___7cG9U.styles-module__active___-zoN6[data-stroke-hover] {
  cursor: pointer !important;
}

.styles-module__dragSelection___kZLq2 {
  position: fixed;
  top: 0;
  left: 0;
  border: 2px solid color-mix(in srgb, var(--agentation-color-green) 60%, transparent);
  border-radius: 4px;
  background-color: color-mix(in srgb, var(--agentation-color-green) 8%, transparent);
  pointer-events: none;
  z-index: 99997;
  will-change: transform, width, height;
  contain: layout style;
}

.styles-module__dragCount___KM90j {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--agentation-color-green);
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
  min-width: 1.5rem;
  text-align: center;
}

.styles-module__highlightsContainer___-0xzG {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 99996;
}

.styles-module__selectedElementHighlight___fyVlI {
  position: fixed;
  top: 0;
  left: 0;
  border: 2px solid color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  border-radius: 4px;
  background: color-mix(in srgb, var(--agentation-color-green) 6%, transparent);
  pointer-events: none;
  will-change: transform, width, height;
  contain: layout style;
}

[data-agentation-theme=light] .styles-module__toolbarContainer___dIhma {
  background: #fff;
  color: rgba(0, 0, 0, 0.85);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:hover {
  background: #f5f5f5;
}
[data-agentation-theme=light] .styles-module__toggleContent___0yfyP {
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__toggleContent___0yfyP.styles-module__expandedToggle___F7SRN {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__toggleContent___0yfyP.styles-module__expandedToggle___F7SRN:hover {
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__toggleContent___0yfyP.styles-module__expandedToggle___F7SRN:hover::before {
  background: rgba(0, 0, 0, 0.06);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc:hover:not(:disabled):not([data-active=true]):not([data-failed=true]):not([data-auto-sync=true]):not([data-error=true]):not([data-no-hover=true]) {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-active=true] {
  color: var(--agentation-color-blue);
  background: color-mix(in srgb, var(--agentation-color-blue) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-error=true] {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-danger]:hover:not(:disabled):not([data-active=true]):not([data-failed=true]) {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-auto-sync=true] {
  color: var(--agentation-color-green);
  background: transparent;
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-failed=true] {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__buttonTooltip___Burd9 {
  background: #fff;
  color: rgba(0, 0, 0, 0.85);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__buttonTooltip___Burd9::after {
  background: #fff;
}
[data-agentation-theme=light] .styles-module__divider___c--s1 {
  background: rgba(0, 0, 0, 0.1);
}`,L={toolbar:"styles-module__toolbar___wNsdK",markersLayer:"styles-module__markersLayer___-25j1",fixedMarkersLayer:"styles-module__fixedMarkersLayer___ffyX6",controlsContent:"styles-module__controlsContent___9GJWU",disableTransitions:"styles-module__disableTransitions___EopxO",positionContext:"styles-module__positionContext___AZFHE",toolbarContainer:"styles-module__toolbarContainer___dIhma",entrance:"styles-module__entrance___sgHd8",toolbarEnter:"styles-module__toolbarEnter___u8RRu",hiding:"styles-module__hiding___1td44",toolbarHide:"styles-module__toolbarHide___y8kaT",collapsed:"styles-module__collapsed___Rydsn",expanded:"styles-module__expanded___ofKPx",serverConnected:"styles-module__serverConnected___Gfbou",buttonWrapper:"styles-module__buttonWrapper___rBcdv",toggleWrapper:"styles-module__toggleWrapper___7N0-q",togglePlaceholder:"styles-module__togglePlaceholder___wnqrL",toggleContent:"styles-module__toggleContent___0yfyP",expandedToggle:"styles-module__expandedToggle___F7SRN",toggleGlyph:"styles-module__toggleGlyph___R7Oom",toggleIcon:"styles-module__toggleIcon___Jbtus",toggleTopLine:"styles-module__toggleTopLine___hQaCm",toggleMiddleLine:"styles-module__toggleMiddleLine___sFFVe",toggleBottomLine:"styles-module__toggleBottomLine___V-jX3",toggleSparkle:"styles-module__toggleSparkle___eeF99",controlButton:"styles-module__controlButton___8Q0jc",visible:"styles-module__visible___KHwEW",hidden:"styles-module__hidden___Ae8H4",badge:"styles-module__badge___2XsgF",fadeOut:"styles-module__fadeOut___6Ut6-",badgeEnter:"styles-module__badgeEnter___mVQLj",statusShowing:"styles-module__statusShowing___te6iu",buttonBadge:"styles-module__buttonBadge___NeFWb",mcpIndicator:"styles-module__mcpIndicator___zGJeL",connected:"styles-module__connected___7c28g",mcpIndicatorPulseConnected:"styles-module__mcpIndicatorPulseConnected___EDodZ",connecting:"styles-module__connecting___uo-CW",mcpIndicatorPulseConnecting:"styles-module__mcpIndicatorPulseConnecting___cCYte",connectionIndicatorWrapper:"styles-module__connectionIndicatorWrapper___L-e-3",connectionIndicator:"styles-module__connectionIndicator___afk9p",connectionIndicatorVisible:"styles-module__connectionIndicatorVisible___C-i5B",connectionIndicatorConnected:"styles-module__connectionIndicatorConnected___IY8pR",connectionPulse:"styles-module__connectionPulse___-Zycw",connectionIndicatorDisconnected:"styles-module__connectionIndicatorDisconnected___kmpaZ",connectionIndicatorConnecting:"styles-module__connectionIndicatorConnecting___QmSLH",buttonTooltip:"styles-module__buttonTooltip___Burd9",tooltipsInSession:"styles-module__tooltipsInSession___-0lHH",sendButtonWrapper:"styles-module__sendButtonWrapper___UUxG6",sendButtonVisible:"styles-module__sendButtonVisible___WPSQU",shortcut:"styles-module__shortcut___lEAQk",tooltipBelow:"styles-module__tooltipBelow___m6ats",tooltipsHidden:"styles-module__tooltipsHidden___VtLJG",tooltipVisible:"styles-module__tooltipVisible___0jcCv",buttonWrapperAlignLeft:"styles-module__buttonWrapperAlignLeft___myzIp",buttonWrapperAlignRight:"styles-module__buttonWrapperAlignRight___HCQFR",divider:"styles-module__divider___c--s1",overlay:"styles-module__overlay___Q1O9y",hoverHighlight:"styles-module__hoverHighlight___ogakW",enter:"styles-module__enter___WFIki",hoverHighlightIn:"styles-module__hoverHighlightIn___6WYHY",multiSelectOutline:"styles-module__multiSelectOutline___cSJ-m",fadeIn:"styles-module__fadeIn___b9qmf",exit:"styles-module__exit___fyOJ0",singleSelectOutline:"styles-module__singleSelectOutline___QhX-O",hoverTooltip:"styles-module__hoverTooltip___bvLk7",hoverTooltipIn:"styles-module__hoverTooltipIn___FYGQx",hoverReactPath:"styles-module__hoverReactPath___gx1IJ",hoverElementName:"styles-module__hoverElementName___QMLMl",marker:"styles-module__marker___6sQrs",clearing:"styles-module__clearing___FQ--7",markerIn:"styles-module__markerIn___5FaAP",markerOut:"styles-module__markerOut___GU5jX",pending:"styles-module__pending___2IHLC",fixed:"styles-module__fixed___dBMHC",multiSelect:"styles-module__multiSelect___YWiuz",hovered:"styles-module__hovered___ZgXIy",renumber:"styles-module__renumber___nCTxD",renumberRoll:"styles-module__renumberRoll___Wgbq3",markerTooltip:"styles-module__markerTooltip___aLJID",tooltipIn:"styles-module__tooltipIn___0N31w",markerQuote:"styles-module__markerQuote___FHmrz",markerNote:"styles-module__markerNote___QkrrS",markerHint:"styles-module__markerHint___2iF-6",settingsPanel:"styles-module__settingsPanel___OxX3Y",settingsHeader:"styles-module__settingsHeader___pwDY9",settingsBrand:"styles-module__settingsBrand___0gJeM",settingsBrandSlash:"styles-module__settingsBrandSlash___uTG18",settingsVersion:"styles-module__settingsVersion___TUcFq",settingsSection:"styles-module__settingsSection___m-YM2",settingsLabel:"styles-module__settingsLabel___8UjfX",cycleButton:"styles-module__cycleButton___FMKfw",cycleDot:"styles-module__cycleDot___nPgLY",dropdownButton:"styles-module__dropdownButton___16NPz",toggleLabel:"styles-module__toggleLabel___Xm8Aa",customCheckbox:"styles-module__customCheckbox___U39ax",sliderLabel:"styles-module__sliderLabel___U8sPr",slider:"styles-module__slider___GLdxp",themeToggle:"styles-module__themeToggle___2rUjA",settingsOption:"styles-module__settingsOption___UNa12",selected:"styles-module__selected___OwRqP",settingsPanelContainer:"styles-module__settingsPanelContainer___Xksv8",settingsPage:"styles-module__settingsPage___6YfHH",slideLeft:"styles-module__slideLeft___Ps01J",automationsPage:"styles-module__automationsPage___uvCq6",slideIn:"styles-module__slideIn___4-qXe",settingsNavLink:"styles-module__settingsNavLink___wCzJt",settingsNavLinkRight:"styles-module__settingsNavLinkRight___ZWwhj",mcpNavIndicator:"styles-module__mcpNavIndicator___cl9pO",mcpPulse:"styles-module__mcpPulse___uNggr",settingsBackButton:"styles-module__settingsBackButton___bIe2j",automationHeader:"styles-module__automationHeader___InP0r",automationDescription:"styles-module__automationDescription___NKlmo",learnMoreLink:"styles-module__learnMoreLink___8xv-x",autoSendRow:"styles-module__autoSendRow___UblX5",autoSendLabel:"styles-module__autoSendLabel___icDc2",active:"styles-module__active___-zoN6",webhookUrlInput:"styles-module__webhookUrlInput___2375C",settingsSectionExtraPadding:"styles-module__settingsSectionExtraPadding___jdhFV",settingsSectionGrow:"styles-module__settingsSectionGrow___h-5HZ",settingsRow:"styles-module__settingsRow___3sdhc",settingsRowMarginTop:"styles-module__settingsRowMarginTop___zA0Sp",dropdownContainer:"styles-module__dropdownContainer___BVnxe",settingsRowDisabled:"styles-module__settingsRowDisabled___EgS0V",toggleSwitch:"styles-module__toggleSwitch___l4Ygm",cycleButtonText:"styles-module__cycleButtonText___fD1LR",cycleTextIn:"styles-module__cycleTextIn___Q6zJf",cycleDots:"styles-module__cycleDots___LWuoQ",dropdownMenu:"styles-module__dropdownMenu___k73ER",scaleIn:"styles-module__scaleIn___c-r1K",dropdownItem:"styles-module__dropdownItem___ylsLj",settingsLabelMarker:"styles-module__settingsLabelMarker___ewdtV",settingsOptions:"styles-module__settingsOptions___LyrBA",sliderContainer:"styles-module__sliderContainer___ducXj",sliderLabels:"styles-module__sliderLabels___FhLDB",colorOptions:"styles-module__colorOptions___iHCNX",colorOption:"styles-module__colorOption___IodiY",colorOptionRing:"styles-module__colorOptionRing___U2xpo",settingsToggle:"styles-module__settingsToggle___fBrFn",settingsToggleMarginBottom:"styles-module__settingsToggleMarginBottom___MZUyF",mcpStatusDot:"styles-module__mcpStatusDot___ibgkc",disconnected:"styles-module__disconnected___cHPxR",mcpPulseError:"styles-module__mcpPulseError___fov9B",drawCanvas:"styles-module__drawCanvas___7cG9U",dragSelection:"styles-module__dragSelection___kZLq2",dragCount:"styles-module__dragCount___KM90j",highlightsContainer:"styles-module__highlightsContainer___-0xzG",selectedElementHighlight:"styles-module__selectedElementHighlight___fyVlI",scaleOut:"styles-module__scaleOut___Wctwz",slideUp:"styles-module__slideUp___kgD36",slideDown:"styles-module__slideDown___zcdje"};function ya({active:t}){return e.jsxs("svg",{className:L.toggleGlyph,"data-active":t,width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[e.jsx("path",{className:L.toggleTopLine,d:"M5.5 6.75H18.5"}),e.jsx("path",{className:L.toggleMiddleLine,d:"M5.5 12H11.5"}),e.jsx("path",{className:L.toggleBottomLine,d:"M5.5 17.25H9.25"}),e.jsx("path",{className:L.toggleSparkle,d:"M16 12.75L16.5179 13.9677C16.8078 14.6494 17.3506 15.1922 18.0323 15.4821L19.25 16L18.0323 16.5179C17.3506 16.8078 16.8078 17.3506 16.5179 18.0323L16 19.25L15.4821 18.0323C15.1922 17.3506 14.6494 16.8078 13.9677 16.5179L12.75 16L13.9677 15.4821C14.6494 15.1922 15.1922 14.6494 15.4821 13.9677L16 12.75Z"})]})}var X={navigation:{width:800,height:56},hero:{width:800,height:320},header:{width:800,height:80},section:{width:800,height:400},sidebar:{width:240,height:400},footer:{width:800,height:160},modal:{width:480,height:300},card:{width:280,height:240},text:{width:400,height:120},image:{width:320,height:200},video:{width:480,height:270},table:{width:560,height:220},grid:{width:600,height:300},list:{width:300,height:180},chart:{width:400,height:240},button:{width:140,height:40},input:{width:280,height:56},form:{width:360,height:320},tabs:{width:480,height:240},dropdown:{width:200,height:200},toggle:{width:44,height:24},search:{width:320,height:44},avatar:{width:48,height:48},badge:{width:80,height:28},breadcrumb:{width:300,height:24},pagination:{width:300,height:36},progress:{width:240,height:8},divider:{width:600,height:1},accordion:{width:400,height:200},carousel:{width:600,height:300},toast:{width:320,height:64},tooltip:{width:180,height:40},pricing:{width:300,height:360},testimonial:{width:360,height:200},cta:{width:600,height:160},alert:{width:400,height:56},banner:{width:800,height:48},stat:{width:200,height:120},stepper:{width:480,height:48},tag:{width:72,height:28},rating:{width:160,height:28},map:{width:480,height:300},timeline:{width:360,height:320},fileUpload:{width:360,height:180},codeBlock:{width:480,height:200},calendar:{width:300,height:300},notification:{width:360,height:72},productCard:{width:280,height:360},profile:{width:280,height:200},drawer:{width:320,height:400},popover:{width:240,height:160},logo:{width:120,height:40},faq:{width:560,height:320},gallery:{width:560,height:360},checkbox:{width:20,height:20},radio:{width:20,height:20},slider:{width:240,height:32},datePicker:{width:300,height:320},skeleton:{width:320,height:120},chip:{width:96,height:32},icon:{width:24,height:24},spinner:{width:32,height:32},feature:{width:360,height:200},team:{width:560,height:280},login:{width:360,height:360},contact:{width:400,height:320}},zi=[{section:"Layout",items:[{type:"navigation",label:"Navigation",...X.navigation},{type:"header",label:"Header",...X.header},{type:"hero",label:"Hero",...X.hero},{type:"section",label:"Section",...X.section},{type:"sidebar",label:"Sidebar",...X.sidebar},{type:"footer",label:"Footer",...X.footer},{type:"modal",label:"Modal",...X.modal},{type:"banner",label:"Banner",...X.banner},{type:"drawer",label:"Drawer",...X.drawer},{type:"popover",label:"Popover",...X.popover},{type:"divider",label:"Divider",...X.divider}]},{section:"Content",items:[{type:"card",label:"Card",...X.card},{type:"text",label:"Text",...X.text},{type:"image",label:"Image",...X.image},{type:"video",label:"Video",...X.video},{type:"table",label:"Table",...X.table},{type:"grid",label:"Grid",...X.grid},{type:"list",label:"List",...X.list},{type:"chart",label:"Chart",...X.chart},{type:"codeBlock",label:"Code Block",...X.codeBlock},{type:"map",label:"Map",...X.map},{type:"timeline",label:"Timeline",...X.timeline},{type:"calendar",label:"Calendar",...X.calendar},{type:"accordion",label:"Accordion",...X.accordion},{type:"carousel",label:"Carousel",...X.carousel},{type:"logo",label:"Logo",...X.logo},{type:"faq",label:"FAQ",...X.faq},{type:"gallery",label:"Gallery",...X.gallery}]},{section:"Controls",items:[{type:"button",label:"Button",...X.button},{type:"input",label:"Input",...X.input},{type:"search",label:"Search",...X.search},{type:"form",label:"Form",...X.form},{type:"tabs",label:"Tabs",...X.tabs},{type:"dropdown",label:"Dropdown",...X.dropdown},{type:"toggle",label:"Toggle",...X.toggle},{type:"stepper",label:"Stepper",...X.stepper},{type:"rating",label:"Rating",...X.rating},{type:"fileUpload",label:"File Upload",...X.fileUpload},{type:"checkbox",label:"Checkbox",...X.checkbox},{type:"radio",label:"Radio",...X.radio},{type:"slider",label:"Slider",...X.slider},{type:"datePicker",label:"Date Picker",...X.datePicker}]},{section:"Elements",items:[{type:"avatar",label:"Avatar",...X.avatar},{type:"badge",label:"Badge",...X.badge},{type:"tag",label:"Tag",...X.tag},{type:"breadcrumb",label:"Breadcrumb",...X.breadcrumb},{type:"pagination",label:"Pagination",...X.pagination},{type:"progress",label:"Progress",...X.progress},{type:"alert",label:"Alert",...X.alert},{type:"toast",label:"Toast",...X.toast},{type:"notification",label:"Notification",...X.notification},{type:"tooltip",label:"Tooltip",...X.tooltip},{type:"stat",label:"Stat",...X.stat},{type:"skeleton",label:"Skeleton",...X.skeleton},{type:"chip",label:"Chip",...X.chip},{type:"icon",label:"Icon",...X.icon},{type:"spinner",label:"Spinner",...X.spinner}]},{section:"Blocks",items:[{type:"pricing",label:"Pricing",...X.pricing},{type:"testimonial",label:"Testimonial",...X.testimonial},{type:"cta",label:"CTA",...X.cta},{type:"productCard",label:"Product Card",...X.productCard},{type:"profile",label:"Profile",...X.profile},{type:"feature",label:"Feature",...X.feature},{type:"team",label:"Team",...X.team},{type:"login",label:"Login",...X.login},{type:"contact",label:"Contact",...X.contact}]}],Ht={};for(const t of zi)for(const n of t.items)Ht[n.type]=n;function D({w:t,h:n=3,strong:o}){return e.jsx("div",{style:{width:typeof t=="number"?`${t}px`:t,height:n,borderRadius:2,background:o?"var(--agd-bar-strong)":"var(--agd-bar)",flexShrink:0}})}function Je({w:t,h:n,radius:o=3,style:s}){return e.jsx("div",{style:{width:typeof t=="number"?`${t}px`:t,height:typeof n=="number"?`${n}px`:n,borderRadius:o,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0,...s}})}function vt({size:t}){return e.jsx("div",{style:{width:t,height:t,borderRadius:"50%",border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0}})}function xa({width:t,height:n}){const o=Math.max(8,n*.2);return e.jsxs("div",{style:{display:"flex",alignItems:"center",height:"100%",padding:`0 ${o}px`,gap:t*.02},children:[e.jsx(Je,{w:Math.max(20,n*.5),h:Math.max(12,n*.4),radius:2}),e.jsxs("div",{style:{flex:1,display:"flex",gap:t*.03,marginLeft:t*.04},children:[e.jsx(D,{w:t*.06}),e.jsx(D,{w:t*.07}),e.jsx(D,{w:t*.05}),e.jsx(D,{w:t*.06})]}),e.jsx(Je,{w:t*.1,h:Math.min(28,n*.5),radius:4})]})}function ba({width:t,height:n,text:o}){return e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.05},children:[o?e.jsx("span",{style:{fontSize:Math.min(20,n*.08),fontWeight:600,color:"var(--agd-text-3)",textAlign:"center",maxWidth:"80%"},children:o}):e.jsx(D,{w:t*.5,h:Math.max(6,n*.04),strong:!0}),e.jsx(D,{w:t*.6}),e.jsx(D,{w:t*.4}),e.jsx(Je,{w:Math.min(140,t*.2),h:Math.min(36,n*.12),radius:6,style:{marginTop:n*.06}})]})}function wa({width:t,height:n}){const o=Math.max(3,Math.floor(n/36));return e.jsxs("div",{style:{padding:t*.08,display:"flex",flexDirection:"column",gap:n*.03},children:[e.jsx(D,{w:t*.6,h:4,strong:!0}),Array.from({length:o},(s,r)=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[e.jsx(Je,{w:10,h:10,radius:2}),e.jsx(D,{w:t*(.4+r*17%30/100)})]},r))]})}function va({width:t,height:n}){const o=Math.max(2,Math.min(4,Math.floor(t/160)));return e.jsx("div",{style:{display:"flex",padding:`${n*.12}px ${t*.03}px`,gap:t*.05},children:Array.from({length:o},(s,r)=>e.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[e.jsx(D,{w:"60%",h:3,strong:!0}),e.jsx(D,{w:"80%",h:2}),e.jsx(D,{w:"70%",h:2}),e.jsx(D,{w:"60%",h:2})]},r))})}function ka({width:t,height:n}){return e.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[e.jsxs("div",{style:{padding:"10px 12px",borderBottom:"1px solid var(--agd-stroke)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[e.jsx(D,{w:t*.3,h:4,strong:!0}),e.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),e.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[e.jsx(D,{w:"90%"}),e.jsx(D,{w:"70%"}),e.jsx(D,{w:"80%"})]}),e.jsxs("div",{style:{padding:"10px 12px",borderTop:"1px solid var(--agd-stroke)",display:"flex",justifyContent:"flex-end",gap:8},children:[e.jsx(Je,{w:70,h:26,radius:4}),e.jsx(Je,{w:70,h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})}function ja({width:t,height:n}){return e.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[e.jsx("div",{style:{height:"40%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),e.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[e.jsx(D,{w:"70%",h:4,strong:!0}),e.jsx(D,{w:"95%",h:2}),e.jsx(D,{w:"85%",h:2}),e.jsx(D,{w:"50%",h:2})]})]})}function Sa({width:t,height:n,text:o}){if(o)return e.jsx("div",{style:{padding:4,fontSize:Math.min(14,n*.3),lineHeight:1.5,color:"var(--agd-text-3)",wordBreak:"break-word",overflow:"hidden"},children:o});const s=Math.max(2,Math.floor(n/18));return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6,padding:4},children:[e.jsx(D,{w:t*.6,h:5,strong:!0}),Array.from({length:s},(r,i)=>e.jsx(D,{w:`${70+i*13%25}%`,h:2},i))]})}function Ca({width:t,height:n}){return e.jsx("div",{style:{height:"100%",position:"relative"},children:e.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,preserveAspectRatio:"none",fill:"none",children:[e.jsx("line",{x1:"0",y1:"0",x2:t,y2:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),e.jsx("line",{x1:t,y1:"0",x2:"0",y2:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),e.jsx("circle",{cx:t*.3,cy:n*.3,r:Math.min(t,n)*.08,fill:"var(--agd-fill)",stroke:"var(--agd-stroke)",strokeWidth:"0.8"})]})})}function Ma({width:t,height:n}){const o=Math.max(2,Math.min(5,Math.floor(t/100))),s=Math.max(2,Math.min(6,Math.floor(n/32)));return e.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[e.jsx("div",{style:{display:"flex",borderBottom:"1px solid var(--agd-stroke)",padding:"6px 0"},children:Array.from({length:o},(r,i)=>e.jsx("div",{style:{flex:1,padding:"0 8px"},children:e.jsx(D,{w:"70%",h:3,strong:!0})},i))}),Array.from({length:s},(r,i)=>e.jsx("div",{style:{display:"flex",borderBottom:"1px solid rgba(255,255,255,0.03)",padding:"6px 0"},children:Array.from({length:o},(a,h)=>e.jsx("div",{style:{flex:1,padding:"0 8px"},children:e.jsx(D,{w:`${50+(i*7+h*13)%40}%`,h:2})},h))},i))]})}function $a({width:t,height:n}){const o=Math.max(2,Math.floor(n/28));return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4,padding:4},children:Array.from({length:o},(s,r)=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"4px 0"},children:[e.jsx(vt,{size:8}),e.jsx(D,{w:`${55+r*17%35}%`,h:2})]},r))})}function Ra({width:t,height:n,text:o}){return e.jsx("div",{style:{height:"100%",borderRadius:Math.min(8,n/3),border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:o?e.jsx("span",{style:{fontSize:Math.min(13,n*.4),fontWeight:500,color:"var(--agd-text-3)",letterSpacing:"-0.01em"},children:o}):e.jsx(D,{w:Math.max(20,t*.5),h:3,strong:!0})})}function Ea({width:t,height:n}){return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4,height:"100%",justifyContent:"center"},children:[e.jsx(D,{w:Math.min(80,t*.3),h:2}),e.jsx("div",{style:{height:Math.min(36,n*.6),borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",paddingLeft:8},children:e.jsx(D,{w:"40%",h:2})})]})}function Ia({width:t,height:n}){const o=Math.max(2,Math.min(5,Math.floor(n/56)));return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:n*.04,padding:8},children:[Array.from({length:o},(s,r)=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[e.jsx(D,{w:60+r*17%30,h:2}),e.jsx(Je,{w:"100%",h:28,radius:4})]},r)),e.jsx(Je,{w:Math.min(120,t*.35),h:30,radius:6,style:{marginTop:8,alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}function Na({width:t,height:n}){const o=Math.max(2,Math.min(4,Math.floor(t/120)));return e.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[e.jsx("div",{style:{display:"flex",gap:2,borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:o},(s,r)=>e.jsx("div",{style:{padding:"8px 12px",borderBottom:r===0?"2px solid var(--agd-bar-strong)":"none"},children:e.jsx(D,{w:60,h:3,strong:r===0})},r))}),e.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[e.jsx(D,{w:"80%",h:2}),e.jsx(D,{w:"65%",h:2}),e.jsx(D,{w:"75%",h:2})]})]})}function La({width:t,height:n}){const o=Math.min(t,n)/2;return e.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[e.jsx("circle",{cx:t/2,cy:n/2,r:o-1,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"1.5",strokeDasharray:"3 2"}),e.jsx("circle",{cx:t/2,cy:n*.38,r:o*.28,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"}),e.jsx("path",{d:`M${t/2-o*.55} ${n*.78} C${t/2-o*.55} ${n*.55} ${t/2+o*.55} ${n*.55} ${t/2+o*.55} ${n*.78}`,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"})]})}function Ta({width:t,height:n}){return e.jsx("div",{style:{height:"100%",borderRadius:n/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(D,{w:Math.max(16,t*.5),h:2,strong:!0})})}function Da({width:t,height:n}){return e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.08},children:[e.jsx(D,{w:t*.5,h:Math.max(5,n*.06),strong:!0}),e.jsx(D,{w:t*.35})]})}function Ba({width:t,height:n}){return e.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%",gap:n*.04,padding:t*.04},children:[e.jsx(D,{w:t*.3,h:4,strong:!0}),e.jsx(D,{w:t*.7}),e.jsx(D,{w:t*.5}),e.jsxs("div",{style:{flex:1,display:"flex",gap:t*.03,marginTop:n*.06},children:[e.jsx(Je,{w:"33%",h:"100%",radius:4}),e.jsx(Je,{w:"33%",h:"100%",radius:4}),e.jsx(Je,{w:"33%",h:"100%",radius:4})]})]})}function Pa({width:t,height:n}){const o=Math.max(2,Math.min(4,Math.floor(t/140))),s=Math.max(1,Math.min(3,Math.floor(n/120)));return e.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${o}, 1fr)`,gridTemplateRows:`repeat(${s}, 1fr)`,gap:6,height:"100%"},children:Array.from({length:o*s},(r,i)=>e.jsx(Je,{w:"100%",h:"100%",radius:4},i))})}function Aa({width:t,height:n}){const o=Math.max(2,Math.floor((n-32)/28));return e.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[e.jsx("div",{style:{padding:"6px 8px",borderBottom:"1px solid var(--agd-stroke)"},children:e.jsx(D,{w:t*.5,h:3,strong:!0})}),e.jsx("div",{style:{flex:1,padding:4,display:"flex",flexDirection:"column",gap:2},children:Array.from({length:o},(s,r)=>e.jsx("div",{style:{padding:"4px 6px",borderRadius:3,background:r===0?"var(--agd-fill)":"transparent"},children:e.jsx(D,{w:`${50+r*17%35}%`,h:2,strong:r===0})},r))})]})}function Oa({width:t,height:n}){const o=Math.min(t,n)/2;return e.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[e.jsx("rect",{x:"1",y:"1",width:t-2,height:n-2,rx:o,stroke:"var(--agd-stroke)",strokeWidth:"1"}),e.jsx("circle",{cx:t-o,cy:n/2,r:o*.7,fill:"var(--agd-bar)"})]})}function za({width:t,height:n}){const o=Math.min(n/2,20);return e.jsxs("div",{style:{height:"100%",borderRadius:o,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${o*.6}px`,gap:6},children:[e.jsx(vt,{size:Math.min(14,n*.4)}),e.jsx(D,{w:"50%",h:2})]})}function Fa({width:t,height:n}){return e.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[e.jsx(vt,{size:Math.min(20,n*.5)}),e.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[e.jsx(D,{w:"60%",h:3,strong:!0}),e.jsx(D,{w:"80%",h:2})]}),e.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3,flexShrink:0}})]})}function Wa({width:t,height:n}){return e.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[e.jsx("rect",{x:"0",y:"0",width:t,height:n,rx:n/2,stroke:"var(--agd-stroke)",strokeWidth:"0.8"}),e.jsx("rect",{x:"1",y:"1",width:t*.65,height:n-2,rx:(n-2)/2,fill:"var(--agd-bar)"})]})}function Ha({width:t,height:n}){const o=Math.max(3,Math.min(7,Math.floor(t/50))),s=t/(o*2);return e.jsx("div",{style:{height:"100%",display:"flex",alignItems:"flex-end",justifyContent:"space-around",padding:"0 4px",borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:o},(r,i)=>{const a=30+(i*37+17)%55;return e.jsx(Je,{w:s,h:`${a}%`,radius:2},i)})})}function Ya({width:t,height:n}){const o=Math.min(t,n)*.12;return e.jsxs("div",{style:{height:"100%",position:"relative",display:"flex",alignItems:"center",justifyContent:"center"},children:[e.jsx(Je,{w:"100%",h:"100%",radius:4}),e.jsx("div",{style:{position:"absolute",width:o*2,height:o*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx("div",{style:{width:0,height:0,borderLeft:`${o*.6}px solid var(--agd-bar-strong)`,borderTop:`${o*.4}px solid transparent`,borderBottom:`${o*.4}px solid transparent`,marginLeft:o*.15}})})]})}function Xa({width:t,height:n}){return e.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[e.jsx("div",{style:{flex:1,width:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(D,{w:"60%",h:2})}),e.jsx("div",{style:{width:8,height:8,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-5}})]})}function Ua({width:t,height:n}){const o=Math.max(2,Math.min(4,Math.floor(t/80)));return e.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%",gap:4},children:Array.from({length:o},(s,r)=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[r>0&&e.jsx("span",{style:{color:"var(--agd-stroke)",fontSize:10},children:"/"}),e.jsx(D,{w:40+r*13%20,h:2,strong:r===o-1})]},r))})}function Qa({width:t,height:n}){const o=Math.max(3,Math.min(5,Math.floor(t/40))),s=Math.min(28,n*.8);return e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:4},children:Array.from({length:o},(r,i)=>e.jsx(Je,{w:s,h:s,radius:4,style:i===1?{background:"var(--agd-bar)"}:void 0},i))})}function qa({width:t}){return e.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%"},children:e.jsx("div",{style:{width:"100%",height:1,background:"var(--agd-stroke)"}})})}function Ga({width:t,height:n}){const o=Math.max(2,Math.min(4,Math.floor(n/40)));return e.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:o},(s,r)=>e.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:r===0?2:1},children:[e.jsx(D,{w:`${40+r*17%25}%`,h:3,strong:!0}),e.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:r===0?"▼":"▶"})]},r))})}function Va({width:t,height:n}){return e.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:6},children:[e.jsxs("div",{style:{flex:1,display:"flex",gap:6,alignItems:"center"},children:[e.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"‹"}),e.jsx(Je,{w:"100%",h:"100%",radius:4}),e.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"›"})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:4},children:[e.jsx(vt,{size:5}),e.jsx(vt,{size:5}),e.jsx(vt,{size:5})]})]})}function Ka({width:t,height:n}){return e.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:10,gap:n*.04},children:[e.jsx(D,{w:t*.4,h:3,strong:!0}),e.jsx(D,{w:t*.3,h:6,strong:!0}),e.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4,width:"100%",padding:"8px 0"},children:Array.from({length:4},(o,s)=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[e.jsx(vt,{size:5}),e.jsx(D,{w:`${50+s*17%35}%`,h:2})]},s))}),e.jsx(Je,{w:t*.7,h:Math.min(32,n*.1),radius:6,style:{background:"var(--agd-bar)"}})]})}function Ja({width:t,height:n}){return e.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:10,gap:8},children:[e.jsx("span",{style:{fontSize:18,lineHeight:1,color:"var(--agd-stroke)",fontFamily:"serif"},children:"“"}),e.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[e.jsx(D,{w:"90%",h:2}),e.jsx(D,{w:"75%",h:2}),e.jsx(D,{w:"60%",h:2})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[e.jsx(vt,{size:20}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[e.jsx(D,{w:60,h:3,strong:!0}),e.jsx(D,{w:40,h:2})]})]})]})}function Za({width:t,height:n}){return e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.08},children:[e.jsx(D,{w:t*.5,h:Math.max(4,n*.05),strong:!0}),e.jsx(D,{w:t*.35}),e.jsx(Je,{w:Math.min(140,t*.25),h:Math.min(32,n*.15),radius:6,style:{marginTop:n*.04,background:"var(--agd-bar)"}})]})}function ec({width:t,height:n}){return e.jsxs("div",{style:{height:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[e.jsx("div",{style:{width:16,height:16,borderRadius:"50%",border:"1.5px solid var(--agd-bar-strong)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:e.jsx("div",{style:{width:2,height:6,background:"var(--agd-bar-strong)",borderRadius:1}})}),e.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[e.jsx(D,{w:"40%",h:3,strong:!0}),e.jsx(D,{w:"70%",h:2})]})]})}function tc({width:t,height:n}){return e.jsxs("div",{style:{height:"100%",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"0 12px"},children:[e.jsx(D,{w:t*.4,h:3,strong:!0}),e.jsx(Je,{w:60,h:Math.min(24,n*.6),radius:4})]})}function nc({width:t,height:n}){return e.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[e.jsx(D,{w:t*.5,h:2}),e.jsx(D,{w:t*.4,h:Math.max(8,n*.18),strong:!0}),e.jsx(D,{w:t*.3,h:2})]})}function oc({width:t,height:n}){const o=Math.max(3,Math.min(5,Math.floor(t/100))),s=Math.min(12,n*.35);return e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",height:"100%",padding:"0 8px"},children:Array.from({length:o},(r,i)=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:0,flex:1},children:[e.jsx("div",{style:{width:s,height:s,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:i===0?"var(--agd-bar)":"transparent",flexShrink:0}}),i<o-1&&e.jsx("div",{style:{flex:1,height:1,background:"var(--agd-stroke)",margin:"0 4px"}})]},i))})}function sc({width:t,height:n}){return e.jsxs("div",{style:{height:"100%",borderRadius:4,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:4,padding:"0 6px"},children:[e.jsx(D,{w:Math.max(16,t*.5),h:2,strong:!0}),e.jsx("div",{style:{width:8,height:8,borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0}})]})}function rc({width:t,height:n}){const s=Math.min(n*.7,t/7.5);return e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:s*.2},children:Array.from({length:5},(r,i)=>e.jsx("svg",{width:s,height:s,viewBox:"0 0 16 16",fill:"none",children:e.jsx("path",{d:"M8 1.5l2 4 4.5.7-3.25 3.1.75 4.5L8 11.4l-4 2.4.75-4.5L1.5 6.2 6 5.5z",stroke:"var(--agd-stroke)",strokeWidth:"0.8",fill:i<3?"var(--agd-bar)":"none"})},i))})}function ic({width:t,height:n}){return e.jsxs("div",{style:{height:"100%",position:"relative",borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",overflow:"hidden"},children:[e.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",style:{position:"absolute",inset:0},children:[e.jsx("line",{x1:0,y1:n*.3,x2:t,y2:n*.7,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".2"}),e.jsx("line",{x1:0,y1:n*.6,x2:t,y2:n*.2,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"}),e.jsx("line",{x1:t*.4,y1:0,x2:t*.6,y2:n,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"})]}),e.jsx("div",{style:{position:"absolute",left:"50%",top:"40%",transform:"translate(-50%, -100%)"},children:e.jsxs("svg",{width:"16",height:"22",viewBox:"0 0 16 22",fill:"none",children:[e.jsx("path",{d:"M8 0C3.6 0 0 3.6 0 8c0 6 8 14 8 14s8-8 8-14c0-4.4-3.6-8-8-8z",fill:"var(--agd-bar)",opacity:".4"}),e.jsx("circle",{cx:"8",cy:"8",r:"3",fill:"var(--agd-fill)"})]})})]})}function lc({width:t,height:n}){const o=Math.max(3,Math.min(5,Math.floor(n/60)));return e.jsxs("div",{style:{display:"flex",height:"100%",padding:"8px 0"},children:[e.jsx("div",{style:{width:16,display:"flex",flexDirection:"column",alignItems:"center"},children:Array.from({length:o},(s,r)=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",flex:1},children:[e.jsx(vt,{size:8}),r<o-1&&e.jsx("div",{style:{flex:1,width:1,background:"var(--agd-stroke)"}})]},r))}),e.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",justifyContent:"space-around",paddingLeft:8},children:Array.from({length:o},(s,r)=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[e.jsx(D,{w:`${35+r*13%25}%`,h:3,strong:!0}),e.jsx(D,{w:`${50+r*17%30}%`,h:2})]},r))})]})}function ac({width:t,height:n}){return e.jsxs("div",{style:{height:"100%",borderRadius:8,border:"2px dashed var(--agd-stroke)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[e.jsx("path",{d:"M12 16V4m0 0l-4 4m4-4l4 4",stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),e.jsx("path",{d:"M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2",stroke:"var(--agd-stroke)",strokeWidth:"1.5"})]}),e.jsx(D,{w:t*.4,h:2}),e.jsx(D,{w:t*.25,h:2})]})}function cc({width:t,height:n}){const o=Math.max(3,Math.min(8,Math.floor(n/20)));return e.jsxs("div",{style:{height:"100%",borderRadius:6,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",padding:8,display:"flex",flexDirection:"column",gap:4},children:[e.jsxs("div",{style:{display:"flex",gap:3,marginBottom:4},children:[e.jsx(vt,{size:6}),e.jsx(vt,{size:6}),e.jsx(vt,{size:6})]}),Array.from({length:o},(s,r)=>e.jsx("div",{style:{display:"flex",gap:6,paddingLeft:r>0&&r<o-1?12:0},children:e.jsx(D,{w:`${25+r*23%50}%`,h:2,strong:r===0})},r))]})}function dc({width:t,height:n}){const r=Math.min((t-16)/7,(n-40)/6);return e.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 8px"},children:[e.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"‹"}),e.jsx(D,{w:t*.3,h:3,strong:!0}),e.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"›"})]}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:2,padding:"0 4px",flex:1},children:[Array.from({length:7},(i,a)=>e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:r*.6},children:e.jsx(D,{w:r*.5,h:2})},`h${a}`)),Array.from({length:35},(i,a)=>e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:r},children:e.jsx("div",{style:{width:r*.6,height:r*.6,borderRadius:"50%",background:a===12?"var(--agd-bar)":"transparent",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx("div",{style:{width:2,height:2,borderRadius:1,background:"var(--agd-bar-strong)",opacity:a===12?1:.3}})})},a))]})]})}function _c({width:t,height:n}){return e.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[e.jsx(vt,{size:Math.min(32,n*.55)}),e.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[e.jsx(D,{w:"50%",h:3,strong:!0}),e.jsx(D,{w:"75%",h:2})]}),e.jsx(D,{w:30,h:2})]})}function uc({width:t,height:n}){return e.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[e.jsx("div",{style:{height:"50%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),e.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[e.jsx(D,{w:"65%",h:4,strong:!0}),e.jsx(D,{w:"40%",h:3}),e.jsx("div",{style:{flex:1}}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[e.jsx(D,{w:"30%",h:5,strong:!0}),e.jsx(Je,{w:Math.min(70,t*.3),h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})]})}function hc({width:t,height:n}){const o=Math.min(48,n*.3);return e.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[e.jsx(vt,{size:o}),e.jsx(D,{w:t*.45,h:4,strong:!0}),e.jsx(D,{w:t*.3,h:2}),e.jsxs("div",{style:{display:"flex",gap:t*.08,marginTop:n*.04},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[e.jsx(D,{w:20,h:3,strong:!0}),e.jsx(D,{w:28,h:2})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[e.jsx(D,{w:20,h:3,strong:!0}),e.jsx(D,{w:28,h:2})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[e.jsx(D,{w:20,h:3,strong:!0}),e.jsx(D,{w:28,h:2})]})]})]})}function mc({width:t,height:n}){const o=Math.max(t*.6,80),s=Math.max(3,Math.floor(n/40));return e.jsxs("div",{style:{height:"100%",display:"flex"},children:[e.jsx("div",{style:{width:t-o,background:"var(--agd-fill)",opacity:.3}}),e.jsxs("div",{style:{flex:1,borderLeft:"1px solid var(--agd-stroke)",display:"flex",flexDirection:"column",padding:t*.04},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:n*.06},children:[e.jsx(D,{w:o*.4,h:4,strong:!0}),e.jsx("div",{style:{width:12,height:12,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),Array.from({length:s},(r,i)=>e.jsx("div",{style:{padding:"6px 0"},children:e.jsx(D,{w:`${50+i*17%35}%`,h:2,strong:i===0})},i))]})]})}function pc({width:t,height:n}){return e.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[e.jsxs("div",{style:{flex:1,width:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",padding:10,display:"flex",flexDirection:"column",gap:5},children:[e.jsx(D,{w:"70%",h:3,strong:!0}),e.jsx(D,{w:"90%",h:2}),e.jsx(D,{w:"60%",h:2})]}),e.jsx("div",{style:{width:10,height:10,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-6}})]})}function fc({width:t,height:n}){const o=Math.min(n*.7,t*.3);return e.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:t*.08},children:[e.jsx(Je,{w:o,h:o,radius:o*.25}),e.jsx(D,{w:t*.45,h:Math.max(4,n*.2),strong:!0})]})}function gc({width:t,height:n}){const o=Math.max(2,Math.min(5,Math.floor(n/56)));return e.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:o},(s,r)=>e.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:r===0?2:1},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[e.jsx("span",{style:{fontSize:9,fontWeight:700,color:"var(--agd-stroke)"},children:"Q"}),e.jsx(D,{w:t*(.3+r*13%25/100),h:3,strong:!0})]}),e.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:r===0?"▼":"▶"})]},r))})}function yc({width:t,height:n}){const o=Math.max(2,Math.min(4,Math.floor(t/120))),s=Math.max(1,Math.min(3,Math.floor(n/120)));return e.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${o}, 1fr)`,gridTemplateRows:`repeat(${s}, 1fr)`,gap:4,height:"100%"},children:Array.from({length:o*s},(r,i)=>e.jsx("div",{style:{borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",position:"relative",overflow:"hidden"},children:e.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",preserveAspectRatio:"none",fill:"none",children:[e.jsx("line",{x1:"0",y1:"0",x2:"100",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"}),e.jsx("line",{x1:"100",y1:"0",x2:"0",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})},i))})}function xc({width:t,height:n}){const o=Math.min(t,n);return e.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[e.jsx("rect",{x:"1",y:(n-o+2)/2,width:o-2,height:o-2,rx:o*.15,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),e.jsx("path",{d:`M${o*.25} ${n/2}l${o*.2} ${o*.2} ${o*.3}-${o*.35}`,stroke:"var(--agd-bar)",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"})]})}function bc({width:t,height:n}){const o=Math.min(t,n)/2-1;return e.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[e.jsx("circle",{cx:t/2,cy:n/2,r:o,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),e.jsx("circle",{cx:t/2,cy:n/2,r:o*.45,fill:"var(--agd-bar)"})]})}function wc({width:t,height:n}){const o=Math.max(2,n*.12),s=Math.min(n*.35,10),r=t*.55;return e.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",position:"relative"},children:[e.jsx("div",{style:{width:"100%",height:o,borderRadius:o/2,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",position:"relative"},children:e.jsx("div",{style:{width:r,height:"100%",borderRadius:o/2,background:"var(--agd-bar)"}})}),e.jsx("div",{style:{position:"absolute",left:r-s,width:s*2,height:s*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)"}})]})}function vc({width:t,height:n}){const o=Math.min(36,n*.15),s=7,r=4,i=Math.min((t-16)/s,(n-o-40)/(r+1));return e.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:4},children:[e.jsxs("div",{style:{height:o,borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 8px",justifyContent:"space-between"},children:[e.jsx(D,{w:"40%",h:2}),e.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 16 16",fill:"none",children:[e.jsx("rect",{x:"2",y:"3",width:"12",height:"11",rx:"1",stroke:"var(--agd-stroke)",strokeWidth:"1"}),e.jsx("line",{x1:"2",y1:"6",x2:"14",y2:"6",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})]}),e.jsxs("div",{style:{flex:1,borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",flexDirection:"column"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"4px 6px"},children:[e.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"‹"}),e.jsx(D,{w:t*.25,h:2,strong:!0}),e.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"›"})]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${s}, 1fr)`,gap:1,padding:"0 4px",flex:1},children:Array.from({length:s*r},(a,h)=>e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:i},children:e.jsx("div",{style:{width:i*.5,height:i*.5,borderRadius:"50%",background:h===10?"var(--agd-bar)":"transparent"},children:e.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx("div",{style:{width:1.5,height:1.5,borderRadius:1,background:"var(--agd-bar-strong)",opacity:h===10?1:.25}})})})},h))})]})]})}function kc({width:t,height:n}){return e.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:n*.08,padding:4},children:[e.jsx("div",{style:{width:"100%",height:n*.2,borderRadius:4,background:"var(--agd-fill)"}}),e.jsx("div",{style:{width:"70%",height:Math.max(6,n*.1),borderRadius:3,background:"var(--agd-fill)"}}),e.jsx("div",{style:{width:"90%",height:Math.max(4,n*.06),borderRadius:3,background:"var(--agd-fill)"}}),e.jsx("div",{style:{width:"50%",height:Math.max(4,n*.06),borderRadius:3,background:"var(--agd-fill)"}})]})}function jc({width:t,height:n}){return e.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:6},children:e.jsxs("div",{style:{height:"100%",flex:1,borderRadius:n/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${n*.3}px`,gap:4},children:[e.jsx(D,{w:"60%",h:2,strong:!0}),e.jsx("div",{style:{width:Math.max(6,n*.3),height:Math.max(6,n*.3),borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0,marginLeft:"auto"}})]})})}function Sc({width:t,height:n}){const o=Math.min(t,n);return e.jsx("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:e.jsx("path",{d:`M${t/2} ${(n-o)/2+o*.1}l${o*.12} ${o*.25} ${o*.28} ${o*.04}-${o*.2} ${o*.2} ${o*.05} ${o*.28}-${o*.25}-${o*.12}-${o*.25} ${o*.12} ${o*.05}-${o*.28}-${o*.2}-${o*.2} ${o*.28}-${o*.04}z`,stroke:"var(--agd-stroke)",strokeWidth:"1",fill:"var(--agd-fill)"})})}function Cc({width:t,height:n}){const o=Math.min(t,n)/2-2;return e.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[e.jsx("circle",{cx:t/2,cy:n/2,r:o,stroke:"var(--agd-stroke)",strokeWidth:"1.5",opacity:".2"}),e.jsx("path",{d:`M${t/2} ${n/2-o}a${o} ${o} 0 0 1 ${o} ${o}`,stroke:"var(--agd-bar-strong)",strokeWidth:"1.5",strokeLinecap:"round"})]})}function Mc({width:t,height:n}){const o=Math.min(36,n*.25,t*.12),s=Math.max(1,Math.min(3,Math.floor(n/80)));return e.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%",justifyContent:"space-around",padding:8},children:Array.from({length:s},(r,i)=>e.jsxs("div",{style:{display:"flex",gap:t*.04,alignItems:"flex-start"},children:[e.jsx(Je,{w:o,h:o,radius:o*.25}),e.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[e.jsx(D,{w:`${40+i*13%20}%`,h:3,strong:!0}),e.jsx(D,{w:`${60+i*17%25}%`,h:2})]})]},i))})}function $c({width:t,height:n}){const o=Math.max(2,Math.min(4,Math.floor(t/120))),s=Math.min(36,n*.25);return e.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",gap:n*.06,padding:n*.06},children:[e.jsx(D,{w:t*.3,h:4,strong:!0}),e.jsx("div",{style:{display:"flex",gap:t*.06,justifyContent:"center",flex:1,alignItems:"center"},children:Array.from({length:o},(r,i)=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[e.jsx(vt,{size:s}),e.jsx(D,{w:t*.12,h:3,strong:!0}),e.jsx(D,{w:t*.08,h:2})]},i))})]})}function Rc({width:t,height:n}){const o=Math.max(2,Math.min(3,Math.floor(n/80)));return e.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:t*.06,gap:n*.04},children:[e.jsx(D,{w:t*.5,h:Math.max(5,n*.04),strong:!0}),e.jsx(D,{w:t*.35,h:2}),e.jsx("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:n*.03,marginTop:n*.04},children:Array.from({length:o},(s,r)=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[e.jsx(D,{w:Math.min(60,t*.2),h:2}),e.jsx(Je,{w:"100%",h:Math.min(32,n*.1),radius:4})]},r))}),e.jsx(Je,{w:"100%",h:Math.min(36,n*.12),radius:6,style:{marginTop:n*.03,background:"var(--agd-bar)"}}),e.jsx(D,{w:t*.4,h:2})]})}function Ec({width:t,height:n}){return e.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:t*.04,gap:n*.03},children:[e.jsx(D,{w:t*.4,h:4,strong:!0}),e.jsx(D,{w:t*.6,h:2}),e.jsxs("div",{style:{display:"flex",gap:6,marginTop:n*.03},children:[e.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[e.jsx(D,{w:50,h:2}),e.jsx(Je,{w:"100%",h:Math.min(28,n*.1),radius:4})]}),e.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[e.jsx(D,{w:40,h:2}),e.jsx(Je,{w:"100%",h:Math.min(28,n*.1),radius:4})]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[e.jsx(D,{w:50,h:2}),e.jsx(Je,{w:"100%",h:Math.min(28,n*.1),radius:4})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3,flex:1},children:[e.jsx(D,{w:60,h:2}),e.jsx(Je,{w:"100%",h:"100%",radius:4})]}),e.jsx(Je,{w:Math.min(120,t*.3),h:Math.min(30,n*.1),radius:6,style:{alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}var Ic={navigation:xa,hero:ba,sidebar:wa,footer:va,modal:ka,card:ja,text:Sa,image:Ca,table:Ma,list:$a,button:Ra,input:Ea,form:Ia,tabs:Na,avatar:La,badge:Ta,header:Da,section:Ba,grid:Pa,dropdown:Aa,toggle:Oa,search:za,toast:Fa,progress:Wa,chart:Ha,video:Ya,tooltip:Xa,breadcrumb:Ua,pagination:Qa,divider:qa,accordion:Ga,carousel:Va,pricing:Ka,testimonial:Ja,cta:Za,alert:ec,banner:tc,stat:nc,stepper:oc,tag:sc,rating:rc,map:ic,timeline:lc,fileUpload:ac,codeBlock:cc,calendar:dc,notification:_c,productCard:uc,profile:hc,drawer:mc,popover:pc,logo:fc,faq:gc,gallery:yc,checkbox:xc,radio:bc,slider:wc,datePicker:vc,skeleton:kc,chip:jc,icon:Sc,spinner:Cc,feature:Mc,team:$c,login:Rc,contact:Ec};function Nc({type:t,width:n,height:o,text:s}){const r=Ic[t];return r?e.jsx("div",{style:{width:"100%",height:"100%",padding:8,position:"relative",pointerEvents:"none"},children:e.jsx(r,{width:n,height:o,text:s})}):e.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx("span",{style:{fontSize:10,fontWeight:600,color:"var(--agd-text-3)",textTransform:"uppercase",letterSpacing:"0.06em",opacity:.5},children:t})})}var Lc=`.styles-module__overlay___aWh-q svg[fill=none],
.styles-module__rearrangeOverlay___-3R3t svg[fill=none] {
  fill: none !important;
}
.styles-module__overlay___aWh-q svg[fill=none] :not([fill]),
.styles-module__rearrangeOverlay___-3R3t svg[fill=none] :not([fill]) {
  fill: none !important;
}

.styles-module__overlayExiting___iEmYr {
  opacity: 0 !important;
  transition: opacity 0.25s ease !important;
  pointer-events: none !important;
}

.styles-module__overlay___aWh-q {
  position: fixed;
  inset: 0;
  z-index: 99995;
  pointer-events: auto;
  cursor: default;
  animation: styles-module__overlayFadeIn___aECVy 0.15s ease;
  --agd-stroke: rgba(59, 130, 246, 0.35);
  --agd-fill: rgba(59, 130, 246, 0.06);
  --agd-bar: rgba(59, 130, 246, 0.18);
  --agd-bar-strong: rgba(59, 130, 246, 0.28);
  --agd-text-3: rgba(255, 255, 255, 0.6);
  --agd-surface: #fff;
}
.styles-module__overlay___aWh-q.styles-module__light___ORIft {
  --agd-surface: #fff;
}
.styles-module__overlay___aWh-q:not(.styles-module__light___ORIft) {
  --agd-surface: #141414;
}
.styles-module__overlay___aWh-q.styles-module__wireframe___itvQU {
  --agd-stroke: rgba(249, 115, 22, 0.35);
  --agd-fill: rgba(249, 115, 22, 0.06);
  --agd-bar: rgba(249, 115, 22, 0.18);
  --agd-bar-strong: rgba(249, 115, 22, 0.28);
}
.styles-module__overlay___aWh-q.styles-module__placing___45yD8 {
  cursor: crosshair;
}
.styles-module__overlay___aWh-q.styles-module__passthrough___xaFeE {
  pointer-events: none;
}

.styles-module__blankCanvas___t2Eue {
  position: fixed;
  inset: 0;
  z-index: 99994;
  background: #fff;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease;
}
.styles-module__blankCanvas___t2Eue.styles-module__visible___OKKqX {
  opacity: var(--canvas-opacity, 1);
  pointer-events: auto;
}
.styles-module__blankCanvas___t2Eue::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(0, 0, 0, 0.08) 1px, transparent 1px);
  background-size: 24px 24px;
  background-position: 12px 12px;
  pointer-events: none;
  transition: opacity 0.2s ease;
}
.styles-module__blankCanvas___t2Eue.styles-module__gridActive___OZ-cf::after {
  opacity: 1;
  background-image: radial-gradient(circle, rgba(0, 0, 0, 0.22) 1px, transparent 1px);
}

.styles-module__paletteHeader___-Q5gQ {
  padding: 0 1rem 0.375rem;
}

.styles-module__paletteHeaderTitle___oHqZC {
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  letter-spacing: -0.0094em;
}
.styles-module__light___ORIft .styles-module__paletteHeaderTitle___oHqZC {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__paletteHeaderDesc___6i74T {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.45);
  margin-top: 2px;
  line-height: 14px;
}
.styles-module__light___ORIft .styles-module__paletteHeaderDesc___6i74T {
  color: rgba(0, 0, 0, 0.45);
}
.styles-module__paletteHeaderDesc___6i74T a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: underline dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__paletteHeaderDesc___6i74T a:hover {
  color: #fff;
}
.styles-module__light___ORIft .styles-module__paletteHeaderDesc___6i74T a {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
.styles-module__light___ORIft .styles-module__paletteHeaderDesc___6i74T a:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__wireframePurposeWrap___To-tS {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.2s ease, opacity 0.15s ease;
  opacity: 1;
}
.styles-module__wireframePurposeWrap___To-tS.styles-module__collapsed___Ms9vS {
  grid-template-rows: 0fr;
  opacity: 0;
}

.styles-module__wireframePurposeInner___Lrahs {
  overflow: hidden;
}

.styles-module__wireframePurposeInput___7EtBN {
  display: block;
  width: calc(100% - 2rem);
  margin: 0.25rem 1rem 0.375rem;
  padding: 0.375rem 0.5rem;
  font-size: 0.8125rem;
  font-family: inherit;
  color: rgba(255, 255, 255, 0.85);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.375rem;
  resize: none;
  outline: none;
  transition: border-color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__wireframePurposeInput___7EtBN::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__wireframePurposeInput___7EtBN:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.05);
}
.styles-module__light___ORIft .styles-module__wireframePurposeInput___7EtBN {
  color: rgba(0, 0, 0, 0.7);
  background: rgba(0, 0, 0, 0.03);
  border-color: rgba(0, 0, 0, 0.1);
}
.styles-module__light___ORIft .styles-module__wireframePurposeInput___7EtBN::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
.styles-module__light___ORIft .styles-module__wireframePurposeInput___7EtBN:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__canvasToggle___-QqSy {
  width: calc(100% - 2rem);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;
  margin: 0.25rem 1rem 0.25rem;
  padding: 0.375rem 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  border: 1px dashed rgba(255, 255, 255, 0.1);
  background: transparent;
  transition: background 0.15s ease, border-color 0.15s ease;
}
.styles-module__canvasToggle___-QqSy:hover {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(255, 255, 255, 0.15);
}
.styles-module__canvasToggle___-QqSy.styles-module__active___hosp7 {
  background: #f97316;
  border-color: transparent;
  border-style: solid;
  box-shadow: none;
}
.styles-module__light___ORIft .styles-module__canvasToggle___-QqSy {
  border-color: rgba(0, 0, 0, 0.08);
}
.styles-module__light___ORIft .styles-module__canvasToggle___-QqSy:hover {
  background: rgba(0, 0, 0, 0.02);
  border-color: rgba(0, 0, 0, 0.12);
}
.styles-module__light___ORIft .styles-module__canvasToggle___-QqSy.styles-module__active___hosp7 {
  background: #f97316;
  border-color: transparent;
  border-style: solid;
  box-shadow: none;
}

.styles-module__canvasToggleIcon___7pJ82 {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.35);
}
.styles-module__active___hosp7 .styles-module__canvasToggleIcon___7pJ82 {
  color: rgba(255, 255, 255, 0.85);
}
.styles-module__light___ORIft .styles-module__canvasToggleIcon___7pJ82 {
  color: rgba(0, 0, 0, 0.25);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__canvasToggleIcon___7pJ82 {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__canvasToggleLabel___OanpY {
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: -0.0094em;
}
.styles-module__active___hosp7 .styles-module__canvasToggleLabel___OanpY {
  color: #fff;
}
.styles-module__light___ORIft .styles-module__canvasToggleLabel___OanpY {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__canvasToggleLabel___OanpY {
  color: #fff;
}

.styles-module__placement___zcxv8 {
  position: absolute;
  border: 1.5px dashed rgba(59, 130, 246, 0.4);
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.08);
  cursor: grab;
  transition: box-shadow 0.15s, border-color 0.15s, opacity 0.15s ease, transform 0.15s ease;
  -webkit-user-select: none;
  user-select: none;
  pointer-events: auto;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  animation: styles-module__placementEnter___TdRhf 0.25s cubic-bezier(0.34, 1.2, 0.64, 1);
}
.styles-module__placement___zcxv8:active {
  cursor: grabbing;
}
.styles-module__placement___zcxv8:hover {
  border-color: rgba(59, 130, 246, 0.5);
  background: rgba(59, 130, 246, 0.1);
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.12);
}
.styles-module__placement___zcxv8.styles-module__selected___6yrp6 {
  border-color: #3c82f7;
  border-style: solid;
  background: rgba(59, 130, 246, 0.1);
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__placement___zcxv8.styles-module__selected___6yrp6:hover {
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8 {
  border-color: rgba(249, 115, 22, 0.4);
  background: rgba(249, 115, 22, 0.08);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8:hover {
  border-color: rgba(249, 115, 22, 0.5);
  background: rgba(249, 115, 22, 0.1);
  box-shadow: 0 2px 8px rgba(249, 115, 22, 0.12);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8.styles-module__selected___6yrp6 {
  border-color: #f97316;
  background: rgba(249, 115, 22, 0.1);
  box-shadow: 0 0 0 2px rgba(249, 115, 22, 0.15), 0 2px 8px rgba(249, 115, 22, 0.15);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8.styles-module__selected___6yrp6:hover {
  box-shadow: 0 0 0 2px rgba(249, 115, 22, 0.15), 0 2px 8px rgba(249, 115, 22, 0.15);
}
.styles-module__placement___zcxv8.styles-module__dragging___le6KZ {
  opacity: 0.85;
  z-index: 50;
}
.styles-module__placement___zcxv8.styles-module__exiting___YrM8F {
  opacity: 0;
  transform: scale(0.97);
  pointer-events: none;
  animation: none;
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

.styles-module__placementContent___f64A4 {
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
}

.styles-module__placementLabel___0KvWl {
  position: absolute;
  top: -18px;
  left: 0;
  font-size: 10px;
  font-weight: 600;
  color: rgba(59, 130, 246, 0.7);
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.8), 0 0 8px rgba(255, 255, 255, 0.5);
}
.styles-module__selected___6yrp6 .styles-module__placementLabel___0KvWl {
  color: #3c82f7;
}
.styles-module__wireframe___itvQU .styles-module__placementLabel___0KvWl {
  color: rgba(249, 115, 22, 0.7);
}
.styles-module__wireframe___itvQU .styles-module__selected___6yrp6 .styles-module__placementLabel___0KvWl {
  color: #f97316;
}

.styles-module__placementAnnotation___78pTr {
  position: absolute;
  bottom: -18px;
  left: 0;
  right: 0;
  font-weight: 450;
  color: rgba(0, 0, 0, 0.5);
  font-size: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.9), 0 0 8px rgba(255, 255, 255, 0.6);
  opacity: 0;
  transform: translateY(-2px);
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.styles-module__placementAnnotation___78pTr.styles-module__annotationVisible___mrUyA {
  opacity: 1;
  transform: translateY(0);
}

.styles-module__sectionAnnotation___aUIs0 {
  position: absolute;
  bottom: -18px;
  left: 0;
  right: 0;
  font-weight: 450;
  color: rgba(59, 130, 246, 0.6);
  font-size: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.9), 0 0 8px rgba(255, 255, 255, 0.6);
  opacity: 0;
  transform: translateY(-2px);
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.styles-module__sectionAnnotation___aUIs0.styles-module__annotationVisible___mrUyA {
  opacity: 1;
  transform: translateY(0);
}

.styles-module__handle___Ikbxm {
  position: absolute;
  width: 8px;
  height: 8px;
  background: #fff;
  border: 1.5px solid #3c82f7;
  border-radius: 2px;
  z-index: 12;
  box-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.12);
  opacity: 0;
  transform: scale(0.3);
  pointer-events: none;
  will-change: opacity, transform;
  transition: opacity 0.2s ease-out, transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.styles-module__placement___zcxv8:hover .styles-module__handle___Ikbxm, .styles-module__sectionOutline___s0hy-:hover .styles-module__handle___Ikbxm, .styles-module__ghostOutline___po-kO:hover .styles-module__handle___Ikbxm, .styles-module__placement___zcxv8:active .styles-module__handle___Ikbxm, .styles-module__sectionOutline___s0hy-:active .styles-module__handle___Ikbxm, .styles-module__ghostOutline___po-kO:active .styles-module__handle___Ikbxm, .styles-module__selected___6yrp6 .styles-module__handle___Ikbxm {
  opacity: 1;
  transform: scale(1);
  pointer-events: auto;
}
.styles-module__sectionOutline___s0hy- .styles-module__handle___Ikbxm {
  border-color: inherit;
}
.styles-module__wireframe___itvQU .styles-module__handle___Ikbxm {
  border-color: #f97316;
}

.styles-module__handleNw___4TMIj {
  top: -4px;
  left: -4px;
  cursor: nw-resize;
}

.styles-module__handleNe___mnsTh {
  top: -4px;
  right: -4px;
  cursor: ne-resize;
}

.styles-module__handleSe___oSFnk {
  bottom: -4px;
  right: -4px;
  cursor: se-resize;
}

.styles-module__handleSw___pi--Z {
  bottom: -4px;
  left: -4px;
  cursor: sw-resize;
}

.styles-module__handleN___aBA-Q,
.styles-module__handleE___0hM5u,
.styles-module__handleS___JjDRv,
.styles-module__handleW___ERWGQ {
  opacity: 0 !important;
  pointer-events: none !important;
}

.styles-module__edgeHandle___XxXdT {
  position: absolute;
  z-index: 11;
  display: flex;
  align-items: center;
  justify-content: center;
}
.styles-module__edgeHandle___XxXdT::after {
  content: "";
  position: absolute;
  border-radius: 4px;
  background: #3c82f7;
}
.styles-module__wireframe___itvQU .styles-module__edgeHandle___XxXdT::after {
  background: #f97316;
}
.styles-module__edgeHandle___XxXdT::after {
  opacity: 0;
  transition: opacity 0.1s ease, transform 0.1s ease;
  transform: scale(0.8);
}
.styles-module__edgeHandle___XxXdT:hover::after {
  opacity: 0.85;
  transform: scale(1);
}
.styles-module__edgeHandle___XxXdT svg {
  position: relative;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.1s ease;
  filter: drop-shadow(0 0 2px var(--agd-surface));
}
.styles-module__edgeHandle___XxXdT:hover svg {
  opacity: 1;
}

.styles-module__edgeN___-JJDj,
.styles-module__edgeS___66lMX {
  left: 12px;
  right: 12px;
  height: 12px;
  cursor: n-resize;
}
.styles-module__edgeN___-JJDj::after,
.styles-module__edgeS___66lMX::after {
  width: 24px;
  height: 4px;
}

.styles-module__edgeN___-JJDj {
  top: -6px;
}

.styles-module__edgeS___66lMX {
  bottom: -6px;
  cursor: s-resize;
}

.styles-module__edgeE___1bGDa,
.styles-module__edgeW___lHQNo {
  top: 12px;
  bottom: 12px;
  width: 12px;
  cursor: e-resize;
}
.styles-module__edgeE___1bGDa::after,
.styles-module__edgeW___lHQNo::after {
  width: 4px;
  height: 24px;
}

.styles-module__edgeE___1bGDa {
  right: -6px;
}

.styles-module__edgeW___lHQNo {
  left: -6px;
  cursor: w-resize;
}

.styles-module__deleteButton___LkGCb {
  position: absolute;
  top: -8px;
  right: -8px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.35);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  line-height: 1;
  z-index: 15;
  pointer-events: none;
  opacity: 0;
  transform: scale(0.8);
  will-change: opacity, transform;
  transition: opacity 0.2s ease-out, transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.12s ease, color 0.12s ease, border-color 0.12s ease, box-shadow 0.12s ease;
}
.styles-module__placement___zcxv8:hover .styles-module__deleteButton___LkGCb, .styles-module__selected___6yrp6 .styles-module__deleteButton___LkGCb, .styles-module__sectionOutline___s0hy-:hover .styles-module__deleteButton___LkGCb, .styles-module__sectionOutline___s0hy-.styles-module__selected___6yrp6 .styles-module__deleteButton___LkGCb, .styles-module__ghostOutline___po-kO:hover .styles-module__deleteButton___LkGCb, .styles-module__ghostOutline___po-kO.styles-module__selected___6yrp6 .styles-module__deleteButton___LkGCb {
  opacity: 1;
  transform: scale(1);
  pointer-events: auto;
}
.styles-module__deleteButton___LkGCb:hover {
  background: #ef4444;
  color: #fff;
  border-color: #ef4444;
  box-shadow: 0 1px 4px rgba(239, 68, 68, 0.3);
  transform: scale(1.1);
}
.styles-module__overlay___aWh-q:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb, .styles-module__rearrangeOverlay___-3R3t:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb {
  background: rgba(40, 40, 40, 0.9);
  border-color: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
}
.styles-module__overlay___aWh-q:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb:hover, .styles-module__rearrangeOverlay___-3R3t:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb:hover {
  background: #ef4444;
  color: #fff;
  border-color: #ef4444;
}

.styles-module__drawBox___BrVAa {
  position: fixed;
  pointer-events: none;
  z-index: 99996;
  border: 2px solid #3c82f7;
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.15);
}

.styles-module__selectBox___Iu8kB {
  position: fixed;
  pointer-events: none;
  z-index: 99996;
  border: 1px dashed #3c82f7;
  background: rgba(59, 130, 246, 0.08);
  border-radius: 2px;
}

.styles-module__sizeIndicator___7zJ4y {
  position: fixed;
  pointer-events: none;
  z-index: 100001;
  font-size: 10px;
  color: #fff;
  background: #3c82f7;
  padding: 2px 6px;
  border-radius: 4px;
  white-space: nowrap;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.styles-module__guideLine___DUQY2 {
  pointer-events: none;
  z-index: 100001;
  background: #f0f;
  opacity: 0.5;
}

.styles-module__dragPreview___onPbU {
  position: fixed;
  z-index: 100002;
  pointer-events: none;
  border: 1.5px dashed #3c82f7;
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.1);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 9px;
  font-weight: 600;
  color: #3c82f7;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  box-shadow: 0 4px 16px rgba(59, 130, 246, 0.15);
  transition: width 0.08s ease, height 0.08s ease, opacity 0.08s ease;
}

.styles-module__dragPreviewWireframe___jsg0G {
  border-color: #f97316;
  background: rgba(249, 115, 22, 0.1);
  color: #f97316;
  box-shadow: 0 4px 16px rgba(249, 115, 22, 0.15);
}

.styles-module__palette___C7iSH {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  width: 256px;
  overflow: hidden;
  background: #1c1c1c;
  border: none;
  border-radius: 1rem;
  padding: 13px 0 16px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  z-index: 100001;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  cursor: default;
  opacity: 0;
  filter: blur(5px);
}
.styles-module__palette___C7iSH .styles-module__paletteItem___6TlnA,
.styles-module__palette___C7iSH .styles-module__paletteItemLabel___6ncO4,
.styles-module__palette___C7iSH .styles-module__paletteSectionTitle___PqnjX,
.styles-module__palette___C7iSH .styles-module__paletteFooter___QYnAG {
  transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__palette___C7iSH {
  opacity: 0;
  transform: translateY(var(--panel-offset-y, 4px)) scale(0.98);
  transform-origin: var(--panel-origin, bottom right);
  filter: blur(2px);
  pointer-events: none;
  visibility: hidden;
  transition: opacity 120ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 120ms cubic-bezier(0.25, 0.46, 0.45, 0.94), filter 120ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.styles-module__palette___C7iSH[data-panel-present=true] {
  visibility: visible;
}
.styles-module__palette___C7iSH[data-panel-open=true] {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0);
  pointer-events: auto;
  transition-duration: 160ms;
}
@media (prefers-reduced-motion: reduce) {
  .styles-module__palette___C7iSH {
    transition: none;
    transform: none;
    filter: none;
  }
}
.styles-module__palette___C7iSH.styles-module__light___ORIft {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}

.styles-module__paletteSection___V8DEA {
  padding: 0 1rem;
}
.styles-module__paletteSection___V8DEA + .styles-module__paletteSection___V8DEA {
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__light___ORIft .styles-module__paletteSection___V8DEA + .styles-module__paletteSection___V8DEA {
  border-top-color: rgba(0, 0, 0, 0.07);
}

.styles-module__paletteSectionTitle___PqnjX {
  font-size: 0.6875rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.0094em;
  padding: 0 0 3px 3px;
}
.styles-module__light___ORIft .styles-module__paletteSectionTitle___PqnjX {
  color: rgba(0, 0, 0, 0.4);
}

.styles-module__paletteItem___6TlnA {
  width: 100%;
  text-align: left;
  background: transparent;
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.25rem 0.25rem;
  margin-bottom: 1px;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.15s ease, border-color 0.15s ease;
  border: 1px solid transparent;
  -webkit-user-select: none;
  user-select: none;
  min-height: 24px;
}
.styles-module__paletteItem___6TlnA:hover {
  background: rgba(255, 255, 255, 0.1);
}
.styles-module__paletteItem___6TlnA.styles-module__active___hosp7 {
  background: #3c82f7;
  border-color: transparent;
}
.styles-module__paletteItem___6TlnA.styles-module__wireframe___itvQU.styles-module__active___hosp7 {
  background: #f97316;
}
.styles-module__light___ORIft .styles-module__paletteItem___6TlnA:hover {
  background: rgba(0, 0, 0, 0.05);
}
.styles-module__light___ORIft .styles-module__paletteItem___6TlnA.styles-module__active___hosp7 {
  background: #3c82f7;
  border-color: transparent;
}
.styles-module__light___ORIft .styles-module__paletteItem___6TlnA.styles-module__wireframe___itvQU.styles-module__active___hosp7 {
  background: #f97316;
}

.styles-module__paletteItemIcon___0NPQK {
  width: 20px;
  height: 16px;
  border-radius: 2px;
  border: 1px dashed rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.04);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;
  color: rgba(255, 255, 255, 0.45);
}
.styles-module__paletteItemIcon___0NPQK svg {
  display: block;
  width: 20px;
  height: 16px;
}
.styles-module__active___hosp7 .styles-module__paletteItemIcon___0NPQK {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}
.styles-module__light___ORIft .styles-module__paletteItemIcon___0NPQK {
  border-color: rgba(0, 0, 0, 0.12);
  background: rgba(0, 0, 0, 0.02);
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__paletteItemIcon___0NPQK {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}

.styles-module__paletteItemLabel___6ncO4 {
  font-size: 0.8125rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  letter-spacing: -0.0094em;
  line-height: 1;
  min-width: 0;
}
.styles-module__active___hosp7 .styles-module__paletteItemLabel___6ncO4 {
  color: #fff;
  font-weight: 600;
}
.styles-module__light___ORIft .styles-module__paletteItemLabel___6ncO4 {
  color: rgba(0, 0, 0, 0.7);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__paletteItemLabel___6ncO4 {
  color: #fff;
  font-weight: 600;
}

.styles-module__placeScroll___7sClM {
  max-height: 240px;
  overflow-y: auto;
  overflow-x: hidden;
  padding-top: 0.25rem;
}
.styles-module__placeScroll___7sClM.styles-module__fadeTop___KT9tF {
  -webkit-mask-image: linear-gradient(to bottom, transparent 0, black 32px);
  mask-image: linear-gradient(to bottom, transparent 0, black 32px);
}
.styles-module__placeScroll___7sClM.styles-module__fadeBottom___x3ShT {
  -webkit-mask-image: linear-gradient(to bottom, black calc(100% - 32px), transparent 100%);
  mask-image: linear-gradient(to bottom, black calc(100% - 32px), transparent 100%);
}
.styles-module__placeScroll___7sClM.styles-module__fadeTop___KT9tF.styles-module__fadeBottom___x3ShT {
  -webkit-mask-image: linear-gradient(to bottom, transparent 0, black 32px, black calc(100% - 32px), transparent 100%);
  mask-image: linear-gradient(to bottom, transparent 0, black 32px, black calc(100% - 32px), transparent 100%);
}
.styles-module__placeScroll___7sClM::-webkit-scrollbar {
  width: 3px;
}
.styles-module__placeScroll___7sClM::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.12);
  border-radius: 2px;
}
.styles-module__light___ORIft .styles-module__placeScroll___7sClM::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.1);
}

.styles-module__paletteFooterWrap___71-fI {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.25s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__paletteFooterWrap___71-fI.styles-module__footerHidden___fJUik {
  grid-template-rows: 0fr;
}

.styles-module__paletteFooterInnerContent___VC26h {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.styles-module__footerHidden___fJUik .styles-module__paletteFooterInnerContent___VC26h {
  opacity: 0;
  transform: translateY(4px);
}

.styles-module__paletteFooterInner___dfylY {
  overflow: hidden;
}

.styles-module__paletteFooter___QYnAG {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
  padding: 0 1rem;
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__light___ORIft .styles-module__paletteFooter___QYnAG {
  border-top-color: rgba(0, 0, 0, 0.07);
}

.styles-module__paletteFooterCount___D3Fia {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__light___ORIft .styles-module__paletteFooterCount___D3Fia {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__paletteFooterClear___ybBoa {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  font-family: inherit;
  transition: color 0.15s ease;
}
.styles-module__paletteFooterClear___ybBoa:hover {
  color: rgba(255, 255, 255, 0.7);
}
.styles-module__light___ORIft .styles-module__paletteFooterClear___ybBoa {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___ORIft .styles-module__paletteFooterClear___ybBoa:hover {
  color: rgba(0, 0, 0, 0.6);
}

.styles-module__paletteFooterActions___fLzv8 {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.styles-module__rollingWrap___S75jM {
  display: inline-block;
  overflow: hidden;
  height: 1.15em;
  position: relative;
  vertical-align: bottom;
}

.styles-module__rollingNum___1RKDx {
  position: absolute;
  left: 0;
  top: 0;
}

.styles-module__exitUp___AFDRW {
  animation: styles-module__numExitUp___FRQqx 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.styles-module__enterUp___CPlXb {
  animation: styles-module__numEnterUp___2Yd-w 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.styles-module__exitDown___-1yAy {
  animation: styles-module__numExitDown___xm5by 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.styles-module__enterDown___DDuFR {
  animation: styles-module__numEnterDown___hpxBk 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

@keyframes styles-module__numExitUp___FRQqx {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-110%);
    opacity: 0;
  }
}
@keyframes styles-module__numEnterUp___2Yd-w {
  from {
    transform: translateY(110%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes styles-module__numExitDown___xm5by {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(110%);
    opacity: 0;
  }
}
@keyframes styles-module__numEnterDown___hpxBk {
  from {
    transform: translateY(-110%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
.styles-module__rearrangeOverlay___-3R3t {
  position: fixed;
  inset: 0;
  z-index: 99995;
  pointer-events: none;
  cursor: default;
  -webkit-user-select: none;
  user-select: none;
  animation: styles-module__overlayFadeIn___aECVy 0.15s ease;
}

.styles-module__hoverHighlight___8eT-v {
  position: fixed;
  pointer-events: none;
  z-index: 99994;
  border: 2px dashed rgba(59, 130, 246, 0.5);
  border-radius: 4px;
  background: rgba(59, 130, 246, 0.06);
  animation: styles-module__highlightFadeIn___Lg7KY 0.12s ease;
}

.styles-module__sectionOutline___s0hy- {
  position: fixed;
  border: 2px solid;
  border-radius: 4px;
  cursor: grab;
}
.styles-module__sectionOutline___s0hy-:active {
  cursor: grabbing;
}
.styles-module__sectionOutline___s0hy- {
  transition: box-shadow 0.15s, border-color 0.3s, background-color 0.3s, border-style 0s;
  -webkit-user-select: none;
  user-select: none;
  pointer-events: auto;
  animation: styles-module__sectionEnter___-8BXT 0.2s ease;
}
.styles-module__sectionOutline___s0hy-:hover {
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1), 0 4px 12px rgba(0, 0, 0, 0.15);
}
.styles-module__sectionOutline___s0hy-.styles-module__selected___6yrp6 {
  border-style: solid;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__sectionOutline___s0hy-.styles-module__selected___6yrp6:hover {
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) {
  border: 1.5px dashed rgba(150, 150, 150, 0.35);
  background-color: transparent !important;
  box-shadow: none;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6):hover {
  border-color: rgba(150, 150, 150, 0.6);
  box-shadow: none;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) .styles-module__sectionLabel___F80HQ {
  opacity: 0;
  transition: opacity 0.15s ease;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6):hover .styles-module__sectionLabel___F80HQ {
  opacity: 1;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) .styles-module__movedBadge___s8z-q,
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) .styles-module__sectionDimensions___RcJSL {
  opacity: 0;
  transition: opacity 0.15s ease;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6):hover .styles-module__sectionDimensions___RcJSL {
  opacity: 1;
}
.styles-module__sectionOutline___s0hy-.styles-module__exiting___YrM8F {
  opacity: 0;
  transform: scale(0.97);
  pointer-events: none;
  animation: none;
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

.styles-module__sectionLabel___F80HQ {
  position: absolute;
  top: 4px;
  left: 4px;
  font-size: 10px;
  font-weight: 600;
  color: #fff;
  padding: 2px 8px;
  border-radius: 4px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  max-width: calc(100% - 8px);
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__movedBadge___s8z-q {
  position: absolute;
  bottom: 22px;
  right: 4px;
  font-size: 9px;
  font-weight: 700;
  color: #fff;
  background: #22c55e;
  padding: 2px 6px;
  border-radius: 4px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  opacity: 0;
  transform: scale(0.8);
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.styles-module__movedBadge___s8z-q.styles-module__badgeVisible___npbdS {
  opacity: 1;
  transform: scale(1);
  transition: opacity 0.2s cubic-bezier(0.34, 1.2, 0.64, 1), transform 0.2s cubic-bezier(0.34, 1.2, 0.64, 1);
}

.styles-module__resizedBadge___u51V8 {
  background: #3c82f7;
  bottom: 40px;
}

.styles-module__sectionDimensions___RcJSL {
  position: absolute;
  bottom: 4px;
  right: 4px;
  font-size: 9px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  background: rgba(0, 0, 0, 0.5);
  padding: 1px 5px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}
.styles-module__light___ORIft .styles-module__sectionDimensions___RcJSL {
  color: rgba(0, 0, 0, 0.5);
  background: rgba(255, 255, 255, 0.7);
}

.styles-module__wireframeNotice___4GJyB {
  position: fixed;
  bottom: 16px;
  left: 24px;
  z-index: 99995;
  font-size: 9.5px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.4);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  pointer-events: auto;
  animation: styles-module__overlayFadeIn___aECVy 0.3s ease;
  line-height: 1.5;
  max-width: 280px;
}

.styles-module__wireframeOpacityRow___CJXzi {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.styles-module__wireframeOpacityLabel___afkfT {
  font-size: 9px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.32);
  letter-spacing: 0.02em;
  white-space: nowrap;
  -webkit-user-select: none;
  user-select: none;
}

.styles-module__wireframeOpacitySlider___YcoEs {
  -webkit-appearance: none;
  appearance: none;
  width: 56px;
  height: 4px;
  background: rgba(0, 0, 0, 0.08);
  border-radius: 2px;
  outline: none;
  cursor: pointer;
  flex-shrink: 0;
  transition: background 0.15s ease;
}
.styles-module__wireframeOpacitySlider___YcoEs:hover {
  background: rgba(0, 0, 0, 0.13);
}
.styles-module__wireframeOpacitySlider___YcoEs::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #f97316;
  cursor: pointer;
  transition: background 0.15s ease;
}
.styles-module__wireframeOpacitySlider___YcoEs::-webkit-slider-thumb:hover {
  background: rgb(88.0082041185%, 37.39404381%, 2.2663056855%);
}
.styles-module__wireframeOpacitySlider___YcoEs::-moz-range-thumb {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #f97316;
  border: none;
  cursor: pointer;
}
.styles-module__wireframeOpacitySlider___YcoEs::-moz-range-track {
  background: rgba(0, 0, 0, 0.08);
  height: 4px;
  border-radius: 2px;
}

.styles-module__wireframeNoticeTitleRow___PJqyG {
  display: flex;
  align-items: center;
  gap: 0;
  margin-bottom: 2px;
}

.styles-module__wireframeNoticeTitle___okr08 {
  font-weight: 600;
  color: rgba(0, 0, 0, 0.55);
}

.styles-module__wireframeNoticeDivider___PNKQ6 {
  width: 1px;
  height: 8px;
  background: rgba(0, 0, 0, 0.12);
  margin: 0 8px;
  flex-shrink: 0;
}

.styles-module__wireframeStartOver___YFk-I {
  font-size: 9.5px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.35);
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  font-family: inherit;
  text-decoration: none;
  transition: color 0.12s ease;
  white-space: nowrap;
}
.styles-module__wireframeStartOver___YFk-I:hover {
  color: rgba(0, 0, 0, 0.6);
}

.styles-module__ghostOutline___po-kO {
  position: fixed;
  border: 1.5px dashed rgba(59, 130, 246, 0.4);
  border-radius: 4px;
  background: rgba(59, 130, 246, 0.04);
  cursor: grab;
  opacity: 0.5;
  -webkit-user-select: none;
  user-select: none;
  pointer-events: auto;
  animation: styles-module__ghostEnter___EC3Mb 0.25s ease;
  transition: box-shadow 0.15s, border-color 0.3s, opacity 0.25s;
}
.styles-module__ghostOutline___po-kO:active {
  cursor: grabbing;
}
.styles-module__ghostOutline___po-kO:hover {
  opacity: 0.7;
  box-shadow: 0 0 0 1px rgba(59, 130, 246, 0.1), 0 4px 12px rgba(0, 0, 0, 0.08);
}
.styles-module__ghostOutline___po-kO.styles-module__selected___6yrp6 {
  opacity: 1;
  border-style: solid;
  border-width: 2px;
  border-color: #3c82f7;
  background: rgba(59, 130, 246, 0.08);
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__ghostOutline___po-kO.styles-module__exiting___YrM8F {
  opacity: 0;
  transform: scale(0.97);
  pointer-events: none;
  animation: none;
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

.styles-module__ghostBadge___tsQUK {
  position: absolute;
  bottom: calc(100% + 4px);
  left: -1px;
  font-size: 9px;
  font-weight: 600;
  color: rgba(59, 130, 246, 0.9);
  background: rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(59, 130, 246, 0.2);
  padding: 1px 5px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  letter-spacing: 0.02em;
  line-height: 1.2;
  animation: styles-module__badgeSlideIn___typJ7 0.2s ease both;
}

@keyframes styles-module__badgeSlideIn___typJ7 {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.styles-module__ghostBadgeExtra___6CVoD {
  display: inline;
  animation: styles-module__badgeExtraIn___i4W8F 0.2s ease both;
}

@keyframes styles-module__badgeExtraIn___i4W8F {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.styles-module__originalOutline___Y6DD1 {
  position: fixed;
  border: 1.5px dashed rgba(150, 150, 150, 0.3);
  border-radius: 4px;
  background: transparent;
  pointer-events: none;
  -webkit-user-select: none;
  user-select: none;
  animation: styles-module__sectionEnter___-8BXT 0.2s ease;
}

.styles-module__originalLabel___HqI9g {
  position: absolute;
  top: 4px;
  left: 4px;
  font-size: 9px;
  font-weight: 500;
  color: rgba(150, 150, 150, 0.5);
  padding: 1px 6px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background: rgba(150, 150, 150, 0.08);
}

.styles-module__connectorSvg___Lovld {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 99996;
}

.styles-module__connectorLine___XeWh- {
  transition: opacity 0.2s ease;
  animation: styles-module__connectorDraw___8sK5I 0.3s ease both;
}

.styles-module__connectorDot___yvf7C {
  transform-box: fill-box;
  transform-origin: center;
  animation: styles-module__connectorDotIn___NwTUq 0.25s cubic-bezier(0.34, 1.56, 0.64, 1) 0.15s both;
}

@keyframes styles-module__connectorDraw___8sK5I {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__connectorDotIn___NwTUq {
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
.styles-module__connectorExiting___2lLOs {
  animation: styles-module__connectorOut___5QoPl 0.2s ease forwards;
}
.styles-module__connectorExiting___2lLOs .styles-module__connectorDot___yvf7C {
  animation: styles-module__connectorDotOut___FEq7e 0.2s ease forwards;
}

@keyframes styles-module__connectorOut___5QoPl {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes styles-module__connectorDotOut___FEq7e {
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(0);
    opacity: 0;
  }
}
@keyframes styles-module__placementEnter___TdRhf {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__sectionEnter___-8BXT {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__highlightFadeIn___Lg7KY {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__overlayFadeIn___aECVy {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__ghostEnter___EC3Mb {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 0.6;
    transform: scale(1);
  }
}
.styles-module__canvasToggle___-QqSy:focus-visible,
.styles-module__paletteItem___6TlnA:focus-visible {
  outline: 2px solid var(--agentation-color-accent);
  outline-offset: -2px;
}`,E={overlay:"styles-module__overlay___aWh-q",rearrangeOverlay:"styles-module__rearrangeOverlay___-3R3t",overlayExiting:"styles-module__overlayExiting___iEmYr",overlayFadeIn:"styles-module__overlayFadeIn___aECVy",light:"styles-module__light___ORIft",wireframe:"styles-module__wireframe___itvQU",placing:"styles-module__placing___45yD8",passthrough:"styles-module__passthrough___xaFeE",blankCanvas:"styles-module__blankCanvas___t2Eue",visible:"styles-module__visible___OKKqX",gridActive:"styles-module__gridActive___OZ-cf",paletteHeader:"styles-module__paletteHeader___-Q5gQ",paletteHeaderTitle:"styles-module__paletteHeaderTitle___oHqZC",paletteHeaderDesc:"styles-module__paletteHeaderDesc___6i74T",wireframePurposeWrap:"styles-module__wireframePurposeWrap___To-tS",collapsed:"styles-module__collapsed___Ms9vS",wireframePurposeInner:"styles-module__wireframePurposeInner___Lrahs",wireframePurposeInput:"styles-module__wireframePurposeInput___7EtBN",canvasToggle:"styles-module__canvasToggle___-QqSy",active:"styles-module__active___hosp7",canvasToggleIcon:"styles-module__canvasToggleIcon___7pJ82",canvasToggleLabel:"styles-module__canvasToggleLabel___OanpY",placement:"styles-module__placement___zcxv8",placementEnter:"styles-module__placementEnter___TdRhf",selected:"styles-module__selected___6yrp6",dragging:"styles-module__dragging___le6KZ",exiting:"styles-module__exiting___YrM8F",placementContent:"styles-module__placementContent___f64A4",placementLabel:"styles-module__placementLabel___0KvWl",placementAnnotation:"styles-module__placementAnnotation___78pTr",annotationVisible:"styles-module__annotationVisible___mrUyA",sectionAnnotation:"styles-module__sectionAnnotation___aUIs0",handle:"styles-module__handle___Ikbxm",sectionOutline:"styles-module__sectionOutline___s0hy-",ghostOutline:"styles-module__ghostOutline___po-kO",handleNw:"styles-module__handleNw___4TMIj",handleNe:"styles-module__handleNe___mnsTh",handleSe:"styles-module__handleSe___oSFnk",handleSw:"styles-module__handleSw___pi--Z",handleN:"styles-module__handleN___aBA-Q",handleE:"styles-module__handleE___0hM5u",handleS:"styles-module__handleS___JjDRv",handleW:"styles-module__handleW___ERWGQ",edgeHandle:"styles-module__edgeHandle___XxXdT",edgeN:"styles-module__edgeN___-JJDj",edgeS:"styles-module__edgeS___66lMX",edgeE:"styles-module__edgeE___1bGDa",edgeW:"styles-module__edgeW___lHQNo",deleteButton:"styles-module__deleteButton___LkGCb",drawBox:"styles-module__drawBox___BrVAa",selectBox:"styles-module__selectBox___Iu8kB",sizeIndicator:"styles-module__sizeIndicator___7zJ4y",guideLine:"styles-module__guideLine___DUQY2",dragPreview:"styles-module__dragPreview___onPbU",dragPreviewWireframe:"styles-module__dragPreviewWireframe___jsg0G",palette:"styles-module__palette___C7iSH",paletteItem:"styles-module__paletteItem___6TlnA",paletteItemLabel:"styles-module__paletteItemLabel___6ncO4",paletteSectionTitle:"styles-module__paletteSectionTitle___PqnjX",paletteFooter:"styles-module__paletteFooter___QYnAG",paletteSection:"styles-module__paletteSection___V8DEA",paletteItemIcon:"styles-module__paletteItemIcon___0NPQK",placeScroll:"styles-module__placeScroll___7sClM",fadeTop:"styles-module__fadeTop___KT9tF",fadeBottom:"styles-module__fadeBottom___x3ShT",paletteFooterWrap:"styles-module__paletteFooterWrap___71-fI",footerHidden:"styles-module__footerHidden___fJUik",paletteFooterInnerContent:"styles-module__paletteFooterInnerContent___VC26h",paletteFooterInner:"styles-module__paletteFooterInner___dfylY",paletteFooterCount:"styles-module__paletteFooterCount___D3Fia",paletteFooterClear:"styles-module__paletteFooterClear___ybBoa",paletteFooterActions:"styles-module__paletteFooterActions___fLzv8",rollingWrap:"styles-module__rollingWrap___S75jM",rollingNum:"styles-module__rollingNum___1RKDx",exitUp:"styles-module__exitUp___AFDRW",numExitUp:"styles-module__numExitUp___FRQqx",enterUp:"styles-module__enterUp___CPlXb",numEnterUp:"styles-module__numEnterUp___2Yd-w",exitDown:"styles-module__exitDown___-1yAy",numExitDown:"styles-module__numExitDown___xm5by",enterDown:"styles-module__enterDown___DDuFR",numEnterDown:"styles-module__numEnterDown___hpxBk",hoverHighlight:"styles-module__hoverHighlight___8eT-v",highlightFadeIn:"styles-module__highlightFadeIn___Lg7KY",sectionEnter:"styles-module__sectionEnter___-8BXT",settled:"styles-module__settled___b5U5o",sectionLabel:"styles-module__sectionLabel___F80HQ",movedBadge:"styles-module__movedBadge___s8z-q",sectionDimensions:"styles-module__sectionDimensions___RcJSL",badgeVisible:"styles-module__badgeVisible___npbdS",resizedBadge:"styles-module__resizedBadge___u51V8",wireframeNotice:"styles-module__wireframeNotice___4GJyB",wireframeOpacityRow:"styles-module__wireframeOpacityRow___CJXzi",wireframeOpacityLabel:"styles-module__wireframeOpacityLabel___afkfT",wireframeOpacitySlider:"styles-module__wireframeOpacitySlider___YcoEs",wireframeNoticeTitleRow:"styles-module__wireframeNoticeTitleRow___PJqyG",wireframeNoticeTitle:"styles-module__wireframeNoticeTitle___okr08",wireframeNoticeDivider:"styles-module__wireframeNoticeDivider___PNKQ6",wireframeStartOver:"styles-module__wireframeStartOver___YFk-I",ghostEnter:"styles-module__ghostEnter___EC3Mb",ghostBadge:"styles-module__ghostBadge___tsQUK",badgeSlideIn:"styles-module__badgeSlideIn___typJ7",ghostBadgeExtra:"styles-module__ghostBadgeExtra___6CVoD",badgeExtraIn:"styles-module__badgeExtraIn___i4W8F",originalOutline:"styles-module__originalOutline___Y6DD1",originalLabel:"styles-module__originalLabel___HqI9g",connectorSvg:"styles-module__connectorSvg___Lovld",connectorLine:"styles-module__connectorLine___XeWh-",connectorDraw:"styles-module__connectorDraw___8sK5I",connectorDot:"styles-module__connectorDot___yvf7C",connectorDotIn:"styles-module__connectorDotIn___NwTUq",connectorExiting:"styles-module__connectorExiting___2lLOs",connectorOut:"styles-module__connectorOut___5QoPl",connectorDotOut:"styles-module__connectorDotOut___FEq7e"},zn=24,Yo=5;function oi(t,n,o,s,r){let i=1/0,a=1/0;const h=t.x,d=t.x+t.width,g=t.x+t.width/2,f=t.y,p=t.y+t.height,w=t.y+t.height/2,$=!s,v=$?[h,d,g]:[...s.left?[h]:[],...s.right?[d]:[]],T=$?[f,p,w]:[...s.top?[f]:[],...s.bottom?[p]:[]],x=[];for(const ne of n)o.has(ne.id)||x.push(ne);r&&x.push(...r);for(const ne of x){const W=ne.x,ke=ne.x+ne.width,Q=ne.x+ne.width/2,V=ne.y,oe=ne.y+ne.height,ot=ne.y+ne.height/2;for(const $e of v)for(const ze of[W,ke,Q]){const Re=ze-$e;Math.abs(Re)<Yo&&Math.abs(Re)<Math.abs(i)&&(i=Re)}for(const $e of T)for(const ze of[V,oe,ot]){const Re=ze-$e;Math.abs(Re)<Yo&&Math.abs(Re)<Math.abs(a)&&(a=Re)}}const I=Math.abs(i)<Yo?i:0,G=Math.abs(a)<Yo?a:0,M=[],B=new Set,we=h+I,Ne=d+I,U=g+I,Oe=f+G,z=p+G,me=w+G;for(const ne of x){const W=ne.x,ke=ne.x+ne.width,Q=ne.x+ne.width/2,V=ne.y,oe=ne.y+ne.height,ot=ne.y+ne.height/2;for(const $e of[W,Q,ke])for(const ze of[we,U,Ne])if(Math.abs(ze-$e)<.5){const Re=`x:${Math.round($e)}`;B.has(Re)||(B.add(Re),M.push({axis:"x",pos:$e}))}for(const $e of[V,ot,oe])for(const ze of[Oe,me,z])if(Math.abs(ze-$e)<.5){const Re=`y:${Math.round($e)}`;B.has(Re)||(B.add(Re),M.push({axis:"y",pos:$e}))}}return{dx:I,dy:G,guides:M}}function si(){return`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`}function Tc({placements:t,onChange:n,activeComponent:o,onActiveComponentChange:s,isDarkMode:r,exiting:i,onInteractionChange:a,className:h,passthrough:d,extraSnapRects:g,onSelectionChange:f,deselectSignal:p,onDragMove:w,onDragEnd:$,clearingPlacements:v,wireframe:T}){const[x,I]=l.useState(new Set),[G,M]=l.useState(null),[B,we]=l.useState(null),[Ne,U]=l.useState(null),[Oe,z]=l.useState([]),[me,ne]=l.useState(null),[W,ke]=l.useState(!1),Q=l.useRef(!1),[V,oe]=l.useState(new Set),ot=l.useRef(new Map),$e=l.useRef(null),ze=l.useRef(null),Re=l.useRef(t);Re.current=t;const Ze=l.useRef(f);Ze.current=f;const ht=l.useRef(w);ht.current=w;const kt=l.useRef($);kt.current=$;const xe=l.useRef(p);l.useEffect(()=>{p!==xe.current&&(xe.current=p,I(new Set))},[p]),l.useEffect(()=>{v?.length&&(I(H=>new Set([...H].filter(te=>!v.some(fe=>fe.id===te)))),ze.current=null)},[v]),l.useEffect(()=>{const H=te=>{const fe=te.composedPath()[0]||te.target;if(!(fe.tagName==="INPUT"||fe.tagName==="TEXTAREA"||fe.isContentEditable)){if((te.key==="Backspace"||te.key==="Delete")&&x.size>0){te.preventDefault();const ce=new Set(x);oe(ce),I(new Set),We(()=>{n(Re.current.filter(Ue=>!ce.has(Ue.id))),oe(new Set)},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(te.key)&&x.size>0){te.preventDefault();const ce=te.shiftKey?20:1,Ue=te.key==="ArrowLeft"?-ce:te.key==="ArrowRight"?ce:0,De=te.key==="ArrowUp"?-ce:te.key==="ArrowDown"?ce:0;n(t.map(de=>x.has(de.id)?{...de,x:Math.max(0,de.x+Ue),y:Math.max(0,de.y+De)}:de));return}if(te.key==="Escape"){o?s(null):x.size>0&&I(new Set);return}}};return document.addEventListener("keydown",H),()=>document.removeEventListener("keydown",H)},[x,o,t,n,s]);const Pt=l.useCallback(H=>{if(H.button!==0||d||H.target.closest(`.${E.placement}`))return;H.preventDefault(),H.stopPropagation();const fe=window.scrollY,ve=H.clientX,ce=H.clientY;if(o){ze.current="place",a?.(!0);let Ue=!1,De=ve,de=ce;const He=P=>{De=P.clientX,de=P.clientY;const b=Math.abs(De-ve),j=Math.abs(de-ce);if((b>5||j>5)&&(Ue=!0),Ue){const N=Math.min(ve,De),A=Math.min(ce,de),K=Math.abs(De-ve),Y=Math.abs(de-ce);M({x:N,y:A,w:K,h:Y}),U({x:P.clientX+12,y:P.clientY+12,text:`${Math.round(K)} × ${Math.round(Y)}`})}},lt=P=>{window.removeEventListener("mousemove",He),window.removeEventListener("mouseup",lt),M(null),U(null),ze.current=null,a?.(!1);const b=X[o];let j,N,A,K;Ue?(j=Math.min(ve,De),N=Math.min(ce,de)+fe,A=Math.max(zn,Math.abs(De-ve)),K=Math.max(zn,Math.abs(de-ce))):(A=b.width,K=b.height,j=ve-A/2,N=ce+fe-K/2),j=Math.max(0,j),N=Math.max(0,N);const Y={id:si(),type:o,x:j,y:N,width:A,height:K,scrollY:fe,timestamp:Date.now()},O=[...t,Y];n(O),I(new Set([Y.id])),s(null)};window.addEventListener("mousemove",He),window.addEventListener("mouseup",lt)}else{H.shiftKey||I(new Set),ze.current="select";let Ue=!1;const De=He=>{const lt=Math.abs(He.clientX-ve),P=Math.abs(He.clientY-ce);if((lt>4||P>4)&&(Ue=!0),Ue){const b=Math.min(ve,He.clientX),j=Math.min(ce,He.clientY);we({x:b,y:j,w:Math.abs(He.clientX-ve),h:Math.abs(He.clientY-ce)})}},de=He=>{if(window.removeEventListener("mousemove",De),window.removeEventListener("mouseup",de),ze.current=null,Ue){const lt=Math.min(ve,He.clientX),P=Math.min(ce,He.clientY)+fe,b=Math.abs(He.clientX-ve),j=Math.abs(He.clientY-ce),N=new Set(H.shiftKey?x:new Set);for(const A of t)A.y-fe,A.x+A.width>lt&&A.x<lt+b&&A.y+A.height>P&&A.y<P+j&&N.add(A.id);I(N)}we(null)};window.addEventListener("mousemove",De),window.addEventListener("mouseup",de)}},[o,d,t,n,x]),Kt=l.useCallback((H,te)=>{if(H.button!==0)return;const fe=H.target;if(fe.closest(`.${E.handle}`)||fe.closest(`.${E.deleteButton}`))return;H.preventDefault(),H.stopPropagation();let ve;H.shiftKey?(ve=new Set(x),ve.has(te)?ve.delete(te):ve.add(te)):x.has(te)?ve=new Set(x):ve=new Set([te]),I(ve),(ve.size!==x.size||[...ve].some(Y=>!x.has(Y)))&&Ze.current?.(ve,H.shiftKey);const Ue=H.clientX,De=H.clientY,de=new Map;for(const Y of t)ve.has(Y.id)&&de.set(Y.id,{x:Y.x,y:Y.y});ze.current="move",a?.(!0);let He=!1,lt=!1,P=t,b=0,j=0;const N=new Map;for(const Y of t)de.has(Y.id)&&N.set(Y.id,{w:Y.width,h:Y.height});const A=Y=>{const O=Y.clientX-Ue,_e=Y.clientY-De;if((Math.abs(O)>2||Math.abs(_e)>2)&&(He=!0),!He)return;if(Y.altKey&&!lt){lt=!0;const ae=[];for(const qe of t)de.has(qe.id)&&ae.push({...qe,id:si(),timestamp:Date.now()});P=[...t,...ae]}let pe=1/0,je=1/0,Qe=-1/0,Ve=-1/0;for(const[ae,qe]of de){const _t=N.get(ae);_t&&(pe=Math.min(pe,qe.x+O),je=Math.min(je,qe.y+_e),Qe=Math.max(Qe,qe.x+O+_t.w),Ve=Math.max(Ve,qe.y+_e+_t.h))}const Te={x:pe,y:je,width:Qe-pe,height:Ve-je},{dx:Be,dy:Ee,guides:Ke}=oi(Te,P,new Set(de.keys()),void 0,g);z(Ke);const et=O+Be,Se=_e+Ee;b=et,j=Se,n(P.map(ae=>{const qe=de.get(ae.id);return qe?{...ae,x:Math.max(0,qe.x+et),y:Math.max(0,qe.y+Se)}:ae})),ht.current?.(et,Se)},K=()=>{window.removeEventListener("mousemove",A),window.removeEventListener("mouseup",K),ze.current=null,a?.(!1),z([]),kt.current?.(b,j,He)};window.addEventListener("mousemove",A),window.addEventListener("mouseup",K)},[x,t,n,a]),sn=l.useCallback((H,te,fe)=>{H.preventDefault(),H.stopPropagation();const ve=t.find(N=>N.id===te);if(!ve)return;I(new Set([te])),ze.current="resize",a?.(!0);const ce=H.clientX,Ue=H.clientY,De=ve.width,de=ve.height,He=ve.x,lt=ve.y,P={left:fe.includes("w"),right:fe.includes("e"),top:fe.includes("n"),bottom:fe.includes("s")},b=N=>{const A=N.clientX-ce,K=N.clientY-Ue;let Y=De,O=de,_e=He,pe=lt;fe.includes("e")&&(Y=Math.max(zn,De+A)),fe.includes("w")&&(Y=Math.max(zn,De-A),_e=He+De-Y),fe.includes("s")&&(O=Math.max(zn,de+K)),fe.includes("n")&&(O=Math.max(zn,de-K),pe=lt+de-O);const je={x:_e,y:pe,width:Y,height:O},{dx:Qe,dy:Ve,guides:Te}=oi(je,Re.current,new Set([te]),P,g);z(Te),Qe!==0&&(P.right?Y+=Qe:P.left&&(_e+=Qe,Y-=Qe)),Ve!==0&&(P.bottom?O+=Ve:P.top&&(pe+=Ve,O-=Ve)),n(Re.current.map(Be=>Be.id===te?{...Be,x:_e,y:pe,width:Y,height:O}:Be)),U({x:N.clientX+12,y:N.clientY+12,text:`${Math.round(Y)} × ${Math.round(O)}`})},j=()=>{window.removeEventListener("mousemove",b),window.removeEventListener("mouseup",j),U(null),ze.current=null,a?.(!1),z([])};window.addEventListener("mousemove",b),window.addEventListener("mouseup",j)},[t,n,a]),rn=l.useCallback(H=>{ze.current=null,oe(te=>{const fe=new Set(te);return fe.add(H),fe}),I(te=>{const fe=new Set(te);return fe.delete(H),fe}),We(()=>{n(Re.current.filter(te=>te.id!==H)),oe(te=>{const fe=new Set(te);return fe.delete(H),fe})},180)},[n]),Yt={hero:"Headline text",button:"Button label",badge:"Badge label",cta:"Call to action text",toast:"Notification message",modal:"Dialog title",card:"Card title",navigation:"Brand / nav items",tabs:"Tab labels",input:"Placeholder text",search:"Search placeholder",pricing:"Plan name or price",testimonial:"Quote text",alert:"Alert message",banner:"Banner text",tag:"Tag label",notification:"Notification message",stat:"Metric value",productCard:"Product name"},Jt=l.useCallback(H=>{const te=t.find(fe=>fe.id===H);te&&(Q.current=!!te.text,ne(H),ke(!1))},[t]),Rt=l.useCallback(()=>{me&&(ke(!0),We(()=>{ne(null),ke(!1)},150))},[me]);l.useEffect(()=>{i&&me&&Rt()},[i]);const dt=l.useCallback(H=>{me&&(n(t.map(te=>te.id===me?{...te,text:H.trim()||void 0}:te)),Rt())},[me,t,n,Rt]),Et=typeof window<"u"?window.scrollY:0,ln=["nw","ne","se","sw"],Xt=T?"#f97316":"#3c82f7",Zt=[{dir:"n",cls:E.edgeN,arrow:e.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:e.jsx("path",{d:"M4 0.5L1 4.5h6z",fill:Xt})})},{dir:"e",cls:E.edgeE,arrow:e.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:e.jsx("path",{d:"M5.5 4L1.5 1v6z",fill:Xt})})},{dir:"s",cls:E.edgeS,arrow:e.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:e.jsx("path",{d:"M4 5.5L1 1.5h6z",fill:Xt})})},{dir:"w",cls:E.edgeW,arrow:e.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:e.jsx("path",{d:"M0.5 4L4.5 1v6z",fill:Xt})})}];return e.jsxs(e.Fragment,{children:[e.jsx("div",{ref:$e,className:`${E.overlay} ${r?"":E.light} ${o?E.placing:""} ${d?E.passthrough:""} ${i?E.overlayExiting:""} ${T?E.wireframe:""}${h?` ${h}`:""}`,"data-feedback-toolbar":!0,onMouseDown:Pt,children:t.map(H=>{const te=x.has(H.id),fe=Ht[H.type]?.label||H.type,ve=H.y-Et;return e.jsxs("div",{"data-design-placement":H.id,className:`${E.placement} ${te?E.selected:""} ${V.has(H.id)||v?.includes(H)?E.exiting:""}`,style:{left:H.x,top:ve,width:H.width,height:H.height,position:"fixed"},onMouseDown:ce=>Kt(ce,H.id),onDoubleClick:()=>Jt(H.id),children:[e.jsx("span",{className:E.placementLabel,children:fe}),e.jsx("span",{className:`${E.placementAnnotation} ${H.text?E.annotationVisible:""}`,children:(H.text&&ot.current.set(H.id,H.text),H.text||ot.current.get(H.id)||"")}),e.jsx("div",{className:E.placementContent,children:e.jsx(Nc,{type:H.type,width:H.width,height:H.height,text:H.text})}),e.jsx("div",{className:E.deleteButton,onMouseDown:ce=>ce.stopPropagation(),onClick:()=>rn(H.id),children:"✕"}),ln.map(ce=>e.jsx("div",{className:`${E.handle} ${E[`handle${ce.charAt(0).toUpperCase()}${ce.slice(1)}`]}`,onMouseDown:Ue=>sn(Ue,H.id,ce)},ce)),Zt.map(({dir:ce,cls:Ue,arrow:De})=>e.jsx("div",{className:`${E.edgeHandle} ${Ue}`,onMouseDown:de=>sn(de,H.id,ce),children:De},ce))]},H.id)})}),me&&(()=>{const H=t.find(lt=>lt.id===me);if(!H)return null;const te=H.y-Et,fe=H.x+H.width/2,ve=te-8,ce=te+H.height+8,Ue=ve>200,De=ce<window.innerHeight-100,de=Math.max(160,Math.min(window.innerWidth-160,fe));let He;return Ue?He={left:de,bottom:window.innerHeight-ve}:De?He={left:de,top:ce}:He={left:de,top:Math.max(80,window.innerHeight/2-80)},e.jsx(or,{element:Ht[H.type]?.label||H.type,placeholder:Yt[H.type]||"Label or content text",initialValue:H.text??"",submitLabel:Q.current?"Save":"Set",onSubmit:dt,onCancel:Rt,onDelete:Q.current?()=>{dt("")}:void 0,isExiting:W,lightMode:!r,style:He})})(),G&&e.jsx("div",{className:E.drawBox,style:{left:G.x,top:G.y,width:G.w,height:G.h},"data-feedback-toolbar":!0}),B&&e.jsx("div",{className:E.selectBox,style:{left:B.x,top:B.y,width:B.w,height:B.h},"data-feedback-toolbar":!0}),Ne&&e.jsx("div",{className:E.sizeIndicator,style:{left:Ne.x,top:Ne.y},"data-feedback-toolbar":!0,children:Ne.text}),Oe.map((H,te)=>e.jsx("div",{className:E.guideLine,style:H.axis==="x"?{position:"fixed",left:H.pos,top:0,width:1,bottom:0}:{position:"fixed",left:0,top:H.pos-Et,right:0,height:1},"data-feedback-toolbar":!0},`${H.axis}-${H.pos}-${te}`))]})}function Fi(t,{keepMounted:n=!1,onExited:o}={}){const[s,r]=l.useState(n||t),i=l.useRef(null),a=l.useRef(o);return t&&!s&&r(!0),l.useLayoutEffect(()=>{a.current=o},[o]),l.useLayoutEffect(()=>{const h=i.current;if(!h||h.dataset.panelOpen==="true"===t)return;getComputedStyle(h).opacity,h.dataset.panelPresent="true",h.dataset.panelOpen=String(t);let d=!1;const g=h.getAnimations?.()??[];return Promise.allSettled(g.map(f=>f.finished)).then(()=>{d||t||(delete h.dataset.panelPresent,n||r(!1),a.current?.())}),()=>{d=!0}},[t,s,n]),{ref:i,mounted:s}}function Dc(t){if(!t)return"";const n=t.scrollTop>2,o=t.scrollTop+t.clientHeight<t.scrollHeight-2;return`${n?E.fadeTop:""} ${o?E.fadeBottom:""}`}var u="currentColor",R="0.5";function Bc({type:t}){switch(t){case"navigation":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"1",y:"4",width:"18",height:"8",rx:"1",stroke:u,strokeWidth:R}),e.jsx("rect",{x:"2.5",y:"7",width:"3",height:"1.5",rx:".5",fill:u,opacity:".4"}),e.jsx("rect",{x:"7",y:"7",width:"2.5",height:"1.5",rx:".5",fill:u,opacity:".25"}),e.jsx("rect",{x:"11",y:"7",width:"2.5",height:"1.5",rx:".5",fill:u,opacity:".25"})]});case"header":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:u,strokeWidth:R}),e.jsx("rect",{x:"3",y:"5.5",width:"8",height:"2",rx:".5",fill:u,opacity:".35"}),e.jsx("rect",{x:"3",y:"9",width:"12",height:"1",rx:".5",fill:u,opacity:".15"})]});case"hero":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:u,strokeWidth:R}),e.jsx("rect",{x:"5",y:"5",width:"10",height:"1.5",rx:".5",fill:u,opacity:".35"}),e.jsx("rect",{x:"7",y:"8",width:"6",height:"1",rx:".5",fill:u,opacity:".15"}),e.jsx("rect",{x:"7.5",y:"10.5",width:"5",height:"2.5",rx:"1",stroke:u,strokeWidth:R})]});case"section":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:u,strokeWidth:R}),e.jsx("rect",{x:"3",y:"4",width:"6",height:"1",rx:".5",fill:u,opacity:".3"}),e.jsx("rect",{x:"3",y:"6.5",width:"14",height:"1",rx:".5",fill:u,opacity:".15"}),e.jsx("rect",{x:"3",y:"9",width:"10",height:"1",rx:".5",fill:u,opacity:".15"})]});case"sidebar":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:u,strokeWidth:R}),e.jsx("rect",{x:"2.5",y:"4",width:"4",height:"1",rx:".5",fill:u,opacity:".3"}),e.jsx("rect",{x:"2.5",y:"6.5",width:"3.5",height:"1",rx:".5",fill:u,opacity:".15"}),e.jsx("rect",{x:"2.5",y:"9",width:"4",height:"1",rx:".5",fill:u,opacity:".15"})]});case"footer":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"1",y:"7",width:"18",height:"8",rx:"1",stroke:u,strokeWidth:R}),e.jsx("rect",{x:"3",y:"9.5",width:"4",height:"1",rx:".5",fill:u,opacity:".25"}),e.jsx("rect",{x:"9",y:"9.5",width:"4",height:"1",rx:".5",fill:u,opacity:".25"}),e.jsx("rect",{x:"15",y:"9.5",width:"3",height:"1",rx:".5",fill:u,opacity:".2"})]});case"modal":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:u,strokeWidth:R}),e.jsx("rect",{x:"5",y:"4.5",width:"7",height:"1",rx:".5",fill:u,opacity:".3"}),e.jsx("rect",{x:"5",y:"7",width:"10",height:"1",rx:".5",fill:u,opacity:".15"}),e.jsx("rect",{x:"11",y:"11",width:"5",height:"2",rx:".75",stroke:u,strokeWidth:R})]});case"divider":return e.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:e.jsx("line",{x1:"2",y1:"8",x2:"18",y2:"8",stroke:u,strokeWidth:"0.5",opacity:".3"})});case"card":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:u,strokeWidth:R}),e.jsx("rect",{x:"2",y:"1",width:"16",height:"5.5",rx:"1",fill:u,opacity:".04"}),e.jsx("rect",{x:"4",y:"8.5",width:"8",height:"1",rx:".5",fill:u,opacity:".25"}),e.jsx("rect",{x:"4",y:"11",width:"11",height:"1",rx:".5",fill:u,opacity:".12"})]});case"text":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"2",y:"4",width:"14",height:"1.5",rx:".5",fill:u,opacity:".3"}),e.jsx("rect",{x:"2",y:"7",width:"11",height:"1",rx:".5",fill:u,opacity:".15"}),e.jsx("rect",{x:"2",y:"9.5",width:"13",height:"1",rx:".5",fill:u,opacity:".15"}),e.jsx("rect",{x:"2",y:"12",width:"8",height:"1",rx:".5",fill:u,opacity:".12"})]});case"image":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:u,strokeWidth:R}),e.jsx("line",{x1:"2",y1:"2",x2:"18",y2:"14",stroke:u,strokeWidth:".3",opacity:".25"}),e.jsx("line",{x1:"18",y1:"2",x2:"2",y2:"14",stroke:u,strokeWidth:".3",opacity:".25"})]});case"video":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:u,strokeWidth:R}),e.jsx("path",{d:"M8.5 5.5v5l4.5-2.5z",stroke:u,strokeWidth:R,fill:u,opacity:".15"})]});case"table":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:u,strokeWidth:R}),e.jsx("line",{x1:"1",y1:"5.5",x2:"19",y2:"5.5",stroke:u,strokeWidth:".3",opacity:".25"}),e.jsx("line",{x1:"1",y1:"9",x2:"19",y2:"9",stroke:u,strokeWidth:".3",opacity:".25"}),e.jsx("line",{x1:"7",y1:"2",x2:"7",y2:"14",stroke:u,strokeWidth:".3",opacity:".25"}),e.jsx("line",{x1:"13",y1:"2",x2:"13",y2:"14",stroke:u,strokeWidth:".3",opacity:".25"})]});case"grid":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"1.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:u,strokeWidth:R}),e.jsx("rect",{x:"11.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:u,strokeWidth:R}),e.jsx("rect",{x:"1.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:u,strokeWidth:R}),e.jsx("rect",{x:"11.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:u,strokeWidth:R})]});case"list":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("circle",{cx:"3.5",cy:"4.5",r:"1",stroke:u,strokeWidth:R}),e.jsx("rect",{x:"6.5",y:"4",width:"10",height:"1",rx:".5",fill:u,opacity:".2"}),e.jsx("circle",{cx:"3.5",cy:"8",r:"1",stroke:u,strokeWidth:R}),e.jsx("rect",{x:"6.5",y:"7.5",width:"8",height:"1",rx:".5",fill:u,opacity:".2"}),e.jsx("circle",{cx:"3.5",cy:"11.5",r:"1",stroke:u,strokeWidth:R}),e.jsx("rect",{x:"6.5",y:"11",width:"11",height:"1",rx:".5",fill:u,opacity:".2"})]});case"chart":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"3",y:"9",width:"2.5",height:"4",rx:".5",fill:u,opacity:".2"}),e.jsx("rect",{x:"7",y:"6",width:"2.5",height:"7",rx:".5",fill:u,opacity:".25"}),e.jsx("rect",{x:"11",y:"3",width:"2.5",height:"10",rx:".5",fill:u,opacity:".3"}),e.jsx("rect",{x:"15",y:"5",width:"2.5",height:"8",rx:".5",fill:u,opacity:".2"})]});case"accordion":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"1.5",y:"2",width:"17",height:"4",rx:"1",stroke:u,strokeWidth:R}),e.jsx("rect",{x:"3",y:"3.5",width:"6",height:"1",rx:".5",fill:u,opacity:".25"}),e.jsx("rect",{x:"1.5",y:"7.5",width:"17",height:"3",rx:"1",stroke:u,strokeWidth:R}),e.jsx("rect",{x:"1.5",y:"12",width:"17",height:"3",rx:"1",stroke:u,strokeWidth:R})]});case"carousel":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"3",y:"2",width:"14",height:"10",rx:"1",stroke:u,strokeWidth:R}),e.jsx("path",{d:"M1.5 7L3 8.5 1.5 10",stroke:u,strokeWidth:R,opacity:".35"}),e.jsx("path",{d:"M18.5 7L17 8.5 18.5 10",stroke:u,strokeWidth:R,opacity:".35"}),e.jsx("circle",{cx:"8.5",cy:"14",r:".6",fill:u,opacity:".35"}),e.jsx("circle",{cx:"10",cy:"14",r:".6",fill:u,opacity:".15"}),e.jsx("circle",{cx:"11.5",cy:"14",r:".6",fill:u,opacity:".15"})]});case"button":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"2",stroke:u,strokeWidth:R}),e.jsx("rect",{x:"6.5",y:"7.5",width:"7",height:"1",rx:".5",fill:u,opacity:".25"})]});case"input":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"2",y:"4",width:"5.5",height:"1",rx:".5",fill:u,opacity:".25"}),e.jsx("rect",{x:"2",y:"6.5",width:"16",height:"5.5",rx:"1",stroke:u,strokeWidth:R}),e.jsx("rect",{x:"3.5",y:"8.5",width:"7",height:"1",rx:".5",fill:u,opacity:".12"})]});case"search":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"2",y:"4.5",width:"16",height:"7",rx:"3.5",stroke:u,strokeWidth:R}),e.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:u,strokeWidth:R,opacity:".3"}),e.jsx("line",{x1:"7.5",y1:"9.5",x2:"9",y2:"11",stroke:u,strokeWidth:R,opacity:".3"}),e.jsx("rect",{x:"9.5",y:"7.5",width:"6",height:"1",rx:".5",fill:u,opacity:".12"})]});case"form":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"2",y:"1.5",width:"5.5",height:"1",rx:".5",fill:u,opacity:".25"}),e.jsx("rect",{x:"2",y:"3.5",width:"16",height:"3",rx:".75",stroke:u,strokeWidth:R}),e.jsx("rect",{x:"2",y:"8",width:"7",height:"1",rx:".5",fill:u,opacity:".25"}),e.jsx("rect",{x:"2",y:"10",width:"16",height:"3",rx:".75",stroke:u,strokeWidth:R}),e.jsx("rect",{x:"12",y:"14",width:"6",height:"2",rx:".75",stroke:u,strokeWidth:R})]});case"tabs":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"1",y:"5",width:"18",height:"10",rx:"1",stroke:u,strokeWidth:R}),e.jsx("rect",{x:"1",y:"2",width:"6",height:"3.5",rx:".75",stroke:u,strokeWidth:R}),e.jsx("rect",{x:"2.5",y:"3.25",width:"3",height:"1",rx:".5",fill:u,opacity:".25"}),e.jsx("rect",{x:"7",y:"2",width:"6",height:"3.5",rx:".75",stroke:u,strokeWidth:R})]});case"dropdown":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"2",y:"2",width:"16",height:"4",rx:"1",stroke:u,strokeWidth:R}),e.jsx("rect",{x:"3.5",y:"3.5",width:"7",height:"1",rx:".5",fill:u,opacity:".2"}),e.jsx("path",{d:"M15 3.5l1.5 1.5L18 3.5",stroke:u,strokeWidth:R,opacity:".3"}),e.jsx("rect",{x:"2",y:"7",width:"16",height:"7",rx:"1",stroke:u,strokeWidth:R,strokeDasharray:"2 1",opacity:".3"})]});case"toggle":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"4",y:"5",width:"12",height:"6",rx:"3",stroke:u,strokeWidth:R}),e.jsx("circle",{cx:"13",cy:"8",r:"2",fill:u,opacity:".3"})]});case"avatar":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("circle",{cx:"10",cy:"8",r:"6",stroke:u,strokeWidth:R}),e.jsx("circle",{cx:"10",cy:"6.5",r:"2",stroke:u,strokeWidth:R}),e.jsx("path",{d:"M6.5 13c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5",stroke:u,strokeWidth:R})]});case"badge":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"3",stroke:u,strokeWidth:R}),e.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:u,opacity:".25"})]});case"breadcrumb":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"1.5",y:"7",width:"3.5",height:"1",rx:".5",fill:u,opacity:".3"}),e.jsx("path",{d:"M6.5 7l1 1-1 1",stroke:u,strokeWidth:R,opacity:".2"}),e.jsx("rect",{x:"9",y:"7",width:"3.5",height:"1",rx:".5",fill:u,opacity:".2"}),e.jsx("path",{d:"M14 7l1 1-1 1",stroke:u,strokeWidth:R,opacity:".2"}),e.jsx("rect",{x:"16.5",y:"7",width:"2",height:"1",rx:".5",fill:u,opacity:".15"})]});case"pagination":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"2",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:u,strokeWidth:R}),e.jsx("rect",{x:"6.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:u,strokeWidth:R}),e.jsx("rect",{x:"11",y:"5.5",width:"3.5",height:"5",rx:"1",fill:u,opacity:".15",stroke:u,strokeWidth:R}),e.jsx("rect",{x:"15.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:u,strokeWidth:R})]});case"progress":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"2",y:"7",width:"16",height:"2",rx:"1",stroke:u,strokeWidth:R}),e.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:"1",fill:u,opacity:".2"})]});case"toast":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:u,strokeWidth:R}),e.jsx("circle",{cx:"5",cy:"8",r:"1.5",stroke:u,strokeWidth:R,opacity:".3"}),e.jsx("rect",{x:"8",y:"6.5",width:"7",height:"1",rx:".5",fill:u,opacity:".25"}),e.jsx("rect",{x:"8",y:"9",width:"5",height:"1",rx:".5",fill:u,opacity:".12"})]});case"tooltip":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"3",y:"3",width:"14",height:"7",rx:"1.5",stroke:u,strokeWidth:R}),e.jsx("rect",{x:"5.5",y:"5.5",width:"9",height:"1",rx:".5",fill:u,opacity:".25"}),e.jsx("path",{d:"M9 10l1 2.5 1-2.5",stroke:u,strokeWidth:R})]});case"pricing":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:u,strokeWidth:R}),e.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:u,opacity:".25"}),e.jsx("rect",{x:"7",y:"5.5",width:"6",height:"2",rx:".5",fill:u,opacity:".15"}),e.jsx("rect",{x:"5",y:"9",width:"10",height:"1",rx:".5",fill:u,opacity:".1"}),e.jsx("rect",{x:"5",y:"11",width:"10",height:"1",rx:".5",fill:u,opacity:".1"}),e.jsx("rect",{x:"6",y:"13",width:"8",height:"1.5",rx:".5",fill:u,opacity:".2"})]});case"testimonial":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:u,strokeWidth:R}),e.jsx("text",{x:"4",y:"5.5",fontSize:"4",fill:u,opacity:".2",fontFamily:"serif",children:"“"}),e.jsx("rect",{x:"4",y:"7",width:"12",height:"1",rx:".5",fill:u,opacity:".15"}),e.jsx("rect",{x:"4",y:"9",width:"9",height:"1",rx:".5",fill:u,opacity:".12"}),e.jsx("circle",{cx:"5.5",cy:"12.5",r:"1.5",stroke:u,strokeWidth:R,opacity:".25"}),e.jsx("rect",{x:"8",y:"12",width:"5",height:"1",rx:".5",fill:u,opacity:".15"})]});case"cta":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:u,strokeWidth:R}),e.jsx("rect",{x:"5",y:"4.5",width:"10",height:"1.5",rx:".5",fill:u,opacity:".3"}),e.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:u,opacity:".15"}),e.jsx("rect",{x:"7",y:"10",width:"6",height:"2.5",rx:"1",stroke:u,strokeWidth:R})]});case"alert":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:u,strokeWidth:R}),e.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:u,strokeWidth:R,opacity:".3"}),e.jsx("line",{x1:"6",y1:"7",x2:"6",y2:"8.5",stroke:u,strokeWidth:"0.6",opacity:".5"}),e.jsx("circle",{cx:"6",cy:"9.3",r:".3",fill:u,opacity:".5"}),e.jsx("rect",{x:"9.5",y:"7",width:"6",height:"1",rx:".5",fill:u,opacity:".2"})]});case"banner":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"1",y:"5",width:"18",height:"6",rx:"1",stroke:u,strokeWidth:R}),e.jsx("rect",{x:"4",y:"7.5",width:"8",height:"1",rx:".5",fill:u,opacity:".25"}),e.jsx("rect",{x:"14",y:"7",width:"3.5",height:"2",rx:".75",stroke:u,strokeWidth:R})]});case"stat":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:u,strokeWidth:R}),e.jsx("rect",{x:"6",y:"4.5",width:"8",height:"1",rx:".5",fill:u,opacity:".15"}),e.jsx("rect",{x:"5",y:"7",width:"10",height:"2.5",rx:".5",fill:u,opacity:".3"}),e.jsx("rect",{x:"7",y:"11",width:"6",height:"1",rx:".5",fill:u,opacity:".12"})]});case"stepper":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("circle",{cx:"4",cy:"8",r:"2",fill:u,opacity:".2",stroke:u,strokeWidth:R}),e.jsx("line",{x1:"6",y1:"8",x2:"8",y2:"8",stroke:u,strokeWidth:".4",opacity:".3"}),e.jsx("circle",{cx:"10",cy:"8",r:"2",stroke:u,strokeWidth:R}),e.jsx("line",{x1:"12",y1:"8",x2:"14",y2:"8",stroke:u,strokeWidth:".4",opacity:".3"}),e.jsx("circle",{cx:"16",cy:"8",r:"2",stroke:u,strokeWidth:R})]});case"tag":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"1.5",stroke:u,strokeWidth:R}),e.jsx("rect",{x:"5.5",y:"7.5",width:"6",height:"1",rx:".5",fill:u,opacity:".25"}),e.jsx("line",{x1:"14",y1:"6.5",x2:"15.5",y2:"9.5",stroke:u,strokeWidth:R,opacity:".2"}),e.jsx("line",{x1:"15.5",y1:"6.5",x2:"14",y2:"9.5",stroke:u,strokeWidth:R,opacity:".2"})]});case"rating":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("path",{d:"M4 5.5l1 2 2.2.3-1.6 1.5.4 2.2L4 10.3l-2 1.2.4-2.2L.8 7.8 3 7.5z",fill:u,opacity:".25"}),e.jsx("path",{d:"M10 5.5l1 2 2.2.3-1.6 1.5.4 2.2L10 10.3l-2 1.2.4-2.2L6.8 7.8 9 7.5z",fill:u,opacity:".25"}),e.jsx("path",{d:"M16 5.5l1 2 2.2.3-1.6 1.5.4 2.2L16 10.3l-2 1.2.4-2.2-1.6-1.5 2.2-.3z",stroke:u,strokeWidth:R,opacity:".25"})]});case"map":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:u,strokeWidth:R}),e.jsx("line",{x1:"2",y1:"6",x2:"18",y2:"10",stroke:u,strokeWidth:".3",opacity:".15"}),e.jsx("line",{x1:"7",y1:"2",x2:"11",y2:"14",stroke:u,strokeWidth:".3",opacity:".15"}),e.jsx("path",{d:"M10 5c-1.7 0-3 1.3-3 3 0 2.5 3 5 3 5s3-2.5 3-5c0-1.7-1.3-3-3-3z",fill:u,opacity:".15",stroke:u,strokeWidth:R})]});case"timeline":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("line",{x1:"5",y1:"2",x2:"5",y2:"14",stroke:u,strokeWidth:".4",opacity:".25"}),e.jsx("circle",{cx:"5",cy:"4",r:"1.5",fill:u,opacity:".2",stroke:u,strokeWidth:R}),e.jsx("rect",{x:"8",y:"3",width:"8",height:"1",rx:".5",fill:u,opacity:".25"}),e.jsx("circle",{cx:"5",cy:"8.5",r:"1.5",stroke:u,strokeWidth:R}),e.jsx("rect",{x:"8",y:"7.5",width:"6",height:"1",rx:".5",fill:u,opacity:".15"}),e.jsx("circle",{cx:"5",cy:"13",r:"1.5",stroke:u,strokeWidth:R}),e.jsx("rect",{x:"8",y:"12",width:"7",height:"1",rx:".5",fill:u,opacity:".15"})]});case"fileUpload":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:u,strokeWidth:R,strokeDasharray:"2 1"}),e.jsx("path",{d:"M10 10V5.5m0 0L7.5 8m2.5-2.5L12.5 8",stroke:u,strokeWidth:R,opacity:".3"}),e.jsx("rect",{x:"7",y:"11.5",width:"6",height:"1",rx:".5",fill:u,opacity:".15"})]});case"codeBlock":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:u,strokeWidth:R}),e.jsx("circle",{cx:"4",cy:"4",r:".6",fill:u,opacity:".3"}),e.jsx("circle",{cx:"5.5",cy:"4",r:".6",fill:u,opacity:".3"}),e.jsx("circle",{cx:"7",cy:"4",r:".6",fill:u,opacity:".3"}),e.jsx("rect",{x:"4",y:"7",width:"7",height:"1",rx:".5",fill:u,opacity:".2"}),e.jsx("rect",{x:"6",y:"9",width:"5",height:"1",rx:".5",fill:u,opacity:".15"}),e.jsx("rect",{x:"4",y:"11",width:"8",height:"1",rx:".5",fill:u,opacity:".12"})]});case"calendar":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"2",y:"3",width:"16",height:"12",rx:"1",stroke:u,strokeWidth:R}),e.jsx("line",{x1:"2",y1:"6.5",x2:"18",y2:"6.5",stroke:u,strokeWidth:".4",opacity:".25"}),e.jsx("rect",{x:"5",y:"4",width:"1",height:"1.5",rx:".3",fill:u,opacity:".2"}),e.jsx("rect",{x:"14",y:"4",width:"1",height:"1.5",rx:".3",fill:u,opacity:".2"}),e.jsx("circle",{cx:"7",cy:"9",r:".6",fill:u,opacity:".2"}),e.jsx("circle",{cx:"10",cy:"9",r:".6",fill:u,opacity:".2"}),e.jsx("circle",{cx:"13",cy:"9",r:".6",fill:u,opacity:".3"}),e.jsx("circle",{cx:"7",cy:"12",r:".6",fill:u,opacity:".2"}),e.jsx("circle",{cx:"10",cy:"12",r:".6",fill:u,opacity:".2"})]});case"notification":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"2",y:"3",width:"16",height:"10",rx:"1.5",stroke:u,strokeWidth:R}),e.jsx("circle",{cx:"5.5",cy:"8",r:"2",stroke:u,strokeWidth:R,opacity:".25"}),e.jsx("rect",{x:"9",y:"6",width:"6",height:"1",rx:".5",fill:u,opacity:".25"}),e.jsx("rect",{x:"9",y:"8.5",width:"4.5",height:"1",rx:".5",fill:u,opacity:".12"}),e.jsx("circle",{cx:"16.5",cy:"4.5",r:"1.5",fill:u,opacity:".25"})]});case"productCard":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:u,strokeWidth:R}),e.jsx("rect",{x:"3",y:"1",width:"14",height:"6",rx:"1",fill:u,opacity:".04"}),e.jsx("rect",{x:"5",y:"8.5",width:"7",height:"1",rx:".5",fill:u,opacity:".25"}),e.jsx("rect",{x:"5",y:"10.5",width:"4",height:"1.5",rx:".5",fill:u,opacity:".15"}),e.jsx("rect",{x:"12",y:"12",width:"4",height:"2",rx:".75",stroke:u,strokeWidth:R})]});case"profile":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("circle",{cx:"10",cy:"5",r:"3",stroke:u,strokeWidth:R}),e.jsx("rect",{x:"5",y:"10",width:"10",height:"1.5",rx:".5",fill:u,opacity:".25"}),e.jsx("rect",{x:"7",y:"12.5",width:"6",height:"1",rx:".5",fill:u,opacity:".12"})]});case"drawer":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"9",y:"1",width:"10",height:"14",rx:"1",stroke:u,strokeWidth:R}),e.jsx("rect",{x:"10.5",y:"4",width:"5",height:"1",rx:".5",fill:u,opacity:".25"}),e.jsx("rect",{x:"10.5",y:"6.5",width:"7",height:"1",rx:".5",fill:u,opacity:".15"}),e.jsx("rect",{x:"10.5",y:"9",width:"6",height:"1",rx:".5",fill:u,opacity:".15"}),e.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:u,strokeWidth:R,opacity:".15"})]});case"popover":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"3",y:"2",width:"14",height:"9",rx:"1.5",stroke:u,strokeWidth:R}),e.jsx("rect",{x:"5",y:"4.5",width:"8",height:"1",rx:".5",fill:u,opacity:".25"}),e.jsx("rect",{x:"5",y:"7",width:"6",height:"1",rx:".5",fill:u,opacity:".15"}),e.jsx("path",{d:"M9 11l1 2.5 1-2.5",stroke:u,strokeWidth:R})]});case"logo":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"2",y:"3",width:"10",height:"10",rx:"2",stroke:u,strokeWidth:R}),e.jsx("path",{d:"M5 9.5l2-4 2 4",stroke:u,strokeWidth:R,opacity:".3"}),e.jsx("rect",{x:"14",y:"6",width:"4",height:"1",rx:".5",fill:u,opacity:".2"}),e.jsx("rect",{x:"14",y:"8.5",width:"3",height:"1",rx:".5",fill:u,opacity:".12"})]});case"faq":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("text",{x:"2.5",y:"5.5",fontSize:"4",fill:u,opacity:".3",fontWeight:"bold",children:"?"}),e.jsx("rect",{x:"7",y:"3",width:"10",height:"1",rx:".5",fill:u,opacity:".25"}),e.jsx("rect",{x:"7",y:"5.5",width:"8",height:"1",rx:".5",fill:u,opacity:".12"}),e.jsx("text",{x:"2.5",y:"11.5",fontSize:"4",fill:u,opacity:".3",fontWeight:"bold",children:"?"}),e.jsx("rect",{x:"7",y:"9",width:"9",height:"1",rx:".5",fill:u,opacity:".25"}),e.jsx("rect",{x:"7",y:"11.5",width:"7",height:"1",rx:".5",fill:u,opacity:".12"})]});case"gallery":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"1.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:u,strokeWidth:R}),e.jsx("rect",{x:"7.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:u,strokeWidth:R}),e.jsx("rect",{x:"13.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:u,strokeWidth:R}),e.jsx("rect",{x:"1.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:u,strokeWidth:R}),e.jsx("rect",{x:"7.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:u,strokeWidth:R}),e.jsx("rect",{x:"13.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:u,strokeWidth:R})]});case"checkbox":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"5",y:"4",width:"8",height:"8",rx:"1.5",stroke:u,strokeWidth:R}),e.jsx("path",{d:"M7.5 8l1.5 1.5 3-3",stroke:u,strokeWidth:R,opacity:".35"})]});case"radio":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("circle",{cx:"10",cy:"8",r:"4",stroke:u,strokeWidth:R}),e.jsx("circle",{cx:"10",cy:"8",r:"2",fill:u,opacity:".3"})]});case"slider":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"2",y:"7.5",width:"16",height:"1",rx:".5",fill:u,opacity:".15"}),e.jsx("rect",{x:"2",y:"7.5",width:"10",height:"1",rx:".5",fill:u,opacity:".25"}),e.jsx("circle",{cx:"12",cy:"8",r:"2.5",stroke:u,strokeWidth:R})]});case"datePicker":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"2",y:"1",width:"16",height:"5",rx:"1",stroke:u,strokeWidth:R}),e.jsx("rect",{x:"3.5",y:"3",width:"5",height:"1",rx:".5",fill:u,opacity:".2"}),e.jsx("rect",{x:"14",y:"2.5",width:"2.5",height:"2",rx:".5",fill:u,opacity:".12"}),e.jsx("rect",{x:"2",y:"7",width:"16",height:"8",rx:"1",stroke:u,strokeWidth:R,strokeDasharray:"2 1",opacity:".3"}),e.jsx("circle",{cx:"6",cy:"10",r:".6",fill:u,opacity:".2"}),e.jsx("circle",{cx:"10",cy:"10",r:".6",fill:u,opacity:".3"}),e.jsx("circle",{cx:"14",cy:"10",r:".6",fill:u,opacity:".2"}),e.jsx("circle",{cx:"6",cy:"13",r:".6",fill:u,opacity:".2"}),e.jsx("circle",{cx:"10",cy:"13",r:".6",fill:u,opacity:".2"})]});case"skeleton":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"2",y:"2",width:"16",height:"3",rx:"1",fill:u,opacity:".08"}),e.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:".75",fill:u,opacity:".08"}),e.jsx("rect",{x:"2",y:"11",width:"13",height:"2",rx:".75",fill:u,opacity:".08"})]});case"chip":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"1.5",y:"5",width:"10",height:"6",rx:"3",fill:u,opacity:".08",stroke:u,strokeWidth:R}),e.jsx("rect",{x:"4",y:"7.5",width:"4",height:"1",rx:".5",fill:u,opacity:".25"}),e.jsx("line",{x1:"9.5",y1:"6.5",x2:"10.5",y2:"9.5",stroke:u,strokeWidth:R,opacity:".2"}),e.jsx("line",{x1:"10.5",y1:"6.5",x2:"9.5",y2:"9.5",stroke:u,strokeWidth:R,opacity:".2"}),e.jsx("rect",{x:"13",y:"5",width:"5.5",height:"6",rx:"3",stroke:u,strokeWidth:R,opacity:".25"})]});case"icon":return e.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:e.jsx("path",{d:"M10 3l1.5 3 3.5.5-2.5 2.5.5 3.5L10 11l-3 1.5.5-3.5L5 6.5l3.5-.5z",stroke:u,strokeWidth:R,opacity:".3"})});case"spinner":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("circle",{cx:"10",cy:"8",r:"5",stroke:u,strokeWidth:R,opacity:".12"}),e.jsx("path",{d:"M10 3a5 5 0 0 1 5 5",stroke:u,strokeWidth:R,opacity:".35",strokeLinecap:"round"})]});case"feature":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"2",y:"2",width:"5",height:"5",rx:"1.5",stroke:u,strokeWidth:R}),e.jsx("path",{d:"M4.5 3.5v3m-1.5-1.5h3",stroke:u,strokeWidth:R,opacity:".25"}),e.jsx("rect",{x:"9",y:"2.5",width:"8",height:"1.5",rx:".5",fill:u,opacity:".25"}),e.jsx("rect",{x:"9",y:"5.5",width:"6",height:"1",rx:".5",fill:u,opacity:".12"}),e.jsx("rect",{x:"2",y:"10",width:"5",height:"5",rx:"1.5",stroke:u,strokeWidth:R}),e.jsx("rect",{x:"9",y:"10.5",width:"7",height:"1.5",rx:".5",fill:u,opacity:".25"}),e.jsx("rect",{x:"9",y:"13.5",width:"5",height:"1",rx:".5",fill:u,opacity:".12"})]});case"team":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("circle",{cx:"5",cy:"5",r:"2.5",stroke:u,strokeWidth:R}),e.jsx("rect",{x:"2.5",y:"9",width:"5",height:"1",rx:".5",fill:u,opacity:".2"}),e.jsx("circle",{cx:"15",cy:"5",r:"2.5",stroke:u,strokeWidth:R}),e.jsx("rect",{x:"12.5",y:"9",width:"5",height:"1",rx:".5",fill:u,opacity:".2"}),e.jsx("circle",{cx:"10",cy:"5",r:"2.5",stroke:u,strokeWidth:R,opacity:".5"}),e.jsx("rect",{x:"7.5",y:"9",width:"5",height:"1",rx:".5",fill:u,opacity:".15"}),e.jsx("rect",{x:"4",y:"12",width:"12",height:"1",rx:".5",fill:u,opacity:".1"})]});case"login":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:u,strokeWidth:R}),e.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:u,opacity:".25"}),e.jsx("rect",{x:"5",y:"5.5",width:"10",height:"3",rx:".75",stroke:u,strokeWidth:R}),e.jsx("rect",{x:"5",y:"9.5",width:"10",height:"3",rx:".75",stroke:u,strokeWidth:R}),e.jsx("rect",{x:"6.5",y:"13.5",width:"7",height:"2",rx:".75",fill:u,opacity:".2"})]});case"contact":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:u,strokeWidth:R}),e.jsx("rect",{x:"4",y:"3",width:"5",height:"1",rx:".5",fill:u,opacity:".2"}),e.jsx("rect",{x:"4",y:"5",width:"12",height:"2.5",rx:".75",stroke:u,strokeWidth:R}),e.jsx("rect",{x:"4",y:"8.5",width:"12",height:"4",rx:".75",stroke:u,strokeWidth:R}),e.jsx("rect",{x:"11",y:"13.5",width:"5",height:"1.5",rx:".5",fill:u,opacity:".2"})]});default:return null}}function Pc({activeType:t,onSelect:n,onDragStart:o,scrollRef:s,fadeClass:r,blankCanvas:i}){return e.jsx("div",{ref:s,className:`${E.placeScroll} ${r||""}`,children:zi.map(a=>e.jsxs("div",{className:E.paletteSection,children:[e.jsx("div",{className:E.paletteSectionTitle,children:a.section}),a.items.map(h=>e.jsxs("button",{type:"button","aria-pressed":t===h.type,className:`${E.paletteItem} ${t===h.type?E.active:""} ${i?E.wireframe:""}`,onClick:()=>n(h.type),onMouseDown:d=>{d.button===0&&o(h.type,d)},children:[e.jsx("span",{className:E.paletteItemIcon,"aria-hidden":"true",children:e.jsx(Bc,{type:h.type})}),e.jsx("span",{className:E.paletteItemLabel,children:h.label})]},h.type))]},a.section))})}function Ac({value:t,suffix:n}){const[o,s]=l.useState(null),[r,i]=l.useState(n),[a,h]=l.useState("up"),d=l.useRef(t),g=l.useRef(n),f=l.useRef(),p=o!==null&&r!==n;return l.useEffect(()=>{if(t!==d.current){if(t===0){d.current=t,g.current=n,s(null);return}h(t>d.current?"up":"down"),s(d.current),i(g.current),d.current=t,g.current=n,clearTimeout(f.current),f.current=We(()=>s(null),250)}else g.current=n},[t,n]),o===null?e.jsxs(e.Fragment,{children:[t,n?` ${n}`:""]}):p?e.jsxs("span",{className:E.rollingWrap,children:[e.jsxs("span",{style:{visibility:"hidden"},children:[t," ",n]}),e.jsxs("span",{className:`${E.rollingNum} ${a==="up"?E.exitUp:E.exitDown}`,children:[o," ",r]},`o${o}-${t}`),e.jsxs("span",{className:`${E.rollingNum} ${a==="up"?E.enterUp:E.enterDown}`,children:[t," ",n]},`n${t}`)]}):e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:E.rollingWrap,children:[e.jsx("span",{style:{visibility:"hidden"},children:t}),e.jsx("span",{className:`${E.rollingNum} ${a==="up"?E.exitUp:E.exitDown}`,children:o},`o${o}-${t}`),e.jsx("span",{className:`${E.rollingNum} ${a==="up"?E.enterUp:E.enterDown}`,children:t},`n${t}`)]}),n?` ${n}`:""]})}function Oc({activeType:t,onSelect:n,isDarkMode:o,sectionCount:s,onDetectSections:r,visible:i,onExited:a,placementCount:h,onClearPlacements:d,onDragStart:g,blankCanvas:f,onBlankCanvasChange:p,wireframePurpose:w,onWireframePurposeChange:$,Tooltip:v}){const{ref:T,mounted:x}=Fi(i,{onExited:a}),[I,G]=l.useState(!1),[M,B]=l.useState(!0),we=l.useRef(0),Ne=l.useRef(""),U=l.useRef(null),[Oe,z]=l.useState(""),me=h>0||s>0,ne=h+s;return ne>0&&(we.current=ne,Ne.current=f?ne===1?"Component":"Components":ne===1?"Change":"Changes"),l.useEffect(()=>{if(me)I?B(!1):(B(!0),G(!0),ts(()=>{ts(()=>{B(!1)})}));else{B(!0);const W=We(()=>G(!1),300);return()=>clearTimeout(W)}},[me]),l.useEffect(()=>{if(!i)return;const W=U.current;if(!W)return;const ke=()=>z(Dc(W));W.addEventListener("scroll",ke,{passive:!0});const Q=new ResizeObserver(ke);return Q.observe(W),()=>{W.removeEventListener("scroll",ke),Q.disconnect()}},[i]),x?e.jsxs("div",{className:`${E.palette} ${o?"":E.light}`,ref:W=>{T.current=W,W?.toggleAttribute("inert",!i)},"aria-hidden":!i,"data-feedback-toolbar":!0,"data-agentation-palette":!0,onClick:W=>W.stopPropagation(),onMouseDown:W=>W.stopPropagation(),children:[e.jsxs("div",{className:E.paletteHeader,children:[e.jsx("div",{className:E.paletteHeaderTitle,children:"Layout Mode"}),e.jsxs("div",{className:E.paletteHeaderDesc,children:["Rearrange and resize existing elements, add new components, and explore layout ideas. Agent results may vary."," ",e.jsx("a",{href:"https://agentation.com/features#layout-mode",target:"_blank",rel:"noopener noreferrer",children:"Learn more."})]})]}),e.jsxs("button",{type:"button","aria-pressed":f,className:`${E.canvasToggle} ${f?E.active:""}`,onClick:()=>p(!f),children:[e.jsx("span",{className:E.canvasToggleIcon,"aria-hidden":"true",children:e.jsxs("svg",{viewBox:"0 0 14 14",width:"14",height:"14",fill:"none",children:[e.jsx("rect",{x:"1",y:"1",width:"12",height:"12",rx:"2",stroke:"currentColor",strokeWidth:"1"}),e.jsx("circle",{cx:"4.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),e.jsx("circle",{cx:"7",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),e.jsx("circle",{cx:"9.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),e.jsx("circle",{cx:"4.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),e.jsx("circle",{cx:"7",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),e.jsx("circle",{cx:"9.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),e.jsx("circle",{cx:"4.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),e.jsx("circle",{cx:"7",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),e.jsx("circle",{cx:"9.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"})]})}),e.jsx("span",{className:E.canvasToggleLabel,children:"Wireframe New Page"})]}),e.jsx("div",{className:`${E.wireframePurposeWrap} ${f?"":E.collapsed}`,"aria-hidden":!f,ref:W=>{W?.toggleAttribute("inert",!f)},children:e.jsx("div",{className:E.wireframePurposeInner,children:e.jsx("textarea",{className:E.wireframePurposeInput,placeholder:"Describe this page to provide additional context for your agent.",value:w,onChange:W=>$(W.target.value),rows:2})})}),e.jsx(Pc,{activeType:t,onSelect:n,onDragStart:g,scrollRef:U,fadeClass:Oe,blankCanvas:f}),I&&e.jsx("div",{className:`${E.paletteFooterWrap} ${M?E.footerHidden:""}`,children:e.jsx("div",{className:E.paletteFooterInner,children:e.jsx("div",{className:E.paletteFooterInnerContent,children:e.jsxs("div",{className:E.paletteFooter,children:[e.jsx("span",{className:E.paletteFooterCount,children:e.jsx(Ac,{value:we.current,suffix:Ne.current})}),e.jsx("button",{className:E.paletteFooterClear,onClick:d,children:"Clear"})]})})})})]}):null}var zc=new Set(["nav","header","main","section","article","footer","aside"]),Qs={banner:"Header",navigation:"Navigation",main:"Main Content",contentinfo:"Footer",complementary:"Sidebar",region:"Section"},ri={nav:"Navigation",header:"Header",main:"Main Content",section:"Section",article:"Article",footer:"Footer",aside:"Sidebar"},Fc=new Set(["script","style","noscript","link","meta"]),Wc=40;function Wi(t){let n=t;for(;n&&n!==document.body&&n!==document.documentElement;){const o=window.getComputedStyle(n).position;if(o==="fixed"||o==="sticky")return!0;n=n.parentElement}return!1}function Rn(t){const n=t.tagName.toLowerCase();if(["nav","header","footer","main"].includes(n)&&document.querySelectorAll(n).length===1)return n;if(t.id)return`#${CSS.escape(t.id)}`;if(t.className&&typeof t.className=="string"){const r=t.className.split(/\s+/).filter(i=>i.length>0).find(i=>i.length>2&&!/^[a-zA-Z0-9]{6,}$/.test(i)&&!/^[a-z]{1,2}$/.test(i));if(r){const i=`${n}.${CSS.escape(r)}`;if(document.querySelectorAll(i).length===1)return i}}const o=t.parentElement;if(o){const r=Array.from(o.children).indexOf(t)+1;return`${o===document.body?"body":Rn(o)} > ${n}:nth-child(${r})`}return n}function ns(t){const n=t.tagName.toLowerCase(),o=t.getAttribute("aria-label");if(o)return o;const s=t.getAttribute("role");if(s&&Qs[s])return Qs[s];if(ri[n])return ri[n];const r=t.querySelector("h1, h2, h3, h4, h5, h6");if(r){const a=r.textContent?.trim();if(a&&a.length<=50)return a;if(a)return a.slice(0,47)+"..."}const{name:i}=Hn(t);return i.charAt(0).toUpperCase()+i.slice(1)}function Hi(t){const n=t.className;return typeof n!="string"||!n?null:n.split(/\s+/).map(s=>s.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(s=>s.length>2&&!/^[a-z]{1,2}$/.test(s))||null}function Yi(t){const n=t.textContent?.trim();if(!n)return null;const o=n.replace(/\s+/g," ");return o.length<=30?o:o.slice(0,30)+"…"}function Hc(){const t=document.querySelector("main")||document.body,n=Array.from(t.children);let o=n;t!==document.body&&n.length<3&&(o=Array.from(document.body.children));const s=[];return o.forEach((r,i)=>{if(!(r instanceof HTMLElement))return;const a=r.tagName.toLowerCase();if(Fc.has(a)||r.hasAttribute("data-feedback-toolbar")||r.closest("[data-feedback-toolbar]"))return;const h=window.getComputedStyle(r);if(h.display==="none"||h.visibility==="hidden")return;const d=r.getBoundingClientRect();if(d.height<Wc)return;const g=zc.has(a),f=r.getAttribute("role")&&Qs[r.getAttribute("role")],p=a==="div"&&d.height>=60;if(!g&&!f&&!p)return;const w=window.scrollY,$=Wi(r),v={x:d.x,y:$?d.y:d.y+w,width:d.width,height:d.height};s.push({id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:ns(r),tagName:a,selector:Rn(r),role:r.getAttribute("role"),className:Hi(r),textSnippet:Yi(r),originalRect:v,currentRect:{...v},originalIndex:i,isFixed:$})}),s}function Yc(t){const n=window.scrollY,o=t.getBoundingClientRect(),s=Wi(t),r={x:o.x,y:s?o.y:o.y+n,width:o.width,height:o.height},i=t.parentElement;let a=0;return i&&(a=Array.from(i.children).indexOf(t)),{id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:ns(t),tagName:t.tagName.toLowerCase(),selector:Rn(t),role:t.getAttribute("role"),className:Hi(t),textSnippet:Yi(t),originalRect:r,currentRect:{...r},originalIndex:a,isFixed:s}}var ii={bg:"rgba(59, 130, 246, 0.08)",border:"rgba(59, 130, 246, 0.5)",pill:"#3b82f6"},li=["nw","n","ne","e","se","s","sw","w"],Xo=24,ai=16,Uo=5;function ci(t,n,o,s){let r=1/0,i=1/0;const a=t.x,h=t.x+t.width,d=t.x+t.width/2,g=t.y,f=t.y+t.height,p=t.y+t.height/2,w=[];for(const U of n)o.has(U.id)||w.push(U.currentRect);s&&w.push(...s);for(const U of w){const Oe=U.x,z=U.x+U.width,me=U.x+U.width/2,ne=U.y,W=U.y+U.height,ke=U.y+U.height/2;for(const Q of[a,h,d])for(const V of[Oe,z,me]){const oe=V-Q;Math.abs(oe)<Uo&&Math.abs(oe)<Math.abs(r)&&(r=oe)}for(const Q of[g,f,p])for(const V of[ne,W,ke]){const oe=V-Q;Math.abs(oe)<Uo&&Math.abs(oe)<Math.abs(i)&&(i=oe)}}const $=Math.abs(r)<Uo?r:0,v=Math.abs(i)<Uo?i:0,T=[],x=new Set,I=a+$,G=h+$,M=d+$,B=g+v,we=f+v,Ne=p+v;for(const U of w){const Oe=U.x,z=U.x+U.width,me=U.x+U.width/2,ne=U.y,W=U.y+U.height,ke=U.y+U.height/2;for(const Q of[Oe,me,z])for(const V of[I,M,G])if(Math.abs(V-Q)<.5){const oe=`x:${Math.round(Q)}`;x.has(oe)||(x.add(oe),T.push({axis:"x",pos:Q}))}for(const Q of[ne,ke,W])for(const V of[B,Ne,we])if(Math.abs(V-Q)<.5){const oe=`y:${Math.round(Q)}`;x.has(oe)||(x.add(oe),T.push({axis:"y",pos:Q}))}}return{dx:$,dy:v,guides:T}}var Xc=new Set(["script","style","noscript","link","meta","br","hr"]);function di(t){let n=t;for(;n&&n!==document.body&&n!==document.documentElement;){if(n.closest("[data-feedback-toolbar]"))return null;if(Xc.has(n.tagName.toLowerCase())){n=n.parentElement;continue}const o=n.getBoundingClientRect();if(o.width>=ai&&o.height>=ai)return n;n=n.parentElement}return null}function Uc({rearrangeState:t,onChange:n,isDarkMode:o,exiting:s,className:r,blankCanvas:i,extraSnapRects:a,onSelectionChange:h,deselectSignal:d,onDragMove:g,onDragEnd:f,clearing:p}){const{sections:w}=t,$=l.useRef(t);$.current=t;const[v,T]=l.useState(new Set);l.useEffect(()=>{p&&T(new Set)},[p]);const x=l.useRef(d);l.useEffect(()=>{d!==x.current&&(x.current=d,T(new Set))},[d]);const[I,G]=l.useState(null),[M,B]=l.useState(!1),we=l.useRef(!1),Ne=l.useCallback(b=>{const j=w.find(N=>N.id===b);j&&(we.current=!!j.note,G(b),B(!1))},[w]),U=l.useCallback(()=>{I&&(B(!0),We(()=>{G(null),B(!1)},150))},[I]),Oe=l.useCallback(b=>{I&&(n({...t,sections:w.map(j=>j.id===I?{...j,note:b.trim()||void 0}:j)}),U())},[I,w,t,n,U]);l.useEffect(()=>{s&&I&&U()},[s]);const[z,me]=l.useState(new Set),ne=l.useRef(new Map),[W,ke]=l.useState(null),[Q,V]=l.useState(null),[oe,ot]=l.useState([]),[$e,ze]=l.useState(0),Re=l.useRef(null),Ze=l.useRef(new Set),ht=l.useRef(new Map),[kt,xe]=l.useState(new Map),[Pt,Kt]=l.useState(new Map),sn=l.useRef(new Set),rn=l.useRef(new Map),Yt=l.useRef(h);Yt.current=h;const Jt=l.useRef(g);Jt.current=g;const Rt=l.useRef(f);Rt.current=f,l.useEffect(()=>{i&&T(new Set)},[i]);const[dt,Et]=l.useState(()=>!t.sections.some(b=>{const j=b.originalRect,N=b.currentRect;return Math.abs(j.x-N.x)>1||Math.abs(j.y-N.y)>1||Math.abs(j.width-N.width)>1||Math.abs(j.height-N.height)>1}));l.useEffect(()=>{if(!dt){const b=We(()=>Et(!0),380);return()=>clearTimeout(b)}},[]);const ln=l.useRef(new Set);l.useEffect(()=>{ln.current=new Set(w.map(b=>b.selector))},[w]),l.useEffect(()=>{const b=()=>ze(window.scrollY);return b(),window.addEventListener("scroll",b,{passive:!0}),window.addEventListener("resize",b,{passive:!0}),()=>{window.removeEventListener("scroll",b),window.removeEventListener("resize",b)}},[]),l.useEffect(()=>{const b=j=>{if(Re.current){ke(null);return}const N=document.elementFromPoint(j.clientX,j.clientY);if(!N){ke(null);return}if(N.closest("[data-feedback-toolbar]")){ke(null);return}if(N.closest("[data-design-placement]")){ke(null);return}if(N.closest("[data-annotation-popup]")){ke(null);return}const A=di(N);if(!A){ke(null);return}for(const Y of ln.current)try{const O=document.querySelector(Y);if(O&&(O===A||A.contains(O))){ke(null);return}}catch{}const K=A.getBoundingClientRect();ke({x:K.x,y:K.y,w:K.width,h:K.height})};return document.addEventListener("mousemove",b,{passive:!0}),()=>document.removeEventListener("mousemove",b)},[w]),l.useEffect(()=>{const b=document.body.style.userSelect;return document.body.style.webkitUserSelect="none",document.body.style.userSelect="none",()=>{document.body.style.webkitUserSelect=b,document.body.style.userSelect=b}},[]),l.useEffect(()=>{const b=j=>{if(Re.current||j.button!==0)return;const N=j.composedPath()[0]??j.target;if(!N||N.closest("[data-feedback-toolbar]")||N.closest("[data-design-placement]")||N.closest("[data-annotation-popup]"))return;const A=di(N);let K=!1;if(A)for(const O of ln.current)try{const _e=document.querySelector(O);if(_e&&(_e===A||A.contains(_e))){K=!0;break}}catch{}const Y=!!(j.shiftKey||j.metaKey||j.ctrlKey);if(A&&!K){j.preventDefault(),j.stopPropagation();const O=Yc(A),_e=[...w,O],pe=[...t.originalOrder,O.id];n({...t,sections:_e,originalOrder:pe});const je=new Set([O.id]);T(je),Yt.current?.(je,Y),ke(null);const Qe=j.clientX,Ve=j.clientY,Te={x:O.currentRect.x,y:O.currentRect.y};O.originalRect;let Be=!1,Ee=0,Ke=0;Re.current="move";const et=ae=>{const qe=ae.clientX-Qe,_t=ae.clientY-Ve;if(!Be&&(Math.abs(qe)>2||Math.abs(_t)>2)&&(Be=!0),!Be)return;const bt={x:Te.x+qe,y:Te.y+_t,width:O.currentRect.width,height:O.currentRect.height},J=ci(bt,_e,new Set([O.id]),a);ot(J.guides);const jt=qe+J.dx,St=_t+J.dy;Ee=jt,Ke=St;const Ct=P().querySelector(`[data-rearrange-section="${O.id}"]`);Ct&&(Ct.style.transform=`translate(${jt}px, ${St}px)`),xe(new Map([[O.id,{x:Te.x+jt,y:Te.y+St,width:O.currentRect.width,height:O.currentRect.height}]])),Jt.current?.(jt,St)},Se=()=>{window.removeEventListener("mousemove",et),window.removeEventListener("mouseup",Se),Re.current=null,ot([]),xe(new Map);const ae=P().querySelector(`[data-rearrange-section="${O.id}"]`);ae&&(ae.style.transform=""),Be&&n({...t,sections:_e.map(qe=>qe.id===O.id?{...qe,currentRect:{...qe.currentRect,x:Math.max(0,Te.x+Ee),y:Math.max(0,Te.y+Ke)}}:qe),originalOrder:pe}),Rt.current?.(Ee,Ke,Be)};window.addEventListener("mousemove",et),window.addEventListener("mouseup",Se)}else if(K&&A){j.preventDefault();for(const O of w)try{const _e=document.querySelector(O.selector);if(_e&&_e===A){const pe=new Set([O.id]);T(pe),Yt.current?.(pe,Y);return}}catch{}Y||(T(new Set),Yt.current?.(new Set,!1))}else Y||(T(new Set),Yt.current?.(new Set,!1))};return document.addEventListener("mousedown",b,!0),()=>document.removeEventListener("mousedown",b,!0)},[w,t,n]),l.useEffect(()=>{const b=j=>{const N=j.composedPath()[0]||j.target;if(!(N.tagName==="INPUT"||N.tagName==="TEXTAREA"||N.isContentEditable)){if((j.key==="Backspace"||j.key==="Delete")&&v.size>0){j.preventDefault();const A=new Set(v);me(K=>{const Y=new Set(K);for(const O of A)Y.add(O);return Y}),T(new Set),We(()=>{const K=$.current;n({...K,sections:K.sections.filter(Y=>!A.has(Y.id)),originalOrder:K.originalOrder.filter(Y=>!A.has(Y))}),me(Y=>{const O=new Set(Y);for(const _e of A)O.delete(_e);return O})},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(j.key)&&v.size>0){j.preventDefault();const A=j.shiftKey?20:1,K=j.key==="ArrowLeft"?-A:j.key==="ArrowRight"?A:0,Y=j.key==="ArrowUp"?-A:j.key==="ArrowDown"?A:0;n({...t,sections:w.map(O=>v.has(O.id)?{...O,currentRect:{...O.currentRect,x:Math.max(0,O.currentRect.x+K),y:Math.max(0,O.currentRect.y+Y)}}:O)});return}j.key==="Escape"&&v.size>0&&T(new Set)}};return document.addEventListener("keydown",b),()=>document.removeEventListener("keydown",b)},[v,w,t,n]);const Xt=l.useCallback((b,j)=>{if(b.button!==0)return;const N=b.target;if(N.closest(`.${E.handle}`)||N.closest(`.${E.deleteButton}`))return;b.preventDefault(),b.stopPropagation();let A;b.shiftKey||b.metaKey||b.ctrlKey?(A=new Set(v),A.has(j)?A.delete(j):A.add(j)):v.has(j)?A=new Set(v):A=new Set([j]),T(A),(A.size!==v.size||[...A].some(Ee=>!v.has(Ee)))&&Yt.current?.(A,!!(b.shiftKey||b.metaKey||b.ctrlKey));const Y=b.clientX,O=b.clientY,_e=new Map;for(const Ee of w)A.has(Ee.id)&&_e.set(Ee.id,{x:Ee.currentRect.x,y:Ee.currentRect.y});Re.current="move";let pe=!1,je=0,Qe=0;const Ve=new Map;for(const Ee of w)if(A.has(Ee.id)){const Ke=P().querySelector(`[data-rearrange-section="${Ee.id}"]`);Ve.set(Ee.id,{outlineEl:Ke,curW:Ee.currentRect.width,curH:Ee.currentRect.height})}const Te=Ee=>{const Ke=Ee.clientX-Y,et=Ee.clientY-O;if(Ke===0&&et===0)return;pe=!0;let Se=1/0,ae=1/0,qe=-1/0,_t=-1/0;for(const[Ct,{curW:hn,curH:en}]of Ve){const At=_e.get(Ct);if(!At)continue;const It=At.x+Ke,Un=At.y+et;Se=Math.min(Se,It),ae=Math.min(ae,Un),qe=Math.max(qe,It+hn),_t=Math.max(_t,Un+en)}const bt=ci({x:Se,y:ae,width:qe-Se,height:_t-ae},w,A,a),J=Ke+bt.dx,jt=et+bt.dy;je=J,Qe=jt,ot(bt.guides);for(const[,{outlineEl:Ct}]of Ve)Ct&&(Ct.style.transform=`translate(${J}px, ${jt}px)`);const St=new Map;for(const[Ct,{curW:hn,curH:en}]of Ve){const At=_e.get(Ct);if(At){const It={x:Math.max(0,At.x+J),y:Math.max(0,At.y+jt),width:hn,height:en};St.set(Ct,It)}}xe(St),Jt.current?.(J,jt)},Be=Ee=>{window.removeEventListener("mousemove",Te),window.removeEventListener("mouseup",Be),Re.current=null,ot([]),xe(new Map);for(const[,{outlineEl:Ke}]of Ve)Ke&&(Ke.style.transform="");if(pe){const Ke=Ee.clientX-Y,et=Ee.clientY-O;if(Math.abs(Ke)<5&&Math.abs(et)<5)n({...t,sections:w.map(Se=>{const ae=_e.get(Se.id);return ae?{...Se,currentRect:{...Se.currentRect,x:ae.x,y:ae.y}}:Se})});else{n({...t,sections:w.map(Se=>{const ae=_e.get(Se.id);return ae?{...Se,currentRect:{...Se.currentRect,x:Math.max(0,ae.x+je),y:Math.max(0,ae.y+Qe)}}:Se})}),Rt.current?.(je,Qe,!0);return}}Rt.current?.(0,0,!1)};window.addEventListener("mousemove",Te),window.addEventListener("mouseup",Be)},[v,w,t,n]),Zt=l.useCallback((b,j,N)=>{b.preventDefault(),b.stopPropagation();const A=w.find(Te=>Te.id===j);if(!A)return;T(new Set([j])),Re.current="resize";const K=b.clientX,Y=b.clientY,O={...A.currentRect};A.originalRect;const _e=O.width/O.height;let pe={...O};const je=P().querySelector(`[data-rearrange-section="${j}"]`),Qe=Te=>{const Be=Te.clientX-K,Ee=Te.clientY-Y;let Ke=O.x,et=O.y,Se=O.width,ae=O.height;if(N.includes("e")&&(Se=Math.max(Xo,O.width+Be)),N.includes("w")&&(Se=Math.max(Xo,O.width-Be),Ke=O.x+O.width-Se),N.includes("s")&&(ae=Math.max(Xo,O.height+Ee)),N.includes("n")&&(ae=Math.max(Xo,O.height-Ee),et=O.y+O.height-ae),Te.shiftKey)if(N.length===2){const _t=Math.abs(Se-O.width),bt=Math.abs(ae-O.height);_t>bt?ae=Se/_e:Se=ae*_e,N.includes("w")&&(Ke=O.x+O.width-Se),N.includes("n")&&(et=O.y+O.height-ae)}else N==="e"||N==="w"?ae=Se/_e:Se=ae*_e,N==="w"&&(Ke=O.x+O.width-Se),N==="n"&&(et=O.y+O.height-ae);pe={x:Ke,y:et,width:Se,height:ae},je&&(je.style.left=`${Ke}px`,je.style.top=`${et-$e}px`,je.style.width=`${Se}px`,je.style.height=`${ae}px`),V({x:Te.clientX+12,y:Te.clientY+12,text:`${Math.round(Se)} × ${Math.round(ae)}`}),xe(new Map([[j,pe]]))},Ve=()=>{window.removeEventListener("mousemove",Qe),window.removeEventListener("mouseup",Ve),V(null),Re.current=null,xe(new Map),n({...t,sections:w.map(Te=>Te.id===j?{...Te,currentRect:pe}:Te)})};window.addEventListener("mousemove",Qe),window.addEventListener("mouseup",Ve)},[w,t,n,$e]),H=l.useCallback(b=>{me(j=>{const N=new Set(j);return N.add(b),N}),T(j=>{const N=new Set(j);return N.delete(b),N}),We(()=>{const j=$.current;n({...j,sections:j.sections.filter(N=>N.id!==b),originalOrder:j.originalOrder.filter(N=>N!==b)}),me(N=>{const A=new Set(N);return A.delete(b),A})},180)},[n]),te=b=>{const j=b.originalRect,N=b.currentRect;return Math.abs(j.x-N.x)>1||Math.abs(j.y-N.y)>1||Math.abs(j.width-N.width)>1||Math.abs(j.height-N.height)>1},fe=b=>{const j=b.originalRect,N=b.currentRect;return Math.abs(j.x-N.x)>1||Math.abs(j.y-N.y)>1},ve=b=>{const j=b.originalRect,N=b.currentRect;return Math.abs(j.width-N.width)>1||Math.abs(j.height-N.height)>1};for(const b of w)ht.current.has(b.id)||(fe(b)?ht.current.set(b.id,"move"):ve(b)&&ht.current.set(b.id,"resize"));for(const b of ht.current.keys())w.some(j=>j.id===b)||ht.current.delete(b);const ce=w.filter(b=>{try{if(z.has(b.id)||v.has(b.id))return!0;const j=document.querySelector(b.selector);if(!j)return!1;const N=j.getBoundingClientRect(),A=b.originalRect;return Math.abs(N.width-A.width)+Math.abs(N.height-A.height)<200}catch{return!1}}),Ue=ce.filter(b=>te(b)),De=ce.filter(b=>!te(b)),de=new Set(Ue.map(b=>b.id));for(const b of Ze.current)de.has(b)||Ze.current.delete(b);const He=[...de].sort().join(",");for(const b of Ue)rn.current.set(b.id,{currentRect:b.currentRect,originalRect:b.originalRect,isFixed:b.isFixed});l.useEffect(()=>{const b=sn.current;sn.current=de;const j=new Map;for(const N of b)if(!de.has(N)){if(!w.some(K=>K.id===N))continue;const A=rn.current.get(N);A&&(j.set(N,{orig:A.originalRect,target:A.currentRect,isFixed:A.isFixed}),rn.current.delete(N))}if(j.size>0){Kt(A=>{const K=new Map(A);for(const[Y,O]of j)K.set(Y,O);return K});const N=We(()=>{Kt(A=>{const K=new Map(A);for(const Y of j.keys())K.delete(Y);return K})},250);return()=>clearTimeout(N)}},[He,w]);const lt=l.useRef(null),P=()=>lt.current?.getRootNode()??document;return e.jsxs(e.Fragment,{children:[e.jsxs("div",{ref:lt,className:`${E.rearrangeOverlay} ${o?"":E.light} ${s?E.overlayExiting:""}${r?` ${r}`:""}`,"data-feedback-toolbar":!0,children:[W&&e.jsx("div",{className:E.hoverHighlight,style:{left:W.x,top:W.y,width:W.w,height:W.h}}),De.map(b=>{const j=b.currentRect,N=b.isFixed?j.y:j.y-$e,A=ii,K=v.has(b.id);return e.jsxs("div",{"data-rearrange-section":b.id,className:`${E.sectionOutline} ${K?E.selected:""} ${p||s||z.has(b.id)?E.exiting:""}`,style:{left:j.x,top:N,width:j.width,height:j.height,borderColor:A.border,backgroundColor:A.bg,...dt?{}:{opacity:0,animation:"none",transition:"none"}},onMouseDown:Y=>Xt(Y,b.id),onDoubleClick:()=>Ne(b.id),children:[e.jsx("span",{className:E.sectionLabel,style:{backgroundColor:A.pill},children:b.label}),e.jsx("span",{className:`${E.sectionAnnotation} ${b.note?E.annotationVisible:""}`,children:(b.note&&ne.current.set(b.id,b.note),b.note||ne.current.get(b.id)||"")}),e.jsxs("span",{className:E.sectionDimensions,children:[Math.round(j.width)," × ",Math.round(j.height)]}),e.jsx("div",{className:E.deleteButton,onMouseDown:Y=>Y.stopPropagation(),onClick:()=>H(b.id),children:"✕"}),li.map(Y=>e.jsx("div",{className:`${E.handle} ${E[`handle${Y.charAt(0).toUpperCase()}${Y.slice(1)}`]}`,onMouseDown:O=>Zt(O,b.id,Y)},Y))]},b.id)}),Ue.map(b=>{const j=b.currentRect,N=b.isFixed?j.y:j.y-$e,A=v.has(b.id),K=fe(b),Y=ve(b);if(i&&!A)return null;const _e=!Ze.current.has(b.id);return _e&&Ze.current.add(b.id),e.jsxs("div",{"data-rearrange-section":b.id,className:`${E.ghostOutline} ${A?E.selected:""} ${p||s||z.has(b.id)?E.exiting:""}`,style:{left:j.x,top:N,width:j.width,height:j.height,...dt?{}:{opacity:0,animation:"none",transition:"none"},..._e?{}:{animation:"none"}},onMouseDown:pe=>Xt(pe,b.id),onDoubleClick:()=>Ne(b.id),children:[e.jsx("span",{className:E.sectionLabel,style:{backgroundColor:ii.pill},children:b.label}),e.jsx("span",{className:`${E.sectionAnnotation} ${b.note?E.annotationVisible:""}`,children:(b.note&&ne.current.set(b.id,b.note),b.note||ne.current.get(b.id)||"")}),e.jsxs("span",{className:E.sectionDimensions,children:[Math.round(j.width)," × ",Math.round(j.height)]}),e.jsx("div",{className:E.deleteButton,onMouseDown:pe=>pe.stopPropagation(),onClick:()=>H(b.id),children:"✕"}),li.map(pe=>e.jsx("div",{className:`${E.handle} ${E[`handle${pe.charAt(0).toUpperCase()}${pe.slice(1)}`]}`,onMouseDown:je=>Zt(je,b.id,pe)},pe)),e.jsx("span",{className:E.ghostBadge,children:(()=>{const pe=ht.current.get(b.id);if(K&&Y){const[je,Qe]=pe==="resize"?["Resize","Move"]:["Move","Resize"];return e.jsxs(e.Fragment,{children:["Suggested ",je," ",e.jsxs("span",{className:E.ghostBadgeExtra,children:["& ",Qe]})]})}return`Suggested ${Y?"Resize":"Move"}`})()})]},b.id)})]}),!i&&(()=>{const b=[];for(const j of Ue){const N=kt.get(j.id);b.push({id:j.id,orig:j.originalRect,target:N||j.currentRect,isFixed:j.isFixed,isSelected:v.has(j.id),isExiting:z.has(j.id)})}for(const[j,N]of kt)if(!b.some(A=>A.id===j)){const A=w.find(K=>K.id===j);A&&b.push({id:j,orig:A.originalRect,target:N,isFixed:A.isFixed,isSelected:v.has(j)})}for(const[j,N]of Pt)b.some(A=>A.id===j)||b.push({id:j,orig:N.orig,target:N.target,isFixed:N.isFixed,isSelected:!1,isExiting:!0});return b.length===0?null:e.jsxs("svg",{className:`${E.connectorSvg} ${p||s?E.connectorExiting:""}`,children:[b.map(({id:j,orig:N,target:A,isFixed:K,isSelected:Y,isExiting:O})=>{const _e=N.x+N.width/2,pe=(K?N.y:N.y-$e)+N.height/2,je=A.x+A.width/2,Qe=(K?A.y:A.y-$e)+A.height/2,Ve=je-_e,Te=Qe-pe,Be=Math.sqrt(Ve*Ve+Te*Te);if(Be<2)return null;const Ee=Math.min(1,Be/40),Ke=Math.min(Be*.3,60),et=Be>0?-Te/Be:0,Se=Be>0?Ve/Be:0,ae=(_e+je)/2+et*Ke,qe=(pe+Qe)/2+Se*Ke,_t=kt.has(j),bt=_t||Y?1:.4,J=_t||Y?1:.5;return e.jsxs("g",{className:O?E.connectorExiting:"",children:[e.jsx("path",{className:E.connectorLine,d:`M ${_e} ${pe} Q ${ae} ${qe} ${je} ${Qe}`,fill:"none",stroke:"rgba(59, 130, 246, 0.45)",strokeWidth:"1.5",opacity:bt*Ee}),e.jsx("circle",{className:E.connectorDot,cx:_e,cy:pe,r:4*Ee,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:J*Ee,filter:"url(#connDotShadow)"}),e.jsx("circle",{className:E.connectorDot,cx:je,cy:Qe,r:4*Ee,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:J*Ee,filter:"url(#connDotShadow)"})]},`conn-${j}`)}),e.jsx("defs",{children:e.jsx("filter",{id:"connDotShadow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:e.jsx("feDropShadow",{dx:"0",dy:"0.5",stdDeviation:"1",floodOpacity:"0.15"})})})]})})(),I&&(()=>{const b=w.find(Qe=>Qe.id===I);if(!b)return null;const j=b.currentRect,N=b.isFixed?j.y:j.y-$e,A=j.x+j.width/2,K=N-8,Y=N+j.height+8,O=K>200,_e=Y<window.innerHeight-100,pe=Math.max(160,Math.min(window.innerWidth-160,A));let je;return O?je={left:pe,bottom:window.innerHeight-K}:_e?je={left:pe,top:Y}:je={left:pe,top:Math.max(80,window.innerHeight/2-80)},e.jsx(or,{element:b.label,placeholder:"Add a note about this section",initialValue:b.note??"",submitLabel:we.current?"Save":"Set",onSubmit:Oe,onCancel:U,onDelete:we.current?()=>{Oe("")}:void 0,isExiting:M,lightMode:!o,style:je})})(),Q&&e.jsx("div",{className:E.sizeIndicator,style:{left:Q.x,top:Q.y},"data-feedback-toolbar":!0,children:Q.text}),oe.map((b,j)=>e.jsx("div",{className:E.guideLine,style:b.axis==="x"?{position:"fixed",left:b.pos,top:0,width:1,height:"100vh"}:{position:"fixed",left:0,top:b.pos-$e,width:"100vw",height:1}},`${b.axis}-${b.pos}-${j}`))]})}var qs=new Set(["script","style","noscript","link","meta","br","hr"]);function Qc(){const t=document.querySelector("main")||document.body,n=[],o=Array.from(t.children),s=t!==document.body&&o.length<3?Array.from(document.body.children):o;for(const r of s){if(!(r instanceof HTMLElement)||qs.has(r.tagName.toLowerCase())||r.hasAttribute("data-feedback-toolbar"))continue;const i=window.getComputedStyle(r);if(i.display==="none"||i.visibility==="hidden")continue;const a=r.getBoundingClientRect();if(!(a.height<10||a.width<10)){n.push({label:ns(r),selector:Rn(r),top:a.top,bottom:a.bottom,left:a.left,right:a.right,area:a.width*a.height});for(const h of Array.from(r.children)){if(!(h instanceof HTMLElement)||qs.has(h.tagName.toLowerCase())||h.hasAttribute("data-feedback-toolbar"))continue;const d=window.getComputedStyle(h);if(d.display==="none"||d.visibility==="hidden")continue;const g=h.getBoundingClientRect();g.height<10||g.width<10||n.push({label:ns(h),selector:Rn(h),top:g.top,bottom:g.bottom,left:g.left,right:g.right,area:g.width*g.height})}}}return n}function qc(t){const n=window.scrollY;return t.map(({label:o,selector:s,rect:r})=>{const i=r.y-n;return{label:o,selector:s,top:i,bottom:i+r.height,left:r.x,right:r.x+r.width,area:r.width*r.height}})}function Gc(t){const n=window.scrollY,o=t.y-n,s=t.x;return{top:o,bottom:o+t.height,left:s,right:s+t.width,area:t.width*t.height}}function Gs(t,n){const o=n?qc(n):Qc(),s=Gc(t);let r=null,i=null,a=null,h=null,d=null;for(const v of o){if(Math.abs(v.left-s.left)<2&&Math.abs(v.top-s.top)<2&&Math.abs(v.right-v.left-t.width)<2&&Math.abs(v.bottom-v.top-t.height)<2)continue;v.left<=s.left+2&&v.right>=s.right-2&&v.top<=s.top+2&&v.bottom>=s.bottom-2&&v.area>s.area*1.5&&(!d||v.area<d._area)&&(d={label:v.label,selector:v.selector,_area:v.area});const T=s.right>v.left+5&&s.left<v.right-5,x=s.bottom>v.top+5&&s.top<v.bottom-5;if(T&&v.bottom<=s.top+5){const I=Math.round(s.top-v.bottom);(!r||I<r._dist)&&(r={label:v.label,selector:v.selector,gap:Math.max(0,I),_dist:I})}if(T&&v.top>=s.bottom-5){const I=Math.round(v.top-s.bottom);(!i||I<i._dist)&&(i={label:v.label,selector:v.selector,gap:Math.max(0,I),_dist:I})}if(x&&v.right<=s.left+5){const I=Math.round(s.left-v.right);(!a||I<a._dist)&&(a={label:v.label,selector:v.selector,gap:Math.max(0,I),_dist:I})}if(x&&v.left>=s.right-5){const I=Math.round(v.left-s.right);(!h||I<h._dist)&&(h={label:v.label,selector:v.selector,gap:Math.max(0,I),_dist:I})}}const g=window.innerWidth,f=window.innerHeight,p=Kc(t,g),w=v=>v?{label:v.label,selector:v.selector,gap:v.gap}:null,$=Vc(s,t,g,f,d?{label:d.label,selector:d.selector,_area:d._area}:null,o);return{above:w(r),below:w(i),left:w(a),right:w(h),alignment:p,containedIn:d?{label:d.label,selector:d.selector}:null,outOfBounds:$}}function Vc(t,n,o,s,r,i){const a={};let h=!1;const d=[];if(t.left<-2&&d.push("left"),t.right>o+2&&d.push("right"),t.top<-2&&d.push("top"),t.bottom>s+2&&d.push("bottom"),d.length>0&&(a.viewport=d,h=!0),r){const g=i.find(f=>f.label===r.label&&f.selector===r.selector&&Math.abs(f.area-r._area)<10);if(g){const f=[];t.left<g.left-2&&f.push("left"),t.right>g.right+2&&f.push("right"),t.top<g.top-2&&f.push("top"),t.bottom>g.bottom+2&&f.push("bottom"),f.length>0&&(a.container={label:r.label,edges:f},h=!0)}}return h?a:null}function Kc(t,n){if(t.width/n>.85)return"full-width";const s=t.x+t.width/2,r=n/2,i=s-r,a=n*.08;return Math.abs(i)<a?"center":i<0?"left":"right"}function Xi(t){switch(t){case"full-width":return"full-width";case"center":return"centered";case"left":return"left-aligned";case"right":return"right-aligned"}}function Ui(t,n={}){const o=[];t.above&&o.push(`Below \`${t.above.label}\`${t.above.gap>0?` (${t.above.gap}px gap)`:""}`),t.below&&o.push(`Above \`${t.below.label}\`${t.below.gap>0?` (${t.below.gap}px gap)`:""}`),n.includeLeftRight&&(t.left&&o.push(`Right of \`${t.left.label}\`${t.left.gap>0?` (${t.left.gap}px gap)`:""}`),t.right&&o.push(`Left of \`${t.right.label}\`${t.right.gap>0?` (${t.right.gap}px gap)`:""}`));const s=Xi(t.alignment);return t.containedIn?o.push(`${s.charAt(0).toUpperCase()+s.slice(1)} in \`${t.containedIn.label}\``):o.push(`${s.charAt(0).toUpperCase()+s.slice(1)} in page`),n.includePixelRef&&n.pixelRef&&o.push(`Pixel ref: \`${n.pixelRef}\``),t.outOfBounds&&(t.outOfBounds.viewport&&o.push(`**Outside viewport** (${t.outOfBounds.viewport.join(", ")} edge${t.outOfBounds.viewport.length>1?"s":""})`),t.outOfBounds.container&&o.push(`**Outside \`${t.outOfBounds.container.label}\`** (${t.outOfBounds.container.edges.join(", ")} edge${t.outOfBounds.container.edges.length>1?"s":""})`)),o}function Jc(t,n,o){const s=[];t.above&&s.push(`below \`${t.above.label}\``),t.below&&s.push(`above \`${t.below.label}\``),t.left&&s.push(`right of \`${t.left.label}\``),t.right&&s.push(`left of \`${t.right.label}\``),t.containedIn&&s.push(`inside \`${t.containedIn.label}\``),s.push(Xi(t.alignment)),t.outOfBounds?.viewport&&s.push(`**outside viewport** (${t.outOfBounds.viewport.join(", ")})`),t.outOfBounds?.container&&s.push(`**outside \`${t.outOfBounds.container.label}\`** (${t.outOfBounds.container.edges.join(", ")})`);const r=o?`, ${Math.round(o.width)}×${Math.round(o.height)}px`:"";return`at (${Math.round(n.x)}, ${Math.round(n.y)})${r}: ${s.join(", ")}`}var _i=15;function ui(t){if(t.length<2)return[];const n=[],o=new Set;for(let s=0;s<t.length;s++){if(o.has(s))continue;const r=[s];for(let i=s+1;i<t.length;i++)o.has(i)||Math.abs(t[s].rect.y-t[i].rect.y)<_i&&r.push(i);if(r.length>=2){const i=r.map(d=>t[d]);i.sort((d,g)=>d.rect.x-g.rect.x);const a=[];for(let d=0;d<i.length-1;d++)a.push(Math.round(i[d+1].rect.x-(i[d].rect.x+i[d].rect.width)));const h=Math.round(i.reduce((d,g)=>d+g.rect.y,0)/i.length);n.push({labels:i.map(d=>d.label),type:"row",sharedEdge:h,gaps:a,avgGap:a.length?Math.round(a.reduce((d,g)=>d+g,0)/a.length):0}),r.forEach(d=>o.add(d))}}for(let s=0;s<t.length;s++){if(o.has(s))continue;const r=[s];for(let i=s+1;i<t.length;i++)o.has(i)||Math.abs(t[s].rect.x-t[i].rect.x)<_i&&r.push(i);if(r.length>=2){const i=r.map(d=>t[d]);i.sort((d,g)=>d.rect.y-g.rect.y);const a=[];for(let d=0;d<i.length-1;d++)a.push(Math.round(i[d+1].rect.y-(i[d].rect.y+i[d].rect.height)));const h=Math.round(i.reduce((d,g)=>d+g.rect.x,0)/i.length);n.push({labels:i.map(d=>d.label),type:"column",sharedEdge:h,gaps:a,avgGap:a.length?Math.round(a.reduce((d,g)=>d+g,0)/a.length):0}),r.forEach(d=>o.add(d))}}return n}function Zc(t){if(t.length<2)return[];const n=ui(t.map(a=>({label:a.label,rect:a.originalRect}))),o=ui(t.map(a=>({label:a.label,rect:a.currentRect}))),s=[],r=new Set;for(const a of n){const h=new Set(a.labels);let d=null,g=0;for(const f of o){const p=f.labels.filter(w=>h.has(w)).length;p>=2&&p>g&&(d=f,g=p)}if(d){const f=d.labels.filter(w=>h.has(w)),p=f.join(", ");if(d.type!==a.type){const w=a.type==="row"?"y":"x",$=d.type==="row"?"y":"x";s.push(`**${p}**: ${a.type} (${w}≈${a.sharedEdge}, ${a.avgGap}px gaps) → ${d.type} (${$}≈${d.sharedEdge}, ${d.avgGap}px gaps)`)}else if(Math.abs(a.sharedEdge-d.sharedEdge)>20||Math.abs(a.avgGap-d.avgGap)>5){const w=a.type==="row"?"y":"x",$=Math.abs(a.sharedEdge-d.sharedEdge)>20?` ${w}: ${a.sharedEdge} → ${d.sharedEdge}`:"",v=Math.abs(a.avgGap-d.avgGap)>5?` gaps: ${a.avgGap}px → ${d.avgGap}px`:"";s.push(`**${p}**: ${a.type} shifted —${$}${v}`)}f.forEach(w=>r.add(w))}else{const f=a.labels.join(", "),p=a.type==="row"?"y":"x";s.push(`**${f}**: ${a.type} (${p}≈${a.sharedEdge}) dissolved`),a.labels.forEach(w=>r.add(w))}}for(const a of o){if(a.labels.every(g=>r.has(g))||a.labels.filter(g=>!r.has(g)).length<2)continue;if(!n.some(g=>g.labels.filter(p=>a.labels.includes(p)).length>=2)){const g=a.type==="row"?"y":"x";s.push(`**${a.labels.join(", ")}**: new ${a.type} (${g}≈${a.sharedEdge}, ${a.avgGap}px gaps)`),a.labels.forEach(f=>r.add(f))}}const i=t.filter(a=>!r.has(a.label));if(i.length>=2){const a={};for(const h of i){const d=Math.round(h.currentRect.x/5)*5;(a[d]??(a[d]=[])).push(h.label)}for(const[h,d]of Object.entries(a))d.length>=2&&s.push(`**${d.join(", ")}**: shared left edge at x≈${h}`)}return s}function Qi(t){if(typeof document>"u")return{viewport:t,contentArea:null};const n=[],o=new Set,s=h=>{o.has(h)||h instanceof HTMLElement&&(h.hasAttribute("data-feedback-toolbar")||qs.has(h.tagName.toLowerCase())||(o.add(h),n.push(h)))},r=document.querySelector("main");r&&s(r);const i=document.querySelector("[role='main']");i&&s(i);for(const h of Array.from(document.body.children))if(s(h),h.children){for(const d of Array.from(h.children))if(s(d),d.children)for(const g of Array.from(d.children))s(g)}let a=null;for(const h of n){const d=h.getBoundingClientRect();if(d.height<50)continue;const g=getComputedStyle(h);if(g.maxWidth&&g.maxWidth!=="none"&&g.maxWidth!=="0px"){(!a||d.width<a.rect.width)&&(a={el:h,rect:d});continue}!a&&d.width<t.width-20&&d.width>100&&(a={el:h,rect:d})}if(a){const{el:h,rect:d}=a;return{viewport:t,contentArea:{width:Math.round(d.width),left:Math.round(d.left),right:Math.round(d.right),centerX:Math.round(d.left+d.width/2),selector:Rn(h)}}}return{viewport:t,contentArea:null}}function ed(t){if(typeof document>"u")return null;const n=document.querySelector(t);if(!n?.parentElement)return null;const o=getComputedStyle(n.parentElement),s={parentDisplay:o.display,parentSelector:Rn(n.parentElement)};return o.display.includes("flex")&&(s.flexDirection=o.flexDirection),o.display.includes("grid")&&o.gridTemplateColumns!=="none"&&(s.gridCols=o.gridTemplateColumns),o.gap&&o.gap!=="normal"&&o.gap!=="0px"&&(s.gap=o.gap),s}function qi(t,n){const o=n.contentArea,s=o?o.width:n.viewport.width,r=o?o.left:0,i=o?o.centerX:Math.round(n.viewport.width/2),a=Math.round(t.x-r),h=Math.round(r+s-(t.x+t.width)),d=(t.width/s*100).toFixed(1),g=t.x+t.width/2,f=Math.abs(g-i)<20,p=t.width/s>.95,w=[];return p?w.push("`width: 100%` of container"):w.push(`left \`${a}px\` in container, right \`${h}px\`, width \`${d}%\` (\`${Math.round(t.width)}px\`)`),f&&!p&&w.push("centered — `margin-inline: auto`"),w.join(" — ")}function Gi(t){const{viewport:n,contentArea:o}=t;let s=`### Reference Frame
`;if(s+=`- Viewport: \`${n.width}×${n.height}px\`
`,o){const r=o;s+=`- Content area: \`${r.width}px\` wide, left edge at \`x=${r.left}\`, right at \`x=${r.right}\` (\`${r.selector}\`)
`,s+=`- Pixel → CSS translation:
`,s+=`  - **Horizontal position in container**: \`element.x - ${r.left}\` → use as \`margin-left\` or \`left\`
`,s+=`  - **Width as % of container**: \`element.width / ${r.width} × 100\` → use as \`width: X%\`
`,s+="  - **Vertical gap between elements**: `nextElement.y - (prevElement.y + prevElement.height)` → use as `margin-top` or `gap`\n",s+=`  - **Centered**: if \`|element.centerX - ${r.centerX}| < 20px\` → use \`margin-inline: auto\`
`}else s+=`- No distinct content container — elements positioned relative to full viewport
`,s+=`- Pixel → CSS translation:
`,s+=`  - **Width as % of viewport**: \`element.width / ${n.width} × 100\` → use as \`width: X%\`
`,s+=`  - **Centered**: if \`|(element.x + element.width/2) - ${Math.round(n.width/2)}| < 20px\` → use \`margin-inline: auto\`
`;return s+=`
`,s}function td(t){const n=ed(t);if(!n)return null;let o=`\`${n.parentDisplay}\``;return n.flexDirection&&(o+=`, flex-direction: \`${n.flexDirection}\``),n.gridCols&&(o+=`, grid-template-columns: \`${n.gridCols}\``),n.gap&&(o+=`, gap: \`${n.gap}\``),`Parent: ${o} (\`${n.parentSelector}\`)`}function hi(t,n,o,s="standard"){if(t.length===0)return"";const r=[...t].sort((x,I)=>Math.abs(x.y-I.y)<20?x.x-I.x:x.y-I.y);let i="";if(o?.blankCanvas?(i+=`## Wireframe: New Page

`,o.wireframePurpose&&(i+=`> **Purpose:** ${o.wireframePurpose}
>
`),i+=`> ${t.length} component${t.length!==1?"s":""} placed — this is a standalone wireframe, not related to the current page.
>
> This wireframe is a rough sketch for exploring ideas.

`):i+=`## Design Layout

> ${t.length} component${t.length!==1?"s":""} placed

`,s==="compact")return i+=`### Components
`,r.forEach((x,I)=>{const G=Ht[x.type]?.label||x.type;i+=`${I+1}. **${G}** — \`${Math.round(x.width)}×${Math.round(x.height)}px\` at \`(${Math.round(x.x)}, ${Math.round(x.y)})\`
`,x.text&&(i+=`   - Note: "${x.text}"
`)}),i;const a=Qi(n);i+=Gi(a),i+=`### Components
`,r.forEach((x,I)=>{const G=Ht[x.type]?.label||x.type,M={x:x.x,y:x.y,width:x.width,height:x.height};i+=`${I+1}. **${G}** — \`${Math.round(x.width)}×${Math.round(x.height)}px\` at \`(${Math.round(x.x)}, ${Math.round(x.y)})\`
`,x.text&&(i+=`   - Note: "${x.text}"
`);const B=Gs(M),Ne=Ui(B,{includeLeftRight:s==="detailed"||s==="forensic"});for(const Oe of Ne)i+=`   - ${Oe}
`;const U=qi(M,a);U&&(i+=`   - CSS: ${U}
`)}),i+=`
### Layout Analysis
`;const h=[];for(const x of r){const I=h.find(G=>Math.abs(G.y-x.y)<30);I?I.items.push(x):h.push({y:x.y,items:[x]})}if(h.sort((x,I)=>x.y-I.y),h.forEach((x,I)=>{x.items.sort((M,B)=>M.x-B.x);const G=x.items.map(M=>Ht[M.type]?.label||M.type);if(x.items.length===1){const B=x.items[0].width>n.width*.8;i+=`- Row ${I+1} (y≈${Math.round(x.y)}): ${G[0]}${B?" — full width":""}
`}else i+=`- Row ${I+1} (y≈${Math.round(x.y)}): ${G.join(" | ")} — ${x.items.length} items side by side
`}),s==="detailed"||s==="forensic"){i+=`
### Spacing & Gaps
`;for(let x=0;x<r.length-1;x++){const I=r[x],G=r[x+1],M=Ht[I.type]?.label||I.type,B=Ht[G.type]?.label||G.type,we=Math.round(G.y-(I.y+I.height)),Ne=Math.round(G.x-(I.x+I.width));Math.abs(I.y-G.y)<30?i+=`- ${M} → ${B}: \`${Ne}px\` horizontal gap
`:i+=`- ${M} → ${B}: \`${we}px\` vertical gap
`}if(s==="forensic"&&r.length>2){i+=`
### All Pairwise Gaps
`;for(let x=0;x<r.length;x++)for(let I=x+1;I<r.length;I++){const G=r[x],M=r[I],B=Ht[G.type]?.label||G.type,we=Ht[M.type]?.label||M.type,Ne=Math.round(M.y-(G.y+G.height)),U=Math.round(M.x-(G.x+G.width));i+=`- ${B} ↔ ${we}: h=\`${U}px\` v=\`${Ne}px\`
`}}s==="forensic"&&(i+=`
### Z-Order (placement order)
`,t.forEach((x,I)=>{const G=Ht[x.type]?.label||x.type;i+=`${I}. ${G} at \`(${Math.round(x.x)}, ${Math.round(x.y)})\`
`}))}i+=`
### Suggested Implementation
`;const d=r.some(x=>x.type==="navigation"),g=r.some(x=>x.type==="hero"),f=r.some(x=>x.type==="sidebar"),p=r.some(x=>x.type==="footer"),w=r.filter(x=>x.type==="card"),$=r.filter(x=>x.type==="form"),v=r.filter(x=>x.type==="table"),T=r.filter(x=>x.type==="modal");if(d&&(i+=`- Top navigation bar with logo + nav links + CTA
`),g&&(i+=`- Hero section with heading, subtext, and call-to-action
`),f&&(i+=`- Sidebar layout — use CSS Grid with sidebar + main content area
`),w.length>1?i+=`- ${w.length}-column card grid — use CSS Grid or Flexbox
`:w.length===1&&(i+=`- Card component with image + content area
`),$.length>0&&(i+=`- ${$.length} form${$.length>1?"s":""} — add proper labels, validation, and submit handling
`),v.length>0&&(i+=`- Data table — consider sortable columns and pagination
`),T.length>0&&(i+=`- Modal dialog — add overlay backdrop and focus trapping
`),p&&(i+=`- Multi-column footer with links
`),s==="detailed"||s==="forensic"){if(i+=`
### CSS Suggestions
`,f){const x=r.find(I=>I.type==="sidebar");i+=`- \`display: grid; grid-template-columns: ${Math.round(x.width)}px 1fr;\`
`}if(w.length>1){const x=Math.round(w[0].width);i+=`- \`display: grid; grid-template-columns: repeat(${w.length}, ${x}px); gap: 16px;\`
`}d&&(i+="- Navigation: `position: sticky; top: 0; z-index: 50;`\n")}return i}function mi(t,n="standard",o){const{sections:s}=t,r=[];for(const f of s){const p=f.originalRect,w=f.currentRect,$=Math.abs(p.x-w.x)>1||Math.abs(p.y-w.y)>1,v=Math.abs(p.width-w.width)>1||Math.abs(p.height-w.height)>1,T=!!f.note;if(!$&&!v&&!T){n==="forensic"&&r.push({section:f,posMoved:!1,sizeChanged:!1});continue}r.push({section:f,posMoved:$,sizeChanged:v})}if(r.length===0||n!=="forensic"&&r.every(f=>!f.posMoved&&!f.sizeChanged&&!f.section.note))return"";let i=`## Suggested Layout Changes

`;const a=o?o.width:typeof window<"u"?window.innerWidth:0,h=o?o.height:typeof window<"u"?window.innerHeight:0,d=Qi({width:a,height:h});n!=="compact"&&(i+=Gi(d)),n==="forensic"&&(i+=`> Detected at: \`${new Date(t.detectedAt).toISOString()}\`
`,i+=`> Total sections: ${s.length}

`);const g=f=>s.map(p=>({label:p.label,selector:p.selector,rect:f==="original"?p.originalRect:p.currentRect}));i+=`**Changes:**
`;for(const{section:f,posMoved:p,sizeChanged:w}of r){const $=f.originalRect,v=f.currentRect;if(!p&&!w){f.note?(i+=`- **${f.label}** — note only
`,i+=`  - Note: "${f.note}"
`):i+=`- ${f.label} — unchanged at (${Math.round(v.x)}, ${Math.round(v.y)}) ${Math.round(v.width)}×${Math.round(v.height)}px
`;continue}if(n==="compact"){p&&w?i+=`- Suggested: move **${f.label}** to (${Math.round(v.x)}, ${Math.round(v.y)}) ${Math.round(v.width)}×${Math.round(v.height)}px
`:p?i+=`- Suggested: move **${f.label}** to (${Math.round(v.x)}, ${Math.round(v.y)})
`:i+=`- Suggested: resize **${f.label}** to ${Math.round(v.width)}×${Math.round(v.height)}px
`,f.note&&(i+=`  - Note: "${f.note}"
`);continue}if(p&&w?i+=`- Suggested: move and resize **${f.label}**
`:p?i+=`- Suggested: move **${f.label}**
`:i+=`- Suggested: resize **${f.label}** from ${Math.round($.width)}×${Math.round($.height)}px to ${Math.round(v.width)}×${Math.round(v.height)}px
`,f.note&&(i+=`  - Note: "${f.note}"
`),p){const x=Gs($,g("original")),I=Gs(v,g("current")),G=w?{width:$.width,height:$.height}:void 0;i+=`  - Currently ${Jc(x,{x:$.x,y:$.y},G)}
`;const M=w?{width:v.width,height:v.height}:void 0,B=`at (${Math.round(v.x)}, ${Math.round(v.y)})`,we=M?`, ${Math.round(M.width)}×${Math.round(M.height)}px`:"",U=Ui(I,{includeLeftRight:n==="detailed"||n==="forensic"});if(U.length>0){i+=`  - Suggested position ${B}${we}: ${U[0]}
`;for(let z=1;z<U.length;z++)i+=`    ${U[z]}
`}else i+=`  - Suggested position ${B}${we}
`;const Oe=qi(v,d);Oe&&(i+=`  - CSS: ${Oe}
`)}const T=td(f.selector);if(T&&(i+=`  - ${T}
`),i+=`  - Selector: \`${f.selector}\`
`,n==="detailed"||n==="forensic"){const x=f.className?`${f.tagName}.${f.className.split(" ")[0]}`:f.tagName;x!==f.selector&&(i+=`  - Element: \`${x}\`
`),f.role&&(i+=`  - Role: \`${f.role}\`
`),n==="forensic"&&f.textSnippet&&(i+=`  - Text: "${f.textSnippet}"
`)}n==="forensic"&&(i+=`  - Original rect: \`{ x: ${Math.round($.x)}, y: ${Math.round($.y)}, w: ${Math.round($.width)}, h: ${Math.round($.height)} }\`
`,i+=`  - Current rect: \`{ x: ${Math.round(v.x)}, y: ${Math.round(v.y)}, w: ${Math.round(v.width)}, h: ${Math.round(v.height)} }\`
`)}if(n!=="compact"){const f=r.filter(w=>w.posMoved).map(w=>({label:w.section.label,originalRect:w.section.originalRect,currentRect:w.section.currentRect})),p=Zc(f);if(p.length>0){i+=`
### Layout Summary
`;for(const w of p)i+=`- ${w}
`}}if(n!=="compact"&&s.length>1){i+=`
### All Sections (current positions)
`;const f=[...s].sort((p,w)=>Math.abs(p.currentRect.y-w.currentRect.y)<20?p.currentRect.x-w.currentRect.x:p.currentRect.y-w.currentRect.y);for(const p of f){const w=p.currentRect,$=Math.abs(w.x-p.originalRect.x)>1||Math.abs(w.y-p.originalRect.y)>1||Math.abs(w.width-p.originalRect.width)>1||Math.abs(w.height-p.originalRect.height)>1;i+=`- ${p.label}: \`${Math.round(w.width)}×${Math.round(w.height)}px\` at \`(${Math.round(w.x)}, ${Math.round(w.y)})\`${$?" ← suggested":""}
`}}return i}var Vs="feedback-annotations-",Vi=7;function sr(t){return`${Vs}${t}`}function _n(t){if(typeof window>"u")return[];try{const n=localStorage.getItem(sr(t));if(!n)return[];const o=JSON.parse(n),s=Date.now()-Vi*24*60*60*1e3;return o.filter(r=>!r.timestamp||r.timestamp>s)}catch{return[]}}function Ki(t,n){if(!(typeof window>"u"))try{localStorage.setItem(sr(t),JSON.stringify(n))}catch{}}function nd(){const t=new Map;if(typeof window>"u")return t;try{const n=Date.now()-Vi*24*60*60*1e3;for(let o=0;o<localStorage.length;o++){const s=localStorage.key(o);if(s?.startsWith(Vs)){const r=s.slice(Vs.length),i=localStorage.getItem(s);if(i){const h=JSON.parse(i).filter(d=>!d.timestamp||d.timestamp>n);h.length>0&&t.set(r,h)}}}}catch{}return t}function Bs(t,n,o){const s=n.map(r=>({...r,_syncedTo:o}));Ki(t,s)}var rr="agentation-design-";function od(t){if(typeof window>"u")return[];try{const n=localStorage.getItem(`${rr}${t}`);return n?JSON.parse(n):[]}catch{return[]}}function sd(t,n){if(!(typeof window>"u"))try{localStorage.setItem(`${rr}${t}`,JSON.stringify(n))}catch{}}function rd(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${rr}${t}`)}catch{}}var ir="agentation-rearrange-";function id(t){if(typeof window>"u")return null;try{const n=localStorage.getItem(`${ir}${t}`);return n?JSON.parse(n):null}catch{return null}}function ld(t,n){if(!(typeof window>"u"))try{localStorage.setItem(`${ir}${t}`,JSON.stringify(n))}catch{}}function ad(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${ir}${t}`)}catch{}}var lr="agentation-wireframe-";function cd(t){if(typeof window>"u")return null;try{const n=localStorage.getItem(`${lr}${t}`);return n?JSON.parse(n):null}catch{return null}}function pi(t,n){if(!(typeof window>"u"))try{localStorage.setItem(`${lr}${t}`,JSON.stringify(n))}catch{}}function Qo(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${lr}${t}`)}catch{}}var Ji="agentation-session-";function ar(t){return`${Ji}${t}`}function dd(t){if(typeof window>"u")return null;try{return localStorage.getItem(ar(t))}catch{return null}}function Ps(t,n){if(!(typeof window>"u"))try{localStorage.setItem(ar(t),n)}catch{}}function _d(t){if(!(typeof window>"u"))try{localStorage.removeItem(ar(t))}catch{}}var Zi=`${Ji}toolbar-hidden`;function ud(){if(typeof window>"u")return!1;try{return sessionStorage.getItem(Zi)==="1"}catch{return!1}}function hd(t){if(!(typeof window>"u"))try{t&&sessionStorage.setItem(Zi,"1")}catch{}}async function As(t,n){const o=await fetch(`${t}/sessions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})});if(!o.ok)throw new Error(`Failed to create session: ${o.status}`);return o.json()}async function fi(t,n){const o=await fetch(`${t}/sessions/${n}`);if(!o.ok)throw new Error(`Failed to get session: ${o.status}`);return o.json()}async function gi(t,n,o){!o.elementPath&&(o.element==="body"||o.element==="html")&&(o={...o,elementPath:o.element});const s=await fetch(`${t}/sessions/${n}/annotations`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});if(!s.ok)throw new Error(`Failed to sync annotation: ${s.status}`);return s.json()}async function Os(t,n,o){const s=await fetch(`${t}/annotations/${n}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});if(!s.ok)throw new Error(`Failed to update annotation: ${s.status}`);return s.json()}async function qo(t,n){const o=await fetch(`${t}/annotations/${n}`,{method:"DELETE"});if(!o.ok)throw new Error(`Failed to delete annotation: ${o.status}`)}var Xe={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16,IncompleteClassComponent:17,DehydratedFragment:18,SuspenseListComponent:19,ScopeComponent:21,OffscreenComponent:22,LegacyHiddenComponent:23,CacheComponent:24,TracingMarkerComponent:25,HostHoistable:26,HostSingleton:27,IncompleteFunctionComponent:28,Throw:29,ViewTransitionComponent:30,ActivityComponent:31},yi=new Set(["Component","PureComponent","Fragment","Suspense","Profiler","StrictMode","Routes","Route","Outlet","Root","ErrorBoundaryHandler","HotReload","Hot"]),xi=[/Boundary$/,/BoundaryHandler$/,/Provider$/,/Consumer$/,/^(Inner|Outer)/,/Router$/,/^Client(Page|Segment|Root)/,/^Segment(ViewNode|Node)$/,/^LayoutSegment/,/^Server(Root|Component|Render)/,/^RSC/,/Context$/,/^Hot(Reload)?$/,/^(Dev|React)(Overlay|Tools|Root)/,/Overlay$/,/Handler$/,/^With[A-Z]/,/Wrapper$/,/^Root$/],md=[/Page$/,/View$/,/Screen$/,/Section$/,/Card$/,/List$/,/Item$/,/Form$/,/Modal$/,/Dialog$/,/Button$/,/Nav$/,/Header$/,/Footer$/,/Layout$/,/Panel$/,/Tab$/,/Menu$/];function pd(t){const n=t?.mode??"filtered";let o=yi;if(t?.skipExact){const s=t.skipExact instanceof Set?t.skipExact:new Set(t.skipExact);o=new Set([...yi,...s])}return{maxComponents:t?.maxComponents??6,maxDepth:t?.maxDepth??30,mode:n,skipExact:o,skipPatterns:t?.skipPatterns?[...xi,...t.skipPatterns]:xi,userPatterns:t?.userPatterns??md,filter:t?.filter}}function fd(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/([A-Z])([A-Z][a-z])/g,"$1-$2").toLowerCase()}function gd(t,n=10){const o=new Set;let s=t,r=0;for(;s&&r<n;)s.className&&typeof s.className=="string"&&s.className.split(/\s+/).forEach(i=>{if(i.length>1){const a=i.replace(/[_][a-zA-Z0-9]{5,}.*$/,"").toLowerCase();a.length>1&&o.add(a)}}),s=s.parentElement,r++;return o}function yd(t,n){const o=fd(t);for(const s of n){if(s===o)return!0;const r=o.split("-").filter(a=>a.length>2),i=s.split("-").filter(a=>a.length>2);for(const a of r)for(const h of i)if(a===h||a.includes(h)||h.includes(a))return!0}return!1}function xd(t,n,o,s){if(o.filter)return o.filter(t,n);switch(o.mode){case"all":return!0;case"filtered":return!(o.skipExact.has(t)||o.skipPatterns.some(r=>r.test(t)));case"smart":return o.skipExact.has(t)||o.skipPatterns.some(r=>r.test(t))?!1:!!(s&&yd(t,s)||o.userPatterns.some(r=>r.test(t)));default:return!0}}var Fn=null,bd=new WeakMap;function zs(t){return Object.keys(t).some(n=>n.startsWith("__reactFiber$")||n.startsWith("__reactInternalInstance$")||n.startsWith("__reactProps$"))}function wd(){if(Fn!==null)return Fn;if(typeof document>"u")return!1;if(document.body&&zs(document.body))return Fn=!0,!0;const t=["#root","#app","#__next","[data-reactroot]"];for(const n of t){const o=document.querySelector(n);if(o&&zs(o))return Fn=!0,!0}if(document.body){for(const n of document.body.children)if(zs(n))return Fn=!0,!0}return Fn=!1,!1}var co={map:bd};function vd(t){return Object.keys(t).find(o=>o.startsWith("__reactFiber$")||o.startsWith("__reactInternalInstance$"))||null}function kd(t){const n=vd(t);return n?t[n]:null}function Mn(t){return t?t.displayName?t.displayName:t.name?t.name:null:null}function jd(t){const{tag:n,type:o,elementType:s}=t;if(n===Xe.HostComponent||n===Xe.HostText||n===Xe.HostHoistable||n===Xe.HostSingleton||n===Xe.Fragment||n===Xe.Mode||n===Xe.Profiler||n===Xe.DehydratedFragment||n===Xe.HostRoot||n===Xe.HostPortal||n===Xe.ScopeComponent||n===Xe.OffscreenComponent||n===Xe.LegacyHiddenComponent||n===Xe.CacheComponent||n===Xe.TracingMarkerComponent||n===Xe.Throw||n===Xe.ViewTransitionComponent||n===Xe.ActivityComponent)return null;if(n===Xe.ForwardRef){const r=s;if(r?.render){const i=Mn(r.render);if(i)return i}return r?.displayName?r.displayName:Mn(o)}if(n===Xe.MemoComponent||n===Xe.SimpleMemoComponent){const r=s;if(r?.type){const i=Mn(r.type);if(i)return i}return r?.displayName?r.displayName:Mn(o)}if(n===Xe.ContextProvider){const r=o;return r?._context?.displayName?`${r._context.displayName}.Provider`:null}if(n===Xe.ContextConsumer){const r=o;return r?.displayName?`${r.displayName}.Consumer`:null}if(n===Xe.LazyComponent){const r=s;return r?._status===1&&r._result?Mn(r._result):null}return n===Xe.SuspenseComponent||n===Xe.SuspenseListComponent?null:n===Xe.IncompleteClassComponent||n===Xe.IncompleteFunctionComponent||n===Xe.FunctionComponent||n===Xe.ClassComponent||n===Xe.IndeterminateComponent?Mn(o):null}function Sd(t){return t.length<=2||t.length<=3&&t===t.toLowerCase()}function Cd(t,n){const o=pd(n),s=o.mode==="all";if(s){const d=co.map.get(t);if(d!==void 0)return d}if(!wd()){const d={path:null,components:[]};return s&&co.map.set(t,d),d}const r=o.mode==="smart"?gd(t):void 0,i=[];try{let d=kd(t),g=0;for(;d&&g<o.maxDepth&&i.length<o.maxComponents;){const f=jd(d);f&&!Sd(f)&&xd(f,g,o,r)&&i.push(f),d=d.return,g++}}catch{const d={path:null,components:[]};return s&&co.map.set(t,d),d}if(i.length===0){const d={path:null,components:[]};return s&&co.map.set(t,d),d}const h={path:i.slice().reverse().map(d=>`<${d}>`).join(" "),components:i};return s&&co.map.set(t,h),h}var _o={FunctionComponent:0,IndeterminateComponent:2,ForwardRef:11,MemoComponent:14,SimpleMemoComponent:15};function Md(t){if(!t||typeof t!="object")return null;const n=Object.keys(t),o=n.find(i=>i.startsWith("__reactFiber$"));if(o)return t[o]||null;const s=n.find(i=>i.startsWith("__reactInternalInstance$"));if(s)return t[s]||null;const r=n.find(i=>{if(!i.startsWith("__react"))return!1;const a=t[i];return a&&typeof a=="object"&&"_debugSource"in a});return r&&t[r]||null}function go(t){if(!t.type||typeof t.type=="string")return null;if(typeof t.type=="object"||typeof t.type=="function"){const n=t.type;if(n.displayName)return n.displayName;if(n.name)return n.name}return null}function $d(t,n=50){let o=t,s=0;for(;o&&s<n;){if(o._debugSource)return{source:o._debugSource,componentName:go(o)};if(o._debugOwner?._debugSource)return{source:o._debugOwner._debugSource,componentName:go(o._debugOwner)};o=o.return,s++}return null}function Rd(t){let n=t,o=0;const s=50;for(;n&&o<s;){const r=n,i=["_debugSource","__source","_source","debugSource"];for(const a of i){const h=r[a];if(h&&typeof h=="object"&&"fileName"in h)return{source:h,componentName:go(n)}}if(n.memoizedProps){const a=n.memoizedProps;if(a.__source&&typeof a.__source=="object"){const h=a.__source;if(h.fileName&&h.lineNumber)return{source:{fileName:h.fileName,lineNumber:h.lineNumber,columnNumber:h.columnNumber},componentName:go(n)}}}n=n.return,o++}return null}var Go=new Map;function Ed(t){const n=t.tag,o=t.type,s=t.elementType;if(typeof o=="string"||o==null||typeof o=="function"&&o.prototype?.isReactComponent)return null;if((n===_o.FunctionComponent||n===_o.IndeterminateComponent)&&typeof o=="function")return o;if(n===_o.ForwardRef&&s){const r=s.render;if(typeof r=="function")return r}if((n===_o.MemoComponent||n===_o.SimpleMemoComponent)&&s){const r=s.type;if(typeof r=="function")return r}return typeof o=="function"?o:null}function Id(){const t=Rl,n=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;if(n&&"H"in n)return{get:()=>n.H,set:s=>{n.H=s}};const o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;if(o){const s=o.ReactCurrentDispatcher;if(s&&"current"in s)return{get:()=>s.current,set:r=>{s.current=r}}}return null}function Nd(t,n){const o=t.split(`
`),s=[/source-location/,/\/dist\/index\./,/node_modules\//,/react-dom/,/react\.development/,/react\.production/,/chunk-[A-Z0-9]+/i,/\/_next\/static\/chunks\//,/\/\.vite\/deps\//,/\/_astro\//,/\/assets\/[^\s/]+[-.][\w-]{8,}\.m?js(?:[?:]|$)/,/react-stack-bottom-frame/,/react-reconciler/,/scheduler/,/<anonymous>/],r=/^\s*at\s+(?:.*?\s+\()?(.+?):(\d+):(\d+)\)?$/,i=/^[^@]*@(.+?):(\d+):(\d+)$/;for(const a of o){const h=a.trim();if(!h||s.some(g=>g.test(h)))continue;if(n){const g=n.replace(/^bound /,"").replace(/[.*+?^${}()|[\]\\]/g,"\\$&");if(!new RegExp(`(?:at (?:Object\\.)?|^)${g}(?: \\(|@| \\[)`).test(h))continue}const d=r.exec(h)||i.exec(h);if(d)return{fileName:d[1],line:parseInt(d[2],10),column:parseInt(d[3],10)}}return null}function Ld(t){let n=t;return n=n.replace(/[?#].*$/,""),n=n.replace(/^turbopack:\/\/\/\[project\]\//,""),n=n.replace(/^webpack-internal:\/\/\/\.\//,""),n=n.replace(/^webpack-internal:\/\/\//,""),n=n.replace(/^webpack:\/\/\/\.\//,""),n=n.replace(/^webpack:\/\/\//,""),n=n.replace(/^turbopack:\/\/\//,""),n=n.replace(/^https?:\/\/[^/]+\//,""),n=n.replace(/^file:\/\/\//,"/"),n=n.replace(/^\([^)]+\)\/\.\//,""),n=n.replace(/^\.\//,""),n}function Td(t){const n=Ed(t);if(!n)return null;if(Go.has(n))return Go.get(n);const o=Id();if(!o)return Go.set(n,null),null;const s=o.get();let r=null;try{const i=new Proxy({},{get(){throw new Error("probe")}});o.set(i);try{n({})}catch(a){if(a instanceof Error&&a.message==="probe"&&a.stack){const h=Nd(a.stack,n.name);h&&(r={fileName:Ld(h.fileName),lineNumber:h.line,columnNumber:h.column,componentName:go(t)||void 0})}}}finally{o.set(s)}return Go.set(n,r),r}function Dd(t,n=15){let o=t,s=0;for(;o&&s<n;){const r=Td(o);if(r)return r;o=o.return,s++}return null}function Ks(t){const n=Md(t);if(!n)return{found:!1,reason:"no-fiber",isReactApp:!1,isProduction:!1};let o=$d(n);if(o||(o=Rd(n)),o?.source)return{found:!0,source:{fileName:o.source.fileName,lineNumber:o.source.lineNumber,columnNumber:o.source.columnNumber,componentName:o.componentName||void 0},isReactApp:!0,isProduction:!1};const s=Dd(n);return s?{found:!0,source:s,isReactApp:!0,isProduction:!1}:{found:!1,reason:"no-debug-source",isReactApp:!0,isProduction:!1}}function Bd(t,n="path"){const{fileName:o,lineNumber:s,columnNumber:r}=t;let i=`${o}:${s}`;return r!==void 0&&(i+=`:${r}`),n==="vscode"?`vscode://file${o.startsWith("/")?"":"/"}${i}`:i}function Pd(t,n=10){let o=t,s=0;for(;o&&s<n;){const r=Ks(o);if(r.found)return r;o=o.parentElement,s++}return Ks(t)}var uo=[{value:"compact",label:"Compact"},{value:"standard",label:"Standard"},{value:"detailed",label:"Detailed"},{value:"forensic",label:"Forensic"}];function es(t,n){let o=`## Page Feedback: ${t}
`;const s=n?.replace(/[\r\n\t]+/g," ").trim();return s&&(o+=`**App:** ${s.replace(/[\\`*_\[\]<>]/g,"\\$&")}
`),o}function bi(t,n,o="standard",s={}){if(t.length===0)return"";const r=typeof window<"u"?`${window.innerWidth}×${window.innerHeight}`:"unknown";let i=es(n,s.appName);return o==="forensic"?(i+=`
**Environment:**
`,i+=`- Viewport: ${r}
`,typeof window<"u"&&(i+=`- URL: ${window.location.href}
`,i+=`- User Agent: ${navigator.userAgent}
`,i+=`- Timestamp: ${new Date().toISOString()}
`,i+=`- Device Pixel Ratio: ${window.devicePixelRatio}
`),i+=`
---
`):o!=="compact"&&(i+=`**Viewport:** ${r}
`),i+=`
`,t.forEach((a,h)=>{o==="compact"?(i+=`${h+1}. **${a.element}**${a.sourceFile?` (${a.sourceFile})`:""}: ${a.comment}`,a.selectedText&&(i+=` (re: "${a.selectedText.slice(0,30)}${a.selectedText.length>30?"...":""}")`),i+=`
`):o==="forensic"?(i+=`### ${h+1}. ${a.element}
`,a.isMultiSelect&&a.fullPath&&(i+=`*Forensic data shown for first element of selection*
`),a.fullPath&&(i+=`**Full DOM Path:** ${a.fullPath}
`),a.cssClasses&&(i+=`**CSS Classes:** ${a.cssClasses}
`),a.boundingBox&&(i+=`**Position:** x:${Math.round(a.boundingBox.x)}, y:${Math.round(a.boundingBox.y)} (${Math.round(a.boundingBox.width)}×${Math.round(a.boundingBox.height)}px)
`),i+=`**Annotation at:** ${a.x.toFixed(1)}% from left, ${Math.round(a.y)}px from top
`,a.selectedText&&(i+=`**Selected text:** "${a.selectedText}"
`),a.nearbyText&&!a.selectedText&&(i+=`**Context:** ${a.nearbyText.slice(0,100)}
`),a.computedStyles&&(i+=`**Computed Styles:** ${a.computedStyles}
`),a.accessibility&&(i+=`**Accessibility:** ${a.accessibility}
`),a.nearbyElements&&(i+=`**Nearby Elements:** ${a.nearbyElements}
`),a.sourceFile&&(i+=`**Source:** ${a.sourceFile}
`),a.reactComponents&&(i+=`**React:** ${a.reactComponents}
`),i+=`**Feedback:** ${a.comment}

`):(i+=`### ${h+1}. ${a.element}
`,i+=`**Location:** ${a.elementPath}
`,a.sourceFile&&(i+=`**Source:** ${a.sourceFile}
`),a.reactComponents&&(i+=`**React:** ${a.reactComponents}
`),o==="detailed"&&(a.cssClasses&&(i+=`**Classes:** ${a.cssClasses}
`),a.boundingBox&&(i+=`**Position:** ${Math.round(a.boundingBox.x)}px, ${Math.round(a.boundingBox.y)}px (${Math.round(a.boundingBox.width)}×${Math.round(a.boundingBox.height)}px)
`)),a.selectedText&&(i+=`**Selected text:** "${a.selectedText}"
`),o==="detailed"&&a.nearbyText&&!a.selectedText&&(i+=`**Context:** ${a.nearbyText.slice(0,100)}
`),i+=`**Feedback:** ${a.comment}

`)}),i.trim()}function wi(t,n,o="markdown"){return o==="markdown"?n:[...new Set(t.map(s=>o==="source"?s.sourceFile:o==="classes"?s.cssClasses:s.attributes?.[o.attribute]).filter(s=>typeof s=="string"&&s.length>0))].join(`
`)}async function Ad(t){if(typeof window>"u")return!1;try{if(navigator.clipboard?.writeText)return await navigator.clipboard.writeText(t),!0}catch{}return Od(t)}function Od(t){const n=document.createElement("textarea");let o=document.activeElement;for(;o?.shadowRoot?.activeElement;)o=o.shadowRoot.activeElement;const s=o instanceof HTMLInputElement||o instanceof HTMLTextAreaElement?o:null,r=s&&s.selectionStart!==null?{start:s.selectionStart,end:s.selectionEnd,direction:s.selectionDirection}:null,i=document.getSelection(),a=i?Array.from({length:i.rangeCount},(h,d)=>i.getRangeAt(d).cloneRange()):[];try{return n.value=t,n.setAttribute("readonly",""),n.style.cssText="position:fixed;left:-9999px;top:0;opacity:0;pointer-events:none;",document.body.appendChild(n),n.focus({preventScroll:!0}),n.select(),n.setSelectionRange(0,t.length),document.execCommand("copy")}catch{return!1}finally{if(n.remove(),o instanceof HTMLElement&&o.isConnected&&(o.focus({preventScroll:!0}),s&&r&&s.setSelectionRange(r.start,r.end,r.direction)),i){i.removeAllRanges();for(const h of a)i.addRange(h)}}}function vi(t){if(!t)return t;try{const n=new URL(t,"http://agentation.invalid");return n.pathname+n.search+n.hash}catch{return t}}function ki(t,n,o=[]){const s=new Map,r=new Map(o.map(h=>[h.id,h]));let i=!1;async function a(h,d){if(i||d.running||d.timer)return;const g=d.desired,f=n.get(h);if(!g&&!f){s.delete(h),n.delete(h);return}const p=g?JSON.stringify(g):void 0;if(!(g&&f&&d.synced===p)){d.running=!0;try{if(!g)await t.remove(f),n.delete(h),d.synced=void 0;else if(f)await t.update(f,g),d.synced=p;else{n.set(h,"");const w=await t.create(g);n.set(h,w.id),d.synced=p}d.retries=0,d.running=!1,!i&&s.get(h)===d&&a(h,d)}catch(w){if(d.running=!1,!i&&s.get(h)===d&&(console.warn("[Agentation] Failed to sync layout feedback:",w),n.get(h)&&d.retries<3)){const $=500*2**d.retries++;d.timer=We(()=>{d.timer=void 0,a(h,d)},$)}}}}return{replace(h){const d=new Map(h.map(g=>[g.id,g]));for(const[g,f]of d){let p=s.get(g);if(!p){p={running:!1,retries:0},s.set(g,p);const w=[...r.values()].find($=>$.kind===f.kind&&vi($.url)===vi(f.url)&&(f.kind==="placement"?$.timestamp===f.timestamp&&$.element===f.element:$.element===f.element));w&&(n.set(g,w.id),r.delete(w.id))}JSON.stringify(p.desired)!==JSON.stringify(f)&&(p.retries=0,p.timer&&clearTimeout(p.timer),p.timer=void 0),p.desired=f}for(const[g,f]of s)d.has(g)||(f.desired=void 0),a(g,f)},forget(h){const d=s.get(h);d?.timer&&clearTimeout(d.timer),s.delete(h),n.delete(h)},dispose(){i=!0;for(const h of s.values())h.timer&&clearTimeout(h.timer)}}}function zd(t,n,o,s){let r=!1,i,a,h=1e3,d;const g=$=>{!r&&($?.status==="resolved"||$?.status==="dismissed")&&s($)},f=async()=>{if(r||d||!o())return;const $=new AbortController;d=$;const v=We(()=>$.abort(),5e3);try{const T=await fetch(`${t}/sessions/${n}`,{signal:$.signal});if(!T.ok)return;const x=await T.json();!r&&!$.signal.aborted&&Array.isArray(x.annotations)&&x.annotations.forEach(g)}catch{}finally{clearTimeout(v),d===$&&(d=void 0)}},p=()=>{if(r)return;const $=new EventSource(`${t}/sessions/${n}/events`),v=()=>{h=1e3,f()},T=I=>{try{g(JSON.parse(I.data).payload)}catch{}},x=()=>{$.readyState!==EventSource.CLOSED||r||a!==void 0||(i?.(),a=We(()=>{a=void 0,p()},h),h=Math.min(h*2,1e4))};$.addEventListener("open",v),$.addEventListener("annotation.updated",T),$.addEventListener("error",x),i=()=>{$.removeEventListener("open",v),$.removeEventListener("annotation.updated",T),$.removeEventListener("error",x),$.close()}};p();const w=Ii(()=>{f()},1e4);return()=>{r=!0,i?.(),a!==void 0&&clearTimeout(a),clearInterval(w),d?.abort()}}var Fd=`.styles-module__surface___7qnpJ {
  padding: 0;
  width: var(--preview-width, 200px);
  max-width: calc(100vw - 24px);
  overflow: auto;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  border-radius: 12px;
  z-index: inherit;
  will-change: auto;
  transform: translateX(-50%);
  transition: left 200ms cubic-bezier(0.2, 0.8, 0.2, 1), top 200ms cubic-bezier(0.2, 0.8, 0.2, 1), transform 200ms cubic-bezier(0.2, 0.8, 0.2, 1), width 200ms cubic-bezier(0.2, 0.8, 0.2, 1), opacity 100ms ease-out, visibility 0s 200ms;
}
.styles-module__surface___7qnpJ[data-positioning] {
  transition: none;
}
.styles-module__surface___7qnpJ[data-direct-entry] *, .styles-module__surface___7qnpJ[data-direct-entry] *::before, .styles-module__surface___7qnpJ[data-direct-entry] *::after {
  transition: none !important;
}
.styles-module__surface___7qnpJ[data-state=preview], .styles-module__surface___7qnpJ[data-state=edit] {
  opacity: 1;
  visibility: visible;
  transition-delay: 0s;
}
.styles-module__surface___7qnpJ[data-state=edit], .styles-module__surface___7qnpJ[data-annotation-popup][data-state=hidden] {
  width: 280px;
  border-radius: 16px;
}
.styles-module__surface___7qnpJ[data-state=edit] {
  pointer-events: auto;
}
.styles-module__surface___7qnpJ[data-state=preview] {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=light] .styles-module__surface___7qnpJ[data-state=preview] {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06);
}

@media (prefers-reduced-motion: reduce) {
  .styles-module__surface___7qnpJ {
    transition: opacity 100ms ease-out, visibility 0s 100ms;
  }
}`,Wd={surface:"styles-module__surface___7qnpJ"},Hd=l.forwardRef(function({annotation:n,editing:o,exiting:s,restorePreview:r,editorProps:i,lightMode:a,scrollY:h,onExited:d},g){const f=l.useRef({annotation:n,editorProps:i}),p=n??f.current.annotation,w=n?i:f.current.editorProps,$=l.useRef(null),v=l.useRef(null),T=l.useRef(),x=l.useRef(h),I=o&&!s?"edit":n&&(!o||r)?"preview":"hidden",G=I==="preview"||!o;return l.useLayoutEffect(()=>{n&&(f.current={annotation:n,editorProps:i})},[n,i]),l.useLayoutEffect(()=>{const M=$.current;if(!M||!p)return;const B=I==="edit"&&(T.current!==p.id||M.dataset.state==="hidden"&&getComputedStyle(M).opacity==="0");B&&(M.dataset.directEntry="true");const we=()=>{const Oe=p.x/100*window.innerWidth,z=p.isFixed?p.y:p.y-h,me=I==="preview"||!o,ne=parseFloat(M.style.getPropertyValue("--preview-width"))||200,W=Math.min(ne,window.innerWidth-24),ke=Math.max(12,Math.min(window.innerWidth-W-12,Oe-W/2)),Q=me?W:Math.min(280,window.innerWidth-24),V=Math.min(me?12:20,(window.innerWidth-Q)/2),oe=z>window.innerHeight-(me?101:290);M.style.left=`${Math.max(V,Math.min(window.innerWidth-Q-V,ke))}px`,M.style.right="auto",M.style.top=`${Math.max(12,Math.min(window.innerHeight-12,z+(oe?-21:21)))}px`,M.style.bottom="auto",M.style.transform=oe?"translateY(-100%)":"translateY(0)",M.style.maxHeight=`${Math.max(100,oe?z-33:window.innerHeight-z-33)}px`},Ne=T.current!==p.id||x.current!==h||M.dataset.state==="hidden";Ne&&(M.dataset.positioning="true"),we(),(Ne||B)&&M.getBoundingClientRect(),delete M.dataset.positioning,delete M.dataset.directEntry,M.dataset.state=I,M.inert=I!=="edit",T.current=p.id,x.current=h;const U=()=>{M.dataset.positioning="true",we(),M.getBoundingClientRect(),delete M.dataset.positioning};return window.addEventListener("resize",U),()=>window.removeEventListener("resize",U)},[p?.id,p?.x,p?.y,p?.isFixed,I,o,h,p?.comment]),l.useLayoutEffect(()=>{o&&!s&&v.current?.focus()},[o,s,p?.id]),tr($,s,d),l.useImperativeHandle(g,()=>({shake(){$.current?.animate?.([{translate:"0px"},{translate:"-3px"},{translate:"3px"},{translate:"-2px"},{translate:"2px"},{translate:"0px"}],{duration:250}),v.current?.focus()}}),[]),!p||!w?null:e.jsx("div",{ref:$,className:`${Ce.popup} ${Wd.surface} ${a?Ce.light:""}`,"data-feedback-toolbar":!0,"data-annotation-card":!0,"data-annotation-popup":o?"":void 0,"data-state":"hidden","aria-hidden":I==="hidden",onClick:M=>M.stopPropagation(),onKeyDownCapture:M=>{M.key!=="Escape"||M.nativeEvent.isComposing||!o||(M.preventDefault(),M.stopPropagation(),w.onCancel())},children:e.jsx(Oi,{ref:v,...w,variant:"card",preview:G,resetOnPreview:!o,disabled:!o||s},p.id)})}),Yd=`@keyframes styles-module__markerIn___x4G8D {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}
@keyframes styles-module__markerOut___6VhQN {
  0% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
  }
}
@keyframes styles-module__renumberRoll___akV9B {
  0% {
    transform: translateX(-40%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.styles-module__marker___9CKF7 {
  padding: 0;
  border: 0;
  box-sizing: border-box;
  font-family: inherit;
  line-height: 1;
  text-align: center;
  appearance: none;
  position: absolute;
  width: 22px;
  height: 22px;
  background: var(--agentation-color-blue);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6875rem;
  font-weight: 600;
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(0, 0, 0, 0.04);
  -webkit-user-select: none;
  user-select: none;
  will-change: transform, opacity;
  contain: layout style;
  z-index: 1;
}
.styles-module__marker___9CKF7 > * {
  pointer-events: none;
}
.styles-module__marker___9CKF7:focus-visible {
  outline: 2px solid var(--agentation-color-accent);
  outline-offset: 3px;
}
.styles-module__marker___9CKF7:hover, .styles-module__marker___9CKF7:focus-visible, .styles-module__marker___9CKF7.styles-module__previewVisible___imMag {
  z-index: 2;
}
.styles-module__marker___9CKF7:not(.styles-module__enter___8kI3q):not(.styles-module__exit___KBdR3):not(.styles-module__clearing___8rM7K):not(.styles-module__confirm___BtMvq) {
  transition: background-color 0.15s ease, transform 0.1s ease, z-index 0s 0.1s;
}
.styles-module__marker___9CKF7:not(.styles-module__enter___8kI3q):not(.styles-module__exit___KBdR3):not(.styles-module__clearing___8rM7K):not(.styles-module__confirm___BtMvq):hover, .styles-module__marker___9CKF7:not(.styles-module__enter___8kI3q):not(.styles-module__exit___KBdR3):not(.styles-module__clearing___8rM7K):not(.styles-module__confirm___BtMvq):focus-visible, .styles-module__marker___9CKF7:not(.styles-module__enter___8kI3q):not(.styles-module__exit___KBdR3):not(.styles-module__clearing___8rM7K):not(.styles-module__confirm___BtMvq).styles-module__previewVisible___imMag {
  transition-delay: 0s;
}
.styles-module__marker___9CKF7.styles-module__enter___8kI3q {
  animation: styles-module__markerIn___x4G8D 0.25s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.styles-module__marker___9CKF7.styles-module__confirm___BtMvq {
  animation: styles-module__markerConfirm___RT4Sk 220ms ease-out both;
}
.styles-module__marker___9CKF7.styles-module__exit___KBdR3 {
  animation: styles-module__markerOut___6VhQN 0.2s ease-out both;
  pointer-events: none;
}
.styles-module__marker___9CKF7.styles-module__clearing___8rM7K {
  animation: styles-module__markerOut___6VhQN 0.15s ease-out both;
  pointer-events: none;
}
.styles-module__marker___9CKF7:not(.styles-module__enter___8kI3q):not(.styles-module__exit___KBdR3):not(.styles-module__clearing___8rM7K):not(.styles-module__confirm___BtMvq):hover {
  transform: translate(-50%, -50%) scale(1.1);
}
.styles-module__marker___9CKF7.styles-module__pending___BiY-U {
  background-color: var(--agentation-color-blue);
  cursor: default;
}
.styles-module__marker___9CKF7.styles-module__pending___BiY-U.styles-module__exit___KBdR3 {
  animation-duration: 150ms;
}
.styles-module__marker___9CKF7.styles-module__multiSelect___CPfTC {
  background-color: var(--agentation-color-green);
  width: 26px;
  height: 26px;
  border-radius: 6px;
  font-size: 0.75rem;
}
.styles-module__marker___9CKF7.styles-module__multiSelect___CPfTC.styles-module__pending___BiY-U {
  background-color: var(--agentation-color-green);
}
.styles-module__marker___9CKF7.styles-module__hovered___-mg2N {
  background-color: var(--agentation-color-red);
}

.styles-module__renumber___16lvD {
  display: block;
  animation: styles-module__renumberRoll___akV9B 0.2s ease-out;
}

@keyframes styles-module__markerConfirm___RT4Sk {
  0% {
    transform: translate(-50%, -50%) scale(1);
  }
  25% {
    transform: translate(-50%, -50%) scale(0.94);
  }
  65% {
    transform: translate(-50%, -50%) scale(1.06);
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
  }
}
.styles-module__number___1JFu9 {
  display: block;
}

.styles-module__numberGlyph___qchdk {
  display: block;
  opacity: 1;
  transform: translateY(0);
  filter: blur(0);
  transition: opacity 140ms ease-out, transform 180ms cubic-bezier(0.22, 1, 0.36, 1), filter 140ms ease-out;
}

.styles-module__actionGlyph___AFRt0 {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  opacity: 0;
  transform: translateY(2px) scale(0.8) rotate(-12deg);
  filter: blur(1px);
  transition: opacity 120ms ease-out, transform 160ms cubic-bezier(0.22, 1, 0.36, 1), filter 120ms ease-out;
}

.styles-module__actionVisible___Kb--l .styles-module__numberGlyph___qchdk {
  opacity: 0;
  transform: translateY(-2px) scale(0.8);
  filter: blur(1px);
}
.styles-module__actionVisible___Kb--l .styles-module__actionGlyph___AFRt0 {
  opacity: 1;
  transform: translateY(0) scale(1) rotate(0);
  filter: blur(0);
}

.styles-module__plus___xslMP {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  opacity: 0;
  transform: rotate(-90deg) scale(0.6);
  filter: blur(1px);
  transition: opacity 100ms ease-out, transform 140ms ease-out, filter 100ms ease-out;
  pointer-events: none;
}

.styles-module__pending___BiY-U .styles-module__numberGlyph___qchdk {
  opacity: 0;
  transform: translateY(5px);
  filter: blur(2px);
}
.styles-module__pending___BiY-U .styles-module__plus___xslMP {
  opacity: 1;
  transform: rotate(0) scale(1);
  filter: blur(0);
}

@media (prefers-reduced-motion: reduce) {
  .styles-module__marker___9CKF7.styles-module__enter___8kI3q, .styles-module__marker___9CKF7.styles-module__exit___KBdR3, .styles-module__marker___9CKF7.styles-module__clearing___8rM7K, .styles-module__marker___9CKF7.styles-module__confirm___BtMvq {
    animation-duration: 1ms;
    animation-delay: 0ms !important;
  }
  .styles-module__numberGlyph___qchdk, .styles-module__actionGlyph___AFRt0, .styles-module__plus___xslMP {
    transition: opacity 100ms ease-out;
    transform: none;
    filter: none;
  }
  .styles-module__pending___BiY-U .styles-module__numberGlyph___qchdk, .styles-module__pending___BiY-U .styles-module__plus___xslMP,
  .styles-module__actionVisible___Kb--l .styles-module__numberGlyph___qchdk, .styles-module__actionVisible___Kb--l .styles-module__actionGlyph___AFRt0 {
    transform: none;
    filter: none;
  }
}`,pt={marker:"styles-module__marker___9CKF7",previewVisible:"styles-module__previewVisible___imMag",enter:"styles-module__enter___8kI3q",exit:"styles-module__exit___KBdR3",clearing:"styles-module__clearing___8rM7K",confirm:"styles-module__confirm___BtMvq",pending:"styles-module__pending___BiY-U",multiSelect:"styles-module__multiSelect___CPfTC",hovered:"styles-module__hovered___-mg2N",renumber:"styles-module__renumber___16lvD",number:"styles-module__number___1JFu9",numberGlyph:"styles-module__numberGlyph___qchdk",actionGlyph:"styles-module__actionGlyph___AFRt0",actionVisible:"styles-module__actionVisible___Kb--l",plus:"styles-module__plus___xslMP"},ji=l.memo(function({annotation:n,pending:o=!1,globalIndex:s,layerIndex:r,layerSize:i,isExiting:a,isClearing:h,isAnimated:d,isNew:g,isHovered:f,isRemoving:p,onRemoveComplete:w,isEditingAny:$,renumberFrom:v,markerClickBehavior:T,onHoverEnter:x,onEnterComplete:I,onHoverLeave:G,onClick:M,onContextMenu:B}){const[we,Ne]=l.useState(d),U=l.useRef(o),[Oe,z]=l.useState(!1),me=U.current&&!o&&we&&!Oe;l.useLayoutEffect(()=>{a&&Ne(!1)},[a]);const ne=l.useRef(null),W=l.useRef({action:!1,delete:!1}),ke=f&&!$,Q=ke&&T==="delete";l.useLayoutEffect(()=>{p||(W.current={action:ke,delete:Q})},[p,ke,Q]);const V=p?W.current.action:ke,oe=p?W.current.delete:Q;tr(ne,p,()=>w(n.id));const ot=n.isMultiSelect,$e=ot?"var(--agentation-color-green)":"var(--agentation-color-accent)",ze=h?pt.clearing:a||p?pt.exit:me?pt.confirm:!d&&!we?pt.enter:"",Re=h?`${Math.min(r*20,120)}ms`:p||o||me?"0ms":a?`${(i-1-r)*20}ms`:`${g?0:r*20}ms`;return e.jsxs("button",{ref:ne,type:"button","aria-label":o?"Pending annotation":`${T==="delete"?"Delete":"Edit"} annotation ${s+1}: ${n.element}`,disabled:o||a||p||h,tabIndex:o||$?-1:0,className:`${pt.marker} ${o?pt.pending:""} ${ot?pt.multiSelect:""} ${ze} ${!o&&V?pt.actionVisible:""} ${oe?pt.hovered:""} ${f&&!$&&!p?pt.previewVisible:""}`,"data-annotation-marker":o?void 0:"","data-annotation-pending":o?"":void 0,style:{left:`${n.x}%`,top:n.y,backgroundColor:oe?void 0:$e,animationDelay:Re},onAnimationEnd:Ze=>{Ze.target===Ze.currentTarget&&(ze===pt.enter||ze===pt.confirm)&&(Ne(!0),o||z(!0),o||I(n.id))},onMouseOver:()=>{o||x(n)},onMouseOut:Ze=>{const ht=Ze.relatedTarget;(!(ht instanceof Node)||!Ze.currentTarget.contains(ht))&&G(n.id)},onFocus:Ze=>{!o&&Ze.currentTarget.matches(":focus-visible")&&x(n)},onBlur:()=>G(n.id),onClick:Ze=>{Ze.stopPropagation(),!o&&!a&&!p&&M(n,Ze.currentTarget)},onContextMenu:B?Ze=>{T==="delete"&&(Ze.preventDefault(),Ze.stopPropagation(),!o&&!a&&!p&&B(n,Ze.currentTarget))}:void 0,children:[e.jsx("span",{className:`${pt.number} ${v!==null&&s>=v?pt.renumber:""}`,"aria-hidden":"true",children:e.jsx("span",{className:pt.numberGlyph,children:s+1})},s),e.jsx("span",{className:pt.actionGlyph,"aria-hidden":"true",children:T==="delete"?e.jsx(ca,{size:ot?18:16}):e.jsx(ua,{size:16})}),U.current&&e.jsx("span",{className:pt.plus,"aria-hidden":"true",children:e.jsx(ta,{size:12})})]})}),Xd=`.styles-module__switchContainer___Ka-AB {
  display: flex;
  align-items: center;
  position: relative;
  padding: 2px;
  width: 24px;
  height: 16px;
  border-radius: 8px;
  background-color: #cdcdcd;
  transition: background-color 0.15s, opacity 0.15s;
}
[data-agentation-theme=dark] .styles-module__switchContainer___Ka-AB {
  background-color: #484848;
}
.styles-module__switchContainer___Ka-AB:has(.styles-module__switchInput___kYDSD:checked) {
  background-color: var(--agentation-color-blue);
}
.styles-module__switchContainer___Ka-AB:has(.styles-module__switchInput___kYDSD:disabled) {
  opacity: 0.3;
}

.styles-module__switchInput___kYDSD {
  position: absolute;
  z-index: 1;
  inset: 0;
  border-radius: inherit;
  opacity: 0;
  cursor: pointer;
}
.styles-module__switchInput___kYDSD:disabled {
  cursor: not-allowed;
}

.styles-module__switchThumb___4sCPH {
  border-radius: 50%;
  width: 12px;
  height: 12px;
  background-color: #fff;
  transition: transform 0.15s;
}
.styles-module__switchContainer___Ka-AB[data-checked] .styles-module__switchThumb___4sCPH {
  transform: translateX(8px);
}`,Fs={switchContainer:"styles-module__switchContainer___Ka-AB",switchInput:"styles-module__switchInput___kYDSD",switchThumb:"styles-module__switchThumb___4sCPH"},Ws=({className:t="",checked:n,onChange:o,...s})=>e.jsxs("div",{className:`${Fs.switchContainer} ${t}`,"data-checked":n?"":void 0,children:[e.jsx("input",{className:Fs.switchInput,checked:n,onChange:o,type:"checkbox",...s}),e.jsx("div",{className:Fs.switchThumb})]}),Ud=`.styles-module__checkboxContainer___joqZk {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 1px solid rgba(26, 26, 26, 0.2);
  border-radius: 4px;
  width: 14px;
  height: 14px;
  background-color: #fff;
  transition: background-color 0.2s ease;
}
[data-agentation-theme=dark] .styles-module__checkboxContainer___joqZk {
  border-color: rgba(255, 255, 255, 0.2);
  background-color: #252525;
}
.styles-module__checkboxContainer___joqZk:has(.styles-module__checkboxInput___ECzzO:checked) {
  background-color: #1a1a1a;
}
[data-agentation-theme=dark] .styles-module__checkboxContainer___joqZk:has(.styles-module__checkboxInput___ECzzO:checked) {
  background-color: #fff;
}

.styles-module__checkboxInput___ECzzO {
  position: absolute;
  z-index: 1;
  inset: -1px;
  border-radius: inherit;
  opacity: 0;
  cursor: pointer;
}

.styles-module__checkboxCheck___fUXpr {
  color: #fafafa;
}
[data-agentation-theme=dark] .styles-module__checkboxCheck___fUXpr {
  color: #1a1a1a;
}

.styles-module__checkboxCheckPath___cDyh8 {
  stroke-dasharray: 9.29px;
  stroke-dashoffset: 9.29px;
  color: #fafafa;
  transition: stroke-dashoffset 0.1s ease;
}
[data-agentation-theme=dark] .styles-module__checkboxCheckPath___cDyh8 {
  color: #1a1a1a;
}
.styles-module__checkboxContainer___joqZk[data-checked] .styles-module__checkboxCheckPath___cDyh8 {
  transition-duration: 0.2s;
  stroke-dashoffset: 0;
}`,Vo={checkboxContainer:"styles-module__checkboxContainer___joqZk",checkboxInput:"styles-module__checkboxInput___ECzzO",checkboxCheck:"styles-module__checkboxCheck___fUXpr",checkboxCheckPath:"styles-module__checkboxCheckPath___cDyh8"},Qd=({className:t="",checked:n,onChange:o,...s})=>e.jsxs("div",{className:`${Vo.checkboxContainer} ${t}`,"data-checked":n?"":void 0,children:[e.jsx("input",{className:Vo.checkboxInput,type:"checkbox",checked:n,onChange:o,...s}),e.jsx("svg",{className:Vo.checkboxCheck,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:e.jsx("path",{className:Vo.checkboxCheckPath,d:"M3.94 7L6.13 9.19L10.5 4.81",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),qd=`.styles-module__container___w8eAF {
  display: flex;
  align-items: center;
  height: 24px;
}

.styles-module__label___J5mxE {
  padding-inline: 8px 2px;
  line-height: 20px;
  font-size: 13px;
  letter-spacing: -0.15px;
  color: rgba(26, 26, 26, 0.5);
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
}
[data-agentation-theme=dark] .styles-module__label___J5mxE {
  color: rgba(255, 255, 255, 0.5);
}`,Si={container:"styles-module__container___w8eAF",label:"styles-module__label___J5mxE"},Ci=({className:t="",label:n,tooltip:o,checked:s,onChange:r,...i})=>{const a=l.useId();return e.jsxs("div",{className:`${Si.container} ${t}`,...i,children:[e.jsx(Qd,{id:a,onChange:r,checked:s}),e.jsx("label",{className:Si.label,htmlFor:a,children:n}),o&&e.jsx($n,{content:o})]})},Gd=`@keyframes styles-module__cycleTextIn___VBNTi {
  0% {
    opacity: 0;
    transform: translateY(-6px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes styles-module__scaleIn___QpQ8E {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__mcpPulse___5Q3Jj {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
}
@keyframes styles-module__mcpPulseError___VHxhx {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
}
@keyframes styles-module__themeIconIn___qUWMV {
  0% {
    opacity: 0;
    transform: scale(0.8) rotate(-30deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}
.styles-module__settingsPanel___qNkn- :where(button, a, input, select, textarea):focus-visible {
  outline: 2px solid var(--agentation-color-accent);
  outline-offset: 2px;
}
.styles-module__settingsPanel___qNkn- {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  z-index: 1;
  overflow: hidden;
  background: #1c1c1c;
  border-radius: 16px;
  padding: 12px 0;
  width: 253px;
  max-width: calc(100vw - 20px);
  cursor: default;
  opacity: 1;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  transition: background-color 0.25s ease, box-shadow 0.25s ease;
}
.styles-module__settingsPanel___qNkn-::before, .styles-module__settingsPanel___qNkn-::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 16px;
  z-index: 2;
  pointer-events: none;
}
.styles-module__settingsPanel___qNkn-::before {
  left: 0;
  background: linear-gradient(to right, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___qNkn-::after {
  right: 0;
  background: linear-gradient(to left, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___qNkn- .styles-module__settingsHeader___Fn1DP,
.styles-module__settingsPanel___qNkn- .styles-module__settingsBrand___OoKlM,
.styles-module__settingsPanel___qNkn- .styles-module__settingsVersion___rXmL9,
.styles-module__settingsPanel___qNkn- .styles-module__settingsSection___n5V-4,
.styles-module__settingsPanel___qNkn- .styles-module__settingsLabel___VCVOQ,
.styles-module__settingsPanel___qNkn- .styles-module__cycleButton___XMBx3,
.styles-module__settingsPanel___qNkn- .styles-module__cycleDot___zgSXY,
.styles-module__settingsPanel___qNkn- .styles-module__dropdownButton___mKHe8,
.styles-module__settingsPanel___qNkn- .styles-module__sliderLabel___6K5v1,
.styles-module__settingsPanel___qNkn- .styles-module__slider___v5z-c,
.styles-module__settingsPanel___qNkn- .styles-module__themeToggle___3imlT {
  transition: background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__settingsPanel___qNkn- {
  opacity: 0;
  transform: translateY(var(--panel-offset-y, 4px)) scale(0.98);
  transform-origin: var(--panel-origin, bottom right);
  filter: blur(2px);
  pointer-events: none;
  visibility: hidden;
  transition: opacity 120ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 120ms cubic-bezier(0.25, 0.46, 0.45, 0.94), filter 120ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.styles-module__settingsPanel___qNkn-[data-panel-present=true] {
  visibility: visible;
}
.styles-module__settingsPanel___qNkn-[data-panel-open=true] {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0);
  pointer-events: auto;
  transition-duration: 160ms;
}
@media (prefers-reduced-motion: reduce) {
  .styles-module__settingsPanel___qNkn- {
    transition: none;
    transform: none;
    filter: none;
  }
}
.styles-module__settingsPanel___qNkn-.styles-module__below___Vpv-k {
  --panel-offset-y: -4px;
  --panel-origin: top right;
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- {
  background: #1a1a1a;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsLabel___VCVOQ {
  color: rgba(255, 255, 255, 0.6);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsOption___JoyH- {
  color: rgba(255, 255, 255, 0.85);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsOption___JoyH-:hover {
  background: rgba(255, 255, 255, 0.1);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsOption___JoyH-.styles-module__selected___k1-Vq {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}

.styles-module__settingsPanelContainer___5it-H {
  overflow: visible;
  position: relative;
  display: flex;
  padding: 0 16px;
}

.styles-module__settingsPage___BMn-3 {
  min-width: 100%;
  flex-basis: 0;
  flex-shrink: 0;
  transition: transform 0.2s ease, opacity 0.2s ease;
  transition-delay: 0s;
  opacity: 1;
}

.styles-module__settingsPage___BMn-3.styles-module__slideLeft___qUvW4 {
  transform: translateX(-24px);
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___N7By0 {
  position: absolute;
  top: 0;
  left: 24px;
  width: 100%;
  height: 100%;
  padding: 0 16px 4px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, opacity 0.2s ease;
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___N7By0.styles-module__slideIn___uXDSu {
  transform: translateX(-24px);
  opacity: 1;
  pointer-events: auto;
}

.styles-module__settingsHeader___Fn1DP {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 24px;
}

.styles-module__settingsBrand___OoKlM {
  display: flex;
  align-items: center;
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: -0.0094em;
  color: #bbb;
  text-decoration: none;
}

.styles-module__settingsVersion___rXmL9 {
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  margin-left: 6px;
  letter-spacing: -0.0094em;
}

.styles-module__themeToggle___3imlT {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  margin-left: auto;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: rgba(255, 255, 255, 0.4);
  transition: background-color 0.15s ease, color 0.15s ease;
  cursor: pointer;
}
.styles-module__themeToggle___3imlT:hover {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
}
[data-agentation-theme=light] .styles-module__themeToggle___3imlT {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__themeToggle___3imlT:hover {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.7);
}

.styles-module__themeIconWrapper___pyaYa {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 20px;
  height: 20px;
}

.styles-module__themeIcon___w7lAm {
  display: flex;
  align-items: center;
  justify-content: center;
  animation: styles-module__themeIconIn___qUWMV 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.styles-module__settingsSectionGrow___eZTRw {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.styles-module__settingsRow___y-tDE {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
}
.styles-module__settingsRow___y-tDE.styles-module__settingsRowMarginTop___uLpGb {
  margin-top: 8px;
}

.styles-module__settingsRowDisabled___ydl3Q .styles-module__settingsLabel___VCVOQ {
  color: rgba(255, 255, 255, 0.2);
}
[data-agentation-theme=light] .styles-module__settingsRowDisabled___ydl3Q .styles-module__settingsLabel___VCVOQ {
  color: rgba(0, 0, 0, 0.2);
}

.styles-module__settingsLabel___VCVOQ {
  display: flex;
  align-items: center;
  column-gap: 2px;
  line-height: 20px;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: -0.15px;
  color: rgba(255, 255, 255, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsLabel___VCVOQ {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__cycleButton___XMBx3 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0;
  border: none;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  letter-spacing: -0.0094em;
}
[data-agentation-theme=light] .styles-module__cycleButton___XMBx3 {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__cycleButton___XMBx3:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.styles-module__cycleButtonText___mbbnD {
  display: inline-block;
  animation: styles-module__cycleTextIn___VBNTi 0.2s ease-out;
}

.styles-module__cycleDots___ehp6i {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.styles-module__cycleDot___zgSXY {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: scale(0.667);
  transition: background-color 0.25s ease-out, transform 0.25s ease-out;
}
.styles-module__cycleDot___zgSXY.styles-module__active___dpAhM {
  background: #fff;
  transform: scale(1);
}
[data-agentation-theme=light] .styles-module__cycleDot___zgSXY {
  background: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__cycleDot___zgSXY.styles-module__active___dpAhM {
  background: rgba(0, 0, 0, 0.7);
}

.styles-module__colorOptions___pbxZx {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 6px;
  height: 26px;
}

.styles-module__colorOption___Co955 {
  padding: 0;
  position: relative;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background-color: #fff;
  cursor: pointer;
}
[data-agentation-theme=dark] .styles-module__colorOption___Co955 {
  background-color: #1a1a1a;
}
.styles-module__colorOption___Co955::before, .styles-module__colorOption___Co955::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background-color: var(--swatch);
  transition: opacity 0.2s, transform 0.2s;
}
@supports (color: color(display-p3 0 0 0)) {
  .styles-module__colorOption___Co955::before, .styles-module__colorOption___Co955::after {
    --color: var(--swatch-p3);
  }
}
.styles-module__colorOption___Co955::after {
  z-index: -1;
  transform: scale(1.2);
  opacity: 0;
}
.styles-module__colorOption___Co955.styles-module__selected___k1-Vq::before {
  transform: scale(0.8);
}
.styles-module__colorOption___Co955.styles-module__selected___k1-Vq::after {
  opacity: 1;
}

.styles-module__settingsNavLink___uYIwM {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 24px;
  padding: 0;
  border: none;
  background: transparent;
  font-family: inherit;
  line-height: 20px;
  font-size: 13px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  transition: color 0.15s ease;
  cursor: pointer;
}
.styles-module__settingsNavLink___uYIwM:hover {
  color: rgba(255, 255, 255, 0.9);
}
.styles-module__settingsNavLink___uYIwM svg {
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___uYIwM:hover svg {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM:hover {
  color: rgba(0, 0, 0, 0.8);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM svg {
  color: rgba(0, 0, 0, 0.25);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM:hover svg {
  color: rgba(0, 0, 0, 0.8);
}

.styles-module__settingsNavLinkRight___XBUzC {
  display: flex;
  align-items: center;
  gap: 6px;
}

.styles-module__settingsBackButton___fflll {
  display: flex;
  align-items: center;
  gap: 4px;
  height: 24px;
  border: none;
  background: transparent;
  font-family: inherit;
  line-height: 20px;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.15px;
  color: #fff;
  cursor: pointer;
  transition: transform 0.12s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___fflll svg {
  opacity: 0.4;
  flex-shrink: 0;
  transition: opacity 0.15s ease, transform 0.18s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___fflll:hover svg {
  opacity: 1;
}
[data-agentation-theme=light] .styles-module__settingsBackButton___fflll {
  color: rgba(0, 0, 0, 0.85);
  border-bottom-color: rgba(0, 0, 0, 0.08);
}

.styles-module__automationHeader___Avra9 {
  display: flex;
  align-items: center;
  gap: 0.125rem;
  font-size: 0.8125rem;
  font-weight: 400;
  color: #fff;
}
[data-agentation-theme=light] .styles-module__automationHeader___Avra9 {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__automationDescription___vFTmJ {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 2px;
  line-height: 14px;
}
[data-agentation-theme=light] .styles-module__automationDescription___vFTmJ {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__learnMoreLink___cG7OI {
  color: rgba(255, 255, 255, 0.8);
  text-decoration-line: underline;
  text-decoration-style: dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__learnMoreLink___cG7OI:hover {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__learnMoreLink___cG7OI {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__learnMoreLink___cG7OI:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__autoSendContainer___VpkXk {
  display: flex;
  align-items: center;
}

.styles-module__autoSendLabel___ngNdC {
  padding-inline-end: 8px;
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s, opacity 0.15s;
  cursor: pointer;
}
.styles-module__autoSendLabel___ngNdC.styles-module__active___dpAhM {
  color: #66b8ff;
  color: color(display-p3 0.4 0.72 1);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___ngNdC {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___ngNdC.styles-module__active___dpAhM {
  color: var(--agentation-color-blue);
}
.styles-module__autoSendLabel___ngNdC.styles-module__disabled___9AZYS {
  opacity: 0.3;
  cursor: not-allowed;
}

.styles-module__mcpStatusDot___8AMxP {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpStatusDot___8AMxP.styles-module__connecting___QEO1r {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___5Q3Jj 1.5s infinite;
}
.styles-module__mcpStatusDot___8AMxP.styles-module__connected___WyFkx {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___5Q3Jj 2.5s ease-in-out infinite;
}
.styles-module__mcpStatusDot___8AMxP.styles-module__disconnected___mvmvQ {
  background-color: var(--agentation-color-red);
  animation: styles-module__mcpPulseError___VHxhx 2s infinite;
}

.styles-module__mcpNavIndicator___auBHI {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpNavIndicator___auBHI.styles-module__connected___WyFkx {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___5Q3Jj 2.5s ease-in-out infinite;
}
.styles-module__mcpNavIndicator___auBHI.styles-module__connecting___QEO1r {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___5Q3Jj 1.5s ease-in-out infinite;
}

.styles-module__webhookUrlInput___WDDDC {
  display: block;
  width: 100%;
  flex: 1;
  min-height: 60px;
  box-sizing: border-box;
  margin-top: 11px;
  padding: 8px 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.03);
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 400;
  color: #fff;
  outline: none;
  resize: none;
  user-select: text;
  transition: border-color 0.15s ease, background-color 0.15s ease, box-shadow 0.15s ease;
}
.styles-module__webhookUrlInput___WDDDC::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__webhookUrlInput___WDDDC:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___WDDDC {
  border-color: rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.03);
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___WDDDC::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___WDDDC:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn-::before {
  background: linear-gradient(to right, #fff 0%, transparent 100%);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn-::after {
  background: linear-gradient(to left, #fff 0%, transparent 100%);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsHeader___Fn1DP {
  border-bottom-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsBrand___OoKlM {
  color: #333;
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsVersion___rXmL9 {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsSection___n5V-4 {
  border-top-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsLabel___VCVOQ {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__cycleButton___XMBx3 {
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__cycleDot___zgSXY {
  background: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__cycleDot___zgSXY.styles-module__active___dpAhM {
  background: rgba(0, 0, 0, 0.7);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__dropdownButton___mKHe8 {
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__dropdownButton___mKHe8:hover {
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__checkboxField___ZrSqv:not(:first-child) {
  margin-top: 8px;
}

.styles-module__divider___h6Yux {
  margin-block: 8px;
  width: 100%;
  height: 1px;
  background-color: rgba(26, 26, 26, 0.07);
}
[data-agentation-theme=dark] .styles-module__divider___h6Yux {
  background-color: rgba(255, 255, 255, 0.07);
}`,q={settingsPanel:"styles-module__settingsPanel___qNkn-",settingsHeader:"styles-module__settingsHeader___Fn1DP",settingsBrand:"styles-module__settingsBrand___OoKlM",settingsVersion:"styles-module__settingsVersion___rXmL9",settingsSection:"styles-module__settingsSection___n5V-4",settingsLabel:"styles-module__settingsLabel___VCVOQ",cycleButton:"styles-module__cycleButton___XMBx3",cycleDot:"styles-module__cycleDot___zgSXY",dropdownButton:"styles-module__dropdownButton___mKHe8",sliderLabel:"styles-module__sliderLabel___6K5v1",slider:"styles-module__slider___v5z-c",themeToggle:"styles-module__themeToggle___3imlT",below:"styles-module__below___Vpv-k",settingsOption:"styles-module__settingsOption___JoyH-",selected:"styles-module__selected___k1-Vq",settingsPanelContainer:"styles-module__settingsPanelContainer___5it-H",settingsPage:"styles-module__settingsPage___BMn-3",slideLeft:"styles-module__slideLeft___qUvW4",automationsPage:"styles-module__automationsPage___N7By0",slideIn:"styles-module__slideIn___uXDSu",themeIconWrapper:"styles-module__themeIconWrapper___pyaYa",themeIcon:"styles-module__themeIcon___w7lAm",themeIconIn:"styles-module__themeIconIn___qUWMV",settingsSectionGrow:"styles-module__settingsSectionGrow___eZTRw",settingsRow:"styles-module__settingsRow___y-tDE",settingsRowMarginTop:"styles-module__settingsRowMarginTop___uLpGb",settingsRowDisabled:"styles-module__settingsRowDisabled___ydl3Q",cycleButtonText:"styles-module__cycleButtonText___mbbnD",cycleTextIn:"styles-module__cycleTextIn___VBNTi",cycleDots:"styles-module__cycleDots___ehp6i",active:"styles-module__active___dpAhM",colorOptions:"styles-module__colorOptions___pbxZx",colorOption:"styles-module__colorOption___Co955",settingsNavLink:"styles-module__settingsNavLink___uYIwM",settingsNavLinkRight:"styles-module__settingsNavLinkRight___XBUzC",settingsBackButton:"styles-module__settingsBackButton___fflll",automationHeader:"styles-module__automationHeader___Avra9",automationDescription:"styles-module__automationDescription___vFTmJ",learnMoreLink:"styles-module__learnMoreLink___cG7OI",autoSendContainer:"styles-module__autoSendContainer___VpkXk",autoSendLabel:"styles-module__autoSendLabel___ngNdC",disabled:"styles-module__disabled___9AZYS",mcpStatusDot:"styles-module__mcpStatusDot___8AMxP",connecting:"styles-module__connecting___QEO1r",mcpPulse:"styles-module__mcpPulse___5Q3Jj",connected:"styles-module__connected___WyFkx",disconnected:"styles-module__disconnected___mvmvQ",mcpPulseError:"styles-module__mcpPulseError___VHxhx",mcpNavIndicator:"styles-module__mcpNavIndicator___auBHI",webhookUrlInput:"styles-module__webhookUrlInput___WDDDC",checkboxField:"styles-module__checkboxField___ZrSqv",divider:"styles-module__divider___h6Yux",scaleIn:"styles-module__scaleIn___QpQ8E"},Vd=l.memo(function({settings:n,onSettingsChange:o,isDarkMode:s,onToggleTheme:r,isDevMode:i,connectionStatus:a,endpoint:h,onExited:d,isOpen:g,toolbarNearBottom:f,settingsPage:p,onSettingsPageChange:w,onHideToolbar:$}){const{ref:v}=Fi(g,{keepMounted:!0,onExited:d}),T=l.useRef(null),x=l.useRef(null),I=l.useRef(!1);l.useLayoutEffect(()=>{!g||!I.current||(I.current=!1,(p==="automations"?x:T).current?.focus())},[g,p]);const G=s?"Switch to light mode":"Switch to dark mode";return e.jsx("div",{className:`${q.settingsPanel} ${f?q.below:""}`,style:f?{bottom:"auto",top:"calc(100% + 0.5rem)"}:void 0,"data-agentation-settings-panel":!0,ref:M=>{v.current=M,M?.toggleAttribute("inert",!g)},role:"group","aria-label":"Feedback settings","aria-hidden":!g,children:e.jsxs("div",{className:q.settingsPanelContainer,children:[e.jsxs("div",{className:`${q.settingsPage} ${p==="automations"?q.slideLeft:""}`,ref:M=>{M?.toggleAttribute("inert",p!=="main")},"aria-hidden":p!=="main",children:[e.jsxs("div",{className:q.settingsHeader,children:[e.jsx("a",{className:q.settingsBrand,href:"https://agentation.com",target:"_blank",rel:"noopener noreferrer","aria-label":"Agentation",children:"Agentation"}),e.jsxs("p",{className:q.settingsVersion,children:["v","3.1.2"]}),e.jsx("button",{className:q.themeToggle,onClick:r,title:G,"aria-label":G,children:e.jsx("span",{className:q.themeIconWrapper,children:e.jsx("span",{className:q.themeIcon,children:s?e.jsx(da,{size:20}):e.jsx(_a,{size:20})},s?"sun":"moon")})})]}),e.jsx("div",{className:q.divider}),e.jsxs("div",{className:q.settingsSection,children:[e.jsxs("div",{className:q.settingsRow,children:[e.jsxs("div",{className:q.settingsLabel,children:["Output Detail",e.jsx($n,{content:"Controls how much detail is included in the copied output"})]}),e.jsxs("button",{className:q.cycleButton,onClick:()=>{const B=(uo.findIndex(we=>we.value===n.outputDetail)+1)%uo.length;o({outputDetail:uo[B].value})},children:[e.jsx("span",{className:q.cycleButtonText,children:uo.find(M=>M.value===n.outputDetail)?.label},n.outputDetail),e.jsx("span",{className:q.cycleDots,children:uo.map(M=>e.jsx("span",{className:`${q.cycleDot} ${n.outputDetail===M.value?q.active:""}`},M.value))})]})]}),e.jsxs("div",{className:`${q.settingsRow} ${q.settingsRowMarginTop} ${i?"":q.settingsRowDisabled}`,children:[e.jsxs("div",{className:q.settingsLabel,children:["React Components",e.jsx($n,{content:i?"Include React component names in annotations":"Disabled — production builds minify component names, making detection unreliable. Use in development mode."})]}),e.jsx(Ws,{"aria-label":"React Components",checked:i&&n.reactEnabled,onChange:M=>o({reactEnabled:M.target.checked}),disabled:!i})]}),e.jsxs("div",{className:`${q.settingsRow} ${q.settingsRowMarginTop}`,children:[e.jsxs("div",{className:q.settingsLabel,children:["Hide Until Restart",e.jsx($n,{content:"Hides the toolbar until you open a new tab"})]}),e.jsx(Ws,{"aria-label":"Hide Until Restart",checked:!1,onChange:M=>{M.target.checked&&$()}})]})]}),e.jsx("div",{className:q.divider}),e.jsxs("div",{className:q.settingsSection,children:[e.jsx("div",{className:`${q.settingsLabel} ${q.settingsLabelMarker}`,children:"Marker Color"}),e.jsx("div",{className:q.colorOptions,children:fo.map(M=>e.jsx("button",{className:`${q.colorOption} ${n.annotationColorId===M.id?q.selected:""}`,style:{"--swatch":M.srgb,"--swatch-p3":M.p3},onClick:()=>o({annotationColorId:M.id}),title:M.label,"aria-label":M.label,type:"button"},M.id))})]}),e.jsx("div",{className:q.divider}),e.jsxs("div",{className:q.settingsSection,children:[e.jsx(Ci,{className:"checkbox-field",label:"Clear on copy/send",checked:n.autoClearAfterCopy,onChange:M=>o({autoClearAfterCopy:M.target.checked}),tooltip:"Automatically clear annotations after copying"}),e.jsx(Ci,{className:q.checkboxField,label:"Block page interactions",checked:n.blockInteractions,onChange:M=>o({blockInteractions:M.target.checked})})]}),e.jsx("div",{className:q.divider}),e.jsxs("button",{className:q.settingsNavLink,ref:T,onClick:M=>{I.current=M.detail===0,M.currentTarget.blur(),w("automations")},children:[e.jsx("span",{children:"Manage MCP & Webhooks"}),e.jsxs("span",{className:q.settingsNavLinkRight,children:[h&&a!=="disconnected"&&e.jsx("span",{className:`${q.mcpNavIndicator} ${q[a]}`}),e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M7.5 12.5L12 8L7.5 3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})]}),e.jsxs("div",{className:`${q.settingsPage} ${q.automationsPage} ${p==="automations"?q.slideIn:""}`,ref:M=>{M?.toggleAttribute("inert",p!=="automations")},"aria-hidden":p!=="automations",children:[e.jsxs("button",{className:q.settingsBackButton,ref:x,"aria-label":"Back to settings",onClick:M=>{I.current=M.detail===0,M.currentTarget.blur(),w("main")},children:[e.jsx(ha,{size:16}),e.jsx("span",{children:"Manage MCP & Webhooks"})]}),e.jsx("div",{className:q.divider}),e.jsxs("div",{className:q.settingsSection,children:[e.jsxs("div",{className:q.settingsRow,children:[e.jsxs("span",{className:q.automationHeader,children:["MCP Connection",e.jsx($n,{content:"Connect via Model Context Protocol to let AI agents like Claude Code receive annotations in real-time."})]}),h&&e.jsx("div",{className:`${q.mcpStatusDot} ${q[a]}`,title:a==="connected"?"Connected":a==="connecting"?"Connecting...":"Disconnected"})]}),e.jsxs("p",{className:q.automationDescription,style:{paddingBottom:6},children:["MCP connection allows agents to receive and act on annotations."," ",e.jsx("a",{href:"https://agentation.com/mcp",target:"_blank",rel:"noopener noreferrer",className:q.learnMoreLink,children:"Learn more"})]})]}),e.jsx("div",{className:q.divider}),e.jsxs("div",{className:`${q.settingsSection} ${q.settingsSectionGrow}`,children:[e.jsxs("div",{className:q.settingsRow,children:[e.jsxs("span",{className:q.automationHeader,children:["Webhooks",e.jsx($n,{content:"Send annotation data to any URL endpoint when annotations change. Useful for custom integrations."})]}),e.jsxs("div",{className:q.autoSendContainer,children:[e.jsx("label",{htmlFor:"agentation-auto-send",className:`${q.autoSendLabel} ${n.webhooksEnabled?q.active:""} ${n.webhookUrl?"":q.disabled}`,children:"Auto-Send"}),e.jsx(Ws,{id:"agentation-auto-send",checked:n.webhooksEnabled,onChange:M=>o({webhooksEnabled:M.target.checked}),disabled:!n.webhookUrl})]})]}),e.jsx("p",{className:q.automationDescription,children:"The webhook URL will receive live annotation changes and annotation data."}),e.jsx("textarea",{className:q.webhookUrlInput,placeholder:"Webhook URL","aria-label":"Webhook URL",value:n.webhookUrl,onKeyDown:M=>M.stopPropagation(),onChange:M=>o({webhookUrl:M.target.value})})]})]})]})})});function Kd({x:t,y:n,elementName:o,reactComponents:s}){const r=l.useRef(null);return l.useLayoutEffect(()=>{const i=r.current;if(!i)return;const a=()=>{const h=i.offsetWidth,d=i.offsetHeight;i.style.left=`${Math.max(8,Math.min(t,window.innerWidth-h-8))}px`;const g=n-d-8;i.style.top=`${Math.max(8,Math.min(g,window.innerHeight-d-8))}px`};return a(),window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)},[t,n,o,s]),e.jsxs("div",{ref:r,className:`${L.hoverTooltip} ${L.enter}`,children:[s&&e.jsx("div",{className:L.hoverReactPath,children:s}),e.jsx("div",{className:L.hoverElementName,children:o})]})}var Jd=`@charset "UTF-8";
/* Reset box-model and set borders */
/* ============================================ */
*,
::before,
::after {
  border-width: 0;
  border-style: solid;
  box-sizing: border-box;
}

/* Document */
/* ============================================ */
/**
 * 1. Correct line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 * 3. Remove gray overlay on links for iOS.
 * 4. Render kerning consistently in all browsers.
 * 5. Correct font smoothing for macOS.
 */
:host {
  /* Inherited properties cross the shadow boundary, so a host page's
     text-transform, letter-spacing or font would otherwise restyle the UI. */
  font: 400 16px/1.5 system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-variant: normal;
  color: initial;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-align: start;
  text-indent: 0;
  text-shadow: none;
  white-space: normal;
  direction: ltr;
  writing-mode: horizontal-tb;
  hyphens: manual;
  word-break: normal;
  overflow-wrap: normal;
  tab-size: 8;
  list-style: none;
  quotes: initial;
  caret-color: auto;
  user-select: auto;
  -webkit-text-fill-color: initial;
  -webkit-text-stroke: 0;
  text-rendering: auto;
  -webkit-text-size-adjust: 100%; /* 2 */
  -webkit-tap-highlight-color: transparent; /* 3 */
  font-feature-settings: "kern"; /* 4 */
  -webkit-font-feature-settings: "kern"; /* 5 */
  -moz-font-feature-settings: "kern"; /* 5 */
  -webkit-font-smoothing: antialiased; /* 5 */
  -moz-osx-font-smoothing: grayscale; /* 5 */
}

/* Vertical rhythm */
/* ============================================ */
p,
table,
blockquote,
address,
pre,
iframe,
form,
figure,
dl {
  margin: 0;
}

/* Headings */
/* ============================================ */
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  font-size: inherit;
  font-weight: inherit;
}

/* Lists (enumeration) */
/* ============================================ */
ul,
ol,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/* Lists (definition) */
/* ============================================ */
dd {
  margin-left: 0;
}

/* Grouping content */
/* ============================================ */
/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */
hr {
  clear: both;
  margin: 0;
  border-top-width: 1px;
  height: 0; /* 1 */
  box-sizing: content-box; /* 1 */
  overflow: visible; /* 2 */
  color: inherit;
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 * 3. Wrap lines by default instead of overflow.
 */
pre {
  font-family: inherit; /* 1 */
  font-size: inherit; /* 2 */
  white-space: pre-line; /* 3 */
}

address {
  font-style: inherit;
}

/* Text-level semantics */
/* ============================================ */
/**
 * Remove the gray background on active links in IE 10.
 */
a {
  background-color: transparent;
  text-decoration: none;
  color: inherit;
}

/**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */
abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: none; /* 2 */
}

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */
b,
strong {
  font-weight: bolder;
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */
code,
kbd,
samp {
  font-family: "Menlo", "Monaco", "Consolas", "Courier New", monospace; /* 1 */
  font-size: inherit; /* 2 */
}

/**
 * Add the correct font size in all browsers.
 */
small {
  font-size: 80%;
}

/**
 * Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
 */
sub,
sup {
  position: relative;
  vertical-align: baseline;
  line-height: 0;
  font-size: 75%;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/* Replaced content */
/* ============================================ */
/**
 * Prevent vertical alignment issues.
 */
svg,
img,
embed,
object,
iframe {
  vertical-align: bottom;
}

/*
 * 1. Remove image default bottom space.
 * 2. Prevent image from overflowing the container.
 */
img {
  display: block;
  max-width: 100%;
}

/**
 * Prevent alignment issues on Safari.
 */
@supports (background: -webkit-named-image(i)) {
  svg {
    will-change: transform;
  }
}
/* Forms */
/* ============================================ */
/**
 * Reset form fields to make them styleable.
 * 1. Make form elements stylable across systems iOS especially.
 * 2. Inherit text-transform from parent.
 */
button,
input,
optgroup,
select,
textarea {
  -webkit-appearance: none; /* 1 */
  appearance: none;
  border-radius: 0;
  margin: 0;
  padding: 0;
  background: transparent;
  vertical-align: middle;
  text-align: inherit;
  text-transform: inherit; /* 2 */
  font: inherit;
  color: inherit;
}

/**
 * Correct cursors for clickable elements.
 */
button,
[type=button],
[type=reset],
[type=submit] {
  cursor: pointer;
}

button:disabled,
[type=button]:disabled,
[type=reset]:disabled,
[type=submit]:disabled {
  cursor: default;
}

/**
 * Clickable labels and selects.
 */
select,
label {
  cursor: pointer;
}

/**
 * Improve outlines for Firefox and unify style with input elements & buttons.
 */
:-moz-focusring {
  outline: auto;
}

select:disabled {
  opacity: inherit;
}

/**
 * 1. Remove padding.
 */
option {
  padding: 0; /* 1 */
}

/**
 * Reset to invisible
 */
fieldset {
  margin: 0;
  padding: 0;
  min-width: 0;
}

legend {
  display: contents;
  padding: 0;
}

/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */
progress {
  vertical-align: baseline;
}

/**
 * Remove the default vertical scrollbar in IE 10+.
 */
textarea {
  overflow: auto;
}

/**
 * Remove increment and decrement buttons in Chrome.
 */
[type=number]::-webkit-inner-spin-button,
[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
}

/**
 * Correct the outline style in Safari.
 */
[type=search] {
  outline-offset: -2px;
}

/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */
[type=search]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
 * Remove the ‘X’ from Chrome and Safari.
 */
[type=search]::-webkit-search-decoration,
[type=search]::-webkit-search-cancel-button,
[type=search]::-webkit-search-results-button,
[type=search]::-webkit-search-results-decoration {
  display: none;
}

/**
 * 1. Hide file input completely.
 * 2. Remove selected file text.
 * 3. Set cursor to pointer for all browsers.
 */
[type=file] {
  opacity: 0; /* 1 */
  font-size: 0; /* 2 */
  cursor: pointer; /* 3 */
}

/**
	* Fix appearance for Firefox
	*/
[type=number] {
  -moz-appearance: textfield;
}

/**
 * Set cursor to pointer for all browsers.
 */
[type=range] {
  cursor: pointer;
}

/**
 * Reset slider thumbs to make them styleable.
 */
[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
}

[type=range]::-moz-range-thumb {
  -moz-appearance: none;
  appearance: none;
  border-width: 0;
  border-radius: 0;
  background-color: transparent;
}

/* Interactive */
/* ============================================ */
/*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */
details {
  display: block;
}

/*
 * Add the correct display in all browsers.
 */
summary {
  display: list-item;
}

/*
 * Remove outline for editable content.
 */
[contenteditable]:focus {
  outline: auto;
}

/* Tables */
/* ============================================ */
/**
1. Correct table border color inheritance in all Chrome and Safari.
*/
table {
  border-color: inherit; /* 1 */
  border-collapse: collapse;
}

caption {
  text-align: left;
}

td,
th {
  vertical-align: top;
  padding: 0;
}

th {
  text-align: left;
  font-weight: inherit;
}

/* Misc */
/* ============================================ */
/*
 * Make placeholder style consistent across all browsers.
 */
::placeholder {
  color: #999;
  opacity: 1;
}

/*
 * Hide focus outline but keep it visible for Windows High Contrast Mode.
 */
:focus {
  outline-style: solid;
  outline-color: transparent;
}

/*
 * Hide input arrow when used with datalist.
 */
::-webkit-calendar-picker-indicator {
  display: none !important;
}`,Zd=[Jd,ga,Pi,Ud,Lc,fa,ss,Yd,Fd,qd,Gd,Xd].join(`
`);function Ko(t,n="filtered",o){const{name:s,path:r}=Hn(t,o);if(n==="off")return{name:s,elementName:s,path:r,reactComponents:null};const i=Cd(t,{mode:n});return{name:i.path?`${i.path} ${s}`:s,elementName:s,path:r,reactComponents:i.path}}var Mi=!1,Hs={outputDetail:"standard",autoClearAfterCopy:!1,annotationColorId:"blue",blockInteractions:!0,reactEnabled:!0,markerClickBehavior:"edit",webhookUrl:"",webhooksEnabled:!0},$i=t=>{if(!t||!t.trim())return!1;try{const n=new URL(t.trim());return n.protocol==="http:"||n.protocol==="https:"}catch{return!1}},un=t=>t.metaKey||t.ctrlKey,fo=[{id:"indigo",label:"Indigo",srgb:"#6155F5",p3:"color(display-p3 0.38 0.33 0.96)"},{id:"blue",label:"Blue",srgb:"#0088FF",p3:"color(display-p3 0.00 0.53 1.00)"},{id:"cyan",label:"Cyan",srgb:"#00C3D0",p3:"color(display-p3 0.00 0.76 0.82)"},{id:"green",label:"Green",srgb:"#34C759",p3:"color(display-p3 0.20 0.78 0.35)"},{id:"yellow",label:"Yellow",srgb:"#FFCC00",p3:"color(display-p3 1.00 0.80 0.00)"},{id:"orange",label:"Orange",srgb:"#FF8D28",p3:"color(display-p3 1.00 0.55 0.16)"},{id:"red",label:"Red",srgb:"#FF383C",p3:"color(display-p3 1.00 0.22 0.24)"}],e_=[...fo.map(t=>`
    [data-agentation-accent="${t.id}"] {
      --agentation-color-accent: ${t.srgb};
    }
    @supports (color: color(display-p3 0 0 0)) {
      [data-agentation-accent="${t.id}"] {
        --agentation-color-accent: ${t.p3};
      }
    }
  `),`:host {
    ${fo.map(t=>`--agentation-color-${t.id}: ${t.srgb};`).join(`
`)}
  }`,`@supports (color: color(display-p3 0 0 0)) {
    :host {
      ${fo.map(t=>`--agentation-color-${t.id}: ${t.p3};`).join(`
`)}
    }
  }`].join("");function Ys(t){let n=t;for(let s=$t(n.ownerDocument);s;s=$t(n.ownerDocument))n=s;let o=n;for(;o&&o!==document.body;){const r=window.getComputedStyle(o).position;if(r==="fixed"||r==="sticky")return!0;o=o.parentElement}return!1}function ho(t){return t.kind!=="placement"&&t.kind!=="rearrange"&&t.status!=="resolved"&&t.status!=="dismissed"}function Jo(t){const n=Ks(t),o=n.found?n:Pd(t);if(o.found&&o.source)return Bd(o.source,"path")}function t_(t={}){const n=Vl(t.useHashLocation??!1),o=l.useState(!1),s=Zl(t.portalContainer);return s?Js.createPortal(l.createElement(n_,{...t,key:t.useHashLocation?n:void 0,pathname:n,activeState:o,portalHost:s}),s):null}function n_({pathname:t,activeState:n,portalHost:o,useHashLocation:s=!1,appName:r,enableKeyboardShortcuts:i=!0,identifyingAttributes:a=er,copyFormat:h="markdown",onOpenSource:d,portalContainer:g,demoAnnotations:f,demoDelay:p=1e3,enableDemoMode:w=!1,onAnnotationAdd:$,onAnnotationDelete:v,onAnnotationUpdate:T,onAnnotationsClear:x,onCopy:I,onSubmit:G,copyToClipboard:M=!0,endpoint:B,sessionId:we,onSessionCreated:Ne,webhookUrl:U,className:Oe}){const[z,me]=n,[,ne]=l.useState(0),[W]=l.useState(()=>Ol(document,()=>ne(c=>c+1)));l.useEffect(()=>(W.start(),()=>W.stop()),[W]);const ke=typeof h=="object"?h.attribute:void 0,Q=l.useMemo(()=>ke?[...a,ke]:a,[a,ke]),V=l.useRef(!0);l.useLayoutEffect(()=>(V.current=!0,()=>{V.current=!1}),[]);const oe=l.useCallback(c=>s?Kl(JSON.stringify([B,t]),c):c(),[B,t,s]),ot=l.useRef(new Map),$e=l.useRef(new Set),ze=c=>ho(c)&&!$e.current.has(c.id),Re=async(...c)=>{const _=await gi(...c),m=c[2],y=m.id;if(y&&(ot.current.set(y,_.id),$e.current.has(y)&&$e.current.add(_.id)),!s){const S=new URL(m.url||window.location.href).pathname,k=_n(S).find(C=>C.id===y);try{if($e.current.has(y))await qo(c[0],_.id);else if(k&&k.comment!==m.comment)return await Os(c[0],_.id,{comment:k.comment}),{..._,comment:k.comment}}catch(C){console.warn("[Agentation] Failed to apply changes made during sync:",C)}}return _},Ze=c=>s?{...c,annotations:c.annotations.filter(_=>!$e.current.has(_.id)&&Jl(_.url||c.url,t,window.location.origin))}:c,ht=l.useRef(t);ht.current=t;const kt=(c,_,m,y=t)=>{const S=Ll(c,_n(y),_,ot.current).filter(ze);y===ht.current&&V.current&&Pt(S),Bs(y,S,m)},[xe,Pt]=l.useState([]),[Kt,sn]=l.useState(!0),[rn,Yt]=l.useState(()=>ud()),[Jt,Rt]=l.useState(!1);l.useLayoutEffect(()=>{Ei()},[]);const dt=l.useRef(null),Et=l.useRef(null),ln=l.useRef(null),Xt=l.useRef(null),Zt=l.useRef(!1),H=l.useRef(!1),te=l.useRef(!1);l.useLayoutEffect(()=>{z&&Zt.current?(Zt.current=!1,ln.current?.querySelector("button:not(:disabled)")?.focus()):!z&&H.current&&(H.current=!1,Et.current?.focus())},[z]),l.useEffect(()=>{const c=m=>{const y=dt.current;y&&m.composedPath().includes(y)&&m.stopPropagation()},_=["mousedown","click","pointerdown"];return _.forEach(m=>o.addEventListener(m,c)),()=>{_.forEach(m=>o.removeEventListener(m,c))}},[o]);const[fe,ve]=l.useState(!1),[ce,Ue]=l.useState(!1),[De,de]=l.useState(null),[He,lt]=l.useState({x:0,y:0}),[P,b]=l.useState(null),[j,N]=l.useState(!1),A=Kr(),K=Kr(),[Y,O]=l.useState("idle"),[_e,pe]=l.useState(!1),je=l.useRef(new Set),Qe=l.useRef(new Set),Ve=l.useRef(),Te=l.useCallback(()=>{!je.current.size&&!Ve.current&&pe(!1)},[]);l.useEffect(()=>()=>clearTimeout(Ve.current),[]);const[Be,Ee]=l.useState(null),[Ke,et]=l.useState(null),[Se,ae]=l.useState([]),[qe,_t]=l.useState(null),bt=l.useRef(null);l.useEffect(()=>()=>{bt.current&&clearTimeout(bt.current)},[]);const[J,jt]=l.useState(null),St=l.useRef(null),Ct=l.useRef(!1),[hn,en]=l.useState(!1);l.useLayoutEffect(()=>{if(J||!St.current)return;const c=St.current;if(St.current=null,P)return;(z&&c.isConnected&&!c.disabled?c:Et.current)?.focus({preventScroll:!0})},[J,z,P]);const[At,It]=l.useState(null),[Un,Qn]=l.useState([]),[mn,cr]=l.useState(0),[dr,_r]=l.useState(!1),[Ye,el]=l.useState(!1),[Nt,ur]=l.useState(!1),[gt,pn]=l.useState(!1),[tl,hr]=l.useState("main"),[mr,rs]=l.useState(!1),[Pe,is]=l.useState(!1),[fn,qn]=l.useState(!1),[Me,tn]=l.useState([]),[En,gn]=l.useState(null),ls=l.useRef(!1),[nt,pr]=l.useState(!1),[fr,as]=l.useState(!1),[gr,nl]=l.useState(1),[yr,o_]=l.useState("new-page"),[yt,xo]=l.useState(""),[ol,sl]=l.useState(!1),[se,Ut]=l.useState(null),cs=l.useRef(!1),ds=l.useRef({rearrange:null,placements:[]}),yn=l.useRef({rearrange:null,placements:[]}),[rl,xr]=l.useState(0),[il,ll]=l.useState(0),[In,br]=l.useState([]),[Nn,wr]=l.useState(null),vr=l.useRef({designPlacements:Me,rearrangeState:se,blankCanvas:nt,wireframePurpose:yt});vr.current={designPlacements:Me,rearrangeState:se,blankCanvas:nt,wireframePurpose:yt};const Ln=l.useRef({placements:In,rearrange:Nn}),Gn=l.useRef(new Set),bo=l.useRef(new Set),Ot=l.useRef(null),Tn=l.useRef(),kr=Pe&&z&&!fn&&nt;l.useEffect(()=>{if(kr){as(!1);const c=ts(()=>{as(!0)});return()=>cancelAnimationFrame(c)}else as(!1)},[kr]);const _s=l.useRef(new Map),us=l.useRef([]),hs=l.useRef(new Map),xn=l.useRef(null),[Lt,ms]=l.useState(!1),[zt,al]=l.useState([]),ps=l.useRef(zt);ps.current=zt;const[jr,s_]=l.useState(null),fs=l.useRef(null);l.useRef(!1),l.useRef([]),l.useRef(0),l.useRef(null),l.useRef(null),l.useRef(1);const[gs,Sr]=l.useState(!1),Dn=l.useRef(null),[Mt,an]=l.useState([]),Vn=l.useRef(!1),xt=()=>{rs(!0)},cl=()=>{rs(!1)},Cr=()=>{gs||(Dn.current=We(()=>Sr(!0),850))},Mr=()=>{Dn.current&&(clearTimeout(Dn.current),Dn.current=null),Sr(!1),cl()};l.useEffect(()=>()=>{Dn.current&&clearTimeout(Dn.current)},[]);const[Ge,dl]=l.useState(()=>{try{const c=JSON.parse(localStorage.getItem("feedback-toolbar-settings")??"");return{...Hs,...c,annotationColorId:fo.find(_=>_.id===c.annotationColorId)?c.annotationColorId:Hs.annotationColorId}}catch{return Hs}}),[Qt,$r]=l.useState(!0),[Rr,Er]=l.useState(!1),_l=l.useCallback(c=>{dl(_=>({..._,...c}))},[]),ul=l.useCallback(()=>{dt.current?.classList.add(L.disableTransitions),$r(c=>!c),ts(()=>{dt.current?.classList.remove(L.disableTransitions)})},[]),hl=!1,nn="off",[ut,ys]=l.useState(s?null:we??null),Ir=l.useRef(!1),[bn,wn]=l.useState(B?"connecting":"disconnected"),[rt,xs]=l.useState(null),[wo,Nr]=l.useState(!1),Kn=l.useRef(null),vo=l.useRef(!1),vn=l.useRef(new Set),ko=l.useRef(new Map),Lr=l.useCallback(c=>{vn.current.add(c),Ft.current===c&&(Ft.current=null)},[]),[cn,jo]=l.useState(new Set),[Tt,Jn]=l.useState(!1),[kn,Bn]=l.useState(!1),[on,bs]=l.useState(!1),jn=l.useRef(null),Dt=l.useRef(null),Zn=l.useRef(null),Pn=l.useRef(null),eo=l.useRef(!1),Tr=l.useRef(0),Ft=l.useRef(null),Dr=l.useRef(null),ws=8,ml=50,vs=l.useRef(null),So=l.useRef(null),to=l.useRef(null),pl=l.useCallback(()=>hr("main"),[]);l.useEffect(()=>{gt||rs(!1)},[gt]),l.useLayoutEffect(()=>{gt&&te.current&&(te.current=!1,dt.current?.querySelector("[data-agentation-settings-panel] button")?.focus())},[gt]);const Co=z&&Kt&&!Pe;l.useEffect(()=>{if(Co)Ue(!1),ve(!0),vn.current.clear();else if(fe){Ue(!0);const c=We(()=>{ve(!1),Ue(!1)},250);return()=>clearTimeout(c)}},[Co]),l.useEffect(()=>{el(!0),cr(window.scrollY);const c=_n(t);Pt(c.filter(ho)),Mi||(Er(!0),Mi=!0,We(()=>Er(!1),750));try{const _=localStorage.getItem("feedback-toolbar-theme");_!==null&&$r(_==="dark")}catch{}try{const _=localStorage.getItem("feedback-toolbar-position");if(_){const m=JSON.parse(_);typeof m.x=="number"&&typeof m.y=="number"&&xs(m)}}catch{}},[t]),l.useEffect(()=>{Ye&&localStorage.setItem("feedback-toolbar-settings",JSON.stringify(Ge))},[Ge,Ye]),l.useEffect(()=>{Ye&&localStorage.setItem("feedback-toolbar-theme",Qt?"dark":"light")},[Qt,Ye]);const Br=l.useRef(!1);l.useEffect(()=>{const c=Br.current;Br.current=wo,c&&!wo&&rt&&Ye&&localStorage.setItem("feedback-toolbar-position",JSON.stringify(rt))},[wo,rt,Ye]),l.useEffect(()=>{if(!B||!Ye||Ir.current)return;Ir.current=!0,wn("connecting");const c=window.location.href;oe(async()=>{try{const m=dd(t),y=we||m;let S=!1;if(y)try{const k=_n(t),C=Ze(await fi(B,y));us.current=C.annotations.filter(re=>re.kind==="placement"||re.kind==="rearrange"),V.current&&(ys(C.id),wn("connected")),Ps(t,C.id),S=!0;const F=_n(t).filter(ho),ee=new Set(C.annotations.map(re=>re.id)),ie=F.filter(re=>!ee.has(re.id));if(ie.length>0){const le=`${typeof window<"u"?window.location.origin:""}${t}`,Ie=(await Promise.allSettled(ie.map(ue=>Re(B,C.id,{...ue,sessionId:C.id,url:le})))).map((ue,ge)=>ue.status==="fulfilled"?ue.value:(console.warn("[Agentation] Failed to sync annotation:",ue.reason),ie[ge])),Z=[...C.annotations,...Ie];kt(k,Z,C.id)}else kt(k,C.annotations,C.id)}catch(k){console.warn("[Agentation] Could not join session, creating new:",k),_d(t)}if(!S){const k=await As(B,c);Ps(t,k.id),V.current&&(ys(k.id),wn("connected"),Ne?.(k.id));const C=s?new Map([[t,_n(t)]]):nd(),F=typeof window<"u"?window.location.origin:"",ee=[];for(const[ie,re]of C){const le=re.filter(Z=>ho(Z)&&!Z._syncedTo);if(le.length===0)continue;const be=`${F}${ie}`,Ie=ie===t;ee.push((async()=>{try{const Z=Ie?k:await As(B,be),ge=(await Promise.allSettled(le.map(Ae=>Re(B,Z.id,{...Ae,sessionId:Z.id,url:be})))).map((Ae,st)=>Ae.status==="fulfilled"?Ae.value:(console.warn("[Agentation] Failed to sync annotation:",Ae.reason),le[st]));kt(le,ge,Z.id,ie)}catch(Z){console.warn(`[Agentation] Failed to sync annotations for ${ie}:`,Z)}})())}await Promise.allSettled(ee)}}catch(m){V.current&&wn("disconnected"),console.warn("[Agentation] Failed to initialize session, using local storage:",m)}})},[B,we,Ye,Ne,t,oe]),l.useEffect(()=>{if(!B||!Ye)return;const c=async()=>{try{(await fetch(`${B}/health`)).ok?wn("connected"):wn("disconnected")}catch{wn("disconnected")}};c();const _=Ii(c,1e4);return()=>clearInterval(_)},[B,Ye]);const Mo=l.useRef(xe),Pr=l.useRef(!1);l.useLayoutEffect(()=>{Mo.current=xe,Pr.current=xe.length>0||Me.length>0||(se?.sections.length??0)>0},[xe,Me.length,se?.sections.length]);const ks=l.useCallback(c=>{const _=je.current.has(c);if(_&&(Qe.current.delete(c),Qe.current.size))return;const m=_?new Set(je.current):new Set([c]);_&&(je.current.clear(),Te());for(const k of m)ko.current.delete(k),vn.current.delete(k);Pt(k=>k.filter(C=>!m.has(C.id))),jo(k=>new Set([...k].filter(C=>!m.has(C))));const y=_?[]:Mo.current.filter(k=>k.kind!=="placement"&&k.kind!=="rearrange"),S=y.findIndex(k=>k.id===c);S>=0&&S<y.length-1&&(_t(k=>k===null?S:Math.min(k,S)),bt.current&&clearTimeout(bt.current),bt.current=We(()=>_t(null),200))},[Te]);l.useEffect(()=>!B||!Ye||!ut?void 0:zd(B,ut,()=>Pr.current,m=>{const{id:y,kind:S}=m;if(S==="placement"){for(const[k,C]of _s.current)if(C===y){xn.current?.placements.forget(k),tn(F=>F.filter(ee=>ee.id!==k));break}}else if(S==="rearrange"){for(const[k,C]of hs.current)if(C===y){xn.current?.rearrange.forget(k),Ut(F=>{if(!F)return null;const ee=F.sections.filter(ie=>ie.id!==k);return ee.length===0?null:{...F,sections:ee}});break}}else{if(!Mo.current.some(k=>k.id===y))return;jo(k=>new Set(k).add(y))}}),[B,Ye,ut]),l.useEffect(()=>{if(!B||!Ye)return;const c=Dr.current==="disconnected",_=bn==="connected";Dr.current=bn,c&&_&&oe(async()=>{try{const y=_n(t).filter(ho);if(y.length===0)return;const k=`${typeof window<"u"?window.location.origin:""}${t}`;let C=ut,F=[];if(C)try{F=Ze(await fi(B,C)).annotations}catch{C=null}C||(C=(await As(B,k)).id,V.current&&ys(C),Ps(t,C));const ee=new Set(F.map(re=>re.id)),ie=y.filter(re=>!ee.has(re.id));if(ie.length>0){const le=(await Promise.allSettled(ie.map(Ie=>Re(B,C,{...Ie,sessionId:C,url:k})))).map((Ie,Z)=>Ie.status==="fulfilled"?Ie.value:(console.warn("[Agentation] Failed to sync annotation on reconnect:",Ie.reason),ie[Z])),be=[...F,...le];kt(y,be,C)}}catch(y){console.warn("[Agentation] Failed to sync on reconnect:",y)}})},[bn,B,Ye,ut,t,oe]);const fl=l.useCallback(()=>{Jt||(Rt(!0),pn(!1),me(!1),We(()=>{hd(!0),Yt(!0),Rt(!1)},400))},[Jt]);l.useEffect(()=>{if(!w||!Ye||!f||f.length===0||xe.length>0)return;const c=[];return c.push(We(()=>{me(!0)},p-200)),f.forEach((_,m)=>{const y=p+m*300;c.push(We(()=>{const S=document.querySelector(_.selector);if(!S)return;const k=ct(S),{name:C,path:F}=Hn(S),ee={id:`demo-${Date.now()}-${m}`,x:(k.left+k.width/2)/window.innerWidth*100,y:k.top+k.height/2+window.scrollY,comment:_.comment,element:C,elementPath:F,timestamp:Date.now(),selectedText:_.selectedText,boundingBox:{x:k.left,y:k.top+window.scrollY,width:k.width,height:k.height},nearbyText:lo(S),cssClasses:ao(S)};Pt(ie=>[...ie,ee])},y))}),()=>{c.forEach(clearTimeout)}},[w,Ye,f,p]),l.useEffect(()=>{const c=()=>{cr(window.scrollY),ne(_=>_+1),_r(!0),to.current&&clearTimeout(to.current),to.current=We(()=>{_r(!1)},150)};return W.addEventListener("scroll",c,{passive:!0,capture:!0}),()=>{W.removeEventListener("scroll",c,!0),to.current&&clearTimeout(to.current)}},[W]),l.useEffect(()=>{if(!Ye)return;const c=xe.filter(_=>!cn.has(_.id));c.length>0?ut?Bs(t,c,ut):Ki(t,c):localStorage.removeItem(sr(t))},[xe,t,Ye,ut,_e,cn]),l.useEffect(()=>{if(Ye&&!ls.current){ls.current=!0;const c=od(t);c.length>0&&tn(c)}},[Ye,t]),l.useEffect(()=>{if(Ye&&ls.current&&!nt){const c=Me.filter(_=>!In.includes(_));c.length>0?sd(t,c):rd(t)}},[Me,t,Ye,nt,In]),l.useEffect(()=>{if(Ye&&!cs.current){cs.current=!0;const c=id(t);if(c){const _={...c,sections:c.sections.map(m=>({...m,currentRect:m.currentRect??{...m.originalRect}}))};Ut(_)}}},[Ye,t]),l.useEffect(()=>{Ye&&cs.current&&!nt&&(se&&se!==Nn?ld(t,se):ad(t))},[se,t,Ye,nt,Nn]);const js=l.useRef(!1);l.useEffect(()=>{if(Ye&&!js.current){js.current=!0;const c=cd(t);c&&(yn.current={rearrange:c.rearrange,placements:c.placements||[]},c.purpose&&xo(c.purpose))}},[Ye,t]),l.useEffect(()=>{if(!Ye||!js.current||_e)return;const c=yn.current;nt?(se?.sections?.length??0)>0||Me.length>0||yt?pi(t,{rearrange:se,placements:Me,purpose:yt}):Qo(t):(c.rearrange?.sections?.length??0)>0||c.placements.length>0||yt?pi(t,{rearrange:c.rearrange,placements:c.placements,purpose:yt}):Qo(t)},[se,Me,yt,nt,t,Ye,_e]),l.useEffect(()=>{Pe&&!se&&Ut({sections:[],originalOrder:[],detectedAt:Date.now()})},[Pe,se]),l.useEffect(()=>{if(!B||!ut)return;const c={create:m=>oe(()=>gi(B,ut,m)),update:(m,y)=>oe(()=>Os(B,m,y)),remove:m=>oe(()=>qo(B,m))};_s.current=new Map,hs.current=new Map;const _={placements:ki(c,_s.current,us.current.filter(m=>m.kind==="placement")),rearrange:ki(c,hs.current,us.current.filter(m=>m.kind==="rearrange"))};return xn.current=_,()=>{_.placements.dispose(),_.rearrange.dispose(),xn.current===_&&(xn.current=null)}},[B,ut,t,oe]),l.useEffect(()=>{const c=window.location.pathname+window.location.search+window.location.hash;xn.current?.placements.replace(Me.filter(_=>!In.includes(_)).map(_=>({id:_.id,x:_.x/window.innerWidth*100,y:_.y,comment:`Place ${_.type} at (${Math.round(_.x)}, ${Math.round(_.y)}), ${_.width}×${_.height}px${_.text?` — "${_.text}"`:""}`,element:`[design:${_.type}]`,elementPath:"[placement]",timestamp:_.timestamp,url:c,intent:"change",severity:"important",kind:"placement",placement:{componentType:_.type,width:_.width,height:_.height,scrollY:_.scrollY,text:_.text}})))},[Me,B,ut,t,In]),l.useEffect(()=>{const c=xn.current;if(!c)return;if(se===Nn){c.rearrange.replace([]);return}const _=We(()=>{const m=window.location.pathname+window.location.search+window.location.hash,y=[];for(const S of se?.sections??[]){const k=S.originalRect,C=S.currentRect,F=Math.abs(k.x-C.x)>1||Math.abs(k.y-C.y)>1||Math.abs(k.width-C.width)>1||Math.abs(k.height-C.height)>1;if(!F&&!S.note)continue;const ee=S.note?` — "${S.note}"`:"";y.push({id:S.id,x:C.x/window.innerWidth*100,y:C.y,comment:F?`Move ${S.label} section (${S.tagName}) — from (${Math.round(k.x)},${Math.round(k.y)}) ${Math.round(k.width)}×${Math.round(k.height)} to (${Math.round(C.x)},${Math.round(C.y)}) ${Math.round(C.width)}×${Math.round(C.height)}${ee}`:`Note on ${S.label} section (${S.tagName})${ee}`,element:S.selector,elementPath:"[rearrange]",timestamp:se.detectedAt,url:m,intent:"change",severity:"important",kind:"rearrange",rearrange:{selector:S.selector,label:S.label,tagName:S.tagName,originalRect:k,currentRect:C}})}c.rearrange.replace(y)},300);return()=>clearTimeout(_)},[se,B,ut,t,Nn]);const Ss=l.useCallback(()=>{clearTimeout(Tn.current),qn(!1),is(!0)},[]);l.useEffect(()=>()=>clearTimeout(Tn.current),[]);const no=l.useCallback(()=>{qn(!0),is(!1),gn(null),clearTimeout(Tn.current),Tn.current=We(()=>{qn(!1)},300)},[]),$o=l.useCallback(()=>{const c=Et.current?.getRootNode();H.current=!!c?.activeElement&&!!dt.current?.contains(c.activeElement),H.current&&c?.activeElement?.blur(),pn(!1),Pe&&(qn(!0),is(!1),gn(null),clearTimeout(Tn.current),Tn.current=We(()=>{qn(!1)},300)),me(!1)},[Pe]),Ar=l.useCallback(()=>{Nt||(Nl(),ur(!0))},[Nt]),Ro=l.useCallback(()=>{Nt&&(Vr(),ur(!1))},[Nt]),Cs=l.useCallback(()=>{Nt?Ro():Ar()},[Nt,Ar,Ro]),oo=l.useCallback((c=Mt)=>{const _=c.filter(C=>C.element.isConnected);if(_.length===0){an([]);return}const m=_[0],y=m.element,S=_.length>1,k=_.map(C=>ct(C.element));if(S){const C={left:Math.min(...k.map(ge=>ge.left)),top:Math.min(...k.map(ge=>ge.top)),right:Math.max(...k.map(ge=>ge.right)),bottom:Math.max(...k.map(ge=>ge.bottom))},F=_.slice(0,5).map(ge=>ge.name).join(", "),ee=_.length>5?` +${_.length-5} more`:"",ie=k.map(ge=>({x:ge.left,y:ge.top+window.scrollY,width:ge.width,height:ge.height})),le=_[_.length-1].element,be=k[k.length-1],Ie=be.left+be.width/2,Z=be.top+be.height/2,ue=Ys(le);b({id:Date.now().toString(),x:Ie/window.innerWidth*100,y:ue?Z:Z+window.scrollY,clientY:Z,element:`${_.length} elements: ${F}${ee}`,elementPath:"multi-select",boundingBox:{x:C.left,y:C.top+window.scrollY,width:C.right-C.left,height:C.bottom-C.top},isMultiSelect:!0,isFixed:ue,elementBoundingBoxes:ie,multiSelectElements:_.map(ge=>ge.element),targetElement:le,fullPath:po(y),accessibility:Fo(y),computedStyles:zo(y),computedStylesObj:Oo(y),nearbyElements:Ao(y),cssClasses:ao(y),nearbyText:lo(y),sourceFile:Jo(y),attributes:mo(y,Q)})}else{const C=k[0],F=Ys(y);b({id:Date.now().toString(),x:C.left/window.innerWidth*100,y:F?C.top:C.top+window.scrollY,clientY:C.top,element:m.name,elementPath:m.path,boundingBox:{x:C.left,y:F?C.top:C.top+window.scrollY,width:C.width,height:C.height},isFixed:F,fullPath:po(y),accessibility:Fo(y),computedStyles:zo(y),computedStylesObj:Oo(y),nearbyElements:Ao(y),cssClasses:ao(y),nearbyText:lo(y),reactComponents:m.reactComponents,targetElement:y,sourceFile:Jo(y),attributes:mo(y,Q)})}an([]),de(null)},[Mt,Q]);l.useEffect(()=>{z||(b(null),jt(null),It(null),Qn([]),de(null),pn(!1),an([]),Vn.current=!1,Nt&&Ro())},[z,Nt,Ro]),l.useEffect(()=>()=>{Vr()},[]),l.useEffect(()=>{if(!z)return;const c=["p","span","h1","h2","h3","h4","h5","h6","li","td","th","label","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","u","s","a","time","address","cite","q","abbr","dfn","mark","small","sub","sup","[contenteditable]"].join(", "),_=document.createElement("style");return _.id="agentation-cursor",_.textContent=`
      body { cursor: crosshair !important; }
      body :is(${c}) { cursor: text !important; }
    `,document.head.appendChild(_),()=>{const m=document.getElementById("agentation-cursor");m&&m.remove()}},[z]),l.useEffect(()=>{if(jr!==null&&z)return document.documentElement.setAttribute("data-drawing-hover",""),()=>document.documentElement.removeAttribute("data-drawing-hover")},[jr,z]),l.useEffect(()=>{if(!z||P||J||Lt||Pe)return;let c=null;const _=(k,C,F)=>{const ee=Zo(k,C),ie=F?Zr(k,C):ee;if(!ie||ft(ie,"[data-feedback-toolbar], [data-annotation-popup], [data-annotation-marker]")){de(null);return}const{name:re,elementName:le,path:be,reactComponents:Ie}=Ko(ie,nn,Q);de({element:re,elementName:le,elementPath:be,rect:ct(ie),reactComponents:Ie,isPiercing:F&&ie!==ee}),lt({x:k,y:C})},m=k=>{const C=k.composedPath()[0]||k.target;if(ft(C,"[data-feedback-toolbar], [data-annotation-popup], [data-annotation-marker]")){c=null,de(null);return}c={x:k.clientX,y:k.clientY},_(k.clientX,k.clientY,un(k))},y=k=>{(k.key==="Meta"||k.key==="Control")&&c&&_(c.x,c.y,un(k))},S=()=>{c=null,de(null)};return W.addEventListener("mousemove",m),W.addEventListener("keydown",y),W.addEventListener("keyup",y),W.addEventListener("mouseleave",S),window.addEventListener("blur",S),()=>{W.removeEventListener("mousemove",m),W.removeEventListener("keydown",y),W.removeEventListener("keyup",y),W.removeEventListener("mouseleave",S),window.removeEventListener("blur",S)}},[z,P,J,Lt,Pe,nn,Q]);const Eo=l.useCallback((c,_)=>{if(J&&!kn){So.current?.shake();return}if(P&&!Tt){if(dt.current?.querySelector("[data-annotation-popup]:not([data-annotation-card]) textarea")?.value.trim()){vs.current?.shake();return}Jn(!0)}if(St.current=_??null,Ct.current=_?.matches(":focus-visible")??!1,en(!1),Bn(!1),jt(c),Ee(null),et(null),ae([]),c.elementBoundingBoxes?.length){const m=[];for(const y of c.elementBoundingBoxes){const S=y.x+y.width/2,k=y.y+y.height/2-window.scrollY,C=Wo(S,k,y);C&&m.push(C)}Qn(m),It(null)}else if(c.boundingBox){const m=c.boundingBox,y=m.x+m.width/2,S=c.isFixed?m.y+m.height/2:m.y+m.height/2-window.scrollY,k=Wo(y,S,m);if(k){const C=ct(k),F=C.width/m.width,ee=C.height/m.height;F<.5||ee<.5?It(null):It(k)}else It(null);Qn([])}else It(null),Qn([])},[P,Tt,J,kn]);l.useEffect(()=>{if(!z||Lt||Pe)return;const c=_=>{if(eo.current){eo.current=!1,_.preventDefault(),_.stopPropagation();return}const m=_.composedPath()[0]||_.target;if(ft(m,"[data-feedback-toolbar]")||ft(m,"[data-annotation-popup]")||ft(m,"[data-annotation-marker]"))return;if(un(_)&&!P&&!J){_.preventDefault(),_.stopPropagation(),Vn.current=_.shiftKey;const ge=Zr(_.clientX,_.clientY);if(!ge)return;const Ae=ct(ge),{name:st,path:wt,reactComponents:ye}=Ko(ge,nn,Q),he=Mt.findIndex(Fe=>Fe.element===ge);he>=0?an(Fe=>Fe.filter((it,Vt)=>Vt!==he)):an(Fe=>[...Fe,{element:ge,rect:Ae,name:st,path:wt,reactComponents:ye??void 0}]);return}const y=ft(m,"button, a, input, select, textarea, [role='button'], [onclick]");if(Ge.blockInteractions&&(_.preventDefault(),_.stopPropagation()),P&&!Tt){if(y&&!Ge.blockInteractions)return;_.preventDefault(),vs.current?.shake();return}if(J&&!kn){if(y&&!Ge.blockInteractions)return;_.preventDefault(),So.current?.shake();return}_.preventDefault();const S=Zo(_.clientX,_.clientY);if(!S)return;const{name:k,path:C,reactComponents:F}=Ko(S,nn,Q),ee=ct(S),ie=_.clientX/window.innerWidth*100,re=Ys(S),le=re?_.clientY:_.clientY+window.scrollY,be=S.ownerDocument.defaultView?.getSelection();let Ie;be&&be.toString().trim().length>0&&(Ie=be.toString().trim().slice(0,500));const Z=Oo(S),ue=zo(S);Jn(!1),b({id:Date.now().toString(),x:ie,y:le,clientY:_.clientY,element:k,elementPath:C,selectedText:Ie,boundingBox:{x:ee.left,y:re?ee.top:ee.top+window.scrollY,width:ee.width,height:ee.height},nearbyText:lo(S),cssClasses:ao(S),isFixed:re,fullPath:po(S),accessibility:Fo(S),computedStyles:ue,computedStylesObj:Z,nearbyElements:Ao(S),reactComponents:F??void 0,sourceFile:Jo(S),attributes:mo(S,Q),frame:Dl(S,_.clientX,_.clientY),targetElement:S}),de(null)};return W.addEventListener("click",c,!0),()=>W.removeEventListener("click",c,!0)},[z,Lt,Pe,P,Tt,J,kn,Ge.blockInteractions,nn,Q,Mt]),l.useEffect(()=>{if(!z)return;const c=m=>{const y=(m.key==="Meta"||m.key==="Control")&&!un(m),S=m.key==="Shift"&&Vn.current;(y||S)&&!Dt.current&&Mt.length>0&&oo()},_=()=>{Vn.current=!1,an([]),de(null),jn.current=null,Dt.current=null,bs(!1),Pn.current?.replaceChildren()};return W.addEventListener("keyup",c),window.addEventListener("blur",_),()=>{W.removeEventListener("keyup",c),window.removeEventListener("blur",_)}},[z,Mt,oo]),l.useEffect(()=>{if(!z||P||Lt||Pe)return;const c=_=>{if(_.button!==0)return;eo.current=!1;const m=_.composedPath()[0]||_.target;if(ft(m,"[data-feedback-toolbar]")||ft(m,"[data-annotation-marker]")||ft(m,"[data-annotation-popup]"))return;const y=new Set(["P","SPAN","H1","H2","H3","H4","H5","H6","LI","TD","TH","LABEL","BLOCKQUOTE","FIGCAPTION","CAPTION","LEGEND","DT","DD","PRE","CODE","EM","STRONG","B","I","U","S","A","TIME","ADDRESS","CITE","Q","ABBR","DFN","MARK","SMALL","SUB","SUP"]);!un(_)&&(y.has(m.tagName)||m.isContentEditable)||(_.preventDefault(),jn.current={x:_.clientX,y:_.clientY})};return W.addEventListener("mousedown",c),()=>W.removeEventListener("mousedown",c)},[z,P,Lt,Pe]),l.useEffect(()=>{if(!z||P)return;const c=_=>{if(!jn.current)return;const m=_.clientX-jn.current.x,y=_.clientY-jn.current.y,S=m*m+y*y,k=ws*ws;if(!on&&S>=k&&(Dt.current=jn.current,bs(!0),_.preventDefault()),(on||S>=k)&&Dt.current){if(Zn.current){const ye=Math.min(Dt.current.x,_.clientX),he=Math.min(Dt.current.y,_.clientY),Fe=Math.abs(_.clientX-Dt.current.x),it=Math.abs(_.clientY-Dt.current.y);Zn.current.style.transform=`translate(${ye}px, ${he}px)`,Zn.current.style.width=`${Fe}px`,Zn.current.style.height=`${it}px`}const C=Date.now();if(C-Tr.current<ml)return;Tr.current=C;const F=Dt.current.x,ee=Dt.current.y,ie=Math.min(F,_.clientX),re=Math.min(ee,_.clientY),le=Math.max(F,_.clientX),be=Math.max(ee,_.clientY),Ie=(ie+le)/2,Z=(re+be)/2,ue=new Set,ge=[[ie,re],[le,re],[ie,be],[le,be],[Ie,Z],[Ie,re],[Ie,be],[ie,Z],[le,Z]];for(const[ye,he]of ge){const Fe=document.elementsFromPoint(ye,he);for(const it of Fe)it instanceof HTMLElement&&ue.add(it)}const Ae=W.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th, div, span, section, article, aside, nav");for(const ye of Ae)if(ye instanceof HTMLElement){const he=ct(ye),Fe=he.left+he.width/2,it=he.top+he.height/2,Vt=Fe>=ie&&Fe<=le&&it>=re&&it<=be,Wt=Math.min(he.right,le)-Math.max(he.left,ie),ro=Math.min(he.bottom,be)-Math.max(he.top,re),Bo=Wt>0&&ro>0?Wt*ro:0,mt=he.width*he.height,io=mt>0?Bo/mt:0;(Vt||io>.5)&&ue.add(ye)}const st=[],wt=new Set(["BUTTON","A","INPUT","IMG","P","H1","H2","H3","H4","H5","H6","LI","LABEL","TD","TH","SECTION","ARTICLE","ASIDE","NAV"]);for(const ye of ue){if(ft(ye,"[data-feedback-toolbar]")||ft(ye,"[data-annotation-marker]"))continue;const he=ct(ye);if(!(he.width>window.innerWidth*.8&&he.height>window.innerHeight*.5)&&!(he.width<10||he.height<10)&&he.left<le&&he.right>ie&&he.top<be&&he.bottom>re){const Fe=ye.tagName;let it=wt.has(Fe);if(!it&&(Fe==="DIV"||Fe==="SPAN")){const Vt=ye.textContent&&ye.textContent.trim().length>0,Wt=ye.onclick!==null||ye.getAttribute("role")==="button"||ye.getAttribute("role")==="link"||ye.classList.contains("clickable")||ye.hasAttribute("data-clickable");(Vt||Wt)&&!ye.querySelector("p, h1, h2, h3, h4, h5, h6, button, a")&&(it=!0)}if(it){let Vt=!1;for(const Wt of st)if(Wt.left<=he.left&&Wt.right>=he.right&&Wt.top<=he.top&&Wt.bottom>=he.bottom){Vt=!0;break}Vt||st.push(he)}}}if(Pn.current){const ye=Pn.current;for(;ye.children.length>st.length;)ye.removeChild(ye.lastChild);st.forEach((he,Fe)=>{let it=ye.children[Fe];it||(it=document.createElement("div"),it.className=L.selectedElementHighlight,ye.appendChild(it)),it.style.transform=`translate(${he.left}px, ${he.top}px)`,it.style.width=`${he.width}px`,it.style.height=`${he.height}px`})}}};return W.addEventListener("mousemove",c,{passive:!0}),()=>W.removeEventListener("mousemove",c)},[z,P,on,ws]),l.useEffect(()=>{if(!z)return;const c=_=>{const m=on,y=Dt.current;if(on&&y){eo.current=!0;const S=Math.min(y.x,_.clientX),k=Math.min(y.y,_.clientY),C=Math.max(y.x,_.clientX),F=Math.max(y.y,_.clientY),ee=[];W.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th").forEach(Z=>{if(!(Z instanceof HTMLElement)||ft(Z,"[data-feedback-toolbar]")||ft(Z,"[data-annotation-marker]"))return;const ue=ct(Z);ue.width>window.innerWidth*.8&&ue.height>window.innerHeight*.5||ue.width<10||ue.height<10||ue.left<C&&ue.right>S&&ue.top<F&&ue.bottom>k&&ee.push({element:Z,rect:ue})});const re=ee.filter(({element:Z})=>!ee.some(({element:ue})=>ue!==Z&&Z.contains(ue))),le=_.clientX/window.innerWidth*100,be=_.clientY+window.scrollY,Ie=(un(_)||Mt.length>0)&&!P&&!J;if(re.length>0)if(Ie){const Z=[...Mt];for(const{element:ue,rect:ge}of re){if(Z.some(ye=>ye.element===ue))continue;const{name:Ae,path:st,reactComponents:wt}=Ko(ue,nn,Q);Z.push({element:ue,rect:ge,name:Ae,path:st,reactComponents:wt??void 0})}Vn.current=_.shiftKey,un(_)?an(Z):oo(Z)}else{const Z=re.reduce((ye,{rect:he})=>({left:Math.min(ye.left,he.left),top:Math.min(ye.top,he.top),right:Math.max(ye.right,he.right),bottom:Math.max(ye.bottom,he.bottom)}),{left:1/0,top:1/0,right:-1/0,bottom:-1/0}),ue=re.slice(0,5).map(({element:ye})=>Hn(ye).name).join(", "),ge=re.length>5?` +${re.length-5} more`:"",Ae=re[0].element,st=Oo(Ae),wt=zo(Ae);b({id:Date.now().toString(),x:le,y:be,clientY:_.clientY,element:`${re.length} elements: ${ue}${ge}`,elementPath:"multi-select",boundingBox:{x:Z.left,y:Z.top+window.scrollY,width:Z.right-Z.left,height:Z.bottom-Z.top},isMultiSelect:!0,fullPath:po(Ae),accessibility:Fo(Ae),computedStyles:wt,computedStylesObj:st,nearbyElements:Ao(Ae),cssClasses:ao(Ae),nearbyText:lo(Ae),sourceFile:Jo(Ae),attributes:mo(Ae,Q)})}else if(Ie&&!un(_))oo();else if(!Ie){const Z=Math.abs(C-S),ue=Math.abs(F-k);Z>20&&ue>20&&b({id:Date.now().toString(),x:le,y:be,clientY:_.clientY,element:"Area selection",elementPath:`region at (${Math.round(S)}, ${Math.round(k)})`,boundingBox:{x:S,y:k+window.scrollY,width:Z,height:ue},isMultiSelect:!0})}de(null)}else m&&(eo.current=!0);jn.current=null,Dt.current=null,bs(!1),Pn.current&&(Pn.current.innerHTML="")};return W.addEventListener("mouseup",c),()=>W.removeEventListener("mouseup",c)},[z,on,P,J,nn,Q,Mt,oo]);const qt=l.useCallback(async(c,_,m)=>{const y=Ge.webhookUrl||U;if(!y||!Ge.webhooksEnabled&&!m)return!1;try{return(await fetch(y,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:c,timestamp:Date.now(),url:typeof window<"u"?window.location.href:void 0,..._})})).ok}catch(S){return console.warn("[Agentation] Webhook failed:",S),!1}},[U,Ge.webhookUrl,Ge.webhooksEnabled]),gl=l.useCallback(c=>{if(!P||P.isSubmitted)return;const _={id:P.id,x:P.x,y:P.y,comment:c,element:P.element,elementPath:P.elementPath,timestamp:Date.now(),selectedText:P.selectedText,boundingBox:P.boundingBox,nearbyText:P.nearbyText,cssClasses:P.cssClasses,isMultiSelect:P.isMultiSelect,isFixed:P.isFixed,fullPath:P.fullPath,accessibility:P.accessibility,computedStyles:P.computedStyles,nearbyElements:P.nearbyElements,reactComponents:P.reactComponents,sourceFile:P.sourceFile,attributes:P.attributes,frame:P.frame,elementBoundingBoxes:P.elementBoundingBoxes,...B&&ut?{sessionId:ut,url:typeof window<"u"?window.location.href:void 0,status:"pending"}:{}};Pt(m=>[...m,_]),b({...P,isSubmitted:!0}),Ft.current=_.id,$?.(_),qt("annotation.add",{annotation:_}),Jn(!0),window.getSelection()?.removeAllRanges(),B&&ut&&oe(async()=>{const m=await Re(B,ut,_);if(s){const y=_n(t);Bs(t,y.map(S=>S.id===_.id?{...S,id:m.id}:S),ut)}!V.current||$e.current.has(_.id)||m.id!==_.id&&(ko.current.set(m.id,_.id),Ft.current===_.id&&(Ft.current=m.id),Pt(y=>y.map(S=>S.id===_.id?{...S,id:m.id}:S)),vn.current.delete(_.id)&&vn.current.add(m.id))}).catch(m=>{console.warn("[Agentation] Failed to sync annotation:",m)})},[P,$,qt,B,ut,oe,t,s]),Ms=l.useCallback(()=>{Jn(!0)},[]),$s=l.useCallback(()=>{b(null),Jn(!1)},[]),Rs=l.useCallback(c=>{if($e.current.has(c))return;$e.current.add(c);const _=xe.find(m=>m.id===c);J?.id===c&&(en(!1),Bn(!0)),jo(m=>new Set(m).add(c)),_&&(v?.(_),qt("annotation.delete",{annotation:_})),B&&oe(()=>qo(B,ot.current.get(c)??c)).catch(m=>{console.warn("[Agentation] Failed to delete annotation from server:",m)})},[xe,J,v,qt,B,oe]),Io=l.useCallback(c=>{if(!c){Ee(null),et(null),ae([]);return}if(Ee(c.id),c.elementBoundingBoxes?.length){const _=[];for(const m of c.elementBoundingBoxes){const y=m.x+m.width/2,S=m.y+m.height/2-window.scrollY,k=Wo(y,S,m);k&&_.push(k)}ae(_),et(null)}else if(c.boundingBox){const _=c.boundingBox,m=_.x+_.width/2,y=c.isFixed?_.y+_.height/2:_.y+_.height/2-window.scrollY,S=Wo(m,y,_);if(S){const k=ct(S),C=k.width/_.width,F=k.height/_.height;C<.5||F<.5?et(null):et(S)}else et(null);ae([])}else et(null),ae([])},[]),yl=l.useCallback(c=>{if(!J)return;const _={...J,comment:c};jt(_),Pt(m=>m.map(y=>y.id===J.id?_:y)),T?.(_),qt("annotation.update",{annotation:_}),B&&oe(()=>Os(B,ot.current.get(J.id)??J.id,{comment:c})).catch(m=>{console.warn("[Agentation] Failed to update annotation on server:",m)}),en(Ct.current||!!St.current?.matches(":hover")),Bn(!0)},[J,T,qt,B,oe]),xl=l.useCallback(()=>{en(Ct.current||!!St.current?.matches(":hover")),Bn(!0)},[]),bl=l.useCallback(()=>{hn&&J&&!P&&Ee(J.id),jt(null),It(null),Qn([]),Bn(!1)},[hn,J,P]),No=l.useCallback((c,_)=>{if(!c.length&&!_)return;pe(!0);const m={placements:[...Ln.current.placements,...c],rearrange:_??Ln.current.rearrange};Ln.current=m,br(m.placements),wr(m.rearrange),clearTimeout(Ve.current),Ve.current=We(()=>{tn(y=>y.filter(S=>!m.placements.includes(S))),Ut(y=>y===m.rearrange?null:y),Ln.current={placements:[],rearrange:null},br([]),wr(null),Ve.current=void 0,Te()},200)},[Te]),Sn=l.useCallback(()=>{if(!V.current)return;const c=new Map(Mo.current.map(F=>[F.id,F])),_=[];for(const F of xe){const ee=c.get(ot.current.get(F.id)??F.id)??c.get(F.id);ee&&ee.comment===F.comment&&!$e.current.has(ee.id)&&!_.includes(ee)&&_.push(ee)}const m=_.length,y=vr.current,S=Me.filter(F=>y.designPlacements.includes(F)&&!Ln.current.placements.includes(F)),k=se===y.rearrangeState&&se!==Ln.current.rearrange?se:null,C=zt.filter(F=>ps.current.includes(F));if(!(m===0&&C.length===0&&S.length===0&&!k)){for(const F of _)$e.current.add(F.id),je.current.add(F.id),Qe.current.add(F.id);if(jo(F=>new Set([...F,..._.map(ee=>ee.id)])),x?.(_),qt("annotations.clear",{annotations:_}),B&&Promise.all(_.map(F=>oe(()=>qo(B,ot.current.get(F.id)??F.id)).catch(ee=>{console.warn("[Agentation] Failed to delete annotation from server:",ee)}))),pe(!0),al(F=>F.filter(ee=>!C.includes(ee))),C.length>0&&C.length===ps.current.length){const F=fs.current;F?.getContext("2d")?.clearRect(0,0,F.width,F.height)}No(S,k),nt===y.blankCanvas&&yt===y.wireframePurpose&&Me===y.designPlacements&&se===y.rearrangeState&&(nt&&pr(!1),yt&&xo(""),yn.current={rearrange:null,placements:[]},Qo(t)),Te()}},[t,xe,zt,Me,se,nt,yt,x,qt,B,oe,Te,No]),Es=l.useCallback(async()=>{const c=A.start(),_=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:t,m=Pe&&nt;let y;if(m){if(Me.length===0&&!se&&!yt)return;y=r?es(_,r):""}else{if(y=bi(xe,_,Ge.outputDetail,{appName:r}),!y&&zt.length===0&&Me.length===0&&!se)return;y||(y=es(_,r))}if(!m&&zt.length>0){const k=new Set;for(const ie of xe)ie.drawingIndex!=null&&k.add(ie.drawingIndex);const C=fs.current;C&&(C.style.visibility="hidden");const F=[],ee=window.scrollY;for(let ie=0;ie<zt.length;ie++){if(k.has(ie))continue;const re=zt[ie];if(re.points.length<2)continue;const le=re.fixed?re.points:re.points.map(at=>({x:at.x,y:at.y-ee}));let be=1/0,Ie=1/0,Z=-1/0,ue=-1/0;for(const at of le)be=Math.min(be,at.x),Ie=Math.min(Ie,at.y),Z=Math.max(Z,at.x),ue=Math.max(ue,at.y);const ge=Z-be,Ae=ue-Ie,st=Math.hypot(ge,Ae),wt=le[0],ye=le[le.length-1],he=Math.hypot(ye.x-wt.x,ye.y-wt.y);let Fe;const it=he<st*.35,Vt=ge/Math.max(Ae,1);if(it&&st>20){const at=Math.max(ge,Ae)*.15;let dn=0;for(const Cn of le){const vl=Cn.x-be<at,kl=Z-Cn.x<at,jl=Cn.y-Ie<at,Sl=ue-Cn.y<at;(vl||kl)&&(jl||Sl)&&dn++}Fe=dn>le.length*.15?"box":"circle"}else Vt>3&&Ae<40?Fe="underline":he>st*.5?Fe="arrow":Fe="drawing";const Wt=Math.min(10,le.length),ro=Math.max(1,Math.floor(le.length/Wt)),Bo=new Set,mt=[],io=[wt];for(let at=ro;at<le.length-1;at+=ro)io.push(le[at]);io.push(ye);for(const at of io){const dn=Zo(at.x,at.y);if(!dn||Bo.has(dn)||ft(dn,"[data-feedback-toolbar]"))continue;Bo.add(dn);const{name:Cn}=Hn(dn);mt.includes(Cn)||mt.push(Cn)}const Po=`${Math.round(be)},${Math.round(Ie)} → ${Math.round(Z)},${Math.round(ue)}`;let On;(Fe==="circle"||Fe==="box")&&mt.length>0?On=`${Fe==="box"?"Boxed":"Circled"} **${mt[0]}**${mt.length>1?` (and ${mt.slice(1).join(", ")})`:""} (region: ${Po})`:Fe==="underline"&&mt.length>0?On=`Underlined **${mt[0]}** (${Po})`:Fe==="arrow"&&mt.length>=2?On=`Arrow from **${mt[0]}** to **${mt[mt.length-1]}** (${Math.round(wt.x)},${Math.round(wt.y)} → ${Math.round(ye.x)},${Math.round(ye.y)})`:mt.length>0?On=`${Fe==="arrow"?"Arrow":"Drawing"} near **${mt.join("**, **")}** (region: ${Po})`:On=`Drawing at ${Po}`,F.push(On)}C&&(C.style.visibility=""),F.length>0&&(y+=`
**Drawings:**
`,F.forEach((ie,re)=>{y+=`${re+1}. ${ie}
`}))}if((Me.length>0||m&&yt)&&(y+=`
`+hi(Me,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:nt,wireframePurpose:yt||void 0},Ge.outputDetail)),se){const k=mi(se,Ge.outputDetail,{width:window.innerWidth,height:window.innerHeight});k&&(y+=`
`+k)}if(y=wi(xe,y,h),!y){N(!1);return}const S=!M||await Ad(y);I?.(y),A.isCurrent(c)&&(N(S),S&&(A.schedule(c,()=>N(!1),2e3),Ge.autoClearAfterCopy&&A.schedule(c,Sn,500)))},[xe,zt,Me,se,nt,Pe,yr,yt,t,Ge.outputDetail,nn,Q,Ge.autoClearAfterCopy,Sn,A,M,h,r,I]),Is=$i(Ge.webhookUrl)||$i(U||""),Gt=G!=null||Is&&!Ge.webhooksEnabled,Lo=z?Gt?337:297:44,Ns=l.useCallback(async()=>{const c=K.start(),_=typeof window<"u"?window.location.href:t,m=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:t;let y=bi(xe,m,Ge.outputDetail,{appName:r});if(!y&&Me.length===0&&!se)return;if(y||(y=es(m,r)),Me.length>0&&(y+=`
`+hi(Me,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:nt,wireframePurpose:yt||void 0},Ge.outputDetail)),se){const F=mi(se,Ge.outputDetail,{width:window.innerWidth,height:window.innerHeight});F&&(y+=`
`+F)}O("sending");let S=!0;try{await G?.(y,xe)}catch(F){console.warn("[Agentation] Submit callback failed:",F),S=!1}if(!K.isCurrent(c))return;const k=Is?await qt("submit",{output:y,annotations:xe,url:_},!0):!0,C=S&&k&&Gt;K.isCurrent(c)&&(O(C?"sent":"failed"),K.schedule(c,()=>O("idle"),2500),C&&Ge.autoClearAfterCopy&&K.schedule(c,Sn,500))},[G,r,qt,xe,Me,se,nt,yr,t,Ge.outputDetail,nn,Q,Ge.autoClearAfterCopy,Sn,Is,Gt,K]);l.useEffect(()=>{const _=(k=!1)=>{Kn.current?.dragging&&(vo.current=k,Nr(!1)),Kn.current=null},m=k=>{const C=Kn.current;if(!C)return;if((k.buttons&1)===0){_();return}const F=k.clientX-C.x,ee=k.clientY-C.y,ie=Math.sqrt(F*F+ee*ee);if(!C.dragging&&ie>10&&(C.dragging=!0,Nr(!0)),C.dragging){let re=C.toolbarX+F,le=C.toolbarY+ee;const be=20,Ie=337,Z=44,ge=Ie-Lo,Ae=be-ge,st=window.innerWidth-be-Ie;re=Math.max(Ae,Math.min(st,re)),le=Math.max(be,Math.min(window.innerHeight-Z-be,le)),xs({x:re,y:le})}},y=()=>_(!0),S=()=>_();return W.addEventListener("mousemove",m),W.addEventListener("mouseup",y,!0),window.addEventListener("blur",S),()=>{W.removeEventListener("mousemove",m),W.removeEventListener("mouseup",y,!0),window.removeEventListener("blur",S)}},[Lo]);const wl=l.useCallback(c=>{if(vo.current=!1,Kn.current=null,c.button!==0||c.target.closest("button")&&(c.target.closest("button")!==Et.current||z)||c.target.closest("[data-agentation-settings-panel]"))return;const _=c.currentTarget.parentElement;if(!_)return;const m=ct(_);Kn.current={x:c.clientX,y:c.clientY,toolbarX:m.left,toolbarY:m.top,dragging:!1}},[z]);l.useLayoutEffect(()=>{if(!rt)return;const c=()=>{let S=rt.x,k=rt.y;const ee=20-(337-Lo),ie=window.innerWidth-20-337;S=Math.max(ee,Math.min(ie,S)),k=Math.max(20,Math.min(window.innerHeight-44-20,k)),(S!==rt.x||k!==rt.y)&&xs({x:S,y:k})};return c(),window.addEventListener("resize",c),()=>window.removeEventListener("resize",c)},[rt,Lo]),l.useEffect(()=>{if(!i)return;const c=m=>{if(m.defaultPrevented||m.isComposing||m.altKey)return;const y=m.composedPath()[0]||m.target,S=y.tagName==="INPUT"||y.tagName==="TEXTAREA"||y.tagName==="SELECT"||y.isContentEditable;if(m.key==="Escape"){if(g&&!P&&!J&&(z||gt||Pe||Lt||Mt.length)&&(m.preventDefault(),m.stopPropagation()),gt){m.preventDefault(),pn(!1),Xt.current?.focus();return}if(Pe){En?gn(null):no();return}if(Lt){ms(!1);return}if(Mt.length>0){an([]);return}P||J||z&&(xt(),$o())}if((m.metaKey||m.ctrlKey)&&m.shiftKey&&(m.key==="f"||m.key==="F")){m.preventDefault(),xt(),z?$o():(Et.current?.blur(),Zt.current=!0,me(!0));return}!z||S||m.metaKey||m.ctrlKey||m.repeat||((m.key==="p"||m.key==="P")&&(m.preventDefault(),xt(),Cs()),(m.key==="l"||m.key==="L")&&(m.preventDefault(),xt(),Lt&&ms(!1),gt&&pn(!1),P&&Ms(),Pe?no():Ss()),(m.key==="h"||m.key==="H")&&xe.length>0&&(m.preventDefault(),xt(),sn(k=>!k)),(m.key==="c"||m.key==="C")&&(xe.length>0||Me.length>0||se)&&(m.preventDefault(),xt(),Es()),(m.key==="x"||m.key==="X")&&(xe.length>0||Me.length>0||se)&&(m.preventDefault(),xt(),Sn(),Me.length>0&&tn([]),se&&Ut(null)),(m.key==="s"||m.key==="S")&&xe.length>0&&Gt&&Y==="idle"&&(m.preventDefault(),xt(),Ns()))},_=!!g;return W.addEventListener("keydown",c,_),()=>W.removeEventListener("keydown",c,_)},[i,g,J,z,Lt,Pe,En,Me,se,P,xe.length,Gt,Y,Ns,Cs,Es,Sn,Mt,gt,$o,Ss,no]);const so=xe.length>0,To=Bl(),Do=xe.filter(c=>c.kind!=="placement"&&c.kind!=="rearrange"),Or=Do.flatMap((c,_)=>{const m=To(c);return m?[{annotation:m,index:_}]:[]}),zr=P&&!P.isSubmitted?To({...P,comment:"",timestamp:0}):null,Fr=[...fe?Or.map(c=>({...c,pending:!1})):[],...zr?[{annotation:zr,index:Do.length,pending:!0}]:[]];l.useEffect(()=>{const c=new Set(fe&&!rn?Or.map(({annotation:_})=>_.id):[]);Ft.current&&!c.has(Ft.current)&&(Ft.current=null);for(const _ of cn)c.has(_)||ks(_)}),l.useEffect(()=>{J&&cn.has(J.id)&&(en(!1),Bn(!0))},[J,cn]);const Wr=l.useCallback(c=>{!ce&&c.id!==Ft.current&&Io(c)},[ce,Io]),Hr=l.useCallback(c=>{Be===c&&Io(null)},[Be,Io]),Yr=l.useCallback((c,_)=>{if(J&&!kn){So.current?.shake();return}Tt&&$s(),Ge.markerClickBehavior==="delete"?Rs(c.id):Eo(c,_)},[Ge.markerClickBehavior,Rs,Eo,Tt,$s,J,kn]),Bt=J??(Co&&!P&&!_e?xe.find(c=>c.id===Be&&!cn.has(c.id)):null),Xr=Nt?"Resume animations":"Pause animations",Ur=Pe?"Exit layout mode":"Layout mode",Qr=Kt?"Hide markers":"Show markers",qr=h!=="markdown"&&!wi(xe,"",h),Gr=typeof h=="object"?`Copy ${h.attribute}`:h==="source"?"Copy source paths":h==="classes"?"Copy classes":Pe&&nt?"Copy layout":"Copy feedback",An=z?0:-1;return!Ye||rn?null:e.jsxs(ea,{host:"agentation-toolbar",className:Oe,children:[e.jsxs("style",{"data-agentation-styles":"toolbar",children:[Zd,e_]}),e.jsxs("div",{ref:dt,className:L.positionContext,style:{display:"contents"},"data-agentation-theme":Qt?"dark":"light","data-agentation-accent":Ge.annotationColorId,"data-agentation-root":"",children:[e.jsx("div",{className:L.toolbar,"data-feedback-toolbar":!0,"data-agentation-toolbar":!0,"data-dragging":wo||void 0,style:rt?{left:rt.x,top:rt.y,right:"auto",bottom:"auto"}:void 0,children:e.jsxs("div",{className:`${L.toolbarContainer} ${z?L.expanded:L.collapsed} ${Rr?L.entrance:""} ${Jt?L.hiding:""} ${Gt?L.serverConnected:""}`,onMouseDown:wl,children:[e.jsxs("div",{className:`${L.controlsContent} ${z?L.visible:L.hidden} ${rt&&rt.y<100?L.tooltipBelow:""} ${mr||gt?L.tooltipsHidden:""} ${gs?L.tooltipsInSession:""}`,ref:c=>{ln.current=c,c?.toggleAttribute("inert",!z)},role:"group","aria-label":"Feedback controls","aria-hidden":!z,onMouseEnter:Cr,onMouseLeave:Mr,children:[e.jsxs("div",{className:`${L.buttonWrapper} ${rt&&rt.x<120?L.buttonWrapperAlignLeft:""}`,children:[e.jsx("button",{className:L.controlButton,onClick:c=>{c.stopPropagation(),xt(),Cs()},"data-active":Nt,"aria-label":Xr,"aria-pressed":Nt,tabIndex:An,children:e.jsx(ia,{size:24,isPaused:Nt})}),e.jsxs("span",{className:L.buttonTooltip,children:[Xr,i&&e.jsx("span",{className:L.shortcut,children:"P"})]})]}),e.jsxs("div",{className:L.buttonWrapper,children:[e.jsx("button",{className:`${L.controlButton} ${Qt?"":L.light}`,onClick:c=>{c.stopPropagation(),xt(),Lt&&ms(!1),gt&&pn(!1),P&&Ms(),Pe?no():Ss()},"data-active":Pe,"aria-label":Ur,"aria-pressed":Pe,tabIndex:An,style:Pe&&nt?{color:"#f97316",background:"rgba(249, 115, 22, 0.25)"}:void 0,children:e.jsx(ma,{size:21})}),e.jsxs("span",{className:L.buttonTooltip,children:[Ur,i&&e.jsx("span",{className:L.shortcut,children:"L"})]})]}),e.jsxs("div",{className:L.buttonWrapper,children:[e.jsx("button",{className:L.controlButton,onClick:c=>{c.stopPropagation(),xt(),sn(!Kt)},disabled:!so||Pe,"aria-label":Qr,tabIndex:An,children:e.jsx(ra,{size:24,isOpen:Kt})}),e.jsxs("span",{className:L.buttonTooltip,children:[Qr,i&&e.jsx("span",{className:L.shortcut,children:"H"})]})]}),e.jsxs("div",{className:L.buttonWrapper,children:[e.jsx("button",{className:`${L.controlButton} ${j?L.statusShowing:""}`,onClick:c=>{c.stopPropagation(),xt(),Es()},disabled:qr||(Pe&&nt?Me.length===0&&!se?.sections?.length:!so&&zt.length===0&&Me.length===0&&!se?.sections?.length),"data-active":j,"aria-label":Gr,tabIndex:An,children:e.jsx(oa,{size:24,copied:j,tint:Pe&&nt&&(Me.length>0||se?.sections?.length)?"#f97316":void 0})}),e.jsxs("span",{className:L.buttonTooltip,children:[qr?"No matching metadata":Gr,i&&e.jsx("span",{className:L.shortcut,children:"C"})]})]}),e.jsxs("div",{className:`${L.buttonWrapper} ${L.sendButtonWrapper} ${z&&Gt?L.sendButtonVisible:""}`,children:[e.jsxs("button",{className:`${L.controlButton} ${Y==="sent"||Y==="failed"?L.statusShowing:""}`,onClick:c=>{c.stopPropagation(),xt(),Ns()},disabled:!so||!Gt||Y==="sending","data-no-hover":Y==="sent"||Y==="failed",tabIndex:z&&Gt?0:-1,"aria-label":"Send Annotations","aria-hidden":!Gt,children:[e.jsx(sa,{size:24,state:Y}),so&&Y==="idle"&&e.jsx("span",{className:L.buttonBadge,children:xe.length})]}),e.jsxs("span",{className:L.buttonTooltip,children:["Send Annotations",i&&e.jsx("span",{className:L.shortcut,children:"S"})]})]}),e.jsxs("div",{className:L.buttonWrapper,children:[e.jsx("button",{className:L.controlButton,onClick:c=>{c.stopPropagation(),xt(),Sn()},disabled:!so&&zt.length===0&&Me.length===0&&!se?.sections?.length,"data-danger":!0,"aria-label":"Clear all",tabIndex:An,children:e.jsx(aa,{size:24})}),e.jsxs("span",{className:L.buttonTooltip,children:["Clear all",i&&e.jsx("span",{className:L.shortcut,children:"X"})]})]}),e.jsxs("div",{className:L.buttonWrapper,children:[e.jsx("button",{ref:Xt,"aria-label":"Settings","aria-expanded":gt,tabIndex:An,className:L.controlButton,onClick:c=>{c.stopPropagation(),xt(),Pe&&no(),te.current=!gt&&c.detail===0,pn(!gt)},children:e.jsx(la,{size:24})}),B&&bn!=="disconnected"&&e.jsx("span",{className:`${L.mcpIndicator} ${L[bn]} ${gt?L.hidden:""}`,title:bn==="connected"?"MCP Connected":"MCP Connecting..."}),e.jsx("span",{className:L.buttonTooltip,children:"Settings"})]}),e.jsx("div",{className:L.divider}),e.jsx("div",{className:L.togglePlaceholder,"aria-hidden":"true"})]}),e.jsxs("div",{className:`${L.buttonWrapper} ${L.toggleWrapper} ${rt&&rt.y<100?L.tooltipBelow:""} ${!z||mr||gt?L.tooltipsHidden:""} ${gs?L.tooltipsInSession:""} ${rt&&typeof window<"u"&&rt.x>window.innerWidth-120?L.buttonWrapperAlignRight:""}`,onMouseEnter:Cr,onMouseLeave:Mr,children:[e.jsx("button",{ref:Et,type:"button",className:`${L.toggleContent} ${z?L.expandedToggle:""}`,"aria-label":z?"Exit":"Start feedback mode","aria-expanded":z,"aria-keyshortcuts":i?"Meta+Shift+F Control+Shift+F":void 0,title:z?void 0:i?"Start feedback mode (⌘⇧F / Ctrl+Shift+F)":"Start feedback mode",onClick:c=>{if(vo.current){vo.current=!1,c.preventDefault();return}c.stopPropagation(),z?(xt(),$o()):(c.currentTarget.blur(),Zt.current=c.detail===0,me(!0))},children:e.jsxs("span",{className:L.toggleIcon,children:[e.jsx(ya,{active:z}),Do.length>0&&e.jsx("span",{className:`${L.badge} ${z?L.fadeOut:""} ${Rr?L.entrance:""}`,children:Do.length})]})}),e.jsxs("span",{className:L.buttonTooltip,"aria-hidden":!z,children:["Exit",i&&e.jsx("span",{className:L.shortcut,children:"Esc"})]})]}),e.jsx(Oc,{visible:Pe&&z,activeType:En,onSelect:c=>{gn(En===c?null:c)},isDarkMode:Qt,sectionCount:se?.sections.length??0,onDetectSections:()=>{const c=Hc(),_=se?.sections??[],m=new Set(_.map(C=>C.selector)),y=c.filter(C=>!m.has(C.selector)),S=[..._,...y],k=[...se?.originalOrder??[],...y.map(C=>C.id)];Ut({sections:S,originalOrder:k,detectedAt:Date.now()})},placementCount:Me.length,onClearPlacements:()=>{No(Me,se)},blankCanvas:nt,onBlankCanvasChange:c=>{const _={sections:[],originalOrder:[],detectedAt:Date.now()};c?(ds.current={rearrange:se,placements:Me},Ut(yn.current.rearrange||_),tn(yn.current.placements),gn(null)):(yn.current={rearrange:se,placements:Me},Ut(ds.current.rearrange||_),tn(ds.current.placements)),pr(c)},wireframePurpose:yt,onWireframePurposeChange:xo,Tooltip:$n,onDragStart:(c,_)=>{_.preventDefault();const m=X[c];let y=null,S=!1;const k=_.clientX,C=_.clientY,ee=_.target.closest("[data-feedback-toolbar]")?.getBoundingClientRect().top??window.innerHeight,ie=le=>{const be=le.clientX-k,Ie=le.clientY-C;if(!S&&(Math.abs(be)>4||Math.abs(Ie)>4)&&(S=!0,y=document.createElement("div"),y.className=`${E.dragPreview}${nt?` ${E.dragPreviewWireframe}`:""}`,dt.current?.appendChild(y)),!y)return;const Z=Math.max(0,ee-le.clientY),ue=Math.min(1,Z/180),ge=1-Math.pow(1-ue,2),Ae=28,st=20,wt=Math.min(140,m.width*.18),ye=Math.min(90,m.height*.18),he=Ae+(wt-Ae)*ge,Fe=st+(ye-st)*ge;y.style.width=`${he}px`,y.style.height=`${Fe}px`,y.style.left=`${le.clientX-he/2}px`,y.style.top=`${le.clientY-Fe/2}px`,y.style.opacity=`${.5+.5*ge}`,y.textContent=ge>.25?c:""},re=le=>{if(window.removeEventListener("mousemove",ie),window.removeEventListener("mouseup",re),y&&y.remove(),S){const be=m.width,Ie=m.height,Z=window.scrollY,ue=Math.max(0,le.clientX-be/2),ge=Math.max(0,le.clientY+Z-Ie/2),Ae={id:`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,type:c,x:ue,y:ge,width:be,height:Ie,scrollY:Z,timestamp:Date.now()};tn(st=>[...st,Ae]),gn(null),Gn.current=new Set,xr(st=>st+1)}};window.addEventListener("mousemove",ie),window.addEventListener("mouseup",re)}}),e.jsx(Vd,{settings:Ge,onSettingsChange:_l,isDarkMode:Qt,onToggleTheme:ul,isDevMode:hl,connectionStatus:bn,endpoint:B,onExited:pl,isOpen:z&&gt,toolbarNearBottom:!!rt&&rt.y<230,settingsPage:tl,onSettingsPageChange:hr,onHideToolbar:fl})]})}),(Pe||fn)&&e.jsx("div",{className:`${E.blankCanvas} ${fr?E.visible:""} ${ol?E.gridActive:""}`,style:{"--canvas-opacity":gr},"data-feedback-toolbar":!0}),Pe&&nt&&fr&&e.jsxs("div",{className:E.wireframeNotice,"data-feedback-toolbar":!0,children:[e.jsxs("div",{className:E.wireframeOpacityRow,children:[e.jsx("span",{className:E.wireframeOpacityLabel,children:"Toggle Opacity"}),e.jsx("input",{type:"range",className:E.wireframeOpacitySlider,min:0,max:1,step:.01,value:gr,onChange:c=>nl(Number(c.target.value))})]}),e.jsxs("div",{className:E.wireframeNoticeTitleRow,children:[e.jsx("span",{className:E.wireframeNoticeTitle,children:"Wireframe Mode"}),e.jsx("span",{className:E.wireframeNoticeDivider}),e.jsx("button",{className:E.wireframeStartOver,onClick:()=>{No(Me,se),yn.current={rearrange:null,placements:[]},xo(""),Qo(t)},children:"Start Over"})]}),"Drag components onto the canvas.",e.jsx("br",{}),"Copied output will only include the wireframed layout."]}),(Pe||fn)&&e.jsx(Tc,{placements:Me,onChange:tn,activeComponent:fn?null:En,onActiveComponentChange:gn,isDarkMode:Qt,exiting:fn,onInteractionChange:sl,passthrough:!En,extraSnapRects:se?.sections.map(c=>c.currentRect),deselectSignal:rl,clearingPlacements:In,wireframe:nt,onSelectionChange:(c,_)=>{Gn.current=c,_||(bo.current=new Set,ll(m=>m+1))},onDragMove:(c,_)=>{const m=bo.current;if(!(!m.size||!se)){if(!Ot.current){Ot.current=new Map;for(const y of se.sections)m.has(y.id)&&Ot.current.set(y.id,{x:y.currentRect.x,y:y.currentRect.y})}for(const y of se.sections){if(!m.has(y.id)||!Ot.current.get(y.id))continue;const k=dt.current?.querySelector(`[data-rearrange-section="${y.id}"]`);k&&(k.style.transform=`translate(${c}px, ${_}px)`)}}},onDragEnd:(c,_,m)=>{const y=bo.current,S=Ot.current;if(Ot.current=null,!(!y.size||!se||!S)){for(const k of y){const C=dt.current?.querySelector(`[data-rearrange-section="${k}"]`);C&&(C.style.transform="")}m&&Ut(k=>k&&{...k,sections:k.sections.map(C=>{const F=S.get(C.id);return F?{...C,currentRect:{...C.currentRect,x:Math.max(0,F.x+c),y:Math.max(0,F.y+_)}}:C})})}}}),(Pe||fn)&&se&&e.jsx(Uc,{rearrangeState:se,onChange:Ut,isDarkMode:Qt,exiting:fn,blankCanvas:nt,extraSnapRects:Me.map(c=>({x:c.x,y:c.y,width:c.width,height:c.height})),clearing:se===Nn,deselectSignal:il,onSelectionChange:(c,_)=>{bo.current=c,_||(Gn.current=new Set,xr(m=>m+1))},onDragMove:(c,_)=>{const m=Gn.current;if(m.size){if(!Ot.current){Ot.current=new Map;for(const y of Me)m.has(y.id)&&Ot.current.set(y.id,{x:y.x,y:y.y})}for(const y of m){const S=dt.current?.querySelector(`[data-design-placement="${y}"]`);S&&(S.style.transform=`translate(${c}px, ${_}px)`)}}},onDragEnd:(c,_,m)=>{const y=Gn.current,S=Ot.current;if(Ot.current=null,!(!y.size||!S)){for(const k of y){const C=dt.current?.querySelector(`[data-design-placement="${k}"]`);C&&(C.style.transform="")}m&&tn(k=>k.map(C=>{const F=S.get(C.id);return F?{...C,x:Math.max(0,F.x+c),y:Math.max(0,F.y+_)}:C}))}}}),e.jsx("canvas",{ref:fs,className:`${L.drawCanvas} ${Lt?L.active:""}`,"aria-hidden":"true",style:{opacity:Co?1:0,transition:"opacity 0.15s ease"},"data-feedback-toolbar":!0}),e.jsx("div",{className:L.markersLayer,"data-feedback-toolbar":!0,children:Fr.filter(({annotation:c})=>!c.isFixed).map(({annotation:c,index:_,pending:m},y,S)=>e.jsx(ji,{annotation:c,pending:m,globalIndex:_,layerIndex:y,layerSize:S.length,isExiting:m?Tt:ce,isClearing:je.current.has(c.id),isAnimated:vn.current.has(c.id),isNew:Ft.current===c.id,onEnterComplete:Lr,isHovered:!ce&&Be===c.id,isRemoving:cn.has(c.id),onRemoveComplete:ks,isEditingAny:!!J,renumberFrom:qe,markerClickBehavior:Ge.markerClickBehavior,onHoverEnter:Wr,onHoverLeave:Hr,onClick:Yr,onContextMenu:Eo},ko.current.get(c.id)??c.id))}),e.jsx("div",{className:L.fixedMarkersLayer,"data-feedback-toolbar":!0,children:Fr.filter(({annotation:c})=>c.isFixed).map(({annotation:c,index:_,pending:m},y,S)=>e.jsx(ji,{annotation:c,pending:m,globalIndex:_,layerIndex:y,layerSize:S.length,isExiting:m?Tt:ce,isClearing:je.current.has(c.id),isAnimated:vn.current.has(c.id),isNew:Ft.current===c.id,onEnterComplete:Lr,isHovered:!ce&&Be===c.id,isRemoving:cn.has(c.id),onRemoveComplete:ks,isEditingAny:!!J,renumberFrom:qe,markerClickBehavior:Ge.markerClickBehavior,onHoverEnter:Wr,onHoverLeave:Hr,onClick:Yr,onContextMenu:Eo},ko.current.get(c.id)??c.id))}),z&&De&&!P&&!J&&!dr&&!on&&e.jsx(Kd,{x:He.x,y:He.y,elementName:De.elementName,reactComponents:De.reactComponents}),z&&e.jsxs("div",{className:L.overlay,"data-feedback-toolbar":!0,style:P||J?{zIndex:"inherit"}:void 0,children:[De?.rect&&!P&&!dr&&!on&&e.jsx("div",{className:`${L.hoverHighlight} ${L.enter}`,style:{left:De.rect.left,top:De.rect.top,width:De.rect.width,height:De.rect.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 50%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 4%, transparent)",...De.isPiercing?{borderStyle:"dashed"}:{}}}),Mt.filter(c=>c.element.isConnected).map((c,_)=>{const m=ct(c.element),y=Mt.length>1;return e.jsx("div",{className:y?L.multiSelectOutline:L.singleSelectOutline,style:{position:"fixed",left:m.left,top:m.top,width:m.width,height:m.height,...y?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}},_)}),Be&&!P&&(()=>{const c=xe.find(S=>S.id===Be);if(!c?.boundingBox)return null;if(c.elementBoundingBoxes?.length)return Se.length>0?Se.filter(S=>S.isConnected).map((S,k)=>{const C=ct(S);return e.jsx("div",{className:`${L.multiSelectOutline} ${L.enter}`,style:{left:C.left,top:C.top,width:C.width,height:C.height}},`hover-outline-live-${k}`)}):c.elementBoundingBoxes.map((S,k)=>e.jsx("div",{className:`${L.multiSelectOutline} ${L.enter}`,style:{left:S.x,top:S.y-mn,width:S.width,height:S.height}},`hover-outline-${k}`));const _=Ke&&Ke.isConnected?ct(Ke):null,m=_?{x:_.left,y:_.top,width:_.width,height:_.height}:{x:c.boundingBox.x,y:c.isFixed?c.boundingBox.y:c.boundingBox.y-mn,width:c.boundingBox.width,height:c.boundingBox.height},y=c.isMultiSelect;return e.jsx("div",{className:`${y?L.multiSelectOutline:L.singleSelectOutline} ${L.enter}`,style:{left:m.x,top:m.y,width:m.width,height:m.height,...y?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}})})(),P&&e.jsxs(e.Fragment,{children:[P.multiSelectElements?.length?P.multiSelectElements.filter(c=>c.isConnected).map((c,_)=>{const m=ct(c);return e.jsx("div",{className:`${L.multiSelectOutline} ${Tt?L.exit:L.enter}`,style:{left:m.left,top:m.top,width:m.width,height:m.height}},`pending-multi-${_}`)}):P.targetElement&&P.targetElement.isConnected?(()=>{const c=ct(P.targetElement);return e.jsx("div",{className:`${L.singleSelectOutline} ${Tt?L.exit:L.enter}`,style:{left:c.left,top:c.top,width:c.width,height:c.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}})})():P.boundingBox&&e.jsx("div",{className:`${P.isMultiSelect?L.multiSelectOutline:L.singleSelectOutline} ${Tt?L.exit:L.enter}`,style:{left:P.boundingBox.x,top:P.boundingBox.y-mn,width:P.boundingBox.width,height:P.boundingBox.height,...P.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}),(()=>{const c=To(P)??P,_=c.x,m=c.isFixed?c.y:c.y-mn;return e.jsx(e.Fragment,{children:e.jsx(or,{ref:vs,element:P.element,selectedText:P.selectedText,allowEmpty:typeof h=="object"&&!!P.attributes?.[h.attribute],onOpenSource:d&&P.sourceFile?()=>d(P.sourceFile):void 0,computedStyles:P.computedStylesObj,placeholder:typeof h=="object"&&P.attributes?.[h.attribute]?"Add a note (optional)":P.element==="Area selection"?"What should change in this area?":P.isMultiSelect?"Feedback for this group of elements...":"What should change?",onSubmit:gl,onExitComplete:$s,onCancel:Ms,isExiting:Tt,lightMode:!Qt,accentColor:P.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:{left:Math.max(160,Math.min(window.innerWidth-160,_/100*window.innerWidth)),...m>window.innerHeight-290?{bottom:window.innerHeight-m+20}:{top:m+20}}},P.id)})})()]}),J&&e.jsx(e.Fragment,{children:J.elementBoundingBoxes?.length?Un.length>0?Un.filter(c=>c.isConnected).map((c,_)=>{const m=ct(c);return e.jsx("div",{className:`${L.multiSelectOutline} ${L.enter}`,style:{left:m.left,top:m.top,width:m.width,height:m.height}},`edit-multi-live-${_}`)}):J.elementBoundingBoxes.map((c,_)=>e.jsx("div",{className:`${L.multiSelectOutline} ${L.enter}`,style:{left:c.x,top:c.y-mn,width:c.width,height:c.height}},`edit-multi-${_}`)):(()=>{const c=At&&At.isConnected?ct(At):null,_=c?{x:c.left,y:c.top,width:c.width,height:c.height}:J.boundingBox?{x:J.boundingBox.x,y:J.isFixed?J.boundingBox.y:J.boundingBox.y-mn,width:J.boundingBox.width,height:J.boundingBox.height}:null;return _?e.jsx("div",{className:`${J.isMultiSelect?L.multiSelectOutline:L.singleSelectOutline} ${L.enter}`,style:{left:_.x,top:_.y,width:_.width,height:_.height,...J.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}):null})()}),on&&e.jsxs(e.Fragment,{children:[e.jsx("div",{ref:Zn,className:L.dragSelection}),e.jsx("div",{ref:Pn,className:L.highlightsContainer})]})]}),e.jsx(Hd,{ref:So,annotation:Bt?To(Bt)??J:null,editing:!!J,exiting:kn,restorePreview:hn,scrollY:mn,lightMode:!Qt,onExited:bl,editorProps:Bt?{element:Bt.element,selectedText:Bt.selectedText,allowEmpty:typeof h=="object"&&!!Bt.attributes?.[h.attribute],onOpenSource:d&&Bt.sourceFile?()=>d(Bt.sourceFile):void 0,computedStyles:Ql(Bt.computedStyles),placeholder:"Edit your feedback...",initialValue:Bt.comment,submitLabel:"Save",onSubmit:yl,onCancel:xl,onDelete:()=>Rs(Bt.id),accentColor:Bt.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)"}:void 0})]})]})}function Wn(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function d_(){const[t,n]=l.useState(()=>typeof window<"u"?window.innerWidth>768:!0);return l.useEffect(()=>{if(typeof window>"u")return;const o=window.matchMedia("(min-width: 769px)"),s=()=>n(o.matches);return s(),o.addEventListener("change",s),()=>o.removeEventListener("change",s)},[]),l.useEffect(()=>{if(typeof window>"u"||window.__SYNTAX_ERUDA_INIT__)return;let o=!1,s=null;async function r(){const[a,h,d]=await Promise.all([Ls(()=>import("./eruda-6-Vsy6uo.js").then(x=>x.e),__vite__mapDeps([0,1])),Ls(()=>import("./eruda-monitor-CYq-JzXh.js").then(x=>x.e),__vite__mapDeps([2,1])),Ls(()=>import("./eruda-touches-EJ5UZGAN.js").then(x=>x.e),__vite__mapDeps([3,1]))]);if(o)return;const g=a.default??a,f=h.default??h,p=d.default??d;s=g;const w=document.documentElement.dataset.theme==="dark";g.init({tool:["console","elements","network","resources","info"],useShadowDom:!0,autoScale:!0,defaults:{displaySize:48,transparency:.96,theme:w?"Dark":"Light"}});try{g.hide?.()}catch{}try{g.add(f)}catch{}try{g.add(p)}catch{}let $=null;const v=()=>{if(!$)return;const x=$l().slice(0,25),I=window.location.hash||"#/",G=document.documentElement.dataset.theme||"light",M=`${window.innerWidth}x${window.innerHeight} @ ${window.devicePixelRatio||1}x`,B=x.length===0?'<div style="opacity:.65;font-size:12px;padding:8px 0;">No runtime logs captured yet.</div>':x.map(we=>`<div style="padding:6px 8px;margin-bottom:6px;border-radius:6px;border:1px solid rgba(127,127,127,.25);font-size:11.5px;font-family:monospace;">
                      <strong>[${Wn(we.level)}]</strong> ${Wn(we.scope)}: ${Wn(we.message)}
                    </div>`).join("");$.html(`
          <div style="padding:14px;font-family:system-ui,-apple-system,sans-serif;line-height:1.45;">
            <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap;margin-bottom:14px;">
              <div>
                <div style="font-size:15px;font-weight:700;">Syntax Dev Inspector</div>
                <div style="font-size:12px;opacity:.7;">Route: <code>${Wn(I)}</code> &middot; Theme: ${Wn(G)} &middot; ${Wn(M)}</div>
              </div>
              <div style="display:flex;gap:8px;flex-wrap:wrap;">
                <button type="button" data-sx-dev="refresh" style="padding:6px 11px;border-radius:8px;border:1px solid rgba(127,127,127,.35);background:transparent;color:inherit;font-size:12px;font-weight:600;cursor:pointer;">Refresh</button>
                <button type="button" data-sx-dev="clear-logs" style="padding:6px 11px;border-radius:8px;border:1px solid rgba(127,127,127,.35);background:transparent;color:inherit;font-size:12px;font-weight:600;cursor:pointer;">Clear logs</button>
                <button type="button" data-sx-dev="reset" style="padding:6px 11px;border-radius:8px;border:1px solid #ef4444;background:rgba(239,68,68,.12);color:#ef4444;font-size:12px;font-weight:700;cursor:pointer;">Reset state &amp; cookies</button>
              </div>
            </div>
            <div style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.04em;opacity:.7;margin-bottom:8px;">Recent Runtime Logs (${x.length})</div>
            ${B}
          </div>
        `)};try{g.add({name:"Syntax",init(x){$=x,v(),x.on("click",'[data-sx-dev="reset"]',()=>{Cl()}),x.on("click",'[data-sx-dev="refresh"]',()=>{v()}),x.on("click",'[data-sx-dev="clear-logs"]',()=>{Ml(),v()})},show(){v(),$?.show?.()},hide(){$?.hide?.()},destroy(){$=null}})}catch{}const T=()=>{try{const x=window.innerWidth<=768?132:54;g.position({x:12,y:Math.max(84,window.innerHeight-x)})}catch{}};return T(),window.addEventListener("resize",T,{passive:!0}),window.__SYNTAX_ERUDA_INIT__=!0,()=>{window.removeEventListener("resize",T)}}let i;return r().then(a=>{i=a}),()=>{if(o=!0,i?.(),s&&window.__SYNTAX_ERUDA_INIT__){try{s.destroy()}catch{}window.__SYNTAX_ERUDA_INIT__=!1}}},[]),t?e.jsx(t_,{useHashLocation:!0,appName:"Syntax Dev"}):null}export{d_ as DevToolsSuite};
