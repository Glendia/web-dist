!function(){function e(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,o,i=[],u=!0,a=!1;try{for(t=t.call(e);!(u=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);u=!0);}catch(c){a=!0,o=c}finally{try{u||null==t.return||t.return()}finally{if(a)throw o}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}System.register(["./index-legacy.6dfd4f26.js","./index-legacy.4db981d4.js","./index-legacy.34d2f522.js","./index-legacy.c1ba31f3.js"],(function(n,t){"use strict";var r,o,i,u,a,c,l,s,g,d,m,f,p,h,b,v,y,$,E,A,j,S,w,C,k,I,x,O,L,T,P,R,_,D,G,U,N,z,B,V,Y,M,W,H,K,X,F,Q,Z,q,J,ee,ne,te,re,oe,ie,ue,ae,ce,le,se,ge,de,me,fe;return{setters:[function(e){r=e.e,o=e.E,i=e.a3,u=e.j,a=e.af,c=e.ag,l=e.bK,s=e.$,g=e.Z,d=e.b,m=e.a,f=e.L,p=e.N,h=e.K,b=e.S,v=e.au,y=e.bL,$=e.k,E=e.bM,A=e.ad,j=e.a6,S=e.az,w=e.U,C=e.V,k=e.bN,I=e.aN,x=e.bO,O=e.bP,L=e.aG,T=e.W,P=e.aj,R=e.bQ,_=e.bR,D=e.n,G=e.bi,U=e.ba,N=e.bb,z=e.bc,B=e.bd,V=e.be,Y=e.ay,M=e.bg,W=e.bh,H=e.bS,K=e.bT,X=e.bU},function(e){F=e.d,Q=e.e,Z=e.f,q=e.g,J=e.h,ee=e.i,ne=e.j,te=e.k,re=e.l,oe=e.b,ie=e.m,ue=e.n,ae=e.c},function(e){ce=e.A,le=e.f,se=e.g,ge=e.h,de=e.i,me=e.j},function(e){fe=e.S}],execute:function(){var pe=n("G",function(e){return e[e.SINGLE=0]="SINGLE",e[e.SITE=1]="SITE",e[e.STYLE=2]="STYLE",e[e.PREVIEW=3]="PREVIEW",e[e.GLOBAL=4]="GLOBAL",e[e.ARIA2=5]="ARIA2",e[e.INDEX=6]="INDEX",e[e.SSO=7]="SSO",e[e.LDAP=8]="LDAP",e}(pe||{})),he=n("F",function(e){return e[e.PUBLIC=0]="PUBLIC",e[e.PRIVATE=1]="PRIVATE",e[e.READONLY=2]="READONLY",e[e.DEPRECATED=3]="DEPRECATED",e}(he||{})),be=function(e){var n=u((function(){if(!a.is_admin(c())){if(void 0===e.role)return!1;if(e.role===l.GENERAL&&!a.is_general(c()))return!1}return!0}));return r(g,{get fallback(){return r(ve,e)},get children(){return[r(s,{get when(){return!n()},children:null}),r(s,{get when(){return e.children},get children(){return r(ye,e)}})]}})},ve=function(e){var n=d().pathname,t=m(),o=function(){return n()===e.to};return r(ce,{get cancelBase(){return e.to.startsWith("http")},display:"flex",as:f,get href(){return e.to},onClick:function(n){if(Ce(),e.refresh){var t;null===(t=n.stopPropagation)||void 0===t||t.call(n);var r=e.to;r.startsWith("http")||(r=p(r)),window.open(r,"_self")}},w:"$full",alignItems:"center",get _hover(){return{bgColor:o()?"$info4":h(),textDecoration:"none"}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get bgColor(){return o()?"$info4":""},get color(){return o()?"$info11":""},get external(){return e.external},get children(){return[r(b,{get when(){return e.icon},get children(){return r(v,{mr:"$2",get as(){return e.icon}})}}),r(y,{get children(){return t(e.title)}})]}})},ye=function(n){var t=d().pathname,o=e($(t().includes(n.to)),2),i=o[0],u=o[1],a=m();return r(j,{w:"$full",get children(){return[r(E,{justifyContent:"space-between",onClick:function(){u(!i())},w:"$full",alignItems:"center",get _hover(){return{bgColor:h()}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get children(){return[r(A,{get children(){return[r(b,{get when(){return n.icon},get children(){return r(v,{mr:"$2",get as(){return n.icon}})}}),r(y,{get children(){return a(n.title)}})]}}),r(v,{as:le,get transform(){return i()?"rotate(90deg)":"none"},transition:"transform 0.2s"})]}}),r(b,{get when(){return i()},get children(){return r(j,{pl:"$2",get children(){return r($e,{get items(){return n.children}})}})}})]}})},$e=function(e){return r(i,{p:"$2",w:"$full",color:"$neutral11",spacing:"$1",get children(){return r(o,{get each(){return e.items},children:function(e){return r(be,e)}})}})};var Ee=w((function(){return C((function(){return t.import("./Common-legacy.4ebc3eb1.js")}),void 0)})),Ae=[{title:"manage.sidemenu.profile",icon:F,to:"/@manage",role:l.GUEST,component:w((function(){return C((function(){return t.import("./Profile-legacy.abca5be3.js")}),void 0)}))},{title:"manage.sidemenu.settings",icon:Q,to:"/@manage/settings",children:[{title:"manage.sidemenu.site",icon:Z,to:"/@manage/settings/site",component:function(){return r(Ee,{get group(){return pe.SITE}})}},{title:"manage.sidemenu.style",icon:q,to:"/@manage/settings/style",component:function(){return r(Ee,{get group(){return pe.STYLE}})}},{title:"manage.sidemenu.preview",icon:J,to:"/@manage/settings/preview",component:function(){return r(Ee,{get group(){return pe.PREVIEW}})}},{title:"manage.sidemenu.global",icon:ee,to:"/@manage/settings/global",component:function(){return r(Ee,{get group(){return pe.GLOBAL}})}},{title:"manage.sidemenu.sso",icon:k,to:"/@manage/settings/sso",component:function(){return r(Ee,{get group(){return pe.SSO}})}},{title:"manage.sidemenu.ldap",icon:k,to:"/@manage/settings/ldap",component:function(){return r(Ee,{get group(){return pe.LDAP}})}},{title:"manage.sidemenu.other",icon:ne,to:"/@manage/settings/other",component:w((function(){return C((function(){return t.import("./Other-legacy.b025151e.js")}),void 0)}))}]},{title:"manage.sidemenu.tasks",icon:function(e){return S({a:{viewBox:"0 0 16 16"},c:'<path fill-rule="evenodd" d="M0 1.75C0 .784.784 0 1.75 0h3.5C6.216 0 7 .784 7 1.75v3.5A1.75 1.75 0 015.25 7H4v4a1 1 0 001 1h4v-1.25C9 9.784 9.784 9 10.75 9h3.5c.966 0 1.75.784 1.75 1.75v3.5A1.75 1.75 0 0114.25 16h-3.5A1.75 1.75 0 019 14.25v-.75H5A2.5 2.5 0 012.5 11V7h-.75A1.75 1.75 0 010 5.25v-3.5zm1.75-.25a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5zm9 9a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5z"/>'},e)},to:"/@manage/tasks",children:[{title:"manage.sidemenu.offline_download",icon:I,to:"/@manage/tasks/aria2",component:w((function(){return C((function(){return t.import("./offline_download-legacy.86b3b92f.js")}),void 0)}))},{title:"manage.sidemenu.upload",icon:te,to:"/@manage/tasks/upload",component:w((function(){return C((function(){return t.import("./Upload-legacy.d338bc85.js")}),void 0)}))},{title:"manage.sidemenu.copy",icon:x,to:"/@manage/tasks/copy",component:w((function(){return C((function(){return t.import("./Copy-legacy.3759ed81.js")}),void 0)}))}]},{title:"manage.sidemenu.users",icon:re,to:"/@manage/users",component:w((function(){return C((function(){return t.import("./Users-legacy.76640291.js")}),void 0)}))},{title:"manage.sidemenu.storages",icon:se,to:"/@manage/storages",component:w((function(){return C((function(){return t.import("./Storages-legacy.b62a809c.js")}),void 0)}))},{title:"manage.sidemenu.metas",icon:fe,to:"/@manage/metas",component:w((function(){return C((function(){return t.import("./Metas-legacy.01e2ad90.js")}),void 0)}))},{title:"manage.sidemenu.indexes",icon:oe,to:"/@manage/indexes",component:w((function(){return C((function(){return t.import("./indexes-legacy.87ef3038.js")}),void 0)}))},{title:"manage.sidemenu.backup-restore",to:"/@manage/backup-restore",icon:ge,component:w((function(){return C((function(){return t.import("./backup-restore-legacy.c8013705.js")}),void 0)}))},{title:"manage.sidemenu.about",icon:ie,to:"/@manage/about",role:l.GUEST,component:w((function(){return C((function(){return t.import("./About-legacy.ecd649df.js")}),void 0)}))},{title:"manage.sidemenu.docs",icon:de,to:"https://alist.nn.ci",role:l.GUEST,external:!0},{title:"manage.sidemenu.home",icon:O,to:"/",role:l.GUEST,refresh:!0}],je=L(),Se=je.isOpen,we=je.onOpen,Ce=je.onClose,ke=function(){var e=m(),n=d().to;return r(j,{as:"header",position:"sticky",top:"0",left:"0",right:"0",zIndex:"$sticky",height:"64px",flexShrink:0,shadow:"$md",p:"$4",get bgColor(){return T("$background","$neutral2")()},get children(){return[r(E,{alignItems:"center",justifyContent:"space-between",h:"$full",get children(){return[r(A,{spacing:"$2",get children(){return[r(P,{"aria-label":"menu",get icon(){return r(me,{})},display:{"@sm":"none"},onClick:we,size:"sm"}),r(y,{fontSize:"$xl",color:"$info9",cursor:"pointer",onClick:function(){n("/@manage")},get children(){return e("manage.title")}})]}}),r(A,{spacing:"$1",get children(){return r(P,{"aria-label":"logout",get icon(){return r(R,{})},onClick:function(){_(),D.success(e("manage.logout_success")),n("/@login?redirect=".concat(encodeURIComponent(location.pathname)))},size:"sm"})}})]}}),r(G,{get opened(){return Se()},placement:"left",onClose:Ce,get children(){return[r(U,{}),r(N,{get children(){return[r(z,{}),r(B,{color:"$info9",get children(){return e("manage.title")}}),r(V,{get children(){return[r($e,{items:Ae}),r(Y,{get children(){return r(A,{spacing:"$4",p:"$2",color:"$neutral11",get children(){return[r(M,{}),r(W,{})]}})}})]}})]}})]}})]}})},Ie=[{to:"/storages/add",component:w((function(){return C((function(){return t.import("./AddOrEdit-legacy.356687bf.js")}),void 0)}))},{to:"/storages/edit/:id",component:w((function(){return C((function(){return t.import("./AddOrEdit-legacy.356687bf.js")}),void 0)}))},{to:"/users/add",component:w((function(){return C((function(){return t.import("./AddOrEdit-legacy.4fa2c563.js")}),void 0)}))},{to:"/users/edit/:id",component:w((function(){return C((function(){return t.import("./AddOrEdit-legacy.4fa2c563.js")}),void 0)}))},{to:"/metas/add",component:w((function(){return C((function(){return t.import("./AddOrEdit-legacy.3e4a3b98.js")}),void 0)}))},{to:"/metas/edit/:id",component:w((function(){return C((function(){return t.import("./AddOrEdit-legacy.3e4a3b98.js")}),void 0)}))},{to:"/2fa",component:w((function(){return C((function(){return t.import("./2fa-legacy.1b1f49c5.js")}),void 0)}))},{to:"/messenger",component:w((function(){return C((function(){return t.import("./Messenger-legacy.29a74998.js")}),void 0)}))}],xe=function(e){return ue(e.title),r(Y,{h:"$full",get children(){return r(y,{get children(){return e.title}})}})},Oe=function e(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return n.forEach((function(n){n.children?e(n.children,t):t.push({to:H(n.to,"/@manage"),component:n.component||function(){return r(xe,{get title(){return n.title},get to(){return n.to||"empty"}})}})})),t}(Ae).concat(Ie),Le=Object.freeze(Object.defineProperty({__proto__:null,default:function(){var e=m();return ae((function(){return e("manage.title")})),r(j,{css:{"--hope-colors-background":"var(--hope-colors-loContrast)"},bgColor:"$background",w:"$full",get children(){return[r(ke,{}),r(E,{w:"$full",h:"calc(100vh - 64px)",get children(){return[r(j,{display:{"@initial":"none","@sm":"block"},w:"$56",h:"$full",shadow:"$md",get bgColor(){return T("$background","$neutral2")()},overflowY:"auto",get children(){return[r($e,{items:Ae}),r(Y,{get children(){return r(A,{spacing:"$4",p:"$2",color:"$neutral11",get children(){return[r(M,{}),r(W,{})]}})}})]}}),r(j,{w:{"@initial":"$full","@sm":"calc(100% - 14rem)"},p:"$4",overflowY:"auto",get children(){return r(K,{get children(){return r(o,{each:Oe,children:function(e){return r(X,{get path(){return e.to},get component(){return e.component}})}})}})}})]}})]}})}},Symbol.toStringTag,{value:"Module"}));n("i",Le)}}}))}();