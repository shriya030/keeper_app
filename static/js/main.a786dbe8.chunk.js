(this["webpackJsonpkeeper-app"]=this["webpackJsonpkeeper-app"]||[]).push([[0],{46:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),i=n(7),a=n.n(i),j=(n(46),n(38)),o=n(22),s=n(34),u=n.n(s),l=n(2);var b=function(){return Object(l.jsx)("header",{children:Object(l.jsxs)("h1",{children:[Object(l.jsx)(u.a,{}),"Keeper"]})})};var O=function(){var e=(new Date).getFullYear();return Object(l.jsx)("footer",{children:Object(l.jsxs)("p",{children:["Copyright \u24d2 ",e]})})},d=n(36),h=n.n(d);var f=function(e){return Object(l.jsxs)("div",{className:"note",children:[Object(l.jsx)("h1",{children:e.title}),Object(l.jsx)("p",{children:e.content}),Object(l.jsx)("button",{onClick:function(){e.onDelete(e.id)},children:Object(l.jsx)(h.a,{})})]})},x=n(26),p=n(33),v=n(37),g=n.n(v),m=n(71),C=n(72);var k=function(e){var t=Object(c.useState)(!1),n=Object(o.a)(t,2),r=n[0],i=n[1],a=Object(c.useState)({title:"",content:""}),j=Object(o.a)(a,2),s=j[0],u=j[1];function b(e){var t=e.target,n=t.name,c=t.value;u((function(e){return Object(p.a)(Object(p.a)({},e),{},Object(x.a)({},n,c))}))}return Object(l.jsx)("div",{children:Object(l.jsxs)("form",{className:"create-note",children:[r&&Object(l.jsx)("input",{name:"title",onChange:b,value:s.title,placeholder:"Title"}),Object(l.jsx)("textarea",{name:"content",onClick:function(){i(!0)},onChange:b,value:s.content,placeholder:"Take a note...",rows:r?3:1}),Object(l.jsx)(C.a,{in:r,children:Object(l.jsx)(m.a,{onClick:function(t){e.onAdd(s),u({title:"",content:""}),t.preventDefault()},children:Object(l.jsx)(g.a,{})})})]})})};var D=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1];function i(e){r((function(t){return t.filter((function(t,n){return n!==e}))}))}return Object(l.jsxs)("div",{children:[Object(l.jsx)(b,{}),Object(l.jsx)(k,{onAdd:function(e){r((function(t){return[].concat(Object(j.a)(t),[e])}))}}),n.map((function(e,t){return Object(l.jsx)(f,{id:t,title:e.title,content:e.content,onDelete:i},t)})),Object(l.jsx)(O,{})]})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,74)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),i(e),a(e)}))};a.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(D,{})}),document.getElementById("root")),F()}},[[54,1,2]]]);
//# sourceMappingURL=main.a786dbe8.chunk.js.map