var nv={dev:!1};nv.tooltip=nv.tooltip||{},nv.utils=nv.utils||{},nv.models=nv.models||{},nv.charts={},nv.logs={},nv.dom={},nv.dispatch=d3.dispatch("render_start","render_end"),Function.prototype.bind||(Function.prototype.bind=function(n){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var e=Array.prototype.slice.call(arguments,1),o=this,t=function(){},r=function(){return o.apply(this instanceof t&&n?this:n,e.concat(Array.prototype.slice.call(arguments)))};return t.prototype=this.prototype,r.prototype=new t,r}),nv.dev&&(nv.dispatch.on("render_start",function(){nv.logs.startTime=+new Date}),nv.dispatch.on("render_end",function(){nv.logs.endTime=+new Date,nv.logs.totalTime=nv.logs.endTime-nv.logs.startTime,nv.log("total",nv.logs.totalTime)})),nv.log=function(){if(nv.dev&&window.console&&console.log&&console.log.apply)console.log.apply(console,arguments);else if(nv.dev&&window.console&&"function"==typeof console.log&&Function.prototype.bind){Function.prototype.bind.call(console.log,console).apply(console,arguments)}return arguments[arguments.length-1]},nv.deprecated=function(n,e){console&&console.warn&&console.warn("nvd3 warning: `"+n+"` has been deprecated. ",e||"")},nv.render=function render(t){t=t||1,nv.render.active=!0,nv.dispatch.render_start();var r=function(){for(var n,e,o=0;o<t&&(e=nv.render.queue[o]);o++)n=e.generate(),typeof e.callback==typeof Function&&e.callback(n);nv.render.queue.splice(0,o),nv.render.queue.length?setTimeout(r):(nv.dispatch.render_end(),nv.render.active=!1)};setTimeout(r)},nv.render.active=!1,nv.render.queue=[],nv.addGraph=function(n,e){typeof n==typeof Function&&(n={generate:n,callback:e}),nv.render.queue.push(n),nv.render.active||nv.render()},"undefined"!=typeof module&&"undefined"!=typeof exports&&(module.exports=nv),"undefined"!=typeof window&&(window.nv=nv);