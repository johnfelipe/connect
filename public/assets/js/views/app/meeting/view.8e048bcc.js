import{t as m}from"../../../table.2ac66788.js";import{o as g,q as n,r as o,t as r}from"../../../header.31500a75.js";import{b as u,S as c}from"../../../app.e5c25aad.js";import{m as d}from"../../../vendor/vendor-core.b127d6f1.js";import{n as l}from"../../../_plugin-vue2_normalizer.7b9a2fe2.js";import{F as f}from"../../../FileUploader.28139c82.js";import{I as p}from"../../../ImageUploader.b4512024.js";import{a as b}from"../../../vendor/vendor-add-to-calendar-button.b6160d47.js";import"../../../event-bus.fa2a0358.js";import"../../../vendor/vendor-bootstrap-vue.8cf54841.js";import"../../../vendor/vendor-others.8d770de0.js";import"../../../vendor/vendor-essential.41987d0e.js";import"../../../vendor/vendor-vue-gtag.e72bb2d4.js";import"../../../uploader.4e13ce51.js";const v={props:{entity:{required:!0},isLoading:{type:Boolean,default:!1}},computed:{...d("config",["vars","configs","allowExtraInput"]),...d("user",["hasPermission"])}};var h=function(){var t=this,e=t._self._c;return e("base-container",{staticClass:"mt-0",attrs:{boxed:"","with-loader":"","min-height":"full","has-footer":"","is-loading":t.isLoading,"loader-color":t.vars.loaderColor,id:"printable"}},[t.entity?[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 mb-3"},[e("view-single",{attrs:{label:t.$t("meeting.props.title"),value:t.entity.title,tag:"h5","data-classes":"font-weight-600"}})],1),e("div",{staticClass:"col-12 col-lg-6 mb-3"},[e("view-single",{attrs:{label:t.$t("meeting.props.type")},scopedSlots:t._u([{key:"main",fn:function(){return[t.entity.type?e("badge",{staticClass:"mb-0",attrs:{type:"default"}},[t._v(t._s(t.entity.type.name))]):t._e()]},proxy:!0}],null,!1,380638162)})],1),e("div",{staticClass:"col-12 col-lg-6 mb-3"},[e("view-single",{attrs:{label:t.$t("meeting.meeting_category.category")},scopedSlots:t._u([{key:"main",fn:function(){return[t.entity.category?e("badge",{staticClass:"mb-0",attrs:{type:"dark"}},[t._v(t._s(t.entity.category.name))]):t._e()]},proxy:!0}],null,!1,52913093)})],1),e("div",{staticClass:"col-12 col-lg-6 mb-3"},[e("view-single",{attrs:{label:t.$t("meeting.props.status")},scopedSlots:t._u([{key:"main",fn:function(){return[e("badge",{attrs:{rounded:"",type:t.vars.colorsForStatus["meeting-"+t.entity.status]}},[t._v(t._s(t.entity.status))])]},proxy:!0}],null,!1,582220808)})],1),e("div",{staticClass:"col-12 col-lg-6 mb-3"},[e("view-single",{attrs:{label:t.$t("meeting.props.accessible_via_link")},scopedSlots:t._u([{key:"main",fn:function(){return[t.entity.accessibleViaLink?e("badge",{attrs:{rounded:"",type:"success"}},[e("i",{staticClass:"far fa-check-circle"}),t._v(" "+t._s(t.$t("general.yes")))]):e("badge",{attrs:{rounded:"",type:"dark"}},[e("i",{staticClass:"far fa-circle"}),t._v(" "+t._s(t.$t("general.no")))])]},proxy:!0}],null,!1,3700736429)})],1),e("div",{staticClass:"col-12 col-lg-6 mb-3"},[e("view-single",{attrs:{label:t.$t("meeting.props.has_event")},scopedSlots:t._u([{key:"main",fn:function(){return[t.entity.hasEvent?e("badge",{attrs:{rounded:"",type:"success"}},[e("i",{staticClass:"far fa-check-circle"}),t._v(" "+t._s(t.$t("general.yes")))]):e("badge",{attrs:{rounded:"",type:"dark"}},[e("i",{staticClass:"far fa-circle"}),t._v(" "+t._s(t.$t("general.no")))])]},proxy:!0}],null,!1,3850055267)})],1),e("div",{staticClass:"col-12 col-lg-6 mb-3"},[e("view-single",{attrs:{label:t.$t("meeting.props.should_remind")},scopedSlots:t._u([{key:"main",fn:function(){return[t.entity.shouldRemind?e("badge",{attrs:{rounded:"",type:"success"}},[e("i",{staticClass:"far fa-check-circle"}),t._v(" "+t._s(t.$t("meeting.props.remind_before"))+" "+t._s(t.entity.remindBefore)+" "+t._s(t.$t("list.general.durations.minutes")))]):e("badge",{attrs:{rounded:"",type:"dark"}},[e("i",{staticClass:"far fa-circle"}),t._v(" "+t._s(t.$t("general.no")))])]},proxy:!0}],null,!1,780835348)})],1),t.configs.meeting&&t.configs.meeting.enablePam?e("div",{staticClass:"col-12 col-lg-6 mb-3"},[e("view-single",{attrs:{label:t.$t("meeting.props.is_pam")},scopedSlots:t._u([{key:"main",fn:function(){return[t.entity.isPam?e("badge",{attrs:{rounded:"",type:"success"}},[e("i",{staticClass:"far fa-check-circle"}),t._v(" "+t._s(t.$t("general.yes")))]):e("badge",{attrs:{rounded:"",type:"dark"}},[e("i",{staticClass:"far fa-circle"}),t._v(" "+t._s(t.$t("general.no")))])]},proxy:!0}],null,!1,3893383155)})],1):t._e(),t.allowExtraInput?[t.configs.membership.enabled?e("div",{staticClass:"col-12 col-lg-6 mb-3"},[e("view-single",{attrs:{label:t.$t("meeting.props.only_accessible_to_members")},scopedSlots:t._u([{key:"main",fn:function(){return[t.entity.accessibleToMembers?e("badge",{attrs:{rounded:"",type:"success"}},[e("i",{staticClass:"far fa-check-circle"}),t._v(" "+t._s(t.$t("general.yes")))]):e("badge",{attrs:{rounded:"",type:"dark"}},[e("i",{staticClass:"far fa-circle"}),t._v(" "+t._s(t.$t("general.no")))])]},proxy:!0}],null,!1,464747915)})],1):t._e(),t.configs.meeting.enablePaidMeeting?[e("div",{staticClass:"col-12 col-lg-6 mb-3"},[e("view-single",{attrs:{label:t.$t("meeting.props.is_paid")},scopedSlots:t._u([{key:"main",fn:function(){return[t.entity.isPaid?e("badge",{attrs:{rounded:"",type:"success"}},[e("i",{staticClass:"far fa-check-circle"}),t._v(" "+t._s(t.$t("general.yes")))]):e("badge",{attrs:{rounded:"",type:"dark"}},[e("i",{staticClass:"far fa-circle"}),t._v(" "+t._s(t.$t("general.no")))])]},proxy:!0}],null,!1,139926035)})],1),e("div",{staticClass:"col-12 col-lg-6 mb-3"},[e("view-currency",{attrs:{label:t.$t("meeting.props.fee"),value:t.entity.fee}})],1)]:t._e()]:t._e(),t.entity&&t.entity.status==="cancelled"?e("div",{staticClass:"col-12 mb-3"},[e("view-single",{attrs:{label:t.$t("meeting.props.cancellation_reason"),value:t.entity.cancellationReason}})],1):t._e(),e("div",{staticClass:"col-12 col-md-6 mb-3"},[e("view-single",{attrs:{label:t.$t("meeting.props.identifier"),value:t.entity.identifier}})],1),e("div",{staticClass:"col-12 col-md-6 mb-3"},[e("view-single",{attrs:{label:t.$t("meeting.config.max_participant_count"),value:t.entity.maxParticipantCount}})],1),e("div",{staticClass:"col-12 col-md-6 mb-3"},[e("view-single",{attrs:{label:t.$t("meeting.props.estimated_period"),value:t.entity.period,suffix:t.$t("list.general.durations.minutes")}})],1),e("div",{staticClass:"col-12 mb-3"},[e("view-date",{attrs:{label:t.$t("meeting.props.start_date_time"),value:t.entity.startDateTime,"with-tz":""}})],1)],2)]:t._e(),e("div",{staticClass:"form-footer mt-3"},[e("div",{staticClass:"left-side"},[e("base-button",{attrs:{type:"button",design:"light",tabindex:"-1"},on:{click:function(i){return t.$router.back()}}},[e("i",{staticClass:"fas fa-chevron-left"}),t._v(" "+t._s(t.$t("general.back")))])],1),e("div",{staticClass:"right-side"},[t.entity&&t.entity.status==="scheduled"&&(t.hasPermission("edit-meeting")||t.entity.canModerate)?e("base-button",{attrs:{type:"button",design:"primary"},on:{click:function(i){return i.stopPropagation(),t.$router.push({name:"appMeetingEdit",params:{uuid:t.entity.uuid}})}}},[e("i",{staticClass:"fas fa-edit"}),t._v(" "+t._s(t.$t("global.edit",{attribute:t.$t("meeting.meeting")})))]):t._e()],1)])],2)},_=[],C=l(v,h,_,!1,null,null,null,null);const y=C.exports,$={props:{configs:{type:Object,required:!0},meeting:{type:Object,required:!0},meetingConfig:{type:Object,required:!0}}};var w=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"row"},[t.meetingConfig.rtcLibrary?e("div",{staticClass:"col-12 col-md-3 mb-3"},[e("view-badge",{attrs:{label:t.$t("meeting.config.rtc_library"),value:t.meetingConfig.rtcLibrary,type:"badge"}})],1):t._e()]),e("fieldset",{staticClass:"fieldset light p-2 p-md-3 p-lg-4 mt-element"},[e("legend",[t._v(t._s(t.$t("meeting.config.miscellaneous")))]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-md-3 mb-3"},[e("view-badge",{attrs:{label:t.$t("meeting.config.can_share_files"),value:t.meetingConfig.canShareFiles}})],1),e("div",{staticClass:"col-12 col-md-3 mb-3"},[e("view-badge",{attrs:{label:t.$t("meeting.config.can_share_screen"),value:t.meetingConfig.canShareScreen}})],1),e("div",{staticClass:"col-12 col-md-3 mb-3"},[e("view-badge",{attrs:{label:t.$t("meeting.config.can_share_link"),value:t.meetingConfig.canShareLink}})],1),e("div",{staticClass:"col-12 col-md-3 mb-3"},[e("view-badge",{attrs:{label:t.$t("meeting.config.can_use_whiteboard"),value:t.meetingConfig.canUseWhiteboard}})],1),e("div",{staticClass:"col-12 col-md-3 mb-3"},[e("view-badge",{attrs:{label:t.$t("meeting.config.can_use_hand_gesture"),value:t.meetingConfig.canUseHandGesture}})],1),e("div",{staticClass:"col-12 col-md-3 mb-3"},[e("view-badge",{attrs:{label:t.$t("meeting.config.can_toggle_layout"),value:t.meetingConfig.canToggleLayout}})],1),e("div",{staticClass:"col-12 col-md-3 mb-3"},[e("view-badge",{attrs:{label:t.$t("meeting.config.mute_participants_on_start"),value:t.meetingConfig.muteParticipantsOnStart}})],1),e("div",{staticClass:"col-12 col-md-3 mb-3"},[e("view-badge",{attrs:{label:t.$t("meeting.config.ask_host_before_joining"),value:t.meetingConfig.askHostBeforeJoining}})],1),e("div",{staticClass:"col-12 col-md-3 mb-3"},[e("view-badge",{attrs:{label:t.$t("meeting.config.speech_detection"),value:t.meetingConfig.speechDetection}})],1),e("div",{staticClass:"col-12 col-md-3 mb-3"},[e("view-badge",{attrs:{label:t.$t("meeting.config.enable_poll"),value:t.meetingConfig.enablePoll}})],1),e("div",{staticClass:"col-12 col-md-3 mb-3"},[e("view-badge",{attrs:{label:t.$t("meeting.config.whiteboard_collaboration"),value:t.meetingConfig.whiteboardCollaboration}})],1)])]),e("fieldset",{staticClass:"fieldset light p-2 p-md-3 p-lg-4 mt-element"},[e("legend",[t._v(t._s(t.$t("chat.chat"))+" "+t._s(t.$t("config.configuration")))]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-md-3 mb-3"},[e("view-badge",{attrs:{label:t.$t("meeting.config.enable_chat"),value:t.meetingConfig.enableChat}})],1),t.meetingConfig.enableChat?[e("div",{staticClass:"col-12 col-md-3 mb-3"},[e("view-badge",{attrs:{label:t.$t("meeting.config.auto_open_chat"),value:t.meetingConfig.autoOpenChat}})],1),e("div",{staticClass:"col-12 col-md-3 mb-3"},[e("view-single",{attrs:{label:t.$t("meeting.config.chat_visibility"),value:t.$t(`meeting.config.${t.meetingConfig.chatVisibility}`)},scopedSlots:t._u([{key:"main",fn:function(){return[e("badge",{attrs:{rounded:""}},[t._v(" "+t._s(t.$t(`meeting.config.${t.meetingConfig.chatVisibility}`))+" ")])]},proxy:!0}],null,!1,3142788675)})],1)]:t._e()],2)]),t.configs.meeting&&t.configs.meeting.enablePam&&t.meeting.isPam?[e("fieldset",{staticClass:"fieldset light p-2 p-md-3 p-lg-4 mt-element"},[e("legend",[t._v(t._s(t.$t("meeting.publicly_accessible_meetings")))]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-md-3 mb-3"},[e("view-badge",{attrs:{label:t.$t("meeting.config.pam_open_join_as_guest_page"),value:t.meetingConfig.pamOpenJoinAsGuestPage}})],1),e("div",{staticClass:"col-12 col-md-3 mb-3"},[e("view-badge",{attrs:{label:t.$t("meeting.config.pam_can_share_screen_for_guest"),value:t.meetingConfig.pamCanShareScreenForGuest}})],1),e("div",{staticClass:"col-12 col-md-3 mb-3"},[e("view-badge",{attrs:{label:t.$t("meeting.config.pam_can_share_link_for_guest"),value:t.meetingConfig.pamCanShareLinkForGuest}})],1),e("div",{staticClass:"col-12 col-md-3 mb-3"},[e("view-badge",{attrs:{label:t.$t("meeting.config.pam_can_use_whiteboard_for_guest"),value:t.meetingConfig.pamCanUseWhiteboardForGuest}})],1)])])]:t._e(),e("fieldset",{staticClass:"fieldset light p-2 p-md-3 p-lg-4 mt-element"},[e("legend",[t._v(t._s(t.$t("meeting.config.snapshot")))]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-md-3 mb-3"},[e("view-badge",{attrs:{label:t.$t("meeting.config.can_take_snapshot"),value:t.meetingConfig.canTakeSnapshot}})],1),t.meetingConfig.canTakeSnapshot?[e("div",{staticClass:"col-12 col-md-3 mb-3"},[e("view-badge",{attrs:{label:t.$t("meeting.config.anyone_can_take_snapshot"),value:t.meetingConfig.anyoneCanTakeSnapshot}})],1),e("div",{staticClass:"col-12 col-md-3 mb-3"},[e("view-badge",{attrs:{label:t.$t("meeting.config.enable_snapshot_alert"),value:t.meetingConfig.enableSnapshotAlert}})],1),e("div",{staticClass:"col-12 col-md-3 mb-3"},[e("view-badge",{attrs:{label:t.$t("meeting.config.snapshot_alert_to_user_only"),value:t.meetingConfig.snapshotAlertToUserOnly}})],1),e("div",{staticClass:"col-12 col-md-3 mb-3"},[e("view-badge",{attrs:{label:t.$t("meeting.config.snapshot_alert_to_moderators"),value:t.meetingConfig.snapshotAlertToModerators}})],1)]:t._e()],2)]),e("fieldset",{staticClass:"fieldset light p-2 p-md-3 p-lg-4 mt-element"},[e("legend",[t._v(t._s(t.$t("meeting.config.recording")))]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-md-3 mb-3"},[e("view-badge",{attrs:{label:t.$t("meeting.config.can_record"),value:t.meetingConfig.canRecord}})],1),t.meetingConfig.canRecord?[e("div",{staticClass:"col-12 col-md-3 mb-3"},[e("view-badge",{attrs:{label:t.$t("meeting.config.enable_auto_recording"),value:t.meetingConfig.enableAutoRecording}})],1),e("div",{staticClass:"col-12 col-md-3 mb-3"},[e("view-badge",{attrs:{label:t.$t("meeting.config.can_stop_auto_recording"),value:t.meetingConfig.canStopAutoRecording}})],1),e("div",{staticClass:"col-12 col-md-3 mb-3"},[e("view-badge",{attrs:{label:t.$t("meeting.config.auto_upload_recording"),value:t.meetingConfig.autoUploadRecording}})],1),e("div",{staticClass:"col-12 col-md-3 mb-3"},[e("view-badge",{attrs:{label:t.$t("meeting.config.auto_upload_recorded"),value:t.meetingConfig.autoUploadRecorded}})],1)]:t._e()],2)]),e("fieldset",{staticClass:"fieldset light p-2 p-md-3 p-lg-4 mt-element"},[e("legend",[t._v(t._s(t.$t("meeting.config.auto_end")))]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-md-3 mb-3"},[e("view-badge",{attrs:{label:t.$t("meeting.config.auto_end_meeting"),value:t.meetingConfig.autoEndMeeting}})],1),t.meetingConfig.autoEndMeeting?[e("div",{staticClass:"col-12 col-md-3 mb-3"},[e("view-badge",{attrs:{label:t.$t("meeting.config.alert_before_auto_end"),value:t.meetingConfig.alertBeforeAutoEnd}})],1),e("div",{staticClass:"col-12 col-md-3 mb-3"},[e("view-badge",{attrs:{label:t.$t("meeting.config.can_snooze_auto_end"),value:t.meetingConfig.canSnoozeAutoEnd}})],1),e("div",{staticClass:"col-12 col-md-3 mb-3"},[e("view-badge",{attrs:{label:t.$t("meeting.config.can_cancel_auto_end"),value:t.meetingConfig.canCancelAutoEnd}})],1),e("div",{staticClass:"col-12"}),t.meetingConfig.alertBeforeAutoEnd?e("div",{staticClass:"col-12 col-md-6 mb-3"},[e("view-single",{attrs:{label:t.$t("meeting.config.alert_before_auto_end_time"),value:t.meetingConfig.alertBeforeAutoEndTime}})],1):t._e(),e("div",{staticClass:"col-12 col-md-6 mb-3"},[e("view-single",{attrs:{label:t.$t("meeting.config.end_time_snooze_period"),value:t.meetingConfig.endTimeSnoozePeriod}})],1)]:t._e()],2)])],2)},k=[],x=l($,w,k,!1,null,null,null,null);const S=x.exports,L={extends:m,components:{MeetingDetails:y,FileUploader:f,ImageUploader:p,ViewConfig:S},data(){return{fields:[{key:"contact.email",label:$t("contact.props.email")},{key:"contact.name",label:$t("contact.props.name"),tdClass:"td-ellipsis max-width-200px"},{key:"isModerator",label:"",headerTitle:$t("meeting.meeting_attributes"),thClass:"text-nowrap",tdClass:"text-center"},{key:"actions",label:"",cantHide:!0,tdClass:"actions-dropdown-wrapper"}],initUrl:"meetings",initSubUrl:"invitees",dataTitle:$t("meeting.meeting"),fallBackRoute:"appMeetingList",dataType:"meeting",hideFilterButton:!0,uploaderConfig:{module:"",token:"",allowedExtensions:"",maxNoOfFiles:5,uuid:uuid()}}},methods:{afterGetEntityData(){this.headerButtons=[],this.headerLinks=[],(this.entity.status==="scheduled"||this.entity.status==="live")&&(this.headerButtons.push(g($t("meeting.join"),"fas fa-sign-in-alt","liveMeeting","list-meeting",null,{color:"success"},{subUuid:this.uuid})),this.entity.status==="scheduled"&&this.headerButtons.push(n($t("meeting.calendar"),"far fa-calendar",()=>{const a=this.entity.startDateTime.split(" ");let t=window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:"");t=t+(this.entity.identifier?`/m/${this.entity.identifier}`:`/app/live/meetings/${this.entity.uuid}`);let e={name:this.entity.title,description:$t("meeting.reminder.notification_cta")+"[br][url]"+t+"|"+t+"[/url]",startDate:a[0],options:["Apple","Google","iCal","Microsoft365","Outlook.com","Yahoo"],iCalFileName:($t("meeting.scheduled_meeting")+" "+this.entity.identifier).replace(/\s/gi,"-"),timeZone:"UTC"};if(this.entity.estimatedEndTime){const i=this.entity.estimatedEndTime.split(" ");e.startTime=a[1],e.endDate=i[0],e.endTime=i[1]}b(e)},$t("meeting.add_to_calendar"),{color:"default"}))),this.entity.status==="scheduled"&&this.entity.canModerate&&(this.headerButtons.push(n($t("meeting.cancel"),"fas fa-times",this.cancelMeeting,null,{color:"danger"})),this.headerButtons.push(n($t("meeting.invite"),"fas fa-paper-plane",this.triggerSendInvitation,null,{color:"primary"})),this.headerButtons.push(o($t("general.add"),"fas fa-plus","appMeetingInviteeAdd",null,null,{subUuid:this.uuid}))),this.entity.status!=="cancelled"&&this.entity.status!=="ended"&&this.entity.canModerate&&this.headerButtons.push(o(null,"fas fa-cog","appMeetingSingleConfig",$t("general.config"),null,{subUuid:this.uuid})),this.entity.hasSnapshots&&this.configs.meeting&&this.configs.meeting.canTakeSnapshot&&this.headerLinks.push(r($t("global.view",{attribute:$t("meeting.snapshots")}),"fas fa-image","appMeetingSnapshots",{uuid:this.entity.uuid})),(this.entity.hasChunkRecordings||this.entity.hasRecordings)&&this.configs.meeting&&this.configs.meeting.canRecord&&this.headerLinks.push(r($t("global.view",{attribute:$t("meeting.recordings")}),"fas fa-photo-video","appMeetingRecordings",{uuid:this.entity.uuid})),this.applyPageHeader()},cancelMeeting(){u.fire({title:$t("meeting.reason_for_cancellation"),input:"text",inputPlaceholder:$t("meeting.reason_for_cancellation"),showCancelButton:!0,confirmButtonText:"Proceed!",cancelButtonText:"Go Back!"}).then(a=>{a.value?(this.isLoading=!0,this.Custom({url:`/${this.initUrl}/${this.uuid}/cancel`,method:"post",data:{cancellationReason:a.value}}).then(t=>{this.entity=t.meeting,this.afterGetEntityData(),this.$toasted.success(t.message,this.$toastConfig),this.isLoading=!1}).catch(t=>{this.isLoading=!1,formUtil.handleErrors(t)})):(a.dismiss,c.DismissReason.cancel)})},sendInvitation(a){formUtil.confirmAction().then(t=>{if(t.value){this.isLoading=!0;let e={};a&&(e.invitee=a),this.Custom({url:`/${this.initUrl}/${this.uuid}/invitation`,method:"post",data:e}).then(i=>{this.$toasted.success(i.message,this.$toastConfig.success),this.isLoading=!1}).catch(i=>{this.isLoading=!1,formUtil.handleErrors(i)})}else t.dismiss,c.DismissReason.cancel})},triggerSendInvitation(){this.sendInvitation()},toggleModerator(a){this.isLoading=!0;let t={};a&&(t.invitee=a),this.Custom({url:`/${this.initUrl}/${this.uuid}/moderator`,method:"post",data:t}).then(e=>{this.isLoading=!1,this.$nextTick(()=>{this.refreshTable()})}).catch(e=>{this.isLoading=!1,formUtil.handleErrors(e)})},toggleBlock(a){this.isLoading=!0;const t=a.isBlocked?"unblock":"block";this.Custom({url:`/${this.initUrl}/${this.uuid}/invitees/${a.uuid}/${t}?type=invitee`,method:"post"}).then(e=>{this.isLoading=!1,this.$nextTick(()=>{this.refreshTable()})}).catch(e=>{this.isLoading=!1,formUtil.handleErrors(e)})},coverImageModified(){this.Init({url:this.initUrl,doNotReset:!0}),this.reloadEntityData(()=>{this.InitSub({url:this.uuid+"/"+this.initSubUrl,doNotReset:!0})})}},mounted(){this.configs.system&&this.configs.system.allowedFileExtensions&&(this.uploaderConfig.allowedExtensions=this.configs.system.allowedFileExtensions),this.getEntityData()}};var M=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-md-4 mt-element mb-element"},[e("meeting-details",{attrs:{entity:t.entity,"is-loading":t.isLoading}})],1),t.entity?[t.entity.canModerate?e("div",{staticClass:"col-12 col-md-8 mt-element mb-element"},[e("base-container",{staticClass:"p-0 mt-0",attrs:{boxed:"","with-loader":"","min-height":"full","is-loading":t.isLoading,"loader-color":t.vars.loaderColor}},[t.isInitialized?e("table-wrapper",{attrs:{meta:t.entities.meta,"add-button-route":t.entity.status==="scheduled"&&t.entity.canModerate?"appMeetingInviteeAdd":"","add-button-params":{subUuid:t.uuid},"add-button-permissions":["create-meeting"],"entity-title":"meeting.invitee.invitee","entities-title":"meeting.invitee.invitees","entity-description":"meeting.invitee.module_description","small-footer":""}},[e("b-table",{directives:[{name:"show",rawName:"v-show",value:t.entities.meta.total,expression:"entities.meta.total"}],ref:"btable",attrs:{items:t.itemsProvider,fields:t.fields,busy:t.isLoading,hover:"",striped:"",stacked:"sm","per-page":t.entities.meta.perPage,"current-page":t.entities.meta.currentPage,filters:null},on:{"update:busy":function(i){t.isLoading=i}},scopedSlots:t._u([{key:"cell(isModerator)",fn:function(i){return[i.item.isModerator?e("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.left",modifiers:{hover:!0,left:!0}}],staticClass:"text-info width-30px d-inline-block",attrs:{title:t.$t("meeting.is_moderator")}},[e("i",{staticClass:"fas fa-user-shield"})]):e("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.left",modifiers:{hover:!0,left:!0}}],staticClass:"text-light width-30px d-inline-block",attrs:{title:t.$t("meeting.not_a_moderator")}},[e("i",{staticClass:"far fa-user"})]),i.item.isAttendee?e("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.left",modifiers:{hover:!0,left:!0}}],staticClass:"ml-3 text-success width-30px d-inline-block",attrs:{title:t.$t("meeting.attendee")}},[e("i",{staticClass:"fas fa-check-circle"})]):e("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.left",modifiers:{hover:!0,left:!0}}],staticClass:"ml-3 text-light width-30px d-inline-block",attrs:{title:t.$t("meeting.not_an_attendee")}},[e("i",{staticClass:"far fa-circle"})]),i.item.isBlocked?e("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.left",modifiers:{hover:!0,left:!0}}],staticClass:"ml-3 text-danger width-30px d-inline-block",attrs:{title:t.$t("meeting.is_blocked")}},[e("i",{staticClass:"fas fa-ban"})]):e("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.left",modifiers:{hover:!0,left:!0}}],staticClass:"ml-3 text-success width-30px d-inline-block",attrs:{title:t.$t("meeting.is_allowed")}},[e("i",{staticClass:"fas fa-circle"})]),t.allowExtraInput&&t.configs.membership.enabled?[i.item.contact&&i.item.contact.user&&i.item.contact.user.hasActiveMembership?e("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.left",modifiers:{hover:!0,left:!0}}],staticClass:"ml-3 text-success width-30px d-inline-block",attrs:{title:t.$t("membership.has_active_membership")}},[e("i",{staticClass:"far fa-id-badge"})]):e("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.left",modifiers:{hover:!0,left:!0}}],staticClass:"ml-3 text-light width-30px d-inline-block",attrs:{title:t.$t("membership.no_active_membership")}},[e("i",{staticClass:"far fa-id-badge"})])]:t._e()]}},{key:"cell(actions)",fn:function(i){return[e("table-row-actions",[t.hasPermission("create-meeting")?e("a",{staticClass:"dropdown-item",on:{click:function(s){return s.stopPropagation(),t.toggleModerator(i.item)}}},[i.item.isModerator?e("i",{staticClass:"fas fa-user-shield"}):e("i",{staticClass:"far fa-user"}),t._v(" "+t._s(t.$t("global.toggle",{attribute:t.$t("meeting.moderator")})))]):t._e(),t.hasPermission("create-meeting")?e("a",{staticClass:"dropdown-item",on:{click:function(s){return s.stopPropagation(),t.toggleBlock(i.item)}}},[i.item.isBlocked?e("span",[e("i",{staticClass:"fas fa-check-circle"}),t._v(" "+t._s(t.$t("global.unblock",{attribute:t.$t("meeting.invitee.invitee")})))]):e("span",[e("i",{staticClass:"fas fa-ban"}),t._v(" "+t._s(t.$t("global.block",{attribute:t.$t("meeting.invitee.invitee")})))])]):t._e(),t.hasPermission("create-meeting")?e("a",{staticClass:"dropdown-item",on:{click:function(s){return s.stopPropagation(),t.deleteEntity(i.item)}}},[e("i",{staticClass:"fas fa-trash"}),t._v(" "+t._s(t.$t("global.delete",{attribute:t.$t("meeting.invitee.invitee")})))]):t._e(),t.entity.canModerate?e("a",{staticClass:"dropdown-item",on:{click:function(s){return s.stopPropagation(),t.sendInvitation(i.item)}}},[e("i",{staticClass:"fas fa-paper-plane"}),t._v(" "+t._s(t.$t("meeting.send_invitation")))]):t._e()])]}}],null,!1,619487611)})],1):t._e()],1)],1):t._e(),e("div",{class:["col-12",{"col-md-8 mt-element":!t.entity.canModerate},"mb-element"]},[e("base-container",{staticClass:"mt-0",attrs:{boxed:"","min-height":"full","is-loading":t.isLoading,"loader-color":t.vars.loaderColor}},[e("view-paragraph",{staticClass:"mb-3",attrs:{label:t.$t("meeting.props.agenda"),value:t.entity.agenda,html:""}}),e("view-paragraph",{attrs:{label:t.$t("meeting.props.description"),value:t.entity.description,html:""}})],1)],1)]:t._e()],2),t.entity?[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 mb-element"},[e("base-container",{staticClass:"mt-0",attrs:{boxed:"","min-height":"full","is-loading":t.isLoading,"loader-color":t.vars.loaderColor}},[e("h5",{staticClass:"mt-0 mb-4"},[t._v(t._s(t.$t("meeting.meeting"))+" "+t._s(t.$t("config.configuration")))]),e("view-config",{attrs:{configs:t.configs,meeting:t.entity,"meeting-config":t.entity.config}})],1)],1)]),(t.entity.status==="scheduled"||t.entity.status==="live")&&(t.hasPermission("edit-meeting")||t.entity.canModerate)?[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-md-8 mb-element"},[e("base-container",{staticClass:"mt-0",attrs:{boxed:"","min-height":"full","is-loading":t.isLoading,"loader-color":t.vars.loaderColor}},[e("file-uploader",{attrs:{url:`/${this.initUrl}/${this.uuid}/media`,"name-label":"upload.attachment","names-label":"upload.attachments",options:t.uploaderConfig,data:t.entity.attachments,"button-wrapper-classes":"justify-content-between","heading-classes":"text-muted mb-2",heading:t.$t("upload.attachments")}})],1)],1),e("div",{staticClass:"col-12 col-md-4 mb-element"},[e("base-container",{staticClass:"mt-0",attrs:{boxed:"","min-height":"full","is-loading":t.isLoading,"loader-color":t.vars.loaderColor}},[e("image-uploader",{staticClass:"mb-3",attrs:{url:`/${this.initUrl}/${this.uuid}/cover`,"name-label":"meeting.props.cover_image","existing-image":t.entity.cover,"remove-from-server":"","button-size":"md"},on:{uploaded:t.coverImageModified,removed:t.coverImageModified}})],1)],1)])]:e("div",{staticClass:"row"},[t.entity.attachments&&t.entity.attachments.length?e("div",{staticClass:"col-12 col-md-8 mb-element"},[e("base-container",{staticClass:"mt-0",attrs:{boxed:"","min-height":"full","is-loading":t.isLoading,"loader-color":t.vars.loaderColor}},[e("view-uploads",{staticClass:"mt-3",attrs:{label:t.$t("upload.attachments"),"name-label":t.$t("upload.attachment"),value:t.entity.attachments,"url-prefix":`/meetings/${t.uuid}/downloads`}})],1)],1):t._e(),t.entity.cover?e("div",{staticClass:"col-12 col-md-4 mb-element"},[e("base-container",{staticClass:"mt-0",attrs:{boxed:"","min-height":"full","is-loading":t.isLoading,"loader-color":t.vars.loaderColor}},[e("h5",{staticClass:"mt-0 mb-4"},[t._v(t._s(t.$t("meeting.props.cover_image")))]),e("img",{staticClass:"img-fluid img-thumbnail",attrs:{src:t.entity.cover}})])],1):t._e()])]:t._e()],2)},P=[],T=l(L,M,P,!1,null,null,null,null);const H=T.exports;export{H as default};