(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'moneyManager';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: provideConfig, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "provideConfig", function() { return provideConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _userlogin_userlogin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./userlogin/userlogin.component */ "./src/app/userlogin/userlogin.component.ts");
/* harmony import */ var _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mainpage/mainpage.component */ "./src/app/mainpage/mainpage.component.ts");
/* harmony import */ var _cards_dashboard_cards_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cards-dashboard/cards-dashboard.component */ "./src/app/cards-dashboard/cards-dashboard.component.ts");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _pipes_card_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pipes/card-pipe */ "./src/app/pipes/card-pipe.ts");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.es5.js");
/* harmony import */ var _directives_animate_count_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./directives/animate-count.directive */ "./src/app/directives/animate-count.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















// custom pipe

// google login



var appRoutes = [
    {
        path: 'login',
        component: _userlogin_userlogin_component__WEBPACK_IMPORTED_MODULE_8__["UserloginComponent"]
    },
    {
        path: 'app-mainpage',
        component: _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_9__["MainpageComponent"]
        // , canActivate: [AuthGuardService]
    },
    {
        path: 'card-dashboard',
        component: _cards_dashboard_cards_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["CardsDashboardComponent"]
    },
    { path: '**', redirectTo: 'login' }
];
var config = new angularx_social_login__WEBPACK_IMPORTED_MODULE_16__["AuthServiceConfig"]([
    {
        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_16__["GoogleLoginProvider"].PROVIDER_ID,
        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_16__["GoogleLoginProvider"]('554568905147-rlovhhal32tm1aoo1ocm78qn1674r0co.apps.googleusercontent.com')
    }
]);
function provideConfig() {
    return config;
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _userlogin_userlogin_component__WEBPACK_IMPORTED_MODULE_8__["UserloginComponent"],
                _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_9__["MainpageComponent"],
                _cards_dashboard_cards_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["CardsDashboardComponent"],
                _pipes_card_pipe__WEBPACK_IMPORTED_MODULE_15__["CardPipe"],
                _directives_animate_count_directive__WEBPACK_IMPORTED_MODULE_17__["AnimateCountDirective"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes),
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatChipsModule"],
                angularx_social_login__WEBPACK_IMPORTED_MODULE_16__["SocialLoginModule"]
            ],
            providers: [
                {
                    provide: angularx_social_login__WEBPACK_IMPORTED_MODULE_16__["AuthServiceConfig"],
                    useFactory: provideConfig
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cards-dashboard/cards-dashboard.component.css":
/*!***************************************************************!*\
  !*** ./src/app/cards-dashboard/cards-dashboard.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cards-section {\r\n  /* background: #151936; */\r\n  /* background-image: linear-gradient(to right, #b2e1e8, #c5a6a6); */\r\n  /* background: linear-gradient(135deg, rgb(208, 189, 249) 0%, rgb(125, 226, 255) 100%); */\r\n  background: linear-gradient(\r\n    135deg,\r\n    rgb(255, 255, 255) 0%,\r\n    rgb(202, 202, 202) 100%\r\n  );\r\n  min-height: 100vh;\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.cards-outer-block {\r\n  width: 260px;\r\n  max-width: 320px;\r\n  -webkit-perspective: 1200px;\r\n          perspective: 1200px;\r\n}\r\n\r\n.card-block {\r\n  width: 230px;\r\n  color: #fff;\r\n  margin: 15px 15px 15px 15px;\r\n  padding: 15px;\r\n  background: linear-gradient(to right, #4684d2, #707af1);\r\n  border-radius: 10px;\r\n  box-shadow: 0px 5px 20px -5px #777;\r\n  cursor: pointer;\r\n  transition: all linear 30ms;\r\n  -webkit-transform: rotateY(0deg);\r\n          transform: rotateY(0deg);\r\n}\r\n\r\n.card-block.selected {\r\n  background: linear-gradient(to right, #f76f6f, #b34f4f);\r\n  width: 240px;\r\n  margin-left: 30px;\r\n  /* transform: rotateY(20deg); */\r\n}\r\n\r\n.card-block ul {\r\n  margin: 0px;\r\n  list-style: none;\r\n  padding: 0px;\r\n  font-size: 13px;\r\n}\r\n\r\n.card-block ul li label {\r\n  opacity: 0.5;\r\n  display: block;\r\n  font-size: 10px;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\nspan.cross {\r\n  position: absolute;\r\n  right: 8px;\r\n  top: 8px;\r\n  cursor: pointer;\r\n}\r\n\r\n.add-card-block {\r\n  width: 100%;\r\n  padding: 20px;\r\n}\r\n\r\n.add-card-block button {\r\n  margin: 6px 0px;\r\n  padding: 4px 20px;\r\n  font-size: 13px;\r\n  font-weight: 600;\r\n  border-radius: 2px;\r\n  box-shadow: none;\r\n  background: transparent;\r\n  border: 1px solid #b6886f;\r\n  color: #b5866e;\r\n}\r\n\r\n.add-card-block form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  max-width: 340px;\r\n  padding: 20px;\r\n  border: 1px solid #56a6b4;\r\n  background: #c4e0e5;\r\n  box-shadow: 0px 5px 20px -5px #777;\r\n}\r\n\r\n.add-card-block form h5 {\r\n  margin: -20px;\r\n  margin-bottom: 10px;\r\n  background: #56a6b4;\r\n  position: relative;\r\n  padding: 10px;\r\n  color: #c3dfe4;\r\n  font-weight: 400;\r\n}\r\n\r\n.add-card-block form input {\r\n  max-width: 300px;\r\n  margin: 8px 0;\r\n  padding: 4px 20px;\r\n  font-size: 13px;\r\n  background: transparent;\r\n  border: 1px solid #53a5b2;\r\n  color: #146b79;\r\n}\r\n\r\n.add-card-block form input::-webkit-input-placeholder {\r\n  color: #6b6b6b;\r\n}\r\n\r\n.add-card-block form input::-ms-input-placeholder {\r\n  color: #6b6b6b;\r\n}\r\n\r\n.add-card-block form input::placeholder {\r\n  color: #6b6b6b;\r\n}\r\n\r\n.add-card-block form button {\r\n  max-width: 200px;\r\n}\r\n\r\n.master-card {\r\n  background-image: url(\"data:image/png;base64,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\");\r\n  width: 60px;\r\n  background-size: contain;\r\n  display: block;\r\n  height: 40px;\r\n  background-repeat: no-repeat;\r\n  float: right;\r\n}\r\n\r\n.visa-card {\r\n  background-image: url(\"data:image/png;base64,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\");\r\n  width: 60px;\r\n  background-size: contain;\r\n  display: inline-block;\r\n  height: 40px;\r\n  background-repeat: no-repeat;\r\n  opacity: 0.5;\r\n}\r\n\r\n.card-block ul li.card-num {\r\n  letter-spacing: 3px;\r\n  text-align: center;\r\n  margin: 15px 0px;\r\n}\r\n\r\n.card-type {\r\n  position: absolute;\r\n  left: 20px;\r\n  top: 8px;\r\n  text-transform: uppercase;\r\n  font-size: 10px;\r\n  letter-spacing: 3px;\r\n  opacity: 0.5;\r\n}\r\n\r\n.card-service::after {\r\n  position: absolute;\r\n  content: attr(title);\r\n  width: 110px;\r\n  right: 10px;\r\n  bottom: 5px;\r\n  font-size: 20px;\r\n  text-align: right;\r\n  opacity: 0.1;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.cards-container {\r\n  width: 100%;\r\n  padding: 30px;\r\n}\r\n\r\n.cards-detail-section {\r\n  padding: 5px 15px;\r\n  display: flex;\r\n  align-items: flex-start;\r\n}\r\n\r\n.cards-detail-block {\r\n  padding: 5px 15px;\r\n  flex: 5 auto;\r\n}\r\n\r\n.cards-overview-block {\r\n  box-shadow: 4px 0 14px -20px #000000, inset -4px 0px 16px -20px #000000;\r\n  border-right: 1px solid #f5f5f5;\r\n  flex: 1 auto;\r\n  text-align: right;\r\n  padding-right: 30px;\r\n}\r\n\r\n.cards-overview-block h1 {\r\n  font-size: 60px;\r\n  color: #ff7474;\r\n  text-shadow: 0px 8px 9px #e0baba;\r\n  margin: 5px 0px;\r\n}\r\n\r\n.cards-overview-block ul {\r\n  list-style: none;\r\n}\r\n\r\n.category-block {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 5px;\r\n  margin: 5px;\r\n  color: #83719e;\r\n  border-bottom: 1px solid #efefef;\r\n  box-shadow: 0px 6px 10px -8px #ccc;\r\n}\r\n\r\n.category-icon {\r\n  flex: 1 auto;\r\n  max-width: 90px;\r\n  text-align: center;\r\n  height: 100%;\r\n  padding: 5px;\r\n}\r\n\r\n.category-icon label{\r\n  display: block;\r\n  font-size: 11px;\r\n}\r\n\r\n.category-icon .material-icons{\r\n  color: #a090b9\r\n}\r\n\r\n.category-detail {\r\n  flex: 6 auto;\r\n  font-size: 13px\r\n}\r\n\r\n.category-detail p {\r\n  margin: 0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/cards-dashboard/cards-dashboard.component.html":
/*!****************************************************************!*\
  !*** ./src/app/cards-dashboard/cards-dashboard.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"cards-section\">\r\n  <div class=\"cards-outer-block\">\r\n    <div\r\n      *ngFor=\"let card of cardsArray; let i = index\"\r\n      class=\"card-block\"\r\n      [class.selected]=\"i === selectedCardIndex\"\r\n      (click)=\"onSelectCard(card, i)\"\r\n    >\r\n      <ul>\r\n        <li>\r\n          <span class=\"visa-card\"></span>\r\n          <span class=\"card-type\"> {{ card.card_type }}</span\r\n          ><span class=\"master-card\"></span>\r\n        </li>\r\n        <li class=\"hidden\">\r\n          {{ card.card_id }}\r\n        </li>\r\n        <li class=\"card-num\">\r\n          {{ card.card_num | CardPipe }}\r\n        </li>\r\n        <li>\r\n          <label>CARD HOLDER</label>\r\n          {{ card.card_name | uppercase }}\r\n        </li>\r\n        <span class=\"card-service\" [attr.title]=\"card.card_service\"></span>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"cards-container\">\r\n    <div class=\"add-card-block\">\r\n      <button (click)=\"AddCard()\">Add Card</button>\r\n      <form\r\n        [formGroup]=\"cardForm\"\r\n        (ngSubmit)=\"onCardSubmit(cardForm.value)\"\r\n        *ngIf=\"enableAddCard\"\r\n      >\r\n        <h5>Add Card <span class=\"cross\" (click)=\"AddCard()\">x</span></h5>\r\n        <input\r\n          type=\"text\"\r\n          formControlName=\"card_service\"\r\n          placeholder=\"card_service\"\r\n          value=\"\"\r\n        />\r\n        <input\r\n          type=\"text\"\r\n          formControlName=\"card_type\"\r\n          placeholder=\"card_type\"\r\n          value=\"\"\r\n        />\r\n        <input\r\n          type=\"text\"\r\n          formControlName=\"card_name\"\r\n          placeholder=\"card_name\"\r\n          value=\"\"\r\n        />\r\n\r\n        <input\r\n          type=\"text\"\r\n          formControlName=\"card_num\"\r\n          placeholder=\"card_num\"\r\n          value=\"\"\r\n        />\r\n\r\n        <button [disabled]=\"!cardForm.valid\" type=\"submit\">Save Card</button>\r\n      </form>\r\n    </div>\r\n    <div class=\"cards-detail-section\">\r\n      <div class=\"cards-overview-block\" *ngIf=\"selectedCard\">\r\n        <h1 appAnimateCount>{{ selectedCard.balance }}</h1>\r\n        <ul>\r\n          <li>{{ selectedCard.card_name }}</li>\r\n          <li>{{ selectedCard.card_service }}</li>\r\n          <li>{{ selectedCard.card_type }}</li>\r\n          <li>{{ selectedCard.card_name }}</li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"cards-detail-block\">\r\n        <div  *ngIf='transaction.id' >\r\n        <span class=\"hidden\">{{ transaction.id }}</span>\r\n\r\n        <div class=\"category-block\" *ngFor=\"let item of transaction.items\">\r\n          <div class=\"category-icon\">\r\n            <i\r\n              *ngIf=\"item.category == 7; else elseBlock\"\r\n              class=\"material-icons\"\r\n            >\r\n              add_shopping_cart\r\n            </i>\r\n            <ng-template #elseBlock\r\n              ><i class=\"material-icons\">\r\n                fastfood\r\n              </i>\r\n            </ng-template>\r\n            <label>{{ item.title }}</label>\r\n          </div>\r\n          <div class=\"category-detail\">\r\n            <p>{{ item.category }}</p>\r\n            <p>{{ item.income }}</p>\r\n            <p>{{ item.amount }}</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/cards-dashboard/cards-dashboard.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/cards-dashboard/cards-dashboard.component.ts ***!
  \**************************************************************/
/*! exports provided: CardsDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsDashboardComponent", function() { return CardsDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cards_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/cards.service */ "./src/app/services/cards.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// json-server --watch db.json



var CardsDashboardComponent = /** @class */ (function () {
    function CardsDashboardComponent(cardsService) {
        this.cardsService = cardsService;
        this.enableAddCard = false;
        this.transaction = {};
        this.selectedCardIndex = 0;
    }
    CardsDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cardsService
            .getCards()
            .subscribe(function (data) { return (_this.cardsArray = data); }, function (errorCode) { return (_this.statusCode = errorCode); });
    };
    CardsDashboardComponent.prototype.AddCard = function () {
        this.enableAddCard = !this.enableAddCard;
        if (this.enableAddCard) {
            this.cardForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                card_service: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                card_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                card_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                card_num: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
            });
        }
    };
    CardsDashboardComponent.prototype.onCardSubmit = function (cardData) {
        var maxCard = this.cardsArray.length - 1;
        var maxCardId = this.cardsArray[maxCard].card_id;
        cardData.card_id = maxCardId + 1;
        this.cardsService
            .saveCard(cardData)
            .subscribe(function (data) { return console.log(data); }, function (errorCode) { return console.log(errorCode); });
    };
    CardsDashboardComponent.prototype.onSelectCard = function (card, i) {
        var _this = this;
        this.selectedCardIndex = i;
        this.selectedCard = card;
        this.cardsService.getCardDetailsbyId(card.card_id).subscribe(function (data) {
            _this.transaction = data;
        }, function (errorCode) { return _this.transaction = {}; });
    };
    CardsDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-cards-dashboard",
            template: __webpack_require__(/*! ./cards-dashboard.component.html */ "./src/app/cards-dashboard/cards-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./cards-dashboard.component.css */ "./src/app/cards-dashboard/cards-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_services_cards_service__WEBPACK_IMPORTED_MODULE_1__["CardsService"]])
    ], CardsDashboardComponent);
    return CardsDashboardComponent;
}());



