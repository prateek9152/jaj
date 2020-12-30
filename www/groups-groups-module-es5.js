(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["groups-groups-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/groups/groups.page.html":
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/groups/groups.page.html ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppGroupsGroupsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>groups</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/groups/groups-routing.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/groups/groups-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: GroupsPageRoutingModule */

    /***/
    function srcAppGroupsGroupsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GroupsPageRoutingModule", function () {
        return GroupsPageRoutingModule;
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


      var _groups_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./groups.page */
      "./src/app/groups/groups.page.ts");

      var routes = [{
        path: '',
        component: _groups_page__WEBPACK_IMPORTED_MODULE_3__["GroupsPage"]
      }];

      var GroupsPageRoutingModule = function GroupsPageRoutingModule() {
        _classCallCheck(this, GroupsPageRoutingModule);
      };

      GroupsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], GroupsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/groups/groups.module.ts":
    /*!*****************************************!*\
      !*** ./src/app/groups/groups.module.ts ***!
      \*****************************************/

    /*! exports provided: GroupsPageModule */

    /***/
    function srcAppGroupsGroupsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GroupsPageModule", function () {
        return GroupsPageModule;
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


      var _groups_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./groups-routing.module */
      "./src/app/groups/groups-routing.module.ts");
      /* harmony import */


      var _groups_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./groups.page */
      "./src/app/groups/groups.page.ts");

      var GroupsPageModule = function GroupsPageModule() {
        _classCallCheck(this, GroupsPageModule);
      };

      GroupsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _groups_routing_module__WEBPACK_IMPORTED_MODULE_5__["GroupsPageRoutingModule"]],
        declarations: [_groups_page__WEBPACK_IMPORTED_MODULE_6__["GroupsPage"]]
      })], GroupsPageModule);
      /***/
    },

    /***/
    "./src/app/groups/groups.page.scss":
    /*!*****************************************!*\
      !*** ./src/app/groups/groups.page.scss ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function srcAppGroupsGroupsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dyb3Vwcy9ncm91cHMucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/groups/groups.page.ts":
    /*!***************************************!*\
      !*** ./src/app/groups/groups.page.ts ***!
      \***************************************/

    /*! exports provided: GroupsPage */

    /***/
    function srcAppGroupsGroupsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GroupsPage", function () {
        return GroupsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var GroupsPage = /*#__PURE__*/function () {
        function GroupsPage() {
          _classCallCheck(this, GroupsPage);
        }

        _createClass(GroupsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return GroupsPage;
      }();

      GroupsPage.ctorParameters = function () {
        return [];
      };

      GroupsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-groups',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./groups.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/groups/groups.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./groups.page.scss */
        "./src/app/groups/groups.page.scss"))["default"]]
      })], GroupsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=groups-groups-module-es5.js.map