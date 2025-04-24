/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/webfontloader/webfontloader.js":
/*!*****************************************************!*\
  !*** ./node_modules/webfontloader/webfontloader.js ***!
  \*****************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_RESULT__;/* Web Font Loader v1.6.28 - (c) Adobe Systems, Google. License: Apache 2.0 */(function(){function aa(a,b,c){return a.call.apply(a.bind,arguments)}function ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function p(a,b,c){p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return p.apply(null,arguments)}var q=Date.now||function(){return+new Date};function ca(a,b){this.a=a;this.o=b||a;this.c=this.o.document}var da=!!window.FontFace;function t(a,b,c,d){b=a.c.createElement(b);if(c)for(var e in c)c.hasOwnProperty(e)&&("style"==e?b.style.cssText=c[e]:b.setAttribute(e,c[e]));d&&b.appendChild(a.c.createTextNode(d));return b}function u(a,b,c){a=a.c.getElementsByTagName(b)[0];a||(a=document.documentElement);a.insertBefore(c,a.lastChild)}function v(a){a.parentNode&&a.parentNode.removeChild(a)}
function w(a,b,c){b=b||[];c=c||[];for(var d=a.className.split(/\s+/),e=0;e<b.length;e+=1){for(var f=!1,g=0;g<d.length;g+=1)if(b[e]===d[g]){f=!0;break}f||d.push(b[e])}b=[];for(e=0;e<d.length;e+=1){f=!1;for(g=0;g<c.length;g+=1)if(d[e]===c[g]){f=!0;break}f||b.push(d[e])}a.className=b.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function y(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return!0;return!1}
function ea(a){return a.o.location.hostname||a.a.location.hostname}function z(a,b,c){function d(){m&&e&&f&&(m(g),m=null)}b=t(a,"link",{rel:"stylesheet",href:b,media:"all"});var e=!1,f=!0,g=null,m=c||null;da?(b.onload=function(){e=!0;d()},b.onerror=function(){e=!0;g=Error("Stylesheet failed to load");d()}):setTimeout(function(){e=!0;d()},0);u(a,"head",b)}
function A(a,b,c,d){var e=a.c.getElementsByTagName("head")[0];if(e){var f=t(a,"script",{src:b}),g=!1;f.onload=f.onreadystatechange=function(){g||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(g=!0,c&&c(null),f.onload=f.onreadystatechange=null,"HEAD"==f.parentNode.tagName&&e.removeChild(f))};e.appendChild(f);setTimeout(function(){g||(g=!0,c&&c(Error("Script load timeout")))},d||5E3);return f}return null};function B(){this.a=0;this.c=null}function C(a){a.a++;return function(){a.a--;D(a)}}function E(a,b){a.c=b;D(a)}function D(a){0==a.a&&a.c&&(a.c(),a.c=null)};function F(a){this.a=a||"-"}F.prototype.c=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.a)};function G(a,b){this.c=a;this.f=4;this.a="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.a=c[1],this.f=parseInt(c[2],10))}function fa(a){return H(a)+" "+(a.f+"00")+" 300px "+I(a.c)}function I(a){var b=[];a=a.split(/,\s*/);for(var c=0;c<a.length;c++){var d=a[c].replace(/['"]/g,"");-1!=d.indexOf(" ")||/^\d/.test(d)?b.push("'"+d+"'"):b.push(d)}return b.join(",")}function J(a){return a.a+a.f}function H(a){var b="normal";"o"===a.a?b="oblique":"i"===a.a&&(b="italic");return b}
function ga(a){var b=4,c="n",d=null;a&&((d=a.match(/(normal|oblique|italic)/i))&&d[1]&&(c=d[1].substr(0,1).toLowerCase()),(d=a.match(/([1-9]00|normal|bold)/i))&&d[1]&&(/bold/i.test(d[1])?b=7:/[1-9]00/.test(d[1])&&(b=parseInt(d[1].substr(0,1),10))));return c+b};function ha(a,b){this.c=a;this.f=a.o.document.documentElement;this.h=b;this.a=new F("-");this.j=!1!==b.events;this.g=!1!==b.classes}function ia(a){a.g&&w(a.f,[a.a.c("wf","loading")]);K(a,"loading")}function L(a){if(a.g){var b=y(a.f,a.a.c("wf","active")),c=[],d=[a.a.c("wf","loading")];b||c.push(a.a.c("wf","inactive"));w(a.f,c,d)}K(a,"inactive")}function K(a,b,c){if(a.j&&a.h[b])if(c)a.h[b](c.c,J(c));else a.h[b]()};function ja(){this.c={}}function ka(a,b,c){var d=[],e;for(e in b)if(b.hasOwnProperty(e)){var f=a.c[e];f&&d.push(f(b[e],c))}return d};function M(a,b){this.c=a;this.f=b;this.a=t(this.c,"span",{"aria-hidden":"true"},this.f)}function N(a){u(a.c,"body",a.a)}function O(a){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+I(a.c)+";"+("font-style:"+H(a)+";font-weight:"+(a.f+"00")+";")};function P(a,b,c,d,e,f){this.g=a;this.j=b;this.a=d;this.c=c;this.f=e||3E3;this.h=f||void 0}P.prototype.start=function(){var a=this.c.o.document,b=this,c=q(),d=new Promise(function(d,e){function f(){q()-c>=b.f?e():a.fonts.load(fa(b.a),b.h).then(function(a){1<=a.length?d():setTimeout(f,25)},function(){e()})}f()}),e=null,f=new Promise(function(a,d){e=setTimeout(d,b.f)});Promise.race([f,d]).then(function(){e&&(clearTimeout(e),e=null);b.g(b.a)},function(){b.j(b.a)})};function Q(a,b,c,d,e,f,g){this.v=a;this.B=b;this.c=c;this.a=d;this.s=g||"BESbswy";this.f={};this.w=e||3E3;this.u=f||null;this.m=this.j=this.h=this.g=null;this.g=new M(this.c,this.s);this.h=new M(this.c,this.s);this.j=new M(this.c,this.s);this.m=new M(this.c,this.s);a=new G(this.a.c+",serif",J(this.a));a=O(a);this.g.a.style.cssText=a;a=new G(this.a.c+",sans-serif",J(this.a));a=O(a);this.h.a.style.cssText=a;a=new G("serif",J(this.a));a=O(a);this.j.a.style.cssText=a;a=new G("sans-serif",J(this.a));a=
O(a);this.m.a.style.cssText=a;N(this.g);N(this.h);N(this.j);N(this.m)}var R={D:"serif",C:"sans-serif"},S=null;function T(){if(null===S){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);S=!!a&&(536>parseInt(a[1],10)||536===parseInt(a[1],10)&&11>=parseInt(a[2],10))}return S}Q.prototype.start=function(){this.f.serif=this.j.a.offsetWidth;this.f["sans-serif"]=this.m.a.offsetWidth;this.A=q();U(this)};
function la(a,b,c){for(var d in R)if(R.hasOwnProperty(d)&&b===a.f[R[d]]&&c===a.f[R[d]])return!0;return!1}function U(a){var b=a.g.a.offsetWidth,c=a.h.a.offsetWidth,d;(d=b===a.f.serif&&c===a.f["sans-serif"])||(d=T()&&la(a,b,c));d?q()-a.A>=a.w?T()&&la(a,b,c)&&(null===a.u||a.u.hasOwnProperty(a.a.c))?V(a,a.v):V(a,a.B):ma(a):V(a,a.v)}function ma(a){setTimeout(p(function(){U(this)},a),50)}function V(a,b){setTimeout(p(function(){v(this.g.a);v(this.h.a);v(this.j.a);v(this.m.a);b(this.a)},a),0)};function W(a,b,c){this.c=a;this.a=b;this.f=0;this.m=this.j=!1;this.s=c}var X=null;W.prototype.g=function(a){var b=this.a;b.g&&w(b.f,[b.a.c("wf",a.c,J(a).toString(),"active")],[b.a.c("wf",a.c,J(a).toString(),"loading"),b.a.c("wf",a.c,J(a).toString(),"inactive")]);K(b,"fontactive",a);this.m=!0;na(this)};
W.prototype.h=function(a){var b=this.a;if(b.g){var c=y(b.f,b.a.c("wf",a.c,J(a).toString(),"active")),d=[],e=[b.a.c("wf",a.c,J(a).toString(),"loading")];c||d.push(b.a.c("wf",a.c,J(a).toString(),"inactive"));w(b.f,d,e)}K(b,"fontinactive",a);na(this)};function na(a){0==--a.f&&a.j&&(a.m?(a=a.a,a.g&&w(a.f,[a.a.c("wf","active")],[a.a.c("wf","loading"),a.a.c("wf","inactive")]),K(a,"active")):L(a.a))};function oa(a){this.j=a;this.a=new ja;this.h=0;this.f=this.g=!0}oa.prototype.load=function(a){this.c=new ca(this.j,a.context||this.j);this.g=!1!==a.events;this.f=!1!==a.classes;pa(this,new ha(this.c,a),a)};
function qa(a,b,c,d,e){var f=0==--a.h;(a.f||a.g)&&setTimeout(function(){var a=e||null,m=d||null||{};if(0===c.length&&f)L(b.a);else{b.f+=c.length;f&&(b.j=f);var h,l=[];for(h=0;h<c.length;h++){var k=c[h],n=m[k.c],r=b.a,x=k;r.g&&w(r.f,[r.a.c("wf",x.c,J(x).toString(),"loading")]);K(r,"fontloading",x);r=null;if(null===X)if(window.FontFace){var x=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent),xa=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);
X=x?42<parseInt(x[1],10):xa?!1:!0}else X=!1;X?r=new P(p(b.g,b),p(b.h,b),b.c,k,b.s,n):r=new Q(p(b.g,b),p(b.h,b),b.c,k,b.s,a,n);l.push(r)}for(h=0;h<l.length;h++)l[h].start()}},0)}function pa(a,b,c){var d=[],e=c.timeout;ia(b);var d=ka(a.a,c,a.c),f=new W(a.c,b,e);a.h=d.length;b=0;for(c=d.length;b<c;b++)d[b].load(function(b,d,c){qa(a,f,b,d,c)})};function ra(a,b){this.c=a;this.a=b}
ra.prototype.load=function(a){function b(){if(f["__mti_fntLst"+d]){var c=f["__mti_fntLst"+d](),e=[],h;if(c)for(var l=0;l<c.length;l++){var k=c[l].fontfamily;void 0!=c[l].fontStyle&&void 0!=c[l].fontWeight?(h=c[l].fontStyle+c[l].fontWeight,e.push(new G(k,h))):e.push(new G(k))}a(e)}else setTimeout(function(){b()},50)}var c=this,d=c.a.projectId,e=c.a.version;if(d){var f=c.c.o;A(this.c,(c.a.api||"https://fast.fonts.net/jsapi")+"/"+d+".js"+(e?"?v="+e:""),function(e){e?a([]):(f["__MonotypeConfiguration__"+
d]=function(){return c.a},b())}).id="__MonotypeAPIScript__"+d}else a([])};function sa(a,b){this.c=a;this.a=b}sa.prototype.load=function(a){var b,c,d=this.a.urls||[],e=this.a.families||[],f=this.a.testStrings||{},g=new B;b=0;for(c=d.length;b<c;b++)z(this.c,d[b],C(g));var m=[];b=0;for(c=e.length;b<c;b++)if(d=e[b].split(":"),d[1])for(var h=d[1].split(","),l=0;l<h.length;l+=1)m.push(new G(d[0],h[l]));else m.push(new G(d[0]));E(g,function(){a(m,f)})};function ta(a,b){a?this.c=a:this.c=ua;this.a=[];this.f=[];this.g=b||""}var ua="https://fonts.googleapis.com/css";function va(a,b){for(var c=b.length,d=0;d<c;d++){var e=b[d].split(":");3==e.length&&a.f.push(e.pop());var f="";2==e.length&&""!=e[1]&&(f=":");a.a.push(e.join(f))}}
function wa(a){if(0==a.a.length)throw Error("No fonts to load!");if(-1!=a.c.indexOf("kit="))return a.c;for(var b=a.a.length,c=[],d=0;d<b;d++)c.push(a.a[d].replace(/ /g,"+"));b=a.c+"?family="+c.join("%7C");0<a.f.length&&(b+="&subset="+a.f.join(","));0<a.g.length&&(b+="&text="+encodeURIComponent(a.g));return b};function ya(a){this.f=a;this.a=[];this.c={}}
var za={latin:"BESbswy","latin-ext":"\u00e7\u00f6\u00fc\u011f\u015f",cyrillic:"\u0439\u044f\u0416",greek:"\u03b1\u03b2\u03a3",khmer:"\u1780\u1781\u1782",Hanuman:"\u1780\u1781\u1782"},Aa={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Ba={i:"i",italic:"i",n:"n",normal:"n"},
Ca=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
function Da(a){for(var b=a.f.length,c=0;c<b;c++){var d=a.f[c].split(":"),e=d[0].replace(/\+/g," "),f=["n4"];if(2<=d.length){var g;var m=d[1];g=[];if(m)for(var m=m.split(","),h=m.length,l=0;l<h;l++){var k;k=m[l];if(k.match(/^[\w-]+$/)){var n=Ca.exec(k.toLowerCase());if(null==n)k="";else{k=n[2];k=null==k||""==k?"n":Ba[k];n=n[1];if(null==n||""==n)n="4";else var r=Aa[n],n=r?r:isNaN(n)?"4":n.substr(0,1);k=[k,n].join("")}}else k="";k&&g.push(k)}0<g.length&&(f=g);3==d.length&&(d=d[2],g=[],d=d?d.split(","):
g,0<d.length&&(d=za[d[0]])&&(a.c[e]=d))}a.c[e]||(d=za[e])&&(a.c[e]=d);for(d=0;d<f.length;d+=1)a.a.push(new G(e,f[d]))}};function Ea(a,b){this.c=a;this.a=b}var Fa={Arimo:!0,Cousine:!0,Tinos:!0};Ea.prototype.load=function(a){var b=new B,c=this.c,d=new ta(this.a.api,this.a.text),e=this.a.families;va(d,e);var f=new ya(e);Da(f);z(c,wa(d),C(b));E(b,function(){a(f.a,f.c,Fa)})};function Ga(a,b){this.c=a;this.a=b}Ga.prototype.load=function(a){var b=this.a.id,c=this.c.o;b?A(this.c,(this.a.api||"https://use.typekit.net")+"/"+b+".js",function(b){if(b)a([]);else if(c.Typekit&&c.Typekit.config&&c.Typekit.config.fn){b=c.Typekit.config.fn;for(var e=[],f=0;f<b.length;f+=2)for(var g=b[f],m=b[f+1],h=0;h<m.length;h++)e.push(new G(g,m[h]));try{c.Typekit.load({events:!1,classes:!1,async:!0})}catch(l){}a(e)}},2E3):a([])};function Ha(a,b){this.c=a;this.f=b;this.a=[]}Ha.prototype.load=function(a){var b=this.f.id,c=this.c.o,d=this;b?(c.__webfontfontdeckmodule__||(c.__webfontfontdeckmodule__={}),c.__webfontfontdeckmodule__[b]=function(b,c){for(var g=0,m=c.fonts.length;g<m;++g){var h=c.fonts[g];d.a.push(new G(h.name,ga("font-weight:"+h.weight+";font-style:"+h.style)))}a(d.a)},A(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+ea(this.c)+"/"+b+".js",function(b){b&&a([])})):a([])};var Y=new oa(window);Y.a.c.custom=function(a,b){return new sa(b,a)};Y.a.c.fontdeck=function(a,b){return new Ha(b,a)};Y.a.c.monotype=function(a,b){return new ra(b,a)};Y.a.c.typekit=function(a,b){return new Ga(b,a)};Y.a.c.google=function(a,b){return new Ea(b,a)};var Z={load:p(Y.load,Y)}; true?!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return Z}).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):0;}());


/***/ }),

/***/ "./src/Config.ts":
/*!***********************!*\
  !*** ./src/Config.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoundData: () => (/* binding */ RoundData),
/* harmony export */   SessionData: () => (/* binding */ SessionData)
/* harmony export */ });
const SessionData = {
    players: [],
    cardChoice: 'Random',
    gameStructure: 'Round Robin',
    gameLength: 'Play Twice',
    timing: {
        intro: 10,
        player_left: 20,
        player_right: 20,
        open: 30,
        vote: 20,
        vote2: 10,
        leaderboard: 10,
    },
    blinkTiming: {
        intro: 3,
        player_left: 3,
        player_right: 3,
        open: 3,
        vote: 5,
        vote2: 10,
        leaderboard: 3,
    },
    open_phase: true,
    prepends: false,
    characterDeck: [],
    powerDeck: [],
    plays_each: 2,
};
const RoundData = {
    round: 0,
    players: [],
    cards: [[], []],
    winner: null,
};


/***/ }),

/***/ "./src/JMGE/JMTween.ts":
/*!*****************************!*\
  !*** ./src/JMGE/JMTween.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JMEasing: () => (/* binding */ JMEasing),
