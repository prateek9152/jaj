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


      __webpack_exports__["default"] = "<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n \n</ion-header>\n<ion-content padding class=\"back_img\">\n\n\n\n  <div class=\"login_form_main\">\n      <div class=\"login_form\">\n          <div class=\"logo\">\n              <img src=\"../../assets/imgs/login/jajlogo.jpeg\">\n              <h3>Please enter your details</h3>\n          </div>\n\n\n          <ion-list style=\"margin:0 0 20px; display: inline;\">\n            <form [formGroup]=\"registerForm\" (ngSubmit)=\"signup()\">\n            <ion-input class=\"input_1\" type=\"text\" formControlName=\"name\" placeholder=\"Enter First Name\" [ngClass]=\"{'is-invalid': submitted && f.name.errors}\"></ion-input>\n            <ng-container *ngFor=\"let validation of validation_messages.name\">\n                <span class=\"error-message\"\n                  *ngIf=\"(submitted || registerForm.get('name').touched) && registerForm.get('name').hasError(validation.type)\">\n                  {{ validation.message }}\n                </span>\n              </ng-container>\n              <!-- <ion-input class=\"input_1\"  type=\"text\" formControlName=\"lastName\" placeholder=\"Enter Last Name\" [ngClass]=\"{'is-invalid': submitted && f.lastName.errors}\"></ion-input>\n              <ng-container *ngFor=\"let validation of validation_messages.lastName\">\n                <span class=\"error-message\"\n                  *ngIf=\"(submitted || registerForm.get('lastName').touched) && registerForm.get('lastName').hasError(validation.type)\">\n                  {{ validation.message }}\n                </span>\n              </ng-container> -->\n              <!-- <ion-input class=\"input_1\"  type=\"text\" formControlName=\"username\" placeholder=\"Enter Username\" [ngClass]=\"{'is-invalid': submitted && f.username.errors}\"></ion-input>\n              <ng-container *ngFor=\"let validation of validation_messages.username\">\n                <span class=\"error-message\"\n                  *ngIf=\"(submitted || registerForm.get('username').touched) && registerForm.get('username').hasError(validation.type)\">\n                  {{ validation.message }}\n                </span>\n              </ng-container> -->\n              <ion-input class=\"input_1\"  type=\"email\" formControlName=\"email\" placeholder=\"Enter Email\" [ngClass]=\"{'is-invalid': submitted && f.email.errors}\"></ion-input>\n              <ng-container *ngFor=\"let validation of validation_messages.email\">\n                <span class=\"error-message\"\n                  *ngIf=\"(submitted || registerForm.get('email').touched) && registerForm.get('email').hasError(validation.type)\">\n                  {{ validation.message }}\n                </span>\n              </ng-container>                  \n              <!-- <ion-input class=\"input_1\" type=\"number\" formControlName=\"phone\" placeholder=\"Mobile Number\" [ngClass]=\"{'is-invalid': submitted && f.phone.errors}\"></ion-input>\n              <ng-container *ngFor=\"let validation of validation_messages.phone\">\n                <span class=\"error-message\"\n                  *ngIf=\"(submitted || registerForm.get('phone').touched) && registerForm.get('phone').hasError(validation.type)\">\n                  {{ validation.message }}\n                </span>\n              </ng-container> -->\n              <ion-input class=\"input_1\"  type=\"password\" formControlName=\"password\" placeholder=\"Enter Password\" [ngClass]=\"{'is-invalid':submitted && f.password.errors}\"></ion-input>\n              <ng-container *ngFor=\"let validation of validation_messages.password\">\n                <span class=\"error-message\"\n                  *ngIf=\"(submitted || registerForm.get('password').touched) && registerForm.get('password').hasError(validation.type)\">\n                  {{ validation.message }}\n                </span>\n              </ng-container>\n              <ion-input class=\"input_1\" type=\"password\" formControlName=\"c_password\" placeholder=\"Enter Confirm Password\" [ngClass]=\"{'is-invalid':submitted && f.c_password.errors}\"></ion-input>\n              <ng-container>\n              <div *ngIf=\"submitted && f.c_password.errors\" class=\"error-message\">\n                <div *ngIf=\"f.c_password.errors.required\">Confirm Password is required</div>\n                <div *ngIf=\"f.c_password.errors.mustMatch\">Passwords must match</div>\n              </div>\n              </ng-container>\n            </form>\n             </ion-list>\n\n\n          <div padding class=\"btn_grp\">\n              <button class=\"btnclick\" (click)=\"signup()\">SIGN UP</button>\n              <p>Don't have an account? <span (click)=\"login()\">Login</span></p>\n          </div>\n      </div>\n  </div>\n\n\n\n</ion-content>";
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


      __webpack_exports__["default"] = ".back_img {\n  background: #f1f1f1;\n  background-color: #ece2e200;\n  background-position-x: 0%;\n  background-position-y: 0%;\n  background-repeat: repeat;\n  background-size: auto;\n  background-size: cover;\n  background-position: top center;\n  background-repeat: no-repeat;\n  background-color: #ececec;\n}\n\n.logo h3 {\n  font-size: 16px;\n  margin: 25px 0 40px;\n}\n\n.login_form_main {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  margin-top: 67px;\n}\n\n.login_form {\n  width: 100%;\n}\n\n.img_sign img {\n  width: 200px;\n  margin: 10px;\n}\n\n.logo img {\n  width: 100px;\n}\n\n.logo {\n  padding: 0;\n  text-align: center;\n}\n\n.input_1 {\n  height: 50px;\n  background: #fff;\n  color: #575757;\n  font-size: 13px;\n  border: 1px solid #d8d8d8 !important;\n  border-radius: 3px;\n  width: 322px;\n  padding-left: 0px;\n  margin: 10px auto;\n  left: 4px;\n}\n\n.btn_grp {\n  padding: 10px 0 !important;\n  text-align: center;\n  font-size: 15px;\n}\n\n.btn_grp p span {\n  color: #5ac5ad;\n}\n\n.toolbar-background.toolbar-background-ios {\n  background: #fff;\n  border: none;\n}\n\n.header-md::after,\n.tabs-md[tabsPlacement=top] > .tabbar::after,\n.footer-md::before,\n.tabs-md[tabsPlacement=bottom] > .tabbar::before {\n  left: 0;\n  bottom: -5px;\n  background-position: left 0 top -2px;\n  position: absolute;\n  width: 100%;\n  height: 5px;\n  background-image: none;\n  background-repeat: repeat-x;\n  content: \"\";\n}\n\n.label input {\n  width: 100%;\n  height: 30px;\n  border: none;\n}\n\n.label {\n  display: flex;\n  align-items: center;\n}\n\n.label img {\n  width: 32px;\n  height: 20px;\n  margin-right: 8px;\n}\n\n.btnclick {\n  background-color: #5ac5ad;\n  color: #ffff;\n  width: 322px;\n  height: 53px;\n}\n\n.error-message {\n  display: block;\n  color: red;\n  margin-top: 5px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUNBO0VBRUksZUFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBQ0E7RUFFSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFDQTtFQUNJLFdBQUE7QUFFSjs7QUFBQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FBR0o7O0FBREE7RUFDSSxZQUFBO0FBSUo7O0FBRkE7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7QUFLSjs7QUFIQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtBQU1KOztBQUpBO0VBQ0ksMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFPSjs7QUFMQTtFQUNJLGNBQUE7QUFRSjs7QUFOQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBQVNKOztBQVBBOzs7O0VBSUksT0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtBQVVKOztBQVJBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBV0o7O0FBVEE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFZSjs7QUFWQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFhSjs7QUFYQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBY0o7O0FBWkE7RUFBaUIsY0FBQTtFQUNqQixVQUFBO0VBQ0EsZUFBQTtFQUFnQixrQkFBQTtBQWlCaEIiLCJmaWxlIjoic3JjL2FwcC9zaWdudXAvc2lnbnVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrX2ltZyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZTJlMjAwO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAwJTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcclxufVxyXG4ubG9nbyBoMyB7XHJcbiAgICAvLyBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbjogMjVweCAwIDQwcHg7XHJcbn1cclxuLmxvZ2luX2Zvcm1fbWFpbiB7XHJcbiAgICAvLyBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogNjdweDtcclxufVxyXG4ubG9naW5fZm9ybSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uaW1nX3NpZ24gaW1nIHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIG1hcmdpbjogMTBweDtcclxufVxyXG4ubG9nbyBpbWcge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG59XHJcbi5sb2dvIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmlucHV0XzEge1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGNvbG9yOiAjNTc1NzU3O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Q4ZDhkOCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgd2lkdGg6IDMyMnB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgIGxlZnQ6IDRweDtcclxufVxyXG4uYnRuX2dycCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDAgIWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG4uYnRuX2dycCBwIHNwYW4ge1xyXG4gICAgY29sb3I6ICM1YWM1YWQ7XHJcbn1cclxuLnRvb2xiYXItYmFja2dyb3VuZC50b29sYmFyLWJhY2tncm91bmQtaW9zIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuLmhlYWRlci1tZDo6YWZ0ZXIsXHJcbi50YWJzLW1kW3RhYnNQbGFjZW1lbnQ9XCJ0b3BcIl0+LnRhYmJhcjo6YWZ0ZXIsXHJcbi5mb290ZXItbWQ6OmJlZm9yZSxcclxuLnRhYnMtbWRbdGFic1BsYWNlbWVudD1cImJvdHRvbVwiXT4udGFiYmFyOjpiZWZvcmUge1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogLTVweDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgMCB0b3AgLTJweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xyXG4gICAgY29udGVudDogXCJcIjtcclxufVxyXG4ubGFiZWwgaW5wdXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuLmxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5sYWJlbCBpbWcge1xyXG4gICAgd2lkdGg6IDMycHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG4uYnRuY2xpY2t7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWFjNWFkO1xyXG4gICAgY29sb3I6ICNmZmZmO1xyXG4gICAgd2lkdGg6IDMyMnB4O1xyXG4gICAgaGVpZ2h0OiA1M3B4O1xyXG59XHJcbi5lcnJvci1tZXNzYWdlIHsgZGlzcGxheTpibG9jaztcclxuY29sb3I6cmVkO1xyXG5tYXJnaW4tdG9wOjVweDsgdGV4dC1hbGlnbjogY2VudGVyO31cclxuIl19 */";
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


      var _toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! .././toast.service */
      "./src/app/toast.service.ts");
      /* harmony import */


      var _loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../loader.service */
      "./src/app/loader.service.ts");
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../auth.service */
      "./src/app/auth.service.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");

      var SignupPage = /*#__PURE__*/function () {
        function SignupPage(router, menuCtrl, formBuilder, modalController, toastService, ionLoader, storage, http, authService) {
          _classCallCheck(this, SignupPage);

          this.router = router;
          this.menuCtrl = menuCtrl;
          this.formBuilder = formBuilder;
          this.modalController = modalController;
          this.toastService = toastService;
          this.ionLoader = ionLoader;
          this.storage = storage;
          this.http = http;
          this.authService = authService;
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
            // lastName: [{type: 'required',message: 'Last Name is required'},{type:'minlength',message: 'Last Name must be at least 2 characters long'}],
            // username: [   { type: 'required', message: 'Username is required.' },
            // { type: 'minlength', message: 'Username must be at least 5 characters long.' },
            // { type: 'maxlength', message: 'Username cannot be more than 25 characters long.' },
            // { type: 'pattern', message: 'Your username must contain only numbers and letters.' },
            // { type: 'validUsername', message: 'Your username has already been taken.' }],
            email: [{
              type: 'required',
              message: 'Email is required'
            }],
            // phone:[
            //   { type: 'required', message: 'Mobile Number is required.' },
            //   { type: 'minlength', message: 'Mobile Number must be at least 10 numbers.' },
            //   ],
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
              // lastName: new FormControl('',Validators.compose([Validators.required,Validators.minLength(2)])),
              // username: new FormControl('',Validators.compose([
              //   UsernameValidator.validUsername,
              //   Validators.maxLength(25),
              //   Validators.minLength(5),
              //   Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
              //   Validators.required
              // ])),
              email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
              // phone: new FormControl('',Validators.compose([
              //   Validators.required,Validators.minLength(10)
              // ])),
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
            var formData = new FormData();
            formData.append("name", this.registerForm.get('name').value);
            formData.append("email", this.registerForm.get('email').value);
            formData.append("password", this.registerForm.get('password').value);
            formData.append("c_password", this.registerForm.get('c_password').value);
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({
              "Accept": "application/json"
            });
            this.http.post('https://jajoj.threethree.in/api/register', formData, {
              headers: headers
            }).subscribe(function (response) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        if (response.status == 1) {
                          this.storage.set('userData', this.registerForm.value.email);
                          this.storage.set('userToken', response.userToken);
                          this.router.navigate(['/menu/verify', this.registerForm.value.email]).then(function (nav) {});
                        }

                      case 1:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            }); //  console.log(this.registerForm.value);
            // this.authService.addUser(this.registerForm.value).subscribe((data:any)=> {
            //   console.log(data);
            //   this.router.navigate(['/menu/verify'])
            // })
            // let data1 = {
            //   "name":{value:this.userData.name,type:"NO"},
            //   "email":{value:this.userData.email,type:"NO"},
            //   "password":{value:this.userData.password,type:"NO"},
            //   "c_password":{value:this.userData.c_password,type:"NO"}
            // }
            // this.authService.postData(data1,'register').subscribe(
            //   (response:any) => {
            //     console.log(response);
            //     this.router.navigate(['/menu/verify'])
            //   }
            // )
            // if(this.registerForm.invalid){
            // return;
            // }
            // var formData: any = new FormData();
            // formData.append("firstName", this.registerForm.get('firstName').value);
            // formData.append("lastName", this.registerForm.get('lastName').value);
            // formData.append("username", this.registerForm.get('username').value);
            // formData.append("phone", this.registerForm.get('phone').value);
            // formData.append("password", this.registerForm.get('password').value);
            // formData.append("confirmPassword", this.registerForm.get('confirmPassword').value);
            // this.http.post('',formData).subscribe((response:any)=> {
            //   if(response.status==1){
            //     this.authService.updateUserDetails(response.data);
            //   }
            // })
            // this.toastService.showToast();
            // this.toastService.presentToast(data['message']);
            // this.ionLoader.showLoader();
            // setTimeout(() => {
            //   this.hideLoader();
            // },1000);
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
          type: _toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"]
        }, {
          type: _loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["Storage"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]
        }, {
          type: _auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]
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