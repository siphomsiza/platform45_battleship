CKEDITOR.dialog.add("cellProperties",function(t){var e=t.lang.table,i=e.cell,l=t.lang.common,o=CKEDITOR.dialog.validate,n=/^(\d+(?:\.\d+)?)(px|%)$/,a={type:"html",html:"&nbsp;"},r="rtl"==t.lang.dir,s=t.plugins.colordialog;return{title:i.title,minWidth:CKEDITOR.env.ie&&CKEDITOR.env.quirks?450:410,minHeight:CKEDITOR.env.ie&&(CKEDITOR.env.ie7Compat||CKEDITOR.env.quirks)?230:220,contents:[{id:"info",label:i.title,accessKey:"I",elements:[{type:"hbox",widths:["40%","5%","40%"],children:[{type:"vbox",padding:0,children:[{type:"hbox",widths:["70%","30%"],children:[{type:"text",id:"width",width:"100px",label:l.width,validate:o.number(i.invalidWidth),onLoad:function(){var t=this.getDialog().getContentElement("info","widthType").getElement(),e=this.getInputElement(),i=e.getAttribute("aria-labelledby");e.setAttribute("aria-labelledby",[i,t.$.id].join(" "))},setup:function(t){var e=parseInt(t.getAttribute("width"),10);t=parseInt(t.getStyle("width"),10);!isNaN(e)&&this.setValue(e),!isNaN(t)&&this.setValue(t)},commit:function(t){var e=parseInt(this.getValue(),10),i=this.getDialog().getValueOf("info","widthType");isNaN(e)?t.removeStyle("width"):t.setStyle("width",e+i),t.removeAttribute("width")},"default":""},{type:"select",id:"widthType",label:t.lang.table.widthUnit,labelStyle:"visibility:hidden","default":"px",items:[[e.widthPx,"px"],[e.widthPc,"%"]],setup:function(t){(t=n.exec(t.getStyle("width")||t.getAttribute("width")))&&this.setValue(t[2])}}]},{type:"hbox",widths:["70%","30%"],children:[{type:"text",id:"height",label:l.height,width:"100px","default":"",validate:o.number(i.invalidHeight),onLoad:function(){var t=this.getDialog().getContentElement("info","htmlHeightType").getElement(),e=this.getInputElement(),i=e.getAttribute("aria-labelledby");e.setAttribute("aria-labelledby",[i,t.$.id].join(" "))},setup:function(t){var e=parseInt(t.getAttribute("height"),10);t=parseInt(t.getStyle("height"),10);!isNaN(e)&&this.setValue(e),!isNaN(t)&&this.setValue(t)},commit:function(t){var e=parseInt(this.getValue(),10);isNaN(e)?t.removeStyle("height"):t.setStyle("height",CKEDITOR.tools.cssLength(e)),t.removeAttribute("height")}},{id:"htmlHeightType",type:"html",html:"<br />"+e.widthPx}]},a,{type:"select",id:"wordWrap",label:i.wordWrap,"default":"yes",items:[[i.yes,"yes"],[i.no,"no"]],setup:function(t){var e=t.getAttribute("noWrap");("nowrap"==t.getStyle("white-space")||e)&&this.setValue("no")},commit:function(t){"no"==this.getValue()?t.setStyle("white-space","nowrap"):t.removeStyle("white-space"),t.removeAttribute("noWrap")}},a,{type:"select",id:"hAlign",label:i.hAlign,"default":"",items:[[l.notSet,""],[l.alignLeft,"left"],[l.alignCenter,"center"],[l.alignRight,"right"]],setup:function(t){var e=t.getAttribute("align");this.setValue(t.getStyle("text-align")||e||"")},commit:function(t){var e=this.getValue();e?t.setStyle("text-align",e):t.removeStyle("text-align"),t.removeAttribute("align")}},{type:"select",id:"vAlign",label:i.vAlign,"default":"",items:[[l.notSet,""],[l.alignTop,"top"],[l.alignMiddle,"middle"],[l.alignBottom,"bottom"],[i.alignBaseline,"baseline"]],setup:function(t){var e=t.getAttribute("vAlign");switch(t=t.getStyle("vertical-align")){case"top":case"middle":case"bottom":case"baseline":break;default:t=""}this.setValue(t||e||"")},commit:function(t){var e=this.getValue();e?t.setStyle("vertical-align",e):t.removeStyle("vertical-align"),t.removeAttribute("vAlign")}}]},a,{type:"vbox",padding:0,children:[{type:"select",id:"cellType",label:i.cellType,"default":"td",items:[[i.data,"td"],[i.header,"th"]],setup:function(t){this.setValue(t.getName())},commit:function(t){t.renameNode(this.getValue())}},a,{type:"text",id:"rowSpan",label:i.rowSpan,"default":"",validate:o.integer(i.invalidRowSpan),setup:function(t){(t=parseInt(t.getAttribute("rowSpan"),10))&&1!=t&&this.setValue(t)},commit:function(t){var e=parseInt(this.getValue(),10);e&&1!=e?t.setAttribute("rowSpan",this.getValue()):t.removeAttribute("rowSpan")}},{type:"text",id:"colSpan",label:i.colSpan,"default":"",validate:o.integer(i.invalidColSpan),setup:function(t){(t=parseInt(t.getAttribute("colSpan"),10))&&1!=t&&this.setValue(t)},commit:function(t){var e=parseInt(this.getValue(),10);e&&1!=e?t.setAttribute("colSpan",this.getValue()):t.removeAttribute("colSpan")}},a,{type:"hbox",padding:0,widths:["60%","40%"],children:[{type:"text",id:"bgColor",label:i.bgColor,"default":"",setup:function(t){var e=t.getAttribute("bgColor");this.setValue(t.getStyle("background-color")||e)},commit:function(t){this.getValue()?t.setStyle("background-color",this.getValue()):t.removeStyle("background-color"),t.removeAttribute("bgColor")}},s?{type:"button",id:"bgColorChoose","class":"colorChooser",label:i.chooseColor,onLoad:function(){this.getElement().getParent().setStyle("vertical-align","bottom")},onClick:function(){t.getColorFromDialog(function(t){t&&this.getDialog().getContentElement("info","bgColor").setValue(t),this.focus()},this)}}:a]},a,{type:"hbox",padding:0,widths:["60%","40%"],children:[{type:"text",id:"borderColor",label:i.borderColor,"default":"",setup:function(t){var e=t.getAttribute("borderColor");this.setValue(t.getStyle("border-color")||e)},commit:function(t){this.getValue()?t.setStyle("border-color",this.getValue()):t.removeStyle("border-color"),t.removeAttribute("borderColor")}},s?{type:"button",id:"borderColorChoose","class":"colorChooser",label:i.chooseColor,style:(r?"margin-right":"margin-left")+": 10px",onLoad:function(){this.getElement().getParent().setStyle("vertical-align","bottom")},onClick:function(){t.getColorFromDialog(function(t){t&&this.getDialog().getContentElement("info","borderColor").setValue(t),this.focus()},this)}}:a]}]}]}]}],onShow:function(){this.cells=CKEDITOR.plugins.tabletools.getSelectedCells(this._.editor.getSelection()),this.setupContent(this.cells[0])},onOk:function(){for(var t=this._.editor.getSelection(),e=t.createBookmarks(),i=this.cells,l=0;l<i.length;l++)this.commitContent(i[l]);this._.editor.forceNextSelectionCheck(),t.selectBookmarks(e),this._.editor.selectionChange()}}});