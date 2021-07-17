nv.models.multiBar=function(){"use strict";function n(t){return _.reset(),t.each(function(o){var t=M-S.left-S.right,n=B-S.top-S.bottom;z=d3.select(this),nv.utils.initSVG(z);var a=0;if(G&&o.length&&(G=[{values:o[0].values.map(function(t){return{x:t.x,y:0,series:t.series,size:.01}})}]),R){var r=d3.layout.stack().offset(j).values(function(t){return t.values}).y(D)(!o.length&&G?G:o);r.forEach(function(t,e){t.nonStackable?(o[e].nonStackableSeries=a++,r[e]=o[e]):0<e&&r[e-1].nonStackable&&r[e].values.map(function(t,n){t.y0-=r[e-1].values[n].y,t.y1=t.y0+t.y})}),o=r}o.forEach(function(n,e){n.values.forEach(function(t){t.series=e,t.key=n.key})}),R&&o[0].values.map(function(t,r){var a=0,i=0;o.map(function(t,n){if(!o[n].nonStackable){var e=t.values[r];e.size=Math.abs(e.y),e.y<0?(e.y1=i,i-=e.size):(e.y1=e.size+a,a+=e.size)}})});var e=h&&p?[]:o.map(function(t,e){return t.values.map(function(t,n){return{x:A(t,n),y:D(t,n),y0:t.y0,y1:t.y1,idx:e}})});C.domain(h||d3.merge(e).map(function(t){return t.x})).rangeBands(y||[0,t],W),w.domain(p||d3.extent(d3.merge(e).map(function(t){var n=t.y;return R&&!o[t.idx].nonStackable&&(n=0<t.y?t.y1:t.y1+t.y),n}).concat(O))).range(b||[n,0]),C.domain()[0]===C.domain()[1]&&(C.domain()[0]?C.domain([C.domain()[0]-.01*C.domain()[0],C.domain()[1]+.01*C.domain()[1]]):C.domain([-1,1])),w.domain()[0]===w.domain()[1]&&(w.domain()[0]?w.domain([w.domain()[0]+.01*w.domain()[0],w.domain()[1]-.01*w.domain()[1]]):w.domain([-1,1])),k=k||C,x=x||w;var i=z.selectAll("g.nv-wrap.nv-multibar").data([o]),u=i.enter().append("g").attr("class","nvd3 nv-wrap nv-multibar"),c=u.append("defs"),l=u.append("g"),s=i.select("g");l.append("g").attr("class","nv-groups"),i.attr("transform","translate("+S.left+","+S.top+")"),c.append("clipPath").attr("id","nv-edge-clip-"+E).append("rect"),i.select("#nv-edge-clip-"+E+" rect").attr("width",t).attr("height",n),s.attr("clip-path",P?"url(#nv-edge-clip-"+E+")":"");var f=i.select(".nv-groups").selectAll(".nv-group").data(function(t){return t},function(t,n){return n});f.enter().append("g").style("stroke-opacity",1e-6).style("fill-opacity",1e-6);var d=_.transition(f.exit().selectAll("rect.nv-bar"),"multibarExit",Math.min(100,V)).attr("y",function(t){var n=x(0)||0;return R&&o[t.series]&&!o[t.series].nonStackable&&(n=x(t.y0)),n}).attr("height",0).remove();d.delay&&d.delay(function(t,n){return n*(V/(q+1))-n}),f.attr("class",function(t,n){return"nv-group nv-series-"+n}).classed("hover",function(t){return t.hover}).style("fill",function(t,n){return F(t,n)}).style("stroke",function(t,n){return F(t,n)}),f.style("stroke-opacity",1).style("fill-opacity",.75);var g=f.selectAll("rect.nv-bar").data(function(t){return G&&!o.length?G.values:t.values});g.exit().remove();g.enter().append("rect").attr("class",function(t,n){return D(t,n)<0?"nv-bar negative":"nv-bar positive"}).attr("x",function(t,n,e){return R&&!o[e].nonStackable?0:e*C.rangeBand()/o.length}).attr("y",function(t,n,e){return x(R&&!o[e].nonStackable?t.y0:0)||0}).attr("height",0).attr("width",function(t,n,e){return C.rangeBand()/(R&&!o[e].nonStackable?1:o.length)}).attr("transform",function(t,n){return"translate("+C(A(t,n))+",0)"});g.style("fill",function(t,n,e){return F(t,e,n)}).style("stroke",function(t,n,e){return F(t,e,n)}).on("mouseover",function(t,n){d3.select(this).classed("hover",!0),Y.elementMouseover({data:t,index:n,color:d3.select(this).style("fill")})}).on("mouseout",function(t,n){d3.select(this).classed("hover",!1),Y.elementMouseout({data:t,index:n,color:d3.select(this).style("fill")})}).on("mousemove",function(t,n){Y.elementMousemove({data:t,index:n,color:d3.select(this).style("fill")})}).on("click",function(t,n){var e=this;Y.elementClick({data:t,index:n,color:d3.select(this).style("fill"),event:d3.event,element:e}),d3.event.stopPropagation()}).on("dblclick",function(t,n){Y.elementDblClick({data:t,index:n,color:d3.select(this).style("fill")}),d3.event.stopPropagation()}),g.attr("class",function(t,n){return D(t,n)<0?"nv-bar negative":"nv-bar positive"}).attr("transform",function(t,n){return"translate("+C(A(t,n))+",0)"}),T&&(v||(v=o.map(function(){return!0})),g.style("fill",function(t,n,e){return d3.rgb(T(t,n)).darker(v.map(function(t,n){return n}).filter(function(t,n){return!v[n]})[e]).toString()}).style("stroke",function(t,n,e){return d3.rgb(T(t,n)).darker(v.map(function(t,n){return n}).filter(function(t,n){return!v[n]})[e]).toString()}));var m=g.watchTransition(_,"multibar",Math.min(250,V)).delay(function(t,n){return n*V/o[0].values.length});R?m.attr("y",function(t,n,e){return o[e].nonStackable?D(t,n)<0?w(0):w(0)-w(D(t,n))<-1?w(0)-1:w(D(t,n))||0:w(t.y1)}).attr("height",function(t,n,e){return o[e].nonStackable?Math.max(Math.abs(w(D(t,n))-w(0)),0)||0:Math.max(Math.abs(w(t.y+t.y0)-w(t.y0)),0)}).attr("x",function(t,n,e){var r=0;return o[e].nonStackable&&(r=t.series*C.rangeBand()/o.length,o.length!==a&&(r=o[e].nonStackableSeries*C.rangeBand()/(2*a))),r}).attr("width",function(t,n,e){if(o[e].nonStackable){var r=C.rangeBand()/a;return o.length!==a&&(r=C.rangeBand()/(2*a)),r}return C.rangeBand()}):m.attr("x",function(t){return t.series*C.rangeBand()/o.length}).attr("width",C.rangeBand()/o.length).attr("y",function(t,n){return D(t,n)<0?w(0):w(0)-w(D(t,n))<1?w(0)-1:w(D(t,n))||0}).attr("height",function(t,n){return Math.max(Math.abs(w(D(t,n))-w(0)),1)||0}),k=C.copy(),x=w.copy(),o[0]&&o[0].values&&(q=o[0].values.length)}),_.renderEnd("multibar immediate"),n}var v,h,p,y,b,k,x,S={top:0,right:0,bottom:0,left:0},M=960,B=500,C=d3.scale.ordinal(),w=d3.scale.linear(),E=Math.floor(1e4*Math.random()),z=null,A=function(t){return t.x},D=function(t){return t.y},O=[0],P=!0,R=!1,j="zero",F=nv.utils.defaultColor(),G=!1,T=null,V=500,W=.1,Y=d3.dispatch("chartClick","elementClick","elementDblClick","elementMouseover","elementMouseout","elementMousemove","renderEnd"),_=nv.utils.renderWatch(Y,V),q=0;return n.dispatch=Y,n.options=nv.utils.optionsFunc.bind(n),n._options=Object.create({},{width:{get:function(){return M},set:function(t){M=t}},height:{get:function(){return B},set:function(t){B=t}},x:{get:function(){return A},set:function(t){A=t}},y:{get:function(){return D},set:function(t){D=t}},xScale:{get:function(){return C},set:function(t){C=t}},yScale:{get:function(){return w},set:function(t){w=t}},xDomain:{get:function(){return h},set:function(t){h=t}},yDomain:{get:function(){return p},set:function(t){p=t}},xRange:{get:function(){return y},set:function(t){y=t}},yRange:{get:function(){return b},set:function(t){b=t}},forceY:{get:function(){return O},set:function(t){O=t}},stacked:{get:function(){return R},set:function(t){R=t}},stackOffset:{get:function(){return j},set:function(t){j=t}},clipEdge:{get:function(){return P},set:function(t){P=t}},disabled:{get:function(){return v},set:function(t){v=t}},id:{get:function(){return E},set:function(t){E=t}},hideable:{get:function(){return G},set:function(t){G=t}},groupSpacing:{get:function(){return W},set:function(t){W=t}},margin:{get:function(){return S},set:function(t){S.top=t.top!==undefined?t.top:S.top,S.right=t.right!==undefined?t.right:S.right,S.bottom=t.bottom!==undefined?t.bottom:S.bottom,S.left=t.left!==undefined?t.left:S.left}},duration:{get:function(){return V},set:function(t){V=t,_.reset(V)}},color:{get:function(){return F},set:function(t){F=nv.utils.getColor(t)}},barColor:{get:function(){return T},set:function(t){T=t?nv.utils.getColor(t):null}}}),nv.utils.initOptions(n),n};