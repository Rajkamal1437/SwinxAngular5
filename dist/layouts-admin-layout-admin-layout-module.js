(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layouts-admin-layout-admin-layout-module"],{

/***/ "./src/app/account-list/account-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/account-list/account-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  account-list works!\n</p>\n"

/***/ }),

/***/ "./src/app/account-list/account-list.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/account-list/account-list.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/account-list/account-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/account-list/account-list.component.ts ***!
  \********************************************************/
/*! exports provided: AccountListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountListComponent", function() { return AccountListComponent; });
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

var AccountListComponent = /** @class */ (function () {
    function AccountListComponent() {
    }
    AccountListComponent.prototype.ngOnInit = function () {
    };
    AccountListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-account-list',
            template: __webpack_require__(/*! ./account-list.component.html */ "./src/app/account-list/account-list.component.html"),
            styles: [__webpack_require__(/*! ./account-list.component.scss */ "./src/app/account-list/account-list.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AccountListComponent);
    return AccountListComponent;
}());



/***/ }),

/***/ "./src/app/accounts/accounts.component.html":
/*!**************************************************!*\
  !*** ./src/app/accounts/accounts.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<br>\n<br>\n<br>\n\n\n<div class=\"container\" style=\"background:#fff;\">\n  <div class=\"table-responsive\">\n    <p style=\"margin-top:20px;font-weight:700;\"> Accounts - List </p>\n\n      <form class=\"navbar-form\">\n          <div class=\"input-group no-border justify-content-end\">\n            <input type=\"text\"  class=\"form-control\" placeholder=\"Enter To search Accounts\" style=\"max-width:200px; width:200px; margin-top:-5px;\">\n            <button mat-raised-button type=\"submit\" class=\"btn btn-blue btn-round btn-just-icon\" style=\"margin-top:-5px;\">\n                  <i class=\"material-icons\">search</i>\n                  <div class=\"ripple-container\"></div>\n              </button>\n          </div>\n      </form>\n\n      <table class=\"table\">\n          <thead class=\" text-primary\" style=\"color: #fff !important; background-color: #2e348a;\">\n              <th>\n                Favorites\n              </th>\n              <th>\n                  Account\n              </th>\n              <th>\n                  Account Name\n              </th>\n          </thead>\n          <tbody>\n              <tr>\n                <td (click)=\"clicked = !clicked\">\n                  <i color=\"primary\" class=\"material-icons\">{{clicked ? 'star' : 'star_border'}}</i>\n                  </td>\n                  <td>\n                    1001\n                  </td>\n                  <td class=\"text-primary\">\n                      IOB Accounts\n                  </td>\n              </tr>\n              <tr>\n                <td (click)=\"clicked1 = !clicked1\">\n                  <i color=\"primary\" class=\"material-icons\">{{clicked1 ? 'star' : 'star_border'}}</i>\n                  </td>\n                  <td>\n                    1002\n                  </td>\n                  <td class=\"text-primary\">\n                      TMB Accounts\n                  </td>\n              </tr>\n              <tr>\n                <td (click)=\"clicked2 = !clicked2\">\n                  <i color=\"primary\" class=\"material-icons\">{{!clicked2 ? 'star' : 'star_border'}}</i>\n                  </td>\n                  <td>\n                    1003\n                  </td>\n                  <td class=\"text-primary\">\n                      DBS Accounts\n                  </td>\n              </tr>\n              <tr>\n                  <td (click)=\"clicked3 = !clicked3\">\n                    <i color=\"primary\" class=\"material-icons\">{{clicked3 ? 'star' : 'star_border'}}</i>\n                  </td>\n                  <td>\n                    1004\n                  </td>\n                  <td class=\"text-primary\">\n                      SBI Accounts\n                  </td>\n              </tr>\n              <tr>\n                  <td (click)=\"clicked4 = !clicked4\">\n                    <i color=\"primary\" class=\"material-icons\">{{!clicked4 ? 'star' : 'star_border'}}</i>\n                  </td>\n                  <td>\n                    1005\n                  </td>\n                  <td class=\"text-primary\">\n                      UBI Accounts\n                  </td>\n              </tr>\n              <tr>\n                  <td (click)=\"clicked5 = !clicked5\">\n                    <i color=\"primary\" class=\"material-icons\">{{!clicked5 ? 'star' : 'star_border'}}</i>\n                  </td>\n                  <td>\n                    1006\n                  </td>\n                  <td class=\"text-primary\">\n                      GIT Accounts\n                  </td>\n              </tr>\n              <tr>\n                  <td (click)=\"clicked6 = !clicked6\">\n                    <i color=\"primary\" class=\"material-icons\">{{clicked6 ? 'star' : 'star_border'}}</i>\n                  </td>\n                  <td>\n                    1007\n                  </td>\n                  <td class=\"text-primary\">\n                      REDHAT Accounts\n                  </td>\n              </tr>\n\n          </tbody>\n      </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/accounts/accounts.component.scss":
/*!**************************************************!*\
  !*** ./src/app/accounts/accounts.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/accounts/accounts.component.ts":
/*!************************************************!*\
  !*** ./src/app/accounts/accounts.component.ts ***!
  \************************************************/
/*! exports provided: AccountsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsComponent", function() { return AccountsComponent; });
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

var AccountsComponent = /** @class */ (function () {
    function AccountsComponent() {
    }
    AccountsComponent.prototype.ngOnInit = function () {
    };
    AccountsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-accounts',
            template: __webpack_require__(/*! ./accounts.component.html */ "./src/app/accounts/accounts.component.html"),
            styles: [__webpack_require__(/*! ./accounts.component.scss */ "./src/app/accounts/accounts.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AccountsComponent);
    return AccountsComponent;
}());



/***/ }),

/***/ "./src/app/allinvoices/allinvoices.component.html":
/*!********************************************************!*\
  !*** ./src/app/allinvoices/allinvoices.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<br>\n<br>\n\n\n<div class=\"container\" style=\"background:#fff;\">\n  <div class=\"table-responsive\">\n      <table class=\"table\">\n          <thead class=\" text-primary\" style=\"color: #fff !important; background-color: #2e348a;\">\n             <th>\n             <mat-checkbox class=\"example-margin\"  color=\"primary\" [(ngModel)]=\"checked\"></mat-checkbox>\n             </th>\n              <th>\n                  Status\n              </th>\n              <th>\n                  Serial no\n              </th>\n              <th>\n                  Doc no\n              </th>\n              <th>\n                  supplier Name\n              </th>\n              <th>\n                  Invoice Date\n              </th>\n              <th>\n                  Invoice no\n              </th>\n              <th>\n                  Total\n              </th>\n              <th>\n                  Approver\n              </th>\n              <th>\n                  Certifier\n              </th>\n          </thead>\n          <tbody>\n              <tr>\n                <td>\n                <mat-checkbox class=\"example-margin\" color=\"primary\" [(ngModel)]=\"checked\"></mat-checkbox>\n              </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                    <button mat-mini-fab color=\"primary\" class=\"material-icons\" style=\"color:#fff;\">A</button>\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      15425\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      127\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\" class=\"text-primary\">\n                      SWINX AB\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      2018/05/03\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      124578963\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      500.00\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\" class=\"text-primary\">\n                      PER;\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\" class=\"text-primary\">\n                      CS;\n                  </td>\n              </tr>\n\n              <tr>\n                <td>\n                <mat-checkbox class=\"example-margin\" color=\"primary\"></mat-checkbox>\n              </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                    <button mat-mini-fab color=\"primary\" class=\"material-icons\" style=\"color:#fff;\">R</button>\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      15424\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      100\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\" class=\"text-primary\">\n                      OFS OCEANA AB\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      2018/03/09\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      175426389\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      1500.00\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\" class=\"text-primary\">\n                      PER;RAJ;\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\" class=\"text-primary\">\n                      ARON;\n                  </td>\n              </tr>\n\n              <tr>\n                <td>\n                <mat-checkbox class=\"example-margin\" color=\"primary\"></mat-checkbox>\n              </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                    <button mat-mini-fab color=\"primary\" class=\"material-icons\" style=\"color:#fff;\">DG</button>\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      15423\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      102\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\" class=\"text-primary\">\n                      CHENNAI SUPER KINGS AB\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      2018/01/26\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      1754284652\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      1800.00\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\" class=\"text-primary\">\n                      CSK;\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\" class=\"text-primary\">\n                      MIK;\n                  </td>\n              </tr>\n\n              <tr>\n                <td>\n                <mat-checkbox class=\"example-margin\"  color=\"primary\"></mat-checkbox>\n              </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                    <button mat-mini-fab color=\"primary\" class=\"material-icons\" style=\"color:#fff;\">M</button>\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      15421\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      190\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\" class=\"text-primary\">\n                      OFS Tech AB\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      2018/01/03\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      155428389\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      5000.00\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\" class=\"text-primary\">\n                      RAJ;\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\" class=\"text-primary\">\n                      TECH;\n                  </td>\n              </tr>\n\n\n              <tr>\n                <td>\n                <mat-checkbox class=\"example-margin\" color=\"primary\"></mat-checkbox>\n              </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                    <button mat-mini-fab color=\"primary\" class=\"material-icons\" style=\"color:#fff;\">k</button>\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      15419\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      145\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\" class=\"text-primary\">\n                      TEZ AB\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      2017/10/24\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      11586156\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      800.00\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\" class=\"text-primary\">\n                      PER;\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\" class=\"text-primary\">\n                      TEZ;\n                  </td>\n              </tr>\n\n\n\n              <tr>\n                <td>\n                <mat-checkbox class=\"example-margin\" color=\"primary\" ></mat-checkbox>\n              </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                    <button mat-mini-fab color=\"primary\" class=\"material-icons\" style=\"color:#fff;\">Ö</button>\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      15413\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      160\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\" class=\"text-primary\">\n                      SWINX Phase II AB\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      2017/10/05\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      104526389\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      5500.00\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\" class=\"text-primary\">\n                      PER;\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\" class=\"text-primary\">\n                      PER;\n                  </td>\n              </tr>\n\n\n\n              <tr>\n                <td>\n                <mat-checkbox class=\"example-margin\" color=\"primary\" ></mat-checkbox>\n              </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                    <button mat-mini-fab color=\"primary\" class=\"material-icons\" style=\"color:#fff;\">R</button>\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      15400\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      230\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\" class=\"text-primary\">\n                      AML AB\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      2017/09/25\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      175426666\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      500.00\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\" class=\"text-primary\">\n                      PER;RAJ;\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\" class=\"text-primary\">\n                      RAJ;\n                  </td>\n              </tr>\n\n\n\n              <tr>\n                <td>\n                <mat-checkbox class=\"example-margin\" color=\"primary\"></mat-checkbox>\n              </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                    <button mat-mini-fab color=\"primary\" class=\"material-icons\" style=\"color:#fff;\">A</button>\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      15350\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      089\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\" class=\"text-primary\">\n                      ULTRON AB\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      2017/07/07\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      175477777\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      7700.00\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\" class=\"text-primary\">\n                      MSD;\n                  </td >\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\" class=\"text-primary\">\n                      MSD;\n                  </td>\n              </tr>\n\n\n              <tr>\n                <td>\n                <mat-checkbox class=\"example-margin\" color=\"primary\"></mat-checkbox>\n              </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                    <button mat-mini-fab color=\"primary\" class=\"material-icons\" style=\"color:#fff;\">G</button>\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      15310\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      050\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\" class=\"text-primary\">\n                      AVENGERS AB\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      2016/09/27\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      175412456\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      100.00\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\" class=\"text-primary\">\n                      TS;CA;\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\" class=\"text-primary\">\n                      NIK;\n                  </td>\n              </tr>\n            </tbody>\n      </table>\n  </div>\n\n  <mat-paginator [length]=\"30\"\n            [pageSize]=\"10\"\n            #paginator\n              [showFirstLastButtons]=\"true\" style=\"font-size:18px;\">\n  </mat-paginator>\n</div>\n"

/***/ }),

/***/ "./src/app/allinvoices/allinvoices.component.scss":
/*!********************************************************!*\
  !*** ./src/app/allinvoices/allinvoices.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table {\n  margin-top: 30px;\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 1rem;\n  background-color: transparent;\n  border: 0.5px solid #f0f0f0; }\n"

/***/ }),

/***/ "./src/app/allinvoices/allinvoices.component.ts":
/*!******************************************************!*\
  !*** ./src/app/allinvoices/allinvoices.component.ts ***!
  \******************************************************/
/*! exports provided: AllinvoicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllinvoicesComponent", function() { return AllinvoicesComponent; });
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

var AllinvoicesComponent = /** @class */ (function () {
    function AllinvoicesComponent() {
    }
    AllinvoicesComponent.prototype.ngOnInit = function () {
    };
    AllinvoicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-allinvoices',
            template: __webpack_require__(/*! ./allinvoices.component.html */ "./src/app/allinvoices/allinvoices.component.html"),
            styles: [__webpack_require__(/*! ./allinvoices.component.scss */ "./src/app/allinvoices/allinvoices.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AllinvoicesComponent);
    return AllinvoicesComponent;
}());



/***/ }),

/***/ "./src/app/company/company.component.html":
/*!************************************************!*\
  !*** ./src/app/company/company.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  company works!\n</p>\n"

/***/ }),

/***/ "./src/app/company/company.component.scss":
/*!************************************************!*\
  !*** ./src/app/company/company.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/company/company.component.ts":
/*!**********************************************!*\
  !*** ./src/app/company/company.component.ts ***!
  \**********************************************/
/*! exports provided: CompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyComponent", function() { return CompanyComponent; });
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

var CompanyComponent = /** @class */ (function () {
    function CompanyComponent() {
    }
    CompanyComponent.prototype.ngOnInit = function () {
    };
    CompanyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-company',
            template: __webpack_require__(/*! ./company.component.html */ "./src/app/company/company.component.html"),
            styles: [__webpack_require__(/*! ./company.component.scss */ "./src/app/company/company.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CompanyComponent);
    return CompanyComponent;
}());



/***/ }),

