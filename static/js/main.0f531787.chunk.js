(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{15:function(e,t,a){},37:function(e,t,a){e.exports=a(61)},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),i=a.n(c),l=(a(42),a(43),a(44),a(34)),o=a(7),s=a(6),u={toggled:!1,hidden:!1};var m=function(){return function(e,t){e({type:"SIDEBAR_TOGGLE_STATUS",payload:!t().sidebarStatuses.toggled})}},d={charsMenuItem:!0,locationsMenuItem:!1,episodesMenuItem:!1,byName:!0};var f=a(9),E=function(){return r.a.createElement("i",{className:"fas fa-bars fa-lg"})},p=function(){return r.a.createElement("i",{className:"fas fa-user-astronaut fa-2x"})},h=function(){return r.a.createElement("i",{className:"fas fa-rocket fa-2x"})},S=function(){return r.a.createElement("i",{className:"fas fa-book fa-lg fa-2x"})},v=function(e){var t=e.className;return r.a.createElement("i",{className:"fas fa-puzzle-piece fa-xl ".concat(t)})},g=function(){return r.a.createElement("i",{className:"fas fa-circle",style:{fontSize:"8px"}})},b=(a(15),a(49),function(e){var t=e.onClick,a=e.text;return r.a.createElement("ul",{className:"header-underline",onClick:t},r.a.createElement("li",{className:"pro-menu-item"},r.a.createElement("div",{className:"pro-inner-item"},r.a.createElement("span",{className:"pro-icon-wrapper"},r.a.createElement("span",{className:"pro-icon"},r.a.createElement(E,null))),r.a.createElement("span",{className:"pro-item-content headerText"},a))))}),T=(a(50),function(){return r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"https://thepuzzle.digital/",target:"_blank",rel:"noopener noreferrer",className:"bg-icon"},r.a.createElement(v,{className:"icon"}),r.a.createElement("h6",null,"Puzzle Challenge")))}),N=function(e){var t=e.text,a=e.icon,n=e.active,c=e.onClick;return r.a.createElement("div",{onClick:c},r.a.createElement(f.b,{icon:a,active:n,suffix:n?r.a.createElement(g,null):null},t))},y=(a(51),function(){return r.a.createElement("div",{className:"space"})});a(52);var _=Object(o.b)((function(e){return{hiddenStatus:e.sidebarStatuses.hidden,toggledStatus:e.sidebarStatuses.toggled,charFilterStatus:e.menuFilter.charsMenuItem,locationsFilterStatus:e.menuFilter.locationsMenuItem,episodesFilterStatus:e.menuFilter.episodesMenuItem}}),{changeToggledStatus:m,changeHiddenStatus:function(e){return function(t,a){var n=a().sidebarStatuses.hidden,r=a().sidebarStatuses.toggled;t(e<769?{type:"SIDEBAR_TOGGLE_STATUS",payload:!r}:{type:"SIDEBAR_HIDDEN_STATUS",payload:!n})}},activeSidebar:function(){return function(e,t){e({type:"SIDEBAR_HIDDEN_STATUS",payload:!1})}},charFilterActive:function(){return function(e,t){e({type:"CHARACTERS_STATUS_MENU"})}},locationsFilterActive:function(){return function(e,t){e({type:"LOCATIONS_STATUS_MENU"})}},episodesFilterActive:function(){return function(e,t){e({type:"EPISODES_STATUS_MENU"})}}})((function(e){var t=e.hiddenStatus,a=e.toggledStatus,c=e.activeSidebar,i=e.changeHiddenStatus,o=e.changeToggledStatus,s=e.charFilterActive,u=e.locationsFilterActive,m=e.episodesFilterActive,d=e.charFilterStatus,E=e.locationsFilterStatus,v=e.episodesFilterStatus,g=Object(n.useState)(window.innerWidth),_=Object(l.a)(g,2),A=_[0],O=_[1];Object(n.useEffect)((function(){window.addEventListener("resize",I)}));var I=function(){var e=window.innerWidth;return O(e),e<769?c():null};return r.a.createElement(f.c,{width:30,image:"https://wallpaperaccess.com/full/795172.jpg",collapsed:t,className:"flex",breakPoint:"md",toggled:a,onToggle:function(){return o()}},r.a.createElement(f.d,null,r.a.createElement(f.a,{iconShape:"circle"},r.a.createElement(b,{text:"Menu Filter",onClick:function(){return i(A)}}),r.a.createElement(y,null),r.a.createElement(N,{active:d,icon:r.a.createElement(p,null),onClick:function(){return s()},text:"Characters"}),r.a.createElement(N,{active:E,icon:r.a.createElement(h,null),onClick:function(){return u()},text:"Locations"}),r.a.createElement(N,{active:v,icon:r.a.createElement(S,null),onClick:function(){return m()},text:"Episodes"}))),r.a.createElement(f.e,null,r.a.createElement(T,null)))})),A=(a(53),function(e){var t=e.name,a=e.image;return r.a.createElement("div",{className:"item-data"},r.a.createElement("img",{src:a,className:"image",alt:"pic-from-api"}),r.a.createElement("div",{className:"item-text"},r.a.createElement("h4",{className:"text-h4"},t)))}),O=(a(54),function(e){var t=e.onClick;return r.a.createElement("div",{className:"button-container",onClick:t},r.a.createElement("div",{className:"wrapp-menu-icon"},r.a.createElement(E,null)))}),I=a(26),C=a(27),F=a(35),k=a(36),w=(a(55),a(56),function(e){var t=e.onClick;return r.a.createElement("label",{className:"switch"},r.a.createElement("input",{type:"checkbox",id:"togBtn"}),r.a.createElement("div",{className:"slider round",onClick:t}))}),M=function(e){Object(k.a)(a,e);var t=Object(F.a)(a);function a(){return Object(I.a)(this,a),t.apply(this,arguments)}return Object(C.a)(a,[{key:"stillOnFocus",value:function(){var e=document.getElementById("searcher");null===e||void 0===e||e.focus()}},{key:"render",value:function(){var e=this.props,t=e.changeFilter,a=e.filterType,n=e.byNameOrType,c=e.charFilter,i=e.locationFilter,l=e.entitie;return n=a?"name":"type",l=c?"characters":i?"locations":"episodes",r.a.createElement("label",{id:"searcher",className:"input-container"},r.a.createElement("div",{className:"shadow"}),r.a.createElement("div",{className:"center"},r.a.createElement("input",{id:"intext",type:"text",className:"input",placeholder:"search ".concat(l," by ").concat(n,"...")}),r.a.createElement("div",{className:"align",onClick:this.stillOnFocus},r.a.createElement(w,{onClick:function(){return t()}}))),r.a.createElement("div",{className:"sticks"}))}}]),a}(r.a.Component);var j=Object(o.b)((function(e){return{filterType:e.menuFilter.byName,charFilter:e.menuFilter.charsMenuItem,locationFilter:e.menuFilter.locationsMenuItem}}),{changeFilter:function(){return function(e,t){e({type:"SWITCH_FILTER",payload:!t().menuFilter.byName})}}})(M),D=(a(57),a(28)),U=a.n(D);var x=Object(o.b)((function(e){return{chars:e.characters}}),{changeToggledStatus:m})((function(e){var t=e.changeToggledStatus,a=e.chars;console.log(a);var n=a.data.map((function(e){return r.a.createElement(A,{name:e.name,image:e.image})}));return r.a.createElement("div",{className:"home"},r.a.createElement("div",{className:"home-content"},r.a.createElement(O,{onClick:function(){return t()}}),r.a.createElement(U.a,{className:"home-body"},r.a.createElement("div",{className:"searcher-grid"},r.a.createElement(j,null)),n)))}));var R=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(_,null),r.a.createElement(x,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var G=a(8),B=a(29),L=a(30),H=a(18);function z(){var e=Object(L.a)(["\n    query searchCharactersByName($char: String) {\n      characters(page: 1, filter: { name: $char }) {\n        info {\n          count\n          pages\n        }\n        results {\n          name\n          species\n          type\n          gender\n          image\n        }\n      }\n    }\n  "]);return z=function(){return e},e}var W={fetching:!1,info:{},data:[],error:""},P=new H.a({uri:"https://rickandmortyapi.com/graphql"});var q=Object(G.c)({sidebarStatuses:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIDEBAR_TOGGLE_STATUS":return Object(s.a)({},e,{toggled:t.payload});case"SIDEBAR_HIDDEN_STATUS":return Object(s.a)({},e,{hidden:t.payload});default:return e}},characters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_DATA":return Object(s.a)({},e,{fetching:!0});case"GET_DATA_SUCCESS":return Object(s.a)({},e,{fetching:!1,data:t.payload.characters.results,info:t.payload.info});case"GET_DATA_ERROR":return Object(s.a)({},e,{fetching:!1,error:t.payload});default:return e}},menuFilter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHARACTERS_STATUS_MENU":return Object(s.a)({},e,{charsMenuItem:!0,locationsMenuItem:!1,episodesMenuItem:!1});case"LOCATIONS_STATUS_MENU":return Object(s.a)({},e,{charsMenuItem:!1,locationsMenuItem:!0,episodesMenuItem:!1});case"EPISODES_STATUS_MENU":return Object(s.a)({},e,{charsMenuItem:!1,locationsMenuItem:!1,episodesMenuItem:!0});case"SWITCH_FILTER":return Object(s.a)({},e,{byName:t.payload});default:return e}}}),$=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||G.d;var J=function(){var e,t=Object(G.e)(q,$(Object(G.a)(B.a)));return(e="morty",function(t,a){var n=Object(H.b)(z()),r={char:e};return t({type:"GET_DATA"}),P.query({query:n,variables:r}).then((function(e){t({type:"GET_DATA_SUCCESS",payload:e.data})})).catch((function(e){t({type:"GET_DATA_ERROR",payload:e.error.errors.message}),console.log(e)}))})(t.dispatch,t.getState),t}(),X=function(){return r.a.createElement(o.a,{store:J},r.a.createElement(R,null))};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.0f531787.chunk.js.map