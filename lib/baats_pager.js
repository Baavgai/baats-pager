(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define("baats", ["React"], factory);
	else if(typeof exports === 'object')
		exports["baats"] = factory(require("react"));
	else
		root["baats"] = factory(root["React"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/baats_pager.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/PageElement.tsx":
/*!*****************************!*\
  !*** ./src/PageElement.tsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst React = __webpack_require__(/*! react */ \"react\");\r\nconst PageLink_1 = __webpack_require__(/*! ./PageLink */ \"./src/PageLink.tsx\");\r\nconst types_1 = __webpack_require__(/*! ./types */ \"./src/types.ts\");\r\nconst NavSymbol = ({ navEnd }) => {\r\n    switch (navEnd) {\r\n        case types_1.NavEnds.First: return React.createElement(\"span\", { \"aria-hidden\": \"true\" }, \"\\u2039\");\r\n        case types_1.NavEnds.Prev: return React.createElement(\"span\", { \"aria-hidden\": \"true\" }, \"\\u00AB\");\r\n        case types_1.NavEnds.Next: return React.createElement(\"span\", { \"aria-hidden\": \"true\" }, \"\\u00BB\");\r\n        case types_1.NavEnds.Last: return React.createElement(\"span\", { \"aria-hidden\": \"true\" }, \"\\u203A\");\r\n        default: return React.createElement(React.Fragment, null);\r\n    }\r\n};\r\nexports.PageElement = (p) => {\r\n    if (isHidden(p)) {\r\n        return (React.createElement(React.Fragment, null));\r\n    }\r\n    else {\r\n        const value = getChangeNum(p);\r\n        return (React.createElement(\"li\", { className: !!value ? \"page-item\" : \"page-item disabled\" },\r\n            React.createElement(PageLink_1.PageLink, { onClick: value !== undefined ? () => p.onPageChange(value) : undefined },\r\n                React.createElement(NavSymbol, Object.assign({}, p)))));\r\n    }\r\n};\r\nfunction isHidden(p) {\r\n    const t = p.navEnd;\r\n    if ((t === types_1.NavEnds.First || t === types_1.NavEnds.Last) && p.hideFirstLast) {\r\n        return true;\r\n    }\r\n    else if (p.autoCollapse && getChangeNum(p)) {\r\n        const { firstPage, lastPage } = p;\r\n        return (firstPage === 1 && lastPage === p.totalPages);\r\n    }\r\n    else if (p.autoCollapse) {\r\n        return true;\r\n    }\r\n    return false;\r\n}\r\nfunction getChangeNum(p) {\r\n    const t = p.navEnd;\r\n    if (t === types_1.NavEnds.First && (p.currentPage !== 1)) {\r\n        return 1;\r\n    }\r\n    else if (t === types_1.NavEnds.Prev && (p.currentPage !== 1)) {\r\n        const { firstPage } = p;\r\n        const n = firstPage - 1;\r\n        return (n > 0) ? n : 1;\r\n    }\r\n    else if (t === types_1.NavEnds.Next && (p.currentPage !== p.totalPages)) {\r\n        const { lastPage } = p;\r\n        const n = lastPage + 1;\r\n        return (n < p.totalPages) ? n : p.totalPages;\r\n    }\r\n    else if (t === types_1.NavEnds.Last && (p.currentPage !== p.totalPages)) {\r\n        return p.totalPages;\r\n    }\r\n    else {\r\n        return undefined;\r\n    }\r\n}\r\n/*\r\nconst navName = (x: NavEnds) => {\r\n    switch (x) {\r\n        case NavEnds.First: return \"First\";\r\n        case NavEnds.Prev: return \"Previous\";\r\n        case NavEnds.Next: return \"Next\";\r\n        case NavEnds.Last: return \"Last\";\r\n        default:\r\n            return \"\";\r\n        // assertNever(navEnd);\r\n    }\r\n};\r\n*/\r\n\n\n//# sourceURL=webpack://baats/./src/PageElement.tsx?");

/***/ }),

/***/ "./src/PageLink.tsx":
/*!**************************!*\
  !*** ./src/PageLink.tsx ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst React = __webpack_require__(/*! react */ \"react\");\r\nexports.PageLink = p => React.createElement(\"button\", { className: \"page-link\", onClick: p.onClick }, p.children);\r\n\n\n//# sourceURL=webpack://baats/./src/PageLink.tsx?");

/***/ }),

