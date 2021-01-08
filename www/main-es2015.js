(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../home/home.module": [
		"./src/app/home/home.module.ts",
		"common",
		"home-home-module"
	],
	"../profile/profile.module": [
		"./src/app/profile/profile.module.ts",
		"profile-profile-module"
	],
	"./menu/menu.module": [
		"./src/app/menu/menu.module.ts",
		"menu-menu-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-alert.entry.js",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js",
		5
	],
	"./ion-button_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-chip.entry.js",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js",
		10
	],
	"./ion-datetime_3.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-img.entry.js",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js",
		14
	],
	"./ion-input.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-input.entry.js",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-loading.entry.js",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-modal.entry.js",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-popover.entry.js",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-range.entry.js",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js",
		28
	],
	"./ion-route_4.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js",
		33
	],
	"./ion-spinner.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-text.entry.js",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-toast.entry.js",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n");

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const routes = [
    {
        path: '',
        loadChildren: './menu/menu.module#MenuPageModule'
    },
    {
        path: 'tabs',
        loadChildren: () => __webpack_require__.e(/*! import() | tabs-tabs-module */ "tabs-tabs-module").then(__webpack_require__.bind(null, /*! ./tabs/tabs.module */ "./src/app/tabs/tabs.module.ts")).then(m => m.TabsPageModule)
    },
    {
        path: 'settings',
        loadChildren: () => __webpack_require__.e(/*! import() | settings-settings-module */ "settings-settings-module").then(__webpack_require__.bind(null, /*! ./settings/settings.module */ "./src/app/settings/settings.module.ts")).then(m => m.SettingsPageModule)
    },
    {
        path: 'forgotverify',
        loadChildren: () => __webpack_require__.e(/*! import() | forgotverify-forgotverify-module */ "forgotverify-forgotverify-module").then(__webpack_require__.bind(null, /*! ./forgotverify/forgotverify.module */ "./src/app/forgotverify/forgotverify.module.ts")).then(m => m.ForgotverifyPageModule)
    },
    {
        path: 'chatdetails',
        loadChildren: () => __webpack_require__.e(/*! import() | chatdetails-chatdetails-module */ "chatdetails-chatdetails-module").then(__webpack_require__.bind(null, /*! ./chatdetails/chatdetails.module */ "./src/app/chatdetails/chatdetails.module.ts")).then(m => m.ChatdetailsPageModule)
    },
    {
        path: 'mycontact',
        loadChildren: () => Promise.all(/*! import() | mycontact-mycontact-module */[__webpack_require__.e("common"), __webpack_require__.e("mycontact-mycontact-module")]).then(__webpack_require__.bind(null, /*! ./mycontact/mycontact.module */ "./src/app/mycontact/mycontact.module.ts")).then(m => m.MycontactPageModule)
    },
    {
        path: 'addgroup',
        loadChildren: () => __webpack_require__.e(/*! import() | addgroup-addgroup-module */ "addgroup-addgroup-module").then(__webpack_require__.bind(null, /*! ./addgroup/addgroup.module */ "./src/app/addgroup/addgroup.module.ts")).then(m => m.AddgroupPageModule)
    },
    {
        path: 'addcircle',
        loadChildren: () => __webpack_require__.e(/*! import() | addcircle-addcircle-module */ "addcircle-addcircle-module").then(__webpack_require__.bind(null, /*! ./addcircle/addcircle.module */ "./src/app/addcircle/addcircle.module.ts")).then(m => m.AddcirclePageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tabs .tabbar {\n  background: #fff;\n  padding: 0px 0px 0;\n  border: 0px;\n  border-top: 1px solid #e1e1e1;\n}\n.tabs .tabbar .tab-button-text {\n  text-transform: uppercase;\n  font-size: 10px;\n  margin-bottom: 4px !important;\n  margin-top: 3px !important;\n}\n.show-tabbar .tab-button {\n  background-repeat: no-repeat;\n  background-position: center 8px;\n  background-size: 25px;\n  padding-top: 0px !important;\n}\n.tab-button .tab-button-icon {\n  opacity: 0;\n  margin-top: 0px !important;\n}\n.tabbar span {\n  margin-top: 32px;\n}\n.tab-button:nth-child(1) {\n  background-image: url(/assets/imgs/footer/chat.png);\n  background-size: 28px;\n}\n.tab-button:nth-child(2) {\n  background-image: url(/assets/imgs/footer/media.png);\n  background-size: 28px;\n}\n.tab-button:nth-child(3) {\n  background-image: url(/assets/imgs/footer/wallet.png);\n  background-size: 28px;\n}\n.tab-button:nth-child(4) {\n  background-image: url(/assets/imgs/footer/email.png);\n  background-size: 28px;\n}\n.tab-button:nth-child(5) {\n  background-image: url(/assets/imgs/footer/more.png);\n  background-size: 28px;\n}\n.tab-button[aria-selected=true]:nth-child(1) {\n  background-image: url(/assets/imgs/footer/chat-active.png);\n}\n.tab-button[aria-selected=true]:nth-child(2) {\n  background-image: url(/assets/imgs/footer/media-active.png);\n}\n.tab-button[aria-selected=true]:nth-child(3) {\n  background-image: url(/assets/imgs/footer/wallet-active.png);\n}\n.tab-button[aria-selected=true]:nth-child(4) {\n  background-image: url(/assets/imgs/footer/email-active.png);\n}\n.tab-button[aria-selected=true]:nth-child(5) {\n  background-image: url(/assets/imgs/footer/more-active.png);\n}\nion-menu .content {\n  background-image: url('background2.png') !important;\n}\nion-menu .content .item {\n  background: transparent;\n}\n.avtar_img img {\n  height: 100px;\n  width: 100px;\n  border-radius: 50%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.avtar_img {\n  text-align: center;\n  margin: 40px;\n}\n.menu-btn button {\n  color: #fff;\n}\n.menu-btn button img {\n  width: 22px;\n  margin-right: 15px;\n}\n.menu-btn ion-label {\n  display: flex;\n}\n.bottom_img {\n  padding: 20px;\n}\n.action-sheet-ios .action-sheet-button {\n  margin: 0;\n  padding: 16px;\n  min-height: auto;\n  border-bottom: 0.55px solid #d6d6da;\n  font-size: 15px;\n  color: #000;\n  background: transparent;\n}\n.action-sheet-ios .action-sheet-selected {\n  font-weight: bold;\n  background: #fff;\n  color: #fe6e4a !important;\n}\n.tabs .tabbar {\n  height: 60px;\n}\n.avtar_menu {\n  min-width: 76px !important;\n  min-height: 76px !important;\n}\n.avtar_menu img {\n  border-radius: 50%;\n  overflow: hidden;\n  width: 76px !important;\n  height: 76px !important;\n}\n.avtar_menu .list_menu.list {\n  margin-bottom: 10px;\n  border-bottom: 1px solid #ffffff45 !important;\n}\n.tab-button-text {\n  position: absolute;\n  top: 0;\n  right: 17px;\n  background: #fe6e4a;\n  border-radius: 20px;\n  color: #fff;\n  padding: 2px;\n  font-size: 11px !important;\n  max-height: 17px !important;\n  min-width: 17px;\n}\n.tab-button {\n  max-width: 80px !important;\n}\n.toolbar-background {\n  background-color: transparent !important;\n}\n.moremodel .modal-wrapper {\n  -webkit-animation: fadein 0.5s;\n          animation: fadein 0.5s;\n  transition: ease-in-out 0.5s;\n  transform: translatey(0%) !important;\n}\n.moremodel ion-backdrop {\n  visibility: visible !important;\n  z-index: 0 !important;\n}\n.wallet_p {\n  color: #fff !important;\n  display: flex;\n  align-items: center;\n}\n.registerAlert .alert-head .alert-sub-title {\n  text-align: center;\n  font-size: 22px;\n}\n.registerAlert .alert-title > div {\n  text-align: center;\n}\n.registerAlert .alert-title > div img {\n  display: inline-block;\n  height: 70px;\n}\n.registerAlert .alert-message {\n  font-size: 18px;\n  text-align: center;\n}\n.registerAlert .alert-button-group .alert-button {\n  text-align: center;\n  background: #fe6e4a;\n  color: white;\n  width: 50px;\n}\n.registerAlert .alert-button-group .alert-button span {\n  justify-content: center !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtBQUFSO0FBRUk7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0FBQVI7QUFJQTtFQUNJLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0FBREo7QUFJQTtFQUNJLFVBQUE7RUFDQSwwQkFBQTtBQURKO0FBS0k7RUFDSSxnQkFBQTtBQUZSO0FBT0k7RUFDSSxtREFBQTtFQUNBLHFCQUFBO0FBSlI7QUFNSTtFQUNJLG9EQUFBO0VBQ0EscUJBQUE7QUFKUjtBQU1JO0VBQ0kscURBQUE7RUFDQSxxQkFBQTtBQUpSO0FBTUk7RUFDSSxvREFBQTtFQUNBLHFCQUFBO0FBSlI7QUFNSTtFQUNJLG1EQUFBO0VBQ0EscUJBQUE7QUFKUjtBQVNJO0VBQ0ksMERBQUE7QUFOUjtBQVFJO0VBQ0ksMkRBQUE7QUFOUjtBQVFJO0VBQ0ksNERBQUE7QUFOUjtBQVFJO0VBQ0ksMkRBQUE7QUFOUjtBQVNJO0VBQ0ksMERBQUE7QUFQUjtBQVlBO0VBQ0ksbURBQUE7QUFUSjtBQVlBO0VBQ0ksdUJBQUE7QUFUSjtBQVlBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUFUSjtBQVlBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FBVEo7QUFZQTtFQUNJLFdBQUE7QUFUSjtBQVlBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FBVEo7QUFZQTtFQUNJLGFBQUE7QUFUSjtBQVlBO0VBQ0ksYUFBQTtBQVRKO0FBWUE7RUFDSSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0FBVEo7QUFZQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQVRKO0FBWUE7RUFDSSxZQUFBO0FBVEo7QUFZQTtFQUNJLDBCQUFBO0VBQ0EsMkJBQUE7QUFUSjtBQVVJO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFSUjtBQVVJO0VBQ0ksbUJBQUE7RUFDQSw2Q0FBQTtBQVJSO0FBWUE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7QUFUSjtBQVlBO0VBQ0ksMEJBQUE7QUFUSjtBQW9CQTtFQUNJLHdDQUFBO0FBakJKO0FBcUJJO0VBRUksOEJBQUE7VUFBQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0Esb0NBQUE7QUFuQlI7QUF3Qkk7RUFDSSw4QkFBQTtFQUNBLHFCQUFBO0FBdEJSO0FBMEJBO0VBQ0ksc0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUF2Qko7QUEyQ0k7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUF4Q1I7QUEyQ1E7RUFDSSxrQkFBQTtBQXpDWjtBQTBDWTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtBQXhDaEI7QUE0Q0k7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUExQ1I7QUE2Q1E7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUEzQ1o7QUE0Q1k7RUFDSSxrQ0FBQTtBQTFDaEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFicyB7XG4gICAgLnRhYmJhciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIHBhZGRpbmc6IDBweCAwcHggMDtcbiAgICAgICAgYm9yZGVyOiAwcHg7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTFlMWUxO1xuICAgIH1cbiAgICAudGFiYmFyIC50YWItYnV0dG9uLXRleHQge1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweCAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW4tdG9wOiAzcHggIWltcG9ydGFudDtcbiAgICB9XG59XG5cbi5zaG93LXRhYmJhciAudGFiLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgOHB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMjVweDtcbiAgICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi50YWItYnV0dG9uIC50YWItYnV0dG9uLWljb24ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi50YWJiYXIge1xuICAgIHNwYW4ge1xuICAgICAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgIH1cbn1cblxuLnRhYi1idXR0b24ge1xuICAgICY6bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1ncy9mb290ZXIvY2hhdC5wbmcpO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDI4cHg7XG4gICAgfVxuICAgICY6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1ncy9mb290ZXIvbWVkaWEucG5nKTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAyOHB4O1xuICAgIH1cbiAgICAmOm50aC1jaGlsZCgzKSB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltZ3MvZm9vdGVyL3dhbGxldC5wbmcpO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDI4cHg7XG4gICAgfVxuICAgICY6bnRoLWNoaWxkKDQpIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1ncy9mb290ZXIvZW1haWwucG5nKTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAyOHB4O1xuICAgIH1cbiAgICAmOm50aC1jaGlsZCg1KSB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltZ3MvZm9vdGVyL21vcmUucG5nKTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAyOHB4O1xuICAgIH1cbn1cblxuLnRhYi1idXR0b25bYXJpYS1zZWxlY3RlZD1cInRydWVcIl0ge1xuICAgICY6bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1ncy9mb290ZXIvY2hhdC1hY3RpdmUucG5nKTtcbiAgICB9XG4gICAgJjpudGgtY2hpbGQoMikge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWdzL2Zvb3Rlci9tZWRpYS1hY3RpdmUucG5nKTtcbiAgICB9XG4gICAgJjpudGgtY2hpbGQoMykge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWdzL2Zvb3Rlci93YWxsZXQtYWN0aXZlLnBuZyk7XG4gICAgfVxuICAgICY6bnRoLWNoaWxkKDQpIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1ncy9mb290ZXIvZW1haWwtYWN0aXZlLnBuZyk7XG4gICAgICAgIC8vIGJhY2tncm91bmQtc2l6ZTogMzBweDtcbiAgICB9XG4gICAgJjpudGgtY2hpbGQoNSkge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWdzL2Zvb3Rlci9tb3JlLWFjdGl2ZS5wbmcpO1xuICAgICAgICAvLyBiYWNrZ3JvdW5kLXNpemU6IDMwcHg7XG4gICAgfVxufVxuXG5pb24tbWVudSAuY29udGVudCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9hc3NldHMvaW1ncy9tZW51L2JhY2tncm91bmQyLnBuZycpICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1tZW51IC5jb250ZW50IC5pdGVtIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmF2dGFyX2ltZyBpbWcge1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLmF2dGFyX2ltZyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogNDBweDtcbn1cblxuLm1lbnUtYnRuIGJ1dHRvbiB7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbi5tZW51LWJ0biBidXR0b24gaW1nIHtcbiAgICB3aWR0aDogMjJweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbi5tZW51LWJ0biBpb24tbGFiZWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5ib3R0b21faW1nIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uYWN0aW9uLXNoZWV0LWlvcyAuYWN0aW9uLXNoZWV0LWJ1dHRvbiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgbWluLWhlaWdodDogYXV0bztcbiAgICBib3JkZXItYm90dG9tOiAwLjU1cHggc29saWQgI2Q2ZDZkYTtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5hY3Rpb24tc2hlZXQtaW9zIC5hY3Rpb24tc2hlZXQtc2VsZWN0ZWQge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgY29sb3I6ICNmZTZlNGEgIWltcG9ydGFudDtcbn1cblxuLnRhYnMgLnRhYmJhciB7XG4gICAgaGVpZ2h0OiA2MHB4O1xufVxuXG4uYXZ0YXJfbWVudSB7XG4gICAgbWluLXdpZHRoOiA3NnB4ICFpbXBvcnRhbnQ7XG4gICAgbWluLWhlaWdodDogNzZweCAhaW1wb3J0YW50O1xuICAgIGltZyB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgd2lkdGg6IDc2cHggIWltcG9ydGFudDtcbiAgICAgICAgaGVpZ2h0OiA3NnB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5saXN0X21lbnUubGlzdCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmZmZmNDUgIWltcG9ydGFudDtcbiAgICB9XG59XG5cbi50YWItYnV0dG9uLXRleHQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDE3cHg7XG4gICAgYmFja2dyb3VuZDogI2ZlNmU0YTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDJweDtcbiAgICBmb250LXNpemU6IDExcHggIWltcG9ydGFudDtcbiAgICBtYXgtaGVpZ2h0OiAxN3B4ICFpbXBvcnRhbnQ7XG4gICAgbWluLXdpZHRoOiAxN3B4O1xufVxuXG4udGFiLWJ1dHRvbiB7XG4gICAgbWF4LXdpZHRoOiA4MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi8vIC5tb2RhbC13cmFwcGVyIHtcbi8vICAgICAuY29udGVudCB7XG4vLyAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwICFpbXBvcnRhbnQ7XG4vLyAgICAgfVxuLy8gICAgIC5jb250ZW50LWlvcyB7XG4vLyAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwICFpbXBvcnRhbnQgO1xuLy8gICAgIH1cbi8vIH1cbi50b29sYmFyLWJhY2tncm91bmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbi5tb3JlbW9kZWwge1xuICAgIC5tb2RhbC13cmFwcGVyIHtcbiAgICAgICAgLy8gYmFja2dyb3VuZDogIzAwMDAwMDNkO1xuICAgICAgICBhbmltYXRpb246IGZhZGVpbiAwLjVzO1xuICAgICAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAwLjVzO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCUpICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5tb2RhbC13cmFwcGVyIHtcbiAgICAgICAgLy8gcG9pbnRlci1ldmVudHM6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG4gICAgaW9uLWJhY2tkcm9wIHtcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xuICAgICAgICB6LWluZGV4OiAwICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG4ud2FsbGV0X3Age1xuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4vLyBAa2V5ZnJhbWVzIGZhZGVpbiB7XG4vLyAgICAgZnJvbSB7XG4vLyAgICAgICAgIG9wYWNpdHk6MDtcbi8vICAgICB9XG4vLyAgICAgdG8ge1xuLy8gICAgICAgICBvcGFjaXR5OjE7XG4vLyAgICAgfVxuLy8gfVxuLy8gQGtleWZyYW1lcyBmYWRlb3V0IHtcbi8vICAgICBmcm9tIHtcbi8vICAgICAgICAgb3BhY2l0eToxO1xuLy8gICAgIH1cbi8vICAgICB0byB7XG4vLyAgICAgICAgIG9wYWNpdHk6MDtcbi8vICAgICB9XG4vLyB9XG4ucmVnaXN0ZXJBbGVydCB7XG4gICAgLmFsZXJ0LWhlYWQgLmFsZXJ0LXN1Yi10aXRsZSB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgIH1cbiAgICAuYWxlcnQtdGl0bGUge1xuICAgICAgICAmPmRpdiB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDcwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmFsZXJ0LW1lc3NhZ2Uge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgLmFsZXJ0LWJ1dHRvbi1ncm91cCB7XG4gICAgICAgIC5hbGVydC1idXR0b24ge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZlNmU0YTtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");








let AppComponent = class AppComponent {
    constructor(platform, splashScreen, statusBar, alertController, location, router, toastController, auth) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.alertController = alertController;
        this.location = location;
        this.router = router;
        this.toastController = toastController;
        this.auth = auth;
        this.lastTimeBackPress = 0;
        this.timePeriodToExit = 2000;
        this.initializeApp();
        this.backButtonEvent();
    }
    initializeApp() {
        this.platform.ready().then(() => {
            if (this.auth.isUserLoggedIn()) {
                this.router.navigate(['/menu/home']);
            }
            else {
                this.router.navigate(['/menu/login']);
            }
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
    backButtonEvent() {
        this.platform.backButton.subscribe(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.routerOutlets.forEach((outlet) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (outlet && outlet.canGoBack()) {
                    outlet.pop();
                }
                else if (this.router.url === '/menu/home') {
                    if (new Date().getTime() - this.lastTimeBackPress < this.timePeriodToExit) {
                        // this.platform.exitApp(); // Exit from app
                        navigator['app'].exitApp(); // work in ionic 4
                    }
                    else {
                        const toast = yield this.toastController.create({
                            message: 'Press back again to exit App.',
                            duration: 2000,
                            position: 'middle'
                        });
                        toast.present();
                        // console.log(JSON.stringify(toast));
                        this.lastTimeBackPress = new Date().getTime();
                    }
                }
            }));
        }));
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] }
];
AppComponent.propDecorators = {
    routerOutlets: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRouterOutlet"],] }]
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _components_modules__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components.modules */ "./src/app/components.modules.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/contacts/ngx */ "./node_modules/@ionic-native/contacts/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/__ivy_ngcc__/fesm2015/ngx-socket-io.js");










// import { IonicStorageModule } from '@ionic/storage';





const config = { url: 'https://ionicinto.wdipl.com:9902/', options: { secure: true }, };
let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _components_modules__WEBPACK_IMPORTED_MODULE_10__["ComponentModule"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_12__["IonicStorageModule"].forRoot(),
            ngx_socket_io__WEBPACK_IMPORTED_MODULE_14__["SocketIoModule"].forRoot(config),
        ],
        providers: [
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"],
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"],
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"] }, _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_11__["Camera"], _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_13__["Contacts"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components.modules.ts":
/*!***************************************!*\
  !*** ./src/app/components.modules.ts ***!
  \***************************************/
/*! exports provided: ComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentModule", function() { return ComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






let ComponentModule = class ComponentModule {
};
ComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
        ],
        declarations: [],
        exports: [],
        entryComponents: [],
    })
], ComponentModule);



/***/ }),

/***/ "./src/app/config/config.ts":
/*!**********************************!*\
  !*** ./src/app/config/config.ts ***!
  \**********************************/
/*! exports provided: Config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Config", function() { return Config; });
class Config {
}
// static ApiUrl = "https://betasite.online/intoactive/";
Config.ApiUrl = "https://ionicinto.wdipl.com/";
Config.profilePic = "https://ionicinto.wdipl.com/public/profile_pic/thumb/";
Config.backgroundPic = "https://ionicinto.wdipl.com/public/profile_background_image/thumb/";
Config.imgUrl = "https://ionicinto.wdipl.com/";
Config.profileLink = "https://ionicinto.wdipl.com/tabs/consultant-profile-view/";
//static ApiUrl = "http://ionicinto.wdipl.com/";
Config.storagePath = "https://ionicinto.wdipl.com/storage/";
Config.musicPath = "https://ionicinto.wdipl.com/public/storage/audio/";
Config.admanager = "https://ionicinto.wdipl.com/admanager/user/";


/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _http_error_handler_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./http-error-handler.service */ "./src/app/services/http-error-handler.service.ts");










