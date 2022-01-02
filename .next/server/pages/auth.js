"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/auth";
exports.ids = ["pages/auth"];
exports.modules = {

/***/ "./pages/auth.js":
/*!***********************!*\
  !*** ./pages/auth.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/compat/app */ \"firebase/compat/app\");\n/* harmony import */ var react_firebaseui_StyledFirebaseAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-firebaseui/StyledFirebaseAuth */ \"react-firebaseui/StyledFirebaseAuth\");\n/* harmony import */ var react_firebaseui_StyledFirebaseAuth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_firebaseui_StyledFirebaseAuth__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var firebase_compat_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/compat/auth */ \"firebase/compat/auth\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__, firebase_compat_auth__WEBPACK_IMPORTED_MODULE_4__]);\n([firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__, firebase_compat_auth__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);\n\n\n\n\n\nconst clientCredentials = {\n    apiKey: \"AIzaSyDsTtpxfhD9_4XjYkkFKEL_KO_aRbqEPxY\",\n    authDomain: \"nextgame-8b6e5.firebaseapp.com\",\n    databaseURL: \"https://nextgame-8b6e5-default-rtdb.asia-southeast1.firebasedatabase.app\",\n    projectId: \"nextgame-8b6e5\",\n    storageBucket: \"nextgame-8b6e5.appspot.com\",\n    messagingSenderId: \"37644482862\",\n    appId: \"1:37644482862:web:26b1e67712bb7f2b3162bf\"\n};\nfirebase_compat_app__WEBPACK_IMPORTED_MODULE_2__[\"default\"].initializeApp(clientCredentials);\nconst firebaseAuthConfig = {\n    signInFlow: 'popup',\n    // Auth providers\n    // https://github.com/firebase/firebaseui-web#configure-oauth-providers\n    signInOptions: [\n        {\n            provider: firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__[\"default\"].auth.EmailAuthProvider.PROVIDER_ID,\n            requireDisplayName: true\n        },\n        // add additional auth flows below\n        firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__[\"default\"].auth.GoogleAuthProvider.PROVIDER_ID, \n    ],\n    signInSuccessUrl: '/'\n};\nconst auth = ()=>{\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        __source: {\n            fileName: \"/mnt/c/code/web_design/Next/pages/auth.js\",\n            lineNumber: 32,\n            columnNumber: 9\n        },\n        __self: undefined,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((react_firebaseui_StyledFirebaseAuth__WEBPACK_IMPORTED_MODULE_3___default()), {\n            uiConfig: firebaseAuthConfig,\n            firebaseAuth: firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__[\"default\"].auth(),\n            __source: {\n                fileName: \"/mnt/c/code/web_design/Next/pages/auth.js\",\n                lineNumber: 33,\n                columnNumber: 13\n            },\n            __self: undefined\n        })\n    }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (auth);\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hdXRoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUI7QUFDaUI7QUFDMEI7QUFDdkM7QUFDN0IsS0FBSyxDQUFDRyxpQkFBaUIsR0FBRyxDQUFDO0lBQ3ZCQyxNQUFNLEVBQUVDLHlDQUF3QztJQUNoREcsVUFBVSxFQUFFSCxnQ0FBNEM7SUFDeERLLFdBQVcsRUFBRUwsMEVBQTZDO0lBQzFETyxTQUFTLEVBQUVQLGdCQUEyQztJQUN0RFMsYUFBYSxFQUFFVCw0QkFBK0M7SUFDOURXLGlCQUFpQixFQUFFWCxhQUFvRDtJQUN2RWEsS0FBSyxFQUFFYiwwQ0FBdUM7QUFDbEQsQ0FBQztBQUNESix5RUFBc0IsQ0FBQ0UsaUJBQWlCO0FBQ3hDLEtBQUssQ0FBQ2tCLGtCQUFrQixHQUFHLENBQUM7SUFDeEJDLFVBQVUsRUFBRSxDQUFPO0lBQ25CLEVBQWlCO0lBQ2pCLEVBQXVFO0lBQ3ZFQyxhQUFhLEVBQUUsQ0FBQztRQUNaLENBQUM7WUFDR0MsUUFBUSxFQUFFdkIsOEZBQTJDO1lBQ3JEMkIsa0JBQWtCLEVBQUUsSUFBSTtRQUM1QixDQUFDO1FBQ0QsRUFBa0M7UUFDbEMzQiwrRkFBNEM7SUFDaEQsQ0FBQztJQUNENkIsZ0JBQWdCLEVBQUUsQ0FBRztBQUN6QixDQUFDO0FBQ0QsS0FBSyxDQUFDTCxJQUFJLE9BQVMsQ0FBQztJQUVoQixNQUFNLHNFQUNETSxDQUFHOzs7Ozs7O3VGQUNDN0IsNEVBQWtCO1lBQ1g4QixRQUFRLEVBQUVYLGtCQUFrQjtZQUM1QlksWUFBWSxFQUFFaEMsZ0VBQWE7Ozs7Ozs7OztBQUkvQyxDQUFDO0FBRUQsaUVBQWV3QixJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2FtZS8uL3BhZ2VzL2F1dGguanM/ZGY1NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZS9jb21wYXQvYXBwJ1xyXG5pbXBvcnQgU3R5bGVkRmlyZWJhc2VBdXRoIGZyb20gJ3JlYWN0LWZpcmViYXNldWkvU3R5bGVkRmlyZWJhc2VBdXRoJ1xyXG5pbXBvcnQgJ2ZpcmViYXNlL2NvbXBhdC9hdXRoJ1xyXG5jb25zdCBjbGllbnRDcmVkZW50aWFscyA9IHtcclxuICAgIGFwaUtleTogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfQVBJX0tFWSxcclxuICAgIGF1dGhEb21haW46IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX0FVVEhfRE9NQUlOLFxyXG4gICAgZGF0YWJhc2VVUkw6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX0RBVEFCQVNFX1VSTCxcclxuICAgIHByb2plY3RJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfUFJPSkVDVF9JRCxcclxuICAgIHN0b3JhZ2VCdWNrZXQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX1NUT1JBR0VfQlVDS0VULFxyXG4gICAgbWVzc2FnaW5nU2VuZGVySWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX01FU1NBR0lOR19TRU5ERVJfSUQsXHJcbiAgICBhcHBJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfQVBQX0lELFxyXG59XHJcbmZpcmViYXNlLmluaXRpYWxpemVBcHAoY2xpZW50Q3JlZGVudGlhbHMpXHJcbmNvbnN0IGZpcmViYXNlQXV0aENvbmZpZyA9IHtcclxuICAgIHNpZ25JbkZsb3c6ICdwb3B1cCcsXHJcbiAgICAvLyBBdXRoIHByb3ZpZGVyc1xyXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZpcmViYXNlL2ZpcmViYXNldWktd2ViI2NvbmZpZ3VyZS1vYXV0aC1wcm92aWRlcnNcclxuICAgIHNpZ25Jbk9wdGlvbnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHByb3ZpZGVyOiBmaXJlYmFzZS5hdXRoLkVtYWlsQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lELFxyXG4gICAgICAgICAgICByZXF1aXJlRGlzcGxheU5hbWU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyBhZGQgYWRkaXRpb25hbCBhdXRoIGZsb3dzIGJlbG93XHJcbiAgICAgICAgZmlyZWJhc2UuYXV0aC5Hb29nbGVBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQsXHJcbiAgICBdLFxyXG4gICAgc2lnbkluU3VjY2Vzc1VybDogJy8nLFxyXG59XHJcbmNvbnN0IGF1dGggPSAoKSA9PiB7XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPFN0eWxlZEZpcmViYXNlQXV0aFxyXG4gICAgICAgICAgICAgICAgICAgIHVpQ29uZmlnPXtmaXJlYmFzZUF1dGhDb25maWd9XHJcbiAgICAgICAgICAgICAgICAgICAgZmlyZWJhc2VBdXRoPXtmaXJlYmFzZS5hdXRoKCl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhdXRoXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImZpcmViYXNlIiwiU3R5bGVkRmlyZWJhc2VBdXRoIiwiY2xpZW50Q3JlZGVudGlhbHMiLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfRklSRUJBU0VfQVBJX0tFWSIsImF1dGhEb21haW4iLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9BVVRIX0RPTUFJTiIsImRhdGFiYXNlVVJMIiwiTkVYVF9QVUJMSUNfRklSRUJBU0VfREFUQUJBU0VfVVJMIiwicHJvamVjdElkIiwiTkVYVF9QVUJMSUNfRklSRUJBU0VfUFJPSkVDVF9JRCIsInN0b3JhZ2VCdWNrZXQiLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9TVE9SQUdFX0JVQ0tFVCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiTkVYVF9QVUJMSUNfRklSRUJBU0VfTUVTU0FHSU5HX1NFTkRFUl9JRCIsImFwcElkIiwiTkVYVF9QVUJMSUNfRklSRUJBU0VfQVBQX0lEIiwiaW5pdGlhbGl6ZUFwcCIsImZpcmViYXNlQXV0aENvbmZpZyIsInNpZ25JbkZsb3ciLCJzaWduSW5PcHRpb25zIiwicHJvdmlkZXIiLCJhdXRoIiwiRW1haWxBdXRoUHJvdmlkZXIiLCJQUk9WSURFUl9JRCIsInJlcXVpcmVEaXNwbGF5TmFtZSIsIkdvb2dsZUF1dGhQcm92aWRlciIsInNpZ25JblN1Y2Nlc3NVcmwiLCJkaXYiLCJ1aUNvbmZpZyIsImZpcmViYXNlQXV0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/auth.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-firebaseui/StyledFirebaseAuth":
/*!******************************************************!*\
  !*** external "react-firebaseui/StyledFirebaseAuth" ***!
  \******************************************************/
/***/ ((module) => {

module.exports = require("react-firebaseui/StyledFirebaseAuth");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "firebase/compat/app":
/*!**************************************!*\
  !*** external "firebase/compat/app" ***!
  \**************************************/
/***/ ((module) => {

module.exports = import("firebase/compat/app");;

/***/ }),

/***/ "firebase/compat/auth":
/*!***************************************!*\
  !*** external "firebase/compat/auth" ***!
  \***************************************/
/***/ ((module) => {

module.exports = import("firebase/compat/auth");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/auth.js"));
module.exports = __webpack_exports__;

})();