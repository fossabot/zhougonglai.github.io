webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routedComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__main_main_component__["a" /* MainComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
        ]
    })
], AppRoutingModule);

var routedComponents = [
    __WEBPACK_IMPORTED_MODULE_2__main_main_component__["a" /* MainComponent */]
];
//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".button {\n  color: white;\n  background-image: linear-gradient(to right, #00cfc6, #00a8ff 99%);\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__covalent_highlight__ = __webpack_require__("../../../../@covalent/highlight/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__covalent_markdown__ = __webpack_require__("../../../../@covalent/markdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core__ = __webpack_require__("../../../../../src/app/core/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__main_main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__main_main_component__["a" /* MainComponent */],
            __WEBPACK_IMPORTED_MODULE_9__app_routing_module__["b" /* routedComponents */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_5__core__["a" /* CoreModule */], __WEBPACK_IMPORTED_MODULE_6__shared__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_9__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__covalent_highlight__["a" /* CovalentHighlightModule */],
            __WEBPACK_IMPORTED_MODULE_4__covalent_markdown__["a" /* CovalentMarkdownModule */],
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var CoreModule = (function () {
    function CoreModule(parentModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }
    return CoreModule;
}());
CoreModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: []
    }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Optional */])()), __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* SkipSelf */])()),
    __metadata("design:paramtypes", [CoreModule])
], CoreModule);