let AuthService = class AuthService {
    constructor(http, httpErrorHandler, router, storage, platform, toastController, commonService) {
        this.http = http;
        this.router = router;
        this.storage = storage;
        this.platform = platform;
        this.toastController = toastController;
        this.commonService = commonService;
        this.user = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        this.authState = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
        this.localStorageUserKey = "JAJSESSION";
        this.localStorageUserTypeKey = "JAJSESSION";
        // localStorageNotiCount="DRIVERNOTICOUNT";
        this.onUserDetailChanged = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        this.localStorageNotiData = "JAJNOTIDATA";
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
        this.platform.ready().then(() => {
            this.ifLoggedIn();
        });
        this.handleError = httpErrorHandler.createHandleError('TasksService');
    }
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
    ifLoggedIn() {
        const dataPromise = this.storage.get('userToken');
        dataPromise.then(data => {
            let retdata = data;
            if (retdata !== null) {
                return true;
            }
        });
    }
    generateFormData(data) {
        let input = new FormData();
        for (let key in data) {
            if (key !== "confirmP" && key !== "terms") {
                if (data[key].name && data[key].value) {
                    input.append(key, data[key].value, data[key].name);
                }
                else {
                    input.append(key, data[key].value);
                }
            }
        }
        return input;
    }
    getUserDetails() {
        return JSON.parse(localStorage.getItem('userData'));
    }
    getCurrentUserId() {
        this.loginDetails = JSON.parse(localStorage.getItem('userData'));
        return this.loginDetails.id;
    }
    updateUserDetails(details) {
        localStorage.setItem('token', JSON.stringify(details.success.token));
        localStorage.setItem('userData', JSON.stringify(details.success.data));
    }
    removeUserDetails() {
        localStorage.removeItem('userData');
    }
    removeAllSessions() {
        localStorage.removeItem('token');
        localStorage.removeItem('userData');
    }
    isUserLoggedIn() {
        this.loginDetails = JSON.parse(localStorage.getItem('userData'));
        if (this.loginDetails) {
            return true;
        }
        else {
            return false;
        }
    }
    getUrlFromData(data) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (let key in data) {
            params = params.append(key, data[key]);
        }
        return params;
    }
    getApiHeaders(extraHeader = {}, checkAuth = false) {
        if (checkAuth) {
            this.token = localStorage.getItem('token');
            this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Authorization": "Bearer" + this.token });
        }
        return this.options = { headers: this.headers };
    }
    addUser(data) {
        this.generateFormData(data);
        return this.http.post('https://ionicinto.wdipl.com/mychat/api/register', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('addTask', data)));
    }
    userLogin(data) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Accept": "application/json" });
        return this.http.post('https://ionicinto.wdipl.com/mychat/api/login', data, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('userLogin', data)));
        // let formdata = this.generateFormData(data);
        // return this.http.post<any>('https://ionicinto.wdipl.com/mychat/api/login',formdata).pipe(catchError(this.handleError('userLogin',formdata)))
    }
    // post(data: any,url:any): Observable<any>{
    //   let params = this.getUrlFromData(data);
    //   return this.http.post<any>('https://ionicinto.wdipl.com/mychat/api/'+url,{params:params});
    // }
    logout() {
        this.removeAllSessions();
        return this.http.post('https://ionicinto.wdipl.com/mychat/api/logout', '');
    }
    // async autoLogin()   {
    //   const data =localStorage.getItem('userToken');
    //   var userData:any =localStorage.getItem('userData');
    //   userData =  JSON.parse(userData); 
    //     if(userData)
    //     {
    //       this.commonService.setUserData(userData);
    //       if(userData.user_type == 1)  
    //         {
    //           this.router.navigate(["/menu/home"]); 
    //         }
    //     }  
    // }
    uploadPic(formData) {
        return this.http.post('https://ionicinto.wdipl.com/mychat/api/upload_profile_picture', formData, this.getApiHeaders(null, true)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('uploadPic', formData)));
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _http_error_handler_service__WEBPACK_IMPORTED_MODULE_9__["HttpErrorHandlerService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"] },
    { type: _common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"] }
];
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/services/common.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/common.service.ts ***!
  \********************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../services/settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../config/config */ "./src/app/config/config.ts");
