import{u as e,g as t,c as a,l as s,m as l,a as n,d as i,t as o,B as r,j as u,i as d,z as c,G as m,F as v,q as f,s as p,x,o as w,n as L}from"./vendor.5e620042.js";import{_ as y,l as h,a as b,e as R}from"./index.647400d6.js";const A=e=>(p("data-v-406562ae"),e=e(),x(),e),I={class:"mainPaddingX"},g={class:"py-4 text-4xl text-title-h1"},B={class:"w-full shadow"},T={class:"theWidth mb-4 px-8 sm:px-2 py-4 text-white text-sm myBorder"},D={class:"mx-2"},_={type:"submit",class:"btn btnBlueColor"},O={class:"theWidth shadow myBorder"},j={class:"flex sm:flex-wrap items-center justify-between h-16 sm:h-auto py-4 px-8 sm:px-4 titleStyle border-b"},E={class:"flex items-center text-xl sm:mb-1"},G=A((()=>i("i",{class:"pe-7s-tools pe-lg pe-va"},null,-1))),M={class:"ml-3 mr-1"},k={class:"relative -top-px"},S={class:"flex sm:flex-row-reverse"},C={class:"px-8 sm:px-2 py-6 sm:py-4 text-gray-500 text-sm"},$={class:"flex sm:flex-wrap items-center flex-row-reverse mb-4 w-full"},U=["value"],N={class:"mr-2"},P={class:"sm:hidden mb-2 flex w-full text-white tableThStyle"},V={class:"w-full flex"},F=A((()=>i("div",{class:"w-2/12 text-center overflow-hidden"},null,-1))),q={class:"w-10/12 text-center overflow-hidden"},z={class:"w-2/12 text-center overflow-hidden"},H={class:"mb-6 w-full shadow-2xl sm:shadow-none"},W={class:"w-2/12 sm:w-full py-2 sm:pt-0 sm:px-4 flex justify-center sm:justify-between"},X={class:"hidden sm:block w-2/12 text-lg"},J={class:"w-full flex justify-center sm:justify-end"},K=["onClick"],Q={class:"w-full flex sm:flex-wrap sm:text-lg"},Y={class:"sm:hidden w-2/12 flex justify-center items-center"},Z={class:"w-10/12 sm:w-full flex sm:block sm:px-4 sm:mb-1 justify-center items-center"},ee={class:"hidden sm:inline-block mr-4"},te=["onUpdate:modelValue","onChange"],ae={class:"w-full flex sm:block flex-row-reverse"},se={class:"w-2/12 sm:w-full sm:px-4 flex justify-center sm:justify-end"},le=A((()=>i("div",{class:"w-full"},null,-1)));var ne=y({props:{newAddReasonId:String},setup(p){const x=p,y=e(),A=t();a((()=>y.state.resData.token)),a((()=>y.state.serverURL));const ne=a((()=>A.locale.value)),ie=a((()=>h)),oe=s(""),re=()=>oe.value="",ue=s({}),de=a((()=>((e={},t="en")=>{let a=0,s=R(),l=s.isObject(e),n=s.dataLength(e);if(l&&n>0){let s=e[t];Array.isArray(s)&&s.length>0&&(a=s.length)}return a})(ue.value,me.value))),ce=e=>{let t={en:[],jp:[],cn:[],tw:[],other:[]};return Array.isArray(e)&&e.length>0&&e.forEach((e=>{if(e.Language){let a=(e=>{let t="other";if("object"==typeof e&&!Array.isArray(e)&&e.Language){let a=e.Language;"en"==a&&(t="en"),"ja"!=a&&"jp"!=a||(t="jp"),"ch"!=a&&"cn"!=a||(t="cn"),"zh"!=a&&"tw"!=a||(t="tw")}return t})(e);t[a].push(e)}})),t},me=s(ne.value),ve=s(0),fe=s([]),pe=()=>{let e=y.state.fakeData.theMaintainReason;parseInt(e.Maintain_Time,10)>0&&(ve.value=parseInt(e.Maintain_Time,10)),fe.value=e.maintainReasonList,ue.value=ce(fe.value)};pe();const xe=(we=!1,()=>{if(!we){we=!0,y.state.fakeData.theMaintainReason.Maintain_Time=ve.value;let e=b(ne.value).saveSuccess;return alert(e),void(we=!1)}});var we;const Le=s([]),ye=function(e){return()=>{if(!e&&(re(),Le.value.length>0)){e=!0;let t=y.state.fakeData.theMaintainReason.maintainReasonList;Le.value.forEach((e=>{let a=t.find((t=>(null==t?void 0:t.ReasonID)==(null==e?void 0:e.ReasonID)));a&&(a.Title=e.Title)}));let a=b(ne.value).saveSuccess;return alert(a),void(e=!1)}}}(!1),he=()=>y.commit("onPopupForm","maintainReason");return l((()=>x.newAddReasonId),(e=>{oe.value=e})),l((()=>oe.value),(e=>{e&&pe()})),(e,t)=>(w(),n("main",I,[i("h1",g,o(e.$t("MaintainReason.MR_TITLE")),1),i("div",B,[i("div",T,[i("form",{class:"flex sm:flex-wrap items-center w-full",onSubmit:t[1]||(t[1]=r(((...e)=>u(xe)&&u(xe)(...e)),["prevent"]))},[i("div",null,o(e.$t("MaintainReason.MR_REPAIR"))+o(e.$t("GLOBAL.GLOBAL_TIME"))+"("+o(e.$t("MaintainReason.MR_UNIT"))+":"+o(e.$t("GLOBAL.GLOBAL_HOUR"))+"): ",1),i("div",D,[d(i("input",{type:"number",class:"myInput",min:"0",max:"3000","onUpdate:modelValue":t[0]||(t[0]=e=>ve.value=e),required:""},null,512),[[c,ve.value]])]),i("button",_,o(e.$t("GLOBAL.GLOBAL_SUBMIT")),1)],32)]),i("div",O,[i("div",j,[i("div",E,[G,i("span",M,o(e.$t("GLOBAL.GLOBAL_LIST")),1),i("span",k,"("+o(u(de))+")",1)]),i("div",S,[i("button",{type:"button",class:"btn btnBlueColor",onClick:he},o(e.$t("GLOBAL.GLOBAL_ADD")),1)])]),i("div",C,[i("div",$,[d(i("select",{class:"myInputSearch","onUpdate:modelValue":t[2]||(t[2]=e=>me.value=e)},[(w(!0),n(v,null,f(u(ie),((e,t)=>(w(),n("option",{key:"language_lists"+t,value:e.key},o(e.description),9,U)))),128))],512),[[m,me.value]]),i("div",N,o(e.$t("Personal.PSL_SELECTLANG"))+" :",1)]),i("div",P,[i("div",V,[F,i("div",q,o(e.$t("MaintainReason.MR_REASONNAME")),1)]),i("div",z,o(e.$t("GLOBAL.GLOBAL_DELETE")),1)]),i("div",H,[(w(!0),n(v,null,f(ue.value[me.value],((t,a)=>(w(),n("div",{key:"showDataSingle"+a,class:L([[t.ReasonID==oe.value?"isNewBgColor":""],"py-2 sm:py-5 flex sm:block flex-row-reverse tableHover text-white border-t sm:shadow-lg border-gray-800 rounded"])},[i("div",W,[i("div",X,o(a+1)+". ",1),i("div",J,[i("button",{type:"button",class:"btn btnRedColor",onClick:e=>((e="")=>{re();let t=b(ne.value),a=t.confirmDelete;confirm(a)&&(()=>{let a=y.state.fakeData.theMaintainReason.maintainReasonList,s=a.findIndex((t=>(null==t?void 0:t.ReasonID)==e));if(s>=0){a.splice(s,1);let e=t.deleteSuccess;alert(e),pe()}})()})(t.ReasonID)},o(e.$t("GLOBAL.GLOBAL_DELETE")),9,K)])]),i("div",Q,[i("div",Y,o(a+1)+". ",1),i("div",Z,[i("span",ee,o(e.$t("ErrorCodeList.ECL_INFO"))+" :",1),d(i("input",{type:"text",class:"myInput w-96 sm:w-full","onUpdate:modelValue":e=>t.Title=e,onChange:r((e=>(e=>{if("object"==typeof e&&!Array.isArray(e)&&e.ReasonID){let t=Le.value.findIndex((t=>t.ReasonID==e.ReasonID));if(t>=0)Le.value[t].Title=e.Title;else{let t={ReasonID:e.ReasonID,Title:e.Title,Type:e.Type};Le.value.push(t)}}})(t)),["prevent"])},null,40,te),[[c,t.Title]])])])],2)))),128))]),i("div",ae,[i("div",se,[i("button",{type:"button",class:"btn btnBlueColor",onClick:t[3]||(t[3]=(...e)=>u(ye)&&u(ye)(...e))},o(e.$t("GLOBAL.GLOBAL_SAVE")),1)]),le])])])])]))}},[["__scopeId","data-v-406562ae"]]);export{ne as default};
