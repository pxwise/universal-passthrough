(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * UniversalPassthrough server version, no-op.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var PassthroughRegistry = (function () {
    function PassthroughRegistry() {
    }
    /**
     * Initialize the registry with the server elements
     */
    PassthroughRegistry.init = function () { };
    /**
     * Check if the browser element is already registered
     */
    PassthroughRegistry.prototype.isRegistered = function (id) { return true; };
    /**
     * Register the browser element
     * Replace it with corresponding server element if found
     */
    PassthroughRegistry.prototype.replaceElement = function (browserId, el) { };
    /**
     * Removes the element from DOM
     */
    PassthroughRegistry.prototype.detach = function (id, el) { };
    /**
     * Adds the element to DOM
     */
    PassthroughRegistry.prototype.reattach = function (id, el) { };
    return PassthroughRegistry;
}());
exports.PassthroughRegistry = PassthroughRegistry;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var UniversalPassthrough = (function () {
    function UniversalPassthrough() {
    }
    return UniversalPassthrough;
}());
UniversalPassthrough = __decorate([
    core_1.Directive({
        selector: '[universalPassthrough]'
    })
], UniversalPassthrough);
exports.UniversalPassthrough = UniversalPassthrough;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@angular/core");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var passthrough_registry_server_1 = __webpack_require__(0);
var passthrough_directive_server_1 = __webpack_require__(1);
var UniversalPassthroughModule = (function () {
    function UniversalPassthroughModule() {
    }
    return UniversalPassthroughModule;
}());
UniversalPassthroughModule = __decorate([
    core_1.NgModule({
        providers: [
            passthrough_registry_server_1.PassthroughRegistry
        ],
        declarations: [
            passthrough_directive_server_1.UniversalPassthrough
        ],
        exports: [
            passthrough_directive_server_1.UniversalPassthrough
        ]
    })
], UniversalPassthroughModule);
exports.UniversalPassthroughModule = UniversalPassthroughModule;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * UniversalPassthrough barrel.
 */
__export(__webpack_require__(0));
__export(__webpack_require__(1));
__export(__webpack_require__(3));


/***/ })
/******/ ])));