import{u as e,g as l,c as a,l as t,m as o,r as s,a as n,d as i,t as p,b as u,w as r,i as c,z as m,W as d,B as y,e as v,f as E,j as f,F as g,q as w,s as x,x as b,o as L,n as P}from"./vendor.5e620042.js";import{_ as h,P as k,g as D,s as A,S as C,a as _}from"./index.647400d6.js";import{u as S,w as O}from"./xlsx.db07aefa.js";const B=e=>(x("data-v-4c972146"),e=e(),b(),e),M={class:"mainPaddingX"},N={class:"flex sm:block py-4 sm:mb-4 text-4xl text-title-h1"},I={class:"w-full shadow"},F={class:"flex sm:flex-wrap items-center justify-between h-16 sm:h-auto py-4 px-8 sm:px-4 titleStyle myBorder mb-4"},R={class:"mb-1 flex items-center text-xl"},$=B((()=>i("i",{class:"pe-7s-door-lock pe-lg pe-va"},null,-1))),T={class:"ml-3"},j={class:"relative -top-px"},G={class:"flex flex-wrap"},H={class:"mb-1 mx-2 sm:mx-1 btn btnGreenColor"},K={class:"px-8 sm:px-2 py-6 sm:py-4 text-white text-sm myBorder"},Y={class:"flex sm:flex-wrap items-center justify-between mb-4 w-full"},U={class:"flex items-center mb-1"},W=["placeholder"],z={class:"flex lg:flex-wrap justify-between my-4"},J={class:"w-full lg:w-auto lg:mb-2 flex items-center"},V={class:"mr-1"},X=["min"],q={class:"w-full lg:w-auto lg:mb-2 flex items-center flex-row-reverse"},Q=["onClick"],Z=[B((()=>i("i",{class:"pe-7s-angle-right pe-2x pe-va pe-fw"},null,-1)))],ee={class:"bg-white px-2 py-1 bg-opacity-5 rounded"},le=B((()=>i("span",{class:"mx-1"},"/",-1))),ae=["onClick"],te=[B((()=>i("i",{class:"pe-7s-angle-left pe-2x pe-va pe-fw"},null,-1)))],oe={class:"lg:hidden mb-2 flex w-full text-white tableThStyle"},se={class:"w-full flex"},ne={class:"w-full flex"},ie=B((()=>i("div",{class:"lg:hidden w-2/12 text-center overflow-hidden"},null,-1))),pe={key:0,class:"pl-1"},ue={key:1,class:"pe-7s-angle-down pe-lg pe-va"},re={key:2,class:"pe-7s-angle-up pe-lg pe-va"},ce={key:0,class:"pl-1"},me={key:1,class:"pe-7s-angle-down pe-lg pe-va"},de={key:2,class:"pe-7s-angle-up pe-lg pe-va"},ye={key:0,class:"pl-1"},ve={key:1,class:"pe-7s-angle-down pe-lg pe-va"},Ee={key:2,class:"pe-7s-angle-up pe-lg pe-va"},fe={key:0,class:"pl-1"},ge={key:1,class:"pe-7s-angle-down pe-lg pe-va"},we={key:2,class:"pe-7s-angle-up pe-lg pe-va"},xe={key:0,class:"pl-1"},be={key:1,class:"pe-7s-angle-down pe-lg pe-va"},Le={key:2,class:"pe-7s-angle-up pe-lg pe-va"},Pe={key:0,class:"pl-1"},he={key:1,class:"pe-7s-angle-down pe-lg pe-va"},ke={key:2,class:"pe-7s-angle-up pe-lg pe-va"},De={class:"w-2/12 flex justify-center"},Ae={class:"w-full text-center overflow-hidden mr-1"},Ce={class:"w-full text-center overflow-hidden"},_e={class:"w-full lg:grid lg:grid-cols-2 sm:grid-cols-1"},Se={class:"w-2/12 lg:w-full py-2 lg:pt-0 lg:px-4 flex justify-center lg:justify-between"},Oe={class:"hidden lg:block w-2/12 text-lg"},Be={class:"w-full lg:w-auto flex lg:flex-wrap justify-center lg:justify-start"},Me={class:"w-full lg:w-auto flex justify-center mr-1 mb-1"},Ne=["onClick"],Ie={class:"w-full lg:w-auto flex justify-center mb-1"},Fe=["onClick"],Re={class:"w-full flex lg:block"},$e=["onClick"],Te={class:"lg:hidden w-2/12 flex justify-end items-center"},je={class:"w-full flex lg:block lg:px-4 justify-center items-center"},Ge={class:"hidden lg:inline-block mr-1"},He={class:"w-full flex lg:block lg:px-4 justify-center items-center"},Ke={class:"hidden lg:inline-block mr-1"},Ye={key:0},Ue={class:"mx-1"},We={key:1},ze={class:"mx-1"},Je={class:"w-full flex lg:block lg:px-4 justify-center items-center"},Ve={class:"hidden lg:inline-block mr-1"},Xe={class:"w-full flex lg:block lg:px-4 justify-center items-center"},qe={class:"hidden lg:inline-block mr-1"},Qe={class:"w-full flex lg:block lg:px-4 justify-center items-center"},Ze={class:"hidden lg:inline-block mr-1"},el={class:"w-full flex lg:block lg:px-4 justify-center items-center"},ll={class:"hidden lg:inline-block mr-1"};var al=h({props:{EmployeeID:String,dateNow:String},setup(x){const b=x,h=e(),B=l(),al=a((()=>B.locale.value));a((()=>h.state.resData.token)),a((()=>h.state.serverURL));const tl=a((()=>{let e=JSON.parse(sessionStorage.getItem("employeeListSetting")||"0");return Number(e)||25})),ol=t([]),sl=t(0),nl=t(""),il=t([]),pl=t(new k({rightNowPage:1,amountData:tl.value,minAmountData:10})),ul=()=>{pl.value.previous(),il.value=pl.value.getListByPage()},rl=()=>{pl.value.next(),il.value=pl.value.getListByPage()},cl=()=>{let e=Number(pl.value.amountData);(!e||e==1/0||e>sl.value)&&(e=sl.value),e<pl.value.minAmountData&&(e=pl.value.minAmountData),pl.value.amountData=e,wl(),sessionStorage.setItem("employeeListSetting",JSON.stringify(e))},ml=t(new C),dl=ml.value.sortingFunction();ml.value.setKeys(["EmployeeID","EmployeeNo","EmployeeForename","EmployeeSurname","EmployeeFactory","EmployeeDepart","EmployeeLine","EmployeeOnBoard"]);const yl=(e=[])=>{pl.value.set({searchedeAndSortedListCopy:e}),il.value=pl.value.getListByPage()};ml.value.setFunction("Initial",(()=>{let e=gl();yl(e)})),ml.value.setFunction("ASC",((e="")=>{let l=dl.ASC(pl.value.searchedeAndSortedListCopy,e,!0);yl(l)})),ml.value.setFunction("DESC",((e="")=>{let l=dl.DESC(pl.value.searchedeAndSortedListCopy,e,!0);yl(l)}));const vl=(e="")=>{pl.value.set({rightNowPage:1}),ml.value.sort(e)},El=()=>{ml.value.KeepTheSortingRuleAndFilter(),sl.value=pl.value.searchedeAndSortedListCopy.length},fl=a((()=>"en"==al.value?"EmployeeForename":"EmployeeSurname")),gl=()=>{let e=[];if(nl.value){let l=A(nl.value,ol.value,"EmployeeForename"),a=A(nl.value,ol.value,"EmployeeSurname"),t=A(nl.value,ol.value,"EmployeeNo");e=[...new Set([...l,...a,...t])]}else e=D(ol.value);return e},wl=(e=!0)=>{e&&(ml.value.sort("else",!1),pl.value.set({rightNowPage:1}));let l=gl();pl.value.set({searchedeAndSortedListCopy:l}),il.value=pl.value.getListByPage(),sl.value=l.length},xl=()=>{nl.value="",wl()},bl=()=>{let e=[],l=B.messages.value[al.value].Employee,a=[l.EMP_NAME,l.EMP_MIDDLE,l.EMP_FORENAME,l.EMP_NO,l.EMP_GENDER,l.EMP_BIRTHAY,l.EMP_ONBOARD,l.EMP_FACTORY,l.EMP_DEPART,l.EMP_LINE,l.EMP_PHONE,l.EMP_ADDRESS,l.EMP_ECP,l.EMP_ECPH,l.EMP_ESKILL,l.EMP_EREMARK];e.push(a),ol.value.forEach((l=>{let a=[l.EmployeeSurname,l.EmployeeMiddle,l.EmployeeForename,l.EmployeeNo,l.EmployeeGender,l.EmployeeBD,l.EmployeeOnBoard,l.EmployeeFactory,l.EmployeeDepart,l.EmployeeLine,l.EmployeePhone,l.EmployeeAddress,l.EmployeeECP,l.EmployeeECPh,l.EmployeeSkill,l.EmployeeRemark];e.push(a)}));let t=S.book_new(),o=S.aoa_to_sheet(e);S.book_append_sheet(t,o,"Sheet1");let s="employee_list_"+(new Date).getTime()+".xlsx";O(t,s)},Ll=(e=(()=>{}))=>{ol.value=D(h.state.fakeData.adminEmployee),pl.value.set({searchedeAndSortedListCopy:ol.value}),il.value=pl.value.getListByPage(),sl.value=ol.value.length,e()};Ll();const Pl=t("");let hl;o((()=>Pl.value),(e=>{hl&&clearTimeout(hl),e&&(hl=setTimeout((()=>{Pl.value="",hl=null}),31e3))}));const kl=()=>{h.commit("onPopupForm","employeeAdd"),h.commit("onPopupOtherData",ol.value.map((e=>e.EmployeeNo)))};o((()=>b.dateNow),(()=>{b.EmployeeID&&(Pl.value=b.EmployeeID),Ll(El)}));const Dl=t(!1),Al=t(!1);return(e,l)=>{const a=s("router-link");return L(),n("main",M,[i("h1",N,p(e.$t("Employee.EMP_TITLE")),1),i("div",I,[i("div",F,[i("div",null,[i("span",R,[$,i("span",T,p(e.$t("GLOBAL.GLOBAL_LIST")),1),i("span",j,"( "+p(sl.value)+" )",1)])]),i("div",G,[i("button",{class:"mb-1 btn btnGreenColor",onClick:bl},p(e.$t("GLOBAL.GLOBAL_EXPORT")),1),u(a,{to:"/employee_import"},{default:r((()=>[i("button",H,p(e.$t("GLOBAL.GLOBAL_IMPORT")),1)])),_:1}),i("button",{class:"mb-1 btn btnBlueColor",onClick:kl},p(e.$t("GLOBAL.GLOBAL_ADD")),1)])]),i("div",K,[i("div",Y,[i("div",U,[c(i("input",{type:"text",class:"myInput rounded-r-none w-60 sm:w-auto text-gray-500",placeholder:e.$t("Employee.EMP_SEARCH_KEYWORD"),"onUpdate:modelValue":l[0]||(l[0]=e=>nl.value=e)},null,8,W),[[m,nl.value]]),i("button",{type:"button",class:"btn btnSearchColor",onClick:wl},p(e.$t("Product.PRO_SEARCHBTN")),1)]),i("button",{type:"button",class:"btn btnBlueColor mb-1",onClick:xl},p(e.$t("Product.PRO_SHOWALL")),1)]),i("div",z,[i("div",J,[i("label",V,p(e.$t("MachineList.MLIST_AMOUNT_DATA"))+" :",1),c(i("input",{type:"number",min:pl.value.minAmountData,step:"1",class:"myInput w-16 text-center","onUpdate:modelValue":l[1]||(l[1]=e=>pl.value.amountData=e),onChange:cl,onKeypress:l[2]||(l[2]=d(y((()=>{}),["prevent"]),["enter"]))},null,40,X),[[m,pl.value.amountData,void 0,{lazy:!0}]])]),i("div",q,[i("button",{onClick:y(rl,["prevent"])},Z,8,Q),i("div",ee,[i("span",null,p(pl.value.rightNowPage),1),le,i("span",null,p(pl.value.totalPage),1)]),i("button",{onClick:y(ul,["prevent"])},te,8,ae),i("span",null,p(e.$t("LineBalance.LB_PROCESSINFO_PAGES"))+":",1)])]),i("div",oe,[i("div",se,[i("div",ne,[ie,i("div",{class:"w-full text-center overflow-hidden",onClick:l[3]||(l[3]=e=>vl("EmployeeNo"))},[v(p(e.$t("Employee.EMP_NO"))+" ",1),"Initial"==ml.value.info.EmployeeNo.direction?(L(),n("span",pe,"↕")):E("",!0),"ASC"==ml.value.info.EmployeeNo.direction?(L(),n("i",ue)):E("",!0),"DESC"==ml.value.info.EmployeeNo.direction?(L(),n("i",re)):E("",!0)]),i("div",{class:"w-full text-center overflow-hidden",onClick:l[4]||(l[4]=e=>vl(f(fl)))},[v(p(e.$t("Employee.EMP_NAME"))+" ",1),"Initial"==ml.value.info[f(fl)].direction?(L(),n("span",ce,"↕")):E("",!0),"ASC"==ml.value.info[f(fl)].direction?(L(),n("i",me)):E("",!0),"DESC"==ml.value.info[f(fl)].direction?(L(),n("i",de)):E("",!0)]),i("div",{class:"w-full text-center overflow-hidden",onClick:l[5]||(l[5]=e=>vl("EmployeeFactory"))},[v(p(e.$t("Employee.EMP_FACTORY"))+" ",1),"Initial"==ml.value.info.EmployeeFactory.direction?(L(),n("span",ye,"↕")):E("",!0),"ASC"==ml.value.info.EmployeeFactory.direction?(L(),n("i",ve)):E("",!0),"DESC"==ml.value.info.EmployeeFactory.direction?(L(),n("i",Ee)):E("",!0)]),i("div",{class:"w-full text-center overflow-hidden",onClick:l[6]||(l[6]=e=>vl("EmployeeDepart"))},[v(p(e.$t("Employee.EMP_DEPART"))+" ",1),"Initial"==ml.value.info.EmployeeDepart.direction?(L(),n("span",fe,"↕")):E("",!0),"ASC"==ml.value.info.EmployeeDepart.direction?(L(),n("i",ge)):E("",!0),"DESC"==ml.value.info.EmployeeDepart.direction?(L(),n("i",we)):E("",!0)]),i("div",{class:"w-full text-center overflow-hidden",onClick:l[7]||(l[7]=e=>vl("EmployeeLine"))},[v(p(e.$t("Employee.EMP_LINE"))+" ",1),"Initial"==ml.value.info.EmployeeLine.direction?(L(),n("span",xe,"↕")):E("",!0),"ASC"==ml.value.info.EmployeeLine.direction?(L(),n("i",be)):E("",!0),"DESC"==ml.value.info.EmployeeLine.direction?(L(),n("i",Le)):E("",!0)]),i("div",{class:"w-full text-center overflow-hidden",onClick:l[8]||(l[8]=e=>vl("EmployeeOnBoard"))},[v(p(e.$t("Employee.EMP_ONBOARD"))+" ",1),"Initial"==ml.value.info.EmployeeOnBoard.direction?(L(),n("span",Pe,"↕")):E("",!0),"ASC"==ml.value.info.EmployeeOnBoard.direction?(L(),n("i",he)):E("",!0),"DESC"==ml.value.info.EmployeeOnBoard.direction?(L(),n("i",ke)):E("",!0)])])]),i("div",De,[i("div",Ae,p(e.$t("GLOBAL.GLOBAL_EDIT")),1),i("div",Ce,p(e.$t("GLOBAL.GLOBAL_DELETE")),1)])]),i("main",null,[i("section",_e,[(L(!0),n(g,null,w(il.value,((l,a)=>(L(),n("article",{class:"w-full lg:flex lg:justify-center lg:mb-4",key:"employees_list"+a},[i("div",{class:P(["flex lg:block flex-row-reverse tableHover border-t lg:py-5 lg:border-r lg:shadow-lg border-gray-800 rounded overflow-hidden",[[l.EmployeeNo==Pl.value?"isNewBgColor":""],[Dl.value?"lg:min-w-full":""],[Al.value?"w-full lg:w-72":"theWidth"]]])},[i("div",Se,[i("div",Oe,p((pl.value.rightNowPage-1)*pl.value.amountData+a+1)+". ",1),i("div",Be,[i("div",Me,[i("button",{type:"button",class:"btn btnBlueColor",onClick:e=>{return a=l.EmployeeID,h.commit("onPopupForm","employeeEdit"),h.commit("onPopupOtherData",ol.value.map((e=>e.EmployeeNo))),void h.commit("onPopupOtherData2",a);var a}},p(e.$t("GLOBAL.GLOBAL_EDIT")),9,Ne)]),i("div",Ie,[i("button",{type:"button",class:"btn btnRedColor",onClick:e=>((e="")=>{let l=_(al.value),a=l.confirmDelete;if(confirm(a)){if(!e)return console.warn("employee id is null");let a=h.state.fakeData.adminEmployee,t=a.findIndex((l=>(null==l?void 0:l.EmployeeID)==e));if(t>=0){a.splice(t,1);let e=l.deleteSuccess;alert(e),Ll(El)}}})(l.EmployeeID)},p(e.$t("GLOBAL.GLOBAL_DELETE")),9,Fe)])])]),i("div",Re,[i("div",{class:"w-full flex lg:flex-wrap cursor-pointer lg:text-lg",onClick:e=>((e="")=>{e&&(h.commit("onPopupForm","employeeShowAll"),h.commit("onPopupOtherData",e))})(l.EmployeeID)},[i("div",Te,p((pl.value.rightNowPage-1)*pl.value.amountData+a+1)+". ",1),i("div",je,[i("span",Ge,p(e.$t("Employee.EMP_NO"))+" :",1),v(" "+p(l.EmployeeNo),1)]),i("div",He,[i("span",Ke,p(e.$t("Employee.EMP_NAME"))+" :",1),"en"==f(al)?(L(),n("span",Ye,[i("span",null,p(l.EmployeeForename),1),i("span",Ue,p(l.EmployeeMiddle),1),i("span",null,p(l.EmployeeSurname),1)])):(L(),n("span",We,[i("span",null,p(l.EmployeeSurname),1),i("span",ze,p(l.EmployeeMiddle),1),i("span",null,p(l.EmployeeForename),1)]))]),i("div",Je,[i("span",Ve,p(e.$t("Employee.EMP_FACTORY"))+" :",1),v(" "+p(l.EmployeeFactory),1)]),i("div",Xe,[i("span",qe,p(e.$t("Employee.EMP_DEPART"))+" :",1),v(" "+p(l.EmployeeDepart),1)]),i("div",Qe,[i("span",Ze,p(e.$t("Employee.EMP_LINE"))+" :",1),v(" "+p(l.EmployeeLine),1)]),i("div",el,[i("span",ll,p(e.$t("Employee.EMP_ONBOARD"))+" :",1),v(" "+p(l.EmployeeOnBoard),1)])],8,$e)])],2)])))),128))])])])])])}}},[["__scopeId","data-v-4c972146"]]);export{al as default};
