var fs=require("fs");["top","bottom"].forEach(function(t){["left","right"].forEach(function(e){["1","2","3","4","5"].forEach(function(o){var i="out/"+o+t.charAt(0)+e.charAt(0)+".html",n="pic/"+o+t.charAt(0)+e.charAt(0)+".png",r="file://"+fs.absolute(i),c=require("webpage").create();c.viewportSize={width:1e3,height:800},c.open(r,function(t){window.setTimeout(function(){console.log(t),c.render(n),setTimeout(function(){phantom.exit()},0)},2e3)})})})});