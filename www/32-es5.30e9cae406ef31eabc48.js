function _defineProperties(n,l){for(var u=0;u<l.length;u++){var o=l[u];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,_toPropertyKey(o.key),o)}}function _createClass(n,l,u){return l&&_defineProperties(n.prototype,l),u&&_defineProperties(n,u),Object.defineProperty(n,"prototype",{writable:!1}),n}function _toPropertyKey(n){var l=_toPrimitive(n,"string");return"symbol"==typeof l?l:l+""}function _toPrimitive(n,l){if("object"!=typeof n||!n)return n;var u=n[Symbol.toPrimitive];if(void 0!==u){var o=u.call(n,l||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===l?String:Number)(n)}function _classCallCheck(n,l){if(!(n instanceof l))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{OChd:function(n,l,u){"use strict";u.r(l);var o=u("8Y7J"),t=_createClass((function n(){_classCallCheck(this,n)})),i=u("pMnS"),e=u("MKJQ"),a=u("sZkV"),r=u("SVse"),c=u("H+bZ"),b=u("qfBg"),p=u("6mc2"),s=function(){return _createClass((function n(l,u,o){_classCallCheck(this,n),this.api=l,this.user=u,this.tools=o,this.sliderConfigBannerFeed={spaceBetween:10,slidesPerView:1.1,speed:400,paginationClickable:!0,centeredSlides:!0,initialSlide:0},this.pagina={titulo:"",texto:"",imagem:"",linkTo:"",imgs:[],acaoPromocional:!1,showButtons:!1}}),[{key:"ngOnInit",value:function(){}},{key:"ionViewDidEnter",value:function(){var n=this,l=this.user.getUsuarioClube()._id+"",u=window.location.href.split("/").pop();this.api.clube("genericpage",{pageId:u,clienteId:l},(function(l){n.pagina=l.data,console.log(n.pagina)}))}},{key:"openLink",value:function(){if(this.pagina.linkTo&&""!=this.pagina.linkTo){var n=this.pagina.titulo.split(" ").join("_").toLowerCase();this.tools.openBrowser(this.pagina.linkTo+"?utm_source=app&utm_medium=barbosa&utm_campaign=".concat(n,"/feed_interno"))}}},{key:"acao",value:function(n){var l=this,u=this.user.getUsuarioClube(),o={pageId:this.pagina._id+"",clienteId:u._id+"",cpf:u.dados.cpf+"",participar:n};console.log("postObj: ",o),this.api.clube("acaopromocional",o,(function(n){console.log("acaopromocional: ",n),n.status&&(delete l.pagina.acaoPromocional,l.pagina.participante=n.data),n.excedido&&delete l.pagina.acaoPromocional,l.tools.showAlert("Alerta",n.msg)}))}}])}(),g=o.pb({encapsulation:0,styles:[["ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-weight:700}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]{margin:16px;border-radius:10px;background:#fff;box-shadow:0 0 14px 0 rgba(0,0,0,.25)}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#1e1e1e;text-align:center;font-size:16px;font-style:normal;font-weight:700;line-height:normal}"]],data:{}});function f(n){return o.Kb(0,[(n()(),o.rb(0,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),o.Jb(1,null,["",""]))],null,(function(n,l){n(l,1,0,l.component.pagina.texto)}))}function m(n){return o.Kb(0,[(n()(),o.rb(0,0,null,null,1,"a",[],null,[[null,"click"]],(function(n,l,u){var o=!0;return"click"===l&&(o=!1!==n.component.openLink()&&o),o}),null,null)),(n()(),o.Jb(1,null,["",""]))],null,(function(n,l){n(l,1,0,l.component.pagina.linkTo)}))}function d(n){return o.Kb(0,[(n()(),o.rb(0,0,null,null,0,"img",[["style","vertical-align:bottom"]],[[8,"src",4],[8,"alt",0]],[[null,"click"]],(function(n,l,u){var o=!0;return"click"===l&&(o=!1!==n.component.openLink()&&o),o}),null,null))],null,(function(n,l){var u=l.component;n(l,0,0,u.pagina.imagem,u.pagina.titulo)}))}function h(n){return o.Kb(0,[(n()(),o.rb(0,0,null,null,3,"ion-slide",[],null,null,null,e.Ib,e.M)),o.qb(1,49152,null,0,a.pb,[o.h,o.l,o.y],null,null),(n()(),o.rb(2,0,null,0,1,"div",[["class","my-card"]],null,null,null,null,null)),(n()(),o.rb(3,0,null,null,0,"img",[["class","feed-imagem"]],[[8,"src",4]],null,null,null,null))],null,(function(n,l){n(l,3,0,l.context.$implicit)}))}function y(n){return o.Kb(0,[(n()(),o.rb(0,0,null,null,3,"ion-slides",[],null,null,null,e.Jb,e.N)),o.qb(1,49152,null,0,a.qb,[o.h,o.l,o.y],{options:[0,"options"]},null),(n()(),o.gb(16777216,null,0,1,null,h)),o.qb(3,278528,null,0,r.i,[o.O,o.K,o.r],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){var u=l.component;n(l,1,0,u.sliderConfigBannerFeed),n(l,3,0,u.pagina.imgs)}),null)}function k(n){return o.Kb(0,[(n()(),o.rb(0,0,null,null,6,"div",[["class","button-content"]],null,null,null,null,null)),(n()(),o.rb(1,0,null,null,2,"ion-button",[["color","primary"]],null,[[null,"click"]],(function(n,l,u){var o=!0,t=n.component;return"click"===l&&(o=!1!==t.acao(t.pagina.acao.botao1)&&o),o}),e.ab,e.e)),o.qb(2,49152,null,0,a.m,[o.h,o.l,o.y],{color:[0,"color"]},null),(n()(),o.Jb(3,0,["",""])),(n()(),o.rb(4,0,null,null,2,"ion-button",[["color","primary"]],null,[[null,"click"]],(function(n,l,u){var o=!0,t=n.component;return"click"===l&&(o=!1!==t.acao(t.pagina.acao.botao2)&&o),o}),e.ab,e.e)),o.qb(5,49152,null,0,a.m,[o.h,o.l,o.y],{color:[0,"color"]},null),(n()(),o.Jb(6,0,["",""]))],(function(n,l){n(l,2,0,"primary"),n(l,5,0,"primary")}),(function(n,l){var u=l.component;n(l,3,0,u.pagina.acao.botao1),n(l,6,0,u.pagina.acao.botao2)}))}function v(n){return o.Kb(0,[(n()(),o.rb(0,0,null,null,5,"ion-card-content",[],null,null,null,e.cb,e.h)),o.qb(1,49152,null,0,a.p,[o.h,o.l,o.y],null,null),(n()(),o.rb(2,0,null,0,3,"h1",[["class","ion-margin-bottom ion-text-center"]],null,null,null,null,null)),(n()(),o.rb(3,0,null,null,2,"ion-text",[["color","secondary"]],null,null,null,e.Ob,e.S)),o.qb(4,49152,null,0,a.wb,[o.h,o.l,o.y],{color:[0,"color"]},null),(n()(),o.Jb(5,0,["N\xba ",""]))],(function(n,l){n(l,4,0,"secondary")}),(function(n,l){n(l,5,0,l.component.pagina.participante.code)}))}function _(n){return o.Kb(0,[(n()(),o.rb(0,0,null,null,4,"ion-card",[],null,null,null,e.fb,e.g)),o.qb(1,49152,null,0,a.o,[o.h,o.l,o.y],null,null),(n()(),o.gb(16777216,null,0,1,null,v)),o.qb(3,16384,null,0,r.j,[o.O,o.K],{ngIf:[0,"ngIf"]},null),(n()(),o.rb(4,0,null,0,0,"img",[["style","vertical-align:bottom"]],[[8,"src",4]],[[null,"click"]],(function(n,l,u){var o=!0;return"click"===l&&(o=!1!==n.component.openLink()&&o),o}),null,null))],(function(n,l){n(l,3,0,l.component.pagina.participante.code)}),(function(n,l){n(l,4,0,l.component.pagina.participante.imagem)}))}function C(n){return o.Kb(0,[(n()(),o.rb(0,0,null,null,13,"ion-header",[],null,null,null,e.lb,e.p)),o.qb(1,49152,null,0,a.D,[o.h,o.l,o.y],null,null),(n()(),o.rb(2,0,null,0,11,"ion-toolbar",[["color","secondary"]],null,null,null,e.Rb,e.V)),o.qb(3,49152,null,0,a.Bb,[o.h,o.l,o.y],{color:[0,"color"]},null),(n()(),o.rb(4,0,null,0,9,"ion-buttons",[],null,null,null,e.bb,e.f)),o.qb(5,49152,null,0,a.n,[o.h,o.l,o.y],null,null),(n()(),o.rb(6,0,null,0,4,"ion-button",[["slot","start"]],null,null,null,e.ab,e.e)),o.qb(7,49152,null,0,a.m,[o.h,o.l,o.y],null,null),(n()(),o.rb(8,0,null,0,2,"ion-back-button",[["defaultHref","clube-home"],["text",""]],null,[[null,"click"]],(function(n,l,u){var t=!0;return"click"===l&&(t=!1!==o.Db(n,10).onClick(u)&&t),t}),e.Y,e.c)),o.qb(9,49152,null,0,a.i,[o.h,o.l,o.y],{defaultHref:[0,"defaultHref"],text:[1,"text"]},null),o.qb(10,16384,null,0,a.j,[[2,a.hb],a.Ib,a.e],{defaultHref:[0,"defaultHref"]},null),(n()(),o.rb(11,0,null,0,1,"div",[["class","title"]],null,null,null,null,null)),(n()(),o.Jb(-1,null,["Barbosa Supermercados"])),(n()(),o.rb(13,0,null,0,0,"div",[["class","space"],["slot","end"]],null,null,null,null,null)),(n()(),o.rb(14,0,null,null,21,"ion-content",[["class","ion-pad"]],null,null,null,e.ib,e.m)),o.qb(15,49152,null,0,a.w,[o.h,o.l,o.y],null,null),(n()(),o.rb(16,0,null,0,13,"ion-card",[],null,null,null,e.fb,e.g)),o.qb(17,49152,null,0,a.o,[o.h,o.l,o.y],null,null),(n()(),o.rb(18,0,null,0,9,"ion-card-content",[],null,null,null,e.cb,e.h)),o.qb(19,49152,null,0,a.p,[o.h,o.l,o.y],null,null),(n()(),o.rb(20,0,null,0,3,"h1",[],null,null,null,null,null)),(n()(),o.rb(21,0,null,null,2,"ion-text",[],null,null,null,e.Ob,e.S)),o.qb(22,49152,null,0,a.wb,[o.h,o.l,o.y],null,null),(n()(),o.Jb(23,0,["",""])),(n()(),o.gb(16777216,null,0,1,null,f)),o.qb(25,16384,null,0,r.j,[o.O,o.K],{ngIf:[0,"ngIf"]},null),(n()(),o.gb(16777216,null,0,1,null,m)),o.qb(27,16384,null,0,r.j,[o.O,o.K],{ngIf:[0,"ngIf"]},null),(n()(),o.gb(16777216,null,0,1,null,d)),o.qb(29,16384,null,0,r.j,[o.O,o.K],{ngIf:[0,"ngIf"]},null),(n()(),o.gb(16777216,null,0,1,null,y)),o.qb(31,16384,null,0,r.j,[o.O,o.K],{ngIf:[0,"ngIf"]},null),(n()(),o.gb(16777216,null,0,1,null,k)),o.qb(33,16384,null,0,r.j,[o.O,o.K],{ngIf:[0,"ngIf"]},null),(n()(),o.gb(16777216,null,0,1,null,_)),o.qb(35,16384,null,0,r.j,[o.O,o.K],{ngIf:[0,"ngIf"]},null)],(function(n,l){var u=l.component;n(l,3,0,"secondary"),n(l,9,0,"clube-home",""),n(l,10,0,"clube-home"),n(l,25,0,""!=u.pagina.texto),n(l,27,0,u.pagina.linkTo&&""!==u.pagina.linkTo),n(l,29,0,u.pagina.imgs.length<=1||u.pagina.acaoPromocional||u.pagina.participante),n(l,31,0,u.pagina.imgs.length>1&&!u.pagina.acaoPromocional&&!u.pagina.participante),n(l,33,0,u.pagina.acaoPromocional),n(l,35,0,u.pagina.participante)}),(function(n,l){n(l,23,0,l.component.pagina.titulo)}))}var P=o.nb("app-clube-generic",s,(function(n){return o.Kb(0,[(n()(),o.rb(0,0,null,null,1,"app-clube-generic",[],null,null,null,C,g)),o.qb(1,114688,null,0,s,[c.a,b.a,p.a],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]),O=u("s7LF"),q=u("iInd"),w=_createClass((function n(){_classCallCheck(this,n)}));u.d(l,"ClubeGenericPageModuleNgFactory",(function(){return B}));var B=o.ob(t,[],(function(n){return o.Ab([o.Bb(512,o.k,o.Z,[[8,[i.a,P]],[3,o.k],o.w]),o.Bb(4608,r.l,r.k,[o.t,[2,r.y]]),o.Bb(4608,O.l,O.l,[]),o.Bb(4608,a.c,a.c,[o.y,o.g]),o.Bb(4608,a.Hb,a.Hb,[a.c,o.k,o.q]),o.Bb(4608,a.Lb,a.Lb,[a.c,o.k,o.q]),o.Bb(1073742336,r.b,r.b,[]),o.Bb(1073742336,O.k,O.k,[]),o.Bb(1073742336,O.e,O.e,[]),o.Bb(1073742336,a.Db,a.Db,[]),o.Bb(1073742336,q.p,q.p,[[2,q.u],[2,q.m]]),o.Bb(1073742336,w,w,[]),o.Bb(1073742336,t,t,[]),o.Bb(1024,q.k,(function(){return[[{path:"",component:s}]]}),[])])}))}}]);