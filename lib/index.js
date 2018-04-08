(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["MangoKernel"] = factory();
	else
		root["MangoKernel"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function webpackUniversalModuleDefinition(root, factory) {
    if (( false ? 'undefined' : _typeof2(exports)) === 'object' && ( false ? 'undefined' : _typeof2(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof2(exports)) === 'object') exports["mangoHelper"] = factory();else root["mangoHelper"] = factory();
})(typeof self !== 'undefined' ? self : undefined, function () {
    return (/******/function (modules) {
            /******/ // The module cache
            /******/var installedModules = {};
            /******/
            /******/ // The require function
            /******/function __webpack_require__(moduleId) {
                /******/
                /******/ // Check if module is in cache
                /******/if (installedModules[moduleId]) {
                    /******/return installedModules[moduleId].exports;
                    /******/
                }
                /******/ // Create a new module (and put it into the cache)
                /******/var module = installedModules[moduleId] = {
                    /******/i: moduleId,
                    /******/l: false,
                    /******/exports: {}
                    /******/
                };
                /******/
                /******/ // Execute the module function
                /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                /******/
                /******/ // Flag the module as loaded
                /******/module.l = true;
                /******/
                /******/ // Return the exports of the module
                /******/return module.exports;
                /******/
            }
            /******/
            /******/
            /******/ // expose the modules object (__webpack_modules__)
            /******/__webpack_require__.m = modules;
            /******/
            /******/ // expose the module cache
            /******/__webpack_require__.c = installedModules;
            /******/
            /******/ // define getter function for harmony exports
            /******/__webpack_require__.d = function (exports, name, getter) {
                /******/if (!__webpack_require__.o(exports, name)) {
                    /******/Object.defineProperty(exports, name, {
                        /******/configurable: false,
                        /******/enumerable: true,
                        /******/get: getter
                        /******/
                    });
                    /******/
                }
                /******/
            };
            /******/
            /******/ // getDefaultExport function for compatibility with non-harmony modules
            /******/__webpack_require__.n = function (module) {
                /******/var getter = module && module.__esModule ?
                /******/function getDefault() {
                    return module['default'];
                } :
                /******/function getModuleExports() {
                    return module;
                };
                /******/__webpack_require__.d(getter, 'a', getter);
                /******/return getter;
                /******/
            };
            /******/
            /******/ // Object.prototype.hasOwnProperty.call
            /******/__webpack_require__.o = function (object, property) {
                return Object.prototype.hasOwnProperty.call(object, property);
            };
            /******/
            /******/ // __webpack_public_path__
            /******/__webpack_require__.p = "";
            /******/
            /******/ // Load entry module and return exports
            /******/return __webpack_require__(__webpack_require__.s = 3);
            /******/
        }([
        /* 0 */
        /***/function (module, exports, __webpack_require__) {
            /**
             * toxic-predicate-functions v0.1.5
             * (c) 2017 toxic-johann
             * Released under MIT
             */
            (function (global, factory) {
                true ? factory(exports) : typeof define === 'function' && define.amd ? define(['exports'], factory) : factory(global.toxicPredicateFunctions = {});
            })(this, function (exports) {
                'use strict';

                var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
                    return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
                } : function (obj) {
                    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
                };
                var asyncGenerator = function () {
                    function AwaitValue(value) {
                        this.value = value;
                    }
                    function AsyncGenerator(gen) {
                        var front, back;
                        function send(key, arg) {
                            return new Promise(function (resolve, reject) {
                                var request = {
                                    key: key,
                                    arg: arg,
                                    resolve: resolve,
                                    reject: reject,
                                    next: null
                                };
                                if (back) {
                                    back = back.next = request;
                                } else {
                                    front = back = request;
                                    resume(key, arg);
                                }
                            });
                        }
                        function resume(key, arg) {
                            try {
                                var result = gen[key](arg);
                                var value = result.value;
                                if (value instanceof AwaitValue) {
                                    Promise.resolve(value.value).then(function (arg) {
                                        resume("next", arg);
                                    }, function (arg) {
                                        resume("throw", arg);
                                    });
                                } else {
                                    settle(result.done ? "return" : "normal", result.value);
                                }
                            } catch (err) {
                                settle("throw", err);
                            }
                        }
                        function settle(type, value) {
                            switch (type) {
                                case "return":
                                    front.resolve({
                                        value: value,
                                        done: true
                                    });
                                    break;
                                case "throw":
                                    front.reject(value);
                                    break;
                                default:
                                    front.resolve({
                                        value: value,
                                        done: false
                                    });
                                    break;
                            }
                            front = front.next;
                            if (front) {
                                resume(front.key, front.arg);
                            } else {
                                back = null;
                            }
                        }
                        this._invoke = send;
                        if (typeof gen.return !== "function") {
                            this.return = undefined;
                        }
                    }
                    if (typeof Symbol === "function" && Symbol.asyncIterator) {
                        AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
                            return this;
                        };
                    }
                    AsyncGenerator.prototype.next = function (arg) {
                        return this._invoke("next", arg);
                    };
                    AsyncGenerator.prototype.throw = function (arg) {
                        return this._invoke("throw", arg);
                    };
                    AsyncGenerator.prototype.return = function (arg) {
                        return this._invoke("return", arg);
                    };
                    return {
                        wrap: function wrap(fn) {
                            return function () {
                                return new AsyncGenerator(fn.apply(this, arguments));
                            };
                        },
                        await: function _await(value) {
                            return new AwaitValue(value);
                        }
                    };
                }();
                /**
                 * to check whether the object is defined or not
                 */
                function defined(obj) {
                    return typeof obj !== 'undefined';
                }
                /**
                 * is void element or not ? Means it will return true when val is undefined or null
                 */
                function isVoid(obj) {
                    return obj === undefined || obj === null;
                }
                /**
                 * to check whether a variable is array
                 */
                function isArray(arr) {
                    return Array.isArray(arr);
                }
                /**
                 * is it a function or not
                 */
                function isFunction(obj) {
                    return typeof obj === 'function';
                }
                /**
                 * is it an object or not
                 */
                function isObject(obj) {
                    // incase of arrow function and array
                    return Object(obj) === obj && String(obj) === '[object Object]' && !isFunction(obj) && !isArray(obj);
                }
                /**
                 * to tell you if it's a real number
                 */
                function isNumber(obj) {
                    return typeof obj === 'number';
                }
                /**
                 * to tell you if the val can be transfer into number
                 */
                function isNumeric(obj) {
                    return !isArray(obj) && obj - Number.parseFloat(obj) + 1 >= 0;
                }
                /**
                 * is it an interget or not
                 */
                function isInteger(num) {
                    return Number.isInteger(num);
                }
                /**
                 * return true when the value is "", {}, [], 0, null, undefined, false.
                 */
                function isEmpty(obj) {
                    if (isArray(obj)) {
                        return obj.length === 0;
                    } else if (isObject(obj)) {
                        return Object.keys(obj).length === 0;
                    } else {
                        return !obj;
                    }
                }
                /**
                 * is it an event or not
                 */
                function isEvent(obj) {
                    return obj instanceof Event || (obj && obj.originalEvent) instanceof Event;
                }
                /**
                 * is it a blob
                 */
                function isBlob(obj) {
                    return obj instanceof Blob;
                }
                /**
                 * is it a file uploaded by user through file inpue
                 */
                function isFile(obj) {
                    return isBlob(obj) && isString(obj.name);
                }
                /**
                 * is it a date
                 */
                function isDate(obj) {
                    return Object.prototype.toString.call(obj) === '[object Date]';
                }
                /**
                 * is it a string
                 */
                function isString(str) {
                    return typeof str === 'string' || str instanceof String;
                }
                /**
                 * is Boolean or not
                 */
                function isBoolean(bool) {
                    return typeof bool === 'boolean';
                }
                /**
                 * is a promise or not
                 */
                function isPromise(obj) {
                    return !!obj && ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
                }
                /**
                 * is Primitive type or not, whick means it will return true when data is number/string/boolean/undefined/null
                 */
                function isPrimitive(val) {
                    return isVoid(val) || isBoolean(val) || isString(val) || isNumber(val);
                }
                /**
                 * is it an url, but this test require the url to have an protocol
                 */
                function isUrl(str) {
                    return isString(str) && !!str.match(/^((https?|ftp|rtsp|mms):\/\/)(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?(([0-9]{1,3}\.){3}[0-9]{1,3}|([0-9a-z_!~*'()-]+\.)*([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\.[a-z]{2,6}|localhost)(:[0-9]{1,4})?((\/?)|(\/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+\/?)$/i);
                }
                /**
                 * to test if a HTML node
                 */
                function isNode(obj) {
                    return !!((typeof Node === 'undefined' ? 'undefined' : _typeof(Node)) === 'object' ? obj instanceof Node : obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && typeof obj.nodeType === 'number' && typeof obj.nodeName === 'string');
                }
                /**
                 * to test if a HTML element
                 */
                function isElement(obj) {
                    return !!((typeof HTMLElement === 'undefined' ? 'undefined' : _typeof(HTMLElement)) === 'object' ? obj instanceof HTMLElement : obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && obj !== null && obj.nodeType === 1 && typeof obj.nodeName === 'string');
                }
                /**
                 * check if node A is node B's parent or not
                 */
                function isChildNode(parent, child) {
                    if (!isNode(parent) || !isNode(child)) {
                        return false;
                    }
                    return child.parentNode === parent;
                }
                /**
                 * check if node B is node A's posterrity or not
                 */
                function isPosterityNode(parent, child) {
                    if (!isNode(parent) || !isNode(child)) {
                        return false;
                    }
                    while (child.parentNode) {
                        child = child.parentNode;
                        if (child === parent) {
                            return true;
                        }
                    }
                    return false;
                }
                /**
                 * check if the string is an HTMLString
                 */
                function isHTMLString(str) {
                    return (/<[^>]+?>/.test(str)
                    );
                }
                /**
                 * check if is an error
                 */
                function isError(val) {
                    return val instanceof Error;
                }
                /**
                 * check if is an RegExp
                 */
                function isRegExp(val) {
                    return val instanceof RegExp;
                }
                exports.defined = defined;
                exports.isVoid = isVoid;
                exports.isArray = isArray;
                exports.isFunction = isFunction;
                exports.isObject = isObject;
                exports.isNumber = isNumber;
                exports.isNumeric = isNumeric;
                exports.isInteger = isInteger;
                exports.isEmpty = isEmpty;
                exports.isEvent = isEvent;
                exports.isBlob = isBlob;
                exports.isFile = isFile;
                exports.isDate = isDate;
                exports.isString = isString;
                exports.isBoolean = isBoolean;
                exports.isPromise = isPromise;
                exports.isPrimitive = isPrimitive;
                exports.isUrl = isUrl;
                exports.isNode = isNode;
                exports.isElement = isElement;
                exports.isChildNode = isChildNode;
                exports.isPosterityNode = isPosterityNode;
                exports.isHTMLString = isHTMLString;
                exports.isError = isError;
                exports.isRegExp = isRegExp;
                Object.defineProperty(exports, '__esModule', { value: true });
            });
            /***/
        },
        /* 1 */
        /***/function (module, exports, __webpack_require__) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.caf = exports.raf = exports.inBrowser = undefined;
            exports.makeArray = makeArray;
            exports.transObjectAttrIntoArray = transObjectAttrIntoArray;
            exports.runRejectableQueue = runRejectableQueue;
            exports.runStoppableQueue = runStoppableQueue;
            exports.decodeUTF8 = decodeUTF8;
            exports.debounce = debounce;
            exports.throttle = throttle;
            exports.strRepeat = strRepeat;
            exports.formatTime = formatTime;
            exports.appendCSS = appendCSS;
            exports.formatDate = formatDate;
            exports.getLocalStorage = getLocalStorage;
            exports.setLocalStorage = setLocalStorage;
            var _toxicPredicateFunctions = __webpack_require__(0);
            // **********************  judgement   ************************
            /**
             * check if the code running in browser environment (not include worker env)
             * @returns {Boolean}
             */
            var inBrowser = exports.inBrowser = typeof window !== 'undefined' && Object.prototype.toString.call(window) !== '[object Object]';
            // **********************  对象操作  ************************
            /**
             * 转变一个类数组对象为数组
             */
            // @flow
            function makeArray(obj) {
                return Array.from(obj);
            }
            /**
             * sort Object attributes by function
             * and transfer them into array
             * @param  {Object} obj Object form from numric
             * @param  {Function} fn sort function
             * @return {Array} the sorted attirbutes array
             */
            function transObjectAttrIntoArray(obj, fn) {
                if (fn === void 0) {
                    fn = function fn(a, b) {
                        return +a - +b;
                    };
                }
                return Object.keys(obj).sort(fn).reduce(function (order, key) {
                    return order.concat(obj[key]);
                }, []);
            }
            /**
             * run a queue one by one.If include function reject or return false it will stop
             * @param  {Array} queue the queue which we want to run one by one
             * @return {Promise}    tell us whether a queue run finished
             */
            function runRejectableQueue(queue) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                return new Promise(function (resolve, reject) {
                    var step = function step(index) {
                        if (index >= queue.length) {
                            resolve();
                            return;
                        }
                        var result = (0, _toxicPredicateFunctions.isFunction)(queue[index]) ? queue[index].apply(queue, args) : queue[index];
                        if (result === false) return reject('stop');
                        return Promise.resolve(result).then(function () {
                            return step(index + 1);
                        }).catch(function (err) {
                            return reject(err || 'stop');
                        });
                    };
                    step(0);
                });
            }
            /**
             * run a queue one by one.If include function return false it will stop
             * @param  {Array} queue the queue which we want to run one by one
             * @return {boolean} tell the user if the queue run finished
             */
            function runStoppableQueue(queue) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                var step = function step(index) {
                    if (index >= queue.length) {
                        return true;
                    }
                    var result = (0, _toxicPredicateFunctions.isFunction)(queue[index]) ? queue[index].apply(queue, args) : queue[index];
                    if (result === false) return false;
                    return step(++index);
                };
                return step(0);
            }
            function checkContinuation(uint8array, start, checkLength) {
                var array = uint8array;
                if (start + checkLength < array.length) {
                    while (checkLength--) {
                        if ((array[++start] & 0xC0) !== 0x80) {
                            return false;
                        }
                    }
                    return true;
                }
                return false;
            }
            // decodeUTF8
            function decodeUTF8(uint8array) {
                var out = [];
                var input = uint8array;
                var i = 0;
                var length = uint8array.length;
                while (i < length) {
                    if (input[i] < 0x80) {
                        out.push(String.fromCharCode(input[i]));
                        ++i;
                        continue;
                    } else if (input[i] < 0xC0) {
                        // fallthrough
                    } else if (input[i] < 0xE0) {
                        if (checkContinuation(input, i, 1)) {
                            var ucs4 = (input[i] & 0x1F) << 6 | input[i + 1] & 0x3F;
                            if (ucs4 >= 0x80) {
                                out.push(String.fromCharCode(ucs4 & 0xFFFF));
                                i += 2;
                                continue;
                            }
                        }
                    } else if (input[i] < 0xF0) {
                        if (checkContinuation(input, i, 2)) {
                            var ucs4 = (input[i] & 0xF) << 12 | (input[i + 1] & 0x3F) << 6 | input[i + 2] & 0x3F;
                            if (ucs4 >= 0x800 && (ucs4 & 0xF800) !== 0xD800) {
                                out.push(String.fromCharCode(ucs4 & 0xFFFF));
                                i += 3;
                                continue;
                            }
                        }
                    } else if (input[i] < 0xF8) {
                        if (checkContinuation(input, i, 3)) {
                            var ucs4 = (input[i] & 0x7) << 18 | (input[i + 1] & 0x3F) << 12 | (input[i + 2] & 0x3F) << 6 | input[i + 3] & 0x3F;
                            if (ucs4 > 0x10000 && ucs4 < 0x110000) {
                                ucs4 -= 0x10000;
                                out.push(String.fromCharCode(ucs4 >>> 10 | 0xD800));
                                out.push(String.fromCharCode(ucs4 & 0x3FF | 0xDC00));
                                i += 4;
                                continue;
                            }
                        }
                    }
                    out.push(String.fromCharCode(0xFFFD));
                    ++i;
                }
                return out.join('');
            }
            function debounce(func, wait, immediate) {
                // immediate默认为false
                var timeout, args, context, timestamp, result;
                var later = function later() {
                    // 当wait指定的时间间隔期间多次调用_.debounce返回的函数，则会不断更新timestamp的值，导致last < wait && last >= 0一直为true，从而不断启动新的计时器延时执行func
                    var last = new Date() - timestamp;
                    if (last < wait && last >= 0) {
                        timeout = setTimeout(later, wait - last);
                    } else {
                        timeout = null;
                        if (!immediate) {
                            result = func.apply(context, args);
                            if (!timeout) context = args = null;
                        }
                    }
                };
                return function () {
                    context = this;
                    args = arguments;
                    timestamp = new Date();
                    // 第一次调用该方法时，且immediate为true，则调用func函数
                    var callNow = immediate && !timeout;
                    // 在wait指定的时间间隔内首次调用该方法，则启动计时器定时调用func函数
                    if (!timeout) timeout = setTimeout(later, wait);
                    if (callNow) {
                        result = func.apply(context, args);
                        context = args = null;
                    }
                    return result;
                };
            }
            /**
             * 函数节流（控制函数执行频率）
             * @param  {Function} func 要节流控制的函数，必填
             * @return {Number}   wait 等待时长
             * @return {Object}   options {
             *                      leading<是否首次调用立即执行，否：则按wait设定等待到期后调用才执行>:false,
             *                      trailing<是否在调用并未到期时启用定时器，以保证一定执行>:true
             *                    }
             * @return {Object}   cxt 上下文对象
             * @return {Function}
             */
            function throttle(func, wait, options, cxt) {
                /* options的默认值
                 *  表示首次调用返回值方法时，会马上调用func；否则仅会记录当前时刻，当第二次调用的时间间隔超过wait时，才调用func。
                 *  options.leading = true;
                 * 表示当调用方法时，未到达wait指定的时间间隔，则启动计时器延迟调用func函数，若后续在既未达到wait指定的时间间隔和func函数又未被调用的情况下调用返回值方法，则被调用请求将被丢弃。
                 *  options.trailing = true;
                 * 注意：当options.trailing = false时，效果与上面的简单实现效果相同
                 */
                var context, args, result;
                var timeout = null;
                var previous = 0;
                if (!options) options = {};
                var later = function later() {
                    previous = options.leading === false ? 0 : new Date() - 0;
                    timeout = null;
                    result = func.apply(context, args);
                    if (!timeout) context = args = null;
                };
                wait = wait || 0;
                return function () {
                    var now = new Date();
                    if (!previous && options.leading === false) previous = now;
                    // 计算剩余时间
                    var remaining = wait - (now - previous);
                    if (cxt) {
                        context = cxt;
                    } else {
                        context = this;
                    }
                    args = arguments;
                    // 当到达wait指定的时间间隔，则调用func函数
                    // 精彩之处：按理来说remaining <= 0已经足够证明已经到达wait的时间间隔，但这里还考虑到假如客户端修改了系统时间则马上执行func函数。
                    if (remaining <= 0 || remaining > wait) {
                        // 由于setTimeout存在最小时间精度问题，因此会存在到达wait的时间间隔，但之前设置的setTimeout操作还没被执行，因此为保险起见，这里先清理setTimeout操作
                        if (timeout) {
                            clearTimeout(timeout);
                            timeout = null;
                        }
                        previous = now;
                        result = func.apply(context, args);
                        if (!timeout) context = args = null;
                    } else if (!timeout && options.trailing !== false) {
                        // options.trailing=true时，延时执行func函数
                        timeout = setTimeout(later, remaining);
                    }
                    return result;
                };
            }
            // requestAnimationFrame
            var raf = exports.raf = inBrowser && (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame) || function (cb) {
                return setTimeout(cb, 17);
            };
            // cancelAnimationFrame
            var caf = exports.caf = inBrowser && (window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.msCancelAnimationFrame || window.oCancelAnimationFrame) || function (id) {
                clearTimeout(id);
            };
            // 根据要求的位数，将9格式化为 09\009\0009...
            function strRepeat(num, bit) {
                var pBit = bit;
                num = "" + (num || '');
                var numLen = num.length;
                bit = (bit || numLen) - numLen;
                var paddingStr = bit > 0 ? num.repeat ? '0'.repeat(bit) : new Array(bit + 1).join('0') : '';
                return (paddingStr + num).slice(0, pBit);
            }
            // video 时间格式化
            function formatTime(time) {
                var hh = Math.floor(time / 3600);
                time = Math.floor(time % 3600);
                var mm = strRepeat(Math.floor(time / 60), 2);
                time = Math.floor(time % 60);
                var ss = strRepeat(time, 2);
                return hh >= 1 ? hh + ":" + mm + ":" + ss : mm + ":" + ss;
            }
            /**
             * 追加样式代码到head的style标签，不存在则创建
             * @param {String} cssText 样式文本
             * @return {HTMLElement}
             */
            function appendCSS(cssText) {
                var doc = document;
                var styleEl = doc.querySelector('style');
                if (!styleEl) {
                    styleEl = doc.createElement('style');
                    var header = doc.querySelector('head');
                    header && header.appendChild(styleEl);
                }
                styleEl.appendChild(doc.createTextNode(cssText));
                return styleEl;
            }
            /**
             * 格式化日期对象为：年-月-日 时:分:秒.毫秒
             * @param {Date} date Date日期对象
             * @param {String} pattern 要输出的日期格式，默认：`yyyy-MM-dd hh:mm:ss.i`
             * @return {String}
             */
            function formatDate(date, pattern) {
                if (date === void 0) {
                    date = new Date();
                }
                if (pattern === void 0) {
                    pattern = 'yyyy-MM-dd hh:mm:ss.i';
                }
                var year = date.getFullYear().toString();
                var fields = {
                    M: date.getMonth() + 1,
                    d: date.getDate(),
                    h: date.getHours(),
                    m: date.getMinutes(),
                    s: date.getSeconds(),
                    i: date.getMilliseconds()
                };
                pattern = pattern.replace(/(y+)/ig, function (_, yearPattern) {
                    return year.substr(4 - Math.min(4, yearPattern.length));
                });
                var _loop_1 = function _loop_1(i) {
                    pattern = pattern.replace(new RegExp('(' + i + '+)', 'g'), function (_, pattStr) {
                        return (fields[i] < 10 && pattStr.length > 1 ? '0' : '') + fields[i];
                    });
                };
                for (var i in fields) {
                    _loop_1(i);
                }
                return pattern;
            }
            /**
             * 读取本地存储的值（不支持localStorage则降级到cookie）
             * @param {String} key 目标数据key
             * @return {String}
             */
            function getLocalStorage(key) {
                try {
                    return window.localStorage.getItem(key);
                } catch (e) {
                    try {
                        var regRt = document.cookie.match(new RegExp('(^| )' + key + '=([^;]*)(;|$)'));
                        return (0, _toxicPredicateFunctions.isArray)(regRt) ? unescape(regRt[2]) : '';
                    } catch (e) {
                        return '';
                    }
                }
            }
            /**
             * 将指定key对应值写入本地存储（不支持localStorage则降级到cookie）
             * @param {String} key
             * @param {String} val
             * @return {String}
             */
            function setLocalStorage(key, val) {
                try {
                    window.localStorage.setItem(key, val);
                } catch (e) {
                    var expires = new Date();
                    // 默认存储300天
                    expires.setTime(expires.getTime() + 24 * 3600 * 1000 * 300);
                    try {
                        document.cookie = key + '=' + escape(val) + ';expires=' + expires.toUTCString() + ';path=/;';
                    } catch (e) {
                        console.error(e);
                    }
                }
            }
            /***/
        },
        /* 2 */
        /***/function (module, exports, __webpack_require__) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.CustEvent = undefined;
            var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
                return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
            } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
            };
            exports.emitEventCache = emitEventCache;
            exports.addEventCache = addEventCache;
            exports.removeEventCache = removeEventCache;
            var _toxicPredicateFunctions = __webpack_require__(0);
            /**
            * @module event
            * @author huzunjie
            * @description 自定义事件基础类
            */
            /* 缓存事件监听方法及包装，内部数据格式：
             * targetIndex_<type:'click|mouseup|done'>: [ [
             *   function(){ ... handler ... },
             *   function(){ ... handlerWrap ... handler.apply(target, arguments) ... },
             *   isOnce
             * ]]
             */
            var _evtListenerCache = Object.create(null);
            _evtListenerCache.count = 0;
            /**
             * 得到某对象的某事件类型对应的监听队列数组
             * @param  {Object}  target 发生事件的对象
             * @param {String} type 事件类型(这里的时间类型不只是名称，还是缓存标识，可以通过添加后缀来区分)
             * @return {Array}
             */
            function getEvtTypeCache(target, type) {
                var evtId = target.__evt_id;
                if (!evtId) {
                    /* 设置__evt_id不可枚举 */
                    Object.defineProperty(target, '__evt_id', {
                        writable: true,
                        enumerable: false,
                        configurable: true
                    });
                    /* 空对象初始化绑定索引 */
                    evtId = target.__evt_id = ++_evtListenerCache.count;
                }
                var typeCacheKey = evtId + '_' + type;
                var evtTypeCache = _evtListenerCache[typeCacheKey];
                if (!evtTypeCache) {
                    evtTypeCache = _evtListenerCache[typeCacheKey] = [];
                }
                return evtTypeCache;
            }
            /**
             * 触发事件监听方法
             * @param  {Object}  target 发生事件的对象
             * @param {String} type 事件类型
             * @param {Object} eventObj 触发事件时要传回的event对象
             * @return {undefined}
             */
            function emitEventCache(target, type, eventObj) {
                var evt = Object.create(null);
                evt.type = type;
                evt.target = target;
                if (eventObj) {
                    Object.assign(evt, (0, _toxicPredicateFunctions.isObject)(eventObj) ? eventObj : { data: eventObj });
                }
                getEvtTypeCache(target, type).forEach(function (item) {
                    (item[1] || item[0]).apply(target, [evt]);
                });
            }
            /**
             * 添加事件监听到缓存
             * @param  {Object}  target 发生事件的对象
             * @param {String} type 事件类型
             * @param {Function} handler 监听函数
             * @param {Boolean} isOnce 是否单次执行
             * @param {Function} handlerWrap
             * @return {undefined}
             */
            function addEventCache(target, type, handler, isOnce, handlerWrap) {
                if (isOnce === void 0) {
                    isOnce = false;
                }
                if ((0, _toxicPredicateFunctions.isFunction)(isOnce) && !handlerWrap) {
                    handlerWrap = isOnce;
                    isOnce = undefined;
                }
                var handlers = [handler, undefined, isOnce];
                if (isOnce && !handlerWrap) {
                    handlerWrap = function handlerWrap() {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        removeEventCache(target, type, handler, isOnce);
                        handler.apply(target, args);
                    };
                }
                if (handlerWrap) {
                    handlers[1] = handlerWrap;
                }
                getEvtTypeCache(target, type).push(handlers);
            }
            /**
             * 移除事件监听
             * @param  {Object}  target 发生事件的对象
             * @param {String} type 事件类型
             * @param {Function} handler 监听函数
             * @return {undefined}
             */
            function removeEventCache(target, type, handler, isOnce) {
                if (isOnce === void 0) {
                    isOnce = false;
                }
                var typeCache = getEvtTypeCache(target, type);
                if (handler || isOnce) {
                    /* 有指定 handler 则清除对应监听 */
                    var handlerId_1 = -1;
                    var handlerWrap_1;
                    typeCache.find(function (item, i) {
                        if ((!handler || item[0] === handler) && (!isOnce || item[2])) {
                            handlerId_1 = i;
                            handlerWrap_1 = item[1];
                            return true;
                        }
                    });
                    if (handlerId_1 !== -1) {
                        typeCache.splice(handlerId_1, 1);
                    }
                    return handlerWrap_1;
                } else {
                    /* 未指定 handler 则清除type对应的所有监听 */
                    typeCache.length = 0;
                }
            }
            /**
             * @class CustEvent
             * @description
             * Event 自定义事件类
             * 1. 可以使用不传参得到的实例作为eventBus使用
             * 2. 可以通过指定target，用多个实例操作同一target对象的事件管理
             * 3. 当设定target时，可以通过设置assign为true，来给target实现"on\once\off\emit"方法
             * @param  {Object}  target 发生事件的对象（空则默认为event实例）
             * @param  {Boolean}  assign 是否将"on\once\off\emit"方法实现到target对象上
             * @return {event}
             */
            var CustEvent = /** @class */function () {
                function CustEvent(target, assign) {
                    var _this = this;
                    /* 设置__target不可枚举 */
                    Object.defineProperty(this, '__target', {
                        writable: true,
                        enumerable: false,
                        configurable: true
                    });
                    this.__target = this;
                    if (target) {
                        if ((typeof target === 'undefined' ? 'undefined' : _typeof(target)) !== 'object') {
                            throw new Error('CusEvent target are not object');
                        }
                        this.__target = target;
                        /* 为target实现on\once\off\emit */
                        if (assign) {
                            ['on', 'once', 'off', 'emit'].forEach(function (mth) {
                                target[mth] = _this[mth];
                            });
                        }
                    }
                }
                /**
                 * 添加事件监听
                 * @param {String} type 事件类型
                 * @param {Function} handler 监听函数
                 * @param {Boolean} isOnce 单次监听类型
                 * @return {event}
                 */
                CustEvent.prototype.on = function (type, handler, isOnce) {
                    if (isOnce === void 0) {
                        isOnce = false;
                    }
                    addEventCache(this.__target, type, handler, isOnce);
                    return this;
                };
                /**
                 * 添加事件监听,并且只执行一次
                 * @param {String} type 事件类型
                 * @param {Function} handler 监听函数
                 * @return {event}
                 */
                CustEvent.prototype.once = function (type, handler) {
                    return this.on(type, handler, true);
                };
                /**
                 * 移除事件监听
                 * @param {String} type 事件类型
                 * @param {Function} handler 监听函数(不指定handler则清除type对应的所有事件监听)
                 * @param {Boolean} isOnce 单次监听类型
                 * @return {event}
                 */
                CustEvent.prototype.off = function (type, handler, isOnce) {
                    if (isOnce === void 0) {
                        isOnce = false;
                    }
                    removeEventCache(this.__target, type, handler, isOnce);
                    return this;
                };
                /**
                 * 触发事件监听函数
                 * @param {String} type 事件类型
                 * @return {event}
                 */
                CustEvent.prototype.emit = function (type, data) {
                    emitEventCache(this.__target, type, { data: data });
                    return this;
                };
                return CustEvent;
            }();
            exports.CustEvent = CustEvent;
            /***/
        },
        /* 3 */
        /***/function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(4);
            /***/
        },
        /* 4 */
        /***/function (module, exports, __webpack_require__) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var _toxicUtils = __webpack_require__(5);
            var ToxicUtils = _interopRequireWildcard(_toxicUtils);
            var _toxicPredicateFunctions = __webpack_require__(0);
            var Predicate = _interopRequireWildcard(_toxicPredicateFunctions);
            var _utils = __webpack_require__(1);
            var Util = _interopRequireWildcard(_utils);
            var _events = __webpack_require__(2);
            var Events = _interopRequireWildcard(_events);
            var _dom = __webpack_require__(6);
            var Dom = _interopRequireWildcard(_dom);
            var _log = __webpack_require__(7);
            var _log2 = _interopRequireDefault(_log);
            var _uaParserJs = __webpack_require__(8);
            var _uaParserJs2 = _interopRequireDefault(_uaParserJs);
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
            }
            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                    return obj;
                } else {
                    var newObj = {};
                    if (obj != null) {
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                        }
                    }
                    newObj.default = obj;
                    return newObj;
                }
            }
            var __assign = undefined && undefined.__assign || Object.assign || function (t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                    s = arguments[i];
                    for (var p in s) {
                        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                    }
                }
                return t;
            };
            // @flow
            exports.default = __assign({}, ToxicUtils, Predicate, Util, Events, Dom, { Log: _log2.default,
                UAParser: _uaParserJs2.default });
            /***/
        },
        /* 5 */
        /***/function (module, exports, __webpack_require__) {
            /**
             * toxic-utils v0.2.0
             * (c) 2017 toxic-johann
             * Released under MIT
             */
            (function (global, factory) {
                true ? factory(exports) : typeof define === 'function' && define.amd ? define(['exports'], factory) : factory(global.toxicUtils = {});
            })(this, function (exports) {
                'use strict';

                function unwrapExports(x) {
                    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
                }
                function createCommonjsModule(fn, module) {
                    return module = { exports: {} }, fn(module, module.exports), module.exports;
                }
                // 7.1.4 ToInteger
                var ceil = Math.ceil;
                var floor = Math.floor;
                var _toInteger = function _toInteger(it) {
                    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
                };
                // 7.2.1 RequireObjectCoercible(argument)
                var _defined = function _defined(it) {
                    if (it == undefined) throw TypeError("Can't call method on  " + it);
                    return it;
                };
                // true  -> String#at
                // false -> String#codePointAt
                var _stringAt = function _stringAt(TO_STRING) {
                    return function (that, pos) {
                        var s = String(_defined(that));
                        var i = _toInteger(pos);
                        var l = s.length;
                        var a, b;
                        if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
                        a = s.charCodeAt(i);
                        return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
                    };
                };
                var _library = true;
                var _global = createCommonjsModule(function (module) {
                    // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
                    var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self
                    // eslint-disable-next-line no-new-func
                    : Function('return this')();
                    if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
                });
                var _core = createCommonjsModule(function (module) {
                    var core = module.exports = { version: '2.5.1' };
                    if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
                });
                var _core_1 = _core.version;
                var _aFunction = function _aFunction(it) {
                    if (typeof it != 'function') throw TypeError(it + ' is not a function!');
                    return it;
                };
                // optional / simple context binding
                var _ctx = function _ctx(fn, that, length) {
                    _aFunction(fn);
                    if (that === undefined) return fn;
                    switch (length) {
                        case 1:
                            return function (a) {
                                return fn.call(that, a);
                            };
                        case 2:
                            return function (a, b) {
                                return fn.call(that, a, b);
                            };
                        case 3:
                            return function (a, b, c) {
                                return fn.call(that, a, b, c);
                            };
                    }
                    return function () /* ...args */{
                        return fn.apply(that, arguments);
                    };
                };
                var _isObject = function _isObject(it) {
                    return (typeof it === 'undefined' ? 'undefined' : _typeof2(it)) === 'object' ? it !== null : typeof it === 'function';
                };
                var _anObject = function _anObject(it) {
                    if (!_isObject(it)) throw TypeError(it + ' is not an object!');
                    return it;
                };
                var _fails = function _fails(exec) {
                    try {
                        return !!exec();
                    } catch (e) {
                        return true;
                    }
                };
                // Thank's IE8 for his funny defineProperty
                var _descriptors = !_fails(function () {
                    return Object.defineProperty({}, 'a', { get: function get() {
                            return 7;
                        } }).a != 7;
                });
                var document = _global.document;
                // typeof document.createElement is 'object' in old IE
                var is = _isObject(document) && _isObject(document.createElement);
                var _domCreate = function _domCreate(it) {
                    return is ? document.createElement(it) : {};
                };
                var _ie8DomDefine = !_descriptors && !_fails(function () {
                    return Object.defineProperty(_domCreate('div'), 'a', { get: function get() {
                            return 7;
                        } }).a != 7;
                });
                // 7.1.1 ToPrimitive(input [, PreferredType])
                // instead of the ES6 spec version, we didn't implement @@toPrimitive case
                // and the second argument - flag - preferred type is a string
                var _toPrimitive = function _toPrimitive(it, S) {
                    if (!_isObject(it)) return it;
                    var fn, val;
                    if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
                    if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) return val;
                    if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
                    throw TypeError("Can't convert object to primitive value");
                };
                var dP = Object.defineProperty;
                var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
                    _anObject(O);
                    P = _toPrimitive(P, true);
                    _anObject(Attributes);
                    if (_ie8DomDefine) try {
                        return dP(O, P, Attributes);
                    } catch (e) {/* empty */}
                    if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
                    if ('value' in Attributes) O[P] = Attributes.value;
                    return O;
                };
                var _objectDp = {
                    f: f
                };
                var _propertyDesc = function _propertyDesc(bitmap, value) {
                    return {
                        enumerable: !(bitmap & 1),
                        configurable: !(bitmap & 2),
                        writable: !(bitmap & 4),
                        value: value
                    };
                };
                var _hide = _descriptors ? function (object, key, value) {
                    return _objectDp.f(object, key, _propertyDesc(1, value));
                } : function (object, key, value) {
                    object[key] = value;
                    return object;
                };
                var PROTOTYPE = 'prototype';
                var $export = function $export(type, name, source) {
                    var IS_FORCED = type & $export.F;
                    var IS_GLOBAL = type & $export.G;
                    var IS_STATIC = type & $export.S;
                    var IS_PROTO = type & $export.P;
                    var IS_BIND = type & $export.B;
                    var IS_WRAP = type & $export.W;
                    var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
                    var expProto = exports[PROTOTYPE];
                    var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] : (_global[name] || {})[PROTOTYPE];
                    var key, own, out;
                    if (IS_GLOBAL) source = name;
                    for (key in source) {
                        // contains in native
                        own = !IS_FORCED && target && target[key] !== undefined;
                        if (own && key in exports) continue;
                        // export native or passed
                        out = own ? target[key] : source[key];
                        // prevent global pollution for namespaces
                        exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
                        // bind timers to global for call from export context
                        : IS_BIND && own ? _ctx(out, _global)
                        // wrap global constructors for prevent change them in library
                        : IS_WRAP && target[key] == out ? function (C) {
                            var F = function F(a, b, c) {
                                if (this instanceof C) {
                                    switch (arguments.length) {
                                        case 0:
                                            return new C();
                                        case 1:
                                            return new C(a);
                                        case 2:
                                            return new C(a, b);
                                    }
                                    return new C(a, b, c);
                                }
                                return C.apply(this, arguments);
                            };
                            F[PROTOTYPE] = C[PROTOTYPE];
                            return F;
                            // make static versions for prototype methods
                        }(out) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out;
                        // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
                        if (IS_PROTO) {
                            (exports.virtual || (exports.virtual = {}))[key] = out;
                            // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
                            if (type & $export.R && expProto && !expProto[key]) _hide(expProto, key, out);
                        }
                    }
                };
                // type bitmap
                $export.F = 1; // forced
                $export.G = 2; // global
                $export.S = 4; // static
                $export.P = 8; // proto
                $export.B = 16; // bind
                $export.W = 32; // wrap
                $export.U = 64; // safe
                $export.R = 128; // real proto method for `library`
                var _export = $export;
                var _redefine = _hide;
                var hasOwnProperty = {}.hasOwnProperty;
                var _has = function _has(it, key) {
                    return hasOwnProperty.call(it, key);
                };
                var _iterators = {};
                var toString = {}.toString;
                var _cof = function _cof(it) {
                    return toString.call(it).slice(8, -1);
                };
                // fallback for non-array-like ES3 and non-enumerable old V8 strings
                // eslint-disable-next-line no-prototype-builtins
                var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
                    return _cof(it) == 'String' ? it.split('') : Object(it);
                };
                // to indexed object, toObject with fallback for non-array-like ES3 strings
                var _toIobject = function _toIobject(it) {
                    return _iobject(_defined(it));
                };
                // 7.1.15 ToLength
                var min = Math.min;
                var _toLength = function _toLength(it) {
                    return it > 0 ? min(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
                };
                var max = Math.max;
                var min$1 = Math.min;
                var _toAbsoluteIndex = function _toAbsoluteIndex(index, length) {
                    index = _toInteger(index);
                    return index < 0 ? max(index + length, 0) : min$1(index, length);
                };
                // false -> Array#indexOf
                // true  -> Array#includes
                var _arrayIncludes = function _arrayIncludes(IS_INCLUDES) {
                    return function ($this, el, fromIndex) {
                        var O = _toIobject($this);
                        var length = _toLength(O.length);
                        var index = _toAbsoluteIndex(fromIndex, length);
                        var value;
                        // Array#includes uses SameValueZero equality algorithm
                        // eslint-disable-next-line no-self-compare
                        if (IS_INCLUDES && el != el) while (length > index) {
                            value = O[index++];
                            // eslint-disable-next-line no-self-compare
                            if (value != value) return true;
                            // Array#indexOf ignores holes, Array#includes - not
                        } else for (; length > index; index++) {
                            if (IS_INCLUDES || index in O) {
                                if (O[index] === el) return IS_INCLUDES || index || 0;
                            }
                        }return !IS_INCLUDES && -1;
                    };
                };
                var SHARED = '__core-js_shared__';
                var store = _global[SHARED] || (_global[SHARED] = {});
                var _shared = function _shared(key) {
                    return store[key] || (store[key] = {});
                };
                var id = 0;
                var px = Math.random();
                var _uid = function _uid(key) {
                    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
                };
                var shared = _shared('keys');
                var _sharedKey = function _sharedKey(key) {
                    return shared[key] || (shared[key] = _uid(key));
                };
                var arrayIndexOf = _arrayIncludes(false);
                var IE_PROTO$1 = _sharedKey('IE_PROTO');
                var _objectKeysInternal = function _objectKeysInternal(object, names) {
                    var O = _toIobject(object);
                    var i = 0;
                    var result = [];
                    var key;
                    for (key in O) {
                        if (key != IE_PROTO$1) _has(O, key) && result.push(key);
                    } // Don't enum bug & hidden keys
                    while (names.length > i) {
                        if (_has(O, key = names[i++])) {
                            ~arrayIndexOf(result, key) || result.push(key);
                        }
                    }return result;
                };
                // IE 8- don't enum bug keys
                var _enumBugKeys = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');
                // 19.1.2.14 / 15.2.3.14 Object.keys(O)
                var _objectKeys = Object.keys || function keys(O) {
                    return _objectKeysInternal(O, _enumBugKeys);
                };
                var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
                    _anObject(O);
                    var keys = _objectKeys(Properties);
                    var length = keys.length;
                    var i = 0;
                    var P;
                    while (length > i) {
                        _objectDp.f(O, P = keys[i++], Properties[P]);
                    }return O;
                };
                var document$1 = _global.document;
                var _html = document$1 && document$1.documentElement;
                // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
                var IE_PROTO = _sharedKey('IE_PROTO');
                var Empty = function Empty() {};
                var PROTOTYPE$1 = 'prototype';
                // Create object with fake `null` prototype: use iframe Object with cleared prototype
                var _createDict = function createDict() {
                    // Thrash, waste and sodomy: IE GC bug
                    var iframe = _domCreate('iframe');
                    var i = _enumBugKeys.length;
                    var lt = '<';
                    var gt = '>';
                    var iframeDocument;
                    iframe.style.display = 'none';
                    _html.appendChild(iframe);
                    iframe.src = 'javascript:'; // eslint-disable-line no-script-url
                    // createDict = iframe.contentWindow.Object;
                    // html.removeChild(iframe);
                    iframeDocument = iframe.contentWindow.document;
                    iframeDocument.open();
                    iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
                    iframeDocument.close();
                    _createDict = iframeDocument.F;
                    while (i--) {
                        delete _createDict[PROTOTYPE$1][_enumBugKeys[i]];
                    }return _createDict();
                };
                var _objectCreate = Object.create || function create(O, Properties) {
                    var result;
                    if (O !== null) {
                        Empty[PROTOTYPE$1] = _anObject(O);
                        result = new Empty();
                        Empty[PROTOTYPE$1] = null;
                        // add "__proto__" for Object.getPrototypeOf polyfill
                        result[IE_PROTO] = O;
                    } else result = _createDict();
                    return Properties === undefined ? result : _objectDps(result, Properties);
                };
                var _wks = createCommonjsModule(function (module) {
                    var store = _shared('wks');
                    var _Symbol = _global.Symbol;
                    var USE_SYMBOL = typeof _Symbol == 'function';
                    var $exports = module.exports = function (name) {
                        return store[name] || (store[name] = USE_SYMBOL && _Symbol[name] || (USE_SYMBOL ? _Symbol : _uid)('Symbol.' + name));
                    };
                    $exports.store = store;
                });
                var def = _objectDp.f;
                var TAG = _wks('toStringTag');
                var _setToStringTag = function _setToStringTag(it, tag, stat) {
                    if (it && !_has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
                };
                var IteratorPrototype = {};
                // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
                _hide(IteratorPrototype, _wks('iterator'), function () {
                    return this;
                });
                var _iterCreate = function _iterCreate(Constructor, NAME, next) {
                    Constructor.prototype = _objectCreate(IteratorPrototype, { next: _propertyDesc(1, next) });
                    _setToStringTag(Constructor, NAME + ' Iterator');
                };
                // 7.1.13 ToObject(argument)
                var _toObject = function _toObject(it) {
                    return Object(_defined(it));
                };
                // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
                var IE_PROTO$2 = _sharedKey('IE_PROTO');
                var ObjectProto = Object.prototype;
                var _objectGpo = Object.getPrototypeOf || function (O) {
                    O = _toObject(O);
                    if (_has(O, IE_PROTO$2)) return O[IE_PROTO$2];
                    if (typeof O.constructor == 'function' && O instanceof O.constructor) {
                        return O.constructor.prototype;
                    }
                    return O instanceof Object ? ObjectProto : null;
                };
                var ITERATOR = _wks('iterator');
                var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
                var FF_ITERATOR = '@@iterator';
                var KEYS = 'keys';
                var VALUES = 'values';
                var returnThis = function returnThis() {
                    return this;
                };
                var _iterDefine = function _iterDefine(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
                    _iterCreate(Constructor, NAME, next);
                    var getMethod = function getMethod(kind) {
                        if (!BUGGY && kind in proto) return proto[kind];
                        switch (kind) {
                            case KEYS:
                                return function keys() {
                                    return new Constructor(this, kind);
                                };
                            case VALUES:
                                return function values() {
                                    return new Constructor(this, kind);
                                };
                        }
                        return function entries() {
                            return new Constructor(this, kind);
                        };
                    };
                    var TAG = NAME + ' Iterator';
                    var DEF_VALUES = DEFAULT == VALUES;
                    var VALUES_BUG = false;
                    var proto = Base.prototype;
                    var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
                    var $default = $native || getMethod(DEFAULT);
                    var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
                    var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
                    var methods, key, IteratorPrototype;
                    // Fix native
                    if ($anyNative) {
                        IteratorPrototype = _objectGpo($anyNative.call(new Base()));
                        if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
                            // Set @@toStringTag to native iterators
                            _setToStringTag(IteratorPrototype, TAG, true);
                            // fix for some old engines
                            if (!_library && !_has(IteratorPrototype, ITERATOR)) _hide(IteratorPrototype, ITERATOR, returnThis);
                        }
                    }
                    // fix Array#{values, @@iterator}.name in V8 / FF
                    if (DEF_VALUES && $native && $native.name !== VALUES) {
                        VALUES_BUG = true;
                        $default = function values() {
                            return $native.call(this);
                        };
                    }
                    // Define iterator
                    if ((!_library || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
                        _hide(proto, ITERATOR, $default);
                    }
                    // Plug for library
                    _iterators[NAME] = $default;
                    _iterators[TAG] = returnThis;
                    if (DEFAULT) {
                        methods = {
                            values: DEF_VALUES ? $default : getMethod(VALUES),
                            keys: IS_SET ? $default : getMethod(KEYS),
                            entries: $entries
                        };
                        if (FORCED) for (key in methods) {
                            if (!(key in proto)) _redefine(proto, key, methods[key]);
                        } else _export(_export.P + _export.F * (BUGGY || VALUES_BUG), NAME, methods);
                    }
                    return methods;
                };
                var $at = _stringAt(true);
                // 21.1.3.27 String.prototype[@@iterator]()
                _iterDefine(String, 'String', function (iterated) {
                    this._t = String(iterated); // target
                    this._i = 0; // next index
                    // 21.1.5.2.1 %StringIteratorPrototype%.next()
                }, function () {
                    var O = this._t;
                    var index = this._i;
                    var point;
                    if (index >= O.length) return { value: undefined, done: true };
                    point = $at(O, index);
                    this._i += point.length;
                    return { value: point, done: false };
                });
                // call something on iterator step with safe closing on error
                var _iterCall = function _iterCall(iterator, fn, value, entries) {
                    try {
                        return entries ? fn(_anObject(value)[0], value[1]) : fn(value);
                        // 7.4.6 IteratorClose(iterator, completion)
                    } catch (e) {
                        var ret = iterator['return'];
                        if (ret !== undefined) _anObject(ret.call(iterator));
                        throw e;
                    }
                };
                // check on default Array iterator
                var ITERATOR$1 = _wks('iterator');
                var ArrayProto = Array.prototype;
                var _isArrayIter = function _isArrayIter(it) {
                    return it !== undefined && (_iterators.Array === it || ArrayProto[ITERATOR$1] === it);
                };
                var _createProperty = function _createProperty(object, index, value) {
                    if (index in object) _objectDp.f(object, index, _propertyDesc(0, value));else object[index] = value;
                };
                // getting tag from 19.1.3.6 Object.prototype.toString()
                var TAG$1 = _wks('toStringTag');
                // ES3 wrong here
                var ARG = _cof(function () {
                    return arguments;
                }()) == 'Arguments';
                // fallback for IE11 Script Access Denied error
                var tryGet = function tryGet(it, key) {
                    try {
                        return it[key];
                    } catch (e) {/* empty */}
                };
                var _classof = function _classof(it) {
                    var O, T, B;
                    return it === undefined ? 'Undefined' : it === null ? 'Null'
                    // @@toStringTag case
                    : typeof (T = tryGet(O = Object(it), TAG$1)) == 'string' ? T
                    // builtinTag case
                    : ARG ? _cof(O)
                    // ES3 arguments fallback
                    : (B = _cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
                };
                var ITERATOR$2 = _wks('iterator');
                var core_getIteratorMethod = _core.getIteratorMethod = function (it) {
                    if (it != undefined) return it[ITERATOR$2] || it['@@iterator'] || _iterators[_classof(it)];
                };
                var ITERATOR$3 = _wks('iterator');
                var SAFE_CLOSING = false;
                try {
                    var riter = [7][ITERATOR$3]();
                    riter['return'] = function () {
                        SAFE_CLOSING = true;
                    };
                    // eslint-disable-next-line no-throw-literal
                } catch (e) {/* empty */}
                var _iterDetect = function _iterDetect(exec, skipClosing) {
                    if (!skipClosing && !SAFE_CLOSING) return false;
                    var safe = false;
                    try {
                        var arr = [7];
                        var iter = arr[ITERATOR$3]();
                        iter.next = function () {
                            return { done: safe = true };
                        };
                        arr[ITERATOR$3] = function () {
                            return iter;
                        };
                        exec(arr);
                    } catch (e) {/* empty */}
                    return safe;
                };
                _export(_export.S + _export.F * !_iterDetect(function (iter) {}), 'Array', {
                    // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
                    from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
                        var O = _toObject(arrayLike);
                        var C = typeof this == 'function' ? this : Array;
                        var aLen = arguments.length;
                        var mapfn = aLen > 1 ? arguments[1] : undefined;
                        var mapping = mapfn !== undefined;
                        var index = 0;
                        var iterFn = core_getIteratorMethod(O);
                        var length, result, step, iterator;
                        if (mapping) mapfn = _ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
                        // if object isn't iterable or it's array with default iterator - use simple case
                        if (iterFn != undefined && !(C == Array && _isArrayIter(iterFn))) {
                            for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
                                _createProperty(result, index, mapping ? _iterCall(iterator, mapfn, [step.value, index], true) : step.value);
                            }
                        } else {
                            length = _toLength(O.length);
                            for (result = new C(length); length > index; index++) {
                                _createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
                            }
                        }
                        result.length = index;
                        return result;
                    }
                });
                var from$2 = _core.Array.from;
                var from = createCommonjsModule(function (module) {
                    module.exports = { "default": from$2, __esModule: true };
                });
                unwrapExports(from);
                var toConsumableArray = createCommonjsModule(function (module, exports) {
                    exports.__esModule = true;
                    var _from2 = _interopRequireDefault(from);
                    function _interopRequireDefault(obj) {
                        return obj && obj.__esModule ? obj : { default: obj };
                    }
                    exports.default = function (arr) {
                        if (Array.isArray(arr)) {
                            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
                                arr2[i] = arr[i];
                            }
                            return arr2;
                        } else {
                            return (0, _from2.default)(arr);
                        }
                    };
                });
                var _toConsumableArray = unwrapExports(toConsumableArray);
                var _iterStep = function _iterStep(done, value) {
                    return { value: value, done: !!done };
                };
                // 22.1.3.4 Array.prototype.entries()
                // 22.1.3.13 Array.prototype.keys()
                // 22.1.3.29 Array.prototype.values()
                // 22.1.3.30 Array.prototype[@@iterator]()
                var es6_array_iterator = _iterDefine(Array, 'Array', function (iterated, kind) {
                    this._t = _toIobject(iterated); // target
                    this._i = 0; // next index
                    this._k = kind; // kind
                    // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
                }, function () {
                    var O = this._t;
                    var kind = this._k;
                    var index = this._i++;
                    if (!O || index >= O.length) {
                        this._t = undefined;
                        return _iterStep(1);
                    }
                    if (kind == 'keys') return _iterStep(0, index);
                    if (kind == 'values') return _iterStep(0, O[index]);
                    return _iterStep(0, [index, O[index]]);
                }, 'values');
                // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
                _iterators.Arguments = _iterators.Array;
                var TO_STRING_TAG = _wks('toStringTag');
                var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' + 'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' + 'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' + 'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' + 'TextTrackList,TouchList').split(',');
                for (var i = 0; i < DOMIterables.length; i++) {
                    var NAME = DOMIterables[i];
                    var Collection = _global[NAME];
                    var proto = Collection && Collection.prototype;
                    if (proto && !proto[TO_STRING_TAG]) _hide(proto, TO_STRING_TAG, NAME);
                    _iterators[NAME] = _iterators.Array;
                }
                var f$1 = _wks;
                var _wksExt = {
                    f: f$1
                };
                var iterator$2 = _wksExt.f('iterator');
                var iterator = createCommonjsModule(function (module) {
                    module.exports = { "default": iterator$2, __esModule: true };
                });
                unwrapExports(iterator);
                var _meta = createCommonjsModule(function (module) {
                    var META = _uid('meta');
                    var setDesc = _objectDp.f;
                    var id = 0;
                    var isExtensible = Object.isExtensible || function () {
                        return true;
                    };
                    var FREEZE = !_fails(function () {
                        return isExtensible(Object.preventExtensions({}));
                    });
                    var setMeta = function setMeta(it) {
                        setDesc(it, META, { value: {
                                i: 'O' + ++id,
                                w: {} // weak collections IDs
                            } });
                    };
                    var fastKey = function fastKey(it, create) {
                        // return primitive with prefix
                        if (!_isObject(it)) return (typeof it === 'undefined' ? 'undefined' : _typeof2(it)) == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
                        if (!_has(it, META)) {
                            // can't set metadata to uncaught frozen object
                            if (!isExtensible(it)) return 'F';
                            // not necessary to add metadata
                            if (!create) return 'E';
                            // add missing metadata
                            setMeta(it);
                            // return object ID
                        }
                        return it[META].i;
                    };
                    var getWeak = function getWeak(it, create) {
                        if (!_has(it, META)) {
                            // can't set metadata to uncaught frozen object
                            if (!isExtensible(it)) return true;
                            // not necessary to add metadata
                            if (!create) return false;
                            // add missing metadata
                            setMeta(it);
                            // return hash weak collections IDs
                        }
                        return it[META].w;
                    };
                    // add metadata on freeze-family methods calling
                    var onFreeze = function onFreeze(it) {
                        if (FREEZE && meta.NEED && isExtensible(it) && !_has(it, META)) setMeta(it);
                        return it;
                    };
                    var meta = module.exports = {
                        KEY: META,
                        NEED: false,
                        fastKey: fastKey,
                        getWeak: getWeak,
                        onFreeze: onFreeze
                    };
                });
                var _meta_1 = _meta.KEY;
                var _meta_2 = _meta.NEED;
                var _meta_3 = _meta.fastKey;
                var _meta_4 = _meta.getWeak;
                var _meta_5 = _meta.onFreeze;
                var defineProperty = _objectDp.f;
                var _wksDefine = function _wksDefine(name) {
                    var $Symbol = _core.Symbol || (_core.Symbol = _library ? {} : _global.Symbol || {});
                    if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: _wksExt.f(name) });
                };
                var f$2 = Object.getOwnPropertySymbols;
                var _objectGops = {
                    f: f$2
                };
                var f$3 = {}.propertyIsEnumerable;
                var _objectPie = {
                    f: f$3
                };
                // all enumerable object keys, includes symbols
                var _enumKeys = function _enumKeys(it) {
                    var result = _objectKeys(it);
                    var getSymbols = _objectGops.f;
                    if (getSymbols) {
                        var symbols = getSymbols(it);
                        var isEnum = _objectPie.f;
                        var i = 0;
                        var key;
                        while (symbols.length > i) {
                            if (isEnum.call(it, key = symbols[i++])) result.push(key);
                        }
                    }
                    return result;
                };
                // 7.2.2 IsArray(argument)
                var _isArray = Array.isArray || function isArray(arg) {
                    return _cof(arg) == 'Array';
                };
                // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
                var hiddenKeys = _enumBugKeys.concat('length', 'prototype');
                var f$5 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
                    return _objectKeysInternal(O, hiddenKeys);
                };
                var _objectGopn = {
                    f: f$5
                };
                // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
                var gOPN$1 = _objectGopn.f;
                var toString$1 = {}.toString;
                var windowNames = (typeof window === 'undefined' ? 'undefined' : _typeof2(window)) == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
                var getWindowNames = function getWindowNames(it) {
                    try {
                        return gOPN$1(it);
                    } catch (e) {
                        return windowNames.slice();
                    }
                };
                var f$4 = function getOwnPropertyNames(it) {
                    return windowNames && toString$1.call(it) == '[object Window]' ? getWindowNames(it) : gOPN$1(_toIobject(it));
                };
                var _objectGopnExt = {
                    f: f$4
                };
                var gOPD$1 = Object.getOwnPropertyDescriptor;
                var f$6 = _descriptors ? gOPD$1 : function getOwnPropertyDescriptor(O, P) {
                    O = _toIobject(O);
                    P = _toPrimitive(P, true);
                    if (_ie8DomDefine) try {
                        return gOPD$1(O, P);
                    } catch (e) {/* empty */}
                    if (_has(O, P)) return _propertyDesc(!_objectPie.f.call(O, P), O[P]);
                };
                var _objectGopd = {
                    f: f$6
                };
                // ECMAScript 6 symbols shim
                var META = _meta.KEY;
                var gOPD = _objectGopd.f;
                var dP$1 = _objectDp.f;
                var gOPN = _objectGopnExt.f;
                var $Symbol = _global.Symbol;
                var $JSON = _global.JSON;
                var _stringify = $JSON && $JSON.stringify;
                var PROTOTYPE$2 = 'prototype';
                var HIDDEN = _wks('_hidden');
                var TO_PRIMITIVE = _wks('toPrimitive');
                var isEnum = {}.propertyIsEnumerable;
                var SymbolRegistry = _shared('symbol-registry');
                var AllSymbols = _shared('symbols');
                var OPSymbols = _shared('op-symbols');
                var ObjectProto$1 = Object[PROTOTYPE$2];
                var USE_NATIVE = typeof $Symbol == 'function';
                var QObject = _global.QObject;
                // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
                var setter = !QObject || !QObject[PROTOTYPE$2] || !QObject[PROTOTYPE$2].findChild;
                // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
                var setSymbolDesc = _descriptors && _fails(function () {
                    return _objectCreate(dP$1({}, 'a', {
                        get: function get() {
                            return dP$1(this, 'a', { value: 7 }).a;
                        }
                    })).a != 7;
                }) ? function (it, key, D) {
                    var protoDesc = gOPD(ObjectProto$1, key);
                    if (protoDesc) delete ObjectProto$1[key];
                    dP$1(it, key, D);
                    if (protoDesc && it !== ObjectProto$1) dP$1(ObjectProto$1, key, protoDesc);
                } : dP$1;
                var wrap = function wrap(tag) {
                    var sym = AllSymbols[tag] = _objectCreate($Symbol[PROTOTYPE$2]);
                    sym._k = tag;
                    return sym;
                };
                var isSymbol = USE_NATIVE && _typeof2($Symbol.iterator) == 'symbol' ? function (it) {
                    return (typeof it === 'undefined' ? 'undefined' : _typeof2(it)) == 'symbol';
                } : function (it) {
                    return it instanceof $Symbol;
                };
                var $defineProperty = function defineProperty(it, key, D) {
                    if (it === ObjectProto$1) $defineProperty(OPSymbols, key, D);
                    _anObject(it);
                    key = _toPrimitive(key, true);
                    _anObject(D);
                    if (_has(AllSymbols, key)) {
                        if (!D.enumerable) {
                            if (!_has(it, HIDDEN)) dP$1(it, HIDDEN, _propertyDesc(1, {}));
                            it[HIDDEN][key] = true;
                        } else {
                            if (_has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
                            D = _objectCreate(D, { enumerable: _propertyDesc(0, false) });
                        }
                        return setSymbolDesc(it, key, D);
                    }
                    return dP$1(it, key, D);
                };
                var $defineProperties = function defineProperties(it, P) {
                    _anObject(it);
                    var keys = _enumKeys(P = _toIobject(P));
                    var i = 0;
                    var l = keys.length;
                    var key;
                    while (l > i) {
                        $defineProperty(it, key = keys[i++], P[key]);
                    }return it;
                };
                var $create = function create(it, P) {
                    return P === undefined ? _objectCreate(it) : $defineProperties(_objectCreate(it), P);
                };
                var $propertyIsEnumerable = function propertyIsEnumerable(key) {
                    var E = isEnum.call(this, key = _toPrimitive(key, true));
                    if (this === ObjectProto$1 && _has(AllSymbols, key) && !_has(OPSymbols, key)) return false;
                    return E || !_has(this, key) || !_has(AllSymbols, key) || _has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
                };
                var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
                    it = _toIobject(it);
                    key = _toPrimitive(key, true);
                    if (it === ObjectProto$1 && _has(AllSymbols, key) && !_has(OPSymbols, key)) return;
                    var D = gOPD(it, key);
                    if (D && _has(AllSymbols, key) && !(_has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
                    return D;
                };
                var $getOwnPropertyNames = function getOwnPropertyNames(it) {
                    var names = gOPN(_toIobject(it));
                    var result = [];
                    var i = 0;
                    var key;
                    while (names.length > i) {
                        if (!_has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
                    }
                    return result;
                };
                var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
                    var IS_OP = it === ObjectProto$1;
                    var names = gOPN(IS_OP ? OPSymbols : _toIobject(it));
                    var result = [];
                    var i = 0;
                    var key;
                    while (names.length > i) {
                        if (_has(AllSymbols, key = names[i++]) && (IS_OP ? _has(ObjectProto$1, key) : true)) result.push(AllSymbols[key]);
                    }
                    return result;
                };
                // 19.4.1.1 Symbol([description])
                if (!USE_NATIVE) {
                    $Symbol = function _Symbol2() {
                        if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
                        var tag = _uid(arguments.length > 0 ? arguments[0] : undefined);
                        var $set = function $set(value) {
                            if (this === ObjectProto$1) $set.call(OPSymbols, value);
                            if (_has(this, HIDDEN) && _has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
                            setSymbolDesc(this, tag, _propertyDesc(1, value));
                        };
                        if (_descriptors && setter) setSymbolDesc(ObjectProto$1, tag, { configurable: true, set: $set });
                        return wrap(tag);
                    };
                    _redefine($Symbol[PROTOTYPE$2], 'toString', function toString() {
                        return this._k;
                    });
                    _objectGopd.f = $getOwnPropertyDescriptor;
                    _objectDp.f = $defineProperty;
                    _objectGopn.f = _objectGopnExt.f = $getOwnPropertyNames;
                    _objectPie.f = $propertyIsEnumerable;
                    _objectGops.f = $getOwnPropertySymbols;
                    if (_descriptors && !_library) {
                        _redefine(ObjectProto$1, 'propertyIsEnumerable', $propertyIsEnumerable, true);
                    }
                    _wksExt.f = function (name) {
                        return wrap(_wks(name));
                    };
                }
                _export(_export.G + _export.W + _export.F * !USE_NATIVE, { Symbol: $Symbol });
                for (var es6Symbols =
                // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
                'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','), j = 0; es6Symbols.length > j;) {
                    _wks(es6Symbols[j++]);
                }for (var wellKnownSymbols = _objectKeys(_wks.store), k = 0; wellKnownSymbols.length > k;) {
                    _wksDefine(wellKnownSymbols[k++]);
                }_export(_export.S + _export.F * !USE_NATIVE, 'Symbol', {
                    // 19.4.2.1 Symbol.for(key)
                    'for': function _for(key) {
                        return _has(SymbolRegistry, key += '') ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
                    },
                    // 19.4.2.5 Symbol.keyFor(sym)
                    keyFor: function keyFor(sym) {
                        if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
                        for (var key in SymbolRegistry) {
                            if (SymbolRegistry[key] === sym) return key;
                        }
                    },
                    useSetter: function useSetter() {
                        setter = true;
                    },
                    useSimple: function useSimple() {
                        setter = false;
                    }
                });
                _export(_export.S + _export.F * !USE_NATIVE, 'Object', {
                    // 19.1.2.2 Object.create(O [, Properties])
                    create: $create,
                    // 19.1.2.4 Object.defineProperty(O, P, Attributes)
                    defineProperty: $defineProperty,
                    // 19.1.2.3 Object.defineProperties(O, Properties)
                    defineProperties: $defineProperties,
                    // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
                    getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
                    // 19.1.2.7 Object.getOwnPropertyNames(O)
                    getOwnPropertyNames: $getOwnPropertyNames,
                    // 19.1.2.8 Object.getOwnPropertySymbols(O)
                    getOwnPropertySymbols: $getOwnPropertySymbols
                });
                // 24.3.2 JSON.stringify(value [, replacer [, space]])
                $JSON && _export(_export.S + _export.F * (!USE_NATIVE || _fails(function () {
                    var S = $Symbol();
                    // MS Edge converts symbol values to JSON as {}
                    // WebKit converts symbol values to JSON as null
                    // V8 throws on boxed symbols
                    return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
                })), 'JSON', {
                    stringify: function stringify(it) {
                        if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
                        var args = [it];
                        var i = 1;
                        var replacer, $replacer;
                        while (arguments.length > i) {
                            args.push(arguments[i++]);
                        }replacer = args[1];
                        if (typeof replacer == 'function') $replacer = replacer;
                        if ($replacer || !_isArray(replacer)) replacer = function replacer(key, value) {
                            if ($replacer) value = $replacer.call(this, key, value);
                            if (!isSymbol(value)) return value;
                        };
                        args[1] = replacer;
                        return _stringify.apply($JSON, args);
                    }
                });
                // 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
                $Symbol[PROTOTYPE$2][TO_PRIMITIVE] || _hide($Symbol[PROTOTYPE$2], TO_PRIMITIVE, $Symbol[PROTOTYPE$2].valueOf);
                // 19.4.3.5 Symbol.prototype[@@toStringTag]
                _setToStringTag($Symbol, 'Symbol');
                // 20.2.1.9 Math[@@toStringTag]
                _setToStringTag(Math, 'Math', true);
                // 24.3.3 JSON[@@toStringTag]
                _setToStringTag(_global.JSON, 'JSON', true);
                _wksDefine('asyncIterator');
                _wksDefine('observable');
                var symbol$2 = _core.Symbol;
                var symbol = createCommonjsModule(function (module) {
                    module.exports = { "default": symbol$2, __esModule: true };
                });
                unwrapExports(symbol);
                var _typeof_1 = createCommonjsModule(function (module, exports) {
                    exports.__esModule = true;
                    var _iterator2 = _interopRequireDefault(iterator);
                    var _symbol2 = _interopRequireDefault(symbol);
                    var _typeof = typeof _symbol2.default === "function" && _typeof2(_iterator2.default) === "symbol" ? function (obj) {
                        return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
                    } : function (obj) {
                        return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
                    };
                    function _interopRequireDefault(obj) {
                        return obj && obj.__esModule ? obj : { default: obj };
                    }
                    exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
                        return typeof obj === "undefined" ? "undefined" : _typeof(obj);
                    } : function (obj) {
                        return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
                    };
                });
                unwrapExports(_typeof_1);
                // most Object methods by ES6 should accept primitives
                var _objectSap = function _objectSap(KEY, exec) {
                    var fn = (_core.Object || {})[KEY] || Object[KEY];
                    var exp = {};
                    exp[KEY] = exec(fn);
                    _export(_export.S + _export.F * _fails(function () {
                        fn(1);
                    }), 'Object', exp);
                };
                // 19.1.2.14 Object.keys(O)
                _objectSap('keys', function () {
                    return function keys(it) {
                        return _objectKeys(_toObject(it));
                    };
                });
                var keys$1 = _core.Object.keys;
                var keys = createCommonjsModule(function (module) {
                    module.exports = { "default": keys$1, __esModule: true };
                });
                unwrapExports(keys);
                // 20.1.2.3 Number.isInteger(number)
                var floor$1 = Math.floor;
                var _isInteger = function isInteger(it) {
                    return !_isObject(it) && isFinite(it) && floor$1(it) === it;
                };
                // 20.1.2.3 Number.isInteger(number)
                _export(_export.S, 'Number', { isInteger: _isInteger });
                var isInteger$2 = _core.Number.isInteger;
                var isInteger$1 = createCommonjsModule(function (module) {
                    module.exports = { "default": isInteger$2, __esModule: true };
                });
                unwrapExports(isInteger$1);
                var _stringWs = '\t\n\x0B\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003' + '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';
                var space = '[' + _stringWs + ']';
                var non = '\u200B\x85';
                var ltrim = RegExp('^' + space + space + '*');
                var rtrim = RegExp(space + space + '*$');
                var exporter = function exporter(KEY, exec, ALIAS) {
                    var exp = {};
                    var FORCE = _fails(function () {
                        return !!_stringWs[KEY]() || non[KEY]() != non;
                    });
                    var fn = exp[KEY] = FORCE ? exec(trim) : _stringWs[KEY];
                    if (ALIAS) exp[ALIAS] = fn;
                    _export(_export.P + _export.F * FORCE, 'String', exp);
                };
                // 1 -> String#trimLeft
                // 2 -> String#trimRight
                // 3 -> String#trim
                var trim = exporter.trim = function (string, TYPE) {
                    string = String(_defined(string));
                    if (TYPE & 1) string = string.replace(ltrim, '');
                    if (TYPE & 2) string = string.replace(rtrim, '');
                    return string;
                };
                var _stringTrim = exporter;
                var $parseFloat = _global.parseFloat;
                var $trim = _stringTrim.trim;
                var _parseFloat$3 = 1 / $parseFloat(_stringWs + '-0') !== -Infinity ? function parseFloat(str) {
                    var string = $trim(String(str), 3);
                    var result = $parseFloat(string);
                    return result === 0 && string.charAt(0) == '-' ? -0 : result;
                } : $parseFloat;
                // 20.1.2.12 Number.parseFloat(string)
                _export(_export.S + _export.F * (Number.parseFloat != _parseFloat$3), 'Number', { parseFloat: _parseFloat$3 });
                var _parseFloat$1 = parseFloat;
                var _parseFloat = createCommonjsModule(function (module) {
                    module.exports = { "default": _parseFloat$1, __esModule: true };
                });
                unwrapExports(_parseFloat);
                /**
                 * toxic-predicate-functions v0.1.5
                 * (c) 2017 toxic-johann
                 * Released under MIT
                 */
                /**
                 * is void element or not ? Means it will return true when val is undefined or null
                 */
                function isVoid(obj) {
                    return obj === undefined || obj === null;
                }
                /**
                 * to check whether a variable is array
                 */
                function isArray(arr) {
                    return Array.isArray(arr);
                }
                /**
                 * is it a function or not
                 */
                function isFunction(obj) {
                    return typeof obj === 'function';
                }
                /**
                 * is it an object or not
                 */
                function isObject$1(obj) {
                    // incase of arrow function and array
                    return Object(obj) === obj && String(obj) === '[object Object]' && !isFunction(obj) && !isArray(obj);
                }
                /**
                 * to tell you if it's a real number
                 */
                function isNumber(obj) {
                    return typeof obj === 'number';
                }
                /**
                 * is it a string
                 */
                function isString(str) {
                    return typeof str === 'string' || str instanceof String;
                }
                /**
                 * is Boolean or not
                 */
                function isBoolean(bool) {
                    return typeof bool === 'boolean';
                }
                /**
                 * is Primitive type or not, whick means it will return true when data is number/string/boolean/undefined/null
                 */
                function isPrimitive(val) {
                    return isVoid(val) || isBoolean(val) || isString(val) || isNumber(val);
                }
                /**
                 * the handler to generate an deep traversal handler
                 * @param  {Function} fn the function you wanna run when you reach in the deep property
                 * @return {Function}    the handler
                 */
                function genTraversalHandler(fn) {
                    var setter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (target, key, value) {
                        target[key] = value;
                    };
                    // use recursive to move what in source to the target
                    // if you do not provide a target, we will create a new target
                    function recursiveFn(source, target, key) {
                        if (isArray(source) || isObject$1(source)) {
                            target = isPrimitive(target) ? isObject$1(source) ? {} : [] : target;
                            for (var _key in source) {
                                // $FlowFixMe: support computed key here
                                setter(target, _key, recursiveFn(source[_key], target[_key], _key));
                                // target[key] = recursiveFn(source[key], target[key], key);
                            }
                            return target;
                        }
                        return fn(source, target, key);
                    }
                    return recursiveFn;
                }
                var _deepAssign = genTraversalHandler(function (val) {
                    return val;
                });
                /**
                 * deeply clone an object
                 * @param  {Array|Object} source if you pass in other type, it will throw an error
                 * @return {clone-target}        the new Object
                 */
                function deepClone(source) {
                    if (isPrimitive(source)) {
                        throw new TypeError('deepClone only accept non primitive type');
                    }
                    return _deepAssign(source);
                }
                /**
                 * merge multiple objects
                 * @param  {...Object} args [description]
                 * @return {merge-object}         [description]
                 */
                function deepAssign() {
                    for (var _len = arguments.length, args = Array(_len), _key2 = 0; _key2 < _len; _key2++) {
                        args[_key2] = arguments[_key2];
                    }
                    if (args.length < 2) {
                        throw new Error('deepAssign accept two and more argument');
                    }
                    for (var i = args.length - 1; i > -1; i--) {
                        if (isPrimitive(args[i])) {
                            throw new TypeError('deepAssign only accept non primitive type');
                        }
                    }
                    var target = args.shift();
                    args.forEach(function (source) {
                        return _deepAssign(source, target);
                    });
                    return target;
                }
                /**
                 * camelize any string, e.g hello world -> helloWorld
                 * @param  {string} str only accept string!
                 * @return {string}     camelize string
                 */
                function camelize(str, isBig) {
                    return str.replace(/(^|[^a-zA-Z]+)([a-zA-Z])/g, function (match, spilt, initials, index) {
                        return !isBig && index === 0 ? initials.toLowerCase() : initials.toUpperCase();
                    });
                }
                /**
                 * hypenate any string e.g hello world -> hello-world
                 * @param  {string} str only accept string
                 * @return {string}
                 */
                function hypenate(str) {
                    return camelize(str).replace(/([A-Z])/g, function (match) {
                        return '-' + match.toLowerCase();
                    });
                }
                /**
                 * bind the function with some context. we have some fallback strategy here
                 * @param {function} fn the function which we need to bind the context on
                 * @param {any} context the context object
                 */
                function bind(fn, context) {
                    if (fn.bind) {
                        return fn.bind(context);
                    } else if (fn.apply) {
                        return function __autobind__() {
                            for (var _len2 = arguments.length, args = Array(_len2), _key3 = 0; _key3 < _len2; _key3++) {
                                args[_key3] = arguments[_key3];
                            }
                            return fn.apply(context, args);
                        };
                    } else {
                        return function __autobind__() {
                            for (var _len3 = arguments.length, args = Array(_len3), _key4 = 0; _key4 < _len3; _key4++) {
                                args[_key4] = arguments[_key4];
                            }
                            return fn.call.apply(fn, [context].concat(_toConsumableArray(args)));
                        };
                    }
                }
                /**
                 * generate an uuid
                 */
                function uuid() {
                    return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4();
                }
                /**
                 * generate an random number which length is 4
                 */
                function S4() {
                    return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
                }
                /**
                 * generate an random number with specific length
                 */
                function rand(length) {
                    var str = '';
                    while (str.length < length) {
                        str += S4();
                    }
                    return str.slice(0, length);
                }
                /**
                 * get an deep property
                 */
                function getDeepProperty(obj, keys) {
                    var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
                        _ref$throwError = _ref.throwError,
                        throwError = _ref$throwError === undefined ? false : _ref$throwError,
                        backup = _ref.backup;
                    if (isString(keys)) {
                        keys = keys.split('.');
                    }
                    if (!isArray(keys)) {
                        throw new TypeError('keys of getDeepProperty must be string or Array<string>');
                    }
                    var read = [];
                    var target = obj;
                    for (var i = 0, len = keys.length; i < len; i++) {
                        var key = keys[i];
                        if (isVoid(target)) {
                            if (throwError) {
                                throw new Error('obj' + (read.length > 0 ? '.' + read.join('.') : ' itself') + ' is ' + target);
                            } else {
                                return backup;
                            }
                        }
                        target = target[key];
                        read.push(key);
                    }
                    return target;
                }
                exports.genTraversalHandler = genTraversalHandler;
                exports.deepClone = deepClone;
                exports.deepAssign = deepAssign;
                exports.camelize = camelize;
                exports.hypenate = hypenate;
                exports.bind = bind;
                exports.uuid = uuid;
                exports.S4 = S4;
                exports.rand = rand;
                exports.getDeepProperty = getDeepProperty;
                Object.defineProperty(exports, '__esModule', { value: true });
            });
            /***/
        },
        /* 6 */
        /***/function (module, exports, __webpack_require__) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.NodeWrap = exports.supportsPassive = undefined;
            exports.getAttr = getAttr;
            exports.setAttr = setAttr;
            exports.addClassName = addClassName;
            exports.removeClassName = removeClassName;
            exports.hasClassName = hasClassName;
            exports.removeEvent = removeEvent;
            exports.addEvent = addEvent;
            exports.addDelegate = addDelegate;
            exports.removeDelegate = removeDelegate;
            exports.getStyle = getStyle;
            exports.setStyle = setStyle;
            exports.query = query;
            exports.removeEl = removeEl;
            exports.findParents = findParents;
            exports.$ = $;
            var _toxicPredicateFunctions = __webpack_require__(0);
            var _events = __webpack_require__(2);
            var _utils = __webpack_require__(1);
            /**
             * @module dom
             * @author huzunjie
             * @description 一些常用的DOM判断及操作方法，可以使用dom.$('*')包装DOM，实现类jQuery的链式操作；当然这里的静态方法也可以直接使用。
             */
            var _divEl = _utils.inBrowser ? document.createElement('div') : {};
            var _textAttrName = 'innerText';
            'textContent' in _divEl && (_textAttrName = 'textContent');
            var _arrPrototype = Array.prototype;
            /**
             * 读取HTML元素属性值
             * @param {HTMLElement} el 目标元素
             * @param {String} attrName 目标属性名称
             * @return {String}
             */
            function getAttr(el, attrName) {
                return el.getAttribute(attrName);
            }
            /**
             * 设置HTML元素属性值
             * @param {HTMLElement} el 目标元素
             * @param {String} attrName 目标属性名称
             * @param {String} attrVal 目标属性值
             */
            function setAttr(el, attrName, attrVal) {
                if (attrVal === undefined) {
                    el.removeAttribute(attrName);
                } else {
                    el.setAttribute(attrName, attrVal);
                }
            }
            /**
             * 为HTML元素添加className
             * @param {HTMLElement} el 目标元素
             * @param {String} cls 要添加的className（多个以空格分割）
             */
            function addClassName(el, cls) {
                if (!cls || !(cls = cls.trim())) {
                    return;
                }
                var clsArr = cls.split(/\s+/);
                if (el.classList) {
                    clsArr.forEach(function (c) {
                        return el.classList.add(c);
                    });
                } else {
                    var curCls_1 = " " + (el.className || '') + " ";
                    clsArr.forEach(function (c) {
                        curCls_1.indexOf(" " + c + " ") === -1 && (curCls_1 += ' ' + c);
                    });
                    el.className = curCls_1.trim();
                }
            }
            /**
             * 为HTML元素移除className
             * @param {HTMLElement} el 目标元素
             * @param {String} cls 要移除的className（多个以空格分割）
             */
            function removeClassName(el, cls) {
                if (!cls || !(cls = cls.trim())) {
                    return;
                }
                var clsArr = cls.split(/\s+/);
                if (el.classList) {
                    clsArr.forEach(function (c) {
                        return el.classList.remove(c);
                    });
                } else {
                    var curCls_2 = " " + el.className + " ";
                    clsArr.forEach(function (c) {
                        var tar = ' ' + c + ' ';
                        while (curCls_2.indexOf(tar) !== -1) {
                            curCls_2 = curCls_2.replace(tar, ' ');
                        }
                    });
                    el.className = curCls_2.trim();
                }
            }
            /**
             * 检查HTML元素是否已设置className
             * @param {HTMLElement} el 目标元素
             * @param {String} className 要检查的className
             * @return {Boolean}
             */
            function hasClassName(el, className) {
                return new RegExp('(?:^|\\s)' + className + '(?=\\s|$)').test(el.className);
            }
            /**
             * addEventListener 是否已支持 passive
             * @return {Boolean}
             */
            var supportsPassive = exports.supportsPassive = false;
            try {
                var opts = Object.defineProperty({}, 'passive', {
                    get: function get() {
                        exports.supportsPassive = supportsPassive = true;
                    }
                });
                if (_utils.inBrowser) window.addEventListener('test', null, opts);
            } catch (e) {
                console.error(e);
            }
            /**
             * 为HTML元素移除事件监听
             * @param {HTMLElement} el 目标元素
             * @param {String} type 事件名称
             * @param {Function} handler 处理函数
             * @param {Boolean} once 是否只监听一次
             * @param {Boolean} capture 是否在捕获阶段的监听
             */
            function removeEvent(el, type, handler, once, capture) {
                if (once === void 0) {
                    once = false;
                }
                if (capture === void 0) {
                    capture = false;
                }
                if (capture !== undefined && !(0, _toxicPredicateFunctions.isBoolean)(capture) && supportsPassive) {
                    capture = { passive: true };
                }
                if (once) {
                    /* 尝试从缓存中读取包装后的方法 */
                    var handlerWrap = (0, _events.removeEventCache)(el, type + '_once', handler);
                    if (handlerWrap) {
                        handler = handlerWrap;
                    }
                }
                el.removeEventListener(type, handler, capture);
            }
            /**
             * 为HTML元素添加事件监听
             * @param {HTMLElement} el 目标元素
             * @param {String} type 事件名称
             * @param {Function} handler 处理函数
             * @param {Boolean} once 是否只监听一次
             * @param {Boolean|Object} capture 是否在捕获阶段监听，这里也可以传入 { passive: true } 表示被动模式
             */
            function addEvent(el, type, handler, once, capture) {
                if (once === void 0) {
                    once = false;
                }
                if (capture === void 0) {
                    capture = false;
                }
                if (capture !== undefined && !(0, _toxicPredicateFunctions.isBoolean)(capture) && supportsPassive) {
                    capture = { passive: true };
                }
                if (once) {
                    var oldHandler_1 = handler;
                    handler = function () {
                        return function () {
                            var args = [];
                            for (var _i = 0; _i < arguments.length; _i++) {
                                args[_i] = arguments[_i];
                            }
                            oldHandler_1.apply(this, args);
                            removeEvent(el, type, handler, once, capture);
                        };
                    }();
                    /* 将包装后的方法记录到缓存中 */
                    (0, _events.addEventCache)(el, type + '_once', oldHandler_1, handler);
                }
                el.addEventListener(type, handler, capture);
            }
            /**
             * 为HTML元素添加事件代理
             * @param {HTMLElement} el 目标元素
             * @param {String} selector 要被代理的元素
             * @param {String} type 事件名称
             * @param {Function} handler 处理函数
             * @param {Boolean} capture 是否在捕获阶段监听
             */
            function addDelegate(el, selector, type, handler, capture) {
                if (capture === void 0) {
                    capture = false;
                }
                if (capture !== undefined && !(0, _toxicPredicateFunctions.isBoolean)(capture) && supportsPassive) {
                    capture = { passive: true };
                }
                var handlerWrap = function handlerWrap(e) {
                    var targetElsArr = findParents(e.target || e.srcElement, el, true);
                    var targetElArr = query(selector, el, true);
                    var retEl;
                    if (targetElArr.find) {
                        retEl = targetElArr.find(function (seEl) {
                            return targetElsArr.find(function (tgEl) {
                                return seEl === tgEl;
                            });
                        });
                    } else {
                        // Fixed IE11 Array.find not defined bug
                        targetElArr.forEach(function (seEl) {
                            return !retEl && targetElsArr.forEach(function (tgEl) {
                                if (!retEl && seEl === tgEl) {
                                    retEl = tgEl;
                                }
                            });
                        });
                    }
                    retEl && handler.apply(retEl, arguments);
                };
                /* 将包装后的方法记录到缓存中 */
                (0, _events.addEventCache)(el, type + '_delegate_' + selector, handler, handlerWrap);
                el.addEventListener(type, handlerWrap, capture);
            }
            /**
             * 为HTML元素移除事件代理
             * @param {HTMLElement} el 目标元素
             * @param {String} selector 要被代理的元素
             * @param {String} type 事件名称
             * @param {Function} handler 处理函数
             * @param {Boolean} capture 是否在捕获阶段监听
             */
            function removeDelegate(el, selector, type, handler, capture) {
                if (capture === void 0) {
                    capture = false;
                }
                if (capture !== undefined && !(0, _toxicPredicateFunctions.isBoolean)(capture) && supportsPassive) {
                    capture = { passive: true };
                }
                /* 尝试从缓存中读取包装后的方法 */
                var handlerWrap = (0, _events.removeEventCache)(el, type + '_delegate_' + selector, handler);
                handlerWrap && el.removeEventListener(type, handlerWrap, capture);
            }
            /**
             * 读取HTML元素样式值
             * @param {HTMLElement} el 目标元素
             * @param {String} key 样式key
             * @return {String}
             */
            function getStyle(el, key) {
                return (el.currentStyle || document.defaultView.getComputedStyle(el, null))[key] || el.style[key];
            }
            /**
             * 设置HTML元素样式值
             * @param {HTMLElement} el 目标元素
             * @param {String} key 样式key
             * @param {String} val 样式值
             */
            function setStyle(el, key, val) {
                if ((0, _toxicPredicateFunctions.isObject)(key)) {
                    for (var k in key) {
                        setStyle(el, k, key[k]);
                    }
                } else {
                    el.style[key] = val;
                }
            }
            /**
             * 根据选择器查询目标元素
             * @param {String} selector 选择器,用于 querySelectorAll
             * @param {HTMLElement} container 父容器
             * @param {Boolean} toArray 强制输出为数组
             * @return {NodeList|Array}
             */
            function query(selector, container, toArray) {
                if (container === void 0) {
                    container = document;
                }
                var retNodeList = container.querySelectorAll(selector);
                return toArray ? Array.from(retNodeList) : retNodeList;
            }
            /**
             * 从DOM树中移除el
             * @param {HTMLElement} el 目标元素
             */
            function removeEl(el) {
                el.parentNode.removeChild(el);
            }
            /**
             * 查找元素的父节点们
             * @param {HTMLElement} el 目标元素
             * @param {HTMLElement} endEl 最大父容器（不指定则找到html）
             * @param {Boolean} haveEl 包含当前元素
             * @param {Boolean} haveEndEl 包含设定的最大父容器
             */
            function findParents(el, endEl, haveEl, haveEndEl) {
                if (endEl === void 0) {
                    endEl = null;
                }
                var retEls = [];
                if (haveEl) {
                    retEls.push(el);
                }
                while (el && el.parentNode !== endEl) {
                    el = el.parentNode;
                    el && retEls.push(el);
                }
                if (haveEndEl) {
                    retEls.push(endEl);
                }
                return retEls;
            }
            /**
             * @class NodeWrap
             * @description
             * NodeWrap DOM包装器，用以实现基本的链式操作
             * new dom.NodeWrap('*') 相当于 dom.$('*')
             * 这里面用于DOM操作的属性方法都是基于上面静态方法实现，有需要可以随时修改补充
             * @param {String} selector 选择器(兼容 String||HTMLString||NodeList||NodeArray||HTMLElement)
             * @param {HTMLElement} container 父容器（默认为document）
             */
            var NodeWrap = /** @class */function () {
                function NodeWrap(selector, container) {
                    if (container === void 0) {
                        container = document;
                    }
                    var _this = this;
                    _this.selector = selector;
                    /* String||NodeList||HTMLElement 识别处理 */
                    var elsArr;
                    if (selector && selector.constructor === NodeList) {
                        /* 支持直接传入NodeList来构建包装器 */
                        elsArr = (0, _utils.makeArray)(selector);
                    } else if ((0, _toxicPredicateFunctions.isArray)(selector)) {
                        /* 支持直接传入Node数组来构建包装器 */
                        elsArr = selector;
                    } else if ((0, _toxicPredicateFunctions.isString)(selector)) {
                        if (selector.indexOf('<') === 0) {
                            /* 支持直接传入HTML字符串来新建DOM并构建包装器 */
                            _divEl.innerHTML = selector;
                            elsArr = query('*', _divEl, true);
                        } else {
                            /* 支持直接传入字符串选择器来查找DOM并构建包装器 */
                            elsArr = query(selector, container, true);
                        }
                    } else {
                        /* 其他任意对象直接构建包装器 */
                        elsArr = [selector];
                    }
                    Object.assign(_this, elsArr);
                    /* NodeWrap本意可以 extends Array省略构造方法中下面这部分代码，但目前编译不支持 */
                    _this.length = elsArr.length;
                }
                /**
                 * 循环遍历DOM集合
                 * @param {Function} fn 遍历函数 fn(item, i)
                 * @return {Object}
                 */
                NodeWrap.prototype.each = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    _arrPrototype.forEach.apply(this, args);
                    return this;
                };
                /**
                 * 添加元素到DOM集合
                 * @param {HTMLElement} el 要加入的元素
                 * @return {this}
                 */
                NodeWrap.prototype.push = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    _arrPrototype.push.apply(this, args);
                    return this;
                };
                /**
                 * 截取DOM集合片段，并得到新的包装器splice
                 * @param {Nubmer} start
                 * @param {Nubmer} count
                 * @return {NodeWrap} 新的DOM集合包装器
                 */
                NodeWrap.prototype.splice = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    return $(_arrPrototype.splice.apply(this, args));
                };
                /**
                 * 查找子元素
                 * @param {String} selector 选择器
                 * @return {NodeWrap} 新的DOM集合包装器
                 */
                NodeWrap.prototype.find = function (selector) {
                    var childs = [];
                    this.each(function (el) {
                        childs = childs.concat(query(selector, el, true));
                    });
                    var childsWrap = $(childs);
                    childsWrap.parent = this;
                    childsWrap.selector = selector;
                    return childsWrap;
                };
                /**
                 * 添加子元素
                 * @param {HTMLElement} childEls 要添加的HTML元素
                 * @return {this}
                 */
                NodeWrap.prototype.append = function (childEls) {
                    var childsWrap = $(childEls);
                    var firstEl = this[0];
                    childsWrap.each(function (newEl) {
                        return firstEl.appendChild(newEl);
                    });
                    return this;
                };
                /**
                 * 将元素集合添加到指定容器
                 * @param {HTMLElement} parentEl 要添加到父容器
                 * @return {this}
                 */
                NodeWrap.prototype.appendTo = function (parentEl) {
                    $(parentEl).append(this);
                    return this;
                };
                /**
                 * DOM集合text内容读写操作
                 * @param {String} val 文本内容（如果有设置该参数则执行写操作，否则执行读操作）
                 * @return {this}
                 */
                NodeWrap.prototype.text = function (val) {
                    if (arguments.length === 0) {
                        return this[0][_textAttrName];
                    }
                    return this.each(function (el) {
                        el[_textAttrName] = val;
                    });
                };
                /**
                 * DOM集合HTML内容读写操作
                 * @param {String} html html内容（如果有设置该参数则执行写操作，否则执行读操作）
                 * @return {this}
                 */
                NodeWrap.prototype.html = function (html) {
                    if (arguments.length === 0) {
                        return this[0].innerHTML;
                    }
                    return this.each(function (el) {
                        el.innerHTML = html;
                    });
                };
                /**
                 * DOM集合属性读写操作
                 * @param {String} name 属性名称
                 * @param {String} val 属性值（如果有设置该参数则执行写操作，否则执行读操作）
                 * @return {this}
                 */
                NodeWrap.prototype.attr = function (name, val) {
                    if (arguments.length === 1) {
                        return getAttr(this[0], name);
                    }
                    return this.each(function (el) {
                        return setAttr(el, name, val);
                    });
                };
                /**
                 * DOM集合dataset读写操作
                 * @param {String} key 键名
                 * @param {Any} val 键值（如果有设置该参数则执行写操作，否则执行读操作）
                 * @return {this}
                 */
                NodeWrap.prototype.data = function (key, val) {
                    if (arguments.length === 0) {
                        return this[0].dataset || {};
                    }
                    if (arguments.length === 1) {
                        return (this[0].dataset || {})[key];
                    }
                    return this.each(function (el) {
                        (el.dataset || (el.dataset = {}))[key] = val;
                    });
                };
                /**
                 * DOM集合样式读写操作
                 * @param {String} key 样式key
                 * @param {String} val 样式值（如果有设置该参数则执行写操作，否则执行读操作）
                 * @return {this}
                 */
                NodeWrap.prototype.css = function (key, val) {
                    if (arguments.length === 1 && !(0, _toxicPredicateFunctions.isObject)(key)) {
                        return getStyle(this[0], key);
                    }
                    return this.each(function (el) {
                        return setStyle(el, key, val);
                    });
                };
                /**
                 * 为DOM集合增加className
                 * @param {String} cls 要增加的className
                 * @return {this}
                 */
                NodeWrap.prototype.addClass = function (cls) {
                    return this.each(function (el) {
                        return addClassName(el, cls);
                    });
                };
                /**
                 * 移除当前DOM集合的className
                 * @param {String} cls 要移除的className
                 * @return {this}
                 */
                NodeWrap.prototype.removeClass = function (cls) {
                    return this.each(function (el) {
                        return removeClassName(el, cls);
                    });
                };
                /**
                 * 检查索引0的DOM是否有className
                 * @param {String} cls 要检查的className
                 * @return {this}
                 */
                NodeWrap.prototype.hasClass = function (cls) {
                    return hasClassName(this[0], cls);
                };
                /**
                 * 为DOM集合添加事件监听
                 * @param {String} type 事件名称
                 * @param {Function} handler 处理函数
                 * @param {Boolean} once 是否只监听一次
                 * @param {Boolean} capture 是否在捕获阶段监听
                 * @return {this}
                 */
                NodeWrap.prototype.on = function (type, handler, once, capture) {
                    if (once === void 0) {
                        once = false;
                    }
                    if (capture === void 0) {
                        capture = false;
                    }
                    return this.each(function (el) {
                        return addEvent(el, type, handler, once, capture);
                    });
                };
                /**
                 * 为DOM集合解除事件监听
                 * @param {String} type 事件名称
                 * @param {Function} handler 处理函数
                 * @param {Boolean} once 是否只监听一次
                 * @param {Boolean} capture 是否在捕获阶段监听
                 * @return {this}
                 */
                NodeWrap.prototype.off = function (type, handler, once, capture) {
                    if (once === void 0) {
                        once = false;
                    }
                    if (capture === void 0) {
                        capture = false;
                    }
                    return this.each(function (el) {
                        return removeEvent(el, type, handler, once, capture);
                    });
                };
                /**
                 * 为DOM集合绑定事件代理
                 * @param {String} selector 目标子元素选择器
                 * @param {String} type 事件名称
                 * @param {Function} handler 处理函数
                 * @param {Boolean} capture 是否在捕获阶段监听
                 * @return {this}
                 */
                NodeWrap.prototype.delegate = function (selector, type, handler, capture) {
                    if (capture === void 0) {
                        capture = false;
                    }
                    return this.each(function (el) {
                        return addDelegate(el, selector, type, handler, capture);
                    });
                };
                /**
                 * 为DOM集合解绑事件代理
                 * @param {String} selector 目标子元素选择器
                 * @param {String} type 事件名称
                 * @param {Function} handler 处理函数
                 * @param {Boolean} capture 是否在捕获阶段监听
                 * @return {this}
                 */
                NodeWrap.prototype.undelegate = function (selector, type, handler, capture) {
                    if (capture === void 0) {
                        capture = false;
                    }
                    return this.each(function (el) {
                        return removeDelegate(el, selector, type, handler, capture);
                    });
                };
                /**
                 * 从DOM树中移除
                 * @return {this}
                 */
                NodeWrap.prototype.remove = function () {
                    return this.each(function (el) {
                        return removeEl(el);
                    });
                };
                return NodeWrap;
            }();
            exports.NodeWrap = NodeWrap;
            /**
             * 根据选择器查询并得到目标元素的wrap包装器
             * @param {String} selector 选择器,另外支持 HTMLString||NodeList||NodeArray||HTMLElement
             * @param {HTMLElement} container 父容器
             * @return {Object}
             */
            function $(selector, container) {
                return selector.constructor === NodeWrap ? selector : new NodeWrap(selector, container);
            }
            /***/
        },
        /* 7 */
        /***/function (module, exports, __webpack_require__) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
                return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
            } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
            }; // @flow
            var _toxicPredicateFunctions = __webpack_require__(0);
            function formatter(tag, msg) {
                if (!(0, _toxicPredicateFunctions.isString)(tag)) throw new TypeError("Log's method only acccept string as argument, but not " + tag + " in " + (typeof tag === "undefined" ? "undefined" : _typeof(tag)));
                if (!(0, _toxicPredicateFunctions.isString)(msg)) return "[" + Log.GLOBAL_TAG + "] > " + tag;
                tag = Log.FORCE_GLOBAL_TAG ? Log.GLOBAL_TAG : tag || Log.GLOBAL_TAG;
                return "[" + tag + "] > " + msg;
            }
            /**
             * Log Object
             */
            var Log = /** @class */function () {
                function Log() {}
                /**
                 * equal to console.error, output `[${tag}] > {$msg}`
                 * @param {string} tag optional, the header of log
                 * @param {string} msg the message
                 */
                Log.error = function (tag, msg) {
                    if (!Log.ENABLE_ERROR) {
                        return;
                    }
                    (console.error || console.warn || console.log).call(console, formatter(tag, msg));
                };
                /**
                 * equal to console.info, output `[${tag}] > {$msg}`
                 * @param {string} tag optional, the header of log
                 * @param {string} msg the message
                 */
                Log.info = function (tag, msg) {
                    if (!Log.ENABLE_INFO) {
                        return;
                    }
                    (console.info || console.log).call(console, formatter(tag, msg));
                };
                /**
                 * equal to console.warn, output `[${tag}] > {$msg}`
                 * @param {string} tag optional, the header of log
                 * @param {string} msg the message
                 */
                Log.warn = function (tag, msg) {
                    if (!Log.ENABLE_WARN) {
                        return;
                    }
                    (console.warn || console.log).call(console, formatter(tag, msg));
                };
                /**
                 * equal to console.debug, output `[${tag}] > {$msg}`
                 * @param {string} tag optional, the header of log
                 * @param {string} msg the message
                 */
                Log.debug = function (tag, msg) {
                    if (!Log.ENABLE_DEBUG) {
                        return;
                    }
                    (console.debug || console.log).call(console, formatter(tag, msg));
                };
                /**
                 * equal to console.verbose, output `[${tag}] > {$msg}`
                 * @param {string} tag optional, the header of log
                 * @param {string} msg the message
                 */
                Log.verbose = function (tag, msg) {
                    if (!Log.ENABLE_VERBOSE) {
                        return;
                    }
                    console.log(formatter(tag, msg));
                };
                /**
                 * @member {string}
                 */
                Log.GLOBAL_TAG = 'chimee';
                /**
                 * @member {boolean}
                 */
                Log.FORCE_GLOBAL_TAG = false;
                /**
                 * @member {boolean}
                 */
                Log.ENABLE_ERROR = true;
                /**
                 * @member {boolean}
                 */
                Log.ENABLE_INFO = true;
                /**
                 * @member {boolean}
                 */
                Log.ENABLE_WARN = true;
                /**
                 * @member {boolean}
                 */
                Log.ENABLE_DEBUG = true;
                /**
                 * @member {boolean}
                 */
                Log.ENABLE_VERBOSE = true;
                return Log;
            }();
            exports.default = Log;
            /***/
        },
        /* 8 */
        /***/function (module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_RESULT__; /**
                                               * UAParser.js v0.7.17
                                               * Lightweight JavaScript-based User-Agent string parser
                                               * https://github.com/faisalman/ua-parser-js
                                               *
                                               * Copyright © 2012-2016 Faisal Salman <fyzlman@gmail.com>
                                               * Dual licensed under GPLv2 & MIT
                                               */
            (function (window, undefined) {
                'use strict';
                //////////////
                // Constants
                /////////////

                var LIBVERSION = '0.7.17',
                    EMPTY = '',
                    UNKNOWN = '?',
                    FUNC_TYPE = 'function',
                    UNDEF_TYPE = 'undefined',
                    OBJ_TYPE = 'object',
                    STR_TYPE = 'string',
                    MAJOR = 'major',
                    // deprecated
                MODEL = 'model',
                    NAME = 'name',
                    TYPE = 'type',
                    VENDOR = 'vendor',
                    VERSION = 'version',
                    ARCHITECTURE = 'architecture',
                    CONSOLE = 'console',
                    MOBILE = 'mobile',
                    TABLET = 'tablet',
                    SMARTTV = 'smarttv',
                    WEARABLE = 'wearable',
                    EMBEDDED = 'embedded';
                ///////////
                // Helper
                //////////
                var util = {
                    extend: function extend(regexes, extensions) {
                        var margedRegexes = {};
                        for (var i in regexes) {
                            if (extensions[i] && extensions[i].length % 2 === 0) {
                                margedRegexes[i] = extensions[i].concat(regexes[i]);
                            } else {
                                margedRegexes[i] = regexes[i];
                            }
                        }
                        return margedRegexes;
                    },
                    has: function has(str1, str2) {
                        if (typeof str1 === "string") {
                            return str2.toLowerCase().indexOf(str1.toLowerCase()) !== -1;
                        } else {
                            return false;
                        }
                    },
                    lowerize: function lowerize(str) {
                        return str.toLowerCase();
                    },
                    major: function major(version) {
                        return (typeof version === 'undefined' ? 'undefined' : _typeof2(version)) === STR_TYPE ? version.replace(/[^\d\.]/g, '').split(".")[0] : undefined;
                    },
                    trim: function trim(str) {
                        return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
                    }
                };
                ///////////////
                // Map helper
                //////////////
                var mapper = {
                    rgx: function rgx(ua, arrays) {
                        //var result = {},
                        var i = 0,
                            j,
                            k,
                            p,
                            q,
                            matches,
                            match; //, args = arguments;
                        /*// construct object barebones
                        for (p = 0; p < args[1].length; p++) {
                            q = args[1][p];
                            result[typeof q === OBJ_TYPE ? q[0] : q] = undefined;
                        }*/
                        // loop through all regexes maps
                        while (i < arrays.length && !matches) {
                            var regex = arrays[i],
                                // even sequence (0,2,4,..)
                            props = arrays[i + 1]; // odd sequence (1,3,5,..)
                            j = k = 0;
                            // try matching uastring with regexes
                            while (j < regex.length && !matches) {
                                matches = regex[j++].exec(ua);
                                if (!!matches) {
                                    for (p = 0; p < props.length; p++) {
                                        match = matches[++k];
                                        q = props[p];
                                        // check if given property is actually array
                                        if ((typeof q === 'undefined' ? 'undefined' : _typeof2(q)) === OBJ_TYPE && q.length > 0) {
                                            if (q.length == 2) {
                                                if (_typeof2(q[1]) == FUNC_TYPE) {
                                                    // assign modified match
                                                    this[q[0]] = q[1].call(this, match);
                                                } else {
                                                    // assign given value, ignore regex match
                                                    this[q[0]] = q[1];
                                                }
                                            } else if (q.length == 3) {
                                                // check whether function or regex
                                                if (_typeof2(q[1]) === FUNC_TYPE && !(q[1].exec && q[1].test)) {
                                                    // call function (usually string mapper)
                                                    this[q[0]] = match ? q[1].call(this, match, q[2]) : undefined;
                                                } else {
                                                    // sanitize match using given regex
                                                    this[q[0]] = match ? match.replace(q[1], q[2]) : undefined;
                                                }
                                            } else if (q.length == 4) {
                                                this[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined;
                                            }
                                        } else {
                                            this[q] = match ? match : undefined;
                                        }
                                    }
                                }
                            }
                            i += 2;
                        }
                        // console.log(this);
                        //return this;
                    },
                    str: function str(_str, map) {
                        for (var i in map) {
                            // check if array
                            if (_typeof2(map[i]) === OBJ_TYPE && map[i].length > 0) {
                                for (var j = 0; j < map[i].length; j++) {
                                    if (util.has(map[i][j], _str)) {
                                        return i === UNKNOWN ? undefined : i;
                                    }
                                }
                            } else if (util.has(map[i], _str)) {
                                return i === UNKNOWN ? undefined : i;
                            }
                        }
                        return _str;
                    }
                };
                ///////////////
                // String map
                //////////////
                var maps = {
                    browser: {
                        oldsafari: {
                            version: {
                                '1.0': '/8',
                                '1.2': '/1',
                                '1.3': '/3',
                                '2.0': '/412',
                                '2.0.2': '/416',
                                '2.0.3': '/417',
                                '2.0.4': '/419',
                                '?': '/'
                            }
                        }
                    },
                    device: {
                        amazon: {
                            model: {
                                'Fire Phone': ['SD', 'KF']
                            }
                        },
                        sprint: {
                            model: {
                                'Evo Shift 4G': '7373KT'
                            },
                            vendor: {
                                'HTC': 'APA',
                                'Sprint': 'Sprint'
                            }
                        }
                    },
                    os: {
                        windows: {
                            version: {
                                'ME': '4.90',
                                'NT 3.11': 'NT3.51',
                                'NT 4.0': 'NT4.0',
                                '2000': 'NT 5.0',
                                'XP': ['NT 5.1', 'NT 5.2'],
                                'Vista': 'NT 6.0',
                                '7': 'NT 6.1',
                                '8': 'NT 6.2',
                                '8.1': 'NT 6.3',
                                '10': ['NT 6.4', 'NT 10.0'],
                                'RT': 'ARM'
                            }
                        }
                    }
                };
                //////////////
                // Regex map
                /////////////
                var regexes = {
                    browser: [[
                    // Presto based
                    /(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i // Opera < 9.80
                    ], [NAME, VERSION], [/(opios)[\/\s]+([\w\.]+)/i // Opera mini on iphone >= 8.0
                    ], [[NAME, 'Opera Mini'], VERSION], [/\s(opr)\/([\w\.]+)/i // Opera Webkit
                    ], [[NAME, 'Opera'], VERSION], [
                    // Mixed
                    /(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i,
                    // Lunascape/Maxthon/Netfront/Jasmine/Blazer
                    // Trident based
                    /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,
                    // Avant/IEMobile/SlimBrowser/Baidu
                    /(?:ms|\()(ie)\s([\w\.]+)/i,
                    // Webkit/KHTML based
                    /(rekonq)\/([\w\.]+)*/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser)\/([\w\.-]+)/i
                    // Chromium/Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS/Bowser
                    ], [NAME, VERSION], [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i // IE11
                    ], [[NAME, 'IE'], VERSION], [/(edge)\/((\d+)?[\w\.]+)/i // Microsoft Edge
                    ], [NAME, VERSION], [/(yabrowser)\/([\w\.]+)/i // Yandex
                    ], [[NAME, 'Yandex'], VERSION], [/(puffin)\/([\w\.]+)/i // Puffin
                    ], [[NAME, 'Puffin'], VERSION], [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i
                    // UCBrowser
                    ], [[NAME, 'UCBrowser'], VERSION], [/(comodo_dragon)\/([\w\.]+)/i // Comodo Dragon
                    ], [[NAME, /_/g, ' '], VERSION], [/(micromessenger)\/([\w\.]+)/i // WeChat
                    ], [[NAME, 'WeChat'], VERSION], [/(QQ)\/([\d\.]+)/i // QQ, aka ShouQ
                    ], [NAME, VERSION], [/m?(qqbrowser)[\/\s]?([\w\.]+)/i // QQBrowser
                    ], [NAME, VERSION], [/xiaomi\/miuibrowser\/([\w\.]+)/i // MIUI Browser
                    ], [VERSION, [NAME, 'MIUI Browser']], [/;fbav\/([\w\.]+);/i // Facebook App for iOS & Android
                    ], [VERSION, [NAME, 'Facebook']], [/headlesschrome(?:\/([\w\.]+)|\s)/i // Chrome Headless
                    ], [VERSION, [NAME, 'Chrome Headless']], [/\swv\).+(chrome)\/([\w\.]+)/i // Chrome WebView
                    ], [[NAME, /(.+)/, '$1 WebView'], VERSION], [/((?:oculus|samsung)browser)\/([\w\.]+)/i], [[NAME, /(.+(?:g|us))(.+)/, '$1 $2'], VERSION], [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i // Android Browser
                    ], [VERSION, [NAME, 'Android Browser']], [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i
                    // Chrome/OmniWeb/Arora/Tizen/Nokia
                    ], [NAME, VERSION], [/(dolfin)\/([\w\.]+)/i // Dolphin
                    ], [[NAME, 'Dolphin'], VERSION], [/((?:android.+)crmo|crios)\/([\w\.]+)/i // Chrome for Android/iOS
                    ], [[NAME, 'Chrome'], VERSION], [/(coast)\/([\w\.]+)/i // Opera Coast
                    ], [[NAME, 'Opera Coast'], VERSION], [/fxios\/([\w\.-]+)/i // Firefox for iOS
                    ], [VERSION, [NAME, 'Firefox']], [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i // Mobile Safari
                    ], [VERSION, [NAME, 'Mobile Safari']], [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i // Safari & Safari Mobile
                    ], [VERSION, NAME], [/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i // Google Search Appliance on iOS
                    ], [[NAME, 'GSA'], VERSION], [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i // Safari < 3.0
                    ], [NAME, [VERSION, mapper.str, maps.browser.oldsafari.version]], [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i], [NAME, VERSION], [
                    // Gecko based
                    /(navigator|netscape)\/([\w\.-]+)/i // Netscape
                    ], [[NAME, 'Netscape'], VERSION], [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,
                    // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror
                    /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i,
                    // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
                    /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,
                    // Other
                    /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,
                    // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Sleipnir
                    /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]+)*/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i // Mosaic
                    ], [NAME, VERSION]
                    /* /////////////////////
                    // Media players BEGIN
                    ////////////////////////
                                 , [
                                 /(apple(?:coremedia|))\/((\d+)[\w\._]+)/i,                          // Generic Apple CoreMedia
                    /(coremedia) v((\d+)[\w\._]+)/i
                    ], [NAME, VERSION], [
                                 /(aqualung|lyssna|bsplayer)\/((\d+)?[\w\.-]+)/i                     // Aqualung/Lyssna/BSPlayer
                    ], [NAME, VERSION], [
                                 /(ares|ossproxy)\s((\d+)[\w\.-]+)/i                                 // Ares/OSSProxy
                    ], [NAME, VERSION], [
                                 /(audacious|audimusicstream|amarok|bass|core|dalvik|gnomemplayer|music on console|nsplayer|psp-internetradioplayer|videos)\/((\d+)[\w\.-]+)/i,
                                                                                        // Audacious/AudiMusicStream/Amarok/BASS/OpenCORE/Dalvik/GnomeMplayer/MoC
                                                                                        // NSPlayer/PSP-InternetRadioPlayer/Videos
                    /(clementine|music player daemon)\s((\d+)[\w\.-]+)/i,               // Clementine/MPD
                    /(lg player|nexplayer)\s((\d+)[\d\.]+)/i,
                    /player\/(nexplayer|lg player)\s((\d+)[\w\.-]+)/i                   // NexPlayer/LG Player
                    ], [NAME, VERSION], [
                    /(nexplayer)\s((\d+)[\w\.-]+)/i                                     // Nexplayer
                    ], [NAME, VERSION], [
                                 /(flrp)\/((\d+)[\w\.-]+)/i                                          // Flip Player
                    ], [[NAME, 'Flip Player'], VERSION], [
                                 /(fstream|nativehost|queryseekspider|ia-archiver|facebookexternalhit)/i
                                                                                        // FStream/NativeHost/QuerySeekSpider/IA Archiver/facebookexternalhit
                    ], [NAME], [
                                 /(gstreamer) souphttpsrc (?:\([^\)]+\)){0,1} libsoup\/((\d+)[\w\.-]+)/i
                                                                                        // Gstreamer
                    ], [NAME, VERSION], [
                                 /(htc streaming player)\s[\w_]+\s\/\s((\d+)[\d\.]+)/i,              // HTC Streaming Player
                    /(java|python-urllib|python-requests|wget|libcurl)\/((\d+)[\w\.-_]+)/i,
                                                                                        // Java/urllib/requests/wget/cURL
                    /(lavf)((\d+)[\d\.]+)/i                                             // Lavf (FFMPEG)
                    ], [NAME, VERSION], [
                                 /(htc_one_s)\/((\d+)[\d\.]+)/i                                      // HTC One S
                    ], [[NAME, /_/g, ' '], VERSION], [
                                 /(mplayer)(?:\s|\/)(?:(?:sherpya-){0,1}svn)(?:-|\s)(r\d+(?:-\d+[\w\.-]+){0,1})/i
                                                                                        // MPlayer SVN
                    ], [NAME, VERSION], [
                                 /(mplayer)(?:\s|\/|[unkow-]+)((\d+)[\w\.-]+)/i                      // MPlayer
                    ], [NAME, VERSION], [
                                 /(mplayer)/i,                                                       // MPlayer (no other info)
                    /(yourmuze)/i,                                                      // YourMuze
                    /(media player classic|nero showtime)/i                             // Media Player Classic/Nero ShowTime
                    ], [NAME], [
                                 /(nero (?:home|scout))\/((\d+)[\w\.-]+)/i                           // Nero Home/Nero Scout
                    ], [NAME, VERSION], [
                                 /(nokia\d+)\/((\d+)[\w\.-]+)/i                                      // Nokia
                    ], [NAME, VERSION], [
                                 /\s(songbird)\/((\d+)[\w\.-]+)/i                                    // Songbird/Philips-Songbird
                    ], [NAME, VERSION], [
                                 /(winamp)3 version ((\d+)[\w\.-]+)/i,                               // Winamp
                    /(winamp)\s((\d+)[\w\.-]+)/i,
                    /(winamp)mpeg\/((\d+)[\w\.-]+)/i
                    ], [NAME, VERSION], [
                                 /(ocms-bot|tapinradio|tunein radio|unknown|winamp|inlight radio)/i  // OCMS-bot/tap in radio/tunein/unknown/winamp (no other info)
                                                                                        // inlight radio
                    ], [NAME], [
                                 /(quicktime|rma|radioapp|radioclientapplication|soundtap|totem|stagefright|streamium)\/((\d+)[\w\.-]+)/i
                                                                                        // QuickTime/RealMedia/RadioApp/RadioClientApplication/
                                                                                        // SoundTap/Totem/Stagefright/Streamium
                    ], [NAME, VERSION], [
                                 /(smp)((\d+)[\d\.]+)/i                                              // SMP
                    ], [NAME, VERSION], [
                                 /(vlc) media player - version ((\d+)[\w\.]+)/i,                     // VLC Videolan
                    /(vlc)\/((\d+)[\w\.-]+)/i,
                    /(xbmc|gvfs|xine|xmms|irapp)\/((\d+)[\w\.-]+)/i,                    // XBMC/gvfs/Xine/XMMS/irapp
                    /(foobar2000)\/((\d+)[\d\.]+)/i,                                    // Foobar2000
                    /(itunes)\/((\d+)[\d\.]+)/i                                         // iTunes
                    ], [NAME, VERSION], [
                                 /(wmplayer)\/((\d+)[\w\.-]+)/i,                                     // Windows Media Player
                    /(windows-media-player)\/((\d+)[\w\.-]+)/i
                    ], [[NAME, /-/g, ' '], VERSION], [
                                 /windows\/((\d+)[\w\.-]+) upnp\/[\d\.]+ dlnadoc\/[\d\.]+ (home media server)/i
                                                                                        // Windows Media Server
                    ], [VERSION, [NAME, 'Windows']], [
                                 /(com\.riseupradioalarm)\/((\d+)[\d\.]*)/i                          // RiseUP Radio Alarm
                    ], [NAME, VERSION], [
                                 /(rad.io)\s((\d+)[\d\.]+)/i,                                        // Rad.io
                    /(radio.(?:de|at|fr))\s((\d+)[\d\.]+)/i
                    ], [[NAME, 'rad.io'], VERSION]
                                 //////////////////////
                    // Media players END
                    ////////////////////*/
                    ],
                    cpu: [[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i // AMD64
                    ], [[ARCHITECTURE, 'amd64']], [/(ia32(?=;))/i // IA32 (quicktime)
                    ], [[ARCHITECTURE, util.lowerize]], [/((?:i[346]|x)86)[;\)]/i // IA32
                    ], [[ARCHITECTURE, 'ia32']], [
                    // PocketPC mistakenly identified as PowerPC
                    /windows\s(ce|mobile);\sppc;/i], [[ARCHITECTURE, 'arm']], [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i // PowerPC
                    ], [[ARCHITECTURE, /ower/, '', util.lowerize]], [/(sun4\w)[;\)]/i // SPARC
                    ], [[ARCHITECTURE, 'sparc']], [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i
                    // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
                    ], [[ARCHITECTURE, util.lowerize]]],
                    device: [[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i // iPad/PlayBook
                    ], [MODEL, VENDOR, [TYPE, TABLET]], [/applecoremedia\/[\w\.]+ \((ipad)/ // iPad
                    ], [MODEL, [VENDOR, 'Apple'], [TYPE, TABLET]], [/(apple\s{0,1}tv)/i // Apple TV
                    ], [[MODEL, 'Apple TV'], [VENDOR, 'Apple']], [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i // Dell Streak
                    ], [VENDOR, MODEL, [TYPE, TABLET]], [/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i // Kindle Fire HD
                    ], [MODEL, [VENDOR, 'Amazon'], [TYPE, TABLET]], [/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i // Fire Phone
                    ], [[MODEL, mapper.str, maps.device.amazon.model], [VENDOR, 'Amazon'], [TYPE, MOBILE]], [/\((ip[honed|\s\w*]+);.+(apple)/i // iPod/iPhone
                    ], [MODEL, VENDOR, [TYPE, MOBILE]], [/\((ip[honed|\s\w*]+);/i // iPod/iPhone
                    ], [MODEL, [VENDOR, 'Apple'], [TYPE, MOBILE]], [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,
                    // BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Meizu/Motorola/Polytron
                    /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i // Asus
                    ], [VENDOR, MODEL, [TYPE, MOBILE]], [/\(bb10;\s(\w+)/i // BlackBerry 10
                    ], [MODEL, [VENDOR, 'BlackBerry'], [TYPE, MOBILE]], [
                    // Asus Tablets
                    /android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i], [MODEL, [VENDOR, 'Asus'], [TYPE, TABLET]], [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i], [[VENDOR, 'Sony'], [MODEL, 'Xperia Tablet'], [TYPE, TABLET]], [/android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i], [MODEL, [VENDOR, 'Sony'], [TYPE, MOBILE]], [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i // Nintendo
                    ], [VENDOR, MODEL, [TYPE, CONSOLE]], [/android.+;\s(shield)\sbuild/i // Nvidia
                    ], [MODEL, [VENDOR, 'Nvidia'], [TYPE, CONSOLE]], [/(playstation\s[34portablevi]+)/i // Playstation
                    ], [MODEL, [VENDOR, 'Sony'], [TYPE, CONSOLE]], [/(sprint\s(\w+))/i // Sprint Phones
                    ], [[VENDOR, mapper.str, maps.device.sprint.vendor], [MODEL, mapper.str, maps.device.sprint.model], [TYPE, MOBILE]], [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i // Lenovo tablets
                    ], [VENDOR, MODEL, [TYPE, TABLET]], [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w+)*/i, /(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i
                    // Alcatel/GeeksPhone/Lenovo/Nexian/Panasonic/Sony
                    ], [VENDOR, [MODEL, /_/g, ' '], [TYPE, MOBILE]], [/(nexus\s9)/i // HTC Nexus 9
                    ], [MODEL, [VENDOR, 'HTC'], [TYPE, TABLET]], [/d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p)/i // Huawei
                    ], [MODEL, [VENDOR, 'Huawei'], [TYPE, MOBILE]], [/(microsoft);\s(lumia[\s\w]+)/i // Microsoft Lumia
                    ], [VENDOR, MODEL, [TYPE, MOBILE]], [/[\s\(;](xbox(?:\sone)?)[\s\);]/i // Microsoft Xbox
                    ], [MODEL, [VENDOR, 'Microsoft'], [TYPE, CONSOLE]], [/(kin\.[onetw]{3})/i // Microsoft Kin
                    ], [[MODEL, /\./g, ' '], [VENDOR, 'Microsoft'], [TYPE, MOBILE]], [
                    // Motorola
                    /\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w+)*/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i], [MODEL, [VENDOR, 'Motorola'], [TYPE, MOBILE]], [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i], [MODEL, [VENDOR, 'Motorola'], [TYPE, TABLET]], [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i // HbbTV devices
                    ], [[VENDOR, util.trim], [MODEL, util.trim], [TYPE, SMARTTV]], [/hbbtv.+maple;(\d+)/i], [[MODEL, /^/, 'SmartTV'], [VENDOR, 'Samsung'], [TYPE, SMARTTV]], [/\(dtv[\);].+(aquos)/i // Sharp
                    ], [MODEL, [VENDOR, 'Sharp'], [TYPE, SMARTTV]], [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i], [[VENDOR, 'Samsung'], MODEL, [TYPE, TABLET]], [/smart-tv.+(samsung)/i], [VENDOR, [TYPE, SMARTTV], MODEL], [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i, /sec-((sgh\w+))/i], [[VENDOR, 'Samsung'], MODEL, [TYPE, MOBILE]], [/sie-(\w+)*/i // Siemens
                    ], [MODEL, [VENDOR, 'Siemens'], [TYPE, MOBILE]], [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]+)*/i], [[VENDOR, 'Nokia'], MODEL, [TYPE, MOBILE]], [/android\s3\.[\s\w;-]{10}(a\d{3})/i // Acer
                    ], [MODEL, [VENDOR, 'Acer'], [TYPE, TABLET]], [/android.+([vl]k\-?\d{3})\s+build/i // LG Tablet
                    ], [MODEL, [VENDOR, 'LG'], [TYPE, TABLET]], [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i // LG Tablet
                    ], [[VENDOR, 'LG'], MODEL, [TYPE, TABLET]], [/(lg) netcast\.tv/i // LG SmartTV
                    ], [VENDOR, MODEL, [TYPE, SMARTTV]], [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w+)*/i, /android.+lg(\-?[\d\w]+)\s+build/i], [MODEL, [VENDOR, 'LG'], [TYPE, MOBILE]], [/android.+(ideatab[a-z0-9\-\s]+)/i // Lenovo
                    ], [MODEL, [VENDOR, 'Lenovo'], [TYPE, TABLET]], [/linux;.+((jolla));/i // Jolla
                    ], [VENDOR, MODEL, [TYPE, MOBILE]], [/((pebble))app\/[\d\.]+\s/i // Pebble
                    ], [VENDOR, MODEL, [TYPE, WEARABLE]], [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i // OPPO
                    ], [VENDOR, MODEL, [TYPE, MOBILE]], [/crkey/i // Google Chromecast
                    ], [[MODEL, 'Chromecast'], [VENDOR, 'Google']], [/android.+;\s(glass)\s\d/i // Google Glass
                    ], [MODEL, [VENDOR, 'Google'], [TYPE, WEARABLE]], [/android.+;\s(pixel c)\s/i // Google Pixel C
                    ], [MODEL, [VENDOR, 'Google'], [TYPE, TABLET]], [/android.+;\s(pixel xl|pixel)\s/i // Google Pixel
                    ], [MODEL, [VENDOR, 'Google'], [TYPE, MOBILE]], [/android.+(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d\w)?)\s+build/i, /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+)?)\s+build/i // Redmi Phones
                    ], [[MODEL, /_/g, ' '], [VENDOR, 'Xiaomi'], [TYPE, MOBILE]], [/android.+(mi[\s\-_]*(?:pad)?(?:[\s_]*[\w\s]+)?)\s+build/i // Mi Pad tablets
                    ], [[MODEL, /_/g, ' '], [VENDOR, 'Xiaomi'], [TYPE, TABLET]], [/android.+;\s(m[1-5]\snote)\sbuild/i // Meizu Tablet
                    ], [MODEL, [VENDOR, 'Meizu'], [TYPE, TABLET]], [/android.+a000(1)\s+build/i // OnePlus
                    ], [MODEL, [VENDOR, 'OnePlus'], [TYPE, MOBILE]], [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i // RCA Tablets
                    ], [MODEL, [VENDOR, 'RCA'], [TYPE, TABLET]], [/android.+[;\/]\s*(Venue[\d\s]*)\s+build/i // Dell Venue Tablets
                    ], [MODEL, [VENDOR, 'Dell'], [TYPE, TABLET]], [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i // Verizon Tablet
                    ], [MODEL, [VENDOR, 'Verizon'], [TYPE, TABLET]], [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i // Barnes & Noble Tablet
                    ], [[VENDOR, 'Barnes & Noble'], MODEL, [TYPE, TABLET]], [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i // Barnes & Noble Tablet
                    ], [MODEL, [VENDOR, 'NuVision'], [TYPE, TABLET]], [/android.+[;\/]\s*(zte)?.+(k\d{2})\s+build/i // ZTE K Series Tablet
                    ], [[VENDOR, 'ZTE'], MODEL, [TYPE, TABLET]], [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i // Swiss GEN Mobile
                    ], [MODEL, [VENDOR, 'Swiss'], [TYPE, MOBILE]], [/android.+[;\/]\s*(zur\d{3})\s+build/i // Swiss ZUR Tablet
                    ], [MODEL, [VENDOR, 'Swiss'], [TYPE, TABLET]], [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i // Zeki Tablets
                    ], [MODEL, [VENDOR, 'Zeki'], [TYPE, TABLET]], [/(android).+[;\/]\s+([YR]\d{2}x?.*)\s+build/i, /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(.+)\s+build/i // Dragon Touch Tablet
                    ], [[VENDOR, 'Dragon Touch'], MODEL, [TYPE, TABLET]], [/android.+[;\/]\s*(NS-?.+)\s+build/i // Insignia Tablets
                    ], [MODEL, [VENDOR, 'Insignia'], [TYPE, TABLET]], [/android.+[;\/]\s*((NX|Next)-?.+)\s+build/i // NextBook Tablets
                    ], [MODEL, [VENDOR, 'NextBook'], [TYPE, TABLET]], [/android.+[;\/]\s*(Xtreme\_?)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i], [[VENDOR, 'Voice'], MODEL, [TYPE, MOBILE]], [/android.+[;\/]\s*(LVTEL\-?)?(V1[12])\s+build/i // LvTel Phones
                    ], [[VENDOR, 'LvTel'], MODEL, [TYPE, MOBILE]], [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i // Envizen Tablets
                    ], [MODEL, [VENDOR, 'Envizen'], [TYPE, TABLET]], [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(.*\b)\s+build/i // Le Pan Tablets
                    ], [VENDOR, MODEL, [TYPE, TABLET]], [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i // MachSpeed Tablets
                    ], [MODEL, [VENDOR, 'MachSpeed'], [TYPE, TABLET]], [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i // Trinity Tablets
                    ], [VENDOR, MODEL, [TYPE, TABLET]], [/android.+[;\/]\s*TU_(1491)\s+build/i // Rotor Tablets
                    ], [MODEL, [VENDOR, 'Rotor'], [TYPE, TABLET]], [/android.+(KS(.+))\s+build/i // Amazon Kindle Tablets
                    ], [MODEL, [VENDOR, 'Amazon'], [TYPE, TABLET]], [/android.+(Gigaset)[\s\-]+(Q.+)\s+build/i // Gigaset Tablets
                    ], [VENDOR, MODEL, [TYPE, TABLET]], [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i // Unidentifiable Mobile
                    ], [[TYPE, util.lowerize], VENDOR, MODEL], [/(android.+)[;\/].+build/i // Generic Android Device
                    ], [MODEL, [VENDOR, 'Generic']]
                    /*//////////////////////////
                        // TODO: move to string map
                        ////////////////////////////
                                         /(C6603)/i                                                          // Sony Xperia Z C6603
                        ], [[MODEL, 'Xperia Z C6603'], [VENDOR, 'Sony'], [TYPE, MOBILE]], [
                        /(C6903)/i                                                          // Sony Xperia Z 1
                        ], [[MODEL, 'Xperia Z 1'], [VENDOR, 'Sony'], [TYPE, MOBILE]], [
                                         /(SM-G900[F|H])/i                                                   // Samsung Galaxy S5
                        ], [[MODEL, 'Galaxy S5'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
                        /(SM-G7102)/i                                                       // Samsung Galaxy Grand 2
                        ], [[MODEL, 'Galaxy Grand 2'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
                        /(SM-G530H)/i                                                       // Samsung Galaxy Grand Prime
                        ], [[MODEL, 'Galaxy Grand Prime'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
                        /(SM-G313HZ)/i                                                      // Samsung Galaxy V
                        ], [[MODEL, 'Galaxy V'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
                        /(SM-T805)/i                                                        // Samsung Galaxy Tab S 10.5
                        ], [[MODEL, 'Galaxy Tab S 10.5'], [VENDOR, 'Samsung'], [TYPE, TABLET]], [
                        /(SM-G800F)/i                                                       // Samsung Galaxy S5 Mini
                        ], [[MODEL, 'Galaxy S5 Mini'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
                        /(SM-T311)/i                                                        // Samsung Galaxy Tab 3 8.0
                        ], [[MODEL, 'Galaxy Tab 3 8.0'], [VENDOR, 'Samsung'], [TYPE, TABLET]], [
                                         /(T3C)/i                                                            // Advan Vandroid T3C
                        ], [MODEL, [VENDOR, 'Advan'], [TYPE, TABLET]], [
                        /(ADVAN T1J\+)/i                                                    // Advan Vandroid T1J+
                        ], [[MODEL, 'Vandroid T1J+'], [VENDOR, 'Advan'], [TYPE, TABLET]], [
                        /(ADVAN S4A)/i                                                      // Advan Vandroid S4A
                        ], [[MODEL, 'Vandroid S4A'], [VENDOR, 'Advan'], [TYPE, MOBILE]], [
                                         /(V972M)/i                                                          // ZTE V972M
                        ], [MODEL, [VENDOR, 'ZTE'], [TYPE, MOBILE]], [
                                         /(i-mobile)\s(IQ\s[\d\.]+)/i                                        // i-mobile IQ
                        ], [VENDOR, MODEL, [TYPE, MOBILE]], [
                        /(IQ6.3)/i                                                          // i-mobile IQ IQ 6.3
                        ], [[MODEL, 'IQ 6.3'], [VENDOR, 'i-mobile'], [TYPE, MOBILE]], [
                        /(i-mobile)\s(i-style\s[\d\.]+)/i                                   // i-mobile i-STYLE
                        ], [VENDOR, MODEL, [TYPE, MOBILE]], [
                        /(i-STYLE2.1)/i                                                     // i-mobile i-STYLE 2.1
                        ], [[MODEL, 'i-STYLE 2.1'], [VENDOR, 'i-mobile'], [TYPE, MOBILE]], [
                                         /(mobiistar touch LAI 512)/i                                        // mobiistar touch LAI 512
                        ], [[MODEL, 'Touch LAI 512'], [VENDOR, 'mobiistar'], [TYPE, MOBILE]], [
                                         /////////////
                        // END TODO
                        ///////////*/
                    ],
                    engine: [[/windows.+\sedge\/([\w\.]+)/i // EdgeHTML
                    ], [VERSION, [NAME, 'EdgeHTML']], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i // iCab
                    ], [NAME, VERSION], [/rv\:([\w\.]+).*(gecko)/i // Gecko
                    ], [VERSION, NAME]],
                    os: [[
                    // Windows based
                    /microsoft\s(windows)\s(vista|xp)/i // Windows (iTunes)
                    ], [NAME, VERSION], [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s]+\w)*/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i], [NAME, [VERSION, mapper.str, maps.os.windows.version]], [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i], [[NAME, 'Windows'], [VERSION, mapper.str, maps.os.windows.version]], [
                    // Mobile/Embedded OS
                    /\((bb)(10);/i // BlackBerry 10
                    ], [[NAME, 'BlackBerry'], VERSION], [/(blackberry)\w*\/?([\w\.]+)*/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,
                    // Android/WebOS/Palm/QNX/Bada/RIM/MeeGo/Contiki
                    /linux;.+(sailfish);/i // Sailfish OS
                    ], [NAME, VERSION], [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i // Symbian
                    ], [[NAME, 'Symbian'], VERSION], [/\((series40);/i // Series 40
                    ], [NAME], [/mozilla.+\(mobile;.+gecko.+firefox/i // Firefox OS
                    ], [[NAME, 'Firefox OS'], VERSION], [
                    // Console
                    /(nintendo|playstation)\s([wids34portablevu]+)/i,
                    // GNU/Linux based
                    /(mint)[\/\s\(]?(\w+)*/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]+)*/i,
                    // Joli/Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware
                    // Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus
                    /(hurd|linux)\s?([\w\.]+)*/i, /(gnu)\s?([\w\.]+)*/i // GNU
                    ], [NAME, VERSION], [/(cros)\s[\w]+\s([\w\.]+\w)/i // Chromium OS
                    ], [[NAME, 'Chromium OS'], VERSION], [
                    // Solaris
                    /(sunos)\s?([\w\.]+\d)*/i // Solaris
                    ], [[NAME, 'Solaris'], VERSION], [
                    // BSD based
                    /\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i // FreeBSD/NetBSD/OpenBSD/PC-BSD/DragonFly
                    ], [NAME, VERSION], [/(haiku)\s(\w+)/i // Haiku
                    ], [NAME, VERSION], [/cfnetwork\/.+darwin/i, /ip[honead]+(?:.*os\s([\w]+)\slike\smac|;\sopera)/i // iOS
                    ], [[VERSION, /_/g, '.'], [NAME, 'iOS']], [/(mac\sos\sx)\s?([\w\s\.]+\w)*/i, /(macintosh|mac(?=_powerpc)\s)/i // Mac OS
                    ], [[NAME, 'Mac OS'], [VERSION, /_/g, '.']], [
                    // Other
                    /((?:open)?solaris)[\/\s-]?([\w\.]+)*/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,
                    // Plan9/Minix/BeOS/OS2/AmigaOS/MorphOS/RISCOS/OpenVMS
                    /(unix)\s?([\w\.]+)*/i // UNIX
                    ], [NAME, VERSION]]
                };
                /////////////////
                // Constructor
                ////////////////
                /*
                var Browser = function (name, version) {
                    this[NAME] = name;
                    this[VERSION] = version;
                };
                var CPU = function (arch) {
                    this[ARCHITECTURE] = arch;
                };
                var Device = function (vendor, model, type) {
                    this[VENDOR] = vendor;
                    this[MODEL] = model;
                    this[TYPE] = type;
                };
                var Engine = Browser;
                var OS = Browser;
                */
                var UAParser = function UAParser(uastring, extensions) {
                    if ((typeof uastring === 'undefined' ? 'undefined' : _typeof2(uastring)) === 'object') {
                        extensions = uastring;
                        uastring = undefined;
                    }
                    if (!(this instanceof UAParser)) {
                        return new UAParser(uastring, extensions).getResult();
                    }
                    var ua = uastring || (window && window.navigator && window.navigator.userAgent ? window.navigator.userAgent : EMPTY);
                    var rgxmap = extensions ? util.extend(regexes, extensions) : regexes;
                    //var browser = new Browser();
                    //var cpu = new CPU();
                    //var device = new Device();
                    //var engine = new Engine();
                    //var os = new OS();
                    this.getBrowser = function () {
                        var browser = { name: undefined, version: undefined };
                        mapper.rgx.call(browser, ua, rgxmap.browser);
                        browser.major = util.major(browser.version); // deprecated
                        return browser;
                    };
                    this.getCPU = function () {
                        var cpu = { architecture: undefined };
                        mapper.rgx.call(cpu, ua, rgxmap.cpu);
                        return cpu;
                    };
                    this.getDevice = function () {
                        var device = { vendor: undefined, model: undefined, type: undefined };
                        mapper.rgx.call(device, ua, rgxmap.device);
                        return device;
                    };
                    this.getEngine = function () {
                        var engine = { name: undefined, version: undefined };
                        mapper.rgx.call(engine, ua, rgxmap.engine);
                        return engine;
                    };
                    this.getOS = function () {
                        var os = { name: undefined, version: undefined };
                        mapper.rgx.call(os, ua, rgxmap.os);
                        return os;
                    };
                    this.getResult = function () {
                        return {
                            ua: this.getUA(),
                            browser: this.getBrowser(),
                            engine: this.getEngine(),
                            os: this.getOS(),
                            device: this.getDevice(),
                            cpu: this.getCPU()
                        };
                    };
                    this.getUA = function () {
                        return ua;
                    };
                    this.setUA = function (uastring) {
                        ua = uastring;
                        //browser = new Browser();
                        //cpu = new CPU();
                        //device = new Device();
                        //engine = new Engine();
                        //os = new OS();
                        return this;
                    };
                    return this;
                };
                UAParser.VERSION = LIBVERSION;
                UAParser.BROWSER = {
                    NAME: NAME,
                    MAJOR: MAJOR,
                    VERSION: VERSION
                };
                UAParser.CPU = {
                    ARCHITECTURE: ARCHITECTURE
                };
                UAParser.DEVICE = {
                    MODEL: MODEL,
                    VENDOR: VENDOR,
                    TYPE: TYPE,
                    CONSOLE: CONSOLE,
                    MOBILE: MOBILE,
                    SMARTTV: SMARTTV,
                    TABLET: TABLET,
                    WEARABLE: WEARABLE,
                    EMBEDDED: EMBEDDED
                };
                UAParser.ENGINE = {
                    NAME: NAME,
                    VERSION: VERSION
                };
                UAParser.OS = {
                    NAME: NAME,
                    VERSION: VERSION
                };
                //UAParser.Utils = util;
                ///////////
                // Export
                //////////
                // check js environment
                if ((typeof exports === 'undefined' ? 'undefined' : _typeof2(exports)) !== UNDEF_TYPE) {
                    // nodejs env
                    if ((typeof module === 'undefined' ? 'undefined' : _typeof2(module)) !== UNDEF_TYPE && module.exports) {
                        exports = module.exports = UAParser;
                    }
                    // TODO: test!!!!!!!!
                    /*
                    if (require && require.main === module && process) {
                        // cli
                        var jsonize = function (arr) {
                            var res = [];
                            for (var i in arr) {
                                res.push(new UAParser(arr[i]).getResult());
                            }
                            process.stdout.write(JSON.stringify(res, null, 2) + '\n');
                        };
                        if (process.stdin.isTTY) {
                            // via args
                            jsonize(process.argv.slice(2));
                        } else {
                            // via pipe
                            var str = '';
                            process.stdin.on('readable', function() {
                                var read = process.stdin.read();
                                if (read !== null) {
                                    str += read;
                                }
                            });
                            process.stdin.on('end', function () {
                                jsonize(str.replace(/\n$/, '').split('\n'));
                            });
                        }
                    }
                    */
                    exports.UAParser = UAParser;
                } else {
                    // requirejs env (optional)
                    if ("function" === FUNC_TYPE && __webpack_require__(9)) {
                        !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
                            return UAParser;
                        }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
                    } else if (window) {
                        // browser env
                        window.UAParser = UAParser;
                    }
                }
                // jQuery/Zepto specific (optional)
                // Note:
                //   In AMD env the global scope should be kept clean, but jQuery is an exception.
                //   jQuery always exports to global scope, unless jQuery.noConflict(true) is used,
                //   and we should catch that.
                var $ = window && (window.jQuery || window.Zepto);
                if ((typeof $ === 'undefined' ? 'undefined' : _typeof2($)) !== UNDEF_TYPE) {
                    var parser = new UAParser();
                    $.ua = parser.getResult();
                    $.ua.get = function () {
                        return parser.getUA();
                    };
                    $.ua.set = function (uastring) {
                        parser.setUA(uastring);
                        var result = parser.getResult();
                        for (var prop in result) {
                            $.ua[prop] = result[prop];
                        }
                    };
                }
            })((typeof window === 'undefined' ? 'undefined' : _typeof2(window)) === 'object' ? window : this);
            /***/
        },
        /* 9 */
        /***/function (module, exports) {
            /* WEBPACK VAR INJECTION */(function (__webpack_amd_options__) {
                module.exports = __webpack_amd_options__;
                /* WEBPACK VAR INJECTION */
            }).call(exports, {});
            /***/
        }]
        /******/
        )["default"]
    );
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _mangoHelper = __webpack_require__(0);

