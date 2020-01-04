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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content_area_set{\r\n    padding-bottom: 60px;\r\n}\r\n.line_icon_{\r\n    padding-top:19px;\r\n}\r\n.content_100{\r\n    height: 100%;\r\n}\r\n.social_area{\r\n    margin-top:20px;\r\n    float: right;\r\n    margin-right: 50px;\r\n}\r\n.line_icon{\r\n    float: left;\r\n}\r\n.line_text{\r\n    float: left;\r\n    color: white;\r\n    font-size: 1.5em;\r\n    margin-top:25px;\r\n}\r\n.area_login_line{\r\n    float: left;\r\n    margin-bottom: 10px;\r\n    \r\n}\r\n.area_login_from{\r\n    float: left;\r\n}\r\n.area_login_line img{\r\n    width:30px;\r\n}\r\n.area_login_text{\r\n    color:white;\r\n    margin-left:15px;\r\n    font-family: sans-serif;\r\n    font-weight: 400;\r\n}\r\n.btn_login_from {\r\n    margin-left: 5px;\r\n    width: 115px;\r\n    height: 37px;\r\n    text-align: center;\r\n   \r\n    /* border-radius: 6px; */\r\n    border: 1px solid #855A0C;\r\n    display: inline-block;\r\n    cursor: pointer;\r\n    color: #333333;\r\n    font-family: Arial;\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n    padding: 8px 24px;\r\n    text-decoration: none;\r\n    text-shadow: 0px 1px 0px #ffee66;\r\n    background: rgba(171,107,9,1);\r\n    background: -webkit-gradient(left top, right top, color-stop(0%, rgba(171,107,9,1)), color-stop(44%, rgba(201,182,74,1)), color-stop(61%, rgba(201,182,74,1)), color-stop(100%, rgba(171,107,9,1)));\r\n    background: linear-gradient(to right, rgba(171,107,9,1) 0%, rgba(201,182,74,1) 44%, rgba(201,182,74,1) 61%, rgba(171,107,9,1) 100%);\r\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ab6b09', endColorstr='#ab6b09', GradientType=1 );\r\n}\r\n.btn_login_from:hover {\r\n\tbackground:linear-gradient(to bottom, #ffab23 5%, #ffec64 100%);\r\n\tfilter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffab23', endColorstr='#ffec64',GradientType=0);\r\n\tbackground-color:#ffab23;\r\n}\r\n.btn_login_from:active {\r\n\tposition:relative;\r\n\ttop:1px;\r\n}\r\n.bg_content{\r\n    margin-top:15px;\r\n    margin-bottom: 60px;\r\n    border-radius: 38px;\r\n    background-color: #171719;\r\n    border:#EDBA11 2px solid;\r\n    /* height: 100%; */\r\n}\r\n.footerArea3{\r\n    float: left;\r\n    background: #171719;\r\n    text-align: center;\r\n    color: white;\r\n    width:100%;\r\n    text-align: center;\r\n}\r\ndiv#centerDiv3 {\r\n    width: 100%;\r\n    text-align: center;\r\n    padding-top: 10px;\r\n    font-size: 12px;\r\n}\r\n.footerArea3 .container{\r\n    background: #171719;\r\n}\r\n.header-area{\r\n    /* margin-left: 10px;\r\n    margin-right: 10px; */\r\n    background-image: url(/assets/images/content/header.jpg);\r\n    background-size: cover;\r\n    background-position: left center;\r\n    height: 130px;\r\n    overflow: hidden;\r\n}\r\n.line_header{\r\n    display: none;\r\n}\r\n.logo_area{\r\n    float: left;\r\n    /* padding-top: 20px;\r\n    padding-left: 15px; */\r\n}\r\n.logo_area img{\r\n    padding-top: 20px;\r\n    padding-left: 20px;\r\n    width: 320px;\r\n    height: auto;\r\n}\r\n.pc_style{\r\n    padding-top:15px;\r\n}\r\n.contect_text{\r\n    font-weight: 100;\r\n    color: white;\r\n}\r\n.tel_text{\r\n    font-weight: 100;\r\n    color: white;\r\n}\r\n.text_green{\r\n    color: #18FF00;\r\n}\r\n.welcome_text{\r\n    font-weight: 100;\r\n    color: white;\r\n}\r\n.area_text{\r\n    padding-top:0px;\r\n    float: left;\r\n    margin-right: 15px;\r\n    text-align: left;\r\n    padding-left:35px;\r\n    font-size: 14px;\r\n}\r\n.qr_area{\r\n    float: right;\r\n}\r\n.qr_area img{\r\n    width: 100px;\r\n}\r\n.header-area .container{\r\n    background: unset;\r\n    text-align: right;\r\n    padding-bottom: 0px;\r\n}\r\n.text_hearder{\r\n    margin-top: 5px;\r\n}\r\n.img_tel{\r\n    margin-left:15px;\r\n}\r\n.img_line{\r\n    margin-left:20px;\r\n}\r\n.area_login{\r\n    display: none;\r\n    float: left;\r\n}\r\n#form3{\r\n    height: 80px;\r\n}\r\n.area_login2{\r\n    float: left;\r\n    position: relative;\r\n    width: 100%;\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    padding-left: 30px;\r\n    height: auto;\r\n    background: #10100E;\r\n}\r\n.form-inline .form-control {\r\n    display: inline-block;\r\n    margin-right: 10px;\r\n    width: 100px;\r\n    height: 30px;\r\n    vertical-align: middle;\r\n}\r\n#inner {\r\n    display: table;\r\n    /* margin: 0 auto; */\r\n}\r\n#inner img{\r\n    width: 300px;\r\n}\r\n#outer {\r\n    width:100%\r\n}\r\n.btn-group-sm>.btn, .btn-sm {\r\n    margin-right: 10px;\r\n}\r\n.m_footer{\r\n    background-color: black;\r\n    background-size: 100% 70px;\r\n    width: 100%;\r\n    height: 60px;\r\n    text-align: center;\r\n    position: fixed;\r\n    z-index: 99;\r\n    bottom: 0;\r\n    padding-top:5px;\r\n}\r\n.sport_img2 img{\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n.casino_img2 img{\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n }\r\n.no-padding{\r\n    /* padding:unset; */\r\n    flex-grow: unset;\r\n    flex-basis:unset;\r\n}\r\n@media screen and (min-width: 375px) {\r\n    .sport_img2 img{\r\n        width: 100%;\r\n        margin-bottom: 10px;\r\n        display: block;\r\n        margin-left: auto;\r\n        margin-right: auto;\r\n    }\r\n    .casino_img2 img{\r\n        width: 100%;\r\n        margin-bottom: 10px;\r\n        display: block;\r\n        margin-left: auto;\r\n        margin-right: auto;\r\n     }\r\n}\r\n@media screen and (min-width: 435px) {\r\n    #form3{\r\n        height: 35px;\r\n    }\r\n}\r\n@media screen and (min-width: 500px) {\r\n    .area_login2{\r\n        height: unset;\r\n    }\r\n    .m_footer{\r\n        display:none;\r\n    }\r\n}\r\n@media screen and (min-width: 640px) {\r\n    .sport_img2 img{\r\n        width: 100%;\r\n        margin-left: auto;\r\n        margin-right: unset;\r\n    }\r\n    .casino_img2 img{\r\n        width: 100%;\r\n        margin-left: auto;\r\n        margin-right: auto;\r\n     }\r\n}\r\n@media screen and (min-width: 768px) {\r\n    .content_area_set{\r\n        padding-bottom: 0px;\r\n    }\r\n    .no-padding{\r\n        /* padding:unset; */\r\n    }\r\n    .padding_right0{\r\n        padding-right: 0px;\r\n    }\r\n    .padding_right10{\r\n        padding-right: 10px;\r\n    }\r\n    .padding_lfet0{\r\n        padding-left: 0px;\r\n    }\r\n    .sport_img2 {\r\n        border-top:3px solid #BD9A23;\r\n    }\r\n    .casino_img2 {\r\n        border-top:3px solid #BD9A23;\r\n    }\r\n    \r\n    .sport_button .no-padding{\r\n        margin-right: 5px;\r\n    }\r\n    .no-padding{\r\n        flex-basis:0;\r\n        flex-grow: 1;\r\n    }\r\n}\r\n@media screen and (min-width: 1000px) {\r\n    .header-area .container{\r\n        padding-bottom: 10px;\r\n    }\r\n    #inner img{\r\n        width: 100%;\r\n    }\r\n    .m_footer{\r\n        display:none;\r\n    }\r\n    .area_login2{\r\n        display: none;\r\n    }\r\n    .area_login{\r\n        float: left;\r\n        position: relative;\r\n        width: 530px;\r\n        margin-top: -18px;\r\n        margin-left: -36px;\r\n        display: block;\r\n    }\r\n}\r\n@media screen and (min-width: 1100px) {\r\n    .area_login{\r\n        float: left;\r\n        position: absolute;\r\n        width: 530px;\r\n        margin-top: 140px;\r\n        margin-left: 254px;\r\n        display: block;\r\n    }\r\n}\r\n@media screen and (min-width: 1200px) {\r\n   \r\n    .sport_img2 img{\r\n        width: 100%;\r\n    }\r\n    \r\n    .casino_img2 img{\r\n        width: 100%;\r\n    }\r\n    .register_btn{\r\n        position: absolute;\r\n        right: 110px;\r\n        bottom:25px;\r\n        line-height: 1.3;\r\n    }\r\n    .line_header{\r\n        display: block;\r\n        float: right;\r\n        margin-top:40px;\r\n        margin-right: 30px;\r\n    }\r\n    .text_line_header{\r\n        font-size: 2.5em;\r\n        color: #16E800;\r\n        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n        font-weight: bold;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjs7QUFFdkI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjs7SUFFbEIsd0JBQXdCO0lBQ3hCLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLGdDQUFnQztJQUNoQyw2QkFBNkI7SUFFN0IsbU1BQW1NO0lBSW5NLG1JQUFtSTtJQUNuSSxvSEFBb0g7QUFDeEg7QUFDQTtDQU1DLCtEQUErRDtDQUMvRCxnSEFBZ0g7Q0FDaEgsd0JBQXdCO0FBQ3pCO0FBQ0E7Q0FDQyxpQkFBaUI7Q0FDakIsT0FBTztBQUNSO0FBSUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsd0JBQXdCO0lBQ3hCLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0k7eUJBQ3FCO0lBQ3JCLHdEQUF3RDtJQUN4RCxzQkFBc0I7SUFDdEIsZ0NBQWdDO0lBQ2hDLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLFdBQVc7SUFDWDt5QkFDcUI7QUFDekI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFHQTtJQUNJLGFBQWE7SUFDYixXQUFXO0FBQ2Y7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGNBQWM7SUFDZCxvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLDBCQUEwQjtJQUMxQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsV0FBVztJQUNYLFNBQVM7SUFDVCxlQUFlO0FBQ25CO0FBR0E7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0NBQ3JCO0FBRUE7SUFDRyxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjtBQUNDO0lBQ0c7UUFDSSxXQUFXO1FBQ1gsbUJBQW1CO1FBQ25CLGNBQWM7UUFDZCxpQkFBaUI7UUFDakIsa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsbUJBQW1CO1FBQ25CLGNBQWM7UUFDZCxpQkFBaUI7UUFDakIsa0JBQWtCO0tBQ3JCO0FBQ0w7QUFFQTtJQUNJO1FBQ0ksWUFBWTtJQUNoQjtBQUNKO0FBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLFlBQVk7SUFDaEI7QUFDSjtBQUNBO0lBQ0k7UUFDSSxXQUFXO1FBQ1gsaUJBQWlCO1FBQ2pCLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksV0FBVztRQUNYLGlCQUFpQjtRQUNqQixrQkFBa0I7S0FDckI7QUFDTDtBQUNBO0lBQ0k7UUFDSSxtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksNEJBQTRCO0lBQ2hDO0lBQ0E7UUFDSSw0QkFBNEI7SUFDaEM7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLFlBQVk7UUFDWixZQUFZO0lBQ2hCO0FBQ0o7QUFFQTtJQUNJO1FBQ0ksb0JBQW9CO0lBQ3hCO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsY0FBYztJQUNsQjtBQUNKO0FBQ0E7SUFDSTtRQUNJLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsY0FBYztJQUNsQjtBQUNKO0FBQ0E7O0lBRUk7UUFDSSxXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osV0FBVztRQUNYLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksY0FBYztRQUNkLFlBQVk7UUFDWixlQUFlO1FBQ2Ysa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxnQkFBZ0I7UUFDaEIsY0FBYztRQUNkLDJEQUEyRDtRQUMzRCxpQkFBaUI7SUFDckI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnRfYXJlYV9zZXR7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNjBweDtcclxufVxyXG4ubGluZV9pY29uX3tcclxuICAgIHBhZGRpbmctdG9wOjE5cHg7XHJcbn1cclxuXHJcbi5jb250ZW50XzEwMHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG4uc29jaWFsX2FyZWF7XHJcbiAgICBtYXJnaW4tdG9wOjIwcHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbn1cclxuLmxpbmVfaWNvbntcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi5saW5lX3RleHR7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBtYXJnaW4tdG9wOjI1cHg7XHJcbn1cclxuLmFyZWFfbG9naW5fbGluZXtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIFxyXG59XHJcbi5hcmVhX2xvZ2luX2Zyb217XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG4uYXJlYV9sb2dpbl9saW5lIGltZ3tcclxuICAgIHdpZHRoOjMwcHg7XHJcbn1cclxuLmFyZWFfbG9naW5fdGV4dHtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgbWFyZ2luLWxlZnQ6MTVweDtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLmJ0bl9sb2dpbl9mcm9tIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICB3aWR0aDogMTE1cHg7XHJcbiAgICBoZWlnaHQ6IDM3cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgIFxyXG4gICAgLyogYm9yZGVyLXJhZGl1czogNnB4OyAqL1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg1NUEwQztcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nOiA4cHggMjRweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHRleHQtc2hhZG93OiAwcHggMXB4IDBweCAjZmZlZTY2O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgxNzEsMTA3LDksMSk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDE3MSwxMDcsOSwxKSAwJSwgcmdiYSgyMDEsMTgyLDc0LDEpIDQ0JSwgcmdiYSgyMDEsMTgyLDc0LDEpIDYxJSwgcmdiYSgxNzEsMTA3LDksMSkgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxlZnQgdG9wLCByaWdodCB0b3AsIGNvbG9yLXN0b3AoMCUsIHJnYmEoMTcxLDEwNyw5LDEpKSwgY29sb3Itc3RvcCg0NCUsIHJnYmEoMjAxLDE4Miw3NCwxKSksIGNvbG9yLXN0b3AoNjElLCByZ2JhKDIwMSwxODIsNzQsMSkpLCBjb2xvci1zdG9wKDEwMCUsIHJnYmEoMTcxLDEwNyw5LDEpKSk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDE3MSwxMDcsOSwxKSAwJSwgcmdiYSgyMDEsMTgyLDc0LDEpIDQ0JSwgcmdiYSgyMDEsMTgyLDc0LDEpIDYxJSwgcmdiYSgxNzEsMTA3LDksMSkgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSgxNzEsMTA3LDksMSkgMCUsIHJnYmEoMjAxLDE4Miw3NCwxKSA0NCUsIHJnYmEoMjAxLDE4Miw3NCwxKSA2MSUsIHJnYmEoMTcxLDEwNyw5LDEpIDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDE3MSwxMDcsOSwxKSAwJSwgcmdiYSgyMDEsMTgyLDc0LDEpIDQ0JSwgcmdiYSgyMDEsMTgyLDc0LDEpIDYxJSwgcmdiYSgxNzEsMTA3LDksMSkgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMTcxLDEwNyw5LDEpIDAlLCByZ2JhKDIwMSwxODIsNzQsMSkgNDQlLCByZ2JhKDIwMSwxODIsNzQsMSkgNjElLCByZ2JhKDE3MSwxMDcsOSwxKSAxMDAlKTtcclxuICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjYWI2YjA5JywgZW5kQ29sb3JzdHI9JyNhYjZiMDknLCBHcmFkaWVudFR5cGU9MSApO1xyXG59XHJcbi5idG5fbG9naW5fZnJvbTpob3ZlciB7XHJcblx0YmFja2dyb3VuZDotd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAuMDUsICNmZmFiMjMpLCBjb2xvci1zdG9wKDEsICNmZmVjNjQpKTtcclxuXHRiYWNrZ3JvdW5kOi1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgI2ZmYWIyMyA1JSwgI2ZmZWM2NCAxMDAlKTtcclxuXHRiYWNrZ3JvdW5kOi13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgI2ZmYWIyMyA1JSwgI2ZmZWM2NCAxMDAlKTtcclxuXHRiYWNrZ3JvdW5kOi1vLWxpbmVhci1ncmFkaWVudCh0b3AsICNmZmFiMjMgNSUsICNmZmVjNjQgMTAwJSk7XHJcblx0YmFja2dyb3VuZDotbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgI2ZmYWIyMyA1JSwgI2ZmZWM2NCAxMDAlKTtcclxuXHRiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmZmFiMjMgNSUsICNmZmVjNjQgMTAwJSk7XHJcblx0ZmlsdGVyOnByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPScjZmZhYjIzJywgZW5kQ29sb3JzdHI9JyNmZmVjNjQnLEdyYWRpZW50VHlwZT0wKTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiNmZmFiMjM7XHJcbn1cclxuLmJ0bl9sb2dpbl9mcm9tOmFjdGl2ZSB7XHJcblx0cG9zaXRpb246cmVsYXRpdmU7XHJcblx0dG9wOjFweDtcclxufVxyXG5cclxuXHJcblxyXG4uYmdfY29udGVudHtcclxuICAgIG1hcmdpbi10b3A6MTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTcxOTtcclxuICAgIGJvcmRlcjojRURCQTExIDJweCBzb2xpZDtcclxuICAgIC8qIGhlaWdodDogMTAwJTsgKi9cclxufVxyXG5cclxuLmZvb3RlckFyZWEze1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTcxNzE5O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5kaXYjY2VudGVyRGl2MyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5mb290ZXJBcmVhMyAuY29udGFpbmVye1xyXG4gICAgYmFja2dyb3VuZDogIzE3MTcxOTtcclxufVxyXG4uaGVhZGVyLWFyZWF7XHJcbiAgICAvKiBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDsgKi9cclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9jb250ZW50L2hlYWRlci5qcGcpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMzBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5saW5lX2hlYWRlcntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmxvZ29fYXJlYXtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgLyogcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7ICovXHJcbn1cclxuLmxvZ29fYXJlYSBpbWd7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIHdpZHRoOiAzMjBweDtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG4ucGNfc3R5bGV7XHJcbiAgICBwYWRkaW5nLXRvcDoxNXB4O1xyXG59XHJcbi5jb250ZWN0X3RleHR7XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi50ZWxfdGV4dHtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLnRleHRfZ3JlZW57XHJcbiAgICBjb2xvcjogIzE4RkYwMDtcclxufVxyXG4ud2VsY29tZV90ZXh0e1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uYXJlYV90ZXh0e1xyXG4gICAgcGFkZGluZy10b3A6MHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZy1sZWZ0OjM1cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLnFyX2FyZWF7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuLnFyX2FyZWEgaW1ne1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG59XHJcbiAgXHJcbi5oZWFkZXItYXJlYSAuY29udGFpbmVye1xyXG4gICAgYmFja2dyb3VuZDogdW5zZXQ7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbn1cclxuLnRleHRfaGVhcmRlcntcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuLmltZ190ZWx7XHJcbiAgICBtYXJnaW4tbGVmdDoxNXB4O1xyXG59XHJcbi5pbWdfbGluZXtcclxuICAgIG1hcmdpbi1sZWZ0OjIwcHg7XHJcbn1cclxuXHJcblxyXG4uYXJlYV9sb2dpbntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG4jZm9ybTN7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbn1cclxuLmFyZWFfbG9naW4ye1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTAxMDBFO1xyXG59XHJcbi5mb3JtLWlubGluZSAuZm9ybS1jb250cm9sIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuI2lubmVyIHtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgLyogbWFyZ2luOiAwIGF1dG87ICovXHJcbn1cclxuI2lubmVyIGltZ3tcclxuICAgIHdpZHRoOiAzMDBweDtcclxufVxyXG4jb3V0ZXIge1xyXG4gICAgd2lkdGg6MTAwJVxyXG59XHJcbi5idG4tZ3JvdXAtc20+LmJ0biwgLmJ0bi1zbSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5tX2Zvb3RlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDcwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDk5O1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcGFkZGluZy10b3A6NXB4O1xyXG59XHJcblxyXG5cclxuLnNwb3J0X2ltZzIgaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG4uY2FzaW5vX2ltZzIgaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuIH1cclxuIFxyXG4gLm5vLXBhZGRpbmd7XHJcbiAgICAvKiBwYWRkaW5nOnVuc2V0OyAqL1xyXG4gICAgZmxleC1ncm93OiB1bnNldDtcclxuICAgIGZsZXgtYmFzaXM6dW5zZXQ7XHJcbn1cclxuIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM3NXB4KSB7XHJcbiAgICAuc3BvcnRfaW1nMiBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB9XHJcbiAgICAuY2FzaW5vX2ltZzIgaW1ne1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDM1cHgpIHtcclxuICAgICNmb3JtM3tcclxuICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUwMHB4KSB7XHJcbiAgICAuYXJlYV9sb2dpbjJ7XHJcbiAgICAgICAgaGVpZ2h0OiB1bnNldDtcclxuICAgIH1cclxuICAgIC5tX2Zvb3RlcntcclxuICAgICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjQwcHgpIHtcclxuICAgIC5zcG9ydF9pbWcyIGltZ3tcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IHVuc2V0O1xyXG4gICAgfVxyXG4gICAgLmNhc2lub19pbWcyIGltZ3tcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuY29udGVudF9hcmVhX3NldHtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgfVxyXG4gICAgLm5vLXBhZGRpbmd7XHJcbiAgICAgICAgLyogcGFkZGluZzp1bnNldDsgKi9cclxuICAgIH1cclxuICAgIC5wYWRkaW5nX3JpZ2h0MHtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbiAgICB9XHJcbiAgICAucGFkZGluZ19yaWdodDEwe1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAucGFkZGluZ19sZmV0MHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgIH1cclxuICAgIC5zcG9ydF9pbWcyIHtcclxuICAgICAgICBib3JkZXItdG9wOjNweCBzb2xpZCAjQkQ5QTIzO1xyXG4gICAgfVxyXG4gICAgLmNhc2lub19pbWcyIHtcclxuICAgICAgICBib3JkZXItdG9wOjNweCBzb2xpZCAjQkQ5QTIzO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuc3BvcnRfYnV0dG9uIC5uby1wYWRkaW5ne1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgfVxyXG4gICAgLm5vLXBhZGRpbmd7XHJcbiAgICAgICAgZmxleC1iYXNpczowO1xyXG4gICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAwMHB4KSB7XHJcbiAgICAuaGVhZGVyLWFyZWEgLmNvbnRhaW5lcntcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuICAgICNpbm5lciBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAubV9mb290ZXJ7XHJcbiAgICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgfVxyXG4gICAgLmFyZWFfbG9naW4ye1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuYXJlYV9sb2dpbntcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgd2lkdGg6IDUzMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0xOHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMzZweDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMTAwcHgpIHtcclxuICAgIC5hcmVhX2xvZ2lue1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogNTMwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTQwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI1NHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gICBcclxuICAgIC5zcG9ydF9pbWcyIGltZ3tcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNhc2lub19pbWcyIGltZ3tcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5yZWdpc3Rlcl9idG57XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAxMTBweDtcclxuICAgICAgICBib3R0b206MjVweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS4zO1xyXG4gICAgfVxyXG4gICAgLmxpbmVfaGVhZGVye1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICBtYXJnaW4tdG9wOjQwcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgfVxyXG4gICAgLnRleHRfbGluZV9oZWFkZXJ7XHJcbiAgICAgICAgZm9udC1zaXplOiAyLjVlbTtcclxuICAgICAgICBjb2xvcjogIzE2RTgwMDtcclxuICAgICAgICBmb250LWZhbWlseTonU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div *ngIf=\"showHeader\"  class=\"{{class_checkShow}}\" >\n    <div  class=\"container\">\n        <div  class=\"header-area\">\n            <div  class=\"logo_area\"><img  src=\"assets/images/logo/logo.png?v=1.1\"></div>\n             <div _ngcontent-jev-c0=\"\" class=\"social_area\">\n                <div _ngcontent-jev-c0=\"\" class=\"line_icon\">\n                    <img class=\"line_icon_\" _ngcontent-jev-c0=\"\" alt=\"\" src=\"assets/images/content/line.png?v=1.1\">\n                    <img  class=\"hvr-push hover\" routerLink=\"/page/register\" _ngcontent-jev-c0=\"\" alt=\"\" src=\"assets/images/content/register.png\">\n                </div>\n            </div>\n        </div>\n        <div  class=\"area_login\"></div>\n        <app-navbar *ngIf=\"showHeader\"></app-navbar>\n    </div>\n</div> -->\n<div *ngIf=\"showHeader\"  class=\"{{class_checkShow}}\" >\n    <div _ngcontent-try-c0=\"\" class=\"topArea\">\n        <div _ngcontent-try-c0=\"\" class=\"container\">\n            <div _ngcontent-try-c0=\"\" class=\"logo\"></div>\n            <div _ngcontent-try-c0=\"\" class=\"line-area\">\n                <div _ngcontent-try-c0=\"\" class=\"line-text_top\"> LINE ID : <span _ngcontent-try-c0=\"\" style=\"color:#FDA500; font-weight: 500;letter-spacing: 2px;\">@tsstar88</span></div>\n                <div _ngcontent-try-c0=\"\" class=\"tel-text\">ฝากเงินถอนเงินได้ตลอด 24 ชั่วโมง ฝากถอดรวดเร็วมีทีมงานคอยซัพพอร์ตตลอด</div>\n                <div _ngcontent-try-c0=\"\" class=\"register_btn\">สมัครสมาชิก</div>\n            </div>\n        </div>\n    </div>\n    <app-navbar *ngIf=\"showHeader\"></app-navbar>\n</div>\n\n<router-outlet></router-outlet>\n<div class=\"m_footer col-xs-12\">\n    <div class=\"col-xs-3\" routerLink=\"/home\"><img src=\"assets/images/footer/icon-home.png\"></div>\n    <div class=\"col-xs-3\" ><a href=\"http://line.me/ti/p/~@megarich88\" target=\"_bank\"><img src=\"assets/images/footer/icon-line.png\"></a></div>\n    <div class=\"col-xs-3\" routerLink=\"/promotion\"><img src=\"assets/images/footer/icon_guide.png\"></div>\n    <div class=\"col-xs-3\" routerLink=\"/page/register\" ><img src=\"assets/images/footer/icon_add.png\"></div>\n</div>\n    <app-footer *ngIf=\"showHeader\"></app-footer>\n\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_image_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-image-slider */ "../node_modules/ng-image-slider/fesm5/ng-image-slider.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "../node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var src_app_service_todo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/todo.service */ "./src/app/service/todo.service.ts");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! aos */ "../node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_7__);








var AppComponent = /** @class */ (function () {
    function AppComponent(todoServcie, _authService, _router, cookie, router) {
        this.todoServcie = todoServcie;
        this._authService = _authService;
        this._router = _router;
        this.cookie = cookie;
        this.router = router;
        this.title = 'casino';
        this.close_popup = "0";
        this.imageObject = [{
                image: '/assets/images/content/slide1.jpg',
                thumbImage: '/assets/images/content/slide2.jpg'
            }, {
                image: '/assets/images/content/slide2.jpg',
                thumbImage: '/assets/images/content/slide1.jpg',
            }, {
                image: '/assets/images/content/slide3.jpg',
                thumbImage: '/assets/images/content/slide3.jpg',
            }
        ];
        this.showHeader = true;
    }
    AppComponent.prototype.prevImageClick = function () {
        this.slider.prev();
    };
    AppComponent.prototype.nextImageClick = function () {
        this.slider.next();
    };
    AppComponent.prototype.closePopup = function () {
        this.cookie.set("close_popup", "1", 1);
        this.close_popup = '1';
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                var check_url = event.url.split("/")[2];
                if (check_url == 'register' || check_url == 'deposit' || check_url == 'withdraw') {
                    _this.showHeader = false;
                    // this.class_checkShow = "content_100";
                }
                else {
                    _this.showHeader = true;
                    // this.class_checkShow = "container bg_content";
                    // this.class_checkShow = "container bg_content";
                }
                //  this.showHeader = this.activatedRoute.firstChild.snapshot.data.showHeader !== false;
            }
        });
        this.todoServcie.getSetting().subscribe(function (response) {
            // this.website_title = response.data.website_title;
            // $('title').html(this.website_title);
        });
        aos__WEBPACK_IMPORTED_MODULE_7__["init"]();
        this.todoServcie.getPopup().subscribe(function (response) {
            _this.adjust_page_image_name = response.adjust_page_image_name;
            _this.adjust_page_image_type = response.adjust_page_image_type;
            if (_this.adjust_page_image_name == '' || _this.adjust_page_image_name == null) {
                _this.close_popup = '1';
            }
        });
        var close_popup_value = this.cookie.get("close_popup");
        if (close_popup_value == '1') {
            this.close_popup = '1';
        }
        document.body.classList.add('bg-img');
        if (localStorage.getItem('web_status') == '2') {
            this._router.navigate(['/404']);
            return false;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nav'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ng_image_slider__WEBPACK_IMPORTED_MODULE_4__["NgImageSliderComponent"])
    ], AppComponent.prototype, "slider", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_todo_service__WEBPACK_IMPORTED_MODULE_6__["TodoService"], _service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-pagination */ "../node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_promotion_promotion_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/promotion/promotion.component */ "./src/app/components/promotion/promotion.component.ts");
/* harmony import */ var _components_deposit_deposit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/deposit/deposit.component */ "./src/app/components/deposit/deposit.component.ts");
/* harmony import */ var _components_withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/withdraw/withdraw.component */ "./src/app/components/withdraw/withdraw.component.ts");
/* harmony import */ var _components_howtoplay_howtoplay_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/howtoplay/howtoplay.component */ "./src/app/components/howtoplay/howtoplay.component.ts");
/* harmony import */ var _components_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/contactus/contactus.component */ "./src/app/components/contactus/contactus.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_content_bottom_content_bottom_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/content-bottom/content-bottom.component */ "./src/app/components/content-bottom/content-bottom.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_news_news_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/news/news.component */ "./src/app/components/news/news.component.ts");
/* harmony import */ var _components_promotion_detail_promotion_detail_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/promotion-detail/promotion-detail.component */ "./src/app/components/promotion-detail/promotion-detail.component.ts");
/* harmony import */ var ng_image_slider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-image-slider */ "../node_modules/ng-image-slider/fesm5/ng-image-slider.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_todo_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./service/todo.service */ "./src/app/service/todo.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/http */ "../node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_news_detail_news_detail_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/news-detail/news-detail.component */ "./src/app/components/news-detail/news-detail.component.ts");
/* harmony import */ var _components_resultfootball_resultfootball_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/resultfootball/resultfootball.component */ "./src/app/components/resultfootball/resultfootball.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _components_error_error_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/error/error.component */ "./src/app/components/error/error.component.ts");
/* harmony import */ var _sanitize_html_pipe__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./sanitize-html.pipe */ "./src/app/sanitize-html.pipe.ts");
/* harmony import */ var ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ng-simple-slideshow */ "../node_modules/ng-simple-slideshow/ng-simple-slideshow.es5.js");
/* harmony import */ var _components_page_page_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/page/page.component */ "./src/app/components/page/page.component.ts");
/* harmony import */ var _components_regComplete_regComplete_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/regComplete/regComplete.component */ "./src/app/components/regComplete/regComplete.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ngx-cookie-service */ "../node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_event_record_event_record_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/event_record/event_record.component */ "./src/app/components/event_record/event_record.component.ts");
/* harmony import */ var _components_manage_data_manage_data_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/manage_data/manage_data.component */ "./src/app/components/manage_data/manage_data.component.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! angular-bootstrap-md */ "../node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var ngx_color_sketch__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ngx-color/sketch */ "../node_modules/ngx-color/sketch/fesm5/ngx-color-sketch.js");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ngx-slick-carousel */ "../node_modules/ngx-slick-carousel/fesm5/ngx-slick-carousel.js");



 // <-- import the module






































