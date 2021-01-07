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


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-item slot=\"start\">\n      <ion-buttons style=\"zoom: 2.0;\" (click)=\"goBack()\">\n<ion-icon name=\"arrow-back-outline\"></ion-icon>        </ion-buttons>\n      </ion-item>\n    <ion-title style=\"text-align: center; text-transform: uppercase;\">contacts</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"back\">\n\n  <ion-searchbar [(ngModel)]=\"filterTerm\" animated=\"true\"></ion-searchbar>\n  <div class=\"user\" (click)=\"chatdetail()\">\n\n    <ion-list >\n    <ion-item-sliding no-lines>\n    <ion-item no-lines class=\"chat_item\" *ngFor=\"let data of myContacts | filter:filterTerm\">\n      <ion-avatar item-start>\n        <div>\n          <img src=\"../../assets/imgs/blank-avatar.jpg\">\n      </div>\n      </ion-avatar>\n      <div>\n      <h6 class=\"heading_int\">{{data.name.givenName}}<b>{{data.name.familyName}}</b></h6>\n      <p>{{ data.phoneNumbers[ 0 ].value }}</p>\n\n            </div>\n            <button ion-button item-end style=\"position: absolute !important;\n            top: 27px !important;\n            right: 16px !important;\n            text-align: right; text-transform: uppercase; background-color: orange; \" small (click)=\"message()\">Invite</button>\n    </ion-item>\n    <!-- <ion-item *ngFor=\"let c of myContacts\">\n\t\t\t\t<ion-label\n\t\t\t\t\t>{{ c.name.givenName }} <b>{{ c.name.familyName }}</b>\n\t\t\t\t\t<p>{{ c.phoneNumbers[ 0 ].value }}</p>\n\t\t\t\t</ion-label>\n\t\t\t</ion-item> -->\n\n\n  </ion-item-sliding>\n</ion-list>\n\n    </div>\n  \n\n</ion-content>\n\n";
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
      /* harmony import */


      var ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng2-search-filter */
      "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js");

      var MycontactPageModule = function MycontactPageModule() {
        _classCallCheck(this, MycontactPageModule);
      };

      MycontactPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _mycontact_routing_module__WEBPACK_IMPORTED_MODULE_5__["MycontactPageRoutingModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__["Ng2SearchPipeModule"]],
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


      __webpack_exports__["default"] = ".back {\n  background-image: url('background.png');\n}\n\n.back-button.bar-button {\n  color: #000;\n}\n\n.toolbar-title {\n  color: #000 !important;\n  font-weight: 500 !important;\n}\n\n.toolbar-background {\n  background-color: blue;\n}\n\n.segment-ios .segment-button {\n  flex: 1;\n  width: 0;\n  height: 3.2rem;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #fe6e4a;\n  font-size: 1.3rem;\n  line-height: 3rem;\n  color: #000;\n  background-color: transparent;\n  font-weight: bold;\n  border: none;\n  font-size: 15px;\n}\n\n.segment-ios .segment-button.segment-activated {\n  color: #fe6e4a;\n  background-color: transparent;\n  opacity: 1;\n  transition: 100ms all linear;\n  font-weight: bold;\n}\n\n.user_img img {\n  height: 65px;\n  width: 65px;\n  border-radius: 50%;\n  border: 1px solid #3aa400;\n  padding: 1px;\n}\n\n.user_img {\n  text-align: center;\n}\n\n.user .row {\n  align-items: center;\n  justify-content: center;\n  padding: 10px 10px 0;\n}\n\n.heading_int {\n  font-size: 17px !important;\n  font-weight: 500;\n  padding-left: 24px;\n}\n\n.chat_item.item.item-block {\n  border: none !important;\n}\n\n.user .item-inner {\n  padding: 0 5px !important;\n  border-bottom: 1px solid #ccc !important;\n  margin: 0px 0 0;\n}\n\n.rate {\n  position: absolute !important;\n  top: 19px !important;\n  right: 16px !important;\n}\n\nion-item-options img {\n  width: 25px;\n  margin: 8px;\n}\n\n.rate p {\n  font-size: 10px;\n}\n\n.searchbar {\n  background: transparent;\n  border: none;\n  padding: 20px 20px 0;\n  min-height: 50px;\n}\n\n.searchbar-input {\n  background: #fff !important;\n  height: 35px !important;\n  border-radius: 50px !important;\n  box-shadow: 0px 2px 4px #00000026;\n}\n\n.searchbar-search-icon {\n  top: 11px !important;\n}\n\n.list {\n  margin: 0;\n}\n\n.searchbar {\n  background: transparent;\n  border: none;\n  padding: 16px;\n  min-height: 50px;\n}\n\n.segment {\n  margin: 20px 0 0;\n}\n\n.chat_item {\n  background: transparent;\n}\n\nion-item-sliding {\n  background-color: transparent !important;\n}\n\n.fab {\n  background: transparent;\n}\n\n.item-ios ion-avatar {\n  min-width: 65px;\n  min-height: 65px;\n}\n\n.ping {\n  background: #fe6e4a;\n  width: 20px;\n  height: 20px;\n  display: inline-block;\n  text-align: center;\n  padding: 5px;\n  border-radius: 50%;\n  color: #fff;\n}\n\n.toolbar-background {\n  border: none !important;\n}\n\n.dateee {\n  padding-left: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXljb250YWN0L215Y29udGFjdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1Q0FBQTtBQUNKOztBQUNBO0VBQ0EsV0FBQTtBQUVBOztBQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtBQUdBOztBQURBO0VBQ0Esc0JBQUE7QUFJQTs7QUFEQTtFQUlBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBSUE7O0FBRkE7RUFDQSxjQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0VBRUEsNEJBQUE7RUFDQSxpQkFBQTtBQUtBOztBQUhBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQU1BOztBQUpBO0VBQ0Esa0JBQUE7QUFPQTs7QUFMQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtBQVFBOztBQU5BO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBU0E7O0FBTkE7RUFDQSx1QkFBQTtBQVNBOztBQVBBO0VBQ0EseUJBQUE7RUFDQSx3Q0FBQTtFQUNBLGVBQUE7QUFVQTs7QUFSQTtFQUNBLDZCQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtBQVdBOztBQVRBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFZQTs7QUFWQTtFQUNBLGVBQUE7QUFhQTs7QUFYQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUFjQTs7QUFaQTtFQUNBLDJCQUFBO0VBQ0EsdUJBQUE7RUFDQSw4QkFBQTtFQUNBLGlDQUFBO0FBZUE7O0FBYkE7RUFDQSxvQkFBQTtBQWdCQTs7QUFkQTtFQUNBLFNBQUE7QUFpQkE7O0FBZkE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFrQkE7O0FBaEJBO0VBQ0EsZ0JBQUE7QUFtQkE7O0FBakJBO0VBQ0EsdUJBQUE7QUFvQkE7O0FBbEJBO0VBQ0Esd0NBQUE7QUFxQkE7O0FBbkJBO0VBQ0EsdUJBQUE7QUFzQkE7O0FBcEJBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBdUJBOztBQXJCQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQXdCQTs7QUF0QkE7RUFDQSx1QkFBQTtBQXlCQTs7QUF2QkE7RUFDSSxrQkFBQTtBQTBCSiIsImZpbGUiOiJzcmMvYXBwL215Y29udGFjdC9teWNvbnRhY3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2t7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1ncy9tZW51L2JhY2tncm91bmQucG5nJyk7XG59XG4uYmFjay1idXR0b24uYmFyLWJ1dHRvbiB7XG5jb2xvcjogIzAwMDtcbn1cbi50b29sYmFyLXRpdGxlIHtcbmNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG5mb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG59XG4udG9vbGJhci1iYWNrZ3JvdW5kIHtcbmJhY2tncm91bmQtY29sb3I6IGJsdWU7XG59XG5cbi5zZWdtZW50LWlvcyAuc2VnbWVudC1idXR0b24ge1xuLXdlYmtpdC1ib3gtZmxleDogMTtcbi13ZWJraXQtZmxleDogMTtcbi1tcy1mbGV4OiAxO1xuZmxleDogMTtcbndpZHRoOiAwO1xuaGVpZ2h0OiAzLjJyZW07XG5ib3JkZXItd2lkdGg6IDFweDtcbmJvcmRlci1zdHlsZTogc29saWQ7XG5ib3JkZXItY29sb3I6ICNmZTZlNGE7XG5mb250LXNpemU6IDEuM3JlbTtcbmxpbmUtaGVpZ2h0OiAzcmVtO1xuY29sb3I6ICMwMDA7XG5iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbmZvbnQtd2VpZ2h0OiBib2xkO1xuYm9yZGVyOiBub25lO1xuZm9udC1zaXplOiAxNXB4O1xufVxuLnNlZ21lbnQtaW9zIC5zZWdtZW50LWJ1dHRvbi5zZWdtZW50LWFjdGl2YXRlZCB7XG5jb2xvcjogI2ZlNmU0YTtcbmJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xub3BhY2l0eTogMTtcbi13ZWJraXQtdHJhbnNpdGlvbjogMTAwbXMgYWxsIGxpbmVhcjtcbnRyYW5zaXRpb246IDEwMG1zIGFsbCBsaW5lYXI7XG5mb250LXdlaWdodDogYm9sZDtcbn1cbi51c2VyX2ltZyBpbWcge1xuaGVpZ2h0OiA2NXB4O1xud2lkdGg6IDY1cHg7XG5ib3JkZXItcmFkaXVzOiA1MCU7XG5ib3JkZXI6IDFweCBzb2xpZCAjM2FhNDAwO1xucGFkZGluZzogMXB4O1xufVxuLnVzZXJfaW1nIHtcbnRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi51c2VyIC5yb3cge1xuYWxpZ24taXRlbXM6IGNlbnRlcjtcbmp1c3RpZnktY29udGVudDogY2VudGVyO1xucGFkZGluZzogMTBweCAxMHB4IDA7XG59XG4uaGVhZGluZ19pbnQge1xuZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG5mb250LXdlaWdodDogNTAwO1xucGFkZGluZy1sZWZ0OiAyNHB4O1xuXG59XG4uY2hhdF9pdGVtLml0ZW0uaXRlbS1ibG9jayB7XG5ib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cbi51c2VyIC5pdGVtLWlubmVyIHtcbnBhZGRpbmc6IDAgNXB4ICFpbXBvcnRhbnQ7XG5ib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYyAhaW1wb3J0YW50O1xubWFyZ2luOiAwcHggMCAwO1xufVxuLnJhdGUge1xucG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG50b3A6IDE5cHggIWltcG9ydGFudDtcbnJpZ2h0OiAxNnB4ICFpbXBvcnRhbnQ7XG59XG5pb24taXRlbS1vcHRpb25zIGltZyB7XG53aWR0aDogMjVweDtcbm1hcmdpbjogOHB4O1xufVxuLnJhdGUgcCB7XG5mb250LXNpemU6IDEwcHg7XG59XG4uc2VhcmNoYmFyIHtcbmJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuYm9yZGVyOiBub25lO1xucGFkZGluZzogMjBweCAyMHB4IDA7XG5taW4taGVpZ2h0OiA1MHB4O1xufVxuLnNlYXJjaGJhci1pbnB1dCB7XG5iYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XG5oZWlnaHQ6IDM1cHggIWltcG9ydGFudDtcbmJvcmRlci1yYWRpdXM6IDUwcHggIWltcG9ydGFudDtcbmJveC1zaGFkb3c6IDBweCAycHggNHB4ICMwMDAwMDAyNjtcbn1cbi5zZWFyY2hiYXItc2VhcmNoLWljb24ge1xudG9wOiAxMXB4ICFpbXBvcnRhbnQ7XG59XG4ubGlzdCB7XG5tYXJnaW46IDA7XG59XG4uc2VhcmNoYmFyIHtcbmJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuYm9yZGVyOiBub25lO1xucGFkZGluZzogMTZweDtcbm1pbi1oZWlnaHQ6IDUwcHg7XG59XG4uc2VnbWVudCB7XG5tYXJnaW46IDIwcHggMCAwO1xufVxuLmNoYXRfaXRlbSB7XG5iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbmlvbi1pdGVtLXNsaWRpbmcge1xuYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cbi5mYWIge1xuYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4uaXRlbS1pb3MgaW9uLWF2YXRhciB7XG5taW4td2lkdGg6IDY1cHg7XG5taW4taGVpZ2h0OiA2NXB4O1xufVxuLnBpbmcge1xuYmFja2dyb3VuZDogI2ZlNmU0YTtcbndpZHRoOiAyMHB4O1xuaGVpZ2h0OiAyMHB4O1xuZGlzcGxheTogaW5saW5lLWJsb2NrO1xudGV4dC1hbGlnbjogY2VudGVyO1xucGFkZGluZzogNXB4O1xuYm9yZGVyLXJhZGl1czogNTAlO1xuY29sb3I6ICNmZmY7XG59XG4udG9vbGJhci1iYWNrZ3JvdW5kIHtcbmJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xufVxuLmRhdGVlZXtcbiAgICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG4gIH0iXX0= */";
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
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/contacts/ngx */
      "./node_modules/@ionic-native/contacts/__ivy_ngcc__/ngx/index.js");

      var MycontactPage = /*#__PURE__*/function () {
        function MycontactPage(navCtrl, contacts, menuCtrl, alertController, router) {
          _classCallCheck(this, MycontactPage);

          this.navCtrl = navCtrl;
          this.contacts = contacts;
          this.menuCtrl = menuCtrl;
          this.alertController = alertController;
          this.router = router;
          this.myContacts = [];
          this.userRecords = [{
            "id": 1,
            "name": "Simon"
          }, {
            "id": 2,
            "name": "Ervin Howell"
          }, {
            "id": 3,
            "name": "Clementine Bauch"
          }, {
            "id": 4,
            "name": "Patricia Lebsack"
          }, {
            "id": 5,
            "name": "Chelsey Dietrich"
          }, {
            "id": 6,
            "name": "Mrs. Dennis Schulist"
          }, {
            "id": 7,
            "name": "Kurtis"
          }, {
            "id": 8,
            "name": "Nicholas "
          }, {
            "id": 9,
            "name": "Glenna Reichert"
          }, {
            "id": 10,
            "name": "Clementina DuBuque"
          }];
        }

        _createClass(MycontactPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            var options = {
              filter: '',
              multiple: true,
              hasPhoneNumber: true
            };
            this.contacts.find(['*'], options).then(function (contacts) {
              _this.myContacts = contacts;
              console.log('Contacts: ', contacts);
            });
          }
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
          key: "message",
          value: function message() {
            this.router.navigate(['/menu/chatdetails']);
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
        }, {
          key: "loadContacts",
          value: function loadContacts() {}
        }]);

        return MycontactPage;
      }();

      MycontactPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_4__["Contacts"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
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