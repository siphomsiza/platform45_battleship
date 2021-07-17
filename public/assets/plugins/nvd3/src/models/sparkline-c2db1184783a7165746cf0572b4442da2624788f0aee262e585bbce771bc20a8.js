nv.models.sparkline=function(){"use strict";function n(t){return t.each(function(t){var n=s-l.left-l.right,e=d-l.top-l.bottom;p=d3.select(this),nv.utils.initSVG(p),g.domain(u||d3.extent(t,m)).range(a||[0,n]),v.domain(c||d3.extent(t,x)).range(f||[e,0]);var r=p.selectAll("g.nv-wrap.nv-sparkline").data([t]);r.enter().append("g").attr("class","nvd3 nv-wrap nv-sparkline").append("g"),r.select("g");r.attr("transform","translate("+l.left+","+l.top+")");var i=r.selectAll("path").data(function(t){return[t]});i.enter().append("path"),i.exit().remove(),i.style("stroke",function(t,n){return t.color||h(t,n)}).attr("d",d3.svg.line().x(function(t,n){return g(m(t,n))}).y(function(t,n){return v(x(t,n))}));var o=r.selectAll("circle.nv-point").data(function(e){function t(t){if(-1==t)return null;var n=e[t];return n.pointIndex=t,n}var n=e.map(function(t,n){return x(t,n)}),r=t(n.lastIndexOf(v.domain()[1]));return[t(n.indexOf(v.domain()[0])),r,t(n.length-1)].filter(function(t){return null!=t})});o.enter().append("circle"),o.exit().remove(),o.attr("cx",function(t){return g(m(t,t.pointIndex))}).attr("cy",function(t){return v(x(t,t.pointIndex))}).attr("r",2).attr("class",function(t){return m(t,t.pointIndex)==g.domain()[1]?"nv-point nv-currentValue":x(t,t.pointIndex)==v.domain()[0]?"nv-point nv-minValue":"nv-point nv-maxValue"})}),n}var u,c,a,f,l={top:2,right:0,bottom:2,left:0},s=400,d=32,p=null,e=!0,g=d3.scale.linear(),v=d3.scale.linear(),m=function(t){return t.x},x=function(t){return t.y},h=nv.utils.getColor(["#000"]);return n.options=nv.utils.optionsFunc.bind(n),n._options=Object.create({},{width:{get:function(){return s},set:function(t){s=t}},height:{get:function(){return d},set:function(t){d=t}},xDomain:{get:function(){return u},set:function(t){u=t}},yDomain:{get:function(){return c},set:function(t){c=t}},xRange:{get:function(){return a},set:function(t){a=t}},yRange:{get:function(){return f},set:function(t){f=t}},xScale:{get:function(){return g},set:function(t){g=t}},yScale:{get:function(){return v},set:function(t){v=t}},animate:{get:function(){return e},set:function(t){e=t}},x:{get:function(){return m},set:function(t){m=d3.functor(t)}},y:{get:function(){return x},set:function(t){x=d3.functor(t)}},margin:{get:function(){return l},set:function(t){l.top=t.top!==undefined?t.top:l.top,l.right=t.right!==undefined?t.right:l.right,l.bottom=t.bottom!==undefined?t.bottom:l.bottom,l.left=t.left!==undefined?t.left:l.left}},color:{get:function(){return h},set:function(t){h=nv.utils.getColor(t)}}}),nv.utils.initOptions(n),n};