var appRoutes = [
    { path: "home", component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_26__["AuthGuard"]] },
    { path: "login", component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_36__["loginComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_26__["AuthGuard"]] },
    { path: "event_record", component: _components_event_record_event_record_component__WEBPACK_IMPORTED_MODULE_37__["Event_recordComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_26__["AuthGuard"]] },
    { path: "manage_data", component: _components_manage_data_manage_data_component__WEBPACK_IMPORTED_MODULE_38__["Manage_dataComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_26__["AuthGuard"]] },
    { path: "manage_data/:id", component: _components_manage_data_manage_data_component__WEBPACK_IMPORTED_MODULE_38__["Manage_dataComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_26__["AuthGuard"]] },
    { path: "register", component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_23__["RegisterComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_26__["AuthGuard"]] },
    { path: "promotion", component: _components_promotion_promotion_component__WEBPACK_IMPORTED_MODULE_6__["PromotionComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_26__["AuthGuard"]] },
    { path: "deposit", component: _components_deposit_deposit_component__WEBPACK_IMPORTED_MODULE_7__["DepositComponent"] },
    { path: "withdraw", component: _components_withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_8__["WithdrawComponent"] },
    { path: "resultfootball", component: _components_resultfootball_resultfootball_component__WEBPACK_IMPORTED_MODULE_25__["ResultfootballComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_26__["AuthGuard"]] },
    { path: "howtoplay", component: _components_howtoplay_howtoplay_component__WEBPACK_IMPORTED_MODULE_9__["HowtoplayComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_26__["AuthGuard"]] },
    { path: "contact", component: _components_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_10__["ContactusComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_26__["AuthGuard"]] },
    { path: "blog", component: _components_news_news_component__WEBPACK_IMPORTED_MODULE_17__["NewsComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_26__["AuthGuard"]] },
    { path: "regComplete", component: _components_regComplete_regComplete_component__WEBPACK_IMPORTED_MODULE_32__["regCompleteComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_26__["AuthGuard"]] },
    { path: "blog", children: [
            { path: "blog-detail/:id", component: _components_news_detail_news_detail_component__WEBPACK_IMPORTED_MODULE_24__["NewsDetailComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_26__["AuthGuard"]] }
        ] },
    { path: "promotion", children: [
            { path: "promotion-detail/:id", component: _components_promotion_detail_promotion_detail_component__WEBPACK_IMPORTED_MODULE_18__["PromotionDetailComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_26__["AuthGuard"]] }
        ] },
    { path: "home", children: [
            { path: "blog-detail/:id", component: _components_news_detail_news_detail_component__WEBPACK_IMPORTED_MODULE_24__["NewsDetailComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_26__["AuthGuard"]] }
        ] },
    { path: "page/:id", component: _components_page_page_component__WEBPACK_IMPORTED_MODULE_31__["PageComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_26__["AuthGuard"]] },
    { path: "404", component: _components_error_error_component__WEBPACK_IMPORTED_MODULE_28__["ErrorComponent"] },
    { path: "", redirectTo: '/home', pathMatch: 'full' },
    { path: "**", component: _components_error_error_component__WEBPACK_IMPORTED_MODULE_28__["ErrorComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _components_error_error_component__WEBPACK_IMPORTED_MODULE_28__["ErrorComponent"],
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_23__["RegisterComponent"],
                _components_promotion_promotion_component__WEBPACK_IMPORTED_MODULE_6__["PromotionComponent"],
                _components_deposit_deposit_component__WEBPACK_IMPORTED_MODULE_7__["DepositComponent"],
                _components_withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_8__["WithdrawComponent"],
                _components_howtoplay_howtoplay_component__WEBPACK_IMPORTED_MODULE_9__["HowtoplayComponent"],
                _components_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_10__["ContactusComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"],
                _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_12__["MenuComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_36__["loginComponent"],
                _components_event_record_event_record_component__WEBPACK_IMPORTED_MODULE_37__["Event_recordComponent"],
                _components_manage_data_manage_data_component__WEBPACK_IMPORTED_MODULE_38__["Manage_dataComponent"],
                _components_content_bottom_content_bottom_component__WEBPACK_IMPORTED_MODULE_15__["ContentBottomComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"],
                _components_news_news_component__WEBPACK_IMPORTED_MODULE_17__["NewsComponent"],
                _components_regComplete_regComplete_component__WEBPACK_IMPORTED_MODULE_32__["regCompleteComponent"],
                _components_news_detail_news_detail_component__WEBPACK_IMPORTED_MODULE_24__["NewsDetailComponent"],
                _components_resultfootball_resultfootball_component__WEBPACK_IMPORTED_MODULE_25__["ResultfootballComponent"],
                _sanitize_html_pipe__WEBPACK_IMPORTED_MODULE_29__["sanitizeHtmlPipe"],
                _components_page_page_component__WEBPACK_IMPORTED_MODULE_31__["PageComponent"],
                _components_promotion_detail_promotion_detail_component__WEBPACK_IMPORTED_MODULE_18__["PromotionDetailComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"],
                ngx_color_sketch__WEBPACK_IMPORTED_MODULE_40__["ColorSketchModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_39__["MDBBootstrapModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                ng_image_slider__WEBPACK_IMPORTED_MODULE_19__["NgImageSliderModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_22__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_34__["HttpClientModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_3__["NgxPaginationModule"],
                ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_30__["SlideshowModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"].forRoot(appRoutes, { scrollPositionRestoration: 'enabled' }),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_33__["BrowserAnimationsModule"],
                ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_41__["SlickCarouselModule"]
            ],
            exports: [_sanitize_html_pipe__WEBPACK_IMPORTED_MODULE_29__["sanitizeHtmlPipe"]],
            providers: [_service_todo_service__WEBPACK_IMPORTED_MODULE_21__["TodoService"], _auth_guard__WEBPACK_IMPORTED_MODULE_26__["AuthGuard"], _service_auth_service__WEBPACK_IMPORTED_MODULE_27__["AuthService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_35__["CookieService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/auth.service */ "./src/app/service/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
        this.statusWebsite = true;
    }
    AuthGuard.prototype.canActivate = function () {
        var _this = this;
        this._authService.checkStatus().subscribe(function (response) {
            if (response.website_status == '1') {
                _this.statusWebsite = true;
                localStorage.setItem('web_status', "1");
            }
            else {
                _this.statusWebsite = false;
            }
            // return response.website_status;
        });
        if (this.statusWebsite && localStorage.getItem('web_status') != '2') {
            return true;
        }
        else {
            localStorage.setItem('web_status', "2");
            this._router.navigate(['/404']);
            return false;
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/components/contactus/contactus.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/contactus/contactus.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contentPageArea{\r\n    margin-left:0px;\r\n    margin-right: 0px;\r\n    padding: 0px;\r\n    border: 0px solid #D10000;\r\n    margin-top:30px;\r\n    margin-bottom:30px;\r\n    padding:0 50px 0 50px;\r\n}\r\n.image-news{\r\n    background-size: cover;\r\n    background-position: center;\r\n    height: 536px;\r\n    width: 100%;\r\n    background-image: url(/assets/images/news/callcenter.jpg);\r\n}\r\n.cardNews{\r\n    height: 100%;\r\n    border: 2px solid red;\r\n  }\r\n.container{\r\n\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0dXMvY29udGFjdHVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLFdBQVc7SUFDWCx5REFBeUQ7QUFDN0Q7QUFDQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7RUFDdkI7QUFDQTs7RUFFQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdHVzL2NvbnRhY3R1cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnRQYWdlQXJlYXtcclxuICAgIG1hcmdpbi1sZWZ0OjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgYm9yZGVyOiAwcHggc29saWQgI0QxMDAwMDtcclxuICAgIG1hcmdpbi10b3A6MzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206MzBweDtcclxuICAgIHBhZGRpbmc6MCA1MHB4IDAgNTBweDtcclxufVxyXG4uaW1hZ2UtbmV3c3tcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDUzNnB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvbmV3cy9jYWxsY2VudGVyLmpwZyk7XHJcbn1cclxuLmNhcmROZXdze1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xyXG4gIH1cclxuICAuY29udGFpbmVye1xyXG5cclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/components/contactus/contactus.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/contactus/contactus.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n<div class=\"contentPageArea\">\n  <div class=\"titleContent\" [innerHTML]=\"todoContactText | sanitizeHtml\"></div>\n</div>\n<!-- <app-content-bottom></app-content-bottom> -->\n</div>"

/***/ }),

/***/ "./src/app/components/contactus/contactus.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/contactus/contactus.component.ts ***!
  \*************************************************************/
/*! exports provided: ContactusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusComponent", function() { return ContactusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/todo.service */ "./src/app/service/todo.service.ts");



var ContactusComponent = /** @class */ (function () {
    function ContactusComponent(todoServcie) {
        this.todoServcie = todoServcie;
    }
    ContactusComponent.prototype.ngOnInit = function () {
        //call service
        var _this = this;
        this.todoServcie.getTextContext().subscribe(function (response) {
            //this.sanitizedURL = this.sanitizer.bypassSecurityTrustResourceUrl(response.data.contact_text_detail)['changingThisBreaksApplicationSecurity']; 
            //console.log(response.data.contact_text_detail);
            _this.todoContactText = response.data.contact_text_detail;
        });
    };
    ContactusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contactus',
            template: __webpack_require__(/*! ./contactus.component.html */ "./src/app/components/contactus/contactus.component.html"),
            styles: [__webpack_require__(/*! ./contactus.component.css */ "./src/app/components/contactus/contactus.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"]])
    ], ContactusComponent);
    return ContactusComponent;
}());



/***/ }),

/***/ "./src/app/components/content-bottom/content-bottom.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/content-bottom/content-bottom.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contentBotArea{\r\n    float: left;\r\n    width: 100%;\r\n}\r\n.logo-news{\r\n    position: absolute;\r\n    width: 150px;\r\n    height: 150px;\r\n}\r\n.div-image{\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-image: url(/assets/images/content/news.png);\r\n    background-size: 100% 100%;\r\n}\r\n.line-news{\r\n    position: absolute;\r\n    width: 150px;\r\n    height: 150px;\r\n    bottom: 0;\r\n    margin-left: 25%;\r\n    margin-right: auto;\r\n}\r\n.logo-news img{\r\n    width: 100%;\r\n}\r\n.line-news img{\r\n    width: 100%;\r\n}\r\n.titleContentBot{\r\n    background: #F3FBAD;\r\n    color: white;\r\n    padding: 10px;\r\n    margin-top:10px;\r\n    float: left;\r\n    width: 100%;\r\n}\r\n.titleLeft{\r\n    float: left;\r\n    color: white;\r\n    font-size: 1.6em;\r\n\r\n}\r\n.viewmore{\r\n    float: right;\r\n    margin-top:6px;\r\n    color:#E8CF01;\r\n}\r\n.viewmore:hover{\r\n    cursor: pointer;\r\n    text-decoration: underline;\r\n}\r\n.dataContentBot{\r\n    /* min-height: 500px; */\r\n    float: left;\r\n    width: 100%;\r\n}\r\n.bootCols{\r\n    height:100px;\r\n    margin:0;\r\n    box-sizing:border-box;\r\n    padding:5px;\r\n    border:2px solid black;\r\n    background-color:red;\r\n  }\r\n.row{\r\n      margin-left:0px;\r\n      margin-right: 0px;\r\n  }\r\n.newsArea{\r\n      height: auto;\r\n      margin-top: 10px;\r\n      \r\n      padding: 0px;\r\n      min-height: 460px;\r\n      text-overflow: ellipsis;\r\n      overflow: hidden;\r\n      \r\n  }\r\n.newsArea:first-child{\r\n      margin-left:0px;\r\n  }\r\n.image-news{\r\n      height: calc( 100% - 120px  );\r\n      background-size: cover;\r\n      background-position: center;\r\n  }\r\n.view_more:hover{\r\n      \r\n      cursor: pointer;\r\n  }\r\n.text-news{\r\n      padding:10px;\r\n      \r\n      color:white;\r\n      min-height: 35px ;\r\n      height: 35px; \r\n      overflow: hidden;\r\n  }\r\n.des-news{\r\n    padding:10px;\r\n    \r\n    color:white;\r\n    min-height: 35px ;\r\n    height: 80px; \r\n    overflow: hidden;\r\n}\r\n@media screen and (min-width: 1200px) {\r\n\r\n    .newsArea{\r\n        margin-left:15px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250ZW50LWJvdHRvbS9jb250ZW50LWJvdHRvbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFdBQVc7QUFDZjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixzREFBc0Q7SUFDdEQsMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osYUFBYTtJQUNiLGVBQWU7SUFDZixXQUFXO0lBQ1gsV0FBVztBQUNmO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjs7QUFFcEI7QUFDQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7QUFFQTtJQUNJLFlBQVk7SUFDWixRQUFRO0lBQ1IscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsb0JBQW9CO0VBQ3RCO0FBQ0E7TUFDSSxlQUFlO01BQ2YsaUJBQWlCO0VBQ3JCO0FBQ0E7TUFDSSxZQUFZO01BQ1osZ0JBQWdCOztNQUVoQixZQUFZO01BQ1osaUJBQWlCO01BQ2pCLHVCQUF1QjtNQUN2QixnQkFBZ0I7O0VBRXBCO0FBQ0E7TUFDSSxlQUFlO0VBQ25CO0FBRUE7TUFDSSw2QkFBNkI7TUFDN0Isc0JBQXNCO01BQ3RCLDJCQUEyQjtFQUMvQjtBQUVBOztNQUVJLGVBQWU7RUFDbkI7QUFDQTtNQUNJLFlBQVk7O01BRVosV0FBVztNQUNYLGlCQUFpQjtNQUNqQixZQUFZO01BQ1osZ0JBQWdCO0VBQ3BCO0FBQ0E7SUFDRSxZQUFZOztJQUVaLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjtBQUVBOztJQUVJO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbnRlbnQtYm90dG9tL2NvbnRlbnQtYm90dG9tLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudEJvdEFyZWF7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5sb2dvLW5ld3N7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG59XHJcbi5kaXYtaW1hZ2V7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9jb250ZW50L25ld3MucG5nKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG59XHJcbi5saW5lLW5ld3N7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG4ubG9nby1uZXdzIGltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5saW5lLW5ld3MgaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnRpdGxlQ29udGVudEJvdHtcclxuICAgIGJhY2tncm91bmQ6ICNGM0ZCQUQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDoxMHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4udGl0bGVMZWZ0e1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDEuNmVtO1xyXG5cclxufVxyXG4udmlld21vcmV7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tdG9wOjZweDtcclxuICAgIGNvbG9yOiNFOENGMDE7XHJcbn1cclxuLnZpZXdtb3JlOmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuLmRhdGFDb250ZW50Qm90e1xyXG4gICAgLyogbWluLWhlaWdodDogNTAwcHg7ICovXHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYm9vdENvbHN7XHJcbiAgICBoZWlnaHQ6MTAwcHg7XHJcbiAgICBtYXJnaW46MDtcclxuICAgIGJveC1zaXppbmc6Ym9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6NXB4O1xyXG4gICAgYm9yZGVyOjJweCBzb2xpZCBibGFjaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmVkO1xyXG4gIH1cclxuICAucm93e1xyXG4gICAgICBtYXJnaW4tbGVmdDowcHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gIH1cclxuICAubmV3c0FyZWF7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgXHJcbiAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgbWluLWhlaWdodDogNDYwcHg7XHJcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICBcclxuICB9XHJcbiAgLm5ld3NBcmVhOmZpcnN0LWNoaWxke1xyXG4gICAgICBtYXJnaW4tbGVmdDowcHg7XHJcbiAgfVxyXG5cclxuICAuaW1hZ2UtbmV3c3tcclxuICAgICAgaGVpZ2h0OiBjYWxjKCAxMDAlIC0gMTIwcHggICk7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLnZpZXdfbW9yZTpob3ZlcntcclxuICAgICAgXHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgLnRleHQtbmV3c3tcclxuICAgICAgcGFkZGluZzoxMHB4O1xyXG4gICAgICBcclxuICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDM1cHggO1xyXG4gICAgICBoZWlnaHQ6IDM1cHg7IFxyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuICAuZGVzLW5ld3N7XHJcbiAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICBcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgbWluLWhlaWdodDogMzVweCA7XHJcbiAgICBoZWlnaHQ6IDgwcHg7IFxyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcblxyXG4gICAgLm5ld3NBcmVhe1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjE1cHg7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/content-bottom/content-bottom.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/content-bottom/content-bottom.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"contentBotArea\">\n    <div class=\"dataContentBot\">\n      <div class=\"row\">\n          <div data-aos=\"fade-right\" data-aos-once=\"true\" data-aos-delay=\"200\" class=\"col-sm newsArea\" *ngFor=\"let todo of todoList;\" [routerLink]=\"['/news/news-detail',todo.adjust_page_title+'-'+todo.adjust_page_id]\">\n          <!-- <div *ngFor=\"let todo of todoList;\" class=\"col-sm newsArea\" [routerLink]=\"['/news/news-detail',todo.content_id]\"> -->\n              <!-- <div class=\"logo-news\">\n                  <img class=\"center\" src=\"/assets/images/logo/logo.png\">\n              </div>\n              <div class=\"line-news\">\n                  <img class=\"center\" src=\"/assets/images/logo/logo.png\">\n              </div> -->\n              <div class=\"image-news\" [ngStyle]=\"{backgroundImage:'url(/upload/files/' + todo.adjust_page_image_name  + '.' + todo.adjust_page_image_type  + ')'}\" >\n                <!-- <div class=\"image-news\" [ngStyle]=\"{backgroundImage:'url(/assets/images/content/pro4.png)'}\" > -->\n                <div class=\"div-image\"></div>\n              </div>\n              <div class=\"text-news\" style=\"color:red; \">\n                    {{todo.adjust_page_title}}\n              </div>\n              <div class=\"des-news\" >\n                  {{todo.adjust_page_short_description}}\n              </div>\n          </div>\n          \n      </div>\n      <div style=\"width: 100%; text-align:center;margin-top:30px;\">\n          <div class=\"btn btn-danger view_more\" style=\"text-align: center;\" routerLink=\"/news\">ดูเพิ่มเติม +</div>\n      </div>\n      \n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/content-bottom/content-bottom.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/content-bottom/content-bottom.component.ts ***!
  \***********************************************************************/
/*! exports provided: ContentBottomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentBottomComponent", function() { return ContentBottomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/todo.service */ "./src/app/service/todo.service.ts");



var ContentBottomComponent = /** @class */ (function () {
    function ContentBottomComponent(todoServcie) {
        this.todoServcie = todoServcie;
    }
    ContentBottomComponent.prototype.ngOnInit = function () {
        var _this = this;
        //call service
        this.todoServcie.getTodoList(2).subscribe(function (response) {
            _this.todoList = response;
        });
    };
    ContentBottomComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-content-bottom',
            template: __webpack_require__(/*! ./content-bottom.component.html */ "./src/app/components/content-bottom/content-bottom.component.html"),
            styles: [__webpack_require__(/*! ./content-bottom.component.css */ "./src/app/components/content-bottom/content-bottom.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"]])
    ], ContentBottomComponent);
    return ContentBottomComponent;
}());



/***/ }),

/***/ "./src/app/components/deposit/deposit.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/deposit/deposit.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".titleContent{\r\n    height: 500px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kZXBvc2l0L2RlcG9zaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2RlcG9zaXQvZGVwb3NpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlQ29udGVudHtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/deposit/deposit.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/deposit/deposit.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div _ngcontent-upl-c4=\"\" class=\"container page_content\">\n  <div _ngcontent-upl-c4=\"\" class=\"contentPageArea\" style=\"padding:0px;\">\n    <div  class=\"titleContent mostly-customized-scrollbar\" style=\"height: 500px;\">\n            <div class=\"titleContent\" [innerHTML]=\"data_deatail | sanitizeHtml\"></div>\n    </div>\n  </div>\n </div> "

/***/ }),

/***/ "./src/app/components/deposit/deposit.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/deposit/deposit.component.ts ***!
  \*********************************************************/
/*! exports provided: DepositComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepositComponent", function() { return DepositComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_service_todo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/todo.service */ "./src/app/service/todo.service.ts");




var DepositComponent = /** @class */ (function () {
    function DepositComponent(route, todoServcie) {
        this.route = route;
        this.todoServcie = todoServcie;
    }
    DepositComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.todoServcie.getDataPage('deposit2').subscribe(function (response) {
            _this.data_title = response.data.menu_name;
            _this.data_deatail = response.data.menu_detail;
        });
    };
    DepositComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-deposit',
            template: __webpack_require__(/*! ./deposit.component.html */ "./src/app/components/deposit/deposit.component.html"),
            styles: [__webpack_require__(/*! ./deposit.component.css */ "./src/app/components/deposit/deposit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_service_todo_service__WEBPACK_IMPORTED_MODULE_3__["TodoService"]])
    ], DepositComponent);
    return DepositComponent;
}());



/***/ }),

/***/ "./src/app/components/error/error.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/error/error.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fonterror{\r\n    text-align: center;\r\n    font-size: 4em;\r\n    color: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lcnJvci9lcnJvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9lcnJvci9lcnJvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvbnRlcnJvcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogNGVtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/error/error.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/error/error.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"fonterror\">\n        ERROR 404\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/error/error.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/error/error.component.ts ***!
  \*****************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-error',
            template: __webpack_require__(/*! ./error.component.html */ "./src/app/components/error/error.component.html"),
            styles: [__webpack_require__(/*! ./error.component.css */ "./src/app/components/error/error.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/components/event_record/event_record.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/event_record/event_record.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n#inner {\r\n    display: table;\r\n    margin: 0 auto;\r\n  }\r\n  \r\n  #outer {\r\n    width:100%\r\n  }\r\n  \r\n  .table{\r\n      width: 320px;\r\n  }\r\n  \r\n  .columns {\r\n\tdisplay: flex;\r\n\tflex-flow: row wrap;\r\n\tjustify-content: center;\r\n\tmargin: 5px 0;\r\n}\r\n  \r\n  .column {\r\n\tflex: 1;\r\n\tborder: 1px solid gray;\r\n\tmargin: 2px;\r\n    padding: 10px;\r\n    min-height: 150px;\r\n    text-align: center;\r\n    position: relative;\r\n\t&:first-child { margin-left: 0; }\r\n\t&:last-child { margin-right: 0; }\r\n\t\r\n}\r\n  \r\n  .btn_event{\r\n    margin-top: 40px;\r\n}\r\n  \r\n  .win_game{\r\n    \r\n}\r\n  \r\n  /* @media screen and (max-width: 980px) {\r\n    .columns .column {\r\n          margin-bottom: 5px;\r\n      flex-basis: 40%;\r\n          &:nth-last-child(2) {\r\n              margin-right: 0;\r\n          }\r\n          &:last-child {\r\n              flex-basis: 100%;\r\n              margin: 0;\r\n          }\r\n      }\r\n  } */\r\n  \r\n  @media screen and (max-width: 425px) {\r\n      .columns .column {\r\n          flex-basis: 100%;\r\n          margin: 0 0 5px 0;\r\n      }\r\n  }\r\n  \r\n  @media screen and (min-width: 768px) {\r\n    .table{\r\n        width: 620px;\r\n    }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ldmVudF9yZWNvcmQvZXZlbnRfcmVjb3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksY0FBYztJQUNkLGNBQWM7RUFDaEI7O0VBRUE7SUFDRTtFQUNGOztFQUNBO01BQ0ksWUFBWTtFQUNoQjs7RUFFRjtDQUNDLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsdUJBQXVCO0NBQ3ZCLGFBQWE7QUFDZDs7RUFFQTtDQUNDLE9BQU87Q0FDUCxzQkFBc0I7Q0FDdEIsV0FBVztJQUNSLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtDQUNyQixnQkFBZ0IsY0FBYyxFQUFFO0NBQ2hDLGVBQWUsZUFBZSxFQUFFOztBQUVqQzs7RUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7RUFDQTs7QUFFQTs7RUFFQTs7Ozs7Ozs7Ozs7O0tBWUs7O0VBRUg7TUFDSTtVQUNJLGdCQUFnQjtVQUNoQixpQkFBaUI7TUFDckI7RUFDSjs7RUFFQTtJQUNFO1FBQ0ksWUFBWTtJQUNoQjtFQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ldmVudF9yZWNvcmQvZXZlbnRfcmVjb3JkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuI2lubmVyIHtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gICNvdXRlciB7XHJcbiAgICB3aWR0aDoxMDAlXHJcbiAgfVxyXG4gIC50YWJsZXtcclxuICAgICAgd2lkdGg6IDMyMHB4O1xyXG4gIH1cclxuXHJcbi5jb2x1bW5zIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZmxvdzogcm93IHdyYXA7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0bWFyZ2luOiA1cHggMDtcclxufVxyXG5cclxuLmNvbHVtbiB7XHJcblx0ZmxleDogMTtcclxuXHRib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG5cdG1hcmdpbjogMnB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdCY6Zmlyc3QtY2hpbGQgeyBtYXJnaW4tbGVmdDogMDsgfVxyXG5cdCY6bGFzdC1jaGlsZCB7IG1hcmdpbi1yaWdodDogMDsgfVxyXG5cdFxyXG59XHJcblxyXG4uYnRuX2V2ZW50e1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxufVxyXG4ud2luX2dhbWV7XHJcbiAgICBcclxufVxyXG5cclxuLyogQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTgwcHgpIHtcclxuICAgIC5jb2x1bW5zIC5jb2x1bW4ge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICBmbGV4LWJhc2lzOiA0MCU7XHJcbiAgICAgICAgICAmOm50aC1sYXN0LWNoaWxkKDIpIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgfSAqL1xyXG4gIFxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNXB4KSB7XHJcbiAgICAgIC5jb2x1bW5zIC5jb2x1bW4ge1xyXG4gICAgICAgICAgZmxleC1iYXNpczogMTAwJTtcclxuICAgICAgICAgIG1hcmdpbjogMCAwIDVweCAwO1xyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgLnRhYmxle1xyXG4gICAgICAgIHdpZHRoOiA2MjBweDtcclxuICAgIH1cclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/components/event_record/event_record.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/event_record/event_record.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n\n<div id=\"outer\">\n    <div class=\"win_game \" id=\"inner\">\n        <table class=\"table\">\n            <thead>\n              <tr>\n                <th scope=\"col\">กิจกรรม</th>\n                <th scope=\"col\">คนร่วมรายการ</th>\n                <th scope=\"col\">คนถูกรางวัล</th>\n                <th scope=\"col\">view</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <th scope=\"row\">1</th>\n                <td>10</td>\n                <td>10</td>\n                <td>คลิก</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">2</th>\n                <td>10</td>\n                <td>100</td>\n                <td>คลิก</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">3</th>\n                <td>10</td>\n                <td>200</td>\n                <td>คลิก</td>\n              </tr>\n            </tbody>\n          </table>\n    </div>\n    <section class=\"columns\">\n        <div class=\"column\">\n            <h2 style=\"text-align: center;\">นับไลค์ (LIKE)</h2>\n            <div class=\"btn_event p-3 mb-2 bg-primary text-white\">100</div>\n          </div>\n          \n          <div class=\"column\">\n            <h2  style=\"text-align: center;\">นับแชร์ (SHARE)</h2>\n            <div class=\"btn_event p-3 mb-2 bg-primary text-white\">20</div>\n          </div>\n          \n          <div class=\"column\">\n            <h2  style=\"text-align: center;\">นับคอมเม้น (COMMENT)</h2>\n            <div class=\"btn_event p-3 mb-2 bg-primary text-white\">10</div>\n          </div>\n    </section>\n\n    <div class=\"win_game \" id=\"inner\">\n        <table class=\"table\" >\n            <thead>\n              <tr>\n                <th scope=\"col\">ชื่อ</th>\n                <th scope=\"col\">ลิ้ง</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <th scope=\"row\">name 1</th>\n                <td>link</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">name 2</th>\n                <td>link</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">name 3</th>\n                <td>link</td>\n              </tr>\n            </tbody>\n          </table>\n    </div>\n</div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/event_record/event_record.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/event_record/event_record.component.ts ***!
  \*******************************************************************/
/*! exports provided: Event_recordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Event_recordComponent", function() { return Event_recordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/todo.service */ "./src/app/service/todo.service.ts");



var Event_recordComponent = /** @class */ (function () {
    function Event_recordComponent(todoServcie) {
        this.todoServcie = todoServcie;
    }
    Event_recordComponent.prototype.ngOnInit = function () {
        //call service
        var _this = this;
        this.todoServcie.getTextContext().subscribe(function (response) {
            //this.sanitizedURL = this.sanitizer.bypassSecurityTrustResourceUrl(response.data.contact_text_detail)['changingThisBreaksApplicationSecurity']; 
            //console.log(response.data.contact_text_detail);
            _this.todoContactText = response.data.contact_text_detail;
        });
    };
    Event_recordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-event_record',
            template: __webpack_require__(/*! ./event_record.component.html */ "./src/app/components/event_record/event_record.component.html"),
            styles: [__webpack_require__(/*! ./event_record.component.css */ "./src/app/components/event_record/event_record.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"]])
    ], Event_recordComponent);
    return Event_recordComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footerArea{\r\n    background-image: url('/assets/images/footer/footer.jpg');\r\n    width:100%;\r\n    height: 90px;\r\n    display: none;\r\n}\r\n.footerArea .container{\r\n    background: unset;\r\n}\r\n.menu_footer{\r\n    color: white;\r\n    float: left;\r\n    text-align: center;\r\n    padding-top:30px;\r\n}\r\ndiv#centerDiv {\r\n    width: 100%;\r\n    text-align: left;\r\n    padding-top:30px;\r\n}\r\nul.centerUL {\r\n    margin: 2px auto;\r\n    line-height: 1.4;\r\n    padding-left: 0;\r\n    color: white;\r\n}\r\nli.menuFooter{\r\n    padding-left:5px;\r\n    padding-right: 5px;\r\n}\r\nli.menuFooter:hover{\r\n    cursor: pointer;\r\n    text-decoration: underline;\r\n}\r\n.centerUL li {\r\n    display: inline;\r\n    text-align: center;\r\n}\r\n@media screen and (min-width: 768px) {\r\n    .footerArea{\r\n        display: block;\r\n    }\r\n    li.menuFooter{\r\n        padding-left:5px;\r\n        padding-right: 5px;\r\n        font-size: 12px;\r\n    }\r\n    .menu_footer{\r\n        font-size: 14px;\r\n    }\r\n    .menu1{\r\n       margin-right: 10px;\r\n    }\r\n    .menu2{\r\n        margin-right: 10px;\r\n    }\r\n    .menu3{\r\n        margin-right: 10px;\r\n    }\r\n    .menu4{\r\n        margin-right: 12px;\r\n    }\r\n    .menu5{\r\n        margin-right: 12px;\r\n    }\r\n    .menu6{\r\n        margin-right: 12px;\r\n    }\r\n    .menu7{\r\n        margin-right: 10px;\r\n    }\r\n}\r\n@media screen and (min-width: 992px) {\r\n    \r\n    li.menuFooter{\r\n        font-size: 1em;\r\n    }\r\n    .menu1{\r\n       margin-right: 20px;\r\n    }\r\n    .menu2{\r\n        margin-right: 20px;\r\n    }\r\n    .menu3{\r\n        margin-right: 20px;\r\n    }\r\n    .menu4{\r\n        margin-right: 20px;\r\n    }\r\n    .menu5{\r\n        margin-right: 20px;\r\n    }\r\n    .menu6{\r\n        margin-right: 20px;\r\n    }\r\n    .menu7{\r\n        margin-right: 10px;\r\n    }\r\n}\r\n@media screen and (min-width: 1200px) {\r\n    \r\n    li.menuFooter{\r\n        font-size: 1em;\r\n    }\r\n    .menu1{\r\n        margin-left: 25px;\r\n        margin-right: 40px;\r\n    }\r\n    .menu2{\r\n        margin-right: 40px;\r\n    }\r\n    .menu3{\r\n        margin-right: 40px;\r\n    }\r\n    .menu4{\r\n        margin-right: 40px;\r\n    }\r\n    .menu5{\r\n        margin-right: 40px;\r\n    }\r\n    .menu6{\r\n        margin-right: 30px;\r\n    }\r\n    .menu7{\r\n        margin-right: 30px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5REFBeUQ7SUFDekQsVUFBVTtJQUNWLFlBQVk7SUFDWixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjtBQUdBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGVBQWU7SUFDZiwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixlQUFlO0lBQ25CO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7T0FDRyxrQkFBa0I7SUFDckI7SUFDQTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7QUFDSjtBQUVBOztJQUVJO1FBQ0ksY0FBYztJQUNsQjtJQUNBO09BQ0csa0JBQWtCO0lBQ3JCO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksa0JBQWtCO0lBQ3RCO0FBQ0o7QUFFQTs7SUFFSTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGlCQUFpQjtRQUNqQixrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlckFyZWF7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2Zvb3Rlci9mb290ZXIuanBnJyk7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uZm9vdGVyQXJlYSAuY29udGFpbmVye1xyXG4gICAgYmFja2dyb3VuZDogdW5zZXQ7XHJcbn1cclxuLm1lbnVfZm9vdGVye1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDozMHB4O1xyXG59XHJcblxyXG5cclxuZGl2I2NlbnRlckRpdiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nLXRvcDozMHB4O1xyXG59XHJcbnVsLmNlbnRlclVMIHtcclxuICAgIG1hcmdpbjogMnB4IGF1dG87XHJcbiAgICBsaW5lLWhlaWdodDogMS40O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbmxpLm1lbnVGb290ZXJ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6NXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG59XHJcbmxpLm1lbnVGb290ZXI6aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG4uY2VudGVyVUwgbGkge1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuZm9vdGVyQXJlYXtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgIGxpLm1lbnVGb290ZXJ7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OjVweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG4gICAgLm1lbnVfZm9vdGVye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuICAgIC5tZW51MXtcclxuICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIH1cclxuICAgIC5tZW51MntcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAubWVudTN7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLm1lbnU0e1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxuICAgIH1cclxuICAgIC5tZW51NXtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgICB9XHJcbiAgICAubWVudTZ7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG4gICAgfVxyXG4gICAgLm1lbnU3e1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgIFxyXG4gICAgbGkubWVudUZvb3RlcntcclxuICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgIH1cclxuICAgIC5tZW51MXtcclxuICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIH1cclxuICAgIC5tZW51MntcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICB9XHJcbiAgICAubWVudTN7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLm1lbnU0e1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIH1cclxuICAgIC5tZW51NXtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICB9XHJcbiAgICAubWVudTZ7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLm1lbnU3e1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgICBcclxuICAgIGxpLm1lbnVGb290ZXJ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICB9XHJcbiAgICAubWVudTF7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xyXG4gICAgfVxyXG4gICAgLm1lbnUye1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNDBweDtcclxuICAgIH1cclxuICAgIC5tZW51M3tcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XHJcbiAgICB9XHJcbiAgICAubWVudTR7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xyXG4gICAgfVxyXG4gICAgLm1lbnU1e1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNDBweDtcclxuICAgIH1cclxuICAgIC5tZW51NntcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICB9XHJcbiAgICAubWVudTd7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div _ngcontent-mdb-c2=\"\" class=\"footerArea\">\n    <div _ngcontent-mdb-c2=\"\" class=\"container\">\n        <div _ngcontent-mdb-c2=\"\" id=\"centerDiv\">\n            <ul _ngcontent-mdb-c2=\"\" class=\"centerUL\">\n                <li _ngcontent-mdb-c2=\"\" class=\"menuFooter menu1\">ทำไมเลือก UFABET</li>\n                <li _ngcontent-mdb-c2=\"\" class=\"menuFooter menu2\">เกี่ยวกับเรา</li>\n                <li _ngcontent-mdb-c2=\"\" class=\"menuFooter menu3\">ข่าว</li>\n                <li _ngcontent-mdb-c2=\"\" class=\"menuFooter menu4\">นโยบายความเป็นส่วนตัว</li>\n                <li _ngcontent-mdb-c2=\"\" class=\"menuFooter menu5\">การพนันด้วยความรับผิดชอบ</li>\n                <li _ngcontent-mdb-c2=\"\" class=\"menuFooter menu6\">กฏกติกา</li>\n                <li _ngcontent-mdb-c2=\"\" class=\"menuFooter menu7\">ช่วยเหลือ</li>\n                <li _ngcontent-mdb-c2=\"\" class=\"menuFooter menu8\">ติดต่อเรา</li>\n            </ul>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.contentArea{\r\n    border: 1px solid #D10000;\r\n    min-height: 952px;\r\n    margin-top:10px;\r\n}\r\n.click-to-news{\r\n    background-image: url(/assets/images/nav/tab2.png);\r\n    background-size: 100% 60px;\r\n    height: 60px;\r\n    background-repeat: no-repeat;\r\n    color:black !important;\r\n}\r\n.click-to-news:hover{\r\n    cursor: pointer;\r\n}\r\n.area_bottom_menu{\r\n    width: 100%;\r\n    float: left;\r\n    height: auto;\r\n    min-height: 300px;\r\n    border-top: #363636 solid 2px;\r\n    margin-top:15px;\r\n    display: block !important;\r\n}\r\n.home_slide{\r\n    float: left;\r\n    position: relative;\r\n    margin-top: 0px;\r\n    z-index: 1;\r\n    min-height: 150px;\r\n    top: 180px;\r\n}\r\n.home_slide{\r\n    top:unset;\r\n}\r\n.slideshow-container{\r\n    height: 200px !important;\r\n}\r\n.contentHeader{\r\n    background: #D10000;\r\n    color: white;\r\n    padding: 10px;\r\n    font-size: 1.6em;\r\n   \r\n}\r\n.register_area{\r\n    padding-top:30px;\r\n}\r\n.callcenter{\r\n    background-image: url('/assets/images/content/callcenter.jpg');\r\n    width: 100%;\r\n    height: 150px;\r\n    background-size: 100% 100%;\r\n}\r\n.area_bank{\r\n    float: left;\r\n    width: 100%;\r\n    height: auto;\r\n    min-height: 140px;\r\n    background-color: #363636;\r\n}\r\n.img_bank{\r\n    background-image: url('/assets/images/content/banking.png');\r\n    background-repeat: no-repeat;\r\n    height: 100px;\r\n    width: 300px;\r\n    background-size: 100% auto;\r\n    float: left;\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n}\r\n.contentText{\r\n    color: white;\r\n    font-size: 1.1em;\r\n    padding:10px;\r\n}\r\n.area_text_bank{\r\n    float: left;\r\n    margin-top:30px;\r\n}\r\n.text_bank{\r\n    font-size: 2em;\r\n    color: white;\r\n    float: left;\r\n}\r\n.text_bank2{\r\n    font-size: 1em;\r\n    color: white;\r\n    float: left;\r\n    clear: both;\r\n}\r\n.area_text_des{\r\n    height: auto;\r\n    float: left;\r\n    min-height: 430px;\r\n    background-color: black;\r\n    padding:0 20px 0 20px;\r\n}\r\n.header1{\r\n    font-size: 2em;\r\n    color: #fff;\r\n    text-align: center;\r\n}\r\n.header2{\r\n    font-size: 1.5em;\r\n    color: #fff;\r\n    text-align: center;\r\n}\r\n.text_description{\r\n    color: #fff;\r\n    text-align: center;\r\n}\r\n.text_description_green{\r\n    margin-top:15px;\r\n    font-size: 1.5em;\r\n    color:#5DD812;\r\n    text-align: center;\r\n}\r\n.text_description_green2{\r\n    margin-top:48px;\r\n    font-size: 1em;\r\n    color:#5DD812;\r\n    text-align: center;\r\n    font-weight: 100;\r\n    float: left;\r\n}\r\n.area_line{\r\n    float: left;\r\n    width: 100%;\r\n}\r\n.phone_image{\r\n    background-image: url('/assets/images/content/tel.png');\r\n    background-repeat: no-repeat;\r\n    height: 59px;\r\n    width: 35px;\r\n    float: left;\r\n    margin-top: 25px;\r\n    margin-bottom: 20px;\r\n    margin-right: 10px;\r\n}\r\n.line_image{\r\n    background-image: url('/assets/images/content/addfriend.png');\r\n    background-repeat: no-repeat;\r\n    height: 43px;\r\n    width: 169px;\r\n    float: left;\r\n    margin-top: 38px;\r\n    margin-bottom: 20px;\r\n    margin-left:10px;\r\n}\r\n.area_bottom_menu{\r\n    width: 100%;\r\n    float: left;\r\n    height: auto;\r\n    min-height: 300px;\r\n    border-top: #363636 solid 2px;\r\n    margin-top:15px;\r\n}\r\n.text_bottom_menu{\r\n    font-size: 2em;\r\n    color: #fff;\r\n    text-align: center;\r\n    margin-top:0px;\r\n    font-weight: 100;\r\n}\r\n.highlight{\r\n    color:#E8CF01;\r\n}\r\n.indent{\r\n    text-indent: 30px; margin-top: 0.63em\r\n}\r\n.indent2{\r\n    text-indent: 0px; margin-top: 1em\r\n}\r\n.indent3{\r\n    text-indent: 30px; margin-top: 0em\r\n}\r\n.newsArea{\r\n    height: auto;\r\n    margin-top: 10px;\r\n    /* border: 2px solid red; */\r\n    padding: 0px;\r\n    min-height: 300px;\r\n    text-overflow: ellipsis;\r\n    overflow: hidden;\r\n    padding-left:5px;\r\n    padding-right:5px;\r\n}\r\n.cardNews{\r\nheight: 100%;\r\nborder: 2px solid #D2AE70;\r\n}\r\n.image-news{\r\n    height: calc( 100% - 70px );\r\n    background-size: cover;\r\n    background-position: center;\r\n}\r\n.text-news{\r\n    padding:10px;\r\n    border-top:1px solid #D2AE70;\r\n    color:white;\r\n    min-height: 50px;\r\n    \r\n}\r\n.home_slide .row {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n     margin-right: unset;\r\n     margin-left: unset;\r\n    width: 100%;\r\n}\r\n.slide_and_btn .col-8{\r\n    flex:unset;\r\n    max-width: unset;\r\n}\r\n.slide_and_btn .col-4{\r\n    flex:unset;\r\n    max-width: unset;\r\n    height: 320px;\r\n    \r\n}\r\n.register_button{\r\n    /* background-image: url('/assets/images/content/register.png'); */\r\n    /* background-repeat: no-repeat;\r\n    background-size: contain; */\r\n    height: auto;\r\n    width: 100%;\r\n    margin-top:15px;\r\n    margin-bottom: 15px;\r\n    /* margin-left:10px; */\r\n}\r\n.register_button img{\r\n    height: auto;\r\n    width: 100%;\r\n}\r\n.deposit_button{\r\n    /* background-image: url('/assets/images/content/deposit.png'); */\r\n    /* background-repeat: no-repeat;\r\n    background-size: 100% 100%; */\r\n    height: auto;\r\n    width: 140px;\r\n    clear:left;\r\n    float: left;\r\n    position: absolute;\r\n    /* margin-left:10px; */\r\n}\r\n.deposit_button img{\r\n    height: auto;\r\n    width: 140px;\r\n}\r\n.withdrow_button{\r\n    /* background-image: url('/assets/images/content/WITHDRAW.png'); */\r\n    /* background-repeat: no-repeat;\r\n    background-size: 100% 100%; */\r\n    height: auto;\r\n    width: 140px;\r\n    float: left;\r\n    right:15px;\r\n    position: absolute;\r\n}\r\n.withdrow_button img{\r\n    height: auto;\r\n    width: 140px;\r\n}\r\n.text_howtoplay{\r\n    color: white;\r\n    font-size:1.5em;\r\n    margin-left:15px;\r\n    margin-right:15px;\r\n    margin-top:15px;\r\n    border-bottom: 3px solid #1D1D1D;\r\n}\r\n.image_howtoplay{\r\n    width: 100%;\r\n    padding: 0px 15px 0 15px;\r\n    min-height: 100px;\r\n    display: none;\r\n}\r\n.login_area{\r\n    width:100%;\r\n    margin-bottom: 15px;\r\n    float: left;\r\n}\r\n.login_btn{\r\n    background-color: #FD8F00;\r\n    color:white;\r\n    width: 140px;\r\n    text-align: center;\r\n    border-radius: 5px;\r\n    font-size: 1.2em;\r\n    margin-left:15px;\r\n    margin-top:15px;\r\n    margin-bottom: 15px;\r\n}\r\n.input-text{\r\n    margin-top:15px;\r\n    margin-left:15px;\r\n    width: calc( 100% - 30px);\r\n}\r\n.no-padding{\r\n    padding:unset;\r\n    flex-grow: unset;\r\n    flex-basis:unset;\r\n}\r\n.sport_button{\r\n    margin-top:25px;\r\n    padding-left:15px;\r\n    padding-right: 15px;\r\n}\r\n.sport_img img{\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n}\r\n.casino_img img{\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n }\r\n.live_img img{\r\n    width: 100%;\r\n }\r\n.divMainContent{\r\n    overflow: hidden;\r\n    height: auto;\r\n    margin-top:15px;\r\n}\r\n.h1text{\r\n    font-size: 1.2em;\r\n    color: #F3D800;\r\n}\r\n.detailRight{\r\n    border-top: 3px solid #1D1D1D;\r\n    float: left;\r\n    width: calc( 100% - 30px);\r\n    color:white;\r\n    text-align: center;\r\n    margin-left:15px;\r\n}\r\n.detailLeft{\r\n\r\n    margin-left:15px;\r\n    width: calc( 100% - 30px);\r\n    margin-top:15px;\r\n    float: left;\r\n}\r\n.howtoplay_casino_img img{\r\n    width: 100%;\r\n}\r\n.howtoplay_football_img img{\r\n    margin-top:15px;\r\n    width: 100%;\r\n}\r\n.banking_area{\r\n    display: none !important;\r\n}\r\n@media screen and (min-width: 375px) {\r\n    .register_button{\r\n        height: auto;\r\n        width:326px;\r\n        margin-left:10px;\r\n    }\r\n\r\n    .deposit_button{\r\n        height: 160px;\r\n        width: 153px;\r\n        margin-left:10px;\r\n    }\r\n    .withdrow_button{\r\n        height: 160px;\r\n        width: 153px;\r\n        margin-right:0px;\r\n    }\r\n    .howtoplay_casino_img img{\r\n        width: 332px;\r\n        margin-left:5px;\r\n    }\r\n    .howtoplay_football_img img{\r\n        width: 332px;\r\n        margin-left:5px;\r\n    }\r\n    \r\n    \r\n}\r\n@media screen and (min-width: 425px) {\r\n    .register_button{\r\n        height: auto;\r\n        margin-left:35px;\r\n    }\r\n    .howtoplay_casino_img img{\r\n        margin-left: calc( 50% - 166px);\r\n    }\r\n    .howtoplay_football_img img{\r\n        margin-left: calc( 50% - 166px);\r\n    }\r\n    .slide_and_btn .col-4{\r\n        height: 300px;\r\n    }\r\n}\r\n@media screen and (min-width: 500px) {\r\n    .register_button{\r\n        height: auto;\r\n        margin-left: calc( 50% - 160px);\r\n    }\r\n    .deposit_button{\r\n        height: auto;\r\n        width: 220px;\r\n        margin-left:0px;\r\n        margin-left: calc( 50% - 174px);\r\n    }\r\n    .withdrow_button{\r\n        height: auto;\r\n        width: 220px;\r\n        margin-left:0px;\r\n        margin-right: calc( 50% - 260px);\r\n    }\r\n    .slide_and_btn .col-4{\r\n        height: 300px;\r\n    }\r\n}\r\n@media screen and (min-width: 540px) {\r\n    .register_button{\r\n        height: auto;\r\n    }\r\n    .deposit_button{\r\n        height: auto;\r\n        width: 141px;\r\n        margin-left: calc( 50% - 174px);\r\n    }\r\n    .withdrow_button{\r\n        height: auto;\r\n        width: 141px;\r\n        margin-right: calc( 50% - 184px);\r\n    }\r\n    .slide_and_btn .col-4{\r\n        height: 300px;\r\n    }\r\n}\r\n@media screen and (min-width: 580px) {\r\n    .register_button{\r\n       width: 300px;\r\n       height: auto;\r\n       margin-bottom:0px;\r\n    }\r\n    \r\n    .deposit_button{\r\n        height: auto;\r\n        width: 141px;\r\n        margin-top:15px;\r\n        margin-left: calc( 50% - 174px);\r\n    }\r\n    .withdrow_button{\r\n        height: auto;\r\n        width: 141px;\r\n        margin-top:15px;\r\n        margin-right: calc( 50% - 156px);\r\n    }\r\n    .slide_and_btn .col-4{\r\n        height: 300px;\r\n    }\r\n}\r\n@media screen and (min-width: 640px) {\r\n    .image_howtoplay{\r\n        padding:unset;\r\n        display: block;\r\n    }\r\n    .text_howtoplay{\r\n        margin-left: 0px;\r\n        margin-right: 0px;\r\n    }\r\n    .login_area{\r\n        margin-left: -15px;\r\n    }\r\n    .container{\r\n        /* max-width: unset; */\r\n        max-width: 640px;\r\n    }\r\n    .home_slide{\r\n        padding-left:30px;\r\n        padding-right: 30px;\r\n        padding-top:15px;\r\n    }\r\n    .home_slide .row {\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n         margin-right: -15px;\r\n         margin-left: -15px;\r\n         width: unset;\r\n    }\r\n    .register_button{\r\n        width: 194px;\r\n        margin-top: 0px;\r\n        height: 71px;\r\n        margin-left:0px;\r\n        float: unset;\r\n    }\r\n    .deposit_button{\r\n        height: auto;\r\n        width: 95px;\r\n        margin-left:0px;\r\n        float: unset;\r\n        position: absolute;\r\n    }\r\n    .deposit_button img{\r\n        height: auto;\r\n        width: 95px;\r\n    }\r\n    .withdrow_button{\r\n        height: auto;\r\n        width: 95px;\r\n        margin-left:10px;\r\n        float: unset;\r\n        position: absolute;\r\n        right: 8px;\r\n        left: 90px;\r\n    }\r\n    .withdrow_button img{\r\n        height: auto;\r\n        width: 95px;\r\n    }\r\n    .slide_and_btn .col-8{\r\n        flex: 0 0 66.666667%;\r\n        max-width: 66.666667%;\r\n        /* padding:unset;  */\r\n    }\r\n    .slide_and_btn .col-4{\r\n        flex: 0 0 33.333333%;\r\n        max-width: 33.333333%;\r\n        height: auto;\r\n        padding:unset;\r\n        /* padding:unset;  */\r\n    }\r\n}\r\n@media screen and (min-width: 768px) {\r\n    .detailRight{\r\n        float: right;\r\n        width: calc( 100% - 352px) ;\r\n        padding-top:30px;\r\n        text-align: left;\r\n        font-weight: 100;\r\n        margin-left: 0px;\r\n    }\r\n    .detailLeft{\r\n        float: left;\r\n        width: 332px;\r\n        margin-top: 0px;\r\n        margin-left: 0px;\r\n        \r\n    }\r\n    .banking_area{\r\n        display: block !important;\r\n    }\r\n    .banking_img{\r\n        margin-top:10px;\r\n    }\r\n    .banking_img img{\r\n        width:100%;\r\n    }\r\n    .howtoplay_casino_img{\r\n        /* float: left; */\r\n    }\r\n    .howtoplay_football_img{\r\n        /* margin-top:10px; */\r\n        /* float: left; */\r\n    }\r\n\r\n\r\n    .no-padding{\r\n        flex-basis:0;\r\n        flex-grow: 1;\r\n    }\r\n    .login_btn{\r\n        background-color: #FD8F00;\r\n        color:white;\r\n        width: 140px;\r\n        text-align: center;\r\n        border-radius: 5px;\r\n        font-size: 1.2em;\r\n        margin-left:15px;\r\n        margin-top:15px;\r\n        margin-bottom: 0px;\r\n        float: left;\r\n        height: 38px;\r\n        padding-top:6px;\r\n    }\r\n    \r\n    .input-text{\r\n        margin-top:15px;\r\n        margin-left:15px;\r\n        width: 250px;\r\n        float: left;\r\n    }\r\n\r\n\r\n    .container{\r\n        /* max-width: unset; */\r\n        max-width: 768px;\r\n    }\r\n  \r\n    .register_button{\r\n        width: 230px;\r\n        margin-top:0px;\r\n        height: 85px;\r\n        margin-left:0px;\r\n        float: unset;\r\n    }\r\n    .deposit_button{\r\n        height: auto;\r\n        width: 110px;\r\n        margin-left:0px;\r\n        float: unset;\r\n        position: absolute;\r\n    }\r\n    .deposit_button img{\r\n        width: 110px;\r\n    }\r\n    .withdrow_button{\r\n        height: auto;\r\n        width: 110px;\r\n        margin-left:0px;\r\n        float: unset;\r\n        position: absolute;\r\n        right: 48px;\r\n        left: unset;\r\n    }\r\n    .withdrow_button img{\r\n        width: 110px;\r\n    }\r\n    .slide_and_btn .col-8{\r\n        flex: 0 0 66.666667%;\r\n        max-width: 66.666667%;\r\n        /* padding:unset;  */\r\n    }\r\n    .slide_and_btn .col-4{\r\n        flex: 0 0 33.333333%;\r\n        max-width: 33.333333%;\r\n        height: auto;\r\n        padding:unset;\r\n        /* padding:unset;  */\r\n    }\r\n}\r\n@media (min-width: 992px){\r\n    .text_howtoplay{\r\n        margin-left:0px;\r\n    }\r\n\r\n    .login_btn{\r\n        width: 240px;\r\n    }\r\n   \r\n    .input-text{\r\n        margin-top:15px;\r\n        margin-left:15px;\r\n        width: 300px;\r\n        float: left;\r\n    }\r\n\r\n\r\n\r\n\r\n    .register_button{\r\n        width: 300px;\r\n        margin-top:0px;\r\n        height: 120px;\r\n        margin-left:0px;\r\n        float: unset;\r\n    }\r\n    .deposit_button{\r\n        height: auto;\r\n        width: 130px;\r\n        margin-left:0px;\r\n        float: unset;\r\n        position: absolute;\r\n        margin-top: 0px;\r\n    }\r\n    .deposit_button img{\r\n        height: auto;\r\n        width: 130px;\r\n    }\r\n    .withdrow_button{\r\n        height: auto;\r\n        width: 130px;\r\n        margin-left:0px;\r\n        float: unset;\r\n        position: absolute;\r\n        margin-top: 0px;\r\n        right: 10px;\r\n    }\r\n    .withdrow_button img{\r\n        height: auto;\r\n        width: 130px;\r\n    }\r\n    .container {\r\n        max-width: 960px;\r\n    }\r\n}\r\n@media screen and (min-width: 1000px) {\r\n    .h1text{\r\n        font-size: 2.2em;\r\n    }\r\n    .detailRight{\r\n        font-size: 1.2em;\r\n    }\r\n    .register_button{\r\n        width: 300px;\r\n        margin-top:0px;\r\n        height: 120px;\r\n        margin-left:0px;\r\n        float: unset;\r\n    }\r\n    .deposit_button{\r\n        height: 130px;\r\n        width: 130px;\r\n        margin-left:0px;\r\n        float: unset;\r\n        position: absolute;\r\n        margin-top: 0px;\r\n    }\r\n    .withdrow_button{\r\n        height: 130px;\r\n        width: 130px;\r\n        margin-left:0px;\r\n        float: unset;\r\n        position: absolute;\r\n        margin-top: 0px;\r\n        right: 16px;\r\n    }\r\n    \r\n    .container {\r\n        max-width: 960px;\r\n    }\r\n    \r\n    .home_slide .row {\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n         margin-right: -15px;\r\n         margin-left: -15px;\r\n         width: unset;\r\n    }\r\n    .slide_and_btn{\r\n        padding-top:15px;\r\n        padding-left:15px;\r\n        padding-bottom: 15px;\r\n        padding-right: 15px;\r\n    }\r\n    .callcenter{\r\n        height: 350px;\r\n    }\r\n    .contentArea{\r\n      margin-top:0px;\r\n    }\r\n    .contentArea{\r\n        border: 1px solid #D10000;\r\n    }\r\n    .img_bank{\r\n        float: left;\r\n        margin-left:40px;\r\n        width: 428px;\r\n    }\r\n    .area_text_bank{\r\n        margin-left:80px;\r\n    }\r\n    .text_description_green2{\r\n        font-size: 1.5em;\r\n    }\r\n    .area_line{\r\n        float: left;\r\n        margin-left: 120px;\r\n        width: 100%;\r\n    }\r\n    \r\n   }\r\n@media screen and (min-width: 1200px) {\r\n    .deposit_button img{\r\n        height: auto;\r\n        width: 154px;\r\n    }\r\n    .withdrow_button img{\r\n        height: auto;\r\n        width: 154px;\r\n    }\r\n    .h1text{\r\n        font-size: 2em;\r\n    }\r\n    .detailRight{\r\n        font-size: 1.4em;\r\n    }\r\n    .login_btn{\r\n        width: 320px;\r\n    }\r\n    .sport_img img{\r\n        width: 322px;\r\n    }\r\n    \r\n    .casino_img img{\r\n        width: 322px;\r\n        margin-left: 3px;\r\n    }\r\n     .live_img img{\r\n         width: 322px;\r\n         margin-left: 6px;\r\n         /* float: right; */\r\n     }\r\n   \r\n    .input-text{\r\n        margin-top:15px;\r\n        margin-left:15px;\r\n        width: 308px;\r\n        float: left;\r\n    }\r\n    .register_button{\r\n        /* width: 355px; */\r\n        width: 326px;\r\n        margin-top:0px;\r\n        height: 130px;\r\n        margin-left:0px;\r\n        float: unset;\r\n    }\r\n    .deposit_button{\r\n        height: 150px;\r\n        width: 150px;\r\n        margin-left:0px;\r\n        float: unset;\r\n        position: absolute;\r\n        margin-top: 0px;\r\n    }\r\n    .withdrow_button{\r\n        height: 150px;\r\n        width: 150px;\r\n        margin-left:0px;\r\n        float: unset;\r\n        position: absolute;\r\n        margin-top: 0px;\r\n        right: 2px;\r\n    }\r\n\r\n    .container{\r\n        max-width: 1050px;\r\n    }\r\n    .home_slide{\r\n        padding-left:30px;\r\n        padding-right: 30px;\r\n        /* height: 430px; */\r\n    }\r\n    .contentHeader{\r\n        margin-top:0px;\r\n    }\r\n    .text_description_green2{\r\n        margin-top:30px;\r\n        font-size: 2.5em;\r\n    }\r\n}\r\n@media screen and (min-width: 1400px) {\r\n    .home_slide{\r\n        /* height: 430px; */\r\n    }\r\n}\r\n@media screen and (min-width: 1600px) {\r\n    .home_slide{\r\n        border-left: 3px solid #1D1D1D;\r\n        border-right: 3px solid #1D1D1D;\r\n        border-bottom: 3px solid #1D1D1D;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGtEQUFrRDtJQUNsRCwwQkFBMEI7SUFDMUIsWUFBWTtJQUNaLDRCQUE0QjtJQUM1QixzQkFBc0I7QUFDMUI7QUFFQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQiw2QkFBNkI7SUFDN0IsZUFBZTtJQUNmLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixVQUFVO0FBQ2Q7QUFDQTtJQUNJLFNBQVM7QUFDYjtBQUNBO0lBQ0ksd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7O0FBRXBCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLDhEQUE4RDtJQUM5RCxXQUFXO0lBQ1gsYUFBYTtJQUNiLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksMkRBQTJEO0lBQzNELDRCQUE0QjtJQUM1QixhQUFhO0lBQ2IsWUFBWTtJQUNaLDBCQUEwQjtJQUMxQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1osV0FBVztJQUNYLFdBQVc7QUFDZjtBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsV0FBVztBQUNmO0FBQ0E7SUFDSSx1REFBdUQ7SUFDdkQsNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixXQUFXO0lBQ1gsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSw2REFBNkQ7SUFDN0QsNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixZQUFZO0lBQ1osV0FBVztJQUNYLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsNkJBQTZCO0lBQzdCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7QUFJQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGlCQUFpQixFQUFFO0FBQ3ZCO0FBQ0E7SUFDSSxnQkFBZ0IsRUFBRTtBQUN0QjtBQUNBO0lBQ0ksaUJBQWlCLEVBQUU7QUFDdkI7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCO0FBQ0E7QUFDQSxZQUFZO0FBQ1oseUJBQXlCO0FBQ3pCO0FBQ0E7SUFDSSwyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLDRCQUE0QjtJQUM1QixXQUFXO0lBQ1gsZ0JBQWdCOztBQUVwQjtBQUdBO0lBQ0ksYUFBYTtJQUViLGVBQWU7S0FDZCxtQkFBbUI7S0FDbkIsa0JBQWtCO0lBQ25CLFdBQVc7QUFDZjtBQUVBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixhQUFhOztBQUVqQjtBQUVBO0lBQ0ksa0VBQWtFO0lBQ2xFOytCQUMyQjtJQUMzQixZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmO0FBQ0E7SUFDSSxpRUFBaUU7SUFDakU7aUNBQzZCO0lBQzdCLFlBQVk7SUFDWixZQUFZO0lBQ1osVUFBVTtJQUNWLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjtBQUNBO0lBQ0ksa0VBQWtFO0lBQ2xFO2lDQUM2QjtJQUM3QixZQUFZO0lBQ1osWUFBWTtJQUNaLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjtBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixnQ0FBZ0M7QUFDcEM7QUFDQTtJQUNJLFdBQVc7SUFDWCx3QkFBd0I7SUFDeEIsaUJBQWlCO0lBQ2pCLGFBQWE7QUFDakI7QUFDQTtJQUNJLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsV0FBVztBQUNmO0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtDQUN0QjtBQUNBO0lBQ0csV0FBVztDQUNkO0FBRUQ7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSw2QkFBNkI7SUFDN0IsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjtBQUNBOztJQUVJLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLFdBQVc7QUFDZjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsV0FBVztBQUNmO0FBQ0E7SUFDSSx3QkFBd0I7QUFDNUI7QUFFQTtJQUNJO1FBQ0ksWUFBWTtRQUNaLFdBQVc7UUFDWCxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxhQUFhO1FBQ2IsWUFBWTtRQUNaLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksYUFBYTtRQUNiLFlBQVk7UUFDWixnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLFlBQVk7UUFDWixlQUFlO0lBQ25CO0lBQ0E7UUFDSSxZQUFZO1FBQ1osZUFBZTtJQUNuQjs7O0FBR0o7QUFFQTtJQUNJO1FBQ0ksWUFBWTtRQUNaLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksK0JBQStCO0lBQ25DO0lBQ0E7UUFDSSwrQkFBK0I7SUFDbkM7SUFDQTtRQUNJLGFBQWE7SUFDakI7QUFDSjtBQUVBO0lBQ0k7UUFDSSxZQUFZO1FBQ1osK0JBQStCO0lBQ25DO0lBQ0E7UUFDSSxZQUFZO1FBQ1osWUFBWTtRQUNaLGVBQWU7UUFDZiwrQkFBK0I7SUFDbkM7SUFDQTtRQUNJLFlBQVk7UUFDWixZQUFZO1FBQ1osZUFBZTtRQUNmLGdDQUFnQztJQUNwQztJQUNBO1FBQ0ksYUFBYTtJQUNqQjtBQUNKO0FBRUE7SUFDSTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFlBQVk7UUFDWixZQUFZO1FBQ1osK0JBQStCO0lBQ25DO0lBQ0E7UUFDSSxZQUFZO1FBQ1osWUFBWTtRQUNaLGdDQUFnQztJQUNwQztJQUNBO1FBQ0ksYUFBYTtJQUNqQjtBQUNKO0FBRUE7SUFDSTtPQUNHLFlBQVk7T0FDWixZQUFZO09BQ1osaUJBQWlCO0lBQ3BCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLFlBQVk7UUFDWixlQUFlO1FBQ2YsK0JBQStCO0lBQ25DO0lBQ0E7UUFDSSxZQUFZO1FBQ1osWUFBWTtRQUNaLGVBQWU7UUFDZixnQ0FBZ0M7SUFDcEM7SUFDQTtRQUNJLGFBQWE7SUFDakI7QUFDSjtBQUVBO0lBQ0k7UUFDSSxhQUFhO1FBQ2IsY0FBYztJQUNsQjtJQUNBO1FBQ0ksZ0JBQWdCO1FBQ2hCLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxzQkFBc0I7UUFDdEIsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxpQkFBaUI7UUFDakIsbUJBQW1CO1FBQ25CLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksYUFBYTtRQUViLGVBQWU7U0FDZCxtQkFBbUI7U0FDbkIsa0JBQWtCO1NBQ2xCLFlBQVk7SUFDakI7SUFDQTtRQUNJLFlBQVk7UUFDWixlQUFlO1FBQ2YsWUFBWTtRQUNaLGVBQWU7UUFDZixZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxZQUFZO1FBQ1osV0FBVztRQUNYLGVBQWU7UUFDZixZQUFZO1FBQ1osa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxZQUFZO1FBQ1osV0FBVztJQUNmO0lBQ0E7UUFDSSxZQUFZO1FBQ1osV0FBVztRQUNYLGdCQUFnQjtRQUNoQixZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLFVBQVU7UUFDVixVQUFVO0lBQ2Q7SUFDQTtRQUNJLFlBQVk7UUFDWixXQUFXO0lBQ2Y7SUFDQTtRQUNJLG9CQUFvQjtRQUNwQixxQkFBcUI7UUFDckIsb0JBQW9CO0lBQ3hCO0lBQ0E7UUFDSSxvQkFBb0I7UUFDcEIscUJBQXFCO1FBQ3JCLFlBQVk7UUFDWixhQUFhO1FBQ2Isb0JBQW9CO0lBQ3hCO0FBQ0o7QUFFQTtJQUNJO1FBQ0ksWUFBWTtRQUNaLDJCQUEyQjtRQUMzQixnQkFBZ0I7UUFDaEIsZ0JBQWdCO1FBQ2hCLGdCQUFnQjtRQUNoQixnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLFdBQVc7UUFDWCxZQUFZO1FBQ1osZUFBZTtRQUNmLGdCQUFnQjs7SUFFcEI7SUFDQTtRQUNJLHlCQUF5QjtJQUM3QjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLHFCQUFxQjtRQUNyQixpQkFBaUI7SUFDckI7OztJQUdBO1FBQ0ksWUFBWTtRQUNaLFlBQVk7SUFDaEI7SUFDQTtRQUNJLHlCQUF5QjtRQUN6QixXQUFXO1FBQ1gsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLGdCQUFnQjtRQUNoQixlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLFdBQVc7UUFDWCxZQUFZO1FBQ1osZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsWUFBWTtRQUNaLFdBQVc7SUFDZjs7O0lBR0E7UUFDSSxzQkFBc0I7UUFDdEIsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLGNBQWM7UUFDZCxZQUFZO1FBQ1osZUFBZTtRQUNmLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFlBQVk7UUFDWixZQUFZO1FBQ1osZUFBZTtRQUNmLFlBQVk7UUFDWixrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFlBQVk7UUFDWixZQUFZO1FBQ1osZUFBZTtRQUNmLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsV0FBVztRQUNYLFdBQVc7SUFDZjtJQUNBO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksb0JBQW9CO1FBQ3BCLHFCQUFxQjtRQUNyQixvQkFBb0I7SUFDeEI7SUFDQTtRQUNJLG9CQUFvQjtRQUNwQixxQkFBcUI7UUFDckIsWUFBWTtRQUNaLGFBQWE7UUFDYixvQkFBb0I7SUFDeEI7QUFDSjtBQUNBO0lBQ0k7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsWUFBWTtRQUNaLFdBQVc7SUFDZjs7Ozs7SUFLQTtRQUNJLFlBQVk7UUFDWixjQUFjO1FBQ2QsYUFBYTtRQUNiLGVBQWU7UUFDZixZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxZQUFZO1FBQ1osWUFBWTtRQUNaLGVBQWU7UUFDZixZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLGVBQWU7SUFDbkI7SUFDQTtRQUNJLFlBQVk7UUFDWixZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxZQUFZO1FBQ1osWUFBWTtRQUNaLGVBQWU7UUFDZixZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLGVBQWU7UUFDZixXQUFXO0lBQ2Y7SUFDQTtRQUNJLFlBQVk7UUFDWixZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSjtBQUVBO0lBQ0k7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksWUFBWTtRQUNaLGNBQWM7UUFDZCxhQUFhO1FBQ2IsZUFBZTtRQUNmLFlBQVk7SUFDaEI7SUFDQTtRQUNJLGFBQWE7UUFDYixZQUFZO1FBQ1osZUFBZTtRQUNmLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsZUFBZTtJQUNuQjtJQUNBO1FBQ0ksYUFBYTtRQUNiLFlBQVk7UUFDWixlQUFlO1FBQ2YsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2YsV0FBVztJQUNmOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksYUFBYTtRQUViLGVBQWU7U0FDZCxtQkFBbUI7U0FDbkIsa0JBQWtCO1NBQ2xCLFlBQVk7SUFDakI7SUFDQTtRQUNJLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsb0JBQW9CO1FBQ3BCLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO01BQ0UsY0FBYztJQUNoQjtJQUNBO1FBQ0kseUJBQXlCO0lBQzdCO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsZ0JBQWdCO1FBQ2hCLFlBQVk7SUFDaEI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLFdBQVc7SUFDZjs7R0FFRDtBQUdIO0lBQ0k7UUFDSSxZQUFZO1FBQ1osWUFBWTtJQUNoQjtJQUNBO1FBQ0ksWUFBWTtRQUNaLFlBQVk7SUFDaEI7SUFDQTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFlBQVk7UUFDWixnQkFBZ0I7SUFDcEI7S0FDQztTQUNJLFlBQVk7U0FDWixnQkFBZ0I7U0FDaEIsa0JBQWtCO0tBQ3RCOztJQUVEO1FBQ0ksZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixZQUFZO1FBQ1osV0FBVztJQUNmO0lBQ0E7UUFDSSxrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLGNBQWM7UUFDZCxhQUFhO1FBQ2IsZUFBZTtRQUNmLFlBQVk7SUFDaEI7SUFDQTtRQUNJLGFBQWE7UUFDYixZQUFZO1FBQ1osZUFBZTtRQUNmLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsZUFBZTtJQUNuQjtJQUNBO1FBQ0ksYUFBYTtRQUNiLFlBQVk7UUFDWixlQUFlO1FBQ2YsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2YsVUFBVTtJQUNkOztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxpQkFBaUI7UUFDakIsbUJBQW1CO1FBQ25CLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksZUFBZTtRQUNmLGdCQUFnQjtJQUNwQjtBQUNKO0FBQ0E7SUFDSTtRQUNJLG1CQUFtQjtJQUN2QjtBQUNKO0FBRUE7SUFDSTtRQUNJLDhCQUE4QjtRQUM5QiwrQkFBK0I7UUFDL0IsZ0NBQWdDO0lBQ3BDO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5jb250ZW50QXJlYXtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNEMTAwMDA7XHJcbiAgICBtaW4taGVpZ2h0OiA5NTJweDtcclxuICAgIG1hcmdpbi10b3A6MTBweDtcclxufVxyXG4uY2xpY2stdG8tbmV3c3tcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9uYXYvdGFiMi5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDYwcHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgY29sb3I6YmxhY2sgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNsaWNrLXRvLW5ld3M6aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmFyZWFfYm90dG9tX21lbnV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWluLWhlaWdodDogMzAwcHg7XHJcbiAgICBib3JkZXItdG9wOiAjMzYzNjM2IHNvbGlkIDJweDtcclxuICAgIG1hcmdpbi10b3A6MTVweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbn1cclxuLmhvbWVfc2xpZGV7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBtaW4taGVpZ2h0OiAxNTBweDtcclxuICAgIHRvcDogMTgwcHg7XHJcbn1cclxuLmhvbWVfc2xpZGV7XHJcbiAgICB0b3A6dW5zZXQ7XHJcbn1cclxuLnNsaWRlc2hvdy1jb250YWluZXJ7XHJcbiAgICBoZWlnaHQ6IDIwMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNvbnRlbnRIZWFkZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRDEwMDAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMS42ZW07XHJcbiAgIFxyXG59XHJcbi5yZWdpc3Rlcl9hcmVhe1xyXG4gICAgcGFkZGluZy10b3A6MzBweDtcclxufVxyXG4uY2FsbGNlbnRlcntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvY29udGVudC9jYWxsY2VudGVyLmpwZycpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbn1cclxuLmFyZWFfYmFua3tcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtaW4taGVpZ2h0OiAxNDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNjM2MzY7XHJcbn1cclxuLmltZ19iYW5re1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9jb250ZW50L2JhbmtpbmcucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSBhdXRvO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4uY29udGVudFRleHR7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDEuMWVtO1xyXG4gICAgcGFkZGluZzoxMHB4O1xyXG59XHJcbi5hcmVhX3RleHRfYmFua3tcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLXRvcDozMHB4O1xyXG59XHJcbi50ZXh0X2Jhbmt7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi50ZXh0X2Jhbmsye1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG4uYXJlYV90ZXh0X2Rlc3tcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWluLWhlaWdodDogNDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIHBhZGRpbmc6MCAyMHB4IDAgMjBweDtcclxufVxyXG4uaGVhZGVyMXtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmhlYWRlcjJ7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnRleHRfZGVzY3JpcHRpb257XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4udGV4dF9kZXNjcmlwdGlvbl9ncmVlbntcclxuICAgIG1hcmdpbi10b3A6MTVweDtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBjb2xvcjojNUREODEyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi50ZXh0X2Rlc2NyaXB0aW9uX2dyZWVuMntcclxuICAgIG1hcmdpbi10b3A6NDhweDtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgY29sb3I6IzVERDgxMjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG4uYXJlYV9saW5le1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4ucGhvbmVfaW1hZ2V7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2NvbnRlbnQvdGVsLnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGhlaWdodDogNTlweDtcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG4ubGluZV9pbWFnZXtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvY29udGVudC9hZGRmcmllbmQucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgaGVpZ2h0OiA0M3B4O1xyXG4gICAgd2lkdGg6IDE2OXB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAzOHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OjEwcHg7XHJcbn1cclxuXHJcbi5hcmVhX2JvdHRvbV9tZW51e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xyXG4gICAgYm9yZGVyLXRvcDogIzM2MzYzNiBzb2xpZCAycHg7XHJcbiAgICBtYXJnaW4tdG9wOjE1cHg7XHJcbn1cclxuLnRleHRfYm90dG9tX21lbnV7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDowcHg7XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG59XHJcblxyXG5cclxuXHJcbi5oaWdobGlnaHR7XHJcbiAgICBjb2xvcjojRThDRjAxO1xyXG59XHJcbi5pbmRlbnR7XHJcbiAgICB0ZXh0LWluZGVudDogMzBweDsgbWFyZ2luLXRvcDogMC42M2VtXHJcbn1cclxuLmluZGVudDJ7XHJcbiAgICB0ZXh0LWluZGVudDogMHB4OyBtYXJnaW4tdG9wOiAxZW1cclxufVxyXG4uaW5kZW50M3tcclxuICAgIHRleHQtaW5kZW50OiAzMHB4OyBtYXJnaW4tdG9wOiAwZW1cclxufVxyXG5cclxuLm5ld3NBcmVhe1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIHJlZDsgKi9cclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcGFkZGluZy1sZWZ0OjVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6NXB4O1xyXG59XHJcbi5jYXJkTmV3c3tcclxuaGVpZ2h0OiAxMDAlO1xyXG5ib3JkZXI6IDJweCBzb2xpZCAjRDJBRTcwO1xyXG59XHJcbi5pbWFnZS1uZXdze1xyXG4gICAgaGVpZ2h0OiBjYWxjKCAxMDAlIC0gNzBweCApO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxufVxyXG4udGV4dC1uZXdze1xyXG4gICAgcGFkZGluZzoxMHB4O1xyXG4gICAgYm9yZGVyLXRvcDoxcHggc29saWQgI0QyQUU3MDtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgbWluLWhlaWdodDogNTBweDtcclxuICAgIFxyXG59XHJcblxyXG5cclxuLmhvbWVfc2xpZGUgLnJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLW1zLWZsZXgtd3JhcDogd3JhcDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICBtYXJnaW4tcmlnaHQ6IHVuc2V0O1xyXG4gICAgIG1hcmdpbi1sZWZ0OiB1bnNldDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uc2xpZGVfYW5kX2J0biAuY29sLTh7XHJcbiAgICBmbGV4OnVuc2V0O1xyXG4gICAgbWF4LXdpZHRoOiB1bnNldDtcclxufVxyXG4uc2xpZGVfYW5kX2J0biAuY29sLTR7XHJcbiAgICBmbGV4OnVuc2V0O1xyXG4gICAgbWF4LXdpZHRoOiB1bnNldDtcclxuICAgIGhlaWdodDogMzIwcHg7XHJcbiAgICBcclxufVxyXG5cclxuLnJlZ2lzdGVyX2J1dHRvbntcclxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvY29udGVudC9yZWdpc3Rlci5wbmcnKTsgKi9cclxuICAgIC8qIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47ICovXHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6MTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAvKiBtYXJnaW4tbGVmdDoxMHB4OyAqL1xyXG59XHJcbi5yZWdpc3Rlcl9idXR0b24gaW1ne1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmRlcG9zaXRfYnV0dG9ue1xyXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9jb250ZW50L2RlcG9zaXQucG5nJyk7ICovXHJcbiAgICAvKiBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7ICovXHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogMTQwcHg7XHJcbiAgICBjbGVhcjpsZWZ0O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAvKiBtYXJnaW4tbGVmdDoxMHB4OyAqL1xyXG59XHJcbi5kZXBvc2l0X2J1dHRvbiBpbWd7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogMTQwcHg7XHJcbn1cclxuLndpdGhkcm93X2J1dHRvbntcclxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvY29udGVudC9XSVRIRFJBVy5wbmcnKTsgKi9cclxuICAgIC8qIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTsgKi9cclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHdpZHRoOiAxNDBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcmlnaHQ6MTVweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG4ud2l0aGRyb3dfYnV0dG9uIGltZ3tcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHdpZHRoOiAxNDBweDtcclxufVxyXG5cclxuLnRleHRfaG93dG9wbGF5e1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOjEuNWVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6MTVweDtcclxuICAgIG1hcmdpbi1yaWdodDoxNXB4O1xyXG4gICAgbWFyZ2luLXRvcDoxNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMxRDFEMUQ7XHJcbn1cclxuLmltYWdlX2hvd3RvcGxheXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMHB4IDE1cHggMCAxNXB4O1xyXG4gICAgbWluLWhlaWdodDogMTAwcHg7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5sb2dpbl9hcmVhe1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLmxvZ2luX2J0bntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRDhGMDA7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIHdpZHRoOiAxNDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICBtYXJnaW4tbGVmdDoxNXB4O1xyXG4gICAgbWFyZ2luLXRvcDoxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLmlucHV0LXRleHR7XHJcbiAgICBtYXJnaW4tdG9wOjE1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDoxNXB4O1xyXG4gICAgd2lkdGg6IGNhbGMoIDEwMCUgLSAzMHB4KTtcclxufVxyXG5cclxuLm5vLXBhZGRpbmd7XHJcbiAgICBwYWRkaW5nOnVuc2V0O1xyXG4gICAgZmxleC1ncm93OiB1bnNldDtcclxuICAgIGZsZXgtYmFzaXM6dW5zZXQ7XHJcbn1cclxuXHJcbi5zcG9ydF9idXR0b257XHJcbiAgICBtYXJnaW4tdG9wOjI1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6MTVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbi5zcG9ydF9pbWcgaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5jYXNpbm9faW1nIGltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuIH1cclxuIC5saXZlX2ltZyBpbWd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuIH1cclxuXHJcbi5kaXZNYWluQ29udGVudHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOjE1cHg7XHJcbn1cclxuXHJcbi5oMXRleHR7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgY29sb3I6ICNGM0Q4MDA7XHJcbn1cclxuLmRldGFpbFJpZ2h0e1xyXG4gICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICMxRDFEMUQ7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiBjYWxjKCAxMDAlIC0gMzBweCk7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OjE1cHg7XHJcbn1cclxuLmRldGFpbExlZnR7XHJcblxyXG4gICAgbWFyZ2luLWxlZnQ6MTVweDtcclxuICAgIHdpZHRoOiBjYWxjKCAxMDAlIC0gMzBweCk7XHJcbiAgICBtYXJnaW4tdG9wOjE1cHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG4uaG93dG9wbGF5X2Nhc2lub19pbWcgaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmhvd3RvcGxheV9mb290YmFsbF9pbWcgaW1ne1xyXG4gICAgbWFyZ2luLXRvcDoxNXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmJhbmtpbmdfYXJlYXtcclxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzc1cHgpIHtcclxuICAgIC5yZWdpc3Rlcl9idXR0b257XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIHdpZHRoOjMyNnB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmRlcG9zaXRfYnV0dG9ue1xyXG4gICAgICAgIGhlaWdodDogMTYwcHg7XHJcbiAgICAgICAgd2lkdGg6IDE1M3B4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjEwcHg7XHJcbiAgICB9XHJcbiAgICAud2l0aGRyb3dfYnV0dG9ue1xyXG4gICAgICAgIGhlaWdodDogMTYwcHg7XHJcbiAgICAgICAgd2lkdGg6IDE1M3B4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDowcHg7XHJcbiAgICB9XHJcbiAgICAuaG93dG9wbGF5X2Nhc2lub19pbWcgaW1ne1xyXG4gICAgICAgIHdpZHRoOiAzMzJweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDo1cHg7XHJcbiAgICB9XHJcbiAgICAuaG93dG9wbGF5X2Zvb3RiYWxsX2ltZyBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDMzMnB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjVweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQyNXB4KSB7XHJcbiAgICAucmVnaXN0ZXJfYnV0dG9ue1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBtYXJnaW4tbGVmdDozNXB4O1xyXG4gICAgfVxyXG4gICAgLmhvd3RvcGxheV9jYXNpbm9faW1nIGltZ3tcclxuICAgICAgICBtYXJnaW4tbGVmdDogY2FsYyggNTAlIC0gMTY2cHgpO1xyXG4gICAgfVxyXG4gICAgLmhvd3RvcGxheV9mb290YmFsbF9pbWcgaW1ne1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKCA1MCUgLSAxNjZweCk7XHJcbiAgICB9XHJcbiAgICAuc2xpZGVfYW5kX2J0biAuY29sLTR7XHJcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpIHtcclxuICAgIC5yZWdpc3Rlcl9idXR0b257XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKCA1MCUgLSAxNjBweCk7XHJcbiAgICB9XHJcbiAgICAuZGVwb3NpdF9idXR0b257XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiAyMjBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDowcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoIDUwJSAtIDE3NHB4KTtcclxuICAgIH1cclxuICAgIC53aXRoZHJvd19idXR0b257XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiAyMjBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDowcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBjYWxjKCA1MCUgLSAyNjBweCk7XHJcbiAgICB9XHJcbiAgICAuc2xpZGVfYW5kX2J0biAuY29sLTR7XHJcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTQwcHgpIHtcclxuICAgIC5yZWdpc3Rlcl9idXR0b257XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG4gICAgLmRlcG9zaXRfYnV0dG9ue1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICB3aWR0aDogMTQxcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoIDUwJSAtIDE3NHB4KTtcclxuICAgIH1cclxuICAgIC53aXRoZHJvd19idXR0b257XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiAxNDFweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGNhbGMoIDUwJSAtIDE4NHB4KTtcclxuICAgIH1cclxuICAgIC5zbGlkZV9hbmRfYnRuIC5jb2wtNHtcclxuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1ODBweCkge1xyXG4gICAgLnJlZ2lzdGVyX2J1dHRvbntcclxuICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgIG1hcmdpbi1ib3R0b206MHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZGVwb3NpdF9idXR0b257XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiAxNDFweDtcclxuICAgICAgICBtYXJnaW4tdG9wOjE1cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoIDUwJSAtIDE3NHB4KTtcclxuICAgIH1cclxuICAgIC53aXRoZHJvd19idXR0b257XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiAxNDFweDtcclxuICAgICAgICBtYXJnaW4tdG9wOjE1cHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBjYWxjKCA1MCUgLSAxNTZweCk7XHJcbiAgICB9XHJcbiAgICAuc2xpZGVfYW5kX2J0biAuY29sLTR7XHJcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjQwcHgpIHtcclxuICAgIC5pbWFnZV9ob3d0b3BsYXl7XHJcbiAgICAgICAgcGFkZGluZzp1bnNldDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgIC50ZXh0X2hvd3RvcGxheXtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgfVxyXG4gICAgLmxvZ2luX2FyZWF7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xyXG4gICAgfVxyXG4gICAgLmNvbnRhaW5lcntcclxuICAgICAgICAvKiBtYXgtd2lkdGg6IHVuc2V0OyAqL1xyXG4gICAgICAgIG1heC13aWR0aDogNjQwcHg7XHJcbiAgICB9XHJcbiAgICAuaG9tZV9zbGlkZXtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6MzBweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOjE1cHg7XHJcbiAgICB9XHJcbiAgICAuaG9tZV9zbGlkZSAucm93IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIC1tcy1mbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xyXG4gICAgICAgICBtYXJnaW4tbGVmdDogLTE1cHg7XHJcbiAgICAgICAgIHdpZHRoOiB1bnNldDtcclxuICAgIH1cclxuICAgIC5yZWdpc3Rlcl9idXR0b257XHJcbiAgICAgICAgd2lkdGg6IDE5NHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICBoZWlnaHQ6IDcxcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MHB4O1xyXG4gICAgICAgIGZsb2F0OiB1bnNldDtcclxuICAgIH1cclxuICAgIC5kZXBvc2l0X2J1dHRvbntcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgd2lkdGg6IDk1cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MHB4O1xyXG4gICAgICAgIGZsb2F0OiB1bnNldDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB9XHJcbiAgICAuZGVwb3NpdF9idXR0b24gaW1ne1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICB3aWR0aDogOTVweDtcclxuICAgIH1cclxuICAgIC53aXRoZHJvd19idXR0b257XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiA5NXB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjEwcHg7XHJcbiAgICAgICAgZmxvYXQ6IHVuc2V0O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogOHB4O1xyXG4gICAgICAgIGxlZnQ6IDkwcHg7XHJcbiAgICB9XHJcbiAgICAud2l0aGRyb3dfYnV0dG9uIGltZ3tcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgd2lkdGg6IDk1cHg7XHJcbiAgICB9XHJcbiAgICAuc2xpZGVfYW5kX2J0biAuY29sLTh7XHJcbiAgICAgICAgZmxleDogMCAwIDY2LjY2NjY2NyU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA2Ni42NjY2NjclO1xyXG4gICAgICAgIC8qIHBhZGRpbmc6dW5zZXQ7ICAqL1xyXG4gICAgfVxyXG4gICAgLnNsaWRlX2FuZF9idG4gLmNvbC00e1xyXG4gICAgICAgIGZsZXg6IDAgMCAzMy4zMzMzMzMlO1xyXG4gICAgICAgIG1heC13aWR0aDogMzMuMzMzMzMzJTtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgcGFkZGluZzp1bnNldDtcclxuICAgICAgICAvKiBwYWRkaW5nOnVuc2V0OyAgKi9cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIC5kZXRhaWxSaWdodHtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoIDEwMCUgLSAzNTJweCkgO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOjMwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICB9XHJcbiAgICAuZGV0YWlsTGVmdHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICB3aWR0aDogMzMycHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICAuYmFua2luZ19hcmVhe1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuYmFua2luZ19pbWd7XHJcbiAgICAgICAgbWFyZ2luLXRvcDoxMHB4O1xyXG4gICAgfVxyXG4gICAgLmJhbmtpbmdfaW1nIGltZ3tcclxuICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgfVxyXG4gICAgLmhvd3RvcGxheV9jYXNpbm9faW1ne1xyXG4gICAgICAgIC8qIGZsb2F0OiBsZWZ0OyAqL1xyXG4gICAgfVxyXG4gICAgLmhvd3RvcGxheV9mb290YmFsbF9pbWd7XHJcbiAgICAgICAgLyogbWFyZ2luLXRvcDoxMHB4OyAqL1xyXG4gICAgICAgIC8qIGZsb2F0OiBsZWZ0OyAqL1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAubm8tcGFkZGluZ3tcclxuICAgICAgICBmbGV4LWJhc2lzOjA7XHJcbiAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgfVxyXG4gICAgLmxvZ2luX2J0bntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkQ4RjAwO1xyXG4gICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgIHdpZHRoOiAxNDBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MTVweDtcclxuICAgICAgICBtYXJnaW4tdG9wOjE1cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIGhlaWdodDogMzhweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDo2cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5pbnB1dC10ZXh0e1xyXG4gICAgICAgIG1hcmdpbi10b3A6MTVweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDoxNXB4O1xyXG4gICAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLmNvbnRhaW5lcntcclxuICAgICAgICAvKiBtYXgtd2lkdGg6IHVuc2V0OyAqL1xyXG4gICAgICAgIG1heC13aWR0aDogNzY4cHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAucmVnaXN0ZXJfYnV0dG9ue1xyXG4gICAgICAgIHdpZHRoOiAyMzBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOjBweDtcclxuICAgICAgICBoZWlnaHQ6IDg1cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MHB4O1xyXG4gICAgICAgIGZsb2F0OiB1bnNldDtcclxuICAgIH1cclxuICAgIC5kZXBvc2l0X2J1dHRvbntcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgd2lkdGg6IDExMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjBweDtcclxuICAgICAgICBmbG9hdDogdW5zZXQ7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgfVxyXG4gICAgLmRlcG9zaXRfYnV0dG9uIGltZ3tcclxuICAgICAgICB3aWR0aDogMTEwcHg7XHJcbiAgICB9XHJcbiAgICAud2l0aGRyb3dfYnV0dG9ue1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICB3aWR0aDogMTEwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MHB4O1xyXG4gICAgICAgIGZsb2F0OiB1bnNldDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgbGVmdDogdW5zZXQ7XHJcbiAgICB9XHJcbiAgICAud2l0aGRyb3dfYnV0dG9uIGltZ3tcclxuICAgICAgICB3aWR0aDogMTEwcHg7XHJcbiAgICB9XHJcbiAgICAuc2xpZGVfYW5kX2J0biAuY29sLTh7XHJcbiAgICAgICAgZmxleDogMCAwIDY2LjY2NjY2NyU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA2Ni42NjY2NjclO1xyXG4gICAgICAgIC8qIHBhZGRpbmc6dW5zZXQ7ICAqL1xyXG4gICAgfVxyXG4gICAgLnNsaWRlX2FuZF9idG4gLmNvbC00e1xyXG4gICAgICAgIGZsZXg6IDAgMCAzMy4zMzMzMzMlO1xyXG4gICAgICAgIG1heC13aWR0aDogMzMuMzMzMzMzJTtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgcGFkZGluZzp1bnNldDtcclxuICAgICAgICAvKiBwYWRkaW5nOnVuc2V0OyAgKi9cclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpe1xyXG4gICAgLnRleHRfaG93dG9wbGF5e1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjBweDtcclxuICAgIH1cclxuXHJcbiAgICAubG9naW5fYnRue1xyXG4gICAgICAgIHdpZHRoOiAyNDBweDtcclxuICAgIH1cclxuICAgXHJcbiAgICAuaW5wdXQtdGV4dHtcclxuICAgICAgICBtYXJnaW4tdG9wOjE1cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MTVweDtcclxuICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgLnJlZ2lzdGVyX2J1dHRvbntcclxuICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDowcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMjBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDowcHg7XHJcbiAgICAgICAgZmxvYXQ6IHVuc2V0O1xyXG4gICAgfVxyXG4gICAgLmRlcG9zaXRfYnV0dG9ue1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICB3aWR0aDogMTMwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MHB4O1xyXG4gICAgICAgIGZsb2F0OiB1bnNldDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgfVxyXG4gICAgLmRlcG9zaXRfYnV0dG9uIGltZ3tcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgfVxyXG4gICAgLndpdGhkcm93X2J1dHRvbntcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjBweDtcclxuICAgICAgICBmbG9hdDogdW5zZXQ7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICByaWdodDogMTBweDtcclxuICAgIH1cclxuICAgIC53aXRoZHJvd19idXR0b24gaW1ne1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICB3aWR0aDogMTMwcHg7XHJcbiAgICB9XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDk2MHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpIHtcclxuICAgIC5oMXRleHR7XHJcbiAgICAgICAgZm9udC1zaXplOiAyLjJlbTtcclxuICAgIH1cclxuICAgIC5kZXRhaWxSaWdodHtcclxuICAgICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgfVxyXG4gICAgLnJlZ2lzdGVyX2J1dHRvbntcclxuICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDowcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMjBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDowcHg7XHJcbiAgICAgICAgZmxvYXQ6IHVuc2V0O1xyXG4gICAgfVxyXG4gICAgLmRlcG9zaXRfYnV0dG9ue1xyXG4gICAgICAgIGhlaWdodDogMTMwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjBweDtcclxuICAgICAgICBmbG9hdDogdW5zZXQ7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIH1cclxuICAgIC53aXRoZHJvd19idXR0b257XHJcbiAgICAgICAgaGVpZ2h0OiAxMzBweDtcclxuICAgICAgICB3aWR0aDogMTMwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MHB4O1xyXG4gICAgICAgIGZsb2F0OiB1bnNldDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgIHJpZ2h0OiAxNnB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDk2MHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuaG9tZV9zbGlkZSAucm93IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIC1tcy1mbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xyXG4gICAgICAgICBtYXJnaW4tbGVmdDogLTE1cHg7XHJcbiAgICAgICAgIHdpZHRoOiB1bnNldDtcclxuICAgIH1cclxuICAgIC5zbGlkZV9hbmRfYnRue1xyXG4gICAgICAgIHBhZGRpbmctdG9wOjE1cHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OjE1cHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgIH1cclxuICAgIC5jYWxsY2VudGVye1xyXG4gICAgICAgIGhlaWdodDogMzUwcHg7XHJcbiAgICB9XHJcbiAgICAuY29udGVudEFyZWF7XHJcbiAgICAgIG1hcmdpbi10b3A6MHB4O1xyXG4gICAgfVxyXG4gICAgLmNvbnRlbnRBcmVhe1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNEMTAwMDA7XHJcbiAgICB9XHJcbiAgICAuaW1nX2Jhbmt7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6NDBweDtcclxuICAgICAgICB3aWR0aDogNDI4cHg7XHJcbiAgICB9XHJcbiAgICAuYXJlYV90ZXh0X2Jhbmt7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6ODBweDtcclxuICAgIH1cclxuICAgIC50ZXh0X2Rlc2NyaXB0aW9uX2dyZWVuMntcclxuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgfVxyXG4gICAgLmFyZWFfbGluZXtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTIwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgfVxyXG4gICBcclxuICAgXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gICAgLmRlcG9zaXRfYnV0dG9uIGltZ3tcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgd2lkdGg6IDE1NHB4O1xyXG4gICAgfVxyXG4gICAgLndpdGhkcm93X2J1dHRvbiBpbWd7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiAxNTRweDtcclxuICAgIH1cclxuICAgIC5oMXRleHR7XHJcbiAgICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICB9XHJcbiAgICAuZGV0YWlsUmlnaHR7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjRlbTtcclxuICAgIH1cclxuICAgIC5sb2dpbl9idG57XHJcbiAgICAgICAgd2lkdGg6IDMyMHB4O1xyXG4gICAgfVxyXG4gICAgLnNwb3J0X2ltZyBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDMyMnB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY2FzaW5vX2ltZyBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDMyMnB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzcHg7XHJcbiAgICB9XHJcbiAgICAgLmxpdmVfaW1nIGltZ3tcclxuICAgICAgICAgd2lkdGg6IDMyMnB4O1xyXG4gICAgICAgICBtYXJnaW4tbGVmdDogNnB4O1xyXG4gICAgICAgICAvKiBmbG9hdDogcmlnaHQ7ICovXHJcbiAgICAgfVxyXG4gICBcclxuICAgIC5pbnB1dC10ZXh0e1xyXG4gICAgICAgIG1hcmdpbi10b3A6MTVweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDoxNXB4O1xyXG4gICAgICAgIHdpZHRoOiAzMDhweDtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgIH1cclxuICAgIC5yZWdpc3Rlcl9idXR0b257XHJcbiAgICAgICAgLyogd2lkdGg6IDM1NXB4OyAqL1xyXG4gICAgICAgIHdpZHRoOiAzMjZweDtcclxuICAgICAgICBtYXJnaW4tdG9wOjBweDtcclxuICAgICAgICBoZWlnaHQ6IDEzMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjBweDtcclxuICAgICAgICBmbG9hdDogdW5zZXQ7XHJcbiAgICB9XHJcbiAgICAuZGVwb3NpdF9idXR0b257XHJcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MHB4O1xyXG4gICAgICAgIGZsb2F0OiB1bnNldDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgfVxyXG4gICAgLndpdGhkcm93X2J1dHRvbntcclxuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDowcHg7XHJcbiAgICAgICAgZmxvYXQ6IHVuc2V0O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgcmlnaHQ6IDJweDtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGFpbmVye1xyXG4gICAgICAgIG1heC13aWR0aDogMTA1MHB4O1xyXG4gICAgfVxyXG4gICAgLmhvbWVfc2xpZGV7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OjMwcHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICAgICAgICAvKiBoZWlnaHQ6IDQzMHB4OyAqL1xyXG4gICAgfVxyXG4gICAgLmNvbnRlbnRIZWFkZXJ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDowcHg7XHJcbiAgICB9XHJcbiAgICAudGV4dF9kZXNjcmlwdGlvbl9ncmVlbjJ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDozMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMi41ZW07XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQwMHB4KSB7XHJcbiAgICAuaG9tZV9zbGlkZXtcclxuICAgICAgICAvKiBoZWlnaHQ6IDQzMHB4OyAqL1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjAwcHgpIHtcclxuICAgIC5ob21lX3NsaWRle1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzFEMUQxRDtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAjMUQxRDFEO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMUQxRDFEO1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-slick-carousel class=\"carousel\" \n#slickModal=\"slick-carousel\" \n[config]=\"slideConfig\" >\n    <div ngxSlickItem *ngFor=\"let slide of imageUrls\" class=\"slide\">\n    <img src=\"{{ slide.img }}\" alt=\"\" width=\"100%\">\n    </div>\n</ngx-slick-carousel>\n\n<div  class=\"container\">\n    <div _ngcontent-fqe-c3=\"\" class=\"home_slide slide_and_btn register_area\" style=\"display: block; width: 100%;\">\n        <div _ngcontent-fqe-c3=\"\" class=\"row sport_button\" style=\"margin-top:0px;\">\n            <div _ngcontent-fqe-c3=\"\" class=\"col no-padding\" style=\"overflow: hidden\">\n                <div _ngcontent-fqe-c3=\"\" class=\"sport_img tt_l tt_col_c banner_hover Parent fadeInLeft animated\">\n                    <a _ngcontent-fqe-c3=\"\" routerlink=\"/page/register\" target=\"_self\" ng-reflect-target=\"_self\" ng-reflect-router-link=\"/page/register\" href=\"/page/register\"><img _ngcontent-fqe-c3=\"\" class=\"tt_img_df\" src=\"/assets/images/content/REGISTER-ACCOUNT.png\"><img _ngcontent-fqe-c3=\"\" class=\"tt_img_hover\" src=\"/assets/images/content/REGISTER-ACCOUNT.png\"></a>\n                </div>\n            </div>\n            <div _ngcontent-fqe-c3=\"\" class=\"col no-padding\" style=\"overflow: hidden\">\n                <div _ngcontent-fqe-c3=\"\" class=\"casino_img tt_l tt_col_c banner_hover Parent fadeInLeft animated\">\n                    <a _ngcontent-fqe-c3=\"\" routerlink=\"/page/deposit\" target=\"_self\" ng-reflect-target=\"_self\" ng-reflect-router-link=\"/page/deposit\" href=\"/page/deposit\"><img _ngcontent-fqe-c3=\"\" class=\"tt_img_df\" src=\"/assets/images/content/deposit.png\"><img _ngcontent-fqe-c3=\"\" class=\"tt_img_hover\" src=\"/assets/images/content/deposit.png\"></a>\n                </div>\n            </div>\n            <div _ngcontent-fqe-c3=\"\" class=\"col no-padding\" style=\"overflow: hidden\">\n                <div _ngcontent-fqe-c3=\"\" class=\"live_img tt_l tt_col_c banner_hover Parent fadeInLeft animated\">\n                    <a _ngcontent-fqe-c3=\"\" routerlink=\"/page/withdraw\" target=\"_self\" ng-reflect-target=\"_self\" ng-reflect-router-link=\"/page/withdraw\" href=\"/page/withdraw\"><img _ngcontent-fqe-c3=\"\" class=\"tt_img_df\" src=\"/assets/images/content/WITHDRAW.png\"><img _ngcontent-fqe-c3=\"\" class=\"tt_img_hover\" src=\"/assets/images/content/WITHDRAW.png\"></a>\n                </div>\n            </div>\n        </div>\n        <div _ngcontent-fqe-c3=\"\" class=\"div_image_howtoplay\"><img _ngcontent-fqe-c3=\"\" class=\"image_howtoplay\" src=\"/assets/images/content/step-register.jpg\"></div>\n        <div _ngcontent-fqe-c3=\"\" class=\"row sport_button\">\n            <div _ngcontent-fqe-c3=\"\" class=\"col no-padding\" style=\"overflow: hidden\">\n                <div _ngcontent-fqe-c3=\"\" class=\"sport_img tt_l tt_col_c banner_hover Parent fadeInLeft animated\"><img _ngcontent-fqe-c3=\"\" class=\"tt_img_df\" src=\"assets/images/content/sport.jpg\"><img _ngcontent-fqe-c3=\"\" class=\"tt_img_hover\" src=\"assets/images/content/sport.jpg\"></div>\n            </div>\n            <div _ngcontent-fqe-c3=\"\" class=\"col no-padding\" style=\"overflow: hidden\">\n                <div _ngcontent-fqe-c3=\"\" class=\"casino_img tt_l tt_col_c banner_hover Parent fadeInLeft animated\"><img _ngcontent-fqe-c3=\"\" class=\"tt_img_df\" src=\"assets/images/content/casino.jpg\"><img _ngcontent-fqe-c3=\"\" class=\"tt_img_hover\" src=\"assets/images/content/casino.jpg\"></div>\n            </div>\n            <div _ngcontent-fqe-c3=\"\" class=\"col no-padding\" style=\"overflow: hidden\">\n                <div _ngcontent-fqe-c3=\"\" class=\"live_img tt_l tt_col_c banner_hover Parent fadeInLeft animated\"><img _ngcontent-fqe-c3=\"\" class=\"tt_img_df\" src=\"assets/images/content/livesoccer.jpg\"><img _ngcontent-fqe-c3=\"\" class=\"tt_img_hover\" src=\"assets/images/content/livesoccer.jpg\"></div>\n            </div>\n        </div>\n        <div _ngcontent-fqe-c3=\"\" class=\"divMainContent\">\n            <div _ngcontent-fqe-c3=\"\" class=\"detailRight\">\n                <div _ngcontent-fqe-c3=\"\" class=\"h1text\">สมัครแทงบอลออนไลน์</div> กับ ยูฟ่าเบท รับโปรโมชั่นจัดเต็ม Ufabet เว็บ แทงบอลออนไลน์ และ คาสิโนออนไลน์ ยอดนิยมของคนไทยนั้น ก็เป็นอีกหนึ่งเว็บไซต์ที่ในตอนนี้หลายๆ คนก็พูดถึงกันเป็นจำนวนมากโดยเว็บของเรานั้นก็มีเกมส์คาสิโนต่างๆ บาคาร่าออนไลน์ให้ลูกค้านั้น สามารถที่จะเลือกเล่นได้อย่างเยอะมากเลยนั่นเอง แถมใครที่ได้มาสมัครแทงบอลออนไลน์กับเรานั้นก็รับโบนัสและโปรโมชั่นที่ไม่เหมือนกับเว็บอื่น แน่นอน นอกจากนี้ในเว็บของเรานั้นก็จะมีเกมส์ต่างๆ ให้ลูกค้าได้เลือกเล่นอย่างเยอะมากอีกด้วยทำให้ทุกที่เข้ามาเป็นสมาชิกกับ ยู่ฟ่าเบทนั้นก็ชื่นชอบกันเป็นอย่างมากนั่นเอง ทุกวันนี้นั้นการ แทงบอลออนไลน์หรือเล่น บาคาร่าออนไลน์ ถือเป็นเรื่องที่ปกติไปแล้วนะครับ หลายๆคนก็เริ่มที่จะสนใจให้กับการเล่นการพนันออนไลน์กันเยอะเหมือนกัน เพราะเป็นการเล่นที่สนุก ได้เสี่ยงดวง ได้เงินดี ได้เงินจริง โดยเมื่อก่อนนั้นการการพนันออนไลน์หลายๆคนก็โดนโกงกันเยอะเหมือนกันนะครับทำให้ไม่กล้าที่จะเข้ามา แทงบอลออนไลน์กันนั่นเอง ทุกวันนนี้นั้น ถ้าหากใครได้มาลองเล่นกับเรา ด้วยระบบฝากถอนที่ไวที่สุดในประเทศไทย ทำให้ลูกค้ามั่นใจได้ว่า tsstar88 มีบริการที่ครบวงจร พร้อมคอลเซ็นเตอร์ซัพพอร์ตคุณตลอด 24 ชั่วโมง ค่ำน้ำค่าคอมดีที่สุด สมัครได้แล้ววันนี้ </div>\n            <div _ngcontent-fqe-c3=\"\" class=\"detailLeft\">\n                <div _ngcontent-fqe-c3=\"\" class=\"howtoplay_casino\" style=\"overflow: hidden; position: relative;\">\n                    <div _ngcontent-fqe-c3=\"\" class=\"howtoplay_casino_img tt_l tt_col_c banner_hover Parent fadeInLeft animated\"><img _ngcontent-fqe-c3=\"\" class=\"tt_img_df\" src=\"assets/images/content/casinophone.jpg\"><img _ngcontent-fqe-c3=\"\" class=\"tt_img_hover\" src=\"assets/images/content/casinophone.jpg\"></div>\n                </div>\n                <div _ngcontent-fqe-c3=\"\" class=\"howtoplay_football\" style=\"overflow: hidden; position: relative;\">\n                    <div _ngcontent-fqe-c3=\"\" class=\"howtoplay_football_img tt_l tt_col_c banner_hover Parent fadeInLeft animated\"><img _ngcontent-fqe-c3=\"\" class=\"tt_img_df\" src=\"assets/images/content/soccerphone.jpg\"><img _ngcontent-fqe-c3=\"\" class=\"tt_img_hover\" src=\"assets/images/content/soccerphone.jpg\"></div>\n                </div>\n            </div>\n        </div>\n        <div _ngcontent-fqe-c3=\"\" class=\"row \">\n            <div _ngcontent-fqe-c3=\"\" class=\"col-12 banking_area\">\n                <div _ngcontent-fqe-c3=\"\" class=\"banking_img\"><img _ngcontent-fqe-c3=\"\" src=\"assets/images/content/banking.jpg\"></div>\n            </div>\n            <div _ngcontent-fqe-c3=\"\" class=\"col-12\">\n                <div _ngcontent-fqe-c3=\"\" class=\"area_bottom_menu\">\n                    <div _ngcontent-fqe-c3=\"\" class=\"text_bottom_menu click-to-news\" routerlink=\"/blog\" tabindex=\"0\" ng-reflect-router-link=\"/blog\"> บทความ </div>\n                    <div _ngcontent-fqe-c3=\"\" class=\"area_menu\" style=\"margin-top:15px;\">\n                        <div _ngcontent-fqe-c3=\"\" class=\"row\" style=\"margin-left:0px;    margin-right: 0px;\">\n                            <ng-container *ngFor=\"let todoList of todoLists; index as i; first as isFirst;let l = count\">\n                                <div _ngcontent-fqe-c3=\"\" class=\"col-xl-3 col-md-6 col-sm-12 newsArea\" tabindex=\"0\" [routerLink]=\"['/blog/blog-detail',todoList.adjust_page_title+'-'+todoList.adjust_page_id]\">\n                                    <div _ngcontent-fqe-c3=\"\" class=\"cardNews\">\n                                        <div  class=\"image-news\"  [ngStyle]=\"{backgroundImage:'url(/upload/files/' + todoList.adjust_page_image_name  + '.' + todoList.adjust_page_image_type  + ')'}\">\n                                        <!-- <img src=\"/upload/files/{{todoList.adjust_page_image_name}}.{{todoList.adjust_page_image_type}}\" alt=\"\" style=\"width: 100%;height: 100%;\"> -->\n                                        </div>\n                                        <div _ngcontent-fqe-c3=\"\" class=\"text-news\"> {{todoList.adjust_page_title}} </div>\n                                    </div>\n                                </div>\n                            </ng-container>\n\n                            \n                            \n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_image_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-image-slider */ "../node_modules/ng-image-slider/fesm5/ng-image-slider.js");
/* harmony import */ var src_app_service_todo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/todo.service */ "./src/app/service/todo.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);





// import * as M from '../../../assets/script/materialize/js/materialize.min.js';

var HomeComponent = /** @class */ (function () {
    function HomeComponent(todoServcie, router) {
        this.todoServcie = todoServcie;
        this.router = router;
        this.dp_link = 'https://www.facebook.com/ejan2016/posts/1471403766353958';
        this.text_return = '';
        this.images = [
        // { img: "/assets/images/bg_slide/slide.gif" },  
        //{ img: "/assets/images/bg_slide/slide1.jpg" },
        ];
        this.slideConfig = {
            "slidesToShow": 1,
            "dots": false,
            "infinite": true,
            "autoplay": true,
            "autoplaySpeed": 7000,
            mobileFirst: true,
            centerMode: true,
            arrows: false,
            centerPadding: '0.1px',
        };
        this.height = '';
        this.arrowSize = '30px';
        this.showArrows = false;
        this.disableSwiping = false;
        this.autoPlay = true;
        this.autoPlayInterval = 7000;
        this.stopAutoPlayOnSlide = true;
        this.debug = false;
        this.backgroundSize = '100% 100%';
        this.backgroundPosition = 'top center';
        this.backgroundRepeat = 'no-repeat';
        this.showDots = false;
        this.dotColor = '#FFF';
        this.showCaptions = true;
        this.captionColor = '#FFF';
        this.captionBackground = 'rgba(0, 0, 0, .35)';
        this.lazyLoad = true;
        this.hideOnNoSlides = false;
        this.width = '100%';
        this.fullscreen = false;
        this.imageObject = [{
            // image: '/assets/images/bg_slide/Slide2.jpg',
            // thumbImage: '/assets/images/bg_slide/Slide2.jpg'
            },
        ];
        // imageUrls: (string | IImage)[] = [
        //   { url: '/assets/images/bg_slide/Slide2.jpg' },
        //   // { url: '/assets/images/bg_slide/slide3.jpg' },
        //   // { url: '/assets/images/content/slide3.jpg' }
        // ];
        this.imageUrls = [
            { img: "/assets/images/bg_slide/slide1.jpg" },
            { img: "/assets/images/bg_slide/slide2.jpg" },
        ];
        this.options = {
            fullWidth: true
        };
    }
    HomeComponent.prototype.prevImageClick = function () {
        this.slider.prev();
    };
    HomeComponent.prototype.nextImageClick = function () {
        this.slider.next();
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem("login") == "success") {
            this.login_status_check = '1';
        }
        // var elems = document.querySelectorAll('.carousel');
        // var instances = M.Carousel.init(elems,this.options);
        this.todoServcie.getTodoList(0).subscribe(function (response) {
            // console.log(response);
            _this.todoLists = response;
        });
        this.todoServcie.getSlide().subscribe(function (response) {
            var arraySlide = [];
            for (var i = 0; i < response.length; i++) {
                arraySlide.push({ img: '/upload/files/' + response[i].adjust_page_image_name + '.' + response[i].adjust_page_image_type + '?v=1.2' });
                //arraySlide.push({ url: '/upload/files/'+response[i].adjust_page_image_name+'.'+response[i].adjust_page_image_type+'?v=1.2' });
            }
            //this.imageUrls = arraySlide;
        });
    };
    HomeComponent.prototype.contentLoad = function (data) {
        if (data == 'deposit') {
            jquery__WEBPACK_IMPORTED_MODULE_5__("." + data).addClass('active');
            jquery__WEBPACK_IMPORTED_MODULE_5__(".withdraw").removeClass('active');
            jquery__WEBPACK_IMPORTED_MODULE_5__('.deposit_area').css('display', 'block');
            jquery__WEBPACK_IMPORTED_MODULE_5__('.withdraw_area').css('display', 'none');
        }
        if (data != 'deposit') {
            jquery__WEBPACK_IMPORTED_MODULE_5__(".withdraw").addClass('active');
            jquery__WEBPACK_IMPORTED_MODULE_5__(".deposit").removeClass('active');
            jquery__WEBPACK_IMPORTED_MODULE_5__('.deposit_area').css('display', 'none');
            jquery__WEBPACK_IMPORTED_MODULE_5__('.withdraw_area').css('display', 'block');
        }
    };
    ;
    HomeComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (!validURL(form.value.dp_link)) {
            alert('url ไม่ถูกต้อง');
        }
        else {
            testHoldon('sk-circle', 'กำลังดึงข้อมูล');
            var get_data = "";
            var service = this.todoServcie;
            var image_link = this.image_link;
            var all_likes = this.all_likes;
            var all_comments = this.all_comments;
            var image_post = this.image_post;
            var post_message = this.post_message;
            service.getDataLink(form.value.dp_link).subscribe(function (data) {
                if (data.status_link == false) {
                    alert('ไม่สามารถอ่านข้อมูลโพสที่ต้องการได้ อาจเป็นเพราะโพสที่ระบุไม่ใช่โพสสาธารณะ หรือURLอาจไม่ถูกต้อง');
                    HoldOn.close();
                }
                else {
                    service.saveLink(data[0]['data_text_like_and_share'][0], form.value.dp_link).subscribe(function (data2) {
                        //debugger;
                        _this.dp_id = data2.dp_id;
                        _this.image_link = data2.image_link;
                        _this.all_likes = data2.all_likes;
                        _this.all_comments = data2.all_comments;
                        _this.image_post = data2.image_link;
                        _this.post_message = data2.post_message;
                        _this.name_page = data2.dp_name_page;
                        _this.link_like = data2.dp_link_like;
                        service.getDataLike_from_mysql(_this.dp_id).subscribe(function (data3) {
                            localStorage.setItem('user_like', JSON.stringify(data3));
                            _this.data_user_like = data3;
                        });
                        service.getUserWin(_this.dp_id).subscribe(function (data4) {
                            _this.data_user_win = data4;
                        });
                        HoldOn.close();
                    });
                }
            });
        }
        //  testHoldon('sk-circle','กำลังดึงข้อมูล');
    };
    HomeComponent.prototype.saveLike = function (data, data_id) {
        var _this = this;
        // debugger;
        testHoldon('sk-circle', 'กำลังเซฟข้อมูล');
        var link_like = jquery__WEBPACK_IMPORTED_MODULE_5__(data.currentTarget).attr("id");
        this.todoServcie.getDataLike(link_like, data_id).subscribe(function (data2) {
            var data_id = data2.data_id;
            var string_array_user_like = JSON.stringify(data2.data_user_like);
            _this.todoServcie.saveDataLike(data_id, string_array_user_like).subscribe(function (data3) {
                _this.todoServcie.getDataLike_from_mysql(_this.dp_id).subscribe(function (data3) {
                    localStorage.setItem('user_like', JSON.stringify(data3));
                    _this.data_user_like = data3;
                });
                HoldOn.close();
            });
        });
    };
    HomeComponent.prototype.randomUser = function () {
        console.log(localStorage.getItem('user_like'));
        var objArray = JSON.parse(localStorage.getItem('user_like'));
        var user_win = objArray[Math.floor(Math.random() * objArray.length)];
        console.log(user_win);
        //debugger;
        this.user_win = user_win.user_name;
        this.user_win_id = user_win.user_data;
    };
    HomeComponent.prototype.onSubmitUserWin = function (form) {
        var _this = this;
        // debugger;
        this.todoServcie.saveUserWin(form.value.dp_id, form.value.user_win_id, form.value.user_win).subscribe(function (data) {
            //debugger;
            _this.todoServcie.getUserWin(form.value.dp_id).subscribe(function (data4) {
                _this.data_user_win = data4;
            });
        });
    };
    ;
    HomeComponent.prototype.open_popup = function () {
        // const modalRef = this.modalService.open(NgbdModalContent);
        // modalRef.componentInstance.name = 'World';
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nav'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ng_image_slider__WEBPACK_IMPORTED_MODULE_2__["NgImageSliderComponent"])
    ], HomeComponent.prototype, "slider", void 0);
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_todo_service__WEBPACK_IMPORTED_MODULE_3__["TodoService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/howtoplay/howtoplay.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/howtoplay/howtoplay.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG93dG9wbGF5L2hvd3RvcGxheS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/howtoplay/howtoplay.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/howtoplay/howtoplay.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"headTitle\">\n    ทางเข้าเล่น\n</div>\n<div class=\"contentPageArea\">\n    <div class=\"titleContent\" [innerHTML]=\"todoHowtoplayText | sanitizeHtml\">\n      \n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/howtoplay/howtoplay.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/howtoplay/howtoplay.component.ts ***!
  \*************************************************************/
/*! exports provided: HowtoplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HowtoplayComponent", function() { return HowtoplayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/todo.service */ "./src/app/service/todo.service.ts");



var HowtoplayComponent = /** @class */ (function () {
    function HowtoplayComponent(todoServcie) {
        this.todoServcie = todoServcie;
    }
    HowtoplayComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.todoServcie.getTextHowtoplay().subscribe(function (response) {
            //console.log(response.data);
            _this.todoHowtoplayText = response.data.howtoplay_text_detail;
        });
    };
    HowtoplayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-howtoplay',
            template: __webpack_require__(/*! ./howtoplay.component.html */ "./src/app/components/howtoplay/howtoplay.component.html"),
            styles: [__webpack_require__(/*! ./howtoplay.component.css */ "./src/app/components/howtoplay/howtoplay.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"]])
    ], HowtoplayComponent);
    return HowtoplayComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n/* BASIC */\r\n\r\nhtml {\r\n    background-color: #56baed;\r\n  }\r\n\r\nbody {\r\n    font-family: \"Poppins\", sans-serif;\r\n    height: 100vh;\r\n  }\r\n\r\na {\r\n    color: #92badd;\r\n    display:inline-block;\r\n    text-decoration: none;\r\n    font-weight: 400;\r\n  }\r\n\r\nh2 {\r\n    text-align: center;\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n    text-transform: uppercase;\r\n    display:inline-block;\r\n    margin: 40px 8px 10px 8px; \r\n    color: #cccccc;\r\n  }\r\n\r\n/* STRUCTURE */\r\n\r\n.wrapper {\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column; \r\n    justify-content: center;\r\n    width: 100%;\r\n    min-height: 100%;\r\n    padding: 20px;\r\n  }\r\n\r\n#formContent {\r\n    border-radius: 10px 10px 10px 10px;\r\n    background: #fff;\r\n    padding: 30px;\r\n    width: 90%;\r\n    max-width: 450px;\r\n    position: relative;\r\n    padding: 0px;\r\n    box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);\r\n    text-align: center;\r\n  }\r\n\r\n#formFooter {\r\n    background-color: #f6f6f6;\r\n    border-top: 1px solid #dce8f1;\r\n    padding: 25px;\r\n    text-align: center;\r\n    border-radius: 0 0 10px 10px;\r\n  }\r\n\r\n/* TABS */\r\n\r\nh2.inactive {\r\n    color: #cccccc;\r\n  }\r\n\r\nh2.active {\r\n    color: #0d0d0d;\r\n    border-bottom: 2px solid #5fbae9;\r\n  }\r\n\r\n/* FORM TYPOGRAPHY*/\r\n\r\ninput[type=button], input[type=submit], input[type=reset]  {\r\n    background-color: #56baed;\r\n    border: none;\r\n    color: white;\r\n    padding: 15px 80px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    text-transform: uppercase;\r\n    font-size: 13px;\r\n    box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);\r\n    border-radius: 5px 5px 5px 5px;\r\n    margin: 5px 20px 40px 20px;\r\n    transition: all 0.3s ease-in-out;\r\n  }\r\n\r\ninput[type=button]:hover, input[type=submit]:hover, input[type=reset]:hover  {\r\n    background-color: #39ace7;\r\n  }\r\n\r\ninput[type=button]:active, input[type=submit]:active, input[type=reset]:active  {\r\n    -webkit-transform: scale(0.95);\r\n    transform: scale(0.95);\r\n  }\r\n\r\ninput[type=text] {\r\n    background-color: #f6f6f6;\r\n    border: none;\r\n    color: #0d0d0d;\r\n    padding: 15px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    margin: 5px;\r\n    width: 85%;\r\n    border: 2px solid #f6f6f6;\r\n    transition: all 0.5s ease-in-out;\r\n    border-radius: 5px 5px 5px 5px;\r\n  }\r\n\r\ninput[type=text]:focus {\r\n    background-color: #fff;\r\n    border-bottom: 2px solid #5fbae9;\r\n  }\r\n\r\ninput[type=text]:placeholder {\r\n    color: #cccccc;\r\n  }\r\n\r\n/* ANIMATIONS */\r\n\r\n/* Simple CSS3 Fade-in-down Animation */\r\n\r\n.fadeInDown {\r\n    -webkit-animation-name: fadeInDown;\r\n    animation-name: fadeInDown;\r\n    -webkit-animation-duration: 1s;\r\n    animation-duration: 1s;\r\n    -webkit-animation-fill-mode: both;\r\n    animation-fill-mode: both;\r\n  }\r\n\r\n@-webkit-keyframes fadeInDown {\r\n    0% {\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(0, -100%, 0);\r\n      transform: translate3d(0, -100%, 0);\r\n    }\r\n    100% {\r\n      opacity: 1;\r\n      -webkit-transform: none;\r\n      transform: none;\r\n    }\r\n  }\r\n\r\n@keyframes fadeInDown {\r\n    0% {\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(0, -100%, 0);\r\n      transform: translate3d(0, -100%, 0);\r\n    }\r\n    100% {\r\n      opacity: 1;\r\n      -webkit-transform: none;\r\n      transform: none;\r\n    }\r\n  }\r\n\r\n/* Simple CSS3 Fade-in Animation */\r\n\r\n@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\r\n\r\n@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\r\n\r\n.fadeIn {\r\n    opacity:0;\r\n    -webkit-animation:fadeIn ease-in 1;\r\n    animation:fadeIn ease-in 1;\r\n  \r\n    -webkit-animation-fill-mode:forwards;\r\n    animation-fill-mode:forwards;\r\n  \r\n    -webkit-animation-duration:1s;\r\n    animation-duration:1s;\r\n  }\r\n\r\n.fadeIn.first {\r\n    -webkit-animation-delay: 0.4s;\r\n    animation-delay: 0.4s;\r\n  }\r\n\r\n.fadeIn.second {\r\n    -webkit-animation-delay: 0.6s;\r\n    animation-delay: 0.6s;\r\n  }\r\n\r\n.fadeIn.third {\r\n    -webkit-animation-delay: 0.8s;\r\n    animation-delay: 0.8s;\r\n  }\r\n\r\n.fadeIn.fourth {\r\n    -webkit-animation-delay: 1s;\r\n    animation-delay: 1s;\r\n  }\r\n\r\n/* Simple CSS3 Fade-in Animation */\r\n\r\n.underlineHover:after {\r\n    display: block;\r\n    left: 0;\r\n    bottom: -10px;\r\n    width: 0;\r\n    height: 2px;\r\n    background-color: #56baed;\r\n    content: \"\";\r\n    transition: width 0.2s;\r\n  }\r\n\r\n.underlineHover:hover {\r\n    color: #0d0d0d;\r\n  }\r\n\r\n.underlineHover:hover:after{\r\n    width: 100%;\r\n  }\r\n\r\n/* OTHERS */\r\n\r\n*:focus {\r\n      outline: none;\r\n  }\r\n\r\n#icon {\r\n    width:60%;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxVQUFVOztBQUVWO0lBQ0kseUJBQXlCO0VBQzNCOztBQUVBO0lBQ0Usa0NBQWtDO0lBQ2xDLGFBQWE7RUFDZjs7QUFFQTtJQUNFLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLGdCQUFnQjtFQUNsQjs7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixvQkFBb0I7SUFDcEIseUJBQXlCO0lBQ3pCLGNBQWM7RUFDaEI7O0FBSUEsY0FBYzs7QUFFZDtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGFBQWE7RUFDZjs7QUFFQTtJQUVFLGtDQUFrQztJQUNsQyxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFFWix5Q0FBeUM7SUFDekMsa0JBQWtCO0VBQ3BCOztBQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2Isa0JBQWtCO0lBRWxCLDRCQUE0QjtFQUM5Qjs7QUFJQSxTQUFTOztBQUVUO0lBQ0UsY0FBYztFQUNoQjs7QUFFQTtJQUNFLGNBQWM7SUFDZCxnQ0FBZ0M7RUFDbEM7O0FBSUEsbUJBQW1COztBQUVuQjtJQUNFLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsZUFBZTtJQUVmLDhDQUE4QztJQUU5Qyw4QkFBOEI7SUFDOUIsMEJBQTBCO0lBSzFCLGdDQUFnQztFQUNsQzs7QUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7QUFFQTtJQUVFLDhCQUE4QjtJQUc5QixzQkFBc0I7RUFDeEI7O0FBRUE7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLFdBQVc7SUFDWCxVQUFVO0lBQ1YseUJBQXlCO0lBS3pCLGdDQUFnQztJQUVoQyw4QkFBOEI7RUFDaEM7O0FBRUE7SUFDRSxzQkFBc0I7SUFDdEIsZ0NBQWdDO0VBQ2xDOztBQUVBO0lBQ0UsY0FBYztFQUNoQjs7QUFJQSxlQUFlOztBQUVmLHVDQUF1Qzs7QUFDdkM7SUFDRSxrQ0FBa0M7SUFDbEMsMEJBQTBCO0lBQzFCLDhCQUE4QjtJQUM5QixzQkFBc0I7SUFDdEIsaUNBQWlDO0lBQ2pDLHlCQUF5QjtFQUMzQjs7QUFFQTtJQUNFO01BQ0UsVUFBVTtNQUNWLDJDQUEyQztNQUMzQyxtQ0FBbUM7SUFDckM7SUFDQTtNQUNFLFVBQVU7TUFDVix1QkFBdUI7TUFDdkIsZUFBZTtJQUNqQjtFQUNGOztBQUVBO0lBQ0U7TUFDRSxVQUFVO01BQ1YsMkNBQTJDO01BQzNDLG1DQUFtQztJQUNyQztJQUNBO01BQ0UsVUFBVTtNQUNWLHVCQUF1QjtNQUN2QixlQUFlO0lBQ2pCO0VBQ0Y7O0FBRUEsa0NBQWtDOztBQUNsQyw0QkFBNEIsT0FBTyxTQUFTLEVBQUUsRUFBRSxLQUFLLFNBQVMsRUFBRSxFQUFFOztBQUVsRSxvQkFBb0IsT0FBTyxTQUFTLEVBQUUsRUFBRSxLQUFLLFNBQVMsRUFBRSxFQUFFOztBQUUxRDtJQUNFLFNBQVM7SUFDVCxrQ0FBa0M7SUFFbEMsMEJBQTBCOztJQUUxQixvQ0FBb0M7SUFFcEMsNEJBQTRCOztJQUU1Qiw2QkFBNkI7SUFFN0IscUJBQXFCO0VBQ3ZCOztBQUVBO0lBQ0UsNkJBQTZCO0lBRTdCLHFCQUFxQjtFQUN2Qjs7QUFFQTtJQUNFLDZCQUE2QjtJQUU3QixxQkFBcUI7RUFDdkI7O0FBRUE7SUFDRSw2QkFBNkI7SUFFN0IscUJBQXFCO0VBQ3ZCOztBQUVBO0lBQ0UsMkJBQTJCO0lBRTNCLG1CQUFtQjtFQUNyQjs7QUFFQSxrQ0FBa0M7O0FBQ2xDO0lBQ0UsY0FBYztJQUNkLE9BQU87SUFDUCxhQUFhO0lBQ2IsUUFBUTtJQUNSLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsV0FBVztJQUNYLHNCQUFzQjtFQUN4Qjs7QUFFQTtJQUNFLGNBQWM7RUFDaEI7O0FBRUE7SUFDRSxXQUFXO0VBQ2I7O0FBSUEsV0FBVzs7QUFFWDtNQUNJLGFBQWE7RUFDakI7O0FBRUE7SUFDRSxTQUFTO0VBQ1giLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLyogQkFTSUMgKi9cclxuXHJcbmh0bWwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU2YmFlZDtcclxuICB9XHJcbiAgXHJcbiAgYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gIH1cclxuICBcclxuICBhIHtcclxuICAgIGNvbG9yOiAjOTJiYWRkO1xyXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gIH1cclxuICBcclxuICBoMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiA0MHB4IDhweCAxMHB4IDhweDsgXHJcbiAgICBjb2xvcjogI2NjY2NjYztcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLyogU1RSVUNUVVJFICovXHJcbiAgXHJcbiAgLndyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgI2Zvcm1Db250ZW50IHtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXgtd2lkdGg6IDQ1MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDMwcHggNjBweCAwIHJnYmEoMCwwLDAsMC4zKTtcclxuICAgIGJveC1zaGFkb3c6IDAgMzBweCA2MHB4IDAgcmdiYSgwLDAsMCwwLjMpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAjZm9ybUZvb3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkY2U4ZjE7XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLyogVEFCUyAqL1xyXG4gIFxyXG4gIGgyLmluYWN0aXZlIHtcclxuICAgIGNvbG9yOiAjY2NjY2NjO1xyXG4gIH1cclxuICBcclxuICBoMi5hY3RpdmUge1xyXG4gICAgY29sb3I6ICMwZDBkMGQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzVmYmFlOTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLyogRk9STSBUWVBPR1JBUEhZKi9cclxuICBcclxuICBpbnB1dFt0eXBlPWJ1dHRvbl0sIGlucHV0W3R5cGU9c3VibWl0XSwgaW5wdXRbdHlwZT1yZXNldF0gIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NmJhZWQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDgwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDEwcHggMzBweCAwIHJnYmEoOTUsMTg2LDIzMywwLjQpO1xyXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggMCByZ2JhKDk1LDE4NiwyMzMsMC40KTtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xyXG4gICAgbWFyZ2luOiA1cHggMjBweCA0MHB4IDIwcHg7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9YnV0dG9uXTpob3ZlciwgaW5wdXRbdHlwZT1zdWJtaXRdOmhvdmVyLCBpbnB1dFt0eXBlPXJlc2V0XTpob3ZlciAge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM5YWNlNztcclxuICB9XHJcbiAgXHJcbiAgaW5wdXRbdHlwZT1idXR0b25dOmFjdGl2ZSwgaW5wdXRbdHlwZT1zdWJtaXRdOmFjdGl2ZSwgaW5wdXRbdHlwZT1yZXNldF06YWN0aXZlICB7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgICAtby10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gIH1cclxuICBcclxuICBpbnB1dFt0eXBlPXRleHRdIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogIzBkMGQwZDtcclxuICAgIHBhZGRpbmc6IDE1cHggMzJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmNmY2ZjY7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXRbdHlwZT10ZXh0XTpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM1ZmJhZTk7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9dGV4dF06cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICNjY2NjY2M7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIC8qIEFOSU1BVElPTlMgKi9cclxuICBcclxuICAvKiBTaW1wbGUgQ1NTMyBGYWRlLWluLWRvd24gQW5pbWF0aW9uICovXHJcbiAgLmZhZGVJbkRvd24ge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluRG93bjtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW5Eb3duO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbiAgfVxyXG4gIFxyXG4gIEAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5Eb3duIHtcclxuICAgIDAlIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBmYWRlSW5Eb3duIHtcclxuICAgIDAlIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLyogU2ltcGxlIENTUzMgRmFkZS1pbiBBbmltYXRpb24gKi9cclxuICBALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6MDsgfSB0byB7IG9wYWNpdHk6MTsgfSB9XHJcbiAgQC1tb3ota2V5ZnJhbWVzIGZhZGVJbiB7IGZyb20geyBvcGFjaXR5OjA7IH0gdG8geyBvcGFjaXR5OjE7IH0gfVxyXG4gIEBrZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6MDsgfSB0byB7IG9wYWNpdHk6MTsgfSB9XHJcbiAgXHJcbiAgLmZhZGVJbiB7XHJcbiAgICBvcGFjaXR5OjA7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjpmYWRlSW4gZWFzZS1pbiAxO1xyXG4gICAgLW1vei1hbmltYXRpb246ZmFkZUluIGVhc2UtaW4gMTtcclxuICAgIGFuaW1hdGlvbjpmYWRlSW4gZWFzZS1pbiAxO1xyXG4gIFxyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOmZvcndhcmRzO1xyXG4gICAgLW1vei1hbmltYXRpb24tZmlsbC1tb2RlOmZvcndhcmRzO1xyXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkcztcclxuICBcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOjFzO1xyXG4gICAgLW1vei1hbmltYXRpb24tZHVyYXRpb246MXM7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246MXM7XHJcbiAgfVxyXG4gIFxyXG4gIC5mYWRlSW4uZmlyc3Qge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuNHM7XHJcbiAgICAtbW96LWFuaW1hdGlvbi1kZWxheTogMC40cztcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMC40cztcclxuICB9XHJcbiAgXHJcbiAgLmZhZGVJbi5zZWNvbmQge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuNnM7XHJcbiAgICAtbW96LWFuaW1hdGlvbi1kZWxheTogMC42cztcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMC42cztcclxuICB9XHJcbiAgXHJcbiAgLmZhZGVJbi50aGlyZCB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC44cztcclxuICAgIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xyXG4gIH1cclxuICBcclxuICAuZmFkZUluLmZvdXJ0aCB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMXM7XHJcbiAgICAtbW96LWFuaW1hdGlvbi1kZWxheTogMXM7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDFzO1xyXG4gIH1cclxuICBcclxuICAvKiBTaW1wbGUgQ1NTMyBGYWRlLWluIEFuaW1hdGlvbiAqL1xyXG4gIC51bmRlcmxpbmVIb3ZlcjphZnRlciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IC0xMHB4O1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NmJhZWQ7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC4ycztcclxuICB9XHJcbiAgXHJcbiAgLnVuZGVybGluZUhvdmVyOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMGQwZDBkO1xyXG4gIH1cclxuICBcclxuICAudW5kZXJsaW5lSG92ZXI6aG92ZXI6YWZ0ZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLyogT1RIRVJTICovXHJcbiAgXHJcbiAgKjpmb2N1cyB7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfSBcclxuICBcclxuICAjaWNvbiB7XHJcbiAgICB3aWR0aDo2MCU7XHJcbiAgfVxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper fadeInDown\">\n  <div id=\"formContent\">\n    <!-- Tabs Titles -->\n\n    <!-- Icon -->\n    <div class=\"fadeIn first\">\n       LOGIN\n    </div>\n\n    <!-- Login Form -->\n    <form (ngSubmit)=\"Validateuser()\">\n      <input type=\"text\" id=\"login\" class=\"fadeIn second\" name=\"login\" placeholder=\"username\">\n      <input type=\"text\" id=\"password\" class=\"fadeIn third\" name=\"login\" placeholder=\"password\">\n      <input type=\"submit\" class=\"fadeIn fourth\" value=\"Log In\">\n    </form>\n\n    <!-- Remind Passowrd -->\n    <div id=\"formFooter\">\n      <a class=\"underlineHover\" href=\"#\">Forgot Password?</a>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: loginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginComponent", function() { return loginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/todo.service */ "./src/app/service/todo.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");




var loginComponent = /** @class */ (function () {
    function loginComponent(router, loginService) {
        this.router = router;
        this.loginService = loginService;
        this.infoMessage = '';
    }
    loginComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem("login") == "success") {
            this.router.navigate(['/home']);
        }
    };
    loginComponent.prototype.Validateuser = function () {
        var _this = this;
        this.loginService.ValidateUser(this.username, this.password).subscribe(function (data) {
            if (data.success == true) {
                // this.router.navigateByUrl('/home');
                _this.loginService.setLoggedIn(true);
                _this.infoMessage = '';
                window.location.reload();
            }
            else {
                _this.infoMessage = 'Login Failed. Please Try Again.';
                _this.router.navigate(['login']);
            }
        });
    };
    loginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_service_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"]])
    ], loginComponent);
    return loginComponent;
}());



/***/ }),

/***/ "./src/app/components/manage_data/manage_data.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/manage_data/manage_data.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n#inner {\r\n    display: table;\r\n    margin: 0 auto;\r\n  }\r\n  \r\n  #outer {\r\n    width:100%\r\n  }\r\n  \r\n  .table{\r\n      width: 320px;\r\n  }\r\n  \r\n  .columns {\r\n\tdisplay: flex;\r\n\tflex-flow: row wrap;\r\n\tjustify-content: center;\r\n\tmargin: 5px 0;\r\n}\r\n  \r\n  .column {\r\n\tflex: 1;\r\n\tborder: 1px solid gray;\r\n\tmargin: 2px;\r\n    padding: 10px;\r\n    min-height: 150px;\r\n    text-align: center;\r\n    position: relative;\r\n\t&:first-child { margin-left: 0; }\r\n\t&:last-child { margin-right: 0; }\r\n\t\r\n}\r\n  \r\n  .btn_event{\r\n    margin-top: 40px;\r\n}\r\n  \r\n  .win_game{\r\n    \r\n}\r\n  \r\n  /* @media screen and (max-width: 980px) {\r\n    .columns .column {\r\n          margin-bottom: 5px;\r\n      flex-basis: 40%;\r\n          &:nth-last-child(2) {\r\n              margin-right: 0;\r\n          }\r\n          &:last-child {\r\n              flex-basis: 100%;\r\n              margin: 0;\r\n          }\r\n      }\r\n  } */\r\n  \r\n  .sidenav {\r\n    height: 100%;\r\n    width: 200px;\r\n    position: relative;\r\n    z-index: 1;\r\n    top: 0;\r\n    left: 0;\r\n    float: left;\r\n    background-color: #111;\r\n    overflow-x: hidden;\r\n    padding-top: 20px;\r\n  }\r\n  \r\n  .sidenav a {\r\n    padding: 6px 6px 6px 32px;\r\n    text-decoration: none;\r\n    font-size: 25px;\r\n    color: white;\r\n    display: block;\r\n  }\r\n  \r\n  .sidenav a:hover {\r\n    color: #f1f1f1;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .main {\r\n    margin-left: 200px; /* Same as the width of the sidenav */\r\n  }\r\n  \r\n  @media screen and (max-height: 450px) {\r\n    .sidenav {padding-top: 15px;}\r\n    .sidenav a {font-size: 18px;}\r\n  }\r\n  \r\n  @media screen and (max-width: 425px) {\r\n      .columns .column {\r\n          flex-basis: 100%;\r\n          margin: 0 0 5px 0;\r\n      }\r\n  }\r\n  \r\n  @media screen and (min-width: 768px) {\r\n    .table{\r\n        width: 620px;\r\n    }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYW5hZ2VfZGF0YS9tYW5hZ2VfZGF0YS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGNBQWM7SUFDZCxjQUFjO0VBQ2hCOztFQUVBO0lBQ0U7RUFDRjs7RUFDQTtNQUNJLFlBQVk7RUFDaEI7O0VBRUY7Q0FDQyxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLHVCQUF1QjtDQUN2QixhQUFhO0FBQ2Q7O0VBRUE7Q0FDQyxPQUFPO0NBQ1Asc0JBQXNCO0NBQ3RCLFdBQVc7SUFDUixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7Q0FDckIsZ0JBQWdCLGNBQWMsRUFBRTtDQUNoQyxlQUFlLGVBQWUsRUFBRTs7QUFFakM7O0VBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0VBQ0E7O0FBRUE7O0VBRUE7Ozs7Ozs7Ozs7OztLQVlLOztFQUdIO0lBQ0UsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsWUFBWTtJQUNaLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGtCQUFrQixFQUFFLHFDQUFxQztFQUMzRDs7RUFFQTtJQUNFLFVBQVUsaUJBQWlCLENBQUM7SUFDNUIsWUFBWSxlQUFlLENBQUM7RUFDOUI7O0VBRUE7TUFDSTtVQUNJLGdCQUFnQjtVQUNoQixpQkFBaUI7TUFDckI7RUFDSjs7RUFFQTtJQUNFO1FBQ0ksWUFBWTtJQUNoQjtFQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tYW5hZ2VfZGF0YS9tYW5hZ2VfZGF0YS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiNpbm5lciB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuICBcclxuICAjb3V0ZXIge1xyXG4gICAgd2lkdGg6MTAwJVxyXG4gIH1cclxuICAudGFibGV7XHJcbiAgICAgIHdpZHRoOiAzMjBweDtcclxuICB9XHJcblxyXG4uY29sdW1ucyB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdG1hcmdpbjogNXB4IDA7XHJcbn1cclxuXHJcbi5jb2x1bW4ge1xyXG5cdGZsZXg6IDE7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgZ3JheTtcclxuXHRtYXJnaW46IDJweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAxNTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHQmOmZpcnN0LWNoaWxkIHsgbWFyZ2luLWxlZnQ6IDA7IH1cclxuXHQmOmxhc3QtY2hpbGQgeyBtYXJnaW4tcmlnaHQ6IDA7IH1cclxuXHRcclxufVxyXG5cclxuLmJ0bl9ldmVudHtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbn1cclxuLndpbl9nYW1le1xyXG4gICAgXHJcbn1cclxuXHJcbi8qIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk4MHB4KSB7XHJcbiAgICAuY29sdW1ucyAuY29sdW1uIHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgZmxleC1iYXNpczogNDAlO1xyXG4gICAgICAgICAgJjpudGgtbGFzdC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICBmbGV4LWJhc2lzOiAxMDAlO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gIH0gKi9cclxuICBcclxuXHJcbiAgLnNpZGVuYXYge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTE7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLnNpZGVuYXYgYSB7XHJcbiAgICBwYWRkaW5nOiA2cHggNnB4IDZweCAzMnB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaWRlbmF2IGE6aG92ZXIge1xyXG4gICAgY29sb3I6ICNmMWYxZjE7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYWluIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMDBweDsgLyogU2FtZSBhcyB0aGUgd2lkdGggb2YgdGhlIHNpZGVuYXYgKi9cclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDQ1MHB4KSB7XHJcbiAgICAuc2lkZW5hdiB7cGFkZGluZy10b3A6IDE1cHg7fVxyXG4gICAgLnNpZGVuYXYgYSB7Zm9udC1zaXplOiAxOHB4O31cclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNXB4KSB7XHJcbiAgICAgIC5jb2x1bW5zIC5jb2x1bW4ge1xyXG4gICAgICAgICAgZmxleC1iYXNpczogMTAwJTtcclxuICAgICAgICAgIG1hcmdpbjogMCAwIDVweCAwO1xyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgLnRhYmxle1xyXG4gICAgICAgIHdpZHRoOiA2MjBweDtcclxuICAgIH1cclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/components/manage_data/manage_data.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/manage_data/manage_data.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row min-vh-100\"> \n      <aside class=\"col-12 col-md-2 p-0 bg-dark\">\n          <nav class=\"navbar navbar-expand navbar-dark bg-dark flex-md-column flex-row align-items-start py-2\">\n              <div class=\"collapse navbar-collapse\">\n                  <ul class=\"flex-md-column flex-row navbar-nav w-100 justify-content-between\">\n                      <li class=\"nav-item\">\n                          <a class=\"nav-link pl-0 text-nowrap\"  routerLink=\"/manage_data/activity\"><i class=\"fa fa-bullseye fa-fw\"></i> <span class=\"font-weight-bold\">กิจกรรม</span></a>\n                      </li>\n                      <li class=\"nav-item\">\n                          <a class=\"nav-link pl-0\"  routerLink=\"/manage_data/setting\"><i class=\"fa fa-heart-o fa-fw\"></i> <span class=\"d-none d-md-inline\">ตั้งค่า</span></a>\n                      </li>\n                  </ul>\n              </div>\n          </nav>\n      </aside>\n        \n      <main class=\"col bg-faded py-3\" style=\"background: #ccc;\">\n\n          <ng-container *ngIf=\"id=='activity'||id==''||id==null\">\n              <section class=\"columns\">\n                  <div class=\"column\">\n                      <h2 style=\"text-align: center;\">สุ่มรายชื่อ</h2>\n                      <div class=\" btn_event form-check form-check-inline\">\n                        <input class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox1\" value=\"option1\">\n                        <label class=\"form-check-label\" for=\"inlineCheckbox1\">เลือกใช้</label>\n                      </div>\n                    </div>\n                    \n                    <div class=\"column\">\n                      <h2  style=\"text-align: center;\">ลำดับ</h2>\n                      <div class=\" btn_event form-check form-check-inline\">\n                        <input class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox1\" value=\"option1\">\n                        <label class=\"form-check-label\" for=\"inlineCheckbox1\">เลือกใช้</label>\n                      </div>\n                    </div>\n              </section>\n          </ng-container>\n          \n          \n          <ng-container *ngIf=\"id=='setting'\">\n              <section class=\"columns\">\n                  <div class=\"column\">\n                      <div class=\"form-group\">\n                          <label for=\"exampleInputEmail1\">Header</label>\n                          <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Brandname\">\n                          <small id=\"emailHelp\" class=\"form-text text-muted\">....</small>\n                        </div>\n                      <div class=\"custom-file\">\n                        <input type=\"file\" class=\"custom-file-input\" id=\"customFile\">\n                        <label class=\"custom-file-label\" for=\"customFile\">Choose file</label>\n                      </div>\n                      <div class=\"card\">\n                        <div class=\"card-body text-center d-flex justify-content-center align-items-center flex-column\" style=\"width: 500px;\">\n                            <color-sketch (onChange)=\"handleChange($event)\"></color-sketch>\n                        </div>\n                      </div>\n                      <button type=\"button\" class=\"btn_event btn btn-success\">Preview</button>\n                      <br>\n                      <br>\n                      <div class=\"card\" style=\"padding:20px;\">\n                        <div class=\"card-body text-center d-flex justify-content-center align-items-center flex-column\" style=\"text-align: center;border:1px solid black;width: 100%;height: 500px;\" >\n                            PREVIEW\n                        </div>\n                      </div>\n                  </div>\n                  \n              </section>\n          </ng-container>\n          \n\n          \n      </main>\n  </div> \n</div>\n"

/***/ }),

/***/ "./src/app/components/manage_data/manage_data.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/manage_data/manage_data.component.ts ***!
  \*****************************************************************/
/*! exports provided: Manage_dataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Manage_dataComponent", function() { return Manage_dataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/todo.service */ "./src/app/service/todo.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");




var Manage_dataComponent = /** @class */ (function () {
    function Manage_dataComponent(route, todoServcie) {
        this.route = route;
        this.todoServcie = todoServcie;
    }
    Manage_dataComponent.prototype.ngOnInit = function () {
        //call service
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = params['id'];
        });
    };
    Manage_dataComponent.prototype.rederContent = function () {
        alert();
    };
    Manage_dataComponent.prototype.handleChange = function ($event) {
        console.log($event.color);
        // color = {
        //   hex: '#333',
        //   rgb: {
        //     r: 51,
        //     g: 51,
        //     b: 51,
        //     a: 1,
        //   },
        //   hsl: {
        //     h: 0,
        //     s: 0,
        //     l: .20,
        //     a: 1,
        //   },
        // }
    };
    Manage_dataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manage_data',
            template: __webpack_require__(/*! ./manage_data.component.html */ "./src/app/components/manage_data/manage_data.component.html"),
            styles: [__webpack_require__(/*! ./manage_data.component.css */ "./src/app/components/manage_data/manage_data.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], src_app_service_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"]])
    ], Manage_dataComponent);
    return Manage_dataComponent;
}());



/***/ }),

/***/ "./src/app/components/menu/menu.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/menu/menu.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home_menu{\r\n    background-color: #111111;\r\n    height: auto;\r\n    min-height: 400px;\r\n    width: 100%;\r\n    float: left;\r\n}\r\n\r\n.menu_title{\r\n    font-size: 1.4em;\r\n    color:white;\r\n}\r\n\r\n.menu_des{\r\n    color:#AB8847;\r\n}\r\n\r\n.icon_menu_btn{\r\n    cursor: pointer;\r\n}\r\n\r\n.icon_menu_btn:hover{\r\n    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */\r\n    filter: grayscale(100%);\r\n}\r\n\r\n.icon_menu_home{\r\n    width: 150px; height:auto;\r\n}\r\n\r\n.home_menu .container{\r\n    background-color: unset;\r\n    text-align: center;\r\n}\r\n\r\n.text_menu{\r\n    padding-top: 30px;\r\n    color: white;\r\n    font-size: 2em;\r\n}\r\n\r\n.text_menu2{\r\n    clear: left;\r\n    font-size: 2em;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.area_menu{\r\n    width: 100%;\r\n}\r\n\r\n.subMenu{\r\n    flex-direction: row;\r\n    /* display: none; */\r\n    margin-top:15px;\r\n}\r\n\r\n.nav-item-sub{\r\n    /* width: 11.11%; */\r\n    line-height: 1;\r\n}\r\n\r\n.nav-item:hover{\r\n    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */\r\n    filter: grayscale(100%);\r\n    cursor: pointer;\r\n}\r\n\r\n.navbar-nav .nav-link {\r\n    padding-right: 15px;\r\n    padding-left: 15px;\r\n   height: 40px;\r\n   bottom: -5px;\r\n    position: relative;\r\n}\r\n\r\n.nav-item-sub1{\r\n    background-image: url('/assets/images/menu/sport.jpg');\r\n    margin-left: 10px;\r\n    width: 25%;\r\n    height: auto;\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.nav-item-sub2{\r\n    background-image: url('/assets/images/menu/casino.jpg');\r\n    margin-left: 10px;\r\n    width: 25%;\r\n    height: auto;\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.nav-item-sub3{\r\n    background-image: url('/assets/images/menu/game.jpg');\r\n    margin-left: 10px;\r\n    width: 25%;\r\n    height: 220px;\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.nav-item-sub4{\r\n    background-image: url('/assets/images/menu/lotto.jpg');\r\n    margin-left: 10px;\r\n    width: 25%;\r\n    height: auto;\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n@media screen and (min-width:300px) and (max-width:500px) {\r\n    .nav-item-sub1{\r\n        background-image: url('/assets/images/menu/sport.jpg');\r\n        margin-left: 10px;\r\n        width: 25%;\r\n        height: auto;\r\n        background-size: contain;\r\n        background-repeat: no-repeat;\r\n    }\r\n    .nav-item-sub2{\r\n        background-image: url('/assets/images/menu/casino.jpg');\r\n        margin-left: 10px;\r\n        width: 25%;\r\n        height: auto;\r\n        background-size: contain;\r\n        background-repeat: no-repeat;\r\n    }\r\n    .nav-item-sub3{\r\n        background-image: url('/assets/images/menu/game.jpg');\r\n        margin-left: 10px;\r\n        width: 25%;\r\n        height: auto;\r\n        background-size: contain;\r\n        background-repeat: no-repeat;\r\n    }\r\n    .nav-item-sub4{\r\n        background-image: url('/assets/images/menu/lotto.jpg');\r\n        margin-left: 10px;\r\n        width: 25%;\r\n        height: auto;\r\n        background-size: contain;\r\n        background-repeat: no-repeat;\r\n    }\r\n}\r\n\r\n.tab-menu .nav-link {\r\n    text-align: center;\r\n    width: 100%;\r\n    font-size: 14px;\r\n    color: #fff;\r\n    font-family: Kanit;\r\n    padding: 15px 0;\r\n    display: block;\r\n    background: #d42027;\r\n    position: relative;\r\n    margin: 0px;\r\n}\r\n\r\n.nav-item:first-child { \r\n    margin-left:0px;\r\n}\r\n\r\n.nav-pills .nav-item+.nav-item, .nav-tabs .nav-item+.nav-item {\r\n    margin-left: .2rem;\r\n}\r\n\r\n.nav-link {\r\n    color:#fff !important;\r\n    font-size: 12px  !important;\r\n    font-family: Kanit !important;\r\n}\r\n\r\n.hot {\r\n    color: #fff;\r\n    background-color: #d42027;\r\n    display: inline-block;\r\n    font-size: 8px;\r\n    padding: 1px 2px;\r\n    border-radius: 2px;\r\n    position: absolute;\r\n    -webkit-animation: blinker 1s linear infinite;\r\n            animation: blinker 1s linear infinite;\r\n    right: 0;\r\n    top: 25px;\r\n}\r\n\r\n.active-menu\r\n{\r\n    background: white;\r\n}\r\n\r\n.active-menu-text{\r\n    color:black !important;\r\n}\r\n\r\n@media screen and (min-width: 500px) and (max-width:639px) {\r\n    .subMenu{\r\n        height: 90px;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 640px) {\r\n    .subMenu{\r\n        height: 106px;\r\n    }\r\n}\r\n\r\n@media screen and (min-width:768px) and (max-width:900px) {\r\n    .subMenu{\r\n        display: flex;\r\n        height: 140px;\r\n    }\r\n}\r\n\r\n@media screen and (min-width:901px) and (max-width:1023px) {\r\n    .subMenu{\r\n        height: 180px;\r\n    }\r\n}\r\n\r\n@media (min-width: 1024px){\r\n    .subMenu{\r\n        display: flex;\r\n        height: 195px;\r\n    }\r\n}\r\n\r\n@media (min-width: 1100px){\r\n    .subMenu{\r\n        display: flex;\r\n        height: 190px;\r\n    }\r\n}\r\n\r\n@media (min-width: 1200px){\r\n    .subMenu{\r\n        display: flex;\r\n        height: 230px;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 1100px) {\r\n    .icon_menu_home{\r\n        width: 200px; height:auto;\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOztBQUNBO0lBQ0ksYUFBYTtBQUNqQjs7QUFDQTtJQUNJLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSwrQkFBK0IsRUFBRSxxQkFBcUI7SUFDdEQsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksWUFBWSxFQUFFLFdBQVc7QUFDN0I7O0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixjQUFjO0FBQ2xCOztBQUNBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7O0FBR0E7SUFDSSxXQUFXO0FBQ2Y7O0FBS0E7SUFDSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjs7QUFDQTtJQUNJLCtCQUErQixFQUFFLHFCQUFxQjtJQUN0RCx1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjs7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7R0FDbkIsWUFBWTtHQUNaLFlBQVk7SUFDWCxrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxzREFBc0Q7SUFDdEQsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLDRCQUE0QjtBQUNoQzs7QUFDQTtJQUNJLHVEQUF1RDtJQUN2RCxpQkFBaUI7SUFDakIsVUFBVTtJQUNWLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsNEJBQTRCO0FBQ2hDOztBQUNBO0lBQ0kscURBQXFEO0lBQ3JELGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsYUFBYTtJQUNiLHdCQUF3QjtJQUN4Qiw0QkFBNEI7QUFDaEM7O0FBQ0E7SUFDSSxzREFBc0Q7SUFDdEQsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJO1FBQ0ksc0RBQXNEO1FBQ3RELGlCQUFpQjtRQUNqQixVQUFVO1FBQ1YsWUFBWTtRQUNaLHdCQUF3QjtRQUN4Qiw0QkFBNEI7SUFDaEM7SUFDQTtRQUNJLHVEQUF1RDtRQUN2RCxpQkFBaUI7UUFDakIsVUFBVTtRQUNWLFlBQVk7UUFDWix3QkFBd0I7UUFDeEIsNEJBQTRCO0lBQ2hDO0lBQ0E7UUFDSSxxREFBcUQ7UUFDckQsaUJBQWlCO1FBQ2pCLFVBQVU7UUFDVixZQUFZO1FBQ1osd0JBQXdCO1FBQ3hCLDRCQUE0QjtJQUNoQztJQUNBO1FBQ0ksc0RBQXNEO1FBQ3RELGlCQUFpQjtRQUNqQixVQUFVO1FBQ1YsWUFBWTtRQUNaLHdCQUF3QjtRQUN4Qiw0QkFBNEI7SUFDaEM7QUFDSjs7QUFHQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZUFBZTtJQUNmLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsMkJBQTJCO0lBQzNCLDZCQUE2QjtBQUNqQzs7QUFDQTtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQiw2Q0FBcUM7WUFBckMscUNBQXFDO0lBQ3JDLFFBQVE7SUFDUixTQUFTO0FBQ2I7O0FBRUE7O0lBRUksaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUNBO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCO0FBQ0o7O0FBQ0E7SUFDSTtRQUNJLGFBQWE7SUFDakI7QUFDSjs7QUFDQTtJQUNJO1FBQ0ksYUFBYTtRQUNiLGFBQWE7SUFDakI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjtBQUNKOztBQUNBO0lBQ0k7UUFDSSxhQUFhO1FBQ2IsYUFBYTtJQUNqQjtBQUNKOztBQUNBO0lBQ0k7UUFDSSxhQUFhO1FBQ2IsYUFBYTtJQUNqQjtBQUNKOztBQUNBO0lBQ0k7UUFDSSxhQUFhO1FBQ2IsYUFBYTtJQUNqQjtBQUNKOztBQUdBO0lBQ0k7UUFDSSxZQUFZLEVBQUUsV0FBVztJQUM3QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lX21lbnV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExMTExO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWluLWhlaWdodDogNDAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4ubWVudV90aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMS40ZW07XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxufVxyXG4ubWVudV9kZXN7XHJcbiAgICBjb2xvcjojQUI4ODQ3O1xyXG59XHJcbi5pY29uX21lbnVfYnRue1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5pY29uX21lbnVfYnRuOmhvdmVye1xyXG4gICAgLXdlYmtpdC1maWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTsgLyogU2FmYXJpIDYuMCAtIDkuMCAqL1xyXG4gICAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XHJcbn1cclxuXHJcbi5pY29uX21lbnVfaG9tZXtcclxuICAgIHdpZHRoOiAxNTBweDsgaGVpZ2h0OmF1dG87XHJcbn1cclxuLmhvbWVfbWVudSAuY29udGFpbmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50ZXh0X21lbnV7XHJcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG59XHJcbi50ZXh0X21lbnUye1xyXG4gICAgY2xlYXI6IGxlZnQ7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcblxyXG4uYXJlYV9tZW51e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi5zdWJNZW51e1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIC8qIGRpc3BsYXk6IG5vbmU7ICovXHJcbiAgICBtYXJnaW4tdG9wOjE1cHg7XHJcbn1cclxuLm5hdi1pdGVtLXN1YntcclxuICAgIC8qIHdpZHRoOiAxMS4xMSU7ICovXHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxufVxyXG4ubmF2LWl0ZW06aG92ZXJ7XHJcbiAgICAtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKDEwMCUpOyAvKiBTYWZhcmkgNi4wIC0gOS4wICovXHJcbiAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ubmF2YmFyLW5hdiAubmF2LWxpbmsge1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgaGVpZ2h0OiA0MHB4O1xyXG4gICBib3R0b206IC01cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLm5hdi1pdGVtLXN1YjF7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL21lbnUvc3BvcnQuanBnJyk7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcbi5uYXYtaXRlbS1zdWIye1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9tZW51L2Nhc2luby5qcGcnKTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuLm5hdi1pdGVtLXN1YjN7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL21lbnUvZ2FtZS5qcGcnKTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIGhlaWdodDogMjIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcbi5uYXYtaXRlbS1zdWI0e1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9tZW51L2xvdHRvLmpwZycpO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDozMDBweCkgYW5kIChtYXgtd2lkdGg6NTAwcHgpIHtcclxuICAgIC5uYXYtaXRlbS1zdWIxe1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvbWVudS9zcG9ydC5qcGcnKTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICB3aWR0aDogMjUlO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIH1cclxuICAgIC5uYXYtaXRlbS1zdWIye1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvbWVudS9jYXNpbm8uanBnJyk7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgd2lkdGg6IDI1JTtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICB9XHJcbiAgICAubmF2LWl0ZW0tc3ViM3tcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL21lbnUvZ2FtZS5qcGcnKTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICB3aWR0aDogMjUlO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIH1cclxuICAgIC5uYXYtaXRlbS1zdWI0e1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvbWVudS9sb3R0by5qcGcnKTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICB3aWR0aDogMjUlO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi50YWItbWVudSAubmF2LWxpbmsge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtZmFtaWx5OiBLYW5pdDtcclxuICAgIHBhZGRpbmc6IDE1cHggMDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYmFja2dyb3VuZDogI2Q0MjAyNztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG4ubmF2LWl0ZW06Zmlyc3QtY2hpbGQgeyBcclxuICAgIG1hcmdpbi1sZWZ0OjBweDtcclxufVxyXG5cclxuLm5hdi1waWxscyAubmF2LWl0ZW0rLm5hdi1pdGVtLCAubmF2LXRhYnMgLm5hdi1pdGVtKy5uYXYtaXRlbSB7XHJcbiAgICBtYXJnaW4tbGVmdDogLjJyZW07XHJcbn1cclxuXHJcbi5uYXYtbGluayB7XHJcbiAgICBjb2xvcjojZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDEycHggICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LWZhbWlseTogS2FuaXQgIWltcG9ydGFudDtcclxufVxyXG4uaG90IHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q0MjAyNztcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogOHB4O1xyXG4gICAgcGFkZGluZzogMXB4IDJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGFuaW1hdGlvbjogYmxpbmtlciAxcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMjVweDtcclxufVxyXG5cclxuLmFjdGl2ZS1tZW51XHJcbntcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcbi5hY3RpdmUtbWVudS10ZXh0e1xyXG4gICAgY29sb3I6YmxhY2sgIWltcG9ydGFudDtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDBweCkgYW5kIChtYXgtd2lkdGg6NjM5cHgpIHtcclxuICAgIC5zdWJNZW51e1xyXG4gICAgICAgIGhlaWdodDogOTBweDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NDBweCkge1xyXG4gICAgLnN1Yk1lbnV7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDZweDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OHB4KSBhbmQgKG1heC13aWR0aDo5MDBweCkge1xyXG4gICAgLnN1Yk1lbnV7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBoZWlnaHQ6IDE0MHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjkwMXB4KSBhbmQgKG1heC13aWR0aDoxMDIzcHgpIHtcclxuICAgIC5zdWJNZW51e1xyXG4gICAgICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCl7XHJcbiAgICAuc3ViTWVudXtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGhlaWdodDogMTk1cHg7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDExMDBweCl7XHJcbiAgICAuc3ViTWVudXtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGhlaWdodDogMTkwcHg7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCl7XHJcbiAgICAuc3ViTWVudXtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGhlaWdodDogMjMwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMTAwcHgpIHtcclxuICAgIC5pY29uX21lbnVfaG9tZXtcclxuICAgICAgICB3aWR0aDogMjAwcHg7IGhlaWdodDphdXRvO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/menu/menu.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/menu/menu.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div  class=\" navbar-collapse\" >\n    <ul class=\"navbar-nav subMenu\">\n      <li   class=\"nav-item nav-item-sub1  \">\n          <a   class=\"nav-link js-scroll-trigger tab-menu\"  ></a>\n      </li>\n      <li   class=\"nav-item nav-item-sub2  \">\n          <a   class=\"nav-link js-scroll-trigger tab-menu\"  ></a>\n      </li>\n      <li   class=\"nav-item nav-item-sub3  \">\n          <a   class=\"nav-link js-scroll-trigger tab-menu\" ></a>\n      </li>\n      <li   class=\"nav-item nav-item-sub4  \">\n          <a   class=\"nav-link js-scroll-trigger tab-menu\"  ></a>\n      </li>\n    </ul>\n</div> -->\n\n<div class=\"home_menu\">\n    <div class=\"container\"> \n        <div class=\"text_menu\">ยินดีต้อนรับเข้าสู่เว็บ <span class=\"text_gold_menu\">CONNER888.COM</span> คาสิโน กีฬา ออนไลน์</div>\n        <div class=\"text_menu2 text_gold_menu\">ดีที่สุดอันดับ 1 ของคนไทย</div>\n\n        <div class=\"area_menu\">\n            <div class=\"row icon_menu\">\n                <div class=\"col-6 icon_menu_btn\" routerLink=\"/page/register\"  ><img src=\"/assets/images/menu/re1.png\"  class=\"icon_menu_home\" >\n                    <div class=\"menu_title\">สมัครสมาชิก</div>\n                    <div class=\"menu_des\">สมัครง่ายไม่ยุ่งยาก แนะนำใส่ข้อมูลจริง</div>\n                </div>\n                <div class=\"col-6 icon_menu_btn\" routerLink=\"/page/howtoplay\"  ><img src=\"/assets/images/menu/re3.png\"  class=\"icon_menu_home\" >\n                    <div class=\"menu_title\">เข้าเล่นเกมส์</div>\n                    <div class=\"menu_des\">สนุกกับเกมส์/คาสิโน/บอล/มวย/หวย</div>\n                </div>\n            </div>\n            <div class=\"row icon_menu\">\n                    <div class=\"col-6 icon_menu_btn\" routerLink=\"/page/deposit\"  ><img src=\"/assets/images/menu/re2.png\"  class=\"icon_menu_home\" >\n                        <div class=\"menu_title\">ทำรายการฝาก</div>\n                        <div class=\"menu_des\">ทำรายการฝากขั้นต่ำ 100 บาท</div>\n                    </div>\n                    <div class=\"col-6 icon_menu_btn\" routerLink=\"/page/withdraw\"  ><img src=\"/assets/images/menu/re4.png\"  class=\"icon_menu_home\" >\n                        <div class=\"menu_title\">ทำรายการถอน</div>\n                        <div class=\"menu_des\">ทำรายการถอนออกขั้นต่ำ 300 บาท</div>\n                    </div>\n            </div>\n        </div>\n        \n    </div>\n</div>\n<!-- routerLink=\"{{todo.tag_nav}}\" -->"

/***/ }),

