!function(h){h.effects.effect.transfer=function(t,e){var i=h(this),o=h(t.to),n="fixed"===o.css("position"),s=h("body"),f=n?s.scrollTop():0,d=n?s.scrollLeft():0,a=o.offset(),r={top:a.top-f,left:a.left-d,height:o.innerHeight(),width:o.innerWidth()},c=i.offset(),l=h("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(t.className).css({top:c.top-f,left:c.left-d,height:i.innerHeight(),width:i.innerWidth(),position:n?"fixed":"absolute"}).animate(r,t.duration,t.easing,function(){l.remove(),e()})}}(jQuery);