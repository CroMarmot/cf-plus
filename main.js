"use strict";
(self["webpackChunkcf_plus"] = self["webpackChunkcf_plus"] || []).push([["main"],{

/***/ 4320:
/*!*****************************************************!*\
  !*** ./src/app/app-material/app-material.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppMaterialModule": () => (/* binding */ AppMaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/chips */ 1169);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 8611);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ 6060);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sidenav */ 6643);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);











class AppMaterialModule {}
AppMaterialModule.ɵfac = function AppMaterialModule_Factory(t) {
  return new (t || AppMaterialModule)();
};
AppMaterialModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: AppMaterialModule
});
AppMaterialModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [
  // A11yModule,
  // CdkAccordionModule,
  // ClipboardModule,
  // CdkMenuModule,
  // CdkStepperModule,
  // CdkTableModule,
  // CdkTreeModule,
  // DragDropModule,
  // MatAutocompleteModule,
  // MatBadgeModule,
  // MatBottomSheetModule,
  _angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButtonModule,
  // MatButtonToggleModule,
  _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardModule,
  // MatCheckboxModule,
  _angular_material_chips__WEBPACK_IMPORTED_MODULE_3__.MatChipsModule,
  // MatStepperModule,
  // MatDatepickerModule,
  // MatDialogModule,
  // MatDividerModule,
  // MatExpansionModule,
  // MatGridListModule,
  _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule,
  // MatListModule,
  // MatMenuModule,
  // MatNativeDateModule,
  _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__.MatPaginatorModule,
  // MatProgressBarModule,
  // MatProgressSpinnerModule,
  // MatRadioModule,
  // MatRippleModule,
  _angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MatSelectModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__.MatSidenavModule,
  // MatSliderModule,
  // MatSlideToggleModule,
  // MatSnackBarModule,
  // MatSortModule,
  _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableModule,
  // MatTabsModule,
  _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__.MatToolbarModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppMaterialModule, {
    exports: [
    // A11yModule,
    // CdkAccordionModule,
    // ClipboardModule,
    // CdkMenuModule,
    // CdkStepperModule,
    // CdkTableModule,
    // CdkTreeModule,
    // DragDropModule,
    // MatAutocompleteModule,
    // MatBadgeModule,
    // MatBottomSheetModule,
    _angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButtonModule,
    // MatButtonToggleModule,
    _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardModule,
    // MatCheckboxModule,
    _angular_material_chips__WEBPACK_IMPORTED_MODULE_3__.MatChipsModule,
    // MatStepperModule,
    // MatDatepickerModule,
    // MatDialogModule,
    // MatDividerModule,
    // MatExpansionModule,
    // MatGridListModule,
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule,
    // MatListModule,
    // MatMenuModule,
    // MatNativeDateModule,
    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__.MatPaginatorModule,
    // MatProgressBarModule,
    // MatProgressSpinnerModule,
    // MatRadioModule,
    // MatRippleModule,
    _angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MatSelectModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__.MatSidenavModule,
    // MatSliderModule,
    // MatSlideToggleModule,
    // MatSnackBarModule,
    // MatSortModule,
    _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableModule,
    // MatTabsModule,
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__.MatToolbarModule]
  });
})();

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ 439);
/* harmony import */ var _report_report_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./report/report.component */ 8562);
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-page/main-page.component */ 2627);
/* harmony import */ var _share_page_share_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./share-page/share-page.component */ 7081);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);







const routes = [{
  path: '',
  component: _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_2__.MainPageComponent,
  children: [{
    path: 'annual',
    component: _report_report_component__WEBPACK_IMPORTED_MODULE_1__.ReportComponent
  }, {
    path: '',
    redirectTo: '/annual',
    pathMatch: 'full'
  }]
}, {
  path: 'share',
  component: _share_page_share_page_component__WEBPACK_IMPORTED_MODULE_3__.SharePageComponent
}, {
  path: '',
  redirectTo: '/annual',
  pathMatch: 'full'
}, {
  path: '**',
  component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_0__.PageNotFoundComponent
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes, {
    useHash: true
  }), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class AppComponent {
  constructor() {
    this.title = 'cf-plus';
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 1,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50Lmxlc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxnS0FBZ0siLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/service-worker */ 3769);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _app_material_app_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-material/app-material.module */ 4320);
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ 439);
/* harmony import */ var _report_report_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./report/report.component */ 8562);
/* harmony import */ var _components_rating_graph_rating_graph_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/rating-graph/rating-graph.component */ 1119);
/* harmony import */ var _components_user_rating_user_rating_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/user-rating/user-rating.component */ 6092);
/* harmony import */ var _components_verdicts_stat_verdicts_stat_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/verdicts-stat/verdicts-stat.component */ 2308);
/* harmony import */ var _components_language_stat_language_stat_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/language-stat/language-stat.component */ 2901);
/* harmony import */ var _components_tags_stat_tags_stat_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/tags-stat/tags-stat.component */ 4090);
/* harmony import */ var _components_level_stat_level_stat_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/level-stat/level-stat.component */ 674);
/* harmony import */ var _components_rating_stat_rating_stat_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/rating-stat/rating-stat.component */ 6545);
/* harmony import */ var _components_stat_table_stat_table_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/stat-table/stat-table.component */ 1677);
/* harmony import */ var _components_fetching_stat_fetching_stat_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/fetching-stat/fetching-stat.component */ 3757);
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./main-page/main-page.component */ 2627);
/* harmony import */ var _share_page_share_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./share-page/share-page.component */ 7081);
/* harmony import */ var _components_year_stat_year_stat_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/year-stat/year-stat.component */ 70);
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ngx-echarts */ 1548);
/* harmony import */ var echarts_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! echarts/core */ 2437);
/* harmony import */ var echarts_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! echarts/core */ 4009);
/* harmony import */ var echarts_charts__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! echarts/charts */ 2342);
/* harmony import */ var echarts_components__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! echarts/components */ 8336);
/* harmony import */ var echarts_components__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! echarts/components */ 1690);
/* harmony import */ var echarts_components__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! echarts/components */ 166);
/* harmony import */ var echarts_renderers__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! echarts/renderers */ 8882);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/core */ 2560);
























// Import the echarts core module, which provides the necessary interfaces for using echarts.

// Import bar charts, all with Chart suffix


// Import the Canvas renderer, note that introducing the CanvasRenderer or SVGRenderer is a required step




// import 'echarts/theme/macarons.js';
// https://github.com/xieziyu/ngx-echarts#treeshaking-custom-build
echarts_core__WEBPACK_IMPORTED_MODULE_18__.use([echarts_components__WEBPACK_IMPORTED_MODULE_19__.install, echarts_components__WEBPACK_IMPORTED_MODULE_20__.install, echarts_components__WEBPACK_IMPORTED_MODULE_21__.install, echarts_charts__WEBPACK_IMPORTED_MODULE_22__.install, echarts_renderers__WEBPACK_IMPORTED_MODULE_23__.install]);
class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__.BrowserModule, _angular_common__WEBPACK_IMPORTED_MODULE_26__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.ReactiveFormsModule, ngx_echarts__WEBPACK_IMPORTED_MODULE_28__.NgxEchartsModule.forRoot({
    echarts: echarts_core__WEBPACK_IMPORTED_MODULE_29__
  }), _app_material_app_material_module__WEBPACK_IMPORTED_MODULE_3__.AppMaterialModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_30__.ServiceWorkerModule.register('ngsw-worker.js', {
    enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production
  }), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_31__.BrowserAnimationsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__.PageNotFoundComponent, _report_report_component__WEBPACK_IMPORTED_MODULE_5__.ReportComponent, _components_rating_graph_rating_graph_component__WEBPACK_IMPORTED_MODULE_6__.RatingGraphComponent, _components_user_rating_user_rating_component__WEBPACK_IMPORTED_MODULE_7__.UserRatingComponent, _components_verdicts_stat_verdicts_stat_component__WEBPACK_IMPORTED_MODULE_8__.VerdictsStatComponent, _components_language_stat_language_stat_component__WEBPACK_IMPORTED_MODULE_9__.LanguageStatComponent, _components_tags_stat_tags_stat_component__WEBPACK_IMPORTED_MODULE_10__.TagsStatComponent, _components_level_stat_level_stat_component__WEBPACK_IMPORTED_MODULE_11__.LevelStatComponent, _components_rating_stat_rating_stat_component__WEBPACK_IMPORTED_MODULE_12__.RatingStatComponent, _components_stat_table_stat_table_component__WEBPACK_IMPORTED_MODULE_13__.StatTableComponent, _components_fetching_stat_fetching_stat_component__WEBPACK_IMPORTED_MODULE_14__.FetchingStatComponent, _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_15__.MainPageComponent, _share_page_share_page_component__WEBPACK_IMPORTED_MODULE_16__.SharePageComponent, _components_year_stat_year_stat_component__WEBPACK_IMPORTED_MODULE_17__.YearStatComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__.BrowserModule, _angular_common__WEBPACK_IMPORTED_MODULE_26__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.ReactiveFormsModule, ngx_echarts__WEBPACK_IMPORTED_MODULE_28__.NgxEchartsModule, _app_material_app_material_module__WEBPACK_IMPORTED_MODULE_3__.AppMaterialModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_30__.ServiceWorkerModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_31__.BrowserAnimationsModule]
  });
})();

/***/ }),

/***/ 296:
/*!*******************************************************!*\
  !*** ./src/app/components/fetching-stat/FetchStat.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FetchStat": () => (/* binding */ FetchStat)
/* harmony export */ });
var FetchStat;
(function (FetchStat) {
  FetchStat[FetchStat["Before"] = 0] = "Before";
  FetchStat[FetchStat["Fetching"] = 1] = "Fetching";
  FetchStat[FetchStat["Success"] = 2] = "Success";
  FetchStat[FetchStat["Failed"] = 3] = "Failed";
})(FetchStat || (FetchStat = {}));

/***/ }),

