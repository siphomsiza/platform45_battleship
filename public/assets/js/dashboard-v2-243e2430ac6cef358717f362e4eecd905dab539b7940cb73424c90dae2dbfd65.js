var getMonthName=function(e){var t=[];return t[0]="January",t[1]="February",t[2]="March",t[3]="April",t[4]="May",t[5]="Jun",t[6]="July",t[7]="August",t[8]="September",t[9]="October",t[10]="November",t[11]="December",t[e]},getDate=function(e){var t=new Date(e),r=t.getDate(),o=t.getMonth()+1;return r<10&&(r="0"+r),o<10&&(o="0"+o),t=t.getFullYear()+"-"+o+"-"+r},handleVisitorsLineChart=function(){var e="#0D888B",t="#00ACAC",r="#3273B1",o="#348FE2",i="rgba(0,0,0,0.6)",a="rgba(255,255,255,0.4)";Morris.Line({element:"visitors-line-chart",data:[{x:"2014-02-01",y:60,z:30},{x:"2014-03-01",y:70,z:40},{x:"2014-04-01",y:40,z:10},{x:"2014-05-01",y:100,z:70},{x:"2014-06-01",y:40,z:10},{x:"2014-07-01",y:80,z:50},{x:"2014-08-01",y:70,z:40}],xkey:"x",ykeys:["y","z"],xLabelFormat:function(e){return(e=getMonthName(e.getMonth())).toString()},labels:["Page Views","Unique Visitors"],lineColors:[e,r],pointFillColors:[t,o],lineWidth:"2px",pointStrokeColors:[i,i],resize:!0,gridTextFamily:"Open Sans",gridTextColor:a,gridTextWeight:"normal",gridTextSize:"11px",gridLineColor:"rgba(0,0,0,0.5)",hideHover:"auto"})},handleVisitorsDonutChart=function(){var e="#00acac",t="#348fe2";Morris.Donut({element:"visitors-donut-chart",data:[{label:"New Visitors",value:900},{label:"Return Visitors",value:1200}],colors:[e,t],labelFamily:"Open Sans",labelColor:"rgba(255,255,255,0.4)",labelTextSize:"12px",backgroundColor:"#242a30"})},handleVisitorsVectorMap=function(){0!==$("#visitors-map").length&&(map=new jvm.WorldMap({map:"world_merc_en",scaleColors:["#e74c3c","#0071a4"],container:$("#visitors-map"),normalizeFunction:"linear",hoverOpacity:.5,hoverColor:!1,markerStyle:{initial:{fill:"#4cabc7",stroke:"transparent",r:3}},regions:[{attribute:"fill"}],regionStyle:{initial:{fill:"rgb(97,109,125)","fill-opacity":1,stroke:"none","stroke-width":.4,"stroke-opacity":1},hover:{"fill-opacity":.8},selected:{fill:"yellow"},selectedHover:{}},series:{regions:[{values:{IN:"#00acac",US:"#00acac",KR:"#00acac"}}]},focusOn:{x:.5,y:.5,scale:2},backgroundColor:"#2d353c"}))},handleScheduleCalendar=function(){var e=["January","February","March","April","May","June","July","August","September","October","November","December"],t=["S","M","T","W","T","F","S"],r=new Date,o=r.getMonth()+1,i=r.getFullYear(),a=[["2/"+o+"/"+i,"Popover Title","#","#00acac","Some contents here"],["5/"+o+"/"+i,"Tooltip with link","http://www.seantheme.com/color-admin-v1.3","#2d353c"],["18/"+o+"/"+i,"Popover with HTML Content","#","#2d353c",'Some contents here <div class="text-right"><a href="http://www.google.com">view more >>></a></div>'],["28/"+o+"/"+i,"Color Admin V1.3 Launched","http://www.seantheme.com/color-admin-v1.3","#2d353c"]],n=$("#schedule-calendar");$(n).calendar({months:e,days:t,events:a,popover_options:{placement:"top",html:!0}}),$(n).find("td.event").each(function(){var e=$(this).css("background-color");$(this).removeAttr("style"),$(this).find("a").css("background-color",e)}),$(n).find(".icon-arrow-left, .icon-arrow-right").parent().on("click",function(){$(n).find("td.event").each(function(){var e=$(this).css("background-color");$(this).removeAttr("style"),$(this).find("a").css("background-color",e)})})},handleDashboardGritterNotification=function(){$(window).load(function(){setTimeout(function(){$.gritter.add({title:"Welcome back, Admin!",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus lacus ut lectus rutrum placerat.",image:"assets/img/user-14.jpg",sticky:!0,time:"",class_name:"my-sticky-class"})},1e3)})},DashboardV2=function(){"use strict";return{init:function(){$.getScript("assets/plugins/morris/raphael.min.js").done(function(){$.getScript("assets/plugins/morris/morris.js").done(function(){handleVisitorsLineChart(),handleVisitorsDonutChart()})}),$.getScript("assets/plugins/jquery-jvectormap/jquery-jvectormap-1.2.2.min.js").done(function(){$.getScript("assets/plugins/jquery-jvectormap/jquery-jvectormap-world-merc-en.js").done(function(){handleVisitorsVectorMap()})}),$.getScript("assets/plugins/bootstrap-calendar/js/bootstrap_calendar.min.js").done(function(){handleScheduleCalendar()}),$.getScript("assets/plugins/gritter/js/jquery.gritter.js").done(function(){handleDashboardGritterNotification()})}}}();