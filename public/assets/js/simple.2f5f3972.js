import{A as o}from"./AppLogo.f7561746.js";import{m as i}from"./vendor/vendor-core.b127d6f1.js";import{n as c}from"./_plugin-vue2_normalizer.7b9a2fe2.js";const a={components:{AppLogo:o},props:["customConfigs"],computed:{...i("config",["configs"]),computedConfig(){return this.customConfigs?this.customConfigs:{}},computedBasic(){return this.customConfigs&&this.customConfigs.basic?this.customConfigs.basic:this.configs.basic},address(){let t=this.computedBasic.orgAddressLine1;return t=this.computedBasic.orgAddressLine2?t?`${t}, ${this.computedBasic.orgAddressLine2}`:this.computedBasic.orgAddressLine2:t,t},region(){let t=this.computedBasic.orgCity;return t=t?this.computedBasic.orgZipcode?`${t} - ${this.computedBasic.orgZipcode}`:t:"",t=this.computedBasic.orgState?t?`${t}, ${this.computedBasic.orgState}`:this.computedBasic.orgState:t,t=this.computedBasic.orgCountry?t?`${t}, ${this.computedBasic.orgCountry}`:this.computedBasic.orgCountry:t,t}}};var r=function(){var s=this,e=s._self._c;return e("header",{class:["print-header print-header-simple",`layout-${s.computedConfig.printHeaderLayout}`]},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-6"},[s.computedConfig.printHeaderLogo?e("app-logo",{attrs:{place:"print-header",assets:s.computedConfig&&s.computedConfig.assets?s.computedConfig.assets:null}}):s.computedBasic.orgName?e("h3",{staticClass:"font-weight-700"},[s._v(s._s(s.computedBasic.orgName))]):s._e()],1),s.computedBasic&&s.computedConfig.printHeaderSellerInfo?e("div",{staticClass:"col-6 text-right contact-details"},[s.computedConfig.printHeaderLogo&&s.computedBasic.orgName?e("h4",{staticClass:"font-weight-700"},[s._v(s._s(s.computedBasic.orgName))]):s._e(),s.address?e("p",[s._v(s._s(s.address))]):s._e(),s.region?e("p",[s._v(s._s(s.region))]):s._e(),s.computedBasic.phone||s.computedBasic.email?e("h6",[s.computedBasic.phone?e("span",{},[s._v(s._s(s.$t("config.basic.phone"))+": "),e("span",{staticClass:"font-weight-700"},[s._v(s._s(s.computedBasic.phone))])]):s._e(),s.computedBasic.email?e("span",{staticClass:"pre-comma"},[s._v(s._s(s.$t("config.basic.email"))+": "),e("span",{staticClass:"font-weight-700"},[s._v(s._s(s.computedBasic.email))])]):s._e()]):s._e()]):s._e()])])},n=[],p=c(a,r,n,!1,null,null,null,null);const g=p.exports;export{g as P};
