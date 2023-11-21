import{u as e,g as a,c as l,k as s,y as t,l as r,a as u,d as n,t as i,B as o,j as p,i as d,z as m,G as c,F as v,q as f,H as S,I as y,o as U,n as h}from"./vendor.5e620042.js";import{l as x,d as b,a as g}from"./index.647400d6.js";import{P as E}from"./pagesPermitList.c6dba664.js";const w={class:"mainPaddingX"},L={class:"flex flex-wrap py-4 text-4xl text-title-h1"},I={class:"mr-5 mb-1"},P={class:"w-full shadow myBorder"},k={class:"flex items-center h-16 pl-8 sm:pl-4 pr-10 sm:pr-4 titleStyle border-b"},N={class:"flex items-center text-xl"},G=n("svg",{class:"stroke-current stroke-2 w-7 h-7 text-blue-title-text",fill:"#d9edf7",viewBox:"0 0 44 44"},[n("path",{d:"M1 38.207c0-1.983 1.168-3.777 2.983-4.575 2.325-1.022 5.505-2.42 7.638-3.366 1.925-.85 2.34-1.363 4.28-2.235 0 0 .2-1.012.13-1.615h1.516s.347.206 0-2.176c0 0-1.85-.5-1.936-4.294 0 0-1.39.476-1.475-1.823-.058-1.56-1.243-2.912.462-4.03l-.867-2.38s-1.733-9.617 3.25-8.206c-2.1-2.56 11.92-5.117 12.83 3 0 0 .65 4.38 0 7.38 0 0 2.05-.24.68 3.765 0 0-.75 2.882-1.907 2.235 0 0 .19 3.646-1.632 4.265 0 0 .13 1.94.13 2.073l1.736.265s-.26 1.588.043 1.764c0 0 2.49 1.29 4.506 2.074 2.378.917 4.86 2.002 6.714 2.84 1.788.81 2.932 2.592 2.93 4.555 0 .847.003 1.63.01 2.007.023 1.224-.873 2.27-2.1 2.27H3.105C1.943 42 1 41.057 1 39.895v-1.688z",class:"line"})],-1),A={class:"ml-3"},O={class:"px-4 sm:px-2 py-6 sm:py-4 text-white text-sm"},T={class:"flex"},_={class:"mr-2 w-full"},$={class:"pl-2"},B={class:"w-full"},D={class:"pl-2"},C={class:"flex my-2"},j={class:"mr-2 w-full"},V={class:"pl-2"},q={class:"w-full"},R={class:"pl-2"},J={class:"flex"},M={class:"mr-2 w-full"},F={class:"pl-2"},H=["value"],z={class:"w-full"},K={class:"pl-2"},W=["value"],X={class:"my-2 w-full shadow-2xl"},Y={class:"tableThStyle"},Q={class:"py-3 pl-2 text-left"},Z={class:"flex items-center tableBorderStyle py-3 pl-2 tableHover"},ee={for:"check_all",class:"w-full cursor-pointer"},ae={class:"px-8 lg:px-4 py-4 overflow-hidden tableBorderStyle"},le={class:"flex flex-wrap"},se=["id","value"],te=["for"],re={class:"text-right mt-5"},ue={type:"submit",class:"btn btnBlueColor"},ne={setup(ne){const ie=e(),oe=a(),pe=l((()=>oe.locale.value)),de=s(),me=t(),ce=l((()=>{let e=me.params.adminId||"";return e?sessionStorage.setItem("userSetEdit",JSON.stringify(e)):sessionStorage.getItem("userSetEdit")&&(e=JSON.parse(sessionStorage.getItem("userSetEdit"))),e})),ve=l((()=>ie.state.resData.adminId)),fe=l((()=>ie.state.resData.token)),Se=l((()=>ie.state.serverURL)),ye=["0","12"],Ue=r({id:[],name:[],initialData:{}}),he=r(""),xe=r(""),be=r(""),ge=r(""),Ee=r(""),we=r(""),Le=r([...ye]),Ie=l((()=>x)),Pe=r(!1),ke=l((()=>E[pe.value]||[])),Ne=(e=!1)=>{Pe.value=!Pe.value,e&&"boolean"==typeof e&&(Pe.value=!0),Le.value=((e=!1,a=[])=>e?ye:[...new Set([...a,...ye])])(!0),Pe.value&&(Le.value=ke.value.map(((e,a)=>a.toString())))};!function(){let e=ie.state.fakeData.adminSetUserSet.adminData[ce.value];Ue.value.id=Object.keys(e.adminGroup),Ue.value.name=Object.values(e.adminGroup),Ue.value.initialData=e.adminGroup}();const Ge=(Ae=!1,()=>{if(!Ae){Ae=!0;let e=new FormData;e.append("token",fe.value),e.append("UserId",ce.value),e.append("UserName",he.value),e.append("EmployeeIDNumber",xe.value),e.append("UserAccount",be.value),e.append("UserPassword",ge.value),e.append("UserGroup",Ee.value),e.append("UserLang",we.value);let a=function(){let a=[],l=[...Le.value];return ye.forEach((a=>{let s=l.findIndex((e=>e==a));s>-1&&l.splice(s,1),e.append(`PagesPermit[${Number(a)+1}]`,0)})),l.forEach((l=>{Number(l)&&Number(l)!=1/0&&(e.append(`PagesPermit[${Number(l)+1}]`,1),a.push(Number(l)+1))})),a}();y.post(`http://${Se.value}/userset_update.php`,e).then((e=>{if(b(e.data),1==e.data.status){if(ve.value==ce.value){let e={adminName:he.value,adminGroup:Ee.value,adminLang:we.value,adminPagesPermit:a.join(",")},l=sessionStorage.getItem("users")||{},s=JSON.parse(l);s&&"object"==typeof s&&!Array.isArray(s)&&(s.adminName&&(s.adminName=e.adminName),s.adminGroup&&(s.adminGroup=e.adminGroup),s.adminLang&&(s.adminLang=e.adminLang),s.adminPagesPermit&&(s.adminPagesPermit=e.adminPagesPermit)),sessionStorage.setItem("users",JSON.stringify(s)),ie.commit("userEdit",e)}let e=g(pe.value).saveSuccess;alert(e),de.push({name:"UserSet",params:{UserName:he.value}})}else 2==e.data.status?ie.dispatch("tokenCheckFail"):console.warn("else")})).catch((e=>{console.error("error")})).finally((()=>{Ae=!1}))}});var Ae;const Oe=()=>de.push("/user_set");return(e,a)=>(U(),u("main",w,[n("h1",L,[n("span",I,i(e.$t("UserSetEdit.UEDIT_USEREDITING")),1),n("button",{class:"mb-1 btn btnBlueColor",onClick:Oe},i(e.$t("GLOBAL.GLOBAL_BACK")),1)]),n("div",P,[n("div",k,[n("span",N,[G,n("span",A,i(e.$t("GLOBAL.GLOBAL_LIST")),1)])]),n("div",O,[n("form",{onSubmit:a[10]||(a[10]=o(((...e)=>p(Ge)&&p(Ge)(...e)),["prevent"]))},[n("div",T,[n("div",_,[n("span",$,i(e.$t("UserSet.USET_USERNAME"))+":",1),d(n("input",{type:"text",class:"form-control myInput w-full","onUpdate:modelValue":a[0]||(a[0]=e=>he.value=e),required:""},null,512),[[m,he.value]])]),n("div",B,[n("span",D,i(e.$t("UserSet.USET_EMPLOYEEID"))+":",1),d(n("input",{type:"text",class:"form-control myInput w-full","onUpdate:modelValue":a[1]||(a[1]=e=>xe.value=e),required:""},null,512),[[m,xe.value]])])]),n("div",C,[n("div",j,[n("span",V,i(e.$t("UserSet.USET_ACCOUNT"))+":",1),d(n("input",{type:"text",class:"form-control myInput w-full","onUpdate:modelValue":a[2]||(a[2]=e=>be.value=e),required:""},null,512),[[m,be.value]])]),n("div",q,[n("span",R,i(e.$t("UserSet.USET_PASSWORD"))+":",1),d(n("input",{type:"password",class:"form-control myInput w-full","onUpdate:modelValue":a[3]||(a[3]=e=>ge.value=e),required:""},null,512),[[m,ge.value]])])]),n("div",J,[n("div",M,[n("span",F,i(e.$t("UserSet.USET_SELECTGROUP"))+":",1),d(n("select",{class:"w-full myInputSearch","onUpdate:modelValue":a[4]||(a[4]=e=>Ee.value=e),required:""},[(U(!0),u(v,null,f(Ue.value.name,((e,a)=>(U(),u("option",{value:Ue.value.id[a],key:"adminGroup"+a},i(e),9,H)))),128))],512),[[c,Ee.value]])]),n("div",z,[n("span",K,i(e.$t("Personal.PSL_SELECTLANG"))+":",1),d(n("select",{class:"w-full myInputSearch","onUpdate:modelValue":a[5]||(a[5]=e=>we.value=e),required:""},[(U(!0),u(v,null,f(p(Ie),((e,a)=>(U(),u("option",{key:"language"+a,value:e.key},i(e.description),9,W)))),128))],512),[[c,we.value]])])]),n("table",X,[n("thead",null,[n("tr",Y,[n("th",Q,i(e.$t("UserSetEdit.UEDIT_PAGEPERMISSION")),1)])]),n("tbody",null,[n("tr",null,[n("td",Z,[d(n("input",{type:"checkbox",id:"check_all",class:"mr-2 cursor-pointer",onClick:a[6]||(a[6]=e=>Ne()),"onUpdate:modelValue":a[7]||(a[7]=e=>Pe.value=e)},null,512),[[S,Pe.value]]),n("label",ee,i(e.$t("UserSet.USET_SELECTALL")),1)])]),n("tr",null,[n("td",ae,[n("ul",le,[(U(!0),u(v,null,f(p(ke),((e,l)=>(U(),u("li",{class:h(["flex items-center mb-1 w-2/6 sm:w-6/12",["不使用"==e?"hidden":""]]),key:"pagesPermitArray"+l},[d(n("input",{type:"checkbox",class:"mr-2 cursor-pointer",id:"check"+l,value:l,onChange:a[8]||(a[8]=e=>Pe.value=Le.value.length==ke.value.length),"onUpdate:modelValue":a[9]||(a[9]=e=>Le.value=e)},null,40,se),[[S,Le.value]]),n("label",{for:"check"+l,class:"cursor-pointer"},i(e),9,te)],2)))),128))])])])])]),n("div",re,[n("button",ue,i(e.$t("GLOBAL.GLOBAL_UPDATE")),1)])],32)])])]))}};export{ne as default};
