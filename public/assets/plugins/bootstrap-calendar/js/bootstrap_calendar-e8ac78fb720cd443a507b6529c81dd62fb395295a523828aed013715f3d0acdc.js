!function(a){a.fn.calendar=function(t){var e=a.extend({},a.fn.calendar.defaults,t);return this.each(function(){function t(){v=a('<table class="daysmonth table table">'),n();var t=new Date,e=j.val();if(""!=e&&i(e)){var s=e.split("/");2==s[2].length&&("0"==s[2].charAt(0)&&(s[2]=s[2].substring(1)),s[2]=parseInt(s[2]),s[2]<50&&(s[2]+=2e3)),t=new Date(s[2],s[1]-1,s[0])}var p=t.getMonth(),l=t.getFullYear();o(p,l);var d=a('<td><i class="icon-arrow-right"></i></td>');d.click(function(a){a.stopPropagation(),a.preventDefault(),p=(p+1)%12,0==p&&l++,r(p,l)});var u=a('<td><i class="icon-arrow-left"></i></td>');u.click(function(a){a.stopPropagation(),a.preventDefault(),p-=1,-1==p&&(l--,p=11),r(p,l)}),a(".icon-arrow-left").css("cursor","pointer"),a(".icon-arrow-right").css("cursor","pointer");var h=a('<table class="table header"><tr></tr></table>'),y=a('<td colspan=5 class="year span6"></td>');h.append(u),h.append(y),h.append(d),y.append(_),f=a('<div class="calendar" id="'+g+'" ></div>'),f.prepend(h),f.append(v),j.append(f),c(p,l)}function r(a,t){v.empty(),n(),o(a,t),c(a,t)}function n(){if(0!=m){var t=a('<tr class="week_days" >'),e="";a(u).each(function(a,t){e+="<td",0==a&&(e+=' class="first"'),6==a&&(e+=' class="last"'),e+=">"+t+"</td>"}),e+="</tr>",t.append(e),v.append(t)}}function o(a,t){_.text(y[a]+" "+t);for(var e=1,r=s(1,a,t),n=l(a,t),o=a+1,p="",i=0;7>i;i++){if(r>i){var c="";0==i&&(c+="<tr>"),c+='<td class="invalid',0==i&&(c+=" first"),c+='"></td>'}else{var c="";0==i&&(c+="<tr>"),c+='<td id="'+g+"_"+e+"_"+o+"_"+t+'" ',0==i&&(c+=' class="first"'),6==i&&(c+=' class="last"'),c+="><a>"+e+"</a></span>",6==i&&(c+="</tr>"),e++}p+=c}for(var d=1;n>=e;){var c="";d%7==1&&(c+="<tr>"),c+='<td id="'+g+"_"+e+"_"+o+"_"+t+'" ',d%7==1&&(c+=' class="first"'),d%7==0&&(c+=' class="last"'),c+="><a>"+e+"</a></td>",d%7==0&&(c+="</tr>"),e++,d++,p+=c}if(d--,d%7!=0){c="";for(var i=d%7+1;7>=i;i++){var c="";c+='<td class="invalid',7==i&&(c+=" last"),c+='"></td>',7==i&&(c+="</tr>"),p+=c}}v.append(p)}function s(a,t,e){var r=new Date(e,t,a),n=r.getDay();return n}function p(a,t,e){return a>0&&13>a&&e>0&&32768>e&&t>0&&t<=new Date(e,a,0).getDate()}function l(a,t){for(var e=28;p(a+1,e+1,t);)e++;return e}function i(a){var t=a.split("/");return 3!=t.length?!1:p(t[1],t[0],t[2])}function c(t,e){0!=D?a.ajax({type:D.type,url:D.url,data:{month:t+1,year:e},dataType:"json"}).done(function(r){h=[],a.each(r,function(a){h.push(r[a])}),d(t,e)}):d(t,e)}function d(t,e){for(var r=t+1,n=0;n<h.length;n++)h[n][0].split("/")[1]==r&&h[n][0].split("/")[2]==e&&(a("#"+g+"_"+h[n][0].replace(/\//g,"_")).addClass("event"),a("#"+g+"_"+h[n][0].replace(/\//g,"_")+" a").attr("data-original-title",h[n][1]),h[n][3]&&a("#"+g+"_"+h[n][0].replace(/\//g,"_")).css("background",h[n][3]),""==h[n][2]||"#"==h[n][2]?""!=h[n][4]?(a("#"+g+"_"+h[n][0].replace(/\//g,"_")+" a").attr("data-trigger","manual"),a("#"+g+"_"+h[n][0].replace(/\//g,"_")+" a").addClass("manual_popover")):a("#"+g+"_"+h[n][0].replace(/\//g,"_")+" a").attr("href","javascript:false;"):a("#"+g+"_"+h[n][0].replace(/\//g,"_")+" a").attr("href",h[n][2]),h[n][4]?(a("#"+g+"_"+h[n][0].replace(/\//g,"_")).addClass("event_popover"),a("#"+g+"_"+h[n][0].replace(/\//g,"_")+" a").attr("rel","popover"),a("#"+g+"_"+h[n][0].replace(/\//g,"_")+" a").attr("data-content",h[n][4])):(a("#"+g+"_"+h[n][0].replace(/\//g,"_")).addClass("event_tooltip"),a("#"+g+"_"+h[n][0].replace(/\//g,"_")+" a").attr("rel","tooltip")));a("#"+g+" .event_tooltip a").tooltip(w),a("#"+g+" .event_popover a").popover(b),a(".manual_popover").click(function(){a(this).popover("toggle")})}var f,v,u,_=a('<div class="visualmonthyear"></div>'),g="cal_"+Math.floor(99999*Math.random()).toString(36),h=e.events;u="undefined"!=typeof e.days?e.days:["S","M","T","W","T","F","S"];var y;y="undefined"!=typeof e.months?e.months:["January","February","March","April","May","June","July","August","September","October","November","December"];var m;m="undefined"!=typeof e.show_days?e.show_days:!0;var b;b="undefined"!=e.popover_options?e.popover_options:{placement:"top"};var w;w="undefined"!=typeof e.tooltip_options?e.tooltip_options:{placement:"top"};var D;D="undefined"!=typeof e.req_ajax?e.req_ajax:!1;var j=a(this);t()}),this}}(jQuery);