import{j as n,$ as d,o,bW as i}from"./index.be808c1f.js";import{d as s}from"./useUtil.1180ee9c.js";import{M as m}from"./Markdown.bbb7a05d.js";import"./api.8a7af244.js";const b=()=>{const[t]=s(),a=e=>o.obj.name.endsWith(".md")?e:"```"+i(o.obj.name)+`
`+e+"\n```";return n(d,{get loading(){return t.loading},get children(){return n(m,{get children(){var e,r;return a((r=(e=t())==null?void 0:e.content)!=null?r:"")}})}})};export{b as default};
