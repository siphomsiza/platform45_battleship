!function(i){"use strict";var e=function(t){this.init("wysihtml5",t,e.defaults),this.options.wysihtml5=i.extend({},e.defaults.wysihtml5,t.wysihtml5)};i.fn.editableutils.inherit(e,i.fn.editabletypes.abstractinput),i.extend(e.prototype,{render:function(){var t=i.Deferred();return this.$input.attr("id","textarea_"+(new Date).getTime()),this.setClass(),this.setAttr("placeholder"),i.extend(this.options.wysihtml5,{events:{load:function(){t.resolve()}}}),this.$input.wysihtml5(this.options.wysihtml5),/msie\s*(8|7|6)/.test(navigator.userAgent.toLowerCase())&&this.$input.before("<br><br>"),t.promise()},value2html:function(t,e){i(e).html(t)},html2value:function(t){return t},value2input:function(t){this.$input.data("wysihtml5").editor.setValue(t,!0)},activate:function(){this.$input.data("wysihtml5").editor.focus()}}),e.defaults=i.extend({},i.fn.editabletypes.abstractinput.defaults,{tpl:"<textarea></textarea>",inputclass:"editable-wysihtml5",placeholder:null,wysihtml5:{stylesheets:!1}}),i.fn.editabletypes.wysihtml5=e}(window.jQuery);