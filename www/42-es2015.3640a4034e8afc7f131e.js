(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{FUgk:function(n,l,t){"use strict";t.r(l);var o=t("8Y7J");class e{}var u=t("pMnS"),i=t("MKJQ"),r=t("sZkV"),a=t("SVse"),c=t("s7LF"),s=t("H+bZ"),b=t("qfBg"),g=t("EnSQ"),p=t("6mc2");class f{constructor(n,l,t,o,e){this.platform=n,this.api=l,this.user=t,this.data=o,this.tools=e,this.nsorte=[],this.nsorteorig=[],this.nsorteorig2=[],this.dataAgora="",this.horaAgora="",this.busca="",this.ios=!1,this.ios=this.platform.is("ios")}ngOnInit(){}ionViewDidEnter(){this.loadData()}loadData(n){const[l,t,o]=(new Date).toLocaleDateString("pt-BR").split("/");this.dataAgora=`${l}/${t}/${o.slice(-2)}`,this.horaAgora=(new Date).toLocaleTimeString("pt-BR").slice(0,5);var e=[],u=this.user.getUsuarioClube();this.api.clube("listarpremios",{clienteId:u._id},l=>{console.log("[listarpremios-nsorte] ",l);var t=l.data.filter(n=>"nsorte"==n.tipo);for(let n of t){var o=e.find(l=>l.data+""==n.data+"");o?(o.numeros.push(n.nsorte+""),o.label=o.label+"##"+n.nsorte):e.push({data:n.data+"",numeros:[n.nsorte+""],label:n.nsorte})}this.nsorte=e,console.log("\u{1f680} ~ this.nsorte:",this.nsorte),this.nsorteorig=e,n&&n.target.complete()})}buscar(n){setTimeout(()=>{let n=JSON.parse(JSON.stringify(this.nsorteorig));""!=this.busca&&this.busca||(this.nsorte=n),this.nsorte=n.filter(n=>(n.numeros=n.numeros.filter(n=>n.indexOf(this.busca.toLowerCase())>-1),n.label.toLowerCase().indexOf(this.busca.toLowerCase())>-1))},0|n)}clearBusca(){this.busca="",this.nsorte=this.nsorteorig}}var d=o.pb({encapsulation:0,styles:[["ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]   .button-back[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#fff;height:24px;width:24px}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{display:flex;justify-content:center;color:#fff;font-size:16px;font-style:normal;font-weight:700;line-height:normal}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   .space[_ngcontent-%COMP%]{width:48px;height:24px}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   .space[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{width:100%;height:100%}ion-card[_ngcontent-%COMP%]{margin:0;box-shadow:none}.data[_ngcontent-%COMP%]{text-align:center;color:#1e1e1e;font-family:Poppins;font-size:18px;font-style:normal;font-weight:700;line-height:normal}.numero[_ngcontent-%COMP%]{text-align:center;color:#484848;font-family:Poppins;font-size:16px;font-style:normal;font-weight:400;line-height:normal;margin:16px 0 0}.nsorte-item[_ngcontent-%COMP%] + .nsorte-item[_ngcontent-%COMP%]{border:1px solid #eaeaea}.nsorte-item[_ngcontent-%COMP%]{padding:16px}.atualizar-content[_ngcontent-%COMP%]{display:flex;color:#484848;font-family:Poppins;font-size:12px;font-style:normal;font-weight:400;line-height:normal}.atualizar-item[_ngcontent-%COMP%]{flex:1;display:flex;justify-content:center;align-items:center;display:flex;color:#484848;font-family:Poppins;font-size:12px;font-style:normal;font-weight:400;line-height:normal}.form-control[_ngcontent-%COMP%]{margin-bottom:0}.form-content[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   .form-input[type=text][_ngcontent-%COMP%]{margin:4px 2px;padding:8px 20px!important;height:36px;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);color:#009efa}.form-content[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   .form-input[type=text][_ngcontent-%COMP%]::-webkit-input-placeholder{color:#009efa}.form-content[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   .form-input[type=text][_ngcontent-%COMP%]::-moz-placeholder{color:#009efa}.form-content[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   .form-input[type=text][_ngcontent-%COMP%]::-ms-input-placeholder{color:#009efa}.form-content[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   .form-input[type=text][_ngcontent-%COMP%]::placeholder{color:#009efa}.form-icon[_ngcontent-%COMP%]{position:absolute;top:12px;right:10px;font-size:19px;color:#009efa}.lista-vazia[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;text-align:center;height:calc(100vh - 132px - env(safe-area-inset-bottom) - env(safe-area-inset-top))}ion-content[_ngcontent-%COMP%]   .form-control-input[_ngcontent-%COMP%]{margin-top:24px;height:48px;align-items:center;border-radius:30px;border:2px solid #e2e2e2!important;background:#fff;display:flex;position:relative;color:#484848;font-family:Poppins;font-size:12px;font-style:normal;font-weight:400;line-height:normal;padding-left:24px;padding-right:16px}ion-content[_ngcontent-%COMP%]   .form-control-input[_ngcontent-%COMP%]   .name-field[_ngcontent-%COMP%]{top:-7px;left:22px;color:#484848;font-size:12px;font-style:normal;font-weight:400;background-color:#fff;position:absolute;width:-webkit-max-content;width:-moz-max-content;width:max-content;line-height:100%;padding:0 2px}ion-content[_ngcontent-%COMP%]   .form-control-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{color:#484848;align-items:center;background:unset;border:unset;width:-webkit-fill-available;font-size:16px}ion-content[_ngcontent-%COMP%]   .form-control-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{outline:0}ion-content[_ngcontent-%COMP%]   .form-control-input[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{height:24px;width:24px}ion-content[_ngcontent-%COMP%]   .form-control-input[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{height:100%;width:100%}ion-content[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%]{padding:16px;display:flex;justify-content:center;align-items:flex-end}ion-content[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%]   ion-item-divider[_ngcontent-%COMP%]{width:100%;min-height:1px!important;height:1px!important}"]],data:{}});function h(n){return o.Kb(0,[(n()(),o.rb(0,0,null,null,4,"div",[["class","lista-vazia"]],null,null,null,null,null)),(n()(),o.rb(1,0,null,null,3,"h3",[],null,null,null,null,null)),(n()(),o.rb(2,0,null,null,2,"ion-text",[["color","secondary"]],null,null,null,i.Ob,i.S)),o.qb(3,49152,null,0,r.wb,[o.h,o.l,o.y],{color:[0,"color"]},null),(n()(),o.Jb(-1,0,["Nenhum n\xfamero da sorte encontrado."]))],(function(n,l){n(l,3,0,"secondary")}),null)}function m(n){return o.Kb(0,[(n()(),o.rb(0,0,null,null,1,"div",[["class","numero"]],null,null,null,null,null)),(n()(),o.Jb(1,null,[" "," "]))],null,(function(n,l){n(l,1,0,l.context.$implicit)}))}function C(n){return o.Kb(0,[(n()(),o.rb(0,0,null,null,4,"div",[["class","nsorte-item"]],null,null,null,null,null)),(n()(),o.rb(1,0,null,null,1,"div",[["class","data ion-margin-bottom"]],null,null,null,null,null)),(n()(),o.Jb(2,null,["",""])),(n()(),o.gb(16777216,null,null,1,null,m)),o.qb(4,278528,null,0,a.i,[o.O,o.K,o.r],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){n(l,4,0,l.context.$implicit.numeros)}),(function(n,l){n(l,2,0,l.context.$implicit.data)}))}function O(n){return o.Kb(0,[(n()(),o.rb(0,0,null,null,3,"ion-card",[],null,null,null,i.fb,i.g)),o.qb(1,49152,null,0,r.o,[o.h,o.l,o.y],null,null),(n()(),o.gb(16777216,null,0,1,null,C)),o.qb(3,278528,null,0,a.i,[o.O,o.K,o.r],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){n(l,3,0,l.component.nsorte)}),null)}function M(n){return o.Kb(0,[(n()(),o.rb(0,0,null,null,3,"div",[["class","is-ios ion-margin-top"]],null,null,null,null,null)),(n()(),o.Jb(-1,null,[" * A Apple n\xe3o est\xe1 envolvida de forma alguma com o concurso ou sorteio. "])),(n()(),o.rb(2,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),o.Jb(-1,null,[" * The Apple is not involved in any way with the contest or sweepstakes. "]))],null,null)}function x(n){return o.Kb(0,[(n()(),o.rb(0,0,null,null,13,"ion-header",[],null,null,null,i.lb,i.p)),o.qb(1,49152,null,0,r.D,[o.h,o.l,o.y],null,null),(n()(),o.rb(2,0,null,0,11,"ion-toolbar",[["color","secondary"]],null,null,null,i.Rb,i.V)),o.qb(3,49152,null,0,r.Bb,[o.h,o.l,o.y],{color:[0,"color"]},null),(n()(),o.rb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,i.bb,i.f)),o.qb(5,49152,null,0,r.n,[o.h,o.l,o.y],null,null),(n()(),o.rb(6,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==o.Db(n,8).onClick(t)&&e),e}),i.Y,i.c)),o.qb(7,49152,null,0,r.i,[o.h,o.l,o.y],null,null),o.qb(8,16384,null,0,r.j,[[2,r.hb],r.Ib,r.e],null,null),(n()(),o.rb(9,0,null,0,1,"div",[["class","title"]],null,null,null,null,null)),(n()(),o.Jb(-1,null,["Meus N\xfameros da Sorte"])),(n()(),o.rb(11,0,null,0,2,"div",[["class","space"],["slot","end"]],null,[[null,"click"]],(function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.loadData()&&o),o}),null,null)),(n()(),o.rb(12,0,null,null,1,"ion-icon",[["name","refresh"]],null,null,null,i.mb,i.q)),o.qb(13,49152,null,0,r.E,[o.h,o.l,o.y],{name:[0,"name"]},null),(n()(),o.rb(14,0,null,null,29,"ion-content",[["class","ion-padding"]],null,null,null,i.ib,i.m)),o.qb(15,49152,null,0,r.w,[o.h,o.l,o.y],null,null),(n()(),o.rb(16,0,null,0,3,"ion-refresher",[["pullFactor","0.5"],["pullMax","200"],["pullMin","100"],["slot","fixed"]],null,[[null,"ionRefresh"]],(function(n,l,t){var o=!0;return"ionRefresh"===l&&(o=!1!==n.component.loadData(t)&&o),o}),i.Db,i.G)),o.qb(17,49152,null,0,r.cb,[o.h,o.l,o.y],{pullFactor:[0,"pullFactor"],pullMax:[1,"pullMax"],pullMin:[2,"pullMin"]},null),(n()(),o.rb(18,0,null,0,1,"ion-refresher-content",[],null,null,null,i.Cb,i.H)),o.qb(19,49152,null,0,r.db,[o.h,o.l,o.y],null,null),(n()(),o.rb(20,0,null,0,11,"div",[["class","form-control-input"]],null,null,null,null,null)),(n()(),o.rb(21,0,null,null,1,"label",[["class","name-field"]],null,null,null,null,null)),(n()(),o.Jb(-1,null,["Buscar"])),(n()(),o.rb(23,0,null,null,5,"input",[["autocomplete","off"],["class","form-input"],["id","nome"],["placeholder","N\xfamero da sorte"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"focusout"],[null,"keyup.enter"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(n,l,t){var e=!0,u=n.component;return"input"===l&&(e=!1!==o.Db(n,24)._handleInput(t.target.value)&&e),"blur"===l&&(e=!1!==o.Db(n,24).onTouched()&&e),"compositionstart"===l&&(e=!1!==o.Db(n,24)._compositionStart()&&e),"compositionend"===l&&(e=!1!==o.Db(n,24)._compositionEnd(t.target.value)&&e),"ngModelChange"===l&&(e=!1!==(u.busca=t)&&e),"ngModelChange"===l&&(e=!1!==u.buscar(400)&&e),"focusout"===l&&(e=!1!==u.buscar()&&e),"keyup.enter"===l&&(e=!1!==u.buscar()&&e),e}),null,null)),o.qb(24,16384,null,0,c.b,[o.C,o.l,[2,c.a]],null,null),o.Gb(1024,null,c.f,(function(n){return[n]}),[c.b]),o.qb(26,671744,null,0,c.i,[[8,null],[8,null],[8,null],[6,c.f]],{model:[0,"model"]},{update:"ngModelChange"}),o.Gb(2048,null,c.g,null,[c.i]),o.qb(28,16384,null,0,c.h,[[4,c.g]],null,null),(n()(),o.rb(29,0,null,null,2,"div",[["class","icon"]],null,[[null,"click"]],(function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.buscar()&&o),o}),null,null)),(n()(),o.rb(30,0,null,null,1,"ion-icon",[["name","search"]],null,null,null,i.mb,i.q)),o.qb(31,49152,null,0,r.E,[o.h,o.l,o.y],{name:[0,"name"]},null),(n()(),o.gb(16777216,null,0,1,null,h)),o.qb(33,16384,null,0,a.j,[o.O,o.K],{ngIf:[0,"ngIf"]},null),(n()(),o.gb(16777216,null,0,1,null,O)),o.qb(35,16384,null,0,a.j,[o.O,o.K],{ngIf:[0,"ngIf"]},null),(n()(),o.rb(36,0,null,0,2,"div",[["class","divider"]],null,null,null,null,null)),(n()(),o.rb(37,0,null,null,1,"ion-item-divider",[],null,null,null,i.rb,i.w)),o.qb(38,49152,null,0,r.K,[o.h,o.l,o.y],null,null),(n()(),o.rb(39,0,null,0,2,"div",[["class","atualizar-content ion-margin-top"]],null,null,null,null,null)),(n()(),o.rb(40,0,null,null,1,"div",[["class","atualizar-item"]],null,null,null,null,null)),(n()(),o.Jb(41,null,["Dados atualizados at\xe9 "," \xe0s ",""])),(n()(),o.gb(16777216,null,0,1,null,M)),o.qb(43,16384,null,0,a.j,[o.O,o.K],{ngIf:[0,"ngIf"]},null)],(function(n,l){var t=l.component;n(l,3,0,"secondary"),n(l,13,0,"refresh"),n(l,17,0,"0.5","200","100"),n(l,26,0,t.busca),n(l,31,0,"search"),n(l,33,0,0==t.nsorte.length),n(l,35,0,t.nsorte.length>0),n(l,43,0,!1)}),(function(n,l){var t=l.component;n(l,23,0,o.Db(l,28).ngClassUntouched,o.Db(l,28).ngClassTouched,o.Db(l,28).ngClassPristine,o.Db(l,28).ngClassDirty,o.Db(l,28).ngClassValid,o.Db(l,28).ngClassInvalid,o.Db(l,28).ngClassPending),n(l,41,0,t.dataAgora,t.horaAgora)}))}function P(n){return o.Kb(0,[(n()(),o.rb(0,0,null,null,1,"app-clube-nsorte",[],null,null,null,x,d)),o.qb(1,114688,null,0,f,[r.Kb,s.a,b.a,g.a,p.a],null,null)],(function(n,l){n(l,1,0)}),null)}var _=o.nb("app-clube-nsorte",f,P,{},{},[]),y=t("iInd");class v{}t.d(l,"ClubeNsortePageModuleNgFactory",(function(){return w}));var w=o.ob(e,[],(function(n){return o.Ab([o.Bb(512,o.k,o.Z,[[8,[u.a,_]],[3,o.k],o.w]),o.Bb(4608,a.l,a.k,[o.t,[2,a.y]]),o.Bb(4608,c.l,c.l,[]),o.Bb(4608,r.c,r.c,[o.y,o.g]),o.Bb(4608,r.Hb,r.Hb,[r.c,o.k,o.q]),o.Bb(4608,r.Lb,r.Lb,[r.c,o.k,o.q]),o.Bb(1073742336,a.b,a.b,[]),o.Bb(1073742336,c.k,c.k,[]),o.Bb(1073742336,c.e,c.e,[]),o.Bb(1073742336,r.Db,r.Db,[]),o.Bb(1073742336,y.p,y.p,[[2,y.u],[2,y.m]]),o.Bb(1073742336,v,v,[]),o.Bb(1073742336,e,e,[]),o.Bb(1024,y.k,(function(){return[[{path:"",component:f}]]}),[])])}))}}]);