!function(n,t,s,i){"use strict";var o=function(t,i){this.widget="",this.$element=n(t),this.defaultTime=i.defaultTime,this.disableFocus=i.disableFocus,this.isOpen=i.isOpen,this.minuteStep=i.minuteStep,this.modalBackdrop=i.modalBackdrop,this.secondStep=i.secondStep,this.showInputs=i.showInputs,this.showMeridian=i.showMeridian,this.showSeconds=i.showSeconds,this.template=i.template,this.appendWidgetTo=i.appendWidgetTo,this._init()};o.prototype={constructor:o,_init:function(){var t=this;this.$element.parent().hasClass("input-group")||this.$element.parent().hasClass("input-prepend")?(this.$element.parent(".input-group").find(".input-group-addon").on({"click.timepicker":n.proxy(this.showWidget,this)}),this.$element.on({"focus.timepicker":n.proxy(this.highlightUnit,this),"click.timepicker":n.proxy(this.highlightUnit,this),"keydown.timepicker":n.proxy(this.elementKeydown,this),"blur.timepicker":n.proxy(this.blurElement,this)})):this.template?this.$element.on({"focus.timepicker":n.proxy(this.showWidget,this),"click.timepicker":n.proxy(this.showWidget,this),"blur.timepicker":n.proxy(this.blurElement,this)}):this.$element.on({"focus.timepicker":n.proxy(this.highlightUnit,this),"click.timepicker":n.proxy(this.highlightUnit,this),"keydown.timepicker":n.proxy(this.elementKeydown,this),"blur.timepicker":n.proxy(this.blurElement,this)}),!1!==this.template?this.$widget=n(this.getTemplate()).prependTo(this.$element.parents(this.appendWidgetTo)).on("click",n.proxy(this.widgetClick,this)):this.$widget=!1,this.showInputs&&!1!==this.$widget&&this.$widget.find("input").each(function(){n(this).on({"click.timepicker":function(){n(this).select()},"keydown.timepicker":n.proxy(t.widgetKeydown,t)})}),this.setDefaultTime(this.defaultTime)},blurElement:function(){this.highlightedUnit=i,this.updateFromElementVal()},decrementHour:function(){if(this.showMeridian)if(1===this.hour)this.hour=12;else{if(12===this.hour)return this.hour--,this.toggleMeridian();if(0===this.hour)return this.hour=11,this.toggleMeridian();this.hour--}else 0===this.hour?this.hour=23:this.hour--;this.update()},decrementMinute:function(t){var i;(i=t?this.minute-t:this.minute-this.minuteStep)<0?(this.decrementHour(),this.minute=i+60):this.minute=i,this.update()},decrementSecond:function(){var t=this.second-this.secondStep;t<0?(this.decrementMinute(!0),this.second=t+60):this.second=t,this.update()},elementKeydown:function(t){switch(t.keyCode){case 9:switch(this.updateFromElementVal(),this.highlightedUnit){case"hour":t.preventDefault(),this.highlightNextUnit();break;case"minute":(this.showMeridian||this.showSeconds)&&(t.preventDefault(),this.highlightNextUnit());break;case"second":this.showMeridian&&(t.preventDefault(),this.highlightNextUnit())}break;case 27:this.updateFromElementVal();break;case 37:t.preventDefault(),this.highlightPrevUnit(),this.updateFromElementVal();break;case 38:switch(t.preventDefault(),this.highlightedUnit){case"hour":this.incrementHour(),this.highlightHour();break;case"minute":this.incrementMinute(),this.highlightMinute();break;case"second":this.incrementSecond(),this.highlightSecond();break;case"meridian":this.toggleMeridian(),this.highlightMeridian()}break;case 39:t.preventDefault(),this.updateFromElementVal(),this.highlightNextUnit();break;case 40:switch(t.preventDefault(),this.highlightedUnit){case"hour":this.decrementHour(),this.highlightHour();break;case"minute":this.decrementMinute(),this.highlightMinute();break;case"second":this.decrementSecond(),this.highlightSecond();break;case"meridian":this.toggleMeridian(),this.highlightMeridian()}}},formatTime:function(t,i,e,s){return e=e<10?"0"+e:e,(t=t<10?"0"+t:t)+":"+(i=i<10?"0"+i:i)+(this.showSeconds?":"+e:"")+(this.showMeridian?" "+s:"")},getCursorPosition:function(){var t=this.$element.get(0);if("selectionStart"in t)return t.selectionStart;if(s.selection){t.focus();var i=s.selection.createRange(),e=s.selection.createRange().text.length;return i.moveStart("character",-t.value.length),i.text.length-e}},getTemplate:function(){var t,i,e,s,h,n;switch(this.showInputs?(i='<input type="text" name="hour" class="bootstrap-timepicker-hour form-control" maxlength="2"/>',e='<input type="text" name="minute" class="bootstrap-timepicker-minute form-control" maxlength="2"/>',s='<input type="text" name="second" class="bootstrap-timepicker-second form-control" maxlength="2"/>',h='<input type="text" name="meridian" class="bootstrap-timepicker-meridian form-control" maxlength="2"/>'):(i='<span class="bootstrap-timepicker-hour"></span>',e='<span class="bootstrap-timepicker-minute"></span>',s='<span class="bootstrap-timepicker-second"></span>',h='<span class="bootstrap-timepicker-meridian"></span>'),n='<table><tr><td><a href="#" data-action="incrementHour"><i class="fa fa-chevron-up"></i></a></td><td class="separator">&nbsp;</td><td><a href="#" data-action="incrementMinute"><i class="fa fa-chevron-up"></i></a></td>'+(this.showSeconds?'<td class="separator">&nbsp;</td><td><a href="#" data-action="incrementSecond"><i class="fa fa-chevron-up"></i></a></td>':"")+(this.showMeridian?'<td class="separator">&nbsp;</td><td class="meridian-column"><a href="#" data-action="toggleMeridian"><i class="fa fa-chevron-up"></i></a></td>':"")+"</tr><tr><td>"+i+'</td> <td class="separator">:</td><td>'+e+"</td> "+(this.showSeconds?'<td class="separator">:</td><td>'+s+"</td>":"")+(this.showMeridian?'<td class="separator">&nbsp;</td><td>'+h+"</td>":"")+'</tr><tr><td><a href="#" data-action="decrementHour"><i class="fa fa-chevron-down"></i></a></td><td class="separator"></td><td><a href="#" data-action="decrementMinute"><i class="fa fa-chevron-down"></i></a></td>'+(this.showSeconds?'<td class="separator">&nbsp;</td><td><a href="#" data-action="decrementSecond"><i class="fa fa-chevron-down"></i></a></td>':"")+(this.showMeridian?'<td class="separator">&nbsp;</td><td><a href="#" data-action="toggleMeridian"><i class="fa fa-chevron-down"></i></a></td>':"")+"</tr></table>",this.template){case"modal":t='<div class="bootstrap-timepicker-widget modal hide fade in" data-backdrop="'+(this.modalBackdrop?"true":"false")+'"><div class="modal-header"><a href="#" class="close" data-dismiss="modal">\xd7</a><h3>Pick a Time</h3></div><div class="modal-content">'+n+'</div><div class="modal-footer"><a href="#" class="btn btn-primary" data-dismiss="modal">OK</a></div></div>';break;case"dropdown":t='<div class="bootstrap-timepicker-widget dropdown-menu">'+n+"</div>"}return t},getTime:function(){return this.formatTime(this.hour,this.minute,this.second,this.meridian)},hideWidget:function(){!1!==this.isOpen&&(this.showInputs&&this.updateFromWidgetInputs(),this.$element.trigger({type:"hide.timepicker",time:{value:this.getTime(),hours:this.hour,minutes:this.minute,seconds:this.second,meridian:this.meridian}}),"modal"===this.template&&this.$widget.modal?this.$widget.modal("hide"):this.$widget.removeClass("open"),n(s).off("mousedown.timepicker"),this.isOpen=!1)},highlightUnit:function(){this.position=this.getCursorPosition(),0<=this.position&&this.position<=2?this.highlightHour():3<=this.position&&this.position<=5?this.highlightMinute():6<=this.position&&this.position<=8?this.showSeconds?this.highlightSecond():this.highlightMeridian():9<=this.position&&this.position<=11&&this.highlightMeridian()},highlightNextUnit:function(){switch(this.highlightedUnit){case"hour":this.highlightMinute();break;case"minute":this.showSeconds?this.highlightSecond():this.showMeridian?this.highlightMeridian():this.highlightHour();break;case"second":this.showMeridian?this.highlightMeridian():this.highlightHour();break;case"meridian":this.highlightHour()}},highlightPrevUnit:function(){switch(this.highlightedUnit){case"hour":this.highlightMeridian();break;case"minute":this.highlightHour();break;case"second":this.highlightMinute();break;case"meridian":this.showSeconds?this.highlightSecond():this.highlightMinute()}},highlightHour:function(){var t=this.$element.get(0);this.highlightedUnit="hour",t.setSelectionRange&&setTimeout(function(){t.setSelectionRange(0,2)},0)},highlightMinute:function(){var t=this.$element.get(0);this.highlightedUnit="minute",t.setSelectionRange&&setTimeout(function(){t.setSelectionRange(3,5)},0)},highlightSecond:function(){var t=this.$element.get(0);this.highlightedUnit="second",t.setSelectionRange&&setTimeout(function(){t.setSelectionRange(6,8)},0)},highlightMeridian:function(){var t=this.$element.get(0);this.highlightedUnit="meridian",t.setSelectionRange&&(this.showSeconds?setTimeout(function(){t.setSelectionRange(9,11)},0):setTimeout(function(){t.setSelectionRange(6,8)},0))},incrementHour:function(){if(this.showMeridian){if(11===this.hour)return this.hour++,this.toggleMeridian();12===this.hour&&(this.hour=0)}23!==this.hour?(this.hour++,this.update()):this.hour=0},incrementMinute:function(t){var i;59<(i=t?this.minute+t:this.minute+this.minuteStep-this.minute%this.minuteStep)?(this.incrementHour(),this.minute=i-60):this.minute=i,this.update()},incrementSecond:function(){var t=this.second+this.secondStep-this.second%this.secondStep;59<t?(this.incrementMinute(!0),this.second=t-60):this.second=t,this.update()},remove:function(){n("document").off(".timepicker"),this.$widget&&this.$widget.remove(),delete this.$element.data().timepicker},setDefaultTime:function(t){if(this.$element.val())this.updateFromElementVal();else if("current"===t){var i=new Date,e=i.getHours(),s=Math.floor(i.getMinutes()/this.minuteStep)*this.minuteStep,h=Math.floor(i.getSeconds()/this.secondStep)*this.secondStep,n="AM";this.showMeridian&&(0===e?e=12:12<=e?(12<e&&(e-=12),n="PM"):n="AM"),this.hour=e,this.minute=s,this.second=h,this.meridian=n,this.update()}else!1===t?(this.hour=0,this.minute=0,this.second=0,this.meridian="AM"):this.setTime(t)},setTime:function(t){var i,e;this.showMeridian?(e=(i=t.split(" "))[0].split(":"),this.meridian=i[1]):e=t.split(":"),this.hour=parseInt(e[0],10),this.minute=parseInt(e[1],10),this.second=parseInt(e[2],10),isNaN(this.hour)&&(this.hour=0),isNaN(this.minute)&&(this.minute=0),this.showMeridian?(12<this.hour?this.hour=12:this.hour<1&&(this.hour=12),"am"===this.meridian||"a"===this.meridian?this.meridian="AM":"pm"!==this.meridian&&"p"!==this.meridian||(this.meridian="PM"),"AM"!==this.meridian&&"PM"!==this.meridian&&(this.meridian="AM")):24<=this.hour?this.hour=23:this.hour<0&&(this.hour=0),this.minute<0?this.minute=0:60<=this.minute&&(this.minute=59),this.showSeconds&&(isNaN(this.second)?this.second=0:this.second<0?this.second=0:60<=this.second&&(this.second=59)),this.update()},showWidget:function(){if(!this.isOpen&&!this.$element.is(":disabled")){var i=this;n(s).on("mousedown.timepicker",function(t){0===n(t.target).closest(".bootstrap-timepicker-widget").length&&i.hideWidget()}),this.$element.trigger({type:"show.timepicker",time:{value:this.getTime(),hours:this.hour,minutes:this.minute,seconds:this.second,meridian:this.meridian}}),this.disableFocus&&this.$element.blur(),this.updateFromElementVal(),"modal"===this.template&&this.$widget.modal?this.$widget.modal("show").on("hidden",n.proxy(this.hideWidget,this)):!1===this.isOpen&&this.$widget.addClass("open"),this.isOpen=!0}},toggleMeridian:function(){this.meridian="AM"===this.meridian?"PM":"AM",this.update()},update:function(){this.$element.trigger({type:"changeTime.timepicker",time:{value:this.getTime(),hours:this.hour,minutes:this.minute,seconds:this.second,meridian:this.meridian}}),this.updateElement(),this.updateWidget()},updateElement:function(){this.$element.val(this.getTime()).change()},updateFromElementVal:function(){var t=this.$element.val();t&&this.setTime(t)},updateWidget:function(){if(!1!==this.$widget){var t=this.hour<10?"0"+this.hour:this.hour,i=this.minute<10?"0"+this.minute:this.minute,e=this.second<10?"0"+this.second:this.second;this.showInputs?(this.$widget.find("input.bootstrap-timepicker-hour").val(t),this.$widget.find("input.bootstrap-timepicker-minute").val(i),this.showSeconds&&this.$widget.find("input.bootstrap-timepicker-second").val(e),this.showMeridian&&this.$widget.find("input.bootstrap-timepicker-meridian").val(this.meridian)):(this.$widget.find("span.bootstrap-timepicker-hour").text(t),this.$widget.find("span.bootstrap-timepicker-minute").text(i),this.showSeconds&&this.$widget.find("span.bootstrap-timepicker-second").text(e),this.showMeridian&&this.$widget.find("span.bootstrap-timepicker-meridian").text(this.meridian))}},updateFromWidgetInputs:function(){if(!1!==this.$widget){var t=n("input.bootstrap-timepicker-hour",this.$widget).val()+":"+n("input.bootstrap-timepicker-minute",this.$widget).val()+(this.showSeconds?":"+n("input.bootstrap-timepicker-second",this.$widget).val():"")+(this.showMeridian?" "+n("input.bootstrap-timepicker-meridian",this.$widget).val():"");this.setTime(t)}},widgetClick:function(t){t.stopPropagation(),t.preventDefault();var i=n(t.target).closest("a").data("action");i&&this[i]()},widgetKeydown:function(t){var i=n(t.target).closest("input").attr("name");switch(t.keyCode){case 9:if(this.showMeridian){if("meridian"===i)return this.hideWidget()}else if(this.showSeconds){if("second"===i)return this.hideWidget()}else if("minute"===i)return this.hideWidget();this.updateFromWidgetInputs();break;case 27:this.hideWidget();break;case 38:switch(t.preventDefault(),i){case"hour":this.incrementHour();break;case"minute":this.incrementMinute();break;case"second":this.incrementSecond();break;case"meridian":this.toggleMeridian()}break;case 40:switch(t.preventDefault(),i){case"hour":this.decrementHour();break;case"minute":this.decrementMinute();break;case"second":this.decrementSecond();break;case"meridian":this.toggleMeridian()}}}},n.fn.timepicker=function(s){var h=Array.apply(null,arguments);return h.shift(),this.each(function(){var t=n(this),i=t.data("timepicker"),e="object"==typeof s&&s;i||t.data("timepicker",i=new o(this,n.extend({},n.fn.timepicker.defaults,e,n(this).data()))),"string"==typeof s&&i[s].apply(i,h)})},n.fn.timepicker.defaults={defaultTime:"current",disableFocus:!1,isOpen:!1,minuteStep:15,modalBackdrop:!1,secondStep:15,showSeconds:!1,showInputs:!0,showMeridian:!0,template:"dropdown",appendWidgetTo:".bootstrap-timepicker"},n.fn.timepicker.Constructor=o}(jQuery,window,document);