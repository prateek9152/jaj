(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forgot-forgot-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/forgot/forgot.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forgot/forgot.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-item slot=\"start\">\n      <ion-buttons style=\"zoom: 2.0;\" (click)=\"goBack()\">\n<ion-icon name=\"arrow-back-outline\"></ion-icon>        </ion-buttons>\n      </ion-item>\n    <ion-title style=\"text-align: center;\">Forgot Password</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding class=\"back_img\">\n  <div class=\"login_form_main\">\n    <div class=\"login_form\">\n      <form [formGroup]=\"forgotForm\" (ngSubmit)=\"send()\">\n\n  <ion-label style=\"text-align: center;\n  display: block; font-weight: bold;\">Enter Your Email</ion-label>\n <ion-input class=\"input_1\" type=\"email\" formControlName=\"email\" placeholder=\"E-Mail\" [ngClass]=\"{'is-invalid': submitted && f.email.errors}\"></ion-input>\n <ng-container *ngFor=\"let validation of validation_messages.email\">\n   <span class=\"error-message\"\n     *ngIf=\"(submitted || forgotForm.get('email').touched) && forgotForm.get('email').hasError(validation.type)\">\n     {{ validation.message }}\n   </span>\n </ng-container>\n <!-- <ion-input class=\"input_1\" type=\"number\" formControlName=\"phone\" placeholder=\"Mobile Number\"></ion-input>\n  <ng-container *ngFor=\"let validation of validation_messages.phone\">\n    <span class=\"error-message\"\n      *ngIf=\"(submitted || forgotForm.get('phone').touched) && forgotForm.get('phone').hasError(validation.type)\">\n      {{ validation.message }}\n    </span>\n  </ng-container> -->\n  <div padding class=\"btn_grp\">\n    <button class=\"btnclick\" (click)=\"send()\">Send</button>\n  </div>\n</form>\n\n</div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/forgot/forgot-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/forgot/forgot-routing.module.ts ***!
  \*************************************************/
/*! exports provided: ForgotPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPageRoutingModule", function() { return ForgotPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _forgot_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgot.page */ "./src/app/forgot/forgot.page.ts");




const routes = [
    {
        path: '',
        component: _forgot_page__WEBPACK_IMPORTED_MODULE_3__["ForgotPage"]
    }
];
let ForgotPageRoutingModule = class ForgotPageRoutingModule {
};
ForgotPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ForgotPageRoutingModule);



/***/ }),

/***/ "./src/app/forgot/forgot.module.ts":
/*!*****************************************!*\
  !*** ./src/app/forgot/forgot.module.ts ***!
  \*****************************************/
/*! exports provided: ForgotPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPageModule", function() { return ForgotPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _forgot_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forgot-routing.module */ "./src/app/forgot/forgot-routing.module.ts");
/* harmony import */ var _forgot_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgot.page */ "./src/app/forgot/forgot.page.ts");







let ForgotPageModule = class ForgotPageModule {
};
ForgotPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _forgot_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForgotPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_forgot_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPage"]]
    })
], ForgotPageModule);



/***/ }),

