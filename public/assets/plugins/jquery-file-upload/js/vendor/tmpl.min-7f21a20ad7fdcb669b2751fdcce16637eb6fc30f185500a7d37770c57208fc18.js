!function(n){"use strict";var r=function(n,e){var t=/[^\w\-\.:]/.test(n)?new Function(r.arg+",tmpl","var _e=tmpl.encode"+r.helper+",_s='"+n.replace(r.regexp,r.func)+"';return _s;"):r.cache[n]=r.cache[n]||r(r.load(n));return e?t(e,r):function(n){return t(n,r)}};r.cache={},r.load=function(n){return document.getElementById(n).innerHTML},r.regexp=/([\s'\\])(?!(?:[^{]|\{(?!%))*%\})|(?:\{%(=|#)([\s\S]+?)%\})|(\{%)|(%\})/g,r.func=function(n,e,t,r,c,u){return e?{"\n":"\\n","\r":"\\r","\t":"\\t"," ":" "}[e]||"\\"+e:t?"="===t?"'+_e("+r+")+'":"'+("+r+"==null?'':"+r+")+'":c?"';":u?"_s+='":void 0},r.encReg=/[<>&"'\x00]/g,r.encMap={"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;","'":"&#39;"},r.encode=function(n){return(null==n?"":""+n).replace(r.encReg,function(n){return r.encMap[n]||""})},r.arg="o",r.helper=",print=function(s,e){_s+=e?(s==null?'':s):_e(s);},include=function(s,d){_s+=tmpl(s,d);}","function"==typeof define&&define.amd?define(function(){return r}):n.tmpl=r}(this);