/* harmony export */   JMTween: () => (/* binding */ JMTween)
/* harmony export */ });
class JMTween {
    constructor(object, totalTime = 200) {
        this.object = object;
        this.totalTime = totalTime;
        this.running = false;
        this.properties = [];
        this.onUpdate = (callback) => {
            this.onUpdateCallback = callback;
            return this;
        };
        this.onComplete = (callback) => {
            this.onCompleteCallback = callback;
            return this;
        };
        this.onWaitComplete = (callback) => {
            this.onWaitCompleteCallback = callback;
            return this;
        };
        this.yoyo = (b = true, repeat = 1) => {
            this._Yoyo = b;
            this._Repeat = repeat - 0.5;
            return this;
        };
        this.loop = (b = true, repeat = Infinity) => {
            this._Loop = b;
            this._Repeat = repeat;
            return this;
        };
        this.stop = (andComplete) => {
            if (andComplete) {
                this.complete(this.endTime);
            }
            else {
                this.running = false;
                JMTween._remove(this);
            }
            return this;
        };
        this.reset = () => {
            this.tickThis = this.firstTick;
            if (this.waitTime)
                this.hasWait = true;
            return this;
        };
        this.wait = (time) => {
            this.waitTime = time;
            this.hasWait = true;
            return this;
        };
        this.over = (time) => {
            this.totalTime = time;
            return this;
        };
        this.start = () => {
            this.running = true;
            this.properties.forEach(property => {
                if (property.to || property.to === 0) {
                    // @ts-ignore
                    property.start = this.object[property.key] || 0;
                    property.end = property.to;
                }
                else if (property.from || property.from === 0) {
                    property.start = property.from;
                    // @ts-ignore
                    property.end = this.object[property.key] || 0;
                }
                if (property.isColor) {
                    property.incR = Math.floor(property.end / 0x010000) - Math.floor(property.start / 0x010000);
                    property.incG = Math.floor((property.end % 0x010000) / 0x000100) - Math.floor((property.start % 0x010000) / 0x000100);
                    property.incB = Math.floor(property.end % 0x000100) - Math.floor(property.start % 0x000100);
                }
                else {
                    property.inc = property.end - property.start;
                }
                // @ts-ignore
                this.object[property.key] = property.start;
            });
            JMTween._add(this);
            return this;
        };
        this.to = (props, eased = true) => {
            for (let key of Object.keys(props)) {
                // @ts-ignore
                this.properties.push({ key, eased, to: props[key] });
            }
            return this;
        };
        this.from = (props, eased = true) => {
            for (let key of Object.keys(props)) {
                // @ts-ignore
                this.properties.push({ key, eased, from: props[key] });
            }
            return this;
        };
        this.colorTo = (props, eased = true) => {
            for (let key of Object.keys(props)) {
                // @ts-ignore
                this.properties.push({ key, eased, to: props[key], isColor: true });
            }
            return this;
        };
        this.colorFrom = (props, eased = true) => {
            for (let key of Object.keys(props)) {
                // @ts-ignore
                this.properties.push({ key, eased, from: props[key], isColor: true });
            }
            return this;
        };
        this.easing = (func) => {
            this._Easing = func;
            return this;
        };
        this.complete = (time) => {
            this.properties.forEach(property => {
                // @ts-ignore
                this.object[property.key] = property.end;
            });
            if (this._Loop && this._Repeat > 0) {
                this._Repeat--;
                this.reset();
                this.startTime = time;
                this.endTime = this.startTime + (this.totalTime || 0);
            }
            else if (this._Yoyo && this._Repeat > 0) {
                this._Repeat -= 0.5;
                this.reverseProps();
                this.startTime = time;
                this.endTime = this.startTime + (this.totalTime || 0);
            }
            else {
                this.running = false;
                JMTween._remove(this);
                this.tickThis = () => { };
                if (this.onCompleteCallback)
                    this.onCompleteCallback(this.object);
                if (this.nextTween) {
                    this.nextTween.reset();
                    this.nextTween.start();
                    this.nextTween.tickThis(time);
                }
            }
            return this;
        };
        this.firstTick = (time) => {
            if (this.hasWait) {
                this.startTime = time + this.waitTime / (JMTween.speedFactor || 1);
            }
            else {
                this.startTime = time;
            }
            this.endTime = this.startTime + (this.totalTime / (JMTween.speedFactor || 1) || 0);
            this.tickThis = this.tailTick;
        };
        this.tailTick = (time) => {
            if (this.hasWait && time > this.startTime) {
                this.hasWait = false;
                if (this.onWaitCompleteCallback)
                    this.onWaitCompleteCallback(this.object);
            }
            if (time > this.endTime) {
                this.complete(time);
            }
            else if (time > this.startTime) {
                let raw = (time - this.startTime) / (this.endTime - this.startTime);
                let eased = this._Easing ? this._Easing(raw) : raw;
                this.properties.forEach(property => {
                    let percent = property.eased ? eased : raw;
                    if (property.isColor) {
                        // @ts-ignore
                        this.object[property.key] = Math.round(property.start +
                            Math.floor(property.incR * percent) * 0x010000 +
                            Math.floor(property.incG * percent) * 0x000100 +
                            Math.floor(property.incB * percent));
                    }
                    else {
                        // @ts-ignore
                        this.object[property.key] = property.start + property.inc * percent;
                    }
                });
                if (this.onUpdateCallback)
                    this.onUpdateCallback(this.object);
            }
        };
        this.reverseProps = () => {
            this.properties.forEach(property => {
                let start = property.start;
                property.start = property.end;
                property.end = start;
                if (property.isColor) {
                    property.incR = Math.floor(property.end / 0x010000) - Math.floor(property.start / 0x010000);
                    property.incG = Math.floor((property.end % 0x010000) / 0x000100) - Math.floor((property.start % 0x010000) / 0x000100);
                    property.incB = Math.floor(property.end % 0x000100) - Math.floor(property.start % 0x000100);
                }
                else {
                    property.inc = property.end - property.start;
                }
            });
        };
        this.tickThis = this.firstTick;
    }
    chain(nextObj, totalTime) {
        this.nextTween = new JMTween(nextObj, totalTime);
        return this.nextTween;
    }
    chainTween(tween) {
        this.nextTween = tween;
        return tween;
    }
}
JMTween.speedFactor = 1;
JMTween.running = false;
JMTween.tweens = [];
JMTween._add = (tween) => {
    JMTween.tweens.push(tween);
    JMTween._tryRun();
};
JMTween._remove = (tween) => {
    let index = JMTween.tweens.indexOf(tween);
    if (index >= 0) {
        JMTween.tweens.splice(index, 1);
    }
};
JMTween._tryRun = () => {
    if (!JMTween.running && JMTween.tweens.length > 0) {
        JMTween.running = true;
        requestAnimationFrame(JMTween._tick);
    }
};
JMTween._tick = (time) => {
    JMTween.running = false;
    JMTween.tweens.forEach(tween => tween.tickThis(time));
    if (!JMTween.running && JMTween.tweens.length > 0) {
        JMTween.running = true;
        requestAnimationFrame(JMTween._tick);
    }
};
const JMEasing = {
    Linear: {
        None: (k) => {
            return k;
        },
    },
    Quadratic: {
        In: (k) => {
            return k * k;
        },
        Out: (k) => {
            return k * (2 - k);
        },
        InOut: (k) => {
            k *= 2;
            if (k < 1) {
                return 0.5 * k * k;
            }
            return -0.5 * (--k * (k - 2) - 1);
        },
    },
    Cubic: {
        In: (k) => {
            return k * k * k;
        },
        Out: (k) => {
            return --k * k * k + 1;
        },
        InOut: (k) => {
            k *= 2;
            if (k < 1) {
                return 0.5 * k * k * k;
            }
            return 0.5 * ((k -= 2) * k * k + 2);
        },
    },
    Quartic: {
        In: (k) => {
            return k * k * k * k;
        },
        Out: (k) => {
            return 1 - (--k * k * k * k);
        },
        InOut: (k) => {
            k *= 2;
            if (k < 1) {
                return 0.5 * k * k * k * k;
            }
            return -0.5 * ((k -= 2) * k * k * k - 2);
        },
    },
    Quintic: {
        In: (k) => {
            return k * k * k * k * k;
        },
        Out: (k) => {
            return --k * k * k * k * k + 1;
        },
        InOut: (k) => {
            k *= 2;
            if (k < 1) {
                return 0.5 * k * k * k * k * k;
            }
            return 0.5 * ((k -= 2) * k * k * k * k + 2);
        },
    },
    Sinusoidal: {
        In: (k) => {
            return 1 - Math.cos(k * Math.PI / 2);
        },
        Out: (k) => {
            return Math.sin(k * Math.PI / 2);
        },
        InOut: (k) => {
            return 0.5 * (1 - Math.cos(Math.PI * k));
        },
    },
    Exponential: {
        In: (k) => {
            return k === 0 ? 0 : Math.pow(1024, k - 1);
        },
        Out: (k) => {
            return k === 1 ? 1 : 1 - Math.pow(2, -10 * k);
        },
        InOut: (k) => {
            if (k === 0) {
                return 0;
            }
            if (k === 1) {
                return 1;
            }
            k *= 2;
            if (k < 1) {
                return 0.5 * Math.pow(1024, k - 1);
            }
            return 0.5 * (-Math.pow(2, -10 * (k - 1)) + 2);
        },
    },
    Circular: {
        In: (k) => {
            return 1 - Math.sqrt(1 - k * k);
        },
        Out: (k) => {
            return Math.sqrt(1 - (--k * k));
        },
        InOut: (k) => {
            k *= 2;
            if (k < 1) {
                return -0.5 * (Math.sqrt(1 - k * k) - 1);
            }
            return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);
        },
    },
    Elastic: {
        In: (k) => {
            if (k === 0) {
                return 0;
            }
            if (k === 1) {
                return 1;
            }
            return -Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);
        },
        Out: (k) => {
            if (k === 0) {
                return 0;
            }
            if (k === 1) {
                return 1;
            }
            return Math.pow(2, -10 * k) * Math.sin((k - 0.1) * 5 * Math.PI) + 1;
        },
        InOut: (k) => {
            if (k === 0) {
                return 0;
            }
            if (k === 1) {
                return 1;
            }
            k *= 2;
            if (k < 1) {
                return -0.5 * Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);
            }
            return 0.5 * Math.pow(2, -10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI) + 1;
        },
    },
    Back: {
        In: (k) => {
            let s = 1.70158;
            return k * k * ((s + 1) * k - s);
        },
        Out: (k) => {
            let s = 1.70158;
            return --k * k * ((s + 1) * k + s) + 1;
        },
        InOut: (k) => {
            let s = 1.70158 * 1.525;
            k *= 2;
            if (k < 1) {
                return 0.5 * (k * k * ((s + 1) * k - s));
            }
            return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
        },
    },
    Bounce: {
        In: (k) => {
            return 1 - JMEasing.Bounce.Out(1 - k);
        },
        Out: (k) => {
            if (k < (1 / 2.75)) {
                return 7.5625 * k * k;
            }
            else if (k < (2 / 2.75)) {
                return 7.5625 * (k -= (1.5 / 2.75)) * k + 0.75;
            }
            else if (k < (2.5 / 2.75)) {
                return 7.5625 * (k -= (2.25 / 2.75)) * k + 0.9375;
            }
            else {
                return 7.5625 * (k -= (2.625 / 2.75)) * k + 0.984375;
            }
        },
        InOut: (k) => {
            if (k < 0.5) {
                return JMEasing.Bounce.In(k * 2) * 0.5;
            }
            return JMEasing.Bounce.Out(k * 2 - 1) * 0.5 + 0.5;
        },
    },
};


/***/ }),

/***/ "./src/components/Avatar.ts":
/*!**********************************!*\
  !*** ./src/components/Avatar.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Avatar: () => (/* binding */ Avatar)
/* harmony export */ });
/* harmony import */ var _data_ImageUrl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/ImageUrl */ "./src/data/ImageUrl.ts");
/* harmony import */ var _services_ElementFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/ElementFactory */ "./src/services/ElementFactory.ts");


class Avatar {
    constructor() {
        this.element = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_1__.El.makeDiv('avatar-container');
        this.image = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_1__.El.makeImg(_data_ImageUrl__WEBPACK_IMPORTED_MODULE_0__.ImageUrl.PlayerTalk1, 'avatar-content');
        _services_ElementFactory__WEBPACK_IMPORTED_MODULE_1__.El.addElements(this.element, this.image);
    }
    get hidden() {
        return this.element.style.display === 'none';
    }
    set hidden(b) {
        if (b) {
            this.element.style.display = 'none';
        }
        else {
            this.element.style.removeProperty('display');
        }
    }
    setState(state) {
        switch (state) {
            case 'active':
                this.image.src = _data_ImageUrl__WEBPACK_IMPORTED_MODULE_0__.ImageUrl.PlayerTalk1;
                break;
            case 'passive':
                this.image.src = _data_ImageUrl__WEBPACK_IMPORTED_MODULE_0__.ImageUrl.PlayerWait1;
                break;
            case 'win':
                this.image.src = _data_ImageUrl__WEBPACK_IMPORTED_MODULE_0__.ImageUrl.PlayerWin1;
                break;
            case 'lose':
                this.image.src = _data_ImageUrl__WEBPACK_IMPORTED_MODULE_0__.ImageUrl.PlayerLose1;
                break;
            case 'neutral':
                this.image.src = _data_ImageUrl__WEBPACK_IMPORTED_MODULE_0__.ImageUrl.PlayerNeutral1;
                break;
            case 'ready':
                this.image.src = _data_ImageUrl__WEBPACK_IMPORTED_MODULE_0__.ImageUrl.PlayerReady1;
                break;
        }
    }
    faceRight(b) {
        if (b) {
            this.image.style.transform = 'scaleX(-1)';
        }
        else {
            this.image.style.removeProperty('transform');
            this.element.classList.add('avatar-right');
        }
    }
}


/***/ }),

/***/ "./src/components/BottomControls.ts":
/*!******************************************!*\
  !*** ./src/components/BottomControls.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BottomControls: () => (/* binding */ BottomControls)
/* harmony export */ });
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Config */ "./src/Config.ts");
/* harmony import */ var _data_StringData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/StringData */ "./src/data/StringData.ts");
/* harmony import */ var _services_animateDiv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/animateDiv */ "./src/services/animateDiv.ts");
/* harmony import */ var _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/ElementFactory */ "./src/services/ElementFactory.ts");




class BottomControls {
    constructor() {
        this.destroy = () => {
            document.body.removeChild(this.element);
        };
        this.onTimerRefreshed = () => {
            this.pause.innerHTML = _data_StringData__WEBPACK_IMPORTED_MODULE_1__.StringData.BUTTON_PAUSE;
        };
        this.onSkip = () => {
            if (this.skip.style.display === 'none')
                return;
            this._onSkip && this._onSkip();
        };
        this.onPause = () => {
            if (this.pause.style.display === 'none')
                return;
            if (this._onPause) {
                let paused = this._onPause();
                if (paused) {
                    this.pause.innerHTML = _data_StringData__WEBPACK_IMPORTED_MODULE_1__.StringData.BUTTON_RESUME;
                }
                else {
                    this.pause.innerHTML = _data_StringData__WEBPACK_IMPORTED_MODULE_1__.StringData.BUTTON_PAUSE;
                }
            }
        };
        this.onVote = (player) => {
            if (this.voteLeft.style.display === 'none')
                return;
            if (player === 0) {
                this.voteLeft.classList.add('highlighted');
                this.voteRight.classList.remove('highlighted');
                this.voteTie.classList.remove('highlighted');
            }
            else if (player === 1) {
                this.voteRight.classList.add('highlighted');
                this.voteLeft.classList.remove('highlighted');
                this.voteTie.classList.remove('highlighted');
            }
            else {
                this.voteRight.classList.remove('highlighted');
                this.voteLeft.classList.remove('highlighted');
                this.voteTie.classList.add('highlighted');
            }
            if (this._onVote) {
                this._onVote(player);
            }
        };
        this.onKeyDown = (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                this.onSkip();
            }
            else if (e.key === 'p') {
                this.onPause();
            }
            else if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === '1') {
                this.onVote(0);
            }
            else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === '3') {
                this.onVote(1);
            }
            else if (e.key === 'ArrowDown' || e.key === 's' || e.key === '2') {
                this.onVote(-1);
            }
        };
        this.element = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.makeDiv('bottom-bar');
        this.element.style.position = 'absolute';
        this.element.style.bottom = '0';
        this.skip = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.makeButton(_data_StringData__WEBPACK_IMPORTED_MODULE_1__.StringData.BUTTON_SKIP, 'info-button', this.onSkip);
        this.pause = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.makeButton(_data_StringData__WEBPACK_IMPORTED_MODULE_1__.StringData.BUTTON_PAUSE, 'info-button', this.onPause);
        this.voteLeft = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.makeButton(`<< ${_Config__WEBPACK_IMPORTED_MODULE_0__.RoundData.players[0]} ${_data_StringData__WEBPACK_IMPORTED_MODULE_1__.StringData.ROUND_WINS}`, 'wide-button', () => this.onVote(0));
        this.voteRight = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.makeButton(`${_Config__WEBPACK_IMPORTED_MODULE_0__.RoundData.players[1]} ${_data_StringData__WEBPACK_IMPORTED_MODULE_1__.StringData.ROUND_WINS} >>`, 'wide-button', () => this.onVote(1));
        this.voteTie = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.makeButton(_data_StringData__WEBPACK_IMPORTED_MODULE_1__.StringData.ROUND_TIE, 'info-button', () => this.onVote(-1));
        let voteContainer = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.makeDiv('bottom-vote-container');
        _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.addElements(this.element, this.pause, voteContainer, this.skip);
        _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.addElements(voteContainer, this.voteLeft, this.voteTie, this.voteRight);
        document.body.appendChild(this.element);
        this.element.style.display = 'none';
        document.addEventListener('keydown', this.onKeyDown);
    }
    get hidden() {
        return this.element.style.display === 'none';
    }
    set hidden(b) {
        if (b) {
            this.element.style.display = 'none';
        }
        else {
            this.element.style.removeProperty('display');
        }
    }
    setCallbacks(onSkip, onPause, onVote) {
        this._onPause = onPause;
        this._onSkip = onSkip;
        this._onVote = onVote;
    }
    clearCallbacks() {
        this._onPause = this.onSkip = this.onVote = null;
    }
    setNames(player0, player1) {
        this.voteLeft.innerHTML = `<< ${player0} ${_data_StringData__WEBPACK_IMPORTED_MODULE_1__.StringData.ROUND_WINS}`;
        this.voteRight.innerHTML = `${player1} ${_data_StringData__WEBPACK_IMPORTED_MODULE_1__.StringData.ROUND_WINS} >>`;
    }
    pulseVotes() {
        (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_2__.animateDiv)(this.voteLeft, _services_animateDiv__WEBPACK_IMPORTED_MODULE_2__.AnimationType.PULSE, 0);
        (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_2__.animateDiv)(this.voteTie, _services_animateDiv__WEBPACK_IMPORTED_MODULE_2__.AnimationType.PULSE, 200);
        (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_2__.animateDiv)(this.voteRight, _services_animateDiv__WEBPACK_IMPORTED_MODULE_2__.AnimationType.PULSE, 400);
    }
    showButton(button, value = true) {
        if (button === 'skip') {
            this.skip.innerHTML = _data_StringData__WEBPACK_IMPORTED_MODULE_1__.StringData.BUTTON_SKIP;
            this.toggleVisible(this.skip, value);
        }
        else if (button === 'next') {
            this.skip.innerHTML = _data_StringData__WEBPACK_IMPORTED_MODULE_1__.StringData.BUTTON_NEXT;
            this.toggleVisible(this.skip, value);
        }
        else if (button === 'pause') {
            this.toggleVisible(this.pause, value);
        }
        else {
            this.toggleVisible(this.voteLeft, value);
            this.toggleVisible(this.voteRight, value);
            this.toggleVisible(this.voteTie, value);
            this.voteRight.classList.remove('highlighted');
            this.voteLeft.classList.remove('highlighted');
            this.voteTie.classList.remove('highlighted');
        }
    }
    toggleVisible(el, b) {
        if (b) {
            el.style.removeProperty('display');
        }
        else {
            el.style.display = 'none';
        }
    }
}


