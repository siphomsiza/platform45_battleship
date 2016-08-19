nv.models.historicalBar=function(){"use strict";function t(k){return k.each(function(t){M.reset(),u=d3.select(this);var k=nv.utils.availableWidth(r,u,a),C=nv.utils.availableHeight(l,u,a);nv.utils.initSVG(u),s.domain(n||d3.extent(t[0].values.map(f).concat(h))),g?s.range(i||[.5*k/t[0].values.length,k*(t[0].values.length-.5)/t[0].values.length]):s.range(i||[0,k]),d.domain(e||d3.extent(t[0].values.map(v).concat(m))).range(o||[C,0]),s.domain()[0]===s.domain()[1]&&(s.domain()[0]?s.domain([s.domain()[0]-.01*s.domain()[0],s.domain()[1]+.01*s.domain()[1]]):s.domain([-1,1])),d.domain()[0]===d.domain()[1]&&(d.domain()[0]?d.domain([d.domain()[0]+.01*d.domain()[0],d.domain()[1]-.01*d.domain()[1]]):d.domain([-1,1]));var N=u.selectAll("g.nv-wrap.nv-historicalBar-"+c).data([t[0].values]),w=N.enter().append("g").attr("class","nvd3 nv-wrap nv-historicalBar-"+c),D=w.append("defs"),B=w.append("g"),P=N.select("g");B.append("g").attr("class","nv-bars"),N.attr("transform","translate("+a.left+","+a.top+")"),u.on("click",function(t,n){x.chartClick({data:t,index:n,pos:d3.event,id:c})}),D.append("clipPath").attr("id","nv-chart-clip-path-"+c).append("rect"),N.select("#nv-chart-clip-path-"+c+" rect").attr("width",k).attr("height",C),P.attr("clip-path",p?"url(#nv-chart-clip-path-"+c+")":"");var Z=N.select(".nv-bars").selectAll(".nv-bar").data(function(t){return t},function(t,n){return f(t,n)});Z.exit().remove(),Z.enter().append("rect").attr("x",0).attr("y",function(t,n){return nv.utils.NaNtoZero(d(Math.max(0,v(t,n))))}).attr("height",function(t,n){return nv.utils.NaNtoZero(Math.abs(d(v(t,n))-d(0)))}).attr("transform",function(n,e){return"translate("+(s(f(n,e))-k/t[0].values.length*.45)+",0)"}).on("mouseover",function(t,n){y&&(d3.select(this).classed("hover",!0),x.elementMouseover({data:t,index:n,color:d3.select(this).style("fill")}))}).on("mouseout",function(t,n){y&&(d3.select(this).classed("hover",!1),x.elementMouseout({data:t,index:n,color:d3.select(this).style("fill")}))}).on("mousemove",function(t,n){y&&x.elementMousemove({data:t,index:n,color:d3.select(this).style("fill")})}).on("click",function(t,n){y&&(x.elementClick({data:t,index:n,color:d3.select(this).style("fill")}),d3.event.stopPropagation())}).on("dblclick",function(t,n){y&&(x.elementDblClick({data:t,index:n,color:d3.select(this).style("fill")}),d3.event.stopPropagation())}),Z.attr("fill",function(t,n){return b(t,n)}).attr("class",function(t,n,e){return(v(t,n)<0?"nv-bar negative":"nv-bar positive")+" nv-bar-"+e+"-"+n}).watchTransition(M,"bars").attr("transform",function(n,e){return"translate("+(s(f(n,e))-k/t[0].values.length*.45)+",0)"}).attr("width",k/t[0].values.length*.9),Z.watchTransition(M,"bars").attr("y",function(t,n){var e=v(t,n)<0?d(0):d(0)-d(v(t,n))<1?d(0)-1:d(v(t,n));return nv.utils.NaNtoZero(e)}).attr("height",function(t,n){return nv.utils.NaNtoZero(Math.max(Math.abs(d(v(t,n))-d(0)),1))})}),M.renderEnd("historicalBar immediate"),t}var n,e,i,o,a={top:0,right:0,bottom:0,left:0},r=null,l=null,c=Math.floor(1e4*Math.random()),u=null,s=d3.scale.linear(),d=d3.scale.linear(),f=function(t){return t.x},v=function(t){return t.y},h=[],m=[0],g=!1,p=!0,b=nv.utils.defaultColor(),x=d3.dispatch("chartClick","elementClick","elementDblClick","elementMouseover","elementMouseout","elementMousemove","renderEnd"),y=!0,M=nv.utils.renderWatch(x,0);return t.highlightPoint=function(t,n){u.select(".nv-bars .nv-bar-0-"+t).classed("hover",n)},t.clearHighlights=function(){u.select(".nv-bars .nv-bar.hover").classed("hover",!1)},t.dispatch=x,t.options=nv.utils.optionsFunc.bind(t),t._options=Object.create({},{width:{get:function(){return r},set:function(t){r=t}},height:{get:function(){return l},set:function(t){l=t}},forceX:{get:function(){return h},set:function(t){h=t}},forceY:{get:function(){return m},set:function(t){m=t}},padData:{get:function(){return g},set:function(t){g=t}},x:{get:function(){return f},set:function(t){f=t}},y:{get:function(){return v},set:function(t){v=t}},xScale:{get:function(){return s},set:function(t){s=t}},yScale:{get:function(){return d},set:function(t){d=t}},xDomain:{get:function(){return n},set:function(t){n=t}},yDomain:{get:function(){return e},set:function(t){e=t}},xRange:{get:function(){return i},set:function(t){i=t}},yRange:{get:function(){return o},set:function(t){o=t}},clipEdge:{get:function(){return p},set:function(t){p=t}},id:{get:function(){return c},set:function(t){c=t}},interactive:{get:function(){return y},set:function(t){y=t}},margin:{get:function(){return a},set:function(t){a.top=void 0!==t.top?t.top:a.top,a.right=void 0!==t.right?t.right:a.right,a.bottom=void 0!==t.bottom?t.bottom:a.bottom,a.left=void 0!==t.left?t.left:a.left}},color:{get:function(){return b},set:function(t){b=nv.utils.getColor(t)}}}),nv.utils.initOptions(t),t};