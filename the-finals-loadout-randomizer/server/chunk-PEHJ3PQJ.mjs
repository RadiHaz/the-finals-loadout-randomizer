import './polyfills.server.mjs';
import{A as de,B as d,C as ce,D as he,E as S,L as fe,N as me,O as pe,P as ge,Q as ye,T as _e,X as ve,_ as Ce,a as te,b as ie,c as ne,d as F,e as re,f as L,g as V,h as D,i as se,j as w,k as A,l as G,m as oe,n as ae,o as h,p as m,q as O,r as B,s as le,t as R,u as _,v as l,w as u,x as p,y as ue,z as g}from"./chunk-IGWESTGS.mjs";import{a as c,b as y}from"./chunk-VVCT4QZE.mjs";var Xe=new D("NgValidators"),Je=new D("NgAsyncValidators");function Fe(t){return t!=null}function we(t){return ue(t)?te(t):t}function Ge(t){let e={};return t.forEach(n=>{e=n!=null?c(c({},e),n):e}),Object.keys(e).length===0?null:e}function Oe(t,e){return e.map(n=>n(t))}function Qe(t){return!t.validate}function Se(t){return t.map(e=>Qe(e)?e:n=>e.validate(n))}function et(t){if(!t)return null;let e=t.filter(Fe);return e.length==0?null:function(n){return Ge(Oe(n,e))}}function Ne(t){return t!=null?et(Se(t)):null}function tt(t){if(!t)return null;let e=t.filter(Fe);return e.length==0?null:function(n){let i=Oe(n,e).map(we);return ne(i).pipe(ie(Ge))}}function Pe(t){return t!=null?tt(Se(t)):null}function Ve(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function Te(t){return t._rawValidators}function xe(t){return t._rawAsyncValidators}function W(t){return t?Array.isArray(t)?t:[t]:[]}function P(t,e){return Array.isArray(t)?t.includes(e):t===e}function De(t,e){let n=W(e);return W(t).forEach(r=>{P(n,r)||n.push(r)}),n}function Ae(t,e){return W(e).filter(n=>!P(t,n))}var $=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Ne(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Pe(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,n){return this.control?this.control.hasError(e,n):!1}getError(e,n){return this.control?this.control.getError(e,n):null}},M=class extends ${get formDirective(){return null}get path(){return null}};var Y=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},it={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},$t=y(c({},it),{"[class.ng-submitted]":"isSubmitted"});var ke=(()=>{let e=class e extends Y{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(m(M,10))},e.\u0275dir=G({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,s){r&2&&_("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)("ng-submitted",s.isSubmitted)},features:[B]});let t=e;return t})();var b="VALID",N="INVALID",v="PENDING",E="DISABLED";function q(t){return(j(t)?t.validators:t)||null}function nt(t){return Array.isArray(t)?Ne(t):t||null}function Z(t,e){return(j(e)?e.asyncValidators:t)||null}function rt(t){return Array.isArray(t)?Pe(t):t||null}function j(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function He(t,e,n){let i=t.controls;if(!(e?Object.keys(i):i).length)throw new F(1e3,"");if(!i[n])throw new F(1001,"")}function je(t,e,n){t._forEachChild((i,r)=>{if(n[r]===void 0)throw new F(1002,"")})}var I=class{constructor(e,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===b}get invalid(){return this.status===N}get pending(){return this.status==v}get disabled(){return this.status===E}get enabled(){return this.status!==E}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(De(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(De(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Ae(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Ae(e,this._rawAsyncValidators))}hasValidator(e){return P(this._rawValidators,e)}hasAsyncValidator(e){return P(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(n=>{n.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=v,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=E,this.errors=null,this._forEachChild(i=>{i.disable(y(c({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(y(c({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!0))}enable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=b,this._forEachChild(i=>{i.enable(y(c({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(y(c({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===b||this.status===v)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?E:b}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=v,this._hasOwnPendingAsyncValidator=!0;let n=we(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(i=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(i,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(n.emitEvent!==!1)}get(e){let n=e;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((i,r)=>i&&i._find(r),this)}getError(e,n){let i=n?this.get(n):this;return i&&i.errors?i.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new O,this.statusChanges=new O}_calculateStatus(){return this._allControlsDisabled()?E:this.errors?N:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(v)?v:this._anyControlsHaveStatus(N)?N:b}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){j(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let n=this._parent&&this._parent.dirty;return!e&&!!n&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=nt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=rt(this._rawAsyncValidators)}},T=class extends I{constructor(e,n,i){super(q(n),Z(i,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,n){return this.controls[e]?this.controls[e]:(this.controls[e]=n,n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange),n)}addControl(e,n,i={}){this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(e,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}setControl(e,n,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],n&&this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,n={}){je(this,!0,e),Object.keys(e).forEach(i=>{He(this,!0,i),this.controls[i].setValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(Object.keys(e).forEach(i=>{let r=this.controls[i];r&&r.patchValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e={},n={}){this._forEachChild((i,r)=>{i.reset(e?e[r]:null,{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n),this._updateTouched(n),this.updateValueAndValidity(n)}getRawValue(){return this._reduceChildren({},(e,n,i)=>(e[i]=n.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(n,i)=>i._syncPendingControls()?!0:n);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(n=>{let i=this.controls[n];i&&e(i,n)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[n,i]of Object.entries(this.controls))if(this.contains(n)&&e(i))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(n,i,r)=>((i.enabled||this.disabled)&&(n[r]=i.value),n))}_reduceChildren(e,n){let i=e;return this._forEachChild((r,s)=>{i=n(i,r,s)}),i}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var K=new D("CallSetDisabledState",{providedIn:"root",factory:()=>U}),U="always";function be(t,e,n=U){X(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||n==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),ot(t,e),lt(t,e),at(t,e),st(t,e)}function Ee(t,e,n=!0){let i=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(i),e.valueAccessor.registerOnTouched(i)),k(t,e),t&&(e._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function x(t,e){t.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function st(t,e){if(e.valueAccessor.setDisabledState){let n=i=>{e.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}function X(t,e){let n=Te(t);e.validator!==null?t.setValidators(Ve(n,e.validator)):typeof n=="function"&&t.setValidators([n]);let i=xe(t);e.asyncValidator!==null?t.setAsyncValidators(Ve(i,e.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();x(e._rawValidators,r),x(e._rawAsyncValidators,r)}function k(t,e){let n=!1;if(t!==null){if(e.validator!==null){let r=Te(t);if(Array.isArray(r)&&r.length>0){let s=r.filter(a=>a!==e.validator);s.length!==r.length&&(n=!0,t.setValidators(s))}}if(e.asyncValidator!==null){let r=xe(t);if(Array.isArray(r)&&r.length>0){let s=r.filter(a=>a!==e.asyncValidator);s.length!==r.length&&(n=!0,t.setAsyncValidators(s))}}}let i=()=>{};return x(e._rawValidators,i),x(e._rawAsyncValidators,i),n}function ot(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&Ue(t,e)})}function at(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&Ue(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function Ue(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function lt(t,e){let n=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}function ut(t,e){t==null,X(t,e)}function dt(t,e){return k(t,e)}function ct(t,e){t._syncPendingControls(),e.forEach(n=>{let i=n.control;i.updateOn==="submit"&&i._pendingChange&&(n.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function ht(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function Me(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function Ie(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var f=class extends I{constructor(e=null,n,i){super(q(n),Z(i,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),j(n)&&(n.nonNullable||n.initialValueIsDefault)&&(Ie(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){this.value=this._pendingValue=e,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Me(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Me(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Ie(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var ft=t=>t instanceof f;var Le=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=G({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let t=e;return t})();var mt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=A({type:e}),e.\u0275inj=V({});let t=e;return t})();var pt=new D("NgModelWithFormControlWarning");var gt={provide:M,useExisting:re(()=>J)},J=(()=>{let e=class e extends M{constructor(i,r,s){super(),this.callSetDisabledState=s,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new O,this._setValidators(i),this._setAsyncValidators(r)}ngOnChanges(i){this._checkFormPresent(),i.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(k(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(i){let r=this.form.get(i.path);return be(r,i,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(i),r}getControl(i){return this.form.get(i.path)}removeControl(i){Ee(i.control||null,i,!1),ht(this.directives,i)}addFormGroup(i){this._setUpFormContainer(i)}removeFormGroup(i){this._cleanUpFormContainer(i)}getFormGroup(i){return this.form.get(i.path)}addFormArray(i){this._setUpFormContainer(i)}removeFormArray(i){this._cleanUpFormContainer(i)}getFormArray(i){return this.form.get(i.path)}updateModel(i,r){this.form.get(i.path).setValue(r)}onSubmit(i){return this.submitted=!0,ct(this.form,this.directives),this.ngSubmit.emit(i),i?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(i=void 0){this.form.reset(i),this.submitted=!1}_updateDomValue(){this.directives.forEach(i=>{let r=i.control,s=this.form.get(i.path);r!==s&&(Ee(r||null,i),ft(s)&&(be(s,i,this.callSetDisabledState),i.control=s))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(i){let r=this.form.get(i.path);ut(r,i),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(i){if(this.form){let r=this.form.get(i.path);r&&dt(r,i)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){X(this.form,this),this._oldForm&&k(this._oldForm,this)}_checkFormPresent(){this.form}};e.\u0275fac=function(r){return new(r||e)(m(Xe,10),m(Je,10),m(K,8))},e.\u0275dir=G({type:e,selectors:[["","formGroup",""]],hostBindings:function(r,s){r&1&&g("submit",function(o){return s.onSubmit(o)})("reset",function(){return s.onReset()})},inputs:{form:[se.None,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[he([gt]),B,oe]});let t=e;return t})();var Be=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=A({type:e}),e.\u0275inj=V({imports:[mt]});let t=e;return t})(),H=class extends I{constructor(e,n,i){super(q(n),Z(i,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(e){return this.controls[this._adjustIndex(e)]}push(e,n={}){this.controls.push(e),this._registerControl(e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}insert(e,n,i={}){this.controls.splice(e,0,n),this._registerControl(n),this.updateValueAndValidity({emitEvent:i.emitEvent})}removeAt(e,n={}){let i=this._adjustIndex(e);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),this.updateValueAndValidity({emitEvent:n.emitEvent})}setControl(e,n,i={}){let r=this._adjustIndex(e);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),n&&(this.controls.splice(r,0,n),this._registerControl(n)),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(e,n={}){je(this,!1,e),e.forEach((i,r)=>{He(this,!1,r),this.at(r).setValue(i,{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(e.forEach((i,r)=>{this.at(r)&&this.at(r).patchValue(i,{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e=[],n={}){this._forEachChild((i,r)=>{i.reset(e[r],{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n),this._updateTouched(n),this.updateValueAndValidity(n)}getRawValue(){return this.controls.map(e=>e.getRawValue())}clear(e={}){this.controls.length<1||(this._forEachChild(n=>n._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:e.emitEvent}))}_adjustIndex(e){return e<0?e+this.length:e}_syncPendingControls(){let e=this.controls.reduce((n,i)=>i._syncPendingControls()?!0:n,!1);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){this.controls.forEach((n,i)=>{e(n,i)})}_updateValue(){this.value=this.controls.filter(e=>e.enabled||this.disabled).map(e=>e.value)}_anyControls(e){return this.controls.some(n=>n.enabled&&e(n))}_setUpControls(){this._forEachChild(e=>this._registerControl(e))}_allControlsDisabled(){for(let e of this.controls)if(e.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(e){e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)}_find(e){return this.at(e)??null}};var Re=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:K,useValue:i.callSetDisabledState??U}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=A({type:e}),e.\u0275inj=V({imports:[Be]});let t=e;return t})(),We=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:pt,useValue:i.warnOnNgModelWithFormControl??"always"},{provide:K,useValue:i.callSetDisabledState??U}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=A({type:e}),e.\u0275inj=V({imports:[Be]});let t=e;return t})();var $e=(()=>{let e=class e{constructor(){this.sharedGadgets=[{id:20,name:"Frag Grenade",img:"",shared:!0,class:"ANY",type:"GADGET"},{id:21,name:"Pyro Grenade",img:"",shared:!0,class:"ANY",type:"GADGET"},{id:23,name:"Goo Grenade",img:"",shared:!0,class:"ANY",type:"GADGET"},{id:24,name:"Gas Grenade",img:"",shared:!0,class:"ANY",type:"GADGET"}],this.light=[...this.sharedGadgets,{id:47,name:"Cloak",img:"",class:"LIGHT",type:"ABILITY"},{id:48,name:"Grappling Hook",img:"",class:"LIGHT",type:"ABILITY"},{id:49,name:"Dash",img:"",class:"LIGHT",type:"ABILITY"},{id:25,name:"Glitch Grenade",img:"",class:"LIGHT",type:"GADGET"},{id:26,name:"Stun Gun",img:"",class:"LIGHT",type:"GADGET"},{id:27,name:"Vanishing Bomb",img:"",class:"LIGHT",type:"GADGET"},{id:28,name:"Breach Charge",img:"",class:"LIGHT",type:"GADGET"},{id:29,name:"Thermal Vision",img:"",class:"LIGHT",type:"GADGET"},{id:30,name:"Smoke Grenade",img:"",class:"LIGHT",type:"GADGET"},{id:22,name:"Flashbang",img:"",class:"LIGHT",type:"GADGET"},{id:40,name:"Tracking Dart",img:"",class:"LIGHT",type:"GADGET"},{id:40,name:"Gateway",img:"",class:"LIGHT",type:"GADGET"},{id:38,name:"Sonar Grenade",img:"",class:"LIGHT",type:"GADGET"},{id:1,name:"Dagger",img:"",class:"LIGHT",type:"WEAPON"},{id:2,name:"LH1",img:"",class:"LIGHT",type:"WEAPON"},{id:3,name:"M11",img:"",class:"LIGHT",type:"WEAPON"},{id:4,name:"SH1900",img:"",class:"LIGHT",type:"WEAPON"},{id:5,name:"SR-84",img:"",class:"LIGHT",type:"WEAPON"},{id:6,name:"Sword",img:"",class:"LIGHT",type:"WEAPON"},{id:7,name:"V9S",img:"",class:"LIGHT",type:"WEAPON"},{id:8,name:"XP-54",img:"",class:"LIGHT",type:"WEAPON"}],this.medium=[...this.sharedGadgets,{id:50,name:"Dematerializer",img:"",class:"MEDIUM",type:"ABILITY"},{id:51,name:"Guardian Turret",img:"",class:"MEDIUM",type:"ABILITY"},{id:52,name:"Healing Beam",img:"",class:"MEDIUM",type:"ABILITY"},{id:32,name:"Defibrillator",img:"",class:"MEDIUM",type:"GADGET"},{id:33,name:"Jump Pad",img:"",class:"MEDIUM",type:"GADGET"},{id:34,name:"Gas Mine",img:"",class:"MEDIUM",type:"GADGET"},{id:35,name:"Zipline",img:"",class:"MEDIUM",type:"GADGET"},{id:36,name:"APS Turret",img:"",class:"MEDIUM",type:"GADGET"},{id:37,name:"Explosive Mine",img:"",class:"MEDIUM",type:"GADGET"},{id:39,name:"Glitch Mine",img:"",class:"MEDIUM",type:"GADGET"},{id:39,name:"Data Reshaper",img:"",class:"MEDIUM",type:"GADGET"},{id:9,name:"AKM",img:"",class:"MEDIUM",type:"WEAPON"},{id:10,name:"CL-40",img:"",class:"MEDIUM",type:"WEAPON"},{id:11,name:"FCAR",img:"",class:"MEDIUM",type:"WEAPON"},{id:12,name:"Model 1887",img:"",class:"MEDIUM",type:"WEAPON"},{id:13,name:"R .357",img:"",class:"MEDIUM",type:"WEAPON"},{id:14,name:"Riot Shield",img:"",class:"MEDIUM",type:"WEAPON"}],this.heavy=[...this.sharedGadgets,{id:53,name:"Charge N Slam",img:"",class:"HEAVY",type:"ABILITY"},{id:54,name:"Mesh Shield",img:"",class:"HEAVY",type:"ABILITY"},{id:55,name:"Goo Gun",img:"",class:"HEAVY",type:"ABILITY"},{id:41,name:"C4",img:"",class:"HEAVY",type:"GADGET"},{id:42,name:"RPG-7",img:"",class:"HEAVY",type:"GADGET"},{id:43,name:"Dome Shield",img:"",class:"HEAVY",type:"GADGET"},{id:44,name:"Barricade",img:"",class:"HEAVY",type:"GADGET"},{id:45,name:"Explosive Mine",img:"",class:"HEAVY",type:"GADGET"},{id:46,name:"Pyro Mine",img:"",class:"HEAVY",type:"GADGET"},{id:46,name:"Anti Gravity Cube",img:"",class:"HEAVY",type:"GADGET"},{id:31,name:"Motion Sensor",img:"",class:"HEAVY",type:"GADGET"},{id:15,name:"Flamethrower",img:"",class:"HEAVY",type:"WEAPON"},{id:16,name:"Lewis Gun",img:"",class:"HEAVY",type:"WEAPON"},{id:17,name:"M60",img:"",class:"HEAVY",type:"WEAPON"},{id:18,name:"SA1216",img:"",class:"HEAVY",type:"WEAPON"},{id:19,name:"Sledgehammer",img:"",class:"HEAVY",type:"WEAPON"},{id:19,name:"KS-23",img:"",class:"HEAVY",type:"WEAPON"}],this.items=[...this.sharedGadgets,...this.light,...this.medium,...this.heavy],this.setItemsImages()}setItemsImages(){this.items=this.items.map(i=>(i.img=`assets/images/${i.type}/${i.class}/${i.name.toUpperCase()}.png`,i))}filterItemsByType(i,r){return i.filter(s=>s.type===r)}getRandomItem(i){let r=Math.floor(Math.random()*i.length);return{item:i[r],index:r}}getPlayerClass(i){return i==="LIGHT"?this.light:i==="MEDIUM"?this.medium:this.heavy}handleRandomization(i,r){let s=this.filterItemsByType(i,r);return this.getRandomItem(s)}getRandomLoadout(i){let r=[],s=this.getPlayerClass(i),a=this.handleRandomization(s,"ABILITY");r.push(a.item);let o=this.handleRandomization(s,"WEAPON");r.push(o.item);let C=this.filterItemsByType(s,"GADGET");for(let Q=0;Q<3;Q++){let ee=this.getRandomItem(C);r.push(ee.item),C.splice(ee.index,1)}return console.log("Generated loadout:",r),r}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=L({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function vt(t,e){if(t&1&&(l(0,"li",9)(1,"div",10),p(2,"img",11)(3,"div",12),u(),l(4,"span",13),d(5),u()()),t&2){let n=e.$implicit;h(2),de("src",n.img,ae),h(3),ce(n.name)}}var Ye=(()=>{let e=class e{constructor(i){this.itemRandomizerService=i,this.loadout=[],this.playerForm=new T({playerClass:new f("LIGHT"),selectedItems:new H([new f(!0),new f(!0),new f(!0),new f(!0),new f(!0)])})}ngOnInit(){this.generateLoadout()}generateLoadout(){let i=this.playerForm.get("playerClass")?.value;this.loadout=this.itemRandomizerService.getRandomLoadout(i||"LIGHT")}};e.\u0275fac=function(r){return new(r||e)(m($e))},e.\u0275cmp=w({type:e,selectors:[["app-item-icon"]],standalone:!0,features:[S],decls:18,vars:8,consts:[[1,"form-div"],[3,"formGroup"],[1,"classes-buttons"],["type","button",1,"circular-button","tf_button__main","tf_button__main__white-border",3,"click"],[1,"spacing"],[1,"list__container"],[1,"horizontal-list"],["id","item-content","class","item-content",4,"ngFor","ngForOf"],["id","generate-btn",1,"tf_button__main","rounded__soft","btn__tall","padding__big","tf_button__main__white-border",3,"click"],["id","item-content",1,"item-content"],[1,"img-container"],["alt","NOT FOUND",1,"item-content__image",3,"src"],[1,"cover-text"],[1,"item-content__name"]],template:function(r,s){if(r&1&&(l(0,"div",0)(1,"form",1)(2,"div",2)(3,"button",3),g("click",function(){let o;return(o=s.playerForm.get("playerClass"))==null?null:o.setValue("LIGHT")}),d(4,"LIGHT "),u(),l(5,"button",3),g("click",function(){let o;return(o=s.playerForm.get("playerClass"))==null?null:o.setValue("MEDIUM")}),d(6,"MEDIUM "),u(),l(7,"button",3),g("click",function(){let o;return(o=s.playerForm.get("playerClass"))==null?null:o.setValue("HEAVY")}),d(8,"HEAVY "),u()()(),p(9,"div",4),l(10,"div",5)(11,"ul",6),le(12,vt,6,2,"li",7),u()(),l(13,"button",8),g("click",function(){return s.generateLoadout()}),d(14,"Generate Random Loadout "),u(),l(15,"footer")(16,"p"),d(17,"From Warhead with \u2764\uFE0F to The Finals' community"),u()()()),r&2){let a,o,C;h(),R("formGroup",s.playerForm),h(2),_("active",((a=s.playerForm.get("playerClass"))==null?null:a.value)==="LIGHT"),h(2),_("active",((o=s.playerForm.get("playerClass"))==null?null:o.value)==="MEDIUM"),h(2),_("active",((C=s.playerForm.get("playerClass"))==null?null:C.value)==="HEAVY"),h(5),R("ngForOf",s.loadout)}},dependencies:[me,Re,Le,ke,We,J],styles:[".list__container[_ngcontent-%COMP%]{margin:5em auto;padding:.5em;max-width:75%}button.active[_ngcontent-%COMP%]{background-color:#d21f3c;color:#f1f2f4}.font__sec[_ngcontent-%COMP%]{font-weight:700}.spacing[_ngcontent-%COMP%]{margin:5em 0}button[_ngcontent-%COMP%]:active{transform:scale(.95)}.classes-buttons[_ngcontent-%COMP%]{display:flex;column-gap:2rem;justify-content:center}.circular-button[_ngcontent-%COMP%]{border-radius:50%;width:8rem;height:8rem;display:flex;justify-content:center;align-items:center;font-size:1.5em}.rounded__soft[_ngcontent-%COMP%]{border-radius:2.5%}.tf_button__main[_ngcontent-%COMP%]{color:#f1f2f4;background-color:#1d1a21;cursor:pointer;padding:.4em;transition:background-color .2s;font-family:Noto Sans Display,sans-serif;font-weight:700}.tf_button__main__red-border[_ngcontent-%COMP%]{border:solid .25em #d21f3c}.tf_button__main__white-border[_ngcontent-%COMP%]{border:solid .25em #f1f2f4}.padding__big[_ngcontent-%COMP%]{font-size:2em}.tf_button__main[_ngcontent-%COMP%]:hover{background-color:#f1f2f4;border:solid .25em #f1f2f4;color:#1d1a21}#generate-btn[_ngcontent-%COMP%]:hover{background-color:#d21f3c;color:#f1f2f4}.horizontal-list[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(5,1fr);gap:1rem;list-style:none;margin:0;padding:0;justify-content:center;align-items:baseline;width:100%;height:200px}.item-content[_ngcontent-%COMP%]{font-family:Noto Sans Display,sans-serif;font-size:1.5em;color:#f1f2f4;list-style-type:none;display:flex;flex-direction:column;align-items:center;margin:.25em auto}.img-container[_ngcontent-%COMP%]{position:relative;background-size:cover;background-position:center}.item-content__image[_ngcontent-%COMP%]{height:175px}.cover-text[_ngcontent-%COMP%]{position:absolute;bottom:0;left:0;width:100%;height:45px;background-color:#1d1a21}.item-content__name[_ngcontent-%COMP%]{z-index:100;margin:-1em;font-weight:700}footer[_ngcontent-%COMP%]{padding-top:2em;font-size:1.5em;font-weight:lighter}"]});let t=e;return t})();var ze=(()=>{let e=class e{constructor(){this.title="the-finals-loadout-randomizer"}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=w({type:e,selectors:[["app-root"]],standalone:!0,features:[S],decls:10,vars:0,consts:[[1,"main"],[1,"content-div"],[1,"title-section"],[1,"tf__image"],["alt","","height","75","src","assets/images/THE_FINALS_Logo_Horizontal_White.png","width","475"],["id","title"]],template:function(r,s){r&1&&(l(0,"main",0)(1,"div",1)(2,"section",2)(3,"div",3),p(4,"img",4),u(),l(5,"div",5),d(6," Loadout Randomizer "),u()(),l(7,"section"),p(8,"app-item-icon"),u()()(),p(9,"router-outlet"))},dependencies:[ve,Ye],styles:["#title[_ngcontent-%COMP%]{font-size:4rem;font-weight:bolder}.title-section[_ngcontent-%COMP%]{margin:1em auto 2em}"]});let t=e;return t})();var qe=[];var Ze={providers:[Ce(qe),ge(),ye()]};var Ct={providers:[_e()]},Ke=fe(Ze,Ct);var Vt=()=>pe(ze,Ke),fi=Vt;export{fi as a};
