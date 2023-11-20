import{u as e,g as t,k as s,c as l,l as a,a as o,d as r,t as n,B as p,s as m,x as i,o as E}from"./vendor.5e620042.js";import{r as c,u,w as d}from"./xlsx.db07aefa.js";import{_}from"./index.4332a85f.js";const f={class:"mainPaddingX"},b={class:"flex flex-wrap py-4 text-4xl text-title-h1"},x={class:"mr-5 mb-1"},P={class:"theWidth shadow myBorder"},M={class:"flex flex-wrap items-center justify-between h-16 sm:h-auto py-4 pl-8 sm:pl-4 pr-10 sm:pr-4 titleStyle border-b"},h={class:"mb-1 flex items-center text-xl"},v=(e=>(m("data-v-472eae6d"),e=e(),i(),e))((()=>r("i",{class:"pe-7s-door-lock pe-lg pe-va"},null,-1))),A={class:"ml-3 mr-1"},y={class:"py-4 pl-8 sm:pl-4 pr-10 sm:pr-4 mb-4 w-full text-red-600"},L=["onSubmit"],w={class:"mb-5 flex flex-wrap md:block items-center text-white"},B={class:"mr-5"},I={class:"md:mt-3"},O={class:"mb-5 flex items-center"},R={type:"submit",class:"btn btnBlueColor"};var C=_({setup(m){const i=e(),_=t(),C=s(),S=l((()=>_.locale.value));l((()=>i.state.resData.token)),l((()=>i.state.serverURL));const g=()=>C.push("/employee_settings"),D=a(null),N=e=>{let t=e.target.files[0],s=new FileReader;s.readAsArrayBuffer(t),s.onload=function(e){let t=e.target.result,s=c(t,{type:"binary"}),l=s.Sheets[s.SheetNames[0]],a=u.sheet_to_json(l,{header:1}),o="";a.forEach((e=>{o+=e.join(",")+"\r\n"})),D.value=new Blob(["\ufeff"+o],{type:"text/csv;charset=utf-8;"})},s.onerror=function(){}},k=()=>{let e=function(){let e={tw:"上傳後會覆蓋原本的資料，是否確認上傳?",cn:"上传后会覆盖原本的资料，是否确认上传?",jp:"アップロード後、元のデータが上書きされます。アップロードを確認しますか？",en:"After uploading, the original data will be overwritten. Do you want to confirm the upload?"};return e[S.value]||e.en}();confirm(e)},j=()=>{let e=_.messages.value[S.value].Employee,t=[e.EMP_NAME,e.EMP_MIDDLE,e.EMP_FORENAME,e.EMP_NO,e.EMP_GENDER,e.EMP_BIRTHAY,e.EMP_ONBOARD,e.EMP_FACTORY,e.EMP_DEPART,e.EMP_LINE,e.EMP_PHONE,e.EMP_ADDRESS,e.EMP_ECP,e.EMP_ECPH,e.EMP_ESKILL,e.EMP_EREMARK],s=u.book_new(),l=u.aoa_to_sheet([t]);u.book_append_sheet(s,l,"Sheet1");d(s,"employee_list_sample.xlsx")};return(e,t)=>(E(),o("main",f,[r("h1",b,[r("span",x,n(e.$t("EmployeeImport.EMPI_EDIT")),1),r("button",{class:"mb-1 btn btnBlueColor",onClick:g},n(e.$t("GLOBAL.GLOBAL_BACK")),1)]),r("div",P,[r("div",M,[r("span",h,[v,r("span",A,n(e.$t("GLOBAL.GLOBAL_IMPORT")),1)]),r("button",{class:"mb-1 btn btnYellowColor",onClick:j},"sample download")]),r("div",y," Hint : "+n(e.$t("EmployeeImport.EMPI_WARN")),1),r("form",{onSubmit:p(k,["prevent"]),class:"pl-8 sm:pl-4 pr-10 sm:pr-4"},[r("div",w,[r("label",B,n(e.$t("EmployeeImport.EMPI_SELECT"))+":",1),r("div",I,[r("input",{type:"file",accept:".xls,.xlsx",onChange:N},null,32)])]),r("div",O,[r("button",R,n(e.$t("GLOBAL.GLOBAL_SAVE")),1)])],40,L)])]))}},[["__scopeId","data-v-472eae6d"]]);export{C as default};
