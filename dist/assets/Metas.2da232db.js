import{a as $,b as k,aW as C,b9 as l,m as M,dg as y,h as e,ae as d,C as i,a7 as S,dh as v,di as F,dj as o,G as g,dk as u,dl as W,dm as n,ba as h,n as x,a4 as B}from"./index.0d2838ba.js";import{b as D}from"./useTitle.e59a434b.js";import{D as H}from"./DeletePopover.2a3ab187.js";import{W as L}from"./Wether.cd90bbe6.js";const O=()=>{const r=$();D("manage.sidemenu.metas");const{to:c}=k(),[m,p]=C(()=>l.get("/admin/meta/list")),[b,f]=M([]),a=async()=>{const t=await p();h(t,s=>f(s.content))};a();const[w,T]=y(t=>l.post(`/admin/meta/delete?id=${t}`));return e(B,{spacing:"$2",alignItems:"start",w:"$full",get children(){return[e(d,{spacing:"$2",get children(){return[e(i,{colorScheme:"accent",get loading(){return m()},onClick:a,get children(){return r("global.refresh")}}),e(i,{onClick:()=>{c("/@manage/metas/add")},get children(){return r("global.add")}})]}}),e(S,{w:"$full",overflowX:"auto",get children(){return e(v,{highlightOnHover:!0,dense:!0,get children(){return[e(F,{get children(){return e(o,{get children(){return[e(g,{each:["path","password","write"],children:t=>e(u,{get children(){return r(`metas.${t}`)}})}),e(u,{get children(){return r("global.operations")}})]}})}}),e(W,{get children(){return e(g,{get each(){return b()},children:t=>e(o,{get children(){return[e(n,{get children(){return t.path}}),e(n,{get children(){return t.password}}),e(n,{get children(){return e(L,{get yes(){return t.write}})}}),e(n,{get children(){return e(d,{spacing:"$2",get children(){return[e(i,{onClick:()=>{c(`/@manage/metas/edit/${t.id}`)},get children(){return r("global.edit")}}),e(H,{get name(){return t.path},get loading(){return w()===t.id},onClick:async()=>{const s=await T(t.id);h(s,()=>{x.success(r("global.delete_success")),a()})}})]}})}})]}})})}})]}})}})]}})};export{O as default};