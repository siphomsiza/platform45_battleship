!function(a,s,t){function i(r,t){if(!s[r]){if(!a[r]){var e="function"==typeof require&&require;if(!t&&e)return e(r,!0);if(u)return u(r,!0);throw new Error("Cannot find module '"+r+"'")}var n=s[r]={exports:{}};a[r][0].call(n.exports,function(t){var e=a[r][1][t];return i(e||t)},n,n.exports)}return s[r].exports}for(var u="function"==typeof require&&require,e=0;e<t.length;e++)i(t[e])}({1:[function(t){Color=t("./color")},{"./color":2}],2:[function(t,e){var h=t("color-convert"),r=t("color-string");e.exports=function(t){return new n(t)};var n=function(t){if(this.values={rgb:[0,0,0],hsl:[0,0,0],hsv:[0,0,0],cmyk:[0,0,0,0],alpha:1},"string"==typeof t)(e=r.getRgba(t))?this.setValues("rgb",e):(e=r.getHsla(t))&&this.setValues("hsl",e);else if("object"==typeof t){var e;void 0!==(e=t).r||void 0!==e.red?this.setValues("rgb",e):void 0!==e.l||void 0!==e.lightness?this.setValues("hsl",e):void 0!==e.v||void 0!==e.value?this.setValues("hsv",e):(void 0!==e.c||void 0!==e.cyan)&&this.setValues("cmyk",e)}};n.prototype={rgb:function(){return this.setSpace("rgb",arguments)},hsl:function(){return this.setSpace("hsl",arguments)},hsv:function(){return this.setSpace("hsv",arguments)},cmyk:function(){return this.setSpace("cmyk",arguments)},rgbArray:function(){return this.values.rgb},hslArray:function(){return this.values.hsl},hsvArray:function(){return this.values.hsv},cmykArray:function(){return this.values.cmyk},rgbaArray:function(){return this.values.rgb.concat([this.values.alpha])},hslaArray:function(){return this.values.hsl.concat([this.values.alpha])},alpha:function(t){return void 0===t?this.values.alpha:(this.setValues("alpha",t),this)},red:function(t){return this.setChannel("rgb",0,t)},green:function(t){return this.setChannel("rgb",1,t)},blue:function(t){return this.setChannel("rgb",2,t)},hue:function(t){return this.setChannel("hsl",0,t)},saturation:function(t){return this.setChannel("hsl",1,t)},lightness:function(t){return this.setChannel("hsl",2,t)},saturationv:function(t){return this.setChannel("hsv",1,t)},value:function(t){return this.setChannel("hsv",2,t)},cyan:function(t){return this.setChannel("cmyk",0,t)},magenta:function(t){return this.setChannel("cmyk",1,t)},yellow:function(t){return this.setChannel("cmyk",2,t)},black:function(t){return this.setChannel("cmyk",3,t)},hexString:function(){return r.hexString(this.values.rgb)},rgbString:function(){return r.rgbString(this.values.rgb,this.values.alpha)},rgbaString:function(){return r.rgbaString(this.values.rgb,this.values.alpha)},percentString:function(){return r.percentString(this.values.rgb,this.values.alpha)},hslString:function(){return r.hslString(this.values.hsl,this.values.alpha)},hslaString:function(){return r.hslaString(this.values.hsl,this.values.alpha)},keyword:function(){return r.keyword(this.values.rgb,this.values.alpha)},luminosity:function(){for(var t=this.values.rgb,e=[],r=0;r<t.length;r++){var n=t[r]/255;e[r]=n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4)}return.2126*e[0]+.7152*e[1]+.0722*e[2]},contrast:function(t){var e=this.luminosity(),r=t.luminosity();return r<e?(e+.05)/(r+.05):(r+.05)/(e+.05)},dark:function(){var t=this.values.rgb;return(299*t[0]+587*t[1]+114*t[2])/1e3<128},light:function(){return!this.dark()},negate:function(){for(var t=[],e=0;e<3;e++)t[e]=255-this.values.rgb[e];return this.setValues("rgb",t),this},lighten:function(t){return this.values.hsl[2]+=this.values.hsl[2]*t,this.setValues("hsl",this.values.hsl),this},darken:function(t){return this.values.hsl[2]-=this.values.hsl[2]*t,this.setValues("hsl",this.values.hsl),this},saturate:function(t){return this.values.hsl[1]+=this.values.hsl[1]*t,this.setValues("hsl",this.values.hsl),this},desaturate:function(t){return this.values.hsl[1]-=this.values.hsl[1]*t,this.setValues("hsl",this.values.hsl),this},greyscale:function(){var t=this.values.rgb,e=.3*t[0]+.59*t[1]+.11*t[2];return this.setValues("rgb",[e,e,e]),this},clearer:function(t){return this.setValues("alpha",this.values.alpha-this.values.alpha*t),this},opaquer:function(t){return this.setValues("alpha",this.values.alpha+this.values.alpha*t),this},rotate:function(t){var e=this.values.hsl[0];return e=(e=(e+t)%360)<0?360+e:e,this.values.hsl[0]=e,this.setValues("hsl",this.values.hsl),this},mix:function(t,e){for(var r=2*(e=1-(null==e?.5:e))-1,n=this.alpha()-t.alpha(),a=((-1==r*n?r:(r+n)/(1+r*n))+1)/2,s=1-a,i=this.rgbArray(),u=t.rgbArray(),l=0;l<i.length;l++)i[l]=i[l]*a+u[l]*s;this.setValues("rgb",i);var h=this.alpha()*e+t.alpha()*(1-e);return this.setValues("alpha",h),this},toJSON:function(){return this.rgb()}},n.prototype.getValues=function(t){for(var e={},r=0;r<t.length;r++)e[t[r]]=this.values[t][r];return 1!=this.values.alpha&&(e.a=this.values.alpha),e},n.prototype.setValues=function(t,e){var r={rgb:["red","green","blue"],hsl:["hue","saturation","lightness"],hsv:["hue","saturation","value"],cmyk:["cyan","magenta","yellow","black"]},n={rgb:[255,255,255],hsl:[360,100,100],hsv:[360,100,100],cmyk:[100,100,100,100]},a=1;if("alpha"==t)a=e;else if(e.length)this.values[t]=e.slice(0,t.length),a=e[t.length];else if(void 0!==e[t[0]]){for(var s=0;s<t.length;s++)this.values[t][s]=e[t[s]];a=e.a}else if(void 0!==e[r[t][0]]){var i=r[t];for(s=0;s<t.length;s++)this.values[t][s]=e[i[s]];a=e.alpha}if(this.values.alpha=Math.max(0,Math.min(1,void 0!==a?a:this.values.alpha)),"alpha"!=t){for(var u in r){u!=t&&(this.values[u]=h[t][u](this.values[t]));for(s=0;s<u.length;s++){var l=Math.max(0,Math.min(n[u][s],this.values[u][s]));this.values[u][s]=Math.round(l)}}return!0}},n.prototype.setSpace=function(t,e){var r=e[0];return void 0===r?this.getValues(t):("number"==typeof r&&(r=Array.prototype.slice.call(e)),this.setValues(t,r),this)},n.prototype.setChannel=function(t,e,r){return void 0===r?this.values[t][e]:(this.values[t][e]=r,this.setValues(t,this.values[t]),this)}},{"color-convert":3,"color-string":4}],3:[function(t,e,r){var a=t("./conversions");r={};for(var n in e.exports=r,a){r[n+"Raw"]=function(e){return function(t){return"number"==typeof t&&(t=Array.prototype.slice.call(arguments)),a[e](t)}}(n);var s=/(\w+)2(\w+)/.exec(n),i=s[1],u=s[2];r[i]=r[i]||{},r[i][u]=r[n]=function(n){return function(t){"number"==typeof t&&(t=Array.prototype.slice.call(arguments));var e=a[n](t);if("string"==typeof e||void 0===e)return e;for(var r=0;r<e.length;r++)e[r]=Math.round(e[r]);return e}}(n)}},{"./conversions":5}],5:[function(t,e){function r(t){var e,r,n=t[0]/255,a=t[1]/255,s=t[2]/255,i=Math.min(n,a,s),u=Math.max(n,a,s),l=u-i;return u==i?e=0:n==u?e=(a-s)/l:a==u?e=2+(s-n)/l:s==u&&(e=4+(n-a)/l),(e=Math.min(60*e,360))<0&&(e+=360),r=(i+u)/2,[e,100*(u==i?0:r<=.5?l/(u+i):l/(2-u-i)),100*r]}function n(t){var e,r,n=t[0],a=t[1],s=t[2],i=Math.min(n,a,s),u=Math.max(n,a,s),l=u-i;return r=0==u?0:l/u*1e3/10,u==i?e=0:n==u?e=(a-s)/l:a==u?e=2+(s-n)/l:s==u&&(e=4+(n-a)/l),(e=Math.min(60*e,360))<0&&(e+=360),[e,r,u/255*1e3/10]}function a(t){var e,r=t[0]/255,n=t[1]/255,a=t[2]/255;return[100*((1-r-(e=Math.min(1-r,1-n,1-a)))/(1-e)),100*((1-n-e)/(1-e)),100*((1-a-e)/(1-e)),100*e]}function s(t){return C[JSON.stringify(t)]}function i(t){var e=t[0]/255,r=t[1]/255,n=t[2]/255;return[100*(.4124*(e=.04045<e?Math.pow((e+.055)/1.055,2.4):e/12.92)+.3576*(r=.04045<r?Math.pow((r+.055)/1.055,2.4):r/12.92)+.1805*(n=.04045<n?Math.pow((n+.055)/1.055,2.4):n/12.92)),100*(.2126*e+.7152*r+.0722*n),100*(.0193*e+.1192*r+.9505*n)]}function u(t){var e=i(t),r=e[0],n=e[1],a=e[2];return n/=100,a/=108.883,r=.008856<(r/=95.047)?Math.pow(r,1/3):7.787*r+16/116,[116*(n=.008856<n?Math.pow(n,1/3):7.787*n+16/116)-16,500*(r-n),200*(n-(a=.008856<a?Math.pow(a,1/3):7.787*a+16/116))]}function l(t){var e,r,n,a,s,i=t[0]/360,u=t[1]/100,l=t[2]/100;if(0==u)return[s=255*l,s,s];e=2*l-(r=l<.5?l*(1+u):l+u-l*u),a=[0,0,0];for(var h=0;h<3;h++)(n=i+1/3*-(h-1))<0&&n++,1<n&&n--,s=6*n<1?e+6*(r-e)*n:2*n<1?r:3*n<2?e+6*(r-e)*(2/3-n):e,a[h]=255*s;return a}function h(t){var e=t[0],r=t[1]/100,n=t[2]/100;return 2*(r*=(n*=2)<=1?n:2-n)/(n+r),[e,100*r,100*((n+r)/2)]}function o(t){return a(l(t))}function c(t){return s(l(t))}function g(t){var e=t[0]/60,r=t[1]/100,n=t[2]/100,a=Math.floor(e)%6,s=e-Math.floor(e),i=255*n*(1-r),u=255*n*(1-r*s),l=255*n*(1-r*(1-s));n*=255;switch(a){case 0:return[n,l,i];case 1:return[u,n,i];case 2:return[i,n,l];case 3:return[i,u,n];case 4:return[l,i,n];case 5:return[n,i,u]}}function v(t){var e,r,n=t[0],a=t[1]/100,s=t[2]/100;return e=a*s,[n,100*(e/=(r=(2-a)*s)<=1?r:2-r),100*(r/=2)]}function f(t){return a(g(t))}function d(t){return s(g(t))}function p(t){var e=t[0]/100,r=t[1]/100,n=t[2]/100,a=t[3]/100;return[255*(1-Math.min(1,e*(1-a)+a)),255*(1-Math.min(1,r*(1-a)+a)),255*(1-Math.min(1,n*(1-a)+a))]}function y(t){return r(p(t))}function b(t){return n(p(t))}function m(t){return s(p(t))}function k(t){var e,r,n,a=t[0]/100,s=t[1]/100,i=t[2]/100;return r=-.9689*a+1.8758*s+.0415*i,n=.0557*a+-.204*s+1.057*i,[255*(e=(e=.0031308<(e=3.2406*a+-1.5372*s+-.4986*i)?1.055*Math.pow(e,1/2.4)-.055:e*=12.92)<0?0:e),255*(r=(r=.0031308<r?1.055*Math.pow(r,1/2.4)-.055:r*=12.92)<0?0:r),255*(n=(n=.0031308<n?1.055*Math.pow(n,1/2.4)-.055:n*=12.92)<0?0:n)]}function w(t){return x[t]}function M(t){return r(w(t))}function S(t){return n(w(t))}function V(t){return a(w(t))}e.exports={rgb2hsl:r,rgb2hsv:n,rgb2cmyk:a,rgb2keyword:s,rgb2xyz:i,rgb2lab:u,hsl2rgb:l,hsl2hsv:h,hsl2cmyk:o,hsl2keyword:c,hsv2rgb:g,hsv2hsl:v,hsv2cmyk:f,hsv2keyword:d,cmyk2rgb:p,cmyk2hsl:y,cmyk2hsv:b,cmyk2keyword:m,keyword2rgb:w,keyword2hsl:M,keyword2hsv:S,keyword2cmyk:V,xyz2rgb:k};var x={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},C={};for(var q in x)C[JSON.stringify(x[q])]=q},{}],4:[function(t,e){function r(t){if(t){var e=/^#([a-fA-F0-9]{3})$/,r=/^#([a-fA-F0-9]{6})$/,n=/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([\d\.]+)\s*)?\)$/,a=/^rgba?\(\s*([\d\.]+)\%\s*,\s*([\d\.]+)\%\s*,\s*([\d\.]+)\%\s*(?:,\s*([\d\.]+)\s*)?\)$/,s=/(\D+)/,i=[0,0,0],u=1,l=t.match(e);if(l){l=l[1];for(var h=0;h<i.length;h++)i[h]=parseInt(l[h]+l[h],16)}else if(l=t.match(r)){l=l[1];for(h=0;h<i.length;h++)i[h]=parseInt(l.slice(2*h,2*h+2),16)}else if(l=t.match(n)){for(h=0;h<i.length;h++)i[h]=parseInt(l[h+1]);u=parseFloat(l[4])}else if(l=t.match(a)){for(h=0;h<i.length;h++)i[h]=Math.round(2.55*parseFloat(l[h+1]));u=parseFloat(l[4])}else if(l=t.match(s)){if("transparent"==l[1])return[0,0,0,0];if(!(i=y.keyword2rgb(l[1])))return}for(h=0;h<i.length;h++)i[h]=d(i[h],0,255);return u=u||0==u?d(u,0,1):1,i.push(u),i}}function n(t){if(t){var e=/^hsla?\(\s*(\d+)\s*,\s*([\d\.]+)%\s*,\s*([\d\.]+)%\s*(?:,\s*([\d\.]+)\s*)?\)/,r=t.match(e);if(r)return[d(parseInt(r[1]),0,360),d(parseFloat(r[2]),0,100),d(parseFloat(r[3]),0,100),d(parseFloat(r[4])||1,0,1)]}}function a(t){return r(t).slice(0,3)}function s(t){return n(t).slice(0,3)}function i(t){var e=r(t);return e?e[3]:(e=n(t))?e[3]:void 0}function u(t){return"#"+p(t[0])+p(t[1])+p(t[2])}function l(t,e){return e<1||t[3]&&t[3]<1?h(t,e):"rgb("+t[0]+", "+t[1]+", "+t[2]+")"}function h(t,e){return void 0===e&&(e=void 0!==t[3]?t[3]:1),"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+e+")"}function o(t,e){return e<1||t[3]&&t[3]<1?c(t,e):"rgb("+Math.round(t[0]/255*100)+"%, "+Math.round(t[1]/255*100)+"%, "+Math.round(t[2]/255*100)+"%)"}function c(t,e){return"rgba("+Math.round(t[0]/255*100)+"%, "+Math.round(t[1]/255*100)+"%, "+Math.round(t[2]/255*100)+"%, "+(e||t[3]||1)+")"}function g(t,e){return e<1||t[3]&&t[3]<1?v(t,e):"hsl("+t[0]+", "+t[1]+"%, "+t[2]+"%)"}function v(t,e){return"hsla("+t[0]+", "+t[1]+"%, "+t[2]+"%, "+(e||t[3]||1)+")"}function f(t){return y.rgb2keyword(t.slice(0,3))}function d(t,e,r){return Math.min(Math.max(e,t),r)}function p(t){var e=t.toString(16).toUpperCase();return e.length<2?"0"+e:e}var y=t("color-convert");e.exports={getRgba:r,getHsla:n,getRgb:a,getHsl:s,getAlpha:i,hexString:u,rgbString:l,rgbaString:h,percentString:o,percentaString:c,hslString:g,hslaString:v,keyword:f}},{"color-convert":3}]},{},[1]);