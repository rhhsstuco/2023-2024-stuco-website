import{s as _,f as v,g,r as w,j as $,i as p,u as c,d as f,v as y,a as S,c as b,w as H,x as k,y as F,o as M}from"../chunks/scheduler.447525e2.js";import{S as d,i as h,b as T,d as C,m as O,a as i,t as m,e as j}from"../chunks/index.60771cb8.js";import{j as I}from"../chunks/singletons.4f6c2e46.js";import{t as u}from"../chunks/theme.store.a73b481f.js";const L=!0,U=Object.freeze(Object.defineProperty({__proto__:null,prerender:L},Symbol.toStringTag,{value:"Module"}));const R=I("on_navigate");function x(a){let s,l='<section class="footer__content svelte-1uc2p5m"><div class="footer__content__info svelte-1uc2p5m"><h2 class="svelte-1uc2p5m">School Info</h2> <ul class="svelte-1uc2p5m"><li class="svelte-1uc2p5m">Richmond Hill - Ontario - Canada</li> <li class="svelte-1uc2p5m">201 Yorkland Street - L4S 1A2</li> <li class="svelte-1uc2p5m">(905) 884-2131</li></ul></div> <div class="footer__content__links svelte-1uc2p5m"><h2 class="svelte-1uc2p5m">Follow Us</h2> <ul class="svelte-1uc2p5m"><li class="svelte-1uc2p5m"><a href="https://www.instagram.com/rhhs_stuco/" target="_blank" rel="noopener noreferrer" class="svelte-1uc2p5m"><i class="ri-instagram-line svelte-1uc2p5m"></i> — rhhs_stuco</a></li> <li class="svelte-1uc2p5m"><a href="https://twitter.com/RHHS_StuCo/" target="_blank" rel="noopener noreferrer" class="svelte-1uc2p5m"><i class="ri-twitter-line svelte-1uc2p5m"></i> — RHHS_StuCo</a></li></ul></div></section>';return{c(){s=v("footer"),s.innerHTML=l,this.h()},l(o){s=g(o,"FOOTER",{class:!0,"data-svelte-h":!0}),w(s)!=="svelte-od1aoy"&&(s.innerHTML=l),this.h()},h(){$(s,"class","footer svelte-1uc2p5m")},m(o,n){p(o,s,n)},p:c,i:c,o:c,d(o){o&&f(s)}}}class A extends d{constructor(s){super(),h(this,s,null,x,_,{})}}function E(a){let s,l,o;const n=a[1].default,t=y(n,a,a[0],null);return l=new A({}),{c(){t&&t.c(),s=S(),T(l.$$.fragment)},l(e){t&&t.l(e),s=b(e),C(l.$$.fragment,e)},m(e,r){t&&t.m(e,r),p(e,s,r),O(l,e,r),o=!0},p(e,[r]){t&&t.p&&(!o||r&1)&&H(t,n,e,e[0],o?F(n,e[0],r,null):k(e[0]),null)},i(e){o||(i(t,e),i(l.$$.fragment,e),o=!0)},o(e){m(t,e),m(l.$$.fragment,e),o=!1},d(e){e&&f(s),t&&t.d(e),j(l,e)}}}function P(a,s,l){let{$$slots:o={},$$scope:n}=s;return M(()=>{let t=localStorage.getItem("theme")??"light";"matchMedia"in window&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(t="dark"),u.set(t),u.subscribe(e=>{localStorage.setItem("theme",e),document.documentElement.setAttribute("data-theme",e)}),localStorage.getItem("showFlash")!="0"}),R(t=>{if(document.startViewTransition)return new Promise(e=>{document.startViewTransition(async()=>{e(),await t.complete})})}),a.$$set=t=>{"$$scope"in t&&l(0,n=t.$$scope)},[n,o]}class Y extends d{constructor(s){super(),h(this,s,P,E,_,{})}}export{Y as component,U as universal};
