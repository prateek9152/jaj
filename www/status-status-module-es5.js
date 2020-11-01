(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["status-status-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/status/status.page.html":
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/status/status.page.html ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppStatusStatusPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>status</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/status/status-routing.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/status/status-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: StatusPageRoutingModule */

    /***/
    function srcAppStatusStatusRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StatusPageRoutingModule", function () {
        return StatusPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _status_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./status.page */
      "./src/app/status/status.page.ts");

      var routes = [{
        path: '',
        component: _status_page__WEBPACK_IMPORTED_MODULE_3__["StatusPage"]
      }];

      var StatusPageRoutingModule = function StatusPageRoutingModule() {
        _classCallCheck(this, StatusPageRoutingModule);
      };

      StatusPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], StatusPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/status/status.module.ts":
    /*!*****************************************!*\
      !*** ./src/app/status/status.module.ts ***!
      \*****************************************/

    /*! exports provided: StatusPageModule */

    /***/
    function srcAppStatusStatusModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StatusPageModule", function () {
        return StatusPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _status_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./status-routing.module */
      "./src/app/status/status-routing.module.ts");
      /* harmony import */


      var _status_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./status.page */
      "./src/app/status/status.page.ts");

      var StatusPageModule = function StatusPageModule() {
        _classCallCheck(this, StatusPageModule);
      };

      StatusPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _status_routing_module__WEBPACK_IMPORTED_MODULE_5__["StatusPageRoutingModule"]],
        declarations: [_status_page__WEBPACK_IMPORTED_MODULE_6__["StatusPage"]]
      })], StatusPageModule);
      /***/
    },

    /***/
    "./src/app/status/status.page.scss":
    /*!*****************************************!*\
      !*** ./src/app/status/status.page.scss ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function srcAppStatusStatusPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXR1cy9zdGF0dXMucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/status/status.page.ts":
    /*!***************************************!*\
      !*** ./src/app/status/status.page.ts ***!
      \***************************************/

    /*! exports provided: StatusPage */

    /***/
    function srcAppStatusStatusPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StatusPage", function () {
        return StatusPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var StatusPage = /*#__PURE__*/function () {
        function StatusPage() {
          _classCallCheck(this, StatusPage);
        }

        _createClass(StatusPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return StatusPage;
      }();

      StatusPage.ctorParameters = function () {
        return [];
      };

      StatusPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-status',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./status.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/status/status.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./status.page.scss */
        "./src/app/status/status.page.scss"))["default"]]
      })], StatusPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=status-status-module-es5.js.map