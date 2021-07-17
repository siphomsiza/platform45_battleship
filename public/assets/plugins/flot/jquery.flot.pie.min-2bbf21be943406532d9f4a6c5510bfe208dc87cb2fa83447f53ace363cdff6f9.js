!function(I){function e(p){function r(e){y||(y=!0,f=e.getCanvas(),w=I(f).parent(),k=e.getOptions(),e.setData(i(e.getData())))}function i(e){for(var i=0,s=0,t=0,r=k.series.pie.combine.color,a=[],l=0;l<e.length;++l){var n=e[l].data;I.isArray(n)&&1==n.length&&(n=n[0]),I.isArray(n)?!isNaN(parseFloat(n[1]))&&isFinite(n[1])?n[1]=+n[1]:n[1]=0:n=!isNaN(parseFloat(n))&&isFinite(n)?[1,+n]:[1,0],e[l].data=[n]}for(l=0;l<e.length;++l)i+=e[l].data[0][1];for(l=0;l<e.length;++l){(n=e[l].data[0][1])/i<=k.series.pie.combine.threshold&&(s+=n,t++,r||(r=e[l].color))}for(l=0;l<e.length;++l){n=e[l].data[0][1];(t<2||n/i>k.series.pie.combine.threshold)&&a.push({data:[[1,n]],color:e[l].color,label:e[l].label,angle:n*Math.PI*2/i,percent:n/(i/100)})}return 1<t&&a.push({data:[[1,s]],color:r,label:k.series.pie.combine.label,angle:s*Math.PI*2/i,percent:s/(i/100)}),a}function s(e,i){function s(){m.clearRect(0,0,v,b),w.children().filter(".pieLabel, .pieLabelBackground").remove()}function t(){var e=k.series.pie.shadow.left,i=k.series.pie.shadow.top,s=10,t=k.series.pie.shadow.alpha,r=1<k.series.pie.radius?k.series.pie.radius:M*k.series.pie.radius;if(!(v/2-e<=r||r*k.series.pie.tilt>=b/2-i||r<=s)){m.save(),m.translate(e,i),m.globalAlpha=t,m.fillStyle="#000",m.translate(P,A),m.scale(1,k.series.pie.tilt);for(var a=1;a<=s;a++)m.beginPath(),m.arc(0,0,r,0,2*Math.PI,!1),m.fill(),r-=a;m.restore()}}function r(){function e(e,i,s){e<=0||isNaN(e)||(s?m.fillStyle=i:(m.strokeStyle=i,m.lineJoin="round"),m.beginPath(),1e-9<Math.abs(e-2*Math.PI)&&m.moveTo(0,0),m.arc(0,0,r,a,a+e/2,!1),m.arc(0,0,r,a+e/2,a+e,!1),m.closePath(),a+=e,s?m.fill():m.stroke())}function i(){function e(e,i,s){if(0==e.data[0][1])return!0;var t,r=k.legend.labelFormatter,a=k.series.pie.label.formatter;t=r?r(e.label,e):e.label,a&&(t=a(t,e));var l=(i+e.angle+i)/2,n=P+Math.round(Math.cos(l)*f),o=A+Math.round(Math.sin(l)*f)*k.series.pie.tilt,p="<span class='pieLabel' id='pieLabel"+s+"' style='position:absolute;top:"+o+"px;left:"+n+"px;'>"+t+"</span>";w.append(p);var h=w.children("#pieLabel"+s),g=o-h.height()/2,c=n-h.width()/2;if(h.css("top",g),h.css("left",c),0<0-g||0<0-c||b-(g+h.height())<0||v-(c+h.width())<0)return!1;if(0!=k.series.pie.label.background.opacity){var u=k.series.pie.label.background.color;null==u&&(u=e.color);var d="top:"+g+"px;left:"+c+"px;";I("<div class='pieLabelBackground' style='position:absolute;width:"+h.width()+"px;height:"+h.height()+"px;"+d+"background-color:"+u+";'></div>").css("opacity",k.series.pie.label.background.opacity).insertBefore(h)}return!0}for(var i=t,f=1<k.series.pie.label.radius?k.series.pie.label.radius:M*k.series.pie.label.radius,s=0;s<l.length;++s){if(l[s].percent>=100*k.series.pie.label.threshold&&!e(l[s],i,s))return!1;i+=l[s].angle}return!0}var t=Math.PI*k.series.pie.startAngle,r=1<k.series.pie.radius?k.series.pie.radius:M*k.series.pie.radius;m.save(),m.translate(P,A),m.scale(1,k.series.pie.tilt),m.save();for(var a=t,s=0;s<l.length;++s)l[s].startAngle=a,e(l[s].angle,l[s].color,!0);if(m.restore(),0<k.series.pie.stroke.width){m.save(),m.lineWidth=k.series.pie.stroke.width,a=t;for(s=0;s<l.length;++s)e(l[s].angle,k.series.pie.stroke.color,!1);m.restore()}return o(m),m.restore(),!k.series.pie.label.show||i()}if(w){var v=e.getPlaceholder().width(),b=e.getPlaceholder().height(),a=w.children().filter(".legend").children().width()||0;m=i,y=!1,M=Math.min(v,b/k.series.pie.tilt)/2,A=b/2+k.series.pie.offset.top,P=v/2,"auto"==k.series.pie.offset.left?(k.legend.position.match("w")?P+=a/2:P-=a/2,P<M?P=M:v-M<P&&(P=v-M)):P+=k.series.pie.offset.left;for(var l=e.getData(),n=0;0<n&&(M*=x),n+=1,s(),k.series.pie.tilt<=.8&&t(),!r()&&n<O;);O<=n&&(s(),w.prepend("<div class='error'>Could not draw pie with labels contained inside canvas</div>")),e.setSeries&&e.insertLegend&&(e.setSeries(l),e.insertLegend())}}function o(e){if(0<k.series.pie.innerRadius){e.save();var i=1<k.series.pie.innerRadius?k.series.pie.innerRadius:M*k.series.pie.innerRadius;e.globalCompositeOperation="destination-out",e.beginPath(),e.fillStyle=k.series.pie.stroke.color,e.arc(0,0,i,0,2*Math.PI,!1),e.fill(),e.closePath(),e.restore(),e.save(),e.beginPath(),e.strokeStyle=k.series.pie.stroke.color,e.arc(0,0,i,0,2*Math.PI,!1),e.stroke(),e.closePath(),e.restore()}}function h(e,i){for(var s=!1,t=-1,r=e.length,a=r-1;++t<r;a=t)(e[t][1]<=i[1]&&i[1]<e[a][1]||e[a][1]<=i[1]&&i[1]<e[t][1])&&i[0]<(e[a][0]-e[t][0])*(i[1]-e[t][1])/(e[a][1]-e[t][1])+e[t][0]&&(s=!s);return s}function n(e,i){for(var s,t,r=p.getData(),a=p.getOptions(),l=1<a.series.pie.radius?a.series.pie.radius:M*a.series.pie.radius,n=0;n<r.length;++n){var o=r[n];if(o.pie.show){if(m.save(),m.beginPath(),m.moveTo(0,0),m.arc(0,0,l,o.startAngle,o.startAngle+o.angle/2,!1),m.arc(0,0,l,o.startAngle+o.angle/2,o.startAngle+o.angle,!1),m.closePath(),s=e-P,t=i-A,m.isPointInPath){if(m.isPointInPath(e-P,i-A))return m.restore(),{datapoint:[o.percent,o.data],dataIndex:0,series:o,seriesIndex:n}}else if(h([[0,0],[l*Math.cos(o.startAngle),l*Math.sin(o.startAngle)],[l*Math.cos(o.startAngle+o.angle/4),l*Math.sin(o.startAngle+o.angle/4)],[l*Math.cos(o.startAngle+o.angle/2),l*Math.sin(o.startAngle+o.angle/2)],[l*Math.cos(o.startAngle+o.angle/1.5),l*Math.sin(o.startAngle+o.angle/1.5)],[l*Math.cos(o.startAngle+o.angle),l*Math.sin(o.startAngle+o.angle)]],[s,t]))return m.restore(),{datapoint:[o.percent,o.data],dataIndex:0,series:o,seriesIndex:n};m.restore()}}return null}function t(e){l("plothover",e)}function a(e){l("plotclick",e)}function l(e,i){var s=p.offset(),t=n(parseInt(i.pageX-s.left),parseInt(i.pageY-s.top));if(k.grid.autoHighlight)for(var r=0;r<v.length;++r){var a=v[r];a.auto!=e||t&&a.series==t.series||c(a.series)}t&&g(t.series,e);var l={pageX:i.pageX,pageY:i.pageY};w.trigger(e,[l,t])}function g(e,i){var s=u(e);-1==s?(v.push({series:e,auto:i}),p.triggerRedrawOverlay()):i||(v[s].auto=!1)}function c(e){null==e&&(v=[],p.triggerRedrawOverlay());var i=u(e);-1!=i&&(v.splice(i,1),p.triggerRedrawOverlay())}function u(e){for(var i=0;i<v.length;++i){if(v[i].series==e)return i}return-1}function d(e,i){function s(e){e.angle<=0||isNaN(e.angle)||(i.fillStyle="rgba(255, 255, 255, "+t.series.pie.highlight.opacity+")",i.beginPath(),1e-9<Math.abs(e.angle-2*Math.PI)&&i.moveTo(0,0),i.arc(0,0,r,e.startAngle,e.startAngle+e.angle/2,!1),i.arc(0,0,r,e.startAngle+e.angle/2,e.startAngle+e.angle,!1),i.closePath(),i.fill())}var t=e.getOptions(),r=1<t.series.pie.radius?t.series.pie.radius:M*t.series.pie.radius;i.save(),i.translate(P,A),i.scale(1,t.series.pie.tilt);for(var a=0;a<v.length;++a)s(v[a].series);o(i),i.restore()}var f=null,w=null,k=null,M=null,P=null,A=null,y=!1,m=null,v=[];p.hooks.processOptions.push(function(e,i){i.series.pie.show&&(i.grid.show=!1,"auto"==i.series.pie.label.show&&(i.legend.show?i.series.pie.label.show=!1:i.series.pie.label.show=!0),"auto"==i.series.pie.radius&&(i.series.pie.label.show?i.series.pie.radius=.75:i.series.pie.radius=1),1<i.series.pie.tilt?i.series.pie.tilt=1:i.series.pie.tilt<0&&(i.series.pie.tilt=0))}),p.hooks.bindEvents.push(function(e,i){var s=e.getOptions();s.series.pie.show&&(s.grid.hoverable&&i.unbind("mousemove").mousemove(t),s.grid.clickable&&i.unbind("click").click(a))}),p.hooks.processDatapoints.push(function(e,i,s,t){e.getOptions().series.pie.show&&r(e,i,s,t)}),p.hooks.drawOverlay.push(function(e,i){e.getOptions().series.pie.show&&d(e,i)}),p.hooks.draw.push(function(e,i){e.getOptions().series.pie.show&&s(e,i)})}var O=10,x=.95,i={series:{pie:{show:!1,radius:"auto",innerRadius:0,startAngle:1.5,tilt:1,shadow:{left:5,top:15,alpha:.02},offset:{top:0,left:"auto"},stroke:{color:"#fff",width:1},label:{show:"auto",formatter:function(e,i){return"<div style='font-size:x-small;text-align:center;padding:2px;color:"+i.color+";'>"+e+"<br/>"+Math.round(i.percent)+"%</div>"},radius:1,background:{color:null,opacity:0},threshold:0},combine:{threshold:-1,color:null,label:"Other"},highlight:{opacity:.5}}}};I.plot.plugins.push({init:e,options:i,name:"pie",version:"1.1"})}(jQuery);