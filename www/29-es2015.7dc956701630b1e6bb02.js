(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{Sg4g:function(n,l,t){"use strict";t.r(l);var o=t("8Y7J");class e{}var c=t("pMnS"),u=t("SVse"),i=t("MKJQ"),a=t("sZkV"),r=t("mrSG"),s=t("H+bZ"),g=t("qfBg");class b{constructor(n,l,t){this.user=n,this.router2=l,this.api=t,this.usuario={saldo:"0,00",historicoCashBack:[]},this.filtroOpened=!1}ngOnInit(){}ionViewWillEnter(){this.loadData()}loadData(){return r.__awaiter(this,void 0,void 0,(function*(){let n=this.user.getUsuarioClube();this.usuario=n;let l={cad:"cadBrainExtrato",pipe:[{$match:{cpf:n.dados.cpf}},{$project:{_id:1,cpf:1,data:1,dataDia:1,tipo:1,tipoResgate:1,valor:1,loja:1,time:1}},{$sort:{time:-1}},{$limit:20}]},t=yield this.api.aggregate(l);for(let o of t)o.valor=Number(o.valor).toLocaleString("pt-BR",{style:"currency",currency:"BRL"});console.log("\u{1f680} ~ resAggExtrato:",t),this.usuario.historicoCashBack=t}))}backMenu(){console.log("\u{1f680} ~ backMenu"),this.router2.navigate(["clube/clube/clube-home"],{queryParams:{openMenu:!0}})}openFiltro(){console.log("open filtro"),this.filtroOpened=!0}}var d=t("iInd"),h=o.pb({encapsulation:0,styles:[["ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{width:47px}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]   .button-back[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{height:24px;width:24px}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center;color:#fff;font-size:16px;font-style:normal;font-weight:700;line-height:normal}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]   .space[_ngcontent-%COMP%]{width:47px}ion-header[_ngcontent-%COMP%]::after{display:none}ion-content[_ngcontent-%COMP%]   .cash-back[_ngcontent-%COMP%]{padding:16px}ion-content[_ngcontent-%COMP%]   .cash-back[_ngcontent-%COMP%]   .content-cash-back[_ngcontent-%COMP%]{display:flow}ion-content[_ngcontent-%COMP%]   .cash-back[_ngcontent-%COMP%]   .content-cash-back[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{display:flex;color:#000;font-size:12px;font-style:normal;font-weight:400;line-height:normal}ion-content[_ngcontent-%COMP%]   .cash-back[_ngcontent-%COMP%]   .content-cash-back[_ngcontent-%COMP%]   .content-valor[_ngcontent-%COMP%]{display:flex;gap:8px;align-items:baseline;font-size:14px;color:var(--ion-color-secondary);font-style:normal;font-weight:700;line-height:normal}ion-content[_ngcontent-%COMP%]   .cash-back[_ngcontent-%COMP%]   .content-cash-back[_ngcontent-%COMP%]   .content-valor[_ngcontent-%COMP%]   .valor[_ngcontent-%COMP%]{font-size:24px}ion-content[_ngcontent-%COMP%]   .cash-back[_ngcontent-%COMP%]   .button-resgatar[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:70px;height:20px;border-radius:20px;background:var(--ion-color-secondary);color:#fff;font-size:8px;font-style:normal;font-weight:700;line-height:normal}ion-content[_ngcontent-%COMP%]   .historico[_ngcontent-%COMP%]{padding:16px}ion-content[_ngcontent-%COMP%]   .historico[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#1e1e1e;font-size:18px;font-style:normal;font-weight:700;line-height:normal;margin-bottom:16px}ion-content[_ngcontent-%COMP%]   .historico[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{display:flex}ion-content[_ngcontent-%COMP%]   .historico[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .content-step[_ngcontent-%COMP%]{display:flex;width:50%}ion-content[_ngcontent-%COMP%]   .historico[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .content-step[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%]{padding:3px 8px;border-radius:5px;background:var(--ion-color-secondary);color:#fff;font-size:12px;font-style:normal;font-weight:400;line-height:normal;cursor:pointer}ion-content[_ngcontent-%COMP%]   .historico[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .filtro[_ngcontent-%COMP%]{width:50%;background-color:#fff;border:none;color:var(--ion-color-secondary);font-size:12px;font-style:normal;font-weight:400;line-height:normal;-webkit-text-decoration-line:underline;text-decoration-line:underline;text-align:end;cursor:pointer}ion-content[_ngcontent-%COMP%]   .historico[_ngcontent-%COMP%]   .lista-historico[_ngcontent-%COMP%]   .content-item[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{display:flex;flex-direction:row;border-radius:10px;border:.5px solid #e6e6e6;background:#fff;margin-top:16px;margin-bottom:16px;padding:16px}ion-content[_ngcontent-%COMP%]   .historico[_ngcontent-%COMP%]   .lista-historico[_ngcontent-%COMP%]   .content-item[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .simbolo[_ngcontent-%COMP%]{margin-right:16px;border-radius:50%;width:20px;height:20px;color:#ffff;align-items:center;justify-content:center;display:flex}ion-content[_ngcontent-%COMP%]   .historico[_ngcontent-%COMP%]   .lista-historico[_ngcontent-%COMP%]   .content-item[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .content-infos[_ngcontent-%COMP%]{flex:1;font-size:12px;font-style:normal;font-weight:400;line-height:normal}ion-content[_ngcontent-%COMP%]   .historico[_ngcontent-%COMP%]   .lista-historico[_ngcontent-%COMP%]   .content-item[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .content-infos[_ngcontent-%COMP%]   .titulo[_ngcontent-%COMP%]{color:#bd000b;font-size:12px;font-style:normal;font-weight:400;line-height:normal}ion-content[_ngcontent-%COMP%]   .historico[_ngcontent-%COMP%]   .lista-historico[_ngcontent-%COMP%]   .content-item[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .content-infos[_ngcontent-%COMP%]   .tipo[_ngcontent-%COMP%]{padding-left:16px;color:#484848;font-size:10px;font-style:normal;font-weight:400;line-height:normal}ion-content[_ngcontent-%COMP%]   .historico[_ngcontent-%COMP%]   .lista-historico[_ngcontent-%COMP%]   .content-item[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .data-content[_ngcontent-%COMP%]{width:30%;display:flex;flex-direction:column;align-items:flex-end;color:#9e9e9e;font-size:12px;font-style:normal;font-weight:400;line-height:normal;justify-content:center}ion-content[_ngcontent-%COMP%]   .historico[_ngcontent-%COMP%]   .lista-historico[_ngcontent-%COMP%]   .content-item[_ngcontent-%COMP%]   .resgate[_ngcontent-%COMP%]   .simbolo[_ngcontent-%COMP%]{background-color:red}ion-content[_ngcontent-%COMP%]   .historico[_ngcontent-%COMP%]   .lista-historico[_ngcontent-%COMP%]   .content-item[_ngcontent-%COMP%]   .resgate[_ngcontent-%COMP%]   .content-infos[_ngcontent-%COMP%]   .titulo[_ngcontent-%COMP%]{color:#bd000b}ion-content[_ngcontent-%COMP%]   .historico[_ngcontent-%COMP%]   .lista-historico[_ngcontent-%COMP%]   .content-item[_ngcontent-%COMP%]   .cashback[_ngcontent-%COMP%]   .simbolo[_ngcontent-%COMP%]{background-color:#00f}ion-content[_ngcontent-%COMP%]   .historico[_ngcontent-%COMP%]   .lista-historico[_ngcontent-%COMP%]   .content-item[_ngcontent-%COMP%]   .cashback[_ngcontent-%COMP%]   .content-infos[_ngcontent-%COMP%]   .titulo[_ngcontent-%COMP%]{color:#004cf9}ion-content[_ngcontent-%COMP%]   .contetn-select[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;background-color:rgba(0,0,255,.39)}"]],data:{}});function O(n){return o.Kb(0,[(n()(),o.rb(0,0,null,null,12,"div",[["class","item resgate"]],null,null,null,null,null)),(n()(),o.rb(1,0,null,null,1,"div",[["class","simbolo"]],null,null,null,null,null)),(n()(),o.Jb(-1,null,["-"])),(n()(),o.rb(3,0,null,null,4,"div",[["class","content-infos"]],null,null,null,null,null)),(n()(),o.rb(4,0,null,null,1,"div",[["class","titulo"]],null,null,null,null,null)),(n()(),o.Jb(-1,null,[" Resgate Cashback"])),(n()(),o.rb(6,0,null,null,1,"div",[["class","valor"]],null,null,null,null,null)),(n()(),o.Jb(7,null,["",""])),(n()(),o.rb(8,0,null,null,4,"div",[["class","data-content"]],null,null,null,null,null)),(n()(),o.rb(9,0,null,null,1,"div",[["class","data-dia"]],null,null,null,null,null)),(n()(),o.Jb(10,null,["",""])),(n()(),o.rb(11,0,null,null,1,"div",[["class","data-text"]],null,null,null,null,null)),(n()(),o.Jb(12,null,["",""]))],null,(function(n,l){n(l,7,0,l.parent.context.$implicit.valor),n(l,10,0,l.parent.context.$implicit.dataDia),n(l,12,0,l.parent.context.$implicit.data)}))}function C(n){return o.Kb(0,[(n()(),o.rb(0,0,null,null,17,"div",[["class","item cashback"]],null,null,null,null,null)),(n()(),o.rb(1,0,null,null,1,"div",[["class","simbolo"]],null,null,null,null,null)),(n()(),o.Jb(-1,null,["+"])),(n()(),o.rb(3,0,null,null,9,"div",[["class","content-infos"]],null,null,null,null,null)),(n()(),o.rb(4,0,null,null,2,"div",[["class","titulo"]],null,null,null,null,null)),(n()(),o.Jb(-1,null,[" Cashback "])),(n()(),o.rb(6,0,null,null,0,"strong",[],null,null,null,null,null)),(n()(),o.rb(7,0,null,null,1,"div",[["class","valor"]],null,null,null,null,null)),(n()(),o.Jb(8,null,["",""])),(n()(),o.rb(9,0,null,null,3,"div",[["class","tipo"]],null,null,null,null,null)),(n()(),o.rb(10,0,null,null,2,"ul",[],null,null,null,null,null)),(n()(),o.rb(11,0,null,null,1,"li",[],null,null,null,null,null)),(n()(),o.Jb(12,null,["",""])),(n()(),o.rb(13,0,null,null,4,"div",[["class","data-content"]],null,null,null,null,null)),(n()(),o.rb(14,0,null,null,1,"div",[["class","data-dia"]],null,null,null,null,null)),(n()(),o.Jb(15,null,["",""])),(n()(),o.rb(16,0,null,null,1,"div",[["class","data-text"]],null,null,null,null,null)),(n()(),o.Jb(17,null,["",""]))],null,(function(n,l){n(l,8,0,l.parent.context.$implicit.valor),n(l,12,0,l.parent.context.$implicit.tipoResgate),n(l,15,0,l.parent.context.$implicit.dataDia),n(l,17,0,l.parent.context.$implicit.data)}))}function M(n){return o.Kb(0,[(n()(),o.rb(0,0,null,null,4,"div",[["class","content-item"]],null,null,null,null,null)),(n()(),o.gb(16777216,null,null,1,null,O)),o.qb(2,16384,null,0,u.j,[o.O,o.K],{ngIf:[0,"ngIf"]},null),(n()(),o.gb(16777216,null,null,1,null,C)),o.qb(4,16384,null,0,u.j,[o.O,o.K],{ngIf:[0,"ngIf"]},null)],(function(n,l){n(l,2,0,"resgate"==l.context.$implicit.tipo),n(l,4,0,"resgate"!=l.context.$implicit.tipo)}),null)}function _(n){return o.Kb(0,[(n()(),o.rb(0,0,null,null,1,"div",[["class","contetn-select"]],null,null,null,null,null)),(n()(),o.Jb(-1,null,[" teste "]))],null,null)}function P(n){return o.Kb(0,[o.Hb(671088640,1,{selectRef:0}),(n()(),o.rb(1,0,null,null,13,"ion-header",[],null,null,null,i.lb,i.p)),o.qb(2,49152,null,0,a.D,[o.h,o.l,o.y],null,null),(n()(),o.rb(3,0,null,0,11,"ion-toolbar",[["color","secondary"]],null,null,null,i.Rb,i.V)),o.qb(4,49152,null,0,a.Bb,[o.h,o.l,o.y],{color:[0,"color"]},null),(n()(),o.rb(5,0,null,0,9,"ion-buttons",[],null,null,null,i.bb,i.f)),o.qb(6,49152,null,0,a.n,[o.h,o.l,o.y],null,null),(n()(),o.rb(7,0,null,0,4,"ion-button",[],null,null,null,i.ab,i.e)),o.qb(8,49152,null,0,a.m,[o.h,o.l,o.y],null,null),(n()(),o.rb(9,0,null,0,2,"div",[["class","button-back"]],null,[[null,"click"]],(function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.backMenu()&&o),o}),null,null)),(n()(),o.rb(10,0,null,null,1,"ion-icon",[["name","arrow-back"]],null,null,null,i.mb,i.q)),o.qb(11,49152,null,0,a.E,[o.h,o.l,o.y],{name:[0,"name"]},null),(n()(),o.rb(12,0,null,0,1,"div",[["class","title"]],null,null,null,null,null)),(n()(),o.Jb(-1,null,["Extrato"])),(n()(),o.rb(14,0,null,0,0,"div",[["class","space"]],null,null,null,null,null)),(n()(),o.rb(15,0,null,null,17,"ion-content",[],null,null,null,i.ib,i.m)),o.qb(16,49152,null,0,a.w,[o.h,o.l,o.y],null,null),(n()(),o.rb(17,0,null,0,7,"div",[["class","cash-back"]],null,null,null,null,null)),(n()(),o.rb(18,0,null,null,6,"div",[["class","content-cash-back"]],null,null,null,null,null)),(n()(),o.rb(19,0,null,null,1,"div",[["class","text"]],null,null,null,null,null)),(n()(),o.Jb(-1,null,["Saldo de cashback"])),(n()(),o.rb(21,0,null,null,3,"div",[["class","content-valor"]],null,null,null,null,null)),(n()(),o.Jb(-1,null,["R$"])),(n()(),o.rb(23,0,null,null,1,"div",[["class","valor"]],null,null,null,null,null)),(n()(),o.Jb(24,null,[" ",""])),(n()(),o.rb(25,0,null,0,5,"div",[["class","historico"]],null,null,null,null,null)),(n()(),o.rb(26,0,null,null,1,"div",[["class","title"]],null,null,null,null,null)),(n()(),o.Jb(-1,null,["\xdaltimos lan\xe7amentos"])),(n()(),o.rb(28,0,null,null,2,"div",[["class","lista-historico"]],null,null,null,null,null)),(n()(),o.gb(16777216,null,null,1,null,M)),o.qb(30,278528,null,0,u.i,[o.O,o.K,o.r],{ngForOf:[0,"ngForOf"]},null),(n()(),o.gb(16777216,null,0,1,null,_)),o.qb(32,16384,null,0,u.j,[o.O,o.K],{ngIf:[0,"ngIf"]},null)],(function(n,l){var t=l.component;n(l,4,0,"secondary"),n(l,11,0,"arrow-back"),n(l,30,0,t.usuario.historicoCashBack),n(l,32,0,t.filtroOpened)}),(function(n,l){var t=l.component;n(l,24,0,t.usuario.saldo&&""!=t.usuario.saldo&&0!=t.usuario.saldo?t.usuario.saldo:"0,00")}))}function f(n){return o.Kb(0,[(n()(),o.rb(0,0,null,null,1,"app-clube-extrato",[],null,null,null,P,h)),o.qb(1,114688,null,0,b,[g.a,d.m,s.a],null,null)],(function(n,l){n(l,1,0)}),null)}var p=o.nb("app-clube-extrato",b,f,{},{},[]),m=t("s7LF");class x{}t.d(l,"ClubeExtratoPageModuleNgFactory",(function(){return v}));var v=o.ob(e,[],(function(n){return o.Ab([o.Bb(512,o.k,o.Z,[[8,[c.a,p]],[3,o.k],o.w]),o.Bb(4608,u.l,u.k,[o.t,[2,u.y]]),o.Bb(4608,m.l,m.l,[]),o.Bb(4608,a.c,a.c,[o.y,o.g]),o.Bb(4608,a.Hb,a.Hb,[a.c,o.k,o.q]),o.Bb(4608,a.Lb,a.Lb,[a.c,o.k,o.q]),o.Bb(1073742336,u.b,u.b,[]),o.Bb(1073742336,m.k,m.k,[]),o.Bb(1073742336,m.e,m.e,[]),o.Bb(1073742336,a.Db,a.Db,[]),o.Bb(1073742336,d.p,d.p,[[2,d.u],[2,d.m]]),o.Bb(1073742336,x,x,[]),o.Bb(1073742336,e,e,[]),o.Bb(1024,d.k,(function(){return[[{path:"",component:b}]]}),[])])}))}}]);