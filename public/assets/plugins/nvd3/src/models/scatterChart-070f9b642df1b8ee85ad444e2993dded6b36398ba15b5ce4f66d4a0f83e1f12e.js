nv.models.scatterChart=function(){"use strict";function d(t){return P.reset(),P.models(u),I&&P.models(f),D&&P.models(p),A&&P.models(g),C&&P.models(h),t.each(function(i){k=d3.select(this),nv.utils.initSVG(k);var t,e=nv.utils.availableWidth(b,k,x),n=nv.utils.availableHeight(y,k,x);if(d.update=function(){0===F?k.call(d):k.transition().duration(F).call(d)},d.container=this,X.setter(T(i),d.update).getter(O(i)).update(),X.disabled=i.map(function(t){return!!t.disabled}),!z)for(t in z={},X)X[t]instanceof Array?z[t]=X[t].slice(0):z[t]=X[t];if(!(i&&i.length&&i.filter(function(t){return t.values.length}).length))return nv.utils.noData(d,k),P.renderEnd("scatter immediate"),d;k.selectAll(".nv-noData").remove(),W=u.xScale(),S=u.yScale();var r=k.selectAll("g.nv-wrap.nv-scatterChart").data([i]),a=r.enter().append("g").attr("class","nvd3 nv-wrap nv-scatterChart nv-chart-"+u.id()).append("g"),s=r.select("g");if(a.append("rect").attr("class","nvd3 nv-background").style("pointer-events","none"),a.append("g").attr("class","nv-x nv-axis"),a.append("g").attr("class","nv-y nv-axis"),a.append("g").attr("class","nv-scatterWrap"),a.append("g").attr("class","nv-regressionLinesWrap"),a.append("g").attr("class","nv-distWrap"),a.append("g").attr("class","nv-legendWrap"),Y&&s.select(".nv-y.nv-axis").attr("transform","translate("+e+",0)"),L){var o=e;v.width(o),r.select(".nv-legendWrap").datum(i).call(v),x.top!=v.height()&&(x.top=v.height(),n=nv.utils.availableHeight(y,k,x)),r.select(".nv-legendWrap").attr("transform","translate(0,"+-x.top+")")}r.attr("transform","translate("+x.left+","+x.top+")"),u.width(e).height(n).color(i.map(function(t,e){return t.color=t.color||w(t,e),t.color}).filter(function(t,e){return!i[e].disabled})),r.select(".nv-scatterWrap").datum(i.filter(function(t){return!t.disabled})).call(u),r.select(".nv-regressionLinesWrap").attr("clip-path","url(#nv-edge-clip-"+u.id()+")");var l=r.select(".nv-regressionLinesWrap").selectAll(".nv-regLines").data(function(t){return t});l.enter().append("g").attr("class","nv-regLines");var c=l.selectAll(".nv-regLine").data(function(t){return[t]});c.enter().append("line").attr("class","nv-regLine").style("stroke-opacity",0),c.filter(function(t){return t.intercept&&t.slope}).watchTransition(P,"scatterPlusLineChart: regline").attr("x1",W.range()[0]).attr("x2",W.range()[1]).attr("y1",function(t){return S(W.domain()[0]*t.slope+t.intercept)}).attr("y2",function(t){return S(W.domain()[1]*t.slope+t.intercept)}).style("stroke",function(t,e,n){return w(t,n)}).style("stroke-opacity",function(t){return t.disabled||"undefined"==typeof t.slope||"undefined"==typeof t.intercept?0:1}),I&&(f.scale(W)._ticks(nv.utils.calcTicksX(e/100,i)).tickSize(-n,0),s.select(".nv-x.nv-axis").attr("transform","translate(0,"+S.range()[0]+")").call(f)),D&&(p.scale(S)._ticks(nv.utils.calcTicksY(n/36,i)).tickSize(-e,0),s.select(".nv-y.nv-axis").call(p)),A&&(g.getData(u.x()).scale(W).width(e).color(i.map(function(t,e){return t.color||w(t,e)}).filter(function(t,e){return!i[e].disabled})),a.select(".nv-distWrap").append("g").attr("class","nv-distributionX"),s.select(".nv-distributionX").attr("transform","translate(0,"+S.range()[0]+")").datum(i.filter(function(t){return!t.disabled})).call(g)),C&&(h.getData(u.y()).scale(S).width(n).color(i.map(function(t,e){return t.color||w(t,e)}).filter(function(t,e){return!i[e].disabled})),a.select(".nv-distWrap").append("g").attr("class","nv-distributionY"),s.select(".nv-distributionY").attr("transform","translate("+(Y?e:-h.size())+",0)").datum(i.filter(function(t){return!t.disabled})).call(h)),v.dispatch.on("stateChange",function(t){for(var e in t)X[e]=t[e];E.stateChange(X),d.update()}),E.on("changeState",function(n){"undefined"!=typeof n.disabled&&(i.forEach(function(t,e){t.disabled=n.disabled[e]}),X.disabled=n.disabled),d.update()}),u.dispatch.on("elementMouseout.tooltip",function(t){m.hidden(!0),k.select(".nv-chart-"+u.id()+" .nv-series-"+t.seriesIndex+" .nv-distx-"+t.pointIndex).attr("y1",0),k.select(".nv-chart-"+u.id()+" .nv-series-"+t.seriesIndex+" .nv-disty-"+t.pointIndex).attr("x2",h.size())}),u.dispatch.on("elementMouseover.tooltip",function(t){k.select(".nv-series-"+t.seriesIndex+" .nv-distx-"+t.pointIndex).attr("y1",t.relativePos[1]-n),k.select(".nv-series-"+t.seriesIndex+" .nv-disty-"+t.pointIndex).attr("x2",t.relativePos[0]+g.size()),m.data(t).hidden(!1)}),W.copy(),S.copy()}),P.renderEnd("scatter with line immediate"),d}var u=nv.models.scatter(),f=nv.models.axis(),p=nv.models.axis(),v=nv.models.legend(),g=nv.models.distribution(),h=nv.models.distribution(),m=nv.models.tooltip(),x={top:30,right:20,bottom:50,left:75},b=null,y=null,k=null,w=nv.utils.defaultColor(),W=u.xScale(),S=u.yScale(),A=!1,C=!1,L=!0,I=!0,D=!0,Y=!1,X=nv.utils.state(),z=null,E=d3.dispatch("stateChange","changeState","renderEnd"),e=null,F=250;u.xScale(W).yScale(S),f.orient("bottom").tickPadding(10),p.orient(Y?"right":"left").tickPadding(10),g.axis("x"),h.axis("y"),m.headerFormatter(function(t,e){return f.tickFormat()(t,e)}).valueFormatter(function(t,e){return p.tickFormat()(t,e)});var P=nv.utils.renderWatch(E,F),O=function(t){return function(){return{active:t.map(function(t){return!t.disabled})}}},T=function(t){return function(n){n.active!==undefined&&t.forEach(function(t,e){t.disabled=!n.active[e]})}};return d.dispatch=E,d.scatter=u,d.legend=v,d.xAxis=f,d.yAxis=p,d.distX=g,d.distY=h,d.tooltip=m,d.options=nv.utils.optionsFunc.bind(d),d._options=Object.create({},{width:{get:function(){return b},set:function(t){b=t}},height:{get:function(){return y},set:function(t){y=t}},container:{get:function(){return k},set:function(t){k=t}},showDistX:{get:function(){return A},set:function(t){A=t}},showDistY:{get:function(){return C},set:function(t){C=t}},showLegend:{get:function(){return L},set:function(t){L=t}},showXAxis:{get:function(){return I},set:function(t){I=t}},showYAxis:{get:function(){return D},set:function(t){D=t}},defaultState:{get:function(){return z},set:function(t){z=t}},noData:{get:function(){return e},set:function(t){e=t}},duration:{get:function(){return F},set:function(t){F=t}},margin:{get:function(){return x},set:function(t){x.top=t.top!==undefined?t.top:x.top,x.right=t.right!==undefined?t.right:x.right,x.bottom=t.bottom!==undefined?t.bottom:x.bottom,x.left=t.left!==undefined?t.left:x.left}},rightAlignYAxis:{get:function(){return Y},set:function(t){Y=t,p.orient(t?"right":"left")}},color:{get:function(){return w},set:function(t){w=nv.utils.getColor(t),v.color(w),g.color(w),h.color(w)}}}),nv.utils.inheritOptions(d,u),nv.utils.initOptions(d),d};