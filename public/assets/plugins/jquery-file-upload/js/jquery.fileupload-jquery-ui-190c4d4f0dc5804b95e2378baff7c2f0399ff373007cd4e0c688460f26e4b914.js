!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery","./jquery.fileupload-ui"],t):t(window.jQuery)}(function(t){"use strict";t.widget("blueimp.fileupload",t.blueimp.fileupload,{options:{processdone:function(t,e){e.context.find(".start").button("enable")},progress:function(t,e){e.context&&e.context.find(".progress").progressbar("option","value",parseInt(e.loaded/e.total*100,10))},progressall:function(e,n){var i=t(this);i.find(".fileupload-progress").find(".progress").progressbar("option","value",parseInt(n.loaded/n.total*100,10)).end().find(".progress-extended").each(function(){t(this).html((i.data("blueimp-fileupload")||i.data("fileupload"))._renderExtendedProgress(n))})}},_renderUpload:function(e,n){var i=this._super(e,n),r=t(window).width()>480;return i.find(".progress").empty().progressbar(),i.find(".start").button({icons:{primary:"ui-icon-circle-arrow-e"},text:r}),i.find(".cancel").button({icons:{primary:"ui-icon-cancel"},text:r}),i.hasClass("fade")&&i.hide(),i},_renderDownload:function(e,n){var i=this._super(e,n),r=t(window).width()>480;return i.find(".delete").button({icons:{primary:"ui-icon-trash"},text:r}),i.hasClass("fade")&&i.hide(),i},_startHandler:function(e){t(e.currentTarget).button("disable"),this._super(e)},_transition:function(e){var n=t.Deferred();return e.hasClass("fade")?e.fadeToggle(this.options.transitionDuration,this.options.transitionEasing,function(){n.resolveWith(e)}):n.resolveWith(e),n},_create:function(){this._super(),this.element.find(".fileupload-buttonbar").find(".fileinput-button").each(function(){var e=t(this).find("input:file").detach();t(this).button({icons:{primary:"ui-icon-plusthick"}}).append(e)}).end().find(".start").button({icons:{primary:"ui-icon-circle-arrow-e"}}).end().find(".cancel").button({icons:{primary:"ui-icon-cancel"}}).end().find(".delete").button({icons:{primary:"ui-icon-trash"}}).end().find(".progress").progressbar()},_destroy:function(){this.element.find(".fileupload-buttonbar").find(".fileinput-button").each(function(){var e=t(this).find("input:file").detach();t(this).button("destroy").append(e)}).end().find(".start").button("destroy").end().find(".cancel").button("destroy").end().find(".delete").button("destroy").end().find(".progress").progressbar("destroy"),this._super()}})});