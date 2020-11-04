(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<!-- <ion-header>\n  <ion-toolbar>\n      <ion-title>Home</ion-title>\n      <ion-buttons slot=\"start\">\n          <ion-menu-button autoHide=\"false\"></ion-menu-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header> -->\n<ion-header>\n <ion-toolbar> \t\n  <ion-buttons slot=\"start\">\n    <ion-menu-button autoHide=\"false\">\n      <img src='../../assets/imgs/blank-avatar.jpg'>\n    </ion-menu-button>\n    <button ion-button clear icon-only small style=\"color: #000;font-weight: 600;padding: 0;margin: 0; border: none; background: none;\">$<span *ngIf=\"show\">100</span></button>\n    &nbsp;&nbsp;<button ion-button clear icon-only style=\"color: #000;font-weight: 600;padding: 0;margin: 0; border: none; background: none;\" (click)=\"toggle()\">\n      <img src=\"assets/imgs/eye.png\" width=\"25\">\n      </button>\n</ion-buttons>\n<!-- <ion-buttons slot=\"end\">\n  <button ion-button (click)=\"video()\" style=\"color: #000;font-size: 25px; padding: 0;margin: 0; border: none; background: none;\">\n   \n    <ion-icon name=\"videocam\"></ion-icon>\n  </button>&nbsp;&nbsp;\n\n  <button ion-button (click)=\"audio()\" style=\"color: #000;font-size: 25px; padding: 0;margin: 0; border: none; background: none;\">\n   \n    <ion-icon name=\"call\"></ion-icon>\n  </button>\n</ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"back\">\n\n  <ion-segment [(ngModel)]=\"type\" style=\"background-color: #fe6e4a;\">\n    <ion-segment-button  value=\"chat\">\n      Chat\n   </ion-segment-button>\n   <ion-segment-button value=\"group\">\n       Groups\n   </ion-segment-button>\n   <ion-segment-button value=\"circle\">\n       Circles\n   </ion-segment-button>\n   <ion-segment-button value=\"request\">\n    Requests\n  </ion-segment-button>\n  <ion-segment-button value=\"status\">\n    Status\n  </ion-segment-button>\n  </ion-segment>\n  \n  <div class=\"\" [ngSwitch]=\"type\">\n  \n  <div *ngSwitchCase=\"'chat'\" class=\"list_plan\" style=\"margin-top: 15px;\">\n    <ion-searchbar style=\"width: 90%;\n    margin: auto;\"></ion-searchbar>\n      \n    <div class=\"user\" *ngFor=\"let k of [1,2,3,4,5]\" (click)=\"chatdetail()\">\n  \n      <ion-list>\n      <ion-item-sliding no-lines>\n      <ion-item  class=\"chat_item\">\n        <ion-avatar item-start>\n            <img src=\"assets/imgs/blank-avatar.jpg\">\n       \n        </ion-avatar>\n      \n        <div>\n          <h6 class=\"heading_int\">Simon</h6>\n              <p class=\"dateee\">How are you?</p>\n              </div>\n              <div class=\"rate\">\n                  <p class=\"dat\">3:47 PM <span class=\"ping\">7</span></p>\n              </div>\n      </ion-item>\n  \n      <ion-item-options slot=\"start\"> \n        <button ion-button color=\"dark\" icon-start>\n          <img src=\"assets/imgs/msg.png\">\n          Read\n        </button>\n        <button ion-button color=\"primary\" icon-start>\n          <img src=\"assets/imgs/pin.png\">\n          Pin\n        </button>\n      </ion-item-options>\n  \n      <ion-item-options slot=\"end\">\n        <button ion-button color=\"dark\" >\n          <img src=\"assets/imgs/more.png\">\n          more\n          <!-- <ion-select [(ngModel)]=\"notifications\" interface=\"action-sheet\">\n            <ion-option value=\"enable\">Mute</ion-option>\n            <ion-option value=\"mute\" (ionSelect)=\"contactinfo()\">Contact Info</ion-option>\n            <ion-option value=\"chat\">Export Chat</ion-option>\n            <ion-option value=\"circle\">Add to Circle</ion-option>\n            <ion-option value=\"mute_week\">Clear Chat</ion-option>\n            <ion-option value=\"mute_week\">Delete Chat</ion-option>\n          </ion-select> -->\n        </button>\n  \n        <button ion-button color=\"primary\">\n          <img src=\"assets/imgs/archive.png\" style=\"width: 15px;\">\n          Archive\n        </button>\n      </ion-item-options>\n  \n    </ion-item-sliding>\n  </ion-list>\n  \n      </div>\n  \n  \n  </div>\n  \n  <div *ngSwitchCase=\"'group'\" class=\"list_plan\">\n    <ion-searchbar></ion-searchbar>\n      \n    <div class=\"user\" *ngFor=\"let k of [1,2,3,4,5]\" (click)=\"chatdetail()\">\n  \n      <ion-list>\n      <ion-item-sliding no-lines>\n      <ion-item  class=\"chat_item\">\n        <ion-avatar item-start>\n            <img src=\"assets/imgs/blank-avatar.jpg\">\n            <!-- <img class=\"new_img\" src=\"assets/imgs/lock.png\"> -->\n        \n        </ion-avatar>\n        <div>\n        <h6 class=\"heading_int\">Korzinka UZ Staff</h6>\n        <p class=\"dateee\"><span>Sultan:</span> How are you?</p>\n        </div>\n        <!-- <p style=\"color: #000;font-size: 12px;\">31 members <span style=\"float: right;\"><h4 style=\"font-size: 12px;\">@Sultan(3)</h4></span></p> -->\n              <div class=\"rate\">\n                  <p class=\"dat\">3:47 PM <span class=\"ping\">7</span></p>\n              </div>\n      </ion-item>\n  \n      <ion-item-options slot=\"end\">\n       \n        <button ion-button color=\"primary\" icon-start>\n          <img src=\"assets/imgs/pin.png\">\n          Pin\n        </button>\n      </ion-item-options>\n  \n    </ion-item-sliding>\n  </ion-list>\n  \n      </div>\n  \n  </div>\n  \n  <div *ngSwitchCase=\"'circle'\" class=\"list_plan\">\n    <ion-searchbar ></ion-searchbar>\n      \n    <div class=\"user\" *ngFor=\"let k of [1,2,3,4,5]\" (click)=\"circle()\">\n  \n      <ion-list >\n      <ion-item-sliding no-lines>\n      <ion-item class=\"chat_item\">\n        <ion-avatar item-start>\n            <img src=\"assets/imgs/blank-avatar.jpg\">\n            <img class=\"new_img\" src=\"assets/imgs/lock.png\">\n        </ion-avatar>\n        <div>\n        <h6 class=\"heading_int\">Family</h6>\n              <p style=\"color: #000;font-size: 12px; padding-left: 23px;\">4 members</p>\n             </div> \n      </ion-item>\n  \n      <ion-item-options slot=\"start\"> \n        <button ion-button color=\"dark\" icon-start>\n          <img src=\"assets/imgs/msg.png\">\n          Read\n        </button>\n        <button ion-button color=\"primary\" icon-start>\n          <img src=\"assets/imgs/pin.png\">\n          Pin\n        </button>\n      </ion-item-options>\n  \n      <ion-item-options slot=\"end\">\n        <button ion-button color=\"dark\">\n          <img src=\"assets/imgs/more.png\">\n          more\n        </button>\n        <button ion-button color=\"primary\">\n          <img src=\"assets/imgs/archive.png\" style=\"width: 15px;\">\n          Archive\n        </button>\n      </ion-item-options>\n  \n    </ion-item-sliding>\n  </ion-list>\n  \n      </div>\n  \n  \n  </div>\n  \n  <div *ngSwitchCase=\"'request'\" class=\"list_plan\">\n    <ion-searchbar></ion-searchbar>\n      \n    <div class=\"user\">\n  \n      <ion-list>\n      <ion-item-sliding no-lines>\n      <ion-item no-lines class=\"chat_item\">\n        <ion-avatar item-start>\n            <img src=\"assets/imgs/blank-avatar.jpg\">\n        </ion-avatar>\n        <div>\n        <h6 class=\"heading_int\">Simon</h6>\n              <p class=\"dateee\">How are you?</p>\n              </div>\n              <div class=\"rate\">\n                  <button ion-button small class=\"block\">Block</button>\n                  <button ion-button small class=\"accept\" (click)=\"chatdetail()\">Accept</button>\n                  <button ion-button small class=\"primary\" item-end (click)=\"report()\">Report</button>\n                  <br>\n              </div>\n             \n      </ion-item>\n  \n      <ion-item-options> \n        <button ion-button color=\"dark\" icon-start>\n          <img src=\"assets/imgs/msg.png\">\n          Read\n        </button>\n        <button ion-button color=\"primary\" icon-start>\n          <img src=\"assets/imgs/pin.png\">\n          Pin\n        </button>\n      </ion-item-options>\n  \n      <ion-item-options>\n        <button ion-button color=\"dark\">\n          <img src=\"assets/imgs/more.png\">\n          more\n        </button>\n        <button ion-button color=\"primary\">\n          <img src=\"assets/imgs/archive.png\" style=\"width: 15px;\">\n          Archive\n        </button>\n      </ion-item-options>\n  \n    </ion-item-sliding>\n  </ion-list>\n  \n      </div>\n  </div>\n  \n  \n  <div *ngSwitchCase=\"'status'\" class=\"list_plan\">\n  \n    \n        \n      <div class=\"user\">\n    \n        <ion-list>\n        <ion-item-sliding no-lines>\n        <ion-item no-lines class=\"chat_item\">\n          <ion-avatar item-start>\n              <img src=\"assets/imgs/blank-avatar.jpg\">\n          </ion-avatar>\n          <div>\n          <h6 class=\"heading_int\">Rawan Essam</h6>\n          <p style=\"color: #000;font-size: 12px; padding-left: 23px;\">@rawan_essam</p>\n            </div>\n          <button ion-button item-end clear style=\"padding: 0;margin: 0; border: none; background: none; outline: none;\">\n            <img src=\"assets/imgs/status-camera.png\" width=\"27\">\n          </button>\n          <button ion-button item-end clear style=\"padding: 0;margin: 0; border: none; background: none;\">\n            <img src=\"assets/imgs/status-edit.png\"  width=\"27\">\n          </button>\n                \n        </ion-item>\n    \n      </ion-item-sliding>\n    </ion-list>\n  \n    </div>\n  \n    <h3 class=\"heading\">RECENT UPDATES</h3>\n      \n    <div class=\"user\">\n  \n      <ion-list>\n      <ion-item-sliding no-lines>\n      <ion-item no-lines class=\"chat_item\">\n        <ion-avatar item-start>\n            <img src=\"assets/imgs/blank-avatar.jpg\">\n        </ion-avatar>\n        <div>\n        <h6 class=\"heading_int\">Family</h6>\n              <p style=\"color: #000;font-size: 12px; padding-left: 23px;\">4 members</p>\n             </div> \n      </ion-item>\n  \n    </ion-item-sliding>\n  </ion-list>\n  \n      </div>\n  </div>\n  \n  \n  </div>\n  \n  <ion-fab *ngIf=\"type=='chat'\"   style=\"bottom:50px !important; right:35px !important\"  (click)=\"mycontact()\">\n      <img src=\"assets/imgs/icon_slect.png\" width=\"90\" style=\"max-width:90px\">\n    </ion-fab>\n  \n    <ion-fab *ngIf=\"type=='group'\"   style=\"bottom:50px !important; right:35px !important\"  (click)=\"addgroup()\">\n        <img src=\"assets/imgs/icon_slect.png\" width=\"90\" style=\"max-width:90px\">\n      </ion-fab>\n  \n      <ion-fab *ngIf=\"type=='circle'\"   style=\"bottom:50px !important; right:35px !important\"  (click)=\"addcir()\">\n          <img src=\"assets/imgs/icon_slect.png\" width=\"90\" style=\"max-width:90px\">\n        </ion-fab>\n       \n        <div class=\"footer\">\n          <ion-segment style=\"background:#ffff\">\n            <ion-segment-button style=\"color:white\" icon-left>\n              <img src=\"../../assets/imgs/footer/chat-active.png\" style=\"max-width: 50%;\" >\n            </ion-segment-button>\n            <ion-segment-button value=\"diesel_10\" style=color:white>\n              <img src=\"../../assets/imgs/footer/email-active.png\" style=\"max-width: 50%;\" >\n            </ion-segment-button>\n            <ion-segment-button value=\"benzin_e5\" style=color:white>\n              <img src=\"../../assets/imgs/footer/media-active.png\" style=\"max-width: 50%;\" >\n            </ion-segment-button>\n            <ion-segment-button value=\"benzin_e10\" style=color:white>\n              <img src=\"../../assets/imgs/footer/wallet-active.png\" style=\"max-width: 50%;\" >\n            </ion-segment-button>\n            <ion-segment-button value=\"benzin_e10\" style=color:white>\n              <img src=\"../../assets/imgs/footer/more-active.png\" style=\"max-width: 50%;\" >\n\n            </ion-segment-button>\n          </ion-segment>\n        </div>\n        <!-- <ion-tabs>\n          <ion-tab-bar slot=\"bottom\">\n            <ion-tab-button tab=\"schedule\">\n              <img src=\"../../assets/imgs/footer/chat-active.png\" style=\"max-width: 50%;\" >\n            \n            </ion-tab-button>\n            <ion-tab-button tab=\"schedule\">\n              <img src=\"../../assets/imgs/footer/email-active.png\" style=\"max-width: 50%;\" >\n            \n            </ion-tab-button>\n                  <ion-tab-button tab=\"speaker\">\n                    <img src=\"../../assets/imgs/footer/media-active.png\" style=\"max-width: 50%;\" >\n            </ion-tab-button>\n            <ion-tab-button tab=\"schedule\">\n              <img src=\"../../assets/imgs/footer/wallet-active.png\" style=\"max-width: 50%;\" >\n\n            \n            </ion-tab-button>\n            <ion-tab-button tab=\"schedule\">\n              <img src=\"../../assets/imgs/footer/more-active.png\" style=\"max-width: 50%;\" >\n\n            </ion-tab-button>\n          </ion-tab-bar>\n        </ion-tabs> -->\n  \n  </ion-content>");

