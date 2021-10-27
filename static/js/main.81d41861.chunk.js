(this["webpackJsonptime-tracker"]=this["webpackJsonptime-tracker"]||[]).push([[0],{32:function(e,n,t){},33:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var i,r,c,a=t(3),o=t.n(a),s=t(21),d=t.n(s),j=(t(32),t(27)),l=t(5),u=(t(33),t(23)),b=t(40),x=t(22),v=t(42),O=t(41),m=function(e){return e<10?"0"+e:e},f=function(e){if("number"!==typeof e)return"00:00:00";var n=new Date(0),t=Object(b.a)(n,e),i=Object(x.a)(t,n,{roundingMethod:"floor"}),r=Object(v.a)({start:0,end:1e3*e});return"".concat(m(i),":").concat(m(r.minutes),":").concat(m(r.seconds))},p=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=0;return e.forEach((function(e){t+=Object(u.a)(e.endTime,e.startTime)})),n?t:f(t)},h=function(e){return Object(O.a)(e,"EEEE do")},g=function(e){var n={};return e.forEach((function(e){var t=h(e.startTime);void 0===n[t]&&(n[t]=[]),n[t].push(e)})),n},T=t(8),k=t(9),w=t(2),y=k.a.div(i||(i=Object(T.a)(["\n    display: flex;\n    width: 330px;\n    margin: auto;\n\n    & > div:first-child {\n        display: grid;\n        grid-template-columns: 1fr 30px 1fr;\n        border: 1px solid gray;\n        border-radius: 5px 0px 0px 5px;\n        width: 200px;\n        margin: 5px auto;\n        text-align: center;\n        margin-right: 0px;\n    }\n\n    & > div:last-child {\n        border: 1px solid gray;\n        border-left: none;\n        border-radius: 0px 5px 5px 0px;\n        margin: 5px auto;\n        margin-left: 0px;\n        width: 100px;\n    }\n\n    & > div > div {\n        margin: 5px;\n        padding-top: 5px;\n        padding-bottom: 5px;\n    }\n\n"]))),S=function(e){var n=e.obj,t="HH:mm:ss",i=Object(u.a)(n.endTime,n.startTime),r=f(i);return Object(w.jsxs)(y,{children:[Object(w.jsxs)("div",{children:[Object(w.jsx)("div",{children:Object(O.a)(n.startTime,t)}),Object(w.jsx)("div",{children:"To"}),Object(w.jsx)("div",{children:Object(O.a)(n.endTime,t)})]}),Object(w.jsx)("div",{children:Object(w.jsx)("div",{children:r})})]})},C=function(e){var n=e.times;if(0===n.length)return null;var t=g(n),i=Object.keys(t);return Object(w.jsx)("div",{children:i.map((function(e){var n=t[e],i=p(n);return Object(w.jsxs)("div",{children:[Object(w.jsx)("h3",{children:e}),n.map((function(e){return Object(w.jsx)(S,{obj:e},e.startTime)})),Object(w.jsxs)("div",{children:["Daily Total: ",i]})]},e)}))})},E=k.a.div(r||(r=Object(T.a)(["\n    border: 1px solid gray;\n    border-radius: 5px;\n    display: inline-block;\n    padding: 5px;\n    margin: 5px;\n    width: 100px;\n    background-color: #EEE;\n\n    &:hover {\n        background-color: #CCC;\n        cursor: pointer;\n    }\n"]))),D=function(e){var n=e.value,t=e.onClick;return Object(w.jsx)(E,{onClick:t,children:n})},I=k.a.div(c||(c=Object(T.a)(["\n    border: 3px solid gray;\n    border-radius: 50%;\n    width: 150px;\n    height: 150px;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    margin: 5px;\n    transition: 0.5s;\n    ","\n\n    & > div:first-child {\n        font-weight: bold;\n    }\n"])),(function(e){return e.active?"border-color: green;":""})),F=function(e){var n=e.seconds,t=e.heading,i=e.active,r=void 0!==i&&i;return Object(w.jsxs)(I,{active:r,children:[Object(w.jsx)("div",{children:t}),Object(w.jsx)("div",{children:f(n)})]})};var J=function(){var e=Object(a.useState)(0),n=Object(l.a)(e,2),t=n[0],i=n[1],r=Object(a.useState)([]),c=Object(l.a)(r,2),o=c[0],s=c[1],d=Object(a.useState)(0),b=Object(l.a)(d,2),x=b[0],v=b[1],O=Object(a.useState)(0),m=Object(l.a)(O,2),f=m[0],T=m[1],k=Object(a.useState)(0),y=Object(l.a)(k,2),S=y[0],E=y[1],I=Object(a.useState)(null),J=Object(l.a)(I,2),N=J[0],B=J[1];Object(a.useEffect)((function(){L()}),[]);var H=function(e,n,t){var i={startTime:e,times:n,totalTime:t};localStorage.setItem("time-tracker-state",JSON.stringify(i))},L=function(){var e=localStorage.getItem("time-tracker-state"),n=(e=null!==e?JSON.parse(e):{startTime:0,times:[],totalTime:0}).times.map((function(e){return{startTime:new Date(e.startTime),endTime:new Date(e.endTime)}})),t=0===e.startTime?0:new Date(e.startTime),r=p(n,!0);s(n),i(t),v(r),M(t),P(n)},M=function(e){if(0!==e){var n=setInterval((function(){var n=new Date,t=Object(u.a)(n,e);E(t)}),100);B(n)}},P=function(e){var n=g(e)[h(new Date)];if(void 0!==n){var t=p(n,!0);T(t)}},A=function(){i(0),clearInterval(N),B(null),E(0)};return Object(w.jsxs)("div",{className:"App",children:[Object(w.jsx)("h2",{children:"Time Tracker"}),Object(w.jsxs)("div",{children:[Object(w.jsx)(F,{seconds:x+S,heading:"Total Time"}),f===x?null:Object(w.jsx)(F,{seconds:f+S,heading:"Todays Time"}),Object(w.jsx)(F,{seconds:S,heading:"Current Time",active:0!==t})]}),Object(w.jsxs)("div",{children:[Object(w.jsx)(D,{value:"Start",onClick:function(){if(0===t){var e=new Date;i(e),H(e,o,x),M(e)}}}),Object(w.jsx)(D,{value:"Stop",onClick:function(){if(0!==t){var e=new Date,n={startTime:t,endTime:e},i=[].concat(Object(j.a)(o),[n]);s(i);var r=p(i,!0);v(r),A(),H(0,i,r),P(i)}}}),Object(w.jsx)(D,{value:"Reset",onClick:function(){s([]),v(0),A(),H(0,[],0)}})]}),Object(w.jsx)("div",{children:Object(w.jsx)(C,{times:o})})]})},N=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,43)).then((function(n){var t=n.getCLS,i=n.getFID,r=n.getFCP,c=n.getLCP,a=n.getTTFB;t(e),i(e),r(e),c(e),a(e)}))};d.a.render(Object(w.jsx)(o.a.StrictMode,{children:Object(w.jsx)(J,{})}),document.getElementById("root")),N()}},[[39,1,2]]]);
//# sourceMappingURL=main.81d41861.chunk.js.map