/***/ }),

/***/ "./src/components/TimerCircle.ts":
/*!***************************************!*\
  !*** ./src/components/TimerCircle.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimerCircle: () => (/* binding */ TimerCircle)
/* harmony export */ });
/* harmony import */ var _data_StringData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/StringData */ "./src/data/StringData.ts");
/* harmony import */ var _services_animateDiv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/animateDiv */ "./src/services/animateDiv.ts");
/* harmony import */ var _services_ElementFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/ElementFactory */ "./src/services/ElementFactory.ts");



class TimerCircle {
    constructor(showControls = false) {
        this.paused = true;
        this._blinkAt = 3;
        this.skipTimer = () => {
            if (this._canSkip) {
                this.endNow();
            }
        };
        this.endNow = () => {
            this.paused = true;
            window.clearTimeout(this.cTimeout);
            let onComplete = this._onComplete;
            this._onComplete = null;
            onComplete && onComplete();
        };
        this.pauseTimer = () => {
            if (!this._canSkip)
                return false;
            if (this.paused) {
                this.start();
            }
            else {
                this.pause();
            }
            return this.paused;
        };
        this.tickTimer = () => {
            if (this.paused)
                return;
            this.currentSeconds--;
            this.timer.innerHTML = Math.ceil(this.currentSeconds).toString();
            if (this.currentSeconds <= this._blinkAt && this.currentSeconds > 0) {
                (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_1__.animateDiv)(this.timer, _services_animateDiv__WEBPACK_IMPORTED_MODULE_1__.AnimationType.PULSE);
            }
            if (this.currentSeconds === 0) {
                this.endNow();
            }
            else {
                this.cTimeout = window.setTimeout(this.tickTimer, 1000);
            }
        };
        this.element = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_2__.El.makeDiv('timer-container');
        this.timer = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_2__.El.makeText('99', 'timer');
        _services_ElementFactory__WEBPACK_IMPORTED_MODULE_2__.El.addElements(this.element, this.timer);
        // this.tween = new JMTween<TimerCircle>(this, 99000).to({currentSeconds: 0})
        //   .onComplete(() => this._onComplete && this._onComplete())
        //   .onUpdate(this.onUpdate);
        if (showControls) {
            this.skipButton = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_2__.El.makeButton(_data_StringData__WEBPACK_IMPORTED_MODULE_0__.StringData.BUTTON_SKIP, 'small-button', this.endNow);
            this.pauseButton = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_2__.El.makeButton(_data_StringData__WEBPACK_IMPORTED_MODULE_0__.StringData.BUTTON_PAUSE, 'small-button', this.pauseTimer);
            _services_ElementFactory__WEBPACK_IMPORTED_MODULE_2__.El.addElements(this.element, this.skipButton, this.pauseButton);
        }
    }
    set canSkip(b) {
        this._canSkip = b;
        if (!this.skipButton)
            return;
        if (b) {
            this.pauseButton.style.removeProperty('display');
            this.skipButton.style.removeProperty('display');
        }
        else {
            this.pauseButton.style.display = 'none';
            this.skipButton.style.display = 'none';
        }
    }
    get canSkip() {
        return this._canSkip;
    }
    destroy() {
        this.paused = true;
        this._onComplete = null;
    }
    blinkAt(seconds) {
        this._blinkAt = seconds;
        return this;
    }
    reset(seconds) {
        if (seconds) {
            this.totalSeconds = seconds;
        }
        this.currentSeconds = this.totalSeconds;
        this.timer.innerHTML = this.currentSeconds.toString();
        // this.tween.reset();
        // this.tween.over(this.totalSeconds * 1000);
        return this;
    }
    start() {
        if (!this.paused)
            return;
        this.paused = false;
        this.currentSeconds++;
        this.tickTimer();
        // this.tween.start();
        this.pauseButton && (this.pauseButton.innerHTML = _data_StringData__WEBPACK_IMPORTED_MODULE_0__.StringData.BUTTON_PAUSE);
        return this;
    }
    pause() {
        this.pauseButton && (this.pauseButton.innerHTML = _data_StringData__WEBPACK_IMPORTED_MODULE_0__.StringData.BUTTON_RESUME);
        this.paused = true;
    }
    onComplete(func) {
        this._onComplete = func;
        return this;
    }
}


/***/ }),

/***/ "./src/data/Fonts.ts":
/*!***************************!*\
  !*** ./src/data/Fonts.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FontArray: () => (/* binding */ FontArray),
/* harmony export */   Fonts: () => (/* binding */ Fonts)
/* harmony export */ });
const Fonts = {
    UI: 'Roboto',
    FLYING: 'Coda Caption',
    // SCORE: 'Odibee Sans',
};
const FontArray = ['Roboto', 'Cedarville Cursive', 'Patrick Hand', 'Indie Flower'];


/***/ }),

/***/ "./src/data/ImageUrl.ts":
/*!******************************!*\
  !*** ./src/data/ImageUrl.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImageUrl: () => (/* binding */ ImageUrl),
/* harmony export */   setupImageCards: () => (/* binding */ setupImageCards)
/* harmony export */ });
const path = './img/';
const ImageUrl = {
    ToJam: './img/ToJam.png',
    GameHive: './img/GH-Logo.png',
    Button1: './img/Button1.png', // 140x140
    Button2: './img/Button2.png', // 200x140
    Button3: './img/Button3.png', // 300x140
    Button4: './img/Button4.png', // 440x140
    CardBack: './img/CardBack.png', // 400x450
    CardFront: './img/CardFront.png', // 400x450
    Character1: './img/Character1.png',
    Character2: './img/Character2.png',
    Power1: './img/Power1.png',
    Power2: './img/Power2.png',
    GridBG: './img/GridBG.png',
    Logo: './img/Logo.png',
    PlayerTalk1: './img/PlayerTalk1.png',
    PlayerWait1: './img/PlayerWait1.png',
    PlayerWin1: './img/PlayerWin1.png',
    PlayerLose1: './img/PlayerLose1.png',
    PlayerNeutral1: './img/PlayerNeutral1.png',
    PlayerReady1: './img/PlayerReady1.png',
    Timer: './img/Timer.png',
    TurnHighlight: './img/TurnHighlight.png',
    Audience: './img/Audience1.png',
    PortraitLeft: './img/PortraitDebbie.png',
    PortraitRight: './img/PortraitJeremy.png',
    PortraitSmall: './img/PortraitSam.png',
    OverlayWinner: './img/ScribbleWin.png',
    OverlayLoser: './img/ScribbleLose.png',
    Divider: './img/Divider.png',
    IconHome: './img/IconHome.png',
    InfoPages: [
        './img/Logo1.png', './img/HTP_Host1.png', './img/HTP_Cards1.png', './img/HTP_Player1.png', './img/HTP_Audience1.png', './img/HTP_Winner1.png',
    ],
    Characters: [],
    Powers: [],
};
function setupImageCards(numChars, numPowers) {
    for (let i = 1; i <= numChars; i++) {
        ImageUrl.Characters.push(`./img/cards/Character${i}.png`);
    }
    for (let i = 1; i <= numPowers; i++) {
        ImageUrl.Powers.push(`./img/cards/Power${i}.png`);
    }
}


/***/ }),

/***/ "./src/data/PageRef.ts":
/*!*****************************!*\
  !*** ./src/data/PageRef.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PageRef: () => (/* binding */ PageRef)
/* harmony export */ });
/* harmony import */ var _pages_CardPreviewUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/CardPreviewUI */ "./src/pages/CardPreviewUI.ts");
/* harmony import */ var _pages_CreditsUI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/CreditsUI */ "./src/pages/CreditsUI.ts");
/* harmony import */ var _pages_EndUI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/EndUI */ "./src/pages/EndUI.ts");
/* harmony import */ var _pages_MainUI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/MainUI */ "./src/pages/MainUI.ts");
/* harmony import */ var _pages_RoundUI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/RoundUI */ "./src/pages/RoundUI.ts");
/* harmony import */ var _pages_SetupUI__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/SetupUI */ "./src/pages/SetupUI.ts");






const PageRef = [
    {
        slug: '#mainmenu',
        con: _pages_MainUI__WEBPACK_IMPORTED_MODULE_3__.MainUI,
    },
    {
        slug: '#gamesetup',
        con: _pages_SetupUI__WEBPACK_IMPORTED_MODULE_5__.SetupUI,
    },
    {
        slug: '#gameround',
        con: _pages_RoundUI__WEBPACK_IMPORTED_MODULE_4__.RoundUI,
    },
    {
        slug: '#gameover',
        con: _pages_EndUI__WEBPACK_IMPORTED_MODULE_2__.EndUI,
    },
    {
        slug: '#preview',
        con: _pages_CardPreviewUI__WEBPACK_IMPORTED_MODULE_0__.CardPreviewUI,
    },
    {
        slug: '#credits',
        con: _pages_CreditsUI__WEBPACK_IMPORTED_MODULE_1__.CreditsUI,
    },
];


/***/ }),

/***/ "./src/data/StringData.ts":
/*!********************************!*\
  !*** ./src/data/StringData.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EnglishStringData: () => (/* binding */ EnglishStringData),
/* harmony export */   StringData: () => (/* binding */ StringData)
/* harmony export */ });
const EnglishStringData = {
    GAME_TITLE: 'Squabble Squabble!',
    MAIN_CONTENT: 'A social game for virtual happy hours!',
    GAMEHIVE_EDITION: 'Gamehive Edition!',
    // MAIN_CONTENT: 'A social game played through video conferencing software',
    SETUP_TITLE: 'Game Setup',
    SETUP_PLAYER_TITLE: 'Players',
    SETUP_OPTIONS_TITLE: 'How to Play',
    SETUP_OPTIONS_TEXT: `Each round, two players face off.<br>
    Players take turns describing how their combo will win.<br>
    At the end of each round, the audience votes on which player they think will win.<br>
    The host tally's the votes and selects the winner!
  `,
    GAME_OVER_TITLE: 'Congratulations!',
    CREDITS_TITLE: 'Credits',
    CREDITS_LEFT_TITLE: 'Debbie Chan',
    CREDITS_LEFT_CONTENT: 'The Artist',
    CREDITS_RIGHT_TITLE: 'Jeremy Moshe',
    CREDITS_RIGHT_CONTENT: 'The Developer',
    CREDITS_SMALL_TITLE: 'Samuel Cheung',
    CREDITS_SMALL_CONTENT: 'Game idea inspired by something this guy said that one time...',
    CREDITS_MADE_AT: 'A game made at',
    CREDITS_GH: 'Squabble Squabble is created by a team from',
    RESULT_WINNER: 'And the winner is...',
    TABLE_NAME: 'Name',
    TABLE_SCORE: 'Score',
    ROUND_VS: 'vs',
    ROUND_INTRO_TITLE: 'Who Will Win?',
    ROUND_INTRO_TEXT: 'Get ready to fight...',
    ROUND_PLAY_TITLE: 'What do you do?',
    ROUND_WINS: 'Wins',
    ROUND_WINS_TEXT: 'Great job!',
    ROUND_TIE: 'Tie',
    ROUND_PLAYER_1: '1️⃣',
    ROUND_PLAYER_2: '2️⃣',
    ROUND_LEFT_TEXT: ``,
    ROUND_RIGHT_TEXT: ``,
    ROUND_OPEN_TITLE: 'Open Floor!',
    ROUND_OPEN_TEXT: 'What does everyone think?',
    ROUND_VOTE_TITLE: 'Who Will Win?',
    ROUND_VOTE_TEXT: 'Everyone, cast your vote!',
    ROUND_VOTE_TITLE2: 'Host: Lock in the winner!',
    ROUND_VOTE_TEXT2: 'Tally up the votes and select the winner.',
    ROUND_TIE_TITLE: 'Tie Game!',
    ROUND_TIE_TEXT: 'You each get half a point.',
    ROUND_TITLE: 'Round',
    BUTTON_ADD: 'Add',
    BUTTON_START: 'Start Game!',
    BUTTON_SKIP: 'skip',
    BUTTON_PAUSE: 'pause',
    BUTTON_RESUME: 'resume',
    BUTTON_HOME: 'Home',
    BUTTON_BACK: 'Back',
    BUTTON_NEW_GAME: 'Let\'s Play!',
    BUTTON_INSTRUCTIONS: 'Instructions',
    BUTTON_MAIN_MENU: 'Main Menu',
    BUTTON_PLAY_AGAIN: 'Play Again!',
    BUTTON_MODE_TIMER: 'Auto-Play',
    BUTTON_MODE_WAIT: 'Manual Turns',
    BUTTON_NEXT: 'Next',
    INFO_TITLE: 'How to Play',
    BOTTOM_DESCRIPTION: 'Created by Jeremy Moshe and Debbie Chan, 2022, as part of TO Jam.',
    InfoPages: [
        'Squabble Squabble is a social game designed to be played over video conferencing.',
        'The game\'s Host shares their screen with the rest of the players.',
        'Each round, two challengers will face off with random Characters and Powers.',
        'The two challengers get 20 seconds each to describe how they defeat their opponent.',
        'After the challengers do their thing, the audience will get 30 seconds to chime in and vote over video or chat.',
        'The Host tallies the votes and declares the winner of the round... then a new round will begin!',
    ],
    DEFAULT_NAMES: [
        'Mad Dog',
        'Pretty Kitty',
    ],
    CHARACTERS: [
        'Robot',
        'Wasp',
        'Armadillo',
        'Bunny',
        'Grizzly Bear',
        'Raven',
        'Coronavirus',
        'T-Rex',
        'Unicorn',
        'Human',
        'Kitty',
        'Wolf',
        'Tiger',
        'Tardigrade',
        'Snake',
        'Goat',
        'Dragon',
        'Mosquito',
        'Amoeba',
        'Shark',
        'Whale',
        'Angel',
        'Reaper',
        'Ghost',
        'Cockroach',
        'Boss Joe',
        'Sword Master',
    ],
    CHARACTER_REVERSIBLE: [
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
    ],
    GHCHARACTERS: [
        'Boss Joe',
        'Sword Master',
    ],
    POWERS: [
        'Elemental Magic',
        'Rocket Ship',
        'Mech Suit',
        'Force Field',
        'Super Smarts',
        'Thumb Tack',
        'Master Sword',
        'Teleportation',
        'Shrinking Power',
        'Super Sized',
        'Time Control',
        'Invisibility',
        'Unlimited Cash',
        'Summoning',
        'Cloning',
        'Healing Powers',
        'Irresistibly Cute',
        'Bazooka',
        'Super Strength',
        'Black Hole',
        'Crafting Shards',
        'Dragon Balls',
        'Poop',
        'Pokeball',
        'Unbelievable Luck',
        'Critical Hit!',
        'Bacon Grease',
        'Fairy Magic',
        'Mega Speakers',
        'Random Item',
    ],
    POWER_REVERSIBLE: [
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        false,
        true,
        true,
        true,
        false,
        true,
        true,
        true,
        false,
    ],
    GHPOWERS: [
        'Random Item',
        'Crafting Shards',
    ],
};
const StringData = EnglishStringData;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Facade: () => (/* binding */ Facade),
/* harmony export */   interactionMode: () => (/* binding */ interactionMode)
/* harmony export */ });
/* harmony import */ var _services_FontLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/FontLoader */ "./src/services/FontLoader.ts");
/* harmony import */ var _data_Fonts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/Fonts */ "./src/data/Fonts.ts");
/* harmony import */ var _pages_MainUI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/MainUI */ "./src/pages/MainUI.ts");
/* harmony import */ var _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/ElementFactory */ "./src/services/ElementFactory.ts");
/* harmony import */ var _components_BottomControls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/BottomControls */ "./src/components/BottomControls.ts");
/* harmony import */ var _data_PageRef__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data/PageRef */ "./src/data/PageRef.ts");
/* harmony import */ var _data_ImageUrl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data/ImageUrl */ "./src/data/ImageUrl.ts");
/* harmony import */ var _data_StringData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./data/StringData */ "./src/data/StringData.ts");
/* harmony import */ var _services_animateDiv__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/animateDiv */ "./src/services/animateDiv.ts");
var _a;









