SyntaxHighlighter.config.tagName="code",window.$&&$(document).ready(function(){if($.fn.dataTable){var a=!!$.fn.dataTable.Api,i=$("div.info");i.height()<115&&i.css("min-height","8em");var e=function(a){return a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")},t=$("div.tabs div.css");""===$.trim(t.find("code").text())&&t.find("code, p:eq(0), div").css("display","none");var s=$("<p/>").append($("table").clone()).html();if($("div.tabs div.table").append('<code class="multiline language-html">\t\t\t'+e(s)+"</code>"),a){var n=$("ul.tabs li").eq(3).css("display","none");$(document).on("init.dt",function(i,a){if("dt"===i.namespace){var e=new $.fn.dataTable.Api(a),t=function(a){n.css("display","block"),$("div.tabs div.ajax code").remove(),$("div.tabs div.ajax div.syntaxhighlighter").remove();try{a=JSON.stringify(a,null,2)}catch(i){}$("div.tabs div.ajax").append('<code class="multiline language-js">'+a+"</code>"),setTimeout(function(){SyntaxHighlighter.highlight({},$("div.tabs div.ajax code")[0])},500)},s=e.ajax.json();s&&t(s),e.on("xhr.dt",function(a,i,e){t(e)})}});var d=$("ul.tabs li").eq(4).css("display","none");$(document).on("init.dt.demoSSP",function(a,i){if("dt"===a.namespace&&i.oFeatures.bServerSide){if($.isFunction(i.ajax))return;$.ajax({url:"../resources/examples.php",data:{src:i.sAjaxSource||i.ajax.url||i.ajax},dataType:"text",type:"post",success:function(a){d.css("display","block"),$("div.tabs div.php").append('<code class="multiline language-php">'+a+"</code>"),SyntaxHighlighter.highlight({},$("div.tabs div.php code")[0])}})}})}else $("ul.tabs li").eq(3).css("display","none"),$("ul.tabs li").eq(4).css("display","none");$("ul.tabs").on("click","li",function(){$("ul.tabs li.active").removeClass("active"),$(this).addClass("active"),$("div.tabs>div").css("display","none").eq($(this).index()).css("display","block")}),$("ul.tabs li.active").click()}});