(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-content padding class=\"back_img\">\n\n\n\n    <div class=\"login_form_main\">\n      <form [formGroup]=\"validations_form\" style=\"\theight: 100%;\n      display: contents;\n      width: 100%;\n      align-items: center;\"  (ngSubmit)=\"login()\">\n\n      <div class=\"login_form\">\n        <div class=\"logo\">\n          <img src=\"../../assets/imgs/login/jajlogo.jpeg\">\n          <h3>Please enter your login detail</h3>\n        </div>\n  \n  \n        <ion-list style=\"margin:0 0 20px; display:inline\">\n          <ion-input class=\"input_1\" type=\"email\" formControlName=\"email\" placeholder=\"E-Mail\" [ngClass]=\"{'is-invalid': submitted && f.email.errors}\"></ion-input>\n          <ng-container *ngFor=\"let validation of validation_messages.email\">\n            <span class=\"error-message\"\n              *ngIf=\"(submitted || validations_form.get('email').touched) && validations_form.get('email').hasError(validation.type)\">\n              {{ validation.message }}\n            </span>\n          </ng-container>  \n          <!-- <ion-label style=\"text-align: center;\n          display: block;\">Enter Your Phone Number</ion-label> -->\n            <!-- <ion-input class=\"input_1\" type=\"number\" formControlName=\"phone\" placeholder=\"Enter Your Mobile Number\" [ngClass]=\"{'is-invalid': submitted && f.phone.errors}\"></ion-input>\n            <ng-container *ngFor=\"let validation of validation_messages.phone\">\n              <span class=\"error-message\"\n                *ngIf=\"(submitted || validations_form.get('phone').touched) && validations_form.get('phone').hasError(validation.type)\">\n                {{ validation.message }}\n              </span>\n            </ng-container> -->\n            \n          <!-- <ion-label style=\"text-align: center;\n          display: block;\">Password</ion-label> -->\n            <ion-input class=\"input_1\" type=\"password\" formControlName=\"password\" placeholder=\"Enter Password\" [ngClass]=\"{'is-invalid': submitted && f.password.errors}\"></ion-input>\n            <ng-container *ngFor=\"let validation of validation_messages.password\">\n              <span class=\"error-message\"\n                *ngIf=\"(submitted || validations_form.get('password').touched) && validations_form.get('password').hasError(validation.type)\">\n                {{ validation.message }}\n              </span>\n            </ng-container>\n            \n        </ion-list>\n  \n        <h5 style=\"text-align: center;font-size: 13px;font-weight: normal;\" [routerLink]=\"['/menu/forgot']\">Forgot Password?</h5>\n  \n        <div padding class=\"btn_grp\">\n          <button class=\"btnclick\" (click)=\"login()\">LOGIN</button>\n          <p>Don't have an account? <span (click)=\"register()\">Sign Up</span></p>\n        </div>\n      </div>\n      </form>\n\n    </div>\n  \n \n  \n  </ion-content>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".back_img {\n  background: #f1f1f1;\n  background-color: rgba(0, 0, 0, 0);\n  background-position-x: 0%;\n  background-position-y: 0%;\n  background-repeat: repeat;\n  background-size: auto;\n  background-size: cover;\n  background-position: top center;\n  background-repeat: no-repeat;\n  background-color: #ececec;\n}\n\n.logo h3 {\n  font-size: 16px;\n  margin: 25px 0 40px;\n  font-weight: bold;\n}\n\n.login_form_main {\n  height: 100%;\n  display: flex;\n  width: 100%;\n  align-items: center;\n}\n\n.login_form {\n  width: 100%;\n}\n\n.img_sign img {\n  width: 200px;\n  margin: 10px;\n}\n\n.logo img {\n  width: 100px;\n}\n\n.logo {\n  padding: 0;\n  text-align: center;\n}\n\n.input_1 {\n  height: 50px;\n  background: #fff;\n  color: #575757;\n  font-size: 13px;\n  border: 1px solid #d8d8d8 !important;\n  border-radius: 3px;\n  width: 322px;\n  padding-left: 0px;\n  margin: 10px auto;\n  left: 4px;\n}\n\n.btn_grp {\n  padding: 10px 0 !important;\n  text-align: center;\n  font-size: 15px;\n}\n\n.btn_grp p span {\n  color: #5ac5ad;\n}\n\n.toolbar-background.toolbar-background-ios {\n  background: #fff;\n  border: none;\n}\n\n.header-md::after, .tabs-md[tabsPlacement=top] > .tabbar::after, .footer-md::before, .tabs-md[tabsPlacement=bottom] > .tabbar::before {\n  left: 0;\n  bottom: -5px;\n  background-position: left 0 top -2px;\n  position: absolute;\n  width: 100%;\n  height: 5px;\n  background-image: none;\n  background-repeat: repeat-x;\n  content: \"\";\n}\n\n.label input {\n  width: 85%;\n  height: 30px;\n  border: none;\n}\n\n.label {\n  display: flex;\n  align-items: center;\n}\n\n.label img {\n  width: 32px;\n  height: 20px;\n  margin-right: 8px;\n}\n\n.btnclick {\n  background-color: #5ac5ad;\n  color: #ffff;\n  width: 322px;\n  height: 53px;\n}\n\n.error-message {\n  display: block;\n  color: red;\n  margin-top: 5px;\n  text-align: center;\n}\n\n/* google*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFDQTtFQUVJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBQ0E7RUFDQyxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUVEOztBQUFBO0VBQ0MsV0FBQTtBQUdEOztBQURBO0VBQ0MsWUFBQTtFQUNBLFlBQUE7QUFJRDs7QUFGQTtFQUNJLFlBQUE7QUFLSjs7QUFIQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtBQU1KOztBQUpBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0FBT0o7O0FBTEE7RUFDSSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQVFKOztBQU5BO0VBQ0MsY0FBQTtBQVNEOztBQVBBO0VBQ0MsZ0JBQUE7RUFDQSxZQUFBO0FBVUQ7O0FBUkE7RUFDQyxPQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0FBV0Q7O0FBVEE7RUFDQyxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFZRDs7QUFUQTtFQUNDLGFBQUE7RUFDQSxtQkFBQTtBQVlEOztBQVZBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQWFEOztBQVhBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFjSjs7QUFaQTtFQUFpQixjQUFBO0VBQ2IsVUFBQTtFQUNBLGVBQUE7RUFBZ0Isa0JBQUE7QUFpQnBCOztBQWhCQSxVQUFBIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tfaW1nIHtcclxuICAgIGJhY2tncm91bmQ6I2YxZjFmMTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDAlO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiAwJTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xyXG59XHJcbi5sb2dvIGgzIHtcclxuICAgIC8vIGNvbG9yOiAjMDAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWFyZ2luOiAyNXB4IDAgNDBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5sb2dpbl9mb3JtX21haW4ge1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmxvZ2luX2Zvcm0ge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59XHJcbi5pbWdfc2lnbiBpbWcge1xyXG5cdHdpZHRoOiAyMDBweDtcclxuXHRtYXJnaW46IDEwcHg7XHJcbn1cclxuLmxvZ28gaW1nIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxufVxyXG4ubG9nbyB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5pbnB1dF8xIHtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBjb2xvcjogIzU3NTc1NztcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkOGQ4ZDggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIHdpZHRoOiAzMjJweDtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgICBsZWZ0OiA0cHg7XHJcbn1cclxuLmJ0bl9ncnAge1xyXG4gICAgcGFkZGluZzogMTBweCAwICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuLmJ0bl9ncnAgcCBzcGFuIHtcclxuXHRjb2xvcjogIzVhYzVhZDtcclxufVxyXG4udG9vbGJhci1iYWNrZ3JvdW5kLnRvb2xiYXItYmFja2dyb3VuZC1pb3Mge1xyXG5cdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0Ym9yZGVyOiBub25lO1xyXG59XHJcbi5oZWFkZXItbWQ6OmFmdGVyLCAudGFicy1tZFt0YWJzUGxhY2VtZW50PVwidG9wXCJdID4gLnRhYmJhcjo6YWZ0ZXIsIC5mb290ZXItbWQ6OmJlZm9yZSwgLnRhYnMtbWRbdGFic1BsYWNlbWVudD1cImJvdHRvbVwiXSA+IC50YWJiYXI6OmJlZm9yZSB7XHJcblx0bGVmdDogMDtcclxuXHRib3R0b206IC01cHg7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCAwIHRvcCAtMnB4O1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDVweDtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG5cdGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcclxuXHRjb250ZW50OiBcIlwiO1xyXG59XHJcbi5sYWJlbCBpbnB1dCB7XHJcblx0d2lkdGg6IDg1JTtcclxuXHRoZWlnaHQ6IDMwcHg7XHJcblx0Ym9yZGVyOiBub25lO1xyXG59XHJcblxyXG4ubGFiZWwge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4ubGFiZWwgaW1nIHtcclxuXHR3aWR0aDogMzJweDtcclxuXHRoZWlnaHQ6IDIwcHg7XHJcblx0bWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn1cclxuLmJ0bmNsaWNre1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVhYzVhZDtcclxuICAgIGNvbG9yOiAjZmZmZjtcclxuICAgIHdpZHRoOiAzMjJweDtcclxuICAgIGhlaWdodDogNTNweDtcclxufVxyXG4uZXJyb3ItbWVzc2FnZSB7IGRpc3BsYXk6YmxvY2s7XHJcbiAgICBjb2xvcjpyZWQ7XHJcbiAgICBtYXJnaW4tdG9wOjVweDsgdGV4dC1hbGlnbjogY2VudGVyO31cclxuLyogZ29vZ2xlKi9cclxuIl19 */");

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/loader.service */ "./src/app/services/loader.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/alert.service */ "./src/app/services/alert.service.ts");










let LoginPage = class LoginPage {
    constructor(router, menuCtrl, formBuilder, toastService, ionLoader, http, authService, alertService) {
        // this.menuCtrl.enable(false,"first");
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.formBuilder = formBuilder;
        this.toastService = toastService;
        this.ionLoader = ionLoader;
        this.http = http;
        this.authService = authService;
        this.alertService = alertService;
        this.submitted = false;
        this.validation_messages = {
            email: [
                { type: 'required', message: 'Email is required.' },
                { type: 'pattern', message: 'Enter a valid email' }
            ],
            // 'phone': [
            //   { type: 'required', message: 'Phone is required.' },
            //   { type: 'minlength', message: 'Phone Number must be at least 10 digits.' }
            // ],
            'password': [
                { type: 'required', message: 'Password is required.' },
                { type: 'minlength', message: 'Password must be at least 5 characters long.' },
                { type: 'pattern', message: 'Your password must contain uppercase, lowercase, special chars and number.' }
            ],
        };
    }
    ngOnInit() {
        this.validations_form = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[a-zA-Z0-9_.+-]+@(?:[a-zA-Z0-9-]+\.)\.[A-Za-z0-9._%+-]{2,}'),
            ])),
            // phone: new FormControl('', Validators.compose([
            //   Validators.minLength(10),
            //   Validators.required,
            // ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^(?=.*[a-zA-Z])[a-zA-Z0-9!$%@#£€*?&]+$')
            ]))
        });
    }
    get f() { return this.validations_form.controls; }
    ionViewWillEnter() {
        this.menuCtrl.enable(false);
    }
    ionViewDidLeave() { this.menuCtrl.enable(true); }
    forgot() {
        this.router.navigate(['/menu/forgot']);
    }
    login() {
        this.submitted = true;
        if (this.validations_form.invalid) {
            return;
        }
        var formData = new FormData();
        formData.append("email", this.validations_form.get('email').value);
        formData.append("password", this.validations_form.get('password').value);
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHeaders"]({ "Accept": "application/json" });
        console.log(formData);
        this.http.post('https://jajoj.threethree.in/api/login', formData, { headers: headers }).subscribe((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(response);
            this.router.navigate(['/menu/home']);
            //  if(response.status==1){
            //   //  this.authService.updateUserDetails(response.data);
            //    this.toastService.showLoginToast();
            //  }
            //   else {
            //     // this.alertService.show('Alert',response.message);
            //   }
        }));
    }
    register() {
        this.router.navigate(['/menu/signup']);
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_9__["AlertService"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")).default]
    })
], LoginPage);