/***/ }),

/***/ "./src/app/directives/animate-count.directive.ts":
/*!*******************************************************!*\
  !*** ./src/app/directives/animate-count.directive.ts ***!
  \*******************************************************/
/*! exports provided: AnimateCountDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimateCountDirective", function() { return AnimateCountDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AnimateCountDirective = /** @class */ (function () {
    function AnimateCountDirective(Element) {
        // Element.nativeElement.innerText =  Element.nativeElement.innerText - 500;
        var counted = 0;
        var target = Element.nativeElement.innerText || 5000; // 10 seconds
        var i = setInterval(function () {
            if (counted < target) {
                counted++;
                Element.nativeElement.innerText = counted;
            }
            else {
                clearInterval(i);
            }
        }, 0.1);
    }
    AnimateCountDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appAnimateCount]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], AnimateCountDirective);
    return AnimateCountDirective;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-nav {\r\n  position: fixed;\r\n  left: 50%;\r\n  top: 100%;\r\n  -webkit-transform: translate(50%, -60%);\r\n          transform: translate(50%, -60%);\r\n}\r\n\r\n.header-nav ul li {\r\n  list-style: none;\r\n}\r\n\r\n.navToggler {\r\n  width: 60px;\r\n  height: 60px;\r\n  border-radius: 50%;\r\n  background: linear-gradient(to right, #4684d2, #707af1);\r\n  cursor: pointer;\r\n  box-shadow: 0 0 20px 0px #4d5c5f;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  transition: all linear 30ms;\r\n}\r\n\r\n.navToggler:hover, .navToggler:hover .toggler {\r\n  border-radius: 0%;\r\n}\r\n\r\n.toggler {\r\n  width: 50px;\r\n  height: 50px;\r\n  border-radius: 50%;\r\n  border: 10px solid #6db2be;\r\n  box-sizing: border-box;\r\n  box-shadow: inset 0 0 10px 0px #4d5c5f;\r\n}\r\n\r\n.user-block {\r\n  position: fixed;\r\n  right: 20px;\r\n  top: 20px;\r\n}"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <nav class=\"header-nav\">\r\n\r\n<div class='navToggler'>\r\n<div class='toggler'>\r\n  <span></span>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<div>\r\n  <ul>\r\n    <li><a routerLink=\"/app-mainpage\" >Main Page</a></li>\r\n    <li><a routerLink=\"/card-dashboard\" >Cards Dashboard</a></li>\r\n  </ul>\r\n</div>\r\n\r\n</nav> -->\r\n\r\n\r\n<!-- *ngIf=\"user\" -->\r\n<nav class=\"user-block\">\r\n  <mat-chip-list aria-label=\"Fish selection\">\r\n    <mat-chip (click)= signOut()>Sign out</mat-chip>\r\n  </mat-chip-list>\r\n\r\n  <img src='' />\r\n\r\n  <!-- <img class=\"card-img-top img-responsive photo\" src=\"{{ user.photoUrl }}\">\r\n      <div class=\"card-block\">\r\n        <h4 class=\"card-title\">{{ user.name }}</h4>\r\n        <p class=\"card-text\">{{ user.email }}</p>\r\n      </div> -->\r\n</nav>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService) {
        this.authService = authService;
        this.opened = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.signOut = function () {
        this.authService.signOut();
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [angularx_social_login__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/mainpage/mainpage.component.css":
/*!*************************************************!*\
  !*** ./src/app/mainpage/mainpage.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/mainpage/mainpage.component.html":
/*!**************************************************!*\
  !*** ./src/app/mainpage/mainpage.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Article Details</h3>\r\n<table>\r\n  <tr><th> Id</th> <th>Title</th><th>Category</th></tr>\r\n  <tr *ngFor=\"let article of articlesArray\" >\r\n        <td>{{article.id}}</td>\r\n        <td>{{article.title}}</td>\r\n        <td>{{article.category}}</td>\r\n  </tr>\r\n</table>\r\n"

/***/ }),

/***/ "./src/app/mainpage/mainpage.component.ts":
/*!************************************************!*\
  !*** ./src/app/mainpage/mainpage.component.ts ***!
  \************************************************/
/*! exports provided: MainpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainpageComponent", function() { return MainpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_articles_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/articles.service */ "./src/app/services/articles.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainpageComponent = /** @class */ (function () {
    function MainpageComponent(articleService) {
        this.articleService = articleService;
    }
    MainpageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.articleService.getAllArticles().subscribe(function (data) { return _this.articlesArray = data; }, function (errorCode) { return _this.statusCode = errorCode; });
    };
    MainpageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mainpage',
            template: __webpack_require__(/*! ./mainpage.component.html */ "./src/app/mainpage/mainpage.component.html"),
            styles: [__webpack_require__(/*! ./mainpage.component.css */ "./src/app/mainpage/mainpage.component.css")]
        }),
        __metadata("design:paramtypes", [_services_articles_service__WEBPACK_IMPORTED_MODULE_1__["ArticlesService"]])
    ], MainpageComponent);
    return MainpageComponent;
}());



