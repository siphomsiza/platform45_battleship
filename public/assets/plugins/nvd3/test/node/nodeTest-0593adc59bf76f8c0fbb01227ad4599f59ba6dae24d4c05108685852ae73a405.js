function exampleData(){return{title:"Revenue",subtitle:"US$, in thousands",ranges:[150,225,300],measures:[220],markers:[250]}}window.d3=require("d3");var nv=require("../../build/nv.d3"),invariant=require("invariant");window.addEventListener("load",function load(){window.removeEventListener("load",load,!1),invariant(void 0!==nv,"Cannot resolve NVD3 via CommonJS"),nv.addGraph(function(){var e=nv.models.bulletChart();return d3.select("#chart svg").datum(exampleData()).transition().duration(1e3).call(e),e})},!1);