/***/ "./src/app/costcenter-list/costcenter-list.component.html":
/*!****************************************************************!*\
  !*** ./src/app/costcenter-list/costcenter-list.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<br>\n<hr>\n<div class=\"container\" style=\"background:#fff;\">\n  <div class=\"row\">\n    <div class=\"col-md-9 col-sm-9 col-xs-9\" style=\"margin-top: 30px;\">\n      <p><strong  style=\"font-weight:800\">Cost Center ID :</strong> 930</p>\n      <form class=\"navbar-form\" style=\"margin-top:20px;\">\n          <div class=\"input-group no-border \">\n            <label for=\"Certifier\" style=\"font-weight:700; margin-left:30px;\">Approver</label>\n            <input type=\"text\"  class=\"form-control\" placeholder=\"Approver\" value=\"RAJ; PER;\" style=\"max-width:200px; width:200px; margin-top:-5px; margin-left:5px;\">\n            <button mat-raised-button type=\"submit\" class=\"btn btn-blue btn-round btn-just-icon\" style=\"margin-top:-5px; background: #2e348a;\" >\n                  <i class=\"material-icons\">search</i>\n                  <div class=\"ripple-container\"></div>\n              </button>\n              <label for=\"Certifier\" style=\"font-weight:700; margin-left:30px;\">Certifier</label>\n              <input type=\"text\"  class=\"form-control\" placeholder=\"Certifier\" value=\"RAJ;DK;\" style=\"max-width:200px; width:200px; margin-top:-5px; margin-left:5px;\">\n            <button mat-raised-button type=\"submit\" class=\"btn btn-blue btn-round btn-just-icon\" style=\"margin-top:-5px; background: #2e348a;\">\n                  <i class=\"material-icons\">search</i>\n                  <div class=\"ripple-container\"></div>\n              </button>\n          </div>\n      </form>\n    </div>\n    <div class=\"col-md-3 col-sm-3 col-xs-3\">\n      <button mat-mini-fab color=\"primary\" style=\"margin-right: 10px;   top:10px; right: 91px; position: absolute;\"><i class=\"material-icons\"  matTooltip=\"Save\">save</i></button>\n      <button mat-mini-fab color=\"primary\"  style=\"color:#fff; margin-right:10px;  top:10px;  right: 45px; position: absolute;\" matTooltip=\"Cancel\"><i class=\"material-icons\">cancel</i></button>\n      <button mat-mini-fab color=\"primary\" style=\"margin-right:10px;  top:10px; right: 0px; position: absolute;\"><i class=\"material-icons\"  matTooltip=\"Merge\">merge_type</i></button>\n    </div>\n  </div>\n\n\n  <div class=\"table-responsive\">\n      <table class=\"table\">\n          <thead class=\" text-primary\" style=\"color: #fff !important; background-color: #2e348a;\">\n             <th>\n             <mat-checkbox class=\"example-margin\"  color=\"primary\" [(ngModel)]=\"checked\"></mat-checkbox>\n             </th>\n              <th>\n                  Status\n              </th>\n              <th>\n                  Serial no\n              </th>\n              <th>\n                  Doc no\n              </th>\n              <th>\n                  supplier Name\n              </th>\n              <th>\n                  Invoice Date\n              </th>\n              <th>\n                  Invoice no\n              </th>\n              <th>\n                  Total\n              </th>\n              <th>\n                  Approver\n              </th>\n              <th>\n                  Certifier\n              </th>\n          </thead>\n          <tbody>\n              <tr>\n                <td>\n                <mat-checkbox class=\"example-margin\" color=\"primary\" [(ngModel)]=\"checked\"></mat-checkbox>\n              </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                    <button mat-mini-fab color=\"primary\" class=\"material-icons\" style=\"color:#fff;\">A</button>\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      15489\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      122\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\" class=\"text-primary\">\n                      OFS AB\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      2018/05/03\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      12457\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      5000.00\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\" class=\"text-primary\">\n                      PER;\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\" class=\"text-primary\">\n                      CS;RAJ;\n                  </td>\n              </tr>\n\n\n\n              <tr>\n                <td>\n                <mat-checkbox class=\"example-margin\" color=\"primary\"></mat-checkbox>\n              </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                    <button mat-mini-fab color=\"primary\" class=\"material-icons\" style=\"color:#fff;\">DG</button>\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      15721\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      107\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\" class=\"text-primary\">\n                      RVR AB\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      2018/01/26\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      17542454652\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      16500.00\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\" class=\"text-primary\">\n                      RK;\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\" class=\"text-primary\">\n                      KP;\n                  </td>\n              </tr>\n\n              <tr>\n                <td>\n                <mat-checkbox class=\"example-margin\"  color=\"primary\"></mat-checkbox>\n              </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                    <button mat-mini-fab color=\"primary\" class=\"material-icons\" style=\"color:#fff;\">M</button>\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      15431\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      1902\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\" class=\"text-primary\">\n                      SWINX\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      2018/01/03\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      158389\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      500.00\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\" class=\"text-primary\">\n                      DJ;\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\" class=\"text-primary\">\n                      DK;\n                  </td>\n              </tr>\n            </tbody>\n      </table>\n  </div>\n\n  <mat-paginator [length]=\"30\"\n            [pageSize]=\"10\"\n            #paginator\n              [showFirstLastButtons]=\"true\" style=\"font-size:18px;\">\n  </mat-paginator>\n</div>\n"

/***/ }),

/***/ "./src/app/costcenter-list/costcenter-list.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/costcenter-list/costcenter-list.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table {\n  margin-top: 30px;\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 1rem;\n  background-color: transparent;\n  border: 0.5px solid #f0f0f0; }\n"

/***/ }),

/***/ "./src/app/costcenter-list/costcenter-list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/costcenter-list/costcenter-list.component.ts ***!
  \**************************************************************/
/*! exports provided: CostcenterListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CostcenterListComponent", function() { return CostcenterListComponent; });
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

var CostcenterListComponent = /** @class */ (function () {
    function CostcenterListComponent() {
    }
    CostcenterListComponent.prototype.ngOnInit = function () {
    };
    CostcenterListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-costcenter-list',
            template: __webpack_require__(/*! ./costcenter-list.component.html */ "./src/app/costcenter-list/costcenter-list.component.html"),
            styles: [__webpack_require__(/*! ./costcenter-list.component.scss */ "./src/app/costcenter-list/costcenter-list.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CostcenterListComponent);
    return CostcenterListComponent;
}());



/***/ }),

/***/ "./src/app/costcenters/costcenters.component.html":
/*!********************************************************!*\
  !*** ./src/app/costcenters/costcenters.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<br>\n<br>\n<br>\n\n\n<div class=\"container\" style=\"background:#fff;\">\n  <div class=\"table-responsive\">\n    <p style=\"margin-top:20px;font-weight:700;\"> costcenter - List </p>\n\n      <form class=\"navbar-form\">\n          <div class=\"input-group no-border justify-content-end\">\n            <input type=\"text\"  class=\"form-control\" placeholder=\"Enter To search costcenter\" style=\"max-width:200px; width:200px; margin-top:-5px;\">\n            <button mat-raised-button type=\"submit\" class=\"btn btn-blue btn-round btn-just-icon\" style=\"margin-top:-5px;\">\n                  <i class=\"material-icons\">search</i>\n                  <div class=\"ripple-container\"></div>\n              </button>\n          </div>\n      </form>\n\n      <table class=\"table\">\n          <thead class=\" text-primary\" style=\"color: #fff !important; background-color: #2e348a;\">\n              <th>\n                  No\n              </th>\n              <th>\n                  Name\n              </th>\n              <th>\n                  Approver\n              </th>\n              <th>\n                  Certifier\n              </th>\n          </thead>\n          <tbody  [routerLink]=\"['/CostcenterList']\">\n              <tr>\n                  <td>\n                      122\n                  </td>\n                  <td>\n                     VK\n                  </td>\n                  <td class=\"text-primary\">\n                      PER;\n                  </td>\n                  <td class=\"text-primary\">\n                      RAJ;\n                  </td>\n              </tr>\n\n              <tr>\n                  <td>\n                      123\n                  </td>\n                  <td>\n                    OFS\n                  </td>\n                  <td class=\"text-primary\">\n                      PER;RAJ:\n                  </td>\n                  <td class=\"text-primary\">\n                      RAJ;HAL;ALV;\n                  </td>\n              </tr>\n\n              <tr>\n                  <td>\n                      125\n                  </td>\n                  <td>\n                       78888\n                  </td>\n                  <td class=\"text-primary\">\n                      RAI:\n                  </td>\n                  <td class=\"text-primary\">\n                      MSD;\n                  </td>\n              </tr>\n          </tbody>\n      </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/costcenters/costcenters.component.scss":
/*!********************************************************!*\
  !*** ./src/app/costcenters/costcenters.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/costcenters/costcenters.component.ts":
/*!******************************************************!*\
  !*** ./src/app/costcenters/costcenters.component.ts ***!
  \******************************************************/
/*! exports provided: CostcentersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CostcentersComponent", function() { return CostcentersComponent; });
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

var CostcentersComponent = /** @class */ (function () {
    function CostcentersComponent() {
    }
    CostcentersComponent.prototype.ngOnInit = function () {
    };
    CostcentersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-costcenters',
            template: __webpack_require__(/*! ./costcenters.component.html */ "./src/app/costcenters/costcenters.component.html"),
            styles: [__webpack_require__(/*! ./costcenters.component.scss */ "./src/app/costcenters/costcenters.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CostcentersComponent);
    return CostcentersComponent;
}());



/***/ }),

/***/ "./src/app/countersigned/countersigned.component.html":
/*!************************************************************!*\
  !*** ./src/app/countersigned/countersigned.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<br>\n<br>\n\n\n<div class=\"container\" style=\"background:#fff;\">\n  <div class=\"table-responsive\">\n      <table class=\"table\">\n          <thead class=\" text-primary\" style=\"color: #fff !important; background-color: #2e348a;\">\n             <th>\n             <mat-checkbox class=\"example-margin\"  color=\"primary\" [(ngModel)]=\"checked\"></mat-checkbox>\n             </th>\n              <th>\n                  Status\n              </th>\n              <th>\n                  Serial no\n              </th>\n              <th>\n                  Doc no\n              </th>\n              <th>\n                  supplier Name\n              </th>\n              <th>\n                  Invoice Date\n              </th>\n              <th>\n                  Invoice no\n              </th>\n              <th>\n                  Total\n              </th>\n              <th>\n                  Approver\n              </th>\n              <th>\n                  Certifier\n              </th>\n          </thead>\n          <tbody>\n              <tr>\n                <td>\n                <mat-checkbox class=\"example-margin\" color=\"primary\"></mat-checkbox>\n              </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                    <button mat-mini-fab color=\"primary\" class=\"material-icons\" style=\"color:#fff;\">k</button>\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      15419\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      145\n                  </td>\n                  <td class=\"text-primary\">\n                      TEZ AB\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      2017/10/24\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      11586156\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      800.00\n                  </td>\n                  <td class=\"text-primary\">\n                      PER;\n                  </td>\n                  <td class=\"text-primary\">\n                      TEZ;\n                  </td>\n              </tr>\n\n\n\n              <tr>\n                <td>\n                <mat-checkbox class=\"example-margin\" color=\"primary\" ></mat-checkbox>\n              </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                    <button mat-mini-fab color=\"primary\" class=\"material-icons\" style=\"color:#fff;\">A</button>\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      15413\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      160\n                  </td>\n                  <td class=\"text-primary\">\n                      SWINX Phase II AB\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      2017/10/05\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      104526389\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      5500.00\n                  </td>\n                  <td class=\"text-primary\">\n                      PER;\n                  </td>\n                  <td class=\"text-primary\">\n                      PER;\n                  </td>\n              </tr>\n\n\n\n              <tr>\n                <td>\n                <mat-checkbox class=\"example-margin\" color=\"primary\" ></mat-checkbox>\n              </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                    <button mat-mini-fab color=\"primary\" class=\"material-icons\" style=\"color:#fff;\">K</button>\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      15400\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      230\n                  </td>\n                  <td class=\"text-primary\">\n                      AML AB\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      2017/09/25\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      175426666\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      500.00\n                  </td>\n                  <td class=\"text-primary\">\n                      PER;RAJ;\n                  </td>\n                  <td class=\"text-primary\">\n                      RAJ;\n                  </td>\n              </tr>\n\n\n\n              <tr>\n                <td>\n                <mat-checkbox class=\"example-margin\" color=\"primary\"></mat-checkbox>\n              </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                    <button mat-mini-fab color=\"primary\" class=\"material-icons\" style=\"color:#fff;\">A</button>\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      15350\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      089\n                  </td>\n                  <td class=\"text-primary\">\n                      ULTRON AB\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      2017/07/07\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      175477777\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      7700.00\n                  </td>\n                  <td class=\"text-primary\">\n                      MSD;\n                  </td >\n                  <td class=\"text-primary\">\n                      MSD;\n                  </td>\n              </tr>\n\n\n              <tr>\n                <td>\n                <mat-checkbox class=\"example-margin\" color=\"primary\"></mat-checkbox>\n              </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                    <button mat-mini-fab color=\"primary\" class=\"material-icons\" style=\"color:#fff;\">A</button>\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      15310\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      050\n                  </td>\n                  <td class=\"text-primary\">\n                      AVENGERS AB\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      2016/09/27\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      175412456\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      100.00\n                  </td>\n                  <td class=\"text-primary\">\n                      TS;CA;\n                  </td>\n                  <td class=\"text-primary\">\n                      NIK;\n                  </td>\n              </tr>\n            </tbody>\n      </table>\n  </div>\n\n  <mat-paginator [length]=\"30\"\n            [pageSize]=\"10\"\n            #paginator\n              [showFirstLastButtons]=\"true\" style=\"font-size:18px;\">\n  </mat-paginator>\n</div>\n"

/***/ }),

/***/ "./src/app/countersigned/countersigned.component.scss":
/*!************************************************************!*\
  !*** ./src/app/countersigned/countersigned.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table {\n  margin-top: 30px;\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 1rem;\n  background-color: transparent;\n  border: 0.5px solid #f0f0f0; }\n"

/***/ }),

/***/ "./src/app/countersigned/countersigned.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/countersigned/countersigned.component.ts ***!
  \**********************************************************/
/*! exports provided: CountersignedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountersignedComponent", function() { return CountersignedComponent; });
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

var CountersignedComponent = /** @class */ (function () {
    function CountersignedComponent() {
    }
    CountersignedComponent.prototype.ngOnInit = function () {
    };
    CountersignedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-countersigned',
            template: __webpack_require__(/*! ./countersigned.component.html */ "./src/app/countersigned/countersigned.component.html"),
            styles: [__webpack_require__(/*! ./countersigned.component.scss */ "./src/app/countersigned/countersigned.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CountersignedComponent);
    return CountersignedComponent;
}());



/***/ }),

/***/ "./src/app/createtemplate/createtemplate.component.html":
/*!**************************************************************!*\
  !*** ./src/app/createtemplate/createtemplate.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  createtemplate works!\n</p>\n"

/***/ }),

/***/ "./src/app/createtemplate/createtemplate.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/createtemplate/createtemplate.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/createtemplate/createtemplate.component.ts":
/*!************************************************************!*\
  !*** ./src/app/createtemplate/createtemplate.component.ts ***!
  \************************************************************/
/*! exports provided: CreatetemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatetemplateComponent", function() { return CreatetemplateComponent; });
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

var CreatetemplateComponent = /** @class */ (function () {
    function CreatetemplateComponent() {
    }
    CreatetemplateComponent.prototype.ngOnInit = function () {
    };
    CreatetemplateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-createtemplate',
            template: __webpack_require__(/*! ./createtemplate.component.html */ "./src/app/createtemplate/createtemplate.component.html"),
            styles: [__webpack_require__(/*! ./createtemplate.component.scss */ "./src/app/createtemplate/createtemplate.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CreatetemplateComponent);
    return CreatetemplateComponent;
}());



/***/ }),

