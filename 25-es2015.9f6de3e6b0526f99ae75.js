(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{qPls:function(l,n,e){"use strict";e.r(n);var u=e("8Y7J");class i{}var t=e("pMnS"),o=e("MKJQ"),a=e("sZkV"),s=e("s7LF"),r=e("mrSG"),c=e("NFKh"),b=e("H+bZ"),h=e("EnSQ"),d=e("6mc2"),g=e("qfBg");class p{constructor(l,n,e,u,i,t){this.platform=l,this.navCtrl=n,this.api=e,this.user=u,this.tools=i,this.data=t,this.generosList=["FEMININO","MASCULINO","OUTROS"],this.estadoCivisList=["SOLTEIRO(A)","DIVORCIADO(A)","VI\xdaVO(A)","UNI\xc3O EST\xc1VEL","CASADO(A)","SEPARADO(A)"],this.ufs=["AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO"],this.lojas=[],this.usuario={},this.cliente={_id:null,nome:"",cpf:"",dataNascimento:"",genero:"",estadoCivil:"",email:"",cep:"",numero:"",rua:"",bairro:"",cidade:"",uf:"",complemento:"",telefone:"",celular:"",loja:"",novaSenha:"",confirmarSenha:"",hash:"",sms:!1,emailEletronico:!1,ofertas:!1,notificacoes:!1,regulamento:!1,ios:!1},this.cliente.ios=this.platform.is("ios"),this.loadData()}ngOnInit(){}loadData(){var l=this.user.getUsuarioClube();this.api.clube("listarlojas",{},n=>{this.lojas=n.data,this.api.getData("cadBrainClientes",{"dados.cpf":l.dados.cpf},l=>{this.usuario=l[0],console.log(this.usuario),this.cliente._id=this.usuario._id,this.cliente.nome=this.usuario.dados.nome,this.cliente.cpf=this.usuario.dados.cpf,this.cliente.dataNascimento=this.usuario.dados.dataNascimento,this.cliente.genero=this.usuario.perfil.genero,this.cliente.estadoCivil=this.usuario.perfil.estadocivil,this.cliente.email=this.usuario.dados.email,this.cliente.cep=this.usuario.end.cep,this.cliente.numero=this.usuario.end.numero,this.cliente.rua=this.usuario.end.endereco,this.cliente.bairro=this.usuario.end.bairro,this.cliente.cidade=this.usuario.end.cidade,this.cliente.uf=this.usuario.end.uf,this.cliente.complemento=this.usuario.end.complemento,this.cliente.telefone=this.usuario.dados.telefone,this.cliente.celular=this.usuario.dados.celular,this.cliente.loja=this.usuario.dados.loja,this.cliente.novaSenha=this.usuario.dados.senha,this.cliente.confirmarSenha=this.usuario.dados.senha,this.cliente.ofertas=this.usuario.permissoes.ofertas,this.cliente.sms=this.usuario.permissoes.sms,this.cliente.emailEletronico=this.usuario.permissoes.email,this.cliente.notificacoes=this.usuario.permissoes.notificacoes,this.cliente.regulamento=this.usuario.permissoes.regulamento})})}ionViewDidEnter(){var l=this.data.getData("selLoja");l&&(this.cliente.loja=l.nomeApresentacao)}save(){return r.__awaiter(this,void 0,void 0,(function*(){console.log("this.cliente: ",this.cliente),this.cliente.hash=c.SHA256(this.cliente.novaSenha).toString(c.enc.Hex),this.api.clube("register",{cliente:this.cliente},l=>{console.log("usuario: ",l),this.user.setUsuarioClube(l.data),l.status&&(this.tools.showAlert("Alerta","Registro alterado com sucesso!"),this.navCtrl.navigateForward("/clube"))})}))}checkCell(){this.cliente.celular=this.cliente.celular.replace(/[^0-9\(\)\-\s]/gi,"")}checkCPF(l){var n,e;if(n=0,"00000000000"==l)return!1;for(var u=1;u<=9;u++)n+=parseInt(l.substring(u-1,u))*(11-u);if(10!=(e=10*n%11)&&11!=e||(e=0),e!=parseInt(l.substring(9,10)))return!1;for(n=0,u=1;u<=10;u++)n+=parseInt(l.substring(u-1,u))*(12-u);return 10!=(e=10*n%11)&&11!=e||(e=0),e==parseInt(l.substring(10,11))}seachCep(){var l=this.cliente.cep.replace(".","").replace("-","");8==l.length&&this.api.get(`https://viacep.com.br/ws/${l}/json/`,l=>{console.log(l),(l.logradouro||""==l.logradouro)&&(this.cliente.rua=l.logradouro+"",this.cliente.bairro=l.bairro+"",this.cliente.cidade=l.localidade+"",this.cliente.uf=l.uf+"",document.getElementById("numero").focus())})}}var m=u.pb({encapsulation:0,styles:[[".container[_ngcontent-%COMP%]{height:calc(100vh - 132px);background-color:#fff}.header[_ngcontent-%COMP%]{padding:1rem}.header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;color:#009efa}ion-footer[_ngcontent-%COMP%]{background-color:#fff!important}"]],data:{}});function f(l){return u.Kb(0,[(l()(),u.rb(0,0,null,null,11,"ion-header",[],null,null,null,o.lb,o.p)),u.qb(1,49152,null,0,a.D,[u.h,u.l,u.y],null,null),(l()(),u.rb(2,0,null,0,9,"ion-toolbar",[["color","secondary"]],null,null,null,o.Rb,o.V)),u.qb(3,49152,null,0,a.Bb,[u.h,u.l,u.y],{color:[0,"color"]},null),(l()(),u.rb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,o.bb,o.f)),u.qb(5,49152,null,0,a.n,[u.h,u.l,u.y],null,null),(l()(),u.rb(6,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],(function(l,n,e){var i=!0;return"click"===n&&(i=!1!==u.Db(l,8).onClick(e)&&i),i}),o.Y,o.c)),u.qb(7,49152,null,0,a.i,[u.h,u.l,u.y],null,null),u.qb(8,16384,null,0,a.j,[[2,a.hb],a.Ib,a.e],null,null),(l()(),u.rb(9,0,null,0,2,"ion-title",[],null,null,null,o.Pb,o.T)),u.qb(10,49152,null,0,a.zb,[u.h,u.l,u.y],null,null),(l()(),u.Jb(-1,0,["Configurar Notifica\xe7\xf5es"])),(l()(),u.rb(12,0,null,null,45,"ion-content",[],null,null,null,o.ib,o.m)),u.qb(13,49152,null,0,a.w,[u.h,u.l,u.y],null,null),(l()(),u.rb(14,0,null,0,43,"div",[["class","container"]],null,null,null,null,null)),(l()(),u.rb(15,0,null,null,4,"div",[["class","header"]],null,null,null,null,null)),(l()(),u.rb(16,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),u.Jb(-1,null,["Escolha quais os canais e tipos de mensagens do Barbosa Supermercados voc\xea quer receber. "])),(l()(),u.rb(18,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),u.Jb(-1,null,["O contato com voc\xea \xe9 muito importante para que n\xe3o perca nenhuma novidade."])),(l()(),u.rb(20,0,null,null,37,"ion-list",[],null,null,null,o.vb,o.y)),u.qb(21,49152,null,0,a.Q,[u.h,u.l,u.y],null,null),(l()(),u.rb(22,0,null,0,11,"ion-item",[],null,null,null,o.sb,o.v)),u.qb(23,49152,null,0,a.J,[u.h,u.l,u.y],null,null),(l()(),u.rb(24,0,null,0,2,"ion-label",[],null,null,null,o.tb,o.x)),u.qb(25,49152,null,0,a.P,[u.h,u.l,u.y],null,null),(l()(),u.Jb(-1,0,["Notifica\xe7\xf5es no aplicativo"])),(l()(),u.rb(27,0,null,0,6,"ion-toggle",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var i=!0,t=l.component;return"ionBlur"===n&&(i=!1!==u.Db(l,28)._handleBlurEvent(e.target)&&i),"ionChange"===n&&(i=!1!==u.Db(l,28)._handleIonChange(e.target)&&i),"ngModelChange"===n&&(i=!1!==(t.cliente.notificacoes=e)&&i),i}),o.Qb,o.U)),u.qb(28,4341760,null,0,a.d,[u.q,u.l],null,null),u.Gb(1024,null,s.f,(function(l){return[l]}),[a.d]),u.qb(30,671744,null,0,s.i,[[8,null],[8,null],[8,null],[6,s.f]],{model:[0,"model"]},{update:"ngModelChange"}),u.Gb(2048,null,s.g,null,[s.i]),u.qb(32,16384,null,0,s.h,[[4,s.g]],null,null),u.qb(33,49152,null,0,a.Ab,[u.h,u.l,u.y],null,null),(l()(),u.rb(34,0,null,0,11,"ion-item",[],null,null,null,o.sb,o.v)),u.qb(35,49152,null,0,a.J,[u.h,u.l,u.y],null,null),(l()(),u.rb(36,0,null,0,2,"ion-label",[],null,null,null,o.tb,o.x)),u.qb(37,49152,null,0,a.P,[u.h,u.l,u.y],null,null),(l()(),u.Jb(-1,0,["SMS"])),(l()(),u.rb(39,0,null,0,6,"ion-toggle",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var i=!0,t=l.component;return"ionBlur"===n&&(i=!1!==u.Db(l,40)._handleBlurEvent(e.target)&&i),"ionChange"===n&&(i=!1!==u.Db(l,40)._handleIonChange(e.target)&&i),"ngModelChange"===n&&(i=!1!==(t.cliente.sms=e)&&i),i}),o.Qb,o.U)),u.qb(40,4341760,null,0,a.d,[u.q,u.l],null,null),u.Gb(1024,null,s.f,(function(l){return[l]}),[a.d]),u.qb(42,671744,null,0,s.i,[[8,null],[8,null],[8,null],[6,s.f]],{model:[0,"model"]},{update:"ngModelChange"}),u.Gb(2048,null,s.g,null,[s.i]),u.qb(44,16384,null,0,s.h,[[4,s.g]],null,null),u.qb(45,49152,null,0,a.Ab,[u.h,u.l,u.y],null,null),(l()(),u.rb(46,0,null,0,11,"ion-item",[],null,null,null,o.sb,o.v)),u.qb(47,49152,null,0,a.J,[u.h,u.l,u.y],null,null),(l()(),u.rb(48,0,null,0,2,"ion-label",[],null,null,null,o.tb,o.x)),u.qb(49,49152,null,0,a.P,[u.h,u.l,u.y],null,null),(l()(),u.Jb(-1,0,["E-mail"])),(l()(),u.rb(51,0,null,0,6,"ion-toggle",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var i=!0,t=l.component;return"ionBlur"===n&&(i=!1!==u.Db(l,52)._handleBlurEvent(e.target)&&i),"ionChange"===n&&(i=!1!==u.Db(l,52)._handleIonChange(e.target)&&i),"ngModelChange"===n&&(i=!1!==(t.cliente.emailEletronico=e)&&i),i}),o.Qb,o.U)),u.qb(52,4341760,null,0,a.d,[u.q,u.l],null,null),u.Gb(1024,null,s.f,(function(l){return[l]}),[a.d]),u.qb(54,671744,null,0,s.i,[[8,null],[8,null],[8,null],[6,s.f]],{model:[0,"model"]},{update:"ngModelChange"}),u.Gb(2048,null,s.g,null,[s.i]),u.qb(56,16384,null,0,s.h,[[4,s.g]],null,null),u.qb(57,49152,null,0,a.Ab,[u.h,u.l,u.y],null,null),(l()(),u.rb(58,0,null,null,4,"ion-footer",[["class","ion-padding"]],null,null,null,o.jb,o.n)),u.qb(59,49152,null,0,a.B,[u.h,u.l,u.y],null,null),(l()(),u.rb(60,0,null,0,2,"ion-button",[["color","primary"],["expand","block"]],null,[[null,"click"]],(function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.save()&&u),u}),o.ab,o.e)),u.qb(61,49152,null,0,a.m,[u.h,u.l,u.y],{color:[0,"color"],expand:[1,"expand"]},null),(l()(),u.Jb(-1,0,["Salvar"]))],(function(l,n){var e=n.component;l(n,3,0,"secondary"),l(n,30,0,e.cliente.notificacoes),l(n,42,0,e.cliente.sms),l(n,54,0,e.cliente.emailEletronico),l(n,61,0,"primary","block")}),(function(l,n){l(n,27,0,u.Db(n,32).ngClassUntouched,u.Db(n,32).ngClassTouched,u.Db(n,32).ngClassPristine,u.Db(n,32).ngClassDirty,u.Db(n,32).ngClassValid,u.Db(n,32).ngClassInvalid,u.Db(n,32).ngClassPending),l(n,39,0,u.Db(n,44).ngClassUntouched,u.Db(n,44).ngClassTouched,u.Db(n,44).ngClassPristine,u.Db(n,44).ngClassDirty,u.Db(n,44).ngClassValid,u.Db(n,44).ngClassInvalid,u.Db(n,44).ngClassPending),l(n,51,0,u.Db(n,56).ngClassUntouched,u.Db(n,56).ngClassTouched,u.Db(n,56).ngClassPristine,u.Db(n,56).ngClassDirty,u.Db(n,56).ngClassValid,u.Db(n,56).ngClassInvalid,u.Db(n,56).ngClassPending)}))}function C(l){return u.Kb(0,[(l()(),u.rb(0,0,null,null,1,"app-clube-config-notificacoes",[],null,null,null,f,m)),u.qb(1,114688,null,0,p,[a.Kb,a.Ib,b.a,g.a,d.a,h.a],null,null)],(function(l,n){l(n,1,0)}),null)}var v=u.nb("app-clube-config-notificacoes",p,C,{},{},[]),D=e("SVse"),q=e("iInd");class y{}e.d(n,"ClubeConfigNotificacoesPageModuleNgFactory",(function(){return B}));var B=u.ob(i,[],(function(l){return u.Ab([u.Bb(512,u.k,u.Z,[[8,[t.a,v]],[3,u.k],u.w]),u.Bb(4608,D.l,D.k,[u.t,[2,D.y]]),u.Bb(4608,s.l,s.l,[]),u.Bb(4608,a.c,a.c,[u.y,u.g]),u.Bb(4608,a.Hb,a.Hb,[a.c,u.k,u.q]),u.Bb(4608,a.Lb,a.Lb,[a.c,u.k,u.q]),u.Bb(1073742336,D.b,D.b,[]),u.Bb(1073742336,s.k,s.k,[]),u.Bb(1073742336,s.e,s.e,[]),u.Bb(1073742336,a.Db,a.Db,[]),u.Bb(1073742336,q.p,q.p,[[2,q.u],[2,q.m]]),u.Bb(1073742336,y,y,[]),u.Bb(1073742336,i,i,[]),u.Bb(1024,q.k,(function(){return[[{path:"",component:p}]]}),[])])}))}}]);