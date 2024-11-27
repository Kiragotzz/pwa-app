function _regeneratorRuntime(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */_regeneratorRuntime=function(){return t};var n,t={},e=Object.prototype,r=e.hasOwnProperty,o=Object.defineProperty||function(n,t,e){n[t]=e.value},i="function"==typeof Symbol?Symbol:{},l=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(n,t,e){return Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}),n[t]}try{s({},"")}catch(n){s=function(n,t,e){return n[t]=e}}function c(n,t,e,r){var i=t&&t.prototype instanceof g?t:g,l=Object.create(i.prototype),a=new j(r||[]);return o(l,"_invoke",{value:k(n,e,a)}),l}function h(n,t,e){try{return{type:"normal",arg:n.call(t,e)}}catch(n){return{type:"throw",arg:n}}}t.wrap=c;var p="suspendedStart",f="executing",d="completed",m={};function g(){}function b(){}function v(){}var y={};s(y,l,(function(){return this}));var w=Object.getPrototypeOf,x=w&&w(w(I([])));x&&x!==e&&r.call(x,l)&&(y=x);var _=v.prototype=g.prototype=Object.create(y);function O(n){["next","throw","return"].forEach((function(t){s(n,t,(function(n){return this._invoke(t,n)}))}))}function C(n,t){function e(o,i,l,a){var u=h(n[o],n,i);if("throw"!==u.type){var s=u.arg,c=s.value;return c&&"object"==typeof c&&r.call(c,"__await")?t.resolve(c.__await).then((function(n){e("next",n,l,a)}),(function(n){e("throw",n,l,a)})):t.resolve(c).then((function(n){s.value=n,l(s)}),(function(n){return e("throw",n,l,a)}))}a(u.arg)}var i;o(this,"_invoke",{value:function(n,r){function o(){return new t((function(t,o){e(n,r,t,o)}))}return i=i?i.then(o,o):o()}})}function k(t,e,r){var o=p;return function(i,l){if(o===f)throw Error("Generator is already running");if(o===d){if("throw"===i)throw l;return{value:n,done:!0}}for(r.method=i,r.arg=l;;){var a=r.delegate;if(a){var u=P(a,r);if(u){if(u===m)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===p)throw o=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=f;var s=h(t,e,r);if("normal"===s.type){if(o=r.done?d:"suspendedYield",s.arg===m)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(o=d,r.method="throw",r.arg=s.arg)}}}function P(t,e){var r=e.method,o=t.iterator[r];if(o===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=n,P(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),m;var i=h(o,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,m;var l=i.arg;return l?l.done?(e[t.resultName]=l.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,m):l:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function L(n){var t={tryLoc:n[0]};1 in n&&(t.catchLoc=n[1]),2 in n&&(t.finallyLoc=n[2],t.afterLoc=n[3]),this.tryEntries.push(t)}function E(n){var t=n.completion||{};t.type="normal",delete t.arg,n.completion=t}function j(n){this.tryEntries=[{tryLoc:"root"}],n.forEach(L,this),this.reset(!0)}function I(t){if(t||""===t){var e=t[l];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function e(){for(;++o<t.length;)if(r.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=n,e.done=!0,e};return i.next=i}}throw new TypeError(typeof t+" is not iterable")}return b.prototype=v,o(_,"constructor",{value:v,configurable:!0}),o(v,"constructor",{value:b,configurable:!0}),b.displayName=s(v,u,"GeneratorFunction"),t.isGeneratorFunction=function(n){var t="function"==typeof n&&n.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(n){return Object.setPrototypeOf?Object.setPrototypeOf(n,v):(n.__proto__=v,s(n,u,"GeneratorFunction")),n.prototype=Object.create(_),n},t.awrap=function(n){return{__await:n}},O(C.prototype),s(C.prototype,a,(function(){return this})),t.AsyncIterator=C,t.async=function(n,e,r,o,i){void 0===i&&(i=Promise);var l=new C(c(n,e,r,o),i);return t.isGeneratorFunction(e)?l:l.next().then((function(n){return n.done?n.value:l.next()}))},O(_),s(_,u,"Generator"),s(_,l,(function(){return this})),s(_,"toString",(function(){return"[object Generator]"})),t.keys=function(n){var t=Object(n),e=[];for(var r in t)e.push(r);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=I,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var n=this.tryEntries[0].completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(r,o){return a.type="throw",a.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var l=this.tryEntries[i],a=l.completion;if("root"===l.tryLoc)return o("end");if(l.tryLoc<=this.prev){var u=r.call(l,"catchLoc"),s=r.call(l,"finallyLoc");if(u&&s){if(this.prev<l.catchLoc)return o(l.catchLoc,!0);if(this.prev<l.finallyLoc)return o(l.finallyLoc)}else if(u){if(this.prev<l.catchLoc)return o(l.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<l.finallyLoc)return o(l.finallyLoc)}}}},abrupt:function(n,t){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===n||"continue"===n)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var l=i?i.completion:{};return l.type=n,l.arg=t,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(l)},complete:function(n,t){if("throw"===n.type)throw n.arg;return"break"===n.type||"continue"===n.type?this.next=n.arg:"return"===n.type?(this.rval=this.arg=n.arg,this.method="return",this.next="end"):"normal"===n.type&&t&&(this.next=t),m},finish:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var e=this.tryEntries[t];if(e.finallyLoc===n)return this.complete(e.completion,e.afterLoc),E(e),m}},catch:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var e=this.tryEntries[t];if(e.tryLoc===n){var r=e.completion;if("throw"===r.type){var o=r.arg;E(e)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:I(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),m}},t}function _createForOfIteratorHelper(n,t){var e="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!e){if(Array.isArray(n)||(e=_unsupportedIterableToArray(n))||t&&n&&"number"==typeof n.length){e&&(n=e);var r=0,o=function(){};return{s:o,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(n){throw n},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,a=!1;return{s:function(){e=e.call(n)},n:function(){var n=e.next();return l=n.done,n},e:function(n){a=!0,i=n},f:function(){try{l||null==e.return||e.return()}finally{if(a)throw i}}}}function _unsupportedIterableToArray(n,t){if(n){if("string"==typeof n)return _arrayLikeToArray(n,t);var e={}.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?_arrayLikeToArray(n,t):void 0}}function _arrayLikeToArray(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=Array(t);e<t;e++)r[e]=n[e];return r}function _defineProperties(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,_toPropertyKey(r.key),r)}}function _createClass(n,t,e){return t&&_defineProperties(n.prototype,t),e&&_defineProperties(n,e),Object.defineProperty(n,"prototype",{writable:!1}),n}function _toPropertyKey(n){var t=_toPrimitive(n,"string");return"symbol"==typeof t?t:t+""}function _toPrimitive(n,t){if("object"!=typeof n||!n)return n;var e=n[Symbol.toPrimitive];if(void 0!==e){var r=e.call(n,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(n)}function _classCallCheck(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"8oYY":function(n,t,e){"use strict";e.r(t);var r=e("8Y7J"),o=_createClass((function n(){_classCallCheck(this,n)})),i=e("pMnS"),l=e("SVse"),a=e("MKJQ"),u=e("sZkV"),s=e("iInd"),c=e("mrSG"),h=e("H+bZ"),p=e("EnSQ"),f=e("qfBg"),d=e("6mc2"),m=e("Mzne"),g=function(){return _createClass((function n(t,e,r,o,i,l){_classCallCheck(this,n),this.platform=t,this.api=e,this.data=r,this.user=o,this.tools=i,this.router=l,this.raspinhas=[],this.idx=0,this.raspDisp=0,this.premiosList=[{id:0,valor:0,img:"assets/img/clube/premios/0reais.jpg",message:"N\xe3o foi dessa vez, continue participando!"},{id:10,valor:10,img:"assets/img/clube/premios/10reais.jpg",message:"Voc\xea ganhou R$10 em vale compras!"},{id:15,valor:15,img:"assets/img/clube/premios/15reais.jpg",message:"Voc\xea ganhou R$15 em vale compras!"},{id:20,valor:20,img:"assets/img/clube/premios/20reais.jpg",message:"Voc\xea ganhou R$20 em vale compras!"},{id:25,valor:25,img:"assets/img/clube/premios/25reais.jpg",message:"Voc\xea ganhou R$25 em vale compras!"},{id:99,valor:0,img:"assets/img/clube/premios/imagem.jpg",message:"Voc\xea ganhou um produto!",produto:!0}],this.showImg=!1,this.ios=!1,this.premio={img:"assets/img/clube/premios/padrao.jpg",message:"N\xe3o foi dessa vez, continue participando!"},this.size=0,this.srcCanvas="",this.srcPincel="",this.srcCanvas=this.data.getData("srcCanvas"),this.srcPincel=this.data.getData("srcPincel")}),[{key:"ngOnInit",value:function(){this.size=window.innerWidth-32,document.getElementById("js-container").style.width=this.size+"px",document.getElementById("js-container").style.height=this.size+"px"}},{key:"ionViewDidEnter",value:function(){var n=this,t={clienteId:this.user.getUsuarioClube()._id,bsm:"ok1"};this.showImg=!1,this.api.clube("listarpremios",t,(function(t){n.idx=0;var e,r=_createForOfIteratorHelper(t.data);try{var o,i=function(){var t=e.value;[0,10].indexOf(t.valor)>=0&&!t.produto&&(o=n.premiosList.find((function(n){return n.id==t.valor})),t.img=o.img,t.message=o.message)};for(r.s();!(e=r.n()).done;)i()}catch(l){r.e(l)}finally{r.f()}n.raspinhas=t.data.filter((function(n){return"raspinha"==n.tipo&&!n.visualizado})),n.raspDisp=n.raspinhas.filter((function(n){return!n.visualizado})).length,console.log("[raspinhas] ",n.raspinhas),setTimeout((function(){n.loadRaspadinha()}),50)}))}},{key:"ionViewDidLeave",value:function(){console.log("ionViewDidLeave"),this.raspinhas=[]}},{key:"nextRaspinha",value:function(){var n=this;console.log("nextRaspinha1"),this.raspinhas[this.idx].resgatado?this.idx+1!=this.raspDisp?(this.showImg=!1,this.idx=this.idx+1,console.log("nextRaspinha2"),setTimeout((function(){console.log("nextRaspinha3"),n.loadRaspadinha()}),50)):this.tools.showAlert("","Essa \xe9 sua \xfaltima raspinha!"):this.tools.showAlert("","Utilize essa raspinha primeiro!")}},{key:"loadRaspadinha",value:function(){return c.__awaiter(this,void 0,void 0,_regeneratorRuntime().mark((function n(){var t,e=this;return _regeneratorRuntime().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:this.showImg=!1,t=this,function(){document.getElementById("js-container");var n,r,o=document.getElementById("js-canvas"+t.idx),i=o.width,l=o.height,a=o.getContext("2d"),u=new Image,s=new Image;function c(n,t){var e=0,r=0;if(void 0!==t.offsetParent)do{e+=t.offsetLeft,r+=t.offsetTop}while(t=t.offsetParent);return{x:(n.pageX||n.touches[0].clientX)-e,y:(n.pageY||n.touches[0].clientY)-r}}function h(t){n=!0,r=c(t,o)}function p(e){if(n){e.preventDefault();for(var u,h,p,f,d=c(e,o),m=(p=r,f=d,Math.sqrt(Math.pow(f.x-p.x,2)+Math.pow(f.y-p.y,2))),g=function(n,t){return Math.atan2(t.x-n.x,t.y-n.y)}(r,d),b=0;b<m;b++)u=r.x+Math.sin(g)*b-25,h=r.y+Math.cos(g)*b-25,a.globalCompositeOperation="destination-out",a.drawImage(s,u,h);r=d,function(n){if((n=n||0)>60){if(!document.getElementById("js-canvas"+t.idx))return;o.parentNode.removeChild(o),t.api.clube("ativaraspinha",{raspinha:t.raspinhas[t.idx]},(function(n){return console.log("ativaraspinha: ",n),n.status?(t.raspinhas[t.idx].resgatado=!0,t.user.setUsuarioClube(n.data),t.router.send({cmd:"usuario",usuario:n.data}),void t.tools.showAlert(t.raspinhas[t.idx].premiado?"Parab\xe9ns":"Que pena...",t.premio.message)):void t.tools.showAlert("Falha",n.msg)}))}}(function(n){(!n||n<1)&&(n=1);for(var t=a.getImageData(0,0,i,l).data,e=t.length,r=e/n,o=0,u=o=0;u<e;u+=n)0===parseInt(t[u])&&o++;return Math.round(o/r*100)}(32))}}function f(t){n=!1}u.src=t.srcCanvas,u.style.maxWidth="100%",u.onload=function(){a.drawImage(u,0,0,t.size,t.size),document.querySelectorAll(".raspadinha")[0].style.visibility="visible",e.raspinhas[e.idx].produto&&(e.raspinhas[e.idx].valor="99"),e.premio=e.premiosList.find((function(n){return n.id==e.raspinhas[e.idx].valor})),e.raspinhas[e.idx].produto&&e.raspinhas[e.idx].img&&(e.premio.message=e.raspinhas[e.idx].message,e.premio.img=e.raspinhas[e.idx].img),e.showImg=!0},s.src=t.srcPincel,o.addEventListener("mousedown",h,!1),o.addEventListener("touchstart",h,!1),o.addEventListener("mousemove",p,!1),o.addEventListener("touchmove",p,!1),o.addEventListener("mouseup",f,!1),o.addEventListener("touchend",f,!1)}();case 3:case"end":return n.stop()}}),n,this)})))}}])}(),b=r.pb({encapsulation:0,styles:[[".hidden[_ngcontent-%COMP%]{display:none}.show[_ngcontent-%COMP%]{display:block}.container[_ngcontent-%COMP%]{position:relative;margin:0 auto;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none;overflow:hidden}.canvas[_ngcontent-%COMP%]{position:absolute;top:0}.serie[_ngcontent-%COMP%]{text-align:center;color:#009efa;font-weight:700;font-size:1rem;margin-bottom:16px}.raspadinha[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100%;text-align:center}.raspadinha[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.teste[_ngcontent-%COMP%]{border:5px solid red}.app-raspinha[_ngcontent-%COMP%]   .buttons-content[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.app-raspinha[_ngcontent-%COMP%]   .buttons-content[_ngcontent-%COMP%]   .premio-button[_ngcontent-%COMP%]{height:50px;border-radius:10px;flex:1;font-weight:1000;text-align:center;display:flex;flex-direction:column;justify-content:center;align-items:center}.app-raspinha[_ngcontent-%COMP%]   .buttons-content[_ngcontent-%COMP%]   .numerodasorte[_ngcontent-%COMP%]{color:#009efa;border:2px solid #009efa}.app-raspinha[_ngcontent-%COMP%]   .buttons-content[_ngcontent-%COMP%]   .vernumerodasorte[_ngcontent-%COMP%]{background:#f88a2f;color:#fff}.premio-button[_ngcontent-%COMP%] + .premio-button[_ngcontent-%COMP%]{margin-left:16px}"]],data:{}});function v(n){return r.Kb(0,[(n()(),r.rb(0,0,null,null,3,"canvas",[["class","canvas"]],[[8,"id",0],[8,"width",0],[8,"height",0]],null,null,null,null)),r.Gb(512,null,l.t,l.u,[r.r,r.s,r.l,r.C]),r.qb(2,278528,null,0,l.h,[l.t],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),r.Fb(3,{hidden:0})],(function(n,t){var e=n(t,3,0,t.component.idx!=t.context.index);n(t,2,0,"canvas",e)}),(function(n,t){var e=t.component;n(t,0,0,"js-canvas"+t.context.index,e.size,e.size)}))}function y(n){return r.Kb(0,[(n()(),r.rb(0,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null))],null,(function(n,t){n(t,0,0,t.parent.context.$implicit.img)}))}function w(n){return r.Kb(0,[(n()(),r.rb(0,0,null,null,2,"div",[["class",""]],null,null,null,null,null)),(n()(),r.gb(16777216,null,null,1,null,y)),r.qb(2,16384,null,0,l.j,[r.O,r.K],{ngIf:[0,"ngIf"]},null)],(function(n,t){var e=t.component;n(t,2,0,e.idx==t.context.index&&e.showImg)}),null)}function x(n){return r.Kb(0,[(n()(),r.rb(0,0,null,null,1,"div",[["class","serie"]],null,null,null,null,null)),(n()(),r.Jb(1,null,["N\xba de S\xe9rie: ",""]))],null,(function(n,t){var e=t.component;n(t,1,0,e.raspinhas[e.idx].serie)}))}function _(n){return r.Kb(0,[(n()(),r.rb(0,0,null,null,14,"ion-header",[],null,null,null,a.lb,a.p)),r.qb(1,49152,null,0,u.D,[r.h,r.l,r.y],null,null),(n()(),r.rb(2,0,null,0,12,"ion-toolbar",[["color","secondary"]],null,null,null,a.Rb,a.V)),r.qb(3,49152,null,0,u.Bb,[r.h,r.l,r.y],{color:[0,"color"]},null),(n()(),r.rb(4,0,null,0,7,"ion-buttons",[["routerLink","/clube/clube/clube-premios"],["slot","start"]],null,[[null,"click"]],(function(n,t,e){var o=!0;return"click"===t&&(o=!1!==r.Db(n,6).onClick()&&o),"click"===t&&(o=!1!==r.Db(n,7).onClick(e)&&o),o}),a.bb,a.f)),r.qb(5,49152,null,0,u.n,[r.h,r.l,r.y],null,null),r.qb(6,16384,null,0,s.n,[s.m,s.a,[8,null],r.C,r.l],{routerLink:[0,"routerLink"]},null),r.qb(7,737280,null,0,u.Nb,[l.g,u.Ib,r.l,s.m,[2,s.n]],null,null),(n()(),r.rb(8,0,null,0,3,"ion-button",[],null,null,null,a.ab,a.e)),r.qb(9,49152,null,0,u.m,[r.h,r.l,r.y],null,null),(n()(),r.rb(10,0,null,0,1,"ion-icon",[["name","arrow-back-outline"],["slot","icon-only"]],null,null,null,a.mb,a.q)),r.qb(11,49152,null,0,u.E,[r.h,r.l,r.y],{name:[0,"name"]},null),(n()(),r.rb(12,0,null,0,2,"ion-title",[],null,null,null,a.Pb,a.T)),r.qb(13,49152,null,0,u.zb,[r.h,r.l,r.y],null,null),(n()(),r.Jb(-1,0,["Raspinhas"])),(n()(),r.rb(15,0,null,null,24,"ion-content",[["class","app-raspinha"]],null,null,null,a.ib,a.m)),r.qb(16,49152,null,0,u.w,[r.h,r.l,r.y],null,null),(n()(),r.rb(17,0,null,0,22,"ion-card",[],null,null,null,a.fb,a.g)),r.qb(18,49152,null,0,u.o,[r.h,r.l,r.y],null,null),(n()(),r.rb(19,0,null,0,5,"div",[["class","container"],["id","js-container"]],null,null,null,null,null)),(n()(),r.gb(16777216,null,null,1,null,v)),r.qb(21,278528,null,0,l.i,[r.O,r.K,r.r],{ngForOf:[0,"ngForOf"]},null),(n()(),r.rb(22,0,null,null,2,"div",[["class","raspadinha"]],null,null,null,null,null)),(n()(),r.gb(16777216,null,null,1,null,w)),r.qb(24,278528,null,0,l.i,[r.O,r.K,r.r],{ngForOf:[0,"ngForOf"]},null),(n()(),r.rb(25,0,null,0,14,"ion-card-content",[],null,null,null,a.cb,a.h)),r.qb(26,49152,null,0,u.p,[r.h,r.l,r.y],null,null),(n()(),r.gb(16777216,null,0,1,null,x)),r.qb(28,16384,null,0,l.j,[r.O,r.K],{ngIf:[0,"ngIf"]},null),(n()(),r.rb(29,0,null,0,10,"div",[["class","buttons-content"]],null,null,null,null,null)),(n()(),r.rb(30,0,null,null,4,"div",[["class","premio-button numerodasorte"]],null,null,null,null,null)),(n()(),r.rb(31,0,null,null,1,"div",[["style","font-size: 0.7rem"]],null,null,null,null,null)),(n()(),r.Jb(-1,null,["Raspinhas"])),(n()(),r.rb(33,0,null,null,1,"div",[["class",""]],null,null,null,null,null)),(n()(),r.Jb(34,null,["","/",""])),(n()(),r.rb(35,0,null,null,4,"div",[["class","premio-button vernumerodasorte"]],null,[[null,"click"]],(function(n,t,e){var r=!0;return"click"===t&&(r=!1!==n.component.nextRaspinha()&&r),r}),null,null)),(n()(),r.rb(36,0,null,null,3,"div",[["class",""]],null,null,null,null,null)),(n()(),r.Jb(-1,null,["PR\xd3XIMO "])),(n()(),r.rb(38,0,null,null,1,"ion-icon",[["name","chevron-forward-outline"]],null,null,null,a.mb,a.q)),r.qb(39,49152,null,0,u.E,[r.h,r.l,r.y],{name:[0,"name"]},null)],(function(n,t){var e=t.component;n(t,3,0,"secondary"),n(t,6,0,"/clube/clube/clube-premios"),n(t,7,0),n(t,11,0,"arrow-back-outline"),n(t,21,0,e.raspinhas),n(t,24,0,e.raspinhas),n(t,28,0,e.raspinhas[e.idx]&&e.raspinhas[e.idx].serie),n(t,39,0,"chevron-forward-outline")}),(function(n,t){var e=t.component;n(t,34,0,e.idx+1,e.raspDisp)}))}var O=r.nb("app-clube-raspadinha",g,(function(n){return r.Kb(0,[(n()(),r.rb(0,0,null,null,1,"app-clube-raspadinha",[],null,null,null,_,b)),r.qb(1,114688,null,0,g,[u.Kb,h.a,p.a,f.a,d.a,m.a],null,null)],(function(n,t){n(t,1,0)}),null)}),{},{},[]),C=e("s7LF"),k=_createClass((function n(){_classCallCheck(this,n)}));e.d(t,"ClubeRaspadinhaPageModuleNgFactory",(function(){return P}));var P=r.ob(o,[],(function(n){return r.Ab([r.Bb(512,r.k,r.Z,[[8,[i.a,O]],[3,r.k],r.w]),r.Bb(4608,l.l,l.k,[r.t,[2,l.y]]),r.Bb(4608,C.l,C.l,[]),r.Bb(4608,u.c,u.c,[r.y,r.g]),r.Bb(4608,u.Hb,u.Hb,[u.c,r.k,r.q]),r.Bb(4608,u.Lb,u.Lb,[u.c,r.k,r.q]),r.Bb(1073742336,l.b,l.b,[]),r.Bb(1073742336,C.k,C.k,[]),r.Bb(1073742336,C.e,C.e,[]),r.Bb(1073742336,u.Db,u.Db,[]),r.Bb(1073742336,s.p,s.p,[[2,s.u],[2,s.m]]),r.Bb(1073742336,k,k,[]),r.Bb(1073742336,o,o,[]),r.Bb(1024,s.k,(function(){return[[{path:"",component:g}]]}),[])])}))}}]);