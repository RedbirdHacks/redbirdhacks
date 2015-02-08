/*!CK:4041840182!*//*1422247158,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["KnOgj"]); }

__d("BusinessConf",[],function(a,b,c,d,e,f){e.exports={DOMAIN:"business",BIZ_ID_PARAM_NAME:"business_id",LABEL_ID_PARAM_NAME:"label_id",ACCOUNT_ID_PARAM_NAME:"act",ACCOUNT_ID_PARAM_NAME_LONG:"account_id",ACCOUNT_IDS_PARAM_NAME_LONG:"account_ids",PAGE_ID_PARAM_NAME:"id",PAGE_ADMIN_SELECTED_KEY:"sk",PRODUCT_CATALOG_ID_PARAM_NAME:"catalog_id",PRODUCT_FEED_ID_PARAM_NAME:"feed_id",LEGACY_ADS_MANAGER_PREFIX:"\/ads\/manage\/",CAMPAIGN_MANAGER_PREFIX:"\/ads\/manager\/",SAM_PREFIX:"\/ads\/management\/",SHOW_SPLASH_PARAM_NAME:"splash",SHOW_GRAY_MIGRATE_COMPLETE_SPLASH_PARAM_NAME:"migrate",WHITELISTED_URI_CLASS:"bizOK",OPT_OUT_KEY:"do_not_redirect_to_biz_site",OPT_OUT_EXPIRE:86400,HIGHLANDER_OPT_OUT_KEY:"use_biz_page_in_highlander"};},null);
__d("MercuryGenericConstants",[],function(a,b,c,d,e,f){e.exports={MAX_THREAD_NAME_LENGTH:250};},null);
__d("PagesMessagingConst",[],function(a,b,c,d,e,f){e.exports={LOAD_MESSAGE_THREAD_URI:"\/ajax\/pages\/messages\/load_message_thread.php",ASYNC_ENDPOINT:"\/ajax\/messaging\/async.php"};},null);
__d("BusinessAssetGrouping.brands",["emptyFunction","fbt","getObjectValues"],function(a,b,c,d,e,f,g,h,i){'use strict';var j=("You"),k="personal-business",l={NULL_BIZ_ID:k,DEFAULT_NON_BIZ_NAME:j,groupAssets:function(t,u,v,w,x,y,z,aa){x=x||q;y=y||g.thatReturnsTrue;var ba=m(t,u,v),ca=ba.businessesByID;ca[k]={id:k,name:z||j};var da=n(ba.assetsByBizID,ca,w),ea=r(i(da),p);if(aa&&ea[0].bizID===k)ea.shift();var fa=[];for(var ga=0;ga<ea.length;ga++){var ha=ea[ga],ia=false;ha.assets=r(ha.assets,x);ha.assets=s(ha.assets,y,ha.bizID);if(ha.assets.length!==0){fa=fa.concat(ha.assets);ia=true;}ha.projects=r(i(ha.projectsByID),o);delete ha.projectsByID;for(var ja=0;ja<ha.projects.length;ja++){ha.projects[ja].assets=r(ha.projects[ja].assets,x);ha.projects[ja].assets=s(ha.projects[ja].assets,y,ha.bizID);if(ha.projects[ja].assets.length!==0){fa=fa.concat(ha.projects[ja].assets);ia=true;}}if(!ia)ea[ga]=null;}ea=ea.filter(function(ka){return ka;});return {businessesByID:ca,groupedAssets:ea,assets:fa};}};function m(t,u,v){var w={},x={};for(var y=0;y<t.length;y++){var z=t[y],aa=v(z);if(!aa||aa.length===0){w[k]?w[k].push(z):w[k]=[z];continue;}for(var ba=0;ba<aa.length;ba++){var ca=aa[ba],da;if(ca.business){da=ca.business.id;x[da]=ca.business;}else da=k;if(w[da]){w[da].push(z);}else w[da]=[z];}}return {assetsByBizID:w,businessesByID:x};}function n(t,u,v){var w={},x;for(var y in t){x=t[y];w[y]=w[y]||{bizID:y,name:u[y].name,projectsByID:{},assets:[]};for(var z=0;z<x.length;z++){var aa=x[z],ba=v(aa),ca=false;if(y!==k&&ba&&ba.length>0)for(var da=0;da<ba.length;da++){var ea=ba[da];if(ea.business&&ea.business.id!==y)continue;var fa=w[y].projectsByID;fa[ea.id]=fa[ea.id]||{projectID:ea.id,name:u[y].name+" - "+ea.name,assets:[]};fa[ea.id].assets.push(aa);ca=true;}if(!ca)w[y].assets.push(aa);}}return w;}function o(t){return (t.name||"").toUpperCase();}function p(t){if(t.bizID===k)return String.fromCharCode(0);return t.name;}function q(t){return t.name?t.name:t.id;}function r(t,u){return t.sort(function(v,w){var x=u(v),y=u(w);if(x>y){return 1;}else if(x<y){return -1;}else return 0;});}function s(t,u,v){return t.filter(function(w){return u(w,v);});}e.exports=l;},null);
__d("BizSiteIdentifier.brands",["BusinessConf","BusinessAssetGrouping.brands","URI"],function(a,b,c,d,e,f,g,h,i){var j=h.NULL_BIZ_ID,k={isBizSite:function(){return i.getRequestURI(false).getSubdomain()===g.DOMAIN;},getBusinessID:function(){return i.getRequestURI(false).getQueryData()[g.BIZ_ID_PARAM_NAME];},createBusinessURL:function(l,m){if(m===j)return i(l).setSubdomain('www');var n=i(l).setSubdomain(g.DOMAIN);if(k.isBizSite())n.setDomain(i.getRequestURI().getDomain());var o=m||k.getBusinessID();n.addQueryData(g.BIZ_ID_PARAM_NAME,o);return n;}};e.exports=k;},null);
__d("FlexibleBlock.react",["LeftRight.react","React","cx","invariant","keyMirror"],function(a,b,c,d,e,f,g,h,i,j,k){var l=k({left:true,right:true});function m(o){j(o.flex&&o.flex in n.FLEX);j(o.children&&o.children.length===2);}var n=h.createClass({displayName:"FlexibleBlock",render:function(){m(this.props);var o,p=this.props.children[0],q=this.props.children[1],r=this.props.flex==l.left,s;if(r){s=p;o=g.DIRECTION.right;}else{s=q;o=g.DIRECTION.left;}var t=h.createElement("div",{className:"_42ef"},s);return (h.createElement(g,h.__spread({},this.props,{direction:o}),r?t:this.props.children[0],r?this.props.children[1]:t));}});n.FLEX=l;e.exports=n;},null);
__d("MercuryUnseenState",["MercuryFolders","KeyedCallbackManager","LogHistory","MercuryActionType","MercurySingletonMixin","MercuryThreadlistConstants","MessagingTag","ReportState","MercuryServerRequests","MercuryThreadInformer","MercuryThreadMuter","MercuryThreads","copyProperties","createObjectFrom","isEmpty"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var v=l.MAX_UNSEEN_COUNT,w='unseen_thread_hash',x='unseen_thread_list',y=i.getInstance('mercury_unseen_state');function z(oa){this._fbid=oa;this._serverRequests=o.getForFBID(this._fbid);this._threads=r.getForFBID(this._fbid);this._threadInformer=p.getForFBID(this._fbid);this._initialUnseenCount=null;this._lastSeenTimestamp=0;this._maxCount=false;this._pendingServerUpdates=false;this._unseenResources=new h();this._serverRequests.subscribe('update-unseen',function(pa,qa){fa(this,qa);}.bind(this));this._serverRequests.subscribe('update-thread-ids',function(pa,qa){la(this,qa);}.bind(this));}s(z.prototype,{getUnseenCount:function(){if(this.exceedsMaxCount()){y.error('unguarded_unseen_count_fetch',{});return 0;}return ea(this)||0;},exceedsMaxCount:function(){return this._maxCount||(ea(this)>v);},markAsSeen:function(){var oa=ea(this);if(oa===null){this._pendingServerUpdates=true;}else if(oa>0||this._maxCount){this._serverRequests.markSeen();var pa=this._serverRequests.getLastActionTimestamp();ga(this,pa,[]);}}});s(z,k);function aa(oa,pa,qa){var ra={};ra[pa]=0;ia(oa,ra,qa);}function ba(oa,pa){oa._unseenResources.setResource(w,pa);oa._unseenResources.setResource(x,Object.keys(pa));}function ca(oa,pa){var qa=oa._unseenResources.executeOrEnqueue(w,pa),ra=oa._unseenResources.getUnavailableResources(qa);if(ra.length)oa._serverRequests.fetchUnseenThreadIDs();}function da(oa){return oa._unseenResources.getResource(w);}function ea(oa){var pa=oa._unseenResources.getResource(x);if(pa){return pa.length;}else return oa._initialUnseenCount;}function fa(oa,pa){var qa=na(pa);if(pa.unseen_thread_fbids){pa.unseen_thread_fbids.forEach(function(bb){if(bb.folder!=m.INBOX)return;var cb=bb.thread_fbids||[];cb=cb.concat(bb.other_user_fbids||[]);var db=ka(oa,cb),eb=oa._lastSeenTimestamp;if(qa&&qa.seen_timestamp)eb=qa.seen_timestamp;ga(oa,eb,db);if(qa&&qa.unseen_count>v)oa._maxCount=true;});}else if(qa&&qa.seen_timestamp){oa._lastSeenTimestamp=qa.seen_timestamp;if(qa.unseen_count>v){oa._maxCount=true;ba(oa,{});}else{oa._initialUnseenCount=qa.unseen_count;if(oa._initialUnseenCount===0)ba(oa,{});}}else{if(oa._maxCount)return;var ra=pa.actions;if(!ra||!(ra.length))return;var sa={},ta={};for(var ua=0;ua<ra.length;ua++){var va=ra[ua];if(va.is_forward)continue;var wa=va.action_type,xa=va.other_user_fbid?va.other_user_fbid:va.thread_fbid,ya=va.thread_id?va.thread_id:xa;if(wa==j.MARK_THREAD_SEEN){aa(oa,ya,va.persistent);continue;}if(!ma(oa,va))continue;if(wa==j.USER_GENERATED_MESSAGE||wa==j.LOG_MESSAGE){var za=sa[ya]?va.timestamp>sa[ya]:false,ab=za||!sa[ya];if(va.is_unread&&ab)oa._threads.getThreadMeta(ya,function(bb){var cb=false;if(bb&&bb.last_read_timestamp)if(bb.last_read_timestamp>=va.timestamp)cb=true;if(!q.isThreadMuted(bb)&&!cb)sa[ya]=va.timestamp;});}else if(wa==j.CHANGE_READ_STATUS&&va.mark_as_read)ta[ya]=va.timestamp;}ha(oa,sa);ia(oa,ta);}if(oa._pendingServerUpdates){oa._pendingServerUpdates=false;oa.markAsSeen();}}function ga(oa,pa,qa){var ra=da(oa);if(ra===(void 0)||pa>oa._lastSeenTimestamp||oa._maxCount){oa._lastSeenTimestamp=pa;qa=qa||[];if(qa.length<=v)oa._maxCount=false;var sa={},ta=da(oa)||{};for(var ua in ta)if(ta[ua]!==true){var va=ta[ua];if(ja(oa,va))sa[ua]=va;}var wa=s(t(qa,true),sa);ba(oa,wa);oa._threadInformer.updatedUnseenState();}}function ha(oa,pa){if(oa._maxCount)return;var qa={},ra=false;for(var sa in pa){var ta=pa[sa];if(ja(oa,ta)){qa[sa]=ta;ra=true;}}if(!ra)return;ca(oa,function(ua){for(var va in qa){var wa=qa[va];if(!ua[va]&&ja(oa,wa))ua[va]=qa[va];}ba(oa,ua);oa._threadInformer.updatedUnseenState();});}function ia(oa,pa,qa){var ra=false;if(!u(pa))ra=true;if(ra)ca(oa,function(sa){var ta=false;for(var ua in pa){var va=pa[ua],wa=va>sa[ua];if(sa[ua]&&(!va||wa)){delete sa[ua];ta=true;}}if(ta){ba(oa,sa);oa._threadInformer.updatedUnseenState();if(qa&&ea(oa)===0)oa._serverRequests.markSeen();}});}function ja(oa,pa){return pa>oa._lastSeenTimestamp;}function ka(oa,pa){return pa.map(oa._serverRequests.convertThreadIDIfAvailable,oa._serverRequests);}function la(oa,pa){var qa=da(oa);if(!qa)return;for(var ra in pa){var sa=pa[ra];if(qa[ra]){qa[sa]=qa[ra];delete qa[ra];}}ba(oa,qa);}function ma(oa,pa){var qa=pa.thread_id?oa._threads.getThreadMetaNow(pa.thread_id):null,ra=qa?g.getFromMeta(qa):pa.folder;return ra===m.INBOX||ra===(void 0);}function na(oa){var pa=(oa.message_counts||[]);for(var qa=0;qa<pa.length;qa++)if(pa[qa].folder==m.INBOX)return pa[qa];return null;}n.registerCallback('mercury-unseen-state',function(){var oa={};oa.unseen={};oa.unseen_max_count={};oa.unseen_time={};var pa=z._getInstances();for(var qa in pa){oa.unseen[qa]=s({},da(pa[qa]));oa.unseen_max_count[qa]=pa[qa]._maxCount;oa.unseen_time[qa]=pa[qa]._lastSeenTimestamp;}return oa;});e.exports=z;},null);
__d("TypeaheadRegulateMemorializedUsers",["TokenizeUtil","copyProperties"],function(a,b,c,d,e,f,g,h){function i(j){"use strict";this._typeahead=j;}i.prototype._filter=function(j,k){"use strict";if(j.type!=='user'||!j.memorialized)return true;var l=g.parse(j.text).tokens;if(l.length===1&&g.isExactMatch(k,j.text))return true;var m=this._typeahead.getData().getTextToIndex(j),n=g.parse(k).tokens;return (n.length>1&&g.isQueryMatch(k,m));};i.prototype.enable=function(){"use strict";this._filterRegistry=this._typeahead.getData().addFilter(this._filter.bind(this));};i.prototype.disable=function(){"use strict";this._filterRegistry.remove();this._filterRegistry=null;};h(i.prototype,{_filterRegistry:null});e.exports=i;},null);
__d("legacy:RegulateMemorializedUsersTypeaheadBehavior",["TypeaheadRegulateMemorializedUsers"],function(a,b,c,d,e,f,g){if(!a.TypeaheadBehaviors)a.TypeaheadBehaviors={};a.TypeaheadBehaviors.regulateMemorializedUsers=function(h){h.enableBehavior(g);};},3);
__d("XUIBadge",["CSS","DOM","cx","invariant"],function(a,b,c,d,e,f,g,h,i,j){function k(m){return parseInt(m,10)===m;}function l(m){"use strict";this.target=m.target;this.count=m.count;this.maxcount=m.maxcount;}l.prototype.getCount=function(){"use strict";return this.count;};l.prototype.setCount=function(m){"use strict";j(k(m));j(m>=0);this.count=m;g.conditionClass(this.target,'hidden_elem',this.count===0);if(m>this.maxcount){h.setContent(this.target,this.maxcount+'+');g.addClass(this.target,"_5ugi");}else{h.setContent(this.target,m);g.removeClass(this.target,"_5ugi");}};l.prototype.setLegacyContent=function(m){"use strict";if(typeof m==='string'){g.conditionClass(this.target,'hidden_elem',m==0);h.setContent(this.target,m);g.removeClass(this.target,"_5ugi");}else this.setCount(m);};l.prototype.increment=function(){"use strict";this.setCount(this.getCount()+1);};e.exports=l;},null);
__d("VaultBoxURI",["URI"],function(a,b,c,d,e,f,g){var h={PHOTOS_SYNCED:'photos_synced',isVaultBoxURI:function(i){var j=new RegExp("\/"+h.PHOTOS_SYNCED+"\/?$");return i.getPath().match(j)&&i.getQueryData().hasOwnProperty('view_image');},isVaultArchiveURI:function(i){var j=new RegExp("\/"+h.PHOTOS_SYNCED+"\/?$");return i.getPath().match(j);},getSyncedTabURI:function(){return new g('/me/'+h.PHOTOS_SYNCED).getQualifiedURI();}};e.exports=h;},null);