import{A as d}from"../../../AppLogo.f7561746.js";import{E as c}from"../../../event-bus.fa2a0358.js";import{m as n,i as o}from"../../../vendor/vendor-core.b127d6f1.js";import{n as f}from"../../../momentz.be6fd052.js";import{s as u,l as m}from"../../../app.e5c25aad.js";import{n as l}from"../../../_plugin-vue2_normalizer.7b9a2fe2.js";import{s as i}from"../../../vendor/vendor-screenfull.9a79c0ca.js";import{u as g}from"../../../user-dropdown.d7b89645.js";import"../../../vendor/vendor-others.8d770de0.js";import"../../../vendor/vendor-essential.41987d0e.js";import"../../../vendor/vendor-bootstrap-vue.8cf54841.js";import"../../../vendor/vendor-vue-gtag.e72bb2d4.js";import"../../../vendor/vendor-vue-avatar.b7d876b9.js";const h=u.getters["config/vars"],p={name:"todo-widget",props:{reload:{type:Boolean,default:!1}},data(){return{todos:[],formData:{title:"",date:f(h.serverDateFormat)},formErrors:{},isLoading:!1}},watch:{reload(e,t){e&&e!==t&&this.getInitialData()}},computed:{...n("config",["vars"]),...n("common",["others"]),incompletedTasksCount(){return this.others?this.others.todos.filter(e=>!e.status).length:0},date(){return moment(this.formData.date,this.vars.serverDateFormat).format("dddd, Do")},month(){return moment(this.formData.date,this.vars.serverDateFormat).format("MMMM")}},methods:{...o("common",["Custom","SetOthers"]),submit(){if(!this.formData.title)return this.$toasted.info(this.$t("general.nothing_changed"),this.$toastConfig.info),!1;this.isLoading=!0,this.Custom({url:"utility/todos",method:"post",data:this.formData}).then(e=>{let t=this.others.todos;t.unshift(e.todo),this.SetOthers({todos:t}),this.resetVueScroll(),this.$toasted.success(e.message,this.$toastConfig),this.formData.title="",this.isLoading=!1,c.$emit("REFRESH_TABLE","appUtilityTodoList")}).catch(e=>{this.isLoading=!1,this.formErrors=formUtil.handleErrors(e)})},toggleTodo(e){this.isLoading=!0,this.Custom({url:"utility/todos/"+e.uuid+"/status",method:"post"}).then(t=>{e.status=!e.status;let s=this.others.todos;this.SetOthers({todos:s}),this.$toasted.success(t.message,this.$toastConfig),this.isLoading=!1,c.$emit("REFRESH_TABLE","appUtilityTodoList")}).catch(t=>{this.isLoading=!1,this.formErrors=formUtil.handleErrors(t)})},getInitialData(){this.isLoading=!0,this.Custom({url:"utility/todos?type=list&sort_by=due_date,status&order=desc,asc&date="+this.formData.date,method:"get"}).then(e=>{this.SetOthers({todos:e}),this.resetVueScroll(),this.isLoading=!1}).catch(e=>{this.isLoading=!1,this.formErrors=formUtil.handleErrors(e)})},getNextTodo(){this.formData.date=moment(this.formData.date,this.vars.serverDateFormat).add(1,"days").format(this.vars.serverDateFormat),this.getInitialData()},getPreviousTodo(){this.formData.date=moment(this.formData.date,this.vars.serverDateFormat).subtract(1,"days").format(this.vars.serverDateFormat),this.getInitialData()},resetVueScroll(){setTimeout(()=>{this.$refs.vuescrollTodo&&this.$refs.vuescrollTodo.scrollTo({x:0,y:0},!0)},100)}},mounted(){this.getInitialData()}};var v=function(){var t=this,s=t._self._c;return s("card",{staticClass:"todo-widget",attrs:{shadow:"","body-classes":"p-0"}},[s("div",{staticClass:"widget-wrapper"},[s("div",{staticClass:"widget-header"},[s("div",{staticClass:"todo-date"},[s("h4",[t._v(t._s(t.date))]),s("h6",[t._v(t._s(t.month))])]),s("div",{staticClass:"todo-meta"},[s("div",{staticClass:"todo-nav"},[s("base-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.d500",modifiers:{hover:!0,d500:!0}}],attrs:{type:"button",design:"link",title:t.$t("general.previous_day")},on:{click:t.getPreviousTodo}},[s("i",{staticClass:"fas fa-arrow-left"})]),s("base-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.d500",modifiers:{hover:!0,d500:!0}}],attrs:{type:"button",design:"link",title:t.$t("general.next_day")},on:{click:t.getNextTodo}},[s("i",{staticClass:"fas fa-arrow-right"})])],1),t.others.todos?s("span",[t._v(t._s(t.incompletedTasksCount)+" "+t._s(t.$t("utility.todo.tasks")))]):t._e()])]),s("div",{staticClass:"widget-body"},[s("div",{staticClass:"todo-form mt-2"},[s("form",{on:{submit:function(a){return a.preventDefault(),t.submit.apply(null,arguments)}}},[s("div",{staticClass:"d-flex"},[s("base-input",{staticClass:"flex-grow",attrs:{placeholder:t.$t("utility.todo.type_task"),type:"text",name:"title",error:t.formErrors.title,format:"sentence","wrapper-classes":"pt-0"},on:{"update:error":function(a){return t.$set(t.formErrors,"title",a)}},model:{value:t.formData.title,callback:function(a){t.$set(t.formData,"title",a)},expression:"formData.title"}})],1),s("button",{staticClass:"d-none",attrs:{type:"submit"}})])]),s("div",{staticClass:"todo-list-wrapper",class:{"fixed-height":t.others.todos&&t.others.todos.length>5}},[s("vue-scroll",{ref:"vuescrollTodo",attrs:{id:"vuescrollTodo"}},[t.others.todos&&t.others.todos.length?s("ul",{staticClass:"todo-list"},t._l(t.others.todos,function(a){return s("li",{key:a.uuid,class:["todo-item",{completed:a.status}]},[s("div",{staticClass:"todo-details",on:{click:function(r){return t.$router.push({name:"appUtilityTodoView",params:{uuid:a.uuid}})}}},[s("h6",{staticClass:"title"},[t._v(t._s(a.title))])]),a.time?s("div",{staticClass:"todo-date"},[t._v(" "+t._s(t._f("moment")([`${a.date} ${a.time}`,t.vars.serverDateTimeFormat],"from"))+" ")]):s("div",{staticClass:"todo-date"},[t._v(" "+t._s(t._f("moment")([a.date,t.vars.serverDateFormat],"from"))+" ")]),s("div",{staticClass:"todo-status",on:{click:function(r){return t.toggleTodo(a)}}},[a.status?s("i",{staticClass:"fas fa-check-circle text-primary"}):s("i",{staticClass:"far fa-circle"})])])}),0):s("div",{staticClass:"d-flex min-height-100px justify-content-center align-items-center"},[s("h5",{staticClass:"text-muted"},[t._v(t._s(t.$t("utility.todo.all_caught_up")))])])])],1)]),s("div",{staticClass:"widget-footer"})])])},_=[],C=l(p,v,_,!1,null,"770b9727",null,null);const b=C.exports;const w={name:"notification-widget",props:{reload:{type:Boolean,default:!1}},data(){return{isLoading:!1}},watch:{reload(e,t){e&&e!==t&&this.getInitialData()}},computed:{...n("config",["vars"]),...n("user",["notifications"])},methods:{...o("user",["GetNotifications"]),notificationClick(e){debugger},toggleNotification(e){this.isLoading=!0,this.Custom({url:"utility/notifications/"+e.uuid+"/status",method:"post"}).then(t=>{e.status=!e.status,this.isLoading=!1}).catch(t=>{this.isLoading=!1,this.formErrors=formUtil.handleErrors(t)})},getInitialData(){this.isLoading=!0,this.GetNotifications().then(e=>{this.resetVueScroll(),this.isLoading=!1}).catch(e=>{this.isLoading=!1,this.formErrors=formUtil.handleErrors(e)})},resetVueScroll(){setTimeout(()=>{this.$refs.vuescrollNotification&&this.$refs.vuescrollNotification.scrollTo({x:0,y:0},!0)},100)}},mounted(){this.getInitialData()}};var y=function(){var t=this,s=t._self._c;return s("card",{staticClass:"notification-widget",attrs:{shadow:"","body-classes":"p-0"}},[s("div",{staticClass:"widget-wrapper"},[s("div",{staticClass:"widget-header text-muted"},[s("div",{staticClass:"text-muted"},[s("i",{staticClass:"far fa-bell"})]),s("div",{staticClass:"flex-grow-1 text-center"},[t._v(t._s(t.$t("user.notification.notifications")))]),s("div",{},[s("base-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.d500",modifiers:{hover:!0,d500:!0}}],attrs:{type:"button",design:"link",title:t.$t("config.notification.setting")}},[s("i",{staticClass:"fas fa-cog"})])],1)]),s("div",{staticClass:"widget-body"},[s("div",{staticClass:"notification-list-wrapper",class:{"fixed-height":t.notifications&&t.notifications.length>5}},[s("vue-scroll",{ref:"vuescrollNotification",attrs:{id:"vuescrollNotification"}},[t.notifications&&t.notifications.meta.total?s("ul",{staticClass:"notification-list"},t._l(t.notifications.data,function(a){return s("li",{key:a.uuid,staticClass:"notification-item"},[s("div",{staticClass:"notification-details",class:{completed:a.status},on:{click:function(r){return t.notificationClick(a)}}},[s("h6",{staticClass:"title"},[t._v(t._s(a.data.title))])]),s("div",{staticClass:"notification-date"},[t._v(" "+t._s(t._f("moment")(a.createdAt,"calendar",null,{sameElse:t.vars.defaultDateTimeFormat}))+" ")]),s("div",{staticClass:"notification-status",on:{click:function(r){return t.toggleNotification(a)}}},[a.status?s("i",{staticClass:"fas fa-check-circle text-primary"}):s("i",{staticClass:"far fa-circle"})])])}),0):s("div",{staticClass:"d-flex min-height-100px justify-content-center align-items-center"},[s("h5",{staticClass:"text-muted"},[t._v(t._s(t.$t("user.notification.all_caught_up")))])])])],1)]),t.notifications&&t.notifications.length?s("div",{staticClass:"widget-footer text-center"},[s("base-button",{staticClass:"text-center btn-block p-2",attrs:{type:"button",design:"link",size:"sm"}},[t._v(t._s(t.$t("user.notification.see_all")))])],1):t._e()])])},k=[],S=l(w,y,k,!1,null,"9c419b51",null,null);const $=S.exports;const x={extends:g,components:{AppLogo:d,TodoWidget:b,NotificationWidget:$},data(){return{userDropddownOpen:!1}},computed:{selectedLocale(){return this.configs.system.locales.find(e=>e.locale===this.configs.system.locale)}},methods:{...o("config",["SetUiConfig"]),...o("common",["Custom"]),...o("navigation",["Generate"]),...o("user",["GetUser"]),toggleSearchScreen(){this.$gaEvent("engagement","toggleSearchScreen",this.uiConfigs.searchScreenShow?"hide":"show"),this.SetUiConfig({searchScreenShow:!this.uiConfigs.searchScreenShow})},toggleLeftSidebar(){this.SetUiConfig({leftSidebarShow:!this.uiConfigs.leftSidebarShow})},toggleRightSidebar(){this.SetUiConfig({rightSidebarShow:!this.uiConfigs.rightSidebarShow})},toggleConfigSidebar(){this.SetUiConfig({configSidebarShow:!this.uiConfigs.configSidebarShow})},toggleFullScreen(e){i.isEnabled&&(e?i.request():i.exit())},takeScreenshot(){this.userDropddownOpen=!this.userDropddownOpen,Vue.nextTick().then(()=>{!html2canvas||html2canvas(document.querySelector(".__view"),{logging:!1}).then(e=>{document.querySelector("#screenshot").innerHTML="",document.querySelector("#screenshot").appendChild(e),document.querySelector("#screenshotWrapper").classList.add("show")})})},setLocaleUserPreference(e){this.isLoading=!0,m({system:{locale:e?e.locale:"en"}}).then(t=>{this.GetUser().then(()=>{location.reload(),this.isLoading=!1}).catch(s=>{this.isLoading=!1,formUtil.handleErrors(s)})}).catch(t=>{this.isLoading=!1,formUtil.handleErrors(t)})}},mounted(){i.isEnabled&&(i.on("change",()=>{this.SetUiConfig({fullScreen:i.isFullscreen})}),i.on("error",e=>{console.error("Failed to enable fullscreen",e)}),this.SetUiConfig({fullScreen:!1}))},destroyed(){i.isEnabled&&(i.off("change"),i.off("error"))}};var D=function(){var t=this,s=t._self._c;return s("nav",{staticClass:"navbar navbar-design-basic navbar-expand-sm d-flex justify-content-around align-items-center flex-nowrap"},[t.sidebarEnabled?s("a",{staticClass:"nav-link toggle-left-sidebar d-lg-none pr-4",on:{click:t.toggleLeftSidebar}},[s("i",{staticClass:"fas fa-bars"})]):t._e(),s("app-logo",{attrs:{place:"navbar"}}),s("ul",{staticClass:"nav nav-inline d-none d-sm-flex mr-2"},[t.sidebarEnabled?s("li",{staticClass:"nav-item"},[s("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"nav-link toggle-left-sidebar",attrs:{title:t.$t("config.ui.toggle_sidebar")},on:{click:t.toggleLeftSidebar}},[s("i",{staticClass:"fas fa-bars"})])]):t._e(),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:{name:"appDashboard"}}},[s("i",{staticClass:"fas fa-house"})])],1),s("li",{staticClass:"nav-item"},[t.uiConfigs.fullScreen?s("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"nav-link toggle-full-screen",attrs:{title:t.$t("config.ui.toggle_fullscreen")},on:{click:function(a){return t.toggleFullScreen(!1)}}},[s("i",{staticClass:"fas fa-compress"})]):s("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"nav-link toggle-full-screen",attrs:{title:t.$t("config.ui.toggle_fullscreen")},on:{click:function(a){return t.toggleFullScreen(!0)}}},[s("i",{staticClass:"fas fa-expand"})])])]),s("ul",{staticClass:"nav nav-inline d-none d-md-flex mr-3"},[t.configs.system&&t.configs.system.maintenanceMode?s("li",{staticClass:"nav-item"},[s("span",{staticClass:"warning-label badge badge-warning"},[t._v(t._s(t.$t("config.system.under_maintenance")))])]):t._e(),t.configs.system&&!t.configs.system.mode?s("li",{staticClass:"nav-item"},[s("span",{staticClass:"warning-label badge badge-warning"},[t._v(t._s(t.$t("config.system.test_mode")))])]):t._e(),t.isOnline?t._e():s("li",{staticClass:"nav-item ml-2"},[s("span",{staticClass:"warning-label badge badge-error"},[s("i",{staticClass:"fas fa-exclamation-triangle"}),t._v(" "+t._s(t.$t("general.offline")))])])]),s("div",{staticClass:"navbar-search-form search-button-wrapper d-none d-lg-block",attrs:{"data-v-step":"search"},on:{click:t.toggleSearchScreen}},[t._m(0)]),s("div",{staticClass:"separator"}),s("ul",{staticClass:"navbar-nav"},[t.hasPermission("create-meeting")?s("base-dropdown",{staticClass:"nav-item cta-dropdown d-flex align-items-center",attrs:{tag:"li",direction:"down","menu-classes":"show-dropdown-down fullwidth-on-mobile",position:"right","enable-split":"","split-btn-classes":"d-none d-md-block"},scopedSlots:t._u([{key:"title",fn:function(){return[s("router-link",{staticClass:"btn cta-main",attrs:{to:{name:"appInstantMeetingStart"}}},[s("i",{staticClass:"fas fa-business-time"}),t._v(" "),s("span",{staticClass:"d-none d-md-flex"},[t._v(t._s(t.$t("meeting.start_a_meeting")))])])]},proxy:!0}],null,!1,238422726)},[s("router-link",{staticClass:"dropdown-item",attrs:{to:{name:"appInstantMeetingStart",query:{type:"video_conference"}}}},[t._v(t._s(t.$t("meeting.start_a_video_conference")))])],1):t._e(),t.configs.system.enableMultilingual&&t.configs.system.locales&&t.configs.system.locales.length>1?s("base-dropdown",{staticClass:"nav-item d-none d-sm-flex",attrs:{tag:"div",position:"right"}},[s("a",{staticClass:"nav-link",attrs:{slot:"title","data-toggle":"dropdown",role:"button"},slot:"title"},[s("span",{staticClass:"mr-1"},[t._v(t._s(t.selectedLocale.name)+" ("+t._s(t.selectedLocale.locale)+")")]),t._v(" "),s("i",{staticClass:"fas fa-angle-down"})]),t._l(t.configs.system.locales,function(a){return s("li",{key:a.locale,staticClass:"dropdown-item",on:{click:function(r){return t.setLocaleUserPreference(a)}}},[t._v(" "+t._s(a.name)+" ("+t._s(a.locale)+") "),a.locale==t.configs.system.locale?s("span",{staticClass:"pull-right"},[s("i",{staticClass:"fas fa-check"})]):t._e()])})],2):t._e(),t.configs.system&&t.configs.system.notifications&&t.hasPermission("access-notifications")?s("base-dropdown",{staticClass:"nav-item d-none d-sm-flex",attrs:{tag:"li","dropdown-menu-tag":"div",size:"lg","toggle-on-click":!1,"menu-classes":"p-0",position:"right"},scopedSlots:t._u([{key:"withScope",fn:function({isOpen:a}){return[s("notification-widget",{attrs:{reload:a}})]}}],null,!1,1999882075)},[s("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"nav-link",attrs:{slot:"title","data-toggle":"dropdown",role:"button",title:t.$t("user.notifications")},slot:"title"},[s("span",[s("i",{staticClass:"far fa-bell"})])])]):t._e(),t.configs.system&&t.configs.system.todo&&t.hasPermission("access-todo")?s("base-dropdown",{staticClass:"nav-item d-none d-sm-flex",attrs:{tag:"li","dropdown-menu-tag":"div",size:"lg","toggle-on-click":!1,"menu-classes":"p-0",position:"right"},scopedSlots:t._u([{key:"withScope",fn:function({isOpen:a}){return[s("todo-widget",{attrs:{reload:a}})]}}],null,!1,3480721670)},[s("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"nav-link",attrs:{slot:"title","data-toggle":"dropdown",role:"button",title:t.$t("utility.todo.todo")},slot:"title"},[s("span",[s("i",{staticClass:"far fa-check-circle"})])])]):t._e(),t.hasPermission("access-config")?s("li",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"nav-item",attrs:{"data-v-step":"config-link",title:t.$t("config.config")}},[s("router-link",{staticClass:"nav-link",attrs:{to:{name:"appConfig"}}},[s("i",{staticClass:"fas fa-cogs"})])],1):t._e(),s("base-dropdown",{staticClass:"nav-item d-flex",attrs:{tag:"li","data-v-step":"user-dropdown",position:"right",open:t.userDropddownOpen,"menu-classes":"fullwidth-on-mobile"},on:{"update:open":function(a){t.userDropddownOpen=a}}},[s("a",{staticClass:"nav-link nav-link-icon nav-user-avatar p-0",attrs:{slot:"title","data-toggle":"dropdown",role:"button"},slot:"title"},[t.loggedInUser?s("user-avatar",{attrs:{user:t.loggedInUser,size:40,"background-color":t.vars.colors.white,"foreground-color":t.vars.colors.primary,classes:t.uiConfigs.hideSecureContent?"border-white":"border-success"}}):t._e()],1),s("h6",{staticClass:"dropdown-header"},[t._v(t._s(t.$t("general.greeting")+", "+t.loggedInUser.name))]),t.loggedInUser?s("router-link",{staticClass:"dropdown-item",attrs:{to:{name:"appProfileView"}}},[s("i",{staticClass:"fas fa-user"}),t._v(" "+t._s(t.$t("user.your_profile"))+" ")]):t._e(),s("router-link",{staticClass:"dropdown-item",attrs:{to:{name:"appUserPreference"}}},[s("i",{staticClass:"fas fa-user-cog"}),t._v(" "+t._s(t.$t("user.user_preference"))+" ")]),t.configs.auth.lockScreen?s("a",{staticClass:"dropdown-item",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.lock.apply(null,arguments)}}},[s("i",{staticClass:"fas fa-lock"}),t._v(" "+t._s(t.$t("auth.lock.lock")))]):t._e(),s("router-link",{staticClass:"dropdown-item",attrs:{to:{name:"appUserChangePassword"}}},[s("i",{staticClass:"fas fa-key"}),t._v(" "+t._s(t.$t("auth.password.change_password"))+" ")]),t.hasRole("admin")?[s("div",{staticClass:"dropdown-divider",attrs:{role:"separator"}}),s("router-link",{staticClass:"dropdown-item",attrs:{to:{name:"appProductUpdate"}}},[s("i",{staticClass:"fas fa-download"}),t._v(" "+t._s(t.$t("product.update.product_update"))+" ")])]:t._e(),t.allowExtraInput&&t.configs.membership.enabled?[s("div",{staticClass:"dropdown-divider",attrs:{role:"separator"}}),s("router-link",{staticClass:"dropdown-item",attrs:{to:{name:"appMembershipList"}}},[s("i",{staticClass:"far fa-id-badge"}),t._v(" "+t._s(t.hasRole("admin")?t.$t("membership.memberships"):t.$t("membership.your_membership"))+" ")])]:t._e(),s("div",{staticClass:"dropdown-divider",attrs:{role:"separator"}}),s("a",{staticClass:"dropdown-item",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.logout.apply(null,arguments)}}},[s("i",{staticClass:"fas fa-power-off"}),t._v(" "+t._s(t.$t("auth.logout")))])],2)],1)],1)},L=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"search-button"},[t("i",{staticClass:"fas fa-search"}),e._v(" Type anywhere to "),t("span",{staticClass:"font-weight-700"},[e._v("search")]),e._v("... ")])}],E=l(x,D,L,!1,null,null,null,null);const z=E.exports;export{z as default};
