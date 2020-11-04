(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppProfileProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button  defaultHref=\"/menu/home\"></ion-back-button>\n    </ion-buttons>\n    <!-- <ion-back-button style=\" color: black;margin-right: 90%; margin-top: -17px;\" defaultHref=\"campaigns\"></ion-back-button> -->\n    <ion-title style=\" text-align: center;\" >Profile</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content class=\"profile\">\n  <ion-card no-margin>\n    <ion-card-content class=\"bg-profile\">\n      <img src=\"../../assets/imgs/blank-avatar.jpg\">\n      <button style=\"padding-right: 0px;\n      padding-left: 0px;\n      padding-top: 0px;\n      height: 29px;\n      width: 50px;\n      border-radius: 17px;\n      border-left: 3px; margin-left: -124px; border: none; background: none;\">\n        <img style=\"margin-left: 1px;\n        width: 50%;\n        height: 82%;\" src=\"../../assets/imgs/camera.png\" (click)=\"getImage()\">\n        </button>\n    </ion-card-content>\n    <ion-grid fixed no-padding>\n\n      <ion-row>\n        <ion-col padding>\n\n          <ion-list lines=\"none\">\n             <ion-item class=\"box\">\n              <ion-label  position=\"stacked\">Full Name:</ion-label>\n              <ion-input type=\"text\" style=\" font-weight: bold; color: #000;\" placeholder=\"\" value=\"\"  ></ion-input>\n              <img src=\"../../assets/imgs/status-edit.png\" class=\"iconimage\" >\n\n            </ion-item><br>\n              <ion-item class=\"box\">\n              <ion-label  position=\"stacked\">Email Address:</ion-label>\n              <ion-input inputmode=\"email\" style=\"outline: none; font-weight: bold;\" placeholder=\"\" value=\"\">abc@abc.com</ion-input>\n             </ion-item><br>\n             <ion-item class=\"box\">\n              <ion-label  position=\"stacked\">Username:</ion-label>\n              <ion-input type=\"text\"  style=\" outline: none; font-weight: bold;\" placeholder=\"\" value=\"\"  ></ion-input>\n              <img src=\"../../assets/imgs/status-edit.png\" class=\"iconimage\" >\n\n            </ion-item>  \n        <br>\n            <ion-item class=\"box\">\n              <ion-label  position=\"stacked\">Phone Number:</ion-label>\n              <ion-input inputmode=\"number\" style=\" outline: none; font-weight: bold;\" placeholder=\"\" value=\"\" ></ion-input>\n              <img src=\"../../assets/imgs/status-edit.png\" class=\"iconimage\" >\n            </ion-item>\n\n          </ion-list>\n\n\n\n        </ion-col>\n      </ion-row>\n\n      <div style=\" display: flex;flex-direction: column;height: 100%; color: #fe6e4a;\">\n        <ion-list padding-horizontal padding-top style=\"overflow-y: scroll;max-height: 90%; text-align: center;\">\n         <button expand=\"block\" style=\"background-color: #fe6e4a; font-size: medium; width: 360px;\n          height: 36px;\n          color: white; margin-top: 82px;\" (click)=\"save()\">Save</button>              </ion-list>\n    </div>\n    </ion-grid>\n\n\n  </ion-card>\n\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/profile/profile-routing.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/profile/profile-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: ProfilePageRoutingModule */

    /***/
    function srcAppProfileProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function () {
        return ProfilePageRoutingModule;
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


      var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./profile.page */
      "./src/app/profile/profile.page.ts");

      var routes = [{
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
      }];

      var ProfilePageRoutingModule = function ProfilePageRoutingModule() {
        _classCallCheck(this, ProfilePageRoutingModule);
      };

      ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ProfilePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/profile/profile.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/profile/profile.module.ts ***!
      \*******************************************/

    /*! exports provided: ProfilePageModule */

    /***/
    function srcAppProfileProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function () {
        return ProfilePageModule;
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


      var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./profile-routing.module */
      "./src/app/profile/profile-routing.module.ts");
      /* harmony import */


      var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./profile.page */
      "./src/app/profile/profile.page.ts");

      var ProfilePageModule = function ProfilePageModule() {
        _classCallCheck(this, ProfilePageModule);
      };

      ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
      })], ProfilePageModule);
      /***/
    },

    /***/
    "./src/app/profile/profile.page.scss":
    /*!*******************************************!*\
      !*** ./src/app/profile/profile.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function srcAppProfileProfilePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host ion-content {\n  --background: #fff;\n}\n\n.profile ion-card {\n  width: 100%;\n  border-radius: 0;\n  background-color: #fff;\n}\n\n.profile ion-card ion-card-content {\n  padding: 32px;\n  color: #fff;\n  text-align: center;\n  margin-left: -75px;\n}\n\n.profile ion-card ion-card-content img {\n  height: 128px;\n  width: 128px;\n  border-radius: 50%;\n  border: solid 4px #fff;\n  display: inline;\n  box-shadow: 0 0 28px rgba(255, 255, 255, 0.65);\n}\n\n.profile ion-card ion-card-content h1 {\n  margin-top: 0.5rem;\n}\n\n.profile ion-item ion-input {\n  border-bottom: 1px solid var(--ion-color-tertiary);\n}\n\n.profile ion-buttom button {\n  margin: 0;\n}\n\n.box {\n  padding-left: 20px;\n  padding-right: 20px;\n  border-width: 1px;\n  border-style: ridge;\n  border-radius: 0px;\n  overflow: hidden;\n  margin-left: -14px;\n  margin-right: -3px;\n  color: #000;\n}\n\n.bg {\n  background-color: #2b8e75;\n}\n\n.iconimage {\n  position: absolute;\n  left: 320px;\n  bottom: 3px;\n  top: 15px;\n  width: 32px;\n}\n\n.login-logo {\n  height: 120px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.top-header {\n  display: flex;\n  height: 50px;\n  max-height: 48px;\n  min-height: 48px;\n  justify-content: space-between;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: 999;\n  width: 100%;\n  background: #fff;\n  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.17);\n}\n\n.top-header a {\n  color: #333;\n  display: flex;\n}\n\n.top-header ion-label {\n  margin: 0;\n  text-transform: uppercase;\n  color: #555;\n  font-size: 0.75rem;\n}\n\n.top-header ion-back-button {\n  min-width: auto;\n}\n\n.button-native.sc-ion-back-button-md {\n  -webkit-padding-start: 0;\n}\n\n.top-header ion-back-button button {\n  padding: 0;\n  -webkit-padding-start: 0;\n}\n\n.btnclick {\n  background-color: #fe6e4a;\n  color: #ffff;\n  width: 322px;\n  height: 53px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNFLGtCQUFBO0FBQU47O0FBS0k7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQUZOOztBQUdNO0VBQ0UsYUFBQTtFQUVBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBRlI7O0FBSVE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsOENBQUE7QUFGVjs7QUFLUTtFQUNFLGtCQUFBO0FBSFY7O0FBU007RUFDRSxrREFBQTtBQVBSOztBQVlNO0VBQ0UsU0FBQTtBQVZSOztBQWNFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUVBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFaSjs7QUFjRTtFQUNFLHlCQUFBO0FBWEo7O0FBYUE7RUFDRSxrQkFBQTtFQUFvQixXQUFBO0VBQWEsV0FBQTtFQUFhLFNBQUE7RUFBVSxXQUFBO0FBTjFEOztBQVFBO0VBQVksYUFBQTtFQUFhLGFBQUE7RUFBYSx1QkFBQTtFQUF1QixtQkFBQTtBQUQ3RDs7QUFHQTtFQUFZLGFBQUE7RUFBYSxZQUFBO0VBQVksZ0JBQUE7RUFBaUIsZ0JBQUE7RUFBaUIsOEJBQUE7RUFBOEIsa0JBQUE7RUFBa0IsUUFBQTtFQUFRLE1BQUE7RUFBTSxZQUFBO0VBQWEsV0FBQTtFQUFXLGdCQUFBO0VBQTBILCtDQUFBO0FBY3ZSOztBQWJBO0VBQWMsV0FBQTtFQUFXLGFBQUE7QUFrQnpCOztBQWpCQTtFQUFzQixTQUFBO0VBQVUseUJBQUE7RUFBMEIsV0FBQTtFQUFZLGtCQUFBO0FBd0J0RTs7QUF2QkE7RUFBNEIsZUFBQTtBQTJCNUI7O0FBMUJBO0VBQXFDLHdCQUFBO0FBOEJyQzs7QUE3QkE7RUFBbUMsVUFBQTtFQUFXLHdCQUFBO0FBa0M5Qzs7QUFoQ0E7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQW1DRiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBpb24tY29udGVudCB7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wcm9maWxlIHtcclxuICAgIGlvbi1jYXJkIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgIGlvbi1jYXJkLWNvbnRlbnQge1xyXG4gICAgICAgIHBhZGRpbmc6IDMycHg7XHJcbiAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTc1cHg7XHJcblxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEyOHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDEyOHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgYm9yZGVyOiBzb2xpZCA0cHggI2ZmZjtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAyOHB4IHJnYmEoMjU1LDI1NSwyNTUsIC42NSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoMSB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAuNXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgIGlvbi1pbnB1dCB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpb24tYnV0dG9tIHtcclxuICAgICAgYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmJveHtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICAvLyBib3JkZXItY29sb3I6ICM5ZTkyOTI7XHJcbiAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgIGJvcmRlci1zdHlsZTogcmlkZ2U7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xNHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtM3B4O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgfVxyXG4gIC5iZ3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYjhlNzU7XHJcbiAgfVxyXG4uaWNvbmltYWdle1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogMzIwcHg7IGJvdHRvbTogM3B4OyB0b3A6MTVweDsgd2lkdGg6IDMycHg7XHJcbn1cclxuLmxvZ2luLWxvZ297aGVpZ2h0OjEyMHB4O2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcn1cclxuXHJcbi50b3AtaGVhZGVye2Rpc3BsYXk6ZmxleDtoZWlnaHQ6NTBweDttYXgtaGVpZ2h0OiA0OHB4O21pbi1oZWlnaHQ6IDQ4cHg7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6MDt0b3A6MDt6LWluZGV4OiA5OTk7d2lkdGg6MTAwJTtiYWNrZ3JvdW5kOiNmZmY7LXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE3KTstbW96LWJveC1zaGFkb3c6IDBweCAycHggMnB4IDBweCByZ2JhKDAsMCwwLDAuMTcpO2JveC1zaGFkb3c6IDBweCAycHggMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTcpO31cclxuLnRvcC1oZWFkZXIgYXtjb2xvcjojMzMzO2Rpc3BsYXk6IGZsZXg7fVxyXG4udG9wLWhlYWRlciBpb24tbGFiZWx7bWFyZ2luOiAwO3RleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7Y29sb3I6ICM1NTU7Zm9udC1zaXplOiAwLjc1cmVtO31cclxuLnRvcC1oZWFkZXIgaW9uLWJhY2stYnV0dG9ue21pbi13aWR0aDogYXV0bzt9XHJcbi5idXR0b24tbmF0aXZlLnNjLWlvbi1iYWNrLWJ1dHRvbi1tZHstd2Via2l0LXBhZGRpbmctc3RhcnQ6IDA7fVxyXG4udG9wLWhlYWRlciBpb24tYmFjay1idXR0b24gYnV0dG9ue3BhZGRpbmc6IDA7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OiAwO31cclxuXHJcbi5idG5jbGlja3tcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmU2ZTRhO1xyXG4gIGNvbG9yOiAjZmZmZjtcclxuICB3aWR0aDogMzIycHg7XHJcbiAgaGVpZ2h0OiA1M3B4O1xyXG59Il19 */";
      /***/
    },

    /***/
    "./src/app/profile/profile.page.ts":
    /*!*****************************************!*\
      !*** ./src/app/profile/profile.page.ts ***!
      \*****************************************/

    /*! exports provided: ProfilePage */

    /***/
    function srcAppProfileProfilePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePage", function () {
        return ProfilePage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var ProfilePage = /*#__PURE__*/function () {
        function ProfilePage(menuCtrl) {
          _classCallCheck(this, ProfilePage);

          this.menuCtrl = menuCtrl;
        }

        _createClass(ProfilePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "getImage",
          value: function getImage() {}
        }, {
          key: "save",
          value: function save() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {// this.menuCtrl.enable(false);
          }
        }]);

        return ProfilePage;
      }();

      ProfilePage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
        }];
      };

      ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./profile.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./profile.page.scss */
        "./src/app/profile/profile.page.scss"))["default"]]
      })], ProfilePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=profile-profile-module-es5.js.map