/***/ "./src/app/distributed/distributed.component.html":
/*!********************************************************!*\
  !*** ./src/app/distributed/distributed.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<br>\n<br>\n\n\n<div class=\"container\" style=\"background:#fff;\">\n  <div class=\"table-responsive\">\n      <table class=\"table\">\n          <thead class=\" text-primary\" style=\"color: #fff !important; background-color: #2e348a;\">\n             <th>\n             <mat-checkbox class=\"example-margin\"  color=\"primary\" [(ngModel)]=\"checked\"></mat-checkbox>\n             </th>\n              <th>\n                  Status\n              </th>\n              <th>\n                  Serial no\n              </th>\n              <th>\n                  Doc no\n              </th>\n              <th>\n                  supplier Name\n              </th>\n              <th>\n                  Invoice Date\n              </th>\n              <th>\n                  Invoice no\n              </th>\n              <th>\n                  Total\n              </th>\n              <th>\n                  Approver\n              </th>\n              <th>\n                  Certifier\n              </th>\n          </thead>\n          <tbody>\n              <tr>\n                <td>\n                <mat-checkbox class=\"example-margin\" color=\"primary\" [(ngModel)]=\"checked\"></mat-checkbox>\n              </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                    <button mat-mini-fab color=\"primary\" class=\"material-icons\" style=\"color:#fff;\">A</button>\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      15425\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      127\n                  </td>\n                  <td class=\"text-primary\">\n                      SWINX AB\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      2018/05/03\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      124578963\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      500.00\n                  </td>\n                  <td class=\"text-primary\">\n                      PER;\n                  </td>\n                  <td class=\"text-primary\">\n                      CS;\n                  </td>\n              </tr>\n\n              <tr>\n                <td>\n                <mat-checkbox class=\"example-margin\" color=\"primary\"></mat-checkbox>\n              </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                    <button mat-mini-fab color=\"primary\" class=\"material-icons\" style=\"color:#fff;\">R</button>\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      15424\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      100\n                  </td>\n                  <td class=\"text-primary\">\n                      OFS OCEANA AB\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      2018/03/09\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      175426389\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      1500.00\n                  </td>\n                  <td class=\"text-primary\">\n                      PER;RAJ;\n                  </td>\n                  <td class=\"text-primary\">\n                      ARON;\n                  </td>\n              </tr>\n\n              <tr>\n                <td>\n                <mat-checkbox class=\"example-margin\" color=\"primary\"></mat-checkbox>\n              </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                    <button mat-mini-fab color=\"primary\" class=\"material-icons\" style=\"color:#fff;\">DG</button>\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      15423\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      102\n                  </td>\n                  <td class=\"text-primary\">\n                      CHENNAI SUPER KINGS AB\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      2018/01/26\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      1754284652\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      1800.00\n                  </td>\n                  <td class=\"text-primary\">\n                      CSK;\n                  </td>\n                  <td class=\"text-primary\">\n                      MIK;\n                  </td>\n              </tr>\n\n              <tr>\n                <td>\n                <mat-checkbox class=\"example-margin\"  color=\"primary\"></mat-checkbox>\n              </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                    <button mat-mini-fab color=\"primary\" class=\"material-icons\" style=\"color:#fff;\">M</button>\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      15421\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      190\n                  </td>\n                  <td class=\"text-primary\">\n                      OFS Tech AB\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      2018/01/03\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      155428389\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      5000.00\n                  </td>\n                  <td class=\"text-primary\">\n                      RAJ;\n                  </td>\n                  <td class=\"text-primary\">\n                      TECH;\n                  </td>\n              </tr>\n\n\n              <tr>\n                <td>\n                <mat-checkbox class=\"example-margin\" color=\"primary\"></mat-checkbox>\n              </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                    <button mat-mini-fab color=\"primary\" class=\"material-icons\" style=\"color:#fff;\">k</button>\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      15419\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      145\n                  </td>\n                  <td class=\"text-primary\">\n                      TEZ AB\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      2017/10/24\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      11586156\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      800.00\n                  </td>\n                  <td class=\"text-primary\">\n                      PER;\n                  </td>\n                  <td class=\"text-primary\">\n                      TEZ;\n                  </td>\n              </tr>\n\n\n\n              <tr>\n                <td>\n                <mat-checkbox class=\"example-margin\" color=\"primary\" ></mat-checkbox>\n              </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                    <button mat-mini-fab color=\"primary\" class=\"material-icons\" style=\"color:#fff;\">Ö</button>\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      15413\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      160\n                  </td>\n                  <td class=\"text-primary\">\n                      SWINX Phase II AB\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      2017/10/05\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      104526389\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      5500.00\n                  </td>\n                  <td class=\"text-primary\">\n                      PER;\n                  </td>\n                  <td class=\"text-primary\">\n                      PER;\n                  </td>\n              </tr>\n\n\n\n              <tr>\n                <td>\n                <mat-checkbox class=\"example-margin\" color=\"primary\" ></mat-checkbox>\n              </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                    <button mat-mini-fab color=\"primary\" class=\"material-icons\" style=\"color:#fff;\">R</button>\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      15400\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      230\n                  </td>\n                  <td class=\"text-primary\">\n                      AML AB\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      2017/09/25\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      175426666\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      500.00\n                  </td>\n                  <td class=\"text-primary\">\n                      PER;RAJ;\n                  </td>\n                  <td class=\"text-primary\">\n                      RAJ;\n                  </td>\n              </tr>\n\n\n\n              <tr>\n                <td>\n                <mat-checkbox class=\"example-margin\" color=\"primary\"></mat-checkbox>\n              </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                    <button mat-mini-fab color=\"primary\" class=\"material-icons\" style=\"color:#fff;\">A</button>\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      15350\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      089\n                  </td>\n                  <td class=\"text-primary\">\n                      ULTRON AB\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      2017/07/07\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      175477777\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      7700.00\n                  </td>\n                  <td class=\"text-primary\">\n                      MSD;\n                  </td >\n                  <td class=\"text-primary\">\n                      MSD;\n                  </td>\n              </tr>\n\n\n              <tr>\n                <td>\n                <mat-checkbox class=\"example-margin\" color=\"primary\"></mat-checkbox>\n              </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                    <button mat-mini-fab color=\"primary\" class=\"material-icons\" style=\"color:#fff;\">G</button>\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      15310\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      050\n                  </td>\n                  <td class=\"text-primary\">\n                      AVENGERS AB\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      2016/09/27\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      175412456\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      100.00\n                  </td>\n                  <td class=\"text-primary\">\n                      TS;CA;\n                  </td>\n                  <td class=\"text-primary\">\n                      NIK;\n                  </td>\n              </tr>\n            </tbody>\n      </table>\n  </div>\n\n  <mat-paginator [length]=\"30\"\n            [pageSize]=\"10\"\n            #paginator\n              [showFirstLastButtons]=\"true\" style=\"font-size:18px;\">\n  </mat-paginator>\n</div>\n"

/***/ }),

/***/ "./src/app/distributed/distributed.component.scss":
/*!********************************************************!*\
  !*** ./src/app/distributed/distributed.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table {\n  margin-top: 30px;\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 1rem;\n  background-color: transparent;\n  border: 0.5px solid #f0f0f0; }\n"

/***/ }),

/***/ "./src/app/distributed/distributed.component.ts":
/*!******************************************************!*\
  !*** ./src/app/distributed/distributed.component.ts ***!
  \******************************************************/
/*! exports provided: DistributedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistributedComponent", function() { return DistributedComponent; });
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

var DistributedComponent = /** @class */ (function () {
    function DistributedComponent() {
    }
    DistributedComponent.prototype.ngOnInit = function () {
    };
    DistributedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-distributed',
            template: __webpack_require__(/*! ./distributed.component.html */ "./src/app/distributed/distributed.component.html"),
            styles: [__webpack_require__(/*! ./distributed.component.scss */ "./src/app/distributed/distributed.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DistributedComponent);
    return DistributedComponent;
}());



/***/ }),

/***/ "./src/app/imported/imported.component.html":
/*!**************************************************!*\
  !*** ./src/app/imported/imported.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n<br>\r\n<br>\r\n<br>\r\n\r\n<div class=\"container\" style=\"background:#fff;\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n      <mat-tab-group style=\"margin-top: 30px;\">\r\n        <mat-tab label=\"Valid\">\r\n          <div class=\"table-responsive\">\r\n              <table class=\"table\">\r\n                  <thead class=\" text-primary\" style=\"color: #fff !important; background-color: #2e348a;\">\r\n                      <th>\r\n                          Serial No\r\n                      </th>\r\n                      <th>\r\n                          Supplier Name\r\n                      </th>\r\n                      <th>\r\n                          Invoice Due Date\r\n                      </th>\r\n                      <th>\r\n                          Invoice Date\r\n                      </th>\r\n                      <th>\r\n                          Invoice No\r\n                      </th>\r\n                      <th>\r\n                          Approver\r\n                      </th>\r\n                      <th>\r\n                          Supplier\r\n                      </th>\r\n                  </thead>\r\n                  <tbody>\r\n                      <tr>\r\n                          <td>\r\n                              15403\r\n                          </td>\r\n                          <td>\r\n                              SWINX AB\r\n                          </td>\r\n                          <td>\r\n                              2017/10/12\r\n                          </td>\r\n                          <td>\r\n                              810354\r\n                          </td>\r\n                          <td>\r\n                              -54000\r\n                          </td>\r\n                          <td >\r\n                              CS;RAJ;\r\n                          </td>\r\n                          <td >\r\n                              SA;\r\n                          </td>\r\n                      </tr>\r\n\r\n                          <tr>\r\n                              <td>\r\n                                  15216\r\n                              </td>\r\n                              <td>\r\n                                  KINDLE AB\r\n                              </td>\r\n                              <td>\r\n                                  2016/04/25\r\n                              </td>\r\n                              <td>\r\n                                  56434\r\n                              </td>\r\n                              <td>\r\n                                  -10\r\n                              </td>\r\n                              <td >\r\n                                  RR;\r\n                              </td>\r\n                              <td >\r\n                                  HR;DR;\r\n                              </td>\r\n                          </tr>\r\n                  </tbody>\r\n              </table>\r\n          </div>\r\n\r\n\r\n\r\n        </mat-tab>\r\n\r\n        <mat-tab label=\"Invalid\">\r\n          <div class=\"table-responsive\">\r\n              <table class=\"table\">\r\n                  <thead class=\" text-primary\" style=\"color: #fff !important; background-color: #2e348a;\">\r\n                    <th>\r\n                    <mat-checkbox class=\"example-margin\"  color=\"primary\" [(ngModel)]=\"checked\"></mat-checkbox>\r\n                    </th>\r\n                      <th>\r\n                          Key\r\n                      </th>\r\n                      <th>\r\n                          Number\r\n                      </th>\r\n                      <th>\r\n                          Name\r\n                      </th>\r\n                  </thead>\r\n                  <tbody>\r\n                      <tr>\r\n                          <td>\r\n                              <mat-checkbox class=\"example-margin\"  color=\"primary\" [(ngModel)]=\"checked\"></mat-checkbox>\r\n                          </td>\r\n                          <td>\r\n                                0000FA.PDF\r\n                          </td>\r\n                          <td>\r\n                                00000004FA.XML\r\n                          </td>\r\n                          <td>\r\n                              \tFinns inge översättning för 000004FA.XML (canon.xtr)!\r\n                          </td>\r\n                      </tr>\r\n                  </tbody>\r\n              </table>\r\n          </div>\r\n\r\n\r\n\r\n\r\n        </mat-tab>\r\n      </mat-tab-group>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/imported/imported.component.scss":
/*!**************************************************!*\
  !*** ./src/app/imported/imported.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/imported/imported.component.ts":
/*!************************************************!*\
  !*** ./src/app/imported/imported.component.ts ***!
  \************************************************/
/*! exports provided: ImportedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportedComponent", function() { return ImportedComponent; });
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

var ImportedComponent = /** @class */ (function () {
    function ImportedComponent() {
    }
    ImportedComponent.prototype.ngOnInit = function () {
    };
    ImportedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-imported',
            template: __webpack_require__(/*! ./imported.component.html */ "./src/app/imported/imported.component.html"),
            styles: [__webpack_require__(/*! ./imported.component.scss */ "./src/app/imported/imported.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ImportedComponent);
    return ImportedComponent;
}());



/***/ }),