/***/ 3757:
/*!*********************************************************************!*\
  !*** ./src/app/components/fetching-stat/fetching-stat.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FetchingStatComponent": () => (/* binding */ FetchingStatComponent)
/* harmony export */ });
/* harmony import */ var _FetchStat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FetchStat */ 296);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 7822);




function FetchingStatComponent_div_0_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-spinner", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function FetchingStatComponent_div_0_mat_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-icon", 6);
  }
}
function FetchingStatComponent_div_0_mat_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-icon", 7);
  }
}
function FetchingStatComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, FetchingStatComponent_div_0_span_2_Template, 2, 0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, FetchingStatComponent_div_0_mat_icon_3_Template, 1, 0, "mat-icon", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, FetchingStatComponent_div_0_mat_icon_4_Template, 1, 0, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.text, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.stat == ctx_r0.FetchStat.Fetching);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.stat == ctx_r0.FetchStat.Failed);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.stat == ctx_r0.FetchStat.Success);
  }
}
class FetchingStatComponent {
  constructor() {
    this.FetchStat = _FetchStat__WEBPACK_IMPORTED_MODULE_0__.FetchStat;
  }
}
FetchingStatComponent.ɵfac = function FetchingStatComponent_Factory(t) {
  return new (t || FetchingStatComponent)();
};
FetchingStatComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: FetchingStatComponent,
  selectors: [["app-fetching-stat"]],
  inputs: {
    stat: "stat",
    text: "text"
  },
  decls: 1,
  vars: 1,
  consts: [[4, "ngIf"], ["style", "display: inline-block", 4, "ngIf"], ["aria-hidden", "false", "aria-label", "success", "fontIcon", "close", "class", "red-icon", 4, "ngIf"], ["aria-hidden", "false", "aria-label", "success", "fontIcon", "check", "class", "green-icon", 4, "ngIf"], [2, "display", "inline-block"], ["diameter", "20"], ["aria-hidden", "false", "aria-label", "success", "fontIcon", "close", 1, "red-icon"], ["aria-hidden", "false", "aria-label", "success", "fontIcon", "check", 1, "green-icon"]],
  template: function FetchingStatComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, FetchingStatComponent_div_0_Template, 5, 4, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.stat != ctx.FetchStat.Before);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon],
  styles: [".red-icon[_ngcontent-%COMP%] {\n  color: red;\n}\n.green-icon[_ngcontent-%COMP%] {\n  color: green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZldGNoaW5nLXN0YXQuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0FBQ0Y7QUFFQTtFQUNFLFlBQUE7QUFBRiIsImZpbGUiOiJmZXRjaGluZy1zdGF0LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlZC1pY29uIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmdyZWVuLWljb24ge1xuICBjb2xvcjogZ3JlZW47XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9mZXRjaGluZy1zdGF0L2ZldGNoaW5nLXN0YXQuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0FBQ0Y7QUFFQTtFQUNFLFlBQUE7QUFBRjs7QUFFQSxnWUFBZ1kiLCJzb3VyY2VzQ29udGVudCI6WyIucmVkLWljb24ge1xuICBjb2xvcjogcmVkO1xufVxuXG4uZ3JlZW4taWNvbiB7XG4gIGNvbG9yOiBncmVlbjtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 2901:
/*!*********************************************************************!*\
  !*** ./src/app/components/language-stat/language-stat.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanguageStatComponent": () => (/* binding */ LanguageStatComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6562);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 8951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-echarts */ 1548);




class LanguageStatComponent {
  constructor() {
    // track the page life
    this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.userStatus$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.eChartInstance$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.chartOption = {
      title: {
        text: 'Languages',
        left: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        type: 'scroll',
        orient: 'vertical',
        right: 10,
        top: 20,
        bottom: 20,
        data: []
      },
      series: [{
        name: 'language',
        type: 'pie',
        radius: '55%',
        center: ['50%', '60%'],
        data: [],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }]
    };
  }
  set userStatusResult(result) {
    if (typeof result !== 'undefined') {
      this.userStatus$.next(result);
    }
  }
  ngOnInit() {
    (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.combineLatest)([this.userStatus$, this.eChartInstance$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroyed$)).subscribe(([result, eChartIns]) => {
      this.updateLanguageGraph(result, eChartIns);
    });
  }
  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
  onChartInit(ec) {
    this.eChartInstance$.next(ec);
  }
  updateLanguageGraph(result, eChartIns) {
    // if (result.length === 0) {
    //   return;
    // }
    const languages = {};
    for (const item of Object.values(result)) {
      if (typeof languages[item.programmingLanguage] === 'undefined') {
        languages[item.programmingLanguage] = 0;
      }
      languages[item.programmingLanguage]++;
    }
    const languagesDataList = [];
    for (const [name, value] of Object.entries(languages)) {
      languagesDataList.push({
        name,
        value
      });
    }
    languagesDataList.sort((v0, v1) => v1.value - v0.value);
    const chartOption = this.chartOption;
    chartOption.legend.data = languagesDataList.map(v => v.name);
    chartOption.series[0].data = languagesDataList;
    eChartIns.setOption(chartOption); // TODO
  }
}

LanguageStatComponent.ɵfac = function LanguageStatComponent_Factory(t) {
  return new (t || LanguageStatComponent)();
};
LanguageStatComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: LanguageStatComponent,
  selectors: [["app-language-stat"]],
  inputs: {
    userStatusResult: "userStatusResult"
  },
  decls: 1,
  vars: 1,
  consts: [["echarts", "", 1, "demo-chart", 3, "options", "chartInit"]],
  template: function LanguageStatComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("chartInit", function LanguageStatComponent_Template_div_chartInit_0_listener($event) {
        return ctx.onChartInit($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx.chartOption);
    }
  },
  dependencies: [ngx_echarts__WEBPACK_IMPORTED_MODULE_4__.NgxEchartsDirective],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYW5ndWFnZS1zdGF0LmNvbXBvbmVudC5sZXNzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9sYW5ndWFnZS1zdGF0L2xhbmd1YWdlLXN0YXQuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLDRLQUE0SyIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 674:
/*!***************************************************************!*\
  !*** ./src/app/components/level-stat/level-stat.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LevelStatComponent": () => (/* binding */ LevelStatComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6562);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 8951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-echarts */ 1548);




class LevelStatComponent {
  constructor() {
    // track the page life
    this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.levelsMapArrOb$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.eChartInstance$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.chartOption = {
      title: {
        text: 'Levels(Div1, Div2 and Div3 mixed)',
        left: 'center'
      },
      color: ['#3398DB'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
      },

      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [{
        type: 'category',
        data: [],
        axisTick: {
          alignWithLabel: true
        }
      }],
      yAxis: [{
        type: 'value'
      }],
      series: [{
        name: 'solved',
        type: 'bar',
        barWidth: '60%',
        data: []
      }]
    };
  }
  set userStatusResult(result) {
    if (typeof result !== 'undefined') {
      this.levelsMapArrOb$.next(result);
    }
  }
  ngOnInit() {
    (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.combineLatest)([this.levelsMapArrOb$, this.eChartInstance$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroyed$)).subscribe(([result, eChartIns]) => {
      this.updateLevelGraph(result, eChartIns);
    });
  }
  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
  onChartInit(eChartsIns) {
    this.eChartInstance$.next(eChartsIns);
  }
  updateLevelGraph(result, eChartsIns) {
    // if (result.length === 0) {
    //   return;
    // }
    // [problem id] = {};
    const problems = {};
    result.forEach(item => {
      const problemId = `${item.problem.contestId}-${item.problem.index}`;
      if (typeof problems[problemId] === 'undefined') {
        // first submission of a problem
        problems[problemId] = {
          failed: 0,
          solved: 0 // We also want to save how many submission got AC, a better name would have been number_of_ac
        };
      }
    });

    const solvedLevels = {};
    result.forEach(item => {
      const problemId = `${item.problem.contestId}-${item.problem.index}`;
      if (item.verdict === 'OK') {
        problems[problemId].solved++;
        if (problems[problemId].solved === 1) {
          // some thing like D1 D2
          const pIdx = item.problem.index[0];
          if (typeof solvedLevels[pIdx] === 'undefined') {
            solvedLevels[pIdx] = 0;
          }
          solvedLevels[pIdx]++;
        }
      }
    });
    const solvedDataList = [];
    for (const [name, value] of Object.entries(solvedLevels)) {
      solvedDataList.push({
        name,
        value
      });
    }
    solvedDataList.sort((v0, v1) => v1.name > v0.name ? -1 : 1);
    const chartOption = this.chartOption;
    chartOption.xAxis[0].data = solvedDataList.map(v => v.name);
    chartOption.series[0].data = solvedDataList.map(v => v.value);
    eChartsIns.setOption(chartOption); // TODO
  }
}

LevelStatComponent.ɵfac = function LevelStatComponent_Factory(t) {
  return new (t || LevelStatComponent)();
};
LevelStatComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: LevelStatComponent,
  selectors: [["app-level-stat"]],
  inputs: {
    userStatusResult: "userStatusResult"
  },
  decls: 1,
  vars: 1,
  consts: [["echarts", "", 1, "demo-chart", 3, "options", "chartInit"]],
  template: function LevelStatComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("chartInit", function LevelStatComponent_Template_div_chartInit_0_listener($event) {
        return ctx.onChartInit($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx.chartOption);
    }
  },
  dependencies: [ngx_echarts__WEBPACK_IMPORTED_MODULE_4__.NgxEchartsDirective],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsZXZlbC1zdGF0LmNvbXBvbmVudC5sZXNzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9sZXZlbC1zdGF0L2xldmVsLXN0YXQuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHdLQUF3SyIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1119:
/*!*******************************************************************!*\
  !*** ./src/app/components/rating-graph/rating-graph.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RatingGraphComponent": () => (/* binding */ RatingGraphComponent)
/* harmony export */ });
/* harmony import */ var _services_codeforces_static_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/codeforces-static.service */ 5501);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6562);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8951);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 2673);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-echarts */ 1548);





