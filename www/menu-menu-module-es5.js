(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-menu-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppMenuMenuPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n  <ion-menu side=\"start\" contentId=\"main-content\" type=\"overlay\" menuId=\"custom\" id=\"custom\">\n  \n    <ion-content>\n      <div class=\"user\">\n        <ion-list no-lines class=\"list_menu\" style=\"margin: 16px 0px;border-bottom: 1px solid #ffffff47;\">\n  \n          <ion-item no-lines class=\"chat_item chat_item_2\" style=\"background-color: transparent;\">\n            <ion-avatar item-start class=\"avtar_menu\">\n              <div class=\"user_img\">\n                <img src=\"../../assets/imgs/blank-avatar.jpg\">\n  \n              </div>\n            </ion-avatar>&nbsp;&nbsp;\n            <ion-input placeholder=\"Username\" class=\"heading_int\" style=\"color: #fe6e4a;\"></ion-input>\n            <!-- <p class=\"dat\" style=\"color: #000;\">@username</p> -->\n          <!-- <p class=\"wallet_p\"><b>$<span>100</span></b> <img src=\"assets/imgs/eye1.png\" (click)=\"toggle()\" style=\"width:18px;margin-left:5px;\"></p> -->\n  \n  \n          </ion-item>\n  \n          <!-- <p style=\"color: #000;font-size: 12px;padding: 0 16px;\"><b>0</b> Following <span style=\"margin-left: 50px;\"><b>0</b> Followers</span></p> -->\n    </ion-list>\n      </div>\n      <!-- <ion-list padding>\n  \n        <ion-row>\n        <ion-col col-5>\n            <img class=\"barcode\" src=\"assets/imgs/info/barcode.png\">\n          </ion-col>\n        </ion-row>\n  \n        <ion-item no-lines no-padding class=\"level\">\n            <p item-start style=\"color: #000;\">Level:<b> SILVER</b></p> <br>\n            <p item-end style=\"color: #000;\">000/1000 EXP</p>\n           </ion-item>\n  \n           <div class=\"progress_bar\"  style=\"height: 7px; background: #868686; border-radius: 50px; position: relative;\">\n             <div class=\"progress_status\"  style=\"background: #fe6e4a;position: absolute; top: 0; left: 0; width: 60%; height: 7px; border-radius: 10px;\">\n  \n            </div>\n           </div>\n  \n        </ion-list> -->\n      <ion-list class=\"menu-btn\">\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let page of pages\">\n          <ion-item [routerLink]=\"page.path\" routerDirection=\"root\" [class.active-menu]=\"activePath === page.path\">\n            <ion-icon [name]=\"page.icon\" slot=\"start\" item-left></ion-icon>\n\n            {{page.name}}\n          </ion-item>\n        </ion-menu-toggle>\n        <ion-menu-toggle auto-hide=\"false\">\n          <ion-item  lines=\"none\">\n            <ion-icon slot=\"start\" name=\"log-out-outline\"></ion-icon>\n            <ion-item (click)=\"logout()\" menuClose no-lines>\n              Logout\n           </ion-item>\n               </ion-item>\n          <!-- <ion-icon slot=\"start\" name=\"log-out\" color=\"primary\"></ion-icon>\n\n          <ion-item (click)=\"logout()\" menuClose no-lines>\n            Logout\n         </ion-item> -->\n        </ion-menu-toggle>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n  <ion-router-outlet id=\"main-content\" main></ion-router-outlet>\n</ion-app>";
      /***/
    },

    /***/
    "./src/app/menu/menu-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/menu/menu-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: MenuPageRoutingModule */

    /***/
    function srcAppMenuMenuRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuPageRoutingModule", function () {
        return MenuPageRoutingModule;
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


      var _menu_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./menu.page */
      "./src/app/menu/menu.page.ts");

      var routes = [{
        path: 'menu',
        component: _menu_page__WEBPACK_IMPORTED_MODULE_3__["MenuPage"],
        children: [{
          path: 'home',
          loadChildren: '../home/home.module#HomePageModule'
        }, {
          path: 'profile',
          loadChildren: '../profile/profile.module#ProfilePageModule'
        }, {
          path: 'signup',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | signup-signup-module */
            [__webpack_require__.e("common"), __webpack_require__.e("signup-signup-module")]).then(__webpack_require__.bind(null,
            /*! ../signup/signup.module */
            "./src/app/signup/signup.module.ts")).then(function (m) {
              return m.SignupPageModule;
            });
          }
        }, {
          path: 'login',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | login-login-module */
            [__webpack_require__.e("common"), __webpack_require__.e("login-login-module")]).then(__webpack_require__.bind(null,
            /*! ../login/login.module */
            "./src/app/login/login.module.ts")).then(function (m) {
              return m.LoginPageModule;
            });
          }
        }, {
          path: 'verify',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | verify-verify-module */
            "verify-verify-module").then(__webpack_require__.bind(null,
            /*! ../verify/verify.module */
            "./src/app/verify/verify.module.ts")).then(function (m) {
              return m.VerifyPageModule;
            });
          }
        }, {
          path: 'forgot',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | forgot-forgot-module */
            "forgot-forgot-module").then(__webpack_require__.bind(null,
            /*! ../forgot/forgot.module */
            "./src/app/forgot/forgot.module.ts")).then(function (m) {
              return m.ForgotPageModule;
            });
          }
        }, {
          path: 'settings',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | settings-settings-module */
            "settings-settings-module").then(__webpack_require__.bind(null,
            /*! ../settings/settings.module */
            "./src/app/settings/settings.module.ts")).then(function (m) {
              return m.SettingsPageModule;
            });
          }
        }, {
          path: 'forgotverify',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | forgotverify-forgotverify-module */
            "forgotverify-forgotverify-module").then(__webpack_require__.bind(null,
            /*! ../forgotverify/forgotverify.module */
            "./src/app/forgotverify/forgotverify.module.ts")).then(function (m) {
              return m.ForgotverifyPageModule;
            });
          }
        }, {
          path: 'chatdetails',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | chatdetails-chatdetails-module */
            "chatdetails-chatdetails-module").then(__webpack_require__.bind(null,
            /*! ../chatdetails/chatdetails.module */
            "./src/app/chatdetails/chatdetails.module.ts")).then(function (m) {
              return m.ChatdetailsPageModule;
            });
          }
        }, {
          path: 'mycontact',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | mycontact-mycontact-module */
            [__webpack_require__.e("common"), __webpack_require__.e("mycontact-mycontact-module")]).then(__webpack_require__.bind(null,
            /*! ../mycontact/mycontact.module */
            "./src/app/mycontact/mycontact.module.ts")).then(function (m) {
              return m.MycontactPageModule;
            });
          }
        }, {
          path: 'addgroup',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | addgroup-addgroup-module */
            "addgroup-addgroup-module").then(__webpack_require__.bind(null,
            /*! ../addgroup/addgroup.module */
            "./src/app/addgroup/addgroup.module.ts")).then(function (m) {
              return m.AddgroupPageModule;
            });
          }
        }, {
          path: 'addcircle',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | addcircle-addcircle-module */
            "addcircle-addcircle-module").then(__webpack_require__.bind(null,
            /*! ../addcircle/addcircle.module */
            "./src/app/addcircle/addcircle.module.ts")).then(function (m) {
              return m.AddcirclePageModule;
            });
          }
        }, {
          path: 'terms',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | terms-terms-module */
            "terms-terms-module").then(__webpack_require__.bind(null,
            /*! ../terms/terms.module */
            "./src/app/terms/terms.module.ts")).then(function (m) {
              return m.TermsPageModule;
            });
          }
        }, {
          path: 'contact',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | contact-contact-module */
            "contact-contact-module").then(__webpack_require__.bind(null,
            /*! ../contact/contact.module */
            "./src/app/contact/contact.module.ts")).then(function (m) {
              return m.ContactPageModule;
            });
          }
        }]
      }, {
        path: '',
        redirectTo: '/menu/login'
      }];

      var MenuPageRoutingModule = function MenuPageRoutingModule() {
        _classCallCheck(this, MenuPageRoutingModule);
      };

      MenuPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MenuPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/menu/menu.module.ts":
    /*!*************************************!*\
      !*** ./src/app/menu/menu.module.ts ***!
      \*************************************/

    /*! exports provided: MenuPageModule */

    /***/
    function srcAppMenuMenuModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuPageModule", function () {
        return MenuPageModule;
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


      var _menu_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./menu-routing.module */
      "./src/app/menu/menu-routing.module.ts");
      /* harmony import */


      var _menu_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./menu.page */
      "./src/app/menu/menu.page.ts");

      var MenuPageModule = function MenuPageModule() {
        _classCallCheck(this, MenuPageModule);
      };

      MenuPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _menu_routing_module__WEBPACK_IMPORTED_MODULE_5__["MenuPageRoutingModule"]],
        declarations: [_menu_page__WEBPACK_IMPORTED_MODULE_6__["MenuPage"]]
      })], MenuPageModule);
      /***/
    },

    /***/
    "./src/app/menu/menu.page.scss":
    /*!*************************************!*\
      !*** ./src/app/menu/menu.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppMenuMenuPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".tabs .tabbar {\n  background: #fff;\n  padding: 0px 0px 0;\n  border: 0px;\n  border-top: 1px solid #e1e1e1;\n}\n.tabs .tabbar .tab-button-text {\n  text-transform: uppercase;\n  font-size: 10px;\n  margin-bottom: 4px !important;\n  margin-top: 3px !important;\n}\n.show-tabbar .tab-button {\n  background-repeat: no-repeat;\n  background-position: center 8px;\n  background-size: 25px;\n  padding-top: 0px !important;\n}\n.tab-button .tab-button-icon {\n  opacity: 0;\n  margin-top: 0px !important;\n}\n.tabbar span {\n  margin-top: 32px;\n}\n.tab-button:nth-child(1) {\n  background-image: url(/assets/imgs/footer/chat.png);\n  background-size: 28px;\n}\n.tab-button:nth-child(2) {\n  background-image: url(/assets/imgs/footer/media.png);\n  background-size: 28px;\n}\n.tab-button:nth-child(3) {\n  background-image: url(/assets/imgs/footer/wallet.png);\n  background-size: 28px;\n}\n.tab-button:nth-child(4) {\n  background-image: url(/assets/imgs/footer/email.png);\n  background-size: 28px;\n}\n.tab-button:nth-child(5) {\n  background-image: url(/assets/imgs/footer/more.png);\n  background-size: 28px;\n}\n.tab-button[aria-selected=true]:nth-child(1) {\n  background-image: url(/assets/imgs/footer/chat-active.png);\n}\n.tab-button[aria-selected=true]:nth-child(2) {\n  background-image: url(/assets/imgs/footer/media-active.png);\n}\n.tab-button[aria-selected=true]:nth-child(3) {\n  background-image: url(/assets/imgs/footer/wallet-active.png);\n}\n.tab-button[aria-selected=true]:nth-child(4) {\n  background-image: url(/assets/imgs/footer/email-active.png);\n}\n.tab-button[aria-selected=true]:nth-child(5) {\n  background-image: url(/assets/imgs/footer/more-active.png);\n}\nion-menu .content {\n  background-image: url(/assets/imgs/menu/background2.png) !important;\n}\nion-menu .content .item {\n  background: transparent;\n}\n.avtar_img img {\n  height: 100px;\n  width: 100px;\n  border-radius: 50%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.avtar_img {\n  text-align: center;\n  margin: 40px;\n}\n.menu-btn button {\n  color: #fff;\n}\n.menu-btn button img {\n  width: 22px;\n  margin-right: 15px;\n}\n.menu-btn ion-label {\n  display: flex;\n}\n.bottom_img {\n  padding: 20px;\n}\n.action-sheet-ios .action-sheet-button {\n  margin: 0;\n  padding: 16px;\n  min-height: auto;\n  border-bottom: 0.55px solid #d6d6da;\n  font-size: 15px;\n  color: #000;\n  background: transparent;\n}\n.action-sheet-ios .action-sheet-selected {\n  font-weight: bold;\n  background: #fff;\n  color: #fe6e4a !important;\n}\n.tabs .tabbar {\n  height: 60px;\n}\n.avtar_menu {\n  min-width: 76px !important;\n  min-height: 76px !important;\n}\n.avtar_menu img {\n  border-radius: 50%;\n  overflow: hidden;\n  width: 76px !important;\n  height: 76px !important;\n}\n.avtar_menu .list_menu.list {\n  margin-bottom: 10px;\n  border-bottom: 1px solid #ffffff45 !important;\n}\n.tab-button-text {\n  position: absolute;\n  top: 0;\n  right: 17px;\n  background: #fe6e4a;\n  border-radius: 20px;\n  color: #fff;\n  padding: 2px;\n  font-size: 11px !important;\n  max-height: 17px !important;\n  min-width: 17px;\n}\n.tab-button {\n  max-width: 80px !important;\n}\n.toolbar-background {\n  background-color: transparent !important;\n}\n.moremodel .modal-wrapper {\n  -webkit-animation: fadein 0.5s;\n          animation: fadein 0.5s;\n  transition: ease-in-out 0.5s;\n  transform: translatey(0%) !important;\n}\n.moremodel ion-backdrop {\n  visibility: visible !important;\n  z-index: 0 !important;\n}\n.wallet_p {\n  color: #fff !important;\n  display: flex;\n  align-items: center;\n}\n.registerAlert .alert-head .alert-sub-title {\n  text-align: center;\n  font-size: 22px;\n}\n.registerAlert .alert-title > div {\n  text-align: center;\n}\n.registerAlert .alert-title > div img {\n  display: inline-block;\n  height: 70px;\n}\n.registerAlert .alert-message {\n  font-size: 18px;\n  text-align: center;\n}\n.registerAlert .alert-button-group .alert-button {\n  text-align: center;\n  background: #fe6e4a;\n  color: white;\n  width: 50px;\n}\n.registerAlert .alert-button-group .alert-button span {\n  justify-content: center !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7QUFBUjtBQUVJO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtBQUFSO0FBSUE7RUFDSSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtBQURKO0FBSUE7RUFDSSxVQUFBO0VBQ0EsMEJBQUE7QUFESjtBQUtJO0VBQ0ksZ0JBQUE7QUFGUjtBQU9JO0VBQ0ksbURBQUE7RUFDQSxxQkFBQTtBQUpSO0FBTUk7RUFDSSxvREFBQTtFQUNBLHFCQUFBO0FBSlI7QUFNSTtFQUNJLHFEQUFBO0VBQ0EscUJBQUE7QUFKUjtBQU1JO0VBQ0ksb0RBQUE7RUFDQSxxQkFBQTtBQUpSO0FBTUk7RUFDSSxtREFBQTtFQUNBLHFCQUFBO0FBSlI7QUFTSTtFQUNJLDBEQUFBO0FBTlI7QUFRSTtFQUNJLDJEQUFBO0FBTlI7QUFRSTtFQUNJLDREQUFBO0FBTlI7QUFRSTtFQUNJLDJEQUFBO0FBTlI7QUFTSTtFQUNJLDBEQUFBO0FBUFI7QUFZQTtFQUNJLG1FQUFBO0FBVEo7QUFZQTtFQUNJLHVCQUFBO0FBVEo7QUFZQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FBVEo7QUFZQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQVRKO0FBWUE7RUFDSSxXQUFBO0FBVEo7QUFZQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQVRKO0FBWUE7RUFDSSxhQUFBO0FBVEo7QUFZQTtFQUNJLGFBQUE7QUFUSjtBQVlBO0VBQ0ksU0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtBQVRKO0FBWUE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFUSjtBQVlBO0VBQ0ksWUFBQTtBQVRKO0FBWUE7RUFDSSwwQkFBQTtFQUNBLDJCQUFBO0FBVEo7QUFVSTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBUlI7QUFVSTtFQUNJLG1CQUFBO0VBQ0EsNkNBQUE7QUFSUjtBQVlBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0FBVEo7QUFZQTtFQUNJLDBCQUFBO0FBVEo7QUFvQkE7RUFDSSx3Q0FBQTtBQWpCSjtBQXFCSTtFQUVJLDhCQUFBO1VBQUEsc0JBQUE7RUFDQSw0QkFBQTtFQUNBLG9DQUFBO0FBbkJSO0FBd0JJO0VBQ0ksOEJBQUE7RUFDQSxxQkFBQTtBQXRCUjtBQTBCQTtFQUNJLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBdkJKO0FBMkNJO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FBeENSO0FBMkNRO0VBQ0ksa0JBQUE7QUF6Q1o7QUEwQ1k7RUFDSSxxQkFBQTtFQUNBLFlBQUE7QUF4Q2hCO0FBNENJO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FBMUNSO0FBNkNRO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBM0NaO0FBNENZO0VBQ0ksa0NBQUE7QUExQ2hCIiwiZmlsZSI6InNyYy9hcHAvbWVudS9tZW51LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJzIHtcbiAgICAudGFiYmFyIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgcGFkZGluZzogMHB4IDBweCAwO1xuICAgICAgICBib3JkZXI6IDBweDtcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlMWUxZTE7XG4gICAgfVxuICAgIC50YWJiYXIgLnRhYi1idXR0b24tdGV4dCB7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi10b3A6IDNweCAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuLnNob3ctdGFiYmFyIC50YWItYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciA4cHg7XG4gICAgYmFja2dyb3VuZC1zaXplOiAyNXB4O1xuICAgIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcbn1cblxuLnRhYi1idXR0b24gLnRhYi1idXR0b24taWNvbiB7XG4gICAgb3BhY2l0eTogMDtcbiAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbn1cblxuLnRhYmJhciB7XG4gICAgc3BhbiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgfVxufVxuXG4udGFiLWJ1dHRvbiB7XG4gICAgJjpudGgtY2hpbGQoMSkge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWdzL2Zvb3Rlci9jaGF0LnBuZyk7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMjhweDtcbiAgICB9XG4gICAgJjpudGgtY2hpbGQoMikge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWdzL2Zvb3Rlci9tZWRpYS5wbmcpO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDI4cHg7XG4gICAgfVxuICAgICY6bnRoLWNoaWxkKDMpIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1ncy9mb290ZXIvd2FsbGV0LnBuZyk7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMjhweDtcbiAgICB9XG4gICAgJjpudGgtY2hpbGQoNCkge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWdzL2Zvb3Rlci9lbWFpbC5wbmcpO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDI4cHg7XG4gICAgfVxuICAgICY6bnRoLWNoaWxkKDUpIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1ncy9mb290ZXIvbW9yZS5wbmcpO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDI4cHg7XG4gICAgfVxufVxuXG4udGFiLWJ1dHRvblthcmlhLXNlbGVjdGVkPVwidHJ1ZVwiXSB7XG4gICAgJjpudGgtY2hpbGQoMSkge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWdzL2Zvb3Rlci9jaGF0LWFjdGl2ZS5wbmcpO1xuICAgIH1cbiAgICAmOm50aC1jaGlsZCgyKSB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltZ3MvZm9vdGVyL21lZGlhLWFjdGl2ZS5wbmcpO1xuICAgIH1cbiAgICAmOm50aC1jaGlsZCgzKSB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltZ3MvZm9vdGVyL3dhbGxldC1hY3RpdmUucG5nKTtcbiAgICB9XG4gICAgJjpudGgtY2hpbGQoNCkge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWdzL2Zvb3Rlci9lbWFpbC1hY3RpdmUucG5nKTtcbiAgICAgICAgLy8gYmFja2dyb3VuZC1zaXplOiAzMHB4O1xuICAgIH1cbiAgICAmOm50aC1jaGlsZCg1KSB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltZ3MvZm9vdGVyL21vcmUtYWN0aXZlLnBuZyk7XG4gICAgICAgIC8vIGJhY2tncm91bmQtc2l6ZTogMzBweDtcbiAgICB9XG59XG5cbmlvbi1tZW51IC5jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWdzL21lbnUvYmFja2dyb3VuZDIucG5nKSAhaW1wb3J0YW50O1xufVxuXG5pb24tbWVudSAuY29udGVudCAuaXRlbSB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5hdnRhcl9pbWcgaW1nIHtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5hdnRhcl9pbWcge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDQwcHg7XG59XG5cbi5tZW51LWJ0biBidXR0b24ge1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4ubWVudS1idG4gYnV0dG9uIGltZyB7XG4gICAgd2lkdGg6IDIycHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4ubWVudS1idG4gaW9uLWxhYmVsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uYm90dG9tX2ltZyB7XG4gICAgcGFkZGluZzogMjBweDtcbn1cblxuLmFjdGlvbi1zaGVldC1pb3MgLmFjdGlvbi1zaGVldC1idXR0b24ge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIG1pbi1oZWlnaHQ6IGF1dG87XG4gICAgYm9yZGVyLWJvdHRvbTogMC41NXB4IHNvbGlkICNkNmQ2ZGE7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uYWN0aW9uLXNoZWV0LWlvcyAuYWN0aW9uLXNoZWV0LXNlbGVjdGVkIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGNvbG9yOiAjZmU2ZTRhICFpbXBvcnRhbnQ7XG59XG5cbi50YWJzIC50YWJiYXIge1xuICAgIGhlaWdodDogNjBweDtcbn1cblxuLmF2dGFyX21lbnUge1xuICAgIG1pbi13aWR0aDogNzZweCAhaW1wb3J0YW50O1xuICAgIG1pbi1oZWlnaHQ6IDc2cHggIWltcG9ydGFudDtcbiAgICBpbWcge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHdpZHRoOiA3NnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGhlaWdodDogNzZweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAubGlzdF9tZW51Lmxpc3Qge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZmZmZjQ1ICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG4udGFiLWJ1dHRvbi10ZXh0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAxN3B4O1xuICAgIGJhY2tncm91bmQ6ICNmZTZlNGE7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiAycHg7XG4gICAgZm9udC1zaXplOiAxMXB4ICFpbXBvcnRhbnQ7XG4gICAgbWF4LWhlaWdodDogMTdweCAhaW1wb3J0YW50O1xuICAgIG1pbi13aWR0aDogMTdweDtcbn1cblxuLnRhYi1idXR0b24ge1xuICAgIG1heC13aWR0aDogODBweCAhaW1wb3J0YW50O1xufVxuXG4vLyAubW9kYWwtd3JhcHBlciB7XG4vLyAgICAgLmNvbnRlbnQge1xuLy8gICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMCAhaW1wb3J0YW50O1xuLy8gICAgIH1cbi8vICAgICAuY29udGVudC1pb3Mge1xuLy8gICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMCAhaW1wb3J0YW50IDtcbi8vICAgICB9XG4vLyB9XG4udG9vbGJhci1iYWNrZ3JvdW5kIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG4ubW9yZW1vZGVsIHtcbiAgICAubW9kYWwtd3JhcHBlciB7XG4gICAgICAgIC8vIGJhY2tncm91bmQ6ICMwMDAwMDAzZDtcbiAgICAgICAgYW5pbWF0aW9uOiBmYWRlaW4gMC41cztcbiAgICAgICAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgMC41cztcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDAlKSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAubW9kYWwtd3JhcHBlciB7XG4gICAgICAgIC8vIHBvaW50ZXItZXZlbnRzOiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIGlvbi1iYWNrZHJvcCB7XG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcbiAgICAgICAgei1pbmRleDogMCAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuLndhbGxldF9wIHtcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLy8gQGtleWZyYW1lcyBmYWRlaW4ge1xuLy8gICAgIGZyb20ge1xuLy8gICAgICAgICBvcGFjaXR5OjA7XG4vLyAgICAgfVxuLy8gICAgIHRvIHtcbi8vICAgICAgICAgb3BhY2l0eToxO1xuLy8gICAgIH1cbi8vIH1cbi8vIEBrZXlmcmFtZXMgZmFkZW91dCB7XG4vLyAgICAgZnJvbSB7XG4vLyAgICAgICAgIG9wYWNpdHk6MTtcbi8vICAgICB9XG4vLyAgICAgdG8ge1xuLy8gICAgICAgICBvcGFjaXR5OjA7XG4vLyAgICAgfVxuLy8gfVxuLnJlZ2lzdGVyQWxlcnQge1xuICAgIC5hbGVydC1oZWFkIC5hbGVydC1zdWItdGl0bGUge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICB9XG4gICAgLmFsZXJ0LXRpdGxlIHtcbiAgICAgICAgJj5kaXYge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5hbGVydC1tZXNzYWdlIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIC5hbGVydC1idXR0b24tZ3JvdXAge1xuICAgICAgICAuYWxlcnQtYnV0dG9uIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZTZlNGE7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/menu/menu.page.ts":
    /*!***********************************!*\
      !*** ./src/app/menu/menu.page.ts ***!
      \***********************************/

    /*! exports provided: MenuPage */

    /***/
    function srcAppMenuMenuPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuPage", function () {
        return MenuPage;
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
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/auth.service */
      "./src/app/services/auth.service.ts");

      var MenuPage = /*#__PURE__*/function () {
        function MenuPage(router, auth, alertController) {
          var _this = this;

          _classCallCheck(this, MenuPage);

          this.router = router;
          this.auth = auth;
          this.alertController = alertController;
          this.activePath = '';
          this.pages = [{
            name: 'Profile',
            path: '/menu/profile',
            icon: 'person'
          }, {
            name: 'Notifications',
            path: '/menu/notifications',
            icon: 'notifications'
          }, // {
          //   name: 'Mail',
          //   path: '/menu/home',
          //   icon: 'mail'
          // },
          // {
          //   name: 'Wallet',
          //   path: '/menu/contact',
          //   icon: 'wallet'
          // },
          {
            name: 'Settings',
            path: '/menu/settings',
            icon: 'settings'
          }];
          this.router.events.subscribe(function (event) {
            _this.activePath = event.url;
          });
        }

        _createClass(MenuPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "toggle",
          value: function toggle() {}
        }, {
          key: "more",
          value: function more() {
            this.searchInput.setFocus();
          }
        }, {
          key: "logout",
          value: function logout() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        header: 'Alert!',
                        message: 'Do you want to log out??',
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {
                            console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: 'Yes',
                          handler: function handler() {
                            _this2.auth.removeAllSessions();

                            _this2.auth.logout();

                            _this2.router.navigate(['/menu/login']);
                          }
                        }]
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return MenuPage;
      }();

      MenuPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }];
      };

      MenuPage.propDecorators = {
        searchInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['input', {
            "static": false
          }]
        }]
      };
      MenuPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./menu.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./menu.page.scss */
        "./src/app/menu/menu.page.scss"))["default"]]
      })], MenuPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=menu-menu-module-es5.js.map