/***/ "./src/app/components/menu/menu.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/components/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/components/menu/menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/components/news-detail/news-detail.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/news-detail/news-detail.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tileDetail {\r\n    margin-top: 15px;\r\n    margin-left: 15px;\r\n    margin-right: 15px;\r\n    overflow: hidden;\r\n    height: auto;\r\n    border: 1px solid #D10000;\r\n    background: #D10000;\r\n    color: white;\r\n    padding: 10px;\r\n    font-size: 1.2em;\r\n    clear: left;\r\n}\r\n.titlePage{\r\n    margin-top:15px;\r\n    background-color: #1E1E1E;\r\n    color: white;\r\n    padding:15px 0px 15px 15px;\r\n    font-size: 1.2em;\r\n    margin-left: 15px;\r\n    margin-right: 15px;\r\n}\r\n.navLink{\r\n    margin-top: 15px;\r\n    margin-left: 15px;\r\n    margin-right: 15px;\r\n    overflow: hidden;\r\n    height: auto;\r\n    color: white;\r\n    font-size: 1em;\r\n    clear: left;\r\n    font-weight: 100 !important;\r\n}\r\n.navFirst:hover{\r\n    cursor: pointer;\r\n}\r\n.navFirst{\r\n    float: left;\r\n    margin-right: 5px;\r\n    text-decoration: underline;\r\n}\r\n.contentBotArea{\r\n    float: left;\r\n    width: 100%;\r\n}\r\n.titleContent{\r\n    border-top:1px solid #D2AE70;\r\n    padding-top:10px;\r\n}\r\n.titleContentBot{\r\n    background: #D10000;\r\n    color: white;\r\n    padding: 10px;\r\n    margin-top:10px;\r\n    float: left;\r\n    width: 100%;\r\n}\r\n.titleLeft{\r\n    float: left;\r\n    color: white;\r\n    font-size: 1.6em;\r\n\r\n}\r\n.viewmore{\r\n    float: right;\r\n    margin-top:6px;\r\n    color:#E8CF01;\r\n}\r\n.dataContentBot{\r\n    /* min-height: 500px; */\r\n    float: left;\r\n    width: 100%;\r\n}\r\n.bootCols{\r\n    height:100px;\r\n    margin:0;\r\n    box-sizing:border-box;\r\n    padding:5px;\r\n    border:2px solid black;\r\n    background-color:red;\r\n  }\r\n.row{\r\n      margin-left:0px;\r\n      margin-right: 0px;\r\n  }\r\n.newsArea{\r\n      height: auto;\r\n      margin-top: 0px;\r\n      /* border: 2px solid red; */\r\n      padding: 0px;\r\n      min-height: 300px;\r\n      text-overflow: ellipsis;\r\n      overflow: hidden;\r\n      padding-left:5px;\r\n      padding-right:5px;\r\n  }\r\n.cardNews{\r\n    height: 100%;\r\n    border: 2px solid red;\r\n  }\r\n.image-news{\r\n      height: calc( 100% - 70px );\r\n      background-size: cover;\r\n      background-position: center;\r\n  }\r\n.text-news{\r\n      padding:10px;\r\n      border-top:1px solid red;\r\n      color:white;\r\n      min-height: 50px;\r\n      \r\n  }\r\n.image-news{\r\n      margin-bottom: 15px;\r\n  }\r\n.newsArea:hover {\r\n    cursor: unset !important;\r\n    -webkit-filter: unset!important;\r\n    filter: unset!important;\r\n    }\r\n@media screen and (min-width: 1200px) {\r\n\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uZXdzLWRldGFpbC9uZXdzLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osMEJBQTBCO0lBQzFCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFlBQVk7SUFDWixjQUFjO0lBQ2QsV0FBVztJQUNYLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUVBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUNqQiwwQkFBMEI7QUFDOUI7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osYUFBYTtJQUNiLGVBQWU7SUFDZixXQUFXO0lBQ1gsV0FBVztBQUNmO0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjs7QUFFcEI7QUFDQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7QUFFQTtJQUNJLFlBQVk7SUFDWixRQUFRO0lBQ1IscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsb0JBQW9CO0VBQ3RCO0FBQ0E7TUFDSSxlQUFlO01BQ2YsaUJBQWlCO0VBQ3JCO0FBQ0E7TUFDSSxZQUFZO01BQ1osZUFBZTtNQUNmLDJCQUEyQjtNQUMzQixZQUFZO01BQ1osaUJBQWlCO01BQ2pCLHVCQUF1QjtNQUN2QixnQkFBZ0I7TUFDaEIsZ0JBQWdCO01BQ2hCLGlCQUFpQjtFQUNyQjtBQUVBO0lBQ0UsWUFBWTtJQUNaLHFCQUFxQjtFQUN2QjtBQUNBO01BQ0ksMkJBQTJCO01BQzNCLHNCQUFzQjtNQUN0QiwyQkFBMkI7RUFDL0I7QUFDQTtNQUNJLFlBQVk7TUFDWix3QkFBd0I7TUFDeEIsV0FBVztNQUNYLGdCQUFnQjs7RUFFcEI7QUFDQTtNQUNJLG1CQUFtQjtFQUN2QjtBQUNBO0lBQ0Usd0JBQXdCO0lBQ3hCLCtCQUErQjtJQUMvQix1QkFBdUI7SUFDdkI7QUFFSjs7O0FBR0EiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25ld3MtZGV0YWlsL25ld3MtZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGlsZURldGFpbCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0QxMDAwMDtcclxuICAgIGJhY2tncm91bmQ6ICNEMTAwMDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIGNsZWFyOiBsZWZ0O1xyXG59XHJcbi50aXRsZVBhZ2V7XHJcbiAgICBtYXJnaW4tdG9wOjE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUUxRTFFO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzoxNXB4IDBweCAxNXB4IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbn1cclxuLm5hdkxpbmt7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBjbGVhcjogbGVmdDtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDAgIWltcG9ydGFudDtcclxufVxyXG4ubmF2Rmlyc3Q6aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5uYXZGaXJzdHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLmNvbnRlbnRCb3RBcmVhe1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnRpdGxlQ29udGVudHtcclxuICAgIGJvcmRlci10b3A6MXB4IHNvbGlkICNEMkFFNzA7XHJcbiAgICBwYWRkaW5nLXRvcDoxMHB4O1xyXG59XHJcblxyXG4udGl0bGVDb250ZW50Qm90e1xyXG4gICAgYmFja2dyb3VuZDogI0QxMDAwMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOjEwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udGl0bGVMZWZ0e1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDEuNmVtO1xyXG5cclxufVxyXG4udmlld21vcmV7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tdG9wOjZweDtcclxuICAgIGNvbG9yOiNFOENGMDE7XHJcbn1cclxuLmRhdGFDb250ZW50Qm90e1xyXG4gICAgLyogbWluLWhlaWdodDogNTAwcHg7ICovXHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYm9vdENvbHN7XHJcbiAgICBoZWlnaHQ6MTAwcHg7XHJcbiAgICBtYXJnaW46MDtcclxuICAgIGJveC1zaXppbmc6Ym9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6NXB4O1xyXG4gICAgYm9yZGVyOjJweCBzb2xpZCBibGFjaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmVkO1xyXG4gIH1cclxuICAucm93e1xyXG4gICAgICBtYXJnaW4tbGVmdDowcHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gIH1cclxuICAubmV3c0FyZWF7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAvKiBib3JkZXI6IDJweCBzb2xpZCByZWQ7ICovXHJcbiAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgbWluLWhlaWdodDogMzAwcHg7XHJcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6NXB4O1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OjVweDtcclxuICB9XHJcbiAgXHJcbiAgLmNhcmROZXdze1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xyXG4gIH1cclxuICAuaW1hZ2UtbmV3c3tcclxuICAgICAgaGVpZ2h0OiBjYWxjKCAxMDAlIC0gNzBweCApO1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC50ZXh0LW5ld3N7XHJcbiAgICAgIHBhZGRpbmc6MTBweDtcclxuICAgICAgYm9yZGVyLXRvcDoxcHggc29saWQgcmVkO1xyXG4gICAgICBjb2xvcjp3aGl0ZTtcclxuICAgICAgbWluLWhlaWdodDogNTBweDtcclxuICAgICAgXHJcbiAgfVxyXG4gIC5pbWFnZS1uZXdze1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIH1cclxuICAubmV3c0FyZWE6aG92ZXIge1xyXG4gICAgY3Vyc29yOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgLXdlYmtpdC1maWx0ZXI6IHVuc2V0IWltcG9ydGFudDtcclxuICAgIGZpbHRlcjogdW5zZXQhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcblxyXG4gICAgXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/news-detail/news-detail.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/news-detail/news-detail.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container container_a\">\n  <div class=\"titlePage\">\n      {{adjust_page_title}}\n  </div>\n  <div class=\"contentPageArea\">\n      <div class=\"row\">\n          <div class=\"col\">\n              \n          </div>\n          <div class=\"col-xl-6 col-md-6 col-sm-12 newsArea image-news\" [ngStyle]=\"{backgroundImage:'url(' + adjust_page_image_url  + ')'}\">\n            </div>\n          <div class=\"col\">\n            \n          </div>\n        </div>\n      \n        <div class=\"titleContent\" [innerHTML]=\"adjust_page_description | sanitizeHtml\"></div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/news-detail/news-detail.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/news-detail/news-detail.component.ts ***!
  \*****************************************************************/
