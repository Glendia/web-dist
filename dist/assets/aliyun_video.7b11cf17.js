import{u as w,o as n,as as x,cw as m,bX as v,a as k,bj as _,_ as j,aw as F,bp as L,n as O,i as S,e as W,j as c,Z as A}from"./index.4754c251.js";import{a as C}from"./useUtil.5fbe65f7.js";import{O as P}from"./icon.b6af8ce5.js";import{H as z,a as B,A as I,V as N}from"./video_box.2cb98755.js";import"./api.17451a78.js";import"./index.b990f0ee.js";import"./index.83ee708f.js";import"./Layout.0bfb8782.js";import"./Markdown.c918f094.js";import"./index.1885482e.js";import"./FolderTree.aa00b06c.js";const J=()=>{const{replace:h,pathname:d}=w(),{proxyLink:l}=C();let i=n.objs.filter(e=>e.type===P.VIDEO);i.length===0&&(i=[n.obj]);let o,s={id:d(),container:"#video-player",title:n.obj.name,volume:.5,autoplay:x("video_autoplay"),autoSize:!1,autoMini:!0,loop:!1,flip:!0,playbackRate:!0,aspectRatio:!0,setting:!0,hotkey:!0,pip:!0,mutex:!0,fullscreen:!0,fullscreenWeb:!0,subtitleOffset:!0,miniProgressBar:!1,playsInline:!0,quality:[],plugins:[],whitelist:[],moreVideoAttr:{"webkit-playsinline":!0,playsInline:!0},type:"m3u8",customType:{m3u8:function(e,t){const r=new z;r.loadSource(t),r.attachMedia(e),e.src||(e.src=t)}},lang:["en","zh-cn","zh-tw"].includes(m().toLowerCase())?m().toLowerCase():"en",lock:!0,fastForward:!0,autoPlayback:!0,autoOrientation:!0,airplay:!0};const u=n.related.find(e=>{for(const t of[".srt",".ass",".vtt"])if(e.name.endsWith(t))return!0;return!1}),f=n.related.find(e=>{for(const t of[".xml"])if(e.name.endsWith(t))return!0;return!1});u&&(s.subtitle={url:l(u,!0),type:v(u.name)}),f&&(s.plugins=[B({danmuku:l(f,!0),speed:5,opacity:1,fontSize:25,color:"#FFFFFF",mode:0,margin:[0,"0%"],antiOverlap:!1,useWorker:!0,synchronousPlayback:!1,lockTime:5,maxLength:100,minWidth:200,maxWidth:400,theme:"dark"})]);const[R,y]=k(()=>_.post("/fs/other",{path:d(),password:j(),method:"video_preview"}));F(async()=>{const e=await y();L(e,t=>{const r=t.video_preview_play_info.live_transcoding_task_list.filter(a=>a.url);if(r.length===0){O.error("No transcoding video found");return}s.url=r[r.length-1].url,s.quality=r.map((a,p)=>({html:a.template_id,url:a.url,default:p===r.length-1})),o=new I(s),o.on("video:ended",()=>{if(!g())return;const a=i.findIndex(p=>p.name===n.obj.name);a<i.length-1&&h(i[a+1].name)}),u&&o.on("video:play",a=>{o.subtitle.url=l(u,!0)})})}),S(()=>{o==null||o.destroy()});const[g,b]=W();return c(N,{onAutoNextChange:b,get children(){return c(A,{w:"$full",h:"60vh",id:"video-player"})}})};export{J as default};