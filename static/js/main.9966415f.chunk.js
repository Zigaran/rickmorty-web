(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{19:function(e,t,a){},20:function(e,t,a){},47:function(e,t,a){e.exports=a(85)},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},77:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),l=a.n(c),i=(a(52),a(53),a(54),a(6));a(19);var s=Object(i.b)((function(e){return{actualObject:e.modalStatus.data}}))((function(e){var t=e.actualObject,a=t.name,n=t.image,c=t.species,l=t.gender,i=t.type;return r.a.createElement("div",{className:"modal-container"},r.a.createElement("div",{className:"modal-image-container"},r.a.createElement("img",{className:"modal-image",src:n,alt:"from-api"})),r.a.createElement("div",{className:"modal-text"},r.a.createElement("h2",{className:"modal-name-text"},a)),r.a.createElement("div",{className:"data-cont"},r.a.createElement("div",{className:"centered-data-cont"},r.a.createElement("div",{className:"modal-text margin-bottom-phone pad-left"},r.a.createElement("h2",{className:"modal-title"},"Type"),r.a.createElement("h2",{className:"center-text type"},i||"unknown")),r.a.createElement("div",{className:"modal-text margin-bottom-slighty pad-left"},r.a.createElement("h2",{className:"modal-title"},"Gender"),r.a.createElement("h2",{className:"center-text genre"},l||"unknown")),r.a.createElement("div",{className:"modal-text pad-left"},r.a.createElement("h2",{className:"modal-title"},"Species"),r.a.createElement("h2",{className:"center-text species"},c||"unknown")))))})),o=a(44),u=a(5),m={toggled:!1,hidden:!1};var d=function(){return function(e,t){e({type:"SIDEBAR_TOGGLE_STATUS",payload:!t().sidebarStatuses.toggled})}},p={charsMenuItem:!0,locationsMenuItem:!1,episodesMenuItem:!1,byName:!0};var E=a(9),f=function(){return r.a.createElement("i",{className:"fas fa-bars fa-lg"})},h=function(){return r.a.createElement("i",{className:"fas fa-user-astronaut fa-2x"})},v=function(){return r.a.createElement("i",{className:"fas fa-rocket fa-2x"})},g=function(){return r.a.createElement("i",{className:"fas fa-book fa-lg fa-2x"})},N=function(e){var t=e.className;return r.a.createElement("i",{className:"fas fa-puzzle-piece fa-xl ".concat(t)})},S=function(){return r.a.createElement("i",{className:"fas fa-circle",style:{fontSize:"8px"}})},y=(a(20),a(59),function(e){var t=e.onClick,a=e.text;return r.a.createElement("ul",{className:"header-underline",onClick:t},r.a.createElement("li",{className:"pro-menu-item"},r.a.createElement("div",{className:"pro-inner-item"},r.a.createElement("span",{className:"pro-icon-wrapper"},r.a.createElement("span",{className:"pro-icon"},r.a.createElement(f,null))),r.a.createElement("span",{className:"pro-item-content headerText"},a))))}),b=(a(60),function(){return r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"https://thepuzzle.digital/",target:"_blank",rel:"noopener noreferrer",className:"bg-icon"},r.a.createElement(N,{className:"icon"}),r.a.createElement("h6",null,"Puzzle Challenge")))}),T=function(e){var t=e.text,a=e.icon,n=e.active,c=e.onClick;return r.a.createElement("div",{onClick:c},r.a.createElement(E.b,{icon:a,active:n,suffix:n?r.a.createElement(S,null):null},t))},O=(a(61),function(){return r.a.createElement("div",{className:"space"})});a(62);var A=Object(i.b)((function(e){return{hiddenStatus:e.sidebarStatuses.hidden,toggledStatus:e.sidebarStatuses.toggled,charFilterStatus:e.menuFilter.charsMenuItem,locationsFilterStatus:e.menuFilter.locationsMenuItem,episodesFilterStatus:e.menuFilter.episodesMenuItem}}),{changeToggledStatus:d,changeHiddenStatus:function(e){return function(t,a){var n=a().sidebarStatuses.hidden,r=a().sidebarStatuses.toggled;t(e<769?{type:"SIDEBAR_TOGGLE_STATUS",payload:!r}:{type:"SIDEBAR_HIDDEN_STATUS",payload:!n})}},activeSidebar:function(){return function(e,t){e({type:"SIDEBAR_HIDDEN_STATUS",payload:!1})}},charFilterActive:function(){return function(e,t){e({type:"CHARACTERS_STATUS_MENU"})}},locationsFilterActive:function(){return function(e,t){e({type:"LOCATIONS_STATUS_MENU"})}},episodesFilterActive:function(){return function(e,t){e({type:"EPISODES_STATUS_MENU"})}}})((function(e){var t=e.hiddenStatus,a=e.toggledStatus,c=e.activeSidebar,l=e.changeHiddenStatus,i=e.changeToggledStatus,s=e.charFilterActive,u=e.locationsFilterActive,m=e.episodesFilterActive,d=e.charFilterStatus,p=e.locationsFilterStatus,f=e.episodesFilterStatus,N=Object(n.useState)(window.innerWidth),S=Object(o.a)(N,2),A=S[0],_=S[1];Object(n.useEffect)((function(){window.addEventListener("resize",x)}));var x=function(){var e=window.innerWidth;return _(e),e<769?c():null};return r.a.createElement(E.c,{width:30,image:"https://wallpaperaccess.com/full/795172.jpg",collapsed:t,className:"flex",breakPoint:"md",toggled:a,onToggle:function(){return i()}},r.a.createElement(E.d,null,r.a.createElement(E.a,{iconShape:"circle"},r.a.createElement(y,{text:"Menu Filter",onClick:function(){return l(A)}}),r.a.createElement(O,null),r.a.createElement(T,{active:d,icon:r.a.createElement(h,null),onClick:function(){return s()},text:"Characters"}),r.a.createElement(T,{active:p,icon:r.a.createElement(v,null),onClick:function(){return u()},text:"Locations"}),r.a.createElement(T,{active:f,icon:r.a.createElement(g,null),onClick:function(){return m()},text:"Episodes"}))),r.a.createElement(E.e,null,r.a.createElement(b,null)))})),_=a(25),x=a.n(_),C=a(35),I=(a(64),{open:!1,data:{}});var j=function(){return function(e,t){e({type:"CHANGE_MODAL_STATUS",payload:!t().modalStatus.open})}};var D=Object(i.b)((function(e){return{}}),{changeModalStatus:j,storeActualObject:function(e){return function(t,a){t({type:"STORE_ACTUAL_OBJECT",payload:e})}}})((function(e){var t=e.name,a=e.image,n=e.dimension,c=e.episode,l=e.id,i=e.changeModalStatus,s=e.storeActualObject,o=e.actualObject;function u(){return(u=Object(C.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(o);case 2:i();case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement("div",{key:l,onClick:function(){return u.apply(this,arguments)}},console.log(l),a?r.a.createElement("div",{className:"item-data"},r.a.createElement("img",{src:a,className:"image",alt:"pic-from-api"}),r.a.createElement("div",{className:"item-text"},r.a.createElement("h4",{className:"text-h4"},t))):r.a.createElement("div",{className:"locat-epi-container"},r.a.createElement("div",null,r.a.createElement("h4",{className:"title-data"},"Name"),r.a.createElement("h4",{className:"text-locat-epi"},t)),n?r.a.createElement("div",null,r.a.createElement("h4",{className:"title-data"},"Dimension"),r.a.createElement("h4",{className:"text-locat-epi"},n)):r.a.createElement("div",null,r.a.createElement("h4",{className:"title-data"},"Episode"),r.a.createElement("h4",{className:"text-locat-epi"},c))))})),k=(a(65),function(){return r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"planet"},r.a.createElement("div",{className:"ring"}),r.a.createElement("div",{className:"cover-ring"}),r.a.createElement("div",{className:"spots"},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null))),r.a.createElement("p",null,"loading"))}),R=(a(66),function(e){var t=e.image,a=e.name;return r.a.createElement("div",{className:"modal-item-grid"},r.a.createElement("img",{className:"modal-item-image",src:t,alt:"modal"}),r.a.createElement("h2",{className:"modal-item-name"},a))});var F=Object(i.b)((function(e){return{actualObject:e.modalStatus.data}}))((function(e){var t,a,n,c,l=e.actualObject,i=l.name,s=l.type,o=l.dimension,u=l.episode,m=l.air_date;return t=!!l.residents&&l.residents.slice(0,5),a=!!l.characters&&l.characters.slice(0,5),n=t?t.map((function(e){return r.a.createElement(R,{name:e.name,image:e.image})})):null,c=a?a.map((function(e){return r.a.createElement(R,{name:e.name,image:e.image})})):null,r.a.createElement("div",null,r.a.createElement("div",{className:"loc-ep-name"},r.a.createElement("h2",{className:"responsive-margin text-decoration modal-name-text"},"Name"),r.a.createElement("h2",{className:"responsive-margin center-text"},i)),r.a.createElement("div",{className:"loc-ep-name"},r.a.createElement("h2",{className:"responsive-margin text-decoration modal-name-text"},o?"Type":"Release date"),r.a.createElement("h2",{className:"responsive-margin center-text"},o?s:m)),r.a.createElement("div",{className:"loc-ep-name"},r.a.createElement("h2",{className:"responsive-margin text-decoration modal-name-text"},o?"Dimension":"Episode"),r.a.createElement("h2",{className:"responsive-margin center-text"},o||u)),r.a.createElement("h2",{className:"responsive-margin text-decoration modal-name-text"},o?"First 5 Residents":"First 5 Characters"),o?l.residents[0].name?r.a.createElement("div",{className:"chars-residents-grid"},n):r.a.createElement("div",{className:"alert-no-residents"},r.a.createElement("h2",{className:"alert-text"},"NO RESIDENTS ON THIS LOCATIONS")):l.characters[0].name?r.a.createElement("div",{className:"chars-residents-grid"},c):r.a.createElement("div",{className:"alert-no-residents"},r.a.createElement("h2",{className:"alert-text"},"NO CHARACTERS ON THIS EPISODE")))})),M=(a(67),function(e){var t=e.onClick;return r.a.createElement("div",{className:"button-container",onClick:t},r.a.createElement("div",{className:"wrapp-menu-icon"},r.a.createElement(f,null)))}),w=a(26),U=a.n(w);U.a.setAppElement("#root");var L=Object(i.b)((function(e){return{modalStatus:e.modalStatus.open,actualObject:e.modalStatus.data}}),{changeModalStatus:j})((function(e){var t=e.modalStatus,a=e.changeModalStatus,n=e.actualObject,c=n.dimension,l=n.episode;return r.a.createElement(U.a,{isOpen:t,className:"overlay modal-content",style:{overlay:{backgroundColor:"rgba(113, 80, 145, 0)",display:"flex",justifyContent:"center",alignItems:"center"}}},r.a.createElement("div",{className:"modal-container"},r.a.createElement("div",{className:"close-modal-button"},r.a.createElement("i",{className:"far fa-times-circle close-button",onClick:function(){return a()}})),c||l?r.a.createElement(F,null):r.a.createElement(s,null)))})),G=(a(77),a(11)),$=a(10);function B(){var e=Object(G.a)(["\n    query searchEpisodesByName($pg: Int, $char: String) {\n      episodes(page: $pg, filter: { name: $char }) {\n        info {\n          count\n          pages\n          prev\n          next\n        }\n        results {\n          id\n          name\n          air_date\n          episode\n          characters {\n            name\n            image\n          }\n        }\n      }\n    }\n  "]);return B=function(){return e},e}function H(){var e=Object(G.a)(["\n      query searchLocationsByName($pg: Int, $char: String) {\n        locations(page: $pg, filter: { type: $char }) {\n          info {\n            count\n            pages\n            prev\n            next\n          }\n          results {\n            id\n            name\n            type\n            dimension\n            residents {\n              name\n              image\n            }\n          }\n        }\n      }\n    "]);return H=function(){return e},e}function q(){var e=Object(G.a)(["\n      query searchLocationsByName($pg: Int, $char: String) {\n        locations(page: $pg, filter: { name: $char }) {\n          info {\n            count\n            pages\n            prev\n            next\n          }\n          results {\n            id\n            name\n            type\n            dimension\n            residents {\n              name\n              image\n            }\n          }\n        }\n      }\n    "]);return q=function(){return e},e}function P(){var e=Object(G.a)(["\n      query searchCharactersByName($pg: Int, $char: String) {\n        characters(page: $pg, filter: { type: $char }) {\n          info {\n            count\n            pages\n            prev\n            next\n          }\n          results {\n            id\n            name\n            species\n            type\n            gender\n            image\n          }\n        }\n      }\n    "]);return P=function(){return e},e}function z(){var e=Object(G.a)(["\n      query searchCharactersByName($pg: Int, $char: String) {\n        characters(page: $pg, filter: { name: $char }) {\n          info {\n            count\n            pages\n            prev\n            next\n          }\n          results {\n            id\n            name\n            species\n            type\n            gender\n            image\n          }\n        }\n      }\n    "]);return z=function(){return e},e}var W={input:"",fetching:!1,info:{},prev:null,next:null,data:[],error:""},J=new $.a({uri:"https://rickandmortyapi.com/graphql"});var X=function(e){return function(t,a){""===e&&t({type:"CLEAR_DATA",payload:[]}),t({type:"STORE_INPUT",payload:e}),V(1)(t,a)}},V=function(e){return function(t,a){var n=a().menuFilter,r=a().characters.input;if(r.length>2){if(n.charsMenuItem)return K(e,r)(t,a);if(n.locationsMenuItem)return Q(e,r)(t,a);if(n.episodesMenuItem)return Y(e,r)(t,a)}}},K=function(e,t){return function(a,n){if(!0===n().menuFilter.byName)var r=Object($.b)(z());else r=Object($.b)(P());var c={pg:e,char:t};return a({type:"GET_DATA"}),J.query({query:r,variables:c}).then((function(e){a({type:"GET_CHARS_DATA_SUCCESS",payload:e.data.characters})})).catch((function(e){a({type:"GET_DATA_ERROR",payload:e.message})}))}},Q=function(e,t){return function(a,n){if(!0===n().menuFilter.byName)var r=Object($.b)(q());else r=Object($.b)(H());console.log(t);var c={pg:e,char:t};return a({type:"GET_DATA"}),J.query({query:r,variables:c}).then((function(e){a({type:"GET_LOCATIONS_DATA_SUCCESS",payload:e.data.locations}),console.log("esto es dentro del dispatch"+e)})).catch((function(e){a({type:"GET_DATA_ERROR",payload:e.message})}))}},Y=function(e,t){return function(a,n){var r=Object($.b)(B()),c={pg:e,char:t};return a({type:"GET_DATA"}),J.query({query:r,variables:c}).then((function(e){a({type:"GET_EPISODES_DATA_SUCCESS",payload:e.data.episodes}),console.log(e)})).catch((function(e){a({type:"GET_DATA_ERROR",payload:e.message})}))}};var Z=Object(i.b)((function(e){return{fetching:e.characters.fetching,error:e.characters.error,prev:e.characters.prev,next:e.characters.next,input:e.characters.input}}),{getMeTheData:V})((function(e){var t=e.error,a=e.input,c=e.fetching,l=e.prev,i=e.next,s=e.getMeTheData,o=document.getElementById("prev"),u=document.getElementById("next");Object(n.useEffect)((function(){a.length>2&&!t||(null===o||void 0===o||o.classList.add("prev-display"),null===u||void 0===u||u.classList.add("next-display"))})),null==l||c?null===o||void 0===o||o.classList.add("prev-display"):null===o||void 0===o||o.classList.remove("prev-display"),null==i||c?null===u||void 0===u||u.classList.add("next-display"):null===u||void 0===u||u.classList.remove("next-display");return r.a.createElement("div",{className:"page-button-grid"},r.a.createElement("div",{className:"page-button-container"},r.a.createElement("div",{id:"prev",className:"prev-button prev-display",onClick:function(){s(l)}},r.a.createElement("h2",null,"Prev")),r.a.createElement("div",{id:"next",className:"next-button next-display",onClick:function(){s(i)}},r.a.createElement("h2",null,"Next"))))})),ee=a(39),te=a(40),ae=a(45),ne=a(46),re=(a(79),a(80),function(e){var t=e.onClick;return r.a.createElement("label",{className:"switch"},r.a.createElement("input",{type:"checkbox",id:"togBtn"}),r.a.createElement("div",{className:"slider round",onClick:t}))}),ce=function(e){Object(ne.a)(a,e);var t=Object(ae.a)(a);function a(){return Object(ee.a)(this,a),t.apply(this,arguments)}return Object(te.a)(a,[{key:"stillOnFocus",value:function(){var e=document.getElementById("searcher");null===e||void 0===e||e.focus()}},{key:"render",value:function(){var e=this.props,t=e.changeFilter,a=e.filterType,n=e.byNameOrType,c=e.charFilter,l=e.locationFilter,i=e.entitie,s=e.getInput;return n=a?"name":"type",i=c?"characters":l?"locations":"episodes",r.a.createElement("label",{id:"searcher",className:"input-container"},r.a.createElement("div",{className:"shadow"}),r.a.createElement("div",{className:"center"},r.a.createElement("input",{id:"intext",type:"text",className:"input",placeholder:"search ".concat(i," by ").concat(n,"..."),onChange:function(e){return s(e.target.value)}}),r.a.createElement("div",{className:"align",onClick:this.stillOnFocus},r.a.createElement(re,{onClick:function(){return t()}}))),r.a.createElement("div",{className:"sticks"}))}}]),a}(r.a.Component);var le=Object(i.b)((function(e){return{filterType:e.menuFilter.byName,charFilter:e.menuFilter.charsMenuItem,locationFilter:e.menuFilter.locationsMenuItem}}),{changeFilter:function(){return function(e,t){e({type:"SWITCH_FILTER",payload:!t().menuFilter.byName})}},getInput:X})(ce),ie=(a(81),a(41)),se=a.n(ie),oe=a(42),ue=a.n(oe);var me=Object(i.b)((function(e){return{chars:e.characters,error:e.characters.error,loading:e.characters.fetching}}),{changeToggledStatus:d})((function(e){var t=e.changeToggledStatus,a=e.chars,n=e.loading;e.error&&ue()("Sorry :(","Not Found","error");var c=a.data.map((function(e){return r.a.createElement(D,{name:e.name,image:e.image,dimension:e.dimension,episode:e.episode,key:e.id,actualObject:e})}));return r.a.createElement("div",{className:"home"},r.a.createElement(L,null),r.a.createElement("div",{className:"home-content"},r.a.createElement(M,{onClick:function(){return t()}}),r.a.createElement(se.a,{className:"home-body"},r.a.createElement("div",{className:"searcher-grid"},r.a.createElement(le,null)),n?r.a.createElement("div",{className:"searcher-grid"},r.a.createElement(k,null)):c,r.a.createElement(Z,null))))}));var de=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(A,null),r.a.createElement(me,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var pe=a(8),Ee=a(43),fe=Object(pe.c)({sidebarStatuses:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIDEBAR_TOGGLE_STATUS":return Object(u.a)({},e,{toggled:t.payload});case"SIDEBAR_HIDDEN_STATUS":return Object(u.a)({},e,{hidden:t.payload});default:return e}},characters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"STORE_INPUT":return Object(u.a)({},e,{input:t.payload});case"GET_DATA":return Object(u.a)({},e,{fetching:!0});case"GET_CHARS_DATA_SUCCESS":case"GET_LOCATIONS_DATA_SUCCESS":case"GET_EPISODES_DATA_SUCCESS":return Object(u.a)({},e,{fetching:!1,data:t.payload.results,info:t.payload.info,prev:t.payload.info.prev,next:t.payload.info.next});case"GET_DATA_ERROR":return Object(u.a)({},e,{fetching:!1,error:t.payload});case"CLEAR_DATA":return Object(u.a)({},e,{error:"",data:t.payload});default:return e}},menuFilter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHARACTERS_STATUS_MENU":return Object(u.a)({},e,{charsMenuItem:!0,locationsMenuItem:!1,episodesMenuItem:!1});case"LOCATIONS_STATUS_MENU":return Object(u.a)({},e,{charsMenuItem:!1,locationsMenuItem:!0,episodesMenuItem:!1});case"EPISODES_STATUS_MENU":return Object(u.a)({},e,{charsMenuItem:!1,locationsMenuItem:!1,episodesMenuItem:!0});case"SWITCH_FILTER":return Object(u.a)({},e,{byName:t.payload});default:return e}},modalStatus:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_MODAL_STATUS":return Object(u.a)({},e,{open:t.payload});case"STORE_ACTUAL_OBJECT":return Object(u.a)({},e,{data:t.payload});default:return e}}}),he=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||pe.d;var ve=function(){var e=Object(pe.e)(fe,he(Object(pe.a)(Ee.a)));return X("")(e.dispatch,e.getState),e}(),ge=function(){return r.a.createElement(i.a,{store:ve},r.a.createElement(de,null))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ge,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[47,1,2]]]);
//# sourceMappingURL=main.9966415f.chunk.js.map