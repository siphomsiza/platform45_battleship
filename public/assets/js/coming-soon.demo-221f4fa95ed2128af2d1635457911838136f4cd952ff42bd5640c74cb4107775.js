var handleCountdownTimer=function(){var n=new Date;n=new Date(n.getFullYear()+1,0,1),$("#timer").countdown({until:n})},ComingSoon=function(){"use strict";return{init:function(){handleCountdownTimer()}}}();