var _index = __webpack_require__(5);

var _index2 = _interopRequireDefault(_index);

var _config = __webpack_require__(6);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
// @flow

var LOG_TAG = 'mango-kernel';
var kernelEvents = ['mediaInfo', 'heartbeat', 'error'];
var boxSuffixMap = {
    flv: '.flv',
    hls: '.m3u8',
    mp4: '.mp4'
};
var ChimeeKernel = /** @class */function (_super) {
    __extends(ChimeeKernel, _super);
    /**
       * kernelWrapper
       * @param {any} wrap videoElement
       * @param {any} option
       * @class kernel
       */
    function ChimeeKernel(videoElement, config) {
        var _this = _super.call(this) || this;
        _this.VERSION = process.env.VERSION;
        if (!(0, _mangoHelper.isElement)(videoElement)) throw new Error('You must pass in an video element to the chimee-kernel');
        // copy and maintain only one config for chimee-kernel
        // actually kernel is disposable in most situation nowaday
        _this.config = (0, _mangoHelper.deepAssign)({}, _config2.default, config);
        _this.videoElement = videoElement;
        _this.initVideoKernel();
        _this.bindEvents(_this.videoKernel);
        return _this;
    }
    ChimeeKernel.prototype.destroy = function () {
        this.bindEvents(this.videoKernel, true);
        this.videoKernel.destroy();
    };
    ChimeeKernel.prototype.initVideoKernel = function () {
        var config = this.config;
        var box = this.chooseBox(config);
        this.box = box;
        var VideoKernel = this.chooseVideoKernel(this.box, config.preset);
        if (!(0, _mangoHelper.isFunction)(VideoKernel)) throw new Error("We can't find video kernel for " + box + ". Please check your config and make sure it's installed or provided");
        var customConfig = config.presetConfig[this.box] || {};
        // TODO: nowaday, kernels all get config from one config
        // it's not a good way, because custom config may override kernel config
        // so we may remove this code later
        (0, _mangoHelper.deepAssign)(config, customConfig);
        this.videoKernel = new VideoKernel(this.videoElement, config, customConfig);
    };
    // return the config box
    // or choose the right one according to the src
    ChimeeKernel.prototype.chooseBox = function (_a) {
        var src = _a.src,
            box = _a.box;
        if ((0, _mangoHelper.isString)(box) && box) return box;
        src = src.toLowerCase();
        for (var key in boxSuffixMap) {
            var suffix = boxSuffixMap[key];
            if (src.indexOf(suffix) > -1) return key;
        }
        return 'native';
    };
    // choose the right video kernel according to the box setting
    ChimeeKernel.prototype.chooseVideoKernel = function (box, preset) {
        switch (box) {
            case 'native':
                // $FlowFixMe: it's the same as videoKernel
                return _index2.default;
            case 'mp4':
                return this.getMp4Kernel(preset.mp4);
            case 'flv':
            case 'hls':
                return preset[box];
            default:
                throw new Error("We currently do not support box " + box + ", please contact us through https://github.com/Chimeejs/chimee/issues.");
        }
    };
    // fetch the legal mp4 kernel
    // if it's not exist or not support
    // we will fall back to the native video kernel
    ChimeeKernel.prototype.getMp4Kernel = function (mp4Kernel) {
        var hasLegalMp4Kernel = mp4Kernel && (0, _mangoHelper.isFunction)(mp4Kernel.isSupport);
        // $FlowFixMe: we have make sure it's an kernel now
        var supportMp4Kernel = hasLegalMp4Kernel && mp4Kernel.isSupport();
        // $FlowFixMe: we have make sure it's an kernel now
        if (supportMp4Kernel) return mp4Kernel;
        if (hasLegalMp4Kernel) this.warnLog('mp4 decode is not support in this browser, we will switch to the native video kernel');
        this.box = 'native';
        // $FlowFixMe: it's the same as videoKernel
        return _index2.default;
    };
    ChimeeKernel.prototype.errorLog = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.emit('error', new Error(args[0]));
        return _mangoHelper.Log.error.apply(_mangoHelper.Log, [LOG_TAG].concat(args));
    };
    ChimeeKernel.prototype.warnLog = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return _mangoHelper.Log.warn.apply(_mangoHelper.Log, [LOG_TAG].concat(args));
    };
    ChimeeKernel.prototype.bindEvents = function (videoKernel, remove) {
        var _this = this;
        if (remove === void 0) {
            remove = false;
        }
        kernelEvents.forEach(function (eventName) {
            /* istanbul ignore next  */
            // $FlowFixMe: we have make sure it's legal now
            videoKernel[remove ? 'off' : 'on'](eventName, function (_a) {
                var data = (_a === void 0 ? {} : _a).data;
                _this.emit(eventName, data);
            });
        });
    };
    ChimeeKernel.prototype.attachMedia = function () {
        this.videoKernel.attachMedia();
    };
    ChimeeKernel.prototype.load = function (src) {
        if (src === void 0) {
            src = this.config.src;
        }
        this.config.src = src;
        this.videoKernel.load(src);
    };
    ChimeeKernel.prototype.startLoad = function () {
        /* istanbul ignore if */
        if (!(0, _mangoHelper.isFunction)(this.videoKernel.startLoad)) throw new Error('This video kernel do not support startLoad, please contact us on https://github.com/Chimeejs/chimee/issues');
        this.videoKernel.startLoad(this.config.src);
    };
    ChimeeKernel.prototype.stopLoad = function () {
        /* istanbul ignore else */
        if ((0, _mangoHelper.isFunction)(this.videoKernel.stopLoad)) this.videoKernel.stopLoad();
    };
    ChimeeKernel.prototype.play = function () {
        this.videoKernel.play();
    };
    ChimeeKernel.prototype.pause = function () {
        this.videoKernel.pause();
    };
    Object.defineProperty(ChimeeKernel.prototype, "currentTime", {
        get: function get() {
            return this.videoElement.currentTime || 0;
        },
        enumerable: true,
        configurable: true
    });
    ChimeeKernel.prototype.seek = function (seconds) {
        if (!(0, _mangoHelper.isNumber)(seconds)) {
            this.errorLog("When you try to seek, you must offer us a number, but not " + (typeof seconds === 'undefined' ? 'undefined' : _typeof(seconds)));
            return;
        }
        this.videoKernel.seek(seconds);
    };
    ChimeeKernel.prototype.refresh = function () {
        this.videoKernel.refresh();
    };
    return ChimeeKernel;
}(_mangoHelper.CustEvent);
exports.default = ChimeeKernel;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _mangoHelper = __webpack_require__(0);

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
// @flow