/***/ "./src/Pages.tsx":
/*!***********************!*\
  !*** ./src/Pages.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst React = __webpack_require__(/*! react */ \"react\");\r\nconst PageLink_1 = __webpack_require__(/*! ./PageLink */ \"./src/PageLink.tsx\");\r\nconst Page = (p) => (p.page === p.currentPage)\r\n    ? React.createElement(\"li\", { key: p.page, className: \"page-item active\" },\r\n        React.createElement(PageLink_1.PageLink, null, p.page))\r\n    : React.createElement(\"li\", { key: p.page, className: \"page-item\" },\r\n        React.createElement(PageLink_1.PageLink, { onClick: () => p.onPageChange(p.page) }, p.page));\r\nconst pageNums = ({ firstPage, lastPage }) => \r\n// [1,2,3];\r\nnew Array(lastPage - firstPage + 1).fill(0).map((_, i) => i + firstPage);\r\nexports.Pages = (p) => React.createElement(React.Fragment, null, pageNums(p).map((page, i) => React.createElement(Page, Object.assign({ key: i }, p, { page: page }))));\r\n\n\n//# sourceURL=webpack://baats/./src/Pages.tsx?");

/***/ }),

/***/ "./src/baats_pager.tsx":
/*!*****************************!*\
  !*** ./src/baats_pager.tsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst React = __webpack_require__(/*! react */ \"react\");\r\nconst PageElement_1 = __webpack_require__(/*! ./PageElement */ \"./src/PageElement.tsx\");\r\nconst Pages_1 = __webpack_require__(/*! ./Pages */ \"./src/Pages.tsx\");\r\nconst types_1 = __webpack_require__(/*! ./types */ \"./src/types.ts\");\r\nconst SHOW_PAGES_DEFAULT = 5;\r\nfunction getItemRange(pageSize, totalItems, itemNum) {\r\n    const row = Math.floor((itemNum - 1) / pageSize);\r\n    const firstPage = (row * pageSize) + 1;\r\n    const lastPage = Math.min(totalItems, firstPage + pageSize - 1);\r\n    return { firstPage, lastPage };\r\n}\r\nconst getPageRange = (p) => getItemRange(p.showPages || SHOW_PAGES_DEFAULT, p.totalPages, p.currentPage);\r\nconst ItemsBlock = ({ itemCount }) => {\r\n    if (itemCount === undefined) {\r\n        return React.createElement(React.Fragment, null);\r\n    }\r\n    else {\r\n        const s = `${itemCount} item${itemCount === 1 ? \"\" : \"s\"}`;\r\n        return React.createElement(\"li\", { className: \"disabled\" },\r\n            React.createElement(\"a\", { href: \"#\", \"aria-label\": s }, s));\r\n    }\r\n};\r\nconst ViewComponent = (p) => React.createElement(\"ul\", { className: `pagination ${p.pagerClassName}`, style: p.pagerStyle },\r\n    React.createElement(PageElement_1.PageElement, Object.assign({}, p, { navEnd: types_1.NavEnds.First })),\r\n    React.createElement(PageElement_1.PageElement, Object.assign({}, p, { navEnd: types_1.NavEnds.Prev })),\r\n    React.createElement(Pages_1.Pages, Object.assign({}, p)),\r\n    React.createElement(PageElement_1.PageElement, Object.assign({}, p, { navEnd: types_1.NavEnds.Next })),\r\n    React.createElement(PageElement_1.PageElement, Object.assign({}, p, { navEnd: types_1.NavEnds.Last })),\r\n    React.createElement(ItemsBlock, Object.assign({}, p)));\r\nexports.Pager = (p) => React.createElement(ViewComponent, Object.assign({}, Object.assign(Object.assign({}, p), getPageRange(p))));\r\n\n\n//# sourceURL=webpack://baats/./src/baats_pager.tsx?");

/***/ }),

/***/ "./src/types.ts":
/*!**********************!*\
  !*** ./src/types.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar NavEnds;\r\n(function (NavEnds) {\r\n    NavEnds[NavEnds[\"First\"] = 0] = \"First\";\r\n    NavEnds[NavEnds[\"Prev\"] = 1] = \"Prev\";\r\n    NavEnds[NavEnds[\"Next\"] = 2] = \"Next\";\r\n    NavEnds[NavEnds[\"Last\"] = 3] = \"Last\";\r\n})(NavEnds = exports.NavEnds || (exports.NavEnds = {}));\r\n\n\n//# sourceURL=webpack://baats/./src/types.ts?");

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"commonjs":"react","commonjs2":"react","amd":"React","root":"React"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;\n\n//# sourceURL=webpack://baats/external_%7B%22commonjs%22:%22react%22,%22commonjs2%22:%22react%22,%22amd%22:%22React%22,%22root%22:%22React%22%7D?");

/***/ })

/******/ });
});