(function(){describe("NVD3",function(){return describe("MultiBar Chart",function(){var i,l,e;return e=[{key:"Series 1",values:[{label:"America",value:100},{label:"Europe",value:200},{label:"Asia",value:50},{label:"Africa",value:70}]},{key:"Series 2",values:[{label:"America",value:110},{label:"Europe",value:230},{label:"Asia",value:51},{label:"Africa",value:78}]},{key:"Series 3",values:[{label:"America",value:230},{label:"Europe",value:280},{label:"Asia",value:31},{label:"Africa",value:13}]}],l={x:function(e){return e.label},y:function(e){return e.value},margin:{top:30,right:20,bottom:50,left:75},width:200,height:200,color:nv.utils.defaultColor(),showControls:!0,showLegend:!0,showXAxis:!0,showYAxis:!0,rightAlignYAxis:!1,reduceXTicks:!0,staggerLabels:!0,rotateLabels:0,noData:"No Data Available",duration:0},i=null,beforeEach(function(){return(i=new ChartBuilder(nv.models.multiBarChart())).build(l,e)}),afterEach(function(){return i.teardown()}),it("api check",function(){var e,a;for(e in should.exist(i.model.options,"options exposed"),a=[],l)a.push(should.exist(i.model[e](),e+" can be called"));return a}),it("renders",function(){var e;return e=i.$("g.nvd3.nv-multiBarWithLegend"),should.exist(e[0])}),it("clears chart objects for no data",function(){return(i=new ChartBuilder(nv.models.multiBarChart())).buildover(l,e,[]),i.$("g").length.should.equal(0,"removes chart components")}),it("has correct structure",function(){var e,a,l,r,t,n;for(t=[],l=0,r=(a=[".nv-x.nv-axis",".nv-y.nv-axis",".nv-barsWrap",".nv-multibar",".nv-legendWrap",".nv-controlsWrap"]).length;l<r;l++)e=a[l],t.push((n=e,should.exist(i.$("g.nvd3.nv-multiBarWithLegend "+n)[0])));return t}),it("renders bars",function(){return i.$("g.nvd3.nv-multiBarWithLegend .nv-multibar .nv-bar").should.have.length(12)}),it("can override axis ticks",function(){return i.model.xAxis.ticks(34),i.model.yAxis.ticks(56),i.model.update(),i.model.xAxis.ticks().should.equal(34),i.model.yAxis.ticks().should.equal(56)})})})}).call(this);