/***/ }),

/***/ "./src/app/pipes/card-pipe.ts":
/*!************************************!*\
  !*** ./src/app/pipes/card-pipe.ts ***!
  \************************************/
/*! exports provided: CardPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardPipe", function() { return CardPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CardPipe = /** @class */ (function () {
    function CardPipe() {
    }
    CardPipe.prototype.transform = function (value) {
        return '**** **** **** ' + value;
    };
    CardPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'CardPipe'
        })
    ], CardPipe);
    return CardPipe;
}());



/***/ }),

/***/ "./src/app/services/articles.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/articles.service.ts ***!
  \**********************************************/
/*! exports provided: ArticlesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlesService", function() { return ArticlesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ArticlesService = /** @class */ (function () {
    // Create constructor to get Http instance
    function ArticlesService(http) {
        this.http = http;
        // URL for CRUD operations
        this.articleUrl = 'http://localhost:3000/articles';
    }
    ArticlesService.prototype.getAllArticles = function () {
        return this.http.get(this.articleUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    //Create article
    ArticlesService.prototype.createArticle = function (article) {
        var cpHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: cpHeaders });
        return this.http.post(this.articleUrl, article, options)
            .map(function (success) { return success.status; })
            .catch(this.handleError);
    };
    ArticlesService.prototype.extractData = function (res) {
        var body = res.json();
        return body;
    };
    ArticlesService.prototype.handleError = function (error) {
        console.error(error.message || error);
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error.status);
    };
    ArticlesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], ArticlesService);
    return ArticlesService;
}());



