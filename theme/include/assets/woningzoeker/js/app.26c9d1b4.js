(function(t){function e(e){for(var a,n,c=e[0],l=e[1],o=e[2],u=0,v=[];u<c.length;u++)n=c[u],i[n]&&v.push(i[n][0]),i[n]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(e);while(v.length)v.shift()();return r.push.apply(r,o||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],a=!0,c=1;c<s.length;c++){var l=s[c];0!==i[l]&&(a=!1)}a&&(r.splice(e--,1),t=n(n.s=s[0]))}return t}var a={},i={app:0},r=[];function n(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=a,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(s,a,function(e){return t[e]}.bind(null,a));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var o=0;o<c.length;o++)e(c[o]);var d=l;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034a":function(t,e,s){"use strict";var a=s("3cf6"),i=s.n(a);i.a},"034f":function(t,e,s){"use strict";var a=s("c21b"),i=s.n(a);i.a},"0d60":function(t,e,s){"use strict";var a=s("cdc0"),i=s.n(a);i.a},1859:function(t,e,s){},"25dc":function(t,e,s){"use strict";var a=s("1859"),i=s.n(a);i.a},"3cf6":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("097d");var a=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("section",{staticClass:"section",staticStyle:{"padding-bottom":"0"},attrs:{"data-background-color":"white"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.toggleOverlay,expression:"toggleOverlay"}],staticClass:"overlay",class:{active:t.isOverlay()},on:{click:function(e){t.fadeOut()}}}),s("div",{directives:[{name:"show",rawName:"v-show",value:t.toggleLoader,expression:"toggleLoader"}],staticClass:"loader-overlay"},[t._m(0)]),s("Woningzoeker")],1)])},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("div",{staticClass:"bunker-loader"},[s("div",{staticClass:"part"}),s("div",{staticClass:"part"}),s("div",{staticClass:"part"}),s("div",{staticClass:"part"}),s("div",{staticClass:"part"}),s("div",{staticClass:"part"}),s("div",{staticClass:"part"})])])}],n=(s("7f7f"),s("55dd"),s("ac6a"),s("2f62")),c=s("bc3a"),l=s.n(c);a["a"].use(n["a"]),a["a"].use(l.a);var o=new n["a"].Store({state:{count:32,list:{type:["Alle opties","Maaskant","Studio","Rudolph","Ando","Powerhouse","Goldfinger","Broek & Bakema","Acacia","Bancroft","Breuer","Cedar","Chestnut","Da Rocha","Hazel","Lautner","Locust","Locust Executive","Locust Royale","Luder","Maple","Maple Executive","Maple royale","Niemeyer","Oak"],area:["Alle opties","40m2 — 60m2","60m2 — 80m2","80m2 — 100m2","100m2 — 120m2","120m2 — 140m2","140m2 — 160m2","160m2 — 308m2"],price:["Alle opties","€200.000 — €300.000","€300.000 — €400.000","€400.000 — €500.000","€500.000 — €600.000","€600.000 — €700.000","€700.000 — €1.570.000"]},current:{type:"Alle opties",area:"Alle opties",price:"Alle opties",level:0},isFaded:!1,isLoading:!0,hasDetailsOpen:!1,apartments:[],filteredApartments:[]},mutations:{setCurrent:function(t,e){t.current[e.target]=e.value,t.hasDetailsOpen=!1},setLevel:function(t,e){t.current.level=e,t.hasDetailsOpen=!1},setApartments:function(t,e){t.apartments=e},setFilteredApartments:function(t,e){t.filteredApartments=e},isLoading:function(t,e){t.isLoading=e},hasDetailsOpen:function(t,e){t.hasDetailsOpen=e},fadeIn:function(t){t.isFaded=!0},fadeOut:function(t){t.isFaded=!1},resetFilters:function(t){t.current.type="Alle opties",t.current.area="Alle opties",t.current.price="Alle opties"}},getters:{getApartmentById:function(t){return function(e){var s={};return t.apartments.forEach(function(t){parseInt(t.id)===parseInt(e)&&(s=t)}),s}}},actions:{init:function(t){l.a.get("http://bunkertoren.nl/wp-json/woningzoeker/v1/apartments").then(function(e){t.commit("setApartments",e.data),t.commit("setFilteredApartments",e.data),t.commit("isLoading",!1)})},filterApartments:function(t){var e=t.state.apartments;if("Alle opties"!==t.state.current.type&&(e=e.filter(function(e){return e.type===t.state.current.type.toUpperCase()||e.type===t.state.current.type.toUpperCase()+" PENTHOUSE"})),"Alle opties"!==t.state.current.area)switch(t.state.current.area){case"40m2 — 60m2":e=e.filter(function(t){return t.area<60});break;case"60m2 — 80m2":e=e.filter(function(t){return t.area>60&&t.area<80});break;case"80m2 — 100m2":e=e.filter(function(t){return t.area>80&&t.area<100});break;case"100m2 — 120m2":e=e.filter(function(t){return t.area>100&&t.area<120});break;case"120m2 — 140m2":e=e.filter(function(t){return t.area>120&&t.area<140});break;case"140m2 — 160m2":e=e.filter(function(t){return t.area>140&&t.area<160});break;case"160m2 — 308m2":e=e.filter(function(t){return t.area>160});break}if("Alle opties"!==t.state.current.price)switch(t.state.current.price){case"€200.000 — €300.000":e=e.filter(function(t){return t.price<3e5});break;case"€300.000 — €400.000":e=e.filter(function(t){return t.price>3e5&&t.price<4e5});break;case"€400.000 — €500.000":e=e.filter(function(t){return t.price>4e5&&t.price<5e5});break;case"€500.000 — €600.000":e=e.filter(function(t){return t.price>5e5&&t.price<6e5});break;case"€600.000 — €700.000":e=e.filter(function(t){return t.price>6e5&&t.price<7e5});break;case"€700.000 — €1.570.000":e=e.filter(function(t){return t.price>7e5});break}t.state.filteredApartments=e},filterApartmentsByLevel:function(t){if(t.state.current.level>0){var e=t.state.apartments.filter(function(e){return e.level==t.state.current.level});t.state.filteredApartments=e}else t.state.filteredApartments=t.state.apartments;t.commit("resetFilters")},sortByType:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(e){var s=t.state.filteredApartments;s.sort(function(t,e){return t.type<e.type?-1:t.type>e.type?1:0}),t.state.filteredApartments=s}else{var a=t.state.filteredApartments;a.sort(function(t,e){return t.type<e.type?1:t.type>e.type?-1:0}),t.state.filteredApartments=a}},sortByName:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(e){var s=t.state.filteredApartments;s.sort(function(t,e){return t.name<e.name?-1:t.name>e.name?1:0}),t.state.filteredApartments=s}else{var a=t.state.filteredApartments;a.sort(function(t,e){return t.name<e.name?1:t.name>e.name?-1:0}),t.state.filteredApartments=a}},sortByArea:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(e){var s=t.state.filteredApartments;s.sort(function(t,e){return parseInt(t.area)-parseInt(e.area)}),t.state.filteredApartments=s}else{var a=t.state.filteredApartments;a.sort(function(t,e){return parseInt(e.area)-parseInt(t.area)}),t.state.filteredApartments=a}},sortByLevel:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(e){var s=t.state.filteredApartments;s.sort(function(t,e){return parseInt(t.level)-parseInt(e.level)}),t.state.filteredApartments=s}else{var a=t.state.filteredApartments;a.sort(function(t,e){return parseInt(e.level)-parseInt(t.level)}),t.state.filteredApartments=a}},sortByPrice:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(e){var s=t.state.filteredApartments;s.sort(function(t,e){return parseInt(t.price)-parseInt(e.price)}),t.state.filteredApartments=s}else{var a=t.state.filteredApartments;a.sort(function(t,e){return parseInt(e.price)-parseInt(t.price)}),t.state.filteredApartments=a}}}}),d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container is-fluid",class:{active:t.hasDetailsOpen}},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-5"},[s("div",{staticClass:"header-container"},[s("p",{staticClass:"header-app"},[s("span",{staticClass:"header-top"},[s("span",{staticClass:"constructed-app"},[t._v(t._s(t.getHeader().constructed))]),t._v(t._s(t.getHeader().top))]),s("br"),t._v(t._s(t.getHeader().bottom))])])]),s("div",{staticClass:"column is-hidden-tablet"},[s("FilterLevels")],1),s("div",{staticClass:"column is-7"},[s("div",{staticClass:"filter-container"},[t._m(0),s("div",{staticClass:"filter-controls"},[s("FilterDropdown",{attrs:{target:"type"}}),s("FilterDropdown",{attrs:{target:"area"}}),s("FilterDropdown",{attrs:{target:"price"}})],1)])])]),s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-5 is-hidden-mobile"},[s("FilterLevels")],1),s("div",{staticClass:"column is-7 column-overview"},[s("Overview")],1)])])},u=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"filter-labels"},[s("label",{staticClass:"label"},[t._v("Woningtype")]),s("label",{staticClass:"label"},[t._v("Oppervlakte")]),s("label",{staticClass:"label"},[t._v("Prijs")])])}],v=(s("6b54"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"filter-levels-container"},[s("img",{staticClass:"levels-achtergrond",attrs:{src:"http://bunkertoren.nl/site/wp-content/themes/bunkertoren/assets/woningzoeker/levels.png",alt:""}}),s("div",{staticClass:"levels-overlay"},[s("div",{staticClass:"pointer",attrs:{id:t.randomHash}},[s("div",{staticClass:"list"},[s("div",{staticClass:"line"}),s("ul",t._l(t.apartmentsOnLevel,function(e){return s("li",{key:e.id,class:t.getStatus(e.status)},[t._v(t._s(e.type))])})),s("div",{staticClass:"line"})])]),s("div",{staticClass:"story block-4 story-32",on:{click:function(e){t.selectLevel(32,e)}}}),s("div",{staticClass:"story block-4 story-31",on:{click:function(e){t.selectLevel(31,e)}}}),s("div",{staticClass:"story block-4 story-30",on:{click:function(e){t.selectLevel(30,e)}}}),s("div",{staticClass:"story block-4 story-29",on:{click:function(e){t.selectLevel(29,e)}}}),s("div",{staticClass:"story block-4 story-28",on:{click:function(e){t.selectLevel(28,e)}}}),s("div",{staticClass:"story block-4 story-27",on:{click:function(e){t.selectLevel(27,e)}}}),s("div",{staticClass:"story block-4 story-26",on:{click:function(e){t.selectLevel(26,e)}}}),s("div",{staticClass:"story block-4 story-25",on:{click:function(e){t.selectLevel(25,e)}}}),s("div",{staticClass:"story block-4 story-24",on:{click:function(e){t.selectLevel(24,e)}}}),s("div",{staticClass:"story block-4 story-23",on:{click:function(e){t.selectLevel(23,e)}}}),t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),s("div",{staticClass:"story block-4 story-9",on:{click:function(e){t.selectLevel(9,e)}}}),t._m(13),t._m(14),t._m(15),t._m(16),s("div",{staticClass:"story block-3 story-4",on:{click:function(e){t.selectLevel(4,e)}}}),s("div",{staticClass:"story block-2 story-3",on:{click:function(e){t.selectLevel(3,e)}}}),s("div",{staticClass:"story block-2 story-2",on:{click:function(e){t.selectLevel(2,e)}}}),s("div",{staticClass:"story block-1 story-1",on:{click:function(e){t.selectLevel(1,e)}}})])])}),p=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hidden story block-4 story-22"},[s("div",{staticClass:"hidden-story-message"},[t._v("huurwoningen – later beschikbaar")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hidden story block-4 story-21"},[s("div",{staticClass:"hidden-story-message"},[t._v("huurwoningen – later beschikbaar")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hidden story block-4 story-20"},[s("div",{staticClass:"hidden-story-message"},[t._v("huurwoningen – later beschikbaar")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hidden story block-4 story-19"},[s("div",{staticClass:"hidden-story-message"},[t._v("huurwoningen – later beschikbaar")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hidden story block-4 story-18"},[s("div",{staticClass:"hidden-story-message"},[t._v("huurwoningen – later beschikbaar")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hidden story block-4 story-17"},[s("div",{staticClass:"hidden-story-message"},[t._v("huurwoningen – later beschikbaar")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hidden story block-4 story-16"},[s("div",{staticClass:"hidden-story-message"},[t._v("huurwoningen – later beschikbaar")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hidden story block-4 story-15"},[s("div",{staticClass:"hidden-story-message"},[t._v("huurwoningen – later beschikbaar")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hidden story block-4 story-14"},[s("div",{staticClass:"hidden-story-message"},[t._v("huurwoningen – later beschikbaar")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hidden story block-4 story-13"},[s("div",{staticClass:"hidden-story-message"},[t._v("huurwoningen – later beschikbaar")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hidden story block-4 story-12"},[s("div",{staticClass:"hidden-story-message"},[t._v("huurwoningen – later beschikbaar")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hidden story block-4 story-11"},[s("div",{staticClass:"hidden-story-message"},[t._v("huurwoningen – later beschikbaar")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hidden story block-4 story-10"},[s("div",{staticClass:"hidden-story-message"},[t._v("huurwoningen – later beschikbaar")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hidden story block-3 story-8"},[s("div",{staticClass:"hidden-story-message"},[t._v("huurwoningen – later beschikbaar")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hidden story block-3 story-7"},[s("div",{staticClass:"hidden-story-message"},[t._v("huurwoningen – later beschikbaar")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hidden story block-3 story-6"},[s("div",{staticClass:"hidden-story-message"},[t._v("huurwoningen – later beschikbaar")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hidden story block-3 story-5"},[s("div",{staticClass:"hidden-story-message"},[t._v("huurwoningen – later beschikbaar")])])}],m=(s("1c4c"),{name:"FilterLevels",props:{},data:function(){return{randomHash:0}},computed:{apartmentsOnLevel:function(){return o.state.filteredApartments},currType:function(){return o.state.current.type},currArea:function(){return o.state.current.area},currPrice:function(){return o.state.current.price}},methods:{selectLevel:function(t,e){if(o.state.current.level!=t){var s=this.removeSelection(!1);console.log(s),o.commit("setLevel",t),o.dispatch("filterApartmentsByLevel"),e.target.classList.add("active");var a=document.getElementById(this.randomHash),i=document.querySelector("#"+this.randomHash+" .list"),r=document.querySelectorAll("#"+this.randomHash+" .list .line"),n=e.target;window.innerWidth<768?n.classList.contains("block-1")?(a.style.width="calc(23.5% + 10% - 20px)",a.style.marginLeft="-10%",i.style.top="auto",i.style.bottom=n.clientHeight+"px",r[0].classList.remove("active"),r[1].classList.remove("active")):n.classList.contains("block-2")?(a.style.width="calc(23.5% + 10% - 20px)",a.style.marginLeft="-10%",i.style.top="auto",i.style.bottom="-"+n.clientHeight+"px",r[0].classList.remove("active"),r[1].classList.add("active")):n.classList.contains("block-3")?(a.style.width="calc(30.5% + 10% - 20px)",a.style.marginLeft="-10%",i.style.top="auto",i.style.bottom="-"+n.clientHeight+"px",r[0].classList.remove("active"),r[1].classList.add("active")):n.classList.contains("story-9")?(a.style.width="calc(30.5% + 10% - 20px)",a.style.marginLeft="-10%",i.style.top="auto",i.style.bottom="-"+n.clientHeight+"px",r[0].classList.remove("active"),r[1].classList.add("active")):n.classList.contains("block-4")&&(a.style.width="calc(38.5% + 10% - 20px)",a.style.marginLeft="-10%",i.style.top=0,i.style.bottom="auto",r[0].classList.add("active"),r[1].classList.remove("active")):n.classList.contains("block-1")?(a.style.width="calc(23.5% - 20px)",i.style.top="auto",i.style.bottom=n.clientHeight+"px",r[0].classList.remove("active"),r[1].classList.remove("active")):n.classList.contains("block-2")?(a.style.width="calc(23.5% - 20px)",i.style.top="auto",i.style.bottom="-"+n.clientHeight+"px",r[0].classList.remove("active"),r[1].classList.add("active")):n.classList.contains("block-3")?(a.style.width="calc(30.5% - 20px)",i.style.top="auto",i.style.bottom="-"+n.clientHeight+"px",r[0].classList.remove("active"),r[1].classList.add("active")):n.classList.contains("story-9")?(a.style.width="calc(30.5% - 20px)",i.style.top="auto",i.style.bottom="-"+n.clientHeight+"px",r[0].classList.remove("active"),r[1].classList.add("active")):n.classList.contains("block-4")&&(a.style.width="calc(38.5% - 20px)",i.style.top=0,i.style.bottom="auto",r[0].classList.add("active"),r[1].classList.remove("active")),a.style.top=n.offsetTop+"px",a.classList.add("active")}else this.removeSelection(!0)},removeSelection:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=document.getElementById(this.randomHash),s=document.querySelectorAll("#"+this.randomHash+" .list .line");s[0].classList.remove("active"),s[1].classList.remove("active"),e.classList.remove("active");var a=Array.from(document.getElementsByClassName("story"));a.forEach(function(t){t.classList.remove("active")}),t&&(o.commit("setLevel",0),o.dispatch("filterApartmentsByLevel"),o.commit("resetFilters",0))},removeLevelSelection:function(){var t=document.getElementById(this.randomHash),e=document.querySelectorAll("#"+this.randomHash+" .list .line");e[0].classList.remove("active"),e[1].classList.remove("active"),t.classList.remove("active");var s=Array.from(document.getElementsByClassName("story"));s.forEach(function(t){t.classList.remove("active")}),o.commit("setLevel",0)},getStatus:function(t){return"beschikbaar"===t.toLowerCase()?"status-green":"onder optie"===t.toLowerCase()?"status-orange":"status-red"}},beforeMount:function(){var t=new Date,e=t.getMilliseconds(),s=Math.floor(1e4*Math.random(e));this.randomHash="hash"+s},watch:{currType:function(t){"Alle opties"!==t&&this.removeLevelSelection()},currArea:function(t){"Alle opties"!==t&&this.removeLevelSelection()},currPrice:function(t){"Alle opties"!==t&&this.removeLevelSelection()}}}),f=m,h=(s("9862"),s("2877")),g=Object(h["a"])(f,v,p,!1,null,"5fb5332a",null);g.options.__file="FilterLevels.vue";var y=g.exports,b=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"filter-dropdown"},[s("div",{staticClass:"is-hidden-mobile"},[s("span",{staticClass:"selection",on:{click:function(e){t.toggle()}}},[t._v(t._s(t.selection)),s("img",{staticClass:"caret",attrs:{src:"http://bunkertoren.nl/site/wp-content/themes/bunkertoren/assets/woningzoeker/caret.svg"}})]),s("ul",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}]},t._l(t.list,function(e){return s("li",{key:e.index,on:{click:function(s){t.select(e)}}},[t._v(t._s(e))])}))]),s("div",{staticClass:"is-hidden-tablet"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.currValue,expression:"currValue"}],staticClass:"select",attrs:{name:"",id:""},on:{change:[function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.currValue=e.target.multiple?s:s[0]},function(e){t.setSelection()}]}},t._l(t.list,function(e){return s("option",{key:e.index,domProps:{value:e}},[t._v(t._s(e))])}))])])},_=[],C={name:"FilterDropdown",props:["target"],data:function(){return{isOpen:!1,currValue:"Alle opties"}},computed:{selection:function(){return o.state.current[this.target]},isFaded:function(){return o.state.isFaded},list:function(){return o.state.list[this.target]}},methods:{toggle:function(){o.commit("fadeIn"),this.isOpen=!0},select:function(t){o.commit("setCurrent",{target:this.target,value:t}),o.commit("fadeOut"),o.dispatch("filterApartments"),this.isOpen=!1,this.currValue=t},setSelection:function(){this.select(this.currValue)}},watch:{isFaded:function(t){0==t&&(this.isOpen=!1)}}},L=C,k=(s("25dc"),Object(h["a"])(L,b,_,!1,null,"1cc11398",null));k.options.__file="FilterDropdown.vue";var w=k.exports,A=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"overview-container"},[s("div",{staticClass:"heading-wrapper"},[s("ul",[s("li",{staticClass:"trow"},[s("div",{staticClass:"tcol tcol-woningtype tcol-label",on:{click:function(e){t.sortByType(e)}}},[t._v("Woningtype")]),s("div",{staticClass:"tcol tcol-type tcol-label",on:{click:function(e){t.sortByName(e)}}},[t._v("Type")]),s("div",{staticClass:"tcol tcol-oppervlakte tcol-label",on:{click:function(e){t.sortByArea(e)}}},[t._v("Oppervlakte")]),s("div",{staticClass:"tcol tcol-verdieping tcol-label",on:{click:function(e){t.sortByLevel(e)}}},[t._v("Verdieping")]),s("div",{staticClass:"tcol tcol-prijs tcol-label",on:{click:function(e){t.sortByPrice(e)}}},[t._v("Prijs")]),s("div",{staticClass:"tcol tcol-status"},[t._v("Status")])])])]),s("div",{staticClass:"results-wrapper",class:{"limit-scroll":t.openDetails}},[s("ul",t._l(t.results,function(e){return s("li",{key:e.id,staticClass:"trow",class:t.getTrowStatus(e.status),attrs:{id:e.id},on:{click:function(s){t.toggleApartment(s,e.id)}}},[s("div",{staticClass:"tcol tcol-woningtype"},[t._v(t._s(e.type.toLowerCase()))]),s("div",{staticClass:"tcol tcol-type"},[t._v(t._s(e.name))]),s("div",{staticClass:"tcol tcol-oppervlakte"},[t._v(t._s(e.area)+" m2")]),s("div",{staticClass:"tcol tcol-verdieping"},[t._v(t._s(e.level))]),s("div",{staticClass:"tcol tcol-prijs"},[t._v(t._s(t.getPrice(e.price)))]),s("div",{staticClass:"tcol tcol-status"},[s("div",{staticClass:"icon-status",class:t.getStatus(e.status)})])])})),s("div",{directives:[{name:"show",rawName:"v-show",value:t.openDetails,expression:"openDetails"}],staticClass:"spacer",staticStyle:{height:"calc(100% - 64px)"}})]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.openDetails,expression:"openDetails"}],staticClass:"details-wrapper",class:{active:t.openDetails}},[s("ul",[s("li",{staticClass:"trow padding no-border"},[s("div",{staticClass:"tcol tcol-detail-header"},[s("div",{staticClass:"level"},[s("div",{staticClass:"level-item level-left"},[s("p",{staticClass:"header-app"},[t._v(t._s(t.currApartment.type))]),s("h2",{staticClass:"small"},[t._v("bouwnr. "+t._s(t.currApartment.number))])])]),s("div",{staticClass:"level"},[s("div",{staticClass:"level-item level-left"},[s("span",{staticClass:"status",class:t.getStatus(t.currApartment.status)},[t._v(t._s(t.currApartment.status))])])])])]),s("li",{staticClass:"trow padding"},[s("div",{staticClass:"tcol tcol-text"},[s("p",[t._v(t._s(t.currApartment.text))]),s("a",{staticClass:"button interested",attrs:{target:"_blank",href:"https://pdb.eye-move.nl/Contact/ProjectInschrijven/start.html?RecID=97043"}},[t._v("inschrijven")])]),s("div",{staticClass:"tcol tcol-plan"},[s("img",{attrs:{src:t.currApartment.plan,alt:""}})])]),s("li",{staticClass:"trow padding"},[s("div",{staticClass:"tcol tcol-kenmerken"},[s("div",{staticClass:"level is-mobile"},[s("div",{staticClass:"level-left"},[t._v("Gebruiksopp.")]),s("div",{staticClass:"level-right"},[t._v(t._s(t.currApartment.area)+" m2")])]),s("div",{staticClass:"level is-mobile"},[s("div",{staticClass:"level-left"},[t._v("Buitenruimte")]),s("div",{staticClass:"level-right"},[t._v(t._s(t.currApartment.areaOutside)+" m2")])]),s("div",{staticClass:"level is-mobile"},[s("div",{staticClass:"level-left"},[t._v("Verdieping")]),s("div",{staticClass:"level-right"},[t._v(t._s(t.currApartment.level))])]),s("div",{staticClass:"level is-mobile"},[s("div",{staticClass:"level-left"},[t._v("Aantal kamers")]),s("div",{staticClass:"level-right"},[t._v(t._s(t.currApartment.rooms))])])]),s("div",{staticClass:"tcol tcol-windrichting-first"},[s("div",{staticClass:"north"},[t._v("N")]),s("div",{staticClass:"windrichting"},[s("img",{class:t.getRotation(t.currApartment.name),attrs:{src:"http://bunkertoren.nl/site/wp-content/themes/bunkertoren/assets/woningzoeker/windrichting.svg",alt:""}})])]),s("div",{staticClass:"tcol tcol-aanzichten"},[t._m(0),s("img",{attrs:{src:t.currApartment.sideview,alt:""}})]),s("div",{staticClass:"tcol tcol-windrichting-last"},[s("div",{staticClass:"north"},[t._v("N")]),s("div",{staticClass:"windrichting"},[s("img",{class:t.getRotation(t.currApartment.name),attrs:{src:"http://bunkertoren.nl/site/wp-content/themes/bunkertoren/assets/woningzoeker/windrichting.svg",alt:""}})])])])])])])},O=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"level is-mobile"},[s("div",{staticClass:"level-left"},[t._v("Noord")]),s("div",{staticClass:"level-left"},[t._v("Oost")]),s("div",{staticClass:"level-left"},[t._v("Zuid")]),s("div",{staticClass:"level-left"},[t._v("West")])])}],S=s("35eb"),x={name:"Overview",components:{},data:function(){return{currDetails:!1,currApartment:{}}},props:[],computed:{results:function(){return o.state.filteredApartments},details:function(){return this.currDetails},openDetails:function(){return o.state.hasDetailsOpen}},methods:{toggleApartment:function(t,e){if(this.openDetails){var s=document.getElementById(e);s.classList.remove("active"),o.commit("hasDetailsOpen",!1)}else{this.currDetails=e,this.currApartment=o.getters.getApartmentById(e);var a=document.getElementById(e);a.classList.add("active");var i=document.querySelector(".results-wrapper"),r=document.querySelector(".details-wrapper"),n=i.scrollTop,c=a.offsetTop+1,l=function(t){return i.scrollTop=t},d=function(t){return r.style.height=t+"%"};r.style.height=0,r.style.overflow="hidden",o.commit("hasDetailsOpen",!0),Object(S["a"])({from:n,to:c,duration:400}).start({update:l,complete:function(){return Object(S["a"])({from:0,to:100,duration:600}).start(d)}})}},getStatus:function(t){return t?"beschikbaar"===t.toLowerCase()?"status-green":"onder optie"===t.toLowerCase()?"status-orange":"status-red":"undefined"},getTrowStatus:function(t){return t?"beschikbaar"===t.toLowerCase()?"":"onder optie"===t.toLowerCase()?"":"status-unavailable":"undefined"},getRotation:function(){return"deg-155"},getPrice:function(t){var e=t+"";if(e.length>6){var s=e.substring(1,e.length-3),a=e.substring(e.length-3),i="€1."+s+"."+a;return i}var r=e.substring(0,e.length-3),n=e.substring(e.length-3),c="€"+r+"."+n;return c},removeSorting:function(){for(var t=document.getElementsByClassName("tcol-label"),e=0;e<t.length;e++)t[e].classList.remove("sorted")},sortByType:function(t){var e=t.target;this.removeSorting(),e.classList.contains("ascending")?(o.dispatch("sortByType",!1),e.classList.remove("ascending"),e.classList.add("descending"),e.classList.add("sorted")):(o.dispatch("sortByType",!0),e.classList.remove("descending"),e.classList.add("ascending"),e.classList.add("sorted"))},sortByName:function(t){var e=t.target;this.removeSorting(),e.classList.contains("ascending")?(o.dispatch("sortByName",!1),e.classList.remove("ascending"),e.classList.add("descending"),e.classList.add("sorted")):(o.dispatch("sortByName",!0),e.classList.remove("descending"),e.classList.add("ascending"),e.classList.add("sorted"))},sortByArea:function(t){var e=t.target;this.removeSorting(),e.classList.contains("ascending")?(o.dispatch("sortByArea",!1),e.classList.remove("ascending"),e.classList.add("descending"),e.classList.add("sorted")):(o.dispatch("sortByArea",!0),e.classList.remove("descending"),e.classList.add("ascending"),e.classList.add("sorted"))},sortByLevel:function(t){var e=t.target;this.removeSorting(),e.classList.contains("ascending")?(o.dispatch("sortByLevel",!1),e.classList.remove("ascending"),e.classList.add("descending"),e.classList.add("sorted")):(o.dispatch("sortByLevel",!0),e.classList.remove("descending"),e.classList.add("ascending"),e.classList.add("sorted"))},sortByPrice:function(t){var e=t.target;this.removeSorting(),e.classList.contains("ascending")?(o.dispatch("sortByPrice",!1),e.classList.remove("ascending"),e.classList.add("descending"),e.classList.add("sorted")):(o.dispatch("sortByPrice",!0),e.classList.remove("descending"),e.classList.add("ascending"),e.classList.add("sorted"))}},watch:{results:function(){for(var t=document.querySelectorAll(".results-wrapper .trow"),e=0;e<t.length;e++)t[e].classList.remove("active");var s=document.querySelector(".results-wrapper");s.scrollTop=0}}},B=x,E=(s("0d60"),Object(h["a"])(B,A,O,!1,null,null,null));E.options.__file="Overview.vue";var D=E.exports,$={name:"Woningzoeker",components:{FilterLevels:y,FilterDropdown:w,Overview:D},props:{msg:String},data:function(){return{message:{left:"left",right:"right"}}},computed:{count:function(){return o.state.count},toggleOverlay:function(){return o.state.isFaded},toggleLoader:function(){return o.state.isLoading},hasDetailsOpen:function(){return o.state.hasDetailsOpen},isMobile:function(){return window.innerWidth<768}},methods:{getHeader:function(){var t=o.state.current.level;if(0==t)return{constructed:"A",top:"LLE",bottom:"Verdiepingen"};var e="DE";(1==t||8==t||t>19)&&(e="STE");var s=t.toString();return{constructed:s.substring(0,1),top:s.substring(1)+e,bottom:"Verdieping"}}}},I=$,F=(s("034a"),Object(h["a"])(I,d,u,!1,null,"49129d00",null));F.options.__file="Woningzoeker.vue";var H=F.exports,j={name:"app",components:{Woningzoeker:H},computed:{toggleOverlay:function(){return o.state.isFaded},toggleLoader:function(){return o.state.isLoading}},methods:{fadeOut:function(){o.commit("fadeOut")},isOverlay:function(){return this.toggleOverlay}},beforeCreate:function(){o.dispatch("init")}},P=j,T=(s("034f"),Object(h["a"])(P,i,r,!1,null,null,null));T.options.__file="App.vue";var N=T.exports;a["a"].config.productionTip=!1,new a["a"]({store:o,render:function(t){return t(N)}}).$mount("#app")},9862:function(t,e,s){"use strict";var a=s("efa8"),i=s.n(a);i.a},c21b:function(t,e,s){},cdc0:function(t,e,s){},efa8:function(t,e,s){}});
//# sourceMappingURL=app.26c9d1b4.js.map