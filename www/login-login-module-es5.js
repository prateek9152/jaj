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


      __webpack_exports__["default"] = "<ion-content>\n  <ion-content padding class=\"back_img\">\n\n\n\n    <div class=\"login_form_main\">\n      <div class=\"login_form\">\n        <div class=\"logo\">\n          <img src=\"assets/imgs/login/jajlogo.jpeg\">\n          <h3>Please enter your login detail</h3>\n        </div>\n  \n  \n        <ion-list style=\"margin:0 0 20px; display:inline\">\n  \n  \n          <!-- <ion-label style=\"text-align: center;\n          display: block;\">Enter Your Phone Number</ion-label> -->\n            <ion-input class=\"input_1\" type=\"number\" placeholder=\"Enter Your Mobile Number\"></ion-input>\n  \n  \n          <!-- <ion-label style=\"text-align: center;\n          display: block;\">Password</ion-label> -->\n            <ion-input class=\"input_1\" type=\"password\" placeholder=\"Enter Password\"></ion-input>\n           \n  \n        </ion-list>\n  \n        <h5 style=\"text-align: center;font-size: 13px;font-weight: normal;\" [routerLink]=\"['/menu/forgot']\">Forgot Password?</h5>\n  \n        <div padding class=\"btn_grp\">\n          <button class=\"btnclick\" (click)=\"login()\">LOGIN</button>\n          <p>Don't have an account? <span (click)=\"register()\">Sign Up</span></p>\n        </div>\n      </div>\n    </div>\n  \n  \n  \n  </ion-content>\n</ion-content>\n";
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
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
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


      __webpack_exports__["default"] = ".back_img {\n  background: #f1f1f1;\n  background-color: rgba(0, 0, 0, 0);\n  background-position-x: 0%;\n  background-position-y: 0%;\n  background-repeat: repeat;\n  background-size: auto;\n  background-size: cover;\n  background-position: top center;\n  background-repeat: no-repeat;\n  background-color: #ececec;\n}\n\n.logo h3 {\n  font-size: 16px;\n  margin: 25px 0 40px;\n  font-weight: bold;\n}\n\n.login_form_main {\n  height: 100%;\n  display: flex;\n  width: 100%;\n  align-items: center;\n}\n\n.login_form {\n  width: 100%;\n}\n\n.img_sign img {\n  width: 200px;\n  margin: 10px;\n}\n\n.logo img {\n  width: 100px;\n}\n\n.logo {\n  padding: 0;\n  text-align: center;\n}\n\n.input_1 {\n  height: 35px;\n  background: #fff;\n  color: #575757;\n  font-size: 13px;\n  border: 1px solid #d8d8d8 !important;\n  border-radius: 3px;\n  width: 322px;\n  padding-left: 0px;\n  margin: 10px auto;\n  left: -2px;\n}\n\n.btn_grp {\n  padding: 10px 0 !important;\n  text-align: center;\n  font-size: 15px;\n}\n\n.btn_grp p span {\n  color: #fe6e4a;\n}\n\n.toolbar-background.toolbar-background-ios {\n  background: #fff;\n  border: none;\n}\n\n.header-md::after, .tabs-md[tabsPlacement=top] > .tabbar::after, .footer-md::before, .tabs-md[tabsPlacement=bottom] > .tabbar::before {\n  left: 0;\n  bottom: -5px;\n  background-position: left 0 top -2px;\n  position: absolute;\n  width: 100%;\n  height: 5px;\n  background-image: none;\n  background-repeat: repeat-x;\n  content: \"\";\n}\n\n.label input {\n  width: 85%;\n  height: 30px;\n  border: none;\n}\n\n.label {\n  display: flex;\n  align-items: center;\n}\n\n.label img {\n  width: 32px;\n  height: 20px;\n  margin-right: 8px;\n}\n\n.btnclick {\n  background-color: #fe6e4a;\n  color: #ffff;\n  width: 322px;\n  height: 53px;\n}\n\n/* google*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFDQTtFQUVJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBQ0E7RUFDQyxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUVEOztBQUFBO0VBQ0MsV0FBQTtBQUdEOztBQURBO0VBQ0MsWUFBQTtFQUNBLFlBQUE7QUFJRDs7QUFGQTtFQUNJLFlBQUE7QUFLSjs7QUFIQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtBQU1KOztBQUpBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDSixVQUFBO0FBT0E7O0FBTEE7RUFDSSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQVFKOztBQU5BO0VBQ0MsY0FBQTtBQVNEOztBQVBBO0VBQ0MsZ0JBQUE7RUFDQSxZQUFBO0FBVUQ7O0FBUkE7RUFDQyxPQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0FBV0Q7O0FBVEE7RUFDQyxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFZRDs7QUFUQTtFQUNDLGFBQUE7RUFDQSxtQkFBQTtBQVlEOztBQVZBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQWFEOztBQVhBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFjSjs7QUFaQSxVQUFBIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tfaW1nIHtcclxuICAgIGJhY2tncm91bmQ6I2YxZjFmMTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDAlO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiAwJTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xyXG59XHJcbi5sb2dvIGgzIHtcclxuICAgIC8vIGNvbG9yOiAjMDAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWFyZ2luOiAyNXB4IDAgNDBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5sb2dpbl9mb3JtX21haW4ge1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmxvZ2luX2Zvcm0ge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59XHJcbi5pbWdfc2lnbiBpbWcge1xyXG5cdHdpZHRoOiAyMDBweDtcclxuXHRtYXJnaW46IDEwcHg7XHJcbn1cclxuLmxvZ28gaW1nIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxufVxyXG4ubG9nbyB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5pbnB1dF8xIHtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBjb2xvcjogIzU3NTc1NztcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkOGQ4ZDggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIHdpZHRoOiAzMjJweDtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbmxlZnQ6IC0ycHg7XHJcbn1cclxuLmJ0bl9ncnAge1xyXG4gICAgcGFkZGluZzogMTBweCAwICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuLmJ0bl9ncnAgcCBzcGFuIHtcclxuXHRjb2xvcjogI2ZlNmU0YTtcclxufVxyXG4udG9vbGJhci1iYWNrZ3JvdW5kLnRvb2xiYXItYmFja2dyb3VuZC1pb3Mge1xyXG5cdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0Ym9yZGVyOiBub25lO1xyXG59XHJcbi5oZWFkZXItbWQ6OmFmdGVyLCAudGFicy1tZFt0YWJzUGxhY2VtZW50PVwidG9wXCJdID4gLnRhYmJhcjo6YWZ0ZXIsIC5mb290ZXItbWQ6OmJlZm9yZSwgLnRhYnMtbWRbdGFic1BsYWNlbWVudD1cImJvdHRvbVwiXSA+IC50YWJiYXI6OmJlZm9yZSB7XHJcblx0bGVmdDogMDtcclxuXHRib3R0b206IC01cHg7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCAwIHRvcCAtMnB4O1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDVweDtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG5cdGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcclxuXHRjb250ZW50OiBcIlwiO1xyXG59XHJcbi5sYWJlbCBpbnB1dCB7XHJcblx0d2lkdGg6IDg1JTtcclxuXHRoZWlnaHQ6IDMwcHg7XHJcblx0Ym9yZGVyOiBub25lO1xyXG59XHJcblxyXG4ubGFiZWwge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4ubGFiZWwgaW1nIHtcclxuXHR3aWR0aDogMzJweDtcclxuXHRoZWlnaHQ6IDIwcHg7XHJcblx0bWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn1cclxuLmJ0bmNsaWNre1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlNmU0YTtcclxuICAgIGNvbG9yOiAjZmZmZjtcclxuICAgIHdpZHRoOiAzMjJweDtcclxuICAgIGhlaWdodDogNTNweDtcclxufVxyXG4vKiBnb29nbGUqL1xyXG4iXX0= */";
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

      var LoginPage = /*#__PURE__*/function () {
        function LoginPage(router, menuCtrl) {
          _classCallCheck(this, LoginPage);

          // this.menuCtrl.enable(false,"first");
          this.router = router;
          this.menuCtrl = menuCtrl;
        }

        _createClass(LoginPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
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
            this.router.navigateByUrl('/menu/home');
          }
        }, {
          key: "register",
          value: function register() {
            this.router.navigate(['/menu/signup']);
          }
        }]);

        return LoginPage;
      }();

      LoginPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]
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