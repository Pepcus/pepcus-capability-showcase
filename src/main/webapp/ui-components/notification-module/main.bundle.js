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

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n        <app-notificationmodule></app-notificationmodule>\r\n        <!--<app-emailtemplate></app-emailtemplate>-->\r\n        <!--<app-loader></app-loader>-->\r\n        <!--<app-animate></app-animate>-->\r\n<!--      <app-animate></app-animate>\r\n      <app-notificationmodule></app-notificationmodule>\r\n      <app-tooltip></app-tooltip>-->\r\n      <!--<app-notification></app-notification>-->\r\n     <!-- <h3>I'm in the AppComponent!</h3>\r\n      <hr>-->\r\n      <!--<app-servers></app-servers>-->\r\n      <!--<div app-servers></div>-->\r\n      <!--<div class=\"app-servers\"></div>-->\r\n<!--      <app-advisor></app-advisor>\r\n      <hr>-->\r\n      <!--<app-notification></app-notification>-->\r\n<!--      <hr>\r\n      <app-chat></app-chat>\r\n      <hr>\r\n      <app-animate></app-animate>\r\n      <hr>\r\n      <app-crop></app-crop>\r\n      <hr>\r\n      <app-emailtemplate></app-emailtemplate>\r\n      <hr>\r\n      <app-socialmedia></app-socialmedia>\r\n      <hr>\r\n      <app-typography></app-typography>\r\n      <hr>\r\n      <app-tooltip></app-tooltip>\r\n      <hr>\r\n        { path: 'Tooltip-component', component: TooltipComponent },\r\n  { path: 'Advisor-component', component: AdvisorComponent },\r\n  { path: 'Animate', component: AnimateComponent },\r\n  { path: 'Chat-component', component: ChatComponent },\r\n  { path: 'Crop-component', component: CropComponent },\r\n  { path: 'Email-component', component: EmailtemplateComponent },\r\n  { path: 'Loader-component', component: LoaderComponent },\r\n  { path: 'Notification-component', component: NotificationComponent },\r\n  { path: 'Notification-Module', component: NotificationmoduleComponent },\r\n  { path: 'Typography-component', component: TypographyComponent },\r\n      <app-notificationmodule></app-notificationmodule>-->\r\n        <!--<app-notificationmodule></app-notificationmodule>\r\n        <app-emailtemplate></app-emailtemplate>-->\r\n        <!--<app-socialmedia></app-socialmedia>-->\r\n        <!--<app-notification></app-notification>-->\r\n        <!--<ul>\r\n            <li><a [routerLink] = \"['/Tooltip-component']\">Tooltip Component</a></li>\r\n            <li><a [routerLink] = \"['/Advisor-component']\">Advisor-component</a></li>\r\n            <li><a [routerLink] = \"['/Animate']\">Animate</a></li>\r\n            <li><a [routerLink] = \"['/Chat-component']\">Chat-component</a></li>\r\n            <li><a [routerLink] = \"['/Crop-component']\">Crop-component</a></li>\r\n            <li><a [routerLink] = \"['/Email-component']\">Email-component</a></li>\r\n            <li><a [routerLink] = \"['/Loader-component']\">Loader-component</a></li>\r\n            <li><a [routerLink] = \"['/Notification-component']\">Notification Component</a></li>\r\n            <li><a [routerLink] = \"['/Notification-Module']\">Notification Module Component</a></li>\r\n            <li><a [routerLink] = \"['/Typography-component']\">Typography Component</a></li>\r\n        </ul>\r\n        <router-outlet></router-outlet>-->\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__notificationmodule_notificationmodule_component__ = __webpack_require__("../../../../../src/app/notificationmodule/notificationmodule.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__notificationmodule_notificationlist_notificationlist_component__ = __webpack_require__("../../../../../src/app/notificationmodule/notificationlist/notificationlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var appRoutes = [
    { path: 'Notification-Module', component: __WEBPACK_IMPORTED_MODULE_8__notificationmodule_notificationmodule_component__["a" /* NotificationmoduleComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__notificationmodule_notificationmodule_component__["a" /* NotificationmoduleComponent */],
                __WEBPACK_IMPORTED_MODULE_9__notificationmodule_notificationlist_notificationlist_component__["a" /* NotificationlistComponent */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* CUSTOM_ELEMENTS_SCHEMA */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_pagination__["a" /* NgxPaginationModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
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

/***/ "../../../../../src/app/notificationmodule/notification.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Notification; });
var Notification = (function () {
    function Notification(name, desc, imagePath, time, read) {
        this.title = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.time = time;
        this.read = read;
    }
    return Notification;
}());



/***/ }),

/***/ "../../../../../src/app/notificationmodule/notificationlist/notificationlist.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/notificationmodule/notificationlist/notificationlist.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  notificationlist works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/notificationmodule/notificationlist/notificationlist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationlistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotificationlistComponent = (function () {
    function NotificationlistComponent() {
    }
    NotificationlistComponent.prototype.ngOnInit = function () {
    };
    NotificationlistComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-notificationlist',
            template: __webpack_require__("../../../../../src/app/notificationmodule/notificationlist/notificationlist.component.html"),
            styles: [__webpack_require__("../../../../../src/app/notificationmodule/notificationlist/notificationlist.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotificationlistComponent);
    return NotificationlistComponent;
}());



/***/ }),

