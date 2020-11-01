(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["circle-circle-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/circle/circle.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/circle/circle.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>circle</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/circle/circle-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/circle/circle-routing.module.ts ***!
  \*************************************************/
/*! exports provided: CirclePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CirclePageRoutingModule", function() { return CirclePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _circle_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./circle.page */ "./src/app/circle/circle.page.ts");




const routes = [
    {
        path: '',
        component: _circle_page__WEBPACK_IMPORTED_MODULE_3__["CirclePage"]
    }
];
let CirclePageRoutingModule = class CirclePageRoutingModule {
};
CirclePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CirclePageRoutingModule);



/***/ }),

/***/ "./src/app/circle/circle.module.ts":
/*!*****************************************!*\
  !*** ./src/app/circle/circle.module.ts ***!
  \*****************************************/
/*! exports provided: CirclePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CirclePageModule", function() { return CirclePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _circle_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./circle-routing.module */ "./src/app/circle/circle-routing.module.ts");
/* harmony import */ var _circle_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./circle.page */ "./src/app/circle/circle.page.ts");







let CirclePageModule = class CirclePageModule {
};
CirclePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _circle_routing_module__WEBPACK_IMPORTED_MODULE_5__["CirclePageRoutingModule"]
        ],
        declarations: [_circle_page__WEBPACK_IMPORTED_MODULE_6__["CirclePage"]]
    })
], CirclePageModule);



/***/ }),

/***/ "./src/app/circle/circle.page.scss":
/*!*****************************************!*\
  !*** ./src/app/circle/circle.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NpcmNsZS9jaXJjbGUucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/circle/circle.page.ts":
/*!***************************************!*\
  !*** ./src/app/circle/circle.page.ts ***!
  \***************************************/
/*! exports provided: CirclePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CirclePage", function() { return CirclePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let CirclePage = class CirclePage {
    constructor() { }
    ngOnInit() {
    }
};
CirclePage.ctorParameters = () => [];
CirclePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-circle',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./circle.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/circle/circle.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./circle.page.scss */ "./src/app/circle/circle.page.scss")).default]
    })
], CirclePage);



/***/ })

}]);
//# sourceMappingURL=circle-circle-module-es2015.js.map