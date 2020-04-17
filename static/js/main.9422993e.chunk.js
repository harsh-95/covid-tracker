(this["webpackJsonpcovid-tracker"]=this["webpackJsonpcovid-tracker"]||[]).push([[0],{13:function(e,t,a){e.exports={container:"Cards_container__27578",card:"Cards_card__1l8dY",infected:"Cards_infected__1uAlU",recovered:"Cards_recovered__Atqfz",deaths:"Cards_deaths__MNK8Y"}},208:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(73),o=a.n(c),u=a(4),s=a.n(u),i=a(7),l=a(74),d=a(75),f=a(86),m=a(85),p=a(225),v=a(230),h=a(226),b=a(227),E=a(13),g=a.n(E),x=a(17),y=a(229),_=a(228),C=a(16),k=a.n(C),w="https://covid19.mathdro.id/api/",j=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a,n,r,c,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get(w);case 3:return t=e.sent,a=t.data,n=a.confirmed,r=a.recovered,c=a.deaths,o=a.lastUpdate,e.abrupt("return",{confirmed:n,recovered:r,deaths:c,lastUpdate:o});case 12:e.prev=12,e.t0=e.catch(0);case 14:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get(w+"daily");case 3:return t=e.sent,a=t.data,e.abrupt("return",a.map((function(e){var t=e.confirmed,a=e.deaths,n=e.reportDate;return{confirmed:t.total,deaths:a.total,date:n}})));case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get(w+"countries");case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(i.a)(s.a.mark((function e(t){var a,n,r,c,o,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get(w+"countries/"+t);case 3:return a=e.sent,n=a.data,r=n.confirmed,c=n.recovered,o=n.deaths,u=n.lastUpdate,e.abrupt("return",{confirmed:r,recovered:c,deaths:o,lastUpdate:u});case 12:e.prev=12,e.t0=e.catch(0);case 14:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),N=a(76),U=a.n(N),A=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(x.a)(a,2),o=c[0],u=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u,e.next=3,D();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[u]),r.a.createElement(y.a,{className:U.a.formControl},r.a.createElement(_.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:""},"Global"),o.map((function(e,t){return r.a.createElement("option",{value:e,key:t},e)}))))},I=a(34),V=a.n(I),L=a(35),M=a.n(L),R=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=t.lastUpdate;return a?r.a.createElement("div",{className:g.a.container},r.a.createElement(p.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(p.a,{item:!0,component:v.a,xs:12,md:3,className:M()(g.a.card,g.a.infected)},r.a.createElement(h.a,null,r.a.createElement(b.a,{color:"textSecondary"},"Infected"),r.a.createElement(b.a,{variant:"h6"},r.a.createElement(V.a,{start:0,end:a.value,duration:1.5,separator:","})),r.a.createElement(b.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(b.a,{variant:"body2"},"Number of infected cases from COVID-19"))),r.a.createElement(p.a,{item:!0,component:v.a,xs:12,md:3,className:M()(g.a.card,g.a.recovered)},r.a.createElement(h.a,null,r.a.createElement(b.a,{color:"textSecondary"},"Recovered"),r.a.createElement(b.a,{variant:"h6"},r.a.createElement(V.a,{start:0,end:n.value,duration:1.5,separator:","})),r.a.createElement(b.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(b.a,{variant:"body2"},"Number of recovered cases from COVID-19"))),r.a.createElement(p.a,{item:!0,component:v.a,xs:12,md:3,className:M()(g.a.card,g.a.deaths)},r.a.createElement(h.a,null,r.a.createElement(b.a,{color:"textSecondary"},"Deaths"),r.a.createElement(b.a,{variant:"h6"},r.a.createElement(V.a,{start:0,end:c.value,duration:1.5,separator:","})),r.a.createElement(b.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(b.a,{variant:"body2"},"Number of deaths caused due to COVID-19"))))):null},Y=a(18),G=a(82),J=a.n(G),P=function(e){var t=e.data,a=t.confirmed,c=t.recovered,o=t.deaths,u=e.country,l=Object(n.useState)([]),d=Object(x.a)(l,2),f=d[0],m=d[1];Object(n.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=m,e.next=3,O();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var p=f.length?r.a.createElement(Y.b,{data:{labels:f.map((function(e){var t=e.date;return new Date(t).toLocaleDateString("en-US",{month:"short",day:"numeric"})})),datasets:[{data:f.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:f.map((function(e){return e.deaths})),label:"Deaths",borderColor:"#ff0000",backgroundColor:"rgba(255,0,0,0.5)",fill:!0}]},options:{scales:{yAxes:[{ticks:{callback:function(e){var t=[{divider:1e6,suffix:"M"},{divider:1e3,suffix:"k"}];return function(e){for(var a=0;a<t.length;a++)if(e>=t[a].divider)return(e/t[a].divider).toString()+t[a].suffix;return e}(e)}}}]}}}):null,v=a?r.a.createElement(Y.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0,0,255)","rgba(0,255,0,0.5)","rgba(255,0,0,0.5)"],data:[a.value,c.value,o.value]}]},options:{legend:{},title:{}}}):null;return r.a.createElement("div",{className:J.a.container},u?v:p)},Z=a(83),q=a.n(Z),z=function(){var e=Object(n.useState)([]),t=Object(x.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("https://api.covid19india.org/data.json");case 2:t=e.sent,console.log(t.data.cases_time_series),c(t.data.cases_time_series);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var o=a.length?r.a.createElement(Y.b,{data:{labels:a.map((function(e){var t=e.date;return new Date(t).toLocaleDateString("en-Us",{month:"short",day:"numeric"})})),datasets:[{data:a.map((function(e){return e.totalconfirmed})),label:"Infected",borderColor:"#3333ff",fill:!0}]},options:{scales:{yAxes:[{ticks:{callback:function(e){var t=[{divider:1e3,suffix:"k"}];return function(e){for(var a=0;a<t.length;a++)if(e>=t[a].divider)return(e/t[a].divider).toString()+t[a].suffix;return e}(e)}}}]}}}):null,u=a.length?r.a.createElement(Y.a,{data:{labels:a.map((function(e){var t=e.date;return new Date(t).toLocaleDateString("en-US",{month:"short",day:"numeric"})})),datasets:[{label:"Daily Cases",backgroundColor:"rgba(255,0,0,0.7)",data:a.map((function(e){return e.dailyconfirmed}))}]}}):null;return r.a.createElement("div",{className:q.a.container},o,u)},B=a(46),H=a.n(B),K=a(84),W=a.n(K),F=function(e){Object(f.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(i.a)(s.a.mark((function t(a){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a){t.next=6;break}return t.next=3,j();case 3:n=t.sent,t.next=9;break;case 6:return t.next=8,S(a);case 8:n=t.sent;case 9:e.setState({data:n,country:a});case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return r.a.createElement("div",{className:H.a.container},r.a.createElement("img",{className:H.a.image,src:W.a}),r.a.createElement(R,{data:t}),r.a.createElement(A,{handleCountryChange:this.handleCountryChange}),r.a.createElement(P,{data:t,country:a}),r.a.createElement(z,null))}}]),a}(n.Component);o.a.render(r.a.createElement(F,null),document.getElementById("root"))},46:function(e,t,a){e.exports={container:"App_container__2RhEu",image:"App_image__3h0dH"}},76:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__YmW-_"}},82:function(e,t,a){e.exports={container:"Chart_container__1kjAZ"}},83:function(e,t,a){e.exports={container:"DailyGraph_container__3dbZc"}},84:function(e,t,a){e.exports=a.p+"static/media/covid-19-logo.017560a0.png"},88:function(e,t,a){e.exports=a(208)}},[[88,1,2]]]);
//# sourceMappingURL=main.9422993e.chunk.js.map