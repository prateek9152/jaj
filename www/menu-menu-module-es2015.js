(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-menu-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-menu side=\"start\" contentId=\"main-content\" type=\"overlay\" menuId=\"custom\" id=\"custom\">\n  \n    <ion-content>\n      <div class=\"user\">\n        <ion-list no-lines class=\"list_menu\" style=\"margin: 16px 0px;border-bottom: 1px solid #ffffff47;\">\n  \n          <ion-item no-lines class=\"chat_item chat_item_2\" style=\"background-color: transparent;\">\n            <ion-avatar item-start class=\"avtar_menu\">\n              <div class=\"user_img\">\n                <img src=\"../../assets/imgs/blank-avatar.jpg\">\n  \n              </div>\n            </ion-avatar>&nbsp;&nbsp;\n            <h6 class=\"heading_int\" style=\"color: #fe6e4a;\">Username</h6>\n                  <!-- <p class=\"dat\" style=\"color: #000;\">@username</p> -->\n                  <p class=\"wallet_p\"><b>$<span>100</span></b> <img src=\"assets/imgs/eye1.png\" (click)=\"toggle()\" style=\"width:18px;margin-left:5px;\"></p>\n  \n                  <button ion-button clear item-end style=\"height: auto;\">\n                <img src=\"assets/imgs/menu_more.png\" style=\"width: 25px;\" (click)=\"more()\">\n            </button>\n  \n          </ion-item>\n  \n          <p style=\"color: #000;font-size: 12px;padding: 0 16px;\"><b>0</b> Following <span style=\"margin-left: 50px;\"><b>0</b> Followers</span></p>\n    </ion-list>\n      </div>\n      <ion-list padding>\n  \n        <ion-row>\n        <ion-col col-5>\n            <img class=\"barcode\" src=\"assets/imgs/info/barcode.png\">\n          </ion-col>\n        </ion-row>\n  \n        <ion-item no-lines no-padding class=\"level\">\n            <p item-start style=\"color: #000;\">Level:<b> SILVER</b></p> <br>\n            <p item-end style=\"color: #000;\">000/1000 EXP</p>\n           </ion-item>\n  \n           <div class=\"progress_bar\"  style=\"height: 7px; background: #868686; border-radius: 50px; position: relative;\">\n             <div class=\"progress_status\"  style=\"background: #fe6e4a;position: absolute; top: 0; left: 0; width: 60%; height: 7px; border-radius: 10px;\">\n  \n            </div>\n           </div>\n  \n        </ion-list>\n      <ion-list class=\"menu-btn\">\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let page of pages\">\n          <ion-item [routerLink]=\"page.path\" routerDirection=\"root\" [class.active-menu]=\"activePath === page.path\">\n            <ion-icon [name]=\"page.icon\" slot=\"start\" item-left></ion-icon>\n\n            {{page.name}}\n          </ion-item>\n        </ion-menu-toggle>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n  <ion-router-outlet id=\"main-content\" main></ion-router-outlet>\n</ion-app>");

/***/ }),

/***/ "./src/app/menu/menu-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/menu/menu-routing.module.ts ***!
  \*********************************************/
/*! exports provided: MenuPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageRoutingModule", function() { return MenuPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.page */ "./src/app/menu/menu.page.ts");




