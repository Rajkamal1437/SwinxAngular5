(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./layouts/admin-layout/admin-layout.module": [
		"./src/app/layouts/admin-layout/admin-layout.module.ts",
		"layouts-admin-layout-admin-layout-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-tooltip {\r\n  font-size: 20px;\r\n    color: #fff;\r\n    background: #000;\r\n    border-radius: 2px;\r\n    margin: 14px;\r\n    max-width: 250px;\r\n    padding-left: 8px;\r\n    padding-right: 8px;\r\n}\r\n\r\n::ng-shadow .mat-tooltip {\r\n  font-size: 16px;\r\n    color: #3f51b5;\r\n    border-radius: 2px;\r\n    margin: 14px;\r\n    max-width: 200px;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n   }\r\n\r\n.arrow_sec{\r\n\tposition:absolute;\r\n\ttop:55%;\r\n\tleft:55%;\r\n    border:  1.5px solid rgb(45,51,137);\r\n    border-top: 15px solid  rgb(45,51,137);\r\n\tmargin:-16px 0 0 -1px;\r\n\tbackground:#666;\r\n\t-webkit-animation:rotation 1s linear 0s infinite;\r\n\tanimation:rotation 1s linear 0s infinite;\r\n\t-webkit-transform-origin: center bottom;\r\n\ttransform-origin: center bottom;\r\n}\r\n\r\n.arrow_min{\r\n\tposition:absolute;\r\n\ttop:55%;\r\n\tleft:55%;\r\n    border: 2 solid rgb(45,51,137);\r\n    border-top: 11px solid rgb(45,51,137);\r\n\tmargin:-12px 0 0 -1px;\r\n\tbackground:#666;\r\n\t-webkit-animation:rotation 1s linear 0s infinite;\r\n\tanimation:rotation 1s linear 0s infinite;\r\n\t-webkit-transform-origin: center bottom;\r\n\ttransform-origin: center bottom;\r\n}\r\n\r\n@-webkit-keyframes rotation {\r\n\t0%{\r\n \t\t-webkit-transform: rotate(0deg);\r\n\t}\r\n \t100% {\r\n \t\t-webkit-transform: rotate(360deg);\r\n\t}\r\n}\r\n\r\n@keyframes rotation {\r\n\t0%{\r\n\t\t-webkit-transform: rotate(0deg);\r\n\t\t        transform: rotate(0deg);\r\n\t}\r\n\t100% {\r\n\t\t-webkit-transform: rotate(360deg);\r\n\t\t        transform: rotate(360deg);\r\n\t}\r\n}\r\n\r\n/* end vars */\r\n\r\n.preloader {\r\n  position: absolute;\r\n  width: 4em;\r\n  height: 4em;\r\n  border: transparent;\r\n  border-radius: 100%;\r\n}\r\n\r\n.preloader:before,\r\n.preloader:after {\r\n  content: '';\r\n  position: absolute;\r\n  top: 55%;\r\n  left: 55%;\r\n  margin: -.2rem 0 0 -.2rem;\r\n  border-bottom: .25rem solid rgb(45,51,137);\r\n  border-radius: .3rem;\r\n  -webkit-transform-origin: .2rem center;\r\n}\r\n\r\n.preloader:before { /* hour hand */\r\n  width: 25%;\r\n  -webkit-animation: hour 5s linear infinite;\r\n}\r\n\r\n.preloader:after { /* minute hand */\r\n  /* width: 30%; */\r\n  background-color: rgb(45,51,137);\r\n  -webkit-animation: minute .5s/4 linear infinite;\r\n}\r\n\r\n@-webkit-keyframes hour {\r\n  0%{\r\n\t\t-webkit-transform: rotate(0deg);\r\n\t\t        transform: rotate(0deg);\r\n\t}\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n@-webkit-keyframes minute {\r\n  0%{\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n/* for demo purposes only — not required */\r\n\r\n/* for demo purposes only — not required */\r\n\r\n.preloader {\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  margin: auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"preloader\"  *ngIf=\"loading\">\n  <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Layer_1\" x=\"0px\" y=\"0px\" width=\"65px\" height=\"62px\" viewBox=\"0 0 45 42\" enable-background=\"new 0 0 45 42\" xml:space=\"preserve\">  <image id=\"image0\" width=\"45\" height=\"42\" x=\"0\" y=\"0\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAqCAMAAAAQwSIQAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABIFBMVEUtM4ktM4ktM4ktM4kt M4ktM4ktM4ktM4ktM4ktM4ktM4ktM4ktM4ktM4ktM4ktM4ktM4ktM4ktM4ktM4ktM4ktM4ktM4kt M4ktM4ktM4ktM4ktM4ktM4ktM4ktM4ktM4ktM4ktM4ktM4ktM4ktM4ktM4ktM4ktM4ktM4ktM4kt M4ktM4ktM4ktM4ktM4ktM4ktM4ktM4ktM4ktM4ktM4ktM4ktM4ktM4ktM4ktM4ktM4ktM4ktM4kt M4ktM4ktM4ktM4ktM4ktM4ktM4ktM4ktM4ktM4ktM4ktM4ktM4ktM4ktM4ktM4ktM4ktM4ktM4kt M4ktM4ktM4ktM4ktM4ktM4ktM4ktM4ktM4ktM4ktM4ktM4ktM4ktM4ktM4n///+mbKCEAAAAXnRS TlMAHlSWh1EbZu32ug8JMwN182wkSDwwwOoGn64/fhV7xsmc5zm024pLNiESq9gtzE5a0sPw/Ayl z4R44Wlgmb2xgRAHYwECBJALBQgK3if5QqgqRdUYuBcfQKrE5HJdspiNagAAAAFiS0dEX3PRUS0A AAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfiBBAAJyozv5rFAAACU0lEQVQ4y42V60LaQBCF twiGSxLlKhACaqVQrooElBqLGqy1xdrW3u2+/2N0ZneBhSyh8yeTyZfdMyfDQsjaeBHaCke2yf+F FqUQsbiW2ETqhmbu7FIeu8n1YCqUzmRzdC9PCnQWxbyatUps4xylcLHLFYHvq+RbBwYXcshoiJdH HK/aq6z5KmyKtKbVZ2m6ylfXl+HXRyGluAaX01wqGq32mr4THYZ3pdJxtLbWJvsE6c5ci9Wj5QD7 U6dA9+vizmnRnhlAk2NcfMBtckqUZklgoPRYmqX1Kh0Gw6SGi5+xdEDp+QbaHAHdw0yPUdreQJMw SkFX3kC/2UbQXDoX7iVKsWCTt8z8cZCOQz4tF4S0mfe0Ij++ul7Gm5wuEZKBqe+57k1j8dCb3Hqe TNtGFz9QAei5N7OYAO+tiCFoyoDT7+T63XsfCoGD63K6J5XvP0xU9EfuxBQuLUmGuVAhvWU+AHYD CdjTn7cIqKR5kdXRk0+QPEqjjqRKBzkH6NSBJAlJXMiAlU0lPZw5t42bfGbwLQicqOAvyKRYesmN J+a9pzCaFeIL47qiAxOF+Jb1TDHes6nGN0eJa9UnJATUJb5ij0+iYKGZ376r7bjazhfFSIkY423h x52qQfLzFz4dspOT/dZ1dh791lWwzsY1ZkilLJvfk6kfzvKTaunUs6Y4NfRh3FhmG1t9Bu+srPG0 z8qxA2lLyxX/D5pvS+dRHO0tV8MoF/6Iwl5E1U9tRFVRtIkynLOoj61kyNpwkjmJ7MefDRIcduTZ zXU6nab713ci/QMLkKcQ8dU5fwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wNC0xNlQwMDozOTo0 Mi0wNzowMMPJXzYAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDQtMTZUMDA6Mzk6NDItMDc6MDCy lOeKAAAAAElFTkSuQmCC\"/>\n  </svg>\n  <div id=\"preloader\">\n  \t\t<div class=\"arrow_sec\"></div>\n  \t\t<div class=\"arrow_min\"></div>\n  </div>\n  <p style=\"font-size:large; font-weight:700; color: rgb(45,51,137);\"> SWINX </p>\n</div>\n\n<div *ngIf=\"!loading\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        var _this = this;
        this.router = router;
        this.loading = true;
        router.events.subscribe(function (event) {
            _this.navigationInterceptor(event);
        });
    }
    // Shows and hides the loading spinner during RouterEvent changes
    AppComponent.prototype.navigationInterceptor = function (event) {
        var _this = this;
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
            this.loading = true;
        }
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
            setTimeout(function () {
                _this.loading = false;
            }, 500);
        }
        // Set loading state to false in both of the below events to hide the spinner in case a request fails
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationCancel"]) {
            setTimeout(function () {
                _this.loading = false;
            }, 500);
        }
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationError"]) {
            setTimeout(function () {
                _this.loading = false;
            }, 1000);
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "./src/app/layouts/admin-layout/admin-layout.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_8__["AgmCoreModule"].forRoot({
                    apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
                })
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_9__["AdminLayoutComponent"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "./src/app/layouts/admin-layout/admin-layout.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        redirectTo: 'toapprove',
        pathMatch: 'full',
    }, {
        path: '',
        component: _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_4__["AdminLayoutComponent"],
        children: [
            {
                path: '',
                loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
            }
        ]
    }
    // { path: 'dashboard',      component: DashboardComponent },
    // { path: 'user-profile',   component: UserProfileComponent },
    // { path: 'table-list',     component: TableListComponent },
    // { path: 'typography',     component: TypographyComponent },
    // { path: 'icons',          component: IconsComponent },
    // { path: 'maps',           component: MapsComponent },
    // { path: 'notifications',  component: NotificationsComponent },
    // { path: 'upgrade',        component: UpgradeComponent },
    // { path: '',               redirectTo: 'dashboard', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
            ],
            entryComponents: [_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["certificatelistpopup"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["documentlistpopup"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["mergeinvoicepopup"]],
            declarations: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["certificatelistpopup"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["documentlistpopup"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["mergeinvoicepopup"]
            ],
            exports: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer \">\n    <div class=\"container-fluid\">\n        <nav class=\"pull-left\">\n            <ul>\n                <li>\n                    <a href=\"#\">\n                      SWINX\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#\">\n                        Licenses\n                    </a>\n                </li>\n            </ul>\n        </nav>\n        <div class=\"copyright pull-right\">\n          Copy Rights  &copy;\n            {{test | date: 'yyyy'}},\n            <a href=\"#\" target=\"_blank\"> OFS</a>\n        </div>\n    </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar.navbar-transparent {\r\n    background-color: #2e348a !important;\r\n    box-shadow: none;\r\n    color: #fff;\r\n    padding-top: 25px;\r\n}\r\n.icon-bar{\r\n  color: #fff;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-transparent  navbar-absolute fixed-top\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-wrapper\">\n          <a class=\"navbar-brand\" href=\"#\">{{this.router.url}}</a>\n        </div>\n        <button mat-raised-button class=\"navbar-toggler\" type=\"button\" (click)=\"sidebarToggle()\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse justify-content-end\" id=\"navigation\">\n            <ul class=\"navbar-nav\">\n                <li class=\"nav-item dropdown\">\n                    <a class=\"nav-link\" href=\"http://example.com\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                        <i class=\"material-icons\">notifications</i>\n                        <span class=\"notification\">3</span>\n                        <p>\n                            <span class=\"d-lg-none d-md-block\">Some Actions</span>\n                        </p>\n                    </a>\n                    <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\n                        <a class=\"dropdown-item\" href=\"#\">5 Invoices To Approve</a>\n                        <a class=\"dropdown-item\" href=\"#\">2 Invalid Invoices in Imported Invoices</a>\n                        <a class=\"dropdown-item\" href=\"#\">1 New User Added</a>\n\n                    </div>\n                </li>\n\n                <li class=\"nav-item\">\n                  Perarronson@swinx.se\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\">\n                        <i class=\"material-icons\">person</i>\n                        <p>\n                            <span class=\"d-lg-none d-md-block\">Account</span>\n                        </p>\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>\n\n<!--\n\n<nav class=\"navbar navbar-transparent navbar-absolute\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <button mat-raised-button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" (click)=\"sidebarToggle()\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" href=\"#\">{{getTitle()}}</a>\n        </div>\n        <div class=\"collapse navbar-collapse\">\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li>\n                    <a href=\"#pablo\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                        <i class=\"material-icons\">dashboard</i>\n                        <p class=\"hidden-lg hidden-md\">Dashboard</p>\n                    </a>\n                </li>\n                <li class=\"dropdown\">\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                        <i class=\"material-icons\">notifications</i>\n                        <span class=\"notification\">5</span>\n                        <p class=\"hidden-lg hidden-md\">Notifications</p>\n                    </a>\n                    <ul class=\"dropdown-menu\">\n                        <li><a href=\"#\">Mike John responded to your email</a></li>\n                        <li><a href=\"#\">You have 5 new tasks</a></li>\n                        <li><a href=\"#\">You're now friend with Andrew</a></li>\n                        <li><a href=\"#\">Another Notification</a></li>\n                        <li><a href=\"#\">Another One</a></li>\n                    </ul>\n                </li>\n                <li>\n                    <a href=\"#pablo\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                       <i class=\"material-icons\">person</i>\n                       <p class=\"hidden-lg hidden-md\">Profile</p>\n                    </a>\n                </li>\n            </ul>\n\n            <form class=\"navbar-form navbar-right\" role=\"search\">\n                <div class=\"form-group form-black is-empty\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n                    <span class=\"material-input\"></span>\n                </div>\n                <button mat-raised-button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\n                    <i class=\"material-icons\">search</i><div class=\"ripple-container\"></div>\n                </button>\n            </form>\n        </div>\n    </div>\n</nav> -->\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, element, router) {
        this.element = element;
        this.router = router;
        this.mobile_menu_visible = 0;
        this.location = location;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listTitles = _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        this.router.events.subscribe(function (event) {
            _this.sidebarClose();
            var $layer = document.getElementsByClassName('close-layer')[0];
            if ($layer) {
                $layer.remove();
                _this.mobile_menu_visible = 0;
            }
        });
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        var $toggle = document.getElementsByClassName('navbar-toggler')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
        var body = document.getElementsByTagName('body')[0];
        if (this.mobile_menu_visible == 1) {
            // $('html').removeClass('nav-open');
            body.classList.remove('nav-open');
            if ($layer) {
                $layer.remove();
            }
            setTimeout(function () {
                $toggle.classList.remove('toggled');
            }, 400);
            this.mobile_menu_visible = 0;
        }
        else {
            setTimeout(function () {
                $toggle.classList.add('toggled');
            }, 430);
            var $layer = document.createElement('div');
            $layer.setAttribute('class', 'close-layer');
            if (body.querySelectorAll('.main-panel')) {
                document.getElementsByClassName('main-panel')[0].appendChild($layer);
            }
            else if (body.classList.contains('off-canvas-sidebar')) {
                document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
            }
            setTimeout(function () {
                $layer.classList.add('visible');
            }, 100);
            $layer.onclick = function () {
                body.classList.remove('nav-open');
                this.mobile_menu_visible = 0;
                $layer.classList.remove('visible');
                setTimeout(function () {
                    $layer.remove();
                    $toggle.classList.remove('toggled');
                }, 400);
            }.bind(this);
            body.classList.add('nav-open');
            this.mobile_menu_visible = 1;
        }
    };
    ;
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(2);
        }
        titlee = titlee.split('/').pop();
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Inbox - Invoice List';
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar/certificatelistpopup.html":
/*!**************************************************************!*\
  !*** ./src/app/components/sidebar/certificatelistpopup.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\r\n\r\n</style>\r\n\r\n\r\n<div class=\"popupdiv\">\r\n <h1 mat-dialog-title>  Report </h1>\r\n<div class=\"row\">\r\n  <div class=\"col-md-6 col-sm-6 col-xs-6 col-lg-6\">\r\n    <mat-form-field>\r\n      <input matInput [matDatepicker]=\"picker5\" placeholder=\"Invoice From date \">\r\n      <mat-datepicker-toggle matSuffix [for]=\"picker5\"></mat-datepicker-toggle>\r\n      <mat-datepicker #picker5></mat-datepicker>\r\n    </mat-form-field>\r\n  </div>\r\n  <div class=\"col-md-6 col-sm-6 col-xs-6 col-lg-6\">\r\n    <mat-form-field>\r\n      <input matInput [matDatepicker]=\"picker6\" placeholder=\"Invoice to date \">\r\n      <mat-datepicker #picker6></mat-datepicker>\r\n      <mat-datepicker-toggle matSuffix [for]=\"picker6\"></mat-datepicker-toggle>\r\n    </mat-form-field>\r\n  </div>\r\n  <div class=\"col-md-6 col-sm-6 col-xs-6 col-lg-6\">\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"Serial No\">\r\n    </mat-form-field>\r\n  </div>\r\n  <div class=\"col-md-6 col-sm-6 col-xs-6 col-lg-6\">\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"Total\">\r\n    </mat-form-field>\r\n  </div>\r\n\r\n  <div class=\"col-md-6 col-sm-6 col-xs-6 col-lg-6\">\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"Supplier No\">\r\n    </mat-form-field>\r\n  </div>\r\n  <div class=\"col-md-6 col-sm-6 col-xs-6 col-lg-6\">\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"Certifier\">\r\n    </mat-form-field>\r\n  </div>\r\n</div>\r\n <h1 mat-dialog-title>  Status</h1>\r\n <section class=\"example-section\">\r\n    <mat-checkbox class=\"example-margin\" color=\"primary\" style=\"margin-left:10px;\">Registrerad</mat-checkbox>\r\n    <mat-checkbox class=\"example-margin\" color=\"primary\" style=\"margin-left:10px;\">Godkänd</mat-checkbox>\r\n    <mat-checkbox class=\"example-margin\" color=\"primary\" style=\"margin-left:10px;\">Attesterad</mat-checkbox>\r\n    <mat-checkbox class=\"example-margin\"  color=\"primary\" style=\"margin-left:10px;\">Vilande</mat-checkbox>\r\n    <mat-checkbox class=\"example-margin\" color=\"primary\" style=\"margin-left:10px;\">Klar</mat-checkbox>\r\n    <mat-checkbox class=\"example-margin\" color=\"primary\" style=\"margin-left:10px;\">Makulerad</mat-checkbox>\r\n    <mat-checkbox class=\"example-margin\" color=\"primary\" style=\"margin-left:10px;\">Överförd</mat-checkbox>\r\n  </section>\r\n<div mat-dialog-actions style=\"float:right;\">\r\n  <button mat-button (click)=\"onNoClick()\">Cancel</button>\r\n  <button mat-button [mat-dialog-close]=\"data.CertifierName\" cdkFocusInitial>OK</button>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/sidebar/doclistpopup.html":
/*!******************************************************!*\
  !*** ./src/app/components/sidebar/doclistpopup.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\r\n\r\n</style>\r\n\r\n<div class=\"popupdiv\">\r\n <h1 mat-dialog-title> DocumentList Report </h1>\r\n<div class=\"row\">\r\n  <div class=\"col-md-6 col-sm-6 col-xs-6 col-lg-6\">\r\n    <mat-form-field>\r\n      <input matInput [matDatepicker]=\"picker5\" placeholder=\"Invoice From date \">\r\n      <mat-datepicker-toggle matSuffix [for]=\"picker5\"></mat-datepicker-toggle>\r\n      <mat-datepicker #picker5></mat-datepicker>\r\n    </mat-form-field>\r\n  </div>\r\n  <div class=\"col-md-6 col-sm-6 col-xs-6 col-lg-6\">\r\n    <mat-form-field>\r\n      <input matInput [matDatepicker]=\"picker6\" placeholder=\"Invoice to date \">\r\n      <mat-datepicker #picker6></mat-datepicker>\r\n      <mat-datepicker-toggle matSuffix [for]=\"picker6\"></mat-datepicker-toggle>\r\n    </mat-form-field>\r\n  </div>\r\n  <div class=\"col-md-6 col-sm-6 col-xs-6 col-lg-6\">\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"Serial No\">\r\n    </mat-form-field>\r\n  </div>\r\n  <div class=\"col-md-6 col-sm-6 col-xs-6 col-lg-6\">\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"Total\">\r\n    </mat-form-field>\r\n  </div>\r\n\r\n  <div class=\"col-md-6 col-sm-6 col-xs-6 col-lg-6\">\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"Supplier No\">\r\n    </mat-form-field>\r\n  </div>\r\n  <div class=\"col-md-6 col-sm-6 col-xs-6 col-lg-6\">\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"Certifier\">\r\n    </mat-form-field>\r\n  </div>\r\n</div>\r\n <h1 mat-dialog-title>  Status</h1>\r\n <section class=\"example-section\">\r\n    <mat-checkbox class=\"example-margin\" color=\"primary\" style=\"margin-left:10px;\">Registrerad</mat-checkbox>\r\n    <mat-checkbox class=\"example-margin\" color=\"primary\" style=\"margin-left:10px;\">Godkänd</mat-checkbox>\r\n    <mat-checkbox class=\"example-margin\" color=\"primary\" style=\"margin-left:10px;\">Attesterad</mat-checkbox>\r\n    <mat-checkbox class=\"example-margin\"  color=\"primary\" style=\"margin-left:10px;\">Vilande</mat-checkbox>\r\n    <mat-checkbox class=\"example-margin\" color=\"primary\" style=\"margin-left:10px;\">Klar</mat-checkbox>\r\n    <mat-checkbox class=\"example-margin\" color=\"primary\" style=\"margin-left:10px;\">Makulerad</mat-checkbox>\r\n    <mat-checkbox class=\"example-margin\" color=\"primary\" style=\"margin-left:10px;\">Överförd</mat-checkbox>\r\n  </section>\r\n<div mat-dialog-actions style=\"float:right;\">\r\n  <button mat-button (click)=\"onNoClick()\">Cancel</button>\r\n  <button mat-button [mat-dialog-close]=\"data.CertifierName\" cdkFocusInitial>OK</button>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/sidebar/mergeinvoicepopup.html":
/*!***********************************************************!*\
  !*** ./src/app/components/sidebar/mergeinvoicepopup.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\r\n\r\n.table {\r\n  display: flex;\r\n  flex-flow: column nowrap;\r\n  margin: 0.5rem;\r\n  line-height: 1.5;\r\n  border-bottom: 1px solid #d0d0d0;\r\n  flex: 1 1 auto;\r\n}\r\n\r\n.th {\r\n  display: flex;\r\n  width: 100%;\r\n  font-weight: 500;\r\n  background-color: #f2f2f2;\r\n\r\n}\r\n\r\n.th > .td {\r\n  white-space: normal;\r\n  justify-content: center;\r\n}\r\n\r\n.tr {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-flow: row nowrap;\r\n}\r\n\r\n// .tr:nth-of-type(even) {\r\n//   background-color: #f2f2f2;\r\n// }\r\n//\r\n// .tr:nth-of-type(odd) {\r\n//   background-color: #ffffff;\r\n// }\r\n\r\n.td {\r\n  display: flex;\r\n  flex-flow: row nowrap;\r\n  flex-grow: 1;\r\n  flex-basis: 0;\r\n  padding: 1em;\r\n  word-break: break-word;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  min-width: 0px;\r\n  white-space: nowrap;\r\n  border-bottom: 1px solid #d0d0d0;\r\n}\r\n\r\n.th[_ngcontent-c5] {\r\n    display: flex;\r\n    width: 100%;\r\n    font-weight: 300;\r\n    background-color: #f2f2f2;\r\n}\r\n\r\n.td[_ngcontent-c5] {\r\n  padding: 1em;\r\n}\r\n\r\n\r\n.table[_ngcontent-c5]{\r\n  font-size: 13px !important;\r\n  border: 1px solid #efefefed;\r\n}\r\n</style>\r\n<div class=\"popupdiv\">\r\n <h1 mat-dialog-title> Merge </h1>\r\n<div class=\"row\">\r\n  <div class=\"col-md-2 col-sm-2 col-xs-2 col-lg-2\">\r\n    <mat-checkbox class=\"example-margin\" color=\"primary\" style=\"margin-left:10px;\">Invoice date</mat-checkbox>\r\n</div>\r\n  <div class=\"col-md-5 col-sm-5 col-xs-5 col-lg-5\">\r\n    <mat-form-field>\r\n      <input matInput [matDatepicker]=\"picker5\" placeholder=\"Invoice From date \">\r\n      <mat-datepicker-toggle matSuffix [for]=\"picker5\"></mat-datepicker-toggle>\r\n      <mat-datepicker #picker5></mat-datepicker>\r\n    </mat-form-field>\r\n  </div>\r\n  <div class=\"col-md-5 col-sm-5 col-xs-5 col-lg-5\">\r\n    <mat-form-field>\r\n      <input matInput [matDatepicker]=\"picker6\" placeholder=\"Invoice to date \">\r\n      <mat-datepicker #picker6></mat-datepicker>\r\n      <mat-datepicker-toggle matSuffix [for]=\"picker6\"></mat-datepicker-toggle>\r\n    </mat-form-field>\r\n  </div>\r\n  <div class=\"col-md-1 col-sm-1 col-xs-1 col-lg-1\">\r\n\r\n  </div>\r\n  <div class=\"col-md-10 col-sm-10 col-xs-10 col-lg-10\">\r\n    Period :\r\n    <mat-radio-group style=\"align-content:center;\">\r\n      <mat-radio-button color=\"primary\" value=\"1\" style=\"margin-left:15px;\">This Month</mat-radio-button>\r\n      <mat-radio-button color=\"primary\" value=\"2\" style=\"margin-left:15px;\">Last 3 Months</mat-radio-button>\r\n      <mat-radio-button color=\"primary\" value=\"3\" style=\"margin-left:15px;\">Last 6 Months</mat-radio-button>\r\n      <mat-radio-button color=\"primary\" value=\"4\" style=\"margin-left:15px;\">Last 12 Months</mat-radio-button>\r\n    </mat-radio-group>\r\n  </div>\r\n  <div class=\"col-md-1 col-sm-1 col-xs-1 col-lg-1\">\r\n\r\n  </div>\r\n</div>\r\n<div mat-dialog-actions style=\"float:right;\">\r\n  <button mat-button (click)=\"onNoClick()\">Cancel</button>\r\n  <button mat-button [mat-dialog-close]=\"data.CertifierName\" cdkFocusInitial>OK</button>\r\n</div>\r\n<br>\r\n<br>\r\n<br>\r\n<h3 mat-dialog-title>  The documents below are available for 24h </h3>\r\n\r\n<div class=\"table\" style=\"font-size: 14px !important;\">\r\n  <div class=\"tr th\" style=\"color:#fff; background-color:#2e348a;\">\r\n    <div class=\"td\">\r\n      Report ID\r\n    </div>\r\n    <div class=\"td\" style=\"flex-grow: 2;\">\r\n      File Name\r\n    </div>\r\n    <div class=\"td\">\r\n      Created Date Time\r\n    </div>\r\n    <div class=\"td\">\r\n      Download\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"tr\">\r\n    <div class=\"td\" style=\"justify-content: center;\">\r\n      <span>1002</span>\r\n    </div>\r\n    <div class=\"td\" style=\"flex-grow: 2; justify-content: flex-start;\">\r\n      <span>SHIELD REPORT 18-R</span>\r\n    </div>\r\n    <div class=\"td\" style=\"justify-content: center;\">\r\n      <span>2018/07/12 19:44:10</span>\r\n    </div>\r\n    <div class=\"td\" style=\"justify-content: center;\">\r\n      <button mat-mini-fab color=\"primary\"><i class=\"material-icons\"  matTooltip=\"Download\">arrow_downward</i></button>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"tr\">\r\n    <div class=\"td\" style=\"justify-content: center;\">\r\n      <span>1056</span>\r\n    </div>\r\n    <div class=\"td\" style=\"flex-grow: 2; justify-content: flex-start;\">\r\n      <span>PER INVOICE TEST</span>\r\n    </div>\r\n    <div class=\"td\" style=\"justify-content: center;\">\r\n      <span>2018/06/27 07:27:19</span>\r\n    </div>\r\n    <div class=\"td\" style=\"justify-content: center;\">\r\n      <button mat-mini-fab color=\"primary\"><i class=\"material-icons\"  matTooltip=\"Download\">arrow_downward</i></button>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"tr\">\r\n    <div class=\"td\" style=\"justify-content: center;\">\r\n      <span>1123</span>\r\n    </div>\r\n    <div class=\"td\" style=\"flex-grow: 2; justify-content: flex-start;\">\r\n      <span>OFS REPORT NEW PHASE EXPENSES</span>\r\n    </div>\r\n    <div class=\"td\" style=\"justify-content: center;\">\r\n      <span>2018/12/08 08:23:45</span>\r\n    </div>\r\n    <div class=\"td\" style=\"justify-content: center;\">\r\n      <button mat-mini-fab color=\"primary\"><i class=\"material-icons\"  matTooltip=\"Download\">arrow_downward</i></button>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n<div mat-dialog-actions style=\"float:right;\">\r\n  <button mat-button style=\"color:#fff; background:#2e348a;\" (click)=\"onNoClick()\">Cancel</button>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav li.active > a {\r\n    background-color: #2e348a;\r\n    box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgb(132, 140, 255);\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"logo\">\n    <a href=\"#\" class=\"simple-text\">\n        <div class=\"logo-img\">\n            <img src=\"/assets/img/Swinx_Logo.png\"/>\n        </div>     <b style=\"word-spacing: 5px;\">.a SWINX SCANLEV </b>\n    </a>\n</div>\n<div class=\"sidebar-wrapper\">\n  <div *ngIf=\"isMobileMenu()\">\n    <form class=\"navbar-form\">\n      <span class=\"bmd-form-group\">\n        <div class=\"input-group no-border\">\n          <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search...\">\n          <button mat-raised-button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\n            <i class=\"material-icons\">search</i>\n            <div class=\"ripple-container\"></div>\n          </button>\n        </div>\n      </span>\n    </form>\n  </div>\n    <ul class=\"nav\">\n        <li routerLinkActive=\"active\" *ngFor=\"let menuItem of menuItems\" class=\"{{menuItem.class}} nav-item\" (click)=\"menuItem.droparrow = !menuItem.droparrow\" >\n            <a class=\"nav-link\" *ngIf=\"menuItem.path\">\n                <i class=\"material-icons\">{{menuItem.icon}}</i>  <p [routerLink]=\"[menuItem.path]\" *ngIf=\"!menuItem.dropdown\">{{menuItem.title}}</p>\n                <span [routerLink]=\"[menuItem.path]\"  *ngIf=\"menuItem.dropdown\"> {{menuItem.title}}  </span>  <span class=\"material-icons\"  style=\"display: inline-block; float:right;\" *ngIf=\"menuItem.dropdown\">{{!menuItem.droparrow ? 'arrow_drop_up' : 'arrow_drop_down'}}</span>\n            </a>\n            <a class=\"nav-link\" *ngIf=\"!menuItem.path\">\n                <i class=\"material-icons\">{{menuItem.icon}}</i>\n                <p>{{menuItem.title}}    <span class=\"material-icons\"  style=\"float:right;\" *ngIf=\"menuItem.dropdown\">{{!menuItem.droparrow ? 'arrow_drop_up' : 'arrow_drop_down'}}</span></p>\n            </a>\n            <ul class=\"nav\" *ngIf=\"!menuItem.droparrow\">\n                <li *ngFor=\"let dropdown of menuItem.dropdown\" class=\"{{dropdown.class}} nav-item\">\n                    <a class=\"nav-link\" [routerLink]=\"[dropdown.path]\" *ngIf=\"menuItem.title != 'Printer'\" style=\"margin-left:40px;\">\n                        <i class=\"material-icons\">{{dropdown.icon}}</i>\n                        <p> {{dropdown.title}}</p>\n                    </a>\n                </li>\n                <li *ngFor=\"let dropdown of menuItem.dropdown\" class=\"{{dropdown.class}} nav-item\">\n                    <a class=\"nav-link\"  *ngIf=\"menuItem.title == 'Printer'\" style=\"margin-left:40px;\">\n                        <i class=\"material-icons\">{{dropdown.icon}}</i>\n                        <p  (click)= \"openprint(dropdown.title)\"> {{dropdown.title}}</p>    \n                    </a>\n                </li>\n\n            </ul>\n        </li>\n    </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: ROUTES, SidebarComponent, certificatelistpopup, documentlistpopup, mergeinvoicepopup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "certificatelistpopup", function() { return certificatelistpopup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "documentlistpopup", function() { return documentlistpopup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeinvoicepopup", function() { return mergeinvoicepopup; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


;
;
var ROUTES = [
    // { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    //  { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
    //  { path: '/table-list', title: 'Table List',  icon:'content_paste', class: '' },
    //  { path: '/typography', title: 'Typography',  icon:'library_books', class: '' },
    { path: '/toapprove', title: 'To Approve', icon: 'content_paste', class: '' },
    {
        path: '/sentinvoice', title: 'Sent Invoice', icon: 'send', class: '1', droparrow: true,
        dropdown: [
            { path: '/projects', title: 'Projects', icon: 'P', class: '' },
            { path: '/costcenters', title: 'CostCenters', icon: 'monetization_on', class: '' }
        ]
    },
    { path: '/parked', title: 'Parked', icon: 'bubble_chart', class: '' },
    {
        title: 'Invoice Flow', icon: 'description', class: '', droparrow: true,
        dropdown: [
            { path: '/notregistered', title: 'NotRegistered', icon: 'no_sim', class: '' },
            { path: '/imported', title: 'Imported', icon: 'get_app', class: '' },
            { path: '/distributed', title: 'Distributed', icon: 'share', class: '' },
            { path: '/countersigned', title: 'Counter Signed', icon: 'verified_user', class: '' }
        ]
    },
    {
        path: '/allinvoices', title: 'All Invoices', icon: 'library_books', class: '1', droparrow: true,
        dropdown: [
            { path: '/projects', title: 'Projects', icon: 'P', class: '' },
            { path: '/costcenters', title: 'CostCenters', icon: 'monetization_on', class: '' },
            { path: '/accounts', title: 'Accounts', icon: 'account_balance_wallet', class: '' }
        ]
    },
    { path: '/suppliersList', title: 'Suppliers List', icon: 'list', class: '' },
    {
        title: 'Printer', icon: 'print', class: '', droparrow: true,
        dropdown: [
            { path: '/Projects', title: 'Projects', icon: 'P', class: '' },
            { path: '/Costcenters', title: 'CostCenters', icon: 'monetization_on', class: '' },
            { path: '/CertificationList', title: 'Certification List', icon: 'playlist_add_check', class: '' },
            { path: '/DocumentList', title: 'Document List', icon: 'list_alt', class: '' },
            { path: '/MaturiyList', title: 'Maturiy List', icon: 'featured_play_list', class: '' },
            { path: '/MergeInvoice', title: 'Merge Invoice', icon: 'merge_type', class: '' },
            { path: '/ExcelExport', title: 'Excel Export', icon: 'explicit', class: '' }
        ]
    },
    {
        title: 'Settings', icon: 'settings', class: '', droparrow: true,
        dropdown: [
            { path: '/properties', title: 'properties', icon: 'settings_input_component', class: '' },
            { path: '/company', title: 'company', icon: 'card_travel', class: '' },
            { path: '/user', title: 'users', icon: 'supervised_user_circle', class: '' },
            { path: '/createtemplate', title: 'Create Template', icon: 'local_hospital', class: '' },
            { path: '/ProjectList', title: '', icon: '', class: '' },
            { path: '/CostcenterList', title: '', icon: '', class: '' },
            { path: '/AccountList', title: '', icon: '', class: '' },
            { path: '/invoicedetail', title: '', icon: '', class: '' },
        ]
    },
];
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(dialog1, dialog2, dialog3) {
        this.dialog1 = dialog1;
        this.dialog2 = dialog2;
        this.dialog3 = dialog3;
    }
    SidebarComponent.prototype.opencertificatelist = function () {
        var dialogRef1 = this.dialog1.open(certificatelistpopup, {
            width: '50%',
            data: { CertifierName: this.CertifierName, Certifier: this.Certifier }
        });
        dialogRef1.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    SidebarComponent.prototype.opendocumentlist = function () {
        var dialogRef2 = this.dialog2.open(documentlistpopup, {
            width: '50%',
            data: { CertifierName: this.CertifierName, Certifier: this.Certifier }
        });
        dialogRef2.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    SidebarComponent.prototype.openmergeinvoice = function () {
        var dialogRef3 = this.dialog3.open(mergeinvoicepopup, {
            width: '60%',
            data: { CertifierName: this.CertifierName, Certifier: this.Certifier }
        });
        dialogRef3.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    SidebarComponent.prototype.ngOnInit = function () {
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
        this.showSubmenu = true;
    };
    SidebarComponent.prototype.isMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    ;
    SidebarComponent.prototype.openprint = function (x) {
        if (x == "Projects") {
            window.open("http://localhost:4200/assets/project.pdf", "_blank");
        }
        if (x == "CostCenters") {
            window.open("http://localhost:4200/assets/costcenter.pdf", "_blank");
        }
        if (x == "Certification List") {
            this.opencertificatelist();
        }
        if (x == "Document List") {
            this.opendocumentlist();
        }
        if (x == "Maturiy List") {
            this.opencertificatelist();
        }
        if (x == "Merge Invoice") {
            this.openmergeinvoice();
        }
        if (x == "Excel Export") {
            this.openmergeinvoice();
        }
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/components/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], SidebarComponent);
    return SidebarComponent;
}());

var certificatelistpopup = /** @class */ (function () {
    function certificatelistpopup(dialogRef1, data) {
        this.dialogRef1 = dialogRef1;
        this.data = data;
    }
    certificatelistpopup.prototype.onNoClick = function () {
        this.dialogRef1.close();
    };
    certificatelistpopup = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'certificatelistpopup',
            template: __webpack_require__(/*! ./certificatelistpopup.html */ "./src/app/components/sidebar/certificatelistpopup.html"),
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], certificatelistpopup);
    return certificatelistpopup;
}());

