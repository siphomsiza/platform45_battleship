$.fn.easyPieChart=function(t){return this.each(function(){var a;$.data(this,"easyPieChart")||(a=$.extend({},t,$(this).data()),$.data(this,"easyPieChart",new EasyPieChart(this,a)))})};