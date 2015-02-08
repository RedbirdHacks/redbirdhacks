/*!CK:331325101!*//*1418015037,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["lQt7n"]); }

__d("HighConfidenceSuggestion",["Arbiter","Event","HighConfidenceSuggestionLogger","HighConfidenceSuggestionUI","SubscriptionsHandler","SuggestionLoggingUserActions"],function(a,b,c,d,e,f,g,h,i,j,k,l){function m(n,o,p){"use strict";this.$HighConfidenceSuggestion0=new j(n);this.$HighConfidenceSuggestion1=n;this.$HighConfidenceSuggestion2=o;this.$HighConfidenceSuggestion3=new k();this.$HighConfidenceSuggestion4=p;this.$HighConfidenceSuggestion5=null;this.$HighConfidenceSuggestion6();}m.prototype.$HighConfidenceSuggestion6=function(){"use strict";g.subscribe('showTagger',function(){this.$HighConfidenceSuggestion7();this.$HighConfidenceSuggestion8();}.bind(this));g.subscribe('cameraicon/click',function(){this.$HighConfidenceSuggestion7();this.$HighConfidenceSuggestion8();}.bind(this));g.subscribe('showOGTagger',function(){if(this.$HighConfidenceSuggestion5)i.log(l.CLICK_TAGGER,this.$HighConfidenceSuggestion9,this.$HighConfidenceSuggestion5,this.$HighConfidenceSuggestion4);}.bind(this));this.$HighConfidenceSuggestion3.addSubscriptions(h.listen(this.$HighConfidenceSuggestion0.getCloseButton(),'click',function(){i.log(l.XOUT,this.$HighConfidenceSuggestion9,this.$HighConfidenceSuggestion5,this.$HighConfidenceSuggestion4);this.$HighConfidenceSuggestion0.hide();this.$HighConfidenceSuggestion8();}.bind(this)));this.$HighConfidenceSuggestion3.addSubscriptions(h.listen(this.$HighConfidenceSuggestion0.getAddButton(),'click',function(){this.$HighConfidenceSuggestiona();i.log(l.ADD,this.$HighConfidenceSuggestion9,this.$HighConfidenceSuggestion5,this.$HighConfidenceSuggestion4);}.bind(this)));this.$HighConfidenceSuggestionb=true;};m.prototype.update=function(n){"use strict";var o=n&&n[0];if(o&&!this.$HighConfidenceSuggestionc){this.$HighConfidenceSuggestion5=o;}else if(o&&this.$HighConfidenceSuggestionc&&this.$HighConfidenceSuggestiond(this.$HighConfidenceSuggestion5,o)){return;}else if(o&&this.$HighConfidenceSuggestionc&&!this.$HighConfidenceSuggestiond(this.$HighConfidenceSuggestion5,o)){this.$HighConfidenceSuggestion5=o;}else if(!o)this.$HighConfidenceSuggestion5=null;this.$HighConfidenceSuggestione();};m.prototype.$HighConfidenceSuggestione=function(){"use strict";if(this.$HighConfidenceSuggestion5){this.$HighConfidenceSuggestion0.show();i.log(l.IMPRESSION,this.$HighConfidenceSuggestion9,this.$HighConfidenceSuggestion5,this.$HighConfidenceSuggestion4);}else this.$HighConfidenceSuggestion0.hide();};m.prototype.$HighConfidenceSuggestiond=function(n,o){"use strict";return JSON.stringify(n)===JSON.stringify(o);};m.prototype.$HighConfidenceSuggestion7=function(){"use strict";if(this.$HighConfidenceSuggestion5){this.$HighConfidenceSuggestion2.saveSuggestion([this.$HighConfidenceSuggestion5],this.$HighConfidenceSuggestion9);g.inform('highConfSuggestion/saved');}};m.prototype.getDisplayingSuggestion=function(){"use strict";return this.$HighConfidenceSuggestion5;};m.prototype.$HighConfidenceSuggestion8=function(){"use strict";if(this.$HighConfidenceSuggestion5){this.$HighConfidenceSuggestion5=null;this.$HighConfidenceSuggestionb=false;this.$HighConfidenceSuggestion0.hide();}};m.prototype.isActive=function(){"use strict";return this.$HighConfidenceSuggestionb;};m.prototype.isShown=function(){"use strict";return !!this.$HighConfidenceSuggestion5;};m.prototype.$HighConfidenceSuggestiona=function(){"use strict";if(this.$HighConfidenceSuggestion5){var n={};n.type='page';n.uid=this.$HighConfidenceSuggestion5.blob.objectid;n.at_id=this.$HighConfidenceSuggestion5.blob.actiontypeid;n.suggestion_mechanism=this.$HighConfidenceSuggestion5.mechanism;var o={};o.config=this.$HighConfidenceSuggestion9;o.suggestion=this.$HighConfidenceSuggestion5;o.csid=this.$HighConfidenceSuggestion4;n.suggestion_config=o;g.inform('structuredSuggestion/add',n);this.$HighConfidenceSuggestion0.hide();}};m.prototype.setConfigNameForLogging=function(n){"use strict";this.$HighConfidenceSuggestion9=n;};e.exports=m;},null);