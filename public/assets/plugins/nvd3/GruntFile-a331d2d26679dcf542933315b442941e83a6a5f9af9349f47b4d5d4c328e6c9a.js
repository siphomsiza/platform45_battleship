module.exports=function(s){var r=s.file.readJSON("package.json");s.initConfig({pkg:r,concat:{css:{options:{separator:"\n",banner:"/* nvd3 version "+r.version+" ("+r.url+') <%= grunt.template.today("yyyy-mm-dd") %> */\n'},src:["src/css/*.css"],dest:"build/nv.d3.css"},js:{options:{separator:"",banner:"/* nvd3 version "+r.version+" ("+r.url+') <%= grunt.template.today("yyyy-mm-dd") %> */\n(function(){\n',footer:'\nnv.version = "'+r.version+'";\n})();'},src:["src/core.js","src/dom.js","src/interactiveLayer.js","src/tooltip.js","src/utils.js","src/models/*.js"],dest:"build/nv.d3.js"}},uglify:{options:{sourceMap:!0,banner:"/* nvd3 version "+r.version+" ("+r.url+') <%= grunt.template.today("yyyy-mm-dd") %> */\n'},js:{files:{"build/nv.d3.min.js":["build/nv.d3.js"]}}},replace:{version:{src:["package.js"],overwrite:!0,replacements:[{from:/(version?\s?=?\:?\s\')([\d\.]*)\'/gi,to:"$1"+r.version+"'"}]}},jshint:{foo:{src:"src/**/*.js"},options:{jshintrc:".jshintrc"}},watch:{js:{files:["src/**/*.js"],tasks:["concat"]}},copy:{css:{files:[{src:"src/nv.d3.css",dest:"build/nv.d3.css"}]}},cssmin:{options:{sourceMap:!0},dist:{files:{"build/nv.d3.min.css":["build/nv.d3.css"]}}},karma:{unit:{options:{logLevel:"ERROR",browsers:["Firefox"],frameworks:["mocha","sinon-chai"],reporters:["spec","junit","coverage"],singleRun:!0,preprocessors:{"src/*.js":["coverage"],"src/models/*.js":["coverage"],"test/mocha/*.coffee":["coffee"]},files:["bower_components/d3/d3.js","src/*.js","src/models/*.js","test/mocha/*.coffee"],exclude:["src/intro.js","src/outro.js","src/models/lineWith*","src/models/parallelCoordinates*","src/models/multiBarTime*","src/models/indented*","src/models/linePlus*","src/models/ohlcBar.js","src/models/candlestickBar.js","src/models/multiChart.js"]}}}}),s.loadNpmTasks("grunt-contrib-watch"),s.loadNpmTasks("grunt-contrib-concat"),s.loadNpmTasks("grunt-contrib-jshint"),s.loadNpmTasks("grunt-contrib-uglify"),s.loadNpmTasks("grunt-contrib-copy"),s.loadNpmTasks("grunt-contrib-cssmin"),s.loadNpmTasks("grunt-karma"),s.loadNpmTasks("grunt-text-replace"),s.registerTask("default",["concat","copy","karma:unit"]),s.registerTask("production",["concat","uglify","copy","cssmin","replace"]),s.registerTask("release",["production"]),s.registerTask("lint",["jshint"])};