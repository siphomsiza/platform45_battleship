!function(a){function r(e){window.DOMParser==undefined&&window.ActiveXObject&&(DOMParser=function(){},DOMParser.prototype.parseFromString=function(e){var t=new ActiveXObject("Microsoft.XMLDOM");return t.async="false",t.loadXML(e),t});try{var t=(new DOMParser).parseFromString(e,"text/xml");if(!a.isXMLDoc(t))throw"Unable to parse XML";if(1==a("parsererror",t).length)throw"Error: "+a(t).text()}catch(s){var n=s.name==undefined?s:s.name+": "+s.message;return a(document).trigger("xmlParseError",[n]),undefined}return t}function n(e,t,n){(e.context?jQuery(e.context):jQuery.event).trigger(t,n)}function o(t,n){var s=!1;return"string"==typeof n?a.isFunction(t.test)?t.test(n):t==n:(a.each(t,function(e){return n[e]===undefined?s=!1:(s=!0,"object"==typeof n[e]?o(t[e],n[e]):s=a.isFunction(t[e].test)?t[e].test(n[e]):t[e]==n[e])}),s)}function i(e,t){if(a.isFunction(e))return e(t);if(a.isFunction(e.url.test)){if(!e.url.test(t.url))return null}else{var n=e.url.indexOf("*");if(e.url!==t.url&&-1===n||!new RegExp(e.url.replace(/[-[\]{}()+?.,\\^$|#\s]/g,"\\$&").replace("*",".+")).test(t.url))return null}return e.data&&t.data&&!o(e.data,t.data)?null:e&&e.type&&e.type.toLowerCase()!=t.type.toLowerCase()?null:e}function u(e,t){var n=a.extend({},a.mockjaxSettings,e);n.log&&a.isFunction(n.log)&&n.log("MOCK "+t.type.toUpperCase()+": "+t.url,a.extend({},t))}function p(t,e,n){var s,o=(s=this,function(){return function(){this.status=t.status,this.statusText=t.statusText,this.readyState=4,a.isFunction(t.response)&&t.response(n),"json"==e.dataType&&"object"==typeof t.responseText?this.responseText=JSON.stringify(t.responseText):"xml"==e.dataType?"string"==typeof t.responseXML?this.responseXML=r(t.responseXML):this.responseXML=t.responseXML:this.responseText=t.responseText,"number"!=typeof t.status&&"string"!=typeof t.status||(this.status=t.status),"string"==typeof t.statusText&&(this.statusText=t.statusText),a.isFunction(this.onreadystatechange)?(t.isTimeout&&(this.status=-1),this.onreadystatechange(t.isTimeout?"timeout":undefined)):t.isTimeout&&(this.status=-1)}.apply(s)});t.proxy?g({global:!1,url:t.proxy,type:t.proxyType,data:t.data,dataType:"script"===e.dataType?"text/plain":e.dataType,complete:function(e){t.responseXML=e.responseXML,t.responseText=e.responseText,t.status=e.status,t.statusText=e.statusText,this.responseTimer=setTimeout(o,t.responseTime||0)}}):!1===e.async?o():this.responseTimer=setTimeout(o,t.responseTime||50)}function c(s,e,t,n){return"undefined"==typeof(s=a.extend({},a.mockjaxSettings,s)).headers&&(s.headers={}),s.contentType&&(s.headers["content-type"]=s.contentType),{status:s.status,statusText:s.statusText,readyState:1,open:function(){},send:function(){n.fired=!0,p.call(this,s,e,t)},abort:function(){clearTimeout(this.responseTimer)},setRequestHeader:function(e,t){s.headers[e]=t},getResponseHeader:function(e){return s.headers&&s.headers[e]?s.headers[e]:"last-modified"==e.toLowerCase()?s.lastModified||(new Date).toString():"etag"==e.toLowerCase()?s.etag||"":"content-type"==e.toLowerCase()?s.contentType||"text/plain":void 0},getAllResponseHeaders:function(){var n="";return a.each(s.headers,function(e,t){n+=e+": "+t+"\n"}),n}}}function l(e,t,n){if(d(e),e.dataType="json",e.data&&j.test(e.data)||j.test(e.url)){x(e,t);var s=/^(\w+:)?\/\/([^\/?#]+)/.exec(e.url),o=s&&(s[1]&&s[1]!==location.protocol||s[2]!==location.host);if(e.dataType="script","GET"===e.type.toUpperCase()&&o){var r=f(e,t,n);return r||!0}}return null}function d(e){"GET"===e.type.toUpperCase()?j.test(e.url)||(e.url+=(/\?/.test(e.url)?"&":"?")+(e.jsonp||"callback")+"=?"):e.data&&j.test(e.data)||(e.data=(e.data?e.data+"&":"")+(e.jsonp||"callback")+"=?")}function f(e,t,n){n&&n.context;var s=null;return t.response&&a.isFunction(t.response)?t.response(n):"object"==typeof t.responseText?a.globalEval("("+JSON.stringify(t.responseText)+")"):a.globalEval("("+t.responseText+")"),y(e,t),T(e,t),jQuery.Deferred&&(s=new jQuery.Deferred,"object"==typeof t.responseText?s.resolve(t.responseText):s.resolve(jQuery.parseJSON(t.responseText))),s}function x(n,s){jsonp=n.jsonpCallback||"jsonp"+t++,n.data&&(n.data=(n.data+"").replace(j,"="+jsonp+"$1")),n.url=n.url.replace(j,"="+jsonp+"$1"),window[jsonp]=window[jsonp]||function(e){data=e,y(n,s),T(n,s),window[jsonp]=undefined;try{delete window[jsonp]}catch(t){}head&&head.removeChild(script)}}function y(e,t){e.success&&e.success.call(callbackContext,t.response?t.response.toString():t.responseText||"",status,{}),e.global&&n(e,"ajaxSuccess",[{},e])}function T(e){e.complete&&e.complete.call(callbackContext,{},status),e.global&&n("ajaxComplete",[{},e]),e.global&&!--jQuery.active&&jQuery.event.trigger("ajaxStop")}function e(e,t){var o,n,s;"object"==typeof e?(t=e,e=undefined):t.url=e,n=jQuery.extend(!0,{},jQuery.ajaxSettings,t);for(var r=0;r<h.length;r++)if(h[r]&&(s=i(h[r],n)))return u(s,n),"jsonp"===n.dataType&&(o=l(n,s,t))||(s.cache=n.cache,s.timeout=n.timeout,s.global=n.global,function(e,t,n,s){o=g.call(a,a.extend(!0,{},n,{xhr:function(){return c(e,t,n,s)}}))}(s,n,t,h[r])),o;return g.apply(a,[t])}var g=a.ajax,h=[],j=/=\?(&|$)/,t=(new Date).getTime();a.extend({ajax:e}),a.mockjaxSettings={log:function(e){window.console&&window.console.log&&window.console.log(e)},status:200,statusText:"OK",responseTime:500,isTimeout:!1,contentType:"text/plain",response:"",responseText:"",responseXML:"",proxy:"",proxyType:"GET",lastModified:null,etag:"",headers:{etag:"IJF@H#@923uf8023hFO@I#H#","content-type":"text/plain"}},a.mockjax=function(e){var t=h.length;return h[t]=e,t},a.mockjaxClear=function(e){1==arguments.length?h[e]=null:h=[]},a.mockjax.handler=function(e){if(1==arguments.length)return h[e]}}(jQuery);