!function(l,t){"use strict";var n=document.createElement("a"),p=function(t,e){"link"===e.nodeName.toLowerCase()&&(n.href=e.href,e.href=n.protocol+"//"+n.host+n.pathname+n.search)};t.ext.buttons.print={className:"buttons-print",text:function(t){return t.i18n("buttons.print","Print")},action:function(t,e,n,o){var a=e.buttons.exportData(o.exportOptions),r=function(t,e){for(var n="<tr>",o=0,a=t.length;o<a;o++)n+="<"+e+">"+t[o]+"</"+e+">";return n+"</tr>"},i='<table class="'+e.table().node().className+'">';o.header&&(i+="<thead>"+r(a.header,"th")+"</thead>"),i+="<tbody>";for(var d=0,s=a.body.length;d<s;d++)i+=r(a.body[d],"td");i+="</tbody>",o.footer&&(i+="<thead>"+r(a.footer,"th")+"</thead>");var u=window.open("",""),c=o.title.replace("*",l("title").text());l(u.document.head).append("<title>"+c+"</title>").append(l("style, link").clone().each(p)),l(u.document.body).append("<h1>"+c+"</h1>").append("<div>"+o.message+"</div>").append(i),o.customize&&o.customize(u),setTimeout(function(){o.autoPrint&&(u.print(),u.close())},250)},title:"*",message:"",exportOptions:{},header:!0,footer:!1,autoPrint:!0,customize:null}}(jQuery,jQuery.fn.dataTable);