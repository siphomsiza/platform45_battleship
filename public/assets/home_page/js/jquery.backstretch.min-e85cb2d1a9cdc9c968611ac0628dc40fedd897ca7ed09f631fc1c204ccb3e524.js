!function(a,o,i){a.fn.backstretch=function(e,n){return(e===i||0===e.length)&&a.error("No images were supplied for Backstretch"),0===a(o).scrollTop()&&o.scrollTo(0,0),this.each(function(){var t=a(this),i=t.data("backstretch");if(i){if("string"==typeof e&&"function"==typeof i[e])return void i[e](n);n=a.extend(i.options,n),i.destroy(!0)}i=new s(this,e,n),t.data("backstretch",i)})},a.backstretch=function(t,i){return a("body").backstretch(t,i).data("backstretch")},a.expr[":"].backstretch=function(t){return a(t).data("backstretch")!==i},a.fn.backstretch.defaults={centeredX:!0,centeredY:!0,duration:5e3,fade:0};var n={left:0,top:0,overflow:"hidden",margin:0,padding:0,height:"100%",width:"100%",zIndex:-999999},t={position:"absolute",display:"none",margin:0,padding:0,border:"none",width:"auto",height:"auto",maxHeight:"none",maxWidth:"none",zIndex:-999999},s=function(t,i,e){this.options=a.extend({},a.fn.backstretch.defaults,e||{}),this.images=a.isArray(i)?i:[i],a.each(this.images,function(){a("<img />")[0].src=this}),this.isBody=t===document.body,this.$container=a(t),this.$root=this.isBody?a(r?o:document):this.$container,t=this.$container.children(".backstretch").first(),this.$wrap=t.length?t:a('<div class="backstretch"></div>').css(n).appendTo(this.$container),this.isBody||(t=this.$container.css("position"),i=this.$container.css("zIndex"),this.$container.css({position:"static"===t?"relative":t,zIndex:"auto"===i?0:i,background:"none"}),this.$wrap.css({zIndex:-999998})),this.$wrap.css({position:this.isBody&&r?"fixed":"absolute"}),this.index=0,this.show(this.index),a(o).on("resize.backstretch",a.proxy(this.resize,this)).on("orientationchange.backstretch",a.proxy(function(){this.isBody&&0===o.pageYOffset&&(o.scrollTo(0,1),this.resize())},this))};s.prototype={resize:function(){try{var t,i={left:0,top:0},e=this.isBody?this.$root.width():this.$root.innerWidth(),n=e,s=this.isBody?o.innerHeight?o.innerHeight:this.$root.height():this.$root.innerHeight(),r=n/this.$img.data("ratio");s<=r?(t=(r-s)/2,this.options.centeredY&&(i.top="-"+t+"px")):(t=((n=(r=s)*this.$img.data("ratio"))-e)/2,this.options.centeredX&&(i.left="-"+t+"px")),this.$wrap.css({width:e,height:s}).find("img:not(.deleteable)").css({width:n,height:r}).css(i)}catch(d){}return this},show:function(e){if(!(Math.abs(e)>this.images.length-1)){var n=this,s=n.$wrap.find("img").addClass("deleteable"),r={relatedTarget:n.$container[0]};return n.$container.trigger(a.Event("backstretch.before",r),[n,e]),this.index=e,clearInterval(n.interval),n.$img=a("<img />").css(t).bind("load",function(t){var i=this.width||a(t.target).width();t=this.height||a(t.target).height(),a(this).data("ratio",i/t),a(this).fadeIn(n.options.speed||n.options.fade,function(){s.remove(),n.paused||n.cycle(),a(["after","show"]).each(function(){n.$container.trigger(a.Event("backstretch."+this,r),[n,e])})}),n.resize()}).appendTo(n.$wrap),n.$img.attr("src",n.images[e]),n}},next:function(){return this.show(this.index<this.images.length-1?this.index+1:0)},prev:function(){return this.show(0===this.index?this.images.length-1:this.index-1)},pause:function(){return this.paused=!0,this},resume:function(){return this.paused=!1,this.next(),this},cycle:function(){return 1<this.images.length&&(clearInterval(this.interval),this.interval=setInterval(a.proxy(function(){this.paused||this.next()},this),this.options.duration)),this},destroy:function(t){a(o).off("resize.backstretch orientationchange.backstretch"),clearInterval(this.interval),t||this.$wrap.remove(),this.$container.removeData("backstretch")}};var r,e=navigator.userAgent,h=navigator.platform,c=!!(c=e.match(/AppleWebKit\/([0-9]+)/))&&c[1],d=!!(d=e.match(/Fennec\/([0-9]+)/))&&d[1],p=e.match(/Opera Mobi\/([0-9]+)/),f=!!p&&p[1],u=!!(u=e.match(/MSIE ([0-9]+)/))&&u[1];r=!((-1<h.indexOf("iPhone")||-1<h.indexOf("iPad")||-1<h.indexOf("iPod"))&&c&&c<534||o.operamini&&"[object OperaMini]"==={}.toString.call(o.operamini)||p&&f<7458||-1<e.indexOf("Android")&&c&&c<533||d&&d<6||"palmGetResource"in o&&c&&c<534||-1<e.indexOf("MeeGo")&&-1<e.indexOf("NokiaBrowser/8.5.0")||u&&u<=6)}(jQuery,window);