/***/ "./src/app/invoicedetail/invoicedetail.component.html":
/*!************************************************************!*\
  !*** ./src/app/invoicedetail/invoicedetail.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n\r\n<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-7 col-lg-7 col-sm-12 col-xs-12\" style=\"background:#fff;\">\r\n      <br>\r\n      <button mat-mini-fab color=\"primary\" style=\"margin-left:10px;\"><i class=\"material-icons\"  matTooltip=\"Save\">save</i></button>\r\n      <button mat-mini-fab color=\"primary\" style=\"margin-left:10px;\"><i class=\"material-icons\"  matTooltip=\"Reload\">replay</i></button>\r\n      <button mat-mini-fab color=\"primary\" style=\"margin-left:10px;\"><i class=\"material-icons\"  matTooltip=\"Delete Images\">grid_off</i></button>\r\n      <button mat-mini-fab color=\"primary\" style=\"margin-left:10px;\"><i class=\"material-icons\"  matTooltip=\"Add Images\">add_photo_alternate</i></button>\r\n\r\n      <button mat-mini-fab color=\"primary\" style=\"margin-left:10px;\"><i class=\"material-icons\"  matTooltip=\"Approve\">done</i></button>\r\n      <button mat-mini-fab color=\"primary\" style=\"margin-left:10px;\"><i class=\"material-icons\"  matTooltip=\"Calculate Templete\">local_hospital</i></button>\r\n      <button mat-mini-fab color=\"primary\" class=\"material-icons\" style=\"color:#fff; margin-left:10px;\" matTooltip=\"Park\">V</button>\r\n      <button mat-mini-fab color=\"primary\" style=\"margin-left:10px;\"><i class=\"material-icons\"  matTooltip=\"Delete\">delete</i></button>\r\n      <br>\r\n      <br>\r\n      <mat-tab-group>\r\n        <mat-tab label=\"Codings\">\r\n          <form class=\"example-form\">\r\n            &nbsp; &nbsp;&nbsp;\r\n            <p style=\"font-weight:700; margin-left:15px;\">INVOICE</p>\r\n\r\n            <div class=\"col-md-12 col-lg-12 col-sm-12 col-xs-12\">\r\n              <table class=\"example-full-width\" cellspacing=\"0\" class=\"col-md-6 col-lg-6 col-sm-12 col-xs-6\">\r\n                <tr>\r\n                  <td>\r\n                    <mat-form-field class=\"example-full-width\">\r\n                      <input matInput placeholder=\"Supplier\" value=\"18\">\r\n                    </mat-form-field>\r\n                  </td>\r\n                  <td>\r\n                    <mat-form-field class=\"example-full-width\">\r\n                      <input matInput placeholder=\"Invoice Amount\" value=\"15000\">\r\n                    </mat-form-field>\r\n                  </td>\r\n                  <td>\r\n                    <mat-form-field>\r\n                      <input matInput [matDatepicker]=\"picker\" placeholder=\"Invoice date \" [value]=\"date.value\">\r\n                      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                      <mat-datepicker #picker></mat-datepicker>\r\n                    </mat-form-field>\r\n                  </td>\r\n\r\n                </tr>\r\n                <tr>\r\n                  <td>\r\n                    <mat-form-field class=\"example-full-width\">\r\n                      <input matInput placeholder=\"Supplier Name \" value=\"SWINX AB\">\r\n                    </mat-form-field>\r\n                  </td>\r\n                  <td>\r\n                    <mat-form-field class=\"example-full-width\">\r\n                      <input matInput placeholder=\"Invoice No\" value=\"154350012\">\r\n                    </mat-form-field>\r\n                  </td>\r\n                  <td>\r\n                    <mat-form-field>\r\n                      <input matInput [matDatepicker]=\"picker2\" placeholder=\"Invoice  Due date \" [value]=\"date.value\">\r\n                      <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n                      <mat-datepicker #picker2></mat-datepicker>\r\n                    </mat-form-field>\r\n                  </td>\r\n                </tr>\r\n                <tr style=\"border-bottom:1px solid #cacaca;\">\r\n                  <td>\r\n                    <mat-form-field class=\"example-full-width\">\r\n                      <input matInput placeholder=\"Exchange rate\" value=\"1.000\">\r\n                    </mat-form-field>\r\n                  </td>\r\n                  <td>\r\n                    <mat-form-field class=\"example-full-width\">\r\n                      <input matInput placeholder=\"project\" value=\"SWINX AB\">\r\n                    </mat-form-field>\r\n                  </td>\r\n                  <td>\r\n                    <mat-form-field class=\"example-full-width\">\r\n                      <input matInput placeholder=\"Cost Center\" value=\"OFS TECH\">\r\n                    </mat-form-field>\r\n                  </td>\r\n                </tr>\r\n\r\n                <p style=\"margin-top:10px;font-weight:700;\"> CERTIFIER </p>\r\n                <tr style=\"border-bottom:1px solid #cacaca;\">\r\n                  <td>\r\n                    <mat-form-field class=\"example-full-width\" (click)=\"openDialog()\">\r\n                      <input matInput placeholder=\"Certifier\" value=\"PER;RAJ;\">\r\n                    </mat-form-field>\r\n                  </td>\r\n                  <td>\r\n                    <mat-form-field class=\"example-full-width\">\r\n                      <input matInput placeholder=\"Approver\" value=\"CS;\">\r\n                    </mat-form-field>\r\n                  </td>\r\n                  <td>\r\n                    <mat-slide-toggle class=\"example-margin\" [color]=\"primary\" [checked]=\"checked\" [disabled]=\"disabled\" style=\"margin-left:30px;\">\r\n                      Credit\r\n                    </mat-slide-toggle>\r\n                    <br>\r\n                    <mat-slide-toggle class=\"example-margin\" [color]=\"primary\" [checked]=\"checked\" [disabled]=\"disabled\" style=\"margin-left:30px;\">\r\n                      Discretion\r\n                    </mat-slide-toggle>\r\n                  </td>\r\n                </tr>\r\n              </table>\r\n            </div>\r\n          </form>\r\n          <div class=\"table\" style=\"width:95%; font-size: 14px !important;\">\r\n            <div class=\"tr th\" style=\"color:#fff; background-color:#2e348a;\">\r\n              <div class=\"td\">\r\n                Acc\r\n              </div>\r\n              <div class=\"td\" style=\"flex-grow: 2;\">\r\n                Info\r\n              </div>\r\n              <div class=\"td\">\r\n                Amt\r\n              </div>\r\n              <div class=\"td\">\r\n                project\r\n              </div>\r\n              <div class=\"td\">\r\n                Cost\r\n              </div>\r\n              <div class=\"td\">\r\n                Debit\r\n              </div>\r\n              <div class=\"td\">\r\n                Credit\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"tr\">\r\n              <div class=\"td\" style=\"justify-content: flex-end;\">\r\n                <span>1002</span>\r\n              </div>\r\n              <div class=\"td\" style=\"flex-grow: 2; justify-content: center;\">\r\n                <span>  Stark Accounts</span>\r\n              </div>\r\n              <div class=\"td\" style=\"justify-content: center;\">\r\n                <span>  10000.00</span>\r\n              </div>\r\n              <div class=\"td\" style=\"justify-content: center;\">\r\n                <span>  OFS</span>\r\n              </div>\r\n              <div class=\"td\" style=\"justify-content: flex-end;\">\r\n                <span>  VK</span>\r\n              </div>\r\n              <div class=\"td\" style=\"justify-content: flex-end;\">\r\n                <span>  100.00</span>\r\n              </div>\r\n              <div class=\"td\" style=\"justify-content: flex-end;\">\r\n                <span>  0.00</span>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"tr\">\r\n              <div class=\"td\" style=\"justify-content: flex-end;\">\r\n                <span>1012</span>\r\n              </div>\r\n              <div class=\"td\" style=\"flex-grow: 2; justify-content: center;\">\r\n                <span> Cap Accounts</span>\r\n              </div>\r\n              <div class=\"td\" style=\"justify-content: center;\">\r\n                <span>  500.00</span>\r\n              </div>\r\n              <div class=\"td\" style=\"justify-content: center;\">\r\n                <span>  VISMA</span>\r\n              </div>\r\n              <div class=\"td\" style=\"justify-content: flex-end;\">\r\n                <span>  OFS</span>\r\n              </div>\r\n              <div class=\"td\" style=\"justify-content: flex-end;\">\r\n                <span>  1200.00</span>\r\n              </div>\r\n              <div class=\"td\" style=\"justify-content: flex-end;\">\r\n                <span>  0.00</span>\r\n              </div>\r\n            </div>\r\n\r\n\r\n          </div>\r\n\r\n          <br>\r\n          <br>\r\n        </mat-tab>\r\n        <mat-tab label=\"Savings\">\r\n          <div class=\"item\">\r\n            <span class=\"material-icons\">publish</span>\r\n            <div>Status changed on exported invoice </div>\r\n            <p>\r\n              <strong>USER NAME</strong> : Per-Åke AronssonX\r\n              <strong>TRANSSACTION DATE</strong> : 2018/05/07 13:11:22\r\n            </p>\r\n          </div>\r\n          <div class=\"item\">\r\n            <span class=\"material-icons\">verified_user</span>\r\n            <div>Certified</div>\r\n            <p>\r\n              <strong>USER NAME</strong> : Per-Åke AronssonX\r\n              <strong>TRANSSACTION DATE</strong> : 2018/05/04 19:57:13\r\n            </p>\r\n          </div>\r\n          <div class=\"item\">\r\n            <span class=\"material-icons\">check_circle</span>\r\n            <div>Approved</div>\r\n            <p>\r\n              <strong>USER NAME</strong> : Per-Åke AronssonX\r\n              <strong>TRANSSACTION DATE</strong> : 2018/05/04 19:56:10\r\n            </p>\r\n          </div>\r\n          <div class=\"item\">\r\n            <span class=\"material-icons\">how_to_reg</span>\r\n            <div>Registered</div>\r\n            <p>\r\n              <strong>USER NAME</strong> : Per-Åke AronssonX\r\n              <strong>TRANSSACTION DATE</strong> : 2018/05/04 19:54:35\r\n            </p>\r\n          </div>\r\n\r\n        </mat-tab>\r\n      </mat-tab-group>\r\n    </div>\r\n\r\n    <div class=\"col-md-4 col-lg-4 col-sm-12 col-xs-12\" style=\"background:#fff;\">\r\n      <img src=\"/assets/img/invoice1.jpg\" width=\"350px\" style=\"border: 1px solid; margin: 50px 50px 10px 50px;\" />\r\n      <mat-button-toggle-group #group=\"matButtonToggleGroup\" class=\"example-selected-value\">\r\n        <mat-button-toggle value=\"left\">\r\n          <mat-icon>navigate_before</mat-icon>\r\n        </mat-button-toggle>\r\n        <mat-button-toggle value=\"center\">\r\n          <mat-icon>zoom_in</mat-icon>\r\n        </mat-button-toggle>\r\n        <mat-button-toggle value=\"right\">\r\n          <mat-icon>zoom_out</mat-icon>\r\n        </mat-button-toggle>\r\n        <mat-button-toggle value=\"justify\">\r\n          <mat-icon>navigate_next</mat-icon>\r\n        </mat-button-toggle>\r\n      </mat-button-toggle-group>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/invoicedetail/invoicedetail.component.scss":
/*!************************************************************!*\
  !*** ./src/app/invoicedetail/invoicedetail.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* width */\n::-webkit-scrollbar {\n  width: 10px; }\n/* Track */\n::-webkit-scrollbar-track {\n  background: #f1f1f1; }\n/* Handle */\n::-webkit-scrollbar-thumb {\n  background: #888; }\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n  background: #555; }\n.example-selected-value {\n  align-items: center;\n  margin: 10px;\n  margin-left: 25%; }\n.mat-form-field-label-wrapper {\n  font-size: 15px;\n  color: #2e348a  !important; }\n.table {\n  display: flex;\n  flex-flow: column nowrap;\n  margin: 0.5rem;\n  line-height: 1.5;\n  border-bottom: 1px solid #d0d0d0;\n  flex: 1 1 auto; }\n.th {\n  display: flex;\n  width: 100%;\n  font-weight: 500;\n  background-color: #f2f2f2; }\n.th > .td {\n  white-space: normal;\n  justify-content: center; }\n.tr {\n  width: 100%;\n  display: flex;\n  flex-flow: row nowrap; }\n.td {\n  display: flex;\n  flex-flow: row nowrap;\n  flex-grow: 1;\n  flex-basis: 0;\n  padding: 1em;\n  word-break: break-word;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  min-width: 0px;\n  white-space: nowrap;\n  border-bottom: 1px solid #d0d0d0; }\n.th[_ngcontent-c5] {\n  display: flex;\n  width: 100%;\n  font-weight: 300;\n  background-color: #f2f2f2; }\n.td[_ngcontent-c5] {\n  padding: 1em; }\n.table[_ngcontent-c5] {\n  font-size: 13px !important;\n  border: 1px solid #efefefed; }\ninput.mat-input-element {\n  font-size: 14px !important;\n  margin-top: -.0625em; }\n.mat-form-field {\n  margin: 3px !important; }\n.table[_ngcontent-c5][_ngcontent-c5] {\n  border: 1px solid #efefefed;\n  width: 95%; }\n@media (min-width: 992px) {\n  .col-lg-4 {\n    margin-left: 25px;\n    flex: 0 0 33.33333333%;\n    max-width: 33.33333333%; }\n  .col-lg-7 {\n    margin-left: 30px;\n    flex: 0 0 58.33333333%;\n    max-width: 58.33333333%; } }\n.item {\n  position: relative;\n  margin: 20px;\n  border-left: 3px dashed #2e348a;\n  padding: 10px 40px; }\n.item > span {\n  position: absolute;\n  width: 40px;\n  height: 40px;\n  font-size: 20px;\n  text-align: center;\n  line-height: 40px;\n  border-radius: 100%;\n  left: -20px;\n  top: 0;\n  color: #fff;\n  background: #2e348a; }\n.item div {\n  font-size: 18px;\n  font-weight: bold; }\n.item p {\n  margin-top: 15px; }\nmat-tooltip {\n  font-size: 20px;\n  color: #fff;\n  background: #000;\n  border-radius: 2px;\n  margin: 14px;\n  max-width: 250px;\n  padding-left: 8px;\n  padding-right: 8px; }\n::ng-deep .mat-tooltip {\n  font-size: 16px;\n  color: #3f51b5;\n  border-radius: 2px;\n  margin: 14px;\n  max-width: 200px;\n  padding-left: 5px;\n  padding-right: 5px; }\n@media (min-width: 992px) {\n  .col-lg-6 {\n    flex: 0 0 50%;\n    max-width: 95%; } }\n"

/***/ }),

/***/ "./src/app/invoicedetail/invoicedetail.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/invoicedetail/invoicedetail.component.ts ***!
  \**********************************************************/
/*! exports provided: InvoicedetailComponent, invoicedetailpopup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicedetailComponent", function() { return InvoicedetailComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invoicedetailpopup", function() { return invoicedetailpopup; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
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



var InvoicedetailComponent = /** @class */ (function () {
    function InvoicedetailComponent(dialog) {
        this.dialog = dialog;
        this.date = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](new Date());
        this.serializedDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((new Date()).toISOString());
    }
    InvoicedetailComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(invoicedetailpopup, {
            width: '450px',
            data: { CertifierName: this.CertifierName, Certifier: this.Certifier }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.CertifierName = result;
        });
    };
    InvoicedetailComponent.prototype.ngOnInit = function () {
    };
    InvoicedetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-invoicedetail',
            template: __webpack_require__(/*! ./invoicedetail.component.html */ "./src/app/invoicedetail/invoicedetail.component.html"),
            styles: [__webpack_require__(/*! ./invoicedetail.component.scss */ "./src/app/invoicedetail/invoicedetail.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], InvoicedetailComponent);
    return InvoicedetailComponent;
}());

var invoicedetailpopup = /** @class */ (function () {
    function invoicedetailpopup(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    invoicedetailpopup.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    invoicedetailpopup = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'invoicedetailpopup',
            template: __webpack_require__(/*! ./invoicedetail.popup.html */ "./src/app/invoicedetail/invoicedetail.popup.html"),
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], invoicedetailpopup);
    return invoicedetailpopup;
}());



/***/ }),

/***/ "./src/app/invoicedetail/invoicedetail.popup.html":
/*!********************************************************!*\
  !*** ./src/app/invoicedetail/invoicedetail.popup.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"popupdiv\">\r\n <h1 mat-dialog-title>  CERTIFIER </h1>\r\n<div mat-dialog-content>\r\n  <mat-form-field>\r\n    <input matInput value=\"PER;RAJ;\">\r\n  </mat-form-field>\r\n\r\n\r\n\r\n  <div class=\"table-responsive\">\r\n      <table class=\"table\">\r\n          <thead class=\" text-primary\" style=\"color: #fff !important; background-color: #2e348a;\">\r\n             <th>\r\n             <mat-checkbox class=\"example-margin\"  color=\"primary\"  ></mat-checkbox>\r\n             </th>\r\n              <th>\r\n                  Approver Code\r\n              </th>\r\n              <th>\r\n                  Approver Name\r\n              </th>\r\n          </thead>\r\n          <tbody>\r\n              <tr>\r\n                <td>\r\n                <mat-checkbox class=\"example-margin\" color=\"primary\" ></mat-checkbox>\r\n              </td>\r\n                  <td>\r\n                    RAJ\r\n                  </td>\r\n                  <td>\r\n                    Rajkamal\r\n                  </td>\r\n              </tr>\r\n              <tr>\r\n                <td>\r\n                <mat-checkbox class=\"example-margin\" color=\"primary\"></mat-checkbox>\r\n              </td>\r\n                  <td>\r\n                    RAM\r\n                  </td>\r\n                  <td>\r\n                    Ramanathan\r\n                  </td>\r\n              </tr>\r\n              <tr>\r\n                <td>\r\n                <mat-checkbox class=\"example-margin\" color=\"primary\" ></mat-checkbox>\r\n              </td>\r\n                  <td>\r\n                    PER\r\n                  </td>\r\n                  <td>\r\n                    PER ARRONSON\r\n                  </td>\r\n              </tr>\r\n              <tr>\r\n                <td>\r\n                <mat-checkbox class=\"example-margin\" color=\"primary\" ></mat-checkbox>\r\n              </td>\r\n                  <td>\r\n                    HAL\r\n                  </td>\r\n                  <td>\r\n                    HALLIL\r\n                  </td>\r\n              </tr>\r\n              <tr>\r\n                <td>\r\n                <mat-checkbox class=\"example-margin\" color=\"primary\" ></mat-checkbox>\r\n              </td>\r\n                  <td>\r\n                    CS\r\n                  </td>\r\n                  <td>\r\n                    CERTIFIER SOURCE\r\n                  </td>\r\n              </tr>\r\n              <tr>\r\n                <td>\r\n                <mat-checkbox class=\"example-margin\" color=\"primary\" ></mat-checkbox>\r\n              </td>\r\n                  <td>\r\n                   XIA\r\n                  </td>\r\n                  <td>\r\n                    OFS\r\n                  </td>\r\n              </tr>\r\n</tbody>\r\n</table>\r\n</div>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button (click)=\"onNoClick()\">Cancel</button>\r\n  <button mat-button [mat-dialog-close]=\"data.CertifierName\" cdkFocusInitial>OK</button>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.module.ts ***!
  \*************************************************************/
