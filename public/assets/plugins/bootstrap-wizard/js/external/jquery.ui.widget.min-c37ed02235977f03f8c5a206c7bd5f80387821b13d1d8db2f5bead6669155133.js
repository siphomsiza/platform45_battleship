!function(u,r){var i=0,d=Array.prototype.slice,s=u.cleanData;u.cleanData=function(t){for(var e,i=0;null!=(e=t[i]);i++)try{u(e).triggerHandler("remove")}catch(n){}s(t)},u.widget=function(t,i,a){var e,n,s,o,r=t.split(".")[0];t=t.split(".")[1],e=r+"-"+t,a||(a=i,i=u.Widget),u.expr[":"][e.toLowerCase()]=function(t){return!!u.data(t,e)},u[r]=u[r]||{},n=u[r][t],s=u[r][t]=function(t,e){if(!this._createWidget)return new s(t,e);arguments.length&&this._createWidget(t,e)},u.extend(s,n,{version:a.version,_proto:u.extend({},a),_childConstructors:[]}),(o=new i).options=u.widget.extend({},o.options),u.each(a,function(e,n){var s,o;u.isFunction(n)&&(a[e]=(s=function(){return i.prototype[e].apply(this,arguments)},o=function(t){return i.prototype[e].apply(this,t)},function(){var t,e=this._super,i=this._superApply;return this._super=s,this._superApply=o,t=n.apply(this,arguments),this._super=e,this._superApply=i,t}))}),s.prototype=u.widget.extend(o,{widgetEventPrefix:t},a,{constructor:s,namespace:r,widgetName:t,widgetBaseClass:e,widgetFullName:e}),n?(u.each(n._childConstructors,function(t,e){var i=e.prototype;u.widget(i.namespace+"."+i.widgetName,s,e._proto)}),delete n._childConstructors):i._childConstructors.push(s),u.widget.bridge(t,s)},u.widget.extend=function(t){for(var e,i,n=d.call(arguments,1),s=0,o=n.length;s<o;s++)for(e in n[s])i=n[s][e],n[s].hasOwnProperty(e)&&i!==r&&(u.isPlainObject(i)?t[e]=u.isPlainObject(t[e])?u.widget.extend({},t[e],i):u.widget.extend({},i):t[e]=i);return t},u.widget.bridge=function(o,e){var a=e.prototype.widgetFullName;u.fn[o]=function(i){var t="string"==typeof i,n=d.call(arguments,1),s=this;return i=!t&&n.length?u.widget.extend.apply(null,[i].concat(n)):i,t?this.each(function(){var t,e=u.data(this,a);return e?u.isFunction(e[i])&&"_"!==i.charAt(0)?(t=e[i].apply(e,n))!==e&&t!==r?(s=t&&t.jquery?s.pushStack(t.get()):t,!1):void 0:u.error("no such method '"+i+"' for "+o+" widget instance"):u.error("cannot call methods on "+o+" prior to initialization; attempted to call method '"+i+"'")}):this.each(function(){var t=u.data(this,a);t?t.option(i||{})._init():new e(i,this)}),s}},u.Widget=function(){},u.Widget._childConstructors=[],u.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,e){e=u(e||this.defaultElement||this)[0],this.element=u(e),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=u.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=u(),this.hoverable=u(),this.focusable=u(),e!==this&&(u.data(e,this.widgetName,this),u.data(e,this.widgetFullName,this),this._on({remove:function(t){t.target===e&&this.destroy()}}),this.document=u(e.style?e.ownerDocument:e.document||e),this.window=u(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:u.noop,_getCreateEventData:u.noop,_create:u.noop,_init:u.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(u.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:u.noop,widget:function(){return this.element},option:function(t,e){var i,n,s,o=t;if(0===arguments.length)return u.widget.extend({},this.options);if("string"==typeof t)if(o={},t=(i=t.split(".")).shift(),i.length){for(n=o[t]=u.widget.extend({},this.options[t]),s=0;s<i.length-1;s++)n[i[s]]=n[i[s]]||{},n=n[i[s]];if(t=i.pop(),e===r)return n[t]===r?null:n[t];n[t]=e}else{if(e===r)return this.options[t]===r?null:this.options[t];o[t]=e}return this._setOptions(o),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return this.options[t]=e,"disabled"===t&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!e).attr("aria-disabled",e),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(a,t){t?(a=u(a),this.bindings=this.bindings.add(a)):(t=a,a=this.element);var r=this;u.each(t,function(t,e){function i(){if(!0!==r.options.disabled&&!u(this).hasClass("ui-state-disabled"))return("string"==typeof e?r[e]:e).apply(r,arguments)}"string"!=typeof e&&(i.guid=e.guid=e.guid||i.guid||u.guid++);var n=t.match(/^(\w+)\s*(.*)$/),s=n[1]+r.eventNamespace,o=n[2];o?r.widget().delegate(o,s,i):a.bind(s,i)})},_off:function(t,e){e=(e||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(e).undelegate(e)},_delay:function(t,e){function i(){return("string"==typeof t?n[t]:t).apply(n,arguments)}var n=this;return setTimeout(i,e||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){u(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){u(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){u(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){u(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,e,i){var n,s,o=this.options[t];if(i=i||{},(e=u.Event(e)).type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),e.target=this.element[0],s=e.originalEvent)for(n in s)n in e||(e[n]=s[n]);return this.element.trigger(e,i),!(u.isFunction(o)&&!1===o.apply(this.element[0],[e].concat(i))||e.isDefaultPrevented())}},u.each({show:"fadeIn",hide:"fadeOut"},function(o,a){u.Widget.prototype["_"+o]=function(e,t,i){"string"==typeof t&&(t={effect:t});var n,s=t?!0===t||"number"==typeof t?a:t.effect||a:o;"number"==typeof(t=t||{})&&(t={duration:t}),n=!u.isEmptyObject(t),t.complete=i,t.delay&&e.delay(t.delay),n&&u.effects&&(u.effects.effect[s]||!1!==u.uiBackCompat&&u.effects[s])?e[o](t):s!==o&&e[s]?e[s](t.duration,t.easing,i):e.queue(function(t){u(this)[o](),i&&i.call(e[0]),t()})}}),!1!==u.uiBackCompat&&(u.Widget.prototype._getCreateOptions=function(){return u.metadata&&u.metadata.get(this.element[0])[this.widgetName]})}(jQuery);