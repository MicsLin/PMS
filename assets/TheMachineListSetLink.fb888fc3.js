import{g as e,y as l,k as a,u as t,c as s,l as n,a as i,d as u,t as o,i as c,z as m,b as d,G as p,F as r,q as v,j as h,s as f,x as y,o as M}from"./vendor.5e620042.js";import{_ as E,p as S,a as b}from"./index.4332a85f.js";const w={class:"mainPaddingX"},x={class:"flex flex-wrap py-4 text-4xl text-title-h1"},L={class:"mr-5 mb-1"},I={class:"mb-5 w-full shadow myBorder text-white overflow-hidden"},_={class:"flex items-center justify-between h-16 pl-8 sm:pl-4 pr-10 sm:pr-4 titleStyle border-b"},D={class:"flex items-center text-xl"},N=(e=>(f("data-v-99aca8fa"),e=e(),y(),e))((()=>u("i",{class:"pe-7s-ticket pe-lg pe-va"},null,-1))),T={class:"ml-2"},B={class:"py-6 px-8 sm:px-4 w-full"},k={class:"font-bold text-lg"},A={class:"py-6 px-8 sm:px-4 w-full"},g={class:"grid grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2"},$={class:"mb-5 overflow-hidden"},C={for:"brand"},O={class:"mb-5 overflow-hidden"},G={for:"model"},U={class:"mb-5 overflow-hidden"},F={for:"numberID"},P={class:"sm:w-full"},R={class:"mb-5 overflow-hidden"},V={class:"w-full"},Y={class:"mb-5 overflow-hidden"},j={class:"w-full"},H=["value"],q={key:0},z={key:1},K={key:2},X={class:"w-full"};var J=E({setup(f){const y=e(),E=l(),J=a(),Q=t(),W=s((()=>y.locale.value)),Z=s((()=>E.query.MID));s((()=>Q.state.resData.token)),s((()=>Q.state.serverURL));const ee=n(""),le=n(""),ae=n(""),te=n(""),se=n(),ne=n(""),ie=n([]),ue=e=>se.value=e,oe=n("YYYY-mm-dd");!function(){let e=Q.state.fakeData.theMachineListSet.MachineInfo,l=Q.state.fakeData.theMachineListSetLink.employeeList,a=e.find((e=>(null==e?void 0:e.MachineID)==Z.value));if(a){ee.value=a.MachineName,le.value=a.MachineBrand,ae.value=a.MachineItemNum,te.value=a.MachineType;let e=a.MachinePurchaseDate;"string"==typeof e&&"0000-00-00"!=e&&(se.value=e),ne.value=a.EmployeeNo||""}ie.value=[...l],ie.value.unshift({EmployeeNo:"",EmployeeSurname:"",EmployeeForename:""})}(),n(!1);const ce=(me=!1,()=>{if(me);else{me=!0;let e=Q.state.fakeData.theMachineListSet.MachineInfo.find((e=>(null==e?void 0:e.MachineID)==Z.value));if(e){e.MachineName=ee.value,e.MachineBrand=le.value,e.MachineItemNum=ae.value,e.MachineType=te.value,e.MachinePurchaseDate=se.value||"0000-00-00",e.EmployeeNo=ne.value;let l=ie.value.find((e=>(null==e?void 0:e.EmployeeNo)==ne.value));l&&(e.EmployeeSurname=l.EmployeeSurname||"",e.EmployeeForename=l.EmployeeForename||"");let a=b(W.value).saveSuccess;alert(a)}}});var me;const de=()=>{J.push("/machinelist_set")};return(e,l)=>(M(),i("main",w,[u("h1",x,[u("span",L,o(e.$t("MachineSet.MSET_MACHINE_EDIT")),1),u("button",{class:"mb-1 btn btnBlueColor",onClick:de},o(e.$t("GLOBAL.GLOBAL_BACK")),1)]),u("div",I,[u("div",_,[u("span",D,[N,u("span",T,o(e.$t("GLOBAL.GLOBAL_LIST")),1)])]),u("div",B,[u("span",null,o(e.$t("MachineSet.MSET_MACHINE"))+" : ",1),u("span",k,o(ee.value),1)]),u("main",A,[u("section",g,[u("article",$,[u("div",null,[u("label",C,o(e.$t("MachineSet.MSET_BRAND"))+" :",1)]),u("div",null,[c(u("input",{type:"text",id:"brand",class:"myInput w-full","onUpdate:modelValue":l[0]||(l[0]=e=>le.value=e)},null,512),[[m,le.value]])])]),u("article",O,[u("div",null,[u("label",G,o(e.$t("MachineSet.MSET_TYPE"))+" :",1)]),u("div",null,[c(u("input",{type:"text",id:"model",class:"myInput w-full","onUpdate:modelValue":l[1]||(l[1]=e=>te.value=e)},null,512),[[m,te.value]])])]),u("article",U,[u("div",null,[u("label",F,o(e.$t("MachineSet.MSET_ITEMNUMBER"))+" :",1)]),u("div",P,[c(u("input",{type:"text",id:"numberID",class:"myInput w-full","onUpdate:modelValue":l[2]||(l[2]=e=>ae.value=e)},null,512),[[m,ae.value]])])]),u("article",R,[u("div",null,o(e.$t("MachineSet.MSET_PURCHASE")),1),u("div",V,[d(S,{inputDate:se.value,placeholder:oe.value,onEmitVCalendar:ue},null,8,["inputDate","placeholder"])])]),u("article",Y,[u("div",null,o(e.$t("MachineSet.MSET_OPERATOR"))+" : ",1),u("div",j,[c(u("select",{class:"w-full myInputSearch","onUpdate:modelValue":l[3]||(l[3]=e=>ne.value=e)},[(M(!0),i(r,null,v(ie.value,((l,a)=>(M(),i("option",{key:"employee"+a,value:l.EmployeeNo},[l.EmployeeNo?"en"==h(W)?(M(),i("span",z,o(l.EmployeeForename)+" "+o(l.EmployeeSurname),1)):(M(),i("span",K,o(l.EmployeeSurname)+" "+o(l.EmployeeForename),1)):(M(),i("span",q,o(e.$t("MachineList.MLIST_None")),1))],8,H)))),128))],512),[[p,ne.value]])])])]),u("div",X,[u("button",{class:"btn btnBlueColor",onClick:l[4]||(l[4]=(...e)=>h(ce)&&h(ce)(...e))},o(e.$t("GLOBAL.GLOBAL_SAVE")),1)])])])]))}},[["__scopeId","data-v-99aca8fa"]]);export{J as default};
