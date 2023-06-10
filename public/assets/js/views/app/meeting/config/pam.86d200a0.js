import{f as s}from"../../../../config-form.d5ff8528.js";import{n as r}from"../../../../_plugin-vue2_normalizer.7b9a2fe2.js";import"../../../../vendor/vendor-core.b127d6f1.js";import"../../../../app.e5c25aad.js";import"../../../../vendor/vendor-others.8d770de0.js";import"../../../../vendor/vendor-essential.41987d0e.js";import"../../../../vendor/vendor-bootstrap-vue.8cf54841.js";import"../../../../vendor/vendor-vue-gtag.e72bb2d4.js";const o={extends:s,data(){return{formData:{enablePam:!1,pamOpenJoinAsGuestPage:!1,pamCanShareScreenForGuest:!1,pamCanShareLinkForGuest:!1,pamCanUseWhiteboardForGuest:!1,type:"meeting"}}},mounted(){this.getInitialData()}};var n=function(){var a=this,e=a._self._c;return e("base-container",{attrs:{boxed:"","with-loader":"","is-loading":a.isLoading,"loader-color":a.vars.loaderColor}},[e("form",{on:{submit:function(t){return t.preventDefault(),a.submit.apply(null,arguments)}}},[e("h5",{staticClass:"mb-4 pb-3 border-bottom"},[a._v(a._s(a.$t("meeting.publicly_accessible_meetings")))]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-md-6 mb-3"},[e("switch-wrapper",{attrs:{label:a.$t("meeting.config.enable_pam")}},[e("base-switch",{model:{value:a.formData.enablePam,callback:function(t){a.$set(a.formData,"enablePam",t)},expression:"formData.enablePam"}})],1)],1),a.formData.enablePam?[e("div",{staticClass:"col-12 col-md-6 mb-3"},[e("switch-wrapper",{attrs:{label:a.$t("meeting.config.pam_open_join_as_guest_page")}},[e("base-switch",{model:{value:a.formData.pamOpenJoinAsGuestPage,callback:function(t){a.$set(a.formData,"pamOpenJoinAsGuestPage",t)},expression:"formData.pamOpenJoinAsGuestPage"}})],1)],1),e("div",{staticClass:"col-12 col-md-6 mb-3"},[e("switch-wrapper",{attrs:{label:a.$t("meeting.config.pam_can_share_screen_for_guest")}},[e("base-switch",{model:{value:a.formData.pamCanShareScreenForGuest,callback:function(t){a.$set(a.formData,"pamCanShareScreenForGuest",t)},expression:"formData.pamCanShareScreenForGuest"}})],1)],1),e("div",{staticClass:"col-12 col-md-6 mb-3"},[e("switch-wrapper",{attrs:{label:a.$t("meeting.config.pam_can_share_link_for_guest")}},[e("base-switch",{model:{value:a.formData.pamCanShareLinkForGuest,callback:function(t){a.$set(a.formData,"pamCanShareLinkForGuest",t)},expression:"formData.pamCanShareLinkForGuest"}})],1)],1),e("div",{staticClass:"col-12 col-md-6 mb-3"},[e("switch-wrapper",{attrs:{label:a.$t("meeting.config.pam_can_use_whiteboard_for_guest")}},[e("base-switch",{model:{value:a.formData.pamCanUseWhiteboardForGuest,callback:function(t){a.$set(a.formData,"pamCanUseWhiteboardForGuest",t)},expression:"formData.pamCanUseWhiteboardForGuest"}})],1)],1)]:a._e()],2),e("div",{staticClass:"form-footer mt-5"},[e("div",{staticClass:"left-side"},[e("base-button",{attrs:{type:"button",design:"light",tabindex:"-1"},on:{click:function(t){return a.$router.back()}}},[e("i",{staticClass:"fas fa-chevron-left"}),a._v(" "+a._s(a.$t("general.cancel")))])],1),e("div",{staticClass:"right-side"},[e("base-button",{attrs:{type:"button",design:"light"},on:{click:a.reset}},[a._v(a._s(a.$t("general.reset")))]),e("base-button",{attrs:{type:"submit",design:"primary"}},[e("i",{staticClass:"fas fa-save"}),a._v(" "+a._s(a.$t("general.save")))])],1)])])])},i=[],l=r(o,n,i,!1,null,null,null,null);const h=l.exports;export{h as default};
