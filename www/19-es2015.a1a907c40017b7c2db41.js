(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"68+j":function(l,n,u){"use strict";u.r(n);var o=u("8Y7J");class t{}var a=u("pMnS"),e=u("MKJQ"),i=u("sZkV"),r=u("s7LF"),c=u("4CcO"),b=u("iInd"),s=u("SVse"),g=u("mrSG"),d=u("H+bZ"),p=u("gezT");class h{constructor(l,n,u,o){this.api=l,this.versionService=n,this.navCtrl=u,this.loadingController=o,this.account={cpf:"",senha:"",lembrar:!1}}ngOnInit(){var l=JSON.parse(localStorage.getItem("_LOGINCARD"));l&&(this.account.cpf=l.cpf,this.account.senha=l.senha,this.account.lembrar=!0)}login(){return g.__awaiter(this,void 0,void 0,(function*(){if(""==this.account.senha||this.account.cpf.length<11)return void alert("Dados inv\xe1lidos.");const l=yield this.loadingController.create({message:"Carregando..."});l.present();var n={Autenticacao:{Unidade:22,Rede:0,Chave:"",ClientInformationId:"teste10",AppName:"WEBPORTAL",Versao:"99"},Identificacao:this.account.cpf.split(".").join("").split("-").join(""),Senha:this.account.senha};this.api.card("api_autenticacao_v1",n,u=>{if(console.log("[Login]: ",u),0==u.ListaCartao.length)return l.dismiss(),void alert(u.Retorno.Descricao);n.Identificacao=u.ListaCartao.pop(),this.api.card("api_autenticacao_v1",n,n=>(console.log("[Login2]: ",n),"Cliente primeiro acesso"==u.Retorno.Descricao?(alert(u.Retorno.Descricao),void l.dismiss()):0==n.ListaCartao.length?(l.dismiss(),void alert(u.Retorno.Descricao)):(this.account.lembrar?localStorage.setItem("_LOGINCARD",JSON.stringify(this.account)):(this.account.cpf="",this.account.senha="",localStorage.removeItem("_LOGINCARD")),l.dismiss(),void this.navCtrl.navigateForward("card"))))})}))}}var m=o.pb({encapsulation:0,styles:[[".app-login[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-direction:column;height:100vh;overflow:hidden}.app-login[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{margin-bottom:16px;width:160px;max-width:80%}.app-login[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]{position:absolute;bottom:0;right:0;height:40vh}.app-login[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]{width:80%;max-width:350px}.app-login[_ngcontent-%COMP%]   .lembrar-content[_ngcontent-%COMP%]{margin:10px 0;display:flex;justify-content:flex-start;align-items:center}.app-login[_ngcontent-%COMP%]   .lembrar-content[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{margin-left:10px}"]],data:{}});function C(l){return o.Kb(0,[(l()(),o.rb(0,0,null,null,66,"ion-content",[],null,null,null,e.ib,e.m)),o.qb(1,49152,null,0,i.w,[o.h,o.l,o.y],null,null),(l()(),o.rb(2,0,null,0,64,"div",[["class","app-login bg-primary"]],null,null,null,null,null)),(l()(),o.rb(3,0,null,null,0,"img",[["class","bg"],["src","assets/img/card/bg-logincard.png"],["title","Barbos Card"]],null,null,null,null,null)),(l()(),o.rb(4,0,null,null,0,"img",[["class","logo"],["src","assets/img/card/logo-barbosacard.png"],["title","Barbos Card"]],null,null,null,null,null)),(l()(),o.rb(5,0,null,null,61,"ion-card",[],null,null,null,e.fb,e.g)),o.qb(6,49152,null,0,i.o,[o.h,o.l,o.y],null,null),(l()(),o.rb(7,0,null,0,59,"ion-card-content",[],null,null,null,e.cb,e.h)),o.qb(8,49152,null,0,i.p,[o.h,o.l,o.y],null,null),(l()(),o.rb(9,0,null,0,13,"ion-item",[],null,null,null,e.sb,e.v)),o.qb(10,49152,null,0,i.J,[o.h,o.l,o.y],null,null),(l()(),o.rb(11,0,null,0,2,"ion-label",[["class","text-muted"],["position","floating"]],null,null,null,e.tb,e.x)),o.qb(12,49152,null,0,i.P,[o.h,o.l,o.y],{position:[0,"position"]},null),(l()(),o.Jb(-1,0,["CPF"])),(l()(),o.rb(14,0,null,0,8,"ion-input",[["autocomplete","off"],["autofocus",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"],[null,"keyup"]],(function(l,n,u){var t=!0,a=l.component;return"ionBlur"===n&&(t=!1!==o.Db(l,15)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==o.Db(l,15)._handleInputEvent(u.target)&&t),"keyup"===n&&(t=!1!==o.Db(l,21).inputKeyup(u)&&t),"ngModelChange"===n&&(t=!1!==o.Db(l,21).onNgModelChange(u)&&t),"ngModelChange"===n&&(t=!1!==(a.account.cpf=u)&&t),t}),e.qb,e.u)),o.qb(15,4341760,null,0,i.Pb,[o.q,o.l],null,null),o.Gb(1024,null,r.f,(function(l){return[l]}),[i.Pb]),o.qb(17,671744,null,0,r.i,[[8,null],[8,null],[8,null],[6,r.f]],{model:[0,"model"]},{update:"ngModelChange"}),o.Gb(2048,null,r.g,null,[r.i]),o.qb(19,16384,null,0,r.h,[[4,r.g]],null,null),o.qb(20,49152,null,0,i.I,[o.h,o.l,o.y],{autocomplete:[0,"autocomplete"],autofocus:[1,"autofocus"]},null),o.qb(21,81920,null,0,c.a,[[8,null],o.l],{brmasker:[0,"brmasker"]},null),o.Fb(22,{mask:0,type:1}),(l()(),o.rb(23,0,null,0,11,"ion-item",[],null,null,null,e.sb,e.v)),o.qb(24,49152,null,0,i.J,[o.h,o.l,o.y],null,null),(l()(),o.rb(25,0,null,0,2,"ion-label",[["class","text-muted"],["position","floating"]],null,null,null,e.tb,e.x)),o.qb(26,49152,null,0,i.P,[o.h,o.l,o.y],{position:[0,"position"]},null),(l()(),o.Jb(-1,0,["Senha"])),(l()(),o.rb(28,0,null,0,6,"ion-input",[["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0,a=l.component;return"ionBlur"===n&&(t=!1!==o.Db(l,29)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==o.Db(l,29)._handleInputEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(a.account.senha=u)&&t),t}),e.qb,e.u)),o.qb(29,4341760,null,0,i.Pb,[o.q,o.l],null,null),o.Gb(1024,null,r.f,(function(l){return[l]}),[i.Pb]),o.qb(31,671744,null,0,r.i,[[8,null],[8,null],[8,null],[6,r.f]],{model:[0,"model"]},{update:"ngModelChange"}),o.Gb(2048,null,r.g,null,[r.i]),o.qb(33,16384,null,0,r.h,[[4,r.g]],null,null),o.qb(34,49152,null,0,i.I,[o.h,o.l,o.y],{type:[0,"type"]},null),(l()(),o.rb(35,0,null,0,10,"div",[["class","lembrar-content"]],null,null,null,null,null)),(l()(),o.rb(36,0,null,null,6,"ion-toggle",[["id","lembrar"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0,a=l.component;return"ionBlur"===n&&(t=!1!==o.Db(l,37)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==o.Db(l,37)._handleIonChange(u.target)&&t),"ngModelChange"===n&&(t=!1!==(a.account.lembrar=u)&&t),t}),e.Qb,e.U)),o.qb(37,4341760,null,0,i.d,[o.q,o.l],null,null),o.Gb(1024,null,r.f,(function(l){return[l]}),[i.d]),o.qb(39,671744,null,0,r.i,[[8,null],[8,null],[8,null],[6,r.f]],{model:[0,"model"]},{update:"ngModelChange"}),o.Gb(2048,null,r.g,null,[r.i]),o.qb(41,16384,null,0,r.h,[[4,r.g]],null,null),o.qb(42,49152,null,0,i.Ab,[o.h,o.l,o.y],null,null),(l()(),o.rb(43,0,null,null,2,"ion-label",[["for","lembrar"]],null,null,null,e.tb,e.x)),o.qb(44,49152,null,0,i.P,[o.h,o.l,o.y],null,null),(l()(),o.Jb(-1,0,["Lembrar minha senha"])),(l()(),o.rb(46,0,null,0,2,"ion-button",[["class","ion-margin-top"],["expand","block"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.login()&&o),o}),e.ab,e.e)),o.qb(47,49152,null,0,i.m,[o.h,o.l,o.y],{expand:[0,"expand"]},null),(l()(),o.Jb(-1,0,["Acessar"])),(l()(),o.rb(49,0,null,0,17,"ion-grid",[["class","ion-margin-top"]],null,null,null,e.kb,e.o)),o.qb(50,49152,null,0,i.C,[o.h,o.l,o.y],null,null),(l()(),o.rb(51,0,null,0,15,"ion-row",[],null,null,null,e.Eb,e.I)),o.qb(52,49152,null,0,i.ib,[o.h,o.l,o.y],null,null),(l()(),o.rb(53,0,null,0,6,"ion-col",[["class","ion-text-left"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==o.Db(l,55).onClick()&&t),"click"===n&&(t=!1!==o.Db(l,56).onClick(u)&&t),t}),e.hb,e.l)),o.qb(54,49152,null,0,i.v,[o.h,o.l,o.y],null,null),o.qb(55,16384,null,0,b.n,[b.m,b.a,[8,null],o.C,o.l],{routerLink:[0,"routerLink"]},null),o.qb(56,737280,null,0,i.Nb,[s.g,i.Ib,o.l,b.m,[2,b.n]],null,null),(l()(),o.rb(57,0,null,0,2,"ion-text",[["color","primary"]],null,null,null,e.Ob,e.S)),o.qb(58,49152,null,0,i.wb,[o.h,o.l,o.y],{color:[0,"color"]},null),(l()(),o.Jb(-1,0,["Primeiro acesso"])),(l()(),o.rb(60,0,null,0,6,"ion-col",[["class","ion-text-right"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==o.Db(l,62).onClick()&&t),"click"===n&&(t=!1!==o.Db(l,63).onClick(u)&&t),t}),e.hb,e.l)),o.qb(61,49152,null,0,i.v,[o.h,o.l,o.y],null,null),o.qb(62,16384,null,0,b.n,[b.m,b.a,[8,null],o.C,o.l],{routerLink:[0,"routerLink"]},null),o.qb(63,737280,null,0,i.Nb,[s.g,i.Ib,o.l,b.m,[2,b.n]],null,null),(l()(),o.rb(64,0,null,0,2,"ion-text",[["color","primary"]],null,null,null,e.Ob,e.S)),o.qb(65,49152,null,0,i.wb,[o.h,o.l,o.y],{color:[0,"color"]},null),(l()(),o.Jb(-1,0,["Recuperar senha"]))],(function(l,n){var u=n.component;l(n,12,0,"floating"),l(n,17,0,u.account.cpf),l(n,20,0,"off","");var o=l(n,22,0,"000.000.000-00","num");l(n,21,0,o),l(n,26,0,"floating"),l(n,31,0,u.account.senha),l(n,34,0,"password"),l(n,39,0,u.account.lembrar),l(n,47,0,"block"),l(n,55,0,"/card-primeiro/primeiro"),l(n,56,0),l(n,58,0,"primary"),l(n,62,0,"/card-primeiro/recuperar"),l(n,63,0),l(n,65,0,"primary")}),(function(l,n){l(n,14,0,o.Db(n,19).ngClassUntouched,o.Db(n,19).ngClassTouched,o.Db(n,19).ngClassPristine,o.Db(n,19).ngClassDirty,o.Db(n,19).ngClassValid,o.Db(n,19).ngClassInvalid,o.Db(n,19).ngClassPending),l(n,28,0,o.Db(n,33).ngClassUntouched,o.Db(n,33).ngClassTouched,o.Db(n,33).ngClassPristine,o.Db(n,33).ngClassDirty,o.Db(n,33).ngClassValid,o.Db(n,33).ngClassInvalid,o.Db(n,33).ngClassPending),l(n,36,0,o.Db(n,41).ngClassUntouched,o.Db(n,41).ngClassTouched,o.Db(n,41).ngClassPristine,o.Db(n,41).ngClassDirty,o.Db(n,41).ngClassValid,o.Db(n,41).ngClassInvalid,o.Db(n,41).ngClassPending)}))}function f(l){return o.Kb(0,[(l()(),o.rb(0,0,null,null,1,"app-card-login",[],null,null,null,C,m)),o.qb(1,114688,null,0,h,[d.a,p.a,i.Ib,i.Fb],null,null)],(function(l,n){l(n,1,0)}),null)}var v=o.nb("app-card-login",h,f,{},{},[]);class y{}var D=u("CbX2");u.d(n,"CardLoginPageModuleNgFactory",(function(){return q}));var q=o.ob(t,[],(function(l){return o.Ab([o.Bb(512,o.k,o.Z,[[8,[a.a,v]],[3,o.k],o.w]),o.Bb(4608,s.l,s.k,[o.t,[2,s.y]]),o.Bb(4608,r.l,r.l,[]),o.Bb(4608,i.c,i.c,[o.y,o.g]),o.Bb(4608,i.Hb,i.Hb,[i.c,o.k,o.q]),o.Bb(4608,i.Lb,i.Lb,[i.c,o.k,o.q]),o.Bb(1073742336,s.b,s.b,[]),o.Bb(1073742336,r.k,r.k,[]),o.Bb(1073742336,r.e,r.e,[]),o.Bb(1073742336,i.Db,i.Db,[]),o.Bb(1073742336,b.p,b.p,[[2,b.u],[2,b.m]]),o.Bb(1073742336,y,y,[]),o.Bb(1073742336,D.a,D.a,[]),o.Bb(1073742336,t,t,[]),o.Bb(1024,b.k,(function(){return[[{path:"",component:h}]]}),[])])}))}}]);