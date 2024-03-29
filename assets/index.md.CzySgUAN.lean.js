import{d as r,h as b,k as M,l as w,A as k,o as u,c as _,m as c,R as $,_ as g,J as n,w as a,p as l,a as h,q as y,s as z}from"./chunks/framework.BpLZpJbo.js";import{n as x}from"./chunks/index.Da_DU5FM.js";const F={class:"bg","aria-hidden":"true"},C=r({__name:"LandingBackground",setup(o){const e=b(new Array(15).fill(0).map(()=>[Math.random(),Math.random()])),i=M(()=>e.value.map(([t,s])=>`${t*100}% ${s*100}%`).join(", "));function m(t){return Math.random()>.5?t+(Math.random()-.5)/2:Math.random()}let d;function p(){for(let t=0;t<e.value.length;t++)e.value[t]=[m(e.value[t][0]),m(e.value[t][1])];d=setTimeout(p,2e3+Math.random()*1e3)}return w(()=>{p(),k(()=>clearTimeout(d))}),(t,s)=>(u(),_("div",F,[c("div",{class:"aspect-[1.7] h-full w-full bg-canvas",style:$({"clip-path":`polygon(${i.value})`})},null,4)]))}}),B=g(C,[["__scopeId","data-v-6da963aa"]]),L={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},I=c("path",{d:"M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z",fill:"currentColor"},null,-1),S=[I],q=r({name:"ChatBubbleFilled",render:function(e,i){return u(),_("svg",L,S)}}),D={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},H=c("path",{d:"M19 9h-4V3H9v6H5l7 7l7-7zM5 18v2h14v-2H5z",fill:"currentColor"},null,-1),N=[H],P=r({name:"FileDownloadFilled",render:function(e,i){return u(),_("svg",D,N)}}),j={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},R=c("path",{d:"M9.19 6.35c-2.04 2.29-3.44 5.58-3.57 5.89l-2.26-.97c-.65-.28-.81-1.13-.31-1.63l3.01-3.01c.47-.47 1.15-.68 1.81-.55l1.32.27zm1.49 10.16c.3.3.74.38 1.12.2c1.16-.54 3.65-1.81 5.26-3.42c4.59-4.59 4.63-8.33 4.36-9.93a.979.979 0 0 0-.79-.79c-1.6-.27-5.34-.23-9.93 4.36c-1.61 1.61-2.87 4.1-3.42 5.26c-.18.38-.09.83.2 1.12l3.2 3.2zm6.97-1.7c-2.29 2.04-5.58 3.44-5.89 3.57l.97 2.26c.28.65 1.13.81 1.63.31l3.01-3.01c.47-.47.68-1.15.55-1.81l-.27-1.32zm-8.71 2.6a3 3 0 0 1-.82 2.71c-.77.77-3.16 1.34-4.71 1.64c-.69.13-1.3-.48-1.17-1.17c.3-1.55.86-3.94 1.64-4.71a3 3 0 0 1 2.71-.82c1.17.22 2.13 1.18 2.35 2.35zM13 9c0-1.1.9-2 2-2s2 .9 2 2s-.9 2-2 2s-2-.9-2-2z",fill:"currentColor"},null,-1),V=[R],T=r({name:"RocketLaunchRound",render:function(e,i){return u(),_("svg",j,V)}}),f=o=>(y("data-v-07debbb4"),o=o(),z(),o),A={class:"title-box"},J=f(()=>c("div",{class:"title"},"DDSP 5.0",-1)),O=f(()=>c("div",{class:"sub-title"},"非官方整合包文档",-1)),X=f(()=>c("div",{class:"sub-sub-title"},"易于使用 | 可用 CPU 训练 | 面向小白",-1)),Q=r({__name:"main_page",setup(o){const{NButton:e,NFlex:i,useMessage:m}=x,d=t=>{typeof window<"u"&&(location.href=t)},p=m();return w(()=>{p.info("文档已迁移到 ddsp.dysjs.com, 旧域名不再维护"),console.log("mounted")}),(t,s)=>(u(),_("div",null,[c("div",A,[n(B),J,O,X]),n(l(i),{justify:"center"},{default:a(()=>[n(l(e),{type:"primary",size:"large",onClick:s[0]||(s[0]=v=>d("/start/"))},{icon:a(()=>[n(l(T))]),default:a(()=>[h(" 马上开始 ")]),_:1}),n(l(e),{type:"info",size:"large",onClick:s[1]||(s[1]=v=>d("https://qm.qq.com/cgi-bin/qm/qr?k=igP4OFTLm_-8QFpXb5l6qXrunFYJDMDt&jump_from=webapi&authKey=KlzIXtfCZmCm7mv+gFS7GXnUm+cL1DQ2OVoqaY8IOUxxREnIoAnIDHcJOHbQLTo0"))},{icon:a(()=>[n(l(q))]),default:a(()=>[h(" 加入群聊 ")]),_:1}),n(l(e),{type:"info",size:"large",onClick:s[2]||(s[2]=v=>d("/download/?link=aHR0cHM6Ly93d3cuMTIzcGFuLmNvbS9zL0JFektqdi1lQ3Fxdi5odG1s&version=MS4wLjAgcmMxMS1maXhlZA=="))},{icon:a(()=>[n(l(P))]),default:a(()=>[h(" 下载最新版本 1.0.0 rc11-fixed ")]),_:1})]),_:1})]))}}),U=g(Q,[["__scopeId","data-v-07debbb4"]]),Y=JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home"},"headers":[],"relativePath":"index.md","filePath":"index.md"}'),G={name:"index.md"},Z=r({...G,setup(o){const{NMessageProvider:e}=x;return(i,m)=>(u(),_("div",null,[n(l(e),null,{default:a(()=>[n(U)]),_:1})]))}});export{Y as __pageData,Z as default};
