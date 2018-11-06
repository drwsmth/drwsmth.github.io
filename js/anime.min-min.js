var $jscomp={scope:{}};$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(t,e,r){if(r.get||r.set)throw new TypeError("ES3 does not support getters and setters.");t!=Array.prototype&&t!=Object.prototype&&(t[e]=r.value)},$jscomp.getGlobal=function(t){return"undefined"!=typeof window&&window===t?t:"undefined"!=typeof global&&null!=global?global:t},$jscomp.global=$jscomp.getGlobal(this),$jscomp.SYMBOL_PREFIX="jscomp_symbol_",$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){},$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)},$jscomp.symbolCounter_=0,$jscomp.Symbol=function(t){return $jscomp.SYMBOL_PREFIX+(t||"")+$jscomp.symbolCounter_++},$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var t=$jscomp.global.Symbol.iterator;t||(t=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("iterator")),"function"!=typeof Array.prototype[t]&&$jscomp.defineProperty(Array.prototype,t,{configurable:!0,writable:!0,value:function(){return $jscomp.arrayIterator(this)}}),$jscomp.initSymbolIterator=function(){}},$jscomp.arrayIterator=function(t){var e=0;return $jscomp.iteratorPrototype(function(){return e<t.length?{done:!1,value:t[e++]}:{done:!0}})},$jscomp.iteratorPrototype=function(t){return $jscomp.initSymbolIterator(),t={next:t},t[$jscomp.global.Symbol.iterator]=function(){return this},t},$jscomp.array=$jscomp.array||{},$jscomp.iteratorFromArray=function(t,e){$jscomp.initSymbolIterator(),t instanceof String&&(t+="");var r=0,n={next:function(){if(r<t.length){var o=r++;return{value:e(o,t[o]),done:!1}}return n.next=function(){return{done:!0,value:void 0}},n.next()}};return n[Symbol.iterator]=function(){return n},n},$jscomp.polyfill=function(t,e,r,n){if(e){for(r=$jscomp.global,t=t.split("."),n=0;n<t.length-1;n++){var o=t[n];o in r||(r[o]={}),r=r[o]}t=t[t.length-1],n=r[t],e=e(n),e!=n&&null!=e&&$jscomp.defineProperty(r,t,{configurable:!0,writable:!0,value:e})}},$jscomp.polyfill("Array.prototype.keys",function(t){return t||function(){return $jscomp.iteratorFromArray(this,function(t){return t})}},"es6-impl","es3");var $jscomp$this=this;!function(t,e){"function"==typeof define&&define.amd?define([],e):"object"==typeof module&&module.exports?module.exports=e():t.anime=e()}(this,function(){function t(t){if(!Y.col(t))try{return document.querySelectorAll(t)}catch(t){}}function e(t,e){for(var r=t.length,n=2<=arguments.length?arguments[1]:void 0,o=[],a=0;a<r;a++)if(a in t){var i=t[a];e.call(n,i,a,t)&&o.push(i)}return o}function r(t){return t.reduce(function(t,e){return t.concat(Y.arr(e)?r(e):e)},[])}function n(e){return Y.arr(e)?e:(Y.str(e)&&(e=t(e)||e),e instanceof NodeList||e instanceof HTMLCollection?[].slice.call(e):[e])}function o(t,e){return t.some(function(t){return t===e})}function a(t){var e={},r;for(r in t)e[r]=t[r];return e}function i(t,e){var r=a(t),n;for(n in t)r[n]=e.hasOwnProperty(n)?e[n]:t[n];return r}function u(t,e){var r=a(t),n;for(n in e)r[n]=Y.und(t[n])?e[n]:t[n];return r}function s(t){t=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(t,e,r,n){return e+e+r+r+n+n});var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);t=parseInt(e[1],16);var r=parseInt(e[2],16),e=parseInt(e[3],16);return"rgba("+t+","+r+","+e+",1)"}function c(t){function e(t,e,r){return 0>r&&(r+=1),1<r&&--r,r<1/6?t+6*(e-t)*r:.5>r?e:r<2/3?t+(e-t)*(2/3-r)*6:t}var r=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(t);t=parseInt(r[1])/360;var n=parseInt(r[2])/100,o=parseInt(r[3])/100,r=r[4]||1;if(0==n)o=n=t=o;else{var a=.5>o?o*(1+n):o+n-o*n,i=2*o-a,o=e(i,a,t+1/3),n=e(i,a,t);t=e(i,a,t-1/3)}return"rgba("+255*o+","+255*n+","+255*t+","+r+")"}function f(t){if(t=/([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(t))return t[2]}function l(t){return-1<t.indexOf("translate")||"perspective"===t?"px":-1<t.indexOf("rotate")||-1<t.indexOf("skew")?"deg":void 0}function p(t,e){return Y.fnc(t)?t(e.target,e.id,e.total):t}function d(t,e){if(e in t.style)return getComputedStyle(t).getPropertyValue(e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase())||"0"}function m(t,e){return Y.dom(t)&&o(N,e)?"transform":Y.dom(t)&&(t.getAttribute(e)||Y.svg(t)&&t[e])?"attribute":Y.dom(t)&&"transform"!==e&&d(t,e)?"css":null!=t[e]?"object":void 0}function g(t,r){var n=l(r),n=-1<r.indexOf("scale")?1:0+n;if(!(t=t.style.transform))return n;for(var o=[],a=[],i=[],u=/(\w+)\((.+?)\)/g;o=u.exec(t);)a.push(o[1]),i.push(o[2]);return t=e(i,function(t,e){return a[e]===r}),t.length?t[0]:n}function y(t,e){switch(m(t,e)){case"transform":return g(t,e);case"css":return d(t,e);case"attribute":return t.getAttribute(e)}return t[e]||0}function h(t,e){var r=/^(\*=|\+=|-=)/.exec(t);if(!r)return t;var n=f(t)||0;switch(e=parseFloat(e),t=parseFloat(t.replace(r[0],"")),r[0][0]){case"+":return e+t+n;case"-":return e-t+n;case"*":return e*t+n}}function v(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function b(t){t=t.points;for(var e=0,r,n=0;n<t.numberOfItems;n++){var o=t.getItem(n);0<n&&(e+=v(r,o)),r=o}return e}function j(t){if(t.getTotalLength)return t.getTotalLength();switch(t.tagName.toLowerCase()){case"circle":return 2*Math.PI*t.getAttribute("r");case"rect":return 2*t.getAttribute("width")+2*t.getAttribute("height");case"line":return v({x:t.getAttribute("x1"),y:t.getAttribute("y1")},{x:t.getAttribute("x2"),y:t.getAttribute("y2")});case"polyline":return b(t);case"polygon":var e=t.points;return b(t)+v(e.getItem(e.numberOfItems-1),e.getItem(0))}}function x(t,e){function r(r){return r=void 0===r?0:r,t.el.getPointAtLength(1<=e+r?e+r:0)}var n=r(),o=r(-1),a=r(1);switch(t.property){case"x":return n.x;case"y":return n.y;case"angle":return 180*Math.atan2(a.y-o.y,a.x-o.x)/Math.PI}}function w(t,e){var r=/-?\d*\.?\d+/g,n;if(n=Y.pth(t)?t.totalLength:t,Y.col(n))if(Y.rgb(n)){var o=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(n);n=o?"rgba("+o[1]+",1)":n}else n=Y.hex(n)?s(n):Y.hsl(n)?c(n):void 0;else o=(o=f(n))?n.substr(0,n.length-o.length):n,n=e&&!/\s/g.test(n)?o+e:o;return n+="",{original:n,numbers:n.match(r)?n.match(r).map(Number):[0],strings:Y.str(t)||e?n.split(r):[]}}function A(t){return t=t?r(Y.arr(t)?t.map(n):n(t)):[],e(t,function(t,e,r){return r.indexOf(t)===e})}function I(t){var e=A(t);return e.map(function(t,r){return{target:t,id:r,total:e.length}})}function M(t,e){var r=a(e);if(Y.arr(t)){var o=t.length;2!==o||Y.obj(t[0])?Y.fnc(e.duration)||(r.duration=e.duration/o):t={value:t}}return n(t).map(function(t,r){return r=r?0:e.delay,t=Y.obj(t)&&!Y.pth(t)?t:{value:t},Y.und(t.delay)&&(t.delay=r),t}).map(function(t){return u(t,r)})}function S(t,e){var r={},n;for(n in t){var o=p(t[n],e);Y.arr(o)&&(o=o.map(function(t){return p(t,e)}),1===o.length&&(o=o[0])),r[n]=o}return r.duration=parseFloat(r.duration),r.delay=parseFloat(r.delay),r}function O(t){return Y.arr(t)?_.apply(this,t):V[t]}function P(t,e){var r;return t.tweens.map(function(n){n=S(n,e);var o=n.value,a=y(e.target,t.name),i=r?r.to.original:a,i=Y.arr(o)?o[0]:i,u=h(Y.arr(o)?o[1]:o,i),a=f(u)||f(i)||f(a);return n.from=w(i,a),n.to=w(u,a),n.start=r?r.end:t.offset,n.end=n.start+n.delay+n.duration,n.easing=O(n.easing),n.elasticity=(1e3-Math.min(Math.max(n.elasticity,1),999))/1e3,n.isPath=Y.pth(o),n.isColor=Y.col(n.from.original),n.isColor&&(n.round=1),r=n})}function k(t,n){return e(r(t.map(function(t){return n.map(function(e){var r=m(t.target,e.name);if(r){var n=P(e,t);e={type:r,property:e.name,animatable:t,tweens:n,duration:n[n.length-1].end,delay:n[0].delay}}else e=void 0;return e})})),function(t){return!Y.und(t)})}function F(t,e,r,n){var o="delay"===t;return e.length?(o?Math.min:Math.max).apply(Math,e.map(function(e){return e[t]})):o?n.delay:r.offset+n.delay+n.duration}function L(t){var e=i(E,t),r=i(T,t),n=I(t.targets),o=[],a=u(e,r),s;for(s in t)a.hasOwnProperty(s)||"targets"===s||o.push({name:s,offset:a.offset,tweens:M(t[s],r)});return t=k(n,o),u(e,{children:[],animatables:n,animations:t,duration:F("duration",t,e,r),delay:F("delay",t,e,r)})}function C(t){function r(){return window.Promise&&new Promise(function(t){return l=t})}function n(t){return m.reversed?m.duration-t:t}function o(t){for(var r=0,n={},o=m.animations,a=o.length;r<a;){var i=o[r],u=i.animatable,s=i.tweens,c=s.length-1,f=s[c];c&&(f=e(s,function(e){return t<e.end})[0]||f);for(var s=Math.min(Math.max(t-f.start-f.delay,0),f.duration)/f.duration,l=isNaN(s)?1:f.easing(s,f.elasticity),s=f.to.strings,p=f.round,c=[],g=void 0,g=f.to.numbers.length,y=0;y<g;y++){var h=void 0,h=f.to.numbers[y],v=f.from.numbers[y],h=f.isPath?x(f.value,l*h):v+l*(h-v);p&&(f.isColor&&2<y||(h=Math.round(h*p)/p)),c.push(h)}if(f=s.length)for(g=s[0],l=0;l<f;l++)p=s[l+1],y=c[l],isNaN(y)||(g=p?g+(y+p):g+(y+" "));else g=c[0];Z[i.type](u.target,i.property,g,n,u.id),i.currentValue=g,r++}if(r=Object.keys(n).length)for(o=0;o<r;o++)X||(X=d(document.body,"transform")?"transform":"-webkit-transform"),m.animatables[o].target.style[X]=n[o].join(" ");m.currentTime=t,m.progress=t/m.duration*100}function a(t){m[t]&&m[t](m)}function i(){m.remaining&&!0!==m.remaining&&m.remaining--}function u(t){var e=m.duration,u=m.offset,d=u+m.delay,g=m.currentTime,y=m.reversed,h=n(t);if(m.children.length){var v=m.children,b=v.length;if(h>=m.currentTime)for(var j=0;j<b;j++)v[j].seek(h);else for(;b--;)v[b].seek(h)}(h>=d||!e)&&(m.began||(m.began=!0,a("begin")),a("run")),h>u&&h<e?o(h):(h<=u&&0!==g&&(o(0),y&&i()),(h>=e&&g!==e||!e)&&(o(e),y||i())),a("update"),t>=e&&(m.remaining?(c=s,"alternate"===m.direction&&(m.reversed=!m.reversed)):(m.pause(),m.completed||(m.completed=!0,a("complete"),"Promise"in window&&(l(),p=r()))),f=0)}t=void 0===t?{}:t;var s,c,f=0,l=null,p=r(),m=L(t);return m.reset=function(){var t=m.direction,e=m.loop;for(m.currentTime=0,m.progress=0,m.paused=!0,m.began=!1,m.completed=!1,m.reversed="reverse"===t,m.remaining="alternate"===t&&1===e?2:e,o(0),t=m.children.length;t--;)m.children[t].reset()},m.tick=function(t){s=t,c||(c=s),u((f+s-c)*C.speed)},m.seek=function(t){u(n(t))},m.pause=function(){var t=q.indexOf(m);-1<t&&q.splice(t,1),m.paused=!0},m.play=function(){m.paused&&(m.paused=!1,c=0,f=n(m.currentTime),q.push(m),B||G())},m.reverse=function(){m.reversed=!m.reversed,c=0,f=n(m.currentTime)},m.restart=function(){m.pause(),m.reset(),m.play()},m.finished=p,m.reset(),m.autoplay&&m.play(),m}var E={update:void 0,begin:void 0,run:void 0,complete:void 0,loop:1,direction:"normal",autoplay:!0,offset:0},T={duration:1e3,delay:0,easing:"easeOutElastic",elasticity:500,round:0},N="translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY perspective".split(" "),X,Y={arr:function(t){return Array.isArray(t)},obj:function(t){return-1<Object.prototype.toString.call(t).indexOf("Object")},pth:function(t){return Y.obj(t)&&t.hasOwnProperty("totalLength")},svg:function(t){return t instanceof SVGElement},dom:function(t){return t.nodeType||Y.svg(t)},str:function(t){return"string"==typeof t},fnc:function(t){return"function"==typeof t},und:function(t){return void 0===t},hex:function(t){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)},rgb:function(t){return/^rgb/.test(t)},hsl:function(t){return/^hsl/.test(t)},col:function(t){return Y.hex(t)||Y.rgb(t)||Y.hsl(t)}},_=function(){function t(t,e,r){return(((1-3*r+3*e)*t+(3*r-6*e))*t+3*e)*t}return function(e,r,n,o){if(0<=e&&1>=e&&0<=n&&1>=n){var a=new Float32Array(11);if(e!==r||n!==o)for(var i=0;11>i;++i)a[i]=t(.1*i,e,n);return function(i){if(e===r&&n===o)return i;if(0===i)return 0;if(1===i)return 1;for(var u=0,s=1;10!==s&&a[s]<=i;++s)u+=.1;--s;var s=u+(i-a[s])/(a[s+1]-a[s])*.1,c=3*(1-3*n+3*e)*s*s+2*(3*n-6*e)*s+3*e;if(.001<=c){for(u=0;4>u&&0!==(c=3*(1-3*n+3*e)*s*s+2*(3*n-6*e)*s+3*e);++u)var f=t(s,e,n)-i,s=s-f/c;i=s}else if(0===c)i=s;else{var s=u,u=u+.1,l=0;do{f=s+(u-s)/2,c=t(f,e,n)-i,0<c?u=f:s=f}while(1e-7<Math.abs(c)&&10>++l);i=f}return t(i,r,o)}}}}(),V=function(){function t(t,e){return 0===t||1===t?t:-Math.pow(2,10*(t-1))*Math.sin(2*(t-1-e/(2*Math.PI)*Math.asin(1))*Math.PI/e)}var e="Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "),r={In:[[.55,.085,.68,.53],[.55,.055,.675,.19],[.895,.03,.685,.22],[.755,.05,.855,.06],[.47,0,.745,.715],[.95,.05,.795,.035],[.6,.04,.98,.335],[.6,-.28,.735,.045],t],Out:[[.25,.46,.45,.94],[.215,.61,.355,1],[.165,.84,.44,1],[.23,1,.32,1],[.39,.575,.565,1],[.19,1,.22,1],[.075,.82,.165,1],[.175,.885,.32,1.275],function(e,r){return 1-t(1-e,r)}],InOut:[[.455,.03,.515,.955],[.645,.045,.355,1],[.77,0,.175,1],[.86,0,.07,1],[.445,.05,.55,.95],[1,0,0,1],[.785,.135,.15,.86],[.68,-.55,.265,1.55],function(e,r){return.5>e?t(2*e,r)/2:1-t(-2*e+2,r)/2}]},n={linear:_(.25,.25,.75,.75)},o={},a;for(a in r)o.type=a,r[o.type].forEach(function(t){return function(r,o){n["ease"+t.type+e[o]]=Y.fnc(r)?r:_.apply($jscomp$this,r)}}(o)),o={type:o.type};return n}(),Z={css:function(t,e,r){return t.style[e]=r},attribute:function(t,e,r){return t.setAttribute(e,r)},object:function(t,e,r){return t[e]=r},transform:function(t,e,r,n,o){n[o]||(n[o]=[]),n[o].push(e+"("+r+")")}},q=[],B=0,G=function(){function t(){B=requestAnimationFrame(e)}function e(e){var r=q.length;if(r){for(var n=0;n<r;)q[n]&&q[n].tick(e),n++;t()}else cancelAnimationFrame(B),B=0}return t}();return C.version="2.2.0",C.speed=1,C.running=q,C.remove=function(t){t=A(t);for(var e=q.length;e--;)for(var r=q[e],n=r.animations,a=n.length;a--;)o(t,n[a].animatable.target)&&(n.splice(a,1),n.length||r.pause())},C.getValue=y,C.path=function(e,r){var n=Y.str(e)?t(e)[0]:e,o=r||100;return function(t){return{el:n,property:t,totalLength:j(n)*(o/100)}}},C.setDashoffset=function(t){var e=j(t);return t.setAttribute("stroke-dasharray",e),e},C.bezier=_,C.easings=V,C.timeline=function(t){var e=C(t);return e.pause(),e.duration=0,e.add=function(r){return e.children.forEach(function(t){t.began=!0,t.completed=!0}),n(r).forEach(function(r){var n=u(r,i(T,t||{}));n.targets=n.targets||t.targets,r=e.duration;var o=n.offset;n.autoplay=!1,n.direction=e.direction,n.offset=Y.und(o)?r:h(o,r),e.began=!0,e.completed=!0,e.seek(n.offset),n=C(n),n.began=!0,n.completed=!0,n.duration>r&&(e.duration=n.duration),e.children.push(n)}),e.seek(0),e.reset(),e.autoplay&&e.restart(),e},e},C.random=function(t,e){return Math.floor(Math.random()*(e-t+1))+t},C});