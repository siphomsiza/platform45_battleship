!function(s){s.fn.SuperBox=function(){var e=s('<div class="superbox-show"></div>'),i=s('<img src="" class="superbox-current-img">'),t=s('<div class="superbox-close"></div>');return e.append(i).append(t),this.each(function(){s(".superbox-list").click(function(){var t=s(this).find(".superbox-img"),o=t.data("img"),r=s(".superbox").attr("data-offset");r=r?r:0,i.attr("src",o),s(".superbox-list").removeClass("active"),0==s(".superbox-current-img").css("opacity")&&s(".superbox-current-img").animate({opacity:1}),s(this).next().hasClass("superbox-show")?e.toggle():(e.insertAfter(this).css("display","block"),s(this).addClass("active")),s("html, body").animate({scrollTop:e.position().top-t.width()-r},"medium")}),s(".superbox").on("click",".superbox-close",function(){s(".superbox-current-img").animate({opacity:0},200,function(){s(this).closest(".superbox").find(".superbox-list").removeClass("active"),s(".superbox-show").slideUp()})})})}}(jQuery);