nv.models.cumulativeLineChart=function(){"use strict";function S(t){return i.reset(),i.models(L),X&&i.models(W),_&&i.models(F),t.each(function(c){function t(){d3.select(S.container).style("cursor","ew-resize")}function e(){Z.x=d3.event.x,Z.i=Math.round(U.invert(Z.x)),i()}function n(){d3.select(S.container).style("cursor","auto"),R.index=Z.i,K.stateChange(R)}function i(){w.data([Z]);var t=S.duration();S.duration(0),S.update(),S.duration(t)}var a=d3.select(this);nv.utils.initSVG(a),a.classed("nv-chart-"+N,!0);var r,u=this,o=nv.utils.availableWidth(V,a,G),l=nv.utils.availableHeight(z,a,G);if(S.update=function(){0===Q?a.call(S):a.transition().duration(Q).call(S)},S.container=this,R.setter(tt(c),S.update).getter($(c)).update(),R.disabled=c.map(function(t){return!!t.disabled}),!q)for(r in q={},R)R[r]instanceof Array?q[r]=R[r].slice(0):q[r]=R[r];var s=d3.behavior.drag().on("dragstart",t).on("drag",e).on("dragend",n);if(!(c&&c.length&&c.filter(function(t){return t.values.length}).length))return nv.utils.noData(S,a),S;if(a.selectAll(".nv-noData").remove(),D=L.xScale(),Y=L.yScale(),B)L.yDomain(null);else{var d=c.filter(function(t){return!t.disabled}).map(function(t){var e=d3.extent(t.values,L.y());return e[0]<-.95&&(e[0]=-.95),[(e[0]-e[1])/(1+e[1]),(e[1]-e[0])/(1+e[0])]}),f=[d3.min(d,function(t){return t[0]}),d3.max(d,function(t){return t[1]})];L.yDomain(f)}U.domain([0,c[0].values.length-1]).range([0,o]).clamp(!0);c=A(Z.i,c);var v=T?"none":"all",p=a.selectAll("g.nv-wrap.nv-cumulativeLine").data([c]),g=p.enter().append("g").attr("class","nvd3 nv-wrap nv-cumulativeLine").append("g"),h=p.select("g");if(g.append("g").attr("class","nv-interactive"),g.append("g").attr("class","nv-x nv-axis").style("pointer-events","none"),g.append("g").attr("class","nv-y nv-axis"),g.append("g").attr("class","nv-background"),g.append("g").attr("class","nv-linesWrap").style("pointer-events",v),g.append("g").attr("class","nv-avgLinesWrap").style("pointer-events","none"),g.append("g").attr("class","nv-legendWrap"),g.append("g").attr("class","nv-controlsWrap"),O&&(E.width(o),h.select(".nv-legendWrap").datum(c).call(E),G.top!=E.height()&&(G.top=E.height(),l=nv.utils.availableHeight(z,a,G)),h.select(".nv-legendWrap").attr("transform","translate(0,"+-G.top+")")),P){var m=[{key:"Re-scale y-axis",disabled:!B}];I.width(140).color(["#444","#444","#444"]).rightAlign(!1).margin({top:5,right:0,bottom:5,left:20}),h.select(".nv-controlsWrap").datum(m).attr("transform","translate(0,"+-G.top+")").call(I)}p.attr("transform","translate("+G.left+","+G.top+")"),j&&h.select(".nv-y.nv-axis").attr("transform","translate("+o+",0)");var x=c.filter(function(t){return t.tempDisabled});p.select(".tempDisabled").remove(),x.length&&p.append("text").attr("class","tempDisabled").attr("x",o/2).attr("y","-.71em").style("text-anchor","end").text(x.map(function(t){return t.key}).join(", ")+" values cannot be calculated for this time period."),T&&(M.width(o).height(l).margin({left:G.left,top:G.top}).svgContainer(a).xScale(D),p.select(".nv-interactive").call(M)),g.select(".nv-background").append("rect"),h.select(".nv-background rect").attr("width",o).attr("height",l),L.y(function(t){return t.display.y}).width(o).height(l).color(c.map(function(t,e){return t.color||H(t,e)}).filter(function(t,e){return!c[e].disabled&&!c[e].tempDisabled}));var y=h.select(".nv-linesWrap").datum(c.filter(function(t){return!t.disabled&&!t.tempDisabled}));y.call(L),c.forEach(function(t,e){t.seriesIndex=e});var b=c.filter(function(t){return!t.disabled&&!!J(t)}),k=h.select(".nv-avgLinesWrap").selectAll("line").data(b,function(t){return t.key}),C=function(t){var e=Y(J(t));return e<0?0:l<e?l:e};k.enter().append("line").style("stroke-width",2).style("stroke-dasharray","10,10").style("stroke",function(t){return L.color()(t,t.seriesIndex)}).attr("x1",0).attr("x2",o).attr("y1",C).attr("y2",C),k.style("stroke-opacity",function(t){var e=Y(J(t));return e<0||l<e?0:1}).attr("x1",0).attr("x2",o).attr("y1",C).attr("y2",C),k.exit().remove();var w=y.selectAll(".nv-indexLine").data([Z]);w.enter().append("rect").attr("class","nv-indexLine").attr("width",3).attr("x",-2).attr("fill","red").attr("fill-opacity",.5).style("pointer-events","all").call(s),w.attr("transform",function(t){return"translate("+U(t.i)+",0)"}).attr("height",l),X&&(W.scale(D)._ticks(nv.utils.calcTicksX(o/70,c)).tickSize(-l,0),h.select(".nv-x.nv-axis").attr("transform","translate(0,"+Y.range()[0]+")"),h.select(".nv-x.nv-axis").call(W)),_&&(F.scale(Y)._ticks(nv.utils.calcTicksY(l/36,c)).tickSize(-o,0),h.select(".nv-y.nv-axis").call(F)),h.select(".nv-background rect").on("click",function(){Z.x=d3.mouse(this)[0],Z.i=Math.round(U.invert(Z.x)),R.index=Z.i,K.stateChange(R),i()}),L.dispatch.on("elementClick",function(t){Z.i=t.pointIndex,Z.x=U(Z.i),R.index=Z.i,K.stateChange(R),i()}),I.dispatch.on("legendClick",function(t){t.disabled=!t.disabled,B=!t.disabled,R.rescaleY=B,K.stateChange(R),S.update()}),E.dispatch.on("stateChange",function(t){for(var e in t)R[e]=t[e];K.stateChange(R),S.update()}),M.dispatch.on("elementMousemove",function(i){L.clearHighlights();var a,r,o,l=[];if(c.filter(function(t,e){return t.seriesIndex=e,!t.disabled}).forEach(function(t,e){r=nv.interactiveBisect(t.values,i.pointXValue,S.x()),L.highlightPoint(e,r,!0);var n=t.values[r];void 0!==n&&(void 0===a&&(a=n),void 0===o&&(o=S.xScale()(S.x()(n,r))),l.push({key:t.key,value:S.y()(n,r),color:H(t,t.seriesIndex)}))}),2<l.length){var t=S.yScale().invert(i.mouseY),e=.03*Math.abs(S.yScale().domain()[0]-S.yScale().domain()[1]),n=nv.nearestValueIndex(l.map(function(t){return t.value}),t,e);null!==n&&(l[n].highlight=!0)}var s=W.tickFormat()(S.x()(a,r),r);M.tooltip.chartContainer(u.parentNode).valueFormatter(function(t){return F.tickFormat()(t)}).data({value:s,series:l})(),M.renderGuideLine(o)}),M.dispatch.on("elementMouseout",function(){L.clearHighlights()}),K.on("changeState",function(n){"undefined"!=typeof n.disabled&&(c.forEach(function(t,e){t.disabled=n.disabled[e]}),R.disabled=n.disabled),"undefined"!=typeof n.index&&(Z.i=n.index,Z.x=U(Z.i),R.index=n.index,w.data([Z])),"undefined"!=typeof n.rescaleY&&(B=n.rescaleY),S.update()})}),i.renderEnd("cumulativeLineChart immediate"),S}function A(i,t){return r||(r=L.y()),t.map(function(t){if(!t.values)return t;var e=t.values[i];if(null==e)return t;var n=r(e,i);return n<-.95&&!a?t.tempDisabled=!0:(t.tempDisabled=!1,t.values=t.values.map(function(t,e){return t.display={y:(r(t,e)-n)/(1+n)},t})),t})}var D,Y,L=nv.models.line(),W=nv.models.axis(),F=nv.models.axis(),E=nv.models.legend(),I=nv.models.legend(),M=nv.interactiveGuideline(),n=nv.models.tooltip(),G={top:30,right:30,bottom:50,left:60},H=nv.utils.defaultColor(),V=null,z=null,O=!0,X=!0,_=!0,j=!1,P=!0,T=!1,B=!0,N=L.id(),R=nv.utils.state(),q=null,e=null,J=function(t){return t.average},K=d3.dispatch("stateChange","changeState","renderEnd"),Q=250,a=!1;R.index=0,R.rescaleY=B,W.orient("bottom").tickPadding(7),F.orient(j?"right":"left"),n.valueFormatter(function(t,e){return F.tickFormat()(t,e)}).headerFormatter(function(t,e){return W.tickFormat()(t,e)}),I.updateState(!1);var U=d3.scale.linear(),Z={i:0,x:0},i=nv.utils.renderWatch(K,Q),$=function(t){return function(){return{active:t.map(function(t){return!t.disabled}),index:Z.i,rescaleY:B}}},tt=function(t){return function(n){n.index!==undefined&&(Z.i=n.index),n.rescaleY!==undefined&&(B=n.rescaleY),n.active!==undefined&&t.forEach(function(t,e){t.disabled=!n.active[e]})}};L.dispatch.on("elementMouseover.tooltip",function(t){var e={x:S.x()(t.point),y:S.y()(t.point),color:t.point.color};t.point=e,n.data(t).hidden(!1)}),L.dispatch.on("elementMouseout.tooltip",function(){n.hidden(!0)});var r=null;return S.dispatch=K,S.lines=L,S.legend=E,S.controls=I,S.xAxis=W,S.yAxis=F,S.interactiveLayer=M,S.state=R,S.tooltip=n,S.options=nv.utils.optionsFunc.bind(S),S._options=Object.create({},{width:{get:function(){return V},set:function(t){V=t}},height:{get:function(){return z},set:function(t){z=t}},rescaleY:{get:function(){return B},set:function(t){B=t}},showControls:{get:function(){return P},set:function(t){P=t}},showLegend:{get:function(){return O},set:function(t){O=t}},average:{get:function(){return J},set:function(t){J=t}},defaultState:{get:function(){return q},set:function(t){q=t}},noData:{get:function(){return e},set:function(t){e=t}},showXAxis:{get:function(){return X},set:function(t){X=t}},showYAxis:{get:function(){return _},set:function(t){_=t}},noErrorCheck:{get:function(){return a},set:function(t){a=t}},margin:{get:function(){return G},set:function(t){G.top=t.top!==undefined?t.top:G.top,G.right=t.right!==undefined?t.right:G.right,G.bottom=t.bottom!==undefined?t.bottom:G.bottom,G.left=t.left!==undefined?t.left:G.left}},color:{get:function(){return H},set:function(t){H=nv.utils.getColor(t),E.color(H)}},useInteractiveGuideline:{get:function(){return T},set:function(t){!0===(T=t)&&(S.interactive(!1),S.useVoronoi(!1))}},rightAlignYAxis:{get:function(){return j},set:function(t){j=t,F.orient(t?"right":"left")}},duration:{get:function(){return Q},set:function(t){Q=t,L.duration(Q),W.duration(Q),F.duration(Q),i.reset(Q)}}}),nv.utils.inheritOptions(S,L),nv.utils.initOptions(S),S};