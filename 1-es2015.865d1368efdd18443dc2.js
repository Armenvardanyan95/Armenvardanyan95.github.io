(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"xj+W":function(t,e,n){"use strict";n.r(e);var i=n("8Y7J");class a{}var l=n("pMnS"),o=n("lzlj"),s=n("igqZ"),r=n("omvX"),c=n("bujt"),u=n("Fwaw"),b=n("5GAg"),d=n("SVse"),h=n("zMNK"),m=n("Xd0L"),p=n("XNiG"),g=n("quSY"),_=n("VRyK"),f=n("xgIS"),x=n("LRne"),v=n("PqYM"),y=(n("GS7A"),n("JX91")),k=n("/uUt"),I=n("1G5W"),C=n("KCVW"),w=n("dvZr"),D=n("/HVE");const S=new i.p("MatInkBarPositioner",{providedIn:"root",factory:function(){return t=>({left:t?(t.offsetLeft||0)+"px":"0",width:t?(t.offsetWidth||0)+"px":"0"})}});class O{constructor(t,e,n,i){this._elementRef=t,this._ngZone=e,this._inkBarPositioner=n,this._animationMode=i}alignToElement(t){this.show(),"undefined"!=typeof requestAnimationFrame?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._setStyles(t))}):this._setStyles(t)}show(){this._elementRef.nativeElement.style.visibility="visible"}hide(){this._elementRef.nativeElement.style.visibility="hidden"}_setStyles(t){const e=this._inkBarPositioner(t),n=this._elementRef.nativeElement;n.style.left=e.left,n.style.width=e.width}}class T{}const L=Object(m.m)(T);class P extends L{constructor(t){super(),this._viewContainerRef=t,this.textLabel="",this._contentPortal=null,this._stateChanges=new p.a,this.position=null,this.origin=null,this.isActive=!1}get content(){return this._contentPortal}ngOnChanges(t){(t.hasOwnProperty("textLabel")||t.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new h.h(this._explicitContent||this._implicitContent,this._viewContainerRef)}}class M extends h.c{constructor(t,e,n){super(t,e),this._host=n,this._centeringSub=g.a.EMPTY,this._leavingSub=g.a.EMPTY}ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(Object(y.a)(this._host._isCenterPosition(this._host._position))).subscribe(t=>{t&&!this.hasAttached()&&this.attach(this._host._content)}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this.detach()})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}}class j{constructor(t,e,n){this._elementRef=t,this._dir=e,this._dirChangeSubscription=g.a.EMPTY,this._translateTabComplete=new p.a,this._onCentering=new i.m,this._beforeCentering=new i.m,this._afterLeavingCenter=new i.m,this._onCentered=new i.m(!0),this.animationDuration="500ms",e&&(this._dirChangeSubscription=e.change.subscribe(t=>{this._computePositionAnimationState(t),n.markForCheck()})),this._translateTabComplete.pipe(Object(k.a)((t,e)=>t.fromState===e.fromState&&t.toState===e.toState)).subscribe(t=>{this._isCenterPosition(t.toState)&&this._isCenterPosition(this._position)&&this._onCentered.emit(),this._isCenterPosition(t.fromState)&&!this._isCenterPosition(this._position)&&this._afterLeavingCenter.emit()})}set position(t){this._positionIndex=t,this._computePositionAnimationState()}ngOnInit(){"center"==this._position&&null!=this.origin&&(this._position=this._computePositionFromOrigin())}ngOnDestroy(){this._dirChangeSubscription.unsubscribe(),this._translateTabComplete.complete()}_onTranslateTabStarted(t){const e=this._isCenterPosition(t.toState);this._beforeCentering.emit(e),e&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_getLayoutDirection(){return this._dir&&"rtl"===this._dir.value?"rtl":"ltr"}_isCenterPosition(t){return"center"==t||"left-origin-center"==t||"right-origin-center"==t}_computePositionAnimationState(t=this._getLayoutDirection()){this._position=this._positionIndex<0?"ltr"==t?"left":"right":this._positionIndex>0?"ltr"==t?"right":"left":"center"}_computePositionFromOrigin(){const t=this._getLayoutDirection();return"ltr"==t&&this.origin<=0||"rtl"==t&&this.origin>0?"left-origin-center":"right-origin-center"}}class A extends j{constructor(t,e,n){super(t,e,n)}}let B=0;class R{}const E=new i.p("MAT_TABS_CONFIG");class q{constructor(t){this._elementRef=t}}const F=Object(m.k)(Object(m.l)(q),"primary");class W extends F{constructor(t,e,n,a){super(t),this._changeDetectorRef=e,this._animationMode=a,this._indexToSelect=0,this._tabBodyWrapperHeight=0,this._tabsSubscription=g.a.EMPTY,this._tabLabelSubscription=g.a.EMPTY,this._dynamicHeight=!1,this._selectedIndex=null,this.headerPosition="above",this.selectedIndexChange=new i.m,this.focusChange=new i.m,this.animationDone=new i.m,this.selectedTabChange=new i.m(!0),this._groupId=B++,this.animationDuration=n&&n.animationDuration?n.animationDuration:"500ms"}get dynamicHeight(){return this._dynamicHeight}set dynamicHeight(t){this._dynamicHeight=Object(C.b)(t)}get selectedIndex(){return this._selectedIndex}set selectedIndex(t){this._indexToSelect=Object(C.e)(t,null)}get animationDuration(){return this._animationDuration}set animationDuration(t){this._animationDuration=/^\d+$/.test(t)?t+"ms":t}get backgroundColor(){return this._backgroundColor}set backgroundColor(t){const e=this._elementRef.nativeElement;e.classList.remove(`mat-background-${this.backgroundColor}`),t&&e.classList.add(`mat-background-${t}`),this._backgroundColor=t}ngAfterContentChecked(){const t=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=t){const e=null==this._selectedIndex;e||this.selectedTabChange.emit(this._createChangeEvent(t)),Promise.resolve().then(()=>{this._tabs.forEach((e,n)=>e.isActive=n===t),e||this.selectedIndexChange.emit(t)})}this._tabs.forEach((e,n)=>{e.position=n-t,null==this._selectedIndex||0!=e.position||e.origin||(e.origin=t-this._selectedIndex)}),this._selectedIndex!==t&&(this._selectedIndex=t,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{if(this._clampTabIndex(this._indexToSelect)===this._selectedIndex){const t=this._tabs.toArray();for(let e=0;e<t.length;e++)if(t[e].isActive){this._indexToSelect=this._selectedIndex=e;break}}this._subscribeToTabLabels(),this._changeDetectorRef.markForCheck()})}ngOnDestroy(){this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}_focusChanged(t){this.focusChange.emit(this._createChangeEvent(t))}_createChangeEvent(t){const e=new R;return e.index=t,this._tabs&&this._tabs.length&&(e.tab=this._tabs.toArray()[t]),e}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=Object(_.a)(...this._tabs.map(t=>t._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(t){return Math.min(this._tabs.length-1,Math.max(t||0,0))}_getTabLabelId(t){return`mat-tab-label-${this._groupId}-${t}`}_getTabContentId(t){return`mat-tab-content-${this._groupId}-${t}`}_setTabBodyWrapperHeight(t){if(!this._dynamicHeight||!this._tabBodyWrapperHeight)return;const e=this._tabBodyWrapper.nativeElement;e.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(e.style.height=t+"px")}_removeTabBodyWrapperHeight(){const t=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=t.clientHeight,t.style.height="",this.animationDone.emit()}_handleClick(t,e,n){t.disabled||(this.selectedIndex=e.focusIndex=n)}_getTabIndex(t,e){return t.disabled?null:this.selectedIndex===e?0:-1}}class $ extends W{constructor(t,e,n,i){super(t,e,n,i)}}class H{}const N=Object(m.m)(H);class z extends N{constructor(t){super(),this.elementRef=t}focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}}const K=Object(D.e)({passive:!0}),G=60,V=650,Y=100;class Z{constructor(t,e,n,a,l,o,s){this._elementRef=t,this._changeDetectorRef=e,this._viewportRuler=n,this._dir=a,this._ngZone=l,this._platform=o,this._animationMode=s,this._scrollDistance=0,this._selectedIndexChanged=!1,this._destroyed=new p.a,this._showPaginationControls=!1,this._disableScrollAfter=!0,this._disableScrollBefore=!0,this._stopScrolling=new p.a,this._selectedIndex=0,this.selectFocusedIndex=new i.m,this.indexFocused=new i.m,l.runOutsideAngular(()=>{Object(f.a)(t.nativeElement,"mouseleave").pipe(Object(I.a)(this._destroyed)).subscribe(()=>{this._stopInterval()})})}get selectedIndex(){return this._selectedIndex}set selectedIndex(t){t=Object(C.e)(t),this._selectedIndex!=t&&(this._selectedIndexChanged=!0,this._selectedIndex=t,this._keyManager&&this._keyManager.updateActiveItemIndex(t))}ngAfterViewInit(){Object(f.a)(this._previousPaginator.nativeElement,"touchstart",K).pipe(Object(I.a)(this._destroyed)).subscribe(()=>{this._handlePaginatorPress("before")}),Object(f.a)(this._nextPaginator.nativeElement,"touchstart",K).pipe(Object(I.a)(this._destroyed)).subscribe(()=>{this._handlePaginatorPress("after")})}ngAfterContentInit(){const t=this._dir?this._dir.change:Object(x.a)(null),e=this._viewportRuler.change(150),n=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new b.d(this._items).withHorizontalOrientation(this._getLayoutDirection()).withWrap(),this._keyManager.updateActiveItem(0),"undefined"!=typeof requestAnimationFrame?requestAnimationFrame(n):n(),Object(_.a)(t,e,this._items.changes).pipe(Object(I.a)(this._destroyed)).subscribe(()=>{n(),this._keyManager.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.pipe(Object(I.a)(this._destroyed)).subscribe(t=>{this.indexFocused.emit(t),this._setTabFocus(t)})}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(t){if(!Object(w.o)(t))switch(t.keyCode){case w.f:this._keyManager.setFirstItemActive(),t.preventDefault();break;case w.c:this._keyManager.setLastItemActive(),t.preventDefault();break;case w.d:case w.j:this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(t);break;default:this._keyManager.onKeydown(t)}}_onContentChanges(){const t=this._elementRef.nativeElement.textContent;t!==this._currentTextContent&&(this._currentTextContent=t||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(t){this._isValidIndex(t)&&this.focusIndex!==t&&this._keyManager&&this._keyManager.setActiveItem(t)}_isValidIndex(t){if(!this._items)return!0;const e=this._items?this._items.toArray()[t]:null;return!!e&&!e.disabled}_setTabFocus(t){if(this._showPaginationControls&&this._scrollToLabel(t),this._items&&this._items.length){this._items.toArray()[t].focus();const e=this._tabListContainer.nativeElement,n=this._getLayoutDirection();e.scrollLeft="ltr"==n?0:e.scrollWidth-e.offsetWidth}}_getLayoutDirection(){return this._dir&&"rtl"===this._dir.value?"rtl":"ltr"}_updateTabScrollPosition(){const t=this.scrollDistance,e=this._platform,n="ltr"===this._getLayoutDirection()?-t:t;this._tabList.nativeElement.style.transform=`translateX(${Math.round(n)}px)`,e&&(e.TRIDENT||e.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(t){this._scrollTo(t)}_scrollHeader(t){return this._scrollTo(this._scrollDistance+("before"==t?-1:1)*this._tabListContainer.nativeElement.offsetWidth/3)}_handlePaginatorClick(t){this._stopInterval(),this._scrollHeader(t)}_scrollToLabel(t){const e=this._items?this._items.toArray()[t]:null;if(!e)return;const n=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:i,offsetWidth:a}=e.elementRef.nativeElement;let l,o;"ltr"==this._getLayoutDirection()?o=(l=i)+a:l=(o=this._tabList.nativeElement.offsetWidth-i)-a;const s=this.scrollDistance,r=this.scrollDistance+n;l<s?this.scrollDistance-=s-l+G:o>r&&(this.scrollDistance+=o-r+G)}_checkPaginationEnabled(){const t=this._tabList.nativeElement.scrollWidth>this._elementRef.nativeElement.offsetWidth;t||(this.scrollDistance=0),t!==this._showPaginationControls&&this._changeDetectorRef.markForCheck(),this._showPaginationControls=t}_checkScrollingControls(){this._disableScrollBefore=0==this.scrollDistance,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck()}_getMaxScrollDistance(){return this._tabList.nativeElement.scrollWidth-this._tabListContainer.nativeElement.offsetWidth||0}_alignInkBarToSelectedTab(){const t=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,e=t?t.elementRef.nativeElement:null;e?this._inkBar.alignToElement(e):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(t){this._stopInterval(),Object(v.a)(V,Y).pipe(Object(I.a)(Object(_.a)(this._stopScrolling,this._destroyed))).subscribe(()=>{const{maxScrollDistance:e,distance:n}=this._scrollHeader(t);(0===n||n>=e)&&this._stopInterval()})}_scrollTo(t){const e=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(e,t)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:e,distance:this._scrollDistance}}}class J extends Z{constructor(t,e,n,i,a,l,o){super(t,e,n,i,a,l,o),this._disableRipple=!1}get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=Object(C.b)(t)}_itemSelected(t){t.preventDefault()}}class X extends J{constructor(t,e,n,i,a,l,o){super(t,e,n,i,a,l,o)}}class U{}var Q=n("POq0"),tt=n("IP0z"),et=n("cUpR"),nt=n("hOhj"),it=i.pb({encapsulation:2,styles:[".mat-tab-group{display:flex;flex-direction:column}.mat-tab-group.mat-tab-group-inverted-header{flex-direction:column-reverse}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:0}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}@media (-ms-high-contrast:active){.mat-tab-label:focus{outline:dotted 2px}}.mat-tab-label.mat-tab-disabled{cursor:default}@media (-ms-high-contrast:active){.mat-tab-label.mat-tab-disabled{opacity:.5}}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}@media (-ms-high-contrast:active){.mat-tab-label{opacity:1}}@media (max-width:599px){.mat-tab-label{padding:0 12px}}@media (max-width:959px){.mat-tab-label{padding:0 12px}}.mat-tab-group[mat-stretch-tabs]>.mat-tab-header .mat-tab-label{flex-basis:0;flex-grow:1}.mat-tab-body-wrapper{position:relative;overflow:hidden;display:flex;transition:height .5s cubic-bezier(.35,0,.25,1)}._mat-animation-noopable.mat-tab-body-wrapper{transition:none;animation:none}.mat-tab-body{top:0;left:0;right:0;bottom:0;position:absolute;display:block;overflow:hidden;flex-basis:100%}.mat-tab-body.mat-tab-body-active{position:relative;overflow-x:hidden;overflow-y:auto;z-index:1;flex-grow:1}.mat-tab-group.mat-tab-group-dynamic-height .mat-tab-body.mat-tab-body-active{overflow-y:hidden}"],data:{}});function at(t){return i.Mb(0,[(t()(),i.gb(0,null,null,0))],null,null)}function lt(t){return i.Mb(0,[(t()(),i.gb(16777216,null,null,1,null,at)),i.qb(1,212992,null,0,h.c,[i.j,i.O],{portal:[0,"portal"]},null),(t()(),i.gb(0,null,null,0))],(function(t,e){t(e,1,0,e.parent.context.$implicit.templateLabel)}),null)}function ot(t){return i.Mb(0,[(t()(),i.Kb(0,null,["",""]))],null,(function(t,e){t(e,0,0,e.parent.context.$implicit.textLabel)}))}function st(t){return i.Mb(0,[(t()(),i.rb(0,0,null,null,8,"div",[["cdkMonitorElementFocus",""],["class","mat-tab-label mat-ripple"],["mat-ripple",""],["matTabLabelWrapper",""],["role","tab"]],[[8,"id",0],[1,"tabIndex",0],[1,"aria-posinset",0],[1,"aria-setsize",0],[1,"aria-controls",0],[1,"aria-selected",0],[1,"aria-label",0],[1,"aria-labelledby",0],[2,"mat-tab-label-active",null],[2,"mat-ripple-unbounded",null],[2,"mat-tab-disabled",null],[1,"aria-disabled",0]],[[null,"click"]],(function(t,e,n){var a=!0;return"click"===e&&(a=!1!==t.component._handleClick(t.context.$implicit,i.Db(t.parent,3),t.context.index)&&a),a}),null,null)),i.qb(1,212992,null,0,m.h,[i.k,i.y,D.a,[2,m.f],[2,r.a]],{disabled:[0,"disabled"]},null),i.qb(2,147456,null,0,b.c,[i.k,b.e],null,null),i.qb(3,16384,[[3,4]],0,z,[i.k],{disabled:[0,"disabled"]},null),(t()(),i.rb(4,0,null,null,4,"div",[["class","mat-tab-label-content"]],null,null,null,null,null)),(t()(),i.gb(16777216,null,null,1,null,lt)),i.qb(6,16384,null,0,d.k,[i.O,i.L],{ngIf:[0,"ngIf"]},null),(t()(),i.gb(16777216,null,null,1,null,ot)),i.qb(8,16384,null,0,d.k,[i.O,i.L],{ngIf:[0,"ngIf"]},null)],(function(t,e){t(e,1,0,e.context.$implicit.disabled||e.component.disableRipple),t(e,3,0,e.context.$implicit.disabled),t(e,6,0,e.context.$implicit.templateLabel),t(e,8,0,!e.context.$implicit.templateLabel)}),(function(t,e){var n=e.component;t(e,0,1,[n._getTabLabelId(e.context.index),n._getTabIndex(e.context.$implicit,e.context.index),e.context.index+1,n._tabs.length,n._getTabContentId(e.context.index),n.selectedIndex==e.context.index,e.context.$implicit.ariaLabel||null,!e.context.$implicit.ariaLabel&&e.context.$implicit.ariaLabelledby?e.context.$implicit.ariaLabelledby:null,n.selectedIndex==e.context.index,i.Db(e,1).unbounded,i.Db(e,3).disabled,!!i.Db(e,3).disabled])}))}function rt(t){return i.Mb(0,[(t()(),i.rb(0,0,null,null,1,"mat-tab-body",[["class","mat-tab-body"],["role","tabpanel"]],[[8,"id",0],[1,"aria-labelledby",0],[2,"mat-tab-body-active",null]],[[null,"_onCentered"],[null,"_onCentering"]],(function(t,e,n){var i=!0,a=t.component;return"_onCentered"===e&&(i=!1!==a._removeTabBodyWrapperHeight()&&i),"_onCentering"===e&&(i=!1!==a._setTabBodyWrapperHeight(n)&&i),i}),dt,ut)),i.qb(1,245760,null,0,A,[i.k,[2,tt.b],i.h],{_content:[0,"_content"],origin:[1,"origin"],animationDuration:[2,"animationDuration"],position:[3,"position"]},{_onCentering:"_onCentering",_onCentered:"_onCentered"})],(function(t,e){t(e,1,0,e.context.$implicit.content,e.context.$implicit.origin,e.component.animationDuration,e.context.$implicit.position)}),(function(t,e){var n=e.component;t(e,0,0,n._getTabContentId(e.context.index),n._getTabLabelId(e.context.index),n.selectedIndex==e.context.index)}))}function ct(t){return i.Mb(2,[i.Ib(671088640,1,{_tabBodyWrapper:0}),i.Ib(671088640,2,{_tabHeader:0}),(t()(),i.rb(2,0,null,null,4,"mat-tab-header",[["class","mat-tab-header"]],[[2,"mat-tab-header-pagination-controls-enabled",null],[2,"mat-tab-header-rtl",null]],[[null,"indexFocused"],[null,"selectFocusedIndex"]],(function(t,e,n){var i=!0,a=t.component;return"indexFocused"===e&&(i=!1!==a._focusChanged(n)&&i),"selectFocusedIndex"===e&&(i=!1!==(a.selectedIndex=n)&&i),i}),mt,ht)),i.qb(3,7520256,[[2,4],["tabHeader",4]],1,X,[i.k,i.h,nt.d,[2,tt.b],i.y,D.a,[2,r.a]],{selectedIndex:[0,"selectedIndex"],disableRipple:[1,"disableRipple"]},{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}),i.Ib(603979776,3,{_items:1}),(t()(),i.gb(16777216,null,0,1,null,st)),i.qb(6,278528,null,0,d.j,[i.O,i.L,i.r],{ngForOf:[0,"ngForOf"]},null),(t()(),i.rb(7,0,[[1,0],["tabBodyWrapper",1]],null,2,"div",[["class","mat-tab-body-wrapper"]],[[2,"_mat-animation-noopable",null]],null,null,null,null)),(t()(),i.gb(16777216,null,null,1,null,rt)),i.qb(9,278528,null,0,d.j,[i.O,i.L,i.r],{ngForOf:[0,"ngForOf"]},null)],(function(t,e){var n=e.component;t(e,3,0,n.selectedIndex,n.disableRipple),t(e,6,0,n._tabs),t(e,9,0,n._tabs)}),(function(t,e){var n=e.component;t(e,2,0,i.Db(e,3)._showPaginationControls,"rtl"==i.Db(e,3)._getLayoutDirection()),t(e,7,0,"NoopAnimations"===n._animationMode)}))}var ut=i.pb({encapsulation:2,styles:[".mat-tab-body-content{height:100%;overflow:auto}.mat-tab-group-dynamic-height .mat-tab-body-content{overflow:hidden}"],data:{animation:[{type:7,name:"translateTab",definitions:[{type:0,name:"center, void, left-origin-center, right-origin-center",styles:{type:6,styles:{transform:"none"},offset:null},options:void 0},{type:0,name:"left",styles:{type:6,styles:{transform:"translate3d(-100%, 0, 0)",minHeight:"1px"},offset:null},options:void 0},{type:0,name:"right",styles:{type:6,styles:{transform:"translate3d(100%, 0, 0)",minHeight:"1px"},offset:null},options:void 0},{type:1,expr:"* => left, * => right, left => center, right => center",animation:{type:4,styles:null,timings:"{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)"},options:null},{type:1,expr:"void => left-origin-center",animation:[{type:6,styles:{transform:"translate3d(-100%, 0, 0)"},offset:null},{type:4,styles:null,timings:"{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)"}],options:null},{type:1,expr:"void => right-origin-center",animation:[{type:6,styles:{transform:"translate3d(100%, 0, 0)"},offset:null},{type:4,styles:null,timings:"{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)"}],options:null}],options:{}}]}});function bt(t){return i.Mb(0,[(t()(),i.gb(0,null,null,0))],null,null)}function dt(t){return i.Mb(2,[i.Ib(671088640,1,{_portalHost:0}),(t()(),i.rb(1,0,[["content",1]],null,4,"div",[["class","mat-tab-body-content"]],[[24,"@translateTab",0]],[[null,"@translateTab.start"],[null,"@translateTab.done"]],(function(t,e,n){var i=!0,a=t.component;return"@translateTab.start"===e&&(i=!1!==a._onTranslateTabStarted(n)&&i),"@translateTab.done"===e&&(i=!1!==a._translateTabComplete.next(n)&&i),i}),null,null)),i.Gb(2,{animationDuration:0}),i.Gb(3,{value:0,params:1}),(t()(),i.gb(16777216,null,null,1,null,bt)),i.qb(5,212992,null,0,M,[i.j,i.O,A],null,null)],(function(t,e){t(e,5,0)}),(function(t,e){var n=e.component,i=t(e,3,0,n._position,t(e,2,0,n.animationDuration));t(e,1,0,i)}))}var ht=i.pb({encapsulation:2,styles:[".mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-tab-header-pagination{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:transparent;touch-action:none}.mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination{display:flex}.mat-tab-header-pagination-before,.mat-tab-header-rtl .mat-tab-header-pagination-after{padding-left:4px}.mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-tab-header-pagination-after,.mat-tab-header-rtl .mat-tab-header-pagination-before{padding-right:4px}.mat-tab-header-pagination-after .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-before .mat-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;content:'';height:8px;width:8px}.mat-tab-header-pagination-disabled{box-shadow:none;cursor:default}.mat-tab-list{flex-grow:1;position:relative;transition:transform .5s cubic-bezier(.35,0,.25,1)}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:.5s cubic-bezier(.35,0,.25,1)}._mat-animation-noopable.mat-ink-bar{transition:none;animation:none}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}@media (-ms-high-contrast:active){.mat-ink-bar{outline:solid 2px;height:0}}.mat-tab-labels{display:flex}[mat-align-tabs=center] .mat-tab-labels{justify-content:center}[mat-align-tabs=end] .mat-tab-labels{justify-content:flex-end}.mat-tab-label-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}._mat-animation-noopable.mat-tab-list{transition:none;animation:none}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:0}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}@media (-ms-high-contrast:active){.mat-tab-label:focus{outline:dotted 2px}}.mat-tab-label.mat-tab-disabled{cursor:default}@media (-ms-high-contrast:active){.mat-tab-label.mat-tab-disabled{opacity:.5}}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}@media (-ms-high-contrast:active){.mat-tab-label{opacity:1}}@media (max-width:599px){.mat-tab-label{min-width:72px}}"],data:{}});function mt(t){return i.Mb(2,[i.Ib(402653184,1,{_inkBar:0}),i.Ib(402653184,2,{_tabListContainer:0}),i.Ib(402653184,3,{_tabList:0}),i.Ib(671088640,4,{_nextPaginator:0}),i.Ib(671088640,5,{_previousPaginator:0}),(t()(),i.rb(5,0,[[5,0],["previousPaginator",1]],null,2,"div",[["aria-hidden","true"],["class","mat-tab-header-pagination mat-tab-header-pagination-before mat-elevation-z4 mat-ripple"],["mat-ripple",""]],[[2,"mat-tab-header-pagination-disabled",null],[2,"mat-ripple-unbounded",null]],[[null,"click"],[null,"mousedown"],[null,"touchend"]],(function(t,e,n){var i=!0,a=t.component;return"click"===e&&(i=!1!==a._handlePaginatorClick("before")&&i),"mousedown"===e&&(i=!1!==a._handlePaginatorPress("before")&&i),"touchend"===e&&(i=!1!==a._stopInterval()&&i),i}),null,null)),i.qb(6,212992,null,0,m.h,[i.k,i.y,D.a,[2,m.f],[2,r.a]],{disabled:[0,"disabled"]},null),(t()(),i.rb(7,0,null,null,0,"div",[["class","mat-tab-header-pagination-chevron"]],null,null,null,null,null)),(t()(),i.rb(8,0,[[2,0],["tabListContainer",1]],null,6,"div",[["class","mat-tab-label-container"]],null,[[null,"keydown"]],(function(t,e,n){var i=!0;return"keydown"===e&&(i=!1!==t.component._handleKeydown(n)&&i),i}),null,null)),(t()(),i.rb(9,0,[[3,0],["tabList",1]],null,5,"div",[["class","mat-tab-list"],["role","tablist"]],[[2,"_mat-animation-noopable",null]],[[null,"cdkObserveContent"]],(function(t,e,n){var i=!0;return"cdkObserveContent"===e&&(i=!1!==t.component._onContentChanges()&&i),i}),null,null)),i.qb(10,1196032,null,0,Q.a,[Q.b,i.k,i.y],null,{event:"cdkObserveContent"}),(t()(),i.rb(11,0,null,null,1,"div",[["class","mat-tab-labels"]],null,null,null,null,null)),i.Cb(null,0),(t()(),i.rb(13,0,null,null,1,"mat-ink-bar",[["class","mat-ink-bar"]],[[2,"_mat-animation-noopable",null]],null,null,null,null)),i.qb(14,16384,[[1,4]],0,O,[i.k,i.y,S,[2,r.a]],null,null),(t()(),i.rb(15,0,[[4,0],["nextPaginator",1]],null,2,"div",[["aria-hidden","true"],["class","mat-tab-header-pagination mat-tab-header-pagination-after mat-elevation-z4 mat-ripple"],["mat-ripple",""]],[[2,"mat-tab-header-pagination-disabled",null],[2,"mat-ripple-unbounded",null]],[[null,"mousedown"],[null,"click"],[null,"touchend"]],(function(t,e,n){var i=!0,a=t.component;return"mousedown"===e&&(i=!1!==a._handlePaginatorPress("after")&&i),"click"===e&&(i=!1!==a._handlePaginatorClick("after")&&i),"touchend"===e&&(i=!1!==a._stopInterval()&&i),i}),null,null)),i.qb(16,212992,null,0,m.h,[i.k,i.y,D.a,[2,m.f],[2,r.a]],{disabled:[0,"disabled"]},null),(t()(),i.rb(17,0,null,null,0,"div",[["class","mat-tab-header-pagination-chevron"]],null,null,null,null,null))],(function(t,e){var n=e.component;t(e,6,0,n._disableScrollBefore||n.disableRipple),t(e,16,0,n._disableScrollAfter||n.disableRipple)}),(function(t,e){var n=e.component;t(e,5,0,n._disableScrollBefore,i.Db(e,6).unbounded),t(e,9,0,"NoopAnimations"===n._animationMode),t(e,13,0,"NoopAnimations"===i.Db(e,14)._animationMode),t(e,15,0,n._disableScrollAfter,i.Db(e,16).unbounded)}))}var pt=i.pb({encapsulation:2,styles:[],data:{}});function gt(t){return i.Mb(0,[i.Cb(null,0),(t()(),i.gb(0,null,null,0))],null,null)}function _t(t){return i.Mb(2,[i.Ib(402653184,1,{_implicitContent:0}),(t()(),i.gb(0,[[1,2]],null,0,null,gt))],null,null)}var ft=n("mrSG"),xt=n("dAHy");class vt{constructor(t,e){this.openSourceService=t,this.bottomSheet=e,this.recommended=[],this.workedOn=[]}ngOnInit(){this.getRecommended(),this.getWorkedOn()}getRecommended(){return ft.a(this,void 0,void 0,(function*(){this.recommended=yield this.openSourceService.getOpenSourceProjects()}))}getWorkedOn(){return ft.a(this,void 0,void 0,(function*(){this.workedOn=yield this.openSourceService.getContributedToProjects()}))}share(t){this.bottomSheet.open(xt.a,{data:t})}}class yt{getOpenSourceProjects(){return ft.a(this,void 0,void 0,(function*(){return[{link:"https://angular.io",title:"Angular",subtitle:"Web framework I specialize in",image:"https://angular.io/assets/images/logos/angular/angular.svg"},{link:"https://material.angular.io",title:"Angular Material",subtitle:"Component library for Angular (using Google's Material Design approach)",image:"https://material.angular.io/assets/img/angular-material-logo.svg"},{link:"https://nestjs.com/",title:"Nest JS",subtitle:"Node JS framework (pure awesome)",image:"https://nestjs.com/img/logo-small.svg"},{link:"https://reactjs.org/",title:"React",subtitle:"Second favorite JS framework (yes it's a framework). I also happen to teach React! Visit ACA website for details",image:"https://cdn.worldvectorlogo.com/logos/react.svg"}]}))}getContributedToProjects(){return ft.a(this,void 0,void 0,(function*(){return[{link:"https://primefaces.org/primeng/#/",title:"PrimeNG",subtitle:"Angular library with UI components. Minor contribution (some event listeners added)",image:"https://primefaces.org/primeng/assets/showcase/images/logo.png"},{link:"https://github.com/bunnyfly/ngx-oxford",title:"NGX Oxford",subtitle:"Directive and pipe for Oxford commas and joined lists. Major contribution (added features and bug fixes)",image:""}]}))}}var kt=n("lwm9"),It=i.pb({encapsulation:0,styles:[["mat-card[_ngcontent-%COMP%]{margin:5px auto;width:50%}mat-tab-group[_ngcontent-%COMP%]{margin:auto;width:75%}"]],data:{}});function Ct(t){return i.Mb(0,[(t()(),i.rb(0,0,null,null,17,"mat-card",[["class","mat-card"]],[[2,"_mat-animation-noopable",null]],null,null,o.b,o.a)),i.qb(1,49152,null,0,s.a,[[2,r.a]],null,null),(t()(),i.rb(2,0,null,0,1,"img",[["class","mat-card-image"],["mat-card-image",""]],[[8,"src",4],[8,"alt",0]],null,null,null,null)),i.qb(3,16384,null,0,s.e,[],null,null),(t()(),i.rb(4,0,null,0,5,"mat-card-content",[["class","mat-card-content"]],null,null,null,null,null)),i.qb(5,16384,null,0,s.c,[],null,null),(t()(),i.rb(6,0,null,null,1,"h4",[],null,null,null,null,null)),(t()(),i.Kb(7,null,["",""])),(t()(),i.rb(8,0,null,null,1,"p",[],null,null,null,null,null)),(t()(),i.Kb(9,null,["",""])),(t()(),i.rb(10,0,null,0,7,"mat-card-actions",[["align","end"],["class","mat-card-actions"]],[[2,"mat-card-actions-align-end",null]],null,null,null,null)),i.qb(11,16384,null,0,s.b,[],{align:[0,"align"]},null),(t()(),i.rb(12,0,null,null,2,"a",[["mat-button",""],["target","_blank"]],[[8,"href",4],[1,"tabindex",0],[1,"disabled",0],[1,"aria-disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(t,e,n){var a=!0;return"click"===e&&(a=!1!==i.Db(t,13)._haltDisabledEvents(n)&&a),a}),c.c,c.a)),i.qb(13,180224,null,0,u.a,[b.e,i.k,[2,r.a]],null,null),(t()(),i.Kb(-1,0,["VIEW"])),(t()(),i.rb(15,0,null,null,2,"button",[["mat-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(t,e,n){var i=!0;return"click"===e&&(i=!1!==t.component.share(t.context.$implicit)&&i),i}),c.d,c.b)),i.qb(16,180224,null,0,u.b,[i.k,b.e,[2,r.a]],null,null),(t()(),i.Kb(-1,0,["SHARE"]))],(function(t,e){t(e,11,0,"end")}),(function(t,e){t(e,0,0,"NoopAnimations"===i.Db(e,1)._animationMode),t(e,2,0,e.context.$implicit.image,i.vb(1,"Image for ",e.context.$implicit.title,"")),t(e,7,0,e.context.$implicit.title),t(e,9,0,e.context.$implicit.subtitle),t(e,10,0,"end"===i.Db(e,11).align),t(e,12,0,e.context.$implicit.link,i.Db(e,13).disabled?-1:i.Db(e,13).tabIndex||0,i.Db(e,13).disabled||null,i.Db(e,13).disabled.toString(),"NoopAnimations"===i.Db(e,13)._animationMode),t(e,15,0,i.Db(e,16).disabled||null,"NoopAnimations"===i.Db(e,16)._animationMode)}))}function wt(t){return i.Mb(0,[(t()(),i.rb(0,0,null,null,1,"img",[["class","mat-card-image"],["mat-card-image",""]],[[8,"src",4],[8,"alt",0]],null,null,null,null)),i.qb(1,16384,null,0,s.e,[],null,null)],null,(function(t,e){t(e,0,0,e.parent.context.$implicit.image,i.vb(1,"Image for ",e.parent.context.$implicit.title,""))}))}function Dt(t){return i.Mb(0,[(t()(),i.rb(0,0,null,null,17,"mat-card",[["class","mat-card"]],[[2,"_mat-animation-noopable",null]],null,null,o.b,o.a)),i.qb(1,49152,null,0,s.a,[[2,r.a]],null,null),(t()(),i.gb(16777216,null,0,1,null,wt)),i.qb(3,16384,null,0,d.k,[i.O,i.L],{ngIf:[0,"ngIf"]},null),(t()(),i.rb(4,0,null,0,5,"mat-card-content",[["class","mat-card-content"]],null,null,null,null,null)),i.qb(5,16384,null,0,s.c,[],null,null),(t()(),i.rb(6,0,null,null,1,"h4",[],null,null,null,null,null)),(t()(),i.Kb(7,null,["",""])),(t()(),i.rb(8,0,null,null,1,"p",[],null,null,null,null,null)),(t()(),i.Kb(9,null,["",""])),(t()(),i.rb(10,0,null,0,7,"mat-card-actions",[["align","end"],["class","mat-card-actions"]],[[2,"mat-card-actions-align-end",null]],null,null,null,null)),i.qb(11,16384,null,0,s.b,[],{align:[0,"align"]},null),(t()(),i.rb(12,0,null,null,2,"a",[["mat-button",""],["target","_blank"]],[[8,"href",4],[1,"tabindex",0],[1,"disabled",0],[1,"aria-disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(t,e,n){var a=!0;return"click"===e&&(a=!1!==i.Db(t,13)._haltDisabledEvents(n)&&a),a}),c.c,c.a)),i.qb(13,180224,null,0,u.a,[b.e,i.k,[2,r.a]],null,null),(t()(),i.Kb(-1,0,["VIEW"])),(t()(),i.rb(15,0,null,null,2,"button",[["mat-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(t,e,n){var i=!0;return"click"===e&&(i=!1!==t.component.share(t.context.$implicit)&&i),i}),c.d,c.b)),i.qb(16,180224,null,0,u.b,[i.k,b.e,[2,r.a]],null,null),(t()(),i.Kb(-1,0,["SHARE"]))],(function(t,e){t(e,3,0,e.context.$implicit.image),t(e,11,0,"end")}),(function(t,e){t(e,0,0,"NoopAnimations"===i.Db(e,1)._animationMode),t(e,7,0,e.context.$implicit.title),t(e,9,0,e.context.$implicit.subtitle),t(e,10,0,"end"===i.Db(e,11).align),t(e,12,0,e.context.$implicit.link,i.Db(e,13).disabled?-1:i.Db(e,13).tabIndex||0,i.Db(e,13).disabled||null,i.Db(e,13).disabled.toString(),"NoopAnimations"===i.Db(e,13)._animationMode),t(e,15,0,i.Db(e,16).disabled||null,"NoopAnimations"===i.Db(e,16)._animationMode)}))}function St(t){return i.Mb(0,[(t()(),i.rb(0,0,null,null,26,"mat-tab-group",[["class","mat-tab-group"]],[[2,"mat-tab-group-dynamic-height",null],[2,"mat-tab-group-inverted-header",null]],null,null,ct,it)),i.qb(1,3325952,null,1,$,[i.k,i.h,[2,E],[2,r.a]],null,null),i.Ib(603979776,1,{_tabs:1}),(t()(),i.rb(3,16777216,null,null,11,"mat-tab",[["label","Used"]],null,null,null,_t,pt)),i.qb(4,770048,[[1,4]],2,P,[i.O],{textLabel:[0,"textLabel"]},null),i.Ib(603979776,2,{templateLabel:0}),i.Ib(335544320,3,{_explicitContent:0}),(t()(),i.rb(7,0,null,0,5,"mat-card",[["class","mat-card"]],[[2,"_mat-animation-noopable",null]],null,null,o.b,o.a)),i.qb(8,49152,null,0,s.a,[[2,r.a]],null,null),(t()(),i.rb(9,0,null,0,3,"mat-card-content",[["class","mat-card-content"]],null,null,null,null,null)),i.qb(10,16384,null,0,s.c,[],null,null),(t()(),i.rb(11,0,null,null,1,"p",[],null,null,null,null,null)),(t()(),i.Kb(-1,null,[" This is a list of open source libraries, frameworks and tools that I used in software development. I tried to make this list as exhaustive as possible. The presence of a project in this list usually indicates that I recommend using it. "])),(t()(),i.gb(16777216,null,0,1,null,Ct)),i.qb(14,278528,null,0,d.j,[i.O,i.L,i.r],{ngForOf:[0,"ngForOf"]},null),(t()(),i.rb(15,16777216,null,null,11,"mat-tab",[["label","Worked On"]],null,null,null,_t,pt)),i.qb(16,770048,[[1,4]],2,P,[i.O],{textLabel:[0,"textLabel"]},null),i.Ib(603979776,4,{templateLabel:0}),i.Ib(335544320,5,{_explicitContent:0}),(t()(),i.rb(19,0,null,0,5,"mat-card",[["class","mat-card"]],[[2,"_mat-animation-noopable",null]],null,null,o.b,o.a)),i.qb(20,49152,null,0,s.a,[[2,r.a]],null,null),(t()(),i.rb(21,0,null,0,3,"mat-card-content",[["class","mat-card-content"]],null,null,null,null,null)),i.qb(22,16384,null,0,s.c,[],null,null),(t()(),i.rb(23,0,null,null,1,"p",[],null,null,null,null,null)),(t()(),i.Kb(-1,null,[" This is a list of open source libraries, frameworks and tools that I have contributed to by code. While I have opened a number of issues on some projects, I only mention projects that I have directly contributed to. If you find any projects here that interest you, consider contributing with code or donating! "])),(t()(),i.gb(16777216,null,0,1,null,Dt)),i.qb(26,278528,null,0,d.j,[i.O,i.L,i.r],{ngForOf:[0,"ngForOf"]},null)],(function(t,e){var n=e.component;t(e,4,0,"Used"),t(e,14,0,n.recommended),t(e,16,0,"Worked On"),t(e,26,0,n.workedOn)}),(function(t,e){t(e,0,0,i.Db(e,1).dynamicHeight,"below"===i.Db(e,1).headerPosition),t(e,7,0,"NoopAnimations"===i.Db(e,8)._animationMode),t(e,19,0,"NoopAnimations"===i.Db(e,20)._animationMode)}))}function Ot(t){return i.Mb(0,[(t()(),i.rb(0,0,null,null,1,"app-open-source",[],null,null,null,St,It)),i.qb(1,114688,null,0,vt,[yt,kt.b],null,null)],(function(t,e){t(e,1,0)}),null)}var Tt=i.nb("app-open-source",vt,Ot,{},{},[]),Lt=n("yWMr"),Pt=n("kNaN"),Mt=n("QQfA"),jt=n("iInd");class At{}var Bt=n("j1ZV");n.d(e,"OpenSourceModuleNgFactory",(function(){return Rt}));var Rt=i.ob(a,[],(function(t){return i.Ab([i.Bb(512,i.j,i.Z,[[8,[l.a,Tt,Lt.a,Pt.a]],[3,i.j],i.w]),i.Bb(4608,d.m,d.l,[i.t,[2,d.v]]),i.Bb(4608,Q.c,Q.c,[]),i.Bb(4608,Mt.a,Mt.a,[Mt.g,Mt.c,i.j,Mt.f,Mt.d,i.q,i.y,d.d,tt.b,[2,d.g]]),i.Bb(5120,Mt.h,Mt.i,[Mt.a]),i.Bb(4608,yt,yt,[]),i.Bb(1073742336,d.c,d.c,[]),i.Bb(1073742336,jt.m,jt.m,[[2,jt.r],[2,jt.k]]),i.Bb(1073742336,At,At,[]),i.Bb(1073742336,tt.a,tt.a,[]),i.Bb(1073742336,m.g,m.g,[[2,m.d],[2,et.f]]),i.Bb(1073742336,h.g,h.g,[]),i.Bb(1073742336,D.b,D.b,[]),i.Bb(1073742336,m.i,m.i,[]),i.Bb(1073742336,Q.d,Q.d,[]),i.Bb(1073742336,b.a,b.a,[]),i.Bb(1073742336,U,U,[]),i.Bb(1073742336,s.f,s.f,[]),i.Bb(1073742336,nt.b,nt.b,[]),i.Bb(1073742336,Mt.e,Mt.e,[]),i.Bb(1073742336,kt.e,kt.e,[]),i.Bb(1073742336,u.c,u.c,[]),i.Bb(1073742336,Bt.a,Bt.a,[]),i.Bb(1073742336,a,a,[]),i.Bb(1024,jt.i,(function(){return[[{path:"",component:vt}]]}),[])])}))}}]);