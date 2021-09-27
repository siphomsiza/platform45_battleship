!function(u){u.widget("ui.autocomplete",{version:"1.10.4",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var i,s,n,e=this.element[0].nodeName.toLowerCase(),t="textarea"===e,o="input"===e;this.isMultiLine=!!t||!o&&this.element.prop("isContentEditable"),this.valueMethod=this.element[t||o?"val":"text"],this.isNewMenu=!0,this.element.addClass("ui-autocomplete-input").attr("autocomplete","off"),this._on(this.element,{keydown:function(e){if(this.element.prop("readOnly"))s=n=i=!0;else{s=n=i=!1;var t=u.ui.keyCode;switch(e.keyCode){case t.PAGE_UP:i=!0,this._move("previousPage",e);break;case t.PAGE_DOWN:i=!0,this._move("nextPage",e);break;case t.UP:i=!0,this._keyEvent("previous",e);break;case t.DOWN:i=!0,this._keyEvent("next",e);break;case t.ENTER:case t.NUMPAD_ENTER:this.menu.active&&(i=!0,e.preventDefault(),this.menu.select(e));break;case t.TAB:this.menu.active&&this.menu.select(e);break;case t.ESCAPE:this.menu.element.is(":visible")&&(this._value(this.term),this.close(e),e.preventDefault());break;default:s=!0,this._searchTimeout(e)}}},keypress:function(e){if(i)return i=!1,void(this.isMultiLine&&!this.menu.element.is(":visible")||e.preventDefault());if(!s){var t=u.ui.keyCode;switch(e.keyCode){case t.PAGE_UP:this._move("previousPage",e);break;case t.PAGE_DOWN:this._move("nextPage",e);break;case t.UP:this._keyEvent("previous",e);break;case t.DOWN:this._keyEvent("next",e)}}},input:function(e){if(n)return n=!1,void e.preventDefault();this._searchTimeout(e)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(e){this.cancelBlur?delete this.cancelBlur:(clearTimeout(this.searching),this.close(e),this._change(e))}}),this._initSource(),this.menu=u("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({role:null}).hide().data("ui-menu"),this._on(this.menu.element,{mousedown:function(e){e.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur});var i=this.menu.element[0];u(e.target).closest(".ui-menu-item").length||this._delay(function(){var t=this;this.document.one("mousedown",function(e){e.target===t.element[0]||e.target===i||u.contains(i,e.target)||t.close()})})},menufocus:function(e,t){if(this.isNewMenu&&(this.isNewMenu=!1,e.originalEvent&&/^mouse/.test(e.originalEvent.type)))return this.menu.blur(),void this.document.one("mousemove",function(){u(e.target).trigger(e.originalEvent)});var i=t.item.data("ui-autocomplete-item");!1!==this._trigger("focus",e,{item:i})?e.originalEvent&&/^key/.test(e.originalEvent.type)&&this._value(i.value):this.liveRegion.text(i.value)},menuselect:function(e,t){var i=t.item.data("ui-autocomplete-item"),s=this.previous;this.element[0]!==this.document[0].activeElement&&(this.element.focus(),this.previous=s,this._delay(function(){this.previous=s,this.selectedItem=i})),!1!==this._trigger("select",e,{item:i})&&this._value(i.value),this.term=this._value(),this.close(e),this.selectedItem=i}}),this.liveRegion=u("<span>",{role:"status","aria-live":"polite"}).addClass("ui-helper-hidden-accessible").insertBefore(this.element),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(e,t){this._super(e,t),"source"===e&&this._initSource(),"appendTo"===e&&this.menu.element.appendTo(this._appendTo()),"disabled"===e&&t&&this.xhr&&this.xhr.abort()},_appendTo:function(){var e=this.options.appendTo;return e&&(e=e.jquery||e.nodeType?u(e):this.document.find(e).eq(0)),e||(e=this.element.closest(".ui-front")),e.length||(e=this.document[0].body),e},_initSource:function(){var i,s,n=this;u.isArray(this.options.source)?(i=this.options.source,this.source=function(e,t){t(u.ui.autocomplete.filter(i,e.term))}):"string"==typeof this.options.source?(s=this.options.source,this.source=function(e,t){n.xhr&&n.xhr.abort(),n.xhr=u.ajax({url:s,data:e,dataType:"json",success:function(e){t(e)},error:function(){t([])}})}):this.source=this.options.source},_searchTimeout:function(e){clearTimeout(this.searching),this.searching=this._delay(function(){this.term!==this._value()&&(this.selectedItem=null,this.search(null,e))},this.options.delay)},search:function(e,t){return e=null!=e?e:this._value(),this.term=this._value(),e.length<this.options.minLength?this.close(t):!1!==this._trigger("search",t)?this._search(e):void 0},_search:function(e){this.pending++,this.element.addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:e},this._response())},_response:function(){var t=++this.requestIndex;return u.proxy(function(e){t===this.requestIndex&&this.__response(e),this.pending--,this.pending||this.element.removeClass("ui-autocomplete-loading")},this)},__response:function(e){e&&(e=this._normalize(e)),this._trigger("response",null,{content:e}),!this.options.disabled&&e&&e.length&&!this.cancelSearch?(this._suggest(e),this._trigger("open")):this._close()},close:function(e){this.cancelSearch=!0,this._close(e)},_close:function(e){this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",e))},_change:function(e){this.previous!==this._value()&&this._trigger("change",e,{item:this.selectedItem})},_normalize:function(e){return e.length&&e[0].label&&e[0].value?e:u.map(e,function(e){return"string"==typeof e?{label:e,value:e}:u.extend({label:e.label||e.value,value:e.value||e.label},e)})},_suggest:function(e){var t=this.menu.element.empty();this._renderMenu(t,e),this.isNewMenu=!0,this.menu.refresh(),t.show(),this._resizeMenu(),t.position(u.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next()},_resizeMenu:function(){var e=this.menu.element;e.outerWidth(Math.max(e.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(i,e){var s=this;u.each(e,function(e,t){s._renderItemData(i,t)})},_renderItemData:function(e,t){return this._renderItem(e,t).data("ui-autocomplete-item",t)},_renderItem:function(e,t){return u("<li>").append(u("<a>").text(t.label)).appendTo(e)},_move:function(e,t){if(this.menu.element.is(":visible"))return this.menu.isFirstItem()&&/^previous/.test(e)||this.menu.isLastItem()&&/^next/.test(e)?(this._value(this.term),void this.menu.blur()):void this.menu[e](t);this.search(null,t)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(e,t){this.isMultiLine&&!this.menu.element.is(":visible")||(this._move(e,t),t.preventDefault())}}),u.extend(u.ui.autocomplete,{escapeRegex:function(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(e,t){var i=new RegExp(u.ui.autocomplete.escapeRegex(t),"i");return u.grep(e,function(e){return i.test(e.label||e.value||e)})}}),u.widget("ui.autocomplete",u.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(e){return e+(1<e?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(e){var t;this._superApply(arguments),this.options.disabled||this.cancelSearch||(t=e&&e.length?this.options.messages.results(e.length):this.options.messages.noResults,this.liveRegion.text(t))}})}(jQuery);