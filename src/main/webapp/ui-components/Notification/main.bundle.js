webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n        <!--<app-emailtemplate></app-emailtemplate>-->\r\n        <!--<app-loader></app-loader>-->\r\n        <!--<app-animate></app-animate>-->\r\n<!--      <app-animate></app-animate>\r\n      <app-notificationmodule></app-notificationmodule>\r\n      <app-tooltip></app-tooltip>-->\r\n      <!--<app-notification></app-notification>-->\r\n     <!-- <h3>I'm in the AppComponent!</h3>\r\n      <hr>-->\r\n      <!--<app-servers></app-servers>-->\r\n      <!--<div app-servers></div>-->\r\n      <!--<div class=\"app-servers\"></div>-->\r\n<!--      <app-advisor></app-advisor>\r\n      <hr>-->\r\n      <!--<app-notification></app-notification>-->\r\n<!--      <hr>\r\n      <app-chat></app-chat>\r\n      <hr>\r\n      <app-animate></app-animate>\r\n      <hr>\r\n      <app-crop></app-crop>\r\n      <hr>\r\n      <app-emailtemplate></app-emailtemplate>\r\n      <hr>\r\n      <app-socialmedia></app-socialmedia>\r\n      <hr>\r\n      <app-typography></app-typography>\r\n      <hr>\r\n      <app-tooltip></app-tooltip>\r\n      <hr>\r\n        { path: 'Tooltip-component', component: TooltipComponent },\r\n  { path: 'Advisor-component', component: AdvisorComponent },\r\n  { path: 'Animate', component: AnimateComponent },\r\n  { path: 'Chat-component', component: ChatComponent },\r\n  { path: 'Crop-component', component: CropComponent },\r\n  { path: 'Email-component', component: EmailtemplateComponent },\r\n  { path: 'Loader-component', component: LoaderComponent },\r\n  { path: 'Notification-component', component: NotificationComponent },\r\n  { path: 'Notification-Module', component: NotificationmoduleComponent },\r\n  { path: 'Typography-component', component: TypographyComponent },\r\n      <app-notificationmodule></app-notificationmodule>-->\r\n        <!--<app-notificationmodule></app-notificationmodule>\r\n        <app-emailtemplate></app-emailtemplate>-->\r\n        <!--<app-socialmedia></app-socialmedia>-->\r\n        <!--<app-notification></app-notification>-->\r\n        <!--<ul>\r\n            <li><a [routerLink] = \"['/Tooltip-component']\">Tooltip Component</a></li>\r\n            <li><a [routerLink] = \"['/Advisor-component']\">Advisor-component</a></li>\r\n            <li><a [routerLink] = \"['/Animate']\">Animate</a></li>\r\n            <li><a [routerLink] = \"['/Chat-component']\">Chat-component</a></li>\r\n            <li><a [routerLink] = \"['/Crop-component']\">Crop-component</a></li>\r\n            <li><a [routerLink] = \"['/Email-component']\">Email-component</a></li>\r\n            <li><a [routerLink] = \"['/Loader-component']\">Loader-component</a></li>\r\n            <li><a [routerLink] = \"['/Notification-component']\">Notification Component</a></li>\r\n            <li><a [routerLink] = \"['/Notification-Module']\">Notification Module Component</a></li>\r\n            <li><a [routerLink] = \"['/Typography-component']\">Typography Component</a></li>\r\n        </ul>\r\n        <router-outlet></router-outlet>-->\r\n        <app-notification></app-notification>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            // styleUrls: ['./app.component.css']
            styles: ["\n    h3 {\n      color: dodgerblue;\n    }\n  "]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_file_input__ = __webpack_require__("../../../../ng2-file-input/dist/ng2-file-input.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__notification_notification_component__ = __webpack_require__("../../../../../src/app/notification/notification.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var appRoutes = [
    { path: 'Notification-component', component: __WEBPACK_IMPORTED_MODULE_8__notification_notification_component__["a" /* NotificationComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__notification_notification_component__["a" /* NotificationComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_pagination__["a" /* NgxPaginationModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_6_ng2_file_input__["a" /* Ng2FileInputModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/notification/alertnotification.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertNotification; });
var AlertNotification = (function () {
    function AlertNotification(name, classes, alertclasses, desc, imagePath, time, read) {
        this.title = name;
        this.classes = classes;
        this.alertclasses = alertclasses;
        this.description = desc;
        this.imagePath = imagePath;
        this.time = time;
        this.read = read;
    }
    return AlertNotification;
}());



/***/ }),

/***/ "../../../../../src/app/notification/alertposition.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertPosition; });
var AlertPosition = (function () {
    function AlertPosition(name, classes, alertClasses, desc, imagePath, time, read) {
        this.title = name;
        this.classes = classes;
        this.alertClasses = alertClasses;
        this.description = desc;
        this.imagePath = imagePath;
        this.time = time;
        this.read = read;
    }
    return AlertPosition;
}());



/***/ }),

/***/ "../../../../../src/app/notification/dismissalert.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DismissAlert; });
var DismissAlert = (function () {
    function DismissAlert(name, classes, alertClasses, desc, imagePath, time, read) {
        this.title = name;
        this.classes = classes;
        this.alertClasses = alertClasses;
        this.description = desc;
        this.imagePath = imagePath;
        this.time = time;
        this.read = read;
    }
    return DismissAlert;
}());