/*! exports provided: NewsDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsDetailComponent", function() { return NewsDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_service_todo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/todo.service */ "./src/app/service/todo.service.ts");




var NewsDetailComponent = /** @class */ (function () {
    function NewsDetailComponent(route, todoServcie) {
        this.route = route;
        this.todoServcie = todoServcie;
    }
    NewsDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = params['id'].split("-")[1];
            // this.id =  params['id'];
            _this.todoServcie.getDetailNews(_this.id).subscribe(function (response) {
                _this.adjust_page_title = response[0].adjust_page_title;
                _this.adjust_page_image_url = 'upload/files/' + response[0].adjust_page_image_name + '.' + response[0].adjust_page_image_type;
                _this.adjust_page_description = response[0].adjust_page_description;
                _this.todoNewsDetail = response[0];
            });
        });
    };
    NewsDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-news-detail',
            template: __webpack_require__(/*! ./news-detail.component.html */ "./src/app/components/news-detail/news-detail.component.html"),
            styles: [__webpack_require__(/*! ./news-detail.component.css */ "./src/app/components/news-detail/news-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_service_todo_service__WEBPACK_IMPORTED_MODULE_3__["TodoService"]])
    ], NewsDetailComponent);
    return NewsDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/news/news.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/news/news.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contentBotArea{\r\n    float: left;\r\n    width: 100%;\r\n}\r\n.titlePage{\r\n    margin-top:15px;\r\n    background-color: #1E1E1E;\r\n    color: white;\r\n    padding:15px 0px 15px 15px;\r\n    font-size: 1.2em;\r\n    margin-left: 15px;\r\n    margin-right: 15px;\r\n}\r\n.titleContentBot{\r\n    background: #D10000;\r\n    color: white;\r\n    padding: 10px;\r\n    margin-top:10px;\r\n    float: left;\r\n    width: 100%;\r\n}\r\n.titleLeft{\r\n    float: left;\r\n    color: white;\r\n    font-size: 1.6em;\r\n\r\n}\r\n.viewmore{\r\n    float: right;\r\n    margin-top:6px;\r\n    color:#E8CF01;\r\n}\r\n.dataContentBot{\r\n    /* min-height: 500px; */\r\n    float: left;\r\n    width: 100%;\r\n}\r\n.bootCols{\r\n    height:100px;\r\n    margin:0;\r\n    box-sizing:border-box;\r\n    padding:5px;\r\n    border:2px solid black;\r\n    background-color:red;\r\n  }\r\n.row{\r\n      margin-left:0px;\r\n      margin-right: 0px;\r\n  }\r\n.newsArea{\r\n      height: auto;\r\n      margin-top: 10px;\r\n      /* border: 2px solid red; */\r\n      padding: 0px;\r\n      min-height: 300px;\r\n      text-overflow: ellipsis;\r\n      overflow: hidden;\r\n      padding-left:5px;\r\n      padding-right:5px;\r\n  }\r\n.cardNews{\r\n    height: 100%;\r\n    border: 2px solid #D2AE70;\r\n  }\r\n.image-news{\r\n      height: calc( 100% - 70px );\r\n      background-size: cover;\r\n      background-position: center;\r\n  }\r\n.text-news{\r\n      padding:10px;\r\n      border-top:1px solid #D2AE70;\r\n      color:white;\r\n      min-height: 50px;\r\n      \r\n  }\r\n.pagination{\r\n        margin-top:15px;\r\n        color: white !important;\r\n    }\r\n.ngx-pagination a, .ngx-pagination button {\r\n        color: white !important;\r\n    }\r\n.ngx-pagination a, .ngx-pagination button {\r\n        color: white !important;\r\n    }\r\n@media screen and (min-width: 1200px) {\r\n\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uZXdzL25ld3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLDBCQUEwQjtJQUMxQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0lBQ2IsZUFBZTtJQUNmLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCOztBQUVwQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFdBQVc7QUFDZjtBQUVBO0lBQ0ksWUFBWTtJQUNaLFFBQVE7SUFDUixxQkFBcUI7SUFDckIsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixvQkFBb0I7RUFDdEI7QUFDQTtNQUNJLGVBQWU7TUFDZixpQkFBaUI7RUFDckI7QUFDQTtNQUNJLFlBQVk7TUFDWixnQkFBZ0I7TUFDaEIsMkJBQTJCO01BQzNCLFlBQVk7TUFDWixpQkFBaUI7TUFDakIsdUJBQXVCO01BQ3ZCLGdCQUFnQjtNQUNoQixnQkFBZ0I7TUFDaEIsaUJBQWlCO0VBQ3JCO0FBRUE7SUFDRSxZQUFZO0lBQ1oseUJBQXlCO0VBQzNCO0FBQ0E7TUFDSSwyQkFBMkI7TUFDM0Isc0JBQXNCO01BQ3RCLDJCQUEyQjtFQUMvQjtBQUNBO01BQ0ksWUFBWTtNQUNaLDRCQUE0QjtNQUM1QixXQUFXO01BQ1gsZ0JBQWdCOztFQUVwQjtBQUVFO1FBQ0ksZUFBZTtRQUNmLHVCQUF1QjtJQUMzQjtBQUNBO1FBQ0ksdUJBQXVCO0lBQzNCO0FBQ0E7UUFDSSx1QkFBdUI7SUFDM0I7QUFDSjs7O0FBR0EiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25ld3MvbmV3cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnRCb3RBcmVhe1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4udGl0bGVQYWdle1xyXG4gICAgbWFyZ2luLXRvcDoxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFFMUUxRTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6MTVweCAwcHggMTVweCAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG59XHJcbi50aXRsZUNvbnRlbnRCb3R7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRDEwMDAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbi10b3A6MTBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnRpdGxlTGVmdHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxLjZlbTtcclxuXHJcbn1cclxuLnZpZXdtb3Jle1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXRvcDo2cHg7XHJcbiAgICBjb2xvcjojRThDRjAxO1xyXG59XHJcbi5kYXRhQ29udGVudEJvdHtcclxuICAgIC8qIG1pbi1oZWlnaHQ6IDUwMHB4OyAqL1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmJvb3RDb2xze1xyXG4gICAgaGVpZ2h0OjEwMHB4O1xyXG4gICAgbWFyZ2luOjA7XHJcbiAgICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOjVweDtcclxuICAgIGJvcmRlcjoycHggc29saWQgYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJlZDtcclxuICB9XHJcbiAgLnJvd3tcclxuICAgICAgbWFyZ2luLWxlZnQ6MHB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICB9XHJcbiAgLm5ld3NBcmVhe1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIHJlZDsgKi9cclxuICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICBtaW4taGVpZ2h0OiAzMDBweDtcclxuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIHBhZGRpbmctbGVmdDo1cHg7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6NXB4O1xyXG4gIH1cclxuICBcclxuICAuY2FyZE5ld3N7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjRDJBRTcwO1xyXG4gIH1cclxuICAuaW1hZ2UtbmV3c3tcclxuICAgICAgaGVpZ2h0OiBjYWxjKCAxMDAlIC0gNzBweCApO1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC50ZXh0LW5ld3N7XHJcbiAgICAgIHBhZGRpbmc6MTBweDtcclxuICAgICAgYm9yZGVyLXRvcDoxcHggc29saWQgI0QyQUU3MDtcclxuICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgICAgIFxyXG4gIH1cclxuXHJcbiAgICAucGFnaW5hdGlvbntcclxuICAgICAgICBtYXJnaW4tdG9wOjE1cHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAubmd4LXBhZ2luYXRpb24gYSwgLm5neC1wYWdpbmF0aW9uIGJ1dHRvbiB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAubmd4LXBhZ2luYXRpb24gYSwgLm5neC1wYWdpbmF0aW9uIGJ1dHRvbiB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG5cclxuICAgIFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/news/news.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/news/news.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container container_a\">\n    <div class=\"titlePage\">\n        บทความ\n    </div>\n  <div class=\"contentPageArea\">\n    <div class=\"titleContent\">\n    <div class=\"dataContentBot\">\n      <div class=\"row\">\n          <!-- <div class=\"col-xl-3 col-md-6 col-sm-12 newsArea\" *ngFor=\"let todo of todoList;\" [routerLink]=\"['news-detail',todo.content_title+'-'+todo.content_id]\"> -->\n          <!-- <div class=\"col-xl-3 col-md-6 col-sm-12 newsArea\" *ngFor=\"let todo of todoList | paginate: { itemsPerPage: 8, currentPage: pageNews }\"  [routerLink]=\"['news-detail',todo.content_id]\"> -->\n            <div class=\"col-xl-3 col-md-6 col-sm-12 newsArea\" *ngFor=\"let todo of todoList | paginate: { itemsPerPage: 8, currentPage: pageNews }\"  [routerLink]=\"['/blog/blog-detail',todo.adjust_page_title+'-'+todo.adjust_page_id]\">\n              <div  class=\"cardNews\">\n                <div class=\"image-news\"  [ngStyle]=\"{backgroundImage:'url(/upload/files/' + todo.adjust_page_image_name  + '.' + todo.adjust_page_image_type  + ')'}\" >\n                </div>\n                <div class=\"text-news\">\n                    {{todo.adjust_page_title}}\n                </div>\n              </div>\n          </div>\n          \n      </div>\n      <div class=\"row\">\n          <div class=\"col\">\n          </div>\n          <div class=\"col-xl-4 col-md-6 col-sm-12\">\n            <pagination-controls class=\"pagination\" (pageChange)=\"pageNews = $event\"></pagination-controls>\n          </div>\n          <div class=\"col\">\n            \n          </div>\n        </div>\n      \n    </div>\n  </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/news/news.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/news/news.component.ts ***!
  \***************************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/todo.service */ "./src/app/service/todo.service.ts");



