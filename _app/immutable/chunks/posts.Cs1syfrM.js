import{w as l}from"./index.BI7v63FY.js";import{C as r,m as b}from"./scheduler.FGUOCI5T.js";function R(s){return(s==null?void 0:s.length)!==void 0?s:Array.from(s)}var d={BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const t={author:{avatar:"/assets/maskable@512.png",bio:"lorem ipsum dolor sit amet, consectetur adipiscing elit.",name:"John Doe",status:"🌸"},description:"Powered by SvelteKit/Urara",domain:d.URARA_SITE_DOMAIN??"urara-demo.netlify.app",lang:"en-US",protocol:d.URARA_SITE_PROTOCOL??!1?"http://":"https://",subtitle:"Sweet & Powerful SvelteKit Blog Template",themeColor:"#3D4451",title:"Urara"},A={sizes:"48x48",src:`${t.protocol+t.domain}/favicon.png`,type:"image/png"},O={180:{sizes:"180x180",src:`${t.protocol+t.domain}/assets/any@180.png`,type:"image/png"},192:{sizes:"192x192",src:`${t.protocol+t.domain}/assets/any@192.png`,type:"image/png"},512:{sizes:"512x512",src:`${t.protocol+t.domain}/assets/any@512.png`,type:"image/png"}},z={192:{sizes:"192x192",src:`${t.protocol+t.domain}/assets/maskable@192.png`,type:"image/png"},512:{sizes:"512x512",src:`${t.protocol+t.domain}/assets/maskable@512.png`,type:"image/png"}},D=[{name:"night",text:"🌃 Night"},{name:"lemonade",text:"🌃 Light"}],E={},k={nav:[{link:"/hello-world",text:"Get Started"},{link:"/hello-world/elements",text:"Elements"}]},C={nav:[{link:"/atom.xml",text:"Feed"},{link:"/sitemap.xml",text:"Sitemap"}]},P={locales:"en-US",options:{day:"numeric",month:"short",weekday:"long",year:"2-digit"}},T={},I=l({});function v(s){const e=s-1;return e*e*e+1}function L(s,{delay:e=0,duration:n=400,easing:o=b}={}){const a=+getComputedStyle(s).opacity;return{delay:e,duration:n,easing:o,css:i=>`opacity: ${i*a}`}}function V(s,{delay:e=0,duration:n=400,easing:o=v,x:a=0,y:i=0,opacity:g=0}={}){const c=getComputedStyle(s),p=+c.opacity,u=c.transform==="none"?"":c.transform,f=p*(1-g),[y,h]=r(a),[x,S]=r(i);return{delay:e,duration:n,easing:o,css:(m,$)=>`
			transform: ${u} translate(${(1-m)*y}${h}, ${(1-m)*x}${S});
			opacity: ${p-f*$}`}}const B=l([]),K=l([]);export{K as a,L as b,A as c,O as d,R as e,V as f,T as g,E as h,k as i,D as j,C as k,P as l,z as m,B as p,t as s,I as t};