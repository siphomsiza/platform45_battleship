!function(t){"use strict";var o=t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype,l=t.Blob&&function(){try{return Boolean(new Blob)}catch(t){return!1}}(),u=l&&t.Uint8Array&&function(){try{return 100===new Blob([new Uint8Array(100)]).size}catch(t){return!1}}(),B=t.BlobBuilder||t.WebKitBlobBuilder||t.MozBlobBuilder||t.MSBlobBuilder,r=(l||B)&&t.atob&&t.ArrayBuffer&&t.Uint8Array&&function(t){var e,n,o,r,i,a;for(e=0<=t.split(",")[0].indexOf("base64")?atob(t.split(",")[1]):decodeURIComponent(t.split(",")[1]),n=new ArrayBuffer(e.length),o=new Uint8Array(n),r=0;r<e.length;r+=1)o[r]=e.charCodeAt(r);return i=t.split(",")[0].split(":")[1].split(";")[0],l?new Blob([u?o:n],{type:i}):((a=new B).append(n),a.getBlob(i))};t.HTMLCanvasElement&&!o.toBlob&&(o.mozGetAsFile?o.toBlob=function(t,e,n){n&&o.toDataURL&&r?t(r(this.toDataURL(e,n))):t(this.mozGetAsFile("blob",e))}:o.toDataURL&&r&&(o.toBlob=function(t,e,n){t(r(this.toDataURL(e,n)))})),"function"==typeof define&&define.amd?define(function(){return r}):t.dataURLtoBlob=r}(this);