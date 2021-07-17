!function(S){function I(){return new Date(Date.UTC.apply(Date,arguments))}var g=function(e,t){var i=this;this.element=S(e),this.language=t.language||this.element.data("date-language")||"en",this.language=this.language in x?this.language:"en",this.isRTL=x[this.language].rtl||"rtl"==S("body").css("direction"),this.formatType=t.formatType||this.element.data("format-type")||"standard",this.format=H.parseFormat(t.format||this.element.data("date-format")||x[this.language].format||H.getDefaultFormat(this.formatType,"input"),this.formatType),this.isInline=!1,this.isVisible=!1,this.isInput=this.element.is("input"),this.component=!!this.element.is(".date")&&this.element.find(".date-set").parent(),this.componentReset=!!this.element.is(".date")&&this.element.find(".date-reset").parent(),this.hasInput=this.component&&this.element.find("input").length,this.component&&0===this.component.length&&(this.component=!1),this.linkField=t.linkField||this.element.data("link-field")||!1,this.linkFormat=H.parseFormat(t.linkFormat||this.element.data("link-format")||H.getDefaultFormat(this.formatType,"link"),this.formatType),this.minuteStep=t.minuteStep||this.element.data("minute-step")||5,this.pickerPosition=t.pickerPosition||this.element.data("picker-position")||"bottom-right",this.showMeridian=t.showMeridian||this.element.data("show-meridian")||!1,this.initialDate=t.initialDate||new Date,this._attachEvents(),this.formatViewType="datetime","formatViewType"in t?this.formatViewType=t.formatViewType:"formatViewType"in this.element.data()&&(this.formatViewType=this.element.data("formatViewType")),this.minView=0,"minView"in t?this.minView=t.minView:"minView"in this.element.data()&&(this.minView=this.element.data("min-view")),this.minView=H.convertViewMode(this.minView),this.maxView=H.modes.length-1,"maxView"in t?this.maxView=t.maxView:"maxView"in this.element.data()&&(this.maxView=this.element.data("max-view")),this.maxView=H.convertViewMode(this.maxView),this.wheelViewModeNavigation=!1,"wheelViewModeNavigation"in t?this.wheelViewModeNavigation=t.wheelViewModeNavigation:"wheelViewModeNavigation"in this.element.data()&&(this.wheelViewModeNavigation=this.element.data("view-mode-wheel-navigation")),this.wheelViewModeNavigationInverseDirection=!1,"wheelViewModeNavigationInverseDirection"in t?this.wheelViewModeNavigationInverseDirection=t.wheelViewModeNavigationInverseDirection:"wheelViewModeNavigationInverseDirection"in this.element.data()&&(this.wheelViewModeNavigationInverseDirection=this.element.data("view-mode-wheel-navigation-inverse-dir")),this.wheelViewModeNavigationDelay=100,"wheelViewModeNavigationDelay"in t?this.wheelViewModeNavigationDelay=t.wheelViewModeNavigationDelay:"wheelViewModeNavigationDelay"in this.element.data()&&(this.wheelViewModeNavigationDelay=this.element.data("view-mode-wheel-navigation-delay")),this.startViewMode=2,"startView"in t?this.startViewMode=t.startView:"startView"in this.element.data()&&(this.startViewMode=this.element.data("start-view")),this.startViewMode=H.convertViewMode(this.startViewMode),this.viewMode=this.startViewMode,this.viewSelect=this.minView,"viewSelect"in t?this.viewSelect=t.viewSelect:"viewSelect"in this.element.data()&&(this.viewSelect=this.element.data("view-select")),this.viewSelect=H.convertViewMode(this.viewSelect),this.forceParse=!0,"forceParse"in t?this.forceParse=t.forceParse:"dateForceParse"in this.element.data()&&(this.forceParse=this.element.data("date-force-parse")),this.picker=S(H.template).appendTo(this.isInline?this.element:"body").on({click:S.proxy(this.click,this),mousedown:S.proxy(this.mousedown,this)}),this.wheelViewModeNavigation&&(S.fn.mousewheel?this.picker.on({mousewheel:S.proxy(this.mousewheel,this)}):console.log("Mouse Wheel event is not supported. Please include the jQuery Mouse Wheel plugin before enabling this option")),this.isInline?this.picker.addClass("datetimepicker-inline"):this.picker.addClass("datetimepicker-dropdown-"+this.pickerPosition+" dropdown-menu"),this.isRTL&&(this.picker.addClass("datetimepicker-rtl"),this.picker.find(".prev i, .next i").toggleClass("fa-arrow-left fa-arrow-right")),S(document).on("mousedown",function(e){0===S(e.target).closest(".datetimepicker").length&&i.hide()}),this.autoclose=!1,"autoclose"in t?this.autoclose=t.autoclose:"dateAutoclose"in this.element.data()&&(this.autoclose=this.element.data("date-autoclose")),this.keyboardNavigation=!0,"keyboardNavigation"in t?this.keyboardNavigation=t.keyboardNavigation:"dateKeyboardNavigation"in this.element.data()&&(this.keyboardNavigation=this.element.data("date-keyboard-navigation")),this.todayBtn=t.todayBtn||this.element.data("date-today-btn")||!1,this.todayHighlight=t.todayHighlight||this.element.data("date-today-highlight")||!1,this.weekStart=(t.weekStart||this.element.data("date-weekstart")||x[this.language].weekStart||0)%7,this.weekEnd=(this.weekStart+6)%7,this.startDate=-Infinity,this.endDate=Infinity,this.daysOfWeekDisabled=[],this.setStartDate(t.startDate||this.element.data("date-startdate")),this.setEndDate(t.endDate||this.element.data("date-enddate")),this.setDaysOfWeekDisabled(t.daysOfWeekDisabled||this.element.data("date-days-of-week-disabled")),this.fillDow(),this.fillMonths(),this.update(),this.showMode(),this.isInline&&this.show()};g.prototype={constructor:g,_events:[],_attachEvents:function(){this._detachEvents(),this.isInput?this._events=[[this.element,{focus:S.proxy(this.show,this),keyup:S.proxy(this.update,this),keydown:S.proxy(this.keydown,this)}]]:this.component&&this.hasInput?(this._events=[[this.element.find("input"),{focus:S.proxy(this.show,this),keyup:S.proxy(this.update,this),keydown:S.proxy(this.keydown,this)}],[this.component,{click:S.proxy(this.show,this)}]],this.componentReset&&this._events.push([this.componentReset,{click:S.proxy(this.reset,this)}])):this.element.is("div")?this.isInline=!0:this._events=[[this.element,{click:S.proxy(this.show,this)}]];for(var e,t,i=0;i<this._events.length;i++)e=this._events[i][0],t=this._events[i][1],e.on(t)},_detachEvents:function(){for(var e,t,i=0;i<this._events.length;i++)e=this._events[i][0],t=this._events[i][1],e.off(t);this._events=[]},show:function(e){this.picker.show(),this.height=this.component?this.component.outerHeight():this.element.outerHeight(),this.forceParse&&this.update(),this.place(),S(window).on("resize",S.proxy(this.place,this)),e&&(e.stopPropagation(),e.preventDefault()),this.isVisible=!0,this.element.trigger({type:"show",date:this.date})},hide:function(){this.isVisible&&(this.isInline||(this.picker.hide(),S(window).off("resize",this.place),this.viewMode=this.startViewMode,this.showMode(),this.isInput||S(document).off("mousedown",this.hide),this.forceParse&&(this.isInput&&this.element.val()||this.hasInput&&this.element.find("input").val())&&this.setValue(),this.isVisible=!1,this.element.trigger({type:"hide",date:this.date})))},remove:function(){this._detachEvents(),this.picker.remove(),delete this.picker,delete this.element.data().datetimepicker},getDate:function(){var e=this.getUTCDate();return new Date(e.getTime()+6e4*e.getTimezoneOffset())},getUTCDate:function(){return this.date},setDate:function(e){this.setUTCDate(new Date(e.getTime()-6e4*e.getTimezoneOffset()))},setUTCDate:function(e){e>=this.startDate&&e<=this.endDate?(this.date=e,this.setValue(),this.viewDate=this.date,this.fill()):this.element.trigger({type:"outOfRange",date:e,startDate:this.startDate,endDate:this.endDate})},setFormat:function(e){var t;this.format=H.parseFormat(e,this.formatType),this.isInput?t=this.element:this.component&&(t=this.element.find("input")),t&&t.val()&&this.setValue()},setValue:function(){var e=this.getFormattedDate();this.isInput?this.element.val(e):(this.component&&this.element.find("input").val(e),this.element.data("date",e)),this.linkField&&S("#"+this.linkField).val(this.getFormattedDate(this.linkFormat))},getFormattedDate:function(e){return e==undefined&&(e=this.format),H.formatDate(this.date,e,this.language,this.formatType)},setStartDate:function(e){this.startDate=e||-Infinity,this.startDate!==-Infinity&&(this.startDate=H.parseDate(this.startDate,this.format,this.language,this.formatType)),this.update(),this.updateNavArrows()},setEndDate:function(e){this.endDate=e||Infinity,this.endDate!==Infinity&&(this.endDate=H.parseDate(this.endDate,this.format,this.language,this.formatType)),this.update(),this.updateNavArrows()},setDaysOfWeekDisabled:function(e){this.daysOfWeekDisabled=e||[],S.isArray(this.daysOfWeekDisabled)||(this.daysOfWeekDisabled=this.daysOfWeekDisabled.split(/,\s*/)),this.daysOfWeekDisabled=S.map(this.daysOfWeekDisabled,function(e){return parseInt(e,10)}),this.update(),this.updateNavArrows()},place:function(){if(!this.isInline){var e,t,i,s=parseInt(this.element.parents().filter(function(){return"auto"!=S(this).css("z-index")}).first().css("z-index"))+10;this.component?(i=(e=this.component.offset()).left,"bottom-left"!=this.pickerPosition&&"top-left"!=this.pickerPosition||(i+=this.component.outerWidth()-this.picker.outerWidth())):i=(e=this.element.offset()).left,t="top-left"==this.pickerPosition||"top-right"==this.pickerPosition?e.top-this.picker.outerHeight():e.top+this.height,this.picker.css({top:t,left:i,zIndex:s})}},update:function(e){var t,i=!1;arguments&&arguments.length&&("string"==typeof e||e instanceof Date)?(t=e,i=!0):t=this.element.data("date")||(this.isInput?this.element.val():this.element.find("input").val())||this.initialDate,t||(t=new Date,i=!1),this.date=H.parseDate(t,this.format,this.language,this.formatType),i&&this.setValue(),this.date<this.startDate?this.viewDate=new Date(this.startDate):this.date>this.endDate?this.viewDate=new Date(this.endDate):this.viewDate=new Date(this.date),this.fill()},fillDow:function(){for(var e=this.weekStart,t="<tr>";e<this.weekStart+7;)t+='<th class="dow">'+x[this.language].daysMin[e++%7]+"</th>";t+="</tr>",this.picker.find(".datetimepicker-days thead").append(t)},fillMonths:function(){for(var e="",t=0;t<12;)e+='<span class="month">'+x[this.language].monthsShort[t++]+"</span>";this.picker.find(".datetimepicker-months td").html(e)},fill:function(){if(null!=this.date&&null!=this.viewDate){var e=new Date(this.viewDate),t=e.getUTCFullYear(),i=e.getUTCMonth(),s=e.getUTCDate(),a=e.getUTCHours(),n=e.getUTCMinutes(),h=this.startDate!==-Infinity?this.startDate.getUTCFullYear():-Infinity,o=this.startDate!==-Infinity?this.startDate.getUTCMonth():-Infinity,r=this.endDate!==Infinity?this.endDate.getUTCFullYear():Infinity,d=this.endDate!==Infinity?this.endDate.getUTCMonth():Infinity,l=new I(this.date.getUTCFullYear(),this.date.getUTCMonth(),this.date.getUTCDate()).valueOf(),c=new Date;if(this.picker.find(".datetimepicker-days thead th:eq(1)").text(x[this.language].months[i]+" "+t),"time"==this.formatViewType){var u=a%12?a%12:12,m=(u<10?"0":"")+u,p=(n<10?"0":"")+n,v=x[this.language].meridiem[a<12?0:1];this.picker.find(".datetimepicker-hours thead th:eq(1)").text(m+":"+p+" "+v.toUpperCase()),this.picker.find(".datetimepicker-minutes thead th:eq(1)").text(m+":"+p+" "+v.toUpperCase())}else this.picker.find(".datetimepicker-hours thead th:eq(1)").text(s+" "+x[this.language].months[i]+" "+t),this.picker.find(".datetimepicker-minutes thead th:eq(1)").text(s+" "+x[this.language].months[i]+" "+t);this.picker.find("tfoot th.today").text(x[this.language].today).toggle(!1!==this.todayBtn),this.updateNavArrows(),this.fillMonths();var f=I(t,i-1,28,0,0,0,0),g=H.getDaysInMonth(f.getUTCFullYear(),f.getUTCMonth());f.setUTCDate(g),f.setUTCDate(g-(f.getUTCDay()-this.weekStart+7)%7);var w=new Date(f);w.setUTCDate(w.getUTCDate()+42),w=w.valueOf();for(var D,y=[];f.valueOf()<w;)f.getUTCDay()==this.weekStart&&y.push("<tr>"),D="",f.getUTCFullYear()<t||f.getUTCFullYear()==t&&f.getUTCMonth()<i?D+=" old":(f.getUTCFullYear()>t||f.getUTCFullYear()==t&&f.getUTCMonth()>i)&&(D+=" new"),this.todayHighlight&&f.getUTCFullYear()==c.getFullYear()&&f.getUTCMonth()==c.getMonth()&&f.getUTCDate()==c.getDate()&&(D+=" today"),f.valueOf()==l&&(D+=" active"),(f.valueOf()+864e5<=this.startDate||f.valueOf()>this.endDate||-1!==S.inArray(f.getUTCDay(),this.daysOfWeekDisabled))&&(D+=" disabled"),y.push('<td class="day'+D+'">'+f.getUTCDate()+"</td>"),f.getUTCDay()==this.weekEnd&&y.push("</tr>"),f.setUTCDate(f.getUTCDate()+1);this.picker.find(".datetimepicker-days tbody").empty().append(y.join("")),y=[];for(var T="",M="",C="",k=0;k<24;k++){D="",(U=I(t,i,s,k)).valueOf()+36e5<=this.startDate||U.valueOf()>this.endDate?D+=" disabled":a==k&&(D+=" active"),this.showMeridian&&2==x[this.language].meridiem.length?((M=k<12?x[this.language].meridiem[0]:x[this.language].meridiem[1])!=C&&(""!=C&&y.push("</fieldset>"),y.push('<fieldset class="hour"><legend>'+M.toUpperCase()+"</legend>")),C=M,T=k%12?k%12:12,y.push('<span class="hour'+D+" hour_"+(k<12?"am":"pm")+'">'+T+"</span>"),23==k&&y.push("</fieldset>")):(T=k+":00",y.push('<span class="hour'+D+'">'+T+"</span>"))}this.picker.find(".datetimepicker-hours td").html(y.join("")),y=[],C=M=T="";for(k=0;k<60;k+=this.minuteStep){var U;D="",(U=I(t,i,s,a,k,0)).valueOf()<this.startDate||U.valueOf()>this.endDate?D+=" disabled":Math.floor(n/this.minuteStep)==Math.floor(k/this.minuteStep)&&(D+=" active"),this.showMeridian&&2==x[this.language].meridiem.length?((M=a<12?x[this.language].meridiem[0]:x[this.language].meridiem[1])!=C&&(""!=C&&y.push("</fieldset>"),y.push('<fieldset class="minute"><legend>'+M.toUpperCase()+"</legend>")),C=M,T=a%12?a%12:12,y.push('<span class="minute'+D+'">'+T+":"+(k<10?"0"+k:k)+"</span>"),59==k&&y.push("</fieldset>")):(T=k+":00",y.push('<span class="minute'+D+'">'+a+":"+(k<10?"0"+k:k)+"</span>"))}this.picker.find(".datetimepicker-minutes td").html(y.join(""));var b=this.date.getUTCFullYear(),V=this.picker.find(".datetimepicker-months").find("th:eq(1)").text(t).end().find("span").removeClass("active");b==t&&V.eq(this.date.getUTCMonth()).addClass("active"),(t<h||r<t)&&V.addClass("disabled"),t==h&&V.slice(0,o).addClass("disabled"),t==r&&V.slice(d+1).addClass("disabled"),y="",t=10*parseInt(t/10,10);var F=this.picker.find(".datetimepicker-years").find("th:eq(1)").text(t+"-"+(t+9)).end().find("td");t-=1;for(k=-1;k<11;k++)y+='<span class="year'+(-1==k||10==k?" old":"")+(b==t?" active":"")+(t<h||r<t?" disabled":"")+'">'+t+"</span>",t+=1;F.html(y),this.place()}},updateNavArrows:function(){var e=new Date(this.viewDate),t=e.getUTCFullYear(),i=e.getUTCMonth(),s=e.getUTCDate(),a=e.getUTCHours();switch(this.viewMode){case 0:this.startDate!==-Infinity&&t<=this.startDate.getUTCFullYear()&&i<=this.startDate.getUTCMonth()&&s<=this.startDate.getUTCDate()&&a<=this.startDate.getUTCHours()?this.picker.find(".prev").css({visibility:"hidden"}):this.picker.find(".prev").css({visibility:"visible"}),this.endDate!==Infinity&&t>=this.endDate.getUTCFullYear()&&i>=this.endDate.getUTCMonth()&&s>=this.endDate.getUTCDate()&&a>=this.endDate.getUTCHours()?this.picker.find(".next").css({visibility:"hidden"}):this.picker.find(".next").css({visibility:"visible"});break;case 1:this.startDate!==-Infinity&&t<=this.startDate.getUTCFullYear()&&i<=this.startDate.getUTCMonth()&&s<=this.startDate.getUTCDate()?this.picker.find(".prev").css({visibility:"hidden"}):this.picker.find(".prev").css({visibility:"visible"}),this.endDate!==Infinity&&t>=this.endDate.getUTCFullYear()&&i>=this.endDate.getUTCMonth()&&s>=this.endDate.getUTCDate()?this.picker.find(".next").css({visibility:"hidden"}):this.picker.find(".next").css({visibility:"visible"});break;case 2:this.startDate!==-Infinity&&t<=this.startDate.getUTCFullYear()&&i<=this.startDate.getUTCMonth()?this.picker.find(".prev").css({visibility:"hidden"}):this.picker.find(".prev").css({visibility:"visible"}),this.endDate!==Infinity&&t>=this.endDate.getUTCFullYear()&&i>=this.endDate.getUTCMonth()?this.picker.find(".next").css({visibility:"hidden"}):this.picker.find(".next").css({visibility:"visible"});break;case 3:case 4:this.startDate!==-Infinity&&t<=this.startDate.getUTCFullYear()?this.picker.find(".prev").css({visibility:"hidden"}):this.picker.find(".prev").css({visibility:"visible"}),this.endDate!==Infinity&&t>=this.endDate.getUTCFullYear()?this.picker.find(".next").css({visibility:"hidden"}):this.picker.find(".next").css({visibility:"visible"})}},mousewheel:function(e){if(e.preventDefault(),e.stopPropagation(),!this.wheelPause){this.wheelPause=!0;var t=e.originalEvent.wheelDelta,i=0<t?1:0===t?0:-1;this.wheelViewModeNavigationInverseDirection&&(i=-i),this.showMode(i),setTimeout(S.proxy(function(){this.wheelPause=!1},this),this.wheelViewModeNavigationDelay)}},click:function(e){e.stopPropagation(),e.preventDefault();var t=S(e.target).closest("span, td, th, legend");if(1==t.length){if(t.is(".disabled"))return void this.element.trigger({type:"outOfRange",date:this.viewDate,startDate:this.startDate,endDate:this.endDate});switch(t[0].nodeName.toLowerCase()){case"th":switch(t[0].className){case"switch":this.showMode(1);break;case"prev":case"next":var i=H.modes[this.viewMode].navStep*("prev"==t[0].className?-1:1);switch(this.viewMode){case 0:this.viewDate=this.moveHour(this.viewDate,i);break;case 1:this.viewDate=this.moveDate(this.viewDate,i);break;case 2:this.viewDate=this.moveMonth(this.viewDate,i);break;case 3:case 4:this.viewDate=this.moveYear(this.viewDate,i)}this.fill();break;case"today":var s=new Date;s=I(s.getFullYear(),s.getMonth(),s.getDate(),s.getHours(),s.getMinutes(),s.getSeconds(),0),this.viewMode=this.startViewMode,this.showMode(0),this._setDate(s),this.fill(),this.autoclose&&this.hide()}break;case"span":if(!t.is(".disabled")){var a=this.viewDate.getUTCFullYear(),n=this.viewDate.getUTCMonth(),h=this.viewDate.getUTCDate(),o=this.viewDate.getUTCHours(),r=this.viewDate.getUTCMinutes(),d=this.viewDate.getUTCSeconds();if(t.is(".month")?(this.viewDate.setUTCDate(1),n=t.parent().find("span").index(t),h=this.viewDate.getUTCDate(),this.viewDate.setUTCMonth(n),this.element.trigger({type:"changeMonth",date:this.viewDate}),3<=this.viewSelect&&this._setDate(I(a,n,h,o,r,d,0))):t.is(".year")?(this.viewDate.setUTCDate(1),a=parseInt(t.text(),10)||0,this.viewDate.setUTCFullYear(a),this.element.trigger({type:"changeYear",date:this.viewDate}),4<=this.viewSelect&&this._setDate(I(a,n,h,o,r,d,0))):t.is(".hour")?(o=parseInt(t.text(),10)||0,(t.hasClass("hour_am")||t.hasClass("hour_pm"))&&(12==o&&t.hasClass("hour_am")?o=0:12!=o&&t.hasClass("hour_pm")&&(o+=12)),this.viewDate.setUTCHours(o),this.element.trigger({type:"changeHour",date:this.viewDate}),1<=this.viewSelect&&this._setDate(I(a,n,h,o,r,d,0))):t.is(".minute")&&(r=parseInt(t.text().substr(t.text().indexOf(":")+1),10)||0,this.viewDate.setUTCMinutes(r),this.element.trigger({type:"changeMinute",date:this.viewDate}),0<=this.viewSelect&&this._setDate(I(a,n,h,o,r,d,0))),0!=this.viewMode){var l=this.viewMode;this.showMode(-1),this.fill(),l==this.viewMode&&this.autoclose&&this.hide()}else this.fill(),this.autoclose&&this.hide()}break;case"td":if(t.is(".day")&&!t.is(".disabled")){h=parseInt(t.text(),10)||1,a=this.viewDate.getUTCFullYear(),n=this.viewDate.getUTCMonth(),o=this.viewDate.getUTCHours(),r=this.viewDate.getUTCMinutes(),d=this.viewDate.getUTCSeconds();t.is(".old")?0===n?(n=11,a-=1):n-=1:t.is(".new")&&(11==n?(n=0,a+=1):n+=1),this.viewDate.setUTCFullYear(a),this.viewDate.setUTCMonth(n),this.viewDate.setUTCDate(h),this.element.trigger({type:"changeDay",date:this.viewDate}),2<=this.viewSelect&&this._setDate(I(a,n,h,o,r,d,0))}l=this.viewMode;this.showMode(-1),this.fill(),l==this.viewMode&&this.autoclose&&this.hide()}}},_setDate:function(e,t){var i;t&&"date"!=t||(this.date=e),t&&"view"!=t||(this.viewDate=e),this.fill(),this.setValue(),this.isInput?i=this.element:this.component&&(i=this.element.find("input")),i&&(i.change(),this.autoclose),this.element.trigger({type:"changeDate",date:this.date})},moveMinute:function(e,t){if(!t)return e;var i=new Date(e.valueOf());return i.setUTCMinutes(i.getUTCMinutes()+t*this.minuteStep),i},moveHour:function(e,t){if(!t)return e;var i=new Date(e.valueOf());return i.setUTCHours(i.getUTCHours()+t),i},moveDate:function(e,t){if(!t)return e;var i=new Date(e.valueOf());return i.setUTCDate(i.getUTCDate()+t),i},moveMonth:function(e,t){if(!t)return e;var i,s,a=new Date(e.valueOf()),n=a.getUTCDate(),h=a.getUTCMonth(),o=Math.abs(t);if(t=0<t?1:-1,1==o)s=-1==t?function(){return a.getUTCMonth()==h}:function(){return a.getUTCMonth()!=i},i=h+t,a.setUTCMonth(i),(i<0||11<i)&&(i=(i+12)%12);else{for(var r=0;r<o;r++)a=this.moveMonth(a,t);i=a.getUTCMonth(),a.setUTCDate(n),s=function(){return i!=a.getUTCMonth()}}for(;s();)a.setUTCDate(--n),a.setUTCMonth(i);return a},moveYear:function(e,t){return this.moveMonth(e,12*t)},dateWithinRange:function(e){return e>=this.startDate&&e<=this.endDate},keydown:function(e){if(this.picker.is(":not(:visible)"))27==e.keyCode&&this.show();else{var t,i,s,a,n=!1;switch(e.keyCode){case 27:this.hide(),e.preventDefault();break;case 37:case 39:if(!this.keyboardNavigation)break;t=37==e.keyCode?-1:1,viewMode=this.viewMode,e.ctrlKey?viewMode+=2:e.shiftKey&&(viewMode+=1),4==viewMode?(i=this.moveYear(this.date,t),s=this.moveYear(this.viewDate,t)):3==viewMode?(i=this.moveMonth(this.date,t),s=this.moveMonth(this.viewDate,t)):2==viewMode?(i=this.moveDate(this.date,t),s=this.moveDate(this.viewDate,t)):1==viewMode?(i=this.moveHour(this.date,t),s=this.moveHour(this.viewDate,t)):0==viewMode&&(i=this.moveMinute(this.date,t),s=this.moveMinute(this.viewDate,t)),this.dateWithinRange(i)&&(this.date=i,this.viewDate=s,this.setValue(),this.update(),e.preventDefault(),n=!0);break;case 38:case 40:if(!this.keyboardNavigation)break;t=38==e.keyCode?-1:1,viewMode=this.viewMode,e.ctrlKey?viewMode+=2:e.shiftKey&&(viewMode+=1),4==viewMode?(i=this.moveYear(this.date,t),s=this.moveYear(this.viewDate,t)):3==viewMode?(i=this.moveMonth(this.date,t),s=this.moveMonth(this.viewDate,t)):2==viewMode?(i=this.moveDate(this.date,7*t),s=this.moveDate(this.viewDate,7*t)):1==viewMode?this.showMeridian?(i=this.moveHour(this.date,6*t),s=this.moveHour(this.viewDate,6*t)):(i=this.moveHour(this.date,4*t),s=this.moveHour(this.viewDate,4*t)):0==viewMode&&(i=this.moveMinute(this.date,4*t),s=this.moveMinute(this.viewDate,4*t)),this.dateWithinRange(i)&&(this.date=i,this.viewDate=s,this.setValue(),this.update(),e.preventDefault(),n=!0);break;case 13:if(0!=this.viewMode){var h=this.viewMode;this.showMode(-1),this.fill(),h==this.viewMode&&this.autoclose&&this.hide()}else this.fill(),this.autoclose&&this.hide();e.preventDefault();break;case 9:this.hide()}if(n)this.isInput?a=this.element:this.component&&(a=this.element.find("input")),a&&a.change(),this.element.trigger({type:"changeDate",date:this.date})}},showMode:function(e){if(e){var t=Math.max(0,Math.min(H.modes.length-1,this.viewMode+e));t>=this.minView&&t<=this.maxView&&(this.element.trigger({type:"changeMode",date:this.viewDate,oldViewMode:this.viewMode,newViewMode:t}),this.viewMode=t)}this.picker.find(">div").hide().filter(".datetimepicker-"+H.modes[this.viewMode].clsName).css("display","block"),this.updateNavArrows()},reset:function(){this._setDate(null,"date")}},S.fn.datetimepicker=function(s){var a=Array.apply(null,arguments);return a.shift(),this.each(function(){var e=S(this),t=e.data("datetimepicker"),i="object"==typeof s&&s;t||e.data("datetimepicker",t=new g(this,S.extend({},S.fn.datetimepicker.defaults,i))),"string"==typeof s&&"function"==typeof t[s]&&t[s].apply(t,a)})},S.fn.datetimepicker.defaults={},S.fn.datetimepicker.Constructor=g;var x=S.fn.datetimepicker.dates={en:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun"],daysMin:["Su","Mo","Tu","We","Th","Fr","Sa","Su"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],meridiem:["am","pm"],suffix:["st","nd","rd","th"],today:"Today"}},H={modes:[{clsName:"minutes",navFnc:"Hours",navStep:1},{clsName:"hours",navFnc:"Date",navStep:1},{clsName:"days",navFnc:"Month",navStep:1},{clsName:"months",navFnc:"FullYear",navStep:1},{clsName:"years",navFnc:"FullYear",navStep:10}],isLeapYear:function(e){return e%4==0&&e%100!=0||e%400==0},getDaysInMonth:function(e,t){return[31,H.isLeapYear(e)?29:28,31,30,31,30,31,31,30,31,30,31][t]},getDefaultFormat:function(e,t){if("standard"==e)return"input"==t?"yyyy-mm-dd hh:ii":"yyyy-mm-dd hh:ii:ss";if("php"==e)return"input"==t?"Y-m-d H:i":"Y-m-d H:i:s";throw new Error("Invalid format type.")},validParts:function(e){if("standard"==e)return/hh?|HH?|p|P|ii?|ss?|dd?|DD?|mm?|MM?|yy(?:yy)?/g;if("php"==e)return/[dDjlNwzFmMnStyYaABgGhHis]/g;throw new Error("Invalid format type.")},nonpunctuation:/[^ -\/:-@\[-`{-~\t\n\rTZ]+/g,parseFormat:function(e,t){var i=e.replace(this.validParts(t),"\0").split("\0"),s=e.match(this.validParts(t));if(!i||!i.length||!s||0==s.length)throw new Error("Invalid date format.");return{separators:i,parts:s}},parseDate:function(e,t,i,s){if(e instanceof Date){var a=new Date(e.valueOf()-6e4*e.getTimezoneOffset());return a.setMilliseconds(0),a}if(/^\d{4}\-\d{1,2}\-\d{1,2}$/.test(e)&&(t=this.parseFormat("yyyy-mm-dd",s)),/^\d{4}\-\d{1,2}\-\d{1,2}[T ]\d{1,2}\:\d{1,2}$/.test(e)&&(t=this.parseFormat("yyyy-mm-dd hh:ii",s)),/^\d{4}\-\d{1,2}\-\d{1,2}[T ]\d{1,2}\:\d{1,2}\:\d{1,2}[Z]{0,1}$/.test(e)&&(t=this.parseFormat("yyyy-mm-dd hh:ii:ss",s)),/^[-+]\d+[dmwy]([\s,]+[-+]\d+[dmwy])*$/.test(e)){var n,h=/([-+]\d+)([dmwy])/,o=e.match(/([-+]\d+)([dmwy])/g);e=new Date;for(var r=0;r<o.length;r++)switch(c=h.exec(o[r]),n=parseInt(c[1]),c[2]){case"d":e.setUTCDate(e.getUTCDate()+n);break;case"m":e=g.prototype.moveMonth.call(g.prototype,e,n);break;case"w":e.setUTCDate(e.getUTCDate()+7*n);break;case"y":e=g.prototype.moveYear.call(g.prototype,e,n)}return I(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds(),0)}o=e&&e.match(this.nonpunctuation)||[],e=new Date(0,0,0,0,0,0,0);var d,l,c,u={},m=["hh","h","ii","i","ss","s","yyyy","yy","M","MM","m","mm","D","DD","d","dd","H","HH","p","P"],p={hh:function(e,t){return e.setUTCHours(t)},h:function(e,t){return e.setUTCHours(t)},HH:function(e,t){return e.setUTCHours(12==t?0:t)},H:function(e,t){return e.setUTCHours(12==t?0:t)},ii:function(e,t){return e.setUTCMinutes(t)},i:function(e,t){return e.setUTCMinutes(t)},ss:function(e,t){return e.setUTCSeconds(t)},s:function(e,t){return e.setUTCSeconds(t)},yyyy:function(e,t){return e.setUTCFullYear(t)},yy:function(e,t){return e.setUTCFullYear(2e3+t)},m:function(e,t){for(t-=1;t<0;)t+=12;for(t%=12,e.setUTCMonth(t);e.getUTCMonth()!=t;)e.setUTCDate(e.getUTCDate()-1);return e},d:function(e,t){return e.setUTCDate(t)},p:function(e,t){return e.setUTCHours(1==t?e.getUTCHours()+12:e.getUTCHours())}};if(p.M=p.MM=p.mm=p.m,p.dd=p.d,p.P=p.p,e=I(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds()),o.length==t.parts.length){r=0;for(var v=t.parts.length;r<v;r++){if(d=parseInt(o[r],10),c=t.parts[r],isNaN(d))switch(c){case"MM":l=S(x[i].months).filter(function(){var e=this.slice(0,o[r].length);return e==o[r].slice(0,e.length)}),d=S.inArray(l[0],x[i].months)+1;break;case"M":l=S(x[i].monthsShort).filter(function(){var e=this.slice(0,o[r].length);return e==o[r].slice(0,e.length)}),d=S.inArray(l[0],x[i].monthsShort)+1;break;case"p":case"P":d=S.inArray(o[r].toLowerCase(),x[i].meridiem)}u[c]=d}var f;for(r=0;r<m.length;r++)(f=m[r])in u&&!isNaN(u[f])&&p[f](e,u[f])}return e},formatDate:function(e,t,i,s){if(null==e)return"";var a;if("standard"==s)(a={yy:e.getUTCFullYear().toString().substring(2),yyyy:e.getUTCFullYear(),m:e.getUTCMonth()+1,M:x[i].monthsShort[e.getUTCMonth()],MM:x[i].months[e.getUTCMonth()],d:e.getUTCDate(),D:x[i].daysShort[e.getUTCDay()],DD:x[i].days[e.getUTCDay()],p:2==x[i].meridiem.length?x[i].meridiem[e.getUTCHours()<12?0:1]:"",h:e.getUTCHours(),i:e.getUTCMinutes(),s:e.getUTCSeconds()}).H=a.h%12==0?12:a.h%12,a.HH=(a.H<10?"0":"")+a.H,a.P=a.p.toUpperCase(),a.hh=(a.h<10?"0":"")+a.h,a.ii=(a.i<10?"0":"")+a.i,a.ss=(a.s<10?"0":"")+a.s,a.dd=(a.d<10?"0":"")+a.d,a.mm=(a.m<10?"0":"")+a.m;else{if("php"!=s)throw new Error("Invalid format type.");(a={y:e.getUTCFullYear().toString().substring(2),Y:e.getUTCFullYear(),F:x[i].months[e.getUTCMonth()],M:x[i].monthsShort[e.getUTCMonth()],n:e.getUTCMonth()+1,t:H.getDaysInMonth(e.getUTCFullYear(),e.getUTCMonth()),j:e.getUTCDate(),l:x[i].days[e.getUTCDay()],D:x[i].daysShort[e.getUTCDay()],w:e.getUTCDay(),N:0==e.getUTCDay()?7:e.getUTCDay(),S:e.getUTCDate()%10<=x[i].suffix.length?x[i].suffix[e.getUTCDate()%10-1]:"",a:2==x[i].meridiem.length?x[i].meridiem[e.getUTCHours()<12?0:1]:"",g:e.getUTCHours()%12==0?12:e.getUTCHours()%12,G:e.getUTCHours(),i:e.getUTCMinutes(),s:e.getUTCSeconds()}).m=(a.n<10?"0":"")+a.n,a.d=(a.j<10?"0":"")+a.j,a.A=a.a.toString().toUpperCase(),a.h=(a.g<10?"0":"")+a.g,a.H=(a.G<10?"0":"")+a.G,a.i=(a.i<10?"0":"")+a.i,a.s=(a.s<10?"0":"")+a.s}e=[];for(var n=S.extend([],t.separators),h=0,o=t.parts.length;h<o;h++)n.length&&e.push(n.shift()),e.push(a[t.parts[h]]);return e.join("")},convertViewMode:function(e){switch(e){case 4:case"decade":e=4;break;case 3:case"year":e=3;break;case 2:case"month":e=2;break;case 1:case"day":e=1;break;case 0:case"hour":e=0}return e},headTemplate:'<thead><tr><th class="prev"><i class="fa fa-angle-left"/></th><th colspan="5" class="switch"></th><th class="next"><i class="fa fa-angle-right"/></th></tr></thead>',contTemplate:'<tbody><tr><td colspan="7"></td></tr></tbody>',footTemplate:'<tfoot><tr><th colspan="7" class="today"></th></tr></tfoot>'};H.template='<div class="datetimepicker"><div class="datetimepicker-minutes"><table class=" table-condensed">'+H.headTemplate+H.contTemplate+H.footTemplate+'</table></div><div class="datetimepicker-hours"><table class=" table-condensed">'+H.headTemplate+H.contTemplate+H.footTemplate+'</table></div><div class="datetimepicker-days"><table class=" table-condensed">'+H.headTemplate+"<tbody></tbody>"+H.footTemplate+'</table></div><div class="datetimepicker-months"><table class="table-condensed">'+H.headTemplate+H.contTemplate+H.footTemplate+'</table></div><div class="datetimepicker-years"><table class="table-condensed">'+H.headTemplate+H.contTemplate+H.footTemplate+"</table></div></div>",S.fn.datetimepicker.DPGlobal=H,S.fn.datetimepicker.noConflict=function(){return S.fn.datetimepicker=old,this},S(document).on("focus.datetimepicker.data-api click.datetimepicker.data-api",'[data-provide="datetimepicker"]',function(e){var t=S(this);t.data("datetimepicker")||(e.preventDefault(),t.datetimepicker("show"))}),S(function(){S('[data-provide="datetimepicker-inline"]').datetimepicker()})}(window.jQuery);