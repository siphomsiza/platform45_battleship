!function(e,t,l){e=function(e,s){function c(t){var l=t.settings()[0]._select.selector;e(t.table().body()).off("mousedown.dtSelect",l).off("mouseup.dtSelect",l).off("click.dtSelect",l),e("body").off("click.dtSelect")}function n(t){var l=e(t.table().body()),s=t.settings()[0],c=s._select.selector;l.on("mousedown.dtSelect",c,function(e){e.shiftKey&&l.css("-moz-user-select","none").one("selectstart.dtSelect",c,function(){return!1})}).on("mouseup.dtSelect",c,function(){l.css("-moz-user-select","")}).on("click.dtSelect",c,function(s){var c=t.select.items(),n=t.cell(this).index(),o=t.settings()[0];e(s.target).closest("tbody")[0]==l[0]&&t.cell(s.target).any()&&("row"===c?(c=n.row,r(s,t,o,"row",c)):"column"===c?(c=t.cell(s.target).index().column,r(s,t,o,"column",c)):"cell"===c&&(c=t.cell(s.target).index(),r(s,t,o,"cell",c)),o._select_lastCell=n)}),e("body").on("click.dtSelect",function(l){s._select.blurable&&!e(l.target).parents().filter(t.table().container()).length&&(e(l.target).parents("div.DTE").length||a(s,!0))})}function o(t,l,s,c){c&&!t.flatten().length||(s.unshift(t),e(t.table().node()).triggerHandler(l+".dt",s))}function i(t){var l=t.settings()[0];if(l._select.info){var s=e('<span class="select-info"/>'),c=function(l,c){s.append(e('<span class="select-item"/>').append(t.i18n("select."+l+"s",{_:"%d "+l+"s selected",0:"",1:"1 "+l+" selected"},c)))};c("row",t.rows({selected:!0}).flatten().length),c("column",t.columns({selected:!0}).flatten().length),c("cell",t.cells({selected:!0}).flatten().length),e.each(l.aanFeatures.i,function(t,l){var l=e(l),c=l.children("span.select-info");c.length&&c.remove(),""!==s.text()&&l.append(s)})}}function a(e,t){if(t||"single"===e._select.style){var l=new s.Api(e);l.rows({selected:!0}).deselect(),l.columns({selected:!0}).deselect(),l.cells({selected:!0}).deselect()}}function r(t,l,s,c,n){var o=l.select.style(),i=l[c](n,{selected:!0}).any();"os"===o?t.ctrlKey||t.metaKey?l[c](n).select(!i):t.shiftKey?"cell"===c?(c=s._select_lastCell||null,i=function(e,t){if(e>t)var s=t,t=e,e=s;var c=!1;return l.columns(":visible").indexes().filter(function(l){return l===e&&(c=!0),l===t?(c=!1,!0):c})},t=function(e,t){var s=l.rows({search:"applied"}).indexes();if(s.indexOf(e)>s.indexOf(t))var c=t,t=e,e=c;var n=!1;return s.filter(function(l){return l===e&&(n=!0),l===t?(n=!1,!0):n})},l.cells({selected:!0}).any()||c?(i=i(c.column,n.column),c=t(c.row,n.row)):(i=i(0,n.column),c=t(0,n.row)),c=l.cells(c,i).flatten(),l.cells(n,{selected:!0}).any()?l.cells(c).deselect():l.cells(c).select()):(t=s._select_lastCell?s._select_lastCell[c]:null,i=l[c+"s"]({search:"applied"}).indexes(),t=e.inArray(t,i),s=e.inArray(n,i),l[c+"s"]({selected:!0}).any()||-1!==t?(t>s&&(o=s,s=t,t=o),i.splice(s+1,i.length),i.splice(0,t)):i.splice(e.inArray(n,i)+1,i.length),l[c](n,{selected:!0}).any()?(i.splice(e.inArray(n,i),1),l[c+"s"](i).deselect()):l[c+"s"](i).select()):(t=l[c+"s"]({selected:!0}),i&&1===t.flatten().length?l[c](n).deselect():(t.deselect(),l[c](n).select())):l[c](n).select(!i)}function d(e,t){return function(l){return l.i18n("buttons."+e,t)}}s.select={},s.select.version="1.0.0",e.each([{type:"row",prop:"aoData"},{type:"column",prop:"aoColumns"}],function(e,t){s.ext.selector[t.type].push(function(e,s,c){var n,s=s.selected,o=[];if(s===l)return c;for(var i=0,a=c.length;a>i;i++)n=e[t.prop][c[i]],(!0===s&&!0===n._select_selected||!1===s&&!n._select_selected)&&o.push(c[i]);return o})}),s.ext.selector.cell.push(function(e,t,s){var c,t=t.selected,n=[];if(t===l)return s;for(var o=0,i=s.length;i>o;o++)c=e.aoData[s[o].row],(!0===t&&c._selected_cells&&!0===c._selected_cells[s[o].column]||!1===t&&(!c._selected_cells||!c._selected_cells[s[o].column]))&&n.push(s[o]);return n});var u=s.Api.register,f=s.Api.registerPlural;u("select()",function(){}),u("select.blurable()",function(e){return e===l?this.context[0]._select.blurable:this.iterator("table",function(t){t._select.blurable=e})}),u("select.info()",function(e){return i===l?this.context[0]._select.info:this.iterator("table",function(t){t._select.info=e})}),u("select.items()",function(e){return e===l?this.context[0]._select.items:this.iterator("table",function(t){t._select.items=e,o(new s.Api(t),"selectItems",[e])})}),u("select.style()",function(t){return t===l?this.context[0]._select.style:this.iterator("table",function(a){if(a._select.style=t,!a._select_init){var r=new s.Api(a);a.aoRowCreatedCallback.push({fn:function(t,l,s){for(l=a.aoData[s],l._select_selected&&e(t).addClass("selected"),t=0,s=a.aoColumns.length;s>t;t++)(a.aoColumns[t]._select_selected||l._selected_cells&&l._selected_cells[t])&&e(l.anCells[t]).addClass("selected")},sName:"select-deferRender"}),r.on("preXhr.dt.dtSelect",function(){var e=r.rows({selected:!0}).ids(!0).filter(function(e){return e!==l}),t=r.cells({selected:!0}).eq(0).map(function(e){var t=r.row(e.row).id(!0);return t?{row:t,column:e.column}:l}).filter(function(e){return e!==l});r.one("draw.dt.dtSelect",function(){r.rows(e).select(),t.any()&&t.each(function(e){r.cells(e.row,e.column).select()})})}),r.on("draw.dtSelect.dt select.dtSelect.dt deselect.dtSelect.dt",function(){i(r)}),r.on("destroy.dtSelect",function(){c(r),r.off(".dtSelect")})}var d=new s.Api(a);c(d),"api"!==t&&n(d),o(new s.Api(a),"selectStyle",[t])})}),u("select.selector()",function(e){return e===l?this.context[0]._select.selector:this.iterator("table",function(t){c(new s.Api(t)),t._select.selector=e,"api"!==t._select.style&&n(new s.Api(t))})}),f("rows().select()","row().select()",function(t){var l=this;return!1===t?this.deselect():(this.iterator("row",function(t,l){a(t),t.aoData[l]._select_selected=!0,e(t.aoData[l].nTr).addClass("selected")}),this.iterator("table",function(e,t){o(l,"select",["row",l[t]],!0)}),this)}),f("columns().select()","column().select()",function(t){var l=this;return!1===t?this.deselect():(this.iterator("column",function(t,l){a(t),t.aoColumns[l]._select_selected=!0;var c=new s.Api(t).column(l);e(c.header()).addClass("selected"),e(c.footer()).addClass("selected"),c.nodes().to$().addClass("selected")}),this.iterator("table",function(e,t){o(l,"select",["column",l[t]],!0)}),this)}),f("cells().select()","cell().select()",function(t){var s=this;return!1===t?this.deselect():(this.iterator("cell",function(t,s,c){a(t),t=t.aoData[s],t._selected_cells===l&&(t._selected_cells=[]),t._selected_cells[c]=!0,t.anCells&&e(t.anCells[c]).addClass("selected")}),this.iterator("table",function(e,t){o(s,"select",["cell",s[t]],!0)}),this)}),f("rows().deselect()","row().deselect()",function(){var t=this;return this.iterator("row",function(t,l){t.aoData[l]._select_selected=!1,e(t.aoData[l].nTr).removeClass("selected")}),this.iterator("table",function(e,l){o(t,"deselect",["row",t[l]],!0)}),this}),f("columns().deselect()","column().deselect()",function(){var t=this;return this.iterator("column",function(t,l){t.aoColumns[l]._select_selected=!1;var c=new s.Api(t),n=c.column(l);e(n.header()).removeClass("selected"),e(n.footer()).removeClass("selected"),c.cells(null,l).indexes().each(function(l){var s=t.aoData[l.row],c=s._selected_cells;s.anCells&&(!c||!c[l.column])&&e(s.anCells[l.column]).removeClass("selected")})}),this.iterator("table",function(e,l){o(t,"deselect",["column",t[l]],!0)}),this}),f("cells().deselect()","cell().deselect()",function(){var t=this;return this.iterator("cell",function(t,l,s){l=t.aoData[l],l._selected_cells[s]=!1,l.anCells&&!t.aoColumns[s]._select_selected&&e(l.anCells[s]).removeClass("selected")}),this.iterator("table",function(e,l){o(t,"deselect",["cell",t[l]],!0)}),this}),e.extend(s.ext.buttons,{selected:{text:d("selected","Selected"),className:"buttons-selected",init:function(e){var t=this;e.on("select.dt.DT deselect.dt.DT",function(){var e=t.rows({selected:!0}).any()||t.columns({selected:!0}).any()||t.cells({selected:!0}).any();t.enable(e)}),this.disable()}},selectedSingle:{text:d("selectedSingle","Selected single"),className:"buttons-selected-single",init:function(e){var t=this;e.on("select.dt.DT deselect.dt.DT",function(){var l=e.rows({selected:!0}).flatten().length+e.columns({selected:!0}).flatten().length+e.cells({selected:!0}).flatten().length;t.enable(1===l)}),this.disable()}},selectAll:{text:d("selectAll","Select all"),className:"buttons-select-all",action:function(){this[this.select.items()+"s"]().select()}},selectNone:{text:d("selectNone","Deselect all"),className:"buttons-select-none",action:function(){a(this.settings()[0],!0)}}}),e.each(["Row","Column","Cell"],function(e,t){var l=t.toLowerCase();s.ext.buttons["select"+t+"s"]={text:d("select"+t+"s","Select "+l+"s"),className:"buttons-select-"+l+"s",action:function(){this.select.items(l)},init:function(e){var t=this;e.on("selectItems.dt.DT",function(e,s,c){t.active(c===l)})}}}),e(t).on("init.dt.dtSelect",function(t,c){if("dt"===t.namespace){var n=c.oInit.select||s.defaults.select,o=new s.Api(c),i="row",a="api",r=!1,d=!0,u="td, th";c._select={},!0===n?a="os":"string"==typeof n?a=n:e.isPlainObject(n)&&(n.blurable!==l&&(r=n.blurable),n.info!==l&&(d=n.info),n.items!==l&&(i=n.items),n.style!==l&&(a=n.style),n.selector!==l)&&(u=n.selector),o.select.selector(u),o.select.items(i),o.select.style(a),o.select.blurable(r),o.select.info(d),e(o.table().node()).hasClass("selectable")&&o.select.style("os")}})},"function"==typeof define&&define.amd?define(["jquery","datatables"],e):"object"==typeof exports?e(require("jquery"),require("datatables")):jQuery&&!jQuery.fn.dataTable.select&&e(jQuery,jQuery.fn.dataTable)}(window,document);