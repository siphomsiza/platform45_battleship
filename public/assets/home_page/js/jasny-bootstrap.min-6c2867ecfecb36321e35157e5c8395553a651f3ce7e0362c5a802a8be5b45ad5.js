if("undefined"==typeof jQuery)throw new Error("Jasny Bootstrap's JavaScript requires jQuery");!function(s){"use strict";function t(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in e)if(void 0!==t.style[i])return{end:e[i]};return!1}void 0===s.support.transition&&(s.fn.emulateTransitionEnd=function(t){var e=!1,i=this;return s(this).one(s.support.transition.end,function(){e=!0}),setTimeout(function(){e||s(i).trigger(s.support.transition.end)},t),this},s(function(){s.support.transition=t()}))}(window.jQuery),function(r){"use strict";var n=function(t,e){this.$element=r(t),this.options=r.extend({},n.DEFAULTS,e),this.state=null,this.placement=null,this.options.recalc&&(this.calcClone(),r(window).on("resize",r.proxy(this.recalc,this))),this.options.autohide&&r(document).on("click",r.proxy(this.autohide,this)),this.options.toggle&&this.toggle(),this.options.disablescrolling&&(this.options.disableScrolling=this.options.disablescrolling,delete this.options.disablescrolling)};n.DEFAULTS={toggle:!0,placement:"auto",autohide:!0,recalc:!0,disableScrolling:!0},n.prototype.offset=function(){switch(this.placement){case"left":case"right":return this.$element.outerWidth();case"top":case"bottom":return this.$element.outerHeight()}},n.prototype.calcPlacement=function(){function t(t,e){if("auto"===s.css(e))return t;if("auto"===s.css(t))return e;var i=parseInt(s.css(t),10);return parseInt(s.css(e),10)<i?e:t}if("auto"===this.options.placement){this.$element.hasClass("in")||this.$element.css("visiblity","hidden !important").addClass("in");var e=r(window).width()/this.$element.width(),i=r(window).height()/this.$element.height(),s=this.$element;this.placement=i<=e?t("left","right"):t("top","bottom"),"hidden !important"===this.$element.css("visibility")&&this.$element.removeClass("in").css("visiblity","")}else this.placement=this.options.placement},n.prototype.opposite=function(t){switch(t){case"top":return"bottom";case"left":return"right";case"bottom":return"top";case"right":return"left"}},n.prototype.getCanvasElements=function(){var t=this.options.canvas?r(this.options.canvas):this.$element,e=t.find("*").filter(function(){return"fixed"===r(this).css("position")}).not(this.options.exclude);return t.add(e)},n.prototype.slide=function(t,e,i){if(!r.support.transition){var s={};return s[this.placement]="+="+e,t.animate(s,350,i)}var n=this.placement,a=this.opposite(n);t.each(function(){"auto"!==r(this).css(n)&&r(this).css(n,(parseInt(r(this).css(n),10)||0)+e),"auto"!==r(this).css(a)&&r(this).css(a,(parseInt(r(this).css(a),10)||0)-e)}),this.$element.one(r.support.transition.end,i).emulateTransitionEnd(350)},n.prototype.disableScrolling=function(){var t=r("body").width(),e="padding-"+this.opposite(this.placement);if(void 0===r("body").data("offcanvas-style")&&r("body").data("offcanvas-style",r("body").attr("style")||""),r("body").css("overflow","hidden"),r("body").width()>t){var i=parseInt(r("body").css(e),10)+r("body").width()-t;setTimeout(function(){r("body").css(e,i)},1)}},n.prototype.show=function(){if(!this.state){var t=r.Event("show.bs.offcanvas");if(this.$element.trigger(t),!t.isDefaultPrevented()){this.state="slide-in",this.calcPlacement();var e=this.getCanvasElements(),i=this.placement,s=this.opposite(i),n=this.offset();-1!==e.index(this.$element)&&(r(this.$element).data("offcanvas-style",r(this.$element).attr("style")||""),this.$element.css(i,-1*n),this.$element.css(i)),e.addClass("canvas-sliding").each(function(){void 0===r(this).data("offcanvas-style")&&r(this).data("offcanvas-style",r(this).attr("style")||""),"static"===r(this).css("position")&&r(this).css("position","relative"),"auto"!==r(this).css(i)&&"0px"!==r(this).css(i)||"auto"!==r(this).css(s)&&"0px"!==r(this).css(s)||r(this).css(i,0)}),this.options.disableScrolling&&this.disableScrolling();var a=function(){"slide-in"==this.state&&(this.state="slid",e.removeClass("canvas-sliding").addClass("canvas-slid"),this.$element.trigger("shown.bs.offcanvas"))};setTimeout(r.proxy(function(){this.$element.addClass("in"),this.slide(e,n,r.proxy(a,this))},this),1)}}},n.prototype.hide=function(){if("slid"===this.state){var t=r.Event("hide.bs.offcanvas");if(this.$element.trigger(t),!t.isDefaultPrevented()){this.state="slide-out";var e=r(".canvas-slid"),i=(this.placement,-1*this.offset()),s=function(){"slide-out"==this.state&&(this.state=null,this.placement=null,this.$element.removeClass("in"),e.removeClass("canvas-sliding"),e.add(this.$element).add("body").each(function(){r(this).attr("style",r(this).data("offcanvas-style")).removeData("offcanvas-style")}),this.$element.trigger("hidden.bs.offcanvas"))};e.removeClass("canvas-slid").addClass("canvas-sliding"),setTimeout(r.proxy(function(){this.slide(e,i,r.proxy(s,this))},this),1)}}},n.prototype.toggle=function(){"slide-in"!==this.state&&"slide-out"!==this.state&&this["slid"===this.state?"hide":"show"]()},n.prototype.calcClone=function(){this.$calcClone=this.$element.clone().html("").addClass("offcanvas-clone").removeClass("in").appendTo(r("body"))},n.prototype.recalc=function(){if("none"!==this.$calcClone.css("display")&&("slid"===this.state||"slide-in"===this.state)){this.state=null,this.placement=null;var t=this.getCanvasElements();this.$element.removeClass("in"),t.removeClass("canvas-slid"),t.add(this.$element).add("body").each(function(){r(this).attr("style",r(this).data("offcanvas-style")).removeData("offcanvas-style")})}},n.prototype.autohide=function(t){0===r(t.target).closest(this.$element).length&&this.hide()};var t=r.fn.offcanvas;r.fn.offcanvas=function(s){return this.each(function(){var t=r(this),e=t.data("bs.offcanvas"),i=r.extend({},n.DEFAULTS,t.data(),"object"==typeof s&&s);e||t.data("bs.offcanvas",e=new n(this,i)),"string"==typeof s&&e[s]()})},r.fn.offcanvas.Constructor=n,r.fn.offcanvas.noConflict=function(){return r.fn.offcanvas=t,this},r(document).on("click.bs.offcanvas.data-api","[data-toggle=offcanvas]",function(t){var e,i=r(this),s=i.attr("data-target")||t.preventDefault()||(e=i.attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,""),n=r(s),a=n.data("bs.offcanvas"),o=a?"toggle":i.data();t.stopPropagation(),a?a.toggle():n.offcanvas(o)})}(window.jQuery),function(s){"use strict";var n=function(t,e){this.$element=s(t),this.options=s.extend({},n.DEFAULTS,e),this.$element.on("click.bs.rowlink","td:not(.rowlink-skip)",s.proxy(this.click,this))};n.DEFAULTS={target:"a"},n.prototype.click=function(t){var e=s(t.currentTarget).closest("tr").find(this.options.target)[0];if(s(t.target)[0]!==e)if(t.preventDefault(),e.click)e.click();else if(document.createEvent){var i=document.createEvent("MouseEvents");i.initMouseEvent("click",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),e.dispatchEvent(i)}};var t=s.fn.rowlink;s.fn.rowlink=function(i){return this.each(function(){var t=s(this),e=t.data("bs.rowlink");e||t.data("bs.rowlink",e=new n(this,i))})},s.fn.rowlink.Constructor=n,s.fn.rowlink.noConflict=function(){return s.fn.rowlink=t,this},s(document).on("click.bs.rowlink.data-api",'[data-link="row"]',function(t){if(0===s(t.target).closest(".rowlink-skip").length){var e=s(this);e.data("bs.rowlink")||(e.rowlink(e.data()),s(t.target).trigger("click.bs.rowlink"))}})}(window.jQuery),function(s){"use strict";var a=void 0!==window.orientation,i=-1<navigator.userAgent.toLowerCase().indexOf("android"),e="Microsoft Internet Explorer"==window.navigator.appName,n=function(t,e){i||(this.$element=s(t),this.options=s.extend({},n.DEFAULTS,e),this.mask=String(this.options.mask),this.init(),this.listen(),this.checkVal())};n.DEFAULTS={mask:"",placeholder:"_",definitions:{9:"[0-9]",a:"[A-Za-z]",w:"[A-Za-z0-9]","*":"."}},n.prototype.init=function(){var i=this.options.definitions;this.mask.length;this.tests=[],this.partialPosition=this.mask.length,this.firstNonMaskPos=null,s.each(this.mask.split(""),s.proxy(function(t,e){"?"==e?(0,this.partialPosition=t):i[e]?(this.tests.push(new RegExp(i[e])),null===this.firstNonMaskPos&&(this.firstNonMaskPos=this.tests.length-1)):this.tests.push(null)},this)),this.buffer=s.map(this.mask.split(""),s.proxy(function(t){return"?"!=t?i[t]?this.options.placeholder:t:void 0},this)),this.focusText=this.$element.val(),this.$element.data("rawMaskFn",s.proxy(function(){return s.map(this.buffer,function(t,e){return this.tests[e]&&t!=this.options.placeholder?t:null}).join("")},this))},n.prototype.listen=function(){if(!this.$element.attr("readonly")){var t=(e?"paste":"input")+".mask";this.$element.on("unmask.bs.inputmask",s.proxy(this.unmask,this)).on("focus.bs.inputmask",s.proxy(this.focusEvent,this)).on("blur.bs.inputmask",s.proxy(this.blurEvent,this)).on("keydown.bs.inputmask",s.proxy(this.keydownEvent,this)).on("keypress.bs.inputmask",s.proxy(this.keypressEvent,this)).on(t,s.proxy(this.pasteEvent,this))}},n.prototype.caret=function(e,i){if(0!==this.$element.length){if("number"==typeof e)return i="number"==typeof i?i:e,this.$element.each(function(){if(this.setSelectionRange)this.setSelectionRange(e,i);else if(this.createTextRange){var t=this.createTextRange();t.collapse(!0),t.moveEnd("character",i),t.moveStart("character",e),t.select()}});if(this.$element[0].setSelectionRange)e=this.$element[0].selectionStart,i=this.$element[0].selectionEnd;else if(document.selection&&document.selection.createRange){var t=document.selection.createRange();e=0-t.duplicate().moveStart("character",-1e5),i=e+t.text.length}return{begin:e,end:i}}},n.prototype.seekNext=function(t){for(var e=this.mask.length;++t<=e&&!this.tests[t];);return t},n.prototype.seekPrev=function(t){for(;0<=--t&&!this.tests[t];);return t},n.prototype.shiftL=function(t,e){var i=this.mask.length;if(!(t<0)){for(var s=t,n=this.seekNext(e);s<i;s++)if(this.tests[s]){if(!(n<i&&this.tests[s].test(this.buffer[n])))break;this.buffer[s]=this.buffer[n],this.buffer[n]=this.options.placeholder,n=this.seekNext(n)}this.writeBuffer(),this.caret(Math.max(this.firstNonMaskPos,t))}},n.prototype.shiftR=function(t){for(var e=this.mask.length,i=t,s=this.options.placeholder;i<e;i++)if(this.tests[i]){var n=this.seekNext(i),a=this.buffer[i];if(this.buffer[i]=s,!(n<e&&this.tests[n].test(a)))break;s=a}},n.prototype.unmask=function(){this.$element.unbind(".mask").removeData("inputmask")},n.prototype.focusEvent=function(){this.focusText=this.$element.val();var t=this.mask.length,e=this.checkVal();this.writeBuffer();var i=this,s=function(){e==t?i.caret(0,e):i.caret(e)};s(),setTimeout(s,50)},n.prototype.blurEvent=function(){this.checkVal(),this.$element.val()!==this.focusText&&this.$element.trigger("change")},n.prototype.keydownEvent=function(t){var e=t.which;if(8==e||46==e||a&&127==e){var i=this.caret(),s=i.begin,n=i.end;return n-s==0&&(s=46!=e?this.seekPrev(s):n=this.seekNext(s-1),n=46==e?this.seekNext(n):n),this.clearBuffer(s,n),this.shiftL(s,n-1),!1}return 27==e?(this.$element.val(this.focusText),this.caret(0,this.checkVal()),!1):void 0},n.prototype.keypressEvent=function(t){var e=this.mask.length,i=t.which,s=this.caret();if(t.ctrlKey||t.altKey||t.metaKey||i<32)return!0;if(i){s.end-s.begin!=0&&(this.clearBuffer(s.begin,s.end),this.shiftL(s.begin,s.end-1));var n=this.seekNext(s.begin-1);if(n<e){var a=String.fromCharCode(i);if(this.tests[n].test(a)){this.shiftR(n),this.buffer[n]=a,this.writeBuffer();var o=this.seekNext(n);this.caret(o)}}return!1}},n.prototype.pasteEvent=function(){var t=this;setTimeout(function(){t.caret(t.checkVal(!0))},0)},n.prototype.clearBuffer=function(t,e){for(var i=this.mask.length,s=t;s<e&&s<i;s++)this.tests[s]&&(this.buffer[s]=this.options.placeholder)},n.prototype.writeBuffer=function(){return this.$element.val(this.buffer.join("")).val()},n.prototype.checkVal=function(t){for(var e=this.mask.length,i=this.$element.val(),s=-1,n=0,a=0;n<e;n++)if(this.tests[n]){for(this.buffer[n]=this.options.placeholder;a++<i.length;){var o=i.charAt(a-1);if(this.tests[n].test(o)){this.buffer[n]=o,s=n;break}}if(a>i.length)break}else this.buffer[n]==i.charAt(a)&&n!=this.partialPosition&&(a++,s=n);return!t&&s+1<this.partialPosition?(this.$element.val(""),this.clearBuffer(0,e)):(t||s+1>=this.partialPosition)&&(this.writeBuffer(),t||this.$element.val(this.$element.val().substring(0,s+1))),this.partialPosition?n:this.firstNonMaskPos};var t=s.fn.inputmask;s.fn.inputmask=function(i){return this.each(function(){var t=s(this),e=t.data("bs.inputmask");e||t.data("bs.inputmask",e=new n(this,i))})},s.fn.inputmask.Constructor=n,s.fn.inputmask.noConflict=function(){return s.fn.inputmask=t,this},s(document).on("focus.bs.inputmask.data-api","[data-mask]",function(){var t=s(this);t.data("bs.inputmask")||t.inputmask(t.data())})}(window.jQuery),function(o){"use strict";var i="Microsoft Internet Explorer"==window.navigator.appName,s=function(t,e){if(this.$element=o(t),this.$input=this.$element.find(":file"),0!==this.$input.length){this.name=this.$input.attr("name")||e.name,this.$hidden=this.$element.find('input[type=hidden][name="'+this.name+'"]'),0===this.$hidden.length&&(this.$hidden=o('<input type="hidden">').insertBefore(this.$input)),this.$preview=this.$element.find(".fileinput-preview");var i=this.$preview.css("height");"inline"!==this.$preview.css("display")&&"0px"!==i&&"none"!==i&&this.$preview.css("line-height",i),this.original={exists:this.$element.hasClass("fileinput-exists"),preview:this.$preview.html(),hiddenVal:this.$hidden.val()},this.listen()}};s.prototype.listen=function(){this.$input.on("change.bs.fileinput",o.proxy(this.change,this)),o(this.$input[0].form).on("reset.bs.fileinput",o.proxy(this.reset,this)),this.$element.find('[data-trigger="fileinput"]').on("click.bs.fileinput",o.proxy(this.trigger,this)),this.$element.find('[data-dismiss="fileinput"]').on("click.bs.fileinput",o.proxy(this.clear,this))},s.prototype.change=function(t){var i=void 0===t.target.files?t.target&&t.target.value?[{name:t.target.value.replace(/^.+\\/,"")}]:[]:t.target.files;if(t.stopPropagation(),0!==i.length){this.$hidden.val(""),this.$hidden.attr("name",""),this.$input.attr("name",this.name);var s=i[0];if(0<this.$preview.length&&("undefined"!=typeof s.type?s.type.match(/^image\/(gif|png|jpeg)$/):s.name.match(/\.(gif|png|jpe?g)$/i))&&"undefined"!=typeof FileReader){var e=new FileReader,n=this.$preview,a=this.$element;e.onload=function(t){var e=o("<img>");e[0].src=t.target.result,i[0].result=t.target.result,a.find(".fileinput-filename").text(s.name),"none"!=n.css("max-height")&&e.css("max-height",parseInt(n.css("max-height"),10)-parseInt(n.css("padding-top"),10)-parseInt(n.css("padding-bottom"),10)-parseInt(n.css("border-top"),10)-parseInt(n.css("border-bottom"),10)),n.html(e),a.addClass("fileinput-exists").removeClass("fileinput-new"),a.trigger("change.bs.fileinput",i)},e.readAsDataURL(s)}else this.$element.find(".fileinput-filename").text(s.name),this.$preview.text(s.name),this.$element.addClass("fileinput-exists").removeClass("fileinput-new"),this.$element.trigger("change.bs.fileinput")}else this.clear()},s.prototype.clear=function(t){if(t&&t.preventDefault(),this.$hidden.val(""),this.$hidden.attr("name",this.name),this.$input.attr("name",""),i){var e=this.$input.clone(!0);this.$input.after(e),this.$input.remove(),this.$input=e}else this.$input.val("");this.$preview.html(""),this.$element.find(".fileinput-filename").text(""),this.$element.addClass("fileinput-new").removeClass("fileinput-exists"),void 0!==t&&(this.$input.trigger("change"),this.$element.trigger("clear.bs.fileinput"))},s.prototype.reset=function(){this.clear(),this.$hidden.val(this.original.hiddenVal),this.$preview.html(this.original.preview),this.$element.find(".fileinput-filename").text(""),this.original.exists?this.$element.addClass("fileinput-exists").removeClass("fileinput-new"):this.$element.addClass("fileinput-new").removeClass("fileinput-exists"),this.$element.trigger("reset.bs.fileinput")},s.prototype.trigger=function(t){this.$input.trigger("click"),t.preventDefault()};var t=o.fn.fileinput;o.fn.fileinput=function(i){return this.each(function(){var t=o(this),e=t.data("bs.fileinput");e||t.data("bs.fileinput",e=new s(this,i)),"string"==typeof i&&e[i]()})},o.fn.fileinput.Constructor=s,o.fn.fileinput.noConflict=function(){return o.fn.fileinput=t,this},o(document).on("click.fileinput.data-api",'[data-provides="fileinput"]',function(t){var e=o(this);if(!e.data("bs.fileinput")){e.fileinput(e.data());var i=o(t.target).closest('[data-dismiss="fileinput"],[data-trigger="fileinput"]');0<i.length&&(t.preventDefault(),i.trigger("click.bs.fileinput"))}})}(window.jQuery);