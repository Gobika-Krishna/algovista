import{a as Ye,b as Xe,c as Ge,e as Ze}from"./chunk-7HTYJPNH.js";import{a as Lt,b as Nt}from"./chunk-NE4ZV6PU.js";import{A as b,B as I,F as ni,G as ot,H as A,K as oi,a as P,b as ce,c as Ue,d as $e,e as Qe,f as he,g as ft,h as qe,i as Ft,j as pe,n as Ke,o as Je,p as ti,q as Vt,s as ei,t as ii,u as yt,v as Bt,w as bt,x as fe,z as Dt}from"./chunk-TX55U3LL.js";import{$ as Q,$a as de,A as Ie,Ab as nt,B as se,Ba as W,Bb as At,Ca as lt,Da as J,Fb as ht,Ga as wt,Ha as Ve,K as Mt,Ka as v,La as O,M as w,Ma as tt,Na as dt,Nb as Ne,Ob as ze,R as N,S as k,Sb as pt,U,Ua as ae,Va as Ct,W as a,Wa as z,Wb as je,Xa as j,Y as Tt,_ as $,_a as le,a as G,ab as ct,ac as He,b as Re,ba as T,bb as h,c as Et,ca as D,cb as p,db as et,dc as We,e as Pe,eb as gt,f as g,fa as mt,fb as xt,ga as S,hb as it,j as Ee,jb as V,ka as q,kb as Be,lb as y,mb as Y,n as oe,na as at,nb as R,ob as St,pa as x,pb as vt,qa as Ae,qb as B,rb as L,ta as Fe,u as Me,v as Z,vb as Le,w as re,wb as kt,xb as m,yb as It,z as Te,za as _,zb as C}from"./chunk-55RJJUJM.js";var ji=20,K=(()=>{class o{_ngZone=a(S);_platform=a(P);_renderer=a(lt).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new g;_scrolledCount=0;scrollContainers=new Map;register(t){this.scrollContainers.has(t)||this.scrollContainers.set(t,t.elementScrolled().subscribe(()=>this._scrolled.next(t)))}deregister(t){let e=this.scrollContainers.get(t);e&&(e.unsubscribe(),this.scrollContainers.delete(t))}scrolled(t=ji){return this._platform.isBrowser?new Pe(e=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let n=t>0?this._scrolled.pipe(re(t)).subscribe(e):this._scrolled.subscribe(e);return this._scrolledCount++,()=>{n.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):Ee()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((t,e)=>this.deregister(e)),this._scrolled.complete()}ancestorScrolled(t,e){let n=this.getAncestorScrollContainers(t);return this.scrolled(e).pipe(Z(r=>!r||n.indexOf(r)>-1))}getAncestorScrollContainers(t){let e=[];return this.scrollContainers.forEach((n,r)=>{this._scrollableContainsElement(r,t)&&e.push(r)}),e}_scrollableContainsElement(t,e){let n=qe(e),r=t.getElementRef().nativeElement;do if(n==r)return!0;while(n=n.parentElement);return!1}static \u0275fac=function(e){return new(e||o)};static \u0275prov=N({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})(),ut=(()=>{class o{elementRef=a(x);scrollDispatcher=a(K);ngZone=a(S);dir=a(ot,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new g;_renderer=a(J);_cleanupScroll;_elementScrolled=new g;constructor(){}ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",t=>this._elementScrolled.next(t))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(t){let e=this.elementRef.nativeElement,n=this.dir&&this.dir.value=="rtl";t.left==null&&(t.left=n?t.end:t.start),t.right==null&&(t.right=n?t.start:t.end),t.bottom!=null&&(t.top=e.scrollHeight-e.clientHeight-t.bottom),n&&bt()!=yt.NORMAL?(t.left!=null&&(t.right=e.scrollWidth-e.clientWidth-t.left),bt()==yt.INVERTED?t.left=t.right:bt()==yt.NEGATED&&(t.left=t.right?-t.right:t.right)):t.right!=null&&(t.left=e.scrollWidth-e.clientWidth-t.right),this._applyScrollToOptions(t)}_applyScrollToOptions(t){let e=this.elementRef.nativeElement;Bt()?e.scrollTo(t):(t.top!=null&&(e.scrollTop=t.top),t.left!=null&&(e.scrollLeft=t.left))}measureScrollOffset(t){let e="left",n="right",r=this.elementRef.nativeElement;if(t=="top")return r.scrollTop;if(t=="bottom")return r.scrollHeight-r.clientHeight-r.scrollTop;let s=this.dir&&this.dir.value=="rtl";return t=="start"?t=s?n:e:t=="end"&&(t=s?e:n),s&&bt()==yt.INVERTED?t==e?r.scrollWidth-r.clientWidth-r.scrollLeft:r.scrollLeft:s&&bt()==yt.NEGATED?t==e?r.scrollLeft+r.scrollWidth-r.clientWidth:-r.scrollLeft:t==e?r.scrollLeft:r.scrollWidth-r.clientWidth-r.scrollLeft}static \u0275fac=function(e){return new(e||o)};static \u0275dir=tt({type:o,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return o})(),Hi=20,st=(()=>{class o{_platform=a(P);_listeners;_viewportSize=null;_change=new g;_document=a(D);constructor(){let t=a(S),e=a(lt).createRenderer(null,null);t.runOutsideAngular(()=>{if(this._platform.isBrowser){let n=r=>this._change.next(r);this._listeners=[e.listen("window","resize",n),e.listen("window","orientationchange",n)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(t=>t()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let t={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),t}getViewportRect(){let t=this.getViewportScrollPosition(),{width:e,height:n}=this.getViewportSize();return{top:t.top,left:t.left,bottom:t.top+n,right:t.left+e,height:n,width:e}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let t=this._document,e=this._getWindow(),n=t.documentElement,r=n.getBoundingClientRect(),s=-r.top||t.body?.scrollTop||e.scrollY||n.scrollTop||0,l=-r.left||t.body?.scrollLeft||e.scrollX||n.scrollLeft||0;return{top:s,left:l}}change(t=Hi){return t>0?this._change.pipe(re(t)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let t=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:t.innerWidth,height:t.innerHeight}:{width:0,height:0}}static \u0275fac=function(e){return new(e||o)};static \u0275prov=N({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var rt=(()=>{class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=O({type:o});static \u0275inj=k({})}return o})(),ue=(()=>{class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=O({type:o});static \u0275inj=k({imports:[A,rt,A,rt]})}return o})();var Ht=["*"],Wi=["content"],Yi=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],Xi=["mat-drawer","mat-drawer-content","*"];function Gi(o,i){if(o&1){let t=it();h(0,"div",1),V("click",function(){$(t);let n=y();return Q(n._onBackdropClicked())}),p()}if(o&2){let t=y();m("mat-drawer-shown",t._isShowingBackdrop())}}function Zi(o,i){o&1&&(h(0,"mat-drawer-content"),R(1,2),p())}var Ui=[[["mat-sidenav"]],[["mat-sidenav-content"]],"*"],$i=["mat-sidenav","mat-sidenav-content","*"];function Qi(o,i){if(o&1){let t=it();h(0,"div",1),V("click",function(){$(t);let n=y();return Q(n._onBackdropClicked())}),p()}if(o&2){let t=y();m("mat-drawer-shown",t._isShowingBackdrop())}}function qi(o,i){o&1&&(h(0,"mat-sidenav-content"),R(1,2),p())}var Ki=`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`;var Ji=new U("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),ve=new U("MAT_DRAWER_CONTAINER"),zt=(()=>{class o extends ut{_platform=a(P);_changeDetectorRef=a(pt);_container=a(me);constructor(){let t=a(x),e=a(K),n=a(S);super(t,e,n)}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:t,end:e}=this._container;return t!=null&&t.mode!=="over"&&t.opened||e!=null&&e.mode!=="over"&&e.opened}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=v({type:o,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(e,n){e&2&&(kt("margin-left",n._container._contentMargins.left,"px")("margin-right",n._container._contentMargins.right,"px"),m("mat-drawer-content-hidden",n._shouldBeHidden()))},features:[ht([{provide:ut,useExisting:o}]),dt],ngContentSelectors:Ht,decls:1,vars:0,template:function(e,n){e&1&&(Y(),R(0))},encapsulation:2,changeDetection:0})}return o})(),_e=(()=>{class o{_elementRef=a(x);_focusTrapFactory=a(Je);_focusMonitor=a(Ft);_platform=a(P);_ngZone=a(S);_renderer=a(J);_interactivityChecker=a(Ke);_doc=a(D);_container=a(ve,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(t){t=t==="end"?"end":"start",t!==this._position&&(this._isAttached&&this._updatePositionInParent(t),this._position=t,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(t){this._mode=t,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(t){this._disableClose=I(t)}_disableClose=!1;get autoFocus(){let t=this._autoFocus;return t??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(t){(t==="true"||t==="false"||t==null)&&(t=I(t)),this._autoFocus=t}_autoFocus;get opened(){return this._opened()}set opened(t){this.toggle(I(t))}_opened=q(!1);_openedVia=null;_animationStarted=new g;_animationEnd=new g;openedChange=new mt(!0);_openedStream=this.openedChange.pipe(Z(t=>t),oe(()=>{}));openedStart=this._animationStarted.pipe(Z(()=>this.opened),se(void 0));_closedStream=this.openedChange.pipe(Z(t=>!t),oe(()=>{}));closedStart=this._animationStarted.pipe(Z(()=>!this.opened),se(void 0));_destroyed=new g;onPositionChanged=new mt;_content;_modeChanged=new g;_injector=a(T);_changeDetectorRef=a(pt);constructor(){this.openedChange.pipe(w(this._destroyed)).subscribe(t=>{t?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let t=this._renderer,e=this._elementRef.nativeElement;return[t.listen(e,"keydown",n=>{n.keyCode===27&&!this.disableClose&&!Vt(n)&&this._ngZone.run(()=>{this.close(),n.stopPropagation(),n.preventDefault()})}),t.listen(e,"transitionend",this._handleTransitionEvent),t.listen(e,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_forceFocus(t,e){this._interactivityChecker.isFocusable(t)||(t.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let n=()=>{r(),s(),t.removeAttribute("tabindex")},r=this._renderer.listen(t,"blur",n),s=this._renderer.listen(t,"mousedown",n)})),t.focus(e)}_focusByCssSelector(t,e){let n=this._elementRef.nativeElement.querySelector(t);n&&this._forceFocus(n,e)}_takeFocus(){if(!this._focusTrap)return;let t=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":W(()=>{!this._focusTrap.focusInitialElement()&&typeof t.focus=="function"&&t.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(t){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,t):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let t=this._doc.activeElement;return!!t&&this._elementRef.nativeElement.contains(t)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(t){return this.toggle(!0,t)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(t=!this.opened,e){t&&e&&(this._openedVia=e);let n=this._setOpen(t,!t&&this._isFocusWithinDrawer(),this._openedVia||"program");return t||(this._openedVia=null),n}_setOpen(t,e,n){return t===this.opened?Promise.resolve(t?"open":"close"):(this._opened.set(t),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",t),!t&&e&&this._restoreFocus(n),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(r=>{this.openedChange.pipe(Ie(1)).subscribe(s=>r(s?"open":"close"))}))}_setIsAnimating(t){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",t)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(t){if(!this._platform.isBrowser)return;let e=this._elementRef.nativeElement,n=e.parentNode;t==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),n.insertBefore(this._anchor,e)),n.appendChild(e)):this._anchor&&this._anchor.parentNode.insertBefore(e,this._anchor)}_handleTransitionEvent=t=>{let e=this._elementRef.nativeElement;t.target===e&&this._ngZone.run(()=>{t.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(t)})};static \u0275fac=function(e){return new(e||o)};static \u0275cmp=v({type:o,selectors:[["mat-drawer"]],viewQuery:function(e,n){if(e&1&&vt(Wi,5),e&2){let r;B(r=L())&&(n._content=r.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(e,n){e&2&&(Ct("align",null)("tabIndex",n.mode!=="side"?"-1":null),kt("visibility",!n._container&&!n.opened?"hidden":null),m("mat-drawer-end",n.position==="end")("mat-drawer-over",n.mode==="over")("mat-drawer-push",n.mode==="push")("mat-drawer-side",n.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:Ht,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(e,n){e&1&&(Y(),h(0,"div",1,0),R(2),p())},dependencies:[ut],encapsulation:2,changeDetection:0})}return o})(),me=(()=>{class o{_dir=a(ot,{optional:!0});_element=a(x);_ngZone=a(S);_changeDetectorRef=a(pt);_animationDisabled=Dt();_transitionsEnabled=!1;_allDrawers;_drawers=new Ae;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(t){this._autosize=I(t)}_autosize=a(Ji);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(t){this._backdropOverride=t==null?null:I(t)}_backdropOverride=null;backdropClick=new mt;_start=null;_end=null;_left=null;_right=null;_destroyed=new g;_doCheckSubject=new g;_contentMargins={left:null,right:null};_contentMarginChanges=new g;get scrollable(){return this._userContent||this._content}_injector=a(T);constructor(){let t=a(P),e=a(st);this._dir?.change.pipe(w(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),e.change().pipe(w(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&t.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(Mt(this._allDrawers),w(this._destroyed)).subscribe(t=>{this._drawers.reset(t.filter(e=>!e._container||e._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(Mt(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(t=>{this._watchDrawerToggle(t),this._watchDrawerPosition(t),this._watchDrawerMode(t)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(Te(10),w(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(t=>t.open())}close(){this._drawers.forEach(t=>t.close())}updateContentMargins(){let t=0,e=0;if(this._left&&this._left.opened){if(this._left.mode=="side")t+=this._left._getWidth();else if(this._left.mode=="push"){let n=this._left._getWidth();t+=n,e-=n}}if(this._right&&this._right.opened){if(this._right.mode=="side")e+=this._right._getWidth();else if(this._right.mode=="push"){let n=this._right._getWidth();e+=n,t-=n}}t=t||null,e=e||null,(t!==this._contentMargins.left||e!==this._contentMargins.right)&&(this._contentMargins={left:t,right:e},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(t){t._animationStarted.pipe(w(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),t.mode!=="side"&&t.openedChange.pipe(w(this._drawers.changes)).subscribe(()=>this._setContainerClass(t.opened))}_watchDrawerPosition(t){t.onPositionChanged.pipe(w(this._drawers.changes)).subscribe(()=>{W({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(t){t._modeChanged.pipe(w(Me(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(t){let e=this._element.nativeElement.classList,n="mat-drawer-container-has-open";t?e.add(n):e.remove(n)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(t=>{t.position=="end"?(this._end!=null,this._end=t):(this._start!=null,this._start=t)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(t=>t&&!t.disableClose&&this._drawerHasBackdrop(t)).forEach(t=>t._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(t){return t!=null&&t.opened}_drawerHasBackdrop(t){return this._backdropOverride==null?!!t&&t.mode!=="side":this._backdropOverride}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=v({type:o,selectors:[["mat-drawer-container"]],contentQueries:function(e,n,r){if(e&1&&St(r,zt,5)(r,_e,5),e&2){let s;B(s=L())&&(n._content=s.first),B(s=L())&&(n._allDrawers=s)}},viewQuery:function(e,n){if(e&1&&vt(zt,5),e&2){let r;B(r=L())&&(n._userContent=r.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(e,n){e&2&&m("mat-drawer-container-explicit-backdrop",n._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[ht([{provide:ve,useExisting:o}])],ngContentSelectors:Xi,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(e,n){e&1&&(Y(Yi),z(0,Gi,1,2,"div",0),R(1),R(2,1),z(3,Zi,2,0,"mat-drawer-content")),e&2&&(j(n.hasBackdrop?0:-1),_(3),j(n._content?-1:3))},dependencies:[zt],styles:[`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`],encapsulation:2,changeDetection:0})}return o})(),jt=(()=>{class o extends zt{static \u0275fac=(()=>{let t;return function(n){return(t||(t=at(o)))(n||o)}})();static \u0275cmp=v({type:o,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[ht([{provide:ut,useExisting:o}]),dt],ngContentSelectors:Ht,decls:1,vars:0,template:function(e,n){e&1&&(Y(),R(0))},encapsulation:2,changeDetection:0})}return o})(),ye=(()=>{class o extends _e{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(t){this._fixedInViewport=I(t)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(t){this._fixedTopGap=ft(t)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(t){this._fixedBottomGap=ft(t)}_fixedBottomGap=0;static \u0275fac=(()=>{let t;return function(n){return(t||(t=at(o)))(n||o)}})();static \u0275cmp=v({type:o,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(e,n){e&2&&(Ct("tabIndex",n.mode!=="side"?"-1":null)("align",null),kt("top",n.fixedInViewport?n.fixedTopGap:null,"px")("bottom",n.fixedInViewport?n.fixedBottomGap:null,"px"),m("mat-drawer-end",n.position==="end")("mat-drawer-over",n.mode==="over")("mat-drawer-push",n.mode==="push")("mat-drawer-side",n.mode==="side")("mat-sidenav-fixed",n.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[ht([{provide:_e,useExisting:o}]),dt],ngContentSelectors:Ht,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(e,n){e&1&&(Y(),h(0,"div",1,0),R(2),p())},dependencies:[ut],encapsulation:2,changeDetection:0})}return o})(),si=(()=>{class o extends me{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let t;return function(n){return(t||(t=at(o)))(n||o)}})();static \u0275cmp=v({type:o,selectors:[["mat-sidenav-container"]],contentQueries:function(e,n,r){if(e&1&&St(r,jt,5)(r,ye,5),e&2){let s;B(s=L())&&(n._content=s.first),B(s=L())&&(n._allDrawers=s)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(e,n){e&2&&m("mat-drawer-container-explicit-backdrop",n._backdropOverride)},exportAs:["matSidenavContainer"],features:[ht([{provide:ve,useExisting:o},{provide:me,useExisting:o}]),dt],ngContentSelectors:$i,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(e,n){e&1&&(Y(Ui),z(0,Qi,1,2,"div",0),R(1),R(2,1),z(3,qi,2,0,"mat-sidenav-content")),e&2&&(j(n.hasBackdrop?0:-1),_(3),j(n._content?-1:3))},dependencies:[jt],styles:[Ki],encapsulation:2,changeDetection:0})}return o})(),ai=(()=>{class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=O({type:o});static \u0275inj=k({imports:[rt,A,rt]})}return o})();var en=["*",[["mat-toolbar-row"]]],nn=["*","mat-toolbar-row"],on=(()=>{class o{static \u0275fac=function(e){return new(e||o)};static \u0275dir=tt({type:o,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return o})(),li=(()=>{class o{_elementRef=a(x);_platform=a(P);_document=a(D);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=v({type:o,selectors:[["mat-toolbar"]],contentQueries:function(e,n,r){if(e&1&&St(r,on,5),e&2){let s;B(s=L())&&(n._toolbarRows=s)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(e,n){e&2&&(It(n.color?"mat-"+n.color:""),m("mat-toolbar-multiple-rows",n._toolbarRows.length>0)("mat-toolbar-single-row",n._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:nn,decls:2,vars:0,template:function(e,n){e&1&&(Y(en),R(0),R(1,1))},styles:[`.mat-toolbar {
  background: var(--mat-toolbar-container-background-color, var(--mat-sys-surface));
  color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));
  font-size: var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));
  line-height: var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-weight: var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));
  letter-spacing: var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
  --mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2,changeDetection:0})}return o})();var di=(()=>{class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=O({type:o});static \u0275inj=k({imports:[A]})}return o})();var Wt=class o{static \u0275fac=function(t){return new(t||o)};static \u0275cmp=v({type:o,selectors:[["app-footer"]],decls:2,vars:0,template:function(t,e){t&1&&(gt(0,"footer"),C(1,` \xA9 AlgoVista
`),xt())},styles:["footer[_ngcontent-%COMP%]{height:56px;display:flex;justify-content:center;align-items:center;background:#222;color:#fff;font-size:14px}"]})};var hi=(()=>{class o{get vertical(){return this._vertical}set vertical(t){this._vertical=I(t)}_vertical=!1;get inset(){return this._inset}set inset(t){this._inset=I(t)}_inset=!1;static \u0275fac=function(e){return new(e||o)};static \u0275cmp=v({type:o,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(e,n){e&2&&(Ct("aria-orientation",n.vertical?"vertical":"horizontal"),m("mat-divider-vertical",n.vertical)("mat-divider-horizontal",!n.vertical)("mat-divider-inset",n.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(e,n){},styles:[`.mat-divider {
  display: block;
  margin: 0;
  border-top-style: solid;
  border-top-color: var(--mat-divider-color, var(--mat-sys-outline-variant));
  border-top-width: var(--mat-divider-width, 1px);
}
.mat-divider.mat-divider-vertical {
  border-top: 0;
  border-right-style: solid;
  border-right-color: var(--mat-divider-color, var(--mat-sys-outline-variant));
  border-right-width: var(--mat-divider-width, 1px);
}
.mat-divider.mat-divider-inset {
  margin-left: 80px;
}
[dir=rtl] .mat-divider.mat-divider-inset {
  margin-left: auto;
  margin-right: 80px;
}
`],encapsulation:2,changeDetection:0})}return o})(),pi=(()=>{class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=O({type:o});static \u0275inj=k({imports:[A]})}return o})();var Ot=class{_attachedHost=null;attach(i){return this._attachedHost=i,i.attach(this)}detach(){let i=this._attachedHost;i!=null&&(this._attachedHost=null,i.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(i){this._attachedHost=i}},Rt=class extends Ot{component;viewContainerRef;injector;projectableNodes;bindings;constructor(i,t,e,n,r){super(),this.component=i,this.viewContainerRef=t,this.injector=e,this.projectableNodes=n,this.bindings=r||null}},Yt=class extends Ot{templateRef;viewContainerRef;context;injector;constructor(i,t,e,n){super(),this.templateRef=i,this.viewContainerRef=t,this.context=e,this.injector=n}get origin(){return this.templateRef.elementRef}attach(i,t=this.context){return this.context=t,super.attach(i)}detach(){return this.context=void 0,super.detach()}},be=class extends Ot{element;constructor(i){super(),this.element=i instanceof x?i.nativeElement:i}},we=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(i){if(i instanceof Rt)return this._attachedPortal=i,this.attachComponentPortal(i);if(i instanceof Yt)return this._attachedPortal=i,this.attachTemplatePortal(i);if(this.attachDomPortal&&i instanceof be)return this._attachedPortal=i,this.attachDomPortal(i)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(i){this._disposeFn=i}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},Xt=class extends we{outletElement;_appRef;_defaultInjector;constructor(i,t,e){super(),this.outletElement=i,this._appRef=t,this._defaultInjector=e}attachComponentPortal(i){let t;if(i.viewContainerRef){let e=i.injector||i.viewContainerRef.injector,n=e.get(Ve,null,{optional:!0})||void 0;t=i.viewContainerRef.createComponent(i.component,{index:i.viewContainerRef.length,injector:e,ngModuleRef:n,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0}),this.setDisposeFn(()=>t.destroy())}else{let e=this._appRef,n=i.injector||this._defaultInjector||T.NULL,r=n.get(Tt,e.injector);t=je(i.component,{elementInjector:n,environmentInjector:r,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0}),e.attachView(t.hostView),this.setDisposeFn(()=>{e.viewCount>0&&e.detachView(t.hostView),t.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(t)),this._attachedPortal=i,t}attachTemplatePortal(i){let t=i.viewContainerRef,e=t.createEmbeddedView(i.templateRef,i.context,{injector:i.injector});return e.rootNodes.forEach(n=>this.outletElement.appendChild(n)),e.detectChanges(),this.setDisposeFn(()=>{let n=t.indexOf(e);n!==-1&&t.remove(n)}),this._attachedPortal=i,e}attachDomPortal=i=>{let t=i.element;t.parentNode;let e=this.outletElement.ownerDocument.createComment("dom-portal");t.parentNode.insertBefore(e,t),this.outletElement.appendChild(t),this._attachedPortal=i,super.setDisposeFn(()=>{e.parentNode&&e.parentNode.replaceChild(t,e)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(i){return i.hostView.rootNodes[0]}};var fi=(()=>{class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=O({type:o});static \u0275inj=k({})}return o})();var ui=Bt();function wi(o){return new Gt(o.get(st),o.get(D))}var Gt=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(i,t){this._viewportRuler=i,this._document=t}attach(){}enable(){if(this._canBeEnabled()){let i=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=i.style.left||"",this._previousHTMLStyles.top=i.style.top||"",i.style.left=b(-this._previousScrollPosition.left),i.style.top=b(-this._previousScrollPosition.top),i.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let i=this._document.documentElement,t=this._document.body,e=i.style,n=t.style,r=e.scrollBehavior||"",s=n.scrollBehavior||"";this._isEnabled=!1,e.left=this._previousHTMLStyles.left,e.top=this._previousHTMLStyles.top,i.classList.remove("cdk-global-scrollblock"),ui&&(e.scrollBehavior=n.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),ui&&(e.scrollBehavior=r,n.scrollBehavior=s)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let t=this._document.documentElement,e=this._viewportRuler.getViewportSize();return t.scrollHeight>e.height||t.scrollWidth>e.width}};function Ci(o,i){return new Zt(o.get(K),o.get(S),o.get(st),i)}var Zt=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(i,t,e,n){this._scrollDispatcher=i,this._ngZone=t,this._viewportRuler=e,this._config=n}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(this._scrollSubscription)return;let i=this._scrollDispatcher.scrolled(0).pipe(Z(t=>!t||!this._overlayRef.overlayElement.contains(t.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=i.subscribe(()=>{let t=this._viewportRuler.getViewportScrollPosition().top;Math.abs(t-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=i.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var Pt=class{enable(){}disable(){}attach(){}};function Ce(o,i){return i.some(t=>{let e=o.bottom<t.top,n=o.top>t.bottom,r=o.right<t.left,s=o.left>t.right;return e||n||r||s})}function _i(o,i){return i.some(t=>{let e=o.top<t.top,n=o.bottom>t.bottom,r=o.left<t.left,s=o.right>t.right;return e||n||r||s})}function te(o,i){return new Ut(o.get(K),o.get(st),o.get(S),i)}var Ut=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(i,t,e,n){this._scrollDispatcher=i,this._viewportRuler=t,this._ngZone=e,this._config=n}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(!this._scrollSubscription){let i=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(i).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let t=this._overlayRef.overlayElement.getBoundingClientRect(),{width:e,height:n}=this._viewportRuler.getViewportSize();Ce(t,[{width:e,height:n,bottom:n,right:e,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},xi=(()=>{class o{_injector=a(T);constructor(){}noop=()=>new Pt;close=t=>Ci(this._injector,t);block=()=>wi(this._injector);reposition=t=>te(this._injector,t);static \u0275fac=function(e){return new(e||o)};static \u0275prov=N({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})(),$t=class{positionStrategy;scrollStrategy=new Pt;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(i){if(i){let t=Object.keys(i);for(let e of t)i[e]!==void 0&&(this[e]=i[e])}}};var Qt=class{connectionPair;scrollableViewProperties;constructor(i,t){this.connectionPair=i,this.scrollableViewProperties=t}};var Si=(()=>{class o{_attachedOverlays=[];_document=a(D);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(t){this.remove(t),this._attachedOverlays.push(t)}remove(t){let e=this._attachedOverlays.indexOf(t);e>-1&&this._attachedOverlays.splice(e,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(t,e,n){return n.observers.length<1?!1:t.eventPredicate?t.eventPredicate(e):!0}static \u0275fac=function(e){return new(e||o)};static \u0275prov=N({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})(),ki=(()=>{class o extends Si{_ngZone=a(S);_renderer=a(lt).createRenderer(null,null);_cleanupKeydown;add(t){super.add(t),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=t=>{let e=this._attachedOverlays;for(let n=e.length-1;n>-1;n--){let r=e[n];if(this.canReceiveEvent(r,t,r._keydownEvents)){this._ngZone.run(()=>r._keydownEvents.next(t));break}}};static \u0275fac=(()=>{let t;return function(n){return(t||(t=at(o)))(n||o)}})();static \u0275prov=N({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})(),Di=(()=>{class o extends Si{_platform=a(P);_ngZone=a(S);_renderer=a(lt).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(t){if(super.add(t),!this._isAttached){let e=this._document.body,n={capture:!0},r=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[r.listen(e,"pointerdown",this._pointerDownListener,n),r.listen(e,"click",this._clickListener,n),r.listen(e,"auxclick",this._clickListener,n),r.listen(e,"contextmenu",this._clickListener,n)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=e.style.cursor,e.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(t=>t()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=t=>{this._pointerDownEventTarget=he(t)};_clickListener=t=>{let e=he(t),n=t.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:e;this._pointerDownEventTarget=null;let r=this._attachedOverlays.slice();for(let s=r.length-1;s>-1;s--){let l=r[s],d=l._outsidePointerEvents;if(!(!l.hasAttached()||!this.canReceiveEvent(l,t,d))){if(mi(l.overlayElement,e)||mi(l.overlayElement,n))break;this._ngZone?this._ngZone.run(()=>d.next(t)):d.next(t)}}};static \u0275fac=(()=>{let t;return function(n){return(t||(t=at(o)))(n||o)}})();static \u0275prov=N({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();function mi(o,i){let t=typeof ShadowRoot<"u"&&ShadowRoot,e=i;for(;e;){if(e===o)return!0;e=t&&e instanceof ShadowRoot?e.host:e.parentNode}return!1}var Oi=(()=>{class o{static \u0275fac=function(e){return new(e||o)};static \u0275cmp=v({type:o,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(e,n){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2,changeDetection:0})}return o})(),Ri=(()=>{class o{_platform=a(P);_containerElement;_document=a(D);_styleLoader=a(pe);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let t="cdk-overlay-container";if(this._platform.isBrowser||fe()){let n=this._document.querySelectorAll(`.${t}[platform="server"], .${t}[platform="test"]`);for(let r=0;r<n.length;r++)n[r].remove()}let e=this._document.createElement("div");e.classList.add(t),fe()?e.setAttribute("platform","test"):this._platform.isBrowser||e.setAttribute("platform","server"),this._document.body.appendChild(e),this._containerElement=e}_loadStyles(){this._styleLoader.load(Oi)}static \u0275fac=function(e){return new(e||o)};static \u0275prov=N({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})(),xe=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(i,t,e,n){this._renderer=t,this._ngZone=e,this.element=i.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=t.listen(this.element,"click",n)}detach(){this._ngZone.runOutsideAngular(()=>{let i=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(i,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),i.style.pointerEvents="none",i.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function Se(o){return o&&o.nodeType===1}var qt=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new g;_attachments=new g;_detachments=new g;_positionStrategy;_scrollStrategy;_locationChanges=Et.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new g;_outsidePointerEvents=new g;_afterNextRenderRef;constructor(i,t,e,n,r,s,l,d,u,c=!1,f,E){this._portalOutlet=i,this._host=t,this._pane=e,this._config=n,this._ngZone=r,this._keyboardDispatcher=s,this._document=l,this._location=d,this._outsideClickDispatcher=u,this._animationsDisabled=c,this._injector=f,this._renderer=E,n.scrollStrategy&&(this._scrollStrategy=n.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=n.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(i){if(this._disposed)return null;this._attachHost();let t=this._portalOutlet.attach(i);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=W(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof t?.onDestroy=="function"&&t.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),t}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let i=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),i}dispose(){if(this._disposed)return;let i=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,i&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(i){i!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=i,this.hasAttached()&&(i.attach(this),this.updatePosition()))}updateSize(i){this._config=G(G({},this._config),i),this._updateElementSize()}setDirection(i){this._config=Re(G({},this._config),{direction:i}),this._updateElementDirection()}addPanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!0)}removePanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!1)}getDirection(){let i=this._config.direction;return i?typeof i=="string"?i:i.value:"ltr"}updateScrollStrategy(i){i!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=i,this.hasAttached()&&(i.attach(this),i.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let i=this._pane.style;i.width=b(this._config.width),i.height=b(this._config.height),i.minWidth=b(this._config.minWidth),i.minHeight=b(this._config.minHeight),i.maxWidth=b(this._config.maxWidth),i.maxHeight=b(this._config.maxHeight)}_togglePointerEvents(i){this._pane.style.pointerEvents=i?"":"none"}_attachHost(){if(!this._host.parentElement){let i=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;Se(i)?i.after(this._host):i?.type==="parent"?i.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let i="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new xe(this._document,this._renderer,this._ngZone,t=>{this._backdropClick.next(t)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(i))}):this._backdropRef.element.classList.add(i)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(i,t,e){let n=ce(t||[]).filter(r=>!!r);n.length&&(e?i.classList.add(...n):i.classList.remove(...n))}_detachContentWhenEmpty(){let i=!1;try{this._detachContentAfterRenderRef=W(()=>{i=!0,this._detachContent()},{injector:this._injector})}catch(t){if(i)throw t;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let i=this._scrollStrategy;i?.disable(),i?.detach?.()}},gi="cdk-overlay-connected-position-bounding-box",an=/([A-Za-z%]+)$/;function ee(o,i){return new Kt(i,o.get(st),o.get(D),o.get(P),o.get(Ri))}var Kt=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new g;_resizeSubscription=Et.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(i,t,e,n,r){this._viewportRuler=t,this._document=e,this._platform=n,this._overlayContainer=r,this.setOrigin(i)}attach(i){this._overlayRef&&this._overlayRef,this._validatePositions(),i.hostElement.classList.add(gi),this._overlayRef=i,this._boundingBox=i.hostElement,this._pane=i.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let i=this._originRect,t=this._overlayRect,e=this._viewportRect,n=this._containerRect,r=[],s;for(let l of this._preferredPositions){let d=this._getOriginPoint(i,n,l),u=this._getOverlayPoint(d,t,l),c=this._getOverlayFit(u,t,e,l);if(c.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(l,d);return}if(this._canFitWithFlexibleDimensions(c,u,e)){r.push({position:l,origin:d,overlayRect:t,boundingBoxRect:this._calculateBoundingBoxRect(d,l)});continue}(!s||s.overlayFit.visibleArea<c.visibleArea)&&(s={overlayFit:c,overlayPoint:u,originPoint:d,position:l,overlayRect:t})}if(r.length){let l=null,d=-1;for(let u of r){let c=u.boundingBoxRect.width*u.boundingBoxRect.height*(u.position.weight||1);c>d&&(d=c,l=u)}this._isPushed=!1,this._applyPosition(l.position,l.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(s.position,s.originPoint);return}this._applyPosition(s.position,s.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&_t(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(gi),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let i=this._lastPosition;i?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(i,this._getOriginPoint(this._originRect,this._containerRect,i))):this.apply()}withScrollableContainers(i){return this._scrollables=i,this}withPositions(i){return this._preferredPositions=i,i.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(i){return this._viewportMargin=i,this}withFlexibleDimensions(i=!0){return this._hasFlexibleDimensions=i,this}withGrowAfterOpen(i=!0){return this._growAfterOpen=i,this}withPush(i=!0){return this._canPush=i,this}withLockedPosition(i=!0){return this._positionLocked=i,this}setOrigin(i){return this._origin=i,this}withDefaultOffsetX(i){return this._offsetX=i,this}withDefaultOffsetY(i){return this._offsetY=i,this}withTransformOriginOn(i){return this._transformOriginSelector=i,this}withPopoverLocation(i){return this._popoverLocation=i,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof x?this._origin.nativeElement:Se(this._origin)?this._origin:null}_getOriginPoint(i,t,e){let n;if(e.originX=="center")n=i.left+i.width/2;else{let s=this._isRtl()?i.right:i.left,l=this._isRtl()?i.left:i.right;n=e.originX=="start"?s:l}t.left<0&&(n-=t.left);let r;return e.originY=="center"?r=i.top+i.height/2:r=e.originY=="top"?i.top:i.bottom,t.top<0&&(r-=t.top),{x:n,y:r}}_getOverlayPoint(i,t,e){let n;e.overlayX=="center"?n=-t.width/2:e.overlayX==="start"?n=this._isRtl()?-t.width:0:n=this._isRtl()?0:-t.width;let r;return e.overlayY=="center"?r=-t.height/2:r=e.overlayY=="top"?0:-t.height,{x:i.x+n,y:i.y+r}}_getOverlayFit(i,t,e,n){let r=yi(t),{x:s,y:l}=i,d=this._getOffset(n,"x"),u=this._getOffset(n,"y");d&&(s+=d),u&&(l+=u);let c=0-s,f=s+r.width-e.width,E=0-l,F=l+r.height-e.height,M=this._subtractOverflows(r.width,c,f),H=this._subtractOverflows(r.height,E,F),Oe=M*H;return{visibleArea:Oe,isCompletelyWithinViewport:r.width*r.height===Oe,fitsInViewportVertically:H===r.height,fitsInViewportHorizontally:M==r.width}}_canFitWithFlexibleDimensions(i,t,e){if(this._hasFlexibleDimensions){let n=e.bottom-t.y,r=e.right-t.x,s=vi(this._overlayRef.getConfig().minHeight),l=vi(this._overlayRef.getConfig().minWidth),d=i.fitsInViewportVertically||s!=null&&s<=n,u=i.fitsInViewportHorizontally||l!=null&&l<=r;return d&&u}return!1}_pushOverlayOnScreen(i,t,e){if(this._previousPushAmount&&this._positionLocked)return{x:i.x+this._previousPushAmount.x,y:i.y+this._previousPushAmount.y};let n=yi(t),r=this._viewportRect,s=Math.max(i.x+n.width-r.width,0),l=Math.max(i.y+n.height-r.height,0),d=Math.max(r.top-e.top-i.y,0),u=Math.max(r.left-e.left-i.x,0),c=0,f=0;return n.width<=r.width?c=u||-s:c=i.x<this._getViewportMarginStart()?r.left-e.left-i.x:0,n.height<=r.height?f=d||-l:f=i.y<this._getViewportMarginTop()?r.top-e.top-i.y:0,this._previousPushAmount={x:c,y:f},{x:i.x+c,y:i.y+f}}_applyPosition(i,t){if(this._setTransformOrigin(i),this._setOverlayElementStyles(t,i),this._setBoundingBoxStyles(t,i),i.panelClass&&this._addPanelClasses(i.panelClass),this._positionChanges.observers.length){let e=this._getScrollVisibility();if(i!==this._lastPosition||!this._lastScrollVisibility||!ln(this._lastScrollVisibility,e)){let n=new Qt(i,e);this._positionChanges.next(n)}this._lastScrollVisibility=e}this._lastPosition=i,this._isInitialRender=!1}_setTransformOrigin(i){if(!this._transformOriginSelector)return;let t=this._boundingBox.querySelectorAll(this._transformOriginSelector),e,n=i.overlayY;i.overlayX==="center"?e="center":this._isRtl()?e=i.overlayX==="start"?"right":"left":e=i.overlayX==="start"?"left":"right";for(let r=0;r<t.length;r++)t[r].style.transformOrigin=`${e} ${n}`}_calculateBoundingBoxRect(i,t){let e=this._viewportRect,n=this._isRtl(),r,s,l;if(t.overlayY==="top")s=i.y,r=e.height-s+this._getViewportMarginBottom();else if(t.overlayY==="bottom")l=e.height-i.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),r=e.height-l+this._getViewportMarginTop();else{let F=Math.min(e.bottom-i.y+e.top,i.y),M=this._lastBoundingBoxSize.height;r=F*2,s=i.y-F,r>M&&!this._isInitialRender&&!this._growAfterOpen&&(s=i.y-M/2)}let d=t.overlayX==="start"&&!n||t.overlayX==="end"&&n,u=t.overlayX==="end"&&!n||t.overlayX==="start"&&n,c,f,E;if(u)E=e.width-i.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),c=i.x-this._getViewportMarginStart();else if(d)f=i.x,c=e.right-i.x-this._getViewportMarginEnd();else{let F=Math.min(e.right-i.x+e.left,i.x),M=this._lastBoundingBoxSize.width;c=F*2,f=i.x-F,c>M&&!this._isInitialRender&&!this._growAfterOpen&&(f=i.x-M/2)}return{top:s,left:f,bottom:l,right:E,width:c,height:r}}_setBoundingBoxStyles(i,t){let e=this._calculateBoundingBoxRect(i,t);!this._isInitialRender&&!this._growAfterOpen&&(e.height=Math.min(e.height,this._lastBoundingBoxSize.height),e.width=Math.min(e.width,this._lastBoundingBoxSize.width));let n={};if(this._hasExactPosition())n.top=n.left="0",n.bottom=n.right="auto",n.maxHeight=n.maxWidth="",n.width=n.height="100%";else{let r=this._overlayRef.getConfig().maxHeight,s=this._overlayRef.getConfig().maxWidth;n.width=b(e.width),n.height=b(e.height),n.top=b(e.top)||"auto",n.bottom=b(e.bottom)||"auto",n.left=b(e.left)||"auto",n.right=b(e.right)||"auto",t.overlayX==="center"?n.alignItems="center":n.alignItems=t.overlayX==="end"?"flex-end":"flex-start",t.overlayY==="center"?n.justifyContent="center":n.justifyContent=t.overlayY==="bottom"?"flex-end":"flex-start",r&&(n.maxHeight=b(r)),s&&(n.maxWidth=b(s))}this._lastBoundingBoxSize=e,_t(this._boundingBox.style,n)}_resetBoundingBoxStyles(){_t(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){_t(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(i,t){let e={},n=this._hasExactPosition(),r=this._hasFlexibleDimensions,s=this._overlayRef.getConfig();if(n){let c=this._viewportRuler.getViewportScrollPosition();_t(e,this._getExactOverlayY(t,i,c)),_t(e,this._getExactOverlayX(t,i,c))}else e.position="static";let l="",d=this._getOffset(t,"x"),u=this._getOffset(t,"y");d&&(l+=`translateX(${d}px) `),u&&(l+=`translateY(${u}px)`),e.transform=l.trim(),s.maxHeight&&(n?e.maxHeight=b(s.maxHeight):r&&(e.maxHeight="")),s.maxWidth&&(n?e.maxWidth=b(s.maxWidth):r&&(e.maxWidth="")),_t(this._pane.style,e)}_getExactOverlayY(i,t,e){let n={top:"",bottom:""},r=this._getOverlayPoint(t,this._overlayRect,i);if(this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,e)),i.overlayY==="bottom"){let s=this._document.documentElement.clientHeight;n.bottom=`${s-(r.y+this._overlayRect.height)}px`}else n.top=b(r.y);return n}_getExactOverlayX(i,t,e){let n={left:"",right:""},r=this._getOverlayPoint(t,this._overlayRect,i);this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,e));let s;if(this._isRtl()?s=i.overlayX==="end"?"left":"right":s=i.overlayX==="end"?"right":"left",s==="right"){let l=this._document.documentElement.clientWidth;n.right=`${l-(r.x+this._overlayRect.width)}px`}else n.left=b(r.x);return n}_getScrollVisibility(){let i=this._getOriginRect(),t=this._pane.getBoundingClientRect(),e=this._scrollables.map(n=>n.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:_i(i,e),isOriginOutsideView:Ce(i,e),isOverlayClipped:_i(t,e),isOverlayOutsideView:Ce(t,e)}}_subtractOverflows(i,...t){return t.reduce((e,n)=>e-Math.max(n,0),i)}_getNarrowedViewportRect(){let i=this._document.documentElement.clientWidth,t=this._document.documentElement.clientHeight,e=this._viewportRuler.getViewportScrollPosition();return{top:e.top+this._getViewportMarginTop(),left:e.left+this._getViewportMarginStart(),right:e.left+i-this._getViewportMarginEnd(),bottom:e.top+t-this._getViewportMarginBottom(),width:i-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:t-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(i,t){return t==="x"?i.offsetX==null?this._offsetX:i.offsetX:i.offsetY==null?this._offsetY:i.offsetY}_validatePositions(){}_addPanelClasses(i){this._pane&&ce(i).forEach(t=>{t!==""&&this._appliedPanelClasses.indexOf(t)===-1&&(this._appliedPanelClasses.push(t),this._pane.classList.add(t))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(i=>{this._pane.classList.remove(i)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let i=this._origin;if(i instanceof x)return i.nativeElement.getBoundingClientRect();if(i instanceof Element)return i.getBoundingClientRect();let t=i.width||0,e=i.height||0;return{top:i.y,bottom:i.y+e,left:i.x,right:i.x+t,height:e,width:t}}_getContainerRect(){let i=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",t=this._overlayContainer.getContainerElement();i&&(t.style.display="block");let e=t.getBoundingClientRect();return i&&(t.style.display=""),e}};function _t(o,i){for(let t in i)i.hasOwnProperty(t)&&(o[t]=i[t]);return o}function vi(o){if(typeof o!="number"&&o!=null){let[i,t]=o.split(an);return!t||t==="px"?parseFloat(i):null}return o||null}function yi(o){return{top:Math.floor(o.top),right:Math.floor(o.right),bottom:Math.floor(o.bottom),left:Math.floor(o.left),width:Math.floor(o.width),height:Math.floor(o.height)}}function ln(o,i){return o===i?!0:o.isOriginClipped===i.isOriginClipped&&o.isOriginOutsideView===i.isOriginOutsideView&&o.isOverlayClipped===i.isOverlayClipped&&o.isOverlayOutsideView===i.isOverlayOutsideView}var bi="cdk-global-overlay-wrapper";function Pi(o){return new Jt}var Jt=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(i){let t=i.getConfig();this._overlayRef=i,this._width&&!t.width&&i.updateSize({width:this._width}),this._height&&!t.height&&i.updateSize({height:this._height}),i.hostElement.classList.add(bi),this._isDisposed=!1}top(i=""){return this._bottomOffset="",this._topOffset=i,this._alignItems="flex-start",this}left(i=""){return this._xOffset=i,this._xPosition="left",this}bottom(i=""){return this._topOffset="",this._bottomOffset=i,this._alignItems="flex-end",this}right(i=""){return this._xOffset=i,this._xPosition="right",this}start(i=""){return this._xOffset=i,this._xPosition="start",this}end(i=""){return this._xOffset=i,this._xPosition="end",this}width(i=""){return this._overlayRef?this._overlayRef.updateSize({width:i}):this._width=i,this}height(i=""){return this._overlayRef?this._overlayRef.updateSize({height:i}):this._height=i,this}centerHorizontally(i=""){return this.left(i),this._xPosition="center",this}centerVertically(i=""){return this.top(i),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let i=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement.style,e=this._overlayRef.getConfig(),{width:n,height:r,maxWidth:s,maxHeight:l}=e,d=(n==="100%"||n==="100vw")&&(!s||s==="100%"||s==="100vw"),u=(r==="100%"||r==="100vh")&&(!l||l==="100%"||l==="100vh"),c=this._xPosition,f=this._xOffset,E=this._overlayRef.getConfig().direction==="rtl",F="",M="",H="";d?H="flex-start":c==="center"?(H="center",E?M=f:F=f):E?c==="left"||c==="end"?(H="flex-end",F=f):(c==="right"||c==="start")&&(H="flex-start",M=f):c==="left"||c==="start"?(H="flex-start",F=f):(c==="right"||c==="end")&&(H="flex-end",M=f),i.position=this._cssPosition,i.marginLeft=d?"0":F,i.marginTop=u?"0":this._topOffset,i.marginBottom=this._bottomOffset,i.marginRight=d?"0":M,t.justifyContent=H,t.alignItems=u?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let i=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement,e=t.style;t.classList.remove(bi),e.justifyContent=e.alignItems=i.marginTop=i.marginBottom=i.marginLeft=i.marginRight=i.position="",this._overlayRef=null,this._isDisposed=!0}},Ei=(()=>{class o{_injector=a(T);constructor(){}global(){return Pi()}flexibleConnectedTo(t){return ee(this._injector,t)}static \u0275fac=function(e){return new(e||o)};static \u0275prov=N({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})(),Mi=new U("OVERLAY_DEFAULT_CONFIG");function ie(o,i){o.get(pe).load(Oi);let t=o.get(Ri),e=o.get(D),n=o.get(ei),r=o.get(ae),s=o.get(ot),l=o.get(J,null,{optional:!0})||o.get(lt).createRenderer(null,null),d=new $t(i),u=o.get(Mi,null,{optional:!0})?.usePopover??!0;d.direction=d.direction||s.value,"showPopover"in e.body?d.usePopover=i?.usePopover??u:d.usePopover=!1;let c=e.createElement("div"),f=e.createElement("div");c.id=n.getId("cdk-overlay-"),c.classList.add("cdk-overlay-pane"),f.appendChild(c),d.usePopover&&(f.setAttribute("popover","manual"),f.classList.add("cdk-overlay-popover"));let E=d.usePopover?d.positionStrategy?.getPopoverInsertionPoint?.():null;return Se(E)?E.after(f):E?.type==="parent"?E.element.appendChild(f):t.getContainerElement().appendChild(f),new qt(new Xt(c,r,o),f,c,d,o.get(S),o.get(ki),e,o.get(He),o.get(Di),i?.disableAnimations??o.get(Fe,null,{optional:!0})==="NoopAnimations",o.get(Tt),l)}var Ti=(()=>{class o{scrollStrategies=a(xi);_positionBuilder=a(Ei);_injector=a(T);constructor(){}create(t){return ie(this._injector,t)}position(){return this._positionBuilder}static \u0275fac=function(e){return new(e||o)};static \u0275prov=N({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var ke=(()=>{class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=O({type:o});static \u0275inj=k({providers:[Ti],imports:[A,fi,ue,ue]})}return o})();var dn=["tooltip"],cn=20;var hn=new U("mat-tooltip-scroll-strategy",{providedIn:"root",factory:()=>{let o=a(T);return()=>te(o,{scrollThrottle:cn})}}),pn=new U("mat-tooltip-default-options",{providedIn:"root",factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var Ii="tooltip-panel",fn={passive:!0},un=8,_n=8,mn=24,gn=200,De=(()=>{class o{_elementRef=a(x);_ngZone=a(S);_platform=a(P);_ariaDescriber=a(ii);_focusMonitor=a(Ft);_dir=a(ot);_injector=a(T);_viewContainerRef=a(wt);_mediaMatcher=a(Ue);_document=a(D);_renderer=a(J);_animationsDisabled=Dt();_defaultOptions=a(pn,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position="below";_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=Ai;_viewportMargin=8;_currentPosition;_cssClassPrefix="mat-mdc";_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(t){t!==this._position&&(this._position=t,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(t){this._positionAtOrigin=I(t),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(t){let e=I(t);this._disabled!==e&&(this._disabled=e,e?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(t){this._showDelay=ft(t)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(t){this._hideDelay=ft(t),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures="auto";get message(){return this._message}set message(t){let e=this._message;this._message=t!=null?String(t).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(e)}_message="";get tooltipClass(){return this._tooltipClass}set tooltipClass(t){this._tooltipClass=t,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new g;_isDestroyed=!1;constructor(){let t=this._defaultOptions;t&&(this._showDelay=t.showDelay,this._hideDelay=t.hideDelay,t.position&&(this.position=t.position),t.positionAtOrigin&&(this.positionAtOrigin=t.positionAtOrigin),t.touchGestures&&(this.touchGestures=t.touchGestures),t.tooltipClass&&(this.tooltipClass=t.tooltipClass)),this._viewportMargin=un}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(w(this._destroyed)).subscribe(t=>{t?t==="keyboard"&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let t=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(e=>e()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(t,this.message,"tooltip"),this._focusMonitor.stopMonitoring(t)}show(t=this.showDelay,e){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let n=this._createOverlay(e);this._detach(),this._portal=this._portal||new Rt(this._tooltipComponent,this._viewContainerRef);let r=this._tooltipInstance=n.attach(this._portal).instance;r._triggerElement=this._elementRef.nativeElement,r._mouseLeaveHideDelay=this._hideDelay,r.afterHidden().pipe(w(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),r.show(t)}hide(t=this.hideDelay){let e=this._tooltipInstance;e&&(e.isVisible()?e.hide(t):(e._cancelPendingAnimations(),this._detach()))}toggle(t){this._isTooltipVisible()?this.hide():this.show(void 0,t)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(t){if(this._overlayRef){let s=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!t)&&s._origin instanceof x)return this._overlayRef;this._detach()}let e=this._injector.get(K).getAncestorScrollContainers(this._elementRef),n=`${this._cssClassPrefix}-${Ii}`,r=ee(this._injector,this.positionAtOrigin?t||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(e).withPopoverLocation("global");return r.positionChanges.pipe(w(this._destroyed)).subscribe(s=>{this._updateCurrentPositionClass(s.connectionPair),this._tooltipInstance&&s.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=ie(this._injector,{direction:this._dir,positionStrategy:r,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,n]:n,scrollStrategy:this._injector.get(hn)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(w(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(w(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(w(this._destroyed)).subscribe(s=>{s.preventDefault(),s.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(w(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(t){let e=t.getConfig().positionStrategy,n=this._getOrigin(),r=this._getOverlayPosition();e.withPositions([this._addOffset(G(G({},n.main),r.main)),this._addOffset(G(G({},n.fallback),r.fallback))])}_addOffset(t){let e=_n,n=!this._dir||this._dir.value=="ltr";return t.originY==="top"?t.offsetY=-e:t.originY==="bottom"?t.offsetY=e:t.originX==="start"?t.offsetX=n?-e:e:t.originX==="end"&&(t.offsetX=n?e:-e),t}_getOrigin(){let t=!this._dir||this._dir.value=="ltr",e=this.position,n;e=="above"||e=="below"?n={originX:"center",originY:e=="above"?"top":"bottom"}:e=="before"||e=="left"&&t||e=="right"&&!t?n={originX:"start",originY:"center"}:(e=="after"||e=="right"&&t||e=="left"&&!t)&&(n={originX:"end",originY:"center"});let{x:r,y:s}=this._invertPosition(n.originX,n.originY);return{main:n,fallback:{originX:r,originY:s}}}_getOverlayPosition(){let t=!this._dir||this._dir.value=="ltr",e=this.position,n;e=="above"?n={overlayX:"center",overlayY:"bottom"}:e=="below"?n={overlayX:"center",overlayY:"top"}:e=="before"||e=="left"&&t||e=="right"&&!t?n={overlayX:"end",overlayY:"center"}:(e=="after"||e=="right"&&t||e=="left"&&!t)&&(n={overlayX:"start",overlayY:"center"});let{x:r,y:s}=this._invertPosition(n.overlayX,n.overlayY);return{main:n,fallback:{overlayX:r,overlayY:s}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),W(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(t){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=t instanceof Set?Array.from(t):t,this._tooltipInstance._markForCheck())}_invertPosition(t,e){return this.position==="above"||this.position==="below"?e==="top"?e="bottom":e==="bottom"&&(e="top"):t==="end"?t="start":t==="start"&&(t="end"),{x:t,y:e}}_updateCurrentPositionClass(t){let{overlayY:e,originX:n,originY:r}=t,s;if(e==="center"?this._dir&&this._dir.value==="rtl"?s=n==="end"?"left":"right":s=n==="start"?"left":"right":s=e==="bottom"&&r==="top"?"above":"below",s!==this._currentPosition){let l=this._overlayRef;if(l){let d=`${this._cssClassPrefix}-${Ii}-`;l.removePanelClass(d+this._currentPosition),l.addPanelClass(d+s)}this._currentPosition=s}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!=="off"&&(this._disableNativeGesturesIfNecessary(),this._addListener("touchstart",t=>{let e=t.targetTouches?.[0],n=e?{x:e.clientX,y:e.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let r=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,n)},this._defaultOptions?.touchLongPressShowDelay??r)})):this._addListener("mouseenter",t=>{this._setupPointerExitEventsIfNeeded();let e;t.x!==void 0&&t.y!==void 0&&(e=t),this.show(void 0,e)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener("mouseleave",t=>{let e=t.relatedTarget;(!e||!this._overlayRef?.overlayElement.contains(e))&&this.hide()}),this._addListener("wheel",t=>{if(this._isTooltipVisible()){let e=this._document.elementFromPoint(t.clientX,t.clientY),n=this._elementRef.nativeElement;e!==n&&!n.contains(e)&&this.hide()}});else if(this.touchGestures!=="off"){this._disableNativeGesturesIfNecessary();let t=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener("touchend",t),this._addListener("touchcancel",t)}}}_addListener(t,e){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,t,e,fn))}_isTouchPlatform(){let t=this._defaultOptions?.detectHoverCapability;return typeof t=="function"?!t():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!t&&this._mediaMatcher.matchMedia("(any-hover: none)").matches:!1}_disableNativeGesturesIfNecessary(){let t=this.touchGestures;if(t!=="off"){let e=this._elementRef.nativeElement,n=e.style;(t==="on"||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA")&&(n.userSelect=n.msUserSelect=n.webkitUserSelect=n.MozUserSelect="none"),(t==="on"||!e.draggable)&&(n.webkitUserDrag="none"),n.touchAction="none",n.webkitTapHighlightColor="transparent"}}_syncAriaDescription(t){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,t,"tooltip"),this._isDestroyed||W({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip")}},{injector:this._injector}))}_overlayEventPredicate=t=>t.type==="keydown"?this._isTooltipVisible()&&t.keyCode===27&&!Vt(t):!0;static \u0275fac=function(e){return new(e||o)};static \u0275dir=tt({type:o,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],hostVars:2,hostBindings:function(e,n){e&2&&m("mat-mdc-tooltip-disabled",n.disabled)},inputs:{position:[0,"matTooltipPosition","position"],positionAtOrigin:[0,"matTooltipPositionAtOrigin","positionAtOrigin"],disabled:[0,"matTooltipDisabled","disabled"],showDelay:[0,"matTooltipShowDelay","showDelay"],hideDelay:[0,"matTooltipHideDelay","hideDelay"],touchGestures:[0,"matTooltipTouchGestures","touchGestures"],message:[0,"matTooltip","message"],tooltipClass:[0,"matTooltipClass","tooltipClass"]},exportAs:["matTooltip"]})}return o})(),Ai=(()=>{class o{_changeDetectorRef=a(pt);_elementRef=a(x);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=Dt();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new g;_showAnimation="mat-mdc-tooltip-show";_hideAnimation="mat-mdc-tooltip-hide";constructor(){}show(t){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},t)}hide(t){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},t)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:t}){(!t||!this._triggerElement.contains(t))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let t=this._elementRef.nativeElement.getBoundingClientRect();return t.height>mn&&t.width>=gn}_handleAnimationEnd({animationName:t}){(t===this._showAnimation||t===this._hideAnimation)&&this._finalizeAnimation(t===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(t){t?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(t){let e=this._tooltip.nativeElement,n=this._showAnimation,r=this._hideAnimation;if(e.classList.remove(t?r:n),e.classList.add(t?n:r),this._isVisible!==t&&(this._isVisible=t,this._changeDetectorRef.markForCheck()),t&&!this._animationsDisabled&&typeof getComputedStyle=="function"){let s=getComputedStyle(e);(s.getPropertyValue("animation-duration")==="0s"||s.getPropertyValue("animation-name")==="none")&&(this._animationsDisabled=!0)}t&&this._onShow(),this._animationsDisabled&&(e.classList.add("_mat-animation-noopable"),this._finalizeAnimation(t))}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=v({type:o,selectors:[["mat-tooltip-component"]],viewQuery:function(e,n){if(e&1&&vt(dn,7),e&2){let r;B(r=L())&&(n._tooltip=r.first)}},hostAttrs:["aria-hidden","true"],hostBindings:function(e,n){e&1&&V("mouseleave",function(s){return n._handleMouseLeave(s)})},decls:4,vars:5,consts:[["tooltip",""],[1,"mdc-tooltip","mat-mdc-tooltip",3,"animationend"],[1,"mat-mdc-tooltip-surface","mdc-tooltip__surface"]],template:function(e,n){e&1&&(gt(0,"div",1,0),Be("animationend",function(s){return n._handleAnimationEnd(s)}),gt(2,"div",2),C(3),xt()()),e&2&&(It(n.tooltipClass),m("mdc-tooltip--multiline",n._isMultiline),_(3),nt(n.message))},styles:[`.mat-mdc-tooltip {
  position: relative;
  transform: scale(0);
  display: inline-flex;
}
.mat-mdc-tooltip::before {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  position: absolute;
}
.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {
  top: -8px;
}
.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {
  bottom: -8px;
}
.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {
  left: -8px;
}
.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {
  right: -8px;
}
.mat-mdc-tooltip._mat-animation-noopable {
  animation: none;
  transform: scale(1);
}

.mat-mdc-tooltip-surface {
  word-break: normal;
  overflow-wrap: anywhere;
  padding: 4px 8px;
  min-width: 40px;
  max-width: 200px;
  min-height: 24px;
  max-height: 40vh;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  will-change: transform, opacity;
  background-color: var(--mat-tooltip-container-color, var(--mat-sys-inverse-surface));
  color: var(--mat-tooltip-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-tooltip-container-shape, var(--mat-sys-corner-extra-small));
  font-family: var(--mat-tooltip-supporting-text-font, var(--mat-sys-body-small-font));
  font-size: var(--mat-tooltip-supporting-text-size, var(--mat-sys-body-small-size));
  font-weight: var(--mat-tooltip-supporting-text-weight, var(--mat-sys-body-small-weight));
  line-height: var(--mat-tooltip-supporting-text-line-height, var(--mat-sys-body-small-line-height));
  letter-spacing: var(--mat-tooltip-supporting-text-tracking, var(--mat-sys-body-small-tracking));
}
.mat-mdc-tooltip-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: left;
}
[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: right;
}

.mat-mdc-tooltip-panel {
  line-height: normal;
}
.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {
  pointer-events: none;
}

@keyframes mat-mdc-tooltip-show {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes mat-mdc-tooltip-hide {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
.mat-mdc-tooltip-show {
  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.mat-mdc-tooltip-hide {
  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
`],encapsulation:2,changeDetection:0})}return o})();var Fi=(()=>{class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=O({type:o});static \u0275inj=k({imports:[ti,ke,A,rt]})}return o})();var Vi=[{label:"General",section:!0},{label:"Dashboard",icon:"dashboard",route:"/home"},{label:"Data Structures",section:!0},{label:"Stack",icon:"layers",route:"/stack"},{label:"Queue",icon:"view_stream",route:"/queue"},{label:"Linked List",icon:"share",route:"/linked-list"},{label:"Trees",icon:"account_tree",children:[{label:"Binary Tree",route:"/trees/binary-tree"},{label:"Binary Search Tree",route:"/trees/binary-search-tree"},{label:"AVL Tree",route:"/trees/avl-tree"},{label:"Heap",route:"/trees/heap"}]},{label:"Graphs",icon:"hub",children:[{label:"Breadth First Search",route:"/graphs/bfs"},{label:"Depth First Search",route:"/graphs/dfs"},{label:"Dijkstra",route:"/graphs/dijkstra"},{label:"Prim's Algorithm",route:"/graphs/prims"},{label:"Kruskal's Algorithm",route:"/graphs/kruskals"}]},{label:"Developer",section:!0},{label:"About Me",icon:"person",route:"/about"}];var Bi=(o,i)=>i.label;function bn(o,i){o&1&&(h(0,"div",2)(1,"mat-icon"),C(2,"account_tree"),p(),h(3,"span"),C(4,"AlgoVista"),p()())}function wn(o,i){if(o&1&&(h(0,"div",7),C(1),p()),o&2){let t=y().$implicit,e=y();m("hidden",e.collapsed()),_(),nt(t.label)}}function Cn(o,i){if(o&1&&(h(0,"a",14),C(1),p()),o&2){let t=i.$implicit;ct("routerLink",t.route),_(),At(" ",t.label," ")}}function xn(o,i){if(o&1&&(h(0,"div",13),le(1,Cn,2,2,"a",14,Bi),p()),o&2){let t=y(2).$implicit,e=y();m("hidden",e.collapsed()),_(),de(t.children)}}function Sn(o,i){if(o&1){let t=it();h(0,"div",8),V("click",function(){$(t);let n=y().$implicit,r=y();return Q(r.toggleItem(n))}),h(1,"div",9)(2,"mat-icon"),C(3),p(),h(4,"span",10),C(5),p()(),h(6,"mat-icon",11),C(7),p()(),z(8,xn,3,2,"div",12)}if(o&2){let t=y().$implicit,e=y();ct("matTooltip",e.collapsed()?t.label:""),_(3),nt(t.icon),_(),m("hidden",e.collapsed()),_(),nt(t.label),_(),m("hidden",e.collapsed()),_(),At(" ",e.isExpanded(t)?"expand_less":"expand_more"," "),_(),j(e.isExpanded(t)?8:-1)}}function kn(o,i){if(o&1&&(h(0,"a",6)(1,"div",9)(2,"mat-icon"),C(3),p(),h(4,"span",10),C(5),p()()()),o&2){let t=y().$implicit,e=y();ct("routerLink",t.route)("matTooltip",e.collapsed()?t.label:""),_(3),nt(t.icon),_(),m("hidden",e.collapsed()),_(),nt(t.label)}}function Dn(o,i){if(o&1&&z(0,wn,2,3,"div",5)(1,Sn,9,9)(2,kn,6,6,"a",6),o&2){let t=i.$implicit,e=y();j(t.section?0:e.hasChildren(t)?1:2)}}var ne=class o{collapsed=ze(!1);toggle=Ne();navigation=Vi;expandedItems=q(new Set(["Trees","Graphs"]));hasChildren(i){return!!i.children?.length}isExpanded(i){return this.expandedItems().has(i.label)}toggleItem(i){if(!this.hasChildren(i))return;let t=new Set(this.expandedItems());t.has(i.label)?t.delete(i.label):t.add(i.label),this.expandedItems.set(t)}static \u0275fac=function(t){return new(t||o)};static \u0275cmp=v({type:o,selectors:[["app-sidebar"]],inputs:{collapsed:[1,"collapsed"]},outputs:{toggle:"toggle"},decls:10,vars:4,consts:[[1,"sidebar"],[1,"sidebar-header"],[1,"brand"],["mat-icon-button","",1,"collapse-button",3,"click"],[1,"navigation"],[1,"section-title",3,"hidden"],["routerLinkActive","active-link","matTooltipPosition","right",1,"nav-item",3,"routerLink","matTooltip"],[1,"section-title"],["matTooltipPosition","right",1,"nav-item",3,"click","matTooltip"],[1,"nav-left"],[1,"label"],[1,"expand-icon"],[1,"children",3,"hidden"],[1,"children"],["routerLinkActive","active-link",1,"child-item",3,"routerLink"]],template:function(t,e){t&1&&(h(0,"div",0)(1,"div",1),z(2,bn,5,0,"div",2),h(3,"button",3),V("click",function(){return e.toggle.emit()}),h(4,"mat-icon"),C(5),p()()(),et(6,"mat-divider"),h(7,"nav",4),le(8,Dn,3,1,null,null,Bi),p()()),t&2&&(m("collapsed",e.collapsed()),_(2),j(e.collapsed()?-1:2),_(3),At(" ",e.collapsed()?"chevron_right":"chevron_left"," "),_(3),de(e.navigation))},dependencies:[We,Ze,Xe,Ge,pi,hi,Nt,Lt,Fi,De],styles:["[_nghost-%COMP%]{display:block;width:100%;height:100%}.sidebar[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;overflow-y:auto;overflow-x:hidden;background:#14161c}.sidebar-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;min-height:56px;margin-bottom:12px;padding:20px 16px 8px}.sidebar.collapsed[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]{justify-content:center}.brand[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;overflow:hidden}.brand[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{width:32px;height:32px;font-size:32px;color:var(--mat-sys-primary);flex-shrink:0}.brand-text[_ngcontent-%COMP%], .label[_ngcontent-%COMP%], .section-title[_ngcontent-%COMP%], .expand-icon[_ngcontent-%COMP%]{transition:opacity .2s ease,max-width .25s ease,margin .25s ease}.brand-text[_ngcontent-%COMP%]{white-space:nowrap;max-width:180px;opacity:1}.section-title[_ngcontent-%COMP%]{padding:20px 16px 8px;font-size:11px;font-weight:700;letter-spacing:1.4px;text-transform:uppercase;color:var(--mat-sys-on-surface-variant);white-space:nowrap;max-width:180px;opacity:1}.navigation[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px;margin-top:12px}.nav-item[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;height:52px;margin-bottom:8px;padding:0 16px;border-radius:12px;cursor:pointer;text-decoration:none;transition:background .2s ease}.nav-item[_ngcontent-%COMP%]:hover{background:#3b82f626}.nav-left[_ngcontent-%COMP%]{display:flex;align-items:center;gap:16px;overflow:hidden}.nav-left[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{flex-shrink:0;color:#9fb3d9;transition:color .2s ease}.label[_ngcontent-%COMP%]{white-space:nowrap;max-width:180px;opacity:1;color:#e5e1e6;letter-spacing:.009rem}.active-link[_ngcontent-%COMP%]{background:linear-gradient(135deg,#2563eb,#7c3aed);color:#fff;box-shadow:0 10px 20px #2563eb59}.active-link[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#fff}.children[_ngcontent-%COMP%]{margin-left:52px;display:flex;flex-direction:column;overflow:hidden;transition:max-height .25s ease,opacity .2s ease}.child-item[_ngcontent-%COMP%]{padding:15px 12px;border-radius:10px;text-decoration:none;color:#e5e1e6;letter-spacing:.009rem;transition:background .2s}.child-item[_ngcontent-%COMP%]:hover{background:#ffffff14}.child-item.active-link[_ngcontent-%COMP%]{background:linear-gradient(135deg,#2563eb,#7c3aed);color:#fff}.hidden[_ngcontent-%COMP%]{opacity:0;max-width:0;margin:0!important;overflow:hidden;pointer-events:none;display:none}.sidebar.collapsed[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]{width:48px;height:48px;margin:0 auto;padding:0;justify-content:center;border-radius:14px}.sidebar.collapsed[_ngcontent-%COMP%]   .active-link[_ngcontent-%COMP%]{width:48px;height:48px}.sidebar.collapsed[_ngcontent-%COMP%]   .nav-left[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:48px;min-width:48px;margin:0 auto}.sidebar.collapsed[_ngcontent-%COMP%]   .nav-left[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin:0}.sidebar.collapsed[_ngcontent-%COMP%]   .children[_ngcontent-%COMP%]{max-height:0;opacity:0;margin:0;overflow:hidden}mat-icon[_ngcontent-%COMP%]{color:#9fb3d9}"],changeDetection:0})};function On(o,i){if(o&1){let t=it();h(0,"div",3)(1,"aside",4)(2,"app-sidebar",5),V("toggle",function(){$(t);let n=y();return Q(n.toggleDesktopSidebar())}),p()(),h(3,"section",6)(4,"main",7),et(5,"router-outlet"),p(),et(6,"app-footer"),p()()}if(o&2){let t=y();m("sidebar-collapsed",t.sidebarCollapsed()),_(2),ct("collapsed",t.sidebarCollapsed())}}function Rn(o,i){if(o&1){let t=it();h(0,"mat-sidenav-container",2)(1,"mat-sidenav",8,0),V("closed",function(){$(t);let n=y();return Q(n.closeDrawer())}),et(3,"app-sidebar"),p(),h(4,"mat-sidenav-content")(5,"mat-toolbar")(6,"button",9),V("click",function(){$(t);let n=Le(2);return Q(n.toggle())}),h(7,"mat-icon"),C(8,"menu"),p()(),h(9,"span",10),C(10," AlgoVista "),p()(),h(11,"main",7),et(12,"router-outlet"),p(),et(13,"app-footer"),p()()}if(o&2){let t=y();_(),ct("opened",t.drawerOpened())}}var Li=class o{breakpointObserver=a($e);mobile=q(!1);drawerOpened=q(!1);sidebarCollapsed=q(!1);constructor(){this.breakpointObserver.observe("(max-width:768px)").subscribe(i=>{this.mobile.set(i.matches),i.matches&&this.drawerOpened.set(!1)})}toggleDesktopSidebar(){this.sidebarCollapsed.update(i=>!i)}openDrawer(){this.drawerOpened.set(!0)}closeDrawer(){this.drawerOpened.set(!1)}static \u0275fac=function(t){return new(t||o)};static \u0275cmp=v({type:o,selectors:[["app-shell"]],decls:2,vars:1,consts:[["drawer",""],[1,"desktop-layout",3,"sidebar-collapsed"],[1,"mobile-container"],[1,"desktop-layout"],[1,"desktop-sidebar"],[3,"toggle","collapsed"],[1,"desktop-content"],[1,"page-content"],["mode","over",3,"closed","opened"],["mat-icon-button","",3,"click"],[1,"mobile-title"]],template:function(t,e){t&1&&z(0,On,7,3,"div",1)(1,Rn,14,1,"mat-sidenav-container",2),t&2&&j(e.mobile()?1:0)},dependencies:[Ye,Qe,ai,ye,si,jt,di,li,oi,ni,Nt,Lt,ne,Wt],styles:["[_nghost-%COMP%]{display:block;height:100dvh}.desktop-layout[_ngcontent-%COMP%]{display:grid;grid-template-columns:260px 1fr;height:100dvh;transition:grid-template-columns .25s ease;background:var(--mat-sys-surface)}.desktop-layout.sidebar-collapsed[_ngcontent-%COMP%]{grid-template-columns:72px 1fr}.desktop-sidebar[_ngcontent-%COMP%]{overflow:hidden;border-right:1px solid var(--mat-sys-outline-variant);background:var(--mat-sys-surface)}.desktop-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;min-width:0;overflow:hidden}.page-content[_ngcontent-%COMP%]{flex:1;min-width:0;overflow:auto;padding:24px}.mobile-container[_ngcontent-%COMP%]{height:100dvh}.mobile-title[_ngcontent-%COMP%]{margin-left:12px;font-size:20px;font-weight:600}@media(max-width:768px){.page-content[_ngcontent-%COMP%]{padding:16px}}"],changeDetection:0})};export{Li as Shell};
