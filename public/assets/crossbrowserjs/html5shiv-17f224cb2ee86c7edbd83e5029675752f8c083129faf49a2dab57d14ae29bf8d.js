!function(e,o){function i(){var e=g.elements;return"string"==typeof e?e.split(" "):e}function l(e){var t=f[e[h]];return t||(t={},d++,e[h]=d,f[d]=t),t}function r(e,t,n){return t||(t=o),s?t.createElement(e):(n||(n=l(t)),(t=n.cache[e]?n.cache[e].cloneNode():u.test(e)?(n.cache[e]=n.createElem(e)).cloneNode():n.createElem(e)).canHaveChildren&&!m.test(e)?n.frag.appendChild(t):t)}function a(t,n){n.cache||(n.cache={},n.createElem=t.createElement,n.createFrag=t.createDocumentFragment,n.frag=n.createFrag()),t.createElement=function(e){return g.shivMethods?r(e,t,n):n.createElem(e)},t.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+i().join().replace(/\w+/g,function(e){return n.createElem(e),n.frag.createElement(e),'c("'+e+'")'})+");return n}")(g,n.frag)}function t(e){e||(e=o);var t=l(e);if(g.shivCSS&&!c&&!t.hasCSS){var n,r=e;n=r.createElement("p"),r=r.getElementsByTagName("head")[0]||r.documentElement,n.innerHTML="x<style>article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}</style>",n=r.insertBefore(n.lastChild,r.firstChild),t.hasCSS=!!n}return s||a(e,t),e}var c,s,n=e.html5||{},m=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,u=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,h="_html5shiv",d=0,f={};!function(){try{var e,t=o.createElement("a");if(t.innerHTML="<xyz></xyz>",c="hidden"in t,!(e=1==t.childNodes.length)){o.createElement("a");var n=o.createDocumentFragment();e="undefined"==typeof n.cloneNode||"undefined"==typeof n.createDocumentFragment||"undefined"==typeof n.createElement}s=e}catch(r){s=c=!0}}();var g={elements:n.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",version:"3.6.2pre",shivCSS:!1!==n.shivCSS,supportsUnknownElements:s,shivMethods:!1!==n.shivMethods,type:"default",shivDocument:t,createElement:r,createDocumentFragment:function(e,t){if(e||(e=o),s)return e.createDocumentFragment();for(var n=(t=t||l(e)).frag.cloneNode(),r=0,a=i(),c=a.length;r<c;r++)n.createElement(a[r]);return n}};e.html5=g,t(o)}(this,document);