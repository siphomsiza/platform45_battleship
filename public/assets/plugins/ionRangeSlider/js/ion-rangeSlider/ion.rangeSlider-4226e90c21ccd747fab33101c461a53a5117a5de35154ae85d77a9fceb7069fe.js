!function(et,ot,st,t){"use strict";var at,e,o,rt=0,it=(e=t.userAgent,o=/msie\s\d+/i,0<e.search(o)&&o.exec(e).toString().split(" ")[1]<9),nt="ontouchstart"in st||0<t.msMaxTouchPoints,lt=function(t){return"Number"==typeof t||(t=parseFloat(t)),isNaN(t)?null:t},s={init:function(K){var U='<span class="irs"><span class="irs-line"><span class="irs-line-left"></span><span class="irs-line-mid"></span><span class="irs-line-right"></span></span><span class="irs-min">0</span><span class="irs-max">1</span><span class="irs-from">0</span><span class="irs-to">0</span><span class="irs-single">0</span></span><span class="irs-grid"></span>',Y='<span class="irs-slider single"></span>',Z='<span class="irs-diapason"></span><span class="irs-slider from"></span><span class="irs-slider to"></span>',tt='<span class="irs-disable-mask"></span>';return this.each(function(){var f=et.extend({min:null,max:null,from:null,to:null,type:"single",step:null,prefix:"",postfix:"",maxPostfix:"",hasGrid:!1,hideMinMax:!1,hideFromTo:!1,prettify:!0,disable:!1,values:null,onChange:null,onLoad:null,onFinish:null},K),u=et(this),e=this,d=!1,t=null;if(!u.data("isActive")){u.data("isActive",!0),rt+=1,this.pluginCount=rt,u.prop("value")&&(t=u.prop("value").split(";")),"single"===f.type?t&&1<t.length?("number"!=typeof f.min?f.min=parseFloat(t[0]):"number"!=typeof f.from&&(f.from=parseFloat(t[0])),"number"!=typeof f.max&&(f.max=parseFloat(t[1]))):t&&1===t.length&&"number"!=typeof f.from&&(f.from=parseFloat(t[0])):"double"===f.type&&(t&&1<t.length?("number"!=typeof f.min?f.min=parseFloat(t[0]):"number"!=typeof f.from&&(f.from=parseFloat(t[0])),"number"!=typeof f.max?f.max=parseFloat(t[1]):"number"!=typeof f.to&&(f.to=parseFloat(t[1]))):t&&1===t.length&&("number"!=typeof f.min?f.min=parseFloat(t[0]):"number"!=typeof f.from&&(f.from=parseFloat(t[0])))),"number"==typeof u.data("min")&&(f.min=parseFloat(u.data("min"))),"number"==typeof u.data("max")&&(f.max=parseFloat(u.data("max"))),"number"==typeof u.data("from")&&(f.from=parseFloat(u.data("from"))),"number"==typeof u.data("to")&&(f.to=parseFloat(u.data("to"))),u.data("step")&&(f.step=parseFloat(u.data("step"))),u.data("type")&&(f.type=u.data("type")),u.data("prefix")&&(f.prefix=u.data("prefix")),u.data("postfix")&&(f.postfix=u.data("postfix")),u.data("maxpostfix")&&(f.maxPostfix=u.data("maxpostfix")),u.data("hasgrid")&&(f.hasGrid=u.data("hasgrid")),u.data("hideminmax")&&(f.hideMinMax=u.data("hideminmax")),u.data("hidefromto")&&(f.hideFromTo=u.data("hidefromto")),u.data("prettify")&&(f.prettify=u.data("prettify")),u.data("disable")&&(f.disable=u.data("disable")),u.data("values")&&(f.values=u.data("values").split(",")),f.min=lt(f.min),f.min||0===f.min||(f.min=10),f.max=lt(f.max),f.max||0===f.max||(f.max=100),"[object Array]"!==Object.prototype.toString.call(f.values)&&(f.values=null),f.values&&0<f.values.length&&(f.min=0,f.max=f.values.length-1,f.step=1,d=!0),f.from=lt(f.from),f.from||0===f.from||(f.from=f.min),f.to=lt(f.to),f.to||0===f.to||(f.to=f.max),f.step=lt(f.step),f.step||(f.step=1),f.from<f.min&&(f.from=f.min),f.from>f.max&&(f.from=f.min),f.to<f.min&&(f.to=f.max),f.to>f.max&&(f.to=f.max),"double"===f.type&&(f.from>f.to&&(f.from=f.to),f.to<f.from&&(f.to=f.from));var x=function(t){var e=t.toString();return f.prettify&&(e=e.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g,"$1 ")),e},o='<span class="irs" id="irs-'+this.pluginCount+'"></span>';u[0].style.display="none",u.before(o);var r,h,y,c,b,g,a,i,n,l,p,m,v=u.prev(),s=et(ot.body),N=et(st),X=!1,C=!1,M=!0,P={},F=0,w=0,_=0,I=0,k=0,A=0,D=0,S=0,T=0,W=0,j=0;parseInt(f.step,10)!==parseFloat(f.step)&&(j=f.step.toString().split(".")[1],j=Math.pow(10,j.length)),this.updateData=function(t){M=!0,f=et.extend(f,t),E()},this.removeSlider=function(){v.find("*").off(),N.off("mouseup.irs"+e.pluginCount),s.off("mouseup.irs"+e.pluginCount),s.off("mousemove.irs"+e.pluginCount),v.html("").remove(),u.data("isActive",!1),u.show()};var E=function(){v.find("*").off(),N.off("mouseup.irs"+e.pluginCount),s.off("mouseup.irs"+e.pluginCount),s.off("mousemove.irs"+e.pluginCount),v.html(""),G()},G=function(){v.html(U),r=v.find(".irs"),h=r.find(".irs-min"),y=r.find(".irs-max"),c=r.find(".irs-from"),b=r.find(".irs-to"),g=r.find(".irs-single"),m=v.find(".irs-grid"),f.hideMinMax&&(h[0].style.display="none",y[0].style.display="none",_=w=0),f.hideFromTo&&(c[0].style.display="none",b[0].style.display="none",g[0].style.display="none"),f.hideMinMax||(f.values?(h.html(f.prefix+f.values[0]+f.postfix),y.html(f.prefix+f.values[f.values.length-1]+f.maxPostfix+f.postfix)):(h.html(f.prefix+x(f.min)+f.postfix),y.html(f.prefix+x(f.max)+f.maxPostfix+f.postfix)),w=h.outerWidth(),_=y.outerWidth()),"single"===f.type?(r.append(Y),(a=r.find(".single")).on("mousedown",function(t){t.preventDefault(),t.stopPropagation(),V(t,et(this),null),C=X=!0,at=e.pluginCount,it&&et("*").prop("unselectable",!0)}),nt&&a.on("touchstart",function(t){t.preventDefault(),t.stopPropagation(),V(t.originalEvent.touches[0],et(this),null),C=X=!0,at=e.pluginCount})):"double"===f.type&&(r.append(Z),i=r.find(".from"),n=r.find(".to"),p=r.find(".irs-diapason"),Q(),i.on("mousedown",function(t){t.preventDefault(),t.stopPropagation(),et(this).addClass("last"),n.removeClass("last"),V(t,et(this),"from"),C=X=!0,at=e.pluginCount,it&&et("*").prop("unselectable",!0)}),n.on("mousedown",function(t){t.preventDefault(),t.stopPropagation(),et(this).addClass("last"),i.removeClass("last"),V(t,et(this),"to"),C=X=!0,at=e.pluginCount,it&&et("*").prop("unselectable",!0)}),nt&&(i.on("touchstart",function(t){t.preventDefault(),t.stopPropagation(),et(this).addClass("last"),n.removeClass("last"),V(t.originalEvent.touches[0],et(this),"from"),C=X=!0,at=e.pluginCount}),n.on("touchstart",function(t){t.preventDefault(),t.stopPropagation(),et(this).addClass("last"),i.removeClass("last"),V(t.originalEvent.touches[0],et(this),"to"),C=X=!0,at=e.pluginCount})),f.to===f.max&&i.addClass("last"));var t=function(){at===e.pluginCount&&X&&(X=C=!1,l.removeAttr("id"),l=null,"double"===f.type&&Q(),O(),it&&et("*").prop("unselectable",!1))};N.on("mouseup.irs"+e.pluginCount,function(){t()}),s.on("mousemove.irs"+e.pluginCount,function(t){X&&(F=t.pageX,R())}),v.on("mousedown",function(){at=e.pluginCount}),v.on("mouseup",function(t){at===e.pluginCount&&(X||f.disable||q(t.pageX))}),nt&&(N.on("touchend",function(){X&&(X=C=!1,l.removeAttr("id"),l=null,"double"===f.type&&Q(),O())}),N.on("touchmove",function(t){X&&(F=t.originalEvent.touches[0].pageX,R())})),L(),$(),f.hasGrid&&B(),f.disable?H():J()},L=function(){I=r.width(),A=a?a.width():i.width(),k=I-A},V=function(t,e,o){L(),M=!1,(l=e).attr("id","irs-active-slider");var s=l.offset().left,a=t.pageX-s;W=s+a-l.position().left,"single"===f.type?D=r.width()-A:"double"===f.type&&("from"===o?(S=0,T=parseInt(n.css("left"),10)):(S=parseInt(i.css("left"),10),T=r.width()-A))},Q=function(){var t=i.width(),e=et.data(i[0],"x")||parseInt(i[0].style.left,10)||i.position().left,o=e+t/2,s=(et.data(n[0],"x")||parseInt(n[0].style.left,10)||n.position().left)-e;p[0].style.left=o+"px",p[0].style.width=s+"px"},R=function(t){var e,o=F-W;o=t||F-W,"single"===f.type?(o<0&&(o=0),D<o&&(o=D)):"double"===f.type&&(o<S&&(o=S),T<o&&(o=T),Q()),et.data(l[0],"x",o),O(),e=Math.round(o),l[0].style.left=e+"px"},O=function(){var t,e,o={input:u,slider:v,min:f.min,max:f.max,fromNumber:0,toNumber:0,fromPers:0,toPers:0,fromX:0,fromX_pure:0,toX:0,toX_pure:0},s=f.max-f.min;"single"===f.type?(o.fromX=et.data(a[0],"x")||parseInt(a[0].style.left,10)||a.position().left,o.fromPers=o.fromX/k*100,t=s/100*o.fromPers+f.min,o.fromNumber=Math.round(t/f.step)*f.step,o.fromNumber<f.min&&(o.fromNumber=f.min),o.fromNumber>f.max&&(o.fromNumber=f.max),j&&(o.fromNumber=parseInt(o.fromNumber*j,10)/j),d&&(o.fromValue=f.values[o.fromNumber])):"double"===f.type&&(o.fromX=et.data(i[0],"x")||parseInt(i[0].style.left,10)||i.position().left,o.fromPers=o.fromX/k*100,t=s/100*o.fromPers+f.min,o.fromNumber=Math.round(t/f.step)*f.step,o.fromNumber<f.min&&(o.fromNumber=f.min),o.toX=et.data(n[0],"x")||parseInt(n[0].style.left,10)||n.position().left,o.toPers=o.toX/k*100,e=s/100*o.toPers+f.min,o.toNumber=Math.round(e/f.step)*f.step,o.toNumber>f.max&&(o.toNumber=f.max),j&&(o.fromNumber=parseInt(o.fromNumber*j,10)/j,o.toNumber=parseInt(o.toNumber*j,10)/j),d&&(o.fromValue=f.values[o.fromNumber],o.toValue=f.values[o.toNumber])),P=o,z()},$=function(){var t={input:u,slider:v,min:f.min,max:f.max,fromNumber:f.from,toNumber:f.to,fromPers:0,toPers:0,fromX:0,fromX_pure:0,toX:0,toX_pure:0},e=f.max-f.min;"single"===f.type?(t.fromPers=0!==e?(t.fromNumber-f.min)/e*100:0,t.fromX_pure=k/100*t.fromPers,t.fromX=Math.round(t.fromX_pure),a[0].style.left=t.fromX+"px",et.data(a[0],"x",t.fromX_pure)):"double"===f.type&&(t.fromPers=0!==e?(t.fromNumber-f.min)/e*100:0,t.fromX_pure=k/100*t.fromPers,t.fromX=Math.round(t.fromX_pure),i[0].style.left=t.fromX+"px",et.data(i[0],"x",t.fromX_pure),t.toPers=0!==e?(t.toNumber-f.min)/e*100:1,t.toX_pure=k/100*t.toPers,t.toX=Math.round(t.toX_pure),n[0].style.left=t.toX+"px",et.data(n[0],"x",t.toX_pure),Q()),P=t,z()},q=function(t){var e=t-v.offset().left,o=P.toX-P.fromX,s=P.fromX+o/2;S=0,D=r.width()-A,T=r.width()-A,"single"===f.type?((l=a).attr("id","irs-active-slider"),R(e)):"double"===f.type&&((l=e<=s?i:n).attr("id","irs-active-slider"),R(e),Q()),l.removeAttr("id"),l=null},z=function(){var t,e,o,s,a,r,i,n,l,p=A/2,m="";"single"===f.type?(m=P.fromNumber===f.max?f.maxPostfix:"",f.hideText||(c[0].style.display="none",b[0].style.display="none",i=d?f.prefix+f.values[P.fromNumber]+m+f.postfix:f.prefix+x(P.fromNumber)+m+f.postfix,g.html(i),n=g.outerWidth(),(l=P.fromX-n/2+p)<0&&(l=0),I-n<l&&(l=I-n),g[0].style.left=l+"px",f.hideMinMax||f.hideFromTo||(h[0].style.display=l<w?"none":"block",y[0].style.display=I-_<l+n?"none":"block")),u.attr("value",parseFloat(P.fromNumber))):"double"===f.type&&(m=P.fromNumber===f.max?f.maxPostfix:"",m=P.toNumber===f.max?f.maxPostfix:"",f.hideText||(d?(t=f.prefix+f.values[P.fromNumber]+f.postfix,s=f.prefix+f.values[P.toNumber]+m+f.postfix,i=P.fromNumber!==P.toNumber?f.prefix+f.values[P.fromNumber]+" \u2014 "+f.prefix+f.values[P.toNumber]+m+f.postfix:f.prefix+f.values[P.fromNumber]+m+f.postfix):(t=f.prefix+x(P.fromNumber)+f.postfix,s=f.prefix+x(P.toNumber)+m+f.postfix,i=P.fromNumber!==P.toNumber?f.prefix+x(P.fromNumber)+" \u2014 "+f.prefix+x(P.toNumber)+m+f.postfix:f.prefix+x(P.fromNumber)+m+f.postfix),c.html(t),b.html(s),g.html(i),e=c.outerWidth(),(o=P.fromX-e/2+p)<0&&(o=0),I-e<o&&(o=I-e),c[0].style.left=o+"px",a=b.outerWidth(),(r=P.toX-a/2+p)<0&&(r=0),I-a<r&&(r=I-a),b[0].style.left=r+"px",n=g.outerWidth(),(l=P.fromX+(P.toX-P.fromX)/2-n/2+p)<0&&(l=0),I-n<l&&(l=I-n),g[0].style.left=l+"px",o+e<r?(g[0].style.display="none",c[0].style.display="block",b[0].style.display="block"):(g[0].style.display="block",c[0].style.display="none",b[0].style.display="none"),f.hideMinMax||f.hideFromTo||(h[0].style.display=l<w||o<w?"none":"block",y[0].style.display=I-_<l+n||I-_<r+a?"none":"block")),u.attr("value",parseFloat(P.fromNumber)+";"+parseFloat(P.toNumber))),"function"!=typeof f.onFinish||C||M||f.onFinish.call(this,P),"function"!=typeof f.onChange||M||f.onChange.call(this,P),"function"==typeof f.onLoad&&!C&&M&&(f.onLoad.call(this,P),M=!1)},B=function(){v.addClass("irs-with-grid");var t,e="",o=0,s="",a=20,r=4;for(t=0;t<=a;t+=1)o=Math.floor(I/a*t),I<=o&&(o=I-1),s+='<span class="irs-grid-pol small" style="left: '+o+'px;"></span>';for(t=0;t<=r;t+=1)o=Math.floor(I/r*t),I<=o&&(o=I-1),s+='<span class="irs-grid-pol" style="left: '+o+'px;"></span>',j?(e=(e=f.min+(f.max-f.min)/r*t)/f.step*f.step,e=parseInt(e*j,10)/j):(e=Math.round(f.min+(f.max-f.min)/r*t),e=Math.round(e/f.step)*f.step,e=x(e)),d&&(f.hideMinMax?(e=Math.round(f.min+(f.max-f.min)/r*t),e=Math.round(e/f.step)*f.step,e=0===t||t===r?f.values[e]:""):e=""),s+=0===t?'<span class="irs-grid-text" style="left: '+o+'px; text-align: left;">'+e+"</span>":t===r?'<span class="irs-grid-text" style="left: '+(o-100)+'px; text-align: right;">'+e+"</span>":'<span class="irs-grid-text" style="left: '+(o-50)+'px;">'+e+"</span>";m.html(s)},H=function(){v.addClass("irs-disabled"),v.append(tt)},J=function(){v.removeClass("irs-disabled"),v.find(".irs-disable-mask").remove()};G()}})},update:function(t){return this.each(function(){this.updateData(t)})},remove:function(){return this.each(function(){this.removeSlider()})}};et.fn.ionRangeSlider=function(t){return s[t]?s[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void et.error("Method "+t+" does not exist for jQuery.ionRangeSlider"):s.init.apply(this,arguments)}}(jQuery,document,window,navigator);