/* harmony import */ var _http_error_handler_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./http-error-handler.service */ "./src/app/services/http-error-handler.service.ts");












let CommonService = class CommonService {
    constructor(alertController, toastController, loadingController, storage, settingsService, router, modalController, popoverController, pickerController, navCtrl, http, httpErrorHandler) {
        this.alertController = alertController;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.storage = storage;
        this.settingsService = settingsService;
        this.router = router;
        this.modalController = modalController;
        this.popoverController = popoverController;
        this.pickerController = pickerController;
        this.navCtrl = navCtrl;
        this.http = http;
        this.footerTabHooks = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.isLoading = false;
        this.handleError = httpErrorHandler.createHandleError('PostService');
    }
    getApiHeaders(extraHeader = {}, checkAuth = false) {
        if (checkAuth) {
            this.token = localStorage.getItem('userToken');
            this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({ "Authorization": "Bearer " + this.token });
        }
        return this.options = { headers: this.headers };
    }
    presentPromptRedirect(title, msg, sendData, Url) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let alert = yield this.alertController.create({
                cssClass: this.cssClass,
                header: title,
                message: msg,
                backdropDismiss: false,
                inputs: [
                    {
                        name: 'Name',
                        placeholder: 'Enter here ...',
                        type: 'text',
                    }
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: data => {
                            // console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'Login',
                        handler: data => {
                            if (Url != '' && Url != null) {
                                let name = data.groupName;
                                this.router.navigate([Url, name]).then((e) => {
                                    if (e) {
                                    }
                                    else {
                                    }
                                });
                            }
                        }
                    }
                ]
            });
            alert.present();
        });
    }
    presentAlert(title, msg, btns, myCustomClass) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (myCustomClass != null && myCustomClass != '') {
                this.cssClass = myCustomClass;
            }
            else {
                this.cssClass = 'custom-alert';
            }
            let alert = yield this.alertController.create({
                cssClass: this.cssClass,
                header: title,
                message: msg,
                buttons: btns,
            });
            alert.present();
        });
    }
    redirectUrlWithIdConfirm(title, msg, redirrectUrl, id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let alert = yield this.alertController.create({
                header: title,
                message: msg,
                backdropDismiss: false,
                cssClass: 'custom-alert',
                buttons: [
                    {
                        text: 'Ok',
                        handler: () => {
                            this.router.navigate([redirrectUrl, id]).then((e) => {
                                if (e) {
                                }
                                else {
                                }
                            });
                        }
                    }
                ]
            });
            alert.present();
        });
    }
    presentToast(headerdata) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                header: headerdata,
                duration: 2000,
                position: 'bottom',
            });
            toast.present();
        });
    }
    presentLoader() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isLoading = true;
            return yield this.loadingController.create({
                spinner: 'crescent',
                // message: 'wait...',
                cssClass: 'custom-loader',
                translucent: true,
            }).then(a => {
                a.present().then(() => {
                    if (!this.isLoading) {
                        a.dismiss();
                        // a.dismiss().then(() => console.log('abort presenting loader'));
                    }
                });
            });
        });
    }
    dismissLoader() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isLoading = false;
            return yield this.loadingController.dismiss();
            // return await this.loadingController.dismiss().then(() => console.log('dismissed loder'));
        });
    }
    loggingout() {
        this.storage.get('userData').then((value) => this.settingsService.logout().subscribe((data) => {
            this.storage.clear();
            localStorage.removeItem('userToken');
            localStorage.removeItem('userData');
            localStorage.clear;
            this.dismissLoader();
            this.router.navigateByUrl('/signin');
            this.navCtrl.navigateRoot;
        }, err => {
            this.storage.clear();
            localStorage.removeItem('userToken');
            localStorage.removeItem('userData');
        }));
    }
    dismissModal(dataArray = []) {
        this.modalController.dismiss(dataArray);
        return dataArray;
    }
    presentModal(path, classcss, parameters) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.modal = yield this.modalController.create({
                component: path,
                cssClass: classcss,
                componentProps: parameters,
                backdropDismiss: false
            });
            this.modal.onDidDismiss().then((d) => {
                this.modal = null;
                this.modaldata = d;
            });
            return yield this.modal.present();
        });
    }
    showPopover(path, classcss, parameters) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: path,
                translucent: true,
                cssClass: classcss,
                componentProps: parameters //{'postId':ev , 'commentStatus':commentStatus}
            });
            return yield popover.present();
        });
    }
    dismissPopover(dataArray) {
        this.popoverController.dismiss(dataArray);
    }
    setUserData(data, token = null) {
        this.userData = data;
        if (token) {
            this.userToken = token;
        }
    }
    presentItemPicker(columnOptions = [], buttons = [], numColumns = 1, numOptions = 5) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // console.log(columnOptions);
            const picker = yield this.pickerController.create({
                columns: columnOptions,
                buttons: buttons,
                cssClass: 'timeSelect',
            });
            yield picker.present();
        });
    }
    getColumns(numColumns, numOptions, columnOptions) {
        let columns = [];
        for (let i = 0; i < numColumns; i++) {
            columns.push({
                name: `col-${i}`,
                options: this.getColumnOptions(i, numOptions, columnOptions)
            });
        }
        // console.log(columns);
        return columns;
    }
    getColumnOptions(columnIndex, numOptions, columnOptions) {
        let options = [];
        for (let i = 0; i < numOptions; i++) {
            options.push({
                text: columnOptions[columnIndex][i % numOptions],
                value: i
            });
        }
        return options;
    }
    getUserData() {
        return this.userData;
    }
    getUserToken() {
        return this.userToken;
    }
    getUsersById(formData) {
        return this.http.post(_config_config__WEBPACK_IMPORTED_MODULE_9__["Config"].ApiUrl + 'api/auth/getUsersById', formData, this.getApiHeaders(null, true)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["catchError"])(this.handleError('getUsersById', formData)));
    }
    loadVideoType(formData) {
        return this.http.post(_config_config__WEBPACK_IMPORTED_MODULE_9__["Config"].ApiUrl + 'api/auth/loadVideoType', formData, this.getApiHeaders(null, true)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["catchError"])(this.handleError('loadVideoType', formData)));
    }
    verifyToken() {
        return this.http.post(_config_config__WEBPACK_IMPORTED_MODULE_9__["Config"].ApiUrl + 'api/auth/verifyToken', null, this.getApiHeaders(null, true)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["catchError"])(this.handleError('verifyToken')));
    }
    likedPost(formData) {
        return this.http.post(_config_config__WEBPACK_IMPORTED_MODULE_9__["Config"].ApiUrl + 'api/auth/imageLike', formData, this.getApiHeaders(null, true)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["catchError"])(this.handleError('getUserData', formData)));
    }
    bookmarkPost(formData) {
        return this.http.post(_config_config__WEBPACK_IMPORTED_MODULE_9__["Config"].ApiUrl + 'api/auth/bookmark', formData, this.getApiHeaders(null, true)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["catchError"])(this.handleError('bookmarkPost', formData)));
    }
};
CommonService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
    { type: _services_settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PickerController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
    { type: _http_error_handler_service__WEBPACK_IMPORTED_MODULE_10__["HttpErrorHandlerService"] }
];
CommonService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CommonService);



