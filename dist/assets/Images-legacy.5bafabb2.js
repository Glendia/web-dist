System.register(["./index-legacy.87e1c49a.js","./Folder-legacy.851eec78.js","./index-legacy.ddd9c40c.js","./ImageWithError-legacy.2b7c74b0.js","./icon-legacy.aa6f9995.js","./helper-legacy.736f63b0.js","./GridItem-legacy.3b748443.js","./Layout-legacy.aee1bd75.js","./useTitle-legacy.1462b19e.js","./FolderTree-legacy.8ffe9143.js","./index-legacy.ddbd61c4.js","./video_box-legacy.b0b280d5.js","./_commonjs-dynamic-modules-legacy.cf19cda3.js","./Paginator-legacy.e29c2a43.js","./index-legacy.2e08aba4.js","./index-legacy.0b1c4f7c.js"],(function(e){"use strict";var t,r,n,a,l,i,c,o,s,d,g,u,b,j,h,m,p,f,y,x,w,$,_,v,k,M,C,I,S,L,E,G,z;return{setters:[e=>{t=e.bI,r=e.h,n=e.al,a=e.ax,l=e.m,i=e.k,c=e.aM,o=e.a5,s=e.a4,d=e.t,g=e.aO,u=e.dr,b=e.aC,j=e.S,h=e.av,m=e.aw,p=e.ad,f=e.a,y=e.G,x=e.a1,w=e.d0,$=e.l,_=e.bP,v=e.bQ},e=>{k=e.b},e=>{M=e.u},e=>{C=e.I},e=>{I=e.O,S=e.g},e=>{L=e.u,E=e.I,G=e.a},e=>{z=e.G},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{}],execute:function(){const F=e=>{const{isHide:f}=t();if(f(e.obj)||e.obj.type!==I.IMAGE)return null;const{setPathAs:y}=M(),x=r(a,{get color(){return n()},boxSize:"$12",get as(){return S(e.obj)}}),[w,$]=l(!1),_=i((()=>c()&&(w()||e.obj.selected))),{show:v}=k({id:1}),{rawLink:z}=o(),{isMouseSupported:F}=G(),K=L();return r(p.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.2},style:{"flex-grow":1},get children(){return r(s,{w:"$full",get classList(){return{selected:!!e.obj.selected}},class:"image-item viselect-item",get"data-index"(){return e.index},p:"$1",spacing:"$1",rounded:"$lg",transition:"all 0.3s",border:"2px solid transparent",get _hover(){return{border:`2px solid ${n()}`}},onMouseEnter:()=>{$(!0),y(e.obj.name,e.obj.is_dir,!0)},onMouseLeave:()=>{$(!1)},onContextMenu:t=>{d((()=>{g(!1),u(e.index,!0,!0)})),v(t,{props:e.obj})},get children(){return r(b,{w:"$full",pos:"relative",get children(){return[r(j,{get when(){return _()||F()&&e.obj.selected},get children(){return r(E,{pos:"absolute",left:"$1",top:"$1",get checked(){return e.obj.selected},onChange:t=>{u(e.index,t.target.checked)}})}}),r(C,{h:"150px",w:"$full",objectFit:"cover",rounded:"$lg",shadow:"$md",get fallback(){return r(h,{size:"lg"})},fallbackErr:x,get src(){return z(e.obj)},loading:"lazy",get cursor(){return F()||c()&&!K()?"default":"pointer"},"on:dblclick":t=>{F()&&(t.ctrlKey||t.metaKey||t.shiftKey||m.emit("gallery",e.obj.name))},"on:click":()=>{F()||(c()&&!K()?u(e.index,!e.obj.selected):m.emit("gallery",e.obj.name))}})]}})}})}})};e("default",(e=>{const t=f(),n=i((()=>r(w,{w:"$full",gap:"$1",templateColumns:"repeat(auto-fill, minmax(100px,1fr))",class:"image-folders",get children(){return r(y,{get each(){return x.objs.filter((e=>e.is_dir))},children:(e,t)=>r(z,{obj:e,get index(){return t()}})})}}))),{isMouseSupported:a,registerSelectContainer:l,captureContentMenu:c}=G();return l(),r(s,{"oncapture:contextmenu":c,get classList(){return{"viselect-container":a()}},spacing:"$2",w:"$full",get children(){return[r(j,{get when(){return"top"===$.show_folder_in_image_view},get children(){return n()}}),r(j,{get when(){return e.images.length>0},get fallback(){return r(_,{m:"$2",get children(){return t("home.no_images")}})},get children(){return r(v,{w:"$full",gap:"$1",flexWrap:"wrap",class:"image-images",get children(){return r(y,{get each(){return x.objs},children:(e,t)=>r(F,{obj:e,get index(){return t()}})})}})}}),r(j,{get when(){return"bottom"===$.show_folder_in_image_view},get children(){return n()}})]}})}))}}}));