let interactionMode = 'desktop';
let Facade = new (_a = class FacadeInner {
        constructor() {
            if (_a.exists)
                throw new Error('Cannot instatiate more than one Facade Singleton.');
            _a.exists = true;
            try {
                document.createEvent('TouchEvent');
                interactionMode = 'mobile';
            }
            catch (e) {
            }
            this.element = document.getElementById('main');
            this.bottomBar = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.ElFactory.makeBottomBar();
            this.controlBar = new _components_BottomControls__WEBPACK_IMPORTED_MODULE_4__.BottomControls();
            let body = document.body;
            body.appendChild(this.bottomBar);
            this.homeButton = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.ElFactory.makeHomeButton();
            this.creditsButton = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.ElFactory.makeCreditsButton();
            body.appendChild(this.homeButton);
            body.appendChild(this.creditsButton);
            body.appendChild(this.controlBar.element);
            (0,_data_ImageUrl__WEBPACK_IMPORTED_MODULE_6__.setupImageCards)(_data_StringData__WEBPACK_IMPORTED_MODULE_7__.StringData.CHARACTERS.length, _data_StringData__WEBPACK_IMPORTED_MODULE_7__.StringData.POWERS.length);
            _services_FontLoader__WEBPACK_IMPORTED_MODULE_0__.FontLoader.load(_data_Fonts__WEBPACK_IMPORTED_MODULE_1__.FontArray);
            window.requestAnimationFrame(() => this.init());
        }
        init() {
            let hash = window.location.hash;
            let page = _data_PageRef__WEBPACK_IMPORTED_MODULE_5__.PageRef.find(el => el.slug === hash);
            if (page) {
                this.navTo(new page.con());
            }
            else {
                this.navTo(new _pages_MainUI__WEBPACK_IMPORTED_MODULE_2__.MainUI());
            }
            // this.navTo(new MainUI());
            // this.navTo(new SetupUI());
            // this.navTo(new RoundUI());
            // this.navTo(new EndUI());
        }
        navTo(nextPage) {
            if (this.currentPage) {
                this.currentPage.navOut();
            }
            // this.element.innerHTML = '';
            this.currentPage = nextPage;
            this.element.appendChild(nextPage.element);
            nextPage.navIn();
        }
        showHome(b) {
            if (b) {
                this.homeButton.style.removeProperty('display');
            }
            else {
                this.homeButton.style.display = 'none';
            }
        }
        showCredits(b) {
            if (b) {
                this.creditsButton.style.removeProperty('display');
            }
            else {
                this.creditsButton.style.display = 'none';
            }
        }
        popCredits(delay = 0) {
            (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_8__.animateDiv)(this.creditsButton, _services_animateDiv__WEBPACK_IMPORTED_MODULE_8__.AnimationType.BASIC_POP, delay);
        }
        showBottom(b) {
            if (b) {
                this.bottomBar.style.removeProperty('display');
            }
            else {
                this.bottomBar.style.display = 'none';
            }
        }
    },
    _a.exists = false,
    _a)();


/***/ }),

/***/ "./src/pages/CardPreviewUI.ts":
/*!************************************!*\
  !*** ./src/pages/CardPreviewUI.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardPreviewUI: () => (/* binding */ CardPreviewUI)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.ts");
/* harmony import */ var _data_ImageUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/ImageUrl */ "./src/data/ImageUrl.ts");
/* harmony import */ var _data_StringData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/StringData */ "./src/data/StringData.ts");
/* harmony import */ var _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/ElementFactory */ "./src/services/ElementFactory.ts");
/* harmony import */ var _services_GameController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/GameController */ "./src/services/GameController.ts");
/* harmony import */ var _BaseUI__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_BaseUI */ "./src/pages/_BaseUI.ts");






/* css used:
* main-ui
* main-logo
* bigger-text
* giant-button
*/
class CardPreviewUI extends _BaseUI__WEBPACK_IMPORTED_MODULE_5__.BaseUI {
    constructor() {
        super();
        this.element = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.makeDiv('preview-ui');
        let characterSection = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.makeDiv('preview-section-ui');
        let powerSection = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.makeDiv('preview-section-ui');
        let characters = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.makeText('Characters', 'biggest-text');
        let powers = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.makeText('Powers', 'biggest-text');
        _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.addElements(this.element, characters, characterSection, powers, powerSection);
        for (let i = 0; i < _data_StringData__WEBPACK_IMPORTED_MODULE_2__.StringData.CHARACTERS.length; i++) {
            if (_services_GameController__WEBPACK_IMPORTED_MODULE_4__.GameController.GHMode || !_services_GameController__WEBPACK_IMPORTED_MODULE_4__.GameController.testGHCharacter(i)) {
                characterSection.appendChild(this.makeCharacter(i));
            }
        }
        for (let i = 0; i < _data_StringData__WEBPACK_IMPORTED_MODULE_2__.StringData.POWERS.length; i++) {
            if (_services_GameController__WEBPACK_IMPORTED_MODULE_4__.GameController.GHMode || !_services_GameController__WEBPACK_IMPORTED_MODULE_4__.GameController.testGHPower(i)) {
                powerSection.appendChild(this.makePower(i));
            }
        }
        ___WEBPACK_IMPORTED_MODULE_0__.Facade.showHome(true);
        ___WEBPACK_IMPORTED_MODULE_0__.Facade.showBottom(false);
        ___WEBPACK_IMPORTED_MODULE_0__.Facade.showCredits(false);
        ___WEBPACK_IMPORTED_MODULE_0__.Facade.controlBar.hidden = true;
    }
    navIn() {
        // animateDiv(this.button2, AnimationType.BASIC_POP, 900);
    }
    navOut() {
        this.element.parentElement.removeChild(this.element);
    }
    makeCharacter(slug) {
        let card = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.makeDiv('card');
        card.innerHTML = `<img src = ${_data_ImageUrl__WEBPACK_IMPORTED_MODULE_1__.ImageUrl.Characters[slug]} class = "card-image"><div class= "card-text">${_data_StringData__WEBPACK_IMPORTED_MODULE_2__.StringData.CHARACTERS[slug]}</div>`;
        return card;
    }
    makePower(slug) {
        let card = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.makeDiv('card');
        card.innerHTML = `<img src = ${_data_ImageUrl__WEBPACK_IMPORTED_MODULE_1__.ImageUrl.Powers[slug]} class = "card-image"><div class= "card-text">${_data_StringData__WEBPACK_IMPORTED_MODULE_2__.StringData.POWERS[slug]}</div>`;
        return card;
    }
}


/***/ }),

/***/ "./src/pages/CreditsUI.ts":
/*!********************************!*\
  !*** ./src/pages/CreditsUI.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreditsUI: () => (/* binding */ CreditsUI)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.ts");
/* harmony import */ var _data_ImageUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/ImageUrl */ "./src/data/ImageUrl.ts");
/* harmony import */ var _data_StringData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/StringData */ "./src/data/StringData.ts");
/* harmony import */ var _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/ElementFactory */ "./src/services/ElementFactory.ts");
/* harmony import */ var _SetupUI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SetupUI */ "./src/pages/SetupUI.ts");
/* harmony import */ var _BaseUI__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_BaseUI */ "./src/pages/_BaseUI.ts");






/* css used:
* credits-ui
* credits-middle
* credits-bottom
* credits-card
* credits-card-small
* credits-card-image
* credits-card-image-small
*/
class CreditsUI extends _BaseUI__WEBPACK_IMPORTED_MODULE_5__.BaseUI {
    constructor() {
        super();
        this.navigateBack = () => {
            ___WEBPACK_IMPORTED_MODULE_0__.Facade.navTo(new _SetupUI__WEBPACK_IMPORTED_MODULE_4__.SetupUI());
        };
        this.element = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.makeDiv('credits-ui');
        this.title = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.makeText(_data_StringData__WEBPACK_IMPORTED_MODULE_2__.StringData.CREDITS_TITLE, 'biggest-text');
        let middle = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.makeDiv('credits-middle');
        let bottom = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.makeDiv('credits-bottom');
        this.leftCard = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.makeDiv('credits-card');
        let leftCard = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.makeDiv('card');
        let leftImg = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.makeImg(_data_ImageUrl__WEBPACK_IMPORTED_MODULE_1__.ImageUrl.PortraitLeft, 'credits-card-image');
        let leftTitle = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.makeText(_data_StringData__WEBPACK_IMPORTED_MODULE_2__.StringData.CREDITS_LEFT_TITLE, 'big-text');
        let leftContent = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.makeText(_data_StringData__WEBPACK_IMPORTED_MODULE_2__.StringData.CREDITS_LEFT_CONTENT, 'medium-text');
        this.rightCard = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.makeDiv('credits-card');
        let rightCard = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.makeDiv('card');
        let rightImg = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.makeImg(_data_ImageUrl__WEBPACK_IMPORTED_MODULE_1__.ImageUrl.PortraitRight, 'credits-card-image');
        let rightTitle = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.makeText(_data_StringData__WEBPACK_IMPORTED_MODULE_2__.StringData.CREDITS_RIGHT_TITLE, 'big-text');
        let rightContent = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.makeText(_data_StringData__WEBPACK_IMPORTED_MODULE_2__.StringData.CREDITS_RIGHT_CONTENT, 'medium-text');
        this.bottomCard = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.makeDiv('credits-card-small');
        let bottomCard = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.makeDiv('card-small');
        let bottomImg = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.makeImg(_data_ImageUrl__WEBPACK_IMPORTED_MODULE_1__.ImageUrl.PortraitSmall, 'credits-card-image-small');
        let bottomTitle = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.makeText(_data_StringData__WEBPACK_IMPORTED_MODULE_2__.StringData.CREDITS_SMALL_TITLE, 'small-text');
        let bottomContent = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.makeText(_data_StringData__WEBPACK_IMPORTED_MODULE_2__.StringData.CREDITS_SMALL_CONTENT, 'tiny-text');
        let made = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.makeText(_data_StringData__WEBPACK_IMPORTED_MODULE_2__.StringData.CREDITS_MADE_AT, 'medium-text');
        let gamehiveText = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.makeText(_data_StringData__WEBPACK_IMPORTED_MODULE_2__.StringData.CREDITS_GH, 'medium-text');
        made.style.margin = '0.5em';
        let logo = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.makeImg(_data_ImageUrl__WEBPACK_IMPORTED_MODULE_1__.ImageUrl.ToJam, 'bottom-image');
        logo.style.marginLeft = '0.5em';
        let ghLogo = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.makeImg(_data_ImageUrl__WEBPACK_IMPORTED_MODULE_1__.ImageUrl.GameHive, 'bottom-image');
        ghLogo.style.height = '2em';
        ghLogo.style.marginLeft = '0.3em';
        ghLogo.style.transform = 'translateY(0.3em)';
        this.button1 = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.makeButton(_data_StringData__WEBPACK_IMPORTED_MODULE_2__.StringData.BUTTON_BACK, 'info-button', this.navigateBack);
        ___WEBPACK_IMPORTED_MODULE_0__.Facade.showHome(false);
        ___WEBPACK_IMPORTED_MODULE_0__.Facade.showBottom(false);
        ___WEBPACK_IMPORTED_MODULE_0__.Facade.showCredits(false);
        ___WEBPACK_IMPORTED_MODULE_0__.Facade.controlBar.hidden = true;
        _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.addElements(this.element, this.title, gamehiveText, middle, bottom);
        _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.addElements(middle, this.leftCard, this.rightCard);
        _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.addElements(bottom, this.bottomCard, this.button1, made);
        _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.addElements(made, logo);
        _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.addElements(gamehiveText, ghLogo);
        _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.addElements(this.leftCard, leftCard, leftTitle, leftContent);
        _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.addElements(leftCard, leftImg);
        _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.addElements(this.rightCard, rightCard, rightTitle, rightContent);
        _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.addElements(rightCard, rightImg);
        _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.addElements(this.bottomCard, bottomCard, bottomTitle, bottomContent);
        _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.addElements(bottomCard, bottomImg);
    }
    navIn() {
        //   animateDiv(this.title, AnimationType.BASIC_POP, 300);
        //   animateDiv(this.content, AnimationType.BASIC_POP, 600);
        //   animateDiv(this.button1, AnimationType.BASIC_POP, 900);
        // animateDiv(this.button2, AnimationType.BASIC_POP, 900);
    }
    navOut() {
        this.element.parentElement.removeChild(this.element);
    }
}


/***/ }),

/***/ "./src/pages/EndUI.ts":
/*!****************************!*\
  !*** ./src/pages/EndUI.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EndUI: () => (/* binding */ EndUI)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.ts");
/* harmony import */ var _data_StringData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/StringData */ "./src/data/StringData.ts");
/* harmony import */ var _services_ElementFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/ElementFactory */ "./src/services/ElementFactory.ts");
/* harmony import */ var _services_GameController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/GameController */ "./src/services/GameController.ts");
/* harmony import */ var _MainUI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MainUI */ "./src/pages/MainUI.ts");
/* harmony import */ var _SetupUI__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SetupUI */ "./src/pages/SetupUI.ts");
/* harmony import */ var _BaseUI__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_BaseUI */ "./src/pages/_BaseUI.ts");







class EndUI extends _BaseUI__WEBPACK_IMPORTED_MODULE_6__.BaseUI {
    constructor() {
        super();
        this.navHome = () => {
            ___WEBPACK_IMPORTED_MODULE_0__.Facade.navTo(new _MainUI__WEBPACK_IMPORTED_MODULE_4__.MainUI());
        };
        this.navGame = () => {
            _services_GameController__WEBPACK_IMPORTED_MODULE_3__.GameController.restartGame();
            ___WEBPACK_IMPORTED_MODULE_0__.Facade.navTo(new _SetupUI__WEBPACK_IMPORTED_MODULE_5__.SetupUI());
        };
        this.element = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_2__.El.makeDiv('end-ui');
        let title = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_2__.El.makeText(_data_StringData__WEBPACK_IMPORTED_MODULE_1__.StringData.GAME_OVER_TITLE, 'biggest-text');
        let table = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_2__.El.makeDiv('table-container');
        let buttonContainer = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_2__.El.makeDiv('button-box');
        let button2 = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_2__.El.makeButton(_data_StringData__WEBPACK_IMPORTED_MODULE_1__.StringData.BUTTON_PLAY_AGAIN, 'info-button', this.navGame);
        ___WEBPACK_IMPORTED_MODULE_0__.Facade.showHome(false);
        ___WEBPACK_IMPORTED_MODULE_0__.Facade.showBottom(false);
        ___WEBPACK_IMPORTED_MODULE_0__.Facade.showCredits(true);
        ___WEBPACK_IMPORTED_MODULE_0__.Facade.controlBar.hidden = true;
        _services_ElementFactory__WEBPACK_IMPORTED_MODULE_2__.El.addElements(this.element, title, table, buttonContainer);
        _services_ElementFactory__WEBPACK_IMPORTED_MODULE_2__.El.addElements(buttonContainer, button2);
        let tableInner = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_2__.ElFactory.makeLeaderboard();
        table.appendChild(tableInner);
    }
    navIn() {
        // animateDiv(this.element, AnimationType.GROW_IN);
    }
    navOut() {
        _services_ElementFactory__WEBPACK_IMPORTED_MODULE_2__.El.destroy(this.element);
        // animateDiv(this.element, AnimationType.SHRINK_OUT, 200);
        // new JMTween({}, 1000).to({}).start().onComplete(() => {
        //   this.element.parentElement.removeChild(this.element);
        // });
    }
}


/***/ }),

/***/ "./src/pages/MainUI.ts":
/*!*****************************!*\
  !*** ./src/pages/MainUI.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainUI: () => (/* binding */ MainUI)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.ts");
