!function(l,c,d){c.infinitescroll=function n(e,t,i){this.element=c(i),this._create(e,t)},c.infinitescroll.defaults={loading:{finished:d,finishedMsg:"<em>Congratulations, you've reached the end of the internet.</em>",img:"http://www.infinite-scroll.com/loading.gif",msg:null,msgText:"<em>Loading the next set of posts...</em>",selector:null,speed:"fast",start:d},state:{isDuringAjax:!1,isInvalidPage:!1,isDestroyed:!1,isDone:!1,isPaused:!1,currPage:1},callback:d,debug:!1,behavior:d,binder:c(l),nextSelector:"div.navigation a:first",navSelector:"div.navigation",contentSelector:null,extraScrollPx:150,itemSelector:"div.post",animate:!1,pathParse:d,dataType:"html",appendCallback:!0,bufferPx:40,errorCallback:function(){},infid:0,pixelsFromNavToBottom:d,path:d},c.infinitescroll.prototype={_binding:function s(e){var t=this,i=t.options;if(i.behavior&&this["_binding_"+i.behavior]!==d)this["_binding_"+i.behavior].call(this);else{if("bind"!==e&&"unbind"!==e)return this._debug("Binding value  "+e+" not valid"),!1;"unbind"==e?this.options.binder.unbind("smartscroll.infscr."+t.options.infid):this.options.binder[e]("smartscroll.infscr."+t.options.infid,function(){t.scroll()}),this._debug("Binding",e)}},_create:function o(e,i){if(!this._validate(e))return!1;var n=this.options=c.extend(!0,{},c.infinitescroll.defaults,e),t=c(n.nextSelector).attr("href");n.contentSelector=n.contentSelector||this.element,n.loading.selector=n.loading.selector||n.contentSelector,t?(n.path=this._determinepath(t),n.loading.msg=c('<div id="infscr-loading"><img alt="Loading..." src="'+n.loading.img+'" /><div>'+n.loading.msgText+"</div></div>"),(new Image).src=n.loading.img,n.pixelsFromNavToBottom=c(document).height()-c(n.navSelector).offset().top,n.loading.start=n.loading.start||function(){c(n.navSelector).hide(),n.loading.msg.appendTo(n.loading.selector).show(n.loading.speed,function(){beginAjax(n)})},n.loading.finished=n.loading.finished||function(){n.loading.msg.fadeOut("normal")},n.callback=function(e,t){n.behavior&&e["_callback_"+n.behavior]!==d&&e["_callback_"+n.behavior].call(c(n.contentSelector)[0],t),i&&i.call(c(n.contentSelector)[0],t)},this._setup()):this._debug("Navigation selector not found")},_debug:function t(){if(this.options.debug)return l.console&&console.log.call(console,arguments)},_determinepath:function i(e){var t=this.options;if(!t.behavior||this["_determinepath_"+t.behavior]===d){if(t.pathParse)return this._debug("pathParse manual"),t.pathParse;if(e.match(/^(.*?)\b2\b(.*?$)/))e=e.match(/^(.*?)\b2\b(.*?$)/).slice(1);else if(e.match(/^(.*?)2(.*?$)/)){if(e.match(/^(.*?page=)2(\/.*|$)/))return e=e.match(/^(.*?page=)2(\/.*|$)/).slice(1);e=e.match(/^(.*?)2(.*?$)/).slice(1)}else{if(e.match(/^(.*?page=)1(\/.*|$)/))return e=e.match(/^(.*?page=)1(\/.*|$)/).slice(1);this._debug("Sorry, we couldn't parse your Next (Previous Posts) URL. Verify your the css selector points to the correct A tag. If you still get this error: yell, scream, and kindly ask for help at infinite-scroll.com."),t.state.isInvalidPage=!0}return this._debug("determinePath",e),e}this["_determinepath_"+t.behavior].call(this,e)},_error:function r(e){var t=this.options;t.behavior&&this["_error_"+t.behavior]!==d?this["_error_"+t.behavior].call(this,e):("destroy"!==e&&"end"!==e&&(e="unknown"),this._debug("Error",e),"end"==e&&this._showdonemsg(),t.state.isDone=!0,t.state.currPage=1,t.state.isPaused=!1,this._binding("unbind"))},_loadcallback:function h(e,t){var i,n=this.options,a=this.options.callback,s=n.state.isDone?"done":n.appendCallback?"append":"no-append";if(n.behavior&&this["_loadcallback_"+n.behavior]!==d)this["_loadcallback_"+n.behavior].call(this,e,t);else{switch(s){case"done":return this._showdonemsg(),!1;case"no-append":"html"==n.dataType&&(t=c(t="<div>"+t+"</div>").find(n.itemSelector));break;case"append":var o=e.children();if(0==o.length)return this._error("end");for(i=document.createDocumentFragment();e[0].firstChild;)i.appendChild(e[0].firstChild);this._debug("contentSelector",c(n.contentSelector)[0]),c(n.contentSelector)[0].appendChild(i),t=o.get()}if(n.loading.finished.call(c(n.contentSelector)[0],n),n.animate){var r=c(l).scrollTop()+c("#infscr-loading").height()+n.extraScrollPx+"px";c("html,body").animate({scrollTop:r},800,function(){n.state.isDuringAjax=!1})}n.animate||(n.state.isDuringAjax=!1),a(this,t)}},_nearbottom:function u(){var e=this.options,t=0+c(document).height()-e.binder.scrollTop()-c(l).height();if(!e.behavior||this["_nearbottom_"+e.behavior]===d)return this._debug("math:",t,e.pixelsFromNavToBottom),t-e.bufferPx<e.pixelsFromNavToBottom;this["_nearbottom_"+e.behavior].call(this)},_pausing:function g(e){var t=this.options;if(!t.behavior||this["_pausing_"+t.behavior]===d){switch("pause"!==e&&"resume"!==e&&null!==e&&this._debug("Invalid argument. Toggling pause value instead"),e=!e||"pause"!=e&&"resume"!=e?"toggle":e){case"pause":t.state.isPaused=!0;break;case"resume":t.state.isPaused=!1;break;case"toggle":t.state.isPaused=!t.state.isPaused}return this._debug("Paused",t.state.isPaused),!1}this["_pausing_"+t.behavior].call(this,e)},_setup:function p(){var e=this.options;if(!e.behavior||this["_setup_"+e.behavior]===d)return this._binding("bind"),!1;this["_setup_"+e.behavior].call(this)},_showdonemsg:function f(){var e=this.options;e.behavior&&this["_showdonemsg_"+e.behavior]!==d?this["_showdonemsg_"+e.behavior].call(this):(e.loading.msg.find("img").hide().parent().find("div").html(e.loading.finishedMsg).animate({opacity:1},2e3,function(){c(this).parent().fadeOut("normal")}),e.errorCallback.call(c(e.contentSelector)[0],"done"))},_validate:function b(e){for(var t in e)return!(t.indexOf&&-1<t.indexOf("Selector")&&0===c(e[t]).length)||(this._debug("Your "+t+" found no elements."),!1)},bind:function m(){this._binding("bind")},destroy:function v(){return this.options.state.isDestroyed=!0,this._error("destroy")},pause:function _(){this._pausing("pause")},resume:function y(){this._pausing("resume")},retrieve:function x(e){var n,t,a,s=this,i=s.options,o=i.path;(e=e||null)||i.state.currPage;if(beginAjax=function r(e){switch(e.state.currPage++,s._debug("heading into ajax",o),n=c(e.contentSelector).is("table")?c("<tbody/>"):c("<div/>"),t=o.join(e.state.currPage),a="html"==e.dataType||"json"==e.dataType?e.dataType:"html+callback",e.appendCallback&&"html"==e.dataType&&(a+="+callback"),a){case"html+callback":s._debug("Using HTML via .load() method"),n.load(t+" "+e.itemSelector,null,function i(e){s._loadcallback(n,e)});break;case"html":case"json":s._debug("Using "+a.toUpperCase()+" via $.ajax() method"),c.ajax({url:t,dataType:e.dataType,complete:function i(e,t){("undefined"!=typeof e.isResolved?e.isResolved():"success"===t||"notmodified"===t)?s._loadcallback(n,e.responseText):s._error("end")}})}},i.behavior&&this["retrieve_"+i.behavior]!==d)this["retrieve_"+i.behavior].call(this,e);else{if(i.state.isDestroyed)return this._debug("Instance is destroyed"),!1;i.state.isDuringAjax=!0,i.loading.start.call(c(i.contentSelector)[0],i)}},scroll:function P(){var e=this.options,t=e.state;e.behavior&&this["scroll_"+e.behavior]!==d?this["scroll_"+e.behavior].call(this):t.isDuringAjax||t.isInvalidPage||t.isDone||t.isDestroyed||t.isPaused||this._nearbottom()&&this.retrieve()},toggle:function k(){this._pausing()},unbind:function S(){this._binding("unbind")},update:function T(e){c.isPlainObject(e)&&(this.options=c.extend(!0,this.options,e))}},c.fn.infinitescroll=function w(t,i){switch(typeof t){case"string":var n=Array.prototype.slice.call(arguments,1);this.each(function(){var e=c.data(this,"infinitescroll");return!!e&&(!(!c.isFunction(e[t])||"_"===t.charAt(0))&&void e[t].apply(e,n))});break;case"object":this.each(function(){var e=c.data(this,"infinitescroll");e?e.update(t):c.data(this,"infinitescroll",new c.infinitescroll(t,i,this))})}return this};var a,e=c.event;e.special.smartscroll={setup:function(){c(this).bind("scroll",e.special.smartscroll.handler)},teardown:function(){c(this).unbind("scroll",e.special.smartscroll.handler)},handler:function(e,t){var i=this,n=arguments;e.type="smartscroll",a&&clearTimeout(a),a=setTimeout(function(){c.event.handle.apply(i,n)},"execAsap"===t?0:100)}},c.fn.smartscroll=function(e){return e?this.bind("smartscroll",e):this.trigger("smartscroll",["execAsap"])}}(window,jQuery);