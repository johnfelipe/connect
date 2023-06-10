import{n as l}from"../../../../nav_icon_alignment_left.d6aa9fcc.js";import{f as n}from"../../../../ui-config-form.20739825.js";import{n as r}from"../../../../_plugin-vue2_normalizer.7b9a2fe2.js";import"../../../../app.e5c25aad.js";import"../../../../vendor/vendor-core.b127d6f1.js";import"../../../../vendor/vendor-others.8d770de0.js";import"../../../../vendor/vendor-essential.41987d0e.js";import"../../../../vendor/vendor-bootstrap-vue.8cf54841.js";import"../../../../vendor/vendor-vue-gtag.e72bb2d4.js";const i={props:{colors:{type:[Object],required:!0,default(){return{pageBackgroundColor:"light",pageContainerBackgroundColor:"white",pageHeaderBackgroundColor:"transparent",leftSidebarColor:"dark-primary",rightSidebarColor:"white",modalSidebarColor:"white",specialSidebarColor:"secondary",topNavbarColor:"black"}}}}};var c=function(){var t=this,e=t._self._c;return e("div",{staticClass:"swatch-box"},[t._l(t.colors,function(a){return[a!==!0&&a!==!1?e("div",{class:["swatch-color",`bg-${a}`]}):t._e()]})],2)},m=[],d=r(i,c,m,!1,null,null,null,null);const u=d.exports;const _={extends:n,components:{Swatch:u},data(){return{navIconAlignmentLeft:l}},computed:{currentColors(){return{pageBackgroundColor:this.formData.pageBackgroundColor,pageContainerBackgroundColor:this.formData.pageContainerBackgroundColor,pageHeaderBackgroundColor:this.formData.pageHeaderBackgroundColor,leftSidebarColor:this.formData.leftSidebarColor,rightSidebarColor:this.formData.rightSidebarColor,modalSidebarColor:this.formData.modalSidebarColor,specialSidebarColor:this.formData.specialSidebarColor,topNavbarColor:this.formData.topNavbarColor}}}};var f=function(){var t=this,e=t._self._c;return e("base-container",{attrs:{boxed:"","with-loader":"","is-loading":t.isLoading,"loader-color":t.vars.loaderColor}},[e("form",{on:{submit:function(a){return a.preventDefault(),t.submit.apply(null,arguments)}}},[e("h4",[t._v(t._s(t.$t("config.ui.color_scheme")))]),e("hr",{staticClass:"mt-3 mb-4"}),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 mb-5"},[e("div",{staticClass:"d-flex align-items-center flex-wrap"},[t._l(t.colorSchemes,function(a){return e("base-radio",{key:a.key,staticClass:"scheme-item-class",attrs:{value:a.key,inline:"","has-image":""},model:{value:t.formData.colorScheme,callback:function(s){t.$set(t.formData,"colorScheme",s)},expression:"formData.colorScheme"}},[e("img",{attrs:{src:t.navIconAlignmentLeft}}),e("swatch",{staticClass:"mt-3",attrs:{colors:t.actions.colorScheme[a.key]}}),e("div",{staticClass:"mt-2 text-center text-muted"},[t._v(t._s(a.title))])],1)}),e("base-radio",{staticClass:"scheme-item-class",attrs:{value:"custom",inline:"","has-image":""},model:{value:t.formData.colorScheme,callback:function(a){t.$set(t.formData,"colorScheme",a)},expression:"formData.colorScheme"}},[e("img",{attrs:{src:t.navIconAlignmentLeft}}),e("swatch",{staticClass:"mt-3",attrs:{colors:t.currentColors}}),e("div",{staticClass:"mt-2 text-center text-muted"},[t._v("Custom")])],1)],2)])]),e("div",{staticClass:"text-right mt-5"},[e("base-button",{attrs:{type:"button",design:"light"},on:{click:t.reset}},[t._v(t._s(t.$t("general.reset")))]),e("base-button",{attrs:{type:"submit",design:"primary"}},[t._v(t._s(t.$t("general.save")))])],1)])])},p=[],C=r(_,f,p,!1,null,"d8880fef",null,null);const w=C.exports;export{w as default};