/***/ }),

/***/ "./src/app/services/cards.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/cards.service.ts ***!
  \*******************************************/
/*! exports provided: CardsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsService", function() { return CardsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CardsService = /** @class */ (function () {
    function CardsService(http) {
        this.http = http;
        // URL for CRUD operations
        this.cardsUrl = 'http://localhost:3000/cards';
        this.transactionsUrl = 'http://localhost:3000/transactions';
    }
    CardsService.prototype.getCards = function () {
        return this.http
            .get(this.cardsUrl)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    CardsService.prototype.getAllCards = function () {
        return this.http
            .get(this.cardsUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    CardsService.prototype.saveCard = function (card) {
        var cpHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: cpHeaders });
        return this.http
            .post(this.cardsUrl, card, options)
            .map(function (success) { return success.status; })
            .catch(this.handleError);
    };
    CardsService.prototype.getCardDetailsbyId = function (cardId) {
        var cpHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: cpHeaders });
        return this.http
            .get(this.transactionsUrl + '/' + cardId)
            .map(this.extractData)
            .catch(this.handleError);
    };
    CardsService.prototype.extractData = function (res) {
        var body = res.json();
        return body;
    };
    CardsService.prototype.handleError = function (error) {
        console.error(error.message || error);
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error.status);
    };
    CardsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], CardsService);
    return CardsService;
}());



