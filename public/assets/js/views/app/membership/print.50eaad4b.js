import{v as i}from"../../../view.cea60f2b.js";import{h as a}from"../../../header.31500a75.js";import{P as r}from"../../../simple.2f5f3972.js";import{n}from"../../../_plugin-vue2_normalizer.7b9a2fe2.js";import"../../../helpers/transformers.633d09cc.js";import"../../../app.e5c25aad.js";import"../../../vendor/vendor-core.b127d6f1.js";import"../../../vendor/vendor-others.8d770de0.js";import"../../../vendor/vendor-essential.41987d0e.js";import"../../../vendor/vendor-bootstrap-vue.8cf54841.js";import"../../../vendor/vendor-vue-gtag.e72bb2d4.js";import"../../../event-bus.fa2a0358.js";import"../../../AppLogo.f7561746.js";const o={extends:i,components:{PrintHeaderSimple:r},data(){return{showPrintHeader:!0,headerMargin:150,initUrl:"membership",dataTitle:$t("membership.membership"),fallBackRoute:"appMembershipList",headerButtons:[a($t("general.print"),"fas fa-print",{event:"EXPORT",options:{type:"print"}})],providerConfigs:null}},computed:{membershipItems(){return this.entity?[this.entity]:[]},computedBasic(){return this.entity&&this.entity.billingAddress?this.entity.billingAddress:{}},address(){let s=this.computedBasic.addressLine1;return s=this.computedBasic.addressLine2?s?`${s}, ${this.computedBasic.addressLine2}`:this.computedBasic.addressLine2:s,s},region(){let s=this.computedBasic.city;return s=s?this.computedBasic.zipcode?`${s} - ${this.computedBasic.zipcode}`:s:"",s=this.computedBasic.state?s?`${s}, ${this.computedBasic.state}`:this.computedBasic.state:s,s=this.computedBasic.country?s?`${s}, ${this.computedBasic.country}`:this.computedBasic.country:s,s}},methods:{getProviderConfig(){this.isLoading=!0,this.Custom({url:"config?provider=true",method:"get"}).then(s=>{s&&s.assets&&s.domain&&s.domain.app&&s.assets.objForEach((t,e)=>{s.assets[e]=s.domain.app+t}),this.providerConfigs=s,this.autoPrint(),this.isLoading=!1}).catch(s=>{this.isLoading=!1,formUtil.handleErrors(s)})},autoPrint(){window.setTimeout(()=>{this.export()},1e3)}},mounted(){this.getInitialData().then(s=>{this.getProviderConfig()})}};var c=function(){var t=this,e=t._self._c;return e("base-container",{staticClass:"print-black-color",attrs:{boxed:"","with-loader":"","is-loading":t.isLoading,"loader-color":t.vars.loaderColor,id:"printable"}},[t.showPrintHeader?e("print-header-simple",{attrs:{"custom-configs":t.providerConfigs}}):e("div",{staticClass:"header-margin",style:{height:t.headerMargin+"px"}}),t.entity?[e("div",{staticClass:"row"},[e("div",{staticClass:"col-5 pt-1"},[t.configs.basic.orgName?e("h5",{staticClass:"font-weight-700 mb-1"},[t._v(t._s(t.configs.basic.orgName))]):t._e(),t.address?e("p",{staticClass:"mb-0"},[t._v(t._s(t.address))]):t._e(),t.region?e("p",{staticClass:"mb-0"},[t._v(t._s(t.region))]):t._e()]),e("div",{staticClass:"col-7"},[e("h1",{staticClass:"text-uppercase text-right fs-3 font-weight-800 mt-0"},[t._v(t._s(t.$t("membership.membership")))])])]),e("div",{staticClass:"row mt-5"},[e("div",{staticClass:"col-4"},[e("view-single",{attrs:{label:t.$t("membership.props.invoice_number"),value:t.entity.number,"data-classes":"font-weight-600"}})],1),e("div",{staticClass:"col-4"},[e("view-date",{staticClass:"text-center",attrs:{label:t.$t("membership.props.date"),value:t.entity.createdAt,"view-group-classes":"border-left border-right","data-classes":"font-weight-600"}})],1),e("div",{staticClass:"col-4"},[e("view-single",{staticClass:"text-right",attrs:{label:t.$t("membership.props.method"),value:t.entity.paymentGateway.source,"data-classes":"font-weight-600"}})],1)]),e("table",{staticClass:"table table-bordered table-sm mt-4 mb-4"},[e("thead",{staticClass:"thead-light"},[e("tr",[e("th",{staticClass:"min-width-40px"},[t._v("#")]),e("th",{staticClass:"text-left min-width-100px"},[t._v(t._s(t.$t("membership.props.frequency")))]),e("th",{staticClass:"text-left min-width-100px"},[t._v(t._s(t.$t("membership.props.transaction_id")))]),e("th",{staticClass:"text-right min-width-100px"},[t._v(t._s(t.$t("membership.props.expiry_date")))]),e("th",{staticClass:"text-right min-width-100px"},[t._v(t._s(t.$t("membership.props.amount")))])])]),e("tbody",[e("tr",[e("td",{},[t._v("1")]),e("td",{},[t._v(t._s(t.entity.frequency.name))]),e("td",{},[e("p",{staticClass:"text-wrap-pre-line"},[t._v(t._s(t.entity.paymentGateway.referenceNumber))])]),e("td",{staticClass:"text-right"},[e("view-date",{staticClass:"mb-0 text-right",attrs:{value:t.entity.expiryDate}})],1),e("td",{staticClass:"text-right"},[e("view-currency",{staticClass:"mb-0",attrs:{value:t.entity.planCharge,currency:t.entity.currency,"data-classes":"font-weight-600"}})],1)])]),t.entity?e("tfoot",[e("tr",[e("td",{staticClass:"text-right fs-2 font-weight-600",attrs:{colspan:"4"}},[t._v(t._s(t.$t("general.total")))]),e("td",{staticClass:"text-right"},[e("view-currency",{staticClass:"mb-0",attrs:{value:t.entity.amount,currency:t.entity.currency,"data-classes":"font-weight-600 text-success fs-2"}})],1)])]):t._e()])]:t._e(),e("div",{staticClass:"form-footer mt-5"},[e("div",{staticClass:"left-side"},[e("base-button",{attrs:{type:"button",design:"light",tabindex:"-1"},on:{click:function(m){return t.$router.back()}}},[e("i",{staticClass:"fas fa-chevron-left"}),t._v(" "+t._s(t.$t("general.back")))])],1)])],2)},d=[],l=n(o,c,d,!1,null,"276953cc",null,null);const B=l.exports;export{B as default};