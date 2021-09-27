(function(){"use strict";var i=this.Chart,n=i.helpers;i.Type.extend({name:"Radar",defaults:{scaleShowLine:!0,angleShowLineOut:!0,scaleShowLabels:!1,scaleBeginAtZero:!0,angleLineColor:"rgba(0,0,0,.1)",angleLineWidth:1,pointLabelFontFamily:"'Arial'",pointLabelFontStyle:"normal",pointLabelFontSize:10,pointLabelFontColor:"#666",pointDot:!0,pointDotRadius:3,pointDotStrokeWidth:1,pointHitDetectionRadius:20,datasetStroke:!0,datasetStrokeWidth:2,datasetFill:!0,legendTemplate:'<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'},initialize:function(a){this.PointClass=i.Point.extend({strokeWidth:this.options.pointDotStrokeWidth,radius:this.options.pointDotRadius,display:this.options.pointDot,hitDetectionRadius:this.options.pointHitDetectionRadius,ctx:this.chart.ctx}),this.datasets=[],this.buildScale(a),this.options.showTooltips&&n.bindEvents(this,this.options.tooltipEvents,function(t){var i="mouseout"!==t.type?this.getPointsAtEvent(t):[];this.eachPoints(function(t){t.restore(["fillColor","strokeColor"])}),n.each(i,function(t){t.fillColor=t.highlightFill,t.strokeColor=t.highlightStroke}),this.showTooltip(i)}),n.each(a.datasets,function(o){var e={label:o.label||null,fillColor:o.fillColor,strokeColor:o.strokeColor,pointColor:o.pointColor,pointStrokeColor:o.pointStrokeColor,points:[]};this.datasets.push(e),n.each(o.data,function(t,i){var s;this.scale.animation||(s=this.scale.getPointPosition(i,this.scale.calculateCenterOffset(t))),e.points.push(new this.PointClass({value:t,label:a.labels[i],datasetLabel:o.label,x:this.options.animation?this.scale.xCenter:s.x,y:this.options.animation?this.scale.yCenter:s.y,strokeColor:o.pointStrokeColor,fillColor:o.pointColor,highlightFill:o.pointHighlightFill||o.pointColor,highlightStroke:o.pointHighlightStroke||o.pointStrokeColor}))},this)},this),this.render()},eachPoints:function(i){n.each(this.datasets,function(t){n.each(t.points,i,this)},this)},getPointsAtEvent:function(t){var i=n.getRelativePosition(t),s=n.getAngleFromPoint({x:this.scale.xCenter,y:this.scale.yCenter},i),o=2*Math.PI/this.scale.valuesCount,e=Math.round((s.angle-1.5*Math.PI)/o),a=[];return(e>=this.scale.valuesCount||e<0)&&(e=0),s.distance<=this.scale.drawingArea&&n.each(this.datasets,function(t){a.push(t.points[e])}),a},buildScale:function(t){this.scale=new i.RadialScale({display:this.options.showScale,fontStyle:this.options.scaleFontStyle,fontSize:this.options.scaleFontSize,fontFamily:this.options.scaleFontFamily,fontColor:this.options.scaleFontColor,showLabels:this.options.scaleShowLabels,showLabelBackdrop:this.options.scaleShowLabelBackdrop,backdropColor:this.options.scaleBackdropColor,backdropPaddingY:this.options.scaleBackdropPaddingY,backdropPaddingX:this.options.scaleBackdropPaddingX,lineWidth:this.options.scaleShowLine?this.options.scaleLineWidth:0,lineColor:this.options.scaleLineColor,angleLineColor:this.options.angleLineColor,angleLineWidth:this.options.angleShowLineOut?this.options.angleLineWidth:0,pointLabelFontColor:this.options.pointLabelFontColor,pointLabelFontSize:this.options.pointLabelFontSize,pointLabelFontFamily:this.options.pointLabelFontFamily,pointLabelFontStyle:this.options.pointLabelFontStyle,height:this.chart.height,width:this.chart.width,xCenter:this.chart.width/2,yCenter:this.chart.height/2,ctx:this.chart.ctx,templateString:this.options.scaleLabel,labels:t.labels,valuesCount:t.datasets[0].data.length}),this.scale.setScaleSize(),this.updateScaleRange(t.datasets),this.scale.buildYLabels()},updateScaleRange:function(t){var i,s=(i=[],n.each(t,function(t){t.data?i=i.concat(t.data):n.each(t.points,function(t){i.push(t.value)})}),i),o=this.options.scaleOverride?{steps:this.options.scaleSteps,stepValue:this.options.scaleStepWidth,min:this.options.scaleStartValue,max:this.options.scaleStartValue+this.options.scaleSteps*this.options.scaleStepWidth}:n.calculateScaleRange(s,n.min([this.chart.width,this.chart.height])/2,this.options.scaleFontSize,this.options.scaleBeginAtZero,this.options.scaleIntegersOnly);n.extend(this.scale,o)},addData:function(t,o){this.scale.valuesCount++,n.each(t,function(t,i){var s=this.scale.getPointPosition(this.scale.valuesCount,this.scale.calculateCenterOffset(t));this.datasets[i].points.push(new this.PointClass({value:t,label:o,x:s.x,y:s.y,strokeColor:this.datasets[i].pointStrokeColor,fillColor:this.datasets[i].pointColor}))},this),this.scale.labels.push(o),this.reflow(),this.update()},removeData:function(){this.scale.valuesCount--,this.scale.labels.shift(),n.each(this.datasets,function(t){t.points.shift()},this),this.reflow(),this.update()},update:function(){this.eachPoints(function(t){t.save()}),this.reflow(),this.render()},reflow:function(){n.extend(this.scale,{width:this.chart.width,height:this.chart.height,size:n.min([this.chart.width,this.chart.height]),xCenter:this.chart.width/2,yCenter:this.chart.height/2}),this.updateScaleRange(this.datasets),this.scale.setScaleSize(),this.scale.buildYLabels()},draw:function(t){var s=t||1,o=this.chart.ctx;this.clear(),this.scale.draw(),n.each(this.datasets,function(t){n.each(t.points,function(t,i){t.hasValue()&&t.transition(this.scale.getPointPosition(i,this.scale.calculateCenterOffset(t.value)),s)},this),o.lineWidth=this.options.datasetStrokeWidth,o.strokeStyle=t.strokeColor,o.beginPath(),n.each(t.points,function(t,i){0===i?o.moveTo(t.x,t.y):o.lineTo(t.x,t.y)},this),o.closePath(),o.stroke(),o.fillStyle=t.fillColor,o.fill(),n.each(t.points,function(t){t.hasValue()&&t.draw()})},this)}})}).call(this);