/***/ }),

/***/ "./src/app/services/http-error-handler.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/http-error-handler.service.ts ***!
  \********************************************************/
/*! exports provided: HttpErrorHandlerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpErrorHandlerService", function() { return HttpErrorHandlerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./message.service */ "./src/app/services/message.service.ts");




let HttpErrorHandlerService = class HttpErrorHandlerService {
    constructor(messageService) {
        this.messageService = messageService;
        this.createHandleError = (serviceName = "") => (operation = "operation", result = {}) => this.handleError(serviceName, operation, result);
    }
    handleError(serviceName = "", operation = "operation", result) {
        return (error) => {
            console.log(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(error);
        };
    }
};
HttpErrorHandlerService.ctorParameters = () => [
    { type: _message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"] }
];
HttpErrorHandlerService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HttpErrorHandlerService);



/***/ }),

/***/ "./src/app/services/message.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/message.service.ts ***!
  \*********************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let MessageService = class MessageService {
    constructor() {
        this.messages = [];
    }
    add(message) {
        this.messages.push(message);
    }
    clear() {
        this.messages = [];
    }
};
MessageService.ctorParameters = () => [];
MessageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MessageService);



/***/ }),

/***/ "./src/app/services/settings.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/settings.service.ts ***!
  \**********************************************/
/*! exports provided: SettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsService", function() { return SettingsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/config */ "./src/app/config/config.ts");
/* harmony import */ var _http_error_handler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./http-error-handler.service */ "./src/app/services/http-error-handler.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");








