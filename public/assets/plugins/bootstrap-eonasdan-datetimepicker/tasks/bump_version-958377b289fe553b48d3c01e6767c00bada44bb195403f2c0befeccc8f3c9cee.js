module.exports=function(e){e.registerTask("bump_version",function(s){s&&3===s.split(".").length||e.fail.fatal("malformed version. Use\n\n    grunt bump_version:1.2.3"),e.config("string-replace.bootstrap-datetimepicker-js",{files:{"src/js/bootstrap-datetimepicker.js":"src/js/bootstrap-datetimepicker.js"},options:{replacements:[{pattern:/\/*! version : .*/,replacement:"! version : "+s}]}}),e.config("string-replace.bootstrap-datetimepicker-css",{files:{"src/less/_bootstrap-datetimepicker.less":"src/less/_bootstrap-datetimepicker.less"},options:{replacements:[{pattern:/ * version : .*/,replacement:" version : "+s}]}}),e.config("string-replace.package-json",{files:{"package.json":"package.json"},options:{replacements:[{pattern:/"version": .*/,replacement:'"version": "'+s+'",'}]}}),e.config("string-replace.bower-json",{files:{"bower.json":"bower.json"},options:{replacements:[{pattern:/"version": .*/,replacement:'"version": "'+s+'",'}]}}),e.config("string-replace.component-json",{files:{"component.json":"component.json"},options:{replacements:[{pattern:/"version": .*/,replacement:'"version": "'+s+'",'}]}}),e.config("string-replace.composer-json",{files:{"composer.json":"composer.json"},options:{replacements:[{pattern:/"version": .*/,replacement:'"version": "'+s+'",'}]}}),e.task.run(["string-replace:bootstrap-datetimepicker-js","string-replace:bootstrap-datetimepicker-css","string-replace:package-json","string-replace:bower-json","string-replace:component-json","string-replace:composer-json"])})};