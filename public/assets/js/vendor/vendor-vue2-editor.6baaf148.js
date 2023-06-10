import{Q as h}from"./vendor-others.8d770de0.js";/*!
* vue2-editor v2.10.3 
* (c) 2021 David Royer
* Released under the MIT License.
*/var H=[[{header:[!1,1,2,3,4,5,6]}],["bold","italic","underline","strike"],[{align:""},{align:"center"},{align:"right"},{align:"justify"}],["blockquote","code-block"],[{list:"ordered"},{list:"bullet"},{list:"check"}],[{indent:"-1"},{indent:"+1"}],[{color:[]},{background:[]}],["link","image","video"],["clean"]],O={props:{customModules:Array},methods:{registerCustomModules:function(e){this.customModules!==void 0&&this.customModules.forEach(function(i){e.register("modules/"+i.alias,i.module)})}}};function g(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?g=function(e){return typeof e}:g=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(t)}function S(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function T(t,e){for(var i=0;i<e.length;i++){var l=e[i];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(t,l.key,l)}}function L(t,e,i){return e&&T(t.prototype,e),i&&T(t,i),t}function $(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&x(t,e)}function w(t){return w=Object.setPrototypeOf?Object.getPrototypeOf:function(i){return i.__proto__||Object.getPrototypeOf(i)},w(t)}function x(t,e){return x=Object.setPrototypeOf||function(l,r){return l.__proto__=r,l},x(t,e)}function R(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function M(t,e){return e&&(typeof e=="object"||typeof e=="function")?e:R(t)}function z(t,e){return A(t)||N(t,e)||V()}function A(t){if(Array.isArray(t))return t}function N(t,e){var i=[],l=!0,r=!1,o=void 0;try{for(var a=t[Symbol.iterator](),n;!(l=(n=a.next()).done)&&(i.push(n.value),!(e&&i.length===e));l=!0);}catch(d){r=!0,o=d}finally{try{!l&&a.return!=null&&a.return()}finally{if(r)throw o}}return i}function V(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function C(t,e){var i=function(r){return r&&g(r)==="object"};return!i(t)||!i(e)?e:(Object.keys(e).forEach(function(l){var r=t[l],o=e[l];Array.isArray(r)&&Array.isArray(o)?t[l]=r.concat(o):i(r)&&i(o)?t[l]=C(Object.assign({},r),o):t[l]=o}),t)}var j=h.import("blots/block/embed"),_=function(t){$(e,t);function e(){return S(this,e),M(this,w(e).apply(this,arguments))}return e}(j);_.blotName="hr";_.tagName="hr";h.register("formats/horizontal",_);var P=function(){function t(e,i){var l=this;S(this,t),this.quill=e,this.options=i,this.ignoreTags=["PRE"],this.matches=[{name:"header",pattern:/^(#){1,6}\s/g,action:function(o,a,n){var d=n.exec(o);if(!!d){var q=d[0].length;setTimeout(function(){l.quill.formatLine(a.index,0,"header",q-1),l.quill.deleteText(a.index-q,q)},0)}}},{name:"blockquote",pattern:/^(>)\s/g,action:function(o,a){setTimeout(function(){l.quill.formatLine(a.index,1,"blockquote",!0),l.quill.deleteText(a.index-2,2)},0)}},{name:"code-block",pattern:/^`{3}(?:\s|\n)/g,action:function(o,a){setTimeout(function(){l.quill.formatLine(a.index,1,"code-block",!0),l.quill.deleteText(a.index-4,4)},0)}},{name:"bolditalic",pattern:/(?:\*|_){3}(.+?)(?:\*|_){3}/g,action:function(o,a,n,d){var q=n.exec(o),s=q[0],c=q[1],u=d+q.index;o.match(/^([*_ \n]+)$/g)||setTimeout(function(){l.quill.deleteText(u,s.length),l.quill.insertText(u,c,{bold:!0,italic:!0}),l.quill.format("bold",!1)},0)}},{name:"bold",pattern:/(?:\*|_){2}(.+?)(?:\*|_){2}/g,action:function(o,a,n,d){var q=n.exec(o),s=q[0],c=q[1],u=d+q.index;o.match(/^([*_ \n]+)$/g)||setTimeout(function(){l.quill.deleteText(u,s.length),l.quill.insertText(u,c,{bold:!0}),l.quill.format("bold",!1)},0)}},{name:"italic",pattern:/(?:\*|_){1}(.+?)(?:\*|_){1}/g,action:function(o,a,n,d){var q=n.exec(o),s=q[0],c=q[1],u=d+q.index;o.match(/^([*_ \n]+)$/g)||setTimeout(function(){l.quill.deleteText(u,s.length),l.quill.insertText(u,c,{italic:!0}),l.quill.format("italic",!1)},0)}},{name:"strikethrough",pattern:/(?:~~)(.+?)(?:~~)/g,action:function(o,a,n,d){var q=n.exec(o),s=q[0],c=q[1],u=d+q.index;o.match(/^([*_ \n]+)$/g)||setTimeout(function(){l.quill.deleteText(u,s.length),l.quill.insertText(u,c,{strike:!0}),l.quill.format("strike",!1)},0)}},{name:"code",pattern:/(?:`)(.+?)(?:`)/g,action:function(o,a,n,d){var q=n.exec(o),s=q[0],c=q[1],u=d+q.index;o.match(/^([*_ \n]+)$/g)||setTimeout(function(){l.quill.deleteText(u,s.length),l.quill.insertText(u,c,{code:!0}),l.quill.format("code",!1),l.quill.insertText(l.quill.getSelection()," ")},0)}},{name:"hr",pattern:/^([-*]\s?){3}/g,action:function(o,a){var n=a.index-o.length;setTimeout(function(){l.quill.deleteText(n,o.length),l.quill.insertEmbed(n+1,"hr",!0,h.sources.USER),l.quill.insertText(n+2,`
`,h.sources.SILENT),l.quill.setSelection(n+2,h.sources.SILENT)},0)}},{name:"asterisk-ul",pattern:/^(\*|\+)\s$/g,action:function(o,a,n){setTimeout(function(){l.quill.formatLine(a.index,1,"list","unordered"),l.quill.deleteText(a.index-2,2)},0)}},{name:"image",pattern:/(?:!\[(.+?)\])(?:\((.+?)\))/g,action:function(o,a,n){var d=o.search(n),q=o.match(n)[0],s=o.match(/(?:\((.*?)\))/g)[0],c=a.index-q.length-1;d!==-1&&setTimeout(function(){l.quill.deleteText(c,q.length),l.quill.insertEmbed(c,"image",s.slice(1,s.length-1))},0)}},{name:"link",pattern:/(?:\[(.+?)\])(?:\((.+?)\))/g,action:function(o,a,n){var d=o.search(n),q=o.match(n)[0],s=o.match(/(?:\[(.*?)\])/g)[0],c=o.match(/(?:\((.*?)\))/g)[0],u=a.index-q.length-1;d!==-1&&setTimeout(function(){l.quill.deleteText(u,q.length),l.quill.insertText(u,s.slice(1,s.length-1),"link",c.slice(1,c.length-1))},0)}}],this.quill.on("text-change",function(r,o,a){for(var n=0;n<r.ops.length;n++)r.ops[n].hasOwnProperty("insert")&&(r.ops[n].insert===" "?l.onSpace():r.ops[n].insert===`
`&&l.onEnter())})}return L(t,[{key:"isValid",value:function(i,l){return typeof i<"u"&&i&&this.ignoreTags.indexOf(l)===-1}},{key:"onSpace",value:function(){var i=this.quill.getSelection();if(!!i){var l=this.quill.getLine(i.index),r=z(l,2),o=r[0],a=r[1],n=o.domNode.textContent,d=i.index-a;if(this.isValid(n,o.domNode.tagName)){var q=!0,s=!1,c=void 0;try{for(var u=this.matches[Symbol.iterator](),b;!(q=(b=u.next()).done);q=!0){var f=b.value,p=n.match(f.pattern);if(p){console.log("matched:",f.name,n),f.action(n,i,f.pattern,d);return}}}catch(m){s=!0,c=m}finally{try{!q&&u.return!=null&&u.return()}finally{if(s)throw c}}}}}},{key:"onEnter",value:function(){var i=this.quill.getSelection();if(!!i){var l=this.quill.getLine(i.index),r=z(l,2),o=r[0],a=r[1],n=o.domNode.textContent+" ",d=i.index-a;if(i.length=i.index++,this.isValid(n,o.domNode.tagName)){var q=!0,s=!1,c=void 0;try{for(var u=this.matches[Symbol.iterator](),b;!(q=(b=u.next()).done);q=!0){var f=b.value,p=n.match(f.pattern);if(p){console.log("matched",f.name,n),f.action(n,i,f.pattern,d);return}}}catch(m){s=!0,c=m}finally{try{!q&&u.return!=null&&u.return()}finally{if(s)throw c}}}}}}]),t}(),W={name:"VueEditor",mixins:[O],props:{id:{type:String,default:"quill-container"},placeholder:{type:String,default:""},value:{type:String,default:""},disabled:{type:Boolean},editorToolbar:{type:Array,default:function(){return[]}},editorOptions:{type:Object,required:!1,default:function(){return{}}},useCustomImageHandler:{type:Boolean,default:!1},useMarkdownShortcuts:{type:Boolean,default:!1}},data:function(){return{quill:null}},watch:{value:function(e){e!=this.quill.root.innerHTML&&!this.quill.hasFocus()&&(this.quill.root.innerHTML=e)},disabled:function(e){this.quill.enable(!e)}},mounted:function(){this.registerCustomModules(h),this.registerPrototypes(),this.initializeEditor()},beforeDestroy:function(){this.quill=null,delete this.quill},methods:{initializeEditor:function(){this.setupQuillEditor(),this.checkForCustomImageHandler(),this.handleInitialContent(),this.registerEditorEventListeners(),this.$emit("ready",this.quill)},setupQuillEditor:function(){var e={debug:!1,modules:this.setModules(),theme:"snow",placeholder:this.placeholder?this.placeholder:"",readOnly:this.disabled?this.disabled:!1};this.prepareEditorConfig(e),this.quill=new h(this.$refs.quillContainer,e)},setModules:function(){var e={toolbar:this.editorToolbar.length?this.editorToolbar:H};return this.useMarkdownShortcuts&&(h.register("modules/markdownShortcuts",P,!0),e.markdownShortcuts={}),e},prepareEditorConfig:function(e){Object.keys(this.editorOptions).length>0&&this.editorOptions.constructor===Object&&(this.editorOptions.modules&&typeof this.editorOptions.modules.toolbar<"u"&&delete e.modules.toolbar,C(e,this.editorOptions))},registerPrototypes:function(){h.prototype.getHTML=function(){return this.container.querySelector(".ql-editor").innerHTML},h.prototype.getWordCount=function(){return this.container.querySelector(".ql-editor").innerText.length}},registerEditorEventListeners:function(){this.quill.on("text-change",this.handleTextChange),this.quill.on("selection-change",this.handleSelectionChange),this.listenForEditorEvent("text-change"),this.listenForEditorEvent("selection-change"),this.listenForEditorEvent("editor-change")},listenForEditorEvent:function(e){var i=this;this.quill.on(e,function(){for(var l=arguments.length,r=new Array(l),o=0;o<l;o++)r[o]=arguments[o];i.$emit.apply(i,[e].concat(r))})},handleInitialContent:function(){this.value&&(this.quill.root.innerHTML=this.value)},handleSelectionChange:function(e,i){!e&&i?this.$emit("blur",this.quill):e&&!i&&this.$emit("focus",this.quill)},handleTextChange:function(e,i){var l=this.quill.getHTML()==="<p><br></p>"?"":this.quill.getHTML();this.$emit("input",l),this.useCustomImageHandler&&this.handleImageRemoved(e,i)},handleImageRemoved:function(e,i){var l=this,r=this.quill.getContents(),o=r.diff(i),a=o.ops;a.map(function(n){if(n.insert&&n.insert.hasOwnProperty("image")){var d=n.insert.image;l.$emit("image-removed",d)}})},checkForCustomImageHandler:function(){this.useCustomImageHandler===!0&&this.setupCustomImageHandler()},setupCustomImageHandler:function(){var e=this.quill.getModule("toolbar");e.addHandler("image",this.customImageHandler)},customImageHandler:function(){this.$refs.fileInput.click()},emitImageInfo:function(e){var i=function(){var d=document.getElementById("file-upload");d.value=""},l=e.target.files[0],r=this.quill,o=r.getSelection(),a=o.index;this.$emit("image-added",l,r,a,i)}}};function F(t,e,i,l,r,o,a,n,d,q){typeof a!="boolean"&&(d=n,n=a,a=!1);var s=typeof i=="function"?i.options:i;t&&t.render&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns,s._compiled=!0,r&&(s.functional=!0)),l&&(s._scopeId=l);var c;if(o?(c=function(p){p=p||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!p&&typeof __VUE_SSR_CONTEXT__<"u"&&(p=__VUE_SSR_CONTEXT__),e&&e.call(this,d(p)),p&&p._registeredComponents&&p._registeredComponents.add(o)},s._ssrRegister=c):e&&(c=a?function(){e.call(this,q(this.$root.$options.shadowRoot))}:function(f){e.call(this,n(f))}),c)if(s.functional){var u=s.render;s.render=function(p,m){return c.call(m),u(p,m)}}else{var b=s.beforeCreate;s.beforeCreate=b?[].concat(b,c):[c]}return i}var U=F,B=typeof navigator<"u"&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function Q(t){return function(e,i){return D(e,i)}}var v,E={};function D(t,e){var i=B?e.media||"default":t,l=E[i]||(E[i]={ids:new Set,styles:[]});if(!l.ids.has(t)){l.ids.add(t);var r=e.source;if(e.map&&(r+=`
/*# sourceURL=`+e.map.sources[0]+" */",r+=`
/*# sourceMappingURL=data:application/json;base64,`+btoa(unescape(encodeURIComponent(JSON.stringify(e.map))))+" */"),l.element||(l.element=document.createElement("style"),l.element.type="text/css",e.media&&l.element.setAttribute("media",e.media),v===void 0&&(v=document.head||document.getElementsByTagName("head")[0]),v.appendChild(l.element)),"styleSheet"in l.element)l.styles.push(r),l.element.styleSheet.cssText=l.styles.filter(Boolean).join(`
`);else{var o=l.ids.size-1,a=document.createTextNode(r),n=l.element.childNodes;n[o]&&l.element.removeChild(n[o]),n.length?l.element.insertBefore(a,n[o]):l.element.appendChild(a)}}}var G=Q;const J=W;var X=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"quillWrapper"},[t._t("toolbar"),t._v(" "),i("div",{ref:"quillContainer",attrs:{id:t.id}}),t._v(" "),t.useCustomImageHandler?i("input",{ref:"fileInput",staticStyle:{display:"none"},attrs:{id:"file-upload",type:"file",accept:"image/*"},on:{change:function(l){return t.emitImageInfo(l)}}}):t._e()],2)},Y=[];const K=function(t){!t||(t("data-v-776e788e_0",{source:`/*!
 * Quill Editor v1.3.6
 * https://quilljs.com/
 * Copyright (c) 2014, Jason Chen
 * Copyright (c) 2013, salesforce.com
 */.ql-container{box-sizing:border-box;font-family:Helvetica,Arial,sans-serif;font-size:13px;height:100%;margin:0;position:relative}.ql-container.ql-disabled .ql-tooltip{visibility:hidden}.ql-container.ql-disabled .ql-editor ul[data-checked]>li::before{pointer-events:none}.ql-clipboard{left:-100000px;height:1px;overflow-y:hidden;position:absolute;top:50%}.ql-clipboard p{margin:0;padding:0}.ql-editor{box-sizing:border-box;line-height:1.42;height:100%;outline:0;overflow-y:auto;padding:12px 15px;tab-size:4;-moz-tab-size:4;text-align:left;white-space:pre-wrap;word-wrap:break-word}.ql-editor>*{cursor:text}.ql-editor blockquote,.ql-editor h1,.ql-editor h2,.ql-editor h3,.ql-editor h4,.ql-editor h5,.ql-editor h6,.ql-editor ol,.ql-editor p,.ql-editor pre,.ql-editor ul{margin:0;padding:0;counter-reset:list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor ol,.ql-editor ul{padding-left:1.5em}.ql-editor ol>li,.ql-editor ul>li{list-style-type:none}.ql-editor ul>li::before{content:'\\2022'}.ql-editor ul[data-checked=false],.ql-editor ul[data-checked=true]{pointer-events:none}.ql-editor ul[data-checked=false]>li *,.ql-editor ul[data-checked=true]>li *{pointer-events:all}.ql-editor ul[data-checked=false]>li::before,.ql-editor ul[data-checked=true]>li::before{color:#777;cursor:pointer;pointer-events:all}.ql-editor ul[data-checked=true]>li::before{content:'\\2611'}.ql-editor ul[data-checked=false]>li::before{content:'\\2610'}.ql-editor li::before{display:inline-block;white-space:nowrap;width:1.2em}.ql-editor li:not(.ql-direction-rtl)::before{margin-left:-1.5em;margin-right:.3em;text-align:right}.ql-editor li.ql-direction-rtl::before{margin-left:.3em;margin-right:-1.5em}.ql-editor ol li:not(.ql-direction-rtl),.ql-editor ul li:not(.ql-direction-rtl){padding-left:1.5em}.ql-editor ol li.ql-direction-rtl,.ql-editor ul li.ql-direction-rtl{padding-right:1.5em}.ql-editor ol li{counter-reset:list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;counter-increment:list-0}.ql-editor ol li:before{content:counter(list-0,decimal) '. '}.ql-editor ol li.ql-indent-1{counter-increment:list-1}.ql-editor ol li.ql-indent-1:before{content:counter(list-1,lower-alpha) '. '}.ql-editor ol li.ql-indent-1{counter-reset:list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-2{counter-increment:list-2}.ql-editor ol li.ql-indent-2:before{content:counter(list-2,lower-roman) '. '}.ql-editor ol li.ql-indent-2{counter-reset:list-3 list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-3{counter-increment:list-3}.ql-editor ol li.ql-indent-3:before{content:counter(list-3,decimal) '. '}.ql-editor ol li.ql-indent-3{counter-reset:list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-4{counter-increment:list-4}.ql-editor ol li.ql-indent-4:before{content:counter(list-4,lower-alpha) '. '}.ql-editor ol li.ql-indent-4{counter-reset:list-5 list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-5{counter-increment:list-5}.ql-editor ol li.ql-indent-5:before{content:counter(list-5,lower-roman) '. '}.ql-editor ol li.ql-indent-5{counter-reset:list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-6{counter-increment:list-6}.ql-editor ol li.ql-indent-6:before{content:counter(list-6,decimal) '. '}.ql-editor ol li.ql-indent-6{counter-reset:list-7 list-8 list-9}.ql-editor ol li.ql-indent-7{counter-increment:list-7}.ql-editor ol li.ql-indent-7:before{content:counter(list-7,lower-alpha) '. '}.ql-editor ol li.ql-indent-7{counter-reset:list-8 list-9}.ql-editor ol li.ql-indent-8{counter-increment:list-8}.ql-editor ol li.ql-indent-8:before{content:counter(list-8,lower-roman) '. '}.ql-editor ol li.ql-indent-8{counter-reset:list-9}.ql-editor ol li.ql-indent-9{counter-increment:list-9}.ql-editor ol li.ql-indent-9:before{content:counter(list-9,decimal) '. '}.ql-editor .ql-indent-1:not(.ql-direction-rtl){padding-left:3em}.ql-editor li.ql-indent-1:not(.ql-direction-rtl){padding-left:4.5em}.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right{padding-right:3em}.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right{padding-right:4.5em}.ql-editor .ql-indent-2:not(.ql-direction-rtl){padding-left:6em}.ql-editor li.ql-indent-2:not(.ql-direction-rtl){padding-left:7.5em}.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right{padding-right:6em}.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right{padding-right:7.5em}.ql-editor .ql-indent-3:not(.ql-direction-rtl){padding-left:9em}.ql-editor li.ql-indent-3:not(.ql-direction-rtl){padding-left:10.5em}.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right{padding-right:9em}.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right{padding-right:10.5em}.ql-editor .ql-indent-4:not(.ql-direction-rtl){padding-left:12em}.ql-editor li.ql-indent-4:not(.ql-direction-rtl){padding-left:13.5em}.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right{padding-right:12em}.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right{padding-right:13.5em}.ql-editor .ql-indent-5:not(.ql-direction-rtl){padding-left:15em}.ql-editor li.ql-indent-5:not(.ql-direction-rtl){padding-left:16.5em}.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right{padding-right:15em}.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right{padding-right:16.5em}.ql-editor .ql-indent-6:not(.ql-direction-rtl){padding-left:18em}.ql-editor li.ql-indent-6:not(.ql-direction-rtl){padding-left:19.5em}.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right{padding-right:18em}.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right{padding-right:19.5em}.ql-editor .ql-indent-7:not(.ql-direction-rtl){padding-left:21em}.ql-editor li.ql-indent-7:not(.ql-direction-rtl){padding-left:22.5em}.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right{padding-right:21em}.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right{padding-right:22.5em}.ql-editor .ql-indent-8:not(.ql-direction-rtl){padding-left:24em}.ql-editor li.ql-indent-8:not(.ql-direction-rtl){padding-left:25.5em}.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right{padding-right:24em}.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right{padding-right:25.5em}.ql-editor .ql-indent-9:not(.ql-direction-rtl){padding-left:27em}.ql-editor li.ql-indent-9:not(.ql-direction-rtl){padding-left:28.5em}.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right{padding-right:27em}.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right{padding-right:28.5em}.ql-editor .ql-video{display:block;max-width:100%}.ql-editor .ql-video.ql-align-center{margin:0 auto}.ql-editor .ql-video.ql-align-right{margin:0 0 0 auto}.ql-editor .ql-bg-black{background-color:#000}.ql-editor .ql-bg-red{background-color:#e60000}.ql-editor .ql-bg-orange{background-color:#f90}.ql-editor .ql-bg-yellow{background-color:#ff0}.ql-editor .ql-bg-green{background-color:#008a00}.ql-editor .ql-bg-blue{background-color:#06c}.ql-editor .ql-bg-purple{background-color:#93f}.ql-editor .ql-color-white{color:#fff}.ql-editor .ql-color-red{color:#e60000}.ql-editor .ql-color-orange{color:#f90}.ql-editor .ql-color-yellow{color:#ff0}.ql-editor .ql-color-green{color:#008a00}.ql-editor .ql-color-blue{color:#06c}.ql-editor .ql-color-purple{color:#93f}.ql-editor .ql-font-serif{font-family:Georgia,Times New Roman,serif}.ql-editor .ql-font-monospace{font-family:Monaco,Courier New,monospace}.ql-editor .ql-size-small{font-size:.75em}.ql-editor .ql-size-large{font-size:1.5em}.ql-editor .ql-size-huge{font-size:2.5em}.ql-editor .ql-direction-rtl{direction:rtl;text-align:inherit}.ql-editor .ql-align-center{text-align:center}.ql-editor .ql-align-justify{text-align:justify}.ql-editor .ql-align-right{text-align:right}.ql-editor.ql-blank::before{color:rgba(0,0,0,.6);content:attr(data-placeholder);font-style:italic;left:15px;pointer-events:none;position:absolute;right:15px}.ql-snow .ql-toolbar:after,.ql-snow.ql-toolbar:after{clear:both;content:'';display:table}.ql-snow .ql-toolbar button,.ql-snow.ql-toolbar button{background:0 0;border:none;cursor:pointer;display:inline-block;float:left;height:24px;padding:3px 5px;width:28px}.ql-snow .ql-toolbar button svg,.ql-snow.ql-toolbar button svg{float:left;height:100%}.ql-snow .ql-toolbar button:active:hover,.ql-snow.ql-toolbar button:active:hover{outline:0}.ql-snow .ql-toolbar input.ql-image[type=file],.ql-snow.ql-toolbar input.ql-image[type=file]{display:none}.ql-snow .ql-toolbar .ql-picker-item.ql-selected,.ql-snow .ql-toolbar .ql-picker-item:hover,.ql-snow .ql-toolbar .ql-picker-label.ql-active,.ql-snow .ql-toolbar .ql-picker-label:hover,.ql-snow .ql-toolbar button.ql-active,.ql-snow .ql-toolbar button:focus,.ql-snow .ql-toolbar button:hover,.ql-snow.ql-toolbar .ql-picker-item.ql-selected,.ql-snow.ql-toolbar .ql-picker-item:hover,.ql-snow.ql-toolbar .ql-picker-label.ql-active,.ql-snow.ql-toolbar .ql-picker-label:hover,.ql-snow.ql-toolbar button.ql-active,.ql-snow.ql-toolbar button:focus,.ql-snow.ql-toolbar button:hover{color:#06c}.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,.ql-snow .ql-toolbar button.ql-active .ql-fill,.ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,.ql-snow .ql-toolbar button:focus .ql-fill,.ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,.ql-snow .ql-toolbar button:hover .ql-fill,.ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,.ql-snow.ql-toolbar button.ql-active .ql-fill,.ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,.ql-snow.ql-toolbar button:focus .ql-fill,.ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,.ql-snow.ql-toolbar button:hover .ql-fill,.ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill{fill:#06c}.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,.ql-snow .ql-toolbar button.ql-active .ql-stroke,.ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,.ql-snow .ql-toolbar button:focus .ql-stroke,.ql-snow .ql-toolbar button:focus .ql-stroke-miter,.ql-snow .ql-toolbar button:hover .ql-stroke,.ql-snow .ql-toolbar button:hover .ql-stroke-miter,.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,.ql-snow.ql-toolbar button.ql-active .ql-stroke,.ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,.ql-snow.ql-toolbar button:focus .ql-stroke,.ql-snow.ql-toolbar button:focus .ql-stroke-miter,.ql-snow.ql-toolbar button:hover .ql-stroke,.ql-snow.ql-toolbar button:hover .ql-stroke-miter{stroke:#06c}@media (pointer:coarse){.ql-snow .ql-toolbar button:hover:not(.ql-active),.ql-snow.ql-toolbar button:hover:not(.ql-active){color:#444}.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill{fill:#444}.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter{stroke:#444}}.ql-snow{box-sizing:border-box}.ql-snow *{box-sizing:border-box}.ql-snow .ql-hidden{display:none}.ql-snow .ql-out-bottom,.ql-snow .ql-out-top{visibility:hidden}.ql-snow .ql-tooltip{position:absolute;transform:translateY(10px)}.ql-snow .ql-tooltip a{cursor:pointer;text-decoration:none}.ql-snow .ql-tooltip.ql-flip{transform:translateY(-10px)}.ql-snow .ql-formats{display:inline-block;vertical-align:middle}.ql-snow .ql-formats:after{clear:both;content:'';display:table}.ql-snow .ql-stroke{fill:none;stroke:#444;stroke-linecap:round;stroke-linejoin:round;stroke-width:2}.ql-snow .ql-stroke-miter{fill:none;stroke:#444;stroke-miterlimit:10;stroke-width:2}.ql-snow .ql-fill,.ql-snow .ql-stroke.ql-fill{fill:#444}.ql-snow .ql-empty{fill:none}.ql-snow .ql-even{fill-rule:evenodd}.ql-snow .ql-stroke.ql-thin,.ql-snow .ql-thin{stroke-width:1}.ql-snow .ql-transparent{opacity:.4}.ql-snow .ql-direction svg:last-child{display:none}.ql-snow .ql-direction.ql-active svg:last-child{display:inline}.ql-snow .ql-direction.ql-active svg:first-child{display:none}.ql-snow .ql-editor h1{font-size:2em}.ql-snow .ql-editor h2{font-size:1.5em}.ql-snow .ql-editor h3{font-size:1.17em}.ql-snow .ql-editor h4{font-size:1em}.ql-snow .ql-editor h5{font-size:.83em}.ql-snow .ql-editor h6{font-size:.67em}.ql-snow .ql-editor a{text-decoration:underline}.ql-snow .ql-editor blockquote{border-left:4px solid #ccc;margin-bottom:5px;margin-top:5px;padding-left:16px}.ql-snow .ql-editor code,.ql-snow .ql-editor pre{background-color:#f0f0f0;border-radius:3px}.ql-snow .ql-editor pre{white-space:pre-wrap;margin-bottom:5px;margin-top:5px;padding:5px 10px}.ql-snow .ql-editor code{font-size:85%;padding:2px 4px}.ql-snow .ql-editor pre.ql-syntax{background-color:#23241f;color:#f8f8f2;overflow:visible}.ql-snow .ql-editor img{max-width:100%}.ql-snow .ql-picker{color:#444;display:inline-block;float:left;font-size:14px;font-weight:500;height:24px;position:relative;vertical-align:middle}.ql-snow .ql-picker-label{cursor:pointer;display:inline-block;height:100%;padding-left:8px;padding-right:2px;position:relative;width:100%}.ql-snow .ql-picker-label::before{display:inline-block;line-height:22px}.ql-snow .ql-picker-options{background-color:#fff;display:none;min-width:100%;padding:4px 8px;position:absolute;white-space:nowrap}.ql-snow .ql-picker-options .ql-picker-item{cursor:pointer;display:block;padding-bottom:5px;padding-top:5px}.ql-snow .ql-picker.ql-expanded .ql-picker-label{color:#ccc;z-index:2}.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill{fill:#ccc}.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke{stroke:#ccc}.ql-snow .ql-picker.ql-expanded .ql-picker-options{display:block;margin-top:-1px;top:100%;z-index:1}.ql-snow .ql-color-picker,.ql-snow .ql-icon-picker{width:28px}.ql-snow .ql-color-picker .ql-picker-label,.ql-snow .ql-icon-picker .ql-picker-label{padding:2px 4px}.ql-snow .ql-color-picker .ql-picker-label svg,.ql-snow .ql-icon-picker .ql-picker-label svg{right:4px}.ql-snow .ql-icon-picker .ql-picker-options{padding:4px 0}.ql-snow .ql-icon-picker .ql-picker-item{height:24px;width:24px;padding:2px 4px}.ql-snow .ql-color-picker .ql-picker-options{padding:3px 5px;width:152px}.ql-snow .ql-color-picker .ql-picker-item{border:1px solid transparent;float:left;height:16px;margin:2px;padding:0;width:16px}.ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg{position:absolute;margin-top:-9px;right:0;top:50%;width:18px}.ql-snow .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=''])::before,.ql-snow .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=''])::before,.ql-snow .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=''])::before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=''])::before,.ql-snow .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=''])::before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=''])::before{content:attr(data-label)}.ql-snow .ql-picker.ql-header{width:98px}.ql-snow .ql-picker.ql-header .ql-picker-item::before,.ql-snow .ql-picker.ql-header .ql-picker-label::before{content:'Normal'}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="1"]::before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="1"]::before{content:'Heading 1'}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="2"]::before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="2"]::before{content:'Heading 2'}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="3"]::before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="3"]::before{content:'Heading 3'}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="4"]::before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="4"]::before{content:'Heading 4'}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="5"]::before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="5"]::before{content:'Heading 5'}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="6"]::before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="6"]::before{content:'Heading 6'}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="1"]::before{font-size:2em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="2"]::before{font-size:1.5em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="3"]::before{font-size:1.17em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="4"]::before{font-size:1em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="5"]::before{font-size:.83em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="6"]::before{font-size:.67em}.ql-snow .ql-picker.ql-font{width:108px}.ql-snow .ql-picker.ql-font .ql-picker-item::before,.ql-snow .ql-picker.ql-font .ql-picker-label::before{content:'Sans Serif'}.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]::before,.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=serif]::before{content:'Serif'}.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before,.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=monospace]::before{content:'Monospace'}.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]::before{font-family:Georgia,Times New Roman,serif}.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before{font-family:Monaco,Courier New,monospace}.ql-snow .ql-picker.ql-size{width:98px}.ql-snow .ql-picker.ql-size .ql-picker-item::before,.ql-snow .ql-picker.ql-size .ql-picker-label::before{content:'Normal'}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]::before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=small]::before{content:'Small'}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]::before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=large]::before{content:'Large'}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]::before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=huge]::before{content:'Huge'}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]::before{font-size:10px}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]::before{font-size:18px}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]::before{font-size:32px}.ql-snow .ql-color-picker.ql-background .ql-picker-item{background-color:#fff}.ql-snow .ql-color-picker.ql-color .ql-picker-item{background-color:#000}.ql-toolbar.ql-snow{border:1px solid #ccc;box-sizing:border-box;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;padding:8px}.ql-toolbar.ql-snow .ql-formats{margin-right:15px}.ql-toolbar.ql-snow .ql-picker-label{border:1px solid transparent}.ql-toolbar.ql-snow .ql-picker-options{border:1px solid transparent;box-shadow:rgba(0,0,0,.2) 0 2px 8px}.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label{border-color:#ccc}.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options{border-color:#ccc}.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover{border-color:#000}.ql-toolbar.ql-snow+.ql-container.ql-snow{border-top:0}.ql-snow .ql-tooltip{background-color:#fff;border:1px solid #ccc;box-shadow:0 0 5px #ddd;color:#444;padding:5px 12px;white-space:nowrap}.ql-snow .ql-tooltip::before{content:"Visit URL:";line-height:26px;margin-right:8px}.ql-snow .ql-tooltip input[type=text]{display:none;border:1px solid #ccc;font-size:13px;height:26px;margin:0;padding:3px 5px;width:170px}.ql-snow .ql-tooltip a.ql-preview{display:inline-block;max-width:200px;overflow-x:hidden;text-overflow:ellipsis;vertical-align:top}.ql-snow .ql-tooltip a.ql-action::after{border-right:1px solid #ccc;content:'Edit';margin-left:16px;padding-right:8px}.ql-snow .ql-tooltip a.ql-remove::before{content:'Remove';margin-left:8px}.ql-snow .ql-tooltip a{line-height:26px}.ql-snow .ql-tooltip.ql-editing a.ql-preview,.ql-snow .ql-tooltip.ql-editing a.ql-remove{display:none}.ql-snow .ql-tooltip.ql-editing input[type=text]{display:inline-block}.ql-snow .ql-tooltip.ql-editing a.ql-action::after{border-right:0;content:'Save';padding-right:0}.ql-snow .ql-tooltip[data-mode=link]::before{content:"Enter link:"}.ql-snow .ql-tooltip[data-mode=formula]::before{content:"Enter formula:"}.ql-snow .ql-tooltip[data-mode=video]::before{content:"Enter video:"}.ql-snow a{color:#06c}.ql-container.ql-snow{border:1px solid #ccc}`,map:void 0,media:void 0}),t("data-v-776e788e_1",{source:".ql-editor{min-height:200px;font-size:16px}.ql-snow .ql-stroke.ql-thin,.ql-snow .ql-thin{stroke-width:1px!important}.quillWrapper .ql-snow.ql-toolbar{padding-top:8px;padding-bottom:4px}.quillWrapper .ql-snow.ql-toolbar .ql-formats{margin-bottom:10px}.ql-snow .ql-toolbar button svg,.quillWrapper .ql-snow.ql-toolbar button svg{width:22px;height:22px}.quillWrapper .ql-editor ul[data-checked=false]>li::before,.quillWrapper .ql-editor ul[data-checked=true]>li::before{font-size:1.35em;vertical-align:baseline;bottom:-.065em;font-weight:900;color:#222}.quillWrapper .ql-snow .ql-stroke{stroke:rgba(63,63,63,.95);stroke-linecap:square;stroke-linejoin:initial;stroke-width:1.7px}.quillWrapper .ql-picker-label{font-size:15px}.quillWrapper .ql-snow .ql-active .ql-stroke{stroke-width:2.25px}.quillWrapper .ql-toolbar.ql-snow .ql-formats{vertical-align:top}.ql-picker:not(.ql-background){position:relative;top:2px}.ql-picker.ql-color-picker svg{width:22px!important;height:22px!important}.quillWrapper .imageResizeActive img{display:block;cursor:pointer}.quillWrapper .imageResizeActive~div svg{cursor:pointer}",map:void 0,media:void 0}))},Z=void 0,ee=void 0,le=!1;var I=U({render:X,staticRenderFns:Y},K,J,Z,le,ee,G,void 0),te="2.10.3";function y(t){y.installed||(y.installed=!0,t.component("VueEditor",I))}var ie={install:y,version:te,Quill:h,VueEditor:I},k=null;typeof window<"u"?k=window.Vue:typeof global<"u"&&(k=global.Vue);k&&k.use(ie);export{I as V};
