!function(a){function d(e,t,i){return t<e&&e<t+i}a.widget("ui.droppable",{version:"1.10.4",widgetEventPrefix:"drop",options:{accept:"*",activeClass:!1,addClasses:!0,greedy:!1,hoverClass:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var t,e=this.options,i=e.accept;this.isover=!1,this.isout=!0,this.accept=a.isFunction(i)?i:function(e){return e.is(i)},this.proportions=function(e){if(!arguments.length)return t||(t={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight});t=e},a.ui.ddmanager.droppables[e.scope]=a.ui.ddmanager.droppables[e.scope]||[],a.ui.ddmanager.droppables[e.scope].push(this),e.addClasses&&this.element.addClass("ui-droppable")},_destroy:function(){for(var e=0,t=a.ui.ddmanager.droppables[this.options.scope];e<t.length;e++)t[e]===this&&t.splice(e,1);this.element.removeClass("ui-droppable ui-droppable-disabled")},_setOption:function(e,t){"accept"===e&&(this.accept=a.isFunction(t)?t:function(e){return e.is(t)}),a.Widget.prototype._setOption.apply(this,arguments)},_activate:function(e){var t=a.ui.ddmanager.current;this.options.activeClass&&this.element.addClass(this.options.activeClass),t&&this._trigger("activate",e,this.ui(t))},_deactivate:function(e){var t=a.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass),t&&this._trigger("deactivate",e,this.ui(t))},_over:function(e){var t=a.ui.ddmanager.current;t&&(t.currentItem||t.element)[0]!==this.element[0]&&this.accept.call(this.element[0],t.currentItem||t.element)&&(this.options.hoverClass&&this.element.addClass(this.options.hoverClass),this._trigger("over",e,this.ui(t)))},_out:function(e){var t=a.ui.ddmanager.current;t&&(t.currentItem||t.element)[0]!==this.element[0]&&this.accept.call(this.element[0],t.currentItem||t.element)&&(this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("out",e,this.ui(t)))},_drop:function(e,t){var i=t||a.ui.ddmanager.current,s=!1;return!(!i||(i.currentItem||i.element)[0]===this.element[0])&&(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var e=a.data(this,"ui-droppable");if(e.options.greedy&&!e.options.disabled&&e.options.scope===i.options.scope&&e.accept.call(e.element[0],i.currentItem||i.element)&&a.ui.intersect(i,a.extend(e,{offset:e.element.offset()}),e.options.tolerance))return!(s=!0)}),!s&&(!!this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.activeClass&&this.element.removeClass(this.options.activeClass),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("drop",e,this.ui(i)),this.element)))},ui:function(e){return{draggable:e.currentItem||e.element,helper:e.helper,position:e.position,offset:e.positionAbs}}}),a.ui.intersect=function(e,t,i){if(!t.offset)return!1;var s,o=(e.positionAbs||e.position.absolute).left,n=(e.positionAbs||e.position.absolute).top,r=o+e.helperProportions.width,a=n+e.helperProportions.height,l=t.offset.left,p=t.offset.top,h=l+t.proportions().width,c=p+t.proportions().height;switch(i){case"fit":return l<=o&&r<=h&&p<=n&&a<=c;case"intersect":return l<o+e.helperProportions.width/2&&r-e.helperProportions.width/2<h&&p<n+e.helperProportions.height/2&&a-e.helperProportions.height/2<c;case"pointer":return s=(e.positionAbs||e.position.absolute).left+(e.clickOffset||e.offset.click).left,d((e.positionAbs||e.position.absolute).top+(e.clickOffset||e.offset.click).top,p,t.proportions().height)&&d(s,l,t.proportions().width);case"touch":return(p<=n&&n<=c||p<=a&&a<=c||n<p&&c<a)&&(l<=o&&o<=h||l<=r&&r<=h||o<l&&h<r);default:return!1}},a.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(e,t){var i,s,o=a.ui.ddmanager.droppables[e.options.scope]||[],n=t?t.type:null,r=(e.currentItem||e.element).find(":data(ui-droppable)").addBack();e:for(i=0;i<o.length;i++)if(!(o[i].options.disabled||e&&!o[i].accept.call(o[i].element[0],e.currentItem||e.element))){for(s=0;s<r.length;s++)if(r[s]===o[i].element[0]){o[i].proportions().height=0;continue e}o[i].visible="none"!==o[i].element.css("display"),o[i].visible&&("mousedown"===n&&o[i]._activate.call(o[i],t),o[i].offset=o[i].element.offset(),o[i].proportions({width:o[i].element[0].offsetWidth,height:o[i].element[0].offsetHeight}))}},drop:function(e,t){var i=!1;return a.each((a.ui.ddmanager.droppables[e.options.scope]||[]).slice(),function(){this.options&&(!this.options.disabled&&this.visible&&a.ui.intersect(e,this,this.options.tolerance)&&(i=this._drop.call(this,t)||i),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],e.currentItem||e.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,t)))}),i},dragStart:function(e,t){e.element.parentsUntil("body").bind("scroll.droppable",function(){e.options.refreshPositions||a.ui.ddmanager.prepareOffsets(e,t)})},drag:function(n,r){n.options.refreshPositions&&a.ui.ddmanager.prepareOffsets(n,r),a.each(a.ui.ddmanager.droppables[n.options.scope]||[],function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var e,t,i,s=a.ui.intersect(n,this,this.options.tolerance),o=!s&&this.isover?"isout":s&&!this.isover?"isover":null;o&&(this.options.greedy&&(t=this.options.scope,(i=this.element.parents(":data(ui-droppable)").filter(function(){return a.data(this,"ui-droppable").options.scope===t})).length&&((e=a.data(i[0],"ui-droppable")).greedyChild="isover"===o)),e&&"isover"===o&&(e.isover=!1,e.isout=!0,e._out.call(e,r)),this[o]=!0,this["isout"===o?"isover":"isout"]=!1,this["isover"===o?"_over":"_out"].call(this,r),e&&"isout"===o&&(e.isout=!1,e.isover=!0,e._over.call(e,r)))}})},dragStop:function(e,t){e.element.parentsUntil("body").unbind("scroll.droppable"),e.options.refreshPositions||a.ui.ddmanager.prepareOffsets(e,t)}}}(jQuery);