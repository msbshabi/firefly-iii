"use strict";(self["webpackChunkfirefly_iii"]=self["webpackChunkfirefly_iii"]||[]).push([[9034],{9034:(e,t,a)=>{a.r(t),a.d(t,{default:()=>$});var i=a(3673),n=a(2323);const r=(0,i.Uk)("Edit"),s=(0,i.Uk)("Delete");function o(e,t,a,o,l,u){const d=(0,i.up)("q-th"),p=(0,i.up)("q-tr"),c=(0,i.up)("router-link"),g=(0,i.up)("q-td"),m=(0,i.up)("q-item-label"),f=(0,i.up)("q-item-section"),h=(0,i.up)("q-item"),w=(0,i.up)("q-list"),y=(0,i.up)("q-btn-dropdown"),b=(0,i.up)("q-table"),k=(0,i.up)("q-fab-action"),_=(0,i.up)("q-fab"),q=(0,i.up)("q-page-sticky"),Z=(0,i.up)("q-page"),W=(0,i.Q2)("close-popup");return(0,i.wg)(),(0,i.j4)(Z,null,{default:(0,i.w5)((()=>[(0,i.Wm)(b,{title:e.$t("firefly.currencies"),rows:l.rows,columns:l.columns,"row-key":"id",onRequest:u.onRequest,pagination:l.pagination,"onUpdate:pagination":t[0]||(t[0]=e=>l.pagination=e),loading:l.loading,class:"q-ma-md"},{header:(0,i.w5)((e=>[(0,i.Wm)(p,{props:e},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.cols,(t=>((0,i.wg)(),(0,i.j4)(d,{key:t.name,props:e},{default:(0,i.w5)((()=>[(0,i.Uk)((0,n.zw)(t.label),1)])),_:2},1032,["props"])))),128))])),_:2},1032,["props"])])),body:(0,i.w5)((e=>[(0,i.Wm)(p,{props:e},{default:(0,i.w5)((()=>[(0,i.Wm)(g,{key:"name",props:e},{default:(0,i.w5)((()=>[(0,i.Wm)(c,{to:{name:"currencies.show",params:{code:e.row.code}},class:"text-primary"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,n.zw)(e.row.name),1)])),_:2},1032,["to"])])),_:2},1032,["props"]),(0,i.Wm)(g,{key:"name",props:e},{default:(0,i.w5)((()=>[(0,i.Uk)((0,n.zw)(e.row.code),1)])),_:2},1032,["props"]),(0,i.Wm)(g,{key:"menu",props:e},{default:(0,i.w5)((()=>[(0,i.Wm)(y,{color:"primary",label:"Actions",size:"sm"},{default:(0,i.w5)((()=>[(0,i.Wm)(w,null,{default:(0,i.w5)((()=>[(0,i.wy)(((0,i.wg)(),(0,i.j4)(h,{clickable:"",to:{name:"currencies.edit",params:{code:e.row.code}}},{default:(0,i.w5)((()=>[(0,i.Wm)(f,null,{default:(0,i.w5)((()=>[(0,i.Wm)(m,null,{default:(0,i.w5)((()=>[r])),_:1})])),_:1})])),_:2},1032,["to"])),[[W]]),(0,i.wy)(((0,i.wg)(),(0,i.j4)(h,{clickable:"",onClick:t=>u.deleteCurrency(e.row.code,e.row.name)},{default:(0,i.w5)((()=>[(0,i.Wm)(f,null,{default:(0,i.w5)((()=>[(0,i.Wm)(m,null,{default:(0,i.w5)((()=>[s])),_:1})])),_:1})])),_:2},1032,["onClick"])),[[W]])])),_:2},1024)])),_:2},1024)])),_:2},1032,["props"])])),_:2},1032,["props"])])),_:1},8,["title","rows","columns","onRequest","pagination","loading"]),(0,i.Wm)(q,{position:"bottom-right",offset:[18,18]},{default:(0,i.w5)((()=>[(0,i.Wm)(_,{label:"Actions",square:"","vertical-actions-align":"right","label-position":"left",color:"green",icon:"fas fa-chevron-up",direction:"up"},{default:(0,i.w5)((()=>[(0,i.Wm)(k,{color:"primary",square:"",to:{name:"currencies.create"},icon:"fas fa-exchange-alt",label:"New currency"},null,8,["to"])])),_:1})])),_:1})])),_:1})}var l=a(3617),u=a(2017),d=a(5819);const p={name:"Index",watch:{$route(e){"currencies.index"===e.name&&(this.page=1,this.updateBreadcrumbs(),this.triggerUpdate())}},data(){return{rows:[],pagination:{sortBy:"desc",descending:!1,page:1,rowsPerPage:5,rowsNumber:100},loading:!1,columns:[{name:"name",label:"Name",field:"name",align:"left"},{name:"name",label:"Code",field:"code",align:"left"},{name:"menu",label:" ",field:"menu",align:"right"}]}},computed:{...(0,l.Se)("fireflyiii",["getRange","getCacheKey","getListPageSize"])},created(){this.pagination.rowsPerPage=this.getListPageSize},mounted(){if(this.type=this.$route.params.type,null===this.getRange.start||null===this.getRange.end){const e=(0,l.oR)();e.subscribe(((e,t)=>{"fireflyiii/setRange"===e.type&&(this.range={start:e.payload.start,end:e.payload.end},this.triggerUpdate())}))}null!==this.getRange.start&&null!==this.getRange.end&&(this.range={start:this.getRange.start,end:this.getRange.end},this.triggerUpdate())},methods:{deleteCurrency:function(e,t){this.$q.dialog({title:"Confirm",message:'Do you want to delete currency "'+t+'"? Any and all transactions linked to this currency will be deleted as well.',cancel:!0,persistent:!0}).onOk((()=>{this.destroyCurrency(e)}))},destroyCurrency:function(e){new u.Z("currencies").destroy(e).then((()=>{this.$store.dispatch("fireflyiii/refreshCacheKey"),this.triggerUpdate()}))},updateBreadcrumbs:function(){this.$route.meta.pageTitle="firefly.currencies",this.$route.meta.breadcrumbs=[{title:"currencies"}]},onRequest:function(e){this.page=e.pagination.page,this.triggerUpdate()},triggerUpdate:function(){if(this.loading)return;if(null===this.range.start||null===this.range.end)return;this.loading=!0;const e=new d.Z;this.rows=[],e.list(this.page,this.getCacheKey).then((e=>{this.pagination.rowsPerPage=e.data.meta.pagination.per_page,this.pagination.rowsNumber=e.data.meta.pagination.total,this.pagination.page=this.page;for(let t in e.data.data)if(e.data.data.hasOwnProperty(t)){let a=e.data.data[t],i={id:a.id,name:a.attributes.name,code:a.attributes.code};this.rows.push(i)}this.loading=!1}))}}};var c=a(4260),g=a(4379),m=a(4993),f=a(8186),h=a(2414),w=a(3884),y=a(2226),b=a(7011),k=a(3414),_=a(2035),q=a(2350),Z=a(4264),W=a(9200),C=a(9975),Q=a(677),R=a(7518),P=a.n(R);const U=(0,c.Z)(p,[["render",o]]),$=U;P()(p,"components",{QPage:g.Z,QTable:m.Z,QTr:f.Z,QTh:h.Z,QTd:w.Z,QBtnDropdown:y.Z,QList:b.Z,QItem:k.Z,QItemSection:_.Z,QItemLabel:q.Z,QPageSticky:Z.Z,QFab:W.Z,QFabAction:C.Z}),P()(p,"directives",{ClosePopup:Q.Z})}}]);