/*! exports provided: AdminLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutModule", function() { return AdminLayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _admin_layout_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-layout.routing */ "./src/app/layouts/admin-layout/admin-layout.routing.ts");
/* harmony import */ var _suppliers_list_suppliers_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../suppliers-list/suppliers-list.component */ "./src/app/suppliers-list/suppliers-list.component.ts");
/* harmony import */ var _to_approve_to_approve_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../to-approve/to-approve.component */ "./src/app/to-approve/to-approve.component.ts");
/* harmony import */ var _sentinvoice_sentinvoice_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../sentinvoice/sentinvoice.component */ "./src/app/sentinvoice/sentinvoice.component.ts");
/* harmony import */ var _parked_parked_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../parked/parked.component */ "./src/app/parked/parked.component.ts");
/* harmony import */ var _notregistered_notregistered_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../notregistered/notregistered.component */ "./src/app/notregistered/notregistered.component.ts");
/* harmony import */ var _imported_imported_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../imported/imported.component */ "./src/app/imported/imported.component.ts");
/* harmony import */ var _distributed_distributed_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../distributed/distributed.component */ "./src/app/distributed/distributed.component.ts");
/* harmony import */ var _countersigned_countersigned_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../countersigned/countersigned.component */ "./src/app/countersigned/countersigned.component.ts");
/* harmony import */ var _allinvoices_allinvoices_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../allinvoices/allinvoices.component */ "./src/app/allinvoices/allinvoices.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _costcenters_costcenters_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../costcenters/costcenters.component */ "./src/app/costcenters/costcenters.component.ts");
/* harmony import */ var _accounts_accounts_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../accounts/accounts.component */ "./src/app/accounts/accounts.component.ts");
/* harmony import */ var _properties_properties_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../properties/properties.component */ "./src/app/properties/properties.component.ts");
/* harmony import */ var _company_company_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../company/company.component */ "./src/app/company/company.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _createtemplate_createtemplate_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../createtemplate/createtemplate.component */ "./src/app/createtemplate/createtemplate.component.ts");
/* harmony import */ var _invoicedetail_invoicedetail_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../invoicedetail/invoicedetail.component */ "./src/app/invoicedetail/invoicedetail.component.ts");
/* harmony import */ var _project_list_project_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../project-list/project-list.component */ "./src/app/project-list/project-list.component.ts");
/* harmony import */ var _costcenter_list_costcenter_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../costcenter-list/costcenter-list.component */ "./src/app/costcenter-list/costcenter-list.component.ts");
/* harmony import */ var _account_list_account_list_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../account-list/account-list.component */ "./src/app/account-list/account-list.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var AdminLayoutModule = /** @class */ (function () {
    function AdminLayoutModule() {
    }
    AdminLayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_admin_layout_routing__WEBPACK_IMPORTED_MODULE_4__["AdminLayoutRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatTooltipModule"],
            ],
            entryComponents: [_invoicedetail_invoicedetail_component__WEBPACK_IMPORTED_MODULE_21__["invoicedetailpopup"]],
            declarations: [
                _suppliers_list_suppliers_list_component__WEBPACK_IMPORTED_MODULE_5__["SuppliersListComponent"],
                _to_approve_to_approve_component__WEBPACK_IMPORTED_MODULE_6__["ToApproveComponent"],
                _sentinvoice_sentinvoice_component__WEBPACK_IMPORTED_MODULE_7__["SentinvoiceComponent"],
                _parked_parked_component__WEBPACK_IMPORTED_MODULE_8__["ParkedComponent"],
                _notregistered_notregistered_component__WEBPACK_IMPORTED_MODULE_9__["NotregisteredComponent"],
                _imported_imported_component__WEBPACK_IMPORTED_MODULE_10__["ImportedComponent"],
                _distributed_distributed_component__WEBPACK_IMPORTED_MODULE_11__["DistributedComponent"],
                _countersigned_countersigned_component__WEBPACK_IMPORTED_MODULE_12__["CountersignedComponent"],
                _allinvoices_allinvoices_component__WEBPACK_IMPORTED_MODULE_13__["AllinvoicesComponent"],
                _projects_projects_component__WEBPACK_IMPORTED_MODULE_14__["ProjectsComponent"],
                _costcenters_costcenters_component__WEBPACK_IMPORTED_MODULE_15__["CostcentersComponent"],
                _accounts_accounts_component__WEBPACK_IMPORTED_MODULE_16__["AccountsComponent"],
                _properties_properties_component__WEBPACK_IMPORTED_MODULE_17__["PropertiesComponent"],
                _company_company_component__WEBPACK_IMPORTED_MODULE_18__["CompanyComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_19__["UserComponent"],
                _createtemplate_createtemplate_component__WEBPACK_IMPORTED_MODULE_20__["CreatetemplateComponent"],
                _invoicedetail_invoicedetail_component__WEBPACK_IMPORTED_MODULE_21__["InvoicedetailComponent"],
                _invoicedetail_invoicedetail_component__WEBPACK_IMPORTED_MODULE_21__["invoicedetailpopup"],
                _project_list_project_list_component__WEBPACK_IMPORTED_MODULE_22__["ProjectListComponent"],
                _costcenter_list_costcenter_list_component__WEBPACK_IMPORTED_MODULE_23__["CostcenterListComponent"],
                _account_list_account_list_component__WEBPACK_IMPORTED_MODULE_24__["AccountListComponent"],
            ]
        })
    ], AdminLayoutModule);
    return AdminLayoutModule;
}());



/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.routing.ts":
/*!**************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.routing.ts ***!
  \**************************************************************/
/*! exports provided: AdminLayoutRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutRoutes", function() { return AdminLayoutRoutes; });
/* harmony import */ var _suppliers_list_suppliers_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../suppliers-list/suppliers-list.component */ "./src/app/suppliers-list/suppliers-list.component.ts");
/* harmony import */ var _to_approve_to_approve_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../to-approve/to-approve.component */ "./src/app/to-approve/to-approve.component.ts");
/* harmony import */ var _sentinvoice_sentinvoice_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../sentinvoice/sentinvoice.component */ "./src/app/sentinvoice/sentinvoice.component.ts");
/* harmony import */ var _parked_parked_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../parked/parked.component */ "./src/app/parked/parked.component.ts");
/* harmony import */ var _notregistered_notregistered_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../notregistered/notregistered.component */ "./src/app/notregistered/notregistered.component.ts");
/* harmony import */ var _imported_imported_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../imported/imported.component */ "./src/app/imported/imported.component.ts");
/* harmony import */ var _distributed_distributed_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../distributed/distributed.component */ "./src/app/distributed/distributed.component.ts");
/* harmony import */ var _countersigned_countersigned_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../countersigned/countersigned.component */ "./src/app/countersigned/countersigned.component.ts");
/* harmony import */ var _allinvoices_allinvoices_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../allinvoices/allinvoices.component */ "./src/app/allinvoices/allinvoices.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _costcenters_costcenters_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../costcenters/costcenters.component */ "./src/app/costcenters/costcenters.component.ts");
/* harmony import */ var _accounts_accounts_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../accounts/accounts.component */ "./src/app/accounts/accounts.component.ts");
/* harmony import */ var _properties_properties_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../properties/properties.component */ "./src/app/properties/properties.component.ts");
/* harmony import */ var _company_company_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../company/company.component */ "./src/app/company/company.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _createtemplate_createtemplate_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../createtemplate/createtemplate.component */ "./src/app/createtemplate/createtemplate.component.ts");
/* harmony import */ var _invoicedetail_invoicedetail_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../invoicedetail/invoicedetail.component */ "./src/app/invoicedetail/invoicedetail.component.ts");
/* harmony import */ var _project_list_project_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../project-list/project-list.component */ "./src/app/project-list/project-list.component.ts");
/* harmony import */ var _costcenter_list_costcenter_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../costcenter-list/costcenter-list.component */ "./src/app/costcenter-list/costcenter-list.component.ts");
/* harmony import */ var _account_list_account_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../account-list/account-list.component */ "./src/app/account-list/account-list.component.ts");




















var AdminLayoutRoutes = [
    { path: 'suppliersList', component: _suppliers_list_suppliers_list_component__WEBPACK_IMPORTED_MODULE_0__["SuppliersListComponent"] },
    { path: 'toapprove', component: _to_approve_to_approve_component__WEBPACK_IMPORTED_MODULE_1__["ToApproveComponent"] },
    { path: 'sentinvoice', component: _sentinvoice_sentinvoice_component__WEBPACK_IMPORTED_MODULE_2__["SentinvoiceComponent"] },
    { path: 'parked', component: _parked_parked_component__WEBPACK_IMPORTED_MODULE_3__["ParkedComponent"] },
    { path: 'notregistered', component: _notregistered_notregistered_component__WEBPACK_IMPORTED_MODULE_4__["NotregisteredComponent"] },
    { path: 'imported', component: _imported_imported_component__WEBPACK_IMPORTED_MODULE_5__["ImportedComponent"] },
    { path: 'distributed', component: _distributed_distributed_component__WEBPACK_IMPORTED_MODULE_6__["DistributedComponent"] },
    { path: 'countersigned', component: _countersigned_countersigned_component__WEBPACK_IMPORTED_MODULE_7__["CountersignedComponent"] },
    { path: 'allinvoices', component: _allinvoices_allinvoices_component__WEBPACK_IMPORTED_MODULE_8__["AllinvoicesComponent"] },
    { path: 'projects', component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_9__["ProjectsComponent"] },
    { path: 'costcenters', component: _costcenters_costcenters_component__WEBPACK_IMPORTED_MODULE_10__["CostcentersComponent"] },
    { path: 'accounts', component: _accounts_accounts_component__WEBPACK_IMPORTED_MODULE_11__["AccountsComponent"] },
    { path: 'properties', component: _properties_properties_component__WEBPACK_IMPORTED_MODULE_12__["PropertiesComponent"] },
    { path: 'company', component: _company_company_component__WEBPACK_IMPORTED_MODULE_13__["CompanyComponent"] },
    { path: 'user', component: _user_user_component__WEBPACK_IMPORTED_MODULE_14__["UserComponent"] },
    { path: 'createtemplate', component: _createtemplate_createtemplate_component__WEBPACK_IMPORTED_MODULE_15__["CreatetemplateComponent"] },
    { path: 'invoicedetail', component: _invoicedetail_invoicedetail_component__WEBPACK_IMPORTED_MODULE_16__["InvoicedetailComponent"] },
    { path: 'ProjectList', component: _project_list_project_list_component__WEBPACK_IMPORTED_MODULE_17__["ProjectListComponent"] },
    { path: 'CostcenterList', component: _costcenter_list_costcenter_list_component__WEBPACK_IMPORTED_MODULE_18__["CostcenterListComponent"] },
    { path: 'AccountList', component: _account_list_account_list_component__WEBPACK_IMPORTED_MODULE_19__["AccountListComponent"] },
];


/***/ }),

/***/ "./src/app/notregistered/notregistered.component.html":
/*!************************************************************!*\
  !*** ./src/app/notregistered/notregistered.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<br>\n<br>\n<br>\n<div class=\"container\" style=\"background-color:#fff;\">\n\n  <br>\n  <button mat-mini-fab color=\"primary\" style=\"margin-left:30px;\"><i class=\"material-icons\"  matTooltip=\"Create Invoice\">add_circle</i></button>\n  <button mat-mini-fab color=\"primary\" style=\"margin-left:30px;\"><i class=\"material-icons\"  matTooltip=\"Delete Images\">delete</i></button>\n  <button mat-mini-fab color=\"primary\" type=\"file\" style=\"margin-left:30px;\"><i class=\"material-icons\"  matTooltip=\"Upload Images\">open_in_browser</i></button>\n\n\n  <form class=\"navbar-form\">\n      <div class=\"input-group no-border justify-content-end\">\n        Showing  &nbsp;&nbsp; <input type=\"text\" value=\"6\" class=\"form-control\" placeholder=\"Enter No images to Display\" style=\"max-width:100px; width:100px; margin-top:-5px;\">\n          <button mat-raised-button type=\"submit\" class=\"btn btn-blue btn-round btn-just-icon\" style=\"margin-top:-5px;\">\n              <i class=\"material-icons\">search</i>\n              <div class=\"ripple-container\"></div>\n          </button> &nbsp; &nbsp;Images\n      </div>\n  </form>\n\n    <br>\n  <br>\n      <div class=\"row\" style=\"margin:20px;\">\n        <div class=\"col-md-2\">\n          <div style=\"border: 1px solid #000; padding:10px;\">\n                  <img src=\"/assets/img/invoice.jpg\"  height=\"170px\" width=\"130px\" />\n                  <br>\n                  <mat-checkbox class=\"example-margin\" color=\"primary\" ></mat-checkbox>\n                  <div style=\"align-content:center; display:inline-flex; padding-left:20px;\" >1 of 1</div>\n        </div>\n        </div>\n        <div class=\"col-md-2\">\n          <div style=\"border: 1px solid #000; padding:10px;\">\n                  <img src=\"/assets/img/invoice1.jpg\"  height=\"170px\" width=\"130px\" />\n                  <br>\n                  <mat-checkbox class=\"example-margin\" color=\"primary\" ></mat-checkbox>\n                  <div style=\"align-content:center; display:inline-flex; padding-left:20px;\" >1 of 1</div>\n        </div>\n        </div>\n        <div class=\"col-md-2\">\n          <div style=\"border: 1px solid #000; padding:10px;\">\n                  <img src=\"/assets/img/invoice.jpg\"  height=\"170px\" width=\"130px\" />\n                  <br>\n                  <mat-checkbox class=\"example-margin\" color=\"primary\" ></mat-checkbox>\n                  <div style=\"align-content:center; display:inline-flex; padding-left:20px;\" >1 of 1</div>\n        </div>\n        </div>\n        <div class=\"col-md-2\">\n          <div style=\"border: 1px solid #000; padding:10px;\">\n                  <img src=\"/assets/img/invoice2.jpg\"  height=\"170px\" width=\"130px\" />\n                  <br>\n                  <mat-checkbox class=\"example-margin\" color=\"primary\" ></mat-checkbox>\n                  <div style=\"align-content:center; display:inline-flex; padding-left:20px;\" >1 of 1</div>\n        </div>\n        </div>\n        <div class=\"col-md-2\">\n          <div style=\"border: 1px solid #000; padding:10px;\">\n                  <img src=\"/assets/img/invoice1.jpg\"  height=\"170px\" width=\"130px\" />\n                  <br>\n                  <mat-checkbox class=\"example-margin\" color=\"primary\" ></mat-checkbox>\n                  <div style=\"align-content:center; display:inline-flex; padding-left:20px;\" >1 of 1</div>\n        </div>\n        </div>\n        <div class=\"col-md-2\">\n          <div style=\"border: 1px solid #000; padding:10px;\">\n                  <img src=\"/assets/img/invoice2.jpg\"  height=\"170px\" width=\"130px\" />\n                  <br>\n                  <mat-checkbox class=\"example-margin\" color=\"primary\" ></mat-checkbox>\n                  <div style=\"align-content:center; display:inline-flex; padding-left:20px;\" >1 of 1</div>\n        </div>\n        </div>\n      </div>\n</div>\n"

/***/ }),

