import{y as e,k as a,u as l,c as t,l as s,m as n,a as i,d as r,t as o,j as u,e as c,b as m,w as d,i as p,z as v,F as h,q as f,o as x,n as b,f as L,I as y}from"./vendor.5e620042.js";import{s as g,g as w,e as I,d as N}from"./index.647400d6.js";import{d as k}from"./vuedraggable.umd.43489d49.js";const C={class:"mainPaddingX"},S={class:"flex flex-wrap py-4 sm:mb-4 text-4xl text-title-h1"},E={class:"mr-5 sm:mr-2"},A={class:"mb-5 w-full shadow myBorder"},M={class:"flex sm:block items-center justify-between py-4 pl-8 sm:pl-4 pr-10 sm:pr-4 titleStyle"},j={class:"w-5/12 sm:w-full text-xl sm:text-lg"},D={class:"w-5/12 sm:w-full text-xl sm:text-lg sm:my-2"},_={class:"w-2/12 sm:w-full flex justify-end sm:justify-start"},B={class:"mb-5 w-full shadow myBorder"},O={class:"py-4 pl-8 sm:pl-4 flex items-center titleStyle border-b"},P={class:"px-8 sm:px-2 py-6 sm:py-4 text-gray-500 text-sm"},$={key:0},T={class:"text-yellow-600 underline underline-offset-4 decoration-double"},R={key:1,class:"flex items-center flex-wrap"},F={class:"mr-5 sm:mr-2 mb-5"},G=["onClick"],H={class:"px-1 border-r border-b rounded-full"},V={key:0,class:"pe-7s-star"},Y={class:"w-full shadow myBorder"},q={class:"flex md:flex-wrap sm:block items-center justify-between py-4 pl-8 sm:pl-4 pr-10 sm:pr-4 titleStyle border-b"},U={class:"mr-1 sm:mb-1"},J={class:"flex flex-wrap"},z={class:"mr-1 sm:mb-1 flex items-center"},K=["placeholder"],W={class:"sm:mb-1 flex items-center"},X={class:"px-8 sm:px-2 py-6 sm:py-4 text-gray-500 text-sm"},Q={class:"flex items-center flex-wrap"},Z={class:"flex items-center justify-center mr-5 sm:mr-2 mb-5"},ee=["onClick"],ae={class:"cursor-pointer"},le={props:{LineName:String,selectedPR:String,dateNow:String},setup(le){const te=le,se=e(),ne=a(),ie=l(),re=t((()=>ie.state.resData.token)),oe=t((()=>ie.state.serverURL)),ue=t((()=>se.query.lineID)),ce=I().isObject,me=s({}),de=s({}),pe=s([]),ve=s([]),he=s(!1),fe=s(0),xe=t((()=>de.value.LineID||"")),be=t((()=>de.value.LineName||"")),Le=t((()=>de.value.LineInCharge||"")),ye=s(""),ge=s([]),we=()=>ge.value=g(ye.value,ve.value,"machineName"),Ie=()=>{ye.value="",we()},Ne=()=>{ie.commit("onPopupForm","productionEdit");let e={LineName:be.value,LineInCharge:Le.value};ie.commit("onPopupOtherData",JSON.stringify(e)),ie.commit("onPopupOtherData2",ue.value),ie.commit("onPopupOtherData3",JSON.stringify(me.value))};(()=>{let e=ie.state.fakeData.theProductionLineSetEdit[ue.value];e&&(me.value=ce(e.adminList)?e.adminList:{},de.value=ce(e.lineData)?e.lineData:{},pe.value=Array.isArray(e.lineMachine)?e.lineMachine:[],ve.value=Array.isArray(e.pickMachine)?e.pickMachine:[],he.value=0==pe.value.length,ge.value=w(ve.value),fe.value=pe.value.filter((e=>"Yes"==e.processMajor)).length)})();const ke=(Ce=!1,e=>{if(!Ce){let a=pe.value[e];if(!a)return console.warn("wrong index");if(Ce=!0,"Yes"==a.processMajor){if(fe.value<2)return Ce=!1,console.warn("Must keep at least one major process");fe.value--}let l,t=a.machineID;l=ve.value.findIndex((e=>e.machineName>a.machineName)),-1==l&&(l=ve.value.length);let s=new FormData;s.append("token",re.value),s.append("lineId",ue.value),s.append("machineId",t),s.append("lineMachineTotalNumber",pe.value.length),y.post(`http://${oe.value}/insertsql/lineset_remove_mach.php`,s).then((t=>{N(t.data),1==t.data.status?(a.processMajor&&(a.processMajor="No"),ve.value.splice(l,0,a),pe.value.splice(e,1),we(),he.value=0==pe.value.length,Ee.value=!0):2==t.data.status?ie.dispatch("tokenCheckFail"):console.warn("else")})).catch((e=>{console.error("error")})).finally((()=>{Ce=!1}))}});var Ce;const Se=function(e){return a=>{if(!e){let l=ge.value[a];if(!l)return console.warn("wrong index");e=!0;let t,s=l.machineID,n=ve.value.findIndex((e=>parseInt(e.machineID,10)==parseInt(s,10)));t=pe.value.findIndex((e=>e.machineName>l.machineName)),-1==t&&(t=pe.value.length);let i=new FormData;i.append("token",re.value),i.append("lineId",ue.value),i.append("machineId",s),y.post(`http://${oe.value}/insertsql/lineset_machine_mach.php`,i).then((e=>{N(e.data),1==e.data.status?("Yes"==ve.value[n].processMajor&&fe.value++,pe.value.splice(t,0,ve.value[n]),ve.value.splice(n,1),we(),he.value=0==pe.value.length,Ee.value=!0):2==e.data.status?ie.dispatch("tokenCheckFail"):console.warn("else")})).catch((e=>{console.error("error")})).finally((()=>{e=!1}))}}}(!1),Ee=s(!1),Ae=()=>{let e={name:"ProductionLineSet",params:{}};Ee.value&&(e.params.lineId=xe.value),ne.push(e)};return te.dateNow&&(Ee.value=!0),n((()=>te.dateNow),(()=>{te.LineName&&(de.value.LineName=te.LineName),te.selectedPR&&(de.value.LineInCharge=te.selectedPR),Ee.value=!0})),(e,a)=>(x(),i("main",C,[r("h1",S,[r("span",E,o(e.$t("LineSet.LSET_MACHINE")),1),r("button",{class:"btn btnBlueColor",onClick:Ae},o(e.$t("GLOBAL.GLOBAL_BACK")),1)]),r("div",A,[r("div",M,[r("div",j,[r("span",null,o(e.$t("LineSet.LSET_LINE"))+" : "+o(u(be)),1)]),r("div",D,[r("span",null,o(e.$t("LineSet.LSET_LEADER"))+" : "+o(u(Le)),1)]),r("div",_,[r("button",{class:"btn btnBlueColor",onClick:Ne},o(e.$t("GLOBAL.GLOBAL_EDIT")),1)])])]),r("div",B,[r("div",O,[r("span",null,o(e.$t("LineSet.LSET_MACHINEINLINE")),1),c("( "+o(pe.value.length)+" ) ",1)]),r("div",P,[he.value?(x(),i("div",$,[r("span",T,o(e.$t("LineSet.LSET_NO_SELECTED"))+" !",1)])):(x(),i("div",R,[m(u(k),{modelValue:pe.value,"onUpdate:modelValue":a[0]||(a[0]=e=>pe.value=e),class:"flex items-center flex-wrap","item-key":"name","ghost-class":"ghost",onStart:a[1]||(a[1]=a=>e.dragging=!0),onEnd:a[2]||(a[2]=a=>e.dragging=!1)},{item:d((({element:e,index:a})=>[r("div",F,[r("button",{onClick:e=>u(ke)(a),class:b(["btn text-white","Yes"==e.processMajor?"btnGreenColor bg-opacity-70":"btnBlueColor"])},[r("span",H,o(a+1)+".",1),"Yes"==e.processMajor?(x(),i("i",V)):L("",!0),c(" "+o(e.machineName),1)],10,G)])])),_:1},8,["modelValue"])]))])]),r("div",Y,[r("div",q,[r("div",U,o(e.$t("LineSet.LSET_AVAILABLEMACHINE"))+"( "+o(ge.value.length)+" ) ",1),r("div",J,[r("div",z,[p(r("input",{type:"text",class:"myInput rounded-r-none w-40 text-gray-500",placeholder:e.$t("LineInfoMachine.LIMA_MACHINGNAME"),"onUpdate:modelValue":a[3]||(a[3]=e=>ye.value=e)},null,8,K),[[v,ye.value]]),r("button",{type:"button",class:"btn btnSearchColor",onClick:we},o(e.$t("Product.PRO_SEARCHBTN")),1)]),r("div",W,[r("button",{type:"button",class:"btn btnBlueColor",onClick:Ie},o(e.$t("Product.PRO_SHOWALL")),1)])])]),r("div",X,[r("div",Q,[(x(!0),i(h,null,f(ge.value,((e,a)=>(x(),i("div",{key:"pickMachine"+a},[r("div",Z,[r("button",{class:"btn btnBlueColor",onClick:e=>u(Se)(a)},[r("label",ae,o(e.machineName),1)],8,ee)])])))),128))])])])]))}};export{le as default};
