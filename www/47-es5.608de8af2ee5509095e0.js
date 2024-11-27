function _regeneratorRuntime(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */_regeneratorRuntime=function(){return t};var n,t={},e=Object.prototype,l=e.hasOwnProperty,r=Object.defineProperty||function(n,t,e){n[t]=e.value},o="function"==typeof Symbol?Symbol:{},u=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",i=o.toStringTag||"@@toStringTag";function s(n,t,e){return Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}),n[t]}try{s({},"")}catch(n){s=function(n,t,e){return n[t]=e}}function c(n,t,e,l){var o=t&&t.prototype instanceof p?t:p,u=Object.create(o.prototype),a=new q(l||[]);return r(u,"_invoke",{value:k(n,e,a)}),u}function h(n,t,e){try{return{type:"normal",arg:n.call(t,e)}}catch(n){return{type:"throw",arg:n}}}t.wrap=c;var g="suspendedStart",b="executing",f="completed",d={};function p(){}function v(){}function y(){}var m={};s(m,u,(function(){return this}));var C=Object.getPrototypeOf,w=C&&C(C(L([])));w&&w!==e&&l.call(w,u)&&(m=w);var _=y.prototype=p.prototype=Object.create(m);function x(n){["next","throw","return"].forEach((function(t){s(n,t,(function(n){return this._invoke(t,n)}))}))}function P(n,t){function e(r,o,u,a){var i=h(n[r],n,o);if("throw"!==i.type){var s=i.arg,c=s.value;return c&&"object"==typeof c&&l.call(c,"__await")?t.resolve(c.__await).then((function(n){e("next",n,u,a)}),(function(n){e("throw",n,u,a)})):t.resolve(c).then((function(n){s.value=n,u(s)}),(function(n){return e("throw",n,u,a)}))}a(i.arg)}var o;r(this,"_invoke",{value:function(n,l){function r(){return new t((function(t,r){e(n,l,t,r)}))}return o=o?o.then(r,r):r()}})}function k(t,e,l){var r=g;return function(o,u){if(r===b)throw Error("Generator is already running");if(r===f){if("throw"===o)throw u;return{value:n,done:!0}}for(l.method=o,l.arg=u;;){var a=l.delegate;if(a){var i=O(a,l);if(i){if(i===d)continue;return i}}if("next"===l.method)l.sent=l._sent=l.arg;else if("throw"===l.method){if(r===g)throw r=f,l.arg;l.dispatchException(l.arg)}else"return"===l.method&&l.abrupt("return",l.arg);r=b;var s=h(t,e,l);if("normal"===s.type){if(r=l.done?f:"suspendedYield",s.arg===d)continue;return{value:s.arg,done:l.done}}"throw"===s.type&&(r=f,l.method="throw",l.arg=s.arg)}}}function O(t,e){var l=e.method,r=t.iterator[l];if(r===n)return e.delegate=null,"throw"===l&&t.iterator.return&&(e.method="return",e.arg=n,O(t,e),"throw"===e.method)||"return"!==l&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+l+"' method")),d;var o=h(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var u=o.arg;return u?u.done?(e[t.resultName]=u.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,d):u:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function D(n){var t={tryLoc:n[0]};1 in n&&(t.catchLoc=n[1]),2 in n&&(t.finallyLoc=n[2],t.afterLoc=n[3]),this.tryEntries.push(t)}function M(n){var t=n.completion||{};t.type="normal",delete t.arg,n.completion=t}function q(n){this.tryEntries=[{tryLoc:"root"}],n.forEach(D,this),this.reset(!0)}function L(t){if(t||""===t){var e=t[u];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(l.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return o.next=o}}throw new TypeError(typeof t+" is not iterable")}return v.prototype=y,r(_,"constructor",{value:y,configurable:!0}),r(y,"constructor",{value:v,configurable:!0}),v.displayName=s(y,i,"GeneratorFunction"),t.isGeneratorFunction=function(n){var t="function"==typeof n&&n.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(n){return Object.setPrototypeOf?Object.setPrototypeOf(n,y):(n.__proto__=y,s(n,i,"GeneratorFunction")),n.prototype=Object.create(_),n},t.awrap=function(n){return{__await:n}},x(P.prototype),s(P.prototype,a,(function(){return this})),t.AsyncIterator=P,t.async=function(n,e,l,r,o){void 0===o&&(o=Promise);var u=new P(c(n,e,l,r),o);return t.isGeneratorFunction(e)?u:u.next().then((function(n){return n.done?n.value:u.next()}))},x(_),s(_,i,"Generator"),s(_,u,(function(){return this})),s(_,"toString",(function(){return"[object Generator]"})),t.keys=function(n){var t=Object(n),e=[];for(var l in t)e.push(l);return e.reverse(),function n(){for(;e.length;){var l=e.pop();if(l in t)return n.value=l,n.done=!1,n}return n.done=!0,n}},t.values=L,q.prototype={constructor:q,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(M),!t)for(var e in this)"t"===e.charAt(0)&&l.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var n=this.tryEntries[0].completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(l,r){return a.type="throw",a.arg=t,e.next=l,r&&(e.method="next",e.arg=n),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var u=this.tryEntries[o],a=u.completion;if("root"===u.tryLoc)return r("end");if(u.tryLoc<=this.prev){var i=l.call(u,"catchLoc"),s=l.call(u,"finallyLoc");if(i&&s){if(this.prev<u.catchLoc)return r(u.catchLoc,!0);if(this.prev<u.finallyLoc)return r(u.finallyLoc)}else if(i){if(this.prev<u.catchLoc)return r(u.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<u.finallyLoc)return r(u.finallyLoc)}}}},abrupt:function(n,t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc<=this.prev&&l.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===n||"continue"===n)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var u=o?o.completion:{};return u.type=n,u.arg=t,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(u)},complete:function(n,t){if("throw"===n.type)throw n.arg;return"break"===n.type||"continue"===n.type?this.next=n.arg:"return"===n.type?(this.rval=this.arg=n.arg,this.method="return",this.next="end"):"normal"===n.type&&t&&(this.next=t),d},finish:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var e=this.tryEntries[t];if(e.finallyLoc===n)return this.complete(e.completion,e.afterLoc),M(e),d}},catch:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var e=this.tryEntries[t];if(e.tryLoc===n){var l=e.completion;if("throw"===l.type){var r=l.arg;M(e)}return r}}throw Error("illegal catch attempt")},delegateYield:function(t,e,l){return this.delegate={iterator:L(t),resultName:e,nextLoc:l},"next"===this.method&&(this.arg=n),d}},t}function _defineProperties(n,t){for(var e=0;e<t.length;e++){var l=t[e];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(n,_toPropertyKey(l.key),l)}}function _createClass(n,t,e){return t&&_defineProperties(n.prototype,t),e&&_defineProperties(n,e),Object.defineProperty(n,"prototype",{writable:!1}),n}function _toPropertyKey(n){var t=_toPrimitive(n,"string");return"symbol"==typeof t?t:t+""}function _toPrimitive(n,t){if("object"!=typeof n||!n)return n;var e=n[Symbol.toPrimitive];if(void 0!==e){var l=e.call(n,t||"default");if("object"!=typeof l)return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(n)}function _classCallCheck(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{rFLM:function(n,t,e){"use strict";e.r(t);var l=e("8Y7J"),r=_createClass((function n(){_classCallCheck(this,n)})),o=e("pMnS"),u=e("MKJQ"),a=e("sZkV"),i=e("s7LF"),s=e("mrSG"),c=e("NFKh"),h=e("H+bZ"),g=e("qfBg"),b=e("6mc2"),f=function(){return _createClass((function n(t,e,l,r){_classCallCheck(this,n),this.navCtrl=t,this.api=e,this.user=l,this.tools=r,this.senhaAtual="",this.novaSenha="",this.confirmarSenha="",this.usuario={}}),[{key:"ngOnInit",value:function(){}},{key:"save",value:function(){return s.__awaiter(this,void 0,void 0,_regeneratorRuntime().mark((function n(){var t,e,l,r,o=this;return _regeneratorRuntime().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(this.usuario=this.user.getUsuarioClube(),t=c.SHA256(this.senhaAtual).toString(c.enc.Hex),e=c.SHA256(this.novaSenha).toString(c.enc.Hex),l="",this.novaSenha.length<6?l="A senha deve conter no m\xednimo 6 caracteres.":this.usuario.dados.hash&&t!=this.usuario.dados.hash?l="A senha atual incorreta.":this.usuario.dados.hash||this.senhaAtual==this.usuario.dados.senha?this.novaSenha!=this.confirmarSenha&&(l="As senhas n\xe3o conferem."):l="A senha atual incorreta.",""==l){n.next=4;break}return n.abrupt("return",void this.tools.showAlert("Alerta",l));case 4:return this.usuario.dados.senha=this.novaSenha,this.usuario.dados.hash=e,n.next=7,this.tools.showLoading("Carregando...");case 7:(r=n.sent).present(),this.tools.eventGHFly("salvar_alterar_senha"),this.api.save("cadBrainClientes",this.usuario,(function(n){console.log(n),r.dismiss(),1==n.nMatched&&(o.tools.showAlert("Alerta","Senha alterada com sucesso!"),o.navCtrl.navigateForward("/clube"))}));case 9:case"end":return n.stop()}}),n,this)})))}}])}(),d=l.pb({encapsulation:0,styles:[[".register[_ngcontent-%COMP%]{background:#ecf5fc;height:100vh;padding:16px}.register[_ngcontent-%COMP%]   .register-header[_ngcontent-%COMP%]{text-align:center;margin-bottom:16px}.register[_ngcontent-%COMP%]   .register-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:700;color:#144ab2}.register[_ngcontent-%COMP%]   .register-header[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{color:#009efa}.register[_ngcontent-%COMP%]   .toggle-content[_ngcontent-%COMP%]{padding-left:16px;margin:10px 0;display:flex;justify-content:flex-start;align-items:center}.register[_ngcontent-%COMP%]   .toggle-content[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{margin-left:10px}.item[_ngcontent-%COMP%]{margin-bottom:20px}.item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{color:#144ab2;padding-left:20px;font-weight:600;margin-bottom:3px}ion-datetime[_ngcontent-%COMP%], ion-input[_ngcontent-%COMP%], ion-select[_ngcontent-%COMP%]{padding:0 20px!important;color:#009efa;background:#fff;font-weight:600;width:100%;border:none;border-radius:20px;box-sizing:border-box;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);height:38px;display:flex;align-items:center}"]],data:{}});function p(n){return l.Kb(0,[(n()(),l.rb(0,0,null,null,11,"ion-header",[],null,null,null,u.lb,u.p)),l.qb(1,49152,null,0,a.D,[l.h,l.l,l.y],null,null),(n()(),l.rb(2,0,null,0,9,"ion-toolbar",[["color","secondary"]],null,null,null,u.Rb,u.V)),l.qb(3,49152,null,0,a.Bb,[l.h,l.l,l.y],{color:[0,"color"]},null),(n()(),l.rb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,u.bb,u.f)),l.qb(5,49152,null,0,a.n,[l.h,l.l,l.y],null,null),(n()(),l.rb(6,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],(function(n,t,e){var r=!0;return"click"===t&&(r=!1!==l.Db(n,8).onClick(e)&&r),r}),u.Y,u.c)),l.qb(7,49152,null,0,a.i,[l.h,l.l,l.y],null,null),l.qb(8,16384,null,0,a.j,[[2,a.hb],a.Ib,a.e],null,null),(n()(),l.rb(9,0,null,0,2,"ion-title",[],null,null,null,u.Pb,u.T)),l.qb(10,49152,null,0,a.zb,[l.h,l.l,l.y],null,null),(n()(),l.Jb(-1,0,["Dados de Acesso"])),(n()(),l.rb(12,0,null,null,44,"ion-content",[["class","register"]],null,null,null,u.ib,u.m)),l.qb(13,49152,null,0,a.w,[l.h,l.l,l.y],null,null),(n()(),l.rb(14,0,null,0,42,"div",[["class","app-register ion-padding"]],null,null,null,null,null)),(n()(),l.rb(15,0,null,null,4,"div",[["class","register-header text-primary"]],null,null,null,null,null)),(n()(),l.rb(16,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),l.Jb(-1,null,["Alterar Senha"])),(n()(),l.rb(18,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),l.Jb(-1,null,["Preencha os campos abaixo."])),(n()(),l.rb(20,0,null,null,36,"div",[["class","register-content"]],null,null,null,null,null)),(n()(),l.rb(21,0,null,null,10,"div",[["class","item"]],null,null,null,null,null)),(n()(),l.rb(22,0,null,null,2,"ion-label",[],null,null,null,u.tb,u.x)),l.qb(23,49152,null,0,a.P,[l.h,l.l,l.y],null,null),(n()(),l.Jb(-1,0,["Senha Atual *"])),(n()(),l.rb(25,0,null,null,6,"ion-input",[["autofocus",""],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,t,e){var r=!0,o=n.component;return"ionBlur"===t&&(r=!1!==l.Db(n,26)._handleBlurEvent(e.target)&&r),"ionChange"===t&&(r=!1!==l.Db(n,26)._handleInputEvent(e.target)&&r),"ngModelChange"===t&&(r=!1!==(o.senhaAtual=e)&&r),r}),u.qb,u.u)),l.qb(26,4341760,null,0,a.Pb,[l.q,l.l],null,null),l.Gb(1024,null,i.f,(function(n){return[n]}),[a.Pb]),l.qb(28,671744,null,0,i.i,[[8,null],[8,null],[8,null],[6,i.f]],{model:[0,"model"]},{update:"ngModelChange"}),l.Gb(2048,null,i.g,null,[i.i]),l.qb(30,16384,null,0,i.h,[[4,i.g]],null,null),l.qb(31,49152,null,0,a.I,[l.h,l.l,l.y],{autofocus:[0,"autofocus"],type:[1,"type"]},null),(n()(),l.rb(32,0,null,null,10,"div",[["class","item"]],null,null,null,null,null)),(n()(),l.rb(33,0,null,null,2,"ion-label",[],null,null,null,u.tb,u.x)),l.qb(34,49152,null,0,a.P,[l.h,l.l,l.y],null,null),(n()(),l.Jb(-1,0,["Nova Senha *"])),(n()(),l.rb(36,0,null,null,6,"ion-input",[["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,t,e){var r=!0,o=n.component;return"ionBlur"===t&&(r=!1!==l.Db(n,37)._handleBlurEvent(e.target)&&r),"ionChange"===t&&(r=!1!==l.Db(n,37)._handleInputEvent(e.target)&&r),"ngModelChange"===t&&(r=!1!==(o.novaSenha=e)&&r),r}),u.qb,u.u)),l.qb(37,4341760,null,0,a.Pb,[l.q,l.l],null,null),l.Gb(1024,null,i.f,(function(n){return[n]}),[a.Pb]),l.qb(39,671744,null,0,i.i,[[8,null],[8,null],[8,null],[6,i.f]],{model:[0,"model"]},{update:"ngModelChange"}),l.Gb(2048,null,i.g,null,[i.i]),l.qb(41,16384,null,0,i.h,[[4,i.g]],null,null),l.qb(42,49152,null,0,a.I,[l.h,l.l,l.y],{type:[0,"type"]},null),(n()(),l.rb(43,0,null,null,10,"div",[["class","item"]],null,null,null,null,null)),(n()(),l.rb(44,0,null,null,2,"ion-label",[],null,null,null,u.tb,u.x)),l.qb(45,49152,null,0,a.P,[l.h,l.l,l.y],null,null),(n()(),l.Jb(-1,0,["Confirmar Nova Senha *"])),(n()(),l.rb(47,0,null,null,6,"ion-input",[["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,t,e){var r=!0,o=n.component;return"ionBlur"===t&&(r=!1!==l.Db(n,48)._handleBlurEvent(e.target)&&r),"ionChange"===t&&(r=!1!==l.Db(n,48)._handleInputEvent(e.target)&&r),"ngModelChange"===t&&(r=!1!==(o.confirmarSenha=e)&&r),r}),u.qb,u.u)),l.qb(48,4341760,null,0,a.Pb,[l.q,l.l],null,null),l.Gb(1024,null,i.f,(function(n){return[n]}),[a.Pb]),l.qb(50,671744,null,0,i.i,[[8,null],[8,null],[8,null],[6,i.f]],{model:[0,"model"]},{update:"ngModelChange"}),l.Gb(2048,null,i.g,null,[i.i]),l.qb(52,16384,null,0,i.h,[[4,i.g]],null,null),l.qb(53,49152,null,0,a.I,[l.h,l.l,l.y],{type:[0,"type"]},null),(n()(),l.rb(54,0,null,null,2,"ion-button",[["class","ion-margin-top"],["expand","block"]],null,[[null,"click"]],(function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.save()&&l),l}),u.ab,u.e)),l.qb(55,49152,null,0,a.m,[l.h,l.l,l.y],{expand:[0,"expand"]},null),(n()(),l.Jb(-1,0,["Alterar Senha"]))],(function(n,t){var e=t.component;n(t,3,0,"secondary"),n(t,28,0,e.senhaAtual),n(t,31,0,"","password"),n(t,39,0,e.novaSenha),n(t,42,0,"password"),n(t,50,0,e.confirmarSenha),n(t,53,0,"password"),n(t,55,0,"block")}),(function(n,t){n(t,25,0,l.Db(t,30).ngClassUntouched,l.Db(t,30).ngClassTouched,l.Db(t,30).ngClassPristine,l.Db(t,30).ngClassDirty,l.Db(t,30).ngClassValid,l.Db(t,30).ngClassInvalid,l.Db(t,30).ngClassPending),n(t,36,0,l.Db(t,41).ngClassUntouched,l.Db(t,41).ngClassTouched,l.Db(t,41).ngClassPristine,l.Db(t,41).ngClassDirty,l.Db(t,41).ngClassValid,l.Db(t,41).ngClassInvalid,l.Db(t,41).ngClassPending),n(t,47,0,l.Db(t,52).ngClassUntouched,l.Db(t,52).ngClassTouched,l.Db(t,52).ngClassPristine,l.Db(t,52).ngClassDirty,l.Db(t,52).ngClassValid,l.Db(t,52).ngClassInvalid,l.Db(t,52).ngClassPending)}))}var v=l.nb("app-clube-senha",f,(function(n){return l.Kb(0,[(n()(),l.rb(0,0,null,null,1,"app-clube-senha",[],null,null,null,p,d)),l.qb(1,114688,null,0,f,[a.Ib,h.a,g.a,b.a],null,null)],(function(n,t){n(t,1,0)}),null)}),{},{},[]),y=e("SVse"),m=e("iInd"),C=_createClass((function n(){_classCallCheck(this,n)}));e.d(t,"ClubeSenhaPageModuleNgFactory",(function(){return w}));var w=l.ob(r,[],(function(n){return l.Ab([l.Bb(512,l.k,l.Z,[[8,[o.a,v]],[3,l.k],l.w]),l.Bb(4608,y.l,y.k,[l.t,[2,y.y]]),l.Bb(4608,i.l,i.l,[]),l.Bb(4608,a.c,a.c,[l.y,l.g]),l.Bb(4608,a.Hb,a.Hb,[a.c,l.k,l.q]),l.Bb(4608,a.Lb,a.Lb,[a.c,l.k,l.q]),l.Bb(1073742336,y.b,y.b,[]),l.Bb(1073742336,i.k,i.k,[]),l.Bb(1073742336,i.e,i.e,[]),l.Bb(1073742336,a.Db,a.Db,[]),l.Bb(1073742336,m.p,m.p,[[2,m.u],[2,m.m]]),l.Bb(1073742336,C,C,[]),l.Bb(1073742336,r,r,[]),l.Bb(1024,m.k,(function(){return[[{path:"",component:f}]]}),[])])}))}}]);