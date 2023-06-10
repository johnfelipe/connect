import{f as a}from"../../../../config-form.d5ff8528.js";import{n as e}from"../../../../_plugin-vue2_normalizer.7b9a2fe2.js";import"../../../../vendor/vendor-core.b127d6f1.js";import"../../../../app.e5c25aad.js";import"../../../../vendor/vendor-others.8d770de0.js";import"../../../../vendor/vendor-essential.41987d0e.js";import"../../../../vendor/vendor-bootstrap-vue.8cf54841.js";import"../../../../vendor/vendor-vue-gtag.e72bb2d4.js";const i={extends:a,data(){return{formData:{facebookLink:"",twitterLink:"",linkedinLink:"",youtubeLink:"",instagramLink:"",skypeLink:"",type:"social"}}}};var n=function(){var t=this,o=t._self._c;return o("base-container",{attrs:{boxed:"","with-loader":"","is-loading":t.isLoading,"loader-color":t.vars.loaderColor}},[o("form",{on:{submit:function(r){return r.preventDefault(),t.submit.apply(null,arguments)}}},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-12 mb-4"},[o("base-input",{attrs:{"auto-focus":"",label:t.$t("config.social.url",{attribute:t.$t("config.social.facebook")}),type:"text",error:t.formErrors.facebookLink,"addon-left-icon":"fab fa-facebook"},on:{"update:error":function(r){return t.$set(t.formErrors,"facebookLink",r)}},model:{value:t.formData.facebookLink,callback:function(r){t.$set(t.formData,"facebookLink",r)},expression:"formData.facebookLink"}})],1),o("div",{staticClass:"col-12 mb-4"},[o("base-input",{attrs:{label:t.$t("config.social.url",{attribute:t.$t("config.social.twitter")}),type:"text",error:t.formErrors.twitterLink,"addon-left-icon":"fab fa-twitter"},on:{"update:error":function(r){return t.$set(t.formErrors,"twitterLink",r)}},model:{value:t.formData.twitterLink,callback:function(r){t.$set(t.formData,"twitterLink",r)},expression:"formData.twitterLink"}})],1),o("div",{staticClass:"col-12 mb-4"},[o("base-input",{attrs:{label:t.$t("config.social.url",{attribute:t.$t("config.social.linkedin")}),type:"text",error:t.formErrors.linkedinLink,"addon-left-icon":"fab fa-linkedin"},on:{"update:error":function(r){return t.$set(t.formErrors,"linkedinLink",r)}},model:{value:t.formData.linkedinLink,callback:function(r){t.$set(t.formData,"linkedinLink",r)},expression:"formData.linkedinLink"}})],1),o("div",{staticClass:"col-12 mb-4"},[o("base-input",{attrs:{label:t.$t("config.social.url",{attribute:t.$t("config.social.youtube")}),type:"text",error:t.formErrors.youtubeLink,"addon-left-icon":"fab fa-youtube"},on:{"update:error":function(r){return t.$set(t.formErrors,"youtubeLink",r)}},model:{value:t.formData.youtubeLink,callback:function(r){t.$set(t.formData,"youtubeLink",r)},expression:"formData.youtubeLink"}})],1),o("div",{staticClass:"col-12 mb-4"},[o("base-input",{attrs:{label:t.$t("config.social.url",{attribute:t.$t("config.social.instagram")}),type:"text",error:t.formErrors.instagramLink,"addon-left-icon":"fab fa-instagram"},on:{"update:error":function(r){return t.$set(t.formErrors,"instagramLink",r)}},model:{value:t.formData.instagramLink,callback:function(r){t.$set(t.formData,"instagramLink",r)},expression:"formData.instagramLink"}})],1),o("div",{staticClass:"col-12 mb-4"},[o("base-input",{attrs:{label:t.$t("config.social.url",{attribute:t.$t("config.social.skype")}),type:"text",error:t.formErrors.skypeLink,"addon-left-icon":"fab fa-skype"},on:{"update:error":function(r){return t.$set(t.formErrors,"skypeLink",r)}},model:{value:t.formData.skypeLink,callback:function(r){t.$set(t.formData,"skypeLink",r)},expression:"formData.skypeLink"}})],1)]),o("div",{staticClass:"text-right mt-5"},[o("base-button",{attrs:{type:"button",design:"light",click:"reset"}},[t._v(t._s(t.$t("general.reset")))]),o("base-button",{attrs:{type:"submit",design:"primary"}},[t._v(t._s(t.$t("general.save")))])],1)])])},s=[],l=e(i,n,s,!1,null,null,null,null);const g=l.exports;export{g as default};