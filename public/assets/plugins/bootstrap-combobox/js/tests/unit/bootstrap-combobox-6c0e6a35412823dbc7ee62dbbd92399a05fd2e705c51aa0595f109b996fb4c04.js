$(function(){module("bootstrap-combobox"),test("should be defined on jquery object",function(){ok($(document.body).combobox,"combobox method is defined")}),test("should return element",function(){var e=$("<select />");ok($(e).combobox()[0]==e[0],"select returned")}),test("should build combobox from a select",function(){var e=$("<select />");e.combobox(),ok(e.data("combobox").$source,"has a source select"),ok(e.data("combobox").$container,"has a container"),ok(e.data("combobox").$element,"has a input element"),ok(e.data("combobox").$button,"has a button"),ok(e.data("combobox").$target,"has a target")}),test("should listen to an input",function(){var e=$("<select />").combobox().data("combobox"),o=e.$element;ok($._data(o[0],"events").blur,"has a blur event"),ok($._data(o[0],"events").keypress,"has a keypress event"),ok($._data(o[0],"events").keyup,"has a keyup event"),e.eventSupported("keydown")?ok($._data(o[0],"events").keydown,"has a keydown event"):ok($._data(o[0],"events").keydown,"does not have a keydown event"),e.$menu.remove()}),test("should listen to an button",function(){var e=$("<select />").combobox().data("combobox").$button;ok($._data(e[0],"events").click,"has a click event")}),test("should create a menu",function(){var e=$("<select />");ok(e.combobox().data("combobox").$menu,"has a menu")}),test("should listen to the menu",function(){var e=$("<select />").combobox().data("combobox").$menu;ok($._data(e[0],"events").mouseover,"has a mouseover(pseudo: mouseenter)"),ok($._data(e[0],"events").click,"has a click")}),test("should show menu when query entered",function(){var e=$('<select><option></option><option value="aa">aa</option><option value="ab">ab</option><option value="ac">ac</option></select>').appendTo("body"),o=e.combobox().data("combobox").$element,t=e.data("combobox");o.val("a"),t.lookup(),ok(t.$menu.is(":visible"),"menu is visible"),equal(t.$menu.find("li").length,3,"has 3 items in menu"),equal(t.$menu.find(".active").length,1,"one item is active"),t.$menu.remove(),e.remove(),t.$container.remove()}),test("should hide menu when query entered",function(){stop();var e=$('<select><option></option><option value="aa">aa</option><option value="ab">ab</option><option value="ac">ac</option></select>').appendTo("body"),o=e.combobox().data("combobox").$element,t=e.data("combobox");o.val("a"),t.lookup(),ok(t.$menu.is(":visible"),"menu is visible"),equal(t.$menu.find("li").length,3,"has 3 items in menu"),equal(t.$menu.find(".active").length,1,"one item is active"),o.blur(),setTimeout(function(){ok(!t.$menu.is(":visible"),"menu is no longer visible"),start()},200),t.$menu.remove(),e.remove(),t.$container.remove()}),test("should set next item when down arrow is pressed",function(){var e=$("<select><option></option><option>aa</option><option>ab</option><option>ac</option></select>").appendTo("body"),o=e.combobox().data("combobox").$element,t=e.data("combobox");o.val("a"),t.lookup(),ok(t.$menu.is(":visible"),"menu is visible"),equal(t.$menu.find("li").length,3,"has 3 items in menu"),equal(t.$menu.find(".active").length,1,"one item is active"),ok(t.$menu.find("li").first().hasClass("active"),"first item is active"),o.trigger({type:"keypress",keyCode:40}),ok(t.$menu.find("li").first().next().hasClass("active"),"second item is active"),o.trigger({type:"keypress",keyCode:38}),ok(t.$menu.find("li").first().hasClass("active"),"first item is active"),t.$menu.remove(),e.remove(),t.$container.remove()}),test("should set input and select value to selected item",function(){var e=$("<select><option></option><option>aa</option><option>ab</option><option>ac</option></select>").appendTo("body"),o=e.combobox().data("combobox"),t=o.$element,a=o.$source,n=o.$target;t.val("a"),o.lookup(),$(o.$menu.find("li")[2]).mouseover().click(),equal(t.val(),"ac","input value was correctly set"),equal(a.val(),"ac","select value was correctly set"),equal(n.val(),"ac","hidden field value was correctly set"),ok(!o.$menu.is(":visible"),"the menu was hidden"),o.$menu.remove(),e.remove(),o.$container.remove()}),test("should show menu when no item is selected and button is clicked",function(){var e=$("<select><option></option><option>aa</option><option>ab</option><option>ac</option></select>").appendTo("body"),o=e.combobox().data("combobox").$button,t=e.data("combobox");o.click(),ok(t.$menu.is(":visible"),"menu is visible"),equal(t.$menu.find("li").length,3,"has 3 items in menu"),equal(t.$menu.find(".active").length,1,"one item is active"),t.$menu.remove(),e.remove(),t.$container.remove()}),test("should add class to container when an item is selected",function(){var e=$("<select><option></option><option>aa</option><option>ab</option><option>ac</option></select>"),o=e.combobox().data("combobox").$element,t=e.data("combobox");o.val("a"),t.lookup(),$(t.$menu.find("li")[2]).mouseover().click(),ok(t.$container.hasClass("combobox-selected"),"container has selected class"),t.$menu.remove()}),test("should clear and focus input and select and remove class from container when button is clicked when item is selected",function(){var e=$("<select><option></option><option>aa</option><option>ab</option><option>ac</option></select>"),o=e.combobox().data("combobox"),t=o.$element,a=o.$source,n=o.$target;t.val("a"),o.lookup(),$(o.$menu.find("li")[2]).mouseover().click(),equal(t.val(),"ac","input value was correctly set"),equal(a.val(),"ac","select value was correctly set"),equal(n.val(),"ac","hidden field value was correctly set"),o.$button.mouseover().click(),equal(t.val(),"","input value was cleared correctly"),equal(e.val(),"","select value was cleared correctly"),o.$menu.remove()}),test("should set as selected if select was selected before load",function(){var e=$("<select><option></option><option>aa</option><option selected>ab</option><option>ac</option></select>"),o=e.combobox().data("combobox").$element,t=e.combobox().data("combobox").$target;e.data("combobox");equal(o.val(),"ab","input value was correctly set"),equal(t.val(),"ab","hidden input value was correctly set"),equal(e.val(),"ab","select value was correctly set")}),test("should clear input on blur when value does not exist",function(){var e=$("<select><option>aa</option></select>"),o=e.combobox().data("combobox").$element,t=e.data("combobox");o.val("DOES NOT EXIST"),o.trigger("keyup"),o.trigger("blur"),equal(o.val(),"","input value was correctly set"),equal(e.val(),"aa","select value was correctly set"),t.$menu.remove()}),test("should set placeholder text on the input if specified text of no value option",function(){var e=$('<select><option value="">Pick One</option><option value="aa">aa</option><option value="ab">ab</option><option value="ac">ac</option></select>'),o=e.combobox().data("combobox").$element,t=e.data("combobox");equal(o.attr("placeholder"),"Pick One","input value was correctly set"),t.$menu.remove()}),test("should set placeholder text on the input if specified as an data attribute",function(){var e=$('<select data-placeholder="Type something..."><option></option><option>aa</option><option selected>ab</option><option>ac</option></select>'),o=e.combobox().data("combobox").$element,t=e.data("combobox");equal(o.attr("placeholder"),"Type something...","input value was correctly set"),t.$menu.remove()}),test("should set required attribute the input if specified on the select",function(){var e=$('<select required="required"><option></option><option>aa</option><option selected>ab</option><option>ac</option></select>'),o=e.combobox().data("combobox").$element,t=e.data("combobox");equal(o.attr("required"),"required","required was correctly set"),t.$menu.remove()}),test("should copy classes to the input if specified on the select",function(){var e=$('<select class="input-small"><option></option><option>aa</option><option selected>ab</option><option>ac</option></select>'),o=e.combobox().data("combobox").$element,t=e.data("combobox");equal(o.attr("class"),"input-small","class was correctly set"),t.$menu.remove()}),test("should copy rel attribute to the input if specified on the select",function(){var e=$('<select rel="tooltip"><option></option><option>aa</option><option selected>ab</option><option>ac</option></select>'),o=e.combobox().data("combobox").$element,t=e.data("combobox");equal(o.attr("rel"),"tooltip","rel was correctly set"),t.$menu.remove()}),test("should copy title attribute to the input if specified on the select",function(){var e=$('<select title="A title"><option></option><option>aa</option><option selected>ab</option><option>ac</option></select>'),o=e.combobox().data("combobox").$element,t=e.data("combobox");equal(o.attr("title"),"A title","title was correctly set"),t.$menu.remove()})});