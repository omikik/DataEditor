(function(t){function e(e){for(var o,r,l=e[0],s=e[1],u=e[2],d=0,f=[];d<l.length;d++)r=l[d],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&f.push(c[r][0]),c[r]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);a&&a(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,l=1;l<n.length;l++){var s=n[l];0!==c[s]&&(o=!1)}o&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var o={},c={app:0},i=[];function r(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var a=s;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"2dbf":function(t,e,n){},"3f47":function(t,e,n){"use strict";n("2dbf")},"564e":function(t,e,n){"use strict";n("c086")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23");function c(t,e,n,c,i,r){var l=Object(o["k"])("data-format");return Object(o["g"])(),Object(o["c"])(l)}n("a4d3"),n("e01a"),n("c975");var i=Object(o["p"])("data-v-1798e608");Object(o["i"])("data-v-1798e608");var r={class:"contents"},l={key:0},s={key:0},u={class:"none"},a=Object(o["f"])("option",null,"WebPages",-1),d=Object(o["f"])("option",null,"YouTubePlayList",-1),f=Object(o["f"])("option",null,"YouTubeVideos",-1),b={key:0},j=Object(o["f"])("li",null,Object(o["l"])("articles"),-1),p={class:"new-category"};Object(o["h"])();var O=i((function(t,e,n,c,i,O){var g=Object(o["k"])("up-load"),h=Object(o["k"])("file-export");return Object(o["g"])(),Object(o["c"])("div",r,[Object(o["f"])(g,{value:i.json,onInput:e[1]||(e[1]=function(t){return i.json=t})},null,8,["value"]),Object(o["f"])(h,{json:i.json},null,8,["json"]),(Object(o["g"])(!0),Object(o["c"])(o["a"],null,Object(o["j"])(i.json,(function(t,e){return Object(o["g"])(),Object(o["c"])("div",{key:t.id},[Object(o["f"])("button",{onClick:function(e){return O.clickCategory(t.id)},class:"course-name btn btn-outline-secondary btn-sm"},Object(o["l"])(t.id),9,["onClick"]),-1!==i.openCategoryList.indexOf(t.id)?(Object(o["g"])(),Object(o["c"])("div",l,[(Object(o["g"])(!0),Object(o["c"])(o["a"],null,Object(o["j"])(t.courses,(function(n,c){return Object(o["g"])(),Object(o["c"])("div",{key:n.id},[Object(o["f"])("button",{onClick:function(e){return O.click(t.id,n.id)},class:"categoryBtn btn btn-outline-secondary btn-sm"},Object(o["l"])(n.title),9,["onClick"]),Object(o["f"])("ul",null,[-1!==i.openCourseList.indexOf(e+"-"+c)?(Object(o["g"])(),Object(o["c"])("div",s,[Object(o["f"])("ul",u,[Object(o["f"])("li",null,Object(o["l"])("title:"+n.title),1),Object(o["o"])(Object(o["f"])("input",{"onUpdate:modelValue":function(t){return n.title=t},class:"form-control form-control-sm"},null,8,["onUpdate:modelValue"]),[[o["n"],n.title]]),Object(o["f"])("li",null,Object(o["l"])("type:"+n.type),1),Object(o["o"])(Object(o["f"])("select",{"onUpdate:modelValue":function(t){return n.type=t},class:"form-control form-control-sm",id:"exampleFormControlSelect1"},[a,d,f],8,["onUpdate:modelValue"]),[[o["m"],n.type]]),Object(o["f"])("li",null,Object(o["l"])("id:"+n.id),1),Object(o["f"])("input",{class:"fix-id form-control form-control-sm",value:n.id},null,8,["value"]),Object(o["f"])("button",{onClick:function(e){return O.fixId(t.id,n.id)},class:"idBtn btn btn-outline-secondary btn-sm"},"保存",8,["onClick"]),Object(o["f"])("li",null,Object(o["l"])("description:"+n.description),1),Object(o["o"])(Object(o["f"])("input",{"onUpdate:modelValue":function(t){return n.description=t},class:"form-control form-control-sm"},null,8,["onUpdate:modelValue"]),[[o["n"],n.description]]),Object(o["f"])("li",null,Object(o["l"])("author:"+n.author),1),Object(o["o"])(Object(o["f"])("input",{"onUpdate:modelValue":function(t){return n.author=t},class:"form-control form-control-sm"},null,8,["onUpdate:modelValue"]),[[o["n"],n.author]]),"WebPages"===n.type?(Object(o["g"])(),Object(o["c"])("div",b,[j,Object(o["o"])(Object(o["f"])("input",{"onUpdate:modelValue":function(t){return n.article=t},class:"article form-control form-control-sm"},null,8,["onUpdate:modelValue"]),[[o["n"],n.article]]),Object(o["f"])("button",{onClick:function(e){return O.article(t.id,n.id)},class:"articleBtn btn btn-outline-secondary btn-sm"},"追加",8,["onClick"]),Object(o["f"])("ol",null,[(Object(o["g"])(!0),Object(o["c"])(o["a"],null,Object(o["j"])(n.articleURLs,(function(t,e){return Object(o["g"])(),Object(o["c"])("li",{key:t},[Object(o["e"])(Object(o["l"])(t)+" ",1),Object(o["o"])(Object(o["f"])("input",{"onUpdate:modelValue":function(t){return n.articleURLs[e]=t},class:"article-url form-control form-control-sm"},null,8,["onUpdate:modelValue"]),[[o["n"],n.articleURLs[e]]])])})),128))])])):Object(o["d"])("",!0),Object(o["f"])("button",{onClick:function(e){return O.delCourse(t.id,n.id,n.title)},class:"del-course btn btn-danger btn-sm"},"コース削除",8,["onClick"])])])):Object(o["d"])("",!0)])])})),128)),Object(o["f"])("button",{onClick:function(e){return O.newCourse(t.id)},class:"new-course btn btn-secondary btn-sm"},"コース新規作成",8,["onClick"]),Object(o["f"])("button",{onClick:function(e){return O.delCategory(t.id)},class:"del-category btn btn-danger btn-sm"},"カテゴリー削除",8,["onClick"])])):Object(o["d"])("",!0)])})),128)),Object(o["f"])("div",p,[Object(o["o"])(Object(o["f"])("input",{"onUpdate:modelValue":e[2]||(e[2]=function(e){return t.message=e}),class:"msg"},null,512),[[o["n"],t.message]]),Object(o["f"])("button",{onClick:e[3]||(e[3]=function(t){return O.newCategory()}),class:"new-category-btn btn btn-outline-secondary btn-sm"},"カテゴリー新規作成")])])})),g=(n("4de4"),n("7db0"),n("c740"),n("a434"),Object(o["p"])("data-v-52c885cb"));Object(o["i"])("data-v-52c885cb");var h={class:"div"};Object(o["h"])();var m=g((function(t,e,n,c,i,r){return Object(o["g"])(),Object(o["c"])("div",h,[Object(o["f"])("button",{onClick:e[1]||(e[1]=function(t){return r.FileExport()}),class:"btn btn-secondary btn-sm"},"エクスポート")])})),y=(n("9911"),{name:"FilExport",props:["json"],components:{},data:function(){return{filename:"toc_new.json",filedata:null,link:null}},methods:{FileExport:function(){this.filedata=JSON.stringify(this.json),this.link=document.createElement("a"),this.link.href="data:text/plain,"+encodeURIComponent(this.filedata),this.link.download=this.filename,this.link.click()}}});n("3f47");y.render=m,y.__scopeId="data-v-52c885cb";var C=y,v=Object(o["p"])("data-v-3cd6678c");Object(o["i"])("data-v-3cd6678c");var k={class:"data-upload"},x={for:"data_upload",class:"btn btn-secondary btn-sm"},I=Object(o["e"])("ファイル(JSON)を選択 ");Object(o["h"])();var L=v((function(t,e,n,c,i,r){return Object(o["g"])(),Object(o["c"])("div",k,[Object(o["f"])("label",x,[I,Object(o["f"])("input",{type:"file",id:"data_upload",name:"data_upload",class:"",onChange:e[1]||(e[1]=function(){return r.onFileChange&&r.onFileChange.apply(r,arguments)})},null,32)])])})),U={props:{value:Object},computed:{json:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}},methods:{onFileChange:function(t){var e=this,n=t.target.files[0];if(n){var o=new FileReader;o.onload=function(t){e.json=JSON.parse(t.target.result)},o.readAsText(n)}return this.json}}};n("e180");U.render=L,U.__scopeId="data-v-3cd6678c";var w=U,B={name:"Data",components:{FileExport:C,UpLoad:w},data:function(){return{category:null,index:null,openCategoryList:[],openCourseList:[],json:null}},methods:{clickCategory:function(t){-1!==this.openCategoryList.indexOf(t)?this.openCategoryList=this.openCategoryList.filter((function(e){return e!==t})):this.openCategoryList.push(t)},click:function(t,e){var n=this;this.index=this.getCategoryIndex(t)+"-"+this.getCourseIndex(t,e),-1!==this.openCourseList.indexOf(this.index)?this.openCourseList=this.openCourseList.filter((function(t){return t!==n.index})):(console.log(this.index),this.openCourseList.push(this.index),console.log(this.openCourseList))},fixId:function(t,e){this.getCourseById(t,e).id=document.getElementsByClassName("fix-id")[0].value,console.log(this.json)},article:function(t,e){this.getCourseById(t,e).articleURLs?this.getCourseById(t,e).articleURLs.push(document.getElementsByClassName("article")[0].value):this.getCourseById(t,e).articleURLs=[document.getElementsByClassName("article")[0].value]},newCourse:function(t){this.getCategoryById(t).courses.push({author:"",description:"",id:"",title:"新しいコース",type:""})},newCategory:function(){this.category=document.getElementsByClassName("msg")[0].value,this.category&&(null==this.json?this.json=[{id:this.category,courses:[{author:"",description:"",id:"",title:"新しいコース",type:""}]}]:(this.json.push({id:this.category,courses:[]}),console.log(this.json)))},delCourse:function(t,e,n){confirm(n+"を削除しますか？")&&this.getCategoryById(t).courses.splice(this.getCourseIndex(t,e),1)},delCategory:function(t){var e=this;confirm(this.getCategoryById(t).id+"を削除しますか？")&&(console.log(this.json),this.json=this.json.filter((function(n){return n.id!==e.getCategoryById(t).id})),console.log(this.json))},getCategoryById:function(t){return this.json.find((function(e){return e.id===t}))},getCourseById:function(t,e){return this.getCategoryById(t).courses.find((function(t){return t.id===e}))},getCategoryIndex:function(t){return this.json.findIndex((function(e){return e.id===t}))},getCourseIndex:function(t,e){return this.getCategoryById(t).courses.findIndex((function(t){return t.id===e}))}}};n("564e");B.render=O,B.__scopeId="data-v-1798e608";var _=B,V={name:"App",components:{DataFormat:_}};n("93b7");V.render=c;var F=V;Object(o["b"])(F).mount("#app")},"93b7":function(t,e,n){"use strict";n("94dc")},"94dc":function(t,e,n){},a1c0:function(t,e,n){},c086:function(t,e,n){},e180:function(t,e,n){"use strict";n("a1c0")}});
//# sourceMappingURL=app.f58315b4.js.map