const routes = [
    {
        path: 'menu',
        component: _menu_page__WEBPACK_IMPORTED_MODULE_3__["MenuPage"],
        children: [
            {
                path: 'home',
                loadChildren: '../home/home.module#HomePageModule'
            },
            {
                path: 'profile',
                loadChildren: '../profile/profile.module#ProfilePageModule'
            },
            {
                path: 'signup',
                loadChildren: () => Promise.all(/*! import() | signup-signup-module */[__webpack_require__.e("common"), __webpack_require__.e("signup-signup-module")]).then(__webpack_require__.bind(null, /*! ../signup/signup.module */ "./src/app/signup/signup.module.ts")).then(m => m.SignupPageModule)
            },
            {
                path: 'login',
                loadChildren: () => Promise.all(/*! import() | login-login-module */[__webpack_require__.e("common"), __webpack_require__.e("login-login-module")]).then(__webpack_require__.bind(null, /*! ../login/login.module */ "./src/app/login/login.module.ts")).then(m => m.LoginPageModule)
            },
            {
                path: 'verify',
                loadChildren: () => __webpack_require__.e(/*! import() | verify-verify-module */ "verify-verify-module").then(__webpack_require__.bind(null, /*! ../verify/verify.module */ "./src/app/verify/verify.module.ts")).then(m => m.VerifyPageModule)
            },
            {
                path: 'forgot',
                loadChildren: () => __webpack_require__.e(/*! import() | forgot-forgot-module */ "forgot-forgot-module").then(__webpack_require__.bind(null, /*! ../forgot/forgot.module */ "./src/app/forgot/forgot.module.ts")).then(m => m.ForgotPageModule)
            },
            {
                path: 'settings',
                loadChildren: () => __webpack_require__.e(/*! import() | settings-settings-module */ "settings-settings-module").then(__webpack_require__.bind(null, /*! ../settings/settings.module */ "./src/app/settings/settings.module.ts")).then(m => m.SettingsPageModule)
            },
            {
                path: 'forgotverify',
                loadChildren: () => __webpack_require__.e(/*! import() | forgotverify-forgotverify-module */ "forgotverify-forgotverify-module").then(__webpack_require__.bind(null, /*! ../forgotverify/forgotverify.module */ "./src/app/forgotverify/forgotverify.module.ts")).then(m => m.ForgotverifyPageModule)
            },
            {
                path: 'chatdetails',
                loadChildren: () => __webpack_require__.e(/*! import() | chatdetails-chatdetails-module */ "chatdetails-chatdetails-module").then(__webpack_require__.bind(null, /*! ../chatdetails/chatdetails.module */ "./src/app/chatdetails/chatdetails.module.ts")).then(m => m.ChatdetailsPageModule)
            },
            {
                path: 'mycontact',
                loadChildren: () => __webpack_require__.e(/*! import() | mycontact-mycontact-module */ "mycontact-mycontact-module").then(__webpack_require__.bind(null, /*! ../mycontact/mycontact.module */ "./src/app/mycontact/mycontact.module.ts")).then(m => m.MycontactPageModule)
            },
            {
                path: 'addgroup',
                loadChildren: () => Promise.all(/*! import() | addgroup-addgroup-module */[__webpack_require__.e("common"), __webpack_require__.e("addgroup-addgroup-module")]).then(__webpack_require__.bind(null, /*! ../addgroup/addgroup.module */ "./src/app/addgroup/addgroup.module.ts")).then(m => m.AddgroupPageModule)
            },
            {
                path: 'addcircle',
                loadChildren: () => __webpack_require__.e(/*! import() | addcircle-addcircle-module */ "addcircle-addcircle-module").then(__webpack_require__.bind(null, /*! ../addcircle/addcircle.module */ "./src/app/addcircle/addcircle.module.ts")).then(m => m.AddcirclePageModule)
            },
        ]
    },
    {
        path: '',
        redirectTo: '/menu/login'
    }
];
let MenuPageRoutingModule = class MenuPageRoutingModule {
};
MenuPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MenuPageRoutingModule);



/***/ }),

/***/ "./src/app/menu/menu.module.ts":
/*!*************************************!*\
  !*** ./src/app/menu/menu.module.ts ***!
  \*************************************/
/*! exports provided: MenuPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _menu_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu-routing.module */ "./src/app/menu/menu-routing.module.ts");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu.page */ "./src/app/menu/menu.page.ts");







let MenuPageModule = class MenuPageModule {
};
MenuPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _menu_routing_module__WEBPACK_IMPORTED_MODULE_5__["MenuPageRoutingModule"]
        ],
        declarations: [_menu_page__WEBPACK_IMPORTED_MODULE_6__["MenuPage"]]
    })
], MenuPageModule);



/***/ }),

