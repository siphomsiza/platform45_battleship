nv.models.line=function(){"use strict";function n(t){return O.reset(),O.models(v),t.each(function(t){y=d3.select(this);var n=nv.utils.availableWidth(g,y,h),e=nv.utils.availableHeight(m,y,h);nv.utils.initSVG(y),p=v.xScale(),f=v.yScale(),C=C||p,W=W||f;var i=y.selectAll("g.nv-wrap.nv-line").data([t]),r=i.enter().append("g").attr("class","nvd3 nv-wrap nv-line"),o=r.append("defs"),a=r.append("g"),u=i.select("g");a.append("g").attr("class","nv-groups"),a.append("g").attr("class","nv-scatterWrap"),i.attr("transform","translate("+h.left+","+h.top+")"),v.width(n).height(e);var l=i.select(".nv-scatterWrap");l.call(v),o.append("clipPath").attr("id","nv-edge-clip-"+v.id()).append("rect"),i.select("#nv-edge-clip-"+v.id()+" rect").attr("width",n).attr("height",0<e?e:0),u.attr("clip-path",A?"url(#nv-edge-clip-"+v.id()+")":""),l.attr("clip-path",A?"url(#nv-edge-clip-"+v.id()+")":"");var s=i.select(".nv-groups").selectAll(".nv-group").data(function(t){return t},function(t){return t.key});s.enter().append("g").style("stroke-opacity",1e-6).style("stroke-width",function(t){return t.strokeWidth||N}).style("fill-opacity",1e-6),s.exit().remove(),s.attr("class",function(t,n){return(t.classed||"")+" nv-group nv-series-"+n}).classed("hover",function(t){return t.hover}).style("fill",function(t,n){return x(t,n)}).style("stroke",function(t,n){return x(t,n)}),s.watchTransition(O,"line: groups").style("stroke-opacity",1).style("fill-opacity",function(t){return t.fillOpacity||.5});var c=s.selectAll("path.nv-area").data(function(t){return Z(t)?[t]:[]});c.enter().append("path").attr("class","nv-area").attr("d",function(t){return d3.svg.area().interpolate(M).defined(w).x(function(t,n){return nv.utils.NaNtoZero(C(b(t,n)))}).y0(function(t,n){return nv.utils.NaNtoZero(W(k(t,n)))}).y1(function(){return W(f.domain()[0]<=0?0<=f.domain()[1]?0:f.domain()[1]:f.domain()[0])}).apply(this,[t.values])}),s.exit().selectAll("path.nv-area").remove(),c.watchTransition(O,"line: areaPaths").attr("d",function(t){return d3.svg.area().interpolate(M).defined(w).x(function(t,n){return nv.utils.NaNtoZero(p(b(t,n)))}).y0(function(t,n){return nv.utils.NaNtoZero(f(k(t,n)))}).y1(function(){return f(f.domain()[0]<=0?0<=f.domain()[1]?0:f.domain()[1]:f.domain()[0])}).apply(this,[t.values])});var d=s.selectAll("path.nv-line").data(function(t){return[t.values]});d.enter().append("path").attr("class","nv-line").attr("d",d3.svg.line().interpolate(M).defined(w).x(function(t,n){return nv.utils.NaNtoZero(C(b(t,n)))}).y(function(t,n){return nv.utils.NaNtoZero(W(k(t,n)))})),d.watchTransition(O,"line: linePaths").attr("d",d3.svg.line().interpolate(M).defined(w).x(function(t,n){return nv.utils.NaNtoZero(p(b(t,n)))}).y(function(t,n){return nv.utils.NaNtoZero(f(k(t,n)))})),C=p.copy(),W=f.copy()}),O.renderEnd("line immediate"),n}var p,f,v=nv.models.scatter(),h={top:0,right:0,bottom:0,left:0},g=960,m=500,y=null,N=1.5,x=nv.utils.defaultColor(),b=function(t){return t.x},k=function(t){return t.y},w=function(t,n){return!isNaN(k(t,n))&&null!==k(t,n)},Z=function(t){return t.area},A=!1,M="linear",e=250,t=d3.dispatch("elementClick","elementMouseover","elementMouseout","renderEnd");v.pointSize(16).pointDomain([16,256]);var C,W,O=nv.utils.renderWatch(t,e);return n.dispatch=t,(n.scatter=v).dispatch.on("elementClick",function(){t.elementClick.apply(this,arguments)}),v.dispatch.on("elementMouseover",function(){t.elementMouseover.apply(this,arguments)}),v.dispatch.on("elementMouseout",function(){t.elementMouseout.apply(this,arguments)}),n.options=nv.utils.optionsFunc.bind(n),n._options=Object.create({},{width:{get:function(){return g},set:function(t){g=t}},height:{get:function(){return m},set:function(t){m=t}},defined:{get:function(){return w},set:function(t){w=t}},interpolate:{get:function(){return M},set:function(t){M=t}},clipEdge:{get:function(){return A},set:function(t){A=t}},margin:{get:function(){return h},set:function(t){h.top=t.top!==undefined?t.top:h.top,h.right=t.right!==undefined?t.right:h.right,h.bottom=t.bottom!==undefined?t.bottom:h.bottom,h.left=t.left!==undefined?t.left:h.left}},duration:{get:function(){return e},set:function(t){e=t,O.reset(e),v.duration(e)}},isArea:{get:function(){return Z},set:function(t){Z=d3.functor(t)}},x:{get:function(){return b},set:function(t){b=t,v.x(t)}},y:{get:function(){return k},set:function(t){k=t,v.y(t)}},color:{get:function(){return x},set:function(t){x=nv.utils.getColor(t),v.color(x)}}}),nv.utils.inheritOptions(n,v),nv.utils.initOptions(n),n};