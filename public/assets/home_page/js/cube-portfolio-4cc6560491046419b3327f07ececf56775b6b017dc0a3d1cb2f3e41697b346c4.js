!function(i){"use strict";i("#grid-container").cubeportfolio({filters:"#filters-container",loadMore:"#loadMore-container",loadMoreAction:"click",layoutMode:"grid",defaultFilter:"*",animationType:"quicksand",gapHorizontal:15,gapVertical:15,gridAdjustment:"responsive",mediaQueries:[{width:1100,cols:3},{width:800,cols:3},{width:500,cols:2},{width:320,cols:1}],caption:"overlayBottomReveal",displayType:"sequentially",displayTypeSpeed:80,lightboxDelegate:".cbp-lightbox",lightboxGallery:!0,lightboxTitleSrc:"data-title",lightboxCounter:'<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',singlePageDelegate:".cbp-singlePage",singlePageDeeplinking:!0,singlePageStickyNavigation:!0,singlePageCounter:'<div class="cbp-popup-singlePage-counter">{{current}} of {{total}}</div>',singlePageCallback:function(e){var t=this;i.ajax({url:e,type:"GET",dataType:"html",timeout:1e4}).done(function(e){t.updateSinglePage(e)}).fail(function(){t.updateSinglePage("AJAX Error! Please refresh the page!")})}}),i("#fullwidth-container").cubeportfolio({filters:"#filters-container",loadMore:"#loadMore-container",loadMoreAction:"auto",layoutMode:"grid",defaultFilter:"*",animationType:"rotateSides",gapHorizontal:0,gapVertical:0,gridAdjustment:"responsive",mediaQueries:[{width:1600,cols:5},{width:1200,cols:4},{width:800,cols:3},{width:500,cols:2},{width:320,cols:1}],caption:"zoom",displayType:"lazyLoading",displayTypeSpeed:100,lightboxDelegate:".cbp-lightbox",lightboxGallery:!0,lightboxTitleSrc:"data-title",lightboxCounter:'<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>'}),i("#masnory-container").cubeportfolio({filters:"#filters-container",layoutMode:"grid",defaultFilter:"*",animationType:"flipOutDelay",gapHorizontal:20,gapVertical:20,gridAdjustment:"responsive",mediaQueries:[{width:1100,cols:4},{width:800,cols:3},{width:500,cols:2},{width:320,cols:1}],caption:"overlayBottomAlong",displayType:"bottomToTop",displayTypeSpeed:100,lightboxDelegate:".cbp-lightbox",lightboxGallery:!0,lightboxTitleSrc:"data-title",lightboxCounter:'<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>'})}(jQuery,window,document);