!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(u){function t(e){var t=e||window.event,n=[].slice.call(arguments,1),l=0,o=0,i=0,h=0,s=0;return(e=u.event.fix(t)).type="mousewheel",t.wheelDelta&&(l=t.wheelDelta),t.detail&&(l=-1*t.detail),t.deltaY&&(l=i=-1*t.deltaY),t.deltaX&&(l=-1*(o=t.deltaX)),t.wheelDeltaY!==undefined&&(i=t.wheelDeltaY),t.wheelDeltaX!==undefined&&(o=-1*t.wheelDeltaX),h=Math.abs(l),(!a||h<a)&&(a=h),s=Math.max(Math.abs(i),Math.abs(o)),(!r||s<r)&&(r=s),n.unshift(e,Math.floor(l/a),Math.floor(o/r),Math.floor(i/r)),(u.event.dispatch||u.event.handle).apply(this,n)}var a,r,e=["wheel","mousewheel","DOMMouseScroll"],n="onwheel"in document||9<=document.documentMode?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"];if(u.event.fixHooks)for(var l=e.length;l;)u.event.fixHooks[e[--l]]=u.event.mouseHooks;u.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var e=n.length;e;)this.addEventListener(n[--e],t,!1);else this.onmousewheel=t},teardown:function(){if(this.removeEventListener)for(var e=n.length;e;)this.removeEventListener(n[--e],t,!1);else this.onmousewheel=null}},u.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.unbind("mousewheel",e)}})});