/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".back {\n  background-image: url(\"/assets/imgs/menu/background.png\");\n}\n\n.back-button.bar-button {\n  color: #fff;\n}\n\n.toolbar {\n  min-height: 55px !important;\n}\n\n.toolbar-title {\n  color: white !important;\n  font-weight: 100 !important;\n}\n\n.toolbar-background {\n  background-color: var(-ion-color-primary);\n}\n\n.segment-ios .segment-button {\n  flex: 1;\n  width: 0;\n  height: 3.2rem;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #fe6e4a;\n  font-size: 1.3rem;\n  line-height: 3rem;\n  color: #fe6e4a;\n  background-color: transparent;\n  font-weight: bold;\n  border: none;\n  font-size: 15px;\n}\n\n.segment-ios .segment-button.segment-activated {\n  color: #fe6e4a;\n  background-color: transparent;\n  opacity: 1;\n  transition: 100ms all linear;\n  font-weight: bold;\n}\n\n.user_img img {\n  height: 71px;\n  width: 65px;\n  border-radius: 50%;\n  border: 1px solid #3aa400;\n  padding: 2px;\n  background: #fff;\n}\n\n.user_img {\n  text-align: center;\n  position: relative;\n  height: 71px;\n}\n\n.dat span {\n  color: #000;\n  font-family: \"sfbold\";\n  font-weight: 500;\n}\n\n.dateee {\n  padding-left: 24px;\n}\n\n.new_img {\n  border: none !important;\n  border-radius: 0 !important;\n  width: auto !important;\n  height: 23px !important;\n  position: absolute;\n  top: -5px;\n  background: transparent !important;\n}\n\n.user .row {\n  align-items: center;\n  justify-content: center;\n  padding: 10px 10px 0;\n}\n\n.heading_int {\n  font-size: 15px !important;\n  font-weight: 500;\n  padding-left: 24px;\n}\n\n.heading {\n  font-size: 17px !important;\n  font-weight: 100;\n  padding: 0 16px;\n}\n\n.chat_item.item.item-block {\n  border: none !important;\n}\n\n.user .item-inner {\n  padding: 0 5px !important;\n  border-bottom: 1px solid #ccc !important;\n  margin: 0px 0 0;\n}\n\n.rate {\n  position: absolute !important;\n  top: 9px !important;\n  right: 16px !important;\n  text-align: right;\n}\n\nion-item-options img {\n  width: 18px;\n  margin: 8px;\n}\n\n.rate p {\n  font-size: 10px;\n}\n\n.accept {\n  background: #01da10;\n}\n\n.block {\n  background: red;\n}\n\n.searchbar {\n  background: transparent;\n  border: none;\n  padding: 20px 20px 0;\n  min-height: 50px;\n}\n\n.searchbar-input {\n  background: #fff !important;\n  height: 35px !important;\n  border-radius: 50px !important;\n  box-shadow: 0px 2px 4px #00000026;\n}\n\n.searchbar-search-icon {\n  top: 11px !important;\n}\n\n.list {\n  margin: 0;\n}\n\n.searchbar {\n  background: transparent;\n  border: none;\n  padding: 16px;\n  min-height: 50px;\n}\n\n.segment {\n  margin: 20px 0 0;\n}\n\n.chat_item {\n  background: transparent;\n}\n\nion-item-sliding {\n  background-color: transparent !important;\n}\n\n.fab {\n  background: transparent;\n}\n\n.item-ios ion-avatar {\n  min-width: 65px;\n  min-height: 65px;\n}\n\n.ping {\n  background: #fe6e4a;\n  width: 14px;\n  height: 14px;\n  display: inline-block;\n  text-align: center;\n  padding: 2px;\n  border-radius: 50%;\n  color: #fff !important;\n  font-size: 8px;\n}\n\n.toolbar-background {\n  border: none !important;\n}\n\n.rate button {\n  margin: 0 0 2px 0 !important;\n  padding: 8px;\n  font-size: 10px;\n}\n\n.select {\n  padding: 0 !important;\n  height: 0;\n}\n\nion-item-options {\n  z-index: 99;\n}\n\n.custom-button {\n  position: fixed;\n  right: 0;\n  bottom: 0;\n}\n\n.footer {\n  position: fixed;\n  height: 50px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  margin-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlEQUFBO0FBQ0Y7O0FBQ0E7RUFDQSxXQUFBO0FBRUE7O0FBQUE7RUFDQSwyQkFBQTtBQUdBOztBQURBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtBQUlBOztBQUZBO0VBQ0EseUNBQUE7QUFLQTs7QUFGQTtFQUlBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBS0E7O0FBSEE7RUFDQSxjQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0VBRUEsNEJBQUE7RUFDQSxpQkFBQTtBQU1BOztBQUpBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBT0E7O0FBTEE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQVFBOztBQU5BO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFTQTs7QUFOQTtFQUNFLGtCQUFBO0FBU0Y7O0FBUEE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGtDQUFBO0FBVUE7O0FBUkE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7QUFXQTs7QUFUQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQVlBOztBQVZBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFhQTs7QUFYQTtFQUNBLHVCQUFBO0FBY0E7O0FBWkE7RUFDQSx5QkFBQTtFQUNBLHdDQUFBO0VBQ0EsZUFBQTtBQWVBOztBQWJBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUFnQkE7O0FBZEE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQWlCQTs7QUFmQTtFQUNBLGVBQUE7QUFrQkE7O0FBaEJBO0VBQ0EsbUJBQUE7QUFtQkE7O0FBakJBO0VBQ0EsZUFBQTtBQW9CQTs7QUFsQkE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FBcUJBOztBQW5CQTtFQUNBLDJCQUFBO0VBQ0EsdUJBQUE7RUFDQSw4QkFBQTtFQUNBLGlDQUFBO0FBc0JBOztBQXBCQTtFQUNBLG9CQUFBO0FBdUJBOztBQXJCQTtFQUNBLFNBQUE7QUF3QkE7O0FBdEJBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBeUJBOztBQXZCQTtFQUNBLGdCQUFBO0FBMEJBOztBQXhCQTtFQUNBLHVCQUFBO0FBMkJBOztBQXpCQTtFQUNBLHdDQUFBO0FBNEJBOztBQTFCQTtFQUNBLHVCQUFBO0FBNkJBOztBQTNCQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQThCQTs7QUE1QkE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQStCQTs7QUE3QkE7RUFDQSx1QkFBQTtBQWdDQTs7QUE5QkE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBaUNBOztBQS9CQTtFQUNBLHFCQUFBO0VBQ0EsU0FBQTtBQWtDQTs7QUFoQ0E7RUFDQSxXQUFBO0FBbUNBOztBQWhDQTtFQUNFLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQW1DRjs7QUFqQ0E7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBb0NGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNre1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1ncy9tZW51L2JhY2tncm91bmQucG5nJyk7XG59XG4uYmFjay1idXR0b24uYmFyLWJ1dHRvbiB7XG5jb2xvcjogI2ZmZjtcbn1cbi50b29sYmFyIHtcbm1pbi1oZWlnaHQ6IDU1cHggIWltcG9ydGFudDtcbn1cbi50b29sYmFyLXRpdGxlIHtcbmNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuZm9udC13ZWlnaHQ6IDEwMCAhaW1wb3J0YW50O1xufVxuLnRvb2xiYXItYmFja2dyb3VuZCB7XG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuLnNlZ21lbnQtaW9zIC5zZWdtZW50LWJ1dHRvbiB7XG4td2Via2l0LWJveC1mbGV4OiAxO1xuLXdlYmtpdC1mbGV4OiAxO1xuLW1zLWZsZXg6IDE7XG5mbGV4OiAxO1xud2lkdGg6IDA7XG5oZWlnaHQ6IDMuMnJlbTtcbmJvcmRlci13aWR0aDogMXB4O1xuYm9yZGVyLXN0eWxlOiBzb2xpZDtcbmJvcmRlci1jb2xvcjogI2ZlNmU0YTtcbmZvbnQtc2l6ZTogMS4zcmVtO1xubGluZS1oZWlnaHQ6IDNyZW07XG5jb2xvcjogI2ZlNmU0YTtcbmJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuZm9udC13ZWlnaHQ6IGJvbGQ7XG5ib3JkZXI6IG5vbmU7XG5mb250LXNpemU6IDE1cHg7XG59XG4uc2VnbWVudC1pb3MgLnNlZ21lbnQtYnV0dG9uLnNlZ21lbnQtYWN0aXZhdGVkIHtcbmNvbG9yOiAjZmU2ZTRhO1xuYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5vcGFjaXR5OiAxO1xuLXdlYmtpdC10cmFuc2l0aW9uOiAxMDBtcyBhbGwgbGluZWFyO1xudHJhbnNpdGlvbjogMTAwbXMgYWxsIGxpbmVhcjtcbmZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnVzZXJfaW1nIGltZyB7XG5oZWlnaHQ6IDcxcHg7XG53aWR0aDogNjVweDtcbmJvcmRlci1yYWRpdXM6IDUwJTtcbmJvcmRlcjogMXB4IHNvbGlkICMzYWE0MDA7XG5wYWRkaW5nOiAycHg7XG5iYWNrZ3JvdW5kOiAjZmZmO1xufVxuLnVzZXJfaW1nIHtcbnRleHQtYWxpZ246IGNlbnRlcjtcbnBvc2l0aW9uOiByZWxhdGl2ZTtcbmhlaWdodDogNzFweDtcbn1cbi5kYXQgc3BhbiB7XG5jb2xvcjogIzAwMDtcbmZvbnQtZmFtaWx5OiAnc2Zib2xkJztcbmZvbnQtd2VpZ2h0OiA1MDA7XG5cbn1cbi5kYXRlZWV7XG4gIHBhZGRpbmctbGVmdDogMjRweDtcbn1cbi5uZXdfaW1nIHtcbmJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xud2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbmhlaWdodDogMjNweCAhaW1wb3J0YW50O1xucG9zaXRpb246IGFic29sdXRlO1xudG9wOiAtNXB4O1xuYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cbi51c2VyIC5yb3cge1xuYWxpZ24taXRlbXM6IGNlbnRlcjtcbmp1c3RpZnktY29udGVudDogY2VudGVyO1xucGFkZGluZzogMTBweCAxMHB4IDA7XG59XG4uaGVhZGluZ19pbnQge1xuZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG5mb250LXdlaWdodDogNTAwO1xucGFkZGluZy1sZWZ0OiAyNHB4O1xufVxuLmhlYWRpbmcge1xuZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG5mb250LXdlaWdodDogMTAwO1xucGFkZGluZzogMCAxNnB4O1xufVxuLmNoYXRfaXRlbS5pdGVtLml0ZW0tYmxvY2sge1xuYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG4udXNlciAuaXRlbS1pbm5lciB7XG5wYWRkaW5nOiAwIDVweCAhaW1wb3J0YW50O1xuYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2MgIWltcG9ydGFudDtcbm1hcmdpbjogMHB4IDAgMDtcbn1cbi5yYXRlIHtcbnBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xudG9wOiA5cHggIWltcG9ydGFudDtcbnJpZ2h0OiAxNnB4ICFpbXBvcnRhbnQ7XG50ZXh0LWFsaWduOiByaWdodDtcbn1cbmlvbi1pdGVtLW9wdGlvbnMgaW1nIHtcbndpZHRoOiAxOHB4O1xubWFyZ2luOiA4cHg7XG59XG4ucmF0ZSBwIHtcbmZvbnQtc2l6ZTogMTBweDtcbn1cbi5hY2NlcHQge1xuYmFja2dyb3VuZDogIzAxZGExMDtcbn1cbi5ibG9jayB7XG5iYWNrZ3JvdW5kOiByZWQ7XG59XG4uc2VhcmNoYmFyIHtcbmJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuYm9yZGVyOiBub25lO1xucGFkZGluZzogMjBweCAyMHB4IDA7XG5taW4taGVpZ2h0OiA1MHB4O1xufVxuLnNlYXJjaGJhci1pbnB1dCB7XG5iYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XG5oZWlnaHQ6IDM1cHggIWltcG9ydGFudDtcbmJvcmRlci1yYWRpdXM6IDUwcHggIWltcG9ydGFudDtcbmJveC1zaGFkb3c6IDBweCAycHggNHB4ICMwMDAwMDAyNjtcbn1cbi5zZWFyY2hiYXItc2VhcmNoLWljb24ge1xudG9wOiAxMXB4ICFpbXBvcnRhbnQ7XG59XG4ubGlzdCB7XG5tYXJnaW46IDA7XG59XG4uc2VhcmNoYmFyIHtcbmJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuYm9yZGVyOiBub25lO1xucGFkZGluZzogMTZweDtcbm1pbi1oZWlnaHQ6IDUwcHg7XG59XG4uc2VnbWVudCB7XG5tYXJnaW46IDIwcHggMCAwO1xufVxuLmNoYXRfaXRlbSB7XG5iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbmlvbi1pdGVtLXNsaWRpbmcge1xuYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cbi5mYWIge1xuYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4uaXRlbS1pb3MgaW9uLWF2YXRhciB7XG5taW4td2lkdGg6IDY1cHg7XG5taW4taGVpZ2h0OiA2NXB4O1xufVxuLnBpbmcge1xuYmFja2dyb3VuZDogI2ZlNmU0YTtcbndpZHRoOiAxNHB4O1xuaGVpZ2h0OiAxNHB4O1xuZGlzcGxheTogaW5saW5lLWJsb2NrO1xudGV4dC1hbGlnbjogY2VudGVyO1xucGFkZGluZzogMnB4O1xuYm9yZGVyLXJhZGl1czogNTAlO1xuY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbmZvbnQtc2l6ZTogOHB4O1xufVxuLnRvb2xiYXItYmFja2dyb3VuZCB7XG5ib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cbi5yYXRlIGJ1dHRvbiB7XG5tYXJnaW46IDAgMCAycHggMCAhaW1wb3J0YW50O1xucGFkZGluZzogOHB4O1xuZm9udC1zaXplOiAxMHB4O1xufVxuLnNlbGVjdCB7XG5wYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG5oZWlnaHQ6IDA7XG59XG5pb24taXRlbS1vcHRpb25zIHtcbnotaW5kZXg6ICs5OTtcbn1cblxuLmN1c3RvbS1idXR0b257XG4gIHBvc2l0aW9uOmZpeGVkO1xuICByaWdodDowO1xuICBib3R0b206MDtcbn1cbi5mb290ZXJ7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3R0b206IDBweDtcbiAgbGVmdDogMHB4O1xuICByaWdodDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");




