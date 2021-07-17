!function(c){var s=0,u={},v={};u.height=u.paddingTop=u.paddingBottom=u.borderTopWidth=u.borderBottomWidth="hide",v.height=v.paddingTop=v.paddingBottom=v.borderTopWidth=v.borderBottomWidth="show",c.widget("ui.accordion",{version:"1.10.4",options:{active:0,animate:{},collapsible:!1,event:"click",header:"> li > :first-child,> :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},_create:function(){var e=this.options;this.prevShow=this.prevHide=c(),this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role","tablist"),e.collapsible||!1!==e.active&&null!=e.active||(e.active=0),this._processPanels(),e.active<0&&(e.active+=this.headers.length),this._refresh()},_getCreateEventData:function(){return{header:this.active,panel:this.active.length?this.active.next():c(),content:this.active.length?this.active.next():c()}},_createIcons:function(){var e=this.options.icons;e&&(c("<span>").addClass("ui-accordion-header-icon ui-icon "+e.header).prependTo(this.headers),this.active.children(".ui-accordion-header-icon").removeClass(e.header).addClass(e.activeHeader),this.headers.addClass("ui-accordion-icons"))},_destroyIcons:function(){this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()},_destroy:function(){var e;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"),this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function(){/^ui-accordion/.test(this.id)&&this.removeAttribute("id")}),this._destroyIcons(),e=this.headers.next().css("display","").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function(){/^ui-accordion/.test(this.id)&&this.removeAttribute("id")}),"content"!==this.options.heightStyle&&e.css("height","")},_setOption:function(e,t){return"active"===e?this._activate(t):("event"===e&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(t)),this._super(e,t),"collapsible"!==e||t||!1!==this.options.active||this._activate(0),"icons"===e&&(this._destroyIcons(),t&&this._createIcons()),"disabled"===e&&this.headers.add(this.headers.next()).toggleClass("ui-state-disabled",!!t)),undefined},_keydown:function(e){if(!e.altKey&&!e.ctrlKey){var t=c.ui.keyCode,i=this.headers.length,a=this.headers.index(e.target),s=!1;switch(e.keyCode){case t.RIGHT:case t.DOWN:s=this.headers[(a+1)%i];break;case t.LEFT:case t.UP:s=this.headers[(a-1+i)%i];break;case t.SPACE:case t.ENTER:this._eventHandler(e);break;case t.HOME:s=this.headers[0];break;case t.END:s=this.headers[i-1]}s&&(c(e.target).attr("tabIndex",-1),c(s).attr("tabIndex",0),s.focus(),e.preventDefault())}},_panelKeyDown:function(e){e.keyCode===c.ui.keyCode.UP&&e.ctrlKey&&c(e.currentTarget).prev().focus()},refresh:function(){var e=this.options;this._processPanels(),!1===e.active&&!0===e.collapsible||!this.headers.length?(e.active=!1,this.active=c()):!1===e.active?this._activate(0):this.active.length&&!c.contains(this.element[0],this.active[0])?this.headers.length===this.headers.find(".ui-state-disabled").length?(e.active=!1,this.active=c()):this._activate(Math.max(0,e.active-1)):e.active=this.headers.index(this.active),this._destroyIcons(),this._refresh()},_processPanels:function(){this.headers=this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"),this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()},_refresh:function(){var i,e=this.options,t=e.heightStyle,a=this.element.parent(),n=this.accordionId="ui-accordion-"+(this.element.attr("id")||++s);this.active=this._findActive(e.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"),this.active.next().addClass("ui-accordion-content-active").show(),this.headers.attr("role","tab").each(function(e){var t=c(this),i=t.attr("id"),a=t.next(),s=a.attr("id");i||(i=n+"-header-"+e,t.attr("id",i)),s||(s=n+"-panel-"+e,a.attr("id",s)),t.attr("aria-controls",s),a.attr("aria-labelledby",i)}).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}).next().attr({"aria-hidden":"true"}).hide(),this.active.length?this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}).next().attr({"aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._createIcons(),this._setupEvents(e.event),"fill"===t?(i=a.height(),this.element.siblings(":visible").each(function(){var e=c(this),t=e.css("position");"absolute"!==t&&"fixed"!==t&&(i-=e.outerHeight(!0))}),this.headers.each(function(){i-=c(this).outerHeight(!0)}),this.headers.next().each(function(){c(this).height(Math.max(0,i-c(this).innerHeight()+c(this).height()))}).css("overflow","auto")):"auto"===t&&(i=0,this.headers.next().each(function(){i=Math.max(i,c(this).css("height","").height())}).height(i))},_activate:function(e){var t=this._findActive(e)[0];t!==this.active[0]&&(t=t||this.active[0],this._eventHandler({target:t,currentTarget:t,preventDefault:c.noop}))},_findActive:function(e){return"number"==typeof e?this.headers.eq(e):c()},_setupEvents:function(e){var i={keydown:"_keydown"};e&&c.each(e.split(" "),function(e,t){i[t]="_eventHandler"}),this._off(this.headers.add(this.headers.next())),this._on(this.headers,i),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._hoverable(this.headers),this._focusable(this.headers)},_eventHandler:function(e){var t=this.options,i=this.active,a=c(e.currentTarget),s=a[0]===i[0],n=s&&t.collapsible,r=n?c():a.next(),o=i.next(),h={oldHeader:i,oldPanel:o,newHeader:n?c():a,newPanel:r};e.preventDefault(),s&&!t.collapsible||!1===this._trigger("beforeActivate",e,h)||(t.active=!n&&this.headers.index(a),this.active=s?c():a,this._toggle(h),i.removeClass("ui-accordion-header-active ui-state-active"),t.icons&&i.children(".ui-accordion-header-icon").removeClass(t.icons.activeHeader).addClass(t.icons.header),s||(a.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"),t.icons&&a.children(".ui-accordion-header-icon").removeClass(t.icons.header).addClass(t.icons.activeHeader),a.next().addClass("ui-accordion-content-active")))},_toggle:function(e){var t=e.newPanel,i=this.prevShow.length?this.prevShow:e.oldPanel;this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=t,this.prevHide=i,this.options.animate?this._animate(t,i,e):(i.hide(),t.show(),this._toggleComplete(e)),i.attr({"aria-hidden":"true"}),i.prev().attr("aria-selected","false"),t.length&&i.length?i.prev().attr({tabIndex:-1,"aria-expanded":"false"}):t.length&&this.headers.filter(function(){return 0===c(this).attr("tabIndex")}).attr("tabIndex",-1),t.attr("aria-hidden","false").prev().attr({"aria-selected":"true",tabIndex:0,"aria-expanded":"true"})},_animate:function(e,i,t){var a,s,n,r=this,o=0,h=e.length&&(!i.length||e.index()<i.index()),c=this.options.animate||{},d=h&&c.down||c,l=function(){r._toggleComplete(t)};return"number"==typeof d&&(n=d),"string"==typeof d&&(s=d),s=s||d.easing||c.easing,n=n||d.duration||c.duration,i.length?e.length?(a=e.show().outerHeight(),i.animate(u,{duration:n,easing:s,step:function(e,t){t.now=Math.round(e)}}),e.hide().animate(v,{duration:n,easing:s,complete:l,step:function(e,t){t.now=Math.round(e),"height"!==t.prop?o+=t.now:"content"!==r.options.heightStyle&&(t.now=Math.round(a-i.outerHeight()-o),o=0)}}),undefined):i.animate(u,n,s,l):e.animate(v,n,s,l)},_toggleComplete:function(e){var t=e.oldPanel;t.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"),t.length&&(t.parent()[0].className=t.parent()[0].className),this._trigger("activate",null,e)}})}(jQuery);