!function(u){function d(t,e,i){return e<t&&t<e+i}function m(t){return/left|right/.test(t.css("float"))||/inline|table-cell/.test(t.css("display"))}u.widget("ui.sortable",u.ui.mouse,{version:"1.10.4",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_create:function(){var t=this.options;this.containerCache={},this.element.addClass("ui-sortable"),this.refresh(),this.floating=!!this.items.length&&("x"===t.axis||m(this.items[0].item)),this.offset=this.element.offset(),this._mouseInit(),this.ready=!0},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled"),this._mouseDestroy();for(var t=this.items.length-1;0<=t;t--)this.items[t].item.removeData(this.widgetName+"-item");return this},_setOption:function(t,e){"disabled"===t?(this.options[t]=e,this.widget().toggleClass("ui-sortable-disabled",!!e)):u.Widget.prototype._setOption.apply(this,arguments)},_mouseCapture:function(t,e){var i=null,s=!1,o=this;return!this.reverting&&(!this.options.disabled&&"static"!==this.options.type&&(this._refreshItems(t),u(t.target).parents().each(function(){if(u.data(this,o.widgetName+"-item")===o)return i=u(this),!1}),u.data(t.target,o.widgetName+"-item")===o&&(i=u(t.target)),!!i&&(!(this.options.handle&&!e&&(u(this.options.handle,i).find("*").addBack().each(function(){this===t.target&&(s=!0)}),!s))&&(this.currentItem=i,this._removeCurrentsFromItems(),!0))))},_mouseStart:function(t,e,i){var s,o,r=this.options;if((this.currentContainer=this).refreshPositions(),this.helper=this._createHelper(t),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},u.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(t),this.originalPageX=t.pageX,this.originalPageY=t.pageY,r.cursorAt&&this._adjustOffsetFromHelper(r.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),r.containment&&this._setContainment(),r.cursor&&"auto"!==r.cursor&&(o=this.document.find("body"),this.storedCursor=o.css("cursor"),o.css("cursor",r.cursor),this.storedStylesheet=u("<style>*{ cursor: "+r.cursor+" !important; }</style>").appendTo(o)),r.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",r.opacity)),r.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",r.zIndex)),this.scrollParent[0]!==document&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",t,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!i)for(s=this.containers.length-1;0<=s;s--)this.containers[s]._trigger("activate",t,this._uiHash(this));return u.ui.ddmanager&&(u.ui.ddmanager.current=this),u.ui.ddmanager&&!r.dropBehaviour&&u.ui.ddmanager.prepareOffsets(this,t),this.dragging=!0,this.helper.addClass("ui-sortable-helper"),this._mouseDrag(t),!0},_mouseDrag:function(t){var e,i,s,o,r=this.options,n=!1;for(this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==document&&"HTML"!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-t.pageY<r.scrollSensitivity?this.scrollParent[0].scrollTop=n=this.scrollParent[0].scrollTop+r.scrollSpeed:t.pageY-this.overflowOffset.top<r.scrollSensitivity&&(this.scrollParent[0].scrollTop=n=this.scrollParent[0].scrollTop-r.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-t.pageX<r.scrollSensitivity?this.scrollParent[0].scrollLeft=n=this.scrollParent[0].scrollLeft+r.scrollSpeed:t.pageX-this.overflowOffset.left<r.scrollSensitivity&&(this.scrollParent[0].scrollLeft=n=this.scrollParent[0].scrollLeft-r.scrollSpeed)):(t.pageY-u(document).scrollTop()<r.scrollSensitivity?n=u(document).scrollTop(u(document).scrollTop()-r.scrollSpeed):u(window).height()-(t.pageY-u(document).scrollTop())<r.scrollSensitivity&&(n=u(document).scrollTop(u(document).scrollTop()+r.scrollSpeed)),t.pageX-u(document).scrollLeft()<r.scrollSensitivity?n=u(document).scrollLeft(u(document).scrollLeft()-r.scrollSpeed):u(window).width()-(t.pageX-u(document).scrollLeft())<r.scrollSensitivity&&(n=u(document).scrollLeft(u(document).scrollLeft()+r.scrollSpeed))),!1!==n&&u.ui.ddmanager&&!r.dropBehaviour&&u.ui.ddmanager.prepareOffsets(this,t)),this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),e=this.items.length-1;0<=e;e--)if(s=(i=this.items[e]).item[0],(o=this._intersectsWithPointer(i))&&i.instance===this.currentContainer&&!(s===this.currentItem[0]||this.placeholder[1===o?"next":"prev"]()[0]===s||u.contains(this.placeholder[0],s)||"semi-dynamic"===this.options.type&&u.contains(this.element[0],s))){if(this.direction=1===o?"down":"up","pointer"!==this.options.tolerance&&!this._intersectsWithSides(i))break;this._rearrange(t,i),this._trigger("change",t,this._uiHash());break}return this._contactContainers(t),u.ui.ddmanager&&u.ui.ddmanager.drag(this,t),this._trigger("sort",t,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(t,e){if(t){if(u.ui.ddmanager&&!this.options.dropBehaviour&&u.ui.ddmanager.drop(this,t),this.options.revert){var i=this,s=this.placeholder.offset(),o=this.options.axis,r={};o&&"x"!==o||(r.left=s.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollLeft)),o&&"y"!==o||(r.top=s.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollTop)),this.reverting=!0,u(this.helper).animate(r,parseInt(this.options.revert,10)||500,function(){i._clear(t)})}else this._clear(t,e);return!1}},cancel:function(){if(this.dragging){this._mouseUp({target:null}),"original"===this.options.helper?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show();for(var t=this.containers.length-1;0<=t;t--)this.containers[t]._trigger("deactivate",null,this._uiHash(this)),this.containers[t].containerCache.over&&(this.containers[t]._trigger("out",null,this._uiHash(this)),this.containers[t].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),u.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?u(this.domPosition.prev).after(this.currentItem):u(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(e){var t=this._getItemsAsjQuery(e&&e.connected),i=[];return e=e||{},u(t).each(function(){var t=(u(e.item||this).attr(e.attribute||"id")||"").match(e.expression||/(.+)[\-=_](.+)/);t&&i.push((e.key||t[1]+"[]")+"="+(e.key&&e.expression?t[1]:t[2]))}),!i.length&&e.key&&i.push(e.key+"="),i.join("&")},toArray:function(t){var e=this._getItemsAsjQuery(t&&t.connected),i=[];return t=t||{},e.each(function(){i.push(u(t.item||this).attr(t.attribute||"id")||"")}),i},_intersectsWith:function(t){var e=this.positionAbs.left,i=e+this.helperProportions.width,s=this.positionAbs.top,o=s+this.helperProportions.height,r=t.left,n=r+t.width,h=t.top,a=h+t.height,l=this.offset.click.top,c=this.offset.click.left,p="x"===this.options.axis||h<s+l&&s+l<a,f="y"===this.options.axis||r<e+c&&e+c<n,u=p&&f;return"pointer"===this.options.tolerance||this.options.forcePointerForContainers||"pointer"!==this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>t[this.floating?"width":"height"]?u:r<e+this.helperProportions.width/2&&i-this.helperProportions.width/2<n&&h<s+this.helperProportions.height/2&&o-this.helperProportions.height/2<a},_intersectsWithPointer:function(t){var e="x"===this.options.axis||d(this.positionAbs.top+this.offset.click.top,t.top,t.height),i="y"===this.options.axis||d(this.positionAbs.left+this.offset.click.left,t.left,t.width),s=e&&i,o=this._getDragVerticalDirection(),r=this._getDragHorizontalDirection();return!!s&&(this.floating?r&&"right"===r||"down"===o?2:1:o&&("down"===o?2:1))},_intersectsWithSides:function(t){var e=d(this.positionAbs.top+this.offset.click.top,t.top+t.height/2,t.height),i=d(this.positionAbs.left+this.offset.click.left,t.left+t.width/2,t.width),s=this._getDragVerticalDirection(),o=this._getDragHorizontalDirection();return this.floating&&o?"right"===o&&i||"left"===o&&!i:s&&("down"===s&&e||"up"===s&&!e)},_getDragVerticalDirection:function(){var t=this.positionAbs.top-this.lastPositionAbs.top;return 0!==t&&(0<t?"down":"up")},_getDragHorizontalDirection:function(){var t=this.positionAbs.left-this.lastPositionAbs.left;return 0!==t&&(0<t?"right":"left")},refresh:function(t){return this._refreshItems(t),this.refreshPositions(),this},_connectWith:function(){var t=this.options;return t.connectWith.constructor===String?[t.connectWith]:t.connectWith},_getItemsAsjQuery:function(t){function e(){n.push(this)}var i,s,o,r,n=[],h=[],a=this._connectWith();if(a&&t)for(i=a.length-1;0<=i;i--)for(s=(o=u(a[i])).length-1;0<=s;s--)(r=u.data(o[s],this.widgetFullName))&&r!==this&&!r.options.disabled&&h.push([u.isFunction(r.options.items)?r.options.items.call(r.element):u(r.options.items,r.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),r]);for(h.push([u.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):u(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),i=h.length-1;0<=i;i--)h[i][0].each(e);return u(n)},_removeCurrentsFromItems:function(){var i=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=u.grep(this.items,function(t){for(var e=0;e<i.length;e++)if(i[e]===t.item[0])return!1;return!0})},_refreshItems:function(t){this.items=[],this.containers=[this];var e,i,s,o,r,n,h,a,l=this.items,c=[[u.isFunction(this.options.items)?this.options.items.call(this.element[0],t,{item:this.currentItem}):u(this.options.items,this.element),this]],p=this._connectWith();if(p&&this.ready)for(e=p.length-1;0<=e;e--)for(i=(s=u(p[e])).length-1;0<=i;i--)(o=u.data(s[i],this.widgetFullName))&&o!==this&&!o.options.disabled&&(c.push([u.isFunction(o.options.items)?o.options.items.call(o.element[0],t,{item:this.currentItem}):u(o.options.items,o.element),o]),this.containers.push(o));for(e=c.length-1;0<=e;e--)for(r=c[e][1],i=0,a=(n=c[e][0]).length;i<a;i++)(h=u(n[i])).data(this.widgetName+"-item",r),l.push({item:h,instance:r,width:0,height:0,left:0,top:0})},refreshPositions:function(t){var e,i,s,o;for(this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset()),e=this.items.length-1;0<=e;e--)(i=this.items[e]).instance!==this.currentContainer&&this.currentContainer&&i.item[0]!==this.currentItem[0]||(s=this.options.toleranceElement?u(this.options.toleranceElement,i.item):i.item,t||(i.width=s.outerWidth(),i.height=s.outerHeight()),o=s.offset(),i.left=o.left,i.top=o.top);if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(e=this.containers.length-1;0<=e;e--)o=this.containers[e].element.offset(),this.containers[e].containerCache.left=o.left,this.containers[e].containerCache.top=o.top,this.containers[e].containerCache.width=this.containers[e].element.outerWidth(),this.containers[e].containerCache.height=this.containers[e].element.outerHeight();return this},_createPlaceholder:function(i){var s,o=(i=i||this).options;o.placeholder&&o.placeholder.constructor!==String||(s=o.placeholder,o.placeholder={element:function(){var t=i.currentItem[0].nodeName.toLowerCase(),e=u("<"+t+">",i.document[0]).addClass(s||i.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper");return"tr"===t?i.currentItem.children().each(function(){u("<td>&#160;</td>",i.document[0]).attr("colspan",u(this).attr("colspan")||1).appendTo(e)}):"img"===t&&e.attr("src",i.currentItem.attr("src")),s||e.css("visibility","hidden"),e},update:function(t,e){s&&!o.forcePlaceholderSize||(e.height()||e.height(i.currentItem.innerHeight()-parseInt(i.currentItem.css("paddingTop")||0,10)-parseInt(i.currentItem.css("paddingBottom")||0,10)),e.width()||e.width(i.currentItem.innerWidth()-parseInt(i.currentItem.css("paddingLeft")||0,10)-parseInt(i.currentItem.css("paddingRight")||0,10)))}}),i.placeholder=u(o.placeholder.element.call(i.element,i.currentItem)),i.currentItem.after(i.placeholder),o.placeholder.update(i,i.placeholder)},_contactContainers:function(t){var e,i,s,o,r,n,h,a,l,c,p=null,f=null;for(e=this.containers.length-1;0<=e;e--)if(!u.contains(this.currentItem[0],this.containers[e].element[0]))if(this._intersectsWith(this.containers[e].containerCache)){if(p&&u.contains(this.containers[e].element[0],p.element[0]))continue;p=this.containers[e],f=e}else this.containers[e].containerCache.over&&(this.containers[e]._trigger("out",t,this._uiHash(this)),this.containers[e].containerCache.over=0);if(p)if(1===this.containers.length)this.containers[f].containerCache.over||(this.containers[f]._trigger("over",t,this._uiHash(this)),this.containers[f].containerCache.over=1);else{for(s=1e4,o=null,r=(c=p.floating||m(this.currentItem))?"left":"top",n=c?"width":"height",h=this.positionAbs[r]+this.offset.click[r],i=this.items.length-1;0<=i;i--)u.contains(this.containers[f].element[0],this.items[i].item[0])&&this.items[i].item[0]!==this.currentItem[0]&&(c&&!d(this.positionAbs.top+this.offset.click.top,this.items[i].top,this.items[i].height)||(a=this.items[i].item.offset()[r],l=!1,Math.abs(a-h)>Math.abs(a+this.items[i][n]-h)&&(l=!0,a+=this.items[i][n]),Math.abs(a-h)<s&&(s=Math.abs(a-h),o=this.items[i],this.direction=l?"up":"down")));if(!o&&!this.options.dropOnEmpty)return;if(this.currentContainer===this.containers[f])return;o?this._rearrange(t,o,null,!0):this._rearrange(t,null,this.containers[f].element,!0),this._trigger("change",t,this._uiHash()),this.containers[f]._trigger("change",t,this._uiHash(this)),this.currentContainer=this.containers[f],this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[f]._trigger("over",t,this._uiHash(this)),this.containers[f].containerCache.over=1}},_createHelper:function(t){var e=this.options,i=u.isFunction(e.helper)?u(e.helper.apply(this.element[0],[t,this.currentItem])):"clone"===e.helper?this.currentItem.clone():this.currentItem;return i.parents("body").length||u("parent"!==e.appendTo?e.appendTo:this.currentItem[0].parentNode)[0].appendChild(i[0]),i[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),i[0].style.width&&!e.forceHelperSize||i.width(this.currentItem.width()),i[0].style.height&&!e.forceHelperSize||i.height(this.currentItem.height()),i},_adjustOffsetFromHelper:function(t){"string"==typeof t&&(t=t.split(" ")),u.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var t=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==document&&u.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&u.ui.ie)&&(t={top:0,left:0}),{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"!==this.cssPosition)return{top:0,left:0};var t=this.currentItem.position();return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:t.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,e,i,s=this.options;"parent"===s.containment&&(s.containment=this.helper[0].parentNode),"document"!==s.containment&&"window"!==s.containment||(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,u("document"===s.containment?document:window).width()-this.helperProportions.width-this.margins.left,(u("document"===s.containment?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(s.containment)||(t=u(s.containment)[0],e=u(s.containment).offset(),i="hidden"!==u(t).css("overflow"),this.containment=[e.left+(parseInt(u(t).css("borderLeftWidth"),10)||0)+(parseInt(u(t).css("paddingLeft"),10)||0)-this.margins.left,e.top+(parseInt(u(t).css("borderTopWidth"),10)||0)+(parseInt(u(t).css("paddingTop"),10)||0)-this.margins.top,e.left+(i?Math.max(t.scrollWidth,t.offsetWidth):t.offsetWidth)-(parseInt(u(t).css("borderLeftWidth"),10)||0)-(parseInt(u(t).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,e.top+(i?Math.max(t.scrollHeight,t.offsetHeight):t.offsetHeight)-(parseInt(u(t).css("borderTopWidth"),10)||0)-(parseInt(u(t).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])},_convertPositionTo:function(t,e){e||(e=this.position);var i="absolute"===t?1:-1,s="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&u.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,o=/(html|body)/i.test(s[0].tagName);return{top:e.top+this.offset.relative.top*i+this.offset.parent.top*i-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():o?0:s.scrollTop())*i,left:e.left+this.offset.relative.left*i+this.offset.parent.left*i-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():o?0:s.scrollLeft())*i}},_generatePosition:function(t){var e,i,s=this.options,o=t.pageX,r=t.pageY,n="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&u.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,h=/(html|body)/i.test(n[0].tagName);return"relative"!==this.cssPosition||this.scrollParent[0]!==document&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(t.pageX-this.offset.click.left<this.containment[0]&&(o=this.containment[0]+this.offset.click.left),t.pageY-this.offset.click.top<this.containment[1]&&(r=this.containment[1]+this.offset.click.top),t.pageX-this.offset.click.left>this.containment[2]&&(o=this.containment[2]+this.offset.click.left),t.pageY-this.offset.click.top>this.containment[3]&&(r=this.containment[3]+this.offset.click.top)),s.grid&&(e=this.originalPageY+Math.round((r-this.originalPageY)/s.grid[1])*s.grid[1],r=this.containment?e-this.offset.click.top>=this.containment[1]&&e-this.offset.click.top<=this.containment[3]?e:e-this.offset.click.top>=this.containment[1]?e-s.grid[1]:e+s.grid[1]:e,i=this.originalPageX+Math.round((o-this.originalPageX)/s.grid[0])*s.grid[0],o=this.containment?i-this.offset.click.left>=this.containment[0]&&i-this.offset.click.left<=this.containment[2]?i:i-this.offset.click.left>=this.containment[0]?i-s.grid[0]:i+s.grid[0]:i)),{top:r-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():h?0:n.scrollTop()),left:o-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():h?0:n.scrollLeft())}},_rearrange:function(t,e,i,s){i?i[0].appendChild(this.placeholder[0]):e.item[0].parentNode.insertBefore(this.placeholder[0],"down"===this.direction?e.item[0]:e.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var o=this.counter;this._delay(function(){o===this.counter&&this.refreshPositions(!s)})},_clear:function(t,e){function i(e,i,s){return function(t){s._trigger(e,t,i._uiHash(i))}}this.reverting=!1;var s,o=[];if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]===this.currentItem[0]){for(s in this._storedCSS)"auto"!==this._storedCSS[s]&&"static"!==this._storedCSS[s]||(this._storedCSS[s]="");this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();for(this.fromOutside&&!e&&o.push(function(t){this._trigger("receive",t,this._uiHash(this.fromOutside))}),!this.fromOutside&&this.domPosition.prev===this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent===this.currentItem.parent()[0]||e||o.push(function(t){this._trigger("update",t,this._uiHash())}),this!==this.currentContainer&&(e||(o.push(function(t){this._trigger("remove",t,this._uiHash())}),o.push(function(e){return function(t){e._trigger("receive",t,this._uiHash(this))}}.call(this,this.currentContainer)),o.push(function(e){return function(t){e._trigger("update",t,this._uiHash(this))}}.call(this,this.currentContainer)))),s=this.containers.length-1;0<=s;s--)e||o.push(i("deactivate",this,this.containers[s])),this.containers[s].containerCache.over&&(o.push(i("out",this,this.containers[s])),this.containers[s].containerCache.over=0);if(this.storedCursor&&(this.document.find("body").css("cursor",this.storedCursor),this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex","auto"===this._storedZIndex?"":this._storedZIndex),this.dragging=!1,this.cancelHelperRemoval){if(!e){for(this._trigger("beforeStop",t,this._uiHash()),s=0;s<o.length;s++)o[s].call(this,t);this._trigger("stop",t,this._uiHash())}return this.fromOutside=!1}if(e||this._trigger("beforeStop",t,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null,!e){for(s=0;s<o.length;s++)o[s].call(this,t);this._trigger("stop",t,this._uiHash())}return!(this.fromOutside=!1)},_trigger:function(){!1===u.Widget.prototype._trigger.apply(this,arguments)&&this.cancel()},_uiHash:function(t){var e=t||this;return{helper:e.helper,placeholder:e.placeholder||u([]),position:e.position,originalPosition:e.originalPosition,offset:e.positionAbs,item:e.currentItem,sender:t?t.element:null}}})}(jQuery);