import{M as e}from"./Machine3DCard.7c4526f6.js";import{u as t,c as a,g as s,l,p as r,r as n,a as o,d as i,t as u,b as c,w as d,F as m,q as h,o as p,e as f,j as v,n as x,s as b,x as S}from"./vendor.5e620042.js";import{_ as M}from"./index.647400d6.js";const _=e=>(b("data-v-4a6b8875"),e=e(),S(),e),w={class:"mainPaddingX"},y={class:"py-4 px-8 sm:px-4 flex items-center text-lg myBorder"},g={class:"lg:hidden min-w-max text-title-h1"},A={class:"m-auto flex items-center justify-evenly md:w-full"},L={class:"border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded px-5 md:px-2.5 py-2.5 flex items-center"},I=_((()=>i("i",{class:"pe-7s-note2 pe-lg pe-fw pe-va"},null,-1))),j={class:"sm:hidden"},$={class:"mx-10 lg:mx-8 md:mx-0 border border-red-500 hover:border-opacity-50 bg-red-500 hover:bg-opacity-70 text-white rounded px-5 md:px-2.5 py-2.5 flex items-center"},C=_((()=>i("i",{class:"pe-7s-attention pe-lg pe-fw pe-va"},null,-1))),E={class:"sm:hidden"},R={class:"border border-yellow-600 text-yellow-400 hover:bg-yellow-600 hover:text-white rounded px-5 md:px-2.5 py-2.5 flex items-center"},T=_((()=>i("i",{class:"pe-7s-tools pe-lg pe-fw pe-va"},null,-1))),O={class:"sm:hidden"},k={class:"mt-7 pt-7 w-full flex flex-wrap text-sm text-white shadow myBorder"};var D=M({setup(b){const S=t();a((()=>S.state.resData.token)),a((()=>S.state.serverURL));const M=s(),_=a((()=>M.locale.value)),D=a((()=>S.state.refreshMilliSec)),W=l(0),N=l(0),B=l([]),U=l([]),q=a((()=>B.value.length)),z=a((()=>{let e={tw:"zh",cn:"ch",jp:"jp",en:"en"}[_.value];return U.value.filter((t=>t&&t.ECLLanguage==e))})),F=()=>{let e=S.state.fakeData.machineStatusOutOfOrder;W.value=e.allLineNum||0,N.value=e.allWarningNum||0,B.value=Array.isArray(e.ErrorMachineInfo)?e.ErrorMachineInfo:[],U.value=Array.isArray(e.ErrorCodeList)?e.ErrorCodeList:[]};F();var P=setInterval((function(){F()}),D.value);return r((e=>{clearInterval(P)})),(t,a)=>{const s=n("router-link");return p(),o("main",w,[i("section",y,[i("h1",g,u(t.$t("MachineStatusAll.MS_STATUS")),1),i("article",A,[c(s,{to:"/machine_status"},{default:d((()=>[i("button",L,[I,i("span",j,u(t.$t("MachineStatusAll.MS_ALL"))+u(t.$t("MachineStatusAll.MS_LIST")),1),f(" ("+u(W.value)+") ",1)])])),_:1}),c(s,{to:"/machine_status_out_of_order"},{default:d((()=>[i("button",$,[C,i("span",E,u(t.$t("MachineStatusAll.MS_ERROR"))+u(t.$t("MachineStatusAll.MS_LIST")),1),f(" ("+u(v(q))+") ",1)])])),_:1}),c(s,{to:"/machine_status_warning"},{default:d((()=>[i("button",R,[T,i("span",O,u(t.$t("MachineStatusAll.MS_WARN"))+u(t.$t("MachineStatusAll.MS_LIST")),1),f(" ("+u(N.value)+") ",1)])])),_:1})])]),i("section",k,[(p(!0),o(m,null,h(B.value,((t,a)=>(p(),o("div",{class:x(["machineLineDiv mb-7",[3==v(q)?"cardWidthThree":"cardWidth"]]),key:"errorMachineInfo"+a},[c(e,{isRotate:!1,status:"Out",machineInfo:t,errorCodeList:v(z),class:"rounded-xl m-auto"},null,8,["machineInfo","errorCodeList"])],2)))),128))])])}}},[["__scopeId","data-v-4a6b8875"]]);export{D as default};
