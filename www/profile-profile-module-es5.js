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


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-item slot=\"start\">\n      <ion-buttons style=\"zoom: 2.0;\" (click)=\"goBack()\">\n<ion-icon name=\"arrow-back-outline\"></ion-icon>        </ion-buttons>\n      </ion-item>\n    <ion-title style=\"text-align: center;\">Edit Profile</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"profile\">\n  <ion-card no-margin>\n    <ion-card-content class=\"bg-profile\">\n      <img [src]=\"blobImageName\">\n      <button style=\"padding-right: 0px;\n      padding-left: 0px;\n      padding-top: 0px;\n      height: 29px;\n      width: 50px;\n      border-radius: 17px;\n      border-left: 3px; margin-left: -124px; border: none; background: none;\">\n        <img style=\"margin-left: 1px;\n        width: 50%;\n        height: 82%;\" src=\"../../assets/imgs/camera.png\" (click)=\"getImage()\">\n        </button>\n    </ion-card-content>\n    <ion-grid fixed no-padding>\n\n       <ion-row>\n        <ion-col padding>\n\n          <ion-list lines=\"none\">\n            \n             <ion-item class=\"box\">\n              <ion-label  position=\"stacked\">Full Name:</ion-label>\n              <ion-input type=\"text\" style=\" font-weight: bold; color: #000;\" placeholder=\"\" value=\"\"  ></ion-input>\n              <img src=\"../../assets/imgs/status-edit.png\" class=\"iconimage\" >\n\n            </ion-item><br>\n              <ion-item class=\"box\">\n              <ion-label  position=\"stacked\">Email Address:</ion-label>\n              <ion-input inputmode=\"email\" style=\"outline: none; font-weight: bold;\" placeholder=\"\" value=\"\">abc@abc.com</ion-input>\n             </ion-item><br>\n             <ion-item class=\"box\">\n              <ion-label  position=\"stacked\">Username:</ion-label>\n              <ion-input type=\"text\"  style=\" outline: none; font-weight: bold;\" placeholder=\"\" value=\"\"  ></ion-input>\n              <img src=\"../../assets/imgs/status-edit.png\" class=\"iconimage\" >\n\n            </ion-item>  \n        <br>\n            <ion-item class=\"box\">\n              <ion-label  position=\"stacked\">Phone Number:</ion-label>\n              <ion-input inputmode=\"number\" style=\" outline: none; font-weight: bold;\" placeholder=\"\" value=\"\" ></ion-input>\n              <img slot=\"end\" src=\"../../assets/imgs/status-edit.png\" class=\"iconimage\" >\n            </ion-item>\n\n          </ion-list>\n\n\n\n        </ion-col>\n      </ion-row> \n<section id=\"footer\">\n  <button expand=\"block\" style=\"background-color: #5ac5ad; font-size: medium; width: 360px;\n  height: 36px;\n  color: white;\" (click)=\"save()\">Save</button>\n</section>\n    </ion-grid>\n\n\n  </ion-card>\n\n\n</ion-content>\n";
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


      __webpack_exports__["default"] = ":host ion-content {\n  --background: #fff;\n}\n\n.profile ion-card {\n  width: 100%;\n  border-radius: 0;\n  background-color: #fff;\n}\n\n.profile ion-card ion-card-content {\n  padding: 32px;\n  color: #fff;\n  text-align: center;\n  margin-left: -75px;\n}\n\n.profile ion-card ion-card-content img {\n  height: 128px;\n  width: 128px;\n  border-radius: 50%;\n  border: solid 4px #fff;\n  display: inline;\n  box-shadow: 0 0 28px rgba(255, 255, 255, 0.65);\n}\n\n.profile ion-card ion-card-content h1 {\n  margin-top: 0.5rem;\n}\n\n.profile ion-item ion-input {\n  border-bottom: 1px solid var(--ion-color-tertiary);\n}\n\n.profile ion-buttom button {\n  margin: 0;\n}\n\n.box {\n  padding-left: 20px;\n  padding-right: 20px;\n  border-width: 1px;\n  border-style: ridge;\n  border-radius: 0px;\n  overflow: hidden;\n  margin-left: -14px;\n  margin-right: -3px;\n  color: #000;\n}\n\n.bg {\n  background-color: #2b8e75;\n}\n\n.iconimage {\n  position: absolute;\n  right: 20px;\n  top: 15px;\n  width: 32px;\n}\n\n.login-logo {\n  height: 120px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.top-header {\n  display: flex;\n  height: 50px;\n  max-height: 48px;\n  min-height: 48px;\n  justify-content: space-between;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: 999;\n  width: 100%;\n  background: #fff;\n  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.17);\n}\n\n.top-header a {\n  color: #333;\n  display: flex;\n}\n\n.top-header ion-label {\n  margin: 0;\n  text-transform: uppercase;\n  color: #555;\n  font-size: 0.75rem;\n}\n\n.top-header ion-back-button {\n  min-width: auto;\n}\n\n.button-native.sc-ion-back-button-md {\n  -webkit-padding-start: 0;\n}\n\n.top-header ion-back-button button {\n  padding: 0;\n  -webkit-padding-start: 0;\n}\n\n.btnclick {\n  background-color: #5ac5ad;\n  color: #ffff;\n  width: 322px;\n  height: 53px;\n}\n\n#footer {\n  text-align: center;\n  padding-top: 10px;\n  padding-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNFLGtCQUFBO0FBQU47O0FBS0k7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQUZOOztBQUdNO0VBQ0UsYUFBQTtFQUVBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBRlI7O0FBSVE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsOENBQUE7QUFGVjs7QUFLUTtFQUNFLGtCQUFBO0FBSFY7O0FBU007RUFDRSxrREFBQTtBQVBSOztBQVlNO0VBQ0UsU0FBQTtBQVZSOztBQWNFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUVBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFaSjs7QUFjRTtFQUNFLHlCQUFBO0FBWEo7O0FBYUE7RUFDRSxrQkFBQTtFQUFvQixXQUFBO0VBQWEsU0FBQTtFQUFVLFdBQUE7QUFQN0M7O0FBU0E7RUFBWSxhQUFBO0VBQWEsYUFBQTtFQUFhLHVCQUFBO0VBQXVCLG1CQUFBO0FBRjdEOztBQUlBO0VBQVksYUFBQTtFQUFhLFlBQUE7RUFBWSxnQkFBQTtFQUFpQixnQkFBQTtFQUFpQiw4QkFBQTtFQUE4QixrQkFBQTtFQUFrQixRQUFBO0VBQVEsTUFBQTtFQUFNLFlBQUE7RUFBYSxXQUFBO0VBQVcsZ0JBQUE7RUFBMEgsK0NBQUE7QUFhdlI7O0FBWkE7RUFBYyxXQUFBO0VBQVcsYUFBQTtBQWlCekI7O0FBaEJBO0VBQXNCLFNBQUE7RUFBVSx5QkFBQTtFQUEwQixXQUFBO0VBQVksa0JBQUE7QUF1QnRFOztBQXRCQTtFQUE0QixlQUFBO0FBMEI1Qjs7QUF6QkE7RUFBcUMsd0JBQUE7QUE2QnJDOztBQTVCQTtFQUFtQyxVQUFBO0VBQVcsd0JBQUE7QUFpQzlDOztBQS9CQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBa0NGOztBQWhDQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQW1DRiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBpb24tY29udGVudCB7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wcm9maWxlIHtcclxuICAgIGlvbi1jYXJkIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgIGlvbi1jYXJkLWNvbnRlbnQge1xyXG4gICAgICAgIHBhZGRpbmc6IDMycHg7XHJcbiAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTc1cHg7XHJcblxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEyOHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDEyOHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgYm9yZGVyOiBzb2xpZCA0cHggI2ZmZjtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAyOHB4IHJnYmEoMjU1LDI1NSwyNTUsIC42NSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoMSB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAuNXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgIGlvbi1pbnB1dCB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpb24tYnV0dG9tIHtcclxuICAgICAgYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmJveHtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICAvLyBib3JkZXItY29sb3I6ICM5ZTkyOTI7XHJcbiAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgIGJvcmRlci1zdHlsZTogcmlkZ2U7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xNHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtM3B4O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgfVxyXG4gIC5iZ3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYjhlNzU7XHJcbiAgfVxyXG4uaWNvbmltYWdle1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgcmlnaHQ6IDIwcHg7IHRvcDoxNXB4OyB3aWR0aDogMzJweDtcclxufVxyXG4ubG9naW4tbG9nb3toZWlnaHQ6MTIwcHg7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyfVxyXG5cclxuLnRvcC1oZWFkZXJ7ZGlzcGxheTpmbGV4O2hlaWdodDo1MHB4O21heC1oZWlnaHQ6IDQ4cHg7bWluLWhlaWdodDogNDhweDtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2Vlbjtwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDowO3RvcDowO3otaW5kZXg6IDk5OTt3aWR0aDoxMDAlO2JhY2tncm91bmQ6I2ZmZjstd2Via2l0LWJveC1zaGFkb3c6IDBweCAxcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTcpOy1tb3otYm94LXNoYWRvdzogMHB4IDJweCAycHggMHB4IHJnYmEoMCwwLDAsMC4xNyk7Ym94LXNoYWRvdzogMHB4IDJweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNyk7fVxyXG4udG9wLWhlYWRlciBhe2NvbG9yOiMzMzM7ZGlzcGxheTogZmxleDt9XHJcbi50b3AtaGVhZGVyIGlvbi1sYWJlbHttYXJnaW46IDA7dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtjb2xvcjogIzU1NTtmb250LXNpemU6IDAuNzVyZW07fVxyXG4udG9wLWhlYWRlciBpb24tYmFjay1idXR0b257bWluLXdpZHRoOiBhdXRvO31cclxuLmJ1dHRvbi1uYXRpdmUuc2MtaW9uLWJhY2stYnV0dG9uLW1key13ZWJraXQtcGFkZGluZy1zdGFydDogMDt9XHJcbi50b3AtaGVhZGVyIGlvbi1iYWNrLWJ1dHRvbiBidXR0b257cGFkZGluZzogMDstd2Via2l0LXBhZGRpbmctc3RhcnQ6IDA7fVxyXG5cclxuLmJ0bmNsaWNre1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1YWM1YWQ7XHJcbiAgY29sb3I6ICNmZmZmO1xyXG4gIHdpZHRoOiAzMjJweDtcclxuICBoZWlnaHQ6IDUzcHg7XHJcbn1cclxuI2Zvb3RlcntcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDBweDtcclxufSJdfQ== */";
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
      /* harmony import */


      var _services_image_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/image.service */
      "./src/app/services/image.service.ts"); // import { AuthService } from '../auth.service';


      var ProfilePage = /*#__PURE__*/function () {
        function ProfilePage(menuCtrl, navCtrl, imageP) {
          _classCallCheck(this, ProfilePage);

          this.menuCtrl = menuCtrl;
          this.navCtrl = navCtrl;
          this.imageP = imageP; // this.formData = this.auth.getUserDetails();
        }

        _createClass(ProfilePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "getImage",
          value: function getImage() {
            var _this = this;

            this.imageP.getImage().then(function (res) {
              // this.formData.profile = res;
              _this.blobImageName = _this.imageP.generateImageName("hello.jpg");

              _this.imageP.imgURItoBlob(res).then(function (blob) {
                _this.useBlobImage = blob;
              });
            });
          }
        }, {
          key: "save",
          value: function save() {
            var data1 = {
              "profile": {
                value: this.useBlobImage,
                type: "No",
                name: this.blobImageName
              }
            };
            console.log(data1);
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {// this.menuCtrl.enable(false);
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.navCtrl.back();
          }
        }]);

        return ProfilePage;
      }();

      ProfilePage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _services_image_service__WEBPACK_IMPORTED_MODULE_3__["ImageService"]
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
    },

    /***/
    "./src/app/services/image.service.ts":
    /*!*******************************************!*\
      !*** ./src/app/services/image.service.ts ***!
      \*******************************************/

    /*! exports provided: ImageService */

    /***/
    function srcAppServicesImageServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImageService", function () {
        return ImageService;
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


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var ImageService = /*#__PURE__*/function () {
        function ImageService(http, camera, alertCtrl) {
          _classCallCheck(this, ImageService);

          this.http = http;
          this.camera = camera;
          this.alertCtrl = alertCtrl;
        }

        _createClass(ImageService, [{
          key: "getimageByCamera",
          value: function getimageByCamera() {
            var _this2 = this;

            return new Promise(function (resolve, reject) {
              if (_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"]['installed']()) {
                _this2.camera.getPicture({
                  quality: 100,
                  destinationType: _this2.camera.DestinationType.DATA_URL,
                  sourceType: _this2.camera.PictureSourceType.PHOTOLIBRARY,
                  encodingType: _this2.camera.EncodingType.JPEG,
                  targetHeight: 600,
                  targetWidth: 600,
                  saveToPhotoAlbum: false,
                  correctOrientation: true
                }).then(function (data) {
                  resolve('data:image/jpeg;base64,' + data);
                }, function (err) {
                  reject('Unable to take Photo:' + err);
                });
              } else {
                var self = _this2;
                var file = document.createElement("INPUT");
                file.setAttribute("type", "file");
                file.style.height = "0px";
                file.style.visibility = "hidden";
                file.click();

                file.onchange = function (ev) {
                  self.getWebImage(ev.target.files[0].then(function (res) {
                    resolve(res);
                  }));
                };
              }
            });
          }
        }, {
          key: "getImage",
          value: function getImage() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this3 = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      return _context2.abrupt("return", new Promise(function (resolve, reject) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                          var _this4 = this;

                          var alert, self, file;
                          return regeneratorRuntime.wrap(function _callee$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  if (!_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"]['installed']()) {
                                    _context.next = 8;
                                    break;
                                  }

                                  _context.next = 3;
                                  return this.alertCtrl.create({
                                    header: 'Set Profile Pic',
                                    message: 'Do you want to take a photo or choose from your photo gallery',
                                    buttons: [{
                                      text: 'Cancel',
                                      handler: function handler(data) {}
                                    }, {
                                      text: 'Choose from Gallery',
                                      handler: function handler() {
                                        _this4.camera.getPicture({
                                          quality: 100,
                                          destinationType: _this4.camera.DestinationType.DATA_URL,
                                          sourceType: _this4.camera.PictureSourceType.PHOTOLIBRARY,
                                          encodingType: _this4.camera.EncodingType.JPEG,
                                          targetHeight: 600,
                                          targetWidth: 600,
                                          saveToPhotoAlbum: false,
                                          correctOrientation: true
                                        }).then(function (data) {
                                          resolve('data:image/jpeg;base64' + data);
                                        }, function (err) {
                                          reject('Unable to take Photo:' + err);
                                        });
                                      }
                                    }, {
                                      text: 'Take Photo',
                                      handler: function handler() {
                                        _this4.camera.getPicture({
                                          quality: 100,
                                          destinationType: _this4.camera.DestinationType.DATA_URL,
                                          encodingType: _this4.camera.EncodingType.JPEG,
                                          targetHeight: 600,
                                          targetWidth: 600,
                                          saveToPhotoAlbum: false,
                                          correctOrientation: true
                                        }).then(function (data) {
                                          resolve('data:image/jpeg;base64' + data);
                                        }, function (err) {
                                          reject('Unable to take photo' + err);
                                        });
                                      }
                                    }]
                                  });

                                case 3:
                                  alert = _context.sent;
                                  _context.next = 6;
                                  return alert.present();

                                case 6:
                                  _context.next = 15;
                                  break;

                                case 8:
                                  self = this;
                                  file = document.createElement("INPUT");
                                  file.setAttribute("type", "file");
                                  file.style.height = "0px";
                                  file.style.visibility = "hidden";
                                  file.click();

                                  file.onchange = function (ev) {
                                    self.getWebImage(ev.target.files[0]).then(function (res) {
                                      resolve(res);
                                    });
                                  };

                                case 15:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          }, _callee, this);
                        }));
                      }));

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            }));
          }
        }, {
          key: "getGalleryimages",
          value: function getGalleryimages() {
            var _this5 = this;

            return new Promise(function (resolve, reject) {
              if (_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"]['installed']()) {
                _this5.camera.getPicture({
                  quality: 100,
                  destinationType: _this5.camera.DestinationType.DATA_URL,
                  sourceType: _this5.camera.PictureSourceType.PHOTOLIBRARY,
                  encodingType: _this5.camera.EncodingType.JPEG,
                  targetHeight: 600,
                  targetWidth: 600,
                  saveToPhotoAlbum: false,
                  correctOrientation: true
                }).then(function (data) {
                  resolve('data:image/jpeg;base64,' + data);
                }, function (err) {
                  reject('Unable to take Photo: ' + err);
                });
              } else {
                var self = _this5;
                var file = document.createElement("INPUT");
                file.setAttribute("type", "file");
                file.style.height = "0px";
                file.style.visibility = "hidden";
                file.click();

                file.onchange = function (ev) {
                  self.getWebImage(ev.target.files[0]).then(function (res) {
                    resolve(res);
                  });
                };
              }
            });
          }
        }, {
          key: "b64toBlob",
          value: function b64toBlob(b64Data, contentType) {
            contentType = contentType || '';
            var sliceSize = 512;
            var byteCharacters = atob(b64Data);
            var byteArrays = [];

            for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
              var slice = byteCharacters.slice(offset, offset + sliceSize);
              var byteNumbers = new Array(slice.length);

              for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
              }

              var byteArray = new Uint8Array(byteNumbers);
              byteArrays.push(byteArray);
            }

            var blob = new Blob(byteArrays, {
              type: contentType
            });
            return blob;
          }
        }, {
          key: "imgURItoBlob",
          value: function imgURItoBlob(dataURI) {
            return new Promise(function (resolve, reject) {
              var binary = atob(dataURI.split(',')[1]);
              var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
              console.log(mimeString);
              var array = [];

              for (var i = 0; i < binary.length; i++) {
                array.push(binary.charCodeAt(i));
              }

              resolve(new Blob([new Uint8Array(array)], {
                type: mimeString
              }));
            });
          }
        }, {
          key: "getWebImage",
          value: function getWebImage(imagefile) {
            return new Promise(function (resolve, reject) {
              var reader = new FileReader();

              reader.onload = function (readerEvent) {
                var imageData = readerEvent.target.result;
                resolve(imageData);
                console.log(imageData);
              };

              reader.readAsDataURL(imagefile);
            });
          }
        }, {
          key: "imgURLtoURI",
          value: function imgURLtoURI(imagefile) {
            return new Promise(function (resolve, reject) {
              var img = new Image();
              img.crossOrigin = 'Anonymous';

              img.onload = function () {
                var canvas = document.createElement('canvas');
                var ctx = canvas.getContext('2d');
                var dataURL;
                canvas.height = img.height;
                canvas.width = img.width;
                ctx.drawImage(img, 0, 0);
                dataURL = canvas.toDataURL();
                resolve(dataURL);
                canvas = null;
              };

              img.src = imagefile;
            });
          }
        }, {
          key: "imgURItoBlob1",
          value: function imgURItoBlob1(dataURI) {
            var binary = atob(dataURI.split(',')[1]);
            var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
            var array = [];

            for (var i = 0; i < binary.length; i++) {
              array.push(binary.charCodeAt(i));
            }

            return new Blob([new Uint8Array(array)], {
              type: mimeString
            });
          }
        }, {
          key: "generateImageName",
          value: function generateImageName(name) {
            var ext = this.getImgExt(name);
            return new Date().getTime() + '.' + ext;
          }
        }, {
          key: "getImgExt",
          value: function getImgExt(name) {
            return name.substr(name.lastIndexOf('.') + 1);
          }
        }, {
          key: "getImageName",
          value: function getImageName(img) {
            var k = img.type;
            var imgType = k.substring(k.lastIndexOf("/") + 1);
            return new Date().getTime() + '.' + imgType;
          }
        }]);

        return ImageService;
      }();

      ImageService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }, {
          type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }];
      };

      ImageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ImageService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=profile-profile-module-es5.js.map