/***/ }),

/***/ "./src/app/userlogin/userlogin.component.css":
/*!***************************************************!*\
  !*** ./src/app/userlogin/userlogin.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-form {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  height: 100vh;\r\n  top: 0;\r\n  width: 100%;\r\n  background: #ffffff;\r\n  /* background: linear-gradient(135deg, rgb(166, 128, 249) 0%, rgb(180, 238, 255) 100%); */\r\n}\r\n\r\n.login-full-width {\r\n  width: 100%;\r\n  max-width: 400px;\r\n  min-width: 200px;\r\n}\r\n\r\nsvg {\r\n  max-width: 100%;\r\n  max-height: 100vh;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0px;\r\n  -webkit-transform: translate(-50%, 0);\r\n          transform: translate(-50%, 0);\r\n}\r\n\r\ncircle {\r\n  stroke: #025aac;\r\n  fill: transparent;\r\n  stroke-dasharray: 1.5708;\r\n  /* ½π */\r\n}\r\n\r\n#rotate-clockwise, #rotate-counter-clockwise {\r\n  -webkit-animation: 6s linear infinite;\r\n          animation: 6s linear infinite;\r\n}\r\n\r\n#rotate-clockwise {\r\n  -webkit-animation-name: rotation-clockwise;\r\n          animation-name: rotation-clockwise;\r\n}\r\n\r\n#rotate-counter-clockwise {\r\n  -webkit-animation-name: rotation-counter-clockwise;\r\n          animation-name: rotation-counter-clockwise;\r\n}\r\n\r\n@-webkit-keyframes rotation-clockwise {\r\n  from {\r\n    -webkit-transform: rotate(0);\r\n            transform: rotate(0)\r\n  }\r\n  to {\r\n    -webkit-transform: rotate(360deg);\r\n            transform: rotate(360deg)\r\n  }\r\n}\r\n\r\n@keyframes rotation-clockwise {\r\n  from {\r\n    -webkit-transform: rotate(0);\r\n            transform: rotate(0)\r\n  }\r\n  to {\r\n    -webkit-transform: rotate(360deg);\r\n            transform: rotate(360deg)\r\n  }\r\n}\r\n\r\n@-webkit-keyframes rotation-counter-clockwise {\r\n  from {\r\n    -webkit-transform: rotate(360deg);\r\n            transform: rotate(360deg)\r\n  }\r\n  to {\r\n    -webkit-transform: rotate(0);\r\n            transform: rotate(0)\r\n  }\r\n}\r\n\r\n@keyframes rotation-counter-clockwise {\r\n  from {\r\n    -webkit-transform: rotate(360deg);\r\n            transform: rotate(360deg)\r\n  }\r\n  to {\r\n    -webkit-transform: rotate(0);\r\n            transform: rotate(0)\r\n  }\r\n}\r\n\r\n.mat-form-field-label, .mat-form-field-label-wrapper, .mat-input-element {\r\n  color: #0c1430;\r\n}\r\n\r\n.mat-raised-button.mat-primary[disabled] {\r\n  color: #ae9eff;\r\n}\r\n\r\n.flex-outer {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex-direction: row;\r\n}\r\n\r\n.flex-logo {\r\n  background: url('logo.png'), #0c1430;\r\n  /* background-size: contain; */\r\n  background-size: 400px;\r\n  background-repeat: no-repeat;\r\n  height: 100vh;\r\n  background-position: 50% 50%;\r\n}\r\n\r\n.flex-50 {\r\n  width: 50%;\r\n}\r\n\r\n.flex-50 .mat-raised-button.mat-primary {\r\n  background-color: #570d9c;\r\n  min-width: 400px;\r\n}\r\n\r\n.btn-row{\r\n  margin-top: 20px;\r\n}\r\n\r\n.social-login{\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n\r\n.social-login .btn-google {\r\n  background: #d04e4e;\r\n  line-height: 36px;\r\n  font-weight: 500;\r\n  padding: 0 16px;\r\n  border-radius: 4px;\r\n  border: none;\r\n  color: #ffffff;\r\n  min-width: 400px;\r\n  margin-top: 15px;\r\n}\r\n\r\n.blue{\r\n  background: blue;\r\n}"

/***/ }),

