import{f as a}from"../../../../form.2aa3eae8.js";import{n as o}from"../../../../_plugin-vue2_normalizer.7b9a2fe2.js";import{E as s}from"../../../../event-bus.fa2a0358.js";import"../../../../header.31500a75.js";import"../../../../app.e5c25aad.js";import"../../../../vendor/vendor-core.b127d6f1.js";import"../../../../vendor/vendor-others.8d770de0.js";import"../../../../vendor/vendor-essential.41987d0e.js";import"../../../../vendor/vendor-bootstrap-vue.8cf54841.js";import"../../../../vendor/vendor-vue-gtag.e72bb2d4.js";import"../../../../FileUploader.28139c82.js";import"../../../../uploader.4e13ce51.js";import"../../../../momentz.be6fd052.js";const i={extends:a,data(){return{formData:{uuid:null,name:""},initUrl:"config/roles"}},mounted(){this.isLoading=!1}};var l=function(){var t=this,e=t._self._c;return e("form",{on:{submit:function(r){return r.preventDefault(),t.submit.apply(null,arguments)}}},[e("animated-loader",{attrs:{"is-loading":t.isLoading||t.isFetching,"loader-color":t.vars.loaderColor}}),e("base-input",{staticClass:"mb-5",attrs:{"auto-focus":"",label:t.$t("config.role.props.name"),type:"text",name:"name",error:t.formErrors.name},on:{"update:error":function(r){return t.$set(t.formErrors,"name",r)}},model:{value:t.formData.name,callback:function(r){t.$set(t.formData,"name",r)},expression:"formData.name"}}),e("div",{staticClass:"form-footer mt-3"},[e("div",{staticClass:"left-side"},[e("base-button",{attrs:{type:"button",design:"light",tabindex:"-1"},on:{click:function(r){return t.$router.back()}}},[e("i",{staticClass:"fas fa-chevron-left"}),t._v(" "+t._s(t.$t("general.cancel")))]),t.editData?t._e():e("base-checkbox",{staticClass:"ml-3 mt-2",model:{value:t.keepAdding,callback:function(r){t.keepAdding=r},expression:"keepAdding"}},[t._v(" "+t._s(t.$t("general.keep_adding"))+" ")])],1),e("div",{staticClass:"right-side"},[e("base-button",{attrs:{type:"button",design:"light"},on:{click:t.reset}},[t._v(t._s(t.$t("general.reset")))]),e("base-button",{attrs:{type:"submit",design:"primary"}},[t._v(t._s(t.$t("global.save",{attribute:t.$t("config.role.role")})))])],1)])],1)},m=[],c=o(i,l,m,!1,null,null,null,null);const u=c.exports,f={components:{CommonForm:u},beforeRouteLeave(n,t,e){s.$emit("ROUTE_LEAVING",e)}};var d=function(){var t=this,e=t._self._c;return e("base-container",{attrs:{boxed:""}},[e("common-form")],1)},_=[],p=o(f,d,_,!1,null,null,null,null);const L=p.exports;export{L as default};
