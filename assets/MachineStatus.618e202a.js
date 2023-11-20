import{_ as e,f as t}from"./index.4332a85f.js";import{c as a,r as l,o as s,a as n,d as r,t as o,j as i,n as c,f as u,b as d,w as p,s as f,x as g,u as m,l as b,p as h,F as v,q as x,e as y}from"./vendor.5e620042.js";const w=e=>(f("data-v-6d4f6be8"),e=e(),g(),e),_={class:"w-60 m-auto"},S={class:"w-full relative h-44"},M={class:"absolute top-0 right-0 w-32 h-16 border-2 border-red-500 rounded-xl"},I=w((()=>r("div",{class:"absolute -left-3 top-10 w-3 h-1 border-t-2 border-red-500"},null,-1))),L={class:"pt-2 pl-2 truncate"},A={class:"pl-2 truncate"},O={class:"machineLine absolute left-5 bottom-0"},j=w((()=>r("img",{src:"./assets/line.c0546a1d.svg",alt:"",srcset:""},null,-1))),k=w((()=>r("div",{class:"bgDiv"},null,-1))),D=w((()=>r("div",{class:"bgSun bg-white bg-opacity-50"},null,-1))),$={key:0,class:"absolute top-20 -right-14 animate-pulse flex items-center px-1 py-1 rounded text-white focus:outline-none bg-red-600 bg-opacity-70 hover:bg-opacity-90 shadow-2xl"},N=[w((()=>r("i",{class:"pe-7s-attention pe-2x pe-fw pe-va"},null,-1)))],T=w((()=>r("i",{class:"pe-7s-cloud-upload pe-lg pe-fw pe-va"},null,-1))),q=w((()=>r("i",{class:"pe-7s-cloud-download pe-lg pe-fw pe-va"},null,-1))),R=w((()=>r("i",{class:"pe-7s-attention pe-lg pe-fw pe-va"},null,-1))),W=w((()=>r("i",{class:"pe-7s-tools pe-lg pe-fw pe-va"},null,-1)));var B=e({props:{cardInfo:Object},setup(e){const f=e,g=(e="",a="")=>t(e,a,f.cardInfo),m=a((()=>g("LineID",""))),b=a((()=>g("LineName",""))),h=a((()=>g("MachineTotal",0))),v=a((()=>g("Online",0))),x=a((()=>g("Offline",0))),y=a((()=>g("Error",0))),w=a((()=>g("Warning",0)));return(e,t)=>{const a=l("router-link");return s(),n("main",_,[r("section",S,[r("article",M,[I,r("p",L," > "+o(i(b)),1),r("p",A," >> ( "+o(i(h))+" ) ",1)]),r("article",O,[j,r("img",{src:"./assets/line_package.f6930282.svg",alt:"",srcset:"",class:c(["w-8",[i(y)>0?"package":"packageWithAnimate"]])},null,2),k,D,i(y)>0?(s(),n("div",$,N)):u("",!0)])]),r("section",{class:c(["grid grid-cols-2 gap-3 w-full font-bold myBorder p-3",[i(y)>0?"bg-red-400 bg-opacity-60":""]])},[d(a,{class:"flex items-center justify-center w-full h-11 text-lg rounded focus:outline-none bg-green-btn bg-opacity-80 hover:bg-opacity-100 truncate",to:{name:"MachineOnline",query:{LineID:i(m),direction:"On"}}},{default:p((()=>[T,r("span",null,o(i(v)),1)])),_:1},8,["to"]),d(a,{class:"flex items-center justify-center w-full h-11 text-lg rounded text-gray-600 focus:outline-none bg-gray-300 bg-opacity-80 hover:bg-opacity-100 truncate",to:{name:"MachineOnline",query:{LineID:i(m),direction:"Off"}}},{default:p((()=>[q,r("span",null,o(i(x)),1)])),_:1},8,["to"]),d(a,{class:"flex items-center justify-center w-full h-11 text-lg rounded focus:outline-none bg-red-600 bg-opacity-80 hover:bg-opacity-100 truncate",to:{name:"MachineOnline",query:{LineID:i(m),direction:"Out"}}},{default:p((()=>[R,r("span",null,o(i(y)),1)])),_:1},8,["to"]),d(a,{class:"flex items-center justify-center w-full h-11 text-lg rounded focus:outline-none bg-yellow-400 bg-opacity-80 hover:bg-opacity-100 truncate",to:{name:"MachineOnline",query:{LineID:i(m),direction:"Warning"}}},{default:p((()=>[W,r("span",null,o(i(w)),1)])),_:1},8,["to"])],2)])}}},[["__scopeId","data-v-6d4f6be8"]]);const E=e=>(f("data-v-9692c3e4"),e=e(),g(),e),U={class:"mainPaddingX"},F={class:"py-4 px-8 sm:px-4 flex items-center text-lg myBorder"},P={class:"lg:hidden min-w-max text-title-h1"},X={class:"m-auto flex items-center justify-evenly md:w-full"},z={class:"border border-blue-500 hover:border-opacity-50 bg-blue-500 hover:bg-opacity-80 text-white rounded px-5 md:px-2.5 py-2.5 flex items-center"},C=E((()=>r("i",{class:"pe-7s-note2 pe-lg pe-fw pe-va"},null,-1))),G={class:"sm:hidden"},H={class:"mx-10 lg:mx-8 md:mx-0 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white rounded px-5 md:px-2.5 py-2.5 flex items-center"},J=E((()=>r("i",{class:"pe-7s-attention pe-lg pe-fw pe-va"},null,-1))),K={class:"sm:hidden"},Q={class:"border border-yellow-600 text-yellow-400 hover:bg-yellow-600 hover:text-white rounded px-5 md:px-2.5 py-2.5 flex items-center"},V=E((()=>r("i",{class:"pe-7s-tools pe-lg pe-fw pe-va"},null,-1))),Y={class:"sm:hidden"},Z={class:"mt-7 pt-7 w-full flex flex-wrap text-sm text-white shadow myBorder"};var ee=e({setup(e){const t=m();a((()=>t.state.resData.token)),a((()=>t.state.serverURL));const c=a((()=>t.state.refreshMilliSec)),u=b(0),f=b(0),g=b([]),w=a((()=>g.value.length)),_=()=>{let e=t.state.fakeData.machineStatus;u.value=Number(e.allErrorNum)||0,f.value=Number(e.allWarningNum)||0,g.value=Array.isArray(e.LineInfo)?e.LineInfo:[]};_();var S=setInterval((function(){_()}),c.value);return h((e=>{clearInterval(S)})),(e,t)=>{const a=l("router-link");return s(),n("main",U,[r("section",F,[r("h1",P,o(e.$t("MachineStatusAll.MS_STATUS")),1),r("article",X,[d(a,{to:"/machine_status"},{default:p((()=>[r("button",z,[C,r("span",G,o(e.$t("MachineStatusAll.MS_ALL"))+o(e.$t("MachineStatusAll.MS_LIST")),1),y(" ("+o(i(w))+") ",1)])])),_:1}),d(a,{to:"/machine_status_out_of_order"},{default:p((()=>[r("button",H,[J,r("span",K,o(e.$t("MachineStatusAll.MS_ERROR"))+o(e.$t("MachineStatusAll.MS_LIST")),1),y(" ("+o(u.value)+") ",1)])])),_:1}),d(a,{to:"/machine_status_warning"},{default:p((()=>[r("button",Q,[V,r("span",Y,o(e.$t("MachineStatusAll.MS_WARN"))+o(e.$t("MachineStatusAll.MS_LIST")),1),y(" ("+o(f.value)+") ",1)])])),_:1})])]),r("section",Z,[(s(!0),n(v,null,x(g.value,((e,t)=>(s(),n("div",{class:"machineLineDiv mb-7",key:"LineInfo"+t},[d(B,{cardInfo:e},null,8,["cardInfo"])])))),128))])])}}},[["__scopeId","data-v-9692c3e4"]]);export{ee as default};
