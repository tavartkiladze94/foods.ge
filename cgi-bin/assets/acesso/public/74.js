(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[74],{

/***/ "./node_modules/highcharts-vue/dist/highcharts-vue.min.js":
/*!****************************************************************!*\
  !*** ./node_modules/highcharts-vue/dist/highcharts-vue.min.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e(__webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js")):undefined}("undefined"!=typeof self?self:this,function(t){return function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var r={};return e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1)}([function(e,r){e.exports=t},function(t,e,r){"use strict";function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.component(e.tagName||"highcharts",Object(o.a)(e.highcharts||i.a))}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n,r.d(e,"Chart",function(){return a});var o=r(2),c=r(0),i=r.n(c),a=Object(o.a)(i.a)},function(t,e,r){"use strict";function n(t){return i(t)||c(t)||o()}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function c(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function i(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}var a=r(3),s=function(t){return{template:'<div ref="chart"></div>',render:function(t){return t("div",{ref:"chart"})},props:{constructorType:{type:String,default:"chart"},options:{type:Object,required:!0},callback:Function,updateArgs:{type:Array,default:function(){return[!0,!0]}},highcharts:{type:Object},deepCopyOnUpdate:{type:Boolean,default:!0}},watch:{options:{handler:function(t){var e;(e=this.chart).update.apply(e,[Object(a.a)(t,this.deepCopyOnUpdate)].concat(n(this.updateArgs)))},deep:!0}},mounted:function(){var e=this.highcharts||t;this.options&&e[this.constructorType]?this.chart=e[this.constructorType](this.$refs.chart,Object(a.a)(this.options,!0),this.callback?this.callback:null):this.options?console.warn("'".concat(this.constructorType,"' constructor-type is incorrect. Sometimes this error is caused by the fact, that the corresponding module wasn't imported.")):console.warn('The "options" parameter was not passed.')},beforeDestroy:function(){this.chart&&this.chart.destroy()}}};e.a=s},function(t,e,r){"use strict";function n(t,e,r){function o(o,i){!c.a.isObject(o,!r)||c.a.isClass(o)||c.a.isDOMElement(o)?t[i]=e[i]:t[i]=n(t[i]||c.a.isArray(o)?[]:{},o,r)}return c.a.isArray(e)?e.forEach(o):c.a.objectEach(e,o),t}r.d(e,"a",function(){return i});var o=r(0),c=r.n(o),i=function(t,e){return n({},t,e)}}])});

/***/ }),

/***/ "./node_modules/highcharts/highcharts.js":
/*!***********************************************!*\
  !*** ./node_modules/highcharts/highcharts.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*
 Highcharts JS v8.1.2 (2020-06-16)

 (c) 2009-2018 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(T,O){ true&&module.exports?(O["default"]=O,module.exports=T.document?O(T):O): true?!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return O(T)}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):(undefined)})("undefined"!==typeof window?window:this,function(T){function O(g,c,R,y){g.hasOwnProperty(c)||(g[c]=y.apply(null,R))}var q={};O(q,"parts/Globals.js",[],function(){var g="undefined"!==typeof T?T:"undefined"!==typeof window?window:{},c=g.document,
R=g.navigator&&g.navigator.userAgent||"",y=c&&c.createElementNS&&!!c.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,q=/(edge|msie|trident)/i.test(R)&&!g.opera,H=-1!==R.indexOf("Firefox"),D=-1!==R.indexOf("Chrome"),J=H&&4>parseInt(R.split("Firefox/")[1],10);return{product:"Highcharts",version:"8.1.2",deg2rad:2*Math.PI/360,doc:c,hasBidiBug:J,hasTouch:!!g.TouchEvent,isMS:q,isWebKit:-1!==R.indexOf("AppleWebKit"),isFirefox:H,isChrome:D,isSafari:!D&&-1!==R.indexOf("Safari"),isTouchDevice:/(Mobile|Android|Windows Phone)/.test(R),
SVG_NS:"http://www.w3.org/2000/svg",chartCount:0,seriesTypes:{},symbolSizes:{},svg:y,win:g,marginNames:["plotTop","marginRight","marginBottom","plotLeft"],noop:function(){},charts:[],dateFormats:{}}});O(q,"parts/Utilities.js",[q["parts/Globals.js"]],function(g){function c(b,h,e,z){var a=h?"Highcharts error":"Highcharts warning";32===b&&(b=a+": Deprecated member");var x=I(b),f=x?a+" #"+b+": www.highcharts.com/errors/"+b+"/":b.toString();a=function(){if(h)throw Error(f);G.console&&-1===c.messages.indexOf(f)&&
console.log(f)};if("undefined"!==typeof z){var d="";x&&(f+="?");W(z,function(b,h){d+="\n - "+h+": "+b;x&&(f+=encodeURI(h)+"="+encodeURI(b))});f+=d}e?da(e,"displayError",{code:b,message:f,params:z},a):a();c.messages.push(f)}function R(){var b,h=arguments,e={},z=function(b,h){"object"!==typeof b&&(b={});W(h,function(e,a){!y(e,!0)||C(e)||r(e)?b[a]=h[a]:b[a]=z(b[a]||{},e)});return b};!0===h[0]&&(e=h[1],h=Array.prototype.slice.call(h,2));var a=h.length;for(b=0;b<a;b++)e=z(e,h[b]);return e}function y(b,
h){return!!b&&"object"===typeof b&&(!h||!n(b))}function q(b,h,e){var a;K(h)?m(e)?b.setAttribute(h,e):b&&b.getAttribute&&((a=b.getAttribute(h))||"class"!==h||(a=b.getAttribute(h+"Name"))):W(h,function(h,e){b.setAttribute(e,h)});return a}function H(){for(var b=arguments,h=b.length,e=0;e<h;e++){var a=b[e];if("undefined"!==typeof a&&null!==a)return a}}function D(b,h){if(!b)return h;var e=b.split(".").reverse();if(1===e.length)return h[b];for(b=e.pop();"undefined"!==typeof b&&"undefined"!==typeof h&&null!==
h;)h=h[b],b=e.pop();return h}g.timers=[];var J=g.charts,t=g.doc,G=g.win;(c||(c={})).messages=[];g.error=c;var L=function(){function b(b,h,e){this.options=h;this.elem=b;this.prop=e}b.prototype.dSetter=function(){var b=this.paths,h=b&&b[0];b=b&&b[1];var e=[],a=this.now||0;if(1!==a&&h&&b)if(h.length===b.length&&1>a)for(var z=0;z<b.length;z++){for(var x=h[z],f=b[z],d=[],k=0;k<f.length;k++){var N=x[k],l=f[k];d[k]="number"===typeof N&&"number"===typeof l&&("A"!==f[0]||4!==k&&5!==k)?N+a*(l-N):l}e.push(d)}else e=
b;else e=this.toD||[];this.elem.attr("d",e,void 0,!0)};b.prototype.update=function(){var b=this.elem,h=this.prop,e=this.now,a=this.options.step;if(this[h+"Setter"])this[h+"Setter"]();else b.attr?b.element&&b.attr(h,e,null,!0):b.style[h]=e+this.unit;a&&a.call(b,e,this)};b.prototype.run=function(b,h,e){var a=this,z=a.options,x=function(b){return x.stopped?!1:a.step(b)},f=G.requestAnimationFrame||function(b){setTimeout(b,13)},d=function(){for(var b=0;b<g.timers.length;b++)g.timers[b]()||g.timers.splice(b--,
1);g.timers.length&&f(d)};b!==h||this.elem["forceAnimate:"+this.prop]?(this.startTime=+new Date,this.start=b,this.end=h,this.unit=e,this.now=this.start,this.pos=0,x.elem=this.elem,x.prop=this.prop,x()&&1===g.timers.push(x)&&f(d)):(delete z.curAnim[this.prop],z.complete&&0===Object.keys(z.curAnim).length&&z.complete.call(this.elem))};b.prototype.step=function(b){var h=+new Date,e=this.options,a=this.elem,z=e.complete,x=e.duration,f=e.curAnim;if(a.attr&&!a.element)b=!1;else if(b||h>=x+this.startTime){this.now=
this.end;this.pos=1;this.update();var d=f[this.prop]=!0;W(f,function(b){!0!==b&&(d=!1)});d&&z&&z.call(a);b=!1}else this.pos=e.easing((h-this.startTime)/x),this.now=this.start+(this.end-this.start)*this.pos,this.update(),b=!0;return b};b.prototype.initPath=function(b,h,e){function a(b,h){for(;b.length<u;){var e=b[0],a=h[u-b.length];a&&"M"===e[0]&&(b[0]="C"===a[0]?["C",e[1],e[2],e[1],e[2],e[1],e[2]]:["L",e[1],e[2]]);b.unshift(e);d&&b.push(b[b.length-1])}}function z(b,h){for(;b.length<u;)if(h=b[b.length/
k-1].slice(),"C"===h[0]&&(h[1]=h[5],h[2]=h[6]),d){var e=b[b.length/k].slice();b.splice(b.length/2,0,h,e)}else b.push(h)}var x=b.startX,f=b.endX;h=h&&h.slice();e=e.slice();var d=b.isArea,k=d?2:1;if(!h)return[e,e];if(x&&f){for(b=0;b<x.length;b++)if(x[b]===f[0]){var N=b;break}else if(x[0]===f[f.length-x.length+b]){N=b;var l=!0;break}else if(x[x.length-1]===f[f.length-x.length+b]){N=x.length-b;break}"undefined"===typeof N&&(h=[])}if(h.length&&I(N)){var u=e.length+N*k;l?(a(h,e),z(e,h)):(a(e,h),z(h,e))}return[h,
e]};b.prototype.fillSetter=function(){b.prototype.strokeSetter.apply(this,arguments)};b.prototype.strokeSetter=function(){this.elem.attr(this.prop,g.color(this.start).tweenTo(g.color(this.end),this.pos),null,!0)};return b}();g.Fx=L;g.merge=R;var v=g.pInt=function(b,h){return parseInt(b,h||10)},K=g.isString=function(b){return"string"===typeof b},n=g.isArray=function(b){b=Object.prototype.toString.call(b);return"[object Array]"===b||"[object Array Iterator]"===b};g.isObject=y;var r=g.isDOMElement=function(b){return y(b)&&
"number"===typeof b.nodeType},C=g.isClass=function(b){var h=b&&b.constructor;return!(!y(b,!0)||r(b)||!h||!h.name||"Object"===h.name)},I=g.isNumber=function(b){return"number"===typeof b&&!isNaN(b)&&Infinity>b&&-Infinity<b},p=g.erase=function(b,h){for(var e=b.length;e--;)if(b[e]===h){b.splice(e,1);break}},m=g.defined=function(b){return"undefined"!==typeof b&&null!==b};g.attr=q;var d=g.splat=function(b){return n(b)?b:[b]},l=g.syncTimeout=function(b,h,e){if(0<h)return setTimeout(b,h,e);b.call(0,e);return-1},
k=g.clearTimeout=function(b){m(b)&&clearTimeout(b)},f=g.extend=function(b,h){var e;b||(b={});for(e in h)b[e]=h[e];return b};g.pick=H;var a=g.css=function(b,h){g.isMS&&!g.svg&&h&&"undefined"!==typeof h.opacity&&(h.filter="alpha(opacity="+100*h.opacity+")");f(b.style,h)},A=g.createElement=function(b,h,e,z,x){b=t.createElement(b);h&&f(b,h);x&&a(b,{padding:"0",border:"none",margin:"0"});e&&a(b,e);z&&z.appendChild(b);return b},u=g.extendClass=function(b,h){var e=function(){};e.prototype=new b;f(e.prototype,
h);return e},E=g.pad=function(b,h,e){return Array((h||2)+1-String(b).replace("-","").length).join(e||"0")+b},P=g.relativeLength=function(b,h,e){return/%$/.test(b)?h*parseFloat(b)/100+(e||0):parseFloat(b)},w=g.wrap=function(b,h,e){var a=b[h];b[h]=function(){var b=Array.prototype.slice.call(arguments),h=arguments,z=this;z.proceed=function(){a.apply(z,arguments.length?arguments:h)};b.unshift(a);b=e.apply(this,b);z.proceed=null;return b}},M=g.format=function(b,h,e){var a="{",z=!1,x=[],f=/f$/,d=/\.([0-9])/,
k=g.defaultOptions.lang,N=e&&e.time||g.time;for(e=e&&e.numberFormatter||Y;b;){var l=b.indexOf(a);if(-1===l)break;var u=b.slice(0,l);if(z){u=u.split(":");a=D(u.shift()||"",h);if(u.length&&"number"===typeof a)if(u=u.join(":"),f.test(u)){var m=parseInt((u.match(d)||["","-1"])[1],10);null!==a&&(a=e(a,m,k.decimalPoint,-1<u.indexOf(",")?k.thousandsSep:""))}else a=N.dateFormat(u,a);x.push(a)}else x.push(u);b=b.slice(l+1);a=(z=!z)?"}":"{"}x.push(b);return x.join("")},F=g.getMagnitude=function(b){return Math.pow(10,
Math.floor(Math.log(b)/Math.LN10))},Q=g.normalizeTickInterval=function(b,h,e,a,z){var x=b;e=H(e,1);var f=b/e;h||(h=z?[1,1.2,1.5,2,2.5,3,4,5,6,8,10]:[1,2,2.5,5,10],!1===a&&(1===e?h=h.filter(function(b){return 0===b%1}):.1>=e&&(h=[1/e])));for(a=0;a<h.length&&!(x=h[a],z&&x*e>=b||!z&&f<=(h[a]+(h[a+1]||h[a]))/2);a++);return x=N(x*e,-Math.round(Math.log(.001)/Math.LN10))},e=g.stableSort=function(b,h){var e=b.length,a,z;for(z=0;z<e;z++)b[z].safeI=z;b.sort(function(b,e){a=h(b,e);return 0===a?b.safeI-e.safeI:
a});for(z=0;z<e;z++)delete b[z].safeI},b=g.arrayMin=function(b){for(var h=b.length,e=b[0];h--;)b[h]<e&&(e=b[h]);return e},h=g.arrayMax=function(b){for(var h=b.length,e=b[0];h--;)b[h]>e&&(e=b[h]);return e},z=g.destroyObjectProperties=function(b,h){W(b,function(e,a){e&&e!==h&&e.destroy&&e.destroy();delete b[a]})},x=g.discardElement=function(b){var h=g.garbageBin;h||(h=A("div"));b&&h.appendChild(b);h.innerHTML=""},N=g.correctFloat=function(b,h){return parseFloat(b.toPrecision(h||14))},aa=g.setAnimation=
function(b,h){h.renderer.globalAnimation=H(b,h.options.chart.animation,!0)},Z=g.animObject=function(b){return y(b)?R(b):{duration:b?500:0}},V=g.timeUnits={millisecond:1,second:1E3,minute:6E4,hour:36E5,day:864E5,week:6048E5,month:24192E5,year:314496E5},Y=g.numberFormat=function(b,h,e,a){b=+b||0;h=+h;var z=g.defaultOptions.lang,x=(b.toString().split(".")[1]||"").split("e")[0].length,f=b.toString().split("e");if(-1===h)h=Math.min(x,20);else if(!I(h))h=2;else if(h&&f[1]&&0>f[1]){var d=h+ +f[1];0<=d?(f[0]=
(+f[0]).toExponential(d).split("e")[0],h=d):(f[0]=f[0].split(".")[0]||0,b=20>h?(f[0]*Math.pow(10,f[1])).toFixed(h):0,f[1]=0)}var k=(Math.abs(f[1]?f[0]:b)+Math.pow(10,-Math.max(h,x)-1)).toFixed(h);x=String(v(k));d=3<x.length?x.length%3:0;e=H(e,z.decimalPoint);a=H(a,z.thousandsSep);b=(0>b?"-":"")+(d?x.substr(0,d)+a:"");b+=x.substr(d).replace(/(\d{3})(?=\d)/g,"$1"+a);h&&(b+=e+k.slice(-h));f[1]&&0!==+b&&(b+="e"+f[1]);return b};Math.easeInOutSine=function(b){return-.5*(Math.cos(Math.PI*b)-1)};var ba=g.getStyle=
function(b,h,e){if("width"===h)return h=Math.min(b.offsetWidth,b.scrollWidth),e=b.getBoundingClientRect&&b.getBoundingClientRect().width,e<h&&e>=h-1&&(h=Math.floor(e)),Math.max(0,h-g.getStyle(b,"padding-left")-g.getStyle(b,"padding-right"));if("height"===h)return Math.max(0,Math.min(b.offsetHeight,b.scrollHeight)-g.getStyle(b,"padding-top")-g.getStyle(b,"padding-bottom"));G.getComputedStyle||c(27,!0);if(b=G.getComputedStyle(b,void 0))b=b.getPropertyValue(h),H(e,"opacity"!==h)&&(b=v(b));return b},
U=g.inArray=function(b,h,e){c(32,!1,void 0,{"Highcharts.inArray":"use Array.indexOf"});return h.indexOf(b,e)},X=g.find=Array.prototype.find?function(b,h){return b.find(h)}:function(b,h){var e,a=b.length;for(e=0;e<a;e++)if(h(b[e],e))return b[e]};g.keys=function(b){c(32,!1,void 0,{"Highcharts.keys":"use Object.keys"});return Object.keys(b)};var ia=g.offset=function(b){var h=t.documentElement;b=b.parentElement||b.parentNode?b.getBoundingClientRect():{top:0,left:0};return{top:b.top+(G.pageYOffset||h.scrollTop)-
(h.clientTop||0),left:b.left+(G.pageXOffset||h.scrollLeft)-(h.clientLeft||0)}},S=g.stop=function(b,h){for(var e=g.timers.length;e--;)g.timers[e].elem!==b||h&&h!==g.timers[e].prop||(g.timers[e].stopped=!0)},W=g.objectEach=function(b,h,e){for(var a in b)Object.hasOwnProperty.call(b,a)&&h.call(e||b[a],b[a],a,b)};W({map:"map",each:"forEach",grep:"filter",reduce:"reduce",some:"some"},function(b,h){g[h]=function(e){var a;c(32,!1,void 0,(a={},a["Highcharts."+h]="use Array."+b,a));return Array.prototype[b].apply(e,
[].slice.call(arguments,1))}});var ja=g.addEvent=function(b,h,e,a){void 0===a&&(a={});var z=b.addEventListener||g.addEventListenerPolyfill;var x="function"===typeof b&&b.prototype?b.prototype.protoEvents=b.prototype.protoEvents||{}:b.hcEvents=b.hcEvents||{};g.Point&&b instanceof g.Point&&b.series&&b.series.chart&&(b.series.chart.runTrackerClick=!0);z&&z.call(b,h,e,!1);x[h]||(x[h]=[]);x[h].push({fn:e,order:"number"===typeof a.order?a.order:Infinity});x[h].sort(function(b,h){return b.order-h.order});
return function(){ea(b,h,e)}},ea=g.removeEvent=function(b,h,e){function a(h,e){var a=b.removeEventListener||g.removeEventListenerPolyfill;a&&a.call(b,h,e,!1)}function z(e){var z;if(b.nodeName){if(h){var x={};x[h]=!0}else x=e;W(x,function(b,h){if(e[h])for(z=e[h].length;z--;)a(h,e[h][z].fn)})}}var x;["protoEvents","hcEvents"].forEach(function(f,d){var k=(d=d?b:b.prototype)&&d[f];k&&(h?(x=k[h]||[],e?(k[h]=x.filter(function(b){return e!==b.fn}),a(h,e)):(z(k),k[h]=[])):(z(k),d[f]={}))})},da=g.fireEvent=
function(b,h,e,a){var z;e=e||{};if(t.createEvent&&(b.dispatchEvent||b.fireEvent)){var x=t.createEvent("Events");x.initEvent(h,!0,!0);f(x,e);b.dispatchEvent?b.dispatchEvent(x):b.fireEvent(h,x)}else e.target||f(e,{preventDefault:function(){e.defaultPrevented=!0},target:b,type:h}),function(h,a){void 0===h&&(h=[]);void 0===a&&(a=[]);var x=0,f=0,d=h.length+a.length;for(z=0;z<d;z++)!1===(h[x]?a[f]?h[x].order<=a[f].order?h[x++]:a[f++]:h[x++]:a[f++]).fn.call(b,e)&&e.preventDefault()}(b.protoEvents&&b.protoEvents[h],
b.hcEvents&&b.hcEvents[h]);a&&!e.defaultPrevented&&a.call(b,e)},ka=g.animate=function(b,h,e){var a,z="",x,f;if(!y(e)){var d=arguments;e={duration:d[2],easing:d[3],complete:d[4]}}I(e.duration)||(e.duration=400);e.easing="function"===typeof e.easing?e.easing:Math[e.easing]||Math.easeInOutSine;e.curAnim=R(h);W(h,function(d,k){S(b,k);f=new L(b,e,k);x=null;"d"===k&&n(h.d)?(f.paths=f.initPath(b,b.pathArray,h.d),f.toD=h.d,a=0,x=1):b.attr?a=b.attr(k):(a=parseFloat(ba(b,k))||0,"opacity"!==k&&(z="px"));x||
(x=d);x&&x.match&&x.match("px")&&(x=x.replace(/px/g,""));f.run(a,x,z)})},la=g.seriesType=function(b,h,e,a,x){var z=fa(),f=g.seriesTypes;z.plotOptions[b]=R(z.plotOptions[h],e);f[b]=u(f[h]||function(){},a);f[b].prototype.type=b;x&&(f[b].prototype.pointClass=u(g.Point,x));return f[b]},ca,ha=g.uniqueKey=function(){var b=Math.random().toString(36).substring(2,9)+"-",h=0;return function(){return"highcharts-"+(ca?"":b)+h++}}(),ma=g.useSerialIds=function(b){return ca=H(b,ca)},O=g.isFunction=function(b){return"function"===
typeof b},fa=g.getOptions=function(){return g.defaultOptions},na=g.setOptions=function(b){g.defaultOptions=R(!0,g.defaultOptions,b);(b.time||b.global)&&g.time.update(R(g.defaultOptions.global,g.defaultOptions.time,b.global,b.time));return g.defaultOptions};G.jQuery&&(G.jQuery.fn.highcharts=function(){var b=[].slice.call(arguments);if(this[0])return b[0]?(new (g[K(b[0])?b.shift():"Chart"])(this[0],b[0],b[1]),this):J[q(this[0],"data-highcharts-chart")]});return{Fx:g.Fx,addEvent:ja,animate:ka,animObject:Z,
arrayMax:h,arrayMin:b,attr:q,clamp:function(b,h,e){return b>h?b<e?b:e:h},clearTimeout:k,correctFloat:N,createElement:A,css:a,defined:m,destroyObjectProperties:z,discardElement:x,erase:p,error:c,extend:f,extendClass:u,find:X,fireEvent:da,format:M,getMagnitude:F,getNestedProperty:D,getOptions:fa,getStyle:ba,inArray:U,isArray:n,isClass:C,isDOMElement:r,isFunction:O,isNumber:I,isObject:y,isString:K,merge:R,normalizeTickInterval:Q,numberFormat:Y,objectEach:W,offset:ia,pad:E,pick:H,pInt:v,relativeLength:P,
removeEvent:ea,seriesType:la,setAnimation:aa,setOptions:na,splat:d,stableSort:e,stop:S,syncTimeout:l,timeUnits:V,uniqueKey:ha,useSerialIds:ma,wrap:w}});O(q,"parts/Color.js",[q["parts/Globals.js"],q["parts/Utilities.js"]],function(g,c){var R=c.isNumber,y=c.merge,q=c.pInt;c=function(){function c(g){this.parsers=[{regex:/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,parse:function(c){return[q(c[1]),q(c[2]),q(c[3]),parseFloat(c[4],10)]}},{regex:/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,
parse:function(c){return[q(c[1]),q(c[2]),q(c[3]),1]}}];this.rgba=[];if(!(this instanceof c))return new c(g);this.init(g)}c.parse=function(g){return new c(g)};c.prototype.init=function(g){var J,t;if((this.input=g=c.names[g&&g.toLowerCase?g.toLowerCase():""]||g)&&g.stops)this.stops=g.stops.map(function(v){return new c(v[1])});else{if(g&&g.charAt&&"#"===g.charAt()){var G=g.length;g=parseInt(g.substr(1),16);7===G?J=[(g&16711680)>>16,(g&65280)>>8,g&255,1]:4===G&&(J=[(g&3840)>>4|(g&3840)>>8,(g&240)>>4|
g&240,(g&15)<<4|g&15,1])}if(!J)for(t=this.parsers.length;t--&&!J;){var L=this.parsers[t];(G=L.regex.exec(g))&&(J=L.parse(G))}}this.rgba=J||[]};c.prototype.get=function(c){var g=this.input,t=this.rgba;if("undefined"!==typeof this.stops){var G=y(g);G.stops=[].concat(G.stops);this.stops.forEach(function(g,v){G.stops[v]=[G.stops[v][0],g.get(c)]})}else G=t&&R(t[0])?"rgb"===c||!c&&1===t[3]?"rgb("+t[0]+","+t[1]+","+t[2]+")":"a"===c?t[3]:"rgba("+t.join(",")+")":g;return G};c.prototype.brighten=function(c){var g,
t=this.rgba;if(this.stops)this.stops.forEach(function(g){g.brighten(c)});else if(R(c)&&0!==c)for(g=0;3>g;g++)t[g]+=q(255*c),0>t[g]&&(t[g]=0),255<t[g]&&(t[g]=255);return this};c.prototype.setOpacity=function(c){this.rgba[3]=c;return this};c.prototype.tweenTo=function(c,g){var t=this.rgba,G=c.rgba;G.length&&t&&t.length?(c=1!==G[3]||1!==t[3],g=(c?"rgba(":"rgb(")+Math.round(G[0]+(t[0]-G[0])*(1-g))+","+Math.round(G[1]+(t[1]-G[1])*(1-g))+","+Math.round(G[2]+(t[2]-G[2])*(1-g))+(c?","+(G[3]+(t[3]-G[3])*(1-
g)):"")+")"):g=c.input||"none";return g};c.names={white:"#ffffff",black:"#000000"};return c}();g.Color=c;g.color=c.parse;return g.Color});O(q,"parts/SVGElement.js",[q["parts/Color.js"],q["parts/Globals.js"],q["parts/Utilities.js"]],function(g,c,q){var y=c.deg2rad,B=c.doc,H=c.hasTouch,D=c.isFirefox,J=c.noop,t=c.svg,G=c.SVG_NS,L=c.win,v=q.animate,K=q.animObject,n=q.attr,r=q.createElement,C=q.css,I=q.defined,p=q.erase,m=q.extend,d=q.fireEvent,l=q.isArray,k=q.isFunction,f=q.isNumber,a=q.isString,A=q.merge,
u=q.objectEach,E=q.pick,P=q.pInt,w=q.stop,M=q.uniqueKey;"";q=function(){function F(){this.height=this.element=void 0;this.opacity=1;this.renderer=void 0;this.SVG_NS=G;this.symbolCustomAttribs="x y width height r start end innerR anchorX anchorY rounded".split(" ");this.width=void 0}F.prototype._defaultGetter=function(a){a=E(this[a+"Value"],this[a],this.element?this.element.getAttribute(a):null,0);/^[\-0-9\.]+$/.test(a)&&(a=parseFloat(a));return a};F.prototype._defaultSetter=function(a,e,b){b.setAttribute(e,
a)};F.prototype.add=function(a){var e=this.renderer,b=this.element;a&&(this.parentGroup=a);this.parentInverted=a&&a.inverted;"undefined"!==typeof this.textStr&&"text"===this.element.nodeName&&e.buildText(this);this.added=!0;if(!a||a.handleZ||this.zIndex)var h=this.zIndexSetter();h||(a?a.element:e.box).appendChild(b);if(this.onAdd)this.onAdd();return this};F.prototype.addClass=function(a,e){var b=e?"":this.attr("class")||"";a=(a||"").split(/ /g).reduce(function(h,e){-1===b.indexOf(e)&&h.push(e);return h},
b?[b]:[]).join(" ");a!==b&&this.attr("class",a);return this};F.prototype.afterSetters=function(){this.doTransform&&(this.updateTransform(),this.doTransform=!1)};F.prototype.align=function(f,e,b){var h,z={};var x=this.renderer;var d=x.alignedObjects;var k,l;if(f){if(this.alignOptions=f,this.alignByTranslate=e,!b||a(b))this.alignTo=h=b||"renderer",p(d,this),d.push(this),b=void 0}else f=this.alignOptions,e=this.alignByTranslate,h=this.alignTo;b=E(b,x[h],x);h=f.align;x=f.verticalAlign;d=(b.x||0)+(f.x||
0);var u=(b.y||0)+(f.y||0);"right"===h?k=1:"center"===h&&(k=2);k&&(d+=(b.width-(f.width||0))/k);z[e?"translateX":"x"]=Math.round(d);"bottom"===x?l=1:"middle"===x&&(l=2);l&&(u+=(b.height-(f.height||0))/l);z[e?"translateY":"y"]=Math.round(u);this[this.placed?"animate":"attr"](z);this.placed=!0;this.alignAttr=z;return this};F.prototype.alignSetter=function(a){var e={left:"start",center:"middle",right:"end"};e[a]&&(this.alignValue=a,this.element.setAttribute("text-anchor",e[a]))};F.prototype.animate=
function(a,e,b){var h=K(E(e,this.renderer.globalAnimation,!0));E(B.hidden,B.msHidden,B.webkitHidden,!1)&&(h.duration=0);0!==h.duration?(b&&(h.complete=b),v(this,a,h)):(this.attr(a,void 0,b),u(a,function(b,e){h.step&&h.step.call(this,b,{prop:e,pos:1})},this));return this};F.prototype.applyTextOutline=function(a){var e=this.element,b;-1!==a.indexOf("contrast")&&(a=a.replace(/contrast/g,this.renderer.getContrast(e.style.fill)));a=a.split(" ");var h=a[a.length-1];if((b=a[0])&&"none"!==b&&c.svg){this.fakeTS=
!0;a=[].slice.call(e.getElementsByTagName("tspan"));this.ySetter=this.xSetter;b=b.replace(/(^[\d\.]+)(.*?)$/g,function(b,h,e){return 2*h+e});this.removeTextOutline(a);var z=e.textContent?/^[\u0591-\u065F\u066A-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC]/.test(e.textContent):!1;var x=e.firstChild;a.forEach(function(a,f){0===f&&(a.setAttribute("x",e.getAttribute("x")),f=e.getAttribute("y"),a.setAttribute("y",f||0),null===f&&e.setAttribute("y",0));f=a.cloneNode(!0);n(z&&!D?a:f,{"class":"highcharts-text-outline",
fill:h,stroke:h,"stroke-width":b,"stroke-linejoin":"round"});e.insertBefore(f,x)});z&&D&&a[0]&&(a=a[0].cloneNode(!0),a.textContent=" ",e.insertBefore(a,x))}};F.prototype.attr=function(a,e,b,h){var z=this.element,x,f=this,d,k,l=this.symbolCustomAttribs;if("string"===typeof a&&"undefined"!==typeof e){var m=a;a={};a[m]=e}"string"===typeof a?f=(this[a+"Getter"]||this._defaultGetter).call(this,a,z):(u(a,function(b,e){d=!1;h||w(this,e);this.symbolName&&-1!==l.indexOf(e)&&(x||(this.symbolAttr(a),x=!0),d=
!0);!this.rotation||"x"!==e&&"y"!==e||(this.doTransform=!0);d||(k=this[e+"Setter"]||this._defaultSetter,k.call(this,b,e,z),!this.styledMode&&this.shadows&&/^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(e)&&this.updateShadows(e,b,k))},this),this.afterSetters());b&&b.call(this);return f};F.prototype.clip=function(a){return this.attr("clip-path",a?"url("+this.renderer.url+"#"+a.id+")":"none")};F.prototype.crisp=function(a,e){e=e||a.strokeWidth||0;var b=Math.round(e)%2/2;a.x=Math.floor(a.x||
this.x||0)+b;a.y=Math.floor(a.y||this.y||0)+b;a.width=Math.floor((a.width||this.width||0)-2*b);a.height=Math.floor((a.height||this.height||0)-2*b);I(a.strokeWidth)&&(a.strokeWidth=e);return a};F.prototype.complexColor=function(a,e,b){var h=this.renderer,z,x,f,k,m,p,w,C,Q,r,E=[],S;d(this.renderer,"complexColor",{args:arguments},function(){a.radialGradient?x="radialGradient":a.linearGradient&&(x="linearGradient");if(x){f=a[x];m=h.gradients;p=a.stops;Q=b.radialReference;l(f)&&(a[x]=f={x1:f[0],y1:f[1],
x2:f[2],y2:f[3],gradientUnits:"userSpaceOnUse"});"radialGradient"===x&&Q&&!I(f.gradientUnits)&&(k=f,f=A(f,h.getRadialAttr(Q,k),{gradientUnits:"userSpaceOnUse"}));u(f,function(b,h){"id"!==h&&E.push(h,b)});u(p,function(b){E.push(b)});E=E.join(",");if(m[E])r=m[E].attr("id");else{f.id=r=M();var d=m[E]=h.createElement(x).attr(f).add(h.defs);d.radAttr=k;d.stops=[];p.forEach(function(b){0===b[1].indexOf("rgba")?(z=g.parse(b[1]),w=z.get("rgb"),C=z.get("a")):(w=b[1],C=1);b=h.createElement("stop").attr({offset:b[0],
"stop-color":w,"stop-opacity":C}).add(d);d.stops.push(b)})}S="url("+h.url+"#"+r+")";b.setAttribute(e,S);b.gradient=E;a.toString=function(){return S}}})};F.prototype.css=function(a){var e=this.styles,b={},h=this.element,z="",x=!e,f=["textOutline","textOverflow","width"];a&&a.color&&(a.fill=a.color);e&&u(a,function(h,a){e&&e[a]!==h&&(b[a]=h,x=!0)});if(x){e&&(a=m(e,b));if(a)if(null===a.width||"auto"===a.width)delete this.textWidth;else if("text"===h.nodeName.toLowerCase()&&a.width)var d=this.textWidth=
P(a.width);this.styles=a;d&&!t&&this.renderer.forExport&&delete a.width;if(h.namespaceURI===this.SVG_NS){var k=function(b,h){return"-"+h.toLowerCase()};u(a,function(b,h){-1===f.indexOf(h)&&(z+=h.replace(/([A-Z])/g,k)+":"+b+";")});z&&n(h,"style",z)}else C(h,a);this.added&&("text"===this.element.nodeName&&this.renderer.buildText(this),a&&a.textOutline&&this.applyTextOutline(a.textOutline))}return this};F.prototype.dashstyleSetter=function(a){var e=this["stroke-width"];"inherit"===e&&(e=1);if(a=a&&a.toLowerCase()){var b=
a.replace("shortdashdotdot","3,1,1,1,1,1,").replace("shortdashdot","3,1,1,1").replace("shortdot","1,1,").replace("shortdash","3,1,").replace("longdash","8,3,").replace(/dot/g,"1,3,").replace("dash","4,3,").replace(/,$/,"").split(",");for(a=b.length;a--;)b[a]=""+P(b[a])*E(e,NaN);a=b.join(",").replace(/NaN/g,"none");this.element.setAttribute("stroke-dasharray",a)}};F.prototype.destroy=function(){var a=this,e=a.element||{},b=a.renderer,h=b.isSVG&&"SPAN"===e.nodeName&&a.parentGroup||void 0,z=e.ownerSVGElement;
e.onclick=e.onmouseout=e.onmouseover=e.onmousemove=e.point=null;w(a);if(a.clipPath&&z){var x=a.clipPath;[].forEach.call(z.querySelectorAll("[clip-path],[CLIP-PATH]"),function(b){-1<b.getAttribute("clip-path").indexOf(x.element.id)&&b.removeAttribute("clip-path")});a.clipPath=x.destroy()}if(a.stops){for(z=0;z<a.stops.length;z++)a.stops[z].destroy();a.stops.length=0;a.stops=void 0}a.safeRemoveChild(e);for(b.styledMode||a.destroyShadows();h&&h.div&&0===h.div.childNodes.length;)e=h.parentGroup,a.safeRemoveChild(h.div),
delete h.div,h=e;a.alignTo&&p(b.alignedObjects,a);u(a,function(b,h){a[h]&&a[h].parentGroup===a&&a[h].destroy&&a[h].destroy();delete a[h]})};F.prototype.destroyShadows=function(){(this.shadows||[]).forEach(function(a){this.safeRemoveChild(a)},this);this.shadows=void 0};F.prototype.destroyTextPath=function(a,e){var b=a.getElementsByTagName("text")[0];if(b){if(b.removeAttribute("dx"),b.removeAttribute("dy"),e.element.setAttribute("id",""),this.textPathWrapper&&b.getElementsByTagName("textPath").length){for(a=
this.textPathWrapper.element.childNodes;a.length;)b.appendChild(a[0]);b.removeChild(this.textPathWrapper.element)}}else if(a.getAttribute("dx")||a.getAttribute("dy"))a.removeAttribute("dx"),a.removeAttribute("dy");this.textPathWrapper&&(this.textPathWrapper=this.textPathWrapper.destroy())};F.prototype.dSetter=function(a,e,b){l(a)&&("string"===typeof a[0]&&(a=this.renderer.pathToSegments(a)),this.pathArray=a,a=a.reduce(function(b,a,e){return a&&a.join?(e?b+" ":"")+a.join(" "):(a||"").toString()},""));
/(NaN| {2}|^$)/.test(a)&&(a="M 0 0");this[e]!==a&&(b.setAttribute(e,a),this[e]=a)};F.prototype.fadeOut=function(a){var e=this;e.animate({opacity:0},{duration:E(a,150),complete:function(){e.attr({y:-9999}).hide()}})};F.prototype.fillSetter=function(a,e,b){"string"===typeof a?b.setAttribute(e,a):a&&this.complexColor(a,e,b)};F.prototype.getBBox=function(a,e){var b,h=this.renderer,z=this.element,x=this.styles,f=this.textStr,d=h.cache,l=h.cacheKeys,u=z.namespaceURI===this.SVG_NS;e=E(e,this.rotation,0);
var A=h.styledMode?z&&F.prototype.getStyle.call(z,"font-size"):x&&x.fontSize;if(I(f)){var p=f.toString();-1===p.indexOf("<")&&(p=p.replace(/[0-9]/g,"0"));p+=["",e,A,this.textWidth,x&&x.textOverflow,x&&x.fontWeight].join()}p&&!a&&(b=d[p]);if(!b){if(u||h.forExport){try{var w=this.fakeTS&&function(b){[].forEach.call(z.querySelectorAll(".highcharts-text-outline"),function(h){h.style.display=b})};k(w)&&w("none");b=z.getBBox?m({},z.getBBox()):{width:z.offsetWidth,height:z.offsetHeight};k(w)&&w("")}catch(X){""}if(!b||
0>b.width)b={width:0,height:0}}else b=this.htmlGetBBox();h.isSVG&&(a=b.width,h=b.height,u&&(b.height=h={"11px,17":14,"13px,20":16}[x&&x.fontSize+","+Math.round(h)]||h),e&&(x=e*y,b.width=Math.abs(h*Math.sin(x))+Math.abs(a*Math.cos(x)),b.height=Math.abs(h*Math.cos(x))+Math.abs(a*Math.sin(x))));if(p&&0<b.height){for(;250<l.length;)delete d[l.shift()];d[p]||l.push(p);d[p]=b}}return b};F.prototype.getStyle=function(a){return L.getComputedStyle(this.element||this,"").getPropertyValue(a)};F.prototype.hasClass=
function(a){return-1!==(""+this.attr("class")).split(" ").indexOf(a)};F.prototype.hide=function(a){a?this.attr({y:-9999}):this.attr({visibility:"hidden"});return this};F.prototype.htmlGetBBox=function(){return{height:0,width:0,x:0,y:0}};F.prototype.init=function(a,e){this.element="span"===e?r(e):B.createElementNS(this.SVG_NS,e);this.renderer=a;d(this,"afterInit")};F.prototype.invert=function(a){this.inverted=a;this.updateTransform();return this};F.prototype.on=function(a,e){var b,h,z=this.element,
x;H&&"click"===a?(z.ontouchstart=function(a){b=a.touches[0].clientX;h=a.touches[0].clientY},z.ontouchend=function(a){b&&4<=Math.sqrt(Math.pow(b-a.changedTouches[0].clientX,2)+Math.pow(h-a.changedTouches[0].clientY,2))||e.call(z,a);x=!0;a.preventDefault()},z.onclick=function(b){x||e.call(z,b)}):z["on"+a]=e;return this};F.prototype.opacitySetter=function(a,e,b){this[e]=a;b.setAttribute(e,a)};F.prototype.removeClass=function(f){return this.attr("class",(""+this.attr("class")).replace(a(f)?new RegExp("(^| )"+
f+"( |$)"):f," ").replace(/ +/g," ").trim())};F.prototype.removeTextOutline=function(a){for(var e=a.length,b;e--;)b=a[e],"highcharts-text-outline"===b.getAttribute("class")&&p(a,this.element.removeChild(b))};F.prototype.safeRemoveChild=function(a){var e=a.parentNode;e&&e.removeChild(a)};F.prototype.setRadialReference=function(a){var e=this.element.gradient&&this.renderer.gradients[this.element.gradient];this.element.radialReference=a;e&&e.radAttr&&e.animate(this.renderer.getRadialAttr(a,e.radAttr));
return this};F.prototype.setTextPath=function(a,e){var b=this.element,h={textAnchor:"text-anchor"},z=!1,x=this.textPathWrapper,d=!x;e=A(!0,{enabled:!0,attributes:{dy:-5,startOffset:"50%",textAnchor:"middle"}},e);var k=e.attributes;if(a&&e&&e.enabled){x&&null===x.element.parentNode?(d=!0,x=x.destroy()):x&&this.removeTextOutline.call(x.parentGroup,[].slice.call(b.getElementsByTagName("tspan")));this.options&&this.options.padding&&(k.dx=-this.options.padding);x||(this.textPathWrapper=x=this.renderer.createElement("textPath"),
z=!0);var l=x.element;(e=a.element.getAttribute("id"))||a.element.setAttribute("id",e=M());if(d)for(a=b.getElementsByTagName("tspan");a.length;)a[0].setAttribute("y",0),f(k.dx)&&a[0].setAttribute("x",-k.dx),l.appendChild(a[0]);z&&x&&x.add({element:this.text?this.text.element:b});l.setAttributeNS("http://www.w3.org/1999/xlink","href",this.renderer.url+"#"+e);I(k.dy)&&(l.parentNode.setAttribute("dy",k.dy),delete k.dy);I(k.dx)&&(l.parentNode.setAttribute("dx",k.dx),delete k.dx);u(k,function(b,a){l.setAttribute(h[a]||
a,b)});b.removeAttribute("transform");this.removeTextOutline.call(x,[].slice.call(b.getElementsByTagName("tspan")));this.text&&!this.renderer.styledMode&&this.attr({fill:"none","stroke-width":0});this.applyTextOutline=this.updateTransform=J}else x&&(delete this.updateTransform,delete this.applyTextOutline,this.destroyTextPath(b,a),this.updateTransform(),this.options&&this.options.rotation&&this.applyTextOutline(this.options.style.textOutline));return this};F.prototype.shadow=function(a,e,b){var h=
[],z=this.element,x=!1,f=this.oldShadowOptions;var d={color:"#000000",offsetX:1,offsetY:1,opacity:.15,width:3};var k;!0===a?k=d:"object"===typeof a&&(k=m(d,a));k&&(k&&f&&u(k,function(b,h){b!==f[h]&&(x=!0)}),x&&this.destroyShadows(),this.oldShadowOptions=k);if(!k)this.destroyShadows();else if(!this.shadows){var l=k.opacity/k.width;var A=this.parentInverted?"translate(-1,-1)":"translate("+k.offsetX+", "+k.offsetY+")";for(d=1;d<=k.width;d++){var p=z.cloneNode(!1);var w=2*k.width+1-2*d;n(p,{stroke:a.color||
"#000000","stroke-opacity":l*d,"stroke-width":w,transform:A,fill:"none"});p.setAttribute("class",(p.getAttribute("class")||"")+" highcharts-shadow");b&&(n(p,"height",Math.max(n(p,"height")-w,0)),p.cutHeight=w);e?e.element.appendChild(p):z.parentNode&&z.parentNode.insertBefore(p,z);h.push(p)}this.shadows=h}return this};F.prototype.show=function(a){return this.attr({visibility:a?"inherit":"visible"})};F.prototype.strokeSetter=function(a,e,b){this[e]=a;this.stroke&&this["stroke-width"]?(F.prototype.fillSetter.call(this,
this.stroke,"stroke",b),b.setAttribute("stroke-width",this["stroke-width"]),this.hasStroke=!0):"stroke-width"===e&&0===a&&this.hasStroke?(b.removeAttribute("stroke"),this.hasStroke=!1):this.renderer.styledMode&&this["stroke-width"]&&(b.setAttribute("stroke-width",this["stroke-width"]),this.hasStroke=!0)};F.prototype.strokeWidth=function(){if(!this.renderer.styledMode)return this["stroke-width"]||0;var a=this.getStyle("stroke-width"),e=0;if(a.indexOf("px")===a.length-2)e=P(a);else if(""!==a){var b=
B.createElementNS(G,"rect");n(b,{width:a,"stroke-width":0});this.element.parentNode.appendChild(b);e=b.getBBox().width;b.parentNode.removeChild(b)}return e};F.prototype.symbolAttr=function(a){var e=this;"x y r start end width height innerR anchorX anchorY clockwise".split(" ").forEach(function(b){e[b]=E(a[b],e[b])});e.attr({d:e.renderer.symbols[e.symbolName](e.x,e.y,e.width,e.height,e)})};F.prototype.textSetter=function(a){a!==this.textStr&&(delete this.textPxLength,this.textStr=a,this.added&&this.renderer.buildText(this))};
F.prototype.titleSetter=function(a){var e=this.element.getElementsByTagName("title")[0];e||(e=B.createElementNS(this.SVG_NS,"title"),this.element.appendChild(e));e.firstChild&&e.removeChild(e.firstChild);e.appendChild(B.createTextNode(String(E(a,"")).replace(/<[^>]*>/g,"").replace(/&lt;/g,"<").replace(/&gt;/g,">")))};F.prototype.toFront=function(){var a=this.element;a.parentNode.appendChild(a);return this};F.prototype.translate=function(a,e){return this.attr({translateX:a,translateY:e})};F.prototype.updateShadows=
function(a,e,b){var h=this.shadows;if(h)for(var z=h.length;z--;)b.call(h[z],"height"===a?Math.max(e-(h[z].cutHeight||0),0):"d"===a?this.d:e,a,h[z])};F.prototype.updateTransform=function(){var a=this.translateX||0,e=this.translateY||0,b=this.scaleX,h=this.scaleY,z=this.inverted,x=this.rotation,f=this.matrix,d=this.element;z&&(a+=this.width,e+=this.height);a=["translate("+a+","+e+")"];I(f)&&a.push("matrix("+f.join(",")+")");z?a.push("rotate(90) scale(-1,1)"):x&&a.push("rotate("+x+" "+E(this.rotationOriginX,
d.getAttribute("x"),0)+" "+E(this.rotationOriginY,d.getAttribute("y")||0)+")");(I(b)||I(h))&&a.push("scale("+E(b,1)+" "+E(h,1)+")");a.length&&d.setAttribute("transform",a.join(" "))};F.prototype.visibilitySetter=function(a,e,b){"inherit"===a?b.removeAttribute(e):this[e]!==a&&b.setAttribute(e,a);this[e]=a};F.prototype.xGetter=function(a){"circle"===this.element.nodeName&&("x"===a?a="cx":"y"===a&&(a="cy"));return this._defaultGetter(a)};F.prototype.zIndexSetter=function(a,e){var b=this.renderer,h=this.parentGroup,
z=(h||b).element||b.box,x=this.element,f=!1;b=z===b.box;var d=this.added;var k;I(a)?(x.setAttribute("data-z-index",a),a=+a,this[e]===a&&(d=!1)):I(this[e])&&x.removeAttribute("data-z-index");this[e]=a;if(d){(a=this.zIndex)&&h&&(h.handleZ=!0);e=z.childNodes;for(k=e.length-1;0<=k&&!f;k--){h=e[k];d=h.getAttribute("data-z-index");var l=!I(d);if(h!==x)if(0>a&&l&&!b&&!k)z.insertBefore(x,e[k]),f=!0;else if(P(d)<=a||l&&(!I(a)||0<=a))z.insertBefore(x,e[k+1]||null),f=!0}f||(z.insertBefore(x,e[b?3:0]||null),
f=!0)}return f};return F}();q.prototype["stroke-widthSetter"]=q.prototype.strokeSetter;q.prototype.yGetter=q.prototype.xGetter;q.prototype.matrixSetter=q.prototype.rotationOriginXSetter=q.prototype.rotationOriginYSetter=q.prototype.rotationSetter=q.prototype.scaleXSetter=q.prototype.scaleYSetter=q.prototype.translateXSetter=q.prototype.translateYSetter=q.prototype.verticalAlignSetter=function(a,f){this[f]=a;this.doTransform=!0};c.SVGElement=q;return c.SVGElement});O(q,"parts/SVGLabel.js",[q["parts/SVGElement.js"],
q["parts/Utilities.js"]],function(g,c){var q=this&&this.__extends||function(){var c=function(g,L){c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(c,g){c.__proto__=g}||function(c,g){for(var n in g)g.hasOwnProperty(n)&&(c[n]=g[n])};return c(g,L)};return function(g,L){function v(){this.constructor=g}c(g,L);g.prototype=null===L?Object.create(L):(v.prototype=L.prototype,new v)}}(),y=c.defined,B=c.extend,H=c.isNumber,D=c.merge,J=c.removeEvent;return function(c){function t(g,v,K,n,r,C,
I,p,m,d){var l=c.call(this)||this;l.init(g,"g");l.textStr=v;l.x=K;l.y=n;l.anchorX=C;l.anchorY=I;l.baseline=m;l.className=d;"button"!==d&&l.addClass("highcharts-label");d&&l.addClass("highcharts-"+d);l.text=g.text("",0,0,p).attr({zIndex:1});if("string"===typeof r){var k=/^url\((.*?)\)$/.test(r);if(l.renderer.symbols[r]||k)l.symbolKey=r}l.bBox=t.emptyBBox;l.padding=3;l.paddingLeft=0;l.baselineOffset=0;l.needsBox=g.styledMode||k;l.deferredAttr={};l.alignFactor=0;return l}q(t,c);t.prototype.alignSetter=
function(c){c={left:0,center:.5,right:1}[c];c!==this.alignFactor&&(this.alignFactor=c,this.bBox&&H(this.xSetting)&&this.attr({x:this.xSetting}))};t.prototype.anchorXSetter=function(c,g){this.anchorX=c;this.boxAttr(g,Math.round(c)-this.getCrispAdjust()-this.xSetting)};t.prototype.anchorYSetter=function(c,g){this.anchorY=c;this.boxAttr(g,c-this.ySetting)};t.prototype.boxAttr=function(c,g){this.box?this.box.attr(c,g):this.deferredAttr[c]=g};t.prototype.css=function(c){if(c){var v={};c=D(c);t.textProps.forEach(function(n){"undefined"!==
typeof c[n]&&(v[n]=c[n],delete c[n])});this.text.css(v);var L="fontSize"in v||"fontWeight"in v;if("width"in v||L)this.updateBoxSize(),L&&this.updateTextPadding()}return g.prototype.css.call(this,c)};t.prototype.destroy=function(){J(this.element,"mouseenter");J(this.element,"mouseleave");this.text&&this.text.destroy();this.box&&(this.box=this.box.destroy());g.prototype.destroy.call(this)};t.prototype.fillSetter=function(c,g){c&&(this.needsBox=!0);this.fill=c;this.boxAttr(g,c)};t.prototype.getBBox=
function(){var c=this.bBox,g=this.padding;return{width:c.width+2*g,height:c.height+2*g,x:c.x-g,y:c.y-g}};t.prototype.getCrispAdjust=function(){return this.renderer.styledMode&&this.box?this.box.strokeWidth()%2/2:(this["stroke-width"]?parseInt(this["stroke-width"],10):0)%2/2};t.prototype.heightSetter=function(c){this.heightSetting=c};t.prototype.on=function(c,v){var t=this,n=t.text,r=n&&"SPAN"===n.element.tagName?n:void 0;if(r){var C=function(C){("mouseenter"===c||"mouseleave"===c)&&C.relatedTarget instanceof
Element&&(t.element.contains(C.relatedTarget)||r.element.contains(C.relatedTarget))||v.call(t.element,C)};r.on(c,C)}g.prototype.on.call(t,c,C||v);return t};t.prototype.onAdd=function(){var c=this.textStr;this.text.add(this);this.attr({text:y(c)?c:"",x:this.x,y:this.y});this.box&&y(this.anchorX)&&this.attr({anchorX:this.anchorX,anchorY:this.anchorY})};t.prototype.paddingSetter=function(c){y(c)&&c!==this.padding&&(this.padding=c,this.updateTextPadding())};t.prototype.paddingLeftSetter=function(c){y(c)&&
c!==this.paddingLeft&&(this.paddingLeft=c,this.updateTextPadding())};t.prototype.rSetter=function(c,g){this.boxAttr(g,c)};t.prototype.shadow=function(c){c&&!this.renderer.styledMode&&(this.updateBoxSize(),this.box&&this.box.shadow(c));return this};t.prototype.strokeSetter=function(c,g){this.stroke=c;this.boxAttr(g,c)};t.prototype["stroke-widthSetter"]=function(c,g){c&&(this.needsBox=!0);this["stroke-width"]=c;this.boxAttr(g,c)};t.prototype["text-alignSetter"]=function(c){this.textAlign=c};t.prototype.textSetter=
function(c){"undefined"!==typeof c&&this.text.attr({text:c});this.updateBoxSize();this.updateTextPadding()};t.prototype.updateBoxSize=function(){var c=this.text.element.style,g={},G=this.padding,n=this.paddingLeft,r=H(this.widthSetting)&&H(this.heightSetting)&&!this.textAlign||!y(this.text.textStr)?t.emptyBBox:this.text.getBBox();this.width=(this.widthSetting||r.width||0)+2*G+n;this.height=(this.heightSetting||r.height||0)+2*G;this.baselineOffset=G+Math.min(this.renderer.fontMetrics(c&&c.fontSize,
this.text).b,r.height||Infinity);this.needsBox&&(this.box||(c=this.box=this.symbolKey?this.renderer.symbol(this.symbolKey):this.renderer.rect(),c.addClass(("button"===this.className?"":"highcharts-label-box")+(this.className?" highcharts-"+this.className+"-box":"")),c.add(this),c=this.getCrispAdjust(),g.x=c,g.y=(this.baseline?-this.baselineOffset:0)+c),g.width=Math.round(this.width),g.height=Math.round(this.height),this.box.attr(B(g,this.deferredAttr)),this.deferredAttr={});this.bBox=r};t.prototype.updateTextPadding=
function(){var c=this.text,g=this.baseline?0:this.baselineOffset,t=this.paddingLeft+this.padding;y(this.widthSetting)&&this.bBox&&("center"===this.textAlign||"right"===this.textAlign)&&(t+={center:.5,right:1}[this.textAlign]*(this.widthSetting-this.bBox.width));if(t!==c.x||g!==c.y)c.attr("x",t),c.hasBoxWidthChanged&&(this.bBox=c.getBBox(!0),this.updateBoxSize()),"undefined"!==typeof g&&c.attr("y",g);c.x=t;c.y=g};t.prototype.widthSetter=function(c){this.widthSetting=H(c)?c:void 0};t.prototype.xSetter=
function(c){this.x=c;this.alignFactor&&(c-=this.alignFactor*((this.widthSetting||this.bBox.width)+2*this.padding),this["forceAnimate:x"]=!0);this.xSetting=Math.round(c);this.attr("translateX",this.xSetting)};t.prototype.ySetter=function(c){this.ySetting=this.y=Math.round(c);this.attr("translateY",this.ySetting)};t.emptyBBox={width:0,height:0,x:0,y:0};t.textProps="color cursor direction fontFamily fontSize fontStyle fontWeight lineHeight textAlign textDecoration textOutline textOverflow width".split(" ");
return t}(g)});O(q,"parts/SVGRenderer.js",[q["parts/Color.js"],q["parts/Globals.js"],q["parts/SVGElement.js"],q["parts/SVGLabel.js"],q["parts/Utilities.js"]],function(g,c,q,y,B){var H=B.addEvent,D=B.attr,J=B.createElement,t=B.css,G=B.defined,L=B.destroyObjectProperties,v=B.extend,K=B.isArray,n=B.isNumber,r=B.isObject,C=B.isString,I=B.merge,p=B.objectEach,m=B.pick,d=B.pInt,l=B.splat,k=B.uniqueKey,f=c.charts,a=c.deg2rad,A=c.doc,u=c.isFirefox,E=c.isMS,P=c.isWebKit;B=c.noop;var w=c.svg,M=c.SVG_NS,F=c.symbolSizes,
Q=c.win,e=function(){function b(b,a,e,f,d,k,l){this.width=this.url=this.style=this.isSVG=this.imgCount=this.height=this.gradients=this.globalAnimation=this.defs=this.chartIndex=this.cacheKeys=this.cache=this.boxWrapper=this.box=this.alignedObjects=void 0;this.init(b,a,e,f,d,k,l)}b.prototype.init=function(b,a,e,f,d,k,l){var h=this.createElement("svg").attr({version:"1.1","class":"highcharts-root"});l||h.css(this.getStyle(f));f=h.element;b.appendChild(f);D(b,"dir","ltr");-1===b.innerHTML.indexOf("xmlns")&&
D(f,"xmlns",this.SVG_NS);this.isSVG=!0;this.box=f;this.boxWrapper=h;this.alignedObjects=[];this.url=(u||P)&&A.getElementsByTagName("base").length?Q.location.href.split("#")[0].replace(/<[^>]*>/g,"").replace(/([\('\)])/g,"\\$1").replace(/ /g,"%20"):"";this.createElement("desc").add().element.appendChild(A.createTextNode("Created with Highcharts 8.1.2"));this.defs=this.createElement("defs").add();this.allowHTML=k;this.forExport=d;this.styledMode=l;this.gradients={};this.cache={};this.cacheKeys=[];this.imgCount=
0;this.setSize(a,e,!1);var x;u&&b.getBoundingClientRect&&(a=function(){t(b,{left:0,top:0});x=b.getBoundingClientRect();t(b,{left:Math.ceil(x.left)-x.left+"px",top:Math.ceil(x.top)-x.top+"px"})},a(),this.unSubPixelFix=H(Q,"resize",a))};b.prototype.definition=function(b){function h(b,e){var f;l(b).forEach(function(b){var x=a.createElement(b.tagName),z={};p(b,function(b,h){"tagName"!==h&&"children"!==h&&"textContent"!==h&&(z[h]=b)});x.attr(z);x.add(e||a.defs);b.textContent&&x.element.appendChild(A.createTextNode(b.textContent));
h(b.children||[],x);f=x});return f}var a=this;return h(b)};b.prototype.getStyle=function(b){return this.style=v({fontFamily:'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',fontSize:"12px"},b)};b.prototype.setStyle=function(b){this.boxWrapper.css(this.getStyle(b))};b.prototype.isHidden=function(){return!this.boxWrapper.getBBox().width};b.prototype.destroy=function(){var b=this.defs;this.box=null;this.boxWrapper=this.boxWrapper.destroy();L(this.gradients||{});this.gradients=null;
b&&(this.defs=b.destroy());this.unSubPixelFix&&this.unSubPixelFix();return this.alignedObjects=null};b.prototype.createElement=function(b){var h=new this.Element;h.init(this,b);return h};b.prototype.getRadialAttr=function(b,a){return{cx:b[0]-b[2]/2+a.cx*b[2],cy:b[1]-b[2]/2+a.cy*b[2],r:a.r*b[2]}};b.prototype.truncate=function(b,a,e,f,d,k,l){var h=this,x=b.rotation,z,u=f?1:0,N=(e||f).length,m=N,p=[],w=function(b){a.firstChild&&a.removeChild(a.firstChild);b&&a.appendChild(A.createTextNode(b))},c=function(x,
z){z=z||x;if("undefined"===typeof p[z])if(a.getSubStringLength)try{p[z]=d+a.getSubStringLength(0,f?z+1:z)}catch(ha){""}else h.getSpanWidth&&(w(l(e||f,x)),p[z]=d+h.getSpanWidth(b,a));return p[z]},C;b.rotation=0;var r=c(a.textContent.length);if(C=d+r>k){for(;u<=N;)m=Math.ceil((u+N)/2),f&&(z=l(f,m)),r=c(m,z&&z.length-1),u===N?u=N+1:r>k?N=m-1:u=m;0===N?w(""):e&&N===e.length-1||w(z||l(e||f,m))}f&&f.splice(0,m);b.actualWidth=r;b.rotation=x;return C};b.prototype.buildText=function(b){var h=b.element,a=this,
e=a.forExport,f=m(b.textStr,"").toString(),k=-1!==f.indexOf("<"),l=h.childNodes,u,c=D(h,"x"),r=b.styles,E=b.textWidth,n=r&&r.lineHeight,S=r&&r.textOutline,g=r&&"ellipsis"===r.textOverflow,I=r&&"nowrap"===r.whiteSpace,F=r&&r.fontSize,P,v=l.length;r=E&&!b.added&&this.box;var G=function(b){var e;a.styledMode||(e=/(px|em)$/.test(b&&b.style.fontSize)?b.style.fontSize:F||a.style.fontSize||12);return n?d(n):a.fontMetrics(e,b.getAttribute("style")?b:h).h},Q=function(b,h){p(a.escapes,function(a,e){h&&-1!==
h.indexOf(a)||(b=b.toString().replace(new RegExp(a,"g"),e))});return b},q=function(b,h){var a=b.indexOf("<");b=b.substring(a,b.indexOf(">")-a);a=b.indexOf(h+"=");if(-1!==a&&(a=a+h.length+1,h=b.charAt(a),'"'===h||"'"===h))return b=b.substring(a+1),b.substring(0,b.indexOf(h))},K=/<br.*?>/g;var J=[f,g,I,n,S,F,E].join();if(J!==b.textCache){for(b.textCache=J;v--;)h.removeChild(l[v]);k||S||g||E||-1!==f.indexOf(" ")&&(!I||K.test(f))?(r&&r.appendChild(h),k?(f=a.styledMode?f.replace(/<(b|strong)>/g,'<span class="highcharts-strong">').replace(/<(i|em)>/g,
'<span class="highcharts-emphasized">'):f.replace(/<(b|strong)>/g,'<span style="font-weight:bold">').replace(/<(i|em)>/g,'<span style="font-style:italic">'),f=f.replace(/<a/g,"<span").replace(/<\/(b|strong|i|em|a)>/g,"</span>").split(K)):f=[f],f=f.filter(function(b){return""!==b}),f.forEach(function(f,x){var z=0,d=0;f=f.replace(/^\s+|\s+$/g,"").replace(/<span/g,"|||<span").replace(/<\/span>/g,"</span>|||");var k=f.split("|||");k.forEach(function(f){if(""!==f||1===k.length){var l={},N=A.createElementNS(a.SVG_NS,
"tspan"),m,p;(m=q(f,"class"))&&D(N,"class",m);if(m=q(f,"style"))m=m.replace(/(;| |^)color([ :])/,"$1fill$2"),D(N,"style",m);if((p=q(f,"href"))&&!e&&-1===p.split(":")[0].toLowerCase().indexOf("javascript")){var C=A.createElementNS(a.SVG_NS,"a");D(C,"href",p);D(N,"class","highcharts-anchor");C.appendChild(N);a.styledMode||t(N,{cursor:"pointer"})}f=Q(f.replace(/<[a-zA-Z\/](.|\n)*?>/g,"")||" ");if(" "!==f){N.appendChild(A.createTextNode(f));z?l.dx=0:x&&null!==c&&(l.x=c);D(N,l);h.appendChild(C||N);!z&&
P&&(!w&&e&&t(N,{display:"block"}),D(N,"dy",G(N)));if(E){var r=f.replace(/([^\^])-/g,"$1- ").split(" ");l=!I&&(1<k.length||x||1<r.length);C=0;p=G(N);if(g)u=a.truncate(b,N,f,void 0,0,Math.max(0,E-parseInt(F||12,10)),function(b,h){return b.substring(0,h)+"\u2026"});else if(l)for(;r.length;)r.length&&!I&&0<C&&(N=A.createElementNS(M,"tspan"),D(N,{dy:p,x:c}),m&&D(N,"style",m),N.appendChild(A.createTextNode(r.join(" ").replace(/- /g,"-"))),h.appendChild(N)),a.truncate(b,N,null,r,0===C?d:0,E,function(b,h){return r.slice(0,
h).join(" ").replace(/- /g,"-")}),d=b.actualWidth,C++}z++}}});P=P||h.childNodes.length}),g&&u&&b.attr("title",Q(b.textStr||"",["&lt;","&gt;"])),r&&r.removeChild(h),C(S)&&b.applyTextOutline&&b.applyTextOutline(S)):h.appendChild(A.createTextNode(Q(f)))}};b.prototype.getContrast=function(b){b=g.parse(b).rgba;b[0]*=1;b[1]*=1.2;b[2]*=.5;return 459<b[0]+b[1]+b[2]?"#000000":"#FFFFFF"};b.prototype.button=function(b,a,e,f,d,k,l,u,m,p){var h=this.label(b,a,e,m,void 0,void 0,p,void 0,"button"),x=0,z=this.styledMode;
b=d&&d.style||{};d&&d.style&&delete d.style;h.attr(I({padding:8,r:2},d));if(!z){d=I({fill:"#f7f7f7",stroke:"#cccccc","stroke-width":1,style:{color:"#333333",cursor:"pointer",fontWeight:"normal"}},{style:b},d);var N=d.style;delete d.style;k=I(d,{fill:"#e6e6e6"},k);var A=k.style;delete k.style;l=I(d,{fill:"#e6ebf5",style:{color:"#000000",fontWeight:"bold"}},l);var w=l.style;delete l.style;u=I(d,{style:{color:"#cccccc"}},u);var c=u.style;delete u.style}H(h.element,E?"mouseover":"mouseenter",function(){3!==
x&&h.setState(1)});H(h.element,E?"mouseout":"mouseleave",function(){3!==x&&h.setState(x)});h.setState=function(b){1!==b&&(h.state=x=b);h.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-"+["normal","hover","pressed","disabled"][b||0]);z||h.attr([d,k,l,u][b||0]).css([N,A,w,c][b||0])};z||h.attr(d).css(v({cursor:"default"},N));return h.on("click",function(b){3!==x&&f.call(h,b)})};b.prototype.crispLine=function(b,a,e){void 0===e&&(e="round");var h=b[0],f=b[1];
h[1]===f[1]&&(h[1]=f[1]=Math[e](h[1])-a%2/2);h[2]===f[2]&&(h[2]=f[2]=Math[e](h[2])+a%2/2);return b};b.prototype.path=function(b){var h=this.styledMode?{}:{fill:"none"};K(b)?h.d=b:r(b)&&v(h,b);return this.createElement("path").attr(h)};b.prototype.circle=function(b,a,e){b=r(b)?b:"undefined"===typeof b?{}:{x:b,y:a,r:e};a=this.createElement("circle");a.xSetter=a.ySetter=function(b,h,a){a.setAttribute("c"+h,b)};return a.attr(b)};b.prototype.arc=function(b,a,e,f,d,k){r(b)?(f=b,a=f.y,e=f.r,b=f.x):f={innerR:f,
start:d,end:k};b=this.symbol("arc",b,a,e,e,f);b.r=e;return b};b.prototype.rect=function(b,a,e,f,d,k){d=r(b)?b.r:d;var h=this.createElement("rect");b=r(b)?b:"undefined"===typeof b?{}:{x:b,y:a,width:Math.max(e,0),height:Math.max(f,0)};this.styledMode||("undefined"!==typeof k&&(b.strokeWidth=k,b=h.crisp(b)),b.fill="none");d&&(b.r=d);h.rSetter=function(b,a,e){h.r=b;D(e,{rx:b,ry:b})};h.rGetter=function(){return h.r};return h.attr(b)};b.prototype.setSize=function(b,a,e){var h=this.alignedObjects,f=h.length;
this.width=b;this.height=a;for(this.boxWrapper.animate({width:b,height:a},{step:function(){this.attr({viewBox:"0 0 "+this.attr("width")+" "+this.attr("height")})},duration:m(e,!0)?void 0:0});f--;)h[f].align()};b.prototype.g=function(b){var h=this.createElement("g");return b?h.attr({"class":"highcharts-"+b}):h};b.prototype.image=function(b,a,e,f,d,k){var h={preserveAspectRatio:"none"},x=function(b,h){b.setAttributeNS?b.setAttributeNS("http://www.w3.org/1999/xlink","href",h):b.setAttribute("hc-svg-href",
h)},z=function(h){x(l.element,b);k.call(l,h)};1<arguments.length&&v(h,{x:a,y:e,width:f,height:d});var l=this.createElement("image").attr(h);k?(x(l.element,"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="),h=new Q.Image,H(h,"load",z),h.src=b,h.complete&&z({})):x(l.element,b);return l};b.prototype.symbol=function(b,a,e,d,k,l){var h=this,x=/^url\((.*?)\)$/,z=x.test(b),u=!z&&(this.symbols[b]?b:"circle"),N=u&&this.symbols[u],p;if(N){"number"===typeof a&&(p=N.call(this.symbols,
Math.round(a||0),Math.round(e||0),d||0,k||0,l));var w=this.path(p);h.styledMode||w.attr("fill","none");v(w,{symbolName:u,x:a,y:e,width:d,height:k});l&&v(w,l)}else if(z){var c=b.match(x)[1];w=this.image(c);w.imgwidth=m(F[c]&&F[c].width,l&&l.width);w.imgheight=m(F[c]&&F[c].height,l&&l.height);var C=function(){w.attr({width:w.width,height:w.height})};["width","height"].forEach(function(b){w[b+"Setter"]=function(b,h){var a={},e=this["img"+h],f="width"===h?"translateX":"translateY";this[h]=b;G(e)&&(l&&
"within"===l.backgroundSize&&this.width&&this.height&&(e=Math.round(e*Math.min(this.width/this.imgwidth,this.height/this.imgheight))),this.element&&this.element.setAttribute(h,e),this.alignByTranslate||(a[f]=((this[h]||0)-e)/2,this.attr(a)))}});G(a)&&w.attr({x:a,y:e});w.isImg=!0;G(w.imgwidth)&&G(w.imgheight)?C():(w.attr({width:0,height:0}),J("img",{onload:function(){var b=f[h.chartIndex];0===this.width&&(t(this,{position:"absolute",top:"-999em"}),A.body.appendChild(this));F[c]={width:this.width,height:this.height};
w.imgwidth=this.width;w.imgheight=this.height;w.element&&C();this.parentNode&&this.parentNode.removeChild(this);h.imgCount--;if(!h.imgCount&&b&&!b.hasLoaded)b.onload()},src:c}),this.imgCount++)}return w};b.prototype.clipRect=function(b,a,e,f){var h=k()+"-",x=this.createElement("clipPath").attr({id:h}).add(this.defs);b=this.rect(b,a,e,f,0).add(x);b.id=h;b.clipPath=x;b.count=0;return b};b.prototype.text=function(b,a,e,f){var h={};if(f&&(this.allowHTML||!this.forExport))return this.html(b,a,e);h.x=Math.round(a||
0);e&&(h.y=Math.round(e));G(b)&&(h.text=b);b=this.createElement("text").attr(h);f||(b.xSetter=function(b,h,a){var e=a.getElementsByTagName("tspan"),f=a.getAttribute(h),x;for(x=0;x<e.length;x++){var d=e[x];d.getAttribute(h)===f&&d.setAttribute(h,b)}a.setAttribute(h,b)});return b};b.prototype.fontMetrics=function(b,a){b=!this.styledMode&&/px/.test(b)||!Q.getComputedStyle?b||a&&a.style&&a.style.fontSize||this.style&&this.style.fontSize:a&&q.prototype.getStyle.call(a,"font-size");b=/px/.test(b)?d(b):
12;a=24>b?b+3:Math.round(1.2*b);return{h:a,b:Math.round(.8*a),f:b}};b.prototype.rotCorr=function(b,e,f){var h=b;e&&f&&(h=Math.max(h*Math.cos(e*a),4));return{x:-b/3*Math.sin(e*a),y:h}};b.prototype.pathToSegments=function(b){for(var h=[],a=[],e={A:8,C:7,H:2,L:3,M:3,Q:5,S:5,T:3,V:2},f=0;f<b.length;f++)C(a[0])&&n(b[f])&&a.length===e[a[0].toUpperCase()]&&b.splice(f,0,a[0].replace("M","L").replace("m","l")),"string"===typeof b[f]&&(a.length&&h.push(a.slice(0)),a.length=0),a.push(b[f]);h.push(a.slice(0));
return h};b.prototype.label=function(b,a,e,f,d,k,l,u,m){return new y(this,b,a,e,f,d,k,l,u,m)};return b}();e.prototype.Element=q;e.prototype.SVG_NS=M;e.prototype.draw=B;e.prototype.escapes={"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"};e.prototype.symbols={circle:function(b,h,a,e){return this.arc(b+a/2,h+e/2,a/2,e/2,{start:.5*Math.PI,end:2.5*Math.PI,open:!1})},square:function(b,h,a,e){return[["M",b,h],["L",b+a,h],["L",b+a,h+e],["L",b,h+e],["Z"]]},triangle:function(b,h,a,e){return[["M",
b+a/2,h],["L",b+a,h+e],["L",b,h+e],["Z"]]},"triangle-down":function(b,h,a,e){return[["M",b,h],["L",b+a,h],["L",b+a/2,h+e],["Z"]]},diamond:function(b,h,a,e){return[["M",b+a/2,h],["L",b+a,h+e/2],["L",b+a/2,h+e],["L",b,h+e/2],["Z"]]},arc:function(b,h,a,e,f){var d=[];if(f){var x=f.start||0,k=f.end||0,z=f.r||a;a=f.r||e||a;var l=.001>Math.abs(k-x-2*Math.PI);k-=.001;e=f.innerR;l=m(f.open,l);var u=Math.cos(x),p=Math.sin(x),N=Math.cos(k),A=Math.sin(k);x=m(f.longArc,.001>k-x-Math.PI?0:1);d.push(["M",b+z*u,
h+a*p],["A",z,a,0,x,m(f.clockwise,1),b+z*N,h+a*A]);G(e)&&d.push(l?["M",b+e*N,h+e*A]:["L",b+e*N,h+e*A],["A",e,e,0,x,G(f.clockwise)?1-f.clockwise:0,b+e*u,h+e*p]);l||d.push(["Z"])}return d},callout:function(b,h,a,e,f){var d=Math.min(f&&f.r||0,a,e),k=d+6,x=f&&f.anchorX||0;f=f&&f.anchorY||0;var z=[["M",b+d,h],["L",b+a-d,h],["C",b+a,h,b+a,h,b+a,h+d],["L",b+a,h+e-d],["C",b+a,h+e,b+a,h+e,b+a-d,h+e],["L",b+d,h+e],["C",b,h+e,b,h+e,b,h+e-d],["L",b,h+d],["C",b,h,b,h,b+d,h]];x&&x>a?f>h+k&&f<h+e-k?z.splice(3,1,
["L",b+a,f-6],["L",b+a+6,f],["L",b+a,f+6],["L",b+a,h+e-d]):z.splice(3,1,["L",b+a,e/2],["L",x,f],["L",b+a,e/2],["L",b+a,h+e-d]):x&&0>x?f>h+k&&f<h+e-k?z.splice(7,1,["L",b,f+6],["L",b-6,f],["L",b,f-6],["L",b,h+d]):z.splice(7,1,["L",b,e/2],["L",x,f],["L",b,e/2],["L",b,h+d]):f&&f>e&&x>b+k&&x<b+a-k?z.splice(5,1,["L",x+6,h+e],["L",x,h+e+6],["L",x-6,h+e],["L",b+d,h+e]):f&&0>f&&x>b+k&&x<b+a-k&&z.splice(1,1,["L",x-6,h],["L",x,h-6],["L",x+6,h],["L",a-d,h]);return z}};c.SVGRenderer=e;c.Renderer=c.SVGRenderer;
return c.Renderer});O(q,"parts/Html.js",[q["parts/Globals.js"],q["parts/SVGElement.js"],q["parts/SVGRenderer.js"],q["parts/Utilities.js"]],function(g,c,q,y){var B=y.attr,H=y.createElement,D=y.css,J=y.defined,t=y.extend,G=y.pick,L=y.pInt,v=g.isFirefox,K=g.isMS,n=g.isWebKit,r=g.win;t(c.prototype,{htmlCss:function(c){var r="SPAN"===this.element.tagName&&c&&"width"in c,p=G(r&&c.width,void 0);if(r){delete c.width;this.textWidth=p;var m=!0}c&&"ellipsis"===c.textOverflow&&(c.whiteSpace="nowrap",c.overflow=
"hidden");this.styles=t(this.styles,c);D(this.element,c);m&&this.htmlUpdateTransform();return this},htmlGetBBox:function(){var c=this.element;return{x:c.offsetLeft,y:c.offsetTop,width:c.offsetWidth,height:c.offsetHeight}},htmlUpdateTransform:function(){if(this.added){var c=this.renderer,r=this.element,p=this.translateX||0,m=this.translateY||0,d=this.x||0,l=this.y||0,k=this.textAlign||"left",f={left:0,center:.5,right:1}[k],a=this.styles,A=a&&a.whiteSpace;D(r,{marginLeft:p,marginTop:m});!c.styledMode&&
this.shadows&&this.shadows.forEach(function(a){D(a,{marginLeft:p+1,marginTop:m+1})});this.inverted&&[].forEach.call(r.childNodes,function(a){c.invertChild(a,r)});if("SPAN"===r.tagName){a=this.rotation;var u=this.textWidth&&L(this.textWidth),E=[a,k,r.innerHTML,this.textWidth,this.textAlign].join(),n;(n=u!==this.oldTextWidth)&&!(n=u>this.oldTextWidth)&&((n=this.textPxLength)||(D(r,{width:"",whiteSpace:A||"nowrap"}),n=r.offsetWidth),n=n>u);n&&(/[ \-]/.test(r.textContent||r.innerText)||"ellipsis"===r.style.textOverflow)?
(D(r,{width:u+"px",display:"block",whiteSpace:A||"normal"}),this.oldTextWidth=u,this.hasBoxWidthChanged=!0):this.hasBoxWidthChanged=!1;E!==this.cTT&&(A=c.fontMetrics(r.style.fontSize,r).b,!J(a)||a===(this.oldRotation||0)&&k===this.oldAlign||this.setSpanRotation(a,f,A),this.getSpanCorrection(!J(a)&&this.textPxLength||r.offsetWidth,A,f,a,k));D(r,{left:d+(this.xCorr||0)+"px",top:l+(this.yCorr||0)+"px"});this.cTT=E;this.oldRotation=a;this.oldAlign=k}}else this.alignOnAdd=!0},setSpanRotation:function(c,
r,p){var m={},d=this.renderer.getTransformKey();m[d]=m.transform="rotate("+c+"deg)";m[d+(v?"Origin":"-origin")]=m.transformOrigin=100*r+"% "+p+"px";D(this.element,m)},getSpanCorrection:function(c,r,p){this.xCorr=-c*p;this.yCorr=-r}});t(q.prototype,{getTransformKey:function(){return K&&!/Edge/.test(r.navigator.userAgent)?"-ms-transform":n?"-webkit-transform":v?"MozTransform":r.opera?"-o-transform":""},html:function(r,n,p){var m=this.createElement("span"),d=m.element,l=m.renderer,k=l.isSVG,f=function(a,
f){["opacity","visibility"].forEach(function(d){a[d+"Setter"]=function(k,l,u){var m=a.div?a.div.style:f;c.prototype[d+"Setter"].call(this,k,l,u);m&&(m[l]=k)}});a.addedSetters=!0};m.textSetter=function(a){a!==d.innerHTML&&(delete this.bBox,delete this.oldTextWidth);this.textStr=a;d.innerHTML=G(a,"");m.doTransform=!0};k&&f(m,m.element.style);m.xSetter=m.ySetter=m.alignSetter=m.rotationSetter=function(a,f){"align"===f&&(f="textAlign");m[f]=a;m.doTransform=!0};m.afterSetters=function(){this.doTransform&&
(this.htmlUpdateTransform(),this.doTransform=!1)};m.attr({text:r,x:Math.round(n),y:Math.round(p)}).css({position:"absolute"});l.styledMode||m.css({fontFamily:this.style.fontFamily,fontSize:this.style.fontSize});d.style.whiteSpace="nowrap";m.css=m.htmlCss;k&&(m.add=function(a){var k=l.box.parentNode,u=[];if(this.parentGroup=a){var p=a.div;if(!p){for(;a;)u.push(a),a=a.parentGroup;u.reverse().forEach(function(a){function d(f,e){a[e]=f;"translateX"===e?A.left=f+"px":A.top=f+"px";a.doTransform=!0}var l=
B(a.element,"class");p=a.div=a.div||H("div",l?{className:l}:void 0,{position:"absolute",left:(a.translateX||0)+"px",top:(a.translateY||0)+"px",display:a.display,opacity:a.opacity,pointerEvents:a.styles&&a.styles.pointerEvents},p||k);var A=p.style;t(a,{classSetter:function(a){return function(e){this.element.setAttribute("class",e);a.className=e}}(p),on:function(){u[0].div&&m.on.apply({element:u[0].div},arguments);return a},translateXSetter:d,translateYSetter:d});a.addedSetters||f(a)})}}else p=k;p.appendChild(d);
m.added=!0;m.alignOnAdd&&m.htmlUpdateTransform();return m});return m}})});O(q,"parts/Tick.js",[q["parts/Globals.js"],q["parts/Utilities.js"]],function(g,c){var q=c.clamp,y=c.correctFloat,B=c.defined,H=c.destroyObjectProperties,D=c.extend,J=c.fireEvent,t=c.isNumber,G=c.merge,L=c.objectEach,v=c.pick,K=g.deg2rad;c=function(){function c(c,C,n,p,m){this.isNewLabel=this.isNew=!0;this.axis=c;this.pos=C;this.type=n||"";this.parameters=m||{};this.tickmarkOffset=this.parameters.tickmarkOffset;this.options=
this.parameters.options;J(this,"init");n||p||this.addLabel()}c.prototype.addLabel=function(){var c=this,C=c.axis,n=C.options,p=C.chart,m=C.categories,d=C.logarithmic,l=C.names,k=c.pos,f=v(c.options&&c.options.labels,n.labels),a=C.tickPositions,A=k===a[0],u=k===a[a.length-1];l=this.parameters.category||(m?v(m[k],l[k],k):k);var E=c.label;m=(!f.step||1===f.step)&&1===C.tickInterval;a=a.info;var g,w;if(C.dateTime&&a){var M=p.time.resolveDTLFormat(n.dateTimeLabelFormats[!n.grid&&a.higherRanks[k]||a.unitName]);
var F=M.main}c.isFirst=A;c.isLast=u;c.formatCtx={axis:C,chart:p,isFirst:A,isLast:u,dateTimeLabelFormat:F,tickPositionInfo:a,value:d?y(d.lin2log(l)):l,pos:k};n=C.labelFormatter.call(c.formatCtx,this.formatCtx);if(w=M&&M.list)c.shortenLabel=function(){for(g=0;g<w.length;g++)if(E.attr({text:C.labelFormatter.call(D(c.formatCtx,{dateTimeLabelFormat:w[g]}))}),E.getBBox().width<C.getSlotWidth(c)-2*v(f.padding,5))return;E.attr({text:""})};m&&C._addedPlotLB&&C.isXAxis&&c.moveLabel(n,f);B(E)||c.movedLabel?
E&&E.textStr!==n&&!m&&(!E.textWidth||f.style&&f.style.width||E.styles.width||E.css({width:null}),E.attr({text:n}),E.textPxLength=E.getBBox().width):(c.label=E=c.createLabel({x:0,y:0},n,f),c.rotation=0)};c.prototype.createLabel=function(c,C,n){var p=this.axis,m=p.chart;if(c=B(C)&&n.enabled?m.renderer.text(C,c.x,c.y,n.useHTML).add(p.labelGroup):null)m.styledMode||c.css(G(n.style)),c.textPxLength=c.getBBox().width;return c};c.prototype.destroy=function(){H(this,this.axis)};c.prototype.getPosition=function(c,
C,n,p){var m=this.axis,d=m.chart,l=p&&d.oldChartHeight||d.chartHeight;c={x:c?y(m.translate(C+n,null,null,p)+m.transB):m.left+m.offset+(m.opposite?(p&&d.oldChartWidth||d.chartWidth)-m.right-m.left:0),y:c?l-m.bottom+m.offset-(m.opposite?m.height:0):y(l-m.translate(C+n,null,null,p)-m.transB)};c.y=q(c.y,-1E5,1E5);J(this,"afterGetPosition",{pos:c});return c};c.prototype.getLabelPosition=function(c,C,n,p,m,d,l,k){var f=this.axis,a=f.transA,A=f.isLinked&&f.linkedParent?f.linkedParent.reversed:f.reversed,
u=f.staggerLines,r=f.tickRotCorr||{x:0,y:0},g=m.y,w=p||f.reserveSpaceDefault?0:-f.labelOffset*("center"===f.labelAlign?.5:1),M={};B(g)||(g=0===f.side?n.rotation?-8:-n.getBBox().height:2===f.side?r.y+8:Math.cos(n.rotation*K)*(r.y-n.getBBox(!1,0).height/2));c=c+m.x+w+r.x-(d&&p?d*a*(A?-1:1):0);C=C+g-(d&&!p?d*a*(A?1:-1):0);u&&(n=l/(k||1)%u,f.opposite&&(n=u-n-1),C+=f.labelOffset/u*n);M.x=c;M.y=Math.round(C);J(this,"afterGetLabelPosition",{pos:M,tickmarkOffset:d,index:l});return M};c.prototype.getLabelSize=
function(){return this.label?this.label.getBBox()[this.axis.horiz?"height":"width"]:0};c.prototype.getMarkPath=function(c,C,n,p,m,d){return d.crispLine([["M",c,C],["L",c+(m?0:-n),C+(m?n:0)]],p)};c.prototype.handleOverflow=function(c){var r=this.axis,n=r.options.labels,p=c.x,m=r.chart.chartWidth,d=r.chart.spacing,l=v(r.labelLeft,Math.min(r.pos,d[3]));d=v(r.labelRight,Math.max(r.isRadial?0:r.pos+r.len,m-d[1]));var k=this.label,f=this.rotation,a={left:0,center:.5,right:1}[r.labelAlign||k.attr("align")],
A=k.getBBox().width,u=r.getSlotWidth(this),E=u,g=1,w,M={};if(f||"justify"!==v(n.overflow,"justify"))0>f&&p-a*A<l?w=Math.round(p/Math.cos(f*K)-l):0<f&&p+a*A>d&&(w=Math.round((m-p)/Math.cos(f*K)));else if(m=p+(1-a)*A,p-a*A<l?E=c.x+E*(1-a)-l:m>d&&(E=d-c.x+E*a,g=-1),E=Math.min(u,E),E<u&&"center"===r.labelAlign&&(c.x+=g*(u-E-a*(u-Math.min(A,E)))),A>E||r.autoRotation&&(k.styles||{}).width)w=E;w&&(this.shortenLabel?this.shortenLabel():(M.width=Math.floor(w)+"px",(n.style||{}).textOverflow||(M.textOverflow=
"ellipsis"),k.css(M)))};c.prototype.moveLabel=function(c,C){var r=this,p=r.label,m=!1,d=r.axis,l=d.reversed,k=d.chart.inverted;p&&p.textStr===c?(r.movedLabel=p,m=!0,delete r.label):L(d.ticks,function(a){m||a.isNew||a===r||!a.label||a.label.textStr!==c||(r.movedLabel=a.label,m=!0,a.labelPos=r.movedLabel.xy,delete a.label)});if(!m&&(r.labelPos||p)){var f=r.labelPos||p.xy;p=k?f.x:l?0:d.width+d.left;d=k?l?d.width+d.left:0:f.y;r.movedLabel=r.createLabel({x:p,y:d},c,C);r.movedLabel&&r.movedLabel.attr({opacity:0})}};
c.prototype.render=function(c,C,n){var p=this.axis,m=p.horiz,d=this.pos,l=v(this.tickmarkOffset,p.tickmarkOffset);d=this.getPosition(m,d,l,C);l=d.x;var k=d.y;p=m&&l===p.pos+p.len||!m&&k===p.pos?-1:1;n=v(n,1);this.isActive=!0;this.renderGridLine(C,n,p);this.renderMark(d,n,p);this.renderLabel(d,C,n,c);this.isNew=!1;J(this,"afterRender")};c.prototype.renderGridLine=function(c,C,n){var p=this.axis,m=p.options,d=this.gridLine,l={},k=this.pos,f=this.type,a=v(this.tickmarkOffset,p.tickmarkOffset),A=p.chart.renderer,
u=f?f+"Grid":"grid",r=m[u+"LineWidth"],g=m[u+"LineColor"];m=m[u+"LineDashStyle"];d||(p.chart.styledMode||(l.stroke=g,l["stroke-width"]=r,m&&(l.dashstyle=m)),f||(l.zIndex=1),c&&(C=0),this.gridLine=d=A.path().attr(l).addClass("highcharts-"+(f?f+"-":"")+"grid-line").add(p.gridGroup));if(d&&(n=p.getPlotLinePath({value:k+a,lineWidth:d.strokeWidth()*n,force:"pass",old:c})))d[c||this.isNew?"attr":"animate"]({d:n,opacity:C})};c.prototype.renderMark=function(c,n,g){var p=this.axis,m=p.options,d=p.chart.renderer,
l=this.type,k=l?l+"Tick":"tick",f=p.tickSize(k),a=this.mark,A=!a,u=c.x;c=c.y;var r=v(m[k+"Width"],!l&&p.isXAxis?1:0);m=m[k+"Color"];f&&(p.opposite&&(f[0]=-f[0]),A&&(this.mark=a=d.path().addClass("highcharts-"+(l?l+"-":"")+"tick").add(p.axisGroup),p.chart.styledMode||a.attr({stroke:m,"stroke-width":r})),a[A?"attr":"animate"]({d:this.getMarkPath(u,c,f[0],a.strokeWidth()*g,p.horiz,d),opacity:n}))};c.prototype.renderLabel=function(c,n,g,p){var m=this.axis,d=m.horiz,l=m.options,k=this.label,f=l.labels,
a=f.step;m=v(this.tickmarkOffset,m.tickmarkOffset);var A=!0,u=c.x;c=c.y;k&&t(u)&&(k.xy=c=this.getLabelPosition(u,c,k,d,f,m,p,a),this.isFirst&&!this.isLast&&!v(l.showFirstLabel,1)||this.isLast&&!this.isFirst&&!v(l.showLastLabel,1)?A=!1:!d||f.step||f.rotation||n||0===g||this.handleOverflow(c),a&&p%a&&(A=!1),A&&t(c.y)?(c.opacity=g,k[this.isNewLabel?"attr":"animate"](c),this.isNewLabel=!1):(k.attr("y",-9999),this.isNewLabel=!0))};c.prototype.replaceMovedLabel=function(){var c=this.label,n=this.axis,g=
n.reversed,p=this.axis.chart.inverted;if(c&&!this.isNew){var m=p?c.xy.x:g?n.left:n.width+n.left;g=p?g?n.width+n.top:n.top:c.xy.y;c.animate({x:m,y:g,opacity:0},void 0,c.destroy);delete this.label}n.isDirty=!0;this.label=this.movedLabel;delete this.movedLabel};return c}();g.Tick=c;return g.Tick});O(q,"parts/Time.js",[q["parts/Globals.js"],q["parts/Utilities.js"]],function(g,c){var q=c.defined,y=c.error,B=c.extend,H=c.isObject,D=c.merge,J=c.objectEach,t=c.pad,G=c.pick,L=c.splat,v=c.timeUnits,K=g.win;
c=function(){function c(c){this.options={};this.variableTimezone=this.useUTC=!1;this.Date=K.Date;this.getTimezoneOffset=this.timezoneOffsetFunction();this.update(c)}c.prototype.get=function(c,n){if(this.variableTimezone||this.timezoneOffset){var r=n.getTime(),p=r-this.getTimezoneOffset(n);n.setTime(p);c=n["getUTC"+c]();n.setTime(r);return c}return this.useUTC?n["getUTC"+c]():n["get"+c]()};c.prototype.set=function(c,n,g){if(this.variableTimezone||this.timezoneOffset){if("Milliseconds"===c||"Seconds"===
c||"Minutes"===c)return n["setUTC"+c](g);var p=this.getTimezoneOffset(n);p=n.getTime()-p;n.setTime(p);n["setUTC"+c](g);c=this.getTimezoneOffset(n);p=n.getTime()+c;return n.setTime(p)}return this.useUTC?n["setUTC"+c](g):n["set"+c](g)};c.prototype.update=function(c){var n=G(c&&c.useUTC,!0);this.options=c=D(!0,this.options||{},c);this.Date=c.Date||K.Date||Date;this.timezoneOffset=(this.useUTC=n)&&c.timezoneOffset;this.getTimezoneOffset=this.timezoneOffsetFunction();this.variableTimezone=!(n&&!c.getTimezoneOffset&&
!c.timezone)};c.prototype.makeTime=function(c,n,t,p,m,d){if(this.useUTC){var l=this.Date.UTC.apply(0,arguments);var k=this.getTimezoneOffset(l);l+=k;var f=this.getTimezoneOffset(l);k!==f?l+=f-k:k-36E5!==this.getTimezoneOffset(l-36E5)||g.isSafari||(l-=36E5)}else l=(new this.Date(c,n,G(t,1),G(p,0),G(m,0),G(d,0))).getTime();return l};c.prototype.timezoneOffsetFunction=function(){var c=this,n=this.options,g=K.moment;if(!this.useUTC)return function(c){return 6E4*(new Date(c.toString())).getTimezoneOffset()};
if(n.timezone){if(g)return function(c){return 6E4*-g.tz(c,n.timezone).utcOffset()};y(25)}return this.useUTC&&n.getTimezoneOffset?function(c){return 6E4*n.getTimezoneOffset(c.valueOf())}:function(){return 6E4*(c.timezoneOffset||0)}};c.prototype.dateFormat=function(c,n,v){var p;if(!q(n)||isNaN(n))return(null===(p=g.defaultOptions.lang)||void 0===p?void 0:p.invalidDate)||"";c=G(c,"%Y-%m-%d %H:%M:%S");var m=this;p=new this.Date(n);var d=this.get("Hours",p),l=this.get("Day",p),k=this.get("Date",p),f=this.get("Month",
p),a=this.get("FullYear",p),A=g.defaultOptions.lang,u=null===A||void 0===A?void 0:A.weekdays,E=null===A||void 0===A?void 0:A.shortWeekdays;p=B({a:E?E[l]:u[l].substr(0,3),A:u[l],d:t(k),e:t(k,2," "),w:l,b:A.shortMonths[f],B:A.months[f],m:t(f+1),o:f+1,y:a.toString().substr(2,2),Y:a,H:t(d),k:d,I:t(d%12||12),l:d%12||12,M:t(this.get("Minutes",p)),p:12>d?"AM":"PM",P:12>d?"am":"pm",S:t(p.getSeconds()),L:t(Math.floor(n%1E3),3)},g.dateFormats);J(p,function(a,f){for(;-1!==c.indexOf("%"+f);)c=c.replace("%"+f,
"function"===typeof a?a.call(m,n):a)});return v?c.substr(0,1).toUpperCase()+c.substr(1):c};c.prototype.resolveDTLFormat=function(c){return H(c,!0)?c:(c=L(c),{main:c[0],from:c[1],to:c[2]})};c.prototype.getTimeTicks=function(c,n,g,p){var m=this,d=[],l={};var k=new m.Date(n);var f=c.unitRange,a=c.count||1,A;p=G(p,1);if(q(n)){m.set("Milliseconds",k,f>=v.second?0:a*Math.floor(m.get("Milliseconds",k)/a));f>=v.second&&m.set("Seconds",k,f>=v.minute?0:a*Math.floor(m.get("Seconds",k)/a));f>=v.minute&&m.set("Minutes",
k,f>=v.hour?0:a*Math.floor(m.get("Minutes",k)/a));f>=v.hour&&m.set("Hours",k,f>=v.day?0:a*Math.floor(m.get("Hours",k)/a));f>=v.day&&m.set("Date",k,f>=v.month?1:Math.max(1,a*Math.floor(m.get("Date",k)/a)));if(f>=v.month){m.set("Month",k,f>=v.year?0:a*Math.floor(m.get("Month",k)/a));var u=m.get("FullYear",k)}f>=v.year&&m.set("FullYear",k,u-u%a);f===v.week&&(u=m.get("Day",k),m.set("Date",k,m.get("Date",k)-u+p+(u<p?-7:0)));u=m.get("FullYear",k);p=m.get("Month",k);var E=m.get("Date",k),r=m.get("Hours",
k);n=k.getTime();m.variableTimezone&&(A=g-n>4*v.month||m.getTimezoneOffset(n)!==m.getTimezoneOffset(g));n=k.getTime();for(k=1;n<g;)d.push(n),n=f===v.year?m.makeTime(u+k*a,0):f===v.month?m.makeTime(u,p+k*a):!A||f!==v.day&&f!==v.week?A&&f===v.hour&&1<a?m.makeTime(u,p,E,r+k*a):n+f*a:m.makeTime(u,p,E+k*a*(f===v.day?1:7)),k++;d.push(n);f<=v.hour&&1E4>d.length&&d.forEach(function(a){0===a%18E5&&"000000000"===m.dateFormat("%H%M%S%L",a)&&(l[a]="day")})}d.info=B(c,{higherRanks:l,totalRange:f*a});return d};
return c}();g.Time=c;return g.Time});O(q,"parts/Options.js",[q["parts/Globals.js"],q["parts/Time.js"],q["parts/Color.js"],q["parts/Utilities.js"]],function(g,c,q,y){q=q.parse;y=y.merge;g.defaultOptions={colors:"#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" "),symbols:["circle","diamond","square","triangle","triangle-down"],lang:{loading:"Loading...",months:"January February March April May June July August September October November December".split(" "),
shortMonths:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),weekdays:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),decimalPoint:".",numericSymbols:"kMGTPE".split(""),resetZoom:"Reset zoom",resetZoomTitle:"Reset zoom level 1:1",thousandsSep:" "},global:{},time:{Date:void 0,getTimezoneOffset:void 0,timezone:void 0,timezoneOffset:0,useUTC:!0},chart:{styledMode:!1,borderRadius:0,colorCount:10,defaultSeriesType:"line",ignoreHiddenSeries:!0,spacing:[10,10,15,10],resetZoomButton:{theme:{zIndex:6},
position:{align:"right",x:-10,y:10}},width:null,height:null,borderColor:"#335cad",backgroundColor:"#ffffff",plotBorderColor:"#cccccc"},title:{text:"Chart title",align:"center",margin:15,widthAdjust:-44},subtitle:{text:"",align:"center",widthAdjust:-44},caption:{margin:15,text:"",align:"left",verticalAlign:"bottom"},plotOptions:{},labels:{style:{position:"absolute",color:"#333333"}},legend:{enabled:!0,align:"center",alignColumns:!0,layout:"horizontal",labelFormatter:function(){return this.name},borderColor:"#999999",
borderRadius:0,navigation:{activeColor:"#003399",inactiveColor:"#cccccc"},itemStyle:{color:"#333333",cursor:"pointer",fontSize:"12px",fontWeight:"bold",textOverflow:"ellipsis"},itemHoverStyle:{color:"#000000"},itemHiddenStyle:{color:"#cccccc"},shadow:!1,itemCheckboxStyle:{position:"absolute",width:"13px",height:"13px"},squareSymbol:!0,symbolPadding:5,verticalAlign:"bottom",x:0,y:0,title:{style:{fontWeight:"bold"}}},loading:{labelStyle:{fontWeight:"bold",position:"relative",top:"45%"},style:{position:"absolute",
backgroundColor:"#ffffff",opacity:.5,textAlign:"center"}},tooltip:{enabled:!0,animation:g.svg,borderRadius:3,dateTimeLabelFormats:{millisecond:"%A, %b %e, %H:%M:%S.%L",second:"%A, %b %e, %H:%M:%S",minute:"%A, %b %e, %H:%M",hour:"%A, %b %e, %H:%M",day:"%A, %b %e, %Y",week:"Week from %A, %b %e, %Y",month:"%B %Y",year:"%Y"},footerFormat:"",padding:8,snap:g.isTouchDevice?25:10,headerFormat:'<span style="font-size: 10px">{point.key}</span><br/>',pointFormat:'<span style="color:{point.color}">\u25cf</span> {series.name}: <b>{point.y}</b><br/>',
backgroundColor:q("#f7f7f7").setOpacity(.85).get(),borderWidth:1,shadow:!0,style:{color:"#333333",cursor:"default",fontSize:"12px",whiteSpace:"nowrap"}},credits:{enabled:!0,href:"https://www.highcharts.com?credits",position:{align:"right",x:-10,verticalAlign:"bottom",y:-5},style:{cursor:"pointer",color:"#999999",fontSize:"9px"},text:"Highcharts.com"}};"";g.time=new c(y(g.defaultOptions.global,g.defaultOptions.time));g.dateFormat=function(c,q,y){return g.time.dateFormat(c,q,y)};return{dateFormat:g.dateFormat,
defaultOptions:g.defaultOptions,time:g.time}});O(q,"parts/Axis.js",[q["parts/Color.js"],q["parts/Globals.js"],q["parts/Tick.js"],q["parts/Utilities.js"],q["parts/Options.js"]],function(g,c,q,y,B){var H=y.addEvent,D=y.animObject,J=y.arrayMax,t=y.arrayMin,G=y.clamp,L=y.correctFloat,v=y.defined,K=y.destroyObjectProperties,n=y.error,r=y.extend,C=y.fireEvent,I=y.format,p=y.getMagnitude,m=y.isArray,d=y.isFunction,l=y.isNumber,k=y.isString,f=y.merge,a=y.normalizeTickInterval,A=y.objectEach,u=y.pick,E=y.relativeLength,
P=y.removeEvent,w=y.splat,M=y.syncTimeout,F=B.defaultOptions,Q=c.deg2rad;y=function(){function e(b,a){this.zoomEnabled=this.width=this.visible=this.userOptions=this.translationSlope=this.transB=this.transA=this.top=this.ticks=this.tickRotCorr=this.tickPositions=this.tickmarkOffset=this.tickInterval=this.tickAmount=this.side=this.series=this.right=this.positiveValuesOnly=this.pos=this.pointRangePadding=this.pointRange=this.plotLinesAndBandsGroups=this.plotLinesAndBands=this.paddedTicks=this.overlap=
this.options=this.oldMin=this.oldMax=this.offset=this.names=this.minPixelPadding=this.minorTicks=this.minorTickInterval=this.min=this.maxLabelLength=this.max=this.len=this.left=this.labelFormatter=this.labelEdge=this.isLinked=this.height=this.hasVisibleSeries=this.hasNames=this.coll=this.closestPointRange=this.chart=this.categories=this.bottom=this.alternateBands=void 0;this.init(b,a)}e.prototype.init=function(b,a){var h=a.isX,e=this;e.chart=b;e.horiz=b.inverted&&!e.isZAxis?!h:h;e.isXAxis=h;e.coll=
e.coll||(h?"xAxis":"yAxis");C(this,"init",{userOptions:a});e.opposite=a.opposite;e.side=a.side||(e.horiz?e.opposite?0:2:e.opposite?1:3);e.setOptions(a);var f=this.options,k=f.type;e.labelFormatter=f.labels.formatter||e.defaultLabelFormatter;e.userOptions=a;e.minPixelPadding=0;e.reversed=f.reversed;e.visible=!1!==f.visible;e.zoomEnabled=!1!==f.zoomEnabled;e.hasNames="category"===k||!0===f.categories;e.categories=f.categories||e.hasNames;e.names||(e.names=[],e.names.keys={});e.plotLinesAndBandsGroups=
{};e.positiveValuesOnly=!(!e.logarithmic||f.allowNegativeLog);e.isLinked=v(f.linkedTo);e.ticks={};e.labelEdge=[];e.minorTicks={};e.plotLinesAndBands=[];e.alternateBands={};e.len=0;e.minRange=e.userMinRange=f.minRange||f.maxZoom;e.range=f.range;e.offset=f.offset||0;e.max=null;e.min=null;e.crosshair=u(f.crosshair,w(b.options.tooltip.crosshairs)[h?0:1],!1);a=e.options.events;-1===b.axes.indexOf(e)&&(h?b.axes.splice(b.xAxis.length,0,e):b.axes.push(e),b[e.coll].push(e));e.series=e.series||[];b.inverted&&
!e.isZAxis&&h&&"undefined"===typeof e.reversed&&(e.reversed=!0);e.labelRotation=e.options.labels.rotation;A(a,function(b,a){d(b)&&H(e,a,b)});C(this,"afterInit")};e.prototype.setOptions=function(b){this.options=f(e.defaultOptions,"yAxis"===this.coll&&e.defaultYAxisOptions,[e.defaultTopAxisOptions,e.defaultRightAxisOptions,e.defaultBottomAxisOptions,e.defaultLeftAxisOptions][this.side],f(F[this.coll],b));C(this,"afterSetOptions",{userOptions:b})};e.prototype.defaultLabelFormatter=function(){var b=this.axis,
a=l(this.value)?this.value:NaN,e=b.chart.time,f=b.categories,d=this.dateTimeLabelFormat,k=F.lang,c=k.numericSymbols;k=k.numericSymbolMagnitude||1E3;var u=c&&c.length,m=b.options.labels.format;b=b.logarithmic?Math.abs(a):b.tickInterval;var p=this.chart,A=p.numberFormatter;if(m)var w=I(m,this,p);else if(f)w=""+this.value;else if(d)w=e.dateFormat(d,a);else if(u&&1E3<=b)for(;u--&&"undefined"===typeof w;)e=Math.pow(k,u+1),b>=e&&0===10*a%e&&null!==c[u]&&0!==a&&(w=A(a/e,-1)+c[u]);"undefined"===typeof w&&
(w=1E4<=Math.abs(a)?A(a,-1):A(a,-1,void 0,""));return w};e.prototype.getSeriesExtremes=function(){var b=this,a=b.chart,e;C(this,"getSeriesExtremes",null,function(){b.hasVisibleSeries=!1;b.dataMin=b.dataMax=b.threshold=null;b.softThreshold=!b.isXAxis;b.stacking&&b.stacking.buildStacks();b.series.forEach(function(h){if(h.visible||!a.options.chart.ignoreHiddenSeries){var f=h.options,d=f.threshold;b.hasVisibleSeries=!0;b.positiveValuesOnly&&0>=d&&(d=null);if(b.isXAxis){if(f=h.xData,f.length){e=h.getXExtremes(f);
var k=e.min;var x=e.max;l(k)||k instanceof Date||(f=f.filter(l),e=h.getXExtremes(f),k=e.min,x=e.max);f.length&&(b.dataMin=Math.min(u(b.dataMin,k),k),b.dataMax=Math.max(u(b.dataMax,x),x))}}else if(h=h.applyExtremes(),l(h.dataMin)&&(k=h.dataMin,b.dataMin=Math.min(u(b.dataMin,k),k)),l(h.dataMax)&&(x=h.dataMax,b.dataMax=Math.max(u(b.dataMax,x),x)),v(d)&&(b.threshold=d),!f.softThreshold||b.positiveValuesOnly)b.softThreshold=!1}})});C(this,"afterGetSeriesExtremes")};e.prototype.translate=function(b,a,e,
f,d,k){var h=this.linkedParent||this,x=1,z=0,c=f?h.oldTransA:h.transA;f=f?h.oldMin:h.min;var u=h.minPixelPadding;d=(h.isOrdinal||h.brokenAxis&&h.brokenAxis.hasBreaks||h.logarithmic&&d)&&h.lin2val;c||(c=h.transA);e&&(x*=-1,z=h.len);h.reversed&&(x*=-1,z-=x*(h.sector||h.len));a?(b=(b*x+z-u)/c+f,d&&(b=h.lin2val(b))):(d&&(b=h.val2lin(b)),b=l(f)?x*(b-f)*c+z+x*u+(l(k)?c*k:0):void 0);return b};e.prototype.toPixels=function(b,a){return this.translate(b,!1,!this.horiz,null,!0)+(a?0:this.pos)};e.prototype.toValue=
function(b,a){return this.translate(b-(a?0:this.pos),!0,!this.horiz,null,!0)};e.prototype.getPlotLinePath=function(b){function a(b,a,h){if("pass"!==w&&b<a||b>h)w?b=G(b,a,h):t=!0;return b}var e=this,f=e.chart,d=e.left,k=e.top,c=b.old,m=b.value,p=b.translatedValue,A=b.lineWidth,w=b.force,n,g,E,r,M=c&&f.oldChartHeight||f.chartHeight,F=c&&f.oldChartWidth||f.chartWidth,t,v=e.transB;b={value:m,lineWidth:A,old:c,force:w,acrossPanes:b.acrossPanes,translatedValue:p};C(this,"getPlotLinePath",b,function(b){p=
u(p,e.translate(m,null,null,c));p=G(p,-1E5,1E5);n=E=Math.round(p+v);g=r=Math.round(M-p-v);l(p)?e.horiz?(g=k,r=M-e.bottom,n=E=a(n,d,d+e.width)):(n=d,E=F-e.right,g=r=a(g,k,k+e.height)):(t=!0,w=!1);b.path=t&&!w?null:f.renderer.crispLine([["M",n,g],["L",E,r]],A||1)});return b.path};e.prototype.getLinearTickPositions=function(b,a,e){var h=L(Math.floor(a/b)*b);e=L(Math.ceil(e/b)*b);var f=[],d;L(h+b)===h&&(d=20);if(this.single)return[a];for(a=h;a<=e;){f.push(a);a=L(a+b,d);if(a===k)break;var k=a}return f};
e.prototype.getMinorTickInterval=function(){var b=this.options;return!0===b.minorTicks?u(b.minorTickInterval,"auto"):!1===b.minorTicks?null:b.minorTickInterval};e.prototype.getMinorTickPositions=function(){var b=this.options,a=this.tickPositions,e=this.minorTickInterval,f=[],d=this.pointRangePadding||0,k=this.min-d;d=this.max+d;var c=d-k;if(c&&c/e<this.len/3){var l=this.logarithmic;if(l)this.paddedTicks.forEach(function(b,a,h){a&&f.push.apply(f,l.getLogTickPositions(e,h[a-1],h[a],!0))});else if(this.dateTime&&
"auto"===this.getMinorTickInterval())f=f.concat(this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(e),k,d,b.startOfWeek));else for(b=k+(a[0]-k)%e;b<=d&&b!==f[0];b+=e)f.push(b)}0!==f.length&&this.trimTicks(f);return f};e.prototype.adjustForMinRange=function(){var b=this.options,a=this.min,e=this.max,f=this.logarithmic,d,k,c,l,m;this.isXAxis&&"undefined"===typeof this.minRange&&!f&&(v(b.min)||v(b.max)?this.minRange=null:(this.series.forEach(function(b){l=b.xData;for(k=m=b.xIncrement?1:l.length-
1;0<k;k--)if(c=l[k]-l[k-1],"undefined"===typeof d||c<d)d=c}),this.minRange=Math.min(5*d,this.dataMax-this.dataMin)));if(e-a<this.minRange){var p=this.dataMax-this.dataMin>=this.minRange;var A=this.minRange;var w=(A-e+a)/2;w=[a-w,u(b.min,a-w)];p&&(w[2]=this.logarithmic?this.logarithmic.log2lin(this.dataMin):this.dataMin);a=J(w);e=[a+A,u(b.max,a+A)];p&&(e[2]=f?f.log2lin(this.dataMax):this.dataMax);e=t(e);e-a<A&&(w[0]=e-A,w[1]=u(b.min,e-A),a=J(w))}this.min=a;this.max=e};e.prototype.getClosest=function(){var b;
this.categories?b=1:this.series.forEach(function(a){var h=a.closestPointRange,e=a.visible||!a.chart.options.chart.ignoreHiddenSeries;!a.noSharedTooltip&&v(h)&&e&&(b=v(b)?Math.min(b,h):h)});return b};e.prototype.nameToX=function(b){var a=m(this.categories),e=a?this.categories:this.names,f=b.options.x;b.series.requireSorting=!1;v(f)||(f=!1===this.options.uniqueNames?b.series.autoIncrement():a?e.indexOf(b.name):u(e.keys[b.name],-1));if(-1===f){if(!a)var d=e.length}else d=f;"undefined"!==typeof d&&(this.names[d]=
b.name,this.names.keys[b.name]=d);return d};e.prototype.updateNames=function(){var b=this,a=this.names;0<a.length&&(Object.keys(a.keys).forEach(function(b){delete a.keys[b]}),a.length=0,this.minRange=this.userMinRange,(this.series||[]).forEach(function(a){a.xIncrement=null;if(!a.points||a.isDirtyData)b.max=Math.max(b.max,a.xData.length-1),a.processData(),a.generatePoints();a.data.forEach(function(h,e){if(h&&h.options&&"undefined"!==typeof h.name){var f=b.nameToX(h);"undefined"!==typeof f&&f!==h.x&&
(h.x=f,a.xData[e]=f)}})}))};e.prototype.setAxisTranslation=function(b){var a=this,e=a.max-a.min,f=a.axisPointRange||0,d=0,c=0,l=a.linkedParent,m=!!a.categories,p=a.transA,A=a.isXAxis;if(A||m||f){var w=a.getClosest();l?(d=l.minPointOffset,c=l.pointRangePadding):a.series.forEach(function(b){var h=m?1:A?u(b.options.pointRange,w,0):a.axisPointRange||0,e=b.options.pointPlacement;f=Math.max(f,h);if(!a.single||m)b=b.is("xrange")?!A:A,d=Math.max(d,b&&k(e)?0:h/2),c=Math.max(c,b&&"on"===e?0:h)});l=a.ordinal&&
a.ordinal.slope&&w?a.ordinal.slope/w:1;a.minPointOffset=d*=l;a.pointRangePadding=c*=l;a.pointRange=Math.min(f,a.single&&m?1:e);A&&(a.closestPointRange=w)}b&&(a.oldTransA=p);a.translationSlope=a.transA=p=a.staticScale||a.len/(e+c||1);a.transB=a.horiz?a.left:a.bottom;a.minPixelPadding=p*d;C(this,"afterSetAxisTranslation")};e.prototype.minFromRange=function(){return this.max-this.range};e.prototype.setTickInterval=function(b){var h=this,e=h.chart,f=h.logarithmic,d=h.options,k=h.isXAxis,c=h.isLinked,
m=d.maxPadding,A=d.minPadding,w=d.tickInterval,g=d.tickPixelInterval,E=h.categories,r=l(h.threshold)?h.threshold:null,S=h.softThreshold;h.dateTime||E||c||this.getTickAmount();var M=u(h.userMin,d.min);var F=u(h.userMax,d.max);if(c){h.linkedParent=e[h.coll][d.linkedTo];var t=h.linkedParent.getExtremes();h.min=u(t.min,t.dataMin);h.max=u(t.max,t.dataMax);d.type!==h.linkedParent.options.type&&n(11,1,e)}else{if(!S&&v(r))if(h.dataMin>=r)t=r,A=0;else if(h.dataMax<=r){var P=r;m=0}h.min=u(M,t,h.dataMin);h.max=
u(F,P,h.dataMax)}f&&(h.positiveValuesOnly&&!b&&0>=Math.min(h.min,u(h.dataMin,h.min))&&n(10,1,e),h.min=L(f.log2lin(h.min),16),h.max=L(f.log2lin(h.max),16));h.range&&v(h.max)&&(h.userMin=h.min=M=Math.max(h.dataMin,h.minFromRange()),h.userMax=F=h.max,h.range=null);C(h,"foundExtremes");h.beforePadding&&h.beforePadding();h.adjustForMinRange();!(E||h.axisPointRange||h.stacking&&h.stacking.usePercentage||c)&&v(h.min)&&v(h.max)&&(e=h.max-h.min)&&(!v(M)&&A&&(h.min-=e*A),!v(F)&&m&&(h.max+=e*m));l(h.userMin)||
(l(d.softMin)&&d.softMin<h.min&&(h.min=M=d.softMin),l(d.floor)&&(h.min=Math.max(h.min,d.floor)));l(h.userMax)||(l(d.softMax)&&d.softMax>h.max&&(h.max=F=d.softMax),l(d.ceiling)&&(h.max=Math.min(h.max,d.ceiling)));S&&v(h.dataMin)&&(r=r||0,!v(M)&&h.min<r&&h.dataMin>=r?h.min=h.options.minRange?Math.min(r,h.max-h.minRange):r:!v(F)&&h.max>r&&h.dataMax<=r&&(h.max=h.options.minRange?Math.max(r,h.min+h.minRange):r));h.tickInterval=h.min===h.max||"undefined"===typeof h.min||"undefined"===typeof h.max?1:c&&
!w&&g===h.linkedParent.options.tickPixelInterval?w=h.linkedParent.tickInterval:u(w,this.tickAmount?(h.max-h.min)/Math.max(this.tickAmount-1,1):void 0,E?1:(h.max-h.min)*g/Math.max(h.len,g));k&&!b&&h.series.forEach(function(b){b.processData(h.min!==h.oldMin||h.max!==h.oldMax)});h.setAxisTranslation(!0);C(this,"initialAxisTranslation");h.pointRange&&!w&&(h.tickInterval=Math.max(h.pointRange,h.tickInterval));b=u(d.minTickInterval,h.dateTime&&!h.series.some(function(b){return b.noSharedTooltip})?h.closestPointRange:
0);!w&&h.tickInterval<b&&(h.tickInterval=b);h.dateTime||h.logarithmic||w||(h.tickInterval=a(h.tickInterval,void 0,p(h.tickInterval),u(d.allowDecimals,.5>h.tickInterval||void 0!==this.tickAmount),!!this.tickAmount));this.tickAmount||(h.tickInterval=h.unsquish());this.setTickPositions()};e.prototype.setTickPositions=function(){var b=this.options,a=b.tickPositions;var e=this.getMinorTickInterval();var f=b.tickPositioner,d=this.hasVerticalPanning(),k="colorAxis"===this.coll,c=(k||!d)&&b.startOnTick;d=
(k||!d)&&b.endOnTick;this.tickmarkOffset=this.categories&&"between"===b.tickmarkPlacement&&1===this.tickInterval?.5:0;this.minorTickInterval="auto"===e&&this.tickInterval?this.tickInterval/5:e;this.single=this.min===this.max&&v(this.min)&&!this.tickAmount&&(parseInt(this.min,10)===this.min||!1!==b.allowDecimals);this.tickPositions=e=a&&a.slice();!e&&(this.ordinal&&this.ordinal.positions||!((this.max-this.min)/this.tickInterval>Math.max(2*this.len,200))?e=this.dateTime?this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(this.tickInterval,
b.units),this.min,this.max,b.startOfWeek,this.ordinal&&this.ordinal.positions,this.closestPointRange,!0):this.logarithmic?this.logarithmic.getLogTickPositions(this.tickInterval,this.min,this.max):this.getLinearTickPositions(this.tickInterval,this.min,this.max):(e=[this.min,this.max],n(19,!1,this.chart)),e.length>this.len&&(e=[e[0],e.pop()],e[0]===e[1]&&(e.length=1)),this.tickPositions=e,f&&(f=f.apply(this,[this.min,this.max])))&&(this.tickPositions=e=f);this.paddedTicks=e.slice(0);this.trimTicks(e,
c,d);this.isLinked||(this.single&&2>e.length&&!this.categories&&!this.series.some(function(b){return b.is("heatmap")&&"between"===b.options.pointPlacement})&&(this.min-=.5,this.max+=.5),a||f||this.adjustTickAmount());C(this,"afterSetTickPositions")};e.prototype.trimTicks=function(b,a,e){var h=b[0],f=b[b.length-1],d=!this.isOrdinal&&this.minPointOffset||0;C(this,"trimTicks");if(!this.isLinked){if(a&&-Infinity!==h)this.min=h;else for(;this.min-d>b[0];)b.shift();if(e)this.max=f;else for(;this.max+d<
b[b.length-1];)b.pop();0===b.length&&v(h)&&!this.options.tickPositions&&b.push((f+h)/2)}};e.prototype.alignToOthers=function(){var b={},a,e=this.options;!1===this.chart.options.chart.alignTicks||!1===e.alignTicks||!1===e.startOnTick||!1===e.endOnTick||this.logarithmic||this.chart[this.coll].forEach(function(h){var e=h.options;e=[h.horiz?e.left:e.top,e.width,e.height,e.pane].join();h.series.length&&(b[e]?a=!0:b[e]=1)});return a};e.prototype.getTickAmount=function(){var b=this.options,a=b.tickAmount,
e=b.tickPixelInterval;!v(b.tickInterval)&&!a&&this.len<e&&!this.isRadial&&!this.logarithmic&&b.startOnTick&&b.endOnTick&&(a=2);!a&&this.alignToOthers()&&(a=Math.ceil(this.len/e)+1);4>a&&(this.finalTickAmt=a,a=5);this.tickAmount=a};e.prototype.adjustTickAmount=function(){var b=this.options,a=this.tickInterval,e=this.tickPositions,f=this.tickAmount,d=this.finalTickAmt,k=e&&e.length,c=u(this.threshold,this.softThreshold?0:null),l;if(this.hasData()){if(k<f){for(l=this.min;e.length<f;)e.length%2||l===
c?e.push(L(e[e.length-1]+a)):e.unshift(L(e[0]-a));this.transA*=(k-1)/(f-1);this.min=b.startOnTick?e[0]:Math.min(this.min,e[0]);this.max=b.endOnTick?e[e.length-1]:Math.max(this.max,e[e.length-1])}else k>f&&(this.tickInterval*=2,this.setTickPositions());if(v(d)){for(a=b=e.length;a--;)(3===d&&1===a%2||2>=d&&0<a&&a<b-1)&&e.splice(a,1);this.finalTickAmt=void 0}}};e.prototype.setScale=function(){var b,a=!1,e=!1;this.series.forEach(function(b){var h;a=a||b.isDirtyData||b.isDirty;e=e||(null===(h=b.xAxis)||
void 0===h?void 0:h.isDirty)||!1});this.oldMin=this.min;this.oldMax=this.max;this.oldAxisLength=this.len;this.setAxisSize();(b=this.len!==this.oldAxisLength)||a||e||this.isLinked||this.forceRedraw||this.userMin!==this.oldUserMin||this.userMax!==this.oldUserMax||this.alignToOthers()?(this.stacking&&this.stacking.resetStacks(),this.forceRedraw=!1,this.getSeriesExtremes(),this.setTickInterval(),this.oldUserMin=this.userMin,this.oldUserMax=this.userMax,this.isDirty||(this.isDirty=b||this.min!==this.oldMin||
this.max!==this.oldMax)):this.stacking&&this.stacking.cleanStacks();a&&this.panningState&&(this.panningState.isDirty=!0);C(this,"afterSetScale")};e.prototype.setExtremes=function(b,a,e,f,d){var h=this,k=h.chart;e=u(e,!0);h.series.forEach(function(b){delete b.kdTree});d=r(d,{min:b,max:a});C(h,"setExtremes",d,function(){h.userMin=b;h.userMax=a;h.eventArgs=d;e&&k.redraw(f)})};e.prototype.zoom=function(b,a){var e=this,h=this.dataMin,f=this.dataMax,d=this.options,k=Math.min(h,u(d.min,h)),c=Math.max(f,
u(d.max,f));b={newMin:b,newMax:a};C(this,"zoom",b,function(b){var a=b.newMin,d=b.newMax;if(a!==e.min||d!==e.max)e.allowZoomOutside||(v(h)&&(a<k&&(a=k),a>c&&(a=c)),v(f)&&(d<k&&(d=k),d>c&&(d=c))),e.displayBtn="undefined"!==typeof a||"undefined"!==typeof d,e.setExtremes(a,d,!1,void 0,{trigger:"zoom"});b.zoomed=!0});return b.zoomed};e.prototype.setAxisSize=function(){var b=this.chart,a=this.options,e=a.offsets||[0,0,0,0],f=this.horiz,d=this.width=Math.round(E(u(a.width,b.plotWidth-e[3]+e[1]),b.plotWidth)),
k=this.height=Math.round(E(u(a.height,b.plotHeight-e[0]+e[2]),b.plotHeight)),c=this.top=Math.round(E(u(a.top,b.plotTop+e[0]),b.plotHeight,b.plotTop));a=this.left=Math.round(E(u(a.left,b.plotLeft+e[3]),b.plotWidth,b.plotLeft));this.bottom=b.chartHeight-k-c;this.right=b.chartWidth-d-a;this.len=Math.max(f?d:k,0);this.pos=f?a:c};e.prototype.getExtremes=function(){var b=this.logarithmic;return{min:b?L(b.lin2log(this.min)):this.min,max:b?L(b.lin2log(this.max)):this.max,dataMin:this.dataMin,dataMax:this.dataMax,
userMin:this.userMin,userMax:this.userMax}};e.prototype.getThreshold=function(b){var a=this.logarithmic,e=a?a.lin2log(this.min):this.min;a=a?a.lin2log(this.max):this.max;null===b||-Infinity===b?b=e:Infinity===b?b=a:e>b?b=e:a<b&&(b=a);return this.translate(b,0,1,0,1)};e.prototype.autoLabelAlign=function(b){var a=(u(b,0)-90*this.side+720)%360;b={align:"center"};C(this,"autoLabelAlign",b,function(b){15<a&&165>a?b.align="right":195<a&&345>a&&(b.align="left")});return b.align};e.prototype.tickSize=function(b){var a=
this.options,e=a["tick"===b?"tickLength":"minorTickLength"],f=u(a["tick"===b?"tickWidth":"minorTickWidth"],"tick"===b&&this.isXAxis&&!this.categories?1:0);if(f&&e){"inside"===a[b+"Position"]&&(e=-e);var d=[e,f]}b={tickSize:d};C(this,"afterTickSize",b);return b.tickSize};e.prototype.labelMetrics=function(){var b=this.tickPositions&&this.tickPositions[0]||0;return this.chart.renderer.fontMetrics(this.options.labels.style&&this.options.labels.style.fontSize,this.ticks[b]&&this.ticks[b].label)};e.prototype.unsquish=
function(){var b=this.options.labels,a=this.horiz,e=this.tickInterval,f=e,d=this.len/(((this.categories?1:0)+this.max-this.min)/e),k,c=b.rotation,l=this.labelMetrics(),m,p=Number.MAX_VALUE,A,w=this.max-this.min,n=function(b){var a=b/(d||1);a=1<a?Math.ceil(a):1;a*e>w&&Infinity!==b&&Infinity!==d&&w&&(a=Math.ceil(w/e));return L(a*e)};a?(A=!b.staggerLines&&!b.step&&(v(c)?[c]:d<u(b.autoRotationLimit,80)&&b.autoRotation))&&A.forEach(function(b){if(b===c||b&&-90<=b&&90>=b){m=n(Math.abs(l.h/Math.sin(Q*b)));
var a=m+Math.abs(b/360);a<p&&(p=a,k=b,f=m)}}):b.step||(f=n(l.h));this.autoRotation=A;this.labelRotation=u(k,c);return f};e.prototype.getSlotWidth=function(b){var a,e=this.chart,f=this.horiz,d=this.options.labels,k=Math.max(this.tickPositions.length-(this.categories?0:1),1),c=e.margin[3];if(b&&l(b.slotWidth))return b.slotWidth;if(f&&d&&2>(d.step||0))return d.rotation?0:(this.staggerLines||1)*this.len/k;if(!f){b=null===(a=null===d||void 0===d?void 0:d.style)||void 0===a?void 0:a.width;if(void 0!==b)return parseInt(b,
10);if(c)return c-e.spacing[3]}return.33*e.chartWidth};e.prototype.renderUnsquish=function(){var b=this.chart,a=b.renderer,e=this.tickPositions,f=this.ticks,d=this.options.labels,c=d&&d.style||{},l=this.horiz,u=this.getSlotWidth(),m=Math.max(1,Math.round(u-2*(d.padding||5))),p={},A=this.labelMetrics(),w=d.style&&d.style.textOverflow,n=0;k(d.rotation)||(p.rotation=d.rotation||0);e.forEach(function(b){b=f[b];b.movedLabel&&b.replaceMovedLabel();b&&b.label&&b.label.textPxLength>n&&(n=b.label.textPxLength)});
this.maxLabelLength=n;if(this.autoRotation)n>m&&n>A.h?p.rotation=this.labelRotation:this.labelRotation=0;else if(u){var g=m;if(!w){var E="clip";for(m=e.length;!l&&m--;){var r=e[m];if(r=f[r].label)r.styles&&"ellipsis"===r.styles.textOverflow?r.css({textOverflow:"clip"}):r.textPxLength>u&&r.css({width:u+"px"}),r.getBBox().height>this.len/e.length-(A.h-A.f)&&(r.specificTextOverflow="ellipsis")}}}p.rotation&&(g=n>.5*b.chartHeight?.33*b.chartHeight:n,w||(E="ellipsis"));if(this.labelAlign=d.align||this.autoLabelAlign(this.labelRotation))p.align=
this.labelAlign;e.forEach(function(b){var a=(b=f[b])&&b.label,e=c.width,h={};a&&(a.attr(p),b.shortenLabel?b.shortenLabel():g&&!e&&"nowrap"!==c.whiteSpace&&(g<a.textPxLength||"SPAN"===a.element.tagName)?(h.width=g+"px",w||(h.textOverflow=a.specificTextOverflow||E),a.css(h)):a.styles&&a.styles.width&&!h.width&&!e&&a.css({width:null}),delete a.specificTextOverflow,b.rotation=p.rotation)},this);this.tickRotCorr=a.rotCorr(A.b,this.labelRotation||0,0!==this.side)};e.prototype.hasData=function(){return this.series.some(function(b){return b.hasData()})||
this.options.showEmpty&&v(this.min)&&v(this.max)};e.prototype.addTitle=function(b){var a=this.chart.renderer,e=this.horiz,d=this.opposite,k=this.options.title,c,l=this.chart.styledMode;this.axisTitle||((c=k.textAlign)||(c=(e?{low:"left",middle:"center",high:"right"}:{low:d?"right":"left",middle:"center",high:d?"left":"right"})[k.align]),this.axisTitle=a.text(k.text,0,0,k.useHTML).attr({zIndex:7,rotation:k.rotation||0,align:c}).addClass("highcharts-axis-title"),l||this.axisTitle.css(f(k.style)),this.axisTitle.add(this.axisGroup),
this.axisTitle.isNew=!0);l||k.style.width||this.isRadial||this.axisTitle.css({width:this.len+"px"});this.axisTitle[b?"show":"hide"](b)};e.prototype.generateTick=function(b){var a=this.ticks;a[b]?a[b].addLabel():a[b]=new q(this,b)};e.prototype.getOffset=function(){var b=this,a=b.chart,e=a.renderer,f=b.options,d=b.tickPositions,k=b.ticks,c=b.horiz,l=b.side,m=a.inverted&&!b.isZAxis?[1,0,3,2][l]:l,p,w=0,n=0,g=f.title,E=f.labels,r=0,M=a.axisOffset;a=a.clipOffset;var F=[-1,1,1,-1][l],t=f.className,P=b.axisParent;
var I=b.hasData();b.showAxis=p=I||u(f.showEmpty,!0);b.staggerLines=b.horiz&&E.staggerLines;b.axisGroup||(b.gridGroup=e.g("grid").attr({zIndex:f.gridZIndex||1}).addClass("highcharts-"+this.coll.toLowerCase()+"-grid "+(t||"")).add(P),b.axisGroup=e.g("axis").attr({zIndex:f.zIndex||2}).addClass("highcharts-"+this.coll.toLowerCase()+" "+(t||"")).add(P),b.labelGroup=e.g("axis-labels").attr({zIndex:E.zIndex||7}).addClass("highcharts-"+b.coll.toLowerCase()+"-labels "+(t||"")).add(P));I||b.isLinked?(d.forEach(function(a,
e){b.generateTick(a,e)}),b.renderUnsquish(),b.reserveSpaceDefault=0===l||2===l||{1:"left",3:"right"}[l]===b.labelAlign,u(E.reserveSpace,"center"===b.labelAlign?!0:null,b.reserveSpaceDefault)&&d.forEach(function(b){r=Math.max(k[b].getLabelSize(),r)}),b.staggerLines&&(r*=b.staggerLines),b.labelOffset=r*(b.opposite?-1:1)):A(k,function(b,a){b.destroy();delete k[a]});if(g&&g.text&&!1!==g.enabled&&(b.addTitle(p),p&&!1!==g.reserveSpace)){b.titleOffset=w=b.axisTitle.getBBox()[c?"height":"width"];var q=g.offset;
n=v(q)?0:u(g.margin,c?5:10)}b.renderLine();b.offset=F*u(f.offset,M[l]?M[l]+(f.margin||0):0);b.tickRotCorr=b.tickRotCorr||{x:0,y:0};e=0===l?-b.labelMetrics().h:2===l?b.tickRotCorr.y:0;n=Math.abs(r)+n;r&&(n=n-e+F*(c?u(E.y,b.tickRotCorr.y+8*F):E.x));b.axisTitleMargin=u(q,n);b.getMaxLabelDimensions&&(b.maxLabelDimensions=b.getMaxLabelDimensions(k,d));c=this.tickSize("tick");M[l]=Math.max(M[l],b.axisTitleMargin+w+F*b.offset,n,d&&d.length&&c?c[0]+F*b.offset:0);f=f.offset?0:2*Math.floor(b.axisLine.strokeWidth()/
2);a[m]=Math.max(a[m],f);C(this,"afterGetOffset")};e.prototype.getLinePath=function(b){var a=this.chart,e=this.opposite,f=this.offset,d=this.horiz,k=this.left+(e?this.width:0)+f;f=a.chartHeight-this.bottom-(e?this.height:0)+f;e&&(b*=-1);return a.renderer.crispLine([["M",d?this.left:k,d?f:this.top],["L",d?a.chartWidth-this.right:k,d?f:a.chartHeight-this.bottom]],b)};e.prototype.renderLine=function(){this.axisLine||(this.axisLine=this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup),
this.chart.styledMode||this.axisLine.attr({stroke:this.options.lineColor,"stroke-width":this.options.lineWidth,zIndex:7}))};e.prototype.getTitlePosition=function(){var b=this.horiz,a=this.left,e=this.top,f=this.len,d=this.options.title,k=b?a:e,c=this.opposite,l=this.offset,u=d.x||0,m=d.y||0,p=this.axisTitle,A=this.chart.renderer.fontMetrics(d.style&&d.style.fontSize,p);p=Math.max(p.getBBox(null,0).height-A.h-1,0);f={low:k+(b?0:f),middle:k+f/2,high:k+(b?f:0)}[d.align];a=(b?e+this.height:a)+(b?1:-1)*
(c?-1:1)*this.axisTitleMargin+[-p,p,A.f,-p][this.side];b={x:b?f+u:a+(c?this.width:0)+l+u,y:b?a+m-(c?this.height:0)+l:f+m};C(this,"afterGetTitlePosition",{titlePosition:b});return b};e.prototype.renderMinorTick=function(b){var a=this.chart.hasRendered&&l(this.oldMin),e=this.minorTicks;e[b]||(e[b]=new q(this,b,"minor"));a&&e[b].isNew&&e[b].render(null,!0);e[b].render(null,!1,1)};e.prototype.renderTick=function(b,a){var e=this.isLinked,h=this.ticks,f=this.chart.hasRendered&&l(this.oldMin);if(!e||b>=
this.min&&b<=this.max)h[b]||(h[b]=new q(this,b)),f&&h[b].isNew&&h[b].render(a,!0,-1),h[b].render(a)};e.prototype.render=function(){var b=this,a=b.chart,e=b.logarithmic,f=b.options,d=b.isLinked,k=b.tickPositions,u=b.axisTitle,m=b.ticks,p=b.minorTicks,w=b.alternateBands,n=f.stackLabels,g=f.alternateGridColor,E=b.tickmarkOffset,r=b.axisLine,F=b.showAxis,t=D(a.renderer.globalAnimation),v,P;b.labelEdge.length=0;b.overlap=!1;[m,p,w].forEach(function(b){A(b,function(b){b.isActive=!1})});if(b.hasData()||
d)b.minorTickInterval&&!b.categories&&b.getMinorTickPositions().forEach(function(a){b.renderMinorTick(a)}),k.length&&(k.forEach(function(a,e){b.renderTick(a,e)}),E&&(0===b.min||b.single)&&(m[-1]||(m[-1]=new q(b,-1,null,!0)),m[-1].render(-1))),g&&k.forEach(function(h,f){P="undefined"!==typeof k[f+1]?k[f+1]+E:b.max-E;0===f%2&&h<b.max&&P<=b.max+(a.polar?-E:E)&&(w[h]||(w[h]=new c.PlotLineOrBand(b)),v=h+E,w[h].options={from:e?e.lin2log(v):v,to:e?e.lin2log(P):P,color:g,className:"highcharts-alternate-grid"},
w[h].render(),w[h].isActive=!0)}),b._addedPlotLB||((f.plotLines||[]).concat(f.plotBands||[]).forEach(function(a){b.addPlotBandOrLine(a)}),b._addedPlotLB=!0);[m,p,w].forEach(function(b){var e,h=[],f=t.duration;A(b,function(b,a){b.isActive||(b.render(a,!1,0),b.isActive=!1,h.push(a))});M(function(){for(e=h.length;e--;)b[h[e]]&&!b[h[e]].isActive&&(b[h[e]].destroy(),delete b[h[e]])},b!==w&&a.hasRendered&&f?f:0)});r&&(r[r.isPlaced?"animate":"attr"]({d:this.getLinePath(r.strokeWidth())}),r.isPlaced=!0,r[F?
"show":"hide"](F));u&&F&&(f=b.getTitlePosition(),l(f.y)?(u[u.isNew?"attr":"animate"](f),u.isNew=!1):(u.attr("y",-9999),u.isNew=!0));n&&n.enabled&&b.stacking&&b.stacking.renderStackTotals();b.isDirty=!1;C(this,"afterRender")};e.prototype.redraw=function(){this.visible&&(this.render(),this.plotLinesAndBands.forEach(function(b){b.render()}));this.series.forEach(function(b){b.isDirty=!0})};e.prototype.getKeepProps=function(){return this.keepProps||e.keepProps};e.prototype.destroy=function(b){var a=this,
e=a.plotLinesAndBands,f;C(this,"destroy",{keepEvents:b});b||P(a);[a.ticks,a.minorTicks,a.alternateBands].forEach(function(b){K(b)});if(e)for(b=e.length;b--;)e[b].destroy();"axisLine axisTitle axisGroup gridGroup labelGroup cross scrollbar".split(" ").forEach(function(b){a[b]&&(a[b]=a[b].destroy())});for(f in a.plotLinesAndBandsGroups)a.plotLinesAndBandsGroups[f]=a.plotLinesAndBandsGroups[f].destroy();A(a,function(b,e){-1===a.getKeepProps().indexOf(e)&&delete a[e]})};e.prototype.drawCrosshair=function(b,
a){var e=this.crosshair,h=u(e.snap,!0),f,d=this.cross,k=this.chart;C(this,"drawCrosshair",{e:b,point:a});b||(b=this.cross&&this.cross.e);if(this.crosshair&&!1!==(v(a)||!h)){h?v(a)&&(f=u("colorAxis"!==this.coll?a.crosshairPos:null,this.isXAxis?a.plotX:this.len-a.plotY)):f=b&&(this.horiz?b.chartX-this.pos:this.len-b.chartY+this.pos);if(v(f)){var c={value:a&&(this.isXAxis?a.x:u(a.stackY,a.y)),translatedValue:f};k.polar&&r(c,{isCrosshair:!0,chartX:b&&b.chartX,chartY:b&&b.chartY,point:a});c=this.getPlotLinePath(c)||
null}if(!v(c)){this.hideCrosshair();return}h=this.categories&&!this.isRadial;d||(this.cross=d=k.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-"+(h?"category ":"thin ")+e.className).attr({zIndex:u(e.zIndex,2)}).add(),k.styledMode||(d.attr({stroke:e.color||(h?g.parse("#ccd6eb").setOpacity(.25).get():"#cccccc"),"stroke-width":u(e.width,1)}).css({"pointer-events":"none"}),e.dashStyle&&d.attr({dashstyle:e.dashStyle})));d.show().attr({d:c});h&&!e.width&&d.attr({"stroke-width":this.transA});
this.cross.e=b}else this.hideCrosshair();C(this,"afterDrawCrosshair",{e:b,point:a})};e.prototype.hideCrosshair=function(){this.cross&&this.cross.hide();C(this,"afterHideCrosshair")};e.prototype.hasVerticalPanning=function(){var b,a;return/y/.test((null===(a=null===(b=this.chart.options.chart)||void 0===b?void 0:b.panning)||void 0===a?void 0:a.type)||"")};e.defaultOptions={dateTimeLabelFormats:{millisecond:{main:"%H:%M:%S.%L",range:!1},second:{main:"%H:%M:%S",range:!1},minute:{main:"%H:%M",range:!1},
hour:{main:"%H:%M",range:!1},day:{main:"%e. %b"},week:{main:"%e. %b"},month:{main:"%b '%y"},year:{main:"%Y"}},endOnTick:!1,labels:{enabled:!0,indentation:10,x:0,style:{color:"#666666",cursor:"default",fontSize:"11px"}},maxPadding:.01,minorTickLength:2,minorTickPosition:"outside",minPadding:.01,showEmpty:!0,startOfWeek:1,startOnTick:!1,tickLength:10,tickPixelInterval:100,tickmarkPlacement:"between",tickPosition:"outside",title:{align:"middle",style:{color:"#666666"}},type:"linear",minorGridLineColor:"#f2f2f2",
minorGridLineWidth:1,minorTickColor:"#999999",lineColor:"#ccd6eb",lineWidth:1,gridLineColor:"#e6e6e6",tickColor:"#ccd6eb"};e.defaultYAxisOptions={endOnTick:!0,maxPadding:.05,minPadding:.05,tickPixelInterval:72,showLastLabel:!0,labels:{x:-8},startOnTick:!0,title:{rotation:270,text:"Values"},stackLabels:{allowOverlap:!1,enabled:!1,crop:!0,overflow:"justify",formatter:function(){var b=this.axis.chart.numberFormatter;return b(this.total,-1)},style:{color:"#000000",fontSize:"11px",fontWeight:"bold",textOutline:"1px contrast"}},
gridLineWidth:1,lineWidth:0};e.defaultLeftAxisOptions={labels:{x:-15},title:{rotation:270}};e.defaultRightAxisOptions={labels:{x:15},title:{rotation:90}};e.defaultBottomAxisOptions={labels:{autoRotation:[-45],x:0},margin:15,title:{rotation:0}};e.defaultTopAxisOptions={labels:{autoRotation:[-45],x:0},margin:15,title:{rotation:0}};e.keepProps="extKey hcEvents names series userMax userMin".split(" ");return e}();c.Axis=y;return c.Axis});O(q,"parts/DateTimeAxis.js",[q["parts/Axis.js"],q["parts/Utilities.js"]],
function(g,c){var q=c.addEvent,y=c.getMagnitude,B=c.normalizeTickInterval,H=c.timeUnits,D=function(){function c(c){this.axis=c}c.prototype.normalizeTimeTickInterval=function(c,g){var t=g||[["millisecond",[1,2,5,10,20,25,50,100,200,500]],["second",[1,2,5,10,15,30]],["minute",[1,2,5,10,15,30]],["hour",[1,2,3,4,6,8,12]],["day",[1,2]],["week",[1,2]],["month",[1,2,3,4,6]],["year",null]];g=t[t.length-1];var v=H[g[0]],q=g[1],n;for(n=0;n<t.length&&!(g=t[n],v=H[g[0]],q=g[1],t[n+1]&&c<=(v*q[q.length-1]+H[t[n+
1][0]])/2);n++);v===H.year&&c<5*v&&(q=[1,2,5]);c=B(c/v,q,"year"===g[0]?Math.max(y(c/v),1):1);return{unitRange:v,count:c,unitName:g[0]}};return c}();c=function(){function c(){}c.compose=function(c){c.keepProps.push("dateTime");c.prototype.getTimeTicks=function(){return this.chart.time.getTimeTicks.apply(this.chart.time,arguments)};q(c,"init",function(c){"datetime"!==c.userOptions.type?this.dateTime=void 0:this.dateTime||(this.dateTime=new D(this))})};c.AdditionsClass=D;return c}();c.compose(g);return c});
O(q,"parts/LogarithmicAxis.js",[q["parts/Axis.js"],q["parts/Utilities.js"]],function(g,c){var q=c.addEvent,y=c.getMagnitude,B=c.normalizeTickInterval,H=c.pick,D=function(){function c(c){this.axis=c}c.prototype.getLogTickPositions=function(c,g,q,v){var t=this.axis,n=t.len,r=t.options,C=[];v||(this.minorAutoInterval=void 0);if(.5<=c)c=Math.round(c),C=t.getLinearTickPositions(c,g,q);else if(.08<=c){r=Math.floor(g);var I,p;for(n=.3<c?[1,2,4]:.15<c?[1,2,4,6,8]:[1,2,3,4,5,6,7,8,9];r<q+1&&!p;r++){var m=
n.length;for(I=0;I<m&&!p;I++){var d=this.log2lin(this.lin2log(r)*n[I]);d>g&&(!v||l<=q)&&"undefined"!==typeof l&&C.push(l);l>q&&(p=!0);var l=d}}}else g=this.lin2log(g),q=this.lin2log(q),c=v?t.getMinorTickInterval():r.tickInterval,c=H("auto"===c?null:c,this.minorAutoInterval,r.tickPixelInterval/(v?5:1)*(q-g)/((v?n/t.tickPositions.length:n)||1)),c=B(c,void 0,y(c)),C=t.getLinearTickPositions(c,g,q).map(this.log2lin),v||(this.minorAutoInterval=c/5);v||(t.tickInterval=c);return C};c.prototype.lin2log=function(c){return Math.pow(10,
c)};c.prototype.log2lin=function(c){return Math.log(c)/Math.LN10};return c}();c=function(){function c(){}c.compose=function(c){c.keepProps.push("logarithmic");var g=c.prototype,t=D.prototype;g.log2lin=t.log2lin;g.lin2log=t.lin2log;q(c,"init",function(c){var g=this.logarithmic;"logarithmic"!==c.userOptions.type?this.logarithmic=void 0:(g||(g=this.logarithmic=new D(this)),this.log2lin!==g.log2lin&&(g.log2lin=this.log2lin.bind(this)),this.lin2log!==g.lin2log&&(g.lin2log=this.lin2log.bind(this)))});q(c,
"afterInit",function(){var c=this.logarithmic;c&&(this.lin2val=function(g){return c.lin2log(g)},this.val2lin=function(g){return c.log2lin(g)})})};return c}();c.compose(g);return c});O(q,"parts/PlotLineOrBand.js",[q["parts/Axis.js"],q["parts/Globals.js"],q["parts/Utilities.js"]],function(g,c,q){var y=q.arrayMax,B=q.arrayMin,H=q.defined,D=q.destroyObjectProperties,J=q.erase,t=q.extend,G=q.merge,L=q.objectEach,v=q.pick,K=function(){function n(c,n){this.axis=c;n&&(this.options=n,this.id=n.id)}n.prototype.render=
function(){c.fireEvent(this,"render");var n=this,g=n.axis,t=g.horiz,p=g.logarithmic,m=n.options,d=m.label,l=n.label,k=m.to,f=m.from,a=m.value,A=H(f)&&H(k),u=H(a),E=n.svgElem,P=!E,w=[],M=m.color,F=v(m.zIndex,0),q=m.events;w={"class":"highcharts-plot-"+(A?"band ":"line ")+(m.className||"")};var e={},b=g.chart.renderer,h=A?"bands":"lines";p&&(f=p.log2lin(f),k=p.log2lin(k),a=p.log2lin(a));g.chart.styledMode||(u?(w.stroke=M||"#999999",w["stroke-width"]=v(m.width,1),m.dashStyle&&(w.dashstyle=m.dashStyle)):
A&&(w.fill=M||"#e6ebf5",m.borderWidth&&(w.stroke=m.borderColor,w["stroke-width"]=m.borderWidth)));e.zIndex=F;h+="-"+F;(p=g.plotLinesAndBandsGroups[h])||(g.plotLinesAndBandsGroups[h]=p=b.g("plot-"+h).attr(e).add());P&&(n.svgElem=E=b.path().attr(w).add(p));if(u)w=g.getPlotLinePath({value:a,lineWidth:E.strokeWidth(),acrossPanes:m.acrossPanes});else if(A)w=g.getPlotBandPath(f,k,m);else return;!n.eventsAdded&&q&&(L(q,function(b,a){E.on(a,function(b){q[a].apply(n,[b])})}),n.eventsAdded=!0);(P||!E.d)&&w&&
w.length?E.attr({d:w}):E&&(w?(E.show(!0),E.animate({d:w})):E.d&&(E.hide(),l&&(n.label=l=l.destroy())));d&&(H(d.text)||H(d.formatter))&&w&&w.length&&0<g.width&&0<g.height&&!w.isFlat?(d=G({align:t&&A&&"center",x:t?!A&&4:10,verticalAlign:!t&&A&&"middle",y:t?A?16:10:A?6:-4,rotation:t&&!A&&90},d),this.renderLabel(d,w,A,F)):l&&l.hide();return n};n.prototype.renderLabel=function(c,n,g,p){var m=this.label,d=this.axis.chart.renderer;m||(m={align:c.textAlign||c.align,rotation:c.rotation,"class":"highcharts-plot-"+
(g?"band":"line")+"-label "+(c.className||"")},m.zIndex=p,p=this.getLabelText(c),this.label=m=d.text(p,0,0,c.useHTML).attr(m).add(),this.axis.chart.styledMode||m.css(c.style));d=n.xBounds||[n[0][1],n[1][1],g?n[2][1]:n[0][1]];n=n.yBounds||[n[0][2],n[1][2],g?n[2][2]:n[0][2]];g=B(d);p=B(n);m.align(c,!1,{x:g,y:p,width:y(d)-g,height:y(n)-p});m.show(!0)};n.prototype.getLabelText=function(c){return H(c.formatter)?c.formatter.call(this):c.text};n.prototype.destroy=function(){J(this.axis.plotLinesAndBands,
this);delete this.axis;D(this)};return n}();t(g.prototype,{getPlotBandPath:function(c,g){var n=this.getPlotLinePath({value:g,force:!0,acrossPanes:this.options.acrossPanes}),r=this.getPlotLinePath({value:c,force:!0,acrossPanes:this.options.acrossPanes}),p=[],m=this.horiz,d=1;c=c<this.min&&g<this.min||c>this.max&&g>this.max;if(r&&n){if(c){var l=r.toString()===n.toString();d=0}for(c=0;c<r.length;c+=2){g=r[c];var k=r[c+1],f=n[c],a=n[c+1];"M"!==g[0]&&"L"!==g[0]||"M"!==k[0]&&"L"!==k[0]||"M"!==f[0]&&"L"!==
f[0]||"M"!==a[0]&&"L"!==a[0]||(m&&f[1]===g[1]?(f[1]+=d,a[1]+=d):m||f[2]!==g[2]||(f[2]+=d,a[2]+=d),p.push(["M",g[1],g[2]],["L",k[1],k[2]],["L",a[1],a[2]],["L",f[1],f[2]],["Z"]));p.isFlat=l}}return p},addPlotBand:function(c){return this.addPlotBandOrLine(c,"plotBands")},addPlotLine:function(c){return this.addPlotBandOrLine(c,"plotLines")},addPlotBandOrLine:function(c,g){var n=(new K(this,c)).render(),r=this.userOptions;if(n){if(g){var p=r[g]||[];p.push(c);r[g]=p}this.plotLinesAndBands.push(n);this._addedPlotLB=
!0}return n},removePlotBandOrLine:function(c){for(var n=this.plotLinesAndBands,g=this.options,t=this.userOptions,p=n.length;p--;)n[p].id===c&&n[p].destroy();[g.plotLines||[],t.plotLines||[],g.plotBands||[],t.plotBands||[]].forEach(function(m){for(p=m.length;p--;)(m[p]||{}).id===c&&J(m,m[p])})},removePlotBand:function(c){this.removePlotBandOrLine(c)},removePlotLine:function(c){this.removePlotBandOrLine(c)}});c.PlotLineOrBand=K;return c.PlotLineOrBand});O(q,"parts/Tooltip.js",[q["parts/Globals.js"],
q["parts/Utilities.js"]],function(g,c){var q=g.doc,y=c.clamp,B=c.css,H=c.defined,D=c.discardElement,J=c.extend,t=c.fireEvent,G=c.format,L=c.isNumber,v=c.isString,K=c.merge,n=c.pick,r=c.splat,C=c.syncTimeout,I=c.timeUnits;"";var p=function(){function m(d,c){this.container=void 0;this.crosshairs=[];this.distance=0;this.isHidden=!0;this.isSticky=!1;this.now={};this.options={};this.outside=!1;this.chart=d;this.init(d,c)}m.prototype.applyFilter=function(){var d=this.chart;d.renderer.definition({tagName:"filter",
id:"drop-shadow-"+d.index,opacity:.5,children:[{tagName:"feGaussianBlur","in":"SourceAlpha",stdDeviation:1},{tagName:"feOffset",dx:1,dy:1},{tagName:"feComponentTransfer",children:[{tagName:"feFuncA",type:"linear",slope:.3}]},{tagName:"feMerge",children:[{tagName:"feMergeNode"},{tagName:"feMergeNode","in":"SourceGraphic"}]}]});d.renderer.definition({tagName:"style",textContent:".highcharts-tooltip-"+d.index+"{filter:url(#drop-shadow-"+d.index+")}"})};m.prototype.bodyFormatter=function(d){return d.map(function(d){var k=
d.series.tooltipOptions;return(k[(d.point.formatPrefix||"point")+"Formatter"]||d.point.tooltipFormatter).call(d.point,k[(d.point.formatPrefix||"point")+"Format"]||"")})};m.prototype.cleanSplit=function(d){this.chart.series.forEach(function(c){var k=c&&c.tt;k&&(!k.isActive||d?c.tt=k.destroy():k.isActive=!1)})};m.prototype.defaultFormatter=function(d){var c=this.points||r(this);var k=[d.tooltipFooterHeaderFormatter(c[0])];k=k.concat(d.bodyFormatter(c));k.push(d.tooltipFooterHeaderFormatter(c[0],!0));
return k};m.prototype.destroy=function(){this.label&&(this.label=this.label.destroy());this.split&&this.tt&&(this.cleanSplit(this.chart,!0),this.tt=this.tt.destroy());this.renderer&&(this.renderer=this.renderer.destroy(),D(this.container));c.clearTimeout(this.hideTimer);c.clearTimeout(this.tooltipTimeout)};m.prototype.getAnchor=function(d,c){var k=this.chart,f=k.pointer,a=k.inverted,l=k.plotTop,u=k.plotLeft,m=0,p=0,w,n;d=r(d);this.followPointer&&c?("undefined"===typeof c.chartX&&(c=f.normalize(c)),
d=[c.chartX-u,c.chartY-l]):d[0].tooltipPos?d=d[0].tooltipPos:(d.forEach(function(f){w=f.series.yAxis;n=f.series.xAxis;m+=f.plotX+(!a&&n?n.left-u:0);p+=(f.plotLow?(f.plotLow+f.plotHigh)/2:f.plotY)+(!a&&w?w.top-l:0)}),m/=d.length,p/=d.length,d=[a?k.plotWidth-p:m,this.shared&&!a&&1<d.length&&c?c.chartY-l:a?k.plotHeight-m:p]);return d.map(Math.round)};m.prototype.getDateFormat=function(d,c,k,f){var a=this.chart.time,l=a.dateFormat("%m-%d %H:%M:%S.%L",c),u={millisecond:15,second:12,minute:9,hour:6,day:3},
m="millisecond";for(p in I){if(d===I.week&&+a.dateFormat("%w",c)===k&&"00:00:00.000"===l.substr(6)){var p="week";break}if(I[p]>d){p=m;break}if(u[p]&&l.substr(u[p])!=="01-01 00:00:00.000".substr(u[p]))break;"week"!==p&&(m=p)}if(p)var w=a.resolveDTLFormat(f[p]).main;return w};m.prototype.getLabel=function(){var d,c,k=this,f=this.chart.renderer,a=this.chart.styledMode,m=this.options,u="tooltip"+(H(m.className)?" "+m.className:""),p=(null===(d=m.style)||void 0===d?void 0:d.pointerEvents)||(!this.followPointer&&
m.stickOnContact?"auto":"none"),n;d=function(){k.inContact=!0};var w=function(){var a=k.chart.hoverSeries;k.inContact=!1;if(a&&a.onMouseOut)a.onMouseOut()};if(!this.label){this.outside&&(this.container=n=g.doc.createElement("div"),n.className="highcharts-tooltip-container",B(n,{position:"absolute",top:"1px",pointerEvents:p,zIndex:3}),g.doc.body.appendChild(n),this.renderer=f=new g.Renderer(n,0,0,null===(c=this.chart.options.chart)||void 0===c?void 0:c.style,void 0,void 0,f.styledMode));this.split?
this.label=f.g(u):(this.label=f.label("",0,0,m.shape||"callout",null,null,m.useHTML,null,u).attr({padding:m.padding,r:m.borderRadius}),a||this.label.attr({fill:m.backgroundColor,"stroke-width":m.borderWidth}).css(m.style).css({pointerEvents:p}).shadow(m.shadow));a&&(this.applyFilter(),this.label.addClass("highcharts-tooltip-"+this.chart.index));if(k.outside&&!k.split){var r=this.label,F=r.xSetter,t=r.ySetter;r.xSetter=function(a){F.call(r,k.distance);n.style.left=a+"px"};r.ySetter=function(a){t.call(r,
k.distance);n.style.top=a+"px"}}this.label.on("mouseenter",d).on("mouseleave",w).attr({zIndex:8}).add()}return this.label};m.prototype.getPosition=function(d,c,k){var f=this.chart,a=this.distance,l={},m=f.inverted&&k.h||0,p,g=this.outside,w=g?q.documentElement.clientWidth-2*a:f.chartWidth,r=g?Math.max(q.body.scrollHeight,q.documentElement.scrollHeight,q.body.offsetHeight,q.documentElement.offsetHeight,q.documentElement.clientHeight):f.chartHeight,F=f.pointer.getChartPosition(),t=f.containerScaling,
e=function(b){return t?b*t.scaleX:b},b=function(b){return t?b*t.scaleY:b},h=function(h){var l="x"===h;return[h,l?w:r,l?d:c].concat(g?[l?e(d):b(c),l?F.left-a+e(k.plotX+f.plotLeft):F.top-a+b(k.plotY+f.plotTop),0,l?w:r]:[l?d:c,l?k.plotX+f.plotLeft:k.plotY+f.plotTop,l?f.plotLeft:f.plotTop,l?f.plotLeft+f.plotWidth:f.plotTop+f.plotHeight])},z=h("y"),x=h("x"),C=!this.followPointer&&n(k.ttBelow,!f.inverted===!!k.negative),v=function(h,f,d,c,k,u,p){var x="y"===h?b(a):e(a),w=(d-c)/2,n=c<k-a,A=k+a+c<f,g=k-x-
d+w;k=k+x-w;if(C&&A)l[h]=k;else if(!C&&n)l[h]=g;else if(n)l[h]=Math.min(p-c,0>g-m?g:g-m);else if(A)l[h]=Math.max(u,k+m+d>f?k:k+m);else return!1},I=function(b,e,h,f,d){var c;d<a||d>e-a?c=!1:l[b]=d<h/2?1:d>e-f/2?e-f-2:d-h/2;return c},V=function(b){var a=z;z=x;x=a;p=b},G=function(){!1!==v.apply(0,z)?!1!==I.apply(0,x)||p||(V(!0),G()):p?l.x=l.y=0:(V(!0),G())};(f.inverted||1<this.len)&&V();G();return l};m.prototype.getXDateFormat=function(d,c,k){c=c.dateTimeLabelFormats;var f=k&&k.closestPointRange;return(f?
this.getDateFormat(f,d.x,k.options.startOfWeek,c):c.day)||c.year};m.prototype.hide=function(d){var l=this;c.clearTimeout(this.hideTimer);d=n(d,this.options.hideDelay,500);this.isHidden||(this.hideTimer=C(function(){l.getLabel().fadeOut(d?void 0:d);l.isHidden=!0},d))};m.prototype.init=function(d,c){this.chart=d;this.options=c;this.crosshairs=[];this.now={x:0,y:0};this.isHidden=!0;this.split=c.split&&!d.inverted&&!d.polar;this.shared=c.shared||this.split;this.outside=n(c.outside,!(!d.scrollablePixelsX&&
!d.scrollablePixelsY))};m.prototype.isStickyOnContact=function(){return!(this.followPointer||!this.options.stickOnContact||!this.inContact)};m.prototype.move=function(d,l,k,f){var a=this,m=a.now,u=!1!==a.options.animation&&!a.isHidden&&(1<Math.abs(d-m.x)||1<Math.abs(l-m.y)),p=a.followPointer||1<a.len;J(m,{x:u?(2*m.x+d)/3:d,y:u?(m.y+l)/2:l,anchorX:p?void 0:u?(2*m.anchorX+k)/3:k,anchorY:p?void 0:u?(m.anchorY+f)/2:f});a.getLabel().attr(m);a.drawTracker();u&&(c.clearTimeout(this.tooltipTimeout),this.tooltipTimeout=
setTimeout(function(){a&&a.move(d,l,k,f)},32))};m.prototype.refresh=function(d,l){var k=this.chart,f=this.options,a=d,m={},u=[],p=f.formatter||this.defaultFormatter;m=this.shared;var g=k.styledMode;if(f.enabled){c.clearTimeout(this.hideTimer);this.followPointer=r(a)[0].series.tooltipOptions.followPointer;var w=this.getAnchor(a,l);l=w[0];var M=w[1];!m||a.series&&a.series.noSharedTooltip?m=a.getLabelConfig():(k.pointer.applyInactiveState(a),a.forEach(function(a){a.setState("hover");u.push(a.getLabelConfig())}),
m={x:a[0].category,y:a[0].y},m.points=u,a=a[0]);this.len=u.length;k=p.call(m,this);p=a.series;this.distance=n(p.tooltipOptions.distance,16);!1===k?this.hide():(this.split?this.renderSplit(k,r(d)):(d=this.getLabel(),f.style.width&&!g||d.css({width:this.chart.spacingBox.width+"px"}),d.attr({text:k&&k.join?k.join(""):k}),d.removeClass(/highcharts-color-[\d]+/g).addClass("highcharts-color-"+n(a.colorIndex,p.colorIndex)),g||d.attr({stroke:f.borderColor||a.color||p.color||"#666666"}),this.updatePosition({plotX:l,
plotY:M,negative:a.negative,ttBelow:a.ttBelow,h:w[2]||0})),this.isHidden&&this.label&&this.label.attr({opacity:1}).show(),this.isHidden=!1);t(this,"refresh")}};m.prototype.renderSplit=function(d,c){function k(b,a,e,h,f){void 0===f&&(f=!0);e?(a=V?0:D,b=y(b-h/2,q.left,q.right-h)):(a-=G,b=f?b-h-z:b+z,b=y(b,f?b:q.left,q.right));return{x:b,y:a}}var f=this,a=f.chart,l=f.chart,m=l.plotHeight,p=l.plotLeft,r=l.plotTop,w=l.pointer,M=l.renderer,F=l.scrollablePixelsY,t=void 0===F?0:F;F=l.scrollingContainer;F=
void 0===F?{scrollLeft:0,scrollTop:0}:F;var e=F.scrollLeft,b=F.scrollTop,h=l.styledMode,z=f.distance,x=f.options,C=f.options.positioner,q={left:e,right:e+l.chartWidth,top:b,bottom:b+l.chartHeight},I=f.getLabel(),V=!(!a.xAxis[0]||!a.xAxis[0].opposite),G=r+b,K=0,D=m-t;v(d)&&(d=[!1,d]);d=d.slice(0,c.length+1).reduce(function(a,e,d){if(!1!==e&&""!==e){d=c[d-1]||{isHeader:!0,plotX:c[0].plotX,plotY:m,series:{}};var l=d.isHeader,u=l?f:d.series,w=u.tt,g=d.isHeader;var A=d.series;var E="highcharts-color-"+
n(d.colorIndex,A.colorIndex,"none");w||(w={padding:x.padding,r:x.borderRadius},h||(w.fill=x.backgroundColor,w["stroke-width"]=x.borderWidth),w=M.label("",0,0,x[g?"headerShape":"shape"]||"callout",void 0,void 0,x.useHTML).addClass((g?"highcharts-tooltip-header ":"")+"highcharts-tooltip-box "+E).attr(w).add(I));w.isActive=!0;w.attr({text:e});h||w.css(x.style).shadow(x.shadow).attr({stroke:x.borderColor||d.color||A.color||"#333333"});e=u.tt=w;g=e.getBBox();u=g.width+e.strokeWidth();l&&(K=g.height,D+=
K,V&&(G-=K));A=d.plotX;A=void 0===A?0:A;E=d.plotY;E=void 0===E?0:E;var F=d.series;if(d.isHeader){A=p+A;var S=r+m/2}else w=F.xAxis,F=F.yAxis,A=w.pos+y(A,-z,w.len+z),F.pos+E>=b+r&&F.pos+E<=b+r+m-t&&(S=F.pos+E);A=y(A,q.left-z,q.right+z);"number"===typeof S?(g=g.height+1,E=C?C.call(f,u,g,d):k(A,S,l,u),a.push({align:C?0:void 0,anchorX:A,anchorY:S,boxWidth:u,point:d,rank:n(E.rank,l?1:0),size:g,target:E.y,tt:e,x:E.x})):e.isActive=!1}return a},[]);!C&&d.some(function(b){return b.x<q.left})&&(d=d.map(function(b){var a=
k(b.anchorX,b.anchorY,b.point.isHeader,b.boxWidth,!1);return J(b,{target:a.y,x:a.x})}));f.cleanSplit();g.distribute(d,D);d.forEach(function(b){var a=b.pos;b.tt.attr({visibility:"undefined"===typeof a?"hidden":"inherit",x:b.x,y:a+G,anchorX:b.anchorX,anchorY:b.anchorY})});d=f.container;a=f.renderer;f.outside&&d&&a&&(l=I.getBBox(),a.setSize(l.width+l.x,l.height+l.y,!1),w=w.getChartPosition(),d.style.left=w.left+"px",d.style.top=w.top+"px")};m.prototype.drawTracker=function(){if(this.followPointer||!this.options.stickOnContact)this.tracker&&
this.tracker.destroy();else{var d=this.chart,c=this.label,k=d.hoverPoint;if(c&&k){var f={x:0,y:0,width:0,height:0};k=this.getAnchor(k);var a=c.getBBox();k[0]+=d.plotLeft-c.translateX;k[1]+=d.plotTop-c.translateY;f.x=Math.min(0,k[0]);f.y=Math.min(0,k[1]);f.width=0>k[0]?Math.max(Math.abs(k[0]),a.width-k[0]):Math.max(Math.abs(k[0]),a.width);f.height=0>k[1]?Math.max(Math.abs(k[1]),a.height-Math.abs(k[1])):Math.max(Math.abs(k[1]),a.height);this.tracker?this.tracker.attr(f):(this.tracker=c.renderer.rect(f).addClass("highcharts-tracker").add(c),
d.styledMode||this.tracker.attr({fill:"rgba(0,0,0,0)"}))}}};m.prototype.styledModeFormat=function(d){return d.replace('style="font-size: 10px"','class="highcharts-header"').replace(/style="color:{(point|series)\.color}"/g,'class="highcharts-color-{$1.colorIndex}"')};m.prototype.tooltipFooterHeaderFormatter=function(d,c){var k=c?"footer":"header",f=d.series,a=f.tooltipOptions,l=a.xDateFormat,m=f.xAxis,p=m&&"datetime"===m.options.type&&L(d.key),n=a[k+"Format"];c={isFooter:c,labelConfig:d};t(this,"headerFormatter",
c,function(c){p&&!l&&(l=this.getXDateFormat(d,a,m));p&&l&&(d.point&&d.point.tooltipDateKeys||["key"]).forEach(function(a){n=n.replace("{point."+a+"}","{point."+a+":"+l+"}")});f.chart.styledMode&&(n=this.styledModeFormat(n));c.text=G(n,{point:d,series:f},this.chart)});return c.text};m.prototype.update=function(d){this.destroy();K(!0,this.chart.options.tooltip.userOptions,d);this.init(this.chart,K(!0,this.options,d))};m.prototype.updatePosition=function(d){var c=this.chart,k=c.pointer,f=this.getLabel(),
a=d.plotX+c.plotLeft,m=d.plotY+c.plotTop;k=k.getChartPosition();d=(this.options.positioner||this.getPosition).call(this,f.width,f.height,d);if(this.outside){var p=(this.options.borderWidth||0)+2*this.distance;this.renderer.setSize(f.width+p,f.height+p,!1);if(c=c.containerScaling)B(this.container,{transform:"scale("+c.scaleX+", "+c.scaleY+")"}),a*=c.scaleX,m*=c.scaleY;a+=k.left-d.x;m+=k.top-d.y}this.move(Math.round(d.x),Math.round(d.y||0),a,m)};return m}();g.Tooltip=p;return g.Tooltip});O(q,"parts/Pointer.js",
[q["parts/Color.js"],q["parts/Globals.js"],q["parts/Tooltip.js"],q["parts/Utilities.js"]],function(g,c,q,y){var B=g.parse,H=c.charts,D=c.noop,J=y.addEvent,t=y.attr,G=y.css,L=y.defined,v=y.extend,K=y.find,n=y.fireEvent,r=y.isNumber,C=y.isObject,I=y.objectEach,p=y.offset,m=y.pick,d=y.splat;"";g=function(){function l(d,f){this.lastValidTouch={};this.pinchDown=[];this.runChartClick=!1;this.chart=d;this.hasDragged=!1;this.options=f;this.unbindContainerMouseLeave=function(){};this.init(d,f)}l.prototype.applyInactiveState=
function(d){var f=[],a;(d||[]).forEach(function(d){a=d.series;f.push(a);a.linkedParent&&f.push(a.linkedParent);a.linkedSeries&&(f=f.concat(a.linkedSeries));a.navigatorSeries&&f.push(a.navigatorSeries)});this.chart.series.forEach(function(a){-1===f.indexOf(a)?a.setState("inactive",!0):a.options.inactiveOtherPoints&&a.setAllPointsToState("inactive")})};l.prototype.destroy=function(){var d=this;"undefined"!==typeof d.unDocMouseMove&&d.unDocMouseMove();this.unbindContainerMouseLeave();c.chartCount||(c.unbindDocumentMouseUp&&
(c.unbindDocumentMouseUp=c.unbindDocumentMouseUp()),c.unbindDocumentTouchEnd&&(c.unbindDocumentTouchEnd=c.unbindDocumentTouchEnd()));clearInterval(d.tooltipTimeout);I(d,function(f,a){d[a]=void 0})};l.prototype.drag=function(d){var f=this.chart,a=f.options.chart,c=d.chartX,k=d.chartY,l=this.zoomHor,m=this.zoomVert,p=f.plotLeft,n=f.plotTop,g=f.plotWidth,r=f.plotHeight,e=this.selectionMarker,b=this.mouseDownX||0,h=this.mouseDownY||0,z=C(a.panning)?a.panning&&a.panning.enabled:a.panning,x=a.panKey&&d[a.panKey+
"Key"];if(!e||!e.touch)if(c<p?c=p:c>p+g&&(c=p+g),k<n?k=n:k>n+r&&(k=n+r),this.hasDragged=Math.sqrt(Math.pow(b-c,2)+Math.pow(h-k,2)),10<this.hasDragged){var t=f.isInsidePlot(b-p,h-n);f.hasCartesianSeries&&(this.zoomX||this.zoomY)&&t&&!x&&!e&&(this.selectionMarker=e=f.renderer.rect(p,n,l?1:g,m?1:r,0).attr({"class":"highcharts-selection-marker",zIndex:7}).add(),f.styledMode||e.attr({fill:a.selectionMarkerFill||B("#335cad").setOpacity(.25).get()}));e&&l&&(c-=b,e.attr({width:Math.abs(c),x:(0<c?0:c)+b}));
e&&m&&(c=k-h,e.attr({height:Math.abs(c),y:(0<c?0:c)+h}));t&&!e&&z&&f.pan(d,a.panning)}};l.prototype.dragStart=function(d){var f=this.chart;f.mouseIsDown=d.type;f.cancelClick=!1;f.mouseDownX=this.mouseDownX=d.chartX;f.mouseDownY=this.mouseDownY=d.chartY};l.prototype.drop=function(d){var f=this,a=this.chart,c=this.hasPinched;if(this.selectionMarker){var k={originalEvent:d,xAxis:[],yAxis:[]},l=this.selectionMarker,m=l.attr?l.attr("x"):l.x,p=l.attr?l.attr("y"):l.y,g=l.attr?l.attr("width"):l.width,F=l.attr?
l.attr("height"):l.height,t;if(this.hasDragged||c)a.axes.forEach(function(a){if(a.zoomEnabled&&L(a.min)&&(c||f[{xAxis:"zoomX",yAxis:"zoomY"}[a.coll]])&&r(m)&&r(p)){var b=a.horiz,e="touchend"===d.type?a.minPixelPadding:0,l=a.toValue((b?m:p)+e);b=a.toValue((b?m+g:p+F)-e);k[a.coll].push({axis:a,min:Math.min(l,b),max:Math.max(l,b)});t=!0}}),t&&n(a,"selection",k,function(e){a.zoom(v(e,c?{animation:!1}:null))});r(a.index)&&(this.selectionMarker=this.selectionMarker.destroy());c&&this.scaleGroups()}a&&r(a.index)&&
(G(a.container,{cursor:a._cursor}),a.cancelClick=10<this.hasDragged,a.mouseIsDown=this.hasDragged=this.hasPinched=!1,this.pinchDown=[])};l.prototype.findNearestKDPoint=function(d,f,a){var c=this.chart,k=c.hoverPoint;c=c.tooltip;if(k&&c&&c.isStickyOnContact())return k;var l;d.forEach(function(d){var c=!(d.noSharedTooltip&&f)&&0>d.options.findNearestPointBy.indexOf("y");d=d.searchPoint(a,c);if((c=C(d,!0))&&!(c=!C(l,!0))){c=l.distX-d.distX;var k=l.dist-d.dist,m=(d.series.group&&d.series.group.zIndex)-
(l.series.group&&l.series.group.zIndex);c=0<(0!==c&&f?c:0!==k?k:0!==m?m:l.series.index>d.series.index?-1:1)}c&&(l=d)});return l};l.prototype.getChartCoordinatesFromPoint=function(d,f){var a=d.series,c=a.xAxis;a=a.yAxis;var k=m(d.clientX,d.plotX),l=d.shapeArgs;if(c&&a)return f?{chartX:c.len+c.pos-k,chartY:a.len+a.pos-d.plotY}:{chartX:k+c.pos,chartY:d.plotY+a.pos};if(l&&l.x&&l.y)return{chartX:l.x,chartY:l.y}};l.prototype.getChartPosition=function(){return this.chartPosition||(this.chartPosition=p(this.chart.container))};
l.prototype.getCoordinates=function(d){var f={xAxis:[],yAxis:[]};this.chart.axes.forEach(function(a){f[a.isXAxis?"xAxis":"yAxis"].push({axis:a,value:a.toValue(d[a.horiz?"chartX":"chartY"])})});return f};l.prototype.getHoverData=function(d,f,a,c,l,p){var k,u=[];c=!(!c||!d);var g=f&&!f.stickyTracking,A={chartX:p?p.chartX:void 0,chartY:p?p.chartY:void 0,shared:l};n(this,"beforeGetHoverData",A);g=g?[f]:a.filter(function(a){return A.filter?A.filter(a):a.visible&&!(!l&&a.directTouch)&&m(a.options.enableMouseTracking,
!0)&&a.stickyTracking});f=(k=c||!p?d:this.findNearestKDPoint(g,l,p))&&k.series;k&&(l&&!f.noSharedTooltip?(g=a.filter(function(a){return A.filter?A.filter(a):a.visible&&!(!l&&a.directTouch)&&m(a.options.enableMouseTracking,!0)&&!a.noSharedTooltip}),g.forEach(function(a){var e=K(a.points,function(b){return b.x===k.x&&!b.isNull});C(e)&&(a.chart.isBoosting&&(e=a.getPoint(e)),u.push(e))})):u.push(k));A={hoverPoint:k};n(this,"afterGetHoverData",A);return{hoverPoint:A.hoverPoint,hoverSeries:f,hoverPoints:u}};
l.prototype.getPointFromEvent=function(d){d=d.target;for(var f;d&&!f;)f=d.point,d=d.parentNode;return f};l.prototype.onTrackerMouseOut=function(d){d=d.relatedTarget||d.toElement;var f=this.chart.hoverSeries;this.isDirectTouch=!1;if(!(!f||!d||f.stickyTracking||this.inClass(d,"highcharts-tooltip")||this.inClass(d,"highcharts-series-"+f.index)&&this.inClass(d,"highcharts-tracker")))f.onMouseOut()};l.prototype.inClass=function(d,f){for(var a;d;){if(a=t(d,"class")){if(-1!==a.indexOf(f))return!0;if(-1!==
a.indexOf("highcharts-container"))return!1}d=d.parentNode}};l.prototype.init=function(d,f){this.options=f;this.chart=d;this.runChartClick=f.chart.events&&!!f.chart.events.click;this.pinchDown=[];this.lastValidTouch={};q&&(d.tooltip=new q(d,f.tooltip),this.followTouchMove=m(f.tooltip.followTouchMove,!0));this.setDOMEvents()};l.prototype.normalize=function(d,f){var a=d.touches,c=a?a.length?a.item(0):m(a.changedTouches,d.changedTouches)[0]:d;f||(f=this.getChartPosition());a=c.pageX-f.left;f=c.pageY-
f.top;if(c=this.chart.containerScaling)a/=c.scaleX,f/=c.scaleY;return v(d,{chartX:Math.round(a),chartY:Math.round(f)})};l.prototype.onContainerClick=function(d){var f=this.chart,a=f.hoverPoint;d=this.normalize(d);var c=f.plotLeft,k=f.plotTop;f.cancelClick||(a&&this.inClass(d.target,"highcharts-tracker")?(n(a.series,"click",v(d,{point:a})),f.hoverPoint&&a.firePointEvent("click",d)):(v(d,this.getCoordinates(d)),f.isInsidePlot(d.chartX-c,d.chartY-k)&&n(f,"click",d)))};l.prototype.onContainerMouseDown=
function(d){d=this.normalize(d);if(c.isFirefox&&0!==d.button)this.onContainerMouseMove(d);if("undefined"===typeof d.button||1===((d.buttons||d.button)&1))this.zoomOption(d),this.dragStart(d)};l.prototype.onContainerMouseLeave=function(d){var f=H[m(c.hoverChartIndex,-1)],a=this.chart.tooltip;d=this.normalize(d);f&&(d.relatedTarget||d.toElement)&&(f.pointer.reset(),f.pointer.chartPosition=void 0);a&&!a.isHidden&&this.reset()};l.prototype.onContainerMouseMove=function(d){var f=this.chart;d=this.normalize(d);
this.setHoverChartIndex();d.preventDefault||(d.returnValue=!1);"mousedown"===f.mouseIsDown&&this.drag(d);f.openMenu||!this.inClass(d.target,"highcharts-tracker")&&!f.isInsidePlot(d.chartX-f.plotLeft,d.chartY-f.plotTop)||this.runPointActions(d)};l.prototype.onDocumentTouchEnd=function(d){H[c.hoverChartIndex]&&H[c.hoverChartIndex].pointer.drop(d)};l.prototype.onContainerTouchMove=function(d){this.touch(d)};l.prototype.onContainerTouchStart=function(d){this.zoomOption(d);this.touch(d,!0)};l.prototype.onDocumentMouseMove=
function(d){var f=this.chart,a=this.chartPosition;d=this.normalize(d,a);var c=f.tooltip;!a||c&&c.isStickyOnContact()||f.isInsidePlot(d.chartX-f.plotLeft,d.chartY-f.plotTop)||this.inClass(d.target,"highcharts-tracker")||this.reset()};l.prototype.onDocumentMouseUp=function(d){var f=H[m(c.hoverChartIndex,-1)];f&&f.pointer.drop(d)};l.prototype.pinch=function(d){var f=this,a=f.chart,c=f.pinchDown,k=d.touches||[],l=k.length,p=f.lastValidTouch,n=f.hasZoom,g=f.selectionMarker,r={},t=1===l&&(f.inClass(d.target,
"highcharts-tracker")&&a.runTrackerClick||f.runChartClick),e={};1<l&&(f.initiated=!0);n&&f.initiated&&!t&&d.preventDefault();[].map.call(k,function(b){return f.normalize(b)});"touchstart"===d.type?([].forEach.call(k,function(b,a){c[a]={chartX:b.chartX,chartY:b.chartY}}),p.x=[c[0].chartX,c[1]&&c[1].chartX],p.y=[c[0].chartY,c[1]&&c[1].chartY],a.axes.forEach(function(b){if(b.zoomEnabled){var e=a.bounds[b.horiz?"h":"v"],f=b.minPixelPadding,d=b.toPixels(Math.min(m(b.options.min,b.dataMin),b.dataMin)),
c=b.toPixels(Math.max(m(b.options.max,b.dataMax),b.dataMax)),k=Math.max(d,c);e.min=Math.min(b.pos,Math.min(d,c)-f);e.max=Math.max(b.pos+b.len,k+f)}}),f.res=!0):f.followTouchMove&&1===l?this.runPointActions(f.normalize(d)):c.length&&(g||(f.selectionMarker=g=v({destroy:D,touch:!0},a.plotBox)),f.pinchTranslate(c,k,r,g,e,p),f.hasPinched=n,f.scaleGroups(r,e),f.res&&(f.res=!1,this.reset(!1,0)))};l.prototype.pinchTranslate=function(d,f,a,c,l,m){this.zoomHor&&this.pinchTranslateDirection(!0,d,f,a,c,l,m);
this.zoomVert&&this.pinchTranslateDirection(!1,d,f,a,c,l,m)};l.prototype.pinchTranslateDirection=function(d,f,a,c,l,m,p,n){var k=this.chart,u=d?"x":"y",g=d?"X":"Y",e="chart"+g,b=d?"width":"height",h=k["plot"+(d?"Left":"Top")],w,x,A=n||1,r=k.inverted,E=k.bounds[d?"h":"v"],t=1===f.length,C=f[0][e],v=a[0][e],q=!t&&f[1][e],I=!t&&a[1][e];a=function(){"number"===typeof I&&20<Math.abs(C-q)&&(A=n||Math.abs(v-I)/Math.abs(C-q));x=(h-v)/A+C;w=k["plot"+(d?"Width":"Height")]/A};a();f=x;if(f<E.min){f=E.min;var P=
!0}else f+w>E.max&&(f=E.max-w,P=!0);P?(v-=.8*(v-p[u][0]),"number"===typeof I&&(I-=.8*(I-p[u][1])),a()):p[u]=[v,I];r||(m[u]=x-h,m[b]=w);m=r?1/A:A;l[b]=w;l[u]=f;c[r?d?"scaleY":"scaleX":"scale"+g]=A;c["translate"+g]=m*h+(v-m*C)};l.prototype.reset=function(c,f){var a=this.chart,k=a.hoverSeries,l=a.hoverPoint,m=a.hoverPoints,p=a.tooltip,n=p&&p.shared?m:l;c&&n&&d(n).forEach(function(a){a.series.isCartesian&&"undefined"===typeof a.plotX&&(c=!1)});if(c)p&&n&&d(n).length&&(p.refresh(n),p.shared&&m?m.forEach(function(a){a.setState(a.state,
!0);a.series.isCartesian&&(a.series.xAxis.crosshair&&a.series.xAxis.drawCrosshair(null,a),a.series.yAxis.crosshair&&a.series.yAxis.drawCrosshair(null,a))}):l&&(l.setState(l.state,!0),a.axes.forEach(function(a){a.crosshair&&l.series[a.coll]===a&&a.drawCrosshair(null,l)})));else{if(l)l.onMouseOut();m&&m.forEach(function(a){a.setState()});if(k)k.onMouseOut();p&&p.hide(f);this.unDocMouseMove&&(this.unDocMouseMove=this.unDocMouseMove());a.axes.forEach(function(a){a.hideCrosshair()});this.hoverX=a.hoverPoints=
a.hoverPoint=null}};l.prototype.runPointActions=function(d,f){var a=this.chart,k=a.tooltip&&a.tooltip.options.enabled?a.tooltip:void 0,l=k?k.shared:!1,p=f||a.hoverPoint,n=p&&p.series||a.hoverSeries;n=this.getHoverData(p,n,a.series,(!d||"touchmove"!==d.type)&&(!!f||n&&n.directTouch&&this.isDirectTouch),l,d);p=n.hoverPoint;var g=n.hoverPoints;f=(n=n.hoverSeries)&&n.tooltipOptions.followPointer;l=l&&n&&!n.noSharedTooltip;if(p&&(p!==a.hoverPoint||k&&k.isHidden)){(a.hoverPoints||[]).forEach(function(a){-1===
g.indexOf(a)&&a.setState()});if(a.hoverSeries!==n)n.onMouseOver();this.applyInactiveState(g);(g||[]).forEach(function(a){a.setState("hover")});a.hoverPoint&&a.hoverPoint.firePointEvent("mouseOut");if(!p.series)return;a.hoverPoints=g;a.hoverPoint=p;p.firePointEvent("mouseOver");k&&k.refresh(l?g:p,d)}else f&&k&&!k.isHidden&&(p=k.getAnchor([{}],d),k.updatePosition({plotX:p[0],plotY:p[1]}));this.unDocMouseMove||(this.unDocMouseMove=J(a.container.ownerDocument,"mousemove",function(a){var f=H[c.hoverChartIndex];
if(f)f.pointer.onDocumentMouseMove(a)}));a.axes.forEach(function(f){var c=m((f.crosshair||{}).snap,!0),k;c&&((k=a.hoverPoint)&&k.series[f.coll]===f||(k=K(g,function(a){return a.series[f.coll]===f})));k||!c?f.drawCrosshair(d,k):f.hideCrosshair()})};l.prototype.scaleGroups=function(d,f){var a=this.chart,c;a.series.forEach(function(k){c=d||k.getPlotBox();k.xAxis&&k.xAxis.zoomEnabled&&k.group&&(k.group.attr(c),k.markerGroup&&(k.markerGroup.attr(c),k.markerGroup.clip(f?a.clipRect:null)),k.dataLabelsGroup&&
k.dataLabelsGroup.attr(c))});a.clipRect.attr(f||a.clipBox)};l.prototype.setDOMEvents=function(){var d=this.chart.container,f=d.ownerDocument;d.onmousedown=this.onContainerMouseDown.bind(this);d.onmousemove=this.onContainerMouseMove.bind(this);d.onclick=this.onContainerClick.bind(this);this.unbindContainerMouseLeave=J(d,"mouseleave",this.onContainerMouseLeave.bind(this));c.unbindDocumentMouseUp||(c.unbindDocumentMouseUp=J(f,"mouseup",this.onDocumentMouseUp.bind(this)));c.hasTouch&&(J(d,"touchstart",
this.onContainerTouchStart.bind(this)),J(d,"touchmove",this.onContainerTouchMove.bind(this)),c.unbindDocumentTouchEnd||(c.unbindDocumentTouchEnd=J(f,"touchend",this.onDocumentTouchEnd.bind(this))))};l.prototype.setHoverChartIndex=function(){var d=this.chart,f=c.charts[m(c.hoverChartIndex,-1)];if(f&&f!==d)f.pointer.onContainerMouseLeave({relatedTarget:!0});f&&f.mouseIsDown||(c.hoverChartIndex=d.index)};l.prototype.touch=function(d,f){var a=this.chart,c;this.setHoverChartIndex();if(1===d.touches.length)if(d=
this.normalize(d),(c=a.isInsidePlot(d.chartX-a.plotLeft,d.chartY-a.plotTop))&&!a.openMenu){f&&this.runPointActions(d);if("touchmove"===d.type){f=this.pinchDown;var k=f[0]?4<=Math.sqrt(Math.pow(f[0].chartX-d.chartX,2)+Math.pow(f[0].chartY-d.chartY,2)):!1}m(k,!0)&&this.pinch(d)}else f&&this.reset();else 2===d.touches.length&&this.pinch(d)};l.prototype.zoomOption=function(d){var f=this.chart,a=f.options.chart,c=a.zoomType||"";f=f.inverted;/touch/.test(d.type)&&(c=m(a.pinchType,c));this.zoomX=d=/x/.test(c);
this.zoomY=c=/y/.test(c);this.zoomHor=d&&!f||c&&f;this.zoomVert=c&&!f||d&&f;this.hasZoom=d||c};return l}();return c.Pointer=g});O(q,"parts/MSPointer.js",[q["parts/Globals.js"],q["parts/Pointer.js"],q["parts/Utilities.js"]],function(g,c,q){function y(){var c=[];c.item=function(c){return this[c]};v(n,function(n){c.push({pageX:n.pageX,pageY:n.pageY,target:n.target})});return c}function B(c,n,p,m){"touch"!==c.pointerType&&c.pointerType!==c.MSPOINTER_TYPE_TOUCH||!D[g.hoverChartIndex]||(m(c),m=D[g.hoverChartIndex].pointer,
m[n]({type:p,target:c.currentTarget,preventDefault:t,touches:y()}))}var H=this&&this.__extends||function(){var c=function(n,p){c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(c,d){c.__proto__=d}||function(c,d){for(var l in d)d.hasOwnProperty(l)&&(c[l]=d[l])};return c(n,p)};return function(n,p){function m(){this.constructor=n}c(n,p);n.prototype=null===p?Object.create(p):(m.prototype=p.prototype,new m)}}(),D=g.charts,J=g.doc,t=g.noop,G=q.addEvent,L=q.css,v=q.objectEach,K=q.removeEvent,
n={},r=!!g.win.PointerEvent;return function(c){function g(){return null!==c&&c.apply(this,arguments)||this}H(g,c);g.prototype.batchMSEvents=function(c){c(this.chart.container,r?"pointerdown":"MSPointerDown",this.onContainerPointerDown);c(this.chart.container,r?"pointermove":"MSPointerMove",this.onContainerPointerMove);c(J,r?"pointerup":"MSPointerUp",this.onDocumentPointerUp)};g.prototype.destroy=function(){this.batchMSEvents(K);c.prototype.destroy.call(this)};g.prototype.init=function(p,m){c.prototype.init.call(this,
p,m);this.hasZoom&&L(p.container,{"-ms-touch-action":"none","touch-action":"none"})};g.prototype.onContainerPointerDown=function(c){B(c,"onContainerTouchStart","touchstart",function(c){n[c.pointerId]={pageX:c.pageX,pageY:c.pageY,target:c.currentTarget}})};g.prototype.onContainerPointerMove=function(c){B(c,"onContainerTouchMove","touchmove",function(c){n[c.pointerId]={pageX:c.pageX,pageY:c.pageY};n[c.pointerId].target||(n[c.pointerId].target=c.currentTarget)})};g.prototype.onDocumentPointerUp=function(c){B(c,
"onDocumentTouchEnd","touchend",function(c){delete n[c.pointerId]})};g.prototype.setDOMEvents=function(){c.prototype.setDOMEvents.call(this);(this.hasZoom||this.followTouchMove)&&this.batchMSEvents(G)};return g}(c)});O(q,"parts/Legend.js",[q["parts/Globals.js"],q["parts/Utilities.js"]],function(g,c){var q=c.addEvent,y=c.animObject,B=c.css,H=c.defined,D=c.discardElement,J=c.find,t=c.fireEvent,G=c.format,L=c.isNumber,v=c.merge,K=c.pick,n=c.relativeLength,r=c.setAnimation,C=c.stableSort,I=c.syncTimeout;
c=c.wrap;var p=g.isFirefox,m=g.marginNames,d=g.win,l=function(){function d(d,a){this.allItems=[];this.contentGroup=this.box=void 0;this.display=!1;this.group=void 0;this.offsetWidth=this.maxLegendWidth=this.maxItemWidth=this.legendWidth=this.legendHeight=this.lastLineHeight=this.lastItemY=this.itemY=this.itemX=this.itemMarginTop=this.itemMarginBottom=this.itemHeight=this.initialItemY=0;this.options={};this.padding=0;this.pages=[];this.proximate=!1;this.scrollGroup=void 0;this.widthOption=this.totalItemWidth=
this.titleHeight=this.symbolWidth=this.symbolHeight=0;this.chart=d;this.init(d,a)}d.prototype.init=function(d,a){this.chart=d;this.setOptions(a);a.enabled&&(this.render(),q(this.chart,"endResize",function(){this.legend.positionCheckboxes()}),this.proximate?this.unchartrender=q(this.chart,"render",function(){this.legend.proximatePositions();this.legend.positionItems()}):this.unchartrender&&this.unchartrender())};d.prototype.setOptions=function(d){var a=K(d.padding,8);this.options=d;this.chart.styledMode||
(this.itemStyle=d.itemStyle,this.itemHiddenStyle=v(this.itemStyle,d.itemHiddenStyle));this.itemMarginTop=d.itemMarginTop||0;this.itemMarginBottom=d.itemMarginBottom||0;this.padding=a;this.initialItemY=a-5;this.symbolWidth=K(d.symbolWidth,16);this.pages=[];this.proximate="proximate"===d.layout&&!this.chart.inverted;this.baseline=void 0};d.prototype.update=function(d,a){var f=this.chart;this.setOptions(v(!0,this.options,d));this.destroy();f.isDirtyLegend=f.isDirtyBox=!0;K(a,!0)&&f.redraw();t(this,"afterUpdate")};
d.prototype.colorizeItem=function(d,a){d.legendGroup[a?"removeClass":"addClass"]("highcharts-legend-item-hidden");if(!this.chart.styledMode){var f=this.options,c=d.legendItem,l=d.legendLine,k=d.legendSymbol,m=this.itemHiddenStyle.color;f=a?f.itemStyle.color:m;var p=a?d.color||m:m,n=d.options&&d.options.marker,g={fill:p};c&&c.css({fill:f,color:f});l&&l.attr({stroke:p});k&&(n&&k.isMarker&&(g=d.pointAttribs(),a||(g.stroke=g.fill=m)),k.attr(g))}t(this,"afterColorizeItem",{item:d,visible:a})};d.prototype.positionItems=
function(){this.allItems.forEach(this.positionItem,this);this.chart.isResizing||this.positionCheckboxes()};d.prototype.positionItem=function(d){var a=this,f=this.options,c=f.symbolPadding,k=!f.rtl,l=d._legendItemPos;f=l[0];l=l[1];var m=d.checkbox,p=d.legendGroup;p&&p.element&&(c={translateX:k?f:this.legendWidth-f-2*c-4,translateY:l},k=function(){t(a,"afterPositionItem",{item:d})},H(p.translateY)?p.animate(c,{complete:k}):(p.attr(c),k()));m&&(m.x=f,m.y=l)};d.prototype.destroyItem=function(d){var a=
d.checkbox;["legendItem","legendLine","legendSymbol","legendGroup"].forEach(function(a){d[a]&&(d[a]=d[a].destroy())});a&&D(d.checkbox)};d.prototype.destroy=function(){function d(a){this[a]&&(this[a]=this[a].destroy())}this.getAllItems().forEach(function(a){["legendItem","legendGroup"].forEach(d,a)});"clipRect up down pager nav box title group".split(" ").forEach(d,this);this.display=null};d.prototype.positionCheckboxes=function(){var d=this.group&&this.group.alignAttr,a=this.clipHeight||this.legendHeight,
c=this.titleHeight;if(d){var l=d.translateY;this.allItems.forEach(function(f){var k=f.checkbox;if(k){var m=l+c+k.y+(this.scrollOffset||0)+3;B(k,{left:d.translateX+f.checkboxOffset+k.x-20+"px",top:m+"px",display:this.proximate||m>l-6&&m<l+a-6?"":"none"})}},this)}};d.prototype.renderTitle=function(){var d=this.options,a=this.padding,c=d.title,k=0;c.text&&(this.title||(this.title=this.chart.renderer.label(c.text,a-3,a-4,null,null,null,d.useHTML,null,"legend-title").attr({zIndex:1}),this.chart.styledMode||
this.title.css(c.style),this.title.add(this.group)),c.width||this.title.css({width:this.maxLegendWidth+"px"}),d=this.title.getBBox(),k=d.height,this.offsetWidth=d.width,this.contentGroup.attr({translateY:k}));this.titleHeight=k};d.prototype.setText=function(d){var a=this.options;d.legendItem.attr({text:a.labelFormat?G(a.labelFormat,d,this.chart):a.labelFormatter.call(d)})};d.prototype.renderItem=function(d){var a=this.chart,f=a.renderer,c=this.options,k=this.symbolWidth,l=c.symbolPadding,m=this.itemStyle,
p=this.itemHiddenStyle,n="horizontal"===c.layout?K(c.itemDistance,20):0,g=!c.rtl,e=d.legendItem,b=!d.series,h=!b&&d.series.drawLegendSymbol?d.series:d,z=h.options;z=this.createCheckboxForItem&&z&&z.showCheckbox;n=k+l+n+(z?20:0);var x=c.useHTML,r=d.options.className;e||(d.legendGroup=f.g("legend-item").addClass("highcharts-"+h.type+"-series highcharts-color-"+d.colorIndex+(r?" "+r:"")+(b?" highcharts-series-"+d.index:"")).attr({zIndex:1}).add(this.scrollGroup),d.legendItem=e=f.text("",g?k+l:-l,this.baseline||
0,x),a.styledMode||e.css(v(d.visible?m:p)),e.attr({align:g?"left":"right",zIndex:2}).add(d.legendGroup),this.baseline||(this.fontMetrics=f.fontMetrics(a.styledMode?12:m.fontSize,e),this.baseline=this.fontMetrics.f+3+this.itemMarginTop,e.attr("y",this.baseline)),this.symbolHeight=c.symbolHeight||this.fontMetrics.f,h.drawLegendSymbol(this,d),this.setItemEvents&&this.setItemEvents(d,e,x));z&&!d.checkbox&&this.createCheckboxForItem&&this.createCheckboxForItem(d);this.colorizeItem(d,d.visible);!a.styledMode&&
m.width||e.css({width:(c.itemWidth||this.widthOption||a.spacingBox.width)-n+"px"});this.setText(d);a=e.getBBox();d.itemWidth=d.checkboxOffset=c.itemWidth||d.legendItemWidth||a.width+n;this.maxItemWidth=Math.max(this.maxItemWidth,d.itemWidth);this.totalItemWidth+=d.itemWidth;this.itemHeight=d.itemHeight=Math.round(d.legendItemHeight||a.height||this.symbolHeight)};d.prototype.layoutItem=function(d){var a=this.options,f=this.padding,c="horizontal"===a.layout,k=d.itemHeight,l=this.itemMarginBottom,m=
this.itemMarginTop,p=c?K(a.itemDistance,20):0,n=this.maxLegendWidth;a=a.alignColumns&&this.totalItemWidth>n?this.maxItemWidth:d.itemWidth;c&&this.itemX-f+a>n&&(this.itemX=f,this.lastLineHeight&&(this.itemY+=m+this.lastLineHeight+l),this.lastLineHeight=0);this.lastItemY=m+this.itemY+l;this.lastLineHeight=Math.max(k,this.lastLineHeight);d._legendItemPos=[this.itemX,this.itemY];c?this.itemX+=a:(this.itemY+=m+k+l,this.lastLineHeight=k);this.offsetWidth=this.widthOption||Math.max((c?this.itemX-f-(d.checkbox?
0:p):a)+f,this.offsetWidth)};d.prototype.getAllItems=function(){var d=[];this.chart.series.forEach(function(a){var f=a&&a.options;a&&K(f.showInLegend,H(f.linkedTo)?!1:void 0,!0)&&(d=d.concat(a.legendItems||("point"===f.legendType?a.data:a)))});t(this,"afterGetAllItems",{allItems:d});return d};d.prototype.getAlignment=function(){var d=this.options;return this.proximate?d.align.charAt(0)+"tv":d.floating?"":d.align.charAt(0)+d.verticalAlign.charAt(0)+d.layout.charAt(0)};d.prototype.adjustMargins=function(d,
a){var c=this.chart,f=this.options,k=this.getAlignment();k&&[/(lth|ct|rth)/,/(rtv|rm|rbv)/,/(rbh|cb|lbh)/,/(lbv|lm|ltv)/].forEach(function(l,p){l.test(k)&&!H(d[p])&&(c[m[p]]=Math.max(c[m[p]],c.legend[(p+1)%2?"legendHeight":"legendWidth"]+[1,-1,-1,1][p]*f[p%2?"x":"y"]+K(f.margin,12)+a[p]+(c.titleOffset[p]||0)))})};d.prototype.proximatePositions=function(){var d=this.chart,a=[],c="left"===this.options.align;this.allItems.forEach(function(f){var k=c;if(f.yAxis&&f.points){f.xAxis.options.reversed&&(k=
!k);var l=J(k?f.points:f.points.slice(0).reverse(),function(a){return L(a.plotY)});k=this.itemMarginTop+f.legendItem.getBBox().height+this.itemMarginBottom;var m=f.yAxis.top-d.plotTop;f.visible?(l=l?l.plotY:f.yAxis.height,l+=m-.3*k):l=m+f.yAxis.height;a.push({target:l,size:k,item:f})}},this);g.distribute(a,d.plotHeight);a.forEach(function(a){a.item._legendItemPos[1]=d.plotTop-d.spacing[0]+a.pos})};d.prototype.render=function(){var d=this.chart,a=d.renderer,c=this.group,k=this.box,l=this.options,m=
this.padding;this.itemX=m;this.itemY=this.initialItemY;this.lastItemY=this.offsetWidth=0;this.widthOption=n(l.width,d.spacingBox.width-m);var p=d.spacingBox.width-2*m-l.x;-1<["rm","lm"].indexOf(this.getAlignment().substring(0,2))&&(p/=2);this.maxLegendWidth=this.widthOption||p;c||(this.group=c=a.g("legend").attr({zIndex:7}).add(),this.contentGroup=a.g().attr({zIndex:1}).add(c),this.scrollGroup=a.g().add(this.contentGroup));this.renderTitle();var g=this.getAllItems();C(g,function(a,e){return(a.options&&
a.options.legendIndex||0)-(e.options&&e.options.legendIndex||0)});l.reversed&&g.reverse();this.allItems=g;this.display=p=!!g.length;this.itemHeight=this.totalItemWidth=this.maxItemWidth=this.lastLineHeight=0;g.forEach(this.renderItem,this);g.forEach(this.layoutItem,this);g=(this.widthOption||this.offsetWidth)+m;var r=this.lastItemY+this.lastLineHeight+this.titleHeight;r=this.handleOverflow(r);r+=m;k||(this.box=k=a.rect().addClass("highcharts-legend-box").attr({r:l.borderRadius}).add(c),k.isNew=!0);
d.styledMode||k.attr({stroke:l.borderColor,"stroke-width":l.borderWidth||0,fill:l.backgroundColor||"none"}).shadow(l.shadow);0<g&&0<r&&(k[k.isNew?"attr":"animate"](k.crisp.call({},{x:0,y:0,width:g,height:r},k.strokeWidth())),k.isNew=!1);k[p?"show":"hide"]();d.styledMode&&"none"===c.getStyle("display")&&(g=r=0);this.legendWidth=g;this.legendHeight=r;p&&this.align();this.proximate||this.positionItems();t(this,"afterRender")};d.prototype.align=function(d){void 0===d&&(d=this.chart.spacingBox);var a=
this.chart,c=this.options,f=d.y;/(lth|ct|rth)/.test(this.getAlignment())&&0<a.titleOffset[0]?f+=a.titleOffset[0]:/(lbh|cb|rbh)/.test(this.getAlignment())&&0<a.titleOffset[2]&&(f-=a.titleOffset[2]);f!==d.y&&(d=v(d,{y:f}));this.group.align(v(c,{width:this.legendWidth,height:this.legendHeight,verticalAlign:this.proximate?"top":c.verticalAlign}),!0,d)};d.prototype.handleOverflow=function(d){var a=this,c=this.chart,f=c.renderer,k=this.options,l=k.y,m=this.padding;l=c.spacingBox.height+("top"===k.verticalAlign?
-l:l)-m;var p=k.maxHeight,n,g=this.clipRect,e=k.navigation,b=K(e.animation,!0),h=e.arrowSize||12,z=this.nav,x=this.pages,r,t=this.allItems,v=function(b){"number"===typeof b?g.attr({height:b}):g&&(a.clipRect=g.destroy(),a.contentGroup.clip());a.contentGroup.div&&(a.contentGroup.div.style.clip=b?"rect("+m+"px,9999px,"+(m+b)+"px,0)":"auto")},q=function(b){a[b]=f.circle(0,0,1.3*h).translate(h/2,h/2).add(z);c.styledMode||a[b].attr("fill","rgba(0,0,0,0.0001)");return a[b]};"horizontal"!==k.layout||"middle"===
k.verticalAlign||k.floating||(l/=2);p&&(l=Math.min(l,p));x.length=0;d>l&&!1!==e.enabled?(this.clipHeight=n=Math.max(l-20-this.titleHeight-m,0),this.currentPage=K(this.currentPage,1),this.fullHeight=d,t.forEach(function(b,a){var e=b._legendItemPos[1],d=Math.round(b.legendItem.getBBox().height),h=x.length;if(!h||e-x[h-1]>n&&(r||e)!==x[h-1])x.push(r||e),h++;b.pageIx=h-1;r&&(t[a-1].pageIx=h-1);a===t.length-1&&e+d-x[h-1]>n&&e!==r&&(x.push(e),b.pageIx=h);e!==r&&(r=e)}),g||(g=a.clipRect=f.clipRect(0,m,9999,
0),a.contentGroup.clip(g)),v(n),z||(this.nav=z=f.g().attr({zIndex:1}).add(this.group),this.up=f.symbol("triangle",0,0,h,h).add(z),q("upTracker").on("click",function(){a.scroll(-1,b)}),this.pager=f.text("",15,10).addClass("highcharts-legend-navigation"),c.styledMode||this.pager.css(e.style),this.pager.add(z),this.down=f.symbol("triangle-down",0,0,h,h).add(z),q("downTracker").on("click",function(){a.scroll(1,b)})),a.scroll(0),d=l):z&&(v(),this.nav=z.destroy(),this.scrollGroup.attr({translateY:1}),this.clipHeight=
0);return d};d.prototype.scroll=function(d,a){var c=this,f=this.chart,k=this.pages,l=k.length,m=this.currentPage+d;d=this.clipHeight;var p=this.options.navigation,n=this.pager,g=this.padding;m>l&&(m=l);0<m&&("undefined"!==typeof a&&r(a,f),this.nav.attr({translateX:g,translateY:d+this.padding+7+this.titleHeight,visibility:"visible"}),[this.up,this.upTracker].forEach(function(a){a.attr({"class":1===m?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"})}),n.attr({text:m+"/"+l}),[this.down,
this.downTracker].forEach(function(a){a.attr({x:18+this.pager.getBBox().width,"class":m===l?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"})},this),f.styledMode||(this.up.attr({fill:1===m?p.inactiveColor:p.activeColor}),this.upTracker.css({cursor:1===m?"default":"pointer"}),this.down.attr({fill:m===l?p.inactiveColor:p.activeColor}),this.downTracker.css({cursor:m===l?"default":"pointer"})),this.scrollOffset=-k[m-1]+this.initialItemY,this.scrollGroup.animate({translateY:this.scrollOffset}),
this.currentPage=m,this.positionCheckboxes(),a=y(K(a,f.renderer.globalAnimation,!0)),I(function(){t(c,"afterScroll",{currentPage:m})},a.duration||0))};return d}();(/Trident\/7\.0/.test(d.navigator&&d.navigator.userAgent)||p)&&c(l.prototype,"positionItem",function(d,c){var a=this,f=function(){c._legendItemPos&&d.call(a,c)};f();a.bubbleLegend||setTimeout(f)});g.Legend=l;return g.Legend});O(q,"parts/Chart.js",[q["parts/Axis.js"],q["parts/Globals.js"],q["parts/Legend.js"],q["parts/MSPointer.js"],q["parts/Options.js"],
q["parts/Pointer.js"],q["parts/Time.js"],q["parts/Utilities.js"]],function(g,c,q,y,B,H,D,J){var t=c.charts,G=c.doc,L=c.seriesTypes,v=c.win,K=B.defaultOptions,n=J.addEvent,r=J.animate,C=J.animObject,I=J.attr,p=J.createElement,m=J.css,d=J.defined,l=J.discardElement,k=J.erase,f=J.error,a=J.extend,A=J.find,u=J.fireEvent,E=J.getStyle,P=J.isArray,w=J.isFunction,M=J.isNumber,F=J.isObject,Q=J.isString,e=J.merge,b=J.numberFormat,h=J.objectEach,z=J.pick,x=J.pInt,N=J.relativeLength,aa=J.removeEvent,Z=J.setAnimation,
V=J.splat,Y=J.syncTimeout,ba=J.uniqueKey,U=c.marginNames,X=function(){function B(b,a,e){this.yAxis=this.xAxis=this.userOptions=this.titleOffset=this.time=this.symbolCounter=this.spacingBox=this.spacing=this.series=this.renderTo=this.renderer=this.pointer=this.pointCount=this.plotWidth=this.plotTop=this.plotLeft=this.plotHeight=this.plotBox=this.options=this.numberFormatter=this.margin=this.legend=this.labelCollectors=this.isResizing=this.index=this.container=this.colorCounter=this.clipBox=this.chartWidth=
this.chartHeight=this.bounds=this.axisOffset=this.axes=void 0;this.getArgs(b,a,e)}B.prototype.getArgs=function(b,a,e){Q(b)||b.nodeName?(this.renderTo=b,this.init(a,e)):this.init(b,a)};B.prototype.init=function(a,d){var f,l=a.series,k=a.plotOptions||{};u(this,"init",{args:arguments},function(){a.series=null;f=e(K,a);var m=f.chart||{};h(f.plotOptions,function(b,a){F(b)&&(b.tooltip=k[a]&&e(k[a].tooltip)||void 0)});f.tooltip.userOptions=a.chart&&a.chart.forExport&&a.tooltip.userOptions||a.tooltip;f.series=
a.series=l;this.userOptions=a;var p=m.events;this.margin=[];this.spacing=[];this.bounds={h:{},v:{}};this.labelCollectors=[];this.callback=d;this.isResizing=0;this.options=f;this.axes=[];this.series=[];this.time=a.time&&Object.keys(a.time).length?new D(a.time):c.time;this.numberFormatter=m.numberFormatter||b;this.styledMode=m.styledMode;this.hasCartesianSeries=m.showAxes;var g=this;g.index=t.length;t.push(g);c.chartCount++;p&&h(p,function(b,a){w(b)&&n(g,a,b)});g.xAxis=[];g.yAxis=[];g.pointCount=g.colorCounter=
g.symbolCounter=0;u(g,"afterInit");g.firstRender()})};B.prototype.initSeries=function(b){var a=this.options.chart;a=b.type||a.type||a.defaultSeriesType;var e=L[a];e||f(17,!0,this,{missingModuleFor:a});a=new e;a.init(this,b);return a};B.prototype.setSeriesData=function(){this.getSeriesOrderByLinks().forEach(function(b){b.points||b.data||!b.enabledDataSorting||b.setData(b.options.data,!1)})};B.prototype.getSeriesOrderByLinks=function(){return this.series.concat().sort(function(b,a){return b.linkedSeries.length||
a.linkedSeries.length?a.linkedSeries.length-b.linkedSeries.length:0})};B.prototype.orderSeries=function(b){var a=this.series;for(b=b||0;b<a.length;b++)a[b]&&(a[b].index=b,a[b].name=a[b].getName())};B.prototype.isInsidePlot=function(b,a,e){var d=e?a:b;b=e?b:a;d={x:d,y:b,isInsidePlot:0<=d&&d<=this.plotWidth&&0<=b&&b<=this.plotHeight};u(this,"afterIsInsidePlot",d);return d.isInsidePlot};B.prototype.redraw=function(b){u(this,"beforeRedraw");var e=this,d=e.axes,h=e.series,c=e.pointer,f=e.legend,l=e.userOptions.legend,
k=e.isDirtyLegend,m=e.hasCartesianSeries,p=e.isDirtyBox,g=e.renderer,n=g.isHidden(),x=[];e.setResponsive&&e.setResponsive(!1);Z(e.hasRendered?b:!1,e);n&&e.temporaryDisplay();e.layOutTitles();for(b=h.length;b--;){var z=h[b];if(z.options.stacking){var w=!0;if(z.isDirty){var r=!0;break}}}if(r)for(b=h.length;b--;)z=h[b],z.options.stacking&&(z.isDirty=!0);h.forEach(function(b){b.isDirty&&("point"===b.options.legendType?(b.updateTotals&&b.updateTotals(),k=!0):l&&(l.labelFormatter||l.labelFormat)&&(k=!0));
b.isDirtyData&&u(b,"updatedData")});k&&f&&f.options.enabled&&(f.render(),e.isDirtyLegend=!1);w&&e.getStacks();m&&d.forEach(function(b){e.isResizing&&M(b.min)||(b.updateNames(),b.setScale())});e.getMargins();m&&(d.forEach(function(b){b.isDirty&&(p=!0)}),d.forEach(function(b){var e=b.min+","+b.max;b.extKey!==e&&(b.extKey=e,x.push(function(){u(b,"afterSetExtremes",a(b.eventArgs,b.getExtremes()));delete b.eventArgs}));(p||w)&&b.redraw()}));p&&e.drawChartBox();u(e,"predraw");h.forEach(function(b){(p||
b.isDirty)&&b.visible&&b.redraw();b.isDirtyData=!1});c&&c.reset(!0);g.draw();u(e,"redraw");u(e,"render");n&&e.temporaryDisplay(!0);x.forEach(function(b){b.call()})};B.prototype.get=function(b){function a(a){return a.id===b||a.options&&a.options.id===b}var e=this.series,d;var h=A(this.axes,a)||A(this.series,a);for(d=0;!h&&d<e.length;d++)h=A(e[d].points||[],a);return h};B.prototype.getAxes=function(){var b=this,a=this.options,e=a.xAxis=V(a.xAxis||{});a=a.yAxis=V(a.yAxis||{});u(this,"getAxes");e.forEach(function(b,
a){b.index=a;b.isX=!0});a.forEach(function(b,a){b.index=a});e.concat(a).forEach(function(a){new g(b,a)});u(this,"afterGetAxes")};B.prototype.getSelectedPoints=function(){var b=[];this.series.forEach(function(a){b=b.concat(a.getPointsCollection().filter(function(b){return z(b.selectedStaging,b.selected)}))});return b};B.prototype.getSelectedSeries=function(){return this.series.filter(function(b){return b.selected})};B.prototype.setTitle=function(b,a,e){this.applyDescription("title",b);this.applyDescription("subtitle",
a);this.applyDescription("caption",void 0);this.layOutTitles(e)};B.prototype.applyDescription=function(b,a){var d=this,h="title"===b?{color:"#333333",fontSize:this.options.isStock?"16px":"18px"}:{color:"#666666"};h=this.options[b]=e(!this.styledMode&&{style:h},this.options[b],a);var c=this[b];c&&a&&(this[b]=c=c.destroy());h&&!c&&(c=this.renderer.text(h.text,0,0,h.useHTML).attr({align:h.align,"class":"highcharts-"+b,zIndex:h.zIndex||4}).add(),c.update=function(a){d[{title:"setTitle",subtitle:"setSubtitle",
caption:"setCaption"}[b]](a)},this.styledMode||c.css(h.style),this[b]=c)};B.prototype.layOutTitles=function(b){var e=[0,0,0],d=this.renderer,h=this.spacingBox;["title","subtitle","caption"].forEach(function(b){var c=this[b],f=this.options[b],l=f.verticalAlign||"top";b="title"===b?-3:"top"===l?e[0]+2:0;if(c){if(!this.styledMode)var k=f.style.fontSize;k=d.fontMetrics(k,c).b;c.css({width:(f.width||h.width+(f.widthAdjust||0))+"px"});var m=Math.round(c.getBBox(f.useHTML).height);c.align(a({y:"bottom"===
l?k:b+k,height:m},f),!1,"spacingBox");f.floating||("top"===l?e[0]=Math.ceil(e[0]+m):"bottom"===l&&(e[2]=Math.ceil(e[2]+m)))}},this);e[0]&&"top"===(this.options.title.verticalAlign||"top")&&(e[0]+=this.options.title.margin);e[2]&&"bottom"===this.options.caption.verticalAlign&&(e[2]+=this.options.caption.margin);var c=!this.titleOffset||this.titleOffset.join(",")!==e.join(",");this.titleOffset=e;u(this,"afterLayOutTitles");!this.isDirtyBox&&c&&(this.isDirtyBox=this.isDirtyLegend=c,this.hasRendered&&
z(b,!0)&&this.isDirtyBox&&this.redraw())};B.prototype.getChartSize=function(){var b=this.options.chart,a=b.width;b=b.height;var e=this.renderTo;d(a)||(this.containerWidth=E(e,"width"));d(b)||(this.containerHeight=E(e,"height"));this.chartWidth=Math.max(0,a||this.containerWidth||600);this.chartHeight=Math.max(0,N(b,this.chartWidth)||(1<this.containerHeight?this.containerHeight:400))};B.prototype.temporaryDisplay=function(b){var a=this.renderTo;if(b)for(;a&&a.style;)a.hcOrigStyle&&(m(a,a.hcOrigStyle),
delete a.hcOrigStyle),a.hcOrigDetached&&(G.body.removeChild(a),a.hcOrigDetached=!1),a=a.parentNode;else for(;a&&a.style;){G.body.contains(a)||a.parentNode||(a.hcOrigDetached=!0,G.body.appendChild(a));if("none"===E(a,"display",!1)||a.hcOricDetached)a.hcOrigStyle={display:a.style.display,height:a.style.height,overflow:a.style.overflow},b={display:"block",overflow:"hidden"},a!==this.renderTo&&(b.height=0),m(a,b),a.offsetWidth||a.style.setProperty("display","block","important");a=a.parentNode;if(a===
G.body)break}};B.prototype.setClassName=function(b){this.container.className="highcharts-container "+(b||"")};B.prototype.getContainer=function(){var b=this.options,e=b.chart;var d=this.renderTo;var h=ba(),l,k;d||(this.renderTo=d=e.renderTo);Q(d)&&(this.renderTo=d=G.getElementById(d));d||f(13,!0,this);var g=x(I(d,"data-highcharts-chart"));M(g)&&t[g]&&t[g].hasRendered&&t[g].destroy();I(d,"data-highcharts-chart",this.index);d.innerHTML="";e.skipClone||d.offsetWidth||this.temporaryDisplay();this.getChartSize();
g=this.chartWidth;var n=this.chartHeight;m(d,{overflow:"hidden"});this.styledMode||(l=a({position:"relative",overflow:"hidden",width:g+"px",height:n+"px",textAlign:"left",lineHeight:"normal",zIndex:0,"-webkit-tap-highlight-color":"rgba(0,0,0,0)",userSelect:"none"},e.style));this.container=d=p("div",{id:h},l,d);this._cursor=d.style.cursor;this.renderer=new (c[e.renderer]||c.Renderer)(d,g,n,null,e.forExport,b.exporting&&b.exporting.allowHTML,this.styledMode);Z(void 0,this);this.setClassName(e.className);
if(this.styledMode)for(k in b.defs)this.renderer.definition(b.defs[k]);else this.renderer.setStyle(e.style);this.renderer.chartIndex=this.index;u(this,"afterGetContainer")};B.prototype.getMargins=function(b){var a=this.spacing,e=this.margin,h=this.titleOffset;this.resetMargins();h[0]&&!d(e[0])&&(this.plotTop=Math.max(this.plotTop,h[0]+a[0]));h[2]&&!d(e[2])&&(this.marginBottom=Math.max(this.marginBottom,h[2]+a[2]));this.legend&&this.legend.display&&this.legend.adjustMargins(e,a);u(this,"getMargins");
b||this.getAxisMargins()};B.prototype.getAxisMargins=function(){var b=this,a=b.axisOffset=[0,0,0,0],e=b.colorAxis,h=b.margin,c=function(b){b.forEach(function(b){b.visible&&b.getOffset()})};b.hasCartesianSeries?c(b.axes):e&&e.length&&c(e);U.forEach(function(e,c){d(h[c])||(b[e]+=a[c])});b.setChartSize()};B.prototype.reflow=function(b){var a=this,e=a.options.chart,h=a.renderTo,c=d(e.width)&&d(e.height),f=e.width||E(h,"width");e=e.height||E(h,"height");h=b?b.target:v;if(!c&&!a.isPrinting&&f&&e&&(h===
v||h===G)){if(f!==a.containerWidth||e!==a.containerHeight)J.clearTimeout(a.reflowTimeout),a.reflowTimeout=Y(function(){a.container&&a.setSize(void 0,void 0,!1)},b?100:0);a.containerWidth=f;a.containerHeight=e}};B.prototype.setReflow=function(b){var a=this;!1===b||this.unbindReflow?!1===b&&this.unbindReflow&&(this.unbindReflow=this.unbindReflow()):(this.unbindReflow=n(v,"resize",function(b){a.options&&a.reflow(b)}),n(this,"destroy",this.unbindReflow))};B.prototype.setSize=function(b,a,e){var d=this,
h=d.renderer;d.isResizing+=1;Z(e,d);e=h.globalAnimation;d.oldChartHeight=d.chartHeight;d.oldChartWidth=d.chartWidth;"undefined"!==typeof b&&(d.options.chart.width=b);"undefined"!==typeof a&&(d.options.chart.height=a);d.getChartSize();d.styledMode||(e?r:m)(d.container,{width:d.chartWidth+"px",height:d.chartHeight+"px"},e);d.setChartSize(!0);h.setSize(d.chartWidth,d.chartHeight,e);d.axes.forEach(function(b){b.isDirty=!0;b.setScale()});d.isDirtyLegend=!0;d.isDirtyBox=!0;d.layOutTitles();d.getMargins();
d.redraw(e);d.oldChartHeight=null;u(d,"resize");Y(function(){d&&u(d,"endResize",null,function(){--d.isResizing})},C(e).duration||0)};B.prototype.setChartSize=function(b){var a=this.inverted,e=this.renderer,d=this.chartWidth,h=this.chartHeight,c=this.options.chart,f=this.spacing,l=this.clipOffset,k,m,p,g;this.plotLeft=k=Math.round(this.plotLeft);this.plotTop=m=Math.round(this.plotTop);this.plotWidth=p=Math.max(0,Math.round(d-k-this.marginRight));this.plotHeight=g=Math.max(0,Math.round(h-m-this.marginBottom));
this.plotSizeX=a?g:p;this.plotSizeY=a?p:g;this.plotBorderWidth=c.plotBorderWidth||0;this.spacingBox=e.spacingBox={x:f[3],y:f[0],width:d-f[3]-f[1],height:h-f[0]-f[2]};this.plotBox=e.plotBox={x:k,y:m,width:p,height:g};d=2*Math.floor(this.plotBorderWidth/2);a=Math.ceil(Math.max(d,l[3])/2);e=Math.ceil(Math.max(d,l[0])/2);this.clipBox={x:a,y:e,width:Math.floor(this.plotSizeX-Math.max(d,l[1])/2-a),height:Math.max(0,Math.floor(this.plotSizeY-Math.max(d,l[2])/2-e))};b||this.axes.forEach(function(b){b.setAxisSize();
b.setAxisTranslation()});u(this,"afterSetChartSize",{skipAxes:b})};B.prototype.resetMargins=function(){u(this,"resetMargins");var b=this,a=b.options.chart;["margin","spacing"].forEach(function(e){var d=a[e],h=F(d)?d:[d,d,d,d];["Top","Right","Bottom","Left"].forEach(function(d,c){b[e][c]=z(a[e+d],h[c])})});U.forEach(function(a,e){b[a]=z(b.margin[e],b.spacing[e])});b.axisOffset=[0,0,0,0];b.clipOffset=[0,0,0,0]};B.prototype.drawChartBox=function(){var b=this.options.chart,a=this.renderer,e=this.chartWidth,
d=this.chartHeight,h=this.chartBackground,c=this.plotBackground,f=this.plotBorder,l=this.styledMode,k=this.plotBGImage,m=b.backgroundColor,p=b.plotBackgroundColor,g=b.plotBackgroundImage,n,x=this.plotLeft,z=this.plotTop,w=this.plotWidth,r=this.plotHeight,t=this.plotBox,A=this.clipRect,v=this.clipBox,q="animate";h||(this.chartBackground=h=a.rect().addClass("highcharts-background").add(),q="attr");if(l)var C=n=h.strokeWidth();else{C=b.borderWidth||0;n=C+(b.shadow?8:0);m={fill:m||"none"};if(C||h["stroke-width"])m.stroke=
b.borderColor,m["stroke-width"]=C;h.attr(m).shadow(b.shadow)}h[q]({x:n/2,y:n/2,width:e-n-C%2,height:d-n-C%2,r:b.borderRadius});q="animate";c||(q="attr",this.plotBackground=c=a.rect().addClass("highcharts-plot-background").add());c[q](t);l||(c.attr({fill:p||"none"}).shadow(b.plotShadow),g&&(k?(g!==k.attr("href")&&k.attr("href",g),k.animate(t)):this.plotBGImage=a.image(g,x,z,w,r).add()));A?A.animate({width:v.width,height:v.height}):this.clipRect=a.clipRect(v);q="animate";f||(q="attr",this.plotBorder=
f=a.rect().addClass("highcharts-plot-border").attr({zIndex:1}).add());l||f.attr({stroke:b.plotBorderColor,"stroke-width":b.plotBorderWidth||0,fill:"none"});f[q](f.crisp({x:x,y:z,width:w,height:r},-f.strokeWidth()));this.isDirtyBox=!1;u(this,"afterDrawChartBox")};B.prototype.propFromSeries=function(){var b=this,a=b.options.chart,e,d=b.options.series,h,c;["inverted","angular","polar"].forEach(function(f){e=L[a.type||a.defaultSeriesType];c=a[f]||e&&e.prototype[f];for(h=d&&d.length;!c&&h--;)(e=L[d[h].type])&&
e.prototype[f]&&(c=!0);b[f]=c})};B.prototype.linkSeries=function(){var b=this,a=b.series;a.forEach(function(b){b.linkedSeries.length=0});a.forEach(function(a){var e=a.options.linkedTo;Q(e)&&(e=":previous"===e?b.series[a.index-1]:b.get(e))&&e.linkedParent!==a&&(e.linkedSeries.push(a),a.linkedParent=e,e.enabledDataSorting&&a.setDataSortingOptions(),a.visible=z(a.options.visible,e.options.visible,a.visible))});u(this,"afterLinkSeries")};B.prototype.renderSeries=function(){this.series.forEach(function(b){b.translate();
b.render()})};B.prototype.renderLabels=function(){var b=this,e=b.options.labels;e.items&&e.items.forEach(function(d){var h=a(e.style,d.style),c=x(h.left)+b.plotLeft,f=x(h.top)+b.plotTop+12;delete h.left;delete h.top;b.renderer.text(d.html,c,f).attr({zIndex:2}).css(h).add()})};B.prototype.render=function(){var b=this.axes,a=this.colorAxis,e=this.renderer,d=this.options,h=0,c=function(b){b.forEach(function(b){b.visible&&b.render()})};this.setTitle();this.legend=new q(this,d.legend);this.getStacks&&
this.getStacks();this.getMargins(!0);this.setChartSize();d=this.plotWidth;b.some(function(b){if(b.horiz&&b.visible&&b.options.labels.enabled&&b.series.length)return h=21,!0});var f=this.plotHeight=Math.max(this.plotHeight-h,0);b.forEach(function(b){b.setScale()});this.getAxisMargins();var l=1.1<d/this.plotWidth;var k=1.05<f/this.plotHeight;if(l||k)b.forEach(function(b){(b.horiz&&l||!b.horiz&&k)&&b.setTickInterval(!0)}),this.getMargins();this.drawChartBox();this.hasCartesianSeries?c(b):a&&a.length&&
c(a);this.seriesGroup||(this.seriesGroup=e.g("series-group").attr({zIndex:3}).add());this.renderSeries();this.renderLabels();this.addCredits();this.setResponsive&&this.setResponsive();this.updateContainerScaling();this.hasRendered=!0};B.prototype.addCredits=function(b){var a=this,d=e(!0,this.options.credits,b);d.enabled&&!this.credits&&(this.credits=this.renderer.text(d.text+(this.mapCredits||""),0,0).addClass("highcharts-credits").on("click",function(){d.href&&(v.location.href=d.href)}).attr({align:d.position.align,
zIndex:8}),a.styledMode||this.credits.css(d.style),this.credits.add().align(d.position),this.credits.update=function(b){a.credits=a.credits.destroy();a.addCredits(b)})};B.prototype.updateContainerScaling=function(){var b=this.container;if(2<b.offsetWidth&&2<b.offsetHeight&&b.getBoundingClientRect){var a=b.getBoundingClientRect(),e=a.width/b.offsetWidth;b=a.height/b.offsetHeight;1!==e||1!==b?this.containerScaling={scaleX:e,scaleY:b}:delete this.containerScaling}};B.prototype.destroy=function(){var b=
this,a=b.axes,e=b.series,d=b.container,f,m=d&&d.parentNode;u(b,"destroy");b.renderer.forExport?k(t,b):t[b.index]=void 0;c.chartCount--;b.renderTo.removeAttribute("data-highcharts-chart");aa(b);for(f=a.length;f--;)a[f]=a[f].destroy();this.scroller&&this.scroller.destroy&&this.scroller.destroy();for(f=e.length;f--;)e[f]=e[f].destroy();"title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" ").forEach(function(a){var e=
b[a];e&&e.destroy&&(b[a]=e.destroy())});d&&(d.innerHTML="",aa(d),m&&l(d));h(b,function(a,e){delete b[e]})};B.prototype.firstRender=function(){var b=this,a=b.options;if(!b.isReadyToRender||b.isReadyToRender()){b.getContainer();b.resetMargins();b.setChartSize();b.propFromSeries();b.getAxes();(P(a.series)?a.series:[]).forEach(function(a){b.initSeries(a)});b.linkSeries();b.setSeriesData();u(b,"beforeRender");H&&(b.pointer=c.hasTouch||!v.PointerEvent&&!v.MSPointerEvent?new H(b,a):new y(b,a));b.render();
if(!b.renderer.imgCount&&!b.hasLoaded)b.onload();b.temporaryDisplay(!0)}};B.prototype.onload=function(){this.callbacks.concat([this.callback]).forEach(function(b){b&&"undefined"!==typeof this.index&&b.apply(this,[this])},this);u(this,"load");u(this,"render");d(this.index)&&this.setReflow(this.options.chart.reflow);this.hasLoaded=!0};return B}();X.prototype.callbacks=[];c.chart=function(b,a,e){return new X(b,a,e)};return c.Chart=X});O(q,"parts/ScrollablePlotArea.js",[q["parts/Chart.js"],q["parts/Globals.js"],
q["parts/Utilities.js"]],function(g,c,q){var y=q.addEvent,B=q.createElement,H=q.pick,D=q.stop;"";y(g,"afterSetChartSize",function(g){var t=this.options.chart.scrollablePlotArea,q=t&&t.minWidth;t=t&&t.minHeight;if(!this.renderer.forExport){if(q){if(this.scrollablePixelsX=q=Math.max(0,q-this.chartWidth)){this.plotWidth+=q;this.inverted?(this.clipBox.height+=q,this.plotBox.height+=q):(this.clipBox.width+=q,this.plotBox.width+=q);var y={1:{name:"right",value:q}}}}else t&&(this.scrollablePixelsY=q=Math.max(0,
t-this.chartHeight))&&(this.plotHeight+=q,this.inverted?(this.clipBox.width+=q,this.plotBox.width+=q):(this.clipBox.height+=q,this.plotBox.height+=q),y={2:{name:"bottom",value:q}});y&&!g.skipAxes&&this.axes.forEach(function(g){y[g.side]?g.getPlotLinePath=function(){var t=y[g.side].name,n=this[t];this[t]=n-y[g.side].value;var r=c.Axis.prototype.getPlotLinePath.apply(this,arguments);this[t]=n;return r}:(g.setAxisSize(),g.setAxisTranslation())})}});y(g,"render",function(){this.scrollablePixelsX||this.scrollablePixelsY?
(this.setUpScrolling&&this.setUpScrolling(),this.applyFixed()):this.fixedDiv&&this.applyFixed()});g.prototype.setUpScrolling=function(){var c=this,g={WebkitOverflowScrolling:"touch",overflowX:"hidden",overflowY:"hidden"};this.scrollablePixelsX&&(g.overflowX="auto");this.scrollablePixelsY&&(g.overflowY="auto");this.scrollingContainer=B("div",{className:"highcharts-scrolling"},g,this.renderTo);y(this.scrollingContainer,"scroll",function(){c.pointer&&delete c.pointer.chartPosition});this.innerContainer=
B("div",{className:"highcharts-inner-container"},null,this.scrollingContainer);this.innerContainer.appendChild(this.container);this.setUpScrolling=null};g.prototype.moveFixedElements=function(){var c=this.container,g=this.fixedRenderer,q=".highcharts-contextbutton .highcharts-credits .highcharts-legend .highcharts-legend-checkbox .highcharts-navigator-series .highcharts-navigator-xaxis .highcharts-navigator-yaxis .highcharts-navigator .highcharts-reset-zoom .highcharts-scrollbar .highcharts-subtitle .highcharts-title".split(" "),
y;this.scrollablePixelsX&&!this.inverted?y=".highcharts-yaxis":this.scrollablePixelsX&&this.inverted?y=".highcharts-xaxis":this.scrollablePixelsY&&!this.inverted?y=".highcharts-xaxis":this.scrollablePixelsY&&this.inverted&&(y=".highcharts-yaxis");q.push(y,y+"-labels");q.forEach(function(t){[].forEach.call(c.querySelectorAll(t),function(c){(c.namespaceURI===g.SVG_NS?g.box:g.box.parentNode).appendChild(c);c.style.pointerEvents="auto"})})};g.prototype.applyFixed=function(){var g,t,q=!this.fixedDiv,L=
this.options.chart.scrollablePlotArea;q?(this.fixedDiv=B("div",{className:"highcharts-fixed"},{position:"absolute",overflow:"hidden",pointerEvents:"none",zIndex:2},null,!0),this.renderTo.insertBefore(this.fixedDiv,this.renderTo.firstChild),this.renderTo.style.overflow="visible",this.fixedRenderer=t=new c.Renderer(this.fixedDiv,this.chartWidth,this.chartHeight,null===(g=this.options.chart)||void 0===g?void 0:g.style),this.scrollableMask=t.path().attr({fill:this.options.chart.backgroundColor||"#fff",
"fill-opacity":H(L.opacity,.85),zIndex:-1}).addClass("highcharts-scrollable-mask").add(),this.moveFixedElements(),y(this,"afterShowResetZoom",this.moveFixedElements),y(this,"afterLayOutTitles",this.moveFixedElements)):this.fixedRenderer.setSize(this.chartWidth,this.chartHeight);g=this.chartWidth+(this.scrollablePixelsX||0);t=this.chartHeight+(this.scrollablePixelsY||0);D(this.container);this.container.style.width=g+"px";this.container.style.height=t+"px";this.renderer.boxWrapper.attr({width:g,height:t,
viewBox:[0,0,g,t].join(" ")});this.chartBackground.attr({width:g,height:t});this.scrollingContainer.style.height=this.chartHeight+"px";q&&(L.scrollPositionX&&(this.scrollingContainer.scrollLeft=this.scrollablePixelsX*L.scrollPositionX),L.scrollPositionY&&(this.scrollingContainer.scrollTop=this.scrollablePixelsY*L.scrollPositionY));t=this.axisOffset;q=this.plotTop-t[0]-1;L=this.plotLeft-t[3]-1;g=this.plotTop+this.plotHeight+t[2]+1;t=this.plotLeft+this.plotWidth+t[1]+1;var v=this.plotLeft+this.plotWidth-
(this.scrollablePixelsX||0),K=this.plotTop+this.plotHeight-(this.scrollablePixelsY||0);q=this.scrollablePixelsX?[["M",0,q],["L",this.plotLeft-1,q],["L",this.plotLeft-1,g],["L",0,g],["Z"],["M",v,q],["L",this.chartWidth,q],["L",this.chartWidth,g],["L",v,g],["Z"]]:this.scrollablePixelsY?[["M",L,0],["L",L,this.plotTop-1],["L",t,this.plotTop-1],["L",t,0],["Z"],["M",L,K],["L",L,this.chartHeight],["L",t,this.chartHeight],["L",t,K],["Z"]]:[["M",0,0]];"adjustHeight"!==this.redrawTrigger&&this.scrollableMask.attr({d:q})}});
O(q,"parts/StackingAxis.js",[q["parts/Utilities.js"]],function(g){var c=g.addEvent,q=g.destroyObjectProperties,y=g.fireEvent,B=g.objectEach,H=g.pick,D=function(){function c(c){this.oldStacks={};this.stacks={};this.stacksTouched=0;this.axis=c}c.prototype.buildStacks=function(){var c=this.axis,g=c.series,q=H(c.options.reversedStacks,!0),v=g.length,D;if(!c.isXAxis){this.usePercentage=!1;for(D=v;D--;){var n=g[q?D:v-D-1];n.setStackedPoints();n.setGroupedPoints()}for(D=0;D<v;D++)g[D].modifyStacks();y(c,
"afterBuildStacks")}};c.prototype.cleanStacks=function(){if(!this.axis.isXAxis){if(this.oldStacks)var c=this.stacks=this.oldStacks;B(c,function(c){B(c,function(c){c.cumulative=c.total})})}};c.prototype.resetStacks=function(){var c=this,g=c.stacks;c.axis.isXAxis||B(g,function(g){B(g,function(q,t){q.touched<c.stacksTouched?(q.destroy(),delete g[t]):(q.total=null,q.cumulative=null)})})};c.prototype.renderStackTotals=function(){var c=this.axis.chart,g=c.renderer,q=this.stacks,v=this.stackTotalGroup=this.stackTotalGroup||
g.g("stack-labels").attr({visibility:"visible",zIndex:6}).add();v.translate(c.plotLeft,c.plotTop);B(q,function(c){B(c,function(c){c.render(v)})})};return c}();return function(){function g(){}g.compose=function(q){c(q,"init",g.onInit);c(q,"destroy",g.onDestroy)};g.onDestroy=function(){var c=this.stacking;if(c){var g=c.stacks;B(g,function(c,t){q(c);g[t]=null});c&&c.stackTotalGroup&&c.stackTotalGroup.destroy()}};g.onInit=function(){this.stacking||(this.stacking=new D(this))};return g}()});O(q,"mixins/legend-symbol.js",
[q["parts/Globals.js"],q["parts/Utilities.js"]],function(g,c){var q=c.merge,y=c.pick;g.LegendSymbolMixin={drawRectangle:function(c,g){var q=c.symbolHeight,B=c.options.squareSymbol;g.legendSymbol=this.chart.renderer.rect(B?(c.symbolWidth-q)/2:0,c.baseline-q+1,B?q:c.symbolWidth,q,y(c.options.symbolRadius,q/2)).addClass("highcharts-point").attr({zIndex:3}).add(g.legendGroup)},drawLineMarker:function(c){var g=this.options,D=g.marker,B=c.symbolWidth,t=c.symbolHeight,G=t/2,L=this.chart.renderer,v=this.legendGroup;
c=c.baseline-Math.round(.3*c.fontMetrics.b);var K={};this.chart.styledMode||(K={"stroke-width":g.lineWidth||0},g.dashStyle&&(K.dashstyle=g.dashStyle));this.legendLine=L.path(["M",0,c,"L",B,c]).addClass("highcharts-graph").attr(K).add(v);D&&!1!==D.enabled&&B&&(g=Math.min(y(D.radius,G),G),0===this.symbol.indexOf("url")&&(D=q(D,{width:t,height:t}),g=0),this.legendSymbol=D=L.symbol(this.symbol,B/2-g,c-g,2*g,2*g,D).addClass("highcharts-point").add(v),D.isMarker=!0)}};return g.LegendSymbolMixin});O(q,"parts/Point.js",
[q["parts/Globals.js"],q["parts/Utilities.js"]],function(g,c){var q=c.animObject,y=c.defined,B=c.erase,H=c.extend,D=c.fireEvent,J=c.format,t=c.getNestedProperty,G=c.isArray,L=c.isNumber,v=c.isObject,K=c.syncTimeout,n=c.pick,r=c.removeEvent,C=c.uniqueKey;"";c=function(){function c(){this.colorIndex=this.category=void 0;this.formatPrefix="point";this.id=void 0;this.isNull=!1;this.percentage=this.options=this.name=void 0;this.selected=!1;this.total=this.series=void 0;this.visible=!0;this.x=void 0}c.prototype.animateBeforeDestroy=
function(){var c=this,m={x:c.startXPos,opacity:0},d,l=c.getGraphicalProps();l.singular.forEach(function(l){d="dataLabel"===l;c[l]=c[l].animate(d?{x:c[l].startXPos,y:c[l].startYPos,opacity:0}:m)});l.plural.forEach(function(d){c[d].forEach(function(d){d.element&&d.animate(H({x:c.startXPos},d.startYPos?{x:d.startXPos,y:d.startYPos}:{}))})})};c.prototype.applyOptions=function(p,m){var d=this.series,l=d.options.pointValKey||d.pointValKey;p=c.prototype.optionsToObject.call(this,p);H(this,p);this.options=
this.options?H(this.options,p):p;p.group&&delete this.group;p.dataLabels&&delete this.dataLabels;l&&(this.y=c.prototype.getNestedProperty.call(this,l));this.formatPrefix=(this.isNull=n(this.isValid&&!this.isValid(),null===this.x||!L(this.y)))?"null":"point";this.selected&&(this.state="select");"name"in this&&"undefined"===typeof m&&d.xAxis&&d.xAxis.hasNames&&(this.x=d.xAxis.nameToX(this));"undefined"===typeof this.x&&d&&(this.x="undefined"===typeof m?d.autoIncrement(this):m);return this};c.prototype.destroy=
function(){function c(){if(m.graphic||m.dataLabel||m.dataLabels)r(m),m.destroyElements();for(a in m)m[a]=null}var m=this,d=m.series,l=d.chart;d=d.options.dataSorting;var k=l.hoverPoints,f=q(m.series.chart.renderer.globalAnimation),a;m.legendItem&&l.legend.destroyItem(m);k&&(m.setState(),B(k,m),k.length||(l.hoverPoints=null));if(m===l.hoverPoint)m.onMouseOut();d&&d.enabled?(this.animateBeforeDestroy(),K(c,f.duration)):c();l.pointCount--};c.prototype.destroyElements=function(c){var m=this;c=m.getGraphicalProps(c);
c.singular.forEach(function(d){m[d]=m[d].destroy()});c.plural.forEach(function(d){m[d].forEach(function(d){d.element&&d.destroy()});delete m[d]})};c.prototype.firePointEvent=function(c,m,d){var l=this,k=this.series.options;(k.point.events[c]||l.options&&l.options.events&&l.options.events[c])&&l.importEvents();"click"===c&&k.allowPointSelect&&(d=function(d){l.select&&l.select(null,d.ctrlKey||d.metaKey||d.shiftKey)});D(l,c,m,d)};c.prototype.getClassName=function(){return"highcharts-point"+(this.selected?
" highcharts-point-select":"")+(this.negative?" highcharts-negative":"")+(this.isNull?" highcharts-null-point":"")+("undefined"!==typeof this.colorIndex?" highcharts-color-"+this.colorIndex:"")+(this.options.className?" "+this.options.className:"")+(this.zone&&this.zone.className?" "+this.zone.className.replace("highcharts-negative",""):"")};c.prototype.getGraphicalProps=function(c){var m=this,d=[],l,k={singular:[],plural:[]};c=c||{graphic:1,dataLabel:1};c.graphic&&d.push("graphic","shadowGroup");
c.dataLabel&&d.push("dataLabel","dataLabelUpper","connector");for(l=d.length;l--;){var f=d[l];m[f]&&k.singular.push(f)}["dataLabel","connector"].forEach(function(a){var d=a+"s";c[a]&&m[d]&&k.plural.push(d)});return k};c.prototype.getLabelConfig=function(){return{x:this.category,y:this.y,color:this.color,colorIndex:this.colorIndex,key:this.name||this.category,series:this.series,point:this,percentage:this.percentage,total:this.total||this.stackTotal}};c.prototype.getNestedProperty=function(c){if(c)return 0===
c.indexOf("custom.")?t(c,this.options):this[c]};c.prototype.getZone=function(){var c=this.series,m=c.zones;c=c.zoneAxis||"y";var d=0,l;for(l=m[d];this[c]>=l.value;)l=m[++d];this.nonZonedColor||(this.nonZonedColor=this.color);this.color=l&&l.color&&!this.options.color?l.color:this.nonZonedColor;return l};c.prototype.hasNewShapeType=function(){return(this.graphic&&(this.graphic.symbolName||this.graphic.element.nodeName))!==this.shapeType};c.prototype.init=function(c,m,d){this.series=c;this.applyOptions(m,
d);this.id=y(this.id)?this.id:C();this.resolveColor();c.chart.pointCount++;D(this,"afterInit");return this};c.prototype.optionsToObject=function(g){var m={},d=this.series,l=d.options.keys,k=l||d.pointArrayMap||["y"],f=k.length,a=0,p=0;if(L(g)||null===g)m[k[0]]=g;else if(G(g))for(!l&&g.length>f&&(d=typeof g[0],"string"===d?m.name=g[0]:"number"===d&&(m.x=g[0]),a++);p<f;)l&&"undefined"===typeof g[a]||(0<k[p].indexOf(".")?c.prototype.setNestedProperty(m,g[a],k[p]):m[k[p]]=g[a]),a++,p++;else"object"===
typeof g&&(m=g,g.dataLabels&&(d._hasPointLabels=!0),g.marker&&(d._hasPointMarkers=!0));return m};c.prototype.resolveColor=function(){var c=this.series;var m=c.chart.options.chart.colorCount;var d=c.chart.styledMode;delete this.nonZonedColor;d||this.options.color||(this.color=c.color);c.options.colorByPoint?(d||(m=c.options.colors||c.chart.options.colors,this.color=this.color||m[c.colorCounter],m=m.length),d=c.colorCounter,c.colorCounter++,c.colorCounter===m&&(c.colorCounter=0)):d=c.colorIndex;this.colorIndex=
n(this.colorIndex,d)};c.prototype.setNestedProperty=function(c,m,d){d.split(".").reduce(function(d,c,f,a){d[c]=a.length-1===f?m:v(d[c],!0)?d[c]:{};return d[c]},c);return c};c.prototype.tooltipFormatter=function(c){var m=this.series,d=m.tooltipOptions,l=n(d.valueDecimals,""),k=d.valuePrefix||"",f=d.valueSuffix||"";m.chart.styledMode&&(c=m.chart.tooltip.styledModeFormat(c));(m.pointArrayMap||["y"]).forEach(function(a){a="{point."+a;if(k||f)c=c.replace(RegExp(a+"}","g"),k+a+"}"+f);c=c.replace(RegExp(a+
"}","g"),a+":,."+l+"f}")});return J(c,{point:this,series:this.series},m.chart)};return c}();return g.Point=c});O(q,"parts/Series.js",[q["parts/Globals.js"],q["mixins/legend-symbol.js"],q["parts/Options.js"],q["parts/Point.js"],q["parts/SVGElement.js"],q["parts/Utilities.js"]],function(g,c,q,y,B,H){var D=q.defaultOptions,J=H.addEvent,t=H.animObject,G=H.arrayMax,L=H.arrayMin,v=H.clamp,K=H.correctFloat,n=H.defined,r=H.erase,C=H.error,I=H.extend,p=H.find,m=H.fireEvent,d=H.getNestedProperty,l=H.isArray,
k=H.isFunction,f=H.isNumber,a=H.isString,A=H.merge,u=H.objectEach,E=H.pick,P=H.removeEvent;q=H.seriesType;var w=H.splat,M=H.syncTimeout;"";var F=g.seriesTypes,Q=g.win;g.Series=q("line",null,{lineWidth:2,allowPointSelect:!1,crisp:!0,showCheckbox:!1,animation:{duration:1E3},events:{},marker:{enabledThreshold:2,lineColor:"#ffffff",lineWidth:0,radius:4,states:{normal:{animation:!0},hover:{animation:{duration:50},enabled:!0,radiusPlus:2,lineWidthPlus:1},select:{fillColor:"#cccccc",lineColor:"#000000",
lineWidth:2}}},point:{events:{}},dataLabels:{align:"center",formatter:function(){var a=this.series.chart.numberFormatter;return"number"!==typeof this.y?"":a(this.y,-1)},padding:5,style:{fontSize:"11px",fontWeight:"bold",color:"contrast",textOutline:"1px contrast"},verticalAlign:"bottom",x:0,y:0},cropThreshold:300,opacity:1,pointRange:0,softThreshold:!0,states:{normal:{animation:!0},hover:{animation:{duration:50},lineWidthPlus:1,marker:{},halo:{size:10,opacity:.25}},select:{animation:{duration:0}},
inactive:{animation:{duration:50},opacity:.2}},stickyTracking:!0,turboThreshold:1E3,findNearestPointBy:"x"},{axisTypes:["xAxis","yAxis"],coll:"series",colorCounter:0,cropShoulder:1,directTouch:!1,eventsToUnbind:[],isCartesian:!0,parallelArrays:["x","y"],pointClass:y,requireSorting:!0,sorted:!0,init:function(a,b){m(this,"init",{options:b});var e=this,d=a.series,c;this.eventOptions=this.eventOptions||{};e.chart=a;e.options=b=e.setOptions(b);e.linkedSeries=[];e.bindAxes();I(e,{name:b.name,state:"",visible:!1!==
b.visible,selected:!0===b.selected});var f=b.events;u(f,function(b,a){k(b)&&e.eventOptions[a]!==b&&(k(e.eventOptions[a])&&P(e,a,e.eventOptions[a]),e.eventOptions[a]=b,J(e,a,b))});if(f&&f.click||b.point&&b.point.events&&b.point.events.click||b.allowPointSelect)a.runTrackerClick=!0;e.getColor();e.getSymbol();e.parallelArrays.forEach(function(b){e[b+"Data"]||(e[b+"Data"]=[])});e.isCartesian&&(a.hasCartesianSeries=!0);d.length&&(c=d[d.length-1]);e._i=E(c&&c._i,-1)+1;e.opacity=e.options.opacity;a.orderSeries(this.insert(d));
b.dataSorting&&b.dataSorting.enabled?e.setDataSortingOptions():e.points||e.data||e.setData(b.data,!1);m(this,"afterInit")},is:function(a){return F[a]&&this instanceof F[a]},insert:function(a){var b=this.options.index,e;if(f(b)){for(e=a.length;e--;)if(b>=E(a[e].options.index,a[e]._i)){a.splice(e+1,0,this);break}-1===e&&a.unshift(this);e+=1}else a.push(this);return E(e,a.length-1)},bindAxes:function(){var a=this,b=a.options,d=a.chart,c;m(this,"bindAxes",null,function(){(a.axisTypes||[]).forEach(function(e){d[e].forEach(function(d){c=
d.options;if(b[e]===c.index||"undefined"!==typeof b[e]&&b[e]===c.id||"undefined"===typeof b[e]&&0===c.index)a.insert(d.series),a[e]=d,d.isDirty=!0});a[e]||a.optionalAxis===e||C(18,!0,d)})});m(this,"afterBindAxes")},updateParallelArrays:function(a,b){var e=a.series,d=arguments,c=f(b)?function(d){var c="y"===d&&e.toYData?e.toYData(a):a[d];e[d+"Data"][b]=c}:function(a){Array.prototype[b].apply(e[a+"Data"],Array.prototype.slice.call(d,2))};e.parallelArrays.forEach(c)},hasData:function(){return this.visible&&
"undefined"!==typeof this.dataMax&&"undefined"!==typeof this.dataMin||this.visible&&this.yData&&0<this.yData.length},autoIncrement:function(){var a=this.options,b=this.xIncrement,d,c=a.pointIntervalUnit,f=this.chart.time;b=E(b,a.pointStart,0);this.pointInterval=d=E(this.pointInterval,a.pointInterval,1);c&&(a=new f.Date(b),"day"===c?f.set("Date",a,f.get("Date",a)+d):"month"===c?f.set("Month",a,f.get("Month",a)+d):"year"===c&&f.set("FullYear",a,f.get("FullYear",a)+d),d=a.getTime()-b);this.xIncrement=
b+d;return b},setDataSortingOptions:function(){var a=this.options;I(this,{requireSorting:!1,sorted:!1,enabledDataSorting:!0,allowDG:!1});n(a.pointRange)||(a.pointRange=1)},setOptions:function(a){var b=this.chart,e=b.options,d=e.plotOptions,c=b.userOptions||{};a=A(a);b=b.styledMode;var f={plotOptions:d,userOptions:a};m(this,"setOptions",f);var l=f.plotOptions[this.type],k=c.plotOptions||{};this.userOptions=f.userOptions;c=A(l,d.series,c.plotOptions&&c.plotOptions[this.type],a);this.tooltipOptions=
A(D.tooltip,D.plotOptions.series&&D.plotOptions.series.tooltip,D.plotOptions[this.type].tooltip,e.tooltip.userOptions,d.series&&d.series.tooltip,d[this.type].tooltip,a.tooltip);this.stickyTracking=E(a.stickyTracking,k[this.type]&&k[this.type].stickyTracking,k.series&&k.series.stickyTracking,this.tooltipOptions.shared&&!this.noSharedTooltip?!0:c.stickyTracking);null===l.marker&&delete c.marker;this.zoneAxis=c.zoneAxis;e=this.zones=(c.zones||[]).slice();!c.negativeColor&&!c.negativeFillColor||c.zones||
(d={value:c[this.zoneAxis+"Threshold"]||c.threshold||0,className:"highcharts-negative"},b||(d.color=c.negativeColor,d.fillColor=c.negativeFillColor),e.push(d));e.length&&n(e[e.length-1].value)&&e.push(b?{}:{color:this.color,fillColor:this.fillColor});m(this,"afterSetOptions",{options:c});return c},getName:function(){return E(this.options.name,"Series "+(this.index+1))},getCyclic:function(a,b,d){var e=this.chart,c=this.userOptions,h=a+"Index",f=a+"Counter",l=d?d.length:E(e.options.chart[a+"Count"],
e[a+"Count"]);if(!b){var k=E(c[h],c["_"+h]);n(k)||(e.series.length||(e[f]=0),c["_"+h]=k=e[f]%l,e[f]+=1);d&&(b=d[k])}"undefined"!==typeof k&&(this[h]=k);this[a]=b},getColor:function(){this.chart.styledMode?this.getCyclic("color"):this.options.colorByPoint?this.options.color=null:this.getCyclic("color",this.options.color||D.plotOptions[this.type].color,this.chart.options.colors)},getPointsCollection:function(){return(this.hasGroupedData?this.points:this.data)||[]},getSymbol:function(){this.getCyclic("symbol",
this.options.marker.symbol,this.chart.options.symbols)},findPointIndex:function(a,b){var e=a.id,d=a.x,c=this.points,l,k=this.options.dataSorting;if(e)var m=this.chart.get(e);else if(this.linkedParent||this.enabledDataSorting){var g=k&&k.matchByName?"name":"index";m=p(c,function(b){return!b.touched&&b[g]===a[g]});if(!m)return}if(m){var n=m&&m.index;"undefined"!==typeof n&&(l=!0)}"undefined"===typeof n&&f(d)&&(n=this.xData.indexOf(d,b));-1!==n&&"undefined"!==typeof n&&this.cropped&&(n=n>=this.cropStart?
n-this.cropStart:n);!l&&c[n]&&c[n].touched&&(n=void 0);return n},drawLegendSymbol:c.drawLineMarker,updateData:function(a,b){var e=this.options,d=e.dataSorting,c=this.points,l=[],k,m,g,p=this.requireSorting,u=a.length===c.length,w=!0;this.xIncrement=null;a.forEach(function(b,a){var h=n(b)&&this.pointClass.prototype.optionsToObject.call({series:this},b)||{};var m=h.x;if(h.id||f(m)){if(m=this.findPointIndex(h,g),-1===m||"undefined"===typeof m?l.push(b):c[m]&&b!==e.data[m]?(c[m].update(b,!1,null,!1),
c[m].touched=!0,p&&(g=m+1)):c[m]&&(c[m].touched=!0),!u||a!==m||d&&d.enabled||this.hasDerivedData)k=!0}else l.push(b)},this);if(k)for(a=c.length;a--;)(m=c[a])&&!m.touched&&m.remove&&m.remove(!1,b);else!u||d&&d.enabled?w=!1:(a.forEach(function(b,a){c[a].update&&b!==c[a].y&&c[a].update(b,!1,null,!1)}),l.length=0);c.forEach(function(b){b&&(b.touched=!1)});if(!w)return!1;l.forEach(function(b){this.addPoint(b,!1,null,null,!1)},this);null===this.xIncrement&&this.xData&&this.xData.length&&(this.xIncrement=
G(this.xData),this.autoIncrement());return!0},setData:function(e,b,d,c){var h=this,k=h.points,m=k&&k.length||0,g,p=h.options,n=h.chart,u=p.dataSorting,w=null,z=h.xAxis;w=p.turboThreshold;var r=this.xData,q=this.yData,A=(g=h.pointArrayMap)&&g.length,t=p.keys,v=0,F=1,M;e=e||[];g=e.length;b=E(b,!0);u&&u.enabled&&(e=this.sortData(e));!1!==c&&g&&m&&!h.cropped&&!h.hasGroupedData&&h.visible&&!h.isSeriesBoosting&&(M=this.updateData(e,d));if(!M){h.xIncrement=null;h.colorCounter=0;this.parallelArrays.forEach(function(b){h[b+
"Data"].length=0});if(w&&g>w)if(w=h.getFirstValidPoint(e),f(w))for(d=0;d<g;d++)r[d]=this.autoIncrement(),q[d]=e[d];else if(l(w))if(A)for(d=0;d<g;d++)c=e[d],r[d]=c[0],q[d]=c.slice(1,A+1);else for(t&&(v=t.indexOf("x"),F=t.indexOf("y"),v=0<=v?v:0,F=0<=F?F:1),d=0;d<g;d++)c=e[d],r[d]=c[v],q[d]=c[F];else C(12,!1,n);else for(d=0;d<g;d++)"undefined"!==typeof e[d]&&(c={series:h},h.pointClass.prototype.applyOptions.apply(c,[e[d]]),h.updateParallelArrays(c,d));q&&a(q[0])&&C(14,!0,n);h.data=[];h.options.data=
h.userOptions.data=e;for(d=m;d--;)k[d]&&k[d].destroy&&k[d].destroy();z&&(z.minRange=z.userMinRange);h.isDirty=n.isDirtyBox=!0;h.isDirtyData=!!k;d=!1}"point"===p.legendType&&(this.processData(),this.generatePoints());b&&n.redraw(d)},sortData:function(a){var b=this,e=b.options.dataSorting.sortKey||"y",c=function(b,a){return n(a)&&b.pointClass.prototype.optionsToObject.call({series:b},a)||{}};a.forEach(function(e,d){a[d]=c(b,e);a[d].index=d},this);a.concat().sort(function(b,a){b=d(e,b);a=d(e,a);return a<
b?-1:a>b?1:0}).forEach(function(b,a){b.x=a},this);b.linkedSeries&&b.linkedSeries.forEach(function(b){var e=b.options,d=e.data;e.dataSorting&&e.dataSorting.enabled||!d||(d.forEach(function(e,h){d[h]=c(b,e);a[h]&&(d[h].x=a[h].x,d[h].index=h)}),b.setData(d,!1))});return a},getProcessedData:function(a){var b=this.xData,e=this.yData,d=b.length;var c=0;var f=this.xAxis,l=this.options;var k=l.cropThreshold;var m=a||this.getExtremesFromAll||l.getExtremesFromAll,g=this.isCartesian;a=f&&f.val2lin;l=!(!f||!f.logarithmic);
var p=this.requireSorting;if(f){f=f.getExtremes();var n=f.min;var w=f.max}if(g&&this.sorted&&!m&&(!k||d>k||this.forceCrop))if(b[d-1]<n||b[0]>w)b=[],e=[];else if(this.yData&&(b[0]<n||b[d-1]>w)){c=this.cropData(this.xData,this.yData,n,w);b=c.xData;e=c.yData;c=c.start;var u=!0}for(k=b.length||1;--k;)if(d=l?a(b[k])-a(b[k-1]):b[k]-b[k-1],0<d&&("undefined"===typeof r||d<r))var r=d;else 0>d&&p&&(C(15,!1,this.chart),p=!1);return{xData:b,yData:e,cropped:u,cropStart:c,closestPointRange:r}},processData:function(a){var b=
this.xAxis;if(this.isCartesian&&!this.isDirty&&!b.isDirty&&!this.yAxis.isDirty&&!a)return!1;a=this.getProcessedData();this.cropped=a.cropped;this.cropStart=a.cropStart;this.processedXData=a.xData;this.processedYData=a.yData;this.closestPointRange=this.basePointRange=a.closestPointRange},cropData:function(a,b,d,c,f){var e=a.length,h=0,k=e,l;f=E(f,this.cropShoulder);for(l=0;l<e;l++)if(a[l]>=d){h=Math.max(0,l-f);break}for(d=l;d<e;d++)if(a[d]>c){k=d+f;break}return{xData:a.slice(h,k),yData:b.slice(h,k),
start:h,end:k}},generatePoints:function(){var a=this.options,b=a.data,d=this.data,c,f=this.processedXData,k=this.processedYData,l=this.pointClass,g=f.length,p=this.cropStart||0,n=this.hasGroupedData;a=a.keys;var u=[],r;d||n||(d=[],d.length=b.length,d=this.data=d);a&&n&&(this.options.keys=!1);for(r=0;r<g;r++){var q=p+r;if(n){var A=(new l).init(this,[f[r]].concat(w(k[r])));A.dataGroup=this.groupMap[r];A.dataGroup.options&&(A.options=A.dataGroup.options,I(A,A.dataGroup.options),delete A.dataLabels)}else(A=
d[q])||"undefined"===typeof b[q]||(d[q]=A=(new l).init(this,b[q],f[r]));A&&(A.index=q,u[r]=A)}this.options.keys=a;if(d&&(g!==(c=d.length)||n))for(r=0;r<c;r++)r!==p||n||(r+=g),d[r]&&(d[r].destroyElements(),d[r].plotX=void 0);this.data=d;this.points=u;m(this,"afterGeneratePoints")},getXExtremes:function(a){return{min:L(a),max:G(a)}},getExtremes:function(a,b){var d=this.xAxis,e=this.yAxis,c=this.processedXData||this.xData,k=[],g=0,p=0;var n=0;var w=this.requireSorting?this.cropShoulder:0,u=e?e.positiveValuesOnly:
!1,r;a=a||this.stackedYData||this.processedYData||[];e=a.length;d&&(n=d.getExtremes(),p=n.min,n=n.max);for(r=0;r<e;r++){var q=c[r];var A=a[r];var t=(f(A)||l(A))&&(A.length||0<A||!u);q=b||this.getExtremesFromAll||this.options.getExtremesFromAll||this.cropped||!d||(c[r+w]||q)>=p&&(c[r-w]||q)<=n;if(t&&q)if(t=A.length)for(;t--;)f(A[t])&&(k[g++]=A[t]);else k[g++]=A}a={dataMin:L(k),dataMax:G(k)};m(this,"afterGetExtremes",{dataExtremes:a});return a},applyExtremes:function(){var a=this.getExtremes();this.dataMin=
a.dataMin;this.dataMax=a.dataMax;return a},getFirstValidPoint:function(a){for(var b=null,d=a.length,e=0;null===b&&e<d;)b=a[e],e++;return b},translate:function(){this.processedXData||this.processData();this.generatePoints();var a=this.options,b=a.stacking,d=this.xAxis,c=d.categories,k=this.enabledDataSorting,g=this.yAxis,p=this.points,w=p.length,u=!!this.modifyValue,r,q=this.pointPlacementToXValue(),A=!!q,t=a.threshold,C=a.startFromThreshold?t:0,F,M=this.zoneAxis||"y",y=Number.MAX_VALUE;for(r=0;r<
w;r++){var I=p[r],D=I.x,B=I.y,G=I.low,P=b&&g.stacking&&g.stacking.stacks[(this.negStacks&&B<(C?0:t)?"-":"")+this.stackKey];g.positiveValuesOnly&&null!==B&&0>=B&&(I.isNull=!0);I.plotX=F=K(v(d.translate(D,0,0,0,1,q,"flags"===this.type),-1E5,1E5));if(b&&this.visible&&P&&P[D]){var H=this.getStackIndicator(H,D,this.index);if(!I.isNull){var Q=P[D];var J=Q.points[H.key]}}l(J)&&(G=J[0],B=J[1],G===C&&H.key===P[D].base&&(G=E(f(t)&&t,g.min)),g.positiveValuesOnly&&0>=G&&(G=null),I.total=I.stackTotal=Q.total,
I.percentage=Q.total&&I.y/Q.total*100,I.stackY=B,this.irregularWidths||Q.setOffset(this.pointXOffset||0,this.barW||0));I.yBottom=n(G)?v(g.translate(G,0,1,0,1),-1E5,1E5):null;u&&(B=this.modifyValue(B,I));I.plotY="number"===typeof B&&Infinity!==B?v(g.translate(B,0,1,0,1),-1E5,1E5):void 0;I.isInside=this.isPointInside(I);I.clientX=A?K(d.translate(D,0,0,0,1,q)):F;I.negative=I[M]<(a[M+"Threshold"]||t||0);I.category=c&&"undefined"!==typeof c[I.x]?c[I.x]:I.x;if(!I.isNull&&!1!==I.visible){"undefined"!==typeof L&&
(y=Math.min(y,Math.abs(F-L)));var L=F}I.zone=this.zones.length&&I.getZone();!I.graphic&&this.group&&k&&(I.isNew=!0)}this.closestPointRangePx=y;m(this,"afterTranslate")},getValidPoints:function(a,b,d){var e=this.chart;return(a||this.points||[]).filter(function(a){return b&&!e.isInsidePlot(a.plotX,a.plotY,e.inverted)?!1:!1!==a.visible&&(d||!a.isNull)})},getClipBox:function(a,b){var d=this.options,e=this.chart,c=e.inverted,f=this.xAxis,k=f&&this.yAxis,l=e.options.chart.scrollablePlotArea||{};a&&!1===
d.clip&&k?a=c?{y:-e.chartWidth+k.len+k.pos,height:e.chartWidth,width:e.chartHeight,x:-e.chartHeight+f.len+f.pos}:{y:-k.pos,height:e.chartHeight,width:e.chartWidth,x:-f.pos}:(a=this.clipBox||e.clipBox,b&&(a.width=e.plotSizeX,a.x=(e.scrollablePixelsX||0)*(l.scrollPositionX||0)));return b?{width:a.width,x:a.x}:a},setClip:function(a){var b=this.chart,d=this.options,e=b.renderer,c=b.inverted,f=this.clipBox,k=this.getClipBox(a),l=this.sharedClipKey||["_sharedClip",a&&a.duration,a&&a.easing,k.height,d.xAxis,
d.yAxis].join(),m=b[l],g=b[l+"m"];a&&(k.width=0,c&&(k.x=b.plotHeight+(!1!==d.clip?0:b.plotTop)));m?b.hasLoaded||m.attr(k):(a&&(b[l+"m"]=g=e.clipRect(c?b.plotSizeX+99:-99,c?-b.plotLeft:-b.plotTop,99,c?b.chartWidth:b.chartHeight)),b[l]=m=e.clipRect(k),m.count={length:0});a&&!m.count[this.index]&&(m.count[this.index]=!0,m.count.length+=1);if(!1!==d.clip||a)this.group.clip(a||f?m:b.clipRect),this.markerGroup.clip(g),this.sharedClipKey=l;a||(m.count[this.index]&&(delete m.count[this.index],--m.count.length),
0===m.count.length&&l&&b[l]&&(f||(b[l]=b[l].destroy()),b[l+"m"]&&(b[l+"m"]=b[l+"m"].destroy())))},animate:function(a){var b=this.chart,d=t(this.options.animation);if(!b.hasRendered)if(a)this.setClip(d);else{var e=this.sharedClipKey;a=b[e];var c=this.getClipBox(d,!0);a&&a.animate(c,d);b[e+"m"]&&b[e+"m"].animate({width:c.width+99,x:c.x-(b.inverted?0:99)},d)}},afterAnimate:function(){this.setClip();m(this,"afterAnimate");this.finishedAnimating=!0},drawPoints:function(){var a=this.points,b=this.chart,
d,c,f=this.options.marker,k=this[this.specialGroup]||this.markerGroup,l=this.xAxis,m=E(f.enabled,!l||l.isRadial?!0:null,this.closestPointRangePx>=f.enabledThreshold*f.radius);if(!1!==f.enabled||this._hasPointMarkers)for(d=0;d<a.length;d++){var g=a[d];var p=(c=g.graphic)?"animate":"attr";var n=g.marker||{};var w=!!g.marker;if((m&&"undefined"===typeof n.enabled||n.enabled)&&!g.isNull&&!1!==g.visible){var u=E(n.symbol,this.symbol);var r=this.markerAttribs(g,g.selected&&"select");this.enabledDataSorting&&
(g.startXPos=l.reversed?-r.width:l.width);var q=!1!==g.isInside;c?c[q?"show":"hide"](q).animate(r):q&&(0<r.width||g.hasImage)&&(g.graphic=c=b.renderer.symbol(u,r.x,r.y,r.width,r.height,w?n:f).add(k),this.enabledDataSorting&&b.hasRendered&&(c.attr({x:g.startXPos}),p="animate"));c&&"animate"===p&&c[q?"show":"hide"](q).animate(r);if(c&&!b.styledMode)c[p](this.pointAttribs(g,g.selected&&"select"));c&&c.addClass(g.getClassName(),!0)}else c&&(g.graphic=c.destroy())}},markerAttribs:function(a,b){var d=this.options,
e=d.marker,c=a.marker||{},f=c.symbol||e.symbol,k=E(c.radius,e.radius);b&&(e=e.states[b],b=c.states&&c.states[b],k=E(b&&b.radius,e&&e.radius,k+(e&&e.radiusPlus||0)));a.hasImage=f&&0===f.indexOf("url");a.hasImage&&(k=0);a={x:d.crisp?Math.floor(a.plotX)-k:a.plotX-k,y:a.plotY-k};k&&(a.width=a.height=2*k);return a},pointAttribs:function(a,b){var d=this.options.marker,e=a&&a.options,c=e&&e.marker||{},f=this.color,k=e&&e.color,l=a&&a.color;e=E(c.lineWidth,d.lineWidth);var m=a&&a.zone&&a.zone.color;a=1;f=
k||m||l||f;k=c.fillColor||d.fillColor||f;f=c.lineColor||d.lineColor||f;b=b||"normal";d=d.states[b];b=c.states&&c.states[b]||{};e=E(b.lineWidth,d.lineWidth,e+E(b.lineWidthPlus,d.lineWidthPlus,0));k=b.fillColor||d.fillColor||k;f=b.lineColor||d.lineColor||f;a=E(b.opacity,d.opacity,a);return{stroke:f,"stroke-width":e,fill:k,opacity:a}},destroy:function(a){var b=this,d=b.chart,e=/AppleWebKit\/533/.test(Q.navigator.userAgent),c,f,k=b.data||[],l,g;m(b,"destroy");this.removeEvents(a);(b.axisTypes||[]).forEach(function(a){(g=
b[a])&&g.series&&(r(g.series,b),g.isDirty=g.forceRedraw=!0)});b.legendItem&&b.chart.legend.destroyItem(b);for(f=k.length;f--;)(l=k[f])&&l.destroy&&l.destroy();b.points=null;H.clearTimeout(b.animationTimeout);u(b,function(b,a){b instanceof B&&!b.survive&&(c=e&&"group"===a?"hide":"destroy",b[c]())});d.hoverSeries===b&&(d.hoverSeries=null);r(d.series,b);d.orderSeries();u(b,function(d,e){a&&"hcEvents"===e||delete b[e]})},getGraphPath:function(a,b,d){var e=this,c=e.options,f=c.step,h,k=[],l=[],m;a=a||
e.points;(h=a.reversed)&&a.reverse();(f={right:1,center:2}[f]||f&&3)&&h&&(f=4-f);a=this.getValidPoints(a,!1,!(c.connectNulls&&!b&&!d));a.forEach(function(h,g){var p=h.plotX,r=h.plotY,w=a[g-1];(h.leftCliff||w&&w.rightCliff)&&!d&&(m=!0);h.isNull&&!n(b)&&0<g?m=!c.connectNulls:h.isNull&&!b?m=!0:(0===g||m?g=[["M",h.plotX,h.plotY]]:e.getPointSpline?g=[e.getPointSpline(a,h,g)]:f?(g=1===f?[["L",w.plotX,r]]:2===f?[["L",(w.plotX+p)/2,w.plotY],["L",(w.plotX+p)/2,r]]:[["L",p,w.plotY]],g.push(["L",p,r])):g=[["L",
p,r]],l.push(h.x),f&&(l.push(h.x),2===f&&l.push(h.x)),k.push.apply(k,g),m=!1)});k.xMap=l;return e.graphPath=k},drawGraph:function(){var a=this,b=this.options,d=(this.gappedPath||this.getGraphPath).call(this),c=this.chart.styledMode,f=[["graph","highcharts-graph"]];c||f[0].push(b.lineColor||this.color||"#cccccc",b.dashStyle);f=a.getZonesGraphs(f);f.forEach(function(e,f){var h=e[0],k=a[h],l=k?"animate":"attr";k?(k.endX=a.preventGraphAnimation?null:d.xMap,k.animate({d:d})):d.length&&(a[h]=k=a.chart.renderer.path(d).addClass(e[1]).attr({zIndex:1}).add(a.group));
k&&!c&&(h={stroke:e[2],"stroke-width":b.lineWidth,fill:a.fillGraph&&a.color||"none"},e[3]?h.dashstyle=e[3]:"square"!==b.linecap&&(h["stroke-linecap"]=h["stroke-linejoin"]="round"),k[l](h).shadow(2>f&&b.shadow));k&&(k.startX=d.xMap,k.isArea=d.isArea)})},getZonesGraphs:function(a){this.zones.forEach(function(b,d){d=["zone-graph-"+d,"highcharts-graph highcharts-zone-graph-"+d+" "+(b.className||"")];this.chart.styledMode||d.push(b.color||this.color,b.dashStyle||this.options.dashStyle);a.push(d)},this);
return a},applyZones:function(){var a=this,b=this.chart,d=b.renderer,c=this.zones,f,k,l=this.clips||[],m,g=this.graph,p=this.area,n=Math.max(b.chartWidth,b.chartHeight),r=this[(this.zoneAxis||"y")+"Axis"],w=b.inverted,u,q,A,t=!1,C,F;if(c.length&&(g||p)&&r&&"undefined"!==typeof r.min){var M=r.reversed;var I=r.horiz;g&&!this.showLine&&g.hide();p&&p.hide();var y=r.getExtremes();c.forEach(function(e,c){f=M?I?b.plotWidth:0:I?0:r.toPixels(y.min)||0;f=v(E(k,f),0,n);k=v(Math.round(r.toPixels(E(e.value,y.max),
!0)||0),0,n);t&&(f=k=r.toPixels(y.max));u=Math.abs(f-k);q=Math.min(f,k);A=Math.max(f,k);r.isXAxis?(m={x:w?A:q,y:0,width:u,height:n},I||(m.x=b.plotHeight-m.x)):(m={x:0,y:w?A:q,width:n,height:u},I&&(m.y=b.plotWidth-m.y));w&&d.isVML&&(m=r.isXAxis?{x:0,y:M?q:A,height:m.width,width:b.chartWidth}:{x:m.y-b.plotLeft-b.spacingBox.x,y:0,width:m.height,height:b.chartHeight});l[c]?l[c].animate(m):l[c]=d.clipRect(m);C=a["zone-area-"+c];F=a["zone-graph-"+c];g&&F&&F.clip(l[c]);p&&C&&C.clip(l[c]);t=e.value>y.max;
a.resetZones&&0===k&&(k=void 0)});this.clips=l}else a.visible&&(g&&g.show(!0),p&&p.show(!0))},invertGroups:function(a){function b(){["group","markerGroup"].forEach(function(b){d[b]&&(e.renderer.isVML&&d[b].attr({width:d.yAxis.len,height:d.xAxis.len}),d[b].width=d.yAxis.len,d[b].height=d.xAxis.len,d[b].invert(d.isRadialSeries?!1:a))})}var d=this,e=d.chart;d.xAxis&&(d.eventsToUnbind.push(J(e,"resize",b)),b(),d.invertGroups=b)},plotGroup:function(a,b,d,c,f){var e=this[a],h=!e;d={visibility:d,zIndex:c||
.1};"undefined"===typeof this.opacity||this.chart.styledMode||(d.opacity=this.opacity);h&&(this[a]=e=this.chart.renderer.g().add(f));e.addClass("highcharts-"+b+" highcharts-series-"+this.index+" highcharts-"+this.type+"-series "+(n(this.colorIndex)?"highcharts-color-"+this.colorIndex+" ":"")+(this.options.className||"")+(e.hasClass("highcharts-tracker")?" highcharts-tracker":""),!0);e.attr(d)[h?"attr":"animate"](this.getPlotBox());return e},getPlotBox:function(){var a=this.chart,b=this.xAxis,d=this.yAxis;
a.inverted&&(b=d,d=this.xAxis);return{translateX:b?b.left:a.plotLeft,translateY:d?d.top:a.plotTop,scaleX:1,scaleY:1}},removeEvents:function(a){a?this.eventsToUnbind.length&&(this.eventsToUnbind.forEach(function(b){b()}),this.eventsToUnbind.length=0):P(this)},render:function(){var a=this,b=a.chart,d=a.options,c=!a.finishedAnimating&&b.renderer.isSVG&&t(d.animation).duration,f=a.visible?"inherit":"hidden",k=d.zIndex,l=a.hasRendered,g=b.seriesGroup,p=b.inverted;m(this,"render");var n=a.plotGroup("group",
"series",f,k,g);a.markerGroup=a.plotGroup("markerGroup","markers",f,k,g);c&&a.animate&&a.animate(!0);n.inverted=a.isCartesian||a.invertable?p:!1;a.drawGraph&&(a.drawGraph(),a.applyZones());a.visible&&a.drawPoints();a.drawDataLabels&&a.drawDataLabels();a.redrawPoints&&a.redrawPoints();a.drawTracker&&!1!==a.options.enableMouseTracking&&a.drawTracker();a.invertGroups(p);!1===d.clip||a.sharedClipKey||l||n.clip(b.clipRect);c&&a.animate&&a.animate();l||(a.animationTimeout=M(function(){a.afterAnimate()},
c||0));a.isDirty=!1;a.hasRendered=!0;m(a,"afterRender")},redraw:function(){var a=this.chart,b=this.isDirty||this.isDirtyData,d=this.group,c=this.xAxis,f=this.yAxis;d&&(a.inverted&&d.attr({width:a.plotWidth,height:a.plotHeight}),d.animate({translateX:E(c&&c.left,a.plotLeft),translateY:E(f&&f.top,a.plotTop)}));this.translate();this.render();b&&delete this.kdTree},kdAxisArray:["clientX","plotY"],searchPoint:function(a,b){var d=this.xAxis,e=this.yAxis,c=this.chart.inverted;return this.searchKDTree({clientX:c?
d.len-a.chartY+d.pos:a.chartX-d.pos,plotY:c?e.len-a.chartX+e.pos:a.chartY-e.pos},b,a)},buildKDTree:function(a){function b(a,e,c){var f;if(f=a&&a.length){var h=d.kdAxisArray[e%c];a.sort(function(a,b){return a[h]-b[h]});f=Math.floor(f/2);return{point:a[f],left:b(a.slice(0,f),e+1,c),right:b(a.slice(f+1),e+1,c)}}}this.buildingKdTree=!0;var d=this,e=-1<d.options.findNearestPointBy.indexOf("y")?2:1;delete d.kdTree;M(function(){d.kdTree=b(d.getValidPoints(null,!d.directTouch),e,e);d.buildingKdTree=!1},d.options.kdNow||
a&&"touchstart"===a.type?0:1)},searchKDTree:function(a,b,d){function e(a,b,d,l){var m=b.point,g=c.kdAxisArray[d%l],p=m;var r=n(a[f])&&n(m[f])?Math.pow(a[f]-m[f],2):null;var w=n(a[h])&&n(m[h])?Math.pow(a[h]-m[h],2):null;w=(r||0)+(w||0);m.dist=n(w)?Math.sqrt(w):Number.MAX_VALUE;m.distX=n(r)?Math.sqrt(r):Number.MAX_VALUE;g=a[g]-m[g];w=0>g?"left":"right";r=0>g?"right":"left";b[w]&&(w=e(a,b[w],d+1,l),p=w[k]<p[k]?w:m);b[r]&&Math.sqrt(g*g)<p[k]&&(a=e(a,b[r],d+1,l),p=a[k]<p[k]?a:p);return p}var c=this,f=
this.kdAxisArray[0],h=this.kdAxisArray[1],k=b?"distX":"dist";b=-1<c.options.findNearestPointBy.indexOf("y")?2:1;this.kdTree||this.buildingKdTree||this.buildKDTree(d);if(this.kdTree)return e(a,this.kdTree,b,b)},pointPlacementToXValue:function(){var a=this.options,b=a.pointRange,d=this.xAxis;a=a.pointPlacement;"between"===a&&(a=d.reversed?-.5:.5);return f(a)?a*E(b,d.pointRange):0},isPointInside:function(a){return"undefined"!==typeof a.plotY&&"undefined"!==typeof a.plotX&&0<=a.plotY&&a.plotY<=this.yAxis.len&&
0<=a.plotX&&a.plotX<=this.xAxis.len}});""});O(q,"parts/Stacking.js",[q["parts/Axis.js"],q["parts/Chart.js"],q["parts/Globals.js"],q["parts/StackingAxis.js"],q["parts/Utilities.js"]],function(g,c,q,y,B){var H=B.correctFloat,D=B.defined,J=B.destroyObjectProperties,t=B.format,G=B.isNumber,L=B.pick;"";var v=q.Series,K=function(){function c(c,g,n,p,m){var d=c.chart.inverted;this.axis=c;this.isNegative=n;this.options=g=g||{};this.x=p;this.total=null;this.points={};this.hasValidPoints=!1;this.stack=m;this.rightCliff=
this.leftCliff=0;this.alignOptions={align:g.align||(d?n?"left":"right":"center"),verticalAlign:g.verticalAlign||(d?"middle":n?"bottom":"top"),y:g.y,x:g.x};this.textAlign=g.textAlign||(d?n?"right":"left":"center")}c.prototype.destroy=function(){J(this,this.axis)};c.prototype.render=function(c){var g=this.axis.chart,n=this.options,p=n.format;p=p?t(p,this,g):n.formatter.call(this);this.label?this.label.attr({text:p,visibility:"hidden"}):(this.label=g.renderer.label(p,null,null,n.shape,null,null,n.useHTML,
!1,"stack-labels"),p={r:n.borderRadius||0,text:p,rotation:n.rotation,padding:L(n.padding,5),visibility:"hidden"},g.styledMode||(p.fill=n.backgroundColor,p.stroke=n.borderColor,p["stroke-width"]=n.borderWidth,this.label.css(n.style)),this.label.attr(p),this.label.added||this.label.add(c));this.label.labelrank=g.plotHeight};c.prototype.setOffset=function(c,g,n,p,m){var d=this.axis,l=d.chart;p=d.translate(d.stacking.usePercentage?100:p?p:this.total,0,0,0,1);n=d.translate(n?n:0);n=D(p)&&Math.abs(p-n);
c=L(m,l.xAxis[0].translate(this.x))+c;d=D(p)&&this.getStackBox(l,this,c,p,g,n,d);g=this.label;n=this.isNegative;c="justify"===L(this.options.overflow,"justify");var k=this.textAlign;g&&d&&(m=g.getBBox(),p=g.padding,k="left"===k?l.inverted?-p:p:"right"===k?m.width:l.inverted&&"center"===k?m.width/2:l.inverted?n?m.width+p:-p:m.width/2,n=l.inverted?m.height/2:n?-p:m.height,this.alignOptions.x=L(this.options.x,0),this.alignOptions.y=L(this.options.y,0),d.x-=k,d.y-=n,g.align(this.alignOptions,null,d),
l.isInsidePlot(g.alignAttr.x+k-this.alignOptions.x,g.alignAttr.y+n-this.alignOptions.y)?g.show():(g.alignAttr.y=-9999,c=!1),c&&v.prototype.justifyDataLabel.call(this.axis,g,this.alignOptions,g.alignAttr,m,d),g.attr({x:g.alignAttr.x,y:g.alignAttr.y}),L(!c&&this.options.crop,!0)&&((l=G(g.x)&&G(g.y)&&l.isInsidePlot(g.x-p+g.width,g.y)&&l.isInsidePlot(g.x+p,g.y))||g.hide()))};c.prototype.getStackBox=function(c,g,n,p,m,d,l){var k=g.axis.reversed,f=c.inverted,a=l.height+l.pos-(f?c.plotLeft:c.plotTop);g=
g.isNegative&&!k||!g.isNegative&&k;return{x:f?g?p-l.right:p-d+l.pos-c.plotLeft:n+c.xAxis[0].transB-c.plotLeft,y:f?l.height-n-m:g?a-p-d:a-p,width:f?d:m,height:f?m:d}};return c}();c.prototype.getStacks=function(){var c=this,g=c.inverted;c.yAxis.forEach(function(c){c.stacking&&c.stacking.stacks&&c.hasVisibleSeries&&(c.stacking.oldStacks=c.stacking.stacks)});c.series.forEach(function(n){var r=n.xAxis&&n.xAxis.options||{};!n.options.stacking||!0!==n.visible&&!1!==c.options.chart.ignoreHiddenSeries||(n.stackKey=
[n.type,L(n.options.stack,""),g?r.top:r.left,g?r.height:r.width].join())})};y.compose(g);v.prototype.setGroupedPoints=function(){this.options.centerInCategory&&(this.is("column")||this.is("columnrange"))&&!this.options.stacking&&1<this.chart.series.length&&v.prototype.setStackedPoints.call(this,"group")};v.prototype.setStackedPoints=function(c){var g=c||this.options.stacking;if(g&&(!0===this.visible||!1===this.chart.options.chart.ignoreHiddenSeries)){var n=this.processedXData,q=this.processedYData,
p=[],m=q.length,d=this.options,l=d.threshold,k=L(d.startFromThreshold&&l,0);d=d.stack;c=c?this.type+","+g:this.stackKey;var f="-"+c,a=this.negStacks,A=this.yAxis,u=A.stacking.stacks,t=A.stacking.oldStacks,v,w;A.stacking.stacksTouched+=1;for(w=0;w<m;w++){var M=n[w];var F=q[w];var y=this.getStackIndicator(y,M,this.index);var e=y.key;var b=(v=a&&F<(k?0:l))?f:c;u[b]||(u[b]={});u[b][M]||(t[b]&&t[b][M]?(u[b][M]=t[b][M],u[b][M].total=null):u[b][M]=new K(A,A.options.stackLabels,v,M,d));b=u[b][M];null!==F?
(b.points[e]=b.points[this.index]=[L(b.cumulative,k)],D(b.cumulative)||(b.base=e),b.touched=A.stacking.stacksTouched,0<y.index&&!1===this.singleStacks&&(b.points[e][0]=b.points[this.index+","+M+",0"][0])):b.points[e]=b.points[this.index]=null;"percent"===g?(v=v?c:f,a&&u[v]&&u[v][M]?(v=u[v][M],b.total=v.total=Math.max(v.total,b.total)+Math.abs(F)||0):b.total=H(b.total+(Math.abs(F)||0))):"group"===g?null!==F&&(b.total=(b.total||0)+1):b.total=H(b.total+(F||0));b.cumulative="group"===g?(b.total||1)-1:
L(b.cumulative,k)+(F||0);null!==F&&(b.points[e].push(b.cumulative),p[w]=b.cumulative,b.hasValidPoints=!0)}"percent"===g&&(A.stacking.usePercentage=!0);"group"!==g&&(this.stackedYData=p);A.stacking.oldStacks={}}};v.prototype.modifyStacks=function(){var c=this,g=c.stackKey,q=c.yAxis.stacking.stacks,t=c.processedXData,p,m=c.options.stacking;c[m+"Stacker"]&&[g,"-"+g].forEach(function(d){for(var l=t.length,k,f;l--;)if(k=t[l],p=c.getStackIndicator(p,k,c.index,d),f=(k=q[d]&&q[d][k])&&k.points[p.key])c[m+
"Stacker"](f,k,l)})};v.prototype.percentStacker=function(c,g,q){g=g.total?100/g.total:0;c[0]=H(c[0]*g);c[1]=H(c[1]*g);this.stackedYData[q]=c[1]};v.prototype.getStackIndicator=function(c,g,q,t){!D(c)||c.x!==g||t&&c.key!==t?c={x:g,index:0,key:t}:c.index++;c.key=[q,g,c.index].join();return c};q.StackItem=K;return q.StackItem});O(q,"parts/Dynamics.js",[q["parts/Axis.js"],q["parts/Chart.js"],q["parts/Globals.js"],q["parts/Options.js"],q["parts/Point.js"],q["parts/Time.js"],q["parts/Utilities.js"]],function(g,
c,q,y,B,H,D){var J=y.time,t=D.addEvent,G=D.animate,L=D.createElement,v=D.css,K=D.defined,n=D.erase,r=D.error,C=D.extend,I=D.fireEvent,p=D.isArray,m=D.isNumber,d=D.isObject,l=D.isString,k=D.merge,f=D.objectEach,a=D.pick,A=D.relativeLength,u=D.setAnimation,E=D.splat;y=q.Series;var P=q.seriesTypes;q.cleanRecursively=function(a,c){var k={};f(a,function(f,e){if(d(a[e],!0)&&!a.nodeType&&c[e])f=q.cleanRecursively(a[e],c[e]),Object.keys(f).length&&(k[e]=f);else if(d(a[e])||a[e]!==c[e])k[e]=a[e]});return k};
C(c.prototype,{addSeries:function(d,c,f){var k,e=this;d&&(c=a(c,!0),I(e,"addSeries",{options:d},function(){k=e.initSeries(d);e.isDirtyLegend=!0;e.linkSeries();k.enabledDataSorting&&k.setData(d.data,!1);I(e,"afterAddSeries",{series:k});c&&e.redraw(f)}));return k},addAxis:function(a,d,c,f){return this.createAxis(d?"xAxis":"yAxis",{axis:a,redraw:c,animation:f})},addColorAxis:function(a,d,c){return this.createAxis("colorAxis",{axis:a,redraw:d,animation:c})},createAxis:function(d,c){var f=this.options,
l="colorAxis"===d,e=c.redraw,b=c.animation;c=k(c.axis,{index:this[d].length,isX:"xAxis"===d});var h=l?new q.ColorAxis(this,c):new g(this,c);f[d]=E(f[d]||{});f[d].push(c);l&&(this.isDirtyLegend=!0,this.axes.forEach(function(a){a.series=[]}),this.series.forEach(function(a){a.bindAxes();a.isDirtyData=!0}));a(e,!0)&&this.redraw(b);return h},showLoading:function(d){var c=this,f=c.options,k=c.loadingDiv,e=f.loading,b=function(){k&&v(k,{left:c.plotLeft+"px",top:c.plotTop+"px",width:c.plotWidth+"px",height:c.plotHeight+
"px"})};k||(c.loadingDiv=k=L("div",{className:"highcharts-loading highcharts-loading-hidden"},null,c.container),c.loadingSpan=L("span",{className:"highcharts-loading-inner"},null,k),t(c,"redraw",b));k.className="highcharts-loading";c.loadingSpan.innerHTML=a(d,f.lang.loading,"");c.styledMode||(v(k,C(e.style,{zIndex:10})),v(c.loadingSpan,e.labelStyle),c.loadingShown||(v(k,{opacity:0,display:""}),G(k,{opacity:e.style.opacity||.5},{duration:e.showDuration||0})));c.loadingShown=!0;b()},hideLoading:function(){var a=
this.options,d=this.loadingDiv;d&&(d.className="highcharts-loading highcharts-loading-hidden",this.styledMode||G(d,{opacity:0},{duration:a.loading.hideDuration||100,complete:function(){v(d,{display:"none"})}}));this.loadingShown=!1},propsRequireDirtyBox:"backgroundColor borderColor borderWidth borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "),propsRequireReflow:"margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft".split(" "),
propsRequireUpdateSeries:"chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions time tooltip".split(" "),collectionsWithUpdate:["xAxis","yAxis","zAxis","series"],update:function(d,c,g,p){var e=this,b={credits:"addCredits",title:"setTitle",subtitle:"setSubtitle",caption:"setCaption"},h,n,u,r=d.isResponsiveOptions,w=[];I(e,"update",{options:d});r||e.setResponsive(!1,!0);d=q.cleanRecursively(d,e.options);k(!0,e.userOptions,d);if(h=d.chart){k(!0,e.options.chart,h);"className"in
h&&e.setClassName(h.className);"reflow"in h&&e.setReflow(h.reflow);if("inverted"in h||"polar"in h||"type"in h){e.propFromSeries();var t=!0}"alignTicks"in h&&(t=!0);f(h,function(a,b){-1!==e.propsRequireUpdateSeries.indexOf("chart."+b)&&(n=!0);-1!==e.propsRequireDirtyBox.indexOf(b)&&(e.isDirtyBox=!0);-1!==e.propsRequireReflow.indexOf(b)&&(r?e.isDirtyBox=!0:u=!0)});!e.styledMode&&"style"in h&&e.renderer.setStyle(h.style)}!e.styledMode&&d.colors&&(this.options.colors=d.colors);d.plotOptions&&k(!0,this.options.plotOptions,
d.plotOptions);d.time&&this.time===J&&(this.time=new H(d.time));f(d,function(a,d){if(e[d]&&"function"===typeof e[d].update)e[d].update(a,!1);else if("function"===typeof e[b[d]])e[b[d]](a);"chart"!==d&&-1!==e.propsRequireUpdateSeries.indexOf(d)&&(n=!0)});this.collectionsWithUpdate.forEach(function(b){if(d[b]){if("series"===b){var c=[];e[b].forEach(function(b,d){b.options.isInternal||c.push(a(b.options.index,d))})}E(d[b]).forEach(function(a,d){var f=K(a.id),h;f&&(h=e.get(a.id));h||(h=e[b][c?c[d]:d])&&
f&&K(h.options.id)&&(h=void 0);h&&h.coll===b&&(h.update(a,!1),g&&(h.touched=!0));!h&&g&&e.collectionsWithInit[b]&&(e.collectionsWithInit[b][0].apply(e,[a].concat(e.collectionsWithInit[b][1]||[]).concat([!1])).touched=!0)});g&&e[b].forEach(function(a){a.touched||a.options.isInternal?delete a.touched:w.push(a)})}});w.forEach(function(a){a.remove&&a.remove(!1)});t&&e.axes.forEach(function(a){a.update({},!1)});n&&e.getSeriesOrderByLinks().forEach(function(a){a.chart&&a.update({},!1)},this);d.loading&&
k(!0,e.options.loading,d.loading);t=h&&h.width;h=h&&h.height;l(h)&&(h=A(h,t||e.chartWidth));u||m(t)&&t!==e.chartWidth||m(h)&&h!==e.chartHeight?e.setSize(t,h,p):a(c,!0)&&e.redraw(p);I(e,"afterUpdate",{options:d,redraw:c,animation:p})},setSubtitle:function(a,d){this.applyDescription("subtitle",a);this.layOutTitles(d)},setCaption:function(a,d){this.applyDescription("caption",a);this.layOutTitles(d)}});c.prototype.collectionsWithInit={xAxis:[c.prototype.addAxis,[!0]],yAxis:[c.prototype.addAxis,[!1]],
series:[c.prototype.addSeries]};C(B.prototype,{update:function(c,f,k,l){function e(){b.applyOptions(c);var e=g&&b.hasDummyGraphic;e=null===b.y?!e:e;g&&e&&(b.graphic=g.destroy(),delete b.hasDummyGraphic);d(c,!0)&&(g&&g.element&&c&&c.marker&&"undefined"!==typeof c.marker.symbol&&(b.graphic=g.destroy()),c&&c.dataLabels&&b.dataLabel&&(b.dataLabel=b.dataLabel.destroy()),b.connector&&(b.connector=b.connector.destroy()));m=b.index;h.updateParallelArrays(b,m);n.data[m]=d(n.data[m],!0)||d(c,!0)?b.options:
a(c,n.data[m]);h.isDirty=h.isDirtyData=!0;!h.fixedBox&&h.hasCartesianSeries&&(p.isDirtyBox=!0);"point"===n.legendType&&(p.isDirtyLegend=!0);f&&p.redraw(k)}var b=this,h=b.series,g=b.graphic,m,p=h.chart,n=h.options;f=a(f,!0);!1===l?e():b.firePointEvent("update",{options:c},e)},remove:function(a,d){this.series.removePoint(this.series.data.indexOf(this),a,d)}});C(y.prototype,{addPoint:function(d,c,f,k,e){var b=this.options,h=this.data,l=this.chart,g=this.xAxis;g=g&&g.hasNames&&g.names;var m=b.data,p=
this.xData,n;c=a(c,!0);var u={series:this};this.pointClass.prototype.applyOptions.apply(u,[d]);var r=u.x;var w=p.length;if(this.requireSorting&&r<p[w-1])for(n=!0;w&&p[w-1]>r;)w--;this.updateParallelArrays(u,"splice",w,0,0);this.updateParallelArrays(u,w);g&&u.name&&(g[r]=u.name);m.splice(w,0,d);n&&(this.data.splice(w,0,null),this.processData());"point"===b.legendType&&this.generatePoints();f&&(h[0]&&h[0].remove?h[0].remove(!1):(h.shift(),this.updateParallelArrays(u,"shift"),m.shift()));!1!==e&&I(this,
"addPoint",{point:u});this.isDirtyData=this.isDirty=!0;c&&l.redraw(k)},removePoint:function(d,c,f){var k=this,e=k.data,b=e[d],h=k.points,l=k.chart,g=function(){h&&h.length===e.length&&h.splice(d,1);e.splice(d,1);k.options.data.splice(d,1);k.updateParallelArrays(b||{series:k},"splice",d,1);b&&b.destroy();k.isDirty=!0;k.isDirtyData=!0;c&&l.redraw()};u(f,l);c=a(c,!0);b?b.firePointEvent("remove",null,g):g()},remove:function(d,c,f,k){function e(){b.destroy(k);b.remove=null;h.isDirtyLegend=h.isDirtyBox=
!0;h.linkSeries();a(d,!0)&&h.redraw(c)}var b=this,h=b.chart;!1!==f?I(b,"remove",null,e):e()},update:function(d,c){d=q.cleanRecursively(d,this.userOptions);I(this,"update",{options:d});var f=this,l=f.chart,e=f.userOptions,b=f.initialType||f.type,h=d.type||e.type||l.options.chart.type,g=!(this.hasDerivedData||d.dataGrouping||h&&h!==this.type||"undefined"!==typeof d.pointStart||d.pointInterval||d.pointIntervalUnit||d.keys),m=P[b].prototype,p,n=["eventOptions","navigatorSeries","baseSeries"],u=f.finishedAnimating&&
{animation:!1},w={};g&&(n.push("data","isDirtyData","points","processedXData","processedYData","xIncrement","cropped","_hasPointMarkers","_hasPointLabels","mapMap","mapData","minY","maxY","minX","maxX"),!1!==d.visible&&n.push("area","graph"),f.parallelArrays.forEach(function(a){n.push(a+"Data")}),d.data&&(d.dataSorting&&C(f.options.dataSorting,d.dataSorting),this.setData(d.data,!1)));d=k(e,u,{index:"undefined"===typeof e.index?f.index:e.index,pointStart:a(e.pointStart,f.xData[0])},!g&&{data:f.options.data},
d);g&&d.data&&(d.data=f.options.data);n=["group","markerGroup","dataLabelsGroup","transformGroup"].concat(n);n.forEach(function(a){n[a]=f[a];delete f[a]});f.remove(!1,null,!1,!0);for(p in m)f[p]=void 0;P[h||b]?C(f,P[h||b].prototype):r(17,!0,l,{missingModuleFor:h||b});n.forEach(function(a){f[a]=n[a]});f.init(l,d);if(g&&this.points){var A=f.options;!1===A.visible?(w.graphic=1,w.dataLabel=1):f._hasPointLabels||(d=A.marker,e=A.dataLabels,d&&(!1===d.enabled||"symbol"in d)&&(w.graphic=1),e&&!1===e.enabled&&
(w.dataLabel=1));this.points.forEach(function(a){a&&a.series&&(a.resolveColor(),Object.keys(w).length&&a.destroyElements(w),!1===A.showInLegend&&a.legendItem&&l.legend.destroyItem(a))},this)}f.initialType=b;l.linkSeries();I(this,"afterUpdate");a(c,!0)&&l.redraw(g?void 0:!1)},setName:function(a){this.name=this.options.name=this.userOptions.name=a;this.chart.isDirtyLegend=!0}});C(g.prototype,{update:function(d,c){var l=this.chart,g=d&&d.events||{};d=k(this.userOptions,d);l.options[this.coll].indexOf&&
(l.options[this.coll][l.options[this.coll].indexOf(this.userOptions)]=d);f(l.options[this.coll].events,function(a,b){"undefined"===typeof g[b]&&(g[b]=void 0)});this.destroy(!0);this.init(l,C(d,{events:g}));l.isDirtyBox=!0;a(c,!0)&&l.redraw()},remove:function(d){for(var c=this.chart,f=this.coll,k=this.series,e=k.length;e--;)k[e]&&k[e].remove(!1);n(c.axes,this);n(c[f],this);p(c.options[f])?c.options[f].splice(this.options.index,1):delete c.options[f];c[f].forEach(function(a,d){a.options.index=a.userOptions.index=
d});this.destroy();c.isDirtyBox=!0;a(d,!0)&&c.redraw()},setTitle:function(a,d){this.update({title:a},d)},setCategories:function(a,d){this.update({categories:a},d)}})});O(q,"parts/AreaSeries.js",[q["parts/Globals.js"],q["parts/Color.js"],q["mixins/legend-symbol.js"],q["parts/Utilities.js"]],function(g,c,q,y){var B=c.parse,H=y.objectEach,D=y.pick;c=y.seriesType;var J=g.Series;c("area","line",{softThreshold:!1,threshold:0},{singleStacks:!1,getStackPoints:function(c){var g=[],q=[],t=this.xAxis,y=this.yAxis,
n=y.stacking.stacks[this.stackKey],r={},C=this.index,I=y.series,p=I.length,m=D(y.options.reversedStacks,!0)?1:-1,d;c=c||this.points;if(this.options.stacking){for(d=0;d<c.length;d++)c[d].leftNull=c[d].rightNull=void 0,r[c[d].x]=c[d];H(n,function(d,c){null!==d.total&&q.push(c)});q.sort(function(d,c){return d-c});var l=I.map(function(d){return d.visible});q.forEach(function(c,f){var a=0,k,u;if(r[c]&&!r[c].isNull)g.push(r[c]),[-1,1].forEach(function(a){var g=1===a?"rightNull":"leftNull",w=0,A=n[q[f+a]];
if(A)for(d=C;0<=d&&d<p;)k=A.points[d],k||(d===C?r[c][g]=!0:l[d]&&(u=n[c].points[d])&&(w-=u[1]-u[0])),d+=m;r[c][1===a?"rightCliff":"leftCliff"]=w});else{for(d=C;0<=d&&d<p;){if(k=n[c].points[d]){a=k[1];break}d+=m}a=y.translate(a,0,1,0,1);g.push({isNull:!0,plotX:t.translate(c,0,0,0,1),x:c,plotY:a,yBottom:a})}})}return g},getGraphPath:function(c){var g=J.prototype.getGraphPath,q=this.options,t=q.stacking,y=this.yAxis,n,r=[],C=[],I=this.index,p=y.stacking.stacks[this.stackKey],m=q.threshold,d=Math.round(y.getThreshold(q.threshold));
q=D(q.connectNulls,"percent"===t);var l=function(a,k,l){var g=c[a];a=t&&p[g.x].points[I];var n=g[l+"Null"]||0;l=g[l+"Cliff"]||0;g=!0;if(l||n){var u=(n?a[0]:a[1])+l;var q=a[0]+l;g=!!n}else!t&&c[k]&&c[k].isNull&&(u=q=m);"undefined"!==typeof u&&(C.push({plotX:f,plotY:null===u?d:y.getThreshold(u),isNull:g,isCliff:!0}),r.push({plotX:f,plotY:null===q?d:y.getThreshold(q),doCurve:!1}))};c=c||this.points;t&&(c=this.getStackPoints(c));for(n=0;n<c.length;n++){t||(c[n].leftCliff=c[n].rightCliff=c[n].leftNull=
c[n].rightNull=void 0);var k=c[n].isNull;var f=D(c[n].rectPlotX,c[n].plotX);var a=D(c[n].yBottom,d);if(!k||q)q||l(n,n-1,"left"),k&&!t&&q||(C.push(c[n]),r.push({x:n,plotX:f,plotY:a})),q||l(n,n+1,"right")}n=g.call(this,C,!0,!0);r.reversed=!0;k=g.call(this,r,!0,!0);(a=k[0])&&"M"===a[0]&&(k[0]=["L",a[1],a[2]]);k=n.concat(k);g=g.call(this,C,!1,q);k.xMap=n.xMap;this.areaPath=k;return g},drawGraph:function(){this.areaPath=[];J.prototype.drawGraph.apply(this);var c=this,g=this.areaPath,q=this.options,v=[["area",
"highcharts-area",this.color,q.fillColor]];this.zones.forEach(function(g,n){v.push(["zone-area-"+n,"highcharts-area highcharts-zone-area-"+n+" "+g.className,g.color||c.color,g.fillColor||q.fillColor])});v.forEach(function(t){var n=t[0],r=c[n],v=r?"animate":"attr",y={};r?(r.endX=c.preventGraphAnimation?null:g.xMap,r.animate({d:g})):(y.zIndex=0,r=c[n]=c.chart.renderer.path(g).addClass(t[1]).add(c.group),r.isArea=!0);c.chart.styledMode||(y.fill=D(t[3],B(t[2]).setOpacity(D(q.fillOpacity,.75)).get()));
r[v](y);r.startX=g.xMap;r.shiftUnit=q.step?2:1})},drawLegendSymbol:q.drawRectangle});""});O(q,"parts/SplineSeries.js",[q["parts/Utilities.js"]],function(g){var c=g.pick;g=g.seriesType;g("spline","line",{},{getPointSpline:function(g,q,B){var y=q.plotX||0,D=q.plotY||0,J=g[B-1];B=g[B+1];if(J&&!J.isNull&&!1!==J.doCurve&&!q.isCliff&&B&&!B.isNull&&!1!==B.doCurve&&!q.isCliff){g=J.plotY||0;var t=B.plotX||0;B=B.plotY||0;var G=0;var L=(1.5*y+(J.plotX||0))/2.5;var v=(1.5*D+g)/2.5;t=(1.5*y+t)/2.5;var K=(1.5*
D+B)/2.5;t!==L&&(G=(K-v)*(t-y)/(t-L)+D-K);v+=G;K+=G;v>g&&v>D?(v=Math.max(g,D),K=2*D-v):v<g&&v<D&&(v=Math.min(g,D),K=2*D-v);K>B&&K>D?(K=Math.max(B,D),v=2*D-K):K<B&&K<D&&(K=Math.min(B,D),v=2*D-K);q.rightContX=t;q.rightContY=K}q=["C",c(J.rightContX,J.plotX,0),c(J.rightContY,J.plotY,0),c(L,y,0),c(v,D,0),y,D];J.rightContX=J.rightContY=void 0;return q}});""});O(q,"parts/AreaSplineSeries.js",[q["parts/Globals.js"],q["mixins/legend-symbol.js"],q["parts/Options.js"],q["parts/Utilities.js"]],function(g,c,q,
y){y=y.seriesType;g=g.seriesTypes.area.prototype;y("areaspline","spline",q.defaultOptions.plotOptions.area,{getStackPoints:g.getStackPoints,getGraphPath:g.getGraphPath,drawGraph:g.drawGraph,drawLegendSymbol:c.drawRectangle});""});O(q,"parts/ColumnSeries.js",[q["parts/Globals.js"],q["parts/Color.js"],q["mixins/legend-symbol.js"],q["parts/Utilities.js"]],function(g,c,q,y){"";var B=c.parse,H=y.animObject,D=y.clamp,J=y.defined,t=y.extend,G=y.isNumber,L=y.merge,v=y.pick;c=y.seriesType;var K=g.Series;c("column",
"line",{borderRadius:0,centerInCategory:!1,groupPadding:.2,marker:null,pointPadding:.1,minPointLength:0,cropThreshold:50,pointRange:null,states:{hover:{halo:!1,brightness:.1},select:{color:"#cccccc",borderColor:"#000000"}},dataLabels:{align:void 0,verticalAlign:void 0,y:void 0},softThreshold:!1,startFromThreshold:!0,stickyTracking:!1,tooltip:{distance:6},threshold:0,borderColor:"#ffffff"},{cropShoulder:0,directTouch:!0,trackerGroups:["group","dataLabelsGroup"],negStacks:!0,init:function(){K.prototype.init.apply(this,
arguments);var c=this,g=c.chart;g.hasRendered&&g.series.forEach(function(g){g.type===c.type&&(g.isDirty=!0)})},getColumnMetrics:function(){var c=this,g=c.options,q=c.xAxis,t=c.yAxis,p=q.options.reversedStacks;p=q.reversed&&!p||!q.reversed&&p;var m,d={},l=0;!1===g.grouping?l=1:c.chart.series.forEach(function(a){var f=a.yAxis,k=a.options;if(a.type===c.type&&(a.visible||!c.chart.options.chart.ignoreHiddenSeries)&&t.len===f.len&&t.pos===f.pos){if(k.stacking&&"group"!==k.stacking){m=a.stackKey;"undefined"===
typeof d[m]&&(d[m]=l++);var g=d[m]}else!1!==k.grouping&&(g=l++);a.columnIndex=g}});var k=Math.min(Math.abs(q.transA)*(q.ordinal&&q.ordinal.slope||g.pointRange||q.closestPointRange||q.tickInterval||1),q.len),f=k*g.groupPadding,a=(k-2*f)/(l||1);g=Math.min(g.maxPointWidth||q.len,v(g.pointWidth,a*(1-2*g.pointPadding)));c.columnMetrics={width:g,offset:(a-g)/2+(f+((c.columnIndex||0)+(p?1:0))*a-k/2)*(p?-1:1),paddedWidth:a,columnCount:l};return c.columnMetrics},crispCol:function(c,g,q,t){var p=this.chart,
m=this.borderWidth,d=-(m%2?.5:0);m=m%2?.5:1;p.inverted&&p.renderer.isVML&&(m+=1);this.options.crisp&&(q=Math.round(c+q)+d,c=Math.round(c)+d,q-=c);t=Math.round(g+t)+m;d=.5>=Math.abs(g)&&.5<t;g=Math.round(g)+m;t-=g;d&&t&&(--g,t+=1);return{x:c,y:g,width:q,height:t}},adjustForMissingColumns:function(c,q,t,v){var p=this,m=this.options.stacking;if(!t.isNull&&1<v.columnCount){var d=0,l=0;Highcharts.objectEach(this.yAxis.stacking&&this.yAxis.stacking.stacks,function(c){if("number"===typeof t.x&&(c=c[t.x.toString()])){var f=
c.points[p.index],a=c.total;m?(f&&(d=l),c.hasValidPoints&&l++):g.isArray(f)&&(d=f[1],l=a||0)}});c=(t.plotX||0)+((l-1)*v.paddedWidth+q)/2-q-d*v.paddedWidth}return c},translate:function(){var c=this,g=c.chart,q=c.options,t=c.dense=2>c.closestPointRange*c.xAxis.transA;t=c.borderWidth=v(q.borderWidth,t?0:1);var p=c.xAxis,m=c.yAxis,d=q.threshold,l=c.translatedThreshold=m.getThreshold(d),k=v(q.minPointLength,5),f=c.getColumnMetrics(),a=f.width,A=c.barW=Math.max(a,1+2*t),u=c.pointXOffset=f.offset,E=c.dataMin,
y=c.dataMax;g.inverted&&(l-=.5);q.pointPadding&&(A=Math.ceil(A));K.prototype.translate.apply(c);c.points.forEach(function(n){var r=v(n.yBottom,l),w=999+Math.abs(r),t=a,e=n.plotX||0;w=D(n.plotY,-w,m.len+w);var b=e+u,h=A,z=Math.min(w,r),x=Math.max(w,r)-z;if(k&&Math.abs(x)<k){x=k;var C=!m.reversed&&!n.negative||m.reversed&&n.negative;G(d)&&G(y)&&n.y===d&&y<=d&&(m.min||0)<d&&E!==y&&(C=!C);z=Math.abs(z-l)>k?r-k:l-(C?k:0)}J(n.options.pointWidth)&&(t=h=Math.ceil(n.options.pointWidth),b-=Math.round((t-a)/
2));q.centerInCategory&&(b=c.adjustForMissingColumns(b,t,n,f));n.barX=b;n.pointWidth=t;n.tooltipPos=g.inverted?[m.len+m.pos-g.plotLeft-w,p.len+p.pos-g.plotTop-(e||0)-u-h/2,x]:[b+h/2,w+m.pos-g.plotTop,x];n.shapeType=c.pointClass.prototype.shapeType||"rect";n.shapeArgs=c.crispCol.apply(c,n.isNull?[b,l,h,0]:[b,z,h,x])})},getSymbol:g.noop,drawLegendSymbol:q.drawRectangle,drawGraph:function(){this.group[this.dense?"addClass":"removeClass"]("highcharts-dense-data")},pointAttribs:function(c,g){var n=this.options,
q=this.pointAttrToOptions||{};var p=q.stroke||"borderColor";var m=q["stroke-width"]||"borderWidth",d=c&&c.color||this.color,l=c&&c[p]||n[p]||this.color||d,k=c&&c[m]||n[m]||this[m]||0;q=c&&c.options.dashStyle||n.dashStyle;var f=v(c&&c.opacity,n.opacity,1);if(c&&this.zones.length){var a=c.getZone();d=c.options.color||a&&(a.color||c.nonZonedColor)||this.color;a&&(l=a.borderColor||l,q=a.dashStyle||q,k=a.borderWidth||k)}g&&c&&(c=L(n.states[g],c.options.states&&c.options.states[g]||{}),g=c.brightness,d=
c.color||"undefined"!==typeof g&&B(d).brighten(c.brightness).get()||d,l=c[p]||l,k=c[m]||k,q=c.dashStyle||q,f=v(c.opacity,f));p={fill:d,stroke:l,"stroke-width":k,opacity:f};q&&(p.dashstyle=q);return p},drawPoints:function(){var c=this,g=this.chart,q=c.options,t=g.renderer,p=q.animationLimit||250,m;c.points.forEach(function(d){var l=d.graphic,k=!!l,f=l&&g.pointCount<p?"animate":"attr";if(G(d.plotY)&&null!==d.y){m=d.shapeArgs;l&&d.hasNewShapeType()&&(l=l.destroy());c.enabledDataSorting&&(d.startXPos=
c.xAxis.reversed?-(m?m.width:0):c.xAxis.width);l||(d.graphic=l=t[d.shapeType](m).add(d.group||c.group))&&c.enabledDataSorting&&g.hasRendered&&g.pointCount<p&&(l.attr({x:d.startXPos}),k=!0,f="animate");if(l&&k)l[f](L(m));if(q.borderRadius)l[f]({r:q.borderRadius});g.styledMode||l[f](c.pointAttribs(d,d.selected&&"select")).shadow(!1!==d.allowShadow&&q.shadow,null,q.stacking&&!q.borderRadius);l.addClass(d.getClassName(),!0)}else l&&(d.graphic=l.destroy())})},animate:function(c){var g=this,n=this.yAxis,
q=g.options,p=this.chart.inverted,m={},d=p?"translateX":"translateY";if(c)m.scaleY=.001,c=D(n.toPixels(q.threshold),n.pos,n.pos+n.len),p?m.translateX=c-n.len:m.translateY=c,g.clipBox&&g.setClip(),g.group.attr(m);else{var l=g.group.attr(d);g.group.animate({scaleY:1},t(H(g.options.animation),{step:function(c,f){g.group&&(m[d]=l+f.pos*(n.pos-l),g.group.attr(m))}}))}},remove:function(){var c=this,g=c.chart;g.hasRendered&&g.series.forEach(function(g){g.type===c.type&&(g.isDirty=!0)});K.prototype.remove.apply(c,
arguments)}});""});O(q,"parts/BarSeries.js",[q["parts/Utilities.js"]],function(g){g=g.seriesType;g("bar","column",null,{inverted:!0});""});O(q,"parts/ScatterSeries.js",[q["parts/Globals.js"],q["parts/Utilities.js"]],function(g,c){var q=c.addEvent;c=c.seriesType;var y=g.Series;c("scatter","line",{lineWidth:0,findNearestPointBy:"xy",jitter:{x:0,y:0},marker:{enabled:!0},tooltip:{headerFormat:'<span style="color:{point.color}">\u25cf</span> <span style="font-size: 10px"> {series.name}</span><br/>',pointFormat:"x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"}},
{sorted:!1,requireSorting:!1,noSharedTooltip:!0,trackerGroups:["group","markerGroup","dataLabelsGroup"],takeOrdinalPosition:!1,drawGraph:function(){this.options.lineWidth&&y.prototype.drawGraph.call(this)},applyJitter:function(){var c=this,g=this.options.jitter,q=this.points.length;g&&this.points.forEach(function(y,t){["x","y"].forEach(function(D,B){var v="plot"+D.toUpperCase();if(g[D]&&!y.isNull){var G=c[D+"Axis"];var n=g[D]*G.transA;if(G&&!G.isLog){var r=Math.max(0,y[v]-n);G=Math.min(G.len,y[v]+
n);B=1E4*Math.sin(t+B*q);y[v]=r+(G-r)*(B-Math.floor(B));"x"===D&&(y.clientX=y.plotX)}}})})}});q(y,"afterTranslate",function(){this.applyJitter&&this.applyJitter()});""});O(q,"mixins/centered-series.js",[q["parts/Globals.js"],q["parts/Utilities.js"]],function(g,c){var q=c.isNumber,y=c.pick,B=c.relativeLength,H=g.deg2rad;g.CenteredSeriesMixin={getCenter:function(){var c=this.options,q=this.chart,t=2*(c.slicedOffset||0),G=q.plotWidth-2*t,H=q.plotHeight-2*t,v=c.center,K=Math.min(G,H),n=c.size,r=c.innerSize||
0;"string"===typeof n&&(n=parseFloat(n));"string"===typeof r&&(r=parseFloat(r));c=[y(v[0],"50%"),y(v[1],"50%"),y(n&&0>n?void 0:c.size,"100%"),y(r&&0>r?void 0:c.innerSize||0,"0%")];!q.angular||this instanceof g.Series||(c[3]=0);for(v=0;4>v;++v)n=c[v],q=2>v||2===v&&/%$/.test(n),c[v]=B(n,[G,H,K,c[2]][v])+(q?t:0);c[3]>c[2]&&(c[3]=c[2]);return c},getStartAndEndRadians:function(c,g){c=q(c)?c:0;g=q(g)&&g>c&&360>g-c?g:c+360;return{start:H*(c+-90),end:H*(g+-90)}}}});O(q,"parts/PieSeries.js",[q["parts/Globals.js"],
q["mixins/legend-symbol.js"],q["parts/Point.js"],q["parts/Utilities.js"]],function(g,c,q,y){var B=y.addEvent,H=y.clamp,D=y.defined,J=y.fireEvent,t=y.isNumber,G=y.merge,L=y.pick,v=y.relativeLength,K=y.seriesType,n=y.setAnimation;y=g.CenteredSeriesMixin;var r=y.getStartAndEndRadians,C=g.noop,I=g.Series;K("pie","line",{center:[null,null],clip:!1,colorByPoint:!0,dataLabels:{allowOverlap:!0,connectorPadding:5,connectorShape:"fixedOffset",crookDistance:"70%",distance:30,enabled:!0,formatter:function(){return this.point.isNull?
void 0:this.point.name},softConnector:!0,x:0},fillColor:void 0,ignoreHiddenPoint:!0,inactiveOtherPoints:!0,legendType:"point",marker:null,size:null,showInLegend:!1,slicedOffset:10,stickyTracking:!1,tooltip:{followPointer:!0},borderColor:"#ffffff",borderWidth:1,lineWidth:void 0,states:{hover:{brightness:.1}}},{isCartesian:!1,requireSorting:!1,directTouch:!0,noSharedTooltip:!0,trackerGroups:["group","dataLabelsGroup"],axisTypes:[],pointAttribs:g.seriesTypes.column.prototype.pointAttribs,animate:function(c){var g=
this,d=g.points,l=g.startAngleRad;c||d.forEach(function(d){var c=d.graphic,a=d.shapeArgs;c&&a&&(c.attr({r:L(d.startR,g.center&&g.center[3]/2),start:l,end:l}),c.animate({r:a.r,start:a.start,end:a.end},g.options.animation))})},hasData:function(){return!!this.processedXData.length},updateTotals:function(){var c,g=0,d=this.points,l=d.length,k=this.options.ignoreHiddenPoint;for(c=0;c<l;c++){var f=d[c];g+=k&&!f.visible?0:f.isNull?0:f.y}this.total=g;for(c=0;c<l;c++)f=d[c],f.percentage=0<g&&(f.visible||!k)?
f.y/g*100:0,f.total=g},generatePoints:function(){I.prototype.generatePoints.call(this);this.updateTotals()},getX:function(c,g,d){var l=this.center,k=this.radii?this.radii[d.index]:l[2]/2;c=Math.asin(H((c-l[1])/(k+d.labelDistance),-1,1));return l[0]+(g?-1:1)*Math.cos(c)*(k+d.labelDistance)+(0<d.labelDistance?(g?-1:1)*this.options.dataLabels.padding:0)},translate:function(c){this.generatePoints();var g=0,d=this.options,l=d.slicedOffset,k=l+(d.borderWidth||0),f=r(d.startAngle,d.endAngle),a=this.startAngleRad=
f.start;f=(this.endAngleRad=f.end)-a;var p=this.points,n=d.dataLabels.distance;d=d.ignoreHiddenPoint;var q,t=p.length;c||(this.center=c=this.getCenter());for(q=0;q<t;q++){var w=p[q];var y=a+g*f;if(!d||w.visible)g+=w.percentage/100;var F=a+g*f;w.shapeType="arc";w.shapeArgs={x:c[0],y:c[1],r:c[2]/2,innerR:c[3]/2,start:Math.round(1E3*y)/1E3,end:Math.round(1E3*F)/1E3};w.labelDistance=L(w.options.dataLabels&&w.options.dataLabels.distance,n);w.labelDistance=v(w.labelDistance,w.shapeArgs.r);this.maxLabelDistance=
Math.max(this.maxLabelDistance||0,w.labelDistance);F=(F+y)/2;F>1.5*Math.PI?F-=2*Math.PI:F<-Math.PI/2&&(F+=2*Math.PI);w.slicedTranslation={translateX:Math.round(Math.cos(F)*l),translateY:Math.round(Math.sin(F)*l)};var C=Math.cos(F)*c[2]/2;var e=Math.sin(F)*c[2]/2;w.tooltipPos=[c[0]+.7*C,c[1]+.7*e];w.half=F<-Math.PI/2||F>Math.PI/2?1:0;w.angle=F;y=Math.min(k,w.labelDistance/5);w.labelPosition={natural:{x:c[0]+C+Math.cos(F)*w.labelDistance,y:c[1]+e+Math.sin(F)*w.labelDistance},"final":{},alignment:0>
w.labelDistance?"center":w.half?"right":"left",connectorPosition:{breakAt:{x:c[0]+C+Math.cos(F)*y,y:c[1]+e+Math.sin(F)*y},touchingSliceAt:{x:c[0]+C,y:c[1]+e}}}}J(this,"afterTranslate")},drawEmpty:function(){var c=this.startAngleRad,g=this.endAngleRad,d=this.options;if(0===this.total){var l=this.center[0];var k=this.center[1];this.graph||(this.graph=this.chart.renderer.arc(l,k,this.center[1]/2,0,c,g).addClass("highcharts-empty-series").add(this.group));this.graph.attr({d:Highcharts.SVGRenderer.prototype.symbols.arc(l,
k,this.center[2]/2,0,{start:c,end:g,innerR:this.center[3]/2})});this.chart.styledMode||this.graph.attr({"stroke-width":d.borderWidth,fill:d.fillColor||"none",stroke:d.color||"#cccccc"})}else this.graph&&(this.graph=this.graph.destroy())},redrawPoints:function(){var c=this,g=c.chart,d=g.renderer,l,k,f,a,n=c.options.shadow;this.drawEmpty();!n||c.shadowGroup||g.styledMode||(c.shadowGroup=d.g("shadow").attr({zIndex:-1}).add(c.group));c.points.forEach(function(m){var p={};k=m.graphic;if(!m.isNull&&k){a=
m.shapeArgs;l=m.getTranslate();if(!g.styledMode){var q=m.shadowGroup;n&&!q&&(q=m.shadowGroup=d.g("shadow").add(c.shadowGroup));q&&q.attr(l);f=c.pointAttribs(m,m.selected&&"select")}m.delayedRendering?(k.setRadialReference(c.center).attr(a).attr(l),g.styledMode||k.attr(f).attr({"stroke-linejoin":"round"}).shadow(n,q),m.delayedRendering=!1):(k.setRadialReference(c.center),g.styledMode||G(!0,p,f),G(!0,p,a,l),k.animate(p));k.attr({visibility:m.visible?"inherit":"hidden"});k.addClass(m.getClassName())}else k&&
(m.graphic=k.destroy())})},drawPoints:function(){var c=this.chart.renderer;this.points.forEach(function(g){g.graphic&&g.hasNewShapeType()&&(g.graphic=g.graphic.destroy());g.graphic||(g.graphic=c[g.shapeType](g.shapeArgs).add(g.series.group),g.delayedRendering=!0)})},searchPoint:C,sortByAngle:function(c,g){c.sort(function(c,l){return"undefined"!==typeof c.angle&&(l.angle-c.angle)*g})},drawLegendSymbol:c.drawRectangle,getCenter:y.getCenter,getSymbol:C,drawGraph:null},{init:function(){q.prototype.init.apply(this,
arguments);var c=this;c.name=L(c.name,"Slice");var g=function(d){c.slice("select"===d.type)};B(c,"select",g);B(c,"unselect",g);return c},isValid:function(){return t(this.y)&&0<=this.y},setVisible:function(c,g){var d=this,l=d.series,k=l.chart,f=l.options.ignoreHiddenPoint;g=L(g,f);c!==d.visible&&(d.visible=d.options.visible=c="undefined"===typeof c?!d.visible:c,l.options.data[l.data.indexOf(d)]=d.options,["graphic","dataLabel","connector","shadowGroup"].forEach(function(a){if(d[a])d[a][c?"show":"hide"](!0)}),
d.legendItem&&k.legend.colorizeItem(d,c),c||"hover"!==d.state||d.setState(""),f&&(l.isDirty=!0),g&&k.redraw())},slice:function(c,g,d){var l=this.series;n(d,l.chart);L(g,!0);this.sliced=this.options.sliced=D(c)?c:!this.sliced;l.options.data[l.data.indexOf(this)]=this.options;this.graphic&&this.graphic.animate(this.getTranslate());this.shadowGroup&&this.shadowGroup.animate(this.getTranslate())},getTranslate:function(){return this.sliced?this.slicedTranslation:{translateX:0,translateY:0}},haloPath:function(c){var g=
this.shapeArgs;return this.sliced||!this.visible?[]:this.series.chart.renderer.symbols.arc(g.x,g.y,g.r+c,g.r+c,{innerR:g.r-1,start:g.start,end:g.end})},connectorShapes:{fixedOffset:function(c,g,d){var l=g.breakAt;g=g.touchingSliceAt;return[["M",c.x,c.y],d.softConnector?["C",c.x+("left"===c.alignment?-5:5),c.y,2*l.x-g.x,2*l.y-g.y,l.x,l.y]:["L",l.x,l.y],["L",g.x,g.y]]},straight:function(c,g){g=g.touchingSliceAt;return[["M",c.x,c.y],["L",g.x,g.y]]},crookedLine:function(c,g,d){g=g.touchingSliceAt;var l=
this.series,k=l.center[0],f=l.chart.plotWidth,a=l.chart.plotLeft;l=c.alignment;var m=this.shapeArgs.r;d=v(d.crookDistance,1);f="left"===l?k+m+(f+a-k-m)*(1-d):a+(k-m)*d;d=["L",f,c.y];k=!0;if("left"===l?f>c.x||f<g.x:f<c.x||f>g.x)k=!1;c=[["M",c.x,c.y]];k&&c.push(d);c.push(["L",g.x,g.y]);return c}},getConnectorPath:function(){var c=this.labelPosition,g=this.series.options.dataLabels,d=g.connectorShape,l=this.connectorShapes;l[d]&&(d=l[d]);return d.call(this,{x:c.final.x,y:c.final.y,alignment:c.alignment},
c.connectorPosition,g)}});""});O(q,"parts/DataLabels.js",[q["parts/Globals.js"],q["parts/Utilities.js"]],function(g,c){var q=g.noop,y=g.seriesTypes,B=c.animObject,H=c.arrayMax,D=c.clamp,J=c.defined,t=c.extend,G=c.fireEvent,L=c.format,v=c.isArray,K=c.merge,n=c.objectEach,r=c.pick,C=c.relativeLength,I=c.splat,p=c.stableSort,m=g.Series;g.distribute=function(c,l,k){function d(a,c){return a.target-c.target}var a,m=!0,n=c,q=[];var t=0;var w=n.reducedLen||l;for(a=c.length;a--;)t+=c[a].size;if(t>w){p(c,function(a,
c){return(c.rank||0)-(a.rank||0)});for(t=a=0;t<=w;)t+=c[a].size,a++;q=c.splice(a-1,c.length)}p(c,d);for(c=c.map(function(a){return{size:a.size,targets:[a.target],align:r(a.align,.5)}});m;){for(a=c.length;a--;)m=c[a],t=(Math.min.apply(0,m.targets)+Math.max.apply(0,m.targets))/2,m.pos=D(t-m.size*m.align,0,l-m.size);a=c.length;for(m=!1;a--;)0<a&&c[a-1].pos+c[a-1].size>c[a].pos&&(c[a-1].size+=c[a].size,c[a-1].targets=c[a-1].targets.concat(c[a].targets),c[a-1].align=.5,c[a-1].pos+c[a-1].size>l&&(c[a-1].pos=
l-c[a-1].size),c.splice(a,1),m=!0)}n.push.apply(n,q);a=0;c.some(function(c){var d=0;if(c.targets.some(function(){n[a].pos=c.pos+d;if("undefined"!==typeof k&&Math.abs(n[a].pos-n[a].target)>k)return n.slice(0,a+1).forEach(function(a){delete a.pos}),n.reducedLen=(n.reducedLen||l)-.1*l,n.reducedLen>.1*l&&g.distribute(n,l,k),!0;d+=n[a].size;a++}))return!0});p(n,d)};m.prototype.drawDataLabels=function(){function c(a,c){var b=c.filter;return b?(c=b.operator,a=a[b.property],b=b.value,">"===c&&a>b||"<"===
c&&a<b||">="===c&&a>=b||"<="===c&&a<=b||"=="===c&&a==b||"==="===c&&a===b?!0:!1):!0}function g(a,c){var b=[],d;if(v(a)&&!v(c))b=a.map(function(a){return K(a,c)});else if(v(c)&&!v(a))b=c.map(function(b){return K(a,b)});else if(v(a)||v(c))for(d=Math.max(a.length,c.length);d--;)b[d]=K(a[d],c[d]);else b=K(a,c);return b}var k=this,f=k.chart,a=k.options,m=a.dataLabels,p=k.points,q,t=k.hasRendered||0,w=B(a.animation).duration,y=Math.min(w,200),F=!f.renderer.forExport&&r(m.defer,0<y),C=f.renderer;m=g(g(f.options.plotOptions&&
f.options.plotOptions.series&&f.options.plotOptions.series.dataLabels,f.options.plotOptions&&f.options.plotOptions[k.type]&&f.options.plotOptions[k.type].dataLabels),m);G(this,"drawDataLabels");if(v(m)||m.enabled||k._hasPointLabels){var e=k.plotGroup("dataLabelsGroup","data-labels",F&&!t?"hidden":"inherit",m.zIndex||6);F&&(e.attr({opacity:+t}),t||setTimeout(function(){var b=k.dataLabelsGroup;b&&(k.visible&&e.show(!0),b[a.animation?"animate":"attr"]({opacity:1},{duration:y}))},w-y));p.forEach(function(b){q=
I(g(m,b.dlOptions||b.options&&b.options.dataLabels));q.forEach(function(d,g){var h=d.enabled&&(!b.isNull||b.dataLabelOnNull)&&c(b,d),l=b.dataLabels?b.dataLabels[g]:b.dataLabel,m=b.connectors?b.connectors[g]:b.connector,p=r(d.distance,b.labelDistance),q=!l;if(h){var u=b.getLabelConfig();var w=r(d[b.formatPrefix+"Format"],d.format);u=J(w)?L(w,u,f):(d[b.formatPrefix+"Formatter"]||d.formatter).call(u,d);w=d.style;var t=d.rotation;f.styledMode||(w.color=r(d.color,w.color,k.color,"#000000"),"contrast"===
w.color?(b.contrastColor=C.getContrast(b.color||k.color),w.color=!J(p)&&d.inside||0>p||a.stacking?b.contrastColor:"#000000"):delete b.contrastColor,a.cursor&&(w.cursor=a.cursor));var A={r:d.borderRadius||0,rotation:t,padding:d.padding,zIndex:1};f.styledMode||(A.fill=d.backgroundColor,A.stroke=d.borderColor,A["stroke-width"]=d.borderWidth);n(A,function(a,b){"undefined"===typeof a&&delete A[b]})}!l||h&&J(u)?h&&J(u)&&(l?A.text=u:(b.dataLabels=b.dataLabels||[],l=b.dataLabels[g]=t?C.text(u,0,-9999,d.useHTML).addClass("highcharts-data-label"):
C.label(u,0,-9999,d.shape,null,null,d.useHTML,null,"data-label"),g||(b.dataLabel=l),l.addClass(" highcharts-data-label-color-"+b.colorIndex+" "+(d.className||"")+(d.useHTML?" highcharts-tracker":""))),l.options=d,l.attr(A),f.styledMode||l.css(w).shadow(d.shadow),l.added||l.add(e),d.textPath&&!d.useHTML&&(l.setTextPath(b.getDataLabelPath&&b.getDataLabelPath(l)||b.graphic,d.textPath),b.dataLabelPath&&!d.textPath.enabled&&(b.dataLabelPath=b.dataLabelPath.destroy())),k.alignDataLabel(b,l,d,null,q)):(b.dataLabel=
b.dataLabel&&b.dataLabel.destroy(),b.dataLabels&&(1===b.dataLabels.length?delete b.dataLabels:delete b.dataLabels[g]),g||delete b.dataLabel,m&&(b.connector=b.connector.destroy(),b.connectors&&(1===b.connectors.length?delete b.connectors:delete b.connectors[g])))})})}G(this,"afterDrawDataLabels")};m.prototype.alignDataLabel=function(c,g,k,f,a){var d=this,l=this.chart,m=this.isCartesian&&l.inverted,n=this.enabledDataSorting,p=r(c.dlBox&&c.dlBox.centerX,c.plotX,-9999),q=r(c.plotY,-9999),v=g.getBBox(),
y=k.rotation,e=k.align,b=l.isInsidePlot(p,Math.round(q),m),h="justify"===r(k.overflow,n?"none":"justify"),z=this.visible&&!1!==c.visible&&(c.series.forceDL||n&&!h||b||k.inside&&f&&l.isInsidePlot(p,m?f.x+1:f.y+f.height-1,m));var x=function(e){n&&d.xAxis&&!h&&d.setDataLabelStartPos(c,g,a,b,e)};if(z){var C=l.renderer.fontMetrics(l.styledMode?void 0:k.style.fontSize,g).b;f=t({x:m?this.yAxis.len-q:p,y:Math.round(m?this.xAxis.len-p:q),width:0,height:0},f);t(k,{width:v.width,height:v.height});y?(h=!1,p=
l.renderer.rotCorr(C,y),p={x:f.x+(k.x||0)+f.width/2+p.x,y:f.y+(k.y||0)+{top:0,middle:.5,bottom:1}[k.verticalAlign]*f.height},x(p),g[a?"attr":"animate"](p).attr({align:e}),x=(y+720)%360,x=180<x&&360>x,"left"===e?p.y-=x?v.height:0:"center"===e?(p.x-=v.width/2,p.y-=v.height/2):"right"===e&&(p.x-=v.width,p.y-=x?0:v.height),g.placed=!0,g.alignAttr=p):(x(f),g.align(k,null,f),p=g.alignAttr);h&&0<=f.height?this.justifyDataLabel(g,k,p,v,f,a):r(k.crop,!0)&&(z=l.isInsidePlot(p.x,p.y)&&l.isInsidePlot(p.x+v.width,
p.y+v.height));if(k.shape&&!y)g[a?"attr":"animate"]({anchorX:m?l.plotWidth-c.plotY:c.plotX,anchorY:m?l.plotHeight-c.plotX:c.plotY})}a&&n&&(g.placed=!1);z||n&&!h||(g.hide(!0),g.placed=!1)};m.prototype.setDataLabelStartPos=function(c,g,k,f,a){var d=this.chart,l=d.inverted,m=this.xAxis,n=m.reversed,p=l?g.height/2:g.width/2;c=(c=c.pointWidth)?c/2:0;m=l?a.x:n?-p-c:m.width-p+c;a=l?n?this.yAxis.height-p+c:-p-c:a.y;g.startXPos=m;g.startYPos=a;f?"hidden"===g.visibility&&(g.show(),g.attr({opacity:0}).animate({opacity:1})):
g.attr({opacity:1}).animate({opacity:0},void 0,g.hide);d.hasRendered&&(k&&g.attr({x:g.startXPos,y:g.startYPos}),g.placed=!0)};m.prototype.justifyDataLabel=function(c,g,k,f,a,m){var d=this.chart,l=g.align,n=g.verticalAlign,p=c.box?0:c.padding||0,q=g.x;q=void 0===q?0:q;var r=g.y;var t=void 0===r?0:r;r=k.x+p;if(0>r){"right"===l&&0<=q?(g.align="left",g.inside=!0):q-=r;var e=!0}r=k.x+f.width-p;r>d.plotWidth&&("left"===l&&0>=q?(g.align="right",g.inside=!0):q+=d.plotWidth-r,e=!0);r=k.y+p;0>r&&("bottom"===
n&&0<=t?(g.verticalAlign="top",g.inside=!0):t-=r,e=!0);r=k.y+f.height-p;r>d.plotHeight&&("top"===n&&0>=t?(g.verticalAlign="bottom",g.inside=!0):t+=d.plotHeight-r,e=!0);e&&(g.x=q,g.y=t,c.placed=!m,c.align(g,void 0,a));return e};y.pie&&(y.pie.prototype.dataLabelPositioners={radialDistributionY:function(c){return c.top+c.distributeBox.pos},radialDistributionX:function(c,g,k,f){return c.getX(k<g.top+2||k>g.bottom-2?f:k,g.half,g)},justify:function(c,g,k){return k[0]+(c.half?-1:1)*(g+c.labelDistance)},
alignToPlotEdges:function(c,g,k,f){c=c.getBBox().width;return g?c+f:k-c-f},alignToConnectors:function(c,g,k,f){var a=0,d;c.forEach(function(c){d=c.dataLabel.getBBox().width;d>a&&(a=d)});return g?a+f:k-a-f}},y.pie.prototype.drawDataLabels=function(){var c=this,l=c.data,k,f=c.chart,a=c.options.dataLabels||{},n=a.connectorPadding,p,q=f.plotWidth,t=f.plotHeight,w=f.plotLeft,v=Math.round(f.chartWidth/3),y,C=c.center,e=C[2]/2,b=C[1],h,z,x,B,D=[[],[]],G,I,L,O,U=[0,0,0,0],R=c.dataLabelPositioners,T;c.visible&&
(a.enabled||c._hasPointLabels)&&(l.forEach(function(a){a.dataLabel&&a.visible&&a.dataLabel.shortened&&(a.dataLabel.attr({width:"auto"}).css({width:"auto",textOverflow:"clip"}),a.dataLabel.shortened=!1)}),m.prototype.drawDataLabels.apply(c),l.forEach(function(b){b.dataLabel&&(b.visible?(D[b.half].push(b),b.dataLabel._pos=null,!J(a.style.width)&&!J(b.options.dataLabels&&b.options.dataLabels.style&&b.options.dataLabels.style.width)&&b.dataLabel.getBBox().width>v&&(b.dataLabel.css({width:Math.round(.7*
v)+"px"}),b.dataLabel.shortened=!0)):(b.dataLabel=b.dataLabel.destroy(),b.dataLabels&&1===b.dataLabels.length&&delete b.dataLabels))}),D.forEach(function(d,l){var m=d.length,p=[],u;if(m){c.sortByAngle(d,l-.5);if(0<c.maxLabelDistance){var v=Math.max(0,b-e-c.maxLabelDistance);var A=Math.min(b+e+c.maxLabelDistance,f.plotHeight);d.forEach(function(a){0<a.labelDistance&&a.dataLabel&&(a.top=Math.max(0,b-e-a.labelDistance),a.bottom=Math.min(b+e+a.labelDistance,f.plotHeight),u=a.dataLabel.getBBox().height||
21,a.distributeBox={target:a.labelPosition.natural.y-a.top+u/2,size:u,rank:a.y},p.push(a.distributeBox))});v=A+u-v;g.distribute(p,v,v/5)}for(O=0;O<m;O++){k=d[O];x=k.labelPosition;h=k.dataLabel;L=!1===k.visible?"hidden":"inherit";I=v=x.natural.y;p&&J(k.distributeBox)&&("undefined"===typeof k.distributeBox.pos?L="hidden":(B=k.distributeBox.size,I=R.radialDistributionY(k)));delete k.positionIndex;if(a.justify)G=R.justify(k,e,C);else switch(a.alignTo){case "connectors":G=R.alignToConnectors(d,l,q,w);
break;case "plotEdges":G=R.alignToPlotEdges(h,l,q,w);break;default:G=R.radialDistributionX(c,k,I,v)}h._attr={visibility:L,align:x.alignment};T=k.options.dataLabels||{};h._pos={x:G+r(T.x,a.x)+({left:n,right:-n}[x.alignment]||0),y:I+r(T.y,a.y)-10};x.final.x=G;x.final.y=I;r(a.crop,!0)&&(z=h.getBBox().width,v=null,G-z<n&&1===l?(v=Math.round(z-G+n),U[3]=Math.max(v,U[3])):G+z>q-n&&0===l&&(v=Math.round(G+z-q+n),U[1]=Math.max(v,U[1])),0>I-B/2?U[0]=Math.max(Math.round(-I+B/2),U[0]):I+B/2>t&&(U[2]=Math.max(Math.round(I+
B/2-t),U[2])),h.sideOverflow=v)}}}),0===H(U)||this.verifyDataLabelOverflow(U))&&(this.placeDataLabels(),this.points.forEach(function(b){T=K(a,b.options.dataLabels);if(p=r(T.connectorWidth,1)){var d;y=b.connector;if((h=b.dataLabel)&&h._pos&&b.visible&&0<b.labelDistance){L=h._attr.visibility;if(d=!y)b.connector=y=f.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-"+b.colorIndex+(b.className?" "+b.className:"")).add(c.dataLabelsGroup),f.styledMode||y.attr({"stroke-width":p,
stroke:T.connectorColor||b.color||"#666666"});y[d?"attr":"animate"]({d:b.getConnectorPath()});y.attr("visibility",L)}else y&&(b.connector=y.destroy())}}))},y.pie.prototype.placeDataLabels=function(){this.points.forEach(function(c){var d=c.dataLabel,g;d&&c.visible&&((g=d._pos)?(d.sideOverflow&&(d._attr.width=Math.max(d.getBBox().width-d.sideOverflow,0),d.css({width:d._attr.width+"px",textOverflow:(this.options.dataLabels.style||{}).textOverflow||"ellipsis"}),d.shortened=!0),d.attr(d._attr),d[d.moved?
"animate":"attr"](g),d.moved=!0):d&&d.attr({y:-9999}));delete c.distributeBox},this)},y.pie.prototype.alignDataLabel=q,y.pie.prototype.verifyDataLabelOverflow=function(c){var d=this.center,g=this.options,f=g.center,a=g.minSize||80,m=null!==g.size;if(!m){if(null!==f[0])var n=Math.max(d[2]-Math.max(c[1],c[3]),a);else n=Math.max(d[2]-c[1]-c[3],a),d[0]+=(c[3]-c[1])/2;null!==f[1]?n=D(n,a,d[2]-Math.max(c[0],c[2])):(n=D(n,a,d[2]-c[0]-c[2]),d[1]+=(c[0]-c[2])/2);n<d[2]?(d[2]=n,d[3]=Math.min(C(g.innerSize||
0,n),n),this.translate(d),this.drawDataLabels&&this.drawDataLabels()):m=!0}return m});y.column&&(y.column.prototype.alignDataLabel=function(c,g,k,f,a){var d=this.chart.inverted,l=c.series,n=c.dlBox||c.shapeArgs,p=r(c.below,c.plotY>r(this.translatedThreshold,l.yAxis.len)),q=r(k.inside,!!this.options.stacking);n&&(f=K(n),0>f.y&&(f.height+=f.y,f.y=0),n=f.y+f.height-l.yAxis.len,0<n&&n<f.height&&(f.height-=n),d&&(f={x:l.yAxis.len-f.y-f.height,y:l.xAxis.len-f.x-f.width,width:f.height,height:f.width}),q||
(d?(f.x+=p?0:f.width,f.width=0):(f.y+=p?f.height:0,f.height=0)));k.align=r(k.align,!d||q?"center":p?"right":"left");k.verticalAlign=r(k.verticalAlign,d||q?"middle":p?"top":"bottom");m.prototype.alignDataLabel.call(this,c,g,k,f,a);k.inside&&c.contrastColor&&g.css({color:c.contrastColor})})});O(q,"modules/overlapping-datalabels.src.js",[q["parts/Chart.js"],q["parts/Utilities.js"]],function(g,c){var q=c.addEvent,y=c.fireEvent,B=c.isArray,H=c.isNumber,D=c.objectEach,J=c.pick;q(g,"render",function(){var c=
[];(this.labelCollectors||[]).forEach(function(g){c=c.concat(g())});(this.yAxis||[]).forEach(function(g){g.stacking&&g.options.stackLabels&&!g.options.stackLabels.allowOverlap&&D(g.stacking.stacks,function(g){D(g,function(g){c.push(g.label)})})});(this.series||[]).forEach(function(g){var q=g.options.dataLabels;g.visible&&(!1!==q.enabled||g._hasPointLabels)&&(g.nodes||g.points).forEach(function(g){g.visible&&(B(g.dataLabels)?g.dataLabels:g.dataLabel?[g.dataLabel]:[]).forEach(function(q){var n=q.options;
q.labelrank=J(n.labelrank,g.labelrank,g.shapeArgs&&g.shapeArgs.height);n.allowOverlap||c.push(q)})})});this.hideOverlappingLabels(c)});g.prototype.hideOverlappingLabels=function(c){var g=this,q=c.length,t=g.renderer,B,n,r,C=!1;var D=function(c){var d,g=c.box?0:c.padding||0,f=d=0,a;if(c&&(!c.alignAttr||c.placed)){var m=c.alignAttr||{x:c.attr("x"),y:c.attr("y")};var n=c.parentGroup;c.width||(d=c.getBBox(),c.width=d.width,c.height=d.height,d=t.fontMetrics(null,c.element).h);var p=c.width-2*g;(a={left:"0",
center:"0.5",right:"1"}[c.alignValue])?f=+a*p:H(c.x)&&Math.round(c.x)!==c.translateX&&(f=c.x-c.translateX);return{x:m.x+(n.translateX||0)+g-f,y:m.y+(n.translateY||0)+g-d,width:c.width-2*g,height:c.height-2*g}}};for(n=0;n<q;n++)if(B=c[n])B.oldOpacity=B.opacity,B.newOpacity=1,B.absoluteBox=D(B);c.sort(function(c,g){return(g.labelrank||0)-(c.labelrank||0)});for(n=0;n<q;n++){var p=(D=c[n])&&D.absoluteBox;for(B=n+1;B<q;++B){var m=(r=c[B])&&r.absoluteBox;!p||!m||D===r||0===D.newOpacity||0===r.newOpacity||
m.x>p.x+p.width||m.x+m.width<p.x||m.y>p.y+p.height||m.y+m.height<p.y||((D.labelrank<r.labelrank?D:r).newOpacity=0)}}c.forEach(function(c){if(c){var d=c.newOpacity;c.oldOpacity!==d&&(c.alignAttr&&c.placed?(c[d?"removeClass":"addClass"]("highcharts-data-label-hidden"),C=!0,c.alignAttr.opacity=d,c[c.isOld?"animate":"attr"](c.alignAttr,null,function(){g.styledMode||c.css({pointerEvents:d?"auto":"none"});c.visibility=d?"inherit":"hidden";c.placed=!!d}),y(g,"afterHideOverlappingLabel")):c.attr({opacity:d}));
c.isOld=!0}});C&&y(g,"afterHideAllOverlappingLabels")}});O(q,"parts/Interaction.js",[q["parts/Chart.js"],q["parts/Globals.js"],q["parts/Legend.js"],q["parts/Options.js"],q["parts/Point.js"],q["parts/Utilities.js"]],function(g,c,q,y,B,H){var D=y.defaultOptions,J=H.addEvent,t=H.createElement,G=H.css,L=H.defined,v=H.extend,K=H.fireEvent,n=H.isArray,r=H.isFunction,C=H.isNumber,I=H.isObject,p=H.merge,m=H.objectEach,d=H.pick,l=c.hasTouch;y=c.Series;H=c.seriesTypes;var k=c.svg;var f=c.TrackerMixin={drawTrackerPoint:function(){var a=
this,c=a.chart,d=c.pointer,f=function(a){var c=d.getPointFromEvent(a);"undefined"!==typeof c&&(d.isDirectTouch=!0,c.onMouseOver(a))},g;a.points.forEach(function(a){g=n(a.dataLabels)?a.dataLabels:a.dataLabel?[a.dataLabel]:[];a.graphic&&(a.graphic.element.point=a);g.forEach(function(c){c.div?c.div.point=a:c.element.point=a})});a._hasTracking||(a.trackerGroups.forEach(function(g){if(a[g]){a[g].addClass("highcharts-tracker").on("mouseover",f).on("mouseout",function(a){d.onTrackerMouseOut(a)});if(l)a[g].on("touchstart",
f);!c.styledMode&&a.options.cursor&&a[g].css(G).css({cursor:a.options.cursor})}}),a._hasTracking=!0);K(this,"afterDrawTracker")},drawTrackerGraph:function(){var a=this,c=a.options,d=c.trackByArea,f=[].concat(d?a.areaPath:a.graphPath),g=a.chart,m=g.pointer,n=g.renderer,p=g.options.tooltip.snap,q=a.tracker,e=function(b){if(g.hoverSeries!==a)a.onMouseOver()},b="rgba(192,192,192,"+(k?.0001:.002)+")";q?q.attr({d:f}):a.graph&&(a.tracker=n.path(f).attr({visibility:a.visible?"visible":"hidden",zIndex:2}).addClass(d?
"highcharts-tracker-area":"highcharts-tracker-line").add(a.group),g.styledMode||a.tracker.attr({"stroke-linecap":"round","stroke-linejoin":"round",stroke:b,fill:d?b:"none","stroke-width":a.graph.strokeWidth()+(d?0:2*p)}),[a.tracker,a.markerGroup].forEach(function(a){a.addClass("highcharts-tracker").on("mouseover",e).on("mouseout",function(a){m.onTrackerMouseOut(a)});c.cursor&&!g.styledMode&&a.css({cursor:c.cursor});if(l)a.on("touchstart",e)}));K(this,"afterDrawTracker")}};H.column&&(H.column.prototype.drawTracker=
f.drawTrackerPoint);H.pie&&(H.pie.prototype.drawTracker=f.drawTrackerPoint);H.scatter&&(H.scatter.prototype.drawTracker=f.drawTrackerPoint);v(q.prototype,{setItemEvents:function(a,c,d){var f=this,g=f.chart.renderer.boxWrapper,k=a instanceof B,l="highcharts-legend-"+(k?"point":"series")+"-active",m=f.chart.styledMode;(d?[c,a.legendSymbol]:[a.legendGroup]).forEach(function(d){if(d)d.on("mouseover",function(){a.visible&&f.allItems.forEach(function(c){a!==c&&c.setState("inactive",!k)});a.setState("hover");
a.visible&&g.addClass(l);m||c.css(f.options.itemHoverStyle)}).on("mouseout",function(){f.chart.styledMode||c.css(p(a.visible?f.itemStyle:f.itemHiddenStyle));f.allItems.forEach(function(c){a!==c&&c.setState("",!k)});g.removeClass(l);a.setState()}).on("click",function(c){var b=function(){a.setVisible&&a.setVisible();f.allItems.forEach(function(b){a!==b&&b.setState(a.visible?"inactive":"",!k)})};g.removeClass(l);c={browserEvent:c};a.firePointEvent?a.firePointEvent("legendItemClick",c,b):K(a,"legendItemClick",
c,b)})})},createCheckboxForItem:function(a){a.checkbox=t("input",{type:"checkbox",className:"highcharts-legend-checkbox",checked:a.selected,defaultChecked:a.selected},this.options.itemCheckboxStyle,this.chart.container);J(a.checkbox,"click",function(c){K(a.series||a,"checkboxClick",{checked:c.target.checked,item:a},function(){a.select()})})}});v(g.prototype,{showResetZoom:function(){function a(){c.zoomOut()}var c=this,d=D.lang,f=c.options.chart.resetZoomButton,g=f.theme,k=g.states,l="chart"===f.relativeTo||
"spaceBox"===f.relativeTo?null:"plotBox";K(this,"beforeShowResetZoom",null,function(){c.resetZoomButton=c.renderer.button(d.resetZoom,null,null,a,g,k&&k.hover).attr({align:f.position.align,title:d.resetZoomTitle}).addClass("highcharts-reset-zoom").add().align(f.position,!1,l)});K(this,"afterShowResetZoom")},zoomOut:function(){K(this,"selection",{resetSelection:!0},this.zoom)},zoom:function(a){var c=this,f,g=c.pointer,k=!1,l=c.inverted?g.mouseDownX:g.mouseDownY;!a||a.resetSelection?(c.axes.forEach(function(a){f=
a.zoom()}),g.initiated=!1):a.xAxis.concat(a.yAxis).forEach(function(a){var d=a.axis,e=c.inverted?d.left:d.top,b=c.inverted?e+d.width:e+d.height,h=d.isXAxis,m=!1;if(!h&&l>=e&&l<=b||h||!L(l))m=!0;g[h?"zoomX":"zoomY"]&&m&&(f=d.zoom(a.min,a.max),d.displayBtn&&(k=!0))});var m=c.resetZoomButton;k&&!m?c.showResetZoom():!k&&I(m)&&(c.resetZoomButton=m.destroy());f&&c.redraw(d(c.options.chart.animation,a&&a.animation,100>c.pointCount))},pan:function(a,d){var f=this,g=f.hoverPoints,k=f.options.chart,l=f.options.mapNavigation&&
f.options.mapNavigation.enabled,m;d="object"===typeof d?d:{enabled:d,type:"x"};k&&k.panning&&(k.panning=d);var n=d.type;K(this,"pan",{originalEvent:a},function(){g&&g.forEach(function(a){a.setState()});var d=[1];"xy"===n?d=[1,0]:"y"===n&&(d=[0]);d.forEach(function(d){var b=f[d?"xAxis":"yAxis"][0],e=b.horiz,g=a[e?"chartX":"chartY"];e=e?"mouseDownX":"mouseDownY";var k=f[e],p=(b.pointRange||0)/2,q=b.reversed&&!f.inverted||!b.reversed&&f.inverted?-1:1,r=b.getExtremes(),u=b.toValue(k-g,!0)+p*q;q=b.toValue(k+
b.len-g,!0)-p*q;var t=q<u;k=t?q:u;u=t?u:q;var w=b.hasVerticalPanning(),v=b.panningState;b.series.forEach(function(a){if(w&&!d&&(!v||v.isDirty)){var b=a.getProcessedData(!0);a=a.getExtremes(b.yData,!0);v||(v={startMin:Number.MAX_VALUE,startMax:-Number.MAX_VALUE});C(a.dataMin)&&C(a.dataMax)&&(v.startMin=Math.min(a.dataMin,v.startMin),v.startMax=Math.max(a.dataMax,v.startMax))}});q=Math.min(c.pick(null===v||void 0===v?void 0:v.startMin,r.dataMin),p?r.min:b.toValue(b.toPixels(r.min)-b.minPixelPadding));
p=Math.max(c.pick(null===v||void 0===v?void 0:v.startMax,r.dataMax),p?r.max:b.toValue(b.toPixels(r.max)+b.minPixelPadding));b.panningState=v;b.isOrdinal||(t=q-k,0<t&&(u+=t,k=q),t=u-p,0<t&&(u=p,k-=t),b.series.length&&k!==r.min&&u!==r.max&&k>=q&&u<=p&&(b.setExtremes(k,u,!1,!1,{trigger:"pan"}),f.resetZoomButton||l||k===q||u===p||!n.match("y")||(f.showResetZoom(),b.displayBtn=!1),m=!0),f[e]=g)});m&&f.redraw(!1);G(f.container,{cursor:"move"})})}});v(B.prototype,{select:function(a,c){var f=this,g=f.series,
k=g.chart;this.selectedStaging=a=d(a,!f.selected);f.firePointEvent(a?"select":"unselect",{accumulate:c},function(){f.selected=f.options.selected=a;g.options.data[g.data.indexOf(f)]=f.options;f.setState(a&&"select");c||k.getSelectedPoints().forEach(function(a){var c=a.series;a.selected&&a!==f&&(a.selected=a.options.selected=!1,c.options.data[c.data.indexOf(a)]=a.options,a.setState(k.hoverPoints&&c.options.inactiveOtherPoints?"inactive":""),a.firePointEvent("unselect"))})});delete this.selectedStaging},
onMouseOver:function(a){var c=this.series.chart,d=c.pointer;a=a?d.normalize(a):d.getChartCoordinatesFromPoint(this,c.inverted);d.runPointActions(a,this)},onMouseOut:function(){var a=this.series.chart;this.firePointEvent("mouseOut");this.series.options.inactiveOtherPoints||(a.hoverPoints||[]).forEach(function(a){a.setState()});a.hoverPoints=a.hoverPoint=null},importEvents:function(){if(!this.hasImportedEvents){var a=this,c=p(a.series.options.point,a.options).events;a.events=c;m(c,function(c,d){r(c)&&
J(a,d,c)});this.hasImportedEvents=!0}},setState:function(a,c){var f=this.series,g=this.state,k=f.options.states[a||"normal"]||{},l=D.plotOptions[f.type].marker&&f.options.marker,m=l&&!1===l.enabled,n=l&&l.states&&l.states[a||"normal"]||{},p=!1===n.enabled,e=f.stateMarkerGraphic,b=this.marker||{},h=f.chart,q=f.halo,r,t=l&&f.markerAttribs;a=a||"";if(!(a===this.state&&!c||this.selected&&"select"!==a||!1===k.enabled||a&&(p||m&&!1===n.enabled)||a&&b.states&&b.states[a]&&!1===b.states[a].enabled)){this.state=
a;t&&(r=f.markerAttribs(this,a));if(this.graphic){g&&this.graphic.removeClass("highcharts-point-"+g);a&&this.graphic.addClass("highcharts-point-"+a);if(!h.styledMode){var y=f.pointAttribs(this,a);var A=d(h.options.chart.animation,k.animation);f.options.inactiveOtherPoints&&y.opacity&&((this.dataLabels||[]).forEach(function(a){a&&a.animate({opacity:y.opacity},A)}),this.connector&&this.connector.animate({opacity:y.opacity},A));this.graphic.animate(y,A)}r&&this.graphic.animate(r,d(h.options.chart.animation,
n.animation,l.animation));e&&e.hide()}else{if(a&&n){g=b.symbol||f.symbol;e&&e.currentSymbol!==g&&(e=e.destroy());if(r)if(e)e[c?"animate":"attr"]({x:r.x,y:r.y});else g&&(f.stateMarkerGraphic=e=h.renderer.symbol(g,r.x,r.y,r.width,r.height).add(f.markerGroup),e.currentSymbol=g);!h.styledMode&&e&&e.attr(f.pointAttribs(this,a))}e&&(e[a&&this.isInside?"show":"hide"](),e.element.point=this)}a=k.halo;k=(e=this.graphic||e)&&e.visibility||"inherit";a&&a.size&&e&&"hidden"!==k&&!this.isCluster?(q||(f.halo=q=
h.renderer.path().add(e.parentGroup)),q.show()[c?"animate":"attr"]({d:this.haloPath(a.size)}),q.attr({"class":"highcharts-halo highcharts-color-"+d(this.colorIndex,f.colorIndex)+(this.className?" "+this.className:""),visibility:k,zIndex:-1}),q.point=this,h.styledMode||q.attr(v({fill:this.color||f.color,"fill-opacity":a.opacity},a.attributes))):q&&q.point&&q.point.haloPath&&q.animate({d:q.point.haloPath(0)},null,q.hide);K(this,"afterSetState")}},haloPath:function(a){return this.series.chart.renderer.symbols.circle(Math.floor(this.plotX)-
a,this.plotY-a,2*a,2*a)}});v(y.prototype,{onMouseOver:function(){var a=this.chart,c=a.hoverSeries;a.pointer.setHoverChartIndex();if(c&&c!==this)c.onMouseOut();this.options.events.mouseOver&&K(this,"mouseOver");this.setState("hover");a.hoverSeries=this},onMouseOut:function(){var a=this.options,c=this.chart,d=c.tooltip,f=c.hoverPoint;c.hoverSeries=null;if(f)f.onMouseOut();this&&a.events.mouseOut&&K(this,"mouseOut");!d||this.stickyTracking||d.shared&&!this.noSharedTooltip||d.hide();c.series.forEach(function(a){a.setState("",
!0)})},setState:function(a,c){var f=this,g=f.options,k=f.graph,l=g.inactiveOtherPoints,m=g.states,n=g.lineWidth,p=g.opacity,e=d(m[a||"normal"]&&m[a||"normal"].animation,f.chart.options.chart.animation);g=0;a=a||"";if(f.state!==a&&([f.group,f.markerGroup,f.dataLabelsGroup].forEach(function(b){b&&(f.state&&b.removeClass("highcharts-series-"+f.state),a&&b.addClass("highcharts-series-"+a))}),f.state=a,!f.chart.styledMode)){if(m[a]&&!1===m[a].enabled)return;a&&(n=m[a].lineWidth||n+(m[a].lineWidthPlus||
0),p=d(m[a].opacity,p));if(k&&!k.dashstyle)for(m={"stroke-width":n},k.animate(m,e);f["zone-graph-"+g];)f["zone-graph-"+g].attr(m),g+=1;l||[f.group,f.markerGroup,f.dataLabelsGroup,f.labelBySeries].forEach(function(a){a&&a.animate({opacity:p},e)})}c&&l&&f.points&&f.setAllPointsToState(a)},setAllPointsToState:function(a){this.points.forEach(function(c){c.setState&&c.setState(a)})},setVisible:function(a,c){var d=this,f=d.chart,g=d.legendItem,k=f.options.chart.ignoreHiddenSeries,l=d.visible;var m=(d.visible=
a=d.options.visible=d.userOptions.visible="undefined"===typeof a?!l:a)?"show":"hide";["group","dataLabelsGroup","markerGroup","tracker","tt"].forEach(function(a){if(d[a])d[a][m]()});if(f.hoverSeries===d||(f.hoverPoint&&f.hoverPoint.series)===d)d.onMouseOut();g&&f.legend.colorizeItem(d,a);d.isDirty=!0;d.options.stacking&&f.series.forEach(function(a){a.options.stacking&&a.visible&&(a.isDirty=!0)});d.linkedSeries.forEach(function(c){c.setVisible(a,!1)});k&&(f.isDirtyBox=!0);K(d,m);!1!==c&&f.redraw()},
show:function(){this.setVisible(!0)},hide:function(){this.setVisible(!1)},select:function(a){this.selected=a=this.options.selected="undefined"===typeof a?!this.selected:a;this.checkbox&&(this.checkbox.checked=a);K(this,a?"select":"unselect")},drawTracker:f.drawTrackerGraph})});O(q,"parts/Responsive.js",[q["parts/Chart.js"],q["parts/Utilities.js"]],function(g,c){var q=c.find,y=c.isArray,B=c.isObject,H=c.merge,D=c.objectEach,J=c.pick,t=c.splat,G=c.uniqueKey;g.prototype.setResponsive=function(c,g){var t=
this.options.responsive,n=[],r=this.currentResponsive;!g&&t&&t.rules&&t.rules.forEach(function(c){"undefined"===typeof c._id&&(c._id=G());this.matchResponsiveRule(c,n)},this);g=H.apply(0,n.map(function(c){return q(t.rules,function(g){return g._id===c}).chartOptions}));g.isResponsiveOptions=!0;n=n.toString()||void 0;n!==(r&&r.ruleIds)&&(r&&this.update(r.undoOptions,c,!0),n?(r=this.currentOptions(g),r.isResponsiveOptions=!0,this.currentResponsive={ruleIds:n,mergedOptions:g,undoOptions:r},this.update(g,
c,!0)):this.currentResponsive=void 0)};g.prototype.matchResponsiveRule=function(c,g){var q=c.condition;(q.callback||function(){return this.chartWidth<=J(q.maxWidth,Number.MAX_VALUE)&&this.chartHeight<=J(q.maxHeight,Number.MAX_VALUE)&&this.chartWidth>=J(q.minWidth,0)&&this.chartHeight>=J(q.minHeight,0)}).call(this)&&g.push(c._id)};g.prototype.currentOptions=function(c){function g(c,n,v,p){var m;D(c,function(c,l){if(!p&&-1<q.collectionsWithUpdate.indexOf(l))for(c=t(c),v[l]=[],m=0;m<Math.max(c.length,
n[l].length);m++)n[l][m]&&(void 0===c[m]?v[l][m]=n[l][m]:(v[l][m]={},g(c[m],n[l][m],v[l][m],p+1)));else B(c)?(v[l]=y(c)?[]:{},g(c,n[l]||{},v[l],p+1)):v[l]="undefined"===typeof n[l]?null:n[l]})}var q=this,n={};g(c,this.options,n,0);return n}});O(q,"masters/highcharts.src.js",[q["parts/Globals.js"]],function(g){return g});q["masters/highcharts.src.js"]._modules=q;return q["masters/highcharts.src.js"]});
//# sourceMappingURL=highcharts.js.map

/***/ }),

/***/ "./node_modules/vue-google-charts/dist/vue-google-charts.common.js":
/*!*************************************************************************!*\
  !*** ./node_modules/vue-google-charts/dist/vue-google-charts.common.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports=function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.i=function(value){return value},__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{configurable:!1,enumerable:!0,get:getter})},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=3)}([function(module,__webpack_exports__,__webpack_require__){"use strict";function getChartsLoader(){return window.google&&window.google.charts?Promise.resolve(window.google.charts):(chartsLoaderPromise||(chartsLoaderPromise=new Promise(function(resolve){var script=document.createElement("script");script.type="text/javascript",script.onload=function(){return resolve(window.google.charts)},script.src=chartsScriptUrl,document.body.appendChild(script)})),chartsLoaderPromise)}function loadGoogleCharts(){var version=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"current",settings=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return getChartsLoader().then(function(loader){if("object"!==(void 0===settings?"undefined":_typeof(settings)))throw new Error("Google Charts loader: settings must be an object");var settingsKey=version+"_"+JSON.stringify(settings,Object.keys(settings).sort());if(loadedPackages.has(settingsKey))return loadedPackages.get(settingsKey);var loaderPromise=new Promise(function(resolve){loader.load(version,settings),loader.setOnLoadCallback(function(){return resolve(window.google)})});return loadedPackages.set(settingsKey,loaderPromise),loaderPromise})}__webpack_exports__.a=loadGoogleCharts;var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},chartsScriptUrl="https://www.gstatic.com/charts/loader.js",chartsLoaderPromise=null,loadedPackages=new Map},function(module,exports,__webpack_require__){var Component=__webpack_require__(5)(__webpack_require__(4),__webpack_require__(6),null,null);module.exports=Component.exports},function(module,exports){module.exports=function(func,wait,immediate){function later(){var last=Date.now()-timestamp;last<wait&&last>=0?timeout=setTimeout(later,wait-last):(timeout=null,immediate||(result=func.apply(context,args),context=args=null))}var timeout,args,context,timestamp,result;null==wait&&(wait=100);var debounced=function(){context=this,args=arguments,timestamp=Date.now();var callNow=immediate&&!timeout;return timeout||(timeout=setTimeout(later,wait)),callNow&&(result=func.apply(context,args),context=args=null),result};return debounced.clear=function(){timeout&&(clearTimeout(timeout),timeout=null)},debounced.flush=function(){timeout&&(result=func.apply(context,args),context=args=null,clearTimeout(timeout),timeout=null)},debounced}},function(module,__webpack_exports__,__webpack_require__){"use strict";function install(Vue){Vue.component("GChart",__WEBPACK_IMPORTED_MODULE_1__components_GChart_vue___default.a)}Object.defineProperty(__webpack_exports__,"__esModule",{value:!0}),__webpack_exports__.install=install;var __WEBPACK_IMPORTED_MODULE_0__lib_google_charts_loader__=__webpack_require__(0),__WEBPACK_IMPORTED_MODULE_1__components_GChart_vue__=__webpack_require__(1),__WEBPACK_IMPORTED_MODULE_1__components_GChart_vue___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_GChart_vue__);__webpack_require__.d(__webpack_exports__,"loadGoogleCharts",function(){return __WEBPACK_IMPORTED_MODULE_0__lib_google_charts_loader__.a}),__webpack_require__.d(__webpack_exports__,"GChart",function(){return __WEBPACK_IMPORTED_MODULE_1__components_GChart_vue___default.a});var plugin={version:"0.3.3",install:install};__webpack_exports__.default=plugin;var GlobalVue=null;"undefined"!=typeof window?GlobalVue=window.Vue:"undefined"!=typeof global&&(GlobalVue=global.Vue),GlobalVue&&GlobalVue.use(plugin)},function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0});var __WEBPACK_IMPORTED_MODULE_0__lib_google_charts_loader__=__webpack_require__(0),__WEBPACK_IMPORTED_MODULE_1_debounce__=__webpack_require__(2),__WEBPACK_IMPORTED_MODULE_1_debounce___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_debounce__),_slicedToArray=function(){function sliceIterator(arr,i){var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{!_n&&_i.return&&_i.return()}finally{if(_d)throw _e}}return _arr}return function(arr,i){if(Array.isArray(arr))return arr;if(Symbol.iterator in Object(arr))return sliceIterator(arr,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},chartsLib=null;__webpack_exports__.default={name:"GChart",props:{type:{type:String},data:{type:[Array,Object],default:function(){return[]}},options:{type:Object,default:function(){return{}}},version:{type:String,default:"current"},settings:{type:Object,default:function(){return{packages:["corechart","table"]}}},events:{type:Object},createChart:{type:Function},resizeDebounce:{type:Number,default:200}},data:function(){return{chartObject:null}},watch:{data:{deep:!0,handler:function(){this.drawChart()}},options:{deep:!0,handler:function(){this.drawChart()}},type:function(value){this.createChartObject(),this.drawChart()}},mounted:function(){var _this=this;__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_google_charts_loader__.a)(this.version,this.settings).then(function(api){chartsLib=api;var chart=_this.createChartObject();_this.$emit("ready",chart,api),_this.drawChart()}),this.resizeDebounce>0&&window.addEventListener("resize",__WEBPACK_IMPORTED_MODULE_1_debounce___default()(this.drawChart,this.resizeDebounce))},beforeDestroy:function(){this.chartObject&&"function"==typeof this.chartObject.clearChart&&this.chartObject.clearChart()},methods:{drawChart:function(){if(chartsLib&&this.chartObject){var data=this.getValidChartData();data&&this.chartObject.draw(data,this.options)}},getValidChartData:function(){return this.data instanceof chartsLib.visualization.DataTable?this.data:this.data instanceof chartsLib.visualization.DataView?this.data:Array.isArray(this.data)?chartsLib.visualization.arrayToDataTable(this.data):null!==this.data&&"object"===_typeof(this.data)?new chartsLib.visualization.DataTable(this.data):null},createChartObject:function(){var createChart=function(el,google,type){if(!type)throw new Error("please, provide chart type property");return new google.visualization[type](el)},fn=this.createChart||createChart;return this.chartObject=fn(this.$refs.chart,chartsLib,this.type),this.attachListeners(),this.chartObject},attachListeners:function(){var _this2=this;this.events&&Object.entries(this.events).forEach(function(_ref){var _ref2=_slicedToArray(_ref,2),event=_ref2[0],listener=_ref2[1];chartsLib.visualization.events.addListener(_this2.chartObject,event,listener)})}}}},function(module,exports){module.exports=function(rawScriptExports,compiledTemplate,scopeId,cssModules){var esModule,scriptExports=rawScriptExports=rawScriptExports||{},type=typeof rawScriptExports.default;"object"!==type&&"function"!==type||(esModule=rawScriptExports,scriptExports=rawScriptExports.default);var options="function"==typeof scriptExports?scriptExports.options:scriptExports;if(compiledTemplate&&(options.render=compiledTemplate.render,options.staticRenderFns=compiledTemplate.staticRenderFns),scopeId&&(options._scopeId=scopeId),cssModules){var computed=options.computed||(options.computed={});Object.keys(cssModules).forEach(function(key){var module=cssModules[key];computed[key]=function(){return module}})}return{esModule:esModule,exports:scriptExports,options:options}}},function(module,exports){module.exports={render:function(){var _vm=this,_h=_vm.$createElement;return(_vm._self._c||_h)("div",{ref:"chart"})},staticRenderFns:[]}}]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/vue-google-charts/index.js":
/*!*************************************************!*\
  !*** ./node_modules/vue-google-charts/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dist_vue_google_charts_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dist/vue-google-charts.common */ "./node_modules/vue-google-charts/dist/vue-google-charts.common.js");
/* harmony import */ var _dist_vue_google_charts_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dist_vue_google_charts_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _dist_vue_google_charts_common__WEBPACK_IMPORTED_MODULE_0___default.a; });
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _dist_vue_google_charts_common__WEBPACK_IMPORTED_MODULE_0__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _dist_vue_google_charts_common__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


// import './dist/vue-google-charts.css'


/***/ }),

/***/ "./node_modules/vue2-slideout-panel/dist/vue-slideout-panel.js":
/*!*********************************************************************!*\
  !*** ./node_modules/vue2-slideout-panel/dist/vue-slideout-panel.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/*!
 * vue2-slideout-panel v2.12.0 (https://github.com/officert/vue-slideout-panel)
 * (c) 2020 Tim Officer
 * Released under the MIT License.
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else { var i, a; }
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 33);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(26)('wks');
var uid = __webpack_require__(27);
var Symbol = __webpack_require__(2).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 2 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(7);
var IE8_DOM_DEFINE = __webpack_require__(49);
var toPrimitive = __webpack_require__(50);
var dP = Object.defineProperty;

exports.f = __webpack_require__(4) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(12)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var core = __webpack_require__(1);
var ctx = __webpack_require__(19);
var hide = __webpack_require__(6);
var has = __webpack_require__(8);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(3);
var createDesc = __webpack_require__(13);
module.exports = __webpack_require__(4) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(11);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(26)('keys');
var uid = __webpack_require__(27);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(10);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(48);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(11);
var document = __webpack_require__(2).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(55);
var enumBugKeys = __webpack_require__(28);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(23);
var defined = __webpack_require__(10);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(24);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(9);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(1);
var global = __webpack_require__(2);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(18) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 27 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 28 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(3).f;
var has = __webpack_require__(8);
var TAG = __webpack_require__(0)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*!
 * Vue.js v2.5.22
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */


/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : typeof val === 'object'
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Generate a string containing static keys from compiler modules.
 */
function genStaticKeys (modules) {
  return modules.reduce(function (keys, m) {
    return keys.concat(m.staticKeys || [])
  }, []).join(',')
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w.$]/;
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
Dep.target = null;
var targetStack = [];

function pushTarget (target) {
  targetStack.push(target);
  Dep.target = target;
}

function popTarget () {
  targetStack.pop();
  Dep.target = targetStack[targetStack.length - 1];
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      protoAugment(value, arrayMethods);
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;
  var keys = Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!/^[a-zA-Z][\w-]*$/.test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'can only contain alphanumeric characters and the hyphen, ' +
      'and must start with a letter.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  if (vm) {
    var cur = vm;
    while ((cur = cur.$parent)) {
      var hooks = cur.$options.errorCaptured;
      if (hooks) {
        for (var i = 0; i < hooks.length; i++) {
          try {
            var capture = hooks[i].call(cur, err, vm, info) === false;
            if (capture) { return }
          } catch (e) {
            globalHandleError(e, cur, 'errorCaptured hook');
          }
        }
      }
    }
  }
  globalHandleError(err, vm, info);
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      logError(e, null, 'config.errorHandler');
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using both microtasks and (macro) tasks.
// In < 2.4 we used microtasks everywhere, but there are some scenarios where
// microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690) or even between bubbling of the same
// event (#6566). However, using (macro) tasks everywhere also has subtle problems
// when state is changed right before repaint (e.g. #6813, out-in transitions).
// Here we use microtask by default, but expose a way to force (macro) task when
// needed (e.g. in event handlers attached by v-on).
var microTimerFunc;
var macroTimerFunc;
var useMacroTask = false;

// Determine (macro) task defer implementation.
// Technically setImmediate should be the ideal choice, but it's only available
// in IE. The only polyfill that consistently queues the callback after all DOM
// events triggered in the same loop is by using MessageChannel.
/* istanbul ignore if */
if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  macroTimerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else if (typeof MessageChannel !== 'undefined' && (
  isNative(MessageChannel) ||
  // PhantomJS
  MessageChannel.toString() === '[object MessageChannelConstructor]'
)) {
  var channel = new MessageChannel();
  var port = channel.port2;
  channel.port1.onmessage = flushCallbacks;
  macroTimerFunc = function () {
    port.postMessage(1);
  };
} else {
  /* istanbul ignore next */
  macroTimerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

// Determine microtask defer implementation.
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  microTimerFunc = function () {
    p.then(flushCallbacks);
    // in problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else {
  // fallback to macro
  microTimerFunc = macroTimerFunc;
}

/**
 * Wrap a function so that if any code inside triggers state change,
 * the changes are queued using a (macro) task instead of a microtask.
 */
function withMacroTask (fn) {
  return fn._withTask || (fn._withTask = function () {
    useMacroTask = true;
    try {
      return fn.apply(null, arguments)
    } finally {
      useMacroTask = false;    
    }
  })
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    if (useMacroTask) {
      macroTimerFunc();
    } else {
      microTimerFunc();
    }
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      perf.clearMeasures(name);
    };
  }
}

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        cloned[i].apply(null, arguments$1);
      }
    } else {
      // return handler return value for single handlers
      return fns.apply(null, arguments)
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor,
  context
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (isDef(factory.contexts)) {
    // already pending
    factory.contexts.push(context);
  } else {
    var contexts = factory.contexts = [context];
    var sync = true;

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = contexts.length; i < l; i++) {
        contexts[i].$forceUpdate();
      }

      if (renderCompleted) {
        contexts.length = 0;
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        contexts.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (typeof res.then === 'function') {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isDef(res.component) && typeof res.component.then === 'function') {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            setTimeout(function () {
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          setTimeout(function () {
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        try {
          cbs[i].apply(vm, args);
        } catch (e) {
          handleError(e, vm, ("event handler for \"" + event + "\""));
        }
      }
    }
    return vm
  };
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  var slots = {};
  if (!children) {
    return slots
  }
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

function resolveScopedSlots (
  fns, // see flow/vnode
  res
) {
  res = res || {};
  for (var i = 0; i < fns.length; i++) {
    if (Array.isArray(fns[i])) {
      resolveScopedSlots(fns[i], res);
    } else {
      res[fns[i].key] = fns[i].fn;
    }
  }
  return res
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if ( true && config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure(("vue " + name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure(("vue " + name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before () {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren
  var hasChildren = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    parentVnode.data.scopedSlots || // has new scoped slots
    vm.$scopedSlots !== emptyObject // has old scoped slots
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (hasChildren) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm);
      } catch (e) {
        handleError(e, vm, (hook + " hook"));
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$1 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$1; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject).filter(function (key) {
        /* istanbul ignore next */
        return Object.getOwnPropertyDescriptor(inject, key).enumerable
      })
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    keys = Object.keys(val);
    ret = new Array(keys.length);
    for (i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      ret[i] = render(val[key], key, i);
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        if (!(key in hash) && !(camelizedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + camelizedKey)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () { return resolveSlots(children, parent); };

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = data.scopedSlots || emptyObject;
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.props || (data.props = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = _parentVnode.data.scopedSlots || emptyObject;
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.5.22';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isPreTag = function (tag) { return tag === 'pre'; };

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
       true && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setStyleScope (node, scopeId) {
  node.setAttribute(scopeId, '');
}

var nodeOps = /*#__PURE__*/Object.freeze({
  createElement: createElement$1,
  createElementNS: createElementNS,
  createTextNode: createTextNode,
  createComment: createComment,
  insertBefore: insertBefore,
  removeChild: removeChild,
  appendChild: appendChild,
  parentNode: parentNode,
  nextSibling: nextSibling,
  tagName: tagName,
  setTextContent: setTextContent,
  setStyleScope: setStyleScope
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!isDef(key)) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove$$1 () {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove$$1.listeners = listeners;
    return remove$$1
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1 (vnode, inVPre) {
    return (
      !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
    )
  }

  var creatingElmInVPre = 0;

  function createElm (
    vnode,
    insertedVnodeQueue,
    parentElm,
    refElm,
    nested,
    ownerArray,
    index
  ) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (true) {
        if (data && data.pre) {
          creatingElmInVPre++;
        }
        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }

      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if ( true && data && data.pre) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        insert(parentElm, vnode.elm, refElm);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (nodeOps.parentNode(ref$$1) === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      if (true) {
        checkDuplicateKeys(children);
      }
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.fnContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    if (true) {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys (children) {
    var seenKeys = {};
    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;
      if (isDef(key)) {
        if (seenKeys[key]) {
          warn(
            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
            vnode.context
          );
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (
    oldVnode,
    vnode,
    insertedVnodeQueue,
    ownerArray,
    index,
    removeOnly
  ) {
    if (oldVnode === vnode) {
      return
    }

    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // clone reused vnode
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (true) {
          checkDuplicateKeys(ch);
        }
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || (data && data.pre);
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true
    }
    // assert node match
    if (true) {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false
      }
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if ( true &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if ( true &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || (
        !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (true) {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm = nodeOps.parentNode(oldElm);

        // create new node
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm,
          nodeOps.nextSibling(oldElm)
        );

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm)) {
          removeVnodes(parentElm, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  // $flow-disable-line
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr (el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.
    /* istanbul ignore if */
    if (
      isIE && !isIE9 &&
      (el.tagName === 'TEXTAREA' || el.tagName === 'INPUT') &&
      key === 'placeholder' && !el.__ieph
    ) {
      var blocker = function (e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };
      el.addEventListener('input', blocker);
      // $flow-disable-line
      el.__ieph = true; /* IE placeholder patched */
    }
    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

var validDivisionCharRE = /[\w).+\-_$\]]/;

function parseFilters (exp) {
  var inSingle = false;
  var inDouble = false;
  var inTemplateString = false;
  var inRegex = false;
  var curly = 0;
  var square = 0;
  var paren = 0;
  var lastFilterIndex = 0;
  var c, prev, i, expression, filters;

  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);
    if (inSingle) {
      if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
    } else if (inDouble) {
      if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
    } else if (inTemplateString) {
      if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
    } else if (inRegex) {
      if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
    } else if (
      c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C &&
      exp.charCodeAt(i - 1) !== 0x7C &&
      !curly && !square && !paren
    ) {
      if (expression === undefined) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22: inDouble = true; break         // "
        case 0x27: inSingle = true; break         // '
        case 0x60: inTemplateString = true; break // `
        case 0x28: paren++; break                 // (
        case 0x29: paren--; break                 // )
        case 0x5B: square++; break                // [
        case 0x5D: square--; break                // ]
        case 0x7B: curly++; break                 // {
        case 0x7D: curly--; break                 // }
      }
      if (c === 0x2f) { // /
        var j = i - 1;
        var p = (void 0);
        // find first non-whitespace prev char
        for (; j >= 0; j--) {
          p = exp.charAt(j);
          if (p !== ' ') { break }
        }
        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true;
        }
      }
    }
  }

  if (expression === undefined) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  function pushFilter () {
    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }

  if (filters) {
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i]);
    }
  }

  return expression
}

function wrapFilter (exp, filter) {
  var i = filter.indexOf('(');
  if (i < 0) {
    // _f: resolveFilter
    return ("_f(\"" + filter + "\")(" + exp + ")")
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return ("_f(\"" + name + "\")(" + exp + (args !== ')' ? ',' + args : args))
  }
}

/*  */

function baseWarn (msg) {
  console.error(("[Vue compiler]: " + msg));
}

function pluckModuleFunction (
  modules,
  key
) {
  return modules
    ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
    : []
}

function addProp (el, name, value) {
  (el.props || (el.props = [])).push({ name: name, value: value });
  el.plain = false;
}

function addAttr (el, name, value) {
  (el.attrs || (el.attrs = [])).push({ name: name, value: value });
  el.plain = false;
}

// add a raw attr (use this in preTransforms)
function addRawAttr (el, name, value) {
  el.attrsMap[name] = value;
  el.attrsList.push({ name: name, value: value });
}

function addDirective (
  el,
  name,
  rawName,
  value,
  arg,
  modifiers
) {
  (el.directives || (el.directives = [])).push({ name: name, rawName: rawName, value: value, arg: arg, modifiers: modifiers });
  el.plain = false;
}

function addHandler (
  el,
  name,
  value,
  modifiers,
  important,
  warn
) {
  modifiers = modifiers || emptyObject;
  // warn prevent and passive modifier
  /* istanbul ignore if */
  if (
     true && warn &&
    modifiers.prevent && modifiers.passive
  ) {
    warn(
      'passive and prevent can\'t be used together. ' +
      'Passive handler can\'t prevent default event.'
    );
  }

  // normalize click.right and click.middle since they don't actually fire
  // this is technically browser-specific, but at least for now browsers are
  // the only target envs that have right/middle clicks.
  if (name === 'click') {
    if (modifiers.right) {
      name = 'contextmenu';
      delete modifiers.right;
    } else if (modifiers.middle) {
      name = 'mouseup';
    }
  }

  // check capture modifier
  if (modifiers.capture) {
    delete modifiers.capture;
    name = '!' + name; // mark the event as captured
  }
  if (modifiers.once) {
    delete modifiers.once;
    name = '~' + name; // mark the event as once
  }
  /* istanbul ignore if */
  if (modifiers.passive) {
    delete modifiers.passive;
    name = '&' + name; // mark the event as passive
  }

  var events;
  if (modifiers.native) {
    delete modifiers.native;
    events = el.nativeEvents || (el.nativeEvents = {});
  } else {
    events = el.events || (el.events = {});
  }

  var newHandler = {
    value: value.trim()
  };
  if (modifiers !== emptyObject) {
    newHandler.modifiers = modifiers;
  }

  var handlers = events[name];
  /* istanbul ignore if */
  if (Array.isArray(handlers)) {
    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
  } else if (handlers) {
    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
  } else {
    events[name] = newHandler;
  }

  el.plain = false;
}

function getBindingAttr (
  el,
  name,
  getStatic
) {
  var dynamicValue =
    getAndRemoveAttr(el, ':' + name) ||
    getAndRemoveAttr(el, 'v-bind:' + name);
  if (dynamicValue != null) {
    return parseFilters(dynamicValue)
  } else if (getStatic !== false) {
    var staticValue = getAndRemoveAttr(el, name);
    if (staticValue != null) {
      return JSON.stringify(staticValue)
    }
  }
}

// note: this only removes the attr from the Array (attrsList) so that it
// doesn't get processed by processAttrs.
// By default it does NOT remove it from the map (attrsMap) because the map is
// needed during codegen.
function getAndRemoveAttr (
  el,
  name,
  removeFromMap
) {
  var val;
  if ((val = el.attrsMap[name]) != null) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      if (list[i].name === name) {
        list.splice(i, 1);
        break
      }
    }
  }
  if (removeFromMap) {
    delete el.attrsMap[name];
  }
  return val
}

/*  */

/**
 * Cross-platform code generation for component v-model
 */
function genComponentModel (
  el,
  value,
  modifiers
) {
  var ref = modifiers || {};
  var number = ref.number;
  var trim = ref.trim;

  var baseValueExpression = '$$v';
  var valueExpression = baseValueExpression;
  if (trim) {
    valueExpression =
      "(typeof " + baseValueExpression + " === 'string'" +
      "? " + baseValueExpression + ".trim()" +
      ": " + baseValueExpression + ")";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }
  var assignment = genAssignmentCode(value, valueExpression);

  el.model = {
    value: ("(" + value + ")"),
    expression: JSON.stringify(value),
    callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
  };
}

/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */
function genAssignmentCode (
  value,
  assignment
) {
  var res = parseModel(value);
  if (res.key === null) {
    return (value + "=" + assignment)
  } else {
    return ("$set(" + (res.exp) + ", " + (res.key) + ", " + assignment + ")")
  }
}

/**
 * Parse a v-model expression into a base path and a final key segment.
 * Handles both dot-path and possible square brackets.
 *
 * Possible cases:
 *
 * - test
 * - test[key]
 * - test[test1[key]]
 * - test["a"][key]
 * - xxx.test[a[a].test1[key]]
 * - test.xxx.a["asa"][test1[key]]
 *
 */

var len, str, chr, index$1, expressionPos, expressionEndPos;



function parseModel (val) {
  // Fix https://github.com/vuejs/vue/pull/7730
  // allow v-model="obj.val " (trailing whitespace)
  val = val.trim();
  len = val.length;

  if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
    index$1 = val.lastIndexOf('.');
    if (index$1 > -1) {
      return {
        exp: val.slice(0, index$1),
        key: '"' + val.slice(index$1 + 1) + '"'
      }
    } else {
      return {
        exp: val,
        key: null
      }
    }
  }

  str = val;
  index$1 = expressionPos = expressionEndPos = 0;

  while (!eof()) {
    chr = next();
    /* istanbul ignore if */
    if (isStringStart(chr)) {
      parseString(chr);
    } else if (chr === 0x5B) {
      parseBracket(chr);
    }
  }

  return {
    exp: val.slice(0, expressionPos),
    key: val.slice(expressionPos + 1, expressionEndPos)
  }
}

function next () {
  return str.charCodeAt(++index$1)
}

function eof () {
  return index$1 >= len
}

function isStringStart (chr) {
  return chr === 0x22 || chr === 0x27
}

function parseBracket (chr) {
  var inBracket = 1;
  expressionPos = index$1;
  while (!eof()) {
    chr = next();
    if (isStringStart(chr)) {
      parseString(chr);
      continue
    }
    if (chr === 0x5B) { inBracket++; }
    if (chr === 0x5D) { inBracket--; }
    if (inBracket === 0) {
      expressionEndPos = index$1;
      break
    }
  }
}

function parseString (chr) {
  var stringQuote = chr;
  while (!eof()) {
    chr = next();
    if (chr === stringQuote) {
      break
    }
  }
}

/*  */

var warn$1;

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

function model (
  el,
  dir,
  _warn
) {
  warn$1 = _warn;
  var value = dir.value;
  var modifiers = dir.modifiers;
  var tag = el.tag;
  var type = el.attrsMap.type;

  if (true) {
    // inputs with type="file" are read only and setting the input's
    // value will throw an error.
    if (tag === 'input' && type === 'file') {
      warn$1(
        "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
        "File inputs are read only. Use a v-on:change listener instead."
      );
    }
  }

  if (el.component) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (tag === 'select') {
    genSelect(el, value, modifiers);
  } else if (tag === 'input' && type === 'checkbox') {
    genCheckboxModel(el, value, modifiers);
  } else if (tag === 'input' && type === 'radio') {
    genRadioModel(el, value, modifiers);
  } else if (tag === 'input' || tag === 'textarea') {
    genDefaultModel(el, value, modifiers);
  } else if (!config.isReservedTag(tag)) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (true) {
    warn$1(
      "<" + (el.tag) + " v-model=\"" + value + "\">: " +
      "v-model is not supported on this element type. " +
      'If you are working with contenteditable, it\'s recommended to ' +
      'wrap a library dedicated for that purpose inside a custom component.'
    );
  }

  // ensure runtime directive metadata
  return true
}

function genCheckboxModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
  addProp(el, 'checked',
    "Array.isArray(" + value + ")" +
    "?_i(" + value + "," + valueBinding + ")>-1" + (
      trueValueBinding === 'true'
        ? (":(" + value + ")")
        : (":_q(" + value + "," + trueValueBinding + ")")
    )
  );
  addHandler(el, 'change',
    "var $$a=" + value + "," +
        '$$el=$event.target,' +
        "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
    'if(Array.isArray($$a)){' +
      "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
          '$$i=_i($$a,$$v);' +
      "if($$el.checked){$$i<0&&(" + (genAssignmentCode(value, '$$a.concat([$$v])')) + ")}" +
      "else{$$i>-1&&(" + (genAssignmentCode(value, '$$a.slice(0,$$i).concat($$a.slice($$i+1))')) + ")}" +
    "}else{" + (genAssignmentCode(value, '$$c')) + "}",
    null, true
  );
}

function genRadioModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
  addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
  addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
}

function genSelect (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var selectedVal = "Array.prototype.filter" +
    ".call($event.target.options,function(o){return o.selected})" +
    ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
    "return " + (number ? '_n(val)' : 'val') + "})";

  var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
  var code = "var $$selectedVal = " + selectedVal + ";";
  code = code + " " + (genAssignmentCode(value, assignment));
  addHandler(el, 'change', code, null, true);
}

function genDefaultModel (
  el,
  value,
  modifiers
) {
  var type = el.attrsMap.type;

  // warn if v-bind:value conflicts with v-model
  // except for inputs with v-bind:type
  if (true) {
    var value$1 = el.attrsMap['v-bind:value'] || el.attrsMap[':value'];
    var typeBinding = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
    if (value$1 && !typeBinding) {
      var binding = el.attrsMap['v-bind:value'] ? 'v-bind:value' : ':value';
      warn$1(
        binding + "=\"" + value$1 + "\" conflicts with v-model on the same element " +
        'because the latter already expands to a value binding internally'
      );
    }
  }

  var ref = modifiers || {};
  var lazy = ref.lazy;
  var number = ref.number;
  var trim = ref.trim;
  var needCompositionGuard = !lazy && type !== 'range';
  var event = lazy
    ? 'change'
    : type === 'range'
      ? RANGE_TOKEN
      : 'input';

  var valueExpression = '$event.target.value';
  if (trim) {
    valueExpression = "$event.target.value.trim()";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }

  var code = genAssignmentCode(value, valueExpression);
  if (needCompositionGuard) {
    code = "if($event.target.composing)return;" + code;
  }

  addProp(el, 'value', ("(" + value + ")"));
  addHandler(el, event, code, null, true);
  if (trim || number) {
    addHandler(el, 'blur', '$forceUpdate()');
  }
}

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler$1 (event, handler, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

function add$1 (
  event,
  handler,
  capture,
  passive
) {
  handler = withMacroTask(handler);
  target$1.addEventListener(
    event,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  event,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    event,
    handler._withTask || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (isUndef(props[key])) {
      elm[key] = '';
    }
  }
  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else {
      elm[key] = cur;
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isNotInFocusAndDirty(elm, checkVal) ||
    isDirtyWithModifiers(elm, checkVal)
  ))
}

function isNotInFocusAndDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isDirtyWithModifiers (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.lazy) {
      // inputs with lazy should only be updated when not in focus
      return false
    }
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal)
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim()
    }
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (
        childNode && childNode.data &&
        (styleData = normalizeStyleData(childNode.data))
      ) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

var whitespaceRE = /\s+/;

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def$$1) {
  if (!def$$1) {
    return
  }
  /* istanbul ignore else */
  if (typeof def$$1 === 'object') {
    var res = {};
    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }
    extend(res, def$$1);
    return res
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  // JSDOM may return undefined for transition properties
  var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
  var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
  var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

// Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
// in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down (i.e. acting
// as a floor function) causing unexpected behaviors
function toMs (s) {
  return Number(s.slice(0, -1).replace(',', '.')) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    transitionNode = transitionNode.parent;
    context = transitionNode.context;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if ( true && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);
      if (!cb.cancelled) {
        addTransitionClass(el, toClass);
        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if ( true && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show && el.parentNode) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted (el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd);
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },

  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
     true && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (!value === !oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: directive,
  show: show
};

/*  */

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var isNotTextNode = function (c) { return c.tag || isAsyncPlaceholder(c); };

var isVShowDirective = function (d) { return d.name === 'show'; };

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(isNotTextNode);
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if ( true && children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if ( true &&
      mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(isVShowDirective)) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
};

/*  */

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  beforeMount: function beforeMount () {
    var this$1 = this;

    var update = this._update;
    this._update = function (vnode, hydrating) {
      var restoreActiveInstance = setActiveInstance(this$1);
      // force removing pass
      this$1.__patch__(
        this$1._vnode,
        this$1.kept,
        false, // hydrating
        true // removeOnly (!important, avoids unnecessary moves)
      );
      this$1._vnode = this$1.kept;
      restoreActiveInstance();
      update.call(this$1, vnode, hydrating);
    };
  },

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (true) {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (e && e.target !== el) {
            return
          }
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents);

// install platform patch function
Vue.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else if (
         true &&
        isChrome
      ) {
        console[console.info ? 'info' : 'log'](
          'Download the Vue Devtools extension for a better development experience:\n' +
          'https://github.com/vuejs/vue-devtools'
        );
      }
    }
    if ( true &&
      config.productionTip !== false &&
      typeof console !== 'undefined'
    ) {
      console[console.info ? 'info' : 'log'](
        "You are running Vue in development mode.\n" +
        "Make sure to turn on production mode when deploying for production.\n" +
        "See more tips at https://vuejs.org/guide/deployment.html"
      );
    }
  }, 0);
}

/*  */

var defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g;
var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

var buildRegex = cached(function (delimiters) {
  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
});



function parseText (
  text,
  delimiters
) {
  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
  if (!tagRE.test(text)) {
    return
  }
  var tokens = [];
  var rawTokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index, tokenValue;
  while ((match = tagRE.exec(text))) {
    index = match.index;
    // push text token
    if (index > lastIndex) {
      rawTokens.push(tokenValue = text.slice(lastIndex, index));
      tokens.push(JSON.stringify(tokenValue));
    }
    // tag token
    var exp = parseFilters(match[1].trim());
    tokens.push(("_s(" + exp + ")"));
    rawTokens.push({ '@binding': exp });
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    rawTokens.push(tokenValue = text.slice(lastIndex));
    tokens.push(JSON.stringify(tokenValue));
  }
  return {
    expression: tokens.join('+'),
    tokens: rawTokens
  }
}

/*  */

function transformNode (el, options) {
  var warn = options.warn || baseWarn;
  var staticClass = getAndRemoveAttr(el, 'class');
  if ( true && staticClass) {
    var res = parseText(staticClass, options.delimiters);
    if (res) {
      warn(
        "class=\"" + staticClass + "\": " +
        'Interpolation inside attributes has been removed. ' +
        'Use v-bind or the colon shorthand instead. For example, ' +
        'instead of <div class="{{ val }}">, use <div :class="val">.'
      );
    }
  }
  if (staticClass) {
    el.staticClass = JSON.stringify(staticClass);
  }
  var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
  if (classBinding) {
    el.classBinding = classBinding;
  }
}

function genData (el) {
  var data = '';
  if (el.staticClass) {
    data += "staticClass:" + (el.staticClass) + ",";
  }
  if (el.classBinding) {
    data += "class:" + (el.classBinding) + ",";
  }
  return data
}

var klass$1 = {
  staticKeys: ['staticClass'],
  transformNode: transformNode,
  genData: genData
};

/*  */

function transformNode$1 (el, options) {
  var warn = options.warn || baseWarn;
  var staticStyle = getAndRemoveAttr(el, 'style');
  if (staticStyle) {
    /* istanbul ignore if */
    if (true) {
      var res = parseText(staticStyle, options.delimiters);
      if (res) {
        warn(
          "style=\"" + staticStyle + "\": " +
          'Interpolation inside attributes has been removed. ' +
          'Use v-bind or the colon shorthand instead. For example, ' +
          'instead of <div style="{{ val }}">, use <div :style="val">.'
        );
      }
    }
    el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
  }

  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
  if (styleBinding) {
    el.styleBinding = styleBinding;
  }
}

function genData$1 (el) {
  var data = '';
  if (el.staticStyle) {
    data += "staticStyle:" + (el.staticStyle) + ",";
  }
  if (el.styleBinding) {
    data += "style:(" + (el.styleBinding) + "),";
  }
  return data
}

var style$1 = {
  staticKeys: ['staticStyle'],
  transformNode: transformNode$1,
  genData: genData$1
};

/*  */

var decoder;

var he = {
  decode: function decode (html) {
    decoder = decoder || document.createElement('div');
    decoder.innerHTML = html;
    return decoder.textContent
  }
};

/*  */

var isUnaryTag = makeMap(
  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
  'link,meta,param,source,track,wbr'
);

// Elements that you can, intentionally, leave open
// (and which close themselves)
var canBeLeftOpenTag = makeMap(
  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
);

// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
var isNonPhrasingTag = makeMap(
  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
  'title,tr,track'
);

/**
 * Not type-checking this file because it's mostly vendor code.
 */

// Regular Expressions for parsing tags and attributes
var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
// could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
// but for Vue templates we can enforce a simple charset
var ncname = '[a-zA-Z_][\\w\\-\\.]*';
var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
var startTagOpen = new RegExp(("^<" + qnameCapture));
var startTagClose = /^\s*(\/?)>/;
var endTag = new RegExp(("^<\\/" + qnameCapture + "[^>]*>"));
var doctype = /^<!DOCTYPE [^>]+>/i;
// #7298: escape - to avoid being pased as HTML comment when inlined in page
var comment = /^<!\--/;
var conditionalComment = /^<!\[/;

// Special Elements (can contain anything)
var isPlainTextElement = makeMap('script,style,textarea', true);
var reCache = {};

var decodingMap = {
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&amp;': '&',
  '&#10;': '\n',
  '&#9;': '\t'
};
var encodedAttr = /&(?:lt|gt|quot|amp);/g;
var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#10|#9);/g;

// #5992
var isIgnoreNewlineTag = makeMap('pre,textarea', true);
var shouldIgnoreFirstNewline = function (tag, html) { return tag && isIgnoreNewlineTag(tag) && html[0] === '\n'; };

function decodeAttr (value, shouldDecodeNewlines) {
  var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
  return value.replace(re, function (match) { return decodingMap[match]; })
}

function parseHTML (html, options) {
  var stack = [];
  var expectHTML = options.expectHTML;
  var isUnaryTag$$1 = options.isUnaryTag || no;
  var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
  var index = 0;
  var last, lastTag;
  while (html) {
    last = html;
    // Make sure we're not in a plaintext content element like script/style
    if (!lastTag || !isPlainTextElement(lastTag)) {
      var textEnd = html.indexOf('<');
      if (textEnd === 0) {
        // Comment:
        if (comment.test(html)) {
          var commentEnd = html.indexOf('-->');

          if (commentEnd >= 0) {
            if (options.shouldKeepComment) {
              options.comment(html.substring(4, commentEnd));
            }
            advance(commentEnd + 3);
            continue
          }
        }

        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
        if (conditionalComment.test(html)) {
          var conditionalEnd = html.indexOf(']>');

          if (conditionalEnd >= 0) {
            advance(conditionalEnd + 2);
            continue
          }
        }

        // Doctype:
        var doctypeMatch = html.match(doctype);
        if (doctypeMatch) {
          advance(doctypeMatch[0].length);
          continue
        }

        // End tag:
        var endTagMatch = html.match(endTag);
        if (endTagMatch) {
          var curIndex = index;
          advance(endTagMatch[0].length);
          parseEndTag(endTagMatch[1], curIndex, index);
          continue
        }

        // Start tag:
        var startTagMatch = parseStartTag();
        if (startTagMatch) {
          handleStartTag(startTagMatch);
          if (shouldIgnoreFirstNewline(startTagMatch.tagName, html)) {
            advance(1);
          }
          continue
        }
      }

      var text = (void 0), rest = (void 0), next = (void 0);
      if (textEnd >= 0) {
        rest = html.slice(textEnd);
        while (
          !endTag.test(rest) &&
          !startTagOpen.test(rest) &&
          !comment.test(rest) &&
          !conditionalComment.test(rest)
        ) {
          // < in plain text, be forgiving and treat it as text
          next = rest.indexOf('<', 1);
          if (next < 0) { break }
          textEnd += next;
          rest = html.slice(textEnd);
        }
        text = html.substring(0, textEnd);
        advance(textEnd);
      }

      if (textEnd < 0) {
        text = html;
        html = '';
      }

      if (options.chars && text) {
        options.chars(text);
      }
    } else {
      var endTagLength = 0;
      var stackedTag = lastTag.toLowerCase();
      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
      var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
        endTagLength = endTag.length;
        if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
          text = text
            .replace(/<!\--([\s\S]*?)-->/g, '$1') // #7298
            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
        }
        if (shouldIgnoreFirstNewline(stackedTag, text)) {
          text = text.slice(1);
        }
        if (options.chars) {
          options.chars(text);
        }
        return ''
      });
      index += html.length - rest$1.length;
      html = rest$1;
      parseEndTag(stackedTag, index - endTagLength, index);
    }

    if (html === last) {
      options.chars && options.chars(html);
      if ( true && !stack.length && options.warn) {
        options.warn(("Mal-formatted tag at end of template: \"" + html + "\""));
      }
      break
    }
  }

  // Clean up any remaining tags
  parseEndTag();

  function advance (n) {
    index += n;
    html = html.substring(n);
  }

  function parseStartTag () {
    var start = html.match(startTagOpen);
    if (start) {
      var match = {
        tagName: start[1],
        attrs: [],
        start: index
      };
      advance(start[0].length);
      var end, attr;
      while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
        advance(attr[0].length);
        match.attrs.push(attr);
      }
      if (end) {
        match.unarySlash = end[1];
        advance(end[0].length);
        match.end = index;
        return match
      }
    }
  }

  function handleStartTag (match) {
    var tagName = match.tagName;
    var unarySlash = match.unarySlash;

    if (expectHTML) {
      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
        parseEndTag(lastTag);
      }
      if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
        parseEndTag(tagName);
      }
    }

    var unary = isUnaryTag$$1(tagName) || !!unarySlash;

    var l = match.attrs.length;
    var attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      var args = match.attrs[i];
      var value = args[3] || args[4] || args[5] || '';
      var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href'
        ? options.shouldDecodeNewlinesForHref
        : options.shouldDecodeNewlines;
      attrs[i] = {
        name: args[1],
        value: decodeAttr(value, shouldDecodeNewlines)
      };
    }

    if (!unary) {
      stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs });
      lastTag = tagName;
    }

    if (options.start) {
      options.start(tagName, attrs, unary, match.start, match.end);
    }
  }

  function parseEndTag (tagName, start, end) {
    var pos, lowerCasedTagName;
    if (start == null) { start = index; }
    if (end == null) { end = index; }

    // Find the closest opened tag of the same type
    if (tagName) {
      lowerCasedTagName = tagName.toLowerCase();
      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
          break
        }
      }
    } else {
      // If no tag name is provided, clean shop
      pos = 0;
    }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i--) {
        if ( true &&
          (i > pos || !tagName) &&
          options.warn
        ) {
          options.warn(
            ("tag <" + (stack[i].tag) + "> has no matching end tag.")
          );
        }
        if (options.end) {
          options.end(stack[i].tag, start, end);
        }
      }

      // Remove the open elements from the stack
      stack.length = pos;
      lastTag = pos && stack[pos - 1].tag;
    } else if (lowerCasedTagName === 'br') {
      if (options.start) {
        options.start(tagName, [], true, start, end);
      }
    } else if (lowerCasedTagName === 'p') {
      if (options.start) {
        options.start(tagName, [], false, start, end);
      }
      if (options.end) {
        options.end(tagName, start, end);
      }
    }
  }
}

/*  */

var onRE = /^@|^v-on:/;
var dirRE = /^v-|^@|^:/;
var forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
var stripParensRE = /^\(|\)$/g;

var argRE = /:(.*)$/;
var bindRE = /^:|^v-bind:/;
var modifierRE = /\.[^.]+/g;

var decodeHTMLCached = cached(he.decode);

// configurable state
var warn$2;
var delimiters;
var transforms;
var preTransforms;
var postTransforms;
var platformIsPreTag;
var platformMustUseProp;
var platformGetTagNamespace;



function createASTElement (
  tag,
  attrs,
  parent
) {
  return {
    type: 1,
    tag: tag,
    attrsList: attrs,
    attrsMap: makeAttrsMap(attrs),
    parent: parent,
    children: []
  }
}

/**
 * Convert HTML string to AST.
 */
function parse (
  template,
  options
) {
  warn$2 = options.warn || baseWarn;

  platformIsPreTag = options.isPreTag || no;
  platformMustUseProp = options.mustUseProp || no;
  platformGetTagNamespace = options.getTagNamespace || no;

  transforms = pluckModuleFunction(options.modules, 'transformNode');
  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

  delimiters = options.delimiters;

  var stack = [];
  var preserveWhitespace = options.preserveWhitespace !== false;
  var root;
  var currentParent;
  var inVPre = false;
  var inPre = false;
  var warned = false;

  function warnOnce (msg) {
    if (!warned) {
      warned = true;
      warn$2(msg);
    }
  }

  function closeElement (element) {
    // check pre state
    if (element.pre) {
      inVPre = false;
    }
    if (platformIsPreTag(element.tag)) {
      inPre = false;
    }
    // apply post-transforms
    for (var i = 0; i < postTransforms.length; i++) {
      postTransforms[i](element, options);
    }
  }

  parseHTML(template, {
    warn: warn$2,
    expectHTML: options.expectHTML,
    isUnaryTag: options.isUnaryTag,
    canBeLeftOpenTag: options.canBeLeftOpenTag,
    shouldDecodeNewlines: options.shouldDecodeNewlines,
    shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
    shouldKeepComment: options.comments,
    start: function start (tag, attrs, unary) {
      // check namespace.
      // inherit parent ns if there is one
      var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

      // handle IE svg bug
      /* istanbul ignore if */
      if (isIE && ns === 'svg') {
        attrs = guardIESVGBug(attrs);
      }

      var element = createASTElement(tag, attrs, currentParent);
      if (ns) {
        element.ns = ns;
      }

      if (isForbiddenTag(element) && !isServerRendering()) {
        element.forbidden = true;
         true && warn$2(
          'Templates should only be responsible for mapping the state to the ' +
          'UI. Avoid placing tags with side-effects in your templates, such as ' +
          "<" + tag + ">" + ', as they will not be parsed.'
        );
      }

      // apply pre-transforms
      for (var i = 0; i < preTransforms.length; i++) {
        element = preTransforms[i](element, options) || element;
      }

      if (!inVPre) {
        processPre(element);
        if (element.pre) {
          inVPre = true;
        }
      }
      if (platformIsPreTag(element.tag)) {
        inPre = true;
      }
      if (inVPre) {
        processRawAttrs(element);
      } else if (!element.processed) {
        // structural directives
        processFor(element);
        processIf(element);
        processOnce(element);
        // element-scope stuff
        processElement(element, options);
      }

      function checkRootConstraints (el) {
        if (true) {
          if (el.tag === 'slot' || el.tag === 'template') {
            warnOnce(
              "Cannot use <" + (el.tag) + "> as component root element because it may " +
              'contain multiple nodes.'
            );
          }
          if (el.attrsMap.hasOwnProperty('v-for')) {
            warnOnce(
              'Cannot use v-for on stateful component root element because ' +
              'it renders multiple elements.'
            );
          }
        }
      }

      // tree management
      if (!root) {
        root = element;
        checkRootConstraints(root);
      } else if (!stack.length) {
        // allow root elements with v-if, v-else-if and v-else
        if (root.if && (element.elseif || element.else)) {
          checkRootConstraints(element);
          addIfCondition(root, {
            exp: element.elseif,
            block: element
          });
        } else if (true) {
          warnOnce(
            "Component template should contain exactly one root element. " +
            "If you are using v-if on multiple elements, " +
            "use v-else-if to chain them instead."
          );
        }
      }
      if (currentParent && !element.forbidden) {
        if (element.elseif || element.else) {
          processIfConditions(element, currentParent);
        } else if (element.slotScope) { // scoped slot
          currentParent.plain = false;
          var name = element.slotTarget || '"default"'
          ;(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
        } else {
          currentParent.children.push(element);
          element.parent = currentParent;
        }
      }
      if (!unary) {
        currentParent = element;
        stack.push(element);
      } else {
        closeElement(element);
      }
    },

    end: function end () {
      // remove trailing whitespace
      var element = stack[stack.length - 1];
      var lastNode = element.children[element.children.length - 1];
      if (lastNode && lastNode.type === 3 && lastNode.text === ' ' && !inPre) {
        element.children.pop();
      }
      // pop stack
      stack.length -= 1;
      currentParent = stack[stack.length - 1];
      closeElement(element);
    },

    chars: function chars (text) {
      if (!currentParent) {
        if (true) {
          if (text === template) {
            warnOnce(
              'Component template requires a root element, rather than just text.'
            );
          } else if ((text = text.trim())) {
            warnOnce(
              ("text \"" + text + "\" outside root element will be ignored.")
            );
          }
        }
        return
      }
      // IE textarea placeholder bug
      /* istanbul ignore if */
      if (isIE &&
        currentParent.tag === 'textarea' &&
        currentParent.attrsMap.placeholder === text
      ) {
        return
      }
      var children = currentParent.children;
      text = inPre || text.trim()
        ? isTextTag(currentParent) ? text : decodeHTMLCached(text)
        // only preserve whitespace if its not right after a starting tag
        : preserveWhitespace && children.length ? ' ' : '';
      if (text) {
        var res;
        if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
          children.push({
            type: 2,
            expression: res.expression,
            tokens: res.tokens,
            text: text
          });
        } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
          children.push({
            type: 3,
            text: text
          });
        }
      }
    },
    comment: function comment (text) {
      currentParent.children.push({
        type: 3,
        text: text,
        isComment: true
      });
    }
  });
  return root
}

function processPre (el) {
  if (getAndRemoveAttr(el, 'v-pre') != null) {
    el.pre = true;
  }
}

function processRawAttrs (el) {
  var l = el.attrsList.length;
  if (l) {
    var attrs = el.attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      attrs[i] = {
        name: el.attrsList[i].name,
        value: JSON.stringify(el.attrsList[i].value)
      };
    }
  } else if (!el.pre) {
    // non root node in pre blocks with no attributes
    el.plain = true;
  }
}

function processElement (element, options) {
  processKey(element);

  // determine whether this is a plain element after
  // removing structural attributes
  element.plain = !element.key && !element.attrsList.length;

  processRef(element);
  processSlot(element);
  processComponent(element);
  for (var i = 0; i < transforms.length; i++) {
    element = transforms[i](element, options) || element;
  }
  processAttrs(element);
}

function processKey (el) {
  var exp = getBindingAttr(el, 'key');
  if (exp) {
    if (true) {
      if (el.tag === 'template') {
        warn$2("<template> cannot be keyed. Place the key on real elements instead.");
      }
      if (el.for) {
        var iterator = el.iterator2 || el.iterator1;
        var parent = el.parent;
        if (iterator && iterator === exp && parent && parent.tag === 'transition-group') {
          warn$2(
            "Do not use v-for index as key on <transition-group> children, " +
            "this is the same as not using keys."
          );
        }
      }
    }
    el.key = exp;
  }
}

function processRef (el) {
  var ref = getBindingAttr(el, 'ref');
  if (ref) {
    el.ref = ref;
    el.refInFor = checkInFor(el);
  }
}

function processFor (el) {
  var exp;
  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
    var res = parseFor(exp);
    if (res) {
      extend(el, res);
    } else if (true) {
      warn$2(
        ("Invalid v-for expression: " + exp)
      );
    }
  }
}



function parseFor (exp) {
  var inMatch = exp.match(forAliasRE);
  if (!inMatch) { return }
  var res = {};
  res.for = inMatch[2].trim();
  var alias = inMatch[1].trim().replace(stripParensRE, '');
  var iteratorMatch = alias.match(forIteratorRE);
  if (iteratorMatch) {
    res.alias = alias.replace(forIteratorRE, '').trim();
    res.iterator1 = iteratorMatch[1].trim();
    if (iteratorMatch[2]) {
      res.iterator2 = iteratorMatch[2].trim();
    }
  } else {
    res.alias = alias;
  }
  return res
}

function processIf (el) {
  var exp = getAndRemoveAttr(el, 'v-if');
  if (exp) {
    el.if = exp;
    addIfCondition(el, {
      exp: exp,
      block: el
    });
  } else {
    if (getAndRemoveAttr(el, 'v-else') != null) {
      el.else = true;
    }
    var elseif = getAndRemoveAttr(el, 'v-else-if');
    if (elseif) {
      el.elseif = elseif;
    }
  }
}

function processIfConditions (el, parent) {
  var prev = findPrevElement(parent.children);
  if (prev && prev.if) {
    addIfCondition(prev, {
      exp: el.elseif,
      block: el
    });
  } else if (true) {
    warn$2(
      "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
      "used on element <" + (el.tag) + "> without corresponding v-if."
    );
  }
}

function findPrevElement (children) {
  var i = children.length;
  while (i--) {
    if (children[i].type === 1) {
      return children[i]
    } else {
      if ( true && children[i].text !== ' ') {
        warn$2(
          "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
          "will be ignored."
        );
      }
      children.pop();
    }
  }
}

function addIfCondition (el, condition) {
  if (!el.ifConditions) {
    el.ifConditions = [];
  }
  el.ifConditions.push(condition);
}

function processOnce (el) {
  var once$$1 = getAndRemoveAttr(el, 'v-once');
  if (once$$1 != null) {
    el.once = true;
  }
}

function processSlot (el) {
  if (el.tag === 'slot') {
    el.slotName = getBindingAttr(el, 'name');
    if ( true && el.key) {
      warn$2(
        "`key` does not work on <slot> because slots are abstract outlets " +
        "and can possibly expand into multiple elements. " +
        "Use the key on a wrapping element instead."
      );
    }
  } else {
    var slotScope;
    if (el.tag === 'template') {
      slotScope = getAndRemoveAttr(el, 'scope');
      /* istanbul ignore if */
      if ( true && slotScope) {
        warn$2(
          "the \"scope\" attribute for scoped slots have been deprecated and " +
          "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " +
          "can also be used on plain elements in addition to <template> to " +
          "denote scoped slots.",
          true
        );
      }
      el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
    } else if ((slotScope = getAndRemoveAttr(el, 'slot-scope'))) {
      /* istanbul ignore if */
      if ( true && el.attrsMap['v-for']) {
        warn$2(
          "Ambiguous combined usage of slot-scope and v-for on <" + (el.tag) + "> " +
          "(v-for takes higher priority). Use a wrapper <template> for the " +
          "scoped slot to make it clearer.",
          true
        );
      }
      el.slotScope = slotScope;
    }
    var slotTarget = getBindingAttr(el, 'slot');
    if (slotTarget) {
      el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
      // preserve slot as an attribute for native shadow DOM compat
      // only for non-scoped slots.
      if (el.tag !== 'template' && !el.slotScope) {
        addAttr(el, 'slot', slotTarget);
      }
    }
  }
}

function processComponent (el) {
  var binding;
  if ((binding = getBindingAttr(el, 'is'))) {
    el.component = binding;
  }
  if (getAndRemoveAttr(el, 'inline-template') != null) {
    el.inlineTemplate = true;
  }
}

function processAttrs (el) {
  var list = el.attrsList;
  var i, l, name, rawName, value, modifiers, isProp;
  for (i = 0, l = list.length; i < l; i++) {
    name = rawName = list[i].name;
    value = list[i].value;
    if (dirRE.test(name)) {
      // mark element as dynamic
      el.hasBindings = true;
      // modifiers
      modifiers = parseModifiers(name);
      if (modifiers) {
        name = name.replace(modifierRE, '');
      }
      if (bindRE.test(name)) { // v-bind
        name = name.replace(bindRE, '');
        value = parseFilters(value);
        isProp = false;
        if (
           true &&
          value.trim().length === 0
        ) {
          warn$2(
            ("The value for a v-bind expression cannot be empty. Found in \"v-bind:" + name + "\"")
          );
        }
        if (modifiers) {
          if (modifiers.prop) {
            isProp = true;
            name = camelize(name);
            if (name === 'innerHtml') { name = 'innerHTML'; }
          }
          if (modifiers.camel) {
            name = camelize(name);
          }
          if (modifiers.sync) {
            addHandler(
              el,
              ("update:" + (camelize(name))),
              genAssignmentCode(value, "$event")
            );
          }
        }
        if (isProp || (
          !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)
        )) {
          addProp(el, name, value);
        } else {
          addAttr(el, name, value);
        }
      } else if (onRE.test(name)) { // v-on
        name = name.replace(onRE, '');
        addHandler(el, name, value, modifiers, false, warn$2);
      } else { // normal directives
        name = name.replace(dirRE, '');
        // parse arg
        var argMatch = name.match(argRE);
        var arg = argMatch && argMatch[1];
        if (arg) {
          name = name.slice(0, -(arg.length + 1));
        }
        addDirective(el, name, rawName, value, arg, modifiers);
        if ( true && name === 'model') {
          checkForAliasModel(el, value);
        }
      }
    } else {
      // literal attribute
      if (true) {
        var res = parseText(value, delimiters);
        if (res) {
          warn$2(
            name + "=\"" + value + "\": " +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div id="{{ val }}">, use <div :id="val">.'
          );
        }
      }
      addAttr(el, name, JSON.stringify(value));
      // #6887 firefox doesn't update muted state if set via attribute
      // even immediately after element creation
      if (!el.component &&
          name === 'muted' &&
          platformMustUseProp(el.tag, el.attrsMap.type, name)) {
        addProp(el, name, 'true');
      }
    }
  }
}

function checkInFor (el) {
  var parent = el;
  while (parent) {
    if (parent.for !== undefined) {
      return true
    }
    parent = parent.parent;
  }
  return false
}

function parseModifiers (name) {
  var match = name.match(modifierRE);
  if (match) {
    var ret = {};
    match.forEach(function (m) { ret[m.slice(1)] = true; });
    return ret
  }
}

function makeAttrsMap (attrs) {
  var map = {};
  for (var i = 0, l = attrs.length; i < l; i++) {
    if (
       true &&
      map[attrs[i].name] && !isIE && !isEdge
    ) {
      warn$2('duplicate attribute: ' + attrs[i].name);
    }
    map[attrs[i].name] = attrs[i].value;
  }
  return map
}

// for script (e.g. type="x/template") or style, do not decode content
function isTextTag (el) {
  return el.tag === 'script' || el.tag === 'style'
}

function isForbiddenTag (el) {
  return (
    el.tag === 'style' ||
    (el.tag === 'script' && (
      !el.attrsMap.type ||
      el.attrsMap.type === 'text/javascript'
    ))
  )
}

var ieNSBug = /^xmlns:NS\d+/;
var ieNSPrefix = /^NS\d+:/;

/* istanbul ignore next */
function guardIESVGBug (attrs) {
  var res = [];
  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i];
    if (!ieNSBug.test(attr.name)) {
      attr.name = attr.name.replace(ieNSPrefix, '');
      res.push(attr);
    }
  }
  return res
}

function checkForAliasModel (el, value) {
  var _el = el;
  while (_el) {
    if (_el.for && _el.alias === value) {
      warn$2(
        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
        "You are binding v-model directly to a v-for iteration alias. " +
        "This will not be able to modify the v-for source array because " +
        "writing to the alias is like modifying a function local variable. " +
        "Consider using an array of objects and use v-model on an object property instead."
      );
    }
    _el = _el.parent;
  }
}

/*  */

function preTransformNode (el, options) {
  if (el.tag === 'input') {
    var map = el.attrsMap;
    if (!map['v-model']) {
      return
    }

    var typeBinding;
    if (map[':type'] || map['v-bind:type']) {
      typeBinding = getBindingAttr(el, 'type');
    }
    if (!map.type && !typeBinding && map['v-bind']) {
      typeBinding = "(" + (map['v-bind']) + ").type";
    }

    if (typeBinding) {
      var ifCondition = getAndRemoveAttr(el, 'v-if', true);
      var ifConditionExtra = ifCondition ? ("&&(" + ifCondition + ")") : "";
      var hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
      var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true);
      // 1. checkbox
      var branch0 = cloneASTElement(el);
      // process for on the main node
      processFor(branch0);
      addRawAttr(branch0, 'type', 'checkbox');
      processElement(branch0, options);
      branch0.processed = true; // prevent it from double-processed
      branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
      addIfCondition(branch0, {
        exp: branch0.if,
        block: branch0
      });
      // 2. add radio else-if condition
      var branch1 = cloneASTElement(el);
      getAndRemoveAttr(branch1, 'v-for', true);
      addRawAttr(branch1, 'type', 'radio');
      processElement(branch1, options);
      addIfCondition(branch0, {
        exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
        block: branch1
      });
      // 3. other
      var branch2 = cloneASTElement(el);
      getAndRemoveAttr(branch2, 'v-for', true);
      addRawAttr(branch2, ':type', typeBinding);
      processElement(branch2, options);
      addIfCondition(branch0, {
        exp: ifCondition,
        block: branch2
      });

      if (hasElse) {
        branch0.else = true;
      } else if (elseIfCondition) {
        branch0.elseif = elseIfCondition;
      }

      return branch0
    }
  }
}

function cloneASTElement (el) {
  return createASTElement(el.tag, el.attrsList.slice(), el.parent)
}

var model$1 = {
  preTransformNode: preTransformNode
};

var modules$1 = [
  klass$1,
  style$1,
  model$1
];

/*  */

function text (el, dir) {
  if (dir.value) {
    addProp(el, 'textContent', ("_s(" + (dir.value) + ")"));
  }
}

/*  */

function html (el, dir) {
  if (dir.value) {
    addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"));
  }
}

var directives$1 = {
  model: model,
  text: text,
  html: html
};

/*  */

var baseOptions = {
  expectHTML: true,
  modules: modules$1,
  directives: directives$1,
  isPreTag: isPreTag,
  isUnaryTag: isUnaryTag,
  mustUseProp: mustUseProp,
  canBeLeftOpenTag: canBeLeftOpenTag,
  isReservedTag: isReservedTag,
  getTagNamespace: getTagNamespace,
  staticKeys: genStaticKeys(modules$1)
};

/*  */

var isStaticKey;
var isPlatformReservedTag;

var genStaticKeysCached = cached(genStaticKeys$1);

/**
 * Goal of the optimizer: walk the generated template AST tree
 * and detect sub-trees that are purely static, i.e. parts of
 * the DOM that never needs to change.
 *
 * Once we detect these sub-trees, we can:
 *
 * 1. Hoist them into constants, so that we no longer need to
 *    create fresh nodes for them on each re-render;
 * 2. Completely skip them in the patching process.
 */
function optimize (root, options) {
  if (!root) { return }
  isStaticKey = genStaticKeysCached(options.staticKeys || '');
  isPlatformReservedTag = options.isReservedTag || no;
  // first pass: mark all non-static nodes.
  markStatic$1(root);
  // second pass: mark static roots.
  markStaticRoots(root, false);
}

function genStaticKeys$1 (keys) {
  return makeMap(
    'type,tag,attrsList,attrsMap,plain,parent,children,attrs' +
    (keys ? ',' + keys : '')
  )
}

function markStatic$1 (node) {
  node.static = isStatic(node);
  if (node.type === 1) {
    // do not make component slot content static. this avoids
    // 1. components not able to mutate slot nodes
    // 2. static slot content fails for hot-reloading
    if (
      !isPlatformReservedTag(node.tag) &&
      node.tag !== 'slot' &&
      node.attrsMap['inline-template'] == null
    ) {
      return
    }
    for (var i = 0, l = node.children.length; i < l; i++) {
      var child = node.children[i];
      markStatic$1(child);
      if (!child.static) {
        node.static = false;
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        var block = node.ifConditions[i$1].block;
        markStatic$1(block);
        if (!block.static) {
          node.static = false;
        }
      }
    }
  }
}

function markStaticRoots (node, isInFor) {
  if (node.type === 1) {
    if (node.static || node.once) {
      node.staticInFor = isInFor;
    }
    // For a node to qualify as a static root, it should have children that
    // are not just static text. Otherwise the cost of hoisting out will
    // outweigh the benefits and it's better off to just always render it fresh.
    if (node.static && node.children.length && !(
      node.children.length === 1 &&
      node.children[0].type === 3
    )) {
      node.staticRoot = true;
      return
    } else {
      node.staticRoot = false;
    }
    if (node.children) {
      for (var i = 0, l = node.children.length; i < l; i++) {
        markStaticRoots(node.children[i], isInFor || !!node.for);
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        markStaticRoots(node.ifConditions[i$1].block, isInFor);
      }
    }
  }
}

function isStatic (node) {
  if (node.type === 2) { // expression
    return false
  }
  if (node.type === 3) { // text
    return true
  }
  return !!(node.pre || (
    !node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) &&
    Object.keys(node).every(isStaticKey)
  ))
}

function isDirectChildOfTemplateFor (node) {
  while (node.parent) {
    node = node.parent;
    if (node.tag !== 'template') {
      return false
    }
    if (node.for) {
      return true
    }
  }
  return false
}

/*  */

var fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
var simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;

// KeyboardEvent.keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  'delete': [8, 46]
};

// KeyboardEvent.key aliases
var keyNames = {
  // #7880: IE11 and Edge use `Esc` for Escape key name.
  esc: ['Esc', 'Escape'],
  tab: 'Tab',
  enter: 'Enter',
  // #9112: IE11 uses `Spacebar` for Space key name.
  space: [' ', 'Spacebar'],
  // #7806: IE11 uses key names without `Arrow` prefix for arrow keys.
  up: ['Up', 'ArrowUp'],
  left: ['Left', 'ArrowLeft'],
  right: ['Right', 'ArrowRight'],
  down: ['Down', 'ArrowDown'],
  // #9112: IE11 uses `Del` for Delete key name.
  'delete': ['Backspace', 'Delete', 'Del']
};

// #4868: modifiers that prevent the execution of the listener
// need to explicitly return null so that we can determine whether to remove
// the listener for .once
var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };

var modifierCode = {
  stop: '$event.stopPropagation();',
  prevent: '$event.preventDefault();',
  self: genGuard("$event.target !== $event.currentTarget"),
  ctrl: genGuard("!$event.ctrlKey"),
  shift: genGuard("!$event.shiftKey"),
  alt: genGuard("!$event.altKey"),
  meta: genGuard("!$event.metaKey"),
  left: genGuard("'button' in $event && $event.button !== 0"),
  middle: genGuard("'button' in $event && $event.button !== 1"),
  right: genGuard("'button' in $event && $event.button !== 2")
};

function genHandlers (
  events,
  isNative
) {
  var res = isNative ? 'nativeOn:{' : 'on:{';
  for (var name in events) {
    res += "\"" + name + "\":" + (genHandler(name, events[name])) + ",";
  }
  return res.slice(0, -1) + '}'
}

function genHandler (
  name,
  handler
) {
  if (!handler) {
    return 'function(){}'
  }

  if (Array.isArray(handler)) {
    return ("[" + (handler.map(function (handler) { return genHandler(name, handler); }).join(',')) + "]")
  }

  var isMethodPath = simplePathRE.test(handler.value);
  var isFunctionExpression = fnExpRE.test(handler.value);

  if (!handler.modifiers) {
    if (isMethodPath || isFunctionExpression) {
      return handler.value
    }
    return ("function($event){" + (handler.value) + "}") // inline statement
  } else {
    var code = '';
    var genModifierCode = '';
    var keys = [];
    for (var key in handler.modifiers) {
      if (modifierCode[key]) {
        genModifierCode += modifierCode[key];
        // left/right
        if (keyCodes[key]) {
          keys.push(key);
        }
      } else if (key === 'exact') {
        var modifiers = (handler.modifiers);
        genModifierCode += genGuard(
          ['ctrl', 'shift', 'alt', 'meta']
            .filter(function (keyModifier) { return !modifiers[keyModifier]; })
            .map(function (keyModifier) { return ("$event." + keyModifier + "Key"); })
            .join('||')
        );
      } else {
        keys.push(key);
      }
    }
    if (keys.length) {
      code += genKeyFilter(keys);
    }
    // Make sure modifiers like prevent and stop get executed after key filtering
    if (genModifierCode) {
      code += genModifierCode;
    }
    var handlerCode = isMethodPath
      ? ("return " + (handler.value) + "($event)")
      : isFunctionExpression
        ? ("return (" + (handler.value) + ")($event)")
        : handler.value;
    return ("function($event){" + code + handlerCode + "}")
  }
}

function genKeyFilter (keys) {
  return ("if(!('button' in $event)&&" + (keys.map(genFilterCode).join('&&')) + ")return null;")
}

function genFilterCode (key) {
  var keyVal = parseInt(key, 10);
  if (keyVal) {
    return ("$event.keyCode!==" + keyVal)
  }
  var keyCode = keyCodes[key];
  var keyName = keyNames[key];
  return (
    "_k($event.keyCode," +
    (JSON.stringify(key)) + "," +
    (JSON.stringify(keyCode)) + "," +
    "$event.key," +
    "" + (JSON.stringify(keyName)) +
    ")"
  )
}

/*  */

function on (el, dir) {
  if ( true && dir.modifiers) {
    warn("v-on without argument does not support modifiers.");
  }
  el.wrapListeners = function (code) { return ("_g(" + code + "," + (dir.value) + ")"); };
}

/*  */

function bind$1 (el, dir) {
  el.wrapData = function (code) {
    return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")")
  };
}

/*  */

var baseDirectives = {
  on: on,
  bind: bind$1,
  cloak: noop
};

/*  */





var CodegenState = function CodegenState (options) {
  this.options = options;
  this.warn = options.warn || baseWarn;
  this.transforms = pluckModuleFunction(options.modules, 'transformCode');
  this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
  this.directives = extend(extend({}, baseDirectives), options.directives);
  var isReservedTag = options.isReservedTag || no;
  this.maybeComponent = function (el) { return !(isReservedTag(el.tag) && !el.component); };
  this.onceId = 0;
  this.staticRenderFns = [];
  this.pre = false;
};



function generate (
  ast,
  options
) {
  var state = new CodegenState(options);
  var code = ast ? genElement(ast, state) : '_c("div")';
  return {
    render: ("with(this){return " + code + "}"),
    staticRenderFns: state.staticRenderFns
  }
}

function genElement (el, state) {
  if (el.parent) {
    el.pre = el.pre || el.parent.pre;
  }

  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state)
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el, state)
  } else if (el.for && !el.forProcessed) {
    return genFor(el, state)
  } else if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.tag === 'template' && !el.slotTarget && !state.pre) {
    return genChildren(el, state) || 'void 0'
  } else if (el.tag === 'slot') {
    return genSlot(el, state)
  } else {
    // component or element
    var code;
    if (el.component) {
      code = genComponent(el.component, el, state);
    } else {
      var data;
      if (!el.plain || (el.pre && state.maybeComponent(el))) {
        data = genData$2(el, state);
      }

      var children = el.inlineTemplate ? null : genChildren(el, state, true);
      code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
    }
    // module transforms
    for (var i = 0; i < state.transforms.length; i++) {
      code = state.transforms[i](el, code);
    }
    return code
  }
}

// hoist static sub-trees out
function genStatic (el, state) {
  el.staticProcessed = true;
  // Some elements (templates) need to behave differently inside of a v-pre
  // node.  All pre nodes are static roots, so we can use this as a location to
  // wrap a state change and reset it upon exiting the pre node.
  var originalPreState = state.pre;
  if (el.pre) {
    state.pre = el.pre;
  }
  state.staticRenderFns.push(("with(this){return " + (genElement(el, state)) + "}"));
  state.pre = originalPreState;
  return ("_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
}

// v-once
function genOnce (el, state) {
  el.onceProcessed = true;
  if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.staticInFor) {
    var key = '';
    var parent = el.parent;
    while (parent) {
      if (parent.for) {
        key = parent.key;
        break
      }
      parent = parent.parent;
    }
    if (!key) {
       true && state.warn(
        "v-once can only be used inside v-for that is keyed. "
      );
      return genElement(el, state)
    }
    return ("_o(" + (genElement(el, state)) + "," + (state.onceId++) + "," + key + ")")
  } else {
    return genStatic(el, state)
  }
}

function genIf (
  el,
  state,
  altGen,
  altEmpty
) {
  el.ifProcessed = true; // avoid recursion
  return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty)
}

function genIfConditions (
  conditions,
  state,
  altGen,
  altEmpty
) {
  if (!conditions.length) {
    return altEmpty || '_e()'
  }

  var condition = conditions.shift();
  if (condition.exp) {
    return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions, state, altGen, altEmpty)))
  } else {
    return ("" + (genTernaryExp(condition.block)))
  }

  // v-if with v-once should generate code like (a)?_m(0):_m(1)
  function genTernaryExp (el) {
    return altGen
      ? altGen(el, state)
      : el.once
        ? genOnce(el, state)
        : genElement(el, state)
  }
}

function genFor (
  el,
  state,
  altGen,
  altHelper
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';

  if ( true &&
    state.maybeComponent(el) &&
    el.tag !== 'slot' &&
    el.tag !== 'template' &&
    !el.key
  ) {
    state.warn(
      "<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
      "v-for should have explicit keys. " +
      "See https://vuejs.org/guide/list.html#key for more info.",
      true /* tip */
    );
  }

  el.forProcessed = true; // avoid recursion
  return (altHelper || '_l') + "((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + ((altGen || genElement)(el, state)) +
    '})'
}

function genData$2 (el, state) {
  var data = '{';

  // directives first.
  // directives may mutate the el's other properties before they are generated.
  var dirs = genDirectives(el, state);
  if (dirs) { data += dirs + ','; }

  // key
  if (el.key) {
    data += "key:" + (el.key) + ",";
  }
  // ref
  if (el.ref) {
    data += "ref:" + (el.ref) + ",";
  }
  if (el.refInFor) {
    data += "refInFor:true,";
  }
  // pre
  if (el.pre) {
    data += "pre:true,";
  }
  // record original tag name for components using "is" attribute
  if (el.component) {
    data += "tag:\"" + (el.tag) + "\",";
  }
  // module data generation functions
  for (var i = 0; i < state.dataGenFns.length; i++) {
    data += state.dataGenFns[i](el);
  }
  // attributes
  if (el.attrs) {
    data += "attrs:{" + (genProps(el.attrs)) + "},";
  }
  // DOM props
  if (el.props) {
    data += "domProps:{" + (genProps(el.props)) + "},";
  }
  // event handlers
  if (el.events) {
    data += (genHandlers(el.events, false)) + ",";
  }
  if (el.nativeEvents) {
    data += (genHandlers(el.nativeEvents, true)) + ",";
  }
  // slot target
  // only for non-scoped slots
  if (el.slotTarget && !el.slotScope) {
    data += "slot:" + (el.slotTarget) + ",";
  }
  // scoped slots
  if (el.scopedSlots) {
    data += (genScopedSlots(el.scopedSlots, state)) + ",";
  }
  // component v-model
  if (el.model) {
    data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
  }
  // inline-template
  if (el.inlineTemplate) {
    var inlineTemplate = genInlineTemplate(el, state);
    if (inlineTemplate) {
      data += inlineTemplate + ",";
    }
  }
  data = data.replace(/,$/, '') + '}';
  // v-bind data wrap
  if (el.wrapData) {
    data = el.wrapData(data);
  }
  // v-on data wrap
  if (el.wrapListeners) {
    data = el.wrapListeners(data);
  }
  return data
}

function genDirectives (el, state) {
  var dirs = el.directives;
  if (!dirs) { return }
  var res = 'directives:[';
  var hasRuntime = false;
  var i, l, dir, needRuntime;
  for (i = 0, l = dirs.length; i < l; i++) {
    dir = dirs[i];
    needRuntime = true;
    var gen = state.directives[dir.name];
    if (gen) {
      // compile-time directive that manipulates AST.
      // returns true if it also needs a runtime counterpart.
      needRuntime = !!gen(el, dir, state.warn);
    }
    if (needRuntime) {
      hasRuntime = true;
      res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:\"" + (dir.arg) + "\"") : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
    }
  }
  if (hasRuntime) {
    return res.slice(0, -1) + ']'
  }
}

function genInlineTemplate (el, state) {
  var ast = el.children[0];
  if ( true && (
    el.children.length !== 1 || ast.type !== 1
  )) {
    state.warn('Inline-template components must have exactly one child element.');
  }
  if (ast.type === 1) {
    var inlineRenderFns = generate(ast, state.options);
    return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
  }
}

function genScopedSlots (
  slots,
  state
) {
  return ("scopedSlots:_u([" + (Object.keys(slots).map(function (key) {
      return genScopedSlot(key, slots[key], state)
    }).join(',')) + "])")
}

function genScopedSlot (
  key,
  el,
  state
) {
  if (el.for && !el.forProcessed) {
    return genForScopedSlot(key, el, state)
  }
  var fn = "function(" + (String(el.slotScope)) + "){" +
    "return " + (el.tag === 'template'
      ? el.if
        ? ("(" + (el.if) + ")?" + (genChildren(el, state) || 'undefined') + ":undefined")
        : genChildren(el, state) || 'undefined'
      : genElement(el, state)) + "}";
  return ("{key:" + key + ",fn:" + fn + "}")
}

function genForScopedSlot (
  key,
  el,
  state
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';
  el.forProcessed = true; // avoid recursion
  return "_l((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + (genScopedSlot(key, el, state)) +
    '})'
}

function genChildren (
  el,
  state,
  checkSkip,
  altGenElement,
  altGenNode
) {
  var children = el.children;
  if (children.length) {
    var el$1 = children[0];
    // optimize single v-for
    if (children.length === 1 &&
      el$1.for &&
      el$1.tag !== 'template' &&
      el$1.tag !== 'slot'
    ) {
      var normalizationType = checkSkip
        ? state.maybeComponent(el$1) ? ",1" : ",0"
        : "";
      return ("" + ((altGenElement || genElement)(el$1, state)) + normalizationType)
    }
    var normalizationType$1 = checkSkip
      ? getNormalizationType(children, state.maybeComponent)
      : 0;
    var gen = altGenNode || genNode;
    return ("[" + (children.map(function (c) { return gen(c, state); }).join(',')) + "]" + (normalizationType$1 ? ("," + normalizationType$1) : ''))
  }
}

// determine the normalization needed for the children array.
// 0: no normalization needed
// 1: simple normalization needed (possible 1-level deep nested array)
// 2: full normalization needed
function getNormalizationType (
  children,
  maybeComponent
) {
  var res = 0;
  for (var i = 0; i < children.length; i++) {
    var el = children[i];
    if (el.type !== 1) {
      continue
    }
    if (needsNormalization(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
      res = 2;
      break
    }
    if (maybeComponent(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
      res = 1;
    }
  }
  return res
}

function needsNormalization (el) {
  return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
}

function genNode (node, state) {
  if (node.type === 1) {
    return genElement(node, state)
  } else if (node.type === 3 && node.isComment) {
    return genComment(node)
  } else {
    return genText(node)
  }
}

function genText (text) {
  return ("_v(" + (text.type === 2
    ? text.expression // no need for () because already wrapped in _s()
    : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
}

function genComment (comment) {
  return ("_e(" + (JSON.stringify(comment.text)) + ")")
}

function genSlot (el, state) {
  var slotName = el.slotName || '"default"';
  var children = genChildren(el, state);
  var res = "_t(" + slotName + (children ? ("," + children) : '');
  var attrs = el.attrs && ("{" + (el.attrs.map(function (a) { return ((camelize(a.name)) + ":" + (a.value)); }).join(',')) + "}");
  var bind$$1 = el.attrsMap['v-bind'];
  if ((attrs || bind$$1) && !children) {
    res += ",null";
  }
  if (attrs) {
    res += "," + attrs;
  }
  if (bind$$1) {
    res += (attrs ? '' : ',null') + "," + bind$$1;
  }
  return res + ')'
}

// componentName is el.component, take it as argument to shun flow's pessimistic refinement
function genComponent (
  componentName,
  el,
  state
) {
  var children = el.inlineTemplate ? null : genChildren(el, state, true);
  return ("_c(" + componentName + "," + (genData$2(el, state)) + (children ? ("," + children) : '') + ")")
}

function genProps (props) {
  var res = '';
  for (var i = 0; i < props.length; i++) {
    var prop = props[i];
    /* istanbul ignore if */
    {
      res += "\"" + (prop.name) + "\":" + (transformSpecialNewlines(prop.value)) + ",";
    }
  }
  return res.slice(0, -1)
}

// #3895, #4268
function transformSpecialNewlines (text) {
  return text
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
}

/*  */

// these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed
var prohibitedKeywordRE = new RegExp('\\b' + (
  'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
  'super,throw,while,yield,delete,export,import,return,switch,default,' +
  'extends,finally,continue,debugger,function,arguments'
).split(',').join('\\b|\\b') + '\\b');

// these unary operators should not be used as property/method names
var unaryOperatorsRE = new RegExp('\\b' + (
  'delete,typeof,void'
).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

// strip strings in expressions
var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

// detect problematic expressions in a template
function detectErrors (ast) {
  var errors = [];
  if (ast) {
    checkNode(ast, errors);
  }
  return errors
}

function checkNode (node, errors) {
  if (node.type === 1) {
    for (var name in node.attrsMap) {
      if (dirRE.test(name)) {
        var value = node.attrsMap[name];
        if (value) {
          if (name === 'v-for') {
            checkFor(node, ("v-for=\"" + value + "\""), errors);
          } else if (onRE.test(name)) {
            checkEvent(value, (name + "=\"" + value + "\""), errors);
          } else {
            checkExpression(value, (name + "=\"" + value + "\""), errors);
          }
        }
      }
    }
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        checkNode(node.children[i], errors);
      }
    }
  } else if (node.type === 2) {
    checkExpression(node.expression, node.text, errors);
  }
}

function checkEvent (exp, text, errors) {
  var stipped = exp.replace(stripStringRE, '');
  var keywordMatch = stipped.match(unaryOperatorsRE);
  if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== '$') {
    errors.push(
      "avoid using JavaScript unary operator as property name: " +
      "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim())
    );
  }
  checkExpression(exp, text, errors);
}

function checkFor (node, text, errors) {
  checkExpression(node.for || '', text, errors);
  checkIdentifier(node.alias, 'v-for alias', text, errors);
  checkIdentifier(node.iterator1, 'v-for iterator', text, errors);
  checkIdentifier(node.iterator2, 'v-for iterator', text, errors);
}

function checkIdentifier (
  ident,
  type,
  text,
  errors
) {
  if (typeof ident === 'string') {
    try {
      new Function(("var " + ident + "=_"));
    } catch (e) {
      errors.push(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())));
    }
  }
}

function checkExpression (exp, text, errors) {
  try {
    new Function(("return " + exp));
  } catch (e) {
    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
    if (keywordMatch) {
      errors.push(
        "avoid using JavaScript keyword as property name: " +
        "\"" + (keywordMatch[0]) + "\"\n  Raw expression: " + (text.trim())
      );
    } else {
      errors.push(
        "invalid expression: " + (e.message) + " in\n\n" +
        "    " + exp + "\n\n" +
        "  Raw expression: " + (text.trim()) + "\n"
      );
    }
  }
}

/*  */



function createFunction (code, errors) {
  try {
    return new Function(code)
  } catch (err) {
    errors.push({ err: err, code: code });
    return noop
  }
}

function createCompileToFunctionFn (compile) {
  var cache = Object.create(null);

  return function compileToFunctions (
    template,
    options,
    vm
  ) {
    options = extend({}, options);
    var warn$$1 = options.warn || warn;
    delete options.warn;

    /* istanbul ignore if */
    if (true) {
      // detect possible CSP restriction
      try {
        new Function('return 1');
      } catch (e) {
        if (e.toString().match(/unsafe-eval|CSP/)) {
          warn$$1(
            'It seems you are using the standalone build of Vue.js in an ' +
            'environment with Content Security Policy that prohibits unsafe-eval. ' +
            'The template compiler cannot work in this environment. Consider ' +
            'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
            'templates into render functions.'
          );
        }
      }
    }

    // check cache
    var key = options.delimiters
      ? String(options.delimiters) + template
      : template;
    if (cache[key]) {
      return cache[key]
    }

    // compile
    var compiled = compile(template, options);

    // check compilation errors/tips
    if (true) {
      if (compiled.errors && compiled.errors.length) {
        warn$$1(
          "Error compiling template:\n\n" + template + "\n\n" +
          compiled.errors.map(function (e) { return ("- " + e); }).join('\n') + '\n',
          vm
        );
      }
      if (compiled.tips && compiled.tips.length) {
        compiled.tips.forEach(function (msg) { return tip(msg, vm); });
      }
    }

    // turn code into functions
    var res = {};
    var fnGenErrors = [];
    res.render = createFunction(compiled.render, fnGenErrors);
    res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
      return createFunction(code, fnGenErrors)
    });

    // check function generation errors.
    // this should only happen if there is a bug in the compiler itself.
    // mostly for codegen development use
    /* istanbul ignore if */
    if (true) {
      if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
        warn$$1(
          "Failed to generate render function:\n\n" +
          fnGenErrors.map(function (ref) {
            var err = ref.err;
            var code = ref.code;

            return ((err.toString()) + " in\n\n" + code + "\n");
        }).join('\n'),
          vm
        );
      }
    }

    return (cache[key] = res)
  }
}

/*  */

function createCompilerCreator (baseCompile) {
  return function createCompiler (baseOptions) {
    function compile (
      template,
      options
    ) {
      var finalOptions = Object.create(baseOptions);
      var errors = [];
      var tips = [];
      finalOptions.warn = function (msg, tip) {
        (tip ? tips : errors).push(msg);
      };

      if (options) {
        // merge custom modules
        if (options.modules) {
          finalOptions.modules =
            (baseOptions.modules || []).concat(options.modules);
        }
        // merge custom directives
        if (options.directives) {
          finalOptions.directives = extend(
            Object.create(baseOptions.directives || null),
            options.directives
          );
        }
        // copy other options
        for (var key in options) {
          if (key !== 'modules' && key !== 'directives') {
            finalOptions[key] = options[key];
          }
        }
      }

      var compiled = baseCompile(template, finalOptions);
      if (true) {
        errors.push.apply(errors, detectErrors(compiled.ast));
      }
      compiled.errors = errors;
      compiled.tips = tips;
      return compiled
    }

    return {
      compile: compile,
      compileToFunctions: createCompileToFunctionFn(compile)
    }
  }
}

/*  */

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
var createCompiler = createCompilerCreator(function baseCompile (
  template,
  options
) {
  var ast = parse(template.trim(), options);
  if (options.optimize !== false) {
    optimize(ast, options);
  }
  var code = generate(ast, options);
  return {
    ast: ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
});

/*  */

var ref$1 = createCompiler(baseOptions);
var compile = ref$1.compile;
var compileToFunctions = ref$1.compileToFunctions;

/*  */

// check whether current browser encodes a char inside attribute values
var div;
function getShouldDecode (href) {
  div = div || document.createElement('div');
  div.innerHTML = href ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>";
  return div.innerHTML.indexOf('&#10;') > 0
}

// #3663: IE encodes newlines inside attribute values while other browsers don't
var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
// #6828: chrome encodes content in a[href]
var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;

/*  */

var idToTemplate = cached(function (id) {
  var el = query(id);
  return el && el.innerHTML
});

var mount = Vue.prototype.$mount;
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && query(el);

  /* istanbul ignore if */
  if (el === document.body || el === document.documentElement) {
     true && warn(
      "Do not mount Vue to <html> or <body> - mount to normal elements instead."
    );
    return this
  }

  var options = this.$options;
  // resolve template/el and convert to render function
  if (!options.render) {
    var template = options.template;
    if (template) {
      if (typeof template === 'string') {
        if (template.charAt(0) === '#') {
          template = idToTemplate(template);
          /* istanbul ignore if */
          if ( true && !template) {
            warn(
              ("Template element not found or is empty: " + (options.template)),
              this
            );
          }
        }
      } else if (template.nodeType) {
        template = template.innerHTML;
      } else {
        if (true) {
          warn('invalid template option:' + template, this);
        }
        return this
      }
    } else if (el) {
      template = getOuterHTML(el);
    }
    if (template) {
      /* istanbul ignore if */
      if ( true && config.performance && mark) {
        mark('compile');
      }

      var ref = compileToFunctions(template, {
        shouldDecodeNewlines: shouldDecodeNewlines,
        shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
        delimiters: options.delimiters,
        comments: options.comments
      }, this);
      var render = ref.render;
      var staticRenderFns = ref.staticRenderFns;
      options.render = render;
      options.staticRenderFns = staticRenderFns;

      /* istanbul ignore if */
      if ( true && config.performance && mark) {
        mark('compile end');
        measure(("vue " + (this._name) + " compile"), 'compile', 'compile end');
      }
    }
  }
  return mount.call(this, el, hydrating)
};

/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 */
function getOuterHTML (el) {
  if (el.outerHTML) {
    return el.outerHTML
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML
  }
}

Vue.compile = compileToFunctions;

module.exports = Vue;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17), __webpack_require__(31).setImmediate))

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(67);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17)))

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = __webpack_require__(30);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _vue2.default();
module.exports = exports['default'];

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SlideoutPanel = __webpack_require__(34);

var _SlideoutPanel2 = _interopRequireDefault(_SlideoutPanel);

var _service = __webpack_require__(70);

var _service2 = _interopRequireDefault(_service);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (typeof window !== 'undefined' && window.Vue) {
  if (window.vue2PanelDebug) {
    console.log('installing Vue js plugin - browser');
  }

  window.Vue.use({
    install: function install(NewVue) {
      NewVue.component('slideout-panel', _SlideoutPanel2.default);
      NewVue.prototype.$showPanel = _service2.default.showPanel;
      NewVue.prototype.$showPanelStack = _service2.default.showPanelStack;
      NewVue.prototype.$hideAllPanels = _service2.default.hideAllPanels;
      NewVue.prototype.$setPanelDefaults = _service2.default.setPanelDefaults;
    }
  });

  window.vueSlideoutPanelService = _service2.default;
}

exports.default = {
  install: function install(NewVue) {
    NewVue.component('slideout-panel', _SlideoutPanel2.default);
    NewVue.prototype.$showPanel = _service2.default.showPanel;
    NewVue.prototype.$showPanelStack = _service2.default.showPanelStack;
    NewVue.prototype.$hideAllPanels = _service2.default.hideAllPanels;
    NewVue.prototype.$setPanelDefaults = _service2.default.setPanelDefaults;
  },
  VueSlideoutPanel: _SlideoutPanel2.default,
  vueSlideoutPanelService: _service2.default
};
module.exports = exports['default'];

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(35)

var Component = __webpack_require__(40)(
  /* script */
  __webpack_require__(41),
  /* template */
  __webpack_require__(69),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(36);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(38)("081f8195", content, true, {});

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(37)(false);
// imports


// module
exports.push([module.i, ".slideout-panel-open{overflow:hidden}.slideout-panel{display:block;transition:opacity .15s}.slideout-panel .slideout-panel-bg{position:fixed;z-index:1000;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.5);transition:opacity .3s ease;overflow-y:hidden;z-index:100}.slideout-panel .slideout-panel-bg.transparent{background-color:transparent}.slideout-panel .slideout-panel-bg.fadeIn-enter{opacity:0}.slideout-panel .slideout-panel-bg.fadeIn-enter-to,.slideout-panel .slideout-panel-bg.fadeIn-leave{opacity:1}.slideout-panel .slideout-panel-bg.fadeIn-leave-to{opacity:0}.slideout-panel .slideout-panel-bg.fadeIn-leave-active{transition-delay:.4s}.slideout-panel .slideout-wrapper{position:static}.slideout-panel .slideout-wrapper .slideout{height:100%;position:fixed;top:0;bottom:0;background:#fff;transition:transform .18s ease-out;overflow-y:auto;transition-delay:.2s}.slideout-panel .slideout-wrapper .slideout.open-on-left{right:auto;left:0}.slideout-panel .slideout-wrapper .slideout.open-on-left.slideIn-enter{transform:translateX(-100%)}.slideout-panel .slideout-wrapper .slideout.open-on-left.slideIn-enter-to,.slideout-panel .slideout-wrapper .slideout.open-on-left.slideIn-leave{transform:translateX(0)}.slideout-panel .slideout-wrapper .slideout.open-on-left.slideIn-leave-to{transform:translateX(-100%)}.slideout-panel .slideout-wrapper .slideout.open-on-left.slideIn-leave-active{transition-delay:0}.slideout-panel .slideout-wrapper .slideout.open-on-top{right:0;left:0;bottom:auto;top:0}.slideout-panel .slideout-wrapper .slideout.open-on-top.slideIn-enter{transform:translateY(-100%)}.slideout-panel .slideout-wrapper .slideout.open-on-top.slideIn-enter-to,.slideout-panel .slideout-wrapper .slideout.open-on-top.slideIn-leave{transform:translateY(0)}.slideout-panel .slideout-wrapper .slideout.open-on-top.slideIn-leave-to{transform:translateY(-100%)}.slideout-panel .slideout-wrapper .slideout.open-on-top.slideIn-leave-active{transition-delay:0}.slideout-panel .slideout-wrapper .slideout.open-on-bottom{right:0;left:0;bottom:0;top:auto}.slideout-panel .slideout-wrapper .slideout.open-on-bottom.slideIn-enter{transform:translateY(100%)}.slideout-panel .slideout-wrapper .slideout.open-on-bottom.slideIn-enter-to,.slideout-panel .slideout-wrapper .slideout.open-on-bottom.slideIn-leave{transform:translateY(0)}.slideout-panel .slideout-wrapper .slideout.open-on-bottom.slideIn-leave-to{transform:translateY(100%)}.slideout-panel .slideout-wrapper .slideout.open-on-bottom.slideIn-leave-active{transition-delay:0}.slideout-panel .slideout-wrapper .slideout.open-on-right{right:0;left:auto}.slideout-panel .slideout-wrapper .slideout.open-on-right.slideIn-enter{transform:translateX(100%)}.slideout-panel .slideout-wrapper .slideout.open-on-right.slideIn-enter-to,.slideout-panel .slideout-wrapper .slideout.open-on-right.slideIn-leave{transform:translateX(0)}.slideout-panel .slideout-wrapper .slideout.open-on-right.slideIn-leave-to{transform:translateX(100%)}", ""]);

// exports


/***/ }),
/* 37 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(39)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 39 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 40 */
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(42);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _vue = __webpack_require__(30);

var _vue2 = _interopRequireDefault(_vue);

var _eventBus = __webpack_require__(32);

var _eventBus2 = _interopRequireDefault(_eventBus);

var _domUtils = __webpack_require__(68);

var _domUtils2 = _interopRequireDefault(_domUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isString(val) {
  return typeof val === 'string';
}

var Z_INDEX_BASE = 100;

var vm = {
  name: 'slideout-panel',
  components: {},
  data: function data() {
    return {
      panels: []
    };
  },

  computed: {
    panelsVisible: function panelsVisible() {
      return this.panels.filter(function (panel) {
        return panel.visible;
      }).length;
    },
    panelBgVisible: function panelBgVisible() {
      return this.panels.filter(function (panel) {
        return panel.hideBg;
      }).length === 0;
    },
    panelBgRemoved: function panelBgRemoved() {
      return this.panels.filter(function (panel) {
        return panel.removeBg;
      }).length > 0;
    },
    panelTopVisibleZIndex: function panelTopVisibleZIndex() {
      var visiblePanels = this.panels.filter(function (panel) {
        return panel.visible;
      });

      return visiblePanels.length > 0 ? Math.max.apply(Math, (0, _toConsumableArray3.default)(visiblePanels.map(function (panel) {
        return panel.styles['z-index'];
      }))) : Z_INDEX_BASE;
    }
  },
  methods: {
    getPanelClasses: function getPanelClasses(panel) {
      var panelClasses = {};

      if (panel.openOn === 'left') {
        panelClasses['open-on-left'] = true;
      } else if (panel.openOn === 'bottom') {
        panelClasses['open-on-bottom'] = true;
      } else if (panel.openOn === 'top') {
        panelClasses['open-on-top'] = true;
      } else {
        panelClasses['open-on-right'] = true;
      }

      if (panel.cssClass) {
        panelClasses[panel.cssClass] = true;
      }

      return panelClasses;
    },
    closeCurrentPanel: function closeCurrentPanel(data) {
      if (!this.panels || !this.panels.length) return;

      var currentPanel = this.panels[this.panels.length - 1];

      this.closePanel(currentPanel, data);
    },
    closePanel: function closePanel(panel, data) {
      var _this = this;

      if (!panel) throw new Error('panel');

      _eventBus2.default.$emit('hideSlideOutPanel-' + panel.id, {
        id: panel.id,
        data: data
      });

      panel.visible = false;

      if (!this.panelsVisible) {
        this.removeBodyClass();
      }

      setTimeout(function () {
        if (!panel.keepAlive) {
          var index = _this.panels.indexOf(panel);

          _this.removePanelStylesheet(panel);

          _this.panels.splice(index, 1);
        }
      }, 300);
    },
    onShowSlideOutPanel: function onShowSlideOutPanel(panel) {
      var existingPanel = this.panels.filter(function (p) {
        return p.id === panel.id;
      })[0];

      if (existingPanel) {
        existingPanel.props = panel.props;
        panel = existingPanel;
      }

      panel.styles = {
        'z-index': this.panels.length + Z_INDEX_BASE
      };

      if (panel.openOn === 'top' || panel.openOn === 'bottom') {
        panel.styles.width === '100%';

        if (!panel.height) {
          panel.styles.height = '900px';
        } else if (!panel.height.endsWith || !panel.height.endsWith('px')) {
          panel.styles.height = panel.height + 'px';
        } else {
          panel.styles.height = panel.height;
        }
      } else {
        panel.styles.height === '100%';

        if (!panel.width) {
          panel.styles.width = '900px';
        } else if (!panel.width.endsWith || !panel.width.endsWith('px')) {
          panel.styles.width = panel.width + 'px';
        } else {
          panel.styles.width = panel.width;
        }
      }

      panel.visible = true;
      panel.cssId = 'slide-out-panel-' + panel.id;
      panel.stylesheetId = 'slide-out-panel-styles-' + panel.id;
      panel.inlineComponent = !isString(panel.component);
      panel.componentName = isString(panel.component) ? panel.component : panel.component.name;

      if (window.vue2PanelDebug) {
        console.log('panel', panel);
      }

      if (!existingPanel) {
        this.createPanelStylesheet(panel);

        this.panels.push(panel);
      }

      this.addBodyClass();
    },
    onHideSlideOutPanel: function onHideSlideOutPanel(panel) {
      this.closeCurrentPanel(panel);
    },
    onHideAllSideOutPanels: function onHideAllSideOutPanels() {
      var _this2 = this;

      (this.panels || []).reverse().forEach(function (panel) {
        _this2.closePanel(panel);
      });
    },
    createPanelStylesheet: function createPanelStylesheet(panel) {
      var head = document.head || document.getElementsByTagName('head')[0];
      var style = document.createElement('style');
      style.type = 'text/css';

      var css = '@media screen and (max-width:' + panel.styles.width + ') {\n        #' + panel.cssId + ' {\n          width: 100% !important;\n        }\n      }';

      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }

      style.id = panel.stylesheetId;

      head.appendChild(style);
    },
    removePanelStylesheet: function removePanelStylesheet(panel) {
      var stylesheetElements = document.querySelectorAll('link[rel=stylesheet]');

      var stylesheet = document.getElementById(panel.stylesheetId);

      for (var index = 0; index < stylesheetElements.length; index++) {
        var sheet = stylesheetElements[index];

        try {
          sheet.parentNode.removeChild(stylesheet);
        } catch (err) {}
      }
    },
    addBodyClass: function addBodyClass() {
      _domUtils2.default.addClass(document.body, 'slideout-panel-open');
    },
    removeBodyClass: function removeBodyClass() {
      _domUtils2.default.removeClass(document.body, 'slideout-panel-open');
    },
    onBgClicked: function onBgClicked() {
      var currentPanel = this.panels[this.panels.length - 1];

      if (!currentPanel || currentPanel.disableBgClick) {
        return;
      }

      this.closeCurrentPanel({
        closedBy: 'bg'
      });
    },
    onEscapeKeypress: function onEscapeKeypress(e) {
      if (e.keyCode === 27) {
        var currentPanel = this.panels[this.panels.length - 1];

        if (!currentPanel || currentPanel.disableEscClick) {
          return;
        }

        this.closeCurrentPanel({
          closedBy: 'esc'
        });
      }
    }
  },
  created: function created() {
    document.addEventListener('keydown', this.onEscapeKeypress);

    _eventBus2.default.$on('showSlideOutPanel', this.onShowSlideOutPanel);
    _eventBus2.default.$on('hideSlideOutPanel', this.onHideSlideOutPanel);
    _eventBus2.default.$on('hideAllSlideOutPanels', this.onHideAllSideOutPanels);
  },
  destroyed: function destroyed() {
    document.removeEventListener('keydown', this.onEscapeKeypress);

    _eventBus2.default.$off('showSlideOutPanel', this.onShowSlideOutPanel);
    _eventBus2.default.$off('hideSlideOutPanel', this.onHideSlideOutPanel);
    _eventBus2.default.$off('hideAllSlideOutPanels', this.onHideAllSideOutPanels);
  }
};

exports.default = vm;
module.exports = exports['default'];

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(43);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(44), __esModule: true };

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(45);
__webpack_require__(60);
module.exports = __webpack_require__(1).Array.from;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(46)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(47)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(9);
var defined = __webpack_require__(10);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(18);
var $export = __webpack_require__(5);
var redefine = __webpack_require__(51);
var hide = __webpack_require__(6);
var Iterators = __webpack_require__(14);
var $iterCreate = __webpack_require__(52);
var setToStringTag = __webpack_require__(29);
var getPrototypeOf = __webpack_require__(59);
var ITERATOR = __webpack_require__(0)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(4) && !__webpack_require__(12)(function () {
  return Object.defineProperty(__webpack_require__(20)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(11);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(53);
var descriptor = __webpack_require__(13);
var setToStringTag = __webpack_require__(29);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(6)(IteratorPrototype, __webpack_require__(0)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(7);
var dPs = __webpack_require__(54);
var enumBugKeys = __webpack_require__(28);
var IE_PROTO = __webpack_require__(15)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(20)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(58).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(3);
var anObject = __webpack_require__(7);
var getKeys = __webpack_require__(21);

module.exports = __webpack_require__(4) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(8);
var toIObject = __webpack_require__(22);
var arrayIndexOf = __webpack_require__(56)(false);
var IE_PROTO = __webpack_require__(15)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(22);
var toLength = __webpack_require__(25);
var toAbsoluteIndex = __webpack_require__(57);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(9);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(2).document;
module.exports = document && document.documentElement;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(8);
var toObject = __webpack_require__(16);
var IE_PROTO = __webpack_require__(15)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(19);
var $export = __webpack_require__(5);
var toObject = __webpack_require__(16);
var call = __webpack_require__(61);
var isArrayIter = __webpack_require__(62);
var toLength = __webpack_require__(25);
var createProperty = __webpack_require__(63);
var getIterFn = __webpack_require__(64);

$export($export.S + $export.F * !__webpack_require__(66)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(7);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(14);
var ITERATOR = __webpack_require__(0)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(3);
var createDesc = __webpack_require__(13);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(65);
var ITERATOR = __webpack_require__(0)('iterator');
var Iterators = __webpack_require__(14);
module.exports = __webpack_require__(1).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(24);
var TAG = __webpack_require__(0)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(0)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17)))

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function addClass(element, className) {
  element.classList.remove(className);
  element.classList.add(className);
}

function removeClass(element, className) {
  element.classList.remove(className);
}

exports.default = {
  addClass: addClass,
  removeClass: removeClass
};
module.exports = exports["default"];

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "fadeIn"
    }
  }, [_c('div', {
    staticClass: "slideout-panel clearfix"
  }, [_c('transition', {
    attrs: {
      "name": "fadeIn"
    }
  }, [(_vm.panelsVisible && !_vm.panelBgRemoved) ? _c('div', {
    staticClass: "slideout-panel-bg",
    class: {
      'transparent': !_vm.panelBgVisible
    },
    style: ({
      'z-index': _vm.panelTopVisibleZIndex
    }),
    on: {
      "click": _vm.onBgClicked
    }
  }) : _vm._e()]), _vm._v(" "), _c('transition-group', {
    staticClass: "slideout-wrapper",
    attrs: {
      "tag": "div",
      "name": "slideIn"
    }
  }, _vm._l((_vm.panels), function(panel) {
    return _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (panel.visible),
        expression: "panel.visible"
      }],
      key: panel.id,
      staticClass: "slideout",
      class: _vm.getPanelClasses(panel),
      style: (panel.styles),
      attrs: {
        "id": panel.cssId
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
        }
      }
    }, [_c('keep-alive', {
      attrs: {
        "include": [panel.keepAlive ? panel.componentName : '']
      }
    }, [_c(panel.inlineComponent ? panel.component : panel.componentName, _vm._b({
      tag: "component",
      on: {
        "closePanel": function($event) {
          _vm.closePanel(panel, $event)
        }
      }
    }, 'component', panel.props || {}, false))], 1)], 1)
  }), 0)], 1)])
},staticRenderFns: []}

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(71);

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(77);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(78);

var _createClass3 = _interopRequireDefault(_createClass2);

var _promisePolyfill = __webpack_require__(82);

var _promisePolyfill2 = _interopRequireDefault(_promisePolyfill);

var _eventBus = __webpack_require__(32);

var _eventBus2 = _interopRequireDefault(_eventBus);

var _utils = __webpack_require__(84);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PANEL_DEFAULTS = {};

var PanelResult = function () {
  function PanelResult(id, promise, panelOptions) {
    (0, _classCallCheck3.default)(this, PanelResult);

    if (!id) throw new Error('id');
    if (!promise) throw new Error('promise');
    if (!panelOptions) throw new Error('panelOptions');

    this._id = id;
    this._promise = promise;
    this._panelOptions = panelOptions;
  }

  (0, _createClass3.default)(PanelResult, [{
    key: 'show',
    value: function show() {
      var panel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var panelOptions = (0, _assign2.default)(this._panelOptions, panel);

      return showPanel(panelOptions, this._id);
    }
  }, {
    key: 'hide',
    value: function hide() {
      var panelOptions = (0, _assign2.default)({
        id: this._id
      }, this._panelOptions);

      _eventBus2.default.$emit('hideSlideOutPanel', panelOptions);
    }
  }, {
    key: 'promise',
    get: function get() {
      return this._promise;
    }
  }]);
  return PanelResult;
}();

function showPanel(panelOptions, existingId) {
  if (!panelOptions) throw new Error('panelOptions is required');
  if (!panelOptions.component) throw new Error('panelOptions.component is required');

  var id = existingId || _utils2.default.generateGuid();

  panelOptions = (0, _assign2.default)({}, PANEL_DEFAULTS, panelOptions);

  panelOptions.id = id;
  panelOptions.openOn = panelOptions.openOn || 'left';

  var promise = new _promisePolyfill2.default(function (resolve) {
    _eventBus2.default.$emit('showSlideOutPanel', panelOptions);

    _eventBus2.default.$once('hideSlideOutPanel-' + panelOptions.id, function (payload) {
      return resolve(payload.data);
    });
  });

  return new PanelResult(id, promise, panelOptions);
}

function showPanelStack(panelOptions) {
  var _this = this;

  if (!panelOptions || !panelOptions.length) throw new Error('panelOptions must be an array');

  var panelResults = panelOptions.map(function (panelOption) {
    return showPanel(panelOption, _this._id);
  });

  return panelResults;
}

function hideAllPanels() {
  _eventBus2.default.$emit('hideAllSlideOutPanels');
}

function setPanelDefaults(defaults) {
  if (!defaults) return;

  PANEL_DEFAULTS = defaults;
}

exports.default = {
  showPanel: showPanel,
  showPanelStack: showPanelStack,
  hideAllPanels: hideAllPanels,
  setPanelDefaults: setPanelDefaults
};
module.exports = exports['default'];

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(72), __esModule: true };

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(73);
module.exports = __webpack_require__(1).Object.assign;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(5);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(74) });


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(21);
var gOPS = __webpack_require__(75);
var pIE = __webpack_require__(76);
var toObject = __webpack_require__(16);
var IObject = __webpack_require__(23);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(12)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 75 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 76 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(79);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(80), __esModule: true };

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(81);
var $Object = __webpack_require__(1).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(5);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(4), 'Object', { defineProperty: __webpack_require__(3).f });


/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(setImmediate) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__finally__ = __webpack_require__(83);


// Store setTimeout reference so promise-polyfill will be unaffected by
// other code modifying setTimeout (like sinon.useFakeTimers())
var setTimeoutFunc = setTimeout;

function noop() {}

// Polyfill for Function.prototype.bind
function bind(fn, thisArg) {
  return function() {
    fn.apply(thisArg, arguments);
  };
}

/**
 * @constructor
 * @param {Function} fn
 */
function Promise(fn) {
  if (!(this instanceof Promise))
    throw new TypeError('Promises must be constructed via new');
  if (typeof fn !== 'function') throw new TypeError('not a function');
  /** @type {!number} */
  this._state = 0;
  /** @type {!boolean} */
  this._handled = false;
  /** @type {Promise|undefined} */
  this._value = undefined;
  /** @type {!Array<!Function>} */
  this._deferreds = [];

  doResolve(fn, this);
}

function handle(self, deferred) {
  while (self._state === 3) {
    self = self._value;
  }
  if (self._state === 0) {
    self._deferreds.push(deferred);
    return;
  }
  self._handled = true;
  Promise._immediateFn(function() {
    var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
    if (cb === null) {
      (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
      return;
    }
    var ret;
    try {
      ret = cb(self._value);
    } catch (e) {
      reject(deferred.promise, e);
      return;
    }
    resolve(deferred.promise, ret);
  });
}

function resolve(self, newValue) {
  try {
    // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
    if (newValue === self)
      throw new TypeError('A promise cannot be resolved with itself.');
    if (
      newValue &&
      (typeof newValue === 'object' || typeof newValue === 'function')
    ) {
      var then = newValue.then;
      if (newValue instanceof Promise) {
        self._state = 3;
        self._value = newValue;
        finale(self);
        return;
      } else if (typeof then === 'function') {
        doResolve(bind(then, newValue), self);
        return;
      }
    }
    self._state = 1;
    self._value = newValue;
    finale(self);
  } catch (e) {
    reject(self, e);
  }
}

function reject(self, newValue) {
  self._state = 2;
  self._value = newValue;
  finale(self);
}

function finale(self) {
  if (self._state === 2 && self._deferreds.length === 0) {
    Promise._immediateFn(function() {
      if (!self._handled) {
        Promise._unhandledRejectionFn(self._value);
      }
    });
  }

  for (var i = 0, len = self._deferreds.length; i < len; i++) {
    handle(self, self._deferreds[i]);
  }
  self._deferreds = null;
}

/**
 * @constructor
 */
function Handler(onFulfilled, onRejected, promise) {
  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
  this.promise = promise;
}

/**
 * Take a potentially misbehaving resolver function and make sure
 * onFulfilled and onRejected are only called once.
 *
 * Makes no guarantees about asynchrony.
 */
function doResolve(fn, self) {
  var done = false;
  try {
    fn(
      function(value) {
        if (done) return;
        done = true;
        resolve(self, value);
      },
      function(reason) {
        if (done) return;
        done = true;
        reject(self, reason);
      }
    );
  } catch (ex) {
    if (done) return;
    done = true;
    reject(self, ex);
  }
}

Promise.prototype['catch'] = function(onRejected) {
  return this.then(null, onRejected);
};

Promise.prototype.then = function(onFulfilled, onRejected) {
  // @ts-ignore
  var prom = new this.constructor(noop);

  handle(this, new Handler(onFulfilled, onRejected, prom));
  return prom;
};

Promise.prototype['finally'] = __WEBPACK_IMPORTED_MODULE_0__finally__["a" /* default */];

Promise.all = function(arr) {
  return new Promise(function(resolve, reject) {
    if (!arr || typeof arr.length === 'undefined')
      throw new TypeError('Promise.all accepts an array');
    var args = Array.prototype.slice.call(arr);
    if (args.length === 0) return resolve([]);
    var remaining = args.length;

    function res(i, val) {
      try {
        if (val && (typeof val === 'object' || typeof val === 'function')) {
          var then = val.then;
          if (typeof then === 'function') {
            then.call(
              val,
              function(val) {
                res(i, val);
              },
              reject
            );
            return;
          }
        }
        args[i] = val;
        if (--remaining === 0) {
          resolve(args);
        }
      } catch (ex) {
        reject(ex);
      }
    }

    for (var i = 0; i < args.length; i++) {
      res(i, args[i]);
    }
  });
};

Promise.resolve = function(value) {
  if (value && typeof value === 'object' && value.constructor === Promise) {
    return value;
  }

  return new Promise(function(resolve) {
    resolve(value);
  });
};

Promise.reject = function(value) {
  return new Promise(function(resolve, reject) {
    reject(value);
  });
};

Promise.race = function(values) {
  return new Promise(function(resolve, reject) {
    for (var i = 0, len = values.length; i < len; i++) {
      values[i].then(resolve, reject);
    }
  });
};

// Use polyfill for setImmediate for performance gains
Promise._immediateFn =
  (typeof setImmediate === 'function' &&
    function(fn) {
      setImmediate(fn);
    }) ||
  function(fn) {
    setTimeoutFunc(fn, 0);
  };

Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
  if (typeof console !== 'undefined' && console) {
    console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Promise);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(31).setImmediate))

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * @this {Promise}
 */
function finallyConstructor(callback) {
  var constructor = this.constructor;
  return this.then(
    function(value) {
      return constructor.resolve(callback()).then(function() {
        return value;
      });
    },
    function(reason) {
      return constructor.resolve(callback()).then(function() {
        return constructor.reject(reason);
      });
    }
  );
}

/* harmony default export */ __webpack_exports__["a"] = (finallyConstructor);


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function generateGuid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }

  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

exports.default = {
  generateGuid: generateGuid
};
module.exports = exports['default'];

/***/ })
/******/ ]);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ })

}]);