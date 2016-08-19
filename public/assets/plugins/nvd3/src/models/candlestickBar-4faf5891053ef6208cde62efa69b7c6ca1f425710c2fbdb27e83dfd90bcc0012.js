nv.models.candlestickBar=function(){"use strict";function t(w){return w.each(function(t){n=d3.select(this);var w=nv.utils.availableWidth(o,n,c),C=nv.utils.availableHeight(u,n,c);nv.utils.initSVG(n);var M=w/t[0].values.length*.45;l.domain(e||d3.extent(t[0].values.map(d).concat(k))),b?l.range(r||[.5*w/t[0].values.length,w*(t[0].values.length-.5)/t[0].values.length]):l.range(r||[5+M/2,w-M/2-5]),f.domain(i||[d3.min(t[0].values.map(m).concat(x)),d3.max(t[0].values.map(p).concat(x))]).range(a||[C,0]),l.domain()[0]===l.domain()[1]&&(l.domain()[0]?l.domain([l.domain()[0]-.01*l.domain()[0],l.domain()[1]+.01*l.domain()[1]]):l.domain([-1,1])),f.domain()[0]===f.domain()[1]&&(f.domain()[0]?f.domain([f.domain()[0]+.01*f.domain()[0],f.domain()[1]-.01*f.domain()[1]]):f.domain([-1,1]));var D=d3.select(this).selectAll("g.nv-wrap.nv-candlestickBar").data([t[0].values]),S=D.enter().append("g").attr("class","nvd3 nv-wrap nv-candlestickBar"),H=S.append("defs"),A=S.append("g"),E=D.select("g");A.append("g").attr("class","nv-ticks"),D.attr("transform","translate("+c.left+","+c.top+")"),n.on("click",function(t,n){B.chartClick({data:t,index:n,pos:d3.event,id:s})}),H.append("clipPath").attr("id","nv-chart-clip-path-"+s).append("rect"),D.select("#nv-chart-clip-path-"+s+" rect").attr("width",w).attr("height",C),E.attr("clip-path",y?"url(#nv-chart-clip-path-"+s+")":"");var O=D.select(".nv-ticks").selectAll(".nv-tick").data(function(t){return t});O.exit().remove();var P=O.enter().append("g");O.attr("class",function(t,n,e){return(g(t,n)>h(t,n)?"nv-tick negative":"nv-tick positive")+" nv-tick-"+e+"-"+n});P.append("line").attr("class","nv-candlestick-lines").attr("transform",function(t,n){return"translate("+l(d(t,n))+",0)"}).attr("x1",0).attr("y1",function(t,n){return f(p(t,n))}).attr("x2",0).attr("y2",function(t,n){return f(m(t,n))}),P.append("rect").attr("class","nv-candlestick-rects nv-bars").attr("transform",function(t,n){return"translate("+(l(d(t,n))-M/2)+","+(f(v(t,n))-(g(t,n)>h(t,n)?f(h(t,n))-f(g(t,n)):0))+")"}).attr("x",0).attr("y",0).attr("width",M).attr("height",function(t,n){var e=g(t,n),i=h(t,n);return e>i?f(i)-f(e):f(e)-f(i)});O.select(".nv-candlestick-lines").transition().attr("transform",function(t,n){return"translate("+l(d(t,n))+",0)"}).attr("x1",0).attr("y1",function(t,n){return f(p(t,n))}).attr("x2",0).attr("y2",function(t,n){return f(m(t,n))}),O.select(".nv-candlestick-rects").transition().attr("transform",function(t,n){return"translate("+(l(d(t,n))-M/2)+","+(f(v(t,n))-(g(t,n)>h(t,n)?f(h(t,n))-f(g(t,n)):0))+")"}).attr("x",0).attr("y",0).attr("width",M).attr("height",function(t,n){var e=g(t,n),i=h(t,n);return e>i?f(i)-f(e):f(e)-f(i)})}),t}var n,e,i,r,a,c={top:0,right:0,bottom:0,left:0},o=null,u=null,s=Math.floor(1e4*Math.random()),l=d3.scale.linear(),f=d3.scale.linear(),d=function(t){return t.x},v=function(t){return t.y},g=function(t){return t.open},h=function(t){return t.close},p=function(t){return t.high},m=function(t){return t.low},k=[],x=[],b=!1,y=!0,w=nv.utils.defaultColor(),C=!1,B=d3.dispatch("stateChange","changeState","renderEnd","chartClick","elementClick","elementDblClick","elementMouseover","elementMouseout","elementMousemove");return t.highlightPoint=function(e,i){t.clearHighlights(),n.select(".nv-candlestickBar .nv-tick-0-"+e).classed("hover",i)},t.clearHighlights=function(){n.select(".nv-candlestickBar .nv-tick.hover").classed("hover",!1)},t.dispatch=B,t.options=nv.utils.optionsFunc.bind(t),t._options=Object.create({},{width:{get:function(){return o},set:function(t){o=t}},height:{get:function(){return u},set:function(t){u=t}},xScale:{get:function(){return l},set:function(t){l=t}},yScale:{get:function(){return f},set:function(t){f=t}},xDomain:{get:function(){return e},set:function(t){e=t}},yDomain:{get:function(){return i},set:function(t){i=t}},xRange:{get:function(){return r},set:function(t){r=t}},yRange:{get:function(){return a},set:function(t){a=t}},forceX:{get:function(){return k},set:function(t){k=t}},forceY:{get:function(){return x},set:function(t){x=t}},padData:{get:function(){return b},set:function(t){b=t}},clipEdge:{get:function(){return y},set:function(t){y=t}},id:{get:function(){return s},set:function(t){s=t}},interactive:{get:function(){return C},set:function(t){C=t}},x:{get:function(){return d},set:function(t){d=t}},y:{get:function(){return v},set:function(t){v=t}},open:{get:function(){return g()},set:function(t){g=t}},close:{get:function(){return h()},set:function(t){h=t}},high:{get:function(){return p},set:function(t){p=t}},low:{get:function(){return m},set:function(t){m=t}},margin:{get:function(){return c},set:function(t){c.top=void 0!=t.top?t.top:c.top,c.right=void 0!=t.right?t.right:c.right,c.bottom=void 0!=t.bottom?t.bottom:c.bottom,c.left=void 0!=t.left?t.left:c.left}},color:{get:function(){return w},set:function(t){w=nv.utils.getColor(t)}}}),nv.utils.initOptions(t),t};