(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forgotverify-forgotverify-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/forgotverify/forgotverify.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forgotverify/forgotverify.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content padding class=\"back_img\">\n\n\n\n  <div class=\"login_form_main\">\n      <div class=\"login_form\">\n          <div class=\"logo\">\n              <img src=\"assets/imgs/login/jajlogo.jpeg\">\n              <h3 style=\"font-weight: bold;\">Verify your phone number</h3>\n          </div>\n\n\n          <ion-list style=\"margin:0 0 20px\" text-center>\n              <ion-label style=\"display: block; text-align: center;\" (click)=\"pp()\">Enter your verification code</ion-label>\n          </ion-list>\n\n\n\n          <ion-row no-padding class=\"row_input\">\n              <ion-col col-2>\n                  <div class=\"verify\">\n                      <ion-input  #one (keyup)=\"onKeyUp($event.keyCode,'one')\" maxlength=\"1\" type=\"tel\" class=\"input_2\"></ion-input>\n                  </div>\n\n              </ion-col>\n              <ion-col col-2>\n                  <div class=\"verify\">\n                      <ion-input  #two (keyup)=\"onKeyUp($event.keyCode,'two')\" type=\"tel\" maxlength=\"1\" class=\"input_2\"></ion-input>\n                  </div>\n\n              </ion-col>\n              <ion-col col-2>\n                  <div class=\"verify\">\n                      <ion-input  (keyup)=\"onKeyUp($event.keyCode,'three')\" #three type=\"tel\" maxlength=\"1\" class=\"input_2\"></ion-input>\n                  </div>\n\n              </ion-col>\n              <ion-col col-2>\n                  <div class=\"verify\">\n                      <ion-input  (keyup)=\"onKeyUp($event.keyCode,'four')\" #four type=\"tel\" maxlength=\"1\" class=\"input_2\"></ion-input>\n                  </div>\n\n              </ion-col>\n              <ion-col col-2>\n                  <div class=\"verify\">\n                      <ion-input  (keyup)=\"onKeyUp($event.keyCode,'five')\" #five type=\"tel\" maxlength=\"1\" class=\"input_2\"></ion-input>\n                  </div>\n\n              </ion-col>\n              <ion-col col-2>\n                  <div class=\"verify\">\n                      <ion-input  #six (keyup)=\"onKeyUp($event.keyCode,'six')\" type=\"tel\" maxlength=\"1\" class=\"input_2\"></ion-input>\n                  </div>\n\n              </ion-col>\n\n              <div text-center style=\"width: 100%;margin: 20px 0 100px; text-align: center;\">\n                  <button style=\"    height: 71px;\n                  width: 105px;\n                  font-size: 110%;\n                  border-radius: 25px;\n                  border: 2px solid #fff;\n                  padding: 20px;\" (click)=\"resend()\">Resend</button>\n              </div>\n          </ion-row>\n\n\n          <div padding class=\"btn_grp\">\n              <button  class=\"btnclick\" (click)=\"verify()\">Confirm</button>\n          </div>\n      </div>\n  </div>\n\n\n\n</ion-content>");

/***/ }),

/***/ "./src/app/forgotverify/forgotverify-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/forgotverify/forgotverify-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ForgotverifyPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotverifyPageRoutingModule", function() { return ForgotverifyPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _forgotverify_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgotverify.page */ "./src/app/forgotverify/forgotverify.page.ts");




const routes = [
    {
        path: '',
        component: _forgotverify_page__WEBPACK_IMPORTED_MODULE_3__["ForgotverifyPage"]
    }
];
let ForgotverifyPageRoutingModule = class ForgotverifyPageRoutingModule {
};
ForgotverifyPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ForgotverifyPageRoutingModule);



/***/ }),

/***/ "./src/app/forgotverify/forgotverify.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/forgotverify/forgotverify.module.ts ***!
  \*****************************************************/
/*! exports provided: ForgotverifyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotverifyPageModule", function() { return ForgotverifyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _forgotverify_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forgotverify-routing.module */ "./src/app/forgotverify/forgotverify-routing.module.ts");
/* harmony import */ var _forgotverify_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgotverify.page */ "./src/app/forgotverify/forgotverify.page.ts");







let ForgotverifyPageModule = class ForgotverifyPageModule {
};
ForgotverifyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _forgotverify_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForgotverifyPageRoutingModule"]
        ],
        declarations: [_forgotverify_page__WEBPACK_IMPORTED_MODULE_6__["ForgotverifyPage"]]
    })
], ForgotverifyPageModule);



