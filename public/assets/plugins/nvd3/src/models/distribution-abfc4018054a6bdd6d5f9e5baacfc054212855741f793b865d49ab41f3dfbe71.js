nv.models.distribution=function(){"use strict";function n(t){return g.reset(),t.each(function(t){"x"===c?(l.left,l.right):(l.top,l.bottom);var n="x"==c?"y":"x",e=d3.select(this);nv.utils.initSVG(e),s=s||p;var r=e.selectAll("g.nv-distribution").data([t]),i=(r.enter().append("g").attr("class","nvd3 nv-distribution").append("g"),r.select("g"));r.attr("transform","translate("+l.left+","+l.top+")");var o=i.selectAll("g.nv-dist").data(function(t){return t},function(t){return t.key});o.enter().append("g"),o.attr("class",function(t,n){return"nv-dist nv-series-"+n}).style("stroke",function(t,n){return f(t,n)});var u=o.selectAll("line.nv-dist"+c).data(function(t){return t.values});u.enter().append("line").attr(c+"1",function(t,n){return s(d(t,n))}).attr(c+"2",function(t,n){return s(d(t,n))}),g.transition(o.exit().selectAll("line.nv-dist"+c),"dist exit").attr(c+"1",function(t,n){return p(d(t,n))}).attr(c+"2",function(t,n){return p(d(t,n))}).style("stroke-opacity",0).remove(),u.attr("class",function(t,n){return"nv-dist"+c+" nv-dist"+c+"-"+n}).attr(n+"1",0).attr(n+"2",a),g.transition(u,"dist").attr(c+"1",function(t,n){return p(d(t,n))}).attr(c+"2",function(t,n){return p(d(t,n))}),s=p.copy()}),g.renderEnd("distribution immediate"),n}var s,l={top:0,right:0,bottom:0,left:0},e=400,a=8,c="x",d=function(t){return t[c]},f=nv.utils.defaultColor(),p=d3.scale.linear(),r=250,t=d3.dispatch("renderEnd"),g=nv.utils.renderWatch(t,r);return n.options=nv.utils.optionsFunc.bind(n),n.dispatch=t,n.margin=function(t){return arguments.length?(l.top="undefined"!=typeof t.top?t.top:l.top,l.right="undefined"!=typeof t.right?t.right:l.right,l.bottom="undefined"!=typeof t.bottom?t.bottom:l.bottom,l.left="undefined"!=typeof t.left?t.left:l.left,n):l},n.width=function(t){return arguments.length?(e=t,n):e},n.axis=function(t){return arguments.length?(c=t,n):c},n.size=function(t){return arguments.length?(a=t,n):a},n.getData=function(t){return arguments.length?(d=d3.functor(t),n):d},n.scale=function(t){return arguments.length?(p=t,n):p},n.color=function(t){return arguments.length?(f=nv.utils.getColor(t),n):f},n.duration=function(t){return arguments.length?(r=t,g.reset(r),n):r},n};