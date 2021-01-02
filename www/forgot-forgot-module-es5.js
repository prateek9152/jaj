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


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-item slot=\"start\">\n      <ion-buttons style=\"zoom: 2.0;\" (click)=\"goBack()\">\n<ion-icon name=\"arrow-back-outline\"></ion-icon>        </ion-buttons>\n      </ion-item>\n    <ion-title style=\"text-align: center;\">Forgot Password</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding class=\"back_img\">\n  <div class=\"login_form_main\">\n    <div class=\"login_form\">\n      <form [formGroup]=\"forgotForm\" (ngSubmit)=\"send()\">\n\n  <ion-label style=\"text-align: center;\n  display: block; font-weight: bold;\">Enter Your Email</ion-label>\n <ion-input class=\"input_1\" type=\"email\" formControlName=\"email\" placeholder=\"E-Mail\" [ngClass]=\"{'is-invalid': submitted && f.email.errors}\"></ion-input>\n <ng-container *ngFor=\"let validation of validation_messages.email\">\n   <span class=\"error-message\"\n     *ngIf=\"(submitted || forgotForm.get('email').touched) && forgotForm.get('email').hasError(validation.type)\">\n     {{ validation.message }}\n   </span>\n </ng-container>\n <!-- <ion-input class=\"input_1\" type=\"number\" formControlName=\"phone\" placeholder=\"Mobile Number\"></ion-input>\n  <ng-container *ngFor=\"let validation of validation_messages.phone\">\n    <span class=\"error-message\"\n      *ngIf=\"(submitted || forgotForm.get('phone').touched) && forgotForm.get('phone').hasError(validation.type)\">\n      {{ validation.message }}\n    </span>\n  </ng-container> -->\n  <div padding class=\"btn_grp\">\n    <button class=\"btnclick\" (click)=\"send()\">Send</button>\n  </div>\n</form>\n\n</div>\n  </div>\n</ion-content>\n";
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
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _forgot_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForgotPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
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


      __webpack_exports__["default"] = ".back_img {\n  background: #f1f1f1;\n  background-color: rgba(0, 0, 0, 0);\n  background-position-x: 0%;\n  background-position-y: 0%;\n  background-repeat: repeat;\n  background-size: auto;\n  background-size: cover;\n  background-position: top center;\n  background-repeat: no-repeat;\n  background-color: #ececec;\n}\n\n.btnclick {\n  background-color: #5ac5ad;\n  color: #ffff;\n  width: 322px;\n  height: 53px;\n}\n\n.input_1 {\n  height: 50px;\n  background: #fff;\n  color: #575757;\n  font-size: 13px;\n  border: 1px solid #d8d8d8 !important;\n  border-radius: 3px;\n  width: 322px;\n  padding-left: 0px;\n  margin: 10px auto;\n  left: 4px;\n}\n\n.login_form_main {\n  height: 100%;\n  display: flex;\n  width: 100%;\n  align-items: center;\n}\n\n.login_form {\n  width: 100%;\n}\n\n.btn_grp {\n  padding: 10px 0 !important;\n  text-align: center;\n  font-size: 15px;\n}\n\n.btn_grp p span {\n  color: #fe6e4a;\n}\n\n.error-message {\n  display: block;\n  color: red;\n  margin-top: 5px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9yZ290L2ZvcmdvdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLGtDQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUNBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFFSjs7QUFBQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtBQUdKOztBQURBO0VBQ0MsWUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFJRDs7QUFGQTtFQUNDLFdBQUE7QUFLRDs7QUFIQTtFQUNJLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBTUo7O0FBSkE7RUFDQyxjQUFBO0FBT0Q7O0FBTEE7RUFBaUIsY0FBQTtFQUNiLFVBQUE7RUFDQSxlQUFBO0VBQWdCLGtCQUFBO0FBVXBCIiwiZmlsZSI6InNyYy9hcHAvZm9yZ290L2ZvcmdvdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja19pbWcge1xyXG4gICAgYmFja2dyb3VuZDojZjFmMWYxO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDAlO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogYXV0bztcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XHJcbn1cclxuLmJ0bmNsaWNre1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVhYzVhZDtcclxuICAgIGNvbG9yOiAjZmZmZjtcclxuICAgIHdpZHRoOiAzMjJweDtcclxuICAgIGhlaWdodDogNTNweDtcclxufVxyXG4uaW5wdXRfMSB7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgY29sb3I6ICM1NzU3NTc7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDhkOGQ4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICB3aWR0aDogMzIycHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gICAgbGVmdDogNHB4O1xyXG59XHJcbi5sb2dpbl9mb3JtX21haW4ge1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmxvZ2luX2Zvcm0ge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59XHJcbi5idG5fZ3JwIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbi5idG5fZ3JwIHAgc3BhbiB7XHJcblx0Y29sb3I6ICNmZTZlNGE7XHJcbn1cclxuLmVycm9yLW1lc3NhZ2UgeyBkaXNwbGF5OmJsb2NrO1xyXG4gICAgY29sb3I6cmVkO1xyXG4gICAgbWFyZ2luLXRvcDo1cHg7IHRleHQtYWxpZ246IGNlbnRlcjt9Il19 */";
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
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

      var ForgotPage = /*#__PURE__*/function () {
        function ForgotPage(navCtrl, router, menuCtrl, fb) {
          _classCallCheck(this, ForgotPage);

          this.navCtrl = navCtrl;
          this.router = router;
          this.menuCtrl = menuCtrl;
          this.fb = fb;
          this.submitted = false;
          this.validation_messages = {
            email: [{
              type: 'required',
              message: 'Email is required.'
            }, {
              type: 'pattern',
              message: 'Enter a valid email'
            }]
          };
        }

        _createClass(ForgotPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.forgotForm = this.fb.group({
              email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[a-zA-Z0-9_.+-]+@(?:[a-zA-Z0-9-]+\.)\.[A-Za-z0-9._%+-]{2,}')]))
            });
          }
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
            this.submitted = true;

            if (this.forgotForm.invalid) {
              return;
            }

            this.router.navigate(['/menu/forgotverify']);
          }
        }, {
          key: "f",
          get: function get() {
            return this.forgotForm.controls;
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
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
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