!function(o){o.color={},o.color.make=function(r,e,a,n){var t={};return t.r=r||0,t.g=e||0,t.b=a||0,t.a=null!=n?n:1,t.add=function(r,e){for(var a=0;a<r.length;++a)t[r.charAt(a)]+=e;return t.normalize()},t.scale=function(r,e){for(var a=0;a<r.length;++a)t[r.charAt(a)]*=e;return t.normalize()},t.toString=function(){return 1<=t.a?"rgb("+[t.r,t.g,t.b].join(",")+")":"rgba("+[t.r,t.g,t.b,t.a].join(",")+")"},t.normalize=function(){function r(r,e,a){return e<r?r:a<e?a:e}return t.r=r(0,parseInt(t.r),255),t.g=r(0,parseInt(t.g),255),t.b=r(0,parseInt(t.b),255),t.a=r(0,t.a,1),t},t.clone=function(){return o.color.make(t.r,t.b,t.g,t.a)},t.normalize()},o.color.extract=function(r,e){var a;do{if(""!=(a=r.css(e).toLowerCase())&&"transparent"!=a)break;r=r.parent()}while(r.length&&!o.nodeName(r.get(0),"body"));return"rgba(0, 0, 0, 0)"==a&&(a="transparent"),o.color.parse(a)},o.color.parse=function(r){var e,a=o.color.make;if(e=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(r))return a(parseInt(e[1],10),parseInt(e[2],10),parseInt(e[3],10));if(e=/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(r))return a(parseInt(e[1],10),parseInt(e[2],10),parseInt(e[3],10),parseFloat(e[4]));if(e=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(r))return a(2.55*parseFloat(e[1]),2.55*parseFloat(e[2]),2.55*parseFloat(e[3]));if(e=/rgba\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(r))return a(2.55*parseFloat(e[1]),2.55*parseFloat(e[2]),2.55*parseFloat(e[3]),parseFloat(e[4]));if(e=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(r))return a(parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16));if(e=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(r))return a(parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16));var n=o.trim(r).toLowerCase();return"transparent"==n?a(255,255,255,0):a((e=t[n]||[0,0,0])[0],e[1],e[2])};var t={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0]}}(jQuery);