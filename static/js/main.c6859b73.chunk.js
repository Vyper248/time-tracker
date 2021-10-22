(this["webpackJsonptime-tracker"]=this["webpackJsonptime-tracker"]||[]).push([[0],{29:function(e,n,t){},30:function(e,n,t){},36:function(e,n,t){"use strict";t.r(n);var i,r,c,a=t(2),s=t.n(a),d=t(19),o=t.n(d),l=(t(29),t(24)),j=t(9),u=(t(30),t(20)),b=t(5),x=t(8),m=t(37),v=t(38),p=function(e){return e<10?"0"+e:e},O=function(e){var n=Object(v.a)({start:0,end:1e3*e});return"".concat(p(n.hours),":").concat(p(n.minutes),":").concat(p(n.seconds))},f=t(4),h=x.a.div(i||(i=Object(b.a)(["\n    display: flex;\n    width: 330px;\n    margin: auto;\n\n    & > div:first-child {\n        display: grid;\n        grid-template-columns: 1fr 50px 1fr;\n        border: 1px solid gray;\n        border-radius: 5px 0px 0px 5px;\n        width: 220px;\n        margin: 5px auto;\n        text-align: center;\n        margin-right: 0px;\n    }\n\n    & > div:last-child {\n        border: 1px solid gray;\n        border-left: none;\n        border-radius: 0px 5px 5px 0px;\n        margin: 5px auto;\n        margin-left: 0px;\n    }\n\n    & > div > div {\n        margin: 5px;\n        padding: 5px;\n    }\n\n"]))),g=function(e){var n=e.obj,t="HH:mm:ss",i=Object(u.a)(n.endTime,n.startTime),r=O(i);return Object(f.jsxs)(h,{children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{children:Object(m.a)(n.startTime,t)}),Object(f.jsx)("div",{children:"To"}),Object(f.jsx)("div",{children:Object(m.a)(n.endTime,t)})]}),Object(f.jsx)("div",{children:Object(f.jsx)("div",{children:r})})]})},T=x.a.div(r||(r=Object(b.a)(["\n    border: 1px solid gray;\n    border-radius: 5px;\n    display: inline-block;\n    padding: 5px;\n    margin: 5px;\n    width: 100px;\n    background-color: #EEE;\n\n    &:hover {\n        background-color: #CCC;\n        cursor: pointer;\n    }\n"]))),k=function(e){var n=e.value,t=e.onClick;return Object(f.jsx)(T,{onClick:t,children:n})},w=x.a.div(c||(c=Object(b.a)(["\n    border: 3px solid gray;\n    border-radius: 50%;\n    width: 150px;\n    height: 150px;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    margin: 5px;\n    transition: 0.5s;\n    ","\n\n    & > div:first-child {\n        font-weight: bold;\n    }\n"])),(function(e){return e.active?"border-color: green;":""})),S=function(e){var n=e.seconds,t=e.heading,i=e.active,r=void 0!==i&&i;return Object(f.jsxs)(w,{active:r,children:[Object(f.jsx)("div",{children:t}),Object(f.jsx)("div",{children:O(n)})]})};var C=function(){var e=Object(a.useState)(0),n=Object(j.a)(e,2),t=n[0],i=n[1],r=Object(a.useState)([]),c=Object(j.a)(r,2),s=c[0],d=c[1],o=Object(a.useState)(0),b=Object(j.a)(o,2),x=b[0],m=b[1],v=Object(a.useState)(0),p=Object(j.a)(v,2),O=p[0],h=p[1],T=Object(a.useState)(null),w=Object(j.a)(T,2),C=w[0],y=w[1];Object(a.useEffect)((function(){I()}),[]);var D=function(e,n,t){var i={startTime:e,times:n,totalTime:t};localStorage.setItem("time-tracker-state",JSON.stringify(i))},I=function(){var e=localStorage.getItem("time-tracker-state"),n=(e=null!==e?JSON.parse(e):{startTime:0,times:[],totalTime:0}).times.map((function(e){return{startTime:new Date(e.startTime),endTime:new Date(e.endTime)}})),t=0===e.startTime?0:new Date(e.startTime);d(n),i(t),m(e.totalTime),E(t)},E=function(e){if(0!==e){var n=setInterval((function(){var n=new Date,t=Object(u.a)(n,e);h(t)}),100);y(n)}},F=function(){i(0),clearInterval(C),y(null),h(0)};return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("h2",{children:"Time Tracker"}),Object(f.jsxs)("div",{children:[Object(f.jsx)(S,{seconds:x,heading:"Total Time"}),Object(f.jsx)(S,{seconds:O,heading:"Current Time",active:0!==t})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)(k,{value:"Start",onClick:function(){if(0===t){var e=new Date;i(e),D(e,s,x),E(e)}}}),Object(f.jsx)(k,{value:"Stop",onClick:function(){if(0!==t){var e=new Date,n={startTime:t,endTime:e},i=[].concat(Object(l.a)(s),[n]);d(i);var r=Object(u.a)(e,t),c=x+r;m(c),F(),D(0,i,c)}}}),Object(f.jsx)(k,{value:"Reset",onClick:function(){d([]),m(0),F(),D(0,[],0)}})]}),Object(f.jsx)("div",{children:s.map((function(e){return Object(f.jsx)(g,{obj:e},e.startTime)}))})]})},y=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,39)).then((function(n){var t=n.getCLS,i=n.getFID,r=n.getFCP,c=n.getLCP,a=n.getTTFB;t(e),i(e),r(e),c(e),a(e)}))};o.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(C,{})}),document.getElementById("root")),y()}},[[36,1,2]]]);
//# sourceMappingURL=main.c6859b73.chunk.js.map