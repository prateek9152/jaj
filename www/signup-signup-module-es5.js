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


      __webpack_exports__["default"] = "<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n \n</ion-header>\n<ion-content padding class=\"back_img\">\n\n\n\n  <div class=\"login_form_main\">\n      <div class=\"login_form\">\n          <div class=\"logo\">\n              <img src=\"../../assets/imgs/login/logo.png\">\n              <h3>Please enter your details</h3>\n          </div>\n\n\n          <ion-list style=\"margin:0 0 20px\">\n\n\n\n              <ion-label style=\"padding-left: 50px;\n              \">First Name</ion-label>\n                  <ion-input class=\"input_1\" type=\"text\" placeholder=\"Enter First Name\"></ion-input>\n              \n\n\n              <ion-label style=\"padding-left: 50px;\n              \">Last Name</ion-label>\n                  <ion-input class=\"input_1\"  type=\"text\" placeholder=\"Enter Last Name\"></ion-input>\n              \n\n\n              <ion-label style=\"padding-left: 50px;\n              \" >Username</ion-label>\n                  <ion-input class=\"input_1\"  type=\"text\"\n                      placeholder=\"Enter Username\"></ion-input>\n                  <ion-icon color=\"primary\"  name=\"ios-checkmark\" item-end>\n                  </ion-icon>\n              <!-- <p style=\"margin-top: 0px;\" ion-text color=\"danger\">{{userNameS}}</p> -->\n\n              <!-- <label>Country</label>\n              <ion-item (click)=\"openModal('forCountry')\" class=\"input_1\" no-lines>\n                  <input [(ngModel)]=\"formData.countryName\" disabled style=\"opacity:1 !important;background: transparent;\" type=\"text\" placeholder=\"Select Country\">\n              </ion-item> -->\n\n              <ion-label style=\"padding-left: 35px;\n              \">Enter Your Phone Number</ion-label>\n                  <!-- <button (click)=\"openModal()\" no-margin style=\"padding: 0 6px 0 0;\" ion-button clear>\n                      <img [src]=\"formData.countryFlag\" start>\n                      <ion-icon style=\"color: black;font-weight: 600;\" name=\"ios-arrow-down\"></ion-icon>\n                  </button> -->\n                  <ion-input class=\"input_1\" type=\"number\" placeholder=\"Mobile Number\"></ion-input>\n\n              <ion-label style=\"padding-left: 50px;\n              \">Password</ion-label>\n                  <ion-input class=\"input_1\"  type=\"password\" placeholder=\"Enter Password\">\n                  <!-- <ion-icon (click)=\"changeTypeP()\" *ngIf=\"pTypeName=='password'\" name=\"ios-eye-outline\" item-end>\n                  </ion-icon>\n                  <ion-icon (click)=\"changeTypeP()\" *ngIf=\"pTypeName=='text'\" name=\"ios-eye-off-outline\" item-end>\n                  </ion-icon> -->\n                  </ion-input>\n\n              <ion-label style=\"padding-left: 50px;\n              \">Confirm Password</ion-label>\n                  <ion-input class=\"input_1\" type=\"password\" placeholder=\"Enter Confirm Password\">\n                  <!-- <ion-icon (click)=\"changeTypeC()\" *ngIf=\"cTypeName=='password'\" name=\"ios-eye-outline\" item-end>\n                  </ion-icon>\n                  <ion-icon (click)=\"changeTypeC()\" *ngIf=\"cTypeName=='text'\" name=\"ios-eye-off-outline\" item-end>\n                  </ion-icon> -->\n                  </ion-input>\n\n          </ion-list>\n\n\n          <div padding class=\"btn_grp\">\n              <button class=\"btnclick\" (click)=\"signup()\">SIGN UP</button>\n              <p>Don't have an account? <span (click)=\"login()\">Login</span></p>\n          </div>\n      </div>\n  </div>\n\n\n\n</ion-content>";
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
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignupPageRoutingModule"]],
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


      __webpack_exports__["default"] = ".back_img {\n  background: #f1f1f1;\n  background-color: #ece2e200;\n  background-position-x: 0%;\n  background-position-y: 0%;\n  background-repeat: repeat;\n  background-size: auto;\n  background-size: cover;\n  background-position: top center;\n  background-repeat: no-repeat;\n  background-color: #ececec;\n}\n\n.logo h3 {\n  font-size: 16px;\n  margin: 25px 0 40px;\n}\n\n.login_form_main {\n  display: flex;\n  width: 100%;\n  align-items: center;\n}\n\n.login_form {\n  width: 100%;\n}\n\n.img_sign img {\n  width: 200px;\n  margin: 10px;\n}\n\n.logo img {\n  width: 100px;\n}\n\n.logo {\n  padding: 0;\n  text-align: center;\n}\n\n.input_1 {\n  margin: 10px 0;\n  height: 35px;\n  background: #fff;\n  color: #575757;\n  font-size: 13px;\n  border: 1px solid #d8d8d8 !important;\n  border-radius: 3px;\n  width: 322px;\n  padding-left: 0px;\n  left: 47px;\n}\n\n.btn_grp {\n  padding: 10px 0 !important;\n  text-align: center;\n  font-size: 15px;\n}\n\n.btn_grp p span {\n  color: #fe6e4a;\n}\n\n.toolbar-background.toolbar-background-ios {\n  background: #fff;\n  border: none;\n}\n\n.header-md::after,\n.tabs-md[tabsPlacement=top] > .tabbar::after,\n.footer-md::before,\n.tabs-md[tabsPlacement=bottom] > .tabbar::before {\n  left: 0;\n  bottom: -5px;\n  background-position: left 0 top -2px;\n  position: absolute;\n  width: 100%;\n  height: 5px;\n  background-image: none;\n  background-repeat: repeat-x;\n  content: \"\";\n}\n\n.label input {\n  width: 100%;\n  height: 30px;\n  border: none;\n}\n\n.label {\n  display: flex;\n  align-items: center;\n}\n\n.label img {\n  width: 32px;\n  height: 20px;\n  margin-right: 8px;\n}\n\n.btnclick {\n  background-color: #fe6e4a;\n  color: #ffff;\n  width: 322px;\n  height: 53px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUNBO0VBRUksZUFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBQ0E7RUFFSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBQ0E7RUFDSSxXQUFBO0FBRUo7O0FBQUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQUdKOztBQURBO0VBQ0ksWUFBQTtBQUlKOztBQUZBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0FBS0o7O0FBSEE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBQU1KOztBQUpBO0VBQ0ksMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFPSjs7QUFMQTtFQUNJLGNBQUE7QUFRSjs7QUFOQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBQVNKOztBQVBBOzs7O0VBSUksT0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtBQVVKOztBQVJBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBV0o7O0FBVEE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFZSjs7QUFWQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFhSjs7QUFYQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBY0oiLCJmaWxlIjoic3JjL2FwcC9zaWdudXAvc2lnbnVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrX2ltZyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZTJlMjAwO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAwJTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcclxufVxyXG4ubG9nbyBoMyB7XHJcbiAgICAvLyBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbjogMjVweCAwIDQwcHg7XHJcbn1cclxuLmxvZ2luX2Zvcm1fbWFpbiB7XHJcbiAgICAvLyBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5sb2dpbl9mb3JtIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5pbWdfc2lnbiBpbWcge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59XHJcbi5sb2dvIGltZyB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbn1cclxuLmxvZ28ge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uaW5wdXRfMSB7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBjb2xvcjogIzU3NTc1NztcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkOGQ4ZDggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIHdpZHRoOiAzMjJweDtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgbGVmdDogNDdweDtcclxufVxyXG4uYnRuX2dycCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDAgIWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG4uYnRuX2dycCBwIHNwYW4ge1xyXG4gICAgY29sb3I6ICNmZTZlNGE7XHJcbn1cclxuLnRvb2xiYXItYmFja2dyb3VuZC50b29sYmFyLWJhY2tncm91bmQtaW9zIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuLmhlYWRlci1tZDo6YWZ0ZXIsXHJcbi50YWJzLW1kW3RhYnNQbGFjZW1lbnQ9XCJ0b3BcIl0+LnRhYmJhcjo6YWZ0ZXIsXHJcbi5mb290ZXItbWQ6OmJlZm9yZSxcclxuLnRhYnMtbWRbdGFic1BsYWNlbWVudD1cImJvdHRvbVwiXT4udGFiYmFyOjpiZWZvcmUge1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogLTVweDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgMCB0b3AgLTJweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xyXG4gICAgY29udGVudDogXCJcIjtcclxufVxyXG4ubGFiZWwgaW5wdXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuLmxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5sYWJlbCBpbWcge1xyXG4gICAgd2lkdGg6IDMycHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG4uYnRuY2xpY2t7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmU2ZTRhO1xyXG4gICAgY29sb3I6ICNmZmZmO1xyXG4gICAgd2lkdGg6IDMyMnB4O1xyXG4gICAgaGVpZ2h0OiA1M3B4O1xyXG59Il19 */";
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var SignupPage = /*#__PURE__*/function () {
        function SignupPage(router, menuCtrl) {
          _classCallCheck(this, SignupPage);

          this.router = router;
          this.menuCtrl = menuCtrl;
          this.pTypeName = 'password';
          this.cTypeName = 'password';
        }

        _createClass(SignupPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
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
            this.router.navigate(['/menu/verify']);
          }
        }, {
          key: "login",
          value: function login() {
            this.router.navigate(['/menu/login']);
          }
        }]);

        return SignupPage;
      }();

      SignupPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]
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