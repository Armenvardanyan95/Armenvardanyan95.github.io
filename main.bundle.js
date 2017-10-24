webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home_component__ = __webpack_require__("../../../../../src/app/pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_header_header_component__ = __webpack_require__("../../../../../src/app/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_crew_management_crew_management_component__ = __webpack_require__("../../../../../src/app/pages/crew-management/crew-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_ism_isps_ism_isps_component__ = __webpack_require__("../../../../../src/app/pages/ism-isps/ism-isps.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_luxury_luxury_component__ = __webpack_require__("../../../../../src/app/pages/luxury/luxury.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_confidentiality_confidentiality_component__ = __webpack_require__("../../../../../src/app/pages/confidentiality/confidentiality.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_refit_refit_component__ = __webpack_require__("../../../../../src/app/pages/refit/refit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_technical_support_technical_support_component__ = __webpack_require__("../../../../../src/app/pages/technical-support/technical-support.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_fuel_and_dockage_fuel_and_dockage_component__ = __webpack_require__("../../../../../src/app/pages/fuel-and-dockage/fuel-and-dockage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_procurement_procurement_component__ = __webpack_require__("../../../../../src/app/pages/procurement/procurement.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_financial_management_financial_management_component__ = __webpack_require__("../../../../../src/app/pages/financial-management/financial-management.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var routes = [
    { path: '', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_6__pages_home_home_component__["a" /* HomeComponent */] },
    { path: 'crew-management', component: __WEBPACK_IMPORTED_MODULE_9__pages_crew_management_crew_management_component__["a" /* CrewManagementComponent */] },
    { path: 'ism-and-isms', component: __WEBPACK_IMPORTED_MODULE_10__pages_ism_isps_ism_isps_component__["a" /* IsmIspsComponent */] },
    { path: 'luxury', component: __WEBPACK_IMPORTED_MODULE_11__pages_luxury_luxury_component__["a" /* LuxuryComponent */] },
    { path: 'confidentiality', component: __WEBPACK_IMPORTED_MODULE_12__pages_confidentiality_confidentiality_component__["a" /* ConfidentialityComponent */] },
    { path: 'refit', component: __WEBPACK_IMPORTED_MODULE_13__pages_refit_refit_component__["a" /* RefitComponent */] },
    { path: 'technical-support', component: __WEBPACK_IMPORTED_MODULE_14__pages_technical_support_technical_support_component__["a" /* TechnicalSupportComponent */] },
    { path: 'fuel-and-dockage', component: __WEBPACK_IMPORTED_MODULE_15__pages_fuel_and_dockage_fuel_and_dockage_component__["a" /* FuelAndDockageComponent */] },
    { path: 'procurement-and-services', component: __WEBPACK_IMPORTED_MODULE_16__pages_procurement_procurement_component__["a" /* ProcurementComponent */] },
    { path: 'financial-management', component: __WEBPACK_IMPORTED_MODULE_17__pages_financial_management_financial_management_component__["a" /* FinancialManagementComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_9__pages_crew_management_crew_management_component__["a" /* CrewManagementComponent */],
            __WEBPACK_IMPORTED_MODULE_10__pages_ism_isps_ism_isps_component__["a" /* IsmIspsComponent */],
            __WEBPACK_IMPORTED_MODULE_11__pages_luxury_luxury_component__["a" /* LuxuryComponent */],
            __WEBPACK_IMPORTED_MODULE_12__pages_confidentiality_confidentiality_component__["a" /* ConfidentialityComponent */],
            __WEBPACK_IMPORTED_MODULE_13__pages_refit_refit_component__["a" /* RefitComponent */],
            __WEBPACK_IMPORTED_MODULE_14__pages_technical_support_technical_support_component__["a" /* TechnicalSupportComponent */],
            __WEBPACK_IMPORTED_MODULE_15__pages_fuel_and_dockage_fuel_and_dockage_component__["a" /* FuelAndDockageComponent */],
            __WEBPACK_IMPORTED_MODULE_16__pages_procurement_procurement_component__["a" /* ProcurementComponent */],
            __WEBPACK_IMPORTED_MODULE_17__pages_financial_management_financial_management_component__["a" /* FinancialManagementComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(routes),
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MatMenuModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MatExpansionModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MatGridListModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["g" /* MatFormFieldModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["h" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["i" /* MatCardModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["j" /* MatTabsModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".centered-text {\r\n  text-align: center !important;\r\n  font-size: 20px;\r\n  padding: 20px;\r\n  color: white;\r\n  background-color: #303030;\r\n}\r\n\r\na {\r\n  color: mediumpurple;\r\n  text-decoration: none;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"centered-text\">\r\n\r\n    <p>New York | Fort Lauderdale | South of France | Italy</p>\r\n\r\n    <p>+1.917.880.6466 | +33.609.954.420</p>\r\n\r\n    <a href=\"mailto:Info@OceanBlueYachting.com\">Info@OceanBlueYachting.com </a> |\r\n  <a href=\"www.OceanBlueYachting.com\" target=\"_blank\"> www.OceanBlueYachting.com</a>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-toolbar {\r\n  width: 100% !important;\r\n}\r\n\r\n.toolbar-link {\r\n  /*margin-right: 50px !important;*/\r\n  font-size: 18px;\r\n  float: left;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n<a mat-icon-button [routerLink]=\"['']\"><mat-icon>home</mat-icon></a>\r\n  <ng-container *ngFor=\"let item of menu\">\r\n    <a *ngIf=\"item.path\" mat-button class=\"toolbar-link\" [routerLink]=\"item.path\">{{ item.name }}</a>\r\n    <ng-container *ngIf=\"item.children\">\r\n      <mat-menu #appMenu=\"matMenu\">\r\n        <a *ngFor=\"let subItem of item.children\" [routerLink]=\"subItem.path\" mat-menu-item>\r\n          {{ subItem.name }}\r\n        </a>\r\n      </mat-menu>\r\n      <a mat-button [matMenuTriggerFor]=\"appMenu\" class=\"toolbar-link\">\r\n        {{ item.name }}\r\n      </a>\r\n    </ng-container>\r\n  </ng-container>\r\n\r\n</mat-toolbar>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
        this.menu = [
            {
                name: 'Financial Management',
                path: '/financial-management'
            },
            {
                name: 'Crew Management',
                path: '/crew-management'
            },
            {
                name: 'Operational Management',
                children: [
                    { name: 'Refit', path: '/refit' },
                    { name: 'Technical Support', path: '/technical-support' },
                    { name: 'Fuel & Dockage', path: '/fuel-and-dockage' },
                    { name: 'Procurement & Yacht Services', path: '/procurement-and-services' },
                ]
            },
            {
                name: 'ISM & ISMS',
                path: 'ism-and-isms'
            },
            {
                name: 'Luxury Concierge Services & Lifestyle Management',
                path: '/luxury'
            },
            {
                name: 'Confidentiality',
                path: '/confidentiality'
            }
        ];
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/components/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/confidentiality/confidentiality.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/confidentiality/confidentiality.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card\">\r\n  <mat-card-header>\r\n    <!--<div mat-card-avatar class=\"example-header-image\"></div>-->\r\n    <mat-card-title>\r\n      <h1>Confidentiality</h1>\r\n    </mat-card-title>\r\n  </mat-card-header>\r\n  <!--<img mat-card-image src=\"http://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">-->\r\n  <mat-card-content>\r\n    <p>\r\n      We value your and your guests’ privacy. OBY will ensure that any information\r\n      about the beneficial owner, guests, business contacts, finances, activities or\r\n      conducts will be kept fully confidential.\r\n    </p>\r\n  </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/confidentiality/confidentiality.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfidentialityComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConfidentialityComponent = (function () {
    function ConfidentialityComponent() {
    }
    ConfidentialityComponent.prototype.ngOnInit = function () {
    };
    return ConfidentialityComponent;
}());
ConfidentialityComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-confidentiality',
        template: __webpack_require__("../../../../../src/app/pages/confidentiality/confidentiality.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/confidentiality/confidentiality.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ConfidentialityComponent);

//# sourceMappingURL=confidentiality.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/crew-management/crew-management.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card\">\r\n  <mat-card-header>\r\n    <!--<div mat-card-avatar class=\"example-header-image\"></div>-->\r\n    <mat-card-title>\r\n      <h1>Crew Management</h1>\r\n    </mat-card-title>\r\n  </mat-card-header>\r\n  <!--<img mat-card-image src=\"http://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">-->\r\n  <mat-card-content>\r\n    <p>\r\n      OBY will assist the owner in developing efficient payroll structures. We recruit\r\n      crew based on professionally developed crew contracts that minimize the owner’s\r\n      liability. Prior to organizing potential crew interviews with the owner, we will\r\n      verify the qualifications, check references and ensure that the candidates are\r\n      eligible for the yacht’s flag manning requirements. We will also take care of all the\r\n      travel and visa arrangements for the crew.\r\n    </p>\r\n    <p>\r\n      During our years as yacht management company we have learned that the best\r\n      way of retaining qualified crew is offering them relevant training. This also\r\n      enhances crew’s efficiency in emergency situations which ultimately benefits the\r\n      yacht.\r\n    </p>\r\n  </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/crew-management/crew-management.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/crew-management/crew-management.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrewManagementComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CrewManagementComponent = (function () {
    function CrewManagementComponent() {
    }
    CrewManagementComponent.prototype.ngOnInit = function () {
    };
    return CrewManagementComponent;
}());
CrewManagementComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-crew-management',
        template: __webpack_require__("../../../../../src/app/pages/crew-management/crew-management.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/crew-management/crew-management.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], CrewManagementComponent);

//# sourceMappingURL=crew-management.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/financial-management/financial-management.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/financial-management/financial-management.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 style=\"text-align: center\">Financial Management</h1>\n<mat-card class=\"example-card\">\n  <mat-card-header>\n    <!--<div mat-card-avatar class=\"example-header-image\"></div>-->\n    <mat-card-title>\n      <h1>Fuel & Dockage</h1>\n    </mat-card-title>\n  </mat-card-header>\n  <!--<img mat-card-image src=\"http://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">-->\n  <mat-card-content>\n\n    <p>\n      Ocean Blue Yachting (OBY) will develop an annual budget based on pre-\n      established guidelines and experience, taking into consideration both the owner’s\n      and captain’s anticipated needs for the year. The budgets will be reviewed\n      annually and submitted to the owner for approval.\n    </p>\n\n    <p>\n      The captain will report, on a monthly basis, cash and debit card expenditures,\n      which we will monitor for adherence to spending limitations and budget\n      considerations. In order to keep a positive balance, we will send the owner\n      monthly funding requests (based on approved budgets) for upcoming monthly\n      expenditures – crew salaries, operational expenses, etc. Should the owner have\n      questions about any expenses, we are prepared to discuss them in details.\n      OBY will manage all expenditures on behalf of the yacht, ensuring that all\n      transactions are consistent with good business practices.\n    </p>\n\n    <p>\n      Large unplanned expenses will be carefully reviewed with the captain and sent\n      for the owner’s approval before any works are initiated. OBY will ensure that the\n      captain has sufficient cash on hand, as well as other payment options.\n      Whenever possible, invoices will be directly submitted to OBY for payment. We\n      will discuss them with the captain, and if there are no discrepancies, the invoices\n      will be paid from the yacht’s operating account.\n    </p>\n\n    <mat-tab-group>\n\n      <mat-tab label=\"Banking\">\n        <p>\n          OBY will set up and manage bank accounts for the yacht in multiple currencies.\n          We will also arrange multicurrency yacht debit cards with online access for the\n          captain. All the charges on the card and monthly statements will be monitored for\n          adherence to the preapproved budgets.\n        </p>\n      </mat-tab>\n\n      <mat-tab label=\"Reporting\">\n        <p>\n        OBY will report to the owner on a monthly basis detailed expenditures broken\n        down into specific categories: vessel (engineering, interior, deck, vessel insurance,\n        dockage, and fuel), crew (salaries, crew insurance), guest expenses, etc. Actual\n        monthly reports will provide monthly and YTD budget variance analysis, as well\n        the cash flow. Reporting in this format will allow us and the owner to judge the\n        effectiveness of the budget, include projections for next year’s expenditures and\n        compare operating costs of different yachts if applicable.\n        </p>\n      </mat-tab>\n\n      <mat-tab label=\"Insurance\">\n\n        <p>\n          OBY will arrange the yacht insurance, advise the Owner how to minimize\n          insurance premiums and negotiate on behalf of the Owner favorable rates using\n          economies of scale. We will effectively communicate to the insurance company\n          the yacht’s schedule, any relevant changes in the crew and ensure that Captain is\n          informed about all the coverage limits.\n        </p>\n\n        <p>\n          OBY will also obtain crew health insurance in accordance with latest MLC\n          compliance.\n        </p>\n\n      </mat-tab>\n    </mat-tab-group>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "../../../../../src/app/pages/financial-management/financial-management.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinancialManagementComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FinancialManagementComponent = (function () {
    function FinancialManagementComponent() {
    }
    FinancialManagementComponent.prototype.ngOnInit = function () {
    };
    return FinancialManagementComponent;
}());
FinancialManagementComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-financial-management',
        template: __webpack_require__("../../../../../src/app/pages/financial-management/financial-management.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/financial-management/financial-management.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FinancialManagementComponent);

//# sourceMappingURL=financial-management.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/fuel-and-dockage/fuel-and-dockage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/fuel-and-dockage/fuel-and-dockage.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 style=\"text-align: center\">Operational Management</h1>\r\n<mat-card class=\"example-card\">\r\n  <mat-card-header>\r\n    <!--<div mat-card-avatar class=\"example-header-image\"></div>-->\r\n    <mat-card-title>\r\n      <h1>Fuel & Dockage</h1>\r\n    </mat-card-title>\r\n  </mat-card-header>\r\n  <!--<img mat-card-image src=\"http://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">-->\r\n  <mat-card-content>\r\n    <p>\r\n      Due to the scale of our services, we have long lasting relationships with fuel\r\n      suppliers in different parts of the world. This allows us to arrange all the\r\n      bunkering logistics and pass on all the savings to the yacht. Should the captain\r\n      need assistance with any marina reservations, we will organize all the bookings.\r\n    </p>\r\n  </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/fuel-and-dockage/fuel-and-dockage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuelAndDockageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FuelAndDockageComponent = (function () {
    function FuelAndDockageComponent() {
    }
    FuelAndDockageComponent.prototype.ngOnInit = function () {
    };
    return FuelAndDockageComponent;
}());
FuelAndDockageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-fuel-and-dockage',
        template: __webpack_require__("../../../../../src/app/pages/fuel-and-dockage/fuel-and-dockage.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/fuel-and-dockage/fuel-and-dockage.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FuelAndDockageComponent);

//# sourceMappingURL=fuel-and-dockage.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"background-div\">\r\n  <div class=\"floating-form\">\r\n\r\n    <h1>Ocean Blue Yachting</h1>\r\n    <h3>Making Yachting Fun Again</h3>\r\n    <form autocomplete=\"off\">\r\n\r\n      <h4>Contact Us</h4>\r\n      <div>\r\n        <p>Name <span [style.color]=\"'red'\">*</span></p>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"First\">\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Last\">\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div>\r\n        <p>Email  <span [style.color]=\"'red'\">*</span></p>\r\n        <mat-form-field style=\"width: 100%\">\r\n          <input matInput placeholder=\"Email\"/>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div>\r\n        <p>Comment  <span [style.color]=\"'red'\">*</span></p>\r\n        <mat-form-field style=\"width: 100%;\">\r\n          <textarea matInput></textarea>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div>\r\n        <button type=\"submit\" mat-raised-button color=\"primary\" style=\"width: 100%;\">Send</button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".background-div {\n  width: 100%;\n  height: 1024px;\n  background: url(" + __webpack_require__("../../../../../src/assets/main.jpg") + ");\n  color: white;\n  font-size: 20px;\n  position: relative; }\n  .background-div .floating-form {\n    position: absolute;\n    top: 15%;\n    left: 10%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/pages/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/home/home.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/ism-isps/ism-isps.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card\">\r\n  <mat-card-header>\r\n    <!--<div mat-card-avatar class=\"example-header-image\"></div>-->\r\n    <mat-card-title>\r\n      <h1>ISM / ISPS</h1>\r\n    </mat-card-title>\r\n  </mat-card-header>\r\n  <!--<img mat-card-image src=\"http://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">-->\r\n  <mat-card-content>\r\n    <p>\r\n      The ISM is a documented safety management system, which formalizes\r\n      procedures that a well-run yacht would adopt. The Code promotes a safety\r\n      culture and greatly assists the yacht’s crew to maintain and constantly improve\r\n      standards of operation. Compliance to this Code is mandatory for commercial\r\n      vessels over 500GT. The advantage of using a documented system is that it\r\n      provides records and reports, which are audited by third parties, and\r\n      demonstrates that the vessel is run correctly and to a high standard.\r\n      ISPS code applies to port facilities serving ships on international voyages, to all\r\n      passenger ships on international voyages, and to all other ships over 500 GT on\r\n      international voyages. Therefore, large yachts over 500 GT will need to comply if\r\n      they operate commercially.\r\n    </p>\r\n    <p>\r\n      Should the owner decide to implement full ISM/ISPS with OBY, the service will\r\n      be provided at a separate rate.\r\n    </p>\r\n    <p>\r\n      Even if the yacht is not subject to ISM, we will still operate within the parameters\r\n      of ISM to ensure the highest standard of safety and performance.\r\n    </p>\r\n  </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/ism-isps/ism-isps.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/ism-isps/ism-isps.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IsmIspsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IsmIspsComponent = (function () {
    function IsmIspsComponent() {
    }
    IsmIspsComponent.prototype.ngOnInit = function () {
    };
    return IsmIspsComponent;
}());
IsmIspsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-ism-isps',
        template: __webpack_require__("../../../../../src/app/pages/ism-isps/ism-isps.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/ism-isps/ism-isps.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], IsmIspsComponent);

//# sourceMappingURL=ism-isps.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/luxury/luxury.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/luxury/luxury.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card\">\r\n  <mat-card-header>\r\n    <!--<div mat-card-avatar class=\"example-header-image\"></div>-->\r\n    <mat-card-title>\r\n      <h1>Concierge Services & Luxury Lifestyle Management</h1>\r\n    </mat-card-title>\r\n  </mat-card-header>\r\n  <!--<img mat-card-image src=\"http://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">-->\r\n  <mat-card-content>\r\n    <p>\r\n      We have managed over half a dozen ultra high net worth clients. From managing\r\n      an aircraft, private jet and helicopter charters, buying art or collectible items, fine\r\n      wine advisory, organizing exclusive trips, procurement of culinary experiences to\r\n      managing homes, clients can expect the highest level of personalized, responsive,\r\n      confidential and professional service.\r\n    </p>\r\n    <p>\r\n      Our private aviation affiliate JetFlite International (JFI) is one of the most\r\n      experienced and trusted private aviation services companies in the world. Over\r\n      the past two decades, JFI has operated thousands of flights to practically every\r\n      part of the globe. Whether you need on-demand jet charter or aircraft\r\n      management services, JFI delivers unsurpassed service at all times.\r\n    </p>\r\n    <p>\r\n      We have helped both new and established collectors build significant art\r\n      collections and manage all aspects of their collection administration. We bring a\r\n      financial perspective to our clients' collecting objectives. We understand the\r\n      market cycles and economic realities that create buying and selling opportunities\r\n      around the world and are well positioned to take advantage of them.\r\n    </p>\r\n    <p>\r\n      OBY organizes private trips for UHN individuals across the world. We pride\r\n      ourselves in the ability to satisfy any needs and wishes and create unique\r\n      unforgettable memories. We will coordinate all your accommodations (hotels,\r\n      private villas), cars; arrange five-star dining experiences with private chefs.\r\n    </p>\r\n  </mat-card-content>\r\n</mat-card>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/luxury/luxury.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LuxuryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LuxuryComponent = (function () {
    function LuxuryComponent() {
    }
    LuxuryComponent.prototype.ngOnInit = function () {
    };
    return LuxuryComponent;
}());
LuxuryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-luxury',
        template: __webpack_require__("../../../../../src/app/pages/luxury/luxury.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/luxury/luxury.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LuxuryComponent);

//# sourceMappingURL=luxury.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/procurement/procurement.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/procurement/procurement.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 style=\"text-align: center\">Operational Management</h1>\r\n<mat-card class=\"example-card\">\r\n  <mat-card-header>\r\n    <!--<div mat-card-avatar class=\"example-header-image\"></div>-->\r\n    <mat-card-title>\r\n      <h1>Procurement & Other Yacht Services</h1>\r\n    </mat-card-title>\r\n  </mat-card-header>\r\n  <!--<img mat-card-image src=\"http://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">-->\r\n  <mat-card-content>\r\n    <p>\r\n      OBY will work closely with the Captain and the crew to obtain necessary spares\r\n      and parts. We <b>DO NOT CHARGE</b> any hidden fees! All the discounts obtained\r\n      from different vendors (satellite providers, engineering, deck and interior\r\n      suppliers, etc.) are passed directly to the yacht. OBY will keep all the yacht\r\n      registration and other documents up to date. We will ensure that all the class and\r\n      flag state surveys are up to date and organize all the necessary inspections and\r\n      surveys.\r\n    </p>\r\n  </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/procurement/procurement.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProcurementComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProcurementComponent = (function () {
    function ProcurementComponent() {
    }
    ProcurementComponent.prototype.ngOnInit = function () {
    };
    return ProcurementComponent;
}());
ProcurementComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-procurement',
        template: __webpack_require__("../../../../../src/app/pages/procurement/procurement.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/procurement/procurement.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ProcurementComponent);

//# sourceMappingURL=procurement.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/refit/refit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/refit/refit.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 style=\"text-align: center\">Operational Management</h1>\r\n<mat-card class=\"example-card\">\r\n  <mat-card-header>\r\n    <!--<div mat-card-avatar class=\"example-header-image\"></div>-->\r\n    <mat-card-title>\r\n      <h1>Refit</h1>\r\n    </mat-card-title>\r\n  </mat-card-header>\r\n  <!--<img mat-card-image src=\"http://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">-->\r\n  <mat-card-content>\r\n    <p>\r\n      OBY will work closely with the captain and the crew to determine necessary\r\n      annual repairs. These works will be organized in such a manner so that not to\r\n      affect the owner’s time onboard or the charters. Recognizing many owners’\r\n      complaints about uncontrollable shipyard periods, we will make this process as\r\n      smooth as possible: from the very first stage of submitting a detailed estimate to\r\n      the owner, monitoring the spending and work progress on a weekly basis by\r\n      qualified project managers, informing the owner and seeking approval for any\r\n      unexpected expenses, to providing a detailed report about the performed works,\r\n      etc. We will leverage our existing relationships with the shipyards and\r\n      subcontractors around the world to ensure that all the possible savings are passed\r\n      to the yachts.\r\n    </p>\r\n  </mat-card-content>\r\n</mat-card>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/refit/refit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RefitComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RefitComponent = (function () {
    function RefitComponent() {
    }
    RefitComponent.prototype.ngOnInit = function () {
    };
    return RefitComponent;
}());
RefitComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-refit',
        template: __webpack_require__("../../../../../src/app/pages/refit/refit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/refit/refit.component.css")]
    }),
    __metadata("design:paramtypes", [])
], RefitComponent);

