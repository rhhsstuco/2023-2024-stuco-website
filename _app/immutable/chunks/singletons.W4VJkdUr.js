import{w as u}from"./index.845OAQVk.js";const v=globalThis.__sveltekit_gny47l?.base??"",k=globalThis.__sveltekit_gny47l?.assets??v,m="1702686890810",T="sveltekit:snapshot",w="sveltekit:scroll",y="sveltekit:states",I="sveltekit:pageurl",S="sveltekit:history",N="sveltekit:navigation",f={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},_=location.origin;function U(t){if(t instanceof URL)return t;let e=document.baseURI;if(!e){const n=document.getElementsByTagName("base");e=n.length?n[0].href:document.URL}return new URL(t,e)}function L(){return{x:pageXOffset,y:pageYOffset}}function c(t,e){return t.getAttribute(`data-sveltekit-${e}`)}const d={...f,"":f.hover};function g(t){let e=t.assignedSlot??t.parentNode;return e?.nodeType===11&&(e=e.host),e}function O(t,e){for(;t&&t!==e;){if(t.nodeName.toUpperCase()==="A"&&t.hasAttribute("href"))return t;t=g(t)}}function Y(t,e){let n;try{n=new URL(t instanceof SVGAElement?t.href.baseVal:t.href,document.baseURI)}catch{}const a=t instanceof SVGAElement?t.target.baseVal:t.target,r=!n||!!a||A(n,e)||(t.getAttribute("rel")||"").split(/\s+/).includes("external"),l=n?.origin===_&&t.hasAttribute("download");return{url:n,external:r,target:a,download:l}}function x(t){let e=null,n=null,a=null,r=null,l=null,o=null,s=t;for(;s&&s!==document.documentElement;)a===null&&(a=c(s,"preload-code")),r===null&&(r=c(s,"preload-data")),e===null&&(e=c(s,"keepfocus")),n===null&&(n=c(s,"noscroll")),l===null&&(l=c(s,"reload")),o===null&&(o=c(s,"replacestate")),s=g(s);function i(b){switch(b){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:d[a??"off"],preload_data:d[r??"off"],keepfocus:i(e),noscroll:i(n),reload:i(l),replace_state:i(o)}}function p(t){const e=u(t);let n=!0;function a(){n=!0,e.update(o=>o)}function r(o){n=!1,e.set(o)}function l(o){let s;return e.subscribe(i=>{(s===void 0||n&&i!==s)&&o(s=i)})}return{notify:a,set:r,subscribe:l}}function E(){const{set:t,subscribe:e}=u(!1);let n;async function a(){clearTimeout(n);try{const r=await fetch(`${k}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!r.ok)return!1;const o=(await r.json()).version!==m;return o&&(t(!0),clearTimeout(n)),o}catch{return!1}}return{subscribe:e,check:a}}function A(t,e){return t.origin!==_||!t.pathname.startsWith(e)}let h;function P(t){h=t.client}function V(t){return(...e)=>h[t](...e)}const G={url:p({}),page:p({}),navigating:u(null),updated:E()};export{S as H,N,I as P,w as S,y as a,T as b,x as c,G as d,v as e,O as f,Y as g,f as h,A as i,P as j,V as k,_ as o,U as r,L as s};
