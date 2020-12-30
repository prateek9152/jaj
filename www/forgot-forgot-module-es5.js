(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forgot-forgot-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/forgot/forgot.page.html":
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forgot/forgot.page.html ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppForgotForgotPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-item slot=\"start\">\n      <ion-buttons style=\"zoom: 2.0;\" (click)=\"goBack()\">\n<ion-icon name=\"arrow-back-outline\"></ion-icon>        </ion-buttons>\n      </ion-item>\n    <ion-title style=\"text-align: center;\">Forgot Password</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding class=\"back_img\">\n  <div class=\"login_form_main\">\n    <div class=\"login_form\">\n  <ion-label style=\"text-align: center;\n  display: block; font-weight: bold;\">Enter Your Phone Number</ion-label>\n  <ion-input class=\"input_1\" type=\"number\" placeholder=\"Mobile Number\"></ion-input>\n  <div padding class=\"btn_grp\">\n    <button class=\"btnclick\" (click)=\"send()\">Send</button>\n  </div>\n  </div>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/forgot/forgot-routing.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/forgot/forgot-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: ForgotPageRoutingModule */

    /***/
    function srcAppForgotForgotRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotPageRoutingModule", function () {
        return ForgotPageRoutingModule;
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


      var _forgot_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./forgot.page */
      "./src/app/forgot/forgot.page.ts");

      var routes = [{
        path: '',
        component: _forgot_page__WEBPACK_IMPORTED_MODULE_3__["ForgotPage"]
      }];

      var ForgotPageRoutingModule = function ForgotPageRoutingModule() {
        _classCallCheck(this, ForgotPageRoutingModule);
      };

      ForgotPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ForgotPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/forgot/forgot.module.ts":
    /*!*****************************************!*\
      !*** ./src/app/forgot/forgot.module.ts ***!
      \*****************************************/

    /*! exports provided: ForgotPageModule */

    /***/
    function srcAppForgotForgotModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotPageModule", function () {
        return ForgotPageModule;
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


      var _forgot_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./forgot-routing.module */
      "./src/app/forgot/forgot-routing.module.ts");
      /* harmony import */


      var _forgot_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./forgot.page */
      "./src/app/forgot/forgot.page.ts");

      var ForgotPageModule = function ForgotPageModule() {
        _classCallCheck(this, ForgotPageModule);
      };

      ForgotPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _forgot_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForgotPageRoutingModule"]],
        declarations: [_forgot_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPage"]]
      })], ForgotPageModule);
      /***/
    },

    /***/
    "./src/app/forgot/forgot.page.scss":
    /*!*****************************************!*\
      !*** ./src/app/forgot/forgot.page.scss ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function srcAppForgotForgotPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".back_img {\n  background: #f1f1f1;\n  background-color: rgba(0, 0, 0, 0);\n  background-position-x: 0%;\n  background-position-y: 0%;\n  background-repeat: repeat;\n  background-size: auto;\n  background-size: cover;\n  background-position: top center;\n  background-repeat: no-repeat;\n  background-color: #ececec;\n}\n\n.btnclick {\n  background-color: #5ac5ad;\n  color: #ffff;\n  width: 322px;\n  height: 53px;\n}\n\n.input_1 {\n  height: 50px;\n  background: #fff;\n  color: #575757;\n  font-size: 13px;\n  border: 1px solid #d8d8d8 !important;\n  border-radius: 3px;\n  width: 322px;\n  padding-left: 0px;\n  margin: 10px auto;\n  left: 4px;\n}\n\n.login_form_main {\n  height: 100%;\n  display: flex;\n  width: 100%;\n  align-items: center;\n}\n\n.login_form {\n  width: 100%;\n}\n\n.btn_grp {\n  padding: 10px 0 !important;\n  text-align: center;\n  font-size: 15px;\n}\n\n.btn_grp p span {\n  color: #fe6e4a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9yZ290L2ZvcmdvdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLGtDQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUNBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFFSjs7QUFBQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtBQUdKOztBQURBO0VBQ0MsWUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFJRDs7QUFGQTtFQUNDLFdBQUE7QUFLRDs7QUFIQTtFQUNJLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBTUo7O0FBSkE7RUFDQyxjQUFBO0FBT0QiLCJmaWxlIjoic3JjL2FwcC9mb3Jnb3QvZm9yZ290LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrX2ltZyB7XHJcbiAgICBiYWNrZ3JvdW5kOiNmMWYxZjE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAwJTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcclxufVxyXG4uYnRuY2xpY2t7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWFjNWFkO1xyXG4gICAgY29sb3I6ICNmZmZmO1xyXG4gICAgd2lkdGg6IDMyMnB4O1xyXG4gICAgaGVpZ2h0OiA1M3B4O1xyXG59XHJcbi5pbnB1dF8xIHtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBjb2xvcjogIzU3NTc1NztcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkOGQ4ZDggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIHdpZHRoOiAzMjJweDtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgICBsZWZ0OiA0cHg7XHJcbn1cclxuLmxvZ2luX2Zvcm1fbWFpbiB7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4ubG9naW5fZm9ybSB7XHJcblx0d2lkdGg6IDEwMCU7XHJcbn1cclxuLmJ0bl9ncnAge1xyXG4gICAgcGFkZGluZzogMTBweCAwICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuLmJ0bl9ncnAgcCBzcGFuIHtcclxuXHRjb2xvcjogI2ZlNmU0YTtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/forgot/forgot.page.ts":
    /*!***************************************!*\
      !*** ./src/app/forgot/forgot.page.ts ***!
      \***************************************/

    /*! exports provided: ForgotPage */

    /***/
    function srcAppForgotForgotPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotPage", function () {
        return ForgotPage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var ForgotPage = /*#__PURE__*/function () {
        function ForgotPage(navCtrl, router, menuCtrl) {
          _classCallCheck(this, ForgotPage);

          this.navCtrl = navCtrl;
          this.router = router;
          this.menuCtrl = menuCtrl;
        }

        _createClass(ForgotPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {// this.menuCtrl.enable(false);
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.navCtrl.back();
          }
        }, {
          key: "send",
          value: function send() {
            this.router.navigate(['/menu/forgotverify']);
          }
        }]);

        return ForgotPage;
      }();

      ForgotPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
        }];
      };

      ForgotPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgot',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./forgot.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/forgot/forgot.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./forgot.page.scss */
        "./src/app/forgot/forgot.page.scss"))["default"]]
      })], ForgotPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=forgot-forgot-module-es5.js.map