/***/ "./src/app/notregistered/notregistered.component.scss":
/*!************************************************************!*\
  !*** ./src/app/notregistered/notregistered.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  min-height: 70%;\n  width: 100%; }\n\nmat-tooltip {\n  font-size: 20px;\n  color: #fff;\n  background: #000;\n  border-radius: 2px;\n  margin: 14px;\n  max-width: 250px;\n  padding-left: 8px;\n  padding-right: 8px; }\n\n::ng-deep .mat-tooltip {\n  font-size: 16px;\n  color: #3f51b5;\n  border-radius: 2px;\n  margin: 14px;\n  max-width: 200px;\n  padding-left: 5px;\n  padding-right: 5px; }\n"

/***/ }),

/***/ "./src/app/notregistered/notregistered.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/notregistered/notregistered.component.ts ***!
  \**********************************************************/
/*! exports provided: NotregisteredComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotregisteredComponent", function() { return NotregisteredComponent; });
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

var NotregisteredComponent = /** @class */ (function () {
    function NotregisteredComponent() {
    }
    NotregisteredComponent.prototype.ngOnInit = function () {
    };
    NotregisteredComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notregistered',
            template: __webpack_require__(/*! ./notregistered.component.html */ "./src/app/notregistered/notregistered.component.html"),
            styles: [__webpack_require__(/*! ./notregistered.component.scss */ "./src/app/notregistered/notregistered.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NotregisteredComponent);
    return NotregisteredComponent;
}());



/***/ }),

/***/ "./src/app/parked/parked.component.html":
/*!**********************************************!*\
  !*** ./src/app/parked/parked.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<br>\n<br>\n\n\n<div class=\"container\" style=\"background:#fff;\">\n  <div class=\"table-responsive\">\n      <table class=\"table\">\n          <thead class=\" text-primary\" style=\"color: #fff !important; background-color: #2e348a;\">\n             <th>\n             <mat-checkbox class=\"example-margin\"  color=\"primary\" [(ngModel)]=\"checked\"></mat-checkbox>\n             </th>\n              <th>\n                  Status\n              </th>\n              <th>\n                  Serial no\n              </th>\n              <th>\n                  Doc no\n              </th>\n              <th>\n                  supplier Name\n              </th>\n              <th>\n                  Invoice Date\n              </th>\n              <th>\n                  Invoice no\n              </th>\n              <th>\n                  Total\n              </th>\n              <th>\n                  Approver\n              </th>\n              <th>\n                  Certifier\n              </th>\n          </thead>\n          <tbody>\n              <tr>\n                <td>\n                <mat-checkbox class=\"example-margin\" color=\"primary\" [(ngModel)]=\"checked\"></mat-checkbox>\n              </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                    <button mat-mini-fab color=\"primary\" class=\"material-icons\" style=\"color:#fff;\">V</button>\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      15810\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      126\n                  </td>\n                  <td class=\"text-primary\">\n                      SWINX AB\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      2018/05/03\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      124578963\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      500.00\n                  </td>\n                  <td class=\"text-primary\">\n                      PER;\n                  </td>\n                  <td class=\"text-primary\">\n                      CS;\n                  </td>\n              </tr>\n\n              <tr>\n                <td>\n                <mat-checkbox class=\"example-margin\" color=\"primary\"></mat-checkbox>\n              </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                    <button mat-mini-fab color=\"primary\" class=\"material-icons\" style=\"color:#fff;\">V</button>\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      15941\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      112\n                  </td>\n                  <td class=\"text-primary\">\n                      OFS OCEANA AB\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      2018/03/09\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      175426389\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      1500.00\n                  </td>\n                  <td class=\"text-primary\">\n                      PER;RAJ;\n                  </td>\n                  <td class=\"text-primary\">\n                      ARON;\n                  </td>\n              </tr>\n\n              <tr>\n                <td>\n                <mat-checkbox class=\"example-margin\" color=\"primary\"></mat-checkbox>\n              </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                    <button mat-mini-fab color=\"primary\" class=\"material-icons\" style=\"color:#fff;\">V</button>\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      15612\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      310\n                  </td>\n                  <td class=\"text-primary\">\n                      CHENNAI SUPER KINGS AB\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      2018/01/26\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      1754284652\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      1800.00\n                  </td>\n                  <td class=\"text-primary\">\n                      CSK;\n                  </td>\n                  <td class=\"text-primary\">\n                      MIK;\n                  </td>\n              </tr>\n\n              <tr>\n                <td>\n                <mat-checkbox class=\"example-margin\"  color=\"primary\"></mat-checkbox>\n              </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                    <button mat-mini-fab color=\"primary\" class=\"material-icons\" style=\"color:#fff;\">V</button>\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      15975\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      190\n                  </td>\n                  <td class=\"text-primary\">\n                      OFS Tech AB\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      2018/01/03\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      155428389\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      5000.00\n                  </td>\n                  <td class=\"text-primary\">\n                      RAJ;\n                  </td>\n                  <td class=\"text-primary\">\n                      TECH;\n                  </td>\n              </tr>\n\n\n              <tr>\n                <td>\n                <mat-checkbox class=\"example-margin\" color=\"primary\"></mat-checkbox>\n              </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                    <button mat-mini-fab color=\"primary\" class=\"material-icons\" style=\"color:#fff;\">V</button>\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      15321\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      198\n                  </td>\n                  <td class=\"text-primary\">\n                      TEZ AB\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      2017/10/24\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      11586156\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      800.00\n                  </td>\n                  <td class=\"text-primary\">\n                      PER;\n                  </td>\n                  <td class=\"text-primary\">\n                      TEZ;\n                  </td>\n              </tr>\n\n\n\n              <tr>\n                <td>\n                <mat-checkbox class=\"example-margin\" color=\"primary\" ></mat-checkbox>\n              </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                    <button mat-mini-fab color=\"primary\" class=\"material-icons\" style=\"color:#fff;\">V</button>\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      15789\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      189\n                  </td>\n                  <td class=\"text-primary\">\n                      SWINX Phase II AB\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      2017/10/05\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      104526389\n                  </td>\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      5500.00\n                  </td>\n                  <td class=\"text-primary\">\n                      PER;\n                  </td>\n                  <td class=\"text-primary\">\n                      PER;\n                  </td>\n              </tr>\n\n            </tbody>\n      </table>\n  </div>\n\n  <mat-paginator [length]=\"30\"\n            [pageSize]=\"10\"\n            #paginator\n              [showFirstLastButtons]=\"true\" style=\"font-size:18px;\">\n  </mat-paginator>\n</div>\n"

/***/ }),

/***/ "./src/app/parked/parked.component.scss":
/*!**********************************************!*\
  !*** ./src/app/parked/parked.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table {\n  margin-top: 30px;\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 1rem;\n  background-color: transparent;\n  border: 0.5px solid #f0f0f0; }\n"

/***/ }),

/***/ "./src/app/parked/parked.component.ts":
/*!********************************************!*\
  !*** ./src/app/parked/parked.component.ts ***!
  \********************************************/
/*! exports provided: ParkedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParkedComponent", function() { return ParkedComponent; });
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

var ParkedComponent = /** @class */ (function () {
    function ParkedComponent() {
    }
    ParkedComponent.prototype.ngOnInit = function () {
    };
    ParkedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-parked',
            template: __webpack_require__(/*! ./parked.component.html */ "./src/app/parked/parked.component.html"),
            styles: [__webpack_require__(/*! ./parked.component.scss */ "./src/app/parked/parked.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ParkedComponent);
    return ParkedComponent;
}());



/***/ }),

/***/ "./src/app/project-list/project-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/project-list/project-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n<br>\r\n<br>\r\n<hr>\r\n<div class=\"container\" style=\"background:#fff;\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-9 col-sm-9 col-xs-9\" style=\"margin-top: 30px;\">\r\n      <p><strong  style=\"font-weight:800\">Project ID :</strong> 123 </p>\r\n      <form class=\"navbar-form\" style=\"margin-top:20px;\">\r\n          <div class=\"input-group no-border \">\r\n            <label for=\"Certifier\" style=\"font-weight:700; margin-left:30px;\">Approver</label>\r\n            <input type=\"text\"  class=\"form-control\" placeholder=\"Approver\" value=\"PER; DK;\" style=\"max-width:200px; width:200px; margin-top:-5px; margin-left:5px;\">\r\n            <button mat-raised-button type=\"submit\" class=\"btn btn-blue btn-round btn-just-icon\" style=\"margin-top:-5px; background: #2e348a;\">\r\n                  <i class=\"material-icons\">search</i>\r\n                  <div class=\"ripple-container\"></div>\r\n              </button>\r\n              <label for=\"Certifier\" style=\"font-weight:700; margin-left:30px;\">Certifier</label>\r\n              <input type=\"text\"  class=\"form-control\" placeholder=\"Certifier\" value=\"RAJ;\" style=\"max-width:200px; width:200px; margin-top:-5px; margin-left:5px;\">\r\n            <button mat-raised-button type=\"submit\" class=\"btn btn-blue btn-round btn-just-icon\" style=\"margin-top:-5px; background: #2e348a;\">\r\n                  <i class=\"material-icons\">search</i>\r\n                  <div class=\"ripple-container\"></div>\r\n              </button>\r\n          </div>\r\n      </form>\r\n    </div>\r\n    <div class=\"col-md-3 col-sm-3 col-xs-3\">\r\n      <button mat-mini-fab color=\"primary\" style=\"margin-right: 10px;   top:10px; right: 91px; position: absolute;\"><i class=\"material-icons\"  matTooltip=\"Save\">save</i></button>\r\n      <button mat-mini-fab color=\"primary\"  style=\"color:#fff; margin-right:10px;  top:10px;  right: 45px; position: absolute;\" matTooltip=\"Cancel\"><i class=\"material-icons\">cancel</i></button>\r\n      <button mat-mini-fab color=\"primary\" style=\"margin-right:10px;  top:10px; right: 0px; position: absolute;\"><i class=\"material-icons\"  matTooltip=\"Merge\">merge_type</i></button>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"table-responsive\">\r\n      <table class=\"table\">\r\n          <thead class=\" text-primary\" style=\"color: #fff !important; background-color: #2e348a;\">\r\n             <th>\r\n             <mat-checkbox class=\"example-margin\"  color=\"primary\" [(ngModel)]=\"checked\"></mat-checkbox>\r\n             </th>\r\n              <th>\r\n                  Status\r\n              </th>\r\n              <th>\r\n                  Serial no\r\n              </th>\r\n              <th>\r\n                  Doc no\r\n              </th>\r\n              <th>\r\n                  supplier Name\r\n              </th>\r\n              <th>\r\n                  Invoice Date\r\n              </th>\r\n              <th>\r\n                  Invoice no\r\n              </th>\r\n              <th>\r\n                  Total\r\n              </th>\r\n              <th>\r\n                  Approver\r\n              </th>\r\n              <th>\r\n                  Certifier\r\n              </th>\r\n          </thead>\r\n          <tbody>\r\n              <tr>\r\n                <td>\r\n                <mat-checkbox class=\"example-margin\" color=\"primary\" [(ngModel)]=\"checked\"></mat-checkbox>\r\n              </td>\r\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\r\n                    <button mat-mini-fab color=\"primary\" class=\"material-icons\" style=\"color:#fff;\">A</button>\r\n                  </td>\r\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\r\n                      15425\r\n                  </td>\r\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\r\n                      127\r\n                  </td>\r\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\" class=\"text-primary\">\r\n                      SWINX AB\r\n                  </td>\r\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\r\n                      2018/05/03\r\n                  </td>\r\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\r\n                      124578963\r\n                  </td>\r\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\r\n                      500.00\r\n                  </td>\r\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\" class=\"text-primary\">\r\n                      PER;\r\n                  </td>\r\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\" class=\"text-primary\">\r\n                      CS;\r\n                  </td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td>\r\n                <mat-checkbox class=\"example-margin\" color=\"primary\"></mat-checkbox>\r\n              </td>\r\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\r\n                    <button mat-mini-fab color=\"primary\" class=\"material-icons\" style=\"color:#fff;\">R</button>\r\n                  </td>\r\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\r\n                      15424\r\n                  </td>\r\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\r\n                      100\r\n                  </td>\r\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\" class=\"text-primary\">\r\n                      OFS OCEANA AB\r\n                  </td>\r\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\r\n                      2018/03/09\r\n                  </td>\r\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\r\n                      175426389\r\n                  </td>\r\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\r\n                      1500.00\r\n                  </td>\r\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\" class=\"text-primary\">\r\n                      PER;RAJ;\r\n                  </td>\r\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\" class=\"text-primary\">\r\n                      ARON;\r\n                  </td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td>\r\n                <mat-checkbox class=\"example-margin\" color=\"primary\"></mat-checkbox>\r\n              </td>\r\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\r\n                    <button mat-mini-fab color=\"primary\" class=\"material-icons\" style=\"color:#fff;\">DG</button>\r\n                  </td>\r\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\r\n                      15423\r\n                  </td>\r\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\r\n                      102\r\n                  </td>\r\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\" class=\"text-primary\">\r\n                      CHENNAI SUPER KINGS AB\r\n                  </td>\r\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\r\n                      2018/01/26\r\n                  </td>\r\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\r\n                      1754284652\r\n                  </td>\r\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\r\n                      1800.00\r\n                  </td>\r\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\" class=\"text-primary\">\r\n                      CSK;\r\n                  </td>\r\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\" class=\"text-primary\">\r\n                      MIK;\r\n                  </td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td>\r\n                <mat-checkbox class=\"example-margin\"  color=\"primary\"></mat-checkbox>\r\n              </td>\r\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\r\n                    <button mat-mini-fab color=\"primary\" class=\"material-icons\" style=\"color:#fff;\">M</button>\r\n                  </td>\r\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\r\n                      15421\r\n                  </td>\r\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\r\n                      190\r\n                  </td>\r\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\" class=\"text-primary\">\r\n                      OFS Tech AB\r\n                  </td>\r\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\r\n                      2018/01/03\r\n                  </td>\r\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\r\n                      155428389\r\n                  </td>\r\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\r\n                      5000.00\r\n                  </td>\r\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\" class=\"text-primary\">\r\n                      RAJ;\r\n                  </td>\r\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\" class=\"text-primary\">\r\n                      TECH;\r\n                  </td>\r\n              </tr>\r\n\r\n\r\n\r\n\r\n              <tr>\r\n                <td>\r\n                <mat-checkbox class=\"example-margin\" color=\"primary\" ></mat-checkbox>\r\n              </td>\r\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\r\n                    <button mat-mini-fab color=\"primary\" class=\"material-icons\" style=\"color:#fff;\">Ö</button>\r\n                  </td>\r\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\r\n                      15413\r\n                  </td>\r\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\r\n                      160\r\n                  </td>\r\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\" class=\"text-primary\">\r\n                      SWINX Phase II AB\r\n                  </td>\r\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\r\n                      2017/10/05\r\n                  </td>\r\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\r\n                      104526389\r\n                  </td>\r\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\r\n                      5500.00\r\n                  </td>\r\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\" class=\"text-primary\">\r\n                      PER;\r\n                  </td>\r\n                  <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\" class=\"text-primary\">\r\n                      PER;\r\n                  </td>\r\n              </tr>\r\n\r\n\r\n\r\n\r\n            </tbody>\r\n      </table>\r\n  </div>\r\n\r\n  <mat-paginator [length]=\"30\"\r\n            [pageSize]=\"10\"\r\n            #paginator\r\n              [showFirstLastButtons]=\"true\" style=\"font-size:18px;\">\r\n  </mat-paginator>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/project-list/project-list.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/project-list/project-list.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table {\n  margin-top: 30px;\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 1rem;\n  background-color: transparent;\n  border: 0.5px solid #f0f0f0; }\n"

