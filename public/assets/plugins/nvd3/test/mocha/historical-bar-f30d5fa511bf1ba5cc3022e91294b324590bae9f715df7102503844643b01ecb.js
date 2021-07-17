(function(){describe("NVD3",function(){return describe("Historical Bar Chart",function(){var a,e,t;return t=[{key:"Series 1",values:[[-1,-1],[0,0],[1,1],[2,2]]}],e={x:function(t,r){return r},y:function(t){return t[1]},margin:{top:30,right:20,bottom:50,left:75},width:200,height:200,color:nv.utils.defaultColor(),showLegend:!0,showXAxis:!0,showYAxis:!0,rightAlignYAxis:!1,noData:"No Data Available"},a=null,beforeEach(function(){return(a=new ChartBuilder(nv.models.historicalBarChart())).build(e,t)}),afterEach(function(){return a.teardown()}),it("api check",function(){var t,r;for(t in should.exist(a.model.options,"options exposed"),r=[],e)r.push(should.exist(a.model[t](),t+" can be called"));return r}),it("renders",function(){var t;return t=a.$("g.nvd3.nv-historicalBarChart"),should.exist(t[0])}),it("clears chart objects for no data",function(){return(a=new ChartBuilder(nv.models.historicalBarChart())).buildover(e,t,[]),a.$("g").length.should.equal(0,"removes chart components")}),it("has correct structure",function(){var t,r,e,n,i,o;for(i=[],e=0,n=(r=[".nv-x.nv-axis",".nv-y.nv-axis",".nv-barsWrap",".nv-bars",".nv-legendWrap"]).length;e<n;e++)t=r[e],i.push((o=t,should.exist(a.$("g.nvd3.nv-historicalBarChart "+o)[0])));return i}),it("can override axis ticks",function(){return a.model.xAxis.ticks(34),a.model.yAxis.ticks(56),a.model.update(),a.model.xAxis.ticks().should.equal(34),a.model.yAxis.ticks().should.equal(56)})})})}).call(this);