/***/ "./src/app/menu/menu.page.scss":
/*!*************************************!*\
  !*** ./src/app/menu/menu.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tabs .tabbar {\n  background: #fff;\n  padding: 0px 0px 0;\n  border: 0px;\n  border-top: 1px solid #e1e1e1;\n}\n.tabs .tabbar .tab-button-text {\n  text-transform: uppercase;\n  font-size: 10px;\n  margin-bottom: 4px !important;\n  margin-top: 3px !important;\n}\n.show-tabbar .tab-button {\n  background-repeat: no-repeat;\n  background-position: center 8px;\n  background-size: 25px;\n  padding-top: 0px !important;\n}\n.tab-button .tab-button-icon {\n  opacity: 0;\n  margin-top: 0px !important;\n}\n.tabbar span {\n  margin-top: 32px;\n}\n.tab-button:nth-child(1) {\n  background-image: url(/assets/imgs/footer/chat.png);\n  background-size: 28px;\n}\n.tab-button:nth-child(2) {\n  background-image: url(/assets/imgs/footer/media.png);\n  background-size: 28px;\n}\n.tab-button:nth-child(3) {\n  background-image: url(/assets/imgs/footer/wallet.png);\n  background-size: 28px;\n}\n.tab-button:nth-child(4) {\n  background-image: url(/assets/imgs/footer/email.png);\n  background-size: 28px;\n}\n.tab-button:nth-child(5) {\n  background-image: url(/assets/imgs/footer/more.png);\n  background-size: 28px;\n}\n.tab-button[aria-selected=true]:nth-child(1) {\n  background-image: url(/assets/imgs/footer/chat-active.png);\n}\n.tab-button[aria-selected=true]:nth-child(2) {\n  background-image: url(/assets/imgs/footer/media-active.png);\n}\n.tab-button[aria-selected=true]:nth-child(3) {\n  background-image: url(/assets/imgs/footer/wallet-active.png);\n}\n.tab-button[aria-selected=true]:nth-child(4) {\n  background-image: url(/assets/imgs/footer/email-active.png);\n}\n.tab-button[aria-selected=true]:nth-child(5) {\n  background-image: url(/assets/imgs/footer/more-active.png);\n}\nion-menu .content {\n  background-image: url(/assets/imgs/menu/background2.png) !important;\n}\nion-menu .content .item {\n  background: transparent;\n}\n.avtar_img img {\n  height: 100px;\n  width: 100px;\n  border-radius: 50%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.avtar_img {\n  text-align: center;\n  margin: 40px;\n}\n.menu-btn button {\n  color: #fff;\n}\n.menu-btn button img {\n  width: 22px;\n  margin-right: 15px;\n}\n.menu-btn ion-label {\n  display: flex;\n}\n.bottom_img {\n  padding: 20px;\n}\n.action-sheet-ios .action-sheet-button {\n  margin: 0;\n  padding: 16px;\n  min-height: auto;\n  border-bottom: 0.55px solid #d6d6da;\n  font-size: 15px;\n  color: #000;\n  background: transparent;\n}\n.action-sheet-ios .action-sheet-selected {\n  font-weight: bold;\n  background: #fff;\n  color: #fe6e4a !important;\n}\n.tabs .tabbar {\n  height: 60px;\n}\n.avtar_menu {\n  min-width: 76px !important;\n  min-height: 76px !important;\n}\n.avtar_menu img {\n  border-radius: 50%;\n  overflow: hidden;\n  width: 76px !important;\n  height: 76px !important;\n}\n.avtar_menu .list_menu.list {\n  margin-bottom: 10px;\n  border-bottom: 1px solid #ffffff45 !important;\n}\n.tab-button-text {\n  position: absolute;\n  top: 0;\n  right: 17px;\n  background: #fe6e4a;\n  border-radius: 20px;\n  color: #fff;\n  padding: 2px;\n  font-size: 11px !important;\n  max-height: 17px !important;\n  min-width: 17px;\n}\n.tab-button {\n  max-width: 80px !important;\n}\n.toolbar-background {\n  background-color: transparent !important;\n}\n.moremodel .modal-wrapper {\n  -webkit-animation: fadein 0.5s;\n          animation: fadein 0.5s;\n  transition: ease-in-out 0.5s;\n  transform: translatey(0%) !important;\n}\n.moremodel ion-backdrop {\n  visibility: visible !important;\n  z-index: 0 !important;\n}\n.wallet_p {\n  color: #fff !important;\n  display: flex;\n  align-items: center;\n}\n.registerAlert .alert-head .alert-sub-title {\n  text-align: center;\n  font-size: 22px;\n}\n.registerAlert .alert-title > div {\n  text-align: center;\n}\n.registerAlert .alert-title > div img {\n  display: inline-block;\n  height: 70px;\n}\n.registerAlert .alert-message {\n  font-size: 18px;\n  text-align: center;\n}\n.registerAlert .alert-button-group .alert-button {\n  text-align: center;\n  background: #fe6e4a;\n  color: white;\n  width: 50px;\n}\n.registerAlert .alert-button-group .alert-button span {\n  justify-content: center !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7QUFBUjtBQUVJO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtBQUFSO0FBSUE7RUFDSSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtBQURKO0FBSUE7RUFDSSxVQUFBO0VBQ0EsMEJBQUE7QUFESjtBQUtJO0VBQ0ksZ0JBQUE7QUFGUjtBQU9JO0VBQ0ksbURBQUE7RUFDQSxxQkFBQTtBQUpSO0FBTUk7RUFDSSxvREFBQTtFQUNBLHFCQUFBO0FBSlI7QUFNSTtFQUNJLHFEQUFBO0VBQ0EscUJBQUE7QUFKUjtBQU1JO0VBQ0ksb0RBQUE7RUFDQSxxQkFBQTtBQUpSO0FBTUk7RUFDSSxtREFBQTtFQUNBLHFCQUFBO0FBSlI7QUFTSTtFQUNJLDBEQUFBO0FBTlI7QUFRSTtFQUNJLDJEQUFBO0FBTlI7QUFRSTtFQUNJLDREQUFBO0FBTlI7QUFRSTtFQUNJLDJEQUFBO0FBTlI7QUFTSTtFQUNJLDBEQUFBO0FBUFI7QUFZQTtFQUNJLG1FQUFBO0FBVEo7QUFZQTtFQUNJLHVCQUFBO0FBVEo7QUFZQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FBVEo7QUFZQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQVRKO0FBWUE7RUFDSSxXQUFBO0FBVEo7QUFZQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQVRKO0FBWUE7RUFDSSxhQUFBO0FBVEo7QUFZQTtFQUNJLGFBQUE7QUFUSjtBQVlBO0VBQ0ksU0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtBQVRKO0FBWUE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFUSjtBQVlBO0VBQ0ksWUFBQTtBQVRKO0FBWUE7RUFDSSwwQkFBQTtFQUNBLDJCQUFBO0FBVEo7QUFVSTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBUlI7QUFVSTtFQUNJLG1CQUFBO0VBQ0EsNkNBQUE7QUFSUjtBQVlBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0FBVEo7QUFZQTtFQUNJLDBCQUFBO0FBVEo7QUFvQkE7RUFDSSx3Q0FBQTtBQWpCSjtBQXFCSTtFQUVJLDhCQUFBO1VBQUEsc0JBQUE7RUFDQSw0QkFBQTtFQUNBLG9DQUFBO0FBbkJSO0FBd0JJO0VBQ0ksOEJBQUE7RUFDQSxxQkFBQTtBQXRCUjtBQTBCQTtFQUNJLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBdkJKO0FBMkNJO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FBeENSO0FBMkNRO0VBQ0ksa0JBQUE7QUF6Q1o7QUEwQ1k7RUFDSSxxQkFBQTtFQUNBLFlBQUE7QUF4Q2hCO0FBNENJO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FBMUNSO0FBNkNRO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBM0NaO0FBNENZO0VBQ0ksa0NBQUE7QUExQ2hCIiwiZmlsZSI6InNyYy9hcHAvbWVudS9tZW51LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJzIHtcclxuICAgIC50YWJiYXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDBweCAwO1xyXG4gICAgICAgIGJvcmRlcjogMHB4O1xyXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTFlMWUxO1xyXG4gICAgfVxyXG4gICAgLnRhYmJhciAudGFiLWJ1dHRvbi10ZXh0IHtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHggIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzcHggIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuLnNob3ctdGFiYmFyIC50YWItYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgOHB4O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAyNXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGFiLWJ1dHRvbiAudGFiLWJ1dHRvbi1pY29uIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRhYmJhciB7XHJcbiAgICBzcGFuIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzMnB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4udGFiLWJ1dHRvbiB7XHJcbiAgICAmOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1ncy9mb290ZXIvY2hhdC5wbmcpO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMjhweDtcclxuICAgIH1cclxuICAgICY6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWdzL2Zvb3Rlci9tZWRpYS5wbmcpO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMjhweDtcclxuICAgIH1cclxuICAgICY6bnRoLWNoaWxkKDMpIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWdzL2Zvb3Rlci93YWxsZXQucG5nKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDI4cHg7XHJcbiAgICB9XHJcbiAgICAmOm50aC1jaGlsZCg0KSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1ncy9mb290ZXIvZW1haWwucG5nKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDI4cHg7XHJcbiAgICB9XHJcbiAgICAmOm50aC1jaGlsZCg1KSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1ncy9mb290ZXIvbW9yZS5wbmcpO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMjhweDtcclxuICAgIH1cclxufVxyXG5cclxuLnRhYi1idXR0b25bYXJpYS1zZWxlY3RlZD1cInRydWVcIl0ge1xyXG4gICAgJjpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltZ3MvZm9vdGVyL2NoYXQtYWN0aXZlLnBuZyk7XHJcbiAgICB9XHJcbiAgICAmOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1ncy9mb290ZXIvbWVkaWEtYWN0aXZlLnBuZyk7XHJcbiAgICB9XHJcbiAgICAmOm50aC1jaGlsZCgzKSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1ncy9mb290ZXIvd2FsbGV0LWFjdGl2ZS5wbmcpO1xyXG4gICAgfVxyXG4gICAgJjpudGgtY2hpbGQoNCkge1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltZ3MvZm9vdGVyL2VtYWlsLWFjdGl2ZS5wbmcpO1xyXG4gICAgICAgIC8vIGJhY2tncm91bmQtc2l6ZTogMzBweDtcclxuICAgIH1cclxuICAgICY6bnRoLWNoaWxkKDUpIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWdzL2Zvb3Rlci9tb3JlLWFjdGl2ZS5wbmcpO1xyXG4gICAgICAgIC8vIGJhY2tncm91bmQtc2l6ZTogMzBweDtcclxuICAgIH1cclxufVxyXG5cclxuaW9uLW1lbnUgLmNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1ncy9tZW51L2JhY2tncm91bmQyLnBuZykgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLW1lbnUgLmNvbnRlbnQgLml0ZW0ge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5hdnRhcl9pbWcgaW1nIHtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuLmF2dGFyX2ltZyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDQwcHg7XHJcbn1cclxuXHJcbi5tZW51LWJ0biBidXR0b24ge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5tZW51LWJ0biBidXR0b24gaW1nIHtcclxuICAgIHdpZHRoOiAyMnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4ubWVudS1idG4gaW9uLWxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5ib3R0b21faW1nIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi5hY3Rpb24tc2hlZXQtaW9zIC5hY3Rpb24tc2hlZXQtYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBtaW4taGVpZ2h0OiBhdXRvO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMC41NXB4IHNvbGlkICNkNmQ2ZGE7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uYWN0aW9uLXNoZWV0LWlvcyAuYWN0aW9uLXNoZWV0LXNlbGVjdGVkIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGNvbG9yOiAjZmU2ZTRhICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50YWJzIC50YWJiYXIge1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG59XHJcblxyXG4uYXZ0YXJfbWVudSB7XHJcbiAgICBtaW4td2lkdGg6IDc2cHggIWltcG9ydGFudDtcclxuICAgIG1pbi1oZWlnaHQ6IDc2cHggIWltcG9ydGFudDtcclxuICAgIGltZyB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgd2lkdGg6IDc2cHggIWltcG9ydGFudDtcclxuICAgICAgICBoZWlnaHQ6IDc2cHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5saXN0X21lbnUubGlzdCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZmZmZjQ1ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi50YWItYnV0dG9uLXRleHQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDE3cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmU2ZTRhO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG4gICAgZm9udC1zaXplOiAxMXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtaGVpZ2h0OiAxN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBtaW4td2lkdGg6IDE3cHg7XHJcbn1cclxuXHJcbi50YWItYnV0dG9uIHtcclxuICAgIG1heC13aWR0aDogODBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vLyAubW9kYWwtd3JhcHBlciB7XHJcbi8vICAgICAuY29udGVudCB7XHJcbi8vICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAgIWltcG9ydGFudDtcclxuLy8gICAgIH1cclxuLy8gICAgIC5jb250ZW50LWlvcyB7XHJcbi8vICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAgIWltcG9ydGFudCA7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuLnRvb2xiYXItYmFja2dyb3VuZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubW9yZW1vZGVsIHtcclxuICAgIC5tb2RhbC13cmFwcGVyIHtcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kOiAjMDAwMDAwM2Q7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBmYWRlaW4gMC41cztcclxuICAgICAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAwLjVzO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgwJSkgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5tb2RhbC13cmFwcGVyIHtcclxuICAgICAgICAvLyBwb2ludGVyLWV2ZW50czogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgaW9uLWJhY2tkcm9wIHtcclxuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgei1pbmRleDogMCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4ud2FsbGV0X3Age1xyXG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4vLyBAa2V5ZnJhbWVzIGZhZGVpbiB7XHJcbi8vICAgICBmcm9tIHtcclxuLy8gICAgICAgICBvcGFjaXR5OjA7XHJcbi8vICAgICB9XHJcbi8vICAgICB0byB7XHJcbi8vICAgICAgICAgb3BhY2l0eToxO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcbi8vIEBrZXlmcmFtZXMgZmFkZW91dCB7XHJcbi8vICAgICBmcm9tIHtcclxuLy8gICAgICAgICBvcGFjaXR5OjE7XHJcbi8vICAgICB9XHJcbi8vICAgICB0byB7XHJcbi8vICAgICAgICAgb3BhY2l0eTowO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcbi5yZWdpc3RlckFsZXJ0IHtcclxuICAgIC5hbGVydC1oZWFkIC5hbGVydC1zdWItdGl0bGUge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICB9XHJcbiAgICAuYWxlcnQtdGl0bGUge1xyXG4gICAgICAgICY+ZGl2IHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmFsZXJ0LW1lc3NhZ2Uge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuYWxlcnQtYnV0dG9uLWdyb3VwIHtcclxuICAgICAgICAuYWxlcnQtYnV0dG9uIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmU2ZTRhO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/menu/menu.page.ts":
/*!***********************************!*\
  !*** ./src/app/menu/menu.page.ts ***!
  \***********************************/
/*! exports provided: MenuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPage", function() { return MenuPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let MenuPage = class MenuPage {
    constructor(router) {
        this.router = router;
        this.activePath = '';
        this.pages = [
            {
                name: 'Profile',
                path: '/menu/profile',
                icon: 'person'
            },
            {
                name: 'Notifications',
                path: '/menu/register',
                icon: 'notifications'
            },
            {
                name: 'Mail',
                path: '/menu/home',
                icon: 'mail'
            },
            {
                name: 'Wallet',
                path: '/menu/contact',
                icon: 'wallet'
            },
            {
                name: 'Settings',
                path: '/menu/settings',
                icon: 'settings'
            },
            {
                name: 'Logout',
                path: '/menu/login',
                icon: 'log-out'
            }
        ];
        this.router.events.subscribe((event) => {
            this.activePath = event.url;
        });
    }
    ngOnInit() {
    }
    toggle() { }
    more() { }
};
MenuPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
MenuPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./menu.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./menu.page.scss */ "./src/app/menu/menu.page.scss")).default]
    })
], MenuPage);



/***/ })

}]);
//# sourceMappingURL=menu-menu-module-es2015.js.map