/***/ }),

/***/ "./src/app/project-list/project-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/project-list/project-list.component.ts ***!
  \********************************************************/
/*! exports provided: ProjectListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectListComponent", function() { return ProjectListComponent; });
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

var ProjectListComponent = /** @class */ (function () {
    function ProjectListComponent() {
    }
    ProjectListComponent.prototype.ngOnInit = function () {
    };
    ProjectListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project-list',
            template: __webpack_require__(/*! ./project-list.component.html */ "./src/app/project-list/project-list.component.html"),
            styles: [__webpack_require__(/*! ./project-list.component.scss */ "./src/app/project-list/project-list.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectListComponent);
    return ProjectListComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects.component.html":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<br>\n<br>\n<br>\n\n\n<div class=\"container\" style=\"background:#fff;\">\n  <div class=\"table-responsive\">\n    <p style=\"margin-top:20px;font-weight:700;\"> Project - List </p>\n\n      <form class=\"navbar-form\">\n          <div class=\"input-group no-border justify-content-end\">\n            <input type=\"text\"  class=\"form-control\" placeholder=\"Enter To search Project\" style=\"max-width:200px; width:200px; margin-top:-5px;\">\n            <button mat-raised-button type=\"submit\" class=\"btn btn-blue btn-round btn-just-icon\" style=\"margin-top:-5px;\">\n                  <i class=\"material-icons\">search</i>\n                  <div class=\"ripple-container\"></div>\n              </button>\n          </div>\n      </form>\n\n      <table class=\"table\">\n          <thead class=\" text-primary\" style=\"color: #fff !important; background-color: #2e348a;\">\n              <th>\n                  No\n              </th>\n              <th>\n                  Name\n              </th>\n\n              <th>\n                  Approver\n              </th>\n              <th>\n                  Certifier\n              </th>\n          </thead>\n          <tbody routerLinkActive=\"active\" [routerLink]=\"['/ProjectList']\">\n              <tr>\n                  <td>\n                      12\n                  </td>\n                  <td>\n                    SWINX\n                  </td>\n\n                  <td class=\"text-primary\">\n                      PER;\n                  </td>\n                  <td class=\"text-primary\">\n                      RAJ;\n                  </td>\n              </tr>\n\n              <tr>\n                  <td>\n                      16\n                  </td>\n                  <td>\n                      VISMA GROUPS\n                  </td>\n\n                  <td class=\"text-primary\">\n                      PER;RAJ:\n                  </td>\n                  <td class=\"text-primary\">\n                      RAJ;HAL;ALV;\n                  </td>\n              </tr>\n\n              <tr>\n                  <td>\n                      5\n                  </td>\n                  <td>\n                      OFS TECHNOLOGIES\n                  </td>\n\n                  <td class=\"text-primary\">\n                      RAI:\n                  </td>\n                  <td class=\"text-primary\">\n                      MSD;\n                  </td>\n              </tr>\n\n              <tr>\n                  <td>\n                      19\n                  </td>\n\n                      <td>\n                          FORTNOX\n                      </td>\n\n                  <td class=\"text-primary\">\n                      MSD;\n                  </td>\n                  <td class=\"text-primary\">\n                      ABD;VK;\n                  </td>\n              </tr>\n          </tbody>\n      </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/projects/projects.component.scss":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table {\n  margin-top: 30px;\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 1rem;\n  background-color: transparent;\n  border: 0.5px solid #f0f0f0; }\n"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
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

var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.scss */ "./src/app/projects/projects.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/properties/properties.component.html":
/*!******************************************************!*\
  !*** ./src/app/properties/properties.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  properties works!\n</p>\n"

/***/ }),

/***/ "./src/app/properties/properties.component.scss":
/*!******************************************************!*\
  !*** ./src/app/properties/properties.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/properties/properties.component.ts":
/*!****************************************************!*\
  !*** ./src/app/properties/properties.component.ts ***!
  \****************************************************/
/*! exports provided: PropertiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertiesComponent", function() { return PropertiesComponent; });
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

var PropertiesComponent = /** @class */ (function () {
    function PropertiesComponent() {
    }
    PropertiesComponent.prototype.ngOnInit = function () {
    };
    PropertiesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-properties',
            template: __webpack_require__(/*! ./properties.component.html */ "./src/app/properties/properties.component.html"),
            styles: [__webpack_require__(/*! ./properties.component.scss */ "./src/app/properties/properties.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PropertiesComponent);
    return PropertiesComponent;
}());



/***/ }),

/***/ "./src/app/sentinvoice/sentinvoice.component.html":
/*!********************************************************!*\
  !*** ./src/app/sentinvoice/sentinvoice.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <br>\n  <br>\n  <br>\n  <br>\n\n\n  <div class=\"container\" style=\"background:#fff;\">\n    <div class=\"table-responsive\">\n        <table class=\"table\">\n            <thead class=\" text-primary\" style=\"color: #fff !important; background-color: #2e348a;\">\n               <th>\n               <mat-checkbox class=\"example-margin\"  color=\"primary\" [(ngModel)]=\"checked\"></mat-checkbox>\n               </th>\n                <th>\n                    Status\n                </th>\n                <th>\n                    Serial no\n                </th>\n                <th>\n                    Doc no\n                </th>\n                <th>\n                    supplier Name\n                </th>\n                <th>\n                    Invoice Date\n                </th>\n                <th>\n                    Invoice no\n                </th>\n                <th>\n                    Total\n                </th>\n                <th>\n                    Approver\n                </th>\n                <th>\n                    Certifier\n                </th>\n            </thead>\n            <tbody>\n                <tr>\n                  <td>\n                  <mat-checkbox class=\"example-margin\" color=\"primary\" [(ngModel)]=\"checked\"></mat-checkbox>\n                </td>\n                    <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      <button mat-mini-fab color=\"primary\" class=\"material-icons\" style=\"color:#fff;\">A</button>\n                    </td>\n                    <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                        15425\n                    </td>\n                    <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                        127\n                    </td>\n                    <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\" class=\"text-primary\">\n                        SWINX AB\n                    </td>\n                    <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                        2018/05/03\n                    </td>\n                    <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                        124578963\n                    </td>\n                    <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                        500.00\n                    </td>\n                    <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\" class=\"text-primary\">\n                        PER;\n                    </td>\n                    <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\" class=\"text-primary\">\n                        CS;\n                    </td>\n                </tr>\n\n                <tr>\n                  <td>\n                  <mat-checkbox class=\"example-margin\" color=\"primary\"></mat-checkbox>\n                </td>\n                    <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      <button mat-mini-fab color=\"primary\" class=\"material-icons\" style=\"color:#fff;\">R</button>\n                    </td>\n                    <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                        15424\n                    </td>\n                    <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                        100\n                    </td>\n                    <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\" class=\"text-primary\">\n                        OFS OCEANA AB\n                    </td>\n                    <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                        2018/03/09\n                    </td>\n                    <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                        175426389\n                    </td>\n                    <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                        1500.00\n                    </td>\n                    <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\" class=\"text-primary\">\n                        PER;RAJ;\n                    </td>\n                    <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\" class=\"text-primary\">\n                        ARON;\n                    </td>\n                </tr>\n\n                <tr>\n                  <td>\n                  <mat-checkbox class=\"example-margin\" color=\"primary\"></mat-checkbox>\n                </td>\n                    <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      <button mat-mini-fab color=\"primary\" class=\"material-icons\" style=\"color:#fff;\">DG</button>\n                    </td>\n                    <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                        15423\n                    </td>\n                    <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                        102\n                    </td>\n                    <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\" class=\"text-primary\">\n                        CHENNAI SUPER KINGS AB\n                    </td>\n                    <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                        2018/01/26\n                    </td>\n                    <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                        1754284652\n                    </td>\n                    <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                        1800.00\n                    </td>\n                    <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\" class=\"text-primary\">\n                        CSK;\n                    </td>\n                    <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\" class=\"text-primary\">\n                        MIK;\n                    </td>\n                </tr>\n\n                <tr>\n                  <td>\n                  <mat-checkbox class=\"example-margin\"  color=\"primary\"></mat-checkbox>\n                </td>\n                    <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      <button mat-mini-fab color=\"primary\" class=\"material-icons\" style=\"color:#fff;\">M</button>\n                    </td>\n                    <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                        15421\n                    </td>\n                    <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                        190\n                    </td>\n                    <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\" class=\"text-primary\">\n                        OFS Tech AB\n                    </td>\n                    <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                        2018/01/03\n                    </td>\n                    <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                        155428389\n                    </td>\n                    <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                        5000.00\n                    </td>\n                    <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\" class=\"text-primary\">\n                        RAJ;\n                    </td>\n                    <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\" class=\"text-primary\">\n                        TECH;\n                    </td>\n                </tr>\n\n\n                <tr>\n                  <td>\n                  <mat-checkbox class=\"example-margin\" color=\"primary\"></mat-checkbox>\n                </td>\n                    <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      <button mat-mini-fab color=\"primary\" class=\"material-icons\" style=\"color:#fff;\">k</button>\n                    </td>\n                    <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                        15419\n                    </td>\n                    <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                        145\n                    </td>\n                    <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\" class=\"text-primary\">\n                        TEZ AB\n                    </td>\n                    <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                        2017/10/24\n                    </td>\n                    <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                        11586156\n                    </td>\n                    <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                        800.00\n                    </td>\n                    <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\" class=\"text-primary\">\n                        PER;\n                    </td>\n                    <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\" class=\"text-primary\">\n                        TEZ;\n                    </td>\n                </tr>\n\n\n\n                <tr>\n                  <td>\n                  <mat-checkbox class=\"example-margin\" color=\"primary\" ></mat-checkbox>\n                </td>\n                    <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      <button mat-mini-fab color=\"primary\" class=\"material-icons\" style=\"color:#fff;\">Ö</button>\n                    </td>\n                    <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                        15413\n                    </td>\n                    <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                        160\n                    </td>\n                    <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\" class=\"text-primary\">\n                        SWINX Phase II AB\n                    </td>\n                    <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                        2017/10/05\n                    </td>\n                    <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                        104526389\n                    </td>\n                    <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                        5500.00\n                    </td>\n                    <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\" class=\"text-primary\">\n                        PER;\n                    </td>\n                    <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\" class=\"text-primary\">\n                        PER;\n                    </td>\n                </tr>\n\n\n\n                <tr>\n                  <td>\n                  <mat-checkbox class=\"example-margin\" color=\"primary\" ></mat-checkbox>\n                </td>\n                    <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      <button mat-mini-fab color=\"primary\" class=\"material-icons\" style=\"color:#fff;\">R</button>\n                    </td>\n                    <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                        15400\n                    </td>\n                    <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                        230\n                    </td>\n                    <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\" class=\"text-primary\">\n                        AML AB\n                    </td>\n                    <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                        2017/09/25\n                    </td>\n                    <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                        175426666\n                    </td>\n                    <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                        500.00\n                    </td>\n                    <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\" class=\"text-primary\">\n                        PER;RAJ;\n                    </td>\n                    <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\" class=\"text-primary\">\n                        RAJ;\n                    </td>\n                </tr>\n\n\n\n                <tr>\n                  <td>\n                  <mat-checkbox class=\"example-margin\" color=\"primary\"></mat-checkbox>\n                </td>\n                    <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      <button mat-mini-fab color=\"primary\" class=\"material-icons\" style=\"color:#fff;\">A</button>\n                    </td>\n                    <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                        15350\n                    </td>\n                    <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                        089\n                    </td>\n                    <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\" class=\"text-primary\">\n                        ULTRON AB\n                    </td>\n                    <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                        2017/07/07\n                    </td>\n                    <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                        175477777\n                    </td>\n                    <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                        7700.00\n                    </td>\n                    <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\" class=\"text-primary\">\n                        MSD;\n                    </td >\n                    <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\" class=\"text-primary\">\n                        MSD;\n                    </td>\n                </tr>\n\n\n                <tr>\n                  <td>\n                  <mat-checkbox class=\"example-margin\" color=\"primary\"></mat-checkbox>\n                </td>\n                    <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                      <button mat-mini-fab color=\"primary\" class=\"material-icons\" style=\"color:#fff;\">G</button>\n                    </td>\n                    <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                        15310\n                    </td>\n                    <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                        050\n                    </td>\n                    <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\" class=\"text-primary\">\n                        AVENGERS AB\n                    </td>\n                    <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                        2016/09/27\n                    </td>\n                    <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                        175412456\n                    </td>\n                    <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\">\n                        100.00\n                    </td>\n                    <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\" class=\"text-primary\">\n                        TS;CA;\n                    </td>\n                    <td routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\" class=\"text-primary\">\n                        NIK;\n                    </td>\n                </tr>\n              </tbody>\n        </table>\n    </div>\n\n    <mat-paginator [length]=\"30\"\n              [pageSize]=\"10\"\n              #paginator\n                [showFirstLastButtons]=\"true\" style=\"font-size:18px;\">\n    </mat-paginator>\n  </div>\n"

/***/ }),

/***/ "./src/app/sentinvoice/sentinvoice.component.scss":
/*!********************************************************!*\
  !*** ./src/app/sentinvoice/sentinvoice.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table {\n  margin-top: 30px;\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 1rem;\n  background-color: transparent;\n  border: 0.5px solid #f0f0f0; }\n"

/***/ }),

