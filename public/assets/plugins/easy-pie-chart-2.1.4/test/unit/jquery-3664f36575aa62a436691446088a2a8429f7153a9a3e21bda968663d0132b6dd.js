describe("Unit testing jQuery version of easy pie chart",function(){var i,t=function(e,t){return e=e||{},t=t||'<span class="chart"></span>',function(){i=$(t),$("body").append(i),i.easyPieChart(e)}};describe("initialize plugin",function(){beforeEach(t()),it("should insert a canvas element",function(){expect(i.html()).toContain("canvas")})}),describe("takes size option and",function(){var e;beforeEach(t({size:200})),beforeEach(function(){e=i.find("canvas")}),it("set correct width",function(){expect(e.width()).toBe(200)}),it("set correct height",function(){expect(e.height()).toBe(200)})}),describe("options should be overwritable by data attributes",function(){var e;beforeEach(t({size:200},'<span class="chart" data-size="400"></span>')),beforeEach(function(){e=i.find("canvas")}),it("overwrite width",function(){expect(e.width()).toBe(400)}),it("overwrite height",function(){expect(e.height()).toBe(400)})})});