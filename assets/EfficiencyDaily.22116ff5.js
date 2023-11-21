import{c as e,J as t,m as a,o as l,a as i,d as r,j as s,t as n,S as o,l as c,T as d,n as u,U as v,F as g,q as p,e as h,u as y,k as m,g as f,K as A,f as L,b as x}from"./vendor.5e620042.js";import{_ as w,t as b,g as O}from"./index.647400d6.js";const E={class:"relative"},B=["id"],R={class:"absolute top-0 left-0 w-full h-full flex justify-center items-center text-white text-4xl"},N={props:{dataKey:String,data:Number,colors:Object},setup(o){const c=o,d=e((()=>{let e={availabilityAvg:{start:"red",end:"red"},performanceAvg:{start:"orange",end:"orange"},OEEAvg:{start:"yellow",end:"yellow"},targetReachAvg:{start:"green",end:"green"},others:{start:"blue",end:"blue"},background:{start:"gray",end:"gray"}},t=c.colors;if(t){Object.keys(e).map((a=>{t[a]&&(t[a].start&&(e[a].start=t[a].start),t[a].end&&(e[a].end=t[a].end))}))}return e})),u=e((()=>"efficiencyDailyDoughnut"+c.dataKey)),v=e((()=>{let e=Number(c.data)||0;return e<=0?0:e==1/0||e>999.9?999.9:Math.round(10*e)/10}));const g=new class{constructor(){this.width=200,this.height=this.width,this.padding=5,this.arc={innerRadius:.7*(this.width/2-this.padding),outerRadius:this.width/2-this.padding,cornerRadius:0}}setCornerRadius(){this.arc.cornerRadius=(this.arc.outerRadius-this.arc.innerRadius)/2}};g.setCornerRadius();const p=e((()=>[{value:100,property:"p1"},{value:v.value,property:"p2"}]));return t((()=>{const e=(e=p.value)=>{d3.select(`#${u.value} svg`).remove();const t=d3.select(`#${u.value}`).append("svg").attr("width",g.width).attr("height",g.height).attr("class","m-auto"),a=d3.pie().value((e=>e.value))(e),l=d3.arc().innerRadius(g.arc.innerRadius).outerRadius(g.arc.outerRadius).cornerRadius(g.arc.cornerRadius).startAngle((e=>0)).endAngle((e=>2*Math.PI*(e.data.value/100)));t.append("g").attr("transform",`translate(${g.width/2}, ${g.height/2})`).selectAll("arc").data(a).enter().append("path").attr("d",l).attr("fill",((e,t)=>{if(0==t)return d.value.background.start;let a=c.dataKey||"others";return d.value[a].start}))};e(),a((()=>v.value),(()=>e()))})),(e,t)=>(l(),i("main",E,[r("section",{id:s(u)},null,8,B),r("section",R,n(s(v)+"%"),1)]))}};const P={class:"relative"},G={id:"efficiencyDailyBar",class:"relative"},k={class:"text-center text-sm"},T={class:"mx-1"},C={class:"mx-1"},_={class:"mx-1"},S={class:"mx-1"},D={class:"absolute xAxisLabelForTextLengthLimit flex items-center"},I={class:"px-5 flex justify-center flex-wrap text-lg text-white"};var $=w({props:{data:Object,colors:Object},setup(y){const m=y;o((e=>({"033f1a3e":s(N),"6d0b90c0":s(R),"25f8feaa":s(K),d77225ee:s(j),"16da2a5a":s(M)})));const f=new class{constructor(){this.width="100%",this.height=350,this.padding={top:40,right:45,bottom:40,left:45},this.y={isShowingAxis:!1,isLimited:!0,max:100,isNice:!0,ticks:10},this.x={isShowingAxis:!1,tickPadding:10}}},A=e((()=>{let e={lineName:[],availability:[],performance:[],targetReach:[]};if(m.data){let t=JSON.parse(JSON.stringify(m.data));Array.isArray(t.lineName)&&(e.lineName=t.lineName),Array.isArray(t.availability)&&(e.availability=t.availability),Array.isArray(t.performance)&&(e.performance=t.performance),Array.isArray(t.targetReach)&&(e.targetReach=t.targetReach)}return e})),L=c([{key:"availability",display:!0},{key:"performance",display:!0},{key:"targetReach",display:!0}]),x=e((()=>{let e=[];return L.value.map((t=>{t.display&&e.push(t.key)})),e})),w=e((()=>{let e=x.value.map((e=>A.value[e])).flat(1/0);return d3.extent(e)})),O=e((()=>{let e={availabilityAvg:{start:"red",end:"red"},performanceAvg:{start:"orange",end:"orange"},OEEAvg:{start:"yellow",end:"yellow"},targetReachAvg:{start:"green",end:"green"}},t=m.colors;if(t){Object.keys(e).map((a=>{t[a]&&(t[a].start&&(e[a].start=t[a].start),t[a].end&&(e[a].end=t[a].end))}))}return e})),E=c({barWidth:22,betweenBarsPadding:2}),B=c({display:!1,x:0,y:0,data:{lineName:"",availability:"0%",performance:"0%",OEE:"0%",targetReach:"0%"}}),R=e((()=>B.value.x+"px")),N=e((()=>B.value.y+"px")),$=c(0),F=()=>$.value=window.innerWidth,j=e((()=>f.height-f.padding.bottom+f.x.tickPadding+"px")),M=e((()=>f.padding.left+"px")),K=e((()=>`calc(100% - ${f.padding.left}px - ${f.padding.right}px)`));t((()=>{const e=()=>{d3.select("#efficiencyDailyBar svg").remove();const e=d3.select("#efficiencyDailyBar").append("svg").attr("width",f.width).attr("height",f.height),t=parseInt(d3.select("#efficiencyDailyBar svg").style("width")),a=d3.scaleBand().domain(A.value.lineName).range([f.padding.left,t-f.padding.right]),l=d3.axisBottom(a).tickSize(0).tickPadding(f.x.tickPadding),i=e.append("g").call(l).style("font-size","14px").attr("color","white").attr("transform",`translate(0,${f.height-f.padding.bottom})`);f.x.isShowingAxis||i.select("path").attr("stroke","none"),i.selectAll("text").attr("color","transparent");let r=f.y.isLimited?f.y.max:w.value[1];const s=[],n=d3.scaleLinear().domain([0,r]).range([f.height-f.padding.bottom,f.padding.top]);f.y.isNice&&n.nice();const o=d3.axisLeft(n).ticks(f.y.ticks).tickSize(0).tickPadding(10).tickFormat((e=>(s.push(e),e))),c=e.append("g").call(o).style("font-size","14px").attr("color","white").attr("transform",`translate(${f.padding.left},0)`);f.y.isShowingAxis||c.select("path").attr("stroke","none"),e.append("g").selectAll("line").data(s).join("line").attr("x1",f.padding.left).attr("x2",t-f.padding.right).attr("y1",(e=>n(e))).attr("y2",(e=>n(e))).attr("stroke","gray").attr("stroke-width",.1);const d=[O.value.availabilityAvg.start,O.value.performanceAvg.start,O.value.targetReachAvg.start],u=d3.scaleOrdinal().domain(L.value.map((e=>e.key))).range(d),v=E.value.barWidth*x.value.length+E.value.betweenBarsPadding*(x.value.length-1),g=(a.bandwidth()-v)/2,p=d3.scaleBand().domain(x.value).range([0,v]);e.append("g").selectAll("g").data(A.value.lineName).join("g").attr("transform",(e=>`translate(${a(e)+g}, 0)`)).style("cursor","pointer").on("mouseover",(function(e,t){B.value.x=e.offsetX,B.value.y=e.offsetY,B.value.display=!0,B.value.data.lineName=t;let a=A.value.lineName.findIndex((e=>e==t));if(a>-1){let e=A.value.availability[a],t=A.value.performance[a];B.value.data.availability=e+"%",B.value.data.performance=t+"%",B.value.data.targetReach=A.value.targetReach[a]+"%",B.value.data.OEE=b(e*t/100,1)+"%"}a==A.value.lineName.length-1&&(B.value.x=e.offsetX-150)})).on("mousemove",(function(e){})).on("mouseleave",(function(e){B.value.display=!1})).selectAll("rect").data(((e,t)=>x.value.map((e=>({key:e,value:A.value[e][t]}))))).join("rect").attr("x",((e,t)=>p(e.key))).attr("y",(e=>{let t=f.y.isLimited?(a=e.value)>f.y.max?f.y.max:a:e.value;var a;return n(t)})).attr("rx",3).attr("ry",1).attr("width",E.value.barWidth).attr("height",(e=>{let t=f.y.isLimited?(a=e.value)>f.y.max?f.y.max:a:e.value;var a;return f.height-f.padding.bottom-n(t)})).attr("fill",(e=>u(e.key)))};e(),a((()=>A.value),(t=>e())),a((()=>x.value),(t=>e())),window.addEventListener("resize",F),a((()=>$.value),(()=>e()))})),d((()=>{window.removeEventListener("resize",F)}));const U=(e="")=>{let t=L.value.findIndex((t=>t.key==e));t>-1&&(L.value[t].display=!L.value[t].display)};return(e,t)=>(l(),i("main",P,[r("section",G,[r("article",{class:u([B.value.display?"block":"hidden","toolTipArticle"])},[r("div",k,n(B.value.data.lineName),1),r("div",null,[r("span",{style:v("color:"+s(O).availabilityAvg.start)},"●",4),r("span",T,n(e.$t("GLOBAL.GLOBAL_AVAILABILITY"))+" :",1),r("span",null,n(B.value.data.availability),1)]),r("div",null,[r("span",{style:v("color:"+s(O).performanceAvg.start)},"●",4),r("span",C,n(e.$t("GLOBAL.GLOBAL_PERFORMANCE"))+" :",1),r("span",null,n(B.value.data.performance),1)]),r("div",null,[r("span",{style:v("color:"+s(O).OEEAvg.start)},"●",4),r("span",_,n(e.$t("GLOBAL.GLOBAL_OEE"))+" :",1),r("span",null,n(B.value.data.OEE),1)]),r("div",null,[r("span",{style:v("color:"+s(O).targetReachAvg.start)},"●",4),r("span",S,n(e.$t("GLOBAL.GLOBAL_TARGETREACH"))+" :",1),r("span",null,n(B.value.data.targetReach),1)])],2),r("article",D,[(l(!0),i(g,null,p(s(A).lineName,((e,t)=>(l(),i("div",{key:"Name"+t,class:"w-full text-center truncate"},n(e),1)))),128))])]),r("section",I,[r("article",{onClick:t[0]||(t[0]=e=>U("availability")),class:u(["cursor-pointer",L.value[0].display?"":"line-through decoration-2"])},[r("span",{style:v("color:"+s(O).availabilityAvg.start)},"●",4),h(" "+n(e.$t("GLOBAL.GLOBAL_AVAILABILITY")),1)],2),r("article",{onClick:t[1]||(t[1]=e=>U("performance")),class:u(["mx-4 cursor-pointer",L.value[1].display?"":"line-through decoration-2"])},[r("span",{style:v("color:"+s(O).performanceAvg.start)},"●",4),h(" "+n(e.$t("GLOBAL.GLOBAL_PERFORMANCE")),1)],2),r("article",{onClick:t[2]||(t[2]=e=>U("targetReach")),class:u(["cursor-pointer",L.value[2].display?"":"line-through decoration-2"])},[r("span",{style:v("color:"+s(O).targetReachAvg.start)},"●",4),h(" "+n(e.$t("GLOBAL.GLOBAL_TARGETREACH")),1)],2)])]))}},[["__scopeId","data-v-59b9dbdf"]]);const F={class:"mainPaddingX pb-4"},j={class:"py-4 flex items-center"},M={class:"mb-4 w-full myBorder shadow"},K={class:"flex items-center justify-between py-4 px-8 sm:px-4 titleStyle"},U={class:"flex items-center text-xl"},z=r("i",{class:"pe-7s-target pe-lg pe-va"},null,-1),Z={class:"ml-2"},H={class:"w-full"},W={class:"py-6 sm:py-4 text-gray-500 text-sm myBorder mb-4"},Y={key:0,class:"mb-3 w-full flex items-center flex-row-reverse"},J=[r("i",{class:"pe-7s-angle-right pe-2x pe-va pe-fw"},null,-1)],V={class:"bg-white px-2 py-1 bg-opacity-5 rounded"},X=r("span",{class:"mx-1"},"/",-1),q=[r("i",{class:"pe-7s-angle-left pe-2x pe-va pe-fw"},null,-1)],Q={class:"grid grid-cols-4 lg:grid-cols-2 sm:grid-cols-1 gap-5"},ee={class:"py-4 w-full myBorder"},te={class:"mb-4 text-center text-xl text-white"},ae=["title"],le=["title"],ie={class:"py-4 w-full myBorder"},re={class:"mb-4 text-center text-xl text-white"},se=["title"],ne=["title"],oe={class:"py-4 w-full myBorder"},ce={class:"mb-4 text-center text-xl text-white"},de=["title"],ue=["title"],ve={class:"py-4 w-full myBorder"},ge={class:"mb-4 text-center text-xl text-white"},pe=["title"],he=["title"],ye={setup(o){const d=y(),v=m(),g=f(),p=e((()=>g.locale.value));e((()=>d.state.resData.token)),e((()=>d.state.serverURL)),e((()=>{let e=JSON.parse(sessionStorage.getItem("efficiency_daily")||"{}")||{};return{lineSelect:e.lineSelect||[],dateStart:e.dateStart||"",dateEnd:e.dateEnd||""}}));const h=()=>{let e=window.innerWidth;return e>767?6:e>639?3:2},w=c(h()),b=c([]),E=c([]),B=c([]),R=c([]),P=c(!1),G=e((()=>{let e={tw:{availability:"運轉時間/開機時間",performance:"標準時間/運轉時間",OEE:"標準時間/開機時間",targetReach:"完成數/目標數",all:"全部產線的平均值",withoutZero:"不含尚未生產的產線平均值"},cn:{availability:"运转时间/开机时间",performance:"标准时间/运转时间",OEE:"标准时间/开机时间",targetReach:"完成数/目标数",all:"全部产线的平均值",withoutZero:"不含尚未生产的产线平均值"},jp:{availability:"稼働時間/開始時間",performance:"標準時間/稼働時間",OEE:"標準時間/開始時間",targetReach:"完了/目標",all:"全生産ラインの平均",withoutZero:"まだ生産されていない生産ラインの平均値を除く"},en:{availability:"Operation Time/Start Time",performance:"Standard Time/Operation Time",OEE:"Standard Time/Start Time",targetReach:"Unit/Target",all:"Average of all production lines",withoutZero:"Excluding the average value of production lines that have not yet been produced"}};return e[p.value]||e.en})),k=()=>P.value=!P.value,T=e((()=>{let e=P.value?{tw:"不含0",cn:"不含0",jp:"0を含まない",en:"Does not contain 0"}:{tw:"全部",cn:"全部",jp:"全て",en:"All"};return e[p.value]||e.en})),C=(e=[])=>{if(!Array.isArray(e)||0==e.length)return 0;let t=1;return e.reduce((function(e,a){return P.value||(t+=1),P.value&&a>0&&(t+=1),e+a}))/t},_=e((()=>C(E.value))),S=e((()=>C(B.value))),D=e((()=>_.value*S.value/100)),I=e((()=>C(R.value))),ye=c({lineName:[],availability:[],performance:[],targetReach:[]});const me=c(new class{constructor(e={}){this.rightNowPage=e.rightNowPage||1,this.amountData=e.amountData||6,this.lineNameCopy=e.lineNameCopy||[],this.totalPage=this.setTotalPage()}setTotalPage(){return 0==this.lineNameCopy.length?1:Math.ceil(this.lineNameCopy.length/this.amountData)}set(e){e&&e.rightNowPage&&(this.rightNowPage=e.rightNowPage),e&&e.amountData&&(this.amountData=e.amountData),Array.isArray(e.lineNameCopy)&&(this.lineNameCopy=O(e.lineNameCopy)),this.totalPage=this.setTotalPage()}previous(){this.rightNowPage>1?this.rightNowPage--:this.rightNowPage=this.totalPage}next(){this.rightNowPage<this.totalPage?this.rightNowPage++:this.rightNowPage=1}getListByPage(e=[]){let t=O(e),a=(this.rightNowPage-1)*this.amountData,l=this.rightNowPage*this.amountData;return t.slice(a,l)}}({rightNowPage:1,amountData:w.value})),fe=()=>{ye.value.lineName=me.value.getListByPage(b.value),ye.value.availability=me.value.getListByPage(E.value),ye.value.performance=me.value.getListByPage(B.value),ye.value.targetReach=me.value.getListByPage(R.value)},Ae=()=>{me.value.previous(),fe()},Le=()=>{me.value.next(),fe()};((e=(()=>{}))=>{let t=d.state.fakeData.efficiencyDaily;b.value=t.LineName||[],E.value=t.Availability||[],B.value=t.Performance||[],R.value=t.TargetReach||[],me.value.set({lineNameCopy:b.value}),e()})(fe);const xe=()=>{sessionStorage.removeItem("efficiency_daily"),v.push("/efficiency")},we=()=>w.value=h();t((()=>{window.addEventListener("resize",we)})),A((()=>{window.removeEventListener("resize",we)})),a((()=>w.value),(e=>{me.value.set({rightNowPage:1,amountData:e}),fe()})),c();const be=()=>{let e=d.state.fakeData.efficiencyDailyExport;Oe(e)},Oe=e=>{let t="",a=g.messages.value[p.value].GLOBAL;t=a.GLOBAL_LINE+","+a.GLOBAL_DATE+","+a.GLOBAL_MACHINE+","+a.GLOBAL_PRODUCT+","+a.GLOBAL_PROCESS+","+a.GLOBAL_TARGET+","+a.GLOBAL_PIECES+","+a.GLOBAL_TARGETREACH+","+a.GLOBAL_TURNONTOTAL+","+a.GLOBAL_RUNNINGTIME+","+a.GLOBAL_AVAILABILITY+","+a.GLOBAL_PERFORMANCE+","+a.GLOBAL_OEE+"\r\n";let l="";e.forEach((e=>{l+=e.LineName+","+e.Date+","+e.MachineName+","+e.ProductName+","+e.ProcessName+","+e.Target+","+e.Unit+","+e.TargetReach+","+e.TimeTotal+","+e.TimeRunning+","+e.Availability+","+e.Performance+","+e.OEE+"\r\n"})),t+=l;var i=URL.createObjectURL(new Blob(["\ufeff"+t],{type:"text/csv;charset=utf-8;"})),r=document.createElement("a");document.body.appendChild(r),r.href=i,r.download="efficiency_daily_list_"+(new Date).getTime()+".csv",r.click()},Ee=e((()=>({availabilityAvg:{start:"#4F4FFF",end:"#8C8CFF"},performanceAvg:{start:"#103a50",end:"#367B81"},OEEAvg:{start:"#C26EFF",end:"#B959FF"},targetReachAvg:{start:"#00FFFF",end:"#75d1b8"},others:{start:"#14c8c8",end:"#14c8c8"},background:{start:"#191c24e6",end:"#191c24e6"}})));return(e,t)=>(l(),i("main",F,[r("section",j,[r("h1",{class:u(["mr-5 text-4xl text-title-h1",["en"==s(p)?"sm:text-xl":"sm:text-3xl"]])},n(e.$t("EfficiencyDaily.EFD_TITLE")),3),r("button",{class:"btn btnBlueColor",onClick:xe},n(e.$t("GLOBAL.GLOBAL_BACK")),1)]),r("section",M,[r("article",K,[r("span",U,[z,r("span",Z,n(e.$t("GLOBAL.GLOBAL_LIST")),1)]),r("button",{class:"btn btnBlueColor",onClick:be},n(e.$t("GLOBAL.GLOBAL_EXPORT")),1)])]),r("section",H,[r("div",W,[me.value.totalPage>1?(l(),i("div",Y,[r("button",{onClick:Le},J),r("div",V,[r("span",null,n(me.value.rightNowPage),1),X,r("span",null,n(me.value.totalPage),1)]),r("button",{onClick:Ae},q),r("span",null,n(e.$t("LineBalance.LB_PROCESSINFO_PAGES"))+":",1)])):L("",!0),x($,{data:ye.value,colors:s(Ee)},null,8,["data","colors"])]),r("article",Q,[r("div",ee,[r("div",te,[r("p",{class:"cursor-help",title:s(G).availability},n(e.$t("GLOBAL.GLOBAL_AVAILABILITY")),9,ae),r("p",{class:"hover:text-blue-500 cursor-pointer",onClick:k,title:P.value?s(G).withoutZero:s(G).all}," ( "+n(s(T))+" ) ",9,le)]),x(N,{dataKey:"availabilityAvg",data:s(_),colors:s(Ee)},null,8,["data","colors"])]),r("div",ie,[r("div",re,[r("p",{class:"cursor-help",title:s(G).performance},n(e.$t("GLOBAL.GLOBAL_PERFORMANCE")),9,se),r("p",{class:"hover:text-blue-500 cursor-pointer",onClick:k,title:P.value?s(G).withoutZero:s(G).all}," ( "+n(s(T))+" ) ",9,ne)]),x(N,{dataKey:"performanceAvg",data:s(S),colors:s(Ee)},null,8,["data","colors"])]),r("div",oe,[r("div",ce,[r("p",{class:"cursor-help",title:s(G).OEE},n(e.$t("GLOBAL.GLOBAL_OEE")),9,de),r("p",{class:"hover:text-blue-500 cursor-pointer",onClick:k,title:P.value?s(G).withoutZero:s(G).all}," ( "+n(s(T))+" ) ",9,ue)]),x(N,{dataKey:"OEEAvg",data:s(D),colors:s(Ee)},null,8,["data","colors"])]),r("div",ve,[r("div",ge,[r("p",{class:"cursor-help",title:s(G).targetReach},n(e.$t("GLOBAL.GLOBAL_TARGETREACH")),9,pe),r("p",{class:"hover:text-blue-500 cursor-pointer",onClick:k,title:P.value?s(G).withoutZero:s(G).all}," ( "+n(s(T))+" ) ",9,he)]),x(N,{dataKey:"targetReachAvg",data:s(I),colors:s(Ee)},null,8,["data","colors"])])])])]))}};export{ye as default};