let HomePage = class HomePage {
    constructor(router, platform) {
        this.router = router;
        this.platform = platform;
        this.show = false;
        this.buttonName = 'Show';
        this.weather = 'sunny';
    }
    ngOnInit() {
        this.type = 'chat';
    }
    ionViewDidEnter() {
        this.subscription = this.platform.backButton.subscribe(() => {
            navigator['app'].exitApp();
        });
    }
    ionViewWillLeave() {
        this.subscription.unsubscribe();
    }
    toggle() {
        this.show = !this.show;
        // CHANGE THE NAME OF THE BUTTON.
        if (this.show)
            this.buttonName = "Hide";
        else
            this.buttonName = "Show";
    }
    details() { }
    chatdetail() {
        this.router.navigate(['/menu/chatdetails']);
    }
    filter() {
    }
    mycontact() {
        this.router.navigate(['/menu/mycontact']);
    }
    addgroup() {
        this.router.navigate(['/menu/addgroup']);
    }
    addcir() {
        this.router.navigate(['/menu/addcircle']);
    }
    circle() {
    }
    contactinfo() {
    }
    video() {
    }
    audio() {
    }
    report() { }
    segmentChanged(ev) {
        console.log('Segment changed', ev);
    }
    add() { }
};
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./../app.component.scss */ "./src/app/app.component.scss")).default, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map