(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(7),r=n.n(c),i=n(2),s=n(9),o=n(0),u=function(e){var t=e.setCategories,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],u=c[1];return Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r.trim().length>2&&(t((function(e){return[r].concat(Object(s.a)(e))})),u(""))},children:[Object(o.jsx)("h2",{children:"Add Category"}),Object(o.jsx)("input",{type:"text",value:r,onChange:function(e){u(e.target.value)}})]})},j=n(10),d=n(6),l=n.n(d),b=n(8),f=function(){var e=Object(b.a)(l.a.mark((function e(t){var n,a,c,r,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=oVGH3ZuElFIwOYe1oYix7tOVCf73ZJB8"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,r=c.data,i=r.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(e){var t=e.title,n=e.url;return console.log(t,n),Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"card animate__animated animate__bounce",children:[Object(o.jsx)("img",{src:n,alt:t}),Object(o.jsxs)("p",{children:[" ",t," "]})]})})},O=function(e){var t=e.category,n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(t,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){f(e).then((function(e){setTimeout((function(){r({data:e,loading:!1})}),3e3)}))}),[e]),c}(t),c=n.data,r=n.loading;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h3",{className:"animate__animated animate__backInDown",children:t}),r&&Object(o.jsx)("p",{className:"animate__animated animate__flash",children:"Loading..."}),Object(o.jsx)("div",{className:"card-grid",children:c.map((function(e){return Object(o.jsx)(m,Object(j.a)({},e),e.id)}))})]})},p=function(){var e=Object(a.useState)(["Dragon Ball"]),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(u,{setCategories:c}),Object(o.jsx)("hr",{}),Object(o.jsx)("ol",{children:n.map((function(e){return Object(o.jsx)(O,{category:e},e)}))})]})};n(17);r.a.render(Object(o.jsx)(p,{setCategories:!0}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.75b8dfe9.chunk.js.map