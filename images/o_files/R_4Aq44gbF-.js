/*!CK:1547475399!*//*1422485278,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["g4tf0"]); }

__d("FeedAdsGapRuleViolationDetection",["Arbiter","Banzai","CSS","csx","cx","DOM","ge"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){var n='ei',o='qid',p='gap rule violation',q='non violating ads gap',r='first position violation',s='feed load',t='first position invalidation',u='spacing invalidation',v=[],w=[],x=[],y,z={registerFeedStories:function(aa,ba){if(aa.containerID=='substream_0'){v=[];w=[];}var ca=m(aa.containerID);if(!ca){aa.isBlockingRendering&&i.removeClass(ba,'hidden_elem');return;}y=aa.demoAdChecks;var da=l.scry(ca,"div._5jmm").map(this._convertStoryNodeToObject).filter(function(ea){return ea!==null;});if(aa.isLoggingEnabled&&da.length!==0)this._logFeedLoad();if(aa.isNewerStories){v=da.concat(v);}else v=v.concat(da);this._checkFirstPosViolation(aa);this._checkGapRuleViolation(aa);if(aa.isBlockingRendering){i.removeClass(ba,'hidden_elem');g.inform('feedAdsInvalidation/done');}},_convertStoryNodeToObject:function(aa){if(i.hasClass(aa,"_170y"))return null;var ba=aa.getAttribute('data-dedupekey');if(y[ba])return null;var ca=l.scry(aa,"div._hye"),da=l.scry(aa,"li._170x"),ea=[];if(ca.length!==0){ea=ca.map(function(ha){return ha.getAttribute('data-ft');}).filter(function(ha){return ha!==null;});}else if(da.length!==0){ea=da.map(function(ha){return ha.getAttribute('data-ft');}).filter(function(ha){return ha!==null;});}else if(aa.getAttribute('data-ft'))ea=[aa.getAttribute('data-ft')];if(!ea.length)return null;var fa=JSON.parse(ea[0]),ga={dataFTArray:ea,dedupKey:ba,isSponsored:!!fa[n],height:aa.offsetHeight,qid:parseInt(fa[o],10),nodeID:aa.id};return ga;},_checkFirstPosViolation:function(aa){while(v.length>0&&v[0].isSponsored){var ba={ftArray:v[0].dataFTArray,qid:v[0].qid,nodeid:v[0].nodeID};if(aa.isLoggingEnabled&&!(v[0].dedupKey in x)){this._logFirstPosViolation(ba);x[v[0].dedupKey]=ba;}if(aa.isFirstPosInvalidationEnabled){this._invalidateFirstPosAd(ba);v.splice(0,1);}else break;}},_getMinGap:function(aa,ba,ca){var da=Math.min(aa?aa:Number.MAX_VALUE,ba?ba:Number.MAX_VALUE);return da!==Number.MAX_VALUE?da:ca;},_getStoryDedupKeysJSONString:function(aa,ba){var ca=[];for(var da=aa;da<=ba;da++)ca.push(v[da].dedupKey);return JSON.stringify(ca);},_checkGapRuleViolation:function(aa){var ba=null,ca=null,da=0;for(var ea=0;ea<v.length;ea++){var fa=v[ea];da+=fa.height;if(fa.isSponsored){da-=fa.height;var ga=false;if(ba!==null){var ha=ea-ba,ia=null,ja=this._getMinGap(aa.minGaps[ca.dedupKey],aa.minGaps[fa.dedupKey],aa.defaultMinGap);if(ha<ja){ia=p;}else ia=q;var ka={ftArray_A:ca.dataFTArray,ftArray_B:fa.dataFTArray,dist:ha,pdist:da,pos:ea+1,qid_A:ca.qid,qid_B:fa.qid,event_type:ia,nodeid:fa.nodeID,dedupKeys:this._getStoryDedupKeysJSONString(ba,ea)};if(aa.isLoggingEnabled)if(!(fa.dedupKey in w)||w[fa.dedupKey].event_type!==ia){this._logGapRuleViolation(ka);w[fa.dedupKey]=ka;}if(aa.isGapRuleInvalidationEnabled&&ia==p){this._invalidateGapRuleViolatedAd(ka);ga=true;v.splice(ea--,1);}}if(!ga){ba=ea;ca=fa;da=0;}}}},_logFirstPosViolation:function(aa){var ba={ft:aa.ftArray[0],event_type:r,intValues:{qid:aa.qid}};h.post('feed_ads_gap_rule_violation',ba);},_logGapRuleViolation:function(aa){var ba={ft_A:aa.ftArray_A[0],ft_B:aa.ftArray_B[0],event_type:aa.event_type,intValues:{dist:aa.dist,pdist:aa.pdist,pos:aa.pos,qid_A:aa.qid_A,qid_B:aa.qid_B},dedup_keys:aa.dedupKeys};h.post('feed_ads_gap_rule_violation',ba);},_logFeedLoad:function(){var aa={event_type:s};h.post('feed_ads_gap_rule_violation',aa);},_invalidateFirstPosAd:function(aa){i.hide(m(aa.nodeid));var ba={ft_array:aa.ftArray,event_type:t};h.post('feed_ads_gap_rule_violation',ba);},_invalidateGapRuleViolatedAd:function(aa){i.hide(m(aa.nodeid));var ba={ft_array_A:aa.ftArray_A,ft_array_B:aa.ftArray_B,event_type:u};h.post('feed_ads_gap_rule_violation',ba);}};e.exports=z;},null);
__d("XGiveThanksFriendSelectAsyncController",["XController"],function(a,b,c,d,e,f){e.exports=b("XController").create("\/thanks\/select\/",{});},null);