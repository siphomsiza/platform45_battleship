(function(){describe("NVD3",function(){return describe("Box Plot",function(){var o,t,e,l,n;return e=[{label:"Sample A",values:{Q1:120,Q2:150,Q3:200,whisker_low:115,whisker_high:210,outliers:[50,100,225]}}],l=[{label:"Sample A",values:{Q1:120,Q2:150,Q3:200,whisker_low:115,whisker_high:210,outliers:[]}}],n=[{label:"Sample A",values:{Q1:120,Q2:150,Q3:200,whisker_low:115,whisker_high:210,outliers:[50,100,225]}},{label:"Sample B",values:{Q1:300,Q2:350,Q3:400,whisker_low:2255,whisker_high:400,outliers:[175]}}],t={x:function(o){return o.label},y:function(o){return o.values.Q3},margin:{top:30,right:20,bottom:50,left:75},color:nv.utils.defaultColor(),height:400,width:800,showXAxis:!0,showYAxis:!0,noData:"No Data Available",duration:0,maxBoxWidth:75},o=null,beforeEach(function(){return o=new ChartBuilder(nv.models.boxPlotChart()),o.build(t,e)}),afterEach(function(){return o.teardown()}),it("api check",function(){var e;should.exist(o.model.options,"options exposed");for(e in t)should.exist(o.model[e](),e+" can be called");return o.model.update()}),it("renders",function(){var t;return t=o.$("g.nvd3.nv-boxPlotWithAxes"),should.exist(t[0])}),it("no data text",function(){var e;return o=new ChartBuilder(nv.models.boxPlotChart()),o.build(t,[]),e=o.$(".nv-noData"),e[0].textContent.should.equal("No Data Available")}),it("has correct structure",function(){var t,e,l,n,r;for(e=[".nv-x.nv-axis",".nv-y.nv-axis",".nv-barsWrap",".nv-wrap",".nv-boxplot",".nv-boxplot-median",".nv-boxplot-tick.nv-boxplot-low",".nv-boxplot-whisker.nv-boxplot-low",".nv-boxplot-tick.nv-boxplot-high",".nv-boxplot-whisker.nv-boxplot-high"],r=[],l=0,n=e.length;n>l;l++)t=e[l],r.push(function(t){return should.exist(o.$("g.nvd3.nv-boxPlotWithAxes "+t)[0])}(t));return r}),it("Has boxplots",function(){var e;return o=new ChartBuilder(nv.models.boxPlotChart()),o.buildover(t,n,[]),e=o.$(".nv-boxplot-box"),e.length.should.equal(2,"boxplots exist")}),it("Has outliers",function(){var l;return o=new ChartBuilder(nv.models.boxPlotChart()),o.buildover(t,e,[]),l=o.$(".nv-boxplot .nv-boxplot-outlier"),l.length.should.equal(3,"outliers exist")}),it("Has no outliers",function(){var e;return o=new ChartBuilder(nv.models.boxPlotChart()),o.buildover(t,l,[]),e=o.$(".nv-boxplot-outlier")})})})}).call(this);