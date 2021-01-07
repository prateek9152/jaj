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
/* harmony default export */ __webpack_exports__["default"] = (".back {\n  background-image: url('background.png');\n}\n\n.back-button.bar-button {\n  color: #000;\n}\n\n.toolbar-title {\n  color: #000 !important;\n  font-weight: 500 !important;\n}\n\n.toolbar-background {\n  background-color: blue;\n}\n\n.segment-ios .segment-button {\n  flex: 1;\n  width: 0;\n  height: 3.2rem;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #fe6e4a;\n  font-size: 1.3rem;\n  line-height: 3rem;\n  color: #000;\n  background-color: transparent;\n  font-weight: bold;\n  border: none;\n  font-size: 15px;\n}\n\n.segment-ios .segment-button.segment-activated {\n  color: #fe6e4a;\n  background-color: transparent;\n  opacity: 1;\n  transition: 100ms all linear;\n  font-weight: bold;\n}\n\n.user_img img {\n  height: 65px;\n  width: 65px;\n  border-radius: 50%;\n  border: 1px solid #3aa400;\n  padding: 1px;\n}\n\n.user_img {\n  text-align: center;\n  position: relative;\n}\n\n.dat b {\n  color: #000;\n}\n\n.new_img {\n  border: none !important;\n  border-radius: 0 !important;\n  width: auto !important;\n  height: 23px !important;\n  position: absolute;\n  top: -5px;\n}\n\n.user .row {\n  align-items: center;\n  justify-content: center;\n  padding: 10px 10px 0;\n}\n\n.heading_int {\n  font-size: 17px !important;\n}\n\n.chat_item.item.item-block {\n  border: none !important;\n}\n\n.user .item-inner {\n  padding: 0 5px !important;\n  border-bottom: 1px solid #ccc !important;\n  margin: 0px 0 0;\n}\n\n.rate {\n  position: absolute !important;\n  top: 19px !important;\n  right: 16px !important;\n}\n\nion-item-options img {\n  width: 25px;\n  margin: 8px;\n}\n\n.rate p {\n  font-size: 10px;\n}\n\n.searchbar {\n  background: transparent;\n  border: none;\n  padding: 20px 20px 0;\n  min-height: 50px;\n}\n\n.searchbar-input {\n  background: #fff !important;\n  height: 35px !important;\n  border-radius: 50px !important;\n  box-shadow: 0px 2px 4px #00000026;\n}\n\n.searchbar-search-icon {\n  top: 11px !important;\n}\n\n.list {\n  margin: 0;\n}\n\n.searchbar {\n  background: transparent;\n  border: none;\n  padding: 16px;\n  min-height: 50px;\n}\n\n.segment {\n  margin: 20px 0 0;\n}\n\n.chat_item {\n  background: transparent;\n}\n\nion-item-sliding {\n  background-color: transparent !important;\n}\n\n.fab {\n  background: transparent;\n}\n\n.item-ios ion-avatar {\n  min-width: 65px;\n  min-height: 65px;\n}\n\n.ping {\n  background: #fe6e4a;\n  width: 20px;\n  height: 20px;\n  display: inline-block;\n  text-align: center;\n  padding: 5px;\n  border-radius: 50%;\n  color: #fff;\n}\n\n.toolbar-background {\n  border: none !important;\n}\n\n.Image_create ion-avatar {\n  width: 100%;\n}\n\n.Image_create .user_img {\n  text-align: center;\n  position: relative;\n  width: 130px;\n  margin: 0 auto;\n  margin-top: 31px;\n}\n\n.Image_create .user_img img {\n  height: 110px;\n  width: 110px;\n  border-radius: 50%;\n  border: 1px solid #fe6e4a;\n  padding: 1px;\n  margin: 0 auto;\n  -o-object-fit: contain;\n     object-fit: contain;\n  background: #fff;\n  padding: 10px;\n}\n\n.camera {\n  border: none !important;\n  height: auto !important;\n  width: 25px !important;\n  position: absolute;\n  bottom: 10px;\n  left: 10px;\n  padding: 0 !important;\n}\n\n.input_1 {\n  margin: 10px 0;\n  height: 35px;\n  background: #fff;\n  color: #575757;\n  font-size: 13px;\n  border: 1px solid #d8d8d8 !important;\n  border-radius: 6px;\n}\n\n.label input {\n  width: 100%;\n  height: 30px;\n  border: none;\n}\n\ntextarea {\n  width: 100%;\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkY2lyY2xlL2FkZGNpcmNsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1Q0FBQTtBQUNKOztBQUNBO0VBQ0EsV0FBQTtBQUVBOztBQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtBQUdBOztBQURBO0VBQ0Esc0JBQUE7QUFJQTs7QUFEQTtFQUlBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBSUE7O0FBRkE7RUFDQSxjQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0VBRUEsNEJBQUE7RUFDQSxpQkFBQTtBQUtBOztBQUhBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQU1BOztBQUpBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQU9BOztBQUxBO0VBQ0EsV0FBQTtBQVFBOztBQU5BO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUFTQTs7QUFQQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtBQVVBOztBQVJBO0VBQ0EsMEJBQUE7QUFXQTs7QUFUQTtFQUNBLHVCQUFBO0FBWUE7O0FBVkE7RUFDQSx5QkFBQTtFQUNBLHdDQUFBO0VBQ0EsZUFBQTtBQWFBOztBQVhBO0VBQ0EsNkJBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0FBY0E7O0FBWkE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQWVBOztBQWJBO0VBQ0EsZUFBQTtBQWdCQTs7QUFkQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUFpQkE7O0FBZkE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQ0FBQTtBQWtCQTs7QUFoQkE7RUFDQSxvQkFBQTtBQW1CQTs7QUFqQkE7RUFDQSxTQUFBO0FBb0JBOztBQWxCQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQXFCQTs7QUFuQkE7RUFDQSxnQkFBQTtBQXNCQTs7QUFwQkE7RUFDQSx1QkFBQTtBQXVCQTs7QUFyQkE7RUFDQSx3Q0FBQTtBQXdCQTs7QUF0QkE7RUFDQSx1QkFBQTtBQXlCQTs7QUF2QkE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUEwQkE7O0FBeEJBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBMkJBOztBQXpCQTtFQUNBLHVCQUFBO0FBNEJBOztBQXpCQTtFQUNBLFdBQUE7QUE0QkE7O0FBekJBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUE0QkE7O0FBMUJBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtLQUFBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBNkJBOztBQTNCQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtBQThCQTs7QUE1QkE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0FBK0JBOztBQTdCQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQWdDQTs7QUE5QkE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQWlDQSIsImZpbGUiOiJzcmMvYXBwL2FkZGNpcmNsZS9hZGRjaXJjbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2t7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1ncy9tZW51L2JhY2tncm91bmQucG5nJyk7XG59XG4uYmFjay1idXR0b24uYmFyLWJ1dHRvbiB7XG5jb2xvcjogIzAwMDtcbn1cbi50b29sYmFyLXRpdGxlIHtcbmNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG5mb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG59XG4udG9vbGJhci1iYWNrZ3JvdW5kIHtcbmJhY2tncm91bmQtY29sb3I6IGJsdWU7XG59XG5cbi5zZWdtZW50LWlvcyAuc2VnbWVudC1idXR0b24ge1xuLXdlYmtpdC1ib3gtZmxleDogMTtcbi13ZWJraXQtZmxleDogMTtcbi1tcy1mbGV4OiAxO1xuZmxleDogMTtcbndpZHRoOiAwO1xuaGVpZ2h0OiAzLjJyZW07XG5ib3JkZXItd2lkdGg6IDFweDtcbmJvcmRlci1zdHlsZTogc29saWQ7XG5ib3JkZXItY29sb3I6ICNmZTZlNGE7XG5mb250LXNpemU6IDEuM3JlbTtcbmxpbmUtaGVpZ2h0OiAzcmVtO1xuY29sb3I6ICMwMDA7XG5iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbmZvbnQtd2VpZ2h0OiBib2xkO1xuYm9yZGVyOiBub25lO1xuZm9udC1zaXplOiAxNXB4O1xufVxuLnNlZ21lbnQtaW9zIC5zZWdtZW50LWJ1dHRvbi5zZWdtZW50LWFjdGl2YXRlZCB7XG5jb2xvcjogI2ZlNmU0YTtcbmJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xub3BhY2l0eTogMTtcbi13ZWJraXQtdHJhbnNpdGlvbjogMTAwbXMgYWxsIGxpbmVhcjtcbnRyYW5zaXRpb246IDEwMG1zIGFsbCBsaW5lYXI7XG5mb250LXdlaWdodDogYm9sZDtcbn1cbi51c2VyX2ltZyBpbWcge1xuaGVpZ2h0OiA2NXB4O1xud2lkdGg6IDY1cHg7XG5ib3JkZXItcmFkaXVzOiA1MCU7XG5ib3JkZXI6IDFweCBzb2xpZCAjM2FhNDAwO1xucGFkZGluZzogMXB4O1xufVxuLnVzZXJfaW1nIHtcbnRleHQtYWxpZ246IGNlbnRlcjtcbnBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5kYXQgYiB7XG5jb2xvcjogIzAwMDtcbn1cbi5uZXdfaW1nIHtcbmJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xud2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbmhlaWdodDogMjNweCAhaW1wb3J0YW50O1xucG9zaXRpb246IGFic29sdXRlO1xudG9wOiAtNXB4O1xufVxuLnVzZXIgLnJvdyB7XG5hbGlnbi1pdGVtczogY2VudGVyO1xuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5wYWRkaW5nOiAxMHB4IDEwcHggMDtcbn1cbi5oZWFkaW5nX2ludCB7XG5mb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbn1cbi5jaGF0X2l0ZW0uaXRlbS5pdGVtLWJsb2NrIHtcbmJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xufVxuLnVzZXIgLml0ZW0taW5uZXIge1xucGFkZGluZzogMCA1cHggIWltcG9ydGFudDtcbmJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjICFpbXBvcnRhbnQ7XG5tYXJnaW46IDBweCAwIDA7XG59XG4ucmF0ZSB7XG5wb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbnRvcDogMTlweCAhaW1wb3J0YW50O1xucmlnaHQ6IDE2cHggIWltcG9ydGFudDtcbn1cbmlvbi1pdGVtLW9wdGlvbnMgaW1nIHtcbndpZHRoOiAyNXB4O1xubWFyZ2luOiA4cHg7XG59XG4ucmF0ZSBwIHtcbmZvbnQtc2l6ZTogMTBweDtcbn1cbi5zZWFyY2hiYXIge1xuYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5ib3JkZXI6IG5vbmU7XG5wYWRkaW5nOiAyMHB4IDIwcHggMDtcbm1pbi1oZWlnaHQ6IDUwcHg7XG59XG4uc2VhcmNoYmFyLWlucHV0IHtcbmJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcbmhlaWdodDogMzVweCAhaW1wb3J0YW50O1xuYm9yZGVyLXJhZGl1czogNTBweCAhaW1wb3J0YW50O1xuYm94LXNoYWRvdzogMHB4IDJweCA0cHggIzAwMDAwMDI2O1xufVxuLnNlYXJjaGJhci1zZWFyY2gtaWNvbiB7XG50b3A6IDExcHggIWltcG9ydGFudDtcbn1cbi5saXN0IHtcbm1hcmdpbjogMDtcbn1cbi5zZWFyY2hiYXIge1xuYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5ib3JkZXI6IG5vbmU7XG5wYWRkaW5nOiAxNnB4O1xubWluLWhlaWdodDogNTBweDtcbn1cbi5zZWdtZW50IHtcbm1hcmdpbjogMjBweCAwIDA7XG59XG4uY2hhdF9pdGVtIHtcbmJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuaW9uLWl0ZW0tc2xpZGluZyB7XG5iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuLmZhYiB7XG5iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5pdGVtLWlvcyBpb24tYXZhdGFyIHtcbm1pbi13aWR0aDogNjVweDtcbm1pbi1oZWlnaHQ6IDY1cHg7XG59XG4ucGluZyB7XG5iYWNrZ3JvdW5kOiAjZmU2ZTRhO1xud2lkdGg6IDIwcHg7XG5oZWlnaHQ6IDIwcHg7XG5kaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG50ZXh0LWFsaWduOiBjZW50ZXI7XG5wYWRkaW5nOiA1cHg7XG5ib3JkZXItcmFkaXVzOiA1MCU7XG5jb2xvcjogI2ZmZjtcbn1cbi50b29sYmFyLWJhY2tncm91bmQge1xuYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5JbWFnZV9jcmVhdGUgaW9uLWF2YXRhciB7XG53aWR0aDogMTAwJTtcbn1cblxuLkltYWdlX2NyZWF0ZSAudXNlcl9pbWcge1xudGV4dC1hbGlnbjogY2VudGVyO1xucG9zaXRpb246IHJlbGF0aXZlO1xud2lkdGg6IDEzMHB4O1xubWFyZ2luOiAwIGF1dG87XG5tYXJnaW4tdG9wOiAzMXB4O1xufVxuLkltYWdlX2NyZWF0ZSAgLnVzZXJfaW1nIGltZyB7XG5oZWlnaHQ6IDExMHB4O1xud2lkdGg6IDExMHB4O1xuYm9yZGVyLXJhZGl1czogNTAlO1xuYm9yZGVyOiAxcHggc29saWQgI2ZlNmU0YTtcbnBhZGRpbmc6IDFweDtcbm1hcmdpbjogMCBhdXRvO1xub2JqZWN0LWZpdDogY29udGFpbjtcbmJhY2tncm91bmQ6ICNmZmY7XG5wYWRkaW5nOiAxMHB4O1xufVxuLmNhbWVyYSB7XG5ib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbmhlaWdodDogYXV0byAhaW1wb3J0YW50O1xud2lkdGg6IDI1cHggIWltcG9ydGFudDtcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcbmJvdHRvbTogMTBweDtcbmxlZnQ6IDEwcHg7XG5wYWRkaW5nOiAwICFpbXBvcnRhbnQ7IFxufVxuLmlucHV0XzEge1xubWFyZ2luOiAxMHB4IDA7XG5oZWlnaHQ6IDM1cHg7XG5iYWNrZ3JvdW5kOiAjZmZmO1xuY29sb3I6ICM1NzU3NTc7XG5mb250LXNpemU6IDEzcHg7XG5ib3JkZXI6IDFweCBzb2xpZCAjZDhkOGQ4ICFpbXBvcnRhbnQ7XG5ib3JkZXItcmFkaXVzOiA2cHg7XG59XG4ubGFiZWwgaW5wdXQge1xud2lkdGg6IDEwMCU7XG5oZWlnaHQ6IDMwcHg7XG5ib3JkZXI6IG5vbmU7XG59XG50ZXh0YXJlYSB7XG53aWR0aDogMTAwJTtcbmJvcmRlcjogbm9uZTtcbn1cbiJdfQ== */");

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