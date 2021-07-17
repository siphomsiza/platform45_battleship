nv.models.bulletChart=function(){"use strict";function x(y){return y.each(function(t,n){var e=d3.select(this);nv.utils.initSVG(e);var r=nv.utils.availableWidth(D,e,w),i=F-w.top-w.bottom;if(x.update=function(){x(y)},x.container=this,!t||!C.call(this,t,n))return nv.utils.noData(x,e),x;e.selectAll(".nv-noData").remove();var a=C.call(this,t,n).slice().sort(d3.descending),o=M.call(this,t,n).slice().sort(d3.descending),l=A.call(this,t,n).slice().sort(d3.descending),s=e.selectAll("g.nv-wrap.nv-bulletChart").data([t]),u=s.enter().append("g").attr("class","nvd3 nv-wrap nv-bulletChart").append("g"),c=s.select("g");u.append("g").attr("class","nv-bulletWrap"),u.append("g").attr("class","nv-titles"),s.attr("transform","translate("+w.left+","+w.top+")");var d=d3.scale.linear().domain([0,Math.max(a[0],o[0],l[0])]).range(_?[r,0]:[0,r]),f=this.__chart__||d3.scale.linear().domain([0,Infinity]).range(d.range());this.__chart__=d;var p=u.select(".nv-titles").append("g").attr("text-anchor","end").attr("transform","translate(-6,"+(F-w.top-w.bottom)/2+")");p.append("text").attr("class","nv-title").text(function(t){return t.title}),p.append("text").attr("class","nv-subtitle").attr("dy","1em").text(function(t){return t.subtitle}),k.width(r).height(i);var h=c.select(".nv-bulletWrap");d3.transition(h).call(k);var v=O||d.tickFormat(r/100),m=c.selectAll("g.nv-tick").data(d.ticks(W||r/50),function(t){return this.textContent||v(t)}),g=m.enter().append("g").attr("class","nv-tick").attr("transform",function(t){return"translate("+f(t)+",0)"}).style("opacity",1e-6);g.append("line").attr("y1",i).attr("y2",7*i/6),g.append("text").attr("text-anchor","middle").attr("dy","1em").attr("y",7*i/6).text(v);var b=d3.transition(m).attr("transform",function(t){return"translate("+d(t)+",0)"}).style("opacity",1);b.select("line").attr("y1",i).attr("y2",7*i/6),b.select("text").attr("y",7*i/6),d3.transition(m.exit()).attr("transform",function(t){return"translate("+d(t)+",0)"}).style("opacity",1e-6).remove()}),d3.timer.flush(),x}var k=nv.models.bullet(),n=nv.models.tooltip(),e="left",_=!1,w={top:5,right:40,bottom:20,left:120},C=function(t){return t.ranges},M=function(t){return t.markers?t.markers:[0]},A=function(t){return t.measures},D=null,F=55,O=null,W=null,r=null,t=d3.dispatch();return n.duration(0).headerEnabled(!1),k.dispatch.on("elementMouseover.tooltip",function(t){t.series={key:t.label,value:t.value,color:t.color},n.data(t).hidden(!1)}),k.dispatch.on("elementMouseout.tooltip",function(){n.hidden(!0)}),k.dispatch.on("elementMousemove.tooltip",function(){n()}),x.bullet=k,x.dispatch=t,x.tooltip=n,x.options=nv.utils.optionsFunc.bind(x),x._options=Object.create({},{ranges:{get:function(){return C},set:function(t){C=t}},markers:{get:function(){return M},set:function(t){M=t}},measures:{get:function(){return A},set:function(t){A=t}},width:{get:function(){return D},set:function(t){D=t}},height:{get:function(){return F},set:function(t){F=t}},tickFormat:{get:function(){return O},set:function(t){O=t}},ticks:{get:function(){return W},set:function(t){W=t}},noData:{get:function(){return r},set:function(t){r=t}},margin:{get:function(){return w},set:function(t){w.top=t.top!==undefined?t.top:w.top,w.right=t.right!==undefined?t.right:w.right,w.bottom=t.bottom!==undefined?t.bottom:w.bottom,w.left=t.left!==undefined?t.left:w.left}},orient:{get:function(){return e},set:function(t){_="right"==(e=t)||"bottom"==e}}}),nv.utils.inheritOptions(x,k),nv.utils.initOptions(x),x};