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
	return __webpack_require__.e(ids[1]).then(function() {
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
        path: 'chat',
        loadChildren: () => __webpack_require__.e(/*! import() | chat-chat-module */ "chat-chat-module").then(__webpack_require__.bind(null, /*! ./chat/chat.module */ "./src/app/chat/chat.module.ts")).then(m => m.ChatPageModule)
    },
    {
        path: 'groups',
        loadChildren: () => __webpack_require__.e(/*! import() | groups-groups-module */ "groups-groups-module").then(__webpack_require__.bind(null, /*! ./groups/groups.module */ "./src/app/groups/groups.module.ts")).then(m => m.GroupsPageModule)
    },
    {
        path: 'circle',
        loadChildren: () => __webpack_require__.e(/*! import() | circle-circle-module */ "circle-circle-module").then(__webpack_require__.bind(null, /*! ./circle/circle.module */ "./src/app/circle/circle.module.ts")).then(m => m.CirclePageModule)
    },
    {
        path: 'requests',
        loadChildren: () => __webpack_require__.e(/*! import() | requests-requests-module */ "requests-requests-module").then(__webpack_require__.bind(null, /*! ./requests/requests.module */ "./src/app/requests/requests.module.ts")).then(m => m.RequestsPageModule)
    },
    {
        path: 'status',
        loadChildren: () => __webpack_require__.e(/*! import() | status-status-module */ "status-status-module").then(__webpack_require__.bind(null, /*! ./status/status.module */ "./src/app/status/status.module.ts")).then(m => m.StatusPageModule)
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
        loadChildren: () => __webpack_require__.e(/*! import() | mycontact-mycontact-module */ "mycontact-mycontact-module").then(__webpack_require__.bind(null, /*! ./mycontact/mycontact.module */ "./src/app/mycontact/mycontact.module.ts")).then(m => m.MycontactPageModule)
    },
    {
        path: 'addgroup',
        loadChildren: () => __webpack_require__.e(/*! import() | addgroup-addgroup-module */ "addgroup-addgroup-module").then(__webpack_require__.bind(null, /*! ./addgroup/addgroup.module */ "./src/app/addgroup/addgroup.module.ts")).then(m => m.AddgroupPageModule)
    },
    {
        path: 'addcircle',
        loadChildren: () => __webpack_require__.e(/*! import() | addcircle-addcircle-module */ "addcircle-addcircle-module").then(__webpack_require__.bind(null, /*! ./addcircle/addcircle.module */ "./src/app/addcircle/addcircle.module.ts")).then(m => m.AddcirclePageModule)
    }
    // {
    //   path: 'home',
    //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
    // },
    // {
    //   path: '',
    //   redirectTo: 'login',
    //   pathMatch: 'full'
    // },
    // {
    //   path: 'signup',
    //   loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
    // },
    // {
    //   path: 'login',
    //   loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
    // },
    // {
    //   path: 'forgot',
    //   loadChildren: () => import('./forgot/forgot.module').then( m => m.ForgotPageModule)
    // },
    // {
    //   path: 'verify',
    //   loadChildren: () => import('./verify/verify.module').then( m => m.VerifyPageModule)
    // },
    // {
    //   path: 'edit-profile',
    //   loadChildren: () => import('./edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
    // },
    // {
    //   path: 'profile',
    //   loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
    // },
    // {
    //   path: 'menu',
    //   loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
    // },
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
/* harmony default export */ __webpack_exports__["default"] = (".tabs .tabbar {\n  background: #fff;\n  padding: 0px 0px 0;\n  border: 0px;\n  border-top: 1px solid #e1e1e1;\n}\n.tabs .tabbar .tab-button-text {\n  text-transform: uppercase;\n  font-size: 10px;\n  margin-bottom: 4px !important;\n  margin-top: 3px !important;\n}\n.show-tabbar .tab-button {\n  background-repeat: no-repeat;\n  background-position: center 8px;\n  background-size: 25px;\n  padding-top: 0px !important;\n}\n.tab-button .tab-button-icon {\n  opacity: 0;\n  margin-top: 0px !important;\n}\n.tabbar span {\n  margin-top: 32px;\n}\n.tab-button:nth-child(1) {\n  background-image: url(/assets/imgs/footer/chat.png);\n  background-size: 28px;\n}\n.tab-button:nth-child(2) {\n  background-image: url(/assets/imgs/footer/media.png);\n  background-size: 28px;\n}\n.tab-button:nth-child(3) {\n  background-image: url(/assets/imgs/footer/wallet.png);\n  background-size: 28px;\n}\n.tab-button:nth-child(4) {\n  background-image: url(/assets/imgs/footer/email.png);\n  background-size: 28px;\n}\n.tab-button:nth-child(5) {\n  background-image: url(/assets/imgs/footer/more.png);\n  background-size: 28px;\n}\n.tab-button[aria-selected=true]:nth-child(1) {\n  background-image: url(/assets/imgs/footer/chat-active.png);\n}\n.tab-button[aria-selected=true]:nth-child(2) {\n  background-image: url(/assets/imgs/footer/media-active.png);\n}\n.tab-button[aria-selected=true]:nth-child(3) {\n  background-image: url(/assets/imgs/footer/wallet-active.png);\n}\n.tab-button[aria-selected=true]:nth-child(4) {\n  background-image: url(/assets/imgs/footer/email-active.png);\n}\n.tab-button[aria-selected=true]:nth-child(5) {\n  background-image: url(/assets/imgs/footer/more-active.png);\n}\nion-menu .content {\n  background-image: url('background2.png') !important;\n}\nion-menu .content .item {\n  background: transparent;\n}\n.avtar_img img {\n  height: 100px;\n  width: 100px;\n  border-radius: 50%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.avtar_img {\n  text-align: center;\n  margin: 40px;\n}\n.menu-btn button {\n  color: #fff;\n}\n.menu-btn button img {\n  width: 22px;\n  margin-right: 15px;\n}\n.menu-btn ion-label {\n  display: flex;\n}\n.bottom_img {\n  padding: 20px;\n}\n.action-sheet-ios .action-sheet-button {\n  margin: 0;\n  padding: 16px;\n  min-height: auto;\n  border-bottom: 0.55px solid #d6d6da;\n  font-size: 15px;\n  color: #000;\n  background: transparent;\n}\n.action-sheet-ios .action-sheet-selected {\n  font-weight: bold;\n  background: #fff;\n  color: #fe6e4a !important;\n}\n.tabs .tabbar {\n  height: 60px;\n}\n.avtar_menu {\n  min-width: 76px !important;\n  min-height: 76px !important;\n}\n.avtar_menu img {\n  border-radius: 50%;\n  overflow: hidden;\n  width: 76px !important;\n  height: 76px !important;\n}\n.avtar_menu .list_menu.list {\n  margin-bottom: 10px;\n  border-bottom: 1px solid #ffffff45 !important;\n}\n.tab-button-text {\n  position: absolute;\n  top: 0;\n  right: 17px;\n  background: #fe6e4a;\n  border-radius: 20px;\n  color: #fff;\n  padding: 2px;\n  font-size: 11px !important;\n  max-height: 17px !important;\n  min-width: 17px;\n}\n.tab-button {\n  max-width: 80px !important;\n}\n.toolbar-background {\n  background-color: transparent !important;\n}\n.moremodel .modal-wrapper {\n  -webkit-animation: fadein 0.5s;\n          animation: fadein 0.5s;\n  transition: ease-in-out 0.5s;\n  transform: translatey(0%) !important;\n}\n.moremodel ion-backdrop {\n  visibility: visible !important;\n  z-index: 0 !important;\n}\n.wallet_p {\n  color: #fff !important;\n  display: flex;\n  align-items: center;\n}\n.registerAlert .alert-head .alert-sub-title {\n  text-align: center;\n  font-size: 22px;\n}\n.registerAlert .alert-title > div {\n  text-align: center;\n}\n.registerAlert .alert-title > div img {\n  display: inline-block;\n  height: 70px;\n}\n.registerAlert .alert-message {\n  font-size: 18px;\n  text-align: center;\n}\n.registerAlert .alert-button-group .alert-button {\n  text-align: center;\n  background: #fe6e4a;\n  color: white;\n  width: 50px;\n}\n.registerAlert .alert-button-group .alert-button span {\n  justify-content: center !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtBQUFSO0FBRUk7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0FBQVI7QUFJQTtFQUNJLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0FBREo7QUFJQTtFQUNJLFVBQUE7RUFDQSwwQkFBQTtBQURKO0FBS0k7RUFDSSxnQkFBQTtBQUZSO0FBT0k7RUFDSSxtREFBQTtFQUNBLHFCQUFBO0FBSlI7QUFNSTtFQUNJLG9EQUFBO0VBQ0EscUJBQUE7QUFKUjtBQU1JO0VBQ0kscURBQUE7RUFDQSxxQkFBQTtBQUpSO0FBTUk7RUFDSSxvREFBQTtFQUNBLHFCQUFBO0FBSlI7QUFNSTtFQUNJLG1EQUFBO0VBQ0EscUJBQUE7QUFKUjtBQVNJO0VBQ0ksMERBQUE7QUFOUjtBQVFJO0VBQ0ksMkRBQUE7QUFOUjtBQVFJO0VBQ0ksNERBQUE7QUFOUjtBQVFJO0VBQ0ksMkRBQUE7QUFOUjtBQVNJO0VBQ0ksMERBQUE7QUFQUjtBQVlBO0VBQ0ksbURBQUE7QUFUSjtBQVlBO0VBQ0ksdUJBQUE7QUFUSjtBQVlBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUFUSjtBQVlBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FBVEo7QUFZQTtFQUNJLFdBQUE7QUFUSjtBQVlBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FBVEo7QUFZQTtFQUNJLGFBQUE7QUFUSjtBQVlBO0VBQ0ksYUFBQTtBQVRKO0FBWUE7RUFDSSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0FBVEo7QUFZQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQVRKO0FBWUE7RUFDSSxZQUFBO0FBVEo7QUFZQTtFQUNJLDBCQUFBO0VBQ0EsMkJBQUE7QUFUSjtBQVVJO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFSUjtBQVVJO0VBQ0ksbUJBQUE7RUFDQSw2Q0FBQTtBQVJSO0FBWUE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7QUFUSjtBQVlBO0VBQ0ksMEJBQUE7QUFUSjtBQW9CQTtFQUNJLHdDQUFBO0FBakJKO0FBcUJJO0VBRUksOEJBQUE7VUFBQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0Esb0NBQUE7QUFuQlI7QUF3Qkk7RUFDSSw4QkFBQTtFQUNBLHFCQUFBO0FBdEJSO0FBMEJBO0VBQ0ksc0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUF2Qko7QUEyQ0k7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUF4Q1I7QUEyQ1E7RUFDSSxrQkFBQTtBQXpDWjtBQTBDWTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtBQXhDaEI7QUE0Q0k7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUExQ1I7QUE2Q1E7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUEzQ1o7QUE0Q1k7RUFDSSxrQ0FBQTtBQTFDaEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFicyB7XHJcbiAgICAudGFiYmFyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCAwcHggMDtcclxuICAgICAgICBib3JkZXI6IDBweDtcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2UxZTFlMTtcclxuICAgIH1cclxuICAgIC50YWJiYXIgLnRhYi1idXR0b24tdGV4dCB7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zaG93LXRhYmJhciAudGFiLWJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIDhweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMjVweDtcclxuICAgIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRhYi1idXR0b24gLnRhYi1idXR0b24taWNvbiB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50YWJiYXIge1xyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzJweDtcclxuICAgIH1cclxufVxyXG5cclxuLnRhYi1idXR0b24ge1xyXG4gICAgJjpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltZ3MvZm9vdGVyL2NoYXQucG5nKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDI4cHg7XHJcbiAgICB9XHJcbiAgICAmOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1ncy9mb290ZXIvbWVkaWEucG5nKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDI4cHg7XHJcbiAgICB9XHJcbiAgICAmOm50aC1jaGlsZCgzKSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1ncy9mb290ZXIvd2FsbGV0LnBuZyk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAyOHB4O1xyXG4gICAgfVxyXG4gICAgJjpudGgtY2hpbGQoNCkge1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltZ3MvZm9vdGVyL2VtYWlsLnBuZyk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAyOHB4O1xyXG4gICAgfVxyXG4gICAgJjpudGgtY2hpbGQoNSkge1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltZ3MvZm9vdGVyL21vcmUucG5nKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDI4cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi50YWItYnV0dG9uW2FyaWEtc2VsZWN0ZWQ9XCJ0cnVlXCJdIHtcclxuICAgICY6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWdzL2Zvb3Rlci9jaGF0LWFjdGl2ZS5wbmcpO1xyXG4gICAgfVxyXG4gICAgJjpudGgtY2hpbGQoMikge1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltZ3MvZm9vdGVyL21lZGlhLWFjdGl2ZS5wbmcpO1xyXG4gICAgfVxyXG4gICAgJjpudGgtY2hpbGQoMykge1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltZ3MvZm9vdGVyL3dhbGxldC1hY3RpdmUucG5nKTtcclxuICAgIH1cclxuICAgICY6bnRoLWNoaWxkKDQpIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWdzL2Zvb3Rlci9lbWFpbC1hY3RpdmUucG5nKTtcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kLXNpemU6IDMwcHg7XHJcbiAgICB9XHJcbiAgICAmOm50aC1jaGlsZCg1KSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1ncy9mb290ZXIvbW9yZS1hY3RpdmUucG5nKTtcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kLXNpemU6IDMwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi1tZW51IC5jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vYXNzZXRzL2ltZ3MvbWVudS9iYWNrZ3JvdW5kMi5wbmcnKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tbWVudSAuY29udGVudCAuaXRlbSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmF2dGFyX2ltZyBpbWcge1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcblxyXG4uYXZ0YXJfaW1nIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogNDBweDtcclxufVxyXG5cclxuLm1lbnUtYnRuIGJ1dHRvbiB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLm1lbnUtYnRuIGJ1dHRvbiBpbWcge1xyXG4gICAgd2lkdGg6IDIycHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbi5tZW51LWJ0biBpb24tbGFiZWwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmJvdHRvbV9pbWcge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLmFjdGlvbi1zaGVldC1pb3MgLmFjdGlvbi1zaGVldC1idXR0b24ge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIG1pbi1oZWlnaHQ6IGF1dG87XHJcbiAgICBib3JkZXItYm90dG9tOiAwLjU1cHggc29saWQgI2Q2ZDZkYTtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5hY3Rpb24tc2hlZXQtaW9zIC5hY3Rpb24tc2hlZXQtc2VsZWN0ZWQge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgY29sb3I6ICNmZTZlNGEgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRhYnMgLnRhYmJhciB7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbn1cclxuXHJcbi5hdnRhcl9tZW51IHtcclxuICAgIG1pbi13aWR0aDogNzZweCAhaW1wb3J0YW50O1xyXG4gICAgbWluLWhlaWdodDogNzZweCAhaW1wb3J0YW50O1xyXG4gICAgaW1nIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB3aWR0aDogNzZweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGhlaWdodDogNzZweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmxpc3RfbWVudS5saXN0IHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmZmZmNDUgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuLnRhYi1idXR0b24tdGV4dCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMTdweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZTZlNGE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbiAgICBmb250LXNpemU6IDExcHggIWltcG9ydGFudDtcclxuICAgIG1heC1oZWlnaHQ6IDE3cHggIWltcG9ydGFudDtcclxuICAgIG1pbi13aWR0aDogMTdweDtcclxufVxyXG5cclxuLnRhYi1idXR0b24ge1xyXG4gICAgbWF4LXdpZHRoOiA4MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8vIC5tb2RhbC13cmFwcGVyIHtcclxuLy8gICAgIC5jb250ZW50IHtcclxuLy8gICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMCAhaW1wb3J0YW50O1xyXG4vLyAgICAgfVxyXG4vLyAgICAgLmNvbnRlbnQtaW9zIHtcclxuLy8gICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMCAhaW1wb3J0YW50IDtcclxuLy8gICAgIH1cclxuLy8gfVxyXG4udG9vbGJhci1iYWNrZ3JvdW5kIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tb3JlbW9kZWwge1xyXG4gICAgLm1vZGFsLXdyYXBwZXIge1xyXG4gICAgICAgIC8vIGJhY2tncm91bmQ6ICMwMDAwMDAzZDtcclxuICAgICAgICBhbmltYXRpb246IGZhZGVpbiAwLjVzO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDAuNXM7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDAlKSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLm1vZGFsLXdyYXBwZXIge1xyXG4gICAgICAgIC8vIHBvaW50ZXItZXZlbnRzOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBpb24tYmFja2Ryb3Age1xyXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcclxuICAgICAgICB6LWluZGV4OiAwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi53YWxsZXRfcCB7XHJcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8vIEBrZXlmcmFtZXMgZmFkZWluIHtcclxuLy8gICAgIGZyb20ge1xyXG4vLyAgICAgICAgIG9wYWNpdHk6MDtcclxuLy8gICAgIH1cclxuLy8gICAgIHRvIHtcclxuLy8gICAgICAgICBvcGFjaXR5OjE7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuLy8gQGtleWZyYW1lcyBmYWRlb3V0IHtcclxuLy8gICAgIGZyb20ge1xyXG4vLyAgICAgICAgIG9wYWNpdHk6MTtcclxuLy8gICAgIH1cclxuLy8gICAgIHRvIHtcclxuLy8gICAgICAgICBvcGFjaXR5OjA7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuLnJlZ2lzdGVyQWxlcnQge1xyXG4gICAgLmFsZXJ0LWhlYWQgLmFsZXJ0LXN1Yi10aXRsZSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIH1cclxuICAgIC5hbGVydC10aXRsZSB7XHJcbiAgICAgICAgJj5kaXYge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYWxlcnQtbWVzc2FnZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5hbGVydC1idXR0b24tZ3JvdXAge1xyXG4gICAgICAgIC5hbGVydC1idXR0b24ge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZTZlNGE7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */");

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
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");








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
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] }
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
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");












