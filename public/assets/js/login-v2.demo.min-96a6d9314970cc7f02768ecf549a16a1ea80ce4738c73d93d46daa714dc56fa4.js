var handleLoginPageChangeBackground=function(){$('[data-click="change-bg"]').live("click",function(){var i='[data-id="login-cover-image"]',a=$(this).find("img").attr("src"),n='<img src="'+a+'" data-id="login-cover-image" />';$(".login-cover-image").prepend(n),$(i).not('[src="'+a+'"]').fadeOut("slow",function(){$(this).remove()}),$('[data-click="change-bg"]').closest("li").removeClass("active"),$(this).closest("li").addClass("active")})},LoginV2=function(){"use strict";return{init:function(){handleLoginPageChangeBackground()}}}();