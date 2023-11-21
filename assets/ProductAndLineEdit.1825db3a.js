import{g as e,y as l,k as t,u as s,c as a,l as n,m as o,a as i,d as u,t as c,B as r,f as d,i as p,z as m,j as v,b as h,w as y,V as x,o as S,e as L,G as b,F as f,q as I}from"./vendor.5e620042.js";import{d as T}from"./vuedraggable.umd.43489d49.js";import{_ as C,i as P,a as w,f as A,n as B,d as _}from"./index.42c5c041.js";const k={class:"mainPaddingX"},M={class:"py-4 text-4xl text-title-h1"},N={class:"py-6 px-4 sm:px-2 sm:py-4 w-full shadow text-gray-500 text-sm myBorder"},O={class:"flex justify-between sm:block"},E={class:"order-2 sm:order-1 min-w-max sm:min-w-fit mb-3 sm:mb-0"},R=["onClick"],U={class:"articleTitle order-1 sm:order-2 mb-3 mr-2 sm:mr-0"},g={class:"flex"},j={class:"inputTitle myInputSearchTitle rounded-l"},$={class:"flex mt-3"},V={class:"inputTitle myInputSearchTitle rounded-l"},G={key:0,class:"flex mt-3"},D={class:"inputTitle myInputSearchTitle rounded-l"},q={class:"relative w-full flex items-center"},H={class:"flex items-center absolute targetInputIcon"},W={key:0,class:"text-green-400"},Y={key:1,class:"text-red-600"},K={key:0},z={class:"pl-6 py-4 bg-red-100 text-red-700 rounded"},F={key:1},X={class:"infoBlock p-3 flex xl:block justify-between items-center myBorder shadow"},J={class:"flex items-center justify-center xl:justify-between xl:mb-2"},Q={class:"cleaBoxHeight"},Z=["onClick"],ee={class:"flex xl:mb-2"},le={class:"inputTitle myInputSearchTitle rounded-l"},te=["onUpdate:modelValue"],se={class:"flex xl:mb-2"},ae={class:"inputTitle myInputSearchTitle rounded-l"},ne=["onUpdate:modelValue","onChange"],oe={value:"0",disabled:"",hidden:""},ie=["value"],ue={key:0},ce={class:"flex xl:mb-2"},re={class:"inputTitle myInputSearchTitle rounded-l"},de=["onUpdate:modelValue"],pe={class:"flex justify-center xl:justify-start xl:mb-2"},me={class:"inputTitle myInputSearchTitle rounded-l"},ve=["onUpdate:modelValue"],he={class:"flex"},ye={class:"inputTitle myInputSearchTitle rounded-l"},xe=["onUpdate:modelValue"],Se={class:"flex justify-end xl:hidden cleaBoxWidth"},Le=["onClick"],be={class:"flex flex-wrap justify-end px-3"},fe=["onClick"],Ie={type:"submit",class:"mb-2 ml-2 btn btnBlueColor"};var Te=C({props:{toBottom:String},setup(C){const Te=C,Ce=e(),Pe=l(),we=t(),Ae=s(),Be=a((()=>Ce.locale.value));a((()=>Ae.state.resData.adminName)),a((()=>Ae.state.resData.token)),a((()=>Ae.state.serverURL));const _e=a((()=>Pe.query.clpId)),ke=a((()=>P(Be.value))),Me=_(),Ne=Me.isNumeric,Oe=Me.isObject,Ee=n({}),Re=n("No"),Ue=n(""),ge=n(""),je=n([]),$e=n({}),Ve=n({}),Ge=n(""),De=n({}),qe=n(""),He=n(""),We=n(""),Ye=()=>{if(!Ue.value)return;let e={name:"LineBalance",query:{lineId:Ue.value}};window.scrollTo(0,0),we.push(e)};const Ke=a((()=>({id:Object.keys(De.value),name:Object.values(De.value)}))),ze=n(new class{constructor(){this.isNoMachine=!1,this.isShowAll=!1}set(e="initial"){this.isNoMachine=!1,this.isShowAll=!1,"isNoMachine"==e&&(this.isNoMachine=!0),"isShowAll"==e&&(this.isShowAll=!0)}}),Fe=n([]),Xe=n(!1),Je=()=>{let e=w(Be.value);if(confirm(e.confirmDelete)){let l=e.deleteSuccess;return alert(l),void we.push({name:"ProductionLineSet",params:{lineId:Ue.value}})}};(()=>{if(!_e.value)return console.error("clpid error");let e=Ae.state.fakeData.productAndLineEdit[_e.value];e&&(Ee.value=Oe(e.clearList)?e.clearList:{},Re.value="Yes"==e.del?e.del:"No",Ue.value=e.lineId||"",ge.value=e.lineName||"",je.value=Array.isArray(e.machineList)?e.machineList:[],$e.value=Oe(e.process)?e.process:{},Ve.value=Oe(e.processList)?e.processList:{},Ge.value=e.processMajorId||"",De.value=Oe(e.processSelect)?e.processSelect:{},qe.value=e.productId||"",He.value=e.productName||"",We.value=Ne(e.target)?e.target:"",0==je.value.length?ze.value.set("isNoMachine"):ze.value.set("isShowAll"),Fe.value=function(){let e=A(je.value);return e.map((e=>{let l=e.machineId||"",t=$e.value[l]||"0",s=Ve.value[t]||{};e.processId=t;let a=s.processStitch||"",n=s.processStitchP||"",o=s.processStitchM||"",i=s.processType||"";e.processStitchP=n,e.processStitchM=o,e.processStitch=a,e.processCut=s.processCut||"",e.processType=i,e.Stitch=B(a,n,o),e.typeTranslation=ke.value[i]||"",e.cmpid=Ee.value[l]||""})),e}(),"true"==Te.toBottom&&x((()=>window.scrollTo(0,document.body.scrollHeight))))})();const Qe=e=>{Fe.value[e].Stitch="",Fe.value[e].cmpid="",Fe.value[e].machineMajor="No",Fe.value[e].processCut="",Fe.value[e].processId="0",Fe.value[e].processStitch="",Fe.value[e].processStitchM="",Fe.value[e].processStitchP="",Fe.value[e].processType="",Fe.value[e].typeTranslation=""},Ze=()=>Ue.value&&qe.value&&_e.value?void 0:console.warn("lineId/productId/processId error");return o((()=>Be.value),(()=>{Fe.value.map((e=>{e.typeTranslation=ke.value[e.processType]||""}))})),(e,l)=>(S(),i("main",k,[u("h1",M,c(e.$t("PRODUCT_LINE.PL_PROD")),1),u("div",N,[u("section",O,[u("article",E,[u("button",{class:"btn btnBlueColor mr-2 sm:mb-3",onClick:l[0]||(l[0]=e=>((e=Xe.value,l=Ue.value)=>{let t="/production_line_set";e&&l&&(t={name:"ProductionLineSet",params:{lineId:l}}),we.push(t)})())},c(e.$t("ProductMachine.PM_BACK")),1),"Yes"==Re.value?(S(),i("button",{key:0,class:"btn btnRedColor sm:mb-3",onClick:r(Je,["prevent"])},c(e.$t("ProductMachine.PM_DELETE")),9,R)):d("",!0)]),u("article",U,[u("div",g,[u("div",j,c(e.$t("PRODUCT_LINE.PL_LINE")),1),p(u("input",{type:"text",class:"w-full myInputReadonly rounded-l-none","onUpdate:modelValue":l[1]||(l[1]=e=>ge.value=e),readonly:"",required:""},null,512),[[m,ge.value]])]),u("div",$,[u("div",V,c(e.$t("GLOBAL.GLOBAL_PRODUCT")),1),p(u("input",{type:"text",class:"w-full myInputReadonly rounded-l-none","onUpdate:modelValue":l[2]||(l[2]=e=>He.value=e),readonly:"",required:""},null,512),[[m,He.value]])]),ze.value.isShowAll?(S(),i("div",G,[u("div",D,c(e.$t("PRODUCT_LINE.PL_TARGET")),1),u("div",q,[p(u("input",{type:"number",min:"0",step:"1",class:"myInputSearch w-full rounded-l-none targetInput",placeholder:"0","onUpdate:modelValue":l[3]||(l[3]=e=>We.value=e),required:""},null,512),[[m,We.value]]),u("div",H,[We.value?(S(),i("span",W,"✔")):(S(),i("span",Y,"✖"))])])])):d("",!0)])]),ze.value.isNoMachine?(S(),i("section",K,[u("article",null,[u("div",z,c(e.$t("PRODUCT_LINE.PL_NO_MACHINES")),1)])])):d("",!0),ze.value.isShowAll?(S(),i("section",F,[u("form",{onSubmit:l[4]||(l[4]=r(((...e)=>v(Ze)&&v(Ze)(...e)),["prevent"]))},[u("article",null,[h(v(T),{list:Fe.value,"item-key":"name",class:"flex flex-wrap"},{item:y((({element:l,index:t})=>[u("div",X,[u("div",J,[L(c(t+1)+" ",1),u("span",Q,[l.cmpid?(S(),i("button",{key:0,class:"btn btnBlueColor hidden xl:inline-block",onClick:r((e=>Qe(t)),["prevent"])},c(e.$t("ProductMachine.PM_CLEAR")),9,Z)):d("",!0)])]),u("div",ee,[u("div",le,c(e.$t("GLOBAL.GLOBAL_MACHINE")),1),p(u("input",{type:"text",class:"rounded-l-none myInputReadonly cursor-move inputWidth","onUpdate:modelValue":e=>l.machineName=e,readonly:""},null,8,te),[[m,l.machineName]])]),u("div",se,[u("div",ae,c(e.$t("GLOBAL.GLOBAL_PROCESS")),1),p(u("select",{class:"myInputSearch rounded-l-none selectWidth","onUpdate:modelValue":e=>l.processId=e,onChange:e=>(e=>{if(!Fe.value[e])return console.warn("wrong index");let l=Fe.value[e].processId||"",t=Ve.value[l]||{},s=t.processStitch||"",a=t.processStitchP||"",n=t.processStitchM||"",o=t.processType||"";Fe.value[e].processStitch=s,Fe.value[e].processStitchP=a,Fe.value[e].processStitchM=n,Fe.value[e].processCut=t.processCut||"",Fe.value[e].processType=o,Fe.value[e].Stitch=B(s,a,n),Fe.value[e].typeTranslation=ke.value[o]||""})(t)},[u("option",oe,c(e.$t("ProductMachine.PM_SELECT")),1),(S(!0),i(f,null,I(v(Ke).name,((e,l)=>(S(),i("option",{key:"processList"+l,value:v(Ke).id[l]},[Ge.value==v(Ke).id[l]?(S(),i("span",ue,"☆")):d("",!0),L(" "+c(e),1)],8,ie)))),128))],40,ne),[[b,l.processId]])]),u("div",ce,[u("div",re,[u("div",null,c(e.$t("GLOBAL.GLOBAL_STITCH")),1)]),p(u("input",{type:"text",class:"rounded-l-none myInputReadonly inputWidth","onUpdate:modelValue":e=>l.Stitch=e,readonly:""},null,8,de),[[m,l.Stitch]])]),u("div",pe,[u("div",me,c(e.$t("GLOBAL.GLOBAL_TRIM")),1),p(u("input",{type:"text",class:"w-10 xl:w-full rounded-l-none myInputReadonly","onUpdate:modelValue":e=>l.processCut=e,readonly:""},null,8,ve),[[m,l.processCut]])]),u("div",he,[u("div",ye,c(e.$t("ProductSet.PROSET_COUNTSTYLE")),1),p(u("input",{type:"text",class:"rounded-l-none myInputReadonly inputWidth","onUpdate:modelValue":e=>l.typeTranslation=e,readonly:""},null,8,xe),[[m,l.typeTranslation]])]),u("div",Se,[l.cmpid?(S(),i("button",{key:0,class:"btn btnBlueColor",onClick:r((e=>Qe(t)),["prevent"])},c(e.$t("ProductMachine.PM_CLEAR")),9,Le)):d("",!0)])])])),_:1},8,["list"])]),u("article",be,[u("button",{class:"mb-2 btn btnBlueColor",onClick:r(Ye,["prevent"])},c(e.$t("ProductMachine.PM_BACK_LINEBALANCE")),9,fe),u("button",Ie,c(e.$t("GLOBAL.GLOBAL_SAVE")),1)])],32)])):d("",!0)])]))}},[["__scopeId","data-v-94dc8bce"]]);export{Te as default};