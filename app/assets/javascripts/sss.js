// JS Module Pattern:
// http://j.mp/module-pattern

// Redefine: $, window, document, undefined.
var APP = (function($, window, document, undefined) {
  // Automatically calls all functions in APP.init
  $(document).ready(function() {
    APP.go();
  });

  // For use only inside APP.
  var PRIVATE_CONSTANT_1 = 'foo';
  var PRIVATE_CONSTANT_2 = 'bar';

  // Expose contents of APP.
  return {
    // APP.go
    go: function() {
      var i, j = this.init;

      for (i in j) {
        // Run everything in APP.init
        j.hasOwnProperty(i) && j[i]();
      }
    },
    // APP.init
    init: {
      call_automatically_one: function() {
        // Called on page-load.
        // Can still be called individually, via:
        // APP.init.call_automatically_one();
      },
      call_automatically_two: function() {
        // Called on page-load.
        // Can still be called individually, via:
        // APP.init.call_automatically_two();
      }
    },
    util: {
      call_specifically_one: function() {
        // Must be called individually, via:
        // APP.util.call_specifically_one();
      },
      call_specifically_two: function() {
        // Must be called individually, via:
        // APP.util.call_specifically_two();
      }
    }
  };
// Parameters: Zepto/jQuery, window, document.
})(typeof Zepto === 'function' ? Zepto : jQuery, this, this.document);