var NewsComponent = /** @class */ (function () {
    function NewsComponent(todoServcie) {
        this.todoServcie = todoServcie;
        this.pageNews = "";
    }
    NewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        //call service
        this.todoServcie.getTodoList(1).subscribe(function (response) {
            // console.log(response);
            _this.todoList = response;
        });
    };
    NewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-news',
            template: __webpack_require__(/*! ./news.component.html */ "./src/app/components/news/news.component.html"),
            styles: [__webpack_require__(/*! ./news.component.css */ "./src/app/components/news/news.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"]])
    ], NewsComponent);
    return NewsComponent;
}());



/***/ }),

/***/ "./src/app/components/page/page.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/page/page.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".titlePage{\r\n    \r\n    color: white;\r\n    font-size: 1.5em;\r\n    position: relative;\r\n    text-align: center;\r\n    font-weight: bolder;\r\n    position: relative;\r\n    z-index: 2;\r\n    margin-top: -40px;\r\n    \r\n}\r\n.page_detailLeft{\r\n    float: left;\r\n    width: 100%;\r\n}\r\n.page_detailRight{\r\n    float: left;\r\n    width: 100%;\r\n}\r\n.page_content{\r\n    margin-top:-45px;\r\n}\r\n.container{\r\n    /* background: rgba(9, 10, 12, 0.77); */\r\n}\r\n.titleContent{\r\n    padding: 5px;\r\n    /* background: rgba(51, 51, 51, 0.92);\r\n    border: 1px solid #363636; */\r\n    margin-top:30px;\r\n}\r\n.header_page{\r\n    \r\n}\r\n.title_page{\r\n    background-image: url(\"/assets/images/content/tabmenu.png\");\r\n    background-position: center center;\r\n    background-size: cover;\r\n    height: 50px;\r\n    text-align: center;\r\n    font-size: 1.5em;\r\n    padding-top:5px;\r\n    \r\n    \r\n}\r\n@media screen and (min-width: 320px) {\r\n    .title_page{\r\n        margin-top: 154px;\r\n    }\r\n}\r\n@media screen and (min-width: 375px) {\r\n    .title_page{\r\n        margin-top: 114px;\r\n    }\r\n}\r\n@media screen and (min-width: 500px) {\r\n    .title_page{\r\n        margin-top: 74px;\r\n    }\r\n}\r\n@media screen and (min-width: 768px) {\r\n    .page_detailLeft{\r\n        float: left;\r\n        width: 50%;\r\n    }\r\n    .page_detailRight{\r\n        float: left;\r\n        width: 50%;\r\n    }\r\n}\r\n@media screen and (min-width: 1000px) {\r\n    .title_page{\r\n        background-image: url(\"/assets/images/content/tabmenu.png\");\r\n        background-position: center center;\r\n        background-size: cover;\r\n        height: 50px;\r\n        text-align: center;\r\n        font-size: 1.5em;\r\n        padding-top:5px;\r\n        margin-top: 0px;\r\n    }\r\n  }\r\n@media screen and (min-width: 1024px) {\r\n    .titleContent{\r\n        padding: 25px;\r\n    }\r\n  }\r\n\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlL3BhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsaUJBQWlCOztBQUVyQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFdBQVc7QUFDZjtBQUNBO0lBQ0ksV0FBVztJQUNYLFdBQVc7QUFDZjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSx1Q0FBdUM7QUFDM0M7QUFDQTtJQUNJLFlBQVk7SUFDWjtnQ0FDNEI7SUFDNUIsZUFBZTtBQUNuQjtBQUNBOztBQUVBO0FBQ0E7SUFDSSwyREFBMkQ7SUFDM0Qsa0NBQWtDO0lBQ2xDLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlOzs7QUFHbkI7QUFDQTtJQUNJO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0o7QUFDQTtJQUNJO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0o7QUFFQTtJQUNJO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0o7QUFFQTtJQUNJO1FBQ0ksV0FBVztRQUNYLFVBQVU7SUFDZDtJQUNBO1FBQ0ksV0FBVztRQUNYLFVBQVU7SUFDZDtBQUNKO0FBRUE7SUFDSTtRQUNJLDJEQUEyRDtRQUMzRCxrQ0FBa0M7UUFDbEMsc0JBQXNCO1FBQ3RCLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLGVBQWU7UUFDZixlQUFlO0lBQ25CO0VBQ0Y7QUFFQTtJQUNFO1FBQ0ksYUFBYTtJQUNqQjtFQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYWdlL3BhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZVBhZ2V7XHJcbiAgICBcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIG1hcmdpbi10b3A6IC00MHB4O1xyXG4gICAgXHJcbn1cclxuLnBhZ2VfZGV0YWlsTGVmdHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnBhZ2VfZGV0YWlsUmlnaHR7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5wYWdlX2NvbnRlbnR7XHJcbiAgICBtYXJnaW4tdG9wOi00NXB4O1xyXG59XHJcbi5jb250YWluZXJ7XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiByZ2JhKDksIDEwLCAxMiwgMC43Nyk7ICovXHJcbn1cclxuLnRpdGxlQ29udGVudHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIC8qIGJhY2tncm91bmQ6IHJnYmEoNTEsIDUxLCA1MSwgMC45Mik7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzYzNjM2OyAqL1xyXG4gICAgbWFyZ2luLXRvcDozMHB4O1xyXG59XHJcbi5oZWFkZXJfcGFnZXtcclxuICAgIFxyXG59XHJcbi50aXRsZV9wYWdle1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvY29udGVudC90YWJtZW51LnBuZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIHBhZGRpbmctdG9wOjVweDtcclxuICAgIFxyXG4gICAgXHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIHtcclxuICAgIC50aXRsZV9wYWdle1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE1NHB4O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM3NXB4KSB7XHJcbiAgICAudGl0bGVfcGFnZXtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMTRweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpIHtcclxuICAgIC50aXRsZV9wYWdle1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDc0cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAucGFnZV9kZXRhaWxMZWZ0e1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICB9XHJcbiAgICAucGFnZV9kZXRhaWxSaWdodHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpIHtcclxuICAgIC50aXRsZV9wYWdle1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL2NvbnRlbnQvdGFibWVudS5wbmdcIik7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgICBwYWRkaW5nLXRvcDo1cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAudGl0bGVDb250ZW50e1xyXG4gICAgICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAiXX0= */"

/***/ }),

