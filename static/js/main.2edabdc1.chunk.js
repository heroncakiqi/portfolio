(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{22:function(n,e,t){n.exports=t(34)},34:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(16),i=t.n(o),c=t(1),l=t(2),u=t(3);var s=function(n){var e=Object(r.useState)(""),t=Object(u.a)(e,2),a=t[0],o=t[1];return Object(r.useEffect)((function(){var e=setInterval((function(){var e=a.length;o("".concat(a+n[e]))}),50);return a.length===n.length&&clearInterval(e),function(){return clearInterval(e)}}),[a,n]),[a]};function m(){var n=Object(c.a)(["\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  overflow: hidden;\n  h1 {\n    font-weight: 100;\n    white-space: pre-line;\n    font-family: 'Roboto Mono', monospace;\n  }\n"]);return m=function(){return n},n}function f(){var n=Object(c.a)(["\n  animation: "," 0.5s infinite ;\n  color: orange;\n  position: absolute;\n"]);return f=function(){return n},n}function p(){var n=Object(c.a)(["\n0% {\n  opacity: 0\n}\n49% {\n  opacity: 0;\n}\n50% {\n  opacity: 1;\n}\n100% {\n  opacity: 1;\n}\n"]);return p=function(){return n},n}var d=Object(l.c)(p()),b=l.b.span(f(),d),g=l.b.header(m());var v=function(){var n=s("heron cakiqi \n full stack developer"),e=Object(u.a)(n,1)[0];return a.a.createElement(g,null,a.a.createElement("h1",null,e,a.a.createElement(b,null,"_")))},h=t(19),E=t(9),x=t.n(E);t(31);x.a.initializeApp({apiKey:"AIzaSyDHxs1faDfQ3GiH9IXdtUHXgRWqv9LHb9g",authDomain:"portfolio-c3e53.firebaseapp.com",databaseURL:"https://portfolio-c3e53.firebaseio.com",projectId:"portfolio-c3e53",storageBucket:"portfolio-c3e53.appspot.com",messagingSenderId:"827178433379",appId:"1:827178433379:web:19ce41dae9484beaba3156",measurementId:"G-LGYCC77T70"});var j=x.a.firestore();function y(){var n=Object(c.a)(["\n  header {\n    display: flex;\n    align-items: flex-start;\n    h3 {\n      margin: 0;\n      margin-right: 0.5rem;\n      a {\n        text-decoration: none\n      }\n    }\n  }\n  .tag {\n    padding: 5px 10px;\n    margin-left: 6px;\n    border-radius: 8px;\n    font-size: 0.7rem\n  }\n  .React {\n    background-color: #61DAFB;\n  }\n  .express {\n    background-color: #87C643;\n  }\n  .firebase {\n    background-color: #FFCB2B;\n  }\n  .Redux {\n    background-color: #764ABC;\n  }\n  .jQuery {\n    background-color: #0769AD;\n  }\n  p {\n    margin-top: 0.5rem;\n    margin-bottom: 1.5rem;\n    color: #807E9A;\n  }\n"]);return y=function(){return n},n}var O=l.b.div(y());var w=function(n){var e=n.item;return a.a.createElement(O,null,a.a.createElement("header",null,a.a.createElement("h3",null," ",a.a.createElement("a",{href:e.url,target:"_blank"},e.name)),e.technologies.map((function(n){return a.a.createElement("span",{className:"tag ".concat(n)},n)}))),a.a.createElement("p",null,e.description))};function k(){var n=Object(c.a)(["\n  margin: 0 10px;\n  @media (min-width: 1024px) {\n    magrgin: 0px;\n  }\n  h2 {\n    margin-bottom: 30px;\n    font-size: 1.7rem;\n  }\n  .projects-list {\n    display: flex;\n    flex-direction: column;\n  }\n"]);return k=function(){return n},n}var I=l.b.div(k());var B=function(){var n=Object(h.a)(j.collection("projects")),e=Object(u.a)(n,3),t=e[0],r=e[1],o=e[2];return a.a.createElement(I,null,a.a.createElement("h2",null,"Latest Projects"),a.a.createElement("div",{className:"projects-list"},o&&a.a.createElement("strong",null,"Error: ",JSON.stringify(o)),r&&a.a.createElement("span",null,"Loading..."),t&&t.map((function(n){return a.a.createElement(w,{item:n})}))))};var z=function(){return a.a.createElement("h2",null)};function A(){var n=Object(c.a)(["\n  font-family: 'Open Sans', sans-serif;\n  width: 100%;\n  max-width: 800px;\n  margin: 0 auto;\n"]);return A=function(){return n},n}var R=l.b.section(A());var S=function(){return a.a.createElement(R,null,a.a.createElement(B,null),a.a.createElement(z,null))};function C(){var n=Object(c.a)(["\n  @import url('https://fonts.googleapis.com/css?family=Open+Sans|Roboto+Mono&display=swap');\n  body {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    font-size: 16px;\n  }\n  a {\n    color: inherit; /* blue colors for links too */\n    text-decoration: inherit; /* no underline */\n  }\n"]);return C=function(){return n},n}var D=Object(l.a)(C());function L(){var n=Object(c.a)(["\n  background-color: #141414;\n  color: white;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n"]);return L=function(){return n},n}var F=l.b.div(L());var H=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(D,null),a.a.createElement(F,null,a.a.createElement(v,null),a.a.createElement(S,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.2edabdc1.chunk.js.map