/***/ "./src/app/sentinvoice/sentinvoice.component.ts":
/*!******************************************************!*\
  !*** ./src/app/sentinvoice/sentinvoice.component.ts ***!
  \******************************************************/
/*! exports provided: SentinvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SentinvoiceComponent", function() { return SentinvoiceComponent; });
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

var SentinvoiceComponent = /** @class */ (function () {
    function SentinvoiceComponent() {
    }
    SentinvoiceComponent.prototype.ngOnInit = function () {
    };
    SentinvoiceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sentinvoice',
            template: __webpack_require__(/*! ./sentinvoice.component.html */ "./src/app/sentinvoice/sentinvoice.component.html"),
            styles: [__webpack_require__(/*! ./sentinvoice.component.scss */ "./src/app/sentinvoice/sentinvoice.component.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], SentinvoiceComponent);
    return SentinvoiceComponent;
}());



/***/ }),

/***/ "./src/app/suppliers-list/suppliers-list.component.html":
/*!**************************************************************!*\
  !*** ./src/app/suppliers-list/suppliers-list.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<br>\n<br>\n<br>\n\n\n<div class=\"container\" style=\"background:#fff;\">\n  <div class=\"table-responsive\">\n      <table class=\"table\">\n          <thead class=\" text-primary\" style=\"color: #fff !important; background-color: #2e348a;\">\n              <th>\n                  No\n              </th>\n              <th>\n                  Name\n              </th>\n              <th>\n                  Cost Account\n              </th>\n              <th>\n                  Bank Number\n              </th>\n              <th>\n                  Approver\n              </th>\n              <th>\n                  Certifier\n              </th>\n          </thead>\n          <tbody>\n              <tr>\n                  <td>\n                      12\n                  </td>\n                  <td>\n                      SWINX AB\n                  </td>\n                  <td>\n                      1001\n                  </td>\n                  <td>\n                      193-12132\n                  </td>\n                  <td class=\"text-primary\">\n                      PER;\n                  </td>\n                  <td class=\"text-primary\">\n                      RAJ;\n                  </td>\n              </tr>\n\n              <tr>\n                  <td>\n                      16\n                  </td>\n                  <td>\n                      OCEANA GROUPS\n                  </td>\n                  <td>\n                      1035\n                  </td>\n                  <td>\n                      19233-132\n                  </td>\n                  <td class=\"text-primary\">\n                      PER;RAJ:\n                  </td>\n                  <td class=\"text-primary\">\n                      RAJ;HAL;ALV;\n                  </td>\n              </tr>\n\n              <tr>\n                  <td>\n                      5\n                  </td>\n                  <td>\n                      OFS TECHNOLOGIES\n                  </td>\n                  <td>\n                      1325\n                  </td>\n                  <td>\n                      19232-3132\n                  </td>\n                  <td class=\"text-primary\">\n                      RAI:\n                  </td>\n                  <td class=\"text-primary\">\n                      MSD;\n                  </td>\n              </tr>\n\n              <tr>\n                  <td>\n                      19\n                  </td>\n                  <td>\n                      CHENNAI SUPER KINGS\n                  </td>\n                  <td>\n                      1546\n                  </td>\n                  <td>\n                      14673-164732\n                  </td>\n                  <td class=\"text-primary\">\n                      MSD;\n                  </td>\n                  <td class=\"text-primary\">\n                      ABD;VK;\n                  </td>\n              </tr>\n          </tbody>\n      </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/suppliers-list/suppliers-list.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/suppliers-list/suppliers-list.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table {\n  margin-top: 30px;\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 1rem;\n  background-color: transparent;\n  border: 0.5px solid #f0f0f0; }\n"

/***/ }),

/***/ "./src/app/suppliers-list/suppliers-list.component.ts":
/*!************************************************************!*\
  !*** ./src/app/suppliers-list/suppliers-list.component.ts ***!
  \************************************************************/
/*! exports provided: SuppliersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuppliersListComponent", function() { return SuppliersListComponent; });
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

var SuppliersListComponent = /** @class */ (function () {
    function SuppliersListComponent() {
    }
    SuppliersListComponent.prototype.ngOnInit = function () {
    };
    SuppliersListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-suppliers-list',
            template: __webpack_require__(/*! ./suppliers-list.component.html */ "./src/app/suppliers-list/suppliers-list.component.html"),
            styles: [__webpack_require__(/*! ./suppliers-list.component.scss */ "./src/app/suppliers-list/suppliers-list.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SuppliersListComponent);
    return SuppliersListComponent;
}());



/***/ }),

/***/ "./src/app/to-approve/to-approve.component.html":
/*!******************************************************!*\
  !*** ./src/app/to-approve/to-approve.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<br>\n<br>\n<br>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-7 col-lg-7 col-sm-12 col-xs-12\" style=\"background:#fff;\">\n  <form class=\"example-form\">\n    <div  class=\"col-md-12 col-lg-12 col-sm-12 col-xs-12\">\n  <table class=\"example-full-width\" cellspacing=\"0\" class=\"col-md-6 col-lg-6 col-sm-12 col-xs-6\"><tr>\n    <td><mat-form-field class=\"example-full-width\" >\n      <input matInput placeholder=\"Type\" value=\"Debit Invoice\">\n    </mat-form-field></td>\n    <td><mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"Serial No\" value=\"15345\">\n    </mat-form-field></td>\n    <td><mat-form-field class=\"example-full-width\">\n      <input matInput #postalCode maxlength=\"5\" placeholder=\"Status\" value=\"Registrerad\">\n  </mat-form-field></td>\n\n  </tr>\n  <tr>\n    <td><mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"Supplier\" value=\"18\">\n    </mat-form-field></td>\n    <td><mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"Supplier Name\" value=\"Swinx AB\">\n    </mat-form-field></td>\n    <td><mat-form-field class=\"example-full-width\">\n      <input matInput #postalCode maxlength=\"5\" placeholder=\"invoice Amount(SEK)\" value=\"5,000.00\">\n    </mat-form-field></td>\n\n  </tr>\n  <tr>\n    <td>\n    <mat-form-field>\n      <input matInput [matDatepicker]=\"picker\" placeholder=\"Invoice due date \" [value]=\"date.value\">\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n      <mat-datepicker #picker></mat-datepicker>\n    </mat-form-field>\n  </td>\n    <td><mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"Approver\" value=\"CS;PER;ANRO;\" >\n    </mat-form-field></td>\n    <td><mat-form-field class=\"example-full-width\">\n      <input matInput #postalCode maxlength=\"5\" placeholder=\"Certifier\" value=\"SA;RAJ;\" >\n      <!-- <mat-hint align=\"end\">{{postalCode.value.length}} / 5</mat-hint> -->\n    </mat-form-field></td>\n\n  </tr>\n</table>\n<button mat-raised-button color=\"primary\" routerLinkActive=\"active\" [routerLink]=\"['/invoicedetail']\" >View Details</button>\n<button mat-raised-button color=\"primary\" style=\"margin-left:20px;\">Approve</button>\n</div>\n</form>\n<div class=\"table\" style=\"font-size: 14px !important;\">\n  <div class=\"tr th\" style=\"color:#fff; background-color:#2e348a;\">\n    <div class=\"td\">\n      Acc\n    </div>\n    <div class=\"td\"   style=\"flex-grow: 2;\">\n    Info\n    </div>\n    <div class=\"td\">\n        Amt\n    </div>\n    <div class=\"td\">\n      project\n    </div>\n    <div class=\"td\">\n    cost\n    </div>\n    <div class=\"td\">\n      Debit\n    </div>\n    <div class=\"td\">\n      Credit\n    </div>\n  </div>\n\n  <div class=\"tr\">\n    <div class=\"td\" style=\"justify-content: flex-end;\">\n      <span>1002</span>\n    </div>\n    <div class=\"td\"\n      style=\"flex-grow: 2; justify-content:  flex-start;\">\n      <span>  SwinxAccounts</span>\n    </div>\n    <div class=\"td\"\n      style=\"justify-content: center;\">\n      <span>  10000.00</span>\n    </div>\n    <div class=\"td\"\n      style=\"justify-content: flex-start;\">\n      <span>  OFS</span>\n    </div>\n    <div class=\"td\"\n      style=\"justify-content: flex-start;\">\n      <span>  VK</span>\n    </div>\n    <div class=\"td\"\n      style=\"justify-content: flex-end;\">\n      <span>  100.00</span>\n    </div>\n    <div class=\"td\"\n      style=\"justify-content: flex-end;\">\n      <span>  0.00</span>\n    </div>\n  </div>\n  <div class=\"tr\">\n    <div class=\"td\"\n      style=\"justify-content: flex-end;\">\n      <span>1023</span>\n    </div>\n    <div class=\"td\"\n      style=\" flex-grow: 2; justify-content: flex-start;\">\n      <span>  GoogleAccounts</span>\n    </div>\n    <div class=\"td\"\n      style=\"justify-content: center;\">\n      <span>  1500.00</span>\n    </div>\n    <div class=\"td\"\n      style=\"justify-content:  flex-start;\">\n      <span>  SWINX</span>\n    </div>\n    <div class=\"td\"\n      style=\"justify-content:  flex-start;\">\n      <span>  OFS</span>\n    </div>\n    <div class=\"td\"\n      style=\"justify-content: flex-end;\">\n      <span>  2000.00</span>\n    </div>\n    <div class=\"td\"\n      style=\"justify-content: flex-end;\">\n      <span>  500.00</span>\n    </div>\n  </div>\n\n  <div class=\"tr\">\n    <div class=\"td\"\n      style=\"justify-content: flex-end;\">\n      <span>1300</span>\n    </div>\n    <div class=\"td\"\n      style=\" flex-grow: 2; justify-content:  flex-start;\">\n      <span>Microsoft Billing</span>\n    </div>\n    <div class=\"td\"\n      style=\"justify-content: center;\">\n      <span>  1500.00</span>\n    </div>\n    <div class=\"td\"\n      style=\"justify-content:  flex-start;\">\n      <span>  IOS</span>\n    </div>\n    <div class=\"td\"\n      style=\"justify-content:  flex-start;\" >\n      <span>  OFS</span>\n    </div>\n    <div class=\"td\"\n      style=\"justify-content: flex-end;\">\n      <span>  1500.00</span>\n    </div>\n    <div class=\"td\"\n      style=\"justify-content: flex-end;\">\n      <span>  0.00</span>\n    </div>\n  </div>\n</div>\n    </div>\n\n    <div class=\"col-md-4 col-lg-4 col-sm-12 col-xs-12\" style=\"background:#fff; \" >\n        <img src=\"/assets/img/invoice.jpg\" width=\"350px\" style=\" margin: 50px 50px 10px 50px;; border: 1px solid;\"/>\n            <mat-button-toggle-group #group=\"matButtonToggleGroup\"  class=\"example-selected-value\">\n            <mat-button-toggle value=\"left\">\n              <mat-icon>navigate_before</mat-icon>\n            </mat-button-toggle>\n            <mat-button-toggle value=\"center\">\n              <mat-icon>zoom_in</mat-icon>\n            </mat-button-toggle>\n            <mat-button-toggle value=\"right\">\n              <mat-icon>zoom_out</mat-icon>\n            </mat-button-toggle>\n            <mat-button-toggle value=\"justify\">\n              <mat-icon>navigate_next</mat-icon>\n            </mat-button-toggle>\n          </mat-button-toggle-group>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/to-approve/to-approve.component.scss":
/*!******************************************************!*\
  !*** ./src/app/to-approve/to-approve.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-form-field-label-wrapper {\n  font-size: 15px;\n  color: #2e348a  !important; }\n\n.example-selected-value {\n  align-items: center;\n  margin: 10px;\n  margin-left: 25%; }\n\n.table {\n  display: flex;\n  flex-flow: column nowrap;\n  line-height: 1.5;\n  border-bottom: 1px solid #d0d0d0;\n  flex: 1 1 auto; }\n\n.th {\n  display: flex;\n  width: 100%;\n  font-weight: 500;\n  background-color: #f2f2f2; }\n\n.th > .td {\n  white-space: normal;\n  justify-content: center; }\n\n.tr {\n  width: 100%;\n  display: flex;\n  flex-flow: row nowrap; }\n\n.td {\n  display: flex;\n  flex-flow: row nowrap;\n  flex-grow: 1;\n  flex-basis: 0;\n  padding: 1em;\n  word-break: break-word;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  min-width: 0px;\n  white-space: nowrap;\n  border-bottom: 1px solid #d0d0d0; }\n\n.th[_ngcontent-c5] {\n  display: flex;\n  width: 100%;\n  font-weight: 300;\n  background-color: #f2f2f2; }\n\n.td[_ngcontent-c5] {\n  padding: 1em; }\n\n.td[_ngcontent-c5][_ngcontent-c5] {\n  padding: 1em 0.75em; }\n\n.table[_ngcontent-c5] {\n  font-size: 15px !important;\n  border: 1px solid #efefefed; }\n\ninput.mat-input-element {\n  font-size: 14px !important;\n  margin-top: -.0625em; }\n\n.mat-form-field {\n  margin: 3px !important; }\n\n.mat-form-field-wrapper {\n  position: relative;\n  width: 170px; }\n\n@media (min-width: 992px) {\n  .col-lg-4 {\n    margin-left: 25px;\n    flex: 0 0 33.33333333%;\n    max-width: 33.33333333%; }\n  .col-lg-7 {\n    margin-left: 30px;\n    flex: 0 0 58.33333333%;\n    max-width: 58.33333333%; }\n  .col-lg-6 {\n    flex: 0 0 50%;\n    max-width: 100%;\n    margin-top: 30px; } }\n"

/***/ }),

/***/ "./src/app/to-approve/to-approve.component.ts":
/*!****************************************************!*\
  !*** ./src/app/to-approve/to-approve.component.ts ***!
  \****************************************************/
/*! exports provided: ToApproveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToApproveComponent", function() { return ToApproveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToApproveComponent = /** @class */ (function () {
    function ToApproveComponent() {
        this.date = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](new Date());
        this.serializedDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((new Date()).toISOString());
    }
    ToApproveComponent.prototype.ngOnInit = function () {
    };
    ToApproveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-to-approve',
            template: __webpack_require__(/*! ./to-approve.component.html */ "./src/app/to-approve/to-approve.component.html"),
            styles: [__webpack_require__(/*! ./to-approve.component.scss */ "./src/app/to-approve/to-approve.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ToApproveComponent);
    return ToApproveComponent;
}());



/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  user works!\n</p>\n"

/***/ }),

/***/ "./src/app/user/user.component.scss":
/*!******************************************!*\
  !*** ./src/app/user/user.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
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

var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.scss */ "./src/app/user/user.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());



/***/ })

}]);
//# sourceMappingURL=layouts-admin-layout-admin-layout-module.js.map