/***/ "./src/app/userlogin/userlogin.component.html":
/*!****************************************************!*\
  !*** ./src/app/userlogin/userlogin.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='flex-outer'>\r\n  <div class='flex-50 flex-logo'></div>\r\n  <div class='flex-50'>\r\n    <form [formGroup]=\"loginform\" class=\"login-form\" (ngSubmit)='loginClick(loginform.value)' autocomplete=\"off\">\r\n      <!-- <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"-1 -1 2 2\">\r\n      <g id=\"rotate-clockwise\">\r\n        <circle r=\"1\" transform=\"scale(0.8)\" stroke-width=\"0.025\"/>\r\n        <circle r=\"1\" transform=\"scale(0.5)\" stroke-width=\"0.04\"/>\r\n      </g>\r\n      <g id=\"rotate-counter-clockwise\">\r\n        <circle r=\"1\" transform=\"scale(0.6)\" stroke-width=\"0.03333\"/>\r\n        <circle r=\"1\" transform=\"scale(0.3333)\" stroke-width=\"0.06\"/>\r\n      </g>\r\n    </svg> -->\r\n\r\n  \r\n      <mat-form-field class=\"login-full-width\">\r\n        <input type='text' autocomplete=\"false\" matInput formControlName=\"username\" placeholder=\"username\" value=\"\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field class=\"login-full-width\">\r\n        <input type='password' autocomplete=\"false\" matInput formControlName=\"password\" placeholder=\"password\" value=\"\">\r\n      </mat-form-field>\r\n      <div class=\"btn-row\">\r\n        <button [disabled]=\"!loginform.valid\" type='submit' mat-raised-button color=\"primary\">Sign in</button>\r\n      </div>\r\n      <div class=\"btn-row social-login\">\r\n        <button *ngIf=\"!user\" class=\"btn-google\" (click)=\"signInWithGoogle()\" >Sign in with Google</button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/userlogin/userlogin.component.ts":
/*!**************************************************!*\
  !*** ./src/app/userlogin/userlogin.component.ts ***!
  \**************************************************/
