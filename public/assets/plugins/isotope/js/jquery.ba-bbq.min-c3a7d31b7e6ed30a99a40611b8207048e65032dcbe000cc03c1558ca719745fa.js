!function(p,s){function l(e){return"string"==typeof e}function e(e){var t=g.call(arguments,1);return function(){return e.apply(this,t.concat(g.call(arguments)))}}function t(e){return e.replace(/^[^#]*#?(.*)$/,"$1")}function n(e){return e.replace(/(?:^[^?#]*\?([^#]*).*$)?.*/,"$1")}function r(e,t,n,r,o){var a,i,c,u,f;return r!==h?(f=(c=n.match(e?/^([^#]*)\#?(.*)$/:/^([^#?]*)\??([^#]*)(#?.*)/))[3]||"",2===o&&l(r)?i=r.replace(e?R:E,""):(u=d(c[2]),r=l(r)?d[e?A:w](r):r,i=2===o?r:1===o?p.extend({},r,u):p.extend({},u,r),i=b(i),e&&(i=i.replace(v,y))),a=c[1]+(e?"#":i||!c[1]?"?":"")+i+f):a=t(n!==h?n:s[S][q]),a}function o(e,t,n){return t===h||"boolean"==typeof t?(n=t,t=b[e?A:w]()):t=l(t)?t.replace(e?R:E,""):t,d(t,n)}function a(r,o,a,i){return l(a)||"object"==typeof a||(i=a,a=o,o=h),this.each(function(){var e=p(this),t=o||m()[(this.nodeName||"").toLowerCase()]||"",n=t&&e.attr(t)||"";e.attr(t,b[r](n,a,i))})}var h,i,d,c,u,f,m,v,g=Array.prototype.slice,y=decodeURIComponent,b=p.param,$=p.bbq=p.bbq||{},x=p.event.special,j="hashchange",w="querystring",A="fragment",N="elemUrlAttr",S="location",q="href",C="src",E=/^.*\?|#.*$/g,R=/^.*\#/,U={};b[w]=e(r,0,n),b[A]=i=e(r,1,t),i.noEscape=function(e){e=e||"";var t=p.map(e.split(""),encodeURIComponent);v=new RegExp(t.join("|"),"g")},i.noEscape(",/"),p.deparam=d=function(e,f){var s={},l={"true":!0,"false":!1,"null":null};return p.each(e.replace(/\+/g," ").split("&"),function(e,t){var n,r=t.split("="),o=y(r[0]),a=s,i=0,c=o.split("]["),u=c.length-1;if(/\[/.test(c[0])&&/\]$/.test(c[u])?(c[u]=c[u].replace(/\]$/,""),u=(c=c.shift().split("[").concat(c)).length-1):u=0,2===r.length)if(n=y(r[1]),f&&(n=n&&!isNaN(n)?+n:"undefined"===n?h:l[n]!==h?l[n]:n),u)for(;i<=u;i++)a=a[o=""===c[i]?a.length:c[i]]=i<u?a[o]||(c[i+1]&&isNaN(c[i+1])?{}:[]):n;else p.isArray(s[o])?s[o].push(n):s[o]!==h?s[o]=[s[o],n]:s[o]=n;else o&&(s[o]=f?h:"")}),s},d[w]=e(o,0),d[A]=c=e(o,1),p[N]||(p[N]=function(e){return p.extend(U,e)})({a:q,base:q,iframe:C,img:C,input:C,form:"action",link:q,script:C}),m=p[N],p.fn[w]=e(a,w),p.fn[A]=e(a,A),$.pushState=u=function(e,t){l(e)&&/^#/.test(e)&&t===h&&(t=2);var n=e!==h,r=i(s[S][q],n?e:{},n?t:2);s[S][q]=r+(/#/.test(r)?"":"#")},$.getState=f=function(e,t){return e===h||"boolean"==typeof e?c(e):c(t)[e]},$.removeState=function(e){var n={};e!==h&&(n=f(),p.each(p.isArray(e)?e:arguments,function(e,t){delete n[t]})),u(n,2)},x[j]=p.extend(x[j],{add:function(e){function t(e){var n=e[A]=i();e.getState=function(e,t){return e===h||"boolean"==typeof e?d(n,e):d(n,t)[e]},r.apply(this,arguments)}var r;if(p.isFunction(e))return r=e,t;r=e.handler,e.handler=t}})}(jQuery,this),function(c,u,e){function f(e){return(e=e||u[s][p]).replace(/^[^#]*#?(.*)$/,"$1")}var t,n=c.event.special,s="location",l="hashchange",p="href",r=c.browser,o=document.documentMode,h=r.msie&&(o===e||o<8),a="on"+l in u&&!h;c[l+"Delay"]=100,n[l]=c.extend(n[l],{setup:function(){if(a)return!1;c(t.start)},teardown:function(){if(a)return!1;c(t.stop)}}),t=function(){function e(){a=i=function(e){return e},h&&(r=c('<iframe src="javascript:0"/>').hide().insertAfter("body")[0].contentWindow,i=function(){return f(r.document[s][p])},(a=function(e,t){if(e!==t){var n=r.document;n.open().close(),n[s].hash="#"+e}})(f()))}var o,r,a,i,t={};return t.start=function(){if(!o){var n=f();a||e(),function r(){var e=f(),t=i(n);e!==n?(a(n=e,t),c(u).trigger(l)):t!==n&&(u[s][p]=u[s][p].replace(/#.*/,"")+"#"+t),o=setTimeout(r,c[l+"Delay"])}()}},t.stop=function(){r||(o&&clearTimeout(o),o=0)},t}()}(jQuery,this);