/* harmony import */ var _data_ImageUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/ImageUrl */ "./src/data/ImageUrl.ts");
/* harmony import */ var _data_StringData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/StringData */ "./src/data/StringData.ts");
/* harmony import */ var _services_animateDiv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/animateDiv */ "./src/services/animateDiv.ts");
/* harmony import */ var _services_ElementFactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/ElementFactory */ "./src/services/ElementFactory.ts");
/* harmony import */ var _services_GameController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/GameController */ "./src/services/GameController.ts");
/* harmony import */ var _CardPreviewUI__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CardPreviewUI */ "./src/pages/CardPreviewUI.ts");
/* harmony import */ var _SetupUI__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SetupUI */ "./src/pages/SetupUI.ts");
/* harmony import */ var _BaseUI__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_BaseUI */ "./src/pages/_BaseUI.ts");









/* css used:
* main-ui
* main-logo
* bigger-text
* giant-button
*/
class MainUI extends _BaseUI__WEBPACK_IMPORTED_MODULE_8__.BaseUI {
    // private button2: HTMLElement;
    constructor() {
        super();
        this.GTimerOn = false;
        this.navigateStart = () => {
            ___WEBPACK_IMPORTED_MODULE_0__.Facade.navTo(new _SetupUI__WEBPACK_IMPORTED_MODULE_7__.SetupUI());
        };
        this.navigatePreview = () => {
            ___WEBPACK_IMPORTED_MODULE_0__.Facade.navTo(new _CardPreviewUI__WEBPACK_IMPORTED_MODULE_6__.CardPreviewUI());
        };
        this.onKeyDown = (e) => {
            if (e.key === 'c') {
                this.navigatePreview();
            }
            else if (e.key === 'g') {
                this.GTimerOn = true;
                window.setTimeout(() => this.GTimerOn = false, 1000);
            }
            else if (e.key === 'h') {
                if (this.GTimerOn) {
                    this.enableGHMode();
                }
            }
        };
        this.element = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_4__.El.makeDiv('main-ui');
        this.title = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_4__.El.makeImg(_data_ImageUrl__WEBPACK_IMPORTED_MODULE_1__.ImageUrl.Logo, 'main-logo');
        this.content = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_4__.El.makeText(_data_StringData__WEBPACK_IMPORTED_MODULE_2__.StringData.MAIN_CONTENT, 'bigger-text');
        this.gamehive = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_4__.El.makeText(_data_StringData__WEBPACK_IMPORTED_MODULE_2__.StringData.GAMEHIVE_EDITION, 'big-text');
        this.button1 = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_4__.El.makeButton(_data_StringData__WEBPACK_IMPORTED_MODULE_2__.StringData.BUTTON_NEW_GAME, 'giant-button', this.navigateStart);
        ___WEBPACK_IMPORTED_MODULE_0__.Facade.showHome(false);
        ___WEBPACK_IMPORTED_MODULE_0__.Facade.showBottom(false);
        ___WEBPACK_IMPORTED_MODULE_0__.Facade.showCredits(true);
        ___WEBPACK_IMPORTED_MODULE_0__.Facade.controlBar.hidden = true;
        _services_ElementFactory__WEBPACK_IMPORTED_MODULE_4__.El.addElements(this.element, this.title, this.gamehive, this.content, this.button1);
        this.gamehive.style.display = 'none';
    }
    navIn() {
        (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_3__.animateDiv)(this.title, _services_animateDiv__WEBPACK_IMPORTED_MODULE_3__.AnimationType.BASIC_POP, 300);
        (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_3__.animateDiv)(this.content, _services_animateDiv__WEBPACK_IMPORTED_MODULE_3__.AnimationType.BASIC_POP, 600);
        (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_3__.animateDiv)(this.button1, _services_animateDiv__WEBPACK_IMPORTED_MODULE_3__.AnimationType.BASIC_POP, 900);
        ___WEBPACK_IMPORTED_MODULE_0__.Facade.popCredits(1200);
        window.addEventListener('keydown', this.onKeyDown);
    }
    navOut() {
        // animateDiv(this.title, AnimationType.BACK_OUT, 100);
        // animateDiv(this.button1, AnimationType.BACK_OUT, 200);
        // animateDiv(this.button2, AnimationType.BACK_OUT, 200);
        // animateDiv(this.element, AnimationType.SLIDE_OUT);
        // new JMTween({}, 1000).to({}).start().onComplete(() => {
        this.element.parentElement.removeChild(this.element);
        // });
        window.removeEventListener('keydown', this.onKeyDown);
    }
    enableGHMode() {
        _services_GameController__WEBPACK_IMPORTED_MODULE_5__.GameController.GHMode = true;
        this.gamehive.style.removeProperty('display');
        (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_3__.animateDiv)(this.gamehive, _services_animateDiv__WEBPACK_IMPORTED_MODULE_3__.AnimationType.SPIN);
    }
}


/***/ }),

/***/ "./src/pages/RoundUI.ts":
/*!******************************!*\
  !*** ./src/pages/RoundUI.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoundUI: () => (/* binding */ RoundUI)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.ts");
/* harmony import */ var _components_Avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Avatar */ "./src/components/Avatar.ts");
/* harmony import */ var _components_TimerCircle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/TimerCircle */ "./src/components/TimerCircle.ts");
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Config */ "./src/Config.ts");
/* harmony import */ var _data_ImageUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/ImageUrl */ "./src/data/ImageUrl.ts");
/* harmony import */ var _data_StringData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/StringData */ "./src/data/StringData.ts");
/* harmony import */ var _JMGE_JMTween__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../JMGE/JMTween */ "./src/JMGE/JMTween.ts");
/* harmony import */ var _services_animateDiv__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/animateDiv */ "./src/services/animateDiv.ts");
/* harmony import */ var _services_ElementFactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/ElementFactory */ "./src/services/ElementFactory.ts");
/* harmony import */ var _services_GameController__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/GameController */ "./src/services/GameController.ts");
/* harmony import */ var _EndUI__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./EndUI */ "./src/pages/EndUI.ts");
/* harmony import */ var _BaseUI__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_BaseUI */ "./src/pages/_BaseUI.ts");