const COLORS = _services_codeforces_static_service__WEBPACK_IMPORTED_MODULE_0__.CodeforcesStaticService.getColors();
class RatingGraphComponent {
  constructor() {
    // track the page life
    this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.ratingGraphResult$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.eChartInstance$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.chartOption = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross'
        }
      },
      xAxis: {
        type: 'category',
        data: []
      },
      yAxis: {
        type: 'value',
        scale: true
      },
      series: [{
        data: [],
        type: 'line'
      }]
    };
  }
  set userRatingList(value) {
    if (typeof value !== 'undefined') {
      this.ratingGraphResult$.next(value);
    }
  }
  ngOnInit() {
    const vMap = {
      top: 10,
      right: 10,
      pieces: []
    };
    COLORS.forEach(v => {
      vMap.pieces.push({
        gt: v.scoreLow,
        lte: v.scoreHigh,
        color: v.color
      });
    });
    this.chartOption.visualMap = [vMap];
    (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.combineLatest)([this.ratingGraphResult$, this.eChartInstance$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.destroyed$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(([result, eChartIns]) => (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(this.updateRatingGraph(result, eChartIns)))).subscribe(({
      ins,
      options
    }) => {
      ins.setOption(options);
    });
  }
  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
  onChartInit(eChartsIns) {
    this.eChartInstance$.next(eChartsIns);
  }
  updateRatingGraph(result, eChartsIns) {
    const chartOption = this.chartOption;
    const xAxisData = [];
    result.forEach((value, index) => {
      return xAxisData.push(index);
    });
    chartOption.xAxis.data = xAxisData; // TODO fix
    const seriesData = [];
    result.forEach(v => {
      seriesData.push(v.newRating);
    });
    chartOption.series[0].data = seriesData;
    return {
      ins: eChartsIns,
      options: chartOption
    };
  }
}
RatingGraphComponent.ɵfac = function RatingGraphComponent_Factory(t) {
  return new (t || RatingGraphComponent)();
};
RatingGraphComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: RatingGraphComponent,
  selectors: [["app-rating-graph"]],
  inputs: {
    userRatingList: "userRatingList"
  },
  decls: 1,
  vars: 1,
  consts: [["echarts", "", 1, "demo-chart", 3, "options", "chartInit"]],
  template: function RatingGraphComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("chartInit", function RatingGraphComponent_Template_div_chartInit_0_listener($event) {
        return ctx.onChartInit($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("options", ctx.chartOption);
    }
  },
  dependencies: [ngx_echarts__WEBPACK_IMPORTED_MODULE_7__.NgxEchartsDirective],
  styles: [".demo-chart[_ngcontent-%COMP%] {\n  height: 80vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhdGluZy1ncmFwaC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUFDRiIsImZpbGUiOiJyYXRpbmctZ3JhcGguY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVtby1jaGFydCB7XG4gIGhlaWdodDogODB2aDtcbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9yYXRpbmctZ3JhcGgvcmF0aW5nLWdyYXBoLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGOztBQUVBLHdUQUF3VCIsInNvdXJjZXNDb250ZW50IjpbIi5kZW1vLWNoYXJ0IHtcbiAgaGVpZ2h0OiA4MHZoO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6545:
/*!*****************************************************************!*\
  !*** ./src/app/components/rating-stat/rating-stat.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RatingStatComponent": () => (/* binding */ RatingStatComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6562);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 8951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-echarts */ 1548);




class RatingStatComponent {
  constructor() {
    // track the page life
    this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.levelsMapArrOb$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.eChartInstance$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.chartOption = {
      title: {
        text: 'Ratings',
        left: 'center'
      },
      color: ['#3398DB'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
      },

      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [{
        type: 'category',
        data: [],
        axisTick: {
          alignWithLabel: true
        }
      }],
      yAxis: [{
        type: 'value'
      }],
      series: [{
        name: 'solved',
        type: 'bar',
        barWidth: '60%',
        data: []
      }]
    };
  }
  set userStatusResult(result) {
    if (typeof result !== 'undefined') {
      this.levelsMapArrOb$.next(result);
    }
  }
  ngOnInit() {
    (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.combineLatest)([this.levelsMapArrOb$, this.eChartInstance$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroyed$)).subscribe(([result, eChartIns]) => {
      this.updateRatingGraph(result, eChartIns);
    });
  }
  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
  onChartInit(eChartsIns) {
    this.eChartInstance$.next(eChartsIns);
  }
  updateRatingGraph(result, eChartsIns) {
    // if (result.length === 0) {
    //   return;
    // }
    // [problem id] = {};
    const problems = {};
    result.forEach(item => {
      const problemId = `${item.problem.contestId}-${item.problem.index}`;
      if (typeof problems[problemId] === 'undefined') {
        // first submission of a problem
        problems[problemId] = {
          failed: 0,
          solved: 0 // We also want to save how many submission got AC, a better name would have been number_of_ac
        };
      }
    });

    const solvedRating = {};
    result.forEach(item => {
      const problemId = `${item.problem.contestId}-${item.problem.index}`;
      if (item.verdict === 'OK') {
        problems[problemId].solved++;
        if (problems[problemId].solved === 1) {
          // some thing like D1 D2
          const pIdx = item.problem.rating;
          if (typeof pIdx === 'undefined') {
            return;
          }
          if (typeof solvedRating[pIdx] === 'undefined') {
            solvedRating[pIdx] = 0;
          }
          solvedRating[pIdx]++;
        }
      }
    });
    const solvedDataList = [];
    for (const [name, value] of Object.entries(solvedRating)) {
      solvedDataList.push({
        name,
        value
      });
    }
    solvedDataList.sort((v0, v1) => Number(v1.name) > Number(v0.name) ? -1 : 1);
    const chartOption = this.chartOption;
    chartOption.xAxis[0].data = solvedDataList.map(v => v.name);
    chartOption.series[0].data = solvedDataList.map(v => v.value);
    eChartsIns.setOption(chartOption); // TODO
  }
}

RatingStatComponent.ɵfac = function RatingStatComponent_Factory(t) {
  return new (t || RatingStatComponent)();
};
RatingStatComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: RatingStatComponent,
  selectors: [["app-rating-stat"]],
  inputs: {
    userStatusResult: "userStatusResult"
  },
  decls: 1,
  vars: 1,
  consts: [["echarts", "", 1, "demo-chart", 3, "options", "chartInit"]],
  template: function RatingStatComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("chartInit", function RatingStatComponent_Template_div_chartInit_0_listener($event) {
        return ctx.onChartInit($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx.chartOption);
    }
  },
  dependencies: [ngx_echarts__WEBPACK_IMPORTED_MODULE_4__.NgxEchartsDirective],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyYXRpbmctc3RhdC5jb21wb25lbnQubGVzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9yYXRpbmctc3RhdC9yYXRpbmctc3RhdC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esd0tBQXdLIiwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 1677:
/*!***************************************************************!*\
  !*** ./src/app/components/stat-table/stat-table.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatTableComponent": () => (/* binding */ StatTableComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 8951);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 9337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/chips */ 1169);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ 5288);