var documentlistpopup = /** @class */ (function () {
    function documentlistpopup(dialogRef2, data) {
        this.dialogRef2 = dialogRef2;
        this.data = data;
    }
    documentlistpopup.prototype.onNoClick = function () {
        this.dialogRef2.close();
    };
    documentlistpopup = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'documentlistpopup',
            template: __webpack_require__(/*! ./doclistpopup.html */ "./src/app/components/sidebar/doclistpopup.html"),
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], documentlistpopup);
    return documentlistpopup;
}());

var mergeinvoicepopup = /** @class */ (function () {
    function mergeinvoicepopup(dialogRef3, data) {
        this.dialogRef3 = dialogRef3;
        this.data = data;
    }
    mergeinvoicepopup.prototype.onNoClick = function () {
        this.dialogRef3.close();
    };
    mergeinvoicepopup = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mergeinvoicepopup',
            template: __webpack_require__(/*! ./mergeinvoicepopup.html */ "./src/app/components/sidebar/mergeinvoicepopup.html"),
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], mergeinvoicepopup);
    return mergeinvoicepopup;
}());



/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.component.html":
/*!******************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"sidebar\" data-color=\"danger\" data-background-color=\"white\">\n        <app-sidebar></app-sidebar>\n        <div class=\"sidebar-background\"></div>\n    </div>\n    <div class=\"main-panel\">\n        <app-navbar></app-navbar>\n        <router-outlet></router-outlet>\n        <div *ngIf=\"isMaps('maps')\">\n            <app-footer></app-footer>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* width */\n::-webkit-scrollbar {\n  width: 10px; }\n/* Track */\n::-webkit-scrollbar-track {\n  background: #f1f1f1; }\n/* Handle */\n::-webkit-scrollbar-thumb {\n  background: #888; }\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n  background: #555; }\nmat-tooltip {\n  font-size: 20px;\n  color: #fff;\n  background: #000;\n  border-radius: 2px;\n  margin: 14px;\n  max-width: 250px;\n  padding-left: 8px;\n  padding-right: 8px; }\n::ng-shadow .mat-tooltip {\n  font-size: 16px;\n  color: #3f51b5;\n  border-radius: 2px;\n  margin: 14px;\n  max-width: 200px;\n  padding-left: 5px;\n  padding-right: 5px; }\n::ng-deep .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: #7388ff !important; }\n::ng-deep .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: #2e348a  !important; }\n"

/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! perfect-scrollbar */ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminLayoutComponent = /** @class */ (function () {
    function AdminLayoutComponent(location, router) {
        this.location = location;
        this.router = router;
        this.yScrollStack = [];
    }
    AdminLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        if (isWindows && !document.getElementsByTagName('body')[0].classList.contains('sidebar-mini')) {
            // if we are on windows OS we activate the perfectScrollbar function
            document.getElementsByTagName('body')[0].classList.add('perfect-scrollbar-on');
        }
        else {
            document.getElementsByTagName('body')[0].classList.remove('perfect-scrollbar-off');
        }
        var elemMainPanel = document.querySelector('.main-panel');
        var elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
        this.location.subscribe(function (ev) {
            _this.lastPoppedUrl = ev.url;
        });
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]) {
                if (event.url != _this.lastPoppedUrl)
                    _this.yScrollStack.push(window.scrollY);
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                if (event.url == _this.lastPoppedUrl) {
                    _this.lastPoppedUrl = undefined;
                    window.scrollTo(0, _this.yScrollStack.pop());
                }
                else
                    window.scrollTo(0, 0);
            }
        });
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]; }).subscribe(function (event) {
            elemMainPanel.scrollTop = 0;
            elemSidebar.scrollTop = 0;
        });
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["default"](elemMainPanel);
            ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["default"](elemSidebar);
        }
    };
    AdminLayoutComponent.prototype.ngAfterViewInit = function () {
        this.runOnRouteChange();
    };
    AdminLayoutComponent.prototype.isMaps = function (path) {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (path == titlee) {
            return false;
        }
        else {
            return true;
        }
    };
    AdminLayoutComponent.prototype.runOnRouteChange = function () {
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var elemMainPanel = document.querySelector('.main-panel');
            var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["default"](elemMainPanel);
            ps.update();
        }
    };
    AdminLayoutComponent.prototype.isMac = function () {
        var bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    };
    AdminLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-layout',
            template: __webpack_require__(/*! ./admin-layout.component.html */ "./src/app/layouts/admin-layout/admin-layout.component.html"),
            styles: [__webpack_require__(/*! ./admin-layout.component.scss */ "./src/app/layouts/admin-layout/admin-layout.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\work\SwinxAngular5\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map