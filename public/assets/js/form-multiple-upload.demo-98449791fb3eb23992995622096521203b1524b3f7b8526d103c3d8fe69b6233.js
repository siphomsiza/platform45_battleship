var handleJqueryFileUpload=function(){$("#fileupload").fileupload({autoUpload:!1,disableImageResize:/Android(?!.*Chrome)|Opera/.test(window.navigator.userAgent),maxFileSize:5e6,acceptFileTypes:/(\.|\/)(gif|jpe?g|png)$/i}),$("#fileupload").fileupload("option","redirect",window.location.href.replace(/\/[^\/]*$/,"/cors/result.html?%s")),$.support.cors&&$.ajax({type:"HEAD"}).fail(function(){$('<div class="alert alert-danger"/>').text("Upload server currently unavailable - "+new Date).appendTo("#fileupload")}),$("#fileupload").addClass("fileupload-processing"),$.ajax({url:$("#fileupload").fileupload("option","url"),dataType:"json",context:$("#fileupload")[0]}).always(function(){$(this).removeClass("fileupload-processing")}).done(function(e){$(this).fileupload("option","done").call(this,$.Event("done"),{result:e})})},FormMultipleUpload=function(){"use strict";return{init:function(){$.getScript("assets/plugins/jquery-file-upload/js/vendor/jquery.ui.widget.js").done(function(){$.getScript("assets/plugins/jquery-file-upload/js/vendor/tmpl.min.js").done(function(){$.getScript("assets/plugins/jquery-file-upload/js/vendor/load-image.min.js").done(function(){$.getScript("assets/plugins/jquery-file-upload/js/vendor/canvas-to-blob.min.js").done(function(){$.getScript("assets/plugins/jquery-file-upload/blueimp-gallery/jquery.blueimp-gallery.min.js").done(function(){$.getScript("assets/plugins/jquery-file-upload/js/jquery.iframe-transport.js").done(function(){$.getScript("assets/plugins/jquery-file-upload/js/jquery.fileupload.js").done(function(){$.getScript("assets/plugins/jquery-file-upload/js/jquery.fileupload-process.js").done(function(){$.getScript("assets/plugins/jquery-file-upload/js/jquery.fileupload-image.js").done(function(){$.getScript("assets/plugins/jquery-file-upload/js/jquery.fileupload-audio.js").done(function(){$.getScript("assets/plugins/jquery-file-upload/js/jquery.fileupload-video.js").done(function(){$.getScript("assets/plugins/jquery-file-upload/js/jquery.fileupload-validate.js").done(function(){$.getScript("assets/plugins/jquery-file-upload/js/jquery.fileupload-ui.js").done(function(){$.browser.msie&&8<=parseFloat($.browser.version)&&parseFloat($.browser.version)<10?$.getScript("assets/plugins/jquery-file-upload/js/cors/jquery.xdr-transport.js").done(function(){handleJqueryFileUpload()}):handleJqueryFileUpload()})})})})})})})})})})})})})}}}();