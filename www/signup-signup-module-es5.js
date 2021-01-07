(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-signup-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html":
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSignupSignupPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n \n</ion-header>\n<ion-content padding class=\"back_img\">\n\n\n\n  <div class=\"login_form_main\">\n      <div class=\"login_form\">\n          <div class=\"logo\">\n              <img src=\"../../assets/imgs/login/jajlogo.jpeg\">\n              <h3>Please enter your details</h3>\n          </div>\n\n\n          <ion-list style=\"margin:0 0 20px; display: inline;\">\n            <form [formGroup]=\"registerForm\" (ngSubmit)=\"signup()\">\n            <ion-input class=\"input_1\" type=\"text\" formControlName=\"name\" placeholder=\"Enter First Name\" [ngClass]=\"{'is-invalid': submitted && f.name.errors}\"></ion-input>\n            <ng-container *ngFor=\"let validation of validation_messages.name\">\n                <span class=\"error-message\"\n                  *ngIf=\"(submitted || registerForm.get('name').touched) && registerForm.get('name').hasError(validation.type)\">\n                  {{ validation.message }}\n                </span>\n              </ng-container>\n              <ion-input class=\"input_1\"  type=\"text\" formControlName=\"last_name\" placeholder=\"Enter Last Name\" [ngClass]=\"{'is-invalid': submitted && f.last_name.errors}\"></ion-input>\n              <ng-container *ngFor=\"let validation of validation_messages.last_name\">\n                <span class=\"error-message\"\n                  *ngIf=\"(submitted || registerForm.get('last_name').touched) && registerForm.get('last_name').hasError(validation.type)\">\n                  {{ validation.message }}\n                </span>\n              </ng-container>\n              \n              <ion-input class=\"input_1\" type=\"tel\" formControlName=\"primary_mobile_number\" placeholder=\"Mobile Number\" [ngClass]=\"{'is-invalid': submitted && f.primary_mobile_number.errors}\" minlength=\"10\"></ion-input>\n              <ng-container *ngFor=\"let validation of validation_messages.primary_mobile_number\">\n                <span class=\"error-message\"\n                  *ngIf=\"(submitted || registerForm.get('primary_mobile_number').touched) && registerForm.get('primary_mobile_number').hasError(validation.type)\">\n                  {{ validation.message }}\n                </span>\n              </ng-container>\n              <ion-input class=\"input_1\" type=\"email\" formControlName=\"email\" placeholder=\"E-Mail\" [ngClass]=\"{'is-invalid': submitted && f.email.errors}\"></ion-input>\n              <ng-container *ngFor=\"let validation of validation_messages.email\">\n                <span class=\"error-message\"\n                  *ngIf=\"(submitted || registerForm.get('email').touched) && registerForm.get('email').hasError(validation.type)\">\n                  {{ validation.message }}\n                </span>\n              </ng-container>                  \n              \n              <ion-input class=\"input_1\"  type=\"password\" formControlName=\"password\" placeholder=\"Enter Password\" [ngClass]=\"{'is-invalid':submitted && f.password.errors}\"></ion-input>\n              <ng-container *ngFor=\"let validation of validation_messages.password\">\n                <span class=\"error-message\"\n                  *ngIf=\"(submitted || registerForm.get('password').touched) && registerForm.get('password').hasError(validation.type)\">\n                  {{ validation.message }}\n                </span>\n              </ng-container>\n              <ion-input class=\"input_1\" type=\"password\" formControlName=\"c_password\" placeholder=\"Enter Confirm Password\" [ngClass]=\"{'is-invalid':submitted && f.c_password.errors}\"></ion-input>\n              <ng-container>\n              <div *ngIf=\"submitted && f.c_password.errors\" class=\"error-message\">\n                <div *ngIf=\"f.c_password.errors.required\">Confirm Password is required</div>\n                <div *ngIf=\"f.c_password.errors.mustMatch\">Passwords must match</div>\n              </div>\n              </ng-container>\n            </form>\n             </ion-list>\n\n\n          <div padding class=\"btn_grp\">\n              <button class=\"btnclick\" (click)=\"signup()\">SIGN UP</button>\n              <p>Don't have an account? <span (click)=\"login()\">Login</span></p>\n          </div>\n      </div>\n  </div>\n\n\n\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/_helpers/must-match.validator.ts":
    /*!**************************************************!*\
      !*** ./src/app/_helpers/must-match.validator.ts ***!
      \**************************************************/

    /*! exports provided: MustMatch */

    /***/
    function srcApp_helpersMustMatchValidatorTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MustMatch", function () {
        return MustMatch;
      }); // custom validator to check that two fields match


      function MustMatch(controlName, matchingControlName) {
        return function (formGroup) {
          var control = formGroup.controls[controlName];
          var matchingControl = formGroup.controls[matchingControlName];

          if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
          } // set error on matchingControl if validation fails


          if (control.value !== matchingControl.value) {
            matchingControl.setErrors({
              mustMatch: true
            });
          } else {
            matchingControl.setErrors(null);
          }
        };
      }
      /***/

    },

    /***/
    "./src/app/signup/signup-routing.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/signup/signup-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: SignupPageRoutingModule */

    /***/
    function srcAppSignupSignupRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignupPageRoutingModule", function () {
        return SignupPageRoutingModule;
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


      var _signup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./signup.page */
      "./src/app/signup/signup.page.ts");

      var routes = [{
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_3__["SignupPage"]
      }];

      var SignupPageRoutingModule = function SignupPageRoutingModule() {
        _classCallCheck(this, SignupPageRoutingModule);
      };

      SignupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SignupPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/signup/signup.module.ts":
    /*!*****************************************!*\
      !*** ./src/app/signup/signup.module.ts ***!
      \*****************************************/

    /*! exports provided: SignupPageModule */

    /***/
    function srcAppSignupSignupModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignupPageModule", function () {
        return SignupPageModule;
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


      var _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./signup-routing.module */
      "./src/app/signup/signup-routing.module.ts");
      /* harmony import */


      var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./signup.page */
      "./src/app/signup/signup.page.ts");

      var SignupPageModule = function SignupPageModule() {
        _classCallCheck(this, SignupPageModule);
      };

      SignupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignupPageRoutingModule"]],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
      })], SignupPageModule);
      /***/
    },

    /***/
    "./src/app/signup/signup.page.scss":
    /*!*****************************************!*\
      !*** ./src/app/signup/signup.page.scss ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function srcAppSignupSignupPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".back_img {\n  background: #f1f1f1;\n  background-color: #ece2e200;\n  background-position-x: 0%;\n  background-position-y: 0%;\n  background-repeat: repeat;\n  background-size: auto;\n  background-size: cover;\n  background-position: top center;\n  background-repeat: no-repeat;\n  background-color: #ececec;\n}\n\n.logo h3 {\n  font-size: 16px;\n  margin: 25px 0 40px;\n}\n\n.login_form_main {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  margin-top: 67px;\n}\n\n.login_form {\n  width: 100%;\n}\n\n.img_sign img {\n  width: 200px;\n  margin: 10px;\n}\n\n.logo img {\n  width: 100px;\n}\n\n.logo {\n  padding: 0;\n  text-align: center;\n}\n\n.input_1 {\n  height: 50px;\n  background: #fff;\n  color: #575757;\n  font-size: 13px;\n  border: 1px solid #d8d8d8 !important;\n  border-radius: 3px;\n  width: 322px;\n  padding-left: 0px;\n  margin: 10px auto;\n  left: 4px;\n}\n\n.btn_grp {\n  padding: 10px 0 !important;\n  text-align: center;\n  font-size: 15px;\n}\n\n.btn_grp p span {\n  color: #5ac5ad;\n}\n\n.toolbar-background.toolbar-background-ios {\n  background: #fff;\n  border: none;\n}\n\n.header-md::after,\n.tabs-md[tabsPlacement=top] > .tabbar::after,\n.footer-md::before,\n.tabs-md[tabsPlacement=bottom] > .tabbar::before {\n  left: 0;\n  bottom: -5px;\n  background-position: left 0 top -2px;\n  position: absolute;\n  width: 100%;\n  height: 5px;\n  background-image: none;\n  background-repeat: repeat-x;\n  content: \"\";\n}\n\n.label input {\n  width: 100%;\n  height: 30px;\n  border: none;\n}\n\n.label {\n  display: flex;\n  align-items: center;\n}\n\n.label img {\n  width: 32px;\n  height: 20px;\n  margin-right: 8px;\n}\n\n.btnclick {\n  background-color: #5ac5ad;\n  color: #ffff;\n  width: 322px;\n  height: 53px;\n}\n\n.error-message {\n  display: block;\n  color: red;\n  margin-top: 5px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUNBO0VBRUksZUFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBQ0E7RUFFSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFDQTtFQUNJLFdBQUE7QUFFSjs7QUFBQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FBR0o7O0FBREE7RUFDSSxZQUFBO0FBSUo7O0FBRkE7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7QUFLSjs7QUFIQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtBQU1KOztBQUpBO0VBQ0ksMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFPSjs7QUFMQTtFQUNJLGNBQUE7QUFRSjs7QUFOQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBQVNKOztBQVBBOzs7O0VBSUksT0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtBQVVKOztBQVJBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBV0o7O0FBVEE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFZSjs7QUFWQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFhSjs7QUFYQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBY0o7O0FBWkE7RUFBaUIsY0FBQTtFQUNqQixVQUFBO0VBQ0EsZUFBQTtFQUFnQixrQkFBQTtBQWlCaEIiLCJmaWxlIjoic3JjL2FwcC9zaWdudXAvc2lnbnVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrX2ltZyB7XG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlMmUyMDA7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAwJTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDAlO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBhdXRvO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XG59XG4ubG9nbyBoMyB7XG4gICAgLy8gY29sb3I6ICMwMDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1hcmdpbjogMjVweCAwIDQwcHg7XG59XG4ubG9naW5fZm9ybV9tYWluIHtcbiAgICAvLyBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDY3cHg7XG59XG4ubG9naW5fZm9ybSB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uaW1nX3NpZ24gaW1nIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgbWFyZ2luOiAxMHB4O1xufVxuLmxvZ28gaW1nIHtcbiAgICB3aWR0aDogMTAwcHg7XG59XG4ubG9nbyB7XG4gICAgcGFkZGluZzogMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uaW5wdXRfMSB7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgY29sb3I6ICM1NzU3NTc7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkOGQ4ZDggIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgd2lkdGg6IDMyMnB4O1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgIG1hcmdpbjogMTBweCBhdXRvO1xuICAgIGxlZnQ6IDRweDtcbn1cbi5idG5fZ3JwIHtcbiAgICBwYWRkaW5nOiAxMHB4IDAgIWltcG9ydGFudDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuLmJ0bl9ncnAgcCBzcGFuIHtcbiAgICBjb2xvcjogIzVhYzVhZDtcbn1cbi50b29sYmFyLWJhY2tncm91bmQudG9vbGJhci1iYWNrZ3JvdW5kLWlvcyB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXI6IG5vbmU7XG59XG4uaGVhZGVyLW1kOjphZnRlcixcbi50YWJzLW1kW3RhYnNQbGFjZW1lbnQ9XCJ0b3BcIl0+LnRhYmJhcjo6YWZ0ZXIsXG4uZm9vdGVyLW1kOjpiZWZvcmUsXG4udGFicy1tZFt0YWJzUGxhY2VtZW50PVwiYm90dG9tXCJdPi50YWJiYXI6OmJlZm9yZSB7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IC01cHg7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCAwIHRvcCAtMnB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgICBjb250ZW50OiBcIlwiO1xufVxuLmxhYmVsIGlucHV0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYm9yZGVyOiBub25lO1xufVxuLmxhYmVsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubGFiZWwgaW1nIHtcbiAgICB3aWR0aDogMzJweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG4uYnRuY2xpY2t7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVhYzVhZDtcbiAgICBjb2xvcjogI2ZmZmY7XG4gICAgd2lkdGg6IDMyMnB4O1xuICAgIGhlaWdodDogNTNweDtcbn1cbi5lcnJvci1tZXNzYWdlIHsgZGlzcGxheTpibG9jaztcbmNvbG9yOnJlZDtcbm1hcmdpbi10b3A6NXB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7fVxuIl19 */";
      /***/
    },

    /***/
    "./src/app/signup/signup.page.ts":
    /*!***************************************!*\
      !*** ./src/app/signup/signup.page.ts ***!
      \***************************************/

    /*! exports provided: SignupPage */

    /***/
    function srcAppSignupSignupPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignupPage", function () {
        return SignupPage;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! .././_helpers/must-match.validator */
      "./src/app/_helpers/must-match.validator.ts");
      /* harmony import */


      var _services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/toast.service */
      "./src/app/services/toast.service.ts");
      /* harmony import */


      var _services_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/loader.service */
      "./src/app/services/loader.service.ts");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../services/auth.service */
      "./src/app/services/auth.service.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");

      var SignupPage = /*#__PURE__*/function () {
        function SignupPage(router, menuCtrl, formBuilder, modalController, toastService, ionLoader, http, authService, storage) {
          _classCallCheck(this, SignupPage);

          this.router = router;
          this.menuCtrl = menuCtrl;
          this.formBuilder = formBuilder;
          this.modalController = modalController;
          this.toastService = toastService;
          this.ionLoader = ionLoader;
          this.http = http;
          this.authService = authService;
          this.storage = storage;
          this.pTypeName = 'password';
          this.cTypeName = 'password';
          this.submitted = false;
          this.loading = false;
          this.userData = {
            name: "",
            email: "",
            password: "",
            c_password: ""
          };
          this['validation_messages'] = {
            name: [{
              type: 'required',
              message: 'First Name is required'
            }],
            last_name: [{
              type: 'required',
              message: 'Last Name is required'
            }, {
              type: 'minlength',
              message: 'Last Name must be at least 2 characters long'
            }],
            email: [{
              type: 'required',
              message: 'Email is required.'
            }, {
              type: 'pattern',
              message: 'Enter a valid email'
            }],
            primary_mobile_number: [{
              type: 'required',
              message: 'Mobile Number is required.'
            }, {
              type: 'minlength',
              message: 'Mobile Number must be at least 10 numbers.'
            }],
            password: [{
              type: 'required',
              message: 'Password is required.'
            }, {
              type: 'minlength',
              message: 'Password must be at least 8 characters long.'
            }, {
              type: 'pattern',
              message: 'Length should be 8(least one uppercase, one lowercase, one special charector and one number)'
            }],
            c_password: [{
              type: 'required',
              message: 'Confirm Password is required'
            }, {
              type: 'pattern',
              message: 'Confirm Password not match.'
            }]
          };
        }

        _createClass(SignupPage, [{
          key: "dismissRegister",
          value: function dismissRegister() {
            this.modalController.dismiss();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.registerForm = this.formBuilder.group({
              name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)])),
              last_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)])),
              email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z0-9_.+-]+@(?:[a-zA-Z0-9-]+\.)\.[A-Za-z0-9._%+-]{2,}')])),
              primary_mobile_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10)])),
              password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(25), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')])),
              c_password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
            }, {
              validator: Object(_helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_5__["MustMatch"])('password', 'c_password')
            });
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.menuCtrl.enable(false);
          }
        }, {
          key: "changeTypeP",
          value: function changeTypeP() {
            if (this.pTypeName == 'password') {
              this.pTypeName = 'text';
            } else {
              this.pTypeName = 'password';
            }
          }
        }, {
          key: "changeTypeC",
          value: function changeTypeC() {
            if (this.cTypeName == 'password') {
              this.cTypeName = 'text';
            } else {
              this.cTypeName = 'password';
            }
          }
        }, {
          key: "signup",
          value: function signup() {
            var _this = this;

            this.submitted = true;

            if (this.registerForm.invalid) {
              return;
            }

            var formData = new FormData();
            formData.append("name", this.registerForm.get('name').value);
            formData.append("last_name", this.registerForm.get('last_name').value);
            formData.append("primary_mobile_number", this.registerForm.get('primary_mobile_number').value);
            formData.append("email", this.registerForm.get('email').value);
            formData.append("password", this.registerForm.get('password').value);
            formData.append("c_password", this.registerForm.get('c_password').value);
            this.authService.addUser(this.registerForm.value).subscribe(function (response) {
              if (response) {
                _this.authService.updateUserDetails(response.data);

                _this.router.navigate(['/menu/login']);
              }
            });
          }
        }, {
          key: "hideLoader",
          value: function hideLoader() {
            this.ionLoader.hideLoader();
          }
        }, {
          key: "login",
          value: function login() {
            this.router.navigate(['/menu/login']);
          }
        }, {
          key: "f",
          get: function get() {
            return this.registerForm.controls;
          }
        }]);

        return SignupPage;
      }();

      SignupPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"]
        }, {
          type: _services_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["Storage"]
        }];
      };

      SignupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./signup.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./signup.page.scss */
        "./src/app/signup/signup.page.scss"))["default"]]
      })], SignupPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=signup-signup-module-es5.js.map