const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("x-app-id", "93012253").set("x-app-key", "cff839f34a8901afade9652f4c6bced9");
let SettingsService = class SettingsService {
    constructor(http, httpErrorHandler, storage) {
        this.http = http;
        this.storage = storage;
        this.handleError = httpErrorHandler.createHandleError('TasksService');
    }
    getApiHeaders(extraHeader = {}, checkAuth = false) {
        if (checkAuth) {
            this.token = localStorage.getItem('userToken');
            this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Authorization": "Bearer " + this.token });
        }
        return this.options = { headers: this.headers };
    }
    resetPassword(data) {
        return this.http.post(_config_config__WEBPACK_IMPORTED_MODULE_4__["Config"].ApiUrl + 'api/auth/resetPassword', data, this.getApiHeaders(null, true)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('resetPassword', data)));
    }
    contactAdmin(data) {
        return this.http.post(_config_config__WEBPACK_IMPORTED_MODULE_4__["Config"].ApiUrl + 'api/auth/contactAdmin', data, this.getApiHeaders(null, true)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('contactAdmin', data)));
    }
    deleteUser(id) {
        return this.http.post(_config_config__WEBPACK_IMPORTED_MODULE_4__["Config"].ApiUrl + 'api/auth/deleteUser', id, this.getApiHeaders(null, true)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('deleteUser', id)));
    }
    logout() {
        return this.http.post(_config_config__WEBPACK_IMPORTED_MODULE_4__["Config"].ApiUrl + 'api/auth/logOut', null, this.getApiHeaders(null, true)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('logout')));
    }
    isLogedIn() {
        return this.http.post(_config_config__WEBPACK_IMPORTED_MODULE_4__["Config"].ApiUrl + 'api/auth/islogedin', null, this.getApiHeaders(null, true)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('isLogedIn')));
    }
    currentTimeZone() {
        return this.http.post(_config_config__WEBPACK_IMPORTED_MODULE_4__["Config"].ApiUrl + 'api/auth/currentTimeZone', null, this.getApiHeaders(null, true)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('currentTimeZone')));
    }
    editProfile(data) {
        // tslint:disable-next-line: max-line-length
        return this.http.post(_config_config__WEBPACK_IMPORTED_MODULE_4__["Config"].ApiUrl + 'api/auth/editProfile', data, this.getApiHeaders(null, true)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('editProfile', data)));
    }
    additionalInfo(data) {
        // tslint:disable-next-line: max-line-length
        return this.http.post(_config_config__WEBPACK_IMPORTED_MODULE_4__["Config"].ApiUrl + 'api/auth/additionalInfo', data, this.getApiHeaders(null, true)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('additionalInfo', data)));
    }
    getState(data) {
        // tslint:disable-next-line: max-line-length
        return this.http.post(_config_config__WEBPACK_IMPORTED_MODULE_4__["Config"].ApiUrl + 'api/auth/getState', data, this.getApiHeaders(null, true)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getState', data)));
    }
    getCity(data) {
        // tslint:disable-next-line: max-line-length
        return this.http.post(_config_config__WEBPACK_IMPORTED_MODULE_4__["Config"].ApiUrl + 'api/auth/getCity', data, this.getApiHeaders(null, true)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getCity', data)));
    }
    getProfileData() {
        // tslint:disable-next-line: max-line-length
        return this.http.get(_config_config__WEBPACK_IMPORTED_MODULE_4__["Config"].ApiUrl + 'api/auth/getProfileData', this.getApiHeaders(null, true)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getProfileData')));
    }
    getCommonData() {
        // tslint:disable-next-line: max-line-length
        return this.http.get(_config_config__WEBPACK_IMPORTED_MODULE_4__["Config"].ApiUrl + 'api/auth/getCommonData', this.getApiHeaders(null, true)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getCommonData')));
    }
    addDeviceToken(data) {
        return this.http.post(_config_config__WEBPACK_IMPORTED_MODULE_4__["Config"].ApiUrl + 'api/auth/addUserTokenFcm', data, this.getApiHeaders(null, true)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('addDeviceToken', data)));
    }
    getMyProfileData() {
        // tslint:disable-next-line: max-line-length
        return this.http.get(_config_config__WEBPACK_IMPORTED_MODULE_4__["Config"].ApiUrl + 'api/auth/getMyProfileData', this.getApiHeaders(null, true)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getMyProfileData')));
    }
    getBookmarkPost() {
        // tslint:disable-next-line: max-line-length
        return this.http.post(_config_config__WEBPACK_IMPORTED_MODULE_4__["Config"].ApiUrl + 'api/auth/getBookmarkPost', null, this.getApiHeaders(null, true)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getBookmarkPost')));
    }
    commentDisableUpdate(data) {
        return this.http.post(_config_config__WEBPACK_IMPORTED_MODULE_4__["Config"].ApiUrl + 'api/auth/commentDisableUpdate', data, this.getApiHeaders(null, true)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('commentDisableUpdate')));
    }
    videoPost(data) {
        return this.http.post(_config_config__WEBPACK_IMPORTED_MODULE_4__["Config"].ApiUrl + 'api/auth/videoData', data, this.getApiHeaders(null, true)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('videoPost')));
    }
    getNotificationControl() {
        return this.http.post(_config_config__WEBPACK_IMPORTED_MODULE_4__["Config"].ApiUrl + 'api/auth/getNotificationControl', null, this.getApiHeaders(null, true)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getNotificationControl')));
    }
    setNotificationControl(data) {
        return this.http.post(_config_config__WEBPACK_IMPORTED_MODULE_4__["Config"].ApiUrl + 'api/auth/setNotificationControl', data, this.getApiHeaders(null, true)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('setNotificationControl', data)));
    }
    uploadPic(formData) {
        return this.http.post(_config_config__WEBPACK_IMPORTED_MODULE_4__["Config"].ApiUrl + 'api/auth/uploadBgPic', formData, this.getApiHeaders(null, true)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('uploadPic', formData)));
    }
    userIndentityVerify(formData) {
        return this.http.post(_config_config__WEBPACK_IMPORTED_MODULE_4__["Config"].ApiUrl + 'api/auth/userIndentityVerify', formData, this.getApiHeaders(null, true)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('userindentityverify', formData)));
    }
    trilloRecordUpdate() {
        return this.http.post(_config_config__WEBPACK_IMPORTED_MODULE_4__["Config"].ApiUrl + 'api/auth/trilloRecordUpdate', null, this.getApiHeaders(null, true)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('trilloRecordUpdate', null)));
    }
    getCountryCodeApi() {
        return this.http.post(_config_config__WEBPACK_IMPORTED_MODULE_4__["Config"].ApiUrl + 'api/auth/truliooCountryCode', null, this.getApiHeaders(null, true)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getCountryCodeApi')));
    }
};
SettingsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _http_error_handler_service__WEBPACK_IMPORTED_MODULE_5__["HttpErrorHandlerService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] }
];
SettingsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SettingsService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\newapp\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map