module.exports=function(s){s.initConfig({browserify:{js:{src:"./nodeTest.js",dest:"./build/nodeTest.js"}},copy:{all:{src:["../../build/nv.d3.css"],dest:"./build/nv.d3.css"}}}),s.loadNpmTasks("grunt-browserify"),s.loadNpmTasks("grunt-contrib-copy"),s.registerTask("default",["browserify","copy"])};