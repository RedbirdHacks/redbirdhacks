/*!CK:3727226266!*//*1416196775,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["JM2E5"]); }

__d("TaggerBadgeSuggestion",["StrSet"],function(a,b,c,d,e,f,g){function h(i,j,k){"use strict";this.$TaggerBadgeSuggestion0=i;this.$TaggerBadgeSuggestion1=j;this.$TaggerBadgeSuggestion2=k;this.$TaggerBadgeSuggestion3=null;}h.prototype.update=function(i){"use strict";if(i){var j=new g();for(var k=0;k<i.length;k++)j.add(JSON.stringify(i[k]));if(this.$TaggerBadgeSuggestion3&&j.equals(this.$TaggerBadgeSuggestion3))return;this.$TaggerBadgeSuggestion3=j;this.$TaggerBadgeSuggestion1.updateSuggestion(i.length,this.$TaggerBadgeSuggestion4?this.$TaggerBadgeSuggestion4.value:'');}else this.$TaggerBadgeSuggestion3=(void 0);};h.prototype.isShown=function(){"use strict";return this.$TaggerBadgeSuggestion3&&this.$TaggerBadgeSuggestion3.count()>0;};e.exports=h;},null);