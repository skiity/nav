import{V as I,X as F}from"./chunk-FMQGI4JZ.js";import{Aa as r,Hb as m,Jb as l,Lb as p,Lc as v,Sb as h,Zb as g,gc as y,ma as i,mb as d,na as a,r as c,s,tb as f,ub as u}from"./chunk-BVKUH2VW.js";function b(e,M){if(e&1&&g(0,"span",0),e&2){let n=y();l("nzType",n.iconType)}}var T=(()=>{class e{constructor(){this.formStatusChanges=new s(1)}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275prov=i({token:e,factory:e.\u0275fac})}}return e})(),j=(()=>{class e{constructor(){this.noFormStatus=new c(!1)}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275prov=i({token:e,factory:e.\u0275fac})}}return e})(),k={error:"close-circle-fill",validating:"loading",success:"check-circle-fill",warning:"exclamation-circle-fill"},C=(()=>{class e{constructor(n){this.cdr=n,this.status="",this.iconType=null}ngOnChanges(n){this.updateIcon()}updateIcon(){this.iconType=this.status?k[this.status]:null,this.cdr.markForCheck()}static{this.\u0275fac=function(t){return new(t||e)(d(v))}}static{this.\u0275cmp=f({type:e,selectors:[["nz-form-item-feedback-icon"]],hostAttrs:[1,"ant-form-item-feedback-icon"],hostVars:8,hostBindings:function(t,o){t&2&&p("ant-form-item-feedback-icon-error",o.status==="error")("ant-form-item-feedback-icon-warning",o.status==="warning")("ant-form-item-feedback-icon-success",o.status==="success")("ant-form-item-feedback-icon-validating",o.status==="validating")},inputs:{status:"status"},exportAs:["nzFormFeedbackIcon"],features:[r],decls:1,vars:1,consts:[["nz-icon","",3,"nzType"]],template:function(t,o){t&1&&m(0,b,1,1,"span",0),t&2&&h(o.iconType?0:-1)},dependencies:[F,I],encapsulation:2,changeDetection:0})}}return e})(),S=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275mod=u({type:e})}static{this.\u0275inj=a({imports:[C]})}}return e})();export{T as a,j as b,C as c,S as d};
