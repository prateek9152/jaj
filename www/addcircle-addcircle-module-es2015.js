(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addcircle-addcircle-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/addcircle/addcircle.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/addcircle/addcircle.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-item slot=\"start\">\n      <ion-buttons style=\"zoom: 2.0;\" (click)=\"goBack()\">\n<ion-icon name=\"arrow-back-outline\"></ion-icon>        </ion-buttons>\n      </ion-item>\n    <ion-title style=\"text-align: center; text-transform: uppercase;\">add circle</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"back\">\n  <div class=\"Image_create\">\n      <ion-avatar item-start>\n        <div class=\"user_img\">\n          <img src=\"../../assets/imgs/group.png\">\n          <img class=\"camera\" src=\"../../assets/imgs/camera.png\">\n      </div>\n      </ion-avatar>\n  </div>\n  <ion-list padding style=\"margin-top: 50px;\">\n    \n    <ion-item class=\"input_1\" no-lines>\n      <ion-input type=\"text\" placeholder=\"Enter Circle Name\"></ion-input>\n    </ion-item>\n  \n    <ion-item class=\"input_1\" no-lines style=\"height: auto;\">\n     <ion-textarea rows=\"4\" placeholder=\"Description\"></ion-textarea>\n    </ion-item>\n  \n    <ion-item no-padding no-lines style=\"background-color: transparent;\">\n      <ion-label>Private</ion-label>\n      <ion-toggle checked=\"false\"></ion-toggle>\n    </ion-item>\n  \n  </ion-list>\n  \n<ion-searchbar (ionInput)=\"getItems()\"></ion-searchbar>\n<h4 style=\" padding:0 16px;\">Add Participaints</h4>\n<div class=\"user\" *ngFor=\"let k of [1,2,3]\" (click)=\"chatdetail()\">\n\n<ion-list no-lines>\n<ion-item no-lines class=\"chat_item\">\n  <ion-avatar item-start>\n      <img src=\"../../assets/imgs/blank-avatar.jpg\">\n  </ion-avatar>\n\n    <ion-label>\n  <h6 class=\"heading_int\">Simon</h6>\n  <p class=\"dat\" >@simon_john</p>\n</ion-label>\n          <ion-checkbox item-end color=\"primary\" checked=\"true\"></ion-checkbox>\n        \n</ion-item>\n</ion-list>\n\n</div>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/addcircle/addcircle-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/addcircle/addcircle-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: AddcirclePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddcirclePageRoutingModule", function() { return AddcirclePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _addcircle_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addcircle.page */ "./src/app/addcircle/addcircle.page.ts");




const routes = [
    {
        path: '',
        component: _addcircle_page__WEBPACK_IMPORTED_MODULE_3__["AddcirclePage"]
    }
];
let AddcirclePageRoutingModule = class AddcirclePageRoutingModule {
};
AddcirclePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddcirclePageRoutingModule);



/***/ }),

/***/ "./src/app/addcircle/addcircle.module.ts":
/*!***********************************************!*\
  !*** ./src/app/addcircle/addcircle.module.ts ***!
  \***********************************************/
/*! exports provided: AddcirclePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddcirclePageModule", function() { return AddcirclePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _addcircle_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addcircle-routing.module */ "./src/app/addcircle/addcircle-routing.module.ts");
/* harmony import */ var _addcircle_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addcircle.page */ "./src/app/addcircle/addcircle.page.ts");







let AddcirclePageModule = class AddcirclePageModule {
};
AddcirclePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _addcircle_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddcirclePageRoutingModule"]
        ],
        declarations: [_addcircle_page__WEBPACK_IMPORTED_MODULE_6__["AddcirclePage"]]
    })
], AddcirclePageModule);



/***/ }),

