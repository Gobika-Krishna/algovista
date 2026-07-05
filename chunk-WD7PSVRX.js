import{a as ce,b as le,c as de}from"./chunk-LJASQV7E.js";import{a as fe,b as be}from"./chunk-BMLWKZVG.js";import{A as yt,L as we,b as B,c as et,d as me,e as ft,f as bt,i as he,j as pe,k as ue,l as ge,m as vt,o as xt,p as wt,q as A,r as x,s as it,t as _e,u as nt,w as at,y as ve,z as xe}from"./chunk-6FYXFHDN.js";import"./chunk-LL2UBHEO.js";import{$ as Tt,$a as k,$b as L,A as ht,Ab as Q,B as At,Bb as p,Cb as u,Gb as _t,Hb as K,Ib as g,K as Y,Kb as d,La as D,M as P,Mb as Vt,Pa as pt,Qa as ut,Qb as E,R as rt,Ra as Ft,S as f,Sa as G,U as M,Ua as ct,Va as oe,W as a,Wb as re,Ya as h,Za as b,_a as _,aa as Pt,ab as zt,ba as It,bc as tt,c as W,ca as U,cc as se,da as j,e as ee,f as v,ga as w,gb as S,h as ie,ha as O,hb as N,ib as H,j as ne,la as V,mb as gt,n as Rt,nb as c,oa as st,ob as r,pa as I,pb as F,qb as Z,ra as y,rb as $,sa as Lt,sb as Bt,tb as jt,u as X,v as R,vb as q,w as Ot,wb as J,xb as C,yb as m,z as ae,zb as z}from"./chunk-JOZBEYQF.js";var Ge=20,Nt=(()=>{class i{_ngZone=a(O);_platform=a(B);_renderer=a(Ft).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new v;_scrolledCount=0;scrollContainers=new Map;register(t){this.scrollContainers.has(t)||this.scrollContainers.set(t,t.elementScrolled().subscribe(()=>this._scrolled.next(t)))}deregister(t){let e=this.scrollContainers.get(t);e&&(e.unsubscribe(),this.scrollContainers.delete(t))}scrolled(t=Ge){return this._platform.isBrowser?new ee(e=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let n=t>0?this._scrolled.pipe(Ot(t)).subscribe(e):this._scrolled.subscribe(e);return this._scrolledCount++,()=>{n.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):ne()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((t,e)=>this.deregister(e)),this._scrolled.complete()}ancestorScrolled(t,e){let n=this.getAncestorScrollContainers(t);return this.scrolled(e).pipe(R(o=>!o||n.indexOf(o)>-1))}getAncestorScrollContainers(t){let e=[];return this.scrollContainers.forEach((n,o)=>{this._scrollableContainsElement(o,t)&&e.push(o)}),e}_scrollableContainsElement(t,e){let n=me(e),o=t.getElementRef().nativeElement;do if(n==o)return!0;while(n=n.parentElement);return!1}static \u0275fac=function(e){return new(e||i)};static \u0275prov=rt({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),ot=(()=>{class i{elementRef=a(y);scrollDispatcher=a(Nt);ngZone=a(O);dir=a(wt,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new v;_renderer=a(G);_cleanupScroll;_elementScrolled=new v;constructor(){}ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",t=>this._elementScrolled.next(t))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(t){let e=this.elementRef.nativeElement,n=this.dir&&this.dir.value=="rtl";t.left==null&&(t.left=n?t.end:t.start),t.right==null&&(t.right=n?t.start:t.end),t.bottom!=null&&(t.top=e.scrollHeight-e.clientHeight-t.bottom),n&&nt()!=it.NORMAL?(t.left!=null&&(t.right=e.scrollWidth-e.clientWidth-t.left),nt()==it.INVERTED?t.left=t.right:nt()==it.NEGATED&&(t.left=t.right?-t.right:t.right)):t.right!=null&&(t.left=e.scrollWidth-e.clientWidth-t.right),this._applyScrollToOptions(t)}_applyScrollToOptions(t){let e=this.elementRef.nativeElement;_e()?e.scrollTo(t):(t.top!=null&&(e.scrollTop=t.top),t.left!=null&&(e.scrollLeft=t.left))}measureScrollOffset(t){let e="left",n="right",o=this.elementRef.nativeElement;if(t=="top")return o.scrollTop;if(t=="bottom")return o.scrollHeight-o.clientHeight-o.scrollTop;let s=this.dir&&this.dir.value=="rtl";return t=="start"?t=s?n:e:t=="end"&&(t=s?e:n),s&&nt()==it.INVERTED?t==e?o.scrollWidth-o.clientWidth-o.scrollLeft:o.scrollLeft:s&&nt()==it.NEGATED?t==e?o.scrollLeft+o.scrollWidth-o.clientWidth:-o.scrollLeft:t==e?o.scrollLeft:o.scrollWidth-o.clientWidth-o.scrollLeft}static \u0275fac=function(e){return new(e||i)};static \u0275dir=_({type:i,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return i})(),Ze=20,ye=(()=>{class i{_platform=a(B);_listeners;_viewportSize=null;_change=new v;_document=a(j);constructor(){let t=a(O),e=a(Ft).createRenderer(null,null);t.runOutsideAngular(()=>{if(this._platform.isBrowser){let n=o=>this._change.next(o);this._listeners=[e.listen("window","resize",n),e.listen("window","orientationchange",n)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(t=>t()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let t={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),t}getViewportRect(){let t=this.getViewportScrollPosition(),{width:e,height:n}=this.getViewportSize();return{top:t.top,left:t.left,bottom:t.top+n,right:t.left+e,height:n,width:e}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let t=this._document,e=this._getWindow(),n=t.documentElement,o=n.getBoundingClientRect(),s=-o.top||t.body?.scrollTop||e.scrollY||n.scrollTop||0,We=-o.left||t.body?.scrollLeft||e.scrollX||n.scrollLeft||0;return{top:s,left:We}}change(t=Ze){return t>0?this._change.pipe(Ot(t)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let t=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:t.innerWidth,height:t.innerHeight}:{width:0,height:0}}static \u0275fac=function(e){return new(e||i)};static \u0275prov=rt({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Ht=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=b({type:i});static \u0275inj=f({})}return i})();var Mt=["*"],Ke=["content"],Xe=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],Ye=["mat-drawer","mat-drawer-content","*"];function $e(i,l){if(i&1){let t=jt();c(0,"div",1),q("click",function(){Tt(t);let n=J();return Pt(n._onBackdropClicked())}),r()}if(i&2){let t=J();g("mat-drawer-shown",t._isShowingBackdrop())}}function Je(i,l){i&1&&(c(0,"mat-drawer-content"),m(1,2),r())}var ti=[[["mat-sidenav"]],[["mat-sidenav-content"]],"*"],ei=["mat-sidenav","mat-sidenav-content","*"];function ii(i,l){if(i&1){let t=jt();c(0,"div",1),q("click",function(){Tt(t);let n=J();return Pt(n._onBackdropClicked())}),r()}if(i&2){let t=J();g("mat-drawer-shown",t._isShowingBackdrop())}}function ni(i,l){i&1&&(c(0,"mat-sidenav-content"),m(1,2),r())}var ai=`.mat-drawer-container {
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
`;var oi=new M("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),Ut=new M("MAT_DRAWER_CONTAINER"),kt=(()=>{class i extends ot{_platform=a(B);_changeDetectorRef=a(L);_container=a(Wt);constructor(){let t=a(y),e=a(Nt),n=a(O);super(t,e,n)}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:t,end:e}=this._container;return t!=null&&t.mode!=="over"&&t.opened||e!=null&&e.mode!=="over"&&e.opened}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=h({type:i,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(e,n){e&2&&(K("margin-left",n._container._contentMargins.left,"px")("margin-right",n._container._contentMargins.right,"px"),g("mat-drawer-content-hidden",n._shouldBeHidden()))},features:[E([{provide:ot,useExisting:i}]),k],ngContentSelectors:Mt,decls:1,vars:0,template:function(e,n){e&1&&(C(),m(0))},encapsulation:2,changeDetection:0})}return i})(),Qt=(()=>{class i{_elementRef=a(y);_focusTrapFactory=a(ge);_focusMonitor=a(ft);_platform=a(B);_ngZone=a(O);_renderer=a(G);_interactivityChecker=a(ue);_doc=a(j);_container=a(Ut,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(t){t=t==="end"?"end":"start",t!==this._position&&(this._isAttached&&this._updatePositionInParent(t),this._position=t,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(t){this._mode=t,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(t){this._disableClose=x(t)}_disableClose=!1;get autoFocus(){let t=this._autoFocus;return t??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(t){(t==="true"||t==="false"||t==null)&&(t=x(t)),this._autoFocus=t}_autoFocus;get opened(){return this._opened()}set opened(t){this.toggle(x(t))}_opened=V(!1);_openedVia=null;_animationStarted=new v;_animationEnd=new v;openedChange=new w(!0);_openedStream=this.openedChange.pipe(R(t=>t),Rt(()=>{}));openedStart=this._animationStarted.pipe(R(()=>this.opened),At(void 0));_closedStream=this.openedChange.pipe(R(t=>!t),Rt(()=>{}));closedStart=this._animationStarted.pipe(R(()=>!this.opened),At(void 0));_destroyed=new v;onPositionChanged=new w;_content;_modeChanged=new v;_injector=a(U);_changeDetectorRef=a(L);constructor(){this.openedChange.pipe(P(this._destroyed)).subscribe(t=>{t?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let t=this._renderer,e=this._elementRef.nativeElement;return[t.listen(e,"keydown",n=>{n.keyCode===27&&!this.disableClose&&!vt(n)&&this._ngZone.run(()=>{this.close(),n.stopPropagation(),n.preventDefault()})}),t.listen(e,"transitionend",this._handleTransitionEvent),t.listen(e,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_forceFocus(t,e){this._interactivityChecker.isFocusable(t)||(t.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let n=()=>{o(),s(),t.removeAttribute("tabindex")},o=this._renderer.listen(t,"blur",n),s=this._renderer.listen(t,"mousedown",n)})),t.focus(e)}_focusByCssSelector(t,e){let n=this._elementRef.nativeElement.querySelector(t);n&&this._forceFocus(n,e)}_takeFocus(){if(!this._focusTrap)return;let t=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":pt(()=>{!this._focusTrap.focusInitialElement()&&typeof t.focus=="function"&&t.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(t){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,t):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let t=this._doc.activeElement;return!!t&&this._elementRef.nativeElement.contains(t)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(t){return this.toggle(!0,t)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(t=!this.opened,e){t&&e&&(this._openedVia=e);let n=this._setOpen(t,!t&&this._isFocusWithinDrawer(),this._openedVia||"program");return t||(this._openedVia=null),n}_setOpen(t,e,n){return t===this.opened?Promise.resolve(t?"open":"close"):(this._opened.set(t),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",t),!t&&e&&this._restoreFocus(n),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(o=>{this.openedChange.pipe(ht(1)).subscribe(s=>o(s?"open":"close"))}))}_setIsAnimating(t){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",t)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(t){if(!this._platform.isBrowser)return;let e=this._elementRef.nativeElement,n=e.parentNode;t==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),n.insertBefore(this._anchor,e)),n.appendChild(e)):this._anchor&&this._anchor.parentNode.insertBefore(e,this._anchor)}_handleTransitionEvent=t=>{let e=this._elementRef.nativeElement;t.target===e&&this._ngZone.run(()=>{t.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(t)})};static \u0275fac=function(e){return new(e||i)};static \u0275cmp=h({type:i,selectors:[["mat-drawer"]],viewQuery:function(e,n){if(e&1&&Q(Ke,5),e&2){let o;p(o=u())&&(n._content=o.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(e,n){e&2&&(S("align",null)("tabIndex",n.mode!=="side"?"-1":null),K("visibility",!n._container&&!n.opened?"hidden":null),g("mat-drawer-end",n.position==="end")("mat-drawer-over",n.mode==="over")("mat-drawer-push",n.mode==="push")("mat-drawer-side",n.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:Mt,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(e,n){e&1&&(C(),c(0,"div",1,0),m(2),r())},dependencies:[ot],encapsulation:2,changeDetection:0})}return i})(),Wt=(()=>{class i{_dir=a(wt,{optional:!0});_element=a(y);_ngZone=a(O);_changeDetectorRef=a(L);_animationDisabled=at();_transitionsEnabled=!1;_allDrawers;_drawers=new Lt;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(t){this._autosize=x(t)}_autosize=a(oi);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(t){this._backdropOverride=t==null?null:x(t)}_backdropOverride=null;backdropClick=new w;_start=null;_end=null;_left=null;_right=null;_destroyed=new v;_doCheckSubject=new v;_contentMargins={left:null,right:null};_contentMarginChanges=new v;get scrollable(){return this._userContent||this._content}_injector=a(U);constructor(){let t=a(B),e=a(ye);this._dir?.change.pipe(P(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),e.change().pipe(P(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&t.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(Y(this._allDrawers),P(this._destroyed)).subscribe(t=>{this._drawers.reset(t.filter(e=>!e._container||e._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(Y(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(t=>{this._watchDrawerToggle(t),this._watchDrawerPosition(t),this._watchDrawerMode(t)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(ae(10),P(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(t=>t.open())}close(){this._drawers.forEach(t=>t.close())}updateContentMargins(){let t=0,e=0;if(this._left&&this._left.opened){if(this._left.mode=="side")t+=this._left._getWidth();else if(this._left.mode=="push"){let n=this._left._getWidth();t+=n,e-=n}}if(this._right&&this._right.opened){if(this._right.mode=="side")e+=this._right._getWidth();else if(this._right.mode=="push"){let n=this._right._getWidth();e+=n,t-=n}}t=t||null,e=e||null,(t!==this._contentMargins.left||e!==this._contentMargins.right)&&(this._contentMargins={left:t,right:e},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(t){t._animationStarted.pipe(P(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),t.mode!=="side"&&t.openedChange.pipe(P(this._drawers.changes)).subscribe(()=>this._setContainerClass(t.opened))}_watchDrawerPosition(t){t.onPositionChanged.pipe(P(this._drawers.changes)).subscribe(()=>{pt({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(t){t._modeChanged.pipe(P(X(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(t){let e=this._element.nativeElement.classList,n="mat-drawer-container-has-open";t?e.add(n):e.remove(n)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(t=>{t.position=="end"?(this._end!=null,this._end=t):(this._start!=null,this._start=t)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(t=>t&&!t.disableClose&&this._drawerHasBackdrop(t)).forEach(t=>t._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(t){return t!=null&&t.opened}_drawerHasBackdrop(t){return this._backdropOverride==null?!!t&&t.mode!=="side":this._backdropOverride}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=h({type:i,selectors:[["mat-drawer-container"]],contentQueries:function(e,n,o){if(e&1&&z(o,kt,5)(o,Qt,5),e&2){let s;p(s=u())&&(n._content=s.first),p(s=u())&&(n._allDrawers=s)}},viewQuery:function(e,n){if(e&1&&Q(kt,5),e&2){let o;p(o=u())&&(n._userContent=o.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(e,n){e&2&&g("mat-drawer-container-explicit-backdrop",n._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[E([{provide:Ut,useExisting:i}])],ngContentSelectors:Ye,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(e,n){e&1&&(C(Xe),N(0,$e,1,2,"div",0),m(1),m(2,1),N(3,Je,2,0,"mat-drawer-content")),e&2&&(H(n.hasBackdrop?0:-1),D(3),H(n._content?-1:3))},dependencies:[kt],styles:[`.mat-drawer-container {
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
`],encapsulation:2,changeDetection:0})}return i})(),Ct=(()=>{class i extends kt{static \u0275fac=(()=>{let t;return function(n){return(t||(t=I(i)))(n||i)}})();static \u0275cmp=h({type:i,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[E([{provide:ot,useExisting:i}]),k],ngContentSelectors:Mt,decls:1,vars:0,template:function(e,n){e&1&&(C(),m(0))},encapsulation:2,changeDetection:0})}return i})(),Gt=(()=>{class i extends Qt{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(t){this._fixedInViewport=x(t)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(t){this._fixedTopGap=et(t)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(t){this._fixedBottomGap=et(t)}_fixedBottomGap=0;static \u0275fac=(()=>{let t;return function(n){return(t||(t=I(i)))(n||i)}})();static \u0275cmp=h({type:i,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(e,n){e&2&&(S("tabIndex",n.mode!=="side"?"-1":null)("align",null),K("top",n.fixedInViewport?n.fixedTopGap:null,"px")("bottom",n.fixedInViewport?n.fixedBottomGap:null,"px"),g("mat-drawer-end",n.position==="end")("mat-drawer-over",n.mode==="over")("mat-drawer-push",n.mode==="push")("mat-drawer-side",n.mode==="side")("mat-sidenav-fixed",n.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[E([{provide:Qt,useExisting:i}]),k],ngContentSelectors:Mt,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(e,n){e&1&&(C(),c(0,"div",1,0),m(2),r())},dependencies:[ot],encapsulation:2,changeDetection:0})}return i})(),ke=(()=>{class i extends Wt{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let t;return function(n){return(t||(t=I(i)))(n||i)}})();static \u0275cmp=h({type:i,selectors:[["mat-sidenav-container"]],contentQueries:function(e,n,o){if(e&1&&z(o,Ct,5)(o,Gt,5),e&2){let s;p(s=u())&&(n._content=s.first),p(s=u())&&(n._allDrawers=s)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(e,n){e&2&&g("mat-drawer-container-explicit-backdrop",n._backdropOverride)},exportAs:["matSidenavContainer"],features:[E([{provide:Ut,useExisting:i},{provide:Wt,useExisting:i}]),k],ngContentSelectors:ei,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(e,n){e&1&&(C(ti),N(0,ii,1,2,"div",0),m(1),m(2,1),N(3,ni,2,0,"mat-sidenav-content")),e&2&&(H(n.hasBackdrop?0:-1),D(3),H(n._content?-1:3))},dependencies:[Ct],styles:[ai],encapsulation:2,changeDetection:0})}return i})(),Ce=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=b({type:i});static \u0275inj=f({imports:[Ht,A,Ht]})}return i})();var Me=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=b({type:i});static \u0275inj=f({imports:[A]})}return i})();var Zt=(()=>{class i{get vertical(){return this._vertical}set vertical(t){this._vertical=x(t)}_vertical=!1;get inset(){return this._inset}set inset(t){this._inset=x(t)}_inset=!1;static \u0275fac=function(e){return new(e||i)};static \u0275cmp=h({type:i,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(e,n){e&2&&(S("aria-orientation",n.vertical?"vertical":"horizontal"),g("mat-divider-vertical",n.vertical)("mat-divider-horizontal",!n.vertical)("mat-divider-inset",n.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(e,n){},styles:[`.mat-divider {
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
`],encapsulation:2,changeDetection:0})}return i})(),Dt=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=b({type:i});static \u0275inj=f({imports:[A]})}return i})();var lt=(()=>{class i{_listeners=[];notify(t,e){for(let n of this._listeners)n(t,e)}listen(t){return this._listeners.push(t),()=>{this._listeners=this._listeners.filter(e=>t!==e)}}ngOnDestroy(){this._listeners=[]}static \u0275fac=function(e){return new(e||i)};static \u0275prov=rt({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var De=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=b({type:i});static \u0275inj=f({imports:[A]})}return i})();var si=["*"],ci=`.mdc-list {
  margin: 0;
  padding: 8px 0;
  list-style-type: none;
}
.mdc-list:focus {
  outline: none;
}

.mdc-list-item {
  display: flex;
  position: relative;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  align-items: stretch;
  cursor: pointer;
  padding-left: 16px;
  padding-right: 16px;
  background-color: var(--mat-list-list-item-container-color, transparent);
  border-radius: var(--mat-list-list-item-container-shape, var(--mat-sys-corner-none));
}
.mdc-list-item.mdc-list-item--selected {
  background-color: var(--mat-list-list-item-selected-container-color);
}
.mdc-list-item:focus {
  outline: 0;
}
.mdc-list-item.mdc-list-item--disabled {
  cursor: auto;
}
.mdc-list-item.mdc-list-item--with-one-line {
  height: var(--mat-list-list-item-one-line-container-height, 48px);
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-two-lines {
  height: var(--mat-list-list-item-two-line-container-height, 64px);
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-three-lines {
  height: var(--mat-list-list-item-three-line-container-height, 88px);
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--selected::before, .mdc-list-item.mdc-list-item--selected:focus::before, .mdc-list-item:not(.mdc-list-item--selected):focus::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  content: "";
  pointer-events: none;
}

a.mdc-list-item {
  color: inherit;
  text-decoration: none;
}

.mdc-list-item__start {
  fill: currentColor;
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-leading-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-leading-icon-size, 24px);
  height: var(--mat-list-list-item-leading-icon-size, 24px);
  margin-left: 16px;
  margin-right: 32px;
}
[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-left: 32px;
  margin-right: 16px;
}
.mdc-list-item--with-leading-icon:hover .mdc-list-item__start {
  color: var(--mat-list-list-item-hover-leading-icon-color);
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start {
  width: var(--mat-list-list-item-leading-avatar-size, 40px);
  height: var(--mat-list-list-item-leading-avatar-size, 40px);
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start, [dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start {
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}

.mdc-list-item__end {
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  font-family: var(--mat-list-list-item-trailing-supporting-text-font, var(--mat-sys-label-small-font));
  line-height: var(--mat-list-list-item-trailing-supporting-text-line-height, var(--mat-sys-label-small-line-height));
  font-size: var(--mat-list-list-item-trailing-supporting-text-size, var(--mat-sys-label-small-size));
  font-weight: var(--mat-list-list-item-trailing-supporting-text-weight, var(--mat-sys-label-small-weight));
  letter-spacing: var(--mat-list-list-item-trailing-supporting-text-tracking, var(--mat-sys-label-small-tracking));
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-trailing-icon-size, 24px);
  height: var(--mat-list-list-item-trailing-icon-size, 24px);
}
.mdc-list-item--with-trailing-icon:hover .mdc-list-item__end {
  color: var(--mat-list-list-item-hover-trailing-icon-color);
}
.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-supporting-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-selected-trailing-icon-color, var(--mat-sys-primary));
}

.mdc-list-item__content {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  align-self: center;
  flex: 1;
  pointer-events: none;
}
.mdc-list-item--with-two-lines .mdc-list-item__content, .mdc-list-item--with-three-lines .mdc-list-item__content {
  align-self: stretch;
}

.mdc-list-item__primary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: var(--mat-list-list-item-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-list-list-item-label-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-list-list-item-label-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-list-list-item-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-list-list-item-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-list-list-item-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-list-item:hover .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item:focus .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-focus-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text, .mdc-list-item--with-three-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}

.mdc-list-item__secondary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  margin-top: 0;
  color: var(--mat-list-list-item-supporting-text-color, var(--mat-sys-on-surface-variant));
  font-family: var(--mat-list-list-item-supporting-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-list-list-item-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-list-list-item-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-list-list-item-supporting-text-weight, var(--mat-sys-body-medium-weight));
  letter-spacing: var(--mat-list-list-item-supporting-text-tracking, var(--mat-sys-body-medium-tracking));
}
.mdc-list-item__secondary-text::before {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-three-lines .mdc-list-item__secondary-text {
  white-space: normal;
  line-height: 20px;
}
.mdc-list-item--with-overline .mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: auto;
}

.mdc-list-item--with-leading-radio.mdc-list-item,
.mdc-list-item--with-leading-checkbox.mdc-list-item,
.mdc-list-item--with-leading-icon.mdc-list-item,
.mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  display: block;
  margin-top: 0;
  line-height: normal;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-trailing-icon.mdc-list-item, [dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item {
  padding-left: 0;
  padding-right: 0;
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 16px;
}

.mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  -webkit-user-select: none;
  user-select: none;
  margin-left: 28px;
  margin-right: 16px;
}
[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 28px;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end {
  display: block;
  line-height: normal;
  align-self: flex-start;
  margin-top: 0;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-leading-radio .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 8px;
  margin-right: 24px;
}
[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,
[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 24px;
  margin-right: 8px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-item--with-trailing-radio.mdc-list-item,
.mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-left: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, [dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-right: 0;
}
.mdc-list-item--with-trailing-radio .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 24px;
  margin-right: 8px;
}
[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,
[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 8px;
  margin-right: 24px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-group__subheader {
  margin: 0.75rem 16px;
}

.mdc-list-item--disabled .mdc-list-item__start,
.mdc-list-item--disabled .mdc-list-item__content,
.mdc-list-item--disabled .mdc-list-item__end {
  opacity: 1;
}
.mdc-list-item--disabled .mdc-list-item__primary-text,
.mdc-list-item--disabled .mdc-list-item__secondary-text {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}
.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-disabled-leading-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-leading-icon-opacity, 0.38);
}
.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-disabled-trailing-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-trailing-icon-opacity, 0.38);
}

.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing, [dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing {
  padding-left: 0;
  padding-right: 0;
}

.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-disabled-label-text-color, var(--mat-sys-on-surface));
}

.mdc-list-item:hover::before {
  background-color: var(--mat-list-list-item-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}

.mdc-list-item.mdc-list-item--disabled::before {
  background-color: var(--mat-list-list-item-disabled-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item:focus::before {
  background-color: var(--mat-list-list-item-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item--disabled .mdc-radio,
.mdc-list-item--disabled .mdc-checkbox {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}

.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar {
  border-radius: var(--mat-list-list-item-leading-avatar-shape, var(--mat-sys-corner-full));
  background-color: var(--mat-list-list-item-leading-avatar-color, var(--mat-sys-primary-container));
}

.mat-mdc-list-item-icon {
  font-size: var(--mat-list-list-item-leading-icon-size, 24px);
}

@media (forced-colors: active) {
  a.mdc-list-item--activated::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  a.mdc-list-item--activated [dir=rtl]::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-list-base {
  display: block;
}
.mat-mdc-list-base .mdc-list-item__start,
.mat-mdc-list-base .mdc-list-item__end,
.mat-mdc-list-base .mdc-list-item__content {
  pointer-events: auto;
}

.mat-mdc-list-item,
.mat-mdc-list-option {
  width: 100%;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),
.mat-mdc-list-option:not(.mat-mdc-list-item-interactive) {
  cursor: default;
}
.mat-mdc-list-item .mat-divider-inset,
.mat-mdc-list-option .mat-divider-inset {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
.mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-left: 72px;
}
[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-right: 72px;
}

.mat-mdc-list-item-interactive::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  content: "";
  opacity: 0;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-list-item > .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-list-item:focus-visible > .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: normal;
}
.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

mat-action-list button {
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  outline: inherit;
  -webkit-tap-highlight-color: transparent;
  text-align: start;
}
mat-action-list button::-moz-focus-inner {
  border: 0;
}

.mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-inline-start: var(--mat-list-list-item-leading-icon-start-space, 16px);
  margin-inline-end: var(--mat-list-list-item-leading-icon-end-space, 16px);
}

.mat-mdc-nav-list .mat-mdc-list-item {
  border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
  --mat-focus-indicator-border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
}
.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated {
  background-color: var(--mat-list-active-indicator-color, var(--mat-sys-secondary-container));
}
`,li=["unscopedContent"],di=["text"],mi=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],hi=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var pi=new M("ListOption"),Kt=(()=>{class i{_elementRef=a(y);constructor(){}static \u0275fac=function(e){return new(e||i)};static \u0275dir=_({type:i,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return i})(),ui=(()=>{class i{_elementRef=a(y);constructor(){}static \u0275fac=function(e){return new(e||i)};static \u0275dir=_({type:i,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return i})(),gi=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275dir=_({type:i,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return i})(),Se=(()=>{class i{_listOption=a(pi,{optional:!0});constructor(){}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(e){return new(e||i)};static \u0275dir=_({type:i,hostVars:4,hostBindings:function(e,n){e&2&&g("mdc-list-item__start",n._isAlignedAtStart())("mdc-list-item__end",!n._isAlignedAtStart())}})}return i})(),_i=(()=>{class i extends Se{static \u0275fac=(()=>{let t;return function(n){return(t||(t=I(i)))(n||i)}})();static \u0275dir=_({type:i,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[k]})}return i})(),Xt=(()=>{class i extends Se{static \u0275fac=(()=>{let t;return function(n){return(t||(t=I(i)))(n||i)}})();static \u0275dir=_({type:i,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[k]})}return i})(),fi=new M("MAT_LIST_CONFIG"),qt=(()=>{class i{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=x(t)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(t){this._disabled.set(x(t))}_disabled=V(!1);_defaultOptions=a(fi,{optional:!0});static \u0275fac=function(e){return new(e||i)};static \u0275dir=_({type:i,hostVars:1,hostBindings:function(e,n){e&2&&S("aria-disabled",n.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return i})(),bi=(()=>{class i{_elementRef=a(y);_ngZone=a(O);_listBase=a(qt,{optional:!0});_platform=a(B);_hostElement;_isButtonElement;_noopAnimations=at();_avatars;_icons;set lines(t){this._explicitLines=et(t,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(t){this._disableRipple=x(t)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(t){this._disabled.set(x(t))}_disabled=V(!1);_subscriptions=new W;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){a(bt).load(yt);let t=a(xe,{optional:!0});this.rippleConfig=t||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new ve(this,this._ngZone,this._hostElement,this._platform,a(U)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(X(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(t){if(!this._lines||!this._titles||!this._unscopedContent)return;t&&this._checkDomForUnscopedTextContent();let e=this._explicitLines??this._inferLinesFromContent(),n=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",e<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",e<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",e===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",e===3),this._hasUnscopedTextContent){let o=this._titles.length===0&&e===1;n.classList.toggle("mdc-list-item__primary-text",o),n.classList.toggle("mdc-list-item__secondary-text",!o)}else n.classList.remove("mdc-list-item__primary-text"),n.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let t=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(t+=1),t}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(t=>t.nodeType!==t.COMMENT_NODE).some(t=>!!(t.textContent&&t.textContent.trim()))}static \u0275fac=function(e){return new(e||i)};static \u0275dir=_({type:i,contentQueries:function(e,n,o){if(e&1&&z(o,_i,4)(o,Xt,4),e&2){let s;p(s=u())&&(n._avatars=s),p(s=u())&&(n._icons=s)}},hostVars:4,hostBindings:function(e,n){e&2&&(S("aria-disabled",n.disabled)("disabled",n._isButtonElement&&n.disabled||null),g("mdc-list-item--disabled",n.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return i})();var Ee=(()=>{class i extends bi{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(t){this._activated=x(t)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let t;return function(n){return(t||(t=I(i)))(n||i)}})();static \u0275cmp=h({type:i,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(e,n,o){if(e&1&&z(o,ui,5)(o,Kt,5)(o,gi,5),e&2){let s;p(s=u())&&(n._lines=s),p(s=u())&&(n._titles=s),p(s=u())&&(n._meta=s)}},viewQuery:function(e,n){if(e&1&&Q(li,5)(di,5),e&2){let o;p(o=u())&&(n._unscopedContent=o.first),p(o=u())&&(n._itemText=o.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(e,n){e&2&&(S("aria-current",n._getAriaCurrent()),g("mdc-list-item--activated",n.activated)("mdc-list-item--with-leading-avatar",n._avatars.length!==0)("mdc-list-item--with-leading-icon",n._icons.length!==0)("mdc-list-item--with-trailing-meta",n._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",n._hasBothLeadingAndTrailing())("_mat-animation-noopable",n._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[k],ngContentSelectors:hi,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(e,n){e&1&&(C(mi),m(0),c(1,"span",1),m(2,1),m(3,2),c(4,"span",2,0),q("cdkObserveContent",function(){return n._updateItemLines(!0)}),m(6,3),r()(),m(7,4),m(8,5),F(9,"div",3))},dependencies:[he],encapsulation:2,changeDetection:0})}return i})();var Re=(()=>{class i extends qt{_isNonInteractive=!1;static \u0275fac=(()=>{let t;return function(n){return(t||(t=I(i)))(n||i)}})();static \u0275cmp=h({type:i,selectors:[["mat-nav-list"]],hostAttrs:["role","navigation",1,"mat-mdc-nav-list","mat-mdc-list-base","mdc-list"],exportAs:["matNavList"],features:[E([{provide:qt,useExisting:i}]),k],ngContentSelectors:si,decls:1,vars:0,template:function(e,n){e&1&&(C(),m(0))},styles:[ci],encapsulation:2,changeDetection:0})}return i})();var Oe=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=b({type:i});static \u0275inj=f({imports:[pe,we,De,A,Dt]})}return i})();var Ae=new M("CdkAccordion");var Te=(()=>{class i{accordion=a(Ae,{optional:!0,skipSelf:!0});_changeDetectorRef=a(L);_expansionDispatcher=a(lt);_openCloseAllSubscription=W.EMPTY;closed=new w;opened=new w;destroyed=new w;expandedChange=new w;id=a(xt).getId("cdk-accordion-child-");get expanded(){return this._expanded}set expanded(t){if(this._expanded!==t){if(this._expanded=t,this.expandedChange.emit(t),t){this.opened.emit();let e=this.accordion?this.accordion.id:this.id;this._expansionDispatcher.notify(this.id,e)}else this.closed.emit();this._changeDetectorRef.markForCheck()}}_expanded=!1;get disabled(){return this._disabled()}set disabled(t){this._disabled.set(t)}_disabled=V(!1);_removeUniqueSelectionListener=()=>{};constructor(){}ngOnInit(){this._removeUniqueSelectionListener=this._expansionDispatcher.listen((t,e)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===e&&this.id!==t&&(this.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}toggle(){this.disabled||(this.expanded=!this.expanded)}close(){this.disabled||(this.expanded=!1)}open(){this.disabled||(this.expanded=!0)}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(t=>{this.disabled||(this.expanded=t)})}static \u0275fac=function(e){return new(e||i)};static \u0275dir=_({type:i,selectors:[["cdk-accordion-item"],["","cdkAccordionItem",""]],inputs:{expanded:[2,"expanded","expanded",tt],disabled:[2,"disabled","disabled",tt]},outputs:{closed:"closed",opened:"opened",destroyed:"destroyed",expandedChange:"expandedChange"},exportAs:["cdkAccordionItem"],features:[E([{provide:Ae,useValue:void 0}])]})}return i})(),Pe=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=b({type:i});static \u0275inj=f({})}return i})();var dt=class{_attachedHost=null;attach(l){return this._attachedHost=l,l.attach(this)}detach(){let l=this._attachedHost;l!=null&&(this._attachedHost=null,l.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(l){this._attachedHost=l}},Yt=class extends dt{component;viewContainerRef;injector;projectableNodes;bindings;constructor(l,t,e,n,o){super(),this.component=l,this.viewContainerRef=t,this.injector=e,this.projectableNodes=n,this.bindings=o||null}},mt=class extends dt{templateRef;viewContainerRef;context;injector;constructor(l,t,e,n){super(),this.templateRef=l,this.viewContainerRef=t,this.context=e,this.injector=n}get origin(){return this.templateRef.elementRef}attach(l,t=this.context){return this.context=t,super.attach(l)}detach(){return this.context=void 0,super.detach()}},$t=class extends dt{element;constructor(l){super(),this.element=l instanceof y?l.nativeElement:l}},Jt=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(l){if(l instanceof Yt)return this._attachedPortal=l,this.attachComponentPortal(l);if(l instanceof mt)return this._attachedPortal=l,this.attachTemplatePortal(l);if(this.attachDomPortal&&l instanceof $t)return this._attachedPortal=l,this.attachDomPortal(l)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(l){this._disposeFn=l}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}};var Ie=(()=>{class i extends Jt{_moduleRef=a(oe,{optional:!0});_document=a(j);_viewContainerRef=a(ct);_isInitialized=!1;_attachedRef=null;constructor(){super()}get portal(){return this._attachedPortal}set portal(t){this.hasAttached()&&!t&&!this._isInitialized||(this.hasAttached()&&super.detach(),t&&super.attach(t),this._attachedPortal=t||null)}attached=new w;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(t){t.setAttachedHost(this);let e=t.viewContainerRef!=null?t.viewContainerRef:this._viewContainerRef,n=e.createComponent(t.component,{index:e.length,injector:t.injector||e.injector,projectableNodes:t.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:t.bindings||void 0});return e!==this._viewContainerRef&&this._getRootNode().appendChild(n.hostView.rootNodes[0]),super.setDisposeFn(()=>n.destroy()),this._attachedPortal=t,this._attachedRef=n,this.attached.emit(n),n}attachTemplatePortal(t){t.setAttachedHost(this);let e=this._viewContainerRef.createEmbeddedView(t.templateRef,t.context,{injector:t.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=t,this._attachedRef=e,this.attached.emit(e),e}attachDomPortal=t=>{let e=t.element;e.parentNode;let n=this._document.createComment("dom-portal");t.setAttachedHost(this),e.parentNode.insertBefore(n,e),this._getRootNode().appendChild(e),this._attachedPortal=t,super.setDisposeFn(()=>{n.parentNode&&n.parentNode.replaceChild(e,n)})};_getRootNode(){let t=this._viewContainerRef.element.nativeElement;return t.nodeType===t.ELEMENT_NODE?t:t.parentNode}static \u0275fac=function(e){return new(e||i)};static \u0275dir=_({type:i,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[k]})}return i})(),Le=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=b({type:i});static \u0275inj=f({})}return i})();var yi=["body"],ki=["bodyWrapper"],Ci=[[["mat-expansion-panel-header"]],"*",[["mat-action-row"]]],Mi=["mat-expansion-panel-header","*","mat-action-row"];function Di(i,l){}var Si=[[["mat-panel-title"]],[["mat-panel-description"]],"*"],Ei=["mat-panel-title","mat-panel-description","*"];function Ri(i,l){i&1&&(Z(0,"span",1),It(),Z(1,"svg",2),Bt(2,"path",3),$()())}var Fe=new M("MAT_ACCORDION"),ze=new M("MAT_EXPANSION_PANEL"),Oi=(()=>{class i{_template=a(ut);_expansionPanel=a(ze,{optional:!0});constructor(){}static \u0275fac=function(e){return new(e||i)};static \u0275dir=_({type:i,selectors:[["ng-template","matExpansionPanelContent",""]]})}return i})(),Be=new M("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS"),te=(()=>{class i extends Te{_viewContainerRef=a(ct);_animationsDisabled=at();_document=a(j);_ngZone=a(O);_elementRef=a(y);_renderer=a(G);_cleanupTransitionEnd;get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(t){this._hideToggle=t}_hideToggle=!1;get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(t){this._togglePosition=t}_togglePosition;afterExpand=new w;afterCollapse=new w;_inputChanges=new v;accordion=a(Fe,{optional:!0,skipSelf:!0});_lazyContent;_body;_bodyWrapper;_portal;_headerId=a(xt).getId("mat-expansion-panel-header-");constructor(){super();let t=a(Be,{optional:!0});this._expansionDispatcher=a(lt),t&&(this.hideToggle=t.hideToggle)}_hasSpacing(){return this.accordion?this.expanded&&this.accordion.displayMode==="default":!1}_getExpandedState(){return this.expanded?"expanded":"collapsed"}toggle(){this.expanded=!this.expanded}close(){this.expanded=!1}open(){this.expanded=!0}ngAfterContentInit(){this._lazyContent&&this._lazyContent._expansionPanel===this&&this.opened.pipe(Y(null),R(()=>this.expanded&&!this._portal),ht(1)).subscribe(()=>{this._portal=new mt(this._lazyContent._template,this._viewContainerRef)}),this._setupAnimationEvents()}ngOnChanges(t){this._inputChanges.next(t)}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransitionEnd?.(),this._inputChanges.complete()}_containsFocus(){if(this._body){let t=this._document.activeElement,e=this._body.nativeElement;return t===e||e.contains(t)}return!1}_transitionEndListener=({target:t,propertyName:e})=>{t===this._bodyWrapper?.nativeElement&&e==="grid-template-rows"&&this._ngZone.run(()=>{this.expanded?this.afterExpand.emit():this.afterCollapse.emit()})};_setupAnimationEvents(){this._ngZone.runOutsideAngular(()=>{this._animationsDisabled?(this.opened.subscribe(()=>this._ngZone.run(()=>this.afterExpand.emit())),this.closed.subscribe(()=>this._ngZone.run(()=>this.afterCollapse.emit()))):setTimeout(()=>{let t=this._elementRef.nativeElement;this._cleanupTransitionEnd=this._renderer.listen(t,"transitionend",this._transitionEndListener),t.classList.add("mat-expansion-panel-animations-enabled")},200)})}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=h({type:i,selectors:[["mat-expansion-panel"]],contentQueries:function(e,n,o){if(e&1&&z(o,Oi,5),e&2){let s;p(s=u())&&(n._lazyContent=s.first)}},viewQuery:function(e,n){if(e&1&&Q(yi,5)(ki,5),e&2){let o;p(o=u())&&(n._body=o.first),p(o=u())&&(n._bodyWrapper=o.first)}},hostAttrs:[1,"mat-expansion-panel"],hostVars:4,hostBindings:function(e,n){e&2&&g("mat-expanded",n.expanded)("mat-expansion-panel-spacing",n._hasSpacing())},inputs:{hideToggle:[2,"hideToggle","hideToggle",tt],togglePosition:"togglePosition"},outputs:{afterExpand:"afterExpand",afterCollapse:"afterCollapse"},exportAs:["matExpansionPanel"],features:[E([{provide:Fe,useValue:void 0},{provide:ze,useExisting:i}]),k,st],ngContentSelectors:Mi,decls:9,vars:4,consts:[["bodyWrapper",""],["body",""],[1,"mat-expansion-panel-content-wrapper"],["role","region",1,"mat-expansion-panel-content",3,"id"],[1,"mat-expansion-panel-body"],[3,"cdkPortalOutlet"]],template:function(e,n){e&1&&(C(Ci),m(0),c(1,"div",2,0)(3,"div",3,1)(5,"div",4),m(6,1),zt(7,Di,0,0,"ng-template",5),r(),m(8,2),r()()),e&2&&(D(),S("inert",n.expanded?null:""),D(2),gt("id",n.id),S("aria-labelledby",n._headerId),D(4),gt("cdkPortalOutlet",n._portal))},dependencies:[Ie],styles:[`.mat-expansion-panel {
  box-sizing: content-box;
  display: block;
  margin: 0;
  overflow: hidden;
}
.mat-expansion-panel.mat-expansion-panel-animations-enabled {
  transition: margin 225ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel {
  position: relative;
  background: var(--mat-expansion-container-background-color, var(--mat-sys-surface));
  color: var(--mat-expansion-container-text-color, var(--mat-sys-on-surface));
  border-radius: var(--mat-expansion-container-shape, 12px);
}
.mat-expansion-panel:not([class*=mat-elevation-z]) {
  box-shadow: var(--mat-expansion-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}
.mat-accordion .mat-expansion-panel:not(.mat-expanded), .mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing) {
  border-radius: 0;
}
.mat-accordion .mat-expansion-panel:first-of-type {
  border-top-right-radius: var(--mat-expansion-container-shape, 12px);
  border-top-left-radius: var(--mat-expansion-container-shape, 12px);
}
.mat-accordion .mat-expansion-panel:last-of-type {
  border-bottom-right-radius: var(--mat-expansion-container-shape, 12px);
  border-bottom-left-radius: var(--mat-expansion-container-shape, 12px);
}
@media (forced-colors: active) {
  .mat-expansion-panel {
    outline: solid 1px;
  }
}

.mat-expansion-panel-content-wrapper {
  display: grid;
  grid-template-rows: 0fr;
  grid-template-columns: 100%;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-content-wrapper {
  transition: grid-template-rows 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
  grid-template-rows: 1fr;
}
@supports not (grid-template-rows: 0fr) {
  .mat-expansion-panel-content-wrapper {
    height: 0;
  }
  .mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
    height: auto;
  }
}
@media print {
  .mat-expansion-panel-content-wrapper {
    height: 0;
  }
  .mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
    height: auto;
  }
}

.mat-expansion-panel-content {
  display: flex;
  flex-direction: column;
  overflow: visible;
  min-height: 0;
  visibility: hidden;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-content {
  transition: visibility 190ms linear;
}
.mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper > .mat-expansion-panel-content {
  visibility: visible;
}
.mat-expansion-panel-content {
  font-family: var(--mat-expansion-container-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-expansion-container-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-expansion-container-text-weight, var(--mat-sys-body-large-weight));
  line-height: var(--mat-expansion-container-text-line-height, var(--mat-sys-body-large-line-height));
  letter-spacing: var(--mat-expansion-container-text-tracking, var(--mat-sys-body-large-tracking));
}

.mat-expansion-panel-body {
  padding: 0 24px 16px;
}

.mat-expansion-panel-spacing {
  margin: 16px 0;
}
.mat-accordion > .mat-expansion-panel-spacing:first-child, .mat-accordion > *:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing {
  margin-top: 0;
}
.mat-accordion > .mat-expansion-panel-spacing:last-child, .mat-accordion > *:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing {
  margin-bottom: 0;
}

.mat-action-row {
  border-top-style: solid;
  border-top-width: 1px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 16px 8px 16px 24px;
  border-top-color: var(--mat-expansion-actions-divider-color, var(--mat-sys-outline));
}
.mat-action-row .mat-button-base,
.mat-action-row .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-action-row .mat-button-base,
[dir=rtl] .mat-action-row .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}
`],encapsulation:2,changeDetection:0})}return i})();var je=(()=>{class i{panel=a(te,{host:!0});_element=a(y);_focusMonitor=a(ft);_changeDetectorRef=a(L);_parentChangeSubscription=W.EMPTY;constructor(){a(bt).load(yt);let t=this.panel,e=a(Be,{optional:!0}),n=a(new re("tabindex"),{optional:!0}),o=t.accordion?t.accordion._stateChanges.pipe(R(s=>!!(s.hideToggle||s.togglePosition))):ie;this.tabIndex=parseInt(n||"")||0,this._parentChangeSubscription=X(t.opened,t.closed,o,t._inputChanges.pipe(R(s=>!!(s.hideToggle||s.disabled||s.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),t.closed.pipe(R(()=>t._containsFocus())).subscribe(()=>this._focusMonitor.focusVia(this._element,"program")),e&&(this.expandedHeight=e.expandedHeight,this.collapsedHeight=e.collapsedHeight)}expandedHeight;collapsedHeight;tabIndex=0;get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle()}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return!this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){let t=this._isExpanded();return t&&this.expandedHeight?this.expandedHeight:!t&&this.collapsedHeight?this.collapsedHeight:null}_keydown(t){switch(t.keyCode){case 32:case 13:vt(t)||(t.preventDefault(),this._toggle());break;default:this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(t);return}}focus(t,e){t?this._focusMonitor.focusVia(this._element,t,e):this._element.nativeElement.focus(e)}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(t=>{t&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this)})}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=h({type:i,selectors:[["mat-expansion-panel-header"]],hostAttrs:["role","button",1,"mat-expansion-panel-header","mat-focus-indicator"],hostVars:13,hostBindings:function(e,n){e&1&&q("click",function(){return n._toggle()})("keydown",function(s){return n._keydown(s)}),e&2&&(S("id",n.panel._headerId)("tabindex",n.disabled?-1:n.tabIndex)("aria-controls",n._getPanelId())("aria-expanded",n._isExpanded())("aria-disabled",n.panel.disabled),K("height",n._getHeaderHeight()),g("mat-expanded",n._isExpanded())("mat-expansion-toggle-indicator-after",n._getTogglePosition()==="after")("mat-expansion-toggle-indicator-before",n._getTogglePosition()==="before"))},inputs:{expandedHeight:"expandedHeight",collapsedHeight:"collapsedHeight",tabIndex:[2,"tabIndex","tabIndex",t=>t==null?0:se(t)]},ngContentSelectors:Ei,decls:5,vars:3,consts:[[1,"mat-content"],[1,"mat-expansion-indicator"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 -960 960 960","aria-hidden","true","focusable","false"],["d","M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"]],template:function(e,n){e&1&&(C(Si),Z(0,"span",0),m(1),m(2,1),m(3,2),$(),N(4,Ri,3,0,"span",1)),e&2&&(g("mat-content-hide-toggle",!n._showToggle()),D(4),H(n._showToggle()?4:-1))},styles:[`.mat-expansion-panel-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 24px;
  border-radius: inherit;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-header {
  transition: height 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel-header::before {
  border-radius: inherit;
}
.mat-expansion-panel-header {
  height: var(--mat-expansion-header-collapsed-state-height, 48px);
  font-family: var(--mat-expansion-header-text-font, var(--mat-sys-title-medium-font));
  font-size: var(--mat-expansion-header-text-size, var(--mat-sys-title-medium-size));
  font-weight: var(--mat-expansion-header-text-weight, var(--mat-sys-title-medium-weight));
  line-height: var(--mat-expansion-header-text-line-height, var(--mat-sys-title-medium-line-height));
  letter-spacing: var(--mat-expansion-header-text-tracking, var(--mat-sys-title-medium-tracking));
}
.mat-expansion-panel-header.mat-expanded {
  height: var(--mat-expansion-header-expanded-state-height, 64px);
}
.mat-expansion-panel-header[aria-disabled=true] {
  color: var(--mat-expansion-header-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-expansion-panel-header:not([aria-disabled=true]) {
  cursor: pointer;
}
.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {
  background: var(--mat-expansion-header-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
@media (hover: none) {
  .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {
    background: var(--mat-expansion-container-background-color, var(--mat-sys-surface));
  }
}
.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused, .mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused {
  background: var(--mat-expansion-header-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
.mat-expansion-panel-header._mat-animation-noopable {
  transition: none;
}
.mat-expansion-panel-header:focus, .mat-expansion-panel-header:hover {
  outline: none;
}
.mat-expansion-panel-header.mat-expanded:focus, .mat-expansion-panel-header.mat-expanded:hover {
  background: inherit;
}
.mat-expansion-panel-header.mat-expansion-toggle-indicator-before {
  flex-direction: row-reverse;
}
.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator {
  margin: 0 16px 0 0;
}
[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator {
  margin: 0 0 0 16px;
}

.mat-content {
  display: flex;
  flex: 1;
  flex-direction: row;
  overflow: hidden;
}
.mat-content.mat-content-hide-toggle {
  margin-right: 8px;
}
[dir=rtl] .mat-content.mat-content-hide-toggle {
  margin-right: 0;
  margin-left: 8px;
}
.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle {
  margin-left: 24px;
  margin-right: 0;
}
[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle {
  margin-right: 24px;
  margin-left: 0;
}

.mat-expansion-panel-header-title {
  color: var(--mat-expansion-header-text-color, var(--mat-sys-on-surface));
}

.mat-expansion-panel-header-title,
.mat-expansion-panel-header-description {
  display: flex;
  flex-grow: 1;
  flex-basis: 0;
  margin-right: 16px;
  align-items: center;
}
[dir=rtl] .mat-expansion-panel-header-title,
[dir=rtl] .mat-expansion-panel-header-description {
  margin-right: 0;
  margin-left: 16px;
}
.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,
.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description {
  color: inherit;
}

.mat-expansion-panel-header-description {
  flex-grow: 2;
  color: var(--mat-expansion-header-description-color, var(--mat-sys-on-surface-variant));
}

.mat-expansion-panel-animations-enabled .mat-expansion-indicator {
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel-header.mat-expanded .mat-expansion-indicator {
  transform: rotate(180deg);
}
.mat-expansion-indicator::after {
  border-style: solid;
  border-width: 0 2px 2px 0;
  content: "";
  padding: 3px;
  transform: rotate(45deg);
  vertical-align: middle;
  color: var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));
  display: var(--mat-expansion-legacy-header-indicator-display, none);
}
.mat-expansion-indicator svg {
  width: 24px;
  height: 24px;
  margin: 0 -8px;
  vertical-align: middle;
  fill: var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));
  display: var(--mat-expansion-header-indicator-display, inline-block);
}

@media (forced-colors: active) {
  .mat-expansion-panel-content {
    border-top: 1px solid;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
}
`],encapsulation:2,changeDetection:0})}return i})();var Ve=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275dir=_({type:i,selectors:[["mat-panel-title"]],hostAttrs:[1,"mat-expansion-panel-header-title"]})}return i})();var Ne=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=b({type:i});static \u0275inj=f({imports:[Pe,Le,A]})}return i})();var St=class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=h({type:i,selectors:[["app-sidebar"]],decls:77,vars:2,consts:[["treePanel",""],["graphPanel",""],[1,"sidebar"],[1,"title"],["mat-list-item","","routerLink","/home","routerLinkActive","active-link"],["matListItemIcon",""],["matListItemTitle",""],[1,"section-title"],["mat-list-item","","routerLink","/stack","routerLinkActive","active-link"],["mat-list-item","","routerLink","/queue","routerLinkActive","active-link"],["mat-list-item","","routerLink","/linked-list","routerLinkActive","active-link"],["hideToggle","",1,"sidebar-panel"],[1,"panel-title"],["mat-list-item","","routerLink","/trees/binary-tree","routerLinkActive","active-link"],["mat-list-item","","routerLink","/trees/binary-search-tree","routerLinkActive","active-link"],["mat-list-item","","routerLink","/trees/avl-tree","routerLinkActive","active-link"],["mat-list-item","","routerLink","/trees/heap","routerLinkActive","active-link"],["mat-list-item","","routerLink","/graphs/bfs","routerLinkActive","active-link"],["mat-list-item","","routerLink","/graphs/dfs","routerLinkActive","active-link"],["mat-list-item","","routerLink","/graphs/dijkstra","routerLinkActive","active-link"],["mat-list-item","","routerLink","/graphs/prims","routerLinkActive","active-link"],["mat-list-item","","routerLink","/graphs/kruskals","routerLinkActive","active-link"],[1,"sidebar-divider"],["mat-list-item","","routerLink","/about","routerLinkActive","active-link"]],template:function(t,e){if(t&1&&(c(0,"div",2)(1,"div",3),d(2," AlgoVista "),r(),F(3,"mat-divider"),c(4,"mat-nav-list")(5,"a",4)(6,"mat-icon",5),d(7,"dashboard"),r(),c(8,"span",6),d(9,"Dashboard"),r()()(),c(10,"div",7),d(11," Data Structures "),r(),c(12,"mat-nav-list")(13,"a",8)(14,"mat-icon",5),d(15,"layers"),r(),c(16,"span",6),d(17,"Stack"),r()(),c(18,"a",9)(19,"mat-icon",5),d(20,"view_stream"),r(),c(21,"span",6),d(22,"Queue"),r()(),c(23,"a",10)(24,"mat-icon",5),d(25,"share"),r(),c(26,"span",6),d(27,"Linked List"),r()()(),c(28,"mat-expansion-panel",11,0)(30,"mat-expansion-panel-header")(31,"mat-panel-title")(32,"mat-icon"),d(33,"account_tree"),r(),c(34,"span",12),d(35,"Trees"),r()(),c(36,"mat-icon"),d(37),r()(),c(38,"mat-nav-list")(39,"a",13),d(40," Binary Tree "),r(),c(41,"a",14),d(42," Binary Search Tree "),r(),c(43,"a",15),d(44," AVL Tree "),r(),c(45,"a",16),d(46," Heap "),r()()(),c(47,"mat-expansion-panel",11,1)(49,"mat-expansion-panel-header")(50,"mat-panel-title")(51,"mat-icon"),d(52,"hub"),r(),c(53,"span",12),d(54,"Graphs"),r()(),c(55,"mat-icon"),d(56),r()(),c(57,"mat-nav-list")(58,"a",17),d(59," Breadth First Search "),r(),c(60,"a",18),d(61," Depth First Search "),r(),c(62,"a",19),d(63," Dijkstra "),r(),c(64,"a",20),d(65," Prim's Algorithm "),r(),c(66,"a",21),d(67," Kruskal's Algorithm "),r()()(),F(68,"mat-divider",22),c(69,"div",7),d(70," Developer "),r(),c(71,"mat-nav-list")(72,"a",23)(73,"mat-icon",5),d(74,"person"),r(),c(75,"span",6),d(76," About Me "),r()()()()),t&2){let n=_t(29),o=_t(48);D(37),Vt(" ",n.expanded?"expand_less":"expand_more"," "),D(19),Vt(" ",o.expanded?"expand_less":"expand_more"," ")}},dependencies:[le,de,Oe,Re,Ee,Xt,Zt,Kt,be,fe,Dt,Ne,te,je,Ve],styles:[".sidebar[_ngcontent-%COMP%]{display:flex;flex-direction:column;overflow-y:auto;overflow-x:hidden;padding-right:4px}.title[_ngcontent-%COMP%]{font-size:34px;font-weight:700;margin-bottom:32px;color:#fff;letter-spacing:-.5px}.section-title[_ngcontent-%COMP%]{color:var(--text2);font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;margin:28px 0 14px}mat-divider[_ngcontent-%COMP%]{display:none}.mat-mdc-nav-list[_ngcontent-%COMP%]{padding:0}.mat-mdc-list-item[_ngcontent-%COMP%]{border-radius:14px!important;margin-bottom:8px;transition:.25s;height:52px!important}.mat-mdc-list-item[_ngcontent-%COMP%]:hover{background:#3b82f626}.active-link[_ngcontent-%COMP%]{background:linear-gradient(135deg,#2563eb,#7c3aed);color:#fff!important;box-shadow:0 10px 20px #2563eb59}.active-link[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#fff}mat-icon[_ngcontent-%COMP%]{color:#9fb3d9}.spacer[_ngcontent-%COMP%]{flex:1}.footer-card[_ngcontent-%COMP%]{margin-top:auto;background:linear-gradient(180deg,#182746,#131d31);border:1px solid var(--border);border-radius:18px;padding:20px;text-align:center}.footer-card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{margin:0;font-size:20px;color:#8b5cf6}.footer-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:8px;color:var(--text2);font-size:14px}.sidebar-panel[_ngcontent-%COMP%]{margin:8px 0;border-radius:18px!important;background:transparent!important;box-shadow:none!important;color:#fff}.sidebar-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header[_ngcontent-%COMP%]{height:56px;padding:0 16px;border-radius:18px}.sidebar-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header[_ngcontent-%COMP%]:hover{background:#ffffff0f}.panel-title[_ngcontent-%COMP%]{margin-left:16px;font-size:16px;font-weight:500}.sidebar-panel[_ngcontent-%COMP%]   mat-nav-list[_ngcontent-%COMP%]{padding-top:0}.sidebar-panel[_ngcontent-%COMP%]   .mat-mdc-list-item[_ngcontent-%COMP%]{margin:6px 12px;border-radius:14px}.sidebar-panel[_ngcontent-%COMP%]   .mat-mdc-list-item[_ngcontent-%COMP%]:hover{background:#ffffff14}.sidebar-panel[_ngcontent-%COMP%]   .active-link[_ngcontent-%COMP%]{background:linear-gradient(90deg,#2563eb,#7c3aed);color:#fff!important}.sidebar-panel[_ngcontent-%COMP%]   .active-link[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#fff}"]})};var Et=class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=h({type:i,selectors:[["app-footer"]],decls:2,vars:0,template:function(t,e){t&1&&(Z(0,"footer"),d(1,` \xA9 AlgoVista
`),$())},styles:["footer[_ngcontent-%COMP%]{height:56px;display:flex;justify-content:center;align-items:center;background:#222;color:#fff;font-size:14px}"]})};var Qe=class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=h({type:i,selectors:[["app-shell"]],decls:8,vars:0,consts:[[1,"shell-container"],["mode","side","opened","",1,"sidebar"],[1,"layout"],[1,"page-content"]],template:function(t,e){t&1&&(c(0,"mat-sidenav-container",0)(1,"mat-sidenav",1),F(2,"app-sidebar"),r(),c(3,"mat-sidenav-content")(4,"div",2)(5,"main",3),F(6,"router-outlet"),r(),F(7,"app-footer"),r()()())},dependencies:[ce,Ce,Gt,ke,Ct,Me,St,Et],styles:[".shell-container[_ngcontent-%COMP%]{height:100vh}.layout[_ngcontent-%COMP%]{display:flex;flex-direction:column;min-height:100vh}.page-content[_ngcontent-%COMP%]{flex:1;padding:24px}.sidebar[_ngcontent-%COMP%]{width:260px}"]})};export{Qe as Shell};
