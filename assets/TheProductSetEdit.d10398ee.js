import{u as e,g as l,k as s,y as t,c as a,l as o,m as c,a as i,d as r,t as n,i as u,z as d,f as p,b as v,w as f,j as m,s as S,x as g,o as w,n as y,e as x}from"./vendor.5e620042.js";import{_ as A,i as h,s as P,S as b,a as C}from"./index.42c5c041.js";import{d as k}from"./vuedraggable.umd.43489d49.js";const L=e=>(S("data-v-18d9764b"),e=e(),g(),e),I={class:"mainPaddingX"},T={class:"flex flex-wrap py-4 text-4xl text-title-h1"},N={class:"mr-5 mb-1"},E={class:"mb-5 w-full shadow myBorder"},O={class:"flex sm:block items-center justify-between h-16 sm:h-auto py-4 pl-8 sm:pl-4 pr-10 sm:pr-4 titleStyle"},_={class:"sm:mb-2 w-2/4 lg:w-8/12 sm:w-full"},D={class:"flex sm:block items-center justify-between text-xl sm:text-lg"},j={class:"mr-5 sm:mr-0"},$={class:"w-full md:w-full md:shadow myBorder"},B={class:"flex flex-wrap items-center justify-between h-16 sm:h-auto py-4 pl-8 sm:pl-4 pr-10 sm:pr-4 titleStyle border-b"},G={class:"mb-1 flex items-center text-xl"},M=L((()=>r("i",{class:"pe-7s-ticket pe-lg pe-va"},null,-1))),R={class:"ml-2"},H={class:"flex sm:flex-wrap items-center justify-between py-4 pl-8 sm:pl-4 pr-10 sm:pr-4 mb-4 w-full"},U={class:"flex items-center mb-1"},F=["placeholder"],V={class:"px-5 lg:hidden mb-2 flex w-full text-white tableThStyle"},z={class:"w-full flex"},J={class:"w-full flex"},W=L((()=>r("div",{class:"lg:hidden w-2/12 text-center overflow-hidden"},null,-1))),q={key:0,class:"pl-1"},K={key:1,class:"pe-7s-angle-down pe-lg pe-va"},Z={key:2,class:"pe-7s-angle-up pe-lg pe-va"},X={key:0,class:"pl-1"},Q={key:1,class:"pe-7s-angle-down pe-lg pe-va"},Y={key:2,class:"pe-7s-angle-up pe-lg pe-va"},ee={key:0,class:"pl-1"},le={key:1,class:"pe-7s-angle-down pe-lg pe-va"},se={key:2,class:"pe-7s-angle-up pe-lg pe-va"},te={key:0,class:"pl-1"},ae={key:1,class:"pe-7s-angle-down pe-lg pe-va"},oe={key:2,class:"pe-7s-angle-up pe-lg pe-va"},ce={key:0,class:"pl-1"},ie={key:1,class:"pe-7s-angle-down pe-lg pe-va"},re={key:2,class:"pe-7s-angle-up pe-lg pe-va"},ne={key:0,class:"pl-1"},ue={key:1,class:"pe-7s-angle-down pe-lg pe-va"},de={key:2,class:"pe-7s-angle-up pe-lg pe-va"},pe={key:0,class:"pl-1"},ve={key:1,class:"pe-7s-angle-down pe-lg pe-va"},fe={key:2,class:"pe-7s-angle-up pe-lg pe-va"},me={class:"w-1/12 flex justify-center"},Se={class:"w-full text-center overflow-hidden"},ge={class:"px-5 w-full"},we={class:"w-1/12 lg:w-full py-2 lg:pt-0 lg:px-4 flex lg:flex-wrap justify-center lg:justify-between"},ye={class:"hidden lg:block w-2/12 text-lg"},xe={class:"w-full lg:w-auto flex lg:flex-wrap justify-center lg:justify-start"},Ae={class:"w-full lg:w-auto flex justify-center mb-1"},he=["onClick"],Pe={class:"w-full flex lg:block"},be=["onClick"],Ce={class:"lg:hidden w-2/12 flex justify-end items-center"},ke={class:"w-full flex lg:block lg:px-4 justify-center items-center"},Le={class:"hidden lg:inline mr-1"},Ie={key:0,class:"pe-7s-star"},Te={class:"w-full flex lg:block lg:px-4 justify-center items-center"},Ne={class:"hidden lg:inline mr-1"},Ee={class:"w-full flex lg:block lg:px-4 justify-center items-center"},Oe={class:"hidden lg:inline mr-1"},_e={class:"w-full flex lg:block lg:px-4 justify-center items-center"},De={class:"hidden lg:inline mr-1"},je={class:"w-full flex lg:block lg:px-4 justify-center items-center"},$e={class:"hidden lg:inline mr-1"},Be={class:"w-full flex lg:block lg:px-4 justify-center items-center"},Ge={class:"hidden lg:inline mr-1"},Me={class:"w-full flex lg:block lg:px-4 justify-center items-center"},Re={class:"hidden lg:inline mr-1"},He={class:"my-5 flex flex-wrap flex-row-reverse pr-10 sm:pr-4"};var Ue=A({props:{isProductAdd:String,processName:String,dateNow:String},setup(S){const g=S,A=e(),L=l(),Ue=s(),Fe=t();a((()=>A.state.resData.token)),a((()=>A.state.serverURL));const Ve=a((()=>Fe.query.productId)),ze=a((()=>L.locale.value)),Je=o(""),We=o(""),qe=o([]),Ke=o(""),Ze=o([]),Xe=o(0),Qe=(e=[])=>{let l=[...e],s=h(ze.value);return l.map((e=>{if(e&&e.processType){let l=Number(e.processType);e.processTypeTranslation=s[l]||""}return e}))};c((()=>ze.value),(()=>{Ze.value=Qe(Ze.value)}));const Ye=o(new b),el=Ye.value.sortingFunction();Ye.value.setKeys(["processName","processStitch","processStitchM","processStitchP","processCut","processGSD","processType"]),Ye.value.setFunction("Initial",(()=>{let e=el.Initial(Ke.value,qe.value,"processName");Ze.value=Qe(e)})),Ye.value.setFunction("ASC",((e="")=>{Ze.value=el.ASC(Ze.value,e,!0)})),Ye.value.setFunction("DESC",((e="")=>{Ze.value=el.DESC(Ze.value,e,!0)}));const ll=(e="")=>Ye.value.sort(e),sl=()=>{Ye.value.KeepTheSortingRuleAndFilter(),Xe.value=Ze.value.length},tl=(e=!0)=>{e&&Ye.value.sort("else",!1),Ze.value=P(Ke.value,qe.value,"processName"),Xe.value=Ze.value.length},al=()=>{Ke.value="",tl()},ol=(e=(()=>{}))=>{if(!Ve.value)return console.warn("product id is wrong");let l=A.state.fakeData.productSetEdit[Ve.value];l&&(Je.value=l.productList.productName||"",We.value=l.productList.productSize||"",qe.value=l.processList,Ze.value=Qe(l.processList),Xe.value=Ze.value.length,e(),function(){let e=qe.value.map((e=>{let l="";return e&&"string"==typeof e.processName&&(l=e.processName.trim()),l}));sessionStorage.setItem("processNameArray",JSON.stringify(e))}())};ol();const cl=o(!1),il=o("");let rl;g.isProductAdd&&(cl.value=!0),g.processName&&(il.value=g.processName),g.dateNow&&(cl.value=!0),c((()=>g.dateNow),(()=>{g.processName&&(il.value=g.processName),cl.value=!0,ol(sl)})),c((()=>il.value),(e=>{rl&&clearTimeout(rl),e&&(rl=setTimeout((()=>{il.value="",rl=null}),31e3))}));const nl=()=>{if(sessionStorage.getItem("ProductAndLineAdd")){let e=JSON.parse(sessionStorage.getItem("ProductAndLineAdd"));return sessionStorage.removeItem("ProductAndLineAdd"),Ue.push({name:"ProductLineAdd",query:{lineId:e.lineId}})}let e={name:"ProductSet"};cl.value&&(e.params={productId:Ve.value,dateNow:JSON.stringify(new Date)}),Ue.push(e)},ul=()=>{A.commit("onPopupForm","processAdd"),A.commit("onPopupOtherData",Ve.value)},dl=()=>{},pl=()=>{if(Array.isArray(Ze.value)&&0==Ze.value.length){return alert(((e="")=>{let l="Please add a process first";return"tw"!=e&&"zh"!=e||(l="請先新增製程"),"jp"!=e&&"ja"!=e||(l="最初にプロセスを追加してください"),"cn"!=e&&"ch"!=e||(l="请先新增制程"),l})(ze.value))}A.commit("onPopupForm","automaticLineOptimize"),A.commit("onPopupOtherData",Ze.value)};return(e,l)=>(w(),i("main",I,[r("h1",T,[r("span",N,n(e.$t("ProductSetEdit.PSE_TITLE")),1),r("button",{class:"mb-1 btn btnBlueColor",onClick:nl},n(e.$t("GLOBAL.GLOBAL_BACK")),1)]),r("div",E,[r("div",O,[r("div",_,[r("span",D,[r("p",j,n(e.$t("ProductSetAdd.PSA_PRODUCT"))+" : "+n(Je.value),1),r("p",null,n(e.$t("ProductSetAdd.PSA_SIZE"))+" : "+n(We.value),1)])])])]),r("div",$,[r("div",B,[r("span",G,[M,r("span",R,n(e.$t("GLOBAL.GLOBAL_LIST")),1),r("span",null,"("+n(Xe.value)+")",1)]),r("button",{class:"mb-1 btn btnBlueColor",onClick:ul},n(e.$t("ProductSetAdd.PSA_NEWPROCESS")),1)]),r("div",H,[r("div",U,[u(r("input",{type:"text",class:"myInput rounded-r-none w-60 sm:w-auto text-gray-500",placeholder:e.$t("ProductSetEditNext.PSEN_NAME"),"onUpdate:modelValue":l[0]||(l[0]=e=>Ke.value=e)},null,8,F),[[d,Ke.value]]),r("button",{type:"button",class:"btn btnSearchColor",onClick:tl},n(e.$t("Product.PRO_SEARCHBTN")),1)]),r("button",{type:"button",class:"btn btnBlueColor mb-1",onClick:al},n(e.$t("Product.PRO_SHOWALL")),1)]),r("div",V,[r("div",z,[r("div",J,[W,r("div",{class:"w-full text-center overflow-hidden",onClick:l[1]||(l[1]=e=>ll("processName"))},[r("span",null,n(e.$t("ProductSetAdd.PSA_PROCESS")),1),"Initial"==Ye.value.info.processName.direction?(w(),i("span",q,"↕")):p("",!0),"ASC"==Ye.value.info.processName.direction?(w(),i("i",K)):p("",!0),"DESC"==Ye.value.info.processName.direction?(w(),i("i",Z)):p("",!0)]),r("div",{class:"w-full text-center overflow-hidden",onClick:l[2]||(l[2]=e=>ll("processStitch"))},[r("span",null,n(e.$t("ProductSetAdd.PSA_STITCH")),1),"Initial"==Ye.value.info.processStitch.direction?(w(),i("span",X,"↕")):p("",!0),"ASC"==Ye.value.info.processStitch.direction?(w(),i("i",Q)):p("",!0),"DESC"==Ye.value.info.processStitch.direction?(w(),i("i",Y)):p("",!0)]),r("div",{class:"w-full text-center overflow-hidden",onClick:l[3]||(l[3]=e=>ll("processStitchM"))},[r("span",null,n(e.$t("ProductSetAdd.PSA_STITCHLOWLIM")),1),"Initial"==Ye.value.info.processStitchM.direction?(w(),i("span",ee,"↕")):p("",!0),"ASC"==Ye.value.info.processStitchM.direction?(w(),i("i",le)):p("",!0),"DESC"==Ye.value.info.processStitchM.direction?(w(),i("i",se)):p("",!0)]),r("div",{class:"w-full text-center overflow-hidden",onClick:l[4]||(l[4]=e=>ll("processStitchP"))},[r("span",null,n(e.$t("ProductSetAdd.PSA_STITCHUPLIM")),1),"Initial"==Ye.value.info.processStitchP.direction?(w(),i("span",te,"↕")):p("",!0),"ASC"==Ye.value.info.processStitchP.direction?(w(),i("i",ae)):p("",!0),"DESC"==Ye.value.info.processStitchP.direction?(w(),i("i",oe)):p("",!0)]),r("div",{class:"w-full text-center overflow-hidden",onClick:l[5]||(l[5]=e=>ll("processCut"))},[r("span",null,n(e.$t("ProductSetAdd.PSA_TRIM")),1),"Initial"==Ye.value.info.processCut.direction?(w(),i("span",ce,"↕")):p("",!0),"ASC"==Ye.value.info.processCut.direction?(w(),i("i",ie)):p("",!0),"DESC"==Ye.value.info.processCut.direction?(w(),i("i",re)):p("",!0)]),r("div",{class:"w-full text-center overflow-hidden",onClick:l[6]||(l[6]=e=>ll("processGSD"))},[r("span",null,n(e.$t("ProductSetAdd.PSA_GSD")),1),"Initial"==Ye.value.info.processGSD.direction?(w(),i("span",ne,"↕")):p("",!0),"ASC"==Ye.value.info.processGSD.direction?(w(),i("i",ue)):p("",!0),"DESC"==Ye.value.info.processGSD.direction?(w(),i("i",de)):p("",!0)]),r("div",{class:"w-full text-center overflow-hidden",onClick:l[7]||(l[7]=e=>ll("processType"))},[r("span",null,n(e.$t("ProductSetAdd.PSA_CAL")),1),"Initial"==Ye.value.info.processType.direction?(w(),i("span",pe,"↕")):p("",!0),"ASC"==Ye.value.info.processType.direction?(w(),i("i",ve)):p("",!0),"DESC"==Ye.value.info.processType.direction?(w(),i("i",fe)):p("",!0)])])]),r("div",me,[r("div",Se,n(e.$t("GLOBAL.GLOBAL_DELETE")),1)])]),r("div",ge,[v(m(k),{modelValue:Ze.value,"onUpdate:modelValue":l[8]||(l[8]=e=>Ze.value=e),"item-key":"id",class:"list-group","ghost-class":"ghost"},{item:f((({element:l,index:s})=>[r("div",{class:y(["w-full lg:w-11/12 lg:m-auto mb-2 lg:py-5 flex lg:block flex-row-reverse tableHover text-white border-t lg:shadow-lg border-gray-800 rounded",[l.processName==il.value?"isNewBgColor":""]])},[r("div",we,[r("div",ye,n(s+1)+". ",1),r("div",xe,[r("div",Ae,[r("button",{type:"button",class:"btn btnRedColor",onClick:e=>(e=>{let l=C(ze.value),s=l.deleteSuccess,t=l.confirmDelete;if(1!=confirm(t));else{let l=A.state.fakeData.productSetEdit[Ve.value];if(l){let t=l.processList.findIndex((l=>l.processId==e));if(-1==t)return console.warn("The process id is not correct");l.processList.splice(t,1),cl.value=!0,alert(s),ol(sl)}}})(l.processId)},n(e.$t("GLOBAL.GLOBAL_DELETE")),9,he)])])]),r("div",Pe,[r("div",{class:y(["w-full lg:w-full flex lg:flex-wrap cursor-pointer lg:text-lg",[1==l.processMajor?"majorText":"text-white"]]),onClick:e=>((e="",l=Ve.value)=>{if(!e||!l)return console.warn("The process ID or the product ID is wrong");let s={name:"ProductSetEditNext",query:{productId:l,processId:e}};cl.value&&(s.params={dateNow:JSON.stringify(new Date)}),Ue.push(s)})(l.processId)},[r("div",Ce,n(s+1)+". ",1),r("div",ke,[r("span",Le,n(e.$t("ProductSetAdd.PSA_PROCESS"))+" :",1),1==l.processMajor?(w(),i("i",Ie)):p("",!0),x(" "+n(l.processName),1)]),r("div",Te,[r("span",Ne,n(e.$t("ProductSetAdd.PSA_STITCH"))+" :",1),x(" "+n(l.processStitch),1)]),r("div",Ee,[r("span",Oe,n(e.$t("ProductSetAdd.PSA_STITCHLOWLIM"))+" :",1),x(" "+n(l.processStitchM),1)]),r("div",_e,[r("span",De,n(e.$t("ProductSetAdd.PSA_STITCHUPLIM"))+" :",1),x(" "+n(l.processStitchP),1)]),r("div",je,[r("span",$e,n(e.$t("ProductSetAdd.PSA_TRIM"))+" :",1),x(" "+n(l.processCut),1)]),r("div",Be,[r("span",Ge,n(e.$t("ProductSetAdd.PSA_GSD"))+" :",1),x(" "+n(l.processGSD),1)]),r("div",Me,[r("span",Re,n(e.$t("ProductSetAdd.PSA_CAL"))+" :",1),x(" "+n(l.processTypeTranslation),1)])],10,be)])],2)])),_:1},8,["modelValue"])]),r("div",He,[r("button",{class:"btn btnBlueColor mb-1 mr-1",onClick:l[9]||(l[9]=(...e)=>m(dl)&&m(dl)(...e))},n(e.$t("GLOBAL.GLOBAL_SAVESORT")),1),r("button",{class:"btn btnBlueColor mb-1 mr-1",onClick:pl},n(e.$t("AUTOMATICLINEOPTIMIZE.ALO_BUTTON")),1)])])]))}},[["__scopeId","data-v-18d9764b"]]);export{Ue as default};