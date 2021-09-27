module.exports=function(s){"use strict";s.initConfig({pkg:s.file.readJSON("package.json"),uglify:{target:{files:{"build/js/bootstrap-datetimepicker.min.js":"src/js/bootstrap-datetimepicker.js"}},options:{mangle:!0,compress:{dead_code:!1},output:{ascii_only:!0},report:"min",preserveComments:"some"}},jshint:{all:["Gruntfile.js","src/js/*.js","test/*.js"],options:{browser:!0,node:!0,jquery:!0,boss:!1,curly:!0,debug:!1,devel:!1,eqeqeq:!0,bitwise:!0,eqnull:!0,evil:!1,forin:!0,immed:!1,laxbreak:!1,newcap:!0,noarg:!0,noempty:!1,nonew:!1,onevar:!0,plusplus:!1,regexp:!1,undef:!0,sub:!0,strict:!0,unused:!0,white:!0,es3:!0,camelcase:!0,quotmark:"single",globals:{define:!1,moment:!1,jasmine:!1,describe:!1,xdescribe:!1,expect:!1,it:!1,xit:!1,spyOn:!1,beforeEach:!1,afterEach:!1}}},jscs:{all:["Gruntfile.js","src/js/*.js","test/*.js"],options:{config:".jscs.json"}},less:{production:{options:{cleancss:!0,compress:!0},files:{"build/css/bootstrap-datetimepicker.min.css":"src/less/bootstrap-datetimepicker-build.less"}},development:{files:{"build/css/bootstrap-datetimepicker.css":"src/less/bootstrap-datetimepicker-build.less"}}},jasmine:{customTemplate:{src:"src/js/*.js",options:{specs:"test/*Spec.js",helpers:"test/*Helper.js",styles:["node_modules/bootstrap/dist/css/bootstrap.min.css","build/css/bootstrap-datetimepicker.min.css"],vendor:["node_modules/jquery/dist/jquery.min.js","node_modules/moment/min/moment-with-locales.min.js","node_modules/bootstrap/dist/js/bootstrap.min.js"],display:"none",summary:"true"}}},nugetpack:{less:{src:"src/nuget/Bootstrap.v3.Datetimepicker.nuspec",dest:"build/nuget",options:{version:"<%= pkg.version %>"}},css:{src:"src/nuget/Bootstrap.v3.Datetimepicker.CSS.nuspec",dest:"build/nuget",options:{version:"<%= pkg.version %>"}}}}),s.loadTasks("tasks"),s.loadNpmTasks("grunt-contrib-jasmine"),s.loadNpmTasks("grunt-nuget"),require("load-grunt-tasks")(s),s.registerTask("default",["jshint","jscs","less","jasmine"]),s.registerTask("build:travis",["jshint","jscs","uglify","less","jasmine"]),s.registerTask("build",["jshint","jscs","uglify","less"]),s.registerTask("test",["jshint","jscs","uglify","less","jasmine"])};