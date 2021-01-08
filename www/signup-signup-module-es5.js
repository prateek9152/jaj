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


      __webpack_exports__["default"] = "<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n \n</ion-header>\n<ion-content padding class=\"back_img\">\n\n\n\n  <div class=\"login_form_main\">\n      <div class=\"login_form\">\n          <div class=\"logo\">\n              <img src=\"../../assets/imgs/login/jajlogo.jpeg\">\n              <h3>Please enter your details</h3>\n          </div>\n\n\n          <ion-list style=\"margin:0 0 20px; display: inline; overflow-y: hidden; max-height:72vh ;\" >\n            <form [formGroup]=\"registerForm\" (ngSubmit)=\"signup()\" style=\"margin-top: -29px;\n            padding-left: 15px;\n            padding-right: 20px;\" >\n            <ion-input class=\"input_1\" type=\"text\" formControlName=\"name\" placeholder=\"Enter First Name\" [ngClass]=\"{'is-invalid': submitted && f.name.errors}\"></ion-input>\n            <ng-container *ngFor=\"let validation of validation_messages.name\">\n                <span class=\"error-message\"\n                  *ngIf=\"(submitted || registerForm.get('name').touched) && registerForm.get('name').hasError(validation.type)\">\n                  {{ validation.message }}\n                </span>\n              </ng-container>\n              <ion-input class=\"input_1\"  type=\"text\" formControlName=\"last_name\" placeholder=\"Enter Last Name\" [ngClass]=\"{'is-invalid': submitted && f.last_name.errors}\"></ion-input>\n              <ng-container *ngFor=\"let validation of validation_messages.last_name\">\n                <span class=\"error-message\"\n                  *ngIf=\"(submitted || registerForm.get('last_name').touched) && registerForm.get('last_name').hasError(validation.type)\">\n                  {{ validation.message }}\n                </span>\n              </ng-container>\n              \n              <ion-input class=\"input_1\" type=\"tel\" formControlName=\"primary_mobile_number\" placeholder=\"Mobile Number\" [ngClass]=\"{'is-invalid': submitted && f.primary_mobile_number.errors}\" minlength=\"10\"></ion-input>\n              <ng-container *ngFor=\"let validation of validation_messages.primary_mobile_number\">\n                <span class=\"error-message\"\n                  *ngIf=\"(submitted || registerForm.get('primary_mobile_number').touched) && registerForm.get('primary_mobile_number').hasError(validation.type)\">\n                  {{ validation.message }}\n                </span>\n              </ng-container>\n              <ion-input class=\"input_1\" type=\"email\" formControlName=\"email\" placeholder=\"E-Mail\" [ngClass]=\"{'is-invalid': submitted && f.email.errors}\"></ion-input>\n              <ng-container *ngFor=\"let validation of validation_messages.email\">\n                <span class=\"error-message\"\n                  *ngIf=\"(submitted || registerForm.get('email').touched) && registerForm.get('email').hasError(validation.type)\">\n                  {{ validation.message }}\n                </span>\n              </ng-container>                  \n              \n              <ion-input class=\"input_1\"  type=\"password\" formControlName=\"password\" placeholder=\"Enter Password\" [ngClass]=\"{'is-invalid':submitted && f.password.errors}\"></ion-input>\n              <ng-container *ngFor=\"let validation of validation_messages.password\">\n                <span class=\"error-message\"\n                  *ngIf=\"(submitted || registerForm.get('password').touched) && registerForm.get('password').hasError(validation.type)\">\n                  {{ validation.message }}\n                </span>\n              </ng-container>\n              <ion-input class=\"input_1\" type=\"password\" formControlName=\"c_password\" placeholder=\"Enter Confirm Password\" [ngClass]=\"{'is-invalid':submitted && f.c_password.errors}\"></ion-input>\n              <ng-container>\n              <div *ngIf=\"submitted && f.c_password.errors\" class=\"error-message\">\n                <div *ngIf=\"f.c_password.errors.required\">Confirm Password is required</div>\n                <div *ngIf=\"f.c_password.errors.mustMatch\">Passwords must match</div>\n              </div>\n              </ng-container>\n              <div class=\"box2\">\n                <div class=\"form-group form-check\" style=\"margin-top: 21px;\">\n                  <input type=\"checkbox\" formControlName=\"acceptTerms\" id=\"acceptTerms\" class=\"form-check-input\" style=\"position: absolute;\n                  left: 46px;\" [ngClass]=\"{ 'is-invalid': submitted && f.acceptTerms.errors }\" />\n                 &nbsp; <label for=\"acceptTerms\" class=\"form-check-label\" style=\"    position: absolute;\n                 left: 62px;\"><a style=\"font-size: 14px;\"[routerLink]=\"['/menu/term']\">Terms and Conditions</a></label>\n                  <div *ngIf=\"submitted && f.acceptTerms.errors\" class=\"errmsg\">Accept Ts & Cs is required</div>\n              </div>\n            </div>\n            </form>\n            \n             </ion-list>\n\n\n          <div padding class=\"btn_grp\">\n              <button class=\"btnclick\" (click)=\"signup()\">SIGN UP</button>\n              <p>Don't have an account? <span (click)=\"login()\">Login</span></p>\n          </div>\n      </div>\n  </div>\n\n\n\n</ion-content>";
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


      __webpack_exports__["default"] = ".back_img {\n  background: #f1f1f1;\n  background-color: #ece2e200;\n  background-position-x: 0%;\n  background-position-y: 0%;\n  background-repeat: repeat;\n  background-size: auto;\n  background-size: cover;\n  background-position: top center;\n  background-repeat: no-repeat;\n  background-color: #ececec;\n}\n\n.logo h3 {\n  font-size: 16px;\n  margin: 25px 0 40px;\n  margin-top: 3px;\n}\n\n.login_form_main {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  margin-top: 67px;\n}\n\n.login_form {\n  width: 100%;\n}\n\n.img_sign img {\n  width: 200px;\n  margin: 10px;\n}\n\n.logo img {\n  width: 100px;\n  margin-top: -65px;\n}\n\n.logo {\n  padding: 0;\n  text-align: center;\n}\n\n.input_1 {\n  height: 50px;\n  background: #fff;\n  color: #575757;\n  font-size: 13px;\n  border: 1px solid #d8d8d8 !important;\n  border-radius: 3px;\n  width: 322px;\n  padding-left: 0px;\n  margin: 10px auto;\n  left: 4px;\n  margin-top: 26px;\n}\n\n.btn_grp {\n  padding: 10px 0 !important;\n  text-align: center;\n  font-size: 15px;\n  margin-top: 7px;\n}\n\n.btn_grp p span {\n  color: #5ac5ad;\n}\n\n.toolbar-background.toolbar-background-ios {\n  background: #fff;\n  border: none;\n}\n\n.header-md::after,\n.tabs-md[tabsPlacement=top] > .tabbar::after,\n.footer-md::before,\n.tabs-md[tabsPlacement=bottom] > .tabbar::before {\n  left: 0;\n  bottom: -5px;\n  background-position: left 0 top -2px;\n  position: absolute;\n  width: 100%;\n  height: 5px;\n  background-image: none;\n  background-repeat: repeat-x;\n  content: \"\";\n}\n\n.label input {\n  width: 100%;\n  height: 30px;\n  border: none;\n}\n\n.label {\n  display: flex;\n  align-items: center;\n}\n\n.label img {\n  width: 32px;\n  height: 20px;\n  margin-right: 8px;\n}\n\n.btnclick {\n  background-color: #5ac5ad;\n  color: #ffff;\n  width: 322px;\n  height: 53px;\n}\n\n.error-message {\n  color: red;\n  /* margin-top: 0px; */\n  /* text-align: center; */\n  font-size: 83%;\n  position: absolute;\n  margin-top: -2px;\n  /* right: 93px; */\n  left: 47px;\n  display: initial;\n}\n\n.box2 {\n  margin-top: 12px !important;\n}\n\n.errmsg {\n  color: red;\n  /* margin-top: 0px; */\n  /* text-align: center; */\n  font-size: 83%;\n  position: absolute;\n  margin-top: 17px;\n  /* right: 93px; */\n  left: 47px;\n  display: initial;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUNBO0VBRUksZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUNBO0VBRUksYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxXQUFBO0FBRUo7O0FBQUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQUdKOztBQURBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0FBSUo7O0FBRkE7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7QUFLSjs7QUFGQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBS0o7O0FBSEE7RUFDSSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFNSjs7QUFKQTtFQUNJLGNBQUE7QUFPSjs7QUFMQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBQVFKOztBQU5BOzs7O0VBSUksT0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtBQVNKOztBQVBBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBVUo7O0FBUkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFXSjs7QUFUQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFZSjs7QUFWQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBYUo7O0FBWEE7RUFBaUIsVUFBQTtFQUNiLHFCQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBZUo7O0FBZEk7RUFDSSwyQkFBQTtBQWlCUjs7QUFmTTtFQUNFLFVBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQWtCUiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tfaW1nIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2UyZTIwMDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDAlO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogMCU7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcbn1cbi5sb2dvIGgzIHtcbiAgICAvLyBjb2xvcjogIzAwMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luOiAyNXB4IDAgNDBweDtcbiAgICBtYXJnaW4tdG9wOiAzcHg7XG59XG4ubG9naW5fZm9ybV9tYWluIHtcbiAgICAvLyBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDY3cHg7XG59XG4ubG9naW5fZm9ybSB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uaW1nX3NpZ24gaW1nIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgbWFyZ2luOiAxMHB4O1xufVxuLmxvZ28gaW1nIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgbWFyZ2luLXRvcDogLTY1cHg7XG59XG4ubG9nbyB7XG4gICAgcGFkZGluZzogMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbn1cbi5pbnB1dF8xIHtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBjb2xvcjogIzU3NTc1NztcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Q4ZDhkOCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICB3aWR0aDogMzIycHg7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XG4gICAgbGVmdDogNHB4O1xuICAgIG1hcmdpbi10b3A6IDI2cHg7XG59XG4uYnRuX2dycCB7XG4gICAgcGFkZGluZzogMTBweCAwICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBtYXJnaW4tdG9wOiA3cHg7XG59XG4uYnRuX2dycCBwIHNwYW4ge1xuICAgIGNvbG9yOiAjNWFjNWFkO1xufVxuLnRvb2xiYXItYmFja2dyb3VuZC50b29sYmFyLWJhY2tncm91bmQtaW9zIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlcjogbm9uZTtcbn1cbi5oZWFkZXItbWQ6OmFmdGVyLFxuLnRhYnMtbWRbdGFic1BsYWNlbWVudD1cInRvcFwiXT4udGFiYmFyOjphZnRlcixcbi5mb290ZXItbWQ6OmJlZm9yZSxcbi50YWJzLW1kW3RhYnNQbGFjZW1lbnQ9XCJib3R0b21cIl0+LnRhYmJhcjo6YmVmb3JlIHtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogLTVweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IDAgdG9wIC0ycHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNXB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICAgIGNvbnRlbnQ6IFwiXCI7XG59XG4ubGFiZWwgaW5wdXQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMzBweDtcbiAgICBib3JkZXI6IG5vbmU7XG59XG4ubGFiZWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5sYWJlbCBpbWcge1xuICAgIHdpZHRoOiAzMnB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cbi5idG5jbGlja3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWFjNWFkO1xuICAgIGNvbG9yOiAjZmZmZjtcbiAgICB3aWR0aDogMzIycHg7XG4gICAgaGVpZ2h0OiA1M3B4O1xufVxuLmVycm9yLW1lc3NhZ2UgeyBjb2xvcjogcmVkO1xuICAgIC8qIG1hcmdpbi10b3A6IDBweDsgKi9cbiAgICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXG4gICAgZm9udC1zaXplOiA4MyU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbi10b3A6IC0ycHg7XG4gICAgLyogcmlnaHQ6IDkzcHg7ICovXG4gICAgbGVmdDogNDdweDtcbiAgICBkaXNwbGF5OiBpbml0aWFsO31cbiAgICAuYm94MntcbiAgICAgICAgbWFyZ2luLXRvcDogMTJweCAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgICAgLmVycm1zZ3tcbiAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgLyogbWFyZ2luLXRvcDogMHB4OyAqL1xuICAgICAgICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXG4gICAgICAgIGZvbnQtc2l6ZTogODMlO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIG1hcmdpbi10b3A6IDE3cHg7XG4gICAgICAgIC8qIHJpZ2h0OiA5M3B4OyAqL1xuICAgICAgICBsZWZ0OiA0N3B4O1xuICAgICAgICBkaXNwbGF5OiBpbml0aWFsO1xuICAgICAgfSJdfQ== */";
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
        function SignupPage(router, menuCtrl, formBuilder, modalController, toastService, ionLoader, http, authService, storage, alertctrl) {
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
          this.alertctrl = alertctrl;
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
            }],
            acceptTerms: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].requiredTrue]
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
              c_password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              acceptTerms: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].requiredTrue]))
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
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        if (response) {
                          this.authService.updateUserDetails(response.data);
                          this.router.navigate(['/menu/login']);
                          this.toastService.showToast();
                        } else {
                          this.toastService.errorLogin();
                        }

                      case 1:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
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
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
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