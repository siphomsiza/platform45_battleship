!function(d){var u,n,i,p,o,f,t,s="Close",l="BeforeClose",a="AfterClose",r="BeforeAppend",m="MarkupParse",g="Open",c="Change",h="mfp",v="."+h,C="mfp-ready",y="mfp-removing",w="mfp-prevent-close",e=function(){},b=!!window.jQuery,I=d(window),x=function(e,t){u.ev.on(h+e+v,t)},k=function(e,t,i,n){var o=document.createElement("div");return o.className="mfp-"+e,i&&(o.innerHTML=i),n?t&&t.appendChild(o):(o=d(o),t&&o.appendTo(t)),o},T=function(e,t){u.ev.triggerHandler(h+e,t),u.st.callbacks&&(e=e.charAt(0).toLowerCase()+e.slice(1),u.st.callbacks[e]&&u.st.callbacks[e].apply(u,d.isArray(t)?t:[t]))},E=function(){(u.st.focus?u.content.find(u.st.focus).eq(0):u.wrap).focus()},S=function(e){return e===t&&u.currTemplate.closeBtn||(u.currTemplate.closeBtn=d(u.st.closeMarkup.replace("%title%",u.st.tClose)),t=e),u.currTemplate.closeBtn},P=function(){d.magnificPopup.instance||((u=new e).init(),d.magnificPopup.instance=u)},_=function(e){if(!d(e).hasClass(w)){var t=u.st.closeOnContentClick,i=u.st.closeOnBgClick;if(t&&i)return!0;if(!u.content||d(e).hasClass("mfp-close")||u.preloader&&e===u.preloader[0])return!0;if(e===u.content[0]||d.contains(u.content[0],e)){if(t)return!0}else if(i&&d.contains(document,e))return!0;return!1}},O=function(){var e=document.createElement("p").style,t=["ms","O","Moz","Webkit"];if(void 0!==e.transition)return!0;for(;t.length;)if(t.pop()+"Transition"in e)return!0;return!1};e.prototype={constructor:e,init:function(){var e=navigator.appVersion;u.isIE7=-1!==e.indexOf("MSIE 7."),u.isIE8=-1!==e.indexOf("MSIE 8."),u.isLowIE=u.isIE7||u.isIE8,u.isAndroid=/android/gi.test(e),u.isIOS=/iphone|ipad|ipod/gi.test(e),u.supportsTransition=O(),u.probablyMobile=u.isAndroid||u.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),i=d(document.body),p=d(document),u.popupsCache={}},open:function(e){var t;if(!1===e.isObj){u.items=e.items.toArray(),u.index=0;var i,n=e.items;for(t=0;n.length>t;t++)if((i=n[t]).parsed&&(i=i.el[0]),i===e.el[0]){u.index=t;break}}else u.items=d.isArray(e.items)?e.items:[e.items],u.index=e.index||0;if(u.isOpen)u.updateItemHTML();else{u.types=[],f="",u.ev=e.mainEl&&e.mainEl.length?e.mainEl.eq(0):p,e.key?(u.popupsCache[e.key]||(u.popupsCache[e.key]={}),u.currTemplate=u.popupsCache[e.key]):u.currTemplate={},u.st=d.extend(!0,{},d.magnificPopup.defaults,e),u.fixedContentPos="auto"===u.st.fixedContentPos?!u.probablyMobile:u.st.fixedContentPos,u.st.modal&&(u.st.closeOnContentClick=!1,u.st.closeOnBgClick=!1,u.st.showCloseBtn=!1,u.st.enableEscapeKey=!1),u.bgOverlay||(u.bgOverlay=k("bg").on("click"+v,function(){u.close()}),u.wrap=k("wrap").attr("tabindex",-1).on("click"+v,function(e){_(e.target)&&u.close()}),u.container=k("container",u.wrap)),u.contentContainer=k("content"),u.st.preloader&&(u.preloader=k("preloader",u.container,u.st.tLoading));var o=d.magnificPopup.modules;for(t=0;o.length>t;t++){var a=o[t];a=a.charAt(0).toUpperCase()+a.slice(1),u["init"+a].call(u)}T("BeforeOpen"),u.st.showCloseBtn&&(u.st.closeBtnInside?(x(m,function(e,t,i,n){i.close_replaceWith=S(n.type)}),f+=" mfp-close-btn-in"):u.wrap.append(S())),u.st.alignTop&&(f+=" mfp-align-top"),u.fixedContentPos?u.wrap.css({overflow:u.st.overflowY,overflowX:"hidden",overflowY:u.st.overflowY}):u.wrap.css({top:I.scrollTop(),position:"absolute"}),(!1===u.st.fixedBgPos||"auto"===u.st.fixedBgPos&&!u.fixedContentPos)&&u.bgOverlay.css({height:p.height(),position:"absolute"}),u.st.enableEscapeKey&&p.on("keyup"+v,function(e){27===e.keyCode&&u.close()}),I.on("resize"+v,function(){u.updateSize()}),u.st.closeOnContentClick||(f+=" mfp-auto-cursor"),f&&u.wrap.addClass(f);var r=u.wH=I.height(),s={};if(u.fixedContentPos&&u._hasScrollBar(r)){var l=u._getScrollbarSize();l&&(s.paddingRight=l)}u.fixedContentPos&&(u.isIE7?d("body, html").css("overflow","hidden"):s.overflow="hidden");var c=u.st.mainClass;u.isIE7&&(c+=" mfp-ie7"),c&&u._addClassToMFP(c),u.updateItemHTML(),T("BuildControls"),d("html").css(s),u.bgOverlay.add(u.wrap).prependTo(document.body),u._lastFocusedEl=document.activeElement,setTimeout(function(){u.content?(u._addClassToMFP(C),E()):u.bgOverlay.addClass(C),p.on("focusin"+v,function(e){return e.target===u.wrap[0]||d.contains(u.wrap[0],e.target)?void 0:(E(),!1)})},16),u.isOpen=!0,u.updateSize(r),T(g)}},close:function(){u.isOpen&&(T(l),u.isOpen=!1,u.st.removalDelay&&!u.isLowIE&&u.supportsTransition?(u._addClassToMFP(y),setTimeout(function(){u._close()},u.st.removalDelay)):u._close())},_close:function(){T(s);var e=y+" "+C+" ";if(u.bgOverlay.detach(),u.wrap.detach(),u.container.empty(),u.st.mainClass&&(e+=u.st.mainClass+" "),u._removeClassFromMFP(e),u.fixedContentPos){var t={paddingRight:""};u.isIE7?d("body, html").css("overflow",""):t.overflow="",d("html").css(t)}p.off("keyup"+v+" focusin"+v),u.ev.off(v),u.wrap.attr("class","mfp-wrap").removeAttr("style"),u.bgOverlay.attr("class","mfp-bg"),u.container.attr("class","mfp-container"),!u.st.showCloseBtn||u.st.closeBtnInside&&!0!==u.currTemplate[u.currItem.type]||u.currTemplate.closeBtn&&u.currTemplate.closeBtn.detach(),u._lastFocusedEl&&d(u._lastFocusedEl).focus(),u.currItem=null,u.content=null,u.currTemplate=null,u.prevHeight=0,T(a)},updateSize:function(e){if(u.isIOS){var t=document.documentElement.clientWidth/window.innerWidth,i=window.innerHeight*t;u.wrap.css("height",i),u.wH=i}else u.wH=e||I.height();u.fixedContentPos||u.wrap.css("height",u.wH),T("Resize")},updateItemHTML:function(){var e=u.items[u.index];u.contentContainer.detach(),u.content&&u.content.detach(),e.parsed||(e=u.parseEl(u.index));var t=e.type;if(T("BeforeChange",[u.currItem?u.currItem.type:"",t]),u.currItem=e,!u.currTemplate[t]){var i=!!u.st[t]&&u.st[t].markup;T("FirstMarkupParse",i),u.currTemplate[t]=!i||d(i)}o&&o!==e.type&&u.container.removeClass("mfp-"+o+"-holder");var n=u["get"+t.charAt(0).toUpperCase()+t.slice(1)](e,u.currTemplate[t]);u.appendContent(n,t),e.preloaded=!0,T(c,e),o=e.type,u.container.prepend(u.contentContainer),T("AfterChange")},appendContent:function(e,t){(u.content=e)?u.st.showCloseBtn&&u.st.closeBtnInside&&!0===u.currTemplate[t]?u.content.find(".mfp-close").length||u.content.append(S()):u.content=e:u.content="",T(r),u.container.addClass("mfp-"+t+"-holder"),u.contentContainer.append(u.content)},parseEl:function(e){var t=u.items[e],i=t.type;if((t=t.tagName?{el:d(t)}:{data:t,src:t.src}).el){for(var n=u.types,o=0;n.length>o;o++)if(t.el.hasClass("mfp-"+n[o])){i=n[o];break}t.src=t.el.attr("data-mfp-src"),t.src||(t.src=t.el.attr("href"))}return t.type=i||u.st.type||"inline",t.index=e,t.parsed=!0,u.items[e]=t,T("ElementParse",t),u.items[e]},addGroup:function(t,i){var e=function(e){e.mfpEl=this,u._openClick(e,t,i)};i||(i={});var n="click.magnificPopup";i.mainEl=t,i.items?(i.isObj=!0,t.off(n).on(n,e)):(i.isObj=!1,i.delegate?t.off(n).on(n,i.delegate,e):(i.items=t).off(n).on(n,e))},_openClick:function(e,t,i){if((void 0!==i.midClick?i.midClick:d.magnificPopup.defaults.midClick)||2!==e.which&&!e.ctrlKey&&!e.metaKey){var n=void 0!==i.disableOn?i.disableOn:d.magnificPopup.defaults.disableOn;if(n)if(d.isFunction(n)){if(!n.call(u))return!0}else if(n>I.width())return!0;e.type&&(e.preventDefault(),u.isOpen&&e.stopPropagation()),i.el=d(e.mfpEl),i.delegate&&(i.items=t.find(i.delegate)),u.open(i)}},updateStatus:function(e,t){if(u.preloader){n!==e&&u.container.removeClass("mfp-s-"+n),t||"loading"!==e||(t=u.st.tLoading);var i={status:e,text:t};T("UpdateStatus",i),e=i.status,t=i.text,u.preloader.html(t),u.preloader.find("a").on("click",function(e){e.stopImmediatePropagation()}),u.container.addClass("mfp-s-"+e),n=e}},_addClassToMFP:function(e){u.bgOverlay.addClass(e),u.wrap.addClass(e)},_removeClassFromMFP:function(e){this.bgOverlay.removeClass(e),u.wrap.removeClass(e)},_hasScrollBar:function(e){return(u.isIE7?p.height():document.body.scrollHeight)>(e||I.height())},_parseMarkup:function(o,e,t){var a;t.data&&(e=d.extend(t.data,e)),T(m,[o,e,t]),d.each(e,function(e,t){if(void 0===t||!1===t)return!0;if(1<(a=e.split("_")).length){var i=o.find(v+"-"+a[0]);if(0<i.length){var n=a[1];"replaceWith"===n?i[0]!==t[0]&&i.replaceWith(t):"img"===n?i.is("img")?i.attr("src",t):i.replaceWith('<img src="'+t+'" class="'+i.attr("class")+'" />'):i.attr(a[1],t)}}else o.find(v+"-"+e).html(t)})},_getScrollbarSize:function(){if(void 0===u.scrollbarSize){var e=document.createElement("div");e.id="mfp-sbm",e.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(e),u.scrollbarSize=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return u.scrollbarSize}},d.magnificPopup={instance:null,proto:e.prototype,modules:[],open:function(e,t){return P(),e||(e={}),e.isObj=!0,e.index=t||0,this.instance.open(e)},close:function(){return d.magnificPopup.instance.close()},registerModule:function(e,t){t.options&&(d.magnificPopup.defaults[e]=t.options),d.extend(this.proto,t.proto),this.modules.push(e)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&times;</button>',tClose:"Close (Esc)",tLoading:"Loading..."}},d.fn.magnificPopup=function(e,t){P();var i=d(this);if("string"==typeof e)if("open"===e){var n,o=b?i.data("magnificPopup"):i[0].magnificPopup,a=parseInt(t,10)||0;o.items?n=o.items[a]:(n=i,o.delegate&&(n=n.find(o.delegate)),n=n.eq(a)),u._openClick({mfpEl:n},i,o)}else u.isOpen&&u[e].apply(u,Array.prototype.slice.call(arguments,1));else b?i.data("magnificPopup",e):i[0].magnificPopup=e,u.addGroup(i,e);return i};var z,M,B,H="inline",L=function(){B&&(M.after(B.addClass(z)).detach(),B=null)};d.magnificPopup.registerModule(H,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){u.types.push(H),x(s+"."+H,function(){L()})},getInline:function(e,t){if(L(),e.src){var i=u.st.inline,n=d(e.src);if(n.length){var o=n[0].parentNode;o&&o.tagName&&(M||(z=i.hiddenClass,M=k(z),z="mfp-"+z),B=n.after(M).detach().removeClass(z)),u.updateStatus("ready")}else u.updateStatus("error",i.tNotFound),n=d("<div>");return e.inlineElement=n}return u.updateStatus("ready"),u._parseMarkup(t,{},e),t}}});var A,F="ajax",j=function(){A&&i.removeClass(A)};d.magnificPopup.registerModule(F,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){u.types.push(F),A=u.st.ajax.cursor,x(s+"."+F,function(){j(),u.req&&u.req.abort()})},getAjax:function(o){A&&i.addClass(A),u.updateStatus("loading");var e=d.extend({url:o.src,success:function(e,t,i){var n={data:e,xhr:i};T("ParseAjax",n),u.appendContent(d(n.data),F),o.finished=!0,j(),E(),setTimeout(function(){u.wrap.addClass(C)},16),u.updateStatus("ready"),T("AjaxContentAdded")},error:function(){j(),o.finished=o.loadError=!0,u.updateStatus("error",u.st.ajax.tError.replace("%url%",o.src))}},u.st.ajax.settings);return u.req=d.ajax(e),""}}});var N,W=function(e){if(e.data&&void 0!==e.data.title)return e.data.title;var t=u.st.image.titleSrc;if(t){if(d.isFunction(t))return t.call(u,e);if(e.el)return e.el.attr(t)||""}return""};d.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><div class="mfp-img"></div><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var e=u.st.image,t=".image";u.types.push("image"),x(g+t,function(){"image"===u.currItem.type&&e.cursor&&i.addClass(e.cursor)}),x(s+t,function(){e.cursor&&i.removeClass(e.cursor),I.off("resize"+v)}),x("Resize"+t,u.resizeImage),u.isLowIE&&x("AfterChange",u.resizeImage)},resizeImage:function(){var e=u.currItem;if(e&&e.img&&u.st.image.verticalFit){var t=0;u.isLowIE&&(t=parseInt(e.img.css("padding-top"),10)+parseInt(e.img.css("padding-bottom"),10)),e.img.css("max-height",u.wH-t)}},_onImageHasSize:function(e){e.img&&(e.hasSize=!0,N&&clearInterval(N),e.isCheckingImgSize=!1,T("ImageHasSize",e),e.imgHidden&&(u.content&&u.content.removeClass("mfp-loading"),e.imgHidden=!1))},findImageSize:function(t){var i=0,n=t.img[0],o=function(e){N&&clearInterval(N),N=setInterval(function(){return 0<n.naturalWidth?void u._onImageHasSize(t):(200<i&&clearInterval(N),void(3===++i?o(10):40===i?o(50):100===i&&o(500)))},e)};o(1)},getImage:function(e,t){var i=0,n=function(){e&&(e.img[0].complete?(e.img.off(".mfploader"),e===u.currItem&&(u._onImageHasSize(e),u.updateStatus("ready")),e.hasSize=!0,e.loaded=!0,T("ImageLoadComplete")):++i<200?setTimeout(n,100):o())},o=function(){e&&(e.img.off(".mfploader"),e===u.currItem&&(u._onImageHasSize(e),u.updateStatus("error",a.tError.replace("%url%",e.src))),e.hasSize=!0,e.loaded=!0,e.loadError=!0)},a=u.st.image,r=t.find(".mfp-img");if(r.length){var s=document.createElement("img");s.className="mfp-img",e.img=d(s).on("load.mfploader",n).on("error.mfploader",o),s.src=e.src,r.is("img")&&(e.img=e.img.clone()),0<e.img[0].naturalWidth&&(e.hasSize=!0)}return u._parseMarkup(t,{title:W(e),img_replaceWith:e.img},e),u.resizeImage(),e.hasSize?(N&&clearInterval(N),e.loadError?(t.addClass("mfp-loading"),u.updateStatus("error",a.tError.replace("%url%",e.src))):(t.removeClass("mfp-loading"),u.updateStatus("ready"))):(u.updateStatus("loading"),e.loading=!0,e.hasSize||(e.imgHidden=!0,t.addClass("mfp-loading"),u.findImageSize(e))),t}}});var R,Z=function(){return void 0===R&&(R=void 0!==document.createElement("p").style.MozTransform),R};d.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(e){return e.is("img")?e:e.find("img")}},proto:{initZoom:function(){var a=u.st.zoom,e=".zoom";if(a.enabled&&u.supportsTransition){var t,i,n=a.duration,o=function(e){var t=e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),i="all "+a.duration/1e3+"s "+a.easing,n={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},o="transition";return n["-webkit-"+o]=n["-moz-"+o]=n["-o-"+o]=n[o]=i,t.css(n),t},r=function(){u.content.css("visibility","visible")};x("BuildControls"+e,function(){if(u._allowZoom()){if(clearTimeout(t),u.content.css("visibility","hidden"),image=u._getItemToZoom(),!image)return void r();(i=o(image)).css(u._getOffset()),u.wrap.append(i),t=setTimeout(function(){i.css(u._getOffset(!0)),t=setTimeout(function(){r(),setTimeout(function(){i.remove(),image=i=null,T("ZoomAnimationEnded")},16)},n)},16)}}),x(l+e,function(){if(u._allowZoom()){if(clearTimeout(t),u.st.removalDelay=n,!image){if(image=u._getItemToZoom(),!image)return;i=o(image)}i.css(u._getOffset(!0)),u.wrap.append(i),u.content.css("visibility","hidden"),setTimeout(function(){i.css(u._getOffset())},16)}}),x(s+e,function(){u._allowZoom()&&(r(),i&&i.remove())})}},_allowZoom:function(){return"image"===u.currItem.type},_getItemToZoom:function(){return!!u.currItem.hasSize&&u.currItem.img},_getOffset:function(e){var t,i=(t=e?u.currItem.img:u.st.zoom.opener(u.currItem.el||u.currItem)).offset(),n=parseInt(t.css("padding-top"),10),o=parseInt(t.css("padding-bottom"),10);i.top-=d(window).scrollTop()-n;var a={width:t.width(),height:(b?t.innerHeight():t[0].offsetHeight)-o-n};return Z()?a["-moz-transform"]=a.transform="translate("+i.left+"px,"+i.top+"px)":(a.left=i.left,a.top=i.top),a}}});var q="iframe",D="//about:blank",K=function(e){if(u.currTemplate[q]){var t=u.currTemplate[q].find("iframe");t.length&&(e||(t[0].src=D),u.isIE8&&t.css("display",e?"block":"none"))}};d.magnificPopup.registerModule(q,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){u.types.push(q),x("BeforeChange",function(e,t,i){t!==i&&(t===q?K():i===q&&K(!0))}),x(s+"."+q,function(){K()})},getIframe:function(e,t){var i=e.src,n=u.st.iframe;d.each(n.patterns,function(){return-1<i.indexOf(this.index)?(this.id&&(i="string"==typeof this.id?i.substr(i.lastIndexOf(this.id)+this.id.length,i.length):this.id.call(this,i)),i=this.src.replace("%id%",i),!1):void 0});var o={};return n.srcAction&&(o[n.srcAction]=i),u._parseMarkup(t,o,e),u.updateStatus("ready"),t}}});var Y=function(e){var t=u.items.length;return t-1<e?e-t:e<0?t+e:e},U=function(e,t,i){return e.replace("%curr%",t+1).replace("%total%",i)};d.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var a=u.st.gallery,e=".mfp-gallery",o=Boolean(d.fn.mfpFastClick);return u.direction=!0,!(!a||!a.enabled)&&(f+=" mfp-gallery",x(g+e,function(){a.navigateByImgClick&&u.wrap.on("click"+e,".mfp-img",function(){return 1<u.items.length?(u.next(),!1):void 0}),p.on("keydown"+e,function(e){37===e.keyCode?u.prev():39===e.keyCode&&u.next()})}),x("UpdateStatus"+e,function(e,t){t.text&&(t.text=U(t.text,u.currItem.index,u.items.length))}),x(m+e,function(e,t,i,n){var o=u.items.length;i.counter=1<o?U(a.tCounter,n.index,o):""}),x("BuildControls"+e,function(){if(1<u.items.length&&a.arrows&&!u.arrowLeft){var e=a.arrowMarkup,t=u.arrowLeft=d(e.replace("%title%",a.tPrev).replace("%dir%","left")).addClass(w),i=u.arrowRight=d(e.replace("%title%",a.tNext).replace("%dir%","right")).addClass(w),n=o?"mfpFastClick":"click";t[n](function(){u.prev()}),i[n](function(){u.next()}),u.isIE7&&(k("b",t[0],!1,!0),k("a",t[0],!1,!0),k("b",i[0],!1,!0),k("a",i[0],!1,!0)),u.container.append(t.add(i))}}),x(c+e,function(){u._preloadTimeout&&clearTimeout(u._preloadTimeout),u._preloadTimeout=setTimeout(function(){u.preloadNearbyImages(),u._preloadTimeout=null},16)}),void x(s+e,function(){p.off(e),u.wrap.off("click"+e),u.arrowLeft&&o&&u.arrowLeft.add(u.arrowRight).destroyMfpFastClick(),u.arrowRight=u.arrowLeft=null}))},next:function(){u.direction=!0,u.index=Y(u.index+1),u.updateItemHTML()},prev:function(){u.direction=!1,u.index=Y(u.index-1),u.updateItemHTML()},goTo:function(e){u.direction=e>=u.index,u.index=e,u.updateItemHTML()},preloadNearbyImages:function(){var e,t=u.st.gallery.preload,i=Math.min(t[0],u.items.length),n=Math.min(t[1],u.items.length);for(e=1;(u.direction?n:i)>=e;e++)u._preloadItem(u.index+e);for(e=1;(u.direction?i:n)>=e;e++)u._preloadItem(u.index-e)},_preloadItem:function(e){if(e=Y(e),!u.items[e].preloaded){var t=u.items[e];t.parsed||(t=u.parseEl(e)),T("LazyLoad",t),"image"===t.type&&(t.img=d('<img class="mfp-img" />').on("load.mfploader",function(){t.hasSize=!0}).on("error.mfploader",function(){t.hasSize=!0,t.loadError=!0,T("LazyLoadError",t)}).attr("src",t.src)),t.preloaded=!0}}}});var G,X,Q,V,$="retina";d.magnificPopup.registerModule($,{options:{replaceSrc:function(e){return e.src.replace(/\.\w+$/,function(e){return"@2x"+e})},ratio:1},proto:{initRetina:function(){if(1<window.devicePixelRatio){var i=u.st.retina,n=i.ratio;1<(n=isNaN(n)?n():n)&&(x("ImageHasSize."+$,function(e,t){t.img.css({"max-width":t.img[0].naturalWidth/n,width:"100%"})}),x("ElementParse."+$,function(e,t){t.src=i.replaceSrc(t,n)}))}}}}),G=1e3,X="ontouchstart"in window,Q=function(){I.off("touchmove"+V+" touchend"+V)},V="."+"mfpFastClick",d.fn.mfpFastClick=function(l){return d(this).each(function(){var t,i,n,o,a,r,s,e=d(this);X&&e.on("touchstart"+V,function(e){a=!1,s=1,r=e.originalEvent?e.originalEvent.touches[0]:e.touches[0],n=r.clientX,o=r.clientY,I.on("touchmove"+V,function(e){r=e.originalEvent?e.originalEvent.touches:e.touches,s=r.length,r=r[0],(10<Math.abs(r.clientX-n)||10<Math.abs(r.clientY-o))&&(a=!0,Q())}).on("touchend"+V,function(e){Q(),a||1<s||(t=!0,e.preventDefault(),clearTimeout(i),i=setTimeout(function(){t=!1},G),l())})}),e.on("click"+V,function(){t||l()})})},d.fn.destroyMfpFastClick=function(){d(this).off("touchstart"+V+" click"+V),X&&I.off("touchmove"+V+" touchend"+V)}}(window.jQuery||window.Zepto);