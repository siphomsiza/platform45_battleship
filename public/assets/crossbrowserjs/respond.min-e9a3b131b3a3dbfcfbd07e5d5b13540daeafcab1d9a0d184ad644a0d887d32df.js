window.matchMedia=window.matchMedia||function(e){"use strict";var t,n=e.documentElement,a=n.firstElementChild||n.firstChild,s=e.createElement("body"),i=e.createElement("div");return i.id="mq-test-1",i.style.cssText="position:absolute;top:-100em",s.style.background="none",s.appendChild(i),function(e){return i.innerHTML='&shy;<style media="'+e+'"> #mq-test-1 { width: 42px; }</style>',n.insertBefore(s,a),t=42===i.offsetWidth,n.removeChild(s),{matches:t,media:e}}}(document),function(g){"use strict";function e(){L(!0)}var t={};if((g.respond=t).update=function(){},t.mediaQueriesSupported=g.matchMedia&&g.matchMedia("only all").matches,!t.mediaQueriesSupported){var x,E,w,T=g.document,C=T.documentElement,S=[],$=[],b=[],i={},R=30,M=T.getElementsByTagName("head")[0]||C,r=T.getElementsByTagName("base")[0],O=M.getElementsByTagName("link"),o=[],n=function(){for(var e=0;O.length>e;e++){var t=O[e],n=t.href,a=t.media,s=t.rel&&"stylesheet"===t.rel.toLowerCase();n&&s&&!i[n]&&(t.styleSheet&&t.styleSheet.rawCssText?(d(t.styleSheet.rawCssText,n,a),i[n]=!0):(!/^([a-zA-Z:]*\/\/)/.test(n)&&!r||n.replace(RegExp.$1,"").split("/")[0]===g.location.host)&&o.push({href:n,media:a}))}l()},l=function(){if(o.length){var t=o.shift();a(t.href,function(e){d(e,t.href,t.media),i[t.href]=!0,g.setTimeout(function(){l()},0)})}},d=function(e,t,n){var a=e.match(/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi),s=a&&a.length||0,i=function(e){return e.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,"$1"+t+"$2$3")},r=!s&&n;(t=t.substring(0,t.lastIndexOf("/"))).length&&(t+="/"),r&&(s=1);for(var o=0;o<s;o++){var l,d,m,h;r?(l=n,$.push(i(e))):(l=a[o].match(/@media *([^\{]+)\{([\S\s]+?)$/)&&RegExp.$1,$.push(RegExp.$2&&i(RegExp.$2))),h=(m=l.split(",")).length;for(var u=0;u<h;u++)d=m[u],S.push({media:d.split("(")[0].match(/(only\s+)?([a-zA-Z]+)\s?/)&&RegExp.$2||"all",rules:$.length-1,hasquery:-1<d.indexOf("("),minw:d.match(/\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:d.match(/\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}L()},B=function(){var e,t=T.createElement("div"),n=T.body,a=!1;return t.style.cssText="position:absolute;font-size:1em;width:1em",n||((n=a=T.createElement("body")).style.background="none"),n.appendChild(t),C.insertBefore(n,C.firstChild),e=t.offsetWidth,a?C.removeChild(n):n.removeChild(t),w=parseFloat(e)},L=function(e){var t="clientWidth",n=C[t],a="CSS1Compat"===T.compatMode&&n||T.body[t]||n,s={},i=O[O.length-1],r=(new Date).getTime();if(e&&x&&r-x<R)return g.clearTimeout(E),void(E=g.setTimeout(L,R));for(var o in x=r,S)if(S.hasOwnProperty(o)){var l=S[o],d=l.minw,m=l.maxw,h=null===d,u=null===m,c="em";d&&(d=parseFloat(d)*(-1<d.indexOf(c)?w||B():1)),m&&(m=parseFloat(m)*(-1<m.indexOf(c)?w||B():1)),l.hasquery&&(h&&u||!(h||d<=a)||!(u||a<=m))||(s[l.media]||(s[l.media]=[]),s[l.media].push($[l.rules]))}for(var p in b)b.hasOwnProperty(p)&&b[p]&&b[p].parentNode===M&&M.removeChild(b[p]);for(var f in s)if(s.hasOwnProperty(f)){var y=T.createElement("style"),v=s[f].join("\n");y.type="text/css",y.media=f,M.insertBefore(y,i.nextSibling),y.styleSheet?y.styleSheet.cssText=v:y.appendChild(T.createTextNode(v)),b.push(y)}},a=function(e,t){var n=s();n&&(n.open("GET",e,!0),n.onreadystatechange=function(){4!==n.readyState||200!==n.status&&304!==n.status||t(n.responseText)},4!==n.readyState&&n.send(null))},s=function(){var e=!1;try{e=new g.XMLHttpRequest}catch(T){e=new g.ActiveXObject("Microsoft.XMLHTTP")}return function(){return e}}();n(),t.update=n,g.addEventListener?g.addEventListener("resize",e,!1):g.attachEvent&&g.attachEvent("onresize",e)}}(this);