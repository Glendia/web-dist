import{b as r,aW as i,b9 as c,_ as p,h as o,a7 as u,a8 as d,ba as l}from"./index.f101cd32.js";const m=()=>{const{pathname:t}=r(),[s,n]=i(()=>c.post("/fs/other",{path:t(),password:p(),method:"doc_preview"}));return(async()=>{const a=await n();l(a,e=>{aliyun.config({mount:document.querySelector("#office-preview"),url:e.preview_url}).setToken({token:e.access_token})})})(),o(d,{get loading(){return s()},get children(){return o(u,{w:"$full",h:"70vh",id:"office-preview"})}})};export{m as default};