/***/ "./src/app/components/page/page.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/page/page.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\" style=\"background: unset;\">\r\n        <div class=\"header_bar\">\r\n                <img src=\"/assets/images/header/header_bar.png\">\r\n        </div>\r\n</div> -->\r\n<!-- <ng-container *ngIf=\"id!='register'&&id!='deposit'&&id!='withdraw'\"> -->\r\n        <div class=\"content_header\" >&nbsp;</div>\r\n        <div class=\"titlePage\">  {{data_title}} </div>\r\n        <div class=\"container page_content\" >\r\n                <div *ngIf=\"id!='contact'\"class=\"contentPageArea\">\r\n                        <div class=\"titleContent\" [innerHTML]=\"data_deatail | sanitizeHtml\"></div>\r\n                </div>\r\n                <div *ngIf=\"id=='contact'\"class=\"contentPageArea\" style=\"border:0px;\">\r\n                        <div *ngIf=\"id=='contact'\" style=\"margin-top:30px;\" [innerHTML]=\"data_deatail | sanitizeHtml\"></div>\r\n                </div>\r\n        </div>\r\n<!-- </ng-container> -->\r\n\r\n<!-- <ng-container *ngIf=\"id=='register'||id=='deposit'||id=='withdraw'\">\r\n        <div style=\"width: 100%;height:105%;\" [innerHTML]=\"data_deatail | sanitizeHtml\"></div>\r\n</ng-container> -->\r\n        \r\n"

/***/ }),

/***/ "./src/app/components/page/page.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/page/page.component.ts ***!
  \***************************************************/
/*! exports provided: PageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageComponent", function() { return PageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_service_todo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/todo.service */ "./src/app/service/todo.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");





var PageComponent = /** @class */ (function () {
    function PageComponent(route, todoServcie) {
        this.route = route;
        this.todoServcie = todoServcie;
        this.data_deatail = "<img src='/assets/images/loading/05.gif'>";
    }
    PageComponent.prototype.intercept = function (req, next) {
        var httpRequest = req.clone({
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Cache-Control': 'no-cache',
                'Pragma': 'no-cache',
                'Expires': 'Sat, 01 Jan 3000 00:00:00 GMT'
            })
        });
        return next.handle(httpRequest);
    };
    PageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            if (_this.value_app != null) {
                _this.id = _this.value_app;
            }
            // this.id =  params['id'];
            _this.todoServcie.getDataPage(_this.id).subscribe(function (response) {
                // this.data_title = response.data.menu_name;
                // this.data_deatail = response.data.menu_detail;
                if (_this.id == 'register' || _this.id == 'deposit' || _this.id == 'withdraw') {
                    $("#content_html").replaceWith(response.data.menu_detail);
                }
                else {
                    _this.data_title = response.data.menu_name;
                    _this.data_deatail = response.data.menu_detail;
                }
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('value_app'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PageComponent.prototype, "value_app", void 0);
    PageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page',
            template: __webpack_require__(/*! ./page.component.html */ "./src/app/components/page/page.component.html"),
            styles: [__webpack_require__(/*! ./page.component.css */ "./src/app/components/page/page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_service_todo_service__WEBPACK_IMPORTED_MODULE_3__["TodoService"]])
    ], PageComponent);
    return PageComponent;
}());



/***/ }),

