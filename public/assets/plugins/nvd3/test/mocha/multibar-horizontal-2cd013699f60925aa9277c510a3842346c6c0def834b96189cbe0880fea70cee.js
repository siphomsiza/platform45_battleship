(function(){describe("NVD3",function(){return describe("MultiBar Horizontal Chart",function(){var e,a,r;return r=[{key:"Series 1",values:[{label:"America",value:100},{label:"Europe",value:200},{label:"Asia",value:50},{label:"Africa",value:70}]},{key:"Series 2",values:[{label:"America",value:110},{label:"Europe",value:230},{label:"Asia",value:51},{label:"Africa",value:78}]},{key:"Series 3",values:[{label:"America",value:230},{label:"Europe",value:280},{label:"Asia",value:31},{label:"Africa",value:13}]}],a={x:function(e){return e.label},y:function(e){return e.value},margin:{top:30,right:20,bottom:50,left:75},width:200,height:200,color:nv.utils.defaultColor(),stacked:!1,showControls:!0,showLegend:!0,showXAxis:!0,showYAxis:!0,noData:"No Data Available",duration:0},e=null,beforeEach(function(){return e=new ChartBuilder(nv.models.multiBarHorizontalChart()),e.build(a,r)}),afterEach(function(){return e.teardown()}),it("api check",function(){var r,l;should.exist(e.model.options,"options exposed"),l=[];for(r in a)l.push(should.exist(e.model[r](),r+" can be called"));return l}),it("renders",function(){var a;return a=e.$("g.nvd3.nv-multiBarHorizontalChart"),should.exist(a[0])}),it("clears chart objects for no data",function(){var l;return e=new ChartBuilder(nv.models.multiBarHorizontalChart()),e.buildover(a,r,[]),l=e.$("g"),l.length.should.equal(0,"removes chart components")}),it("has correct structure",function(){var a,r,l,t,n;for(r=[".nv-x.nv-axis",".nv-y.nv-axis",".nv-barsWrap",".nv-multibarHorizontal",".nv-legendWrap",".nv-controlsWrap"],n=[],l=0,t=r.length;t>l;l++)a=r[l],n.push(function(a){return should.exist(e.$("g.nvd3.nv-multiBarHorizontalChart "+a)[0])}(a));return n}),it("renders bars",function(){var a;return a=e.$("g.nvd3.nv-multiBarHorizontalChart .nv-multibarHorizontal .nv-bar"),a.should.have.length(12)}),it("can override axis ticks",function(){return e.model.xAxis.ticks(34),e.model.yAxis.ticks(56),e.model.update(),e.model.xAxis.ticks().should.equal(34),e.model.yAxis.ticks().should.equal(56)})})})}).call(this);