!function(){function e(e){function D(e,n){var l;for(l=0;l<n.length;++l)if(n[l].id===e.fillBetween)return n[l];return"number"==typeof e.fillBetween?e.fillBetween<0||e.fillBetween>=n.length?null:n[e.fillBetween]:null}function n(e,n,l){if(null!=n.fillBetween){var i=D(n,e.getData());if(i){for(var t,s,f,o,u,p,r,h,a=l.pointsize,g=l.points,w=i.datapoints.pointsize,B=i.datapoints.points,c=[],v=n.lines.show,d=2<a&&l.format[2].y,m=v&&n.lines.steps,y=!0,b=0,z=0;!(b>=g.length);){if(r=c.length,null==g[b]){for(h=0;h<a;++h)c.push(g[b+h]);b+=a}else if(z>=B.length){if(!v)for(h=0;h<a;++h)c.push(g[b+h]);b+=a}else if(null==B[z]){for(h=0;h<a;++h)c.push(null);y=!0,z+=w}else{if(t=g[b],s=g[b+1],o=B[z],u=B[z+1],p=0,t===o){for(h=0;h<a;++h)c.push(g[b+h]);p=u,b+=a,z+=w}else if(o<t){if(v&&0<b&&null!=g[b-a]){for(f=s+(g[b-a+1]-s)*(o-t)/(g[b-a]-t),c.push(o),c.push(f),h=2;h<a;++h)c.push(g[b+h]);p=u}z+=w}else{if(y&&v){b+=a;continue}for(h=0;h<a;++h)c.push(g[b+h]);v&&0<z&&null!=B[z-w]&&(p=u+(B[z-w+1]-u)*(t-o)/(B[z-w]-o)),b+=a}y=!1,r!==c.length&&d&&(c[r+2]=p)}if(m&&r!==c.length&&0<r&&null!==c[r]&&c[r]!==c[r-a]&&c[r+1]!==c[r-a+1]){for(h=0;h<a;++h)c[r+a+h]=c[r+h];c[r+1]=c[r-a+1]}}l.points=c}}}e.hooks.processDatapoints.push(n)}var n={series:{fillBetween:null}};jQuery.plot.plugins.push({init:e,options:n,name:"fillbetween",version:"1.0"})}();