/***/ "./src/app/components/promotion-detail/promotion-detail.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/promotion-detail/promotion-detail.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tileDetail {\r\n    margin-top: 15px;\r\n    margin-left: 15px;\r\n    margin-right: 15px;\r\n    overflow: hidden;\r\n    height: auto;\r\n    border: 1px solid #D10000;\r\n    background: #D10000;\r\n    color: white;\r\n    padding: 10px;\r\n    font-size: 1.2em;\r\n    clear: left;\r\n}\r\n.container{\r\n    background: rgba(9, 10, 12, 0.77);\r\n}\r\n.titlePromotion{\r\n    background: rgba(55, 57, 59, 0.144);\r\n    margin-bottom: 5px;\r\n}\r\n.contentPageArea{\r\n    background: rgba(51, 51, 51, 0.77);\r\n    margin-left: 30px;\r\n    margin-right: 30px;\r\n    margin-bottom: 30px;\r\n    margin-top:30px ;\r\n}\r\n.bg_color{\r\n    \r\n}\r\n.cycle_red{\r\n    background-color: red;\r\n    border-radius: 50%;\r\n    width: 15px;\r\n    height: 15px;\r\n    margin-right: 5px;\r\n    margin-top: 5px;\r\n    float: left;\r\n}\r\n.titlePage{\r\n    margin-top: -40px;\r\n    color: white;\r\n    font-size: 1.5em;\r\n    position: relative;\r\n    text-align: center;\r\n    font-weight: bolder;\r\n    position: relative;\r\n    z-index: 2;\r\n}\r\n.navLink{\r\n    margin-top: 15px;\r\n    margin-left: 15px;\r\n    margin-right: 15px;\r\n    overflow: hidden;\r\n    height: auto;\r\n    color: white;\r\n    font-size: 1em;\r\n    clear: left;\r\n    font-weight: 100 !important;\r\n}\r\n.img_center{\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: 90%;\r\n}\r\n.navFirst:hover{\r\n    cursor: pointer;\r\n}\r\n.navFirst{\r\n    float: left;\r\n    margin-right: 5px;\r\n    /* text-decoration: underline; */\r\n}\r\n.contentBotArea{\r\n    float: left;\r\n    width: 100%;\r\n}\r\n.titleContent{\r\n    border-top:1px solid #D2AE70;\r\n    padding-top:10px;\r\n}\r\n.titleContentBot{\r\n    background: #D10000;\r\n    color: white;\r\n    padding: 10px;\r\n    margin-top:10px;\r\n    float: left;\r\n    width: 100%;\r\n}\r\n.titleLeft{\r\n    float: left;\r\n    color: white;\r\n    font-size: 1.6em;\r\n\r\n}\r\n.viewmore{\r\n    float: right;\r\n    margin-top:6px;\r\n    color:#E8CF01;\r\n}\r\n.dataContentBot{\r\n    /* min-height: 500px; */\r\n    float: left;\r\n    width: 100%;\r\n}\r\n.bootCols{\r\n    height:100px;\r\n    margin:0;\r\n    box-sizing:border-box;\r\n    padding:5px;\r\n    border:2px solid black;\r\n    background-color:red;\r\n  }\r\n.row{\r\n      margin-left:0px;\r\n      margin-right: 0px;\r\n  }\r\n.newsArea{\r\n      height: auto;\r\n      margin-top: 0px;\r\n      /* border: 2px solid red; */\r\n      padding: 0px;\r\n      min-height: 190px;\r\n      text-overflow: ellipsis;\r\n      overflow: hidden;\r\n      padding-left:5px;\r\n      padding-right:5px;\r\n  }\r\n.cardNews{\r\n    height: 100%;\r\n    border: 2px solid red;\r\n  }\r\n.image-news{\r\n      height: calc( 100% - 70px );\r\n      background-size: cover;\r\n      background-position: center;\r\n  }\r\n.text-news{\r\n      padding:10px;\r\n      border-top:1px solid red;\r\n      color:white;\r\n      min-height: 50px;\r\n      \r\n  }\r\n.image-news{\r\n      margin-bottom: 15px;\r\n  }\r\n.newsArea:hover {\r\n    cursor: unset !important;\r\n    -webkit-filter: unset!important;\r\n    filter: unset!important;\r\n    }\r\n.header_page{\r\n        background-image: url(\"/assets/images/content/bgmenu.jpg\");\r\n        background-position: center center;\r\n        background-size: cover;\r\n        height: 170px;\r\n    }\r\n.title_page{\r\n        background-image: url(\"/assets/images/content/tabmenu.png\");\r\n        background-position: center center;\r\n        background-size: cover;\r\n        height: 50px;\r\n        text-align: center;\r\n        font-size: 1.5em;\r\n        padding-top:5px;\r\n        \r\n    }\r\n@media screen and (min-width: 320px) {\r\n            .title_page{\r\n                margin-top: 154px;\r\n            }\r\n        }\r\n@media screen and (min-width: 375px) {\r\n            .title_page{\r\n                margin-top: 114px;\r\n            }\r\n        }\r\n@media screen and (min-width: 500px) {\r\n            .title_page{\r\n                margin-top: 74px;\r\n            }\r\n        }\r\n@media screen and (min-width: 1000px) {\r\n            .title_page{\r\n                background-image: url(\"/assets/images/content/tabmenu.png\");\r\n                background-position: center center;\r\n                background-size: cover;\r\n                height: 50px;\r\n                text-align: center;\r\n                font-size: 1.5em;\r\n                padding-top:5px;\r\n                margin-top: 0px;\r\n            }\r\n        }\r\n@media screen and (min-width: 1200px) {\r\n\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9tb3Rpb24tZGV0YWlsL3Byb21vdGlvbi1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGlDQUFpQztBQUNyQztBQUNBO0lBQ0ksbUNBQW1DO0lBQ25DLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0NBQWtDO0lBQ2xDLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osWUFBWTtJQUNaLGNBQWM7SUFDZCxXQUFXO0lBQ1gsMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFFQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZ0NBQWdDO0FBQ3BDO0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztBQUNmO0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGFBQWE7SUFDYixlQUFlO0lBQ2YsV0FBVztJQUNYLFdBQVc7QUFDZjtBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7O0FBRXBCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLGFBQWE7QUFDakI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsV0FBVztBQUNmO0FBRUE7SUFDSSxZQUFZO0lBQ1osUUFBUTtJQUNSLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLG9CQUFvQjtFQUN0QjtBQUNBO01BQ0ksZUFBZTtNQUNmLGlCQUFpQjtFQUNyQjtBQUNBO01BQ0ksWUFBWTtNQUNaLGVBQWU7TUFDZiwyQkFBMkI7TUFDM0IsWUFBWTtNQUNaLGlCQUFpQjtNQUNqQix1QkFBdUI7TUFDdkIsZ0JBQWdCO01BQ2hCLGdCQUFnQjtNQUNoQixpQkFBaUI7RUFDckI7QUFFQTtJQUNFLFlBQVk7SUFDWixxQkFBcUI7RUFDdkI7QUFDQTtNQUNJLDJCQUEyQjtNQUMzQixzQkFBc0I7TUFDdEIsMkJBQTJCO0VBQy9CO0FBQ0E7TUFDSSxZQUFZO01BQ1osd0JBQXdCO01BQ3hCLFdBQVc7TUFDWCxnQkFBZ0I7O0VBRXBCO0FBQ0E7TUFDSSxtQkFBbUI7RUFDdkI7QUFDQTtJQUNFLHdCQUF3QjtJQUN4QiwrQkFBK0I7SUFDL0IsdUJBQXVCO0lBQ3ZCO0FBRUE7UUFDSSwwREFBMEQ7UUFDMUQsa0NBQWtDO1FBQ2xDLHNCQUFzQjtRQUN0QixhQUFhO0lBQ2pCO0FBQ0E7UUFDSSwyREFBMkQ7UUFDM0Qsa0NBQWtDO1FBQ2xDLHNCQUFzQjtRQUN0QixZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLGdCQUFnQjtRQUNoQixlQUFlOztJQUVuQjtBQUNJO1lBQ0k7Z0JBQ0ksaUJBQWlCO1lBQ3JCO1FBQ0o7QUFDQTtZQUNJO2dCQUNJLGlCQUFpQjtZQUNyQjtRQUNKO0FBQ0E7WUFDSTtnQkFDSSxnQkFBZ0I7WUFDcEI7UUFDSjtBQUNBO1lBQ0k7Z0JBQ0ksMkRBQTJEO2dCQUMzRCxrQ0FBa0M7Z0JBQ2xDLHNCQUFzQjtnQkFDdEIsWUFBWTtnQkFDWixrQkFBa0I7Z0JBQ2xCLGdCQUFnQjtnQkFDaEIsZUFBZTtnQkFDZixlQUFlO1lBQ25CO1FBQ0o7QUFDUjs7O0FBR0EiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb21vdGlvbi1kZXRhaWwvcHJvbW90aW9uLWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpbGVEZXRhaWwge1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNEMTAwMDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRDEwMDAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICBjbGVhcjogbGVmdDtcclxufVxyXG4uY29udGFpbmVye1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSg5LCAxMCwgMTIsIDAuNzcpO1xyXG59XHJcbi50aXRsZVByb21vdGlvbntcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoNTUsIDU3LCA1OSwgMC4xNDQpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcbi5jb250ZW50UGFnZUFyZWF7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDUxLCA1MSwgNTEsIDAuNzcpO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgbWFyZ2luLXRvcDozMHB4IDtcclxufVxyXG4uYmdfY29sb3J7XHJcbiAgICBcclxufVxyXG4uY3ljbGVfcmVke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IDE1cHg7XHJcbiAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi50aXRsZVBhZ2V7XHJcbiAgICBtYXJnaW4tdG9wOiAtNDBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMjtcclxufVxyXG4ubmF2TGlua3tcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIGNsZWFyOiBsZWZ0O1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMCAhaW1wb3J0YW50O1xyXG59XHJcbi5pbWdfY2VudGVye1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHdpZHRoOiA5MCU7XHJcbn1cclxuLm5hdkZpcnN0OmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubmF2Rmlyc3R7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgLyogdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7ICovXHJcbn1cclxuXHJcbi5jb250ZW50Qm90QXJlYXtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi50aXRsZUNvbnRlbnR7XHJcbiAgICBib3JkZXItdG9wOjFweCBzb2xpZCAjRDJBRTcwO1xyXG4gICAgcGFkZGluZy10b3A6MTBweDtcclxufVxyXG5cclxuLnRpdGxlQ29udGVudEJvdHtcclxuICAgIGJhY2tncm91bmQ6ICNEMTAwMDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDoxMHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnRpdGxlTGVmdHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxLjZlbTtcclxuXHJcbn1cclxuLnZpZXdtb3Jle1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXRvcDo2cHg7XHJcbiAgICBjb2xvcjojRThDRjAxO1xyXG59XHJcbi5kYXRhQ29udGVudEJvdHtcclxuICAgIC8qIG1pbi1oZWlnaHQ6IDUwMHB4OyAqL1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmJvb3RDb2xze1xyXG4gICAgaGVpZ2h0OjEwMHB4O1xyXG4gICAgbWFyZ2luOjA7XHJcbiAgICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOjVweDtcclxuICAgIGJvcmRlcjoycHggc29saWQgYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJlZDtcclxuICB9XHJcbiAgLnJvd3tcclxuICAgICAgbWFyZ2luLWxlZnQ6MHB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICB9XHJcbiAgLm5ld3NBcmVhe1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgLyogYm9yZGVyOiAycHggc29saWQgcmVkOyAqL1xyXG4gICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDE5MHB4O1xyXG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgcGFkZGluZy1sZWZ0OjVweDtcclxuICAgICAgcGFkZGluZy1yaWdodDo1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkTmV3c3tcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcclxuICB9XHJcbiAgLmltYWdlLW5ld3N7XHJcbiAgICAgIGhlaWdodDogY2FsYyggMTAwJSAtIDcwcHggKTtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIH1cclxuICAudGV4dC1uZXdze1xyXG4gICAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICAgIGJvcmRlci10b3A6MXB4IHNvbGlkIHJlZDtcclxuICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgICAgIFxyXG4gIH1cclxuICAuaW1hZ2UtbmV3c3tcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICB9XHJcbiAgLm5ld3NBcmVhOmhvdmVyIHtcclxuICAgIGN1cnNvcjogdW5zZXQgIWltcG9ydGFudDtcclxuICAgIC13ZWJraXQtZmlsdGVyOiB1bnNldCFpbXBvcnRhbnQ7XHJcbiAgICBmaWx0ZXI6IHVuc2V0IWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAuaGVhZGVyX3BhZ2V7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvY29udGVudC9iZ21lbnUuanBnXCIpO1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBoZWlnaHQ6IDE3MHB4O1xyXG4gICAgfVxyXG4gICAgLnRpdGxlX3BhZ2V7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvY29udGVudC90YWJtZW51LnBuZ1wiKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOjVweDtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkge1xyXG4gICAgICAgICAgICAudGl0bGVfcGFnZXtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1NHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM3NXB4KSB7XHJcbiAgICAgICAgICAgIC50aXRsZV9wYWdle1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTE0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpIHtcclxuICAgICAgICAgICAgLnRpdGxlX3BhZ2V7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA3NHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMDBweCkge1xyXG4gICAgICAgICAgICAudGl0bGVfcGFnZXtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL2NvbnRlbnQvdGFibWVudS5wbmdcIik7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDo1cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG5cclxuICAgIFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/promotion-detail/promotion-detail.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/promotion-detail/promotion-detail.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\" >\n    <div class=\"content_header\">&nbsp;</div>\n    <div class=\"titlePage\">\n            โปรโมชั่น\n    </div>\n  <div class=\"contentPageArea\">\n      <div class=\"row bg_color\">\n          <div class=\"col\">\n              \n          </div>\n          <div class=\"col-xl-6 col-md-6 col-sm-12 newsArea image-news\">\n            <img class=\"img_center\" src=\"{{adjust_page_image_url}}\" alt=\"\">\n          </div>\n          <div class=\"col\">\n            \n          </div>\n        </div>\n        <div class=\"titlePromotion\"><div class=\"cycle_red\">&nbsp;</div>{{adjust_page_title}}</div>\n        <div class=\"titleContent\" [innerHTML]=\"adjust_page_description | sanitizeHtml\"></div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/promotion-detail/promotion-detail.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/promotion-detail/promotion-detail.component.ts ***!
  \***************************************************************************/
/*! exports provided: PromotionDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromotionDetailComponent", function() { return PromotionDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_service_todo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/todo.service */ "./src/app/service/todo.service.ts");




var PromotionDetailComponent = /** @class */ (function () {
    function PromotionDetailComponent(route, todoServcie) {
        this.route = route;
        this.todoServcie = todoServcie;
    }
    PromotionDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            //this.id =  params['id'].split("-")[1];
            _this.id = params['id'];
            _this.todoServcie.getDetailNews(_this.id).subscribe(function (response) {
                _this.adjust_page_title = response[0].adjust_page_title;
                _this.adjust_page_image_url = 'upload/files/' + response[0].adjust_page_image_name + '.' + response[0].adjust_page_image_type;
                _this.adjust_page_description = response[0].adjust_page_description;
                _this.todoNewsDetail = response[0];
            });
        });
    };
    PromotionDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-promotion-detail',
            template: __webpack_require__(/*! ./promotion-detail.component.html */ "./src/app/components/promotion-detail/promotion-detail.component.html"),
            styles: [__webpack_require__(/*! ./promotion-detail.component.css */ "./src/app/components/promotion-detail/promotion-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_service_todo_service__WEBPACK_IMPORTED_MODULE_3__["TodoService"]])
    ], PromotionDetailComponent);
    return PromotionDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/promotion/promotion.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/promotion/promotion.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contentBotArea{\r\n    float: left;\r\n    width: 100%;\r\n}\r\n\r\n.titlePage{\r\n    margin-top:15px;\r\n    background-color: #1E1E1E;\r\n    color: white;\r\n    padding:15px 0px 15px 15px;\r\n    font-size: 1.2em;\r\n    margin-left: 15px;\r\n    margin-right: 15px;\r\n}\r\n\r\n.titleContentBot{\r\n    background: #D10000;\r\n    color: white;\r\n    padding: 10px;\r\n    margin-top:10px;\r\n    float: left;\r\n    width: 100%;\r\n}\r\n\r\n.titleLeft{\r\n    float: left;\r\n    color: white;\r\n    font-size: 1.6em;\r\n\r\n}\r\n\r\n.viewmore{\r\n    float: right;\r\n    margin-top:6px;\r\n    color:#E8CF01;\r\n}\r\n\r\n.dataContentBot{\r\n    /* min-height: 500px; */\r\n    float: left;\r\n    width: 100%;\r\n}\r\n\r\n.bootCols{\r\n    height:100px;\r\n    margin:0;\r\n    box-sizing:border-box;\r\n    padding:5px;\r\n    border:2px solid black;\r\n    background-color:red;\r\n  }\r\n\r\n.row{\r\n      margin-left:0px;\r\n      margin-right: 0px;\r\n  }\r\n\r\n.newsArea{\r\n      height: auto;\r\n      margin-top: 10px;\r\n      /* border: 2px solid red; */\r\n      padding: 0px;\r\n      min-height: 300px;\r\n      text-overflow: ellipsis;\r\n      overflow: hidden;\r\n      padding-left:5px;\r\n      padding-right:5px;\r\n  }\r\n\r\n.cardNews{\r\n    height: 100%;\r\n    border: 2px solid #D2AE70;\r\n  }\r\n\r\n.image-news{\r\n      height: calc( 100% - 70px );\r\n      background-size: cover;\r\n      background-position: center;\r\n  }\r\n\r\n.text-news{\r\n      padding:10px;\r\n      border-top:1px solid #D2AE70;\r\n      color:white;\r\n      min-height: 50px;\r\n      \r\n  }\r\n\r\n.pagination{\r\n        margin-top:15px;\r\n        color: white !important;\r\n    }\r\n\r\n.ngx-pagination a, .ngx-pagination button {\r\n        color: white !important;\r\n    }\r\n\r\n.ngx-pagination a, .ngx-pagination button {\r\n        color: white !important;\r\n    }\r\n\r\n.promotion img{\r\n        width: 100%;\r\n    }\r\n\r\n.promotion_div{\r\n        position: relative;\r\n    }\r\n\r\n@media screen and (min-width: 1024px) {\r\n    .promotion img{\r\n        width: unset;\r\n        margin-left: calc( 34% - 320px  );\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 1200px) {\r\n    .promotion img{\r\n        margin-left: calc( 34% - 320px  );\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9tb3Rpb24vcHJvbW90aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osMEJBQTBCO0lBQzFCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0lBQ2IsZUFBZTtJQUNmLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjs7QUFFcEI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLGFBQWE7QUFDakI7O0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWixRQUFRO0lBQ1IscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsb0JBQW9CO0VBQ3RCOztBQUNBO01BQ0ksZUFBZTtNQUNmLGlCQUFpQjtFQUNyQjs7QUFDQTtNQUNJLFlBQVk7TUFDWixnQkFBZ0I7TUFDaEIsMkJBQTJCO01BQzNCLFlBQVk7TUFDWixpQkFBaUI7TUFDakIsdUJBQXVCO01BQ3ZCLGdCQUFnQjtNQUNoQixnQkFBZ0I7TUFDaEIsaUJBQWlCO0VBQ3JCOztBQUVBO0lBQ0UsWUFBWTtJQUNaLHlCQUF5QjtFQUMzQjs7QUFDQTtNQUNJLDJCQUEyQjtNQUMzQixzQkFBc0I7TUFDdEIsMkJBQTJCO0VBQy9COztBQUNBO01BQ0ksWUFBWTtNQUNaLDRCQUE0QjtNQUM1QixXQUFXO01BQ1gsZ0JBQWdCOztFQUVwQjs7QUFFRTtRQUNJLGVBQWU7UUFDZix1QkFBdUI7SUFDM0I7O0FBQ0E7UUFDSSx1QkFBdUI7SUFDM0I7O0FBQ0E7UUFDSSx1QkFBdUI7SUFDM0I7O0FBRUE7UUFDSSxXQUFXO0lBQ2Y7O0FBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7O0FBQ0o7SUFDSTtRQUNJLFlBQVk7UUFDWixpQ0FBaUM7SUFDckM7QUFDSjs7QUFDQTtJQUNJO1FBQ0ksaUNBQWlDO0lBQ3JDO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb21vdGlvbi9wcm9tb3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50Qm90QXJlYXtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi50aXRsZVBhZ2V7XHJcbiAgICBtYXJnaW4tdG9wOjE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUUxRTFFO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzoxNXB4IDBweCAxNXB4IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbn1cclxuLnRpdGxlQ29udGVudEJvdHtcclxuICAgIGJhY2tncm91bmQ6ICNEMTAwMDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDoxMHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4udGl0bGVMZWZ0e1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDEuNmVtO1xyXG5cclxufVxyXG4udmlld21vcmV7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tdG9wOjZweDtcclxuICAgIGNvbG9yOiNFOENGMDE7XHJcbn1cclxuLmRhdGFDb250ZW50Qm90e1xyXG4gICAgLyogbWluLWhlaWdodDogNTAwcHg7ICovXHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYm9vdENvbHN7XHJcbiAgICBoZWlnaHQ6MTAwcHg7XHJcbiAgICBtYXJnaW46MDtcclxuICAgIGJveC1zaXppbmc6Ym9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6NXB4O1xyXG4gICAgYm9yZGVyOjJweCBzb2xpZCBibGFjaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmVkO1xyXG4gIH1cclxuICAucm93e1xyXG4gICAgICBtYXJnaW4tbGVmdDowcHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gIH1cclxuICAubmV3c0FyZWF7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgLyogYm9yZGVyOiAycHggc29saWQgcmVkOyAqL1xyXG4gICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xyXG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgcGFkZGluZy1sZWZ0OjVweDtcclxuICAgICAgcGFkZGluZy1yaWdodDo1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkTmV3c3tcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNEMkFFNzA7XHJcbiAgfVxyXG4gIC5pbWFnZS1uZXdze1xyXG4gICAgICBoZWlnaHQ6IGNhbGMoIDEwMCUgLSA3MHB4ICk7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICB9XHJcbiAgLnRleHQtbmV3c3tcclxuICAgICAgcGFkZGluZzoxMHB4O1xyXG4gICAgICBib3JkZXItdG9wOjFweCBzb2xpZCAjRDJBRTcwO1xyXG4gICAgICBjb2xvcjp3aGl0ZTtcclxuICAgICAgbWluLWhlaWdodDogNTBweDtcclxuICAgICAgXHJcbiAgfVxyXG5cclxuICAgIC5wYWdpbmF0aW9ue1xyXG4gICAgICAgIG1hcmdpbi10b3A6MTVweDtcclxuICAgICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5uZ3gtcGFnaW5hdGlvbiBhLCAubmd4LXBhZ2luYXRpb24gYnV0dG9uIHtcclxuICAgICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5uZ3gtcGFnaW5hdGlvbiBhLCAubmd4LXBhZ2luYXRpb24gYnV0dG9uIHtcclxuICAgICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAucHJvbW90aW9uIGltZ3tcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5wcm9tb3Rpb25fZGl2e1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAucHJvbW90aW9uIGltZ3tcclxuICAgICAgICB3aWR0aDogdW5zZXQ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoIDM0JSAtIDMyMHB4ICApO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gICAgLnByb21vdGlvbiBpbWd7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoIDM0JSAtIDMyMHB4ICApO1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/promotion/promotion.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/promotion/promotion.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div  class=\"container  container_a\">\n    <div  class=\"titlePage\"> โปรโมชั่น </div>\n      <div  class=\"contentPageArea\">\n          <div  class=\"row \">\n            <ng-container *ngFor=\"let promotion of todoPromotionText; index as i; first as isFirst;let l = count\">\n                    <div routerLink=\"/promotion/promotion-detail/{{promotion.adjust_page_id}}\"  class=\"col-md-12 hvr-push\" style=\"margin-bottom:15px;padding:25px;\">\n                            <div  class=\"titlePromotion\">{{promotion.adjust_page_title}}</div>\n                               <div  class=\"detailLeft\">\n                                   <img  class=\"attachment-alpha-store-carousel size-alpha-store-carousel wp-post-image\" draggable=\"false\" style=\"width: 100%;\" src=\"/upload/files/{{promotion.adjust_page_image_name}}.{{promotion.adjust_page_image_type}}\">\n                               </div>\n                               <div class=\"titlePromotion\" [innerHTML]=\"promotion.adjust_page_short_description | sanitizeHtml\"></div>\n                           </div>\n            </ng-container>\n            \n            \n              \n              <!-- <div  class=\"col-md-12\" style=\"margin-bottom:15px;padding:25px;\">\n                  <div  class=\"titlePromotion\">แนะนำเพื่อนใหม่</div>\n                  <div  class=\"detailLeft\"><img  class=\"attachment-alpha-store-carousel size-alpha-store-carousel wp-post-image\" draggable=\"false\" style=\"width: 100%;\" src=\"/upload/files/2019-10-22_09-02-021571731322.jpg\"></div>\n                  <div  class=\"titlePromotion\" style=\"margin-top:15px;\">แนะนำเพื่อนใหม่ สมัครสมาชิก รับ 20% ของยอดฝากเพื่อนทันที ทำยอดเครดิต 3 เท่าของโบนัส ถอนได้ทันที ไม่จำกัดเกมส์เดิมพัน สามารถเล่นได้ทุกเกมส์พนัน</div>\n              </div>\n              \n              <div  class=\"col-md-12\" style=\"margin-bottom:15px;padding:25px;\">\n                  <div  class=\"titlePromotion\">โปรโมชั่นฝาก 1,000 รับเพิ่มอีก 1,000 ทันที</div>\n                  <div  class=\"detailLeft\"><img  class=\"attachment-alpha-store-carousel size-alpha-store-carousel wp-post-image\" draggable=\"false\" style=\"width: 100%;\" src=\"/upload/files/2019-11-14_10-56-581573729018.png\"></div>\n                  <div  class=\"titlePromotion\" style=\"margin-top:15px;\"></div>\n              </div> -->\n          </div>\n      </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/promotion/promotion.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/promotion/promotion.component.ts ***!
  \*************************************************************/
/*! exports provided: PromotionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromotionComponent", function() { return PromotionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/todo.service */ "./src/app/service/todo.service.ts");



var PromotionComponent = /** @class */ (function () {
    function PromotionComponent(todoServcie) {
        this.todoServcie = todoServcie;
    }
    PromotionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.todoServcie.getTextPromotion().subscribe(function (response) {
            _this.todoPromotionText = response;
            //  console.log(this.todoPromotionText);
        });
    };
    PromotionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-promotion',
            template: __webpack_require__(/*! ./promotion.component.html */ "./src/app/components/promotion/promotion.component.html"),
            styles: [__webpack_require__(/*! ./promotion.component.css */ "./src/app/components/promotion/promotion.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"]])
    ], PromotionComponent);
    return PromotionComponent;
}());



/***/ }),

/***/ "./src/app/components/regComplete/regComplete.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/regComplete/regComplete.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contentPageArea{\r\n    margin-left:0px;\r\n    margin-right: 0px;\r\n    padding: 0px;\r\n    border: 0px solid #D10000;\r\n    margin-top:30px;\r\n    margin-bottom:30px;\r\n    padding:0 50px 0 50px;\r\n}\r\n.image-news{\r\n    background-size: cover;\r\n    background-position: center;\r\n    height: 536px;\r\n    width: 100%;\r\n    background-image: url(/assets/images/news/callcenter.jpg);\r\n}\r\n.cardNews{\r\n        height: 100%;\r\n        border: 2px solid red;\r\n    }\r\n.image-regiscomplete{\r\n        margin-top:30px;\r\n        /* background-image: url(/assets/images/content/register-page.jpg);\r\n        background-size: cover;\r\n        background-position: center; */\r\n        height: auto;\r\n        width: 80%;\r\n        margin-left:10%;\r\n        text-align: center;\r\n    }\r\n.titlePage2{\r\n      color: #18FF00;\r\n      font-size: 1.5em;\r\n      text-align: center;\r\n  }\r\n.titlePage{\r\n    margin-top: -40px;\r\n    color: white;\r\n    font-size: 1.5em;\r\n    position: relative;\r\n    text-align: center;\r\n    font-weight: bolder;\r\n    z-index: 2;\r\n}\r\n.qr_area_regiscomplete{\r\n    margin-top:30px;\r\n    width: 250px;\r\n    \r\n  }\r\n.qr_register{\r\n        background-image: url(/assets/images/icon/qr.png?v=1.1);\r\n        background-size: 100% 100%;\r\n        position: absolute;\r\n        width:250px;\r\n        height: 225px;\r\n        top:450px;\r\n        right: 50px;\r\n        z-index: 9;\r\n    }\r\n.image_qr{\r\n        width: 140px;\r\n    }\r\n.qr_area_regiscomplete .detailLeft{\r\n        float: left;\r\n        margin-top:20px;\r\n        width:100%;\r\n    }\r\n.qr_area_regiscomplete .detailRight{\r\n        float: left;\r\n        width:100%;\r\n        margin-top:20px;\r\n    }\r\n.center {\r\n        margin: auto;\r\n        width: 100%;\r\n        padding: 10px;\r\n      }\r\n@media screen and (min-width: 425px) {\r\n        .qr_area_regiscomplete{\r\n            margin-top: 35px;\r\n          }\r\n    }\r\n@media screen and (min-width: 767px) {\r\n        .center {\r\n            width: 40%;\r\n          }\r\n        .qr_area_regiscomplete .detailLeft{\r\n            padding-top:20px;\r\n           float: left;\r\n           text-align: right;\r\n           padding-right: 30px;\r\n            width:45%;\r\n        }\r\n        .qr_area_regiscomplete .detailRight{\r\n           \r\n            width:50%;\r\n        }\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdDb21wbGV0ZS9yZWdDb21wbGV0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLGFBQWE7SUFDYixXQUFXO0lBQ1gseURBQXlEO0FBQzdEO0FBQ0k7UUFDSSxZQUFZO1FBQ1oscUJBQXFCO0lBQ3pCO0FBQ0E7UUFDSSxlQUFlO1FBQ2Y7O3NDQUU4QjtRQUM5QixZQUFZO1FBQ1osVUFBVTtRQUNWLGVBQWU7UUFDZixrQkFBa0I7SUFDdEI7QUFDRjtNQUNJLGNBQWM7TUFDZCxnQkFBZ0I7TUFDaEIsa0JBQWtCO0VBQ3RCO0FBQ0E7SUFDRSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7QUFDRTtJQUNFLGVBQWU7SUFDZixZQUFZOztFQUVkO0FBQ0U7UUFDSSx1REFBdUQ7UUFDdkQsMEJBQTBCO1FBQzFCLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gsYUFBYTtRQUNiLFNBQVM7UUFDVCxXQUFXO1FBQ1gsVUFBVTtJQUNkO0FBQ0E7UUFDSSxZQUFZO0lBQ2hCO0FBQ0E7UUFDSSxXQUFXO1FBQ1gsZUFBZTtRQUNmLFVBQVU7SUFDZDtBQUNBO1FBQ0ksV0FBVztRQUNYLFVBQVU7UUFDVixlQUFlO0lBQ25CO0FBRUE7UUFDSSxZQUFZO1FBQ1osV0FBVztRQUNYLGFBQWE7TUFDZjtBQUNGO1FBQ0k7WUFDSSxnQkFBZ0I7VUFDbEI7SUFDTjtBQUVBO1FBQ0k7WUFDSSxVQUFVO1VBQ1o7UUFDRjtZQUNJLGdCQUFnQjtXQUNqQixXQUFXO1dBQ1gsaUJBQWlCO1dBQ2pCLG1CQUFtQjtZQUNsQixTQUFTO1FBQ2I7UUFDQTs7WUFFSSxTQUFTO1FBQ2I7SUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnQ29tcGxldGUvcmVnQ29tcGxldGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50UGFnZUFyZWF7XHJcbiAgICBtYXJnaW4tbGVmdDowcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGJvcmRlcjogMHB4IHNvbGlkICNEMTAwMDA7XHJcbiAgICBtYXJnaW4tdG9wOjMwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOjMwcHg7XHJcbiAgICBwYWRkaW5nOjAgNTBweCAwIDUwcHg7XHJcbn1cclxuLmltYWdlLW5ld3N7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA1MzZweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL25ld3MvY2FsbGNlbnRlci5qcGcpO1xyXG59XHJcbiAgICAuY2FyZE5ld3N7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcclxuICAgIH1cclxuICAgIC5pbWFnZS1yZWdpc2NvbXBsZXRle1xyXG4gICAgICAgIG1hcmdpbi10b3A6MzBweDtcclxuICAgICAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvY29udGVudC9yZWdpc3Rlci1wYWdlLmpwZyk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7ICovXHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MTAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAudGl0bGVQYWdlMntcclxuICAgICAgY29sb3I6ICMxOEZGMDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLnRpdGxlUGFnZXtcclxuICAgIG1hcmdpbi10b3A6IC00MHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICB6LWluZGV4OiAyO1xyXG59XHJcbiAgLnFyX2FyZWFfcmVnaXNjb21wbGV0ZXtcclxuICAgIG1hcmdpbi10b3A6MzBweDtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIFxyXG4gIH1cclxuICAgIC5xcl9yZWdpc3RlcntcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbi9xci5wbmc/dj0xLjEpO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDoyNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDIyNXB4O1xyXG4gICAgICAgIHRvcDo0NTBweDtcclxuICAgICAgICByaWdodDogNTBweDtcclxuICAgICAgICB6LWluZGV4OiA5O1xyXG4gICAgfVxyXG4gICAgLmltYWdlX3Fye1xyXG4gICAgICAgIHdpZHRoOiAxNDBweDtcclxuICAgIH1cclxuICAgIC5xcl9hcmVhX3JlZ2lzY29tcGxldGUgLmRldGFpbExlZnR7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDoyMHB4O1xyXG4gICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICB9XHJcbiAgICAucXJfYXJlYV9yZWdpc2NvbXBsZXRlIC5kZXRhaWxSaWdodHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6MjBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNlbnRlciB7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIH1cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQyNXB4KSB7XHJcbiAgICAgICAgLnFyX2FyZWFfcmVnaXNjb21wbGV0ZXtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMzVweDtcclxuICAgICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjdweCkge1xyXG4gICAgICAgIC5jZW50ZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIC5xcl9hcmVhX3JlZ2lzY29tcGxldGUgLmRldGFpbExlZnR7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOjIwcHg7XHJcbiAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICAgICAgICAgICAgd2lkdGg6NDUlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucXJfYXJlYV9yZWdpc2NvbXBsZXRlIC5kZXRhaWxSaWdodHtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgd2lkdGg6NTAlO1xyXG4gICAgICAgIH1cclxuICAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/components/regComplete/regComplete.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/regComplete/regComplete.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <div class=\"content_header\">&nbsp;</div>\n  <div class=\"titlePage\">\n      สมัครสมาชิก\n  </div>\n<div class=\"contentPageArea\">\n<div class=\"titlePage2\">สมัครสมาชิกเรียบร้อยแล้ว !</div>\n<a target=\"_bank\" href=\"http://line.me/ti/p/~@megarich88\" style=\"text-decoration: none;color:white;\">\n<div class=\"image-regiscomplete\">\n  <img src=\"/assets/images/content/register-page.jpg?v=1.1\" width=\"100%\" height=\"100%\">\n  <!-- กดที่รูปเพื่อขอรับ<br>\n  รหัสเข้าเล่นและเลขบัญชีสำหรับโอนเงิน -->\n</div>\n</a>\n<div class=\"qr_area_regiscomplete center\" >\n  <div class=\"detailLeft\">\n    <div class=\"text_line\" style=\"font-size: 1.2em;\">หรือติดต่อได้ที่</div>\n    <div class=\"text_line\" style=\"font-weight: 100px;font-size: 14px;\">ID Line: @megarich88</div>\n    <!-- <div class=\"text_line\" style=\"font-weight: 100px;font-size: 14px;\">085-1764289</div> -->\n  </div>\n  <div class=\"detailRight\">\n    <img class=\"image_qr\" src=\"/assets/images/icon/qr.png?v=1.2\">\n  </div>\n</div>\n</div>\n<!-- <app-content-bottom></app-content-bottom> -->\n</div>"

/***/ }),

/***/ "./src/app/components/regComplete/regComplete.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/regComplete/regComplete.component.ts ***!
  \*****************************************************************/
/*! exports provided: regCompleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regCompleteComponent", function() { return regCompleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/todo.service */ "./src/app/service/todo.service.ts");



