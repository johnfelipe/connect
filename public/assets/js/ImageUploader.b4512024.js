import{E as i}from"./event-bus.fa2a0358.js";import{a as o,b as l}from"./uploader.4e13ce51.js";import{m as r}from"./vendor/vendor-core.b127d6f1.js";import{n}from"./_plugin-vue2_normalizer.7b9a2fe2.js";const d={name:"image-uploader",props:{existingImage:{type:String,default:""},existingMedia:{type:Object,default:null},placeholder:{type:String,default:"https://via.placeholder.com/200/e1e2e4/b1b2b4/?text=Upload%20Image"},url:{type:String,required:!0},buttonColor:{type:String,default:"primary"},actionLabel:{type:String,default:"global.choose"},nameLabel:{type:String,default:"upload.image"},buttonSize:{type:String,default:"sm"},darkBg:{type:Boolean,default:!1},profile:{type:Boolean,default:!1},showUploadButton:{type:Boolean,default:!0},removeButton:{type:Boolean,default:!0},removeFromServer:{type:Boolean,default:!0},showProgress:{type:Boolean,default:!0},size:{type:String,default:""},fieldName:{type:String,default:"file"}},data(){return{isLoading:!1,imageRemoved:!1,uploadedImage:"",imageToUpload:"",actionLabelUpdated:"",files:[]}},computed:{...r("config",["configs","vars"]),imageSource(){const a=this.imageToUpload?this.imageToUpload:this.uploadedImage?this.uploadedImage:this.existingImage?this.existingImage:"";return a||this.placeholder},computedActionLabel(){return this.existingImage||this.uploadedImage?"global.change":this.actionLabel},showWhileUploading(){return!!(this.imageToUpload&&this.files[0]&&this.files[0].status==="uploading")}},methods:{generateImagePreview(a){this.isLoading=!0,setTimeout(()=>{const e=this.$refs.file.files,t=/(\.jpg|\.jpeg|\.png|\.gif|\.bmp)$/i;for(let s=0;s<e.length;s++)t.test(e[s].name)?this.configs.system&&this.configs.system.postMaxSize&&e[s].size>this.configs.system.postMaxSize?(this.isLoading=!1,this.$toasted.error(this.$t("global.file_too_large",{attribute:e[s].name}),this.$toastConfig.error)):this.files.push({uuid:uuid(),file:e[s],status:"waiting",progress:0}):(this.isLoading=!1,this.$toasted.error(this.$t("global.file_not_supported",{attribute:e[s].name.split(".").pop()}),this.$toastConfig.error));this.files.length?this.createImage(this.files[0].file):this.isLoading=!1},1e3)},createImage(a){let e=new FileReader;e.onload=t=>{this.imageToUpload=t.target.result},e.onerror=t=>{console.error("File could not be read! Code "+t.target.error.code)},e.readAsDataURL(a),this.isLoading=!1},cancelUpload(){this.files=[],this.imageToUpload=""},uploadImage(){const a=this.files[0];a.status="waiting";const e=s=>{a.progress=Math.round(s.loaded*100/s.total)};let t=new FormData;if(this.files[0].file&&this.files[0].file.size>this.configs.system.postMaxSize){this.$toasted.error(this.t("upload.file_too_large"),this.$toastConfig.error);return}t.append(this.fieldName,this.files[0].file),a.status="uploading",o({url:this.url,data:t},e).then(s=>{a.status="uploaded",delete a.cancel,this.$toasted.success(s.message,this.$toastConfig.success),this.imageToUpload="",this.files=[],this.uploadedImage=s.image,this.$emit("uploaded",s.image)}).catch(s=>{a.status="error",this.$emit("error",s),formUtil.handleErrors(s)})},removeImage(){this.removeFromServer?formUtil.confirmAction().then(a=>{a.value&&(this.isLoading=!0,l({url:this.url}).then(e=>{this.$toasted.success(e.message,this.$toastConfig.success),this.imageRemoved=!0,this.uploadedImage="",this.$emit("removed"),this.isLoading=!1}).catch(e=>{this.isLoading=!1,this.formErrors=formUtil.handleErrors(e)}))}):(this.imageRemoved=!0,this.uploadedImage="",this.$emit("removed"))},startUpload(){this.files.length?this.uploadImage():this.$emit("noNeed")}},mounted(){i.$off("START_UPLOAD",this.startUpload),i.$on("START_UPLOAD",this.startUpload),i.$off("CANCEL_UPLOAD",this.cancelUpload),i.$on("CANCEL_UPLOAD",this.cancelUpload),this.uploadButtonText=this.label},destroyed(){i.$off("START_UPLOAD",this.startUpload),i.$off("CANCEL_UPLOAD",this.cancelUpload)}};var g=function(){var e=this,t=e._self._c;return t("div",{class:["sm-uploader image-uploader",e.size]},[t("animated-loader",{attrs:{"is-loading":e.isLoading||!e.showProgress&&e.showWhileUploading,"loader-color":e.vars.loaderColor}}),e.showProgress&&e.showWhileUploading?t("div",{staticClass:"progress-ring-wrapper"},[t("progress-ring",{attrs:{value:e.files[0].progress,"stroke-color":e.vars.loaderColor}})],1):e._e(),e.imageSource?t("div",{class:["image-display-wrapper",{"dark-bg":e.darkBg}]},[t("div",{class:["image-display",{"image-profile":e.profile}]},[e.imageToUpload?t("img",{staticClass:"img-responsive",attrs:{src:e.imageToUpload}}):t("img",{staticClass:"img-responsive",attrs:{src:e.imageSource}})]),e.imageToUpload?t("div",{staticClass:"submit-actions"},[t("base-button",{attrs:{type:"button",design:"light",size:e.buttonSize},on:{click:e.cancelUpload}},[t("i",{staticClass:"fas fa-times"}),e._v(" "+e._s(e.$t("general.cancel")))]),e.showUploadButton?t("base-button",{attrs:{type:"button",design:"success",size:e.buttonSize},on:{click:e.uploadImage}},[t("i",{staticClass:"fas fa-arrow-circle-right"}),e._v(" "+e._s(e.$t("general.upload")))]):t("base-button",{attrs:{type:"button",design:e.buttonColor,size:e.buttonSize}},[t("i",{staticClass:"far fa-image"}),e._v(" "+e._s(e.$t("global.change",{attribute:e.$t(e.nameLabel)})))])],1):e._e()]):e._e(),e.imageToUpload?e._e():t("div",{staticClass:"image-uploader-form"},[e.existingImage&&e.removeButton?t("div",{staticClass:"existing-image-actions"},[t("base-button",{attrs:{type:"button",design:"danger",size:e.buttonSize},on:{click:e.removeImage}},[t("i",{staticClass:"fas fa-trash"}),e._v(" "+e._s(e.$t("general.remove")))])],1):e._e(),t("div",{staticClass:"file-selector"},[t("label",{class:`btn btn-${e.buttonColor} btn-${e.buttonSize}`},[t("input",{ref:"file",staticClass:"selector-input",attrs:{name:"file",type:"file",id:"file",accept:"image/*"},on:{change:e.generateImagePreview}}),e._m(0),e._v(" "),t("span",{staticClass:"button-label"},[e._v(e._s(e.$t(e.computedActionLabel,{attribute:e.$t(e.nameLabel)})))])])])])],1)},u=[function(){var a=this,e=a._self._c;return e("span",{staticClass:"button-icon"},[e("i",{staticClass:"fas fa-upload"})])}],m=n(d,g,u,!1,null,null,null,null);const b=m.exports;export{b as I};