/***/ }),

/***/ "../../../../../src/app/notification/notification.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".border-lightblue {\r\n  border: 1px solid #f2f2f2;\r\n}\r\n.white-box{\r\n  box-shadow: none;\r\n  border-radius: 0;\r\n  padding: 10px;\r\n}\r\n.lightblue{\r\nbackground: #f2f2f2;\r\n}\r\n.content-heading {\r\npadding: 10px;\r\n}\r\n.content-heading .h5.white-heading{\r\ncolor: #3e6174;\r\nmargin: 0;\r\nfont-size: 16px;\r\nfont-weight: 700;\r\n}\r\n.main-component-contents{\r\npadding: 15px;\r\n}\r\n\r\n.mar-top-15{\r\nmargin-top: 15px;\r\n}\r\n.btn-info {\r\ncolor: #fff;\r\nbackground-color: #5bc0de;\r\nborder-color: #5bc0de;\r\n}\r\n.display-none.display-block .alert-info.myadmin-alert-top-right {\r\nbackground: #00c292;\r\n}\r\n\r\n.display-none.display-block .alert-info.myadmin-alert-top-left {\r\nborder: 5px solid #5bc0de;\r\n}\r\n\r\n.btn-warning, .btn-warning:active, .show>.btn-warning.dropdown-toggle, .alert-info.myadmin-alert-top-right {\r\ncolor: #fff;\r\nbackground-color: #ec971f;\r\nbackground-image: none;\r\nborder-color: #eb9316;\r\ntransition: background 5s ease;\r\n}\r\n.btn-success, .btn-success:active, .show>.btn-success.dropdown-toggle, .alert-info.myadmin-alert-top-left {\r\ncolor: #fff;\r\nbackground-color: #449d44;\r\nbackground-image: none;\r\nborder: 1px solid #419641;\r\ntransition: border 5s ease;\r\n}\r\n.btn-danger, .btn-danger:active, .show>.btn-danger.dropdown-toggle, .alert-info.myadmin-alert-bottom-right {\r\ncolor: #fff;\r\nbackground-color: #c9302c;\r\nbackground-image: none;\r\nborder-color: #c12e2a;\r\n}\r\n.alert-custom, .alert-info.myadmin-alert-bottom-left {\r\nbackground: #ff6849;\r\ncolor: #fff;\r\nborder-color: #ff6849\r\n}\r\n\r\n.alert-inverse {\r\nbackground: #4c5667;\r\ncolor: #fff;\r\nborder-color: #4c5667\r\n}\r\n.alert.alert-success {\r\nborder-left: 30px solid #fec107;\r\n}\r\n.alert.alert-info.alert-one-info{\r\nborder: 1px solid #00c292;\r\nborder-right: 30px solid #00c292;\r\nbackground: none;\r\ncolor: #333;\r\n}\r\n.alert-warning-info{\r\nposition: relative;\r\ntext-align: center;\r\n}\r\n.alert-warning-info:after {\r\ncontent:\"\";\r\nposition: absolute;\r\nleft: 0;\r\ntop: 0;\r\nwidth: 0;\r\nheight: 0;\r\nborder-style: solid;\r\nborder-width: 0 50px 50px 0;\r\nborder-color: transparent transparent #03a9f3 transparent;\r\nz-index:99;\r\n}\r\n\r\n.alert.alert-danger.alert-danger-info{\r\nborder: 5px solid #fb9678;\r\nbackground: #fff;\r\nborder-bottom: 10px solid #f1c8bb;\r\ncolor: #333;\r\nborder-left: 10px solid #ffdfd6;\r\n}\r\n\r\n.alert-success {\r\nbackground: #00c292;\r\ncolor: #fff;\r\nborder-color: #00c292\r\n}\r\n\r\n.alert-dark {\r\nbackground: #686868;\r\ncolor: #fff;\r\nborder-color: #686868\r\n}\r\n\r\n.alert-warning {\r\nbackground: #fec107;\r\ncolor: #fff;\r\nborder-color: #fec107\r\n}\r\n\r\n.alert-danger {\r\nbackground: #fb9678;\r\ncolor: #fff;\r\nborder-color: #fb9678\r\n}\r\n\r\n.alert {\r\nborder-radius: 2px;\r\n}\r\n\r\n.alert-info {\r\nbackground: #03a9f3;\r\ncolor: #fff;\r\nborder-color: #03a9f3\r\n}\r\n\r\n.alert-info .closed,\r\n.alert-info a.closed:hover {\r\ncolor: inherit\r\n}\r\n\r\n.myadmin-alert {\r\nborder-radius: 0;\r\ncolor: #fff;\r\npadding: 12px 30px 12px 12px;\r\nposition: relative;\r\ntext-align: left\r\n}\r\n\r\n.myadmin-alert a {\r\ncolor: inherit;\r\nfont-weight: 600;\r\ntext-decoration: underline\r\n}\r\n\r\n.myadmin-alert h4 {\r\ncolor: inherit;\r\nfont-size: 14px;\r\nfont-weight: 600;\r\nline-height: normal;\r\nmargin: 0\r\n}\r\n\r\n.myadmin-alert .img {\r\nborder-radius: 3px;\r\nheight: 40px;\r\nleft: 12px;\r\nposition: absolute;\r\ntop: 12px;\r\nwidth: 40px\r\n}\r\n\r\n.myadmin-alert-img {\r\nmin-height: 64px;\r\npadding-left: 65px\r\n}\r\n\r\n.myadmin-alert-icon {\r\npadding-left: 20px\r\n}\r\n\r\n.myadmin-alert-icon i {\r\npadding-right: 10px\r\n}\r\n\r\n.myadmin-alert .closed {\r\ncolor: rgba(255, 255, 255, .5);\r\nfont-size: 20px;\r\nfont-weight: 700;\r\npadding: 4px;\r\nposition: absolute;\r\nright: 3px;\r\ntext-decoration: none;\r\ntop: 0\r\n}\r\n\r\n.myadmin-alert .closed:hover {\r\ncolor: #fff\r\n}\r\n\r\n.myadmin-alert-click {\r\ncursor: pointer;\r\npadding-right: 12px\r\n}\r\n\r\n.myadmin-alert .primary {\r\nbackground: rgba(0, 0, 0, .4);\r\nborder: none;\r\nborder-radius: 3px;\r\ncolor: inherit;\r\noutline: 0;\r\npadding: 4px 10px\r\n}\r\n\r\n.myadmin-alert .cancel {\r\nbackground: rgba(255, 255, 255, .4);\r\nborder: none;\r\nborder-radius: 3px;\r\ncolor: rgba(0, 0, 0, .8);\r\noutline: 0;\r\npadding: 4px 10px\r\n}\r\n\r\n.myadmin-alert .cancel:hover,\r\n.myadmin-alert .primary:hover {\r\nopacity: .9\r\n}\r\n\r\n.myadmin-alert-bottom,\r\n.myadmin-alert-bottom-left,\r\n.myadmin-alert-bottom-right,\r\n.myadmin-alert-fullscreen,\r\n.myadmin-alert-top,\r\n.myadmin-alert-top-left,\r\n.myadmin-alert-top-right {\r\nbox-shadow: 2px 2px 2px rgba(0, 0, 0, .1);\r\nposition: fixed;\r\nz-index: 1000\r\n}\r\n\r\n.myadmin-alert-top {\r\nleft: 0;\r\nright: 0;\r\ntop: 0\r\n}\r\n\r\n.myadmin-alert-bottom {\r\nbottom: 0;\r\nleft: 0;\r\nright: 0\r\n}\r\n\r\n.myadmin-alert-top-left {\r\nleft: 20px;\r\ntop: 20px\r\n}\r\n\r\n.myadmin-alert-top-right {\r\nright: 20px;\r\ntop: 20px\r\n}\r\n\r\n.myadmin-alert-bottom-left {\r\nbottom: 20px;\r\nleft: 20px\r\n}\r\n\r\n.myadmin-alert-bottom-right {\r\nbottom: 20px;\r\nright: 20px\r\n}\r\n\r\n.newBox{\r\ndisplay: inline-block;\r\nfloat: left;\r\nwidth: 25%;\r\n}\r\n.myadmin-alert-fullsize {\r\nleft: 50%;\r\nmargin: -20px;\r\ntop: 50%\r\n}\r\n.alert-dismissable .close, .alert-dismissible .close {\r\nposition: relative;\r\nbackground-color: transparent;\r\ncolor: #fff;\r\nborder: 0;\r\n}\r\n.close {\r\nfloat: right;\r\nfont-size: 21px;\r\nfont-weight: 700;\r\nline-height: 1;\r\ncolor: #000;\r\ntext-shadow: 0 1px 0 #fff;\r\nopacity: .7;\r\nfilter: alpha(opacity=20);\r\n}\r\n[type=reset], [type=submit], button, html [type=button] {\r\n-webkit-appearance: none;\r\n}\r\n.btn-default.btn-outline {\r\nbackground-color: #fff;\r\n}\r\n.alert {\r\npadding: 15px;\r\nmargin-bottom: 20px;\r\nborder: 1px solid transparent;\r\nborder-radius: 4px;\r\n}\r\n.btn {\r\nfont-size: 14px;\r\npadding: .8rem 1.2rem;\r\n}\r\n.btn {\r\nbox-shadow: 0 1px 4px 0 rgba(0,0,0,.2);\r\n}\r\n.btn-default, .btn-default.disabled {\r\nbackground: #e4e7ea;\r\nborder: 1px solid #e4e7ea;\r\n}\r\n.btn-outline {\r\ncolor: inherit;\r\nbackground-color: transparent;\r\ntransition: all .5s;\r\n}\r\n.btn {\r\nborder-radius: 2px;\r\n}\r\n.btn {\r\ndisplay: inline-block;\r\nfont-weight: 400;\r\nline-height: 1.25;\r\ntext-align: center;\r\nwhite-space: nowrap;\r\nvertical-align: middle;\r\n-webkit-user-select: none;\r\n-moz-user-select: none;\r\n-ms-user-select: none;\r\nuser-select: none;\r\nborder: 1px solid transparent;\r\npadding: .5rem 1rem;\r\nfont-size: 1rem;\r\nborder-radius: .25rem;\r\ntransition: all .2s ease-in-out;\r\n}\r\n\r\n\r\n/* toaster styles */\r\n\r\n.toaster_div{\r\n  display: inline-block;\r\n  float: left;\r\n  margin: 10px;\r\n}\r\n\r\n.toaster{\r\n  visibility: hidden;\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  width: 400px;\r\n  border: 1px solid #fff;\r\n}\r\n\r\n.toaster.display-block{\r\n  visibility: visible;\r\n}\r\n.toaster_box.Info.Message .toaster .toaster-progress{\r\n  height: 0;\r\n}\r\n.toaster_box.Info.Message .toaster{\r\n  background: #00c292;\r\n  color: #fff;\r\n  width: 100%;\r\n  transition: background 2s ease;\r\n}\r\n.toaster_box.Info.Message .toaster.display-block{\r\n  background: #5bc0de;\r\n}\r\n.toaster_box.Warning.Message .toaster{\r\n  background: #ec971f;\r\n  color: #fff;\r\n}\r\n.toaster_box.Success.Message .toaster{\r\n  background: #449d44;\r\n  color: #fff;\r\n}\r\n.toaster_box.Danger.Message .toaster{\r\n  background: #c9302c;\r\n  color: #fff;\r\n}\r\n\r\n.toaster_box{\r\n  position: fixed;\r\n  top: 20px;\r\n  right: 20px;\r\n  z-index: 10;\r\n}\r\n\r\n.toaster_icon{\r\n  width: 30px;\r\n  border-right: 1px solid #fff;\r\n  padding: 15px 30px;\r\n  z-index: 1;\r\n}\r\n.toaster_desc{\r\n  width: 370px;\r\n  padding: 15px 30px;\r\n  z-index: 1;\r\n}\r\n.toaster_box.Success.Message .toaster .toaster-progress{\r\n  height: 70px;\r\n  background: #3c763d;\r\n  transition: width 2s ease;\r\n}\r\n.toaster .toaster-progress{\r\n   width: 0;\r\n  top:0;\r\n  left: 0;\r\n   position: absolute;\r\n   height: 5px;\r\n   background: red;\r\n  transition: width 2.6s ease;\r\n  -webkit-transition: width 2.6s ease;\r\n  -moz-transition: width 2.6s ease;\r\n  -o-transition: width 2.6s ease;\r\n  -ms-transition: width 2.6s ease;\r\n }\r\n\r\n.toaster.display-block .toaster-progress{\r\n  background: #fec107;\r\n  width: 100%;\r\n  z-index: 0;\r\n}\r\n\r\n.alertnotification {\r\n  overflow: hidden;\r\n  min-height: 70px;\r\n}\r\n.display-none{\r\n  visibility: hidden;\r\n  opacity: 0;\r\n  background-color: #adadad;\r\n  /*transition: visibility 0s, opacity 0.5s ease-in-out;*/\r\n  transition: visibility 0s, opacity 0.5s ease-in-out;\r\n}\r\n\r\n.display-none.display-block{\r\n  visibility: visible;\r\n  opacity: 1;\r\n}\r\n.alert.alert-success.alert-dismissable .close{\r\n  background: #333;\r\n  padding: 4px 9px;\r\n  border-radius: 50%;\r\n}\r\n.dismissible_alert .alert{\r\n  position: relative;\r\n}\r\n.dismissible_alert .close{\r\n  position: absolute;\r\n  right: 15px;\r\n  top: 50%;\r\n  margin-top: -15px;\r\n}\r\n.dismissible_alert > div > div{\r\n  height: 52px;\r\n  margin-bottom: 15px;\r\n  transition: height 1s ease;\r\n}\r\n.dismissible_alert > div > div.display-none{\r\n  height: 0;\r\n  margin-bottom: 0;\r\n  transition: height 1s ease;\r\n}\r\n.dismissible_alert .alert.alert-info.alert-dismissable{\r\n  border: 1px solid #ffc104;\r\n  border-right: 60px solid #ffc104;\r\n}\r\n.dismissible_alert .alert.alert-warning.alert-dismissable{\r\n  border: 1px solid #ffc104;\r\n  background-color: #fff;\r\n  color:#333;\r\n}\r\n.dismissible_alert .alert.alert-warning.alert-dismissable .close{\r\n  color: #333;\r\n}\r\n.dismissible_alert .alert.alert-info.alert-dismissable .close{\r\n  margin-right: -45px;\r\n}\r\n.dismissible_alert .close:hover{\r\n  opacity: 1;\r\n}\r\n.show-dismiss-btn{\r\n  display: inline-block;\r\n  padding:10px 25px;\r\n  color: #fff;\r\n  background: #c12e2a;\r\n  margin-bottom: 15px;\r\n  cursor: pointer;\r\n}\r\n.show-dismiss-btn:hover{\r\n  background: #ff6849;\r\n  text-decoration: none;\r\n}\r\n.normal-alerts .alert.alert-danger.alert-danger-info{\r\n  padding: 8px 15px;\r\n}\r\n\r\n.normal-alerts .show .normal-alert{\r\n  height: 52px;\r\n  margin-bottom: 20px;\r\n  transition: height 1s ease;\r\n}\r\n.normal-alerts .normal-alert{\r\n  height: 0;\r\n  overflow: hidden;\r\n  margin-bottom: 0;\r\n  transition: height 1s ease;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/notification/notification.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n\r\n  <!-- /.row -->\r\n\r\n  <!-- /.row -->\r\n\r\n  <!-- .row -->\r\n\r\n  <!-- .row -->\r\n\r\n  <!-- /.row -->\r\n\r\n</div>\r\n\r\n<section class=\"border-lightblue\" style=\"margin: 20px 0;\">\r\n  <div class=\"content-heading lightblue\">\r\n    <h2 class=\"h5 white-heading\">Toaster Alerts</h2>\r\n  </div>\r\n  <div class=\"main-component-contents\">\r\n  <div class=\"component-inner\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12\">\r\n        <p class=\"text-muted m-b-20\">You can use four different alert <code>info, warning, success, and error</code> message.</p>\r\n        <!--<div class=\"button-box\">\r\n          <button (click)=\"onClickBtnInfo()\" class=\"tst1 btn btn-info\">Info Message</button>\r\n          <button class=\"tst2 btn btn-warning\">Warning Message</button>\r\n          <button class=\"tst3 btn btn-success\">Success Message</button>\r\n          <button class=\"tst4 btn btn-danger\">Danger Message</button>\r\n        </div>-->\r\n\r\n        <div class=\"button-box\">\r\n          <div class=\"toaster_div\" *ngFor=\"let toaster of notifications\">\r\n            <button\r\n                    (click)=\"onClickBtnInfo(toaster)\"\r\n                    [ngClass]=\"toaster.classes\">{{toaster.title}}</button>\r\n            <div class=\"toaster_box\" [ngClass]=\"toaster.title\">\r\n              <div class=\"toaster\"  [ngClass]=\"{'display-block' : toaster.read}\">\r\n                <span class=\"toaster-progress\"></span>\r\n                <div class=\"toaster_icon\"><span><i class=\"fa fa-bell\" aria-hidden=\"true\"></i></span></div>\r\n                <div class=\"toaster_desc\">{{ toaster.description }} </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</section>\r\n<section class=\"border-lightblue\" style=\"margin: 20px 0;\">\r\n  <div class=\"content-heading lightblue\">\r\n    <h2 class=\"h5 white-heading\">Alert Full Width</h2>\r\n  </div>\r\n  <div class=\"main-component-contents\">\r\n    <div class=\"component-inner\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n          <div class=\"white-box\">\r\n            <div class=\"alertnotification\">\r\n              <div\r\n                      *ngFor=\"let alertnotification of alertnotifications\"\r\n                      class=\"newBox\"\r\n              >\r\n                <h3 class=\"box-title\"> {{ alertnotification.title }} </h3>\r\n                <button (click)=\"onClickAlertNotification(alertnotification, alertnotifications)\" [ngClass]=\"alertnotification.classes\"> Click Me </button>\r\n                <!-- Start an Alert -->\r\n                <div class=\"display-none\" [ngClass]=\"{'display-block' : alertnotification.read}\">\r\n                  <div [ngClass]=\"alertnotification.alertclasses\"><span *ngIf=\"alertnotification.imagePath\"><img [src]=\"alertnotification.imagePath\" class=\"img\" alt=\"img\" /></span> <i class=\"ti-user\"></i> {{ alertnotification.description }} <a (click)=\"onclose(alertnotification)\" class=\"closed\">×</a> </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- <div class=\"newBox\">\r\n             <h3 class=\"box-title\">Alert Fullwidth top </h3>\r\n             <button id=\"\" class=\"btn btn-default btn-outline showtop\">Alert Top Full width</button>\r\n             &lt;!&ndash; Start an Alert &ndash;&gt;\r\n             <div class=\"myadmin-alert myadmin-alert-icon myadmin-alert-click alert-success myadmin-alert-top alerttop\"> <i class=\"ti-user\"></i> This is an example top alert. You can edit what u wish. <a href=\"#\" class=\"closed\">×</a> </div>\r\n           </div>\r\n           <div class=\"newBox\">\r\n             <h3 class=\"box-title\">Alert Fullwidth Bottom </h3>\r\n             <button class=\"btn btn-default btn-outline showbottom\">Alert Bottom Full width</button>\r\n             &lt;!&ndash; Start an Alert &ndash;&gt;\r\n             <div class=\"myadmin-alert myadmin-alert-icon myadmin-alert-click alert-danger myadmin-alert-bottom alertbottom\"> <i class=\"ti-user\"></i> This is an example top alert. You can edit what u wish. <a href=\"#\" class=\"closed\">×</a> </div>\r\n           </div>\r\n           <div class=\"newBox\">\r\n             <h3 class=\"box-title\">Alert Fullwidth top </h3>\r\n             <button class=\"btn btn-default btn-outline showtop2\">Alert Fullwidth Top with image</button>\r\n             &lt;!&ndash; Start an Alert &ndash;&gt;\r\n             <div class=\"myadmin-alert myadmin-alert-img myadmin-alert-click alert-info myadmin-alert-top alerttop2\">\r\n              <img src=\"assets/images/genu.jpg\" class=\"img\" alt=\"img\"><a href=\"#\" class=\"closed\">×</a>\r\n               <h4>You have a Message!</h4>\r\n               <b>John Doe</b> sent you a message. <a href=\"#\" class=\"closed\">×</a> </div>\r\n           </div>\r\n           <div class=\"newBox\">\r\n             <h3 class=\"box-title\">Alert Fullwidth Bottom with image </h3>\r\n             <button class=\"btn btn-default btn-outline showbottom2\">Alert Bottom Full width</button>\r\n             &lt;!&ndash; Start an Alert &ndash;&gt;\r\n             <div class=\"myadmin-alert myadmin-alert-img myadmin-alert-click alert-warning myadmin-alert-bottom alertbottom2\"> <img src=\"assets/images/genu.jpg\" class=\"img\" alt=\"img\"><a href=\"#\" class=\"closed\">×</a>\r\n               <h4>You have a Message!</h4>\r\n               <b>John Doe</b> sent you a message. <a href=\"#\" class=\"closed\">×</a> </div>\r\n           </div>-->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<section class=\"border-lightblue\" style=\"margin: 20px 0;\">\r\n  <div class=\"content-heading lightblue\">\r\n    <h2 class=\"h5 white-heading\">Alert Half Width</h2>\r\n  </div>\r\n  <div class=\"main-component-contents\">\r\n    <div class=\"component-inner\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n          <div class=\"white-box\">\r\n            <!--<div class=\"row\">\r\n              <div class=\"newBox\">\r\n                <h3 class=\"box-title\">Alert Top Right </h3>\r\n                <button id=\"showtopright\" class=\"btn btn-default btn-outline\">Show Top Right</button>\r\n                &lt;!&ndash; Start an Alert &ndash;&gt;\r\n                <div id=\"alerttopright\" class=\"myadmin-alert myadmin-alert-img alert-info myadmin-alert-top-right\"> <img src=\"assets/images/genu.jpg\" class=\"img\" alt=\"img\"><a href=\"#\" class=\"closed\">×</a>\r\n                  <h4>You have a Message!</h4>\r\n                  <b>John Doe</b> sent you a message.</div>\r\n              </div>\r\n              <div class=\"newBox\">\r\n                <h3 class=\"box-title\">Alert Top Left</h3>\r\n                <button id=\"showtopleft\" class=\"btn btn-default btn-outline\">Show Top Left</button>\r\n                &lt;!&ndash; Start an Alert &ndash;&gt;\r\n                <div id=\"alerttopleft\" class=\"myadmin-alert myadmin-alert-img alert-info myadmin-alert-top-left\"> <img src=\"assets/images/genu.jpg\" class=\"img\" alt=\"img\"><a href=\"#\" class=\"closed\">×</a>\r\n                  <h4>You have a Message!</h4>\r\n                  <b>John Doe</b> sent you a message.</div>\r\n              </div>\r\n              <div class=\"newBox\">\r\n                <h3 class=\"box-title\">Alert Bottom Left </h3>\r\n                <button id=\"showbottomleft\" class=\"btn btn-default btn-outline\">Show Bottom Left</button>\r\n                &lt;!&ndash; Start an Alert &ndash;&gt;\r\n                <div id=\"alertbottomleft\" class=\"myadmin-alert myadmin-alert-img alert-info myadmin-alert-bottom-left\"> <img src=\"assets/images/genu.jpg\" class=\"img\" alt=\"img\"><a href=\"#\" class=\"closed\">×</a>\r\n                  <h4>You have a Message!</h4>\r\n                  <b>John Doe</b> sent you a message.</div>\r\n              </div>\r\n              <div class=\"newBox\">\r\n                <h3 class=\"box-title\">Alert Bottom Right </h3>\r\n                <button id=\"showbottomright\" class=\"btn btn-default btn-outline\">Show Top Right</button>\r\n                &lt;!&ndash; Start an Alert &ndash;&gt;\r\n                <div id=\"alertbottomright\" class=\"myadmin-alert myadmin-alert-img alert-info myadmin-alert-bottom-right\"> <img src=\"assets/images/genu.jpg\" class=\"img\" alt=\"img\"><a href=\"#\" class=\"closed\">×</a>\r\n                  <h4>You have a Message!</h4>\r\n                  <b>John Doe</b> sent you a message.</div>\r\n              </div>\r\n            </div>-->\r\n            <div\r\n                    *ngFor=\"let alertposition of alertpositions\"\r\n                    class=\"newBox\">\r\n              <h3 class=\"box-title\"> {{alertposition.title}} </h3>\r\n              <button (click)=\"onClickAlertPosition(alertposition, alertpositions)\" [ngClass]=\"alertposition.classes\">Click Me</button>\r\n              <!-- Start an Alert -->\r\n              <div class=\"display-none\" [ngClass]=\"{'display-block' : alertposition.read}\">\r\n                <div [ngClass]=\"alertposition.alertClasses\"> <span *ngIf=\"alertposition.imagePath\"><img [src]=\"alertposition.imagePath\" class=\"img\" alt=\"img\" /></span> <a  (click)=\"onclose(alertposition)\" class=\"closed\">×</a>\r\n                  <h4>You have a Message!</h4>\r\n                  {{ alertposition.description }}.\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<section class=\"border-lightblue\" style=\"margin: 20px 0;\">\r\n  <div class=\"content-heading lightblue\">\r\n    <h2 class=\"h5 white-heading\">Normal Alerts</h2>\r\n  </div>\r\n  <div class=\"main-component-contents\">\r\n    <div class=\"component-inner\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"white-box normal-alerts\">\r\n            <a (click)=\"showAllNormalAlert()\" class=\"show-dismiss-btn\">Show All</a>\r\n            <div [ngClass]=\"{'show': normal_alert}\">\r\n              <div class=\"normal-alert\"><div class=\"alert alert-success\"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. </div></div>\r\n              <div class=\"normal-alert\"><div class=\"alert alert-info alert-one-info\"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. </div></div>\r\n              <div class=\"normal-alert\"><div class=\"alert alert-warning alert-warning-info\"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. </div></div>\r\n              <div class=\"normal-alert\"><div class=\"alert alert-danger alert-danger-info\"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. </div></div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<section class=\"border-lightblue\" style=\"margin: 20px 0;\">\r\n  <div class=\"content-heading lightblue\">\r\n    <h2 class=\"h5 white-heading\">Dismissable Alerts</h2>\r\n  </div>\r\n  <div class=\"main-component-contents\">\r\n    <div class=\"component-inner\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"white-box dismissible_alert\">\r\n            <a (click)=\"showAllDismissAlert()\" class=\"show-dismiss-btn\">Show All</a>\r\n            <!-- <div class=\"alert alert-success alert-dismissable\">\r\n               <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">×</button>\r\n               Lorem ipsum dolor sit amet, consectetur adipisicing elit. </div>\r\n             <div class=\"alert alert-info alert-dismissable\">\r\n               <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">×</button>\r\n               Lorem ipsum dolor sit amet, consectetur adipisicing elit. </div>\r\n             <div class=\"alert alert-warning alert-dismissable\">\r\n               <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">×</button>\r\n               Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>\r\n             <div class=\"alert alert-danger alert-dismissable\">\r\n               <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">×</button>\r\n               Lorem ipsum dolor sit amet, consectetur adipisicing elit. </div>-->\r\n            <div *ngFor=\"let dismissalert of dismissalerts\">\r\n              <div [ngClass]=\"{'display-none' : !dismissalert.read}\">\r\n                <div [ngClass]=\"dismissalert.classes\">\r\n                  <button  (click)=\"oncloseDismiss(dismissalert, dismissalerts)\" type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">×</button>\r\n                  {{ dismissalert.description }} </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/notification/notification.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__notification_model__ = __webpack_require__("../../../../../src/app/notification/notification.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alertnotification_model__ = __webpack_require__("../../../../../src/app/notification/alertnotification.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__alertposition_model__ = __webpack_require__("../../../../../src/app/notification/alertposition.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dismissalert_model__ = __webpack_require__("../../../../../src/app/notification/dismissalert.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NotificationComponent = (function () {
    function NotificationComponent() {
        this.class = '';
        this.normal_alert = false;
        this.show_dismis_btn = false;
        this.notifications = [
            new __WEBPACK_IMPORTED_MODULE_1__notification_model__["a" /* Notification */]('Info Message', 'tst1 btn btn-info', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 'assets/images/sonu.jpg', '30 mins ago', false),
            new __WEBPACK_IMPORTED_MODULE_1__notification_model__["a" /* Notification */]('Warning Message', 'tst2 btn btn-warning', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 'assets/images/sonu.jpg', '30 mins ago', false),
            new __WEBPACK_IMPORTED_MODULE_1__notification_model__["a" /* Notification */]('Success Message', 'tst3 btn btn-success', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 'assets/images/sonu.jpg', '30 mins ago', false),
            new __WEBPACK_IMPORTED_MODULE_1__notification_model__["a" /* Notification */]('Danger Message', 'tst4 btn btn-danger', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 'assets/images/sonu.jpg', '30 mins ago', false)
        ];
        this.alertnotifications = [
            new __WEBPACK_IMPORTED_MODULE_2__alertnotification_model__["a" /* AlertNotification */]('Alert Top Full width', 'btn btn-default btn-outline showtop', 'myadmin-alert myadmin-alert-icon myadmin-alert-click alert-success myadmin-alert-top alerttop', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', '', '30 mins ago', false),
            new __WEBPACK_IMPORTED_MODULE_2__alertnotification_model__["a" /* AlertNotification */]('Alert Fullwidth Bottom', 'btn btn-default btn-outline showbottom', 'myadmin-alert myadmin-alert-icon myadmin-alert-click alert-danger myadmin-alert-bottom alertbottom', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', '', '30 mins ago', false),
            new __WEBPACK_IMPORTED_MODULE_2__alertnotification_model__["a" /* AlertNotification */]('Alert Fullwidth Top', 'btn btn-default btn-outline showtop2', 'myadmin-alert myadmin-alert-img myadmin-alert-click alert-info myadmin-alert-top alerttop2', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 'assets/images/sonu.jpg', '30 mins ago', false),
            new __WEBPACK_IMPORTED_MODULE_2__alertnotification_model__["a" /* AlertNotification */]('Alert Bottom with image', 'btn btn-default btn-outline showbottom2', 'myadmin-alert myadmin-alert-img myadmin-alert-click alert-warning myadmin-alert-bottom alertbottom2', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 'assets/images/sonu.jpg', '30 mins ago', false)
        ];
        this.alertpositions = [
            new __WEBPACK_IMPORTED_MODULE_3__alertposition_model__["a" /* AlertPosition */]('Alert Top Right', 'btn btn-default btn-outline', 'myadmin-alert myadmin-alert-img alert-info myadmin-alert-top-right', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 'assets/images/sonu.jpg', '30 mins ago', false),
            new __WEBPACK_IMPORTED_MODULE_3__alertposition_model__["a" /* AlertPosition */]('Alert Top Left', 'btn btn-default btn-outline', 'myadmin-alert myadmin-alert-img alert-info myadmin-alert-top-left', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 'assets/images/sonu.jpg', '30 mins ago', false),
            new __WEBPACK_IMPORTED_MODULE_3__alertposition_model__["a" /* AlertPosition */]('Alert Bottom Left ', 'btn btn-default btn-outline', 'myadmin-alert myadmin-alert-img alert-info myadmin-alert-bottom-left', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 'assets/images/sonu.jpg', '30 mins ago', false),
            new __WEBPACK_IMPORTED_MODULE_3__alertposition_model__["a" /* AlertPosition */]('Alert Bottom Right', 'btn btn-default btn-outline', 'myadmin-alert myadmin-alert-img alert-info myadmin-alert-bottom-right', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 'assets/images/sonu.jpg', '30 mins ago', false)
        ];
        this.dismissalerts = [
            new __WEBPACK_IMPORTED_MODULE_4__dismissalert_model__["a" /* DismissAlert */]('Alert Top Right', 'alert alert-success alert-dismissable', 'myadmin-alert myadmin-alert-img alert-info myadmin-alert-top-right', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 'assets/images/sonu.jpg', '30 mins ago', true),
            new __WEBPACK_IMPORTED_MODULE_4__dismissalert_model__["a" /* DismissAlert */]('Alert Top Left', 'alert alert-info alert-dismissable', 'myadmin-alert myadmin-alert-img alert-info myadmin-alert-top-left', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 'assets/images/sonu.jpg', '30 mins ago', true),
            new __WEBPACK_IMPORTED_MODULE_4__dismissalert_model__["a" /* DismissAlert */]('Alert Bottom Left ', 'alert alert-warning alert-dismissable', 'myadmin-alert myadmin-alert-img alert-info myadmin-alert-bottom-left', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 'assets/images/sonu.jpg', '30 mins ago', true),
            new __WEBPACK_IMPORTED_MODULE_4__dismissalert_model__["a" /* DismissAlert */]('Alert Bottom Right', 'alert alert-danger alert-dismissable', 'myadmin-alert myadmin-alert-img alert-info myadmin-alert-bottom-right', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 'assets/images/sonu.jpg', '30 mins ago', true)
        ];
    }
    NotificationComponent.prototype.onClickBtnInfo = function (toaster) {
        console.log('button info clicked');
        toaster.read = true;
        setTimeout(function () {
            toaster.read = false;
        }, 3000);
        this.class = '';
        this.class = toaster.classes;
        console.log('notification=====', this.class);
    };
    NotificationComponent.prototype.onClickAlertNotification = function (notification, alertNotifications) {
        console.log('button info notification, alertNotifications, notification, alertNotifications', alertNotifications);
        alertNotifications.forEach(function (item) {
            console.log(item);
            item.read = false;
        });
        notification.read = true;
    };
    NotificationComponent.prototype.onClickAlertPosition = function (notification, alertPositions) {
        console.log('button info clicked');
        console.log('notification.alertclasses;', notification.alertClasses);
        alertPositions.forEach(function (item) {
            console.log(item);
            item.read = false;
        });
        notification.read = true;
    };
    NotificationComponent.prototype.onclose = function (notification) {
        console.log('close clicked');
        notification.read = false;
    };
    NotificationComponent.prototype.oncloseDismiss = function (dismissalert, dismissalerts) {
        console.log('close clicked');
        console.log('dismissalerts', dismissalerts);
        dismissalert.read = false;
    };
    NotificationComponent.prototype.showAllDismissAlert = function () {
        this.dismissalerts.forEach(function (item) {
            item.read = true;
        });
    };
    NotificationComponent.prototype.showAllNormalAlert = function () {
        this.normal_alert = true;
    };
    NotificationComponent.prototype.ngOnInit = function () {
    };
    NotificationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-notification',
            template: __webpack_require__("../../../../../src/app/notification/notification.component.html"),
            styles: [__webpack_require__("../../../../../src/app/notification/notification.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/notification/notification.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Notification; });
var Notification = (function () {
    function Notification(name, classes, desc, imagePath, time, read) {
        this.title = name;
        this.classes = classes;
        this.description = desc;
        this.imagePath = imagePath;
        this.time = time;
        this.read = read;
    }
    return Notification;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map