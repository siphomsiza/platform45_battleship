!function(n){var e=function(t){this.value={h:1,s:1,b:1,a:1},this.setColor(t)};e.prototype={constructor:e,setColor:function(r){r=r.toLowerCase();var s=this;n.each(a.stringParsers,function(t,e){var o=(o=e.re.exec(r))&&e.parse(o),i=e.space||"rgba";return!o||(s.value="hsla"===i?a.RGBtoHSB.apply(null,a.HSLtoRGB.apply(null,o)):a.RGBtoHSB.apply(null,o),!1)})},setHue:function(t){this.value.h=1-t},setSaturation:function(t){this.value.s=t},setLightness:function(t){this.value.b=1-t},setAlpha:function(t){this.value.a=parseInt(100*(1-t),10)/100},toRGB:function(t,e,o,i){var r,s,n;return t||(t=this.value.h,e=this.value.s,o=this.value.b),t=360*t%360/60,o=r=s=o-(n=o*e),o+=[n,e=n*(1-Math.abs(t%2-1)),0,0,e,n][t=~~t],r+=[e,n,n,e,0,0][t],s+=[0,0,e,n,n,e][t],{r:Math.round(255*o),g:Math.round(255*r),b:Math.round(255*s),a:i||this.value.a}},toHex:function(t,e,o,i){return t=this.toRGB(t,e,o,i),"#"+(16777216|parseInt(t.r)<<16|parseInt(t.g)<<8|parseInt(t.b)).toString(16).substr(1)},toHSL:function(t,e,o,i){t||(t=this.value.h,e=this.value.s,o=this.value.b);var r=(2-e)*o;return e*=o,1<(e=0<r&&r<=1?e/r:e/(2-r))&&(e=1),{h:t,s:e,l:r/2,a:i||this.value.a}}};var i=0,s=function(t,e){i++,this.element=n(t).attr("data-colorpicker-guid",i);var o=e.format||this.element.data("color-format")||"hex";this.format=a.translateFormats[o],this.isInput=this.element.is("input"),this.component=!!this.element.is(".colorpicker-component")&&this.element.find(".add-on, .input-group-addon"),this.picker=n(a.template).attr("data-colorpicker-guid",i).appendTo("body").on("mousedown.colorpicker",n.proxy(this.mousedown,this)),this.isInput?this.element.on({"focus.colorpicker":n.proxy(this.show,this),"keyup.colorpicker":n.proxy(this.update,this)}):this.component?this.component.on({"click.colorpicker":n.proxy(this.show,this)}):this.element.on({"click.colorpicker":n.proxy(this.show,this)}),"rgba"!==o&&"hsla"!==o||(this.picker.addClass("alpha"),this.alpha=this.picker.find(".colorpicker-alpha")[0].style),this.component?(this.picker.find(".colorpicker-color").hide(),this.preview=this.element.find("i")[0].style):this.preview=this.picker.find("div:last")[0].style,this.base=this.picker.find("div:first")[0].style,this.update(),n(n.proxy(function(){this.element.trigger("create",[this])},this))};s.prototype={constructor:s,show:function(t){this.picker.show(),this.height=this.component?this.component.outerHeight():this.element.outerHeight(),this.place(),n(window).on("resize.colorpicker",n.proxy(this.place,this)),!this.isInput&&t&&(t.stopPropagation(),t.preventDefault()),n(document).on({"mousedown.colorpicker":n.proxy(this.hide,this)}),this.element.trigger({type:"showPicker",color:this.color})},update:function(){var t=this.isInput?this.element.prop("value"):this.element.data("color");null==t&&(t="#ffffff"),this.color=new e(t),this.picker.find("i").eq(0).css({left:100*this.color.value.s,top:100-100*this.color.value.b}).end().eq(1).css("top",100*(1-this.color.value.h)).end().eq(2).css("top",100*(1-this.color.value.a)),this.previewColor()},hide:function(){this.picker.hide(),n(window).off("resize",this.place),n(document).off({mousedown:this.hide}),this.isInput?""!==this.element.val()&&this.element.prop("value",this.format.call(this)).trigger("change"):(this.component&&""!==this.element.find("input").val()&&this.element.find("input").prop("value",this.format.call(this)).trigger("change"),this.element.data("color",this.format.call(this))),this.element.trigger({type:"hidePicker",color:this.color})},place:function(){var t=this.component?this.component.offset():this.element.offset();this.picker.css({top:t.top+this.height,left:t.left})},destroy:function(){n(".colorpicker[data-colorpicker-guid="+this.element.attr("data-colorpicker-guid")+"]").remove(),this.element.removeData("colorpicker").removeAttr("data-colorpicker-guid").off(".colorpicker"),!1!==this.component&&this.component.off(".colorpicker"),this.element.trigger("destroy",[this])},setValue:function(t){this.isInput?this.element.prop("value",t):(this.element.find("input").val(t),this.element.data("color",t)),this.update(),this.element.trigger({type:"changeColor",color:this.color})},previewColor:function(){try{this.preview.backgroundColor=this.format.call(this)}catch(t){this.preview.backgroundColor=this.color.toHex()}this.base.backgroundColor=this.color.toHex(this.color.value.h,1,1,1),this.alpha&&(this.alpha.backgroundColor=this.color.toHex())},pointer:null,slider:null,mousedown:function(t){t.stopPropagation(),t.preventDefault();var e=n(t.target).closest("div");if(!e.is(".colorpicker")){if(e.is(".colorpicker-saturation"))this.slider=n.extend({},a.sliders.saturation);else if(e.is(".colorpicker-hue"))this.slider=n.extend({},a.sliders.hue);else{if(!e.is(".colorpicker-alpha"))return!1;this.slider=n.extend({},a.sliders.alpha)}var o=e.offset();this.slider.knob=e.find("i")[0].style,this.slider.left=t.pageX-o.left,this.slider.top=t.pageY-o.top,this.pointer={left:t.pageX,top:t.pageY},n(document).on({"mousemove.colorpicker":n.proxy(this.mousemove,this),"mouseup.colorpicker":n.proxy(this.mouseup,this)}).trigger("mousemove")}return!1},mousemove:function(t){t.stopPropagation(),t.preventDefault();var e=Math.max(0,Math.min(this.slider.maxLeft,this.slider.left+((t.pageX||this.pointer.left)-this.pointer.left)));if(t=Math.max(0,Math.min(this.slider.maxTop,this.slider.top+((t.pageY||this.pointer.top)-this.pointer.top))),this.slider.knob.left=e+"px",this.slider.knob.top=t+"px",this.slider.callLeft&&this.color[this.slider.callLeft].call(this.color,e/100),this.slider.callTop&&this.color[this.slider.callTop].call(this.color,t/100),this.previewColor(),this.isInput)try{this.element.val(this.format.call(this)).trigger("change")}catch(o){this.element.val(this.color.toHex()).trigger("change")}else try{this.element.find("input").val(this.format.call(this)).trigger("change")}catch(n){this.element.find("input").val(this.color.toHex()).trigger("change")}return this.element.trigger({type:"changeColor",color:this.color}),!1},mouseup:function(t){return t.stopPropagation(),t.preventDefault(),n(document).off({mousemove:this.mousemove,mouseup:this.mouseup}),!1}},n.fn.colorpicker=function(i,r){return this.each(function(){var t=n(this),e=t.data("colorpicker"),o="object"==typeof i&&i;e?"string"==typeof i&&e[i](r):"destroy"!==i&&t.data("colorpicker",new s(this,n.extend({},n.fn.colorpicker.defaults,o)))})},n.fn.colorpicker.defaults={},n.fn.colorpicker.Constructor=s;var a={translateFormats:{rgb:function(){var t=this.color.toRGB();return"rgb("+t.r+","+t.g+","+t.b+")"},rgba:function(){var t=this.color.toRGB();return"rgba("+t.r+","+t.g+","+t.b+","+t.a+")"},hsl:function(){var t=this.color.toHSL();return"hsl("+Math.round(360*t.h)+","+Math.round(100*t.s)+"%,"+Math.round(100*t.l)+"%)"},hsla:function(){var t=this.color.toHSL();return"hsla("+Math.round(360*t.h)+","+Math.round(100*t.s)+"%,"+Math.round(100*t.l)+"%,"+t.a+")"},hex:function(){return this.color.toHex()}},sliders:{saturation:{maxLeft:100,maxTop:100,callLeft:"setSaturation",callTop:"setLightness"},hue:{maxLeft:0,maxTop:100,callLeft:!1,callTop:"setHue"},alpha:{maxLeft:0,maxTop:100,callLeft:!1,callTop:"setAlpha"}},RGBtoHSB:function(t,e,o,i){var r,s;return t/=255,e/=255,o/=255,{h:(t=(360+(0===(s=(r=Math.max(t,e,o))-Math.min(t,e,o))?0:r===t?(e-o)/s:r===e?(o-t)/s+2:(t-e)/s+4))%6*60/360)||1,s:0===s?0:s/r,b:r,a:i||1}},HueToRGB:function(t,e,o){return o<0?o+=1:1<o&&(o-=1),6*o<1?t+6*(e-t)*o:2*o<1?e:3*o<2?t+6*(e-t)*(2/3-o):t},HSLtoRGB:function(t,e,o,i){e<0&&(e=0);var r=2*o-(e=o<=.5?o*(1+e):o+e-o*e),s=t-1/3;return[o=Math.round(255*a.HueToRGB(r,e,t+1/3)),t=Math.round(255*a.HueToRGB(r,e,t)),e=Math.round(255*a.HueToRGB(r,e,s)),i||1]},stringParsers:[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,parse:function(t){return[t[1],t[2],t[3],t[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,parse:function(t){return[2.55*t[1],2.55*t[2],2.55*t[3],t[4]]}},{re:/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,parse:function(t){return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]}},{re:/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/,parse:function(t){return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(t){return[t[1]/360,t[2]/100,t[3]/100,t[4]]}}],template:'<div class="colorpicker dropdown-menu"><div class="colorpicker-saturation"><i><b></b></i></div><div class="colorpicker-hue"><i></i></div><div class="colorpicker-alpha"><i></i></div><div class="colorpicker-color"><div /></div></div>'}}(window.jQuery);