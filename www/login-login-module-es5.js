(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
    /*!*****************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <ion-content padding class=\"back_img\">\n\n\n\n    <div class=\"login_form_main\">\n      <form [formGroup]=\"validations_form\" style=\"\theight: 100%;\n      display: contents;\n      width: 100%;\n      align-items: center;\"  (ngSubmit)=\"login()\">\n\n      <div class=\"login_form\">\n        <div class=\"logo\">\n          <img src=\"../../assets/imgs/login/jajlogo.jpeg\">\n          <h3>Please enter your login detail</h3>\n        </div>\n  \n  \n        <ion-list style=\"margin:0 0 20px; display:inline\">\n         \n          <!-- <ion-label style=\"text-align: center;\n          display: block;\">Enter Your Phone Number</ion-label> -->\n            <ion-input class=\"input_1\" type=\"number\" formControlName=\"phone\" placeholder=\"Enter Your Mobile Number\" [ngClass]=\"{'is-invalid': submitted && f.phone.errors}\"></ion-input>\n            <ng-container *ngFor=\"let validation of validation_messages.phone\">\n              <span class=\"error-message\"\n                *ngIf=\"(submitted || validations_form.get('phone').touched) && validations_form.get('phone').hasError(validation.type)\">\n                {{ validation.message }}\n              </span>\n            </ng-container>\n            \n          <!-- <ion-label style=\"text-align: center;\n          display: block;\">Password</ion-label> -->\n            <ion-input class=\"input_1\" type=\"password\" formControlName=\"password\" placeholder=\"Enter Password\" [ngClass]=\"{'is-invalid': submitted && f.password.errors}\"></ion-input>\n            <ng-container *ngFor=\"let validation of validation_messages.password\">\n              <span class=\"error-message\"\n                *ngIf=\"(submitted || validations_form.get('password').touched) && validations_form.get('password').hasError(validation.type)\">\n                {{ validation.message }}\n              </span>\n            </ng-container>\n            \n        </ion-list>\n  \n        <h5 style=\"text-align: center;font-size: 13px;font-weight: normal;\" [routerLink]=\"['/menu/forgot']\">Forgot Password?</h5>\n  \n        <div padding class=\"btn_grp\">\n          <button class=\"btnclick\" (click)=\"login()\">LOGIN</button>\n          <p>Don't have an account? <span (click)=\"register()\">Sign Up</span></p>\n        </div>\n      </div>\n      </form>\n\n    </div>\n  \n \n  \n  </ion-content>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/login/login-routing.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/login/login-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: LoginPageRoutingModule */

    /***/
    function srcAppLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
        return LoginPageRoutingModule;
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


      var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login.page */
      "./src/app/login/login.page.ts");

      var routes = [{
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
      }];

      var LoginPageRoutingModule = function LoginPageRoutingModule() {
        _classCallCheck(this, LoginPageRoutingModule);
      };

      LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LoginPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/login/login.module.ts":
    /*!***************************************!*\
      !*** ./src/app/login/login.module.ts ***!
      \***************************************/

    /*! exports provided: LoginPageModule */

    /***/
    function srcAppLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
        return LoginPageModule;
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


      var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./login-routing.module */
      "./src/app/login/login-routing.module.ts");
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./login.page */
      "./src/app/login/login.page.ts");

      var LoginPageModule = function LoginPageModule() {
        _classCallCheck(this, LoginPageModule);
      };

      LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
      })], LoginPageModule);
      /***/
    },

    /***/
    "./src/app/login/login.page.scss":
    /*!***************************************!*\
      !*** ./src/app/login/login.page.scss ***!
      \***************************************/

    /*! exports provided: default */

    /***/
    function srcAppLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".back_img {\n  background: #f1f1f1;\n  background-color: rgba(0, 0, 0, 0);\n  background-position-x: 0%;\n  background-position-y: 0%;\n  background-repeat: repeat;\n  background-size: auto;\n  background-size: cover;\n  background-position: top center;\n  background-repeat: no-repeat;\n  background-color: #ececec;\n}\n\n.logo h3 {\n  font-size: 16px;\n  margin: 25px 0 40px;\n  font-weight: bold;\n}\n\n.login_form_main {\n  height: 100%;\n  display: flex;\n  width: 100%;\n  align-items: center;\n}\n\n.login_form {\n  width: 100%;\n}\n\n.img_sign img {\n  width: 200px;\n  margin: 10px;\n}\n\n.logo img {\n  width: 100px;\n}\n\n.logo {\n  padding: 0;\n  text-align: center;\n}\n\n.input_1 {\n  height: 50px;\n  background: #fff;\n  color: #575757;\n  font-size: 13px;\n  border: 1px solid #d8d8d8 !important;\n  border-radius: 3px;\n  width: 322px;\n  padding-left: 0px;\n  margin: 10px auto;\n  left: 4px;\n}\n\n.btn_grp {\n  padding: 10px 0 !important;\n  text-align: center;\n  font-size: 15px;\n}\n\n.btn_grp p span {\n  color: #5ac5ad;\n}\n\n.toolbar-background.toolbar-background-ios {\n  background: #fff;\n  border: none;\n}\n\n.header-md::after, .tabs-md[tabsPlacement=top] > .tabbar::after, .footer-md::before, .tabs-md[tabsPlacement=bottom] > .tabbar::before {\n  left: 0;\n  bottom: -5px;\n  background-position: left 0 top -2px;\n  position: absolute;\n  width: 100%;\n  height: 5px;\n  background-image: none;\n  background-repeat: repeat-x;\n  content: \"\";\n}\n\n.label input {\n  width: 85%;\n  height: 30px;\n  border: none;\n}\n\n.label {\n  display: flex;\n  align-items: center;\n}\n\n.label img {\n  width: 32px;\n  height: 20px;\n  margin-right: 8px;\n}\n\n.btnclick {\n  background-color: #5ac5ad;\n  color: #ffff;\n  width: 322px;\n  height: 53px;\n}\n\n.error-message {\n  display: block;\n  color: red;\n  margin-top: 5px;\n  text-align: center;\n}\n\n/* google*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFDQTtFQUVJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBQ0E7RUFDQyxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUVEOztBQUFBO0VBQ0MsV0FBQTtBQUdEOztBQURBO0VBQ0MsWUFBQTtFQUNBLFlBQUE7QUFJRDs7QUFGQTtFQUNJLFlBQUE7QUFLSjs7QUFIQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtBQU1KOztBQUpBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0FBT0o7O0FBTEE7RUFDSSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQVFKOztBQU5BO0VBQ0MsY0FBQTtBQVNEOztBQVBBO0VBQ0MsZ0JBQUE7RUFDQSxZQUFBO0FBVUQ7O0FBUkE7RUFDQyxPQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0FBV0Q7O0FBVEE7RUFDQyxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFZRDs7QUFUQTtFQUNDLGFBQUE7RUFDQSxtQkFBQTtBQVlEOztBQVZBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQWFEOztBQVhBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFjSjs7QUFaQTtFQUFpQixjQUFBO0VBQ2IsVUFBQTtFQUNBLGVBQUE7RUFBZ0Isa0JBQUE7QUFpQnBCOztBQWhCQSxVQUFBIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tfaW1nIHtcclxuICAgIGJhY2tncm91bmQ6I2YxZjFmMTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDAlO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiAwJTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xyXG59XHJcbi5sb2dvIGgzIHtcclxuICAgIC8vIGNvbG9yOiAjMDAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWFyZ2luOiAyNXB4IDAgNDBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5sb2dpbl9mb3JtX21haW4ge1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmxvZ2luX2Zvcm0ge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59XHJcbi5pbWdfc2lnbiBpbWcge1xyXG5cdHdpZHRoOiAyMDBweDtcclxuXHRtYXJnaW46IDEwcHg7XHJcbn1cclxuLmxvZ28gaW1nIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxufVxyXG4ubG9nbyB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5pbnB1dF8xIHtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBjb2xvcjogIzU3NTc1NztcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkOGQ4ZDggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIHdpZHRoOiAzMjJweDtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgICBsZWZ0OiA0cHg7XHJcbn1cclxuLmJ0bl9ncnAge1xyXG4gICAgcGFkZGluZzogMTBweCAwICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuLmJ0bl9ncnAgcCBzcGFuIHtcclxuXHRjb2xvcjogIzVhYzVhZDtcclxufVxyXG4udG9vbGJhci1iYWNrZ3JvdW5kLnRvb2xiYXItYmFja2dyb3VuZC1pb3Mge1xyXG5cdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0Ym9yZGVyOiBub25lO1xyXG59XHJcbi5oZWFkZXItbWQ6OmFmdGVyLCAudGFicy1tZFt0YWJzUGxhY2VtZW50PVwidG9wXCJdID4gLnRhYmJhcjo6YWZ0ZXIsIC5mb290ZXItbWQ6OmJlZm9yZSwgLnRhYnMtbWRbdGFic1BsYWNlbWVudD1cImJvdHRvbVwiXSA+IC50YWJiYXI6OmJlZm9yZSB7XHJcblx0bGVmdDogMDtcclxuXHRib3R0b206IC01cHg7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCAwIHRvcCAtMnB4O1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDVweDtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG5cdGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcclxuXHRjb250ZW50OiBcIlwiO1xyXG59XHJcbi5sYWJlbCBpbnB1dCB7XHJcblx0d2lkdGg6IDg1JTtcclxuXHRoZWlnaHQ6IDMwcHg7XHJcblx0Ym9yZGVyOiBub25lO1xyXG59XHJcblxyXG4ubGFiZWwge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4ubGFiZWwgaW1nIHtcclxuXHR3aWR0aDogMzJweDtcclxuXHRoZWlnaHQ6IDIwcHg7XHJcblx0bWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn1cclxuLmJ0bmNsaWNre1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVhYzVhZDtcclxuICAgIGNvbG9yOiAjZmZmZjtcclxuICAgIHdpZHRoOiAzMjJweDtcclxuICAgIGhlaWdodDogNTNweDtcclxufVxyXG4uZXJyb3ItbWVzc2FnZSB7IGRpc3BsYXk6YmxvY2s7XHJcbiAgICBjb2xvcjpyZWQ7XHJcbiAgICBtYXJnaW4tdG9wOjVweDsgdGV4dC1hbGlnbjogY2VudGVyO31cclxuLyogZ29vZ2xlKi9cclxuIl19 */";
      /***/
    },

    /***/
    "./src/app/login/login.page.ts":
    /*!*************************************!*\
      !*** ./src/app/login/login.page.ts ***!
      \*************************************/

    /*! exports provided: LoginPage */

    /***/
    function srcAppLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
        return LoginPage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/toast.service */
      "./src/app/services/toast.service.ts");
      /* harmony import */


      var _services_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/loader.service */
      "./src/app/services/loader.service.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../services/auth.service */
      "./src/app/services/auth.service.ts");

      var LoginPage = /*#__PURE__*/function () {
        function LoginPage(router, menuCtrl, formBuilder, toastService, ionLoader, http, authService) {
          _classCallCheck(this, LoginPage);

          // this.menuCtrl.enable(false,"first");
          this.router = router;
          this.menuCtrl = menuCtrl;
          this.formBuilder = formBuilder;
          this.toastService = toastService;
          this.ionLoader = ionLoader;
          this.http = http;
          this.authService = authService;
          this.submitted = false;
          this.validation_messages = {
            'phone': [{
              type: 'required',
              message: 'Phone is required.'
            }, {
              type: 'minlength',
              message: 'Phone Number must be at least 10 digits.'
            }],
            'password': [{
              type: 'required',
              message: 'Password is required.'
            }, {
              type: 'minlength',
              message: 'Password must be at least 5 characters long.'
            }, {
              type: 'pattern',
              message: 'Your password must contain uppercase, lowercase, special chars and number.'
            }]
          };
        }

        _createClass(LoginPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.validations_form = this.formBuilder.group({
              phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])),
              password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^(?=.*[a-zA-Z])[a-zA-Z0-9!$%@#£€*?&]+$')]))
            });
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.menuCtrl.enable(false);
          }
        }, {
          key: "ionViewDidLeave",
          value: function ionViewDidLeave() {
            this.menuCtrl.enable(true);
          }
        }, {
          key: "forgot",
          value: function forgot() {
            this.router.navigate(['/menu/forgot']);
          }
        }, {
          key: "login",
          value: function login() {
            this.submitted = true;

            if (this.validations_form.invalid) {
              return;
            } // var formData: any = new FormData();
            // formData.append("email",this.validations_form.get('email').value);
            // formData.append("password",this.validations_form.get('password').value);
            // let headers = new HttpHeaders({"Accept": "application/json"});
            // console.log(formData);


            this.router.navigate(['/menu/home']); // this.http.post('https://jajoj.threethree.in/api/login',formData,{headers:headers}).subscribe((response:any)=> {
            // this.router.navigate(['/menu/home']);
            // console.log(response);
            //  if(response.status==1){
            //    this.authService.updateUserDetails(response.data);
            //    this.router.navigate(['/menu/home']);
            //    this.toastService.showLoginToast();
            //  }
            //   else {
            //   }
            // })
          }
        }, {
          key: "register",
          value: function register() {
            this.router.navigate(['/menu/signup']);
          }
        }, {
          key: "f",
          get: function get() {
            return this.validations_form.controls;
          }
        }]);

        return LoginPage;
      }();

      LoginPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]
        }, {
          type: _services_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]
        }];
      };

      LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./login.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./login.page.scss */
        "./src/app/login/login.page.scss"))["default"]]
      })], LoginPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=login-login-module-es5.js.map