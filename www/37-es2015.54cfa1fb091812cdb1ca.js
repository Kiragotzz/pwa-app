(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{JIFi:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class e{}var i=u("pMnS"),o=u("MKJQ"),a=u("sZkV"),r=u("s7LF"),s=u("SVse"),c=u("mrSG"),b=u("qfBg"),d=u("6mc2");class g{constructor(l,n,u){this.alertController=l,this.user=n,this.tools=u,this.produto="",this.lista=[]}ngOnInit(){var l=JSON.parse(localStorage.getItem("_EUQUERO"))||[],n=this.user.getUsuarioClube()._id+"";this.lista=l.filter(l=>l.userId+""==n+""),console.log(this.lista)}compartilhar(){if(0!=this.lista.length){var l=[encodeURI("*Lista de Compras*")+"%0A"];l.push(encodeURI("Produto - Qtd")+"%0A%0A");for(let n of this.lista)l.push(encodeURI(n.descricao+(n.qtd?" - "+n.qtd:""))+"%0A");var n="https://api.whatsapp.com/send?text="+l.join("");window.open(n,"_system")}}limpar(){return c.__awaiter(this,void 0,void 0,(function*(){this.tools.showConfirm({title:"Alerta!",msg:"Deseja realmente limpar a lista? N\xe3o ser\xe1 poss\xedvel desfazer essa opera\xe7\xe3o.",buttons:[{text:"Cancelar",func:()=>{console.log("Cancelar")}},{text:"Limpar",func:()=>{localStorage.removeItem("_EUQUERO"),this.lista=[]}}]})}))}addLista(){return c.__awaiter(this,void 0,void 0,(function*(){var l=this.user.getUsuarioClube()._id+"";""!=this.produto&&(this.lista.push({sku:(new Date).getTime(),img:"assets/img/clube/imagem.jpg",descricao:this.produto,qtd:this.qtd,userId:l}),this.produto="",this.qtd="",localStorage.setItem("_EUQUERO",JSON.stringify(this.lista)))}))}checkItem(l){setTimeout(()=>{localStorage.setItem("_EUQUERO",JSON.stringify(this.lista))},500)}}var p=t.pb({encapsulation:0,styles:[['.app-lista[_ngcontent-%COMP%]{padding:32px 16px 16px}.form-init[_ngcontent-%COMP%]{display:flex}.item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{color:#144ab2;padding-left:20px;font-weight:600;margin-bottom:3px}ion-input[_ngcontent-%COMP%]{padding:0 20px!important;color:#009efa;background:#fff;font-weight:600;width:100%;border:none;border-radius:20px;box-sizing:border-box;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);height:38px;display:flex;align-items:center}.add-button[_ngcontent-%COMP%]{min-height:38px;min-width:38px;border-radius:50%;background-color:#009efa;color:#fff;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);margin-top:18px;display:flex;justify-content:center;align-items:center;font-size:1.5rem}.item[_ngcontent-%COMP%] + .item[_ngcontent-%COMP%]{margin-left:8px}ion-card[_ngcontent-%COMP%]{margin:0}.item-content[_ngcontent-%COMP%]{display:flex;justify-content:space-between;color:#009efa;font-weight:1000;font-size:1rem}.item-content[_ngcontent-%COMP%]   .infos[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center}.item-content[_ngcontent-%COMP%] + .item-content[_ngcontent-%COMP%]{margin-top:10px}.descricao[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.text-riscado[_ngcontent-%COMP%]{text-decoration:line-through;color:red}.text-riscado[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#009efa}.card-serrilhado[_ngcontent-%COMP%]{background:#fff;min-width:320px;position:relative;padding:16px 16px 24px;text-align:center;border-top-left-radius:20px;border-top-right-radius:20px}.card-serrilhado[_ngcontent-%COMP%]:after{content:"";display:block;position:absolute;max-width:100%;height:29px;right:0;bottom:-24px;left:0;background:linear-gradient(-45deg,transparent 70%,#fff 75%),linear-gradient(45deg,transparent 70%,#fff 75%);background-repeat:repeat-x;background-size:25px 20px,25px 20px;background-position:center}.lista-buttons[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;margin-top:32px}']],data:{}});function h(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,3,"h3",[["class","ion-padding-vertical ion-text-center"]],null,null,null,null,null)),(l()(),t.rb(1,0,null,null,2,"ion-text",[["color","medium"]],null,null,null,o.Ob,o.S)),t.qb(2,49152,null,0,a.wb,[t.h,t.l,t.y],{color:[0,"color"]},null),(l()(),t.Jb(-1,0,["Sua lista est\xe1 vazia"]))],(function(l,n){l(n,2,0,"medium")}),null)}function m(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,21,"div",[["class","item-content"]],null,null,null,null,null)),(l()(),t.rb(1,0,null,null,13,"div",[["class","infos"]],null,null,null,null,null)),(l()(),t.rb(2,0,null,null,6,"ion-checkbox",[["style","margin-right:16px"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"click"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var e=!0,i=l.component;return"ionBlur"===n&&(e=!1!==t.Db(l,3)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==t.Db(l,3)._handleIonChange(u.target)&&e),"ngModelChange"===n&&(e=!1!==(l.context.$implicit.check=u)&&e),"click"===n&&(e=!1!==i.checkItem(l.context.$implicit)&&e),e}),o.gb,o.k)),t.qb(3,4341760,null,0,a.d,[t.q,t.l],null,null),t.Gb(1024,null,r.f,(function(l){return[l]}),[a.d]),t.qb(5,671744,null,0,r.i,[[8,null],[8,null],[8,null],[6,r.f]],{model:[0,"model"]},{update:"ngModelChange"}),t.Gb(2048,null,r.g,null,[r.i]),t.qb(7,16384,null,0,r.h,[[4,r.g]],null,null),t.qb(8,49152,null,0,a.t,[t.h,t.l,t.y],null,null),(l()(),t.rb(9,0,null,null,5,"div",[["class","text-riscado"]],null,null,null,null,null)),t.Gb(512,null,s.t,s.u,[t.r,t.s,t.l,t.C]),t.qb(11,278528,null,0,s.h,[s.t],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t.Fb(12,{"text-riscado":0}),(l()(),t.rb(13,0,null,null,1,"span",[["class","descricao"]],null,null,null,null,null)),(l()(),t.Jb(14,null,["",""])),(l()(),t.rb(15,0,null,null,6,"div",[["class","qtd"]],null,null,null,null,null)),(l()(),t.rb(16,0,null,null,5,"div",[["class","text-riscado"]],null,null,null,null,null)),t.Gb(512,null,s.t,s.u,[t.r,t.s,t.l,t.C]),t.qb(18,278528,null,0,s.h,[s.t],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t.Fb(19,{"text-riscado":0}),(l()(),t.rb(20,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Jb(21,null,["","",""]))],(function(l,n){l(n,5,0,n.context.$implicit.check);var u=l(n,12,0,n.context.$implicit.check);l(n,11,0,"text-riscado",u);var t=l(n,19,0,n.context.$implicit.check);l(n,18,0,"text-riscado",t)}),(function(l,n){l(n,2,0,t.Db(n,7).ngClassUntouched,t.Db(n,7).ngClassTouched,t.Db(n,7).ngClassPristine,t.Db(n,7).ngClassDirty,t.Db(n,7).ngClassValid,t.Db(n,7).ngClassInvalid,t.Db(n,7).ngClassPending),l(n,14,0,n.context.$implicit.descricao),l(n,21,0,n.context.$implicit.qtd&&""!=n.context.$implicit.qtd?"x":"",n.context.$implicit.qtd)}))}function f(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,11,"ion-header",[],null,null,null,o.lb,o.p)),t.qb(1,49152,null,0,a.D,[t.h,t.l,t.y],null,null),(l()(),t.rb(2,0,null,0,9,"ion-toolbar",[["color","secondary"]],null,null,null,o.Rb,o.V)),t.qb(3,49152,null,0,a.Bb,[t.h,t.l,t.y],{color:[0,"color"]},null),(l()(),t.rb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,o.bb,o.f)),t.qb(5,49152,null,0,a.n,[t.h,t.l,t.y],null,null),(l()(),t.rb(6,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Db(l,8).onClick(u)&&e),e}),o.Y,o.c)),t.qb(7,49152,null,0,a.i,[t.h,t.l,t.y],null,null),t.qb(8,16384,null,0,a.j,[[2,a.hb],a.Ib,a.e],null,null),(l()(),t.rb(9,0,null,0,2,"ion-title",[],null,null,null,o.Pb,o.T)),t.qb(10,49152,null,0,a.zb,[t.h,t.l,t.y],null,null),(l()(),t.Jb(-1,0,["Minha Lista de Compras"])),(l()(),t.rb(12,0,null,null,51,"ion-content",[],null,null,null,o.ib,o.m)),t.qb(13,49152,null,0,a.w,[t.h,t.l,t.y],null,null),(l()(),t.rb(14,0,null,0,49,"div",[["class","app-lista"]],null,null,null,null,null)),(l()(),t.rb(15,0,null,null,26,"div",[["class","form-init"]],null,null,null,null,null)),(l()(),t.rb(16,0,null,null,10,"div",[["class","item"],["style","flex:2"]],null,null,null,null,null)),(l()(),t.rb(17,0,null,null,2,"ion-label",[],null,null,null,o.tb,o.x)),t.qb(18,49152,null,0,a.P,[t.h,t.l,t.y],null,null),(l()(),t.Jb(-1,0,["Produto *"])),(l()(),t.rb(20,0,null,null,6,"ion-input",[["placeholder","Digite um produto"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var e=!0,i=l.component;return"ionBlur"===n&&(e=!1!==t.Db(l,21)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==t.Db(l,21)._handleInputEvent(u.target)&&e),"ngModelChange"===n&&(e=!1!==(i.produto=u)&&e),e}),o.qb,o.u)),t.qb(21,4341760,null,0,a.Pb,[t.q,t.l],null,null),t.Gb(1024,null,r.f,(function(l){return[l]}),[a.Pb]),t.qb(23,671744,null,0,r.i,[[8,null],[8,null],[8,null],[6,r.f]],{model:[0,"model"]},{update:"ngModelChange"}),t.Gb(2048,null,r.g,null,[r.i]),t.qb(25,16384,null,0,r.h,[[4,r.g]],null,null),t.qb(26,49152,null,0,a.I,[t.h,t.l,t.y],{placeholder:[0,"placeholder"]},null),(l()(),t.rb(27,0,null,null,10,"div",[["class","item"],["style","flex:1"]],null,null,null,null,null)),(l()(),t.rb(28,0,null,null,2,"ion-label",[],null,null,null,o.tb,o.x)),t.qb(29,49152,null,0,a.P,[t.h,t.l,t.y],null,null),(l()(),t.Jb(-1,0,["Qtd"])),(l()(),t.rb(31,0,null,null,6,"ion-input",[["placeholder","0"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var e=!0,i=l.component;return"ionBlur"===n&&(e=!1!==t.Db(l,32)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==t.Db(l,32)._handleIonChange(u.target)&&e),"ngModelChange"===n&&(e=!1!==(i.qtd=u)&&e),e}),o.qb,o.u)),t.qb(32,4341760,null,0,a.Jb,[t.q,t.l],null,null),t.Gb(1024,null,r.f,(function(l){return[l]}),[a.Jb]),t.qb(34,671744,null,0,r.i,[[8,null],[8,null],[8,null],[6,r.f]],{model:[0,"model"]},{update:"ngModelChange"}),t.Gb(2048,null,r.g,null,[r.i]),t.qb(36,16384,null,0,r.h,[[4,r.g]],null,null),t.qb(37,49152,null,0,a.I,[t.h,t.l,t.y],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(l()(),t.rb(38,0,null,null,3,"div",[["class","item"]],null,null,null,null,null)),(l()(),t.rb(39,0,null,null,2,"div",[["class","add-button"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.addLista()&&t),t}),null,null)),(l()(),t.rb(40,0,null,null,1,"ion-icon",[["name","chevron-forward-outline"]],null,null,null,o.mb,o.q)),t.qb(41,49152,null,0,a.E,[t.h,t.l,t.y],{name:[0,"name"]},null),(l()(),t.rb(42,0,null,null,3,"div",[["class","item ion-margin-top item ion-padding-top"]],null,null,null,null,null)),(l()(),t.rb(43,0,null,null,2,"ion-label",[],null,null,null,o.tb,o.x)),t.qb(44,49152,null,0,a.P,[t.h,t.l,t.y],null,null),(l()(),t.Jb(-1,0,["Minha Lista"])),(l()(),t.rb(46,0,null,null,6,"div",[["class","card-serrilhado"]],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,h)),t.qb(48,16384,null,0,s.j,[t.O,t.K],{ngIf:[0,"ngIf"]},null),(l()(),t.rb(49,0,null,null,3,"ion-list",[],null,null,null,o.vb,o.y)),t.qb(50,49152,null,0,a.Q,[t.h,t.l,t.y],null,null),(l()(),t.gb(16777216,null,0,1,null,m)),t.qb(52,278528,null,0,s.i,[t.O,t.K,t.r],{ngForOf:[0,"ngForOf"]},null),(l()(),t.rb(53,0,null,null,10,"div",[["class","lista-buttons"]],null,null,null,null,null)),(l()(),t.rb(54,0,null,null,4,"ion-button",[["color","primary"],["shape","round"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.compartilhar()&&t),t}),o.ab,o.e)),t.qb(55,49152,null,0,a.m,[t.h,t.l,t.y],{color:[0,"color"],shape:[1,"shape"]},null),(l()(),t.Jb(-1,0,["COMPARTILHAR "])),(l()(),t.rb(57,0,null,0,1,"ion-icon",[["name","share-social-outline"]],null,null,null,o.mb,o.q)),t.qb(58,49152,null,0,a.E,[t.h,t.l,t.y],{name:[0,"name"]},null),(l()(),t.rb(59,0,null,null,4,"ion-button",[["color","primary"],["expand","block"],["fill","clear"],["size","small"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.limpar()&&t),t}),o.ab,o.e)),t.qb(60,49152,null,0,a.m,[t.h,t.l,t.y],{color:[0,"color"],expand:[1,"expand"],fill:[2,"fill"],size:[3,"size"]},null),(l()(),t.Jb(-1,0,["Limpar Lista "])),(l()(),t.rb(62,0,null,0,1,"ion-icon",[["name","trash-outline"]],null,null,null,o.mb,o.q)),t.qb(63,49152,null,0,a.E,[t.h,t.l,t.y],{name:[0,"name"]},null)],(function(l,n){var u=n.component;l(n,3,0,"secondary"),l(n,23,0,u.produto),l(n,26,0,"Digite um produto"),l(n,34,0,u.qtd),l(n,37,0,"0","number"),l(n,41,0,"chevron-forward-outline"),l(n,48,0,0==u.lista.length),l(n,52,0,u.lista),l(n,55,0,"primary","round"),l(n,58,0,"share-social-outline"),l(n,60,0,"primary","block","clear","small"),l(n,63,0,"trash-outline")}),(function(l,n){l(n,20,0,t.Db(n,25).ngClassUntouched,t.Db(n,25).ngClassTouched,t.Db(n,25).ngClassPristine,t.Db(n,25).ngClassDirty,t.Db(n,25).ngClassValid,t.Db(n,25).ngClassInvalid,t.Db(n,25).ngClassPending),l(n,31,0,t.Db(n,36).ngClassUntouched,t.Db(n,36).ngClassTouched,t.Db(n,36).ngClassPristine,t.Db(n,36).ngClassDirty,t.Db(n,36).ngClassValid,t.Db(n,36).ngClassInvalid,t.Db(n,36).ngClassPending)}))}function x(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,1,"app-clube-lista",[],null,null,null,f,p)),t.qb(1,114688,null,0,g,[a.b,b.a,d.a],null,null)],(function(l,n){l(n,1,0)}),null)}var C=t.nb("app-clube-lista",g,x,{},{},[]),v=u("iInd");class q{}u.d(n,"ClubeListaPageModuleNgFactory",(function(){return y}));var y=t.ob(e,[],(function(l){return t.Ab([t.Bb(512,t.k,t.Z,[[8,[i.a,C]],[3,t.k],t.w]),t.Bb(4608,s.l,s.k,[t.t,[2,s.y]]),t.Bb(4608,r.l,r.l,[]),t.Bb(4608,a.c,a.c,[t.y,t.g]),t.Bb(4608,a.Hb,a.Hb,[a.c,t.k,t.q]),t.Bb(4608,a.Lb,a.Lb,[a.c,t.k,t.q]),t.Bb(1073742336,s.b,s.b,[]),t.Bb(1073742336,r.k,r.k,[]),t.Bb(1073742336,r.e,r.e,[]),t.Bb(1073742336,a.Db,a.Db,[]),t.Bb(1073742336,v.p,v.p,[[2,v.u],[2,v.m]]),t.Bb(1073742336,q,q,[]),t.Bb(1073742336,e,e,[]),t.Bb(1024,v.k,(function(){return[[{path:"",component:g}]]}),[])])}))}}]);