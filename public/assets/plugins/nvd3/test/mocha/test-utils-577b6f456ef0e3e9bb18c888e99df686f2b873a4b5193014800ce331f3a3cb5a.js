(function(){(function(){function t(t){this.model=t}t.prototype.build=function(t,e){var o,n;for(o in this.svg=document.createElement("svg"),document.querySelector("body").appendChild(this.svg),t)n=t[o],null==this.model[o]?console.warn(o+" not property of model."):this.model[o](n);return this.updateData(e)},t.prototype.updateData=function(t){return d3.select(this.svg).datum(t).call(this.model)},t.prototype.buildover=function(t,e,o){var n,l,r;for(l in this.svg=document.createElement("svg"),document.querySelector("body").appendChild(this.svg),t)r=t[l],null==this.model[l]?console.warn(l+" not property of model."):this.model[l](r);return(n=d3.select(this.svg)).datum(e).call(this.model),n.datum(o).call(this.model)},t.prototype.teardown=function(){if(null!=this.svg)return document.querySelector("body").removeChild(this.svg)},t.prototype.$=function(t){return this.svg.querySelectorAll(t)}})()}).call(this);