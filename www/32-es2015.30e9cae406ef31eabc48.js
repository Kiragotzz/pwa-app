(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{OChd:function(l,n,u){"use strict";u.r(n);var o=u("8Y7J");class t{}var i=u("pMnS"),a=u("MKJQ"),e=u("sZkV"),c=u("SVse"),r=u("H+bZ"),b=u("qfBg"),p=u("6mc2");class g{constructor(l,n,u){this.api=l,this.user=n,this.tools=u,this.sliderConfigBannerFeed={spaceBetween:10,slidesPerView:1.1,speed:400,paginationClickable:!0,centeredSlides:!0,initialSlide:0},this.pagina={titulo:"",texto:"",imagem:"",linkTo:"",imgs:[],acaoPromocional:!1,showButtons:!1}}ngOnInit(){}ionViewDidEnter(){var l=this.user.getUsuarioClube()._id+"",n=window.location.href.split("/").pop();this.api.clube("genericpage",{pageId:n,clienteId:l},l=>{this.pagina=l.data,console.log(this.pagina)})}openLink(){if(this.pagina.linkTo&&""!=this.pagina.linkTo){var l=this.pagina.titulo.split(" ").join("_").toLowerCase();this.tools.openBrowser(this.pagina.linkTo+`?utm_source=app&utm_medium=barbosa&utm_campaign=${l}/feed_interno`)}}acao(l){var n=this.user.getUsuarioClube(),u={pageId:this.pagina._id+"",clienteId:n._id+"",cpf:n.dados.cpf+"",participar:l};console.log("postObj: ",u),this.api.clube("acaopromocional",u,l=>{console.log("acaopromocional: ",l),l.status&&(delete this.pagina.acaoPromocional,this.pagina.participante=l.data),l.excedido&&delete this.pagina.acaoPromocional,this.tools.showAlert("Alerta",l.msg)})}}var s=o.pb({encapsulation:0,styles:[["ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-weight:700}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]{margin:16px;border-radius:10px;background:#fff;box-shadow:0 0 14px 0 rgba(0,0,0,.25)}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#1e1e1e;text-align:center;font-size:16px;font-style:normal;font-weight:700;line-height:normal}"]],data:{}});function f(l){return o.Kb(0,[(l()(),o.rb(0,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),o.Jb(1,null,["",""]))],null,(function(l,n){l(n,1,0,n.component.pagina.texto)}))}function d(l){return o.Kb(0,[(l()(),o.rb(0,0,null,null,1,"a",[],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.openLink()&&o),o}),null,null)),(l()(),o.Jb(1,null,["",""]))],null,(function(l,n){l(n,1,0,n.component.pagina.linkTo)}))}function m(l){return o.Kb(0,[(l()(),o.rb(0,0,null,null,0,"img",[["style","vertical-align:bottom"]],[[8,"src",4],[8,"alt",0]],[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.openLink()&&o),o}),null,null))],null,(function(l,n){var u=n.component;l(n,0,0,u.pagina.imagem,u.pagina.titulo)}))}function h(l){return o.Kb(0,[(l()(),o.rb(0,0,null,null,3,"ion-slide",[],null,null,null,a.Ib,a.M)),o.qb(1,49152,null,0,e.pb,[o.h,o.l,o.y],null,null),(l()(),o.rb(2,0,null,0,1,"div",[["class","my-card"]],null,null,null,null,null)),(l()(),o.rb(3,0,null,null,0,"img",[["class","feed-imagem"]],[[8,"src",4]],null,null,null,null))],null,(function(l,n){l(n,3,0,n.context.$implicit)}))}function k(l){return o.Kb(0,[(l()(),o.rb(0,0,null,null,3,"ion-slides",[],null,null,null,a.Jb,a.N)),o.qb(1,49152,null,0,e.qb,[o.h,o.l,o.y],{options:[0,"options"]},null),(l()(),o.gb(16777216,null,0,1,null,h)),o.qb(3,278528,null,0,c.i,[o.O,o.K,o.r],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var u=n.component;l(n,1,0,u.sliderConfigBannerFeed),l(n,3,0,u.pagina.imgs)}),null)}function y(l){return o.Kb(0,[(l()(),o.rb(0,0,null,null,6,"div",[["class","button-content"]],null,null,null,null,null)),(l()(),o.rb(1,0,null,null,2,"ion-button",[["color","primary"]],null,[[null,"click"]],(function(l,n,u){var o=!0,t=l.component;return"click"===n&&(o=!1!==t.acao(t.pagina.acao.botao1)&&o),o}),a.ab,a.e)),o.qb(2,49152,null,0,e.m,[o.h,o.l,o.y],{color:[0,"color"]},null),(l()(),o.Jb(3,0,["",""])),(l()(),o.rb(4,0,null,null,2,"ion-button",[["color","primary"]],null,[[null,"click"]],(function(l,n,u){var o=!0,t=l.component;return"click"===n&&(o=!1!==t.acao(t.pagina.acao.botao2)&&o),o}),a.ab,a.e)),o.qb(5,49152,null,0,e.m,[o.h,o.l,o.y],{color:[0,"color"]},null),(l()(),o.Jb(6,0,["",""]))],(function(l,n){l(n,2,0,"primary"),l(n,5,0,"primary")}),(function(l,n){var u=n.component;l(n,3,0,u.pagina.acao.botao1),l(n,6,0,u.pagina.acao.botao2)}))}function q(l){return o.Kb(0,[(l()(),o.rb(0,0,null,null,5,"ion-card-content",[],null,null,null,a.cb,a.h)),o.qb(1,49152,null,0,e.p,[o.h,o.l,o.y],null,null),(l()(),o.rb(2,0,null,0,3,"h1",[["class","ion-margin-bottom ion-text-center"]],null,null,null,null,null)),(l()(),o.rb(3,0,null,null,2,"ion-text",[["color","secondary"]],null,null,null,a.Ob,a.S)),o.qb(4,49152,null,0,e.wb,[o.h,o.l,o.y],{color:[0,"color"]},null),(l()(),o.Jb(5,0,["N\xba ",""]))],(function(l,n){l(n,4,0,"secondary")}),(function(l,n){l(n,5,0,n.component.pagina.participante.code)}))}function O(l){return o.Kb(0,[(l()(),o.rb(0,0,null,null,4,"ion-card",[],null,null,null,a.fb,a.g)),o.qb(1,49152,null,0,e.o,[o.h,o.l,o.y],null,null),(l()(),o.gb(16777216,null,0,1,null,q)),o.qb(3,16384,null,0,c.j,[o.O,o.K],{ngIf:[0,"ngIf"]},null),(l()(),o.rb(4,0,null,0,0,"img",[["style","vertical-align:bottom"]],[[8,"src",4]],[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.openLink()&&o),o}),null,null))],(function(l,n){l(n,3,0,n.component.pagina.participante.code)}),(function(l,n){l(n,4,0,n.component.pagina.participante.imagem)}))}function v(l){return o.Kb(0,[(l()(),o.rb(0,0,null,null,13,"ion-header",[],null,null,null,a.lb,a.p)),o.qb(1,49152,null,0,e.D,[o.h,o.l,o.y],null,null),(l()(),o.rb(2,0,null,0,11,"ion-toolbar",[["color","secondary"]],null,null,null,a.Rb,a.V)),o.qb(3,49152,null,0,e.Bb,[o.h,o.l,o.y],{color:[0,"color"]},null),(l()(),o.rb(4,0,null,0,9,"ion-buttons",[],null,null,null,a.bb,a.f)),o.qb(5,49152,null,0,e.n,[o.h,o.l,o.y],null,null),(l()(),o.rb(6,0,null,0,4,"ion-button",[["slot","start"]],null,null,null,a.ab,a.e)),o.qb(7,49152,null,0,e.m,[o.h,o.l,o.y],null,null),(l()(),o.rb(8,0,null,0,2,"ion-back-button",[["defaultHref","clube-home"],["text",""]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==o.Db(l,10).onClick(u)&&t),t}),a.Y,a.c)),o.qb(9,49152,null,0,e.i,[o.h,o.l,o.y],{defaultHref:[0,"defaultHref"],text:[1,"text"]},null),o.qb(10,16384,null,0,e.j,[[2,e.hb],e.Ib,e.e],{defaultHref:[0,"defaultHref"]},null),(l()(),o.rb(11,0,null,0,1,"div",[["class","title"]],null,null,null,null,null)),(l()(),o.Jb(-1,null,["Barbosa Supermercados"])),(l()(),o.rb(13,0,null,0,0,"div",[["class","space"],["slot","end"]],null,null,null,null,null)),(l()(),o.rb(14,0,null,null,21,"ion-content",[["class","ion-pad"]],null,null,null,a.ib,a.m)),o.qb(15,49152,null,0,e.w,[o.h,o.l,o.y],null,null),(l()(),o.rb(16,0,null,0,13,"ion-card",[],null,null,null,a.fb,a.g)),o.qb(17,49152,null,0,e.o,[o.h,o.l,o.y],null,null),(l()(),o.rb(18,0,null,0,9,"ion-card-content",[],null,null,null,a.cb,a.h)),o.qb(19,49152,null,0,e.p,[o.h,o.l,o.y],null,null),(l()(),o.rb(20,0,null,0,3,"h1",[],null,null,null,null,null)),(l()(),o.rb(21,0,null,null,2,"ion-text",[],null,null,null,a.Ob,a.S)),o.qb(22,49152,null,0,e.wb,[o.h,o.l,o.y],null,null),(l()(),o.Jb(23,0,["",""])),(l()(),o.gb(16777216,null,0,1,null,f)),o.qb(25,16384,null,0,c.j,[o.O,o.K],{ngIf:[0,"ngIf"]},null),(l()(),o.gb(16777216,null,0,1,null,d)),o.qb(27,16384,null,0,c.j,[o.O,o.K],{ngIf:[0,"ngIf"]},null),(l()(),o.gb(16777216,null,0,1,null,m)),o.qb(29,16384,null,0,c.j,[o.O,o.K],{ngIf:[0,"ngIf"]},null),(l()(),o.gb(16777216,null,0,1,null,k)),o.qb(31,16384,null,0,c.j,[o.O,o.K],{ngIf:[0,"ngIf"]},null),(l()(),o.gb(16777216,null,0,1,null,y)),o.qb(33,16384,null,0,c.j,[o.O,o.K],{ngIf:[0,"ngIf"]},null),(l()(),o.gb(16777216,null,0,1,null,O)),o.qb(35,16384,null,0,c.j,[o.O,o.K],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,3,0,"secondary"),l(n,9,0,"clube-home",""),l(n,10,0,"clube-home"),l(n,25,0,""!=u.pagina.texto),l(n,27,0,u.pagina.linkTo&&""!==u.pagina.linkTo),l(n,29,0,u.pagina.imgs.length<=1||u.pagina.acaoPromocional||u.pagina.participante),l(n,31,0,u.pagina.imgs.length>1&&!u.pagina.acaoPromocional&&!u.pagina.participante),l(n,33,0,u.pagina.acaoPromocional),l(n,35,0,u.pagina.participante)}),(function(l,n){l(n,23,0,n.component.pagina.titulo)}))}function C(l){return o.Kb(0,[(l()(),o.rb(0,0,null,null,1,"app-clube-generic",[],null,null,null,v,s)),o.qb(1,114688,null,0,g,[r.a,b.a,p.a],null,null)],(function(l,n){l(n,1,0)}),null)}var P=o.nb("app-clube-generic",g,C,{},{},[]),_=u("s7LF"),w=u("iInd");class B{}u.d(n,"ClubeGenericPageModuleNgFactory",(function(){return I}));var I=o.ob(t,[],(function(l){return o.Ab([o.Bb(512,o.k,o.Z,[[8,[i.a,P]],[3,o.k],o.w]),o.Bb(4608,c.l,c.k,[o.t,[2,c.y]]),o.Bb(4608,_.l,_.l,[]),o.Bb(4608,e.c,e.c,[o.y,o.g]),o.Bb(4608,e.Hb,e.Hb,[e.c,o.k,o.q]),o.Bb(4608,e.Lb,e.Lb,[e.c,o.k,o.q]),o.Bb(1073742336,c.b,c.b,[]),o.Bb(1073742336,_.k,_.k,[]),o.Bb(1073742336,_.e,_.e,[]),o.Bb(1073742336,e.Db,e.Db,[]),o.Bb(1073742336,w.p,w.p,[[2,w.u],[2,w.m]]),o.Bb(1073742336,B,B,[]),o.Bb(1073742336,t,t,[]),o.Bb(1024,w.k,(function(){return[[{path:"",component:g}]]}),[])])}))}}]);