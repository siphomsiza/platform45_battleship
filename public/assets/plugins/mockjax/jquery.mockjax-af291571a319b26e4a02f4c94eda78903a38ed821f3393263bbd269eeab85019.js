!function(e){function t(t){void 0==window.DOMParser&&window.ActiveXObject&&(DOMParser=function(){},DOMParser.prototype.parseFromString=function(e){var t=new ActiveXObject("Microsoft.XMLDOM");return t.async="false",t.loadXML(e),t});try{var n=(new DOMParser).parseFromString(t,"text/xml");if(!e.isXMLDoc(n))throw"Unable to parse XML";var s=e("parsererror",n);if(1==s.length)throw"Error: "+e(n).text()}catch(o){var r=void 0==o.name?o:o.name+": "+o.message;return void e(document).trigger("xmlParseError",[r])}return n}function n(e,t,n){(e.context?jQuery(e.context):jQuery.event).trigger(t,n)}function s(t,n){var o=!1;return"string"==typeof n?e.isFunction(t.test)?t.test(n):t==n:(e.each(t,function(r){return void 0===n[r]?o=!1:(o=!0,"object"==typeof n[r]?s(t[r],n[r]):o=e.isFunction(t[r].test)?t[r].test(n[r]):t[r]==n[r])}),o)}function o(t,n){if(e.isFunction(t))return t(n);if(e.isFunction(t.url.test)){if(!t.url.test(n.url))return null}else{var o=t.url.indexOf("*");if(t.url!==n.url&&-1===o||!new RegExp(t.url.replace(/[-[\]{}()+?.,\\^$|#\s]/g,"\\$&").replace("*",".+")).test(n.url))return null}return t.data&&n.data&&!s(t.data,n.data)?null:t&&t.type&&t.type.toLowerCase()!=n.type.toLowerCase()?null:t}function r(t,n){var s=e.extend({},e.mockjaxSettings,t);s.log&&e.isFunction(s.log)&&s.log("MOCK "+n.type.toUpperCase()+": "+n.url,e.extend({},n))}function a(n,s,o){var r=function(r){return function(){return function(){this.status=n.status,this.statusText=n.statusText,this.readyState=4,e.isFunction(n.response)&&n.response(o),"json"==s.dataType&&"object"==typeof n.responseText?this.responseText=JSON.stringify(n.responseText):"xml"==s.dataType?"string"==typeof n.responseXML?this.responseXML=t(n.responseXML):this.responseXML=n.responseXML:this.responseText=n.responseText,"number"!=typeof n.status&&"string"!=typeof n.status||(this.status=n.status),"string"==typeof n.statusText&&(this.statusText=n.statusText),e.isFunction(this.onreadystatechange)?(n.isTimeout&&(this.status=-1),this.onreadystatechange(n.isTimeout?"timeout":void 0)):n.isTimeout&&(this.status=-1)}.apply(r)}}(this);n.proxy?y({global:!1,url:n.proxy,type:n.proxyType,data:n.data,dataType:"script"===s.dataType?"text/plain":s.dataType,complete:function(e){n.responseXML=e.responseXML,n.responseText=e.responseText,n.status=e.status,n.statusText=e.statusText,this.responseTimer=setTimeout(r,n.responseTime||0)}}):s.async===!1?r():this.responseTimer=setTimeout(r,n.responseTime||50)}function i(t,n,s,o){return t=e.extend({},e.mockjaxSettings,t),"undefined"==typeof t.headers&&(t.headers={}),t.contentType&&(t.headers["content-type"]=t.contentType),{status:t.status,statusText:t.statusText,readyState:1,open:function(){},send:function(){o.fired=!0,a.call(this,t,n,s)},abort:function(){clearTimeout(this.responseTimer)},setRequestHeader:function(e,n){t.headers[e]=n},getResponseHeader:function(e){return t.headers&&t.headers[e]?t.headers[e]:"last-modified"==e.toLowerCase()?t.lastModified||(new Date).toString():"etag"==e.toLowerCase()?t.etag||"":"content-type"==e.toLowerCase()?t.contentType||"text/plain":void 0},getAllResponseHeaders:function(){var n="";return e.each(t.headers,function(e,t){n+=e+": "+t+"\n"}),n}}}function u(e,t,n){if(p(e),e.dataType="json",e.data&&g.test(e.data)||g.test(e.url)){l(e,t);var s=/^(\w+:)?\/\/([^\/?#]+)/,o=s.exec(e.url),r=o&&(o[1]&&o[1]!==location.protocol||o[2]!==location.host);if(e.dataType="script","GET"===e.type.toUpperCase()&&r){var a=c(e,t,n);return a?a:!0}}return null}function p(e){"GET"===e.type.toUpperCase()?g.test(e.url)||(e.url+=(/\?/.test(e.url)?"&":"?")+(e.jsonp||"callback")+"=?"):e.data&&g.test(e.data)||(e.data=(e.data?e.data+"&":"")+(e.jsonp||"callback")+"=?")}function c(t,n,s){var o=(s&&s.context||t,null);return n.response&&e.isFunction(n.response)?n.response(s):"object"==typeof n.responseText?e.globalEval("("+JSON.stringify(n.responseText)+")"):e.globalEval("("+n.responseText+")"),d(t,n),f(t,n),jQuery.Deferred&&(o=new jQuery.Deferred,"object"==typeof n.responseText?o.resolve(n.responseText):o.resolve(jQuery.parseJSON(n.responseText))),o}function l(e,t){jsonp=e.jsonpCallback||"jsonp"+h++,e.data&&(e.data=(e.data+"").replace(g,"="+jsonp+"$1")),e.url=e.url.replace(g,"="+jsonp+"$1"),window[jsonp]=window[jsonp]||function(n){data=n,d(e,t),f(e,t),window[jsonp]=void 0;try{delete window[jsonp]}catch(s){}head&&head.removeChild(script)}}function d(e,t){e.success&&e.success.call(callbackContext,t.response?t.response.toString():t.responseText||"",status,{}),e.global&&n(e,"ajaxSuccess",[{},e])}function f(e){e.complete&&e.complete.call(callbackContext,{},status),e.global&&n("ajaxComplete",[{},e]),e.global&&!--jQuery.active&&jQuery.event.trigger("ajaxStop")}function x(t,n){var s,a,p;"object"==typeof t?(n=t,t=void 0):n.url=t,a=jQuery.extend(!0,{},jQuery.ajaxSettings,n);for(var c=0;c<T.length;c++)if(T[c]&&(p=o(T[c],a)))return r(p,a),"jsonp"===a.dataType&&(s=u(a,p,n))?s:(p.cache=a.cache,p.timeout=a.timeout,p.global=a.global,function(t,n,o,r){s=y.call(e,e.extend(!0,{},o,{xhr:function(){return i(t,n,o,r)}}))}(p,a,n,T[c]),s);return y.apply(e,[n])}var y=e.ajax,T=[],g=/=\?(&|$)/,h=(new Date).getTime();e.extend({ajax:x}),e.mockjaxSettings={log:function(e){window.console&&window.console.log&&window.console.log(e)},status:200,statusText:"OK",responseTime:500,isTimeout:!1,contentType:"text/plain",response:"",responseText:"",responseXML:"",proxy:"",proxyType:"GET",lastModified:null,etag:"",headers:{etag:"IJF@H#@923uf8023hFO@I#H#","content-type":"text/plain"}},e.mockjax=function(e){var t=T.length;return T[t]=e,t},e.mockjaxClear=function(e){1==arguments.length?T[e]=null:T=[]},e.mockjax.handler=function(e){return 1==arguments.length?T[e]:void 0}}(jQuery);