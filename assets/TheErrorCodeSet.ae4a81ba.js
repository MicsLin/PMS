import{g as e,c as l,u as t,l as r,a as s,d as o,t as a,i as n,z as d,G as u,F as i,q as c,j as v,o as f,e as m,B as p}from"./vendor.5e620042.js";import{l as C,s as x,a as h}from"./index.647400d6.js";const w={class:"mainPaddingX"},y={class:"py-4 text-4xl text-title-h1"},b={class:"theWidth shadow myBorder"},L={class:"flex items-center justify-between h-16 pl-8 sm:pl-4 pr-10 sm:pr-4 text-lg titleStyle border-b"},E={class:"flex items-center text-xl"},I=o("i",{class:"pe-7s-attention pe-lg pe-va"},null,-1),g={class:"ml-3 mr-1"},k={class:"px-8 sm:px-2 py-6 sm:py-4 text-gray-500 text-sm"},j={class:"flex sm:flex-wrap items-center justify-between mb-4 w-full"},A={class:"flex items-center mb-1"},D=["placeholder"],S={class:"flex sm:flex-wrap items-center flex-row-reverse mb-4 w-full"},O=["value"],$={class:"mr-2"},_={class:"sm:hidden mb-2 flex w-full text-white tableThStyle"},B=o("div",{class:"w-2/12 text-center overflow-hidden"},null,-1),P={class:"w-4/12 text-center overflow-hidden"},G={class:"w-6/12 text-center overflow-hidden"},T={class:"mb-6 w-full shadow-2xl sm:shadow-none"},U={class:"hidden sm:block w-full py-2 sm:pt-0 sm:px-4 text-lg"},V={class:"w-full flex sm:flex-wrap sm:text-lg"},N={class:"sm:hidden w-2/12 flex justify-center items-center"},R={class:"w-4/12 sm:w-full flex sm:block sm:px-4 justify-center items-center"},F={class:"hidden sm:inline-block mr-1"},H={class:"w-6/12 sm:w-full flex sm:block sm:px-4 sm:mb-1 justify-center items-center"},z={class:"hidden sm:inline-block mr-4"},W=["onUpdate:modelValue","onChange"],q={class:"w-full flex flex-row-reverse"},X={setup(X){const J=e(),K=l((()=>J.locale.value)),M=t();l((()=>M.state.resData.token)),l((()=>M.state.serverURL));const Q=l((()=>C)),Y=r([]),Z=e=>{let l=[];return Array.isArray(e)&&e.length>0&&e.forEach((e=>{if(e.errorCode){let t=l.findIndex((l=>l.errorCode==e.errorCode)),r=(e=>{let l="other";if("object"==typeof e&&!Array.isArray(e)&&e.language){let t=e.language;"en"==t&&(l="en"),"ja"!=t&&"jp"!=t||(l="jp"),"ch"!=t&&"cn"!=t||(l="cn"),"zh"!=t&&"tw"!=t||(l="tw")}return l})(e);if(t>=0)"other"==r?l[t].other.push(e):l[t][r]=e;else{let t=(()=>{let e={errorCodeID:"",errorCode:"",errorCodeInfo:"",language:""};return{errorCode:"",en:e,jp:e,cn:e,tw:e,other:[]}})();t.errorCode=e.errorCode,"other"==r?t.other.push(e):t[r]=e,l.push(t)}}})),l},ee=r(K.value),le=r([]),te=r([]);!function(){let e=M.state.fakeData.theErrorCodeSet;le.value=e,Y.value=Z(le.value),te.value=Z(le.value)}();const re=r(""),se=()=>{re.value="",te.value=Y.value.map((e=>e))},oe=()=>{re.value?te.value=x(re.value,Y.value,"errorCode"):se()},ae=r([]),ne=(de=!1,()=>{if(!de){if(de=!0,0==ae.value.length)return de=!1;let e=M.state.fakeData.theErrorCodeSet;ae.value.forEach((l=>{let t=e.find((e=>(null==e?void 0:e.errorCodeID)==(null==l?void 0:l.ID)));t&&(t.errorCodeInfo=(null==l?void 0:l.ECLInfo)||"")}));let l=h(K.value).saveSuccess;return alert(l),void(de=!1)}});var de;return(e,l)=>(f(),s("main",w,[o("h1",y,a(e.$t("ErrorCodeList.ECL_TITLE")),1),o("div",b,[o("div",L,[o("div",null,[o("span",E,[I,o("span",g,a(e.$t("GLOBAL.GLOBAL_LIST")),1),o("span",null,"( "+a(te.value.length)+" )",1)])])]),o("div",k,[o("div",j,[o("div",A,[n(o("input",{type:"text",class:"myInput rounded-r-none w-60 sm:w-auto text-gray-500",placeholder:e.$t("ErrorCodeList.ECL_CODE"),"onUpdate:modelValue":l[0]||(l[0]=e=>re.value=e)},null,8,D),[[d,re.value]]),o("button",{type:"button",class:"btn btnSearchColor",onClick:oe},a(e.$t("Product.PRO_SEARCHBTN")),1)]),o("button",{type:"button",class:"btn btnBlueColor mb-1",onClick:se},a(e.$t("Product.PRO_SHOWALL")),1)]),o("div",S,[n(o("select",{class:"myInputSearch","onUpdate:modelValue":l[1]||(l[1]=e=>ee.value=e)},[(f(!0),s(i,null,c(v(Q),((e,l)=>(f(),s("option",{key:"languageList"+l,value:e.key},a(e.description),9,O)))),128))],512),[[u,ee.value]]),o("div",$,a(e.$t("Personal.PSL_SELECTLANG"))+" :",1)]),o("div",_,[B,o("div",P,a(e.$t("ErrorCodeList.ECL_CODE")),1),o("div",G,a(e.$t("ErrorCodeList.ECL_INFO")),1)]),o("div",T,[(f(!0),s(i,null,c(te.value,((l,t)=>(f(),s("div",{key:t,class:"py-2 sm:py-5 flex sm:block flex-row-reverse tableHover text-white border-t sm:shadow-lg border-gray-800 rounded"},[o("div",U,a(t+1)+". ",1),o("div",V,[o("div",N,a(t+1)+". ",1),o("div",R,[o("span",F,a(e.$t("ErrorCodeList.ECL_CODE"))+" :",1),m(" "+a(l.errorCode),1)]),o("div",H,[o("span",z,a(e.$t("ErrorCodeList.ECL_INFO"))+" :",1),n(o("input",{type:"text",class:"myInput w-full","onUpdate:modelValue":e=>l[ee.value].errorCodeInfo=e,onChange:p((e=>function(e){if("object"==typeof e&&!Array.isArray(e)&&e.errorCodeID){let l=ae.value.findIndex((l=>l.ID==e.errorCodeID));if(l>=0)ae.value[l].ECLInfo=e.errorCodeInfo;else{let l={ID:e.errorCodeID,ECLInfo:e.errorCodeInfo};ae.value.push(l)}}}(l[ee.value])),["prevent"])},null,40,W),[[d,l[ee.value].errorCodeInfo]])])])])))),128))]),o("div",q,[o("button",{type:"button",class:"btn btnBlueColor",onClick:l[2]||(l[2]=(...e)=>v(ne)&&v(ne)(...e))},a(e.$t("GLOBAL.GLOBAL_SAVE")),1)])])])]))}};export{X as default};
