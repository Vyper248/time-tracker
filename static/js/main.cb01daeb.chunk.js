(this["webpackJsonptime-tracker"]=this["webpackJsonptime-tracker"]||[]).push([[0],{32:function(e,t,n){},33:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var i,r,c,a=n(3),o=n.n(a),s=n(21),d=n.n(s),j=(n(32),n(27)),l=n(9),u=(n(33),n(23)),b=n(41),x=n(40),v=n(22),m=n(42),O=function(e){return e<10?"0"+e:e},p=function(e){if("number"!==typeof e)return"00:00:00";var t=new Date(0),n=Object(x.a)(t,e),i=Object(v.a)(n,t,{roundingMethod:"floor"}),r=Object(m.a)({start:0,end:1e3*e});return"".concat(O(i),":").concat(O(r.minutes),":").concat(O(r.seconds))},f=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=0;return e.forEach((function(e){n+=Object(u.a)(e.endTime,e.startTime)})),t?n:p(n)},h=n(7),g=n(8),T=n(2),k=g.a.div(i||(i=Object(h.a)(["\n    display: flex;\n    width: 330px;\n    margin: auto;\n\n    & > div:first-child {\n        display: grid;\n        grid-template-columns: 1fr 30px 1fr;\n        border: 1px solid gray;\n        border-radius: 5px 0px 0px 5px;\n        width: 200px;\n        margin: 5px auto;\n        text-align: center;\n        margin-right: 0px;\n    }\n\n    & > div:last-child {\n        border: 1px solid gray;\n        border-left: none;\n        border-radius: 0px 5px 5px 0px;\n        margin: 5px auto;\n        margin-left: 0px;\n        width: 100px;\n    }\n\n    & > div > div {\n        margin: 5px;\n        padding-top: 5px;\n        padding-bottom: 5px;\n    }\n\n"]))),w=function(e){var t=e.obj,n="HH:mm:ss",i=Object(u.a)(t.endTime,t.startTime),r=p(i);return Object(T.jsxs)(k,{children:[Object(T.jsxs)("div",{children:[Object(T.jsx)("div",{children:Object(b.a)(t.startTime,n)}),Object(T.jsx)("div",{children:"To"}),Object(T.jsx)("div",{children:Object(b.a)(t.endTime,n)})]}),Object(T.jsx)("div",{children:Object(T.jsx)("div",{children:r})})]})},y=function(e){var t=e.times;if(0===t.length)return null;var n={};t.forEach((function(e){var t,i=(t=e.startTime,Object(b.a)(t,"EEEE do"));void 0===n[i]&&(n[i]=[]),n[i].push(e)}));var i=Object.keys(n);return Object(T.jsx)("div",{children:i.map((function(e){var t=n[e],i=f(t);return Object(T.jsxs)("div",{children:[Object(T.jsx)("h3",{children:e}),t.map((function(e){return Object(T.jsx)(w,{obj:e},e.startTime)})),Object(T.jsxs)("div",{children:["Daily Total: ",i]})]},e)}))})},S=g.a.div(r||(r=Object(h.a)(["\n    border: 1px solid gray;\n    border-radius: 5px;\n    display: inline-block;\n    padding: 5px;\n    margin: 5px;\n    width: 100px;\n    background-color: #EEE;\n\n    &:hover {\n        background-color: #CCC;\n        cursor: pointer;\n    }\n"]))),C=function(e){var t=e.value,n=e.onClick;return Object(T.jsx)(S,{onClick:n,children:t})},E=g.a.div(c||(c=Object(h.a)(["\n    border: 3px solid gray;\n    border-radius: 50%;\n    width: 150px;\n    height: 150px;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    margin: 5px;\n    transition: 0.5s;\n    ","\n\n    & > div:first-child {\n        font-weight: bold;\n    }\n"])),(function(e){return e.active?"border-color: green;":""})),D=function(e){var t=e.seconds,n=e.heading,i=e.active,r=void 0!==i&&i;return Object(T.jsxs)(E,{active:r,children:[Object(T.jsx)("div",{children:n}),Object(T.jsx)("div",{children:p(t)})]})};var I=function(){var e=Object(a.useState)(0),t=Object(l.a)(e,2),n=t[0],i=t[1],r=Object(a.useState)([]),c=Object(l.a)(r,2),o=c[0],s=c[1],d=Object(a.useState)(0),b=Object(l.a)(d,2),x=b[0],v=b[1],m=Object(a.useState)(0),O=Object(l.a)(m,2),p=O[0],h=O[1],g=Object(a.useState)(null),k=Object(l.a)(g,2),w=k[0],S=k[1];Object(a.useEffect)((function(){I()}),[]);var E=function(e,t,n){var i={startTime:e,times:t,totalTime:n};localStorage.setItem("time-tracker-state",JSON.stringify(i))},I=function(){var e=localStorage.getItem("time-tracker-state"),t=(e=null!==e?JSON.parse(e):{startTime:0,times:[],totalTime:0}).times.map((function(e){return{startTime:new Date(e.startTime),endTime:new Date(e.endTime)}})),n=0===e.startTime?0:new Date(e.startTime),r=f(t,!0);s(t),i(n),v(r),F(n)},F=function(e){if(0!==e){var t=setInterval((function(){var t=new Date,n=Object(u.a)(t,e);h(n)}),100);S(t)}},J=function(){i(0),clearInterval(w),S(null),h(0)};return Object(T.jsxs)("div",{className:"App",children:[Object(T.jsx)("h2",{children:"Time Tracker"}),Object(T.jsxs)("div",{children:[Object(T.jsx)(D,{seconds:x+p,heading:"Total Time"}),Object(T.jsx)(D,{seconds:p,heading:"Current Time",active:0!==n})]}),Object(T.jsxs)("div",{children:[Object(T.jsx)(C,{value:"Start",onClick:function(){if(0===n){var e=new Date;i(e),E(e,o,x),F(e)}}}),Object(T.jsx)(C,{value:"Stop",onClick:function(){if(0!==n){var e=new Date,t={startTime:n,endTime:e},i=[].concat(Object(j.a)(o),[t]);s(i);var r=f(i,!0);v(r),J(),E(0,i,r)}}}),Object(T.jsx)(C,{value:"Reset",onClick:function(){s([]),v(0),J(),E(0,[],0)}})]}),Object(T.jsx)("div",{children:Object(T.jsx)(y,{times:o})})]})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),i(e),r(e),c(e),a(e)}))};d.a.render(Object(T.jsx)(o.a.StrictMode,{children:Object(T.jsx)(I,{})}),document.getElementById("root")),F()}},[[39,1,2]]]);
//# sourceMappingURL=main.cb01daeb.chunk.js.map