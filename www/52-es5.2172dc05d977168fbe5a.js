function _regeneratorRuntime(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */_regeneratorRuntime=function(){return l};var n,l={},t=Object.prototype,e=t.hasOwnProperty,o=Object.defineProperty||function(n,l,t){n[l]=t.value},u="function"==typeof Symbol?Symbol:{},r=u.iterator||"@@iterator",a=u.asyncIterator||"@@asyncIterator",i=u.toStringTag||"@@toStringTag";function c(n,l,t){return Object.defineProperty(n,l,{value:t,enumerable:!0,configurable:!0,writable:!0}),n[l]}try{c({},"")}catch(n){c=function(n,l,t){return n[l]=t}}function s(n,l,t,e){var u=l&&l.prototype instanceof m?l:m,r=Object.create(u.prototype),a=new j(e||[]);return o(r,"_invoke",{value:w(n,t,a)}),r}function g(n,l,t){try{return{type:"normal",arg:n.call(l,t)}}catch(n){return{type:"throw",arg:n}}}l.wrap=s;var p="suspendedStart",d="executing",f="completed",b={};function m(){}function h(){}function M(){}var x={};c(x,r,(function(){return this}));var y=Object.getPrototypeOf,v=y&&y(y(D([])));v&&v!==t&&e.call(v,r)&&(x=v);var C=M.prototype=m.prototype=Object.create(x);function O(n){["next","throw","return"].forEach((function(l){c(n,l,(function(n){return this._invoke(l,n)}))}))}function _(n,l){function t(o,u,r,a){var i=g(n[o],n,u);if("throw"!==i.type){var c=i.arg,s=c.value;return s&&"object"==typeof s&&e.call(s,"__await")?l.resolve(s.__await).then((function(n){t("next",n,r,a)}),(function(n){t("throw",n,r,a)})):l.resolve(s).then((function(n){c.value=n,r(c)}),(function(n){return t("throw",n,r,a)}))}a(i.arg)}var u;o(this,"_invoke",{value:function(n,e){function o(){return new l((function(l,o){t(n,e,l,o)}))}return u=u?u.then(o,o):o()}})}function w(l,t,e){var o=p;return function(u,r){if(o===d)throw Error("Generator is already running");if(o===f){if("throw"===u)throw r;return{value:n,done:!0}}for(e.method=u,e.arg=r;;){var a=e.delegate;if(a){var i=P(a,e);if(i){if(i===b)continue;return i}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(o===p)throw o=f,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);o=d;var c=g(l,t,e);if("normal"===c.type){if(o=e.done?f:"suspendedYield",c.arg===b)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(o=f,e.method="throw",e.arg=c.arg)}}}function P(l,t){var e=t.method,o=l.iterator[e];if(o===n)return t.delegate=null,"throw"===e&&l.iterator.return&&(t.method="return",t.arg=n,P(l,t),"throw"===t.method)||"return"!==e&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+e+"' method")),b;var u=g(o,l.iterator,t.arg);if("throw"===u.type)return t.method="throw",t.arg=u.arg,t.delegate=null,b;var r=u.arg;return r?r.done?(t[l.resultName]=r.value,t.next=l.nextLoc,"return"!==t.method&&(t.method="next",t.arg=n),t.delegate=null,b):r:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,b)}function N(n){var l={tryLoc:n[0]};1 in n&&(l.catchLoc=n[1]),2 in n&&(l.finallyLoc=n[2],l.afterLoc=n[3]),this.tryEntries.push(l)}function T(n){var l=n.completion||{};l.type="normal",delete l.arg,n.completion=l}function j(n){this.tryEntries=[{tryLoc:"root"}],n.forEach(N,this),this.reset(!0)}function D(l){if(l||""===l){var t=l[r];if(t)return t.call(l);if("function"==typeof l.next)return l;if(!isNaN(l.length)){var o=-1,u=function t(){for(;++o<l.length;)if(e.call(l,o))return t.value=l[o],t.done=!1,t;return t.value=n,t.done=!0,t};return u.next=u}}throw new TypeError(typeof l+" is not iterable")}return h.prototype=M,o(C,"constructor",{value:M,configurable:!0}),o(M,"constructor",{value:h,configurable:!0}),h.displayName=c(M,i,"GeneratorFunction"),l.isGeneratorFunction=function(n){var l="function"==typeof n&&n.constructor;return!!l&&(l===h||"GeneratorFunction"===(l.displayName||l.name))},l.mark=function(n){return Object.setPrototypeOf?Object.setPrototypeOf(n,M):(n.__proto__=M,c(n,i,"GeneratorFunction")),n.prototype=Object.create(C),n},l.awrap=function(n){return{__await:n}},O(_.prototype),c(_.prototype,a,(function(){return this})),l.AsyncIterator=_,l.async=function(n,t,e,o,u){void 0===u&&(u=Promise);var r=new _(s(n,t,e,o),u);return l.isGeneratorFunction(t)?r:r.next().then((function(n){return n.done?n.value:r.next()}))},O(C),c(C,i,"Generator"),c(C,r,(function(){return this})),c(C,"toString",(function(){return"[object Generator]"})),l.keys=function(n){var l=Object(n),t=[];for(var e in l)t.push(e);return t.reverse(),function n(){for(;t.length;){var e=t.pop();if(e in l)return n.value=e,n.done=!1,n}return n.done=!0,n}},l.values=D,j.prototype={constructor:j,reset:function(l){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(T),!l)for(var t in this)"t"===t.charAt(0)&&e.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=n)},stop:function(){this.done=!0;var n=this.tryEntries[0].completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(l){if(this.done)throw l;var t=this;function o(e,o){return a.type="throw",a.arg=l,t.next=e,o&&(t.method="next",t.arg=n),!!o}for(var u=this.tryEntries.length-1;u>=0;--u){var r=this.tryEntries[u],a=r.completion;if("root"===r.tryLoc)return o("end");if(r.tryLoc<=this.prev){var i=e.call(r,"catchLoc"),c=e.call(r,"finallyLoc");if(i&&c){if(this.prev<r.catchLoc)return o(r.catchLoc,!0);if(this.prev<r.finallyLoc)return o(r.finallyLoc)}else if(i){if(this.prev<r.catchLoc)return o(r.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return o(r.finallyLoc)}}}},abrupt:function(n,l){for(var t=this.tryEntries.length-1;t>=0;--t){var o=this.tryEntries[t];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var u=o;break}}u&&("break"===n||"continue"===n)&&u.tryLoc<=l&&l<=u.finallyLoc&&(u=null);var r=u?u.completion:{};return r.type=n,r.arg=l,u?(this.method="next",this.next=u.finallyLoc,b):this.complete(r)},complete:function(n,l){if("throw"===n.type)throw n.arg;return"break"===n.type||"continue"===n.type?this.next=n.arg:"return"===n.type?(this.rval=this.arg=n.arg,this.method="return",this.next="end"):"normal"===n.type&&l&&(this.next=l),b},finish:function(n){for(var l=this.tryEntries.length-1;l>=0;--l){var t=this.tryEntries[l];if(t.finallyLoc===n)return this.complete(t.completion,t.afterLoc),T(t),b}},catch:function(n){for(var l=this.tryEntries.length-1;l>=0;--l){var t=this.tryEntries[l];if(t.tryLoc===n){var e=t.completion;if("throw"===e.type){var o=e.arg;T(t)}return o}}throw Error("illegal catch attempt")},delegateYield:function(l,t,e){return this.delegate={iterator:D(l),resultName:t,nextLoc:e},"next"===this.method&&(this.arg=n),b}},l}function _defineProperties(n,l){for(var t=0;t<l.length;t++){var e=l[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,_toPropertyKey(e.key),e)}}function _createClass(n,l,t){return l&&_defineProperties(n.prototype,l),t&&_defineProperties(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n}function _toPropertyKey(n){var l=_toPrimitive(n,"string");return"symbol"==typeof l?l:l+""}function _toPrimitive(n,l){if("object"!=typeof n||!n)return n;var t=n[Symbol.toPrimitive];if(void 0!==t){var e=t.call(n,l||"default");if("object"!=typeof e)return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===l?String:Number)(n)}function _classCallCheck(n,l){if(!(n instanceof l))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{jSTq:function(n,l,t){"use strict";t.r(l);var e=t("8Y7J"),o=_createClass((function n(){_classCallCheck(this,n)})),u=t("pMnS"),r=t("SVse"),a=t("s7LF"),i=t("MKJQ"),c=t("sZkV"),s=t("mrSG"),g=t("H+bZ"),p=function(){return _createClass((function n(l,t,e,o){_classCallCheck(this,n),this.navCtrl=l,this.api=t,this.toastController=e,this.route=o,this.qrCode="",this.cupom=null,this.id="null",this.cardAtivo=!0,this.verificaEmail=!1,this.email="",this.emailEnviado=!1}),[{key:"ngOnInit",value:function(){var n=this;this.route.queryParams.subscribe((function(l){console.log("\ud83d\ude80 ~ params:",l),l.chave&&n.api.clube("getcupom",{chave:l.chave},(function(l){n.cupom=l.data,console.log("result",l)}))}))}},{key:"copiarChave",value:function(){return s.__awaiter(this,void 0,void 0,_regeneratorRuntime().mark((function n(){return _regeneratorRuntime().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return navigator.clipboard.writeText(this.cupom.chaveDeAcesso.replaceAll(" ","")),n.next=3,this.toastController.create({message:"Chave de acesso copiada para a \xe1rea de transfer\xeancia",duration:2e3});case 3:n.sent.present();case 4:case"end":return n.stop()}}),n,this)})))}},{key:"copiarShare",value:function(){return s.__awaiter(this,void 0,void 0,_regeneratorRuntime().mark((function n(){return _regeneratorRuntime().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return navigator.clipboard.writeText("https://cupomdigital.barbosasupermercados.com.br/?chave="+(this.cupom.chaveDeAcesso||this.cupom._id)),n.next=3,this.toastController.create({message:"Url copiada para a \xe1rea de transfer\xeancia",duration:2e3});case 3:n.sent.present();case 4:case"end":return n.stop()}}),n,this)})))}},{key:"getCupom",value:function(){return s.__awaiter(this,void 0,void 0,_regeneratorRuntime().mark((function n(){var l;return _regeneratorRuntime().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.api.getCupom("791645#1#15#12/12/2022");case 2:l=n.sent,this.cupom=l.data,console.log(l);case 4:case"end":return n.stop()}}),n,this)})))}},{key:"goBack",value:function(){this.navCtrl.back()}},{key:"fecharCard",value:function(){this.cardAtivo=!1}},{key:"abrirSefaz",value:function(){return s.__awaiter(this,void 0,void 0,_regeneratorRuntime().mark((function n(){return _regeneratorRuntime().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!this.cupom.chaveDeAcesso){n.next=8;break}return navigator.clipboard.writeText(this.cupom.chaveDeAcesso),n.next=4,this.toastController.create({message:"Chave de acesso copiada para a \xe1rea de transfer\xeancia",duration:2e3});case 4:n.sent.present(),window.open("https://satsp.fazenda.sp.gov.br/COMSAT/Public/ConsultaPublica/ConsultaPublicaCfe.aspx"),n.next=11;break;case 8:return n.next=10,this.toastController.create({message:"Cupon sem chave de acesso!",duration:2e3});case 10:n.sent.present();case 11:case"end":return n.stop()}}),n,this)})))}},{key:"verificarEmail",value:function(){this.verificaEmail=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(this.email)}},{key:"enviarEmail",value:function(){return s.__awaiter(this,void 0,void 0,_regeneratorRuntime().mark((function n(){return _regeneratorRuntime().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.api.enviarEmail(this.email,this.cupom.chaveacesso);case 2:console.log("\ud83d\ude80 ~ this.email:",this.email),console.log("\ud83d\ude80 ~ this.cupom.chaveacesso:",this.cupom.chaveacesso),this.emailEnviado=!0;case 5:case"end":return n.stop()}}),n,this)})))}}])}(),d=t("iInd"),f=e.pb({encapsulation:0,styles:[['@import url(https://fonts.googleapis.com/css2?family=Open+Sans&display=swap);.toast-center-center[_ngcontent-%COMP%]{top:50%;left:50%;transform:translate(-50%,-50%)}.toast-top-center[_ngcontent-%COMP%]{top:0;right:0;width:100%}.toast-bottom-center[_ngcontent-%COMP%]{bottom:0;right:0;width:100%}.toast-top-full-width[_ngcontent-%COMP%]{top:0;right:0;width:100%}.toast-bottom-full-width[_ngcontent-%COMP%]{bottom:0;right:0;width:100%}.toast-top-left[_ngcontent-%COMP%]{top:12px;left:12px}.toast-top-right[_ngcontent-%COMP%]{top:12px;right:12px}.toast-bottom-right[_ngcontent-%COMP%]{right:12px;bottom:12px}.toast-bottom-left[_ngcontent-%COMP%]{bottom:12px;left:12px}.toast-title[_ngcontent-%COMP%]{font-weight:700}.toast-message[_ngcontent-%COMP%]{word-wrap:break-word}.toast-message[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .toast-message[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#fff}.toast-message[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#ccc;text-decoration:none}.toast-close-button[_ngcontent-%COMP%]{position:relative;right:-.3em;top:-.3em;float:right;font-size:20px;font-weight:700;color:#fff;text-shadow:0 1px 0 #fff}.toast-close-button[_ngcontent-%COMP%]:focus, .toast-close-button[_ngcontent-%COMP%]:hover{color:#000;text-decoration:none;cursor:pointer;opacity:.4}button.toast-close-button[_ngcontent-%COMP%]{padding:0;cursor:pointer;background:0 0;border:0}.toast-container[_ngcontent-%COMP%]{pointer-events:none;position:fixed;z-index:999999}.toast-container[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{box-sizing:border-box}.toast-container[_ngcontent-%COMP%]   .ngx-toastr[_ngcontent-%COMP%]{position:relative;overflow:hidden;margin:0 0 6px;padding:15px 15px 15px 50px;width:300px;border-radius:3px;background-position:15px center;background-repeat:no-repeat;background-size:24px;box-shadow:0 0 12px #999;color:#fff}.toast-container[_ngcontent-%COMP%]   .ngx-toastr[_ngcontent-%COMP%]:hover{box-shadow:0 0 12px #000;opacity:1;cursor:pointer}.toast-info[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1MTIgNTEyJyB3aWR0aD0nNTEyJyBoZWlnaHQ9JzUxMic+PHBhdGggZmlsbD0ncmdiKDI1NSwyNTUsMjU1KScgZD0nTTI1NiA4QzExOS4wNDMgOCA4IDExOS4wODMgOCAyNTZjMCAxMzYuOTk3IDExMS4wNDMgMjQ4IDI0OCAyNDhzMjQ4LTExMS4wMDMgMjQ4LTI0OEM1MDQgMTE5LjA4MyAzOTIuOTU3IDggMjU2IDh6bTAgMTEwYzIzLjE5NiAwIDQyIDE4LjgwNCA0MiA0MnMtMTguODA0IDQyLTQyIDQyLTQyLTE4LjgwNC00Mi00MiAxOC44MDQtNDIgNDItNDJ6bTU2IDI1NGMwIDYuNjI3LTUuMzczIDEyLTEyIDEyaC04OGMtNi42MjcgMC0xMi01LjM3My0xMi0xMnYtMjRjMC02LjYyNyA1LjM3My0xMiAxMi0xMmgxMnYtNjRoLTEyYy02LjYyNyAwLTEyLTUuMzczLTEyLTEydi0yNGMwLTYuNjI3IDUuMzczLTEyIDEyLTEyaDY0YzYuNjI3IDAgMTIgNS4zNzMgMTIgMTJ2MTAwaDEyYzYuNjI3IDAgMTIgNS4zNzMgMTIgMTJ2MjR6Jy8+PC9zdmc+)}.toast-error[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1MTIgNTEyJyB3aWR0aD0nNTEyJyBoZWlnaHQ9JzUxMic+PHBhdGggZmlsbD0ncmdiKDI1NSwyNTUsMjU1KScgZD0nTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6bTEyMS42IDMxMy4xYzQuNyA0LjcgNC43IDEyLjMgMCAxN0wzMzggMzc3LjZjLTQuNyA0LjctMTIuMyA0LjctMTcgMEwyNTYgMzEybC02NS4xIDY1LjZjLTQuNyA0LjctMTIuMyA0LjctMTcgMEwxMzQuNCAzMzhjLTQuNy00LjctNC43LTEyLjMgMC0xN2w2NS42LTY1LTY1LjYtNjUuMWMtNC43LTQuNy00LjctMTIuMyAwLTE3bDM5LjYtMzkuNmM0LjctNC43IDEyLjMtNC43IDE3IDBsNjUgNjUuNyA2NS4xLTY1LjZjNC43LTQuNyAxMi4zLTQuNyAxNyAwbDM5LjYgMzkuNmM0LjcgNC43IDQuNyAxMi4zIDAgMTdMMzEyIDI1Nmw2NS42IDY1LjF6Jy8+PC9zdmc+)}.toast-success[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1MTIgNTEyJyB3aWR0aD0nNTEyJyBoZWlnaHQ9JzUxMic+PHBhdGggZmlsbD0ncmdiKDI1NSwyNTUsMjU1KScgZD0nTTE3My44OTggNDM5LjQwNGwtMTY2LjQtMTY2LjRjLTkuOTk3LTkuOTk3LTkuOTk3LTI2LjIwNiAwLTM2LjIwNGwzNi4yMDMtMzYuMjA0YzkuOTk3LTkuOTk4IDI2LjIwNy05Ljk5OCAzNi4yMDQgMEwxOTIgMzEyLjY5IDQzMi4wOTUgNzIuNTk2YzkuOTk3LTkuOTk3IDI2LjIwNy05Ljk5NyAzNi4yMDQgMGwzNi4yMDMgMzYuMjA0YzkuOTk3IDkuOTk3IDkuOTk3IDI2LjIwNiAwIDM2LjIwNGwtMjk0LjQgMjk0LjQwMWMtOS45OTggOS45OTctMjYuMjA3IDkuOTk3LTM2LjIwNC0uMDAxeicvPjwvc3ZnPg==)}.toast-container.toast-bottom-center[_ngcontent-%COMP%]   .ngx-toastr[_ngcontent-%COMP%], .toast-container.toast-top-center[_ngcontent-%COMP%]   .ngx-toastr[_ngcontent-%COMP%]{width:300px;margin-left:auto;margin-right:auto}.toast-container.toast-bottom-full-width[_ngcontent-%COMP%]   .ngx-toastr[_ngcontent-%COMP%], .toast-container.toast-top-full-width[_ngcontent-%COMP%]   .ngx-toastr[_ngcontent-%COMP%]{width:96%;margin-left:auto;margin-right:auto}.ngx-toastr[_ngcontent-%COMP%]{background-color:#030303;pointer-events:auto}.toast-success[_ngcontent-%COMP%]{background-color:#51a351}.toast-error[_ngcontent-%COMP%]{background-color:#bd362f}.toast-info[_ngcontent-%COMP%]{background-color:#2f96b4}.toast-warning[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1NzYgNTEyJyB3aWR0aD0nNTc2JyBoZWlnaHQ9JzUxMic+PHBhdGggZmlsbD0ncmdiKDI1NSwyNTUsMjU1KScgZD0nTTU2OS41MTcgNDQwLjAxM0M1ODcuOTc1IDQ3Mi4wMDcgNTY0LjgwNiA1MTIgNTI3Ljk0IDUxMkg0OC4wNTRjLTM2LjkzNyAwLTU5Ljk5OS00MC4wNTUtNDEuNTc3LTcxLjk4N0wyNDYuNDIzIDIzLjk4NWMxOC40NjctMzIuMDA5IDY0LjcyLTMxLjk1MSA4My4xNTQgMGwyMzkuOTQgNDE2LjAyOHpNMjg4IDM1NGMtMjUuNDA1IDAtNDYgMjAuNTk1LTQ2IDQ2czIwLjU5NSA0NiA0NiA0NiA0Ni0yMC41OTUgNDYtNDYtMjAuNTk1LTQ2LTQ2LTQ2em0tNDMuNjczLTE2NS4zNDZsNy40MTggMTM2Yy4zNDcgNi4zNjQgNS42MDkgMTEuMzQ2IDExLjk4MiAxMS4zNDZoNDguNTQ2YzYuMzczIDAgMTEuNjM1LTQuOTgyIDExLjk4Mi0xMS4zNDZsNy40MTgtMTM2Yy4zNzUtNi44NzQtNS4wOTgtMTIuNjU0LTExLjk4Mi0xMi42NTRoLTYzLjM4M2MtNi44ODQgMC0xMi4zNTYgNS43OC0xMS45ODEgMTIuNjU0eicvPjwvc3ZnPg==);background-color:#f89406}.toast-progress[_ngcontent-%COMP%]{position:absolute;left:0;bottom:0;height:4px;background-color:#000;opacity:.4}@media all and (max-width:240px){.toast-container[_ngcontent-%COMP%]   .ngx-toastr.div[_ngcontent-%COMP%]{padding:8px 8px 8px 50px;width:11em}.toast-container[_ngcontent-%COMP%]   .toast-close-button[_ngcontent-%COMP%]{right:-.2em;top:-.2em}}@media all and (min-width:241px) and (max-width:480px){.toast-container[_ngcontent-%COMP%]   .ngx-toastr.div[_ngcontent-%COMP%]{padding:8px 8px 8px 50px;width:18em}.toast-container[_ngcontent-%COMP%]   .toast-close-button[_ngcontent-%COMP%]{right:-.2em;top:-.2em}}@media all and (min-width:481px) and (max-width:768px){.toast-container[_ngcontent-%COMP%]   .ngx-toastr.div[_ngcontent-%COMP%]{padding:15px 15px 15px 50px;width:25em}}.capitalize[_ngcontent-%COMP%]{text-transform:capitalize}.mt-0[_ngcontent-%COMP%]{margin-top:0!important}.cupom-cancelado[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin-bottom:16px}.cupom-cancelado[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding:8px 16px;border-radius:20px;background:#f45758;color:#fff;font-weight:700;font-size:10px;text-align:center;cursor:unset;display:flex;align-items:normal;gap:4px}.cupom-cancelado[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:14px}#compartilhamento[_ngcontent-%COMP%]{padding-top:7%;padding-right:7%;padding-bottom:2%}#logo[_ngcontent-%COMP%]{padding-left:5%;padding-bottom:2%}#logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:120px}.alignUpper[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly}.backPage[_ngcontent-%COMP%]{padding-top:15px;padding-left:12px;font-size:27px;color:#f0f5fb}body[_ngcontent-%COMP%]{background-color:#f0f5fb;overflow-x:hidden}hr[_ngcontent-%COMP%]{margin:16px}span[_ngcontent-%COMP%]{cursor:pointer}.item1[_ngcontent-%COMP%]{background-image:linear-gradient(to bottom,#00beff 25%,#f5f5f5 10%);background-attachment:fixed;display:flex;flex-direction:column}#textoChave[_ngcontent-%COMP%]{width:200px}.conteudo[_ngcontent-%COMP%]{font-size:12px;width:340px;margin:0 auto 5px 50%;background-color:#fff7cb;border-radius:15px;padding:20px;line-height:1.5;font-family:"Open Sans",sans-serif;transform:translateX(-50%)}.centraliza[_ngcontent-%COMP%]{padding:5%;text-align:center}.line[_ngcontent-%COMP%]{border-top:1px dashed #000;margin:0 1em;opacity:.2}.container[_ngcontent-%COMP%]{display:grid;padding:0 auto;grid-template-columns:15% 20% 10% 25% 25%;gap:2px}.produtos[_ngcontent-%COMP%]{padding:0 2% 5% 10%}.tabela[_ngcontent-%COMP%]{padding:0 10% 3%;display:grid;grid-template-columns:1f 1f;line-height:2}td[_ngcontent-%COMP%]{padding-top:10px}td[_ngcontent-%COMP%]:nth-child(2){text-align:end}tr[_ngcontent-%COMP%]:nth-child(1), tr[_ngcontent-%COMP%]:nth-child(2n+2){font-weight:700}.QRcode[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;align-items:center;font-size:10px;padding-right:5%;padding-top:6%}#QRImg[_ngcontent-%COMP%]{height:80pt;margin-left:20px}.imgLink[_ngcontent-%COMP%]{max-width:195px;max-height:120px}.chaveDeAcesso[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-top:5px;gap:12px;align-items:center}.textFooter[_ngcontent-%COMP%]{padding-bottom:10%;font-size:8px}.footer[_ngcontent-%COMP%]{text-align:center;box-sizing:border-box}@media (max-width:520px){#compartilhamento[_ngcontent-%COMP%]{padding-top:16%;padding-right:7%}#logo[_ngcontent-%COMP%]{padding-top:4%;padding-right:15%;padding-bottom:2%}.imgLink[_ngcontent-%COMP%]{max-width:180px}}@media (max-width:425px){.imgLink[_ngcontent-%COMP%]{max-width:180px}#compartilhamento[_ngcontent-%COMP%]{padding-top:16%;padding-right:8%}#logo[_ngcontent-%COMP%]{padding-top:4%;padding-right:37%;padding-bottom:2%}}@media (max-width:330px){.imgLink[_ngcontent-%COMP%]{max-width:160px}}.consultasefaz[_ngcontent-%COMP%]{margin:10px;text-align:center}.consultasefaz[_ngcontent-%COMP%]   .btn-consultasefaz[_ngcontent-%COMP%]{background-color:#ee8720;padding:6px;border-radius:40px;width:340px;height:50px;display:inline-flex;justify-content:center;align-items:center;margin-top:40px}.consultasefaz[_ngcontent-%COMP%]   .btn-consultasefaz[_ngcontent-%COMP%]:hover{border:4px solid #ff7053;padding:9px}.consultasefaz[_ngcontent-%COMP%]   .btn-consultasefaz[_ngcontent-%COMP%]   .btn-consultasefaz-text[_ngcontent-%COMP%]{color:#fff;width:250px;text-align:center;line-height:35px;font-size:22px;font-weight:600;letter-spacing:1.5px;padding-left:5px}.consultasefaz[_ngcontent-%COMP%]   .btn-consultasefaz[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{padding:0 0 4px 20px;width:50px}.enviarEmail[_ngcontent-%COMP%]{display:grid;max-width:340px;margin:0 auto}.enviarEmail[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:16px;color:#3d3c3a;font-family:"Open Sans","Helvetica Neue",sans-serif;margin-top:40px;text-align:center}.enviarEmail[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:1px solid #aeaeae;border-radius:40px;width:340px;height:45px;margin-top:14px;padding-left:22px;color:#707070}.enviarEmail[_ngcontent-%COMP%]   .buttonClass[_ngcontent-%COMP%]{display:flex;justify-content:center}.enviarEmail[_ngcontent-%COMP%]   .buttonClass[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:24px 0 0;background-color:#ee8720;width:165px;height:45px;border-radius:40px;font-size:20px;font-weight:600;letter-spacing:1.5px;color:#fff;border:none}.container-email[_ngcontent-%COMP%]{display:grid;margin:24px auto 0}.cardCupom[_ngcontent-%COMP%]{display:flex;align-items:center;width:358px;height:321px;margin:0 auto;background-color:#00beff;box-shadow:0 4px 6px rgba(0,0,0,.1);text-align:center;border-radius:30px}.cardCupom[_ngcontent-%COMP%]   .headerModal[_ngcontent-%COMP%]   .icone[_ngcontent-%COMP%]{position:fixed;top:16px;right:16px;width:33px}.cardCupom[_ngcontent-%COMP%]   .text-area[_ngcontent-%COMP%]{display:grid;max-width:294px;margin:0 auto}.cardCupom[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:24px;font-family:"Open Sans","Helvetica Neue",sans-serif;font-weight:700;color:#fff;letter-spacing:.7px;margin-top:30px}.cardCupom[_ngcontent-%COMP%]   #baixeAgora[_ngcontent-%COMP%]{margin:45px 0 16px}.cardCupom[_ngcontent-%COMP%]   .store-buttons[_ngcontent-%COMP%]{display:flex;justify-content:space-around;width:320px}.cardCupom[_ngcontent-%COMP%]   .store-buttons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:135px}.activated-card[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%);z-index:100;display:flex;align-items:center;width:358px;height:321px;margin:0 auto;background-color:#00beff;box-shadow:0 4px 6px rgba(0,0,0,.1);text-align:center;border-radius:30px}.activated-card[_ngcontent-%COMP%]   .headerModal[_ngcontent-%COMP%]   .icone[_ngcontent-%COMP%]{position:fixed;top:16px;right:16px;width:33px}.activated-card[_ngcontent-%COMP%]   .text-area[_ngcontent-%COMP%]{display:grid;max-width:294px;margin:0 auto}.activated-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:24px;font-family:"Open Sans","Helvetica Neue",sans-serif;font-weight:700;color:#fff;letter-spacing:.7px;margin-top:30px}.activated-card[_ngcontent-%COMP%]   #baixeAgora[_ngcontent-%COMP%]{margin:45px 0 16px}.activated-card[_ngcontent-%COMP%]   .store-buttons[_ngcontent-%COMP%]{display:flex;justify-content:space-around;width:320px}.activated-card[_ngcontent-%COMP%]   .store-buttons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:135px}ion-footer[_ngcontent-%COMP%]{display:flex;justify-content:center;text-align:center;margin:90px 0 24px}ion-footer[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:12px;font-family:"Open Sans","Helvetica Neue",sans-serif;padding:0 10px 5px;font-weight:600}ion-backdrop[_ngcontent-%COMP%]{opacity:1;background:#00111c80}']],data:{}});function b(n){return e.Kb(0,[(n()(),e.rb(0,0,null,null,3,"div",[["class","cupom-cancelado"]],null,null,null,null,null)),(n()(),e.rb(1,0,null,null,2,"span",[],null,null,null,null,null)),(n()(),e.rb(2,0,null,null,0,"i",[["class","ph-bold ph-prohibit"]],null,null,null,null,null)),(n()(),e.Jb(-1,null,[" CUPOM CANCELADO"]))],null,null)}function m(n){return e.Kb(0,[(n()(),e.rb(0,0,null,null,15,"div",[],null,null,null,null,null)),(n()(),e.rb(1,0,null,null,14,"div",[["class","produtos"]],null,null,null,null,null)),(n()(),e.rb(2,0,null,null,1,"h6",[],null,null,null,null,null)),(n()(),e.Jb(3,null,["",""])),(n()(),e.rb(4,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),e.rb(5,0,null,null,10,"div",[["class","container"]],null,null,null,null,null)),(n()(),e.rb(6,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e.Jb(7,null,["",""])),(n()(),e.rb(8,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e.Jb(9,null,[""," UN"])),(n()(),e.rb(10,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e.Jb(-1,null,["x"])),(n()(),e.rb(12,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e.Jb(13,null,["",""])),(n()(),e.rb(14,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e.Jb(15,null,["",""]))],null,(function(n,l){n(l,3,0,l.context.$implicit.name),n(l,7,0,("000"+(l.context.index+1)).slice(-3)),n(l,9,0,l.context.$implicit.qtd),n(l,13,0,l.context.$implicit.valorText),n(l,15,0,l.context.$implicit.totalText)}))}function h(n){return e.Kb(0,[(n()(),e.rb(0,0,null,null,4,"tr",[],null,null,null,null,null)),(n()(),e.rb(1,0,null,null,1,"td",[],null,null,null,null,null)),(n()(),e.Jb(-1,null,["Desconto"])),(n()(),e.rb(3,0,null,null,1,"td",[],null,null,null,null,null)),(n()(),e.Jb(4,null,["",""]))],null,(function(n,l){n(l,4,0,l.component.cupom.descontoText)}))}function M(n){return e.Kb(0,[(n()(),e.rb(0,0,null,null,4,"tr",[],null,null,null,null,null)),(n()(),e.rb(1,0,null,null,1,"td",[],null,null,null,null,null)),(n()(),e.Jb(-1,null,["Valor a pagar"])),(n()(),e.rb(3,0,null,null,1,"td",[],null,null,null,null,null)),(n()(),e.Jb(4,null,["",""]))],null,(function(n,l){var t=l.component;n(l,4,0,t.cupom.pagamento?t.cupom.pagamentoText:t.cupom.totalText)}))}function x(n){return e.Kb(0,[(n()(),e.rb(0,0,null,null,4,"tr",[],null,null,null,null,null)),(n()(),e.rb(1,0,null,null,1,"td",[],null,null,null,null,null)),(n()(),e.Jb(2,null,["",""])),(n()(),e.rb(3,0,null,null,1,"td",[],null,null,null,null,null)),(n()(),e.Jb(-1,null,["-"]))],null,(function(n,l){n(l,2,0,l.component.cupom.tipoPagamento)}))}function y(n){return e.Kb(0,[(n()(),e.rb(0,0,null,null,4,"tr",[],null,null,null,null,null)),(n()(),e.rb(1,0,null,null,1,"td",[],null,null,null,null,null)),(n()(),e.Jb(-1,null,["Troco"])),(n()(),e.rb(3,0,null,null,1,"td",[],null,null,null,null,null)),(n()(),e.Jb(4,null,["",""]))],null,(function(n,l){n(l,4,0,l.component.cupom.trocoText)}))}function v(n){return e.Kb(0,[(n()(),e.rb(0,0,null,null,1,"h6",[["class","capitalize mt-0"]],null,null,null,null,null)),(n()(),e.Jb(1,null,["",""]))],null,(function(n,l){n(l,1,0,l.component.cupom.numeroSerieText)}))}function C(n){return e.Kb(0,[(n()(),e.rb(0,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e.Jb(1,null,["Emiss\xe3o: "," - ",""]))],null,(function(n,l){var t=l.component;n(l,1,0,t.cupom.data,t.cupom.hora)}))}function O(n){return e.Kb(0,[(n()(),e.rb(0,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e.Jb(1,null,["Protocolo de autoriza\xe7\xe3o: ",""]))],null,(function(n,l){n(l,1,0,l.component.cupom.protocoloAuth)}))}function _(n){return e.Kb(0,[(n()(),e.rb(0,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e.Jb(1,null,["Autoriza\xe7\xe3o: ",""]))],null,(function(n,l){n(l,1,0,l.component.cupom.dataAutorizacao)}))}function w(n){return e.Kb(0,[(n()(),e.rb(0,0,null,null,7,"div",[["class","centraliza mt-0"]],null,null,null,null,null)),(n()(),e.rb(1,0,null,null,1,"h6",[["class","mt-0"]],null,null,null,null,null)),(n()(),e.Jb(-1,null,["Sua Chave de acesso"])),(n()(),e.rb(3,0,null,null,4,"div",[["class","chaveDeAcesso"]],null,null,null,null,null)),(n()(),e.rb(4,0,null,null,1,"p",[["id","textoChave"]],null,null,null,null,null)),(n()(),e.Jb(5,null,["",""])),(n()(),e.rb(6,0,null,null,1,"span",[["id","botao-copiar"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.copiarChave()&&e),e}),null,null)),(n()(),e.rb(7,0,null,null,0,"img",[["alt",""],["src","assets/img/clube/cupom/Imagem 3.png"]],null,null,null,null,null))],null,(function(n,l){n(l,5,0,l.component.cupom.chaveDeAcesso)}))}function P(n){return e.Kb(0,[(n()(),e.rb(0,0,null,null,57,"div",[["class","conteudo"]],null,null,null,null,null)),(n()(),e.rb(1,0,null,null,9,"div",[["class","centraliza"]],null,null,null,null,null)),(n()(),e.rb(2,0,null,null,1,"h6",[],null,null,null,null,null)),(n()(),e.Jb(3,null,["",""])),(n()(),e.rb(4,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e.Jb(5,null,["CNPJ ",""])),(n()(),e.rb(6,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),e.rb(7,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e.Jb(8,null,["","-",""])),(n()(),e.rb(9,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e.Jb(10,null,["CEP "," - "," - ",""])),(n()(),e.gb(16777216,null,null,1,null,b)),e.qb(12,16384,null,0,r.j,[e.O,e.K],{ngIf:[0,"ngIf"]},null),(n()(),e.rb(13,0,null,null,0,"div",[["class","line"]],null,null,null,null,null)),(n()(),e.rb(14,0,null,null,5,"div",[["class","centraliza"]],null,null,null,null,null)),(n()(),e.rb(15,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e.Jb(-1,null,["DANFE NFC-e \u2013 Documento Auxiliar de Nota Fiscal de Cosumidor Eletr\xf4nica"])),(n()(),e.rb(17,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),e.rb(18,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e.Jb(-1,null,["NFC-e n\xe3o permite aproveitamento de cr\xe9dito de ICMS"])),(n()(),e.rb(20,0,null,null,0,"div",[["class","line"]],null,null,null,null,null)),(n()(),e.gb(16777216,null,null,1,null,m)),e.qb(22,278528,null,0,r.i,[e.O,e.K,e.r],{ngForOf:[0,"ngForOf"]},null),(n()(),e.rb(23,0,null,null,0,"div",[["class","line"]],null,null,null,null,null)),(n()(),e.rb(24,0,null,null,20,"div",[["class","tabela"]],null,null,null,null,null)),(n()(),e.rb(25,0,null,null,19,"table",[],null,null,null,null,null)),(n()(),e.rb(26,0,null,null,18,"tbody",[],null,null,null,null,null)),(n()(),e.rb(27,0,null,null,4,"tr",[],null,null,null,null,null)),(n()(),e.rb(28,0,null,null,1,"td",[],null,null,null,null,null)),(n()(),e.Jb(-1,null,["Total de itens"])),(n()(),e.rb(30,0,null,null,1,"td",[],null,null,null,null,null)),(n()(),e.Jb(31,null,["",""])),(n()(),e.rb(32,0,null,null,4,"tr",[],null,null,null,null,null)),(n()(),e.rb(33,0,null,null,1,"td",[],null,null,null,null,null)),(n()(),e.Jb(-1,null,["Valor Total"])),(n()(),e.rb(35,0,null,null,1,"td",[],null,null,null,null,null)),(n()(),e.Jb(36,null,["",""])),(n()(),e.gb(16777216,null,null,1,null,h)),e.qb(38,16384,null,0,r.j,[e.O,e.K],{ngIf:[0,"ngIf"]},null),(n()(),e.gb(16777216,null,null,1,null,M)),e.qb(40,16384,null,0,r.j,[e.O,e.K],{ngIf:[0,"ngIf"]},null),(n()(),e.gb(16777216,null,null,1,null,x)),e.qb(42,16384,null,0,r.j,[e.O,e.K],{ngIf:[0,"ngIf"]},null),(n()(),e.gb(16777216,null,null,1,null,y)),e.qb(44,16384,null,0,r.j,[e.O,e.K],{ngIf:[0,"ngIf"]},null),(n()(),e.rb(45,0,null,null,0,"div",[["class","line"]],null,null,null,null,null)),(n()(),e.rb(46,0,null,null,8,"div",[["class","centraliza"]],null,null,null,null,null)),(n()(),e.gb(16777216,null,null,1,null,v)),e.qb(48,16384,null,0,r.j,[e.O,e.K],{ngIf:[0,"ngIf"]},null),(n()(),e.gb(16777216,null,null,1,null,C)),e.qb(50,16384,null,0,r.j,[e.O,e.K],{ngIf:[0,"ngIf"]},null),(n()(),e.gb(16777216,null,null,1,null,O)),e.qb(52,16384,null,0,r.j,[e.O,e.K],{ngIf:[0,"ngIf"]},null),(n()(),e.gb(16777216,null,null,1,null,_)),e.qb(54,16384,null,0,r.j,[e.O,e.K],{ngIf:[0,"ngIf"]},null),(n()(),e.rb(55,0,null,null,0,"div",[["class","line"]],null,null,null,null,null)),(n()(),e.gb(16777216,null,null,1,null,w)),e.qb(57,16384,null,0,r.j,[e.O,e.K],{ngIf:[0,"ngIf"]},null)],(function(n,l){var t=l.component;n(l,12,0,t.cupom.cancelada),n(l,22,0,t.cupom.lista),n(l,38,0,t.cupom.desconto&&0!=t.cupom.desconto),n(l,40,0,t.cupom.desconto&&0!=t.cupom.desconto),n(l,42,0,t.cupom.tipoPagamento),n(l,44,0,t.cupom.troco&&0!=t.cupom.troco),n(l,48,0,t.cupom.numeroSerieText),n(l,50,0,t.cupom.data&&t.cupom.hora),n(l,52,0,t.cupom.protocoloAuth),n(l,54,0,t.cupom.dataAutorizacao),n(l,57,0,t.cupom.chaveDeAcesso)}),(function(n,l){var t=l.component;n(l,3,0,t.cupom.lojaDados.nome),n(l,5,0,t.cupom.lojaDados.cnpjText),n(l,8,0,t.cupom.lojaDados.end.endereco,t.cupom.lojaDados.end.bairro),n(l,10,0,t.cupom.lojaDados.end.cep,t.cupom.lojaDados.end.cidade,t.cupom.lojaDados.end.uf),n(l,31,0,t.cupom.nlista),n(l,36,0,t.cupom.totalText)}))}function N(n){return e.Kb(0,[(n()(),e.rb(0,0,null,null,11,"div",[["class","enviarEmail"]],null,null,null,null,null)),(n()(),e.rb(1,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),e.Jb(-1,null,["Envie o cupom fiscal para seu e-mail"])),(n()(),e.rb(3,0,null,null,5,"input",[["placeholder","Seu e-mail"],["type","email"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"keyup"],[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(n,l,t){var o=!0,u=n.component;return"input"===l&&(o=!1!==e.Db(n,4)._handleInput(t.target.value)&&o),"blur"===l&&(o=!1!==e.Db(n,4).onTouched()&&o),"compositionstart"===l&&(o=!1!==e.Db(n,4)._compositionStart()&&o),"compositionend"===l&&(o=!1!==e.Db(n,4)._compositionEnd(t.target.value)&&o),"keyup"===l&&(o=!1!==u.verificarEmail()&&o),"ngModelChange"===l&&(o=!1!==(u.email=t)&&o),o}),null,null)),e.qb(4,16384,null,0,a.b,[e.C,e.l,[2,a.a]],null,null),e.Gb(1024,null,a.f,(function(n){return[n]}),[a.b]),e.qb(6,671744,null,0,a.i,[[8,null],[8,null],[8,null],[6,a.f]],{model:[0,"model"]},{update:"ngModelChange"}),e.Gb(2048,null,a.g,null,[a.i]),e.qb(8,16384,null,0,a.h,[[4,a.g]],null,null),(n()(),e.rb(9,0,null,null,2,"div",[["class","buttonClass"]],null,null,null,null,null)),(n()(),e.rb(10,0,null,null,1,"button",[],[[8,"disabled",0]],[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.enviarEmail()&&e),e}),null,null)),(n()(),e.Jb(-1,null,["Enviar"]))],(function(n,l){n(l,6,0,l.component.email)}),(function(n,l){var t=l.component;n(l,3,0,e.Db(l,8).ngClassUntouched,e.Db(l,8).ngClassTouched,e.Db(l,8).ngClassPristine,e.Db(l,8).ngClassDirty,e.Db(l,8).ngClassValid,e.Db(l,8).ngClassInvalid,e.Db(l,8).ngClassPending),n(l,10,0,!t.verificaEmail)}))}function T(n){return e.Kb(0,[(n()(),e.rb(0,0,null,null,5,"div",[["class","container-email"]],null,null,null,null,null)),(n()(),e.rb(1,0,null,null,2,"strong",[],null,null,null,null,null)),(n()(),e.rb(2,0,null,null,1,"p",[["class","titulo-email"]],null,null,null,null,null)),(n()(),e.Jb(-1,null,["O cupom fiscal foi enviado para o seu e-mail"])),(n()(),e.rb(4,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e.Jb(5,null,["Enviado para ",""]))],null,(function(n,l){n(l,5,0,l.component.email)}))}function j(n){return e.Kb(0,[(n()(),e.rb(0,0,null,null,28,"ion-content",[],null,null,null,i.ib,i.m)),e.qb(1,49152,null,0,c.w,[e.h,e.l,e.y],null,null),(n()(),e.rb(2,0,null,0,26,"div",[["class","item1"]],null,null,null,null,null)),(n()(),e.rb(3,0,null,null,9,"header",[],null,null,null,null,null)),(n()(),e.rb(4,0,null,null,2,"div",[["style","padding-top: env(safe-area-inset-top)"]],null,null,null,null,null)),(n()(),e.rb(5,0,null,null,1,"ion-icon",[["class","backPage"],["name","arrow-back-outline"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.goBack()&&e),e}),i.mb,i.q)),e.qb(6,49152,null,0,c.E,[e.h,e.l,e.y],{name:[0,"name"]},null),(n()(),e.rb(7,0,null,null,5,"div",[["class","alignUpper"]],null,null,null,null,null)),(n()(),e.rb(8,0,null,null,1,"div",[["id","logo"]],null,null,null,null,null)),(n()(),e.rb(9,0,null,null,0,"img",[["alt",""],["src","assets/img/clube/cupom/cupomBarbosa.png"]],null,null,null,null,null)),(n()(),e.rb(10,0,null,null,2,"div",[["id","compartilhamento"]],null,null,null,null,null)),(n()(),e.rb(11,0,null,null,1,"span",[["id","botao-copiar"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.copiarShare()&&e),e}),null,null)),(n()(),e.rb(12,0,null,null,0,"img",[["alt",""],["class","iconShare"],["src","assets/img/clube/cupom/share.svg"]],null,null,null,null,null)),(n()(),e.gb(16777216,null,null,1,null,P)),e.qb(14,16384,null,0,r.j,[e.O,e.K],{ngIf:[0,"ngIf"]},null),(n()(),e.rb(15,0,null,null,4,"div",[["class","consultasefaz"]],null,null,null,null,null)),(n()(),e.rb(16,0,null,null,3,"button",[["class","btn-consultasefaz"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.abrirSefaz()&&e),e}),null,null)),(n()(),e.rb(17,0,null,null,0,"img",[["alt",""],["src","../../../assets/img/clube/cupom/abrirSefaz.svg"]],null,null,null,null,null)),(n()(),e.rb(18,0,null,null,1,"div",[["class","btn-consultasefaz-text"]],null,null,null,null,null)),(n()(),e.Jb(-1,null,["Consultar na SEFAZ"])),(n()(),e.gb(16777216,null,null,1,null,N)),e.qb(21,16384,null,0,r.j,[e.O,e.K],{ngIf:[0,"ngIf"]},null),(n()(),e.gb(16777216,null,null,1,null,T)),e.qb(23,16384,null,0,r.j,[e.O,e.K],{ngIf:[0,"ngIf"]},null),(n()(),e.rb(24,0,null,null,4,"ion-footer",[],null,null,null,i.jb,i.n)),e.qb(25,49152,null,0,c.B,[e.h,e.l,e.y],null,null),(n()(),e.rb(26,0,null,0,1,"h1",[],null,null,null,null,null)),(n()(),e.Jb(-1,null,["Desenvolvido por"])),(n()(),e.rb(28,0,null,0,0,"img",[["alt",""],["src","../../../assets/img/clube/cupom/applayAzul.svg"]],null,null,null,null,null))],(function(n,l){var t=l.component;n(l,6,0,"arrow-back-outline"),n(l,14,0,t.cupom),n(l,21,0,!t.emailEnviado),n(l,23,0,t.emailEnviado)}),null)}var D=e.nb("app-cupomdigital",p,(function(n){return e.Kb(0,[(n()(),e.rb(0,0,null,null,1,"app-cupomdigital",[],null,null,null,j,f)),e.qb(1,114688,null,0,p,[c.Ib,g.a,c.Qb,d.a],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]),I=_createClass((function n(){_classCallCheck(this,n)}));t.d(l,"CupomdigitalPageModuleNgFactory",(function(){return L}));var L=e.ob(o,[],(function(n){return e.Ab([e.Bb(512,e.k,e.Z,[[8,[u.a,D]],[3,e.k],e.w]),e.Bb(4608,r.l,r.k,[e.t,[2,r.y]]),e.Bb(4608,a.l,a.l,[]),e.Bb(4608,c.c,c.c,[e.y,e.g]),e.Bb(4608,c.Hb,c.Hb,[c.c,e.k,e.q]),e.Bb(4608,c.Lb,c.Lb,[c.c,e.k,e.q]),e.Bb(4608,a.c,a.c,[]),e.Bb(4608,e.j,e.j,[]),e.Bb(1073742336,r.b,r.b,[]),e.Bb(1073742336,a.k,a.k,[]),e.Bb(1073742336,a.e,a.e,[]),e.Bb(1073742336,c.Db,c.Db,[]),e.Bb(1073742336,d.p,d.p,[[2,d.u],[2,d.m]]),e.Bb(1073742336,I,I,[]),e.Bb(1073742336,a.j,a.j,[]),e.Bb(1073742336,o,o,[]),e.Bb(1024,d.k,(function(){return[[{path:"",component:p}]]}),[])])}))}}]);