/*!CK:1754899111!*//*1422386910,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["53LOW"]); }

__d("XAYMTMultiTipAsyncClickController",["XController"],function(a,b,c,d,e,f){e.exports=b("XController").create("\/ads\/growth\/aymt\/multi_async_click\/",{tip_id:{type:"String",required:true},channel_id:{type:"String",required:true},target:{type:"String",required:true}});},null);
__d("AYMTMultiTipLogger",["Event","AsyncRequest","XAYMTMultiTipAsyncClickController","XUISpinner.react","React","cx","$"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){var n={init:function(o,p,q,r,s){g.listen(o,'click',function(event){if(s!==null)k.render(k.createElement(j,{size:"large",className:"_5kvq"}),m(s));var t=i.getURIBuilder().setString('tip_id',p).setString('channel_id',q).setString('target',r).getURI();new h(t).send();});}};e.exports=n;},null);