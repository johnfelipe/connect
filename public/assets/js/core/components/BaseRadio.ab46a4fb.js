import{n as t}from"../../_plugin-vue2_normalizer.7b9a2fe2.js";const n={name:"base-radio",model:{prop:"modelValue",event:"change"},props:{disabled:{type:Boolean,description:"Whether radio is disabled"},hasImage:{type:Boolean,default:!1},hasInlineImage:{type:Boolean,default:!1},inRow:{type:Boolean,default:!1},value:{type:[String,Boolean,Object,Array],description:"Radio value"},type:{type:String,description:"Radio type",default:""},modelValue:{type:[String,Boolean,Object,Array],description:"Radio value"},inline:{type:Boolean,description:"Whether radio is inline"}},data(){return{cbId:""}},computed:{shouldBeChecked(){return this.modelValue==this.value},inlineClass(){return this.inline?"form-check-inline":""}},methods:{updateInput(){this.$emit("change",this.value)}},created(){this.cbId=Math.random().toString(16).slice(2)}};var i=function(){var e=this,a=e._self._c;return a("div",{staticClass:"custom-control custom-radio",class:[e.inlineClass,{disabled:e.disabled},{"has-image":e.hasImage},{"has-inline-image":e.hasInlineImage},{"in-row":e.inRow},e.type]},[a("input",{staticClass:"custom-control-input",attrs:{id:e.cbId,type:"radio",disabled:e.disabled},domProps:{checked:e.shouldBeChecked,value:e.value},on:{change:e.updateInput}}),a("label",{staticClass:"custom-control-label",attrs:{for:e.cbId}},[e._t("default")],2)])},l=[],o=t(n,i,l,!1,null,null,null,null);const r=o.exports;export{r as default};