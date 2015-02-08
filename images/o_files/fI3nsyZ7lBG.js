/*!CK:1666264435!*//*1414124372,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["YQ4Zs"]); }

__d("getMentionableRect",["Rect","UserAgent"],function(a,b,c,d,e,f,g,h){var i=h.isBrowser('Mobile Safari');function j(m){var n=document.selection.createRange().duplicate();n.moveStart('character',-m);return n.getBoundingClientRect();}function k(m){var n=a.getSelection(),o=n.getRangeAt(0),p=o.cloneRange(),q=p.endContainer,r=p.endOffset,s=null;if(r>=m){p.setStart(q,r-m);s=p.getBoundingClientRect();}return s;}function l(m,n){var o=document.selection?j(m):k(m);if(!o)return null;var p=i?'document':'viewport',q=new g(o.top,n?o.right:o.left,o.bottom,n?o.right:o.left,p);return q.convertTo('document');}e.exports=l;},null);