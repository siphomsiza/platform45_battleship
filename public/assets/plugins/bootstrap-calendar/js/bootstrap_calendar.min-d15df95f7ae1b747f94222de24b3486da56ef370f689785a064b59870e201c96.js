!function(j){j.fn.calendar=function(t){var e=j.extend({},j.fn.calendar.defaults,t);return this.each(function(){function t(){h=j('<table class="daysmonth table table">'),c();var t=new Date,a=D.val();if(""!=a&&_(a)){var e=a.split("/");2==e[2].length&&("0"==e[2].charAt(0)&&(e[2]=e[2].substring(1)),e[2]=parseInt(e[2]),e[2]<50&&(e[2]+=2e3)),t=new Date(e[2],e[1]-1,e[0])}var r=t.getMonth(),n=t.getFullYear();d(r,n);var o=j('<td><i class="icon-arrow-right"></i></td>');o.click(function(t){t.stopPropagation(),t.preventDefault(),0==(r=(r+1)%12)&&n++,i(r,n)});var s=j('<td><i class="icon-arrow-left"></i></td>');s.click(function(t){t.stopPropagation(),t.preventDefault(),-1==(r-=1)&&(n--,r=11),i(r,n)}),j(".icon-arrow-left").css("cursor","pointer"),j(".icon-arrow-right").css("cursor","pointer");var p=j('<table class="table header"><tr></tr></table>'),l=j('<td colspan=5 class="year span6"></td>');p.append(s),p.append(l),p.append(o),l.append(m),(g=j('<div class="calendar" id="'+b+'" ></div>')).prepend(p),g.append(h),D.append(g),v(r,n)}function i(t,a){h.empty(),c(),d(t,a),v(t,a)}function c(){if(0!=o){var t=j('<tr class="week_days" >'),e="";j(a).each(function(t,a){e+="<td",0==t&&(e+=' class="first"'),6==t&&(e+=' class="last"'),e+=">"+a+"</td>"}),e+="</tr>",t.append(e),h.append(t)}}function d(t,a){m.text(y[t]+" "+a);for(var e=1,r=f(1,t,a),n=u(t,a),o=t+1,s="",p=0;p<7;p++){if(p<r){var l="";0==p&&(l+="<tr>"),l+='<td class="invalid',0==p&&(l+=" first"),l+='"></td>'}else{l="";0==p&&(l+="<tr>"),l+='<td id="'+b+"_"+e+"_"+o+"_"+a+'" ',0==p&&(l+=' class="first"'),6==p&&(l+=' class="last"'),l+="><a>"+e+"</a></span>",6==p&&(l+="</tr>"),e++}s+=l}for(var i=1;e<=n;){l="";1==i%7&&(l+="<tr>"),l+='<td id="'+b+"_"+e+"_"+o+"_"+a+'" ',1==i%7&&(l+=' class="first"'),0==i%7&&(l+=' class="last"'),l+="><a>"+e+"</a></td>",0==i%7&&(l+="</tr>"),e++,i++,s+=l}if(0!=--i%7){l="";for(p=i%7+1;p<=7;p++){l="";l+='<td class="invalid',7==p&&(l+=" last"),l+='"></td>',7==p&&(l+="</tr>"),s+=l}}h.append(s)}function f(t,a,e){return new Date(e,a,t).getDay()}function r(t,a,e){return 0<t&&t<13&&0<e&&e<32768&&0<a&&a<=new Date(e,t,0).getDate()}function u(t,a){for(var e=28;r(t+1,e+1,a);)e++;return e}function _(t){var a=t.split("/");return 3==a.length&&r(a[1],a[0],a[2])}function v(t,e){0!=l?j.ajax({type:l.type,url:l.url,data:{month:t+1,year:e},dataType:"json"}).done(function(a){w=[],j.each(a,function(t){w.push(a[t])}),n(t,e)}):n(t,e)}function n(t,a){for(var e=t+1,r=0;r<w.length;r++)w[r][0].split("/")[1]==e&&w[r][0].split("/")[2]==a&&(j("#"+b+"_"+w[r][0].replace(/\//g,"_")).addClass("event"),j("#"+b+"_"+w[r][0].replace(/\//g,"_")+" a").attr("data-original-title",w[r][1]),w[r][3]&&j("#"+b+"_"+w[r][0].replace(/\//g,"_")).css("background",w[r][3]),""==w[r][2]||"#"==w[r][2]?""!=w[r][4]?(j("#"+b+"_"+w[r][0].replace(/\//g,"_")+" a").attr("data-trigger","manual"),j("#"+b+"_"+w[r][0].replace(/\//g,"_")+" a").addClass("manual_popover")):j("#"+b+"_"+w[r][0].replace(/\//g,"_")+" a").attr("href","javascript:false;"):j("#"+b+"_"+w[r][0].replace(/\//g,"_")+" a").attr("href",w[r][2]),w[r][4]?(j("#"+b+"_"+w[r][0].replace(/\//g,"_")).addClass("event_popover"),j("#"+b+"_"+w[r][0].replace(/\//g,"_")+" a").attr("rel","popover"),j("#"+b+"_"+w[r][0].replace(/\//g,"_")+" a").attr("data-content",w[r][4])):(j("#"+b+"_"+w[r][0].replace(/\//g,"_")).addClass("event_tooltip"),j("#"+b+"_"+w[r][0].replace(/\//g,"_")+" a").attr("rel","tooltip")));j("#"+b+" .event_tooltip a").tooltip(p),j("#"+b+" .event_popover a").popover(s),j(".manual_popover").click(function(){j(this).popover("toggle")})}var g,h,a,y,o,s,p,l,m=j('<div class="visualmonthyear"></div>'),b="cal_"+Math.floor(99999*Math.random()).toString(36),w=e.events;a="undefined"!=typeof e.days?e.days:["S","M","T","W","T","F","S"],y="undefined"!=typeof e.months?e.months:["January","February","March","April","May","June","July","August","September","October","November","December"],o="undefined"==typeof e.show_days||e.show_days,s="undefined"!=e.popover_options?e.popover_options:{placement:"top"},p="undefined"!=typeof e.tooltip_options?e.tooltip_options:{placement:"top"},l="undefined"!=typeof e.req_ajax&&e.req_ajax;var D=j(this);t()}),this}}(jQuery);