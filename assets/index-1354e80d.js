import{_ as c,o as a,c as s,a as n}from"./index-401a6ed3.js";const l={name:"ndSvg",methods:{handlerClick(e){console.log("click circle",e.target.tagName),e.target.tagName==="circle"&&alert(e.target.tagName)}}},d={class:"svg"},i=["stroke-dasharray"];function _(e,t,g,h,m,r){return a(),s("div",d,[(a(),s("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",onClick:t[0]||(t[0]=(...o)=>r.handlerClick&&r.handlerClick(...o)),width:"200",height:"200"},[n("circle",{r:80,cx:60,cy:60,stroke:"yellow","stroke-dasharray":`${Math.PI*40},100000`,"stroke-width":80,transform:"rotate(-135)","transform-origin":"center",fill:"none"},null,8,i)]))])}const f=c(l,[["render",_],["__scopeId","data-v-ee20d5d2"]]);export{f as default};