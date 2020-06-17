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

/***/ "./src/app/Utils/TMTP.ts":
/*!*******************************!*\
  !*** ./src/app/Utils/TMTP.ts ***!
  \*******************************/
/*! exports provided: TMTP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TMTP", function() { return TMTP; });
var TMTP = /** @class */ (function () {
    function TMTP() {
    }
    TMTP.formatTimestamp = function (timestamp) {
        if (timestamp) {
            var date = new Date();
            date.setTime(timestamp);
            console.log('FORMATTING: ', timestamp, date.getTime());
            return date.getHours() + ':' +
                date.getMinutes() + ' ' +
                date.getDate() + '/' +
                (date.getMonth() + 1) + '/' +
                date.getFullYear();
        }
        else {
            return 'N/A';
        }
    };
    return TMTP;
}());



/***/ }),

/***/ "./src/app/Utils/UUID.ts":
/*!*******************************!*\
  !*** ./src/app/Utils/UUID.ts ***!
  \*******************************/
/*! exports provided: UUID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UUID", function() { return UUID; });
var UUID = /** @class */ (function () {
    function UUID() {
    }
    UUID.create = function (tpl) {
        if (!tpl) {
            tpl = 'xxxxxxxx';
        }
        var dt = new Date().getTime();
        var uuid = tpl.replace(/[xy]/g, function (c) {
            // tslint:disable-next-line:no-bitwise
            var r = (dt + Math.random() * 16) % 16 | 0;
            dt = Math.floor(dt / 16);
            // tslint:disable-next-line:no-bitwise
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return uuid;
    };
    return UUID;
}());



/***/ }),

/***/ "./src/app/Utils/dateParsed.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/Utils/dateParsed.pipe.ts ***!
  \******************************************/
/*! exports provided: DateParsedPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateParsedPipe", function() { return DateParsedPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _TMTP__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TMTP */ "./src/app/Utils/TMTP.ts");



var DateParsedPipe = /** @class */ (function () {
    function DateParsedPipe() {
    }
    DateParsedPipe.prototype.transform = function (value) {
        return _TMTP__WEBPACK_IMPORTED_MODULE_2__["TMTP"].formatTimestamp(value);
    };
    DateParsedPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'DateParsed'
        })
    ], DateParsedPipe);
    return DateParsedPipe;
}());



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
/* harmony import */ var _pages_extraction_extract_fingerprint_image_extract_fingerprint_image_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/extraction/extract-fingerprint-image/extract-fingerprint-image.component */ "./src/app/pages/extraction/extract-fingerprint-image/extract-fingerprint-image.component.ts");
/* harmony import */ var _pages_extraction_text_independent_voice_text_independent_voice_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/extraction/text-independent-voice/text-independent-voice.component */ "./src/app/pages/extraction/text-independent-voice/text-independent-voice.component.ts");
/* harmony import */ var _pages_extraction_text_dependent_voice_text_dependent_voice_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/extraction/text-dependent-voice/text-dependent-voice.component */ "./src/app/pages/extraction/text-dependent-voice/text-dependent-voice.component.ts");
/* harmony import */ var _pages_matching_identify_identify_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/matching/identify/identify.component */ "./src/app/pages/matching/identify/identify.component.ts");
/* harmony import */ var _pages_matching_verify_verify_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/matching/verify/verify.component */ "./src/app/pages/matching/verify/verify.component.ts");
/* harmony import */ var _pages_database_update_update_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/database/update/update.component */ "./src/app/pages/database/update/update.component.ts");
/* harmony import */ var _pages_database_list_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/database/list/list.component */ "./src/app/pages/database/list/list.component.ts");
/* harmony import */ var _pages_database_by_subject_by_subject_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/database/by-subject/by-subject.component */ "./src/app/pages/database/by-subject/by-subject.component.ts");
/* harmony import */ var _pages_document_extraction_dni_ar_dni_ar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/document-extraction/dni-ar/dni-ar.component */ "./src/app/pages/document-extraction/dni-ar/dni-ar.component.ts");
/* harmony import */ var _pages_extraction_extract_face_video_extract_face_video_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/extraction/extract-face-video/extract-face-video.component */ "./src/app/pages/extraction/extract-face-video/extract-face-video.component.ts");
/* harmony import */ var _pages_extraction_extract_face_image_extract_face_image_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/extraction/extract-face-image/extract-face-image.component */ "./src/app/pages/extraction/extract-face-image/extract-face-image.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_matching_verify_t2t_verify_t2t_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/matching/verify-t2t/verify-t2t.component */ "./src/app/pages/matching/verify-t2t/verify-t2t.component.ts");
/* harmony import */ var _pages_database_enroll_enroll_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/database/enroll/enroll.component */ "./src/app/pages/database/enroll/enroll.component.ts");

















var routes = [
    { path: '',
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
        data: { title: 'Dashboard' }
    },
    {
        path: 'extraction/extract-face-image',
        component: _pages_extraction_extract_face_image_extract_face_image_component__WEBPACK_IMPORTED_MODULE_11__["ExtractFaceImageComponent"],
        data: { title: 'Extract Face Image' }
    },
    {
        path: 'extraction/extract-face-video',
        component: _pages_extraction_extract_face_video_extract_face_video_component__WEBPACK_IMPORTED_MODULE_10__["ExtractFaceVideoComponent"],
        data: { title: 'Extract Face Video' }
    },
    {
        path: 'extraction/extract-fingerprint-image',
        component: _pages_extraction_extract_fingerprint_image_extract_fingerprint_image_component__WEBPACK_IMPORTED_MODULE_1__["ExtractFingerprintImageComponent"],
        data: { title: 'Extract Fingerprint Image' }
    },
    {
        path: 'matching/identify',
        component: _pages_matching_identify_identify_component__WEBPACK_IMPORTED_MODULE_4__["IdentifyComponent"],
        data: {
            title: 'Performs an identification (1:N) of supplied biometric data against enrolled subjects (that match optionally supplied conditions)'
        }
    },
    {
        path: 'extraction/text-dependent-voice',
        component: _pages_extraction_text_dependent_voice_text_dependent_voice_component__WEBPACK_IMPORTED_MODULE_3__["TextDependentVoiceComponent"],
        data: { title: 'Extract Text Dependent Voice' }
    },
    {
        path: 'extraction/text-independent-voice',
        component: _pages_extraction_text_independent_voice_text_independent_voice_component__WEBPACK_IMPORTED_MODULE_2__["TextIndependentVoiceComponent"],
        data: { title: 'Extract Text Independent Voice' }
    },
    {
        path: 'matching/verify',
        component: _pages_matching_verify_verify_component__WEBPACK_IMPORTED_MODULE_5__["VerifyComponent"],
        data: { title: 'Performs a verification (1:1) of supplied biometric data against a supplied enrolled subject id' }
    },
    {
        path: 'matching/verify-t2t',
        component: _pages_matching_verify_t2t_verify_t2t_component__WEBPACK_IMPORTED_MODULE_15__["VerifyT2tComponent"],
        data: { title: 'Verification (1:1) of two supplied biometric subjects' }
    },
    {
        path: 'document-extraction/dni-ar',
        component: _pages_document_extraction_dni_ar_dni_ar_component__WEBPACK_IMPORTED_MODULE_9__["DniArComponent"],
        data: { title: 'Extract Argentinean ID Card document information' }
    },
    {
        path: 'database/enroll',
        component: _pages_database_enroll_enroll_component__WEBPACK_IMPORTED_MODULE_16__["EnrollComponent"],
        data: { title: 'Performs a biometric enrollment supplied biometric data which is associated with supplied enrolled subject id' }
    },
    {
        path: 'database/by-subject',
        component: _pages_database_by_subject_by_subject_component__WEBPACK_IMPORTED_MODULE_8__["BySubjectComponent"],
        data: { title: 'Operations using subjectID' }
    },
    {
        path: 'database/list',
        component: _pages_database_list_list_component__WEBPACK_IMPORTED_MODULE_7__["ListComponent"],
        data: { title: 'List enrolled Subject ID\'s' }
    },
    {
        path: 'database/update',
        component: _pages_database_update_update_component__WEBPACK_IMPORTED_MODULE_6__["UpdateComponent"],
        data: { title: 'Updates biometric data of an already enrolled subject' }
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <app-menu></app-menu>\n  <section id=\"endpoint\">\n    <label>Api Endpoint</label>\n    <input type=\"text\" placeholder=\"API ENDPOINT\" [(ngModel)]=\"apiEndpoint\" (change)=\"apiChange()\"/>\n  </section>\n</header>\n<main>\n  <router-outlet></router-outlet>\n</main>\n<footer>\n  &copy; 2019 Software del Centro \n</footer>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  width: 20%;\n  float: left;\n  height: 100%;\n  background-color: #f9fafc; }\n  header section {\n    bottom: 30px;\n    width: 100%;\n    text-align: center;\n    border-top: 1px dotted gray;\n    margin-top: 10px;\n    padding-top: 10px; }\n  header section label {\n      font-family: helvetica;\n      color: #bbbbbb;\n      text-transform: uppercase;\n      font-size: 12px; }\n  header section input {\n      width: 80%;\n      border-radius: 3px;\n      border: 1px solid #d4d4d4;\n      padding: 5px; }\n  header section input:after {\n        content: 'Api Endpoint'; }\n  main {\n  width: 80%;\n  float: right;\n  height: 100%;\n  background-color: white;\n  box-shadow: 0px 0px 25px #eaeff3; }\n  footer {\n  position: absolute;\n  bottom: 10px;\n  width: 20%;\n  text-align: center;\n  font-family: helvetica;\n  color: gray;\n  font-size: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZHkvcmVwb3Mvc29iaW8vc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUIsRUFBQTtFQUo3QjtJQU1RLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLDJCQUEyQjtJQUMzQixnQkFBZ0I7SUFDaEIsaUJBQWlCLEVBQUE7RUFYekI7TUFhWSxzQkFBc0I7TUFDdEIsY0FBYztNQUNkLHlCQUF5QjtNQUN6QixlQUFlLEVBQUE7RUFoQjNCO01BbUJZLFVBQVU7TUFDVixrQkFBa0I7TUFDbEIseUJBQXlCO01BQ3pCLFlBQVksRUFBQTtFQXRCeEI7UUF3QmdCLHVCQUF1QixFQUFBO0VBS3ZDO0VBQ0ksVUFBVTtFQUNWLFlBQVk7RUFDWixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGdDQUFnQyxFQUFBO0VBRXBDO0VBQ0ksa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVyIHtcbiAgICB3aWR0aDogMjAlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmYWZjO1xuICAgIHNlY3Rpb24ge1xuICAgICAgICBib3R0b206IDMwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBkb3R0ZWQgZ3JheTtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBoZWx2ZXRpY2E7XG4gICAgICAgICAgICBjb2xvcjogI2JiYmJiYjtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNGQ0ZDQ7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAmOmFmdGVye1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdBcGkgRW5kcG9pbnQnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxubWFpbiB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjVweCAjZWFlZmYzO1xufVxuZm9vdGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAxMHB4O1xuICAgIHdpZHRoOiAyMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiBoZWx2ZXRpY2E7XG4gICAgY29sb3I6IGdyYXk7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufSJdfQ== */"

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
/* harmony import */ var _providers_database_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./providers/database.service */ "./src/app/providers/database.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _providers_extraction_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./providers/extraction.service */ "./src/app/providers/extraction.service.ts");
/* harmony import */ var _providers_matching_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./providers/matching.service */ "./src/app/providers/matching.service.ts");







var AppComponent = /** @class */ (function () {
    function AppComponent(eSrv, mSrv, dbSrv, route) {
        this.eSrv = eSrv;
        this.mSrv = mSrv;
        this.dbSrv = dbSrv;
        this.route = route;
        this.title = 'sobio-backoffice';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiEndpoint = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].endpoint;
        var onStorage = localStorage.getItem('apiUrl').toString();
        if (onStorage.length > 0) {
            this.apiEndpoint = onStorage;
        }
        this.route.fragment.subscribe(function (fragment) {
            var hash = fragment;
            if (hash) {
                var params = /api=([^&]+)/gmi.exec(hash);
                if (params) {
                    _this.apiEndpoint = decodeURIComponent(params[1]);
                    _this.apiChange();
                }
            }
        });
    };
    AppComponent.prototype.apiChange = function () {
        this.eSrv.reSetEndpoints(this.apiEndpoint);
        this.mSrv.reSetEndpoints(this.apiEndpoint);
        this.dbSrv.reSetEndpoints(this.apiEndpoint);
        localStorage.setItem('apiUrl', this.apiEndpoint);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_extraction_service__WEBPACK_IMPORTED_MODULE_5__["ExtractionService"],
            _providers_matching_service__WEBPACK_IMPORTED_MODULE_6__["MatchingService"],
            _providers_database_service__WEBPACK_IMPORTED_MODULE_1__["DatabaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var _pages_extraction_extract_face_image_extract_face_image_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/extraction/extract-face-image/extract-face-image.component */ "./src/app/pages/extraction/extract-face-image/extract-face-image.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_extraction_extract_face_video_extract_face_video_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/extraction/extract-face-video/extract-face-video.component */ "./src/app/pages/extraction/extract-face-video/extract-face-video.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/loader/loader.component */ "./src/app/components/loader/loader.component.ts");
/* harmony import */ var _pages_matching_verify_t2t_verify_t2t_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/matching/verify-t2t/verify-t2t.component */ "./src/app/pages/matching/verify-t2t/verify-t2t.component.ts");
/* harmony import */ var _pages_document_extraction_dni_ar_dni_ar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/document-extraction/dni-ar/dni-ar.component */ "./src/app/pages/document-extraction/dni-ar/dni-ar.component.ts");
/* harmony import */ var _components_gauge_gauge_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/gauge/gauge.component */ "./src/app/components/gauge/gauge.component.ts");
/* harmony import */ var _components_gauge_pipes_html_secure_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/gauge/pipes/html-secure.pipe */ "./src/app/components/gauge/pipes/html-secure.pipe.ts");
/* harmony import */ var _pages_database_enroll_enroll_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/database/enroll/enroll.component */ "./src/app/pages/database/enroll/enroll.component.ts");
/* harmony import */ var _pages_database_list_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/database/list/list.component */ "./src/app/pages/database/list/list.component.ts");
/* harmony import */ var _pages_database_by_subject_by_subject_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/database/by-subject/by-subject.component */ "./src/app/pages/database/by-subject/by-subject.component.ts");
/* harmony import */ var _pages_database_update_update_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/database/update/update.component */ "./src/app/pages/database/update/update.component.ts");
/* harmony import */ var _pages_matching_identify_identify_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/matching/identify/identify.component */ "./src/app/pages/matching/identify/identify.component.ts");
/* harmony import */ var _pages_matching_verify_verify_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/matching/verify/verify.component */ "./src/app/pages/matching/verify/verify.component.ts");
/* harmony import */ var _components_switch_switch_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/switch/switch.component */ "./src/app/components/switch/switch.component.ts");
/* harmony import */ var _Utils_dateParsed_pipe__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Utils/dateParsed.pipe */ "./src/app/Utils/dateParsed.pipe.ts");
/* harmony import */ var _pages_extraction_text_dependent_voice_text_dependent_voice_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/extraction/text-dependent-voice/text-dependent-voice.component */ "./src/app/pages/extraction/text-dependent-voice/text-dependent-voice.component.ts");
/* harmony import */ var _pages_extraction_text_independent_voice_text_independent_voice_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/extraction/text-independent-voice/text-independent-voice.component */ "./src/app/pages/extraction/text-independent-voice/text-independent-voice.component.ts");
/* harmony import */ var _pages_extraction_extract_fingerprint_image_extract_fingerprint_image_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/extraction/extract-fingerprint-image/extract-fingerprint-image.component */ "./src/app/pages/extraction/extract-fingerprint-image/extract-fingerprint-image.component.ts");




























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_7__["MenuComponent"],
                _pages_extraction_extract_face_image_extract_face_image_component__WEBPACK_IMPORTED_MODULE_8__["ExtractFaceImageComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _pages_extraction_extract_face_video_extract_face_video_component__WEBPACK_IMPORTED_MODULE_10__["ExtractFaceVideoComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
                _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_12__["LoaderComponent"],
                _pages_matching_verify_t2t_verify_t2t_component__WEBPACK_IMPORTED_MODULE_13__["VerifyT2tComponent"],
                _pages_document_extraction_dni_ar_dni_ar_component__WEBPACK_IMPORTED_MODULE_14__["DniArComponent"],
                _components_gauge_gauge_component__WEBPACK_IMPORTED_MODULE_15__["GaugeComponent"],
                _components_gauge_pipes_html_secure_pipe__WEBPACK_IMPORTED_MODULE_16__["HtmlSecurePipe"],
                _pages_database_enroll_enroll_component__WEBPACK_IMPORTED_MODULE_17__["EnrollComponent"],
                _pages_database_list_list_component__WEBPACK_IMPORTED_MODULE_18__["ListComponent"],
                _pages_database_by_subject_by_subject_component__WEBPACK_IMPORTED_MODULE_19__["BySubjectComponent"],
                _pages_database_update_update_component__WEBPACK_IMPORTED_MODULE_20__["UpdateComponent"],
                _pages_matching_identify_identify_component__WEBPACK_IMPORTED_MODULE_21__["IdentifyComponent"],
                _pages_matching_verify_verify_component__WEBPACK_IMPORTED_MODULE_22__["VerifyComponent"],
                _components_switch_switch_component__WEBPACK_IMPORTED_MODULE_23__["SwitchComponent"],
                _Utils_dateParsed_pipe__WEBPACK_IMPORTED_MODULE_24__["DateParsedPipe"],
                _pages_extraction_text_dependent_voice_text_dependent_voice_component__WEBPACK_IMPORTED_MODULE_25__["TextDependentVoiceComponent"],
                _pages_extraction_text_independent_voice_text_independent_voice_component__WEBPACK_IMPORTED_MODULE_26__["TextIndependentVoiceComponent"],
                _pages_extraction_extract_fingerprint_image_extract_fingerprint_image_component__WEBPACK_IMPORTED_MODULE_27__["ExtractFingerprintImageComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/gauge/gauge.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/gauge/gauge.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"parentWindow\">\n\n  <div class=\"mainCircle\" [style]=\"'height: '+size+'px' | styleSecure\">\n    <div class=\"radioColor\" [style]=\"'margin-top: '+size/4+'px; border-width: '+borderWeight+'px;width: '+size+'px; height: '+size+'px; transform: rotate('+grade+'deg);transition: transform '+animSeconds+'s; border-color: '+color | styleSecure\">\n    </div>\n  </div>\n  <!-- 45 - 225 = 180 -->\n  <div class=\"percentLabel\">\n    {{percent}}{{symbol}}\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/gauge/gauge.component.sass":
/*!*******************************************************!*\
  !*** ./src/app/components/gauge/gauge.component.sass ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".parentWindow {\n  display: inline-block;\n  position: relative; }\n  .parentWindow .percentLabel {\n    text-align: center;\n    margin-top: -18px;\n    font-family: helvetica;\n    font-weight: 100; }\n  .parentWindow .mainCircle {\n    display: inline-block;\n    margin: 0 auto;\n    overflow: hidden; }\n  .parentWindow .mainCircle .radioColor {\n      width: 0px;\n      height: 0px;\n      border-bottom: solid;\n      border-radius: 50%;\n      border-style: solid;\n      margin-top: 5px;\n      border-top-color: rgba(154, 154, 154, 0.3) !important;\n      border-left-color: rgba(154, 154, 154, 0.3) !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZHkvcmVwb3Mvc29iaW8vc3JjL2FwcC9jb21wb25lbnRzL2dhdWdlL2dhdWdlLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0kscUJBQXFCO0VBQ3JCLGtCQUFrQixFQUFBO0VBRnRCO0lBSVEsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsZ0JBQWdCLEVBQUE7RUFQeEI7SUFTUSxxQkFBcUI7SUFDckIsY0FBYztJQUNkLGdCQUFnQixFQUFBO0VBWHhCO01BYVksVUFBVTtNQUNWLFdBQVc7TUFDWCxvQkFBb0I7TUFDcEIsa0JBQWtCO01BQ2xCLG1CQUFtQjtNQUNuQixlQUFlO01BQ2YscURBQW9EO01BQ3BELHNEQUFxRCxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9nYXVnZS9nYXVnZS5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnBhcmVudFdpbmRvdyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAucGVyY2VudExhYmVsIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tdG9wOiAtMThweDtcbiAgICAgICAgZm9udC1mYW1pbHk6IGhlbHZldGljYTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDsgfVxuICAgIC5tYWluQ2lyY2xlIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgLnJhZGlvQ29sb3Ige1xuICAgICAgICAgICAgd2lkdGg6IDBweDtcbiAgICAgICAgICAgIGhlaWdodDogMHB4O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQ7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjogcmdiYSgxNTQsIDE1NCwgMTU0LCAwLjMpIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiByZ2JhKDE1NCwgMTU0LCAxNTQsIDAuMykhaW1wb3J0YW50OyB9IH0gfVxuIl19 */"

/***/ }),

/***/ "./src/app/components/gauge/gauge.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/gauge/gauge.component.ts ***!
  \*****************************************************/
/*! exports provided: GaugeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GaugeComponent", function() { return GaugeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GaugeComponent = /** @class */ (function () {
    function GaugeComponent() {
        this.symbol = '%';
        this.borderWeight = 15;
        this.size = 60;
        this.grade = 45;
        this.color = '#77cc93';
        this.animSeconds = 0.5;
    }
    GaugeComponent.prototype.ngOnInit = function () {
    };
    GaugeComponent.prototype.ngAfterViewInit = function () {
        this.render();
    };
    GaugeComponent.prototype.render = function () {
        this.grade = this.percent * 180 / 100 + 45;
    };
    GaugeComponent.prototype.ngOnChanges = function () {
        this.render();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], GaugeComponent.prototype, "percent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], GaugeComponent.prototype, "symbol", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], GaugeComponent.prototype, "borderWeight", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], GaugeComponent.prototype, "size", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], GaugeComponent.prototype, "color", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], GaugeComponent.prototype, "animSeconds", void 0);
    GaugeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gauge',
            template: __webpack_require__(/*! ./gauge.component.html */ "./src/app/components/gauge/gauge.component.html"),
            styles: [__webpack_require__(/*! ./gauge.component.sass */ "./src/app/components/gauge/gauge.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GaugeComponent);
    return GaugeComponent;
}());



/***/ }),

/***/ "./src/app/components/gauge/pipes/html-secure.pipe.ts":
/*!************************************************************!*\
  !*** ./src/app/components/gauge/pipes/html-secure.pipe.ts ***!
  \************************************************************/
/*! exports provided: HtmlSecurePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtmlSecurePipe", function() { return HtmlSecurePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var HtmlSecurePipe = /** @class */ (function () {
    function HtmlSecurePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    HtmlSecurePipe.prototype.transform = function (html) {
        return this.sanitizer.bypassSecurityTrustStyle(html);
    };
    HtmlSecurePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'styleSecure'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], HtmlSecurePipe);
    return HtmlSecurePipe;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n    <h2>{{title}}</h2>\n    <h3>{{subtitle}}</h3>\n</header>"

/***/ }),

/***/ "./src/app/components/header/header.component.sass":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.sass ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  text-transform: uppercase;\n  margin: 30px; }\n  header h2 {\n    color: #57616f;\n    font-family: helvetica;\n    margin: 0px; }\n  header h3 {\n    color: #57616fc2;\n    font-family: helvetica;\n    font-size: 15px;\n    margin: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZHkvcmVwb3Mvc29iaW8vc3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBeUI7RUFDekIsWUFBWSxFQUFBO0VBRmhCO0lBSVEsY0FBYztJQUNkLHNCQUFzQjtJQUN0QixXQUFXLEVBQUE7RUFObkI7SUFRUSxnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXIge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbWFyZ2luOiAzMHB4O1xuICAgIGgyIHtcbiAgICAgICAgY29sb3I6ICM1NzYxNmY7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBoZWx2ZXRpY2E7XG4gICAgICAgIG1hcmdpbjogMHB4OyB9XG4gICAgaDMge1xuICAgICAgICBjb2xvcjogIzU3NjE2ZmMyO1xuICAgICAgICBmb250LWZhbWlseTogaGVsdmV0aWNhO1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIG1hcmdpbjogMHB4OyB9IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], HeaderComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], HeaderComponent.prototype, "subtitle", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.sass */ "./src/app/components/header/header.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/loader/loader.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/loader/loader.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loading\" *ngIf=\"isLoading\">\n  <div class=\"spinner\"></div>\n</div>"

/***/ }),

/***/ "./src/app/components/loader/loader.component.sass":
/*!*********************************************************!*\
  !*** ./src/app/components/loader/loader.component.sass ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loading {\n  position: fixed;\n  top: 0px;\n  left: 20%;\n  width: 80%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n  .loading .spinner {\n    width: 50px;\n    height: 50px;\n    border: 0px;\n    border-top: 3px solid #009fff;\n    border-radius: 50px;\n    -webkit-animation: rotation 0.5s linear infinite;\n            animation: rotation 0.5s linear infinite; }\n  @-webkit-keyframes rotation {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n  @keyframes rotation {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZHkvcmVwb3Mvc29iaW8vc3JjL2FwcC9jb21wb25lbnRzL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFlO0VBQ2YsUUFBUTtFQUNSLFNBQVM7RUFDVCxVQUFVO0VBQ1YsWUFBWTtFQUNaLG9DQUFvQztFQUNwQyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QixFQUFBO0VBVDNCO0lBV1EsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixnREFBd0M7WUFBeEMsd0NBQXdDLEVBQUE7RUFFaEQ7RUFDSTtJQUNJLHVCQUF1QixFQUFBO0VBQzNCO0lBQ0kseUJBQXlCLEVBQUEsRUFBQTtFQUpqQztFQUNJO0lBQ0ksdUJBQXVCLEVBQUE7RUFDM0I7SUFDSSx5QkFBeUIsRUFBQSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvYWRpbmcge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDBweDtcbiAgICBsZWZ0OiAyMCU7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAuc3Bpbm5lciB7XG4gICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIGJvcmRlcjogMHB4O1xuICAgICAgICBib3JkZXItdG9wOiAzcHggc29saWQgIzAwOWZmZjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgYW5pbWF0aW9uOiByb3RhdGlvbiAwLjVzIGxpbmVhciBpbmZpbml0ZTsgfSB9XG5cbkBrZXlmcmFtZXMgcm90YXRpb24ge1xuICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfSB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/loader/loader.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/loader/loader.component.ts ***!
  \*******************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoaderComponent = /** @class */ (function () {
    function LoaderComponent() {
    }
    LoaderComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], LoaderComponent.prototype, "isLoading", void 0);
    LoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loader',
            template: __webpack_require__(/*! ./loader.component.html */ "./src/app/components/loader/loader.component.html"),
            styles: [__webpack_require__(/*! ./loader.component.sass */ "./src/app/components/loader/loader.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "./src/app/components/menu/menu.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/menu/menu.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"logo\">\n  <img src=\"assets/logo.png\" />\n</div>\n<nav>\n  <h2>Playground SOBIO</h2>\n  <ul>\n    <li class=\"disabled\">Audit rest ap iv 1</li>\n    <li class=\"disabled\">BIO rest ap iv 1</li>\n    <li class=\"disabled\">Extract Document Information AP iv 1</li>\n    <li class=\"disabled\">AUDIT</li>\n    <li>\n      <a class=\"deployable\" (click)=\"deployar(5)\" [class.opened]=\"deployados[5]\">EXTRACTION</a>\n      <ul *ngIf=\"deployados[5]\">\n        <li class=\"disabled\"><a href=\"\">concat audio stream</a></li>\n        <li><a routerLink=\"extraction/extract-face-image\" routerLinkActive=\"active\">extract face image</a></li>\n        <li><a routerLink=\"extraction/extract-face-video\" routerLinkActive=\"active\">extract face video</a></li>\n        <li><a routerLink=\"extraction/extract-fingerprint-image\" routerLinkActive=\"active\">extract fingerprint image</a></li>\n        <li><a routerLink=\"extraction/text-dependent-voice\" routerLinkActive=\"active\">extract text dependent voice</a></li>\n        <li><a routerLink=\"extraction/text-independent-voice\" routerLinkActive=\"active\">extract text independent voice</a></li>\n      </ul>\n    </li>\n    <li>\n        <a class=\"deployable\" (click)=\"deployar(6)\" [class.opened]=\"deployados[6]\">DATABASE</a>\n      <ul *ngIf=\"deployados[6]\">\n        <li><a routerLink=\"database/by-subject\" routerLinkActive=\"active\">By Subject</a></li>\n        <li><a routerLink=\"database/enroll\" routerLinkActive=\"active\">Enroll</a></li>\n        <li><a routerLink=\"database/list\" routerLinkActive=\"active\">List</a></li>\n        <li><a routerLink=\"database/update\" routerLinkActive=\"active\">Update</a></li>\n      </ul>\n    </li>\n    <li>\n      <a class=\"deployable\" (click)=\"deployar(7)\" [class.opened]=\"deployados[7]\">MATCHING</a>\n      <ul *ngIf=\"deployados[7]\">\n        <li><a routerLink=\"matching/identify\" routerLinkActive=\"active\">Identify</a></li>\n        <li><a routerLink=\"matching/verify\" routerLinkActive=\"active\">Verify</a></li>\n        <li><a routerLink=\"matching/verify-t2t\" routerLinkActive=\"active\">Verify t2t</a></li>\n      </ul>\n    </li>\n    <li>\n      <a class=\"deployable\" (click)=\"deployar(8)\" [class.opened]=\"deployados[8]\">DOCUMENT EXTRACTION</a>\n      <ul *ngIf=\"deployados[8]\">\n        <li><a routerLink=\"document-extraction/dni-ar\" routerLinkActive=\"active\">DNI Ar</a></li>\n      </ul>\n    </li>\n  </ul>\n</nav>"

/***/ }),

/***/ "./src/app/components/menu/menu.component.sass":
/*!*****************************************************!*\
  !*** ./src/app/components/menu/menu.component.sass ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo img {\n  max-width: 100%;\n  margin: 15px auto;\n  display: block; }\n\nnav {\n  font-family: helvetica;\n  padding: 0px 15px; }\n\nnav h2 {\n    color: #d1d9e3;\n    font-size: 18px; }\n\nnav > ul {\n    list-style: none;\n    padding: 0px;\n    text-transform: uppercase; }\n\nnav > ul li {\n      font-size: 14px;\n      color: #adb5c3;\n      margin: 10px 0px;\n      font-weight: bold; }\n\nnav > ul li > ul {\n        list-style: none; }\n\nnav > ul li a {\n        color: #adb5c3;\n        text-decoration: none;\n        cursor: pointer; }\n\nnav > ul li a:hover {\n          color: #66ccfd; }\n\nnav > ul li a.active {\n          color: #66ccfd; }\n\nnav > ul li.disabled {\n        color: #b9b9b991; }\n\nnav > ul li.disabled a {\n          color: #b9b9b991; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZHkvcmVwb3Mvc29iaW8vc3JjL2FwcC9jb21wb25lbnRzL21lbnUvbWVudS5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYyxFQUFBOztBQUN0QjtFQUNJLHNCQUFzQjtFQUN0QixpQkFBaUIsRUFBQTs7QUFGckI7SUFJUSxjQUFjO0lBQ2QsZUFBZSxFQUFBOztBQUx2QjtJQU9RLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1oseUJBQXlCLEVBQUE7O0FBVGpDO01BV1ksZUFBZTtNQUNmLGNBQWM7TUFDZCxnQkFBZ0I7TUFDaEIsaUJBQWlCLEVBQUE7O0FBZDdCO1FBZ0JnQixnQkFBZ0IsRUFBQTs7QUFoQmhDO1FBa0JnQixjQUFjO1FBQ2QscUJBQXFCO1FBQ3JCLGVBQWUsRUFBQTs7QUFwQi9CO1VBc0JvQixjQUFjLEVBQUE7O0FBdEJsQztVQXdCb0IsY0FBYyxFQUFBOztBQXhCbEM7UUEwQmdCLGdCQUFnQixFQUFBOztBQTFCaEM7VUE0Qm9CLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nbyB7XG4gICAgaW1nIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW46IDE1cHggYXV0bztcbiAgICAgICAgZGlzcGxheTogYmxvY2s7IH0gfVxubmF2IHtcbiAgICBmb250LWZhbWlseTogaGVsdmV0aWNhO1xuICAgIHBhZGRpbmc6IDBweCAxNXB4O1xuICAgIGgyIHtcbiAgICAgICAgY29sb3I6ICNkMWQ5ZTM7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDsgfVxuICAgID4gdWwge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGxpIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGNvbG9yOiAjYWRiNWMzO1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDBweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgPiB1bCB7XG4gICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTsgfVxuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNhZGI1YzM7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM2NmNjZmQ7IH1cbiAgICAgICAgICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNjZjY2ZkOyB9IH1cbiAgICAgICAgICAgICYuZGlzYWJsZWQge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjYjliOWI5OTE7XG4gICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjYjliOWI5OTE7IH0gfSB9IH0gfVxuXG5cbiJdfQ== */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
        this.deployados = [null];
        for (var i = 0; i < 8; i++) {
            this.deployados.push(false);
        }
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent.prototype.deployar = function (id) {
        var _this = this;
        this.deployados.forEach(function (value, idx) {
            _this.deployados[idx] = false;
        });
        this.deployados[id] = true;
    };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/components/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.sass */ "./src/app/components/menu/menu.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/components/switch/switch.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/switch/switch.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"switchComponent\" [class.on]=\"active\" (click)=\"doSwitch()\">\n  <div class=\"nameLabel off\">OFF</div>\n  <div class=\"background\">\n    <div class=\"toggler\"></div>\n  </div>\n  <div class=\"nameLabel on\">On</div>\n</div>"

/***/ }),

/***/ "./src/app/components/switch/switch.component.sass":
/*!*********************************************************!*\
  !*** ./src/app/components/switch/switch.component.sass ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".switchComponent {\n  display: inline-block;\n  cursor: pointer; }\n  .switchComponent .nameLabel {\n    display: inline-block;\n    text-transform: uppercase;\n    font-weight: bolder;\n    color: #949c9d;\n    font-size: 13px; }\n  .switchComponent .nameLabel.off {\n      color: #343434; }\n  .switchComponent .background {\n    display: inline-block;\n    position: relative;\n    height: 20px;\n    width: 45px;\n    background: white;\n    border-radius: 10px;\n    margin: 0px 10px;\n    vertical-align: middle;\n    box-shadow: inset 0px 1px 7px rgba(119, 119, 119, 0.25); }\n  .switchComponent .background .toggler {\n      position: absolute;\n      width: 22px;\n      height: 22px;\n      background: #f7f7f7;\n      border-radius: 15px;\n      top: -2px;\n      box-shadow: 0px 1px 3px #929292b0;\n      left: -2px;\n      transition: left 0.2s linear; }\n  .switchComponent.on .background .toggler {\n    left: 25px; }\n  .switchComponent.on .nameLabel.on {\n    color: #343434; }\n  .switchComponent.on .nameLabel.off {\n    color: #949c9d; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZHkvcmVwb3Mvc29iaW8vc3JjL2FwcC9jb21wb25lbnRzL3N3aXRjaC9zd2l0Y2guY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBcUI7RUFDckIsZUFBZSxFQUFBO0VBRm5CO0lBSVEscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGVBQWUsRUFBQTtFQVJ2QjtNQVVZLGNBQWMsRUFBQTtFQVYxQjtJQVlRLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsdURBQXVELEVBQUE7RUFwQi9EO01Bc0JZLGtCQUFrQjtNQUNsQixXQUFXO01BQ1gsWUFBWTtNQUNaLG1CQUFtQjtNQUNuQixtQkFBbUI7TUFDbkIsU0FBUztNQUNULGlDQUFpQztNQUNqQyxVQUFVO01BQ1YsNEJBQTRCLEVBQUE7RUE5QnhDO0lBa0NnQixVQUFVLEVBQUE7RUFsQzFCO0lBcUNnQixjQUFjLEVBQUE7RUFyQzlCO0lBdUNnQixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3N3aXRjaC9zd2l0Y2guY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3dpdGNoQ29tcG9uZW50IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIC5uYW1lTGFiZWwge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgICAgIGNvbG9yOiAjOTQ5YzlkO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICYub2ZmIHtcbiAgICAgICAgICAgIGNvbG9yOiAjMzQzNDM0OyB9IH1cbiAgICAuYmFja2dyb3VuZCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgIHdpZHRoOiA0NXB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgbWFyZ2luOiAwcHggMTBweDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDFweCA3cHggcmdiYSgxMTksIDExOSwgMTE5LCAwLjI1KTtcbiAgICAgICAgLnRvZ2dsZXIge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgd2lkdGg6IDIycHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDIycHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgICAgIHRvcDogLTJweDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxcHggM3B4ICM5MjkyOTJiMDtcbiAgICAgICAgICAgIGxlZnQ6IC0ycHg7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBsZWZ0IDAuMnMgbGluZWFyOyB9IH1cbiAgICAmLm9uIHtcbiAgICAgICAgLmJhY2tncm91bmQge1xuICAgICAgICAgICAgLnRvZ2dsZXIge1xuICAgICAgICAgICAgICAgIGxlZnQ6IDI1cHg7IH0gfVxuICAgICAgICAubmFtZUxhYmVsIHtcbiAgICAgICAgICAgICYub24ge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMzQzNDM0OyB9XG4gICAgICAgICAgICAmLm9mZiB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM5NDljOWQ7IH0gfSB9IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/switch/switch.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/switch/switch.component.ts ***!
  \*******************************************************/
/*! exports provided: SwitchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchComponent", function() { return SwitchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SwitchComponent = /** @class */ (function () {
    function SwitchComponent() {
        this.switch = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    SwitchComponent.prototype.ngOnInit = function () {
        if (typeof this.initStatus !== 'undefined') {
            this.active = this.initStatus;
        }
        else {
            this.active = false;
        }
    };
    SwitchComponent.prototype.doSwitch = function () {
        this.active = !this.active;
        this.switch.emit(this.active);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], SwitchComponent.prototype, "initStatus", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], SwitchComponent.prototype, "switch", void 0);
    SwitchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-switch',
            template: __webpack_require__(/*! ./switch.component.html */ "./src/app/components/switch/switch.component.html"),
            styles: [__webpack_require__(/*! ./switch.component.sass */ "./src/app/components/switch/switch.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SwitchComponent);
    return SwitchComponent;
}());



/***/ }),

/***/ "./src/app/dataTypeObjects/MaxResolutionsDNIExtraction.ts":
/*!****************************************************************!*\
  !*** ./src/app/dataTypeObjects/MaxResolutionsDNIExtraction.ts ***!
  \****************************************************************/
/*! exports provided: MaxResolutionsDNIExtraction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaxResolutionsDNIExtraction", function() { return MaxResolutionsDNIExtraction; });
var MaxResolutionsDNIExtraction;
(function (MaxResolutionsDNIExtraction) {
    MaxResolutionsDNIExtraction["MP_0_75"] = "MP_0_75";
    MaxResolutionsDNIExtraction["MP_1"] = "MP_1";
    MaxResolutionsDNIExtraction["MP_1_5"] = "MP_1_5";
    MaxResolutionsDNIExtraction["MP_2"] = "MP_2";
    MaxResolutionsDNIExtraction["MP_2_5"] = "MP_2_5";
    MaxResolutionsDNIExtraction["UNLIMITED"] = "UNLIMITED";
})(MaxResolutionsDNIExtraction || (MaxResolutionsDNIExtraction = {}));


/***/ }),

/***/ "./src/app/dataTypeObjects/bioList.ts":
/*!********************************************!*\
  !*** ./src/app/dataTypeObjects/bioList.ts ***!
  \********************************************/
/*! exports provided: BioList, ConditionsBioList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BioList", function() { return BioList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConditionsBioList", function() { return ConditionsBioList; });
var BioList = /** @class */ (function () {
    function BioList() {
        this.conditions = new ConditionsBioList();
    }
    return BioList;
}());

var ConditionsBioList = /** @class */ (function () {
    function ConditionsBioList() {
    }
    return ConditionsBioList;
}());



/***/ }),

/***/ "./src/app/dataTypeObjects/dniAr.ts":
/*!******************************************!*\
  !*** ./src/app/dataTypeObjects/dniAr.ts ***!
  \******************************************/
/*! exports provided: DniArParameters, DniAr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DniArParameters", function() { return DniArParameters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DniAr", function() { return DniAr; });
/* harmony import */ var _MaxResolutionsDNIExtraction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MaxResolutionsDNIExtraction */ "./src/app/dataTypeObjects/MaxResolutionsDNIExtraction.ts");

var DniArParameters = /** @class */ (function () {
    function DniArParameters() {
        this.extractPDF417 = true;
        this.extractMRZ = true;
        this.extractFace = true;
        this.useCache = true;
        this.extractAddress = false;
    }
    return DniArParameters;
}());

var DniAr = /** @class */ (function () {
    function DniAr() {
        this.maxImageResolution = _MaxResolutionsDNIExtraction__WEBPACK_IMPORTED_MODULE_0__["MaxResolutionsDNIExtraction"].UNLIMITED;
        this.params = new DniArParameters();
    }
    return DniAr;
}());



/***/ }),

/***/ "./src/app/dataTypeObjects/enroll.ts":
/*!*******************************************!*\
  !*** ./src/app/dataTypeObjects/enroll.ts ***!
  \*******************************************/
/*! exports provided: Enroll, EnrollParams, EnrollConditions, DuplicateSearchParameters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Enroll", function() { return Enroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnrollParams", function() { return EnrollParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnrollConditions", function() { return EnrollConditions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuplicateSearchParameters", function() { return DuplicateSearchParameters; });
/* harmony import */ var _verifyT2t__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verifyT2t */ "./src/app/dataTypeObjects/verifyT2t.ts");

var Enroll = /** @class */ (function () {
    function Enroll() {
        this.bioInfo = new _verifyT2t__WEBPACK_IMPORTED_MODULE_0__["BioInfo"]();
        this.params = new EnrollParams();
    }
    return Enroll;
}());

var EnrollParams = /** @class */ (function () {
    function EnrollParams() {
        this.conditions = new EnrollConditions();
        this.duplicateSearchParameters = new DuplicateSearchParameters();
    }
    return EnrollParams;
}());

var EnrollConditions = /** @class */ (function () {
    function EnrollConditions() {
    }
    return EnrollConditions;
}());

var DuplicateSearchParameters = /** @class */ (function () {
    function DuplicateSearchParameters() {
        this.conditions = new EnrollConditions();
        this.far = 1;
        this.fingerPrintMatchingParams = new _verifyT2t__WEBPACK_IMPORTED_MODULE_0__["FingerPrintMatchingParams"]();
    }
    return DuplicateSearchParameters;
}());



/***/ }),

/***/ "./src/app/dataTypeObjects/extractFace.ts":
/*!************************************************!*\
  !*** ./src/app/dataTypeObjects/extractFace.ts ***!
  \************************************************/
/*! exports provided: ExtractFace, FacePoseSensibility, Params */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtractFace", function() { return ExtractFace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacePoseSensibility", function() { return FacePoseSensibility; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Params", function() { return Params; });
var ExtractFace = /** @class */ (function () {
    function ExtractFace() {
        this.params = new Params();
    }
    return ExtractFace;
}());

var FacePoseSensibility = /** @class */ (function () {
    function FacePoseSensibility() {
        this.lookingDownwardsPitchAngle = -20.0;
        this.lookingFront = 8.0;
        this.lookingLeftYawAngle = -20.0;
        this.lookingRightYawAngle = 20.0;
        this.lookingUpwardsPitchAngle = 10.0;
    }
    return FacePoseSensibility;
}());

var Params = /** @class */ (function () {
    function Params() {
        this.blinkSensibility = 3;
        this.detectAge = false;
        this.detectEmotion = false;
        this.detectExpression = false;
        this.detectGender = false;
        this.detectOnlyMajorFace = false;
        this.detectTraitsAndActions = false;
        this.facePoseSensibility = new FacePoseSensibility();
        this.maxCLAHE = 10;
        this.maxRoll = 90;
        this.maxYaw = 90;
        this.minCLAHE = 4;
        this.minConfidence = 80;
        this.minIOD = 30;
        this.minQuality = 10;
        this.scaleH = 0;
        this.thumbnailWidth = 128;
        this.useCLAHE = true;
        this.useCache = true;
        this.videoFramesSeq = 1;
    }
    return Params;
}());



/***/ }),

/***/ "./src/app/dataTypeObjects/faceImage.ts":
/*!**********************************************!*\
  !*** ./src/app/dataTypeObjects/faceImage.ts ***!
  \**********************************************/
/*! exports provided: FaceImageDTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaceImageDTO", function() { return FaceImageDTO; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _extractFace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extractFace */ "./src/app/dataTypeObjects/extractFace.ts");


var FaceImageDTO = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FaceImageDTO, _super);
    function FaceImageDTO() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FaceImageDTO;
}(_extractFace__WEBPACK_IMPORTED_MODULE_1__["ExtractFace"]));



/***/ }),

/***/ "./src/app/dataTypeObjects/faceVideo.ts":
/*!**********************************************!*\
  !*** ./src/app/dataTypeObjects/faceVideo.ts ***!
  \**********************************************/
/*! exports provided: FaceVideoDTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaceVideoDTO", function() { return FaceVideoDTO; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _extractFace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extractFace */ "./src/app/dataTypeObjects/extractFace.ts");


var FaceVideoDTO = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FaceVideoDTO, _super);
    function FaceVideoDTO() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FaceVideoDTO;
}(_extractFace__WEBPACK_IMPORTED_MODULE_1__["ExtractFace"]));



/***/ }),

/***/ "./src/app/dataTypeObjects/fingerPrintImage.ts":
/*!*****************************************************!*\
  !*** ./src/app/dataTypeObjects/fingerPrintImage.ts ***!
  \*****************************************************/
/*! exports provided: FingerPrintImage, FingerPrintParams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FingerPrintImage", function() { return FingerPrintImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FingerPrintParams", function() { return FingerPrintParams; });
var FingerPrintImage = /** @class */ (function () {
    function FingerPrintImage() {
        this.params = new FingerPrintParams();
    }
    return FingerPrintImage;
}());

var FingerPrintParams = /** @class */ (function () {
    function FingerPrintParams() {
        this.determinePatternClass = false;
        this.evaluateNFIQ = false;
        this.imageSource = 'LIVE_FINGERPRINT';
        this.maxRotation = 45;
        this.minQuality = 25;
        this.position = 'UNKNOWN';
        this.useCache = true;
        this.useOnlyAnsi378 = false;
    }
    return FingerPrintParams;
}());



/***/ }),

/***/ "./src/app/dataTypeObjects/identify.ts":
/*!*********************************************!*\
  !*** ./src/app/dataTypeObjects/identify.ts ***!
  \*********************************************/
/*! exports provided: Identify */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Identify", function() { return Identify; });
/* harmony import */ var _verifyT2t__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verifyT2t */ "./src/app/dataTypeObjects/verifyT2t.ts");
/* harmony import */ var _enroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enroll */ "./src/app/dataTypeObjects/enroll.ts");


var Identify = /** @class */ (function () {
    function Identify() {
        this.bioInfo = new _verifyT2t__WEBPACK_IMPORTED_MODULE_0__["BioInfo"]();
        this.params = new _enroll__WEBPACK_IMPORTED_MODULE_1__["DuplicateSearchParameters"]();
    }
    return Identify;
}());



/***/ }),

/***/ "./src/app/dataTypeObjects/textDependentVoice.ts":
/*!*******************************************************!*\
  !*** ./src/app/dataTypeObjects/textDependentVoice.ts ***!
  \*******************************************************/
/*! exports provided: TextDependentVoice, VoiceParams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextDependentVoice", function() { return TextDependentVoice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoiceParams", function() { return VoiceParams; });
var TextDependentVoice = /** @class */ (function () {
    function TextDependentVoice() {
        this.params = new VoiceParams();
    }
    return TextDependentVoice;
}());

var VoiceParams = /** @class */ (function () {
    function VoiceParams() {
        this.minDuration = 1500;
        this.minLevel = 0.05;
        this.useCache = true;
    }
    return VoiceParams;
}());



/***/ }),

/***/ "./src/app/dataTypeObjects/textIndependentVoice.ts":
/*!*********************************************************!*\
  !*** ./src/app/dataTypeObjects/textIndependentVoice.ts ***!
  \*********************************************************/
/*! exports provided: TextIndependentVoice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextIndependentVoice", function() { return TextIndependentVoice; });
/* harmony import */ var _textDependentVoice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./textDependentVoice */ "./src/app/dataTypeObjects/textDependentVoice.ts");

var TextIndependentVoice = /** @class */ (function () {
    function TextIndependentVoice() {
        this.params = new _textDependentVoice__WEBPACK_IMPORTED_MODULE_0__["VoiceParams"]();
    }
    return TextIndependentVoice;
}());



/***/ }),

/***/ "./src/app/dataTypeObjects/update.ts":
/*!*******************************************!*\
  !*** ./src/app/dataTypeObjects/update.ts ***!
  \*******************************************/
/*! exports provided: Update */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Update", function() { return Update; });
/* harmony import */ var _enroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enroll */ "./src/app/dataTypeObjects/enroll.ts");
/* harmony import */ var _verifyT2t__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verifyT2t */ "./src/app/dataTypeObjects/verifyT2t.ts");


var Update = /** @class */ (function () {
    function Update() {
        this.bioInfo = new _verifyT2t__WEBPACK_IMPORTED_MODULE_1__["BioInfo"]();
        this.params = new _enroll__WEBPACK_IMPORTED_MODULE_0__["EnrollParams"]();
    }
    return Update;
}());



/***/ }),

/***/ "./src/app/dataTypeObjects/verify.ts":
/*!*******************************************!*\
  !*** ./src/app/dataTypeObjects/verify.ts ***!
  \*******************************************/
/*! exports provided: Verify, VerifyParams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Verify", function() { return Verify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyParams", function() { return VerifyParams; });
/* harmony import */ var _verifyT2t__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verifyT2t */ "./src/app/dataTypeObjects/verifyT2t.ts");

var Verify = /** @class */ (function () {
    function Verify() {
        this.bioInfo = new _verifyT2t__WEBPACK_IMPORTED_MODULE_0__["BioInfo"]();
        this.params = new VerifyParams();
    }
    return Verify;
}());

var VerifyParams = /** @class */ (function () {
    function VerifyParams() {
        // far = 1;
        this.fingerPrintMatchingParams = new _verifyT2t__WEBPACK_IMPORTED_MODULE_0__["FingerPrintMatchingParams"]();
    }
    return VerifyParams;
}());



/***/ }),

/***/ "./src/app/dataTypeObjects/verifyT2t.ts":
/*!**********************************************!*\
  !*** ./src/app/dataTypeObjects/verifyT2t.ts ***!
  \**********************************************/
/*! exports provided: FingerPrintMatchingParams, T2tParams, CompositeFingerPrints, Faces, FingerPrints, TextDependentVoices, TextIndependentVoice, BioInfo, VerifyT2t */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FingerPrintMatchingParams", function() { return FingerPrintMatchingParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T2tParams", function() { return T2tParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompositeFingerPrints", function() { return CompositeFingerPrints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Faces", function() { return Faces; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FingerPrints", function() { return FingerPrints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextDependentVoices", function() { return TextDependentVoices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextIndependentVoice", function() { return TextIndependentVoice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BioInfo", function() { return BioInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyT2t", function() { return VerifyT2t; });
var FingerPrintMatchingParams = /** @class */ (function () {
    function FingerPrintMatchingParams() {
        this.maxRotation = 45;
        this.useOnlyAnsi378 = true;
    }
    return FingerPrintMatchingParams;
}());

var T2tParams = /** @class */ (function () {
    function T2tParams() {
        // far = 1;
        this.fingerPrintMatchingParams = new FingerPrintMatchingParams();
    }
    return T2tParams;
}());

var CompositeFingerPrints = /** @class */ (function () {
    function CompositeFingerPrints() {
        this.dedo = 'RIGHT_THUMB';
        this.source = 'LIVE_FINGERPRINT';
    }
    return CompositeFingerPrints;
}());

var Faces = /** @class */ (function () {
    function Faces() {
    }
    return Faces;
}());

var FingerPrints = /** @class */ (function () {
    function FingerPrints() {
        this.formatoTemplate = 'ANSI378';
        this.imageSource = 'LIVE_FINGERPRINT';
        this.position = 'RIGHT_THUMB';
    }
    return FingerPrints;
}());

var TextDependentVoices = /** @class */ (function () {
    function TextDependentVoices() {
    }
    return TextDependentVoices;
}());

var TextIndependentVoice = /** @class */ (function () {
    function TextIndependentVoice() {
    }
    return TextIndependentVoice;
}());

var BioInfo = /** @class */ (function () {
    function BioInfo() {
        this.compositeFingerPrints = [];
        this.faces = [new Faces()];
        this.fingerPrints = [];
        this.textDependentVoices = [];
        this.textIndependentVoice = new TextIndependentVoice();
    }
    return BioInfo;
}());

var VerifyT2t = /** @class */ (function () {
    function VerifyT2t() {
        this.bioInfo1 = new BioInfo();
        this.bioInfo2 = new BioInfo();
        this.params = new T2tParams();
    }
    return VerifyT2t;
}());



/***/ }),

/***/ "./src/app/pages/database/by-subject/by-subject.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/pages/database/by-subject/by-subject.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header title=\"Database :: Operations by subject\" subtitle=\"Delete, download zip, get data or info by subject\"></app-header>\n<app-loader [isLoading]=\"loading\"></app-loader>\n\n<section id=\"response\" *ngIf=\"step==2\">\n    <!-- DELETE RESPONSE -->\n    <div class=\"url\"><span class=\"method\">POST</span> {{urlEndpoint}}</div>\n    <code [class.error]=\"error\">\n       {{jsonResponse}}\n    </code>\n    <div class=\"responses\" *ngIf=\"responseDalete\">\n        <div class=\"responseProcessed\">\n            <div class=\"dataBlock\">\n                <label>TxId:</label>\n                <div class=\"dataContent\">\n                    {{responseDalete.txId}}\n                </div>\n            </div>\n            <div class=\"dataBlock\">\n                <label>Status:</label>\n                <div class=\"dataContent\">\n                    {{responseDalete.status}}\n                </div>\n            </div>\n        </div>\n    </div>\n    <button type=\"button\" class=\"send\" (click)=\"step = 1\">Retry</button>\n</section>\n\n<section id=\"response\" *ngIf=\"step==3\">\n    <!-- DOWNZIP RESPONSE -->\n    <div class=\"url\"><span class=\"method\">GET</span> {{urlEndpoint}}</div>\n    <code [class.error]=\"error\">\n       {{jsonResponse}}\n    </code>\n    <div class=\"responses\" *ngIf=\"responseDownzip\">\n        <div class=\"responseProcessed\">\n            <div class=\"dataBlock\">\n                <label>Description:</label>\n                <div class=\"dataContent\">\n                    {{responseDownzip.description}}\n                </div>\n            </div>\n            <div class=\"dataBlock\">\n                <label>File:</label>\n                <div class=\"dataContent\">\n                    <ul>\n                        <li>Absolute\n                            <b *ngIf=\"responseDownzip.file.absolute\">YES</b>\n                            <b *ngIf=\"!responseDownzip.file.absolute\">NO</b>\n                        </li>\n                        <li>Absolute path <b>{{responseDownzip.file.absolutePath}}</b></li>\n                        <li>Canonical path <b>{{responseDownzip.file.canonicalPath}}</b></li>\n                        <li>Directory\n                            <b *ngIf=\"responseDownzip.file.directory\">YES</b>\n                            <b *ngIf=\"!responseDownzip.file.directory\">NO</b>\n                        </li>\n                        <li>File\n                            <b *ngIf=\"responseDownzip.file.file\">YES</b>\n                            <b *ngIf=\"!responseDownzip.file.file\">NO</b>\n                        </li>\n                        <li>Free space <b>{{responseDownzip.file.freeSpace}}</b></li>\n                        <li>Hidden\n                            <b *ngIf=\"responseDownzip.file.hidden\">YES</b>\n                            <b *ngIf=\"!responseDownzip.file.hidden\">NO</b>\n                        </li>\n                        <li>Name <b>{{responseDownzip.file.name}}</b></li>\n                        <li>Parent <b>{{responseDownzip.file.parent}}</b></li>\n                        <li>Path <b>{{responseDownzip.file.path}}</b></li>\n                        <li>Total space <b>{{responseDownzip.file.totalSpace}}</b></li>\n                        <li>Usable Space <b>{{responseDownzip.file.usableSpace}}</b></li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"dataBlock\">\n                <label>Filename:</label>\n                <div class=\"dataContent\">\n                    {{responseDownzip.filename}}\n                </div>\n            </div>\n            <div class=\"dataBlock\">\n                <label>Open:</label>\n                <div class=\"dataContent\">\n                    <b *ngIf=\"responseDownzip.open\">YES</b>\n                    <b *ngIf=\"!responseDownzip.open\">NO</b>\n                </div>\n            </div>\n            <div class=\"dataBlock\">\n                <label>Readable:</label>\n                <div class=\"dataContent\">\n                    <b *ngIf=\"responseDownzip.readable\">YES</b>\n                    <b *ngIf=\"!responseDownzip.readable\">NO</b>\n                </div>\n            </div>\n            <div class=\"dataBlock\">\n                <label>URI:</label>\n                <div class=\"dataContent\">\n                    <ul *ngIf=\"responseDownzip.file\">\n                        <li>Absolute\n                            <b *ngIf=\"responseDownzip.file.absolute\">YES</b>\n                            <b *ngIf=\"!responseDownzip.file.absolute\">NO</b>\n                        </li>\n                        <li>Authority <b>{{responseDownzip.uri.authority}}</b></li>\n                        <li>Fragment <b>{{responseDownzip.uri.fragment}}</b></li>\n                        <li>Host <b>{{responseDownzip.uri.host}}</b></li>\n                        <li>Opaque\n                            <b *ngIf=\"responseDownzip.file.opaque\">YES</b>\n                            <b *ngIf=\"!responseDownzip.file.opaque\">NO</b>\n                        </li>\n                        <li>Path <b>{{responseDownzip.uri.path}}</b></li>\n                        <li>Port <b>{{responseDownzip.uri.port}}</b></li>\n                        <li>Query <b>{{responseDownzip.uri.query}}</b></li>\n                        <li>Raw authority <b>{{responseDownzip.uri.rawAuthority}}</b></li>\n                        <li>Raw fragment <b>{{responseDownzip.uri.rawFragment}}</b></li>\n                        <li>Raw path <b>{{responseDownzip.uri.rawPath}}</b></li>\n                        <li>Raw query <b>{{responseDownzip.uri.rawQuery}}</b></li>\n                        <li>Raw Scheme Specific Part <b>{{responseDownzip.uri.rawSchemeSpecificPart}}</b></li>\n                        <li>Raw User Info <b>{{responseDownzip.uri.rawUserInfo}}</b></li>\n                        <li>Scheme <b>{{responseDownzip.uri.scheme}}</b></li>\n                        <li>Scheme Specific Part <b>{{responseDownzip.uri.schemeSpecificPart}}</b></li>\n                        <li>User Info <b>{{responseDownzip.uri.userInfo}}</b></li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"dataBlock\">\n                <label>URL:</label>\n                <div class=\"dataContent\">\n                    <ul *ngIf=\"responseDownzip.url\">\n                        <li>Authority <b>{{responseDownzip.url.authority}}</b></li>\n                        <li>Default port <b>{{responseDownzip.url.defaultPort}}</b></li>\n                        <li>File <b>{{responseDownzip.url.file}}</b></li>\n                        <li>Host <b>{{responseDownzip.url.host}}</b></li>\n                        <li>Path <b>{{responseDownzip.url.path}}</b></li>\n                        <li>Port <b>{{responseDownzip.url.port}}</b></li>\n                        <li>Protocol <b>{{responseDownzip.url.protocol}}</b></li>\n                        <li>Query <b>{{responseDownzip.url.query}}</b></li>\n                        <li>Ref <b>{{responseDownzip.url.ref}}</b></li>\n                        <li>User Info <b>{{responseDownzip.url.userInfo}}</b></li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n    <button type=\"button\" class=\"send\" (click)=\"step = 1\">Retry</button>\n</section>\n\n<section id=\"response\" *ngIf=\"step==4\">\n    <!-- DATA RESPONSE -->\n    <div class=\"url\"><span class=\"method\">POST</span> {{urlEndpoint}}</div>\n    <code [class.error]=\"error\">\n       {{jsonResponse}}\n    </code>\n    <div class=\"responses\" *ngIf=\"responseData\">\n        <div class=\"responseProcessed\">\n            <div class=\"dataBlock\">\n                <label>TxId:</label>\n                <div class=\"dataContent\">\n                    {{responseData.txId}}\n                </div>\n            </div>\n            <div class=\"dataBlock\">\n                <label>Status:</label>\n                <div class=\"dataContent\">\n                    {{responseData.status}}\n                </div>\n            </div>\n            <div class=\"dataBlock\">\n                <label>Exception:</label>\n                <div class=\"dataContent\">\n                    <b *ngIf=\"responseData.exception\">YES</b>\n                    <b *ngIf=\"!responseData.exception\">NO</b>\n                </div>\n            </div>\n            <div class=\"dataBlock\">\n                <label style=\"display: block; text-align: left;\">Composite Finger Prints:</label>\n                <div class=\"dataContent fixedTPLUL\" *ngIf=\"responseData.template.compositeFingerPrints\">\n                    <ul *ngFor=\"let cfp of responseData.template.compositeFingerPrints; let idx = index\">\n                        <li>\n                            <label>Finger</label>\n                            {{cfp.dedo}}\n                        </li>\n                        <li>\n                            <label>Images</label>\n                            <img  *ngFor=\"let cfpimage of cfp.images\" src=\"'data:image/png;base64,'+cfpimage\"/>\n                        </li>\n                        <li>\n                            <label>Source</label>\n                            {{cfp.source}}\n                        </li>\n                        <li>\n                            <label>Template</label>\n                            <div class=\"copy\" (click)=\"copyComposite(idx)\"><img src=\"assets/copy.png\" /></div>\n                            <div class=\"dataTemplate\" id=\"tplComposite{{idx}}\">\n                                {{cfp.template}}\n                            </div>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"dataBlock\">\n                <label style=\"display: block; text-align: left;\">Faces:</label>\n                <div class=\"dataContent fixedTPLUL\" *ngIf=\"responseData.template.faces\">\n                    <ul *ngFor=\"let face of responseData.template.faces; let idx = index\">\n                        <li *ngIf=\"face.image\">\n                            <label>Image</label>\n                            <img [src]=\"'data:image/png;base64,'+face.image\" />\n                        </li>\n                        <li>\n                            <label>Template</label>\n                            <div class=\"copy\" (click)=\"copyFaces(idx)\"><img src=\"assets/copy.png\" /></div>\n                            <div class=\"dataTemplate\" id=\"tplFaces{{idx}}\">\n                                {{face.template}}\n                            </div>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"dataBlock\">\n                <label style=\"display: block; text-align: left;\">Finger Prints:</label>\n                <div class=\"dataContent fixedTPLUL\" *ngIf=\"responseData.template.fingerPrints\">\n                    <ul *ngFor=\"let fPrint of responseData.template.fingerPrints; let idx = index\">\n                        <li>\n                            <label>Template Format</label>\n                            {{fPrint.formatoTemplate}}\n                        </li>\n                        <li *ngIf=\"fPrint.image\">\n                            <label>Image</label>\n                            <img [src]=\"'data:image/png;base64,'+fPrint.image\" />\n                        </li>\n                        <li>\n                            <label>Image Source</label>\n                            {{fPrint.imageSource}}\n                        </li>\n                        <li>\n                            <label>Position</label>\n                            {{fPrint.position}}\n                        </li>\n                        <li>\n                            <label>Template</label>\n                            <div class=\"copy\" (click)=\"copyFingerPrint(idx)\"><img src=\"assets/copy.png\" /></div>\n                            <div class=\"dataTemplate\" id=\"tplFingerPrints{{idx}}\">\n                                {{fPrint.template}}\n                            </div>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"dataBlock\">\n                <label style=\"display: block; text-align: left;\">Text Depndent Voices:</label>\n                <div class=\"dataContent fixedTPLUL\" *ngIf=\"responseData.template.textDependentVoices\">\n                    <ul *ngFor=\"let tdv of responseData.template.textDependentVoices; let idx = index\">\n                        <li>\n                            <label>Audio</label>\n                            {{tdv.audio}}\n                        </li>\n                        <li>\n                            <label>Phrase ID</label>\n                            {{td.phraseId}}\n                        </li>\n                        <li>\n                            <label>Template</label>\n                            <div class=\"copy\" (click)=\"copyTDV(idx)\"><img src=\"assets/copy.png\" /></div>\n                            <div class=\"dataTemplate\" id=\"tplTDV{{idx}}\">\n                                {{tdv.template}}\n                            </div>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"dataBlock\">\n                <label style=\"display: block; text-align: left;\">Text Independent Voices:</label>\n                <div class=\"dataContent fixedTPLUL\" *ngIf=\"responseData.template.textIndependentVoice\">\n                    <ul>\n                        <li *ngIf=\"responseData.template.textIndependentVoice.audio\">\n                            <label>Audio</label>\n                            {{responseData.template.textIndependentVoice.audio}}\n                        </li>\n                        <li *ngIf=\"responseData.template.textIndependentVoice.template\">\n                            <label>Template</label>\n                            <div class=\"copy\" (click)=\"copyTIV()\"><img src=\"assets/copy.png\" /></div>\n                            <div class=\"dataTemplate\" id=\"tplTIV\">\n                                {{responseData.template.textIndependentVoice.template}}\n                            </div>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n    <button type=\"button\" class=\"send\" (click)=\"step = 1\">Retry</button>\n</section>\n\n\n<section id=\"response\" *ngIf=\"step==5\">\n    <!-- INFO RESPONSE -->\n    <div class=\"url\"><span class=\"method\">POST</span> {{urlEndpoint}}</div>\n    <code [class.error]=\"error\">\n       {{jsonResponse}}\n    </code>\n    <div class=\"responses\" *ngIf=\"responseInfo\">\n        <div class=\"responseProcessed\">\n            <div class=\"dataBlock\">\n                <label>txId:</label>\n                <div class=\"dataContent\">\n                    {{responseInfo.txId}}\n                </div>\n            </div>\n            <div class=\"dataBlock\">\n                <label>Composite finger count:</label>\n                <div class=\"dataContent\">\n                    {{responseInfo.compositeFingerCount}}\n                </div>\n            </div>\n            <div class=\"dataBlock\">\n                <label>Enrollment date:</label>\n                <div class=\"dataContent\">\n                    {{responseInfo.enrollmentDate  | DateParsed}}\n                </div>\n            </div>\n            <div class=\"dataBlock\">\n                <label>Composite Face Count:</label>\n                <div class=\"dataContent\">\n                    {{responseInfo.faceCount}}\n                </div>\n            </div>\n            <div class=\"dataBlock\">\n                <label>Composite Finger Count:</label>\n                <div class=\"dataContent\">\n                    {{responseInfo.fingerCount}}\n                </div>\n            </div>\n            <div class=\"dataBlock\">\n                <label>Exception:</label>\n                <div class=\"dataContent\">\n                    <b *ngIf=\"responseInfo.exception\">YES</b>\n                    <b *ngIf=\"!responseInfo.exception\">NO</b>\n                </div>\n            </div>\n            <div class=\"dataBlock\">\n                <label>Face count:</label>\n                <div class=\"dataContent\">\n                    {{responseInfo.faceCount}}\n                </div>\n            </div>\n            <div class=\"dataBlock\">\n                <label>Finger count:</label>\n                <div class=\"dataContent\">\n                    {{responseInfo.fingerCount}}\n                </div>\n            </div>\n            <div class=\"dataBlock\">\n                <label>Has Text Independent Voice:</label>\n                <div class=\"dataContent\">\n                    <b *ngIf=\"responseInfo.hasTextIndependentVoice\">YES</b>\n                    <b *ngIf=\"!responseInfo.hasTextIndependentVoice\">NO</b>\n                </div>\n            </div>\n            <div class=\"dataBlock\">\n                <label>i1:</label>\n                <div class=\"dataContent\">\n                    {{responseInfo.i1}}\n                </div>\n            </div>\n            <div class=\"dataBlock\">\n                <label>i2:</label>\n                <div class=\"dataContent\">\n                    {{responseInfo.i2}}\n                </div>\n            </div>\n            <div class=\"dataBlock\">\n                <label>i3:</label>\n                <div class=\"dataContent\">\n                    {{responseInfo.i3}}\n                </div>\n            </div>\n            <div class=\"dataBlock\">\n                <label>i4:</label>\n                <div class=\"dataContent\">\n                    {{responseInfo.i4}}\n                </div>\n            </div>\n            <div class=\"dataBlock\">\n                <label>i5:</label>\n                <div class=\"dataContent\">\n                    {{responseInfo.i5}}\n                </div>\n            </div>\n            <div class=\"dataBlock\">\n                <label>Last identify date:</label>\n                <div class=\"dataContent\">\n                    {{responseInfo.lastIdentifyDate | DateParsed}}\n                </div>\n            </div>\n            <div class=\"dataBlock\">\n                <label>Last update date:</label>\n                <div class=\"dataContent\">\n                    {{responseInfo.lastUpdateDate | DateParsed}}\n                </div>\n            </div>\n            <div class=\"dataBlock\">\n                <label>Last verify date:</label>\n                <div class=\"dataContent\">\n                    {{responseInfo.lastVerifyDate | DateParsed}}\n                </div>\n            </div>\n            <div class=\"dataBlock\">\n                <label>s1:</label>\n                <div class=\"dataContent\">\n                    {{responseInfo.s1}}\n                </div>\n            </div>\n            <div class=\"dataBlock\">\n                <label>s2:</label>\n                <div class=\"dataContent\">\n                    {{responseInfo.s2}}\n                </div>\n            </div>\n            <div class=\"dataBlock\">\n                <label>s3:</label>\n                <div class=\"dataContent\">\n                    {{responseInfo.s3}}\n                </div>\n            </div>\n            <div class=\"dataBlock\">\n                <label>s4:</label>\n                <div class=\"dataContent\">\n                    {{responseInfo.s4}}\n                </div>\n            </div>\n            <div class=\"dataBlock\">\n                <label>s5:</label>\n                <div class=\"dataContent\">\n                    {{responseInfo.s5}}\n                </div>\n            </div>\n            <div class=\"dataBlock\">\n                <label>Status:</label>\n                <div class=\"dataContent\">\n                    {{responseInfo.status}}\n                </div>\n            </div>\n            <div class=\"dataBlock\">\n                <label>Text dependent voice count:</label>\n                <div class=\"dataContent\">\n                    {{responseInfo.textDependentVoiceCount}}\n                </div>\n            </div>\n        </div>\n    </div>\n    <button type=\"button\" class=\"send\" (click)=\"step = 1\">Retry</button>\n</section>\n\n<form *ngIf=\"step==1\">\n    <section>\n        <div class=\"inputRow\">\n            <label>\n                Audit Token\n            </label>\n            <input type=\"text\" name=\"auditToken\" [(ngModel)]=\"auditToken\">\n        </div>\n        <div class=\"inputRow\">\n            <label>\n                Subject ID\n            </label>\n            <input type=\"text\" name=\"subjectID\" [(ngModel)]=\"subjectID\">\n        </div>\n    </section>\n    <section style=\"text-align: center;\">\n        <button type=\"button\" class=\"red inline\" (click)=\"delete()\">Delete</button>\n        <button type=\"button\" class=\"send inline\" (click)=\"downzip()\">Download ZIP</button>\n        <button type=\"button\" class=\"send inline\" (click)=\"data()\">Data</button>\n        <button type=\"button\" class=\"send inline\" (click)=\"info()\">Info</button>\n    </section>\n</form>"

/***/ }),

/***/ "./src/app/pages/database/by-subject/by-subject.component.sass":
/*!*********************************************************************!*\
  !*** ./src/app/pages/database/by-subject/by-subject.component.sass ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fixedTPLUL {\n  width: calc(100% - 45px); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZHkvcmVwb3Mvc29iaW8vc3JjL2FwcC9wYWdlcy9kYXRhYmFzZS9ieS1zdWJqZWN0L2J5LXN1YmplY3QuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3QkFBd0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RhdGFiYXNlL2J5LXN1YmplY3QvYnktc3ViamVjdC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maXhlZFRQTFVMIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNDVweCk7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/database/by-subject/by-subject.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/database/by-subject/by-subject.component.ts ***!
  \*******************************************************************/
/*! exports provided: BySubjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BySubjectComponent", function() { return BySubjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Utils_UUID__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Utils/UUID */ "./src/app/Utils/UUID.ts");
/* harmony import */ var src_app_providers_database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/providers/database.service */ "./src/app/providers/database.service.ts");




var BySubjectComponent = /** @class */ (function () {
    function BySubjectComponent(dbSrv) {
        this.dbSrv = dbSrv;
    }
    BySubjectComponent.prototype.ngOnInit = function () {
        this.step = 1;
        this.auditToken = src_app_Utils_UUID__WEBPACK_IMPORTED_MODULE_2__["UUID"].create();
    };
    BySubjectComponent.prototype.delete = function () {
        var _this = this;
        this.dbSrv.delete({
            auditToken: this.auditToken,
            subjectId: this.subjectID
        }).subscribe(function (resp) {
            console.log(resp);
            _this.loading = false;
            _this.step = 2;
            _this.responseDalete = resp;
            _this.jsonResponse = JSON.stringify(resp);
        }, function (err) {
            console.log(err);
            _this.error = true;
            _this.loading = false;
            _this.step = 2;
            _this.jsonResponse = JSON.stringify(err);
        });
        this.urlEndpoint = this.dbSrv.getEndpoints().delete;
    };
    BySubjectComponent.prototype.downzip = function () {
        var _this = this;
        this.dbSrv.downZip(this.subjectID).subscribe(function (resp) {
            console.log(resp);
            _this.loading = false;
            _this.step = 3;
            // this.responseDownzip = resp;
            var blob = new Blob([resp], { type: 'application/zip' });
            var url = window.URL.createObjectURL(blob);
            var pwa = window.open(url);
            if (!pwa || pwa.closed || typeof pwa.closed === 'undefined') {
                alert('Please disable your Pop-up blocker and try again.');
            }
            _this.jsonResponse = JSON.stringify(resp);
        }, function (err) {
            console.log(err);
            _this.error = true;
            _this.loading = false;
            _this.step = 3;
            _this.jsonResponse = JSON.stringify(err);
        });
        this.urlEndpoint = this.dbSrv.getEndpoints().zip;
    };
    BySubjectComponent.prototype.data = function () {
        var _this = this;
        this.dbSrv.getData({
            auditToken: this.auditToken,
            subjectId: this.subjectID
        }).subscribe(function (resp) {
            console.log(resp);
            _this.loading = false;
            _this.step = 4;
            _this.responseData = resp;
            _this.jsonResponse = JSON.stringify(resp);
        }, function (err) {
            console.log(err);
            _this.error = true;
            _this.loading = false;
            _this.step = 4;
            _this.jsonResponse = JSON.stringify(err);
        });
        this.urlEndpoint = this.dbSrv.getEndpoints().data;
    };
    BySubjectComponent.prototype.info = function () {
        var _this = this;
        this.dbSrv.getInfo({
            auditToken: this.auditToken,
            subjectId: this.subjectID
        }).subscribe(function (resp) {
            console.log(resp);
            _this.loading = false;
            _this.step = 5;
            _this.responseInfo = resp;
            _this.jsonResponse = JSON.stringify(resp);
        }, function (err) {
            console.log(err);
            _this.error = true;
            _this.loading = false;
            _this.step = 5;
            _this.jsonResponse = JSON.stringify(err);
        });
        this.urlEndpoint = this.dbSrv.getEndpoints().info;
    };
    BySubjectComponent.prototype.copyComposite = function (index) {
        try {
            navigator.clipboard.writeText(this.responseData.template.compositeFingerPrints[index].template).then(function () {
                // alert('Copied A');
            });
        }
        catch (e) {
            var selection = document.getSelection();
            var range = document.createRange();
            range.selectNode(document.getElementById('tplComposite' + index));
            selection.removeAllRanges();
            selection.addRange(range);
            var result = document.execCommand('copy');
            if (!result) {
                alert('Can\'t copy (HTTPS/Chrome +43/Permisos).');
            }
            else {
                // alert('Copied B');
            }
        }
    };
    BySubjectComponent.prototype.copyFaces = function (index) {
        try {
            navigator.clipboard.writeText(this.responseData.template.faces[index].template).then(function () {
                // alert('Copied A');
            });
        }
        catch (e) {
            var selection = document.getSelection();
            var range = document.createRange();
            range.selectNode(document.getElementById('tplFaces' + index));
            selection.removeAllRanges();
            selection.addRange(range);
            var result = document.execCommand('copy');
            if (!result) {
                alert('Can\'t copy (HTTPS/Chrome +43/Permisos).');
            }
            else {
                // alert('Copied B');
            }
        }
    };
    BySubjectComponent.prototype.copyFingerPrint = function (index) {
        try {
            navigator.clipboard.writeText(this.responseData.template.fingerPrints[index].template).then(function () {
                // alert('Copied A');
            });
        }
        catch (e) {
            var selection = document.getSelection();
            var range = document.createRange();
            range.selectNode(document.getElementById('tplFingerPrints' + index));
            selection.removeAllRanges();
            selection.addRange(range);
            var result = document.execCommand('copy');
            if (!result) {
                alert('Can\'t copy (HTTPS/Chrome +43/Permisos).');
            }
            else {
                // alert('Copied B');
            }
        }
    };
    BySubjectComponent.prototype.copyTDV = function (index) {
        try {
            navigator.clipboard.writeText(this.responseData.template.textDependentVoices[index].template).then(function () {
                // alert('Copied A');
            });
        }
        catch (e) {
            var selection = document.getSelection();
            var range = document.createRange();
            range.selectNode(document.getElementById('tplTDV' + index));
            selection.removeAllRanges();
            selection.addRange(range);
            var result = document.execCommand('copy');
            if (!result) {
                alert('Can\'t copy (HTTPS/Chrome +43/Permisos).');
            }
            else {
                // alert('Copied B');
            }
        }
    };
    BySubjectComponent.prototype.copyTIV = function () {
        try {
            navigator.clipboard.writeText(this.responseData.template.textIndependentVoice.template).then(function () {
                // alert('Copied A');
            });
        }
        catch (e) {
            var selection = document.getSelection();
            var range = document.createRange();
            range.selectNode(document.getElementById('tplTIV'));
            selection.removeAllRanges();
            selection.addRange(range);
            var result = document.execCommand('copy');
            if (!result) {
                alert('Can\'t copy (HTTPS/Chrome +43/Permisos).');
            }
            else {
                // alert('Copied B');
            }
        }
    };
    BySubjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-by-subject',
            template: __webpack_require__(/*! ./by-subject.component.html */ "./src/app/pages/database/by-subject/by-subject.component.html"),
            styles: [__webpack_require__(/*! ./by-subject.component.sass */ "./src/app/pages/database/by-subject/by-subject.component.sass"), __webpack_require__(/*! ../../../shared-styles/forms.scss */ "./src/app/shared-styles/forms.scss"), __webpack_require__(/*! ../../../shared-styles/playground-response.scss */ "./src/app/shared-styles/playground-response.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_providers_database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"]])
    ], BySubjectComponent);
    return BySubjectComponent;
}());



/***/ }),

/***/ "./src/app/pages/database/enroll/enroll.component.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/database/enroll/enroll.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header title=\"Database::Enroll\"\n    subtitle=\"Performs a biometric enrollment supplied biometric data which is associated with supplied enrolled subject id\">\n</app-header>\n<app-loader [isLoading]=\"loading\"></app-loader>\n\n<section id=\"response\" *ngIf=\"step==2\">\n    <div class=\"url\"><span class=\"method\">POST</span> {{urlEndpoint}}</div>\n    <code [class.error]=\"error\">\n                {{jsonResponse}}\n            </code>\n    <div class=\"responses\" *ngIf=\"response\">\n        <div class=\"responseProcessed\">\n            <div class=\"dataBlock\">\n                <label>TxId:</label>\n                <div class=\"dataContent\">\n                    {{response.txId}}\n                </div>\n            </div>\n            <div class=\"dataBlock\">\n                <label>Duplicated Subject ID:</label>\n                <div class=\"dataContent\">\n                    {{response.duplicatedSubjectId}}\n                </div>\n            </div>\n            <div class=\"dataBlock\">\n                <label>Exception:</label>\n                <div class=\"dataContent\">\n                    <b *ngIf=\"response.exception\">YES</b>\n                    <b *ngIf=\"!response.exception\">NO</b>\n                </div>\n            </div>\n            <div class=\"dataBlock\">\n                <label>Status:</label>\n                <div class=\"dataContent\">\n                    {{response.status}}\n                </div>\n            </div>\n        </div>\n    </div>\n    <button type=\"button\" class=\"send\" (click)=\"step = 1\">Retry</button>\n</section>\n\n<form *ngIf=\"step==1\">\n    <section>\n        <div class=\"inputRow\">\n            <label>\n                Audit Token\n            </label>\n            <input type=\"text\" name=\"auditToken\" [(ngModel)]=\"dto.auditToken\">\n        </div>\n    </section>\n    <section>\n        <header>\n            <h3>Bio Info</h3>\n        </header>\n        <section>\n            <header>\n                <h4>Composite Finger Prints</h4>\n                <button class=\"rightButton\" (click)=\"addCompositeFinger()\">+</button>\n            </header>\n            <!-- ESTO ES UN ARREGLO -->\n            <div class=\"composedBlock\" *ngFor=\"let item of dto.bioInfo.compositeFingerPrints; let idx = index;\">\n                <button class=\"rightButton red\" (click)=\"removeCompositeFinger(idx)\">-</button>\n                <div class=\"inputRow\">\n                    <label>\n                        Finger\n                    </label>\n                    <input type=\"text\" name=\"bi1_dedo_composite{{idx}}\"\n                        [(ngModel)]=\"dto.bioInfo.compositeFingerPrints[idx].dedo\">\n                    <!-- <select name=\"bi1_dedo\">\n            <option value=\"RIGHT_THUMB\">Right Thumb</option>\n          </select> -->\n                </div>\n                <!-- IMAGES [0] -->\n                <div class=\"inputRow\">\n                    <label>\n                        Source\n                    </label>\n                    <select name=\"bi1_source_composite{{idx}}\"\n                        [(ngModel)]=\"dto.bioInfo.compositeFingerPrints[idx].source\">\n                        <option>LIVE_FINGERPRINT</option>\n                        <option>SCANNED_FINGERPRINT_IMAGE</option>\n                        <option>UNKNOWN</option>\n                    </select>\n                    <!-- <select name=\"bi1_source\">\n            <option value=\"LIVE_FINGERPRINT\">Live Fingerprint</option>\n          </select> -->\n                </div>\n                <div class=\"inputRow\">\n                    <label>\n                        Template\n                    </label>\n                    <textarea name=\"bi1_template_composite{{idx}}\"\n                        [(ngModel)]=\"dto.bioInfo.compositeFingerPrints[idx].template\"></textarea>\n                </div>\n            </div>\n        </section>\n        <section>\n            <header>\n                <h4>Faces</h4>\n                <button class=\"rightButton\" (click)=\"addFace()\">+</button>\n            </header>\n            <div class=\"composedBlock\" *ngFor=\"let item of dto.bioInfo.faces; let idx = index;\">\n                <button class=\"rightButton red\" (click)=\"removeFace(idx)\">-</button>\n                <div class=\"inputRow\">\n                    <label>\n                        Select image file\n                    </label>\n                    <input type=\"file\" accept=\"image/*\" name=\"bi1_image_faces{{idx}}\"\n                        (change)=\"bi1_image_faces_change(idx)\" #bi1_image_faces>\n                </div>\n                <div class=\"inputRow\">\n                    <label>\n                        Template\n                    </label>\n                    <textarea name=\"bi1_template_faces{{idx}}\" [(ngModel)]=\"dto.bioInfo.faces[idx].template\"></textarea>\n                </div>\n            </div>\n        </section>\n        <section>\n            <header>\n                <h4>Finger Prints</h4>\n                <button class=\"rightButton\" (click)=\"addFPrint()\">+</button>\n            </header>\n            <div class=\"composedBlock\" *ngFor=\"let item of dto.bioInfo.fingerPrints; let idx = index;\">\n                <div class=\"inputRow\">\n                    <button class=\"rightButton red\" (click)=\"removeFPrint(idx)\">-</button>\n                    <label>\n                        Template Format\n                    </label>\n                    <input type=\"text\" name=\"bi1_template_format_fp{{idx}}\"\n                        [(ngModel)]=\"dto.bioInfo.fingerPrints[idx].formatoTemplate\">\n                </div>\n                <div class=\"inputRow\">\n                    <label>\n                        Select image file\n                    </label>\n                    <input type=\"file\" accept=\"image/*\" (change)=\"bi1_image_fprints_change(idx)\" #bi1_image_fprints>\n                </div>\n                <div class=\"inputRow\">\n                    <label>\n                        Image Source\n                    </label>\n                    <select name=\"bi1_imagesource_fp{{idx}}\" [(ngModel)]=\"dto.bioInfo.fingerPrints[idx].imageSource\">\n                        <option>LIVE_FINGERPRINT</option>\n                        <option>SCANNED_FINGERPRINT_IMAGE</option>\n                        <option>UNKNOWN</option>\n                    </select>\n                </div>\n                <div class=\"inputRow\">\n                    <label>\n                        Position\n                    </label>\n                    <select name=\"bi1_position_fp{{idx}}\" [(ngModel)]=\"dto.bioInfo.fingerPrints[idx].position\">\n                        <option>RIGHT_THUMB</option>\n                        <option>LEFT_THUMB</option>\n                        <option>RIGHT_INDEX_FINGER</option>\n                        <option>LEFT_INDEX_FINGER</option>\n                        <option>RIGHT_MIDDLE_FINGER</option>\n                        <option>LEFT_MIDDLE_FINGER</option>\n                        <option>RIGHT_RING_FINGER</option>\n                        <option>LEFT_RING_FINGER</option>\n                        <option>RIGHT_LITTLE_FINGER</option>\n                        <option>LEFT_LITTLE_FINGER</option>\n                        <option>UNKNOWN</option>\n                    </select>\n                </div>\n                <div class=\"inputRow\">\n                    <label>\n                        Template\n                    </label>\n                    <textarea name=\"bi1_template_fp{{idx}}\"\n                        [(ngModel)]=\"dto.bioInfo.fingerPrints[idx].template\"></textarea>\n                </div>\n            </div>\n        </section>\n        <section>\n            <header>\n                <h4>Text Dependent Voices</h4>\n                <button class=\"rightButton\" (click)=\"addTDV()\">+</button>\n            </header>\n            <div class=\"composedBlock\" *ngFor=\"let item of dto.bioInfo.textDependentVoices; let idx = index;\">\n                <button class=\"rightButton red\" (click)=\"removeTDV(idx)\">-</button>\n                <div class=\"inputRow\">\n                    <label>\n                        Select audio file\n                    </label>\n                    <input type=\"file\" accept=\"audio/*\" (change)=\"bi1_audio_tdv_change(idx)\" #bi1_audio_tdv>\n                </div>\n                <div class=\"inputRow\">\n                    <label>\n                        Phase ID\n                    </label>\n                    <input type=\"number\" name=\"bi1_phaseid_tdv{{idx}}\"\n                        [(ngModel)]=\"dto.bioInfo.textDependentVoices[idx].phraseId\">\n                </div>\n                <div class=\"inputRow\">\n                    <label>\n                        Template\n                    </label>\n                    <textarea name=\"bi1_template_tdv{{idx}}\"\n                        [(ngModel)]=\"dto.bioInfo.textDependentVoices[idx].template\"></textarea>\n                </div>\n            </div>\n        </section>\n        <section>\n            <header>\n                <h4>Text Independent Voices</h4>\n            </header>\n            <div class=\"inputRow\">\n                <label>\n                    Select audio file\n                </label>\n                <input type=\"file\" value=\"\" accept=\"audio/*\" (change)=\"bi1_audio_tiv_change(idx)\" #bi1_audio_tiv>\n            </div>\n            <div class=\"inputRow\">\n                <label>\n                    Template\n                </label>\n                <textarea name=\"bi1_template_tiv\" [(ngModel)]=\"dto.bioInfo.textDependentVoices.template\"></textarea>\n            </div>\n        </section>\n    </section>\n    <section>\n        <header>\n            <h3>Params</h3>\n        </header>\n        <section>\n            <header>\n                <h4>Conditions</h4>\n            </header>\n            <div class=\"inputRow\">\n                <label>\n                    I1\n                </label>\n                <input type=\"number\" name=\"i1\" [(ngModel)]=\"dto.params.conditions.i1\">\n            </div>\n            <div class=\"inputRow\">\n                <label>\n                    I2\n                </label>\n                <input type=\"number\" name=\"i2\" [(ngModel)]=\"dto.params.conditions.i2\">\n            </div>\n            <div class=\"inputRow\">\n                <label>\n                    I3\n                </label>\n                <input type=\"number\" name=\"i3\" [(ngModel)]=\"dto.params.conditions.i3\">\n            </div>\n            <div class=\"inputRow\">\n                <label>\n                    I4\n                </label>\n                <input type=\"number\" name=\"i4\" [(ngModel)]=\"dto.params.conditions.i4\">\n            </div>\n            <div class=\"inputRow\">\n                <label>\n                    I5\n                </label>\n                <input type=\"number\" name=\"i5\" [(ngModel)]=\"dto.params.conditions.i5\">\n            </div>\n            <div class=\"inputRow\">\n                <label>\n                    id\n                </label>\n                <input type=\"text\" name=\"id\" [(ngModel)]=\"dto.params.conditions.id\">\n            </div>\n            <div class=\"inputRow\">\n                <label>\n                    id In\n                </label>\n                <input type=\"text\" name=\"idIn\" [(ngModel)]=\"dto.params.conditions.idIn\">\n            </div>\n            <div class=\"inputRow\">\n                <label>\n                    id Like\n                </label>\n                <input type=\"text\" name=\"idLike\" [(ngModel)]=\"dto.params.conditions.idLike\">\n            </div>\n            <div class=\"inputRow\">\n                <label>\n                    id No\n                </label>\n                <input type=\"text\" name=\"idNo\" [(ngModel)]=\"dto.params.conditions.id\">\n            </div>\n            <div class=\"inputRow\">\n                <label>\n                    s1\n                </label>\n                <input type=\"text\" name=\"s1\" [(ngModel)]=\"dto.params.conditions.s1\">\n            </div>\n            <div class=\"inputRow\">\n                <label>\n                    s2\n                </label>\n                <input type=\"text\" name=\"s2\" [(ngModel)]=\"dto.params.conditions.s2\">\n            </div>\n            <div class=\"inputRow\">\n                <label>\n                    s3\n                </label>\n                <input type=\"text\" name=\"s3\" [(ngModel)]=\"dto.params.conditions.s3\">\n            </div>\n            <div class=\"inputRow\">\n                <label>\n                    s4\n                </label>\n                <input type=\"text\" name=\"s4\" [(ngModel)]=\"dto.params.conditions.s4\">\n            </div>\n            <div class=\"inputRow\">\n                <label>\n                    s5\n                </label>\n                <input type=\"text\" name=\"s5\" [(ngModel)]=\"dto.params.conditions.s5\">\n            </div>\n        </section>\n        <section>\n            <header>\n                <h4>Duplicate Search</h4>\n                <div class=\"buttonRights\">\n                    <app-switch [initStatus]=\"duplicatedSearch\" (switch)=\"duplicatedSearch = $event\"\n                        style=\"display: inline-block;\"></app-switch>\n                </div>\n            </header>\n            <div class=\"container\" *ngIf=\"duplicatedSearch\">\n                <div class=\"inputRow\">\n                    <label>\n                        I1\n                    </label>\n                    <input type=\"number\" name=\"dupl_i1\"\n                        [(ngModel)]=\"dto.params.duplicateSearchParameters.conditions.i1\">\n                </div>\n                <div class=\"inputRow\">\n                    <label>\n                        I2\n                    </label>\n                    <input type=\"number\" name=\"dupl_i2\"\n                        [(ngModel)]=\"dto.params.duplicateSearchParameters.conditions.i2\">\n                </div>\n                <div class=\"inputRow\">\n                    <label>\n                        I3\n                    </label>\n                    <input type=\"number\" name=\"dupl_i3\"\n                        [(ngModel)]=\"dto.params.duplicateSearchParameters.conditions.i3\">\n                </div>\n                <div class=\"inputRow\">\n                    <label>\n                        I4\n                    </label>\n                    <input type=\"number\" name=\"dupl_i4\"\n                        [(ngModel)]=\"dto.params.duplicateSearchParameters.conditions.i4\">\n                </div>\n                <div class=\"inputRow\">\n                    <label>\n                        I5\n                    </label>\n                    <input type=\"number\" name=\"dupl_i5\"\n                        [(ngModel)]=\"dto.params.duplicateSearchParameters.conditions.i5\">\n                </div>\n                <div class=\"inputRow\">\n                    <label>\n                        id\n                    </label>\n                    <input type=\"text\" name=\"dupl_id\" [(ngModel)]=\"dto.params.duplicateSearchParameters.conditions.id\">\n                </div>\n                <div class=\"inputRow\">\n                    <label>\n                        id In\n                    </label>\n                    <input type=\"text\" name=\"dupl_idIn\"\n                        [(ngModel)]=\"dto.params.duplicateSearchParameters.conditions.idIn\">\n                </div>\n                <div class=\"inputRow\">\n                    <label>\n                        id Like\n                    </label>\n                    <input type=\"text\" name=\"dupl_idLike\"\n                        [(ngModel)]=\"dto.params.duplicateSearchParameters.conditions.idLike\">\n                </div>\n                <div class=\"inputRow\">\n                    <label>\n                        id No\n                    </label>\n                    <input type=\"text\" name=\"dupl_idNo\"\n                        [(ngModel)]=\"dto.params.duplicateSearchParameters.conditions.id\">\n                </div>\n                <div class=\"inputRow\">\n                    <label>\n                        s1\n                    </label>\n                    <input type=\"text\" name=\"dupl_s1\" [(ngModel)]=\"dto.params.duplicateSearchParameters.conditions.s1\">\n                </div>\n                <div class=\"inputRow\">\n                    <label>\n                        s2\n                    </label>\n                    <input type=\"text\" name=\"dupl_s2\" [(ngModel)]=\"dto.params.duplicateSearchParameters.conditions.s2\">\n                </div>\n                <div class=\"inputRow\">\n                    <label>\n                        s3\n                    </label>\n                    <input type=\"text\" name=\"dupl_s3\" [(ngModel)]=\"dto.params.duplicateSearchParameters.conditions.s3\">\n                </div>\n                <div class=\"inputRow\">\n                    <label>\n                        s4\n                    </label>\n                    <input type=\"text\" name=\"dupl_s4\" [(ngModel)]=\"dto.params.duplicateSearchParameters.conditions.s4\">\n                </div>\n                <div class=\"inputRow\">\n                    <label>\n                        s5\n                    </label>\n                    <input type=\"text\" name=\"dupl_s5\" [(ngModel)]=\"dto.params.duplicateSearchParameters.conditions.s5\">\n                </div>\n                <div class=\"inputRow\">\n                    <label>\n                        Confidence\n                    </label>\n                    <app-gauge [percent]=\"(1000 - farCalculated) / 10\"></app-gauge>\n                </div>\n                <div class=\"inputRow\">\n                    <label>\n                        Far\n                    </label>\n                    <input name=\"far\" [(ngModel)]=\"farCalculated\" type=\"range\" min=\"1\" max=\"999\" />\n                    <app-gauge [percent]=\"farCalculated / 10\" color=\"#eeab00\"></app-gauge>\n                </div>\n                <section>\n                    <header>\n                        <h4>Finger Print Matching Params</h4>\n                    </header>\n                    <div class=\"inputRow\">\n                        <label>\n                            Max Rotation\n                        </label>\n                        <input name=\"maxRotation\" type=\"range\" min=\"0\" max=\"180\"\n                            [(ngModel)]=\"dto.params.duplicateSearchParameters.fingerPrintMatchingParams.maxRotation\" />\n                        {{dto.params.duplicateSearchParameters.fingerPrintMatchingParams.maxRotation}}\n                    </div>\n                    <div class=\"inputRow\">\n                        <label>\n                            Use Only Ansi378\n                        </label>\n                        <input type=\"checkbox\"\n                            [(ngModel)]=\"dto.params.duplicateSearchParameters.fingerPrintMatchingParams.useOnlyAnsi378\"\n                            name=\"useOnlyAnsi378\" />\n                    </div>\n                </section>\n                <div class=\"inputRow\">\n                    <label>\n                        Global Search With Conditions\n                    </label>\n                    <input type=\"checkbox\" [(ngModel)]=\"dto.params.duplicateSearchParameters.globalSearchWithConditions\"\n                        name=\"globalSearchWithConditions\" />\n                </div>\n            </div>\n        </section>\n    </section>\n    <section>\n        <div class=\"inputRow\">\n            <label>\n                Subject ID\n            </label>\n            <input type=\"text\" name=\"subjectID\" [(ngModel)]=\"dto.subjectId\">\n        </div>\n    </section>\n    <section>\n        <button type=\"button\" class=\"send\" (click)=\"send()\">Send Data</button>\n    </section>\n</form>"

/***/ }),

/***/ "./src/app/pages/database/enroll/enroll.component.sass":
/*!*************************************************************!*\
  !*** ./src/app/pages/database/enroll/enroll.component.sass ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RhdGFiYXNlL2Vucm9sbC9lbnJvbGwuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/database/enroll/enroll.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/database/enroll/enroll.component.ts ***!
  \***********************************************************/
/*! exports provided: EnrollComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnrollComponent", function() { return EnrollComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_dataTypeObjects_enroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dataTypeObjects/enroll */ "./src/app/dataTypeObjects/enroll.ts");
/* harmony import */ var src_app_dataTypeObjects_verifyT2t__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dataTypeObjects/verifyT2t */ "./src/app/dataTypeObjects/verifyT2t.ts");
/* harmony import */ var src_app_Utils_UUID__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Utils/UUID */ "./src/app/Utils/UUID.ts");
/* harmony import */ var src_app_providers_database_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/providers/database.service */ "./src/app/providers/database.service.ts");






var EnrollComponent = /** @class */ (function () {
    function EnrollComponent(dbSrv) {
        this.dbSrv = dbSrv;
        this.dto = new src_app_dataTypeObjects_enroll__WEBPACK_IMPORTED_MODULE_2__["Enroll"]();
    }
    EnrollComponent.prototype.ngOnInit = function () {
        this.step = 1;
        this.duplicatedSearch = true;
        this.dto.auditToken = src_app_Utils_UUID__WEBPACK_IMPORTED_MODULE_4__["UUID"].create();
        this.farCalculated = this.dto.params.duplicateSearchParameters.far;
        this.duplicatedSearch = true;
    };
    EnrollComponent.prototype.addCompositeFinger = function () {
        this.dto.bioInfo.compositeFingerPrints.push(new src_app_dataTypeObjects_verifyT2t__WEBPACK_IMPORTED_MODULE_3__["CompositeFingerPrints"]());
    };
    EnrollComponent.prototype.removeCompositeFinger = function (idx) {
        this.dto.bioInfo.compositeFingerPrints.splice(idx, 1);
    };
    EnrollComponent.prototype.addFace = function () {
        this.dto.bioInfo.faces.push(new src_app_dataTypeObjects_verifyT2t__WEBPACK_IMPORTED_MODULE_3__["Faces"]());
    };
    EnrollComponent.prototype.removeFace = function (idx) {
        this.dto.bioInfo.faces.splice(idx, 1);
    };
    EnrollComponent.prototype.addFPrint = function () {
        this.dto.bioInfo.fingerPrints.push(new src_app_dataTypeObjects_verifyT2t__WEBPACK_IMPORTED_MODULE_3__["FingerPrints"]());
    };
    EnrollComponent.prototype.removeFPrint = function (idx) {
        this.dto.bioInfo.fingerPrints.splice(idx, 1);
    };
    EnrollComponent.prototype.addTDV = function () {
        this.dto.bioInfo.textDependentVoices.push(new src_app_dataTypeObjects_verifyT2t__WEBPACK_IMPORTED_MODULE_3__["TextDependentVoices"]());
    };
    EnrollComponent.prototype.removeTDV = function (idx) {
        this.dto.bioInfo.textDependentVoices.splice(idx, 1);
    };
    EnrollComponent.prototype.send = function () {
        var _this = this;
        this.error = false;
        this.loading = true;
        this.dto.params.duplicateSearchParameters.far = this.farCalculated / 100;
        if (!this.duplicatedSearch) {
            this.dto.params.duplicateSearchParameters = undefined;
        }
        this.dbSrv.enroll(this.dto).subscribe(function (resp) {
            console.log(resp);
            _this.loading = false;
            _this.step = 2;
            _this.response = resp;
            _this.jsonResponse = JSON.stringify(resp);
            _this.dto.params.duplicateSearchParameters = new src_app_dataTypeObjects_enroll__WEBPACK_IMPORTED_MODULE_2__["DuplicateSearchParameters"]();
        }, function (err) {
            console.log(err);
            _this.error = true;
            _this.loading = false;
            _this.step = 2;
            _this.jsonResponse = JSON.stringify(err);
            _this.dto.params.duplicateSearchParameters = new src_app_dataTypeObjects_enroll__WEBPACK_IMPORTED_MODULE_2__["DuplicateSearchParameters"]();
        });
        this.urlEndpoint = this.dbSrv.getEndpoints().enroll;
    };
    EnrollComponent.prototype.bi1_image_faces_change = function (idx) {
        var _this = this;
        this.loading = true;
        var reader = new FileReader();
        var item = this.bi1ImageFaces.toArray()[idx];
        reader.onload = function () {
            var image = reader.result;
            _this.dto.bioInfo.faces[idx].image = image.replace(/data:([a-zA-Z0-9]+)\/([a-zA-Z0-9]+);base64,/gi, '');
            _this.loading = false;
        };
        if (item.nativeElement.files[0]) {
            reader.readAsDataURL(item.nativeElement.files[0]);
        }
    };
    EnrollComponent.prototype.bi1_image_fprints_change = function (idx) {
        var _this = this;
        this.loading = true;
        var reader = new FileReader();
        var item = this.bi1ImageFPrints.toArray()[idx];
        reader.onload = function () {
            var image = reader.result;
            _this.dto.bioInfo.fingerPrints[idx].image = image.replace(/data:([a-zA-Z0-9]+)\/([a-zA-Z0-9]+);base64,/gi, '');
            _this.loading = false;
        };
        if (item.nativeElement.files[0]) {
            reader.readAsDataURL(item.nativeElement.files[0]);
        }
    };
    EnrollComponent.prototype.bi1_audio_tdv_change = function (idx) {
        var _this = this;
        this.loading = true;
        var reader = new FileReader();
        var item = this.bi1AudioTdv.toArray()[idx];
        reader.onload = function () {
            var audio = reader.result;
            _this.dto.bioInfo.textDependentVoices[idx].audio = audio.replace(/data:([a-zA-Z0-9]+)\/([a-zA-Z0-9]+);base64,/gi, '');
            _this.loading = false;
        };
        if (item.nativeElement.files[0]) {
            reader.readAsDataURL(item.nativeElement.files[0]);
        }
    };
    EnrollComponent.prototype.bi1_audio_tiv_change = function (idx) {
        var _this = this;
        this.loading = true;
        var reader = new FileReader();
        var item = this.bi1AudioTiv.toArray()[idx];
        reader.onload = function () {
            var audio = reader.result;
            _this.dto.bioInfo.textIndependentVoice[idx].audio = audio.replace(/data:([a-zA-Z0-9]+)\/([a-zA-Z0-9]+);base64,/gi, '');
            _this.loading = false;
        };
        if (item.nativeElement.files[0]) {
            reader.readAsDataURL(item.nativeElement.files[0]);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('bi1_image_faces'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], EnrollComponent.prototype, "bi1ImageFaces", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('bi1_image_fprints'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], EnrollComponent.prototype, "bi1ImageFPrints", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('bi1_audio_tdv'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], EnrollComponent.prototype, "bi1AudioTdv", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('bi1_audio_tiv'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], EnrollComponent.prototype, "bi1AudioTiv", void 0);
    EnrollComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-enroll',
            template: __webpack_require__(/*! ./enroll.component.html */ "./src/app/pages/database/enroll/enroll.component.html"),
            styles: [__webpack_require__(/*! ./enroll.component.sass */ "./src/app/pages/database/enroll/enroll.component.sass"), __webpack_require__(/*! ../../../shared-styles/forms.scss */ "./src/app/shared-styles/forms.scss"), __webpack_require__(/*! ../../../shared-styles/playground-response.scss */ "./src/app/shared-styles/playground-response.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_providers_database_service__WEBPACK_IMPORTED_MODULE_5__["DatabaseService"]])
    ], EnrollComponent);
    return EnrollComponent;
}());



/***/ }),

/***/ "./src/app/pages/database/list/list.component.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/database/list/list.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header title=\"Database::List\" subtitle=\"List enrolled Subject ID's\"></app-header>\n<app-loader [isLoading]=\"loading\"></app-loader>\n\n<div class=\"popup\" *ngIf=\"popup\">\n    <div class=\"close\" (click)=\"closePopup()\">\n        <svg class=\"svg-icon\" viewBox=\"0 0 20 20\">\n            <path\n                d=\"M10.185,1.417c-4.741,0-8.583,3.842-8.583,8.583c0,4.74,3.842,8.582,8.583,8.582S18.768,14.74,18.768,10C18.768,5.259,14.926,1.417,10.185,1.417 M10.185,17.68c-4.235,0-7.679-3.445-7.679-7.68c0-4.235,3.444-7.679,7.679-7.679S17.864,5.765,17.864,10C17.864,14.234,14.42,17.68,10.185,17.68 M10.824,10l2.842-2.844c0.178-0.176,0.178-0.46,0-0.637c-0.177-0.178-0.461-0.178-0.637,0l-2.844,2.841L7.341,6.52c-0.176-0.178-0.46-0.178-0.637,0c-0.178,0.176-0.178,0.461,0,0.637L9.546,10l-2.841,2.844c-0.178,0.176-0.178,0.461,0,0.637c0.178,0.178,0.459,0.178,0.637,0l2.844-2.841l2.844,2.841c0.178,0.178,0.459,0.178,0.637,0c0.178-0.176,0.178-0.461,0-0.637L10.824,10z\">\n            </path>\n        </svg>\n    </div>\n    <form>\n        <section>\n            <div class=\"inputRow\">\n                <label>\n                    Audit Token\n                </label>\n                <input type=\"text\" name=\"auditToken\" [(ngModel)]=\"subAuditToken\">\n            </div>\n            <div class=\"inputRow\">\n                <label>\n                    Subject ID\n                </label>\n                <input type=\"text\" name=\"subjectID\" [(ngModel)]=\"subjectID\">\n            </div>\n        </section>\n        <section>\n            <button type=\"button\" (click)=\"doDelete()\" *ngIf=\"subAction == 1\">Delete</button>\n            <button type=\"button\" (click)=\"doDownload()\" *ngIf=\"subAction == 2\">Download Zip</button>\n            <button type=\"button\" (click)=\"doViewData()\" *ngIf=\"subAction == 3\">View Data</button>\n            <button type=\"button\" (click)=\"doViewInfo()\" *ngIf=\"subAction == 4\">View Info</button>\n        </section>\n\n\n        <section id=\"response\" *ngIf=\"subStep==2\">\n            <!-- DELETE RESPONSE -->\n            <div class=\"url\"><span class=\"method\">POST</span> {{subUrlEndpoint}}</div>\n            <code [class.subError]=\"error\">\n               {{subJsonResponse}}\n            </code>\n            <div class=\"responses\" *ngIf=\"responseDalete\">\n                <div class=\"responseProcessed\">\n                    <div class=\"dataBlock\">\n                        <label>TxId:</label>\n                        <div class=\"dataContent\">\n                            {{responseDalete.txId}}\n                        </div>\n                    </div>\n                    <div class=\"dataBlock\">\n                        <label>Status:</label>\n                        <div class=\"dataContent\">\n                            {{responseDalete.status}}\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </section>\n\n        <section id=\"response\" *ngIf=\"subStep==3\">\n            <!-- DOWNZIP RESPONSE -->\n            <div class=\"url\"><span class=\"method\">GET</span> {{subUrlEndpoint}}</div>\n            <code [class.subError]=\"error\">\n               {{subJsonResponse}}\n            </code>\n            <div class=\"responses\" *ngIf=\"responseDownzip\">\n                <div class=\"responseProcessed\">\n                    <div class=\"dataBlock\">\n                        <label>Description:</label>\n                        <div class=\"dataContent\">\n                            {{responseDownzip.description}}\n                        </div>\n                    </div>\n                    <div class=\"dataBlock\">\n                        <label>File:</label>\n                        <div class=\"dataContent\">\n                            <ul>\n                                <li>Absolute\n                                    <b *ngIf=\"responseDownzip.file.absolute\">YES</b>\n                                    <b *ngIf=\"!responseDownzip.file.absolute\">NO</b>\n                                </li>\n                                <li>Absolute path <b>{{responseDownzip.file.absolutePath}}</b></li>\n                                <li>Canonical path <b>{{responseDownzip.file.canonicalPath}}</b></li>\n                                <li>Directory\n                                    <b *ngIf=\"responseDownzip.file.directory\">YES</b>\n                                    <b *ngIf=\"!responseDownzip.file.directory\">NO</b>\n                                </li>\n                                <li>File\n                                    <b *ngIf=\"responseDownzip.file.file\">YES</b>\n                                    <b *ngIf=\"!responseDownzip.file.file\">NO</b>\n                                </li>\n                                <li>Free space <b>{{responseDownzip.file.freeSpace}}</b></li>\n                                <li>Hidden\n                                    <b *ngIf=\"responseDownzip.file.hidden\">YES</b>\n                                    <b *ngIf=\"!responseDownzip.file.hidden\">NO</b>\n                                </li>\n                                <li>Name <b>{{responseDownzip.file.name}}</b></li>\n                                <li>Parent <b>{{responseDownzip.file.parent}}</b></li>\n                                <li>Path <b>{{responseDownzip.file.path}}</b></li>\n                                <li>Total space <b>{{responseDownzip.file.totalSpace}}</b></li>\n                                <li>Usable Space <b>{{responseDownzip.file.usableSpace}}</b></li>\n                            </ul>\n                        </div>\n                    </div>\n                    <div class=\"dataBlock\">\n                        <label>Filename:</label>\n                        <div class=\"dataContent\">\n                            {{responseDownzip.filename}}\n                        </div>\n                    </div>\n                    <div class=\"dataBlock\">\n                        <label>Open:</label>\n                        <div class=\"dataContent\">\n                            <b *ngIf=\"responseDownzip.open\">YES</b>\n                            <b *ngIf=\"!responseDownzip.open\">NO</b>\n                        </div>\n                    </div>\n                    <div class=\"dataBlock\">\n                        <label>Readable:</label>\n                        <div class=\"dataContent\">\n                            <b *ngIf=\"responseDownzip.readable\">YES</b>\n                            <b *ngIf=\"!responseDownzip.readable\">NO</b>\n                        </div>\n                    </div>\n                    <div class=\"dataBlock\">\n                        <label>URI:</label>\n                        <div class=\"dataContent\">\n                            <ul *ngIf=\"responseDownzip.file\">\n                                <li>Absolute\n                                    <b *ngIf=\"responseDownzip.file.absolute\">YES</b>\n                                    <b *ngIf=\"!responseDownzip.file.absolute\">NO</b>\n                                </li>\n                                <li>Authority <b>{{responseDownzip.uri.authority}}</b></li>\n                                <li>Fragment <b>{{responseDownzip.uri.fragment}}</b></li>\n                                <li>Host <b>{{responseDownzip.uri.host}}</b></li>\n                                <li>Opaque\n                                    <b *ngIf=\"responseDownzip.file.opaque\">YES</b>\n                                    <b *ngIf=\"!responseDownzip.file.opaque\">NO</b>\n                                </li>\n                                <li>Path <b>{{responseDownzip.uri.path}}</b></li>\n                                <li>Port <b>{{responseDownzip.uri.port}}</b></li>\n                                <li>Query <b>{{responseDownzip.uri.query}}</b></li>\n                                <li>Raw authority <b>{{responseDownzip.uri.rawAuthority}}</b></li>\n                                <li>Raw fragment <b>{{responseDownzip.uri.rawFragment}}</b></li>\n                                <li>Raw path <b>{{responseDownzip.uri.rawPath}}</b></li>\n                                <li>Raw query <b>{{responseDownzip.uri.rawQuery}}</b></li>\n                                <li>Raw Scheme Specific Part <b>{{responseDownzip.uri.rawSchemeSpecificPart}}</b></li>\n                                <li>Raw User Info <b>{{responseDownzip.uri.rawUserInfo}}</b></li>\n                                <li>Scheme <b>{{responseDownzip.uri.scheme}}</b></li>\n                                <li>Scheme Specific Part <b>{{responseDownzip.uri.schemeSpecificPart}}</b></li>\n                                <li>User Info <b>{{responseDownzip.uri.userInfo}}</b></li>\n                            </ul>\n                        </div>\n                    </div>\n                    <div class=\"dataBlock\">\n                        <label>URL:</label>\n                        <div class=\"dataContent\">\n                            <ul *ngIf=\"responseDownzip.url\">\n                                <li>Authority <b>{{responseDownzip.url.authority}}</b></li>\n                                <li>Default port <b>{{responseDownzip.url.defaultPort}}</b></li>\n                                <li>File <b>{{responseDownzip.url.file}}</b></li>\n                                <li>Host <b>{{responseDownzip.url.host}}</b></li>\n                                <li>Path <b>{{responseDownzip.url.path}}</b></li>\n                                <li>Port <b>{{responseDownzip.url.port}}</b></li>\n                                <li>Protocol <b>{{responseDownzip.url.protocol}}</b></li>\n                                <li>Query <b>{{responseDownzip.url.query}}</b></li>\n                                <li>Ref <b>{{responseDownzip.url.ref}}</b></li>\n                                <li>User Info <b>{{responseDownzip.url.userInfo}}</b></li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </section>\n\n        <section id=\"response\" *ngIf=\"subStep==4\">\n            <!-- DATA RESPONSE -->\n            <div class=\"url\"><span class=\"method\">POST</span> {{subUrlEndpoint}}</div>\n            <code [class.subError]=\"error\">\n               {{subJsonResponse}}\n            </code>\n            <div class=\"responses\" *ngIf=\"responseData\">\n                <div class=\"responseProcessed\">\n                    <div class=\"dataBlock\">\n                        <label>TxId:</label>\n                        <div class=\"dataContent\">\n                            {{responseData.txId}}\n                        </div>\n                    </div>\n                    <div class=\"dataBlock\">\n                        <label>Status:</label>\n                        <div class=\"dataContent\">\n                            {{responseData.status}}\n                        </div>\n                    </div>\n                    <div class=\"dataBlock\">\n                        <label>Exception:</label>\n                        <div class=\"dataContent\">\n                            <b *ngIf=\"responseData.exception\">YES</b>\n                            <b *ngIf=\"!responseData.exception\">NO</b>\n                        </div>\n                    </div>\n                    <div class=\"dataBlock\">\n                        <label style=\"display: block; text-align: left;\">Composite Finger Prints:</label>\n                        <div class=\"dataContent fixedTPLUL\" *ngIf=\"responseData.template.compositeFingerPrints\">\n                            <ul *ngFor=\"let cfp of responseData.template.compositeFingerPrints; let idx = index\">\n                                <li>\n                                    <label>Finger</label>\n                                    {{cfp.dedo}}\n                                </li>\n                                <li>\n                                    <label>Images</label>\n                                    <img *ngFor=\"let cfpimage of cfp.images\" src=\"'data:image/png;base64,'+cfpimage\" />\n                                </li>\n                                <li>\n                                    <label>Source</label>\n                                    {{cfp.source}}\n                                </li>\n                                <li>\n                                    <label>Template</label>\n                                    <div class=\"copy\" (click)=\"copyComposite(idx)\"><img src=\"assets/copy.png\" /></div>\n                                    <div class=\"dataTemplate\" id=\"tplComposite{{idx}}\">\n                                        {{cfp.template}}\n                                    </div>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                    <div class=\"dataBlock\">\n                        <label style=\"display: block; text-align: left;\">Faces:</label>\n                        <div class=\"dataContent fixedTPLUL\" *ngIf=\"responseData.template.faces\">\n                            <ul *ngFor=\"let face of responseData.template.faces; let idx = index\">\n                                <li *ngIf=\"face.image\">\n                                    <label>Image</label>\n                                    <img [src]=\"'data:image/png;base64,'+face.image\" />\n                                </li>\n                                <li>\n                                    <label>Template</label>\n                                    <div class=\"copy\" (click)=\"copyFaces(idx)\"><img src=\"assets/copy.png\" /></div>\n                                    <div class=\"dataTemplate\" id=\"tplFaces{{idx}}\">\n                                        {{face.template}}\n                                    </div>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                    <div class=\"dataBlock\">\n                        <label style=\"display: block; text-align: left;\">Finger Prints:</label>\n                        <div class=\"dataContent fixedTPLUL\" *ngIf=\"responseData.template.fingerPrints\">\n                            <ul *ngFor=\"let fPrint of responseData.template.fingerPrints; let idx = index\">\n                                <li>\n                                    <label>Template Format</label>\n                                    {{fPrint.formatoTemplate}}\n                                </li>\n                                <li *ngIf=\"fPrint.image\">\n                                    <label>Image</label>\n                                    <img [src]=\"'data:image/png;base64,'+fPrint.image\" />\n                                </li>\n                                <li>\n                                    <label>Image Source</label>\n                                    {{fPrint.imageSource}}\n                                </li>\n                                <li>\n                                    <label>Position</label>\n                                    {{fPrint.position}}\n                                </li>\n                                <li>\n                                    <label>Template</label>\n                                    <div class=\"copy\" (click)=\"copyFingerPrint(idx)\"><img src=\"assets/copy.png\" /></div>\n                                    <div class=\"dataTemplate\" id=\"tplFingerPrints{{idx}}\">\n                                        {{fPrint.template}}\n                                    </div>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                    <div class=\"dataBlock\">\n                        <label style=\"display: block; text-align: left;\">Text Depndent Voices:</label>\n                        <div class=\"dataContent fixedTPLUL\" *ngIf=\"responseData.template.textDependentVoices\">\n                            <ul *ngFor=\"let tdv of responseData.template.textDependentVoices; let idx = index\">\n                                <li>\n                                    <label>Audio</label>\n                                    {{tdv.audio}}\n                                </li>\n                                <li>\n                                    <label>Phrase ID</label>\n                                    {{td.phraseId}}\n                                </li>\n                                <li>\n                                    <label>Template</label>\n                                    <div class=\"copy\" (click)=\"copyTDV(idx)\"><img src=\"assets/copy.png\" /></div>\n                                    <div class=\"dataTemplate\" id=\"tplTDV{{idx}}\">\n                                        {{tdv.template}}\n                                    </div>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                    <div class=\"dataBlock\">\n                        <label style=\"display: block; text-align: left;\">Text Independent Voices:</label>\n                        <div class=\"dataContent fixedTPLUL\" *ngIf=\"responseData.template.textIndependentVoice\">\n                            <ul>\n                                <li *ngIf=\"responseData.template.textIndependentVoice.audio\">\n                                    <label>Audio</label>\n                                    {{responseData.template.textIndependentVoice.audio}}\n                                </li>\n                                <li *ngIf=\"responseData.template.textIndependentVoice.template\">\n                                    <label>Template</label>\n                                    <div class=\"copy\" (click)=\"copyTIV()\"><img src=\"assets/copy.png\" /></div>\n                                    <div class=\"dataTemplate\" id=\"tplTIV\">\n                                        {{responseData.template.textIndependentVoice.template}}\n                                    </div>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </section>\n\n\n        <section id=\"response\" *ngIf=\"subStep==5\">\n            <!-- INFO RESPONSE -->\n            <div class=\"url\"><span class=\"method\">POST</span> {{subUrlEndpoint}}</div>\n            <code [class.subError]=\"error\">\n               {{subJsonResponse}}\n            </code>\n            <div class=\"responses\" *ngIf=\"responseInfo\">\n                <div class=\"responseProcessed\">\n                    <div class=\"dataBlock\">\n                        <label>txId:</label>\n                        <div class=\"dataContent\">\n                            {{responseInfo.txId}}\n                        </div>\n                    </div>\n                    <div class=\"dataBlock\">\n                        <label>Composite finger count:</label>\n                        <div class=\"dataContent\">\n                            {{responseInfo.compositeFingerCount}}\n                        </div>\n                    </div>\n                    <div class=\"dataBlock\">\n                        <label>Enrollment date:</label>\n                        <div class=\"dataContent\">\n                            {{responseInfo.enrollmentDate  | DateParsed}}\n                        </div>\n                    </div>\n                    <div class=\"dataBlock\">\n                        <label>Composite Face Count:</label>\n                        <div class=\"dataContent\">\n                            {{responseInfo.faceCount}}\n                        </div>\n                    </div>\n                    <div class=\"dataBlock\">\n                        <label>Composite Finger Count:</label>\n                        <div class=\"dataContent\">\n                            {{responseInfo.fingerCount}}\n                        </div>\n                    </div>\n                    <div class=\"dataBlock\">\n                        <label>Exception:</label>\n                        <div class=\"dataContent\">\n                            <b *ngIf=\"responseInfo.exception\">YES</b>\n                            <b *ngIf=\"!responseInfo.exception\">NO</b>\n                        </div>\n                    </div>\n                    <div class=\"dataBlock\">\n                        <label>Face count:</label>\n                        <div class=\"dataContent\">\n                            {{responseInfo.faceCount}}\n                        </div>\n                    </div>\n                    <div class=\"dataBlock\">\n                        <label>Finger count:</label>\n                        <div class=\"dataContent\">\n                            {{responseInfo.fingerCount}}\n                        </div>\n                    </div>\n                    <div class=\"dataBlock\">\n                        <label>Has Text Independent Voice:</label>\n                        <div class=\"dataContent\">\n                            <b *ngIf=\"responseInfo.hasTextIndependentVoice\">YES</b>\n                            <b *ngIf=\"!responseInfo.hasTextIndependentVoice\">NO</b>\n                        </div>\n                    </div>\n                    <div class=\"dataBlock\">\n                        <label>i1:</label>\n                        <div class=\"dataContent\">\n                            {{responseInfo.i1}}\n                        </div>\n                    </div>\n                    <div class=\"dataBlock\">\n                        <label>i2:</label>\n                        <div class=\"dataContent\">\n                            {{responseInfo.i2}}\n                        </div>\n                    </div>\n                    <div class=\"dataBlock\">\n                        <label>i3:</label>\n                        <div class=\"dataContent\">\n                            {{responseInfo.i3}}\n                        </div>\n                    </div>\n                    <div class=\"dataBlock\">\n                        <label>i4:</label>\n                        <div class=\"dataContent\">\n                            {{responseInfo.i4}}\n                        </div>\n                    </div>\n                    <div class=\"dataBlock\">\n                        <label>i5:</label>\n                        <div class=\"dataContent\">\n                            {{responseInfo.i5}}\n                        </div>\n                    </div>\n                    <div class=\"dataBlock\">\n                        <label>Last identify date:</label>\n                        <div class=\"dataContent\">\n                            {{responseInfo.lastIdentifyDate | DateParsed}}\n                        </div>\n                    </div>\n                    <div class=\"dataBlock\">\n                        <label>Last update date:</label>\n                        <div class=\"dataContent\">\n                            {{responseInfo.lastUpdateDate | DateParsed}}\n                        </div>\n                    </div>\n                    <div class=\"dataBlock\">\n                        <label>Last verify date:</label>\n                        <div class=\"dataContent\">\n                            {{responseInfo.lastVerifyDate | DateParsed}}\n                        </div>\n                    </div>\n                    <div class=\"dataBlock\">\n                        <label>s1:</label>\n                        <div class=\"dataContent\">\n                            {{responseInfo.s1}}\n                        </div>\n                    </div>\n                    <div class=\"dataBlock\">\n                        <label>s2:</label>\n                        <div class=\"dataContent\">\n                            {{responseInfo.s2}}\n                        </div>\n                    </div>\n                    <div class=\"dataBlock\">\n                        <label>s3:</label>\n                        <div class=\"dataContent\">\n                            {{responseInfo.s3}}\n                        </div>\n                    </div>\n                    <div class=\"dataBlock\">\n                        <label>s4:</label>\n                        <div class=\"dataContent\">\n                            {{responseInfo.s4}}\n                        </div>\n                    </div>\n                    <div class=\"dataBlock\">\n                        <label>s5:</label>\n                        <div class=\"dataContent\">\n                            {{responseInfo.s5}}\n                        </div>\n                    </div>\n                    <div class=\"dataBlock\">\n                        <label>Status:</label>\n                        <div class=\"dataContent\">\n                            {{responseInfo.status}}\n                        </div>\n                    </div>\n                    <div class=\"dataBlock\">\n                        <label>Text dependent voice count:</label>\n                        <div class=\"dataContent\">\n                            {{responseInfo.textDependentVoiceCount}}\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </section>\n    </form>\n</div>\n\n<section id=\"response\" *ngIf=\"step==2\">\n    <div class=\"url\"><span class=\"method\">POST</span> {{urlEndpoint}}</div>\n    <code [class.error]=\"error\">\n            {{jsonResponse}}\n        </code>\n    <div class=\"responses\" *ngIf=\"response\">\n        <div class=\"responseProcessed\">\n            <div class=\"dataBlock\">\n                <label>TxId:</label>\n                <div class=\"dataContent\">\n                    {{response.txId}}\n                </div>\n            </div>\n            <div class=\"dataBlock borderFixed\">\n                <div class=\"dataContent\">\n                    <b>IDS:</b>\n                    <!-- <div class=\"inputRow\">\n                        <label>\n                            Audit Token\n                        </label>\n                        <input type=\"text\" name=\"auditToken\" [(ngModel)]=\"auditToken\">\n                    </div> -->\n                    <ul class=\"ListActionsItems\">\n                        <li *ngFor=\"let id of response.ids\">\n                            {{id}}\n                            <div class=\"actions\">\n                                <span class=\"delete\" title=\"Delete\" (click)=\"delete(id)\">\n                                    <svg class=\"svg-icon\" viewBox=\"0 0 20 20\">\n                                        <path\n                                            d=\"M10.185,1.417c-4.741,0-8.583,3.842-8.583,8.583c0,4.74,3.842,8.582,8.583,8.582S18.768,14.74,18.768,10C18.768,5.259,14.926,1.417,10.185,1.417 M10.185,17.68c-4.235,0-7.679-3.445-7.679-7.68c0-4.235,3.444-7.679,7.679-7.679S17.864,5.765,17.864,10C17.864,14.234,14.42,17.68,10.185,17.68 M10.824,10l2.842-2.844c0.178-0.176,0.178-0.46,0-0.637c-0.177-0.178-0.461-0.178-0.637,0l-2.844,2.841L7.341,6.52c-0.176-0.178-0.46-0.178-0.637,0c-0.178,0.176-0.178,0.461,0,0.637L9.546,10l-2.841,2.844c-0.178,0.176-0.178,0.461,0,0.637c0.178,0.178,0.459,0.178,0.637,0l2.844-2.841l2.844,2.841c0.178,0.178,0.459,0.178,0.637,0c0.178-0.176,0.178-0.461,0-0.637L10.824,10z\">\n                                        </path>\n                                    </svg>\n                                </span>\n                                <span class=\"download\" title=\"Download zip\" (click)=\"download(id)\">\n                                    <svg class=\"svg-icon\" viewBox=\"0 0 20 20\">\n                                        <path\n                                            d=\"M4.317,16.411c-1.423-1.423-1.423-3.737,0-5.16l8.075-7.984c0.994-0.996,2.613-0.996,3.611,0.001C17,4.264,17,5.884,16.004,6.88l-8.075,7.984c-0.568,0.568-1.493,0.569-2.063-0.001c-0.569-0.569-0.569-1.495,0-2.064L9.93,8.828c0.145-0.141,0.376-0.139,0.517,0.005c0.141,0.144,0.139,0.375-0.006,0.516l-4.062,3.968c-0.282,0.282-0.282,0.745,0.003,1.03c0.285,0.284,0.747,0.284,1.032,0l8.074-7.985c0.711-0.71,0.711-1.868-0.002-2.579c-0.711-0.712-1.867-0.712-2.58,0l-8.074,7.984c-1.137,1.137-1.137,2.988,0.001,4.127c1.14,1.14,2.989,1.14,4.129,0l6.989-6.896c0.143-0.142,0.375-0.14,0.516,0.003c0.143,0.143,0.141,0.374-0.002,0.516l-6.988,6.895C8.054,17.836,5.743,17.836,4.317,16.411\">\n                                        </path>\n                                    </svg>\n                                </span>\n                                <span class=\"viewData\" title=\"View data\" (click)=\"viewData(id)\">\n                                    <svg class=\"svg-icon\" viewBox=\"0 0 20 20\">\n                                        <path\n                                            d=\"M8.749,9.934c0,0.247-0.202,0.449-0.449,0.449H4.257c-0.247,0-0.449-0.202-0.449-0.449S4.01,9.484,4.257,9.484H8.3C8.547,9.484,8.749,9.687,8.749,9.934 M7.402,12.627H4.257c-0.247,0-0.449,0.202-0.449,0.449s0.202,0.449,0.449,0.449h3.145c0.247,0,0.449-0.202,0.449-0.449S7.648,12.627,7.402,12.627 M8.3,6.339H4.257c-0.247,0-0.449,0.202-0.449,0.449c0,0.247,0.202,0.449,0.449,0.449H8.3c0.247,0,0.449-0.202,0.449-0.449C8.749,6.541,8.547,6.339,8.3,6.339 M18.631,4.543v10.78c0,0.248-0.202,0.45-0.449,0.45H2.011c-0.247,0-0.449-0.202-0.449-0.45V4.543c0-0.247,0.202-0.449,0.449-0.449h16.17C18.429,4.094,18.631,4.296,18.631,4.543 M17.732,4.993H2.46v9.882h15.272V4.993z M16.371,13.078c0,0.247-0.202,0.449-0.449,0.449H9.646c-0.247,0-0.449-0.202-0.449-0.449c0-1.479,0.883-2.747,2.162-3.299c-0.434-0.418-0.714-1.008-0.714-1.642c0-1.197,0.997-2.246,2.133-2.246s2.134,1.049,2.134,2.246c0,0.634-0.28,1.224-0.714,1.642C15.475,10.331,16.371,11.6,16.371,13.078M11.542,8.137c0,0.622,0.539,1.348,1.235,1.348s1.235-0.726,1.235-1.348c0-0.622-0.539-1.348-1.235-1.348S11.542,7.515,11.542,8.137 M15.435,12.629c-0.214-1.273-1.323-2.246-2.657-2.246s-2.431,0.973-2.644,2.246H15.435z\">\n                                        </path>\n                                    </svg>\n                                </span>\n                                <span class=\"viewInfo\" title=\"View info\" (click)=\"viewInfo(id)\">\n                                    <svg class=\"svg-icon\" viewBox=\"0 0 20 20\">\n                                        <path\n                                            d=\"M18.125,15.804l-4.038-4.037c0.675-1.079,1.012-2.308,1.01-3.534C15.089,4.62,12.199,1.75,8.584,1.75C4.815,1.75,1.982,4.726,2,8.286c0.021,3.577,2.908,6.549,6.578,6.549c1.241,0,2.417-0.347,3.44-0.985l4.032,4.026c0.167,0.166,0.43,0.166,0.596,0l1.479-1.478C18.292,16.234,18.292,15.968,18.125,15.804 M8.578,13.99c-3.198,0-5.716-2.593-5.733-5.71c-0.017-3.084,2.438-5.686,5.74-5.686c3.197,0,5.625,2.493,5.64,5.624C14.242,11.548,11.621,13.99,8.578,13.99 M16.349,16.981l-3.637-3.635c0.131-0.11,0.721-0.695,0.876-0.884l3.642,3.639L16.349,16.981z\">\n                                        </path>\n                                    </svg>\n                                </span>\n                            </div>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n    <button type=\"button\" class=\"send\" (click)=\"step = 1\">Retry</button>\n</section>\n\n<form *ngIf=\"step==1\">\n    <section>\n        <div class=\"inputRow\">\n            <label>\n                Audit Token\n            </label>\n            <input type=\"text\" name=\"auditToken\" [(ngModel)]=\"dto.auditToken\">\n        </div>\n    </section>\n    <section>\n        <header>\n            <h3>Conditions</h3>\n        </header>\n        <div class=\"inputRow\">\n            <label>\n                i1\n            </label>\n            <input type=\"number\" name=\"i1\" [(ngModel)]=\"dto.conditions.i1\">\n        </div>\n        <div class=\"inputRow\">\n            <label>\n                i2\n            </label>\n            <input type=\"number\" name=\"i2\" [(ngModel)]=\"dto.conditions.i2\">\n        </div>\n        <div class=\"inputRow\">\n            <label>\n                i3\n            </label>\n            <input type=\"number\" name=\"i3\" [(ngModel)]=\"dto.conditions.i3\">\n        </div>\n        <div class=\"inputRow\">\n            <label>\n                i4\n            </label>\n            <input type=\"number\" name=\"i4\" [(ngModel)]=\"dto.conditions.i4\">\n        </div>\n        <div class=\"inputRow\">\n            <label>\n                i5\n            </label>\n            <input type=\"number\" name=\"i5\" [(ngModel)]=\"dto.conditions.i5\">\n        </div>\n\n        <div class=\"inputRow\">\n            <label>\n                id\n            </label>\n            <input type=\"text\" name=\"id\" [(ngModel)]=\"dto.conditions.id\">\n        </div>\n        <div class=\"inputRow\">\n            <label>\n                id In\n            </label>\n            <input type=\"text\" name=\"idIn\" [(ngModel)]=\"dto.conditions.idIn\">\n        </div>\n        <div class=\"inputRow\">\n            <label>\n                id Like\n            </label>\n            <input type=\"text\" name=\"idLike\" [(ngModel)]=\"dto.conditions.idLike\">\n        </div>\n        <div class=\"inputRow\">\n            <label>\n                id No\n            </label>\n            <input type=\"text\" name=\"idNo\" [(ngModel)]=\"dto.conditions.idNo\">\n        </div>\n        <div class=\"inputRow\">\n            <label>\n                s1\n            </label>\n            <input type=\"text\" name=\"s1\" [(ngModel)]=\"dto.conditions.s1\">\n        </div>\n        <div class=\"inputRow\">\n            <label>\n                s2\n            </label>\n            <input type=\"text\" name=\"s2\" [(ngModel)]=\"dto.conditions.s2\">\n        </div>\n        <div class=\"inputRow\">\n            <label>\n                s3\n            </label>\n            <input type=\"text\" name=\"s3\" [(ngModel)]=\"dto.conditions.s3\">\n        </div>\n        <div class=\"inputRow\">\n            <label>\n                s4\n            </label>\n            <input type=\"text\" name=\"s4\" [(ngModel)]=\"dto.conditions.s4\">\n        </div>\n        <div class=\"inputRow\">\n            <label>\n                s5\n            </label>\n            <input type=\"text\" name=\"s5\" [(ngModel)]=\"dto.conditions.s5\">\n        </div>\n    </section>\n    <section>\n        <button type=\"button\" class=\"send\" (click)=\"send()\">Send Data</button>\n    </section>\n</form>"

/***/ }),

/***/ "./src/app/pages/database/list/list.component.sass":
/*!*********************************************************!*\
  !*** ./src/app/pages/database/list/list.component.sass ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".borderFixed {\n  border: 1px solid #cecece;\n  margin: 5px 0px;\n  padding: 3px;\n  background: white; }\n  .borderFixed .dataContent {\n    display: block !important; }\n  .borderFixed .dataContent .ListActionsItems {\n      list-style: none;\n      padding: 0px; }\n  .borderFixed .dataContent .ListActionsItems li {\n        display: block;\n        margin: 5px;\n        background: #e8f7e3;\n        padding: 5px;\n        font-family: helvetica;\n        font-size: 13px;\n        position: relative; }\n  .borderFixed .dataContent .ListActionsItems li:hover {\n          background: #fbfffa; }\n  .borderFixed .dataContent .ListActionsItems li .actions {\n          position: absolute;\n          right: 1px;\n          top: 1px; }\n  .borderFixed .dataContent .ListActionsItems li .actions span {\n            display: inline-block;\n            width: 20px;\n            cursor: pointer;\n            margin: 2px 3px; }\n  .borderFixed .dataContent .ListActionsItems li .actions span.delete:hover::after {\n              content: 'Delete';\n              position: absolute;\n              top: -16px;\n              left: -8px;\n              background: white;\n              border-radius: 3px;\n              padding: 2px; }\n  .borderFixed .dataContent .ListActionsItems li .actions span.download:hover::after {\n              content: 'Download Zip';\n              position: absolute;\n              top: -16px;\n              left: -8px;\n              background: white;\n              border-radius: 3px;\n              padding: 2px; }\n  .borderFixed .dataContent .ListActionsItems li .actions span.viewData:hover::after {\n              content: 'View Data';\n              position: absolute;\n              top: -16px;\n              left: -8px;\n              background: white;\n              border-radius: 3px;\n              padding: 2px; }\n  .borderFixed .dataContent .ListActionsItems li .actions span.viewInfo:hover::after {\n              content: 'View Info';\n              position: absolute;\n              top: -16px;\n              left: -8px;\n              background: white;\n              border-radius: 3px;\n              padding: 2px; }\n  .popup {\n  position: fixed;\n  top: 1px;\n  width: 80%;\n  height: 100%;\n  background: #0000000f;\n  z-index: 1;\n  padding-top: 45px; }\n  .popup form {\n    background: white;\n    height: auto; }\n  .popup .close {\n    width: 25px;\n    position: absolute;\n    right: 40px;\n    margin-top: 10px;\n    cursor: pointer; }\n  .fixedTPLUL {\n  width: calc(100% - 45px); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZHkvcmVwb3Mvc29iaW8vc3JjL2FwcC9wYWdlcy9kYXRhYmFzZS9saXN0L2xpc3QuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLFlBQVk7RUFDWixpQkFBaUIsRUFBQTtFQUpyQjtJQU1RLHlCQUF3QixFQUFBO0VBTmhDO01BUVksZ0JBQWdCO01BQ2hCLFlBQVksRUFBQTtFQVR4QjtRQVdnQixjQUFjO1FBQ2QsV0FBVztRQUNYLG1CQUFtQjtRQUNuQixZQUFZO1FBQ1osc0JBQXNCO1FBQ3RCLGVBQWU7UUFDZixrQkFBa0IsRUFBQTtFQWpCbEM7VUFtQm9CLG1CQUFtQixFQUFBO0VBbkJ2QztVQXFCb0Isa0JBQWtCO1VBQ2xCLFVBQVU7VUFDVixRQUFRLEVBQUE7RUF2QjVCO1lBeUJ3QixxQkFBcUI7WUFDckIsV0FBVztZQUNYLGVBQWU7WUFDZixlQUFlLEVBQUE7RUE1QnZDO2NBOEI0QixpQkFBaUI7Y0FDakIsa0JBQWtCO2NBQ2xCLFVBQVU7Y0FDVixVQUFVO2NBQ1YsaUJBQWlCO2NBQ2pCLGtCQUFrQjtjQUNsQixZQUFZLEVBQUE7RUFwQ3hDO2NBc0M0Qix1QkFBdUI7Y0FDdkIsa0JBQWtCO2NBQ2xCLFVBQVU7Y0FDVixVQUFVO2NBQ1YsaUJBQWlCO2NBQ2pCLGtCQUFrQjtjQUNsQixZQUFZLEVBQUE7RUE1Q3hDO2NBOEM0QixvQkFBb0I7Y0FDcEIsa0JBQWtCO2NBQ2xCLFVBQVU7Y0FDVixVQUFVO2NBQ1YsaUJBQWlCO2NBQ2pCLGtCQUFrQjtjQUNsQixZQUFZLEVBQUE7RUFwRHhDO2NBc0Q0QixvQkFBb0I7Y0FDcEIsa0JBQWtCO2NBQ2xCLFVBQVU7Y0FDVixVQUFVO2NBQ1YsaUJBQWlCO2NBQ2pCLGtCQUFrQjtjQUNsQixZQUFZLEVBQUE7RUFDeEM7RUFDSSxlQUFlO0VBQ2YsUUFBUTtFQUNSLFVBQVU7RUFDVixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixpQkFBaUIsRUFBQTtFQVByQjtJQVNRLGlCQUFpQjtJQUNqQixZQUFZLEVBQUE7RUFWcEI7SUFZUSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZUFBZSxFQUFBO0VBQ3ZCO0VBQ0ksd0JBQXdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kYXRhYmFzZS9saXN0L2xpc3QuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9yZGVyRml4ZWQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZWNlY2U7XG4gICAgbWFyZ2luOiA1cHggMHB4O1xuICAgIHBhZGRpbmc6IDNweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAuZGF0YUNvbnRlbnQge1xuICAgICAgICBkaXNwbGF5OiBibG9jayFpbXBvcnRhbnQ7XG4gICAgICAgIC5MaXN0QWN0aW9uc0l0ZW1zIHtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2U4ZjdlMztcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IGhlbHZldGljYTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmJmZmZhOyB9XG4gICAgICAgICAgICAgICAgLmFjdGlvbnMge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxcHg7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMXB4O1xuICAgICAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAycHggM3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgJi5kZWxldGU6aG92ZXI6OmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnRGVsZXRlJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAtMTZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtOHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAycHg7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICYuZG93bmxvYWQ6aG92ZXI6OmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnRG93bmxvYWQgWmlwJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAtMTZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtOHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAycHg7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICYudmlld0RhdGE6aG92ZXI6OmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnVmlldyBEYXRhJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAtMTZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtOHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAycHg7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICYudmlld0luZm86aG92ZXI6OmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnVmlldyBJbmZvJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAtMTZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtOHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAycHg7IH0gfSB9IH0gfSB9IH1cbi5wb3B1cCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMXB4O1xuICAgIHdpZHRoOiA4MCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6ICMwMDAwMDAwZjtcbiAgICB6LWluZGV4OiAxO1xuICAgIHBhZGRpbmctdG9wOiA0NXB4O1xuICAgIGZvcm0ge1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgaGVpZ2h0OiBhdXRvOyB9XG4gICAgLmNsb3NlIHtcbiAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDQwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjsgfSB9XG4uZml4ZWRUUExVTCB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQ1cHgpOyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/database/list/list.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/database/list/list.component.ts ***!
  \*******************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _providers_database_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../providers/database.service */ "./src/app/providers/database.service.ts");
/* harmony import */ var _Utils_UUID__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../Utils/UUID */ "./src/app/Utils/UUID.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_dataTypeObjects_bioList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dataTypeObjects/bioList */ "./src/app/dataTypeObjects/bioList.ts");





var ListComponent = /** @class */ (function () {
    function ListComponent(dbSrv) {
        this.dbSrv = dbSrv;
        this.dto = new src_app_dataTypeObjects_bioList__WEBPACK_IMPORTED_MODULE_4__["BioList"]();
    }
    ListComponent.prototype.ngOnInit = function () {
        this.step = 1;
        this.dto.auditToken = _Utils_UUID__WEBPACK_IMPORTED_MODULE_2__["UUID"].create();
        this.popup = false;
        this.subAction = 0;
        this.subStep = 0;
    };
    ListComponent.prototype.send = function () {
        var _this = this;
        this.dbSrv.getList(this.dto).subscribe(function (resp) {
            console.log(resp);
            _this.loading = false;
            _this.step = 2;
            _this.response = resp;
            _this.jsonResponse = JSON.stringify(resp);
        }, function (err) {
            console.log(err);
            _this.error = true;
            _this.loading = false;
            _this.step = 2;
            _this.jsonResponse = JSON.stringify(err);
        });
        this.urlEndpoint = this.dbSrv.getEndpoints().list;
    };
    ListComponent.prototype.openPopup = function () {
        this.subAuditToken = _Utils_UUID__WEBPACK_IMPORTED_MODULE_2__["UUID"].create();
        this.popup = true;
    };
    ListComponent.prototype.delete = function (subjectID) {
        this.subjectID = subjectID;
        this.openPopup();
        this.subAction = 1;
    };
    ListComponent.prototype.download = function (subjectID) {
        this.subjectID = subjectID;
        this.openPopup();
        this.subAction = 2;
    };
    ListComponent.prototype.viewData = function (subjectID) {
        this.subjectID = subjectID;
        this.openPopup();
        this.subAction = 3;
    };
    ListComponent.prototype.viewInfo = function (subjectID) {
        this.subjectID = subjectID;
        this.openPopup();
        this.subAction = 4;
    };
    ListComponent.prototype.doDelete = function () {
        var _this = this;
        this.dbSrv.delete({
            auditToken: this.subAuditToken,
            subjectId: this.subjectID
        }).subscribe(function (resp) {
            console.log(resp);
            _this.loading = false;
            _this.subStep = 2;
            _this.responseDalete = resp;
            _this.subJsonResponse = JSON.stringify(resp);
            _this.subError = false;
        }, function (err) {
            console.log(err);
            _this.subError = true;
            _this.loading = false;
            _this.subStep = 2;
            _this.subJsonResponse = JSON.stringify(err);
        });
        this.subUrlEndpoint = this.dbSrv.getEndpoints().delete;
    };
    ListComponent.prototype.doDownload = function () {
        var _this = this;
        this.dbSrv.downZip(this.subjectID).subscribe(function (resp) {
            console.log(resp);
            _this.loading = false;
            _this.subStep = 3;
            // this.responseDownzip = resp;
            var blob = new Blob([resp], { type: 'application/zip' });
            var url = window.URL.createObjectURL(blob);
            var pwa = window.open(url);
            if (!pwa || pwa.closed || typeof pwa.closed === 'undefined') {
                alert('Please disable your Pop-up blocker and try again.');
            }
            _this.subJsonResponse = JSON.stringify(resp);
            _this.subError = false;
        }, function (err) {
            console.log(err);
            _this.subError = true;
            _this.loading = false;
            _this.subStep = 3;
            _this.subJsonResponse = JSON.stringify(err);
        });
        this.subUrlEndpoint = this.dbSrv.getEndpoints().zip;
    };
    ListComponent.prototype.doViewData = function () {
        var _this = this;
        this.dbSrv.getData({
            auditToken: this.subAuditToken,
            subjectId: this.subjectID
        }).subscribe(function (resp) {
            console.log(resp);
            _this.loading = false;
            _this.subStep = 4;
            _this.responseData = resp;
            _this.subJsonResponse = JSON.stringify(resp);
            _this.subError = false;
        }, function (err) {
            console.log(err);
            _this.subError = true;
            _this.loading = false;
            _this.subStep = 4;
            _this.subJsonResponse = JSON.stringify(err);
        });
        this.subUrlEndpoint = this.dbSrv.getEndpoints().data;
    };
    ListComponent.prototype.doViewInfo = function () {
        var _this = this;
        this.dbSrv.getInfo({
            auditToken: this.subAuditToken,
            subjectId: this.subjectID
        }).subscribe(function (resp) {
            console.log(resp);
            _this.loading = false;
            _this.subStep = 5;
            _this.responseInfo = resp;
            _this.subJsonResponse = JSON.stringify(resp);
            _this.subError = false;
        }, function (err) {
            console.log(err);
            _this.subError = true;
            _this.loading = false;
            _this.subStep = 5;
            _this.subJsonResponse = JSON.stringify(err);
        });
        this.subUrlEndpoint = this.dbSrv.getEndpoints().info;
    };
    ListComponent.prototype.closePopup = function () {
        this.popup = false;
        this.subStep = 1;
    };
    ListComponent.prototype.copyComposite = function (index) {
        try {
            navigator.clipboard.writeText(this.responseData.template.compositeFingerPrints[index].template).then(function () {
                // alert('Copied A');
            });
        }
        catch (e) {
            var selection = document.getSelection();
            var range = document.createRange();
            range.selectNode(document.getElementById('tplComposite' + index));
            selection.removeAllRanges();
            selection.addRange(range);
            var result = document.execCommand('copy');
            if (!result) {
                alert('Can\'t copy (HTTPS/Chrome +43/Permisos).');
            }
            else {
                // alert('Copied B');
            }
        }
    };
    ListComponent.prototype.copyFaces = function (index) {
        try {
            navigator.clipboard.writeText(this.responseData.template.faces[index].template).then(function () {
                // alert('Copied A');
            });
        }
        catch (e) {
            var selection = document.getSelection();
            var range = document.createRange();
            range.selectNode(document.getElementById('tplFaces' + index));
            selection.removeAllRanges();
            selection.addRange(range);
            var result = document.execCommand('copy');
            if (!result) {
                alert('Can\'t copy (HTTPS/Chrome +43/Permisos).');
            }
            else {
                // alert('Copied B');
            }
        }
    };
    ListComponent.prototype.copyFingerPrint = function (index) {
        try {
            navigator.clipboard.writeText(this.responseData.template.fingerPrints[index].template).then(function () {
                // alert('Copied A');
            });
        }
        catch (e) {
            var selection = document.getSelection();
            var range = document.createRange();
            range.selectNode(document.getElementById('tplFingerPrints' + index));
            selection.removeAllRanges();
            selection.addRange(range);
            var result = document.execCommand('copy');
            if (!result) {
                alert('Can\'t copy (HTTPS/Chrome +43/Permisos).');
            }
            else {
                // alert('Copied B');
            }
        }
    };
    ListComponent.prototype.copyTDV = function (index) {
        try {
            navigator.clipboard.writeText(this.responseData.template.textDependentVoices[index].template).then(function () {
                // alert('Copied A');
            });
        }
        catch (e) {
            var selection = document.getSelection();
            var range = document.createRange();
            range.selectNode(document.getElementById('tplTDV' + index));
            selection.removeAllRanges();
            selection.addRange(range);
            var result = document.execCommand('copy');
            if (!result) {
                alert('Can\'t copy (HTTPS/Chrome +43/Permisos).');
            }
            else {
                // alert('Copied B');
            }
        }
    };
    ListComponent.prototype.copyTIV = function () {
        try {
            navigator.clipboard.writeText(this.responseData.template.textIndependentVoice.template).then(function () {
                // alert('Copied A');
            });
        }
        catch (e) {
            var selection = document.getSelection();
            var range = document.createRange();
            range.selectNode(document.getElementById('tplTIV'));
            selection.removeAllRanges();
            selection.addRange(range);
            var result = document.execCommand('copy');
            if (!result) {
                alert('Can\'t copy (HTTPS/Chrome +43/Permisos).');
            }
            else {
                // alert('Copied B');
            }
        }
    };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/pages/database/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.sass */ "./src/app/pages/database/list/list.component.sass"), __webpack_require__(/*! ../../../shared-styles/forms.scss */ "./src/app/shared-styles/forms.scss"), __webpack_require__(/*! ../../../shared-styles/playground-response.scss */ "./src/app/shared-styles/playground-response.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_database_service__WEBPACK_IMPORTED_MODULE_1__["DatabaseService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/pages/database/update/update.component.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/database/update/update.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header title=\"Database::Update\" subtitle=\"Update biometric data of an already enrolled subject\"></app-header>\n<app-loader [isLoading]=\"loading\"></app-loader>\n\n<section id=\"response\" *ngIf=\"step==2\">\n    <div class=\"url\"><span class=\"method\">POST</span> {{urlEndpoint}}</div>\n    <code [class.error]=\"error\">\n                {{jsonResponse}}\n            </code>\n    <div class=\"responses\" *ngIf=\"response\">\n        <div class=\"responseProcessed\">\n            <div class=\"dataBlock\">\n                <label>TxId:</label>\n                <div class=\"dataContent\">\n                    {{response.txId}}\n                </div>\n            </div>\n            <div class=\"dataBlock\">\n                <label>Duplicated Subject ID:</label>\n                <div class=\"dataContent\">\n                    {{response.duplicatedSubjectId}}\n                </div>\n            </div>\n            <div class=\"dataBlock\">\n                <label>Exception:</label>\n                <div class=\"dataContent\">\n                    <b *ngIf=\"response.exception\">YES</b>\n                    <b *ngIf=\"!response.exception\">NO</b>\n                </div>\n            </div>\n            <div class=\"dataBlock\">\n                <label>Status:</label>\n                <div class=\"dataContent\">\n                    {{response.status}}\n                </div>\n            </div>\n        </div>\n    </div>\n    <button type=\"button\" class=\"send\" (click)=\"step = 1\">Retry</button>\n</section>\n\n<form *ngIf=\"step==1\">\n    <section>\n        <div class=\"inputRow\">\n            <label>\n                Audit Token\n            </label>\n            <input type=\"text\" name=\"auditToken\" [(ngModel)]=\"dto.auditToken\">\n        </div>\n    </section>\n    <section>\n        <header>\n            <h3>Bio Info</h3>\n        </header>\n        <section>\n            <header>\n                <h4>Composite Finger Prints</h4>\n                <button class=\"rightButton\" (click)=\"addCompositeFinger()\">+</button>\n            </header>\n            <!-- ESTO ES UN ARREGLO -->\n            <div class=\"composedBlock\" *ngFor=\"let item of dto.bioInfo.compositeFingerPrints; let idx = index;\">\n                <button class=\"rightButton red\" (click)=\"removeCompositeFinger(idx)\">-</button>\n                <div class=\"inputRow\">\n                    <label>\n                        Finger\n                    </label>\n                    <input type=\"text\" name=\"bi1_dedo_composite{{idx}}\"\n                        [(ngModel)]=\"dto.bioInfo.compositeFingerPrints[idx].dedo\">\n                    <!-- <select name=\"bi1_dedo\">\n            <option value=\"RIGHT_THUMB\">Right Thumb</option>\n          </select> -->\n                </div>\n                <!-- IMAGES [0] -->\n                <div class=\"inputRow\">\n                    <label>\n                        Source\n                    </label>\n                    <select name=\"bi1_source_composite{{idx}}\"\n                        [(ngModel)]=\"dto.bioInfo.compositeFingerPrints[idx].source\">\n                        <option>LIVE_FINGERPRINT</option>\n                        <option>SCANNED_FINGERPRINT_IMAGE</option>\n                        <option>UNKNOWN</option>\n                    </select>\n                    <!-- <select name=\"bi1_source\">\n            <option value=\"LIVE_FINGERPRINT\">Live Fingerprint</option>\n          </select> -->\n                </div>\n                <div class=\"inputRow\">\n                    <label>\n                        Template\n                    </label>\n                    <textarea name=\"bi1_template_composite{{idx}}\"\n                        [(ngModel)]=\"dto.bioInfo.compositeFingerPrints[idx].template\"></textarea>\n                </div>\n            </div>\n        </section>\n        <section>\n            <header>\n                <h4>Faces</h4>\n                <button class=\"rightButton\" (click)=\"addFace()\">+</button>\n            </header>\n            <div class=\"composedBlock\" *ngFor=\"let item of dto.bioInfo.faces; let idx = index;\">\n                <button class=\"rightButton red\" (click)=\"removeFace(idx)\">-</button>\n                <div class=\"inputRow\">\n                    <label>\n                        Select image file\n                    </label>\n                    <input type=\"file\" accept=\"image/*\" name=\"bi1_image_faces{{idx}}\"\n                        (change)=\"bi1_image_faces_change(idx)\" #bi1_image_faces>\n                </div>\n                <div class=\"inputRow\">\n                    <label>\n                        Template\n                    </label>\n                    <textarea name=\"bi1_template_faces{{idx}}\" [(ngModel)]=\"dto.bioInfo.faces[idx].template\"></textarea>\n                </div>\n            </div>\n        </section>\n        <section>\n            <header>\n                <h4>Finger Prints</h4>\n                <button class=\"rightButton\" (click)=\"addFPrint()\">+</button>\n            </header>\n            <div class=\"composedBlock\" *ngFor=\"let item of dto.bioInfo.fingerPrints; let idx = index;\">\n                <div class=\"inputRow\">\n                    <button class=\"rightButton red\" (click)=\"removeFPrint(idx)\">-</button>\n                    <label>\n                        Template Format\n                    </label>\n                    <input type=\"text\" name=\"bi1_template_format_fp{{idx}}\"\n                        [(ngModel)]=\"dto.bioInfo.fingerPrints[idx].formatoTemplate\">\n                </div>\n                <div class=\"inputRow\">\n                    <label>\n                        Select image file\n                    </label>\n                    <input type=\"file\" accept=\"image/*\" (change)=\"bi1_image_fprints_change(idx)\" #bi1_image_fprints>\n                </div>\n                <div class=\"inputRow\">\n                    <label>\n                        Image Source\n                    </label>\n                    <select name=\"bi1_imagesource_fp{{idx}}\" [(ngModel)]=\"dto.bioInfo.fingerPrints[idx].imageSource\">\n                        <option>LIVE_FINGERPRINT</option>\n                        <option>SCANNED_FINGERPRINT_IMAGE</option>\n                        <option>UNKNOWN</option>\n                    </select>\n                </div>\n                <div class=\"inputRow\">\n                    <label>\n                        Position\n                    </label>\n                    <select name=\"bi1_position_fp{{idx}}\" [(ngModel)]=\"dto.bioInfo.fingerPrints[idx].position\">\n                        <option>RIGHT_THUMB</option>\n                        <option>LEFT_THUMB</option>\n                        <option>RIGHT_INDEX_FINGER</option>\n                        <option>LEFT_INDEX_FINGER</option>\n                        <option>RIGHT_MIDDLE_FINGER</option>\n                        <option>LEFT_MIDDLE_FINGER</option>\n                        <option>RIGHT_RING_FINGER</option>\n                        <option>LEFT_RING_FINGER</option>\n                        <option>RIGHT_LITTLE_FINGER</option>\n                        <option>LEFT_LITTLE_FINGER</option>\n                        <option>UNKNOWN</option>\n                    </select>\n                </div>\n                <div class=\"inputRow\">\n                    <label>\n                        Template\n                    </label>\n                    <textarea name=\"bi1_template_fp{{idx}}\"\n                        [(ngModel)]=\"dto.bioInfo.fingerPrints[idx].template\"></textarea>\n                </div>\n            </div>\n        </section>\n        <section>\n            <header>\n                <h4>Text Dependent Voices</h4>\n                <button class=\"rightButton\" (click)=\"addTDV()\">+</button>\n            </header>\n            <div class=\"composedBlock\" *ngFor=\"let item of dto.bioInfo.textDependentVoices; let idx = index;\">\n                <button class=\"rightButton red\" (click)=\"removeTDV(idx)\">-</button>\n                <div class=\"inputRow\">\n                    <label>\n                        Select audio file\n                    </label>\n                    <input type=\"file\" accept=\"audio/*\" (change)=\"bi1_audio_tdv_change(idx)\" #bi1_audio_tdv>\n                </div>\n                <div class=\"inputRow\">\n                    <label>\n                        Phase ID\n                    </label>\n                    <input type=\"number\" name=\"bi1_phaseid_tdv{{idx}}\"\n                        [(ngModel)]=\"dto.bioInfo.textDependentVoices[idx].phraseId\">\n                </div>\n                <div class=\"inputRow\">\n                    <label>\n                        Template\n                    </label>\n                    <textarea name=\"bi1_template_tdv{{idx}}\"\n                        [(ngModel)]=\"dto.bioInfo.textDependentVoices[idx].template\"></textarea>\n                </div>\n            </div>\n        </section>\n        <section>\n            <header>\n                <h4>Text Independent Voices</h4>\n            </header>\n            <div class=\"inputRow\">\n                <label>\n                    Select audio file\n                </label>\n                <input type=\"file\" value=\"\" accept=\"audio/*\" (change)=\"bi1_audio_tiv_change(idx)\" #bi1_audio_tiv>\n            </div>\n            <div class=\"inputRow\">\n                <label>\n                    Template\n                </label>\n                <textarea name=\"bi1_template_tiv\" [(ngModel)]=\"dto.bioInfo.textDependentVoices.template\"></textarea>\n            </div>\n        </section>\n    </section>\n    <section>\n        <header>\n            <h3>Params</h3>\n        </header>\n        <section>\n            <header>\n                <h4>Conditions</h4>\n            </header>\n            <div class=\"inputRow\">\n                <label>\n                    I1\n                </label>\n                <input type=\"number\" name=\"i1\" [(ngModel)]=\"dto.params.conditions.i1\">\n            </div>\n            <div class=\"inputRow\">\n                <label>\n                    I2\n                </label>\n                <input type=\"number\" name=\"i2\" [(ngModel)]=\"dto.params.conditions.i2\">\n            </div>\n            <div class=\"inputRow\">\n                <label>\n                    I3\n                </label>\n                <input type=\"number\" name=\"i3\" [(ngModel)]=\"dto.params.conditions.i3\">\n            </div>\n            <div class=\"inputRow\">\n                <label>\n                    I4\n                </label>\n                <input type=\"number\" name=\"i4\" [(ngModel)]=\"dto.params.conditions.i4\">\n            </div>\n            <div class=\"inputRow\">\n                <label>\n                    I5\n                </label>\n                <input type=\"number\" name=\"i5\" [(ngModel)]=\"dto.params.conditions.i5\">\n            </div>\n            <div class=\"inputRow\">\n                <label>\n                    id\n                </label>\n                <input type=\"text\" name=\"id\" [(ngModel)]=\"dto.params.conditions.id\">\n            </div>\n            <div class=\"inputRow\">\n                <label>\n                    id In\n                </label>\n                <input type=\"text\" name=\"idIn\" [(ngModel)]=\"dto.params.conditions.idIn\">\n            </div>\n            <div class=\"inputRow\">\n                <label>\n                    id Like\n                </label>\n                <input type=\"text\" name=\"idLike\" [(ngModel)]=\"dto.params.conditions.idLike\">\n            </div>\n            <div class=\"inputRow\">\n                <label>\n                    id No\n                </label>\n                <input type=\"text\" name=\"idNo\" [(ngModel)]=\"dto.params.conditions.id\">\n            </div>\n            <div class=\"inputRow\">\n                <label>\n                    s1\n                </label>\n                <input type=\"text\" name=\"s1\" [(ngModel)]=\"dto.params.conditions.s1\">\n            </div>\n            <div class=\"inputRow\">\n                <label>\n                    s2\n                </label>\n                <input type=\"text\" name=\"s2\" [(ngModel)]=\"dto.params.conditions.s2\">\n            </div>\n            <div class=\"inputRow\">\n                <label>\n                    s3\n                </label>\n                <input type=\"text\" name=\"s3\" [(ngModel)]=\"dto.params.conditions.s3\">\n            </div>\n            <div class=\"inputRow\">\n                <label>\n                    s4\n                </label>\n                <input type=\"text\" name=\"s4\" [(ngModel)]=\"dto.params.conditions.s4\">\n            </div>\n            <div class=\"inputRow\">\n                <label>\n                    s5\n                </label>\n                <input type=\"text\" name=\"s5\" [(ngModel)]=\"dto.params.conditions.s5\">\n            </div>\n        </section>\n        <section>\n            <header>\n                <h4>Duplicate Search</h4>\n                <div class=\"buttonRights\">\n                    <app-switch [initStatus]=\"duplicatedSearch\" (switch)=\"duplicatedSearch = $event\"\n                        style=\"display: inline-block;\"></app-switch>\n                </div>\n            </header>\n            <div class=\"container\" *ngIf=\"duplicatedSearch\">\n                <div class=\"inputRow\">\n                    <label>\n                        I1\n                    </label>\n                    <input type=\"number\" name=\"dupl_i1\"\n                        [(ngModel)]=\"dto.params.duplicateSearchParameters.conditions.i1\">\n                </div>\n                <div class=\"inputRow\">\n                    <label>\n                        I2\n                    </label>\n                    <input type=\"number\" name=\"dupl_i2\"\n                        [(ngModel)]=\"dto.params.duplicateSearchParameters.conditions.i2\">\n                </div>\n                <div class=\"inputRow\">\n                    <label>\n                        I3\n                    </label>\n                    <input type=\"number\" name=\"dupl_i3\"\n                        [(ngModel)]=\"dto.params.duplicateSearchParameters.conditions.i3\">\n                </div>\n                <div class=\"inputRow\">\n                    <label>\n                        I4\n                    </label>\n                    <input type=\"number\" name=\"dupl_i4\"\n                        [(ngModel)]=\"dto.params.duplicateSearchParameters.conditions.i4\">\n                </div>\n                <div class=\"inputRow\">\n                    <label>\n                        I5\n                    </label>\n                    <input type=\"number\" name=\"dupl_i5\"\n                        [(ngModel)]=\"dto.params.duplicateSearchParameters.conditions.i5\">\n                </div>\n                <div class=\"inputRow\">\n                    <label>\n                        id\n                    </label>\n                    <input type=\"text\" name=\"dupl_id\" [(ngModel)]=\"dto.params.duplicateSearchParameters.conditions.id\">\n                </div>\n                <div class=\"inputRow\">\n                    <label>\n                        id In\n                    </label>\n                    <input type=\"text\" name=\"dupl_idIn\"\n                        [(ngModel)]=\"dto.params.duplicateSearchParameters.conditions.idIn\">\n                </div>\n                <div class=\"inputRow\">\n                    <label>\n                        id Like\n                    </label>\n                    <input type=\"text\" name=\"dupl_idLike\"\n                        [(ngModel)]=\"dto.params.duplicateSearchParameters.conditions.idLike\">\n                </div>\n                <div class=\"inputRow\">\n                    <label>\n                        id No\n                    </label>\n                    <input type=\"text\" name=\"dupl_idNo\"\n                        [(ngModel)]=\"dto.params.duplicateSearchParameters.conditions.id\">\n                </div>\n                <div class=\"inputRow\">\n                    <label>\n                        s1\n                    </label>\n                    <input type=\"text\" name=\"dupl_s1\" [(ngModel)]=\"dto.params.duplicateSearchParameters.conditions.s1\">\n                </div>\n                <div class=\"inputRow\">\n                    <label>\n                        s2\n                    </label>\n                    <input type=\"text\" name=\"dupl_s2\" [(ngModel)]=\"dto.params.duplicateSearchParameters.conditions.s2\">\n                </div>\n                <div class=\"inputRow\">\n                    <label>\n                        s3\n                    </label>\n                    <input type=\"text\" name=\"dupl_s3\" [(ngModel)]=\"dto.params.duplicateSearchParameters.conditions.s3\">\n                </div>\n                <div class=\"inputRow\">\n                    <label>\n                        s4\n                    </label>\n                    <input type=\"text\" name=\"dupl_s4\" [(ngModel)]=\"dto.params.duplicateSearchParameters.conditions.s4\">\n                </div>\n                <div class=\"inputRow\">\n                    <label>\n                        s5\n                    </label>\n                    <input type=\"text\" name=\"dupl_s5\" [(ngModel)]=\"dto.params.duplicateSearchParameters.conditions.s5\">\n                </div>\n                <div class=\"inputRow\">\n                    <label>\n                        Confidence\n                    </label>\n                    <app-gauge [percent]=\"(1000 - farCalculated) / 10\"></app-gauge>\n                </div>\n                <div class=\"inputRow\">\n                    <label>\n                        Far\n                    </label>\n                    <input name=\"far\" [(ngModel)]=\"farCalculated\" type=\"range\" min=\"1\" max=\"999\" />\n                    <app-gauge [percent]=\"farCalculated / 10\" color=\"#eeab00\"></app-gauge>\n                </div>\n                <section>\n                    <header>\n                        <h4>Finger Print Matching Params</h4>\n                    </header>\n                    <div class=\"inputRow\">\n                        <label>\n                            Max Rotation\n                        </label>\n                        <input name=\"maxRotation\" type=\"range\" min=\"0\" max=\"180\"\n                            [(ngModel)]=\"dto.params.duplicateSearchParameters.fingerPrintMatchingParams.maxRotation\" />\n                        {{dto.params.duplicateSearchParameters.fingerPrintMatchingParams.maxRotation}}\n                    </div>\n                    <div class=\"inputRow\">\n                        <label>\n                            Use Only Ansi378\n                        </label>\n                        <input type=\"checkbox\"\n                            [(ngModel)]=\"dto.params.duplicateSearchParameters.fingerPrintMatchingParams.useOnlyAnsi378\"\n                            name=\"useOnlyAnsi378\" />\n                    </div>\n                </section>\n                <div class=\"inputRow\">\n                    <label>\n                        Global Search With Conditions\n                    </label>\n                    <input type=\"checkbox\" [(ngModel)]=\"dto.params.duplicateSearchParameters.globalSearchWithConditions\"\n                        name=\"globalSearchWithConditions\" />\n                </div>\n            </div>\n        </section>\n    </section>\n    <section>\n        <div class=\"inputRow\">\n            <label>\n                Subject ID\n            </label>\n            <input type=\"text\" name=\"subjectID\" [(ngModel)]=\"dto.subjectId\">\n        </div>\n    </section>\n    <section>\n        <button type=\"button\" class=\"send\" (click)=\"send()\">Send Data</button>\n    </section>\n</form>"

/***/ }),

/***/ "./src/app/pages/database/update/update.component.sass":
/*!*************************************************************!*\
  !*** ./src/app/pages/database/update/update.component.sass ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RhdGFiYXNlL3VwZGF0ZS91cGRhdGUuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/database/update/update.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/database/update/update.component.ts ***!
  \***********************************************************/
/*! exports provided: UpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateComponent", function() { return UpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_dataTypeObjects_update__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dataTypeObjects/update */ "./src/app/dataTypeObjects/update.ts");
/* harmony import */ var src_app_providers_database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/providers/database.service */ "./src/app/providers/database.service.ts");
/* harmony import */ var src_app_Utils_UUID__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Utils/UUID */ "./src/app/Utils/UUID.ts");
/* harmony import */ var src_app_dataTypeObjects_verifyT2t__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/dataTypeObjects/verifyT2t */ "./src/app/dataTypeObjects/verifyT2t.ts");
/* harmony import */ var src_app_dataTypeObjects_enroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/dataTypeObjects/enroll */ "./src/app/dataTypeObjects/enroll.ts");







var UpdateComponent = /** @class */ (function () {
    function UpdateComponent(dbSrv) {
        this.dbSrv = dbSrv;
        this.dto = new src_app_dataTypeObjects_update__WEBPACK_IMPORTED_MODULE_2__["Update"]();
    }
    UpdateComponent.prototype.ngOnInit = function () {
        this.step = 1;
        this.duplicatedSearch = true;
        this.dto.auditToken = src_app_Utils_UUID__WEBPACK_IMPORTED_MODULE_4__["UUID"].create();
        this.farCalculated = this.dto.params.duplicateSearchParameters.far;
        this.duplicatedSearch = true;
    };
    UpdateComponent.prototype.addCompositeFinger = function () {
        this.dto.bioInfo.compositeFingerPrints.push(new src_app_dataTypeObjects_verifyT2t__WEBPACK_IMPORTED_MODULE_5__["CompositeFingerPrints"]());
    };
    UpdateComponent.prototype.removeCompositeFinger = function (idx) {
        this.dto.bioInfo.compositeFingerPrints.splice(idx, 1);
    };
    UpdateComponent.prototype.addFace = function () {
        this.dto.bioInfo.faces.push(new src_app_dataTypeObjects_verifyT2t__WEBPACK_IMPORTED_MODULE_5__["Faces"]());
    };
    UpdateComponent.prototype.removeFace = function (idx) {
        this.dto.bioInfo.faces.splice(idx, 1);
    };
    UpdateComponent.prototype.addFPrint = function () {
        this.dto.bioInfo.fingerPrints.push(new src_app_dataTypeObjects_verifyT2t__WEBPACK_IMPORTED_MODULE_5__["FingerPrints"]());
    };
    UpdateComponent.prototype.removeFPrint = function (idx) {
        this.dto.bioInfo.fingerPrints.splice(idx, 1);
    };
    UpdateComponent.prototype.addTDV = function () {
        this.dto.bioInfo.textDependentVoices.push(new src_app_dataTypeObjects_verifyT2t__WEBPACK_IMPORTED_MODULE_5__["TextDependentVoices"]());
    };
    UpdateComponent.prototype.removeTDV = function (idx) {
        this.dto.bioInfo.textDependentVoices.splice(idx, 1);
    };
    UpdateComponent.prototype.send = function () {
        var _this = this;
        this.error = false;
        this.loading = true;
        this.dto.params.duplicateSearchParameters.far = this.farCalculated / 100;
        if (!this.duplicatedSearch) {
            this.dto.params.duplicateSearchParameters = undefined;
        }
        this.dbSrv.update(this.dto).subscribe(function (resp) {
            console.log(resp);
            _this.loading = false;
            _this.step = 2;
            _this.response = resp;
            _this.jsonResponse = JSON.stringify(resp);
            _this.dto.params.duplicateSearchParameters = new src_app_dataTypeObjects_enroll__WEBPACK_IMPORTED_MODULE_6__["DuplicateSearchParameters"]();
        }, function (err) {
            console.log(err);
            _this.error = true;
            _this.loading = false;
            _this.step = 2;
            _this.jsonResponse = JSON.stringify(err);
            _this.dto.params.duplicateSearchParameters = new src_app_dataTypeObjects_enroll__WEBPACK_IMPORTED_MODULE_6__["DuplicateSearchParameters"]();
        });
        this.urlEndpoint = this.dbSrv.getEndpoints().enroll;
    };
    UpdateComponent.prototype.bi1_image_faces_change = function (idx) {
        var _this = this;
        this.loading = true;
        var reader = new FileReader();
        var item = this.bi1ImageFaces.toArray()[idx];
        reader.onload = function () {
            var image = reader.result;
            _this.dto.bioInfo.faces[idx].image = image.replace(/data:([a-zA-Z0-9]+)\/([a-zA-Z0-9]+);base64,/gi, '');
            _this.loading = false;
        };
        if (item.nativeElement.files[0]) {
            reader.readAsDataURL(item.nativeElement.files[0]);
        }
    };
    UpdateComponent.prototype.bi1_image_fprints_change = function (idx) {
        var _this = this;
        this.loading = true;
        var reader = new FileReader();
        var item = this.bi1ImageFPrints.toArray()[idx];
        reader.onload = function () {
            var image = reader.result;
            _this.dto.bioInfo.fingerPrints[idx].image = image.replace(/data:([a-zA-Z0-9]+)\/([a-zA-Z0-9]+);base64,/gi, '');
            _this.loading = false;
        };
        if (item.nativeElement.files[0]) {
            reader.readAsDataURL(item.nativeElement.files[0]);
        }
    };
    UpdateComponent.prototype.bi1_audio_tdv_change = function (idx) {
        var _this = this;
        this.loading = true;
        var reader = new FileReader();
        var item = this.bi1AudioTdv.toArray()[idx];
        reader.onload = function () {
            var audio = reader.result;
            _this.dto.bioInfo.textDependentVoices[idx].audio = audio.replace(/data:([a-zA-Z0-9]+)\/([a-zA-Z0-9]+);base64,/gi, '');
            _this.loading = false;
        };
        if (item.nativeElement.files[0]) {
            reader.readAsDataURL(item.nativeElement.files[0]);
        }
    };
    UpdateComponent.prototype.bi1_audio_tiv_change = function (idx) {
        var _this = this;
        this.loading = true;
        var reader = new FileReader();
        var item = this.bi1AudioTiv.toArray()[idx];
        reader.onload = function () {
            var audio = reader.result;
            _this.dto.bioInfo.textIndependentVoice[idx].audio = audio.replace(/data:([a-zA-Z0-9]+)\/([a-zA-Z0-9]+);base64,/gi, '');
            _this.loading = false;
        };
        if (item.nativeElement.files[0]) {
            reader.readAsDataURL(item.nativeElement.files[0]);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('bi1_image_faces'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], UpdateComponent.prototype, "bi1ImageFaces", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('bi1_image_fprints'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], UpdateComponent.prototype, "bi1ImageFPrints", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('bi1_audio_tdv'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], UpdateComponent.prototype, "bi1AudioTdv", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('bi1_audio_tiv'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], UpdateComponent.prototype, "bi1AudioTiv", void 0);
    UpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update',
            template: __webpack_require__(/*! ./update.component.html */ "./src/app/pages/database/update/update.component.html"),
            styles: [__webpack_require__(/*! ./update.component.sass */ "./src/app/pages/database/update/update.component.sass"), __webpack_require__(/*! ../../../shared-styles/forms.scss */ "./src/app/shared-styles/forms.scss"), __webpack_require__(/*! ../../../shared-styles/playground-response.scss */ "./src/app/shared-styles/playground-response.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_providers_database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"]])
    ], UpdateComponent);
    return UpdateComponent;
}());



/***/ }),

/***/ "./src/app/pages/document-extraction/dni-ar/dni-ar.component.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/document-extraction/dni-ar/dni-ar.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header title=\"Document-Extraction::DNI-AR\" subtitle=\"Extract Argentina ID Card information\"></app-header>\n<app-loader [isLoading]=\"loading\"></app-loader>\n<section id=\"response\" *ngIf=\"step==2\">\n  <div class=\"url\"><span class=\"method\">POST</span> {{urlEndpoint}}</div>\n  <code [class.error]=\"error\">\n        {{jsonResponse}}\n  </code>\n\n  <div class=\"responseProcessed\" *ngIf=\"response\">\n    <div class=\"dataBlock\">\n      <label>Exception:</label>\n      <div class=\"dataContent\">\n        <b *ngIf=\"response.exception\">Yes</b>\n        <b *ngIf=\"!response.exception\">No</b>\n      </div>\n    </div>\n\n    <div class=\"dataBlock\">\n      <label>MRZ Detected:</label>\n      <div class=\"dataContent\">\n        <b *ngIf=\"response.mrzDetected\">Yes</b>\n        <b *ngIf=\"!response.mrzDetected\">No</b>\n      </div>\n    </div>\n\n    <div class=\"dataBlock\">\n      <label>PDF417 Detected:</label>\n      <div class=\"dataContent\">\n        <b *ngIf=\"response.pdf417Detected\">Yes</b>\n        <b *ngIf=\"!response.pdf417Detected\">No</b>\n      </div>\n    </div>\n\n    <div class=\"dataBlock\">\n      <label>status:</label>\n      <div class=\"dataContent\">\n        {{response.status}}\n      </div>\n    </div>\n\n    <div class=\"dataBlock\">\n      <label>suggestedAction:</label>\n      <div class=\"dataContent\">\n        {{response.suggestedAction}}\n      </div>\n    </div>\n\n    <div class=\"dataBlock\">\n      <label>txId:</label>\n      <div class=\"dataContent\">\n        {{response.txId}}\n      </div>\n    </div>\n  </div>\n  <div class=\"responses\" *ngIf=\"response && response.documentInfo\">\n    <div class=\"responseProcessed\">\n      <div class=\"dataBlock\">\n        <label>Additional Info:</label>\n        <div class=\"dataContent\">\n          {{response.additionalInfo}}\n        </div>\n      </div>\n      <div class=\"dataBlock\">\n        <label>Document Info:</label>\n        <div class=\"dataContent\" style=\"display: block\">\n          Address: <b>{{response.documentInfo.address}}</b>\n        </div>\n        <div class=\"dataContent\" style=\"display: block\">\n          Address Confidence: <b>{{response.documentInfo.addressConfidence}}</b>\n        </div>\n        <div class=\"dataContent\" style=\"display: block\">\n          Code 1: <b>{{response.documentInfo.code1}}</b>\n        </div>\n        <div class=\"dataContent\" style=\"display: block\">\n          Code 2: <b>{{response.documentInfo.code2}}</b>\n        </div>\n        <div class=\"dataContent\" style=\"display: block\">\n          Date of Birth: <b>{{response.documentInfo.dateOfBirth.day}} / {{response.documentInfo.dateOfBirth.month}} /\n            {{response.documentInfo.dateOfBirth.year}}</b>\n        </div>\n        <div class=\"dataContent\" style=\"display: block\">\n          Document Number: <b>{{response.documentInfo.documentNumber}}</b>\n        </div>\n        <div class=\"dataContent\" style=\"display: block\">\n          Document Type: <b>{{response.documentInfo.documentType}}</b>\n        </div>\n        <div class=\"dataContent\" style=\"display: block\">\n          Document Version: <b>{{response.documentInfo.documentVersion}}</b>\n        </div>\n        <div class=\"dataContent\" style=\"display: block\">\n          Expiration date: <b>{{response.documentInfo.expirationDate.day}}\n            / {{response.documentInfo.expirationDate.month}}\n            / {{response.documentInfo.expirationDate.year}}</b>\n        </div>\n        <div class=\"dataContent\" style=\"display: block\">\n          Given Names: <b>{{response.documentInfo.givenNames}}</b>\n        </div>\n        <div class=\"dataContent\" style=\"display: block\">\n          Issuing Country: <b>{{response.documentInfo.issuingCountry}}</b>\n        </div>\n        <div class=\"dataContent\" style=\"display: block\">\n          Issuing Date: <b>{{response.documentInfo.issuingDate.day}}\n            / {{response.documentInfo.issuingDate.month}}\n            / {{response.documentInfo.issuingDate.year}}</b>\n        </div>\n        <div class=\"dataContent\" style=\"display: block\">\n          Nationality: <b>{{response.documentInfo.nationality}}</b>\n        </div>\n        <div class=\"dataContent\" style=\"display: block\">\n          Order: <b>{{response.documentInfo.order}}</b>\n        </div>\n        <div class=\"dataContent\" style=\"display: block\">\n          Sequence: <b>{{response.documentInfo.sequence}}</b>\n        </div>\n        <div class=\"dataContent\" style=\"display: block\">\n          Sex: <b>{{response.documentInfo.sex}}</b>\n        </div>\n        <div class=\"dataContent\" style=\"display: block\">\n          Surname: <b>{{response.documentInfo.surname}}</b>\n        </div>\n      </div>\n\n      <div class=\"dataBlock\">\n        <label>Face:</label>\n        <img [src]=\"'data:image/png;base64,'+response.documentInfo.face.image\">\n      </div>\n      <div class=\"copy\" (click)=\"copy()\"><img src=\"assets/copy.png\" /></div>\n      <div class=\"dataBlock\">\n        <label>Face template:</label>\n        <div class=\"dataTemplate\" id=\"templateResponse\">\n          {{response.documentInfo.face.template}}\n        </div>\n      </div>\n\n      <div class='dataBlock'>\n        <label>Fingerprint</label>\n        <div class='dataContent' style='display: block'>\n          <img [src]=\"'data:image/png;base64,'+parsedFingerPrint.image\">\n        </div>\n      </div>\n\n      <div class=\"dataBlock\">\n        <label>Valids:</label>\n        <div class=\"dataContent\" style=\"display: block\">\n          Composite:\n          <b *ngIf=\"response.documentInfo.validComposite\">Yes</b>\n          <b *ngIf=\"!response.documentInfo.validComposite\">No</b>\n        </div>\n        <div class=\"dataContent\" style=\"display: block\">\n          Date of birth:\n          <b *ngIf=\"response.documentInfo.validDateOfBirth\">Yes</b>\n          <b *ngIf=\"!response.documentInfo.validDateOfBirth\">No</b>\n        </div>\n        <div class=\"dataContent\" style=\"display: block\">\n          Document number:\n          <b *ngIf=\"response.documentInfo.validDocumentNumber\">Yes</b>\n          <b *ngIf=\"!response.documentInfo.validDocumentNumber\">No</b>\n        </div>\n        <div class=\"dataContent\" style=\"display: block\">\n          Expiration date:\n          <b *ngIf=\"response.documentInfo.validExpirationDate\">Yes</b>\n          <b *ngIf=\"!response.documentInfo.validExpirationDate\">No</b>\n        </div>\n      </div>\n    </div>\n  </div>\n  <button type=\"button\" class=\"send\" (click)=\"retry()\">Retry</button>\n</section>\n<form *ngIf=\"step==1\">\n  <section>\n    <div class=\"inputRow\">\n      <label>\n        Audit Token\n      </label>\n      <input type=\"text\" name=\"auditToken\" [(ngModel)]=\"dto.auditToken\">\n    </div>\n  </section>\n  <section>\n    <header>\n      <h3>Images</h3>\n    </header>\n    <div class=\"inputRow\">\n      <label>\n        Select front image file\n      </label>\n      <input type=\"file\" accept=\"image/*\" (change)=\"fileFrontChange()\" #fileFrontInput>\n      <img *ngIf=\"dto.frontImage\" [src]=\"'data:'+frontDataType+';base64,'+dto.frontImage\" class=\"imagefile\"\n        (click)=\"dto.frontImage = undefined\" />\n    </div>\n    <div class=\"inputRow\">\n      <label>\n        Select back image file\n      </label>\n      <input type=\"file\" accept=\"image/*\" (change)=\"fileBackChange()\" #fileBackInput>\n      <img *ngIf=\"dto.backImage\" [src]=\"'data:'+backDataType+';base64,'+dto.backImage\" class=\"imagefile\"\n        (click)=\"dto.backImage = undefined\" />\n    </div>\n  </section>\n  <section>\n    <header>\n      <h3>Params</h3>\n    </header>\n    <div class=\"inputRow\">\n      <label>\n        Extract PDF417 info\n      </label>\n      <input type=\"checkbox\" name=\"extractPDF417\" checked=\"checked\" [(ngModel)]=\"dto.params.extractPDF417\">\n    </div>\n    <div class=\"inputRow\">\n      <label>\n        Extract MRZ info\n      </label>\n      <input type=\"checkbox\" name=\"extractMRZ\" checked=\"checked\" [(ngModel)]=\"dto.params.extractMRZ\">\n    </div>\n    <div class=\"inputRow\">\n      <label>\n        Extract face biometric info\n      </label>\n      <input type=\"checkbox\" name=\"extractFace\" checked=\"checked\" [(ngModel)]=\"dto.params.extractFace\">\n    </div>\n    <div class=\"inputRow\">\n      <label>\n        Extract Address\n      </label>\n      <input type=\"checkbox\" name=\"extractAddress\" checked=\"checked\" [(ngModel)]=\"dto.params.extractAddress\">\n    </div>\n    <div class=\"inputRow\">\n      <label>\n        Use cache (Cache input-output from succesive API calls)\n      </label>\n      <input type=\"checkbox\" name=\"useCache\" checked=\"checked\" [(ngModel)]=\"dto.params.useCache\">\n    </div>\n  </section>\n  <section>\n    <button type=\"button\" class=\"send\" (click)=\"send()\">Send Data</button>\n  </section>\n</form>"

/***/ }),

/***/ "./src/app/pages/document-extraction/dni-ar/dni-ar.component.sass":
/*!************************************************************************!*\
  !*** ./src/app/pages/document-extraction/dni-ar/dni-ar.component.sass ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".imagefile {\n  max-width: 200px;\n  max-height: 150px;\n  cursor: crosshair; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZHkvcmVwb3Mvc29iaW8vc3JjL2FwcC9wYWdlcy9kb2N1bWVudC1leHRyYWN0aW9uL2RuaS1hci9kbmktYXIuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZG9jdW1lbnQtZXh0cmFjdGlvbi9kbmktYXIvZG5pLWFyLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlZmlsZSB7XG4gICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgICBjdXJzb3I6IGNyb3NzaGFpcjsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/document-extraction/dni-ar/dni-ar.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/document-extraction/dni-ar/dni-ar.component.ts ***!
  \**********************************************************************/
/*! exports provided: DniArComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DniArComponent", function() { return DniArComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_dataTypeObjects_dniAr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dataTypeObjects/dniAr */ "./src/app/dataTypeObjects/dniAr.ts");
/* harmony import */ var src_app_providers_extraction_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/providers/extraction.service */ "./src/app/providers/extraction.service.ts");
/* harmony import */ var src_app_Utils_UUID__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Utils/UUID */ "./src/app/Utils/UUID.ts");





var DniArComponent = /** @class */ (function () {
    function DniArComponent(extractionSrv) {
        this.extractionSrv = extractionSrv;
        this.dto = new src_app_dataTypeObjects_dniAr__WEBPACK_IMPORTED_MODULE_2__["DniAr"]();
    }
    DniArComponent.prototype.ngOnInit = function () {
        this.step = 1;
        this.dto.auditToken = src_app_Utils_UUID__WEBPACK_IMPORTED_MODULE_4__["UUID"].create();
    };
    DniArComponent.prototype.fileBackChange = function () {
        var _this = this;
        this.loading = true;
        var reader = new FileReader();
        reader.onload = function () {
            _this.dto.backImage = reader.result;
            // extracting data
            var dataInfo = /data:([a-zA-Z0-9\/]+);/gi.exec(_this.dto.backImage);
            if (dataInfo) {
                _this.backDataType = dataInfo[1];
            }
            _this.dto.backImage = _this.dto.backImage.replace(/data:([a-zA-Z0-9]+)\/([a-zA-Z0-9]+);base64,/gi, '');
            _this.loading = false;
            _this.fileBackInput.nativeElement.value = '';
        };
        if (this.fileBackInput.nativeElement.files[0]) {
            reader.readAsDataURL(this.fileBackInput.nativeElement.files[0]);
        }
    };
    DniArComponent.prototype.fileFrontChange = function () {
        var _this = this;
        this.loading = true;
        var reader = new FileReader();
        reader.onload = function () {
            _this.dto.frontImage = reader.result;
            // extracting data
            var dataInfo = /data:([a-zA-Z0-9\/]+);/gi.exec(_this.dto.frontImage);
            if (dataInfo) {
                _this.frontDataType = dataInfo[1];
            }
            _this.dto.frontImage = _this.dto.frontImage.replace(/data:([a-zA-Z0-9]+)\/([a-zA-Z0-9]+);base64,/gi, '');
            _this.loading = false;
            _this.fileFrontInput.nativeElement.value = '';
        };
        if (this.fileFrontInput.nativeElement.files[0]) {
            reader.readAsDataURL(this.fileFrontInput.nativeElement.files[0]);
        }
    };
    DniArComponent.prototype.send = function () {
        var _this = this;
        this.error = false;
        this.loading = true;
        this.extractionSrv.extractDni(this.dto).subscribe(function (resp) {
            console.log(resp);
            _this.loading = false;
            _this.response = resp;
            _this.jsonResponse = JSON.stringify(resp);
            _this.step = 2;
            if (_this.response.documentInfo.fingerPrint !== undefined && _this.response.documentInfo.fingerPrint.image.length > 0) {
                _this.getFingerPrintImage(_this.response.documentInfo.fingerPrint);
            }
        }, function (err) {
            console.log(err);
            _this.error = true;
            _this.jsonResponse = JSON.stringify(err);
            _this.step = 2;
            _this.loading = false;
        });
        this.urlEndpoint = this.extractionSrv.getEndpoints().dniAr;
    };
    DniArComponent.prototype.getFingerPrintImage = function (finger) {
        var _this = this;
        console.log('get finger');
        this.extractionSrv.getFingerPrintImage(this.dto.auditToken, finger.image).subscribe(function (response) {
            console.log(response);
            _this.parsedFingerPrint = response;
        });
    };
    DniArComponent.prototype.retry = function () {
        this.step = 1;
    };
    DniArComponent.prototype.copy = function () {
        try {
            navigator.clipboard.writeText(this.response.documentInfo.face.template).then(function () {
                // alert('Copied A');
            });
        }
        catch (e) {
            // no tiene ssl
            // $(this).find('.copyRealText').select();
            var selection = document.getSelection();
            var range = document.createRange();
            range.selectNode(document.getElementById('templateResponse'));
            selection.removeAllRanges();
            selection.addRange(range);
            var result = document.execCommand('copy');
            // tampoco funcionó:
            if (!result) {
                alert('Can\'t copy (HTTPS/Chrome +43/Permisos).');
            }
            else {
                // alert('Copied B');
            }
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fileBackInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], DniArComponent.prototype, "fileBackInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fileFrontInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], DniArComponent.prototype, "fileFrontInput", void 0);
    DniArComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dni-ar',
            template: __webpack_require__(/*! ./dni-ar.component.html */ "./src/app/pages/document-extraction/dni-ar/dni-ar.component.html"),
            styles: [__webpack_require__(/*! ./dni-ar.component.sass */ "./src/app/pages/document-extraction/dni-ar/dni-ar.component.sass"), __webpack_require__(/*! ../../../shared-styles/forms.scss */ "./src/app/shared-styles/forms.scss"), __webpack_require__(/*! ../../../shared-styles/playground-response.scss */ "./src/app/shared-styles/playground-response.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_providers_extraction_service__WEBPACK_IMPORTED_MODULE_3__["ExtractionService"]])
    ], DniArComponent);
    return DniArComponent;
}());



/***/ }),

/***/ "./src/app/pages/extraction/extract-face-image/extract-face-image.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/extraction/extract-face-image/extract-face-image.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header title=\"Extraction::face-image\" subtitle=\"Extract face biometric data (template) from a supplied image\"></app-header>\n<app-loader [isLoading]=\"loading\"></app-loader>\n\n<section id=\"response\" *ngIf=\"step==2\">\n    <div class=\"url\"><span class=\"method\">POST</span> {{urlEndpoint}}</div>\n    <code [class.error]=\"error\">\n        {{jsonResponse}}\n    </code>\n    <div class=\"responses\" *ngIf=\"response && response.extractedFaces\">\n        <div class=\"responseProcessed\">\n            <div class=\"dataBlock\">\n                <label>TxId:</label>\n                <div class=\"dataContent\">\n                    {{response.txId}}\n                </div>\n            </div>\n        </div>\n        <div class=\"responseProcessed\" *ngFor=\"let face of response.extractedFaces; let idx = index\">\n            <div class=\"dataBlock\">\n                <label>Status:</label>\n                <div class=\"dataContent\">\n                    {{face.status}}\n                </div>\n            </div>\n            <div class=\"dataBlock\">\n                <label>Image:</label>\n                <img [src]=\"'data:image/png;base64,'+face.face.image\">\n            </div>\n            <div class=\"dataBlock\" *ngIf=\"face.properties.thumbnail\"> <!-- {{face.properties.thumbnail}} -->\n              <label>Thumbnail:</label>\n              <img [src]=\"'data:image/png;base64,'+face.properties.thumbnail\">\n            </div>\n            <div class=\"copy\" (click)=\"copy(idx)\"><img src=\"assets/copy.png\" /></div>\n            <div class=\"dataBlock\">\n                <label>Template:</label>\n                <div class=\"dataTemplate\" [id]=\"'templateResponse'+idx\">\n                    {{face.face.template}}\n                </div>\n            </div>\n            <div class=\"dataBlock\" *ngIf=\"face.properties.position\">\n                <label style=\"display: block;\">Position</label>\n                <div class=\"dataContent\">\n                    x: <b>{{face.properties.position.x}}</b> y: <b>{{face.properties.position.y}}</b><br />\n                    Width: <b>{{face.properties.position.width}}</b> Height:\n                    <b>{{face.properties.position.height}}</b><br />\n                    Roll: <b>{{face.properties.position.roll}}</b> Pitch:\n                    <b>{{face.properties.position.pitch}}</b> Yaw:\n                    <b>{{face.properties.position.yaw}}</b><br />\n                    <hr />\n                    <b>Points:</b><br />\n                    <div class=\"navTab\">\n                        <div class=\"tabTitle\">\n                            <div class=\"tabChange\" [class.active]=\"inTab==1\" (click)=\"inTab=1\">Graphical</div>\n                            <div class=\"tabChange\" [class.active]=\"inTab==2\" (click)=\"inTab=2\">List</div>\n                        </div>\n                        <div class=\"tab\" *ngIf=\"inTab==1\">\n                            <div class=\"pointsBoard\" style=\"position: relative;\">\n                                <img [src]=\"'data:image/png;base64,'+face.face.image\" style=\"width: auto\">\n                                <div class=\"point\" *ngFor=\"let point of face.properties.position.points\"\n                                    [style.top.px]=\"point.y\" [style.left.px]=\"point.x\"><span class=\"label\">{{point.num}}\n                                        - {{point.confidence}}%</span></div>\n                            </div>\n                        </div>\n                        <div class=\"tab\" *ngIf=\"inTab==2\">\n                            <div class=\"dataTagBlock\" *ngFor=\"let point of face.properties.position.points\">\n                                Num: <b>{{point.num}}</b><br />\n                                Confidence: <b>{{point.confidence}}</b><br />\n                                x: <b>{{point.x}}</b> y: <b>{{point.y}}</b>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"dataBlock\">\n                <label>Clahe:</label>\n                <div class=\"dataContent\">\n                    {{face.properties.clahe}}\n                </div>\n            </div>\n            <div class=\"dataBlock\">\n                <label>Confidence:</label>\n                <div class=\"dataContent\">\n                    {{face.properties.confidence}}%\n                </div>\n            </div>\n            <div class=\"dataBlock\" *ngIf=\"face.properties.traits\">\n                <label>glasses:</label>\n                <div class=\"dataContent\">\n                    {{face.properties.traits.glasses}}\n                </div>\n            </div>\n            <div class=\"dataBlock\" *ngIf=\"face.properties.traits\">\n                <label>Open mouth:</label>\n                <div class=\"dataContent\">\n                    {{face.properties.traits.openMouth}}\n                </div>\n            </div>\n            <div class=\"dataBlock\" *ngIf=\"face.properties.traits\">\n                <label>Both eyes closed:</label>\n                <div class=\"dataContent\">\n                    <b *ngIf=\"face.properties.traits.ambosOjosCerrados\">YES</b>\n                    <b *ngIf=\"!face.properties.traits.ambosOjosCerrados\">NO</b>\n                </div>\n            </div>\n            <div class=\"dataBlock\" *ngIf=\"face.properties.traits\">\n                <label>Dark glasses:</label>\n                <div class=\"dataContent\">\n                    {{face.properties.traits.darkGlasses}}\n                </div>\n            </div>\n            <div class=\"dataBlock\" *ngIf=\"face.properties.traits\">\n                <label>Beard:</label>\n                <div class=\"dataContent\">\n                    {{face.properties.traits.beard}}%\n                </div>\n            </div>\n            <div class=\"dataBlock\" *ngIf=\"face.properties.traits\">\n                <label>Mustache:</label>\n                <div class=\"dataContent\">\n                    {{face.properties.traits.mustache}}%\n                </div>\n            </div>\n            <div class=\"dataBlock\" *ngIf=\"face.properties.traits\">\n                <label>Hat:</label>\n                <div class=\"dataContent\">\n                    {{face.properties.traits.hat}}%\n                </div>\n            </div>\n            <div class=\"dataBlock\" *ngIf=\"face.properties.traits\">\n                <label>Left eye closed:</label>\n                <div class=\"dataContent\">\n                    <b *ngIf=\"face.properties.traits.leftEyeClosed\">YES</b>\n                    <b *ngIf=\"!face.properties.traits.leftEyeClosed\">NO</b>\n                </div>\n            </div>\n            <div class=\"dataBlock\" *ngIf=\"face.properties.traits\">\n                <label>Right Eye Closed:</label>\n                <div class=\"dataContent\">\n                    <b *ngIf=\"face.properties.traits.rightEyeClosed\">YES</b>\n                    <b *ngIf=\"!face.properties.traits.rightEyeClosed\">NO</b>\n                </div>\n            </div>\n            <div class=\"dataBlock\" *ngIf=\"face.properties.traits\">\n                <label>Looking Upward:</label>\n                <div class=\"dataContent\">\n                    <b *ngIf=\"face.properties.traits.lookingUpward\">YES</b>\n                    <b *ngIf=\"!face.properties.traits.lookingUpward\">NO</b>\n\n                </div>\n            </div>\n            <div class=\"dataBlock\" *ngIf=\"face.properties.traits\">\n                <label>Looking Downward:</label>\n                <div class=\"dataContent\">\n                    <b *ngIf=\"face.properties.traits.lookingDownward\">YES</b>\n                    <b *ngIf=\"!face.properties.traits.lookingDownward\">NO</b>\n\n                </div>\n            </div>\n            <div class=\"dataBlock\" *ngIf=\"face.properties.traits\">\n                <label>Looking Right:</label>\n                <div class=\"dataContent\">\n                    <b *ngIf=\"face.properties.traits.lookingRight\">YES</b>\n                    <b *ngIf=\"!face.properties.traits.lookingRight\">NO</b>\n                </div>\n            </div>\n            <div class=\"dataBlock\" *ngIf=\"face.properties.traits\">\n                <label>Looking Left:</label>\n                <div class=\"dataContent\">\n                    <b *ngIf=\"face.properties.traits.lookingLeft\">YES</b>\n                    <b *ngIf=\"!face.properties.traits.lookingLeft\">NO</b>\n                </div>\n            </div>\n            <div class=\"dataBlock\" *ngIf=\"face.properties.traits\">\n                <label>Looking Front:</label>\n                <div class=\"dataContent\">\n                    <b *ngIf=\"face.properties.traits.lookingFront\">YES</b>\n                    <b *ngIf=\"!face.properties.traits.lookingFront\">NO</b>\n                </div>\n            </div>\n            <hr *ngIf=\"face.properties.traits\"/>\n            <div class=\"dataBlock\" *ngIf=\"face.properties.expression\">\n                <label style=\"vertical-align: top;\">Expression:</label>\n                <div class=\"dataContent\">\n                    Type: {{face.properties.expression.type}}<br />\n                    Confidence: {{face.properties.expression.confidence}}\n                </div>\n            </div>\n            <hr *ngIf=\"face.properties.expression\"/>\n            <div class=\"dataBlock\" *ngIf=\"face.properties.emotion\">\n                <label style=\"vertical-align: top;\">Emotions:</label>\n                <div class=\"dataContent\">\n                    Anger: {{face.properties.emotion.anger}}<br />\n                    Disgust: {{face.properties.emotion.disgust}}<br />\n                    Fear: {{face.properties.emotion.fear}}<br />\n                    Happiness: {{face.properties.emotion.happiness}}<br />\n                    Neutral: {{face.properties.emotion.neutral}}<br />\n                    Sadness: {{face.properties.emotion.sadness}}<br />\n                    Surprise: {{face.properties.emotion.surprise}}<br />\n                </div>\n            </div>\n            <hr  *ngIf=\"face.properties.emotion\"/>\n            <div class=\"dataBlock\" *ngIf=\"face.gender\">\n                <label style=\"vertical-align: top;\">Gender:</label>\n                <div class=\"dataContent\">\n                    Type: {{face.properties.gender.type}}<br />\n                    Confidence: {{face.properties.gender.confidence}}\n                </div>\n            </div>\n            <hr *ngIf=\"face.gender\"/>\n            <div class=\"dataBlock\">\n                <label>Age:</label>\n                <div class=\"dataContent\">\n                    {{face.properties.age}}\n                </div>\n            </div>\n            <div class=\"dataBlock\" *ngIf=\"face.detectedActions\">\n                <label>Detected Actions:</label>\n                <div class=\"dataContent\">\n                    <ul>\n                        <li *ngFor=\"let action of face.properties.detectedActions\">\n                            Frame: {{action.frameNum}}<br />\n                            Type: {{action.type}}\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n    <button type=\"button\" class=\"send\" (click)=\"retry()\">Retry</button>\n</section>\n\n<form *ngIf=\"step==1\">\n    <section>\n        <div class=\"inputRow\">\n            <label>\n                Audit Token\n            </label>\n            <input type=\"text\" name=\"auditToken\" [(ngModel)]=\"dto.auditToken\">\n        </div>\n    </section>\n    <section>\n        <header>\n            <h3>Params</h3>\n        </header>\n        <div class=\"inputRow\">\n            <label>\n                Blink Sensibility\n            </label>\n            <input type=\"range\" min=\"1\" max=\"7\" name=\"blinkSensibility\" [(ngModel)]=\"dto.params.blinkSensibility\">\n            {{dto.params.blinkSensibility/10}}\n        </div>\n        <div class=\"inputRow\">\n            <label>\n                Detect Age\n            </label>\n            <input type=\"checkbox\" name=\"detectAge\" [(ngModel)]=\"dto.params.detectAge\">\n        </div>\n        <div class=\"inputRow\">\n            <label>\n                Detect Emotion\n            </label>\n            <input type=\"checkbox\" name=\"detectEmotion\" [(ngModel)]=\"dto.params.detectEmotion\">\n        </div>\n        <div class=\"inputRow\">\n            <label>\n                Detect Expression\n            </label>\n            <input type=\"checkbox\" name=\"detectExpression\" [(ngModel)]=\"dto.params.detectExpression\">\n        </div>\n        <div class=\"inputRow\">\n            <label>\n                Detect Gender\n            </label>\n            <input type=\"checkbox\" name=\"detectGender\" [(ngModel)]=\"dto.params.detectGender\">\n        </div>\n        <div class=\"inputRow\">\n            <label>\n                Detect Only Major Face\n            </label>\n            <input type=\"checkbox\" name=\"detectOnlyMajorFace\" [(ngModel)]=\"dto.params.detectOnlyMajorFace\">\n        </div>\n        <div class=\"inputRow\">\n            <label>\n                Detect Traits And Actions\n            </label>\n            <input type=\"checkbox\" name=\"detectTraitsAndActions\" [(ngModel)]=\"dto.params.detectTraitsAndActions\">\n        </div>\n        <section>\n            <header>\n                <h4>Face Pose Sensibility</h4>\n            </header>\n            <div class=\"inputRow\">\n                <label>\n                    Looking Downwards Pitch Angle\n                </label>\n                <input type=\"range\" min=\"-30\" max=\"-5\" name=\"lookingDownwardsPitchAngle\"\n                    [(ngModel)]=\"dto.params.facePoseSensibility.lookingDownwardsPitchAngle\">\n                {{dto.params.facePoseSensibility.lookingDownwardsPitchAngle}}\n            </div>\n            <div class=\"inputRow\">\n                <label>\n                    Looking Front\n                </label>\n                <input type=\"range\" min=\"1\" max=\"20\" name=\"lookingFront\"\n                    [(ngModel)]=\"dto.params.facePoseSensibility.lookingFront\">\n                {{dto.params.facePoseSensibility.lookingFront}}\n            </div>\n            <div class=\"inputRow\">\n                <label>\n                    Looking Left Yaw Angle\n                </label>\n                <input type=\"range\" min=\"-60\" max=\"-10\" name=\"lookingLeftYawAngle\"\n                    [(ngModel)]=\"dto.params.facePoseSensibility.lookingLeftYawAngle\">\n                {{dto.params.facePoseSensibility.lookingLeftYawAngle}}\n            </div>\n            <div class=\"inputRow\">\n                <label>\n                    Looking Right Yaw Angle\n                </label>\n                <input type=\"range\" min=\"10\" max=\"60\" name=\"lookingRightYawAngle\"\n                    [(ngModel)]=\"dto.params.facePoseSensibility.lookingRightYawAngle\">\n                {{dto.params.facePoseSensibility.lookingRightYawAngle}}\n            </div>\n            <div class=\"inputRow\">\n                <label>\n                    Looking Upwards Pitch Angle\n                </label>\n                <input type=\"range\" min=\"5\" max=\"25\" name=\"lookingUpwardsPitchAngle\"\n                    [(ngModel)]=\"dto.params.facePoseSensibility.lookingUpwardsPitchAngle\">\n                {{dto.params.facePoseSensibility.lookingUpwardsPitchAngle}}\n            </div>\n        </section>\n        <div class=\"inputRow\">\n            <label>\n                Max Clahe\n            </label>\n            <input type=\"range\" min=\"5\" max=\"15\" name=\"maxCLAHE\" [(ngModel)]=\"dto.params.maxCLAHE\">\n            {{dto.params.maxCLAHE}}\n        </div>\n        <div class=\"inputRow\">\n            <label>\n                Max Roll\n            </label>\n            <input type=\"range\" min=\"0\" max=\"180\" name=\"maxRoll\" [(ngModel)]=\"dto.params.maxRoll\">\n            {{dto.params.maxRoll}}\n        </div>\n        <div class=\"inputRow\">\n            <label>\n                Max Yaw\n            </label>\n            <input type=\"range\" min=\"0\" max=\"90\" name=\"maxYaw\" [(ngModel)]=\"dto.params.maxYaw\"> {{dto.params.maxYaw}}\n        </div>\n        <div class=\"inputRow\">\n            <label>\n                Min Clahe\n            </label>\n            <input type=\"range\" min=\"0\" max=\"5\" name=\"minCLAHE\" [(ngModel)]=\"dto.params.minCLAHE\">\n            {{dto.params.minCLAHE}}\n        </div>\n        <div class=\"inputRow\">\n            <label>\n                Min Confidence\n            </label>\n            <input type=\"range\" min=\"0\" max=\"100\" name=\"minConfidence\" [(ngModel)]=\"dto.params.minConfidence\">\n            {{dto.params.minConfidence}}\n        </div>\n        <div class=\"inputRow\">\n            <label>\n                Min IOD\n            </label>\n            <input type=\"range\" min=\"8\" max=\"1024\" name=\"minIOD\" [(ngModel)]=\"dto.params.minIOD\"> {{dto.params.minIOD}}\n        </div>\n        <div class=\"inputRow\">\n            <label>\n                Min Quality\n            </label>\n            <input type=\"range\" min=\"0\" max=\"100\" name=\"minQuality\" [(ngModel)]=\"dto.params.minQuality\">\n            {{dto.params.minQuality}}\n        </div>\n        <div class=\"inputRow\">\n            <label>\n                Scale H\n            </label>\n            <input type=\"range\" min=\"0\" max=\"2\" name=\"scaleH\" [(ngModel)]=\"dto.params.scaleH\"> {{dto.params.scaleH}}\n        </div>\n        <div class=\"inputRow\">\n            <label>\n                Thumbnail Width\n            </label>\n            <input type=\"range\" min=\"24\" max=\"512\" name=\"thumbnailWidth\" [(ngModel)]=\"dto.params.thumbnailWidth\">\n            {{dto.params.thumbnailWidth}}\n        </div>\n        <div class=\"inputRow\">\n            <label>\n                Use CLAHE\n            </label>\n            <input type=\"checkbox\" name=\"useCLAHE\" [(ngModel)]=\"dto.params.useCLAHE\">\n        </div>\n        <div class=\"inputRow\">\n            <label>\n                Use Cache\n            </label>\n            <input type=\"checkbox\" name=\"useCache\" [(ngModel)]=\"dto.params.useCache\">\n        </div>\n        <div class=\"inputRow\">\n            <label>\n                Video Frames Seq\n            </label>\n            <input type=\"range\" min=\"1\" max=\"5\" name=\"videoFramesSeq\" [(ngModel)]=\"dto.params.videoFramesSeq\">\n            {{dto.params.videoFramesSeq}}\n        </div>\n    </section>\n    <section>\n        <header>\n            <h3>Image</h3>\n        </header>\n        <div class=\"inputRow\">\n            <label>\n                Select image file\n            </label>\n            <input type=\"file\" accept=\"image/*\" (change)=\"fileChange()\" #fileInput>\n            <img *ngIf=\"dto.image\" [src]=\"'data:'+dataType+';base64,'+dto.image\" class=\"imagefile\"\n                (click)=\"dto.image = undefined\" />\n        </div>\n    </section>\n    <section>\n        <button type=\"button\" class=\"send\" (click)=\"send()\">Send Data</button>\n    </section>\n</form>\n"

/***/ }),

/***/ "./src/app/pages/extraction/extract-face-image/extract-face-image.component.sass":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/extraction/extract-face-image/extract-face-image.component.sass ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".imagefile {\n  max-width: 150px;\n  max-height: 150px;\n  cursor: crosshair; }\n\n.dataTagBlock {\n  display: inline-block;\n  padding: 3px;\n  background: #fff6e4;\n  border-radius: 5px;\n  margin: 5px;\n  font-family: helvetica;\n  text-transform: uppercase;\n  font-size: 12px; }\n\n.navTab .tabTitle .tabChange {\n  display: inline-block;\n  width: 100px;\n  text-align: center;\n  padding: 5px;\n  background: #e8e8e8;\n  border-radius: 5px 5px 0px 0px;\n  margin-right: 7px;\n  cursor: pointer; }\n\n.navTab .tabTitle .tabChange.active {\n    background: #fdfdfd; }\n\n.navTab .tab {\n  background: #fdfdfd;\n  width: 100%;\n  padding: 10px; }\n\n.navTab .tab .point {\n    position: absolute;\n    width: 4px;\n    height: 4px;\n    background: red;\n    cursor: pointer; }\n\n.navTab .tab .point span.label {\n      background: #0000007a;\n      width: 65px;\n      text-align: center;\n      margin-top: -30px;\n      margin-left: 15px;\n      font-size: 14px;\n      border-radius: 5px;\n      color: white;\n      z-index: 1;\n      display: none;\n      position: relative; }\n\n.navTab .tab .point:hover span.label {\n      display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZHkvcmVwb3Mvc29iaW8vc3JjL2FwcC9wYWdlcy9leHRyYWN0aW9uL2V4dHJhY3QtZmFjZS1pbWFnZS9leHRyYWN0LWZhY2UtaW1hZ2UuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGlCQUFpQixFQUFBOztBQUNyQjtFQUNJLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixlQUFlLEVBQUE7O0FBQ25CO0VBR1kscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQTs7QUFWM0I7SUFZZ0IsbUJBQW1CLEVBQUE7O0FBWm5DO0VBY1EsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxhQUFhLEVBQUE7O0FBaEJyQjtJQWtCWSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZUFBZSxFQUFBOztBQXRCM0I7TUF3QmdCLHFCQUFxQjtNQUNyQixXQUFXO01BQ1gsa0JBQWtCO01BQ2xCLGlCQUFpQjtNQUNqQixpQkFBaUI7TUFDakIsZUFBZTtNQUNmLGtCQUFrQjtNQUNsQixZQUFZO01BQ1osVUFBVTtNQUNWLGFBQWE7TUFDYixrQkFBa0IsRUFBQTs7QUFsQ2xDO01BcUNvQixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9leHRyYWN0aW9uL2V4dHJhY3QtZmFjZS1pbWFnZS9leHRyYWN0LWZhY2UtaW1hZ2UuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2VmaWxlIHtcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xuICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xuICAgIGN1cnNvcjogY3Jvc3NoYWlyOyB9XG4uZGF0YVRhZ0Jsb2NrIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogM3B4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY2ZTQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1hcmdpbjogNXB4O1xuICAgIGZvbnQtZmFtaWx5OiBoZWx2ZXRpY2E7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IDEycHg7IH1cbi5uYXZUYWIge1xuICAgIC50YWJUaXRsZSB7XG4gICAgICAgIC50YWJDaGFuZ2Uge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2U4ZThlODtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMHB4IDBweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogN3B4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZGZkZmQ7IH0gfSB9XG4gICAgLnRhYiB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZGZkZmQ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAucG9pbnQge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgd2lkdGg6IDRweDtcbiAgICAgICAgICAgIGhlaWdodDogNHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmVkO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgc3Bhbi5sYWJlbCB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwMDAwMDdhO1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2NXB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMzBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBzcGFuLmxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7IH0gfSB9IH0gfVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/extraction/extract-face-image/extract-face-image.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/extraction/extract-face-image/extract-face-image.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ExtractFaceImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtractFaceImageComponent", function() { return ExtractFaceImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_dataTypeObjects_faceImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dataTypeObjects/faceImage */ "./src/app/dataTypeObjects/faceImage.ts");
/* harmony import */ var src_app_providers_extraction_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/providers/extraction.service */ "./src/app/providers/extraction.service.ts");
/* harmony import */ var src_app_Utils_UUID__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Utils/UUID */ "./src/app/Utils/UUID.ts");





var ExtractFaceImageComponent = /** @class */ (function () {
    function ExtractFaceImageComponent(extractionSrv) {
        this.extractionSrv = extractionSrv;
        this.dto = new src_app_dataTypeObjects_faceImage__WEBPACK_IMPORTED_MODULE_2__["FaceImageDTO"]();
        this.inTab = 1;
        // mock inicial
        this.dto.auditToken = src_app_Utils_UUID__WEBPACK_IMPORTED_MODULE_4__["UUID"].create();
    }
    ExtractFaceImageComponent.prototype.ngOnInit = function () {
        this.step = 1;
        // this.step = 2;
        // this.jsonResponse = '{asdasdsa: asdadsd, asdasd : qweqwe}';
    };
    ExtractFaceImageComponent.prototype.fileChange = function () {
        var _this = this;
        this.loading = true;
        var reader = new FileReader();
        reader.onload = function () {
            _this.dto.image = reader.result;
            // extracting data
            var dataInfo = /data:([a-zA-Z0-9\/]+);/gi.exec(_this.dto.image);
            if (dataInfo) {
                _this.dataType = dataInfo[1];
            }
            _this.dto.image = _this.dto.image.replace(/data:([a-zA-Z0-9]+)\/([a-zA-Z0-9]+);base64,/gi, '');
            _this.loading = false;
            _this.fileInput.nativeElement.value = '';
        };
        if (this.fileInput.nativeElement.files[0]) {
            reader.readAsDataURL(this.fileInput.nativeElement.files[0]);
        }
    };
    ExtractFaceImageComponent.prototype.send = function () {
        var _this = this;
        this.error = false;
        this.loading = true;
        this.dto.params.blinkSensibility = this.dto.params.blinkSensibility / 10;
        this.extractionSrv.extractFaceImage(this.dto).subscribe(function (resp) {
            console.log(resp);
            _this.loading = false;
            _this.response = resp;
            _this.jsonResponse = JSON.stringify(resp);
            _this.step = 2;
        }, function (err) {
            console.log(err);
            _this.error = true;
            _this.jsonResponse = JSON.stringify(err);
            _this.step = 2;
            _this.loading = false;
        });
        this.urlEndpoint = this.extractionSrv.getEndpoints().faceImage;
    };
    ExtractFaceImageComponent.prototype.retry = function () {
        this.step = 1;
    };
    ExtractFaceImageComponent.prototype.copy = function (index) {
        try {
            navigator.clipboard.writeText(this.response.extractedFaces[index].face.template).then(function () {
                // alert('Copied A');
            });
        }
        catch (e) {
            var selection = document.getSelection();
            var range = document.createRange();
            range.selectNode(document.getElementById('templateResponse' + index));
            selection.removeAllRanges();
            selection.addRange(range);
            var result = document.execCommand('copy');
            if (!result) {
                alert('Can\'t copy (HTTPS/Chrome +43/Permisos).');
            }
            else {
                // alert('Copied B');
            }
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fileInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ExtractFaceImageComponent.prototype, "fileInput", void 0);
    ExtractFaceImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-extract-face-image',
            template: __webpack_require__(/*! ./extract-face-image.component.html */ "./src/app/pages/extraction/extract-face-image/extract-face-image.component.html"),
            styles: [__webpack_require__(/*! ./extract-face-image.component.sass */ "./src/app/pages/extraction/extract-face-image/extract-face-image.component.sass"), __webpack_require__(/*! ../../../shared-styles/forms.scss */ "./src/app/shared-styles/forms.scss"), __webpack_require__(/*! ../../../shared-styles/playground-response.scss */ "./src/app/shared-styles/playground-response.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_providers_extraction_service__WEBPACK_IMPORTED_MODULE_3__["ExtractionService"]])
    ], ExtractFaceImageComponent);
    return ExtractFaceImageComponent;
}());



/***/ }),

/***/ "./src/app/pages/extraction/extract-face-video/extract-face-video.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/extraction/extract-face-video/extract-face-video.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header title=\"Extraction::face-video\" subtitle=\"Extract face biometric data (template) from a supplied video\"></app-header>\n<app-loader [isLoading]=\"loading\"></app-loader>\n<section id=\"response\" *ngIf=\"step==2\">\n  <div class=\"url\"><span class=\"method\">POST</span> {{urlEndpoint}}</div>\n  <code [class.error]=\"error\">\n    {{jsonResponse}}\n  </code>\n  <div class=\"responses\" *ngIf=\"response\">\n    <div class=\"responseProcessed\">\n      <div class=\"dataBlock\">\n        <label>txID:</label>\n        <div class=\"dataContent\">\n          {{response.txId}}\n        </div>\n      </div>\n      <div class=\"dataBlock\">\n        <label>Status:</label>\n        <div class=\"dataContent\">\n          {{response.status}}\n        </div>\n      </div>\n      <div class=\"dataBlock\">\n        <label>Face image:</label>\n        <img [src]=\"'data:image/png;base64,'+response.face.image\">\n      </div>\n      <div class=\"dataBlock\" *ngIf=\"response.properties.thumbnail\"> <!-- {{response.properties.thumbnail}} -->\n        <label>Thumbnail:</label>\n        <img [src]=\"'data:image/png;base64,'+response.properties.thumbnail\">\n      </div>\n      <div class=\"dataBlock\">\n        <label>Template:</label>\n        <div class=\"copy\" (click)=\"copy()\"><img src=\"assets/copy.png\" /></div>\n        <div class=\"dataTemplate\" id=\"templateResponse\">\n          {{response.face.template}}\n        </div>\n      </div>\n      <div class=\"dataBlock\" *ngIf=\"response.properties.position\">\n        <label style=\"display: block;\">Position</label>\n        <div class=\"dataContent\">\n          x: <b>{{response.properties.position.x}}</b> y: <b>{{response.properties.position.y}}</b><br />\n          Width: <b>{{response.properties.position.width}}</b> Height:\n          <b>{{response.properties.position.height}}</b><br />\n          Roll: <b>{{response.properties.position.roll}}</b> Pitch: <b>{{response.properties.position.pitch}}</b> Yaw:\n          <b>{{response.properties.position.yaw}}</b><br />\n          <hr />\n          <b>Points:</b><br />\n          <div class=\"navTab\">\n            <div class=\"tabTitle\">\n              <div class=\"tabChange\" [class.active]=\"inTab==1\" (click)=\"inTab=1\">Graphical</div>\n              <div class=\"tabChange\" [class.active]=\"inTab==2\" (click)=\"inTab=2\">List</div>\n            </div>\n            <div class=\"tab\" *ngIf=\"inTab==1\">\n              <div class=\"pointsBoard\" style=\"position: relative;\">\n                <img [src]=\"'data:image/png;base64,'+response.face.image\" style=\"width: auto\">\n                <div class=\"point\" *ngFor=\"let point of response.properties.position.points\" [style.top.px]=\"point.y\"  [style.left.px]=\"point.x\"><span class=\"label\">{{point.num}} - {{point.confidence}}%</span></div>\n              </div>\n            </div>\n            <div class=\"tab\" *ngIf=\"inTab==2\">\n              <div class=\"dataTagBlock\" *ngFor=\"let point of response.properties.position.points\">\n                Num: <b>{{point.num}}</b><br />\n                Confidence: <b>{{point.confidence}}</b><br />\n                x: <b>{{point.x}}</b> y: <b>{{point.y}}</b>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"dataBlock\">\n        <label>Clahe:</label>\n        <div class=\"dataContent\">\n          {{response.properties.clahe}}\n        </div>\n      </div>\n      <div class=\"dataBlock\" *ngIf=\"response.properties.traits\">\n        <label>glasses:</label>\n        <div class=\"dataContent\">\n          {{response.properties.traits.glasses}}\n        </div>\n      </div>\n      <div class=\"dataBlock\" *ngIf=\"response.properties.traits\">\n        <label>Open mouth:</label>\n        <div class=\"dataContent\">\n          {{response.properties.traits.openMouth}}\n        </div>\n      </div>\n      <div class=\"dataBlock\" *ngIf=\"response.properties.traits\">\n        <label>Both eyes closed:</label>\n        <div class=\"dataContent\">\n          <b *ngIf=\"response.properties.traits.ambosOjosCerrados\">YES</b>\n          <b *ngIf=\"!response.properties.traits.ambosOjosCerrados\">NO</b>\n        </div>\n      </div>\n      <div class=\"dataBlock\" *ngIf=\"response.properties.traits\">\n        <label>Dark glasses:</label>\n        <div class=\"dataContent\">\n          {{response.properties.traits.darkGlasses}}\n        </div>\n      </div>\n      <div class=\"dataBlock\" *ngIf=\"response.properties.traits\">\n        <label>Beard:</label>\n        <div class=\"dataContent\">\n          {{response.properties.traits.beard}}%\n        </div>\n      </div>\n      <div class=\"dataBlock\" *ngIf=\"response.properties.traits\">\n        <label>Mustache:</label>\n        <div class=\"dataContent\">\n          {{response.properties.traits.mustache}}%\n        </div>\n      </div>\n      <div class=\"dataBlock\" *ngIf=\"response.properties.traits\">\n        <label>Hat:</label>\n        <div class=\"dataContent\">\n          {{response.properties.traits.hat}}%\n        </div>\n      </div>\n      <div class=\"dataBlock\" *ngIf=\"response.properties.traits\">\n        <label>Left eye closed:</label>\n        <div class=\"dataContent\">\n          <b *ngIf=\"response.properties.traits.leftEyeClosed\">YES</b>\n          <b *ngIf=\"!response.properties.traits.leftEyeClosed\">NO</b>\n        </div>\n      </div>\n      <div class=\"dataBlock\" *ngIf=\"response.properties.traits\">\n        <label>Right Eye Closed:</label>\n        <div class=\"dataContent\">\n          <b *ngIf=\"response.properties.traits.rightEyeClosed\">YES</b>\n          <b *ngIf=\"!response.properties.traits.rightEyeClosed\">NO</b>\n        </div>\n      </div>\n      <div class=\"dataBlock\" *ngIf=\"response.properties.traits\">\n        <label>Looking Upward:</label>\n        <div class=\"dataContent\">\n          <b *ngIf=\"response.properties.traits.lookingUpward\">YES</b>\n          <b *ngIf=\"!response.properties.traits.lookingUpward\">NO</b>\n\n        </div>\n      </div>\n      <div class=\"dataBlock\" *ngIf=\"response.properties.traits\">\n        <label>Looking Downward:</label>\n        <div class=\"dataContent\">\n          <b *ngIf=\"response.properties.traits.lookingDownward\">YES</b>\n          <b *ngIf=\"!response.properties.traits.lookingDownward\">NO</b>\n\n        </div>\n      </div>\n      <div class=\"dataBlock\" *ngIf=\"response.properties.traits\">\n        <label>Looking Right:</label>\n        <div class=\"dataContent\">\n          <b *ngIf=\"response.properties.traits.lookingRight\">YES</b>\n          <b *ngIf=\"!response.properties.traits.lookingRight\">NO</b>\n        </div>\n      </div>\n      <div class=\"dataBlock\" *ngIf=\"response.properties.traits\">\n        <label>Looking Left:</label>\n        <div class=\"dataContent\">\n          <b *ngIf=\"response.properties.traits.lookingLeft\">YES</b>\n          <b *ngIf=\"!response.properties.traits.lookingLeft\">NO</b>\n        </div>\n      </div>\n      <div class=\"dataBlock\" *ngIf=\"response.properties.traits\">\n        <label>Looking Front:</label>\n        <div class=\"dataContent\">\n          <b *ngIf=\"response.properties.traits.lookingFront\">YES</b>\n          <b *ngIf=\"!response.properties.traits.lookingFront\">NO</b>\n        </div>\n      </div>\n      <hr *ngIf=\"response.properties.traits\"/>\n      <div class=\"dataBlock\" *ngIf=\"response.properties.expression\">\n        <label style=\"vertical-align: top;\">Expression:</label>\n        <div class=\"dataContent\">\n          Type: {{response.properties.expression.type}}<br />\n          Confidence: {{response.properties.expression.confidence}}\n        </div>\n      </div>\n      <hr *ngIf=\"response.properties.expression\"/>\n      <div class=\"dataBlock\" *ngIf=\"response.properties.emotion\">\n        <label style=\"vertical-align: top;\">Emotions:</label>\n        <div class=\"dataContent\">\n          Anger: {{response.properties.emotion.anger}}<br />\n          Disgust: {{response.properties.emotion.disgust}}<br />\n          Fear: {{response.properties.emotion.fear}}<br />\n          Happiness: {{response.properties.emotion.happiness}}<br />\n          Neutral: {{response.properties.emotion.neutral}}<br />\n          Sadness: {{response.properties.emotion.sadness}}<br />\n          Surprise: {{response.properties.emotion.surprise}}<br />\n        </div>\n      </div>\n      <hr *ngIf=\"response.properties.emotion\"/>\n      <div class=\"dataBlock\" *ngIf=\"response.properties.gender\">\n        <label style=\"vertical-align: top;\">Gender:</label>\n        <div class=\"dataContent\">\n          Type: {{response.properties.gender.type}}<br />\n          Confidence: {{response.properties.gender.confidence}}\n        </div>\n      </div>\n      <hr *ngIf=\"response.properties.gender\"/>\n      <div class=\"dataBlock\" *ngIf=\"response.properties.gender\">\n        <label>Age:</label>\n        <div class=\"dataContent\">\n          {{response.properties.age}}\n        </div>\n      </div>\n      <div class=\"dataBlock\" *ngIf=\"response.detectedActions\">\n        <label style=\"display: block;text-align: left;\">Detected Actions:</label>\n        <div class=\"dataContent\">\n          <ol class=\"actions\">\n            <li *ngFor=\"let action of response.detectedActions\">\n              <div class=\"pointsBoard\" style=\"position: relative;\">\n                <img [src]=\"'data:image/png;base64,'+action.thumbnail\" style=\"width: auto;\"/><br />\n                <div class=\"point\" *ngFor=\"let point of action.points\" [style.top.px]=\"point.y\"  [style.left.px]=\"point.x\"><span class=\"label\">{{point.num}} - {{point.confidence}}%</span></div>\n              </div>\n              Frame: {{action.frameNum}}<br />\n              Type: {{action.type}}<br />\n              Roll: {{action.roll}}<br />\n              Pitch: {{action.pitch}}<br />\n              Yaw: {{action.yaw}}\n            </li>\n          </ol>\n        </div>\n      </div>\n    </div>\n  </div>\n  <button type=\"button\" class=\"send\" (click)=\"retry()\">Retry</button>\n</section>\n<form *ngIf=\"step==1\">\n  <section>\n    <div class=\"inputRow\">\n      <label>\n        Audit Token\n      </label>\n      <input type=\"text\" name=\"auditToken\" value=\"\" [(ngModel)]=\"dto.auditToken\">\n    </div>\n  </section>\n  <section>\n    <header>\n      <h3>Params</h3>\n    </header>\n    <div class=\"inputRow\">\n      <label>\n        Blink Sensibility\n      </label>\n      <input type=\"range\" min=\"1\" max=\"7\" name=\"blinkSensibility\" value=\"\" [(ngModel)]=\"dto.params.blinkSensibility\">\n      {{dto.params.blinkSensibility/10}}\n    </div>\n    <div class=\"inputRow\">\n      <label>\n        Detect Age\n      </label>\n      <input type=\"checkbox\" name=\"detectAge\" checked=\"checked\" [(ngModel)]=\"dto.params.detectAge\">\n    </div>\n    <div class=\"inputRow\">\n      <label>\n        Detect Emotion\n      </label>\n      <input type=\"checkbox\" name=\"detectEmotion\" checked=\"checked\" [(ngModel)]=\"dto.params.detectEmotion\">\n    </div>\n    <div class=\"inputRow\">\n      <label>\n        Detect Expression\n      </label>\n      <input type=\"checkbox\" name=\"detectExpression\" checked=\"checked\" [(ngModel)]=\"dto.params.detectExpression\">\n    </div>\n    <div class=\"inputRow\">\n      <label>\n        Detect Gender\n      </label>\n      <input type=\"checkbox\" name=\"detectGender\" checked=\"checked\" [(ngModel)]=\"dto.params.detectGender\">\n    </div>\n    <div class=\"inputRow\">\n      <label>\n        Detect Only Major Face\n      </label>\n      <input type=\"checkbox\" name=\"detectOnlyMajorFace\" checked=\"checked\" [(ngModel)]=\"dto.params.detectOnlyMajorFace\">\n    </div>\n    <div class=\"inputRow\">\n      <label>\n        Detect Traits And Actions\n      </label>\n      <input type=\"checkbox\" name=\"detectTraitsAndActions\" checked=\"checked\"\n        [(ngModel)]=\"dto.params.detectTraitsAndActions\">\n    </div>\n    <section>\n      <header>\n        <h4>Face Pose Sensibility</h4>\n      </header>\n      <div class=\"inputRow\">\n        <label>\n          Looking Downwards Pitch Angle\n        </label>\n        <input type=\"range\" min=\"-30\" max=\"-5\" name=\"lookingDownwardsPitchAngle\"\n          [(ngModel)]=\"dto.params.facePoseSensibility.lookingDownwardsPitchAngle\">\n        {{dto.params.facePoseSensibility.lookingDownwardsPitchAngle}}\n      </div>\n      <div class=\"inputRow\">\n        <label>\n          Looking Front\n        </label>\n        <input type=\"range\" min=\"1\" max=\"20\" name=\"lookingFront\"\n          [(ngModel)]=\"dto.params.facePoseSensibility.lookingFront\"> {{dto.params.facePoseSensibility.lookingFront}}\n      </div>\n      <div class=\"inputRow\">\n        <label>\n          Looking Left Yaw Angle\n        </label>\n        <input type=\"range\" min=\"-60\" max=\"-10\" name=\"lookingLeftYawAngle\"\n          [(ngModel)]=\"dto.params.facePoseSensibility.lookingLeftYawAngle\">\n        {{dto.params.facePoseSensibility.lookingLeftYawAngle}}\n      </div>\n      <div class=\"inputRow\">\n        <label>\n          Looking Right Yaw Angle\n        </label>\n        <input type=\"range\" min=\"10\" max=\"60\" name=\"lookingRightYawAngle\"\n          [(ngModel)]=\"dto.params.facePoseSensibility.lookingRightYawAngle\">\n        {{dto.params.facePoseSensibility.lookingRightYawAngle}}\n      </div>\n      <div class=\"inputRow\">\n        <label>\n          Looking Upwards Pitch Angle\n        </label>\n        <input type=\"range\" min=\"5\" max=\"25\" name=\"lookingUpwardsPitchAngle\"\n          [(ngModel)]=\"dto.params.facePoseSensibility.lookingUpwardsPitchAngle\">\n        {{dto.params.facePoseSensibility.lookingUpwardsPitchAngle}}\n      </div>\n    </section>\n    <div class=\"inputRow\">\n      <label>\n        Max Clahe\n      </label>\n      <input type=\"range\" min=\"5\" max=\"15\" name=\"maxCLAHE\" [(ngModel)]=\"dto.params.maxCLAHE\"> {{dto.params.maxCLAHE}}\n    </div>\n    <div class=\"inputRow\">\n      <label>\n        Max Roll\n      </label>\n      <input type=\"range\" min=\"0\" max=\"180\" name=\"maxRoll\" [(ngModel)]=\"dto.params.maxRoll\"> {{dto.params.maxRoll}}\n    </div>\n    <div class=\"inputRow\">\n      <label>\n        Max Yaw\n      </label>\n      <input type=\"range\" min=\"0\" max=\"90\" name=\"maxYaw\" [(ngModel)]=\"dto.params.maxYaw\"> {{dto.params.maxYaw}}\n    </div>\n    <div class=\"inputRow\">\n      <label>\n        Min Clahe\n      </label>\n      <input type=\"range\" min=\"0\" max=\"5\" name=\"minCLAHE\" [(ngModel)]=\"dto.params.minCLAHE\"> {{dto.params.minCLAHE}}\n    </div>\n    <div class=\"inputRow\">\n      <label>\n        Min Confidence\n      </label>\n      <input type=\"range\" min=\"0\" max=\"100\" name=\"minConfidence\" [(ngModel)]=\"dto.params.minConfidence\">\n      {{dto.params.minConfidence}}\n    </div>\n    <div class=\"inputRow\">\n      <label>\n        Min IOD\n      </label>\n      <input type=\"range\" min=\"8\" max=\"1024\" name=\"minIOD\" [(ngModel)]=\"dto.params.minIOD\"> {{dto.params.minIOD}}\n    </div>\n    <div class=\"inputRow\">\n      <label>\n        Min Quality\n      </label>\n      <input type=\"range\" min=\"0\" max=\"100\" name=\"minQuality\" [(ngModel)]=\"dto.params.minQuality\">\n      {{dto.params.minQuality}}\n    </div>\n    <div class=\"inputRow\">\n      <label>\n        Scale H\n      </label>\n      <input type=\"range\" min=\"0\" max=\"2\" name=\"scaleH\" [(ngModel)]=\"dto.params.scaleH\"> {{dto.params.scaleH}}\n    </div>\n    <div class=\"inputRow\">\n      <label>\n        Thumbnail Width\n      </label>\n      <input type=\"range\" min=\"24\" max=\"512\" name=\"thumbnailWidth\" [(ngModel)]=\"dto.params.thumbnailWidth\">\n      {{dto.params.thumbnailWidth}}\n    </div>\n    <div class=\"inputRow\">\n      <label>\n        Use CLAHE\n      </label>\n      <input type=\"checkbox\" name=\"useCLAHE\" [(ngModel)]=\"dto.params.useCLAHE\">\n    </div>\n    <div class=\"inputRow\">\n      <label>\n        Use Cache\n      </label>\n      <input type=\"checkbox\" name=\"useCache\" [(ngModel)]=\"dto.params.useCache\">\n    </div>\n    <div class=\"inputRow\">\n      <label>\n        Video Frames Seq\n      </label>\n      <input type=\"range\" min=\"1\" max=\"5\" name=\"videoFramesSeq\" [(ngModel)]=\"dto.params.videoFramesSeq\">\n      {{dto.params.videoFramesSeq}}\n    </div>\n  </section>\n  <section>\n    <header>\n      <h3>Video</h3>\n    </header>\n    <div class=\"inputRow\">\n      <label>\n        Select video file\n      </label>\n      <input type=\"file\" value=\"\" accept=\"video/*\" (change)=\"fileChange()\" #fileInput> <!-- [(ngModel)]=\"dto.image\" -->\n      <div class=\"videoWrapper\" *ngIf=\"dto.video\">\n        <div class=\"cross\" (click)=\"dto.video = undefined\">X</div>\n        <video controls>\n          <source [type]=\"dataType\" [src]=\"'data:'+dataType+';base64,'+dto.video\" />\n        </video>\n      </div>\n    </div>\n  </section>\n  <section>\n    <button type=\"button\" class=\"send\" (click)=\"send()\">Send Data</button>\n  </section>\n</form>\n"

/***/ }),

/***/ "./src/app/pages/extraction/extract-face-video/extract-face-video.component.sass":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/extraction/extract-face-video/extract-face-video.component.sass ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".videoWrapper {\n  display: inline-block;\n  width: 35%;\n  position: relative; }\n  .videoWrapper video {\n    width: 100%;\n    margin-left: 10px; }\n  .videoWrapper .cross {\n    position: absolute;\n    right: -10px;\n    top: 1px;\n    background: #ca0000;\n    color: white;\n    width: 20px;\n    height: 20px;\n    text-align: center;\n    font-family: helvetica;\n    cursor: pointer;\n    z-index: 2;\n    border-radius: 0px 0px 0px 5px;\n    line-height: 20px; }\n  .dataTagBlock {\n  display: inline-block;\n  padding: 3px;\n  background: #fff6e4;\n  border-radius: 5px;\n  margin: 5px;\n  font-family: helvetica;\n  text-transform: uppercase;\n  font-size: 12px; }\n  .navTab .tabTitle .tabChange {\n  display: inline-block;\n  width: 100px;\n  text-align: center;\n  padding: 5px;\n  background: #e8e8e8;\n  border-radius: 5px 5px 0px 0px;\n  margin-right: 7px;\n  cursor: pointer; }\n  .navTab .tabTitle .tabChange.active {\n    background: #fdfdfd; }\n  .navTab .tab {\n  background: #fdfdfd;\n  width: 100%;\n  padding: 10px; }\n  .pointsBoard .point {\n  position: absolute;\n  width: 4px;\n  height: 4px;\n  background: red;\n  cursor: pointer; }\n  .pointsBoard .point span.label {\n    background: #0000007a;\n    width: 65px;\n    text-align: center;\n    margin-top: -30px;\n    margin-left: 15px;\n    font-size: 14px;\n    border-radius: 5px;\n    color: white;\n    z-index: 1;\n    display: none;\n    position: relative; }\n  .pointsBoard .point:hover span.label {\n    display: block; }\n  ol.actions {\n  list-style: none;\n  padding: 0px; }\n  ol.actions li {\n    display: inline-block;\n    border-radius: 3px;\n    text-align: center;\n    margin: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZHkvcmVwb3Mvc29iaW8vc3JjL2FwcC9wYWdlcy9leHRyYWN0aW9uL2V4dHJhY3QtZmFjZS12aWRlby9leHRyYWN0LWZhY2UtdmlkZW8uY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxxQkFBcUI7RUFDckIsVUFBVTtFQUNWLGtCQUFrQixFQUFBO0VBSHRCO0lBS1EsV0FBVztJQUNYLGlCQUFpQixFQUFBO0VBTnpCO0lBUVEsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixRQUFRO0lBQ1IsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLFVBQVU7SUFDViw4QkFBOEI7SUFDOUIsaUJBQWlCLEVBQUE7RUFDekI7RUFDSSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsZUFBZSxFQUFBO0VBQ25CO0VBR1kscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQTtFQVYzQjtJQVlnQixtQkFBbUIsRUFBQTtFQVpuQztFQWNRLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsYUFBYSxFQUFBO0VBQ3JCO0VBRVEsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1gsZUFBZTtFQUNmLGVBQWUsRUFBQTtFQU52QjtJQVFZLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osVUFBVTtJQUNWLGFBQWE7SUFDYixrQkFBa0IsRUFBQTtFQWxCOUI7SUFxQmdCLGNBQWMsRUFBQTtFQUM5QjtFQUNJLGdCQUFnQjtFQUNoQixZQUFZLEVBQUE7RUFGaEI7SUFJUSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9leHRyYWN0aW9uL2V4dHJhY3QtZmFjZS12aWRlby9leHRyYWN0LWZhY2UtdmlkZW8uY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi52aWRlb1dyYXBwZXIge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMzUlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB2aWRlbyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDsgfVxuICAgIC5jcm9zcyB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IC0xMHB4O1xuICAgICAgICB0b3A6IDFweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2NhMDAwMDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBoZWx2ZXRpY2E7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAwcHggNXB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDsgfSB9XG4uZGF0YVRhZ0Jsb2NrIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogM3B4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY2ZTQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1hcmdpbjogNXB4O1xuICAgIGZvbnQtZmFtaWx5OiBoZWx2ZXRpY2E7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IDEycHg7IH1cbi5uYXZUYWIge1xuICAgIC50YWJUaXRsZSB7XG4gICAgICAgIC50YWJDaGFuZ2Uge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2U4ZThlODtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMHB4IDBweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogN3B4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZGZkZmQ7IH0gfSB9XG4gICAgLnRhYiB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZGZkZmQ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAxMHB4OyB9IH1cbi5wb2ludHNCb2FyZCB7XG4gICAgLnBvaW50IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogNHB4O1xuICAgICAgICBoZWlnaHQ6IDRweDtcbiAgICAgICAgYmFja2dyb3VuZDogcmVkO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHNwYW4ubGFiZWwge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwMDAwMDdhO1xuICAgICAgICAgICAgd2lkdGg6IDY1cHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMzBweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBzcGFuLmxhYmVsIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jazsgfSB9IH0gfVxub2wuYWN0aW9ucyB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgbGkge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW46IDVweDsgfSB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/extraction/extract-face-video/extract-face-video.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/extraction/extract-face-video/extract-face-video.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ExtractFaceVideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtractFaceVideoComponent", function() { return ExtractFaceVideoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_dataTypeObjects_faceVideo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dataTypeObjects/faceVideo */ "./src/app/dataTypeObjects/faceVideo.ts");
/* harmony import */ var src_app_providers_extraction_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/providers/extraction.service */ "./src/app/providers/extraction.service.ts");
/* harmony import */ var src_app_Utils_UUID__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Utils/UUID */ "./src/app/Utils/UUID.ts");





var ExtractFaceVideoComponent = /** @class */ (function () {
    function ExtractFaceVideoComponent(extractionSrv) {
        this.extractionSrv = extractionSrv;
        this.dto = new src_app_dataTypeObjects_faceVideo__WEBPACK_IMPORTED_MODULE_2__["FaceVideoDTO"]();
    }
    ExtractFaceVideoComponent.prototype.ngOnInit = function () {
        this.step = 1;
        this.dto.auditToken = src_app_Utils_UUID__WEBPACK_IMPORTED_MODULE_4__["UUID"].create();
        this.inTab = 1;
    };
    ExtractFaceVideoComponent.prototype.fileChange = function () {
        var _this = this;
        this.loading = true;
        var reader = new FileReader();
        reader.onload = function () {
            _this.dto.video = reader.result;
            var dataInfo = /data:([a-zA-Z0-9\/]+);/gi.exec(_this.dto.video);
            if (dataInfo) {
                _this.dataType = dataInfo[1];
            }
            _this.dto.video = _this.dto.video.replace(/data:([a-zA-Z0-9]+)\/([a-zA-Z0-9]+);base64,/gi, '');
            _this.loading = false;
            _this.fileInput.nativeElement.value = '';
        };
        if (this.fileInput.nativeElement.files[0]) {
            reader.readAsDataURL(this.fileInput.nativeElement.files[0]);
        }
    };
    ExtractFaceVideoComponent.prototype.send = function () {
        var _this = this;
        this.error = false;
        this.loading = true;
        this.dto.params.blinkSensibility = this.dto.params.blinkSensibility / 10;
        this.extractionSrv.extractFaceVideo(this.dto).subscribe(function (resp) {
            console.log(resp);
            _this.loading = false;
            _this.step = 2;
            _this.response = resp;
            _this.jsonResponse = JSON.stringify(resp);
        }, function (err) {
            console.log(err);
            _this.error = true;
            _this.loading = false;
            _this.step = 2;
            _this.jsonResponse = JSON.stringify(err);
        });
        this.urlEndpoint = this.extractionSrv.getEndpoints().faceVideo;
    };
    ExtractFaceVideoComponent.prototype.retry = function () {
        this.step = 1;
    };
    ExtractFaceVideoComponent.prototype.copy = function () {
        try {
            navigator.clipboard.writeText(this.response.face.template).then(function () {
                // alert('Copied A');
            });
        }
        catch (e) {
            // no tiene ssl
            // $(this).find('.copyRealText').select();
            var selection = document.getSelection();
            var range = document.createRange();
            range.selectNode(document.getElementById('templateResponse'));
            selection.removeAllRanges();
            selection.addRange(range);
            var result = document.execCommand('copy');
            // tampoco funcionó:
            if (!result) {
                alert('Can\'t copy (HTTPS/Chrome +43/Permisos).');
            }
            else {
                // alert('Copied B');
            }
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fileInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ExtractFaceVideoComponent.prototype, "fileInput", void 0);
    ExtractFaceVideoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-extract-face-video',
            template: __webpack_require__(/*! ./extract-face-video.component.html */ "./src/app/pages/extraction/extract-face-video/extract-face-video.component.html"),
            styles: [__webpack_require__(/*! ./extract-face-video.component.sass */ "./src/app/pages/extraction/extract-face-video/extract-face-video.component.sass"), __webpack_require__(/*! ../../../shared-styles/forms.scss */ "./src/app/shared-styles/forms.scss"), __webpack_require__(/*! ../../../shared-styles/playground-response.scss */ "./src/app/shared-styles/playground-response.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_providers_extraction_service__WEBPACK_IMPORTED_MODULE_3__["ExtractionService"]])
    ], ExtractFaceVideoComponent);
    return ExtractFaceVideoComponent;
}());



/***/ }),

/***/ "./src/app/pages/extraction/extract-fingerprint-image/extract-fingerprint-image.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/extraction/extract-fingerprint-image/extract-fingerprint-image.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header title=\"Extraction::fingerprint-image\"\n    subtitle=\"Extract finger biometric data (template) from a supplied image\"></app-header>\n<app-loader [isLoading]=\"loading\"></app-loader>\n\n<section id=\"response\" *ngIf=\"step==2\">\n    <div class=\"url\"><span class=\"method\">POST</span> {{urlEndpoint}}</div>\n    <code [class.error]=\"error\">\n        {{jsonResponse}}\n    </code>\n    <div class=\"responses\" *ngIf=\"response\">\n        <div class=\"responseProcessed\">\n            <div class=\"dataBlock\">\n                <label>TxId:</label>\n                <div class=\"dataContent\">\n                    {{response.txId}}\n                </div>\n            </div>\n            <div class=\"dataBlock\">\n                <label>Status:</label>\n                <div class=\"dataContent\">\n                    {{response.status}}\n                </div>\n            </div>\n            <div class=\"dataBlock\">\n                <label>Exception:</label>\n                <div class=\"dataContent\">\n                    <b *ngIf=\"response.exception\">YES</b>\n                    <b *ngIf=\"response.exception\">NO</b>\n                </div>\n            </div>\n            <div class=\"dataBlock\" *ngIf=\"response.fingerPrint\">\n                <label>Template Format:</label>\n                <div class=\"dataContent\">\n                    {{response.fingerPrint.formatoTemplate}}\n                </div>\n            </div>\n            <div class=\"dataBlock\" *ngIf=\"response.fingerPrint\">\n                <label>Image:</label>\n                <div class=\"dataContent\">\n                    {{response.fingerPrint.image}}\n                </div>\n            </div>\n            <div class=\"dataBlock\" *ngIf=\"response.fingerPrint\">\n                <label>Image Source:</label>\n                <img [src]=\"'data:image/png;base64,'+response.fingerPrint.imageSource\">\n            </div>\n            <div class=\"dataBlock\" *ngIf=\"response.fingerPrint\">\n                <label>Position:</label>\n                <div class=\"dataContent\">\n                    {{response.fingerPrint.position}}\n                </div>\n            </div>\n            <div class=\"copy\" (click)=\"copy(idx)\" *ngIf=\"response.fingerPrint\"><img src=\"assets/copy.png\" /></div>\n            <div class=\"dataBlock\" *ngIf=\"response.fingerPrint\">\n                <label>Template:</label>\n                <div class=\"dataTemplate\" id=\"templateResponse\">\n                    {{response.fingerPrint.template}}\n                </div>\n            </div>\n        </div>\n    </div>\n    <button type=\"button\" class=\"send\" (click)=\"retry()\">Retry</button>\n</section>\n\n<form *ngIf=\"step==1\">\n    <section>\n        <div class=\"inputRow\">\n            <label>\n                Audit Token\n            </label>\n            <input type=\"text\" name=\"auditToken\" value=\"\" [(ngModel)]=\"dto.auditToken\">\n        </div>\n    </section>\n    <section>\n        <header>\n            <h3>Params</h3>\n        </header>\n        <div class=\"inputRow\">\n            <label>\n                Determine Pattern Class\n            </label>\n            <input type=\"checkbox\" name=\"determinePatternClass\" [(ngModel)]=\"dto.params.determinePatternClass\">\n        </div>\n        <div class=\"inputRow\">\n            <label>\n                Evaluate NFIQ\n            </label>\n            <input type=\"checkbox\" name=\"evaluateNFIQ\" [(ngModel)]=\"dto.params.evaluateNFIQ\">\n        </div>\n        <div class=\"inputRow\">\n            <label>\n                Image Source\n            </label>\n            <select name=\"bi1_source_composite\" [(ngModel)]=\"dto.params.imageSource\">\n                <option>LIVE_FINGERPRINT</option>\n                <option>SCANNED_FINGERPRINT_IMAGE</option>\n                <option>UNKNOWN</option>\n            </select>\n        </div>\n        <div class=\"inputRow\">\n            <label>\n                Max Rotation\n            </label>\n            <input name=\"maxRotation\" type=\"range\" min=\"0\" max=\"180\" [(ngModel)]=\"dto.params.maxRotation\" />\n            {{dto.params.maxRotation}}\n        </div>\n        <div class=\"inputRow\">\n            <label>\n                Min Quality\n            </label>\n            <input type=\"range\" min=\"0\" max=\"100\" name=\"minQuality\" [(ngModel)]=\"dto.params.minQuality\">\n            {{dto.params.minQuality}}\n        </div>\n        <div class=\"inputRow\">\n            <label>\n                Position\n            </label>\n            <select name=\"bi1_position_fp\" [(ngModel)]=\"dto.params.position\">\n                <option>RIGHT_THUMB</option>\n                <option>LEFT_THUMB</option>\n                <option>RIGHT_INDEX_FINGER</option>\n                <option>LEFT_INDEX_FINGER</option>\n                <option>RIGHT_MIDDLE_FINGER</option>\n                <option>LEFT_MIDDLE_FINGER</option>\n                <option>RIGHT_RING_FINGER</option>\n                <option>LEFT_RING_FINGER</option>\n                <option>RIGHT_LITTLE_FINGER</option>\n                <option>LEFT_LITTLE_FINGER</option>\n                <option>UNKNOWN</option>\n            </select>\n        </div>\n        <div class=\"inputRow\">\n            <label>\n                Use Cache\n            </label>\n            <input type=\"checkbox\" name=\"useCache\" [(ngModel)]=\"dto.params.useCache\">\n        </div>\n        <div class=\"inputRow\">\n            <label>\n                Use Only Ansi 378\n            </label>\n            <input type=\"checkbox\" name=\"useOnlyAnsi378\" [(ngModel)]=\"dto.params.useOnlyAnsi378\">\n        </div>\n    </section>\n    <section>\n        <header>\n            <h3>Image</h3>\n        </header>\n        <div class=\"inputRow\">\n            <label>\n                Select image file\n            </label>\n            <input type=\"file\" value=\"\" accept=\".wsq,image/*\" (change)=\"fileChange()\" #fileInput>\n            <!-- [(ngModel)]=\"dto.image\" -->\n            <img *ngIf=\"dto.image && !wsqlFile\" [src]=\"'data:'+dataType+';base64,'+dto.image\" class=\"imagefile\"\n                (click)=\"dto.image = undefined\" />\n            <div class=\"extensionFile\" *ngIf=\"dto.image && wsqlFile\" (click)=\"dto.image = undefined\">\n                .wsq\n            </div>\n        </div>\n    </section>\n    <section>\n        <button type=\"button\" class=\"send\" (click)=\"send()\">Send Data</button>\n    </section>\n</form>"

/***/ }),

/***/ "./src/app/pages/extraction/extract-fingerprint-image/extract-fingerprint-image.component.sass":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/extraction/extract-fingerprint-image/extract-fingerprint-image.component.sass ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".imagefile {\n  max-width: 150px;\n  max-height: 150px;\n  cursor: crosshair; }\n\n.extensionFile {\n  display: inline-block;\n  cursor: crosshair;\n  background: #9cce9c;\n  width: 100px;\n  height: 50px;\n  vertical-align: middle;\n  text-align: center;\n  padding-top: 30px;\n  color: #13731c;\n  font-family: helvetica;\n  font-weight: bolder;\n  font-size: 20px;\n  border-radius: 3px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZHkvcmVwb3Mvc29iaW8vc3JjL2FwcC9wYWdlcy9leHRyYWN0aW9uL2V4dHJhY3QtZmluZ2VycHJpbnQtaW1hZ2UvZXh0cmFjdC1maW5nZXJwcmludC1pbWFnZS5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsaUJBQWlCLEVBQUE7O0FBQ3JCO0VBQ0kscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2Ysa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9leHRyYWN0aW9uL2V4dHJhY3QtZmluZ2VycHJpbnQtaW1hZ2UvZXh0cmFjdC1maW5nZXJwcmludC1pbWFnZS5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZWZpbGUge1xuICAgIG1heC13aWR0aDogMTUwcHg7XG4gICAgbWF4LWhlaWdodDogMTUwcHg7XG4gICAgY3Vyc29yOiBjcm9zc2hhaXI7IH1cbi5leHRlbnNpb25GaWxlIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgY3Vyc29yOiBjcm9zc2hhaXI7XG4gICAgYmFja2dyb3VuZDogIzljY2U5YztcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgIGNvbG9yOiAjMTM3MzFjO1xuICAgIGZvbnQtZmFtaWx5OiBoZWx2ZXRpY2E7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4OyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/extraction/extract-fingerprint-image/extract-fingerprint-image.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/extraction/extract-fingerprint-image/extract-fingerprint-image.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: ExtractFingerprintImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtractFingerprintImageComponent", function() { return ExtractFingerprintImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _dataTypeObjects_fingerPrintImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../dataTypeObjects/fingerPrintImage */ "./src/app/dataTypeObjects/fingerPrintImage.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Utils_UUID__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Utils/UUID */ "./src/app/Utils/UUID.ts");
/* harmony import */ var src_app_providers_extraction_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/providers/extraction.service */ "./src/app/providers/extraction.service.ts");





var ExtractFingerprintImageComponent = /** @class */ (function () {
    function ExtractFingerprintImageComponent(extractionSrv) {
        this.extractionSrv = extractionSrv;
        this.dto = new _dataTypeObjects_fingerPrintImage__WEBPACK_IMPORTED_MODULE_1__["FingerPrintImage"]();
        this.dto.auditToken = src_app_Utils_UUID__WEBPACK_IMPORTED_MODULE_3__["UUID"].create();
        this.wsqlFile = false;
    }
    ExtractFingerprintImageComponent.prototype.ngOnInit = function () {
        this.step = 1;
        this.loading = false;
    };
    ExtractFingerprintImageComponent.prototype.fileChange = function () {
        var _this = this;
        this.loading = true;
        var reader = new FileReader();
        reader.onload = function () {
            _this.dto.image = reader.result;
            // extracting data
            var dataInfo = /data:([a-zA-Z0-9\/]+);/gi.exec(_this.dto.image);
            if (dataInfo) {
                _this.dataType = dataInfo[1];
            }
            _this.dto.image = _this.dto.image.replace(/data:([a-zA-Z0-9]+)\/([a-zA-Z0-9]+);base64,/gi, '');
            _this.loading = false;
            _this.fileInput.nativeElement.value = '';
        };
        var extension = this.fileInput.nativeElement.files[0].name.split('.').pop().toLowerCase();
        console.log('EXTENSION: ', extension);
        this.wsqlFile = extension === 'wsq';
        if (this.fileInput.nativeElement.files[0]) {
            reader.readAsDataURL(this.fileInput.nativeElement.files[0]);
        }
    };
    ExtractFingerprintImageComponent.prototype.send = function () {
        var _this = this;
        this.extractionSrv.extractFingerprint(this.dto).subscribe(function (resp) {
            console.log(resp);
            _this.loading = false;
            _this.response = resp;
            _this.jsonResponse = JSON.stringify(resp);
            _this.step = 2;
            _this.error = false;
        }, function (err) {
            console.log(err);
            _this.error = true;
            _this.jsonResponse = JSON.stringify(err);
            _this.step = 2;
            _this.loading = false;
        });
        this.urlEndpoint = this.extractionSrv.getEndpoints().faceImage;
    };
    ExtractFingerprintImageComponent.prototype.copy = function () {
        try {
            navigator.clipboard.writeText(this.response.fingerPrint.template).then(function () {
                // alert('Copied A');
            });
        }
        catch (e) {
            var selection = document.getSelection();
            var range = document.createRange();
            range.selectNode(document.getElementById('templateResponse'));
            selection.removeAllRanges();
            selection.addRange(range);
            var result = document.execCommand('copy');
            if (!result) {
                alert('Can\'t copy (HTTPS/Chrome +43/Permisos).');
            }
            else {
                // alert('Copied B');
            }
        }
    };
    ExtractFingerprintImageComponent.prototype.retry = function () {
        this.step = 1;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('fileInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])
    ], ExtractFingerprintImageComponent.prototype, "fileInput", void 0);
    ExtractFingerprintImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-extract-fingerprint-image',
            template: __webpack_require__(/*! ./extract-fingerprint-image.component.html */ "./src/app/pages/extraction/extract-fingerprint-image/extract-fingerprint-image.component.html"),
            styles: [__webpack_require__(/*! ./extract-fingerprint-image.component.sass */ "./src/app/pages/extraction/extract-fingerprint-image/extract-fingerprint-image.component.sass"), __webpack_require__(/*! ../../../shared-styles/forms.scss */ "./src/app/shared-styles/forms.scss"), __webpack_require__(/*! ../../../shared-styles/playground-response.scss */ "./src/app/shared-styles/playground-response.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_providers_extraction_service__WEBPACK_IMPORTED_MODULE_4__["ExtractionService"]])
    ], ExtractFingerprintImageComponent);
    return ExtractFingerprintImageComponent;
}());



/***/ }),

/***/ "./src/app/pages/extraction/text-dependent-voice/text-dependent-voice.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/extraction/text-dependent-voice/text-dependent-voice.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header title=\"Extraction::text-dependent-voice\"\n  subtitle=\"Extract text-dependent voice biometric data (template) from a supplied audio\"></app-header>\n<app-loader [isLoading]=\"loading\"></app-loader>\n<section id=\"response\" *ngIf=\"step==2\">\n  <div class=\"url\"><span class=\"method\">POST</span> {{urlEndpoint}}</div>\n  <code [class.error]=\"error\">\n      {{jsonResponse}}\n    </code>\n  <div class=\"responses\" *ngIf=\"response\">\n    <div class=\"responseProcessed\">\n      <div class=\"dataBlock\">\n        <label>txID:</label>\n        <div class=\"dataContent\">\n          {{response.txId}}\n        </div>\n      </div>\n      <div class=\"dataBlock\">\n        <label>Status:</label>\n        <div class=\"dataContent\">\n          {{response.status}}\n        </div>\n      </div>\n      <div class=\"dataBlock\" *ngIf=\"response.voice\">\n        <label>Audio:</label>\n\n      </div>\n      <div class=\"dataBlock\" *ngIf=\"response.voice\">\n        <label>Template:</label>\n        <div class=\"copy\" (click)=\"copy()\"><img src=\"assets/copy.png\" /></div>\n        <div class=\"dataTemplate\" id=\"templateResponse\">\n          {{response.voice.template}}\n        </div>\n      </div>\n      <div class=\"dataBlock\" *ngIf=\"response.voice\">\n        <label>PhraseID:</label>\n        <div class=\"dataContent\">\n          {{response.voice.phraseId}}\n        </div>\n      </div>\n    </div>\n  </div>\n  <button type=\"button\" class=\"send\" (click)=\"retry()\">Retry</button>\n</section>\n<form *ngIf=\"step==1\">\n  <section>\n    <div class=\"inputRow\">\n      <label>\n        Audit Token\n      </label>\n      <input type=\"text\" name=\"auditToken\" value=\"\" [(ngModel)]=\"dto.auditToken\">\n    </div>\n  </section>\n  <section>\n    <header>\n      <h3>Params</h3>\n    </header>\n    <div class=\"inputRow\">\n      <label>\n        Min Duration\n      </label>\n      <input type=\"number\" name=\"minDuration\" value=\"\" [(ngModel)]=\"dto.params.minDuration\">\n      <!-- {{dto.params.minDuration}} -->\n    </div>\n    <div class=\"inputRow\">\n      <label>\n        Min Level\n      </label>\n      <input type=\"number\" name=\"minLevel\" checked=\"checked\" [(ngModel)]=\"dto.params.minLevel\">\n    </div>\n    <div class=\"inputRow\">\n      <label>\n        Use Cache\n      </label>\n      <input type=\"checkbox\" name=\"useCache\" [(ngModel)]=\"dto.params.useCache\">\n    </div>\n  </section>\n  <section>\n    <header>\n      <h3>Audio</h3>\n    </header>\n    <div class=\"inputRow\">\n      <label>\n        Select audio file\n      </label>\n      <input type=\"file\" value=\"\" accept=\"audio/*\" (change)=\"fileChange()\" #fileInput> <!-- [(ngModel)]=\"dto.image\" -->\n      <div class=\"videoWrapper\" *ngIf=\"dto.audio\">\n        <div class=\"cross\" (click)=\"dto.audio = undefined\">X</div>\n        <audio controls>\n          <source [type]=\"dataType\" [src]=\"'data:'+dataType+';base64,'+dto.audio\" />\n        </audio>\n      </div>\n    </div>\n  </section>\n  <section>\n    <div class=\"inputRow\">\n      <label>\n        Phrase ID\n      </label>\n      <input type=\"number\" min=\"1\" max=\"65535\" name=\"phraseID\" value=\"\" (change)=\"validatePhraseID()\" [(ngModel)]=\"dto.phraseId\">\n    </div>\n  </section>\n  <section>\n    <button type=\"button\" class=\"send\" (click)=\"send()\">Send Data</button>\n  </section>\n</form>"

/***/ }),

/***/ "./src/app/pages/extraction/text-dependent-voice/text-dependent-voice.component.sass":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/extraction/text-dependent-voice/text-dependent-voice.component.sass ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V4dHJhY3Rpb24vdGV4dC1kZXBlbmRlbnQtdm9pY2UvdGV4dC1kZXBlbmRlbnQtdm9pY2UuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/extraction/text-dependent-voice/text-dependent-voice.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/extraction/text-dependent-voice/text-dependent-voice.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: TextDependentVoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextDependentVoiceComponent", function() { return TextDependentVoiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_dataTypeObjects_textDependentVoice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dataTypeObjects/textDependentVoice */ "./src/app/dataTypeObjects/textDependentVoice.ts");
/* harmony import */ var src_app_Utils_UUID__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Utils/UUID */ "./src/app/Utils/UUID.ts");
/* harmony import */ var src_app_providers_extraction_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/providers/extraction.service */ "./src/app/providers/extraction.service.ts");





var TextDependentVoiceComponent = /** @class */ (function () {
    function TextDependentVoiceComponent(extractionSrv) {
        this.extractionSrv = extractionSrv;
        this.dto = new src_app_dataTypeObjects_textDependentVoice__WEBPACK_IMPORTED_MODULE_2__["TextDependentVoice"]();
    }
    TextDependentVoiceComponent.prototype.ngOnInit = function () {
        this.loading = false;
        this.step = 1;
        this.dto.auditToken = src_app_Utils_UUID__WEBPACK_IMPORTED_MODULE_3__["UUID"].create();
    };
    TextDependentVoiceComponent.prototype.fileChange = function () {
        var _this = this;
        this.loading = true;
        var reader = new FileReader();
        reader.onload = function () {
            _this.dto.audio = reader.result;
            var dataInfo = /data:([a-zA-Z0-9\/]+);/gi.exec(_this.dto.audio);
            if (dataInfo) {
                _this.dataType = dataInfo[1];
            }
            _this.dto.audio = _this.dto.audio.replace(/data:([a-zA-Z0-9]+)\/([a-zA-Z0-9]+);base64,/gi, '');
            _this.loading = false;
            _this.fileInput.nativeElement.value = '';
        };
        if (this.fileInput.nativeElement.files[0]) {
            reader.readAsDataURL(this.fileInput.nativeElement.files[0]);
        }
    };
    TextDependentVoiceComponent.prototype.send = function () {
        var _this = this;
        this.error = false;
        this.loading = true;
        this.extractionSrv.extractTextDependentVoice(this.dto).subscribe(function (resp) {
            console.log(resp);
            _this.loading = false;
            _this.step = 2;
            _this.response = resp;
            _this.jsonResponse = JSON.stringify(resp);
        }, function (err) {
            console.log(err);
            _this.error = true;
            _this.loading = false;
            _this.step = 2;
            _this.jsonResponse = JSON.stringify(err);
        });
        this.urlEndpoint = this.extractionSrv.getEndpoints().textDependentVoice;
    };
    TextDependentVoiceComponent.prototype.retry = function () {
        this.step = 1;
    };
    TextDependentVoiceComponent.prototype.copy = function () {
        try {
            navigator.clipboard.writeText(this.response.voice.template).then(function () {
                // alert('Copied A');
            });
        }
        catch (e) {
            // no tiene ssl
            // $(this).find('.copyRealText').select();
            var selection = document.getSelection();
            var range = document.createRange();
            range.selectNode(document.getElementById('templateResponse'));
            selection.removeAllRanges();
            selection.addRange(range);
            var result = document.execCommand('copy');
            // tampoco funcionó:
            if (!result) {
                alert('Can\'t copy (HTTPS/Chrome +43/Permisos).');
            }
            else {
                // alert('Copied B');
            }
        }
    };
    TextDependentVoiceComponent.prototype.validatePhraseID = function () {
        if (this.dto.phraseId > 65535) {
            this.dto.phraseId = 65535;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fileInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], TextDependentVoiceComponent.prototype, "fileInput", void 0);
    TextDependentVoiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-text-dependent-voice',
            template: __webpack_require__(/*! ./text-dependent-voice.component.html */ "./src/app/pages/extraction/text-dependent-voice/text-dependent-voice.component.html"),
            styles: [__webpack_require__(/*! ./text-dependent-voice.component.sass */ "./src/app/pages/extraction/text-dependent-voice/text-dependent-voice.component.sass"), __webpack_require__(/*! ../../../shared-styles/forms.scss */ "./src/app/shared-styles/forms.scss"), __webpack_require__(/*! ../../../shared-styles/playground-response.scss */ "./src/app/shared-styles/playground-response.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_providers_extraction_service__WEBPACK_IMPORTED_MODULE_4__["ExtractionService"]])
    ], TextDependentVoiceComponent);
    return TextDependentVoiceComponent;
}());



/***/ }),

/***/ "./src/app/pages/extraction/text-independent-voice/text-independent-voice.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/extraction/text-independent-voice/text-independent-voice.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header title=\"Extraction::text-independent-voice\"\n  subtitle=\"Extract text-independent voice biometric data (template) from a supplied audio\"></app-header>\n<app-loader [isLoading]=\"loading\"></app-loader>\n<section id=\"response\" *ngIf=\"step==2\">\n  <div class=\"url\"><span class=\"method\">POST</span> {{urlEndpoint}}</div>\n  <code [class.error]=\"error\">\n        {{jsonResponse}}\n      </code>\n  <div class=\"responses\" *ngIf=\"response\">\n    <div class=\"responseProcessed\">\n      <div class=\"dataBlock\">\n        <label>txID:</label>\n        <div class=\"dataContent\">\n          {{response.txId}}\n        </div>\n      </div>\n      <div class=\"dataBlock\">\n        <label>Status:</label>\n        <div class=\"dataContent\">\n          {{response.status}}\n        </div>\n      </div>\n      <div class=\"dataBlock\" *ngIf=\"response.voice\">\n        <label>Audio:</label>\n\n      </div>\n      <div class=\"dataBlock\" *ngIf=\"response.voice\">\n        <label>Template:</label>\n        <div class=\"copy\" (click)=\"copy()\"><img src=\"assets/copy.png\" /></div>\n        <div class=\"dataTemplate\" id=\"templateResponse\">\n          {{response.voice.template}}\n        </div>\n      </div>\n    </div>\n  </div>\n  <button type=\"button\" class=\"send\" (click)=\"retry()\">Retry</button>\n</section>\n<form *ngIf=\"step==1\">\n  <section>\n    <div class=\"inputRow\">\n      <label>\n        Audit Token\n      </label>\n      <input type=\"text\" name=\"auditToken\" value=\"\" [(ngModel)]=\"dto.auditToken\">\n    </div>\n  </section>\n  <section>\n    <header>\n      <h3>Params</h3>\n    </header>\n    <div class=\"inputRow\">\n      <label>\n        Min Duration\n      </label>\n      <input type=\"number\" name=\"minDuration\" [(ngModel)]=\"dto.params.minDuration\">\n      <!-- {{dto.params.minDuration}} -->\n    </div>\n    <div class=\"inputRow\">\n      <label>\n        Min Level\n      </label>\n      <input type=\"number\" name=\"minLevel\" [(ngModel)]=\"dto.params.minLevel\">\n    </div>\n    <div class=\"inputRow\">\n      <label>\n        Use Cache\n      </label>\n      <input type=\"checkbox\" name=\"useCache\" [(ngModel)]=\"dto.params.useCache\">\n    </div>\n  </section>\n  <section>\n    <header>\n      <h3>Audio</h3>\n    </header>\n    <div class=\"inputRow\">\n      <label>\n        Select audio file\n      </label>\n      <input type=\"file\" value=\"\" accept=\"audio/*\" (change)=\"fileChange()\" #fileInput> <!-- [(ngModel)]=\"dto.image\" -->\n      <div class=\"videoWrapper\" *ngIf=\"dto.audio\">\n        <div class=\"cross\" (click)=\"dto.audio = undefined\">X</div>\n        <audio controls>\n          <source [type]=\"dataType\" [src]=\"'data:'+dataType+';base64,'+dto.audio\" />\n        </audio>\n      </div>\n    </div>\n  </section>\n  <section>\n    <button type=\"button\" class=\"send\" (click)=\"send()\">Send Data</button>\n  </section>\n</form>"

/***/ }),

/***/ "./src/app/pages/extraction/text-independent-voice/text-independent-voice.component.sass":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/extraction/text-independent-voice/text-independent-voice.component.sass ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V4dHJhY3Rpb24vdGV4dC1pbmRlcGVuZGVudC12b2ljZS90ZXh0LWluZGVwZW5kZW50LXZvaWNlLmNvbXBvbmVudC5zYXNzIn0= */"

/***/ }),

/***/ "./src/app/pages/extraction/text-independent-voice/text-independent-voice.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/extraction/text-independent-voice/text-independent-voice.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: TextIndependentVoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextIndependentVoiceComponent", function() { return TextIndependentVoiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_dataTypeObjects_textIndependentVoice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dataTypeObjects/textIndependentVoice */ "./src/app/dataTypeObjects/textIndependentVoice.ts");
/* harmony import */ var src_app_Utils_UUID__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Utils/UUID */ "./src/app/Utils/UUID.ts");
/* harmony import */ var src_app_providers_extraction_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/providers/extraction.service */ "./src/app/providers/extraction.service.ts");





var TextIndependentVoiceComponent = /** @class */ (function () {
    function TextIndependentVoiceComponent(extractionSrv) {
        this.extractionSrv = extractionSrv;
        this.dto = new src_app_dataTypeObjects_textIndependentVoice__WEBPACK_IMPORTED_MODULE_2__["TextIndependentVoice"]();
    }
    TextIndependentVoiceComponent.prototype.ngOnInit = function () {
        this.loading = false;
        this.step = 1;
        this.dto.auditToken = src_app_Utils_UUID__WEBPACK_IMPORTED_MODULE_3__["UUID"].create();
    };
    TextIndependentVoiceComponent.prototype.fileChange = function () {
        var _this = this;
        this.loading = true;
        var reader = new FileReader();
        reader.onload = function () {
            _this.dto.audio = reader.result;
            var dataInfo = /data:([a-zA-Z0-9\/]+);/gi.exec(_this.dto.audio);
            if (dataInfo) {
                _this.dataType = dataInfo[1];
            }
            _this.dto.audio = _this.dto.audio.replace(/data:([a-zA-Z0-9]+)\/([a-zA-Z0-9]+);base64,/gi, '');
            _this.loading = false;
            _this.fileInput.nativeElement.value = '';
        };
        if (this.fileInput.nativeElement.files[0]) {
            reader.readAsDataURL(this.fileInput.nativeElement.files[0]);
        }
    };
    TextIndependentVoiceComponent.prototype.send = function () {
        var _this = this;
        this.error = false;
        this.loading = true;
        this.extractionSrv.extractTextIndependentVoice(this.dto).subscribe(function (resp) {
            console.log(resp);
            _this.loading = false;
            _this.step = 2;
            _this.response = resp;
            _this.jsonResponse = JSON.stringify(resp);
        }, function (err) {
            console.log(err);
            _this.error = true;
            _this.loading = false;
            _this.step = 2;
            _this.jsonResponse = JSON.stringify(err);
        });
        this.urlEndpoint = this.extractionSrv.getEndpoints().textIndependentVoice;
    };
    TextIndependentVoiceComponent.prototype.retry = function () {
        this.step = 1;
    };
    TextIndependentVoiceComponent.prototype.copy = function () {
        try {
            navigator.clipboard.writeText(this.response.voice.template).then(function () {
                // alert('Copied A');
            });
        }
        catch (e) {
            // no tiene ssl
            // $(this).find('.copyRealText').select();
            var selection = document.getSelection();
            var range = document.createRange();
            range.selectNode(document.getElementById('templateResponse'));
            selection.removeAllRanges();
            selection.addRange(range);
            var result = document.execCommand('copy');
            // tampoco funcionó:
            if (!result) {
                alert('Can\'t copy (HTTPS/Chrome +43/Permisos).');
            }
            else {
                // alert('Copied B');
            }
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fileInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], TextIndependentVoiceComponent.prototype, "fileInput", void 0);
    TextIndependentVoiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-text-independent-voice',
            template: __webpack_require__(/*! ./text-independent-voice.component.html */ "./src/app/pages/extraction/text-independent-voice/text-independent-voice.component.html"),
            styles: [__webpack_require__(/*! ./text-independent-voice.component.sass */ "./src/app/pages/extraction/text-independent-voice/text-independent-voice.component.sass"), __webpack_require__(/*! ../../../shared-styles/forms.scss */ "./src/app/shared-styles/forms.scss"), __webpack_require__(/*! ../../../shared-styles/playground-response.scss */ "./src/app/shared-styles/playground-response.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_providers_extraction_service__WEBPACK_IMPORTED_MODULE_4__["ExtractionService"]])
    ], TextIndependentVoiceComponent);
    return TextIndependentVoiceComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <h2>Playground <span>SOBIO</span></h2>\n</header>\n\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.sass":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.sass ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n  text-align: center;\n  font-family: helvetica;\n  color: #9e9c9c;\n  margin-top: 50px; }\n  h2 span {\n    color: #f07d00; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZHkvcmVwb3Mvc29iaW8vc3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxnQkFBZ0IsRUFBQTtFQUpwQjtJQU1RLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbImgyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6IGhlbHZldGljYTtcbiAgICBjb2xvcjogIzllOWM5YztcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIHNwYW4ge1xuICAgICAgICBjb2xvcjogI2YwN2QwMDsgfSB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.sass */ "./src/app/pages/home/home.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/matching/identify/identify.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/matching/identify/identify.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header title=\"MATCHING::IDENTIFY\"\n    subtitle=\"Performs an identification (1:N) of supplied biometric data against enrolled subjects (that match optionally supplied conditions)\">\n</app-header>\n<app-loader [isLoading]=\"loading\"></app-loader>\n\n<section id=\"response\" *ngIf=\"step==2\">\n    <div class=\"url\"><span class=\"method\">POST</span> {{urlEndpoint}}</div>\n    <code [class.error]=\"error\">\n        {{jsonResponse}}\n    </code>\n    <div class=\"responses\" *ngIf=\"response\">\n        <div class=\"responseProcessed\">\n            <div class=\"dataBlock\">\n                <label>TxId:</label>\n                <div class=\"dataContent\">\n                    {{response.txId}}\n                </div>\n            </div>\n            <div class=\"dataBlock\">\n                <label>False acceptance probability:</label>\n                <div class=\"dataContent\">\n                    <app-gauge [percent]=\"(response.faP * 100).toFixed(2)\" color=\"#eeab00\"></app-gauge>\n                </div>\n            </div>\n            <div class=\"dataBlock\">\n                <label>Confidence:</label>\n                <div class=\"dataContent\">\n                    <app-gauge [percent]=\"(response.confidence * 100).toFixed(2)\"></app-gauge>\n                </div>\n            </div>\n            <div class=\"dataBlock\">\n                <label>Subject ID:</label>\n                <div class=\"dataContent\">\n                    {{response.subjectId}}\n                </div>\n            </div>\n            <div class=\"dataBlock\">\n                <label>Score:</label>\n                <div class=\"dataContent\">\n                    {{response.score}}\n                </div>\n            </div>\n            <div class=\"dataBlock\">\n                <label>Exception:</label>\n                <div class=\"dataContent\">\n                    <b *ngIf=\"response.exception\">YES</b>\n                    <b *ngIf=\"!response.exception\">NO</b>\n                </div>\n            </div>\n            <div class=\"dataBlock\">\n                <label>Status:</label>\n                <div class=\"dataContent\">\n                    {{response.status}}\n                </div>\n            </div>\n        </div>\n    </div>\n    <button type=\"button\" class=\"send\" (click)=\"step = 1\">Retry</button>\n</section>\n\n<form *ngIf=\"step==1\">\n    <section>\n        <div class=\"inputRow\">\n            <label>\n                Audit Token\n            </label>\n            <input type=\"text\" name=\"auditToken\" [(ngModel)]=\"dto.auditToken\">\n        </div>\n    </section>\n    <section>\n        <header>\n            <h3>Bio Info</h3>\n        </header>\n        <section>\n            <header>\n                <h4>Composite Finger Prints</h4>\n                <button class=\"rightButton\" (click)=\"addCompositeFinger()\">+</button>\n            </header>\n            <!-- ESTO ES UN ARREGLO -->\n            <div class=\"composedBlock\" *ngFor=\"let item of dto.bioInfo.compositeFingerPrints; let idx = index;\">\n                <button class=\"rightButton red\" (click)=\"removeCompositeFinger(idx)\">-</button>\n                <div class=\"inputRow\">\n                    <label>\n                        Finger\n                    </label>\n                    <input type=\"text\" name=\"bi1_dedo_composite{{idx}}\"\n                        [(ngModel)]=\"dto.bioInfo.compositeFingerPrints[idx].dedo\">\n                    <!-- <select name=\"bi1_dedo\">\n                <option value=\"RIGHT_THUMB\">Right Thumb</option>\n              </select> -->\n                </div>\n                <!-- IMAGES [0] -->\n                <div class=\"inputRow\">\n                    <label>\n                        Source\n                    </label>\n                    <select name=\"bi1_source_composite{{idx}}\"\n                        [(ngModel)]=\"dto.bioInfo.compositeFingerPrints[idx].source\">\n                        <option>LIVE_FINGERPRINT</option>\n                        <option>SCANNED_FINGERPRINT_IMAGE</option>\n                        <option>UNKNOWN</option>\n                    </select>\n                    <!-- <select name=\"bi1_source\">\n                <option value=\"LIVE_FINGERPRINT\">Live Fingerprint</option>\n              </select> -->\n                </div>\n                <div class=\"inputRow\">\n                    <label>\n                        Template\n                    </label>\n                    <textarea name=\"bi1_template_composite{{idx}}\"\n                        [(ngModel)]=\"dto.bioInfo.compositeFingerPrints[idx].template\"></textarea>\n                </div>\n            </div>\n        </section>\n        <section>\n            <header>\n                <h4>Faces</h4>\n                <button class=\"rightButton\" (click)=\"addFace()\">+</button>\n            </header>\n            <div class=\"composedBlock\" *ngFor=\"let item of dto.bioInfo.faces; let idx = index;\">\n                <button class=\"rightButton red\" (click)=\"removeFace(idx)\">-</button>\n                <div class=\"inputRow\">\n                    <label>\n                        Select image file\n                    </label>\n                    <input type=\"file\" accept=\"image/*\" name=\"bi1_image_faces{{idx}}\"\n                        (change)=\"bi1_image_faces_change(idx)\" #bi1_image_faces>\n                </div>\n                <div class=\"inputRow\">\n                    <label>\n                        Template\n                    </label>\n                    <textarea name=\"bi1_template_faces{{idx}}\" [(ngModel)]=\"dto.bioInfo.faces[idx].template\"></textarea>\n                </div>\n            </div>\n        </section>\n        <section>\n            <header>\n                <h4>Finger Prints</h4>\n                <button class=\"rightButton\" (click)=\"addFPrint()\">+</button>\n            </header>\n            <div class=\"composedBlock\" *ngFor=\"let item of dto.bioInfo.fingerPrints; let idx = index;\">\n                <div class=\"inputRow\">\n                    <button class=\"rightButton red\" (click)=\"removeFPrint(idx)\">-</button>\n                    <label>\n                        Template Format\n                    </label>\n                    <input type=\"text\" name=\"bi1_template_format_fp{{idx}}\"\n                        [(ngModel)]=\"dto.bioInfo.fingerPrints[idx].formatoTemplate\">\n                </div>\n                <div class=\"inputRow\">\n                    <label>\n                        Select image file\n                    </label>\n                    <input type=\"file\" accept=\"image/*\" (change)=\"bi1_image_fprints_change(idx)\" #bi1_image_fprints>\n                </div>\n                <div class=\"inputRow\">\n                    <label>\n                        Image Source\n                    </label>\n                    <select name=\"bi1_imagesource_fp{{idx}}\" [(ngModel)]=\"dto.bioInfo.fingerPrints[idx].imageSource\">\n                        <option>LIVE_FINGERPRINT</option>\n                        <option>SCANNED_FINGERPRINT_IMAGE</option>\n                        <option>UNKNOWN</option>\n                    </select>\n                </div>\n                <div class=\"inputRow\">\n                    <label>\n                        Position\n                    </label>\n                    <select name=\"bi1_position_fp{{idx}}\" [(ngModel)]=\"dto.bioInfo.fingerPrints[idx].position\">\n                        <option>RIGHT_THUMB</option>\n                        <option>LEFT_THUMB</option>\n                        <option>RIGHT_INDEX_FINGER</option>\n                        <option>LEFT_INDEX_FINGER</option>\n                        <option>RIGHT_MIDDLE_FINGER</option>\n                        <option>LEFT_MIDDLE_FINGER</option>\n                        <option>RIGHT_RING_FINGER</option>\n                        <option>LEFT_RING_FINGER</option>\n                        <option>RIGHT_LITTLE_FINGER</option>\n                        <option>LEFT_LITTLE_FINGER</option>\n                        <option>UNKNOWN</option>\n                    </select>\n                </div>\n                <div class=\"inputRow\">\n                    <label>\n                        Template\n                    </label>\n                    <textarea name=\"bi1_template_fp{{idx}}\"\n                        [(ngModel)]=\"dto.bioInfo.fingerPrints[idx].template\"></textarea>\n                </div>\n            </div>\n        </section>\n        <section>\n            <header>\n                <h4>Text Dependent Voices</h4>\n                <button class=\"rightButton\" (click)=\"addTDV()\">+</button>\n            </header>\n            <div class=\"composedBlock\" *ngFor=\"let item of dto.bioInfo.textDependentVoices; let idx = index;\">\n                <button class=\"rightButton red\" (click)=\"removeTDV(idx)\">-</button>\n                <div class=\"inputRow\">\n                    <label>\n                        Select audio file\n                    </label>\n                    <input type=\"file\" accept=\"audio/*\" (change)=\"bi1_audio_tdv_change(idx)\" #bi1_audio_tdv>\n                </div>\n                <div class=\"inputRow\">\n                    <label>\n                        Phase ID\n                    </label>\n                    <input type=\"number\" name=\"bi1_phaseid_tdv{{idx}}\"\n                        [(ngModel)]=\"dto.bioInfo.textDependentVoices[idx].phraseId\">\n                </div>\n                <div class=\"inputRow\">\n                    <label>\n                        Template\n                    </label>\n                    <textarea name=\"bi1_template_tdv{{idx}}\"\n                        [(ngModel)]=\"dto.bioInfo.textDependentVoices[idx].template\"></textarea>\n                </div>\n            </div>\n        </section>\n        <section>\n            <header>\n                <h4>Text Independent Voices</h4>\n            </header>\n            <div class=\"inputRow\">\n                <label>\n                    Select audio file\n                </label>\n                <input type=\"file\" value=\"\" accept=\"audio/*\" (change)=\"bi1_audio_tiv_change(idx)\" #bi1_audio_tiv>\n            </div>\n            <div class=\"inputRow\">\n                <label>\n                    Template\n                </label>\n                <textarea name=\"bi1_template_tiv\" [(ngModel)]=\"dto.bioInfo.textDependentVoices.template\"></textarea>\n            </div>\n        </section>\n    </section>\n    <section>\n        <header>\n            <h4>Params</h4>\n        </header>\n        <div class=\"inputRow\">\n            <label>\n                I1\n            </label>\n            <input type=\"number\" name=\"dupl_i1\" [(ngModel)]=\"dto.params.conditions.i1\">\n        </div>\n        <div class=\"inputRow\">\n            <label>\n                I2\n            </label>\n            <input type=\"number\" name=\"dupl_i2\" [(ngModel)]=\"dto.params.conditions.i2\">\n        </div>\n        <div class=\"inputRow\">\n            <label>\n                I3\n            </label>\n            <input type=\"number\" name=\"dupl_i3\" [(ngModel)]=\"dto.params.conditions.i3\">\n        </div>\n        <div class=\"inputRow\">\n            <label>\n                I4\n            </label>\n            <input type=\"number\" name=\"dupl_i4\" [(ngModel)]=\"dto.params.conditions.i4\">\n        </div>\n        <div class=\"inputRow\">\n            <label>\n                I5\n            </label>\n            <input type=\"number\" name=\"dupl_i5\" [(ngModel)]=\"dto.params.conditions.i5\">\n        </div>\n        <div class=\"inputRow\">\n            <label>\n                id\n            </label>\n            <input type=\"text\" name=\"dupl_id\" [(ngModel)]=\"dto.params.conditions.id\">\n        </div>\n        <div class=\"inputRow\">\n            <label>\n                id In\n            </label>\n            <input type=\"text\" name=\"dupl_idIn\" [(ngModel)]=\"dto.params.conditions.idIn\">\n        </div>\n        <div class=\"inputRow\">\n            <label>\n                id Like\n            </label>\n            <input type=\"text\" name=\"dupl_idLike\" [(ngModel)]=\"dto.params.conditions.idLike\">\n        </div>\n        <div class=\"inputRow\">\n            <label>\n                id No\n            </label>\n            <input type=\"text\" name=\"dupl_idNo\" [(ngModel)]=\"dto.params.conditions.id\">\n        </div>\n        <div class=\"inputRow\">\n            <label>\n                s1\n            </label>\n            <input type=\"text\" name=\"dupl_s1\" [(ngModel)]=\"dto.params.conditions.s1\">\n        </div>\n        <div class=\"inputRow\">\n            <label>\n                s2\n            </label>\n            <input type=\"text\" name=\"dupl_s2\" [(ngModel)]=\"dto.params.conditions.s2\">\n        </div>\n        <div class=\"inputRow\">\n            <label>\n                s3\n            </label>\n            <input type=\"text\" name=\"dupl_s3\" [(ngModel)]=\"dto.params.conditions.s3\">\n        </div>\n        <div class=\"inputRow\">\n            <label>\n                s4\n            </label>\n            <input type=\"text\" name=\"dupl_s4\" [(ngModel)]=\"dto.params.conditions.s4\">\n        </div>\n        <div class=\"inputRow\">\n            <label>\n                s5\n            </label>\n            <input type=\"text\" name=\"dupl_s5\" [(ngModel)]=\"dto.params.conditions.s5\">\n        </div>\n        <div class=\"inputRow\">\n            <label>\n                Confidence\n            </label>\n            <app-gauge [percent]=\"(1000 - farCalculated) / 10\"></app-gauge>\n        </div>\n        <div class=\"inputRow\">\n            <label>\n                Far\n            </label>\n            <input name=\"far\" [(ngModel)]=\"farCalculated\" type=\"range\" min=\"1\" max=\"999\" />\n            <app-gauge [percent]=\"farCalculated / 10\" color=\"#eeab00\"></app-gauge>\n        </div>\n        <section>\n            <header>\n                <h4>Finger Print Matching Params</h4>\n            </header>\n            <div class=\"inputRow\">\n                <label>\n                    Max Rotation\n                </label>\n                <input name=\"maxRotation\" type=\"range\" min=\"0\" max=\"180\"\n                    [(ngModel)]=\"dto.params.fingerPrintMatchingParams.maxRotation\" />\n                {{dto.params.fingerPrintMatchingParams.maxRotation}}\n            </div>\n            <div class=\"inputRow\">\n                <label>\n                    Use Only Ansi378\n                </label>\n                <input type=\"checkbox\" [(ngModel)]=\"dto.params.fingerPrintMatchingParams.useOnlyAnsi378\"\n                    name=\"useOnlyAnsi378\" />\n            </div>\n        </section>\n        <div class=\"inputRow\">\n            <label>\n                Global Search With Conditions\n            </label>\n            <input type=\"checkbox\" [(ngModel)]=\"dto.params.globalSearchWithConditions\"\n                name=\"globalSearchWithConditions\" />\n        </div>\n    </section>\n    <section>\n        <button type=\"button\" class=\"send\" (click)=\"send()\">Send Data</button>\n    </section>\n</form>"

/***/ }),

/***/ "./src/app/pages/matching/identify/identify.component.sass":
/*!*****************************************************************!*\
  !*** ./src/app/pages/matching/identify/identify.component.sass ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hdGNoaW5nL2lkZW50aWZ5L2lkZW50aWZ5LmNvbXBvbmVudC5zYXNzIn0= */"

/***/ }),

/***/ "./src/app/pages/matching/identify/identify.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/matching/identify/identify.component.ts ***!
  \***************************************************************/
/*! exports provided: IdentifyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentifyComponent", function() { return IdentifyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Utils_UUID__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Utils/UUID */ "./src/app/Utils/UUID.ts");
/* harmony import */ var src_app_dataTypeObjects_identify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dataTypeObjects/identify */ "./src/app/dataTypeObjects/identify.ts");
/* harmony import */ var src_app_dataTypeObjects_verifyT2t__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dataTypeObjects/verifyT2t */ "./src/app/dataTypeObjects/verifyT2t.ts");
/* harmony import */ var src_app_providers_matching_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/providers/matching.service */ "./src/app/providers/matching.service.ts");






var IdentifyComponent = /** @class */ (function () {
    function IdentifyComponent(matching) {
        this.matching = matching;
        this.dto = new src_app_dataTypeObjects_identify__WEBPACK_IMPORTED_MODULE_3__["Identify"]();
        this.step = 1;
        this.loading = false;
    }
    IdentifyComponent.prototype.ngOnInit = function () {
        this.dto.auditToken = src_app_Utils_UUID__WEBPACK_IMPORTED_MODULE_2__["UUID"].create();
        this.farCalculated = this.dto.params.far;
    };
    IdentifyComponent.prototype.addCompositeFinger = function () {
        this.dto.bioInfo.compositeFingerPrints.push(new src_app_dataTypeObjects_verifyT2t__WEBPACK_IMPORTED_MODULE_4__["CompositeFingerPrints"]());
    };
    IdentifyComponent.prototype.removeCompositeFinger = function (idx) {
        this.dto.bioInfo.compositeFingerPrints.splice(idx, 1);
    };
    IdentifyComponent.prototype.addFace = function () {
        this.dto.bioInfo.faces.push(new src_app_dataTypeObjects_verifyT2t__WEBPACK_IMPORTED_MODULE_4__["Faces"]());
    };
    IdentifyComponent.prototype.removeFace = function (idx) {
        this.dto.bioInfo.faces.splice(idx, 1);
    };
    IdentifyComponent.prototype.addFPrint = function () {
        this.dto.bioInfo.fingerPrints.push(new src_app_dataTypeObjects_verifyT2t__WEBPACK_IMPORTED_MODULE_4__["FingerPrints"]());
    };
    IdentifyComponent.prototype.removeFPrint = function (idx) {
        this.dto.bioInfo.fingerPrints.splice(idx, 1);
    };
    IdentifyComponent.prototype.addTDV = function () {
        this.dto.bioInfo.textDependentVoices.push(new src_app_dataTypeObjects_verifyT2t__WEBPACK_IMPORTED_MODULE_4__["TextDependentVoices"]());
    };
    IdentifyComponent.prototype.removeTDV = function (idx) {
        this.dto.bioInfo.textDependentVoices.splice(idx, 1);
    };
    IdentifyComponent.prototype.bi1_image_faces_change = function (idx) {
        var _this = this;
        this.loading = true;
        var reader = new FileReader();
        var item = this.bi1ImageFaces.toArray()[idx];
        reader.onload = function () {
            var image = reader.result;
            _this.dto.bioInfo.faces[idx].image = image.replace(/data:([a-zA-Z0-9]+)\/([a-zA-Z0-9]+);base64,/gi, '');
            _this.loading = false;
        };
        if (item.nativeElement.files[0]) {
            reader.readAsDataURL(item.nativeElement.files[0]);
        }
    };
    IdentifyComponent.prototype.bi1_image_fprints_change = function (idx) {
        var _this = this;
        this.loading = true;
        var reader = new FileReader();
        var item = this.bi1ImageFPrints.toArray()[idx];
        reader.onload = function () {
            var image = reader.result;
            _this.dto.bioInfo.fingerPrints[idx].image = image.replace(/data:([a-zA-Z0-9]+)\/([a-zA-Z0-9]+);base64,/gi, '');
            _this.loading = false;
        };
        if (item.nativeElement.files[0]) {
            reader.readAsDataURL(item.nativeElement.files[0]);
        }
    };
    IdentifyComponent.prototype.bi1_audio_tdv_change = function (idx) {
        var _this = this;
        this.loading = true;
        var reader = new FileReader();
        var item = this.bi1AudioTdv.toArray()[idx];
        reader.onload = function () {
            var audio = reader.result;
            _this.dto.bioInfo.textDependentVoices[idx].audio = audio.replace(/data:([a-zA-Z0-9]+)\/([a-zA-Z0-9]+);base64,/gi, '');
            _this.loading = false;
        };
        if (item.nativeElement.files[0]) {
            reader.readAsDataURL(item.nativeElement.files[0]);
        }
    };
    IdentifyComponent.prototype.bi1_audio_tiv_change = function (idx) {
        var _this = this;
        this.loading = true;
        var reader = new FileReader();
        var item = this.bi1AudioTiv.toArray()[idx];
        reader.onload = function () {
            var audio = reader.result;
            _this.dto.bioInfo.textIndependentVoice[idx].audio = audio.replace(/data:([a-zA-Z0-9]+)\/([a-zA-Z0-9]+);base64,/gi, '');
            _this.loading = false;
        };
        if (item.nativeElement.files[0]) {
            reader.readAsDataURL(item.nativeElement.files[0]);
        }
    };
    IdentifyComponent.prototype.send = function () {
        var _this = this;
        this.error = false;
        this.loading = true;
        this.dto.params.far = this.farCalculated / 1000;
        this.matching.identify(this.dto).subscribe(function (resp) {
            console.log(resp);
            _this.loading = false;
            _this.step = 2;
            _this.response = resp;
            _this.jsonResponse = JSON.stringify(resp);
        }, function (err) {
            console.log(err);
            _this.error = true;
            _this.loading = false;
            _this.step = 2;
            _this.jsonResponse = JSON.stringify(err);
        });
        this.urlEndpoint = this.matching.getEndpoints().identify;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('bi1_image_faces'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], IdentifyComponent.prototype, "bi1ImageFaces", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('bi1_image_fprints'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], IdentifyComponent.prototype, "bi1ImageFPrints", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('bi1_audio_tdv'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], IdentifyComponent.prototype, "bi1AudioTdv", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('bi1_audio_tiv'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], IdentifyComponent.prototype, "bi1AudioTiv", void 0);
    IdentifyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-identify',
            template: __webpack_require__(/*! ./identify.component.html */ "./src/app/pages/matching/identify/identify.component.html"),
            styles: [__webpack_require__(/*! ./identify.component.sass */ "./src/app/pages/matching/identify/identify.component.sass"), __webpack_require__(/*! ../../../shared-styles/forms.scss */ "./src/app/shared-styles/forms.scss"), __webpack_require__(/*! ../../../shared-styles/playground-response.scss */ "./src/app/shared-styles/playground-response.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_providers_matching_service__WEBPACK_IMPORTED_MODULE_5__["MatchingService"]])
    ], IdentifyComponent);
    return IdentifyComponent;
}());



/***/ }),

/***/ "./src/app/pages/matching/verify-t2t/verify-t2t.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/pages/matching/verify-t2t/verify-t2t.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header title=\"MATCHING::VERIFY-T2T\" subtitle=\"Verify (1:1) of two supplied biometric subjects\"></app-header>\n<app-loader [isLoading]=\"loading\"></app-loader>\n<section id=\"response\" *ngIf=\"step==2\">\n  <div class=\"url\"><span class=\"method\">POST</span> {{urlEndpoint}}</div>\n  <code [class.error]=\"error\">\n      {{jsonResponse}}\n    </code>\n  <div class=\"responses\" *ngIf=\"response\">\n    <div class=\"responseProcessed\">\n      <div class=\"dataBlock\">\n        <label>faP:</label>\n        <div class=\"dataContent\">\n          {{response.faP}}\n        </div>\n      </div>\n      <div class=\"dataBlock\">\n        <label>Score:</label>\n        <div class=\"dataContent\">\n          {{response.score}}\n        </div>\n      </div>\n      <div class=\"dataBlock\">\n        <label>Status:</label>\n        {{response.status}}\n      </div>\n      <div class=\"dataBlock\">\n        <label>txID:</label>\n        <div class=\"dataContent\">\n          {{response.txId}}\n        </div>\n      </div>\n      <div class=\"dataBlock\">\n        <label>False acceptance probability:</label>\n        <div class=\"dataContent\">\n          <app-gauge [percent]=\"(response.faP * 100).toFixed(2)\" color=\"#eeab00\"></app-gauge>\n        </div>\n      </div>\n      <div class=\"dataBlock\">\n        <label>Confidence:</label>\n        <div class=\"dataContent\">\n          <app-gauge [percent]=\"(response.confidence * 100).toFixed(2)\"></app-gauge>\n        </div>\n      </div>\n      <div class=\"dataBlock\">\n        <label>score:</label>\n        <div class=\"dataContent\">\n          {{response.score}}\n        </div>\n      </div>\n    </div>\n  </div>\n  <button type=\"button\" class=\"send\" (click)=\"retry()\">Retry</button>\n</section>\n<form *ngIf=\"step==1\">\n  <section>\n    <div class=\"inputRow\">\n      <label>\n        Audit Token\n      </label>\n      <input type=\"text\" name=\"auditToken\" [(ngModel)]=\"dto.auditToken\">\n    </div>\n  </section>\n  <!-- BIO INFO 1 -->\n  <section>\n    <header>\n      <h3>Bio Info 1</h3>\n    </header>\n    <section>\n      <header>\n        <h4>Composite Finger Prints</h4>\n        <button class=\"rightButton\" (click)=\"addCompositeFinger()\">+</button>\n      </header>\n      <!-- ESTO ES UN ARREGLO -->\n      <div class=\"composedBlock\" *ngFor=\"let item of dto.bioInfo1.compositeFingerPrints; let idx = index;\">\n        <button class=\"rightButton red\" (click)=\"removeCompositeFinger(idx)\">-</button>\n        <div class=\"inputRow\">\n          <label>\n            Finger\n          </label>\n          <input type=\"text\" name=\"bi1_dedo_composite{{idx}}\"\n            [(ngModel)]=\"dto.bioInfo1.compositeFingerPrints[idx].dedo\">\n          <!-- <select name=\"bi1_dedo\">\n          <option value=\"RIGHT_THUMB\">Right Thumb</option>\n        </select> -->\n        </div>\n        <!-- IMAGES [0] -->\n        <div class=\"inputRow\">\n          <label>\n            Source\n          </label>\n          <select name=\"bi1_source_composite{{idx}}\" [(ngModel)]=\"dto.bioInfo1.compositeFingerPrints[idx].source\">\n            <option>LIVE_FINGERPRINT</option>\n            <option>SCANNED_FINGERPRINT_IMAGE</option>\n            <option>UNKNOWN</option>\n          </select>\n          <!-- <select name=\"bi1_source\">\n          <option value=\"LIVE_FINGERPRINT\">Live Fingerprint</option>\n        </select> -->\n        </div>\n        <div class=\"inputRow\">\n          <label>\n            Template\n          </label>\n          <textarea name=\"bi1_template_composite{{idx}}\"\n            [(ngModel)]=\"dto.bioInfo1.compositeFingerPrints[idx].template\"></textarea>\n        </div>\n      </div>\n    </section>\n    <section>\n      <header>\n        <h4>Faces</h4>\n        <button class=\"rightButton\" (click)=\"addFace()\">+</button>\n      </header>\n      <div class=\"composedBlock\" *ngFor=\"let item of dto.bioInfo1.faces; let idx = index;\">\n        <button class=\"rightButton red\" (click)=\"removeFace(idx)\">-</button>\n        <div class=\"inputRow\">\n          <label>\n            Select image file\n          </label>\n          <input type=\"file\" accept=\"image/*\" (change)=\"bi1_image_faces_change(idx)\" #bi1_image_faces>\n        </div>\n        <div class=\"inputRow\">\n          <label>\n            Template\n          </label>\n          <textarea name=\"bi1_template_faces{{idx}}\" [(ngModel)]=\"dto.bioInfo1.faces[idx].template\"></textarea>\n        </div>\n      </div>\n    </section>\n    <section>\n      <header>\n        <h4>Finger Prints</h4>\n        <button class=\"rightButton\" (click)=\"addFPrint()\">+</button>\n      </header>\n      <div class=\"composedBlock\" *ngFor=\"let item of dto.bioInfo1.fingerPrints; let idx = index;\">\n        <div class=\"inputRow\">\n          <button class=\"rightButton red\" (click)=\"removeFPrint(idx)\">-</button>\n          <label>\n            Template Format\n          </label>\n          <input type=\"text\" name=\"bi1_template_format_fp{{idx}}\"\n            [(ngModel)]=\"dto.bioInfo1.fingerPrints[idx].formatoTemplate\">\n        </div>\n        <div class=\"inputRow\">\n          <label>\n            Select image file\n          </label>\n          <input type=\"file\" accept=\"image/*\" (change)=\"bi1_image_fprints_change(idx)\" #bi1_image_fprints>\n        </div>\n        <div class=\"inputRow\">\n          <label>\n            Image Source\n          </label>\n          <select name=\"bi1_imagesource_fp{{idx}}\" [(ngModel)]=\"dto.bioInfo1.fingerPrints[idx].imageSource\">\n            <option>LIVE_FINGERPRINT</option>\n            <option>SCANNED_FINGERPRINT_IMAGE</option>\n            <option>UNKNOWN</option>\n          </select>\n        </div>\n        <div class=\"inputRow\">\n          <label>\n            Position\n          </label>\n          <select name=\"bi1_position_fp{{idx}}\" [(ngModel)]=\"dto.bioInfo1.fingerPrints[idx].position\">\n            <option>RIGHT_THUMB</option>\n            <option>LEFT_THUMB</option>\n            <option>RIGHT_INDEX_FINGER</option>\n            <option>LEFT_INDEX_FINGER</option>\n            <option>RIGHT_MIDDLE_FINGER</option>\n            <option>LEFT_MIDDLE_FINGER</option>\n            <option>RIGHT_RING_FINGER</option>\n            <option>LEFT_RING_FINGER</option>\n            <option>RIGHT_LITTLE_FINGER</option>\n            <option>LEFT_LITTLE_FINGER</option>\n            <option>UNKNOWN</option>\n          </select>\n        </div>\n        <div class=\"inputRow\">\n          <label>\n            Template\n          </label>\n          <textarea name=\"bi1_template_fp{{idx}}\" [(ngModel)]=\"dto.bioInfo1.fingerPrints[idx].template\"></textarea>\n        </div>\n      </div>\n    </section>\n    <section>\n      <header>\n        <h4>Text Dependent Voices</h4>\n        <button class=\"rightButton\" (click)=\"addTDV()\">+</button>\n      </header>\n      <div class=\"composedBlock\" *ngFor=\"let item of dto.bioInfo1.textDependentVoices; let idx = index;\">\n        <button class=\"rightButton red\" (click)=\"removeTDV(idx)\">-</button>\n        <div class=\"inputRow\">\n          <label>\n            Select audio file\n          </label>\n          <input type=\"file\" accept=\"audio/*\" (change)=\"bi1_audio_tdv_change(idx)\" #bi1_audio_tdv>\n        </div>\n        <div class=\"inputRow\">\n          <label>\n            Phase ID\n          </label>\n          <input type=\"number\" name=\"bi1_phaseid_tdv\" [(ngModel)]=\"dto.bioInfo1.textDependentVoices[idx].phraseId\">\n        </div>\n        <div class=\"inputRow\">\n          <label>\n            Template\n          </label>\n          <textarea name=\"bi1_template_tdv\" [(ngModel)]=\"dto.bioInfo1.textDependentVoices[idx].template\"></textarea>\n        </div>\n      </div>\n    </section>\n    <section>\n      <header>\n        <h4>Text Independent Voices</h4>\n      </header>\n      <div class=\"inputRow\">\n        <label>\n          Select audio file\n        </label>\n        <input type=\"file\" value=\"\" accept=\"audio/*\" (change)=\"bi1_audio_tiv_change(idx)\" #bi1_audio_tiv>\n      </div>\n      <div class=\"inputRow\">\n        <label>\n          Template\n        </label>\n        <textarea name=\"bi1_template_tiv\" [(ngModel)]=\"dto.bioInfo1.textDependentVoices.template\"></textarea>\n      </div>\n    </section>\n  </section>\n\n  <!-- BIO INFO 2 -->\n  <section>\n    <header>\n      <h3>Bio Info 2</h3>\n    </header>\n    <section>\n      <header>\n        <h4>Composite Finger Prints</h4>\n        <button class=\"rightButton\" (click)=\"addCompositeFinger2()\">+</button>\n      </header>\n      <!-- ESTO ES UN ARREGLO -->\n      <div class=\"composedBlock\" *ngFor=\"let item of dto.bioInfo2.compositeFingerPrints; let idx = index;\">\n        <button class=\"rightButton red\" (click)=\"removeCompositeFinger2(idx)\">-</button>\n        <div class=\"inputRow\">\n          <label>\n            Finger\n          </label>\n          <input type=\"text\" name=\"bi2_dedo_composite{{idx}}\"\n            [(ngModel)]=\"dto.bioInfo2.compositeFingerPrints[idx].dedo\">\n          <!-- <select name=\"bi1_dedo\">\n            <option value=\"RIGHT_THUMB\">Right Thumb</option>\n          </select> -->\n        </div>\n        <!-- IMAGES [0] -->\n        <div class=\"inputRow\">\n          <label>\n            Source\n          </label>\n          <select name=\"bi2_source_composite{{idx}}\" [(ngModel)]=\"dto.bioInfo2.compositeFingerPrints[idx].source\">\n            <option>LIVE_FINGERPRINT</option>\n            <option>SCANNED_FINGERPRINT_IMAGE</option>\n            <option>UNKNOWN</option>\n          </select>\n          <!-- <select name=\"bi1_source\">\n            <option value=\"LIVE_FINGERPRINT\">Live Fingerprint</option>\n          </select> -->\n        </div>\n        <div class=\"inputRow\">\n          <label>\n            Template\n          </label>\n          <textarea name=\"bi2_template_composite{{idx}}\"\n            [(ngModel)]=\"dto.bioInfo2.compositeFingerPrints[idx].template\"></textarea>\n        </div>\n      </div>\n    </section>\n    <section>\n      <header>\n        <h4>Faces</h4>\n        <button class=\"rightButton\" (click)=\"addFace2()\">+</button>\n      </header>\n      <div class=\"composedBlock\" *ngFor=\"let item of dto.bioInfo2.faces; let idx = index;\">\n        <button class=\"rightButton red\" (click)=\"removeFace2(idx)\">-</button>\n        <div class=\"inputRow\">\n          <label>\n            Select image file\n          </label>\n          <input type=\"file\" accept=\"image/*\" (change)=\"bi2_image_faces_change(idx)\" #bi2_image_faces>\n        </div>\n        <div class=\"inputRow\">\n          <label>\n            Template\n          </label>\n          <textarea name=\"bi2_template_faces{{idx}}\" [(ngModel)]=\"dto.bioInfo2.faces[idx].template\"></textarea>\n        </div>\n      </div>\n    </section>\n    <section>\n      <header>\n        <h4>Finger Prints</h4>\n        <button class=\"rightButton\" (click)=\"addFPrint2()\">+</button>\n      </header>\n      <div class=\"composedBlock\" *ngFor=\"let item of dto.bioInfo2.fingerPrints; let idx = index;\">\n        <div class=\"inputRow\">\n          <button class=\"rightButton red\" (click)=\"removeFPrint2(idx)\">-</button>\n          <label>\n            Template Format\n          </label>\n          <input type=\"text\" name=\"bi2_template_format_fp{{idx}}\"\n            [(ngModel)]=\"dto.bioInfo2.fingerPrints[idx].formatoTemplate\">\n        </div>\n        <div class=\"inputRow\">\n          <label>\n            Select image file\n          </label>\n          <input type=\"file\" accept=\"image/*\" (change)=\"bi2_image_fprints_change(idx)\" #bi2_image_fprints>\n        </div>\n        <div class=\"inputRow\">\n          <label>\n            Image Source\n          </label>\n          <select name=\"bi2_imagesource_fp{{idx}}\" [(ngModel)]=\"dto.bioInfo2.fingerPrints[idx].imageSource\">\n            <option>LIVE_FINGERPRINT</option>\n            <option>SCANNED_FINGERPRINT_IMAGE</option>\n            <option>UNKNOWN</option>\n          </select>\n        </div>\n        <div class=\"inputRow\">\n          <label>\n            Position\n          </label>\n          <select name=\"bi2_position_fp{{idx}}\" [(ngModel)]=\"dto.bioInfo2.fingerPrints[idx].position\">\n            <option>RIGHT_THUMB</option>\n            <option>LEFT_THUMB</option>\n            <option>RIGHT_INDEX_FINGER</option>\n            <option>LEFT_INDEX_FINGER</option>\n            <option>RIGHT_MIDDLE_FINGER</option>\n            <option>LEFT_MIDDLE_FINGER</option>\n            <option>RIGHT_RING_FINGER</option>\n            <option>LEFT_RING_FINGER</option>\n            <option>RIGHT_LITTLE_FINGER</option>\n            <option>LEFT_LITTLE_FINGER</option>\n            <option>UNKNOWN</option>\n          </select>\n        </div>\n        <div class=\"inputRow\">\n          <label>\n            Template\n          </label>\n          <textarea name=\"bi2_template_fp{{idx}}\" [(ngModel)]=\"dto.bioInfo2.fingerPrints[idx].template\"></textarea>\n        </div>\n      </div>\n    </section>\n    <section>\n      <header>\n        <h4>Text Dependent Voices</h4>\n        <button class=\"rightButton\" (click)=\"addTDV2()\">+</button>\n      </header>\n      <div class=\"composedBlock\" *ngFor=\"let item of dto.bioInfo2.textDependentVoices; let idx = index;\">\n        <button class=\"rightButton red\" (click)=\"removeTDV2(idx)\">-</button>\n        <div class=\"inputRow\">\n          <label>\n            Select audio file\n          </label>\n          <input type=\"file\" accept=\"audio/*\" (change)=\"bi2_audio_tdv_change(idx)\" #bi2_audio_tdv>\n        </div>\n        <div class=\"inputRow\">\n          <label>\n            Phase ID\n          </label>\n          <input type=\"number\" name=\"bi2_phaseid_tdv{{idx}}\"\n            [(ngModel)]=\"dto.bioInfo2.textDependentVoices[idx].phraseId\">\n        </div>\n        <div class=\"inputRow\">\n          <label>\n            Template\n          </label>\n          <textarea name=\"bi2_template_tdv{{idx}}\"\n            [(ngModel)]=\"dto.bioInfo2.textDependentVoices[idx].template\"></textarea>\n        </div>\n      </div>\n    </section>\n    <section>\n      <header>\n        <h4>Text Independent Voices</h4>\n      </header>\n      <div class=\"inputRow\">\n        <label>\n          Select audio file\n        </label>\n        <input type=\"file\" value=\"\" accept=\"audio/*\" (change)=\"bi2_audio_tiv_change(idx)\" #bi2_audio_tiv>\n      </div>\n      <div class=\"inputRow\">\n        <label>\n          Template\n        </label>\n        <textarea name=\"bi2_template_tiv\" [(ngModel)]=\"dto.bioInfo2.textDependentVoices.template\"></textarea>\n      </div>\n    </section>\n  </section>\n  <!-- params -->\n  <section>\n    <header>\n      <h3>Params</h3>\n    </header>\n    <!-- <div class=\"inputRow\">\n      <label>\n        Confidence\n      </label>\n      <app-gauge [percent]=\"(1000 - farCalculated) / 10\"></app-gauge>\n    </div>\n    <div class=\"inputRow\">\n      <label>\n        Far\n      </label>\n      <input name=\"far\" [(ngModel)]=\"farCalculated\" type=\"range\" min=\"1\" max=\"999\" />\n      <app-gauge [percent]=\"farCalculated / 10\" color=\"#eeab00\"></app-gauge>\n    </div> -->\n    <section>\n      <header>\n        <h4>Finger Print Matching Params</h4>\n      </header>\n      <div class=\"inputRow\">\n        <label>\n          Max Rotation\n        </label>\n        <input name=\"maxRotation\" type=\"range\" min=\"0\" max=\"180\"\n          [(ngModel)]=\"dto.params.fingerPrintMatchingParams.maxRotation\" />\n        {{dto.params.fingerPrintMatchingParams.maxRotation}}\n      </div>\n      <div class=\"inputRow\">\n        <label>\n          Use Only Ansi378\n        </label>\n        <input type=\"checkbox\" [(ngModel)]=\"dto.params.fingerPrintMatchingParams.useOnlyAnsi378\"\n          name=\"useOnlyAnsi378\" />\n      </div>\n    </section>\n  </section>\n  <section>\n    <button type=\"button\" class=\"send\" (click)=\"send()\">Send Data</button>\n  </section>\n</form>"

/***/ }),

/***/ "./src/app/pages/matching/verify-t2t/verify-t2t.component.sass":
/*!*********************************************************************!*\
  !*** ./src/app/pages/matching/verify-t2t/verify-t2t.component.sass ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hdGNoaW5nL3ZlcmlmeS10MnQvdmVyaWZ5LXQydC5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/matching/verify-t2t/verify-t2t.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/matching/verify-t2t/verify-t2t.component.ts ***!
  \*******************************************************************/
/*! exports provided: VerifyT2tComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyT2tComponent", function() { return VerifyT2tComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _providers_matching_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../providers/matching.service */ "./src/app/providers/matching.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_dataTypeObjects_verifyT2t__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dataTypeObjects/verifyT2t */ "./src/app/dataTypeObjects/verifyT2t.ts");
/* harmony import */ var src_app_Utils_UUID__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Utils/UUID */ "./src/app/Utils/UUID.ts");





var VerifyT2tComponent = /** @class */ (function () {
    function VerifyT2tComponent(matching) {
        this.matching = matching;
        this.loading = false;
        this.step = 1;
        this.dto = new src_app_dataTypeObjects_verifyT2t__WEBPACK_IMPORTED_MODULE_3__["VerifyT2t"]();
    }
    VerifyT2tComponent.prototype.ngOnInit = function () {
        this.dto.auditToken = src_app_Utils_UUID__WEBPACK_IMPORTED_MODULE_4__["UUID"].create();
        // this.farCalculated = this.dto.params.far;
    };
    VerifyT2tComponent.prototype.addCompositeFinger = function () {
        this.dto.bioInfo1.compositeFingerPrints.push(new src_app_dataTypeObjects_verifyT2t__WEBPACK_IMPORTED_MODULE_3__["CompositeFingerPrints"]());
    };
    VerifyT2tComponent.prototype.removeCompositeFinger = function (idx) {
        this.dto.bioInfo1.compositeFingerPrints.splice(idx, 1);
    };
    VerifyT2tComponent.prototype.addFace = function () {
        this.dto.bioInfo1.faces.push(new src_app_dataTypeObjects_verifyT2t__WEBPACK_IMPORTED_MODULE_3__["Faces"]());
    };
    VerifyT2tComponent.prototype.removeFace = function (idx) {
        this.dto.bioInfo1.faces.splice(idx, 1);
    };
    VerifyT2tComponent.prototype.addFPrint = function () {
        this.dto.bioInfo1.fingerPrints.push(new src_app_dataTypeObjects_verifyT2t__WEBPACK_IMPORTED_MODULE_3__["FingerPrints"]());
    };
    VerifyT2tComponent.prototype.removeFPrint = function (idx) {
        this.dto.bioInfo1.fingerPrints.splice(idx, 1);
    };
    VerifyT2tComponent.prototype.addTDV = function () {
        this.dto.bioInfo1.textDependentVoices.push(new src_app_dataTypeObjects_verifyT2t__WEBPACK_IMPORTED_MODULE_3__["TextDependentVoices"]());
    };
    VerifyT2tComponent.prototype.removeTDV = function (idx) {
        this.dto.bioInfo1.textDependentVoices.splice(idx, 1);
    };
    VerifyT2tComponent.prototype.addCompositeFinger2 = function () {
        this.dto.bioInfo2.compositeFingerPrints.push(new src_app_dataTypeObjects_verifyT2t__WEBPACK_IMPORTED_MODULE_3__["CompositeFingerPrints"]());
    };
    VerifyT2tComponent.prototype.removeCompositeFinger2 = function (idx) {
        this.dto.bioInfo2.compositeFingerPrints.splice(idx, 1);
    };
    VerifyT2tComponent.prototype.addFace2 = function () {
        this.dto.bioInfo2.faces.push(new src_app_dataTypeObjects_verifyT2t__WEBPACK_IMPORTED_MODULE_3__["Faces"]());
    };
    VerifyT2tComponent.prototype.removeFace2 = function (idx) {
        this.dto.bioInfo2.faces.splice(idx, 1);
    };
    VerifyT2tComponent.prototype.addFPrint2 = function () {
        this.dto.bioInfo2.fingerPrints.push(new src_app_dataTypeObjects_verifyT2t__WEBPACK_IMPORTED_MODULE_3__["FingerPrints"]());
    };
    VerifyT2tComponent.prototype.removeFPrint2 = function (idx) {
        this.dto.bioInfo2.fingerPrints.splice(idx, 1);
    };
    VerifyT2tComponent.prototype.addTDV2 = function () {
        this.dto.bioInfo2.textDependentVoices.push(new src_app_dataTypeObjects_verifyT2t__WEBPACK_IMPORTED_MODULE_3__["TextDependentVoices"]());
    };
    VerifyT2tComponent.prototype.removeTDV2 = function (idx) {
        this.dto.bioInfo2.textDependentVoices.splice(idx, 1);
    };
    VerifyT2tComponent.prototype.bi1_image_faces_change = function (idx) {
        var _this = this;
        this.loading = true;
        var reader = new FileReader();
        var item = this.bi1ImageFaces.toArray()[idx];
        reader.onload = function () {
            var image = reader.result;
            _this.dto.bioInfo1.faces[idx].image = image.replace(/data:([a-zA-Z0-9]+)\/([a-zA-Z0-9]+);base64,/gi, '');
            _this.loading = false;
        };
        if (item.nativeElement.files[0]) {
            reader.readAsDataURL(item.nativeElement.files[0]);
        }
    };
    VerifyT2tComponent.prototype.bi1_image_fprints_change = function (idx) {
        var _this = this;
        this.loading = true;
        var reader = new FileReader();
        var item = this.bi1ImageFPrints.toArray()[idx];
        reader.onload = function () {
            var image = reader.result;
            _this.dto.bioInfo1.fingerPrints[idx].image = image.replace(/data:([a-zA-Z0-9]+)\/([a-zA-Z0-9]+);base64,/gi, '');
            _this.loading = false;
        };
        if (item.nativeElement.files[0]) {
            reader.readAsDataURL(item.nativeElement.files[0]);
        }
    };
    VerifyT2tComponent.prototype.bi1_audio_tdv_change = function (idx) {
        var _this = this;
        this.loading = true;
        var reader = new FileReader();
        var item = this.bi1AudioTdv.toArray()[idx];
        reader.onload = function () {
            var audio = reader.result;
            _this.dto.bioInfo1.textDependentVoices[idx].audio = audio.replace(/data:([a-zA-Z0-9]+)\/([a-zA-Z0-9]+);base64,/gi, '');
            _this.loading = false;
        };
        if (item.nativeElement.files[0]) {
            reader.readAsDataURL(item.nativeElement.files[0]);
        }
    };
    VerifyT2tComponent.prototype.bi1_audio_tiv_change = function (idx) {
        var _this = this;
        this.loading = true;
        var reader = new FileReader();
        var item = this.bi1AudioTiv.toArray()[idx];
        reader.onload = function () {
            var audio = reader.result;
            _this.dto.bioInfo1.textIndependentVoice[idx].audio = audio.replace(/data:([a-zA-Z0-9]+)\/([a-zA-Z0-9]+);base64,/gi, '');
            _this.loading = false;
        };
        if (item.nativeElement.files[0]) {
            reader.readAsDataURL(item.nativeElement.files[0]);
        }
    };
    VerifyT2tComponent.prototype.bi2_image_faces_change = function (idx) {
        var _this = this;
        this.loading = true;
        var reader = new FileReader();
        var item = this.bi2ImageFaces.toArray()[idx];
        reader.onload = function () {
            var image = reader.result;
            _this.dto.bioInfo2.faces[idx].image = image.replace(/data:([a-zA-Z0-9]+)\/([a-zA-Z0-9]+);base64,/gi, '');
            _this.loading = false;
        };
        if (item.nativeElement.files[0]) {
            reader.readAsDataURL(item.nativeElement.files[0]);
        }
    };
    VerifyT2tComponent.prototype.bi2_image_fprints_change = function (idx) {
        var _this = this;
        this.loading = true;
        var reader = new FileReader();
        var item = this.bi2ImageFPrints.toArray()[idx];
        reader.onload = function () {
            var image = reader.result;
            _this.dto.bioInfo2.fingerPrints[idx].image = image.replace(/data:([a-zA-Z0-9]+)\/([a-zA-Z0-9]+);base64,/gi, '');
            _this.loading = false;
        };
        if (item.nativeElement.files[0]) {
            reader.readAsDataURL(item.nativeElement.files[0]);
        }
    };
    VerifyT2tComponent.prototype.bi2_audio_tdv_change = function (idx) {
        var _this = this;
        this.loading = true;
        var reader = new FileReader();
        var item = this.bi2AudioTdv.toArray()[idx];
        reader.onload = function () {
            var audio = reader.result;
            _this.dto.bioInfo2.textDependentVoices[idx].audio = audio.replace(/data:([a-zA-Z0-9]+)\/([a-zA-Z0-9]+);base64,/gi, '');
            _this.loading = false;
        };
        if (item.nativeElement.files[0]) {
            reader.readAsDataURL(item.nativeElement.files[0]);
        }
    };
    VerifyT2tComponent.prototype.bi2_audio_tiv_change = function (idx) {
        var _this = this;
        this.loading = true;
        var reader = new FileReader();
        var item = this.bi2AudioTiv.toArray()[idx];
        reader.onload = function () {
            var audio = reader.result;
            _this.dto.bioInfo2.textIndependentVoice[idx].audio = audio.replace(/data:([a-zA-Z0-9]+)\/([a-zA-Z0-9]+);base64,/gi, '');
            _this.loading = false;
        };
        if (item.nativeElement.files[0]) {
            reader.readAsDataURL(item.nativeElement.files[0]);
        }
    };
    VerifyT2tComponent.prototype.send = function () {
        var _this = this;
        this.error = false;
        this.loading = true;
        // this.dto.params.far = this.farCalculated / 1000;
        this.matching.verifyT2T(this.dto).subscribe(function (resp) {
            console.log(resp);
            _this.loading = false;
            _this.step = 2;
            _this.response = resp;
            _this.jsonResponse = JSON.stringify(resp);
        }, function (err) {
            console.log(err);
            _this.error = true;
            _this.loading = false;
            _this.step = 2;
            _this.jsonResponse = JSON.stringify(err);
        });
        this.urlEndpoint = this.matching.getEndpoints().verifyT2t;
    };
    VerifyT2tComponent.prototype.retry = function () {
        this.step = 1;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChildren"])('bi1_image_faces'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["QueryList"])
    ], VerifyT2tComponent.prototype, "bi1ImageFaces", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChildren"])('bi1_image_fprints'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["QueryList"])
    ], VerifyT2tComponent.prototype, "bi1ImageFPrints", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChildren"])('bi1_audio_tdv'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["QueryList"])
    ], VerifyT2tComponent.prototype, "bi1AudioTdv", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChildren"])('bi1_audio_tiv'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["QueryList"])
    ], VerifyT2tComponent.prototype, "bi1AudioTiv", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChildren"])('bi2_image_faces'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["QueryList"])
    ], VerifyT2tComponent.prototype, "bi2ImageFaces", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChildren"])('bi2_image_fprints'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["QueryList"])
    ], VerifyT2tComponent.prototype, "bi2ImageFPrints", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChildren"])('bi2_audio_tdv'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["QueryList"])
    ], VerifyT2tComponent.prototype, "bi2AudioTdv", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChildren"])('bi2_audio_tiv'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["QueryList"])
    ], VerifyT2tComponent.prototype, "bi2AudioTiv", void 0);
    VerifyT2tComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-verify-t2t',
            template: __webpack_require__(/*! ./verify-t2t.component.html */ "./src/app/pages/matching/verify-t2t/verify-t2t.component.html"),
            styles: [__webpack_require__(/*! ./verify-t2t.component.sass */ "./src/app/pages/matching/verify-t2t/verify-t2t.component.sass"), __webpack_require__(/*! ../../../shared-styles/forms.scss */ "./src/app/shared-styles/forms.scss"), __webpack_require__(/*! ../../../shared-styles/playground-response.scss */ "./src/app/shared-styles/playground-response.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_matching_service__WEBPACK_IMPORTED_MODULE_1__["MatchingService"]])
    ], VerifyT2tComponent);
    return VerifyT2tComponent;
}());



/***/ }),

/***/ "./src/app/pages/matching/verify/verify.component.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/matching/verify/verify.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header title=\"MATCHING::VERIFY\"\n    subtitle=\"Performs a verification (1:1) of supplied biometric data against a supplied enrolled subject id\">\n</app-header>\n<app-loader [isLoading]=\"loading\"></app-loader>\n\n\n<section id=\"response\" *ngIf=\"step==2\">\n    <div class=\"url\"><span class=\"method\">POST</span> {{urlEndpoint}}</div>\n    <code [class.error]=\"error\">\n        {{jsonResponse}}\n    </code>\n    <div class=\"responses\" *ngIf=\"response\">\n        <div class=\"responseProcessed\">\n            <div class=\"dataBlock\">\n                <label>TxId:</label>\n                <div class=\"dataContent\">\n                    {{response.txId}}\n                </div>\n            </div>\n            <div class=\"dataBlock\">\n                <label>False acceptance probability:</label>\n                <div class=\"dataContent\">\n                    <app-gauge [percent]=\"(response.faP * 100).toFixed(2)\" color=\"#eeab00\"></app-gauge>\n                </div>\n            </div>\n            <div class=\"dataBlock\">\n                <label>Confidence:</label>\n                <div class=\"dataContent\">\n                    <app-gauge [percent]=\"(response.confidence * 100).toFixed(2)\"></app-gauge>\n                </div>\n            </div>\n            <div class=\"dataBlock\">\n                <label>Score:</label>\n                <div class=\"dataContent\">\n                    {{response.score}}\n                </div>\n            </div>\n            <div class=\"dataBlock\">\n                <label>Exception:</label>\n                <div class=\"dataContent\">\n                    <b *ngIf=\"response.exception\">YES</b>\n                    <b *ngIf=\"!response.exception\">NO</b>\n                </div>\n            </div>\n            <div class=\"dataBlock\">\n                <label>Status:</label>\n                <div class=\"dataContent\">\n                    {{response.status}}\n                </div>\n            </div>\n        </div>\n    </div>\n    <button type=\"button\" class=\"send\" (click)=\"step = 1\">Retry</button>\n</section>\n\n<form *ngIf=\"step==1\">\n    <section>\n        <div class=\"inputRow\">\n            <label>\n                Audit Token\n            </label>\n            <input type=\"text\" name=\"auditToken\" [(ngModel)]=\"dto.auditToken\">\n        </div>\n    </section>\n    <section>\n        <header>\n            <h3>Bio Info</h3>\n        </header>\n        <section>\n            <header>\n                <h4>Composite Finger Prints</h4>\n                <button class=\"rightButton\" (click)=\"addCompositeFinger()\">+</button>\n            </header>\n            <!-- ESTO ES UN ARREGLO -->\n            <div class=\"composedBlock\" *ngFor=\"let item of dto.bioInfo.compositeFingerPrints; let idx = index;\">\n                <button class=\"rightButton red\" (click)=\"removeCompositeFinger(idx)\">-</button>\n                <div class=\"inputRow\">\n                    <label>\n                        Finger\n                    </label>\n                    <input type=\"text\" name=\"bi1_dedo_composite{{idx}}\"\n                        [(ngModel)]=\"dto.bioInfo.compositeFingerPrints[idx].dedo\">\n                    <!-- <select name=\"bi1_dedo\">\n                    <option value=\"RIGHT_THUMB\">Right Thumb</option>\n                  </select> -->\n                </div>\n                <!-- IMAGES [0] -->\n                <div class=\"inputRow\">\n                    <label>\n                        Source\n                    </label>\n                    <select name=\"bi1_source_composite{{idx}}\"\n                        [(ngModel)]=\"dto.bioInfo.compositeFingerPrints[idx].source\">\n                        <option>LIVE_FINGERPRINT</option>\n                        <option>SCANNED_FINGERPRINT_IMAGE</option>\n                        <option>UNKNOWN</option>\n                    </select>\n                    <!-- <select name=\"bi1_source\">\n                    <option value=\"LIVE_FINGERPRINT\">Live Fingerprint</option>\n                  </select> -->\n                </div>\n                <div class=\"inputRow\">\n                    <label>\n                        Template\n                    </label>\n                    <textarea name=\"bi1_template_composite{{idx}}\"\n                        [(ngModel)]=\"dto.bioInfo.compositeFingerPrints[idx].template\"></textarea>\n                </div>\n            </div>\n        </section>\n        <section>\n            <header>\n                <h4>Faces</h4>\n                <button class=\"rightButton\" (click)=\"addFace()\">+</button>\n            </header>\n            <div class=\"composedBlock\" *ngFor=\"let item of dto.bioInfo.faces; let idx = index;\">\n                <button class=\"rightButton red\" (click)=\"removeFace(idx)\">-</button>\n                <div class=\"inputRow\">\n                    <label>\n                        Select image file\n                    </label>\n                    <input type=\"file\" accept=\"image/*\" name=\"bi1_image_faces{{idx}}\"\n                        (change)=\"bi1_image_faces_change(idx)\" #bi1_image_faces>\n                </div>\n                <div class=\"inputRow\">\n                    <label>\n                        Template\n                    </label>\n                    <textarea name=\"bi1_template_faces{{idx}}\" [(ngModel)]=\"dto.bioInfo.faces[idx].template\"></textarea>\n                </div>\n            </div>\n        </section>\n        <section>\n            <header>\n                <h4>Finger Prints</h4>\n                <button class=\"rightButton\" (click)=\"addFPrint()\">+</button>\n            </header>\n            <div class=\"composedBlock\" *ngFor=\"let item of dto.bioInfo.fingerPrints; let idx = index;\">\n                <div class=\"inputRow\">\n                    <button class=\"rightButton red\" (click)=\"removeFPrint(idx)\">-</button>\n                    <label>\n                        Template Format\n                    </label>\n                    <input type=\"text\" name=\"bi1_template_format_fp{{idx}}\"\n                        [(ngModel)]=\"dto.bioInfo.fingerPrints[idx].formatoTemplate\">\n                </div>\n                <div class=\"inputRow\">\n                    <label>\n                        Select image file\n                    </label>\n                    <input type=\"file\" accept=\"image/*\" (change)=\"bi1_image_fprints_change(idx)\" #bi1_image_fprints>\n                </div>\n                <div class=\"inputRow\">\n                    <label>\n                        Image Source\n                    </label>\n                    <select name=\"bi1_imagesource_fp{{idx}}\" [(ngModel)]=\"dto.bioInfo.fingerPrints[idx].imageSource\">\n                        <option>LIVE_FINGERPRINT</option>\n                        <option>SCANNED_FINGERPRINT_IMAGE</option>\n                        <option>UNKNOWN</option>\n                    </select>\n                </div>\n                <div class=\"inputRow\">\n                    <label>\n                        Position\n                    </label>\n                    <select name=\"bi1_position_fp{{idx}}\" [(ngModel)]=\"dto.bioInfo.fingerPrints[idx].position\">\n                        <option>RIGHT_THUMB</option>\n                        <option>LEFT_THUMB</option>\n                        <option>RIGHT_INDEX_FINGER</option>\n                        <option>LEFT_INDEX_FINGER</option>\n                        <option>RIGHT_MIDDLE_FINGER</option>\n                        <option>LEFT_MIDDLE_FINGER</option>\n                        <option>RIGHT_RING_FINGER</option>\n                        <option>LEFT_RING_FINGER</option>\n                        <option>RIGHT_LITTLE_FINGER</option>\n                        <option>LEFT_LITTLE_FINGER</option>\n                        <option>UNKNOWN</option>\n                    </select>\n                </div>\n                <div class=\"inputRow\">\n                    <label>\n                        Template\n                    </label>\n                    <textarea name=\"bi1_template_fp{{idx}}\"\n                        [(ngModel)]=\"dto.bioInfo.fingerPrints[idx].template\"></textarea>\n                </div>\n            </div>\n        </section>\n        <section>\n            <header>\n                <h4>Text Dependent Voices</h4>\n                <button class=\"rightButton\" (click)=\"addTDV()\">+</button>\n            </header>\n            <div class=\"composedBlock\" *ngFor=\"let item of dto.bioInfo.textDependentVoices; let idx = index;\">\n                <button class=\"rightButton red\" (click)=\"removeTDV(idx)\">-</button>\n                <div class=\"inputRow\">\n                    <label>\n                        Select audio file\n                    </label>\n                    <input type=\"file\" accept=\"audio/*\" (change)=\"bi1_audio_tdv_change(idx)\" #bi1_audio_tdv>\n                </div>\n                <div class=\"inputRow\">\n                    <label>\n                        Phase ID\n                    </label>\n                    <input type=\"number\" name=\"bi1_phaseid_tdv{{idx}}\"\n                        [(ngModel)]=\"dto.bioInfo.textDependentVoices[idx].phraseId\">\n                </div>\n                <div class=\"inputRow\">\n                    <label>\n                        Template\n                    </label>\n                    <textarea name=\"bi1_template_tdv{{idx}}\"\n                        [(ngModel)]=\"dto.bioInfo.textDependentVoices[idx].template\"></textarea>\n                </div>\n            </div>\n        </section>\n        <section>\n            <header>\n                <h4>Text Independent Voices</h4>\n            </header>\n            <div class=\"inputRow\">\n                <label>\n                    Select audio file\n                </label>\n                <input type=\"file\" value=\"\" accept=\"audio/*\" (change)=\"bi1_audio_tiv_change(idx)\" #bi1_audio_tiv>\n            </div>\n            <div class=\"inputRow\">\n                <label>\n                    Template\n                </label>\n                <textarea name=\"bi1_template_tiv\" [(ngModel)]=\"dto.bioInfo.textDependentVoices.template\"></textarea>\n            </div>\n        </section>\n    </section>\n    <section>\n        <header>\n            <h4>Params</h4>\n        </header>\n        <!-- <div class=\"inputRow\">\n            <label>\n                Confidence\n            </label>\n            <app-gauge [percent]=\"(1000 - farCalculated) / 10\"></app-gauge>\n        </div>\n        <div class=\"inputRow\">\n            <label>\n                Far\n            </label>\n            <input name=\"far\" [(ngModel)]=\"farCalculated\" type=\"range\" min=\"1\" max=\"999\" />\n            <app-gauge [percent]=\"farCalculated / 10\" color=\"#eeab00\"></app-gauge>\n        </div> -->\n        <section>\n            <header>\n                <h4>Finger Print Matching Params</h4>\n            </header>\n            <div class=\"inputRow\">\n                <label>\n                    Max Rotation\n                </label>\n                <input name=\"maxRotation\" type=\"range\" min=\"0\" max=\"180\"\n                    [(ngModel)]=\"dto.params.fingerPrintMatchingParams.maxRotation\" />\n                {{dto.params.fingerPrintMatchingParams.maxRotation}}\n            </div>\n            <div class=\"inputRow\">\n                <label>\n                    Use Only Ansi378\n                </label>\n                <input type=\"checkbox\" [(ngModel)]=\"dto.params.fingerPrintMatchingParams.useOnlyAnsi378\"\n                    name=\"useOnlyAnsi378\" />\n            </div>\n        </section>\n    </section>\n    <section>\n        <div class=\"inputRow\">\n            <label>\n                Subject ID\n            </label>\n            <input type=\"text\" name=\"subjectID\" [(ngModel)]=\"dto.subjectId\">\n        </div>\n    </section>\n    <section>\n        <button type=\"button\" class=\"send\" (click)=\"send()\">Send Data</button>\n    </section>\n</form>"

/***/ }),

/***/ "./src/app/pages/matching/verify/verify.component.sass":
/*!*************************************************************!*\
  !*** ./src/app/pages/matching/verify/verify.component.sass ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hdGNoaW5nL3ZlcmlmeS92ZXJpZnkuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/matching/verify/verify.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/matching/verify/verify.component.ts ***!
  \***********************************************************/
/*! exports provided: VerifyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyComponent", function() { return VerifyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _dataTypeObjects_verify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../dataTypeObjects/verify */ "./src/app/dataTypeObjects/verify.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Utils_UUID__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Utils/UUID */ "./src/app/Utils/UUID.ts");
/* harmony import */ var src_app_dataTypeObjects_verifyT2t__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dataTypeObjects/verifyT2t */ "./src/app/dataTypeObjects/verifyT2t.ts");
/* harmony import */ var src_app_providers_matching_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/providers/matching.service */ "./src/app/providers/matching.service.ts");






var VerifyComponent = /** @class */ (function () {
    function VerifyComponent(matching) {
        this.matching = matching;
        this.dto = new _dataTypeObjects_verify__WEBPACK_IMPORTED_MODULE_1__["Verify"]();
        this.loading = false;
        this.step = 1;
    }
    VerifyComponent.prototype.ngOnInit = function () {
        this.dto.auditToken = src_app_Utils_UUID__WEBPACK_IMPORTED_MODULE_3__["UUID"].create();
        // this.farCalculated = this.dto.params.far;
    };
    VerifyComponent.prototype.addCompositeFinger = function () {
        this.dto.bioInfo.compositeFingerPrints.push(new src_app_dataTypeObjects_verifyT2t__WEBPACK_IMPORTED_MODULE_4__["CompositeFingerPrints"]());
    };
    VerifyComponent.prototype.removeCompositeFinger = function (idx) {
        this.dto.bioInfo.compositeFingerPrints.splice(idx, 1);
    };
    VerifyComponent.prototype.addFace = function () {
        this.dto.bioInfo.faces.push(new src_app_dataTypeObjects_verifyT2t__WEBPACK_IMPORTED_MODULE_4__["Faces"]());
    };
    VerifyComponent.prototype.removeFace = function (idx) {
        this.dto.bioInfo.faces.splice(idx, 1);
    };
    VerifyComponent.prototype.addFPrint = function () {
        this.dto.bioInfo.fingerPrints.push(new src_app_dataTypeObjects_verifyT2t__WEBPACK_IMPORTED_MODULE_4__["FingerPrints"]());
    };
    VerifyComponent.prototype.removeFPrint = function (idx) {
        this.dto.bioInfo.fingerPrints.splice(idx, 1);
    };
    VerifyComponent.prototype.addTDV = function () {
        this.dto.bioInfo.textDependentVoices.push(new src_app_dataTypeObjects_verifyT2t__WEBPACK_IMPORTED_MODULE_4__["TextDependentVoices"]());
    };
    VerifyComponent.prototype.removeTDV = function (idx) {
        this.dto.bioInfo.textDependentVoices.splice(idx, 1);
    };
    VerifyComponent.prototype.bi1_image_faces_change = function (idx) {
        var _this = this;
        this.loading = true;
        var reader = new FileReader();
        var item = this.bi1ImageFaces.toArray()[idx];
        reader.onload = function () {
            var image = reader.result;
            _this.dto.bioInfo.faces[idx].image = image.replace(/data:([a-zA-Z0-9]+)\/([a-zA-Z0-9]+);base64,/gi, '');
            _this.loading = false;
        };
        if (item.nativeElement.files[0]) {
            reader.readAsDataURL(item.nativeElement.files[0]);
        }
    };
    VerifyComponent.prototype.bi1_image_fprints_change = function (idx) {
        var _this = this;
        this.loading = true;
        var reader = new FileReader();
        var item = this.bi1ImageFPrints.toArray()[idx];
        reader.onload = function () {
            var image = reader.result;
            _this.dto.bioInfo.fingerPrints[idx].image = image.replace(/data:([a-zA-Z0-9]+)\/([a-zA-Z0-9]+);base64,/gi, '');
            _this.loading = false;
        };
        if (item.nativeElement.files[0]) {
            reader.readAsDataURL(item.nativeElement.files[0]);
        }
    };
    VerifyComponent.prototype.bi1_audio_tdv_change = function (idx) {
        var _this = this;
        this.loading = true;
        var reader = new FileReader();
        var item = this.bi1AudioTdv.toArray()[idx];
        reader.onload = function () {
            var audio = reader.result;
            _this.dto.bioInfo.textDependentVoices[idx].audio = audio.replace(/data:([a-zA-Z0-9]+)\/([a-zA-Z0-9]+);base64,/gi, '');
            _this.loading = false;
        };
        if (item.nativeElement.files[0]) {
            reader.readAsDataURL(item.nativeElement.files[0]);
        }
    };
    VerifyComponent.prototype.bi1_audio_tiv_change = function (idx) {
        var _this = this;
        this.loading = true;
        var reader = new FileReader();
        var item = this.bi1AudioTiv.toArray()[idx];
        reader.onload = function () {
            var audio = reader.result;
            _this.dto.bioInfo.textIndependentVoice[idx].audio = audio.replace(/data:([a-zA-Z0-9]+)\/([a-zA-Z0-9]+);base64,/gi, '');
            _this.loading = false;
        };
        if (item.nativeElement.files[0]) {
            reader.readAsDataURL(item.nativeElement.files[0]);
        }
    };
    VerifyComponent.prototype.send = function () {
        var _this = this;
        this.error = false;
        this.loading = true;
        // this.dto.params.far = this.farCalculated / 1000;
        this.matching.verify(this.dto).subscribe(function (resp) {
            console.log(resp);
            _this.loading = false;
            _this.step = 2;
            _this.response = resp;
            _this.jsonResponse = JSON.stringify(resp);
        }, function (err) {
            console.log(err);
            _this.error = true;
            _this.loading = false;
            _this.step = 2;
            _this.jsonResponse = JSON.stringify(err);
        });
        this.urlEndpoint = this.matching.getEndpoints().verify;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChildren"])('bi1_image_faces'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["QueryList"])
    ], VerifyComponent.prototype, "bi1ImageFaces", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChildren"])('bi1_image_fprints'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["QueryList"])
    ], VerifyComponent.prototype, "bi1ImageFPrints", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChildren"])('bi1_audio_tdv'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["QueryList"])
    ], VerifyComponent.prototype, "bi1AudioTdv", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChildren"])('bi1_audio_tiv'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["QueryList"])
    ], VerifyComponent.prototype, "bi1AudioTiv", void 0);
    VerifyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-verify',
            template: __webpack_require__(/*! ./verify.component.html */ "./src/app/pages/matching/verify/verify.component.html"),
            styles: [__webpack_require__(/*! ./verify.component.sass */ "./src/app/pages/matching/verify/verify.component.sass"), __webpack_require__(/*! ../../../shared-styles/forms.scss */ "./src/app/shared-styles/forms.scss"), __webpack_require__(/*! ../../../shared-styles/playground-response.scss */ "./src/app/shared-styles/playground-response.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_providers_matching_service__WEBPACK_IMPORTED_MODULE_5__["MatchingService"]])
    ], VerifyComponent);
    return VerifyComponent;
}());



/***/ }),

/***/ "./src/app/providers/EndpointsMatchingService.ts":
/*!*******************************************************!*\
  !*** ./src/app/providers/EndpointsMatchingService.ts ***!
  \*******************************************************/
/*! exports provided: EndpointsMatchingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndpointsMatchingService", function() { return EndpointsMatchingService; });
var EndpointsMatchingService = /** @class */ (function () {
    function EndpointsMatchingService() {
    }
    return EndpointsMatchingService;
}());



/***/ }),

/***/ "./src/app/providers/database.service.ts":
/*!***********************************************!*\
  !*** ./src/app/providers/database.service.ts ***!
  \***********************************************/
/*! exports provided: DatabaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseService", function() { return DatabaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _endpointsDatabaseService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./endpointsDatabaseService */ "./src/app/providers/endpointsDatabaseService.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





var DatabaseService = /** @class */ (function () {
    function DatabaseService(httpClient) {
        this.httpClient = httpClient;
        this.endpoints = new _endpointsDatabaseService__WEBPACK_IMPORTED_MODULE_2__["EndpointsDatabaseService"]();
        this.reSetEndpoints(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].endpoint);
    }
    DatabaseService.prototype.getEndpoints = function () {
        return this.endpoints;
    };
    DatabaseService.prototype.reSetEndpoints = function (endpoint) {
        this.endpoints.list = endpoint + '/' + src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].version + '/bio/list';
        this.endpoints.delete = endpoint + '/' + src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].version + '/bio/delete';
        this.endpoints.zip = endpoint + '/' + src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].version + '/bio/download-zipped-biodata/';
        this.endpoints.data = endpoint + '/' + src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].version + '/bio/subject-data';
        this.endpoints.info = endpoint + '/' + src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].version + '/bio/subject-info';
        this.endpoints.enroll = endpoint + '/' + src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].version + '/bio/enroll';
        this.endpoints.update = endpoint + '/' + src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].version + '/bio/update';
    };
    DatabaseService.prototype.getList = function (dto) {
        var options = { headers: { 'Content-Type': 'application/json' } };
        var dataSTR = JSON.stringify(dto);
        return this.httpClient.post(this.endpoints.list, dataSTR, options);
    };
    DatabaseService.prototype.delete = function (data) {
        var options = { headers: { 'Content-Type': 'application/json' } };
        var dataSTR = JSON.stringify(data);
        return this.httpClient.post(this.endpoints.delete, dataSTR, options);
    };
    DatabaseService.prototype.downZip = function (subjectId) {
        return this.httpClient.get(this.endpoints.zip + subjectId, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json'
            }),
            responseType: 'blob'
        });
    };
    DatabaseService.prototype.getData = function (data) {
        var options = { headers: { 'Content-Type': 'application/json' } };
        var dataSTR = JSON.stringify(data);
        return this.httpClient.post(this.endpoints.data, dataSTR, options);
    };
    DatabaseService.prototype.getInfo = function (data) {
        var options = { headers: { 'Content-Type': 'application/json' } };
        var dataSTR = JSON.stringify(data);
        return this.httpClient.post(this.endpoints.info, dataSTR, options);
    };
    DatabaseService.prototype.enroll = function (data) {
        var options = { headers: { 'Content-Type': 'application/json' } };
        var dataSTR = JSON.stringify(data);
        return this.httpClient.post(this.endpoints.enroll, dataSTR, options);
    };
    DatabaseService.prototype.update = function (data) {
        var options = { headers: { 'Content-Type': 'application/json' } };
        var dataSTR = JSON.stringify(data);
        return this.httpClient.post(this.endpoints.update, dataSTR, options);
    };
    DatabaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], DatabaseService);
    return DatabaseService;
}());



/***/ }),

/***/ "./src/app/providers/endpointsDatabaseService.ts":
/*!*******************************************************!*\
  !*** ./src/app/providers/endpointsDatabaseService.ts ***!
  \*******************************************************/
/*! exports provided: EndpointsDatabaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndpointsDatabaseService", function() { return EndpointsDatabaseService; });
var EndpointsDatabaseService = /** @class */ (function () {
    function EndpointsDatabaseService() {
    }
    return EndpointsDatabaseService;
}());



/***/ }),

/***/ "./src/app/providers/endpointsExtractionService.ts":
/*!*********************************************************!*\
  !*** ./src/app/providers/endpointsExtractionService.ts ***!
  \*********************************************************/
/*! exports provided: EndpointsExtractionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndpointsExtractionService", function() { return EndpointsExtractionService; });
var EndpointsExtractionService = /** @class */ (function () {
    function EndpointsExtractionService() {
    }
    return EndpointsExtractionService;
}());



/***/ }),

/***/ "./src/app/providers/extraction.service.ts":
/*!*************************************************!*\
  !*** ./src/app/providers/extraction.service.ts ***!
  \*************************************************/
/*! exports provided: ExtractionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtractionService", function() { return ExtractionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _endpointsExtractionService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./endpointsExtractionService */ "./src/app/providers/endpointsExtractionService.ts");





var ExtractionService = /** @class */ (function () {
    function ExtractionService(httpClient) {
        this.httpClient = httpClient;
        this.endpoints = new _endpointsExtractionService__WEBPACK_IMPORTED_MODULE_4__["EndpointsExtractionService"]();
        this.reSetEndpoints(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].endpoint);
    }
    ExtractionService.prototype.getEndpoints = function () {
        return this.endpoints;
    };
    ExtractionService.prototype.reSetEndpoints = function (endpoint) {
        this.endpoints.faceImage = endpoint + '/' + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].version + '/bio/extract-face-image';
        this.endpoints.faceVideo = endpoint + '/' + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].version + '/bio/extract-face-video';
        this.endpoints.dniAr = endpoint + '/' + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].version + '/document-extraction/dni-ar';
        this.endpoints.textDependentVoice = endpoint + '/' + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].version + '/bio/extract-text-dependent-voice';
        this.endpoints.textIndependentVoice = endpoint + '/' + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].version + '/bio/extract-text-independent-voice';
        this.endpoints.fingerPrintImage = endpoint + '/' + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].version + '/bio/extract-fingerprint-image';
        this.endpoints.convertFingerPrint = endpoint + '/' + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].version + '/bio/convert-fingerprint-image-wsq-to-png';
    };
    ExtractionService.prototype.extractFaceVideo = function (data) {
        var options = { headers: { 'Content-Type': 'application/json' } };
        var dataSTR = JSON.stringify(data);
        return this.httpClient.post(this.endpoints.faceVideo, dataSTR, options);
    };
    ExtractionService.prototype.extractFaceImage = function (data) {
        var options = { headers: { 'Content-Type': 'application/json' } };
        var dataSTR = JSON.stringify(data);
        return this.httpClient.post(this.endpoints.faceImage, dataSTR, options);
    };
    ExtractionService.prototype.extractDni = function (data) {
        var options = { headers: { 'Content-Type': 'application/json' } };
        var dataSTR = JSON.stringify(data);
        return this.httpClient.post(this.endpoints.dniAr, dataSTR, options);
    };
    ExtractionService.prototype.extractTextDependentVoice = function (data) {
        var options = { headers: { 'Content-Type': 'application/json' } };
        var dataSTR = JSON.stringify(data);
        return this.httpClient.post(this.endpoints.textDependentVoice, dataSTR, options);
    };
    ExtractionService.prototype.extractTextIndependentVoice = function (data) {
        var options = { headers: { 'Content-Type': 'application/json' } };
        var dataSTR = JSON.stringify(data);
        return this.httpClient.post(this.endpoints.textIndependentVoice, dataSTR, options);
    };
    ExtractionService.prototype.extractFingerprint = function (data) {
        var options = { headers: { 'Content-Type': 'application/json' } };
        var dataSTR = JSON.stringify(data);
        return this.httpClient.post(this.endpoints.fingerPrintImage, dataSTR, options);
    };
    ExtractionService.prototype.getFingerPrintImage = function (token, fingerPrintImage) {
        var options = { headers: { 'Content-Type': 'application/json' } };
        var dataSTR = JSON.stringify({
            autidToken: token,
            image: fingerPrintImage
        });
        return this.httpClient.post(this.endpoints.convertFingerPrint, dataSTR, options);
    };
    ExtractionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ExtractionService);
    return ExtractionService;
}());



/***/ }),

/***/ "./src/app/providers/matching.service.ts":
/*!***********************************************!*\
  !*** ./src/app/providers/matching.service.ts ***!
  \***********************************************/
/*! exports provided: MatchingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchingService", function() { return MatchingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _EndpointsMatchingService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EndpointsMatchingService */ "./src/app/providers/EndpointsMatchingService.ts");





var MatchingService = /** @class */ (function () {
    function MatchingService(httpClient) {
        this.httpClient = httpClient;
        this.endpoints = new _EndpointsMatchingService__WEBPACK_IMPORTED_MODULE_4__["EndpointsMatchingService"]();
        this.reSetEndpoints(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].endpoint);
    }
    MatchingService.prototype.getEndpoints = function () {
        return this.endpoints;
    };
    MatchingService.prototype.reSetEndpoints = function (endpoint) {
        this.endpoints.verifyT2t = endpoint + '/' + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].version + '/bio/verify-t2t';
        this.endpoints.verify = endpoint + '/' + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].version + '/bio/verify';
        this.endpoints.identify = endpoint + '/' + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].version + '/bio/identify';
    };
    MatchingService.prototype.verifyT2T = function (dto) {
        var options = { headers: { 'Content-Type': 'application/json' } };
        var dataSTR = JSON.stringify(dto);
        return this.httpClient.post(this.endpoints.verifyT2t, dataSTR, options);
    };
    MatchingService.prototype.verify = function (dto) {
        var options = { headers: { 'Content-Type': 'application/json' } };
        var dataSTR = JSON.stringify(dto);
        return this.httpClient.post(this.endpoints.verify, dataSTR, options);
    };
    MatchingService.prototype.identify = function (dto) {
        var options = { headers: { 'Content-Type': 'application/json' } };
        var dataSTR = JSON.stringify(dto);
        return this.httpClient.post(this.endpoints.identify, dataSTR, options);
    };
    MatchingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MatchingService);
    return MatchingService;
}());



/***/ }),

/***/ "./src/app/shared-styles/forms.scss":
/*!******************************************!*\
  !*** ./src/app/shared-styles/forms.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n  margin: 0px 15px;\n  display: block;\n  border: 2px solid #e6ecf0;\n  padding: 15px;\n  border-radius: 13px;\n  height: calc(100% - 160px);\n  overflow-y: scroll; }\n  form section {\n    border-bottom: 2px solid #f3f5f8; }\n  form section h3, form section h4 {\n      font-family: helvetica;\n      color: gray;\n      text-transform: uppercase; }\n  form section > section {\n      border-bottom: 0px;\n      border: 1px solid #e6ecf0;\n      border-left: 5px solid #e6ecf0; }\n  form section > section h4 {\n        padding-left: 10px; }\n  form section > section header {\n        position: relative; }\n  form section > section header .buttonRights {\n          position: absolute;\n          right: 10px;\n          top: -1px; }\n  form section .inputRow {\n      margin: 10px 0px; }\n  form section .inputRow label {\n        width: 25%;\n        display: inline-block;\n        text-align: right;\n        margin-right: 5px;\n        font-family: helvetica;\n        text-transform: uppercase;\n        font-size: 13px;\n        color: gray;\n        vertical-align: middle; }\n  form section:last-child {\n      border-bottom: 0px; }\n  form section .composedBlock {\n      background: #f9fafc;\n      margin: 5px;\n      padding: 5px 0px;\n      position: relative; }\n  form input[type=text], form input[type=number], form textarea {\n    width: 200px;\n    padding: 5px;\n    border-radius: 5px;\n    border: 1px solid #ebeff3;\n    vertical-align: middle; }\n  form input[type=text]:hover, form input[type=text]:focus, form input[type=number]:hover, form input[type=number]:focus, form textarea:hover, form textarea:focus {\n      outline: none;\n      border: 1px solid #aae3ff; }\n  form button {\n    background: transparent;\n    font-family: helvetica;\n    font-size: 16px;\n    width: 250px;\n    border: 1px solid #7bd3ff;\n    padding: 10px;\n    border-radius: 5px;\n    display: block;\n    margin: 15px auto;\n    color: #7bd3ff;\n    text-transform: uppercase;\n    background-color: white;\n    cursor: pointer;\n    transition: color 0.2s, background-color 0.2s; }\n  form button.rightButton {\n      position: absolute;\n      width: 30px;\n      height: 30px;\n      right: 7px;\n      margin: 0px;\n      top: 6px;\n      padding: 0px; }\n  form button:hover, form button:active, form button:focus {\n      color: white;\n      background-color: #7bd3ff;\n      outline: none; }\n  form button.red {\n      border: 1px solid #ff7b7b;\n      color: #ff7b7b; }\n  form button.red:hover, form button.red:active, form button.red:focus {\n        color: white;\n        background-color: #ff7b7b; }\n  form button.inline {\n      margin: 15px 5px;\n      display: inline-block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZHkvcmVwb3Mvc29iaW8vc3JjL2FwcC9zaGFyZWQtc3R5bGVzL2Zvcm1zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsbUJBQW1CO0VBZ0RuQiwwQkFBMEI7RUFDMUIsa0JBQWtCLEVBQUE7RUF0RHRCO0lBT1EsZ0NBQWdDLEVBQUE7RUFQeEM7TUFTWSxzQkFBc0I7TUFDdEIsV0FBVztNQUNYLHlCQUF5QixFQUFBO0VBWHJDO01BeUJZLGtCQUFrQjtNQUNsQix5QkFBeUI7TUFDekIsOEJBQThCLEVBQUE7RUEzQjFDO1FBZWdCLGtCQUFrQixFQUFBO0VBZmxDO1FBa0JnQixrQkFBa0IsRUFBQTtFQWxCbEM7VUFvQm9CLGtCQUFrQjtVQUNsQixXQUFXO1VBQ1gsU0FBUyxFQUFBO0VBdEI3QjtNQThCWSxnQkFBZ0IsRUFBQTtFQTlCNUI7UUFnQ2dCLFVBQVU7UUFDVixxQkFBcUI7UUFDckIsaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQixzQkFBc0I7UUFDdEIseUJBQXlCO1FBQ3pCLGVBQWU7UUFDZixXQUFXO1FBQ1gsc0JBQXNCLEVBQUE7RUF4Q3RDO01BNENZLGtCQUFrQixFQUFBO0VBNUM5QjtNQStDWSxtQkFBbUI7TUFDbkIsV0FBVztNQUNYLGdCQUFnQjtNQUNoQixrQkFBa0IsRUFBQTtFQWxEOUI7SUF3RFEsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLHNCQUFzQixFQUFBO0VBNUQ5QjtNQThEWSxhQUFhO01BQ2IseUJBQXlCLEVBQUE7RUEvRHJDO0lBbUVRLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZiw2Q0FBNkMsRUFBQTtFQWhGckQ7TUFrRlksa0JBQWtCO01BQ2xCLFdBQVc7TUFDWCxZQUFZO01BQ1osVUFBVTtNQUNWLFdBQVc7TUFDWCxRQUFRO01BQ1IsWUFBWSxFQUFBO0VBeEZ4QjtNQTJGWSxZQUFZO01BQ1oseUJBQXlCO01BQ3pCLGFBQWEsRUFBQTtFQTdGekI7TUFnR1kseUJBQXlCO01BQ3pCLGNBQWMsRUFBQTtFQWpHMUI7UUFtR2dCLFlBQVk7UUFDWix5QkFBeUIsRUFBQTtFQXBHekM7TUF3R1ksZ0JBQWdCO01BQ2hCLHFCQUFxQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkLXN0eWxlcy9mb3Jtcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XG4gICAgbWFyZ2luOiAwcHggMTVweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZTZlY2YwO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTNweDtcbiAgICBzZWN0aW9uIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmM2Y1Zjg7XG4gICAgICAgIGgzLCBoNCB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogaGVsdmV0aWNhO1xuICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB9XG4gICAgICAgID4gc2VjdGlvbiB7XG4gICAgICAgICAgICBoNCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaGVhZGVyIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgLmJ1dHRvblJpZ2h0cyB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogLTFweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAwcHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTZlY2YwO1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjZTZlY2YwO1xuICAgICAgICB9XG4gICAgICAgIC5pbnB1dFJvdyB7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMHB4O1xuICAgICAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyNSU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBoZWx2ZXRpY2E7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5jb21wb3NlZEJsb2NrIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmOWZhZmM7XG4gICAgICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxNjBweCk7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIGlucHV0W3R5cGU9dGV4dF0sIGlucHV0W3R5cGU9bnVtYmVyXSwgdGV4dGFyZWF7XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYmVmZjM7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICY6aG92ZXIsICY6Zm9jdXN7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2FhZTNmZjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBidXR0b24ge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgZm9udC1mYW1pbHk6IGhlbHZldGljYTtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM3YmQzZmY7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbjogMTVweCBhdXRvO1xuICAgICAgICBjb2xvcjogIzdiZDNmZjtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycywgYmFja2dyb3VuZC1jb2xvciAwLjJzO1xuICAgICAgICAmLnJpZ2h0QnV0dG9ue1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICByaWdodDogN3B4O1xuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICB0b3A6IDZweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgfVxuICAgICAgICAmOmhvdmVyLCAmOmFjdGl2ZSwgJjpmb2N1cyB7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2JkM2ZmO1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAmLnJlZHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZjdiN2I7XG4gICAgICAgICAgICBjb2xvcjogI2ZmN2I3YjtcbiAgICAgICAgICAgICY6aG92ZXIsICY6YWN0aXZlLCAmOmZvY3VzIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmN2I3YjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmLmlubGluZSB7XG4gICAgICAgICAgICBtYXJnaW46IDE1cHggNXB4O1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/shared-styles/playground-response.scss":
/*!********************************************************!*\
  !*** ./src/app/shared-styles/playground-response.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#response {\n  max-height: calc(100% - 140px);\n  overflow: auto; }\n  #response .url {\n    display: block;\n    margin: 15px;\n    padding: 5px;\n    background: #f9fafc;\n    border: 1px solid gray;\n    font-family: helvetica;\n    font-weight: 100;\n    color: gray; }\n  #response .url span {\n      font-weight: bold; }\n  #response code {\n    display: block;\n    margin: 15px;\n    background: #e4f7e4;\n    border: 1px solid #b0d2b0;\n    padding: 10px;\n    position: relative;\n    margin-top: 20px;\n    overflow: auto; }\n  #response code:after {\n      content: 'Response Body';\n      display: block;\n      position: absolute;\n      top: -20px;\n      left: 3px;\n      font-family: helvetica;\n      font-size: 10px;\n      border: 1px solid #b0d2b0;\n      border-bottom: 0px;\n      padding: 3px;\n      background-color: #fbfbfb; }\n  #response code.error {\n      background: #f7e4e4;\n      border: 1px solid #d2b0b0; }\n  #response code.error:after {\n        border: 1px solid #d2b0b0; }\n  #response .responseProcessed {\n    display: block;\n    margin: 15px;\n    background: #f3f3f3;\n    border: 1px solid #cecece;\n    padding: 10px;\n    position: relative;\n    margin-top: 40px; }\n  #response .responseProcessed:after {\n      content: 'Response Processed';\n      display: block;\n      position: absolute;\n      top: -20px;\n      left: 3px;\n      font-family: helvetica;\n      font-size: 10px;\n      border: 1px solid #cecece;\n      border-bottom: 0px;\n      padding: 3px;\n      background-color: white; }\n  #response .responseProcessed label {\n      font-weight: bolder;\n      display: inline-block;\n      text-align: right;\n      margin-right: 15px;\n      vertical-align: middle; }\n  #response .responseProcessed .dataContent {\n      display: inline-block; }\n  #response .responseProcessed .dataTemplate {\n      width: calc(100% - 16px);\n      height: 200px;\n      overflow: auto;\n      background: white;\n      padding: 8px;\n      word-wrap: break-word; }\n  #response .responseProcessed img {\n      width: 100px;\n      border-radius: 30px;\n      vertical-align: middle; }\n  #response .responseProcessed .copy {\n      width: 100%;\n      position: relative; }\n  #response .responseProcessed .copy img {\n        width: 30px;\n        position: absolute;\n        right: 20px;\n        top: -5px;\n        background: white;\n        border-radius: 4px;\n        box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.25);\n        cursor: pointer; }\n  #response button {\n    margin: 0 auto;\n    display: block;\n    border: 1px solid #b0d2b0;\n    font-family: helvetica;\n    border-radius: 5px;\n    text-transform: uppercase;\n    color: #b0d2b0;\n    cursor: pointer;\n    font-size: 16px;\n    width: 250px;\n    padding: 10px; }\n  #response button:hover {\n      color: white;\n      background: #b0d2b0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NvZHkvcmVwb3Mvc29iaW8vc3JjL2FwcC9zaGFyZWQtc3R5bGVzL3BsYXlncm91bmQtcmVzcG9uc2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUE4QjtFQUM5QixjQUFjLEVBQUE7RUFGbEI7SUFLUSxjQUFjO0lBQ2QsWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsV0FBVyxFQUFBO0VBWm5CO01BY1ksaUJBQWlCLEVBQUE7RUFkN0I7SUFtQlEsY0FBYztJQUNkLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGNBQWMsRUFBQTtFQTFCdEI7TUE0Qlksd0JBQXdCO01BQ3hCLGNBQWM7TUFDZCxrQkFBa0I7TUFDbEIsVUFBVTtNQUNWLFNBQVM7TUFDVCxzQkFBc0I7TUFDdEIsZUFBZTtNQUNmLHlCQUF5QjtNQUN6QixrQkFBa0I7TUFDbEIsWUFBWTtNQUNaLHlCQUF5QixFQUFBO0VBdENyQztNQXlDWSxtQkFBbUI7TUFDbkIseUJBQXlCLEVBQUE7RUExQ3JDO1FBNENnQix5QkFBeUIsRUFBQTtFQTVDekM7SUFtRFEsY0FBYztJQUNkLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsZ0JBQWdCLEVBQUE7RUF6RHhCO01BMkRZLDZCQUE2QjtNQUM3QixjQUFjO01BQ2Qsa0JBQWtCO01BQ2xCLFVBQVU7TUFDVixTQUFTO01BQ1Qsc0JBQXNCO01BQ3RCLGVBQWU7TUFDZix5QkFBeUI7TUFDekIsa0JBQWtCO01BQ2xCLFlBQVk7TUFDWix1QkFBdUIsRUFBQTtFQXJFbkM7TUF3RVksbUJBQW1CO01BQ25CLHFCQUFxQjtNQUNyQixpQkFBaUI7TUFDakIsa0JBQWtCO01BQ2xCLHNCQUFzQixFQUFBO0VBNUVsQztNQStFWSxxQkFBcUIsRUFBQTtFQS9FakM7TUFrRlksd0JBQXdCO01BQ3hCLGFBQWE7TUFDYixjQUFjO01BQ2QsaUJBQWlCO01BQ2pCLFlBQVk7TUFDWixxQkFBcUIsRUFBQTtFQXZGakM7TUEwRlksWUFBWTtNQUNaLG1CQUFtQjtNQUNuQixzQkFBc0IsRUFBQTtFQTVGbEM7TUErRlksV0FBVztNQUNYLGtCQUFrQixFQUFBO0VBaEc5QjtRQWtHZ0IsV0FBVztRQUNYLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gsU0FBUztRQUNULGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsK0NBQStDO1FBQy9DLGVBQWUsRUFBQTtFQXpHL0I7SUErR1EsY0FBYztJQUNkLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGVBQWU7SUFDZixlQUFlO0lBQ2YsWUFBWTtJQUNaLGFBQWEsRUFBQTtFQXpIckI7TUEySFksWUFBWTtNQUNaLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkLXN0eWxlcy9wbGF5Z3JvdW5kLXJlc3BvbnNlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcmVzcG9uc2Uge1xuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwJSAtIDE0MHB4KTtcbiAgICBvdmVyZmxvdzogYXV0bztcblxuICAgIC51cmwge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luOiAxNXB4O1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmOWZhZmM7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBoZWx2ZXRpY2E7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29kZSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW46IDE1cHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNlNGY3ZTQ7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiMGQyYjA7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgICY6YWZ0ZXJ7XG4gICAgICAgICAgICBjb250ZW50OiAnUmVzcG9uc2UgQm9keSc7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogLTIwcHg7XG4gICAgICAgICAgICBsZWZ0OiAzcHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogaGVsdmV0aWNhO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2IwZDJiMDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDNweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYmZiZmI7XG4gICAgICAgIH1cbiAgICAgICAgJi5lcnJvciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjdlNGU0O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2QyYjBiMDtcbiAgICAgICAgICAgICY6YWZ0ZXJ7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2QyYjBiMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgIFxuICAgIH1cblxuICAgIC5yZXNwb25zZVByb2Nlc3NlZCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW46IDE1cHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmM2YzZjM7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZWNlY2U7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICAgICAgJjphZnRlcntcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdSZXNwb25zZSBQcm9jZXNzZWQnO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IC0yMHB4O1xuICAgICAgICAgICAgbGVmdDogM3B4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IGhlbHZldGljYTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZWNlY2U7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAzcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICB9XG4gICAgICAgIC5kYXRhQ29udGVudCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgLmRhdGFUZW1wbGF0ZSB7XG4gICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMTZweCk7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICAgICAgfVxuICAgICAgICBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIH1cbiAgICAgICAgLmNvcHkge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICByaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICB0b3A6IC01cHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IDFweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2IwZDJiMDtcbiAgICAgICAgZm9udC1mYW1pbHk6IGhlbHZldGljYTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBjb2xvcjogI2IwZDJiMDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjYjBkMmIwO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: true,
    endpoint: 'https://your-sobio-api-url',
    version: 'v1'
};


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
    production: false,
    endpoint: 'http://127.0.0.1:3000',
    version: 'v1'
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/cody/repos/sobio/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map