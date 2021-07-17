!function(c,t,i){"use strict";function l(e){n[e]||(n[e]=!0,c.migrateWarnings.push(e),t.console&&console.warn&&!c.migrateMute&&(console.warn("JQMIGRATE: "+e),c.migrateTrace&&console.trace&&console.trace()))}function e(e,t,n,r){if(Object.defineProperty)try{return void Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:function(){return l(r),n},set:function(e){l(r),n=e}})}catch(a){}c._definePropertyBroken=!0,e[t]=n}var n={};c.migrateWarnings=[],!c.migrateMute&&t.console&&console.log&&console.log("JQMIGRATE: Logging is active"),c.migrateTrace===i&&(c.migrateTrace=!0),c.migrateReset=function(){n={},c.migrateWarnings.length=0},"BackCompat"===document.compatMode&&l("jQuery is not compatible with Quirks Mode");var r={},s=c.attr,a=c.attrHooks.value&&c.attrHooks.value.get||function(){return null},o=c.attrHooks.value&&c.attrHooks.value.set||function(){return i},u=/^(?:input|button)$/i,d=/^[238]$/,p=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,f=/^(?:checked|selected)$/i;e(c,"attrFn",r,"jQuery.attrFn is deprecated"),c.attr=function(e,t,n,r){var a=t.toLowerCase(),o=e&&e.nodeType;return r&&s.length<4&&(l("jQuery.fn.attr( props, pass ) is deprecated"),e&&!d.test(o)&&c.isFunction(c.fn[t]))?c(e)[t](n):("type"===t&&n!==i&&u.test(e.nodeName)&&e.parentNode&&l("Can't change the 'type' of an input or button in IE 6/7/8"),!c.attrHooks[a]&&p.test(a)&&(c.attrHooks[a]={get:function(e,t){var n,r=c.prop(e,t);return!0===r||"boolean"!=typeof r&&(n=e.getAttributeNode(t))&&!1!==n.nodeValue?t.toLowerCase():i},set:function(e,t,n){var r;return!1===t?c.removeAttr(e,n):((r=c.propFix[n]||n)in e&&(e[r]=!0),e.setAttribute(n,n.toLowerCase())),n}},f.test(a)&&l("jQuery.fn.attr('"+a+"') may use property instead of attribute")),s.call(c,e,t,n))},c.attrHooks.value={get:function(e,t){var n=(e.nodeName||"").toLowerCase();return"button"===n?a.apply(this,arguments):("input"!==n&&"option"!==n&&l("jQuery.fn.attr('value') no longer gets properties"),t in e?e.value:null)},set:function(e,t){var n=(e.nodeName||"").toLowerCase();if("button"===n)return o.apply(this,arguments);"input"!==n&&"option"!==n&&l("jQuery.fn.attr('value', val) no longer sets properties"),e.value=t}};var h,v,g=c.fn.init,m=c.parseJSON,y=/^(?:[^<]*(<[\w\W]+>)[^>]*|#([\w\-]*))$/;c.fn.init=function(e,t,n){var r;return e&&"string"==typeof e&&!c.isPlainObject(t)&&(r=y.exec(e))&&r[1]&&("<"!==e.charAt(0)&&l("$(html) HTML strings must start with '<' character"),t&&t.context&&(t=t.context),c.parseHTML)?g.call(this,c.parseHTML(c.trim(e),t,!0),t,n):g.apply(this,arguments)},c.fn.init.prototype=c.fn,c.parseJSON=function(e){return e||null===e?m.apply(this,arguments):(l("jQuery.parseJSON requires a valid JSON string"),null)},c.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},v={},(h=c.uaMatch(navigator.userAgent)).browser&&(v[h.browser]=!0,v.version=h.version),v.chrome?v.webkit=!0:v.webkit&&(v.safari=!0),c.browser=v,e(c,"browser",v,"jQuery.browser is deprecated"),c.sub=function(){function n(e,t){return new n.fn.init(e,t)}c.extend(!0,n,this),n.superclass=this,n.fn=n.prototype=this(),(n.fn.constructor=n).sub=this.sub,n.fn.init=function a(e,t){return t&&t instanceof c&&!(t instanceof n)&&(t=n(t)),c.fn.init.call(this,e,t,r)},n.fn.init.prototype=n.fn;var r=n(document);return l("jQuery.sub() is deprecated"),n};var b=c.fn.data;c.fn.data=function(e){var t,n,r=this[0];return!r||"events"!==e||1!==arguments.length||(t=c.data(r,e),n=c._data(r,e),t!==i&&t!==n||n===i)?b.apply(this,arguments):(l("Use of jQuery.fn.data('events') is deprecated"),n)};var w=/\/(java|ecma)script/i,j=c.fn.andSelf||c.fn.addBack;c.fn.andSelf=function(){return l("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),j.apply(this,arguments)},c.clean||(c.clean=function(e,t,n,r){t=(t=!(t=t||document).nodeType&&t[0]||t).ownerDocument||t,l("jQuery.clean() is deprecated");var a,o,i,s,u=[];if(c.merge(u,c.buildFragment(e,t).childNodes),n)for(i=function(e){if(!e.type||w.test(e.type))return r?r.push(e.parentNode?e.parentNode.removeChild(e):e):n.appendChild(e)},a=0;null!=(o=u[a]);a++)c.nodeName(o,"script")&&i(o)||(n.appendChild(o),"undefined"!=typeof o.getElementsByTagName&&(s=c.grep(c.merge([],o.getElementsByTagName("script")),i),u.splice.apply(u,[a+1,0].concat(s)),a+=s.length));return u});var Q=c.event.add,x=c.event.remove,k=c.event.trigger,N=c.fn.toggle,C=c.fn.live,T=c.fn.die,S="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",H=new RegExp("\\b(?:"+S+")\\b"),M=/(?:^|\s)hover(\.\S+|)\b/,A=function(e){return"string"!=typeof e||c.event.special.hover?e:(M.test(e)&&l("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),e&&e.replace(M,"mouseenter$1 mouseleave$1"))};c.event.props&&"attrChange"!==c.event.props[0]&&c.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),c.event.dispatch&&e(c.event,"handle",c.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),c.event.add=function(e,t,n,r,a){e!==document&&H.test(t)&&l("AJAX events should be attached to document: "+t),Q.call(this,e,A(t||""),n,r,a)},c.event.remove=function(e,t,n,r,a){x.call(this,e,A(t)||"",n,r,a)},c.fn.error=function(){var e=Array.prototype.slice.call(arguments,0);return l("jQuery.fn.error() is deprecated"),e.splice(0,0,"error"),arguments.length?this.bind.apply(this,e):(this.triggerHandler.apply(this,e),this)},c.fn.toggle=function(n,e){if(!c.isFunction(n)||!c.isFunction(e))return N.apply(this,arguments);l("jQuery.fn.toggle(handler, handler...) is deprecated");var r=arguments,t=n.guid||c.guid++,a=0,o=function(e){var t=(c._data(this,"lastToggle"+n.guid)||0)%a;return c._data(this,"lastToggle"+n.guid,t+1),e.preventDefault(),r[t].apply(this,arguments)||!1};for(o.guid=t;a<r.length;)r[a++].guid=t;return this.click(o)},c.fn.live=function(e,t,n){return l("jQuery.fn.live() is deprecated"),C?C.apply(this,arguments):(c(this.context).on(e,this.selector,t,n),this)},c.fn.die=function(e,t){return l("jQuery.fn.die() is deprecated"),T?T.apply(this,arguments):(c(this.context).off(e,this.selector||"**",t),this)},c.event.trigger=function(e,t,n,r){return!n&!H.test(e)&&l("Global events are undocumented and deprecated"),k.call(this,e,t,n||document,r)},c.each(S.split("|"),function(e,t){c.event.special[t]={setup:function(){var e=this;return e!==document&&(c.event.add(document,t+"."+c.guid,function(){c.event.trigger(t,null,e,!0)}),c._data(this,t,c.guid++)),!1},teardown:function(){return this!==document&&c.event.remove(document,t+"."+c._data(this,t)),!1}}})}(jQuery,window);