/* css used:
* round-ui
* round-top
* round-bottom
* round-title
*/
class RoundUI extends _BaseUI__WEBPACK_IMPORTED_MODULE_11__.BaseUI {
    constructor() {
        super();
        this.names = [];
        this.cards = [[], []];
        this.canVote = false;
        this.phaseIntro = () => {
            new _JMGE_JMTween__WEBPACK_IMPORTED_MODULE_6__.JMTween({}, 300).to({}).start().onComplete(() => {
                _services_ElementFactory__WEBPACK_IMPORTED_MODULE_8__.El.addElements(this.topSection, this.leftSection, this.vs, this.rightSection);
                (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_7__.animateDiv)(this.leftSection, _services_animateDiv__WEBPACK_IMPORTED_MODULE_7__.AnimationType.GROW_IN);
                (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_7__.animateDiv)(this.names[0], _services_animateDiv__WEBPACK_IMPORTED_MODULE_7__.AnimationType.BIG_IN, 0);
                (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_7__.animateDiv)(this.vs, _services_animateDiv__WEBPACK_IMPORTED_MODULE_7__.AnimationType.GROW_IN, 1000);
                (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_7__.animateDiv)(this.rightSection, _services_animateDiv__WEBPACK_IMPORTED_MODULE_7__.AnimationType.GROW_IN, 1500);
                (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_7__.animateDiv)(this.names[1], _services_animateDiv__WEBPACK_IMPORTED_MODULE_7__.AnimationType.BIG_IN, 1500);
                this.cards[0][0].classList.add('card-back-character');
                this.cards[0][1].classList.add('card-back-power');
                this.cards[1][0].classList.add('card-back-character');
                this.cards[1][1].classList.add('card-back-power');
                (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_7__.animateDiv)(this.cards[0][0], _services_animateDiv__WEBPACK_IMPORTED_MODULE_7__.AnimationType.GROW_IN, 2500, () => (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_7__.animateDiv)(this.cards[0][0], _services_animateDiv__WEBPACK_IMPORTED_MODULE_7__.AnimationType.FLIP_A, 0, () => {
                    this.setCardFront(this.cards[0][0], _Config__WEBPACK_IMPORTED_MODULE_3__.RoundData.cards[0][0], _data_StringData__WEBPACK_IMPORTED_MODULE_5__.StringData.CHARACTER_REVERSIBLE[_Config__WEBPACK_IMPORTED_MODULE_3__.RoundData.cards[0][0]], false);
                    (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_7__.animateDiv)(this.cards[0][0], _services_animateDiv__WEBPACK_IMPORTED_MODULE_7__.AnimationType.FLIP_B);
                }));
                (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_7__.animateDiv)(this.cards[0][1], _services_animateDiv__WEBPACK_IMPORTED_MODULE_7__.AnimationType.GROW_IN, 2600, () => (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_7__.animateDiv)(this.cards[0][1], _services_animateDiv__WEBPACK_IMPORTED_MODULE_7__.AnimationType.FLIP_A, 0, () => {
                    this.setCardFront(this.cards[0][1], _Config__WEBPACK_IMPORTED_MODULE_3__.RoundData.cards[0][1], _data_StringData__WEBPACK_IMPORTED_MODULE_5__.StringData.POWER_REVERSIBLE[_Config__WEBPACK_IMPORTED_MODULE_3__.RoundData.cards[0][1]], true);
                    (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_7__.animateDiv)(this.cards[0][1], _services_animateDiv__WEBPACK_IMPORTED_MODULE_7__.AnimationType.FLIP_B);
                }));
                (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_7__.animateDiv)(this.cards[1][0], _services_animateDiv__WEBPACK_IMPORTED_MODULE_7__.AnimationType.GROW_IN, 3000, () => (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_7__.animateDiv)(this.cards[1][0], _services_animateDiv__WEBPACK_IMPORTED_MODULE_7__.AnimationType.FLIP_A, 0, () => {
                    this.setCardFront(this.cards[1][0], _Config__WEBPACK_IMPORTED_MODULE_3__.RoundData.cards[1][0], false, false);
                    (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_7__.animateDiv)(this.cards[1][0], _services_animateDiv__WEBPACK_IMPORTED_MODULE_7__.AnimationType.FLIP_B);
                }));
                (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_7__.animateDiv)(this.cards[1][1], _services_animateDiv__WEBPACK_IMPORTED_MODULE_7__.AnimationType.GROW_IN, 3100, () => (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_7__.animateDiv)(this.cards[1][1], _services_animateDiv__WEBPACK_IMPORTED_MODULE_7__.AnimationType.FLIP_A, 0, () => {
                    this.setCardFront(this.cards[1][1], _Config__WEBPACK_IMPORTED_MODULE_3__.RoundData.cards[1][1], false, true);
                    (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_7__.animateDiv)(this.cards[1][1], _services_animateDiv__WEBPACK_IMPORTED_MODULE_7__.AnimationType.FLIP_B);
                }));
                (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_7__.animateDiv)(this.names[0], _services_animateDiv__WEBPACK_IMPORTED_MODULE_7__.AnimationType.BIG_OUT, 5000);
                (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_7__.animateDiv)(this.names[1], _services_animateDiv__WEBPACK_IMPORTED_MODULE_7__.AnimationType.BIG_OUT, 5000);
                this.bottomTitle.innerHTML = _data_StringData__WEBPACK_IMPORTED_MODULE_5__.StringData.ROUND_INTRO_TITLE;
                (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_7__.animateDiv)(this.bottomTitle, _services_animateDiv__WEBPACK_IMPORTED_MODULE_7__.AnimationType.GROW_IN, 3500, () => {
                    this.timer.canSkip = true;
                    if (_services_GameController__WEBPACK_IMPORTED_MODULE_9__.GameController.pauseMode) {
                        ___WEBPACK_IMPORTED_MODULE_0__.Facade.controlBar.showButton('next', true);
                    }
                    else {
                        ___WEBPACK_IMPORTED_MODULE_0__.Facade.controlBar.showButton('skip', true);
                        ___WEBPACK_IMPORTED_MODULE_0__.Facade.controlBar.showButton('pause', true);
                    }
                });
            });
            this.timer.reset(_Config__WEBPACK_IMPORTED_MODULE_3__.SessionData.timing.intro).blinkAt(_Config__WEBPACK_IMPORTED_MODULE_3__.SessionData.blinkTiming.intro).onComplete(this.phaseLeftPlay).start();
            ___WEBPACK_IMPORTED_MODULE_0__.Facade.controlBar.onTimerRefreshed();
            this.timer.canSkip = false;
        };
        this.phaseLeftPlay = () => {
            this.bottomTitle.innerHTML = `${_Config__WEBPACK_IMPORTED_MODULE_3__.RoundData.players[0]}, ${_data_StringData__WEBPACK_IMPORTED_MODULE_5__.StringData.ROUND_PLAY_TITLE}`;
            this.leftSection.classList.add('left-highlight');
            this.leftSection.appendChild(this.leftAvatar.element);
            this.rightSection.appendChild(this.rightAvatar.element);
            if (_services_GameController__WEBPACK_IMPORTED_MODULE_9__.GameController.pauseMode) {
                this.timer.onComplete(this.phaseRightPlay);
                this.timer.canSkip = true;
                this.timer.element.parentElement.removeChild(this.timer.element);
            }
            else {
                this.timer.reset(_Config__WEBPACK_IMPORTED_MODULE_3__.SessionData.timing.player_left).blinkAt(_Config__WEBPACK_IMPORTED_MODULE_3__.SessionData.blinkTiming.player_left).onComplete(this.phaseRightPlay).start();
                ___WEBPACK_IMPORTED_MODULE_0__.Facade.controlBar.onTimerRefreshed();
                this.timer.canSkip = true;
                this.timer.element.classList.add('timer-left');
                this.leftSection.appendChild(this.timer.element);
            }
            this.rightAvatar.setState('passive');
            (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_7__.animateDiv)(this.bottomTitle, _services_animateDiv__WEBPACK_IMPORTED_MODULE_7__.AnimationType.BASIC_POP, 200);
            (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_7__.animateDiv)(this.cards[0][0], _services_animateDiv__WEBPACK_IMPORTED_MODULE_7__.AnimationType.PULSE);
            (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_7__.animateDiv)(this.cards[0][1], _services_animateDiv__WEBPACK_IMPORTED_MODULE_7__.AnimationType.PULSE);
        };
        this.phaseRightPlay = () => {
            this.bottomTitle.innerHTML = `${_Config__WEBPACK_IMPORTED_MODULE_3__.RoundData.players[1]}, ${_data_StringData__WEBPACK_IMPORTED_MODULE_5__.StringData.ROUND_PLAY_TITLE}`;
            this.leftSection.classList.remove('left-highlight');
            this.rightSection.classList.add('right-highlight');
            if (_services_GameController__WEBPACK_IMPORTED_MODULE_9__.GameController.pauseMode) {
                this.timer.onComplete(this.phaseVote);
            }
            else {
                this.timer.reset(_Config__WEBPACK_IMPORTED_MODULE_3__.SessionData.timing.player_right).blinkAt(_Config__WEBPACK_IMPORTED_MODULE_3__.SessionData.blinkTiming.player_right).onComplete(this.phaseOpen).start();
                ___WEBPACK_IMPORTED_MODULE_0__.Facade.controlBar.onTimerRefreshed();
                this.timer.element.classList.remove('timer-left');
                this.timer.element.classList.add('timer-right');
                this.rightSection.appendChild(this.timer.element);
            }
            this.rightAvatar.setState('active');
            this.leftAvatar.setState('passive');
            (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_7__.animateDiv)(this.bottomTitle, _services_animateDiv__WEBPACK_IMPORTED_MODULE_7__.AnimationType.BASIC_POP, 200);
            (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_7__.animateDiv)(this.cards[1][0], _services_animateDiv__WEBPACK_IMPORTED_MODULE_7__.AnimationType.PULSE);
            (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_7__.animateDiv)(this.cards[1][1], _services_animateDiv__WEBPACK_IMPORTED_MODULE_7__.AnimationType.PULSE);
        };
        this.phaseOpen = () => {
            if (!_Config__WEBPACK_IMPORTED_MODULE_3__.SessionData.open_phase) {
                this.phaseVote();
                return;
            }
            this.bottomTitle.innerHTML = _data_StringData__WEBPACK_IMPORTED_MODULE_5__.StringData.ROUND_OPEN_TITLE;
            this.bottomContent.innerHTML = _data_StringData__WEBPACK_IMPORTED_MODULE_5__.StringData.ROUND_OPEN_TEXT;
            this.leftSection.classList.add('left-highlight');
            if (_services_GameController__WEBPACK_IMPORTED_MODULE_9__.GameController.pauseMode) {
                this.timer.onComplete(this.phaseVote);
            }
            else {
                this.timer.reset(_Config__WEBPACK_IMPORTED_MODULE_3__.SessionData.timing.open).blinkAt(_Config__WEBPACK_IMPORTED_MODULE_3__.SessionData.blinkTiming.open).onComplete(this.phaseVote).start();
                ___WEBPACK_IMPORTED_MODULE_0__.Facade.controlBar.onTimerRefreshed();
                this.timer.element.classList.remove('timer-right');
                this.element.appendChild(this.timer.element);
            }
            this.rightAvatar.setState('active');
            this.leftAvatar.setState('active');
            (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_7__.animateDiv)(this.bottomTitle, _services_animateDiv__WEBPACK_IMPORTED_MODULE_7__.AnimationType.BASIC_POP);
            (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_7__.animateDiv)(this.bottomContent, _services_animateDiv__WEBPACK_IMPORTED_MODULE_7__.AnimationType.BASIC_POP, 100);
            this.audience.style.removeProperty('display');
            (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_7__.animateDiv)(this.audience, _services_animateDiv__WEBPACK_IMPORTED_MODULE_7__.AnimationType.SLIDE_IN);
        };
        this.phaseVote = () => {
            this.canVote = true;
            this.bottomTitle.innerHTML = _data_StringData__WEBPACK_IMPORTED_MODULE_5__.StringData.ROUND_VOTE_TITLE;
            this.bottomContent.innerHTML = _data_StringData__WEBPACK_IMPORTED_MODULE_5__.StringData.ROUND_VOTE_TEXT;
            this.leftSection.classList.remove('left-highlight');
            this.rightSection.classList.remove('right-highlight');
            ___WEBPACK_IMPORTED_MODULE_0__.Facade.controlBar.showButton('vote', true);
            if (_services_GameController__WEBPACK_IMPORTED_MODULE_9__.GameController.pauseMode) {
                this.timer.onComplete(this.phaseVote2);
                ___WEBPACK_IMPORTED_MODULE_0__.Facade.controlBar.showButton('next', false);
            }
            else {
                this.timer.reset(_Config__WEBPACK_IMPORTED_MODULE_3__.SessionData.timing.vote).blinkAt(_Config__WEBPACK_IMPORTED_MODULE_3__.SessionData.blinkTiming.vote).onComplete(this.phaseVote2).start();
                ___WEBPACK_IMPORTED_MODULE_0__.Facade.controlBar.onTimerRefreshed();
                this.timer.element.classList.remove('timer-right');
                this.element.appendChild(this.timer.element);
            }
            this.rightAvatar.setState('ready');
            this.leftAvatar.setState('ready');
            this.audience.style.removeProperty('display');
            (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_7__.animateDiv)(this.bottomTitle, _services_animateDiv__WEBPACK_IMPORTED_MODULE_7__.AnimationType.BASIC_POP);
            (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_7__.animateDiv)(this.bottomContent, _services_animateDiv__WEBPACK_IMPORTED_MODULE_7__.AnimationType.BASIC_POP, 100);
            if (!_Config__WEBPACK_IMPORTED_MODULE_3__.SessionData.open_phase) {
                (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_7__.animateDiv)(this.audience, _services_animateDiv__WEBPACK_IMPORTED_MODULE_7__.AnimationType.SLIDE_IN);
            }
        };
        this.phaseVote2 = () => {
            this.bottomTitle.innerHTML = _data_StringData__WEBPACK_IMPORTED_MODULE_5__.StringData.ROUND_VOTE_TITLE2;
            this.bottomContent.innerHTML = _data_StringData__WEBPACK_IMPORTED_MODULE_5__.StringData.ROUND_VOTE_TEXT2;
            this.timer.reset(_Config__WEBPACK_IMPORTED_MODULE_3__.SessionData.timing.vote2).blinkAt(_Config__WEBPACK_IMPORTED_MODULE_3__.SessionData.blinkTiming.vote2).onComplete(this.phaseLeaderboard).start();
            ___WEBPACK_IMPORTED_MODULE_0__.Facade.controlBar.onTimerRefreshed();
            this.loopPulseVote();
        };
        this.loopPulseVote = () => {
            if (!this.canVote)
                return;
            if (this.winner || this.winner === 0)
                return;
            ___WEBPACK_IMPORTED_MODULE_0__.Facade.controlBar.pulseVotes();
            window.setTimeout(this.loopPulseVote, 1000);
        };
        this.phaseLeaderboard = () => {
            this.canVote = false;
            ___WEBPACK_IMPORTED_MODULE_0__.Facade.controlBar.showButton('vote', false);
            if (!this.winner && this.winner !== 0)
                this.winner = -1;
            _Config__WEBPACK_IMPORTED_MODULE_3__.RoundData.winner = this.winner;
            this.element.appendChild(this.timer.element);
            if (_services_GameController__WEBPACK_IMPORTED_MODULE_9__.GameController.pauseMode) {
                ___WEBPACK_IMPORTED_MODULE_0__.Facade.controlBar.showButton('skip', true);
            }
            this.timer.reset(_Config__WEBPACK_IMPORTED_MODULE_3__.SessionData.timing.leaderboard).blinkAt(_Config__WEBPACK_IMPORTED_MODULE_3__.SessionData.blinkTiming.leaderboard).onComplete(this.navGame).start();
            ___WEBPACK_IMPORTED_MODULE_0__.Facade.controlBar.onTimerRefreshed();
            if (this.winner === 0) {
                _services_GameController__WEBPACK_IMPORTED_MODULE_9__.GameController.scorePlayer(_Config__WEBPACK_IMPORTED_MODULE_3__.RoundData.players[_Config__WEBPACK_IMPORTED_MODULE_3__.RoundData.winner]);
                this.leftAvatar.setState('win');
                this.rightAvatar.setState('lose');
                this.bottomTitle.innerHTML = `${_Config__WEBPACK_IMPORTED_MODULE_3__.RoundData.players[0]} Wins!`;
                this.bottomContent.innerHTML = _data_StringData__WEBPACK_IMPORTED_MODULE_5__.StringData.ROUND_WINS_TEXT;
                this.leftSection.appendChild(this.overlayWinner);
                // this.winAnimateEnd = loopAnimation(this.overlayWinner, AnimationType.SMOOTH_PULSE, 0);
                // this.rightSection.appendChild(this.overlayLoser);
            }
            else if (this.winner === 1) {
                _services_GameController__WEBPACK_IMPORTED_MODULE_9__.GameController.scorePlayer(_Config__WEBPACK_IMPORTED_MODULE_3__.RoundData.players[_Config__WEBPACK_IMPORTED_MODULE_3__.RoundData.winner]);
                this.leftAvatar.setState('lose');
                this.rightAvatar.setState('win');
                this.bottomTitle.innerHTML = `${_Config__WEBPACK_IMPORTED_MODULE_3__.RoundData.players[1]} Wins!`;
                this.rightSection.appendChild(this.overlayWinner);
                // this.winAnimateEnd = loopAnimation(this.overlayWinner, AnimationType.SMOOTH_PULSE, 0);
                // this.leftSection.appendChild(this.overlayLoser);
            }
            else {
                this.rightAvatar.setState('passive');
                this.leftAvatar.setState('passive');
                _services_GameController__WEBPACK_IMPORTED_MODULE_9__.GameController.scorePlayer(_Config__WEBPACK_IMPORTED_MODULE_3__.RoundData.players[0], 0.5);
                _services_GameController__WEBPACK_IMPORTED_MODULE_9__.GameController.scorePlayer(_Config__WEBPACK_IMPORTED_MODULE_3__.RoundData.players[1], 0.5);
                this.bottomTitle.innerHTML = _data_StringData__WEBPACK_IMPORTED_MODULE_5__.StringData.ROUND_TIE_TITLE;
                this.bottomContent.innerHTML = _data_StringData__WEBPACK_IMPORTED_MODULE_5__.StringData.ROUND_TIE_TEXT;
            }
        };
        this.setWinner = (player) => {
            if (!this.canVote)
                return;
            if (this.winner === player) {
                this.phaseLeaderboard();
            }
            else {
                this.winner = player;
            }
        };
        this.navGame = () => {
            this.winAnimateEnd && this.winAnimateEnd();
            if (_services_GameController__WEBPACK_IMPORTED_MODULE_9__.GameController.isGameOver()) {
                ___WEBPACK_IMPORTED_MODULE_0__.Facade.navTo(new _EndUI__WEBPACK_IMPORTED_MODULE_10__.EndUI());
            }
            else {
                ___WEBPACK_IMPORTED_MODULE_0__.Facade.navTo(new RoundUI());
            }
        };
        this.element = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_8__.El.makeDiv('round-ui');
        let round = ++_Config__WEBPACK_IMPORTED_MODULE_3__.RoundData.round;
        _services_GameController__WEBPACK_IMPORTED_MODULE_9__.GameController.resetRound();
        _Config__WEBPACK_IMPORTED_MODULE_3__.RoundData.players[0] = _services_GameController__WEBPACK_IMPORTED_MODULE_9__.GameController.selectPlayer();
        _Config__WEBPACK_IMPORTED_MODULE_3__.RoundData.players[1] = _services_GameController__WEBPACK_IMPORTED_MODULE_9__.GameController.selectPlayer();
        _Config__WEBPACK_IMPORTED_MODULE_3__.RoundData.cards[0][0] = _services_GameController__WEBPACK_IMPORTED_MODULE_9__.GameController.selectCharacter();
        _Config__WEBPACK_IMPORTED_MODULE_3__.RoundData.cards[1][0] = _services_GameController__WEBPACK_IMPORTED_MODULE_9__.GameController.selectCharacter();
        _Config__WEBPACK_IMPORTED_MODULE_3__.RoundData.cards[0][1] = _services_GameController__WEBPACK_IMPORTED_MODULE_9__.GameController.selectPower();
        _Config__WEBPACK_IMPORTED_MODULE_3__.RoundData.cards[1][1] = _services_GameController__WEBPACK_IMPORTED_MODULE_9__.GameController.selectPower();
        this.title = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_8__.El.makeText(`${_data_StringData__WEBPACK_IMPORTED_MODULE_5__.StringData.ROUND_TITLE} ${round}`, 'biggest-text');
        this.topSection = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_8__.El.makeDiv('round-top');
        let bottomSection = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_8__.El.makeDiv('round-bottom');
        this.bottomTitle = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_8__.El.makeText('', 'big-text');
        this.bottomTitle.style.zIndex = '1';
        this.bottomContent = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_8__.El.makeText('', 'medium-text');
        this.bottomContent.style.zIndex = '1';
        [this.leftSection, this.names[0], this.cards[0][0], this.cards[0][1]] = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_8__.ElFactory.makePlayerSection(_Config__WEBPACK_IMPORTED_MODULE_3__.RoundData.players[0], _data_StringData__WEBPACK_IMPORTED_MODULE_5__.StringData.ROUND_PLAYER_1);
        [this.rightSection, this.names[1], this.cards[1][0], this.cards[1][1]] = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_8__.ElFactory.makePlayerSection(_Config__WEBPACK_IMPORTED_MODULE_3__.RoundData.players[1], _data_StringData__WEBPACK_IMPORTED_MODULE_5__.StringData.ROUND_PLAYER_2);
        this.vs = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_8__.El.makeText(_data_StringData__WEBPACK_IMPORTED_MODULE_5__.StringData.ROUND_VS, 'vs-text');
        this.timer = new _components_TimerCircle__WEBPACK_IMPORTED_MODULE_2__.TimerCircle();
        this.leftAvatar = new _components_Avatar__WEBPACK_IMPORTED_MODULE_1__.Avatar();
        this.rightAvatar = new _components_Avatar__WEBPACK_IMPORTED_MODULE_1__.Avatar();
        this.audience = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_8__.El.makeImg(_data_ImageUrl__WEBPACK_IMPORTED_MODULE_4__.ImageUrl.Audience, 'round-audience');
        this.audience.style.display = 'none';
        this.leftAvatar.faceRight(true);
        this.rightAvatar.faceRight(false);
        this.roundCount = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_8__.El.makeText(`Rounds: ${_Config__WEBPACK_IMPORTED_MODULE_3__.RoundData.round} / ${_services_GameController__WEBPACK_IMPORTED_MODULE_9__.GameController.numRounds()}`, 'small-text');
        this.overlayWinner = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_8__.El.makeImg(_data_ImageUrl__WEBPACK_IMPORTED_MODULE_4__.ImageUrl.OverlayWinner, 'winner-overlay');
        this.overlayLoser = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_8__.El.makeImg(_data_ImageUrl__WEBPACK_IMPORTED_MODULE_4__.ImageUrl.OverlayLoser, 'loser-overlay');
        ___WEBPACK_IMPORTED_MODULE_0__.Facade.showHome(true);
        ___WEBPACK_IMPORTED_MODULE_0__.Facade.showBottom(false);
        ___WEBPACK_IMPORTED_MODULE_0__.Facade.showCredits(false);
        ___WEBPACK_IMPORTED_MODULE_0__.Facade.controlBar.hidden = false;
        ___WEBPACK_IMPORTED_MODULE_0__.Facade.controlBar.setNames(_Config__WEBPACK_IMPORTED_MODULE_3__.RoundData.players[0], _Config__WEBPACK_IMPORTED_MODULE_3__.RoundData.players[1]);
        ___WEBPACK_IMPORTED_MODULE_0__.Facade.controlBar.setCallbacks(this.timer.skipTimer, this.timer.pauseTimer, this.setWinner);
        ___WEBPACK_IMPORTED_MODULE_0__.Facade.controlBar.showButton('skip', false);
        ___WEBPACK_IMPORTED_MODULE_0__.Facade.controlBar.showButton('pause', false);
        ___WEBPACK_IMPORTED_MODULE_0__.Facade.controlBar.showButton('vote', false);
        _services_ElementFactory__WEBPACK_IMPORTED_MODULE_8__.El.addElements(this.element, this.title, this.topSection, this.timer.element, bottomSection);
        _services_ElementFactory__WEBPACK_IMPORTED_MODULE_8__.El.addElements(bottomSection, this.bottomTitle, this.bottomContent, this.audience);
        // El.addElements(subEl, this.topSection); //this.bottomTitle, this.audience
        this.phaseIntro();
    }
    navIn() {
        (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_7__.animateDiv)(this.title, _services_animateDiv__WEBPACK_IMPORTED_MODULE_7__.AnimationType.GROW_IN);
        // animateDiv(this.element, AnimationType.GROW_IN);
    }
    navOut() {
        this.timer.destroy();
        _services_ElementFactory__WEBPACK_IMPORTED_MODULE_8__.El.destroy(this.element);
        //   animateDiv(this.element, AnimationType.SHRINK_OUT, 200);
        //   new JMTween({}, 1000).to({}).start().onComplete(() => {
        //     this.element.parentElement.removeChild(this.element);
        //   });
    }
    setCardFront(el, slug, reverse = false, power = false) {
        if (power) {
            el.classList.remove('card-back-power');
            el.innerHTML = `<img src = ${_data_ImageUrl__WEBPACK_IMPORTED_MODULE_4__.ImageUrl.Powers[slug]} class = "card-image${reverse ? ' card-image-reverse' : ''}"><div class= "card-text">${_data_StringData__WEBPACK_IMPORTED_MODULE_5__.StringData.POWERS[slug]}</div>`;
        }
        else {
            el.classList.remove('card-back-character');
            el.innerHTML = `<img src = ${_data_ImageUrl__WEBPACK_IMPORTED_MODULE_4__.ImageUrl.Characters[slug]} class = "card-image${reverse ? ' card-image-reverse' : ''}"><div class= "card-text">${_data_StringData__WEBPACK_IMPORTED_MODULE_5__.StringData.CHARACTERS[slug]}</div>`;
        }
    }
}


/***/ }),

/***/ "./src/pages/SetupUI.ts":
/*!******************************!*\
  !*** ./src/pages/SetupUI.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SetupUI: () => (/* binding */ SetupUI)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.ts");
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Config */ "./src/Config.ts");
/* harmony import */ var _data_ImageUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/ImageUrl */ "./src/data/ImageUrl.ts");
/* harmony import */ var _data_StringData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/StringData */ "./src/data/StringData.ts");
/* harmony import */ var _services_animateDiv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/animateDiv */ "./src/services/animateDiv.ts");
/* harmony import */ var _services_ElementFactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/ElementFactory */ "./src/services/ElementFactory.ts");
/* harmony import */ var _services_GameController__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/GameController */ "./src/services/GameController.ts");
/* harmony import */ var _RoundUI__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./RoundUI */ "./src/pages/RoundUI.ts");
/* harmony import */ var _BaseUI__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_BaseUI */ "./src/pages/_BaseUI.ts");









