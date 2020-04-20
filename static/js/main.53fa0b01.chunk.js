(this["webpackJsonpcovid-tracker"]=this["webpackJsonpcovid-tracker"]||[]).push([[0],{16:function(e,t,a){e.exports={container:"Cards_container__27578",card:"Cards_card__1l8dY",infected:"Cards_infected__1uAlU",recovered:"Cards_recovered__Atqfz",deaths:"Cards_deaths__MNK8Y"}},208:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(73),l=a.n(c),o=a(5),i=a.n(o),s=a(8),u=a(74),d=a(75),m=a(85),f=a(84),p=a(225),v=a(230),h=a(226),b=a(227),E=a(16),_=a.n(E),y=a(15),g=a(229),D=a(228),x=a(19),C=a.n(x),w="https://covid19.mathdro.id/api/",k=function(){var e=Object(s.a)(i.a.mark((function e(){var t,a,n,r,c,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.a.get(w);case 3:return t=e.sent,a=t.data,n=a.confirmed,r=a.recovered,c=a.deaths,l=a.lastUpdate,e.abrupt("return",{confirmed:n,recovered:r,deaths:c,lastUpdate:l});case 12:e.prev=12,e.t0=e.catch(0);case 14:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(s.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.a.get(w+"daily");case 3:return t=e.sent,a=t.data,e.abrupt("return",a.map((function(e){var t=e.confirmed,a=e.deaths,n=e.reportDate;return{confirmed:t.total,deaths:a.total,date:n}})));case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(s.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.a.get(w+"countries");case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(s.a)(i.a.mark((function e(t){var a,n,r,c,l,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.a.get(w+"countries/"+t);case 3:return a=e.sent,n=a.data,r=n.confirmed,c=n.recovered,l=n.deaths,o=n.lastUpdate,e.abrupt("return",{confirmed:r,recovered:c,deaths:l,lastUpdate:o});case 12:e.prev=12,e.t0=e.catch(0);case 14:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),N=a(76),G=a.n(N),I=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(y.a)(a,2),l=c[0],o=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=o,e.next=3,j();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[o]),l.length?r.a.createElement(g.a,{className:G.a.formControl},r.a.createElement(D.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:""},"Global (Select a Country)"),l.map((function(e,t){return r.a.createElement("option",{value:e,key:t},e)})))):null},U=a(36),A=a.n(U),T=a(11),M=a.n(T),R=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,l=t.lastUpdate;return a?r.a.createElement("div",{className:_.a.container},r.a.createElement(p.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(p.a,{item:!0,component:v.a,xs:12,md:3,className:M()(_.a.card,_.a.infected)},r.a.createElement(h.a,null,r.a.createElement(b.a,{color:"textSecondary"},"Infected"),r.a.createElement(b.a,{variant:"h6"},r.a.createElement(A.a,{start:0,end:a.value,duration:1.5,separator:","})),r.a.createElement(b.a,{color:"textSecondary"},new Date(l).toDateString()),r.a.createElement(b.a,{variant:"body2"},"Number of infected cases from COVID-19"))),r.a.createElement(p.a,{item:!0,component:v.a,xs:12,md:3,className:M()(_.a.card,_.a.recovered)},r.a.createElement(h.a,null,r.a.createElement(b.a,{color:"textSecondary"},"Recovered"),r.a.createElement(b.a,{variant:"h6"},r.a.createElement(A.a,{start:0,end:n.value,duration:1.5,separator:","})),r.a.createElement(b.a,{color:"textSecondary"},new Date(l).toDateString()),r.a.createElement(b.a,{variant:"body2"},"Number of recovered cases from COVID-19"))),r.a.createElement(p.a,{item:!0,component:v.a,xs:12,md:3,className:M()(_.a.card,_.a.deaths)},r.a.createElement(h.a,null,r.a.createElement(b.a,{color:"textSecondary"},"Deaths"),r.a.createElement(b.a,{variant:"h6"},r.a.createElement(A.a,{start:0,end:c.value,duration:1.5,separator:","})),r.a.createElement(b.a,{color:"textSecondary"},new Date(l).toDateString()),r.a.createElement(b.a,{variant:"body2"},"Number of deaths caused due to COVID-19"))))):null},V=a(20),L=a(82),W=a.n(L),J=function(e){var t=e.data,a=t.confirmed,c=t.recovered,l=t.deaths,o=e.country,u=Object(n.useState)([]),d=Object(y.a)(u,2),m=d[0],f=d[1];Object(n.useEffect)((function(){(function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=f,e.next=3,O();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var p=m.length?r.a.createElement(V.b,{data:{labels:m.map((function(e){var t=e.date;return new Date(t).toLocaleDateString("en-US",{month:"short",day:"numeric"})})),datasets:[{data:m.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:m.map((function(e){return e.deaths})),label:"Deaths",borderColor:"#ff0000",backgroundColor:"rgba(255,0,0,0.5)",fill:!0}]},options:{scales:{yAxes:[{ticks:{callback:function(e){var t=[{divider:1e6,suffix:"M"},{divider:1e3,suffix:"k"}];return function(e){for(var a=0;a<t.length;a++)if(e>=t[a].divider)return(e/t[a].divider).toString()+t[a].suffix;return e}(e)}}}]}}}):null,v=a?r.a.createElement(V.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0,0,255)","rgba(0,255,0,0.5)","rgba(255,0,0,0.5)"],data:[a.value,c.value,l.value]}]},options:{legend:{},title:{}}}):null;return r.a.createElement("div",{className:W.a.container},o?v:p)},K=a(4),P=a.n(K),Y=function(){var e=Object(n.useState)("0"),t=Object(y.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)([]),o=Object(y.a)(l,2),u=o[0],d=o[1],m=Object(n.useState)([]),f=Object(y.a)(m,2),p=f[0],v=f[1],h=Object(n.useState)([]),b=Object(y.a)(h,2),E=b[0],_=b[1];Object(n.useEffect)((function(){(function(){var e=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get("https://api.covid19india.org/data.json");case 2:t=e.sent,console.log(t.data),v(t.data.cases_time_series),d(t.data.cases_time_series),_(t.data.statewise);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var g=p.length?r.a.createElement(V.b,{data:{labels:p.map((function(e){var t=e.date;return new Date(t).toLocaleDateString("en-Us",{month:"short",day:"numeric"})})),datasets:[{data:p.map((function(e){return e.totalconfirmed})),label:"Infected",borderColor:"#3333ff",fill:!0}]},options:{scales:{yAxes:[{ticks:{callback:function(e){var t=[{divider:1e3,suffix:"k"}];return function(e){for(var a=0;a<t.length;a++)if(e>=t[a].divider)return(e/t[a].divider).toString()+t[a].suffix;return e}(e)}}}]}}}):null,D=function(e,t){c(t);var a=0!==e?new Date(new Date((new Date).setDate((new Date).getDate()-e))).toLocaleDateString("en-US",{month:"short",day:"numeric"}):null,n=u.filter((function(e){var t=e.date;return new Date(t)>new Date(a||null)}));v(n)},x=p.length?r.a.createElement(V.a,{data:{labels:p.map((function(e){var t=e.date;return new Date(t).toLocaleDateString("en-US",{month:"short",day:"numeric"})})),datasets:[{label:"Daily Cases",backgroundColor:"rgba(255,0,0,0.7)",data:p.map((function(e){return e.dailyconfirmed}))}]}}):null,w=r.a.createElement("table",{cellSpacing:"5px"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{className:P.a.left},"State/UT"),r.a.createElement("th",null,"Confirmed"),r.a.createElement("th",null,"Active"),r.a.createElement("th",null,"Recovered"),r.a.createElement("th",null,"Deceased"))),r.a.createElement("tbody",null,E.map((function(e,t){var a=e.state,n=e.confirmed,c=e.active,l=e.recovered,o=e.deaths;return"Total"!==a?r.a.createElement("tr",{key:t},r.a.createElement("td",{className:P.a.left},a),r.a.createElement("td",{className:P.a.right},n),r.a.createElement("td",{className:P.a.right},c),r.a.createElement("td",{className:P.a.right},l),r.a.createElement("td",{className:P.a.right},o)):null})))),k=r.a.createElement("div",null,E.map((function(e,t){var a=e.state,n=e.confirmed,c=e.active,l=e.recovered,o=e.deaths;return"Total"===a?r.a.createElement("div",{className:P.a.header},r.a.createElement("div",{className:M()(P.a.label,P.a.confirmed)},r.a.createElement("p",null,"Confirmed"),r.a.createElement("p",null,n)),r.a.createElement("div",{className:M()(P.a.label,P.a.active)},r.a.createElement("p",null,"Active"),r.a.createElement("p",null,c)),r.a.createElement("div",{className:M()(P.a.label,P.a.recovered)},r.a.createElement("p",null,"Recovered"),r.a.createElement("p",null,l)),r.a.createElement("div",{className:M()(P.a.label,P.a.deaths)},r.a.createElement("p",null,"Deaths"),r.a.createElement("p",null,o))):null})));return r.a.createElement("div",{className:P.a.container},g,x,r.a.createElement("div",{className:P.a.buttonsDiv},r.a.createElement("button",{className:M()(P.a.btn,"0"===a?P.a.active_button:""),onClick:function(){return D(0,"0")}},"Beginning"),r.a.createElement("button",{className:M()(P.a.btn,"1"===a?P.a.active_button:""),onClick:function(){return D(7,"1")}},"This Week"),r.a.createElement("button",{className:M()(P.a.btn,"2"===a?P.a.active_button:""),onClick:function(){return D(30,"2")}},"One Month")),k,r.a.createElement("div",{className:P.a.center},"State wise Cases"),w)},z=a(47),B=a.n(z),Z=a(83),q=a.n(Z),F=function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(s.a)(i.a.mark((function t(a){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a){t.next=6;break}return t.next=3,k();case 3:n=t.sent,t.next=9;break;case 6:return t.next=8,S(a);case 8:n=t.sent;case 9:e.setState({data:n,country:a});case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return r.a.createElement("div",{className:B.a.container},r.a.createElement("img",{className:B.a.image,src:q.a}),r.a.createElement(R,{data:t}),r.a.createElement(I,{handleCountryChange:this.handleCountryChange}),r.a.createElement(J,{data:t,country:a}),r.a.createElement(Y,null))}}]),a}(n.Component);l.a.render(r.a.createElement(F,null),document.getElementById("root"))},4:function(e,t,a){e.exports={container:"DailyGraph_container__3dbZc",center:"DailyGraph_center__9Tgpe",btn:"DailyGraph_btn__3KyFi",buttonsDiv:"DailyGraph_buttonsDiv__3huP4",left:"DailyGraph_left__6WWIa",right:"DailyGraph_right__3rhNm",active_button:"DailyGraph_active_button__1iivK",header:"DailyGraph_header__3TdbG",label:"DailyGraph_label__InSv7",confirmed:"DailyGraph_confirmed__2Vctw",active:"DailyGraph_active__ro-Iz",recovered:"DailyGraph_recovered__1MTiM",deaths:"DailyGraph_deaths__23JsT"}},47:function(e,t,a){e.exports={container:"App_container__2RhEu",image:"App_image__3h0dH"}},76:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__YmW-_"}},82:function(e,t,a){e.exports={container:"Chart_container__1kjAZ"}},83:function(e,t,a){e.exports=a.p+"static/media/covid-19-logo.017560a0.png"},88:function(e,t,a){e.exports=a(208)}},[[88,1,2]]]);
//# sourceMappingURL=main.53fa0b01.chunk.js.map