function StatTableComponent_th_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Some numbers about");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function StatTableComponent_td_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r7.name);
  }
}
function StatTableComponent_th_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Count");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function StatTableComponent_td_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r8.value);
  }
}
function StatTableComponent_tr_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 12);
  }
}
function StatTableComponent_tr_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 13);
  }
}
function StatTableComponent_mat_chip_option_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip-option")(1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", item_r10.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r10.name, " ");
  }
}
class StatTableComponent {
  constructor() {
    this.displayedColumns = ['name', 'value'];
    this.dataSource = [];
    this.unsolved = [];
    // track the page life
    this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.userStatusMapArrOb$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
  }
  set userStatusResult(result) {
    if (typeof result !== 'undefined') {
      this.userStatusMapArrOb$.next(result);
    }
  }
  ngOnInit() {
    this.userStatusMapArrOb$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroyed$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(result => this.updateView(result))).subscribe();
  }
  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
  updateView(result) {
    // if (result.length === 0) {
    //   return;
    // }
    const problems = {};
    result.forEach(item => {
      const problemId = `${item.problem.contestId}-${item.problem.index}`;
      if (typeof problems[problemId] === 'undefined') {
        // first submission of a problem
        problems[problemId] = {
          attempts: 0,
          failed: 0,
          solved: 0 // We also want to save how many submission got AC, a better name would have been number_of_ac
        };
      }
    });

    const solvedTags = {};
    const failedTags = {};
    result.forEach(item => {
      // don't change order
      const problemId = `${item.problem.contestId}-${item.problem.index}`;
      if (item.verdict === 'OK') {
        problems[problemId].solved++;
        problems[problemId].attempts = 1; // in time reverse order so attempts = 0
        if (problems[problemId].solved === 1) {
          item.problem.tags.forEach(tag => {
            if (typeof solvedTags[tag] === 'undefined') {
              solvedTags[tag] = 0;
            }
            solvedTags[tag]++;
          });
        }
      } else {
        problems[problemId].failed++;
        problems[problemId].attempts++; // in time reverse order so attempts++
        if (problems[problemId].failed === 1) {
          item.problem.tags.forEach(tag => {
            if (typeof failedTags[tag] === 'undefined') {
              failedTags[tag] = 0;
            }
            failedTags[tag]++;
          });
        }
      }
    });
    const solvedDataList = [];
    for (const [name, value] of Object.entries(solvedTags)) {
      solvedDataList.push({
        name,
        value
      });
    }
    solvedDataList.sort((v0, v1) => v1.value - v0.value);
    // Number of contests	101
    // Best rank	23 (1155)
    // Worst rank	6359 (1316)
    // Max up	1423 (839)
    // Max down	-173 (1316)
    // console.log('data source:', this.dataSource);
    let tried = 0; // count of distinct problems
    let solved = 0;
    let totalAttempt = 0;
    let maxAttempt = 0; // before ac + 1 || count of submit
    let maxAttemptProblem = '';
    let maxAc = 0;
    let maxAcProblem = '';
    let solvedWithOneSub = 0;
    this.unsolved = [];
    for (const [p, item] of Object.entries(problems)) {
      tried++;
      if (item.solved > 0) {
        solved++;
        totalAttempt += item.attempts;
      }
      if (item.solved === 0) {
        const [contestId, pId] = p.split('-');
        this.unsolved.push({
          name: p,
          url: `https://codeforces.com/contest/${contestId}/problem/${pId}`
        });
      }
      if (item.attempts > maxAttempt) {
        maxAttempt = item.attempts;
        maxAttemptProblem = p;
      }
      if (item.solved > maxAc) {
        maxAc = item.solved;
        maxAcProblem = p;
      }
      if (item.solved > 0 && item.attempts === 1) {
        solvedWithOneSub++;
      }
    }
    this.dataSource = [];
    if (result.length > 0) {
      this.dataSource.push({
        name: 'Tried',
        value: `${tried}`
      });
      this.dataSource.push({
        name: 'Solved',
        value: `${solved}`
      });
      this.dataSource.push({
        name: 'Average attempts(AC)',
        value: (totalAttempt / solved).toFixed(2)
      });
      this.dataSource.push({
        name: 'Max attempts',
        value: `${maxAttempt}(${maxAttemptProblem})`
      });
      if (solved) {
        this.dataSource = this.dataSource.concat({
          name: 'Solved with one submission',
          value: `${solvedWithOneSub}(${(solvedWithOneSub / solved * 100).toFixed(2)}%)`
        });
      }
    }
  }
}
StatTableComponent.ɵfac = function StatTableComponent_Factory(t) {
  return new (t || StatTableComponent)();
};
StatTableComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: StatTableComponent,
  selectors: [["app-stat-table"]],
  inputs: {
    userStatusResult: "userStatusResult"
  },
  decls: 14,
  vars: 4,
  consts: [["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "value"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [2, "padding-left", "10px"], ["aria-label", "submitted but unsolved", 2, "padding", "10px"], [4, "ngFor", "ngForOf"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""], [3, "href"]],
  template: function StatTableComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StatTableComponent_th_2_Template, 2, 0, "th", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, StatTableComponent_td_3_Template, 2, 1, "td", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, StatTableComponent_th_5_Template, 2, 0, "th", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, StatTableComponent_td_6_Template, 2, 1, "td", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, StatTableComponent_tr_7_Template, 1, 0, "tr", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, StatTableComponent_tr_8_Template, 1, 0, "tr", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card")(10, "h1", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Unsolved problems");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-chip-listbox", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, StatTableComponent_mat_chip_option_13_Template, 3, 2, "mat-chip-option", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.unsolved);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__.MatChipListbox, _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__.MatChipOption, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRow],
  styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXQtdGFibGUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FBQ0YiLCJmaWxlIjoic3RhdC10YWJsZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zdGF0LXRhYmxlL3N0YXQtdGFibGUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUEsd1NBQXdTIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 4090:
/*!*************************************************************!*\
  !*** ./src/app/components/tags-stat/tags-stat.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TagsStatComponent": () => (/* binding */ TagsStatComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6562);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 8951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-echarts */ 1548);




class TagsStatComponent {
  constructor() {
    // track the page life
    this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.tagsMapArrOb$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.eChartInstance$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.chartOption = {
      title: {
        text: 'Tags (Only Accept)',
        left: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        type: 'scroll',
        orient: 'vertical',
        right: 10,
        top: 20,
        bottom: 20,
        data: []
      },
      series: [{
        name: 'tags',
        type: 'pie',
        radius: '55%',
        center: ['50%', '60%'],
        data: [],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }]
    };
  }
  set userStatusResult(result) {
    if (typeof result !== 'undefined') {
      this.tagsMapArrOb$.next(result);
    }
  }
  ngOnInit() {
    (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.combineLatest)([this.tagsMapArrOb$, this.eChartInstance$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroyed$)).subscribe(([result, eChartIns]) => {
      this.updateVerdictGraph(result, eChartIns);
    });
  }
  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
  onChartInit(eChartsIns) {
    this.eChartInstance$.next(eChartsIns);
  }
  updateVerdictGraph(result, eChartsIns) {
    // if (result.length === 0) {
    //   return;
    // }
    const problems = {};
    result.forEach(item => {
      const problemId = `${item.problem.contestId}-${item.problem.index}`;
      if (typeof problems[problemId] === 'undefined') {
        // first submission of a problem
        problems[problemId] = {
          failed: 0,
          solved: 0 // We also want to save how many submission got AC, a better name would have been number_of_ac
        };
      }
    });

    const solvedTags = {};
    const failedTags = {};
    result.forEach(item => {
      const problemId = `${item.problem.contestId}-${item.problem.index}`;
      if (item.verdict === 'OK') {
        problems[problemId].solved++;
        if (problems[problemId].solved === 1) {
          item.problem.tags.forEach(tag => {
            if (typeof solvedTags[tag] === 'undefined') {
              solvedTags[tag] = 0;
            }
            solvedTags[tag]++;
          });
        }
      } else {
        problems[problemId].failed++;
        if (problems[problemId].failed === 1) {
          item.problem.tags.forEach(tag => {
            if (typeof failedTags[tag] === 'undefined') {
              failedTags[tag] = 0;
            }
            failedTags[tag]++;
          });
        }
      }
    });
    const solvedDataList = [];
    for (const [name, value] of Object.entries(solvedTags)) {
      solvedDataList.push({
        name,
        value
      });
    }
    solvedDataList.sort((v0, v1) => v1.value - v0.value);
    const chartOption = this.chartOption;
    chartOption.legend.data = solvedDataList.map(v => v.name);
    chartOption.series[0].data = solvedDataList;
    // TODO failed pie chart
    eChartsIns.setOption(chartOption); // TODO
  }
}

TagsStatComponent.ɵfac = function TagsStatComponent_Factory(t) {
  return new (t || TagsStatComponent)();
};
TagsStatComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: TagsStatComponent,
  selectors: [["app-tags-stat"]],
  inputs: {
    userStatusResult: "userStatusResult"
  },
  decls: 1,
  vars: 1,
  consts: [["echarts", "", 1, "demo-chart", 3, "options", "chartInit"]],
  template: function TagsStatComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("chartInit", function TagsStatComponent_Template_div_chartInit_0_listener($event) {
        return ctx.onChartInit($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx.chartOption);
    }
  },
  dependencies: [ngx_echarts__WEBPACK_IMPORTED_MODULE_4__.NgxEchartsDirective],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWdzLXN0YXQuY29tcG9uZW50Lmxlc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy90YWdzLXN0YXQvdGFncy1zdGF0LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSx3S0FBd0siLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 6092:
/*!*****************************************************************!*\
  !*** ./src/app/components/user-rating/user-rating.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserRatingComponent": () => (/* binding */ UserRatingComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ 6060);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _services_codeforces_static_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/codeforces-static.service */ 5501);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);







function UserRatingComponent_th_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "contestId");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function UserRatingComponent_td_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r16.contestId);
  }
}
function UserRatingComponent_th_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "contestName");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function UserRatingComponent_td_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r17.contestName);
  }
}
function UserRatingComponent_th_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "handle");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function UserRatingComponent_td_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r18.handle);
  }
}
function UserRatingComponent_th_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "newRating");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function UserRatingComponent_td_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r19 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("color", ctx_r7.calcColor(row_r19.newRating));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", row_r19.newRating, " ");
  }
}
function UserRatingComponent_th_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "oldRating");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function UserRatingComponent_td_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r20.oldRating);
  }
}
function UserRatingComponent_th_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "rank");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function UserRatingComponent_td_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r21.rank);
  }
}
function UserRatingComponent_th_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function UserRatingComponent_td_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](2, 1, row_r22.ratingUpdateTimeSeconds * 1000, "y/M/d HH:mm", "+0800"), " ");
  }
}
function UserRatingComponent_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 17);
  }
}
function UserRatingComponent_tr_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 18);
  }
}
const _c0 = function () {
  return [5, 10, 20, 50, 100];
};
class UserRatingComponent {
  constructor() {
    this.displayedColumns = ['contestId', 'contestName', /* 'handle',*/
    'newRating', /* 'oldRating',*/
    'rank', 'ratingUpdateTimeSeconds'];
    this.userRatingListPrivate = [];
  }
  set userRatingList(value) {
    // console.log('userRatingList' + value.length);
    this.userRatingListPrivate = value;
    this.dataSource$ = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTableDataSource(value);
    this.dataSource$.paginator = this.paginator;
  }
  get userRatingList() {
    return this.userRatingListPrivate;
  }
  calcColor(r) {
    const COLORS = _services_codeforces_static_service__WEBPACK_IMPORTED_MODULE_0__.CodeforcesStaticService.getColors();
    for (const i in COLORS) {
      if (r < COLORS[i].scoreHigh) {
        return COLORS[i].color;
      }
    }
    return '#000000';
  }
}
UserRatingComponent.ɵfac = function UserRatingComponent_Factory(t) {
  return new (t || UserRatingComponent)();
};
UserRatingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: UserRatingComponent,
  selectors: [["app-user-rating"]],
  viewQuery: function UserRatingComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__.MatPaginator, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    }
  },
  inputs: {
    userRatingList: "userRatingList"
  },
  decls: 26,
  vars: 5,
  consts: [[1, "mat-elevation-z8"], ["mat-table", "", "aria-label", "Elements", 3, "dataSource"], ["matColumnDef", "contestId"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "contestName"], ["matColumnDef", "handle"], ["matColumnDef", "newRating"], ["mat-cell", "", 3, "color", 4, "matCellDef"], ["matColumnDef", "oldRating"], ["matColumnDef", "rank"], ["matColumnDef", "ratingUpdateTimeSeconds"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", "aria-label", "Select page of periodic elements", 3, "pageSizeOptions"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]],
  template: function UserRatingComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "table", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](2, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, UserRatingComponent_th_3_Template, 2, 0, "th", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, UserRatingComponent_td_4_Template, 2, 1, "td", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](5, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, UserRatingComponent_th_6_Template, 2, 0, "th", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, UserRatingComponent_td_7_Template, 2, 1, "td", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](8, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, UserRatingComponent_th_9_Template, 2, 0, "th", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, UserRatingComponent_td_10_Template, 2, 1, "td", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](11, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, UserRatingComponent_th_12_Template, 2, 0, "th", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, UserRatingComponent_td_13_Template, 2, 3, "td", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](14, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, UserRatingComponent_th_15_Template, 2, 0, "th", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, UserRatingComponent_td_16_Template, 2, 1, "td", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](17, 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, UserRatingComponent_th_18_Template, 2, 0, "th", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, UserRatingComponent_td_19_Template, 2, 1, "td", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](20, 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, UserRatingComponent_th_21_Template, 2, 0, "th", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, UserRatingComponent_td_22_Template, 3, 5, "td", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, UserRatingComponent_tr_23_Template, 1, 0, "tr", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, UserRatingComponent_tr_24_Template, 1, 0, "tr", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "mat-paginator", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.dataSource$);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c0));
    }
  },
  dependencies: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__.MatPaginator, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatRow, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLXJhdGluZy5jb21wb25lbnQuY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy91c2VyLXJhdGluZy91c2VyLXJhdGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSx3S0FBd0siLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 2308:
