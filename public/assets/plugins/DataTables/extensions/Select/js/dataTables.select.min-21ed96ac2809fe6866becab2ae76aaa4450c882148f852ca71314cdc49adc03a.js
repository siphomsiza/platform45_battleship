!function(e,u,f){e=function(r,d){function c(e){var t=e.settings()[0]._select.selector;r(e.table().body()).off("mousedown.dtSelect",t).off("mouseup.dtSelect",t).off("click.dtSelect",t),r("body").off("click.dtSelect")}function n(c){var n=r(c.table().body()),t=c.settings()[0],l=t._select.selector;n.on("mousedown.dtSelect",l,function(e){e.shiftKey&&n.css("-moz-user-select","none").one("selectstart.dtSelect",l,function(){return!1})}).on("mouseup.dtSelect",l,function(){n.css("-moz-user-select","")}).on("click.dtSelect",l,function(e){var t=c.select.items(),l=c.cell(this).index(),s=c.settings()[0];r(e.target).closest("tbody")[0]==n[0]&&c.cell(e.target).any()&&("row"===t?(t=l.row,a(e,c,s,"row",t)):"column"===t?(t=c.cell(e.target).index().column,a(e,c,s,"column",t)):"cell"===t&&(t=c.cell(e.target).index(),a(e,c,s,"cell",t)),s._select_lastCell=l)}),r("body").on("click.dtSelect",function(e){t._select.blurable&&!r(e.target).parents().filter(c.table().container()).length&&(r(e.target).parents("div.DTE").length||s(t,!0))})}function o(e,t,l,s){s&&!e.flatten().length||(l.unshift(e),r(e.table().node()).triggerHandler(t+".dt",l))}function i(l){var e=l.settings()[0];if(e._select.info){var s=r('<span class="select-info"/>'),t=function(e,t){s.append(r('<span class="select-item"/>').append(l.i18n("select."+e+"s",{_:"%d "+e+"s selected",0:"",1:"1 "+e+" selected"},t)))};t("row",l.rows({selected:!0}).flatten().length),t("column",l.columns({selected:!0}).flatten().length),t("cell",l.cells({selected:!0}).flatten().length),r.each(e.aanFeatures.i,function(e,t){var l=(t=r(t)).children("span.select-info");l.length&&l.remove(),""!==s.text()&&t.append(s)})}}function s(e,t){if(t||"single"===e._select.style){var l=new d.Api(e);l.rows({selected:!0}).deselect(),l.columns({selected:!0}).deselect(),l.cells({selected:!0}).deselect()}}function a(e,n,t,l,s){var c=n.select.style(),o=n[l](s,{selected:!0}).any();"os"===c?e.ctrlKey||e.metaKey?n[l](s).select(!o):e.shiftKey?"cell"===l?(l=t._select_lastCell||null,o=function(t,l){if(l<t){var e=l;l=t,t=e}var s=!1;return n.columns(":visible").indexes().filter(function(e){return e===t&&(s=!0),e===l?!(s=!1):s})},e=function(t,l){var e=n.rows({search:"applied"}).indexes();if(e.indexOf(t)>e.indexOf(l)){var s=l;l=t,t=s}var c=!1;return e.filter(function(e){return e===t&&(c=!0),e===l?!(c=!1):c})},n.cells({selected:!0}).any()||l?(o=o(l.column,s.column),l=e(l.row,s.row)):(o=o(0,s.column),l=e(0,s.row)),l=n.cells(l,o).flatten(),n.cells(s,{selected:!0}).any()?n.cells(l).deselect():n.cells(l).select()):(e=t._select_lastCell?t._select_lastCell[l]:null,o=n[l+"s"]({search:"applied"}).indexes(),e=r.inArray(e,o),t=r.inArray(s,o),n[l+"s"]({selected:!0}).any()||-1!==e?(t<e&&(c=t,t=e,e=c),o.splice(t+1,o.length),o.splice(0,e)):o.splice(r.inArray(s,o)+1,o.length),n[l](s,{selected:!0}).any()?(o.splice(r.inArray(s,o),1),n[l+"s"](o).deselect()):n[l+"s"](o).select()):(e=n[l+"s"]({selected:!0}),o&&1===e.flatten().length?n[l](s).deselect():(e.deselect(),n[l](s).select())):n[l](s).select(!o)}function l(t,l){return function(e){return e.i18n("buttons."+t,l)}}d.select={},d.select.version="1.0.0",r.each([{type:"row",prop:"aoData"},{type:"column",prop:"aoColumns"}],function(e,i){d.ext.selector[i.type].push(function(e,t,l){var s,c=[];if((t=t.selected)===f)return l;for(var n=0,o=l.length;n<o;n++)s=e[i.prop][l[n]],(!0===t&&!0===s._select_selected||!1===t&&!s._select_selected)&&c.push(l[n]);return c})}),d.ext.selector.cell.push(function(e,t,l){var s,c=[];if((t=t.selected)===f)return l;for(var n=0,o=l.length;n<o;n++)s=e.aoData[l[n].row],(!0===t&&s._selected_cells&&!0===s._selected_cells[l[n].column]||!1===t&&(!s._selected_cells||!s._selected_cells[l[n].column]))&&c.push(l[n]);return c});var e=d.Api.register,t=d.Api.registerPlural;e("select()",function(){}),e("select.blurable()",function(t){return t===f?this.context[0]._select.blurable:this.iterator("table",function(e){e._select.blurable=t})}),e("select.info()",function(t){return i===f?this.context[0]._select.info:this.iterator("table",function(e){e._select.info=t})}),e("select.items()",function(t){return t===f?this.context[0]._select.items:this.iterator("table",function(e){e._select.items=t,o(new d.Api(e),"selectItems",[t])})}),e("select.style()",function(t){return t===f?this.context[0]._select.style:this.iterator("table",function(s){if(s._select.style=t,!s._select_init){var l=new d.Api(s);s.aoRowCreatedCallback.push({fn:function(e,t,l){for((t=s.aoData[l])._select_selected&&r(e).addClass("selected"),e=0,l=s.aoColumns.length;e<l;e++)(s.aoColumns[e]._select_selected||t._selected_cells&&t._selected_cells[e])&&r(t.anCells[e]).addClass("selected")},sName:"select-deferRender"}),l.on("preXhr.dt.dtSelect",function(){var e=l.rows({selected:!0}).ids(!0).filter(function(e){return e!==f}),t=l.cells({selected:!0}).eq(0).map(function(e){var t=l.row(e.row).id(!0);return t?{row:t,column:e.column}:f}).filter(function(e){return e!==f});l.one("draw.dt.dtSelect",function(){l.rows(e).select(),t.any()&&t.each(function(e){l.cells(e.row,e.column).select()})})}),l.on("draw.dtSelect.dt select.dtSelect.dt deselect.dtSelect.dt",function(){i(l)}),l.on("destroy.dtSelect",function(){c(l),l.off(".dtSelect")})}var e=new d.Api(s);c(e),"api"!==t&&n(e),o(new d.Api(s),"selectStyle",[t])})}),e("select.selector()",function(t){return t===f?this.context[0]._select.selector:this.iterator("table",function(e){c(new d.Api(e)),e._select.selector=t,"api"!==e._select.style&&n(new d.Api(e))})}),t("rows().select()","row().select()",function(e){var l=this;return!1===e?this.deselect():(this.iterator("row",function(e,t){s(e),e.aoData[t]._select_selected=!0,r(e.aoData[t].nTr).addClass("selected")}),this.iterator("table",function(e,t){o(l,"select",["row",l[t]],!0)}),this)}),t("columns().select()","column().select()",function(e){var l=this;return!1===e?this.deselect():(this.iterator("column",function(e,t){s(e),e.aoColumns[t]._select_selected=!0;var l=new d.Api(e).column(t);r(l.header()).addClass("selected"),r(l.footer()).addClass("selected"),l.nodes().to$().addClass("selected")}),this.iterator("table",function(e,t){o(l,"select",["column",l[t]],!0)}),this)}),t("cells().select()","cell().select()",function(e){var l=this;return!1===e?this.deselect():(this.iterator("cell",function(e,t,l){s(e),(e=e.aoData[t])._selected_cells===f&&(e._selected_cells=[]),e._selected_cells[l]=!0,e.anCells&&r(e.anCells[l]).addClass("selected")}),this.iterator("table",function(e,t){o(l,"select",["cell",l[t]],!0)}),this)}),t("rows().deselect()","row().deselect()",function(){var l=this;return this.iterator("row",function(e,t){e.aoData[t]._select_selected=!1,r(e.aoData[t].nTr).removeClass("selected")}),this.iterator("table",function(e,t){o(l,"deselect",["row",l[t]],!0)}),this}),t("columns().deselect()","column().deselect()",function(){var l=this;return this.iterator("column",function(s,e){s.aoColumns[e]._select_selected=!1;var t=new d.Api(s),l=t.column(e);r(l.header()).removeClass("selected"),r(l.footer()).removeClass("selected"),t.cells(null,e).indexes().each(function(e){var t=s.aoData[e.row],l=t._selected_cells;t.anCells&&(!l||!l[e.column])&&r(t.anCells[e.column]).removeClass("selected")})}),this.iterator("table",function(e,t){o(l,"deselect",["column",l[t]],!0)}),this}),t("cells().deselect()","cell().deselect()",function(){var l=this;return this.iterator("cell",function(e,t,l){(t=e.aoData[t])._selected_cells[l]=!1,t.anCells&&!e.aoColumns[l]._select_selected&&r(t.anCells[l]).removeClass("selected")}),this.iterator("table",function(e,t){o(l,"deselect",["cell",l[t]],!0)}),this}),r.extend(d.ext.buttons,{selected:{text:l("selected","Selected"),className:"buttons-selected",init:function(e){var t=this;e.on("select.dt.DT deselect.dt.DT",function(){var e=t.rows({selected:!0}).any()||t.columns({selected:!0}).any()||t.cells({selected:!0}).any();t.enable(e)}),this.disable()}},selectedSingle:{text:l("selectedSingle","Selected single"),className:"buttons-selected-single",init:function(t){var l=this;t.on("select.dt.DT deselect.dt.DT",function(){var e=t.rows({selected:!0}).flatten().length+t.columns({selected:!0}).flatten().length+t.cells({selected:!0}).flatten().length;l.enable(1===e)}),this.disable()}},selectAll:{text:l("selectAll","Select all"),className:"buttons-select-all",action:function(){this[this.select.items()+"s"]().select()}},selectNone:{text:l("selectNone","Deselect all"),className:"buttons-select-none",action:function(){s(this.settings()[0],!0)}}}),r.each(["Row","Column","Cell"],function(e,t){var c=t.toLowerCase();d.ext.buttons["select"+t+"s"]={text:l("select"+t+"s","Select "+c+"s"),className:"buttons-select-"+c+"s",action:function(){this.select.items(c)},init:function(e){var s=this;e.on("selectItems.dt.DT",function(e,t,l){s.active(l===c)})}}}),r(u).on("init.dt.dtSelect",function(e,t){if("dt"===e.namespace){var l=t.oInit.select||d.defaults.select,s=new d.Api(t),c="row",n="api",o=!1,i=!0,a="td, th";t._select={},!0===l?n="os":"string"==typeof l?n=l:r.isPlainObject(l)&&(l.blurable!==f&&(o=l.blurable),l.info!==f&&(i=l.info),l.items!==f&&(c=l.items),l.style!==f&&(n=l.style),l.selector!==f)&&(a=l.selector),s.select.selector(a),s.select.items(c),s.select.style(n),s.select.blurable(o),s.select.info(i),r(s.table().node()).hasClass("selectable")&&s.select.style("os")}})},"function"==typeof define&&define.amd?define(["jquery","datatables"],e):"object"==typeof exports?e(require("jquery"),require("datatables")):jQuery&&!jQuery.fn.dataTable.select&&e(jQuery,jQuery.fn.dataTable)}(window,document);