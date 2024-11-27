function _createForOfIteratorHelper(n,t){var o="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!o){if(Array.isArray(n)||(o=_unsupportedIterableToArray(n))||t&&n&&"number"==typeof n.length){o&&(n=o);var e=0,l=function(){};return{s:l,n:function(){return e>=n.length?{done:!0}:{done:!1,value:n[e++]}},e:function(n){throw n},f:l}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){o=o.call(n)},n:function(){var n=o.next();return a=n.done,n},e:function(n){c=!0,i=n},f:function(){try{a||null==o.return||o.return()}finally{if(c)throw i}}}}function _unsupportedIterableToArray(n,t){if(n){if("string"==typeof n)return _arrayLikeToArray(n,t);var o={}.toString.call(n).slice(8,-1);return"Object"===o&&n.constructor&&(o=n.constructor.name),"Map"===o||"Set"===o?Array.from(n):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(n,t):void 0}}function _arrayLikeToArray(n,t){(null==t||t>n.length)&&(t=n.length);for(var o=0,e=Array(t);o<t;o++)e[o]=n[o];return e}function _defineProperties(n,t){for(var o=0;o<t.length;o++){var e=t[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,_toPropertyKey(e.key),e)}}function _createClass(n,t,o){return t&&_defineProperties(n.prototype,t),o&&_defineProperties(n,o),Object.defineProperty(n,"prototype",{writable:!1}),n}function _toPropertyKey(n){var t=_toPrimitive(n,"string");return"symbol"==typeof t?t:t+""}function _toPrimitive(n,t){if("object"!=typeof n||!n)return n;var o=n[Symbol.toPrimitive];if(void 0!==o){var e=o.call(n,t||"default");if("object"!=typeof e)return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(n)}function _classCallCheck(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{BOJy:function(n,t,o){"use strict";o.r(t);var e=o("8Y7J"),l=_createClass((function n(){_classCallCheck(this,n)})),i=o("pMnS"),a=o("MKJQ"),c=o("sZkV"),r=o("SVse"),u=o("H+bZ"),s=o("6mc2"),f=o("EnSQ"),d=o("qfBg"),b=function(){return _createClass((function n(t,o,e,l,i){_classCallCheck(this,n),this.navCtrl=t,this.api=o,this.tools=e,this.data=l,this.user=i,this.notificacoes=[],this.mapDiaSemana={0:"Domingo",1:"Segunda-feira",2:"Ter\xe7a-feira",3:"Quarta-feira",4:"Quinta-feira",5:"Sexta-feira",6:"S\xe1bado"}}),[{key:"ngOnInit",value:function(){}},{key:"ionViewDidEnter",value:function(){var n=this,t=this.user.getUsuarioClube();this.api.clube("listarnotificacoes",{clienteId:t._id+""},(function(t){n.data.setData("notificacoes",0);var o,e=(new Date).toLocaleDateString("pt-BR"),l=e.split("/").reverse(),i=new Date(l[0],1*l[1]-1,l[2],0,0,0).getTime(),a=_createForOfIteratorHelper(t.data);try{for(a.s();!(o=a.n()).done;){var c=o.value;c.data_disparo=new Date(c.timeDisparo).toLocaleDateString("pt-BR"),c.dia_semana_disparo=n.mapDiaSemana[new Date(c.timeDisparo).getDay()],e==c.dia_semana_disparo&&(c.minutos_disparo=Math.floor((c.timeDisparo-new Date(i).getTime())/1e3/60))}}catch(r){a.e(r)}finally{a.f()}n.notificacoes=t.data,console.log("\ud83d\ude80 ~ this.notificacoes:",n.notificacoes)}))}},{key:"linkTo",value:function(n){n.url?("Interno"==n.tipoUrl&&this.navCtrl.navigateForward(n.url),"Externo"==n.tipoUrl&&this.tools.openBrowser(n.url)):console.log("sem url")}},{key:"removerAll",value:function(){console.log("\ud83d\ude80 ~ removeAll:");var n,t=_createForOfIteratorHelper(this.notificacoes);try{for(t.s();!(n=t.n()).done;){var o=n.value;this.remover(o)}}catch(e){t.e(e)}finally{t.f()}}},{key:"remover",value:function(n){var t=this;this.api.clube("removernotificacoes",{notificacao:n},(function(o){console.log("[removernotificacoes]: ",o);var e=t.notificacoes.findIndex((function(t){return t._id+""==n._id+""}));e>=0&&t.notificacoes.splice(e,1)}))}}])}(),g=e.pb({encapsulation:0,styles:[["ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{background-color:var(--ion-color-secondary)}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{width:47px}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center;color:#fff;font-size:16px;font-style:normal;font-weight:700;line-height:normal}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]   .space[_ngcontent-%COMP%]{width:47px}ion-header[_ngcontent-%COMP%]::after{display:none}ion-content[_ngcontent-%COMP%]   .content-limpar[_ngcontent-%COMP%]{position:absolute}ion-content[_ngcontent-%COMP%]   .content-limpar[_ngcontent-%COMP%]   .limpar-notificacoes[_ngcontent-%COMP%]{position:fixed;height:44px;width:44px;border-radius:50%;background:#fff;top:81%;left:45%;display:flex;align-items:center;justify-content:center;box-shadow:0 0 14px 0 rgba(0,0,0,.25);opacity:.7}ion-content[_ngcontent-%COMP%]   .content-limpar[_ngcontent-%COMP%]   .limpar-notificacoes[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:var(--ion-color-secondary)}ion-content[_ngcontent-%COMP%]   .content-notificacoes[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px;padding:16px}ion-content[_ngcontent-%COMP%]   .content-notificacoes[_ngcontent-%COMP%]   .content-notificacao[_ngcontent-%COMP%]{border-radius:10px;background:#fff;display:flow;min-height:80px;padding:12px;border:1px solid #dbdada}ion-content[_ngcontent-%COMP%]   .content-notificacoes[_ngcontent-%COMP%]   .content-notificacao[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{display:flex}ion-content[_ngcontent-%COMP%]   .content-notificacoes[_ngcontent-%COMP%]   .content-notificacao[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .titulo[_ngcontent-%COMP%]{display:flex;color:#1e1e1e;font-size:12px;font-style:normal;font-weight:700;line-height:normal;width:70%}ion-content[_ngcontent-%COMP%]   .content-notificacoes[_ngcontent-%COMP%]   .content-notificacao[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;align-items:flex-start;color:#9e9e9e;font-family:Poppins;font-size:8px;font-style:normal;font-weight:400;line-height:normal;width:30%}ion-content[_ngcontent-%COMP%]   .content-notificacoes[_ngcontent-%COMP%]   .content-notificacao[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .data-content[_ngcontent-%COMP%]{display:flow}ion-content[_ngcontent-%COMP%]   .content-notificacoes[_ngcontent-%COMP%]   .content-notificacao[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .data-content[_ngcontent-%COMP%]   .data-text[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]   .content-notificacoes[_ngcontent-%COMP%]   .content-notificacao[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .data-content[_ngcontent-%COMP%]   .dia-semana[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}ion-content[_ngcontent-%COMP%]   .content-notificacoes[_ngcontent-%COMP%]   .content-notificacao[_ngcontent-%COMP%]   .mensagem[_ngcontent-%COMP%]{display:flex;color:#484848;font-size:10px;font-style:normal;font-weight:400;line-height:normal}.medium[_ngcontent-%COMP%]{background:#92949c}"]],data:{}});function p(n){return e.Kb(0,[(n()(),e.rb(0,0,null,null,11,"div",[["class","content-notificacao"]],null,null,null,null,null)),(n()(),e.rb(1,0,null,null,8,"div",[["class","content"]],null,null,null,null,null)),(n()(),e.rb(2,0,null,null,1,"div",[["class","titulo"]],null,null,null,null,null)),(n()(),e.Jb(3,null,["",""])),(n()(),e.rb(4,0,null,null,5,"div",[["class","data"]],null,null,null,null,null)),(n()(),e.rb(5,0,null,null,4,"div",[["class","data-content"]],null,null,null,null,null)),(n()(),e.rb(6,0,null,null,1,"div",[["class","dia-semana"]],null,null,null,null,null)),(n()(),e.Jb(7,null,["",""])),(n()(),e.rb(8,0,null,null,1,"div",[["class","data-text"]],null,null,null,null,null)),(n()(),e.Jb(9,null,["",""])),(n()(),e.rb(10,0,null,null,1,"div",[["class","mensagem"]],null,null,null,null,null)),(n()(),e.Jb(11,null,["",""]))],null,(function(n,t){n(t,3,0,t.context.$implicit.titulo),n(t,7,0,t.context.$implicit.minutos_disparo?"H\xe1 "+t.context.$implicit.minutos_disparo+" minutos":t.context.$implicit.dia_semana_disparo),n(t,9,0,t.context.$implicit.data_disparo),n(t,11,0,t.context.$implicit.mensagem)}))}function _(n){return e.Kb(0,[(n()(),e.rb(0,0,null,null,12,"ion-header",[],null,null,null,a.lb,a.p)),e.qb(1,49152,null,0,c.D,[e.h,e.l,e.y],null,null),(n()(),e.rb(2,0,null,0,10,"ion-toolbar",[["color","secondary"]],null,null,null,a.Rb,a.V)),e.qb(3,49152,null,0,c.Bb,[e.h,e.l,e.y],{color:[0,"color"]},null),(n()(),e.rb(4,0,null,0,8,"ion-buttons",[],null,null,null,a.bb,a.f)),e.qb(5,49152,null,0,c.n,[e.h,e.l,e.y],null,null),(n()(),e.rb(6,0,null,0,3,"ion-button",[],null,null,null,a.ab,a.e)),e.qb(7,49152,null,0,c.m,[e.h,e.l,e.y],null,null),(n()(),e.rb(8,0,null,0,1,"ion-menu-button",[],null,null,null,a.wb,a.B)),e.qb(9,49152,null,0,c.T,[e.h,e.l,e.y],null,null),(n()(),e.rb(10,0,null,0,1,"div",[["class","title"]],null,null,null,null,null)),(n()(),e.Jb(-1,null,["Notifica\xe7\xf5es"])),(n()(),e.rb(12,0,null,0,0,"div",[["class","space"]],null,null,null,null,null)),(n()(),e.rb(13,0,null,null,4,"ion-content",[["class",""]],null,null,null,a.ib,a.m)),e.qb(14,49152,null,0,c.w,[e.h,e.l,e.y],null,null),(n()(),e.rb(15,0,null,0,2,"div",[["class","content-notificacoes"]],null,null,null,null,null)),(n()(),e.gb(16777216,null,null,1,null,p)),e.qb(17,278528,null,0,r.i,[e.O,e.K,e.r],{ngForOf:[0,"ngForOf"]},null)],(function(n,t){var o=t.component;n(t,3,0,"secondary"),n(t,17,0,o.notificacoes)}),null)}var m=e.nb("app-clube-notificacoes",b,(function(n){return e.Kb(0,[(n()(),e.rb(0,0,null,null,1,"app-clube-notificacoes",[],null,null,null,_,g)),e.qb(1,114688,null,0,b,[c.Ib,u.a,s.a,f.a,d.a],null,null)],(function(n,t){n(t,1,0)}),null)}),{},{},[]),C=o("s7LF"),y=o("iInd"),P=_createClass((function n(){_classCallCheck(this,n)}));o.d(t,"ClubeNotificacoesPageModuleNgFactory",(function(){return O}));var O=e.ob(l,[],(function(n){return e.Ab([e.Bb(512,e.k,e.Z,[[8,[i.a,m]],[3,e.k],e.w]),e.Bb(4608,r.l,r.k,[e.t,[2,r.y]]),e.Bb(4608,C.l,C.l,[]),e.Bb(4608,c.c,c.c,[e.y,e.g]),e.Bb(4608,c.Hb,c.Hb,[c.c,e.k,e.q]),e.Bb(4608,c.Lb,c.Lb,[c.c,e.k,e.q]),e.Bb(1073742336,r.b,r.b,[]),e.Bb(1073742336,C.k,C.k,[]),e.Bb(1073742336,C.e,C.e,[]),e.Bb(1073742336,c.Db,c.Db,[]),e.Bb(1073742336,y.p,y.p,[[2,y.u],[2,y.m]]),e.Bb(1073742336,P,P,[]),e.Bb(1073742336,l,l,[]),e.Bb(1024,y.k,(function(){return[[{path:"",component:b}]]}),[])])}))}}]);