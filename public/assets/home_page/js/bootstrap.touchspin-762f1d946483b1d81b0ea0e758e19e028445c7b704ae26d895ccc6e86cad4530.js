!function(C){"use strict";C.fn.TouchSpin=function(N){return this.each(function(){function t(){y.data("alreadyinitialized")||(y.data("alreadyinitialized",!0),y.is("input")?(o(),u(),n(),e(),a(),i()):console.log("Must be an input."))}function o(){d=C.extend({min:0,max:100,step:1,decimals:0,stepinterval:100,stepintervaldelay:500,prefix:"",postfix:"",booster:!0,boostat:10,maxboostedstep:!1,mousewheel:!0},N)}function n(){y.data("initvalue",y.val()).val(Number(y.val()).toFixed(d.decimals));var t='<div class="input-group bootstrap-touchspin" style=""><span class="input-group-btn"><button class="btn btn-default bootstrap-touchspin-down" type="button">-</button></span><span class="input-group-addon bootstrap-touchspin-prefix">'+d.prefix+'</span><span class="input-group-addon bootstrap-touchspin-postfix">'+d.postfix+'</span><span class="input-group-btn"><button class="btn btn-default bootstrap-touchspin-up" type="button">+</button></span></div>';h=C(t).insertBefore(y),C(".bootstrap-touchspin-prefix",h).after(y),C("<style type='text/css'>.bootstrap-touchspin-prefix:empty,.bootstrap-touchspin-postfix:empty{display:none;}</style>").appendTo("head"),y.addClass("form-control")}function e(){v={down:C(".bootstrap-touchspin-down",h),up:C(".bootstrap-touchspin-up",h),input:C("input",h),prefix:C(".bootstrap-touchspin-prefix",h),postfix:C(".bootstrap-touchspin-postfix",h)}}function a(){y.on("keydown",function(t){var o=t.keyCode||t.which;38===o?("up"!==k&&(s(),l()),t.preventDefault()):40===o&&("down"!==k&&(r(),c()),t.preventDefault())}),y.on("keyup",function(t){var o=t.keyCode||t.which;38===o?f():40===o?f():u()}),v.down.on("keydown",function(t){var o=t.keyCode||t.which;32!==o&&13!==o||("down"!==k&&(r(),c()),t.preventDefault())}),v.down.on("keyup",function(t){var o=t.keyCode||t.which;32!==o&&13!==o||f()}),v.up.on("keydown",function(t){var o=t.keyCode||t.which;32!==o&&13!==o||("up"!==k&&(s(),l()),t.preventDefault())}),v.up.on("keyup",function(t){var o=t.keyCode||t.which;32!==o&&13!==o||f()}),v.down.on("mousedown touchstart",function(t){r(),c(),t.preventDefault(),t.stopPropagation()}),v.up.on("mousedown touchstart",function(t){s(),l(),t.preventDefault(),t.stopPropagation()}),v.up.on("mouseout touchleave touchend touchcancel",function(t){k&&(t.stopPropagation(),f())}),v.down.on("mouseout touchleave touchend touchcancel",function(t){k&&(t.stopPropagation(),f())}),v.down.on("mousemove touchmove",function(t){k&&(t.stopPropagation(),t.preventDefault())}),v.up.on("mousemove touchmove",function(t){k&&(t.stopPropagation(),t.preventDefault())}),C(document).on("mouseup touchend touchcancel",function(t){k&&(t.preventDefault(),f())}),C(document).on("mousemove touchmove scroll scrollstart",function(t){k&&(t.preventDefault(),f())}),d.mousewheel&&y.bind("mousewheel DOMMouseScroll",function(t){var o=t.originalEvent.wheelDelta||-t.originalEvent.detail;t.stopPropagation(),t.preventDefault(),o<0?r():s()})}function i(){y.on("touchspin.uponce",function(){f(),s()}),y.on("touchspin.downonce",function(){f(),r()}),y.on("touchspin.startupspin",function(){l()}),y.on("touchspin.startdownspin",function(){c()}),y.on("touchspin.stopspin",function(){f()})}function u(){var t,o,n;t=y.val(),0<d.decimals&&"."===t||(o=parseFloat(t),isNaN(o)&&(o=0),(n=o).toString()!==t&&(n=o),o<d.min&&(n=d.min),o>d.max&&(n=d.max),Number(t).toString()!==n.toString()&&(y.val(n),y.trigger("change")))}function p(){if(d.booster){var t=Math.pow(2,Math.floor(D/d.boostat))*d.step;return d.maxboostedstep&&t>d.maxboostedstep&&(t=d.maxboostedstep,m=Math.round(m/t*t)),Math.max(d.step,t)}return d.step}function s(){m=parseFloat(v.input.val()),isNaN(m)&&(m=0);var t=m,o=p();(m+=o)>d.max&&(f(),m=d.max,y.trigger("touchspin.max")),v.input.val(Number(m).toFixed(d.decimals)),t!==m&&y.trigger("change")}function r(){m=parseFloat(v.input.val()),isNaN(m)&&(m=0);var t=m,o=p();(m-=o)<d.min&&(f(),m=d.min,y.trigger("touchspin.min")),v.input.val(m.toFixed(d.decimals)),t!==m&&y.trigger("change")}function c(){f(),D=0,k="down",w=setTimeout(function(){b=setInterval(function(){D++,r()},d.stepinterval)},d.stepintervaldelay)}function l(){f(),D=0,k="up",x=setTimeout(function(){g=setInterval(function(){D++,s()},d.stepinterval)},d.stepintervaldelay)}function f(){clearTimeout(w),clearTimeout(x),clearInterval(b),clearInterval(g),D=0,k=!1}var d,h,v,m,b,g,w,x,y=C(this),D=0,k=!1;t()})}}(jQuery);