!function(t){var e={set:{colors:1,values:1,backgroundColor:1,scaleColors:1,normalizeFunction:1,focus:1},get:{selectedRegions:1,selectedMarkers:1,mapObject:1,regionName:1}};t.fn.vectorMap=function(t){var s,a,s=this.children(".jvectormap-container").data("mapObject");if("addMap"===t)jvm.WorldMap.maps[arguments[1]]=arguments[2];else{if(("set"===t||"get"===t)&&e[t][arguments[1]])return a=arguments[1].charAt(0).toUpperCase()+arguments[1].substr(1),s[t+a].apply(s,Array.prototype.slice.call(arguments,2));t=t||{},t.container=this,s=new jvm.WorldMap(t)}return this}}(jQuery),function(t){function e(e){var s=e||window.event,a=[].slice.call(arguments,1),i=0,n=0,r=0;return e=t.event.fix(s),e.type="mousewheel",s.wheelDelta&&(i=s.wheelDelta/120),s.detail&&(i=-s.detail/3),r=i,void 0!==s.axis&&s.axis===s.HORIZONTAL_AXIS&&(r=0,n=-1*i),void 0!==s.wheelDeltaY&&(r=s.wheelDeltaY/120),void 0!==s.wheelDeltaX&&(n=-1*s.wheelDeltaX/120),a.unshift(e,i,n,r),(t.event.dispatch||t.event.handle).apply(this,a)}var s=["DOMMouseScroll","mousewheel"];if(t.event.fixHooks)for(var a=s.length;a;)t.event.fixHooks[s[--a]]=t.event.mouseHooks;t.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var t=s.length;t;)this.addEventListener(s[--t],e,!1);else this.onmousewheel=e},teardown:function(){if(this.removeEventListener)for(var t=s.length;t;)this.removeEventListener(s[--t],e,!1);else this.onmousewheel=null}},t.fn.extend({mousewheel:function(t){return t?this.bind("mousewheel",t):this.trigger("mousewheel")},unmousewheel:function(t){return this.unbind("mousewheel",t)}})}(jQuery);var jvm={inherits:function(t,e){function s(){}s.prototype=e.prototype,t.prototype=new s,t.prototype.constructor=t,t.parentClass=e},mixin:function(t,e){var s;for(s in e.prototype)e.prototype.hasOwnProperty(s)&&(t.prototype[s]=e.prototype[s])},min:function(t){var e,s=Number.MAX_VALUE;if(t instanceof Array)for(e=0;e<t.length;e++)t[e]<s&&(s=t[e]);else for(e in t)t[e]<s&&(s=t[e]);return s},max:function(t){var e,s=Number.MIN_VALUE;if(t instanceof Array)for(e=0;e<t.length;e++)t[e]>s&&(s=t[e]);else for(e in t)t[e]>s&&(s=t[e]);return s},keys:function(t){var e,s=[];for(e in t)s.push(e);return s},values:function(t){var e,s,a=[];for(s=0;s<arguments.length;s++){t=arguments[s];for(e in t)a.push(t[e])}return a}};jvm.$=jQuery,jvm.AbstractElement=function(t,e){this.node=this.createElement(t),this.name=t,this.properties={},e&&this.set(e)},jvm.AbstractElement.prototype.set=function(t,e){var s;if("object"==typeof t)for(s in t)this.properties[s]=t[s],this.applyAttr(s,t[s]);else this.properties[t]=e,this.applyAttr(t,e)},jvm.AbstractElement.prototype.get=function(t){return this.properties[t]},jvm.AbstractElement.prototype.applyAttr=function(t,e){this.node.setAttribute(t,e)},jvm.AbstractElement.prototype.remove=function(){jvm.$(this.node).remove()},jvm.AbstractCanvasElement=function(t,e,s){this.container=t,this.setSize(e,s),this.rootElement=new jvm[this.classPrefix+"GroupElement"],this.node.appendChild(this.rootElement.node),this.container.appendChild(this.node)},jvm.AbstractCanvasElement.prototype.add=function(t,e){e=e||this.rootElement,e.add(t),t.canvas=this},jvm.AbstractCanvasElement.prototype.addPath=function(t,e,s){var a=new jvm[this.classPrefix+"PathElement"](t,e);return this.add(a,s),a},jvm.AbstractCanvasElement.prototype.addCircle=function(t,e,s){var a=new jvm[this.classPrefix+"CircleElement"](t,e);return this.add(a,s),a},jvm.AbstractCanvasElement.prototype.addGroup=function(t){var e=new jvm[this.classPrefix+"GroupElement"];return t?t.node.appendChild(e.node):this.node.appendChild(e.node),e.canvas=this,e},jvm.AbstractShapeElement=function(t,e,s){this.style=s||{},this.style.current={},this.isHovered=!1,this.isSelected=!1,this.updateStyle()},jvm.AbstractShapeElement.prototype.setHovered=function(t){this.isHovered!==t&&(this.isHovered=t,this.updateStyle())},jvm.AbstractShapeElement.prototype.setSelected=function(t){this.isSelected!==t&&(this.isSelected=t,this.updateStyle(),jvm.$(this.node).trigger("selected",[t]))},jvm.AbstractShapeElement.prototype.setStyle=function(t,e){var s={};"object"==typeof t?s=t:s[t]=e,jvm.$.extend(this.style.current,s),this.updateStyle()},jvm.AbstractShapeElement.prototype.updateStyle=function(){var t={};jvm.AbstractShapeElement.mergeStyles(t,this.style.initial),jvm.AbstractShapeElement.mergeStyles(t,this.style.current),this.isHovered&&jvm.AbstractShapeElement.mergeStyles(t,this.style.hover),this.isSelected&&(jvm.AbstractShapeElement.mergeStyles(t,this.style.selected),this.isHovered&&jvm.AbstractShapeElement.mergeStyles(t,this.style.selectedHover)),this.set(t)},jvm.AbstractShapeElement.mergeStyles=function(t,e){var s;e=e||{};for(s in e)null===e[s]?delete t[s]:t[s]=e[s]},jvm.SVGElement=function(){jvm.SVGElement.parentClass.apply(this,arguments)},jvm.inherits(jvm.SVGElement,jvm.AbstractElement),jvm.SVGElement.svgns="http://www.w3.org/2000/svg",jvm.SVGElement.prototype.createElement=function(t){return document.createElementNS(jvm.SVGElement.svgns,t)},jvm.SVGElement.prototype.addClass=function(t){this.node.setAttribute("class",t)},jvm.SVGElement.prototype.getElementCtr=function(t){return jvm["SVG"+t]},jvm.SVGElement.prototype.getBBox=function(){return this.node.getBBox()},jvm.SVGGroupElement=function(){jvm.SVGGroupElement.parentClass.call(this,"g")},jvm.inherits(jvm.SVGGroupElement,jvm.SVGElement),jvm.SVGGroupElement.prototype.add=function(t){this.node.appendChild(t.node)},jvm.SVGCanvasElement=function(){this.classPrefix="SVG",jvm.SVGCanvasElement.parentClass.call(this,"svg"),jvm.AbstractCanvasElement.apply(this,arguments)},jvm.inherits(jvm.SVGCanvasElement,jvm.SVGElement),jvm.mixin(jvm.SVGCanvasElement,jvm.AbstractCanvasElement),jvm.SVGCanvasElement.prototype.setSize=function(t,e){this.width=t,this.height=e,this.node.setAttribute("width",t),this.node.setAttribute("height",e)},jvm.SVGCanvasElement.prototype.applyTransformParams=function(t,e,s){this.scale=t,this.transX=e,this.transY=s,this.rootElement.node.setAttribute("transform","scale("+t+") translate("+e+", "+s+")")},jvm.SVGShapeElement=function(t,e){jvm.SVGShapeElement.parentClass.call(this,t,e),jvm.AbstractShapeElement.apply(this,arguments)},jvm.inherits(jvm.SVGShapeElement,jvm.SVGElement),jvm.mixin(jvm.SVGShapeElement,jvm.AbstractShapeElement),jvm.SVGPathElement=function(t,e){jvm.SVGPathElement.parentClass.call(this,"path",t,e),this.node.setAttribute("fill-rule","evenodd")},jvm.inherits(jvm.SVGPathElement,jvm.SVGShapeElement),jvm.SVGCircleElement=function(t,e){jvm.SVGCircleElement.parentClass.call(this,"circle",t,e)},jvm.inherits(jvm.SVGCircleElement,jvm.SVGShapeElement),jvm.VMLElement=function(){jvm.VMLElement.VMLInitialized||jvm.VMLElement.initializeVML(),jvm.VMLElement.parentClass.apply(this,arguments)},jvm.inherits(jvm.VMLElement,jvm.AbstractElement),jvm.VMLElement.VMLInitialized=!1,jvm.VMLElement.initializeVML=function(){try{document.namespaces.rvml||document.namespaces.add("rvml","urn:schemas-microsoft-com:vml"),jvm.VMLElement.prototype.createElement=function(t){return document.createElement("<rvml:"+t+' class="rvml">')}}catch(t){jvm.VMLElement.prototype.createElement=function(t){return document.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')}}document.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)"),jvm.VMLElement.VMLInitialized=!0},jvm.VMLElement.prototype.getElementCtr=function(t){return jvm["VML"+t]},jvm.VMLElement.prototype.addClass=function(t){jvm.$(this.node).addClass(t)},jvm.VMLElement.prototype.applyAttr=function(t,e){this.node[t]=e},jvm.VMLElement.prototype.getBBox=function(){var t=jvm.$(this.node);return{x:t.position().left/this.canvas.scale,y:t.position().top/this.canvas.scale,width:t.width()/this.canvas.scale,height:t.height()/this.canvas.scale}},jvm.VMLGroupElement=function(){jvm.VMLGroupElement.parentClass.call(this,"group"),this.node.style.left="0px",this.node.style.top="0px",this.node.coordorigin="0 0"},jvm.inherits(jvm.VMLGroupElement,jvm.VMLElement),jvm.VMLGroupElement.prototype.add=function(t){this.node.appendChild(t.node)},jvm.VMLCanvasElement=function(){this.classPrefix="VML",jvm.VMLCanvasElement.parentClass.call(this,"group"),jvm.AbstractCanvasElement.apply(this,arguments),this.node.style.position="absolute"},jvm.inherits(jvm.VMLCanvasElement,jvm.VMLElement),jvm.mixin(jvm.VMLCanvasElement,jvm.AbstractCanvasElement),jvm.VMLCanvasElement.prototype.setSize=function(t,e){var s,a,i,n;if(this.width=t,this.height=e,this.node.style.width=t+"px",this.node.style.height=e+"px",this.node.coordsize=t+" "+e,this.node.coordorigin="0 0",this.rootElement){for(s=this.rootElement.node.getElementsByTagName("shape"),i=0,n=s.length;n>i;i++)s[i].coordsize=t+" "+e,s[i].style.width=t+"px",s[i].style.height=e+"px";for(a=this.node.getElementsByTagName("group"),i=0,n=a.length;n>i;i++)a[i].coordsize=t+" "+e,a[i].style.width=t+"px",a[i].style.height=e+"px"}},jvm.VMLCanvasElement.prototype.applyTransformParams=function(t,e,s){this.scale=t,this.transX=e,this.transY=s,this.rootElement.node.coordorigin=this.width-e-this.width/100+","+(this.height-s-this.height/100),this.rootElement.node.coordsize=this.width/t+","+this.height/t},jvm.VMLShapeElement=function(t,e){jvm.VMLShapeElement.parentClass.call(this,t,e),this.fillElement=new jvm.VMLElement("fill"),this.strokeElement=new jvm.VMLElement("stroke"),this.node.appendChild(this.fillElement.node),this.node.appendChild(this.strokeElement.node),this.node.stroked=!1,jvm.AbstractShapeElement.apply(this,arguments)},jvm.inherits(jvm.VMLShapeElement,jvm.VMLElement),jvm.mixin(jvm.VMLShapeElement,jvm.AbstractShapeElement),jvm.VMLShapeElement.prototype.applyAttr=function(t,e){switch(t){case"fill":this.node.fillcolor=e;break;case"fill-opacity":this.fillElement.node.opacity=Math.round(100*e)+"%";break;case"stroke":"none"===e?this.node.stroked=!1:this.node.stroked=!0,this.node.strokecolor=e;break;case"stroke-opacity":this.strokeElement.node.opacity=Math.round(100*e)+"%";break;case"stroke-width":0===parseInt(e,10)?this.node.stroked=!1:this.node.stroked=!0,this.node.strokeweight=e;break;case"d":this.node.path=jvm.VMLPathElement.pathSvgToVml(e);break;default:jvm.VMLShapeElement.parentClass.prototype.applyAttr.apply(this,arguments)}},jvm.VMLPathElement=function(t,e){var s=new jvm.VMLElement("skew");jvm.VMLPathElement.parentClass.call(this,"shape",t,e),this.node.coordorigin="0 0",s.node.on=!0,s.node.matrix="0.01,0,0,0.01,0,0",s.node.offset="0,0",this.node.appendChild(s.node)},jvm.inherits(jvm.VMLPathElement,jvm.VMLShapeElement),jvm.VMLPathElement.prototype.applyAttr=function(t,e){"d"===t?this.node.path=jvm.VMLPathElement.pathSvgToVml(e):jvm.VMLShapeElement.prototype.applyAttr.call(this,t,e)},jvm.VMLPathElement.pathSvgToVml=function(t){var e,s,a=0,i=0;return t=t.replace(/(-?\d+)e(-?\d+)/g,"0"),t.replace(/([MmLlHhVvCcSs])\s*((?:-?\d*(?:\.\d+)?\s*,?\s*)+)/g,function(t,n,r){r=r.replace(/(\d)-/g,"$1,-").replace(/^\s+/g,"").replace(/\s+$/g,"").replace(/\s+/g,",").split(","),r[0]||r.shift();for(var h=0,o=r.length;o>h;h++)r[h]=Math.round(100*r[h]);switch(n){case"m":return a+=r[0],i+=r[1],"t"+r.join(",");case"M":return a=r[0],i=r[1],"m"+r.join(",");case"l":return a+=r[0],i+=r[1],"r"+r.join(",");case"L":return a=r[0],i=r[1],"l"+r.join(",");case"h":return a+=r[0],"r"+r[0]+",0";case"H":return a=r[0],"l"+a+","+i;case"v":return i+=r[0],"r0,"+r[0];case"V":return i=r[0],"l"+a+","+i;case"c":return e=a+r[r.length-4],s=i+r[r.length-3],a+=r[r.length-2],i+=r[r.length-1],"v"+r.join(",");case"C":return e=r[r.length-4],s=r[r.length-3],a=r[r.length-2],i=r[r.length-1],"c"+r.join(",");case"s":return r.unshift(i-s),r.unshift(a-e),e=a+r[r.length-4],s=i+r[r.length-3],a+=r[r.length-2],i+=r[r.length-1],"v"+r.join(",");case"S":return r.unshift(i+i-s),r.unshift(a+a-e),e=r[r.length-4],s=r[r.length-3],a=r[r.length-2],i=r[r.length-1],"c"+r.join(",")}return""}).replace(/z/g,"e")},jvm.VMLCircleElement=function(t,e){jvm.VMLCircleElement.parentClass.call(this,"oval",t,e)},jvm.inherits(jvm.VMLCircleElement,jvm.VMLShapeElement),jvm.VMLCircleElement.prototype.applyAttr=function(t,e){switch(t){case"r":this.node.style.width=2*e+"px",this.node.style.height=2*e+"px",this.applyAttr("cx",this.get("cx")||0),this.applyAttr("cy",this.get("cy")||0);break;case"cx":if(!e)return;this.node.style.left=e-(this.get("r")||0)+"px";break;case"cy":if(!e)return;this.node.style.top=e-(this.get("r")||0)+"px";break;default:jvm.VMLCircleElement.parentClass.prototype.applyAttr.call(this,t,e)}},jvm.VectorCanvas=function(t,e,s){return this.mode=window.SVGAngle?"svg":"vml","svg"==this.mode?this.impl=new jvm.SVGCanvasElement(t,e,s):this.impl=new jvm.VMLCanvasElement(t,e,s),this.impl},jvm.SimpleScale=function(t){this.scale=t},jvm.SimpleScale.prototype.getValue=function(t){return t},jvm.OrdinalScale=function(t){this.scale=t},jvm.OrdinalScale.prototype.getValue=function(t){return this.scale[t]},jvm.NumericScale=function(t,e,s,a){this.scale=[],e=e||"linear",t&&this.setScale(t),e&&this.setNormalizeFunction(e),s&&this.setMin(s),a&&this.setMax(a)},jvm.NumericScale.prototype={setMin:function(t){this.clearMinValue=t,"function"==typeof this.normalize?this.minValue=this.normalize(t):this.minValue=t},setMax:function(t){this.clearMaxValue=t,"function"==typeof this.normalize?this.maxValue=this.normalize(t):this.maxValue=t},setScale:function(t){var e;for(e=0;e<t.length;e++)this.scale[e]=[t[e]]},setNormalizeFunction:function(t){"polynomial"===t?this.normalize=function(t){return Math.pow(t,.2)}:"linear"===t?delete this.normalize:this.normalize=t,this.setMin(this.clearMinValue),this.setMax(this.clearMaxValue)},getValue:function(t){var e,s,a=[],i=0,n=0;for("function"==typeof this.normalize&&(t=this.normalize(t)),n=0;n<this.scale.length-1;n++)e=this.vectorLength(this.vectorSubtract(this.scale[n+1],this.scale[n])),a.push(e),i+=e;for(s=(this.maxValue-this.minValue)/i,n=0;n<a.length;n++)a[n]*=s;for(n=0,t-=this.minValue;t-a[n]>=0;)t-=a[n],n++;return t=n==this.scale.length-1?this.vectorToNum(this.scale[n]):this.vectorToNum(this.vectorAdd(this.scale[n],this.vectorMult(this.vectorSubtract(this.scale[n+1],this.scale[n]),t/a[n])))},vectorToNum:function(t){var e,s=0;for(e=0;e<t.length;e++)s+=Math.round(t[e])*Math.pow(256,t.length-e-1);return s},vectorSubtract:function(t,e){var s,a=[];for(s=0;s<t.length;s++)a[s]=t[s]-e[s];return a},vectorAdd:function(t,e){var s,a=[];for(s=0;s<t.length;s++)a[s]=t[s]+e[s];return a},vectorMult:function(t,e){var s,a=[];for(s=0;s<t.length;s++)a[s]=t[s]*e;return a},vectorLength:function(t){var e,s=0;for(e=0;e<t.length;e++)s+=t[e]*t[e];return Math.sqrt(s)}},jvm.ColorScale=function(){jvm.ColorScale.parentClass.apply(this,arguments)},jvm.inherits(jvm.ColorScale,jvm.NumericScale),jvm.ColorScale.prototype.setScale=function(t){var e;for(e=0;e<t.length;e++)this.scale[e]=jvm.ColorScale.rgbToArray(t[e])},jvm.ColorScale.prototype.getValue=function(t){return jvm.ColorScale.numToRgb(jvm.ColorScale.parentClass.prototype.getValue.call(this,t))},jvm.ColorScale.arrayToRgb=function(t){var e,s,a="#";for(s=0;s<t.length;s++)e=t[s].toString(16),a+=1==e.length?"0"+e:e;return a},jvm.ColorScale.numToRgb=function(t){for(t=t.toString(16);t.length<6;)t="0"+t;return"#"+t},jvm.ColorScale.rgbToArray=function(t){return t=t.substr(1),[parseInt(t.substr(0,2),16),parseInt(t.substr(2,2),16),parseInt(t.substr(4,2),16)]},jvm.DataSeries=function(t,e){var s;t=t||{},t.attribute=t.attribute||"fill",this.elements=e,this.params=t,t.attributes&&this.setAttributes(t.attributes),jvm.$.isArray(t.scale)?(s="fill"===t.attribute||"stroke"===t.attribute?jvm.ColorScale:jvm.NumericScale,this.scale=new s(t.scale,t.normalizeFunction,t.min,t.max)):t.scale?this.scale=new jvm.OrdinalScale(t.scale):this.scale=new jvm.SimpleScale(t.scale),this.values=t.values||{},this.setValues(this.values)},jvm.DataSeries.prototype={setAttributes:function(t,e){var s,a=t;if("string"==typeof t)this.elements[t]&&this.elements[t].setStyle(this.params.attribute,e);else for(s in a)this.elements[s]&&this.elements[s].element.setStyle(this.params.attribute,a[s])},setValues:function(t){var e,s,a=Number.MIN_VALUE,i=Number.MAX_VALUE,n={};if(this.scale instanceof jvm.OrdinalScale||this.scale instanceof jvm.SimpleScale)for(s in t)t[s]?n[s]=this.scale.getValue(t[s]):n[s]=this.elements[s].element.style.initial[this.params.attribute];else{if(!this.params.min||!this.params.max){for(s in t)e=parseFloat(t[s]),e>a&&(a=t[s]),i>e&&(i=e);this.params.min||this.scale.setMin(i),this.params.max||this.scale.setMax(a),this.params.min=i,this.params.max=a}for(s in t)e=parseFloat(t[s]),isNaN(e)?n[s]=this.elements[s].element.style.initial[this.params.attribute]:n[s]=this.scale.getValue(e)}this.setAttributes(n),jvm.$.extend(this.values,t)},clear:function(){var t,e={};for(t in this.values)this.elements[t]&&(e[t]=this.elements[t].element.style.initial[this.params.attribute]);this.setAttributes(e),this.values={}},setScale:function(t){this.scale.setScale(t),this.values&&this.setValues(this.values)},setNormalizeFunction:function(t){this.scale.setNormalizeFunction(t),this.values&&this.setValues(this.values)}},jvm.Proj={degRad:180/Math.PI,radDeg:Math.PI/180,radius:6381372,sgn:function(t){return t>0?1:0>t?-1:t},mill:function(t,e,s){return{x:this.radius*(e-s)*this.radDeg,y:-this.radius*Math.log(Math.tan((45+.4*t)*this.radDeg))/.8}},mill_inv:function(t,e,s){return{lat:(2.5*Math.atan(Math.exp(.8*e/this.radius))-5*Math.PI/8)*this.degRad,lng:(s*this.radDeg+t/this.radius)*this.degRad}},merc:function(t,e,s){return{x:this.radius*(e-s)*this.radDeg,y:-this.radius*Math.log(Math.tan(Math.PI/4+t*Math.PI/360))}},merc_inv:function(t,e,s){return{lat:(2*Math.atan(Math.exp(e/this.radius))-Math.PI/2)*this.degRad,lng:(s*this.radDeg+t/this.radius)*this.degRad}},aea:function(t,e,s){var a=0,i=s*this.radDeg,n=29.5*this.radDeg,r=45.5*this.radDeg,h=t*this.radDeg,o=e*this.radDeg,l=(Math.sin(n)+Math.sin(r))/2,c=Math.cos(n)*Math.cos(n)+2*l*Math.sin(n),m=l*(o-i),p=Math.sqrt(c-2*l*Math.sin(h))/l,d=Math.sqrt(c-2*l*Math.sin(a))/l;return{x:p*Math.sin(m)*this.radius,y:-(d-p*Math.cos(m))*this.radius}},aea_inv:function(t,e,s){var a=t/this.radius,i=e/this.radius,n=0,r=s*this.radDeg,h=29.5*this.radDeg,o=45.5*this.radDeg,l=(Math.sin(h)+Math.sin(o))/2,c=Math.cos(h)*Math.cos(h)+2*l*Math.sin(h),m=Math.sqrt(c-2*l*Math.sin(n))/l,p=Math.sqrt(a*a+(m-i)*(m-i)),d=Math.atan(a/(m-i));return{lat:Math.asin((c-p*p*l*l)/(2*l))*this.degRad,lng:(r+d/l)*this.degRad}},lcc:function(t,e,s){var a=0,i=s*this.radDeg,n=e*this.radDeg,r=33*this.radDeg,h=45*this.radDeg,o=t*this.radDeg,l=Math.log(Math.cos(r)*(1/Math.cos(h)))/Math.log(Math.tan(Math.PI/4+h/2)*(1/Math.tan(Math.PI/4+r/2))),c=Math.cos(r)*Math.pow(Math.tan(Math.PI/4+r/2),l)/l,m=c*Math.pow(1/Math.tan(Math.PI/4+o/2),l),p=c*Math.pow(1/Math.tan(Math.PI/4+a/2),l);return{x:m*Math.sin(l*(n-i))*this.radius,y:-(p-m*Math.cos(l*(n-i)))*this.radius}},lcc_inv:function(t,e,s){var a=t/this.radius,i=e/this.radius,n=0,r=s*this.radDeg,h=33*this.radDeg,o=45*this.radDeg,l=Math.log(Math.cos(h)*(1/Math.cos(o)))/Math.log(Math.tan(Math.PI/4+o/2)*(1/Math.tan(Math.PI/4+h/2))),c=Math.cos(h)*Math.pow(Math.tan(Math.PI/4+h/2),l)/l,m=c*Math.pow(1/Math.tan(Math.PI/4+n/2),l),p=this.sgn(l)*Math.sqrt(a*a+(m-i)*(m-i)),d=Math.atan(a/(m-i));return{lat:(2*Math.atan(Math.pow(c/p,1/l))-Math.PI/2)*this.degRad,lng:(r+d/l)*this.degRad}}},jvm.WorldMap=function(t){var e,s=this;if(this.params=jvm.$.extend(!0,{},jvm.WorldMap.defaultParams,t),!jvm.WorldMap.maps[this.params.map])throw new Error("Attempt to use map which was not loaded: "+this.params.map);this.mapData=jvm.WorldMap.maps[this.params.map],this.markers={},this.regions={},this.regionsColors={},this.regionsData={},this.container=jvm.$("<div>").css({width:"100%",height:"100%"}).addClass("jvectormap-container"),this.params.container.append(this.container),this.container.data("mapObject",this),this.container.css({position:"relative",overflow:"hidden"}),this.defaultWidth=this.mapData.width,this.defaultHeight=this.mapData.height,this.setBackgroundColor(this.params.backgroundColor),this.onResize=function(){s.setSize()},jvm.$(window).resize(this.onResize);for(e in jvm.WorldMap.apiEvents)this.params[e]&&this.container.bind(jvm.WorldMap.apiEvents[e]+".jvectormap",this.params[e]);this.canvas=new jvm.VectorCanvas(this.container[0],this.width,this.height),"ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch?this.params.bindTouchEvents&&this.bindContainerTouchEvents():this.bindContainerEvents(),this.bindElementEvents(),this.createLabel(),this.params.zoomButtons&&this.bindZoomButtons(),this.createRegions(),this.createMarkers(this.params.markers||{}),this.setSize(),this.params.focusOn&&("object"==typeof this.params.focusOn?this.setFocus.call(this,this.params.focusOn.scale,this.params.focusOn.x,this.params.focusOn.y):this.setFocus.call(this,this.params.focusOn)),this.params.selectedRegions&&this.setSelectedRegions(this.params.selectedRegions),this.params.selectedMarkers&&this.setSelectedMarkers(this.params.selectedMarkers),this.params.series&&this.createSeries()},jvm.WorldMap.prototype={transX:0,transY:0,scale:1,baseTransX:0,baseTransY:0,baseScale:1,width:0,height:0,setBackgroundColor:function(t){this.container.css("background-color",t)},resize:function(){var t=this.baseScale;this.width/this.height>this.defaultWidth/this.defaultHeight?(this.baseScale=this.height/this.defaultHeight,this.baseTransX=Math.abs(this.width-this.defaultWidth*this.baseScale)/(2*this.baseScale)):(this.baseScale=this.width/this.defaultWidth,this.baseTransY=Math.abs(this.height-this.defaultHeight*this.baseScale)/(2*this.baseScale)),this.scale*=this.baseScale/t,this.transX*=this.baseScale/t,this.transY*=this.baseScale/t},setSize:function(){this.width=this.container.width(),this.height=this.container.height(),this.resize(),this.canvas.setSize(this.width,this.height),this.applyTransform()},reset:function(){var t,e;for(t in this.series)for(e=0;e<this.series[t].length;e++)this.series[t][e].clear();this.scale=this.baseScale,this.transX=this.baseTransX,this.transY=this.baseTransY,this.applyTransform()},applyTransform:function(){var t,e,s,a;this.defaultWidth*this.scale<=this.width?(t=(this.width-this.defaultWidth*this.scale)/(2*this.scale),s=(this.width-this.defaultWidth*this.scale)/(2*this.scale)):(t=0,s=(this.width-this.defaultWidth*this.scale)/this.scale),this.defaultHeight*this.scale<=this.height?(e=(this.height-this.defaultHeight*this.scale)/(2*this.scale),a=(this.height-this.defaultHeight*this.scale)/(2*this.scale)):(e=0,a=(this.height-this.defaultHeight*this.scale)/this.scale),this.transY>e?this.transY=e:this.transY<a&&(this.transY=a),this.transX>t?this.transX=t:this.transX<s&&(this.transX=s),this.canvas.applyTransformParams(this.scale,this.transX,this.transY),this.markers&&this.repositionMarkers(),this.container.trigger("viewportChange",[this.scale/this.baseScale,this.transX,this.transY])},bindContainerEvents:function(){var t,e,s=!1,a=this;this.container.mousemove(function(i){return s&&(a.transX-=(t-i.pageX)/a.scale,a.transY-=(e-i.pageY)/a.scale,a.applyTransform(),t=i.pageX,e=i.pageY),!1}).mousedown(function(a){return s=!0,t=a.pageX,e=a.pageY,!1}),jvm.$("body").mouseup(function(){s=!1}),this.params.zoomOnScroll&&this.container.mousewheel(function(t,e,s,i){var n=jvm.$(a.container).offset(),r=t.pageX-n.left,h=t.pageY-n.top,o=Math.pow(1.3,i);a.label.hide(),a.setScale(a.scale*o,r,h),t.preventDefault()})},bindContainerTouchEvents:function(){var t,e,s,a,i,n,r,h=this,o=function(o){var l,c,m,p,d=o.originalEvent.touches;"touchstart"==o.type&&(r=0),1==d.length?(1==r&&(m=h.transX,p=h.transY,h.transX-=(s-d[0].pageX)/h.scale,h.transY-=(a-d[0].pageY)/h.scale,h.applyTransform(),h.label.hide(),(m!=h.transX||p!=h.transY)&&o.preventDefault()),s=d[0].pageX,a=d[0].pageY):2==d.length&&(2==r?(c=Math.sqrt(Math.pow(d[0].pageX-d[1].pageX,2)+Math.pow(d[0].pageY-d[1].pageY,2))/e,h.setScale(t*c,i,n),h.label.hide(),o.preventDefault()):(l=jvm.$(h.container).offset(),i=d[0].pageX>d[1].pageX?d[1].pageX+(d[0].pageX-d[1].pageX)/2:d[0].pageX+(d[1].pageX-d[0].pageX)/2,n=d[0].pageY>d[1].pageY?d[1].pageY+(d[0].pageY-d[1].pageY)/2:d[0].pageY+(d[1].pageY-d[0].pageY)/2,i-=l.left,n-=l.top,t=h.scale,e=Math.sqrt(Math.pow(d[0].pageX-d[1].pageX,2)+Math.pow(d[0].pageY-d[1].pageY,2)))),r=d.length};jvm.$(this.container).bind("touchstart",o),jvm.$(this.container).bind("touchmove",o)},bindElementEvents:function(){var t,e=this;this.container.mousemove(function(){t=!0}),this.container.delegate("[class~='jvectormap-element']","mouseover mouseout",function(t){var s=jvm.$(this).attr("class").baseVal?jvm.$(this).attr("class").baseVal:jvm.$(this).attr("class"),a=-1===s.indexOf("jvectormap-region")?"marker":"region",i="region"==a?jvm.$(this).attr("data-code"):jvm.$(this).attr("data-index"),n="region"==a?e.regions[i].element:e.markers[i].element,r="region"==a?e.mapData.paths[i].name:e.markers[i].config.name||"",h=jvm.$.Event(a+"LabelShow.jvectormap"),o=jvm.$.Event(a+"Over.jvectormap");"mouseover"==t.type?(e.container.trigger(o,[i]),o.isDefaultPrevented()||n.setHovered(!0),e.label.text(r),e.container.trigger(h,[e.label,i]),h.isDefaultPrevented()||(e.label.show(),e.labelWidth=e.label.width(),e.labelHeight=e.label.height())):(n.setHovered(!1),e.label.hide(),e.container.trigger(a+"Out.jvectormap",[i]))}),this.container.delegate("[class~='jvectormap-element']","mousedown",function(){t=!1}),this.container.delegate("[class~='jvectormap-element']","mouseup",function(){var s=jvm.$(this).attr("class").baseVal?jvm.$(this).attr("class").baseVal:jvm.$(this).attr("class"),a=-1===s.indexOf("jvectormap-region")?"marker":"region",i="region"==a?jvm.$(this).attr("data-code"):jvm.$(this).attr("data-index"),n=jvm.$.Event(a+"Click.jvectormap"),r="region"==a?e.regions[i].element:e.markers[i].element;t||(e.container.trigger(n,[i]),("region"===a&&e.params.regionsSelectable||"marker"===a&&e.params.markersSelectable)&&(n.isDefaultPrevented()||(e.params[a+"sSelectableOne"]&&e.clearSelected(a+"s"),r.setSelected(!r.isSelected))))})},bindZoomButtons:function(){var t=this;jvm.$("<div/>").addClass("jvectormap-zoomin").text("+").appendTo(this.container),jvm.$("<div/>").addClass("jvectormap-zoomout").html("&#x2212;").appendTo(this.container),this.container.find(".jvectormap-zoomin").click(function(){t.setScale(t.scale*t.params.zoomStep,t.width/2,t.height/2)}),this.container.find(".jvectormap-zoomout").click(function(){t.setScale(t.scale/t.params.zoomStep,t.width/2,t.height/2)})},createLabel:function(){var t=this;this.label=jvm.$("<div/>").addClass("jvectormap-label").appendTo(jvm.$("body")),this.container.mousemove(function(e){var s=e.pageX-15-t.labelWidth,a=e.pageY-15-t.labelHeight;5>s&&(s=e.pageX+15),5>a&&(a=e.pageY+15),t.label.is(":visible")&&t.label.css({left:s,top:a})})},setScale:function(t,e,s,a){var i,n=jvm.$.Event("zoom.jvectormap");t>this.params.zoomMax*this.baseScale?t=this.params.zoomMax*this.baseScale:t<this.params.zoomMin*this.baseScale&&(t=this.params.zoomMin*this.baseScale),"undefined"!=typeof e&&"undefined"!=typeof s&&(i=t/this.scale,a?(this.transX=e+this.defaultWidth*(this.width/(this.defaultWidth*t))/2,this.transY=s+this.defaultHeight*(this.height/(this.defaultHeight*t))/2):(this.transX-=(i-1)/t*e,this.transY-=(i-1)/t*s)),this.scale=t,this.applyTransform(),this.container.trigger(n,[t/this.baseScale])},setFocus:function(t,e,s){var a,i,n,r,h;if(jvm.$.isArray(t)||this.regions[t]){for(r=jvm.$.isArray(t)?t:[t],h=0;h<r.length;h++)this.regions[r[h]]&&(i=this.regions[r[h]].element.getBBox(),i&&("undefined"==typeof a?a=i:(n={x:Math.min(a.x,i.x),y:Math.min(a.y,i.y),width:Math.max(a.x+a.width,i.x+i.width)-Math.min(a.x,i.x),height:Math.max(a.y+a.height,i.y+i.height)-Math.min(a.y,i.y)},a=n)));this.setScale(Math.min(this.width/a.width,this.height/a.height),-(a.x+a.width/2),-(a.y+a.height/2),!0)}else t*=this.baseScale,this.setScale(t,-e*this.defaultWidth,-s*this.defaultHeight,!0)},getSelected:function(t){var e,s=[];for(e in this[t])this[t][e].element.isSelected&&s.push(e);return s},getSelectedRegions:function(){return this.getSelected("regions")},getSelectedMarkers:function(){return this.getSelected("markers")},setSelected:function(t,e){var s;if("object"!=typeof e&&(e=[e]),jvm.$.isArray(e))for(s=0;s<e.length;s++)this[t][e[s]].element.setSelected(!0);else for(s in e)this[t][s].element.setSelected(!!e[s])},setSelectedRegions:function(t){this.setSelected("regions",t)},setSelectedMarkers:function(t){this.setSelected("markers",t)},clearSelected:function(t){var e,s={},a=this.getSelected(t);for(e=0;e<a.length;e++)s[a[e]]=!1;this.setSelected(t,s)},clearSelectedRegions:function(){this.clearSelected("regions")},clearSelectedMarkers:function(){this.clearSelected("markers")},getMapObject:function(){return this},getRegionName:function(t){return this.mapData.paths[t].name},createRegions:function(){var t,e,s=this;for(t in this.mapData.paths)e=this.canvas.addPath({d:this.mapData.paths[t].path,"data-code":t},jvm.$.extend(!0,{},this.params.regionStyle)),jvm.$(e.node).bind("selected",function(t,e){s.container.trigger("regionSelected.jvectormap",[jvm.$(this).attr("data-code"),e,s.getSelectedRegions()])}),e.addClass("jvectormap-region jvectormap-element"),this.regions[t]={element:e,config:this.mapData.paths[t]}},createMarkers:function(t){var e,s,a,i,n,r=this;if(this.markersGroup=this.markersGroup||this.canvas.addGroup(),jvm.$.isArray(t))for(n=t.slice(),t={},e=0;e<n.length;e++)t[e]=n[e];for(e in t)i=t[e]instanceof Array?{latLng:t[e]}:t[e],a=this.getMarkerPosition(i),a!==!1&&(s=this.canvas.addCircle({"data-index":e,cx:a.x,cy:a.y},jvm.$.extend(!0,{},this.params.markerStyle,{initial:i.style||{}}),this.markersGroup),s.addClass("jvectormap-marker jvectormap-element"),jvm.$(s.node).bind("selected",function(t,e){r.container.trigger("markerSelected.jvectormap",[jvm.$(this).attr("data-index"),e,r.getSelectedMarkers()])}),this.markers[e]&&this.removeMarkers([e]),this.markers[e]={element:s,config:i})},repositionMarkers:function(){var t,e;for(t in this.markers)e=this.getMarkerPosition(this.markers[t].config),e!==!1&&this.markers[t].element.setStyle({cx:e.x,cy:e.y})},getMarkerPosition:function(t){return jvm.WorldMap.maps[this.params.map].projection?this.latLngToPoint.apply(this,t.latLng||[0,0]):{x:t.coords[0]*this.scale+this.transX*this.scale,y:t.coords[1]*this.scale+this.transY*this.scale}},addMarker:function(t,e,s){var a,i,n={},r=[],s=s||[];for(n[t]=e,i=0;i<s.length;i++)a={},a[t]=s[i],r.push(a);this.addMarkers(n,r)},addMarkers:function(t,e){var s;for(e=e||[],this.createMarkers(t),s=0;s<e.length;s++)this.series.markers[s].setValues(e[s]||{})},removeMarkers:function(t){var e;for(e=0;e<t.length;e++)this.markers[t[e]].element.remove(),delete this.markers[t[e]]},removeAllMarkers:function(){var t,e=[];for(t in this.markers)e.push(t);this.removeMarkers(e)},latLngToPoint:function(t,e){var s,a,i,n=jvm.WorldMap.maps[this.params.map].projection,r=n.centralMeridian;this.width-2*this.baseTransX*this.baseScale,this.height-2*this.baseTransY*this.baseScale,this.scale/this.baseScale;return-180+r>e&&(e+=360),s=jvm.Proj[n.type](t,e,r),a=this.getInsetForPoint(s.x,s.y),a?(i=a.bbox,s.x=(s.x-i[0].x)/(i[1].x-i[0].x)*a.width*this.scale,s.y=(s.y-i[0].y)/(i[1].y-i[0].y)*a.height*this.scale,{x:s.x+this.transX*this.scale+a.left*this.scale,y:s.y+this.transY*this.scale+a.top*this.scale}):!1},pointToLatLng:function(t,e){var s,a,i,n,r,h=jvm.WorldMap.maps[this.params.map].projection,o=h.centralMeridian,l=jvm.WorldMap.maps[this.params.map].insets;for(s=0;s<l.length;s++)if(a=l[s],i=a.bbox,n=t-(this.transX*this.scale+a.left*this.scale),r=e-(this.transY*this.scale+a.top*this.scale),n=n/(a.width*this.scale)*(i[1].x-i[0].x)+i[0].x,r=r/(a.height*this.scale)*(i[1].y-i[0].y)+i[0].y,n>i[0].x&&n<i[1].x&&r>i[0].y&&r<i[1].y)return jvm.Proj[h.type+"_inv"](n,-r,o);return!1},getInsetForPoint:function(t,e){var s,a,i=jvm.WorldMap.maps[this.params.map].insets;for(s=0;s<i.length;s++)if(a=i[s].bbox,t>a[0].x&&t<a[1].x&&e>a[0].y&&e<a[1].y)return i[s]},createSeries:function(){var t,e;this.series={markers:[],regions:[]};for(e in this.params.series)for(t=0;t<this.params.series[e].length;t++)this.series[e][t]=new jvm.DataSeries(this.params.series[e][t],this[e])},remove:function(){this.label.remove(),this.container.remove(),jvm.$(window).unbind("resize",this.onResize)}},jvm.WorldMap.maps={},jvm.WorldMap.defaultParams={map:"world_mill_en",backgroundColor:"#505050",zoomButtons:!0,zoomOnScroll:!0,zoomMax:8,zoomMin:1,zoomStep:1.6,regionsSelectable:!1,markersSelectable:!1,bindTouchEvents:!0,regionStyle:{initial:{fill:"white","fill-opacity":1,stroke:"none","stroke-width":0,"stroke-opacity":1},hover:{"fill-opacity":.8},selected:{fill:"yellow"},selectedHover:{}},markerStyle:{initial:{fill:"grey",stroke:"#505050","fill-opacity":1,"stroke-width":1,"stroke-opacity":1,r:5},hover:{stroke:"black","stroke-width":2},selected:{fill:"blue"},selectedHover:{}}},jvm.WorldMap.apiEvents={
onRegionLabelShow:"regionLabelShow",onRegionOver:"regionOver",onRegionOut:"regionOut",onRegionClick:"regionClick",onRegionSelected:"regionSelected",onMarkerLabelShow:"markerLabelShow",onMarkerOver:"markerOver",onMarkerOut:"markerOut",onMarkerClick:"markerClick",onMarkerSelected:"markerSelected",onViewportChange:"viewportChange"};