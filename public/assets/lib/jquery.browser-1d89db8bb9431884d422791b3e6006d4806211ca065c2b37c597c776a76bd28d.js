!function(e){var r,o=navigator.userAgent||"";e.uaMatch=function(e){e=e.toLowerCase();var r=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version)?[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+))?/.exec(e)||[];return{browser:r[1]||"",version:r[2]||"0"}},r=e.uaMatch(o),e.browser={},r.browser&&(e.browser[r.browser]=!0,e.browser.version=r.version),e.browser.webkit&&(e.browser.safari=!0)}(jQuery);