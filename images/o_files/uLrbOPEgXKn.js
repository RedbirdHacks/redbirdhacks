/*!CK:2425322135!*//*1420430955,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["sD7v7"]); }

__d("FilteredSearchSource",["AbstractSearchSource"],function(a,b,c,d,e,f,g){for(var h in g)if(g.hasOwnProperty(h))j[h]=g[h];var i=g===null?null:g.prototype;j.prototype=Object.create(i);j.prototype.constructor=j;j.__superConstructor__=g;function j(k,l){"use strict";this.$FilteredSearchSource0=k;this.$FilteredSearchSource1=l;}j.prototype.bootstrapImpl=function(k){"use strict";this.$FilteredSearchSource1.bootstrap(k);};j.prototype.searchImpl=function(k,l,m){"use strict";var n=function(o,p){o=this.$FilteredSearchSource2(o,p);l(o,p);}.bind(this);this.$FilteredSearchSource1.search(k,n,m);};j.prototype.$FilteredSearchSource2=function(k,l){"use strict";var m=this.$FilteredSearchSource0;return k.filter(function(n){return m(n,l);});};e.exports=j;},null);
__d("getMentionsSearchSource",["AtSignMentionsStrategy","CapitalizedNameMentionsStrategy","DocumentCompositeMentionsSource","DocumentMentionsSource","FilteredSearchSource","SearchSourceWithMetrics","WebAsyncSearchSource","filterCapitalizedNames"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){function o(q){var r={bootstrapRequests:[],queryRequests:[]};if(q._bootstrapEndpoints)q._bootstrapEndpoints.forEach(function(s){r.bootstrapRequests.push({uri:s.endpoint,data:s.data});});if(q.bootstrapEndpoint)r.bootstrapRequests.push({uri:q.bootstrapEndpoint,data:q.bootstrapData});if(q.queryEndpoint)r.queryRequests.push({uri:q.queryEndpoint,data:q.queryData});r.auxiliaryFields={authorativePerson:'is_authoritative_person',connectedPage:'connected_page',disableAutosuggest:'disable_autosuggest',renderType:'render_type',verified:'is_verified',workUser:'is_work_user'};return new m(r);}function p(q,r){var s=o(q),t=new l(s,r),u=new k(n,t);return new i([new j(g,t),new j(h,u)]);}e.exports=p;},null);