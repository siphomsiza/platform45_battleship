!function(l){l.effects.effect.puff=function(t,e){var o=l(this),i=l.effects.setMode(o,t.mode||"hide"),r="hide"===i,h=parseInt(t.percent,10)||150,f=h/100,c={height:o.height(),width:o.width(),outerHeight:o.outerHeight(),outerWidth:o.outerWidth()};l.extend(t,{effect:"scale",queue:!1,fade:!0,mode:i,complete:e,percent:r?h:100,from:r?c:{height:c.height*f,width:c.width*f,outerHeight:c.outerHeight*f,outerWidth:c.outerWidth*f}}),o.effect(t)},l.effects.effect.scale=function(t,e){var o=l(this),i=l.extend(!0,{},t),r=l.effects.setMode(o,t.mode||"effect"),h=parseInt(t.percent,10)||(0===parseInt(t.percent,10)?0:"hide"===r?0:100),f=t.direction||"both",c=t.origin,s={height:o.height(),width:o.width(),outerHeight:o.outerHeight(),outerWidth:o.outerWidth()},d={y:"horizontal"!==f?h/100:1,x:"vertical"!==f?h/100:1};i.effect="size",i.queue=!1,i.complete=e,"effect"!==r&&(i.origin=c||["middle","center"],i.restore=!0),i.from=t.from||("show"===r?{height:0,width:0,outerHeight:0,outerWidth:0}:s),i.to={height:s.height*d.y,width:s.width*d.x,outerHeight:s.outerHeight*d.y,outerWidth:s.outerWidth*d.x},i.fade&&("show"===r&&(i.from.opacity=0,i.to.opacity=1),"hide"===r&&(i.from.opacity=1,i.to.opacity=0)),o.effect(i)},l.effects.effect.size=function(o,t){var e,i,r,h=l(this),f=["position","top","bottom","left","right","width","height","overflow","opacity"],c=["position","top","bottom","left","right","overflow","opacity"],s=["width","height","overflow"],d=["fontSize"],n=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],a=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],g=l.effects.setMode(h,o.mode||"effect"),m=o.restore||"effect"!==g,u=o.scale||"both",p=o.origin||["middle","center"],w=h.css("position"),y=m?f:c,W={height:0,width:0,outerHeight:0,outerWidth:0};"show"===g&&h.show(),e={height:h.height(),width:h.width(),outerHeight:h.outerHeight(),outerWidth:h.outerWidth()},"toggle"===o.mode&&"show"===g?(h.from=o.to||W,h.to=o.from||e):(h.from=o.from||("show"===g?W:e),h.to=o.to||("hide"===g?W:e)),r={from:{y:h.from.height/e.height,x:h.from.width/e.width},to:{y:h.to.height/e.height,x:h.to.width/e.width}},"box"!==u&&"both"!==u||(r.from.y!==r.to.y&&(y=y.concat(n),h.from=l.effects.setTransition(h,n,r.from.y,h.from),h.to=l.effects.setTransition(h,n,r.to.y,h.to)),r.from.x!==r.to.x&&(y=y.concat(a),h.from=l.effects.setTransition(h,a,r.from.x,h.from),h.to=l.effects.setTransition(h,a,r.to.x,h.to))),"content"!==u&&"both"!==u||r.from.y!==r.to.y&&(y=y.concat(d).concat(s),h.from=l.effects.setTransition(h,d,r.from.y,h.from),h.to=l.effects.setTransition(h,d,r.to.y,h.to)),l.effects.save(h,y),h.show(),l.effects.createWrapper(h),h.css("overflow","hidden").css(h.from),p&&(i=l.effects.getBaseline(p,e),h.from.top=(e.outerHeight-h.outerHeight())*i.y,h.from.left=(e.outerWidth-h.outerWidth())*i.x,h.to.top=(e.outerHeight-h.to.outerHeight)*i.y,h.to.left=(e.outerWidth-h.to.outerWidth)*i.x),h.css(h.from),"content"!==u&&"both"!==u||(n=n.concat(["marginTop","marginBottom"]).concat(d),a=a.concat(["marginLeft","marginRight"]),s=f.concat(n).concat(a),h.find("*[width]").each(function(){var t=l(this),e={height:t.height(),width:t.width(),outerHeight:t.outerHeight(),outerWidth:t.outerWidth()};m&&l.effects.save(t,s),t.from={height:e.height*r.from.y,width:e.width*r.from.x,outerHeight:e.outerHeight*r.from.y,outerWidth:e.outerWidth*r.from.x},t.to={height:e.height*r.to.y,width:e.width*r.to.x,outerHeight:e.height*r.to.y,outerWidth:e.width*r.to.x},r.from.y!==r.to.y&&(t.from=l.effects.setTransition(t,n,r.from.y,t.from),t.to=l.effects.setTransition(t,n,r.to.y,t.to)),r.from.x!==r.to.x&&(t.from=l.effects.setTransition(t,a,r.from.x,t.from),t.to=l.effects.setTransition(t,a,r.to.x,t.to)),t.css(t.from),t.animate(t.to,o.duration,o.easing,function(){m&&l.effects.restore(t,s)})})),h.animate(h.to,{queue:!1,duration:o.duration,easing:o.easing,complete:function(){0===h.to.opacity&&h.css("opacity",h.from.opacity),"hide"===g&&h.hide(),l.effects.restore(h,y),m||("static"===w?h.css({position:"relative",top:h.to.top,left:h.to.left}):l.each(["top","left"],function(r,t){h.css(t,function(t,e){var o=parseInt(e,10),i=r?h.to.left:h.to.top;return"auto"===e?i+"px":o+i+"px"})})),l.effects.removeWrapper(h),t()}})}}(jQuery);