/***/ "../../../../../src/app/notificationmodule/notificationmodule.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".border-lightblue {\r\n  border: 1px solid #f2f2f2;\r\n}\r\n.lightblue{\r\n  background: #f2f2f2;\r\n}\r\n.content-heading {\r\n  padding: 10px;\r\n}\r\n.content-heading .h5.white-heading{\r\n  color: #3e6174;\r\n  margin: 0;\r\n  font-size: 16px;\r\n  font-weight: 700;\r\n}\r\n.main-component-contents{\r\n  padding: 15px;\r\n  overflow: hidden;\r\n}\r\n.component-inner{\r\n\r\n}\r\n.white-box.variant2{\r\n  width: 350px;\r\n  margin-right: 0;\r\n  padding: 0;\r\n}\r\n.white-box {\r\n  width: 430px;\r\n  margin: 25px  auto 0;\r\n  padding: 0 0 25px 0;\r\n  float: left;\r\n  margin-right: 15px;\r\n}\r\n.white-box .box-title {\r\n  padding: 0 25px;\r\n}\r\n.NotificationModuleWrapper h4{\r\n  padding: 0 25px 15px 25px;\r\n  margin-bottom: 0;\r\n  border-bottom: 1px solid #eee;\r\n}\r\n.NotificationModuleWrapper h5{\r\n  font-size: 18px;\r\n  font-weight: bold;\r\n}\r\n.mark_all:hover{\r\n  color: #fff;\r\n  text-decoration: none;\r\n  background: #ef5350;\r\n}\r\n.mark_all{\r\n  display: inline-block;\r\n  float: right;\r\n  font-size: 14px;\r\n  color: #d22724;\r\n  padding: 5px 10px;\r\n  cursor: pointer;\r\n}\r\n.notification_content{\r\n}\r\n.notifications{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: start;\r\n      -ms-flex-pack: start;\r\n          justify-content: flex-start;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n.notification_img{\r\n  width: 80px;\r\n  height: 80px;\r\n  border-radius: 50%;\r\n  overflow: hidden;\r\n  border: 1px solid #adadad;\r\n  min-width: 80px;\r\n  margin-right: 20px;\r\n}\r\n\r\n.notification_content p{\r\n  overflow: hidden;\r\n  display: -webkit-box;\r\n  -webkit-line-clamp: 2;\r\n  -webkit-box-orient: vertical;\r\n  font-size: 12px;\r\n}\r\n\r\n.notification_content span{\r\n  color: #d22724;\r\n}\r\n\r\n.notification_img img{\r\n  max-width: 100%;\r\n}\r\n/*\r\n.notification_module{\r\n  max-height: 300px;\r\n  overflow-y: auto;\r\n}\r\n*/\r\n\r\n.notifications_wrapper.read{\r\n  background: #fafafa;\r\n}\r\n.notifications_wrapper.read /deep/ .notification_content h5{\r\n  font-size: 16px;\r\n  font-weight: 300;\r\n}\r\n.notifications_wrapper{\r\n  padding: 10px 25px;\r\n  border-bottom: 1px solid #e5e5e5;\r\n  background: #fff;\r\n}\r\n\r\n.ngx-pagination{\r\n  display: none;\r\n}\r\n\r\n.pagination_controls /deep/ .ngx-pagination {\r\n  padding: 20px 15px 0;\r\n  text-align: right;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.pagination_controls /deep/ .ngx-pagination li.current{\r\n  padding: 5px 15px;\r\n  background: #d22724;\r\n  margin-right: 5px;\r\n  border: 1px solid #d22724;\r\n}\r\n.pagination_controls /deep/ .ngx-pagination a, .pagination_controls /deep/ .ngx-pagination button, .pagination_controls /deep/ .ngx-pagination .disabled{\r\n  padding: 5px 15px;\r\n  margin-right: 5px;\r\n  border: 1px solid #f6947d;\r\n}\r\n.pagination_controls /deep/ .ngx-pagination a:hover, .pagination_controls /deep/ .ngx-pagination button:hover{\r\n  background: #d22724;\r\n  color: #fff;\r\n  text-decoration: none;\r\n}\r\n\r\n.read-notification{\r\n  background: #fafafa;\r\n  display: inline-block;\r\n  padding: 2px 5px;\r\n  font-size: 11px;\r\n  float: right;\r\n}\r\n.NotificationModuleWrapper.variant .notification_module{\r\n  max-height: 350px;\r\n  overflow-y: auto;\r\n}\r\n.NotificationModuleWrapper.variant .notification_img{\r\n  width: 40px;\r\n  height: 40px;\r\n  min-width: 40px;\r\n}\r\n.read-notification.read{\r\n  display: none;\r\n}\r\n.NotificationModuleWrapper.variant h5{\r\n  font-size: 14px;\r\n}\r\n.NotificationModuleWrapper.variant h4{\r\n  padding:   0 25px 5px 15px;\r\n  font-size: 13px;\r\n}\r\n.NotificationModuleWrapper.variant .notifications_wrapper.read h5{\r\n  font-size: 13px;\r\n}\r\n.NotificationModuleWrapper.variant .notifications_wrapper h5{\r\n  font-size: 13px;\r\n  margin-bottom: 5px;\r\n}\r\n.NotificationModuleWrapper.variant .notifications_wrapper{\r\n  padding: 10px;\r\n  background: #fafafa;\r\n}\r\n.NotificationModuleWrapper.variant .notifications_wrapper.read{\r\n  background: #fff;\r\n}\r\n.NotificationModuleWrapper.variant .notification_content span{\r\n  font-size: 12px;\r\n}\r\n.NotificationModuleWrapper.variant .notification_content{\r\n  width: 100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/notificationmodule/notificationmodule.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"border-lightblue\" style=\"margin: 20px 0;\">\r\n  <div class=\"content-heading lightblue\">\r\n    <h2 class=\"h5 white-heading\">Notification Module </h2>\r\n  </div>\r\n  <div class=\"main-component-contents\">\r\n    <div class=\"component-inner\">\r\n      <div class=\"white-box\">\r\n        <!--<h3 class=\"box-title\">Notification Module</h3>\r\n        <hr>-->\r\n        <div class=\"NotificationModuleWrapper\">\r\n          <h4>Notifications <a class=\"mark_all\" (click)=\"onMarkAllRead()\">Mark all as read</a></h4>\r\n          <div class=\"notification_module\">\r\n            <div class=\"notifications_wrapper\"\r\n                 [ngClass]=\"{'read':notification.read || markAllRead}\"\r\n                 *ngFor=\"let notification of notifications | paginate: { itemsPerPage: 3, currentPage: p }\"\r\n                 (click)=\"onClickRead(notification)\">\r\n              <div class=\"notifications\">\r\n                <div class=\"notification_img\">\r\n                  <img [src]=\"notification.imagePath\" alt=\"\" />\r\n                </div>\r\n                <div class=\"notification_content\">\r\n                  <h5>{{ notification.title }}</h5>\r\n                  <p>{{ notification.description }}</p>\r\n                  <span> <i class=\"fa fa-play-circle\" aria-hidden=\"true\"></i>  {{ notification.time }}</span>\r\n                  <span class=\"read-notification\" [ngClass]=\"{'read':notification.read || markAllRead}\"> Unread </span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div><pagination-controls class=\"pagination_controls\" (pageChange)=\"p = $event\"></pagination-controls></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"white-box variant2\">\r\n        <!--<h3 class=\"box-title\">Notification Module</h3>\r\n        <hr>-->\r\n        <div class=\"NotificationModuleWrapper variant\">\r\n          <h4>Notifications </h4>\r\n          <ng-scrollbar>\r\n            <div class=\"notification_module\">\r\n              <div class=\"notifications_wrapper\"\r\n                   [ngClass]=\"{'read':notification.read || markAllRead}\"\r\n                   *ngFor=\"let notification of notifications2\"\r\n                   (click)=\"onClickRead(notification)\">\r\n                <div class=\"notifications\">\r\n                  <div class=\"notification_img\">\r\n                    <img [src]=\"notification.imagePath\" alt=\"\" />\r\n                  </div>\r\n                  <div class=\"notification_content\">\r\n                    <h5>{{ notification.title }}</h5>\r\n                    <!--<p>{{ notification.description }}</p>-->\r\n                    <span> <i class=\"fa fa-play-circle\" aria-hidden=\"true\"></i>  {{ notification.time }}</span>\r\n                    <span class=\"read-notification\" [ngClass]=\"{'read':notification.read || markAllRead}\"> Unread </span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </ng-scrollbar>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/notificationmodule/notificationmodule.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationmoduleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__notification_model__ = __webpack_require__("../../../../../src/app/notificationmodule/notification.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_scrollbar__ = __webpack_require__("../../../../ngx-scrollbar/esm5/ngx-scrollbar.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotificationmoduleComponent = (function () {
    function NotificationmoduleComponent() {
        this.p = [];
        this.markAllRead = false;
        this.read = false;
        this.notifications = [
            new __WEBPACK_IMPORTED_MODULE_1__notification_model__["a" /* Notification */]('Lorem Ipsum is simply dummy', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry', 'assets/images/sonu.jpg', '30 mins ago', false),
            new __WEBPACK_IMPORTED_MODULE_1__notification_model__["a" /* Notification */]('Lorem Ipsum is simply dummy', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry', 'assets/images/ritesh.jpg', '30 mins ago', true),
            new __WEBPACK_IMPORTED_MODULE_1__notification_model__["a" /* Notification */]('Lorem Ipsum is simply dummy', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry', 'assets/images/genu.jpg', '30 mins ago', false),
            new __WEBPACK_IMPORTED_MODULE_1__notification_model__["a" /* Notification */]('Lorem Ipsum is simply dummy', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry', 'assets/images/sonu.jpg', '30 mins ago', false),
            new __WEBPACK_IMPORTED_MODULE_1__notification_model__["a" /* Notification */]('Lorem Ipsum is simply dummy', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry', 'assets/images/sonu.jpg', '30 mins ago', false),
            new __WEBPACK_IMPORTED_MODULE_1__notification_model__["a" /* Notification */]('Lorem Ipsum is simply dummy', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry', 'assets/images/sonu.jpg', '30 mins ago', false),
            new __WEBPACK_IMPORTED_MODULE_1__notification_model__["a" /* Notification */]('Lorem Ipsum is simply dummy', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry', 'assets/images/sonu.jpg', '30 mins ago', false),
            new __WEBPACK_IMPORTED_MODULE_1__notification_model__["a" /* Notification */]('Lorem Ipsum is simply dummy', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry', 'assets/images/sonu.jpg', '30 mins ago', false),
            new __WEBPACK_IMPORTED_MODULE_1__notification_model__["a" /* Notification */]('Lorem Ipsum is simply dummy', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry', 'assets/images/sonu.jpg', '30 mins ago', false),
            new __WEBPACK_IMPORTED_MODULE_1__notification_model__["a" /* Notification */]('Lorem Ipsum is simply dummy', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry', 'assets/images/sonu.jpg', '30 mins ago', false),
            new __WEBPACK_IMPORTED_MODULE_1__notification_model__["a" /* Notification */]('Lorem Ipsum is simply dummy', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry', 'assets/images/sonu.jpg', '30 mins ago', false),
            new __WEBPACK_IMPORTED_MODULE_1__notification_model__["a" /* Notification */]('Lorem Ipsum is simply dummy', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry', 'assets/images/sonu.jpg', '30 mins ago', false)
        ];
        this.notifications2 = [
            new __WEBPACK_IMPORTED_MODULE_1__notification_model__["a" /* Notification */]('Lorem Ipsum is simply dummy', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry', 'assets/images/sonu.jpg', '30 mins ago', false),
            new __WEBPACK_IMPORTED_MODULE_1__notification_model__["a" /* Notification */]('Lorem Ipsum is simply dummy', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry', 'assets/images/ritesh.jpg', '30 mins ago', true),
            new __WEBPACK_IMPORTED_MODULE_1__notification_model__["a" /* Notification */]('Lorem Ipsum is simply dummy', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry', 'assets/images/genu.jpg', '30 mins ago', false),
            new __WEBPACK_IMPORTED_MODULE_1__notification_model__["a" /* Notification */]('Lorem Ipsum is simply dummy', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry', 'assets/images/sonu.jpg', '30 mins ago', false),
            new __WEBPACK_IMPORTED_MODULE_1__notification_model__["a" /* Notification */]('Lorem Ipsum is simply dummy', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry', 'assets/images/sonu.jpg', '30 mins ago', false),
            new __WEBPACK_IMPORTED_MODULE_1__notification_model__["a" /* Notification */]('Lorem Ipsum is simply dummy', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry', 'assets/images/sonu.jpg', '30 mins ago', false),
            new __WEBPACK_IMPORTED_MODULE_1__notification_model__["a" /* Notification */]('Lorem Ipsum is simply dummy', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry', 'assets/images/sonu.jpg', '30 mins ago', false),
            new __WEBPACK_IMPORTED_MODULE_1__notification_model__["a" /* Notification */]('Lorem Ipsum is simply dummy', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry', 'assets/images/sonu.jpg', '30 mins ago', false),
            new __WEBPACK_IMPORTED_MODULE_1__notification_model__["a" /* Notification */]('Lorem Ipsum is simply dummy', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry', 'assets/images/sonu.jpg', '30 mins ago', false),
            new __WEBPACK_IMPORTED_MODULE_1__notification_model__["a" /* Notification */]('Lorem Ipsum is simply dummy', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry', 'assets/images/sonu.jpg', '30 mins ago', false),
            new __WEBPACK_IMPORTED_MODULE_1__notification_model__["a" /* Notification */]('Lorem Ipsum is simply dummy', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry', 'assets/images/sonu.jpg', '30 mins ago', false),
            new __WEBPACK_IMPORTED_MODULE_1__notification_model__["a" /* Notification */]('Lorem Ipsum is simply dummy', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry', 'assets/images/sonu.jpg', '30 mins ago', false)
        ];
    }
    NotificationmoduleComponent.prototype.onMarkAllRead = function () {
        console.log('markAllRead====', this.markAllRead);
        this.markAllRead = true;
        this.read = true;
    };
    NotificationmoduleComponent.prototype.onClickRead = function (notification) {
        notification.read = true;
        console.log('notification=====', notification);
    };
    NotificationmoduleComponent.prototype.ngOnInit = function () {
    };
    NotificationmoduleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-notificationmodule',
            template: __webpack_require__("../../../../../src/app/notificationmodule/notificationmodule.component.html"),
            styles: [__webpack_require__("../../../../../src/app/notificationmodule/notificationmodule.component.css")]
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ngx_scrollbar__["a" /* ScrollbarModule */]
            ]
        }),
        __metadata("design:paramtypes", [])
    ], NotificationmoduleComponent);
    return NotificationmoduleComponent;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
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