/*!*********************************************************************!*\
  !*** ./src/app/components/verdicts-stat/verdicts-stat.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerdictsStatComponent": () => (/* binding */ VerdictsStatComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6562);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 8951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-echarts */ 1548);




class VerdictsStatComponent {
  constructor() {
    // track the page life
    this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.userStatus$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.eChartInstance$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.chartOption = {
      title: {
        text: 'Verdicts',
        left: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        type: 'scroll',
        orient: 'vertical',
        right: 10,
        top: 20,
        bottom: 20,
        data: []
      },
      series: [{
        name: 'verdicts',
        type: 'pie',
        radius: '55%',
        center: ['50%', '60%'],
        data: [],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }]
    };
  }
  set userStatusResult(result) {
    if (typeof result !== 'undefined') {
      this.userStatus$.next(result);
    }
  }
  ngOnInit() {
    (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.combineLatest)([this.userStatus$, this.eChartInstance$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroyed$)).subscribe(([result, eChartIns]) => {
      this.updateVerdictGraph(result, eChartIns);
    });
  }
  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
  onChartInit(ec) {
    this.eChartInstance$.next(ec);
  }
  updateVerdictGraph(result, eChartIns) {
    // if (result.length === 0) {
    //   return;
    // }
    const verdicts = {};
    for (const item of Object.values(result)) {
      if (typeof verdicts[item.verdict] === 'undefined') {
        verdicts[item.verdict] = 0;
      }
      verdicts[item.verdict]++;
    }
    const verdictsDataList = [];
    for (const [name, value] of Object.entries(verdicts)) {
      verdictsDataList.push({
        name,
        value
      });
    }
    verdictsDataList.sort((v0, v1) => v1.value - v0.value);
    const chartOption = this.chartOption;
    chartOption.legend.data = verdictsDataList.map(v => v.name);
    chartOption.series[0].data = verdictsDataList;
    eChartIns.setOption(chartOption); // TODO
  }
}

VerdictsStatComponent.ɵfac = function VerdictsStatComponent_Factory(t) {
  return new (t || VerdictsStatComponent)();
};
VerdictsStatComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: VerdictsStatComponent,
  selectors: [["app-verdicts-stat"]],
  inputs: {
    userStatusResult: "userStatusResult"
  },
  decls: 1,
  vars: 1,
  consts: [["echarts", "", 1, "demo-chart", 3, "options", "chartInit"]],
  template: function VerdictsStatComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("chartInit", function VerdictsStatComponent_Template_div_chartInit_0_listener($event) {
        return ctx.onChartInit($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx.chartOption);
    }
  },
  dependencies: [ngx_echarts__WEBPACK_IMPORTED_MODULE_4__.NgxEchartsDirective],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZXJkaWN0cy1zdGF0LmNvbXBvbmVudC5sZXNzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy92ZXJkaWN0cy1zdGF0L3ZlcmRpY3RzLXN0YXQuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLDRLQUE0SyIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 70:
/*!*************************************************************!*\
  !*** ./src/app/components/year-stat/year-stat.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YearStatComponent": () => (/* binding */ YearStatComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6067);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 9337);
/* harmony import */ var src_app_utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/utils/utils */ 9860);
/* harmony import */ var src_model_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/model/models */ 1313);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);






