(function(e){function t(t){for(var n,o,s=t[0],d=t[1],c=t[2],l=0,h=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&h.push(a[o][0]),a[o]=0;for(n in d)Object.prototype.hasOwnProperty.call(d,n)&&(e[n]=d[n]);u&&u(t);while(h.length)h.shift()();return i.push.apply(i,c||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,s=1;s<r.length;s++){var d=r[s];0!==a[d]&&(n=!1)}n&&(i.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},a={app:0},i=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=d;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("h2",[e._v("Deceased Person Search Tool")]),r("script",{attrs:{type:"application/javascript",src:"https://cdn.jsdelivr.net/npm/xlsx@0.17.3/dist/xlsx.full.min.js"}}),e.loading?r("div",[e._v(" Loading spreadsheet... Please wait... ")]):e.data?r("div",[r("p",[e._v("Found "+e._s(e.data.length)+" records in spreadsheet.")]),r("p",[e._v(" Here are the ones who voted, and are older than "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.ageLimit,expression:"ageLimit"}],on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.ageLimit=t.target.multiple?r:r[0]}}},e._l(e.ageRange,(function(t){return r("option",{key:t,domProps:{value:t}},[e._v(e._s(t))])})),0),e._v(". Found "+e._s(e.filteredList.length)+" of those. ")]),e._m(0),r("table",[e._m(1),r("tbody",e._l(e.filteredList.slice(0,1e3),(function(t){return r("tr",{key:t["Unique Voter ID's"]},[r("td",[e._v(e._s(t["Voter ID"]||t["Unique Voter ID's"]))]),r("td",[e._v(e._s(t["Name"]))]),r("td",[e._v(e._s(t["Name_1"]))]),r("td",[e._v(e._s(t["Name_2"]))]),r("td",[e._v(e._s(e.age(t)))]),r("td",[e._v(e._s(t["Birthday"]))]),r("td",[e._v(" "+e._s(t["Address"])+" "+e._s(t["__EMPTY_1"])+" "+e._s(t["__EMPTY_2"])+" ")]),r("td",[e._v(e._s(t["Precinct"]))]),r("td",[r("a",{attrs:{href:e.findAGraveUrl(t),target:"fag"}},[e._v("FindAGrave")]),e._v("  "),r("a",{attrs:{href:e.ancestryUrl(t),target:"ancestry"}},[e._v("Ancestry")]),e._v("  "),r("a",{attrs:{href:"#"},on:{click:function(r){return r.preventDefault(),e.openBothWindows(t)}}},[e._v("Both")])])])})),0)]),e._v(" Max of 1000 records shown here. ")]):r("div",{staticStyle:{border:"1px solid #aaa","border-radius":"5px",padding:"18px 24px"}},[r("p",[e._v("Drag and drop an XLS or CSV file onto this window to start. ")]),r("p",[e._v('It MUST be in the Missouri "dropped voters" format where there are exactly 2 header rows, and the columns are named consistently to the Barry/Boone/Buchanan sheets.')])]),e._m(2)])},i=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[e._v("Clicking the search links will initiate a search for the specific person using the provided name, birthdate and state.")]),r("li",[e._v("In order to search Ancestry.com you MUST be logged in to their site and have a paid subscription.")]),r("li",[e._v("To speed the process up, after running a search, drag the position of all 3 windows so you can see them on the screen together. Then when you click the next search link it will reuse the same window(s) as before.")]),r("li",[e._v("Links will change colour (to purple) after you've run that search, so you can keep track of which ones you've reviewed.")]),r("li",[e._v("You cannot record your findings on this page (as yet). You will need to note them down in the original spreadsheet.")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("thead",[r("tr",[r("th",[e._v("Unique Voter ID's")]),r("th",[e._v("First Name")]),r("th",[e._v("Middle Name")]),r("th",[e._v("Last Name")]),r("th",[e._v("Age")]),r("th",[e._v("Birthday")]),r("th",[e._v("Address")]),r("th",[e._v("Precinct")]),r("th",[e._v("Search")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[r("small",[r("em",[e._v("Version 1.0. This is still very rough and there may be bugs. If this proves useful, we may expand the features and support for additional data.")])])])}],o=r("1da1"),s=(r("96cf"),r("d81d"),r("4de4"),r("4e82"),r("a630"),r("3ca3"),r("d3b7"),r("ddb0"),r("ac1f"),r("1276"),{name:"App",data:function(){return{loading:!1,ssheet:null,data:null,ageLimit:80,votedList:null}},components:{},watch:{data:function(){var e=this;this.votedList=this.data&&this.data.filter((function(e){return"Yes"==e["Voted_1"]||"Yes"==e["Voted?_1"]})).map((function(t){return t.age=e.age(t),t}))}},computed:{filteredList:function(){var e=this;return this.votedList&&this.votedList.filter((function(t){return t.age>e.ageLimit})).sort((function(e,t){return t.age-e.age}))},ageRange:function(){return Array.from(Array(120).keys())}},methods:{age:function(e){return e["Birthday"]?2021-e["Birthday"].split("/")[2]:e["Birthdate"]?2021-e["Birthdate"].split("/")[2]:void 0},openBothWindows:function(e){window.open(this.ancestryUrl(e),"ancestry"),window.open(this.findAGraveUrl(e),"fag")},ancestryUrl:function(e){return"https://www.ancestry.com/search/categories/bmd_death/?name="+encodeURI(e.Name+" "+e.Name_1)+"_"+encodeURI(e.Name_2)+"&event=_missouri-usa&birth="+(e.Birthday||e.Birthdate||"").split("/")[2]+"&birth_x=0-0-0&name_x=1_1"},findAGraveUrl:function(e){return"https://www.findagrave.com/memorial/search?firstname="+encodeURI(e.Name)+"&middlename="+encodeURI(e.Name_1)+"&lastname="+encodeURI(e.Name_2)+"&birthyear="+(e.Birthday||e.Birthdate||"").split("/")[2]+"&birthyearfilter=&deathyear=&deathyearfilter=&location=&locationId=&memorialid=&mcid=&linkedToName=&datefilter=&orderby=r&plot="}},mounted:function(){console.log("mounted");var e=this;window.VueApp=this;var t=document.querySelector("body");t.ondragover=function(e){return e.preventDefault(),this.className="hover",!1},t.addEventListener("drop",function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r.preventDefault(),e.loading=!0,e.$nextTick(Object(o["a"])(regeneratorRuntime.mark((function t(){var n,a,i,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=r.dataTransfer.files[0],t.next=3,n.arrayBuffer();case 3:a=t.sent,i=window.XLSX.read(a),o=i.Sheets[i.SheetNames[0]],e.data=window.XLSX.utils.sheet_to_json(o,{range:1}),e.loading=!1;case 8:case"end":return t.stop()}}),t)}))));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}}),d=s,c=(r("034f"),r("2877")),u=Object(c["a"])(d,a,i,!1,null,null,null),l=u.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(l)}}).$mount("#app")},"85ec":function(e,t,r){}});
//# sourceMappingURL=app.7380e062.js.map