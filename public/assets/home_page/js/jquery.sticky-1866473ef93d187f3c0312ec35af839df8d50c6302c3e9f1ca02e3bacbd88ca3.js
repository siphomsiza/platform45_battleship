!function(a){var r={topSpacing:0,bottomSpacing:0,className:"is-sticky",wrapperClassName:"sticky-wrapper",center:!1,getWidthFrom:""},c=a(window),p=a(document),l=[],d=c.height(),t=function(){for(var t=c.scrollTop(),e=p.height(),i=e-d,n=i<t?i-t:0,s=0;s<l.length;s++){var r=l[s];if(t<=r.stickyWrapper.offset().top-r.topSpacing-n)null!==r.currentTop&&(r.stickyElement.css("position","").css("top",""),r.stickyElement.parent().removeClass(r.className),r.currentTop=null);else{var o=e-r.stickyElement.outerHeight()-r.topSpacing-r.bottomSpacing-t-n;o<0?o+=r.topSpacing:o=r.topSpacing,r.currentTop!=o&&(r.stickyElement.css("position","fixed").css("top",o),"undefined"!=typeof r.getWidthFrom&&r.stickyElement.css("width",a(r.getWidthFrom).width()),r.stickyElement.parent().addClass(r.className),r.currentTop=o)}}},e=function(){d=c.height()},i={init:function(t){var s=a.extend({},r,t);return this.each(function(){var t=a(this),e=t.attr("id"),i=(e?r.wrapperClassName:r.wrapperClassName,a("<div></div>").attr("id",e+"-sticky-wrapper").addClass(s.wrapperClassName));t.wrapAll(i),s.center&&t.parent().css({width:t.outerWidth(),marginLeft:"auto",marginRight:"auto"}),"right"==t.css("float")&&t.css({"float":"none"}).parent().css({"float":"right"});var n=t.parent();n.css("height",t.outerHeight()),l.push({topSpacing:s.topSpacing,bottomSpacing:s.bottomSpacing,stickyElement:t,currentTop:null,stickyWrapper:n,className:s.className,getWidthFrom:s.getWidthFrom})})},update:t,unstick:function(){return this.each(function(){for(var t=a(this),e=-1,i=0;i<l.length;i++)l[i].stickyElement.get(0)==t.get(0)&&(e=i);-1!=e&&(l.splice(e,1),t.unwrap(),t.removeAttr("style"))})}};window.addEventListener?(window.addEventListener("scroll",t,!1),window.addEventListener("resize",e,!1)):window.attachEvent&&(window.attachEvent("onscroll",t),window.attachEvent("onresize",e)),a.fn.sticky=function(t){return i[t]?i[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void a.error("Method "+t+" does not exist on jQuery.sticky"):i.init.apply(this,arguments)},a.fn.unstick=function(t){return i[t]?i[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void a.error("Method "+t+" does not exist on jQuery.sticky"):i.unstick.apply(this,arguments)},a(function(){setTimeout(t,0)})}(jQuery);