//# sourceMappingURL=core.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_module__ = __webpack_require__("../../../../../src/app/core/core.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__core_module__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<app-main-header></app-main-header>\n<div class=\"main-content\" appSwitchPages [currentIndex]=\"pageIndex\">\n  <div class=\"page\">\n    <div class=\"content-wrapper\">\n      <div class=\"box\">\n        <h3 class=\"box-title\">我的最佳理财云笔记工具</h3>\n        <form class=\"form\">\n          <div class=\"form-control\">\n            <input type=\"text\">\n          </div>\n          <button mat-button>加入我们</button>\n        </form>\n      </div>\n      <button mat-icon-button class=\"next-page\" (click)=\"nextPage()\">\n        <mat-icon aria-label=\"下一页\" class=\"white\">keyboard_arrow_down</mat-icon>\n      </button>\n    </div>\n\n    <div class=\"video-wrapper\">\n      <video src=\"../../assets/source/cat.mp4\" autoPlay loop muted></video>\n    </div>\n  </div>\n  <div class=\"page\">\n    page 1\n  </div>\n\n  <div class=\"page\">\n    page 2\n  </div>\n  <div class=\"page\">\n    page 3\n  </div>\n  <div class=\"page\">\n    page 4\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/main.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host .video-wrapper {\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  overflow: hidden; }\n  :host .video-wrapper video {\n    min-width: 100%;\n    min-height: 100%; }\n\n:host .main-content {\n  position: relative;\n  height: 100%;\n  width: 100%;\n  overflow-y: auto; }\n  :host .main-content .page {\n    box-sizing: border-box;\n    height: 100%;\n    width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n    :host .main-content .page .next-page {\n      position: absolute;\n      bottom: 75px; }\n    :host .main-content .page .content-wrapper {\n      background-color: #2196f3;\n      opacity: 0.85;\n      z-index: 1;\n      height: 100vh;\n      width: 100vw;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column; }\n  :host .main-content .box {\n    height: 200px;\n    width: 500px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    color: #fff;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    margin-top: -200px; }\n    :host .main-content .box .box-title {\n      letter-spacing: 8px; }\n    :host .main-content .box .form {\n      background-color: rgba(255, 255, 255, 0.25);\n      border-radius: 3px;\n      transition: background 100ms ease-in, border 100ms ease-out;\n      border: 1px solid transparent;\n      min-width: 360px;\n      max-width: 720px;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex; }\n      :host .main-content .box .form .form-control {\n        -webkit-box-flex: 1;\n            -ms-flex-positive: 1;\n                flex-grow: 1;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        padding-left: 8px;\n        height: 48px; }\n        :host .main-content .box .form .form-control input {\n          -webkit-box-flex: 1;\n              -ms-flex: 1;\n                  flex: 1;\n          border: transparent;\n          background: transparent;\n          caret-color: #2196f3;\n          color: #fff;\n          outline: none;\n          font-size: 18px;\n          letter-spacing: 4px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainComponent = (function () {
    function MainComponent() {
        this.pageIndex = 0;
    }
    MainComponent.prototype.nextPage = function () {
        this.pageIndex = 1;
    };
    MainComponent.prototype.ngOnInit = function () {
    };
    return MainComponent;
}());
MainComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-main',
        template: __webpack_require__("../../../../../src/app/main/main.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/main.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], MainComponent);

//# sourceMappingURL=main.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/Shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__ = __webpack_require__("../../../flex-layout/@angular/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__covalent_core__ = __webpack_require__("../../../../@covalent/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__main_header__ = __webpack_require__("../../../../../src/app/shared/main-header/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__switch_pages__ = __webpack_require__("../../../../../src/app/shared/switch-pages/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var FLEX_LAYOUT_MODULES = [
    __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__["a" /* FlexLayoutModule */],
];
var ANGULAR_MODULES = [
    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* ReactiveFormsModule */],
];
var COVALENT_MODULES = [
    __WEBPACK_IMPORTED_MODULE_4__covalent_core__["b" /* CovalentDataTableModule */], __WEBPACK_IMPORTED_MODULE_4__covalent_core__["f" /* CovalentMediaModule */], __WEBPACK_IMPORTED_MODULE_4__covalent_core__["e" /* CovalentLoadingModule */],
    __WEBPACK_IMPORTED_MODULE_4__covalent_core__["h" /* CovalentNotificationsModule */], __WEBPACK_IMPORTED_MODULE_4__covalent_core__["d" /* CovalentLayoutModule */], __WEBPACK_IMPORTED_MODULE_4__covalent_core__["g" /* CovalentMenuModule */],
    __WEBPACK_IMPORTED_MODULE_4__covalent_core__["i" /* CovalentPagingModule */], __WEBPACK_IMPORTED_MODULE_4__covalent_core__["j" /* CovalentSearchModule */], __WEBPACK_IMPORTED_MODULE_4__covalent_core__["k" /* CovalentStepsModule */],
    __WEBPACK_IMPORTED_MODULE_4__covalent_core__["a" /* CovalentCommonModule */], __WEBPACK_IMPORTED_MODULE_4__covalent_core__["c" /* CovalentDialogsModule */],
];
var MATERIAL_MODULES = [
    __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* CompatibilityModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["y" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["m" /* MatIconModule */]
];
var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            ANGULAR_MODULES,
            FLEX_LAYOUT_MODULES,
            COVALENT_MODULES,
            MATERIAL_MODULES,
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__main_header__["a" /* MainHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_7__switch_pages__["a" /* SwitchPagesDirective */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            ANGULAR_MODULES,
            FLEX_LAYOUT_MODULES,
            COVALENT_MODULES,
            MATERIAL_MODULES,
            __WEBPACK_IMPORTED_MODULE_6__main_header__["a" /* MainHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_7__switch_pages__["a" /* SwitchPagesDirective */]
        ]
    })
], SharedModule);

//# sourceMappingURL=Shared.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Shared_module__ = __webpack_require__("../../../../../src/app/shared/Shared.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Shared_module__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/main-header/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_header_component__ = __webpack_require__("../../../../../src/app/shared/main-header/main-header.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__main_header_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/main-header/main-header.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"row\">\n  <div class=\"title\">\n    <img src=\"../../../assets/img/angular-logo.png\" id=\"logo\">\n    <span class=\"brad\">梅林笔记</span>\n  </div>\n  <div class=\"fill\">\n  </div>\n\n  <ul class=\"nav-tools\">\n    <li class=\"nav-link\">\n      <button mat-button>登录</button>\n    </li>\n  </ul>\n</header>\n"

/***/ }),

/***/ "../../../../../src/app/shared/main-header/main-header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  height: 64px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  position: fixed;\n  background: transparent;\n  top: 0;\n  width: 100%;\n  z-index: 100;\n  padding: 0 50px;\n  box-sizing: border-box; }\n  :host header {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n    :host header #logo {\n      width: 42px;\n      height: 42px;\n      padding: 11px; }\n    :host header .title {\n      display: -webkit-inline-box;\n      display: -ms-inline-flexbox;\n      display: inline-flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n      :host header .title .brad {\n        color: #fff; }\n    :host header .nav-tools .nav-link {\n      color: #fff; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/main-header/main-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainHeaderComponent = (function () {
    function MainHeaderComponent() {
    }
    MainHeaderComponent.prototype.ngOnInit = function () {
    };
    return MainHeaderComponent;
}());
MainHeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-main-header',
        template: __webpack_require__("../../../../../src/app/shared/main-header/main-header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/main-header/main-header.component.scss")],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [])
], MainHeaderComponent);

