(function(t){function e(e){for(var o,i,l=e[0],s=e[1],u=e[2],d=0,f=[];d<l.length;d++)i=l[d],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&f.push(c[i][0]),c[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);a&&a(e);while(f.length)f.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,l=1;l<n.length;l++){var s=n[l];0!==c[s]&&(o=!1)}o&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},c={app:0},r=[];function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var a=s;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"2dbf":function(t,e,n){},"3f47":function(t,e,n){"use strict";n("2dbf")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23");function c(t,e,n,c,r,i){var l=Object(o["k"])("data-format");return Object(o["g"])(),Object(o["c"])(l)}n("a4d3"),n("e01a"),n("c975");var r=Object(o["o"])("data-v-368333b4");Object(o["i"])("data-v-368333b4");var i={class:"contents"},l={key:0},s={key:0},u={class:"none"},a={key:0},d=Object(o["f"])("li",null,Object(o["l"])("articles"),-1),f={class:"new-category"};Object(o["h"])();var b=r((function(t,e,n,c,r,b){var j=Object(o["k"])("up-load"),p=Object(o["k"])("file-export");return Object(o["g"])(),Object(o["c"])("div",i,[Object(o["f"])(j,{value:r.json,onInput:e[1]||(e[1]=function(t){return r.json=t})},null,8,["value"]),Object(o["f"])(p,{json:r.json},null,8,["json"]),(Object(o["g"])(!0),Object(o["c"])(o["a"],null,Object(o["j"])(r.json,(function(t){return Object(o["g"])(),Object(o["c"])("div",{key:t.id},[Object(o["f"])("button",{onClick:function(e){return b.clickCategory(t.id)},class:"course-name btn btn-outline-secondary btn-sm"},Object(o["l"])(t.id),9,["onClick"]),-1!==r.openCategoryList.indexOf(t.id)?(Object(o["g"])(),Object(o["c"])("div",l,[(Object(o["g"])(!0),Object(o["c"])(o["a"],null,Object(o["j"])(t.courses,(function(e){return Object(o["g"])(),Object(o["c"])("div",{key:e.id},[Object(o["f"])("button",{onClick:function(t){return b.click(e.id)},class:"categoryBtn btn btn-outline-secondary btn-sm"},Object(o["l"])(e.title),9,["onClick"]),Object(o["f"])("ul",null,[-1!==r.openCourseList.indexOf(e.id)?(Object(o["g"])(),Object(o["c"])("div",s,[Object(o["f"])("ul",u,[Object(o["f"])("li",null,Object(o["l"])("title:"+e.title),1),Object(o["n"])(Object(o["f"])("input",{"onUpdate:modelValue":function(t){return e.title=t},id:"course.id",class:"form-control form-control-sm"},null,8,["onUpdate:modelValue"]),[[o["m"],e.title]]),Object(o["f"])("li",null,Object(o["l"])("type:"+e.type),1),Object(o["n"])(Object(o["f"])("input",{"onUpdate:modelValue":function(t){return e.type=t},id:"course.id",class:"form-control form-control-sm"},null,8,["onUpdate:modelValue"]),[[o["m"],e.type]]),Object(o["f"])("li",null,Object(o["l"])("id:"+e.id),1),Object(o["n"])(Object(o["f"])("input",{"onUpdate:modelValue":function(t){return e.id=t},class:"form-control form-control-sm"},null,8,["onUpdate:modelValue"]),[[o["m"],e.id]]),Object(o["f"])("li",null,Object(o["l"])("description:"+e.description),1),Object(o["n"])(Object(o["f"])("input",{"onUpdate:modelValue":function(t){return e.description=t},class:"form-control form-control-sm"},null,8,["onUpdate:modelValue"]),[[o["m"],e.description]]),Object(o["f"])("li",null,Object(o["l"])("author:"+e.author),1),Object(o["n"])(Object(o["f"])("input",{"onUpdate:modelValue":function(t){return e.author=t},class:"form-control form-control-sm"},null,8,["onUpdate:modelValue"]),[[o["m"],e.author]]),"WebPages"===e.type?(Object(o["g"])(),Object(o["c"])("div",a,[d,Object(o["n"])(Object(o["f"])("input",{"onUpdate:modelValue":function(t){return e.article=t},class:"article form-control form-control-sm"},null,8,["onUpdate:modelValue"]),[[o["m"],e.article]]),Object(o["f"])("button",{onClick:function(n){return b.article(t.id,e.id)},class:"articleBtn btn btn-secondary btn-sm"},"追加",8,["onClick"]),Object(o["f"])("ol",null,[(Object(o["g"])(!0),Object(o["c"])(o["a"],null,Object(o["j"])(e.articleURLs,(function(t,n){return Object(o["g"])(),Object(o["c"])("li",{key:t},[Object(o["e"])(Object(o["l"])(t)+" ",1),Object(o["n"])(Object(o["f"])("input",{"onUpdate:modelValue":function(t){return e.articleURLs[n]=t},class:"article-url form-control form-control-sm"},null,8,["onUpdate:modelValue"]),[[o["m"],e.articleURLs[n]]])])})),128))])])):Object(o["d"])("",!0),Object(o["f"])("button",{onClick:function(n){return b.delCourse(t.id,e.id,e.title)},class:"del-course btn btn-danger btn-sm"},"コース削除",8,["onClick"])])])):Object(o["d"])("",!0)])])})),128)),Object(o["f"])("button",{onClick:function(e){return b.newCourse(t.id)},class:"new-course btn btn-secondary btn-sm"},"コース新規作成",8,["onClick"]),Object(o["f"])("button",{onClick:function(e){return b.delCategory(t.id)},class:"del-category btn btn-danger btn-sm"},"カテゴリー削除",8,["onClick"])])):Object(o["d"])("",!0)])})),128)),Object(o["f"])("div",f,[Object(o["n"])(Object(o["f"])("input",{"onUpdate:modelValue":e[2]||(e[2]=function(e){return t.message=e}),class:"msg"},null,512),[[o["m"],t.message]]),Object(o["f"])("button",{onClick:e[3]||(e[3]=function(t){return b.newCategory()}),class:"new-category-btn btn btn-outline-secondary btn-sm"},"カテゴリー新規作成")])])})),j=(n("4de4"),n("7db0"),n("c740"),n("a434"),Object(o["o"])("data-v-52c885cb"));Object(o["i"])("data-v-52c885cb");var p={class:"div"};Object(o["h"])();var O=j((function(t,e,n,c,r,i){return Object(o["g"])(),Object(o["c"])("div",p,[Object(o["f"])("button",{onClick:e[1]||(e[1]=function(t){return i.FileExport()}),class:"btn btn-secondary btn-sm"},"エクスポート")])})),m=(n("9911"),{name:"FilExport",props:["json"],components:{},data:function(){return{filename:"toc_new.json",filedata:null,link:null}},methods:{FileExport:function(){this.filedata=JSON.stringify(this.json),this.link=document.createElement("a"),this.link.href="data:text/plain,"+encodeURIComponent(this.filedata),this.link.download=this.filename,this.link.click()}}});n("3f47");m.render=O,m.__scopeId="data-v-52c885cb";var g=m,y=Object(o["o"])("data-v-3cd6678c");Object(o["i"])("data-v-3cd6678c");var h={class:"data-upload"},v={for:"data_upload",class:"btn btn-secondary btn-sm"},C=Object(o["e"])("ファイル(JSON)を選択 ");Object(o["h"])();var k=y((function(t,e,n,c,r,i){return Object(o["g"])(),Object(o["c"])("div",h,[Object(o["f"])("label",v,[C,Object(o["f"])("input",{type:"file",id:"data_upload",name:"data_upload",class:"",onChange:e[1]||(e[1]=function(){return i.onFileChange&&i.onFileChange.apply(i,arguments)})},null,32)])])})),U={props:{value:Object},computed:{json:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}},methods:{onFileChange:function(t){var e=this,n=t.target.files[0];if(n){var o=new FileReader;o.onload=function(t){e.json=JSON.parse(t.target.result)},o.readAsText(n)}return this.json}}};n("e180");U.render=k,U.__scopeId="data-v-3cd6678c";var w=U,x={name:"Data",components:{FileExport:g,UpLoad:w},data:function(){return{category:null,openCategoryList:[],openCourseList:[],json:null}},methods:{clickCategory:function(t){-1!==this.openCategoryList.indexOf(t)?this.openCategoryList=this.openCategoryList.filter((function(e){return e!==t})):this.openCategoryList.push(t)},click:function(t){-1!==this.openCourseList.indexOf(t)?this.openCourseList=this.openCourseList.filter((function(e){return e!==t})):this.openCourseList.push(t)},article:function(t,e){this.getCourseById(t,e).articleURLs?this.getCourseById(t,e).articleURLs.push(document.getElementsByClassName("article")[0].value):this.getCourseById(t,e).articleURLs=[document.getElementsByClassName("article")[0].value]},newCourse:function(t){this.getCategoryById(t).courses.push({author:"",description:"",id:"",title:"新しいコース",type:""})},newCategory:function(){this.category=document.getElementsByClassName("msg")[0].value,this.category&&(null==this.json?this.json=[{id:this.category,courses:[{author:"",description:"",id:"",title:"新しいコース",type:""}]}]:(this.json.push({id:this.category,courses:[]}),console.log(this.json)))},delCourse:function(t,e,n){confirm(n+"を削除しますか？")&&this.getCategoryById(t).courses.splice(this.getCourseIndex(t,e),1)},delCategory:function(t){var e=this;confirm(this.getCategoryById(t).id+"を削除しますか？")&&(console.log(this.json),this.json=this.json.filter((function(n){return n.id!==e.getCategoryById(t).id})),console.log(this.json))},getCategoryById:function(t){return this.json.find((function(e){return e.id===t}))},getCourseById:function(t,e){return this.getCategoryById(t).courses.find((function(t){return t.id===e}))},getCourseIndex:function(t,e){return this.getCategoryById(t).courses.findIndex((function(t){return t.id===e}))}}};n("8d34");x.render=b,x.__scopeId="data-v-368333b4";var I=x,L={name:"App",components:{DataFormat:I}};n("93b7");L.render=c;var B=L;Object(o["b"])(B).mount("#app")},"8d34":function(t,e,n){"use strict";n("d761")},"93b7":function(t,e,n){"use strict";n("94dc")},"94dc":function(t,e,n){},a1c0:function(t,e,n){},d761:function(t,e,n){},e180:function(t,e,n){"use strict";n("a1c0")}});
//# sourceMappingURL=app.255ee46e.js.map