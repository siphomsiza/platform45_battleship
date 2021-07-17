!function(x){x.expr[":"].icontains=function(e,t,i){return 0<=x(e).text().toUpperCase().indexOf(i[3].toUpperCase())};var r=function(e,t,i){i&&(i.stopPropagation(),i.preventDefault()),this.$element=x(e),this.$newElement=null,this.$button=null,this.$menu=null,this.$lis=null,this.options=x.extend({},x.fn.selectpicker.defaults,this.$element.data(),"object"==typeof t&&t),null===this.options.title&&(this.options.title=this.$element.attr("title")),this.val=r.prototype.val,this.render=r.prototype.render,this.refresh=r.prototype.refresh,this.setStyle=r.prototype.setStyle,this.selectAll=r.prototype.selectAll,this.deselectAll=r.prototype.deselectAll,this.init()};r.prototype={constructor:r,init:function(){var t=this,e=this.$element.attr("id");this.$element.hide(),this.multiple=this.$element.prop("multiple"),this.autofocus=this.$element.prop("autofocus"),this.$newElement=this.createView(),this.$element.after(this.$newElement),this.$menu=this.$newElement.find("> .dropdown-menu"),this.$button=this.$newElement.find("> button"),this.$searchbox=this.$newElement.find("input"),e!==undefined&&(this.$button.attr("data-id",e),x('label[for="'+e+'"]').click(function(e){e.preventDefault(),t.$button.focus()})),this.checkDisabled(),this.clickListener(),this.options.liveSearch&&this.liveSearchListener(),this.render(),this.liHeight(),this.setStyle(),this.setWidth(),this.options.container&&this.selectPosition(),this.$menu.data("this",this),this.$newElement.data("this",this)},createDropdown:function(){var e=this.multiple?" show-tick":"",t=this.$element.parent().hasClass("input-group")?" input-group-btn":"",i=this.autofocus?" autofocus":"",s=this.options.header?'<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>'+this.options.header+"</div>":"",n=this.options.liveSearch?'<div class="bootstrap-select-searchbox"><input type="text" class="input-block-level form-control" /></div>':"",o=this.options.actionsBox?'<div class="bs-actionsbox"><div class="btn-group btn-block"><button class="actions-btn bs-select-all btn btn-sm btn-default">Select All</button><button class="actions-btn bs-deselect-all btn btn-sm btn-default">Deselect All</button></div></div>':"";return x('<div class="btn-group bootstrap-select'+e+t+'"><button type="button" class="btn dropdown-toggle selectpicker" data-toggle="dropdown"'+i+'><span class="filter-option pull-left"></span>&nbsp;<span class="caret"></span></button><div class="dropdown-menu open">'+s+n+o+'<ul class="dropdown-menu inner selectpicker" role="menu"></ul></div></div>')},createView:function(){var e=this.createDropdown(),t=this.createLi();return e.find("ul").append(t),e},reloadLi:function(){this.destroyLi();var e=this.createLi();this.$menu.find("ul").append(e)},destroyLi:function(){this.$menu.find("li").remove()},createLi:function(){var d=this,r=[],i="";return this.$element.find("option").each(function(){var e=x(this),t=e.attr("class")||"",i=e.attr("style")||"",s=e.data("content")?e.data("content"):e.html(),n=e.data("subtext")!==undefined?'<small class="muted text-muted">'+e.data("subtext")+"</small>":"",o=e.data("icon")!==undefined?'<i class="'+d.options.iconBase+" "+e.data("icon")+'"></i> ':"";if(""!==o&&(e.is(":disabled")||e.parent().is(":disabled"))&&(o="<span>"+o+"</span>"),e.data("content")||(s=o+'<span class="text">'+s+n+"</span>"),d.options.hideDisabled&&(e.is(":disabled")||e.parent().is(":disabled")))r.push('<a style="min-height: 0; padding: 0"></a>');else if(e.parent().is("optgroup")&&!0!==e.data("divider"))if(0===e.index()){var a=e.parent().attr("label"),l=e.parent().data("subtext")!==undefined?'<small class="muted text-muted">'+e.parent().data("subtext")+"</small>":"";a=(e.parent().data("icon")?'<i class="'+e.parent().data("icon")+'"></i> ':"")+'<span class="text">'+a+l+"</span>",0!==e[0].index?r.push('<div class="div-contain"><div class="divider"></div></div><dt>'+a+"</dt>"+d.createA(s,"opt "+t,i)):r.push("<dt>"+a+"</dt>"+d.createA(s,"opt "+t,i))}else r.push(d.createA(s,"opt "+t,i));else!0===e.data("divider")?r.push('<div class="div-contain"><div class="divider"></div></div>'):!0===x(this).data("hidden")?r.push("<a></a>"):r.push(d.createA(s,t,i))}),x.each(r,function(e,t){i+='<li rel="'+e+'"'+("<a></a>"===t?'class="hide is-hidden"':"")+">"+t+"</li>"}),this.multiple||0!==this.$element.find("option:selected").length||this.options.title||this.$element.find("option").eq(0).prop("selected",!0).attr("selected","selected"),x(i)},createA:function(e,t,i){return'<a tabindex="0" class="'+t+'" style="'+i+'">'+e+'<i class="'+this.options.iconBase+" "+this.options.tickIcon+' icon-ok check-mark"></i></a>'},render:function(e){var s=this;!1!==e&&this.$element.find("option").each(function(e){s.setDisabled(e,x(this).is(":disabled")||x(this).parent().is(":disabled")),s.setSelected(e,x(this).is(":selected"))}),this.tabIndex();var t=this.$element.find("option:selected").map(function(){var e,t=x(this),i=t.data("icon")&&s.options.showIcon?'<i class="'+s.options.iconBase+" "+t.data("icon")+'"></i> ':"";return e=s.options.showSubtext&&t.attr("data-subtext")&&!s.multiple?' <small class="muted text-muted">'+t.data("subtext")+"</small>":"",t.data("content")&&s.options.showContent?t.data("content"):t.attr("title")!==undefined?t.attr("title"):i+t.html()+e}).toArray(),i=this.multiple?t.join(this.options.multipleSeparator):t[0];if(this.multiple&&-1<this.options.selectedTextFormat.indexOf("count")){var n=this.options.selectedTextFormat.split(">"),o=this.options.hideDisabled?":not([disabled])":"";(1<n.length&&t.length>n[1]||1==n.length&&2<=t.length)&&(i=this.options.countSelectedText.replace("{0}",t.length).replace("{1}",this.$element.find('option:not([data-divider="true"]):not([data-hidden="true"])'+o).length))}this.options.title=this.$element.attr("title"),i||(i=this.options.title!==undefined?this.options.title:this.options.noneSelectedText),this.$button.attr("title",x.trim(i)),this.$newElement.find(".filter-option").html(i)},setStyle:function(e,t){this.$element.attr("class")&&this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device/gi,""));var i=e||this.options.style;"add"==t?this.$button.addClass(i):"remove"==t?this.$button.removeClass(i):(this.$button.removeClass(this.options.style),this.$button.addClass(i))},liHeight:function(){if(!1!==this.options.size){var e=this.$menu.parent().clone().find("> .dropdown-toggle").prop("autofocus",!1).end().appendTo("body"),t=e.addClass("open").find("> .dropdown-menu"),i=t.find("li > a").outerHeight(),s=this.options.header?t.find(".popover-title").outerHeight():0,n=this.options.liveSearch?t.find(".bootstrap-select-searchbox").outerHeight():0,o=this.options.actionsBox?t.find(".bs-actionsbox").outerHeight():0;e.remove(),this.$newElement.data("liHeight",i).data("headerHeight",s).data("searchHeight",n).data("actionsHeight",o)}},setSize:function(){var i,s,n,o=this,a=this.$menu,l=a.find(".inner"),e=this.$newElement.outerHeight(),d=this.$newElement.data("liHeight"),r=this.$newElement.data("headerHeight"),h=this.$newElement.data("searchHeight"),c=this.$newElement.data("actionsHeight"),t=a.find("li .divider").outerHeight(!0),p=parseInt(a.css("padding-top"))+parseInt(a.css("padding-bottom"))+parseInt(a.css("border-top-width"))+parseInt(a.css("border-bottom-width")),u=this.options.hideDisabled?":not(.disabled)":"",m=x(window),f=p+parseInt(a.css("margin-top"))+parseInt(a.css("margin-bottom"))+2,v=function(){s=o.$newElement.offset().top-m.scrollTop(),n=m.height()-s-e};if(v(),this.options.header&&a.css("padding-top",0),"auto"==this.options.size){var b=function(){var e,t=o.$lis.not(".hide");v(),i=n-f,o.options.dropupAuto&&o.$newElement.toggleClass("dropup",n<s&&i-f<a.height()),o.$newElement.hasClass("dropup")&&(i=s-f),e=3<t.length+t.find("dt").length?3*d+f-2:0,a.css({"max-height":i+"px",overflow:"hidden","min-height":e+r+h+c+"px"}),l.css({"max-height":i-r-h-c-p+"px","overflow-y":"auto","min-height":Math.max(e-p,0)+"px"})};b(),this.$searchbox.off("input.getSize propertychange.getSize").on("input.getSize propertychange.getSize",b),x(window).off("resize.getSize").on("resize.getSize",b),x(window).off("scroll.getSize").on("scroll.getSize",b)}else if(this.options.size&&"auto"!=this.options.size&&a.find("li"+u).length>this.options.size){var $=a.find("li"+u+" > *").filter(":not(.div-contain)").slice(0,this.options.size).last().parent().index(),g=a.find("li").slice(0,$+1).find(".div-contain").length;i=d*this.options.size+g*t+p,o.options.dropupAuto&&this.$newElement.toggleClass("dropup",n<s&&i<a.height()),a.css({"max-height":i+r+h+c+"px",overflow:"hidden"}),l.css({"max-height":i-p+"px","overflow-y":"auto"})}},setWidth:function(){if("auto"==this.options.width){this.$menu.css("min-width","0");var e=this.$newElement.clone().appendTo("body"),t=e.find("> .dropdown-menu").css("width"),i=e.css("width","auto").find("> button").css("width");e.remove(),this.$newElement.css("width",Math.max(parseInt(t),parseInt(i))+"px")}else"fit"==this.options.width?(this.$menu.css("min-width",""),this.$newElement.css("width","").addClass("fit-width")):this.options.width?(this.$menu.css("min-width",""),this.$newElement.css("width",this.options.width)):(this.$menu.css("min-width",""),this.$newElement.css("width",""));this.$newElement.hasClass("fit-width")&&"fit"!==this.options.width&&this.$newElement.removeClass("fit-width")},selectPosition:function(){var t,i,s=this,n=x("<div />"),e=function(e){n.addClass(e.attr("class").replace(/form-control/gi,"")).toggleClass("dropup",e.hasClass("dropup")),t=e.offset(),i=e.hasClass("dropup")?0:e[0].offsetHeight,n.css({top:t.top+i,left:t.left,width:e[0].offsetWidth,position:"absolute"})};this.$newElement.on("click",function(){s.isDisabled()||(e(x(this)),n.appendTo(s.options.container),n.toggleClass("open",!x(this).hasClass("open")),n.append(s.$menu))}),x(window).resize(function(){e(s.$newElement)}),x(window).on("scroll",function(){e(s.$newElement)}),x("html").on("click",function(e){x(e.target).closest(s.$newElement).length<1&&n.removeClass("open")})},mobile:function(){this.$element.addClass("mobile-device").appendTo(this.$newElement),this.options.container&&this.$menu.hide()},refresh:function(){this.$lis=null,this.reloadLi(),this.render(),this.setWidth(),this.setStyle(),this.checkDisabled(),this.liHeight()},update:function(){this.reloadLi(),this.setWidth(),this.setStyle(),this.checkDisabled(),this.liHeight()},setSelected:function(e,t){null==this.$lis&&(this.$lis=this.$menu.find("li")),x(this.$lis[e]).toggleClass("selected",t)},setDisabled:function(e,t){null==this.$lis&&(this.$lis=this.$menu.find("li")),t?x(this.$lis[e]).addClass("disabled").find("a").attr("href","#").attr("tabindex",-1):x(this.$lis[e]).removeClass("disabled").find("a").removeAttr("href").attr("tabindex",0)},isDisabled:function(){return this.$element.is(":disabled")},checkDisabled:function(){var e=this;this.isDisabled()?this.$button.addClass("disabled").attr("tabindex",-1):(this.$button.hasClass("disabled")&&this.$button.removeClass("disabled"),-1==this.$button.attr("tabindex")&&(this.$element.data("tabindex")||this.$button.removeAttr("tabindex"))),this.$button.click(function(){return!e.isDisabled()})},tabIndex:function(){this.$element.is("[tabindex]")&&(this.$element.data("tabindex",this.$element.attr("tabindex")),this.$button.attr("tabindex",this.$element.data("tabindex")))},clickListener:function(){var v=this;x("body").on("touchstart.dropdown",".dropdown-menu",function(e){e.stopPropagation()}),this.$newElement.on("click",function(){v.setSize(),v.options.liveSearch||v.multiple||setTimeout(function(){v.$menu.find(".selected a").focus()},10)}),this.$menu.on("click","li a",function(e){var t=x(this).parent().index(),i=v.$element.val(),s=v.$element.prop("selectedIndex");if(v.multiple&&e.stopPropagation(),e.preventDefault(),!v.isDisabled()&&!x(this).parent().hasClass("disabled")){var n=v.$element.find("option"),o=n.eq(t),a=o.prop("selected"),l=o.parent("optgroup"),d=v.options.maxOptions,r=l.data("maxOptions")||!1;if(v.multiple){if(o.prop("selected",!a),v.setSelected(t,!a),!1!==d||!1!==r){var h=d<n.filter(":selected").length,c=r<l.find("option:selected").length,p=v.options.maxOptionsText,u=p[0].replace("{n}",d),m=p[1].replace("{n}",r),f=x('<div class="notify"></div>');(d&&h||r&&c)&&(p[2]&&(u=u.replace("{var}",p[2][1<d?0:1]),m=m.replace("{var}",p[2][1<r?0:1])),o.prop("selected",!1),v.$menu.append(f),d&&h&&(f.append(x("<div>"+u+"</div>")),v.$element.trigger("maxReached.bs.select")),r&&c&&(f.append(x("<div>"+m+"</div>")),v.$element.trigger("maxReachedGrp.bs.select")),setTimeout(function(){v.setSelected(t,!1)},10),f.delay(750).fadeOut(300,function(){x(this).remove()}))}}else n.prop("selected",!1),o.prop("selected",!0),v.$menu.find(".selected").removeClass("selected"),v.setSelected(t,!0);v.multiple?v.options.liveSearch&&v.$searchbox.focus():v.$button.focus(),(i!=v.$element.val()&&v.multiple||s!=v.$element.prop("selectedIndex")&&!v.multiple)&&v.$element.change()}}),this.$menu.on("click","li.disabled a, li dt, li .div-contain, .popover-title, .popover-title :not(.close)",function(e){e.target==this&&(e.preventDefault(),e.stopPropagation(),v.options.liveSearch?v.$searchbox.focus():v.$button.focus())}),this.$menu.on("click",".popover-title .close",function(){v.$button.focus()}),this.$searchbox.on("click",function(e){e.stopPropagation()}),this.$menu.on("click",".actions-btn",function(e){v.options.liveSearch?v.$searchbox.focus():v.$button.focus(),e.preventDefault(),e.stopPropagation(),x(this).is(".bs-select-all")?v.selectAll():v.deselectAll(),v.$element.change()}),this.$element.change(function(){v.render(!1)})},liveSearchListener:function(){var t=this,e=x('<li class="no-results"></li>');this.$newElement.on("click.dropdown.data-api",function(){t.$menu.find(".active").removeClass("active"),t.$searchbox.val()&&(t.$searchbox.val(""),t.$lis.not(".is-hidden").removeClass("hide"),e.parent().length&&e.remove()),t.multiple||t.$menu.find(".selected").addClass("active"),setTimeout(function(){t.$searchbox.focus()},10)}),this.$searchbox.on("input propertychange",function(){t.$searchbox.val()?(t.$lis.not(".is-hidden").removeClass("hide").find("a").not(":icontains("+t.$searchbox.val()+")").parent().addClass("hide"),t.$menu.find("li").filter(":visible:not(.no-results)").length?e.parent().length&&e.remove():(e.parent().length&&e.remove(),e.html(t.options.noneResultsText+' "'+t.$searchbox.val()+'"').show(),t.$menu.find("li").last().after(e))):(t.$lis.not(".is-hidden").removeClass("hide"),e.parent().length&&e.remove()),t.$menu.find("li.active").removeClass("active"),t.$menu.find("li").filter(":visible:not(.divider)").eq(0).addClass("active").find("a").focus(),x(this).focus()}),this.$menu.on("mouseenter","a",function(e){t.$menu.find(".active").removeClass("active"),x(e.currentTarget).parent().not(".disabled").addClass("active")}),this.$menu.on("mouseleave","a",function(){t.$menu.find(".active").removeClass("active")})},val:function(e){return e!==undefined?(this.$element.val(e),this.$element.change(),this.$element):this.$element.val()},selectAll:function(){null==this.$lis&&(this.$lis=this.$menu.find("li")),this.$element.find("option:enabled").prop("selected",!0),x(this.$lis).filter(":not(.disabled)").addClass("selected"),this.render(!1)},deselectAll:function(){null==this.$lis&&(this.$lis=this.$menu.find("li")),this.$element.find("option:enabled").prop("selected",!1),x(this.$lis).filter(":not(.disabled)").removeClass("selected"),this.render(!1)},keydown:function(e){var t,i,s,n,o,a,l,d,r,h,c,p,u={32:" ",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",59:";",65:"a",66:"b",67:"c",68:"d",69:"e",70:"f",71:"g",72:"h",73:"i",74:"j",75:"k",76:"l",77:"m",78:"n",79:"o",80:"p",81:"q",82:"r",83:"s",84:"t",85:"u",86:"v",87:"w",88:"x",89:"y",90:"z",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9"};if(s=(t=x(this)).parent(),t.is("input")&&(s=t.parent().parent()),(h=s.data("this")).options.liveSearch&&(s=t.parent().parent()),h.options.container&&(s=h.$menu),i=x("[role=menu] li:not(.divider) a",s),!(p=h.$menu.parent().hasClass("open"))&&/([0-9]|[A-z])/.test(String.fromCharCode(e.keyCode))&&(h.options.container?h.$newElement.trigger("click"):(h.setSize(),h.$menu.parent().addClass("open"),p=h.$menu.parent().hasClass("open")),h.$searchbox.focus()),h.options.liveSearch&&(/(^9$|27)/.test(e.keyCode)&&p&&0===h.$menu.find(".active").length&&(e.preventDefault(),h.$menu.parent().removeClass("open"),h.$button.focus()),i=x("[role=menu] li:not(.divider):visible",s),t.val()||/(38|40)/.test(e.keyCode)||0===i.filter(".active").length&&(i=h.$newElement.find("li").filter(":icontains("+u[e.keyCode]+")"))),i.length){if(/(38|40)/.test(e.keyCode))n=i.index(i.filter(":focus")),a=i.parent(":not(.disabled):visible").first().index(),l=i.parent(":not(.disabled):visible").last().index(),o=i.eq(n).parent().nextAll(":not(.disabled):visible").eq(0).index(),d=i.eq(n).parent().prevAll(":not(.disabled):visible").eq(0).index(),r=i.eq(o).parent().prevAll(":not(.disabled):visible").eq(0).index(),h.options.liveSearch&&(i.each(function(e){x(this).is(":not(.disabled)")&&x(this).data("index",e)}),n=i.index(i.filter(".active")),a=i.filter(":not(.disabled):visible").first().data("index"),l=i.filter(":not(.disabled):visible").last().data("index"),o=i.eq(n).nextAll(":not(.disabled):visible").eq(0).data("index"),d=i.eq(n).prevAll(":not(.disabled):visible").eq(0).data("index"),r=i.eq(o).prevAll(":not(.disabled):visible").eq(0).data("index")),c=t.data("prevIndex"),38==e.keyCode&&(h.options.liveSearch&&(n-=1),n!=r&&d<n&&(n=d),n<a&&(n=a),n==c&&(n=l)),40==e.keyCode&&(h.options.liveSearch&&(n+=1),-1==n&&(n=0),n!=r&&n<o&&(n=o),l<n&&(n=l),n==c&&(n=a)),t.data("prevIndex",n),h.options.liveSearch?(e.preventDefault(),t.is(".dropdown-toggle")||(i.removeClass("active"),i.eq(n).addClass("active").find("a").focus(),t.focus())):i.eq(n).focus();else if(!t.is("input")){var m,f=[];i.each(function(){x(this).parent().is(":not(.disabled)")&&x.trim(x(this).text().toLowerCase()).substring(0,1)==u[e.keyCode]&&f.push(x(this).parent().index())}),m=x(document).data("keycount"),m++,x(document).data("keycount",m),x.trim(x(":focus").text().toLowerCase()).substring(0,1)!=u[e.keyCode]?(m=1,x(document).data("keycount",m)):m>=f.length&&(x(document).data("keycount",0),m>f.length&&(m=1)),i.eq(f[m-1]).focus()}/(13|32|^9$)/.test(e.keyCode)&&p&&(/(32)/.test(e.keyCode)||e.preventDefault(),h.options.liveSearch?/(32)/.test(e.keyCode)||(h.$menu.find(".active a").click(),t.focus()):x(":focus").click(),x(document).data("keycount",0)),(/(^9$|27)/.test(e.keyCode)&&p&&(h.multiple||h.options.liveSearch)||/(27)/.test(e.keyCode)&&!p)&&(h.$menu.parent().removeClass("open"),h.$button.focus())}},hide:function(){this.$newElement.hide()},show:function(){this.$newElement.show()},destroy:function(){this.$newElement.remove(),this.$element.remove()}},x.fn.selectpicker=function(o,a){var l,d=arguments,e=this.each(function(){if(x(this).is("select")){var e=x(this),t=e.data("selectpicker"),i="object"==typeof o&&o;if(t){if(i)for(var s in i)t.options[s]=i[s]}else e.data("selectpicker",t=new r(this,i,a));if("string"==typeof o){var n=o;t[n]instanceof Function?([].shift.apply(d),l=t[n].apply(t,d)):l=t.options[n]}}});return l!==undefined?l:e},x.fn.selectpicker.defaults={style:"btn-default",size:"auto",title:null,selectedTextFormat:"values",noneSelectedText:"Nothing selected",noneResultsText:"No results match",countSelectedText:"{0} of {1} selected",maxOptionsText:["Limit reached ({n} {var} max)","Group limit reached ({n} {var} max)",["items","item"]],width:!1,container:!1,hideDisabled:!1,showSubtext:!1,showIcon:!0,showContent:!0,dropupAuto:!0,header:!1,liveSearch:!1,actionsBox:!1,multipleSeparator:", ",iconBase:"glyphicon",tickIcon:"glyphicon-ok",maxOptions:!1},x(document).data("keycount",0).on("keydown",".bootstrap-select [data-toggle=dropdown], .bootstrap-select [role=menu], .bootstrap-select-searchbox input",r.prototype.keydown).on("focusin.modal",".bootstrap-select [data-toggle=dropdown], .bootstrap-select [role=menu], .bootstrap-select-searchbox input",function(e){e.stopPropagation()})}(window.jQuery);