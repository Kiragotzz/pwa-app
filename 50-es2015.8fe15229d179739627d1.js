(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{hndl:function(n,l,t){"use strict";t.r(l);var e=t("8Y7J");class o{}var u=t("pMnS"),i=t("MKJQ"),s=t("sZkV"),c=t("iInd"),r=t("SVse"),a=t("mrSG");class g{constructor(n){this.navCtrl=n,this.slideIndex=0,this.width=10,this.slideOpts={initialSlide:0,speed:400,loop:!1,autoplay:{delay:6e3,disableOnInteraction:!0}}}ngOnInit(){let n=(new Date).getTime(),l=new Date(2024,10,19,0,0,0).getTime(),t=new Date(2024,10,19,23,59,59).getTime();n>=l&&n<=t&&(this.timeBlackFriday=!0)}onSlideChange(){return a.__awaiter(this,void 0,void 0,(function*(){this.slideIndex=yield this.slides.getActiveIndex(),this.width={0:10,1:25,2:50,3:75,4:100}[this.slideIndex]}))}goToSlide(n){return a.__awaiter(this,void 0,void 0,(function*(){n<0||n>4||(this.slideIndex=n,yield this.slides.slideTo(this.slideIndex))}))}goToHome(){this.navCtrl.navigateRoot("clube"),this.goToSlide(0)}}var d=e.pb({encapsulation:0,styles:[["ion-content[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]{padding-top:env(safe-area-inset-top);width:100%;display:flex;justify-content:space-between;position:absolute;top:0;z-index:1;color:#fff}ion-content[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]:last-child{justify-content:flex-end}ion-content[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{cursor:pointer;display:flex;align-items:center;font-weight:300;gap:12px;height:72px;padding:0 24px}ion-content[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]{height:100%;z-index:0;background-color:var(--ion-color-primary)}ion-content[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]{display:flex;flex-direction:column}ion-content[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   .img-content[_ngcontent-%COMP%]{position:relative;flex:1;width:100%;height:calc(100vh - 260px);overflow:hidden}ion-content[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   .img-content[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]{height:100%;width:100%;-webkit-filter:brightness(.2);filter:brightness(.2);background-image:url(bg.ba155cb5b8148320552b.jpeg);background-repeat:no-repeat;background-position:center center;background-size:cover;z-index:0}ion-content[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   .img-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute;z-index:1}ion-content[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   .img-content[_ngcontent-%COMP%]   .slide-0[_ngcontent-%COMP%]{bottom:-50px;left:50%;transform:translateX(-54%);max-width:unset;max-height:unset;width:125%}ion-content[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   .img-content[_ngcontent-%COMP%]   .slide-1[_ngcontent-%COMP%]{bottom:-30px;left:50%;transform:translateX(-50%);max-width:unset;width:110%}ion-content[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   .img-content[_ngcontent-%COMP%]   .slide-2[_ngcontent-%COMP%]{bottom:-185px;left:50%;transform:translateX(-50%);max-width:unset;max-height:unset;width:85%}ion-content[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   .img-content[_ngcontent-%COMP%]   .slide-3[_ngcontent-%COMP%]{bottom:-250px;left:50%;transform:translateX(-54%);max-width:unset;max-height:unset;width:85%}ion-content[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   .img-content[_ngcontent-%COMP%]   .slide-4[_ngcontent-%COMP%]{top:50%;left:50%;transform:translate(-50%,-50%);max-width:220px}ion-content[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]{background-color:var(--ion-color-primary);min-height:280px;width:100%;padding:48px 24px;color:#fff;text-align:center;display:flex;flex-direction:column;gap:24px;align-items:center}ion-content[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0;font-size:28px;font-weight:700}ion-content[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;font-size:18px;font-weight:300;line-height:30px}ion-content[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:var(--ion-color-secondary);width:256px;max-width:80%;height:48px;border-radius:30px;color:#fff}ion-content[_ngcontent-%COMP%]   .progress-content[_ngcontent-%COMP%]{width:100%;position:absolute;bottom:0;z-index:1}ion-content[_ngcontent-%COMP%]   .progress-content[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%]{height:16px;background-color:#004cf9;transition:all .3s ease-in-out}ion-content[_ngcontent-%COMP%]   .progress-content[_ngcontent-%COMP%]   .progress-10[_ngcontent-%COMP%]{width:10%}ion-content[_ngcontent-%COMP%]   .progress-content[_ngcontent-%COMP%]   .progress-25[_ngcontent-%COMP%]{width:25%}ion-content[_ngcontent-%COMP%]   .progress-content[_ngcontent-%COMP%]   .progress-50[_ngcontent-%COMP%]{width:50%}ion-content[_ngcontent-%COMP%]   .progress-content[_ngcontent-%COMP%]   .progress-75[_ngcontent-%COMP%]{width:75%}ion-content[_ngcontent-%COMP%]   .progress-content[_ngcontent-%COMP%]   .progress-100[_ngcontent-%COMP%]{width:100%;border-top-right-radius:unset;border-bottom-right-radius:unset}"]],data:{}});function b(n){return e.Kb(0,[e.Hb(671088640,1,{slides:0}),(n()(),e.rb(1,0,null,null,67,"ion-content",[],null,null,null,i.ib,i.m)),e.qb(2,49152,null,0,s.w,[e.h,e.l,e.y],null,null),(n()(),e.rb(3,0,null,0,8,"div",[["class","navigation"]],null,null,null,null,null)),(n()(),e.rb(4,0,null,null,3,"div",[["class","previous"]],[[4,"opacity",null]],[[null,"click"]],(function(n,l,t){var e=!0,o=n.component;return"click"===l&&(e=!1!==o.goToSlide(o.slideIndex-1)&&e),e}),null,null)),(n()(),e.rb(5,0,null,null,1,"ion-icon",[["name","chevron-back-outline"]],null,null,null,i.mb,i.q)),e.qb(6,49152,null,0,s.E,[e.h,e.l,e.y],{name:[0,"name"]},null),(n()(),e.Jb(-1,null,[" Anterior "])),(n()(),e.rb(8,0,null,null,3,"div",[["class","next"]],[[4,"opacity",null]],[[null,"click"]],(function(n,l,t){var e=!0,o=n.component;return"click"===l&&(e=!1!==o.goToSlide(o.slideIndex+1)&&e),e}),null,null)),(n()(),e.Jb(-1,null,[" Pr\xf3ximo "])),(n()(),e.rb(10,0,null,null,1,"ion-icon",[["name","chevron-forward-outline"]],null,null,null,i.mb,i.q)),e.qb(11,49152,null,0,s.E,[e.h,e.l,e.y],{name:[0,"name"]},null),(n()(),e.rb(12,0,null,0,54,"ion-slides",[],null,[[null,"ionSlideDidChange"]],(function(n,l,t){var e=!0;return"ionSlideDidChange"===l&&(e=!1!==n.component.onSlideChange()&&e),e}),i.Jb,i.N)),e.qb(13,49152,[[1,4]],0,s.qb,[e.h,e.l,e.y],{options:[0,"options"]},null),(n()(),e.rb(14,0,null,0,9,"ion-slide",[],null,null,null,i.Ib,i.M)),e.qb(15,49152,null,0,s.pb,[e.h,e.l,e.y],null,null),(n()(),e.rb(16,0,null,0,2,"div",[["class","img-content"]],null,null,null,null,null)),(n()(),e.rb(17,0,null,null,0,"div",[["class","bg"]],null,null,null,null,null)),(n()(),e.rb(18,0,null,null,0,"img",[["class","slide-0"],["src","assets/img/clube/welcome/0.png"]],null,null,null,null,null)),(n()(),e.rb(19,0,null,0,4,"div",[["class","text-content"]],null,null,null,null,null)),(n()(),e.rb(20,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),e.Jb(-1,null,["Conhe\xe7a o novo Clube!"])),(n()(),e.rb(22,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e.Jb(-1,null,["Novas funcionalidades, ofertas ainda mais exclusivas e uma navega\xe7\xe3o otimizada. Tudo isso mantendo a qualidade de sempre!"])),(n()(),e.rb(24,0,null,0,9,"ion-slide",[],null,null,null,i.Ib,i.M)),e.qb(25,49152,null,0,s.pb,[e.h,e.l,e.y],null,null),(n()(),e.rb(26,0,null,0,2,"div",[["class","img-content"]],null,null,null,null,null)),(n()(),e.rb(27,0,null,null,0,"div",[["class","bg"]],null,null,null,null,null)),(n()(),e.rb(28,0,null,null,0,"img",[["class","slide-1"],["src","assets/img/clube/welcome/1.png"]],null,null,null,null,null)),(n()(),e.rb(29,0,null,0,4,"div",[["class","text-content"]],null,null,null,null,null)),(n()(),e.rb(30,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),e.Jb(-1,null,["Cashback e Tokens"])),(n()(),e.rb(32,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e.Jb(-1,null,["Controle seu cashback e acesse o seu token para resgatar seus pr\xeamios."])),(n()(),e.rb(34,0,null,0,9,"ion-slide",[],null,null,null,i.Ib,i.M)),e.qb(35,49152,null,0,s.pb,[e.h,e.l,e.y],null,null),(n()(),e.rb(36,0,null,0,2,"div",[["class","img-content"]],null,null,null,null,null)),(n()(),e.rb(37,0,null,null,0,"div",[["class","bg"]],null,null,null,null,null)),(n()(),e.rb(38,0,null,null,0,"img",[["class","slide-2"],["src","assets/img/clube/welcome/2.png"]],null,null,null,null,null)),(n()(),e.rb(39,0,null,0,4,"div",[["class","text-content"]],null,null,null,null,null)),(n()(),e.rb(40,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),e.Jb(-1,null,["Descont\xf4metro"])),(n()(),e.rb(42,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e.Jb(-1,null,["Acompanhe sua economia nos \xfaltimos 12 meses com o Descont\xf4metro!"])),(n()(),e.rb(44,0,null,0,9,"ion-slide",[],null,null,null,i.Ib,i.M)),e.qb(45,49152,null,0,s.pb,[e.h,e.l,e.y],null,null),(n()(),e.rb(46,0,null,0,2,"div",[["class","img-content"]],null,null,null,null,null)),(n()(),e.rb(47,0,null,null,0,"div",[["class","bg"]],null,null,null,null,null)),(n()(),e.rb(48,0,null,null,0,"img",[["class","slide-3"],["src","assets/img/clube/welcome/3.png"]],null,null,null,null,null)),(n()(),e.rb(49,0,null,0,4,"div",[["class","text-content"]],null,null,null,null,null)),(n()(),e.rb(50,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),e.Jb(-1,null,["N\xedveis"])),(n()(),e.rb(52,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e.Jb(-1,null,["A cada vez que voc\xea utiliza o seu Clube, mais vantagens voc\xea garante, gra\xe7as ao novo sistema de n\xedveis do Clube!"])),(n()(),e.rb(54,0,null,0,12,"ion-slide",[],null,null,null,i.Ib,i.M)),e.qb(55,49152,null,0,s.pb,[e.h,e.l,e.y],null,null),(n()(),e.rb(56,0,null,0,2,"div",[["class","img-content"]],null,null,null,null,null)),(n()(),e.rb(57,0,null,null,0,"div",[["class","bg"]],null,null,null,null,null)),(n()(),e.rb(58,0,null,null,0,"img",[["class","slide-4"]],[[8,"src",4]],null,null,null,null)),(n()(),e.rb(59,0,null,0,7,"div",[["class","text-content"]],null,null,null,null,null)),(n()(),e.rb(60,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),e.Jb(-1,null,["E a\xed, pronto para as novidades?"])),(n()(),e.rb(62,0,null,null,4,"button",[],null,[[null,"click"]],(function(n,l,t){var o=!0;return"click"===l&&(o=!1!==e.Db(n,63).onClick()&&o),"click"===l&&(o=!1!==e.Db(n,65).onClick(t)&&o),o}),null,null)),e.qb(63,16384,null,0,c.n,[c.m,c.a,[8,null],e.C,e.l],{routerLink:[0,"routerLink"]},null),e.Eb(64,2),e.qb(65,737280,null,0,s.Nb,[r.g,s.Ib,e.l,c.m,[2,c.n]],null,null),(n()(),e.Jb(-1,null,["Pronto!"])),(n()(),e.rb(67,0,null,0,1,"div",[["class","progress-content"]],null,null,null,null,null)),(n()(),e.rb(68,0,null,null,0,"div",[["class","progress"]],[[4,"width","%"],[4,"border-top-right-radius","px"],[4,"border-bottom-right-radius","px"]],null,null,null,null))],(function(n,l){var t=l.component;n(l,6,0,"chevron-back-outline"),n(l,11,0,"chevron-forward-outline"),n(l,13,0,t.slideOpts);var e=n(l,64,0,"/","clube");n(l,63,0,e),n(l,65,0)}),(function(n,l){var t=l.component;n(l,4,0,0==t.slideIndex?0:1),n(l,8,0,4==t.slideIndex?0:1),n(l,58,0,t.timeBlackFriday?"assets/img/clube/logo-clube-bf.png":"assets/img/clube/logo-clube.png"),n(l,68,0,t.width,100==t.width?0:16,100==t.width?0:16)}))}function p(n){return e.Kb(0,[(n()(),e.rb(0,0,null,null,1,"app-clube-welcome",[],null,null,null,b,d)),e.qb(1,114688,null,0,g,[s.Ib],null,null)],(function(n,l){n(l,1,0)}),null)}var h=e.nb("app-clube-welcome",g,p,{},{},[]),C=t("s7LF");class m{}t.d(l,"ClubeWelcomePageModuleNgFactory",(function(){return M}));var M=e.ob(o,[],(function(n){return e.Ab([e.Bb(512,e.k,e.Z,[[8,[u.a,h]],[3,e.k],e.w]),e.Bb(4608,r.l,r.k,[e.t,[2,r.y]]),e.Bb(4608,C.l,C.l,[]),e.Bb(4608,s.c,s.c,[e.y,e.g]),e.Bb(4608,s.Hb,s.Hb,[s.c,e.k,e.q]),e.Bb(4608,s.Lb,s.Lb,[s.c,e.k,e.q]),e.Bb(1073742336,r.b,r.b,[]),e.Bb(1073742336,C.k,C.k,[]),e.Bb(1073742336,C.e,C.e,[]),e.Bb(1073742336,s.Db,s.Db,[]),e.Bb(1073742336,c.p,c.p,[[2,c.u],[2,c.m]]),e.Bb(1073742336,m,m,[]),e.Bb(1073742336,o,o,[]),e.Bb(1024,c.k,(function(){return[[{path:"",component:g}]]}),[])])}))}}]);