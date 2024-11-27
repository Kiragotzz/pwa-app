function _defineProperty(t,e,r){return(e=_toPropertyKey(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function _regeneratorRuntime(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */_regeneratorRuntime=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var i=e&&e.prototype instanceof y?e:y,a=Object.create(i.prototype),s=new I(n||[]);return o(a,"_invoke",{value:j(t,r,s)}),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=u;var f="suspendedStart",d="executing",p="completed",v={};function y(){}function m(){}function g(){}var b={};l(b,a,(function(){return this}));var w=Object.getPrototypeOf,E=w&&w(w(T([])));E&&E!==r&&n.call(E,a)&&(b=E);var x=g.prototype=y.prototype=Object.create(b);function k(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function r(o,i,a,s){var c=h(t[o],t,i);if("throw"!==c.type){var l=c.arg,u=l.value;return u&&"object"==typeof u&&n.call(u,"__await")?e.resolve(u.__await).then((function(t){r("next",t,a,s)}),(function(t){r("throw",t,a,s)})):e.resolve(u).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,s)}))}s(c.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function j(e,r,n){var o=f;return function(i,a){if(o===d)throw Error("Generator is already running");if(o===p){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var s=n.delegate;if(s){var c=L(s,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===f)throw o=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var l=h(e,r,n);if("normal"===l.type){if(o=n.done?p:"suspendedYield",l.arg===v)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=p,n.method="throw",n.arg=l.arg)}}}function L(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,L(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var i=h(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,v;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function T(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(typeof e+" is not iterable")}return m.prototype=g,o(x,"constructor",{value:g,configurable:!0}),o(g,"constructor",{value:m,configurable:!0}),m.displayName=l(g,c,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,l(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},e.awrap=function(t){return{__await:t}},k(_.prototype),l(_.prototype,s,(function(){return this})),e.AsyncIterator=_,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new _(u(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(x),l(x,c,"Generator"),l(x,a,(function(){return this})),l(x,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=T,I.prototype={constructor:I,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return s.type="throw",s.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:T(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}function asyncGeneratorStep(t,e,r,n,o,i,a){try{var s=t[i](a),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,o)}function _asyncToGenerator(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){asyncGeneratorStep(i,n,o,a,s,"next",t)}function s(t){asyncGeneratorStep(i,n,o,a,s,"throw",t)}a(void 0)}))}}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,_toPropertyKey(n.key),n)}}function _createClass(t,e,r){return e&&_defineProperties(t.prototype,e),r&&_defineProperties(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function _toPropertyKey(t){var e=_toPrimitive(t,"string");return"symbol"==typeof e?e:e+""}function _toPrimitive(t,e){if("object"!=typeof t||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{smMY:function(t,e,r){"use strict";r.r(e),r.d(e,"ion_reorder",(function(){return a})),r.d(e,"ion_reorder_group",(function(){return s}));var n=r("wEJo"),o=r("E/Mt"),i=r("qULd"),a=function(){return _createClass((function t(e){_classCallCheck(this,t),Object(n.o)(this,e)}),[{key:"onClick",value:function(t){var e=this.el.closest("ion-reorder-group");t.preventDefault(),e&&e.disabled||t.stopImmediatePropagation()}},{key:"render",value:function(){var t=Object(o.b)(this),e="ios"===t?"reorder-three-outline":"reorder-two-sharp";return Object(n.j)(n.c,{class:t},Object(n.j)("slot",null,Object(n.j)("ion-icon",{name:e,lazy:!1,class:"reorder-icon",part:"icon"})))}},{key:"el",get:function(){return Object(n.k)(this)}}])}();a.style={ios:":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px}.reorder-icon{font-size:34px;opacity:0.4}",md:":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px}.reorder-icon{font-size:31px;opacity:0.3}"};var s=function(){return _createClass((function t(e){_classCallCheck(this,t),Object(n.o)(this,e),this.ionItemReorder=Object(n.g)(this,"ionItemReorder",7),this.lastToIndex=-1,this.cachedHeights=[],this.scrollElTop=0,this.scrollElBottom=0,this.scrollElInitial=0,this.containerTop=0,this.containerBottom=0,this.state=0,this.disabled=!0}),[{key:"disabledChanged",value:function(){this.gesture&&this.gesture.enable(!this.disabled)}},{key:"connectedCallback",value:(t=_asyncToGenerator(_regeneratorRuntime().mark((function t(){var e,n=this;return _regeneratorRuntime().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this.el.closest("ion-content"),t.t0=e,!t.t0){t.next=6;break}return t.next=5,e.getScrollElement();case 5:this.scrollEl=t.sent;case 6:return t.next=8,Promise.resolve().then(r.bind(null,"KF81"));case 8:this.gesture=t.sent.createGesture({el:this.el,gestureName:"reorder",gesturePriority:110,threshold:0,direction:"y",passive:!1,canStart:function(t){return n.canStart(t)},onStart:function(t){return n.onStart(t)},onMove:function(t){return n.onMove(t)},onEnd:function(){return n.onEnd()}}),this.disabledChanged();case 10:case"end":return t.stop()}}),t,this)}))),function(){return t.apply(this,arguments)})},{key:"disconnectedCallback",value:function(){this.onEnd(),this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}},{key:"complete",value:function(t){return Promise.resolve(this.completeSync(t))}},{key:"canStart",value:function(t){if(this.selectedItemEl||0!==this.state)return!1;var e=t.event.target.closest("ion-reorder");if(!e)return!1;var r=l(e,this.el);return!!r&&(t.data=r,!0)}},{key:"onStart",value:function(t){t.event.preventDefault();var e=this.selectedItemEl=t.data,r=this.cachedHeights;r.length=0;var n=this.el,o=n.children;if(o&&0!==o.length){for(var a=0,s=0;s<o.length;s++){var l=o[s];a+=l.offsetHeight,r.push(a),l.$ionIndex=s}var h=n.getBoundingClientRect();if(this.containerTop=h.top,this.containerBottom=h.bottom,this.scrollEl){var d=this.scrollEl.getBoundingClientRect();this.scrollElInitial=this.scrollEl.scrollTop,this.scrollElTop=d.top+u,this.scrollElBottom=d.bottom-u}else this.scrollElInitial=0,this.scrollElTop=0,this.scrollElBottom=0;this.lastToIndex=c(e),this.selectedItemHeight=e.offsetHeight,this.state=1,e.classList.add(f),Object(i.a)()}}},{key:"onMove",value:function(t){var e=this.selectedItemEl;if(e){var r=this.autoscroll(t.currentY),n=this.containerTop-r,o=Math.max(n,Math.min(t.currentY,this.containerBottom-r)),a=r+o-t.startY,s=this.itemIndexForTop(o-n);if(s!==this.lastToIndex){var l=c(e);this.lastToIndex=s,Object(i.b)(),this.reorderMove(l,s)}e.style.transform="translateY(".concat(a,"px)")}}},{key:"onEnd",value:function(){var t=this.selectedItemEl;if(this.state=2,t){var e=this.lastToIndex,r=c(t);e===r?this.completeSync():this.ionItemReorder.emit({from:r,to:e,complete:this.completeSync.bind(this)}),Object(i.e)()}else this.state=0}},{key:"completeSync",value:function(t){var e=this.selectedItemEl;if(e&&2===this.state){var r=this.el.children,n=r.length,o=this.lastToIndex,i=c(e);o===i||void 0!==t&&!0!==t||this.el.insertBefore(e,i<o?r[o+1]:r[o]),Array.isArray(t)&&(t=d(t,i,o));for(var a=0;a<n;a++)r[a].style.transform="";e.style.transition="",e.classList.remove(f),this.selectedItemEl=void 0,this.state=0}return t}},{key:"itemIndexForTop",value:function(t){for(var e=this.cachedHeights,r=0;r<e.length;r++)if(e[r]>t)return r;return e.length-1}},{key:"reorderMove",value:function(t,e){for(var r=this.selectedItemHeight,n=this.el.children,o=0;o<n.length;o++){var i="";o>t&&o<=e?i="translateY(".concat(-r,"px)"):o<t&&o>=e&&(i="translateY(".concat(r,"px)")),n[o].style.transform=i}}},{key:"autoscroll",value:function(t){if(!this.scrollEl)return 0;var e=0;return t<this.scrollElTop?e=-h:t>this.scrollElBottom&&(e=h),0!==e&&this.scrollEl.scrollBy(0,e),this.scrollEl.scrollTop-this.scrollElInitial}},{key:"render",value:function(){var t=Object(o.b)(this);return Object(n.j)(n.c,{class:_defineProperty(_defineProperty(_defineProperty({},t,!0),"reorder-enabled",!this.disabled),"reorder-list-active",0!==this.state)})}},{key:"el",get:function(){return Object(n.k)(this)}}],[{key:"watchers",get:function(){return{disabled:["disabledChanged"]}}}]);var t}(),c=function(t){return t.$ionIndex},l=function(t,e){for(var r;t;){if((r=t.parentElement)===e)return t;t=r}},u=60,h=10,f="reorder-selected",d=function(t,e,r){var n=t[e];return t.splice(e,1),t.splice(r,0,n),t.slice()};s.style=".reorder-list-active>*{-webkit-transition:-webkit-transform 300ms;transition:-webkit-transform 300ms;transition:transform 300ms;transition:transform 300ms, -webkit-transform 300ms;will-change:transform}.reorder-enabled{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.reorder-enabled ion-reorder{display:block;cursor:-webkit-grab;cursor:grab;pointer-events:all;-ms-touch-action:none;touch-action:none}.reorder-selected,.reorder-selected ion-reorder{cursor:-webkit-grabbing;cursor:grabbing}.reorder-selected{position:relative;-webkit-transition:none !important;transition:none !important;-webkit-box-shadow:0 0 10px rgba(0, 0, 0, 0.4);box-shadow:0 0 10px rgba(0, 0, 0, 0.4);opacity:0.8;z-index:100}.reorder-visible ion-reorder .reorder-icon{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}"}}]);