/***/ }),

/***/ "./src/app/services/alert.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/alert.service.ts ***!
  \*******************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



const messages = {
    "en": {
        "FNAME": { title: 'Invalid Name!', subTitle: 'Please enter valid first name!', empty: "Please enter your first name!" },
        "LNAME": { title: 'Invalid Name!', subTitle: 'Please enter valid last name!', empty: "Please enter your last name!" },
        "CONFP": { title: 'Invalid Password!', subTitle: 'Password & comfirm password should match!', empty: "Please retype password!" },
        "PASSW": { title: 'Invalid Password!', subTitle: 'Please enter a password that contains at least 4 characters!', empty: "Please enter password!" },
        "PHONE": { title: 'Invalid Phone!', subTitle: 'Please enter valid phone number!', empty: "Please enter your phone number!" },
        "UNAME": { title: 'Invalid Username!', subTitle: ' ', empty: "Please enter Username!" },
        "COUNTRY": { title: 'Invalid Country!', subTitle: '', empty: "Please select country!" },
        "OTP": { title: 'Invalid OTP!', subTitle: ' ', empty: "Please enter OTP!" },
        "EMAIL": { title: 'Invalid Email!', subTitle: 'Please enter a valid email address!', empty: "Please enter your email!" },
        "ABT": { title: 'Invalid About!', subTitle: ' ', empty: "Please enter about!" },
        "ADDRS": { title: 'Enter Address!', subTitle: '', empty: "Please enter address!" },
        "MSG": { title: 'Enter Message!', subTitle: ' ', empty: "Please enter message!" },
        "FEE": { title: 'Invalid Fee!', subTitle: ' ', empty: "Please enter fee!" },
        "CAPLICENCE": { title: 'Invalid Licence!', subTitle: ' ', empty: "Please enter licence!" },
        "SDATE": { title: 'Select Start Date!', subTitle: '', empty: "Please select start date!" },
        "EDATE": { title: 'Select End Date!', subTitle: '', empty: "Please select end date!" },
        "BOATDESC": { title: 'Invalid Description!', subTitle: ' ', empty: "Please enter boat description!" },
        "RENTALRATE": { title: 'Invalid Rental Rate!', subTitle: ' ', empty: "Please enter rental rate!" },
        "LOCATION": { title: 'Invalid Location!', subTitle: ' ', empty: "Please enter location!" },
        "MODEL": { title: 'Invalid Model!', subTitle: ' ', empty: "Please enter model!" },
        "YEAR": { title: 'Invalid Manufacture Year!', subTitle: ' ', empty: "Please manufacture year!" },
        "HIN": { title: 'Invalid HIN!', subTitle: ' ', empty: "Please enter HIN!" },
        "DAILY": { title: 'Invalid Daily Rate!', subTitle: ' ', empty: "Please enter daily rate!" },
        "HOURLY": { title: 'Invalid Hourly Rate!', subTitle: ' ', empty: "Please enter hourly rate!" },
        "MONTHLY": { title: 'Invalid Monthly Rate!', subTitle: ' ', empty: "Please enter monthly rate!" },
        "TOW": { title: 'Invalid Tow Vehicle Requirements!', subTitle: ' ', empty: "Please enter tow vehicle requirements!" },
        "BOATT": { title: 'Invalid Boat Type!', subTitle: ' ', empty: "Please select boat type!" },
        "ACTIT": { title: 'Invalid Activity Type!', subTitle: ' ', empty: "Please select activity type!" },
        "SURNAME": { title: 'Invalid Surname!', subTitle: '', empty: "Please enter your surname!" },
        "COMPANY": { title: 'Invalid Company!', subTitle: '', empty: "Please enter company name!" },
        "JOBTITLE": { title: 'Invalid Job Title!', subTitle: '', empty: "Please enter job title!" },
        "CITY": { title: 'Enter City!', subTitle: '', empty: "Please enter city!" },
        "MOBILE": { title: 'Invalid Mobile!', subTitle: 'Please enter valid mobile number!', empty: "Please enter your mobile number!" },
        "TELEPHONE": { title: 'Invalid Telephone!', subTitle: 'Please enter valid telephone number!', empty: "Please enter your telephone number!" },
        "PO": { title: 'Invalid Ports of Operation!', subTitle: ' ', empty: "Please enter prots of operation!" },
        "PINFO": { title: 'Invalid Personal Info!', subTitle: ' ', empty: "Please enter personal info/staff info!" },
        "FAX": { title: 'Invalid Fax!', subTitle: ' ', empty: "Please enter fax!" },
        "TERMS": { title: '', subTitle: ' ', empty: "Please accept the terms & conditions!" },
        "OVER18": { title: '', subTitle: ' ', empty: "The Micropub App is only available to users who are over 18 years old!" },
        "NPASS": { title: 'Invalid Password!', subTitle: 'Please enter a new password that contains a minimum of 8 characters including an uppercase letter, number and special character!', empty: "Please enter new password!" },
        "OPASS": { title: 'Invalid Password!', subTitle: '', empty: "Please enter old password!" },
        "EMPPASS": { title: 'Invalid Password!', subTitle: '', empty: "Please enter password!" },
        "POSTAL": { title: 'Invalid Ponstal Code!', subTitle: '', empty: "Please enter postal code!" },
        "PUBNAME": { title: 'Invalid Name!', subTitle: '', empty: "Please enter pub name!" },
        "ODATE": { title: 'Invalid Date!', subTitle: '', empty: "Please enter opening date!" },
        "ABOUTPUB": { title: 'Invalid Description!', subTitle: '', empty: "Please enter a short description about your Micropub!" },
        "TWT": { title: 'Invalid Twitter!', subTitle: '', empty: "Please enter twitter account!" },
        "DATE": { title: 'Invalid Date!', subTitle: '', empty: "Please enter date!" },
        "TIME": { title: 'Invalid  Time!', subTitle: '', empty: "Please enter time!" },
        "DESC": { title: 'Invalid Description!', subTitle: ' ', empty: "Please enter something about event!" },
        "TITLE": { title: 'Invalid Title!', subTitle: '', empty: "Please enter a title for your update!" },
        "ABV": { title: 'Invalid ABV!', subTitle: '', empty: "Please enter ABV!" },
        "PRICE": { title: 'Invalid Price!', subTitle: ' ', empty: "Please enter price!" },
        "CMT": { title: 'Invalid Comment!', subTitle: ' ', empty: "Please enter  comment!" },
        "TEXT": { title: 'Invalid Text!', subTitle: ' ', empty: "Please enter  Text!" },
        "BRE": { title: 'Invalid Text!', subTitle: ' ', empty: "Please enter  Brewery!" },
        "AVL": { title: 'Invalid Availability!', subTitle: ' ', empty: "Please select  Availability!" },
        "SIZE": { title: 'Invalid Area!', subTitle: ' ', empty: "Please enter area of your pub in square meter!" },
        "HEADLINE": { title: 'Invalid Headline!', subTitle: "Please enter headline that should't be more than 3 words!", empty: "Please enter your headline!" },
        "SUB": { title: 'Invalid Subject!', subTitle: ' ', empty: "Please select a subject!" },
        "ISSUE": { title: 'Invalid Issue!', subTitle: ' ', empty: "Please enter the issue!" },
        "BNAME": { title: 'Invalid Name!', subTitle: ' ', empty: "Please enter a beer name!" },
        "CNAME": { title: 'Invalid Name!', subTitle: ' ', empty: "Please enter a cider name!" },
        "MATCH": { title: 'Invalid Password!', subTitle: 'New password & confirm password should be matched', empty: "Please enter confirm password!" },
        "ADIMG": { title: 'Select Image!', subTitle: 'Please select atlease one image!', empty: "Please select atlease one image!" },
        "CATE": { title: 'Select Category!', subTitle: ' ', empty: "Please select a category!" },
        "LOC": { title: 'Select Location!', subTitle: 'Please select location to use filters!', empty: "" },
        "PRICT": { title: 'Select Type!', subTitle: '', empty: "Please select price type!" },
        "FRM": { title: 'Invalid price!', subTitle: "The minimum price can't be higher than maximum price!", empty: "" },
        "CURR": { title: 'Invalid Currency!', subTitle: '', empty: "Please select a currency!" },
        "PHONECODE": { title: 'Phone Code Required!', subTitle: 'Please Enter Valid Phone Number', empty: "Please Select your country code" },
        "NIKNAME": { title: 'Invalid Name!', subTitle: 'Please enter valid nickname!', empty: "Please enter your nickname!" },
        "GENDR": { title: 'Select Gender!', subTitle: '', empty: "Please select your gender!" },
        "DOBTH": { title: 'Select DOB!', subTitle: '', empty: "Please select your DOB!" },
        "STIME": { title: 'Select Start Time!', subTitle: '', empty: "Please select start time!" },
        "ETIME": { title: 'Select End Time!', subTitle: '', empty: "Please select end time!" },
        "CONDITION": { title: 'Enter Conditions!', subTitle: '', empty: "Please enter participating persons number!" },
        "IMAGES": { title: 'Select Image!', subTitle: '', empty: "Please select atlest one image!" },
        "IMAGE": { title: 'Select Image!', subTitle: 'Please Select Profile Image', empty: "Please select your Profile image!" },
        "FILLP": { title: 'Invalid Input!', subTitle: 'Please fill all field properly', empty: "Please enter your Address!" },
        "GDESC": { title: 'Invalid Description!', subTitle: 'Please fill all field properly', empty: "Please write description for your group!" },
        "TECHP": { title: 'Technical Problem!', subTitle: 'Technical Problem, Please check your network connection!', empty: "" },
        "AGE": { title: 'Select Age!', subTitle: 'Please select your Age!', empty: "Please select your Age!" }
    },
    "ch": {
        "PHONE": { title: '电话无效!', subTitle: '请输入有效的电话号码', empty: "请输入您的手机号码" },
        "PHONECODE": { title: '需要电话代码!', subTitle: 'Please Enter Valid Phone Number', empty: "请选择您的国家代码" },
        "PASSW": { title: '无效的密码!', subTitle: '密码无效', empty: "请输入密码" },
        "NIKNAME": { title: 'Invalid Name!', subTitle: 'Please enter valid nickname!', empty: "Please enter your nickname!" },
        "GENDR": { title: 'Select Gender!', subTitle: '', empty: "Please select your gender!" },
        "DOBTH": { title: 'Select DOB!', subTitle: '', empty: "Please select your DOB!" },
        "DATE": { title: 'Select Date!', subTitle: '', empty: "Please select date!" },
        "TITLE": { title: 'Enter Title!', subTitle: '', empty: "Please enter title!" },
        "STIME": { title: 'Select Start Time!', subTitle: '', empty: "Please select start time!" },
        "ETIME": { title: 'Select End Time!', subTitle: '', empty: "Please select end time!" },
        "COST": { title: 'Enter Cost!', subTitle: '', empty: "Please enter cost!" },
        "CONDITION": { title: 'Enter Conditions!', subTitle: '', empty: "Please enter participating persons number!" },
        "IMAGES": { title: 'Select Image!', subTitle: '', empty: "Please select atlest one image!" },
        "ADDRS": { title: 'Enter Address!', subTitle: ' ', empty: "Please enter your Address!" },
        "CMT": { title: 'Enter Comment!', subTitle: ' ', empty: "Please enter your comment!" },
        "MSG": { title: 'Enter Message!', subTitle: ' ', empty: "Please enter message!" },
    }
};
const ok = {
    "en": "OK",
    "ch": "好"
};
const m = {
    fnameEmpty: { title: 'Mendetory field!', subTitle: 'Your Email is invalid please enter valid email' },
    lnameInvalid: { title: 'Password Reset Sent!', subTitle: 'A password reset email has been sent to: ' },
    lnameEmpty: { title: 'Password Reset Sent!', subTitle: 'A password reset email has been sent to: ' },
    profileUpdated: { title: 'Profile Updated!', subTitle: 'Your profile has been successfully updated!' },
    emailVerified: { title: 'Email Confirmed!', subTitle: 'Congratulations! Your email has been confirmed!' },
    emailVerificationSent: { title: 'Email Confirmation Sent!', subTitle: 'An email confirmation has been sent to: ' },
    accountDeleted: { title: 'Account Deleted!', subTitle: 'Your account has been successfully deleted.' },
    passwordChanged: { title: 'Password Changed!', subTitle: 'Your password has been successfully changed.' },
    invalidCredential: { title: 'Invalid Credential!', subTitle: 'An error occured logging in with this credential.' },
    operationNotAllowed: { title: 'Login Failed!', subTitle: 'Logging in with this provider is not allowed! Please contact support.' },
    userDisabled: { title: 'Account Disabled!', subTitle: 'Sorry! But this account has been suspended! Please contact support.' },
    userNotFound: { title: 'Account Not Found!', subTitle: 'Sorry, but an account with this credential could not be found.' },
    wrongPassword: { title: 'Incorrect Password!', subTitle: 'Sorry, but the password you have entered is incorrect.' },
    invalidEmail: { title: 'Invalid Email!', subTitle: 'Sorry, but you have entered an invalid email address.' },
    emailAlreadyInUse: { title: 'Email Not Available!', subTitle: 'Sorry, but this email is already in use.' },
    weakPassword: { title: 'Weak Password!', subTitle: 'Sorry, but you have entered a weak password.' },
    requiresRecentLogin: { title: 'Credential Expired!', subTitle: 'Sorry, but this credential has expired! Please login again.' },
    userMismatch: { title: 'User Mismatch!', subTitle: 'Sorry, but this credential is for another user!' },
    providerAlreadyLinked: { title: 'Already Linked!', subTitle: 'Sorry, but your account is already linked to this credential.' },
    credentialAlreadyInUse: { title: 'Credential Not Available!', subTitle: 'Sorry, but this credential is already used by another user.' },
    changeName: { title: 'Change Name Failed!', subTitle: 'Sorry, but we\'ve encountered an error changing your name.' },
    changeEmail: { title: 'Change Email Failed!', subTitle: 'Sorry, but we\'ve encountered an error changing your email address.' },
    changePhoto: { title: 'Change Photo Failed!', subTitle: 'Sorry, but we\'ve encountered an error changing your photo.' },
    passwordsDoNotMatch: { title: 'Change Password Failed!', subTitle: 'Sorry, but the passwords you entered do not match.' },
    updateProfile: { title: 'Update Profile Failed', subTitle: 'Sorry, but we\'ve encountered an error updating your profile.' },
    usernameExists: { title: 'Username Already Exists!', subTitle: 'Sorry, but this username is already taken by another user.' },
    imageUpload: { title: 'Image Upload Failed!', subTitle: 'Sorry but we\'ve encountered an error uploading selected image.' }
};
const singleMessage = {
    "en": {
        "ACCOUNTCREATED": "Congratulation! Your account has been created successfully. Now you can access your account."
    },
    "ch": {
        "ACCOUNTCREATED": "恭喜！您的帐户已成功创建。现在您可以访问您的帐户了。"
    }
};
let AlertService = class AlertService {
    constructor(alert) {
        this.alert = alert;
        this.alertPresented = false;
    }
    confirmationAlert(title, message) {
        return new Promise((resolve) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alert.create({
                cssClass: 'my-custom-class',
                header: title,
                message: message,
                buttons: ['OK']
            });
            yield alert.present();
        }));
    }
    show(title, message) {
        return new Promise((resolve) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let lang = this.getLang();
            let msessage = singleMessage[lang][message];
            if (!msessage) {
                msessage = message;
            }
            let vm = this;
            if (!vm.alertPresented) {
                vm.alertPresented = true;
                const alert = yield this.alert.create({
                    header: title,
                    message: msessage,
                    buttons: [{
                            text: 'OK',
                            handler: () => {
                                vm.alertPresented = false;
                            }
                        }]
                });
                yield alert.present();
            }
        }));
    }
    getLang() {
        let m = localStorage.getItem("lang");
        if (m) {
            return m;
        }
        else {
            return "en";
        }
    }
};
AlertService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
AlertService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AlertService);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map