function onYouTubePlayerAPIReady(){ytp.YTAPIReady||(ytp.YTAPIReady=!0,jQuery(document).trigger("YTAPIReady"))}var ytp=ytp||{};!function(jQuery,ytp){var nAgt=navigator.userAgent;if(!jQuery.browser){var nameOffset,verOffset,ix;if(jQuery.browser={},jQuery.browser.mozilla=!1,jQuery.browser.webkit=!1,jQuery.browser.opera=!1,jQuery.browser.safari=!1,jQuery.browser.chrome=!1,jQuery.browser.msie=!1,jQuery.browser.ua=nAgt,jQuery.browser.name=navigator.appName,jQuery.browser.fullVersion=""+parseFloat(navigator.appVersion),jQuery.browser.majorVersion=parseInt(navigator.appVersion,10),-1!=(verOffset=nAgt.indexOf("Opera")))jQuery.browser.opera=!0,jQuery.browser.name="Opera",jQuery.browser.fullVersion=nAgt.substring(verOffset+6),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8));else if(-1!=(verOffset=nAgt.indexOf("MSIE")))jQuery.browser.msie=!0,jQuery.browser.name="Microsoft Internet Explorer",jQuery.browser.fullVersion=nAgt.substring(verOffset+5);else if(-1!=nAgt.indexOf("Trident")){jQuery.browser.msie=!0,jQuery.browser.name="Microsoft Internet Explorer";var start=nAgt.indexOf("rv:")+3,end=start+4;jQuery.browser.fullVersion=nAgt.substring(start,end)}else-1!=(verOffset=nAgt.indexOf("Chrome"))?(jQuery.browser.webkit=!0,jQuery.browser.chrome=!0,jQuery.browser.name="Chrome",jQuery.browser.fullVersion=nAgt.substring(verOffset+7)):-1!=(verOffset=nAgt.indexOf("Safari"))?(jQuery.browser.webkit=!0,jQuery.browser.safari=!0,jQuery.browser.name="Safari",jQuery.browser.fullVersion=nAgt.substring(verOffset+7),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8))):-1!=(verOffset=nAgt.indexOf("AppleWebkit"))?(jQuery.browser.webkit=!0,jQuery.browser.name="Safari",jQuery.browser.fullVersion=nAgt.substring(verOffset+7),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8))):-1!=(verOffset=nAgt.indexOf("Firefox"))?(jQuery.browser.mozilla=!0,jQuery.browser.name="Firefox",jQuery.browser.fullVersion=nAgt.substring(verOffset+8)):(nameOffset=nAgt.lastIndexOf(" ")+1)<(verOffset=nAgt.lastIndexOf("/"))&&(jQuery.browser.name=nAgt.substring(nameOffset,verOffset),jQuery.browser.fullVersion=nAgt.substring(verOffset+1),jQuery.browser.name.toLowerCase()==jQuery.browser.name.toUpperCase()&&(jQuery.browser.name=navigator.appName));-1!=(ix=jQuery.browser.fullVersion.indexOf(";"))&&(jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,ix)),-1!=(ix=jQuery.browser.fullVersion.indexOf(" "))&&(jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,ix)),jQuery.browser.majorVersion=parseInt(""+jQuery.browser.fullVersion,10),isNaN(jQuery.browser.majorVersion)&&(jQuery.browser.fullVersion=""+parseFloat(navigator.appVersion),jQuery.browser.majorVersion=parseInt(navigator.appVersion,10)),jQuery.browser.version=jQuery.browser.majorVersion}jQuery.browser.android=/Android/i.test(nAgt),jQuery.browser.blackberry=/BlackBerry|BB|PlayBook/i.test(nAgt),jQuery.browser.ios=/iPhone|iPad|iPod|webOS/i.test(nAgt),jQuery.browser.operaMobile=/Opera Mini/i.test(nAgt),jQuery.browser.kindle=/Kindle|Silk/i.test(nAgt),jQuery.browser.windowsMobile=/IEMobile|Windows Phone/i.test(nAgt),jQuery.browser.mobile=jQuery.browser.android||jQuery.browser.blackberry||jQuery.browser.ios||jQuery.browser.windowsMobile||jQuery.browser.operaMobile||jQuery.browser.kindle,jQuery.fn.CSSAnimate=function(y,u,p,d,c){function T(e){return e.replace(/([A-Z])/g,function(e){return"-"+e.toLowerCase()})}function P(e,r){return"string"!=typeof e||e.match(/^[\-0-9\.]+$/)?""+e+r:e}return jQuery.support.CSStransition=void 0!==(e=(document.body||document.documentElement).style).transition||void 0!==e.WebkitTransition||void 0!==e.MozTransition||void 0!==e.MsTransition||void 0!==e.OTransition,this.each(function(){var e=this,r=jQuery(this);e.id=e.id||"CSSA_"+(new Date).getTime();var t=t||{type:"noEvent"};if(e.CSSAIsRunning&&e.eventType==t.type)e.CSSqueue=function(){r.CSSAnimate(y,u,p,d,c)};else if(e.CSSqueue=null,e.eventType=t.type,0!==r.length&&y){if(e.CSSAIsRunning=!0,"function"==typeof u&&(c=u,u=jQuery.fx.speeds._default),"function"==typeof p&&(c=p,p=0),"function"==typeof d&&(c=d,d="cubic-bezier(0.65,0.03,0.36,0.72)"),"string"==typeof u)for(var a in jQuery.fx.speeds){if(u==a){u=jQuery.fx.speeds[a];break}u=jQuery.fx.speeds._default}if(u||(u=jQuery.fx.speeds._default),jQuery.support.CSStransition){(t={"default":"ease","in":"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)",easeOutCubic:"cubic-bezier(.215,.61,.355,1)",easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)",easeOutBack:"cubic-bezier(.175, .885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"})[d]&&(d=t[d]);var o="",n="transitionEnd";for(i in jQuery.browser.webkit?(o="-webkit-",n="webkitTransitionEnd"):jQuery.browser.mozilla?(o="-moz-",n="transitionend"):jQuery.browser.opera?(o="-o-",n="otransitionend"):jQuery.browser.msie&&(o="-ms-",n="msTransitionEnd"),t=[],y)"transform"===(a=i)&&(y[a=o+"transform"]=y[i],delete y[i]),"filter"===a&&(y[a=o+"filter"]=y[i],delete y[i]),("transform-origin"===a||"origin"===a)&&(y[a=o+"transform-origin"]=y[i],delete y[i]),"x"===a&&(y[a=o+"transform"]=y[a]||"",y[a]+=" translateX("+P(y[i],"px")+")",delete y[i]),"y"===a&&(y[a=o+"transform"]=y[a]||"",y[a]+=" translateY("+P(y[i],"px")+")",delete y[i]),"z"===a&&(y[a=o+"transform"]=y[a]||"",y[a]+=" translateZ("+P(y[i],"px")+")",delete y[i]),"rotate"===a&&(y[a=o+"transform"]=y[a]||"",y[a]+=" rotate("+P(y[i],"deg")+")",delete y[i]),"rotateX"===a&&(y[a=o+"transform"]=y[a]||"",y[a]+=" rotateX("+P(y[i],"deg")+")",delete y[i]),"rotateY"===a&&(y[a=o+"transform"]=y[a]||"",y[a]+=" rotateY("+P(y[i],"deg")+")",delete y[i]),"rotateZ"===a&&(y[a=o+"transform"]=y[a]||"",y[a]+=" rotateZ("+P(y[i],"deg")+")",delete y[i]),"scale"===a&&(y[a=o+"transform"]=y[a]||"",y[a]+=" scale("+P(y[i],"")+")",delete y[i]),"scaleX"===a&&(y[a=o+"transform"]=y[a]||"",y[a]+=" scaleX("+P(y[i],"")+")",delete y[i]),"scaleY"===a&&(y[a=o+"transform"]=y[a]||"",y[a]+=" scaleY("+P(y[i],"")+")",delete y[i]),"scaleZ"===a&&(y[a=o+"transform"]=y[a]||"",y[a]+=" scaleZ("+P(y[i],"")+")",delete y[i]),"skew"===a&&(y[a=o+"transform"]=y[a]||"",y[a]+=" skew("+P(y[i],"deg")+")",delete y[i]),"skewX"===a&&(y[a=o+"transform"]=y[a]||"",y[a]+=" skewX("+P(y[i],"deg")+")",delete y[i]),"skewY"===a&&(y[a=o+"transform"]=y[a]||"",y[a]+=" skewY("+P(y[i],"deg")+")",delete y[i]),"perspective"===a&&(y[a=o+"transform"]=y[a]||"",y[a]+=" perspective("+P(y[i],"px")+")",delete y[i]),t.indexOf(a)<0&&t.push(T(a));var i=t.join(","),l=function(){r.off(n+"."+e.id),clearTimeout(e.timeout),r.css(o+"transition",""),"function"==typeof c&&c(r),e.called=!0,e.CSSAIsRunning=!1,"function"==typeof e.CSSqueue&&(e.CSSqueue(),e.CSSqueue=null)},s={};jQuery.extend(s,y),s[o+"transition-property"]=i,s[o+"transition-duration"]=u+"ms",s[o+"transition-delay"]=p+"ms",s[o+"transition-style"]="preserve-3d",s[o+"transition-timing-function"]=d,setTimeout(function(){r.one(n+"."+e.id,l),r.css(s)},1),e.timeout=setTimeout(function(){r.called||!c?(r.called=!1,e.CSSAIsRunning=!1):(r.css(o+"transition",""),c(r),e.CSSAIsRunning=!1,"function"==typeof e.CSSqueue&&(e.CSSqueue(),e.CSSqueue=null))},u+p+100)}else{for(var i in y)"transform"===i&&delete y[i],"filter"===i&&delete y[i],"transform-origin"===i&&delete y[i],"auto"===y[i]&&delete y[i];c&&"string"!=typeof c||(c="linear"),r.animate(y,u,c)}}});var e};var getYTPVideoID=function(e){var r,t;return 0<e.indexOf("youtu.be")?r=(t=0<(r=e.substr(e.lastIndexOf("/")+1,e.length)).indexOf("?list=")?r.substr(r.lastIndexOf("="),r.length):null)?r.substr(0,r.lastIndexOf("?")):r:-1<e.indexOf("http")?(r=e.match(/[\\?&]v=([^&#]*)/)[1],t=0<e.indexOf("list=")?e.match(/[\\?&]list=([^&#]*)/)[1]:null):t=(r=15<e.length?null:e)?null:e,{videoID:r,playlistID:t}};ytp.isDevice=jQuery.browser.mobile,jQuery.mbYTPlayer={name:"jquery.mb.YTPlayer",version:"2.7.5",author:"Matteo Bicocchi",defaults:{containment:"body",ratio:"16/9",videoURL:null,playlistURL:null,startAt:0,stopAt:0,autoPlay:!0,vol:100,addRaster:!1,opacity:1,quality:"default",mute:!1,loop:!0,showControls:!0,showAnnotations:!1,showYTLogo:!0,stopMovieOnClick:!1,realfullscreen:!0,gaTrack:!0,onReady:function(){}},controls:{play:"P",pause:"p",mute:"M",unmute:"A",onlyYT:"O",showSite:"R",ytLogo:"Y"},locationProtocol:"https:",buildPlayer:function(options){return this.each(function(){var YTPlayer=this,$YTPlayer=jQuery(YTPlayer);YTPlayer.loop=0,YTPlayer.opt={},$YTPlayer.addClass("mb_YTVPlayer");var property=$YTPlayer.data("property")&&"string"==typeof $YTPlayer.data("property")?eval("("+$YTPlayer.data("property")+")"):$YTPlayer.data("property");void 0!==property&&"undefined"!=typeof property.vol&&(property.vol=0==property.vol?property.vol=1:property.vol),jQuery.extend(YTPlayer.opt,jQuery.mbYTPlayer.defaults,options,property);var canGoFullscreen=!(jQuery.browser.msie||jQuery.browser.opera||self.location.href!=top.location.href);canGoFullscreen||(YTPlayer.opt.realfullscreen=!1),$YTPlayer.attr("id")||$YTPlayer.attr("id","video_"+(new Date).getTime());var playerID="mbYTP_"+YTPlayer.id;YTPlayer.isAlone=!1,YTPlayer.hasFocus=!0;var videoID=this.opt.videoURL?getYTPVideoID(this.opt.videoURL).videoID:!!$YTPlayer.attr("href")&&getYTPVideoID($YTPlayer.attr("href")).videoID,playlistID=this.opt.videoURL?getYTPVideoID(this.opt.videoURL).playlistID:!!$YTPlayer.attr("href")&&getYTPVideoID($YTPlayer.attr("href")).playlistID;YTPlayer.videoID=videoID,YTPlayer.playlistID=playlistID,YTPlayer.opt.showAnnotations=YTPlayer.opt.showAnnotations?"0":"3";var playerVars={autoplay:0,modestbranding:1,controls:0,showinfo:0,rel:0,enablejsapi:1,version:3,playerapiid:playerID,origin:"*",allowfullscreen:!0,wmode:"transparent",iv_load_policy:YTPlayer.opt.showAnnotations},canPlayHTML5=!1,v=document.createElement("video");v.canPlayType&&(canPlayHTML5=!0),canPlayHTML5&&jQuery.extend(playerVars,{html5:1}),jQuery.browser.msie&&jQuery.browser.version<9&&(this.opt.opacity=1);var playerBox=jQuery("<div/>").attr("id",playerID).addClass("playerBox"),overlay=jQuery("<div/>").css({position:"absolute",top:0,left:0,width:"100%",height:"100%"}).addClass("YTPOverlay");if(YTPlayer.isSelf="self"==YTPlayer.opt.containment,YTPlayer.opt.containment="self"==YTPlayer.opt.containment?jQuery(this):jQuery(YTPlayer.opt.containment),YTPlayer.isBackground="body"==YTPlayer.opt.containment.get(0).tagName.toLowerCase(),!YTPlayer.isBackground||!ytp.backgroundIsInited){if(YTPlayer.opt.containment.is(jQuery(this))?YTPlayer.isPlayer=!0:$YTPlayer.hide(),ytp.isDevice&&YTPlayer.isBackground)return void $YTPlayer.remove();if(YTPlayer.opt.addRaster){var classN="dot"==YTPlayer.opt.addRaster?"raster-dot":"raster",retina=window.retina||1<window.devicePixelRatio;overlay.addClass(retina?classN+" retina":classN)}else overlay.removeClass(function(e,r){var t=r.split(" "),a=[];return jQuery.each(t,function(e,r){/raster-.*/.test(r)&&a.push(r)}),a.push("retina"),a.join(" ")});var wrapper=jQuery("<div/>").addClass("mbYTP_wrapper").attr("id","wrapper_"+playerID);if(wrapper.css({position:"absolute",zIndex:0,minWidth:"100%",minHeight:"100%",left:0,top:0,overflow:"hidden",opacity:0}),playerBox.css({position:"absolute",zIndex:0,width:"100%",height:"100%",top:0,left:0,overflow:"hidden"}),wrapper.append(playerBox),YTPlayer.opt.containment.children().not("script, style").each(function(){"static"==jQuery(this).css("position")&&jQuery(this).css("position","relative")}),YTPlayer.isBackground?(jQuery("body").css({position:"absolute",minWidth:"100%",minHeight:"100%",zIndex:1,boxSizing:"border-box"}),wrapper.css({position:"fixed",top:0,left:0,zIndex:0,webkitTransform:"translateZ(0)"}),$YTPlayer.hide()):"static"==YTPlayer.opt.containment.css("position")&&YTPlayer.opt.containment.css({position:"relative"}),YTPlayer.opt.containment.prepend(wrapper),YTPlayer.wrapper=wrapper,playerBox.css({opacity:1}),ytp.isDevice||(playerBox.after(overlay),YTPlayer.overlay=overlay),YTPlayer.isBackground||overlay.on("mouseenter",function(){$YTPlayer.find(".mb_YTVPBar").addClass("visible")}).on("mouseleave",function(){$YTPlayer.find(".mb_YTVPBar").removeClass("visible")}),ytp.YTAPIReady)setTimeout(function(){jQuery(document).trigger("YTAPIReady")},100);else{jQuery("#YTAPI").remove();var tag=jQuery("<script></script>").attr({src:jQuery.mbYTPlayer.locationProtocol+"//www.youtube.com/player_api?v="+jQuery.mbYTPlayer.version,id:"YTAPI"});jQuery("head title").after(tag)}jQuery(document).on("YTAPIReady",function(){YTPlayer.isBackground&&ytp.backgroundIsInited||YTPlayer.isInit||(YTPlayer.isBackground&&YTPlayer.opt.stopMovieOnClick&&jQuery(document).off("mousedown.ytplayer").on("mousedown,.ytplayer",function(e){var r=jQuery(e.target);(r.is("a")||r.parents().is("a"))&&$YTPlayer.pauseYTP()}),YTPlayer.isBackground&&(ytp.backgroundIsInited=!0),YTPlayer.opt.autoPlay="undefined"==typeof YTPlayer.opt.autoPlay?!!YTPlayer.isBackground:YTPlayer.opt.autoPlay,YTPlayer.opt.vol=YTPlayer.opt.vol?YTPlayer.opt.vol:100,jQuery.mbYTPlayer.getDataFromFeed(YTPlayer),jQuery(YTPlayer).on("YTPChanged",function(){return YTPlayer.isInit?void 0:(YTPlayer.isInit=!0,ytp.isDevice&&!YTPlayer.isBackground?void new YT.Player(playerID,{videoId:YTPlayer.videoID.toString(),height:"100%",width:"100%",videoId:YTPlayer.videoID,events:{onReady:function(e){YTPlayer.player=e.target,playerBox.css({opacity:1}),YTPlayer.wrapper.css({opacity:YTPlayer.opt.opacity}),$YTPlayer.optimizeDisplay()},onStateChange:function(){}}}):void new YT.Player(playerID,{videoId:YTPlayer.videoID.toString(),playerVars:playerVars,events:{onReady:function(e){if(YTPlayer.player=e.target,!YTPlayer.isReady){YTPlayer.isReady=!0,YTPlayer.playerEl=YTPlayer.player.getIframe(),$YTPlayer.optimizeDisplay(),YTPlayer.videoID=videoID,jQuery(window).on("resize.YTP",function(){$YTPlayer.optimizeDisplay()}),YTPlayer.opt.showControls&&jQuery(YTPlayer).buildYTPControls();var r=YTPlayer.opt.startAt?YTPlayer.opt.startAt:1;YTPlayer.player.setVolume(0),jQuery(YTPlayer).muteYTPVolume(),jQuery.mbYTPlayer.checkForState(YTPlayer),YTPlayer.checkForStartAt=setInterval(function(){var e=YTPlayer.player.getVideoLoadedFraction()>r/YTPlayer.player.getDuration();0<YTPlayer.player.getDuration()&&YTPlayer.player.getCurrentTime()>=r&&e?(clearInterval(YTPlayer.checkForStartAt),YTPlayer.player.setVolume(0),jQuery(YTPlayer).muteYTPVolume(),"function"==typeof YTPlayer.opt.onReady&&YTPlayer.opt.onReady(YTPlayer),YTPlayer.opt.mute||jQuery(YTPlayer).unmuteYTP(),jQuery.mbYTPlayer.checkForState(YTPlayer),YTPlayer.player.pauseVideo(),setTimeout(function(){YTPlayer.canTrigger=!0,YTPlayer.opt.autoPlay?($YTPlayer.playYTP(),$YTPlayer.css("background-image","none"),YTPlayer.wrapper.CSSAnimate({opacity:YTPlayer.isAlone?1:YTPlayer.opt.opacity},2e3)):YTPlayer.player.pauseVideo()},100)):(YTPlayer.player.playVideo(),YTPlayer.player.seekTo(r,!0))},jQuery.browser.chrome?1e3:1)}},onStateChange:function(event){if("function"==typeof event.target.getPlayerState){var state=event.target.getPlayerState();if(YTPlayer.state!=state){YTPlayer.state=state;var controls=jQuery("#controlBar_"+YTPlayer.id),data=YTPlayer.opt,eventType;switch(state){case-1:eventType="YTPUnstarted";break;case 0:eventType="YTPEnd",YTPlayer.player.pauseVideo();var startAt=YTPlayer.opt.startAt?YTPlayer.opt.startAt:1;data.loop?(YTPlayer.wrapper.css({opacity:0}),$YTPlayer.playYTP(),YTPlayer.player.seekTo(startAt,!0)):YTPlayer.isBackground||(YTPlayer.player.seekTo(startAt,!0),$YTPlayer.playYTP(),setTimeout(function(){$YTPlayer.pauseYTP()},10)),!data.loop&&YTPlayer.isBackground?YTPlayer.wrapper.CSSAnimate({opacity:0},2e3):data.loop&&YTPlayer.loop++,controls.find(".mb_YTVPPlaypause").html(jQuery.mbYTPlayer.controls.play);break;case 1:eventType="YTPStart",jQuery.browser.chrome||YTPlayer.player.setPlaybackQuality(YTPlayer.opt.quality),controls.find(".mb_YTVPPlaypause").html(jQuery.mbYTPlayer.controls.pause),"undefined"!=typeof _gaq&&eval(YTPlayer.opt.gaTrack)&&_gaq.push(["_trackEvent","YTPlayer","Play",YTPlayer.title||YTPlayer.videoID.toString()]),"undefined"!=typeof ga&&eval(YTPlayer.opt.gaTrack)&&ga("send","event","YTPlayer","play",YTPlayer.title||YTPlayer.videoID.toString());break;case 2:eventType="YTPPause",controls.find(".mb_YTVPPlaypause").html(jQuery.mbYTPlayer.controls.play);break;case 3:eventType="YTPBuffering",jQuery.browser.chrome||YTPlayer.player.setPlaybackQuality(YTPlayer.opt.quality),controls.find(".mb_YTVPPlaypause").html(jQuery.mbYTPlayer.controls.play);break;case 5:eventType="YTPCued"}var YTPevent=jQuery.Event(eventType);YTPevent.time=YTPlayer.player.time,YTPlayer.canTrigger&&jQuery(YTPlayer).trigger(YTPevent)}}},onPlaybackQualityChange:function(e){var r=e.target.getPlaybackQuality(),t=jQuery.Event("YTPQualityChange");t.quality=r,jQuery(YTPlayer).trigger(t)},onError:function(e){150==e.data&&(console.log("Embedding this video is restricted by Youtube."),YTPlayer.isPlayList&&jQuery(YTPlayer).playNext()),2==e.data&&YTPlayer.isPlayList&&jQuery(YTPlayer).playNext(),"function"==typeof YTPlayer.opt.onError&&YTPlayer.opt.onError($YTPlayer,e)}}}))}))})}})},getDataFromFeed:function(o){jQuery.browser.msie&&jQuery.browser.version<9?("auto"==o.opt.ratio?o.opt.ratio="16/9":o.opt.ratio,o.hasData||(o.hasData=!0,setTimeout(function(){jQuery(o).trigger("YTPChanged")},100))):(jQuery.getJSON(jQuery.mbYTPlayer.locationProtocol+"//gdata.youtube.com/feeds/api/videos/"+o.videoID+"?v=2&alt=jsonc",function(e){o.dataReceived=!0,o.videoData=e.data,jQuery(o).trigger("YTPChanged");var r=jQuery.Event("YTPData");for(var t in r.prop={},o.videoData)r.prop[t]=o.videoData[t];if(jQuery(o).trigger(r),o.title=o.videoData.title,"auto"==o.opt.ratio&&(o.opt.ratio=o.videoData.aspectRatio&&"widescreen"===o.videoData.aspectRatio?"16/9":"4/3"),!o.hasData&&(o.hasData=!0,o.isPlayer)){var a=o.videoData.thumbnail.hqDefault;o.opt.containment.css({background:"rgba(0,0,0,0.5) url("+a+") center center",backgroundSize:"cover"})}}),setTimeout(function(){o.dataReceived||o.hasData||(o.hasData=!0,jQuery(o).trigger("YTPChanged"))},1500))},getVideoData:function(){return this.get(0).videoData},getVideoID:function(){return this.get(0).videoID||!1},setVideoQuality:function(e){var r=this.get(0);jQuery.browser.chrome||r.player.setPlaybackQuality(e)},YTPlaylist:function(e,r,t){var a=this.get(0);a.isPlayList=!0,r&&(e=jQuery.shuffle(e)),a.videoID||(a.videos=e,a.videoCounter=0,a.videoLength=e.length,jQuery(a).data("property",e[0]),jQuery(a).mb_YTPlayer()),"function"==typeof t&&jQuery(a).on("YTPChanged",function(){t(a)}),jQuery(a).on("YTPEnd",function(){jQuery(a).playNext()})},playNext:function(){var e=this.get(0);e.videoCounter++,e.videoCounter>=e.videoLength&&(e.videoCounter=0),jQuery(e.playerEl).css({opacity:0}),jQuery(e).changeMovie(e.videos[e.videoCounter])},playPrev:function(){var e=this.get(0);e.videoCounter--,e.videoCounter<0&&(e.videoCounter=e.videoLength-1),jQuery(e.playerEl).css({opacity:0}),jQuery(e).changeMovie(e.videos[e.videoCounter])},changeMovie:function(e){var r=this.get(0);r.opt.startAt=0,r.opt.stopAt=0,r.opt.mute=!0,e&&jQuery.extend(r.opt,e),r.videoID=getYTPVideoID(r.opt.videoURL).videoID,jQuery(r).pauseYTP();var t=jQuery.browser.msie?1e3:0;if(jQuery(r.playerEl).CSSAnimate({opacity:0},t),setTimeout(function(){var e=jQuery.browser.chrome?"default":r.opt.quality;jQuery(r).getPlayer().cueVideoByUrl(encodeURI(jQuery.mbYTPlayer.locationProtocol+"//www.youtube.com/v/"+r.videoID),1,e),jQuery(r).playYTP(),jQuery(r).one("YTPStart",function(){r.wrapper.CSSAnimate({opacity:r.isAlone?1:r.opt.opacity},1e3),jQuery(r.playerEl).CSSAnimate({opacity:1},t),r.opt.startAt&&r.player.seekTo(r.opt.startAt),jQuery.mbYTPlayer.checkForState(r),r.opt.autoPlay||jQuery(r).pauseYTP()}),r.opt.mute?jQuery(r).muteYTPVolume():jQuery(r).unmuteYTP()},t),r.opt.addRaster){var a=window.retina||1<window.devicePixelRatio;r.overlay.addClass(a?"raster retina":"raster")}else r.overlay.removeClass("raster"),r.overlay.removeClass("retina");jQuery("#controlBar_"+r.id).remove(),r.opt.showControls&&jQuery(r).buildYTPControls(),jQuery.mbYTPlayer.getDataFromFeed(r),jQuery(r).optimizeDisplay()},getPlayer:function(){return jQuery(this).get(0).player},playerDestroy:function(){var e=this.get(0);ytp.YTAPIReady=!1,ytp.backgroundIsInited=!1,e.isInit=!1,e.videoID=null,e.wrapper.remove(),jQuery("#controlBar_"+e.id).remove()},fullscreen:function(real){function RunPrefixMethod(e,r){for(var t,a,o=["webkit","moz","ms","o",""],n=0;n<o.length&&!e[t];){if(t=r,""==o[n]&&(t=t.substr(0,1).toLowerCase()+t.substr(1)),"undefined"!=(a=typeof e[t=o[n]+t]))return o=[o[n]],"function"==a?e[t]():e[t];n++}}function launchFullscreen(e){RunPrefixMethod(e,"RequestFullScreen")}function cancelFullscreen(){(RunPrefixMethod(document,"FullScreen")||RunPrefixMethod(document,"IsFullScreen"))&&RunPrefixMethod(document,"CancelFullScreen")}var YTPlayer=this.get(0);void 0===real&&(real=YTPlayer.opt.realfullscreen),real=eval(real);var controls=jQuery("#controlBar_"+YTPlayer.id),fullScreenBtn=controls.find(".mb_OnlyYT"),videoWrapper=YTPlayer.isSelf?YTPlayer.opt.containment:YTPlayer.wrapper;if(real){var fullscreenchange=jQuery.browser.mozilla?"mozfullscreenchange":jQuery.browser.webkit?"webkitfullscreenchange":"fullscreenchange";jQuery(document).off(fullscreenchange).on(fullscreenchange,function(){RunPrefixMethod(document,"IsFullScreen")||RunPrefixMethod(document,"FullScreen")?(jQuery(YTPlayer).setVideoQuality("default"),jQuery(YTPlayer).trigger("YTPFullScreenStart")):(YTPlayer.isAlone=!1,fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT),jQuery(YTPlayer).setVideoQuality(YTPlayer.opt.quality),videoWrapper.removeClass("fullscreen"),videoWrapper.CSSAnimate({opacity:YTPlayer.opt.opacity},500),videoWrapper.css({zIndex:0}),YTPlayer.isBackground?jQuery("body").after(controls):YTPlayer.wrapper.before(controls),jQuery(window).resize(),jQuery(YTPlayer).trigger("YTPFullScreenEnd"))})}YTPlayer.isAlone?(real?cancelFullscreen():(videoWrapper.CSSAnimate({opacity:YTPlayer.opt.opacity},500),videoWrapper.css({zIndex:0})),fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT),YTPlayer.isAlone=!1):(real?(videoWrapper.css({opacity:0}),videoWrapper.addClass("fullscreen"),launchFullscreen(videoWrapper.get(0)),setTimeout(function(){videoWrapper.CSSAnimate({opacity:1},1e3),YTPlayer.wrapper.append(controls),jQuery(YTPlayer).optimizeDisplay(),YTPlayer.player.seekTo(YTPlayer.player.getCurrentTime()+.1,!0)},500)):videoWrapper.css({zIndex:1e4}).CSSAnimate({opacity:1},1e3),fullScreenBtn.html(jQuery.mbYTPlayer.controls.showSite),YTPlayer.isAlone=!0)},playYTP:function(){var e=this.get(0);"undefined"!=typeof e.player&&(jQuery("#controlBar_"+e.id).find(".mb_YTVPPlaypause").html(jQuery.mbYTPlayer.controls.pause),e.player.playVideo(),jQuery(e).on("YTPStart",function(){jQuery(e).css("background-image","none")}))},toggleLoops:function(){var e=this.get(0),r=e.opt;1==r.loop?r.loop=0:(r.startAt?e.player.seekTo(r.startAt):e.player.playVideo(),r.loop=1)},stopYTP:function(){var e=this.get(0);jQuery("#controlBar_"+e.id).find(".mb_YTVPPlaypause").html(jQuery.mbYTPlayer.controls.play),e.player.stopVideo()},pauseYTP:function(){var e=this.get(0);e.opt,jQuery("#controlBar_"+e.id).find(".mb_YTVPPlaypause").html(jQuery.mbYTPlayer.controls.play),e.player.pauseVideo()},seekToYTP:function(e){this.get(0).player.seekTo(e,!0)},setYTPVolume:function(e){var r=this.get(0);e||r.opt.vol||0!=r.player.getVolume()?!e&&0<r.player.getVolume()||e&&r.player.getVolume()==e?jQuery(r).muteYTPVolume():r.opt.vol=e:jQuery(r).unmuteYTP(),r.player.setVolume(r.opt.vol)},muteYTP:function(){var e=this.get(0);e.player.mute(),e.player.setVolume(0),jQuery("#controlBar_"+e.id).find(".mb_YTVPMuteUnmute").html(jQuery.mbYTPlayer.controls.unmute),jQuery(e).addClass("isMuted"),jQuery(e).trigger("YTPMuted")},unmuteYTP:function(){var e=this.get(0);e.player.unMute(),e.player.setVolume(e.opt.vol),jQuery("#controlBar_"+e.id).find(".mb_YTVPMuteUnmute").html(jQuery.mbYTPlayer.controls.mute),jQuery(e).removeClass("isMuted"),jQuery(e).trigger("YTPUnmuted")},manageYTPProgress:function(){var e=this.get(0),r=jQuery("#controlBar_"+e.id),t=r.find(".mb_YTVPProgress"),a=r.find(".mb_YTVPLoaded"),o=r.find(".mb_YTVTime"),n=t.outerWidth(),i=Math.floor(e.player.getCurrentTime()),l=Math.floor(e.player.getDuration()),s=i*n/l,y=0,u=100*e.player.getVideoLoadedFraction();return a.css({left:y,width:u+"%"}),o.css({left:0,width:s}),{totalTime:l,currentTime:i}},buildYTPControls:function(){var YTPlayer=this.get(0),data=YTPlayer.opt;if(data.showYTLogo=data.showYTLogo||data.printUrl,!jQuery("#controlBar_"+YTPlayer.id).length){var controlBar=jQuery("<span/>").attr("id","controlBar_"+YTPlayer.id).addClass("mb_YTVPBar").css({whiteSpace:"noWrap",position:YTPlayer.isBackground?"fixed":"absolute",zIndex:YTPlayer.isBackground?1e4:1e3}).hide(),buttonBar=jQuery("<div/>").addClass("buttonBar"),playpause=jQuery("<span>"+jQuery.mbYTPlayer.controls.play+"</span>").addClass("mb_YTVPPlaypause ytpicon").click(function(){1==YTPlayer.player.getPlayerState()?jQuery(YTPlayer).pauseYTP():jQuery(YTPlayer).playYTP()}),MuteUnmute=jQuery("<span>"+jQuery.mbYTPlayer.controls.mute+"</span>").addClass("mb_YTVPMuteUnmute ytpicon").click(function(){0==YTPlayer.player.getVolume()?jQuery(YTPlayer).unmuteYTP():jQuery(YTPlayer).muteYTP()}),idx=jQuery("<span/>").addClass("mb_YTVPTime"),vURL=data.videoURL?data.videoURL:"";vURL.indexOf("http")<0&&(vURL=jQuery.mbYTPlayer.locationProtocol+"//www.youtube.com/watch?v="+data.videoURL);var movieUrl=jQuery("<span/>").html(jQuery.mbYTPlayer.controls.ytLogo).addClass("mb_YTVPUrl ytpicon").attr("title","view on YouTube").on("click",function(){window.open(vURL,"viewOnYT")}),onlyVideo=jQuery("<span/>").html(jQuery.mbYTPlayer.controls.onlyYT).addClass("mb_OnlyYT ytpicon").on("click",function(){jQuery(YTPlayer).fullscreen(data.realfullscreen)}),progressBar=jQuery("<div/>").addClass("mb_YTVPProgress").css("position","absolute").click(function(e){timeBar.css({width:e.clientX-timeBar.offset().left}),YTPlayer.timeW=e.clientX-timeBar.offset().left,controlBar.find(".mb_YTVPLoaded").css({width:0});var r=Math.floor(YTPlayer.player.getDuration());YTPlayer["goto"]=timeBar.outerWidth()*r/progressBar.outerWidth(),YTPlayer.player.seekTo(parseFloat(YTPlayer["goto"]),!0),controlBar.find(".mb_YTVPLoaded").css({width:0})}),loadedBar=jQuery("<div/>").addClass("mb_YTVPLoaded").css("position","absolute"),timeBar=jQuery("<div/>").addClass("mb_YTVTime").css("position","absolute");progressBar.append(loadedBar).append(timeBar),buttonBar.append(playpause).append(MuteUnmute).append(idx),data.showYTLogo&&buttonBar.append(movieUrl),(YTPlayer.isBackground||eval(YTPlayer.opt.realfullscreen)&&!YTPlayer.isBackground)&&buttonBar.append(onlyVideo),controlBar.append(buttonBar).append(progressBar),YTPlayer.isBackground?jQuery("body").after(controlBar):(controlBar.addClass("inlinePlayer"),YTPlayer.wrapper.before(controlBar)),controlBar.fadeIn()}},checkForState:function(s){var e=s.opt.showControls?10:1e3;clearInterval(s.getState),s.getState=setInterval(function(){var e=jQuery(s).manageYTPProgress(),r=jQuery(s),t=jQuery("#controlBar_"+s.id),a=s.opt,o=s.opt.startAt?s.opt.startAt:1,n=s.opt.stopAt>s.opt.startAt?s.opt.stopAt:0;if(n=n<s.player.getDuration()?n:0,s.player.time!=e.currentTime){var i=jQuery.Event("YTPTime");i.time=s.player.time,jQuery(s).trigger(i)}if(s.player.time=e.currentTime,0==s.player.getVolume()?r.addClass("isMuted"):r.removeClass("isMuted"),s.opt.showControls&&(e.totalTime?t.find(".mb_YTVPTime").html(jQuery.mbYTPlayer.formatTime(e.currentTime)+" / "+jQuery.mbYTPlayer.formatTime(e.totalTime)):t.find(".mb_YTVPTime").html("-- : -- / -- : --")),document.hasFocus()?document.hasFocus()&&!s.hasFocus&&(s.hasFocus=!0,r.playYTP()):1==s.state&&(s.hasFocus=!1,r.pauseYTP()),1==s.player.getPlayerState()&&(parseFloat(s.player.getDuration()-3)<s.player.getCurrentTime()||0<n&&parseFloat(s.player.getCurrentTime())>n)){if(s.isEnded)return;if(s.isEnded=!0,setTimeout(function(){s.isEnded=!1},2e3),s.isPlayList){clearInterval(s.getState);var l=jQuery.Event("YTPEnd");return l.time=s.player.time,void jQuery(s).trigger(l)}a.loop?s.player.seekTo(o,!0):(s.player.pauseVideo(),s.wrapper.CSSAnimate({opacity:0},1e3,function(){var e=jQuery.Event("YTPEnd");if(e.time=s.player.time,jQuery(s).trigger(e),s.player.seekTo(o,!0),!s.isBackground){var r=s.videoData.thumbnail.hqDefault;jQuery(s).css({background:"rgba(0,0,0,0.5) url("+r+") center center",backgroundSize:"cover"})}}))}},e)},formatTime:function(e){var r=Math.floor(e/60),t=Math.floor(e-60*r);return(r<=9?"0"+r:r)+" : "+(t<=9?"0"+t:t)}},jQuery.fn.toggleVolume=function(){var e=this.get(0);if(e)return e.player.isMuted()?(jQuery(e).unmuteYTP(),!0):(jQuery(e).muteYTP(),!1)},jQuery.fn.optimizeDisplay=function(){var e=this.get(0),r=e.opt,t=jQuery(e.playerEl),a={},o=e.wrapper;a.width=o.outerWidth(),a.height=o.outerHeight();var n=24,i=100,l={};l.width=a.width+a.width*n/100,l.height="16/9"==r.ratio?Math.ceil(9*a.width/16):Math.ceil(3*a.width/4),l.marginTop=-(l.height-a.height)/2,l.marginLeft=-a.width*(n/2)/100,l.height<a.height&&(l.height=a.height+a.height*n/100,l.width="16/9"==r.ratio?Math.floor(16*a.height/9):Math.floor(4*a.height/3),l.marginTop=-a.height*(n/2)/100,l.marginLeft=-(l.width-a.width)/2),l.width+=i,l.height+=i,l.marginTop-=i/2,l.marginLeft-=i/2,t.css({width:l.width,height:l.height,marginTop:l.marginTop,marginLeft:l.marginLeft})},jQuery.shuffle=function(e){for(var r=e.slice(),t=r.length,a=t;a--;){var o=parseInt(Math.random()*t),n=r[a];r[a]=r[o],r[o]=n}return r},jQuery.fn.YTPlayer=jQuery.mbYTPlayer.buildPlayer,jQuery.fn.YTPlaylist=jQuery.mbYTPlayer.YTPlaylist,jQuery.fn.playNext=jQuery.mbYTPlayer.playNext,jQuery.fn.playPrev=jQuery.mbYTPlayer.playPrev,jQuery.fn.changeMovie=jQuery.mbYTPlayer.changeMovie,jQuery.fn.getVideoID=jQuery.mbYTPlayer.getVideoID,jQuery.fn.getPlayer=jQuery.mbYTPlayer.getPlayer,jQuery.fn.playerDestroy=jQuery.mbYTPlayer.playerDestroy,jQuery.fn.fullscreen=jQuery.mbYTPlayer.fullscreen,jQuery.fn.buildYTPControls=jQuery.mbYTPlayer.buildYTPControls,jQuery.fn.playYTP=jQuery.mbYTPlayer.playYTP,jQuery.fn.toggleLoops=jQuery.mbYTPlayer.toggleLoops,jQuery.fn.stopYTP=jQuery.mbYTPlayer.stopYTP,jQuery.fn.pauseYTP=jQuery.mbYTPlayer.pauseYTP,jQuery.fn.seekToYTP=jQuery.mbYTPlayer.seekToYTP,jQuery.fn.muteYTP=jQuery.mbYTPlayer.muteYTP,jQuery.fn.unmuteYTP=jQuery.mbYTPlayer.unmuteYTP,jQuery.fn.setYTPVolume=jQuery.mbYTPlayer.setYTPVolume,jQuery.fn.setVideoQuality=jQuery.mbYTPlayer.setVideoQuality,jQuery.fn.manageYTPProgress=jQuery.mbYTPlayer.manageYTPProgress,jQuery.fn.getDataFromFeed=jQuery.mbYTPlayer.getVideoData,jQuery.fn.mb_YTPlayer=jQuery.fn.YTPlayer,jQuery.fn.muteYTPVolume=jQuery.mbYTPlayer.muteYTP,jQuery.fn.unmuteYTPVolume=jQuery.mbYTPlayer.unmuteYTP}(jQuery,ytp);