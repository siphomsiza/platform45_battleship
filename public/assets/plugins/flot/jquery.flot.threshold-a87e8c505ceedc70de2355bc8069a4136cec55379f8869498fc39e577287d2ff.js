!function(m){function o(o){function h(o,s,t,n,l){var h,r,e,i,p,u=t.pointsize,a=m.extend({},s);a.datapoints={points:[],pointsize:u,format:t.format},a.label=null,a.color=l,a.threshold=null,a.originSeries=s,a.data=[];var f,d=t.points,c=s.lines.show,g=[],v=[];for(h=0;h<d.length;h+=u){if(r=d[h],p=i,i=(e=d[h+1])<n?g:v,c&&p!=i&&null!=r&&0<h&&null!=d[h-u]){var b=r+(n-e)*(r-d[h-u])/(e-d[h-u+1]);for(p.push(b),p.push(n),f=2;f<u;++f)p.push(d[h+f]);for(i.push(null),i.push(null),f=2;f<u;++f)i.push(d[h+f]);for(i.push(b),i.push(n),f=2;f<u;++f)i.push(d[h+f])}for(i.push(r),i.push(e),f=2;f<u;++f)i.push(d[h+f])}if(t.points=v,a.datapoints.points=g,0<a.datapoints.points.length){var w=m.inArray(s,o.getData());o.getData().splice(w+1,0,a)}}function s(t,n,l){n.threshold&&(n.threshold instanceof Array?(n.threshold.sort(function(o,s){return o.below-s.below}),m(n.threshold).each(function(o,s){h(t,n,l,s.below,s.color)})):h(t,n,l,n.threshold.below,n.threshold.color))}o.hooks.processDatapoints.push(s)}var s={series:{threshold:null}};m.plot.plugins.push({init:o,options:s,name:"threshold",version:"1.2"})}(jQuery);