import{s as S,f as $,g as b,r as T,j as k,i as _,u,d as f,v as C,a as p,c as h,h as F,w as M,x as O,y as I,o as L}from"../chunks/scheduler.3DCTqY4L.js";import{S as y,i as H,b as E,d as R,m as j,a as d,t as v,e as A}from"../chunks/index.2vcNBUSN.js";import{k as V}from"../chunks/singletons.N09cOK-x.js";import{t as g}from"../chunks/theme.store.IKpm5dKM.js";const N=!0,J=Object.freeze(Object.defineProperty({__proto__:null,prerender:N},Symbol.toStringTag,{value:"Module"})),P=V("on_navigate");function q(c){let t,o='<section class="footer__content svelte-1uc2p5m"><div class="footer__content__info svelte-1uc2p5m"><h2 class="svelte-1uc2p5m">School Info</h2> <ul class="svelte-1uc2p5m"><li class="svelte-1uc2p5m">Richmond Hill - Ontario - Canada</li> <li class="svelte-1uc2p5m">201 Yorkland Street - L4S 1A2</li> <li class="svelte-1uc2p5m">(905) 884-2131</li></ul></div> <div class="footer__content__links svelte-1uc2p5m"><h2 class="svelte-1uc2p5m">Follow Us</h2> <ul class="svelte-1uc2p5m"><li class="svelte-1uc2p5m"><a href="https://www.instagram.com/rhhs_stuco/" target="_blank" rel="noopener noreferrer" class="svelte-1uc2p5m"><i class="ri-instagram-line svelte-1uc2p5m"></i> — rhhs_stuco</a></li> <li class="svelte-1uc2p5m"><a href="https://twitter.com/RHHS_StuCo/" target="_blank" rel="noopener noreferrer" class="svelte-1uc2p5m"><i class="ri-twitter-line svelte-1uc2p5m"></i> — RHHS_StuCo</a></li></ul></div></section>';return{c(){t=$("footer"),t.innerHTML=o,this.h()},l(n){t=b(n,"FOOTER",{class:!0,"data-svelte-h":!0}),T(t)!=="svelte-od1aoy"&&(t.innerHTML=o),this.h()},h(){k(t,"class","footer svelte-1uc2p5m")},m(n,a){_(n,t,a)},p:u,i:u,o:u,d(n){n&&f(t)}}}class z extends y{constructor(t){super(),H(this,t,null,q,S,{})}}function w(c){return{c:u,l:u,m:u,d:u}}function D(c){let t,o,n,a,m;const r=c[2].default,s=C(r,c,c[1],null);o=new z({});let l=c[0]&&w();return{c(){s&&s.c(),t=p(),E(o.$$.fragment),n=p(),a=$("div"),l&&l.c(),this.h()},l(e){s&&s.l(e),t=h(e),R(o.$$.fragment,e),n=h(e),a=b(e,"DIV",{class:!0});var i=F(a);l&&l.l(i),i.forEach(f),this.h()},h(){k(a,"class","portal svelte-u0p03l")},m(e,i){s&&s.m(e,i),_(e,t,i),j(o,e,i),_(e,n,i),_(e,a,i),l&&l.m(a,null),m=!0},p(e,[i]){s&&s.p&&(!m||i&2)&&M(s,r,e,e[1],m?I(r,e[1],i,null):O(e[1]),null),e[0]?l||(l=w(),l.c(),l.m(a,null)):l&&(l.d(1),l=null)},i(e){m||(d(s,e),d(o.$$.fragment,e),m=!0)},o(e){v(s,e),v(o.$$.fragment,e),m=!1},d(e){e&&(f(t),f(n),f(a)),s&&s.d(e),A(o,e),l&&l.d()}}}const K="showFlashCaf";function U(c,t,o){let{$$slots:n={},$$scope:a}=t,m=!1;return L(()=>{let r=localStorage.getItem("theme")??"light";"matchMedia"in window&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(r="dark"),g.set(r),g.subscribe(s=>{localStorage.setItem("theme",s),document.documentElement.setAttribute("data-theme",s)}),o(0,m=localStorage.getItem(K)!="0")}),P(r=>{if(document.startViewTransition)return new Promise(s=>{document.startViewTransition(async()=>{s(),await r.complete})})}),c.$$set=r=>{"$$scope"in r&&o(1,a=r.$$scope)},[m,a,n]}class Q extends y{constructor(t){super(),H(this,t,U,D,S,{})}}export{Q as component,J as universal};