/*! exports provided: UserloginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserloginComponent", function() { return UserloginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserloginComponent = /** @class */ (function () {
    function UserloginComponent(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    UserloginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loginform = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                this.passwordValidation
            ]))
        });
        this.authService.authState.subscribe(function (user) {
            _this.user = user;
            if (_this.user) {
                _this.router.navigate(['card-dashboard']);
            }
            else {
                _this.router.navigate(['login']);
            }
        });
    };
    UserloginComponent.prototype.signInWithGoogle = function () {
        this.authService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_3__["GoogleLoginProvider"].PROVIDER_ID);
    };
    UserloginComponent.prototype.passwordValidation = function (formcontrol) {
        if (formcontrol.value.length < 5) {
            return { 'password': true };
        }
    };
    UserloginComponent.prototype.loginClick = function (formdata) {
        if (formdata.username === 'kapilz' && formdata.password === 'password') {
            this.router.navigate(['card-dashboard']);
        }
    };
    UserloginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-userlogin',
            template: __webpack_require__(/*! ./userlogin.component.html */ "./src/app/userlogin/userlogin.component.html"),
            styles: [__webpack_require__(/*! ./userlogin.component.css */ "./src/app/userlogin/userlogin.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], angularx_social_login__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], UserloginComponent);
    return UserloginComponent;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\repos\ng4banker\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map