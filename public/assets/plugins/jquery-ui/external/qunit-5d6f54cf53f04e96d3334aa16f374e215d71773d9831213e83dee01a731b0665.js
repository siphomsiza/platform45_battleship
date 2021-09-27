!function(g){function i(e){v(this,e),this.assertions=[],this.testNumber=++i.count}function r(){x.autorun=!0,x.currentModule&&q("moduleDone",T,{name:x.currentModule,failed:x.moduleStats.bad,passed:x.moduleStats.all-x.moduleStats.bad,total:x.moduleStats.all});var e,t,n=E("qunit-banner"),r=E("qunit-tests"),s=+new M-x.started,o=x.stats.all-x.stats.bad,i=["Tests completed in ",s," milliseconds.<br/>","<span class='passed'>",o,"</span> assertions of <span class='total'>",x.stats.all,"</span> passed, <span class='failed'>",x.stats.bad,"</span> failed."].join("");if(n&&(n.className=x.stats.bad?"qunit-fail":"qunit-pass"),r&&(E("qunit-testresult").innerHTML=i),x.altertitle&&"undefined"!=typeof document&&document.title&&(document.title=[x.stats.bad?"\u2716":"\u2714",document.title.replace(/^[\u2714\u2716] /i,"")].join(" ")),x.reorder&&L.sessionStorage&&0===x.stats.bad)for(e=0;e<sessionStorage.length;e++)0===(t=sessionStorage.key(e++)).indexOf("qunit-test-")&&sessionStorage.removeItem(t);g.scrollTo&&g.scrollTo(0,0),q("done",T,{failed:x.stats.bad,passed:o,total:x.stats.all,runtime:s})}function a(e){var t,n=x.filter&&x.filter.toLowerCase(),r=x.module&&x.module.toLowerCase(),s=(e.module+": "+e.testName).toLowerCase();return e.callback&&e.callback.validTest===a?(delete e.callback.validTest,!0):x.testNumber?e.testNumber===x.testNumber:!(r&&(!e.module||e.module.toLowerCase()!==r))&&(!n||((t="!"!==n.charAt(0))||(n=n.slice(1)),-1!==s.indexOf(n)?t:!t))}function n(e,t){var n,r,s;if(t=t===undefined?3:t,e.stacktrace)return e.stacktrace.split("\n")[t+3];if(e.stack){if(n=e.stack.split("\n"),/^error$/i.test(n[0])&&n.shift(),N){for(r=[],s=t;s<n.length&&-1===n[s].indexOf(N);s++)r.push(n[s]);if(r.length)return r.join("\n")}return n[t]}if(e.sourceURL){if(/qunit.js$/.test(e.sourceURL))return;return e.sourceURL+":"+e.line}}function u(e){try{throw new Error}catch(t){return n(t,e)}}function b(e){return e?(e+="").replace(/['"<>&]/g,function(e){switch(e){case"'":return"&#039;";case'"':return"&quot;";case"<":return"&lt;";case">":return"&gt;";case"&":return"&amp;"}}):""}function s(e,t){x.queue.push(e),x.autorun&&!x.blocking&&o(t)}function o(e){function t(){o(e)}var n=(new M).getTime();for(x.depth=x.depth?x.depth+1:1;x.queue.length&&!x.blocking;){if(!(!L.setTimeout||x.updateRate<=0||(new M).getTime()-n<x.updateRate)){g.setTimeout(t,13);break}x.queue.shift()()}x.depth--,!e||x.blocking||x.queue.length||0!==x.depth||r()}function l(){if(x.pollution=[],x.noglobals)for(var e in g)C.call(g,e)&&!/^qunit-test-output/.test(e)&&x.pollution.push(e)}function t(){var e,t,n=x.pollution;l(),0<(e=c(x.pollution,n)).length&&T.pushFailure("Introduced global variable(s): "+e.join(", ")),0<(t=c(n,x.pollution)).length&&T.pushFailure("Deleted global variable(s): "+t.join(", "))}function c(e,t){var n,r,s=e.slice();for(n=0;n<s.length;n++)for(r=0;r<t.length;r++)if(s[n]===t[r]){s.splice(n,1),n--;break}return s}function v(e,t){for(var n in t)t[n]===undefined?delete e[n]:"constructor"===n&&e===g||(e[n]=t[n]);return e}function w(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent("on"+t,n)}function y(e,t,n){for(var r=e.length;r--;)w(e[r],t,n)}function d(e,t){return-1<(" "+e.className+" ").indexOf(" "+t+" ")}function p(e,t){d(e,t)||(e.className+=(e.className?" ":"")+t)}function f(e,t){for(var n=" "+e.className+" ";-1<n.indexOf(" "+t+" ");)n=n.replace(" "+t+" "," ");e.className=g.jQuery?jQuery.trim(n):n.trim?n.trim():n}function E(e){return!("undefined"==typeof document||!document||!document.getElementById)&&document.getElementById(e)}function e(t){return function(e){x[t].push(e)}}function q(e,t,n){var r,s;if(T.hasOwnProperty(e))T[e].call(t,n);else for(s=x[e],r=0;r<s.length;r++)s[r].call(t,n)}function m(e,t){if(t.indexOf)return t.indexOf(e);for(var n=0,r=t.length;n<r;n++)if(t[n]===e)return n;return-1}var T,h,x,k,S=0,N=(u(0)||"").replace(/(:\d+)+\)?/,"").replace(/.+\//,""),j=Object.prototype.toString,C=Object.prototype.hasOwnProperty,M=g.Date,L={setTimeout:"undefined"!=typeof g.setTimeout,sessionStorage:function(){var e="qunit-test-string";try{return sessionStorage.setItem(e,e),sessionStorage.removeItem(e),!0}catch(t){return!1}}()},D=function(e){var t,n,r=e.toString();return"[object"===r.substring(0,7)?(t=e.name?e.name.toString():"Error",n=e.message?e.message.toString():"",t&&n?t+": "+n:t||(n||"Error")):r},H=function(e){var t,n,r=T.is("array",e)?[]:{};for(t in e)C.call(e,t)&&(n=e[t],r[t]=n===Object(n)?H(n):n);return r};i.count=0,i.prototype={init:function(){var e,t,n,r=E("qunit-tests");r&&((t=document.createElement("strong")).innerHTML=this.nameHtml,(e=document.createElement("a")).innerHTML="Rerun",e.href=T.url({testNumber:this.testNumber}),(n=document.createElement("li")).appendChild(t),n.appendChild(e),n.className="running",n.id=this.id="qunit-test-output"+S++,r.appendChild(n))},setup:function(){if(this.module!==x.previousModule?(x.previousModule&&q("moduleDone",T,{name:x.previousModule,failed:x.moduleStats.bad,passed:x.moduleStats.all-x.moduleStats.bad,total:x.moduleStats.all}),x.previousModule=this.module,x.moduleStats={all:0,bad:0},q("moduleStart",T,{name:this.module})):x.autorun&&q("moduleStart",T,{name:this.module}),(x.current=this).testEnvironment=v({setup:function(){},teardown:function(){}},this.moduleTestEnvironment),this.started=+new M,q("testStart",T,{name:this.testName,module:this.module}),T.current_testEnvironment=this.testEnvironment,x.pollution||l(),x.notrycatch)this.testEnvironment.setup.call(this.testEnvironment);else try{this.testEnvironment.setup.call(this.testEnvironment)}catch(e){T.pushFailure("Setup failed on "+this.testName+": "+(e.message||e),n(e,1))}},run:function(){x.current=this;var e=E("qunit-testresult");if(e&&(e.innerHTML="Running: <br/>"+this.nameHtml),this.async&&T.stop(),this.callbackStarted=+new M,x.notrycatch)return this.callback.call(this.testEnvironment,T.assert),void(this.callbackRuntime=+new M-this.callbackStarted);try{this.callback.call(this.testEnvironment,T.assert),this.callbackRuntime=+new M-this.callbackStarted}catch(t){this.callbackRuntime=+new M-this.callbackStarted,T.pushFailure("Died on test #"+(this.assertions.length+1)+" "+this.stack+": "+(t.message||t),n(t,0)),l(),x.blocking&&T.start()}},teardown:function(){if(x.current=this,x.notrycatch)return"undefined"==typeof this.callbackRuntime&&(this.callbackRuntime=+new M-this.callbackStarted),void this.testEnvironment.teardown.call(this.testEnvironment);try{this.testEnvironment.teardown.call(this.testEnvironment)}catch(e){T.pushFailure("Teardown failed on "+this.testName+": "+(e.message||e),n(e,1))}t()},finish:function(){x.current=this,x.requireExpects&&null===this.expected?T.pushFailure("Expected number of assertions to be defined, but expect() was not called.",this.stack):null!==this.expected&&this.expected!==this.assertions.length?T.pushFailure("Expected "+this.expected+" assertions, but "+this.assertions.length+" were run",this.stack):null!==this.expected||this.assertions.length||T.pushFailure("Expected at least one assertion, but none were run - call expect(0) to accept zero assertions.",this.stack);var e,t,n,r,s,o,i,a=this,u=0,l=0,c=E("qunit-tests");if(this.runtime=+new M-this.started,x.stats.all+=this.assertions.length,x.moduleStats.all+=this.assertions.length,c){for((i=document.createElement("ol")).className="qunit-assert-list",e=0;e<this.assertions.length;e++)t=this.assertions[e],(o=document.createElement("li")).className=t.result?"pass":"fail",o.innerHTML=t.message||(t.result?"okay":"failed"),i.appendChild(o),t.result?u++:(l++,x.stats.bad++,x.moduleStats.bad++);T.config.reorder&&L.sessionStorage&&(l?sessionStorage.setItem("qunit-test-"+this.module+"-"+this.testName,l):sessionStorage.removeItem("qunit-test-"+this.module+"-"+this.testName)),0===l&&p(i,"qunit-collapsed"),(r=document.createElement("strong")).innerHTML=this.nameHtml+" <b class='counts'>(<b class='failed'>"+l+"</b>, <b class='passed'>"+u+"</b>, "+this.assertions.length+")</b>",w(r,"click",function(){var e=r.parentNode.lastChild;(d(e,"qunit-collapsed")?f:p)(e,"qunit-collapsed")}),w(r,"dblclick",function(e){var t=e&&e.target?e.target:g.event.srcElement;"span"!==t.nodeName.toLowerCase()&&"b"!==t.nodeName.toLowerCase()||(t=t.parentNode),g.location&&"strong"===t.nodeName.toLowerCase()&&(g.location=T.url({testNumber:a.testNumber}))}),(s=document.createElement("span")).className="runtime",s.innerHTML=this.runtime+" ms",(o=E(this.id)).className=l?"fail":"pass",o.removeChild(o.firstChild),n=o.firstChild,o.appendChild(r),o.appendChild(n),o.appendChild(s),o.appendChild(i)}else for(e=0;e<this.assertions.length;e++)this.assertions[e].result||(l++,x.stats.bad++,x.moduleStats.bad++);q("testDone",T,{name:this.testName,module:this.module,failed:l,passed:this.assertions.length-l,total:this.assertions.length,duration:this.runtime}),T.reset(),x.current=undefined},queue:function(){function e(){s(function(){t.setup()}),s(function(){t.run()}),s(function(){t.teardown()}),s(function(){t.finish()})}var t=this;s(function(){t.init()}),T.config.reorder&&L.sessionStorage&&+sessionStorage.getItem("qunit-test-"+this.module+"-"+this.testName)?e():s(e,!0)}},v(T={module:function(e,t){x.currentModule=e,x.currentModuleTestEnvironment=t,x.modules[e]=!0},asyncTest:function(e,t,n){2===arguments.length&&(n=t,t=null),T.test(e,t,n,!0)},test:function(e,t,n,r){var s,o="<span class='test-name'>"+b(e)+"</span>";2===arguments.length&&(n=t,t=null),x.currentModule&&(o="<span class='module-name'>"+b(x.currentModule)+"</span>: "+o),a(s=new i({nameHtml:o,testName:e,expected:t,async:r,callback:n,module:x.currentModule,moduleTestEnvironment:x.currentModuleTestEnvironment,stack:u(2)}))&&s.queue()},expect:function(e){if(1!==arguments.length)return x.current.expected;x.current.expected=e},start:function(e){if(x.semaphore!==undefined){if(x.semaphore-=e||1,!(0<x.semaphore))return x.semaphore<0?(x.semaphore=0,void T.pushFailure("Called start() while already started (QUnit.config.semaphore was 0 already)",null,u(2))):void(L.setTimeout?g.setTimeout(function(){0<x.semaphore||(x.timeout&&clearTimeout(x.timeout),o(!(x.blocking=!1)))},13):o(!(x.blocking=!1)))}else T.begin(function(){setTimeout(function(){T.start(e)})})},stop:function(e){x.semaphore+=e||1,x.blocking=!0,x.testTimeout&&L.setTimeout&&(clearTimeout(x.timeout),x.timeout=g.setTimeout(function(){T.ok(!1,"Test timed out"),x.semaphore=1,T.start()},x.testTimeout))}},h={ok:function(e,t){if(!x.current)throw new Error("ok() assertion outside test context, was "+u(2));e=!!e;var n,r={module:x.current.module,name:x.current.testName,result:e,message:t};t="<span class='test-message'>"+(t=b(t||(e?"okay":"failed")))+"</span>",e||(n=u(2))&&(t+="<table><tr class='test-source'><th>Source: </th><td><pre>"+b(r.source=n)+"</pre></td></tr></table>"),q("log",T,r),x.current.assertions.push({result:e,message:t})},equal:function(e,t,n){T.push(t==e,e,t,n)},notEqual:function(e,t,n){T.push(t!=e,e,t,n)},propEqual:function(e,t,n){e=H(e),t=H(t),T.push(T.equiv(e,t),e,t,n)},notPropEqual:function(e,t,n){e=H(e),t=H(t),T.push(!T.equiv(e,t),e,t,n)},deepEqual:function(e,t,n){T.push(T.equiv(e,t),e,t,n)},notDeepEqual:function(e,t,n){T.push(!T.equiv(e,t),e,t,n)},strictEqual:function(e,t,n){T.push(t===e,e,t,n)},notStrictEqual:function(e,t,n){T.push(t!==e,e,t,n)},"throws":function(e,t,n){var r,s=t,o=!1;"string"==typeof t&&(n=t,t=null),x.current.ignoreGlobalErrors=!0;try{e.call(x.current.testEnvironment)}catch(i){r=i}x.current.ignoreGlobalErrors=!1,r?(t?"regexp"===T.objectType(t)?o=t.test(D(r)):r instanceof t?o=!0:!0===t.call({},r)&&(o=!(s=null)):(o=!0,s=null),T.push(o,r,s,n)):T.pushFailure(n,null,"No exception was thrown.")}}),T.raises=h["throws"],T.equals=function(){T.push(!1,!1,!1,"QUnit.equals has been deprecated since 2009 (e88049a0), use QUnit.equal instead")},T.same=function(){T.push(!1,!1,!1,"QUnit.same has been deprecated since 2009 (e88049a0), use QUnit.deepEqual instead")},function(){function e(){}e.prototype=T,(T=new e).constructor=e}(),x={queue:[],blocking:!0,hidepassed:!1,reorder:!0,altertitle:!0,requireExpects:!1,urlConfig:[{id:"noglobals",label:"Check for Globals",tooltip:"Enabling this will test if any test introduces new properties on the `window` object. Stored as query-strings."},{id:"notrycatch",label:"No try-catch",tooltip:"Enabling this will run tests outside of a try-catch block. Makes debugging exceptions in IE reasonable. Stored as query-strings."}],modules:{},begin:[],done:[],log:[],testStart:[],testDone:[],moduleStart:[],moduleDone:[]},"undefined"==typeof exports&&(v(g,T),g.QUnit=T),function(){var e,t,n=g.location||{search:"",protocol:"file:"},r=n.search.slice(1).split("&"),s=r.length,o={};if(r[0])for(e=0;e<s;e++)(t=r[e].split("="))[0]=decodeURIComponent(t[0]),t[1]=!t[1]||decodeURIComponent(t[1]),o[t[0]]=t[1];T.urlParams=o,x.filter=o.filter,x.module=o.module,x.testNumber=parseInt(o.testNumber,10)||null,T.isLocal="file:"===n.protocol}(),v(T,{assert:h,config:x,init:function(){v(x,{stats:{all:0,bad:0},moduleStats:{all:0,bad:0},started:+new M,updateRate:1e3,blocking:!1,autostart:!0,autorun:!1,filter:"",queue:[],semaphore:1});var e,t,n,r=E("qunit");r&&(r.innerHTML="<h1 id='qunit-header'>"+b(document.title)+"</h1><h2 id='qunit-banner'></h2><div id='qunit-testrunner-toolbar'></div><h2 id='qunit-userAgent'></h2><ol id='qunit-tests'></ol>"),e=E("qunit-tests"),t=E("qunit-banner"),n=E("qunit-testresult"),e&&(e.innerHTML=""),t&&(t.className=""),n&&n.parentNode.removeChild(n),e&&((n=document.createElement("p")).id="qunit-testresult",n.className="result",e.parentNode.insertBefore(n,e),n.innerHTML="Running...<br/>&nbsp;")},reset:function(){var e=E("qunit-fixture");e&&(e.innerHTML=x.fixture)},triggerEvent:function(e,t,n){document.createEvent?((n=document.createEvent("MouseEvents")).initMouseEvent(t,!0,!0,e.ownerDocument.defaultView,0,0,0,0,0,!1,!1,!1,!1,0,null),e.dispatchEvent(n)):e.fireEvent&&e.fireEvent("on"+t)},is:function(e,t){return T.objectType(t)===e},objectType:function(e){if(void 0===e)return"undefined";if(null===e)return"null";var t=j.call(e).match(/^\[object\s(.*)\]$/),n=t&&t[1]||"";switch(n){case"Number":return isNaN(e)?"nan":"number";case"String":case"Boolean":case"Array":case"Date":case"RegExp":case"Function":return n.toLowerCase()}return"object"==typeof e?"object":undefined},push:function(e,t,n,r){if(!x.current)throw new Error("assertion outside test context, was "+u());var s,o,i={module:x.current.module,name:x.current.testName,result:e,message:r,actual:t,expected:n};s=r="<span class='test-message'>"+(r=b(r)||(e?"okay":"failed"))+"</span>",e||(s+="<table><tr class='test-expected'><th>Expected: </th><td><pre>"+(n=b(T.jsDump.parse(n)))+"</pre></td></tr>",(t=b(T.jsDump.parse(t)))!==n&&(s+="<tr class='test-actual'><th>Result: </th><td><pre>"+t+"</pre></td></tr>",s+="<tr class='test-diff'><th>Diff: </th><td><pre>"+T.diff(n,t)+"</pre></td></tr>"),(o=u())&&(s+="<tr class='test-source'><th>Source: </th><td><pre>"+b(i.source=o)+"</pre></td></tr>"),s+="</table>"),q("log",T,i),x.current.assertions.push({result:!!e,message:s})},pushFailure:function(e,t,n){if(!x.current)throw new Error("pushFailure() assertion outside test context, was "+u(2));var r,s={module:x.current.module,name:x.current.testName,result:!1,message:e};r=e="<span class='test-message'>"+(e=b(e)||"error")+"</span>",r+="<table>",n&&(r+="<tr class='test-actual'><th>Result: </th><td><pre>"+b(n)+"</pre></td></tr>"),t&&(r+="<tr class='test-source'><th>Source: </th><td><pre>"+b(s.source=t)+"</pre></td></tr>"),r+="</table>",q("log",T,s),x.current.assertions.push({result:!1,message:r})},url:function(e){e=v(v({},T.urlParams),e);var t,n="?";for(t in e)C.call(e,t)&&(n+=encodeURIComponent(t)+"="+encodeURIComponent(e[t])+"&");return g.location.protocol+"//"+g.location.host+g.location.pathname+n.slice(0,-1)},extend:v,id:E,addEvent:w}),v(T.constructor.prototype,{begin:e("begin"),done:e("done"),log:e("log"),testStart:e("testStart"),testDone:e("testDone"),moduleStart:e("moduleStart"),moduleDone:e("moduleDone")}),"undefined"!=typeof document&&"complete"!==document.readyState||(x.autorun=!0),T.load=function(){q("begin",T,{});var e,n,t,r,s,o,i,a,u,l,c,d,p=0,f="",m="",h=v({},x);for(T.init(),v(x,h),x.blocking=!1,s=x.urlConfig.length,t=0;t<s;t++)"string"==typeof(l=x.urlConfig[t])&&(l={id:l,label:l,tooltip:"[no tooltip available]"}),x[l.id]=T.urlParams[l.id],m+="<input id='qunit-urlconfig-"+b(l.id)+"' name='"+b(l.id)+"' type='checkbox'"+(x[l.id]?" checked='checked'":"")+" title='"+b(l.tooltip)+"'><label for='qunit-urlconfig-"+b(l.id)+"' title='"+b(l.tooltip)+"'>"+l.label+"</label>";for(t in f+="<label for='qunit-modulefilter'>Module: </label><select id='qunit-modulefilter' name='modulefilter'><option value='' "+(x.module===undefined?"selected='selected'":"")+">< All Modules ></option>",x.modules)x.modules.hasOwnProperty(t)&&(p+=1,f+="<option value='"+b(encodeURIComponent(t))+"' "+(x.module===t?"selected='selected'":"")+">"+b(t)+"</option>");f+="</select>",(u=E("qunit-userAgent"))&&(u.innerHTML=navigator.userAgent),(e=E("qunit-header"))&&(e.innerHTML="<a href='"+T.url({filter:undefined,module:undefined,testNumber:undefined})+"'>"+e.innerHTML+"</a> "),(a=E("qunit-testrunner-toolbar"))&&((n=document.createElement("input")).type="checkbox",n.id="qunit-filter-pass",w(n,"click",function(){var e,t=document.getElementById("qunit-tests");n.checked?t.className=t.className+" hidepass":(e=" "+t.className.replace(/[\n\t\r]/g," ")+" ",t.className=e.replace(/ hidepass /," ")),L.sessionStorage&&(n.checked?sessionStorage.setItem("qunit-filter-passed-tests","true"):sessionStorage.removeItem("qunit-filter-passed-tests"))}),(x.hidepassed||L.sessionStorage&&sessionStorage.getItem("qunit-filter-passed-tests"))&&(n.checked=!0,(i=document.getElementById("qunit-tests")).className=i.className+" hidepass"),a.appendChild(n),(r=document.createElement("label")).setAttribute("for","qunit-filter-pass"),r.setAttribute("title","Only show tests and assertons that fail. Stored in sessionStorage."),r.innerHTML="Hide passed tests",a.appendChild(r),(c=document.createElement("span")).innerHTML=m,y(c.getElementsByTagName("input"),"click",function(e){var t={},n=e.target||e.srcElement;t[n.name]=!!n.checked||undefined,g.location=T.url(t)}),a.appendChild(c),1<p&&((d=document.createElement("span")).setAttribute("id","qunit-modulefilter-container"),d.innerHTML=f,w(d.lastChild,"change",function(){var e=d.getElementsByTagName("select")[0],t=decodeURIComponent(e.options[e.selectedIndex].value);g.location=T.url({module:""===t?undefined:t})}),a.appendChild(d))),(o=E("qunit-fixture"))&&(x.fixture=o.innerHTML),x.autostart&&T.start()},w(g,"load",T.load),k=g.onerror,g.onerror=function(e,t,n){var r=!1;if(k&&(r=k(e,t,n)),!0===r)return r;if(T.config.current){if(T.config.current.ignoreGlobalErrors)return!0;T.pushFailure(e,t+":"+n)}else T.test("global failure",v(function(){T.pushFailure(e,t+":"+n)},{validTest:a}));return!1},T.equiv=function(){function r(e,t,n){var r=T.objectType(e);if(r)return"function"===T.objectType(t[r])?t[r].apply(t,n):t[r]}var u,l=[],c=[],d=Object.getPrototypeOf||function(e){return e.__proto__},s=function(){function e(e,t){return e instanceof t.constructor||t instanceof e.constructor?t==e:t===e}return{string:e,"boolean":e,number:e,"null":e,undefined:e,nan:function(e){return isNaN(e)},date:function(e,t){return"date"===T.objectType(e)&&t.valueOf()===e.valueOf()},regexp:function(e,t){return"regexp"===T.objectType(e)&&t.source===e.source&&t.global===e.global&&t.ignoreCase===e.ignoreCase&&t.multiline===e.multiline&&t.sticky===e.sticky},"function":function(){var e=l[l.length-1];return e!==Object&&void 0!==e},array:function(e,t){var n,r,s,o;if("array"!==T.objectType(e))return!1;if((s=t.length)!==e.length)return!1;for(c.push(t),n=0;n<s;n++){for(o=!1,r=0;r<c.length;r++)c[r]===t[n]&&(o=!0);if(!o&&!u(t[n],e[n]))return c.pop(),!1}return c.pop(),!0},object:function(e,t){var n,r,s,o=!0,i=[],a=[];if(t.constructor!==e.constructor&&!(null===d(t)&&d(e)===Object.prototype||null===d(e)&&d(t)===Object.prototype))return!1;for(n in l.push(t.constructor),c.push(t),t){for(s=!1,r=0;r<c.length;r++)c[r]===t[n]&&(s=!0);if(i.push(n),!s&&!u(t[n],e[n])){o=!1;break}}for(n in l.pop(),c.pop(),e)a.push(n);return o&&u(i.sort(),a.sort())}}}();return u=function(){var e,t,n=[].slice.apply(arguments);return n.length<2||(e=n[0],t=n[1],(e===t||null!==e&&null!==t&&void 0!==e&&void 0!==t&&T.objectType(e)===T.objectType(t)&&r(e,s,[t,e]))&&arguments.callee.apply(this,n.splice(1,n.length-1)))}}(),T.jsDump=function(){function e(e){return'"'+e.toString().replace(/"/g,'\\"')+'"'}function t(e){return e+""}function a(e,t,n){var r=i.separator(),s=i.indent(),o=i.indent(1);return t.join&&(t=t.join(","+r+o)),t?[e,o+t,s+n].join(r):e+n}function n(e,t){var n=e.length,r=new Array(n);for(this.up();n--;)r[n]=this.parse(e[n],undefined,t);return this.down(),a("[",r,"]")}var r=/^function (\w+)/,i={parse:function(e,t,n){n=n||[];var r,s,o=this.parsers[t||this.typeOf(e)];return t=typeof o,-1!==(r=m(e,n))?"recursion("+(r-n.length)+")":"function"===t?(n.push(e),s=o.call(this,e,n),n.pop(),s):"string"===t?o:this.parsers.error},typeOf:function(e){return null===e?"null":void 0===e?"undefined":T.is("regexp",e)?"regexp":T.is("date",e)?"date":T.is("function",e)?"function":typeof e.setInterval!==undefined&&"undefined"!=typeof e.document&&"undefined"==typeof e.nodeType?"window":9===e.nodeType?"document":e.nodeType?"node":"[object Array]"===j.call(e)||"number"==typeof e.length&&"undefined"!=typeof e.item&&(e.length?e.item(0)===e[0]:null===e.item(0)&&"undefined"==typeof e[0])?"array":e.constructor===Error.prototype.constructor?"error":typeof e},separator:function(){return this.multiline?this.HTML?"<br />":"\n":this.HTML?"&nbsp;":" "},indent:function(e){if(!this.multiline)return"";var t=this.indentChar;return this.HTML&&(t=t.replace(/\t/g,"   ").replace(/ /g,"&nbsp;")),new Array(this._depth_+(e||0)).join(t)},up:function(e){this._depth_+=e||1},down:function(e){this._depth_-=e||1},setParser:function(e,t){this.parsers[e]=t},quote:e,literal:t,join:a,_depth_:1,parsers:{window:"[Window]",document:"[Document]",error:function(e){return'Error("'+e.message+'")'},unknown:"[Unknown]","null":"null",undefined:"undefined","function":function(e){var t="function",n="name"in e?e.name:(r.exec(e)||[])[1];return n&&(t+=" "+n),a(t=[t+="( ",T.jsDump.parse(e,"functionArgs"),"){"].join(""),T.jsDump.parse(e,"functionCode"),"}")},array:n,nodelist:n,arguments:n,object:function(e,t){var n,r,s,o,i=[];for(r in T.jsDump.up(),n=[],e)n.push(r);for(n.sort(),o=0;o<n.length;o++)s=e[r=n[o]],i.push(T.jsDump.parse(r,"key")+": "+T.jsDump.parse(s,undefined,t));return T.jsDump.down(),a("{",i,"}")},node:function(e){var t,n,r,s=T.jsDump.HTML?"&lt;":"<",o=T.jsDump.HTML?"&gt;":">",i=e.nodeName.toLowerCase(),a=s+i,u=e.attributes;if(u)for(n=0,t=u.length;n<t;n++)(r=u[n].nodeValue)&&"inherit"!==r&&(a+=" "+u[n].nodeName+"="+T.jsDump.parse(r,"attribute"));return a+=o,3!==e.nodeType&&4!==e.nodeType||(a+=e.nodeValue),a+s+"/"+i+o},functionArgs:function(e){var t,n=e.length;if(!n)return"";for(t=new Array(n);n--;)t[n]=String.fromCharCode(97+n);return" "+t.join(", ")+" "},key:e,functionCode:"[code]",attribute:e,string:e,date:e,regexp:t,number:t,"boolean":t},HTML:!1,indentChar:"  ",multiline:!0};return i}(),T.diff=function(){function u(e,t){var n,r={},s={};for(n=0;n<t.length;n++)C.call(r,t[n])||(r[t[n]]={rows:[],o:null}),r[t[n]].rows.push(n);for(n=0;n<e.length;n++)C.call(s,e[n])||(s[e[n]]={rows:[],n:null}),s[e[n]].rows.push(n);for(n in r)C.call(r,n)&&1===r[n].rows.length&&C.call(s,n)&&1===s[n].rows.length&&(t[r[n].rows[0]]={text:t[r[n].rows[0]],row:s[n].rows[0]},e[s[n].rows[0]]={text:e[s[n].rows[0]],row:r[n].rows[0]});for(n=0;n<t.length-1;n++)null!=t[n].text&&null==t[n+1].text&&t[n].row+1<e.length&&null==e[t[n].row+1].text&&t[n+1]==e[t[n].row+1]&&(t[n+1]={text:t[n+1],row:t[n].row+1},e[t[n].row+1]={text:e[t[n].row+1],row:n+1});for(n=t.length-1;0<n;n--)null!=t[n].text&&null==t[n-1].text&&0<t[n].row&&null==e[t[n].row-1].text&&t[n-1]==e[t[n].row-1]&&(t[n-1]={text:t[n-1],row:t[n].row-1},e[t[n].row-1]={text:e[t[n].row-1],row:n-1});return{o:e,n:t}}return function(e,t){e=e.replace(/\s+$/,""),t=t.replace(/\s+$/,"");var n,r,s="",o=u(""===e?[]:e.split(/\s+/),""===t?[]:t.split(/\s+/)),i=e.match(/\s+/g),a=t.match(/\s+/g);if(null==i?i=[" "]:i.push(" "),null==a?a=[" "]:a.push(" "),0===o.n.length)for(n=0;n<o.o.length;n++)s+="<del>"+o.o[n]+i[n]+"</del>";else{if(null==o.n[0].text)for(t=0;t<o.o.length&&null==o.o[t].text;t++)s+="<del>"+o.o[t]+i[t]+"</del>";for(n=0;n<o.n.length;n++)if(null==o.n[n].text)s+="<ins>"+o.n[n]+a[n]+"</ins>";else{for(r="",t=o.n[n].row+1;t<o.o.length&&null==o.o[t].text;t++)r+="<del>"+o.o[t]+i[t]+"</del>";s+=" "+o.n[n].text+a[n]+r}}return s}}(),"undefined"!=typeof exports&&v(exports,T)}(function(){return this}.call());