const _c0 = function (a0, a1) {
  return [a0, a1];
};
function YearStatComponent_div_3_div_4_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 12);
  }
  if (rf & 2) {
    const v_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](1, _c0, "year" + item_r1.year, "month" + v_r5.month));
  }
}
const _c1 = function (a0) {
  return {
    flex: a0
  };
};
function YearStatComponent_div_3_div_4_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 14)(2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const v_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c1, v_r5.green));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c1, v_r5.red));
  }
}
function YearStatComponent_div_3_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, YearStatComponent_div_3_div_4_div_1_div_1_Template, 1, 4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, YearStatComponent_div_3_div_4_div_1_div_2_Template, 3, 6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const v_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", v_r5.green + v_r5.red === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", v_r5.green + v_r5.red !== 0);
  }
}
function YearStatComponent_div_3_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, YearStatComponent_div_3_div_4_div_1_Template, 3, 2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const week_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", week_r3);
  }
}
function YearStatComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4)(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, YearStatComponent_div_3_div_4_Template, 2, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.year);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", item_r1.weekList);
  }
}
class YearStatComponent {
  constructor() {
    this.userData$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.ReplaySubject(1);
    this.yearsResult = [];
  }
  set userStatusResult(result) {
    if (typeof result !== 'undefined') {
      this.userData$.next(result);
    }
  }
  ngOnInit() {
    this.userData$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(data => {
      // console.log(`years result called len = ${data.length}`);
      // collect as map
      const d2ggMap = new Map(null);
      if (data.length === 0) {
        return [];
      }
      const todayDate = (0,src_app_utils_utils__WEBPACK_IMPORTED_MODULE_0__.timestamp2number)(new Date().getTime()); // TODO
      let minDate = todayDate;
      let maxDate = 19700101;
      data.forEach(raw => {
        if (typeof raw.creationTimeSeconds === 'undefined') {
          return;
        }
        const key = (0,src_app_utils_utils__WEBPACK_IMPORTED_MODULE_0__.timestamp2number)(raw.creationTimeSeconds * 1000);
        const record = d2ggMap.has(key) ? d2ggMap.get(key) : new src_model_models__WEBPACK_IMPORTED_MODULE_1__.Date2GR(key);
        d2ggMap.set(key, record.addResult(raw.verdict));
        minDate = Math.min(minDate, key);
        maxDate = Math.max(maxDate, key);
      });
      // 开始年的一月一日
      minDate = (0,src_app_utils_utils__WEBPACK_IMPORTED_MODULE_0__.intDiv)(minDate, 10000) * 10000 + 101; // 19xx0101
      maxDate = (0,src_app_utils_utils__WEBPACK_IMPORTED_MODULE_0__.intDiv)(maxDate, 10000) * 10000 + 1231; // 19xx1231
      let year = 1970;
      let yd = new src_model_models__WEBPACK_IMPORTED_MODULE_1__.YearData(1970);
      const ret = [];
      for (let i = minDate; i <= maxDate; i = (0,src_app_utils_utils__WEBPACK_IMPORTED_MODULE_0__.nextDayNumber)(i)) {
        const pushData = d2ggMap.has(i) ? d2ggMap.get(i) : new src_model_models__WEBPACK_IMPORTED_MODULE_1__.Date2GR(i);
        if ((0,src_app_utils_utils__WEBPACK_IMPORTED_MODULE_0__.intDiv)(pushData.day, 10000) !== year) {
          if (yd.weekList.length !== 0) {
            ret.push(yd);
          }
          year = (0,src_app_utils_utils__WEBPACK_IMPORTED_MODULE_0__.intDiv)(pushData.day, 10000);
          yd = new src_model_models__WEBPACK_IMPORTED_MODULE_1__.YearData(year);
        }
        yd.add(pushData);
      }
      if (yd.weekList.length !== 0) {
        ret.push(yd);
      }
      this.yearsResult = ret;
    })).subscribe();
  }
}
YearStatComponent.ɵfac = function YearStatComponent_Factory(t) {
  return new (t || YearStatComponent)();
};
YearStatComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: YearStatComponent,
  selectors: [["app-year-stat"]],
  inputs: {
    userStatusResult: "userStatusResult"
  },
  decls: 4,
  vars: 1,
  consts: [[1, "statistics-container"], [1, "statistics-main"], [1, "ui-box"], ["class", "ui-year", 4, "ngFor", "ngForOf"], [1, "ui-year"], [1, "ui-year-data"], ["class", "ui-week", 4, "ngFor", "ngForOf"], [1, "ui-week"], ["class", "ui-day", 4, "ngFor", "ngForOf"], [1, "ui-day"], ["class", "ui-square bggrey", 3, "ngClass", 4, "ngIf"], ["class", "ui-square", 4, "ngIf"], [1, "ui-square", "bggrey", 3, "ngClass"], [1, "ui-square"], [1, "ui-square-sub", "bggreen", 3, "ngStyle"], [1, "ui-square-gsub", "bgred", 3, "ngStyle"]],
  template: function YearStatComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, YearStatComponent_div_3_Template, 5, 2, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.yearsResult);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgStyle],
  styles: [".statistics-container[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 900px;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  flex-direction: column;\n  position: relative;\n  width: 100%;\n}\n.ui-box[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ui-box[_ngcontent-%COMP%]   .ui-year[_ngcontent-%COMP%] {\n  display: flex;\n  position: relative;\n  box-sizing: border-box;\n  flex-direction: column;\n  padding: 10px;\n  margin: 15px;\n}\n.ui-box[_ngcontent-%COMP%]   .ui-year[_ngcontent-%COMP%]   .ui-year-data[_ngcontent-%COMP%] {\n  display: flex;\n  height: 105px;\n  position: relative;\n  box-sizing: border-box;\n  flex-direction: row;\n}\n.ui-box[_ngcontent-%COMP%]   .ui-year[_ngcontent-%COMP%]   .ui-year-data[_ngcontent-%COMP%]   .ui-week[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-direction: column;\n}\n.ui-box[_ngcontent-%COMP%]   .ui-year[_ngcontent-%COMP%]   .ui-year-data[_ngcontent-%COMP%]   .ui-week[_ngcontent-%COMP%]   .ui-day[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 14px;\n  height: 14px;\n  margin: 1px;\n}\n.ui-box[_ngcontent-%COMP%]   .ui-year[_ngcontent-%COMP%]   .ui-year-data[_ngcontent-%COMP%]   .ui-week[_ngcontent-%COMP%]   .ui-day[_ngcontent-%COMP%]   .ui-square[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 100%;\n  height: 100%;\n  flex-direction: column;\n}\n.ui-box[_ngcontent-%COMP%]   .ui-year[_ngcontent-%COMP%]   .ui-year-data[_ngcontent-%COMP%]   .ui-week[_ngcontent-%COMP%]   .ui-day[_ngcontent-%COMP%]   .ui-square[_ngcontent-%COMP%]   .ui-square-sub[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 100%;\n}\n.bggreen[_ngcontent-%COMP%] {\n  background-color: #c6e48b;\n}\n.bgred[_ngcontent-%COMP%] {\n  background-color: red;\n}\n.bggrey[_ngcontent-%COMP%] {\n  background-color: #ebedf0;\n}\n.bggrey.month1[_ngcontent-%COMP%], .bggrey.month3[_ngcontent-%COMP%], .bggrey.month5[_ngcontent-%COMP%], .bggrey.month7[_ngcontent-%COMP%], .bggrey.month9[_ngcontent-%COMP%], .bggrey.month11[_ngcontent-%COMP%] {\n  background-color: lightgray;\n}\n.errorReason[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInllYXItc3RhdC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBQ0Y7QUFFQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFBRjtBQUhBO0VBTUksYUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBQUo7QUFYQTtFQWNNLGFBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBQU47QUFsQkE7RUFxQlEsb0JBQUE7RUFDQSxzQkFBQTtBQUFSO0FBdEJBO0VBeUJVLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQVY7QUE1QkE7RUErQlksb0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FBQVo7QUFsQ0E7RUFxQ2Msb0JBQUE7RUFDQSxXQUFBO0FBQWQ7QUFTQTtFQUNFLHlCQUFBO0FBUEY7QUFVQTtFQUNFLHFCQUFBO0FBUkY7QUFXQTtFQUNFLHlCQUFBO0FBVEY7QUFZQTs7Ozs7O0VBTUUsMkJBQUE7QUFWRjtBQWFBO0VBQ0UsVUFBQTtBQVhGIiwiZmlsZSI6InllYXItc3RhdC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdGF0aXN0aWNzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1pbi13aWR0aDogOTAwcHg7IC8vICgoTWF0aC5yb3VuZCgzNjUvNykrNCkqMTVweClcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnVpLWJveCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIC51aS15ZWFyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW46IDE1cHg7XG5cbiAgICAudWkteWVhci1kYXRhIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBoZWlnaHQ6IDEwNXB4OyAvLyAoMTQrMSkqN1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cbiAgICAgIC51aS13ZWVrIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgICAgLnVpLWRheSB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgICAgd2lkdGg6IDE0cHg7XG4gICAgICAgICAgaGVpZ2h0OiAxNHB4O1xuICAgICAgICAgIG1hcmdpbjogMXB4O1xuXG4gICAgICAgICAgLnVpLXNxdWFyZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgICAgICAgLnVpLXNxdWFyZS1zdWIge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5iZ2dyZWVuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5OCwgMjI4LCAxMzkpO1xufVxuXG4uYmdyZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi5iZ2dyZXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM1LCAyMzcsIDI0MCk7XG59XG5cbi5iZ2dyZXkubW9udGgxLFxuLmJnZ3JleS5tb250aDMsXG4uYmdncmV5Lm1vbnRoNSxcbi5iZ2dyZXkubW9udGg3LFxuLmJnZ3JleS5tb250aDksXG4uYmdncmV5Lm1vbnRoMTEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG59XG5cbi5lcnJvclJlYXNvbiB7XG4gIGNvbG9yOiByZWQ7XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy95ZWFyLXN0YXQveWVhci1zdGF0LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFDRjtBQUVBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUFGO0FBSEE7RUFNSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFBSjtBQVhBO0VBY00sYUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFBTjtBQWxCQTtFQXFCUSxvQkFBQTtFQUNBLHNCQUFBO0FBQVI7QUF0QkE7RUF5QlUsb0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFBVjtBQTVCQTtFQStCWSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUFBWjtBQWxDQTtFQXFDYyxvQkFBQTtFQUNBLFdBQUE7QUFBZDtBQVNBO0VBQ0UseUJBQUE7QUFQRjtBQVVBO0VBQ0UscUJBQUE7QUFSRjtBQVdBO0VBQ0UseUJBQUE7QUFURjtBQVlBOzs7Ozs7RUFNRSwyQkFBQTtBQVZGO0FBYUE7RUFDRSxVQUFBO0FBWEY7O0FBRUEsNDRGQUE0NEYiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RhdGlzdGljcy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtaW4td2lkdGg6IDkwMHB4OyAvLyAoKE1hdGgucm91bmQoMzY1LzcpKzQpKjE1cHgpXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi51aS1ib3gge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcblxuICAudWkteWVhciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luOiAxNXB4O1xuXG4gICAgLnVpLXllYXItZGF0YSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgaGVpZ2h0OiAxMDVweDsgLy8gKDE0KzEpKjdcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuXG4gICAgICAudWktd2VlayB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgIC51aS1kYXkge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgIHdpZHRoOiAxNHB4O1xuICAgICAgICAgIGhlaWdodDogMTRweDtcbiAgICAgICAgICBtYXJnaW46IDFweDtcblxuICAgICAgICAgIC51aS1zcXVhcmUge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgICAgICAgIC51aS1zcXVhcmUtc3ViIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uYmdncmVlbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTgsIDIyOCwgMTM5KTtcbn1cblxuLmJncmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4uYmdncmV5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNSwgMjM3LCAyNDApO1xufVxuXG4uYmdncmV5Lm1vbnRoMSxcbi5iZ2dyZXkubW9udGgzLFxuLmJnZ3JleS5tb250aDUsXG4uYmdncmV5Lm1vbnRoNyxcbi5iZ2dyZXkubW9udGg5LFxuLmJnZ3JleS5tb250aDExIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xufVxuXG4uZXJyb3JSZWFzb24ge1xuICBjb2xvcjogcmVkO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2627:
/*!**************************************************!*\
  !*** ./src/app/main-page/main-page.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainPageComponent": () => (/* binding */ MainPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sidenav */ 6643);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);






class MainPageComponent {}
MainPageComponent.ɵfac = function MainPageComponent_Factory(t) {
  return new (t || MainPageComponent)();
};
MainPageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MainPageComponent,
  selectors: [["app-main-page"]],
  decls: 15,
  vars: 1,
  consts: [[1, "page-container"], ["color", "primary"], ["mat-icon-button", "", "aria-label", "menu icon", 1, "example-icon", 3, "click"], [1, "example-spacer"], [1, "example-container", 3, "hasBackdrop"], ["mode", "cover"], ["drawer", ""], [1, "example-button-row"], ["mat-flat-button", "", "routerLink", "/annual"]],
  template: function MainPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "mat-toolbar", 1)(2, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPageComponent_Template_button_click_2_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](_r0.toggle());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "menu");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Codeforces +");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-drawer-container", 4)(9, "mat-drawer", 5, 6)(11, "div", 7)(12, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Annual Report");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hasBackdrop", true);
    }
  },
  dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__.MatDrawer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__.MatDrawerContainer, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__.MatToolbar, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink],
  styles: [".page-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n}\n.page-container[_ngcontent-%COMP%]   .example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n.page-container[_ngcontent-%COMP%]   .example-container[_ngcontent-%COMP%] {\n  flex: 1;\n  width: 100vw;\n}\n.page-container[_ngcontent-%COMP%]   .example-container[_ngcontent-%COMP%]   .example-button-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.page-container[_ngcontent-%COMP%]   .example-container[_ngcontent-%COMP%]   .example-button-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.page-container[_ngcontent-%COMP%]   .example-container[_ngcontent-%COMP%]   .mat-drawer-content[_ngcontent-%COMP%] {\n  padding: 12px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n.page-container[_ngcontent-%COMP%]   .example-container[_ngcontent-%COMP%]   .mat-drawer-content[_ngcontent-%COMP%]   .ng-star-inserted[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4tcGFnZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUFDRjtBQUpBO0VBTUksY0FBQTtBQUNKO0FBUEE7RUFVSSxPQUFBO0VBQ0EsWUFBQTtBQUFKO0FBWEE7RUFjTSxhQUFBO0VBQ0Esc0JBQUE7QUFBTjtBQWZBO0VBa0JRLGdCQUFBO0FBQVI7QUFsQkE7RUF1Qk0sYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBRk47QUF4QkE7RUE2QlEsV0FBQTtBQUZSIiwiZmlsZSI6Im1haW4tcGFnZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwdmg7XG5cbiAgLmV4YW1wbGUtc3BhY2VyIHtcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgfVxuXG4gIC5leGFtcGxlLWNvbnRhaW5lciB7XG4gICAgZmxleDogMTtcbiAgICB3aWR0aDogMTAwdnc7XG5cbiAgICAuZXhhbXBsZS1idXR0b24tcm93IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICBidXR0b24ge1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5tYXQtZHJhd2VyLWNvbnRlbnQge1xuICAgICAgcGFkZGluZzogMTJweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cbiAgICAgIC5uZy1zdGFyLWluc2VydGVkIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWFpbi1wYWdlL21haW4tcGFnZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUFDRjtBQUpBO0VBTUksY0FBQTtBQUNKO0FBUEE7RUFVSSxPQUFBO0VBQ0EsWUFBQTtBQUFKO0FBWEE7RUFjTSxhQUFBO0VBQ0Esc0JBQUE7QUFBTjtBQWZBO0VBa0JRLGdCQUFBO0FBQVI7QUFsQkE7RUF1Qk0sYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBRk47QUF4QkE7RUE2QlEsV0FBQTtBQUZSOztBQUVBLGd1Q0FBZ3VDIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDB2aDtcblxuICAuZXhhbXBsZS1zcGFjZXIge1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICB9XG5cbiAgLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgICBmbGV4OiAxO1xuICAgIHdpZHRoOiAxMDB2dztcblxuICAgIC5leGFtcGxlLWJ1dHRvbi1yb3cge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1hdC1kcmF3ZXItY29udGVudCB7XG4gICAgICBwYWRkaW5nOiAxMnB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblxuICAgICAgLm5nLXN0YXItaW5zZXJ0ZWQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 439:
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageNotFoundComponent": () => (/* binding */ PageNotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class PageNotFoundComponent {
  constructor() {}
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) {
  return new (t || PageNotFoundComponent)();
};
PageNotFoundComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PageNotFoundComponent,
  selectors: [["app-page-not-found"]],
  decls: 9,
  vars: 0,
  consts: [[1, "page-404"], ["href", "/#/annual"], ["href", "/#/share"]],
  template: function PageNotFoundComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Page not found !");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3")(4, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "/annual");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3")(7, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "/share");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
  },
  styles: [".page-404[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtBQUNGIiwiZmlsZSI6InBhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtNDA0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUEsZ2RBQWdkIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtNDA0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 8562:
/*!********************************************!*\
  !*** ./src/app/report/report.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportComponent": () => (/* binding */ ReportComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_cf_plus_cf_plus_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 8951);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 9337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 2673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 6067);