var tempCurrentTime = 0;
var NativeVideoKernel = /** @class */function (_super) {
    __extends(NativeVideoKernel, _super);
    function NativeVideoKernel(videoElement, config, customConfig) {
        var _this = _super.call(this) || this;
        if (!(0, _mangoHelper.isElement)(videoElement)) throw new Error("You must pass in an legal video element but not " + (typeof videoElement === 'undefined' ? 'undefined' : _typeof(videoElement)));
        _this.video = videoElement;
        _this.config = config;
        _this.customConfig = customConfig;
        return _this;
    }
    /* istanbul ignore next  */
    NativeVideoKernel.isSupport = function () {
        return true;
    };
    NativeVideoKernel.prototype.load = function (src) {
        this.video.setAttribute('src', src);
        this.video.src = src;
    };
    NativeVideoKernel.prototype.startLoad = function (src) {
        /* istanbul ignore next */
        var currentTime = this.video.currentTime || tempCurrentTime;
        this.load(src);
        this.seek(currentTime);
    };
    // https://developer.mozilla.org/de/docs/Web/HTML/Using_HTML5_audio_and_video#Stopping_the_download_of_media
    NativeVideoKernel.prototype.stopLoad = function () {
        tempCurrentTime = this.video.currentTime;
        this.video.src = '';
        this.video.removeAttribute('src');
    };
    NativeVideoKernel.prototype.destroy = function () {
        /* istanbul ignore next  */
        if ((0, _mangoHelper.isElement)(this.video)) this.stopLoad();
    };
    NativeVideoKernel.prototype.play = function () {
        return this.video.play();
    };
    NativeVideoKernel.prototype.pause = function () {
        return this.video.pause();
    };
    NativeVideoKernel.prototype.refresh = function () {
        this.video.src = this.config.src;
    };
    NativeVideoKernel.prototype.attachMedia = function () {};
    NativeVideoKernel.prototype.seek = function (seconds) {
        this.video.currentTime = seconds;
    };
    return NativeVideoKernel;
}(_mangoHelper.CustEvent);
exports.default = NativeVideoKernel;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    isLive: false,
    box: '',
    preset: {},
    presetConfig: {}
};

/***/ })
/******/ ])["default"];
});