var regCompleteComponent = /** @class */ (function () {
    function regCompleteComponent(todoServcie) {
        this.todoServcie = todoServcie;
    }
    regCompleteComponent.prototype.ngOnInit = function () {
        //call service
        var _this = this;
        this.todoServcie.getTextContext().subscribe(function (response) {
            //this.sanitizedURL = this.sanitizer.bypassSecurityTrustResourceUrl(response.data.contact_text_detail)['changingThisBreaksApplicationSecurity']; 
            //console.log(response.data.contact_text_detail);
            _this.todoContactText = response.data.contact_text_detail;
        });
    };
    regCompleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-regComplete',
            template: __webpack_require__(/*! ./regComplete.component.html */ "./src/app/components/regComplete/regComplete.component.html"),
            styles: [__webpack_require__(/*! ./regComplete.component.css */ "./src/app/components/regComplete/regComplete.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"]])
    ], regCompleteComponent);
    return regCompleteComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contentBotArea{\r\n    float: left;\r\n    width: 100%;\r\n}\r\n\r\n.titlePage{\r\n    margin-top:15px;\r\n    background-color: #1E1E1E;\r\n    color: white;\r\n    padding:15px 0px 15px 15px;\r\n    font-size: 1.2em;\r\n    margin-left: 15px;\r\n    margin-right: 15px;\r\n}\r\n\r\n.titleContentBot{\r\n    background: #D10000;\r\n    color: white;\r\n    padding: 10px;\r\n    margin-top:10px;\r\n    float: left;\r\n    width: 100%;\r\n}\r\n\r\n.titleLeft{\r\n    float: left;\r\n    color: white;\r\n    font-size: 1.6em;\r\n\r\n}\r\n\r\n.viewmore{\r\n    float: right;\r\n    margin-top:6px;\r\n    color:#E8CF01;\r\n}\r\n\r\n.dataContentBot{\r\n    /* min-height: 500px; */\r\n    float: left;\r\n    width: 100%;\r\n}\r\n\r\n.bootCols{\r\n    height:100px;\r\n    margin:0;\r\n    box-sizing:border-box;\r\n    padding:5px;\r\n    border:2px solid black;\r\n    background-color:red;\r\n  }\r\n\r\n.row{\r\n      margin-left:0px;\r\n      margin-right: 0px;\r\n  }\r\n\r\n.newsArea{\r\n      height: auto;\r\n      margin-top: 10px;\r\n      /* border: 2px solid red; */\r\n      padding: 0px;\r\n      min-height: 300px;\r\n      text-overflow: ellipsis;\r\n      overflow: hidden;\r\n      padding-left:5px;\r\n      padding-right:5px;\r\n  }\r\n\r\n.cardNews{\r\n    height: 100%;\r\n    border: 2px solid #D2AE70;\r\n  }\r\n\r\n.image-news{\r\n      height: calc( 100% - 70px );\r\n      background-size: cover;\r\n      background-position: center;\r\n  }\r\n\r\n.text-news{\r\n      padding:10px;\r\n      border-top:1px solid #D2AE70;\r\n      color:white;\r\n      min-height: 50px;\r\n      \r\n  }\r\n\r\n.pagination{\r\n        margin-top:15px;\r\n        color: white !important;\r\n    }\r\n\r\n.ngx-pagination a, .ngx-pagination button {\r\n        color: white !important;\r\n    }\r\n\r\n.ngx-pagination a, .ngx-pagination button {\r\n        color: white !important;\r\n    }\r\n\r\n.promotion img{\r\n        width: 100%;\r\n    }\r\n\r\n.promotion_div{\r\n        position: relative;\r\n    }\r\n\r\n.detail_Left{\r\n        width: 100%;\r\n        float: left;\r\n        text-align: center;\r\n    }\r\n\r\n.detail_Right{\r\n        width: 100%;\r\n        float: left;\r\n    }\r\n\r\n.control-group{\r\n        color: white;\r\n        padding:15px;\r\n    }\r\n\r\n@media screen and (min-width: 1024px) {\r\n    .promotion img{\r\n        width: unset;\r\n        margin-left: calc( 50% - 320px );\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 1200px) {\r\n    .promotion img{\r\n        margin-left: calc( 50% - 320px );\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLDBCQUEwQjtJQUMxQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osYUFBYTtJQUNiLGVBQWU7SUFDZixXQUFXO0lBQ1gsV0FBVztBQUNmOztBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7O0FBRXBCOztBQUNBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCxhQUFhO0FBQ2pCOztBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osUUFBUTtJQUNSLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLG9CQUFvQjtFQUN0Qjs7QUFDQTtNQUNJLGVBQWU7TUFDZixpQkFBaUI7RUFDckI7O0FBQ0E7TUFDSSxZQUFZO01BQ1osZ0JBQWdCO01BQ2hCLDJCQUEyQjtNQUMzQixZQUFZO01BQ1osaUJBQWlCO01BQ2pCLHVCQUF1QjtNQUN2QixnQkFBZ0I7TUFDaEIsZ0JBQWdCO01BQ2hCLGlCQUFpQjtFQUNyQjs7QUFFQTtJQUNFLFlBQVk7SUFDWix5QkFBeUI7RUFDM0I7O0FBQ0E7TUFDSSwyQkFBMkI7TUFDM0Isc0JBQXNCO01BQ3RCLDJCQUEyQjtFQUMvQjs7QUFDQTtNQUNJLFlBQVk7TUFDWiw0QkFBNEI7TUFDNUIsV0FBVztNQUNYLGdCQUFnQjs7RUFFcEI7O0FBRUU7UUFDSSxlQUFlO1FBQ2YsdUJBQXVCO0lBQzNCOztBQUNBO1FBQ0ksdUJBQXVCO0lBQzNCOztBQUNBO1FBQ0ksdUJBQXVCO0lBQzNCOztBQUVBO1FBQ0ksV0FBVztJQUNmOztBQUNBO1FBQ0ksa0JBQWtCO0lBQ3RCOztBQUVBO1FBQ0ksV0FBVztRQUNYLFdBQVc7UUFDWCxrQkFBa0I7SUFDdEI7O0FBRUE7UUFDSSxXQUFXO1FBQ1gsV0FBVztJQUNmOztBQUNBO1FBQ0ksWUFBWTtRQUNaLFlBQVk7SUFDaEI7O0FBQ0o7SUFDSTtRQUNJLFlBQVk7UUFDWixnQ0FBZ0M7SUFDcEM7QUFDSjs7QUFDQTtJQUNJO1FBQ0ksZ0NBQWdDO0lBQ3BDO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudEJvdEFyZWF7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udGl0bGVQYWdle1xyXG4gICAgbWFyZ2luLXRvcDoxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFFMUUxRTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6MTVweCAwcHggMTVweCAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG59XHJcbi50aXRsZUNvbnRlbnRCb3R7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRDEwMDAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbi10b3A6MTBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnRpdGxlTGVmdHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxLjZlbTtcclxuXHJcbn1cclxuLnZpZXdtb3Jle1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXRvcDo2cHg7XHJcbiAgICBjb2xvcjojRThDRjAxO1xyXG59XHJcbi5kYXRhQ29udGVudEJvdHtcclxuICAgIC8qIG1pbi1oZWlnaHQ6IDUwMHB4OyAqL1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmJvb3RDb2xze1xyXG4gICAgaGVpZ2h0OjEwMHB4O1xyXG4gICAgbWFyZ2luOjA7XHJcbiAgICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOjVweDtcclxuICAgIGJvcmRlcjoycHggc29saWQgYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJlZDtcclxuICB9XHJcbiAgLnJvd3tcclxuICAgICAgbWFyZ2luLWxlZnQ6MHB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICB9XHJcbiAgLm5ld3NBcmVhe1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIHJlZDsgKi9cclxuICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICBtaW4taGVpZ2h0OiAzMDBweDtcclxuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIHBhZGRpbmctbGVmdDo1cHg7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6NXB4O1xyXG4gIH1cclxuICBcclxuICAuY2FyZE5ld3N7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjRDJBRTcwO1xyXG4gIH1cclxuICAuaW1hZ2UtbmV3c3tcclxuICAgICAgaGVpZ2h0OiBjYWxjKCAxMDAlIC0gNzBweCApO1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC50ZXh0LW5ld3N7XHJcbiAgICAgIHBhZGRpbmc6MTBweDtcclxuICAgICAgYm9yZGVyLXRvcDoxcHggc29saWQgI0QyQUU3MDtcclxuICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgICAgIFxyXG4gIH1cclxuXHJcbiAgICAucGFnaW5hdGlvbntcclxuICAgICAgICBtYXJnaW4tdG9wOjE1cHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAubmd4LXBhZ2luYXRpb24gYSwgLm5neC1wYWdpbmF0aW9uIGJ1dHRvbiB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAubmd4LXBhZ2luYXRpb24gYSwgLm5neC1wYWdpbmF0aW9uIGJ1dHRvbiB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb21vdGlvbiBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAucHJvbW90aW9uX2RpdntcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcblxyXG4gICAgLmRldGFpbF9MZWZ0e1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmRldGFpbF9SaWdodHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgIH1cclxuICAgIC5jb250cm9sLWdyb3Vwe1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBwYWRkaW5nOjE1cHg7XHJcbiAgICB9XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgLnByb21vdGlvbiBpbWd7XHJcbiAgICAgICAgd2lkdGg6IHVuc2V0O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKCA1MCUgLSAzMjBweCApO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gICAgLnByb21vdGlvbiBpbWd7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoIDUwJSAtIDMyMHB4ICk7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <iframe frameborder=\"0\" height=\"550px\" scrolling=\"no\" src=\"https://winlot888.com/webbox/?token=1f0fe4af2993e20db6f9685ecdb3a13dffaeca17 \" width=\"100%\"></iframe> -->\r\n<div class=\"container\">\r\n    <div class=\"titlePage\">สมัครสมาชิก</div>\r\n    <form class=\"form-horizontal\" #form='ngForm' (ngSubmit)=\"onSubmit(form)\">\r\n        <fieldset>\r\n          <div class=\"control-group\" >\r\n            <label class=\"control-label\"  for=\"user_name\">ชื่อ</label>\r\n            <div class=\"controls\">\r\n              <input type=\"text\" name=\"user_name\" [(ngModel)]=\"user_name\" placeholder=\"ชื่อ\" class=\"input-xlarge form-control\">\r\n            </div>\r\n          </div>\r\n       \r\n          <div class=\"control-group\">\r\n            <label class=\"control-label\" for=\"user_tel\">เบอร์โทร</label>\r\n            <div class=\"controls\">\r\n              <input type=\"text\" name=\"user_tel\" [(ngModel)]=\"user_tel\"placeholder=\"เบอร์โทร\" class=\"input-xlarge form-control\">\r\n            </div>\r\n          </div>\r\n       \r\n          <div class=\"control-group\">\r\n              <label class=\"control-label\" for=\"user_line\">E-mail</label>\r\n              <div class=\"controls\">\r\n                <input type=\"text\" name=\"email\" [(ngModel)]=\"email\" placeholder=\"E-mail\" class=\"input-xlarge form-control\">\r\n              </div>\r\n            </div>\r\n          <div class=\"control-group\">\r\n            <label class=\"control-label\" for=\"user_line\">ไอดีไลน์</label>\r\n            <div class=\"controls\">\r\n              <input type=\"text\" name=\"user_line\" [(ngModel)]=\"user_line\" placeholder=\"ไอดีไลน์\" class=\"input-xlarge form-control\">\r\n            </div>\r\n          </div>\r\n    \r\n          <div class=\"control-group\">\r\n            <div class=\"controls\">\r\n              <button type=\"submit\" class=\"btn btn-success\">สมัครสมาชิก</button>\r\n            </div>\r\n          </div>\r\n        </fieldset>\r\n      </form>\r\n    \r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/todo.service */ "./src/app/service/todo.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(route, todoServcie) {
        this.route = route;
        this.todoServcie = todoServcie;
        this.data_deatail = "<img src='/assets/images/loading/05.gif'>";
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            // this.id =  params['id'];
            _this.todoServcie.getDataPage("register").subscribe(function (response) {
                _this.data_title = response.data.menu_name;
                _this.data_deatail = response.data.menu_detail;
            });
        });
        //call service
        // this.todoServcie.getTextRegister().subscribe((response)=>{
        //   this.todoRegisterText = response;
        // });
    };
    RegisterComponent.prototype.onSubmit = function (form) {
        this.todoServcie.saveMember(form.value).subscribe(function (data) {
            if (data.success) {
                alert("รอการตอบกลับจากพนักงาน");
            }
            else {
                alert("กรุณาลองอีกครั้ง");
            }
        });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], src_app_service_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/resultfootball/resultfootball.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/resultfootball/resultfootball.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".titlePage{\r\n    margin-top:15px;\r\n    background-color: #1E1E1E;\r\n    color: white;\r\n    padding:15px 0px 15px 15px;\r\n    font-size: 1.2em;\r\n    margin-left: 15px;\r\n    margin-right: 15px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXN1bHRmb290YmFsbC9yZXN1bHRmb290YmFsbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osMEJBQTBCO0lBQzFCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZXN1bHRmb290YmFsbC9yZXN1bHRmb290YmFsbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlUGFnZXtcclxuICAgIG1hcmdpbi10b3A6MTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxRTFFMUU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOjE1cHggMHB4IDE1cHggMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/resultfootball/resultfootball.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/resultfootball/resultfootball.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <div class=\"titlePage\">ผลบอลสด</div>\n  <div class=\"contentPageArea\">\n    <div class=\"titleContent\">\n      <iframe id=\"iframe2\" src=\"https://www.unogoal.club/free_livescore.aspx\" width=\"100%\" marginwidth=\"0\" height=\"888px\" marginheight=\"0\" frameborder=\"0\" align=\"middle\" scrolling=\"auto\"></iframe>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/resultfootball/resultfootball.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/resultfootball/resultfootball.component.ts ***!
  \***********************************************************************/
/*! exports provided: ResultfootballComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultfootballComponent", function() { return ResultfootballComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


// import * as $ from 'jquery';
var ResultfootballComponent = /** @class */ (function () {
    function ResultfootballComponent() {
    }
    ResultfootballComponent.prototype.ngOnInit = function () {
        // $(document).ready(function(){
        // });
    };
    ResultfootballComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-resultfootball',
            template: __webpack_require__(/*! ./resultfootball.component.html */ "./src/app/components/resultfootball/resultfootball.component.html"),
            styles: [__webpack_require__(/*! ./resultfootball.component.css */ "./src/app/components/resultfootball/resultfootball.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ResultfootballComponent);
    return ResultfootballComponent;
}());



/***/ }),

/***/ "./src/app/components/withdraw/withdraw.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/withdraw/withdraw.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".titleContent{\r\n    height: 500px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93aXRoZHJhdy93aXRoZHJhdy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2l0aGRyYXcvd2l0aGRyYXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZUNvbnRlbnR7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/withdraw/withdraw.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/withdraw/withdraw.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div _ngcontent-upl-c5=\"\" class=\"container page_content\">\n  <div _ngcontent-upl-c5=\"\" class=\"contentPageArea\" style=\"padding:0px;\">\n    <div _ngcontent-upl-c5=\"\" class=\"titleContent\"  style=\"height: 500px;\">\n        <div class=\"titleContent\" [innerHTML]=\"data_deatail | sanitizeHtml\"></div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/withdraw/withdraw.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/withdraw/withdraw.component.ts ***!
  \***********************************************************/
/*! exports provided: WithdrawComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithdrawComponent", function() { return WithdrawComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/todo.service */ "./src/app/service/todo.service.ts");



var WithdrawComponent = /** @class */ (function () {
    function WithdrawComponent(todoServcie) {
        this.todoServcie = todoServcie;
    }
    WithdrawComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.todoServcie.getDataPage('withdraw2').subscribe(function (response) {
            _this.data_title = response.data.menu_name;
            _this.data_deatail = response.data.menu_detail;
        });
    };
    WithdrawComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-withdraw',
            template: __webpack_require__(/*! ./withdraw.component.html */ "./src/app/components/withdraw/withdraw.component.html"),
            styles: [__webpack_require__(/*! ./withdraw.component.css */ "./src/app/components/withdraw/withdraw.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"]])
    ], WithdrawComponent);
    return WithdrawComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active-menu{\r\n  /* background-color: #ddd; */\r\n  /* text-decoration: underline; */\r\n  color: white !important;\r\n  \r\n}\r\n.topnav{\r\n/* background-image: url(/assets/images/nav/tab.png); */\r\nbackground: #ECAC00;\r\nbackground-size: 100% 60px;\r\npadding-left:0px;\r\npadding-right: 0px;\r\ndisplay: none;\r\n}\r\n.topnav .container{\r\n  background-color: unset;\r\n  overflow: unset;\r\n  max-width: unset;\r\n  padding-bottom: 0px;\r\n}\r\n.topnav_mobile{\r\n  float: left;\r\n  padding:5px;\r\n  text-align: center;\r\n  width: 100%;\r\n}\r\n.btn_mobile{\r\n  margin-right: 5px;\r\n  margin-top:5px;\r\n  width: 110px !important;\r\n  background-color: #FEC965;\r\n  color: black;\r\n}\r\n@media screen and (min-width: 1100px) {\r\n  .topnav{\r\n    display: block;\r\n  }\r\n  .topnav_mobile{\r\n    display: none;\r\n  }\r\n}\r\n@media screen and (min-width: 1101px) {\r\n  .topnav{\r\n    /* background: #EEC823; \r\n    background: -webkit-linear-gradient(#EEC823, #F0E343, #ECAC00); \r\n    background: -o-linear-gradient(#EEC823, #F0E343, #ECAC00); \r\n    background: -moz-linear-gradient(#EEC823, #F0E343, #ECAC00); \r\n    background: linear-gradient(#EEC823, #F0E343, #ECAC00);  */\r\n    border-top:3px solid #EEC823;\r\n    \r\n    background: unset;\r\n    /* background-image: url(/assets/images/nav/tab.png); */\r\n    background-size: 100%;\r\n    background-repeat: no-repeat;\r\n  }\r\n  \r\n  .topnav{\r\n    padding-left:30px;\r\n    padding-right: 30px;\r\n  }\r\n  /* .width_0{\r\n    width: 85px !important;\r\n  }\r\n  .width_2{\r\n    width: 130px !important;\r\n  }\r\n  .width_3{\r\n    width: 120px !important;\r\n  }\r\n  .width_4{\r\n    width: 130px !important;\r\n  } */\r\n  .width_5{\r\n    \r\n  }\r\n  /* .width_6{\r\n    width: 90px !important;\r\n  } */\r\n}\r\n@media screen and (min-width: 1200px) {\r\n  \r\n  .topnav{\r\n    padding-left:100px;\r\n    padding-right: 100px;\r\n    border-top:unset;\r\n    background: unset;\r\n    background-image: url(/assets/images/nav/tab.png);\r\n    background-size: 151% 55px;\r\n    background-position: top center;\r\n    background-repeat: no-repeat;\r\n  }\r\n  /* .width_0{\r\n    width: 90px !important;\r\n  }\r\n  .width_2{\r\n    width: 140px !important;\r\n  }\r\n  .width_3{\r\n    width: 102px !important;\r\n  }\r\n  .width_4{\r\n    width: 131px !important;\r\n  } */\r\n  .width_5{\r\n\r\n  }\r\n  /* .width_6{\r\n    width: 90px !important;\r\n  } */\r\n  \r\n}\r\n@media screen and (min-width: 1354px) {\r\n  /* .width_0{\r\n    width: 90px !important;\r\n  }\r\n  .width_2{\r\n    width: 140px !important;\r\n  }\r\n  .width_3{\r\n    width: 130px !important;\r\n  }\r\n  .width_4{\r\n    width: 131px !important;\r\n  } */\r\n  .width_5{\r\n\r\n  }\r\n  /* .width_6{\r\n    width: 155px !important;\r\n  } */\r\n}\r\n@media screen and (min-width: 1400px) {\r\n\r\n  .topnav{\r\n    padding-left: 306px;\r\n    padding-right: 306px;\r\n    border-top:unset;\r\n    background: unset;\r\n    background-image: url(/assets/images/nav/tab.png);\r\n    background-size: 110% 55px;\r\n    background-position: top center;\r\n    background-repeat: no-repeat;\r\n  }\r\n  /* .width_0{\r\n    width: 90px !important;\r\n  }\r\n  .width_2{\r\n    width: 127px  !important;\r\n  }\r\n  .width_3{\r\n    width: 120px !important;\r\n  }\r\n  .width_4{\r\n    width: 121px !important;\r\n  } */\r\n  .width_5{\r\n\r\n  }\r\n  /* .width_6{\r\n    width: 90px  !important;\r\n  } */\r\n}\r\n@media screen and (min-width: 1500px) {\r\n\r\n  .topnav{\r\n    padding-left: 306px;\r\n    padding-right: 306px;\r\n    border-top:unset;\r\n    background: unset;\r\n    background-image: url(/assets/images/nav/tab.png);\r\n    background-size: 110% 55px;\r\n    background-position: top center;\r\n    background-repeat: no-repeat;\r\n  }\r\n}\r\n@media screen and (min-width: 1600px) {\r\n  .topnav{\r\n    padding-left:200px;\r\n    padding-right: 200px;\r\n    border-top:unset;\r\n    background: unset;\r\n    background-image: url(/assets/images/nav/tab.png);\r\n    background-size: 135% 55px;\r\n    background-position: top center;\r\n    background-repeat: no-repeat;\r\n  }\r\n}\r\n@media screen and (min-width: 1700px) {\r\n  .topnav{\r\n    padding-left:200px;\r\n    padding-right: 200px;\r\n  }\r\n}\r\n@media screen and (min-width: 1900px) {\r\n  .topnav{\r\n    padding-left: 420px;\r\n    padding-right: 420px;\r\n  }\r\n  .topnav{\r\n    border-top:unset;\r\n    background: unset;\r\n    background-image: url(/assets/images/nav/tab.png);\r\n    background-size: 100%;\r\n    background-repeat: no-repeat;\r\n  }\r\n  /* .width_0{\r\n    width: 96px  !important;\r\n  }\r\n  .width_2{\r\n    width: 139px  !important;\r\n  }\r\n  .width_3{\r\n    width: 120px !important;\r\n  }\r\n  .width_4{\r\n    width: 121px !important;\r\n  } */\r\n  .width_5{\r\n   \r\n    padding-left:0px;\r\n    padding-right: 0px;\r\n  }\r\n  /* .width_6{\r\n    width: 180px  !important;\r\n  } */\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEJBQTRCO0VBQzVCLGdDQUFnQztFQUNoQyx1QkFBdUI7O0FBRXpCO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQsbUJBQW1CO0FBQ25CLDBCQUEwQjtBQUMxQixnQkFBZ0I7QUFDaEIsa0JBQWtCO0FBQ2xCLGFBQWE7QUFDYjtBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7QUFFQTtFQUNFO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7QUFDQTtFQUNFO0lBQ0U7Ozs7OERBSTBEO0lBQzFELDRCQUE0Qjs7SUFFNUIsaUJBQWlCO0lBQ2pCLHVEQUF1RDtJQUN2RCxxQkFBcUI7SUFDckIsNEJBQTRCO0VBQzlCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLG1CQUFtQjtFQUNyQjtFQUNBOzs7Ozs7Ozs7OztLQVdHO0VBQ0g7O0VBRUE7RUFDQTs7S0FFRztBQUNMO0FBQ0E7O0VBRUU7SUFDRSxrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsaURBQWlEO0lBQ2pELDBCQUEwQjtJQUMxQiwrQkFBK0I7SUFDL0IsNEJBQTRCO0VBQzlCO0VBQ0E7Ozs7Ozs7Ozs7O0tBV0c7RUFDSDs7RUFFQTtFQUNBOztLQUVHOztBQUVMO0FBRUE7RUFDRTs7Ozs7Ozs7Ozs7S0FXRztFQUNIOztFQUVBO0VBQ0E7O0tBRUc7QUFDTDtBQUdBOztFQUVFO0lBQ0UsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGlEQUFpRDtJQUNqRCwwQkFBMEI7SUFDMUIsK0JBQStCO0lBQy9CLDRCQUE0QjtFQUM5QjtFQUNBOzs7Ozs7Ozs7OztLQVdHO0VBQ0g7O0VBRUE7RUFDQTs7S0FFRztBQUNMO0FBRUE7O0VBRUU7SUFDRSxtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsaURBQWlEO0lBQ2pELDBCQUEwQjtJQUMxQiwrQkFBK0I7SUFDL0IsNEJBQTRCO0VBQzlCO0FBQ0Y7QUFFQTtFQUNFO0lBQ0Usa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGlEQUFpRDtJQUNqRCwwQkFBMEI7SUFDMUIsK0JBQStCO0lBQy9CLDRCQUE0QjtFQUM5QjtBQUNGO0FBRUE7RUFDRTtJQUNFLGtCQUFrQjtJQUNsQixvQkFBb0I7RUFDdEI7QUFDRjtBQUVBO0VBQ0U7SUFDRSxtQkFBbUI7SUFDbkIsb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGlEQUFpRDtJQUNqRCxxQkFBcUI7SUFDckIsNEJBQTRCO0VBQzlCO0VBQ0E7Ozs7Ozs7Ozs7O0tBV0c7RUFDSDs7SUFFRSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCO0VBQ0E7O0tBRUc7QUFDTCIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3RpdmUtbWVudXtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkOyAqL1xyXG4gIC8qIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAqL1xyXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIFxyXG59XHJcbi50b3BuYXZ7XHJcbi8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9uYXYvdGFiLnBuZyk7ICovXHJcbmJhY2tncm91bmQ6ICNFQ0FDMDA7XHJcbmJhY2tncm91bmQtc2l6ZTogMTAwJSA2MHB4O1xyXG5wYWRkaW5nLWxlZnQ6MHB4O1xyXG5wYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbmRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi50b3BuYXYgLmNvbnRhaW5lcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcclxuICBvdmVyZmxvdzogdW5zZXQ7XHJcbiAgbWF4LXdpZHRoOiB1bnNldDtcclxuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG59XHJcbi50b3BuYXZfbW9iaWxle1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHBhZGRpbmc6NXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uYnRuX21vYmlsZXtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICBtYXJnaW4tdG9wOjVweDtcclxuICB3aWR0aDogMTEwcHggIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkVDOTY1O1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTEwMHB4KSB7XHJcbiAgLnRvcG5hdntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICAudG9wbmF2X21vYmlsZXtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDExMDFweCkge1xyXG4gIC50b3BuYXZ7XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiAjRUVDODIzOyBcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCNFRUM4MjMsICNGMEUzNDMsICNFQ0FDMDApOyBcclxuICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgjRUVDODIzLCAjRjBFMzQzLCAjRUNBQzAwKTsgXHJcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgjRUVDODIzLCAjRjBFMzQzLCAjRUNBQzAwKTsgXHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI0VFQzgyMywgI0YwRTM0MywgI0VDQUMwMCk7ICAqL1xyXG4gICAgYm9yZGVyLXRvcDozcHggc29saWQgI0VFQzgyMztcclxuICAgIFxyXG4gICAgYmFja2dyb3VuZDogdW5zZXQ7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvbmF2L3RhYi5wbmcpOyAqL1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICB9XHJcbiAgXHJcbiAgLnRvcG5hdntcclxuICAgIHBhZGRpbmctbGVmdDozMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICB9XHJcbiAgLyogLndpZHRoXzB7XHJcbiAgICB3aWR0aDogODVweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAud2lkdGhfMntcclxuICAgIHdpZHRoOiAxMzBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAud2lkdGhfM3tcclxuICAgIHdpZHRoOiAxMjBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAud2lkdGhfNHtcclxuICAgIHdpZHRoOiAxMzBweCAhaW1wb3J0YW50O1xyXG4gIH0gKi9cclxuICAud2lkdGhfNXtcclxuICAgIFxyXG4gIH1cclxuICAvKiAud2lkdGhfNntcclxuICAgIHdpZHRoOiA5MHB4ICFpbXBvcnRhbnQ7XHJcbiAgfSAqL1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gIFxyXG4gIC50b3BuYXZ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6MTAwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMDBweDtcclxuICAgIGJvcmRlci10b3A6dW5zZXQ7XHJcbiAgICBiYWNrZ3JvdW5kOiB1bnNldDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9uYXYvdGFiLnBuZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE1MSUgNTVweDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIH1cclxuICAvKiAud2lkdGhfMHtcclxuICAgIHdpZHRoOiA5MHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC53aWR0aF8ye1xyXG4gICAgd2lkdGg6IDE0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC53aWR0aF8ze1xyXG4gICAgd2lkdGg6IDEwMnB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC53aWR0aF80e1xyXG4gICAgd2lkdGg6IDEzMXB4ICFpbXBvcnRhbnQ7XHJcbiAgfSAqL1xyXG4gIC53aWR0aF81e1xyXG5cclxuICB9XHJcbiAgLyogLndpZHRoXzZ7XHJcbiAgICB3aWR0aDogOTBweCAhaW1wb3J0YW50O1xyXG4gIH0gKi9cclxuICBcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTM1NHB4KSB7XHJcbiAgLyogLndpZHRoXzB7XHJcbiAgICB3aWR0aDogOTBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAud2lkdGhfMntcclxuICAgIHdpZHRoOiAxNDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAud2lkdGhfM3tcclxuICAgIHdpZHRoOiAxMzBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAud2lkdGhfNHtcclxuICAgIHdpZHRoOiAxMzFweCAhaW1wb3J0YW50O1xyXG4gIH0gKi9cclxuICAud2lkdGhfNXtcclxuXHJcbiAgfVxyXG4gIC8qIC53aWR0aF82e1xyXG4gICAgd2lkdGg6IDE1NXB4ICFpbXBvcnRhbnQ7XHJcbiAgfSAqL1xyXG59XHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQwMHB4KSB7XHJcblxyXG4gIC50b3BuYXZ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwNnB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMzA2cHg7XHJcbiAgICBib3JkZXItdG9wOnVuc2V0O1xyXG4gICAgYmFja2dyb3VuZDogdW5zZXQ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvbmF2L3RhYi5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMTAlIDU1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICB9XHJcbiAgLyogLndpZHRoXzB7XHJcbiAgICB3aWR0aDogOTBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAud2lkdGhfMntcclxuICAgIHdpZHRoOiAxMjdweCAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLndpZHRoXzN7XHJcbiAgICB3aWR0aDogMTIwcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLndpZHRoXzR7XHJcbiAgICB3aWR0aDogMTIxcHggIWltcG9ydGFudDtcclxuICB9ICovXHJcbiAgLndpZHRoXzV7XHJcblxyXG4gIH1cclxuICAvKiAud2lkdGhfNntcclxuICAgIHdpZHRoOiA5MHB4ICAhaW1wb3J0YW50O1xyXG4gIH0gKi9cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTUwMHB4KSB7XHJcblxyXG4gIC50b3BuYXZ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwNnB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMzA2cHg7XHJcbiAgICBib3JkZXItdG9wOnVuc2V0O1xyXG4gICAgYmFja2dyb3VuZDogdW5zZXQ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvbmF2L3RhYi5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMTAlIDU1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2MDBweCkge1xyXG4gIC50b3BuYXZ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6MjAwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMDBweDtcclxuICAgIGJvcmRlci10b3A6dW5zZXQ7XHJcbiAgICBiYWNrZ3JvdW5kOiB1bnNldDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9uYXYvdGFiLnBuZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEzNSUgNTVweDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTcwMHB4KSB7XHJcbiAgLnRvcG5hdntcclxuICAgIHBhZGRpbmctbGVmdDoyMDBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTkwMHB4KSB7XHJcbiAgLnRvcG5hdntcclxuICAgIHBhZGRpbmctbGVmdDogNDIwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA0MjBweDtcclxuICB9XHJcbiAgLnRvcG5hdntcclxuICAgIGJvcmRlci10b3A6dW5zZXQ7XHJcbiAgICBiYWNrZ3JvdW5kOiB1bnNldDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9uYXYvdGFiLnBuZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIH1cclxuICAvKiAud2lkdGhfMHtcclxuICAgIHdpZHRoOiA5NnB4ICAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAud2lkdGhfMntcclxuICAgIHdpZHRoOiAxMzlweCAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLndpZHRoXzN7XHJcbiAgICB3aWR0aDogMTIwcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLndpZHRoXzR7XHJcbiAgICB3aWR0aDogMTIxcHggIWltcG9ydGFudDtcclxuICB9ICovXHJcbiAgLndpZHRoXzV7XHJcbiAgIFxyXG4gICAgcGFkZGluZy1sZWZ0OjBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxuICB9XHJcbiAgLyogLndpZHRoXzZ7XHJcbiAgICB3aWR0aDogMTgwcHggICFpbXBvcnRhbnQ7XHJcbiAgfSAqL1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"topnav\" id=\"myTopnav\">\n    <div class=\"container\">\n        <ng-container *ngFor=\"let menu of menus; index as i; first as isFirst;let l = count\">\n            <a *ngIf=\"i==0\" [routerLinkActive]=\"['active-menu']\"  [routerLinkActiveOptions]=\"{exact:true}\" routerLink=\"/home\" class=\"cal_{{l+default_menu}} links active \">หน้าแรก</a>\n            \n            <a  [routerLinkActiveOptions]=\"{exact:true}\" [routerLinkActive]=\"['active-menu']\" routerLink=\"/page/{{menu.menu_route}}\" class=\"cal_{{l+default_menu}} links active \">{{menu.menu_name}}</a>\n            <a *ngIf=\"i==3\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLinkActive]=\"['active-menu']\" routerLink=\"/promotion\" class=\"cal_{{l+default_menu}} links active \">โปรโมชั่น</a>\n            \n\n        </ng-container>\n        \n    </div>\n            \n            <!-- <ng-container *ngIf='login_status_check!=\"1\"'>\n                <div class=\"link_nav cal_4\">\n                    <a [routerLinkActive]=\"['active-menu']\"  [routerLinkActiveOptions]=\"{exact:true}\" routerLink=\"/promotion\" class=\" links active \">ค่าบริการ</a>\n                </div>\n                <div class=\"link_nav cal_4\">\n                    <a [routerLinkActive]=\"['active-menu']\"  [routerLinkActiveOptions]=\"{exact:true}\" routerLink=\"/register\" class=\" links active \">สมัครสมาชิก</a>\n                </div>\n                <div class=\"link_nav cal_4\">\n                    <a [routerLinkActive]=\"['active-menu']\"  [routerLinkActiveOptions]=\"{exact:true}\" routerLink=\"/login\" class=\" links active \">เข้าสู่ระบบ</a>\n                </div>\n            </ng-container> -->\n            \n      <!-- <a [routerLinkActive]=\"['active-menu']\" [routerLinkActiveOptions]=\"{exact:true}\" href=\"javascript:void(0);\" class=\"icon\" onclick=\"myFunction()\">\n          <i class=\"fa fa-bars\"></i>\n      </a> -->\n  </div>\n\n  <div class=\"topnav_mobile\" id=\"myTopnav\">\n      <ng-container *ngFor=\"let menu of menus; index as i; first as isFirst;let l = count\">\n          <a [routerLinkActive]=\"['active-menu']\" *ngIf=\"i==0\" [routerLinkActiveOptions]=\"{exact:true}\" routerLink=\"/home\" class=\"btn_mobile btn  links active cal_{{l+2}}\">หน้าหลัก</a>\n          <a [routerLinkActive]=\"['active-menu']\" [routerLinkActiveOptions]=\"{exact:true}\" routerLink=\"/page/{{menu.menu_route}}\" class=\"btn_mobile btn  width_{{i+1}} links active cal_{{l+2}}\">{{menu.menu_name}}</a>\n          <a [routerLinkActive]=\"['active-menu']\" *ngIf=\"i==2\" [routerLinkActiveOptions]=\"{exact:true}\" routerLink=\"/promotion\" class=\"btn_mobile btn  links cal_{{l+2}}\" >โปรโมชั่น</a>\n      </ng-container>\n  </div>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/todo.service */ "./src/app/service/todo.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router, serviceMenu) {
        this.router = router;
        this.serviceMenu = serviceMenu;
        this.default_menu = 2;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem("login") == "success") {
            this.login_status_check = '1';
        }
        this.serviceMenu.getMenu().subscribe(function (response) {
            _this.menus = response;
        });
    };
    NavbarComponent.prototype.logout = function () {
        this.serviceMenu.setLoggedIn(false);
        localStorage.setItem("login", 'failed');
        this.router.navigate(['/home']);
        window.location.reload();
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_service_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/sanitize-html.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/sanitize-html.pipe.ts ***!
  \***************************************/
/*! exports provided: sanitizeHtmlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sanitizeHtmlPipe", function() { return sanitizeHtmlPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var sanitizeHtmlPipe = /** @class */ (function () {
    function sanitizeHtmlPipe(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    sanitizeHtmlPipe.prototype.transform = function (value) {
        return this._sanitizer.bypassSecurityTrustHtml(value);
    };
    sanitizeHtmlPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'sanitizeHtml' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], sanitizeHtmlPipe);
    return sanitizeHtmlPipe;
}());



/***/ }),

/***/ "./src/app/service/auth.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/auth.service.ts ***!
  \*****************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "../node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this._getStatusWebsite = "http://localhost:4800";
        this.statusWebsite = true;
    }
    AuthService.prototype.checkStatus = function () {
        return this.http.get("https://betufa55.com/api/dataAdjust.php?ac=getStatusWebsite").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
        // return this.statusWebsite;
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/service/todo.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/todo.service.ts ***!
  \*****************************************/
/*! exports provided: TodoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoService", function() { return TodoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "../node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");





var TodoService = /** @class */ (function () {
    function TodoService(http, http2) {
        this.http = http;
        this.http2 = http2;
        this.loggedInStatus = true;
        this.local = window.location.origin;
    }
    TodoService.prototype.setLoggedIn = function (value) {
        localStorage.setItem("login", 'success');
        this.loggedInStatus = value;
    };
    Object.defineProperty(TodoService.prototype, "isLoggedIn", {
        get: function () {
            return this.loggedInStatus;
        },
        enumerable: true,
        configurable: true
    });
    //private local = "http://localhost:80";
    //private local = "http://betufa55.com"; 
    TodoService.prototype.getTodoList = function (data) {
        if (data == 1) {
            return this.http.get(this.local + "/api/getNews.php?type=1&ac=all").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); }));
        }
        else {
            return this.http.get(this.local + "/api/getNews.php?type=1").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); }));
        }
    };
    TodoService.prototype.getDetailNews = function (id) {
        return this.http.get(this.local + "/api/dataAdjust.php?ac=getDetailNew&id=" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); }));
    };
    TodoService.prototype.getTextRegister = function () {
        //return this.http.get("http://conner888.com/api/dataAdjust.php?ac=getRegisterText").pipe(map((res)=>res.json()));
        return this.http.get(this.local + "/api/dataAdjust.php?ac=getRegisterText").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); }));
    };
    TodoService.prototype.getTextContext = function () {
        //return this.http.get("http://conner888.com/api/dataAdjust.php?ac=getContactText").pipe(map((res)=>res.json()));
        return this.http.get(this.local + "/api/dataAdjust.php?ac=getContactText").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); }));
    };
    TodoService.prototype.getTextPromotion = function () {
        return this.http.post(this.local + "/api/dataAdjust.php", { ac: "getPromotion", type: 2 }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); }));
    };
    TodoService.prototype.getTextHowtoplay = function () {
        return this.http.get(this.local + "/api/dataAdjust.php?ac=getHowtoplayText").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); }));
    };
    TodoService.prototype.getMenu = function () {
        // return this.http.post<adjustpageData>(this.host_config+'/api/dataAdjust.php',{ac:"saveAdjustPage",data:data});
        return this.http.post(this.local + '/api/dataAdjust.php', { ac: "getMenu", type: '1' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); }));
        ;
    };
    TodoService.prototype.getDataPage = function (data) {
        return this.http.post(this.local + "/api/dataAdjust.php", { ac: "getDataPage", data: data }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); }));
    };
    TodoService.prototype.getSlide = function () {
        // return this.http.post<adjustpageData>(this.host_config+'/api/dataAdjust.php',{ac:"saveAdjustPage",data:data});
        return this.http.post(this.local + '/api/dataAdjust.php', { ac: "getSlide", type: '1' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); }));
        ;
    };
    TodoService.prototype.getPopup = function () {
        // return this.http.post<adjustpageData>(this.host_config+'/api/dataAdjust.php',{ac:"saveAdjustPage",data:data});
        return this.http.post(this.local + '/api/dataAdjust.php', { ac: "getPopup" }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); }));
        ;
    };
    TodoService.prototype.getSetting = function () {
        return this.http.post(this.local + '/api/dataAdjust.php', { ac: "getSetting" }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); }));
    };
    TodoService.prototype.saveMember = function (data) {
        return this.http2.post(this.local + '/api/dataAdjust.php', { ac: "saveMember", data: data });
    };
    TodoService.prototype.ValidateUser = function (username, password) {
        return this.http2.post(this.local + '/api/dataAdjust.php?ac=login', { username: username, password: password });
        //return {success:true};
    };
    TodoService.prototype.saveLink = function (data, link) {
        return this.http2.post(this.local + '/api_nubshare/dataAdjust.php', { ac: "save_link", data: data, link: link });
    };
    TodoService.prototype.getDataLink = function (link) {
        return this.http2.get('http://localhost:3000/getContent/' + encodeURIComponent(link), {});
    };
    TodoService.prototype.getDataLike = function (link, data_id) {
        return this.http2.post('http://localhost:3000/getLike/' + encodeURIComponent(link), { data_id: data_id });
    };
    TodoService.prototype.getDataLike_from_mysql = function (data_id) {
        return this.http2.post(this.local + '/api_nubshare/dataAdjust.php', { ac: "get_user_like", data_id: data_id });
    };
    TodoService.prototype.saveDataLike = function (data_id, data_array_user_like) {
        return this.http2.post(this.local + '/api_nubshare/dataAdjust.php', { ac: "save_like", data_id: data_id, data_array_user_like: data_array_user_like });
    };
    TodoService.prototype.saveUserWin = function (data_id, user_id, user_name) {
        return this.http2.post(this.local + '/api_nubshare/dataAdjust.php', { ac: "save_user_win", data_id: data_id, user_id: user_id, user_name: user_name });
    };
    TodoService.prototype.getUserWin = function (data_id) {
        return this.http2.post(this.local + '/api_nubshare/dataAdjust.php', { ac: "get_user_win", data_id: data_id });
    };
    TodoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TodoService);
    return TodoService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "../node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\dev\dev\tsstar88\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.4bc6e4e7662167494ccd.js.map