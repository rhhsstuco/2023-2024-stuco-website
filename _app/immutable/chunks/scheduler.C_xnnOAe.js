function C(){}const lt=t=>t;function B(t,e){for(const n in e)t[n]=e[n];return t}function R(t){return t()}function rt(){return Object.create(null)}function O(t){t.forEach(R)}function F(t){return typeof t=="function"}function ot(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let d;function A(t,e){return t===e?!0:(d||(d=document.createElement("a")),d.href=e,t===d.href)}function k(t){return t.split(",").map(e=>e.trim().split(" ").filter(Boolean))}function at(t,e){const n=k(t.srcset),i=k(e||"");return i.length===n.length&&i.every(([s,l],c)=>l===n[c][1]&&(A(n[c][0],s)||A(s,n[c][0])))}function ut(t){return Object.keys(t).length===0}function G(t,...e){if(t==null){for(const i of e)i(void 0);return C}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ft(t,e,n){t.$$.on_destroy.push(G(e,n))}function _t(t,e,n,i){if(t){const s=D(t,e,n,i);return t[0](s)}}function D(t,e,n,i){return t[1]&&i?B(n.ctx.slice(),t[1](i(e))):n.ctx}function ht(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const l=[],c=Math.max(e.dirty.length,s.length);for(let o=0;o<c;o+=1)l[o]=e.dirty[o]|s[o];return l}return e.dirty|s}return e.dirty}function dt(t,e,n,i,s,l){if(s){const c=D(e,n,i,l);t.p(c,s)}}function mt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function pt(t){return t&&F(t.destroy)?t.destroy:C}function yt(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}let p=!1;function bt(){p=!0}function gt(){p=!1}function z(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function W(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let a=0;a<e.length;a++){const u=e[a];u.claim_order!==void 0&&r.push(u)}e=r}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let r=0;r<e.length;r++){const a=e[r].claim_order,u=(s>0&&e[n[s]].claim_order<=a?s+1:z(1,s,q=>e[n[q]].claim_order,a))-1;i[r]=n[u]+1;const v=u+1;n[v]=r,s=Math.max(v,s)}const l=[],c=[];let o=e.length-1;for(let r=n[s]+1;r!=0;r=i[r-1]){for(l.push(e[r-1]);o>=r;o--)c.push(e[o]);o--}for(;o>=0;o--)c.push(e[o]);l.reverse(),c.sort((r,a)=>r.claim_order-a.claim_order);for(let r=0,a=0;r<c.length;r++){for(;a<l.length&&c[r].claim_order>=l[a].claim_order;)a++;const u=a<l.length?l[a]:null;t.insertBefore(c[r],u)}}function I(t,e){t.appendChild(e)}function J(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function xt(t){const e=T("style");return e.textContent="/* empty */",K(J(t),e),e.sheet}function K(t,e){return I(t.head||t,e),e.sheet}function Q(t,e){if(p){for(W(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function U(t,e,n){t.insertBefore(e,n||null)}function V(t,e,n){p&&!n?Q(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function x(t){t.parentNode&&t.parentNode.removeChild(t)}function Et(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function T(t){return document.createElement(t)}function X(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function w(t){return document.createTextNode(t)}function Nt(){return w(" ")}function Tt(){return w("")}function wt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Y(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function vt(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:Y(t,e,n)}function At(t){return t.dataset.svelteH}function kt(t){return Array.from(t.childNodes)}function S(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function j(t,e,n,i,s=!1){S(t);const l=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const o=t[c];if(e(o)){const r=n(o);return r===void 0?t.splice(c,1):t[c]=r,s||(t.claim_info.last_index=c),o}}for(let c=t.claim_info.last_index-1;c>=0;c--){const o=t[c];if(e(o)){const r=n(o);return r===void 0?t.splice(c,1):t[c]=r,s?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function Z(t,e,n,i){return j(t,s=>s.nodeName===e,s=>{const l=[];for(let c=0;c<s.attributes.length;c++){const o=s.attributes[c];n[o.name]||l.push(o.name)}l.forEach(c=>s.removeAttribute(c))},()=>i(e))}function Ht(t,e,n){return Z(t,e,n,T)}function $(t,e){return j(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>w(e),!0)}function Lt(t){return $(t," ")}function H(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return-1}function Mt(t,e){const n=H(t,"HTML_TAG_START",0),i=H(t,"HTML_TAG_END",n+1);if(n===-1||i===-1)return new L(e);S(t);const s=t.splice(n,i-n+1);x(s[0]),x(s[s.length-1]);const l=s.slice(1,s.length-1);for(const c of l)c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new L(e,l)}function Ct(t,e){e=""+e,t.data!==e&&(t.data=e)}function Dt(t,e){t.value=e??""}function St(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function jt(t,e,n){t.classList.toggle(e,!!n)}function tt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function Pt(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const l=s.textContent.trim();l===`HEAD_${t}_END`?(i-=1,n.push(s)):l===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class et{is_svg=!1;e=void 0;n=void 0;t=void 0;a=void 0;constructor(e=!1){this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=X(n.nodeName):this.e=T(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)U(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(x)}}class L extends et{l=void 0;constructor(e=!1,n){super(e),this.e=this.n=null,this.l=n}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)V(this.t,this.n[n],e)}}function qt(t,e){return new t(e)}let m;function b(t){m=t}function y(){if(!m)throw new Error("Function called outside component initialization");return m}function Bt(t){y().$$.on_mount.push(t)}function Rt(t){y().$$.after_update.push(t)}function Ot(t){y().$$.on_destroy.push(t)}function Ft(){const t=y();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const l=tt(e,n,{cancelable:i});return s.slice().forEach(c=>{c.call(t,l)}),!l.defaultPrevented}return!0}}function Gt(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const h=[],M=[];let _=[];const E=[],P=Promise.resolve();let N=!1;function nt(){N||(N=!0,P.then(st))}function zt(){return nt(),P}function it(t){_.push(t)}function Wt(t){E.push(t)}const g=new Set;let f=0;function st(){if(f!==0)return;const t=m;do{try{for(;f<h.length;){const e=h[f];f++,b(e),ct(e.$$)}}catch(e){throw h.length=0,f=0,e}for(b(null),h.length=0,f=0;M.length;)M.pop()();for(let e=0;e<_.length;e+=1){const n=_[e];g.has(n)||(g.add(n),n())}_.length=0}while(h.length);for(;E.length;)E.pop()();N=!1,g.clear(),b(t)}function ct(t){if(t.fragment!==null){t.update(),O(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(it)}}function It(t){const e=[],n=[];_.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),_=e}export{It as $,dt as A,mt as B,ht as C,ft as D,vt as E,Et as F,Ot as G,L as H,Pt as I,A as J,jt as K,pt as L,it as M,O as N,Wt as O,Dt as P,Gt as Q,F as R,yt as S,at as T,J as U,xt as V,tt as W,lt as X,rt as Y,st as Z,ut as _,Nt as a,m as a0,b as a1,R as a2,h as a3,nt as a4,bt as a5,gt as a6,Rt as b,Lt as c,x as d,Tt as e,T as f,Ht as g,kt as h,V as i,Y as j,St as k,w as l,$ as m,Ct as n,Bt as o,M as p,qt as q,At as r,ot as s,zt as t,C as u,Mt as v,Q as w,wt as x,Ft as y,_t as z};
