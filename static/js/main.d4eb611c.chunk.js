(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,o){},5:function(e,t,o){"use strict";o.r(t);var r=o(2),i=o(1),n=o(4),c=o.n(n),a=(o(10),o(0)),s=function(){var e=Object(i.useState)("pomodoro"),t=Object(r.a)(e,2),o=t[0],n=t[1];switch(o){case"pomodoro":return Object(a.jsx)(d,{setState:n});case"shortBreak":return Object(a.jsx)(u,{setState:n});case"longBreak":return Object(a.jsx)(l,{setState:n})}},d=function(e){var t=Object(i.useState)(1500),o=Object(r.a)(t,2),n=o[0],c=o[1],s=Object(i.useState)(!1),d=Object(r.a)(s,2),u=d[0],l=d[1];document.title=j(n)+" - Time to work!",document.getElementById("favicon").href="Pomodoro-Timer/pomodoro.ico",Object(i.useEffect)((function(){if(u){if(!n)return void e.setState("shortBreak");var t=setInterval((function(){c(n-1)}),1e3);return function(){return clearInterval(t)}}c(1500)}));var b=Object(i.useState)(!1),m=Object(r.a)(b,2),f=m[0],O=m[1];return Object(a.jsxs)("div",{id:"container",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{id:"pomodoro",class:"target",children:"Pomodoro"}),Object(a.jsx)("button",{id:"sBreak",onClick:function(){u?window.confirm("Sei sicuro di voler cambiare mentre il timer \xe8 ancora in funzione?")&&e.setState("shortBreak"):e.setState("shortBreak")},children:"Short Break"}),Object(a.jsx)("button",{id:"lBreak",onClick:function(){u?window.confirm("Sei sicuro di voler cambiare mentre il timer \xe8 ancora in funzione?")&&e.setState("longBreak"):e.setState("longBreak")},children:"Long Break"})]}),Object(a.jsx)("div",{id:"timer",children:j(n)}),Object(a.jsxs)("div",{id:"buttons",children:[Object(a.jsx)("button",{id:"start",onClick:function(){l(!0),O(!0)},children:"START"}),Object(a.jsx)("button",{id:"restart",style:{display:f?"inline":"none"},onClick:function(){window.confirm("Sei sicuro di voler fermare il timer?")&&(l(!1),O(!1))},children:Object(a.jsx)("img",{id:"imgButton",src:"Pomodoro-Timer/restart.png"})})]}),Object(a.jsx)("p",{children:"Time to work!"})]})},u=function(e){var t=Object(i.useState)(360),o=Object(r.a)(t,2),n=o[0],c=o[1],s=Object(i.useState)(!1),d=Object(r.a)(s,2),u=d[0],l=d[1];document.title=j(n)+" - Time for a break!",document.getElementById("favicon").href="Pomodoro-Timer/shortBreak.ico",Object(i.useEffect)((function(){if(u){if(!n)return void e.setState("pomodoro");var t=setInterval((function(){c(n-1)}),1e3);return function(){return clearInterval(t)}}c(360)}));var b=Object(i.useState)(!1),m=Object(r.a)(b,2),f=m[0],O=m[1];return Object(a.jsxs)("div",{id:"container",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{id:"pomodoro",onClick:function(){u?window.confirm("Sei sicuro di voler cambiare mentre il timer \xe8 ancora in funzione?")&&e.setState("pomodoro"):e.setState("pomodoro")},children:"Pomodoro"}),Object(a.jsx)("button",{id:"sBreak",class:"target",children:"Short Break"}),Object(a.jsx)("button",{id:"lBreak",onClick:function(){u?window.confirm("Sei sicuro di voler cambiare mentre il timer \xe8 ancora in funzione?")&&e.setState("longBreak"):e.setState("longBreak")},children:"Long Break"})]}),Object(a.jsx)("div",{id:"timer",children:j(n)}),Object(a.jsxs)("div",{id:"buttons",children:[Object(a.jsx)("button",{id:"start",onClick:function(){l(!0),O(!0)},children:"START"}),Object(a.jsx)("button",{id:"restart",style:{display:f?"inline":"none"},onClick:function(){window.confirm("Sei sicuro di voler fermare il timer?")&&(l(!1),e.setState("pomodoro"))},children:Object(a.jsx)("img",{id:"imgButton",src:"Pomodoro-Timer/restart.png"})})]}),Object(a.jsx)("p",{children:"Time for a break!"})]})},l=function(e){var t=Object(i.useState)(600),o=Object(r.a)(t,2),n=o[0],c=o[1],s=Object(i.useState)(!1),d=Object(r.a)(s,2),u=d[0],l=d[1];document.title=j(n)+" - Time for a break!",document.getElementById("favicon").href="Pomodoro-Timer/longBreak.ico",Object(i.useEffect)((function(){if(u){if(!n)return void e.setState("pomodoro");var t=setInterval((function(){c(n-1)}),1e3);return function(){return clearInterval(t)}}c(600)}));var b=Object(i.useState)(!1),m=Object(r.a)(b,2),f=m[0],O=m[1];return Object(a.jsxs)("div",{id:"container",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{id:"pomodoro",onClick:function(){u?window.confirm("Sei sicuro di voler cambiare mentre il timer \xe8 ancora in funzione?")&&e.setState("pomodoro"):e.setState("pomodoro")},children:"Pomodoro"}),Object(a.jsx)("button",{id:"sBreak",onClick:function(){u?window.confirm("Sei sicuro di voler cambiare mentre il timer \xe8 ancora in funzione?")&&e.setState("shortBreak"):e.setState("shortBreak")},children:"Short Break"}),Object(a.jsx)("button",{id:"lBreak",class:"target",children:"Long Break"})]}),Object(a.jsx)("div",{id:"timer",children:j(n)}),Object(a.jsxs)("div",{id:"buttons",children:[Object(a.jsx)("button",{id:"start",onClick:function(){l(!0),O(!0)},children:"START"}),Object(a.jsx)("button",{id:"restart",style:{display:f?"inline":"none"},onClick:function(){window.confirm("Sei sicuro di voler fermare il timer?")&&(l(!1),e.setState("pomodoro"))},children:Object(a.jsx)("img",{id:"imgButton",src:"Pomodoro-Timer/restart.png"})})]}),Object(a.jsx)("p",{children:"Time for a break!"})]})},j=function(e){var t=Math.floor(e/60),o=e-60*t;return t=t<10?"0".concat(t):t,o=o<10?"0".concat(o):o,"".concat(t,":").concat(o)};c.a.render(Object(a.jsx)(s,{}),document.getElementById("container"))}},[[5,1,2]]]);
//# sourceMappingURL=main.d4eb611c.chunk.js.map