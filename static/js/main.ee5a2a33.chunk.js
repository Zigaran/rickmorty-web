(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],[,,,,,,,,,,,function(e,t,a){},,,,,,,function(e,t,a){e.exports=a(38)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(4),l=a.n(r),o=(a(23),a(24),a(25),a(3)),i=a(8),s={toggled:!1,hidden:!1};var u=a(1),m=(a(31),function(){return c.a.createElement("i",{className:"fas fa-bars fa-lg"})}),d=function(){return c.a.createElement("i",{className:"fas fa-user-astronaut fa-2x"})},E=function(){return c.a.createElement("i",{className:"fas fa-map-marker-alt fa-2x"})},f=function(){return c.a.createElement("i",{className:"fas fa-book fa-lg fa-2x"})},p=function(e){var t=e.className;return c.a.createElement("i",{className:"fas fa-puzzle-piece fa-xl ".concat(t)})},h=(a(11),a(32),function(e){var t=e.onClick,a=e.text;return c.a.createElement("ul",{className:"header-underline",onClick:t},c.a.createElement("li",{className:"pro-menu-item"},c.a.createElement("div",{className:"pro-inner-item"},c.a.createElement("span",{className:"pro-icon-wrapper"},c.a.createElement("span",{className:"pro-icon"},c.a.createElement(m,null))),c.a.createElement("span",{className:"pro-item-content headerText"},a))))}),g=(a(33),function(){return c.a.createElement("div",{className:"container"},c.a.createElement("a",{href:"https://thepuzzle.digital/",target:"_blank",rel:"noopener noreferrer",className:"bg-icon"},c.a.createElement(p,{className:"icon"}),c.a.createElement("h6",null,"Puzzle Challenge")))}),v=(a(34),function(){return c.a.createElement("div",{className:"space"})});a(35);var S=Object(o.b)((function(e){return{hiddenStatus:e.sidebarStatuses.hidden,toggledStatus:e.sidebarStatuses.toggled}}),{changeHiddenStatus:function(e){return function(t,a){var n=a().sidebarStatuses.hidden,c=a().sidebarStatuses.toggled;t(e<769?{type:"SIDEBAR_TOGGLE_STATUS",payload:!c}:{type:"SIDEBAR_HIDDEN_STATUS",payload:!n})}}})((function(e){var t=e.hiddenStatus,a=e.toggledStatus,n=e.changeHiddenStatus,r=window.innerWidth;return c.a.createElement(u.c,{width:30,image:"https://wallpaperaccess.com/full/795172.jpg",collapsed:t,className:"flex",breakPoint:"md",toggled:a},c.a.createElement(u.d,null,c.a.createElement(u.a,{iconShape:"circle"},c.a.createElement(h,{text:"Menu Filter",onClick:function(){return n(r)}}),c.a.createElement(v,null),c.a.createElement(u.b,{icon:c.a.createElement(d,null)},"Characters"),c.a.createElement(u.b,{icon:c.a.createElement(E,null)},"Locations"),c.a.createElement(u.b,{icon:c.a.createElement(f,null)},"Episodes"))),c.a.createElement(u.e,null,c.a.createElement(g,null)))})),b=(a(36),function(e){var t=e.onClick;return c.a.createElement("div",{className:"button-container",onClick:t},c.a.createElement(m,null))}),N=a(13),w=a(14),O=a(16),k=a(17),T=(a(37),function(e){Object(k.a)(a,e);var t=Object(O.a)(a);function a(){return Object(N.a)(this,a),t.apply(this,arguments)}return Object(w.a)(a,[{key:"componentDidMount",value:function(){var e;null===(e=document.getElementById("searcher"))||void 0===e||e.addEventListener("click",(function(e){e.stopPropagation(),e.preventDefault()}))}},{key:"render",value:function(){return c.a.createElement("label",{className:"input-container closed"},c.a.createElement("div",{className:"shadow"}),c.a.createElement("div",{className:"center"},c.a.createElement("input",{type:"text",className:"input",placeholder:"Search characters/locations"})),c.a.createElement("div",{className:"sticks",id:"searcher"}))}}]),a}(c.a.Component));var _=Object(o.b)((function(e){return{}}),{changeToggledStatus:function(){return function(e,t){e({type:"SIDEBAR_TOGGLE_STATUS",payload:!t().sidebarStatuses.toggled})}}})((function(e){var t=e.changeToggledStatus;return c.a.createElement("div",{className:"home"},c.a.createElement(S,null),c.a.createElement("div",{className:"home-content"},c.a.createElement(b,{onClick:function(){return t()}}),c.a.createElement(T,null)))}));var y=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(_,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D=a(2),j=a(15),A=Object(D.c)({sidebarStatuses:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIDEBAR_TOGGLE_STATUS":return Object(i.a)({},e,{toggled:t.payload});case"SIDEBAR_HIDDEN_STATUS":return Object(i.a)({},e,{hidden:t.payload});default:return e}}}),x=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||D.d;var C=Object(D.e)(A,x(Object(D.a)(j.a))),I=function(){return c.a.createElement(o.a,{store:C},c.a.createElement(y,null))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[18,1,2]]]);
//# sourceMappingURL=main.ee5a2a33.chunk.js.map