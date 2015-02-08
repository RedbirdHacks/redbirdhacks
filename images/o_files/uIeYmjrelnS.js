/*!CK:740754021!*//*1422277233,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["bFPcV"]); }

__d("Composer",["Arbiter","ArbiterMixin","Button","CSS","DOM","Env","Event","FileForm","Focus","HTML","Input","Parent","Run","ServerJS","TextAreaControl","URI","$","ge","mixin","fbt"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z){var aa=1,ba=4,ca={},da,ea=function(ja){if(this.inform('submit')===false){ja.kill();return false;}if(this.submitHandler)return (new Function(this.submitHandler)).apply(this.form);},fa=y(h);for(var ga in fa)if(fa.hasOwnProperty(ga))ia[ga]=fa[ga];var ha=fa===null?null:fa.prototype;ia.prototype=Object.create(ha);ia.prototype.constructor=ia;ia.__superConstructor__=fa;function ia(ja,ka,la,ma,na){"use strict";ca[ja.id]=this;this.root=ja;this.resetCfg=ka;this.dataSource=ma;this.lazyEndpoint=this.resetCfg&&this.resetCfg.lazyEndpoint;this.focus=k.find(ja,'div.focus_target');this.form=k.find(ja,'form.attachmentForm');this.content=k.find(ja,'div.attachmentContent');this.isMetaComposer=la;if(this.isMetaComposer){this.messageBox=k.find(ja,'div.uiMetaComposerMessageBox');this.metaArea=k.find(ja,'div.attachmentMetaArea');this.bottomArea=k.find(ja,'div.attachmentBottomArea');this.barArea=k.find(ja,'div.attachmentBarArea');this.auxBarArea=k.find(ja,'.attachmentAuxBarArea');this.blurb=k.find(ja,'div.uiMetaComposerMessageBox div.textBlurb');this.input=k.find(ja,'div.uiMetaComposerMessageBox textarea.input');this.button=k.find(ja,'div.uiMetaComposerMessageBox label.submitBtn');this.privacy=k.find(ja,'div.uiMetaComposerMessageBox li.privacyWidget');this.boosting=k.scry(ja,'div.uiMetaComposerMessageBox li.boostingWidget');}else{this.blurb=k.find(ja,'div.uiComposerMessageBox div.textBlurb');this.input=k.find(ja,'div.uiComposerMessageBox textarea.input');this.button=k.find(ja,'div.uiComposerMessageBox label.submitBtn');this.privacy=k.find(ja,'div.uiComposerMessageBox li.privacyWidget');this.boosting=[];}m.listen(this.form,'submit',ea.bind(this));if(this.isMetaComposer){m.listen(this.input,'focus',this.onFocus.bind(this));if(na){if(document.activeElement===this.input)setTimeout(this.onFocus.bind(this),0);}else if(r.byClass(this.input,'child_was_focused'))setTimeout(this.onFocus.bind(this),0);}g.inform('xhpc/construct/'+ja.id,this,g.BEHAVIOR_STATE);}ia.prototype.init=function(ja){"use strict";this.mentionsInput=ja;if(this.mentionsInput)this.mentionsInput.subscribe('init',function(){var ka=this.mentionsInput.getTypeahead().getView();ka.subscribe(['reset','render'],function(la){j.conditionClass(this.root,'uiComposerMention',(la=='render'));}.bind(this));}.bind(this));this.inform('init',null,g.BEHAVIOR_PERSISTENT);this.setupListen();s.onBeforeUnload(this._handleUnsavedChanges.bind(this));};ia.prototype.setupListen=function(){"use strict";m.listen(this.root,'click',this.clickHandler.bind(this));};ia.prototype.clickHandler=function(event){"use strict";var ja=event.getTarget();if(r.byClass(ja,'collapsedPostButton'))setTimeout(this.focusInput.bind(this),0);};ia.prototype.setBlurb=function(ja){"use strict";k.setContent(this.blurb,ja);};ia.prototype.setEnabled=function(ja){"use strict";i.setEnabled(this.button,ja);};ia.prototype.getEndpoint=function(){"use strict";return this.form.getAttribute('action');};ia.prototype.setEndpoint=function(ja){"use strict";this.form.setAttribute('action',ja);};ia.prototype.setLoading=function(ja){"use strict";j.conditionClass(this.root,'async_saving',!!ja);};ia.prototype.setContentVisible=function(ja){"use strict";j.conditionClass(this.root,'uiComposerHideContent',!ja);};ia.prototype.setMessageBoxVisible=function(ja){"use strict";j.conditionClass(this.root,'uiComposerHideMessageBox',!ja);};ia.prototype.setInputVisible=function(ja){"use strict";j.conditionClass(this.root,'uiComposerHideInput',!ja);};ia.prototype.setStatusBoxVisible=function(ja){"use strict";j.conditionClass(this.root,'uiComposerHideStatusBox',!ja);};ia.prototype.setTopicTaggerVisible=function(ja){"use strict";j.conditionClass(this.root,'uiTagComposerHidden',!ja);};ia.prototype.mutate=function(ja){"use strict";if(this.lastComposerInput)q.setValue(this.input,q.getValue(x(this.lastComposerInput)));var ka=x(ja.xhpc);if(ka){var la=k.scry(this.root,'.uiComposerAttachmentSelected')[0];if(ja.confirmAugmentation&&la!==ka)return;la&&j.removeClass(la,'uiComposerAttachmentSelected');j.addClass(ka,'uiComposerAttachmentSelected');if(!ja.disableCache)m.listen(ka,'click',function(na){na.stop();ja.disableCache=true;this.mutate(ja);}.bind(this));}if(!ja.keepContentAreas){this.setContentVisible(false);k.empty(this.content);if(this.isMetaComposer){this.mentionsInput&&this.mentionsInput.setAuxContent(null);k.empty(this.metaArea);k.empty(this.bottomArea);k.empty(this.barArea);k.empty(this.auxBarArea);}}if(ja.content){k.setContent(this.content,p(ja.content));this.setContentVisible(true);}if(this.isMetaComposer){ja.metaContent&&k.setContent(this.metaArea,p(ja.metaContent));ja.bottomContent&&k.setContent(this.bottomArea,p(ja.bottomContent));ja.barContent&&k.setContent(this.barArea,p(ja.barContent));ja.auxBarContent&&k.setContent(this.auxBarArea,p(ja.auxBarContent));}this.setMessageBoxVisible(!ja.messageBoxHidden);j.conditionClass(this.root,'uiComposerWhiteMessageBox',!ja.messageBoxHidden&&!ja.inputHidden&&!ja.content);this.setInputVisible(!ja.inputHidden);this.setStatusBoxVisible(!ja.statusBoxHidden);j.conditionShow(this.privacy,!ja.privacyWidgetHidden);if(this.boosting.length>0)j.conditionShow(this.boosting[0],!ja.boostingWidgetHidden);if(!ja.keepContentAreas){q.setPlaceholder(this.input,ja.placeholder);i.setLabel(this.button,ja.buttonLabel);}this.setBlurb(p(ja.blurb));if(ja.autoscrape){this.scraper&&this.scraper.enable();}else this.scraper&&this.scraper.disable();this.setEnabled(!ja.disabled);this.setTopicTaggerVisible(!ja.hideTopicTagger);this.setEndpoint(ja.endpoint);if(ja.formType==aa){this.form.setAttribute('rel','async');}else this.form.removeAttribute('rel');this.form.removeAttribute('target');if(ja.formType==ba){if(!this._fileForm){this._fileForm=new n(this.form);this._fileForm.setAllowCrossOrigin(l.allowCrossOriginComposerUpload);this._fileForm.subscribe('submit',this.setLoading.bind(this,true));this._fileForm.subscribe('failure',this.setLoading.bind(this,false));}}else if(this._fileForm){this._fileForm.destroy();this._fileForm=null;}this.submitHandler=ja.submitHandler;this.lazyEndpoint=ja.lazyEndpoint;j.addClass(this.root,'uiComposerInteracted');j.addClass(this.root,'uiComposerOpen');if(ja.messageBoxFocused){var ma=document.activeElement;if(ma===document.body||r.byClass(ma,'attachmentLink'))setTimeout(this.focusInput.bind(this),0);}if(ja.inputElement){q.setValue(x(ja.inputElement),q.getValue(this.input));u.getInstance(x(ja.inputElement)).update();}else u.getInstance(this.input).update();this.lastComposerInput=ja.inputElement;g.inform('composer/mutate',this);};ia.prototype.subscribeToMutate=function(ja){"use strict";return g.subscribe('composer/mutate',function(ka,la){if(la===this)ja();}.bind(this));};ia.prototype.unsubscribeFromMutate=function(ja){"use strict";ja.unsubscribe();};ia.prototype.reset=function(ja){"use strict";if(this.isMetaComposer){k.empty(this.metaArea);k.empty(this.bottomArea);k.empty(this.barArea);k.empty(this.auxBarArea);}if(this.resetCfg){this.mutate(this.resetCfg);}else{var ka=k.scry(this.root,'.uiComposerAttachmentSelected')[0];if(ka)j.removeClass(ka,'uiComposerAttachmentSelected');}if(!ja){q.reset(this.input);this.mentionsInput&&this.mentionsInput.reset();this.scraper&&this.scraper.reset();}j.removeClass(this.root,'uiComposerInteracted');j.setClass(this.focus,'focus_target');this.setLoading(false);g.inform('composer/reset');};ia.prototype.onFocus=function(){"use strict";if(this.lazyEndpoint){var ja=k.find(this.root,'form.attachmentSelectForm'),ka=new v(this.lazyEndpoint);ka.addQueryData({isAugmentation:true});ja.action=ka.toString();var la=k.scry(this.root,'.uiComposerAttachmentSelected')[0];ja.xhpc.value=la&&la.id;ja.xhpc.click();setTimeout(j.removeClass.bind(null,this.root,'async_saving'),0);}this.inform('focus');};ia.prototype.focusInput=function(){"use strict";o.set(this.input);};ia.prototype.getInput=function(){"use strict";return this.input;};ia.prototype.updateDataSourceToken=function(ja){"use strict";if(this.dataSource)this.dataSource.updateToken(ja);};ia.prototype._handleUnsavedChanges=function(){"use strict";var ja=v.getNextURI();if(ja.getQueryData().hasOwnProperty('theater'))return;if(this.input.offsetParent!==null&&!q.isEmpty(this.input)&&!(a.Dialog&&a.Dialog.getCurrent()))return "You haven't finished your post yet. Do you want to leave without finishing?";};ia.setNodeToConfigure=function(ja){"use strict";da=ja;};ia.configure=function(ja,ka,la){"use strict";var ma=r.byClass(da,'uiComposer').id,na=g.subscribe('xhpc/construct/'+ma,function(oa,pa){setTimeout(function(){na.unsubscribe();},0);pa.mutate(ja);pa.subscribe('init',function(){new t().handle(ka);new Function(la)();if(ja.attachmentJS)new Function(ja.attachmentJS).call(pa);});});};ia.publish=function(ja,ka){"use strict";ka=ka||{};ka.composer_id=ja;ka.composer=ia.getInstance(ja);if(ka.streamNode){ka.streamStory=ka.streamNode;}else if(ka.streamMarkup)ka.streamStory=p(ka.streamMarkup).getRootNode();g.inform('composer/publish',ka);ka.composer&&ka.composer.reset(false);};ia.finish=function(ja){"use strict";ia.getInstance(ja).setLoading(false);};ia.getInstance=function(ja){"use strict";var ka=r.byClass(w(ja),'uiComposer');return ka?ca[ka.id]:null;};e.exports=ia;},null);
__d("legacy:Composer",["Composer"],function(a,b,c,d){a.Composer=b('Composer');},3);
__d("EventsToggle",["CSS","Event"],function(a,b,c,d,e,f,g,h){function i(j,k,l,m,n){"use strict";this.$EventsToggle0=k;this.$EventsToggle1=l;this.$EventsToggle2=j;this.$EventsToggle3=m;this.$EventsToggle4=n;var o=this.toggle.bind(this);if(this.$EventsToggle4&&this.$EventsToggle4.href)h.listen(this.$EventsToggle4,'click',this.clickTitle);if(this.$EventsToggle3){h.listen(this.$EventsToggle3,'click',o);}else if(this.$EventsToggle0)h.listen(this.$EventsToggle0,'click',o);}i.prototype.toggle=function(){"use strict";if(this.$EventsToggle2)g.toggleClass(this.$EventsToggle2,'hidden_elem');if(this.$EventsToggle0)g.toggle(this.$EventsToggle0);if(this.$EventsToggle1)g.toggle(this.$EventsToggle1);};i.prototype.clickTitle=function(j){"use strict";j.stopPropagation();};e.exports=i;},null);
__d("XEventsSuggestionRefreshController",["XController"],function(a,b,c,d,e,f){e.exports=b("XController").create("\/events\/permalink\/related_event\/refresh\/",{fetch_num:{type:"Int",defaultValue:1},key:{type:"String"},seed_eid:{type:"Int"},cursor:{type:"Int",defaultValue:0},displayed_events:{type:"IntVector"},acontext:{type:"StringToStringMap",required:true},filter_data:{type:"StringToStringMap",defaultValue:{}},pager_data:{type:"StringToStringMap"},removed_eid:{type:"Int"},row_id:{type:"String"}});},null);
__d("EventSuggestionFetcher",["$","Arbiter","Animation","AsyncRequest","cx","CSS","DOM","XEventsSuggestionRefreshController"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var o={_displayedIDs:{},_eventsCache:{},_replacementRequestCache:{},addDisplayedEvent:function(p){this._displayedIDs[p]=(this._displayedIDs[p]||0)+1;},removeDisplayedEvent:function(p){this._displayedIDs[p]--;if(this._displayedIDs[p]===0)delete this._displayedIDs[p];},_computeCacheKey:function(p){return JSON.stringify(p.filter_data)+JSON.stringify(p.acontext);},replace:function(p,q,r,s){if(!r)return;var t=this._computeCacheKey(r);if(!this._addReplacementRequest(t,p,q,s))return;this._setFetchData(t,r);this._replaceFromCache(t);},_addReplacementRequest:function(p,q,r,s){if(!this._replacementRequestCache[p])this._replacementRequestCache[p]=[];for(var t=0;t<this._replacementRequestCache[p].length;t++)if(this._replacementRequestCache[p][t].eid===q)return false;this._replacementRequestCache[p].push({eid:q,row_id:r,callback:s});return true;},_setFetchData:function(p,q){if(this._eventsCache[p])return;this._eventsCache[p]={events:[],fetchdata:{filter_data:q.filter_data,acontext:q.acontext,seed_eid:q.seed_eid,cursor:0},fetching:false};},_replaceFromCache:function(p){while(this._replacementRequestCache[p].length>0)if(this._isCacheEmpty(p)){this._fetchEvent(p);return;}else{var q=this._popFirstCachedEvent(p),r=this._replacementRequestCache[p].shift();this._replaceItem(r.row_id,q.item,q.divider);this.removeDisplayedEvent(r.eid);r.callback();}},_isCacheEmpty:function(p){return !this._eventsCache[p]||this._eventsCache[p].events.length===0;},cacheEvents:function(p,q,r){if(!this._eventsCache[q])return;this._eventsCache[q].fetchdata.curser=r;this._eventsCache[q].fetching=false;p.forEach(function(s){this._eventsCache[q].events.push({event_id:s.id,item:s.item,divider:s.divider});},this);this._replaceFromCache(q);},_popFirstCachedEvent:function(p){if(!this._eventsCache[p]||this._eventsCache[p].events.length===0)return null;var q=this._eventsCache[p].events.shift();if(this._eventsCache[p].events.length===0)delete this._eventsCache[p];return q;},_fetchEvent:function(p){if(!this._eventsCache[p]||this._eventsCache[p].fetching)return;this._eventsCache[p].fetching=true;var q=this._eventsCache[p].fetchdata,r=this._replacementRequestCache[p][0],s=(n.getURIBuilder()).setInt('fetch_num',6).setString('key',p).setInt('seed_eid',q.seed_eid).setInt('cursor',q.cursor).setIntVector('displayed_events',Object.keys(this._displayedIDs)).setStringToStringMap('filter_data',q.filter_data).setStringToStringMap('acontext',q.acontext).setStringToStringMap('pager_data',{fetch_num:6,key:p}).setInt('removed_eid',r.eid).setString('row_id',r.row_id).getURI();(new j(s)).setErrorHandler(function(){this._eventsCache[p].fetching=false;}.bind(this)).send();},_replaceItem:function(p,q,r){var s=g(p);l.addClass(s,"fbEventsSuggestionRemovingItem");m.insertAfter(s,q);if(r)m.insertBefore(s,r);new i(s).to('opacity',0).duration(500).ondone(function(){l.hide(s);l.addClass(q,"fbEventsSuggestionShowingItem");l.show(q);m.remove(s);s=null;new i(q).from('opacity',0).to('opacity',1).ondone(function(){if(r){m.remove(r);r=null;}q.style.opacity=null;l.removeClass(q,"fbEventsSuggestionShowingItem");h.inform("EventSuggestion/insert");}).duration(300).ease(i.ease.end).show().go();}.bind(this)).ease(i.ease.end).hide().go();},_removeItem:function(p){var q=g(p);m.remove(q);},_clearEmptyCard:function(p){var q=g(p),r=m.scry(q,'div.'+"fbEventsSuggestionItem");if(r.length===0)r=m.scry(q,'li.'+"fbEventsSuggestionItem");if(r.length===0)m.remove(q);},clearItems:function(p,q){if(!this._eventsCache[p])return;this._eventsCache[p].fetching=false;while(this._replacementRequestCache[p].length>0){var r=this._replacementRequestCache[p].shift();this._removeItem(r.row_id);this.removeDisplayedEvent(r.eid);}this._clearEmptyCard(q);}};e.exports=o;},null);
__d("XEventsSuggestionHideController",["XController"],function(a,b,c,d,e,f){e.exports=b("XController").create("\/events\/permalink\/related_event\/update\/",{removed_eid:{type:"Int",required:true},acontext:{type:"StringToStringMap",required:true},hide_type:{type:"String",required:true}});},null);
__d("EventsSuggestionSync",["Arbiter","AsyncRequest","EventSuggestionFetcher","XEventsSuggestionHideController","EventSuggestionHideAction"],function(a,b,c,d,e,f,g,h,i,j,k){var l={init:function(){g.subscribe('EventSuggestions/report',this.reportEvent.bind(this));},setData:function(m,n,o,p){if(!this._data)this._data={};this._data[m]={removed_eid:m,row_id:p,filter_data:o,acontext:n};},setListener:function(m,n){i.addDisplayedEvent(n);m.getMenu().subscribe('itemclick',function(o,p){switch(p.item.getValue()){case k.HIDE:this._hideItem(n,k.HIDE);this.replace(n);break;}}.bind(this));},reportEvent:function(m,n){this._hideItem(n.eid,k.REPORT);this.replace(n.eid);},_hideItem:function(m,n){if(!this._data||!this._data[m])return;var o=(j.getURIBuilder()).setInt('removed_eid',this._data[m].removed_eid).setStringToStringMap('acontext',this._data[m].acontext).setString('hide_type',n).getURI();new h(o).send();},replace:function(m){if(!this._data||!this._data[m])return;i.replace(m,this._data[m].row_id,this._data[m],function(){this._removeEvent(m);}.bind(this));},_removeEvent:function(m){if(this._data)delete this._data[m];}};e.exports=l;},null);
__d("UpdateRelatedEvents",["DOM","ge","cx","CSS","Arbiter","AsyncRequest","EventSuggestionFetcher","XEventsSuggestionHideController","EventSuggestionHideAction"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var p={init:function(q,r,s){this._seedID=q;this._actionContext=r;this._data={};k.subscribe('EventSuggestions/report',this.reportEvent.bind(this));},setListener:function(q,r,s,t){m.addDisplayedEvent(r);this._data[r]={removed_eid:r,seed_eid:this._seedID,row_id:s,filter_data:t,acontext:this._actionContext};q.getMenu().subscribe('itemclick',function(u,v){switch(v.item.getValue()){case o.HIDE:this._hideItem(r,o.HIDE);this.replace(r);break;}}.bind(this));},reportEvent:function(q,r){this._hideItem(r.eid,o.REPORT);this.replace(r.eid);},_hideItem:function(q,r){if(!this._data||!this._data[q])return;var s=(n.getURIBuilder()).setInt('removed_eid',this._data[q].removed_eid).setStringToStringMap('acontext',this._data[q].acontext).setString('hide_type',r).getURI();new l(s).send();},replace:function(q){if(!this._data||!this._data[q])return;m.replace(q,this._data[q].row_id,this._data[q],function(){this._removeEvent(q);}.bind(this));},_removeEvent:function(q){if(this._data)delete this._data[q];},clearDashboardSections:function(){var q='pagelet_suggested_events',r=h(q),s=g.find(r,'div.'+"_5epo"),t=null,u=false;for(var v=0;v<s.childNodes.length;v++)if(j.hasClass(s.childNodes[v],"_3g37")){if(t&&!u){g.remove(t);v--;}t=s.childNodes[v];u=false;}else u=true;if(t&&!u)g.remove(t);if(!s.childNodes.length)g.remove(r);}};e.exports=p;},null);
__d("EventSuggestionAction",["Event","DOM","csx","cx","CSS","$","EventsSuggestionSync","UpdateRelatedEvents","EventActionSource","Animation","EventSuggestionHideAction"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var r={_canShowNux:true,_xoutShowing:false,_reportDialogs:{eventData:{},dialogs:{}},_nux:{},_items:{},_timers:{},registerReportDialog:function(s,t){s.subscribe(['show'],function(){this._reportDialogs.dialogs[t]={showing:true};this._stopRefresh(this._reportDialogs.eventData.eid,this._reportDialogs.eventData.source);}.bind(this));s.subscribe(['hide'],function(){this._reportDialogs.dialogs[t]={showing:false};this._startRefresh(this._reportDialogs.eventData.eid,this._reportDialogs.eventData.source);}.bind(this));},_isReportDialogShowing:function(){for(var s in this._reportDialogs.dialogs)if(this._reportDialogs.dialogs.hasOwnProperty(s)&&this._reportDialogs.dialogs[s].showing)return true;return false;},addNux:function(s,t){this._nux[t]=s;},registerXOutMenu:function(s,t,u){s.getPopover().subscribe('hide',function(){this._xoutShowing=false;this._startRefresh(t,u);}.bind(this));s.getPopover().subscribe('show',function(){this._xoutShowing=true;this._stopRefresh(t,u);}.bind(this));s.getMenu().subscribe('itemclick',function(v,w){switch(w.item.getValue()){case q.REPORT:this._reportDialogs.eventData={eid:t,source:u};break;}}.bind(this));},addButton:function(s,t,u,v){if(!this._items[v]){this._items[v]={};this._timers[v]={};}g.listen(s,'click',function(){var w=this._items[v][u];if(!w){w=h.find(s,"^.fbEventsSuggestionItem");this._items[v][u]=w;}if(t==='watch'||t==='join'||t==='save'||t==='maybe'){k.addClass(w,"fbEventsSuggestionFadingItem");var x=null;if(t==='maybe'){k.addClass(w,"fbEventsSuggestionMaybedItem");x=".fbEventsSuggestionImageMaybeOverlay";}if(t==='join'){k.addClass(w,"fbEventsSuggestionJoinedItem");x=".fbEventsSuggestionImageJoinedOverlay";}if(t==='watch'){k.addClass(w,"fbEventsSuggestionWatchedItem");x=".fbEventsSuggestionImageWatchedOverlay";}if(t==='save'){k.addClass(w,"fbEventsSuggestionSavedItem");x=".fbEventsSuggestionImageSavedOverlay";}if(x)this.easeInImageOverlay(w,x);}else{k.removeClass(w,"fbEventsSuggestionFadingItem");if(this._timers[v][u]){clearTimeout(this._timers[v][u]);delete this._timers[v][u];}}g.listen(w,'mouseout',function(){this._startRefresh(u,v);}.bind(this));g.listen(w,'mouseover',function(){this._stopRefresh(u,v);}.bind(this));}.bind(this));},_startRefresh:function(s,t){if(!this._items[t])return;var u=this._items[t][s];if(!u||this._xoutShowing)return;if(this._isReportDialogShowing()&&this._reportDialogs.eventData.eid===s)return;var v=this._nux[t],w=!v||!v.isShown();if(k.hasClass(u,"fbEventsSuggestionFadingItem")&&w)this._timers[t][s]=setTimeout(function(){this.refreshItem(s,t);}.bind(this),3600);},_stopRefresh:function(s,t){if(this._timers[t]&&this._timers[t][s]){clearTimeout(this._timers[t][s]);delete this._timers[t][s];}},refreshItem:function(s,t){var u=null;if(t===o.EVENT_DASHBOARD_SUGGESTION_UPCOMING||t===o.EVENT_DASHBOARD_SUGGESTION_PAST||t===o.EVENT_DASHBOARD_SUGGESTION_BIRTHDAYS||t===o.EVENT_SUGGESTION){u=n;}else if(t===o.EVENT_BOTTOM_SUGGESTION||t===o.DASHBOARD_FRIEND_EVENT||t===o.DASHBOARD_RELATED_EVENT||t===o.DASHBOARD_POPULAR_EVENT){u=m;}else if(t===o.DASHBOARD_SUBSCRIBED_CARD)if(this._items[t]&&this._items[t][s]){h.remove(this._items[t][s]);delete this._items[t][s];}if(!u)return;u.replace(s);},easeInImageOverlay:function(s,t){var u=h.find(s,".fbEventsSuggestionImageOverlay"),v=h.find(s,t);new p(u).from('opacity',0).to('opacity',1).duration(200).ondone(function(){k.show(u);u.style.opacity=null;new p(v).from('opacity',0).to('opacity',1).duration(200).ondone(function(){k.show(v);v.style.opacity=null;}).ease(p.ease.end).show().go();}).ease(p.ease.end).show().go();},swapItem:function(s,t,u){var v=l(s),w=l(t);k.addClass(v,"fbEventsSuggestionRemovingItem");if(u)h.insertBefore(v,u);new p(v).to('opacity',0).duration(500).ondone(function(){k.hide(v);k.addClass(w,"fbEventsSuggestionShowingItem");k.show(w);h.remove(v);v=null;new p(w).from('opacity',0).to('opacity',1).ondone(function(){w.style.opacity=null;if(u){h.remove(u);u=null;}k.removeClass(w,"fbEventsSuggestionShowingItem");}).duration(300).ease(p.ease.end).show().go();}.bind(this)).ease(p.ease.end).hide().go();},clearEmptyCard:function(s){var t=l(s),u=h.scry(t,'div.'+"fbEventsSuggestionItem");if(u.length===0)u=h.scry(t,'li.'+"fbEventsSuggestionItem");if(u.length===0)h.remove(t);}};e.exports=r;},null);
__d("EventSuggestionXOutMenuController",[],function(a,b,c,d,e,f){function g(h,i){"use strict";this.$EventSuggestionXOutMenuController0=h;this.$EventSuggestionXOutMenuController1=i;}g.prototype.getMenu=function(){"use strict";return this.$EventSuggestionXOutMenuController0;};g.prototype.getPopover=function(){"use strict";return this.$EventSuggestionXOutMenuController1.getPopover();};e.exports=g;},null);
__d("EventInviteFeedback",["Arbiter","Animation"],function(a,b,c,d,e,f,g,h){var i={init:function(){g.subscribe('EventInviteFeedback/timeoutInviteeFeedback',this.timeoutInviteeFeedback.bind(this));},timeoutInviteeFeedback:function(j,k){new h(k).to('backgroundColor','#ffffff').to('borderColor','#ffffff').duration(2000).go();}};e.exports=i;},null);
__d("EventSuggestionsShow",["DOM","CSS","Arbiter"],function(a,b,c,d,e,f,g,h,i){var j={init:function(k){this._list=k.list;this._count=k.count;this._body=k.body;this._initNum=k.init_num;this._expendNum=k.expend_num;this._displayNum=this._initNum;if(this._moreLink)this._moreLink.addEventListener("click",function(){this._displayNum=this._expendNum;var l=0;g.scry(this._list,'li','stat_elem').forEach(function(m){if(l++<this._displayNum)h.removeClass(m,'hidden_elem');},this);h.addClass(this._moreLink,'hidden_elem');if(this._allLink)h.removeClass(this._allLink,'hidden_elem');}.bind(this));i.subscribe('EventSuggestionsShow/updateEventInvitee',this.updateEventInvitee.bind(this));},addLink:function(k,l){this._moreLink=k;this._allLink=l;},updateEventInvitee:function(k,l){var m=g.scry(this._list,'li','');l.uid.forEach(function(o){for(var p=0;p<m.length;p++)if('suggestion_'+o==m[p].id){m[p].remove();this._count--;break;}},this);if(this._count===0){h.addClass(this._body,'hidden_elem');return;}var n=0;g.scry(this._list,'li','stat_elem').forEach(function(o){if(n++<this._displayNum)h.removeClass(o,'hidden_elem');},this);if(this._link&&this._count<=this._initNum)h.addClass(this._link,'hidden_elem');}};e.exports=j;},null);
__d("TypeaheadEventInviteRenderer",["TypeaheadView","CSS"],function(a,b,c,d,e,f,g,h){for(var i in g)if(g.hasOwnProperty(i))k[i]=g[i];var j=g===null?null:g.prototype;k.prototype=Object.create(j);k.prototype.constructor=k;k.__superConstructor__=g;function k(){"use strict";if(g!==null)g.apply(this,arguments);}k.prototype.init=function(){"use strict";h.addClass(this.getElement(),'uiTypeaheadView');j.init.call(this);};k.prototype.select=function(l){"use strict";if(!h.hasClass(this.selected,'nonInvitable'))j.select.call(this,l);};e.exports=k;},null);
__d("XEventTicketURIClickedAsyncLogController",["XController"],function(a,b,c,d,e,f){e.exports=b("XController").create("\/events\/ticket\/",{event_id:{type:"Int"},clicked_ticket_info_id:{type:"Int"},action_context:{type:"StringToStringMap",required:true}});},null);
__d("EventTicketURIClickedAsyncLog",["Event","AsyncRequest","XEventTicketURIClickedAsyncLogController"],function(a,b,c,d,e,f,g,h,i){var j={onClick:function(k,l,m,n){g.listen(k,'click',function(){var o=(i.getURIBuilder()).setInt('event_id',l).setInt('clicked_ticket_info_id',m).setStringToStringMap('action_context',n).getURI();new h().setURI(o).send();});}};e.exports=j;},null);
__d("EventsDesktopTypeaheadInviteFriend",["Arbiter"],function(a,b,c,d,e,f,g){function h(j){"use strict";this.typeahead=j;g.subscribe('EventsDesktopTypeaheadInviteFriend/updateEventInvitee',this.resetTypeaheadCaches.bind(this));}h.prototype.resetTypeaheadCaches=function(j,k){"use strict";if(this.typeahead){var l=this.typeahead.getData(),m=k.uids;for(var n=0;n<m.length;n++){var o=l.getEntry(m[n].toString());if(o){o.status=k.status;l.setEntry(m[n].toString(),o);}}this.typeahead.getCore().subscribe('focus',l.bootstrap.bind(l));}};function i(j){new h(j);}e.exports.init=i;},null);
__d("EventInviteSearchTypeaheadRenderer",["DOM","TypeaheadFacepile"],function(a,b,c,d,e,f,g,h){function i(j,k){var l=[];if(j.xhp)return g.create('li',{className:'raw'},j.xhp);var m=j.photos||j.photo;if(m){if(m instanceof Array){m=h.render(m);}else m=g.create('img',{alt:'',src:m});l.push(m);}if(j.text){var n=[j.text];l.push(g.create('span',{className:'text'},n));}if(j.status){var o=[j.status];l.push(g.create('span',{className:'status'},o));}var p='';if(j.status==null){p=g.create('li',{className:j.type||''},l);}else p=g.create('li',{className:'nonInvitable'},l);if(j.text)p.setAttribute('aria-label',j.text);return p;}i.className='eventInviteTypeahead';e.exports=i;},null);