//# sourceMappingURL=main-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/switch-pages/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__switch_pages_directive__ = __webpack_require__("../../../../../src/app/shared/switch-pages/switch-pages.directive.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__switch_pages_directive__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/switch-pages/switch-pages.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwitchPagesDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_gsap__ = __webpack_require__("../../../../gsap/TweenMax.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_gsap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_gsap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SwitchPagesDirective = (function () {
    function SwitchPagesDirective(el) {
        this.el = el;
        // 当前 滚轴的Y轴位置
        this.scrollTop = 0;
        // 当前 page下标
        this.pageIndex = 0;
        // 滚动中 ?
        this.running = false;
        // page下标变更通知
        this.pageIndexChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    Object.defineProperty(SwitchPagesDirective.prototype, "currentIndex", {
        /**
         * 滚动到 指定页
         * @param {number} index 目标页下标
         */
        set: function (index) {
            this.scrollTo(index);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 滚动事件 {阀值} +- 25
     * @param {Event} $event
     */
    SwitchPagesDirective.prototype.onScroll = function ($event) {
        if (this.running) {
            return;
        }
        if (this.el.nativeElement.scrollTop - this.scrollTop > 25) {
            this.scrollTer();
        }
        else if (this.scrollTop - this.el.nativeElement.scrollTop > 25) {
            this.scrollTer(false);
        }
    };
    /**
     * 滚动调节器
     * @param {boolean} direction 方向 ? true 下 : false 上
     * @param {number} size 翻页的量级
     */
    SwitchPagesDirective.prototype.scrollTer = function (direction, size) {
        var _this = this;
        if (direction === void 0) { direction = true; }
        if (size === void 0) { size = 1; }
        this.running = true;
        this.scrollProcess(direction, size).then(function () {
            _this.pageIndex = direction ? (_this.pageIndex + size) : (_this.pageIndex - size);
            _this.pageIndexChange.emit(_this.pageIndex);
            _this.scrollTop = _this.el.nativeElement.scrollTop;
            _this.running = false;
        });
    };
    /**
     * 翻页程序
     * @param {boolean} direction
     * @param {number} size
     * @returns {Promise<any>}
     */
    SwitchPagesDirective.prototype.scrollProcess = function (direction, size) {
        var _this = this;
        if (direction === void 0) { direction = true; }
        if (size === void 0) { size = 1; }
        return new Promise(function (resolve, reject) {
            var scrollSize = direction ?
                _this.scrollTop + size * _this.el.nativeElement.clientHeight :
                _this.scrollTop - size * _this.el.nativeElement.clientHeight;
            __WEBPACK_IMPORTED_MODULE_1_gsap__["TweenMax"].to(_this.el.nativeElement, 1, {
                scrollTop: scrollSize,
                ease: __WEBPACK_IMPORTED_MODULE_1_gsap__["Power2"].easeInOut,
                onComplete: function () {
                    resolve();
                }
            });
        });
    };
    /**
     * 指示器滚动
     * @param {number} index
     */
    SwitchPagesDirective.prototype.scrollTo = function (index) {
        (index - this.pageIndex) > 0 ? this.scrollTer(true, index - this.pageIndex) : this.scrollTer(false, this.pageIndex - index);
    };
    return SwitchPagesDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], SwitchPagesDirective.prototype, "pageIndexChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], SwitchPagesDirective.prototype, "currentIndex", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('scroll', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SwitchPagesDirective.prototype, "onScroll", null);
SwitchPagesDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({
        selector: '[appSwitchPages]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object])
], SwitchPagesDirective);

var _a;
//# sourceMappingURL=switch-pages.directive.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vendor__ = __webpack_require__("../../../../../src/vendor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_24" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../src/vendor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hammerjs__);

//# sourceMappingURL=vendor.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map