var EasyPieChart=function(n,t){var a={barColor:"#ef1e25",trackColor:"#f9f9f9",scaleColor:"#dfe0e0",scaleLength:5,lineCap:"round",lineWidth:3,size:110,rotate:0,animate:{duration:1e3,enabled:!0},easing:function(e,n,t,a,r){return(n/=r/2)<1?a/2*n*n+t:-a/2*(--n*(n-2)-1)+t},onStart:function(){},onStep:function(){},onStop:function(){}};if("undefined"!=typeof CanvasRenderer)a.renderer=CanvasRenderer;else{if("undefined"==typeof SVGRenderer)throw new Error("Please load either the SVG- or the CanvasRenderer");a.renderer=SVGRenderer}var r={},i=0,e=function(){for(var e in this.el=n,this.options=r,a)a.hasOwnProperty(e)&&(r[e]=t&&"undefined"!=typeof t[e]?t[e]:a[e],"function"==typeof r[e]&&(r[e]=r[e].bind(this)));"string"==typeof r.easing&&"undefined"!=typeof jQuery&&jQuery.isFunction(jQuery.easing[r.easing])?r.easing=jQuery.easing[r.easing]:r.easing=a.easing,"number"==typeof r.animate&&(r.animate={duration:r.animate,enabled:!0}),"boolean"!=typeof r.animate||r.animate||(r.animate={duration:1e3,enabled:r.animate}),this.renderer=new r.renderer(n,r),this.renderer.draw(i),n.dataset&&n.dataset.percent?this.update(parseFloat(n.dataset.percent)):n.getAttribute&&n.getAttribute("data-percent")&&this.update(parseFloat(n.getAttribute("data-percent")))}.bind(this);this.update=function(e){return e=parseFloat(e),r.animate.enabled?this.renderer.animate(i,e):this.renderer.draw(e),i=e,this}.bind(this),this.disableAnimation=function(){return r.animate.enabled=!1,this},this.enableAnimation=function(){return r.animate.enabled=!0,this},e()};