//# sourceMappingURL=refit.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/technical-support/technical-support.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/technical-support/technical-support.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 style=\"text-align: center\">Operational Management</h1>\r\n<mat-card class=\"example-card\">\r\n  <mat-card-header>\r\n    <!--<div mat-card-avatar class=\"example-header-image\"></div>-->\r\n    <mat-card-title>\r\n      <h1>Technical Support</h1>\r\n    </mat-card-title>\r\n  </mat-card-header>\r\n  <!--<img mat-card-image src=\"http://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">-->\r\n  <mat-card-content>\r\n    <p>\r\n      Our highly qualified team will assist the captain and the crew with any arising\r\n      technical questions. If there are any problems beyond our expertise, we will\r\n      ensure that we find the right consultants and communicate the solutions to the\r\n      captain.\r\n    </p>\r\n  </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/technical-support/technical-support.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TechnicalSupportComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TechnicalSupportComponent = (function () {
    function TechnicalSupportComponent() {
    }
    TechnicalSupportComponent.prototype.ngOnInit = function () {
    };
    return TechnicalSupportComponent;
}());
TechnicalSupportComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-technical-support',
        template: __webpack_require__("../../../../../src/app/pages/technical-support/technical-support.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/technical-support/technical-support.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TechnicalSupportComponent);

//# sourceMappingURL=technical-support.component.js.map

/***/ }),

/***/ "../../../../../src/assets/main.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "main.32d531ff66b04b6a0550.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map