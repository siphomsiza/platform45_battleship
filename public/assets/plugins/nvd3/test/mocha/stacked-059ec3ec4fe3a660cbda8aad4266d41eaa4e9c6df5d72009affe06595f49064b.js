(function(){describe("NVD3",function(){return describe("Stacked Area Chart",function(){var e,t,n,a;return n=[{key:"Series 1",values:[[-1,-1],[0,0],[1,1],[2,2]]}],a=[{key:"Series 1",values:[[-1,-3],[0,6],[1,12],[2,18]]},{key:"Series 2",values:[[-1,-4],[0,7],[1,13],[2,14]]}],t={x:function(e){return e[0]},y:function(e){return e[1]},margin:{top:30,right:20,bottom:50,left:75},color:nv.utils.defaultColor(),showLegend:!0,showControls:!0,showXAxis:!0,showYAxis:!0,rightAlignYAxis:!1,useInteractiveGuideline:!0,noData:"No Data Available",duration:0,controlLabels:{stacked:"Stacked",stream:"Stream",expanded:"Expanded"}},e=null,beforeEach(function(){return e=new ChartBuilder(nv.models.stackedAreaChart()),e.build(t,n)}),afterEach(function(){return e.teardown()}),it("api check",function(){var n,a;should.exist(e.model.options,"options exposed"),a=[];for(n in t)a.push(should.exist(e.model[n](),n+" can be called"));return a}),it("renders",function(){var t;return t=e.$("g.nvd3.nv-stackedAreaChart"),should.exist(t[0])}),it("clears chart objects for no data",function(){var a;return e=new ChartBuilder(nv.models.stackedAreaChart()),e.buildover(t,n,[]),a=e.$("g"),a.length.should.equal(0,"removes chart components")}),it("has correct structure",function(){var t,n,a,r,s;for(n=[".nv-x.nv-axis",".nv-y.nv-axis",".nv-stackedWrap",".nv-legendWrap",".nv-controlsWrap",".nv-interactive"],s=[],a=0,r=n.length;r>a;a++)t=n[a],s.push(function(t){return should.exist(e.$("g.nvd3.nv-stackedAreaChart "+t)[0])}(t));return s}),it("formats y-Axis correctly depending on stacked style",function(){var a,r,s,o,i,l;for(a=nv.models.stackedAreaChart(),a.yAxis.tickFormat(function(e){return"<"+e+">"}),e=new ChartBuilder(a),e.build(t,n),l=e.$(".nv-y.nv-axis .tick text"),l.should.have.length.greaterThan(2),r=0,s=l.length;s>r;r++)i=l[r],i.textContent.should.match(/<.*?>/);return a.dispatch.changeState({style:"expand"}),a.stacked.style().should.equal("expand"),o=a.yAxis.tickFormat(),o(1).should.equal("100%"),a.dispatch.changeState({style:"stacked"}),a.stacked.style().should.equal("stacked"),o=a.yAxis.tickFormat(),o(1).should.equal("<1>")}),it("can override axis ticks",function(){return e.model.xAxis.ticks(34),e.model.yAxis.ticks(56),e.model.update(),e.model.xAxis.ticks().should.equal(34),e.model.yAxis.ticks().should.equal(56)}),it('if stacked.offset is "wiggle", y ticks is zero',function(){return e.model.stacked.offset("wiggle"),e.model.update(),e.model.yAxis.ticks().should.equal(0)})})})}).call(this);