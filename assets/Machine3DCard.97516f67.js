import{e as l,_ as t}from"./index.42c5c041.js";import{c as e,l as a,o as s,a as o,d as r,t as u,j as n,S as i,b as c,n as d,f as p,s as f,x as v,u as b}from"./vendor.5e620042.js";const g={class:"relative text-red-400 bg-opacity-10"},h={class:"truncate"},m={class:"mr-px"},y={class:"truncate"},w={class:"mr-2"},x={class:"truncate"},O={class:"mr-2"},L={class:"truncate"},I={class:"mr-2"},A={props:{machineInfo:Object,errorCodeList:Object},setup(t){const i=t,c=(t="",e="")=>l(t,e,i.machineInfo),d=e((()=>c("ErrorCode",""))),p=e((()=>{if(!Array.isArray(i.errorCodeList))return"";let l=i.errorCodeList.find((l=>l&&l.ECLCode==d.value));return l&&l.ECLInfo||""})),f=e((()=>((l="")=>{let t="";return l&&"string"==typeof l&&(t=l.replace(" "," , ")),t})(c("StartDateTime","")))),v=new Date,b=a(0),A=a(0),M=a(0),R=a(0);return(()=>{let l=c("StartDateTime","");if(!l)return;let t=l.replace(/\-/g,"/"),e=new Date(t),a=v-e;b.value=parseInt(a/864e5),A.value=parseInt(a%864e5/36e5),M.value=parseInt(a%36e5/6e4),R.value=parseInt(a%6e4/1e3)})(),(l,t)=>(s(),o("div",g,[r("div",h,[r("span",m,u(l.$t("GLOBAL.GLOBAL_TIME"))+" : ",1),r("span",null,u(b.value)+" "+u(l.$t("GLOBAL.GLOBAL_DAY"))+" "+u(A.value)+" "+u(l.$t("GLOBAL.GLOBAL_HOUR"))+" "+u(M.value)+" "+u(l.$t("GLOBAL.GLOBAL_MINUTES"))+" "+u(R.value)+" "+u(l.$t("GLOBAL.GLOBAL_SECOND")),1)]),r("div",y,[r("span",w,u(l.$t("MachineCard.MAC_CODE"))+" : ",1),r("span",null,u(n(d)),1)]),r("div",x,[r("span",O,u(l.$t("MachineCard.MAC_ERRORMSG"))+" : ",1),r("span",null,u(n(p)),1)]),r("div",L,[r("span",I,u(l.$t("GLOBAL.GLOBAL_STARTTIME"))+" : ",1),r("span",null,u(n(f)),1)])]))}},M={class:"relative text-yellow-200 text-opacity-60 bg-opacity-10"},R={class:"truncate"},S={class:"mr-2"},B={class:"truncate"},C={class:"mr-2"},_={class:"truncate"},G={class:"mr-2"},W={props:{machineInfo:Object},setup(t){const a=t,i=(t="",e="")=>l(t,e,a.machineInfo),c=e((()=>i("WorkingTime",0))),d=e((()=>i("LastMaintain",0))),p=e((()=>i("IntervalTime",0)));return(l,t)=>(s(),o("div",M,[r("div",R,[r("span",S,u(l.$t("MachineStatus.MACSTSWAR_RUNTIMENOW"))+" : ",1),r("span",null,u(n(c))+" "+u(l.$t("GLOBAL.GLOBAL_HOUR")),1)]),r("div",B,[r("span",C,u(l.$t("MachineStatus.MACSTSWAR_LASTMAINTAINRUN"))+" : ",1),r("span",null,u(n(d))+" "+u(l.$t("GLOBAL.GLOBAL_HOUR")),1)]),r("div",_,[r("span",G,u(l.$t("MachineStatus.MACSTSWAR_TIMEDIFF"))+" : ",1),r("span",null,u(n(p))+" "+u(l.$t("GLOBAL.GLOBAL_HOUR")),1)])]))}},T={class:"w-5 h-5 relative"},j={class:"w-full h-full text-center overflow-hidden absolute z-40 top-0 left-0 border border-black border-opacity-40 rounded-full bg-gray-500 bg-opacity-40"},D={class:"flex justify-center items-center m-auto w-10/12 h-full rounded-full bg-white bg-opacity-10 text-white text-opacity-50 text-xs"},$=r("div",{class:"absolute z-10 -top-px left-1 w-full h-full rounded-full bg-gray-900 bg-opacity-70"},null,-1),k={props:{Icon:String,IsActive:Boolean},setup(l){const t=l,e=function(){let l="";return t.Icon&&(l=t.Icon),l}();return(l,t)=>(s(),o("div",T,[r("div",j,[r("span",D,u(n(e)),1)]),$]))}},E={},N={class:"w-2 h-2 relative"},z=[r("div",{class:"w-full h-full absolute z-50 top-0 left-0 rounded-full bg-yellow-200 bg-opacity-50"},null,-1),r("div",{class:"absolute z-10 -top-px left-1 w-full h-full rounded-full bg-gray-900 bg-opacity-70"},null,-1)];var U=t(E,[["render",function(l,t){return s(),o("div",N,z)}]]);const P=l=>(f("data-v-712f7004"),l=l(),v(),l),F={class:"scene"},H={class:"front rounded-md"},J={class:"w-full h-full rounded-md overflow-hidden"},Y=P((()=>r("div",{class:"w-full h-full bg-yellow-500 bg-opacity-30 blur"},null,-1))),q=P((()=>r("div",{class:"w-full h-full bg-gray-700 bg-opacity-60 blur"},null,-1))),K={class:"flex w-full h-full"},Q={class:"w-1/2 left-0 h-full"},V={class:"w-24 h-6 m-auto flex items-end my-2"},X={class:"absolute top-1 left-3"},Z={class:"absolute -top-1.5 left-3"},ll=P((()=>r("p",{class:"text-xs text-blue-300"},"Wi-Fi",-1))),tl={class:"absolute top-1 left-12"},el={class:"absolute -top-1.5 left-2"},al=P((()=>r("p",{class:"text-xs text-blue-300"},"Link",-1))),sl={class:"absolute top-1 left-20"},ol={class:"absolute -top-1.5 left-2"},rl=P((()=>r("p",{class:"text-xs text-blue-300"},"ACT",-1))),ul={class:"top-8 left-3"},nl={class:"w-24 h-10 rounded-md"},il={class:"absolute z-40 top-0 left-0 w-full h-full border-4 border-gray-700 rounded-md border-opacity-30"},cl={key:0,class:"pl-px text-lg"},dl={key:1,class:"pl-1 text-xl"},pl=P((()=>r("div",{class:"absolute z-10 top-0 left-0 w-full h-full"},null,-1))),fl=P((()=>r("div",{class:"text-center h-8 left-4 bottom-2"},[r("span",{class:"text-blue-200 text-2xl mr-1.5"},"ISM"),r("span",{class:"text-white text-lg"},"C-28")],-1))),vl={class:"w-1/2 right-0 top-0 h-full relative"},bl={class:"absolute right-0 top-0"},gl=P((()=>r("div",{class:"w-7 h-3 bg-yellow-900 bg-opacity-70 blur-md rounded-full absolute top-1 right-1"},null,-1))),hl={class:"w-full mb-2 flex justify-center relative"},ml=P((()=>r("div",{class:"absolute top-0 left-0 w-full h-full rounded-full bg-gray-100 bg-opacity-10 blur"},null,-1))),yl={class:"flex absolute top-10 left-4"},wl={class:"flex items-center top-0 left-0"},xl={class:"mx-1 top-0 left-5"},Ol={class:"-top-5 left-0"},Ll={class:"top-0 left-0"},Il={class:"top-5 left-0"},Al={class:"flex items-center top-0 left-12"},Ml={class:"flex justify-center bottom-8 left-4"},Rl={class:"top-0 left-6"},Sl={class:"back rounded-md overflow-hidden"},Bl=P((()=>r("div",{class:"w-full h-full bg-yellow-500 bg-opacity-30 blur"},null,-1))),Cl=P((()=>r("div",{class:"w-full h-full bg-gray-700 bg-opacity-60 blur"},null,-1))),_l={class:"absolute left-0 top-0"},Gl={class:"top rounded-md relative"},Wl=P((()=>r("div",{class:"bottom rounded-md"},null,-1))),Tl=P((()=>r("div",{class:"left rounded-md overflow-hidden"},[r("div",{class:"w-full h-full bg-yellow-500 bg-opacity-30 blur"}),r("div",{class:"w-full h-full bg-gray-700 bg-opacity-60 blur"})],-1))),jl=P((()=>r("div",{class:"w-full h-full bg-yellow-500 bg-opacity-30 blur"},null,-1))),Dl=P((()=>r("div",{class:"w-full h-full bg-gray-700 bg-opacity-60 blur"},null,-1)));var $l=t({props:{isRotate:Boolean,status:String},setup(l){const t=l;i((l=>({"1af844a5":n(m),"0be277ef":n(g),"8a74335a":n(y),d8f210d0:n(h),"7953ac78":n(w),bca09ba2:n(x)})));const u=(l=0)=>l.toString()+"px",f=a(120),v=a(220),b=a(30),g=e((()=>u(v.value))),h=e((()=>u(b.value))),m=e((()=>u(b.value/2))),y=e((()=>u(f.value))),w=e((()=>u(f.value-b.value/2))),x=e((()=>u(v.value-b.value/2))),O=a("bg-red-200"),L=a("bg-yellow-200 bg-opacity-70"),I=a("border-t-red-200"),A=a("border-t-yellow-200"),M=a("bg-yellow-700 bg-opacity-90 blur-md"),R=a("bg-black bg-opacity-90 blur-md"),S=e((()=>t.status||""));return(l,e)=>(s(),o("div",F,[r("div",{class:d(["cube hover:transform",[t.isRotate?"transform":""]])},[r("div",H,[r("div",J,[Y,q,r("div",K,[r("div",Q,[r("div",V,[r("div",X,[r("div",Z,[c(U)]),ll]),r("div",tl,[r("div",el,[c(U)]),al]),r("div",sl,[r("div",ol,[c(U)]),rl])]),r("div",ul,[r("div",nl,[r("div",il,[r("span",{class:d(["text-opacity-30 absolute left-0 top-0",[["Out"==n(S)?"text-red-700":""],["Warning"==n(S)?"text-yellow-900":"text-gray-300"]]])},["Out"==n(S)?(s(),o("span",cl,"abnormal")):p("",!0),"Warning"==n(S)?(s(),o("span",dl,"warning")):p("",!0)],2)]),r("div",{class:d(["absolute z-30 top-0 left-0 w-full h-full",[["Out"==n(S)?"screenRed":""],["Warning"==n(S)?"screenYellowBlur":"text-gray-300"]]])},null,2),pl])]),fl]),r("div",vl,[r("div",{class:d(["absolute -top-2 -right-1 w-5 h-5 rounded-full",[["Out"==n(S)?M.value:""],["Warning"==n(S)?R.value:""]]])},null,2),r("div",bl,[r("div",{class:d(["w-10 h-5 right-0 top-0 rounded-bl-2xl",[["Out"==n(S)?O.value:""],["Warning"==n(S)?L.value:""]]])},null,2),gl]),r("div",hl,[ml,r("div",yl,[r("div",wl,[c(k,{Icon:" ◀"})]),r("div",xl,[r("div",Ol,[c(k,{Icon:" 🔺"})]),r("div",Ll,[c(k,{Icon:" ↩"})]),r("div",Il,[c(k,{Icon:" 🔻"})])]),r("div",Al,[c(k,{Icon:" ▶"})])])]),r("div",Ml,[c(k,{Icon:"P",class:"top-0 left-0"}),r("div",Rl,[c(k,{Icon:" 📗"})]),c(k,{Icon:"Del",class:"top-0 left-12"})])])])])]),r("div",Sl,[Bl,Cl,r("div",{class:d(["absolute -top-2 -left-1 w-5 h-5 rounded-full",[["Out"==n(S)?M.value:""],["Warning"==n(S)?R.value:""]]])},null,2),r("div",_l,[r("div",{class:d(["w-10 h-5 left-0 top-0 rounded-br-2xl",[["Out"==n(S)?O.value:""],["Warning"==n(S)?L.value:""]]])},null,2)])]),r("div",Gl,[r("div",{class:d(["w-10 h-full absolute top-0 right-0",[["Out"==n(S)?O.value:""],["Warning"==n(S)?L.value:""]]])},null,2)]),Wl,Tl,r("div",{class:d(["right rounded overflow-hidden",[["Out"==n(S)?I.value:""],["Warning"==n(S)?A.value:""]]])},[jl,Dl,r("div",{class:d(["w-full h-5",[["Out"==n(S)?O.value:""],["Warning"==n(S)?L.value:""]]])},null,2)],2)],2)]))}},[["__scopeId","data-v-712f7004"]]);const kl={class:"scene"};var El=t({props:{isRotate:Boolean,status:String},setup(l){const t=l,a=e((()=>{let l=t.status;return"OnAndOff"==l?"bg-blue-400":"Out"==l?"bg-red-400":"Warning"==l?"bg-yellow-200":void 0}));return(l,e)=>(s(),o("div",kl,[r("div",{class:d(["cube bg-green-100 bg-opacity-40 rounded-xl",[t.isRotate?"transform":""]])},[r("div",{class:d(["top bg-opacity-70 rounded-xl blur-xl",n(a)])},null,2)],2)]))}},[["__scopeId","data-v-691e5264"]]);const Nl=l=>(f("data-v-67a92420"),l=l(),v(),l),zl={class:"w-80 sm:w-64 h-auto rounded-xl bg-black bg-opacity-20"},Ul={class:"mb-3 flex justify-end"},Pl={class:"w-40 h-16 relative border-2 border-red-500 rounded-xl"},Fl=Nl((()=>r("div",{class:"absolute -left-10 top-10 w-10 h-12 border-t-2 border-l-2 rounded-tl-full border-red-500"},null,-1))),Hl={class:"pt-2 pl-2 truncate"},Jl={class:"pl-2 truncate"},Yl={class:"w-64 h-40 m-auto relative"},ql=[Nl((()=>r("div",{class:"absolute -top-5 left-5 w-5 h-5 border-red-500 border-t border-l-2 rounded-tl-3xl"},null,-1))),Nl((()=>r("div",{class:"flex justify-center items-center text-yellow-300 border-2 border-red-700 border-opacity-10 rounded-full w-12 h-12 bg-white bg-opacity-5"},[r("span",{class:"animate-ping absolute top-6 left-5 flex items-center h-4 w-4 rounded-full bg-yellow-400 opacity-75"}),r("i",{class:"pe-7s-tools pe-2x"})],-1)))],Kl={class:"w-64 h-8 m-auto"},Ql={class:"w-64 pl-4 sm:px-2 m-auto pb-5"},Vl={key:0},Xl={key:1};var Zl=t({props:{isRotate:Boolean,status:String,machineInfo:Object,reasonList:Object,errorCodeList:Object},setup(t){const a=t,i=b(),d=(t="",e="")=>l(t,e,a.machineInfo),f=e((()=>a.status||"")),v=e((()=>d("MachineName",""))),g=e((()=>d("LineName",""))),h=()=>{let l=d("MachineID",""),t=d("MachineMaintain",[]),e=a.reasonList||[];i.commit("onPopupOtherData",JSON.stringify(t)),i.commit("onPopupOtherData2",JSON.stringify(e)),i.commit("onPopupOtherData3",l),i.commit("onPopupOtherData4",v.value),i.commit("onPopupForm","machineMaintain")};return(l,t)=>(s(),o("div",zl,[r("div",Ul,[r("div",Pl,[Fl,r("p",Hl," > "+u(n(g)),1),r("p",Jl," >> "+u(n(v)),1)])]),r("div",Yl,[c($l,{isRotate:a.isRotate,status:n(f)},null,8,["isRotate","status"]),"Warning"==n(f)?(s(),o("div",{key:0,class:"absolute -left-8 bottom-2 cursor-pointer",onClick:h},ql)):p("",!0)]),r("div",Kl,[c(El,{isRotate:a.isRotate,status:a.status},null,8,["isRotate","status"])]),r("div",Ql,["Out"==n(f)?(s(),o("div",Vl,[c(A,{machineInfo:a.machineInfo,errorCodeList:a.errorCodeList},null,8,["machineInfo","errorCodeList"])])):p("",!0),"Warning"==n(f)?(s(),o("div",Xl,[c(W,{machineInfo:a.machineInfo},null,8,["machineInfo"])])):p("",!0)])]))}},[["__scopeId","data-v-67a92420"]]);export{Zl as M};