/* css used:
* setup-ui
* setup-left
* setup-right
* setup-content

* main-logo
* giant-button
* info-button
* name-element
* delete-button
*/
class SetupUI extends _BaseUI__WEBPACK_IMPORTED_MODULE_8__.BaseUI {
    constructor() {
        super();
        this.SCROLL_SPEED = 10000;
        this.navCircles = [];
        this.names = [];
        this.cPage = 0;
        this.nextPage = () => {
            this.leftImage.src = _data_ImageUrl__WEBPACK_IMPORTED_MODULE_2__.ImageUrl.InfoPages[this.cPage];
            this.instructions.innerHTML = _data_StringData__WEBPACK_IMPORTED_MODULE_3__.StringData.InfoPages[this.cPage];
            this.navCircles.forEach((circle, i) => {
                if (i === this.cPage) {
                    circle.classList.add('highlight');
                }
                else {
                    circle.classList.remove('highlight');
                }
            });
            this.cPage = (this.cPage + 1) % _data_ImageUrl__WEBPACK_IMPORTED_MODULE_2__.ImageUrl.InfoPages.length;
            this.cTimeout = window.setTimeout(this.nextPage, this.SCROLL_SPEED);
        };
        this.navLeft = () => {
            window.clearTimeout(this.cTimeout);
            this.cPage = this.cPage - 2;
            if (this.cPage < 0)
                this.cPage += _data_ImageUrl__WEBPACK_IMPORTED_MODULE_2__.ImageUrl.InfoPages.length;
            this.nextPage();
        };
        this.navRight = () => {
            window.clearTimeout(this.cTimeout);
            this.nextPage();
        };
        this.navGame = () => {
            this.updatePlayers();
            if (_Config__WEBPACK_IMPORTED_MODULE_1__.SessionData.players.length <= 1) {
                _services_ElementFactory__WEBPACK_IMPORTED_MODULE_5__.ElFactory.makeAlert('You must have 2 or more players.');
                return;
            }
            ___WEBPACK_IMPORTED_MODULE_0__.Facade.navTo(new _RoundUI__WEBPACK_IMPORTED_MODULE_7__.RoundUI());
        };
        this.addNameElement = (name) => {
            let last = this.names[this.names.length - 1];
            if (last && last.input.value === '')
                return;
            if (this.names.length >= 14)
                return;
            let el = this.makeNameElement();
            this.nameContainer.appendChild(el.element);
            this.nameContainer.appendChild(this.addButton);
            this.names.push(el);
            if (name)
                el.input.value = name;
            if (this.names.length >= 14)
                this.addButton.style.display = 'none';
            return el;
        };
        this.removeNameElement = (el) => {
            if (this.names.length <= 1)
                return;
            this.nameContainer.removeChild(el.element);
            let i = this.names.indexOf(el);
            this.names.splice(i, 1);
            this.addButton.style.removeProperty('display');
        };
        this.makeNameElement = () => {
            let element = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_5__.El.makeDiv();
            let input = document.createElement('input');
            input.classList.add('name-element');
            input.maxLength = 12;
            let m = { input, element };
            let deleteB = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_5__.El.makeButton('X', 'delete-button', () => this.removeNameElement(m));
            element.appendChild(deleteB);
            _services_ElementFactory__WEBPACK_IMPORTED_MODULE_5__.El.addElements(element, input, deleteB);
            return m;
        };
        this.updatePlayers = () => {
            _services_GameController__WEBPACK_IMPORTED_MODULE_6__.GameController.resetSession(this.names.map(el => el.input.value));
        };
        this.onKeyDown = (e) => {
            if (e.key === 'Enter') {
                let selected = document.getSelection().focusNode;
                let index = this.names.findIndex(el => el.element === selected);
                if (index >= 0 && index < this.names.length - 1) {
                    let next = this.names[index + 1];
                    next.input.focus();
                }
                else {
                    let newEl = this.addNameElement();
                    if (newEl)
                        newEl.input.focus();
                }
            }
        };
        this.toggleMode = () => {
            _services_GameController__WEBPACK_IMPORTED_MODULE_6__.GameController.pauseMode = !_services_GameController__WEBPACK_IMPORTED_MODULE_6__.GameController.pauseMode;
            if (_services_GameController__WEBPACK_IMPORTED_MODULE_6__.GameController.pauseMode) {
                this.pauseMode.innerHTML = _data_StringData__WEBPACK_IMPORTED_MODULE_3__.StringData.BUTTON_MODE_WAIT;
            }
            else {
                this.pauseMode.innerHTML = _data_StringData__WEBPACK_IMPORTED_MODULE_3__.StringData.BUTTON_MODE_TIMER;
            }
        };
        this.element = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_5__.El.makeDiv('setup-ui');
        let top = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_5__.El.makeDiv('setup-ui-top');
        let leftSide = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_5__.El.makeDiv('setup-left');
        let rightSide = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_5__.El.makeDiv('setup-right');
        let divider = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_5__.El.makeImg(_data_ImageUrl__WEBPACK_IMPORTED_MODULE_2__.ImageUrl.Divider);
        divider.style.height = '85vh';
        // let centerLine = El.makeDiv('setup-line');
        this.leftImage = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_5__.El.makeImg(_data_ImageUrl__WEBPACK_IMPORTED_MODULE_2__.ImageUrl.Logo, 'setup-logo');
        this.leftHeader = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_5__.El.makeText(_data_StringData__WEBPACK_IMPORTED_MODULE_3__.StringData.INFO_TITLE, 'biggest-text');
        this.rightHeader = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_5__.El.makeText(_data_StringData__WEBPACK_IMPORTED_MODULE_3__.StringData.SETUP_PLAYER_TITLE, 'biggest-text');
        this.instructions = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_5__.El.makeText(_data_StringData__WEBPACK_IMPORTED_MODULE_3__.StringData.SETUP_OPTIONS_TEXT, 'medium-text');
        this.instructions.style.width = '90%';
        this.navigation = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_5__.El.makeDiv('setup-nav-container');
        let leftNav = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_5__.El.makeButton('<', 'small-button', this.navLeft);
        let rightNav = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_5__.El.makeButton('>', 'small-button', this.navRight);
        this.rightContent = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_5__.El.makeDiv('setup-content');
        this.startGame = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_5__.El.makeButton(_data_StringData__WEBPACK_IMPORTED_MODULE_3__.StringData.BUTTON_START, 'wide-button', this.navGame);
        this.startGame.style.fontSize = '6em';
        this.pauseMode = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_5__.El.makeButton(_data_StringData__WEBPACK_IMPORTED_MODULE_3__.StringData.BUTTON_MODE_TIMER, 'wide-button', this.toggleMode);
        this.addButton = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_5__.El.makeButton(_data_StringData__WEBPACK_IMPORTED_MODULE_3__.StringData.BUTTON_ADD, 'black-button', () => this.addNameElement());
        // private makeBottomBar = () => {
        let bottom = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_5__.El.makeDiv('bottom-bar');
        // let bottomText = El.makeText(StringData.BOTTOM_DESCRIPTION, 'small-text');
        // let TOGraphic = El.makeImg(ImageUrl.ToJam, 'bottom-image');
        // let GHGraphic = El.makeImg(ImageUrl.GameHive, 'bottom-image');
        // },
        _services_ElementFactory__WEBPACK_IMPORTED_MODULE_5__.El.addElements(this.element, top, bottom);
        _services_ElementFactory__WEBPACK_IMPORTED_MODULE_5__.El.addElements(top, leftSide, divider, rightSide);
        _services_ElementFactory__WEBPACK_IMPORTED_MODULE_5__.El.addElements(bottom, this.navigation, this.pauseMode, this.startGame);
        _services_ElementFactory__WEBPACK_IMPORTED_MODULE_5__.El.addElements(leftSide, this.leftHeader, this.leftImage, this.instructions);
        _services_ElementFactory__WEBPACK_IMPORTED_MODULE_5__.El.addElements(rightSide, this.rightHeader, this.rightContent);
        _services_ElementFactory__WEBPACK_IMPORTED_MODULE_5__.El.addElements(this.rightContent, this.addButton);
        _services_ElementFactory__WEBPACK_IMPORTED_MODULE_5__.El.addElements(this.navigation, leftNav);
        for (let i = 0; i < _data_ImageUrl__WEBPACK_IMPORTED_MODULE_2__.ImageUrl.InfoPages.length; i++) {
            let circle = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_5__.El.makeDiv('nav-circle');
            this.navCircles.push(circle);
            _services_ElementFactory__WEBPACK_IMPORTED_MODULE_5__.El.addElements(this.navigation, circle);
        }
        _services_ElementFactory__WEBPACK_IMPORTED_MODULE_5__.El.addElements(this.navigation, rightNav);
        this.nameContainer = this.rightContent;
        ___WEBPACK_IMPORTED_MODULE_0__.Facade.showHome(false);
        ___WEBPACK_IMPORTED_MODULE_0__.Facade.showBottom(false);
        ___WEBPACK_IMPORTED_MODULE_0__.Facade.showCredits(true);
        ___WEBPACK_IMPORTED_MODULE_0__.Facade.controlBar.hidden = true;
        this.loadNames();
        this.nextPage();
    }
    navIn() {
        // animateDiv(this.title, AnimationType.GROW_IN);
        // animateDiv(this.leftHeader, AnimationType.SLIDE_IN);
        // let nameDelay = 100;
        // this.names.forEach(name => {
        //   animateDiv(name.element, AnimationType.SLIDE_IN, nameDelay);
        //   nameDelay += 100;
        // });
        // animateDiv(this.addButton, AnimationType.SLIDE_IN, nameDelay);
        // animateDiv(this.rightHeader, AnimationType.SLIDE_IN, 200);
        // animateDiv(this.rightContent, AnimationType.SLIDE_IN, 300);
        // animateDiv(this.startGame, AnimationType.SLIDE_IN, nameDelay + 100);
        // animateDiv(this.element, AnimationType.GROW_IN);
        window.addEventListener('keydown', this.onKeyDown);
        this.endPulseAnimation = (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_4__.loopAnimation)(this.startGame, _services_animateDiv__WEBPACK_IMPORTED_MODULE_4__.AnimationType.SMOOTH_PULSE, 0);
    }
    navOut() {
        // animateDiv(this.element, AnimationType.SHRINK_OUT, 200);
        // animateDiv(this.title, AnimationType.SHRINK_OUT);
        // new JMTween({}, 1000).to({}).start().onComplete(() => {
        //   this.element.parentElement.removeChild(this.element);
        // });
        _services_ElementFactory__WEBPACK_IMPORTED_MODULE_5__.El.destroy(this.element);
        window.removeEventListener('keydown', this.onKeyDown);
        window.clearTimeout(this.cTimeout);
        this.endPulseAnimation();
    }
    loadNames() {
        _Config__WEBPACK_IMPORTED_MODULE_1__.SessionData.players.forEach(el => {
            this.addNameElement(el.slug);
        });
        this.addNameElement();
    }
}


/***/ }),

/***/ "./src/pages/_BaseUI.ts":
/*!******************************!*\
  !*** ./src/pages/_BaseUI.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseUI: () => (/* binding */ BaseUI)
/* harmony export */ });
class BaseUI {
    navIn() { }
    navOut() { }
}


/***/ }),

/***/ "./src/services/ElementFactory.ts":
/*!****************************************!*\
  !*** ./src/services/ElementFactory.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   El: () => (/* binding */ El),
/* harmony export */   ElFactory: () => (/* binding */ ElFactory)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.ts");
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Config */ "./src/Config.ts");
/* harmony import */ var _data_ImageUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/ImageUrl */ "./src/data/ImageUrl.ts");
/* harmony import */ var _data_StringData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/StringData */ "./src/data/StringData.ts");
/* harmony import */ var _pages_CreditsUI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/CreditsUI */ "./src/pages/CreditsUI.ts");
/* harmony import */ var _pages_SetupUI__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/SetupUI */ "./src/pages/SetupUI.ts");






const El = {
    makeText: (title, className) => {
        let el = document.createElement('div');
        if (className)
            el.classList.add(className);
        el.innerHTML = title;
        return el;
    },
    makeDiv: (className) => {
        let el = document.createElement('div');
        if (className)
            el.classList.add(className);
        return el;
    },
    makeButton: (title, className, onClick) => {
        let el = document.createElement('button');
        if (className)
            el.classList.add(className);
        el.innerHTML = title;
        el.addEventListener('click', onClick);
        return el;
    },
    makeImg: (url, className) => {
        let el = document.createElement('img');
        if (className)
            el.classList.add(className);
        el.src = url;
        return el;
    },
    addElements(source, ...children) {
        children.forEach(child => source.appendChild(child));
    },
    destroy(el) {
        let parent = el.parentElement;
        if (parent)
            parent.removeChild(el);
    },
    destroyThese(...els) {
        els.forEach(el => El.destroy(el));
    },
};
const ElFactory = {
    makeAlert: (content) => {
        let element = document.createElement('div');
        element.classList.add('info-popup');
        element.innerHTML = content;
        document.body.appendChild(element);
        window.setTimeout(() => document.body.removeChild(element), 1500);
    },
    makeBottomBar: () => {
        let bottom = El.makeDiv('bottom-bar');
        let bottomText = El.makeText(_data_StringData__WEBPACK_IMPORTED_MODULE_3__.StringData.BOTTOM_DESCRIPTION, 'small-text');
        let TOGraphic = El.makeImg(_data_ImageUrl__WEBPACK_IMPORTED_MODULE_2__.ImageUrl.ToJam, 'bottom-image');
        let GHGraphic = El.makeImg(_data_ImageUrl__WEBPACK_IMPORTED_MODULE_2__.ImageUrl.GameHive, 'bottom-image');
        El.addElements(bottom, bottomText, GHGraphic, TOGraphic);
        return bottom;
    },
    makeHomeButton: () => {
        let home = El.makeButton('', 'home-button', () => ___WEBPACK_IMPORTED_MODULE_0__.Facade.navTo(new _pages_SetupUI__WEBPACK_IMPORTED_MODULE_5__.SetupUI()));
        let img = El.makeImg(_data_ImageUrl__WEBPACK_IMPORTED_MODULE_2__.ImageUrl.IconHome);
        img.style.width = '3em';
        home.appendChild(img);
        return home;
    },
    makeCreditsButton: () => {
        let credits = El.makeButton('Credits', 'credits-button', () => ___WEBPACK_IMPORTED_MODULE_0__.Facade.navTo(new _pages_CreditsUI__WEBPACK_IMPORTED_MODULE_4__.CreditsUI()));
        // let img = El.makeImg(ImageUrl.IconCredits);
        // img.style.width = '3em';
        // credits.appendChild(img);
        return credits;
    },
    makeLeaderboard: () => {
        let tableInner = document.createElement('table');
        tableInner.classList.add('leaderboard');
        let head = tableInner.createTHead();
        let row = head.insertRow();
        let th0 = document.createElement('th');
        let th1 = document.createElement('th');
        th0.appendChild(document.createTextNode(_data_StringData__WEBPACK_IMPORTED_MODULE_3__.StringData.TABLE_NAME));
        th1.appendChild(document.createTextNode(_data_StringData__WEBPACK_IMPORTED_MODULE_3__.StringData.TABLE_SCORE));
        row.appendChild(th0);
        row.appendChild(th1);
        _Config__WEBPACK_IMPORTED_MODULE_1__.SessionData.players.forEach((el, i) => {
            let score = _Config__WEBPACK_IMPORTED_MODULE_1__.SessionData.players[i].score;
            row = tableInner.insertRow();
            let cell = row.insertCell();
            cell.appendChild(document.createTextNode(el.slug));
            cell = row.insertCell();
            cell.appendChild(document.createTextNode(score.toString()));
        });
        return tableInner;
    },
    makePlayerSection: (name, namePrepend) => {
        let section = El.makeDiv('player-section');
        let cardSection = El.makeDiv('card-section');
        let nameTitle = El.makeText((_Config__WEBPACK_IMPORTED_MODULE_1__.SessionData.prepends && namePrepend || '') + name, 'name-title');
        let card1El = El.makeDiv('card');
        let card2El = El.makeDiv('card');
        // card1El.innerHTML = card1;
        // card2El.innerHTML = card2;
        El.addElements(cardSection, card1El, card2El);
        El.addElements(section, nameTitle, cardSection);
        return [section, nameTitle, card1El, card2El];
    },
};


/***/ }),

/***/ "./src/services/FontLoader.ts":
/*!************************************!*\
  !*** ./src/services/FontLoader.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FontLoader: () => (/* binding */ FontLoader)
/* harmony export */ });
/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webfontloader */ "./node_modules/webfontloader/webfontloader.js");
/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webfontloader__WEBPACK_IMPORTED_MODULE_0__);

class FontLoader {
    static load(fonts) {
        webfontloader__WEBPACK_IMPORTED_MODULE_0__.load({
            google: {
                families: fonts,
            },
        });
    }
    static loadPromise(fonts) {
        // specifically loads GOOGLE fonts through WebFont with a simple interface.
        // Can extend this to cover other platforms but why bother?
        return new Promise(resolve => {
            webfontloader__WEBPACK_IMPORTED_MODULE_0__.load({
                google: {
                    families: fonts,
                },
                active: () => resolve(),
                inactive: () => resolve(),
            });
        });
    }
}


/***/ }),

/***/ "./src/services/GameController.ts":
/*!****************************************!*\
  !*** ./src/services/GameController.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GameController: () => (/* binding */ GameController)
/* harmony export */ });
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Config */ "./src/Config.ts");
/* harmony import */ var _data_StringData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/StringData */ "./src/data/StringData.ts");