/* harmony import */ var _utils_year2startend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/year2startend */ 3320);
/* harmony import */ var _components_fetching_stat_FetchStat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/fetching-stat/FetchStat */ 296);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_codeforces_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/codeforces-api.service */ 6347);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/input */ 8611);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _components_rating_graph_rating_graph_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/rating-graph/rating-graph.component */ 1119);
/* harmony import */ var _components_user_rating_user_rating_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/user-rating/user-rating.component */ 6092);
/* harmony import */ var _components_verdicts_stat_verdicts_stat_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/verdicts-stat/verdicts-stat.component */ 2308);
/* harmony import */ var _components_language_stat_language_stat_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/language-stat/language-stat.component */ 2901);
/* harmony import */ var _components_tags_stat_tags_stat_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/tags-stat/tags-stat.component */ 4090);
/* harmony import */ var _components_level_stat_level_stat_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/level-stat/level-stat.component */ 674);
/* harmony import */ var _components_rating_stat_rating_stat_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/rating-stat/rating-stat.component */ 6545);
/* harmony import */ var _components_stat_table_stat_table_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/stat-table/stat-table.component */ 1677);
/* harmony import */ var _components_fetching_stat_fetching_stat_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/fetching-stat/fetching-stat.component */ 3757);
/* harmony import */ var _components_year_stat_year_stat_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/year-stat/year-stat.component */ 70);



























function ReportComponent_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ReportComponent_button_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r3.userName = "");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
}
function ReportComponent_mat_option_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const y_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", y_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](y_r5);
  }
}
function ReportComponent_mat_error_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " Your selection is invalid ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
class ReportComponent {
  constructor(route, router, codeforcesApiService) {
    this.route = route;
    this.router = router;
    this.codeforcesApiService = codeforcesApiService;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_15__.Subject();
    this.yearControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.UntypedFormControl('valid', [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(/^20\d\d$/)]);
    this.FetchStat = _components_fetching_stat_FetchStat__WEBPACK_IMPORTED_MODULE_2__.FetchStat;
    this.ratingFetching = _components_fetching_stat_FetchStat__WEBPACK_IMPORTED_MODULE_2__.FetchStat.Before;
    this.statusFetching = _components_fetching_stat_FetchStat__WEBPACK_IMPORTED_MODULE_2__.FetchStat.Before;
    this.userName = '';
    this.queryUserName = '';
    this.userRating = [];
    this.userStatus = [];
    this.yearList = [];
    const curYear = new Date().getFullYear();
    for (let i = curYear; i >= 2010; i--) {
      this.yearList.push(`${i}`);
    }
  }
  ngOnInit() {
    var _this = this;
    const queryOb$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__.ReplaySubject(1);
    this.route.queryParams.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.takeUntil)(this.destroy$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.tap)(({
      year
    }) => this.yearControl.setValue(year || '')),
    // filter(({ handle }) => !!handle),
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.tap)(({
      handle
    }) => this.userName = handle), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.map)(r => ({
      handle: r.handle,
      year: (0,_utils_year2startend__WEBPACK_IMPORTED_MODULE_1__.year2startend)(r.year)
    }))).subscribe(r => {
      queryOb$.next(r);
    });
    // TODO how to merge into one with switchMap
    queryOb$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.tap)(({
      handle
    }) => this.queryUserName = handle), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.switchMap)( /*#__PURE__*/function () {
      var _ref = (0,_home_runner_work_cf_plus_cf_plus_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* ({
        handle,
        year
      }) {
        _this.userRating = [];
        _this.ratingFetching = _components_fetching_stat_FetchStat__WEBPACK_IMPORTED_MODULE_2__.FetchStat.Fetching;
        return {
          ret: yield _this.codeforcesApiService.getUserRating(handle),
          year
        };
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }())).subscribe(({
      ret,
      year: {
        start,
        end
      }
    }) => {
      this.ratingFetching = _components_fetching_stat_FetchStat__WEBPACK_IMPORTED_MODULE_2__.FetchStat.Success;
      this.userRating = ret.result.filter(item => item.ratingUpdateTimeSeconds * 1000 >= start && item.ratingUpdateTimeSeconds * 1000 <= end);
    });
    queryOb$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.switchMap)( /*#__PURE__*/function () {
      var _ref2 = (0,_home_runner_work_cf_plus_cf_plus_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* ({
        handle,
        year
      }) {
        _this.userStatus = [];
        _this.statusFetching = _components_fetching_stat_FetchStat__WEBPACK_IMPORTED_MODULE_2__.FetchStat.Fetching;
        return {
          ret: yield _this.codeforcesApiService.getUserStatus(handle),
          year
        };
      });
      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }())).subscribe(({
      ret,
      year: {
        start,
        end
      }
    }) => {
      this.statusFetching = _components_fetching_stat_FetchStat__WEBPACK_IMPORTED_MODULE_2__.FetchStat.Success;
      this.userStatus = ret.result.filter(item => item.creationTimeSeconds * 1000 >= start && item.creationTimeSeconds * 1000 <= end);
    });
  }
  goButtonClick() {
    this.router.navigate([], {
      queryParams: {
        handle: this.userName,
        year: this.yearControl.value || undefined
      }
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
ReportComponent.ɵfac = function ReportComponent_Factory(t) {
  return new (t || ReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_22__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_22__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_codeforces_api_service__WEBPACK_IMPORTED_MODULE_3__.CodeforcesApiService));
};
ReportComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
  type: ReportComponent,
  selectors: [["app-report"]],
  decls: 29,
  vars: 16,
  consts: [[1, "form-field"], ["matInput", "", "placeholder", "Ex. Cro-Marmot", 3, "ngModel", "ngModelChange"], ["matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click", 4, "ngIf"], ["appearance", "fill"], [3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["mat-raised-button", "", 3, "click"], [1, "fetching-text"], ["text", "Fetching user rating:", 3, "stat"], ["text", "Fetching user status:", 3, "stat"], [3, "userRatingList"], [3, "userStatusResult"], ["matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click"], [3, "value"]],
  template: function ReportComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 0)(1, "mat-form-field")(2, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "Handle");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "input", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function ReportComponent_Template_input_ngModelChange_4_listener($event) {
        return ctx.userName = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, ReportComponent_button_5_Template, 3, 0, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "mat-form-field", 3)(7, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8, "Year");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "mat-select", 4)(10, "mat-option");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](11, "All");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](12, ReportComponent_mat_option_12_Template, 2, 2, "mat-option", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](13, ReportComponent_mat_error_13_Template, 2, 0, "mat-error", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ReportComponent_Template_button_click_14_listener() {
        return ctx.goButtonClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](15, "Go");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "div")(17, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](18, "app-fetching-stat", 9)(19, "app-fetching-stat", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](20, "app-rating-graph", 11)(21, "app-user-rating", 11)(22, "app-verdicts-stat", 12)(23, "app-language-stat", 12)(24, "app-tags-stat", 12)(25, "app-level-stat", 12)(26, "app-rating-stat", 12)(27, "app-stat-table", 12)(28, "app-year-stat", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx.userName);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.userName);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formControl", ctx.yearControl);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx.yearList);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.yearControl.hasError("pattern"));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("stat", ctx.ratingFetching);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("stat", ctx.statusFetching);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("userRatingList", ctx.userRating);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("userRatingList", ctx.userRating);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("userStatusResult", ctx.userStatus);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("userStatusResult", ctx.userStatus);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("userStatusResult", ctx.userStatus);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("userStatusResult", ctx.userStatus);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("userStatusResult", ctx.userStatus);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("userStatusResult", ctx.userStatus);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("userStatusResult", ctx.userStatus);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_23__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControlDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_24__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_24__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_26__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__.MatSuffix, _angular_material_select__WEBPACK_IMPORTED_MODULE_28__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_29__.MatOption, _components_rating_graph_rating_graph_component__WEBPACK_IMPORTED_MODULE_4__.RatingGraphComponent, _components_user_rating_user_rating_component__WEBPACK_IMPORTED_MODULE_5__.UserRatingComponent, _components_verdicts_stat_verdicts_stat_component__WEBPACK_IMPORTED_MODULE_6__.VerdictsStatComponent, _components_language_stat_language_stat_component__WEBPACK_IMPORTED_MODULE_7__.LanguageStatComponent, _components_tags_stat_tags_stat_component__WEBPACK_IMPORTED_MODULE_8__.TagsStatComponent, _components_level_stat_level_stat_component__WEBPACK_IMPORTED_MODULE_9__.LevelStatComponent, _components_rating_stat_rating_stat_component__WEBPACK_IMPORTED_MODULE_10__.RatingStatComponent, _components_stat_table_stat_table_component__WEBPACK_IMPORTED_MODULE_11__.StatTableComponent, _components_fetching_stat_fetching_stat_component__WEBPACK_IMPORTED_MODULE_12__.FetchingStatComponent, _components_year_stat_year_stat_component__WEBPACK_IMPORTED_MODULE_13__.YearStatComponent],
  styles: [".form-field[_ngcontent-%COMP%] {\n  padding: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.fetching-text[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9ydC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNGO0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUFGIiwiZmlsZSI6InJlcG9ydC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWZpZWxkIHtcbiAgcGFkZGluZzogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5mZXRjaGluZy10ZXh0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcmVwb3J0L3JlcG9ydC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNGO0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUFGOztBQUVBLG9tQkFBb21CIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tZmllbGQge1xuICBwYWRkaW5nOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmZldGNoaW5nLXRleHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 7081:
/*!****************************************************!*\
  !*** ./src/app/share-page/share-page.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharePageComponent": () => (/* binding */ SharePageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class SharePageComponent {}
SharePageComponent.ɵfac = function SharePageComponent_Factory(t) {
  return new (t || SharePageComponent)();
};
SharePageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: SharePageComponent,
  selectors: [["app-share-page"]],
  decls: 2,
  vars: 0,
  template: function SharePageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "share-page works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaGFyZS1wYWdlLmNvbXBvbmVudC5sZXNzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmUtcGFnZS9zaGFyZS1wYWdlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSx3S0FBd0siLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 9860:
/*!********************************!*\
  !*** ./src/app/utils/utils.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LSCacheTool": () => (/* binding */ LSCacheTool),
