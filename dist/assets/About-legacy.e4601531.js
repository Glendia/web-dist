System.register(["./index-legacy.87e1c49a.js","./useTitle-legacy.1462b19e.js"],(function(e){"use strict";var t,a,n,r,i,s;return{setters:[e=>{t=e.a,a=e.a6,n=e.h,r=e.a9,i=e.a8},e=>{s=e.b}],execute:function(){const c=async()=>await(await fetch("https://jsd.nn.ci/gh/alist-org/alist@main/README.md")).text();e("default",(()=>{t(),s("manage.sidemenu.about");const[e]=a(c);return n(i,{get loading(){return e.loading},get children(){return n(r,{get children(){return e()}})}})}))}}}));