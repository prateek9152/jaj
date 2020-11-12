(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["verify-verify-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/verify/verify.page.html":
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/verify/verify.page.html ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppVerifyVerifyPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content padding class=\"back_img\">\n\n\n\n  <div class=\"login_form_main\">\n      <div class=\"login_form\">\n          <div class=\"logo\">\n              <img src=\"assets/imgs/login/jajlogo.jpeg\">\n              <h3 style=\"font-weight: bold;\">Verify your phone number</h3>\n          </div>\n\n\n          <ion-list style=\"margin:0 0 20px\" text-center>\n              <ion-label style=\"display: block; text-align: center;\" (click)=\"pp()\">Enter your verification code</ion-label>\n          </ion-list>\n\n\n\n          <ion-row no-padding class=\"row_input\">\n              <ion-col col-2>\n                  <div class=\"verify\">\n                      <ion-input  #one (keyup)=\"onKeyUp($event.keyCode,'one')\" maxlength=\"1\" type=\"tel\" class=\"input_2\"></ion-input>\n                  </div>\n\n              </ion-col>\n              <ion-col col-2>\n                  <div class=\"verify\">\n                      <ion-input  #two (keyup)=\"onKeyUp($event.keyCode,'two')\" type=\"tel\" maxlength=\"1\" class=\"input_2\"></ion-input>\n                  </div>\n\n              </ion-col>\n              <ion-col col-2>\n                  <div class=\"verify\">\n                      <ion-input  (keyup)=\"onKeyUp($event.keyCode,'three')\" #three type=\"tel\" maxlength=\"1\" class=\"input_2\"></ion-input>\n                  </div>\n\n              </ion-col>\n              <ion-col col-2>\n                  <div class=\"verify\">\n                      <ion-input  (keyup)=\"onKeyUp($event.keyCode,'four')\" #four type=\"tel\" maxlength=\"1\" class=\"input_2\"></ion-input>\n                  </div>\n\n              </ion-col>\n              <ion-col col-2>\n                  <div class=\"verify\">\n                      <ion-input  (keyup)=\"onKeyUp($event.keyCode,'five')\" #five type=\"tel\" maxlength=\"1\" class=\"input_2\"></ion-input>\n                  </div>\n\n              </ion-col>\n              <ion-col col-2>\n                  <div class=\"verify\">\n                      <ion-input  #six (keyup)=\"onKeyUp($event.keyCode,'six')\" type=\"tel\" maxlength=\"1\" class=\"input_2\"></ion-input>\n                  </div>\n\n              </ion-col>\n\n              <div text-center style=\"width: 100%;margin: 20px 0 100px;text-align: center;\">\n                  <button style=\"    height: 71px;\n                  width: 105px;\n                  font-size: 110%;\n                  border-radius: 25px;\n                  border: 2px solid #fff;\n                  padding: 20px;\" (click)=\"resend()\">Resend</button>\n              </div>\n          </ion-row>\n\n\n          <div padding class=\"btn_grp\">\n              <button  class=\"btnclick\" (click)=\"verify()\">Confirm</button>\n          </div>\n      </div>\n  </div>\n\n\n\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/verify/verify-routing.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/verify/verify-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: VerifyPageRoutingModule */

    /***/
    function srcAppVerifyVerifyRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VerifyPageRoutingModule", function () {
        return VerifyPageRoutingModule;
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


      var _verify_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./verify.page */
      "./src/app/verify/verify.page.ts");

      var routes = [{
        path: '',
        component: _verify_page__WEBPACK_IMPORTED_MODULE_3__["VerifyPage"]
      }];

      var VerifyPageRoutingModule = function VerifyPageRoutingModule() {
        _classCallCheck(this, VerifyPageRoutingModule);
      };

      VerifyPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], VerifyPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/verify/verify.module.ts":
    /*!*****************************************!*\
      !*** ./src/app/verify/verify.module.ts ***!
      \*****************************************/

    /*! exports provided: VerifyPageModule */

    /***/
    function srcAppVerifyVerifyModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VerifyPageModule", function () {
        return VerifyPageModule;
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


      var _verify_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./verify-routing.module */
      "./src/app/verify/verify-routing.module.ts");
      /* harmony import */


      var _verify_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./verify.page */
      "./src/app/verify/verify.page.ts");

      var VerifyPageModule = function VerifyPageModule() {
        _classCallCheck(this, VerifyPageModule);
      };

      VerifyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _verify_routing_module__WEBPACK_IMPORTED_MODULE_5__["VerifyPageRoutingModule"]],
        declarations: [_verify_page__WEBPACK_IMPORTED_MODULE_6__["VerifyPage"]]
      })], VerifyPageModule);
      /***/
    },

    /***/
    "./src/app/verify/verify.page.scss":
    /*!*****************************************!*\
      !*** ./src/app/verify/verify.page.scss ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function srcAppVerifyVerifyPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".back_img {\n  background: #f1f1f1;\n  background-color: rgba(0, 0, 0, 0);\n  background-position-x: 0%;\n  background-position-y: 0%;\n  background-repeat: repeat;\n  background-size: auto;\n  background-size: cover;\n  background-position: top center;\n  background-repeat: no-repeat;\n  background-color: #ececec;\n}\n\n.logo h3 {\n  color: #000;\n  font-size: 16px;\n  margin: 16px 0 16px;\n}\n\n.login_form_main {\n  display: flex;\n  width: 100%;\n  align-items: center;\n}\n\n.login_form {\n  width: 100%;\n}\n\n.img_sign img {\n  width: 200px;\n  margin: 10px;\n}\n\n.logo img {\n  width: 100px;\n}\n\n.logo {\n  padding: 0;\n  text-align: center;\n}\n\n.input_1 {\n  margin: 10px 0;\n  height: 35px;\n  background: #fff;\n  color: #575757;\n  font-size: 13px;\n  border: 1px solid #d8d8d8 !important;\n  border-radius: 3px;\n}\n\n.btn_grp {\n  padding: 10px 0 !important;\n  text-align: center;\n  font-size: 15px;\n}\n\n.btn_grp p span {\n  color: #fe6e4a;\n}\n\n.toolbar-background.toolbar-background-ios {\n  background: #fff;\n  border: none;\n}\n\n.header-md::after,\n.tabs-md[tabsPlacement=top] > .tabbar::after,\n.footer-md::before,\n.tabs-md[tabsPlacement=bottom] > .tabbar::before {\n  left: 0;\n  bottom: -5px;\n  background-position: left 0 top -2px;\n  position: absolute;\n  width: 100%;\n  height: 5px;\n  background-image: none;\n  background-repeat: repeat-x;\n  content: \"\";\n}\n\n.label input {\n  width: 85%;\n  height: 30px;\n  border: none;\n}\n\n.label {\n  display: flex;\n  align-items: center;\n}\n\n.label img {\n  width: auto;\n  height: 20px;\n  margin-right: 8px;\n}\n\n.verify {\n  height: 45px;\n  width: 45px;\n  background: #ffede6;\n  border: 1px solid #d8d8d8;\n  border-radius: 5px;\n  overflow: hidden;\n}\n\n.input_2 input {\n  width: 100%;\n  background: transparent;\n  border: none;\n  height: 100%;\n  text-align: center;\n  font-weight: bold;\n  font-size: 30px;\n  color: #fff;\n  margin: 0;\n}\n\n.verify.active {\n  background: #fe6e4a;\n  border-bottom: 5px solid #f55e2a;\n}\n\n.btnclick {\n  background-color: #fe6e4a;\n  color: #ffff;\n  width: 322px;\n  height: 53px;\n  font-size: 110%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVyaWZ5L3ZlcmlmeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLGtDQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUNBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUVKOztBQUFBO0VBRUksYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUVKOztBQUFBO0VBQ0ksV0FBQTtBQUdKOztBQURBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUFJSjs7QUFGQTtFQUNJLFlBQUE7QUFLSjs7QUFIQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtBQU1KOztBQUpBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtBQU9KOztBQUxBO0VBQ0ksMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFRSjs7QUFOQTtFQUNJLGNBQUE7QUFTSjs7QUFQQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBQVVKOztBQVJBOzs7O0VBSUksT0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtBQVdKOztBQVRBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBWUo7O0FBVkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFhSjs7QUFYQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFjSjs7QUFaQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFlSjs7QUFaSTtFQUNJLFdBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQWVSOztBQVpBO0VBQ0ksbUJBQUE7RUFDQSxnQ0FBQTtBQWVKOztBQWJBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBZ0JKIiwiZmlsZSI6InNyYy9hcHAvdmVyaWZ5L3ZlcmlmeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja19pbWcge1xyXG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDAlO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiAwJTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xyXG59XHJcbi5sb2dvIGgzIHtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWFyZ2luOiAxNnB4IDAgMTZweDtcclxufVxyXG4ubG9naW5fZm9ybV9tYWluIHtcclxuICAgIC8vIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmxvZ2luX2Zvcm0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmltZ19zaWduIGltZyB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn1cclxuLmxvZ28gaW1nIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxufVxyXG4ubG9nbyB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5pbnB1dF8xIHtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGNvbG9yOiAjNTc1NzU3O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Q4ZDhkOCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcbi5idG5fZ3JwIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbi5idG5fZ3JwIHAgc3BhbiB7XHJcbiAgICBjb2xvcjogI2ZlNmU0YTtcclxufVxyXG4udG9vbGJhci1iYWNrZ3JvdW5kLnRvb2xiYXItYmFja2dyb3VuZC1pb3Mge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG4uaGVhZGVyLW1kOjphZnRlcixcclxuLnRhYnMtbWRbdGFic1BsYWNlbWVudD1cInRvcFwiXT4udGFiYmFyOjphZnRlcixcclxuLmZvb3Rlci1tZDo6YmVmb3JlLFxyXG4udGFicy1tZFt0YWJzUGxhY2VtZW50PVwiYm90dG9tXCJdPi50YWJiYXI6OmJlZm9yZSB7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAtNXB4O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCAwIHRvcCAtMnB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG59XHJcbi5sYWJlbCBpbnB1dCB7XHJcbiAgICB3aWR0aDogODUlO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcbi5sYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4ubGFiZWwgaW1nIHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn1cclxuLnZlcmlmeSB7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICB3aWR0aDogNDVweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmVkZTY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDhkOGQ4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uaW5wdXRfMiB7XHJcbiAgICBpbnB1dCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxufVxyXG4udmVyaWZ5LmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmU2ZTRhO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICNmNTVlMmE7XHJcbn1cclxuLmJ0bmNsaWNre1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlNmU0YTtcclxuICAgIGNvbG9yOiAjZmZmZjtcclxuICAgIHdpZHRoOiAzMjJweDtcclxuICAgIGhlaWdodDogNTNweDtcclxuICAgIGZvbnQtc2l6ZTogMTEwJTtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/verify/verify.page.ts":
    /*!***************************************!*\
      !*** ./src/app/verify/verify.page.ts ***!
      \***************************************/

    /*! exports provided: VerifyPage */

    /***/
    function srcAppVerifyVerifyPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VerifyPage", function () {
        return VerifyPage;
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

      var VerifyPage = /*#__PURE__*/function () {
        function VerifyPage(router, menuCtrl) {
          _classCallCheck(this, VerifyPage);

          this.router = router;
          this.menuCtrl = menuCtrl;
        }

        _createClass(VerifyPage, [{
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
          key: "onKeyUp",
          value: function onKeyUp(ev, id) {
            console.log(ev);

            if (ev != 8) {
              if (id == 'one') {
                this.two.setFocus();
              } else if (id == 'two') {
                this.three.setFocus();
              } else if (id == 'three') {
                this.four.setFocus();
              } else if (id == 'four') {
                this.five.setFocus();
              } else if (id == 'five') {
                this.six.setFocus();
              }
            } else {
              if (id == 'two') {
                this.one.setFocus();
              } else if (id == 'three') {
                this.two.setFocus();
              } else if (id == 'four') {
                this.three.setFocus();
              } else if (id == 'five') {
                this.four.setFocus();
              } else if (id == 'six') {
                this.five.setFocus();
              }
            }
          }
        }, {
          key: "verify",
          value: function verify() {
            this.router.navigate(['/menu/home']);
          }
        }, {
          key: "resend",
          value: function resend() {}
        }, {
          key: "pp",
          value: function pp() {}
        }]);

        return VerifyPage;
      }();

      VerifyPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]
        }];
      };

      VerifyPage.propDecorators = {
        one: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['one']
        }],
        two: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['two']
        }],
        three: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['three']
        }],
        four: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['four']
        }],
        five: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['five']
        }],
        six: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['six']
        }]
      };
      VerifyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-verify',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./verify.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/verify/verify.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./verify.page.scss */
        "./src/app/verify/verify.page.scss"))["default"]]
      })], VerifyPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=verify-verify-module-es5.js.map