/* harmony export */   "intDiv": () => (/* binding */ intDiv),
/* harmony export */   "nextDayNumber": () => (/* binding */ nextDayNumber),
/* harmony export */   "timestamp2number": () => (/* binding */ timestamp2number)
/* harmony export */ });
/* harmony import */ var _home_runner_work_cf_plus_cf_plus_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);

const intDiv = (val1, val2) => {
  if (val2 === 0) {
    return NaN;
  }
  return (val1 - val1 % val2) / val2;
};
const dateParse = val => {
  const d = new Date(val);
  return [d.getFullYear(), d.getMonth() + 1, d.getDate()];
};
const timestamp2number = val => {
  const [y, m, d] = dateParse(val);
  return y * 10000 + m * 100 + d;
};
const nextDayNumber = val => {
  const [y, m, d] = [intDiv(val, 10000), intDiv(val, 100) % 100, val % 100 + 1];
  const dt = new Date(y, m - 1, d);
  return timestamp2number(dt.getTime());
};
class LSCacheTool {
  // TODO on local storage change
  constructor(localStoragePrefix) {
    this.cachedData = null;
    this.cachedData = new Map();
    this.prefix = localStoragePrefix;
  }
  Get(key, fallBack) {
    var _this = this;
    return (0,_home_runner_work_cf_plus_cf_plus_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.cachedData.has(key)) {
        return _this.cachedData.get(key);
      }
      // check local storage
      const now = Date.now();
      const lskey = `${_this.prefix}${key}`;
      const jsondata = localStorage.getItem(lskey);
      let timestamp = 0;
      let result = null;
      try {
        const data = JSON.parse(jsondata);
        if (data) {
          timestamp = data.timestamp;
          result = data.result;
        }
      } catch (e) {
        console.error(e);
      }
      if (result && now - timestamp < 60 * 60 * 1000) {
        // TODO 1 day
        // 1 hour
        _this.cachedData.set(key, result);
        return result;
      }
      // use callback
      result = yield fallBack(); // may fail with exception
      _this.cachedData.set(key, result);
      localStorage.setItem(lskey, JSON.stringify({
        timestamp: now,
        result
      }));
      return result;
    })();
  }
}

/***/ }),

/***/ 3320:
/*!****************************************!*\
  !*** ./src/app/utils/year2startend.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "year2startend": () => (/* binding */ year2startend)
/* harmony export */ });
function year2startend(year) {
  let start = 2000;
  let end = new Date().getFullYear() + 1;
  if (/^\d{4}$/.test(year)) {
    start = Number(year);
    end = Number(year) + 1;
  }
  return {
    start: new Date(`${Number(start)}-01-01`).getTime(),
    end: new Date(`${Number(end)}-01-01`).getTime()
  };
}

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 1313:
/*!*****************************!*\
  !*** ./src/model/models.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Date2GR": () => (/* binding */ Date2GR),
/* harmony export */   "YearData": () => (/* binding */ YearData)
/* harmony export */ });
/* harmony import */ var _app_utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app/utils/utils */ 9860);

class Date2GR {
  // date to green red
  // 20xx0101
  constructor(day) {
    this.day = day;
    this.year = (0,_app_utils_utils__WEBPACK_IMPORTED_MODULE_0__.intDiv)(day, 10000);
    this.month = (0,_app_utils_utils__WEBPACK_IMPORTED_MODULE_0__.intDiv)(day, 100) % 100;
    this.date = day % 100;
    this.green = 0;
    this.red = 0;
  }
  addResult(val) {
    if (val === 'OK') {
      this.green++;
    } else {
      this.red++;
    }
    return this;
  }
}
class YearData {
  constructor(year) {
    this.year = year;
    this.weekList = [];
  }
  add(data) {
    if (this.weekList.length == 0 || this.weekList[this.weekList.length - 1].length == 7) {
      this.weekList.push([]);
    }
    this.weekList[this.weekList.length - 1].push(data);
  }
}

/***/ }),

/***/ 6347:
/*!************************************************!*\
  !*** ./src/services/codeforces-api.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CodeforcesApiService": () => (/* binding */ CodeforcesApiService)
/* harmony export */ });
/* harmony import */ var _app_utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app/utils/utils */ 9860);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


// import UserStatus from './user.status.js';
class CodeforcesApiService {
  constructor() {
    this.userStatusCache = new _app_utils_utils__WEBPACK_IMPORTED_MODULE_0__.LSCacheTool('user.status.');
    this.userRatingCache = new _app_utils_utils__WEBPACK_IMPORTED_MODULE_0__.LSCacheTool('user.rating.');
  }
  getUserStatus(userName) {
    if (!userName) {
      return Promise.resolve({
        status: 'OK',
        result: []
      });
    }
    // https://codeforces.com/apiHelp/methods#user.status
    return this.userStatusCache.Get(userName, () => fetch(`https://codeforces.com/api/user.status?handle=${userName}`).then(res => res.json()));
  }
  getUserRating(userName) {
    if (!userName) {
      return Promise.resolve({
        status: 'OK',
        result: []
      });
    }
    return this.userRatingCache.Get(userName, () => fetch(`https://codeforces.com/api/user.rating?handle=${userName}`).then(res => res.json()));
  }
}
CodeforcesApiService.ɵfac = function CodeforcesApiService_Factory(t) {
  return new (t || CodeforcesApiService)();
};
CodeforcesApiService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: CodeforcesApiService,
  factory: CodeforcesApiService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 5501:
/*!***************************************************!*\
  !*** ./src/services/codeforces-static.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CodeforcesStaticService": () => (/* binding */ CodeforcesStaticService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class CFUrlConfig {}
const urlOnline = {
  userRatingPrefix: 'https://codeforces.com/api/user.rating?',
  contestPrefix: 'https://codeforces.com/contest'
};
const urlStatic = {
  userRatingPrefix: 'assets/staticdata/cf/user.rating.json',
  contestPrefix: 'https://codeforces.com/contest'
};
class ScoreColors {}
const COLORS = [{
  scoreLow: 0,
  scoreHigh: 1200,
  color: '#cccccc',
  name: 'Newbie'
}, {
  scoreLow: 1200,
  scoreHigh: 1400,
  color: '#70eb74',
  name: 'Pupil'
}, {
  scoreLow: 1400,
  scoreHigh: 1600,
  color: '#76ddbb',
  name: 'Specialist'
}, {
  scoreLow: 1600,
  scoreHigh: 1900,
  color: '#aaa9fc',
  name: 'Expert'
}, {
  scoreLow: 1900,
  scoreHigh: 2100,
  color: '#ec84fc',
  name: 'Candidate Master'
}, {
  scoreLow: 2100,
  scoreHigh: 2300,
  color: '#fecc88',
  name: 'Master'
}, {
  scoreLow: 2300,
  scoreHigh: 2400,
  color: '#fcbb54',
  name: 'International Master'
}, {
  scoreLow: 2400,
  scoreHigh: 2600,
  color: '#f47476',
  name: 'Grandmaster'
}, {
  scoreLow: 2600,
  scoreHigh: 3000,
  color: '#f24533',
  name: 'International Grandmaster'
}, {
  scoreLow: 3000,
  scoreHigh: 4000,
  color: '#ab2e16',
  name: 'Legendary grandmaster'
}];
class CodeforcesStaticService {
  constructor() {}
  static getUrl() {
    return urlOnline;
  }
  static getColors() {
    return COLORS;
  }
}
CodeforcesStaticService.ɵfac = function CodeforcesStaticService_Factory(t) {
  return new (t || CodeforcesStaticService)();
};
CodeforcesStaticService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: CodeforcesStaticService,
  factory: CodeforcesStaticService.ɵfac,
  providedIn: 'root'
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map