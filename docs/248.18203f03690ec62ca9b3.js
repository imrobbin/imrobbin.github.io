(self.webpackChunkimrobbin=self.webpackChunkimrobbin||[]).push([[248],{4248:(e,t,r)=>{"use strict";r.r(t),r.d(t,{ContactPageModule:()=>N});var a=r(1116),n=r(6304),o=r(1041),i=r(5366),s=r(7636),m=r(8520),l=r(1293),g=r(5965),u=r(5078),c=r(7307),Z=r(7064),d=r(3070),p=r(9550),f=r(4369),q=r(2312);function T(e,t){1&e&&(i.TgZ(0,"mat-error"),i._uU(1," Please provide a name. "),i.qZA())}function A(e,t){1&e&&(i.TgZ(0,"mat-error"),i._uU(1," Please provide an email address. "),i.qZA())}function b(e,t){1&e&&(i.TgZ(0,"mat-error"),i._uU(1," Please provide a valid email. "),i.qZA())}function h(e,t){1&e&&(i.TgZ(0,"mat-error"),i._uU(1," Please provide a subject. "),i.qZA())}function v(e,t){1&e&&(i.TgZ(0,"mat-error"),i._uU(1," Subject must be at least 10 characters long. "),i.qZA())}function y(e,t){1&e&&(i.TgZ(0,"mat-error"),i._uU(1," Subject must be less than 50 characters long. "),i.qZA())}function x(e,t){1&e&&(i.TgZ(0,"mat-error"),i._uU(1," Please provide a message. "),i.qZA())}function U(e,t){1&e&&(i.TgZ(0,"mat-error"),i._uU(1," Messages must be at least 15 characters long. "),i.qZA())}function _(e,t){1&e&&(i.TgZ(0,"div",25),i._UZ(1,"mat-progress-bar",26),i.qZA())}const I=function(){return{padding:"64px 16px"}},C=function(){return{"margin-top":"64px"}};let M=(()=>{class e{constructor(e,t,r){this.formBuilder=e,this.messagesService=t,this.toastService=r,this.isSubmitting=!1,this.formContactMe=this.formBuilder.group({name:["",[o.kI.required]],email:["",[o.kI.required,o.kI.email]],subject:["",[o.kI.required,o.kI.minLength(10),o.kI.maxLength(50)]],message:["",[o.kI.required,o.kI.minLength(15)]]})}ngOnInit(){}ngOnDestroy(){}submitContactMe(){var e=this;return(0,n.Z)(function*(){if(e.formContactMe.invalid)console.log(e.formContactMe.errors);else try{e.isSubmitting=!0;const t=yield e.messagesService.addMessage(e.formContactMe.value);e.toastService.showToastMessage(t.message),e.formContactMe.reset()}catch(t){e.toastService.showToastMessage(t)}finally{e.isSubmitting=!1}})()}errorHandling(e,t){return this.formContactMe.controls[e].hasError(t)}}return e.\u0275fac=function(t){return new(t||e)(i.Y36(o.qu),i.Y36(s.K),i.Y36(m.k))},e.\u0275cmp=i.Xpm({type:e,selectors:[["app-contact-page"]],decls:66,vars:15,consts:[[3,"ngStyle.lt-md"],[1,"title-section"],[1,"mat-display-4","uppercase","title-bg"],[1,"mat-display-3","uppercase","no-margin"],[1,"selected"],["fxLayout","row wrap","fxLayoutGap","2% grid","fxLayout.lt-md","column"],["fxFlex","50%"],[2,"margin","0 16px"],[1,"mat-headline","uppercase"],[1,"mat-body-1"],["mat-list-icon","","color","primary"],["mat-line","",1,"mat-body-2"],["mat-line","",1,"mat-body-1"],[1,"full-width",3,"ngStyle.lt-md"],["novalidate","",3,"formGroup"],["fxLayout","row wrap","fxLayoutGap","8px grid","fxLayoutAlign","start","fxLayout.lt-md","column"],["appearance","outline",1,"full-width"],["matInput","","formControlName","name","type","text"],[4,"ngIf"],["matInput","","formControlName","email","type","email"],["matInput","","formControlName","subject","type","text"],["matInput","","formControlName","message"],[1,"progressBarContainer"],["class","progressBar",4,"ngIf"],["mat-stroked-button","","color","primary","type","button",1,"lg-btn","full-width",3,"disabled","click"],[1,"progressBar"],["mode","indeterminate"]],template:function(e,t){1&e&&(i.TgZ(0,"main",0),i.TgZ(1,"section",1),i.TgZ(2,"span",2),i._uU(3," Contact "),i.qZA(),i.TgZ(4,"span",3),i._uU(5," Get in "),i.TgZ(6,"span",4),i._uU(7,"touch"),i.qZA(),i.qZA(),i.qZA(),i.TgZ(8,"div",5),i.TgZ(9,"div",6),i.TgZ(10,"section",7),i.TgZ(11,"section"),i.TgZ(12,"span",8),i._uU(13,"Don't be shy"),i.qZA(),i.TgZ(14,"p",9),i._uU(15," Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions. "),i.qZA(),i.qZA(),i.TgZ(16,"section"),i.TgZ(17,"mat-list"),i.TgZ(18,"mat-list-item"),i.TgZ(19,"mat-icon",10),i._uU(20,"mail"),i.qZA(),i.TgZ(21,"div",11),i._uU(22,"Mail me"),i.qZA(),i.TgZ(23,"div",12),i._uU(24,"ravindraa.patle@gmail.com"),i.qZA(),i.qZA(),i.TgZ(25,"mat-list-item"),i.TgZ(26,"mat-icon",10),i._uU(27,"call"),i.qZA(),i.TgZ(28,"div",11),i._uU(29,"Call me"),i.qZA(),i.TgZ(30,"div",12),i._uU(31,"+91 7898009535"),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.TgZ(32,"div",6),i.TgZ(33,"div",13),i.TgZ(34,"form",14),i.TgZ(35,"div",15),i.TgZ(36,"div",6),i.TgZ(37,"mat-form-field",16),i.TgZ(38,"mat-label"),i._uU(39,"Name"),i.qZA(),i._UZ(40,"input",17),i.YNc(41,T,2,0,"mat-error",18),i.qZA(),i.qZA(),i.TgZ(42,"div",6),i.TgZ(43,"mat-form-field",16),i.TgZ(44,"mat-label"),i._uU(45,"Email"),i.qZA(),i._UZ(46,"input",19),i.YNc(47,A,2,0,"mat-error",18),i.YNc(48,b,2,0,"mat-error",18),i.qZA(),i.qZA(),i.qZA(),i.TgZ(49,"mat-form-field",16),i.TgZ(50,"mat-label"),i._uU(51,"Subject"),i.qZA(),i._UZ(52,"input",20),i.YNc(53,h,2,0,"mat-error",18),i.YNc(54,v,2,0,"mat-error",18),i.YNc(55,y,2,0,"mat-error",18),i.qZA(),i.TgZ(56,"mat-form-field",16),i.TgZ(57,"mat-label"),i._uU(58,"Message"),i.qZA(),i._UZ(59,"textarea",21),i.YNc(60,x,2,0,"mat-error",18),i.YNc(61,U,2,0,"mat-error",18),i.qZA(),i.TgZ(62,"div",22),i.YNc(63,_,2,0,"div",23),i.qZA(),i.TgZ(64,"button",24),i.NdJ("click",function(){return t.submitContactMe()}),i._uU(65," Contact me "),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA()),2&e&&(i.Q6J("ngStyle.lt-md",i.DdM(13,I)),i.xp6(33),i.Q6J("ngStyle.lt-md",i.DdM(14,C)),i.xp6(1),i.Q6J("formGroup",t.formContactMe),i.xp6(7),i.Q6J("ngIf",t.errorHandling("name","required")),i.xp6(6),i.Q6J("ngIf",t.errorHandling("email","required")),i.xp6(1),i.Q6J("ngIf",t.errorHandling("email","email")),i.xp6(5),i.Q6J("ngIf",t.errorHandling("subject","required")),i.xp6(1),i.Q6J("ngIf",t.errorHandling("subject","minlength")),i.xp6(1),i.Q6J("ngIf",t.errorHandling("subject","maxlength")),i.xp6(5),i.Q6J("ngIf",t.errorHandling("message","required")),i.xp6(1),i.Q6J("ngIf",t.errorHandling("message","minlength")),i.xp6(2),i.Q6J("ngIf",t.isSubmitting),i.xp6(1),i.Q6J("disabled",t.formContactMe.invalid))},directives:[l.Zl,g.xw,g.SQ,g.yH,u.i$,u.Tg,c.Hw,u.Nh,Z.X2,o._Y,o.JL,o.sg,g.Wh,d.KE,d.hX,p.Nt,o.Fj,o.JJ,o.u,a.O5,f.lW,d.TO,q.pW],styles:[""]}),e})();var w=r(766),J=r(2797),S=r(7154);let N=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[[o.UX,a.ez,w.Bz.forChild([{path:"",component:M}]),p.c,f.ot,J.QW,S.o9,u.ie,c.Ps,q.Cv]]}),e})()}}]);