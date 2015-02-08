/*!CK:3675116816!*//*1422247158,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["yWzR5"]); }

__d("CalendarUI",["Event","Arbiter","AsyncRequest","CSS","DOM","DOMQuery","DOMScroll","Hovercard","Parent","Run","ScrollAwareDOM","Style","UIPagelet","Vector","ViewportBounds","$","copyProperties","ge","goURI"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y){function z(){}w(z,{EVENT_ACTION:'EVENT_ACTION',_todayButton:null,_todayElement:null,_upPager:null,_months:[],_timestamp:null,_registeredReminders:false,init:function(){h.subscribe(this.EVENT_ACTION,function(ba,ca){s.loadFromEndpoint('CalendarHeaderPagelet','pagelet_calendar_header',JSON.parse(ca.actioncontext));});var aa=u.addTop(function(){var ba=x('pagelet_calendar_header');if(ba&&r.isFixed(ba.firstChild)){var ca=ba.firstChild.getBoundingClientRect();return ca.bottom;}return 0;});p.onLeave(function(){aa.remove();});},initGridItem:function(aa,ba){g.listen(aa,'click',function(event){if(o.byTag(event.getTarget(),'a'))return;i.bootstrap(ba,aa);return;});},pageUp:function(){j.removeClass(this._upPager.parentNode,'fbCalendarNoPadding');j.addClass(this._upPager.parentNode,'pvl');if(this._upPager)this._upPager.click();},getScrollFunction:function(aa){var ba=this;return function(event){var ca=o.byClass(event.getTarget(),'fbCalendarBox'),da=ba._months.indexOf(ca);if(aa&&da===0){ba.pageUp();}else ba.scrollTo(ba._months[da+(aa?-1:1)],true);};},registerArrowHandlers:function(aa,ba){g.listen(aa,'click',this.getScrollFunction(true));g.listen(ba,'click',this.getScrollFunction(false));},initScrollItem:function(aa,ba){g.listen(aa,'click',this.scrollTo.bind(this,ba));},scrollTo:function(aa,ba){aa=l.isNode(aa)?aa:x(aa);var ca=0,da=40;if(aa){var ea=t.getElementPosition(v('fbCalendarWrapper')).y,fa;if(document.getElementById('headerArea')){fa=t.getElementDimensions(v('headerArea')).y;}else{fa=0;da=12;}var ga=t.getElementPosition(aa).y;ca=ga-ea-fa+da;}else ca=t.getElementPosition(v('bottomContent')).y;m.scrollTo(new t(0,ca,'document'),ba!==false);},initUnhide:function(aa,ba){g.listen(aa,'click',function(event){var ca=o.byClass(ba,'fbCalendarItem');k.remove(ba);j.removeClass(k.find(ca,'.fbHiddenCalendarItem'),'fbHiddenCalendarItem');});},registerMonth:function(aa,ba){if(!this._timestamp||ba>this._timestamp){this._months.push(aa);}else this._months.unshift(aa);this._timestamp=ba;},registerHomepageReminders:function(){if(!this._registeredReminders){h.subscribe(this.EVENT_ACTION,function(aa,ba){if(x('pagelet_reminders'))s.loadFromEndpoint('RemindersPagelet','pagelet_reminders');});this._registeredReminders=true;}},registerTodayClickHandler:function(){this._todayButton.onclick=null;g.listen(this._todayButton,'click',this.scrollTo.bind(this,this._todayElement));},registerUpPagerButton:function(aa){var ba=l.isNode(aa)?aa:x(aa);j.removeClass(ba,'pvl');j.removeClass(ba,'hidden_elem');j.addClass(ba,'fbCalendarNoPadding');if(ba){this._upPager=v(ba.getElementsByTagName('a')[0]);}else this._upPager=null;},registerTodayElement:function(aa){this._todayElement=l.isNode(aa)?aa:x(aa);this._todayButton&&this.registerTodayClickHandler();},registerTodayButton:function(aa){this._todayButton=aa;this._todayElement&&this.registerTodayClickHandler();},registerEventLink:function(aa,ba){h.subscribe(this.EVENT_ACTION,function(ca,da){if(da.eid===ba)switch(da.action){case 'GOING':j.removeClass(aa.parentNode,"hidden_elem");j.addClass(aa,"fbCalendarEventGoing");break;case 'MAYBE':j.removeClass(aa.parentNode,"hidden_elem");j.removeClass(aa,"fbCalendarEventGoing");break;case 'DECLINED':case 'HIDDEN':n.hide(true);j.addClass(aa.parentNode,"hidden_elem");break;case 'EDITED':if(da.name)k.setContent(aa,da.name);if(da.day){var ea=x("pagelet_calendar_day_"+da.day);if(ea){var fa=l.find(ea,".fbCalendarGridEventList");if(l.scry(fa,"li").length>=4){j.addClass(aa.parentNode,"hidden_elem");s.loadFromEndpoint("CalendarDayPagelet","pagelet_calendar_day_"+da.day,{day:da.timestamp});}else k.prependContent(fa,aa.parentNode);}else j.addClass(aa.parentNode,"hidden_elem");}break;}});},informEventGoing:function(aa,ba){h.inform(this.EVENT_ACTION,{eid:aa,action:'GOING',actioncontext:ba});},informEventMaybe:function(aa,ba){h.inform(this.EVENT_ACTION,{eid:aa,action:'MAYBE',actioncontext:ba});},informEventDeclined:function(aa,ba){h.inform(this.EVENT_ACTION,{eid:aa,action:'DECLINED',actioncontext:ba});},informEventHidden:function(aa,ba){h.inform(this.EVENT_ACTION,{eid:aa,action:'HIDDEN',actioncontext:ba});},informEventEdited:function(aa,ba,ca,da){h.inform(this.EVENT_ACTION,{eid:aa,action:'EDITED',name:ba,day:ca,timestamp:da});},removeCalendarListHeader:function(aa){var ba=k.scry(aa,"^.fbCalendarOverlay .fbCalendarItem"),ca=k.find(aa,"^.fbCalendarItem");if(ba.length==1)ca=k.find(aa,"^.fbCalendarOverlay");k.remove(ca);},reloadPage:function(){y(window.location);},unhide:function(aa){setTimeout(function(){q.monitor(aa.nextSibling,j.show.bind(null,aa));},0);}});e.exports=z;},null);
__d("XEventReminderImpressionLoggerAsyncController",["XController"],function(a,b,c,d,e,f){e.exports=b("XController").create("\/events\/ajax\/reminder\/impression\/",{acontext:{type:"StringToStringMap",required:true},data:{type:"StringToStringMap"}});},null);
__d("EventReminderController",["Arbiter","AsyncRequest","DOM","DOMQuery","ScrollableArea","XEventReminderImpressionLoggerAsyncController"],function(a,b,c,d,e,f,g,h,i,j,k,l){var m={registerReminder:function(n,o){this._firstOpen=true;var p=n.getDialog(),q=k.getInstance(j.scry(p.getRoot(),'.uiScrollableArea')[0]),r=null;if(q){r=i.find(q.getElement(),'div.uiScrollableAreaWrap');q.subscribe('scroll',function(){return g.inform('EventReminderDialog/scroll',{rect:r.getBoundingClientRect(),scrollTop:r.scrollTop});});}p.subscribe('show',function(){var s=l.getURIBuilder().setStringToStringMap('acontext',o).setStringToStringMap('data',{first_open:this._firstOpen}).getURI();new h(s).send();this._firstOpen=false;var t={};if(r)t={rect:r.getBoundingClientRect()};g.inform('EventReminderDialog/show',t);}.bind(this));p.subscribe('hide',function(){return g.inform('EventReminderDialog/hide');});}};e.exports=m;},null);
__d("FlexibleScrollableArea",["DataStore","DOM","DOMDimensions","Event","Parent","Run","Style","Vector","throttle"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var p=30,q=100;function r(s,t,u,v,w){"use strict";this._element=s;this._tight=t;this._measureFrom=u;this._minHeight=v;this._margin=w;g.set(this._element,'FlexibleScrollableArea',this);l.onLeave(this.cleanup.bind(this));this._listener=j.listen(window,'resize',o(this.poke,q,this));this.poke();}r.prototype.poke=function(){"use strict";var s=h.find(this._element,'.uiScrollableAreaBody'),t=n.getElementDimensions(s).y+i.measureElementBox(s,'height',true,true,true),u;if(this._tight){var v=this.getMaxHeight();if(t<v+p)v+=p;u=Math.max(Math.min(t,v),this._minHeight);}else u=Math.max(this.getMaxHeight(),this._minHeight);m.set(this._element,'height',u+'px');};r.prototype.getMaxHeight=function(){"use strict";if(this._measureFrom==='bottom'){var s=n.getViewportDimensions().y,t=n.getElementPosition(this._element,'viewport').y,u=s-t;return u-this._margin;}var v=n.getElementPosition(this._element,'viewport').y+n.getElementDimensions(this._element).y;return v-this._margin;};r.prototype.cleanup=function(){"use strict";this._listener&&this._listener.remove();};r.getInstance=function(s){"use strict";var t=k.byClass(s,'flexibleScrollableArea');return t?g.get(t,'FlexibleScrollableArea'):null;};e.exports=r;},null);
__d("LikeAllLink",["Event","AsyncRequest"],function(a,b,c,d,e,f,g,h){var i={init:function(j,k){g.listen(j,'click',function(){new h('/ajax/reminders/like_all.php').setData({page_ids:k,origin:'reminder_box_invite_like_all'}).send();});}};e.exports=i;},null);
__d("LoadRecommendations",["Event","AsyncRequest"],function(a,b,c,d,e,f,g,h){var i={loadOnClick:function(j){g.listen(j,'click',function(){new h().setURI('/ajax/pages/reminder/recommendations').send();});}};e.exports=i;},null);
__d("ReminderStory",["AsyncRequest","Arbiter","DOMQuery","Event","FlexibleScrollableArea","LayerAutoFocus","ScrollableArea","SubscriptionsHandler","UIPagelet","getActiveElement"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){function q(r,s,t,u,v){"use strict";this.$ReminderStory0=false;this.$ReminderStory1=s;j.listen(r,'click',function(event){if(t&&i.contains(t,event.target))return;s.show();if(u)new g('/growth/reminder/logging.php').setData({context_data:u,first_click:!this.$ReminderStory0}).send();this.$ReminderStory0=true;}.bind(this));if(v)s.subscribeOnce('show',function(){o.loadFromEndpoint(v,s.getContent());});s.disableBehavior(l);s.subscribe('aftershow',function(){var w=s.getRoot(),x=i.scry(w,'#SuggestBelowInvite')[0];if(x)new g('/ajax/pages/reminder/recommendations').send();var y=s.hide.bind(s);this.$ReminderStory2=new n();this.$ReminderStory2.addSubscriptions(j.listen(window,'resize',y),j.listen(window,'scroll',y));var z=i.scry(w,'.inlineReplyTextArea');z[0]&&z[0].focus();var aa=i.scry(w,'.jewelItemNew'),ba=[];aa.forEach(function(fa){var ga=aa[fa].getAttribute('id');if(ga&&ga.endsWith('_1_req'))ba=ba.concat(ga.replace('_1_req',''));});if(ba.length>0)new g('/friends/requests/log_impressions').setData({ids:ba.join(','),ref:'reminder_box'}).send();var ca=m.getInstance(i.scry(s.getRoot(),'.uiScrollableArea')[0]),da=k.getInstance(i.scry(s.getRoot(),'.flexibleScrollableArea')[0]),ea=function(){if(da)da.poke();if(ca){ca.poke();j.fire(i.scry(s.getRoot(),'.scrollable')[0],'scroll');}};ea();h.subscribe('reflow',function(){var fa=i.scry(w,'.fbRemindersBirthdayList');if(z&&fa)for(var ga=0;ga<z.length;++ga)if(z[ga]==p()&&i.contains(fa[0],z[ga]))ea();});}.bind(this));s.subscribe('beforehide',function(){if(this.$ReminderStory2){this.$ReminderStory2.release();this.$ReminderStory2=null;}}.bind(this));}q.prototype.getDialog=function(){"use strict";return this.$ReminderStory1;};e.exports=q;},null);
__d("XBirthdayRemindersCameraPreviewController",["XController"],function(a,b,c,d,e,f){e.exports=b("XController").create("\/birthday\/reminder\/camera\/preview\/",{photo_fbid:{type:"Int",required:true},target_id:{type:"Int",required:true}});},null);
__d("BirthdayModal",["AsyncRequest","Button","CSS","DataStore","DOM","Event","FileInputUploader","Focus","Layer","Parent","XBirthdayRemindersCameraPreviewController","csx","cx","goURI"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var u=null,v={},w,x,y={init:function(z,aa){w=aa;l.listen(z,'click',function(){aa.show();});},addComposers:function(z,aa){if(!aa||(aa!==u))v={};u=aa;for(var ba in z)if(z.hasOwnProperty(ba))this._addComposer(k.find(z[ba],"._5j0b"),ba);},_showInput:function(z){var aa=k.scry(z,"._4ovw").pop();if(!aa)return;var ba=k.find(z,"._4ovy"),ca=k.find(ba,'.inlineReplyTextArea');i.hide(aa);i.show(ba);n.set(ca);},_addComposer:function(z,aa){v[aa]=z;var ba=k.scry(z,"._4ovw").pop();if(!ba)return;var ca=this;['click','focus'].forEach(function(ea){l.listen(ba,ea,function(event){var fa=event.getTarget();if(p.byClass(fa,"_260q"))return;ca._showInput(z);});});var da=k.find(z,"._4ow2");this._addRemoveButton(da,aa);return true;},addUpcomingBirthdays:function(z,aa){l.listen(aa.firstChild,'click',function(event){i.show(z);i.hide(aa);});},attachPhoto:function(z,aa,ba){var ca=v[ba];if(!ca)return;var da=k.find(ca,"._4ovz");i.removeClass(da,"._4ow0");var ea=k.find(ca,"._4ow1");ea.appendChild(aa);k.appendContent(da,z);var fa=k.find(ca,"._4ow2");i.show(fa);this._showInput(ca);var ga=k.find(ca,"._30e4");h.setEnabled(ga,true);},initUploader:function(z,aa,ba,ca){var da=z.getInput();z.subscribe('change',this._uploadPhoto.bind(this,da,ca,ba));},_uploadPhoto:function(z,aa,ba){var ca=v[ba];if(!ca)return;this._showInput(ca);var da=k.find(ca,"._4ow3"),ea=k.find(ca,"._4ow4");i.show(da);i.hide(ea);var fa=new m(z);fa.setURI(aa.uploadURI).setData(aa.uploadData).setAllowCrossOrigin(true).setUploadInParallel(true).setFiles(z.files).send();var ga=k.find(ca,"._30e4");h.setEnabled(ga,false);var ha=o.getTopmostLayer();if(ha)ha.hide();},getCameraPreview:function(z,aa){var ba=v[aa];if(!ba)return;this._showInput(ba);var ca=k.find(ba,"._4ow3"),da=k.find(ba,"._4ow4");i.show(ca);i.hide(da);var ea=q.getURIBuilder().setInt('target_id',aa).setInt('photo_fbid',z).getURI();new g(ea).send();var fa=k.find(ba,"._30e4");h.setEnabled(fa,false);},showPhotoPicker:function(z){z.subscribeOnce(['show'],function(){i.addClass(w.getContentRoot(),"_30e3");}.bind(this));z.subscribeOnce(['hide'],function(){w.show();i.removeClass(w.getContentRoot(),"_30e3");}.bind(this));},addPhotoItem:function(z,aa,ba,ca){var da=v[ca];if(!da)return;l.listen(z,'click',function(){var ea=k.find(da,"._4ow3"),fa=k.find(da,"._4ovz"),ga=k.find(da,"._4ow4");i.show(ea);i.hide(ga);i.removeClass(fa,"._4ow0");var ha=k.find(da,"._4ow1");ha.appendChild(ba);k.appendContent(fa,aa);var ia=k.find(da,"._4ow2");i.show(ia);this._showInput(da);var ja=o.getTopmostLayer();if(ja)ja.hide();}.bind(this));},_addRemoveButton:function(z,aa){var ba=v[aa];if(!ba)return;l.listen(z,'click',function(){i.hide(z);var ca=k.find(ba,"._4ow3"),da=k.find(ba,"._4ovz"),ea=k.find(ba,"._4ow4");i.hide(ca);i.show(ea);i.addClass(da,"._4ow0");if(da.firstChild)k.remove(da.firstChild);k.scry(ba,"._4ow5").forEach(function(fa){k.remove(fa);});}.bind(this));},_resetComposer:function(z){var aa=k.find(z,"._4ow2");aa.click();var ba=k.find(z,".uiMentionsInput");j.get(ba,'MentionsInput').reset();},finishPosting:function(z,aa,ba,ca){if(ba)return t(window.location.href,true);var da=v[aa];if(!da)return;if(!ca){var ea=k.find(da,"._4ovy");k.replace(ea,z);return;}this._resetComposer(da);i.addClass(da,"_4dgh");},cancelScheduled:function(z,aa){if(aa)return t(window.location.href,true);var ba=v[z];if(!ba)return;i.removeClass(ba,"_4dgh");},setPhotoAlbumView:function(z){x=z;},setPhotoView:function(z){if(!x)return;var aa=k.find(x,"._5r32");if(aa){i.hide(aa);}else return;var ba=k.find(x,"._375u");ba.appendChild(z);var ca=k.find(z,"._375v");l.listen(ca,'click',function(){i.show(aa);var da=k.find(x,"._375w");k.remove(da);}.bind(this));},attachFlyout:function(z){var aa=z.getContext(),ba=k.find(z.getContentRoot(),"._21xo"),ca=k.scry(z.getContentRoot(),"._15p7").pop(),da=function(){i.conditionClass(aa,"_21xn",z.isShown());};da();z.subscribe(['show','hide'],da);l.listen(aa,'click',function(ea){z.conditionShow(!z.isShown());ea.kill();});l.listen(ba,'click',function(){z.hide();});if(ca)l.listen(ca,'click',function(){z.hide();});}};e.exports=y;},null);
__d("XBirthdayMessagePostController",["XController"],function(a,b,c,d,e,f){e.exports=b("XController").create("\/reminders\/birthday\/message\/",{});},null);