/***/ "./src/app/addcircle/addcircle.page.scss":
/*!***********************************************!*\
  !*** ./src/app/addcircle/addcircle.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".back {\n  background-image: url('background.png');\n}\n\n.back-button.bar-button {\n  color: #000;\n}\n\n.toolbar-title {\n  color: #000 !important;\n  font-weight: 500 !important;\n}\n\n.toolbar-background {\n  background-color: blue;\n}\n\n.segment-ios .segment-button {\n  flex: 1;\n  width: 0;\n  height: 3.2rem;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #fe6e4a;\n  font-size: 1.3rem;\n  line-height: 3rem;\n  color: #000;\n  background-color: transparent;\n  font-weight: bold;\n  border: none;\n  font-size: 15px;\n}\n\n.segment-ios .segment-button.segment-activated {\n  color: #fe6e4a;\n  background-color: transparent;\n  opacity: 1;\n  transition: 100ms all linear;\n  font-weight: bold;\n}\n\n.user_img img {\n  height: 65px;\n  width: 65px;\n  border-radius: 50%;\n  border: 1px solid #3aa400;\n  padding: 1px;\n}\n\n.user_img {\n  text-align: center;\n  position: relative;\n}\n\n.dat b {\n  color: #000;\n}\n\n.new_img {\n  border: none !important;\n  border-radius: 0 !important;\n  width: auto !important;\n  height: 23px !important;\n  position: absolute;\n  top: -5px;\n}\n\n.user .row {\n  align-items: center;\n  justify-content: center;\n  padding: 10px 10px 0;\n}\n\n.heading_int {\n  font-size: 17px !important;\n}\n\n.chat_item.item.item-block {\n  border: none !important;\n}\n\n.user .item-inner {\n  padding: 0 5px !important;\n  border-bottom: 1px solid #ccc !important;\n  margin: 0px 0 0;\n}\n\n.rate {\n  position: absolute !important;\n  top: 19px !important;\n  right: 16px !important;\n}\n\nion-item-options img {\n  width: 25px;\n  margin: 8px;\n}\n\n.rate p {\n  font-size: 10px;\n}\n\n.searchbar {\n  background: transparent;\n  border: none;\n  padding: 20px 20px 0;\n  min-height: 50px;\n}\n\n.searchbar-input {\n  background: #fff !important;\n  height: 35px !important;\n  border-radius: 50px !important;\n  box-shadow: 0px 2px 4px #00000026;\n}\n\n.searchbar-search-icon {\n  top: 11px !important;\n}\n\n.list {\n  margin: 0;\n}\n\n.searchbar {\n  background: transparent;\n  border: none;\n  padding: 16px;\n  min-height: 50px;\n}\n\n.segment {\n  margin: 20px 0 0;\n}\n\n.chat_item {\n  background: transparent;\n}\n\nion-item-sliding {\n  background-color: transparent !important;\n}\n\n.fab {\n  background: transparent;\n}\n\n.item-ios ion-avatar {\n  min-width: 65px;\n  min-height: 65px;\n}\n\n.ping {\n  background: #fe6e4a;\n  width: 20px;\n  height: 20px;\n  display: inline-block;\n  text-align: center;\n  padding: 5px;\n  border-radius: 50%;\n  color: #fff;\n}\n\n.toolbar-background {\n  border: none !important;\n}\n\n.Image_create ion-avatar {\n  width: 100%;\n}\n\n.Image_create .user_img {\n  text-align: center;\n  position: relative;\n  width: 130px;\n  margin: 0 auto;\n  margin-top: 31px;\n}\n\n.Image_create .user_img img {\n  height: 110px;\n  width: 110px;\n  border-radius: 50%;\n  border: 1px solid #fe6e4a;\n  padding: 1px;\n  margin: 0 auto;\n  -o-object-fit: contain;\n     object-fit: contain;\n  background: #fff;\n  padding: 10px;\n}\n\n.camera {\n  border: none !important;\n  height: auto !important;\n  width: 25px !important;\n  position: absolute;\n  bottom: 10px;\n  left: 10px;\n  padding: 0 !important;\n}\n\n.input_1 {\n  margin: 10px 0;\n  height: 35px;\n  background: #fff;\n  color: #575757;\n  font-size: 13px;\n  border: 1px solid #d8d8d8 !important;\n  border-radius: 6px;\n}\n\n.label input {\n  width: 100%;\n  height: 30px;\n  border: none;\n}\n\ntextarea {\n  width: 100%;\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkY2lyY2xlL2FkZGNpcmNsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1Q0FBQTtBQUNKOztBQUNBO0VBQ0EsV0FBQTtBQUVBOztBQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtBQUdBOztBQURBO0VBQ0Esc0JBQUE7QUFJQTs7QUFEQTtFQUlBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBSUE7O0FBRkE7RUFDQSxjQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0VBRUEsNEJBQUE7RUFDQSxpQkFBQTtBQUtBOztBQUhBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQU1BOztBQUpBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQU9BOztBQUxBO0VBQ0EsV0FBQTtBQVFBOztBQU5BO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUFTQTs7QUFQQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtBQVVBOztBQVJBO0VBQ0EsMEJBQUE7QUFXQTs7QUFUQTtFQUNBLHVCQUFBO0FBWUE7O0FBVkE7RUFDQSx5QkFBQTtFQUNBLHdDQUFBO0VBQ0EsZUFBQTtBQWFBOztBQVhBO0VBQ0EsNkJBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0FBY0E7O0FBWkE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQWVBOztBQWJBO0VBQ0EsZUFBQTtBQWdCQTs7QUFkQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUFpQkE7O0FBZkE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQ0FBQTtBQWtCQTs7QUFoQkE7RUFDQSxvQkFBQTtBQW1CQTs7QUFqQkE7RUFDQSxTQUFBO0FBb0JBOztBQWxCQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQXFCQTs7QUFuQkE7RUFDQSxnQkFBQTtBQXNCQTs7QUFwQkE7RUFDQSx1QkFBQTtBQXVCQTs7QUFyQkE7RUFDQSx3Q0FBQTtBQXdCQTs7QUF0QkE7RUFDQSx1QkFBQTtBQXlCQTs7QUF2QkE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUEwQkE7O0FBeEJBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBMkJBOztBQXpCQTtFQUNBLHVCQUFBO0FBNEJBOztBQXpCQTtFQUNBLFdBQUE7QUE0QkE7O0FBekJBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUE0QkE7O0FBMUJBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtLQUFBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBNkJBOztBQTNCQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtBQThCQTs7QUE1QkE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0FBK0JBOztBQTdCQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQWdDQTs7QUE5QkE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQWlDQSIsImZpbGUiOiJzcmMvYXBwL2FkZGNpcmNsZS9hZGRjaXJjbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2t7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWdzL21lbnUvYmFja2dyb3VuZC5wbmcnKTtcclxufVxyXG4uYmFjay1idXR0b24uYmFyLWJ1dHRvbiB7XHJcbmNvbG9yOiAjMDAwO1xyXG59XHJcbi50b29sYmFyLXRpdGxlIHtcclxuY29sb3I6ICMwMDAgIWltcG9ydGFudDtcclxuZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xyXG59XHJcbi50b29sYmFyLWJhY2tncm91bmQge1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG59XHJcblxyXG4uc2VnbWVudC1pb3MgLnNlZ21lbnQtYnV0dG9uIHtcclxuLXdlYmtpdC1ib3gtZmxleDogMTtcclxuLXdlYmtpdC1mbGV4OiAxO1xyXG4tbXMtZmxleDogMTtcclxuZmxleDogMTtcclxud2lkdGg6IDA7XHJcbmhlaWdodDogMy4ycmVtO1xyXG5ib3JkZXItd2lkdGg6IDFweDtcclxuYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuYm9yZGVyLWNvbG9yOiAjZmU2ZTRhO1xyXG5mb250LXNpemU6IDEuM3JlbTtcclxubGluZS1oZWlnaHQ6IDNyZW07XHJcbmNvbG9yOiAjMDAwO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbmJvcmRlcjogbm9uZTtcclxuZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbi5zZWdtZW50LWlvcyAuc2VnbWVudC1idXR0b24uc2VnbWVudC1hY3RpdmF0ZWQge1xyXG5jb2xvcjogI2ZlNmU0YTtcclxuYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbm9wYWNpdHk6IDE7XHJcbi13ZWJraXQtdHJhbnNpdGlvbjogMTAwbXMgYWxsIGxpbmVhcjtcclxudHJhbnNpdGlvbjogMTAwbXMgYWxsIGxpbmVhcjtcclxuZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLnVzZXJfaW1nIGltZyB7XHJcbmhlaWdodDogNjVweDtcclxud2lkdGg6IDY1cHg7XHJcbmJvcmRlci1yYWRpdXM6IDUwJTtcclxuYm9yZGVyOiAxcHggc29saWQgIzNhYTQwMDtcclxucGFkZGluZzogMXB4O1xyXG59XHJcbi51c2VyX2ltZyB7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxucG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5kYXQgYiB7XHJcbmNvbG9yOiAjMDAwO1xyXG59XHJcbi5uZXdfaW1nIHtcclxuYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbmJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcclxud2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxuaGVpZ2h0OiAyM3B4ICFpbXBvcnRhbnQ7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxudG9wOiAtNXB4O1xyXG59XHJcbi51c2VyIC5yb3cge1xyXG5hbGlnbi1pdGVtczogY2VudGVyO1xyXG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxucGFkZGluZzogMTBweCAxMHB4IDA7XHJcbn1cclxuLmhlYWRpbmdfaW50IHtcclxuZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNoYXRfaXRlbS5pdGVtLml0ZW0tYmxvY2sge1xyXG5ib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG4udXNlciAuaXRlbS1pbm5lciB7XHJcbnBhZGRpbmc6IDAgNXB4ICFpbXBvcnRhbnQ7XHJcbmJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjICFpbXBvcnRhbnQ7XHJcbm1hcmdpbjogMHB4IDAgMDtcclxufVxyXG4ucmF0ZSB7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xyXG50b3A6IDE5cHggIWltcG9ydGFudDtcclxucmlnaHQ6IDE2cHggIWltcG9ydGFudDtcclxufVxyXG5pb24taXRlbS1vcHRpb25zIGltZyB7XHJcbndpZHRoOiAyNXB4O1xyXG5tYXJnaW46IDhweDtcclxufVxyXG4ucmF0ZSBwIHtcclxuZm9udC1zaXplOiAxMHB4O1xyXG59XHJcbi5zZWFyY2hiYXIge1xyXG5iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuYm9yZGVyOiBub25lO1xyXG5wYWRkaW5nOiAyMHB4IDIwcHggMDtcclxubWluLWhlaWdodDogNTBweDtcclxufVxyXG4uc2VhcmNoYmFyLWlucHV0IHtcclxuYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xyXG5oZWlnaHQ6IDM1cHggIWltcG9ydGFudDtcclxuYm9yZGVyLXJhZGl1czogNTBweCAhaW1wb3J0YW50O1xyXG5ib3gtc2hhZG93OiAwcHggMnB4IDRweCAjMDAwMDAwMjY7XHJcbn1cclxuLnNlYXJjaGJhci1zZWFyY2gtaWNvbiB7XHJcbnRvcDogMTFweCAhaW1wb3J0YW50O1xyXG59XHJcbi5saXN0IHtcclxubWFyZ2luOiAwO1xyXG59XHJcbi5zZWFyY2hiYXIge1xyXG5iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuYm9yZGVyOiBub25lO1xyXG5wYWRkaW5nOiAxNnB4O1xyXG5taW4taGVpZ2h0OiA1MHB4O1xyXG59XHJcbi5zZWdtZW50IHtcclxubWFyZ2luOiAyMHB4IDAgMDtcclxufVxyXG4uY2hhdF9pdGVtIHtcclxuYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuaW9uLWl0ZW0tc2xpZGluZyB7XHJcbmJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmZhYiB7XHJcbmJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcbi5pdGVtLWlvcyBpb24tYXZhdGFyIHtcclxubWluLXdpZHRoOiA2NXB4O1xyXG5taW4taGVpZ2h0OiA2NXB4O1xyXG59XHJcbi5waW5nIHtcclxuYmFja2dyb3VuZDogI2ZlNmU0YTtcclxud2lkdGg6IDIwcHg7XHJcbmhlaWdodDogMjBweDtcclxuZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbnBhZGRpbmc6IDVweDtcclxuYm9yZGVyLXJhZGl1czogNTAlO1xyXG5jb2xvcjogI2ZmZjtcclxufVxyXG4udG9vbGJhci1iYWNrZ3JvdW5kIHtcclxuYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5JbWFnZV9jcmVhdGUgaW9uLWF2YXRhciB7XHJcbndpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uSW1hZ2VfY3JlYXRlIC51c2VyX2ltZyB7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxucG9zaXRpb246IHJlbGF0aXZlO1xyXG53aWR0aDogMTMwcHg7XHJcbm1hcmdpbjogMCBhdXRvO1xyXG5tYXJnaW4tdG9wOiAzMXB4O1xyXG59XHJcbi5JbWFnZV9jcmVhdGUgIC51c2VyX2ltZyBpbWcge1xyXG5oZWlnaHQ6IDExMHB4O1xyXG53aWR0aDogMTEwcHg7XHJcbmJvcmRlci1yYWRpdXM6IDUwJTtcclxuYm9yZGVyOiAxcHggc29saWQgI2ZlNmU0YTtcclxucGFkZGluZzogMXB4O1xyXG5tYXJnaW46IDAgYXV0bztcclxub2JqZWN0LWZpdDogY29udGFpbjtcclxuYmFja2dyb3VuZDogI2ZmZjtcclxucGFkZGluZzogMTBweDtcclxufVxyXG4uY2FtZXJhIHtcclxuYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbmhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG53aWR0aDogMjVweCAhaW1wb3J0YW50O1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbmJvdHRvbTogMTBweDtcclxubGVmdDogMTBweDtcclxucGFkZGluZzogMCAhaW1wb3J0YW50OyBcclxufVxyXG4uaW5wdXRfMSB7XHJcbm1hcmdpbjogMTBweCAwO1xyXG5oZWlnaHQ6IDM1cHg7XHJcbmJhY2tncm91bmQ6ICNmZmY7XHJcbmNvbG9yOiAjNTc1NzU3O1xyXG5mb250LXNpemU6IDEzcHg7XHJcbmJvcmRlcjogMXB4IHNvbGlkICNkOGQ4ZDggIWltcG9ydGFudDtcclxuYm9yZGVyLXJhZGl1czogNnB4O1xyXG59XHJcbi5sYWJlbCBpbnB1dCB7XHJcbndpZHRoOiAxMDAlO1xyXG5oZWlnaHQ6IDMwcHg7XHJcbmJvcmRlcjogbm9uZTtcclxufVxyXG50ZXh0YXJlYSB7XHJcbndpZHRoOiAxMDAlO1xyXG5ib3JkZXI6IG5vbmU7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/addcircle/addcircle.page.ts":
/*!*********************************************!*\
  !*** ./src/app/addcircle/addcircle.page.ts ***!
  \*********************************************/
/*! exports provided: AddcirclePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddcirclePage", function() { return AddcirclePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



let AddcirclePage = class AddcirclePage {
    constructor(menuCtrl, navCtrl) {
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        // this.menuCtrl.enable(false);
    }
    goBack() {
        this.navCtrl.back();
    }
    chatdetail() { }
    getItems() { }
};
AddcirclePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
AddcirclePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-addcircle',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./addcircle.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/addcircle/addcircle.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./addcircle.page.scss */ "./src/app/addcircle/addcircle.page.scss")).default]
    })
], AddcirclePage);



/***/ })

}]);
//# sourceMappingURL=addcircle-addcircle-module-es2015.js.map