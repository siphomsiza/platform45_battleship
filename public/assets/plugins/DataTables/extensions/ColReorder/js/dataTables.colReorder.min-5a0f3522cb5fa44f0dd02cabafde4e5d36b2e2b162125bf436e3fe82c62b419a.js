!function(t,e,o){function s(t){for(var e=[],o=0,s=t.length;s>o;o++)e[t[o]]=o;return e}function n(t,e,o){e=t.splice(e,1)[0],t.splice(o,0,e)}function i(t,e,o){for(var s=[],n=0,i=t.childNodes.length;i>n;n++)1==t.childNodes[n].nodeType&&s.push(t.childNodes[n]);e=s[e],null!==o?t.insertBefore(e,s[o]):t.appendChild(e)}t=function(t,r){t.fn.dataTableExt.oApi.fnColReorder=function(e,o,r){var a,l,d,f,h,u,c=e.aoColumns.length;if(h=function(t,e,o){if(t[e]&&"function"!=typeof t[e]){var s=t[e].split("."),n=s.shift();isNaN(1*n)||(t[e]=o[1*n]+"."+s.join("."))}},o!=r)if(0>o||o>=c)this.oApi._fnLog(e,1,"ColReorder 'from' index is out of bounds: "+o);else if(0>r||r>=c)this.oApi._fnLog(e,1,"ColReorder 'to' index is out of bounds: "+r);else{for(d=[],a=0,l=c;l>a;a++)d[a]=a;n(d,o,r);var m=s(d);for(a=0,l=e.aaSorting.length;l>a;a++)e.aaSorting[a][0]=m[e.aaSorting[a][0]];if(null!==e.aaSortingFixed)for(a=0,l=e.aaSortingFixed.length;l>a;a++)e.aaSortingFixed[a][0]=m[e.aaSortingFixed[a][0]];for(a=0,l=c;l>a;a++){for(u=e.aoColumns[a],d=0,f=u.aDataSort.length;f>d;d++)u.aDataSort[d]=m[u.aDataSort[d]];u.idx=m[u.idx]}for(t.each(e.aLastSort,function(t,o){e.aLastSort[t].src=m[o.src]}),a=0,l=c;l>a;a++)u=e.aoColumns[a],"number"==typeof u.mData?(u.mData=m[u.mData],e.oApi._fnColumnOptions(e,a,{})):t.isPlainObject(u.mData)&&(h(u.mData,"_",m),h(u.mData,"filter",m),h(u.mData,"sort",m),h(u.mData,"type",m),e.oApi._fnColumnOptions(e,a,{}));if(e.aoColumns[o].bVisible){for(d=this.oApi._fnColumnIndexToVisible(e,o),f=null,a=o>r?r:r+1;null===f&&c>a;)f=this.oApi._fnColumnIndexToVisible(e,a),a++;for(h=e.nTHead.getElementsByTagName("tr"),a=0,l=h.length;l>a;a++)i(h[a],d,f);if(null!==e.nTFoot)for(h=e.nTFoot.getElementsByTagName("tr"),a=0,l=h.length;l>a;a++)i(h[a],d,f);for(a=0,l=e.aoData.length;l>a;a++)null!==e.aoData[a].nTr&&i(e.aoData[a].nTr,d,f)}for(n(e.aoColumns,o,r),n(e.aoPreSearchCols,o,r),a=0,l=e.aoData.length;l>a;a++)h=e.aoData[a],h.anCells&&n(h.anCells,o,r),"dom"!==h.src&&t.isArray(h._aData)&&n(h._aData,o,r);for(a=0,l=e.aoHeader.length;l>a;a++)n(e.aoHeader[a],o,r);if(null!==e.aoFooter)for(a=0,l=e.aoFooter.length;l>a;a++)n(e.aoFooter[a],o,r);for(new t.fn.dataTable.Api(e).rows().invalidate(),a=0,l=c;l>a;a++)t(e.aoColumns[a].nTh).off("click.DT"),this.oApi._fnSortAttachListener(e,e.aoColumns[a].nTh,a);t(e.oInstance).trigger("column-reorder.dt",[e,{from:o,to:r,mapping:m,iFrom:o,iTo:r,aiInvertMapping:m}])}};var a=function(e,o){var s=new t.fn.dataTable.Api(e).settings()[0];if(s._colReorder)return s._colReorder;!0===o&&(o={});var n=t.fn.dataTable.camelToHungarian;return n&&(n(a.defaults,a.defaults,!0),n(a.defaults,o||{})),this.s={dt:null,init:t.extend(!0,{},a.defaults,o),fixed:0,fixedRight:0,reorderCallback:null,mouse:{startX:-1,startY:-1,offsetX:-1,offsetY:-1,target:-1,targetIndex:-1,fromIndex:-1},aoTargets:[]},this.dom={drag:null,pointer:null},this.s.dt=s,this.s.dt._colReorder=this,this._fnConstruct(),this};return a.prototype={fnReset:function(){for(var t=[],e=0,o=this.s.dt.aoColumns.length;o>e;e++)t.push(this.s.dt.aoColumns[e]._ColReorder_iOrigCol);return this._fnOrderColumns(t),this},fnGetCurrentOrder:function(){return this.fnOrder()},fnOrder:function(t){if(t===o){for(var t=[],e=0,n=this.s.dt.aoColumns.length;n>e;e++)t.push(this.s.dt.aoColumns[e]._ColReorder_iOrigCol);return t}return this._fnOrderColumns(s(t)),this},_fnConstruct:function(){var e,o=this,n=this.s.dt.aoColumns.length,i=this.s.dt.nTable;for(this.s.init.iFixedColumns&&(this.s.fixed=this.s.init.iFixedColumns),this.s.init.iFixedColumnsLeft&&(this.s.fixed=this.s.init.iFixedColumnsLeft),this.s.fixedRight=this.s.init.iFixedColumnsRight?this.s.init.iFixedColumnsRight:0,this.s.init.fnReorderCallback&&(this.s.reorderCallback=this.s.init.fnReorderCallback),e=0;n>e;e++)e>this.s.fixed-1&&e<n-this.s.fixedRight&&this._fnMouseListener(e,this.s.dt.aoColumns[e].nTh),this.s.dt.aoColumns[e]._ColReorder_iOrigCol=e;this.s.dt.oApi._fnCallbackReg(this.s.dt,"aoStateSaveParams",function(t,e){o._fnStateSave.call(o,e)},"ColReorder_State");var r=null;if(this.s.init.aiOrder&&(r=this.s.init.aiOrder.slice()),this.s.dt.oLoadedState&&"undefined"!=typeof this.s.dt.oLoadedState.ColReorder&&this.s.dt.oLoadedState.ColReorder.length==this.s.dt.aoColumns.length&&(r=this.s.dt.oLoadedState.ColReorder),r)if(o.s.dt._bInitComplete)n=s(r),o._fnOrderColumns.call(o,n);else{var a=!1;t(i).on("draw.dt.colReorder",function(){if(!o.s.dt._bInitComplete&&!a){a=!0;var t=s(r);o._fnOrderColumns.call(o,t)}})}else this._fnSetColumnIndexes();t(i).on("destroy.dt.colReorder",function(){t(i).off("destroy.dt.colReorder draw.dt.colReorder"),t(o.s.dt.nTHead).find("*").off(".ColReorder"),t.each(o.s.dt.aoColumns,function(e,o){t(o.nTh).removeAttr("data-column-index")}),o.s.dt._colReorder=null,o.s=null})},_fnOrderColumns:function(e){if(e.length!=this.s.dt.aoColumns.length)this.s.dt.oInstance.oApi._fnLog(this.s.dt,1,"ColReorder - array reorder does not match known number of columns. Skipping.");else{for(var o=0,s=e.length;s>o;o++){var i=t.inArray(o,e);o!=i&&(n(e,i,o),this.s.dt.oInstance.fnColReorder(i,o))}(""!==this.s.dt.oScroll.sX||""!==this.s.dt.oScroll.sY)&&this.s.dt.oInstance.fnAdjustColumnSizing(!1),this.s.dt.oInstance.oApi._fnSaveState(this.s.dt),this._fnSetColumnIndexes(),null!==this.s.reorderCallback&&this.s.reorderCallback.call(this)}},_fnStateSave:function(e){var o,s,n,i=this.s.dt.aoColumns;if(e.ColReorder=[],e.aaSorting){for(o=0;o<e.aaSorting.length;o++)e.aaSorting[o][0]=i[e.aaSorting[o][0]]._ColReorder_iOrigCol;var r=t.extend(!0,[],e.aoSearchCols);for(o=0,s=i.length;s>o;o++)n=i[o]._ColReorder_iOrigCol,e.aoSearchCols[n]=r[o],e.abVisCols[n]=i[o].bVisible,e.ColReorder.push(n)}else if(e.order){for(o=0;o<e.order.length;o++)e.order[o][0]=i[e.order[o][0]]._ColReorder_iOrigCol;for(r=t.extend(!0,[],e.columns),o=0,s=i.length;s>o;o++)n=i[o]._ColReorder_iOrigCol,e.columns[n]=r[o],e.ColReorder.push(n)}},_fnMouseListener:function(e,o){var s=this;t(o).on("mousedown.ColReorder",function(t){t.preventDefault(),s._fnMouseDown.call(s,t,o)})},_fnMouseDown:function(s,n){var i=this,r=t(s.target).closest("th, td").offset(),a=parseInt(t(n).attr("data-column-index"),10);a!==o&&(this.s.mouse.startX=s.pageX,this.s.mouse.startY=s.pageY,this.s.mouse.offsetX=s.pageX-r.left,this.s.mouse.offsetY=s.pageY-r.top,this.s.mouse.target=this.s.dt.aoColumns[a].nTh,this.s.mouse.targetIndex=a,this.s.mouse.fromIndex=a,this._fnRegions(),t(e).on("mousemove.ColReorder",function(t){i._fnMouseMove.call(i,t)}).on("mouseup.ColReorder",function(t){i._fnMouseUp.call(i,t)}))},_fnMouseMove:function(t){if(null===this.dom.drag){if(5>Math.pow(Math.pow(t.pageX-this.s.mouse.startX,2)+Math.pow(t.pageY-this.s.mouse.startY,2),.5))return;this._fnCreateDragNode()}this.dom.drag.css({left:t.pageX-this.s.mouse.offsetX,top:t.pageY-this.s.mouse.offsetY});for(var e=!1,o=this.s.mouse.toIndex,s=1,n=this.s.aoTargets.length;n>s;s++)if(t.pageX<this.s.aoTargets[s-1].x+(this.s.aoTargets[s].x-this.s.aoTargets[s-1].x)/2){this.dom.pointer.css("left",this.s.aoTargets[s-1].x),this.s.mouse.toIndex=this.s.aoTargets[s-1].to,e=!0;break}e||(this.dom.pointer.css("left",this.s.aoTargets[this.s.aoTargets.length-1].x),this.s.mouse.toIndex=this.s.aoTargets[this.s.aoTargets.length-1].to),this.s.init.bRealtime&&o!==this.s.mouse.toIndex&&(this.s.dt.oInstance.fnColReorder(this.s.mouse.fromIndex,this.s.mouse.toIndex),this.s.mouse.fromIndex=this.s.mouse.toIndex,this._fnRegions())},_fnMouseUp:function(){t(e).off("mousemove.ColReorder mouseup.ColReorder"),null!==this.dom.drag&&(this.dom.drag.remove(),this.dom.pointer.remove(),this.dom.drag=null,this.dom.pointer=null,this.s.dt.oInstance.fnColReorder(this.s.mouse.fromIndex,this.s.mouse.toIndex),this._fnSetColumnIndexes(),(""!==this.s.dt.oScroll.sX||""!==this.s.dt.oScroll.sY)&&this.s.dt.oInstance.fnAdjustColumnSizing(!1),this.s.dt.oInstance.oApi._fnSaveState(this.s.dt),null!==this.s.reorderCallback&&this.s.reorderCallback.call(this))},_fnRegions:function(){var e=this.s.dt.aoColumns;this.s.aoTargets.splice(0,this.s.aoTargets.length),this.s.aoTargets.push({x:t(this.s.dt.nTable).offset().left,to:0});for(var o=0,s=0,n=e.length;n>s;s++)s!=this.s.mouse.fromIndex&&o++,e[s].bVisible&&this.s.aoTargets.push({x:t(e[s].nTh).offset().left+t(e[s].nTh).outerWidth(),to:o});0!==this.s.fixedRight&&this.s.aoTargets.splice(this.s.aoTargets.length-this.s.fixedRight),0!==this.s.fixed&&this.s.aoTargets.splice(0,this.s.fixed)},_fnCreateDragNode:function(){var e=""!==this.s.dt.oScroll.sX||""!==this.s.dt.oScroll.sY,o=this.s.dt.aoColumns[this.s.mouse.targetIndex].nTh,s=o.parentNode,n=s.parentNode,i=n.parentNode,r=t(o).clone();this.dom.drag=t(i.cloneNode(!1)).addClass("DTCR_clonedTable").append(t(n.cloneNode(!1)).append(t(s.cloneNode(!1)).append(r[0]))).css({position:"absolute",top:0,left:0,width:t(o).outerWidth(),height:t(o).outerHeight()}).appendTo("body"),this.dom.pointer=t("<div></div>").addClass("DTCR_pointer").css({position:"absolute",top:e?t("div.dataTables_scroll",this.s.dt.nTableWrapper).offset().top:t(this.s.dt.nTable).offset().top,height:e?t("div.dataTables_scroll",this.s.dt.nTableWrapper).height():t(this.s.dt.nTable).height()}).appendTo("body")},_fnSetColumnIndexes:function(){t.each(this.s.dt.aoColumns,function(e,o){t(o.nTh).attr("data-column-index",e)})}},a.defaults={aiOrder:null,bRealtime:!0,iFixedColumnsLeft:0,iFixedColumnsRight:0,fnReorderCallback:null},a.version="1.2.0",t.fn.dataTable.ColReorder=a,t.fn.DataTable.ColReorder=a,"function"==typeof t.fn.dataTable&&"function"==typeof t.fn.dataTableExt.fnVersionCheck&&t.fn.dataTableExt.fnVersionCheck("1.10.8")?t.fn.dataTableExt.aoFeatures.push({fnInit:function(t){var e=t.oInstance;return t._colReorder?e.oApi._fnLog(t,1,"ColReorder attempted to initialise twice. Ignoring second"):(e=t.oInit,new a(t,e.colReorder||e.oColReorder||{})),null},cFeature:"R",sFeature:"ColReorder"}):alert("Warning: ColReorder requires DataTables 1.10.8 or greater - www.datatables.net/download"),t(e).on("preInit.dt.colReorder",function(e,o){if("dt"===e.namespace){var s=o.oInit.colReorder,n=r.defaults.colReorder;(s||n)&&(n=t.extend({},s,n),!1!==s&&new a(o,n))}}),t.fn.dataTable.Api.register("colReorder.reset()",function(){return this.iterator("table",function(t){t._colReorder.fnReset()})}),t.fn.dataTable.Api.register("colReorder.order()",function(t){return t?this.iterator("table",function(e){e._colReorder.fnOrder(t)}):this.context.length?this.context[0]._colReorder.fnOrder():null}),a},"function"==typeof define&&define.amd?define(["jquery","datatables"],t):"object"==typeof exports?t(require("jquery"),require("datatables")):jQuery&&!jQuery.fn.dataTable.ColReorder&&t(jQuery,jQuery.fn.dataTable)}(window,document);