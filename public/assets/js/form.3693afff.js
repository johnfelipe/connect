import{f as a}from"./form.2aa3eae8.js";import{S as r}from"./modal-form.d6b3b51a.js";import{n}from"./_plugin-vue2_normalizer.7b9a2fe2.js";const o={extends:a,components:{SegmentForm:r},data(){return{formData:{uuid:null,name:"",email:"",segments:[]},preRequisite:{segments:[]},formLabels:{name:$t("contact.props.name"),email:$t("contact.props.email"),segments:$t("contact.segment.segments")},initUrl:"contacts"}},mounted(){this.getInitialData()}};var i=function(){var e=this,t=e._self._c;return t("form",{on:{submit:function(s){return s.preventDefault(),e.submit.apply(null,arguments)}}},[t("animated-loader",{attrs:{"is-loading":e.isLoading||e.isFetching,"loader-color":e.vars.loaderColor}}),t("div",{staticClass:"row"},[t("div",{staticClass:"col-12 col-md-6 mb-3"},[t("base-input",{attrs:{"auto-focus":"",label:e.formLabels.email,type:"text",error:e.formErrors.email,required:""},on:{"update:error":function(s){return e.$set(e.formErrors,"email",s)}},model:{value:e.formData.email,callback:function(s){e.$set(e.formData,"email",s)},expression:"formData.email"}})],1),t("div",{staticClass:"col-12 col-md-6 mb-3"},[t("base-input",{attrs:{label:e.formLabels.name,type:"text",error:e.formErrors.name},on:{"update:error":function(s){return e.$set(e.formErrors,"name",s)}},model:{value:e.formData.name,callback:function(s){e.$set(e.formData,"name",s)},expression:"formData.name"}})],1),t("div",{staticClass:"col-12 mb-3"},[t("base-select",{attrs:{options:e.preRequisite.segments,label:e.formLabels.segments,error:e.formErrors.segments,multiple:"","close-on-select":!1,"allow-empty":!0,"add-new-modal":!0,"needed-permission":"access-contact"},on:{"update:error":function(s){return e.$set(e.formErrors,"segments",s)}},scopedSlots:e._u([{key:"addNewModal",fn:function(){return[t("segment-form",{attrs:{"push-to-arr":""},on:{close:e.newModalClose}})]},proxy:!0}]),model:{value:e.formData.segments,callback:function(s){e.$set(e.formData,"segments",s)},expression:"formData.segments"}})],1)]),e.formHasErrors?t("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[t("h6",{staticClass:"m-0"},[e._v(e._s(e.$t("general.form_has_errors")))])]):e._e(),t("div",{staticClass:"form-footer mt-3"},[t("div",{staticClass:"left-side"},[t("base-button",{attrs:{type:"button",design:"light",tabindex:"-1"},on:{click:function(s){return e.$router.back()}}},[t("i",{staticClass:"fas fa-chevron-left"}),e._v(" "+e._s(e.$t("general.cancel")))]),e.showKeepAdding?t("base-checkbox",{staticClass:"ml-3 mt-2",model:{value:e.keepAdding,callback:function(s){e.keepAdding=s},expression:"keepAdding"}},[e._v(" "+e._s(e.$t("general.keep_adding"))+" ")]):e._e()],1),t("div",{staticClass:"right-side"},[t("base-button",{attrs:{type:"button",design:"light"},on:{click:e.reset}},[e._v(e._s(e.$t("general.reset")))]),t("base-button",{attrs:{type:"submit",design:"primary"}},[t("i",{staticClass:"fas fa-save"}),e._v(" "+e._s(e.$t("global.save",{attribute:e.$t("contact.contact")})))])],1)]),e.showKeepAdding&&e.keepAdding?[t("keep-adding-form",{attrs:{"keep-adding-fields":e.keepAddingFields,"keep-adding-option":e.keepAddingOption,"keep-adding-selected-fields":e.keepAddingSelectedFields,"is-loading":e.isLoading},on:{optionUpdated:function(s){e.keepAddingOption=s},fieldsUpdated:function(s){e.keepAddingSelectedFields=s}}})]:e._e()],2)},l=[],m=n(o,i,l,!1,null,null,null,null);const p=m.exports;export{p as C};