let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["IonicStorageModule"].forRoot()
        ],
        providers: [
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"],
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"],
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"] }, _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_11__["Camera"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




// import { Config } from ".././app/config/config";

let AuthService = class AuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.localStorageUserKey = "JAJSESSION";
        this.localStorageUserTypeKey = "JAJSESSION";
        // localStorageNotiCount="DRIVERNOTICOUNT";
        this.onUserDetailChanged = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.localStorageNotiData = "JAJNOTIDATA";
        //this.handleError= httpErrorHandler.createHandleError('TasksService')
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
        let user = JSON.parse(localStorage.getItem(this.localStorageUserKey));
        return user.userDetails;
    }
    getCurrentUserId() {
        let user = JSON.parse(localStorage.getItem(this.localStorageUserKey));
        return user.userDetails.id;
    }
    updateUserDetails(details) {
        console.log(details);
        console.log(this.localStorageUserKey, details);
        let session = JSON.parse(localStorage.getItem(this.localStorageUserKey));
        if (session) {
            session.userDetails = details;
        }
        else {
            session = {
                "userDetails": details,
                "language": "en"
            };
        }
        localStorage.setItem(this.localStorageUserKey, JSON.stringify(session));
        //this.onUserDetailChanged.next(details);
    }
    removeUserDetails() {
        let session = JSON.parse(localStorage.getItem(this.localStorageUserKey));
        delete session["userDetails"];
        localStorage.setItem(this.localStorageUserKey, JSON.stringify(session));
    }
    removeAllSessions() {
        localStorage.removeItem(this.localStorageUserKey);
    }
    isUserLoggedIn() {
        let user = JSON.parse(localStorage.getItem(this.localStorageUserKey));
        if (user) {
            if (user.userDetails) {
                return true;
            }
            else {
                return false;
            }
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
    postData(data, url) {
        let formdata = this.generateFormData(data);
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Accept": "application/json" });
        return this.http.post('https://jajoj.threethree.in/api/' + url, formdata, {});
    }
    get(data, url) {
        let params = this.getUrlFromData(data);
        return this.http.get('https://jajoj.threethree.in/api/' + url, { params: params });
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



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


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map