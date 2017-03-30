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

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * UniversalPassthrough browser version - swap server element w/ browser element
 */
var core_1 = __webpack_require__(1);
var PassthroughRegistry = PassthroughRegistry_1 = (function () {
    function PassthroughRegistry() {
    }
    /**
     * Collenct the server elements
     */
    PassthroughRegistry.getServerElements = function () {
        var serverElements = new Map();
        var serverElementsArr = [].slice
            .call(document.querySelectorAll('[universalpassthrough]'));
        serverElementsArr.forEach(function (el) {
            // has universalpassthrough attr and an id w/ suffix '-server'
            if (el.id.match(/-server?/i)) {
                var browserKey = el.id.replace('-server', '-browser');
                serverElements.set(browserKey, el);
            }
        });
        return serverElements;
    };
    /**
     * Initialize the registry with the server elements
     */
    PassthroughRegistry.init = function () {
        PassthroughRegistry_1.serverElements = PassthroughRegistry_1.getServerElements();
    };
    /**
     * Check if the browser element is already registered
     */
    PassthroughRegistry.prototype.isRegistered = function (id) {
        return PassthroughRegistry_1.browserElements.has(id);
    };
    /**
     * Register the browser element
     * Replace it with corresponding server element if found
     */
    PassthroughRegistry.prototype.replaceElement = function (browserId, el) {
        if (PassthroughRegistry_1.serverElements.has(browserId)) {
            var serverEl_1 = PassthroughRegistry_1.serverElements.get(browserId);
            if (this.isElement(el) && this.isElement(el.parentNode) && this.isElement(serverEl_1)) {
                window.requestAnimationFrame(function () {
                    var browserElement = serverEl_1.cloneNode(true);
                    el.parentNode.replaceChild(browserElement, el);
                    PassthroughRegistry_1.serverElements.delete(browserId);
                });
            }
        }
    };
    /**
     * Removes the element from DOM
     */
    PassthroughRegistry.prototype.detach = function (id, el) {
        var serverEl = PassthroughRegistry_1.serverElements.get(id);
        el.removeChild(serverEl);
    };
    /**
     * Adds the element to DOM
     */
    PassthroughRegistry.prototype.reattach = function (id, el) {
        var serverEl = PassthroughRegistry_1.serverElements.get(id);
        el.appendChild(serverEl);
    };
    PassthroughRegistry.prototype.isElement = function (el) {
        return (el != null)
            && (typeof el === 'object')
            && (el.nodeType === Node.ELEMENT_NODE)
            && (typeof el.style === 'object')
            && (typeof el.ownerDocument === 'object');
    };
    return PassthroughRegistry;
}());
PassthroughRegistry.serverElements = new Map();
PassthroughRegistry.browserElements = new Map();
PassthroughRegistry = PassthroughRegistry_1 = __decorate([
    core_1.Injectable()
], PassthroughRegistry);
exports.PassthroughRegistry = PassthroughRegistry;
var PassthroughRegistry_1;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@angular/core");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var passthrough_registry_browser_1 = __webpack_require__(0);
var UniversalPassthrough = (function () {
    function UniversalPassthrough(id, passthroughRegistry, elementRef, cdRef) {
        this.id = id;
        this.passthroughRegistry = passthroughRegistry;
        this.elementRef = elementRef;
        this.cdRef = cdRef;
        if (this.passthroughRegistry.isRegistered(id)) {
            this.passthroughRegistry.reattach(id, this.elementRef.nativeElement);
        }
        else {
            this.passthroughRegistry.replaceElement(id, this.elementRef.nativeElement);
        }
        cdRef.detach();
    }
    UniversalPassthrough.prototype.ngOnDestroy = function () {
        this.passthroughRegistry.detach(this.id, this.elementRef.nativeElement);
    };
    return UniversalPassthrough;
}());
UniversalPassthrough = __decorate([
    core_1.Directive({
        selector: '[universalPassthrough]'
    }),
    __param(0, core_1.Attribute('id')),
    __metadata("design:paramtypes", [String, passthrough_registry_browser_1.PassthroughRegistry,
        core_1.ElementRef,
        core_1.ChangeDetectorRef])
], UniversalPassthrough);
exports.UniversalPassthrough = UniversalPassthrough;


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
var core_1 = __webpack_require__(1);
var passthrough_registry_browser_1 = __webpack_require__(0);
var passthrough_directive_browser_1 = __webpack_require__(2);
var UniversalPassthroughModule = (function () {
    function UniversalPassthroughModule() {
    }
    return UniversalPassthroughModule;
}());
UniversalPassthroughModule = __decorate([
    core_1.NgModule({
        providers: [
            passthrough_registry_browser_1.PassthroughRegistry
        ],
        declarations: [
            passthrough_directive_browser_1.UniversalPassthrough
        ],
        exports: [
            passthrough_directive_browser_1.UniversalPassthrough
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
__export(__webpack_require__(2));
__export(__webpack_require__(3));


/***/ })
/******/ ])));