/***/ }),

/***/ "./src/app/forgotverify/forgotverify.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/forgotverify/forgotverify.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".back_img {\n  background: #f1f1f1;\n  background-color: rgba(0, 0, 0, 0);\n  background-position-x: 0%;\n  background-position-y: 0%;\n  background-repeat: repeat;\n  background-size: auto;\n  background-size: cover;\n  background-position: top center;\n  background-repeat: no-repeat;\n  background-color: #ececec;\n}\n\n.logo h3 {\n  color: #000;\n  font-size: 16px;\n  margin: 16px 0 16px;\n}\n\n.login_form_main {\n  display: flex;\n  width: 100%;\n  align-items: center;\n}\n\n.login_form {\n  width: 100%;\n}\n\n.img_sign img {\n  width: 200px;\n  margin: 10px;\n}\n\n.logo img {\n  width: 100px;\n}\n\n.logo {\n  padding: 0;\n  text-align: center;\n}\n\n.input_1 {\n  margin: 10px 0;\n  height: 35px;\n  background: #fff;\n  color: #575757;\n  font-size: 13px;\n  border: 1px solid #d8d8d8 !important;\n  border-radius: 3px;\n}\n\n.btn_grp {\n  padding: 10px 0 !important;\n  text-align: center;\n  font-size: 15px;\n}\n\n.btn_grp p span {\n  color: #fe6e4a;\n}\n\n.toolbar-background.toolbar-background-ios {\n  background: #fff;\n  border: none;\n}\n\n.header-md::after,\n.tabs-md[tabsPlacement=top] > .tabbar::after,\n.footer-md::before,\n.tabs-md[tabsPlacement=bottom] > .tabbar::before {\n  left: 0;\n  bottom: -5px;\n  background-position: left 0 top -2px;\n  position: absolute;\n  width: 100%;\n  height: 5px;\n  background-image: none;\n  background-repeat: repeat-x;\n  content: \"\";\n}\n\n.label input {\n  width: 85%;\n  height: 30px;\n  border: none;\n}\n\n.label {\n  display: flex;\n  align-items: center;\n}\n\n.label img {\n  width: auto;\n  height: 20px;\n  margin-right: 8px;\n}\n\n.verify {\n  height: 45px;\n  width: 45px;\n  background: #ffede6;\n  border: 1px solid #d8d8d8;\n  border-radius: 5px;\n  overflow: hidden;\n}\n\n.input_2 input {\n  width: 100%;\n  background: transparent;\n  border: none;\n  height: 100%;\n  text-align: center;\n  font-weight: bold;\n  font-size: 30px;\n  color: #fff;\n  margin: 0;\n}\n\n.verify.active {\n  background: #fe6e4a;\n  border-bottom: 5px solid #f55e2a;\n}\n\n.btnclick {\n  background-color: #5ac5ad;\n  color: #ffff;\n  width: 322px;\n  height: 53px;\n  font-size: 110%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9yZ290dmVyaWZ5L2ZvcmdvdHZlcmlmeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLGtDQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUNBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUVKOztBQUFBO0VBRUksYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUVKOztBQUFBO0VBQ0ksV0FBQTtBQUdKOztBQURBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUFJSjs7QUFGQTtFQUNJLFlBQUE7QUFLSjs7QUFIQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtBQU1KOztBQUpBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtBQU9KOztBQUxBO0VBQ0ksMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFRSjs7QUFOQTtFQUNJLGNBQUE7QUFTSjs7QUFQQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBQVVKOztBQVJBOzs7O0VBSUksT0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtBQVdKOztBQVRBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBWUo7O0FBVkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFhSjs7QUFYQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFjSjs7QUFaQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFlSjs7QUFaSTtFQUNJLFdBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQWVSOztBQVpBO0VBQ0ksbUJBQUE7RUFDQSxnQ0FBQTtBQWVKOztBQWJBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBZ0JKIiwiZmlsZSI6InNyYy9hcHAvZm9yZ290dmVyaWZ5L2ZvcmdvdHZlcmlmeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja19pbWcge1xuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDAlO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogMCU7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcbn1cbi5sb2dvIGgzIHtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luOiAxNnB4IDAgMTZweDtcbn1cbi5sb2dpbl9mb3JtX21haW4ge1xuICAgIC8vIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubG9naW5fZm9ybSB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uaW1nX3NpZ24gaW1nIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgbWFyZ2luOiAxMHB4O1xufVxuLmxvZ28gaW1nIHtcbiAgICB3aWR0aDogMTAwcHg7XG59XG4ubG9nbyB7XG4gICAgcGFkZGluZzogMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uaW5wdXRfMSB7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgY29sb3I6ICM1NzU3NTc7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkOGQ4ZDggIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG4uYnRuX2dycCB7XG4gICAgcGFkZGluZzogMTBweCAwICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5idG5fZ3JwIHAgc3BhbiB7XG4gICAgY29sb3I6ICNmZTZlNGE7XG59XG4udG9vbGJhci1iYWNrZ3JvdW5kLnRvb2xiYXItYmFja2dyb3VuZC1pb3Mge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyOiBub25lO1xufVxuLmhlYWRlci1tZDo6YWZ0ZXIsXG4udGFicy1tZFt0YWJzUGxhY2VtZW50PVwidG9wXCJdPi50YWJiYXI6OmFmdGVyLFxuLmZvb3Rlci1tZDo6YmVmb3JlLFxuLnRhYnMtbWRbdGFic1BsYWNlbWVudD1cImJvdHRvbVwiXT4udGFiYmFyOjpiZWZvcmUge1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAtNXB4O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgMCB0b3AgLTJweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1cHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gICAgY29udGVudDogXCJcIjtcbn1cbi5sYWJlbCBpbnB1dCB7XG4gICAgd2lkdGg6IDg1JTtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYm9yZGVyOiBub25lO1xufVxuLmxhYmVsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubGFiZWwgaW1nIHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG4udmVyaWZ5IHtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgd2lkdGg6IDQ1cHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZWRlNjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDhkOGQ4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmlucHV0XzIge1xuICAgIGlucHV0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbn1cbi52ZXJpZnkuYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmU2ZTRhO1xuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjZjU1ZTJhO1xufVxuLmJ0bmNsaWNre1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1YWM1YWQ7XG4gICAgY29sb3I6ICNmZmZmO1xuICAgIHdpZHRoOiAzMjJweDtcbiAgICBoZWlnaHQ6IDUzcHg7XG4gICAgZm9udC1zaXplOiAxMTAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/forgotverify/forgotverify.page.ts":
/*!***************************************************!*\
  !*** ./src/app/forgotverify/forgotverify.page.ts ***!
  \***************************************************/
/*! exports provided: ForgotverifyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotverifyPage", function() { return ForgotverifyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");




let ForgotverifyPage = class ForgotverifyPage {
    constructor(router, menuCtrl) {
        this.router = router;
        this.menuCtrl = menuCtrl;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.menuCtrl.enable(false);
    }
    ionViewDidLeave() { this.menuCtrl.enable(true); }
    onKeyUp(ev, id) {
        console.log(ev);
        if (ev != 8) {
            if (id == 'one') {
                this.two.setFocus();
            }
            else if (id == 'two') {
                this.three.setFocus();
            }
            else if (id == 'three') {
                this.four.setFocus();
            }
            else if (id == 'four') {
                this.five.setFocus();
            }
            else if (id == 'five') {
                this.six.setFocus();
            }
        }
        else {
            if (id == 'two') {
                this.one.setFocus();
            }
            else if (id == 'three') {
                this.two.setFocus();
            }
            else if (id == 'four') {
                this.three.setFocus();
            }
            else if (id == 'five') {
                this.four.setFocus();
            }
            else if (id == 'six') {
                this.five.setFocus();
            }
        }
    }
    verify() {
        this.router.navigate(['/menu/login']);
    }
    resend() { }
    pp() { }
};
ForgotverifyPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] }
];
ForgotverifyPage.propDecorators = {
    one: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['one',] }],
    two: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['two',] }],
    three: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['three',] }],
    four: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['four',] }],
    five: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['five',] }],
    six: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['six',] }]
};
ForgotverifyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgotverify',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./forgotverify.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/forgotverify/forgotverify.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./forgotverify.page.scss */ "./src/app/forgotverify/forgotverify.page.scss")).default]
    })
], ForgotverifyPage);



/***/ })

}]);
//# sourceMappingURL=forgotverify-forgotverify-module-es2015.js.map