const GameController = {
    GHMode: false,
    pauseMode: false,
    selectPlayer: () => {
        let minPlay = Math.min(..._Config__WEBPACK_IMPORTED_MODULE_0__.SessionData.players.map(el => el.plays));
        let pool = _Config__WEBPACK_IMPORTED_MODULE_0__.SessionData.players.filter(el => el.plays === minPlay && !_Config__WEBPACK_IMPORTED_MODULE_0__.RoundData.players.includes(el.slug));
        let index = Math.floor(Math.random() * pool.length);
        let player = pool[index];
        player.plays++;
        return player.slug;
    },
    scorePlayer: (name, amount = 1) => {
        let player = _Config__WEBPACK_IMPORTED_MODULE_0__.SessionData.players.find(el => el.slug === name);
        player.score += amount;
    },
    resetSession: (players) => {
        _Config__WEBPACK_IMPORTED_MODULE_0__.SessionData.players = players.filter(el => el !== '').map(slug => ({ slug, score: 0, plays: 0 }));
        _Config__WEBPACK_IMPORTED_MODULE_0__.SessionData.plays_each = GameController.calculatePlays(_Config__WEBPACK_IMPORTED_MODULE_0__.SessionData.players.length);
        _Config__WEBPACK_IMPORTED_MODULE_0__.RoundData.round = 0;
        _Config__WEBPACK_IMPORTED_MODULE_0__.RoundData.players = [];
        _Config__WEBPACK_IMPORTED_MODULE_0__.RoundData.cards = [[], []];
        _Config__WEBPACK_IMPORTED_MODULE_0__.RoundData.winner = null;
    },
    selectCharacter: () => {
        if (_Config__WEBPACK_IMPORTED_MODULE_0__.SessionData.characterDeck.length === 0) {
            for (let i = 0; i < _data_StringData__WEBPACK_IMPORTED_MODULE_1__.StringData.CHARACTERS.length; i++) {
                if (GameController.GHMode || !GameController.testGHCharacter(i)) {
                    _Config__WEBPACK_IMPORTED_MODULE_0__.SessionData.characterDeck.push(i);
                }
            }
            // Cards.Characters.forEach(card => SessionData.characterDeck.push(card));
        }
        let index = Math.floor(Math.random() * _Config__WEBPACK_IMPORTED_MODULE_0__.SessionData.characterDeck.length);
        let m = _Config__WEBPACK_IMPORTED_MODULE_0__.SessionData.characterDeck[index];
        _Config__WEBPACK_IMPORTED_MODULE_0__.SessionData.characterDeck.splice(index, 1);
        return m;
    },
    selectPower: () => {
        if (_Config__WEBPACK_IMPORTED_MODULE_0__.SessionData.powerDeck.length === 0) {
            for (let i = 0; i < _data_StringData__WEBPACK_IMPORTED_MODULE_1__.StringData.POWERS.length; i++) {
                if (GameController.GHMode || !GameController.testGHPower(i)) {
                    _Config__WEBPACK_IMPORTED_MODULE_0__.SessionData.powerDeck.push(i);
                }
            }
            // Cards.Powers.forEach(card => SessionData.powerDeck.push(card));
        }
        let index = Math.floor(Math.random() * _Config__WEBPACK_IMPORTED_MODULE_0__.SessionData.powerDeck.length);
        let m = _Config__WEBPACK_IMPORTED_MODULE_0__.SessionData.powerDeck[index];
        _Config__WEBPACK_IMPORTED_MODULE_0__.SessionData.powerDeck.splice(index, 1);
        return m;
    },
    resetRound: () => {
        _Config__WEBPACK_IMPORTED_MODULE_0__.RoundData.players = [];
        _Config__WEBPACK_IMPORTED_MODULE_0__.RoundData.cards = [[], []];
        _Config__WEBPACK_IMPORTED_MODULE_0__.RoundData.winner = null;
    },
    restartGame: () => {
        GameController.resetSession(_Config__WEBPACK_IMPORTED_MODULE_0__.SessionData.players.map(el => el.slug));
    },
    isGameOver: () => {
        return !_Config__WEBPACK_IMPORTED_MODULE_0__.SessionData.players.some(el => el.plays < _Config__WEBPACK_IMPORTED_MODULE_0__.SessionData.plays_each);
    },
    numRounds: () => {
        return _Config__WEBPACK_IMPORTED_MODULE_0__.SessionData.players.length * _Config__WEBPACK_IMPORTED_MODULE_0__.SessionData.plays_each / 2;
    },
    calculatePlays: (numPlayers) => {
        if (numPlayers === 2) {
            return 3;
            // } else if (numPlayers > 5 && numPlayers % 2 === 0) {
            //   return 1;
        }
        else {
            return 2;
        }
    },
    testGHCharacter: (index) => {
        let char = _data_StringData__WEBPACK_IMPORTED_MODULE_1__.StringData.CHARACTERS[index];
        return (_data_StringData__WEBPACK_IMPORTED_MODULE_1__.StringData.GHCHARACTERS.includes(char));
    },
    testGHPower: (index) => {
        let char = _data_StringData__WEBPACK_IMPORTED_MODULE_1__.StringData.POWERS[index];
        return (_data_StringData__WEBPACK_IMPORTED_MODULE_1__.StringData.GHPOWERS.includes(char));
    },
};
GameController.resetSession(_data_StringData__WEBPACK_IMPORTED_MODULE_1__.StringData.DEFAULT_NAMES);


/***/ }),

/***/ "./src/services/animateDiv.ts":
/*!************************************!*\
  !*** ./src/services/animateDiv.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnimationType: () => (/* binding */ AnimationType),
/* harmony export */   animateDiv: () => (/* binding */ animateDiv),
/* harmony export */   applyTransform: () => (/* binding */ applyTransform),
/* harmony export */   loopAnimation: () => (/* binding */ loopAnimation)
/* harmony export */ });
/* harmony import */ var _JMGE_JMTween__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../JMGE/JMTween */ "./src/JMGE/JMTween.ts");

var AnimationType;
(function (AnimationType) {
    AnimationType[AnimationType["BASIC_POP"] = 0] = "BASIC_POP";
    AnimationType[AnimationType["WAVE"] = 1] = "WAVE";
    AnimationType[AnimationType["SPIN"] = 2] = "SPIN";
    AnimationType[AnimationType["SPLASH"] = 3] = "SPLASH";
    AnimationType[AnimationType["STRAIGHT_SPLASH"] = 4] = "STRAIGHT_SPLASH";
    AnimationType[AnimationType["BIG_IN"] = 5] = "BIG_IN";
    AnimationType[AnimationType["BIG_OUT"] = 6] = "BIG_OUT";
    AnimationType[AnimationType["BACK_OUT"] = 7] = "BACK_OUT";
    AnimationType[AnimationType["SLIDE_IN"] = 8] = "SLIDE_IN";
    AnimationType[AnimationType["SLIDE_OUT"] = 9] = "SLIDE_OUT";
    AnimationType[AnimationType["GROW_IN"] = 10] = "GROW_IN";
    AnimationType[AnimationType["SHRINK_OUT"] = 11] = "SHRINK_OUT";
    AnimationType[AnimationType["PULSE"] = 12] = "PULSE";
    AnimationType[AnimationType["SMOOTH_PULSE"] = 13] = "SMOOTH_PULSE";
    AnimationType[AnimationType["FLIP_A"] = 14] = "FLIP_A";
    AnimationType[AnimationType["FLIP_B"] = 15] = "FLIP_B";
})(AnimationType || (AnimationType = {}));
function loopAnimation(element, index, delay) {
    let animating = true;
    let animate = () => {
        if (!animating)
            return;
        animateDiv(element, index, delay, animate);
    };
    animate();
    return () => animating = false;
}
function animateDiv(element, index, delay = 0, onComplete) {
    let obj = { height: 1, width: 1, rotation: 0, x: 0, y: 0 };
    switch (index) {
        case AnimationType.WAVE:
            obj.y = 50;
            obj.height = 0;
            applyTransform(element, obj);
            new _JMGE_JMTween__WEBPACK_IMPORTED_MODULE_0__.JMTween({ percent: 0 }, 2000).wait(delay).onUpdate(() => applyTransform(element, obj)).onComplete(() => { element.style.transform = ''; onComplete && onComplete(); }).start();
            new _JMGE_JMTween__WEBPACK_IMPORTED_MODULE_0__.JMTween(obj, 300).wait(delay).to({ height: 1, y: -20, rotation: 30 }).easing(_JMGE_JMTween__WEBPACK_IMPORTED_MODULE_0__.JMEasing.Back.Out).start()
                .chain(obj, 100).wait(200).to({ rotation: 20 }).yoyo(true, 3)
                .chain(obj, 300).wait(100).to({ height: 1, rotation: 0, y: 0 });
            break;
        case AnimationType.SPIN:
            obj.rotation = 700;
            obj.height = 0.3;
            obj.width = 0.3;
            applyTransform(element, obj);
            new _JMGE_JMTween__WEBPACK_IMPORTED_MODULE_0__.JMTween(obj, 500).wait(delay).to({ rotation: 0 }).start().onUpdate(data => applyTransform(element, data))
                .onComplete(() => { element.style.transform = ''; onComplete && onComplete(); });
            new _JMGE_JMTween__WEBPACK_IMPORTED_MODULE_0__.JMTween(obj, 300).wait(delay).to({ height: 0.8, width: 0.8 }).easing(_JMGE_JMTween__WEBPACK_IMPORTED_MODULE_0__.JMEasing.Quadratic.InOut).start()
                .chain(obj, 200).to({ height: 1, width: 1 });
            break;
        case AnimationType.SPLASH:
            obj.width = 0.1;
            obj.height = 0.1;
            applyTransform(element, obj);
            new _JMGE_JMTween__WEBPACK_IMPORTED_MODULE_0__.JMTween({ percent: 0 }, 2000).wait(delay).onUpdate(() => applyTransform(element, obj)).onComplete(() => { element.style.transform = ''; onComplete && onComplete(); }).start();
            new _JMGE_JMTween__WEBPACK_IMPORTED_MODULE_0__.JMTween(obj, 500).wait(delay).to({ width: 1.3, height: 1.3, rotation: 15 }).easing(_JMGE_JMTween__WEBPACK_IMPORTED_MODULE_0__.JMEasing.Back.Out).start()
                .chain(obj, 1000).wait(500).to({ width: 1, height: 1, rotation: 0 });
            break;
        case AnimationType.STRAIGHT_SPLASH:
            obj.width = 0.1;
            obj.height = 0.1;
            applyTransform(element, obj);
            new _JMGE_JMTween__WEBPACK_IMPORTED_MODULE_0__.JMTween({ percent: 0 }, 2000).wait(delay).onUpdate(() => applyTransform(element, obj)).onComplete(() => { element.style.transform = ''; onComplete && onComplete(); }).start();
            new _JMGE_JMTween__WEBPACK_IMPORTED_MODULE_0__.JMTween(obj, 500).wait(delay).to({ width: 1.8, height: 1.8 }).easing(_JMGE_JMTween__WEBPACK_IMPORTED_MODULE_0__.JMEasing.Back.Out).start()
                .chain(obj, 1000).wait(500).to({ width: 1, height: 1 });
            break;
        case AnimationType.BIG_IN:
            obj.width = 1;
            obj.height = 1;
            applyTransform(element, obj);
            new _JMGE_JMTween__WEBPACK_IMPORTED_MODULE_0__.JMTween(obj, 500).wait(delay).to({ width: 1.8, height: 1.8 }).easing(_JMGE_JMTween__WEBPACK_IMPORTED_MODULE_0__.JMEasing.Back.Out).onUpdate(() => applyTransform(element, obj)).start().onComplete(() => (onComplete && onComplete()));
            break;
        case AnimationType.BIG_OUT:
            obj.width = 1.8;
            obj.height = 1.8;
            applyTransform(element, obj);
            new _JMGE_JMTween__WEBPACK_IMPORTED_MODULE_0__.JMTween(obj, 500).wait(delay).to({ width: 1, height: 1 }).easing(_JMGE_JMTween__WEBPACK_IMPORTED_MODULE_0__.JMEasing.Linear.None).onUpdate(() => applyTransform(element, obj)).start().onComplete(() => { element.style.transform = ''; onComplete && onComplete(); });
            break;
        case AnimationType.BACK_OUT:
            new _JMGE_JMTween__WEBPACK_IMPORTED_MODULE_0__.JMTween(obj, 1000).wait(delay).to({ x: -10, y: -1500 }).onUpdate(() => applyTransform(element, obj)).onComplete(() => { element.style.display = 'none'; onComplete && onComplete(); }).start();
            break;
        case AnimationType.SLIDE_IN:
            obj.x = 300;
            obj.y = 3500;
            applyTransform(element, obj);
            new _JMGE_JMTween__WEBPACK_IMPORTED_MODULE_0__.JMTween(obj, 1000).wait(delay).to({ x: 0, y: 0 }).onUpdate(() => applyTransform(element, obj)).easing(_JMGE_JMTween__WEBPACK_IMPORTED_MODULE_0__.JMEasing.Quintic.InOut).onComplete(() => { element.style.transform = ''; onComplete && onComplete(); }).start();
            break;
        case AnimationType.SLIDE_OUT:
            obj.x = 0;
            obj.y = 0;
            applyTransform(element, obj);
            new _JMGE_JMTween__WEBPACK_IMPORTED_MODULE_0__.JMTween(obj, 1000).wait(delay).to({ x: -300, y: -3500 }).onUpdate(() => applyTransform(element, obj)).easing(_JMGE_JMTween__WEBPACK_IMPORTED_MODULE_0__.JMEasing.Quintic.InOut).onComplete(() => { element.style.display = 'none'; onComplete && onComplete(); }).start();
            break;
        case AnimationType.GROW_IN:
            obj.width = 0.01;
            obj.height = 0.01;
            obj.y = 1000;
            applyTransform(element, obj);
            new _JMGE_JMTween__WEBPACK_IMPORTED_MODULE_0__.JMTween(obj, 400).wait(delay).to({ width: 1, height: 1, y: 0 }).onUpdate(() => applyTransform(element, obj)).easing(_JMGE_JMTween__WEBPACK_IMPORTED_MODULE_0__.JMEasing.Back.Out).onComplete(() => { element.style.transform = ''; onComplete && onComplete(); }).start();
            break;
        case AnimationType.SHRINK_OUT:
            applyTransform(element, obj);
            new _JMGE_JMTween__WEBPACK_IMPORTED_MODULE_0__.JMTween(obj, 400).wait(delay).to({ width: 0, height: 0, y: 1000 }).onUpdate(() => applyTransform(element, obj)).easing(_JMGE_JMTween__WEBPACK_IMPORTED_MODULE_0__.JMEasing.Back.In).onComplete(() => { element.style.display = 'none'; onComplete && onComplete(); }).start();
            break;
        case AnimationType.PULSE:
            obj.width = 1;
            obj.height = 1;
            applyTransform(element, obj);
            new _JMGE_JMTween__WEBPACK_IMPORTED_MODULE_0__.JMTween(obj, 250).wait(delay).to({ width: 1.3, height: 1.3 }).onUpdate(() => applyTransform(element, obj)).easing(_JMGE_JMTween__WEBPACK_IMPORTED_MODULE_0__.JMEasing.Quadratic.InOut).yoyo(true, 1).onComplete(() => { element.style.transform = ''; onComplete && onComplete(); }).start();
            break;
        case AnimationType.SMOOTH_PULSE:
            obj.width = 1;
            obj.height = 1;
            applyTransform(element, obj);
            new _JMGE_JMTween__WEBPACK_IMPORTED_MODULE_0__.JMTween(obj, 800).wait(delay).to({ width: 1.1, height: 1.1 }).onUpdate(() => applyTransform(element, obj)).easing(_JMGE_JMTween__WEBPACK_IMPORTED_MODULE_0__.JMEasing.Quadratic.InOut).yoyo(true, 1).onComplete(() => { element.style.transform = ''; onComplete && onComplete(); }).start();
            break;
        case AnimationType.FLIP_A:
            obj.width = 1;
            applyTransform(element, obj);
            new _JMGE_JMTween__WEBPACK_IMPORTED_MODULE_0__.JMTween(obj, 250).wait(delay).to({ width: 0 }).onUpdate(() => applyTransform(element, obj)).easing(_JMGE_JMTween__WEBPACK_IMPORTED_MODULE_0__.JMEasing.Linear.None).onComplete(() => { onComplete && onComplete(); }).start();
            break;
        case AnimationType.FLIP_B:
            obj.width = 0;
            applyTransform(element, obj);
            new _JMGE_JMTween__WEBPACK_IMPORTED_MODULE_0__.JMTween(obj, 400).wait(delay).to({ width: 1 }).onUpdate(() => applyTransform(element, obj)).easing(_JMGE_JMTween__WEBPACK_IMPORTED_MODULE_0__.JMEasing.Linear.None).onComplete(() => { element.style.transform = ''; onComplete && onComplete(); }).start();
            break;
        case AnimationType.BASIC_POP:
        default:
            obj.height = 0;
            obj.width = 0;
            applyTransform(element, obj);
            new _JMGE_JMTween__WEBPACK_IMPORTED_MODULE_0__.JMTween(obj, 700).wait(delay).to({ height: 1, width: 1 }).easing(_JMGE_JMTween__WEBPACK_IMPORTED_MODULE_0__.JMEasing.Back.Out).start()
                .onUpdate(data => applyTransform(element, data))
                .onComplete(() => { element.style.transform = ''; onComplete && onComplete(); });
            break;
    }
}
// export function tweenTo(element: HTMLDivElement, time: number, data: Partial<ITransformData>) {
//   data.width = data.width || 0;
//   data.height = data.height || 0;
//   data.x = data.x || 0;
//   data.y = data.y || 0;
//   data.rotation = data.rotation || 0;
//   new JMTween(element, time).to(data)
// }
function applyTransform(element, data) {
    element.style.transform = `scaleX(${data.width}) scaleY(${data.height}) translateX(${data.x}px) translateY(${data.y}px) rotate(${data.rotation}deg)`;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map