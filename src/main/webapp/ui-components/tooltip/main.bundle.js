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

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n        <!--<app-emailtemplate></app-emailtemplate>-->\r\n        <!--<app-loader></app-loader>-->\r\n        <!--<app-animate></app-animate>-->\r\n<!--      <app-animate></app-animate>\r\n      <app-notificationmodule></app-notificationmodule>\r\n      <app-tooltip></app-tooltip>-->\r\n      <!--<app-notification></app-notification>-->\r\n     <!-- <h3>I'm in the AppComponent!</h3>\r\n      <hr>-->\r\n      <!--<app-servers></app-servers>-->\r\n      <!--<div app-servers></div>-->\r\n      <!--<div class=\"app-servers\"></div>-->\r\n<!--      <app-advisor></app-advisor>\r\n      <hr>-->\r\n      <!--<app-notification></app-notification>-->\r\n<!--      <hr>\r\n      <app-chat></app-chat>\r\n      <hr>\r\n      <app-animate></app-animate>\r\n      <hr>\r\n      <app-crop></app-crop>\r\n      <hr>\r\n      <app-emailtemplate></app-emailtemplate>\r\n      <hr>\r\n      <app-socialmedia></app-socialmedia>\r\n      <hr>\r\n      <app-typography></app-typography>\r\n      <hr>\r\n      <app-tooltip></app-tooltip>\r\n      <hr>\r\n        { path: 'Tooltip-component', component: TooltipComponent },\r\n  { path: 'Advisor-component', component: AdvisorComponent },\r\n  { path: 'Animate', component: AnimateComponent },\r\n  { path: 'Chat-component', component: ChatComponent },\r\n  { path: 'Crop-component', component: CropComponent },\r\n  { path: 'Email-component', component: EmailtemplateComponent },\r\n  { path: 'Loader-component', component: LoaderComponent },\r\n  { path: 'Notification-component', component: NotificationComponent },\r\n  { path: 'Notification-Module', component: NotificationmoduleComponent },\r\n  { path: 'Typography-component', component: TypographyComponent },\r\n      <app-notificationmodule></app-notificationmodule>-->\r\n        <!--<app-notificationmodule></app-notificationmodule>\r\n        <app-emailtemplate></app-emailtemplate>-->\r\n        <!--<app-socialmedia></app-socialmedia>-->\r\n        <!--<app-notification></app-notification>-->\r\n<!--        <ul>\r\n            <li><a [routerLink] = \"['/Tooltip-component']\">Tooltip Component</a></li>\r\n            <li><a [routerLink] = \"['/Advisor-component']\">Advisor-component</a></li>\r\n            <li><a [routerLink] = \"['/Animate']\">Animate</a></li>\r\n            <li><a [routerLink] = \"['/Chat-component']\">Chat-component</a></li>\r\n            <li><a [routerLink] = \"['/Crop-component']\">Crop-component</a></li>\r\n            <li><a [routerLink] = \"['/Email-component']\">Email-component</a></li>\r\n            <li><a [routerLink] = \"['/Loader-component']\">Loader-component</a></li>\r\n            <li><a [routerLink] = \"['/Notification-component']\">Notification Component</a></li>\r\n            <li><a [routerLink] = \"['/Notification-Module']\">Notification Module Component</a></li>\r\n            <li><a [routerLink] = \"['/Typography-component']\">Typography Component</a></li>\r\n        </ul>\r\n        <router-outlet></router-outlet>-->\r\n        <app-tooltip></app-tooltip>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tooltip_tooltip_component__ = __webpack_require__("../../../../../src/app/tooltip/tooltip.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var appRoutes = [
    { path: 'Tooltip-component', component: __WEBPACK_IMPORTED_MODULE_8__tooltip_tooltip_component__["a" /* TooltipComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__tooltip_tooltip_component__["a" /* TooltipComponent */]
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

/***/ "../../../../../src/app/tooltip/tooltip.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".white-box{\r\n  overflow: initial;\r\n  min-height: 230px;\r\n}\r\n\r\na.tooltip-btn {\r\n  display: inline-block;\r\n  padding: 7px 14px;\r\n  background: #6b6b6b;\r\n  color: #fff;\r\n  margin-bottom: 3px;\r\n  min-width: 98px;\r\n  cursor: pointer;\r\n}\r\n\r\na.tooltip-btn:hover, a.tooltip-btn.active {\r\n  background: #000;\r\n  text-decoration: none;\r\n}\r\n\r\n.mytooltip {\r\n  display: inline;\r\n  position: relative;\r\n  z-index: 9999\r\n}\r\n\r\n.tooltip-item {\r\n  background: #d96847;\r\n  color: #fff;\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  font-weight: 500;\r\n  padding: 0 10px\r\n}\r\n\r\n.tooltip-item::after {\r\n  content: '';\r\n  position: absolute;\r\n  width: 360px;\r\n  height: 20px;\r\n  bottom: 100%;\r\n  left: 50%;\r\n  pointer-events: none;\r\n  -webkit-transform: translateX(-50%);\r\n  transform: translateX(-50%)\r\n}\r\n\r\n.mytooltip:hover .tooltip-item::after {\r\n  pointer-events: auto\r\n}\r\n\r\n.tooltip-content {\r\n  position: absolute;\r\n  z-index: 9999;\r\n  width: 360px;\r\n  left: 50%;\r\n  margin: 0 0 20px -180px;\r\n  bottom: 100%;\r\n  text-align: left;\r\n  font-size: 14px;\r\n  line-height: 30px;\r\n  box-shadow: -5px -5px 15px rgba(48, 54, 61, .2);\r\n  background: #e6e6e6;\r\n  opacity: 0;\r\n  cursor: default;\r\n  pointer-events: none\r\n}\r\n\r\n.tooltip-effect-1 .tooltip-content {\r\n  -webkit-transform: translate3d(0, -10px, 0);\r\n  transform: translate3d(0, -10px, 0);\r\n  transition: opacity .3s, -webkit-transform .3s;\r\n  transition: opacity .3s, transform .3s;\r\n  transition: opacity .3s, transform .3s, -webkit-transform .3s;\r\n  color: #fff\r\n}\r\n\r\n.tooltip-effect-2 .tooltip-content {\r\n  -webkit-transform-origin: 50% calc(110%);\r\n  transform-origin: 50% calc(110%);\r\n  -webkit-transform: perspective(1000px) rotate3d(1, 0, 0, 45deg);\r\n  transform: perspective(1000px) rotate3d(1, 0, 0, 45deg);\r\n  transition: opacity .2s, -webkit-transform .2s;\r\n  transition: opacity .2s, transform .2s;\r\n  transition: opacity .2s, transform .2s, -webkit-transform .2s\r\n}\r\n\r\n.tooltip-effect-3 .tooltip-content {\r\n  -webkit-transform: translate3d(0, 10px, 0) rotate3d(1, 1, 0, 25deg);\r\n  transform: translate3d(0, 10px, 0) rotate3d(1, 1, 0, 25deg);\r\n  transition: opacity .3s, -webkit-transform .3s;\r\n  transition: opacity .3s, transform .3s;\r\n  transition: opacity .3s, transform .3s, -webkit-transform .3s\r\n}\r\n\r\n.tooltip-effect-4 .tooltip-content {\r\n  -webkit-transform-origin: 50% 100%;\r\n  transform-origin: 50% 100%;\r\n  -webkit-transform: scale3d(.7, .3, 1);\r\n  transform: scale3d(.7, .3, 1);\r\n  transition: opacity .2s, -webkit-transform .2s;\r\n  transition: opacity .2s, transform .2s;\r\n  transition: opacity .2s, transform .2s, -webkit-transform .2s\r\n}\r\n\r\n.tooltip-effect-5 .tooltip-content {\r\n  width: 180px;\r\n  margin-left: -90px;\r\n  -webkit-transform-origin: 50% calc(106%);\r\n  transform-origin: 50% calc(106%);\r\n  -webkit-transform: rotate3d(0, 0, 1, 15deg);\r\n  transform: rotate3d(0, 0, 1, 15deg);\r\n  transition: opacity .2s, -webkit-transform .2s;\r\n  transition: opacity .2s, transform .2s;\r\n  transition: opacity .2s, transform .2s, -webkit-transform .2s;\r\n  transition-timing-function: ease, cubic-bezier(.17, .67, .4, 1.39)\r\n}\r\n\r\n.mytooltip:hover .tooltip-content {\r\n  pointer-events: auto;\r\n  opacity: 1;\r\n  -webkit-transform: translate3d(0, 0, 0) rotate3d(0, 0, 0, 0);\r\n  transform: translate3d(0, 0, 0) rotate3d(0, 0, 0, 0)\r\n}\r\n\r\n.tooltip.tooltip-effect-2:hover .tooltip-content {\r\n  -webkit-transform: perspective(1000px) rotate3d(1, 0, 0, 0deg);\r\n  transform: perspective(1000px) rotate3d(1, 0, 0, 0deg)\r\n}\r\n\r\n.tooltip-content::after {\r\n  content: '';\r\n  top: 100%;\r\n  left: 50%;\r\n  border: solid transparent;\r\n  height: 0;\r\n  width: 0;\r\n  position: absolute;\r\n  pointer-events: none;\r\n  border-color: #e6e6e6 transparent transparent;\r\n  border-width: 10px;\r\n  margin-left: -10px\r\n}\r\n\r\n.tooltip-content img {\r\n  position: relative;\r\n  height: 140px;\r\n  display: block;\r\n  float: left;\r\n  margin-right: 1em\r\n}\r\n\r\n.tooltip-text {\r\n  font-size: 14px;\r\n  line-height: 24px;\r\n  display: block;\r\n  padding: 1.31em 1.21em 1.21em 0;\r\n  color: #333\r\n}\r\n\r\n.tooltip-effect-5 .tooltip-text {\r\n  padding: 1.4em\r\n}\r\n\r\na.mytooltip {\r\n  font-weight: 700;\r\n  color: #d96847\r\n}\r\n\r\n.tooltip-content2 {\r\n  position: absolute;\r\n  z-index: 9999;\r\n  width: 80px;\r\n  height: 80px;\r\n  padding-top: 25px;\r\n  left: 50%;\r\n  margin-left: -40px;\r\n  bottom: 100%;\r\n  border-radius: 50%;\r\n  text-align: center;\r\n  background: #fb9678;\r\n  color: #fff;\r\n  opacity: 0;\r\n  margin-bottom: 20px;\r\n  cursor: default;\r\n  pointer-events: none\r\n}\r\n\r\n.tooltip-content2 i {\r\n  opacity: 0\r\n}\r\n\r\n.mytooltip:hover .tooltip-content2,\r\n.mytooltip:hover .tooltip-content2 i {\r\n  opacity: 1;\r\n  font-size: 18px\r\n}\r\n\r\n.tooltip-effect-6 .tooltip-content2 {\r\n  -webkit-transform: translate3d(0, 10px, 0) rotate3d(1, 1, 1, 45deg);\r\n  transform: translate3d(0, 10px, 0) rotate3d(1, 1, 1, 45deg);\r\n  -webkit-transform-origin: 50% 100%;\r\n  transform-origin: 50% 100%;\r\n  transition: opacity .3s, -webkit-transform .3s;\r\n  transition: opacity .3s, transform .3s;\r\n  transition: opacity .3s, transform .3s, -webkit-transform .3s\r\n}\r\n\r\n.tooltip-effect-6 .tooltip-content2 i {\r\n  -webkit-transform: scale3d(0, 0, 1);\r\n  transform: scale3d(0, 0, 1);\r\n  transition: opacity .3s, -webkit-transform .3s;\r\n  transition: opacity .3s, transform .3s;\r\n  transition: opacity .3s, transform .3s, -webkit-transform .3s\r\n}\r\n\r\n.tooltip-effect-7 .tooltip-content2 {\r\n  -webkit-transform: translate3d(0, 10px, 0);\r\n  transform: translate3d(0, 10px, 0);\r\n  transition: opacity .3s, -webkit-transform .3s;\r\n  transition: opacity .3s, transform .3s;\r\n  transition: opacity .3s, transform .3s, -webkit-transform .3s\r\n}\r\n\r\n.tooltip-effect-7 .tooltip-content2 i {\r\n  -webkit-transform: translate3d(0, 15px, 0);\r\n  transform: translate3d(0, 15px, 0);\r\n  transition: opacity .3s, -webkit-transform .3s;\r\n  transition: opacity .3s, transform .3s;\r\n  transition: opacity .3s, transform .3s, -webkit-transform .3s\r\n}\r\n\r\n.tooltip-effect-8 .tooltip-content2 {\r\n  -webkit-transform: translate3d(0, 10px, 0) rotate3d(0, 1, 0, 90deg);\r\n  transform: translate3d(0, 10px, 0) rotate3d(0, 1, 0, 90deg);\r\n  -webkit-transform-origin: 50% 100%;\r\n  transform-origin: 50% 100%;\r\n  transition: opacity .3s, -webkit-transform .3s;\r\n  transition: opacity .3s, transform .3s;\r\n  transition: opacity .3s, transform .3s, -webkit-transform .3s\r\n}\r\n\r\n.tooltip-effect-8 .tooltip-content2 i {\r\n  -webkit-transform: scale3d(0, 0, 1);\r\n  transform: scale3d(0, 0, 1);\r\n  transition: opacity .3s, -webkit-transform .3s;\r\n  transition: opacity .3s, transform .3s;\r\n  transition: opacity .3s, transform .3s, -webkit-transform .3s\r\n}\r\n\r\n.tooltip-effect-9 .tooltip-content2 {\r\n  -webkit-transform: translate3d(0, -20px, 0);\r\n  transform: translate3d(0, -20px, 0);\r\n  transition: opacity .3s, -webkit-transform .3s;\r\n  transition: opacity .3s, transform .3s;\r\n  transition: opacity .3s, transform .3s, -webkit-transform .3s\r\n}\r\n\r\n.tooltip-effect-9 .tooltip-content2 i {\r\n  -webkit-transform: translate3d(0, 20px, 0);\r\n  transform: translate3d(0, 20px, 0);\r\n  transition: opacity .3s, -webkit-transform .3s;\r\n  transition: opacity .3s, transform .3s;\r\n  transition: opacity .3s, transform .3s, -webkit-transform .3s\r\n}\r\n\r\n.mytooltip:hover .tooltip-content2,\r\n.mytooltip:hover .tooltip-content2 i {\r\n  pointer-events: auto;\r\n  -webkit-transform: translate3d(0, 0, 0) scale3d(1, 1, 1);\r\n  transform: translate3d(0, 0, 0) scale3d(1, 1, 1)\r\n}\r\n\r\n.tooltip-effect-6:hover .tooltip-content2 i {\r\n  -webkit-transform: rotate3d(1, 1, 1, 0);\r\n  transform: rotate3d(1, 1, 1, 0)\r\n}\r\n\r\n.tooltip-content2::after {\r\n  content: '';\r\n  position: absolute;\r\n  top: 100%;\r\n  left: 50%;\r\n  margin: -7px 0 0 -15px;\r\n  width: 30px;\r\n  height: 20px;\r\n  background: url(" + __webpack_require__("../../../../../src/assets/images/tooltip1.svg") + ") center center no-repeat;\r\n  background-size: 100%\r\n}\r\n\r\n.tooltip-content3 {\r\n  position: absolute;\r\n  background: url(" + __webpack_require__("../../../../../src/assets/images/shape1.svg") + ") center bottom no-repeat;\r\n  background-size: 100% 100%;\r\n  z-index: 9999;\r\n  width: 200px;\r\n  bottom: 100%;\r\n  left: 50%;\r\n  margin-left: -100px;\r\n  padding: 50px 30px;\r\n  text-align: center;\r\n  color: #fff;\r\n  opacity: 0;\r\n  cursor: default;\r\n  font-size: 14px;\r\n  line-height: 27px;\r\n  pointer-events: none;\r\n  -webkit-transform: scale3d(.1, .2, 1);\r\n  transform: scale3d(.1, .2, 1);\r\n  -webkit-transform-origin: 50% 120%;\r\n  transform-origin: 50% 120%;\r\n  transition: opacity .4s, -webkit-transform .4s;\r\n  transition: opacity .4s, transform .4s;\r\n  transition: opacity .4s, transform .4s, -webkit-transform .4s;\r\n  transition-timing-function: ease, cubic-bezier(.6, 0, .4, 1)\r\n}\r\n\r\n.mytooltip:hover .tooltip-content3 {\r\n  opacity: 1;\r\n  pointer-events: auto;\r\n  -webkit-transform: scale3d(1, 1, 1);\r\n  transform: scale3d(1, 1, 1)\r\n}\r\n\r\n.tooltip-content3::after {\r\n  content: '';\r\n  position: absolute;\r\n  width: 16px;\r\n  height: 16px;\r\n  left: 50%;\r\n  margin-left: -8px;\r\n  top: 100%;\r\n  background: #fb9678;\r\n  -webkit-transform: translate3d(0, -60%, 0) rotate3d(0, 0, 1, 45deg);\r\n  transform: translate3d(0, -60%, 0) rotate3d(0, 0, 1, 45deg)\r\n}\r\n\r\n.tooltip-item2 {\r\n  color: #d96847;\r\n  cursor: pointer;\r\n  z-index: 100;\r\n  position: relative;\r\n  display: inline-block;\r\n  font-weight: 700;\r\n  transition: background-color .3s, color .3s, -webkit-transform .3s;\r\n  transition: background-color .3s, color .3s, transform .3s;\r\n  transition: background-color .3s, color .3s, transform .3s, -webkit-transform .3s\r\n}\r\n\r\n.mytooltip:hover .tooltip-item2 {\r\n  color: #333;\r\n  -webkit-transform: translate3d(0, -.5em, 0);\r\n  transform: translate3d(0, -.5em, 0)\r\n}\r\n\r\n.tooltip-content4 {\r\n  position: absolute;\r\n  z-index: 99;\r\n  width: 360px;\r\n  left: 50%;\r\n  margin-left: -180px;\r\n  bottom: -5px;\r\n  text-align: left;\r\n  background: #d96847;\r\n  opacity: 0;\r\n  font-size: 14px;\r\n  line-height: 27px;\r\n  padding: 1.5em;\r\n  color: #fff;\r\n  border-bottom: 55px solid #e6e6e6;\r\n  cursor: default;\r\n  pointer-events: none;\r\n  border-radius: 5px;\r\n  -webkit-transform: translate3d(0, -.5em, 0);\r\n  transform: translate3d(0, -.5em, 0);\r\n  transition: opacity .3s, -webkit-transform .3s;\r\n  transition: opacity .3s, transform .3s;\r\n  transition: opacity .3s, transform .3s, -webkit-transform .3s\r\n}\r\n\r\n.tooltip-content4 a {\r\n  color: #2b2b2b\r\n}\r\n\r\n.tooltip-text2 {\r\n  opacity: 0;\r\n  -webkit-transform: translate3d(0, 1.5em, 0);\r\n  transform: translate3d(0, 1.5em, 0);\r\n  transition: opacity .3s, -webkit-transform .3s;\r\n  transition: opacity .3s, transform .3s;\r\n  transition: opacity .3s, transform .3s, -webkit-transform .3s\r\n}\r\n\r\n.mytooltip:hover .tooltip-content4,\r\n.mytooltip:hover .tooltip-text2 {\r\n  pointer-events: auto;\r\n  opacity: 1;\r\n  -webkit-transform: translate3d(0, 0, 0);\r\n  transform: translate3d(0, 0, 0)\r\n}\r\n\r\n.tooltip-content5 {\r\n  position: absolute;\r\n  z-index: 9999;\r\n  width: 300px;\r\n  left: 50%;\r\n  bottom: 100%;\r\n  font-size: 20px;\r\n  line-height: 1.4;\r\n  text-align: center;\r\n  font-weight: 400;\r\n  color: #fff;\r\n  background: 0 0;\r\n  opacity: 0;\r\n  margin: 0 0 20px -150px;\r\n  cursor: default;\r\n  pointer-events: none;\r\n  -webkit-font-smoothing: antialiased;\r\n  transition: opacity .3s .3s\r\n}\r\n\r\n.mytooltip:hover .tooltip-content5 {\r\n  opacity: 1;\r\n  pointer-events: auto;\r\n  transition-delay: 0s\r\n}\r\n\r\n.tooltip-content5 span {\r\n  display: block\r\n}\r\n\r\n.tooltip-text3 {\r\n  border-bottom: 10px solid #fb9678;\r\n  overflow: hidden;\r\n  -webkit-transform: scale3d(0, 1, 1);\r\n  transform: scale3d(0, 1, 1);\r\n  transition: -webkit-transform .3s .3s;\r\n  transition: transform .3s .3s;\r\n  transition: transform .3s .3s, -webkit-transform .3s .3s\r\n}\r\n\r\n.mytooltip:hover .tooltip-text3 {\r\n  transition-delay: 0s;\r\n  -webkit-transform: scale3d(1, 1, 1);\r\n  transform: scale3d(1, 1, 1)\r\n}\r\n\r\n.tooltip-inner2 {\r\n  background: #e6e6e6;\r\n  color: #333;\r\n  padding: 40px;\r\n  -webkit-transform: translate3d(0, 100%, 0);\r\n  transform: translate3d(0, 100%, 0);\r\n  webkit-transition: -webkit-transform .3s;\r\n  transition: -webkit-transform .3s;\r\n  transition: transform .3s;\r\n  transition: transform .3s, -webkit-transform .3s\r\n}\r\n\r\n.mytooltip:hover .tooltip-inner2 {\r\n  transition-delay: .3s;\r\n  -webkit-transform: translate3d(0, 0, 0);\r\n  transform: translate3d(0, 0, 0)\r\n}\r\n\r\n.tooltip-content5::after {\r\n  content: '';\r\n  bottom: -20px;\r\n  left: 50%;\r\n  border: solid transparent;\r\n  height: 0;\r\n  width: 0;\r\n  position: absolute;\r\n  pointer-events: none;\r\n  border-color: #fb9678 transparent transparent;\r\n  border-width: 10px;\r\n  margin-left: -10px\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tooltip/tooltip.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<!--<div class=\"row\">\r\n  <div class=\"col-md-6\">\r\n    <div class=\"white-box\">\r\n      <h3 class=\"box-title\">Code implementation </h3>\r\n      <br>\r\n      <span *ngFor=\"let tooltip of tooltip\">\r\n        <a\r\n          [ngClass]=\"{active: isActiveTooltip(tooltip)}\"\r\n          (click)=\"onTooltipClick(tooltip)\"\r\n          class=\"tooltip-btn active\">{{ tooltip.title }}</a>\r\n      </span>\r\n      &lt;!&ndash;<a class=\"tooltip-btn\">Tooltip2</a>\r\n      <a class=\"tooltip-btn\">Tooltip3</a>\r\n      <a class=\"tooltip-btn\">Tooltip4</a>\r\n      <a class=\"tooltip-btn\">Tooltip5</a>\r\n      <a class=\"tooltip-btn\">Tooltip6</a>\r\n      <a class=\"tooltip-btn\">Tooltip7</a>\r\n      <a class=\"tooltip-btn\">Tooltip8</a>\r\n      <a class=\"tooltip-btn\">Tooltip9</a>\r\n      <a class=\"tooltip-btn\">Tooltip10</a>\r\n      <a class=\"tooltip-btn\">Tooltip11</a>\r\n      <a class=\"tooltip-btn\">Tooltip12</a>\r\n      <a class=\"tooltip-btn\">Tooltip13</a>\r\n      <a class=\"tooltip-btn\">Tooltip14</a>\r\n      <a class=\"tooltip-btn\">Tooltip15</a>&ndash;&gt;\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <div class=\"white-box\">\r\n      <h3 class=\"box-title\">Result </h3>\r\n      <br>\r\n      <div class=\"tooltip_content\">\r\n        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s\r\n          rogue laws of physics, star stuff <span class=\"mytooltip {{tooltipCssClass}}\">\r\n                    <span class=\"tooltip-item\">Euclid</span>\r\n                                <span class=\"tooltip-content clearfix\">\r\n                      <img src=\"assets/images/Euclid.png\">\r\n                      <span class=\"tooltip-text\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </span>\r\n                                </span>\r\n                                </span> star light.</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>-->\r\n\r\n<!--  <div class=\"row\">\r\n    <div class=\"col-md-3 col-xs-12 col-sm-6\">\r\n      <div class=\"white-box\">\r\n        <h3 class=\"box-title m-b-0\">Tooltip Style 1 <a class=\"get-code\" data-toggle=\"collapse\" href=\"#tt1\" aria-expanded=\"true\"><i class=\"fa fa-code\" title=\"\" data-toggle=\"tooltip\" data-original-title=\"Get Code\"></i></a></h3>\r\n        <div class=\"collapse m-t-15\" id=\"tt1\" aria-expanded=\"true\">\r\n          <code>&lt;span class=\"mytooltip tooltip-effect-2\"&gt;\r\n            &lt;span class=\"tooltip-item\"&gt;Euclid&lt;/span&gt;\r\n            &lt;span class=\"tooltip-content clearfix\"&gt;\r\n            &lt;img src=\"../plugins/images/tooltip/Euclid.png\" /&gt;\r\n            &lt;span class=\"tooltip-text\"&gt;Also known as Euclid of andria, was a Greek mathematician, often referred.&lt;/span&gt;\r\n            &lt;/span&gt;\r\n            &lt;/span&gt;</code>\r\n        </div>\r\n        <hr>\r\n        <p>Tesseract, finite but unbounded take root and flourish,\r\n          <span class=\"mytooltip tooltip-effect-1\">\r\n                    <span class=\"tooltip-item\">Euclid</span>\r\n                                <span class=\"tooltip-content clearfix\">\r\n                      <img src=\"assets/images/Euclid.png\">\r\n                      <span class=\"tooltip-text\">Also known as Euclid of andria, was a Greek mathematician, often referred.</span>\r\n                                </span>\r\n                                </span>\r\n          rogue laws of physics, star stuff harvesting star light.</p>\r\n      </div>\r\n    </div>\r\n&lt;!&ndash;    <div class=\"col-md-3 col-xs-12 col-sm-6\">\r\n      <div class=\"white-box\">\r\n        <h3 class=\"box-title m-b-0\">Tooltip Style 2\r\n          <a class=\"get-code\" data-toggle=\"collapse\" href=\"#tt2\" aria-expanded=\"true\"><i class=\"fa fa-code\" title=\"\" data-toggle=\"tooltip\" data-original-title=\"Get Code\"></i></a></h3>\r\n        <div class=\"collapse m-t-15\" id=\"tt2\" aria-expanded=\"true\">\r\n          <code>&lt;span class=\"mytooltip tooltip-effect-2\"&gt;\r\n            &lt;span class=\"tooltip-item\"&gt;Euclid&lt;/span&gt;\r\n            &lt;span class=\"tooltip-content clearfix\"&gt;\r\n            &lt;img src=\"../plugins/images/tooltip/Euclid.png\" /&gt;\r\n            &lt;span class=\"tooltip-text\"&gt;Also known as Euclid of andria, was a Greek mathematician, often referred.&lt;/span&gt;\r\n            &lt;/span&gt;\r\n            &lt;/span&gt;</code>\r\n        </div>\r\n        <hr>\r\n        <p>Tesseract, finite but unbounded take root and flourish,\r\n          <span class=\"mytooltip tooltip-effect-2\">\r\n                    <span class=\"tooltip-item\">Euclid</span>\r\n                                <span class=\"tooltip-content clearfix\">\r\n                      <img src=\"assets/images/Euclid.png\">\r\n                      <span class=\"tooltip-text\">Also known as Euclid of andria, was a Greek mathematician, often referred.</span>\r\n                                </span>\r\n                                </span>\r\n          rogue laws of physics, star stuff harvesting star light.</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3 col-xs-12 col-sm-6\">\r\n      <div class=\"white-box\">\r\n        <h3 class=\"box-title m-b-0\">Tooltip Style 4\r\n          <a class=\"get-code\" data-toggle=\"collapse\" href=\"#tt3\" aria-expanded=\"true\"><i class=\"fa fa-code\" title=\"\" data-toggle=\"tooltip\" data-original-title=\"Get Code\"></i></a></h3>\r\n        <div class=\"collapse m-t-15\" id=\"tt3\" aria-expanded=\"true\">\r\n          <code>&lt;span class=\"mytooltip tooltip-effect-2\"&gt;\r\n            &lt;span class=\"tooltip-item\"&gt;Euclid&lt;/span&gt;\r\n            &lt;span class=\"tooltip-content clearfix\"&gt;\r\n            &lt;img src=\"../plugins/images/tooltip/Euclid.png\" /&gt;\r\n            &lt;span class=\"tooltip-text\"&gt;Also known as Euclid of andria, was a Greek mathematician, often referred.&lt;/span&gt;\r\n            &lt;/span&gt;\r\n            &lt;/span&gt;</code>\r\n        </div>\r\n        <hr>\r\n        <p>Tesseract, finite but unbounded take root and flourish,\r\n          <span class=\"mytooltip tooltip-effect-4\">\r\n                    <span class=\"tooltip-item\">Euclid</span>\r\n                                <span class=\"tooltip-content clearfix\">\r\n                      <img src=\"assets/images/Euclid.png\">\r\n                      <span class=\"tooltip-text\">Also known as Euclid of andria, was a Greek mathematician, often referred.</span>\r\n                                </span>\r\n                                </span>\r\n          rogue laws of physics, star stuff harvesting star light.</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3 col-xs-12 col-sm-6\">\r\n      <div class=\"white-box\">\r\n        <h3 class=\"box-title m-b-0\">Tooltip Style 5\r\n          <a class=\"get-code\" data-toggle=\"collapse\" href=\"#tt4\" aria-expanded=\"true\"><i class=\"fa fa-code\" title=\"\" data-toggle=\"tooltip\" data-original-title=\"Get Code\"></i></a></h3>\r\n        <div class=\"collapse m-t-15\" id=\"tt4\" aria-expanded=\"true\">\r\n          <code>&lt;span class=\"mytooltip tooltip-effect-2\"&gt;\r\n            &lt;span class=\"tooltip-item\"&gt;Euclid&lt;/span&gt;\r\n            &lt;span class=\"tooltip-content clearfix\"&gt;\r\n            &lt;img src=\"../plugins/images/tooltip/Euclid.png\" /&gt;\r\n            &lt;span class=\"tooltip-text\"&gt;Also known as Euclid of andria, was a Greek mathematician, often referred.&lt;/span&gt;\r\n            &lt;/span&gt;\r\n            &lt;/span&gt;</code>\r\n        </div>\r\n        <hr>\r\n        <p>Tesseract, finite but unbounded take root and flourish,\r\n          <span class=\"mytooltip tooltip-effect-5\">\r\n                    <span class=\"tooltip-item\">Euclid</span>\r\n                                <span class=\"tooltip-content clearfix\">\r\n                      <span class=\"tooltip-text\">Also known as Euclid of andria was a Greek mamatician, own as Euclid of andria, was a Greek mathe often referred.</span>\r\n                                </span>\r\n                                </span>\r\n          rogue laws of physics, star stuff harvesting star light.</p>\r\n      </div>\r\n    </div>&ndash;&gt;\r\n  </div>-->\r\n  <!-- /.row -->\r\n  <!-- row -->\r\n<!--  <div class=\"row\">\r\n    <div class=\"col-md-3 col-xs-12 col-sm-6\">\r\n      <div class=\"white-box\">\r\n        <h3 class=\"box-title m-b-0\">Icon Tooltip 6 <a class=\"get-code\" data-toggle=\"collapse\" href=\"#pgr1\" aria-expanded=\"true\"><i class=\"fa fa-code\" title=\"\" data-toggle=\"tooltip\" data-original-title=\"Get Code\"></i></a></h3>\r\n        <div class=\"collapse m-t-15\" id=\"pgr1\" aria-expanded=\"true\">\r\n          <code>&lt;a class=\"mytooltip tooltip-effect-6\" href=\"#\"&gt;Photography&lt;span class=\"tooltip-content2\"&gt;&lt;i class=\"fa fa-camera-retro\"&gt;&lt;/i&gt;&lt;/span&gt;&lt;/a&gt;</code>\r\n        </div>\r\n        <hr>\r\n        <p>rogue laws of physics, star stuff <a class=\"mytooltip tooltip-effect-6\" href=\"#\">Home<span class=\"tooltip-content2\"><i class=\"fa fa-home\"></i></span></a> harvesting star light. </p>\r\n      </div>\r\n    </div>\r\n    &lt;!&ndash;<div class=\"col-md-3 col-xs-12 col-sm-6\">\r\n      <div class=\"white-box\">\r\n        <h3 class=\"box-title m-b-0\">Icon Tooltip 7 <a class=\"get-code\" data-toggle=\"collapse\" href=\"#pgr2\" aria-expanded=\"true\"><i class=\"fa fa-code\" title=\"\" data-toggle=\"tooltip\" data-original-title=\"Get Code\"></i></a></h3>\r\n        <div class=\"collapse m-t-15\" id=\"pgr2\" aria-expanded=\"true\">\r\n          <code>&lt;a class=\"mytooltip tooltip-effect-7\" href=\"#\"&gt;Photography&lt;span class=\"tooltip-content2\"&gt;&lt;i class=\"fa fa-camera-retro\"&gt;&lt;/i&gt;&lt;/span&gt;&lt;/a&gt;</code>\r\n        </div>\r\n        <hr>\r\n        <p>rogue laws of physics, star stuff <a class=\"mytooltip tooltip-effect-7\" href=\"#\">About me<span class=\"tooltip-content2\"><i class=\"fa fa-user\"></i></span></a> harvesting star light.</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3 col-xs-12 col-sm-6\">\r\n      <div class=\"white-box\">\r\n        <h3 class=\"box-title m-b-0\">Icon Tooltip 8\r\n          <a class=\"get-code\" data-toggle=\"collapse\" href=\"#pgr3\" aria-expanded=\"true\"><i class=\"fa fa-code\" title=\"\" data-toggle=\"tooltip\" data-original-title=\"Get Code\"></i></a></h3>\r\n        <div class=\"collapse m-t-15\" id=\"pgr3\" aria-expanded=\"true\">\r\n          <code>&lt;a class=\"mytooltip tooltip-effect-8\" href=\"#\"&gt;Photography&lt;span class=\"tooltip-content2\"&gt;&lt;i class=\"fa fa-camera-retro\"&gt;&lt;/i&gt;&lt;/span&gt;&lt;/a&gt;</code>\r\n        </div>\r\n        <hr>\r\n        <p>rogue laws of physics, star stuff <a class=\"mytooltip tooltip-effect-8\" href=\"#\">Photography<span class=\"tooltip-content2\"><i class=\"fa fa-camera-retro\"></i></span></a> harvesting star light.</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3 col-xs-12 col-sm-6\">\r\n      <div class=\"white-box\">\r\n        <h3 class=\"box-title m-b-0\">Icon Tooltip 9<a class=\"get-code\" data-toggle=\"collapse\" href=\"#pgr4\" aria-expanded=\"true\"><i class=\"fa fa-code\" title=\"\" data-toggle=\"tooltip\" data-original-title=\"Get Code\"></i></a></h3>\r\n        <div class=\"collapse m-t-15\" id=\"pgr4\" aria-expanded=\"true\">\r\n          <code>&lt;a class=\"mytooltip tooltip-effect-9\" href=\"#\"&gt;Photography&lt;span class=\"tooltip-content2\"&gt;&lt;i class=\"fa fa-camera-retro\"&gt;&lt;/i&gt;&lt;/span&gt;&lt;/a&gt;</code>\r\n        </div>\r\n        <hr>\r\n        <p>rogue laws of physics, star stuff <a class=\"mytooltip tooltip-effect-9\" href=\"#\">Work<span class=\"tooltip-content2\"><i class=\"fa fa-briefcase\"></i></span></a> harvesting star light. </p>\r\n      </div>\r\n    </div>&ndash;&gt;\r\n  </div>-->\r\n  <!-- /.row -->\r\n  <!-- row -->\r\n<!--  <div class=\"row\">\r\n    <div class=\"col-md-3 col-xs-12 col-sm-6\">\r\n      <div class=\"white-box\">\r\n        <h3 class=\"box-title\">Bloated Tooltip<a class=\"get-code\" data-toggle=\"collapse\" href=\"#pgr5\" aria-expanded=\"true\"><i class=\"fa fa-code\" title=\"\" data-toggle=\"tooltip\" data-original-title=\"Get Code\"></i></a></h3>\r\n        <div class=\"collapse m-t-15\" id=\"pgr5\" aria-expanded=\"true\">\r\n          <code>&lt;a class=\"mytooltip\" href=\"javascript:void(0)\"&gt;\r\n            &lt;i class=\"fa fa-fw fa-car\"&gt;&lt;/i&gt;Car\r\n            &lt;span class=\"tooltip-content3\"&gt;You can easily navigate the city by car.&lt;/span&gt;\r\n            &lt;/a&gt;\r\n          </code>\r\n        </div>\r\n        Star stuff harvesting <a class=\"mytooltip\" href=\"javascript:void(0)\"><i class=\"fa fa-fw fa-car\"></i> Car <span class=\"tooltip-content3\">You can easily navigate the city by car.</span></a>star light, encyclopaedia galactica are creatures of the cosmos.\r\n      </div>\r\n    </div>\r\n    &lt;!&ndash;<div class=\"col-md-3 col-xs-12 col-sm-6\">\r\n      <div class=\"white-box\">\r\n        <h3 class=\"box-title\">Bloated Tooltip<a class=\"get-code\" data-toggle=\"collapse\" href=\"#pgr6\" aria-expanded=\"true\"><i class=\"fa fa-code\" title=\"\" data-toggle=\"tooltip\" data-original-title=\"Get Code\"></i></a></h3>\r\n        <div class=\"collapse m-t-15\" id=\"pgr6\" aria-expanded=\"true\">\r\n          <code>&lt;a class=\"mytooltip\" href=\"javascript:void(0)\"&gt;\r\n            &lt;i class=\"fa fa-fw fa-car\"&gt;&lt;/i&gt;Car\r\n            &lt;span class=\"tooltip-content3\"&gt;You can easily navigate the city by car.&lt;/span&gt;\r\n            &lt;/a&gt;\r\n          </code>\r\n        </div>\r\n        Star stuff harvesting <a class=\"mytooltip\" href=\"javascript:void(0)\"><i class=\"fa fa-bicycle\"></i> Car <span class=\"tooltip-content3\">You can easily navigate the city by car.</span></a>star light, encyclopaedia galactica are creatures of the cosmos.\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3 col-xs-12 col-sm-6\">\r\n      <div class=\"white-box\">\r\n        <h3 class=\"box-title\">Bloated Tooltip<a class=\"get-code\" data-toggle=\"collapse\" href=\"#pgr7\" aria-expanded=\"true\"><i class=\"fa fa-code\" title=\"\" data-toggle=\"tooltip\" data-original-title=\"Get Code\"></i></a></h3>\r\n        <div class=\"collapse m-t-15\" id=\"pgr7\" aria-expanded=\"true\">\r\n          <code>&lt;a class=\"mytooltip\" href=\"javascript:void(0)\"&gt;\r\n            &lt;i class=\"fa fa-fw fa-car\"&gt;&lt;/i&gt;Car\r\n            &lt;span class=\"tooltip-content3\"&gt;You can easily navigate the city by car.&lt;/span&gt;\r\n            &lt;/a&gt;\r\n          </code>\r\n        </div>\r\n        Star stuff harvesting <a class=\"mytooltip\" href=\"javascript:void(0)\"><i class=\"fa fa-fw fa-car\"></i> Car <span class=\"tooltip-content3\">You can easily navigate the city by car.</span></a>star light, encyclopaedia galactica are creatures of the cosmos.\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3 col-xs-12 col-sm-6\">\r\n      <div class=\"white-box\">\r\n        <h3 class=\"box-title\">Bloated Tooltip<a class=\"get-code\" data-toggle=\"collapse\" href=\"#pgr8\" aria-expanded=\"true\"><i class=\"fa fa-code\" title=\"\" data-toggle=\"tooltip\" data-original-title=\"Get Code\"></i></a></h3>\r\n        <div class=\"collapse m-t-15\" id=\"pgr8\" aria-expanded=\"true\">\r\n          <code>&lt;a class=\"mytooltip\" href=\"javascript:void(0)\"&gt;\r\n            &lt;i class=\"fa fa-fw fa-car\"&gt;&lt;/i&gt;Car\r\n            &lt;span class=\"tooltip-content3\"&gt;You can easily navigate the city by car.&lt;/span&gt;\r\n            &lt;/a&gt;\r\n          </code>\r\n        </div>\r\n        Star stuff harvesting <a class=\"mytooltip\" href=\"javascript:void(0)\"><i class=\"fa fa-bicycle\"></i> Car <span class=\"tooltip-content3\">You can easily navigate the city by car.</span></a>star light, encyclopaedia galactica are creatures of the cosmos.\r\n      </div>\r\n    </div>&ndash;&gt;\r\n  </div>-->\r\n  <!-- /.row -->\r\n  <!-- .row -->\r\n<!--  <div class=\"row\">\r\n    <div class=\"col-md-12 col-xs-12\">\r\n      <div class=\"white-box\">\r\n        <h3 class=\"box-title\">Box Tooltip<a class=\"get-code\" data-toggle=\"collapse\" href=\"#pgr9\" aria-expanded=\"true\"><i class=\"fa fa-code\" title=\"\" data-toggle=\"tooltip\" data-original-title=\"Get Code\"></i></a></h3>\r\n        <div class=\"collapse m-t-15\" id=\"pgr9\" aria-expanded=\"true\">\r\n          <code>&lt;span class=\"mytooltip tooltip-effect-1\"&gt;\r\n            &lt;span class=\"tooltip-item2\"&gt;Euclid&lt;/span&gt;\r\n            &lt;span class=\"tooltip-content4 clearfix\"&gt;\r\n            &lt;span class=\"tooltip-text2\"&gt;\r\n            &lt;strong&gt;Euclid&lt;/strong&gt;\r\n          </code>\r\n        </div>\r\n        <p>Tesseract, finite but unbounded take root and flourish, <span class=\"mytooltip tooltip-effect-1\"><span class=\"tooltip-item2\">Euclid</span><span class=\"tooltip-content4 clearfix\"><span class=\"tooltip-text2\"><strong>Euclid</strong>, also known as Euclid of Alexandria, was a Greek mathematician, often referred to as the \"Father of Geometry\". He was active in Alexandria during the reign of Ptolemy I. <a href=\"http://en.wikipedia.org/wiki/Euclid\">Wikipedia</a></span></span>\r\n                                </span> rogue laws of physics, star stuff harvesting star light, encyclopaedia galactica are creatures of the cosmos the only home we've ever known ship of the imagination prime number <span class=\"mytooltip tooltip-effect-2\"><span class=\"tooltip-item2\">quasar</span><span class=\"tooltip-content4 clearfix\"><span class=\"tooltip-text2\"><strong>Quasars</strong> are believed to be powered by accretion of material into supermassive black holes in the nuclei of distant galaxies, making these luminous versions of the general... <a href=\"http://en.wikipedia.org/wiki/Quasar\">Wikipedia</a></span></span>\r\n                                </span> courage of our questions.</p>\r\n        <p>Colonies. Jean-François Champollion, billions upon billions descended from astronomers the sky calls to us! Made in the interiors of collapsing stars, billions upon billions radio telescope paroxysm of global death not a sunrise but a galaxyrise, gathered by gravity permanence of the stars?</p>\r\n      </div>\r\n    </div>\r\n  </div>-->\r\n  <!-- /.row -->\r\n  <!-- .row -->\r\n<!--  <div class=\"row\">\r\n    <div class=\"col-md-3 col-xs-12 col-sm-6\">\r\n      <div class=\"white-box\">\r\n        <h3 class=\"box-title\">Line Tooltip</h3> Tar light, encyclopaedia <a class=\"mytooltip\" href=\"javascript:void(0)\"> Line tooltip<span class=\"tooltip-content5\"><span class=\"tooltip-text3\"><span class=\"tooltip-inner2\">Howdy, Ben!<br> There are 13 unread messages in your inbox.</span></span></span></a> galactica are creatures of the cosmos.\r\n      </div>\r\n    </div>\r\n  </div>-->\r\n  <!-- /.row -->\r\n<!--Finalized view-->\r\n<section class=\"border-lightblue\" style=\"margin: 20px 0;\">\r\n  <div class=\"content-heading lightblue\">\r\n    <h2 class=\"h5 white-heading\">Tooltip</h2>\r\n  </div>\r\n  <div class=\"main-component-contents\">\r\n    <div style=\"margin: 50px 0\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4 col-xs-12 col-sm-6\">\r\n          <div class=\"white-box\">\r\n            <h3 class=\"box-title\">Bloated Tooltip\r\n            </h3>\r\n            <hr>\r\n            At the end of the day, if you're a professional athlete in track and field you are the CEO of your company.\r\n            <a class=\"mytooltip\" href=\"javascript:void(0)\"><span class=\"tooltip-item\"><i class=\"fa fa-fw fa-car\"></i> Touch Me </span>\r\n              <span class=\"tooltip-content3\">You can easily navigate the city by car.</span></a>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 col-xs-12 col-sm-6\">\r\n          <div class=\"white-box\">\r\n            <h3 class=\"box-title m-b-0\">Tooltip Style 1\r\n            </h3>\r\n            <hr>\r\n            <p>I think it's important to always keep professional and surround yourself with good people, work hard, and be nice to everyone.\r\n              <span class=\"mytooltip tooltip-effect-1\">\r\n                    <span class=\"tooltip-item\">Touch Me</span>\r\n                                <span class=\"tooltip-content clearfix\">\r\n                      <img src=\"assets/images/Euclid.png\">\r\n                      <span class=\"tooltip-text\">Caroline Maria Winberg is a Swedish model and actress.</span>\r\n                                </span>\r\n                                </span>\r\n            </p>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 col-xs-12 col-sm-6\">\r\n          <div class=\"white-box\">\r\n            <h3 class=\"box-title m-b-0\">Icon Tooltip 2  </h3>\r\n            <hr>\r\n            <p>A locator map, sometimes referred to simply as a locator. Find my home here.\r\n              <a class=\"mytooltip tooltip-effect-6\" href=\"#\"><span class=\"tooltip-item\">Touch Me</span><span class=\"tooltip-content2\"><i class=\"fa fa-home\"></i></span></a> </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- /.row -->\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 col-xs-12\">\r\n          <div class=\"white-box\">\r\n            <h3 class=\"box-title\">Box Tooltip\r\n            </h3>\r\n            <hr>\r\n            <p>Sir Isaac Newton PRS was an English mathematician, astronomer, theologian, author and\r\n              <span class=\"mytooltip tooltip-effect-1\">\r\n          <span class=\"tooltip-item2\">Touch Me</span>\r\n          <span class=\"tooltip-content4 clearfix\">\r\n            <span class=\"tooltip-text2\">\r\n              <strong>Newton</strong> also built the first practical reflecting telescope and developed a sophisticated theory of colour based on the observation that a prism decomposes white light into the colours of the visible spectrum.\r\n              <a href=\"https://en.wikipedia.org/wiki/Isaac_Newton\">Wikipedia</a>\r\n            </span>\r\n          </span>\r\n        </span>physicist (described in his own day as a \"natural philosopher\") who is widely recognised as one of the most influential scientists of all time and a key figure\r\n              <span class=\"mytooltip tooltip-effect-2\">\r\n          <span class=\"tooltip-item2\">Touch Me</span>\r\n          <span class=\"tooltip-content4 clearfix\">\r\n            <span class=\"tooltip-text2\">\r\n              <strong>Newton</strong>\r\n               was a fellow of Trinity College and the second Lucasian Professor of Mathematics at the University of Cambridge.\r\n              <a href=\"https://en.wikipedia.org/wiki/Isaac_Newton\">Wikipedia</a>\r\n            </span>\r\n          </span>\r\n        </span> in the scientific revolution.</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6 col-xs-12 col-sm-6\">\r\n          <div class=\"white-box\">\r\n            <h3 class=\"box-title\">Line Tooltip</h3>\r\n            <hr>\r\n            Tar light, encyclopaedia <a class=\"mytooltip\" href=\"javascript:void(0)\"> Touch Me <span class=\"tooltip-content5\"><span class=\"tooltip-text3\"><span class=\"tooltip-inner2\">Howdy, Ben!<br> There are 13 unread messages in your inbox.</span></span></span></a> galactica are creatures of the cosmos.\r\n            <p>Colonies. Jean-François Champollion, billions upon billions descended from astronomers the sky calls to us!</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- /.row -->\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/tooltip/tooltip.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TooltipComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tooltip_model__ = __webpack_require__("../../../../../src/app/tooltip/tooltip.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TooltipComponent = (function () {
    function TooltipComponent() {
        this.tooltipCssClass = 'tooltip-effect-1';
        this.tooltip = [
            new __WEBPACK_IMPORTED_MODULE_1__tooltip_model__["a" /* Tooltip */]('Tooltip1', 'tooltip-effect-1'),
            new __WEBPACK_IMPORTED_MODULE_1__tooltip_model__["a" /* Tooltip */]('Tooltip2', 'tooltip-effect-2'),
            new __WEBPACK_IMPORTED_MODULE_1__tooltip_model__["a" /* Tooltip */]('Tooltip3', 'tooltip-effect-3'),
            new __WEBPACK_IMPORTED_MODULE_1__tooltip_model__["a" /* Tooltip */]('Tooltip4', 'tooltip-effect-4'),
            new __WEBPACK_IMPORTED_MODULE_1__tooltip_model__["a" /* Tooltip */]('Tooltip5', 'tooltip-effect-5'),
            new __WEBPACK_IMPORTED_MODULE_1__tooltip_model__["a" /* Tooltip */]('Tooltip6', 'tooltip-effect-6'),
            new __WEBPACK_IMPORTED_MODULE_1__tooltip_model__["a" /* Tooltip */]('Tooltip7', 'tooltip-effect-7'),
            new __WEBPACK_IMPORTED_MODULE_1__tooltip_model__["a" /* Tooltip */]('Tooltip8', 'tooltip-effect-8')
            /*new Tooltip('Tooltip9'),
            new Tooltip('Tooltip10'),
            new Tooltip('Tooltip11'),
            new Tooltip('Tooltip12'),
            new Tooltip('Tooltip13'),
            new Tooltip('Tooltip14'),
            new Tooltip('Tooltip15'),
            new Tooltip('Tooltip16'),
            new Tooltip('Tooltip17'),
            new Tooltip('Tooltip18')*/
        ];
    }
    TooltipComponent.prototype.onTooltipClick = function (tooltip) {
        console.log('tooltip is clicked', tooltip);
        this.tooltipCssClass = tooltip.cssClass;
        /*tooltip.isActive = true;*/
        this.selected = tooltip;
    };
    TooltipComponent.prototype.isActiveTooltip = function (item) {
        console.log('item active', item);
        return this.selected === item;
    };
    TooltipComponent.prototype.ngOnInit = function () {
        console.log('init tooltip===========');
    };
    TooltipComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tooltip',
            template: __webpack_require__("../../../../../src/app/tooltip/tooltip.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tooltip/tooltip.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TooltipComponent);
    return TooltipComponent;
}());



/***/ }),

/***/ "../../../../../src/app/tooltip/tooltip.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tooltip; });
var Tooltip = (function () {
    function Tooltip(name, cssClass) {
        this.title = name;
        this.cssClass = cssClass;
    }
    return Tooltip;
}());



/***/ }),

/***/ "../../../../../src/assets/images/shape1.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "shape1.81d3bf4de8a00dba63e5.svg";

/***/ }),

/***/ "../../../../../src/assets/images/tooltip1.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "tooltip1.971a8110434b3068452f.svg";

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