(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["requests-requests-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/requests/requests.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/requests/requests.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>requests</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/requests/requests-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/requests/requests-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: RequestsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestsPageRoutingModule", function() { return RequestsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _requests_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./requests.page */ "./src/app/requests/requests.page.ts");




const routes = [
    {
        path: '',
        component: _requests_page__WEBPACK_IMPORTED_MODULE_3__["RequestsPage"]
    }
];
let RequestsPageRoutingModule = class RequestsPageRoutingModule {
};
RequestsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RequestsPageRoutingModule);



/***/ }),

/***/ "./src/app/requests/requests.module.ts":
/*!*********************************************!*\
  !*** ./src/app/requests/requests.module.ts ***!
  \*********************************************/
/*! exports provided: RequestsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestsPageModule", function() { return RequestsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _requests_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./requests-routing.module */ "./src/app/requests/requests-routing.module.ts");
/* harmony import */ var _requests_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./requests.page */ "./src/app/requests/requests.page.ts");







let RequestsPageModule = class RequestsPageModule {
};
RequestsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _requests_routing_module__WEBPACK_IMPORTED_MODULE_5__["RequestsPageRoutingModule"]
        ],
        declarations: [_requests_page__WEBPACK_IMPORTED_MODULE_6__["RequestsPage"]]
    })
], RequestsPageModule);



/***/ }),

/***/ "./src/app/requests/requests.page.scss":
/*!*********************************************!*\
  !*** ./src/app/requests/requests.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcXVlc3RzL3JlcXVlc3RzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/requests/requests.page.ts":
/*!*******************************************!*\
  !*** ./src/app/requests/requests.page.ts ***!
  \*******************************************/
/*! exports provided: RequestsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestsPage", function() { return RequestsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let RequestsPage = class RequestsPage {
    constructor() { }
    ngOnInit() {
    }
};
RequestsPage.ctorParameters = () => [];
RequestsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-requests',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./requests.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/requests/requests.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./requests.page.scss */ "./src/app/requests/requests.page.scss")).default]
    })
], RequestsPage);



/***/ })

}]);
//# sourceMappingURL=requests-requests-module-es2015.js.map