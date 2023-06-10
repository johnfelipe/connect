import{f as s}from"../../auth-form.8b4968ff.js";import{n as a}from"../../_plugin-vue2_normalizer.7b9a2fe2.js";import"../../vendor/vendor-core.b127d6f1.js";import"../../guest-footer.14dd9e88.js";import"../../AppLogo.f7561746.js";const i={extends:s,data(){return{formData:{twoFactorCode:""}}},methods:{submit(){this.isLoading=!0;let r=this.$route.query;this.CheckTwoFactorCode({twoFactorCode:this.formData.twoFactorCode}).then(t=>{let o=t.reload?{name:"appDashboard",query:{reload:1}}:{name:"appDashboard"};r&&r.ref&&this.$router.resolve(r.ref)&&(o=this.$router.resolve(r.ref).route),this.ResetTwoFactorSet().then(()=>{this.$router.push(o)}).catch(e=>{this.isLoading=!1,this.formErrors=formUtil.handleErrors(e)})}).catch(t=>{this.isLoading=!1,this.formErrors=formUtil.handleErrors(t)})},logout(){this.isLoading=!0,this.Logout().then(()=>{this.$router.push({name:"login"})})}}};var n=function(){var t=this,o=t._self._c;return o("div",{staticClass:"guest-page"},[o("box",[o("animated-loader",{attrs:{"is-loading":t.isLoading,"loader-color":t.vars.loaderColor}}),o("guest-header",[o("h5",[t._v(t._s(t.$t("auth.security.page_title")))])]),o("section",{attrs:{role:"main"}},[o("form",{on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[o("base-input",{staticClass:"mb-3",attrs:{"auto-focus":"",label:t.$t("auth.security.props.two_factor_code"),type:"text",name:"twoFactorCode","addon-left-icon":"fas fa-key",error:t.formErrors.twoFactorCode},on:{"update:error":function(e){return t.$set(t.formErrors,"twoFactorCode",e)}},model:{value:t.formData.twoFactorCode,callback:function(e){t.$set(t.formData,"twoFactorCode",e)},expression:"formData.twoFactorCode"}}),o("div",{staticClass:"text-center"},[o("base-button",{staticClass:"my-4 text-lg",attrs:{type:"submit",design:"primary",block:""}},[t._v(t._s(t.$t("general.proceed")))])],1),o("div",{staticClass:"form-group m-b-0"},[o("div",{staticClass:"col-sm-12 text-center"},[o("h6",{staticClass:"text-uppercase"},[t._v(t._s(t.$t("general.or")))]),o("p",[o("base-button",{attrs:{type:"button",design:"link"},on:{click:t.logout}},[o("i",{staticClass:"fas fa-power-off"}),o("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.$t("auth.logout")))])])],1)])])],1)])],1),t.configs.system?o("guest-footer",{attrs:{"footer-credit":t.configs.system.footerCredit,version:t.configs.system.version}}):t._e()],1)},c=[],l=a(i,n,c,!1,null,"8d0e7a9a",null,null);const h=l.exports;export{h as default};