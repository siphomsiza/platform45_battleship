!function(r){function i(a,i,e){var n=a.getPlotOffset();if(e.images&&e.images.show)for(var o=e.datapoints.points,t=e.datapoints.pointsize,r=0;r<o.length;r+=t){var s,m=o[r],h=o[r+1],p=o[r+2],u=o[r+3],g=o[r+4],c=e.xaxis,l=e.yaxis;if(!(!m||m.width<=0||m.height<=0)&&(u<h&&(s=u,u=h,h=s),g<p&&(s=g,g=p,p=s),"center"==e.images.anchor&&(h-=s=.5*(u-h)/(m.width-1),u+=s,p-=s=.5*(g-p)/(m.height-1),g+=s),!(h==u||p==g||h>=c.max||u<=c.min||p>=l.max||g<=l.min))){var f=0,d=0,x=m.width,w=m.height;h<c.min&&(f+=(x-f)*(c.min-h)/(u-h),h=c.min),u>c.max&&(x+=(x-f)*(c.max-u)/(u-h),u=c.max),p<l.min&&(w+=(d-w)*(l.min-p)/(g-p),p=l.min),g>l.max&&(d+=(d-w)*(l.max-g)/(g-p),g=l.max),h=c.p2c(h),u=c.p2c(u),p=l.p2c(p),u<h&&(s=u,u=h,h=s),(g=l.p2c(g))<p&&(s=g,g=p,p=s),s=i.globalAlpha,i.globalAlpha*=e.images.alpha,i.drawImage(m,f,d,x-f,w-d,h+n.left,p+n.top,u-h,g-p),i.globalAlpha=s}}}function e(a,i,e,n){i.images.show&&(n.format=[{required:!0},{x:!0,number:!0,required:!0},{y:!0,number:!0,required:!0},{x:!0,number:!0,required:!0},{y:!0,number:!0,required:!0}])}function a(a){a.hooks.processRawData.push(e),a.hooks.drawSeries.push(i)}var n={series:{images:{show:!1,alpha:1,anchor:"corner"}}};r.plot.image={},r.plot.image.loadDataImages=function(a,i,e){var n=[],o=[],t=i.series.images.show;r.each(a,function(a,i){(t||i.images.show)&&(i.data&&(i=i.data),r.each(i,function(a,i){"string"==typeof i[0]&&(n.push(i[0]),o.push(i))}))}),r.plot.image.load(n,function(n){r.each(o,function(a,i){var e=i[0];n[e]&&(i[0]=n[e])}),e()})},r.plot.image.load=function(a,n){var o=a.length,t={};0==o&&n({}),r.each(a,function(a,i){var e=function(){--o,t[i]=this,0==o&&n(t)};r("<img />").load(e).error(e).attr("src",i)})},r.plot.plugins.push({init:a,options:n,name:"image",version:"1.1"})}(jQuery);