import{g as e,c as t,u as l,l as a,a as s,d as n,t as u,i,z as r,W as o,B as d,j as c,G as m,F as v,q as p,s as f,x,o as I}from"./vendor.5e620042.js";import{_ as S,a as T}from"./index.647400d6.js";const y=e=>(f("data-v-f1da1300"),e=e(),x(),e),b={class:"mainPaddingX"},w={class:"flex sm:block py-4 sm:mb-4 text-4xl text-title-h1"},N={class:"flex sm:block justify-between mb-5"},h={class:"mr-5 sm:mr-0 sm:mb-5 w-6/12 sm:w-full shadow myBorder"},E={class:"flex items-center h-16 pl-8 pr-4 titleStyle border-b"},O={class:"flex items-center text-xl"},k=y((()=>n("i",{class:"pe-7s-star pe-lg pe-va"},null,-1))),_={class:"ml-3 mr-1"},D={class:"pl-8 pr-4 py-6 sm:py-4 text-white text-sm"},g={class:"mb-5 flex flex-wrap items-center"},U={class:"w-40"},$={class:"inputWidth"},A={class:"mb-5 flex flex-wrap items-center"},L={class:"w-40"},W={class:"inputWidth"},B={class:"mb-5 flex flex-wrap items-center"},C={class:"w-40"},R={class:"inputWidth"},V={class:"w-6/12 sm:w-full sm:shadow myBorder h-full"},G={class:"flex items-center h-16 pl-8 pr-4 titleStyle border-b"},M={class:"flex items-center text-xl"},q=y((()=>n("i",{class:"pe-7s-clock pe-lg pe-va"},null,-1))),F={class:"ml-3 mr-1"},j={class:"pl-8 pr-4 py-6 sm:py-4 text-white text-sm"},K={class:"mb-5 flex flex-wrap items-center"},P={class:"w-40"},J={class:"inputWidth"},Y=["value"],z={class:"mb-5 flex flex-wrap items-center"},H={class:"w-40"},X={class:"inputWidth"},Q=["value"],Z={class:"mb-5 flex flex-wrap items-center"},ee={class:"w-40"},te={class:"flex inputWidth"},le={class:"restInputWidth mr-4"},ae=["value"],se={class:"restInputWidth"},ne=["value"],ue={class:"mb-5 flex flex-wrap items-center"},ie={class:"w-40"},re={class:"flex inputWidth"},oe={class:"restInputWidth mr-4"},de=["value"],ce={class:"restInputWidth"},me=["value"];var ve=S({setup(f){const x=e(),S=t((()=>x.locale.value)),y=l();t((()=>y.state.resData.token)),t((()=>y.state.serverURL));const ve=(e="00:00")=>{let t=e.split(":"),l=Number(t[0])||0,a=Number(t[1])||0;return l==1/0||a==1/0?0:100*l+a},pe=(e="00:00",t="00:00",l=60)=>{let a=[],s=ve(e),n=ve(t);if(!s||!n||!Number(l)||Number(l)==1/0)return a;if(n>s){let e=(e=0)=>{let t=e.toString();return t.length<2&&(t="0"+t),t};for(let t=s;t<=n;t+=l/60*100){let l=t%100/100*60,s=e(parseInt(t/100))+":"+e(l);a.push({description:s,value:s})}}return a},fe=t((()=>({on:pe("06:00","10:00",60),off:pe("16:00","23:00",60)}))),xe=t((()=>{let e={tw:"無",cn:"无",jp:"なし",en:"N/A"},t={description:e[S.value]||e.en,value:"00:00"};return{noon:{start:[t,...pe("11:00","13:00",60)],end:[t,...pe("12:00","14:00",60)]},afternoon:{start:[t,...pe("16:00","18:00",60)],end:[t,...pe("17:00","19:00",60)]}}})),Ie=a(""),Se=a(""),Te=a(10),ye=a("08:00"),be=a("17:00"),we=a("00:00"),Ne=a("00:00"),he=a("00:00"),Ee=a("00:00"),Oe=(e=!1)=>{let t=e?"initial":"now",l=y.state.fakeData.adminSetIndexSet[t];Ie.value=l.companyName||"",Se.value=l.factoryName||"",Te.value=Number(l.pollTime)/1e3||10,ye.value=l.workingTime,be.value=l.clockOutTime,we.value=l.noonBreakTimeStart,Ne.value=l.noonBreakTimeEnd,he.value=l.afternoonBreakTimeStart,Ee.value=l.afternoonBreakTimeEnd};Oe();const ke=()=>Te.value>99?Te.value=99:Te.value<1?Te.value=1:void 0,_e=()=>{{(()=>{let e={companyName:Ie.value,workTime:ye.value,clockOutTime:be.value};y.commit("changeCompanyName",e),y.commit("updateRefreshMilliSec",1e3*Number(Te.value));let t=JSON.parse(sessionStorage.getItem("users")||"{}");t.companyName=Ie.value,t.workTime=ye.value,t.clockOutTime=be.value,sessionStorage.setItem("users",JSON.stringify(t)),sessionStorage.setItem("updateRefreshMilliSec",JSON.stringify(1e3*Number(Te.value))),document.title=Ie.value})();let e=T(S.value).saveSuccess;return void alert(e)}};return(e,t)=>(I(),s("main",b,[n("h1",w,u(e.$t("IndexSet.INDSET_SET")),1),n("button",{type:"button",class:"mb-5 btn btnGreenColor",onClick:t[0]||(t[0]=e=>Oe(!0))},u(e.$t("IndexSet.INDSET_REPLYTOORIGINAL")),1),n("div",N,[n("div",h,[n("div",E,[n("span",O,[k,n("span",_,u(e.$t("IndexSet.INDSET_GENERAL")),1)])]),n("div",D,[n("div",g,[n("div",U,u(e.$t("IndexSet.INDSET_FACTORYNAME")),1),n("div",$,[i(n("input",{type:"text",class:"myInput w-full","onUpdate:modelValue":t[1]||(t[1]=e=>Ie.value=e)},null,512),[[r,Ie.value]])])]),n("div",A,[n("div",L,u(e.$t("IndexSet.INDSET_FACTORYCODE")),1),n("div",W,[i(n("input",{type:"text",class:"myInput w-full","onUpdate:modelValue":t[2]||(t[2]=e=>Se.value=e)},null,512),[[r,Se.value]])])]),n("div",B,[n("div",C,u(e.$t("IndexSet.INDSET_REFLASH_TIME")),1),n("div",R,[i(n("input",{type:"number",min:"1",step:"1",max:"99",class:"myInput w-full","onUpdate:modelValue":t[3]||(t[3]=e=>Te.value=e),onChange:ke,onKeypress:t[4]||(t[4]=o(d((()=>{}),["prevent"]),["enter"]))},null,544),[[r,Te.value,void 0,{lazy:!0}]])])]),n("button",{type:"submit",class:"btn btnBlueColor",onClick:t[5]||(t[5]=(...e)=>c(_e)&&c(_e)(...e))},u(e.$t("GLOBAL.GLOBAL_UPDATE")),1)])]),n("div",V,[n("div",G,[n("span",M,[q,n("span",F,u(e.$t("IndexSet.INDSET_SHIFT_WORK")),1)])]),n("div",j,[n("div",K,[n("div",P,u(e.$t("IndexSet.INDSET_WORKTIME")),1),n("div",J,[i(n("select",{class:"w-full myInputSearch","onUpdate:modelValue":t[6]||(t[6]=e=>ye.value=e),required:""},[(I(!0),s(v,null,p(c(fe).on,((e,t)=>(I(),s("option",{key:"ontimes"+t,value:e.value},u(e.description),9,Y)))),128))],512),[[m,ye.value]])])]),n("div",z,[n("div",H,u(e.$t("IndexSet.INDSET_CLOCKOUT_TIME")),1),n("div",X,[i(n("select",{class:"w-full myInputSearch","onUpdate:modelValue":t[7]||(t[7]=e=>be.value=e),required:""},[(I(!0),s(v,null,p(c(fe).off,((e,t)=>(I(),s("option",{key:"offtimes"+t,value:e.value},u(e.description),9,Q)))),128))],512),[[m,be.value]])])]),n("div",Z,[n("div",ee,u(e.$t("IndexSet.INDSET_NOON"))+" "+u(e.$t("IndexSet.INDSET_TIMEOUT")),1),n("div",te,[n("div",le,[i(n("select",{class:"w-full myInputSearch","onUpdate:modelValue":t[8]||(t[8]=e=>we.value=e),required:""},[(I(!0),s(v,null,p(c(xe).noon.start,((e,t)=>(I(),s("option",{key:"noonStart"+t,value:e.value},u(e.description),9,ae)))),128))],512),[[m,we.value]])]),n("div",se,[i(n("select",{class:"w-full myInputSearch","onUpdate:modelValue":t[9]||(t[9]=e=>Ne.value=e),required:""},[(I(!0),s(v,null,p(c(xe).noon.end,((e,t)=>(I(),s("option",{key:"noonEnd"+t,value:e.value},u(e.description),9,ne)))),128))],512),[[m,Ne.value]])])])]),n("div",ue,[n("div",ie,u(e.$t("IndexSet.INDSET_AFTERNOON"))+" "+u(e.$t("IndexSet.INDSET_TIMEOUT")),1),n("div",re,[n("div",oe,[i(n("select",{class:"w-full myInputSearch","onUpdate:modelValue":t[10]||(t[10]=e=>he.value=e),required:""},[(I(!0),s(v,null,p(c(xe).afternoon.start,((e,t)=>(I(),s("option",{key:"afternoonStart"+t,value:e.value},u(e.description),9,de)))),128))],512),[[m,he.value]])]),n("div",ce,[i(n("select",{class:"w-full myInputSearch","onUpdate:modelValue":t[11]||(t[11]=e=>Ee.value=e),required:""},[(I(!0),s(v,null,p(c(xe).afternoon.end,((e,t)=>(I(),s("option",{key:"afternoonEnd"+t,value:e.value},u(e.description),9,me)))),128))],512),[[m,Ee.value]])])])]),n("button",{class:"btn btnBlueColor",onClick:t[12]||(t[12]=(...e)=>c(_e)&&c(_e)(...e))},u(e.$t("GLOBAL.GLOBAL_UPDATE")),1)])])])]))}},[["__scopeId","data-v-f1da1300"]]);export{ve as default};
