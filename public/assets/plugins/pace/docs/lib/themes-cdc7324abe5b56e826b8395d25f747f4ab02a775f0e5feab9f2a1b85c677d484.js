(function(){var Color,compileTheme,loadTheme,vm;"undefined"!=typeof module&&null!==module&&(vm=require("vm"),Color=require("color")),loadTheme=function(e,o){return $.ajax({url:"/pace/templates/pace-theme-"+e+".tmpl.css",success:o})},compileTheme=function(body,args){return null==args&&(args={}),body.replace(/`([\s\S]*?)`/gm,function(match,code){var val;return"undefined"!=typeof module&&null!==module?val=vm.runInNewContext(code,{args:args,Color:Color}):(Color=window.Color,val=eval(code)),val})},"undefined"!=typeof module&&null!==module?module.exports={compileTheme:compileTheme}:(window.loadTheme=loadTheme,window.compileTheme=compileTheme)}).call(this);