/***/ "./src/app/forgot/forgot.page.scss":
/*!*****************************************!*\
  !*** ./src/app/forgot/forgot.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".back_img {\n  background: #f1f1f1;\n  background-color: rgba(0, 0, 0, 0);\n  background-position-x: 0%;\n  background-position-y: 0%;\n  background-repeat: repeat;\n  background-size: auto;\n  background-size: cover;\n  background-position: top center;\n  background-repeat: no-repeat;\n  background-color: #ececec;\n}\n\n.btnclick {\n  background-color: #5ac5ad;\n  color: #ffff;\n  width: 322px;\n  height: 53px;\n}\n\n.input_1 {\n  height: 50px;\n  background: #fff;\n  color: #575757;\n  font-size: 13px;\n  border: 1px solid #d8d8d8 !important;\n  border-radius: 3px;\n  width: 322px;\n  padding-left: 0px;\n  margin: 10px auto;\n  left: 4px;\n}\n\n.login_form_main {\n  height: 100%;\n  display: flex;\n  width: 100%;\n  align-items: center;\n}\n\n.login_form {\n  width: 100%;\n}\n\n.btn_grp {\n  padding: 10px 0 !important;\n  text-align: center;\n  font-size: 15px;\n}\n\n.btn_grp p span {\n  color: #fe6e4a;\n}\n\n.error-message {\n  display: block;\n  color: red;\n  margin-top: 5px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9yZ290L2ZvcmdvdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLGtDQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUNBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFFSjs7QUFBQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtBQUdKOztBQURBO0VBQ0MsWUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFJRDs7QUFGQTtFQUNDLFdBQUE7QUFLRDs7QUFIQTtFQUNJLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBTUo7O0FBSkE7RUFDQyxjQUFBO0FBT0Q7O0FBTEE7RUFBaUIsY0FBQTtFQUNiLFVBQUE7RUFDQSxlQUFBO0VBQWdCLGtCQUFBO0FBVXBCIiwiZmlsZSI6InNyYy9hcHAvZm9yZ290L2ZvcmdvdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja19pbWcge1xuICAgIGJhY2tncm91bmQ6I2YxZjFmMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogMCU7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiAwJTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogYXV0bztcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xufVxuLmJ0bmNsaWNre1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1YWM1YWQ7XG4gICAgY29sb3I6ICNmZmZmO1xuICAgIHdpZHRoOiAzMjJweDtcbiAgICBoZWlnaHQ6IDUzcHg7XG59XG4uaW5wdXRfMSB7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgY29sb3I6ICM1NzU3NTc7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkOGQ4ZDggIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgd2lkdGg6IDMyMnB4O1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgIG1hcmdpbjogMTBweCBhdXRvO1xuICAgIGxlZnQ6IDRweDtcbn1cbi5sb2dpbl9mb3JtX21haW4ge1xuXHRoZWlnaHQ6IDEwMCU7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdHdpZHRoOiAxMDAlO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmxvZ2luX2Zvcm0ge1xuXHR3aWR0aDogMTAwJTtcbn1cbi5idG5fZ3JwIHtcbiAgICBwYWRkaW5nOiAxMHB4IDAgIWltcG9ydGFudDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuLmJ0bl9ncnAgcCBzcGFuIHtcblx0Y29sb3I6ICNmZTZlNGE7XG59XG4uZXJyb3ItbWVzc2FnZSB7IGRpc3BsYXk6YmxvY2s7XG4gICAgY29sb3I6cmVkO1xuICAgIG1hcmdpbi10b3A6NXB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7fSJdfQ== */");

/***/ }),

/***/ "./src/app/forgot/forgot.page.ts":
/*!***************************************!*\
  !*** ./src/app/forgot/forgot.page.ts ***!
  \***************************************/
/*! exports provided: ForgotPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPage", function() { return ForgotPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





let ForgotPage = class ForgotPage {
    constructor(navCtrl, router, menuCtrl, fb) {
        this.navCtrl = navCtrl;
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.fb = fb;
        this.submitted = false;
        this.validation_messages = {
            email: [
                { type: 'required', message: 'Email is required.' },
                { type: 'pattern', message: 'Enter a valid email' }
            ],
        };
    }
    ngOnInit() {
        this.forgotForm = this.fb.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[a-zA-Z0-9_.+-]+@(?:[a-zA-Z0-9-]+\.)\.[A-Za-z0-9._%+-]{2,}'),
            ])),
        });
    }
    get f() { return this.forgotForm.controls; }
    ;
    ionViewWillEnter() {
        // this.menuCtrl.enable(false);
    }
    goBack() {
        this.navCtrl.back();
    }
    send() {
        this.submitted = true;
        if (this.forgotForm.invalid) {
            return;
        }
        this.router.navigate(['/menu/forgotverify']);
    }
};
ForgotPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
ForgotPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgot',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./forgot.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/forgot/forgot.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./forgot.page.scss */ "./src/app/forgot/forgot.page.scss")).default]
    })
], ForgotPage);



/***/ })

}]);
//# sourceMappingURL=forgot-forgot-module-es2015.js.map