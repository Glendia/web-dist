import{u as v,a as l,b4 as r,br as $,bN as C,d as w,e as t,bO as I,af as R,bc as o,n as u,$ as L,B as p,V as T}from"./index.990867b1.js";import{u as _}from"./useT.e3a47100.js";import{b as x}from"./useTitle.61c80c89.js";import{I as B}from"./SettingItem.52b82097.js";import{R as V}from"./ResponsiveGrid.a22570f1.js";import"./index.7213bfa5.js";import"./index.b00468c5.js";import"./item_type.be442da4.js";const q=m=>{const s=_(),{pathname:d}=v();x(`manage.sidemenu.${d().split("/").pop()}`);const[h,f]=l(()=>r.get(`/admin/setting/list?group=${m.group}`)),[i,c]=$([]),a=async()=>{const e=await f();o(e,c)};a();const[b,S]=l(()=>r.post("/admin/setting/save",C(i))),[k,g]=w(!1);return t(T,{w:"$full",alignItems:"start",spacing:"$2",get children(){return[t(V,{get children(){return t(I,{each:i,children:(e,D)=>t(B,R(e,{onChange:n=>{c(y=>e().key===y.key,"value",n)},onDelete:async()=>{g(!0);const n=await r.post(`/admin/setting/delete?key=${e().key}`);g(!1),o(n,()=>{u.success(s("global.delete_success")),a()})}}))})}}),t(L,{spacing:"$2",get children(){return[t(p,{colorScheme:"accent",onClick:a,get loading(){return h()||k()},get children(){return s("global.refresh")}}),t(p,{get loading(){return b()},onClick:async()=>{const e=await S();o(e,()=>u.success(s("global.save_success")))},get children(){return s("global.save")}})]}})]}})};export{q as default};