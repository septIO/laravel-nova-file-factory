(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("compiledTemplates", [], factory);
	else if(typeof exports === 'object')
		exports["compiledTemplates"] = factory();
	else
		root["compiledTemplates"] = factory();
})(window, function() {
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/templates sync recursive \\.(stub)$":
/*!**************************************!*\
  !*** ./src/templates sync \.(stub)$ ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./NovaResource.php.stub": "./src/templates/NovaResource.php.stub"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/templates sync recursive \\.(stub)$";

/***/ }),

/***/ "./src/templates/NovaResource.php.stub":
/*!*********************************************!*\
  !*** ./src/templates/NovaResource.php.stub ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<?php\r\n\r\nnamespace App\\Nova;\r\n\r\nuse Laravel\\Nova\\Fields;\r\nuse Illuminate\\Http\\Request;\r\nuse Laravel\\Nova\\Http\\Requests\\NovaRequest;\r\n\r\nclass ___MODEL___ extends Resource\r\n{\r\n    /**\r\n     * The model the resource corresponds to.\r\n     *\r\n     * @var string\r\n     */\r\n    public static $model = ___NAMESPACE_MODEL___;\r\n\r\n    /**\r\n     * The single value that should be used to represent the resource when being displayed.\r\n     *\r\n     * @var string\r\n     */\r\n    public static $title = 'id';\r\n\r\n    /**\r\n     * The columns that should be searched.\r\n     *\r\n     * @var array\r\n     */\r\n    public static $search = [\r\n        'id'\r\n    ];\r\n\r\n    /**\r\n     * Get the fields displayed by the resource.\r\n     *\r\n     * @param \\Illuminate\\Http\\Request $request\r\n     * @return array\r\n     */\r\n    public function fields(Request $request)\r\n    {\r\n        return [\r\n            ___NOVA_FIELDS_BLOCK___\r\n        ];\r\n    }\r\n\r\n    /**\r\n     * Get the cards available for the request.\r\n     *\r\n     * @param \\Illuminate\\Http\\Request $request\r\n     * @return array\r\n     */\r\n    public function cards(Request $request)\r\n    {\r\n        return [];\r\n    }\r\n\r\n    /**\r\n     * Get the filters available for the resource.\r\n     *\r\n     * @param \\Illuminate\\Http\\Request $request\r\n     * @return array\r\n     */\r\n    public function filters(Request $request)\r\n    {\r\n        return [];\r\n    }\r\n\r\n    /**\r\n     * Get the lenses available for the resource.\r\n     *\r\n     * @param \\Illuminate\\Http\\Request $request\r\n     * @return array\r\n     */\r\n    public function lenses(Request $request)\r\n    {\r\n        return [];\r\n    }\r\n\r\n    /**\r\n     * Get the actions available for the resource.\r\n     *\r\n     * @param \\Illuminate\\Http\\Request $request\r\n     * @return array\r\n     */\r\n    public function actions(Request $request)\r\n    {\r\n        return [];\r\n    }\r\n}\r\n");

/***/ }),

/***/ "./src/templates/index.js":
/*!********************************!*\
  !*** ./src/templates/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var context = __webpack_require__("./src/templates sync recursive \\.(stub)$");

var templates = {};
context.keys().forEach((filename)=>{
    var fileKey = filename.substring(2, filename.length - 5)
    templates[fileKey] = context(filename).default;
});

/* harmony default export */ __webpack_exports__["default"] = (templates);


/***/ }),

/***/ "./src/templates/index.js-exposed":
/*!****************************************!*\
  !*** ./src/templates/index.js-exposed ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["template"] = __webpack_require__(/*! -!./index.js */ "./src/templates/index.js");
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ 0:
/*!**************************************!*\
  !*** multi ./src/templates/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\laragon\www\nova-file-factory\src\templates\index.js */"./src/templates/index.js-exposed");


/***/ })

/******/ });
});