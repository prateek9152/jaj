(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-settings-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n      <ion-item slot=\"start\">\n        <ion-buttons style=\"zoom: 2.0;\" (click)=\"goBack()\">\n<ion-icon name=\"arrow-back-outline\"></ion-icon>        </ion-buttons>\n        </ion-item>\n      <ion-title style=\"text-align: center;\">Settings</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-list>\n\t<ion-item>\n      <ion-label style=\"font-size: 14px;\">Screen Notification</ion-label>\n      <ion-toggle color=\"primary\"></ion-toggle>\n    </ion-item>\n</ion-list>\n<ion-list>\n    <ion-item>\n      <ion-label style=\"font-size: 14px;\">Email Alert Setting <span style=\"font-size: 11px;\">Receive individual email alerts each time a new item is posted \n        from your selected category.</span></ion-label>\n      <ion-toggle color=\"primary\" checked=\"true\"></ion-toggle>\n    </ion-item>\n</ion-list>\n\n      <ion-list>\n    <button class=\"btnclick\" ion-item (click)=\"change()\">\n     Change Password\n    </button>\n</ion-list>\n\n\n    <ion-list>\n    <button class=\"btnclick\" ion-item (click)=\"terms()\">\n     Terms & Conditions\n    </button>\n</ion-list>\n<ion-list>\n     <button class=\"btnclick\" ion-item (click)=\"contact()\">\n     Contact Us\n     </button>\n </ion-list>\n \n</ion-content>");

/***/ }),

/***/ "./src/app/settings/settings-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/settings/settings-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: SettingsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageRoutingModule", function() { return SettingsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.page */ "./src/app/settings/settings.page.ts");




const routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_3__["SettingsPage"]
    }
];
let SettingsPageRoutingModule = class SettingsPageRoutingModule {
};
SettingsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SettingsPageRoutingModule);



/***/ }),

/***/ "./src/app/settings/settings.module.ts":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.module.ts ***!
  \*********************************************/
/*! exports provided: SettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings-routing.module */ "./src/app/settings/settings-routing.module.ts");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings.page */ "./src/app/settings/settings.page.ts");







let SettingsPageModule = class SettingsPageModule {
};
SettingsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__["SettingsPageRoutingModule"]
        ],
        declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]]
    })
], SettingsPageModule);



/***/ }),

/***/ "./src/app/settings/settings.page.scss":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".list .item {\n  border: none !important;\n  border-bottom: 1px solid #ccc !important;\n  min-height: 60px;\n  font-size: 14px;\n  color: #464646;\n}\n\n.list {\n  margin: 0 !important;\n}\n\n.item.item-block.item-toggle {\n  min-height: 70px;\n  border: none !important;\n}\n\nspan {\n  display: block;\n}\n\n.item-block .item-inner {\n  padding-right: 8px;\n  padding-right: 8px;\n  border-bottom: none !important;\n}\n\n.btnclick {\n  background-color: #fe6e4a;\n  color: #ffff;\n  width: 322px;\n  height: 53px;\n  margin: auto;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3Mvc2V0dGluZ3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsdUJBQUE7RUFDQSx3Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFDRDs7QUFDQTtFQUNDLG9CQUFBO0FBRUQ7O0FBQUE7RUFDQyxnQkFBQTtFQUNBLHVCQUFBO0FBR0Q7O0FBREE7RUFDQyxjQUFBO0FBSUQ7O0FBRkE7RUFDQyxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7QUFLRDs7QUFIQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFNSiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0IC5pdGVtIHtcblx0Ym9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjICFpbXBvcnRhbnQ7XG5cdG1pbi1oZWlnaHQ6IDYwcHg7XG5cdGZvbnQtc2l6ZTogMTRweDtcblx0Y29sb3I6ICM0NjQ2NDY7XG59XG4ubGlzdHtcblx0bWFyZ2luOiAwICFpbXBvcnRhbnQ7XG59XG4uaXRlbS5pdGVtLWJsb2NrLml0ZW0tdG9nZ2xlIHtcblx0bWluLWhlaWdodDogNzBweDtcblx0Ym9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG5zcGFuIHtcblx0ZGlzcGxheTogYmxvY2s7XG59XG4uaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XG5cdHBhZGRpbmctcmlnaHQ6IDhweDtcblx0cGFkZGluZy1yaWdodDogOHB4O1xuXHRib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XG59XG4uYnRuY2xpY2t7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlNmU0YTtcbiAgICBjb2xvcjogI2ZmZmY7XG4gICAgd2lkdGg6IDMyMnB4O1xuICAgIGhlaWdodDogNTNweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG59Il19 */");

/***/ }),

/***/ "./src/app/settings/settings.page.ts":
/*!*******************************************!*\
  !*** ./src/app/settings/settings.page.ts ***!
  \*******************************************/
/*! exports provided: SettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPage", function() { return SettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");




let SettingsPage = class SettingsPage {
    constructor(navCtrl, menuCtrl, router) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.router = router;
    }
    ngOnInit() {
    }
    change() { }
    terms() {
        this.router.navigate(['/menu/terms']);
    }
    privacy() { }
    posting() { }
    contact() { }
    goBack() {
        this.navCtrl.back();
    }
    ionViewWillEnter() {
        // this.menuCtrl.enable(false);
    }
};
SettingsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
SettingsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-settings',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./settings.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./settings.page.scss */ "./src/app/settings/settings.page.scss")).default]
    })
], SettingsPage);



/***/ })

}]);
//# sourceMappingURL=settings-settings-module-es2015.js.map