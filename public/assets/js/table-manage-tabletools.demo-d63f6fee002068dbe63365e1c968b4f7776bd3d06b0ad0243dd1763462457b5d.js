var handleDataTableTools=function(){"use strict";0!==$("#data-table").length&&$("#data-table").DataTable({dom:'T<"clear">lfrtip',tableTools:{sSwfPath:"assets/plugins/DataTables/swf/copy_csv_xls_pdf.swf"}})},TableManageTableTools=function(){"use strict";return{init:function(){$.getScript("assets/plugins/DataTables/js/jquery.dataTables.js").done(function(){$.getScript("assets/plugins/DataTables/js/dataTables.tableTools.js").done(function(){handleDataTableTools()})})}}}();