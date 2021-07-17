!function(K){var t,E={isMsie:function(){return!!/(msie|trident)/i.test(navigator.userAgent)&&navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2]},isBlankString:function(t){return!t||/^\s*$/.test(t)},escapeRegExChars:function(t){return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")},isString:function(t){return"string"==typeof t},isNumber:function(t){return"number"==typeof t},isArray:K.isArray,isFunction:K.isFunction,isObject:K.isPlainObject,isUndefined:function(t){return void 0===t},bind:K.proxy,each:function(t,n){function e(t,e){return n(e,t)}K.each(t,e)},map:K.map,filter:K.grep,every:function(n,i){var r=!0;return n?(K.each(n,function(t,e){if(!(r=i.call(null,e,t,n)))return!1}),!!r):r},some:function(n,i){var r=!1;return n?(K.each(n,function(t,e){if(r=i.call(null,e,t,n))return!1}),!!r):r},mixin:K.extend,getUniqueId:(t=0,function(){return t++}),templatify:function u(t){function e(){return String(t)}return K.isFunction(t)?t:e},defer:function(t){setTimeout(t,0)},debounce:function(r,s,o){var u,a;return function(){var t,e,n=this,i=arguments;return t=function(){u=null,o||(a=r.apply(n,i))},e=o&&!u,clearTimeout(u),u=setTimeout(t,s),e&&(a=r.apply(n,i)),a}},throttle:function(n,i){var r,s,o,u,a,h;return a=0,h=function(){a=new Date,o=null,u=n.apply(r,s)},function(){var t=new Date,e=i-(t-a);return r=this,s=arguments,e<=0?(clearTimeout(o),o=null,a=t,u=n.apply(r,s)):o||(o=setTimeout(h,e)),u}},noop:function(){}},i="0.10.2",v=function(){function t(t){return t.split(/\s+/)}function e(t){return t.split(/\W+/)}function n(i){return function t(e){return function n(t){return i(t[e])}}}return{nonword:e,whitespace:t,obj:{nonword:n(e),whitespace:n(t)}}}(),r=function(){function t(t){this.maxSize=t||100,this.size=0,this.hash={},this.list=new e}function e(){this.head=this.tail=null}function r(t,e){this.key=t,this.val=e,this.prev=this.next=null}return E.mixin(t.prototype,{set:function s(t,e){var n,i=this.list.tail;this.size>=this.maxSize&&(this.list.remove(i),delete this.hash[i.key]),(n=this.hash[t])?(n.val=e,this.list.moveToFront(n)):(n=new r(t,e),this.list.add(n),this.hash[t]=n,this.size++)},get:function n(t){var e=this.hash[t];if(e)return this.list.moveToFront(e),e.val}}),E.mixin(e.prototype,{add:function i(t){this.head&&(t.next=this.head,this.head.prev=t),this.head=t,this.tail=this.tail||t},remove:function o(t){t.prev?t.prev.next=t.next:this.head=t.next,t.next?t.next.prev=t.prev:this.tail=t.prev},moveToFront:function(t){this.remove(t),this.add(t)}}),t}(),_=function(){function t(t){this.prefix=["__",t,"__"].join(""),this.ttlKey="__ttl__",this.keyMatcher=new RegExp("^"+this.prefix)}function i(){return(new Date).getTime()}function r(t){return JSON.stringify(E.isUndefined(t)?null:t)}function n(t){return JSON.parse(t)}var s,e;try{(s=window.localStorage).setItem("~~~","!"),s.removeItem("~~~")}catch(o){s=null}return e=s&&window.JSON?{_prefix:function(t){return this.prefix+t},_ttlKey:function(t){return this._prefix(t)+this.ttlKey},get:function(t){return this.isExpired(t)&&this.remove(t),n(s.getItem(this._prefix(t)))},set:function(t,e,n){return E.isNumber(n)?s.setItem(this._ttlKey(t),r(i()+n)):s.removeItem(this._ttlKey(t)),s.setItem(this._prefix(t),r(e))},remove:function(t){return s.removeItem(this._ttlKey(t)),s.removeItem(this._prefix(t)),this},clear:function(){var t,e,n=[],i=s.length;for(t=0;t<i;t++)(e=s.key(t)).match(this.keyMatcher)&&n.push(e.replace(this.keyMatcher,""));for(t=n.length;t--;)this.remove(n[t]);return this},isExpired:function(t){var e=n(s.getItem(this._ttlKey(t)));return!!(E.isNumber(e)&&i()>e)}}:{get:E.noop,set:E.noop,remove:E.noop,clear:E.noop,isExpired:E.noop},E.mixin(t.prototype,e),t}(),w=function(){function t(t){t=t||{},this._send=t.transport?e(t.transport):K.ajax,this._get=t.rateLimiter?t.rateLimiter(this._get):this._get}function e(s){return function o(t,e){function n(t){E.defer(function(){r.resolve(t)})}function i(t){E.defer(function(){r.reject(t)})}var r=K.Deferred();return s(t,e,n,i),r}}var a=0,h={},c=6,l=new r(10);return t.setMaxPendingRequests=function n(t){c=t},t.resetCache=function i(){l=new r(10)},E.mixin(t.prototype,{_get:function(e,t,n){function i(t){n&&n(null,t),l.set(e,t)}function r(){n&&n(!0)}function s(){a--,delete h[e],u.onDeckRequestArgs&&(u._get.apply(u,u.onDeckRequestArgs),u.onDeckRequestArgs=null)}var o,u=this;(o=h[e])?o.done(i).fail(r):a<c?(a++,h[e]=this._send(e,t).done(i).fail(r).always(s)):this.onDeckRequestArgs=[].slice.call(arguments,0)},get:function(t,e,n){var i;return E.isFunction(e)&&(n=e,e={}),(i=l.get(t))?E.defer(function(){n&&n(null,i)}):this._get(t,e,n),!!i}}),t}(),b=function(){function t(t){(t=t||{}).datumTokenizer&&t.queryTokenizer||K.error("datumTokenizer and queryTokenizer are both required"),this.datumTokenizer=t.datumTokenizer,this.queryTokenizer=t.queryTokenizer,this.reset()}function n(t){return t=E.filter(t,function(t){return!!t}),t=E.map(t,function(t){return t.toLowerCase()})}function o(){return{ids:[],children:{}}}function i(t){for(var e={},n=[],i=0;i<t.length;i++)e[t[i]]||(e[t[i]]=!0,n.push(t[i]));return n}function u(t,e){function n(t,e){return t-e}var i=0,r=0,s=[];for(t=t.sort(n),e=e.sort(n);i<t.length&&r<e.length;)t[i]<e[r]?i++:(t[i]>e[r]||(s.push(t[i]),i++),r++);return s}return E.mixin(t.prototype,{bootstrap:function e(t){this.datums=t.datums,this.trie=t.trie},add:function(t){var s=this;t=E.isArray(t)?t:[t],E.each(t,function(t){var r,e;r=s.datums.push(t)-1,e=n(s.datumTokenizer(t)),E.each(e,function(t){var e,n,i;for(e=s.trie,n=t.split("");i=n.shift();)(e=e.children[i]||(e.children[i]=o())).ids.push(r)})})},get:function r(t){var e,s,o=this;return e=n(this.queryTokenizer(t)),E.each(e,function(t){var e,n,i,r;if(s&&0===s.length)return!1;for(e=o.trie,n=t.split("");e&&(i=n.shift());)e=e.children[i];if(!e||0!==n.length)return!(s=[]);r=e.ids.slice(0),s=s?u(s,r):r}),s?E.map(i(s),function(t){return o.datums[t]}):[]},reset:function s(){this.datums=[],this.trie=o()},serialize:function a(){return{datums:this.datums,trie:this.trie}}}),t}(),x=function(){function t(t){return t.local||null}function e(t){var e,n;return n={url:null,thumbprint:"",ttl:864e5,filter:null,ajax:{}},(e=t.prefetch||null)&&(e=E.isString(e)?{url:e}:e,(e=E.mixin(n,e)).thumbprint=i+e.thumbprint,e.ajax.type=e.ajax.type||"GET",e.ajax.dataType=e.ajax.dataType||"json",!e.url&&K.error("prefetch requires url to be set")),e}function n(t){function e(e){return function(t){return E.debounce(t,e)}}function n(e){return function(t){return E.throttle(t,e)}}var i,r;return r={url:null,wildcard:"%QUERY",replace:null,rateLimitBy:"debounce",rateLimitWait:300,send:null,filter:null,ajax:{}},(i=t.remote||null)&&(i=E.isString(i)?{url:i}:i,(i=E.mixin(r,i)).rateLimiter=/^throttle$/i.test(i.rateLimitBy)?n(i.rateLimitWait):e(i.rateLimitWait),i.ajax.type=i.ajax.type||"GET",i.ajax.dataType=i.ajax.dataType||"json",delete i.rateLimitBy,delete i.rateLimitWait,!i.url&&K.error("remote requires url to be set")),i}return{local:t,prefetch:e,remote:n}}();!function(t){function e(t){t&&(t.local||t.prefetch||t.remote)||K.error("one of local, prefetch, or remote is required"),this.limit=t.limit||5,this.sorter=n(t.sorter),this.dupDetector=t.dupDetector||i,this.local=x.local(t),this.prefetch=x.prefetch(t),this.remote=x.remote(t),this.cacheKey=this.prefetch?this.prefetch.cacheKey||this.prefetch.url:null,this.index=new b({datumTokenizer:t.datumTokenizer,queryTokenizer:t.queryTokenizer}),this.storage=this.cacheKey?new _(this.cacheKey):null}function n(e){function t(t){return t.sort(e)}function n(t){return t}return E.isFunction(e)?t:n}function i(){return!1}var r,s;r=t.Bloodhound,s={data:"data",protocol:"protocol",thumbprint:"thumbprint"},(t.Bloodhound=e).noConflict=function o(){return t.Bloodhound=r,e},e.tokenizers=v,E.mixin(e.prototype,{_loadPrefetch:function u(e){function t(t){r.clear(),r.add(e.filter?e.filter(t):t),r._saveToStorage(r.index.serialize(),e.thumbprint,e.ttl)}var n,i,r=this;return(n=this._readFromStorage(e.thumbprint))?(this.index.bootstrap(n),i=K.Deferred().resolve()):i=K.ajax(e.url,e.ajax).done(t),i},_getFromRemote:function a(t,n){function e(t,e){n(t?[]:s.remote.filter?s.remote.filter(e):e)}var i,r,s=this;return t=t||"",r=encodeURIComponent(t),i=this.remote.replace?this.remote.replace(this.remote.url,t):this.remote.url.replace(this.remote.wildcard,r),this.transport.get(i,this.remote.ajax,e)},_saveToStorage:function h(t,e,n){this.storage&&(this.storage.set(s.data,t,n),this.storage.set(s.protocol,location.protocol,n),this.storage.set(s.thumbprint,e,n))},_readFromStorage:function c(t){var e,n={};return this.storage&&(n.data=this.storage.get(s.data),n.protocol=this.storage.get(s.protocol),n.thumbprint=this.storage.get(s.thumbprint)),e=n.thumbprint!==t||n.protocol!==location.protocol,n.data&&!e?n.data:null},_initialize:function l(){function t(){n.add(E.isFunction(i)?i():i)}var e,n=this,i=this.local;return e=this.prefetch?this._loadPrefetch(this.prefetch):K.Deferred().resolve(),i&&e.done(t),this.transport=this.remote?new w(this.remote):null,this.initPromise=e.promise()},initialize:function l(t){return!this.initPromise||t?this._initialize():this.initPromise},add:function d(t){this.index.add(t)},get:function p(t,e){function n(t){var n=r.slice(0);E.each(t,function(e){return!E.some(n,function(t){return i.dupDetector(e,t)})&&n.push(e),n.length<i.limit}),e&&e(i.sorter(n))}var i=this,r=[],s=!1;r=this.index.get(t),(r=this.sorter(r).slice(0,this.limit)).length<this.limit&&this.transport&&(s=this._getFromRemote(t,n)),s||(0<r.length||!this.transport)&&e&&e(r)},clear:function f(){this.index.reset()},clearPrefetchCache:function g(){this.storage&&this.storage.clear()},clearRemoteCache:function m(){this.transport&&w.resetCache()},ttAdapter:function y(){return E.bind(this.get,this)}})}(this);var z={wrapper:'<span class="twitter-typeahead"></span>',dropdown:'<span class="tt-dropdown-menu"></span>',dataset:'<div class="tt-dataset-%CLASS%"></div>',suggestions:'<span class="tt-suggestions"></span>',suggestion:'<div class="tt-suggestion"></div>'},q={wrapper:{position:"relative",display:"inline-block"},hint:{position:"absolute",top:"0",left:"0",borderColor:"transparent",boxShadow:"none"},input:{position:"relative",verticalAlign:"top",backgroundColor:"transparent"},inputWithNoHint:{position:"relative",verticalAlign:"top"},dropdown:{position:"absolute",top:"100%",left:"0",zIndex:"100",display:"none"},suggestions:{display:"block"},suggestion:{whiteSpace:"nowrap",cursor:"pointer"},suggestionChild:{whiteSpace:"normal"},ltr:{left:"0",right:"auto"},rtl:{left:"auto",right:" 0"}};E.isMsie()&&E.mixin(q.input,{backgroundImage:"url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"}),E.isMsie()&&E.isMsie()<=7&&E.mixin(q.input,{marginTop:"-1px"});var e,s,n,L=function(){function t(t){t&&t.el||K.error("EventBus initialized without el"),this.$el=K(t.el)}var n="typeahead:";return E.mixin(t.prototype,{trigger:function(t){var e=[].slice.call(arguments,1);this.$el.trigger(n+t,e)}}),t}(),$=function(){function i(t,e,n,i){var r;if(!n)return this;for(e=e.split(a),n=i?u(n,i):n,this._callbacks=this._callbacks||{};r=e.shift();)this._callbacks[r]=this._callbacks[r]||{sync:[],async:[]},this._callbacks[r][t].push(n);return this}function t(t,e,n){return i.call(this,"async",t,e,n)}function e(t,e,n){return i.call(this,"sync",t,e,n)}function n(t){var e;if(!this._callbacks)return this;for(t=t.split(a);e=t.shift();)delete this._callbacks[e];return this}function r(t){var e,n,i,r,s;if(!this._callbacks)return this;for(t=t.split(a),i=[].slice.call(arguments,1);(e=t.shift())&&(n=this._callbacks[e]);)r=o(n.sync,this,[e].concat(i)),s=o(n.async,this,[e].concat(i)),r()&&h(s);return this}function o(n,i,r){function t(){for(var t,e=0;!t&&e<n.length;e+=1)t=!1===n[e].apply(i,r);return!t}return t}function s(){return window.setImmediate?function e(t){setImmediate(function(){t()})}:function n(t){setTimeout(function(){t()},0)}}function u(t,e){return t.bind?t.bind(e):function(){t.apply(e,[].slice.call(arguments,0))}}var a=/\s+/,h=s();return{onSync:e,onAsync:t,off:n,trigger:r}}(),m=function(o){function e(t,e,n){for(var i,r=[],s=0;s<t.length;s++)r.push(E.escapeRegExChars(t[s]));return i=n?"\\b("+r.join("|")+")\\b":"("+r.join("|")+")",e?new RegExp(i):new RegExp(i,"i")}var n={node:null,pattern:null,tagName:"strong",className:null,wordsOnly:!1,caseSensitive:!1};return function u(i){function t(t){var e,n;return(e=r.exec(t.data))&&(wrapperNode=o.createElement(i.tagName),i.className&&(wrapperNode.className=i.className),(n=t.splitText(e.index)).splitText(e[0].length),wrapperNode.appendChild(n.cloneNode(!0)),t.parentNode.replaceChild(wrapperNode,n)),!!e}function s(t,e){for(var n,i=3,r=0;r<t.childNodes.length;r++)(n=t.childNodes[r]).nodeType===i?r+=e(n)?1:0:s(n,e)}var r;(i=E.mixin({},n,i)).node&&i.pattern&&(i.pattern=E.isArray(i.pattern)?i.pattern:[i.pattern],r=e(i.pattern,i.caseSensitive,i.wordsOnly),s(i.node,t))}}(window.document),R=function(){function n(t){var e,n,i,r,s=this;(t=t||{}).input||K.error("input is missing"),e=E.bind(this._onBlur,this),n=E.bind(this._onFocus,this),i=E.bind(this._onKeydown,this),r=E.bind(this._onInput,this),this.$hint=K(t.hint),this.$input=K(t.input).on("blur.tt",e).on("focus.tt",n).on("keydown.tt",i),0===this.$hint.length&&(this.setHint=this.getHint=this.clearHint=this.clearHintIfInvalid=E.noop),E.isMsie()?this.$input.on("keydown.tt keypress.tt cut.tt paste.tt",function(t){u[t.which||t.keyCode]||E.defer(E.bind(s._onInput,s,t))}):this.$input.on("input.tt",r),this.query=this.$input.val(),this.$overflowHelper=o(this.$input)}function o(t){return K('<pre aria-hidden="true"></pre>').css({position:"absolute",visibility:"hidden",whiteSpace:"pre",fontFamily:t.css("font-family"),fontSize:t.css("font-size"),fontStyle:t.css("font-style"),fontVariant:t.css("font-variant"),fontWeight:t.css("font-weight"),wordSpacing:t.css("word-spacing"),letterSpacing:t.css("letter-spacing"),textIndent:t.css("text-indent"),textRendering:t.css("text-rendering"),textTransform:t.css("text-transform")}).insertAfter(t)}function i(t,e){return n.normalizeQuery(t)===n.normalizeQuery(e)}function s(t){return t.altKey||t.ctrlKey||t.metaKey||t.shiftKey}var u;return u={9:"tab",27:"esc",37:"left",39:"right",13:"enter",38:"up",40:"down"},n.normalizeQuery=function(t){return(t||"").replace(/^\s*/g,"").replace(/\s{2,}/g," ")},E.mixin(n.prototype,$,{_onBlur:function t(){this.resetInputValue(),this.trigger("blurred")},_onFocus:function e(){this.trigger("focused")},_onKeydown:function r(t){var e=u[t.which||t.keyCode];this._managePreventDefault(e,t),e&&this._shouldTrigger(e,t)&&this.trigger(e+"Keyed",t)},_onInput:function a(){this._checkInputValue()},_managePreventDefault:function h(t,e){var n,i,r;switch(t){case"tab":i=this.getHint(),r=this.getInputValue(),n=i&&i!==r&&!s(e);break;case"up":case"down":n=!s(e);break;default:n=!1}n&&e.preventDefault()},_shouldTrigger:function c(t,e){var n;switch(t){case"tab":n=!s(e);break;default:n=!0}return n},_checkInputValue:function l(){var t,e,n;n=!!(e=i(t=this.getInputValue(),this.query))&&this.query.length!==t.length,e?n&&this.trigger("whitespaceChanged",this.query):this.trigger("queryChanged",this.query=t)},focus:function d(){this.$input.focus()},blur:function p(){this.$input.blur()},getQuery:function f(){return this.query},setQuery:function g(t){this.query=t},getInputValue:function m(){return this.$input.val()},setInputValue:function y(t,e){this.$input.val(t),e?this.clearHint():this._checkInputValue()},resetInputValue:function v(){this.setInputValue(this.query,!0)},getHint:function _(){return this.$hint.val()},setHint:function w(t){this.$hint.val(t)},clearHint:function b(){this.setHint("")},clearHintIfInvalid:function x(){var t,e,n;n=(t=this.getInputValue())!==(e=this.getHint())&&0===e.indexOf(t),!(""!==t&&n&&!this.hasOverflow())&&this.clearHint()},getLanguageDirection:function k(){return(this.$input.css("direction")||"ltr").toLowerCase()},hasOverflow:function C(){var t=this.$input.width()-2;return this.$overflowHelper.text(this.getInputValue()),this.$overflowHelper.width()>=t},isCursorAtEnd:function(){var t,e,n;return t=this.$input.val().length,e=this.$input[0].selectionStart,E.isNumber(e)?e===t:!document.selection||((n=document.selection.createRange()).moveStart("character",-t),t===n.text.length)},destroy:function S(){this.$hint.off(".tt"),this.$input.off(".tt"),this.$hint=this.$input=this.$overflowHelper=null}}),n}(),C=function(){function t(t){(t=t||{}).templates=t.templates||{},t.source||K.error("missing source"),t.name&&!i(t.name)&&K.error("invalid dataset name: "+t.name),this.query=null,this.highlight=!!t.highlight,this.name=t.name||E.getUniqueId(),this.source=t.source,this.displayFn=e(t.display||t.displayKey),this.templates=n(t.templates,this.displayFn),this.$el=K(z.dataset.replace("%CLASS%",this.name))}function e(e){function t(t){return t[e]}return e=e||"value",E.isFunction(e)?e:t}function n(t,e){function n(t){return"<p>"+e(t)+"</p>"}return{empty:t.empty&&E.templatify(t.empty),header:t.header&&E.templatify(t.header),footer:t.footer&&E.templatify(t.footer),suggestion:t.suggestion||n}}function i(t){return/^[_a-zA-Z0-9-]+$/.test(t)}var a="ttDataset",h="ttValue",c="ttDatum";return t.extractDatasetName=function r(t){return K(t).data(a)},t.extractValue=function s(t){return K(t).data(h)},t.extractDatum=function s(t){return K(t).data(c)},E.mixin(t.prototype,$,{_render:function l(i,r){function t(){return u.templates.empty({query:i,isEmpty:!0})}function e(){function t(t){var e;return(e=K(z.suggestion).append(u.templates.suggestion(t)).data(a,u.name).data(h,u.displayFn(t)).data(c,t)).children().each(function(){K(this).css(q.suggestionChild)}),e}var e,n;return e=K(z.suggestions).css(q.suggestions),n=E.map(r,t),e.append.apply(e,n),u.highlight&&m({node:e[0],pattern:i}),e}function n(){return u.templates.header({query:i,isEmpty:!o})}function s(){return u.templates.footer({query:i,isEmpty:!o})}if(this.$el){var o,u=this;this.$el.empty(),!(o=r&&r.length)&&this.templates.empty?this.$el.html(t()).prepend(u.templates.header?n():null).append(u.templates.footer?s():null):o&&this.$el.html(e()).prepend(u.templates.header?n():null).append(u.templates.footer?s():null),this.trigger("rendered")}},getRoot:function o(){return this.$el},update:function u(e){function t(t){n.canceled||e!==n.query||n._render(e,t)}var n=this;this.query=e,this.canceled=!1,this.source(e,t)},cancel:function d(){this.canceled=!0},clear:function p(){this.cancel(),this.$el.empty(),this.trigger("rendered")},isEmpty:function f(){return this.$el.is(":empty")},destroy:function g(){this.$el=null}}),t}(),F=function(){function t(t){var e,n,i,r=this;(t=t||{}).menu||K.error("menu is required"),this.isOpen=!1,this.isEmpty=!0,this.datasets=E.map(t.datasets,s),e=E.bind(this._onSuggestionClick,this),n=E.bind(this._onSuggestionMouseEnter,this),i=E.bind(this._onSuggestionMouseLeave,this),this.$menu=K(t.menu).on("click.tt",".tt-suggestion",e).on("mouseenter.tt",".tt-suggestion",n).on("mouseleave.tt",".tt-suggestion",i),E.each(this.datasets,function(t){r.$menu.append(t.getRoot()),t.onSync("rendered",r._onRendered,r)})}function s(t){return new C(t)}return E.mixin(t.prototype,$,{_onSuggestionClick:function e(t){this.trigger("suggestionClicked",K(t.currentTarget))},_onSuggestionMouseEnter:function n(t){this._removeCursor(),this._setCursor(K(t.currentTarget),!0)},_onSuggestionMouseLeave:function i(){this._removeCursor()},_onRendered:function r(){function t(t){return t.isEmpty()}this.isEmpty=E.every(this.datasets,t),this.isEmpty?this._hide():this.isOpen&&this._show(),this.trigger("datasetRendered")},_hide:function(){this.$menu.hide()},_show:function(){this.$menu.css("display","block")},_getSuggestions:function o(){return this.$menu.find(".tt-suggestion")},_getCursor:function u(){return this.$menu.find(".tt-cursor").first()},_setCursor:function a(t,e){t.first().addClass("tt-cursor"),!e&&this.trigger("cursorMoved")},_removeCursor:function h(){this._getCursor().removeClass("tt-cursor")},_moveCursor:function c(t){var e,n,i,r;this.isOpen&&(n=this._getCursor(),e=this._getSuggestions(),this._removeCursor(),-1!==(i=((i=e.index(n)+t)+1)%(e.length+1)-1)?(i<-1&&(i=e.length-1),this._setCursor(r=e.eq(i)),this._ensureVisible(r)):this.trigger("cursorRemoved"))},_ensureVisible:function l(t){var e,n,i,r;n=(e=t.position().top)+t.outerHeight(!0),i=this.$menu.scrollTop(),r=this.$menu.height()+parseInt(this.$menu.css("paddingTop"),10)+parseInt(this.$menu.css("paddingBottom"),10),e<0?this.$menu.scrollTop(i+e):r<n&&this.$menu.scrollTop(i+(n-r))},close:function d(){this.isOpen&&(this.isOpen=!1,this._removeCursor(),this._hide(),this.trigger("closed"))},open:function p(){this.isOpen||(this.isOpen=!0,!this.isEmpty&&this._show(),this.trigger("opened"))},setLanguageDirection:function f(t){this.$menu.css("ltr"===t?q.ltr:q.rtl)},moveCursorUp:function g(){this._moveCursor(-1)},moveCursorDown:function m(){this._moveCursor(1)},getDatumForSuggestion:function y(t){var e=null;return t.length&&(e={raw:C.extractDatum(t),value:C.extractValue(t),datasetName:C.extractDatasetName(t)}),e},getDatumForCursor:function v(){return this.getDatumForSuggestion(this._getCursor().first())},getDatumForTopSuggestion:function _(){return this.getDatumForSuggestion(this._getSuggestions().first())},update:function w(e){function t(t){t.update(e)}E.each(this.datasets,t)},empty:function b(){function t(t){t.clear()}E.each(this.datasets,t),this.isEmpty=!0},isVisible:function x(){return this.isOpen&&!this.isEmpty},destroy:function k(){function t(t){t.destroy()}this.$menu.off(".tt"),this.$menu=null,E.each(this.datasets,t)}}),t}(),o=function(){function t(t){var r,s,e;(t=t||{}).input||K.error("missing input"),this.isActivated=!1,this.autoselect=!!t.autoselect,this.minLength=E.isNumber(t.minLength)?t.minLength:1,this.$node=n(t.input,t.withHint),r=this.$node.find(".tt-dropdown-menu"),s=this.$node.find(".tt-input"),e=this.$node.find(".tt-hint"),s.on("blur.tt",function(t){var e,n,i;e=document.activeElement,n=r.is(e),i=0<r.has(e).length,E.isMsie()&&(n||i)&&(t.preventDefault(),t.stopImmediatePropagation(),E.defer(function(){s.focus()}))}),r.on("mousedown.tt",function(t){t.preventDefault()}),this.eventBus=t.eventBus||new L({el:s}),this.dropdown=new F({menu:r,datasets:t.datasets}).onSync("suggestionClicked",this._onSuggestionClicked,this).onSync("cursorMoved",this._onCursorMoved,this).onSync("cursorRemoved",this._onCursorRemoved,this).onSync("opened",this._onOpened,this).onSync("closed",this._onClosed,this).onAsync("datasetRendered",this._onDatasetRendered,this),this.input=new R({input:s,hint:e}).onSync("focused",this._onFocused,this).onSync("blurred",this._onBlurred,this).onSync("enterKeyed",this._onEnterKeyed,this).onSync("tabKeyed",this._onTabKeyed,this).onSync("escKeyed",this._onEscKeyed,this).onSync("upKeyed",this._onUpKeyed,this).onSync("downKeyed",this._onDownKeyed,this).onSync("leftKeyed",this._onLeftKeyed,this).onSync("rightKeyed",this._onRightKeyed,this).onSync("queryChanged",this._onQueryChanged,this).onSync("whitespaceChanged",this._onWhitespaceChanged,this),this._setLanguageDirection()}function n(t,e){var n,i,r,s;n=K(t),i=K(z.wrapper).css(q.wrapper),r=K(z.dropdown).css(q.dropdown),(s=n.clone().css(q.hint).css(u(n))).val("").removeData().addClass("tt-hint").removeAttr("id name placeholder").prop("disabled",!0).attr({autocomplete:"off",spellcheck:"false"}),n.data(a,{dir:n.attr("dir"),autocomplete:n.attr("autocomplete"),spellcheck:n.attr("spellcheck"),style:n.attr("style")}),n.addClass("tt-input").attr({autocomplete:"off",spellcheck:!1}).css(e?q.input:q.inputWithNoHint);try{!n.attr("dir")&&n.attr("dir","auto")}catch(o){}return n.wrap(i).parent().prepend(e?s:null).append(r)}function u(t){return{backgroundAttachment:t.css("background-attachment"),backgroundClip:t.css("background-clip"),backgroundColor:t.css("background-color"),backgroundImage:t.css("background-image"),backgroundOrigin:t.css("background-origin"),backgroundPosition:t.css("background-position"),backgroundRepeat:t.css("background-repeat"),backgroundSize:t.css("background-size")}}function e(t){var n=t.find(".tt-input");E.each(n.data(a),function(t,e){E.isUndefined(t)?n.removeAttr(e):n.attr(e,t)}),n.detach().removeData(a).removeClass("tt-input").insertAfter(t),t.remove()}var a="ttAttrs";return E.mixin(t.prototype,{_onSuggestionClicked:function i(t,e){var n;(n=this.dropdown.getDatumForSuggestion(e))&&this._select(n)},_onCursorMoved:function r(){var t=this.dropdown.getDatumForCursor();this.input.setInputValue(t.value,!0),this.eventBus.trigger("cursorchanged",t.raw,t.datasetName)},_onCursorRemoved:function s(){this.input.resetInputValue(),this._updateHint()},_onDatasetRendered:function o(){this._updateHint()},_onOpened:function h(){this._updateHint(),this.eventBus.trigger("opened")},_onClosed:function c(){this.input.clearHint(),this.eventBus.trigger("closed")},_onFocused:function l(){this.isActivated=!0,this.dropdown.open()},_onBlurred:function d(){this.isActivated=!1,this.dropdown.empty(),this.dropdown.close()},_onEnterKeyed:function p(t,e){var n,i;n=this.dropdown.getDatumForCursor(),i=this.dropdown.getDatumForTopSuggestion(),n?(this._select(n),e.preventDefault()):this.autoselect&&i&&(this._select(i),e.preventDefault())},_onTabKeyed:function f(t,e){var n;(n=this.dropdown.getDatumForCursor())?(this._select(n),e.preventDefault()):this._autocomplete(!0)},_onEscKeyed:function g(){this.dropdown.close(),this.input.resetInputValue()},_onUpKeyed:function m(){var t=this.input.getQuery();this.dropdown.isEmpty&&t.length>=this.minLength?this.dropdown.update(t):this.dropdown.moveCursorUp(),this.dropdown.open()},_onDownKeyed:function y(){var t=this.input.getQuery();this.dropdown.isEmpty&&t.length>=this.minLength?this.dropdown.update(t):this.dropdown.moveCursorDown(),this.dropdown.open()},_onLeftKeyed:function v(){"rtl"===this.dir&&this._autocomplete()},_onRightKeyed:function _(){"ltr"===this.dir&&this._autocomplete()},_onQueryChanged:function w(t,e){this.input.clearHintIfInvalid(),e.length>=this.minLength?this.dropdown.update(e):this.dropdown.empty(),this.dropdown.open(),this._setLanguageDirection()},_onWhitespaceChanged:function b(){this._updateHint(),this.dropdown.open()},_setLanguageDirection:function x(){var t;this.dir!==(t=this.input.getLanguageDirection())&&(this.dir=t,this.$node.css("direction",t),this.dropdown.setLanguageDirection(t))},_updateHint:function k(){var t,e,n,i,r;(t=this.dropdown.getDatumForTopSuggestion())&&this.dropdown.isVisible()&&!this.input.hasOverflow()?(e=this.input.getInputValue(),n=R.normalizeQuery(e),i=E.escapeRegExChars(n),(r=new RegExp("^(?:"+i+")(.+$)","i").exec(t.value))?this.input.setHint(e+r[1]):this.input.clearHint()):this.input.clearHint()},_autocomplete:function C(t){var e,n,i,r;e=this.input.getHint(),n=this.input.getQuery(),i=t||this.input.isCursorAtEnd(),e&&n!==e&&i&&((r=this.dropdown.getDatumForTopSuggestion())&&this.input.setInputValue(r.value),this.eventBus.trigger("autocompleted",r.raw,r.datasetName))},_select:function S(t){this.input.setQuery(t.value),this.input.setInputValue(t.value,!0),this._setLanguageDirection(),this.eventBus.trigger("selected",t.raw,t.datasetName),this.dropdown.close(),E.defer(E.bind(this.dropdown.empty,this.dropdown))},open:function $(){this.dropdown.open()},close:function A(){this.dropdown.close()},setVal:function D(t){this.isActivated?this.input.setInputValue(t):(this.input.setQuery(t),this.input.setInputValue(t,!0)),this._setLanguageDirection()},getVal:function I(){return this.input.getQuery()},destroy:function T(){this.input.destroy(),this.dropdown.destroy(),e(this.$node),this.$node=null}}),t}();e=K.fn.typeahead,s="ttTypeahead",n={initialize:function a(n,i){function t(){var t,e=K(this);E.each(i,function(t){t.highlight=!!n.highlight}),t=new o({input:e,eventBus:new L({el:e}),withHint:!!E.isUndefined(n.hint)||!!n.hint,minLength:n.minLength,autoselect:n.autoselect,datasets:i}),e.data(s,t)}return i=E.isArray(i)?i:[].slice.call(arguments,1),n=n||{},this.each(t)},open:function h(){function t(){var t;(t=K(this).data(s))&&t.open()}return this.each(t)},close:function c(){function t(){var t;(t=K(this).data(s))&&t.close()}return this.each(t)},val:function l(e){function t(){var t;(t=K(this).data(s))&&t.setVal(e)}function n(t){var e,n;return(e=t.data(s))&&(n=e.getVal()),n}return arguments.length?this.each(t):n(this.first())},destroy:function d(){function t(){var t,e=K(this);(t=e.data(s))&&(t.destroy(),e.removeData(s))}return this.each(t)}},K.fn.typeahead=function(t){return n[t]?n[t].apply(this,[].slice.call(arguments,1)):n.initialize.apply(this,arguments)},K.fn.typeahead.noConflict=function p(){return K.fn.typeahead=e,this}}(window.jQuery);