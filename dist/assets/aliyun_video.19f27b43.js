import{u as v,o as n,as as w,cv as m,bW as x,a as k,bj as _,_ as j,aw as F,bp as W,n as L,i as O,e as S,j as c,Z as A}from"./index.be808c1f.js";import{a as C}from"./useUtil.1180ee9c.js";import{O as P}from"./icon.d0274306.js";import{H as z,a as B,A as I,V as N}from"./video_box.8709f40d.js";import"./api.8a7af244.js";import"./index.3f8a9893.js";import"./index.46287c3f.js";import"./Layout.44438c8c.js";import"./Markdown.bbb7a05d.js";import"./index.a975a8c1.js";import"./FolderTree.1023228b.js";const K=()=>{const{replace:h,pathname:d}=v(),{proxyLink:l}=C();let i=n.objs.filter(e=>e.type===P.VIDEO);i.length===0&&(i=[n.obj]);let o,s={id:d(),container:"#video-player",title:n.obj.name,volume:.5,autoplay:w("video_autoplay"),autoSize:!1,autoMini:!0,loop:!1,flip:!0,playbackRate:!0,aspectRatio:!0,setting:!0,hotkey:!0,pip:!0,mutex:!0,fullscreen:!0,fullscreenWeb:!0,subtitleOffset:!0,miniProgressBar:!1,playsInline:!0,quality:[],plugins:[],whitelist:[],moreVideoAttr:{"webkit-playsinline":!0,playsInline:!0},type:"m3u8",customType:{m3u8:function(e,t){const r=new z;r.loadSource(t),r.attachMedia(e),e.src||(e.src=t)}},lang:["en","zh-cn","zh-tw"].includes(m().toLowerCase())?m().toLowerCase():"en",lock:!0,fastForward:!0,autoPlayback:!0,autoOrientation:!0,airplay:!0};const u=n.related.find(e=>{for(const t of[".srt",".ass",".vtt"])if(e.name.endsWith(t))return!0;return!1}),f=n.related.find(e=>{for(const t of[".xml"])if(e.name.endsWith(t))return!0;return!1});u&&(s.subtitle={url:l(u,!0),type:x(u.name)}),f&&(s.plugins=[B({danmuku:l(f,!0),speed:5,opacity:1,fontSize:25,color:"#FFFFFF",mode:0,margin:[0,"0%"],antiOverlap:!1,useWorker:!0,synchronousPlayback:!1,lockTime:5,maxLength:100,minWidth:200,maxWidth:400,theme:"dark"})]);const[R,y]=k(()=>_.post("/fs/other",{path:d(),password:j(),method:"video_preview"}));F(async()=>{const e=await y();W(e,t=>{const r=t.video_preview_play_info.live_transcoding_task_list.filter(a=>a.url);if(r.length===0){L.error("No transcoding video found");return}s.url=r[r.length-1].url,s.quality=r.map((a,p)=>({html:a.template_id,url:a.url,default:p===r.length-1})),o=new I(s),o.on("video:ended",()=>{if(!g())return;const a=i.findIndex(p=>p.name===n.obj.name);a<i.length-1&&h(i[a+1].name)}),u&&o.on("video:play",a=>{o.subtitle.url=l(u,!0)})})}),O(()=>{o==null||o.destroy()});const[g,b]=S();return c(N,{onAutoNextChange:b,get children(){return c(A,{w:"$full",h:"60vh",id:"video-player"})}})};export{K as default};
