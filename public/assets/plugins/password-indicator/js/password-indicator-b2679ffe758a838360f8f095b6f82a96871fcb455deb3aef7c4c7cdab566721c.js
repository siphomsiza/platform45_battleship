$.fn.passwordStrength=function(t){function s(t){var s=t.length;s>5&&(s=5);var e=t.replace(/[0-9]/g,""),a=t.length-e.length;a>3&&(a=3);var r=t.replace(/\W/g,""),n=t.length-r.length;n>3&&(n=3);var i=t.replace(/[A-Z]/g,""),l=t.length-i.length;l>3&&(l=3);var h=10*s-20+10*a+15*n+10*l;return 0>h&&(h=0),h>100&&(h=100),h}function e(){for(var t="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$_+",s=10,e=1,a="";s>=e;)$max=t.length-1,$num=Math.floor(Math.random()*$max),$temp=t.substr($num,1),a+=$temp,e++;return a}return this.each(function(){var a=this;a.opts={},a.opts=$.extend({},$.fn.passwordStrength.defaults,t),a.div=$(a.opts.targetDiv),a.defaultClass=a.div.attr("class"),a.percents=a.opts.classes.length?100/a.opts.classes.length:100,v=$(this).keyup(function(){"undefined"==typeof el&&(this.el=$(this));var t=s(this.value),e=this.percents,a=Math.floor(t/e);t>=100&&(a=this.opts.classes.length-1),this.div.removeAttr("class").addClass(this.defaultClass).addClass(this.opts.classes[a])}).after('<a href="#">Generate Password</a>').next().click(function(){return $(this).prev().val(e()).trigger("keyup"),!1})})},$.fn.passwordStrength.defaults={classes:Array("is10","is20","is30","is40","is50","is60","is70","is80","is90","is100"),targetDiv:"#passwordStrengthDiv",cache:{}};