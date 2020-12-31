(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mycontact-mycontact-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/mycontact/mycontact.page.html":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mycontact/mycontact.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppMycontactMycontactPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-item slot=\"start\">\n      <ion-buttons style=\"zoom: 2.0;\" (click)=\"goBack()\">\n<ion-icon name=\"arrow-back-outline\"></ion-icon>        </ion-buttons>\n      </ion-item>\n    <ion-title style=\"text-align: center; text-transform: uppercase;\">contacts</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"back\">\n\n  <ion-searchbar (ionInput)=\"getItems($event)\"></ion-searchbar>\n  <div class=\"user\" (click)=\"chatdetail()\">\n\n    <ion-list>\n    <ion-item-sliding no-lines>\n    <ion-item no-lines class=\"chat_item\">\n      <ion-avatar item-start>\n        <div>\n          <img src=\"../../assets/imgs/blank-avatar.jpg\">\n      </div>\n      </ion-avatar>\n      <div>\n      <h6 class=\"heading_int\">Simon</h6>\n            <p class=\"dateee\">@simon_john</p>\n            </div>\n            <button ion-button item-end style=\"position: absolute !important;\n            top: 27px !important;\n            right: 16px !important;\n            text-align: right; text-transform: uppercase; background-color: orange; \" small (click)=\"showModal()\">Invite</button>\n    </ion-item>\n\n  </ion-item-sliding>\n</ion-list>\n\n    </div>\n    <div class=\"user\">\n\n      <ion-list>\n      <ion-item-sliding no-lines>\n      <ion-item no-lines class=\"chat_item\">\n        <ion-avatar item-start (click)=\"chatdetail()\">\n            <img src=\"../../assets/imgs/blank-avatar.jpg\">\n        </ion-avatar>\n        <div>\n        <h6 class=\"heading_int\" (click)=\"chatdetail()\">Simon</h6>\n              <p class=\"dateee\">+91452458452</p>\n              </div>\n              <button ion-button item-end style=\"position: absolute !important;\n              top: 27px !important;\n              right: 16px !important;\n              text-align: right; text-transform: uppercase; background-color: orange; \" small (click)=\"showModal()\">Invite</button>\n      </ion-item>\n  \n    </ion-item-sliding>\n  </ion-list>\n  \n      </div>\n      <div class=\"user\" (click)=\"chatdetail()\">\n\n        <ion-list no-lines>\n        <ion-item-sliding no-lines>\n        <ion-item no-lines class=\"chat_item\">\n          <ion-avatar item-start>\n              <img src=\"../../assets/imgs/blank-avatar.jpg\">\n          </ion-avatar>\n          <div>\n          <h6 class=\"heading_int\">Simon</h6>\n                <p class=\"dateee\">@simon_john</p>\n        </div>\n        <button ion-button item-end style=\"position: absolute !important;\n        top: 27px !important;\n        right: 16px !important;\n        text-align: right; text-transform: uppercase; background-color: orange; \" small (click)=\"showModal()\">Invite</button>\n              </ion-item>\n        \n      </ion-item-sliding>\n    </ion-list>\n    \n        </div>\n        <div class=\"user\">\n    \n          <ion-list no-lines>\n          <ion-item-sliding no-lines>\n          <ion-item no-lines class=\"chat_item\">\n            <ion-avatar item-start (click)=\"chatdetail()\">\n                <img src=\"../../assets/imgs/blank-avatar.jpg\">\n            </ion-avatar>\n            <div>\n            <h6 class=\"heading_int\" (click)=\"chatdetail()\">Simon</h6>\n                  <p class=\"dateee\">+91452458452</p>\n                  </div>\n                  <button ion-button item-end style=\"position: absolute !important;\n                  top: 27px !important;\n                  right: 16px !important;\n                  text-align: right; text-transform: uppercase; background-color: orange; \" small (click)=\"showModal()\">Invite</button>\n          </ion-item>\n      \n        </ion-item-sliding>\n      </ion-list>\n      \n          </div>\n\t<div class=\"user\" *ngFor=\"let k of [1,2,3,4]\" (click)=\"chatdetail()\">\n\n    <ion-list no-lines>\n    <ion-item-sliding no-lines>\n    <ion-item no-lines class=\"chat_item\">\n      <ion-avatar item-start>\n          <img src=\"../../assets/imgs/blank-avatar.jpg\">\n      </ion-avatar>\n      <div>\n      <h6 class=\"heading_int\">Simon</h6>\n            <p class=\"dateee\">@simon_john</p>\n        </div>\n        <button ion-button item-end style=\"position: absolute !important;\n        top: 27px !important;\n        right: 16px !important;\n        text-align: right; text-transform: uppercase; background-color: orange; \" small (click)=\"showModal()\">Invite</button>\n          </ion-item>\n\n    <ion-item-options> \n      <button ion-button color=\"dark\" icon-start>\n        <img src=\"assets/imgs/msg.png\">\n        Read\n      </button>\n      <button ion-button color=\"primary\" icon-start>\n        <img src=\"assets/imgs/pin.png\">\n        Pin\n      </button>\n    </ion-item-options>\n\n    <ion-item-options>\n      <button ion-button color=\"dark\">\n        <img src=\"assets/imgs/more.png\">\n        more\n      </button>\n      <button ion-button color=\"primary\">\n        <img src=\"assets/imgs/archive.png\">\n        Archive\n      </button>\n    </ion-item-options>\n\n  </ion-item-sliding>\n</ion-list>\n\n    </div>\n\n</ion-content>\n\n";
      /***/
    },

    /***/
    "./src/app/mycontact/mycontact-routing.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/mycontact/mycontact-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: MycontactPageRoutingModule */

    /***/
    function srcAppMycontactMycontactRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MycontactPageRoutingModule", function () {
        return MycontactPageRoutingModule;
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


      var _mycontact_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./mycontact.page */
      "./src/app/mycontact/mycontact.page.ts");

      var routes = [{
        path: '',
        component: _mycontact_page__WEBPACK_IMPORTED_MODULE_3__["MycontactPage"]
      }];

      var MycontactPageRoutingModule = function MycontactPageRoutingModule() {
        _classCallCheck(this, MycontactPageRoutingModule);
      };

      MycontactPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MycontactPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/mycontact/mycontact.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/mycontact/mycontact.module.ts ***!
      \***********************************************/

    /*! exports provided: MycontactPageModule */

    /***/
    function srcAppMycontactMycontactModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MycontactPageModule", function () {
        return MycontactPageModule;
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


      var _mycontact_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./mycontact-routing.module */
      "./src/app/mycontact/mycontact-routing.module.ts");
      /* harmony import */


      var _mycontact_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./mycontact.page */
      "./src/app/mycontact/mycontact.page.ts");

      var MycontactPageModule = function MycontactPageModule() {
        _classCallCheck(this, MycontactPageModule);
      };

      MycontactPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _mycontact_routing_module__WEBPACK_IMPORTED_MODULE_5__["MycontactPageRoutingModule"]],
        declarations: [_mycontact_page__WEBPACK_IMPORTED_MODULE_6__["MycontactPage"]]
      })], MycontactPageModule);
      /***/
    },

    /***/
    "./src/app/mycontact/mycontact.page.scss":
    /*!***********************************************!*\
      !*** ./src/app/mycontact/mycontact.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function srcAppMycontactMycontactPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".back {\n  background-image: url('background.png');\n}\n\n.back-button.bar-button {\n  color: #000;\n}\n\n.toolbar-title {\n  color: #000 !important;\n  font-weight: 500 !important;\n}\n\n.toolbar-background {\n  background-color: blue;\n}\n\n.segment-ios .segment-button {\n  flex: 1;\n  width: 0;\n  height: 3.2rem;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #fe6e4a;\n  font-size: 1.3rem;\n  line-height: 3rem;\n  color: #000;\n  background-color: transparent;\n  font-weight: bold;\n  border: none;\n  font-size: 15px;\n}\n\n.segment-ios .segment-button.segment-activated {\n  color: #fe6e4a;\n  background-color: transparent;\n  opacity: 1;\n  transition: 100ms all linear;\n  font-weight: bold;\n}\n\n.user_img img {\n  height: 65px;\n  width: 65px;\n  border-radius: 50%;\n  border: 1px solid #3aa400;\n  padding: 1px;\n}\n\n.user_img {\n  text-align: center;\n}\n\n.user .row {\n  align-items: center;\n  justify-content: center;\n  padding: 10px 10px 0;\n}\n\n.heading_int {\n  font-size: 17px !important;\n  font-weight: 500;\n  padding-left: 24px;\n}\n\n.chat_item.item.item-block {\n  border: none !important;\n}\n\n.user .item-inner {\n  padding: 0 5px !important;\n  border-bottom: 1px solid #ccc !important;\n  margin: 0px 0 0;\n}\n\n.rate {\n  position: absolute !important;\n  top: 19px !important;\n  right: 16px !important;\n}\n\nion-item-options img {\n  width: 25px;\n  margin: 8px;\n}\n\n.rate p {\n  font-size: 10px;\n}\n\n.searchbar {\n  background: transparent;\n  border: none;\n  padding: 20px 20px 0;\n  min-height: 50px;\n}\n\n.searchbar-input {\n  background: #fff !important;\n  height: 35px !important;\n  border-radius: 50px !important;\n  box-shadow: 0px 2px 4px #00000026;\n}\n\n.searchbar-search-icon {\n  top: 11px !important;\n}\n\n.list {\n  margin: 0;\n}\n\n.searchbar {\n  background: transparent;\n  border: none;\n  padding: 16px;\n  min-height: 50px;\n}\n\n.segment {\n  margin: 20px 0 0;\n}\n\n.chat_item {\n  background: transparent;\n}\n\nion-item-sliding {\n  background-color: transparent !important;\n}\n\n.fab {\n  background: transparent;\n}\n\n.item-ios ion-avatar {\n  min-width: 65px;\n  min-height: 65px;\n}\n\n.ping {\n  background: #fe6e4a;\n  width: 20px;\n  height: 20px;\n  display: inline-block;\n  text-align: center;\n  padding: 5px;\n  border-radius: 50%;\n  color: #fff;\n}\n\n.toolbar-background {\n  border: none !important;\n}\n\n.dateee {\n  padding-left: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXljb250YWN0L215Y29udGFjdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1Q0FBQTtBQUNKOztBQUNBO0VBQ0EsV0FBQTtBQUVBOztBQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtBQUdBOztBQURBO0VBQ0Esc0JBQUE7QUFJQTs7QUFEQTtFQUlBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBSUE7O0FBRkE7RUFDQSxjQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0VBRUEsNEJBQUE7RUFDQSxpQkFBQTtBQUtBOztBQUhBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQU1BOztBQUpBO0VBQ0Esa0JBQUE7QUFPQTs7QUFMQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtBQVFBOztBQU5BO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBU0E7O0FBTkE7RUFDQSx1QkFBQTtBQVNBOztBQVBBO0VBQ0EseUJBQUE7RUFDQSx3Q0FBQTtFQUNBLGVBQUE7QUFVQTs7QUFSQTtFQUNBLDZCQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtBQVdBOztBQVRBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFZQTs7QUFWQTtFQUNBLGVBQUE7QUFhQTs7QUFYQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUFjQTs7QUFaQTtFQUNBLDJCQUFBO0VBQ0EsdUJBQUE7RUFDQSw4QkFBQTtFQUNBLGlDQUFBO0FBZUE7O0FBYkE7RUFDQSxvQkFBQTtBQWdCQTs7QUFkQTtFQUNBLFNBQUE7QUFpQkE7O0FBZkE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFrQkE7O0FBaEJBO0VBQ0EsZ0JBQUE7QUFtQkE7O0FBakJBO0VBQ0EsdUJBQUE7QUFvQkE7O0FBbEJBO0VBQ0Esd0NBQUE7QUFxQkE7O0FBbkJBO0VBQ0EsdUJBQUE7QUFzQkE7O0FBcEJBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBdUJBOztBQXJCQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQXdCQTs7QUF0QkE7RUFDQSx1QkFBQTtBQXlCQTs7QUF2QkE7RUFDSSxrQkFBQTtBQTBCSiIsImZpbGUiOiJzcmMvYXBwL215Y29udGFjdC9teWNvbnRhY3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2t7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWdzL21lbnUvYmFja2dyb3VuZC5wbmcnKTtcclxufVxyXG4uYmFjay1idXR0b24uYmFyLWJ1dHRvbiB7XHJcbmNvbG9yOiAjMDAwO1xyXG59XHJcbi50b29sYmFyLXRpdGxlIHtcclxuY29sb3I6ICMwMDAgIWltcG9ydGFudDtcclxuZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xyXG59XHJcbi50b29sYmFyLWJhY2tncm91bmQge1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG59XHJcblxyXG4uc2VnbWVudC1pb3MgLnNlZ21lbnQtYnV0dG9uIHtcclxuLXdlYmtpdC1ib3gtZmxleDogMTtcclxuLXdlYmtpdC1mbGV4OiAxO1xyXG4tbXMtZmxleDogMTtcclxuZmxleDogMTtcclxud2lkdGg6IDA7XHJcbmhlaWdodDogMy4ycmVtO1xyXG5ib3JkZXItd2lkdGg6IDFweDtcclxuYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuYm9yZGVyLWNvbG9yOiAjZmU2ZTRhO1xyXG5mb250LXNpemU6IDEuM3JlbTtcclxubGluZS1oZWlnaHQ6IDNyZW07XHJcbmNvbG9yOiAjMDAwO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbmJvcmRlcjogbm9uZTtcclxuZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbi5zZWdtZW50LWlvcyAuc2VnbWVudC1idXR0b24uc2VnbWVudC1hY3RpdmF0ZWQge1xyXG5jb2xvcjogI2ZlNmU0YTtcclxuYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbm9wYWNpdHk6IDE7XHJcbi13ZWJraXQtdHJhbnNpdGlvbjogMTAwbXMgYWxsIGxpbmVhcjtcclxudHJhbnNpdGlvbjogMTAwbXMgYWxsIGxpbmVhcjtcclxuZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLnVzZXJfaW1nIGltZyB7XHJcbmhlaWdodDogNjVweDtcclxud2lkdGg6IDY1cHg7XHJcbmJvcmRlci1yYWRpdXM6IDUwJTtcclxuYm9yZGVyOiAxcHggc29saWQgIzNhYTQwMDtcclxucGFkZGluZzogMXB4O1xyXG59XHJcbi51c2VyX2ltZyB7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4udXNlciAucm93IHtcclxuYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbnBhZGRpbmc6IDEwcHggMTBweCAwO1xyXG59XHJcbi5oZWFkaW5nX2ludCB7XHJcbmZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xyXG5mb250LXdlaWdodDogNTAwO1xyXG5wYWRkaW5nLWxlZnQ6IDI0cHg7XHJcblxyXG59XHJcbi5jaGF0X2l0ZW0uaXRlbS5pdGVtLWJsb2NrIHtcclxuYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuLnVzZXIgLml0ZW0taW5uZXIge1xyXG5wYWRkaW5nOiAwIDVweCAhaW1wb3J0YW50O1xyXG5ib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYyAhaW1wb3J0YW50O1xyXG5tYXJnaW46IDBweCAwIDA7XHJcbn1cclxuLnJhdGUge1xyXG5wb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcclxudG9wOiAxOXB4ICFpbXBvcnRhbnQ7XHJcbnJpZ2h0OiAxNnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWl0ZW0tb3B0aW9ucyBpbWcge1xyXG53aWR0aDogMjVweDtcclxubWFyZ2luOiA4cHg7XHJcbn1cclxuLnJhdGUgcCB7XHJcbmZvbnQtc2l6ZTogMTBweDtcclxufVxyXG4uc2VhcmNoYmFyIHtcclxuYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbmJvcmRlcjogbm9uZTtcclxucGFkZGluZzogMjBweCAyMHB4IDA7XHJcbm1pbi1oZWlnaHQ6IDUwcHg7XHJcbn1cclxuLnNlYXJjaGJhci1pbnB1dCB7XHJcbmJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcclxuaGVpZ2h0OiAzNXB4ICFpbXBvcnRhbnQ7XHJcbmJvcmRlci1yYWRpdXM6IDUwcHggIWltcG9ydGFudDtcclxuYm94LXNoYWRvdzogMHB4IDJweCA0cHggIzAwMDAwMDI2O1xyXG59XHJcbi5zZWFyY2hiYXItc2VhcmNoLWljb24ge1xyXG50b3A6IDExcHggIWltcG9ydGFudDtcclxufVxyXG4ubGlzdCB7XHJcbm1hcmdpbjogMDtcclxufVxyXG4uc2VhcmNoYmFyIHtcclxuYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbmJvcmRlcjogbm9uZTtcclxucGFkZGluZzogMTZweDtcclxubWluLWhlaWdodDogNTBweDtcclxufVxyXG4uc2VnbWVudCB7XHJcbm1hcmdpbjogMjBweCAwIDA7XHJcbn1cclxuLmNoYXRfaXRlbSB7XHJcbmJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcbmlvbi1pdGVtLXNsaWRpbmcge1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcbi5mYWIge1xyXG5iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG4uaXRlbS1pb3MgaW9uLWF2YXRhciB7XHJcbm1pbi13aWR0aDogNjVweDtcclxubWluLWhlaWdodDogNjVweDtcclxufVxyXG4ucGluZyB7XHJcbmJhY2tncm91bmQ6ICNmZTZlNGE7XHJcbndpZHRoOiAyMHB4O1xyXG5oZWlnaHQ6IDIwcHg7XHJcbmRpc3BsYXk6IGlubGluZS1ibG9jaztcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG5wYWRkaW5nOiA1cHg7XHJcbmJvcmRlci1yYWRpdXM6IDUwJTtcclxuY29sb3I6ICNmZmY7XHJcbn1cclxuLnRvb2xiYXItYmFja2dyb3VuZCB7XHJcbmJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbi5kYXRlZWV7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI0cHg7XHJcbiAgfSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/mycontact/mycontact.page.ts":
    /*!*********************************************!*\
      !*** ./src/app/mycontact/mycontact.page.ts ***!
      \*********************************************/

    /*! exports provided: MycontactPage */

    /***/
    function srcAppMycontactMycontactPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MycontactPage", function () {
        return MycontactPage;
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

      var MycontactPage = /*#__PURE__*/function () {
        function MycontactPage(navCtrl, menuCtrl, alertController) {
          _classCallCheck(this, MycontactPage);

          this.navCtrl = navCtrl;
          this.menuCtrl = menuCtrl;
          this.alertController = alertController;
        }

        _createClass(MycontactPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "chatdetail",
          value: function chatdetail() {}
        }, {
          key: "invite",
          value: function invite() {}
        }, {
          key: "getItems",
          value: function getItems() {}
        }, {
          key: "goBack",
          value: function goBack() {
            this.navCtrl.back();
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {// this.menuCtrl.enable(false);
          }
        }, {
          key: "showModal",
          value: function showModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        header: 'Thanks You For Your Request!',
                        message: '',
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {
                            console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: 'Okay',
                          handler: function handler() {
                            console.log('Confirm Okay');
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

        return MycontactPage;
      }();

      MycontactPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }];
      };

      MycontactPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mycontact',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./mycontact.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/mycontact/mycontact.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./mycontact.page.scss */
        "./src/app/mycontact/mycontact.page.scss"))["default"]]
      })], MycontactPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=mycontact-mycontact-module-es5.js.map