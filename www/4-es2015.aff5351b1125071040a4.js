(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"nm7+":function(l,n,u){"use strict";u.r(n);var o=u("8Y7J");class i{}var e=u("pMnS"),r=u("iInd"),t=u("sZkV"),b=u("SVse"),c=u("MKJQ"),s=u("H+bZ"),a=u("qfBg"),p=u("6mc2");class m{constructor(l,n,u,o){this.menuCtrl=l,this.api=n,this.user=u,this.tools=o,this.slideOpts={initialSlide:0,spaceBetween:16},this.usuario={}}ngOnInit(){}ionViewDidEnter(){this.usuario=this.user.getUsuarioClube(),this.menuCtrl.enable(!0)}ionViewDidLeave(){this.primeiroAcesso()}primeiroAcesso(){var l=this.user.getUsuarioClube();this.api.clube("primeiroacesso",{clienteId:l._id+""},l=>{console.log("[primeiroacesso] ",l)})}fechar(){var l=this.user.getUsuarioClube();this.api.clube("sopacounter",{clienteId:l._id},l=>{console.log("[sopacounter] ",l),this.usuario.primeiroAcesso=!0,this.user.setUsuarioClube(this.usuario)})}}var g=o.pb({encapsulation:0,styles:[["ion-card[_ngcontent-%COMP%]{margin:0;width:100%}ion-slides[_ngcontent-%COMP%]{padding-bottom:5px}ion-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.loading-content[_ngcontent-%COMP%], .promo-content[_ngcontent-%COMP%]{position:absolute;height:100vh;width:100vw;background:#00000099;z-index:9999999999999;display:flex;flex-direction:column;justify-content:center;align-items:center}.promo-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-bottom:32px}"]],data:{}});function h(l){return o.Kb(0,[(l()(),o.rb(0,0,null,null,8,"div",[["class","promo-content"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.fechar()&&o),o}),null,null)),(l()(),o.rb(1,0,null,null,2,"img",[["routerLink","/clube-sopometro"],["src","assets/img/clube/banners/sopa.png"]],null,[[null,"click"]],(function(l,n,u){var i=!0;return"click"===n&&(i=!1!==o.Db(l,2).onClick()&&i),"click"===n&&(i=!1!==o.Db(l,3).onClick(u)&&i),i}),null,null)),o.qb(2,16384,null,0,r.n,[r.m,r.a,[8,null],o.C,o.l],{routerLink:[0,"routerLink"]},null),o.qb(3,737280,null,0,t.Nb,[b.g,t.Ib,o.l,r.m,[2,r.n]],null,null),(l()(),o.rb(4,0,null,null,4,"ion-button",[["color","light"]],null,null,null,c.ab,c.e)),o.qb(5,49152,null,0,t.m,[o.h,o.l,o.y],{color:[0,"color"]},null),(l()(),o.rb(6,0,null,0,1,"ion-icon",[["name","close-outline"]],null,null,null,c.mb,c.q)),o.qb(7,49152,null,0,t.E,[o.h,o.l,o.y],{name:[0,"name"]},null),(l()(),o.Jb(-1,0,[" Fechar"]))],(function(l,n){l(n,2,0,"/clube-sopometro"),l(n,3,0),l(n,5,0,"light"),l(n,7,0,"close-outline")}),null)}function d(l){return o.Kb(0,[(l()(),o.gb(16777216,null,null,1,null,h)),o.qb(1,16384,null,0,b.j,[o.O,o.K],{ngIf:[0,"ngIf"]},null),(l()(),o.rb(2,0,null,null,17,"ion-header",[],null,null,null,c.lb,c.p)),o.qb(3,49152,null,0,t.D,[o.h,o.l,o.y],null,null),(l()(),o.rb(4,0,null,0,15,"ion-toolbar",[["color","secondary"]],null,null,null,c.Rb,c.V)),o.qb(5,49152,null,0,t.Bb,[o.h,o.l,o.y],{color:[0,"color"]},null),(l()(),o.rb(6,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,c.bb,c.f)),o.qb(7,49152,null,0,t.n,[o.h,o.l,o.y],null,null),(l()(),o.rb(8,0,null,0,1,"ion-menu-button",[],null,null,null,c.wb,c.B)),o.qb(9,49152,null,0,t.T,[o.h,o.l,o.y],null,null),(l()(),o.rb(10,0,null,0,1,"div",[["class","logo_content"]],null,null,null,null,null)),(l()(),o.rb(11,0,null,null,0,"img",[["alt","logo"],["src","assets/img/clube/logo-b-barbosa.png"]],null,null,null,null,null)),(l()(),o.rb(12,0,null,0,7,"ion-buttons",[["routerLink","/clube-notificacoes"],["slot","end"]],null,[[null,"click"]],(function(l,n,u){var i=!0;return"click"===n&&(i=!1!==o.Db(l,14).onClick()&&i),"click"===n&&(i=!1!==o.Db(l,15).onClick(u)&&i),i}),c.bb,c.f)),o.qb(13,49152,null,0,t.n,[o.h,o.l,o.y],null,null),o.qb(14,16384,null,0,r.n,[r.m,r.a,[8,null],o.C,o.l],{routerLink:[0,"routerLink"]},null),o.qb(15,737280,null,0,t.Nb,[b.g,t.Ib,o.l,r.m,[2,r.n]],null,null),(l()(),o.rb(16,0,null,0,3,"ion-button",[],null,null,null,c.ab,c.e)),o.qb(17,49152,null,0,t.m,[o.h,o.l,o.y],null,null),(l()(),o.rb(18,0,null,0,1,"ion-icon",[["name","notifications-circle"],["slot","icon-only"]],null,null,null,c.mb,c.q)),o.qb(19,49152,null,0,t.E,[o.h,o.l,o.y],{name:[0,"name"]},null),(l()(),o.rb(20,0,null,null,23,"ion-content",[["class","ion-padding"]],null,null,null,c.ib,c.m)),o.qb(21,49152,null,0,t.w,[o.h,o.l,o.y],null,null),(l()(),o.rb(22,0,null,0,4,"ion-button",[["class","ion-margin-bottom"],["expand","block"],["fill","clear"],["routerLink","/clube"]],null,[[null,"click"]],(function(l,n,u){var i=!0;return"click"===n&&(i=!1!==o.Db(l,24).onClick()&&i),"click"===n&&(i=!1!==o.Db(l,25).onClick(u)&&i),i}),c.ab,c.e)),o.qb(23,49152,null,0,t.m,[o.h,o.l,o.y],{expand:[0,"expand"],fill:[1,"fill"]},null),o.qb(24,16384,null,0,r.n,[r.m,r.a,[8,null],o.C,o.l],{routerLink:[0,"routerLink"]},null),o.qb(25,737280,null,0,t.Nb,[b.g,t.Ib,o.l,r.m,[2,r.n]],null,null),(l()(),o.Jb(-1,0,["Ir ao in\xedcio"])),(l()(),o.rb(27,0,null,0,16,"ion-slides",[["pager","true"]],null,null,null,c.Jb,c.N)),o.qb(28,49152,null,0,t.qb,[o.h,o.l,o.y],{options:[0,"options"],pager:[1,"pager"]},null),(l()(),o.rb(29,0,null,0,4,"ion-slide",[],null,null,null,c.Ib,c.M)),o.qb(30,49152,null,0,t.pb,[o.h,o.l,o.y],null,null),(l()(),o.rb(31,0,null,0,2,"ion-card",[],null,null,null,c.fb,c.g)),o.qb(32,49152,null,0,t.o,[o.h,o.l,o.y],null,null),(l()(),o.rb(33,0,null,0,0,"img",[["alt",""],["src","assets/img/clube/banners/primeiroacesso3.png"]],null,null,null,null,null)),(l()(),o.rb(34,0,null,0,4,"ion-slide",[],null,null,null,c.Ib,c.M)),o.qb(35,49152,null,0,t.pb,[o.h,o.l,o.y],null,null),(l()(),o.rb(36,0,null,0,2,"ion-card",[],null,null,null,c.fb,c.g)),o.qb(37,49152,null,0,t.o,[o.h,o.l,o.y],null,null),(l()(),o.rb(38,0,null,0,0,"img",[["alt",""],["src","assets/img/clube/banners/primeiroacesso2.png"]],null,null,null,null,null)),(l()(),o.rb(39,0,null,0,4,"ion-slide",[],null,null,null,c.Ib,c.M)),o.qb(40,49152,null,0,t.pb,[o.h,o.l,o.y],null,null),(l()(),o.rb(41,0,null,0,2,"ion-card",[["style","background-color:#0689fa"]],null,null,null,c.fb,c.g)),o.qb(42,49152,null,0,t.o,[o.h,o.l,o.y],null,null),(l()(),o.rb(43,0,null,0,0,"img",[["alt",""],["src","assets/img/clube/banners/primeiroacesso1.png"]],null,null,null,null,null))],(function(l,n){var u=n.component;l(n,1,0,!u.usuario.primeiroAcesso&&u.usuario.newapp),l(n,5,0,"secondary"),l(n,14,0,"/clube-notificacoes"),l(n,15,0),l(n,19,0,"notifications-circle"),l(n,23,0,"block","clear"),l(n,24,0,"/clube"),l(n,25,0),l(n,28,0,u.slideOpts,"true")}),null)}function k(l){return o.Kb(0,[(l()(),o.rb(0,0,null,null,1,"app-clube-primeiroacesso",[],null,null,null,d,g)),o.qb(1,114688,null,0,m,[t.Gb,s.a,a.a,p.a],null,null)],(function(l,n){l(n,1,0)}),null)}var f=o.nb("app-clube-primeiroacesso",m,k,{},{},[]),q=u("s7LF");class y{}u.d(n,"ClubePrimeiroacessoPageModuleNgFactory",(function(){return C}));var C=o.ob(i,[],(function(l){return o.Ab([o.Bb(512,o.k,o.Z,[[8,[e.a,f]],[3,o.k],o.w]),o.Bb(4608,b.l,b.k,[o.t,[2,b.y]]),o.Bb(4608,q.l,q.l,[]),o.Bb(4608,t.c,t.c,[o.y,o.g]),o.Bb(4608,t.Hb,t.Hb,[t.c,o.k,o.q]),o.Bb(4608,t.Lb,t.Lb,[t.c,o.k,o.q]),o.Bb(1073742336,b.b,b.b,[]),o.Bb(1073742336,q.k,q.k,[]),o.Bb(1073742336,q.e,q.e,[]),o.Bb(1073742336,t.Db,t.Db,[]),o.Bb(1073742336,r.p,r.p,[[2,r.u],[2,r.m]]),o.Bb(1073742336,y,y,[]),o.Bb(1073742336,i,i,[]),o.Bb(1024,r.k,(function(){return[[{path:"",component:m}]]}),[])])}))}}]);