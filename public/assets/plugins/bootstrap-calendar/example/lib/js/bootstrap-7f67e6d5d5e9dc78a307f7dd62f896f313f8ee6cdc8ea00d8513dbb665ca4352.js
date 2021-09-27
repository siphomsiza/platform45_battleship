!function(i){i(function(){"use strict";var t,e;i.support.transition=((e=(document.body||document.documentElement).style).transition!==undefined||e.WebkitTransition!==undefined||e.MozTransition!==undefined||e.MsTransition!==undefined||e.OTransition!==undefined)&&{end:(t="TransitionEnd",i.browser.webkit?t="webkitTransitionEnd":i.browser.mozilla?t="transitionend":i.browser.opera&&(t="oTransitionEnd"),t)}})}(window.jQuery),function(o){"use strict";var e='[data-dismiss="alert"]',n=function(t){o(t).on("click",e,this.close)};n.prototype={constructor:n,close:function(t){function e(){i.remove(),i.trigger("closed")}var i,n=o(this),s=n.attr("data-target");s||(s=(s=n.attr("href"))&&s.replace(/.*(?=#[^\s]*$)/,"")),(i=o(s)).trigger("close"),t&&t.preventDefault(),i.length||(i=n.hasClass("alert")?n:n.parent()),i.removeClass("in"),o.support.transition&&i.hasClass("fade")?i.on(o.support.transition.end,e):e()}},o.fn.alert=function(i){return this.each(function(){var t=o(this),e=t.data("alert");e||t.data("alert",e=new n(this)),"string"==typeof i&&e[i].call(t)})},o.fn.alert.Constructor=n,o(function(){o("body").on("click.alert.data-api",e,n.prototype.close)})}(window.jQuery),function(s){"use strict";var o=function(t,e){this.$element=s(t),this.options=s.extend({},s.fn.button.defaults,e)};o.prototype={constructor:o,setState:function(t){var e="disabled",i=this.$element,n=i.data(),s=i.is("input")?"val":"html";t+="Text",n.resetText||i.data("resetText",i[s]()),i[s](n[t]||this.options[t]),setTimeout(function(){"loadingText"==t?i.addClass(e).attr(e,e):i.removeClass(e).removeAttr(e)},0)},toggle:function(){var t=this.$element.parent('[data-toggle="buttons-radio"]');t&&t.find(".active").removeClass("active"),this.$element.toggleClass("active")}},s.fn.button=function(n){return this.each(function(){var t=s(this),e=t.data("button"),i="object"==typeof n&&n;e||t.data("button",e=new o(this,i)),"toggle"==n?e.toggle():n&&e.setState(n)})},s.fn.button.defaults={loadingText:"loading..."},s.fn.button.Constructor=o,s(function(){s("body").on("click.button.data-api","[data-toggle^=button]",function(t){s(t.target).button("toggle")})})}(window.jQuery),function(l){"use strict";var s=function(t,e){this.$element=l(t),this.options=l.extend({},l.fn.carousel.defaults,e),this.options.slide&&this.slide(this.options.slide)};s.prototype={cycle:function(){return this.interval=setInterval(l.proxy(this.next,this),this.options.interval),this},to:function(t){var e=this.$element.find(".active"),i=e.parent().children(),n=i.index(e),s=this;if(!(t>i.length-1||t<0))return this.sliding?this.$element.one("slid",function(){s.to(t)}):n==t?this.pause().cycle():this.slide(n<t?"next":"prev",l(i[t]))},pause:function(){return clearInterval(this.interval),this},next:function(){if(!this.sliding)return this.slide("next")},prev:function(){if(!this.sliding)return this.slide("prev")},slide:function(t,e){var i=this.$element.find(".active"),n=e||i[t](),s=this.interval,o="next"==t?"left":"right",a="next"==t?"first":"last",r=this;return this.sliding=!0,s&&this.pause(),n=n.length?n:this.$element.find(".item")[a](),!l.support.transition&&this.$element.hasClass("slide")?(this.$element.trigger("slide"),i.removeClass("active"),n.addClass("active"),this.sliding=!1,this.$element.trigger("slid")):(n.addClass(t),n[0].offsetWidth,i.addClass(o),n.addClass(o),this.$element.trigger("slide"),this.$element.one(l.support.transition.end,function(){n.removeClass([t,o].join(" ")).addClass("active"),i.removeClass(["active",o].join(" ")),r.sliding=!1,setTimeout(function(){r.$element.trigger("slid")},0)})),s&&this.cycle(),this}},l.fn.carousel=function(n){return this.each(function(){var t=l(this),e=t.data("carousel"),i="object"==typeof n&&n;e||t.data("carousel",e=new s(this,i)),"number"==typeof n?e.to(n):"string"==typeof n||(n=i.slide)?e[n]():e.cycle()})},l.fn.carousel.defaults={interval:5e3},l.fn.carousel.Constructor=s,l(function(){l("body").on("click.carousel.data-api","[data-slide]",function(t){var e,i=l(this),n=l(i.attr("data-target")||(e=i.attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"")),s=!n.data("modal")&&l.extend({},n.data(),i.data());n.carousel(s),t.preventDefault()})})}(window.jQuery),function(o){"use strict";var s=function(t,e){this.$element=o(t),this.options=o.extend({},o.fn.collapse.defaults,e),this.options.parent&&(this.$parent=o(this.options.parent)),this.options.toggle&&this.toggle()};s.prototype={constructor:s,dimension:function(){return this.$element.hasClass("width")?"width":"height"},show:function(){var t,e=this.dimension(),i=o.camelCase(["scroll",e].join("-")),n=this.$parent&&this.$parent.find(".in");n&&n.length&&(t=n.data("collapse"),n.collapse("hide"),t||n.data("collapse",null)),this.$element[e](0),this.transition("addClass","show","shown"),this.$element[e](this.$element[0][i])},hide:function(){var t=this.dimension();this.reset(this.$element[t]()),this.transition("removeClass","hide","hidden"),this.$element[t](0)},reset:function(t){var e=this.dimension();this.$element.removeClass("collapse")[e](t||"auto")[0].offsetWidth,this.$element.addClass("collapse")},transition:function(t,e,i){var n=this,s=function(){"show"==e&&n.reset(),n.$element.trigger(i)};this.$element.trigger(e)[t]("in"),o.support.transition&&this.$element.hasClass("collapse")?this.$element.one(o.support.transition.end,s):s()},toggle:function(){this[this.$element.hasClass("in")?"hide":"show"]()}},o.fn.collapse=function(n){return this.each(function(){var t=o(this),e=t.data("collapse"),i="object"==typeof n&&n;e||t.data("collapse",e=new s(this,i)),"string"==typeof n&&e[n]()})},o.fn.collapse.defaults={toggle:!0},o.fn.collapse.Constructor=s,o(function(){o("body").on("click.collapse.data-api","[data-toggle=collapse]",function(t){var e,i=o(this),n=i.attr("data-target")||t.preventDefault()||(e=i.attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,""),s=o(n).data("collapse")?"toggle":i.data();o(n).collapse(s)})})}(window.jQuery),function(s){"use strict";function o(){s(t).parent().removeClass("open")}var t='[data-toggle="dropdown"]',n=function(t){var e=s(t).on("click.dropdown.data-api",this.toggle);s("html").on("click.dropdown.data-api",function(){e.parent().removeClass("open")})};n.prototype={constructor:n,toggle:function(){var t,e,i=s(this),n=i.attr("data-target");return n||(n=(n=i.attr("href"))&&n.replace(/.*(?=#[^\s]*$)/,"")),(t=s(n)).length||(t=i.parent()),e=t.hasClass("open"),o(),!e&&t.toggleClass("open"),!1}},s.fn.dropdown=function(i){return this.each(function(){var t=s(this),e=t.data("dropdown");e||t.data("dropdown",e=new n(this)),"string"==typeof i&&e[i].call(t)})},s.fn.dropdown.Constructor=n,s(function(){s("html").on("click.dropdown.data-api",o),s("body").on("click.dropdown.data-api",t,n.prototype.toggle)})}(window.jQuery),function(o){"use strict";function e(){var t=this,e=setTimeout(function(){t.$element.off(o.support.transition.end),i.call(t)},500);this.$element.one(o.support.transition.end,function(){clearTimeout(e),i.call(t)})}function i(){this.$element.hide().trigger("hidden"),t.call(this)}function t(t){var e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var i=o.support.transition&&e;this.$backdrop=o('<div class="modal-backdrop '+e+'" />').appendTo(document.body),"static"!=this.options.backdrop&&this.$backdrop.click(o.proxy(this.hide,this)),i&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),i?this.$backdrop.one(o.support.transition.end,t):t()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),o.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(o.support.transition.end,o.proxy(n,this)):n.call(this)):t&&t()}function n(){this.$backdrop.remove(),this.$backdrop=null}function s(){var e=this;this.isShown&&this.options.keyboard?o(document).on("keyup.dismiss.modal",function(t){27==t.which&&e.hide()}):this.isShown||o(document).off("keyup.dismiss.modal")}var a=function(t,e){this.options=o.extend({},o.fn.modal.defaults,e),this.$element=o(t).delegate('[data-dismiss="modal"]',"click.dismiss.modal",o.proxy(this.hide,this))};a.prototype={constructor:a,toggle:function(){return this[this.isShown?"hide":"show"]()},show:function(){var e=this;this.isShown||(o("body").addClass("modal-open"),this.isShown=!0,this.$element.trigger("show"),s.call(this),t.call(this,function(){var t=o.support.transition&&e.$element.hasClass("fade");!e.$element.parent().length&&e.$element.appendTo(document.body),e.$element.show(),t&&e.$element[0].offsetWidth,e.$element.addClass("in"),t?e.$element.one(o.support.transition.end,function(){e.$element.trigger("shown")}):e.$element.trigger("shown")}))},hide:function(t){if(t&&t.preventDefault(),this.isShown){this.isShown=!1,o("body").removeClass("modal-open"),s.call(this),this.$element.trigger("hide").removeClass("in"),o.support.transition&&this.$element.hasClass("fade")?e.call(this):i.call(this)}}},o.fn.modal=function(n){return this.each(function(){var t=o(this),e=t.data("modal"),i="object"==typeof n&&n;e||t.data("modal",e=new a(this,i)),"string"==typeof n?e[n]():e.show()})},o.fn.modal.defaults={backdrop:!0,keyboard:!0},o.fn.modal.Constructor=a,o(function(){o("body").on("click.modal.data-api",'[data-toggle="modal"]',function(t){var e,i=o(this),n=o(i.attr("data-target")||(e=i.attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"")),s=n.data("modal")?"toggle":o.extend({},n.data(),i.data());t.preventDefault(),n.modal(s)})})}(window.jQuery),function(o){"use strict";var s=function(t,e){this.init("tooltip",t,e)};s.prototype={constructor:s,init:function(t,e,i){var n,s;this.type=t,this.$element=o(e),this.options=this.getOptions(i),this.enabled=!0,"manual"!=this.options.trigger&&(n="hover"==this.options.trigger?"mouseenter":"focus",s="hover"==this.options.trigger?"mouseleave":"blur",this.$element.on(n,this.options.selector,o.proxy(this.enter,this)),this.$element.on(s,this.options.selector,o.proxy(this.leave,this))),this.options.selector?this._options=o.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},getOptions:function(t){return(t=o.extend({},o.fn[this.type].defaults,t,this.$element.data())).delay&&"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),t},enter:function(t){var e=o(t.currentTarget)[this.type](this._options).data(this.type);e.options.delay&&e.options.delay.show?(e.hoverState="in",setTimeout(function(){"in"==e.hoverState&&e.show()},e.options.delay.show)):e.show()},leave:function(t){var e=o(t.currentTarget)[this.type](this._options).data(this.type);e.options.delay&&e.options.delay.hide?(e.hoverState="out",setTimeout(function(){"out"==e.hoverState&&e.hide()},e.options.delay.hide)):e.hide()},show:function(){var t,e,i,n,s,o,a;if(this.hasContent()&&this.enabled){switch(t=this.tip(),this.setContent(),this.options.animation&&t.addClass("fade"),o="function"==typeof this.options.placement?this.options.placement.call(this,t[0],this.$element[0]):this.options.placement,e=/in/.test(o),t.remove().css({top:0,left:0,display:"block"}).appendTo(e?this.$element:document.body),i=this.getPosition(e),n=t[0].offsetWidth,s=t[0].offsetHeight,e?o.split(" ")[1]:o){case"bottom":a={top:i.top+i.height,left:i.left+i.width/2-n/2};break;case"top":a={top:i.top-s,left:i.left+i.width/2-n/2};break;case"left":a={top:i.top+i.height/2-s/2,left:i.left-n};break;case"right":a={top:i.top+i.height/2-s/2,left:i.left+i.width}}t.css(a).addClass(o).addClass("in")}},setContent:function(){var t=this.tip();t.find(".tooltip-inner").html(this.getTitle()),t.removeClass("fade in top bottom left right")},hide:function(){function t(){var t=setTimeout(function(){e.off(o.support.transition.end).remove()},500);e.one(o.support.transition.end,function(){clearTimeout(t),e.remove()})}var e=this.tip();e.removeClass("in"),o.support.transition&&this.$tip.hasClass("fade")?t():e.remove()},fixTitle:function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").removeAttr("title")},hasContent:function(){return this.getTitle()},getPosition:function(t){return o.extend({},t?{top:0,left:0}:this.$element.offset(),{width:this.$element[0].offsetWidth,height:this.$element[0].offsetHeight})},getTitle:function(){var t=this.$element,e=this.options;return(t.attr("data-original-title")||("function"==typeof e.title?e.title.call(t[0]):e.title)).toString().replace(/(^\s*|\s*$)/,"")},tip:function(){return this.$tip=this.$tip||o(this.options.template)},validate:function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(){this[this.tip().hasClass("in")?"hide":"show"]()}},o.fn.tooltip=function(n){return this.each(function(){var t=o(this),e=t.data("tooltip"),i="object"==typeof n&&n;e||t.data("tooltip",e=new s(this,i)),"string"==typeof n&&e[n]()})},o.fn.tooltip.Constructor=s,o.fn.tooltip.defaults={animation:!0,delay:0,selector:!1,placement:"top",trigger:"hover",title:"",template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'}}(window.jQuery),function(s){"use strict";var o=function(t,e){this.init("popover",t,e)};o.prototype=s.extend({},s.fn.tooltip.Constructor.prototype,{constructor:o,setContent:function(){var t=this.tip(),e=this.getTitle(),i=this.getContent();t.find(".popover-title")["object"==s.type(e)?"append":"html"](e),t.find(".popover-content > *")["object"==s.type(i)?"append":"html"](i),t.removeClass("fade top bottom left right in")},hasContent:function(){return this.getTitle()||this.getContent()},getContent:function(){var t=this.$element,e=this.options;return(t.attr("data-content")||("function"==typeof e.content?e.content.call(t[0]):e.content)).toString().replace(/(^\s*|\s*$)/,"")},tip:function(){return this.$tip||(this.$tip=s(this.options.template)),this.$tip}}),s.fn.popover=function(n){return this.each(function(){var t=s(this),e=t.data("popover"),i="object"==typeof n&&n;e||t.data("popover",e=new o(this,i)),"string"==typeof n&&e[n]()})},s.fn.popover.Constructor=o,s.fn.popover.defaults=s.extend({},s.fn.tooltip.defaults,{placement:"right",content:"",template:'<div class="popover"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"><p></p></div></div></div>'})}(window.jQuery),function(o){"use strict";function s(t,e){var i,n=o.proxy(this.process,this),s=o(t).is("body")?o(window):o(t);this.options=o.extend({},o.fn.scrollspy.defaults,e),this.$scrollElement=s.on("scroll.scroll.data-api",n),this.selector=(this.options.target||(i=o(t).attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.$body=o("body").on("click.scroll.data-api",this.selector,n),this.refresh(),this.process()}s.prototype={constructor:s,refresh:function(){this.targets=this.$body.find(this.selector).map(function(){var t=o(this).attr("href");return/^#\w/.test(t)&&o(t).length?t:null}),this.offsets=o.map(this.targets,function(t){return o(t).position().top})},process:function(){var t,e=this.$scrollElement.scrollTop()+this.options.offset,i=this.offsets,n=this.targets,s=this.activeTarget;for(t=i.length;t--;)s!=n[t]&&e>=i[t]&&(!i[t+1]||e<=i[t+1])&&this.activate(n[t])},activate:function(t){var e;this.activeTarget=t,this.$body.find(this.selector).parent(".active").removeClass("active"),(e=this.$body.find(this.selector+'[href="'+t+'"]').parent("li").addClass("active")).parent(".dropdown-menu")&&e.closest("li.dropdown").addClass("active")}},o.fn.scrollspy=function(n){return this.each(function(){var t=o(this),e=t.data("scrollspy"),i="object"==typeof n&&n;e||t.data("scrollspy",e=new s(this,i)),"string"==typeof n&&e[n]()})},o.fn.scrollspy.Constructor=s,o.fn.scrollspy.defaults={offset:10},o(function(){o('[data-spy="scroll"]').each(function(){var t=o(this);t.scrollspy(t.data())})})}(window.jQuery),function(a){"use strict";var n=function(t){this.element=a(t)};n.prototype={constructor:n,show:function(){var t,e,i=this.element,n=i.closest("ul:not(.dropdown-menu)"),s=i.attr("data-target");s||(s=(s=i.attr("href"))&&s.replace(/.*(?=#[^\s]*$)/,"")),i.parent("li").hasClass("active")||(t=n.find(".active a").last()[0],i.trigger({type:"show",relatedTarget:t}),e=a(s),this.activate(i.parent("li"),n),this.activate(e,e.parent(),function(){i.trigger({type:"shown",relatedTarget:t})}))},activate:function(t,e,i){function n(){s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),t.addClass("active"),o?(t[0].offsetWidth,t.addClass("in")):t.removeClass("fade"),t.parent(".dropdown-menu")&&t.closest("li.dropdown").addClass("active"),i&&i()}var s=e.find("> .active"),o=i&&a.support.transition&&s.hasClass("fade");o?s.one(a.support.transition.end,n):n(),s.removeClass("in")}},a.fn.tab=function(i){return this.each(function(){var t=a(this),e=t.data("tab");e||t.data("tab",e=new n(this)),"string"==typeof i&&e[i]()})},a.fn.tab.Constructor=n,a(function(){a("body").on("click.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(t){t.preventDefault(),a(this).tab("show")})})}(window.jQuery),function(s){"use strict";var o=function(t,e){this.$element=s(t),this.options=s.extend({},s.fn.typeahead.defaults,e),this.matcher=this.options.matcher||this.matcher,this.sorter=this.options.sorter||this.sorter,this.highlighter=this.options.highlighter||this.highlighter,this.$menu=s(this.options.menu).appendTo("body"),this.source=this.options.source,this.shown=!1,this.listen()};o.prototype={constructor:o,select:function(){var t=this.$menu.find(".active").attr("data-value");return this.$element.val(t),this.hide()},show:function(){var t=s.extend({},this.$element.offset(),{height:this.$element[0].offsetHeight});return this.$menu.css({top:t.top+t.height,left:t.left}),this.$menu.show(),this.shown=!0,this},hide:function(){return this.$menu.hide(),this.shown=!1,this},lookup:function(){var t,e=this;return this.query=this.$element.val(),this.query?(t=s.grep(this.source,function(t){if(e.matcher(t))return t}),(t=this.sorter(t)).length?this.render(t.slice(0,this.options.items)).show():this.shown?this.hide():this):this.shown?this.hide():this},matcher:function(t){return~t.toLowerCase().indexOf(this.query.toLowerCase())},sorter:function(t){for(var e,i=[],n=[],s=[];e=t.shift();)e.toLowerCase().indexOf(this.query.toLowerCase())?~e.indexOf(this.query)?n.push(e):s.push(e):i.push(e);return i.concat(n,s)},highlighter:function(t){return t.replace(new RegExp("("+this.query+")","ig"),function(t,e){return"<strong>"+e+"</strong>"})},render:function(t){var i=this;return(t=s(t).map(function(t,e){return(t=s(i.options.item).attr("data-value",e)).find("a").html(i.highlighter(e)),t[0]})).first().addClass("active"),this.$menu.html(t),this},next:function(){var t=this.$menu.find(".active").removeClass("active").next();t.length||(t=s(this.$menu.find("li")[0])),t.addClass("active")},prev:function(){var t=this.$menu.find(".active").removeClass("active").prev();t.length||(t=this.$menu.find("li").last()),t.addClass("active")},listen:function(){this.$element.on("blur",s.proxy(this.blur,this)).on("keypress",s.proxy(this.keypress,this)).on("keyup",s.proxy(this.keyup,this)),(s.browser.webkit||s.browser.msie)&&this.$element.on("keydown",s.proxy(this.keypress,this)),this.$menu.on("click",s.proxy(this.click,this)).on("mouseenter","li",s.proxy(this.mouseenter,this))},keyup:function(t){switch(t.stopPropagation(),t.preventDefault(),t.keyCode){case 40:case 38:break;case 9:case 13:if(!this.shown)return;this.select();break;case 27:this.hide();break;default:this.lookup()}},keypress:function(t){if(t.stopPropagation(),this.shown)switch(t.keyCode){case 9:case 13:case 27:t.preventDefault();break;case 38:t.preventDefault(),this.prev();break;case 40:t.preventDefault(),this.next()}},blur:function(t){var e=this;t.stopPropagation(),t.preventDefault(),setTimeout(function(){e.hide()},150)},click:function(t){t.stopPropagation(),t.preventDefault(),this.select()},mouseenter:function(t){this.$menu.find(".active").removeClass("active"),s(t.currentTarget).addClass("active")}},s.fn.typeahead=function(n){return this.each(function(){var t=s(this),e=t.data("typeahead"),i="object"==typeof n&&n;e||t.data("typeahead",e=new o(this,i)),"string"==typeof n&&e[n]()})},s.fn.typeahead.defaults={source:[],items:8,menu:'<ul class="typeahead dropdown-menu"></ul>',item:'<li><a href="#"></a></li>'},s.fn.typeahead.Constructor=o,s(function(){s("body").on("focus.typeahead.data-api",'[data-provide="typeahead"]',function(t){var e=s(this);e.data("typeahead")||(t.preventDefault(),e.typeahead(e.data()))})})}(window.jQuery);